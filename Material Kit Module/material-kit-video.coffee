m = require 'material-kit'

exports.defaults = {
  video:undefined
  superLayer:undefined
  height:m.px(205)
  width:m.px(100)
  backgroundColor:"transparent"
  autoplay:true
  constraints:{top:0}
  max:true
  progressColor: "blue800"
  mute:false
  loop:false
  idleLimit:3
  showPlayStop:true
  image:undefined
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
  setup = m.utils.setupComponent(array, exports.defaults)
  if setup.max
      ratio = 0.5625
      setup.width = m.device.width
      setup.height = setup.width * 0.5625

  videoLayer = new VideoLayer
    superLayer:setup.superLayer
    video:setup.video
    height:setup.height
    width:setup.width
    backgroundColor:setup.backgroundColor
    name:"video"

  if setup.image
    videoLayer.image = setup.image

  videoLayer.player.autoplay = setup.autoplay
  videoLayer.player.muted = setup.mute
  videoLayer.player.loop = setup.loop

  if setup.constraints
    videoLayer.constraints = setup.constraints
    m.layout.set(videoLayer)

  videoLayer.controls = new Layer
    height:videoLayer.height
    width:videoLayer.width
    superLayer:videoLayer
    backgroundColor:"transparent"
    name:"controls"

  UIset = ->
    videoLayer.isFullScreen = false
    videoLayer.playstop = new Layer
      backgroundColor:m.color("black")
      superLayer:videoLayer.controls
      borderRadius:m.px(50)
      height:m.px(50)
      width:m.px(50)
      opacity:.6
      name:"play/stop"
    if setup.showPlayStop == false
      videoLayer.playstop.opacity = 0
    videoLayer.playstop.center()

    videoLayer.pause = new m.Icon
    	name:"pause"
    	color:"white"

    videoLayer.play = new m.Icon
    	name:"play_arrow"
    	color:"white"

    videoLayer.fullscreen = new m.Icon
    	name:"fullscreen"
    	color:"white"

    videoLayer.fullscreen.constraints =
      bottom:0
      trailing:10

    videoLayer.fullscreenExit = new m.Icon
    	name:"fullscreen_exit"
    	color:"white"

    videoLayer.fullscreenExit.constraints =
      bottom:0
      trailing:10

    m.layout.set(videoLayer.fullscreen)

    videoLayer.play.visible = false
    videoLayer.fullscreenExit.visible = false

    videoLayer.controls.addSubLayer(videoLayer.pause)
    videoLayer.controls.addSubLayer(videoLayer.play)
    videoLayer.controls.addSubLayer(videoLayer.fullscreen)
    videoLayer.controls.addSubLayer(videoLayer.fullscreenExit)
    videoLayer.pause.center()
    videoLayer.play.center()


    videoLayer.currentTime = new m.Text
      text:m.utils.toHHMMSS(videoLayer.player.currentTime)
      color:"white"
      constraints:{bottom:8, leading:17}
      superLayer:videoLayer.controls
      fontSize:14
      name:"currentTime"

    videoLayer.endTime = new m.Text
      text:m.utils.toHHMMSS(videoLayer.player.duration)
      color:"white"
      constraints:{bottomEdges:videoLayer.currentTime, trailing:[videoLayer.fullscreen, 10]}
      superLayer:videoLayer.controls
      fontSize:14
      name:"endTime"

    videoLayer.timebar = new Layer
      superLayer:videoLayer.controls
      backgroundColor:m.color("grey300")
      name:"timebar"
      opacity:.7

    videoLayer.timebar.constraints =
      leading:[videoLayer.currentTime, 20]
      trailing:[videoLayer.endTime, 20]
      height:3
      verticalCenter:videoLayer.currentTime
    m.layout.set(videoLayer.timebar)

    videoLayer.seeker = new Layer
      backgroundColor:"transparent"
      superLayer:videoLayer.controls
      name:"seeker"

    videoLayer.seeker.constraints =
      width:50
      height:50
      verticalCenter:videoLayer.currentTime
    m.layout.set(videoLayer.seeker)

    videoLayer.seekerDot = new Layer
      width:m.px(15)
      height:m.px(15)
      borderRadius:m.px(15)
      backgroundColor:m.color(setup.progressColor)
      superLayer:videoLayer.seeker
      name:"seekerDot"

    videoLayer.seekerDot.center()

    videoLayer.progressBar = new Layer
      backgroundColor:m.color(setup.progressColor)
      width:0
      superLayer:videoLayer.controls
      name:"progress bar"

    videoLayer.progressBar.constraints =
      height:3
      verticalCenter:videoLayer.timebar

    m.layout.set(target:[videoLayer.seeker, videoLayer.progressBar])

    videoLayer.seekerOffset = (videoLayer.seeker.width/2 - videoLayer.seekerDot.width/2)
    videoLayer.seeker.x = videoLayer.timebar.x - videoLayer.seekerOffset
    videoLayer.progressBar.x = videoLayer.timebar.x

    #Handle Idelness
    idleTime = 0
    Utils.interval 1, ->
      idleTime++
      if idleTime > setup.idleLimit && videoLayer.player.paused == false && videoLayer.seeker.working != true
        videoLayer.controls.animate
          properties:(opacity:0)
          time:.25
        videoLayer.playstop.visible = false
      else
        videoLayer.controls.opacity = 1
        videoLayer.playstop.visible = true

    videoLayer.controls.on Events.TouchStart, ->
      if idleTime > setup.idleLimit
        idleTime = 0
      else
        idleTime = 5

    videoLayer.playstop.on Events.TouchEnd, ->
      if videoLayer.player.paused
        videoLayer.play.visible = false
        videoLayer.pause.visible = true
        videoLayer.player.play()
      else
        videoLayer.play.visible = true
        videoLayer.pause.visible = false
        videoLayer.player.pause()

    videoLayer.fullscreen.on Events.TouchEnd, ->
        videoLayer.fullscreen.visible = false
        videoLayer.fullscreenExit.visible = true
        videoLayer.cacheProps = videoLayer.props
        videoLayer.cacheAlign = videoLayer.constraints.align

        if videoLayer.onFullScreen
          videoLayer.onFullScreen()

        idleTime = 0
        videoLayer.backdrop = new Layer
          backgroundColor:"black"
          width:m.device.width
          height:m.device.height
          name:"backdrop"
        videoLayer.constraints.align = "center"

        videoLayer.animate
          properties:
            width: m.device.width
            height: m.device.width * 0.5625
          time:.5
        m.layout.animate
          target:videoLayer
          time:.5
        if setup.superLayer
          videoLayer.backdrop.superLayer = setup.superLayer
          videoLayer.backdrop.placeBehind(videoLayer)
        else
          videoLayer.backdrop.placeBehind(videoLayer)
        m.addToStack(videoLayer)

    videoLayer.fullscreenExit.on Events.TouchEnd, ->
        videoLayer.fullscreen.visible = true
        videoLayer.fullscreenExit.visible = false
        idleTime = 0
        m.removeFromStack()



    videoLayer.exit = () ->
        videoLayer.animate
          properties:(x:videoLayer.cacheProps.x, y:videoLayer.cacheProps.y, width:videoLayer.cacheProps.width, height:videoLayer.cacheProps.height)
          time:.5

        videoLayer.constraints.align = videoLayer.cacheAlign

        videoLayer.backdrop.animate
          properties:(opacity:0)
          time:.5
          delay:.2
        Utils.delay .7, ->
          videoLayer.backdrop.destroy()

        videoLayer.fullscreen.visible = true
        videoLayer.fullscreenExit.visible = false

        if videoLayer.onFullScreenExit
          videoLayer.onFullScreenExit()

    #Seeker Controls
    videoLayer.seeker.draggable.enabled = true
    videoLayer.seeker.draggable.speedY = 0
    videoLayer.seeker.draggable.speedX = 1
    videoLayer.seeker.draggable.momentum = false
    videoLayer.seeker.draggable.bounce = false

    videoLayer.seeker.on Events.TouchStart, ->
      videoLayer.seeker.scale = 1.2
      videoLayer.seeker.working = true

    videoLayer.seeker.on Events.DragMove, ->
      videoLayer.seeker.working = true
      if videoLayer.seeker.x + videoLayer.seekerOffset < videoLayer.timebar.x
        videoLayer.seeker.x = videoLayer.timebar.x - videoLayer.seekerOffset
      if videoLayer.seeker.maxX > videoLayer.timebar.maxX + videoLayer.seekerOffset
        videoLayer.seeker.maxX = videoLayer.timebar.maxX + videoLayer.seekerOffset
      newCT = videoLayer.player.duration * ((videoLayer.seeker.x + videoLayer.seekerOffset - videoLayer.timebar.x)/videoLayer.timebar.width)
      if newCT < 0
        newCT = 0
      if newCT > videoLayer.player.duration
        newCT = videoLayer.player.duration
      m.utils.update(videoLayer.currentTime, [{text:m.utils.toHHMMSS(newCT)}])

    videoLayer.seeker.on Events.DragEnd, ->
      videoLayer.seeker.scale = 1
      videoLayer.seeker.working = false
      et = videoLayer.player.duration
      newCT = et * ((videoLayer.seeker.x + videoLayer.seekerOffset - videoLayer.timebar.x)/videoLayer.timebar.width)
      if newCT < 0
        newCT = 0
      if newCT > videoLayer.player.duration
        newCT = videoLayer.player.duration
      newCT = Math.round(newCT)
      videoLayer.player.currentTime = newCT


  UIdelegate = ->
    ct = videoLayer.player.currentTime
    et = videoLayer.player.duration
    if videoLayer.seeker.working
        # Do nothing
    else
      m.utils.update(videoLayer.currentTime, [{text:m.utils.toHHMMSS(videoLayer.player.currentTime)}])
      videoLayer.seeker.x = videoLayer.timebar.x + (videoLayer.timebar.width * ct/et) - videoLayer.seekerOffset
      videoLayer.progressBar.width =  videoLayer.seeker.x + videoLayer.seekerOffset - videoLayer.timebar.x

  videoLayer.player.addEventListener("loadeddata", UIset)
  videoLayer.player.addEventListener("timeupdate", UIdelegate)


  return videoLayer
