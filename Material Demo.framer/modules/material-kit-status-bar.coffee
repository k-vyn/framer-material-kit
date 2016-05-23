m = require 'material-kit'

exports.defaults = {
	carrier:""
	network:"LTE"
	battery:100
	cellular:2
	style:"light"
	clock24:false
	type:"statusBar"
	backgroundColor:"rgba(0,0,0,.1)"
	color: "black"
	opacity:.6
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)
	statusBar = new Layer backgroundColor:setup.backgroundColor, name:"statusBar.all"

	if setup.style == "dark"
		if setup.backgroundColor == "rgba(0,0,0,.1)"
			statusBar.backgroundColor = m.utils.color("black")
		if setup.color == "black"
			setup.color = "white"
		if setup.opacity == .6
			setup.opacity = 1

	if setup.style == "light" && setup.color != "black"
		setup.opacity = 1

	statusBar.type = setup.type
	statusBar.constraints =
		leading:0
		trailing:0
		height:24

	switch m.device.name
		when "iphone-6s-plus"
			@topConstraint = 5
			@bluetooth = 5

		when "fullscreen"
			@topConstraint = 5
			@bluetooth = - 10
		else
			@topConstraint = 3
			@bluetooth = 3



	@time = m.utils.getTime()
	time = new m.Text style:"statusBarTime", text:m.utils.timeFormatter(@time, setup.clock24), fontSize:14, fontWeight:500, superLayer:statusBar, color:setup.color, name:"time", opacity:setup.opacity
	time.constraints =
		trailing:8
		align:"vertical"
	m.utils.timeDelegate(time, setup.clock24)


	batteryIcon = new Layer superLayer:statusBar, backgroundColor:"transparent", name:"batteryIcon"
	if setup.battery > 70
		highBattery = m.utils.svg(m.assets.batteryHigh)
		batteryIcon.html = highBattery.svg
		batteryIcon.height = highBattery.height
		batteryIcon.width = highBattery.width
		m.utils.changeFill(batteryIcon, setup.color)
		batteryIcon.opacity = setup.opacity

	if setup.battery <= 70 && setup.battery > 20
		midBattery = m.utils.svg(m.assets.batteryMid)
		batteryIcon.html = midBattery.svg
		m.utils.changeFill(batteryIcon, setup.color)

	if setup.battery <= 20
		lowBattery = m.utils.svg(m.assets.batteryLow)
		batteryIcon.html = lowBattery.svg
		m.utils.changeFill(batteryIcon, setup.color)


	batteryIcon.constraints =
		trailing : [time, 7]
		align:"vertical"


	cellularIcon = m.utils.svg(m.assets.cellular)
	cellular = new Layer
		width:cellularIcon.width
		height:cellularIcon.height
		html:cellularIcon.svg
		superLayer:statusBar
		backgroundColor:"transparent"
		opacity: setup.opacity
		name:"cellular"

	cellular.constraints =
		trailing: [batteryIcon, 7]
		align:"vertical"

	m.utils.changeFill(cellular, setup.color)

	wifiIcon = m.utils.svg(m.assets.wifi, setup.color)

	wifi = new Layer
		width:wifiIcon.width
		height:wifiIcon.height
		superLayer:statusBar
		backgroundColor:"transparent"
		name:"wifi"
		html: wifiIcon.svg
		opacity: setup.opacity

	m.utils.changeFill(wifi, setup.color)

	wifi.constraints =
		trailing:[cellular, 4]
		align:"vertical"

	m.layout.set()

	# Export statusBar
	statusBar.battery = {}
	# statusBar.battery.percent = batteryPercent
	statusBar.battery.icon = batteryIcon
	# statusBar.bluetooth = bluetooth
	statusBar.time = time
	# statusBar.wifi = wifi
	statusBar.cellular = cellular

	m.layout.set
		target:[statusBar, time, batteryIcon, cellular, wifi]
	return statusBar
