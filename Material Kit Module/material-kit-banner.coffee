# Banner
m = require 'material-kit'

exports.defaults = {
	app: "App"
	title:"Title"
	message:"Message"
	action:"Action"
	time:"• now"
	icon:undefined
	duration:7
	animated:true
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)
	banner = new Layer
		backgroundColor:"white"
		name:"banner"
		shadowColor: "rgba(0,0,0,.24)"
		shadowBlur: m.px(2)
		shadowY: m.px(2)
	banner.constraints =
		leading:0
		trailing:0
		top:0
		height:74

	# Different positionings for each device
	switch m.device.name
		when "ipad"
			@leadingIcon = 200
			@topIcon = 15
			@topTitle = 11
		when "ipad-pro"
			@leadingIcon = 192
			@topIcon = 12
			@topTitle = 9
		when "iphone-6s-plus"
			@leadingIcon = 15
			@topIcon = 12
			@topTitle = 10
		else
			@leadingIcon = 15
			@topIcon = 8
			@topTitle = 6

	if setup.icon == undefined
		setup.icon = new Layer superLayer:banner
		setup.icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)"
	else
		banner.addSubLayer(setup.icon)

	setup.icon.borderRadius = m.utils.px(4.5)
	setup.icon.name = "icon"
	setup.icon.constraints =
		height:16
		width:16
		leading:@leadingIcon
		top:@topIcon

	app = new m.Text style:"app", text:setup.app, color:"blue", fontWeight:"medium", fontSize:11, superLayer:banner, name:"title"
	app.constraints =
		verticalCenter:setup.icon
		leading:[setup.icon, 5]
	title = new m.Text style:"title", text:setup.title, color:"black", fontSize:13, superLayer:banner, name:"title"
	title.constraints =
		leadingEdges:setup.icon
		top:[setup.icon, 7]

	message = new m.Text style:"title", text:setup.message, color:"grey", fontSize:13, superLayer:banner, name:"title"
	message.constraints =
		leadingEdges:setup.icon
		top:[title, 5]

	time = new m.Text style:"time", text:setup.time, color:"grey", fontSize:11, superLayer:banner, name:"time"
	time.constraints =
		leading:[app, 3]
		bottomEdges: app

	m.layout.set()
	m.utils.bgBlur(banner)

	## Banner Drag settings
	banner.draggable = true
	banner.draggable.horizontal = false
	banner.draggable.constraints =
		y:0

	banner.draggable.bounceOptions =
	    friction: 25
	    tension: 250

	banner.on Events.DragEnd, ->
		if banner.maxY < m.utils.px(68)
			banner.animate
				properties:(maxY:0)
				time:.15
				curve:"ease-in-out"
			Utils.delay .25, ->
				banner.destroy()

	# Buffer that sits above the banner
	bannerBuffer = new Layer maxY:0, name:"buffer", backgroundColor:"#1B1B1C", opacity:.9, superLayer:banner, width:m.device.width, maxY:banner.y, height:m.device.height
	m.utils.bgBlur(bannerBuffer)

	# Animate-in
	if setup.animated == true
		banner.y = 0 - banner.height
		banner.animate
			properties:(y:0)
			time:.25
			curve:"spring(400,20,0)"

	# Animate-out
	if setup.duration
		Utils.delay setup.duration, ->
			banner.animate
				properties:(maxY:0)
				time:.25
				curve:"ease-in-out"
		Utils.delay setup.duration + .25, ->
			banner.destroy()

	# Export Banner
	banner.icon = setup.icon
	banner.app = app
	banner.title = title
	banner.message = message
	return banner
