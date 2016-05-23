m = require 'material-kit'

exports.defaults = {
  name: "star"
  scale: m.device.scale
  color: m.color("black")
  superLayer: undefined
  constraints: undefined
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
  setup = m.utils.setupComponent(array, exports.defaults)
  iconLayer = new Layer
    html:"<i class='material-icons md-24'>#{setup.name}</i>"
    color:m.color(setup.color)
    backgroundColor:"transparent"
    clip:true
    name:setup.name
    superLayer:setup.superLayer
  frame = m.utils.textAutoSize(iconLayer)
  iconLayer.html = "<span style='-webkit-transform: scale(#{setup.scale}); position: absolute;'>" + iconLayer.html
  iconLayer.width = m.px(frame.width)
  iconLayer.height = m.px(frame.height)

  styles = {
    bottom : "10px"
    right: frame.width + "px"
    fontSize : m.px(frame.height) + "px"
  }
  switch m.device.scale
    when 4
      styles.fontSize =  m.px(frame.height)/1.5 + "px"
      styles.bottom = m.px(frame.height) + "px"
      styles.right = frame.width/2.25 + "px"
    when 3
      styles.fontSize =  m.px(frame.height)/1.2 + "px"

  iconLayer.style =
    "display" : "inline-block"
    "font-size" : styles.fontSize
    "text-align" : "center"
    "padding-right" : styles.right
    "padding-bottom" : styles.bottom

  if setup.constraints
    iconLayer.constraints = setup.constraints
    m.layout.set
      target:iconLayer

  return iconLayer
