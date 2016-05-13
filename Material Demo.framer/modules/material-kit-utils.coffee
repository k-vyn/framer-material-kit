m = require 'material-kit'

## Converts px to pt
exports.pt = (px) ->
	pt = px/m.device.scale
	pt = Math.round(pt)
	return pt

## Converts pt to px
exports.px = (pt) ->
	px = pt * m.device.scale
	px = Math.round(px)
	return px

## iOS Color – This will store all of the default iOS colors intead of the default CSS colors. *This is only up here because I refer to it in the defaults.*
exports.color = (colorString) ->
	color = ""
	if typeof colorString == "string"
		colorString = colorString.toLowerCase()
	switch colorString
		when "red"
			color = new Color("#FE3824")
		when "blue"
			color = new Color("#0076FF")
		when "pink"
			color = new Color("#FE2851")
		when "grey"
			color = new Color("#929292")
		when "gray"
			color = new Color("#929292")
		when "black"
			color = new Color("#030303")
		when "white"
			color = new Color("#EFEFF4")
		when "orange"
			color = new Color("#FF9600")
		when "green"
			color = new Color("#44DB5E")
		when "light blue"
			color = new Color("#54C7FC")
		when "light-blue"
			color = new Color("#54C7FC")
		when "yellow"
			color = new Color("#FFCD00")
		when "light key"
			color = new Color("#9DA7B3")
		when "light-key"
			color = new Color("#9DA7B3")
		else
			if colorString[0] == "#" || colorString.toHexString()[0] == "#"
				color = new Color(colorString)
			else
				color = new Color("#929292")
	return color

# Supporting Functions
# Utils

# Cleans a string of <br> and &nbsp;
exports.clean = (string) ->
	## remove white space
	string = string.replace(/[&]nbsp[;]/gi, " ").replace(/[<]br[>]/gi, "")
	return string

# Converts px's of an SVG to scalable variables
exports.svg = (svg) ->
	# Find String
	startIndex = svg.search("<svg width=")
	endIndex = svg.search(" viewBox")
	string = svg.slice(startIndex, endIndex)

	#Find width
	wStartIndex = string.search("=") + 2
	wEndIndex =  string.search("px")
	width = string.slice(wStartIndex, wEndIndex)
	newWidth = exports.px(width)

	# Find Height
	heightString = string.slice(wEndIndex + 4, string.length)
	hStartIndex = heightString.search("=")+ 2
	hEndIndex = heightString.search("px")
	height = heightString.slice(hStartIndex, hEndIndex)
	newHeight = exports.px(height)

	#Create new string
	newString = string.replace(width, newWidth)
	newString = newString.replace(height, newHeight)

	#Replace strings
	svg = svg.replace(string, newString)

	return {
		svg:svg
		width:newWidth
		height:newHeight
	}

# Changes the fill of an SVG
exports.changeFill = (layer, color) ->
	startIndex = layer.html.search("fill=\"#")
	fillString = layer.html.slice(startIndex, layer.html.length)
	endIndex = fillString.search("\">")
	string = fillString.slice(0, endIndex)
	newString = "fill=\"" + exports.color(color).toHexString()
	layer.html = layer.html.replace(string, newString)

exports.capitalize = (string) ->
	return string.charAt(0).toUpperCase() + string.slice(1)

# Returns the current time
exports.getTime = ->
	daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	dateObj = new Date()
	month = monthsOfTheYear[dateObj.getMonth()]
	date = dateObj.getDate()
	day = daysOfTheWeek[dateObj.getDay()]
	hours = dateObj.getHours()
	mins = dateObj.getMinutes()
	secs = dateObj.getSeconds()
	return {
		month:month
		date:date
		day:day
		hours:hours
		mins:mins
		secs:secs
	}

exports.bgBlur = (layer) ->
	layer.style["-webkit-backdrop-filter"] = "blur(#{exports.px(5)}px)"
	return layer

exports.textAutoSize = (textLayer) ->
	#Define Width
	constraints = {}
	if textLayer.constraints
		if textLayer.constraints.height
			constraints.height = exports.px(textLayer.constraints.height)
		if textLayer.constraints.width
			constraints.width = exports.px(textLayer.constraints.width)

	styles =
		fontSize: textLayer.style.fontSize
		fontFamily: textLayer.style.fontFamily
		fontWeight: textLayer.style.fontWeight
		lineHeight: textLayer.style.lineHeight
		letterSpacing: textLayer.style.letterSpacing
		textTransform: textLayer.style.textTransform
	textFrame = Utils.textSize(textLayer.html, styles, constraints)
	return {
		width : textFrame.width
		height: textFrame.height
	}

exports.getDevice = ->
	# Loads the initial frame
	device = ""
	frame = true
	if m.lib.realDevices[innerWidth] && m.lib.realDevices[innerWidth][innerHeight]
		device = m.lib.realDevices[innerWidth][innerHeight]
		frame = false

	if frame
		device =
			name: Framer.Device.deviceType
			width :  Framer.DeviceView.Devices[Framer.Device.deviceType].screenWidth
			height:  Framer.DeviceView.Devices[Framer.Device.deviceType].screenHeight
			scale: m.lib.framerFrames[Framer.DeviceView.Devices[Framer.Device.deviceType].screenWidth]

	return device


# Special Characters
exports.specialChar = (layer) ->
	text = layer
	if layer.type == "button"
		text = layer.label
	if text.html.indexOf("-b") != -1
		newText = text.html.replace("-b ", "")
		exports.update(text, [{text:newText}, {fontWeight:600}])
	if text.html.indexOf("-r") != -1
		newText = text.html.replace("-r ", "")
		exports.update(text, [{text:newText}, {color:"red"}])
	if text.html.indexOf("-rb") != -1
		newText = text.html.replace("-rb ", "")
		exports.update(text, [{text:newText}, {color:"blue"}])
	if text.html.indexOf("-lb") != -1
		newText = text.html.replace("-lb ", "")
		exports.update(text, [{text:newText}, {color:"light-blue"}])
	if text.html.indexOf("-g") != -1
		newText = text.html.replace("-g ", "")
		exports.update(text, [{text:newText}, {color:"green"}])
	if text.html.indexOf("-o") != -1
		newText = text.html.replace("-o ", "")
		exports.update(text, [{text:newText}, {color:"orange"}])
	if text.html.indexOf("-p") != -1
		newText = text.html.replace("-p ", "")
		exports.update(text, [{text:newText}, {color:"orange"}])
	if text.html.indexOf("-y") != -1
		newText = text.html.replace("-y ", "")
		exports.update(text, [{text:newText}, {color:"yellow"}])
	if text.html.indexOf("-#") != -1
		chosenColor = text.html.slice(1, 8)
		newText = text.html.slice(9, text.html.length)
		exports.update(text, [{text:newText}, {color:chosenColor}])
	if text.html.indexOf("-") != -1
		newText = text.html.replace("- ", "")
		exports.update(text, [{text:newText}])
	if layer.buttonType == "text"
		layer.width = text.width
	m.layout.set()

exports.update = (layer, array) ->
	if array == undefined
		array = []
	if layer.type == "text"
		for change in array
			key = Object.keys(change)[0]
			value = change[key]
			if key == "text"
				layer.html = value
			if key == "fontWeight"
				layer.style[key] = value
			if key == "color"
				layer.color = exports.color(value)

		textFrame = exports.textAutoSize(layer)
		layer.width = textFrame.width
		layer.height = textFrame.height


	m.layout.set()

# Decides if it should be white/black text
exports.autoColor = (colorObject) ->
	rgb = colorObject.toRgbString()
	rgb = rgb.substring(4, rgb.length-1)
	rgb = rgb.replace(/ /g, '')
	rgb = rgb.replace(/ /g, '')
	rgb = rgb.split(',')
	red = rgb[0]
	green = rgb[1]
	blue = rgb[2]
	color = ""
	if (red*0.299 + green*0.587 + blue*0.114) > 186
		color = "#000"
	else
		color = "#FFF"
	return color

exports.sameParent = (layer1, layer2) ->
	parentOne = layer1.superLayer
	parentTwo = layer2.superLayer
	if parentOne == parentTwo
		return true
	else
		return false


exports.timeDelegate = (layer, clockType) ->
	@time = exports.getTime()
	Utils.delay 60 - @time.secs, ->
		@time = exports.getTime()
		exports.update(layer, [text:exports.timeFormatter(@time, clockType)])
		Utils.interval 60, ->
			@time = exports.getTime()
			exports.update(layer, [text:exports.timeFormatter(@time, clockType)])

exports.timeFormatter = (timeObj, clockType) ->
	if clockType == false
		if timeObj.hours > 12
			timeObj.hours = timeObj.hours - 12
		if timeObj.hours == 0 then timeObj.hours = 12
	if timeObj.mins < 10
		timeObj.mins = "0" + timeObj.mins
	return timeObj.hours + ":" + timeObj.mins

exports.setupComponent = (array, defaults) ->
	if array == undefined
		array = []
	obj = {}
	for i in defaults.props
		if array[i] != undefined
			obj[i] = array[i]
		else
			obj[i] = defaults[i]
	return obj


exports.emojiFormatter = (string) ->
		unicodeFormat = ""
		if string[0] == "E" || string[0] == "3" || string[0] == "2" || string[0] == "C"
			arrayOfCodes = string.split(" ")
			for code in arrayOfCodes
				unicodeFormat = unicodeFormat + "%" + code
		else
			arrayOfCodes = string.split(" ")
			unicodeFormat = "%F0%9F"
			for code in arrayOfCodes
				unicodeFormat = unicodeFormat + "%" + code
		decoded = decodeURIComponent(unicodeFormat)
		return decoded

exports.buildEmojisObject = () ->
	emojis = []
	for code, index in m.assets.emojiCodes
		emoji = exports.emojiFormatter(code)
		emojis.push emoji
