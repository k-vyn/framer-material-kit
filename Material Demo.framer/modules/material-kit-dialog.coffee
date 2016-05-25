# Alert
m = require 'material-kit'

exports.defaults = {
	title: "Title"
	message:"Message"
	actions:["Agree", "Decline"]
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)

	dialog = new Layer backgroundColor:"transparent", name:"dialog"
	dialog.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0

	overlay = new Layer backgroundColor:"#5E5E5E", superLayer:dialog, name:"overlay", opacity:.6
	overlay.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0

	modal = new Layer
		backgroundColor:"white"
		superLayer:dialog
		borderRadius:m.utils.px(2)
		name:"modal"
		shadowColor:"rgba(0,0,0,.2)"
		shadowY:24
		shadowBlur:24
		clip:true
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
		target:[dialog, overlay, modal, title, message]

	#Title + Message + 1 set of actions
	modal.constraints["height"] = 20 + m.utils.pt(title.height) + 10 + m.utils.pt(message.height) + 24 + 44

	m.layout.set
		target:[overlay, modal]
	dialog.actions = {}
	actions = []
	charCount = 0
	if setup.actions.length > 1
		charCount = setup.actions[0].length + setup.actions[1].length
	if setup.actions.length < 3 && charCount < 24
		for act, index in setup.actions
			button = new m.Button
				superLayer:modal
				text:setup.actions[index]
				color:"blue"
			if index == 0
				button.constraints = {bottom:8, trailing:8}
			else
				button.constraints = {bottom:8, trailing:[actions[index - 1], 8]}
			dialog.actions[setup.actions[index]] = button
			actions.push button
			m.layout.set
				target:button
	else
		modal.constraints["height"] = 20 + m.utils.pt(title.height) + 10 + m.utils.pt(message.height) + 32 + (setup.actions.length * 36)
		m.layout.set
			target:modal
		largestLabel = 0
		largestButton = 0
		for act, index in setup.actions
			button = new m.Button
				superLayer:modal
				text:setup.actions[index]
				color:"blue"
			if index == 0
				button.constraints = {top:[message, 24], trailing:8}
			else
				button.constraints = {trailing:8, top:actions[index - 1]}
			dialog.actions[setup.actions[index]] = button
			actions.push button
			m.layout.set
				target:button

			if largestLabel < button.label.width
				largestLabel = button.label.width
				largestButton = button.width

		for act in actions
			act.label.style.textAlign = "right"
			act.label.width = largestLabel
			act.width = largestButton
			m.layout.set
				target:[act, act.label]

	# Export dialog
	dialog.overlay = overlay
	dialog.modal = modal
	dialog.title = title
	dialog.message = message

	return dialog
