m = require "material-kit"

bg = new BackgroundLayer 
	backgroundColor: m.color("white")
	

nav = new m.NavBar

status = new m.StatusBar
	style:"dark "
	
bar = new m.AppBar
	backgroundColor:m.color("white")
	title:"Flights"
	tabs:["Home", "Search", "Friends"]
	tabsInk:{color:"yellow900", scale:8}
	tabsBarColor:"yellow900"

button = new m.Button 
	constraints:{align:"center"}
	type:"floating"
	icon:"flight"
	color:"white"
	text:"download"
	backgroundColor:"yellow900"
	clip:true
	ink:{color:"yellow300"}
