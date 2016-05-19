# Alert
m = require 'material-kit'

exports.defaults = {
	title: "Title"
	message:"Message"
	actions:["OK", "Cancel"]
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)

	alert = new Layer backgroundColor:"transparent", name:"alert"
	alert.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0

	overlay = new Layer backgroundColor:"#5E5E5E", superLayer:alert, name:"overlay", opacity:.6
	overlay.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0

	modal = new Layer
		backgroundColor:"white"
		superLayer:alert
		borderRadius:m.utils.px(2)
		name:"modal"
		shadowColor:"rgba(0,0,0,.2)"
		shadowY:24
		shadowBlur:24
	modal.constraints =
		align:"center"
		width:280
		height:400

	title = new m.Text
		superLayer:modal
		text:setup.title
		fontWeight:"semibold"
		fontSize:20
		name:"title"
		lineHeight:20
		constraints:
			top:20
			width:220
			leading:24

	message = new m.Text
		superLayer:modal
		text:setup.message
		fontSize:13
		name:"message"
		lineHeight:16
		constraints:
			top: [title, 10]
			leading:24
			width: 220

	m.layout.set
		target:[alert, overlay, modal, title, message]

	#Title + Message + 1 set of actions
	modal.constraints["height"] = 20 + m.utils.pt(title.height) + 10 + m.utils.pt(message.height) + 24 + 44

	m.layout.set
		target:[overlay, modal]
	alert.actions = {}
	actions = []
	for act, index in setup.actions
		if index < 2
			button = new m.Button
				superLayer:modal
				text:setup.actions[index]
				color:"blue"
			if index == 0
				button.constraints = {bottom:8, trailing:8}
			else
				button.constraints = {bottom:8, trailing:[actions[index - 1], 8]}
			alert.actions[setup.actions[index]] = button
			actions.push button
			m.layout.set
				target:button

	# Export alert
	alert.overlay = overlay
	alert.modal = modal
	alert.title = title
	alert.message = message

	return alert
