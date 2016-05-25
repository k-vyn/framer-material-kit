m = require 'material-kit'

exports.stack = stack = []


exports.addToStack = (layer) ->
  if stack.indexOf(layer) == -1
    stack.push layer

exports.removeFromStack = (layer) ->
  if stack.length > 0
    layerToleave = stack[stack.length - 1]
    if layerToleave.exit != undefined
      layerToleave.exit()
    else
      overlay = new Layer
        backgroundColor:m.color("black")
        width:m.device.width
        height:m.device.height
      overlay.placeBehind(layerToleave)
      layerToleave.constraints =
        leading:m.dp(m.device.width)
      m.layout.animate
        target:layerToleave
        time:.3
      overlay.animate
        properties:(opacity:0)
        time:.5
        delay:.2
      Utils.delay .6, ->
        layerToleave.destroy()
        overlay.destroy()
    stack.pop()
