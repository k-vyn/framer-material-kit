m = require 'material-kit'


exports.defaults = {
	constraints:{}
	text: "Material Text Layer"
	type:"text"
	x:0
	y:0
	width:-1
	height:-1
	superLayer:undefined
	style:"default"
	lines:1
	textAlign:"left"
	backgroundColor:"transparent"
	color:"black"
	fontSize: 17
	fontStyle:"regular"
	fontFamily:"Roboto"
	fontWeight:"regular"
	lineHeight:"auto"
	name:"text layer"
	opacity:1
	textTransform:"none"
	letterSpacing:0
	name:"text layer"
}


exports.defaults.props = Object.keys(exports.defaults)

style = document.createElement('style')
style.type = 'text/css'

style.appendChild(document.createTextNode("@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic);\n @import url(https://fonts.googleapis.com/icon?family=Material+Icons); \n"))

document.getElementsByTagName('head')[0].appendChild(style)


exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)
	exceptions = Object.keys(setup)
	textLayer = new Layer backgroundColor:"transparent", name:setup.name
	textLayer.type = "text"
	textLayer.html = setup.text
	for prop in m.lib.layerProps
		if setup[prop]
			if prop == "color"
				setup[prop] = m.utils.color(setup[prop])
			textLayer[prop] = setup[prop]
	for prop in m.lib.layerStyles
		if setup[prop]
			if prop == "lineHeight" && setup[prop] == "auto"
				textLayer.style.lineHeight =  setup.fontSize
			if prop == "fontWeight"
				switch setup[prop]
					when "ultrathin" then setup[prop] = 100
					when "thin" then setup[prop] = 200
					when "light" then setup[prop] = 300
					when "regular" then setup[prop] = 400
					when "medium" then setup[prop] = 500
					when "semibold" then setup[prop] = 600
					when "bold" then setup[prop] = 700
					when "black" then setup[prop] = 800
			if prop == "fontSize" || prop == "lineHeight" || prop == "letterSpacing"
				setup[prop] = m.utils.px(setup[prop]) + "px"
			textLayer.style[prop] = setup[prop]

	textFrame = m.utils.textAutoSize(textLayer)
	textLayer.props = (height:textFrame.height, width:textFrame.width)
	textLayer.constraints = setup.constraints
	m.layout.set
		target:textLayer
	return textLayer
