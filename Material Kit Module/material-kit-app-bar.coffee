m = require 'material-kit'

exports.defaults = {
	title:"Title"
	menu:undefined

	type:"appbar"
	backgroundColor:"white"
	tabs:undefined
	titleColor:"black"
	actionColor:"black"
	tabs:undefined
	tabsColor:undefined
	tabsInk:{color:"blueGrey", scale:8}
	tabsBarColor:"yellow"
	tabsAlt:{color:undefined, opacity:.7}
	tabIcons:undefined
	actions:undefined
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)
	bar = new Layer
		name:"App Bar"
		backgroundColor:m.color(setup.backgroundColor)
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

	barArea = new Layer superLayer:bar, backgroundColor:"transparent", name:"barArea"
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
		setup.titleColor = m.utils.autoColor(bar.backgroundColor).toHexString()

	if setup.actionColor == "black"
		setup.actionColor = m.utils.autoColor(bar.backgroundColor).toHexString()

	if typeof setup.title == "string"
		title = new m.Text
			color:setup.titleColor
			fontWeight:500
			superLayer:barArea
			text:setup.title
			fontSize:20

	m.utils.specialChar(title)


	titleLeading = 16
	if setup.menu
		bar.menu = new m.Icon
			name:setup.menu
			color:setup.actionColor
			superLayer:barArea
			constraints:{leading:16, verticalCenter:title}
			clip:false
		titleLeading = [bar.menu, 16]

		m.utils.inky
			layer:bar.menu
			moveToTap:false
			color:"white"
			opacity:.4
			scale:.7
			startScale:.7


	title.constraints =
		bottom:12
		leading:titleLeading

	if setup.leftAction
		title.constraints.leading = 73


	m.layout.set
		target:[title]

	actionsArray = []
	if setup.actions
		for act, i in setup.actions
			if i == 0
				icon = new m.Icon
					name:act
					superLayer:barArea
					constraints:{trailing:24, verticalCenter:title}
					color:setup.actionColor
					clip:false
				actionsArray.push icon
			else
				icon = new m.Icon
					name:act
					superLayer:barArea
					constraints:{trailing:[actionsArray[i - 1], 24], verticalCenter:title}
					color:setup.actionColor
					clip:false
				actionsArray.push icon

		for act in actionsArray
			m.utils.inky
				layer:act
				moveToTap:false
				color:"white"
				opacity:.4
				scale:.8
				startScale:.7


	if setup.tabs && setup.tabs.length > 2

		handleTabStates = (bar, layer) ->
			tabsArray = Object.keys(bar.tabs)
			activeTabIndex = undefined
			for t, i in tabsArray
				tab = bar.tabs[t]

				if tab == bar.activeTab
					activeTabIndex = i
					bar.views[t].animate
						properties:(x:0)
						time:.25
					tab.label.opacity = 1
					tab.label.color = setup.tabsColor
					bar.activeBar.animate
						properties:(x:layer.x)
						time:.25
						curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
					m.utils.update(title, [{text:m.utils.capitalize(bar.activeTab.label.name)}])
				else
					if activeTabIndex == undefined
						bar.views[t].animate
							properties:(x:m.device.width * -1)
							time:.25
							curve:"cubic-bezier(0.4, 0.0, 0.2, 1)"
					else
						bar.views[t].animate
							properties:(x:m.device.width)
							time:.25
							curve:"cubic-bezier(0.4, 0.0, 0.2, 1)"

					opacity = 1
					color = tab.label.color
					if setup.tabsAlt.opacity != undefined
						opacity = setup.tabsAlt.opacity

					if setup.tabsAlt.color != undefined
						color = setup.tabsAlt.color

					tab.label.opacity = opacity
					tab.label.color = color

		tabsActiveBar = new Layer
			height:m.px(2)
			width:m.device.width/setup.tabs.length
			backgroundColor:m.color(setup.tabsBarColor)
			superLayer:bar
		tabsActiveBar.constraints =
			bottom:0
		bar.activeBar = tabsActiveBar

		bar.tabs = {}
		bar.views = {}
		if setup.tabs.length < 5
			for t, i in setup.tabs
				view = new Layer
					name:"View " + t
					backgroundColor:"transparent"
				view.constraints =
					top:bar
					bottom:0
					width:m.dp(m.device.width)
				bar.views[t] = view
				if i > 0
					view.x = m.device.width
				tab = new Layer
					width:m.device.width/setup.tabs.length
					height:m.px(48)
					x:(m.device.width/setup.tabs.length) * i
					superLayer:bar
					backgroundColor:"transparent"
					clip:true
					name:"tab "
				tab.constraints =
					bottom:0
				m.layout.set(tab)
				if setup.tabsColor == undefined
					setup.tabsColor = m.utils.autoColor(bar.backgroundColor).toHexString()
				label = ""
				if setup.tabIcons
					icon = setup.tabIcons[i]
					label = new m.Icon
						name:icon
						superLayer:tab
						color:setup.tabsColor
						constraints:{align:"center"}
				else
					label = new m.Text
						superLayer:tab
						constraints:{align:"center"}
						text:t
						textTransform:'Uppercase'
						fontSize:14
						color:setup.tabsColor
				label.name = t

				tab.label = label

				setup.tabsInk["layer"] = tab
				m.utils.inky(setup.tabsInk)
				bar.tabs[t] = tab

				tab.on Events.TouchEnd, ->
					bar.activeTab = @
					handleTabStates(bar, @)
	if setup.tabs
		if setup.tabs.length > 2
			bar.activeTab = bar.tabs[setup.tabs[0]]
			handleTabStates(bar, bar.activeTab)
	bar.title = title



	return bar
