m = require 'material-kit'

exports.defaults = {
	actions:["OK"]
	exit:"Cancel"
	animated:false
	description:undefined
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)

	# Super container
	sheet = new Layer backgroundColor:"transparent"
	sheet.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0
	m.layout.set(sheet)

	# Overlay
	overlay = new Layer backgroundColor:"rgba(0, 0, 0, .4)", superLayer:sheet, name:"overlay"
	overlay.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0
	m.layout.set(overlay)

	# Container
	sheets = new Layer backgroundColor:"transparent", superLayer:sheet
	sheets.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0
	m.layout.set(sheets)

	# Exit Button
	exitButton = new m.Button
		buttonType:"big"
		text:setup.exit
		blur:false
		superLayer:sheets
	exitButton.constraints.bottom = 10

	m.layout.set(exitButton)

	# Actions
	actions = new Layer superLayer:sheets, borderRadius:m.utils.px(12.5), backgroundColor:"rgba(255,255,255, .85)"
	m.utils.bgBlur(actions)


	# Description
	descriptionBuffer = 0
	if setup.description
		description = new m.Text style:"sheetDescription", text:setup.description, superLayer:actions, fontSize:13, color:"#8F8E94", textAlign:"center"
		description.constraints =
			top:21
			align:"horizontal"
			width:m.utils.pt(m.device.width) - 100
		m.layout.set()
		descriptionBuffer = m.utils.pt(description.height) + 42
		divider = new Layer superLayer:actions, backgroundColor:"#D6E3E7"
		divider.constraints =
			height:1
			top:descriptionBuffer
			leading:0
			trailing:0
		m.layout.set([description, divider])


	actions.constraints =
		leading:10
		trailing:10
		bottom:[exitButton, 10]
		height:58 * setup.actions.length + descriptionBuffer
	m.layout.set(actions)


	acts = {}

	for act, index in setup.actions
		o = new Layer superLayer:actions, width:actions.width, backgroundColor:"transparent", borderRadius:m.utils.px(12.5)
		o.constraints =
			top:index * 58 + descriptionBuffer
			height:58
		button = new m.Button text:act, superLayer:o, fontSize:20

		m.utils.specialChar(button)

		button.constraints =
			align:"center"
		button.color = "#FE3824"
		if index != setup.actions.length - 1
			divider = new Layer superLayer:o, width:actions.width, backgroundColor:"#D6E3E7"
			divider.constraints =
				height:1
				bottom:0

		m.layout.set()

		o.on Events.TouchStart, ->
			backgroundColor = "rgba(215,215,215,.7)"
			@.animate
				properties: (backgroundColor: backgroundColor)
				time:.5

		o.on Events.TouchEnd, ->
			@.animate
				properties:(backgroundColor:"transparent")
				time:.5
			sheets.animate
				properties: (maxY:m.device.height+m.utils.px((setup.actions.length + 3) * 58))
				time:.3
			overlay.animate
				properties: (opacity:0)
				time:.3
			Utils.delay .3, ->
				sheet.destroy()
		acts[act] = o

	if setup.animated == true
		overlay.opacity = 0
		sheets.maxY = m.device.height + m.utils.px((setup.actions.length + 3) * 58)
		overlay.animate
			properties:(opacity:1)
			time:.3
		sheets.animate
			properties:(maxY:m.device.height)
			time:.3

	overlay.on Events.TouchEnd, ->
		sheets.animate
			properties: (maxY:m.device.height+m.utils.px((setup.actions.length + 3) * 58))
			time:.3
		overlay.animate
			properties: (opacity:0)
			time:.3
		Utils.delay .3, ->
			sheet.destroy()

	exitButton.on Events.TouchEnd, ->
		sheets.animate
			properties: (maxY:m.device.height+m.utils.px((setup.actions.length + 3) * 58))
			time:.3
		overlay.animate
			properties: (opacity:0)
			time:.3
		Utils.delay .3, ->
			sheet.destroy()

	sheet.cancel = exitButton
	sheet.description = description
	sheet.overlay = overlay
	sheet.actions = acts
	return sheet
