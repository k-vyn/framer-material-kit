m = require "material-kit"
data = require("demo_data").json

bg = new BackgroundLayer 
	backgroundColor: m.color("white")
	
nav = new m.NavBar

status = new m.StatusBar
	color:"white"
	
bar = new m.AppBar
	backgroundColor:"red600"
	title:"YouTube"
	tabs:["YouTube Red", "trending", "subscriptions", "account"]
	tabIcons:["home", "whatshot", "subscriptions", "person"]
	tabsInk:{color:"red800", scale:3}
	tabsBarColor:"white"
	tabsColor:"white"
	tabsAlt:{color:"black", opacity:.7}
	actions:["more_vert", "search"]
	
cards = []
allCards = []
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
		allCards.push layer
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
				
		superLayer.updateContent()
		
		layer.on Events.Click, ->
			for c in allCards
				c.ignoreEvents = true
			bar.visible = false
			
			view = new Layer backgroundColor:"white"
			view.constraints = {top:0, bottom:nav, leading:0, trailing:0}
			view.y = m.device.height
			view.animate
				properties:(y:0)
				time:.5
			m.layout.set()

			video = new m.Video 
				max:true
				video:layer.data.video
				progressColor:"red600"
				showPlayStop: false
				superLayer:view
				backgroundColor:"black"
				image: layer.data.thumbnail
				
			m.addToStack(view)
			
			details = new Layer backgroundColor:"white", superLayer:view
			details.constraints = {top:video, leading:0, trailing:0, bottom:0}
			hideDetails = ->
				details.visible = false
			showDetails = ->
				Utils.delay .5, -> details.visible = true
				
			video.onFullScreen = hideDetails
			video.onFullScreenExit = showDetails

			videoTitle = new m.Text
				constraints:{top:20, leading:17}
				text:layer.data.title
				fontSize:18
				superLayer:details
			videoViewCount = new m.Text
				constraints:{top:[videoTitle, 20], leading:17}
				text:layer.data.views + " views"
				fontSize:14
				color:"grey"
				superLayer:details
			thumbsUpIcon = new m.Icon
				name:"thumb_up"
				superLayer:details
				color:"grey700"
				constraints: {top:[videoViewCount, 20], leading:17}
			thumbsUpCount = new m.Text
				color:"grey700"
				text:layer.data.thumbs_up
				constraints:{verticalCenter:thumbsUpIcon, leading:[thumbsUpIcon, 10]}
				fontSize:14
				superLayer:details
			thumbsDownIcon = new m.Icon
				name:"thumb_down"
				superLayer:details
				color:"grey700"
				constraints: {verticalCenter:thumbsUpIcon, leading:[thumbsUpCount, 20]}
			thumbsDownCount = new m.Text
				color:"grey700"
				text:layer.data.thumbs_down
				constraints:{verticalCenter:thumbsDownIcon, leading:[thumbsDownIcon, 10]}
				fontSize:14
				superLayer:details
			shareIcon = new m.Icon
				name:"reply"
				superLayer:details
				color:"grey700"
				constraints: {verticalCenter:thumbsUpIcon, leading:[thumbsDownCount, 20]}
				
			topDivider = new Layer superLayer:details, backgroundColor:m.color("grey200")
			topDivider.constraints = {top:[thumbsUpIcon, 20], leading:0, trailing:0, height:1}
			bottomDivider = new Layer superLayer:details, backgroundColor:m.color("grey200")
			bottomDivider.constraints = {top:[topDivider, 70], leading:0, trailing:0, height:1}
			
			m.layout.set()			
			profileIcon = new Layer 
				superLayer:details
				image:layer.data.profile_pic
				borderRadius:m.px(50)
			profileIcon.constraints = {top:[topDivider, 15], leading:17, height:40, width:40}
			
			m.layout.set()		
			
			authorTitle = new m.Text
				constraints:{topEdges:profileIcon, leading:[profileIcon, 10]}
				text:layer.data.author	
				superLayer:details
			subs = new m.Text
				constraints:{top:[authorTitle, 5], leading:[profileIcon, 10]}
				text:layer.data.subs + " subscribers"
				superLayer:details
				fontSize:14
				color:"grey"
		return layer
	
	button = new m.Button 
		constraints:{align:"center"}
		type:"floating"
		icon:"videocam"
		color:"white"
		text:"download"
		backgroundColor:"red600"
		clip:true
	
	for i in [0...5]
		post = new card
		if cards.indexOf(post) == 0
			post.constraints.top = 0
		else
			post.constraints.top = [cards[cards.indexOf(post) - 1], 1]
		post.constraints.leading = 0
		post.constraints.trailing = 0
			
		m.layout.set(post)
	m.layout.set()
	
	home.updateContent()

nav.back.on Events.TouchEnd, ->
	for c in allCards
		c.ignoreEvents = false
	bar.visible = true

# Make Tables
home = new ScrollComponent 
	superLayer:bar.views["YouTube Red"]
home.contentInset = {top: 0, right: 0, bottom: m.px(150), left: 0}
home.constraints = {top:0, leading:0, trailing:0, bottom:nav}
home.scrollHorizontal = false
m.layout.set()


bar.tabs["trending"].on Events.TouchEnd, ->
	snack = new m.SnackBar
		animated:true
		text:"Something went right"
		action:"Send"
		
bar.tabs["subscriptions"].on Events.TouchEnd, ->
	snack = new m.SnackBar
		animated:true
		text:"Subscriptions not included"

bar.tabs["account"].on Events.TouchEnd, ->
	snack = new m.SnackBar
		animated:true
		text:"Account not included"

loadTable("home", home)