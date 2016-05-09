m = require 'material-kit'


exports.defaults = {
	tab: {
		label: "label"
		icon:"<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='25px' height='25px' viewBox='0 0 25 25' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				<title>1</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='1'>
					<g id='Bottom-Bar/Tab-Bar' transform='translate(-25.000000, -7.000000)' fill='#0076FF'>
						<g id='Placeholders' transform='translate(25.000000, 7.000000)'>
							<rect id='1' x='0' y='0' width='25' height='25' rx='3'></rect>
						</g>
					</g>
				</g>
			</svg>"
		active: undefined
		unactive: undefined
		tabBar: undefined
		type: "tab"
	}
	bar: {
		tabs: []
		start:0
		type:"tabBar"
		backgroundColor:"white"
		activeColor:"blue"
		inactiveColor:"gray"
		blur:true
	}
}

exports.defaults.tab.props = Object.keys(exports.defaults.tab)
exports.defaults.bar.props = Object.keys(exports.defaults.bar)

exports.tab = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults.tab)
	switch m.device.name
		when "iphone-5"
			@tabWidth = 55
		else
			@tabWidth = 75
	tabView = new Layer name:setup.label + " view", backgroundColor:"transparent"
	tabView.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0
	tabBox = new Layer backgroundColor:"transparent", name:setup.label + " tab"
	tabBox.constraints =
		width:@tabWidth
		height:49
	icon = new Layer width:m.utils.px(25), height:m.utils.px(25), backgroundColor:"transparent", name:"icon", superLayer:tabBox
	icon.constraints =
		align:"horizontal"
		top:7
	svgFrame = m.utils.svg(setup.icon)
	icon.html = svgFrame.svg
	icon.width = svgFrame.width
	icon.height = svgFrame.height
	label = new m.Text text:setup.label, superLayer:tabBox, color:"#929292", fontSize:10, name:"label", textTransform:"capitalize"
	label.constraints =
		bottom:2
		horizontalCenter:icon
	m.layout.set()

	# Export Tab
	tabBox.type = "tab"
	tabBox.icon = icon
	tabBox.view = tabView
	tabBox.label = label

	return tabBox

exports.bar = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults.bar)
	if setup.tabs.length == 0
		dummyTab = new exports.tab
		dummyTab2 = new exports.tab
		setup.tabs.push dummyTab
		setup.tabs.push dummyTab2
	tabWidth = 75
	switch exports.device
		when "iphone-5"
			tabWidth = 55
		else
			tabWidth = 75
	tabBar = new Layer backgroundColor:"transparent", name:"tab bar"
	tabBarBG = new BackgroundLayer superLayer:tabBar, name:"tabBar background"
	tabBar.constraints =
		leading:0
		trailing:0
		bottom:0
		height:49
	tabBarBG.constraints =
		leading:0
		trailing:0
		bottom:0
		height:49
	divider = new Layer backgroundColor:"#B2B2B2", name:"tabDivider", superLayer:tabBar
	divider.constraints =
		top:0
		leading:0
		trailing:0
		height:.5
	tabBarBox = new Layer superLayer:tabBar, backgroundColor:"transparent", name:"tabBar box"
	tabBarBox.constraints =
		height:49
		width:setup.tabs.length * tabWidth

	m.layout.set()

	setActive = (tabIndex) ->
		for tab, index in setup.tabs
			if index == tabIndex
				m.utils.changeFill(tab.icon, m.utils.color(setup.activeColor))
				tab.label.color = m.utils.color(setup.activeColor)
				tab.view.visible = true
			else
				m.utils.changeFill(tab.icon, m.utils.color(setup.inactiveColor))
				tab.label.color = m.utils.color(setup.inactiveColor)
				tab.view.visible = false

	for tab, index in setup.tabs
		#Check for vaild tab object
		if tab.type != "tab"
			error(tab.id, 5)

		tabBarBox.addSubLayer(tab)
		# Change colors
		m.utils.changeFill(tab.icon, m.utils.color(setup.inactiveColor))
		tab.label.color = m.utils.color(setup.inactiveColor)
		tabBarBG.backgroundColor = setup.backgroundColor

		if setup.blur
			tabBarBG.backgroundColor = "rgba(255,255,255, .9)"
			m.utils.bgBlur(tabBarBG)

		if index == 0
			tab.constraints.leading = 0
		else
			tab.constraints.leading = setup.tabs[index - 1]

		m.layout.set(tab)

		tab.on Events.TouchStart, ->
			tabIndex = @.x / m.utils.px(tabWidth)
			setActive(tabIndex)
	tabBarBox.constraints =
		align:"horizontal"

	setActive(setup.start)

	m.layout.set()
	return tabBar
