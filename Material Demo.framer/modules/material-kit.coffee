#materialKit Module
#By Kevyn Arnott

# Import framework
exports.layout = layout = require 'material-kit-layout'
exports.lib = library = require 'material-kit-library'
exports.utils = utils = require 'material-kit-utils'

# Setup resources
exports.device = utils.getDevice()
exports.assets = library.assets

## Shortcuts
exports.color = (colorString) ->
  return exports.utils.color(colorString)

exports.dp = (px) ->
  return exports.utils.pt(px)

exports.px = (dp) ->
  return exports.utils.px(dp)


# Import Components
alert = require 'material-kit-alert'
appbar = require 'material-kit-app-bar'
banner = require 'material-kit-banner'
button = require 'material-kit-button'
field = require 'material-kit-field'
icon = require 'material-kit-icon'
keyboard = require 'material-kit-keyboard'
nav = require 'material-kit-nav-bar'
status = require 'material-kit-status-bar'
tab = require 'material-kit-tab-bar'
text = require 'material-kit-text'

## Setup Components
exports.Alert = alert.create
exports.AppBar = appbar.create
exports.Banner = banner.create
exports.Button = button.create
exports.Field = field.create
exports.Icon = icon.create
exports.Keyboard = keyboard.create
exports.NavBar = nav.create
exports.StatusBar = status.create
exports.Tab = tab.tab
exports.TabBar = tab.bar
exports.Text = text.create
