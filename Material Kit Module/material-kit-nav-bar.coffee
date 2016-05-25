m = require 'material-kit'

exports.defaults = {
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)

	navbar = new Layer
		backgroundColor:"black"

	navbar.type = "navbar"

	navbar.constraints =
		bottom:-1
		leading:0
		trailing:0
		height:48

	svgHome = m.utils.svg(m.assets.home)
	svgBack = m.utils.svg(m.assets.back)

	homeButton = new Layer
		superLayer:navbar
		borderRadius:m.utils.px(21)
		backgroundColor:"transparent"
		name:"home"
		clip:true

	homeButton.constraints =
		top:3
		height:42
		width:94
		align:"horizontal"

	homeIcon = new Layer
		superLayer:homeButton
		width:svgHome.width
		height:svgHome.height
		html:svgHome.svg
		backgroundColor:"transparent"
		name:"icon"

	homeIcon.constraints =
		align:"center"

	recentButton = new Layer
		superLayer:navbar
		borderRadius:m.utils.px(21)
		backgroundColor:"transparent"
		name:"recent"
		clip:true

	recentButton.constraints =
		top:3
		height:42
		width:94
		leading:[homeButton, 6]

	recentIcon = new Layer
		superLayer:recentButton
		backgroundColor:"transparent"
		borderColor:"white"
		borderWidth:m.utils.px(2)
		borderRadius:m.utils.px(2)
		name:"icon"

	recentIcon.constraints =
		align:"center"
		width:16
		height:16

	backButton = new Layer
		superLayer:navbar
		borderRadius:m.utils.px(21)
		backgroundColor:"transparent"
		name:"back"
		clip:true

	backButton.constraints =
		top:3
		height:42
		width:94
		trailing:[homeButton, 6]


	backIcon = new Layer
		superLayer:backButton
		width:svgBack.width
		height:svgBack.height
		html:svgBack.svg
		backgroundColor:"transparent"
		name:"icon"

	backIcon.constraints =
		align:"center"

	m.layout.set
		target:[navbar, homeButton, recentButton, backButton, homeIcon, backIcon, recentIcon]

	m.utils.inky
		layer:homeButton
		moveToTap:false
		color: "white"
		scale: 20
		curve: "bezier-curve(1, 0.4, 0.4, 1.0)"
		opacity: .3
	m.utils.inky
			layer:backButton
			moveToTap:false
			color: "white"
			scale: 20
			curve: "bezier-curve(1, 0.4, 0.4, 1.0)"
			opacity: .3
	m.utils.inky
			layer:recentButton
			moveToTap:false
			color: "white"
			scale: 20
			curve: "bezier-curve(1, 0.4, 0.4, 1.0)"
			opacity: .3

	backButton.on Events.TouchEnd, ->
		m.removeFromStack()

	navbar.back = backButton
	navbar.back.backIcon = backIcon
	navbar.home = homeButton
	navbar.home.icon = homeIcon
	navbar.recent = recentButton
	navbar.recent.icon = recentIcon

	Utils.interval .05, ->
		navbar.bringToFront()

	m.layout.set(navbar)
	return navbar
