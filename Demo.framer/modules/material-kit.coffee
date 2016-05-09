#materialKit Module
#By Kevyn Arnott

# Import framework
exports.layout = layout = require 'material-kit-layout'
exports.lib = library = require 'material-kit-library'
exports.utils = utils = require 'material-kit-utils'

# Setup resources
exports.device = utils.getDevice()
exports.assets = library.assets

#Import Components
alert = require 'material-kit-alert'
banner = require 'material-kit-banner'
button = require 'material-kit-button'
field = require 'material-kit-field'
keyboard = require 'material-kit-keyboard'
nav = require 'material-kit-nav-bar'
sheet = require 'material-kit-sheet'
status = require 'material-kit-status-bar'
tab = require 'material-kit-tab-bar'
text = require 'material-kit-text'

##Setup Components
exports.Alert = alert.create
exports.Banner = banner.create
exports.Button = button.create
exports.Field = field.create
exports.Keyboard = keyboard.create
exports.NavBar = nav.create
exports.Sheet = sheet.create
exports.StatusBar = status.create
exports.Tab = tab.tab
exports.TabBar = tab.bar
exports.Text = text.create
