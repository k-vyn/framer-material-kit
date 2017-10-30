# Material Design Kit for FramerJS
![Material Kit Logo](/_img/framer-material-design-kit.jpg)

Material Kit was created to make prototyping with [Material Design](https://material.io/) fast and easy without compromising the quality or customization.

There are three core pieces:
1. **Foundational elements** that help Material Kit mold to devices,
2. A **component library** that’ll save you time by providing Material offerings, and
3. **Supporting functions** that help power the foundation and components.

If you're interested in prototyping with iOS, check out the [iOS Kit for FramerJS](https://github.com/k-vyn/framer-ios-kit).

### Contents
> - [Setup](#setup)
> - [Dynamic Layout](#dynamic)
>   - [Positioning](#positioning)
>   - [Setting opposite constraints](#opposite)
>   - [Positioning](#pos-rel)
>   - [Centering](#center-rel)
>   - [Aligning](#align-rel)
> - [Real device override](#real)
> - [Device details library](#details)
> - [System Components](#system)
> - [Material Color](#colors)
> - [Material Icon](#icons)
> - [Status Bar](#status)
> - [App Bar](#app)
> - [Banner](#banner)
> - [Video](#video)
> - [Dialog](#dialog)
> - [Text](#text)
> - [Buttons](#buttons)
> - [Snack Bar](#snack)
> - [Navigation Bar](#nav)

### Setup
To setup the kit, add the following list of files to your modules folder in your project. Don't worry, you'll only need to require one.

```coffeescript
material-kit.coffee
material-kit-dialog.coffee
material-kit-appbar.coffee
material-kit-banner.coffee
material-kit-button.coffee
material-kit-layout.coffee
material-kit-library.coffee
material-kit-nav-bar.coffee
material-kit-status-bar.coffee
material-kit-snack-bar.coffee
material-kit-stack.coffee
material-kit-icon.coffee
material-kit-text.coffee
material-kit-utils.coffee
material-kit-video.coffee
```

> Framer Studio does not support subfolders in the modules folder, so they'll need to be added to the root.

In Framer Studio, write `m = require 'material-kit'`.

You can write any variable name you'd like, but for the purposes of this guide we'll be using `m`.

### Dynamic Layout

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/dynamic.png)

The most fundamental piece of this module is Dynamic Layout. Dynamic Layout is a robust layout engine that’ll not only help make positioning layers easier and smarter, it'll will make positioning layers across devices possible.

### The Density-independent pixel (DP)
In Dynamic Layout, like in Android, everything is based around the dp instead of the pixel. The exact number of pixels will change from device to device, but the number of points will not. There's a simple equation for finding points.

`1dp = 1px * scale`

Side note: you can also use the built-in functions:

* `m.dp(6)` #returns 3 points on HTC One and 2 points on Nexus 4
* `m.px(1)` #returns 4 pixels on Nexus 6p and 3 pixels on iPhone 6 plus

### Positioning
![](https://dl.dropboxusercontent.com/u/143270556/ioskit/positioning.png)

As we get away from using pixel positioning, we won't be using `x` and `y`-based positioning. Instead, we'll be setting things called constraints. When you set a constraint, it's like saying that a layer can't go beyond a certain position. There are four constraints for positioning: `leading`, `trailing`, `top`, and `bottom`.

To set a leading and top constraint on a box, write:

```coffeescript
layer = new Layer
layer.constraints =
    top:10
    leading:10
m.layout.set()
```

This will position the layer at `x:30, y:30` on Samsung S5, and `x:40, y:40` on Samsung S7

>You can also do this on one line if you'd prefer using this syntax. Just replace the layer.constraints line from above with this line. You'll still need to run the `m.layout.set` function.
>`layer.constraints = {top:10, leading:10}`


#### Setting Opposing Constraints
If you set a leading & trailing or a top & bottom, Dynamic Layout will do its best to honor the constraints, which will mean the height/width will need to be adjusted. For example, if you set the constraints of a layer to  `leading: 0` and `trailing:0`, the layer's width will be adjusted to the device's width.

>**WARNING** - If you set too many opposing constraints, I'm not sure what'll happen. Best of luck. `¯\_(ツ)_/¯` Try to just set no more than one of each constraint.

#### Relationships
One of the most powerful things of Dynamic Layout is relationships. Relationships allows you to link a layer onto another layer in a variety of ways.

#### Positioning Relationships

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/relationship.png)

When you declare a constraint, you can set a constraint as a layer instead of an integer. For example, if you have two layers (`boxA` and `boxB`) you can set `boxB`'s top as `boxA`.
```coffeescript
boxB.constraints =
	top:boxA
m.layout.set()
```

This will stack the boxes so that boxB's top edge is constrained to below `boxA`, but what if you want a little buffer? That's really easy. We'll use a little different syntax with wrapping the layer and buffer in brackets.
```coffeescript
boxB.constraints =
	top:[boxA, 10]
m.layout.set()
```

This will set `boxB`'s top edge to 10 points below `boxA`.

#### Centering Relationships

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/centering.png)

There are a couple other types of constraints that'll help make positioning layers even easier.  There are two centering constraints: `verticalCenter`, `horizontalCenter`. These constraints will only accept just a layer as a constraint.

For example, if you'd like boxB to be horizontally centered on boxA, write this:
```coffeescript
boxB.constraints =
	top:[boxA, 10]
	horizontalCenter:boxA
m.layout.set()
```

This will set `boxB` 10 points below boxA, and it'll center it within `boxA` on the x-axis. The other centering constraint `verticalCenter` will work similarly center `boxB` within `boxA` on the y-axis. If you've set a top/bottom constraint, it'll ignore those constraints.

#### Aligning Relationships
![](https://dl.dropboxusercontent.com/u/143270556/ioskit/align.png)

The last type of relationships will allow you to align any edge of layer onto another layer's edge. To do this, there are four constraints at your disposal: `leadingEdges`, `trailingEdges`, `topEdges`, and `bottomEdges`. These layers, like centers, will not accept anything other but another layer.

If you'd like to align `boxB`'s trailing edge onto `boxA`'s trailing edge, write this:
```coffeescript
boxB.constraints =
	top:[boxA, 10]
	trailingEdges:boxA
m.layout.set()
```

#### Animating Constraints
You can animate between constraints by running ` m.layout.animate()`.

#### Properties
- **target (optional)** *Layer or Array of layers* <br> When set, this will only animate the target layers with updated constraints. When this is not set, it'll animate all layers with their updated constraints.
- **curve, curveOptions, delay, repeat, colorModel** *String* <br>  Each of these properties will work the same as native animations
- **time** *Num* <br> This will be the time of each layer's animation, not the entire animation of all the layers.
- **stagger** *Num* <br> This will put an incremental delay across all layers being animated.
- **fadeOut** *Boolean or Layer* <br> When set to true, this will animate all layers' opacity to 0. When set to a layer, that layer's opacity will be set to 0.
- **fadeIn** *Boolean or Layer* <br> When set to true, this will animate all layers' opacity to 1. When set to a layer, that layer's opacity will be set to 1.

#### Example
If we have a bunch of layers in a column and we want them to all move up, we can set the `topLayer`'s constraint to `50`, and all the layers with a relationship with `topLayer` will also move up.

```coffeescript
topLayer.constraints.top = 50 ##Set a new constraint
m.animateLayout
  stagger:.05
  curve:"spring"
```
> When updating a constraint on a layer, please be careful on your syntax. Writing `layer.constraints =` will wipe out your previous object.
>
> This will wipe out your top constraint.
> ````coffeescript
> topLayer.constraints =
> 	top:50
> 	leading:10
> topLayer.constraints =
> 	leading:20
> ````
>
> Where as, this will keep your top constraint.
> ```coffeescript
> topLayer.constraints =
> 	top:50
> 	leading:10
> topLayer.constraints.leading = 20
> ```


#### Size Constraints
You can also set `height`/`width` constraints just like above. This will ensure that your layers will remain a particular size.  One big difference in setting a `height`/`width` constraint over a property `height`/`width` is that you'll need to set the `height`/`width` constraint in points.

```coffeescript
boxB.constraints =
	top:[boxA, 10]
	trailingEdges:boxA
	height:100
	width:100
m.layout.set()
```


#### m.layout.set()
This function only need to be called once for all constraints. It'll cycle through all the layers in order of creation, and it'll fulfill all constraints.

#### When to call it
You'll need to call it before any `x`/`y` positions are referenced. If you have a function that's based off another layer, you'll need to call `m.layout.set` before that positioning is stored otherwise it'll be wrong or `0`. Once you `call m.layout.set()`, it'll set the position to the accurate position.

#### Mixing up the queue
`m.layout.set` will accept layers in the parentheses. This will layout **only** that layer and ignore all other constraints. This is to be used if a layer created after others needs to be laid out before others.

```coffeescript
m.layout.set(boxB)
```

This will only layout `boxB` and not `boxA`.

If you need a completely different order, you can use the target property and pass an array in the order you wish for them to be laid out.

```coffeescript
m.layout.set
	target:[boxB, boxD, boxA]
```


### Real device override
This module is meant to make prototyping look real, and one of things that prevents this is when you open a prototype that was built for an iPhone 6 on an iPhone 6+. If you do this, you’ll end up seeing a lot of white space. When this module is on, your frame will be overridden by the device in your hand, so the iPhone 6+ will no longer see the iPhone 6 frame. Using Dynamic Layout will ensure that your prototype looks presentable at every size.

For this to work properly, you'll need a full-screen browser. I use & recommend [Framer](https://play.google.com/store/apps/details?id=com.framerjs.android&hl=en) on Android and [Frameless](#https://itunes.apple.com/us/app/frameless-full-screen-web/id933580264?mt=8) on iOS.

### Device details library
You’ll now be able to refer to a set of new variables that’ll allow you to get more details on the device.

````coffeescript
m.device.height</b> # returns the height of the device in pixels
m.device.width # returns the width of the device in pixels
m.device.name # returns many different options
````

## System components
These are easy to implement and fully customizable native Material components. The idea is that implementing Material components should be easy & quick, so that you can spend the time working on what makes your prototype unique.

Every component in this module was written to feel native to Framer, so the way you create components should feel as familiar as creating a new layer. The difference is that in addition to Framer properties there's added customization parameters, which will be accepted, and any component that can accept constraints from Dynamic Layout is able to.

After creation, components will operate as native layers under the variable name you declared. The only difference is the sublayers of the component are accessible via dot notation, so it's easier for you to turn on event listeners etc.

## Material Colors
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/colors.png)

One of the core parts of material design is color. To make it convenient, there's a color function that has all of [material design's color palette](https://www.google.com/design/spec/style/color.html#color-color-palette) included. Also, all the objects below will by default use them, so when you pass a backgroundColor or color property feel free to use the following codes.

Color codes in material design are setup as name + code like `blue400` or `red100`. The color name is lower camel-case like "deepPurple" and any code that includes an "A" is uppercase.

#### Example
```coffeescript
# Non-material design layers
layer = new Layer
	color:m.color("lime700") ## sets color to #AFB42B

# Material design layers
text = new m.Text
	color:"yellowA400" ## sets color to #FFEA00
```

## Material Icons
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/icons.png)

You can easly access all the icons in the [Material Design library](https://design.google.com/icons/) with a simple & easy object.  

#### Properties
- **name** *String* <br> String that grabs the icon from the [library](https://design.google.com/icons/)
- **scale** *Int* <br> Scales the icon's height & width.
- **color** *Color String* <br> Sets the color of the icon.
- **superLayer** *String* <br> Same as Framer's superLayer property.
- **constraints** *Constraints Object* <br> Sets the icon's constraints.
- **clip** *Boolean* <br> Same as Framer's clip property.

**Please note:** Whenever an icon has more than one words, use an _ between the words. So flight land would be `"flight_land"`.

#### Example
```coffeescript
icon = new m.Icon
	name:"exit_to_app"
	color:"white"
```

## Status Bar
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/statusbar.png)
The status bar allows users to see the connection, current time, and battery.

#### Properties
- **style** *String* <br> Dark is black white on black. Light is grey on white text.  
- **opacity** *Int* <br> Sets the opacity of the layers in the status bar.
- **color** *Color String* <br> Sets the color of the layers in the status bar.
- **backgroundColor** *Color String* <br> Sets the background color in the status bar.  
- **clock24** *Boolean* <br> By default, it's set to false, so it's a 12 hour clock with AM/PM. When set to true, the clock will cycle through 0-23 hours and removes AM/PM.

#### Example
````coffeescript
statusBar = new material-kit.StatusBar
	style:"light"
````

####Schema
```coffeescript
statusBar : {
	statusBar.batteryIcon
    statusBar.time
    statusBar.cellular
    statusBar.wifi
}
```

## App Bar
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/appbar.png)

The app bar in android is the most versatile component. It can handle tabbing & key actions.

#### Properties
- **title** *String* <br> Sets intial title of app bar.
- **menu** *Layer or Icon String* <br> If set, it will appear to the left of the title.
- **superLayer** *String or Tab* <br> Same as Framer's superLayer.
- **backgroundColor** *Boolean* <br> Sets the background color of the app bar.
- **titleColor** *Layer or String or Bool* <br> Sets the color of the title.
- **actionColor** *Layer or String* <br> Sets the color of the actions.
- **actions** *Array of Layers or Strings* <br> Sets the actions to the right of the Title.
- **tabs** *Array of String* <br> If set, the app bar will show tabs.
- **tabIcons** *Array of Layers or Icon strings* <br> If set, will replace tab names with icons.
- **tabsInk** *Ink Object* <br> Sets the ink effect on the tabs.
- **tabsAlt** *{Color and/or Opacity}* <br> Sets the non-active tabs color and/or opacity.
- **tabsBarColor** *Color String* <br> Sets color of the bar that appears under the active tab.

#### Example
````coffeescript
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
````

## Banner
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/banner.png)

The banner is a non-blocking notification. Typically, the banner will send you to a specific screen in an app.

#### Properties
- **app** *String* <br> Sets app text.
- **title** *String* <br> Sets title text.
- **message** *String* <br> Sets message text.
- **time** *String* <br> time string that appears next to title.
- **icon** *Layer* <br> This will put the layer inside the banner and size it accordingly. By default, it's a green box.
- **duration** *Integer* <br> This will override the time before the banner animates-out. By default, this is set to 7.
- **animated** *Boolean* <br> When set to `true` sheet will animate-in.

>**NOTE -** The banner will be, by default, draggable. If you drag down, it'll reset, and if you drag up it'll dismiss & destroy the banner.

#### Example

```coffeescript
banner = new material-kit.Banner
  title:"Time to do something"
  message:"Don't miss out"
  icon:iconLayer
  animated:true
```


#### Schema

```javascript
banner : {
  banner.app
  banner.icon
  banner.title
  banner.message
}
```

#### Listening to actions

To make the banner clickable, you can write -
```coffeescript
banner.on Events...
```

## Video
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/video.png)
This is a video object that comes with UI controls.

#### Properties
- **video** *URL* <br> Sets the video being played.
- **image** *URL* <br> Sets image loaded before playing.
- **width** *Int* <br> Sets width of the video.
- **height** *Int* <br> Sets the height of the video.
- **max** *Boolean* <br> Sets the width & height to max for the video on the device.
- **progressColor** *Color String* <br> Sets color of the seeker & progress bar.
- **backgroundColor** *Color String* <br> Sets background color of the video.
- **superLayer** *Layer* <br> Sets superLayer of the video.
- **autoplay** *Boolean* <br> If true, the video will start on load.
- **loop** *Boolean* <br>  If true, the video will repeat when finished.
- **muted** *Boolean* <br>  If true, the video will be muted on computers.
- **idleLimit** *Int* <br>  Sets the duration before the controls hide.
- **showPlayStop** *Boolean* <br>  If true, the circle behind the play/hide will be shown.
- **constraints** *Constraints Object* <br> Sets constraints for the video.

#### Example
```coffeescript
video = new m.Video
	video: "myDog.mp4"
```

#### Schema
```javascript
video : {
	video.controls
		video.progressBar
		video.seeker
			video.seekerDot
		video.timebar
		video.endTime
		video.currentTime
		video.fullscreen
		video.fullscreenExit
}
```

Dialog

![](https://dl.dropboxusercontent.com/u/143270556/material-kit/dialog.png)

Dialogs are blocking notifications that will force the users to address the dialog before continuing.

#### Properties
- **title** *String* <br> Embolded text at the top.
- **message** *String* <br>  Body text before actions.
- **actions** *Array of Strings* <br> Series of actions that can be taken on the dialog.  

#### Example
```coffeescript
dialog = new m.Dialog
  title:"Warning"
  message:"Don't do this"
  actions:["OK", "Cancel"]
```

#### Schema
```javascript
dialog : {
dialog.modal
	dialog.title
	dialog.message
	dialog.actions : { OK, Cancel }
dialog.overlay
}
```

#### Listening to Actions
To listen to different actions, you can use dot notation if it's a single word or brackets for any case

- Dot notation <br> `dialog.actions.OK.on Events...`
- Square bracket notation <br> `dialog.actions["OK"].on Events...`


## Text
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/text.png)

A dynamic text object that'll automatically size for you.

#### Properties
- **text** *String* <br> Adds text by default to the field.
- **fontSize** *Integer* <br>Sets font size in points.
- **fontWeight** *Integer* <br> Sets font weight.
- **fontFamily** *String* <br> Sets font family.
- **lineHeight** *Integer* <br> Sets line height in points. It's automatically done if left unset.
- **textTransform** *String* <br> Sets text-transform style property.
- **opacity** *Integer* <br> Sets opacity.
- **width** *Integer* <br> Sets width in points.
- **height** *Integer* <br> Sets height in points.
- **constraints** *Constraints Object* <br> Will set the text's constraints and run layout using [Dynamic Layout](#dynamic)

#### Example
```coffeescript
	text = new m.Text
		text:"Try Material Kit for Framer JS"
		fontSize:21
		fontWeight:100
		width:320
		constraints:{align:"center"}
```

## Buttons
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/buttons.png)
Button is a small versatile component that handles press states automatically.

#### Properties
- **text** *String* <br> Sets button text.
- **type** *String* <br> Can be `floating`, `raised`, `flat`.
- **backgroundColor** *Hex Color* <br> Will set the background on big buttons.
- **icon** *Icon String* <br> If floating, this will set the icon.
- **color** *Hex Color* <br> Sets `small` and `text` colors.
- **superLayer** *Layer* <br> set the passed layer as the super layer.
- **constraints** *Constraints Object* <br> will set constraints using [Dynamic Layout](#dynamic).
- **ink** *Ink Object* <br> Sets parameters of ink.
- **clip** *Boolean* <br> Sets whether the ink should be cut off when extending beyond the button object.

#### Example
```coffeescript
button = new m.Button
  text:"Download"
  type:"raised"
```

#### Schema
```javascript
button: {
	button.label
}
```

#### Listening to buttons
Listening to buttons is no different than normal framer.

```coffeescript
button.on Events...
```

## Snack Bar
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/snackbar.png)
Snackbars are messages with actions that appear at the bottom of screens. You can assign an action to them.

#### Properties
- **text** *String* <br> Sets the text of the snackbar.
- **action** *String* <br> Sets the action button of the snackbar.
- **actionColor** *Color String* <br> Will set color of the action.
- **animated** *Boolean* <br> Animates the snackbar in.
- **duration** *Int* <br> Sets the time before animating out in seconds.

#### Example
```coffeescript
snack = new m.SnackBar
  text:"I'm afraid you can't do that."
  action:"Retry"
```

#### Schema
```javascript
snack: {
  snack.text
  snack.action
  snack.bg
}
```

## Navigation Bar
![](https://dl.dropboxusercontent.com/u/143270556/material-kit/nav.png)
This is the system bar that appears on the bottom of the device. There are no properties for the navigation bar. Please read about the stack when you implement the Navigation Bar.

#### Example
```coffeescript
nav = new m.NavBar
```

#### Schema
```javascript
nav: {
  nav.back
      icon
  nav.home
      icon
  nav.recent
      icon
}
```

### The Stack
The stack manages what layers are shown in the order of initialization. When a user taps on the back button, if there's anything in the stack it'll be exited.

#### Adding to the stack
To add something to the stack, you can write a little one liner like this:
```coffeescript
m.addToStack(layer)
```
That layer will now be add to the top of the stack.

#### Removing from the stack
If you'd like to manually remove something from the stack, you can write:
```coffeescript
m.removeFromStack()
```
This will remove the previous layer from the stack.

#### Customizing the animation
If your layer has a special animation for when it leaves the stack. Set the layer's exit value.
```coffeescript
fadeOut = ->

layer.animate
	properties:(opacity:0)
	time:.3

layer.exit = fade()
```

When the layer is removed from the stack it will be faded out.

## Supporting Functions
These are a set of functions that were created to help provide functionality to various elements of this module. I opened them up, so if you by chance need any of these functions you can use them.

#### m.utils.inky
This will create the ink effect on any layer that's passed through. There's quite a few properties to modify this.

#### Properties
- **layer** *layer* <br> Sets the layer to have ink effect.
- **color** *Color String* <br> Sets the ink's color.
- **scale** *Int* <br> Sets the max scale of the ink.
- **startScale** *Int* <br> Sets the initial scale of the ink.
- **opacity** *Int* <br> Sets the starting opacity of ink.
- **curve** *Curve String* <br> Sets curve animation of the ink.
- **moveToTap** *Boolean* <br> If true, the ink will appear below the finger. If false, the ink will appear from the center. By default, this is set to true.

#### m.utils.update(layer, styleArray)
This was specifically intended for text objects. If the html or style of a text object is altered, the `width`/`height` of the object would be incorrect. With `m.update`, you'll be able to pass your changes in while also resizing the text layer.

```coffeescript
m.update(headerOne, [text:"Done!"]
```

#### m.utils.dp(int) & m.utils.px(int)
These functions will automatically convert pixels -> points and points -> pixels.

```coffeescript
m.dp(6) # will return 3 points on an iPhone 6
m.px(6) # will return 12 pixels on an iPhone 6
```

#### m.utils.clean(string)
This will remove any space or bracket HTML syntax from a string.
m.clean("`Hi,&nbsp;how&nbsp;are&nbsp;you?<br>`") returns "Hi, how are you?"

#### m.utils.svg(svg path)
This does a series of things: it'll rewrite the SVG path into points, and it'll provide variables to set the layer's height and width.
```coffeescript
svgObj = m.svg(svgPath)
svgObj.svg = # is the new SVG path in points
svgObj.height = # is the value for the height of the layer
svgObj.width = # is the value for the width of the layer
```

#### m.utils.changeFill(layer, color)
This only works with layers with a SVG path. This will change the SVG fill to whatever color is passed.

#### m.utils.capitalize(string)
This will capitalize only the first letter of the entire string.
```coffeescript
print m.capitalize("welcome to the party") #returns "Welcome to the party"
```

#### m.utils.getTime()
Fetches the current time and returns a neatly organized time object with some humanization.

```coffeescript
time = m.getTime()

print time.month # prints "April"
print time.date # prints "12"
print time.day # prints "Tuesday"
print time.hours # prints "10"
print time.mins # prints "33"
print time.secs # prints "1"
```

#### m.utils.timeDelegate(layer, clock24)
This sets up a reoccuring task at the top of every minute to update whatever layer passed to the current time. If `clock24` is set to `true`, it'll return 24-hour clock values. If set to `false` or omitted, it'll return 12-hour clock values.

#### m.utils.timeFormatter(timeObj, clock24)
This will create a time string for screen display. It'll return a hours-minutes string based on the `clock24` object.

#### m.utils.color(colorString)
This changes the color words to be set to m default colors in place of web color defaults. If it's a hexcode, it'll set the hexcode. If invalid, it'll return a grey hexcode.

Supports - `red, blue, pink, grey/gray, black, white, orange, green, light blue/light-blue, yellow`

```coffeescript
m.utils.color("light-blue) # returns "#54C7FC"
```

#### m.utils.autoColor(colorObject)
This will decide whether to return black or white based on the contrast of the color passed through the color object. So an easy example would be: if you pass white it'll return black. If you pass black, it'll return white. It'll work with any color.

```coffeescript
m.utils.autoColor(m.utils.color("yellow")) # returns "#000"
m.utils.autoColor(m.utils.color("blue")) # returns "#FFF"
```

#### m.utils.bgBlur(layer)
Add background blur to any layer using `-webkit-backdrop-filter`. Make sure that whatever layer you use is using `rgba` with an alpha set below `1`.

## How to contribute
Contributions are welcome! If you'd like to add any new components/any new logic, please follow the guidelines below:

### For components
If you'd like to add a component, please start a new coffee file, unless it's a directly related to another component similar to `Tab` and `TabBar`. Please use this boilerplate to help make the components consistent.

```coffeescript
## Allows you to use all the Material Kit components and logic
m = require 'material-kit'

exports.defaults = {
	## Add any thing a user can set in here. For example:
		backgroundColor: "blue"
		}

##Creates a property list
exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	## Creates a setup object that has defaults + any custom props.
	setup = m.utils.setupComponent(array, exports.defaults)

	print setup.backgroundColor ## prints blue
```

### For logic
Please add any layout logic to the layout file. Otherwise, please add the logic to `material-kit-utils.coffee`.

### For data
Please add any referencable data object to `material-kit-library.coffee`. You can either reference it with `m.library["object"]` or with `m.assets["object"]`. Whatever works best for you.

### For help
Feel free to hit me up on [Twitter](https://twitter.com/kvyn_).
