m = require 'material-kit'

exports.defaults = {
  name: "star"
  scale: m.device.scale
  color: m.color("black")
  superLayer: undefined
  constraints: undefined
  clip:true
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
  setup = m.utils.setupComponent(array, exports.defaults)
  if typeof setup.name == "string"
    iconLayer = new Layer
      html:"<i class='material-icons md-24'>#{setup.name}</i>"
      color:m.color(setup.color)
      backgroundColor:"transparent"
      clip:setup.clip
      name:setup.name
      superLayer:setup.superLayer

    paddingRight = 0
    paddingTop = 0

    switch m.device.scale
      when 4
        paddingTop = m.px(12) + "px"
        paddingRight = m.px(2) + "px"
      when 3
        paddingTop = m.px(10) + "px"
        paddingRight = m.px(6) + "px"
      when 2
        paddingTop = m.px(8) + "px"
        paddingRight = m.px(8) + "px"
      when 1
        paddingTop = m.px(16) + "px"
        paddingRight = m.px(7) + "px"


    frame = m.utils.textAutoSize(iconLayer)
    iconLayer.html = "<span style='-webkit-transform: scale(#{setup.scale}); position: absolute;'>" + iconLayer.html
    iconLayer.width = m.px(24)
    iconLayer.height = m.px(frame.height)

    iconLayer.style =
      "display" : "inline-block"
      "padding-top" : paddingTop
      "padding-right" : paddingRight
      "text-align" : "center"
    if setup.constraints
      iconLayer.constraints = setup.constraints
      m.layout.set
        target:iconLayer

    return iconLayer
  else
    iconLayer = setup.layer
    return iconLayer
