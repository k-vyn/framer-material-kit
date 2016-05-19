m = require 'material-kit'

exports.defaults = {
		text:"text"
		type:"flat"
		style:"light"
		backgroundColor:"white"
		color:"teal300"
		fontSize:17
		fontWeight:"regular"
		name:"button"
		blur:true
		superLayer:undefined
		constraints:undefined
		icon:"star"
		clip:true
		ink:undefined
	}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = m.utils.setupComponent(array, exports.defaults)

	button = new Layer
		name:setup.name
		clip:setup.clip

	if setup.superLayer
		setup.superLayer.addSubLayer(button)

	switch setup.type
		when "floating"
			button.constraints =
				 width:56
				 height:56
				 bottom:64
				 trailing:17
			if m.device.scale < 4
				button.constraints.width = 64
				button.constraints.height = 64
			button.borderRadius = m.px(32)
			button.shadowColor = "rgba(0,0,0,.12)"
			button.shadowY = m.px(2)
			button.shadowBlur = m.px(6)
			button.backgroundColor = m.color(setup.backgroundColor)
			if typeof setup.icon == "string"
				icon = m.Icon
					name:setup.icon
					color:m.color(setup.color)
					superLayer:button
					constraints:{align:"center"}

			m.layout.set
				target:[button]
			m.layout.set
				target:[icon]
		else
			label = new m.Text
				text:setup.text
				superLayer:button
				textTransform:"uppercase"
				color:setup.color
				fontSize:14
				lineHeight:14
				fontWeight:500
			label.constraints =
				align:"center"
			button.props =
				backgroundColor:m.color(setup.backgroundColor)
				height:m.px(36)
				width:label.width + m.px(16)
				borderRadius:m.px(2)
				clip:setup.clip

			switch setup.type
				when "raised"
					button.origBGC = button.backgroundColor
					button.shadowColor = "rgba(0,0,0,.24)"
					button.shadowY = m.px(2)
					button.shadowBlur = m.px(2)
					pressedBGC = button.backgroundColor.lighten(10)
					button.on Events.TouchStart, ->
						button.animate
							properties:
								backgroundColor:pressedBGC
								shadowY:m.px(8)
								shadowBlur:m.px(8)
					button.on Events.TouchEnd, ->
						button.animate
							properties:
								backgroundColor: button.origBGC
								shadowY:m.px(2)
								shadowBlur:m.px(2)
				when "flat"
					button.origBGC = button.backgroundColor
					pressedBGC = button.backgroundColor.darken(5)
					button.on Events.TouchStart, ->
						button.animate
							properties:
								backgroundColor:pressedBGC
					button.on Events.TouchEnd, ->
						button.animate
							properties:
								backgroundColor: button.origBGC


			button.constraints = setup.constraints

			m.layout.set
				target:[button, label]

	if setup.ink
		passedInk = setup.ink
		passedInk.layer = button

		m.utils.inky(passedInk)




	return button
