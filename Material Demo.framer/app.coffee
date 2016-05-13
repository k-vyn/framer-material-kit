m = require "material-kit"

bg = new BackgroundLayer

statusBar = new m.StatusBar
box = new m.NavBar

box.right.on Events.TouchEnd, ->
	sheet = new m.Sheet animated:true