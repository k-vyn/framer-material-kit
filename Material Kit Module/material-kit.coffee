#materialKit Module
#By Kevyn Arnott

# Import framework
exports.layout = layout = require 'material-kit-layout'
exports.lib = library = require 'material-kit-library'
exports.utils = utils = require 'material-kit-utils'
exports.stack = stack = require 'material-kit-stack'

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

exports.stack = stack.stack

exports.addToStack = (layer) ->
  stack.addToStack(layer)

exports.removeFromStack = (layer) ->
  stack.removeFromStack(layer)


# Import Components
appbar = require 'material-kit-app-bar'
banner = require 'material-kit-banner'
button = require 'material-kit-button'
dialog = require 'material-kit-dialog'
icon = require 'material-kit-icon'
nav = require 'material-kit-nav-bar'
snackbar = require 'material-kit-snack-bar'
status = require 'material-kit-status-bar'
text = require 'material-kit-text'
video = require 'material-kit-video'

## Setup Components
exports.AppBar = appbar.create
exports.Banner = banner.create
exports.Button = button.create
exports.Dialog = dialog.create
exports.Icon = icon.create
exports.NavBar = nav.create
exports.SnackBar = snackbar.create
exports.StatusBar = status.create
exports.Text = text.create
exports.Video = video.create
