m = require "material-kit"
data = require("demo_data").json

bg = new BackgroundLayer 
	backgroundColor: m.color("white")
	
nav = new m.NavBar

status = new m.StatusBar
	color:"white"
	
bar = new m.AppBar
	backgroundColor:m.color("red600")
	title:"YouTube"
	tabs:["YouTube Red", "trending", "subscriptions", "account"]
	tabIcons:["home", "whatshot", "subscriptions", "person"]
	tabsInk:{color:"red800", scale:3}
	tabsBarColor:"white"
	tabsColor:"white"
	tabsAlt:{color:"black", opacity:.7}

cards = []
loadTable = (table, superLayer) ->
	card = () ->
		if cards[cards.length - 1]
			if cards[cards.length - 1].table != table
				cards = []
		layer = new Layer 
			superLayer: superLayer.content
			backgroundColor:"white"
			clip:true
			shadowY: m.px(1)
			shadowColor: m.color("grey200")
			opacity: 0
		layer.table = table
		cards.push layer
		layer.data = data[table][cards.indexOf(layer)]
		layer.constraints = {height:300}
		thumbnail = new Layer superLayer: layer, image:layer.data.thumbnail
		thumbnail.constraints =
			leading:10
			trailing:10
			bottom:60
			top:10
		profilePhoto = new Layer superLayer: layer, borderRadius: m.px(50), image:layer.data.profile_pic
		profilePhoto.constraints =
			top:[thumbnail, 8]
			leading:10
			height:48
			width:48
		m.layout.set()
		titleLabel = new m.Text
			superLayer:layer
			constraints:{top:[thumbnail, 15], leading:80, trailing:10}
			text:layer.data.title
		userLabel = new m.Text
			superLayer:layer
			constraints:{top:[thumbnail, 35], leading:80, trailing:10}
			text:"#{layer.data.author} • #{layer.data.short_views} views • #{layer.data.rel_date}"
			fontSize:14
			color:"grey"
		Utils.delay .3 * (layer.index - 1), ->
			layer.animate
				properties:(opacity:1)
				time:.5	
		layer.on Events.Click, ->
			view = new Layer backgroundColor:"white"
			view.constraints = {top:0, bottom:nav, leading:0, trailing:0}
			m.layout.set()
			video = new m.Video 
				max:true
				video:layer.data.video
				progressColor:"red600"
				showPlayStop: false
				mute:true
				superLayer:view
				backgroundColor:"black"
			m.addToStack(view)
			videoTitle = new m.Text
				constraints:{top:[video, 20], leading:17}
				text:layer.data.title
				fontSize:18
				superLayer:view
			videoViewCount = new m.Text
				constraints:{top:[videoTitle, 20], leading:17}
				text:layer.data.views + " views"
				fontSize:14
				color:"grey400"
				superLayer:view
			thumbsUpIcon = new m.Icon
				name:"thumb_up"
				superLayer:view
				color:"grey700"
				constraints: {top:[videoViewCount, 20], leading:17}
			thumbsUpCount = new m.Text
				color:"grey700"
				text:layer.data.thumbs_up
				constraints:{verticalCenter:thumbsUpIcon, leading:[thumbsUpIcon, 10]}
				fontSize:14
				superLayer:view
			thumbsDownIcon = new m.Icon
				name:"thumb_down"
				superLayer:view
				color:"grey700"
				constraints: {verticalCenter:thumbsUpIcon, leading:[thumbsUpCount, 20]}
			thumbsDownCount = new m.Text
				color:"grey700"
				text:layer.data.thumbs_down
				constraints:{verticalCenter:thumbsDownIcon, leading:[thumbsDownIcon, 10]}
				fontSize:14
				superLayer:view
			shareIcon = new m.Icon
				name:"reply"
				superLayer:view
				color:"grey700"
				constraints: {verticalCenter:thumbsUpIcon, leading:[thumbsDownCount, 20]}
			topDivider = new Layer
				superLayer:view
			topDivider.constraints =
				top:[thumbsUpIcon, 20]
				leading:0
				trailing:0
				height:1
			bottomDivider = new Layer
				superLayer:view
			bottomDivider.constraints =
				top:[topDivider, 100]
				leading:0
				trailing:0
				height:1
			profileIcon = new Layer
				superLayer:view
			m.layout.set()			
			
		return layer
	
	button = new m.Button 
		constraints:{align:"center"}
		type:"floating"
		icon:"videocam"
		color:"white"
		text:"download"
		backgroundColor:"red600"
		clip:true
	
	for i in [0...3]
		post = new card
		if cards.indexOf(post) == 0
			post.constraints.top = 0
		else
			post.constraints.top = [cards[cards.indexOf(post) - 1], 1]
		post.constraints.leading = 0
		post.constraints.trailing = 0
			
		m.layout.set(post)
	m.layout.set()

# Make Tables
home = new ScrollComponent 
	superLayer:bar.views["YouTube Red"]
home.constraints = {top:0, leading:0, trailing:0, bottom:nav}
home.scrollHorizontal = false

trending = new ScrollComponent 
	superLayer:bar.views["trending"]
trending.constraints = {top:0, leading:0, trailing:0, bottom:nav}
trending.scrollHorizontal = false

loadTable("home", home)
loadTable("trending", trending)
nav.bringToFront()