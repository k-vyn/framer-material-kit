m = require 'material-kit'

exports.defaults = {
	animated:true
	text:"Snackbar Text"
	action:undefined
	actionColor:"limeA200"
	duration:5
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)

	bar = new Layer
		name:"snackbar"
		backgroundColor:"transparent"
		clip:true

	bar.type = "snackbar"
	bar.bg = new Layer
		backgroundColor:"#323232"
		superLayer:bar
		name:"bg"

	navbarExists = 0
	fabExists = undefined

	for l in Framer.CurrentContext.layers
		if l.type == "navbar"
			navbarExists = l

		if l.type == "floating"
			fabExists = l

		if l.type == "snackbar" && l != bar
			l.bg.animate
				properties:(y:bar.height)
				time:.3
				curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
				if l.fabMoved
					l.fabMoved.halted = true
					l.fabMoved.constraints.bottom = fabExists.previousBottom
					m.layout.animate
						target:fabExists
						curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
						time:.3
					Utils.delay setup.duration, ->
						fabExists.constraints.bottom = fabExists.previousBottom
						m.layout.animate
							target:fabExists
							curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
							time:.3

	bar.bringToFront()

	bar.constraints =
		leading:0
		trailing:0
		bottom:[navbarExists, -1]
		height:48

	m.layout.set
		target:[bar]

	bar.bg.props = {width:bar.width, height:bar.height}
	actionWidth = m.px(24)

	if setup.action
		bar.action = new m.Button
			type:"flat"
			superLayer:bar.bg
			text:setup.action
			constraints:{trailing:24, align:"vertical"}
			backgroundColor:"#3232"
			color:setup.actionColor
		actionWidth = bar.action.width + m.px(48)

	bar.text = new m.Text
		fontSize:14
		color:"white"
		superLayer:bar.bg
		constraints:{leading:24, align:"vertical"}
		text:setup.text
		name:"text"
		lineHeight:18

	if m.device.width < actionWidth + bar.text.width + m.px(24)
		bar.text.constraints.width = m.dp(m.device.width) - (m.dp(actionWidth) + 24)
		m.utils.update(bar.text)
		m.layout.set(bar.text)
		bar.constraints.height = m.dp(bar.text.height) + 48
		bar.bg.height = bar.text.height + m.px(48)

		m.layout.set
			target:[bar, bar.text]

		if setup.action
			m.layout.set(bar.action)

	barHeight = bar.bg.height

	if fabExists
		bar.fabMoved = fabExists
		fabExists.previousBottom = fabExists.constraints.bottom
		fabExists.constraints.bottom = fabExists.constraints.bottom + m.dp(barHeight)

	if setup.animated
		bar.bg.y = bar.bg.height
		bar.text.opacity = 0
		bar.bg.animate
			properties:(y:0)
			time:.3
			curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
		bar.text.animate
			properties:(opacity:1)
			time:.3
		if setup.action
			bar.action.animate
				properties:(opacity:1)
				time:.3
		if fabExists
			m.layout.animate
				target:fabExists
				curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
				time:.3

	Utils.delay setup.duration, ->
		bar.bg.animate
			properties:(y:bar.height)
			time:.3
			curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
		bar.text.animate
			properties:(opacity:0)
			time:.3
		if setup.action
			bar.action.animate
				properties:(opacity:0)
				time:.3
		if fabExists && fabExists.halted != true
			fabExists.constraints.bottom = fabExists.previousBottom
			m.layout.animate
				target:fabExists
				curve:"bezier-curve(.2, 0.4, 0.4, 1.0)"
				time:.3
	Utils.delay setup.duration + .3, ->
		bar.destroy()
	return bar
