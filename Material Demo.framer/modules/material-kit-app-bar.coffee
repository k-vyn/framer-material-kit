m = require 'material-kit'

exports.defaults = {
	title:"Title"
	leftAction:undefined
	right:"Edit"
	blur:true
	superLayer:undefined
	type:"navBar"
	backgroundColor:"white"
	tabs:undefined
	titleColor:"black"
	actionColor:"black"
	tabs:undefined
	tabsColor:undefined
	tabsInk:{color:"blueGrey", scale:8}
	tabsBarColor:"yellow"
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)
	bar = new Layer
		name:"App Bar"
		backgroundColor:setup.backgroundColor
		shadowColor: "rgba(0, 0, 0, .12)"
		shadowBlur: m.px(4)
		shadowY: m.px(2)

	bar.constraints =
		leading:0
		trailing:0
		top:0
		height:80

	if setup.tabs
		bar.constraints.height = 128

	barArea = new Layer superLayer:bar, backgroundColor:"transparent"
	barArea.constraints =
		leading:0
		trailing:0
		height:56
		bottom:0

	if setup.tabs && setup.tabs.length > 2
		barArea.constraints.bottom = 48

	if setup.superLayer
		setup.superLayer.addSubLayer(bar)

	m.layout.set([bar, barArea])

	bar.type = setup.type

	for layer in Framer.CurrentContext.layers
		if layer.type == "statusBar"
			@statusBar = layer
			bar.placeBehind(@statusBar)

	if setup.titleColor == "black"
		setup.titleColor = m.utils.autoColor(setup.backgroundColor).toHexString()

	if setup.actionColor == "black"
		setup.actionColor = m.utils.autoColor(setup.backgroundColor).toHexString()

	if typeof setup.title == "string"
		title = new m.Text
			color:setup.titleColor
			fontWeight:"semibold"
			superLayer:barArea
			text:setup.title
			fontSize:20


	# if typeof setup.title == "object"
	# 	title = new m.Text style:"navBarTitle", fontWeight:"semibold", superLayer:barArea, text:setup.title.label.html
	# 	bar.superLayer = setup.title.view

	m.utils.specialChar(title)

	title.constraints =
		bottom:12
		leading:16

	if setup.leftAction
		title.constraints.leading = 73

	m.layout.set
		target:[title]

	if setup.tabs && setup.tabs.length > 2

		handleTabStates = (bar, layer) ->
			tabsArray = Object.keys(bar.tabs)
			for t in tabsArray
				tab = bar.tabs[t]
				if tab == bar.activeTab
					tab.label.opacity = 1
					bar.activeBar.animate
						properties:(x:layer.x)
						time:.25
						curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
				else
					tab.label.opacity = .7

		tabsActiveBar = new Layer
			height:m.px(2)
			width:m.device.width/3
			backgroundColor:m.color(setup.tabsBarColor)
			superLayer:bar
		tabsActiveBar.constraints =
			bottom:0
		bar.activeBar = tabsActiveBar

		bar.tabs = {}
		if setup.tabs.length == 3
			for t, i in setup.tabs
				tab = new Layer
					width:m.device.width/3
					height:m.px(48)
					x:(m.device.width/3) * i
					superLayer:bar
					backgroundColor:"transparent"
					clip:true
				tab.constraints =
					bottom:0
				m.layout.set(tab)
				if setup.tabsColor == undefined
					setup.tabsColor = m.utils.autoColor(setup.backgroundColor).toHexString()
				label = new m.Text
					superLayer:tab
					constraints:{align:"center"}
					text:t
					textTransform:'Uppercase'
					fontSize:14
					color:setup.tabsColor

				tab.label = label

				setup.tabsInk["layer"] = tab
				m.utils.inky(setup.tabsInk)
				bar.tabs[t] = tab


				tab.on Events.TouchEnd, ->
					bar.activeTab = @
					handleTabStates(bar, @)

	bar.activeTab = bar.tabs[setup.tabs[0]]
	bar.title = title
	handleTabStates(bar, setup.tabs[0])


	return bar
