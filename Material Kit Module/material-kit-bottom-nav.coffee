## Allows you to use all the Material Kit components & logic
m = require 'material-kit'

exports.defaults = {
  backgroundColor: "grey100"
  tabsColor: "grey900"
  tabs: undefined
  tabIcons: undefined
  labels: true
  inactiveTabOpacity: .6
}

## Creates a property list
exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->

  ## Creates a setup object that has defaults + any custom props.
  setup = m.utils.setupComponent(array, exports.defaults)

  # Create bottom nav
  bottomNav = new Layer
    name: "bottomNav"
    backgroundColor:m.color(setup.backgroundColor)
		shadowColor: "rgba(0, 0, 0, .12)"
		shadowBlur: m.px(4)
		shadowY: -m.px(2)
  bottomNav.constraints =
    leading: 0
    trailing: 0
    bottom: 46
    height: 56
  m.layout.set(bottomNav)

  # Handle tabs states
  handleTabStates = (bottomNav, layer) ->

    # Put tab objects into array
    tabsArray = Object.keys(bottomNav.tabs)
    activeTabIndex = undefined

    for t, i in tabsArray
      tab = bottomNav.tabs[t]

      # If this is is active tab
      if tab == bottomNav.activeTab

        activeTabIndex = i
        tab.icon.opacity = 1
        tab.icon.constraints.top = 6
        tab.label.opacity = 1
        tab.label.constraints.top = tab.icon

        bottomNav.views[t].animate
          properties:(x:0)
          time:.25

      else

        tab.icon.opacity = setup.inactiveTabOpacity
        tab.icon.constraints.top = 16
        tab.label.opacity = 0
        tab.label.constraints.top = 21

        if activeTabIndex == undefined
          bottomNav.views[t].animate
            properties:(x:m.device.width * -1)
            time:.25
            curve:"cubic-bezier(0.4, 0.0, 0.2, 1)"
        else
          bottomNav.views[t].animate
            properties:(x:m.device.width)
            time:.25
            curve:"cubic-bezier(0.4, 0.0, 0.2, 1)"

      m.layout.animate(time: .1)

  # Prepare objects to put tabs and views into
  bottomNav.tabs = {}
  bottomNav.views = {}

  # Create tabs if you have no more than 5 destinations
  if setup.tabs.length < 6
      for t, i in setup.tabs

        # Create views
        view = new Layer
          name: "View" + t
          backgroundColor: "transparent"
        view.constraints =
          bottom: bottomNav
          top: 0
          width:m.dp(m.device.width)
        view.sendToBack()

        # Put view into object
        bottomNav.views[t] = view

        # All other views except of first to the right
        if i > 0
          view.x = m.device.width

        # Create tab containers
        tab = new Layer
          width:m.device.width/setup.tabs.length
          height: m.px(56)
          x:(m.device.width/setup.tabs.length) * i
          superLayer: bottomNav
          backgroundColor: "transparent"
          clip: true
          name: "tab" + t
        m.layout.set(tab)

        # Create icons
        iconName = setup.tabIcons[i]
        icon = new m.Icon
          name: iconName
          superLayer: tab
          color: setup.tabsColor
          constraints: {top: 16}
        icon.opacity = setup.inactiveTabOpacity
        icon.centerX()

        # Create labels
        label = new m.Text
          name: t
          superLayer: tab
          text: t
          fontSize: 14
          color: setup.tabsColor
          constraints: {top: 21}
        label.opacity = 0
        label.centerX()

        # Put this icon and label as a property
        tab.icon = icon
        tab.label = label
        # Put tab into tabs object
        bottomNav.tabs[t] = tab

        tab.on Events.TouchEnd, ->
          bottomNav.activeTab = @
          handleTabStates(bottomNav, @)

  bottomNav.activeTab = bottomNav.tabs[setup.tabs[0]]
  handleTabStates(bottomNav, bottomNav.activeTab)

  return bottomNav
