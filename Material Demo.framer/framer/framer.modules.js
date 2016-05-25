require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"demo_data":[function(require,module,exports){
exports.json = {
  home: [
    {
      "title": "Making Material Design",
      "author": "Google Design",
      "views": "409,130",
      "short_views": "409K",
      "rel_date": "1 year ago",
      "date": "May 28, 2015",
      "subs": "41,367",
      "thumbs_up": "7K",
      "thumbs_down": "156",
      "video": "https://dl.dropboxusercontent.com/u/143270556/YouTube/making-material-design.mp4",
      "thumbnail": "https://i.ytimg.com/vi/rrT6v5sOwJg/maxresdefault.jpg",
      "profile_pic": "https://yt3.ggpht.com/-99RMkL32yk8/AAAAAAAAAAI/AAAAAAAAAAA/VRQkMbulnco/s88-c-k-no-rj-c0xffffff/photo.jpg"
    }, {
      "title": "$18,000 a night HOTEL ROOM",
      "author": "CaiseyNeistat",
      "views": "2,123,725",
      "short_views": "2M",
      "date": "May 19, 2016",
      "rel_date": "3 days ago",
      "subs": "3,053,812",
      "thumbs_up": "74K",
      "thumbs_down": "1.9K",
      "video": "https://dl.dropboxusercontent.com/u/143270556/YouTube/casey-neistat.mp4",
      "thumbnail": "https://i.ytimg.com/vi/8sqY6QXtTsI/hqdefault.jpg",
      "profile_pic": "https://yt3.ggpht.com/-x2NNN2y49G0/AAAAAAAAAAI/AAAAAAAAAAA/RhwVaxMvqW8/s88-c-k-no-rj-c0xffffff/photo.jpg"
    }, {
      "title": "Hillary & Bernie Cold Open - SNL",
      "author": "Saturday Night Live",
      "views": "1,027,676",
      "short_views": "1M",
      "rel_date": "1 day ago",
      "date": "May 22, 2016",
      "subs": "2,400,022",
      "thumbs_up": "11K",
      "thumbs_down": "988",
      "video": "https://dl.dropboxusercontent.com/u/143270556/YouTube/hilary-bernie.mp4",
      "thumbnail": "https://i.ytimg.com/vi/HRqZhJcae3M/maxresdefault.jpg",
      "profile_pic": "https://yt3.ggpht.com/-x-pKW1yb6y8/AAAAAAAAAAI/AAAAAAAAAAA/jPbMU4ZW0sA/s88-c-k-no-rj-c0xffffff/photo.jpg"
    }, {
      "title": "European windows are awesome",
      "author": "Matthias Wandel",
      "views": "489,647",
      "short_views": "489K",
      "rel_date": "1 day ago",
      "date": "May 22, 2016",
      "subs": "21,409",
      "thumbs_up": "3K",
      "thumbs_down": "105",
      "video": "https://dl.dropboxusercontent.com/u/143270556/YouTube/european-windows.mp4",
      "thumbnail": "https://i.ytimg.com/vi/LT8eBjlcT8s/maxresdefault.jpg",
      "profile_pic": "https://yt3.ggpht.com/-S1HYZOVjayE/AAAAAAAAAAI/AAAAAAAAAAA/UY73x3DoIvg/s88-c-k-no-rj-c0xffffff/photo.jpg"
    }, {
      "title": "Yo",
      "author": "Saturday Night Live",
      "views": "1,027,676",
      "short_views": "1M",
      "rel_date": "1 day ago",
      "date": "May 22, 2016",
      "subs": "2,400,022",
      "thumbs_up": "11K",
      "thumbs_down": "988",
      "video": "https://dl.dropboxusercontent.com/u/143270556/YouTube/hilary-bernie.mp4",
      "thumbnail": "https://i.ytimg.com/vi/HRqZhJcae3M/maxresdefault.jpg",
      "profile_pic": "https://www.youtube.com/user/SaturdayNightLive"
    }
  ]
};


},{}],"material-kit-app-bar":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  title: "Title",
  menu: void 0,
  type: "appbar",
  backgroundColor: "white",
  tabs: void 0,
  titleColor: "black",
  actionColor: "black",
  tabs: void 0,
  tabsColor: void 0,
  tabsInk: {
    color: "blueGrey",
    scale: 8
  },
  tabsBarColor: "yellow",
  tabsAlt: {
    color: void 0,
    opacity: .7
  },
  tabIcons: void 0,
  actions: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var act, actionsArray, bar, barArea, handleTabStates, i, icon, j, k, l, label, layer, len, len1, len2, len3, n, ref, ref1, ref2, setup, t, tab, tabsActiveBar, title, titleLeading, view;
  setup = m.utils.setupComponent(array, exports.defaults);
  bar = new Layer({
    name: "App Bar",
    backgroundColor: m.color(setup.backgroundColor),
    shadowColor: "rgba(0, 0, 0, .12)",
    shadowBlur: m.px(4),
    shadowY: m.px(2)
  });
  bar.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 80
  };
  if (setup.tabs) {
    bar.constraints.height = 128;
  }
  barArea = new Layer({
    superLayer: bar,
    backgroundColor: "transparent",
    name: "barArea"
  });
  barArea.constraints = {
    leading: 0,
    trailing: 0,
    height: 56,
    bottom: 0
  };
  if (setup.tabs && setup.tabs.length > 2) {
    barArea.constraints.bottom = 48;
  }
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(bar);
  }
  m.layout.set([bar, barArea]);
  bar.type = setup.type;
  ref = Framer.CurrentContext.layers;
  for (j = 0, len = ref.length; j < len; j++) {
    layer = ref[j];
    if (layer.type === "statusBar") {
      this.statusBar = layer;
      bar.placeBehind(this.statusBar);
    }
  }
  if (setup.titleColor === "black") {
    setup.titleColor = m.utils.autoColor(bar.backgroundColor).toHexString();
  }
  if (setup.actionColor === "black") {
    setup.actionColor = m.utils.autoColor(bar.backgroundColor).toHexString();
  }
  if (typeof setup.title === "string") {
    title = new m.Text({
      color: setup.titleColor,
      fontWeight: 500,
      superLayer: barArea,
      text: setup.title,
      fontSize: 20
    });
  }
  m.utils.specialChar(title);
  titleLeading = 16;
  if (setup.menu) {
    bar.menu = new m.Icon({
      name: setup.menu,
      color: setup.actionColor,
      superLayer: barArea,
      constraints: {
        leading: 16,
        verticalCenter: title
      },
      clip: false
    });
    titleLeading = [bar.menu, 16];
    m.utils.inky({
      layer: bar.menu,
      moveToTap: false,
      color: "white",
      opacity: .4,
      scale: .7,
      startScale: .7
    });
  }
  title.constraints = {
    bottom: 12,
    leading: titleLeading
  };
  if (setup.leftAction) {
    title.constraints.leading = 73;
  }
  m.layout.set({
    target: [title]
  });
  actionsArray = [];
  if (setup.actions) {
    ref1 = setup.actions;
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      act = ref1[i];
      if (i === 0) {
        icon = new m.Icon({
          name: act,
          superLayer: barArea,
          constraints: {
            trailing: 24,
            verticalCenter: title
          },
          color: setup.actionColor,
          clip: false
        });
        actionsArray.push(icon);
      } else {
        icon = new m.Icon({
          name: act,
          superLayer: barArea,
          constraints: {
            trailing: [actionsArray[i - 1], 24],
            verticalCenter: title
          },
          color: setup.actionColor,
          clip: false
        });
        actionsArray.push(icon);
      }
    }
    for (l = 0, len2 = actionsArray.length; l < len2; l++) {
      act = actionsArray[l];
      m.utils.inky({
        layer: act,
        moveToTap: false,
        color: "white",
        opacity: .4,
        scale: .8,
        startScale: .7
      });
    }
  }
  if (setup.tabs && setup.tabs.length > 2) {
    handleTabStates = function(bar, layer) {
      var activeTabIndex, color, len3, n, opacity, results, t, tab, tabsArray;
      tabsArray = Object.keys(bar.tabs);
      activeTabIndex = void 0;
      results = [];
      for (i = n = 0, len3 = tabsArray.length; n < len3; i = ++n) {
        t = tabsArray[i];
        tab = bar.tabs[t];
        if (tab === bar.activeTab) {
          activeTabIndex = i;
          bar.views[t].animate({
            properties: {
              x: 0
            },
            time: .25
          });
          tab.label.opacity = 1;
          tab.label.color = setup.tabsColor;
          bar.activeBar.animate({
            properties: {
              x: layer.x
            },
            time: .25,
            curve: "bezier-curve(.2, 0.4, 0.4, 1.0)"
          });
          results.push(m.utils.update(title, [
            {
              text: m.utils.capitalize(bar.activeTab.label.name)
            }
          ]));
        } else {
          if (activeTabIndex === void 0) {
            bar.views[t].animate({
              properties: {
                x: m.device.width * -1
              },
              time: .25,
              curve: "cubic-bezier(0.4, 0.0, 0.2, 1)"
            });
          } else {
            bar.views[t].animate({
              properties: {
                x: m.device.width
              },
              time: .25,
              curve: "cubic-bezier(0.4, 0.0, 0.2, 1)"
            });
          }
          opacity = 1;
          color = tab.label.color;
          if (setup.tabsAlt.opacity !== void 0) {
            opacity = setup.tabsAlt.opacity;
          }
          if (setup.tabsAlt.color !== void 0) {
            color = setup.tabsAlt.color;
          }
          tab.label.opacity = opacity;
          results.push(tab.label.color = color);
        }
      }
      return results;
    };
    tabsActiveBar = new Layer({
      height: m.px(2),
      width: m.device.width / setup.tabs.length,
      backgroundColor: m.color(setup.tabsBarColor),
      superLayer: bar
    });
    tabsActiveBar.constraints = {
      bottom: 0
    };
    bar.activeBar = tabsActiveBar;
    bar.tabs = {};
    bar.views = {};
    if (setup.tabs.length < 5) {
      ref2 = setup.tabs;
      for (i = n = 0, len3 = ref2.length; n < len3; i = ++n) {
        t = ref2[i];
        view = new Layer({
          name: "View " + t,
          backgroundColor: "transparent"
        });
        view.constraints = {
          top: bar,
          bottom: 0,
          width: m.dp(m.device.width)
        };
        bar.views[t] = view;
        if (i > 0) {
          view.x = m.device.width;
        }
        tab = new Layer({
          width: m.device.width / setup.tabs.length,
          height: m.px(48),
          x: (m.device.width / setup.tabs.length) * i,
          superLayer: bar,
          backgroundColor: "transparent",
          clip: true,
          name: "tab "
        });
        tab.constraints = {
          bottom: 0
        };
        m.layout.set(tab);
        if (setup.tabsColor === void 0) {
          setup.tabsColor = m.utils.autoColor(bar.backgroundColor).toHexString();
        }
        label = "";
        if (setup.tabIcons) {
          icon = setup.tabIcons[i];
          label = new m.Icon({
            name: icon,
            superLayer: tab,
            color: setup.tabsColor,
            constraints: {
              align: "center"
            }
          });
        } else {
          label = new m.Text({
            superLayer: tab,
            constraints: {
              align: "center"
            },
            text: t,
            textTransform: 'Uppercase',
            fontSize: 14,
            color: setup.tabsColor
          });
        }
        label.name = t;
        tab.label = label;
        setup.tabsInk["layer"] = tab;
        m.utils.inky(setup.tabsInk);
        bar.tabs[t] = tab;
        tab.on(Events.TouchEnd, function() {
          bar.activeTab = this;
          return handleTabStates(bar, this);
        });
      }
    }
  }
  if (setup.tabs) {
    if (setup.tabs.length > 2) {
      bar.activeTab = bar.tabs[setup.tabs[0]];
      handleTabStates(bar, bar.activeTab);
    }
  }
  bar.title = title;
  return bar;
};


},{"material-kit":"material-kit"}],"material-kit-banner":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  app: "App",
  title: "Title",
  message: "Message",
  action: "Action",
  time: "• now",
  icon: void 0,
  duration: 7,
  animated: true
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var app, banner, bannerBuffer, message, setup, time, title;
  setup = m.utils.setupComponent(array, exports.defaults);
  banner = new Layer({
    backgroundColor: "white",
    name: "banner",
    shadowColor: "rgba(0,0,0,.24)",
    shadowBlur: m.px(2),
    shadowY: m.px(2)
  });
  banner.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 74
  };
  switch (m.device.name) {
    case "ipad":
      this.leadingIcon = 200;
      this.topIcon = 15;
      this.topTitle = 11;
      break;
    case "ipad-pro":
      this.leadingIcon = 192;
      this.topIcon = 12;
      this.topTitle = 9;
      break;
    case "iphone-6s-plus":
      this.leadingIcon = 15;
      this.topIcon = 12;
      this.topTitle = 10;
      break;
    default:
      this.leadingIcon = 15;
      this.topIcon = 8;
      this.topTitle = 6;
  }
  if (setup.icon === void 0) {
    setup.icon = new Layer({
      superLayer: banner
    });
    setup.icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)";
  } else {
    banner.addSubLayer(setup.icon);
  }
  setup.icon.borderRadius = m.utils.px(4.5);
  setup.icon.name = "icon";
  setup.icon.constraints = {
    height: 16,
    width: 16,
    leading: this.leadingIcon,
    top: this.topIcon
  };
  app = new m.Text({
    style: "app",
    text: setup.app,
    color: "blue",
    fontWeight: "medium",
    fontSize: 11,
    superLayer: banner,
    name: "title"
  });
  app.constraints = {
    verticalCenter: setup.icon,
    leading: [setup.icon, 5]
  };
  title = new m.Text({
    style: "title",
    text: setup.title,
    color: "black",
    fontSize: 13,
    superLayer: banner,
    name: "title"
  });
  title.constraints = {
    leadingEdges: setup.icon,
    top: [setup.icon, 7]
  };
  message = new m.Text({
    style: "title",
    text: setup.message,
    color: "grey",
    fontSize: 13,
    superLayer: banner,
    name: "title"
  });
  message.constraints = {
    leadingEdges: setup.icon,
    top: [title, 5]
  };
  time = new m.Text({
    style: "time",
    text: setup.time,
    color: "grey",
    fontSize: 11,
    superLayer: banner,
    name: "time"
  });
  time.constraints = {
    leading: [app, 3],
    bottomEdges: app
  };
  m.layout.set();
  m.utils.bgBlur(banner);
  banner.draggable = true;
  banner.draggable.horizontal = false;
  banner.draggable.constraints = {
    y: 0
  };
  banner.draggable.bounceOptions = {
    friction: 25,
    tension: 250
  };
  banner.on(Events.DragEnd, function() {
    if (banner.maxY < m.utils.px(68)) {
      banner.animate({
        properties: {
          maxY: 0
        },
        time: .15,
        curve: "ease-in-out"
      });
      return Utils.delay(.25, function() {
        return banner.destroy();
      });
    }
  });
  bannerBuffer = new Layer({
    maxY: 0,
    name: "buffer",
    backgroundColor: "#1B1B1C",
    opacity: .9,
    superLayer: banner,
    width: m.device.width,
    maxY: banner.y,
    height: m.device.height
  });
  m.utils.bgBlur(bannerBuffer);
  if (setup.animated === true) {
    banner.y = 0 - banner.height;
    banner.animate({
      properties: {
        y: 0
      },
      time: .25,
      curve: "spring(400,20,0)"
    });
  }
  if (setup.duration) {
    Utils.delay(setup.duration, function() {
      return banner.animate({
        properties: {
          maxY: 0
        },
        time: .25,
        curve: "ease-in-out"
      });
    });
    Utils.delay(setup.duration + .25, function() {
      return banner.destroy();
    });
  }
  banner.icon = setup.icon;
  banner.app = app;
  banner.title = title;
  banner.message = message;
  return banner;
};


},{"material-kit":"material-kit"}],"material-kit-button":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  text: "text",
  type: "flat",
  backgroundColor: "white",
  color: "teal300",
  name: "button",
  superLayer: void 0,
  constraints: void 0,
  icon: "star",
  clip: true,
  ink: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var button, icon, label, passedInk, pressedBGC, setup;
  setup = m.utils.setupComponent(array, exports.defaults);
  button = new Layer({
    name: setup.name,
    clip: setup.clip
  });
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(button);
  }
  button.type = setup.type;
  switch (setup.type) {
    case "floating":
      button.constraints = {
        width: 56,
        height: 56,
        bottom: 64,
        trailing: 17
      };
      if (m.device.scale < 4) {
        button.constraints.width = 64;
        button.constraints.height = 64;
      }
      button.borderRadius = m.px(32);
      button.shadowColor = "rgba(0,0,0,.12)";
      button.shadowY = m.px(2);
      button.shadowBlur = m.px(6);
      button.backgroundColor = m.color(setup.backgroundColor);
      if (typeof setup.icon === "string") {
        icon = m.Icon({
          name: setup.icon,
          color: setup.color,
          superLayer: button,
          constraints: {
            align: "center"
          }
        });
      }
      m.layout.set({
        target: [button]
      });
      m.layout.set({
        target: [icon]
      });
      break;
    default:
      label = new m.Text({
        text: setup.text,
        superLayer: button,
        textTransform: "uppercase",
        color: setup.color,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: 500
      });
      label.constraints = {
        align: "center"
      };
      button.props = {
        backgroundColor: m.color(setup.backgroundColor),
        height: m.px(36),
        width: label.width + m.px(16),
        borderRadius: m.px(2),
        clip: setup.clip
      };
      if (button.width < m.px(64)) {
        button.width = m.px(64);
      }
      switch (setup.type) {
        case "raised":
          button.origBGC = button.backgroundColor;
          button.shadowColor = "rgba(0,0,0,.24)";
          button.shadowY = m.px(2);
          button.shadowBlur = m.px(2);
          pressedBGC = button.backgroundColor.lighten(10);
          button.on(Events.TouchStart, function() {
            return button.animate({
              properties: {
                backgroundColor: pressedBGC,
                shadowY: m.px(8),
                shadowBlur: m.px(8)
              }
            });
          });
          button.on(Events.TouchEnd, function() {
            return button.animate({
              properties: {
                backgroundColor: button.origBGC,
                shadowY: m.px(2),
                shadowBlur: m.px(2)
              }
            });
          });
          break;
        case "flat":
          button.origBGC = button.backgroundColor;
          pressedBGC = button.backgroundColor.darken(5);
          button.on(Events.TouchStart, function() {
            return button.animate({
              properties: {
                backgroundColor: pressedBGC
              }
            });
          });
          button.on(Events.TouchEnd, function() {
            return button.animate({
              properties: {
                backgroundColor: button.origBGC
              }
            });
          });
      }
      if (setup.constraints) {
        button.constraints = setup.constraints;
      }
      m.layout.set({
        target: [button, label]
      });
  }
  if (setup.ink) {
    passedInk = setup.ink;
    passedInk.layer = button;
    m.utils.inky(passedInk);
  }
  return button;
};


},{"material-kit":"material-kit"}],"material-kit-dialog":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  title: "Title",
  message: "Message",
  actions: ["Agree", "Decline"]
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var act, actions, button, charCount, dialog, i, index, j, len, len1, message, modal, overlay, ref, ref1, setup, title;
  setup = m.utils.setupComponent(array, exports.defaults);
  dialog = new Layer({
    backgroundColor: "transparent",
    name: "dialog"
  });
  dialog.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  overlay = new Layer({
    backgroundColor: "#5E5E5E",
    superLayer: dialog,
    name: "overlay",
    opacity: .6
  });
  overlay.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  modal = new Layer({
    backgroundColor: "white",
    superLayer: dialog,
    borderRadius: m.utils.px(2),
    name: "modal",
    shadowColor: "rgba(0,0,0,.2)",
    shadowY: 24,
    shadowBlur: 24
  });
  modal.constraints = {
    align: "center",
    width: 280,
    height: 400
  };
  title = new m.Text({
    superLayer: modal,
    text: setup.title,
    fontWeight: "semibold",
    fontSize: 20,
    name: "title",
    lineHeight: 20,
    constraints: {
      top: 20,
      width: 220,
      leading: 24
    }
  });
  message = new m.Text({
    superLayer: modal,
    text: setup.message,
    fontSize: 13,
    name: "message",
    lineHeight: 16,
    constraints: {
      top: [title, 10],
      leading: 24,
      width: 220
    }
  });
  m.layout.set({
    target: [dialog, overlay, modal, title, message]
  });
  modal.constraints["height"] = 20 + m.utils.pt(title.height) + 10 + m.utils.pt(message.height) + 24 + 44;
  m.layout.set({
    target: [overlay, modal]
  });
  dialog.actions = {};
  actions = [];
  charCount = 0;
  if (setup.actions.length > 1) {
    charCount = setup.actions[0].length + setup.actions[1].length;
  }
  if (setup.actions.length < 3 && charCount < 24) {
    ref = setup.actions;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      act = ref[index];
      button = new m.Button({
        superLayer: modal,
        text: setup.actions[index],
        color: "blue"
      });
      if (index === 0) {
        button.constraints = {
          bottom: 8,
          trailing: 8
        };
      } else {
        button.constraints = {
          bottom: 8,
          trailing: [actions[index - 1], 8]
        };
      }
      dialog.actions[setup.actions[index]] = button;
      actions.push(button);
      m.layout.set({
        target: button
      });
    }
  } else {
    modal.constraints["height"] = 20 + m.utils.pt(title.height) + 10 + m.utils.pt(message.height) + 32 + (setup.actions.length * 36);
    m.layout.set({
      target: modal
    });
    ref1 = setup.actions;
    for (index = j = 0, len1 = ref1.length; j < len1; index = ++j) {
      act = ref1[index];
      button = new m.Button({
        superLayer: modal,
        text: setup.actions[index],
        color: "blue"
      });
      if (index === 0) {
        button.constraints = {
          top: [message, 24],
          trailing: 8
        };
      } else {
        button.constraints = {
          trailing: 8,
          top: actions[index - 1]
        };
      }
      dialog.actions[setup.actions[index]] = button;
      actions.push(button);
      m.layout.set({
        target: button
      });
    }
  }
  dialog.overlay = overlay;
  dialog.modal = modal;
  dialog.title = title;
  dialog.message = message;
  return dialog;
};


},{"material-kit":"material-kit"}],"material-kit-icon":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  name: "star",
  scale: m.device.scale,
  color: m.color("black"),
  superLayer: void 0,
  constraints: void 0,
  clip: true
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var frame, iconLayer, paddingRight, paddingTop, setup;
  setup = m.utils.setupComponent(array, exports.defaults);
  if (typeof setup.name === "string") {
    iconLayer = new Layer({
      html: "<i class='material-icons md-24'>" + setup.name + "</i>",
      color: m.color(setup.color),
      backgroundColor: "transparent",
      clip: setup.clip,
      name: setup.name,
      superLayer: setup.superLayer
    });
    paddingRight = 0;
    paddingTop = 0;
    switch (m.device.scale) {
      case 4:
        paddingTop = m.px(12) + "px";
        paddingRight = m.px(2) + "px";
        break;
      case 3:
        paddingTop = m.px(10) + "px";
        paddingRight = m.px(6) + "px";
        break;
      case 2:
        paddingTop = m.px(8) + "px";
        paddingRight = m.px(8) + "px";
        break;
      case 1:
        paddingTop = m.px(16) + "px";
        paddingRight = m.px(7) + "px";
    }
    frame = m.utils.textAutoSize(iconLayer);
    iconLayer.html = ("<span style='-webkit-transform: scale(" + setup.scale + "); position: absolute;'>") + iconLayer.html;
    iconLayer.width = m.px(24);
    iconLayer.height = m.px(frame.height);
    iconLayer.style = {
      "display": "inline-block",
      "padding-top": paddingTop,
      "padding-right": paddingRight,
      "text-align": "center"
    };
    if (setup.constraints) {
      iconLayer.constraints = setup.constraints;
      m.layout.set({
        target: iconLayer
      });
    }
    return iconLayer;
  } else {
    iconLayer = setup.layer;
    return iconLayer;
  }
};


},{"material-kit":"material-kit"}],"material-kit-layout":[function(require,module,exports){
var layout, m;

m = require('material-kit');

exports.defaults = {
  animations: {
    target: void 0,
    constraints: void 0,
    curve: "ease-in-out",
    curveOptions: void 0,
    time: 1,
    delay: 0,
    repeat: void 0,
    colorModel: void 0,
    stagger: void 0,
    fadeOut: false,
    fadeIn: false
  }
};

layout = function(array) {
  var blueprint, i, index, j, k, l, layer, len, len1, len2, newConstraint, props, ref, ref1, setup, targetLayers;
  setup = {};
  targetLayers = [];
  blueprint = [];
  if (array) {
    ref = Object.keys(exports.defaults.animations);
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      if (array[i]) {
        setup[i] = array[i];
      } else {
        setup[i] = exports.defaults.animations[i];
      }
    }
  }
  if (setup.target) {
    if (setup.target.length) {
      targetLayers = setup.target;
    } else {
      targetLayers.push(setup.target);
    }
  } else {
    targetLayers = Framer.CurrentContext.layers;
  }
  if (setup.target) {
    if (setup.constraints) {
      ref1 = Object.keys(setup.constraints);
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        newConstraint = ref1[k];
        setup.target.constraints[newConstraint] = setup.constraints[newConstraint];
      }
    }
  }
  for (index = l = 0, len2 = targetLayers.length; l < len2; index = ++l) {
    layer = targetLayers[index];
    layer.calculatedPosition = {};
    if (layer.constraints) {
      props = {};
      layer.superFrame = {};
      if (layer.superLayer) {
        layer.superFrame.height = layer.superLayer.height;
        layer.superFrame.width = layer.superLayer.width;
      } else {
        layer.superFrame.height = m.device.height;
        layer.superFrame.width = m.device.width;
      }
      if (layer.constraints.leading !== void 0 && layer.constraints.trailing !== void 0) {
        layer.constraints.autoWidth = {};
      }
      if (layer.constraints.top !== void 0 && layer.constraints.bottom !== void 0) {
        layer.constraints.autoHeight = {};
      }
      if (layer.constraints.width !== void 0) {
        props.width = m.utils.px(layer.constraints.width);
      } else {
        props.width = layer.width;
      }
      if (layer.constraints.height !== void 0) {
        props.height = m.utils.px(layer.constraints.height);
      } else {
        props.height = layer.height;
      }
      if (layer.constraints.leadingEdges !== void 0) {
        if (layer.constraints.leadingEdges.calculatedPosition.x === void 0) {
          layer.constraints.leadingEdges.calculatedPosition.x = layer.constraints.leadingEdges.x;
        }
        props.x = layer.constraints.leadingEdges.calculatedPosition.x;
      }
      if (layer.constraints.trailingEdges !== void 0) {
        if (layer.constraints.trailingEdges.calculatedPosition.x === void 0) {
          layer.constraints.trailingEdges.calculatedPosition.x = layer.constraints.trailingEdges.x;
        }
        props.x = layer.constraints.trailingEdges.calculatedPosition.x - props.width + layer.constraints.trailingEdges.calculatedPosition.width;
      }
      if (layer.constraints.topEdges !== void 0) {
        if (layer.constraints.topEdges.calculatedPosition.y === void 0) {
          layer.constraints.topEdges.calculatedPosition.y = layer.constraints.topEdges.y;
        }
        props.y = layer.constraints.topEdges.calculatedPosition.y;
      }
      if (layer.constraints.bottomEdges !== void 0) {
        if (layer.constraints.bottomEdges.calculatedPosition.y === void 0) {
          layer.constraints.bottomEdges.calculatedPosition.y = layer.constraints.bottomEdges.y;
        }
        props.y = layer.constraints.bottomEdges.calculatedPosition.y - props.height + layer.constraints.bottomEdges.calculatedPosition.height;
      }
      if (layer.constraints.leading !== void 0) {
        if (layer.constraints.leading === parseInt(layer.constraints.leading, 10)) {
          props.x = m.utils.px(layer.constraints.leading);
        } else {
          if (layer.constraints.leading.length === void 0) {
            if (layer.constraints.leading.calculatedPosition.x === void 0) {
              layer.constraints.leading.calculatedPosition.x = layer.constraints.leading.x;
            }
            props.x = layer.constraints.leading.calculatedPosition.x + layer.constraints.leading.calculatedPosition.width;
          } else {
            if (layer.constraints.leading[0].calculatedPosition.x === void 0) {
              layer.constraints.leading[0].calculatedPosition.x = layer.constraints.leading[0].x;
            }
            props.x = layer.constraints.leading[0].calculatedPosition.x + layer.constraints.leading[0].calculatedPosition.width + m.utils.px(layer.constraints.leading[1]);
          }
        }
      }
      if (layer.constraints.autoWidth !== void 0) {
        layer.constraints.autoWidth.startX = props.x;
      }
      if (layer.constraints.trailing !== void 0) {
        if (layer.constraints.trailing === parseInt(layer.constraints.trailing, 10)) {
          props.x = layer.superFrame.width - m.utils.px(layer.constraints.trailing) - props.width;
        } else {
          if (layer.constraints.trailing.length === void 0) {
            if (layer.constraints.trailing.calculatedPosition.x === void 0) {
              layer.constraints.trailing.calculatedPosition.x = layer.constraints.trailing.x;
            }
            props.x = layer.constraints.trailing.calculatedPosition.x - props.width;
          } else {
            if (layer.constraints.trailing[0].calculatedPosition.x === void 0) {
              layer.constraints.trailing[0].calculatedPosition.x = layer.constraints.trailing[0].x;
            }
            props.x = layer.constraints.trailing[0].calculatedPosition.x - m.utils.px(layer.constraints.trailing[1]) - props.width;
          }
        }
      }
      if (layer.constraints.autoWidth !== void 0) {
        layer.constraints.autoWidth.calculatedPositionX = props.x;
        props.x = layer.constraints.autoWidth.startX;
        props.width = layer.constraints.autoWidth.calculatedPositionX - layer.constraints.autoWidth.startX + props.width;
      }
      if (layer.constraints.top !== void 0) {
        if (layer.constraints.top === parseInt(layer.constraints.top, 10)) {
          props.y = m.utils.px(layer.constraints.top);
        } else {
          if (layer.constraints.top.length === void 0) {
            if (layer.constraints.top.calculatedPosition.y === void 0) {
              layer.constraints.top.calculatedPosition.y = layer.constraints.top.y;
            }
            props.y = layer.constraints.top.calculatedPosition.y + layer.constraints.top.calculatedPosition.height;
          } else {
            if (layer.constraints.top[0].calculatedPosition.y === void 0) {
              layer.constraints.top[0].calculatedPosition.y = layer.constraints.top[0].y;
            }
            props.y = layer.constraints.top[0].calculatedPosition.y + layer.constraints.top[0].calculatedPosition.height + m.utils.px(layer.constraints.top[1]);
          }
        }
      }
      if (layer.constraints.autoHeight !== void 0) {
        layer.constraints.autoHeight.startY = props.y;
      }
      if (layer.constraints.bottom !== void 0) {
        if (layer.constraints.bottom === parseInt(layer.constraints.bottom, 10)) {
          props.y = layer.superFrame.height - m.utils.px(layer.constraints.bottom) - props.height;
        } else {
          if (layer.constraints.bottom.length === void 0) {
            if (layer.constraints.bottom.calculatedPosition.y === void 0) {
              layer.constraints.bottom.calculatedPosition.y = layer.constraints.bottom.y;
            }
            props.y = layer.constraints.bottom.calculatedPosition.y - props.height;
          } else {
            if (layer.constraints.bottom[0].calculatedPosition.y === void 0) {
              layer.constraints.bottom[0].calculatedPosition.y = layer.constraints.bottom[0].y;
            }
            props.y = layer.constraints.bottom[0].calculatedPosition.y - m.utils.px(layer.constraints.bottom[1]) - props.height;
          }
        }
      }
      if (layer.constraints.autoHeight !== void 0) {
        layer.constraints.autoHeight.calculatedPositionY = props.y;
        props.height = layer.constraints.autoHeight.calculatedPositionY - layer.constraints.autoHeight.startY + props.height;
        props.y = layer.constraints.autoHeight.startY;
      }
      if (layer.constraints.align !== void 0) {
        if (layer.constraints.align === "horizontal") {
          props.x = layer.superFrame.width / 2 - props.width / 2;
        }
        if (layer.constraints.align === "vertical") {
          props.y = layer.superFrame.height / 2 - props.height / 2;
        }
        if (layer.constraints.align === "center") {
          props.x = layer.superFrame.width / 2 - props.width / 2;
          props.y = layer.superFrame.height / 2 - props.height / 2;
        }
      }
      if (layer.constraints.horizontalCenter !== void 0) {
        props.x = layer.constraints.horizontalCenter.calculatedPosition.x + (layer.constraints.horizontalCenter.calculatedPosition.width - props.width) / 2;
      }
      if (layer.constraints.verticalCenter !== void 0) {
        props.y = layer.constraints.verticalCenter.calculatedPosition.y + (layer.constraints.verticalCenter.calculatedPosition.height - props.height) / 2;
      }
      if (layer.constraints.center !== void 0) {
        props.x = layer.constraints.center.calculatedPosition.x + (layer.constraints.center.calculatedPosition.width - props.width) / 2;
        props.y = layer.constraints.center.calculatedPosition.y + (layer.constraints.center.calculatedPosition.height - props.height) / 2;
      }
      layer.calculatedPosition = props;
    } else {
      layer.calculatedPosition = layer.props;
    }
    blueprint.push(layer);
  }
  return blueprint;
};

exports.set = function(array) {
  var blueprint, i, index, j, k, key, layer, len, len1, props, ref, results, setup;
  setup = {};
  props = {};
  if (array) {
    ref = Object.keys(exports.defaults.animations);
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      if (array[i]) {
        setup[i] = array[i];
      } else {
        setup[i] = exports.defaults.animations[i];
      }
    }
  }
  blueprint = layout(array);
  results = [];
  for (index = k = 0, len1 = blueprint.length; k < len1; index = ++k) {
    layer = blueprint[index];
    results.push((function() {
      var l, len2, ref1, results1;
      ref1 = Object.keys(layer.calculatedPosition);
      results1 = [];
      for (l = 0, len2 = ref1.length; l < len2; l++) {
        key = ref1[l];
        results1.push(layer[key] = layer.calculatedPosition[key]);
      }
      return results1;
    })());
  }
  return results;
};

exports.animate = function(array) {
  var blueprint, delay, i, index, j, k, layer, len, len1, props, ref, results, setup, stag;
  setup = {};
  props = {};
  if (array) {
    ref = Object.keys(exports.defaults.animations);
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      if (array[i]) {
        setup[i] = array[i];
      } else {
        setup[i] = exports.defaults.animations[i];
      }
    }
  }
  blueprint = layout(array);
  results = [];
  for (index = k = 0, len1 = blueprint.length; k < len1; index = ++k) {
    layer = blueprint[index];
    delay = setup.delay;
    if (setup.stagger) {
      stag = setup.stagger;
      delay = (index * stag) + delay;
    }
    if (setup.fadeOut) {
      if (layer === setup.fadeOut) {
        layer.calculatedPosition.opacity = 0;
      }
    }
    if (setup.fadeIn) {
      layer.calculatedPosition.opacity = 1;
    }
    layer.animate({
      properties: layer.calculatedPosition,
      time: setup.time,
      delay: delay,
      curve: setup.curve,
      repeat: setup.repeat,
      colorModel: setup.colorModel,
      curveOptions: setup.curveOptions
    });
    results.push(layer.calculatedPosition = props);
  }
  return results;
};


},{"material-kit":"material-kit"}],"material-kit-library":[function(require,module,exports){
var layer, m;

m = require("material-kit");

layer = new Layer;

exports.layerProps = Object.keys(layer.props);

exports.layerProps.push("superLayer");

exports.layerProps.push("constraints");

exports.layerStyles = Object.keys(layer.style);

layer.destroy();

exports.assets = {
  home: "<svg width='16px' height='16px' viewBox='172 16 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <ellipse id='path-1' cx='180' cy='24' rx='8' ry='8'></ellipse> <mask id='mask-2' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='16' height='16' fill='white'> <use xlink:href='#path-1'></use> </mask> </defs> <use id='home' stroke='#FFFFFF' mask='url(#mask-2)' stroke-width='4' fill='none' xlink:href='#path-1'></use> </svg>",
  back: "<svg width='16px' height='19px' viewBox='301 14 16 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs></defs> <path d='M307.029383,17.7671733 C307.580027,16.8035453 308.510292,16.7750713 309.112023,17.7110976 L315.940802,28.3336435 C316.540368,29.2663017 316.136354,30.0223706 315.026306,30.0223706 L302.026519,30.0223706 C300.921891,30.0223706 300.467923,29.249728 301.023443,28.2775679 L307.029383,17.7671733 Z' id='Triangle-1' stroke='#FFFFFF' stroke-width='2' fill='none' transform='translate(308.502021, 23.524391) rotate(-90.000000) translate(-308.502021, -23.524391) '></path> </svg>",
  cellular: "<svg width='16px' height='16px' viewBox='35 4 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs></defs> <g id='cellular' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(35.000000, 4.000000)'> <polygon id='bounds' points='0 0 16 0 16 16 0 16'></polygon> <polygon id='Shape' fill='#000000' points='0 15 14 15 14 1'></polygon> </g> </svg>",
  batteryHigh: "<svg width='9px' height='14px' viewBox='3 1 9 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs></defs> <polygon id='Shape' stroke='none' fill='#000000' fill-rule='evenodd' points='9 1.875 9 1 6 1 6 1.875 3 1.875 3 15 12 15 12 1.875'></polygon> </svg>",
  bannerBG: {
    "iphone-5": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='320px' height='68px' viewBox='0 0 320 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>iphone5</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPhone-5/5S/5C' fill='#1A1A1C'> <path d='M0,0 L320,0 L320,68 L0,68 L0,0 Z M142,61.0048815 C142,59.897616 142.896279,59 144.0024,59 L176.9976,59 C178.103495,59 179,59.8938998 179,61.0048815 L179,61.9951185 C179,63.102384 178.103721,64 176.9976,64 L144.0024,64 C142.896505,64 142,63.1061002 142,61.9951185 L142,61.0048815 Z' id='iphone5'></path> </g> </g> </svg>",
    "iphone-6s": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='375px' height='68px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'> <g transform='translate(58.000000, 7.000000)' id='Notification-container'> <g> <path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path> </g> </g> </g> </g> </svg>",
    "iphone-6s-plus": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='414px' height='68px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background Copy</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'> <g transform='translate(43.000000, 74.000000)' id='Notification-container'> <g> <path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path> </g> </g> </g> </g> </svg>",
    "ipad": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='768px' height='68px' viewBox='0 0 768 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Portrait' fill='#1A1A1C'> <path d='M0,0 L768,0 L768,68 L0,68 L0,0 Z M366,61.0048815 C366,59.897616 366.896279,59 368.0024,59 L400.9976,59 C402.103495,59 403,59.8938998 403,61.0048815 L403,61.9951185 C403,63.102384 402.103721,64 400.9976,64 L368.0024,64 C366.896505,64 366,63.1061002 366,61.9951185 L366,61.0048815 Z' id='ipad-portrait'></path> </g> </g> </svg>",
    "ipad-pro": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='1024px' height='68px' viewBox='0 0 1024 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-pro-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Pro-Portrait' fill='#1A1A1C'> <path d='M0,0 L1024,0 L1024,68 L0,68 L0,0 Z M494,61.0048815 C494,59.897616 494.896279,59 496.0024,59 L528.9976,59 C530.103495,59 531,59.8938998 531,61.0048815 L531,61.9951185 C531,63.102384 530.103721,64 528.9976,64 L496.0024,64 C494.896505,64 494,63.1061002 494,61.9951185 L494,61.0048815 Z' id='ipad-pro-portrait'></path> </g> </g> </svg>"
  },
  wifi: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='18px' height='14px' viewBox='0 0 18 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <title>Shape</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Material-Design-Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Material/Android/Status-bar-content-light' transform='translate(-15.000000, -5.000000)' fill='#000000'> <g id='wifi' transform='translate(14.000000, 4.000000)'> <path d='M19.0226279,4.01593123 C16.5117809,2.12256382 13.3869849,1 10,1 C6.61301513,1 3.48821908,2.12256382 0.977372085,4.01593123 L10,15 L19.0226279,4.01593123 Z' id='Shape'></path> </g> </g> </g> </svg>",
  signalHigh: "<svg width='14px' height='14px' viewBox='0 1 14 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs></defs> <polygon id='Shape' stroke='none' fill='#FFFFFF' fill-rule='evenodd' points='0 15 14 15 14 1'></polygon> </svg>",
  activity: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Soccer Ball</title> <desc>Created with Sketch.</desc> <defs> <circle id='path-1' cx='8' cy='8' r='8'></circle> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-179.000000, -639.000000)'> <g id='Soccer-Ball' sketch:type='MSLayerGroup' transform='translate(179.000000, 639.000000)'> <mask id='mask-2' sketch:name='Mask' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='Mask' stroke='#4A5361' sketch:type='MSShapeGroup' xlink:href='#path-1'></use> <path d='M6,12.1203046 L12.8573384,8 L13.3723765,8.8571673 L6.51503807,12.9774719 L6,12.1203046 L6,12.1203046 Z' id='Rectangle-47' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.849648,8.7260551 L19.1001103,5.34510901 L19.5227285,6.2514168 L12.2722662,9.63236289 L11.849648,8.7260551 L11.849648,8.7260551 Z' id='Rectangle-47-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M6,3.1203046 L12.8573384,-1 L13.3723765,-0.142832699 L6.51503807,3.9774719 L6,3.1203046 L6,3.1203046 Z' id='Rectangle-47-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M-1,7.1203046 L5.85733841,3 L6.37237648,3.8571673 L-0.484961925,7.9774719 L-1,7.1203046 L-1,7.1203046 Z' id='Rectangle-47-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <rect id='Rectangle-50' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='4' y='6' width='1' height='5'></rect> <rect id='Rectangle-51' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='11.5' y='3' width='1' height='12'></rect> <path d='M5,4.8571673 L11.8573384,8.9774719 L12.3723765,8.1203046 L5.51503807,4 L5,4.8571673' id='Rectangle-47-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M5,12.8571673 L11.8573384,16.9774719 L12.3723765,16.1203046 L5.51503807,12 L5,12.8571673' id='Rectangle-47-Copy-5' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1' fill='#D8D8D8' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,3.19504739 L7.35514484,6.13218333 L4.5300676,6.9422612 L2.88664089,4.5057809 L4.69602457,2.18987541 L7.45771189,3.19504739' id='Polygon-1-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,11.1950474 L7.35514484,14.1321833 L4.5300676,14.9422612 L2.88664089,12.5057809 L4.69602457,10.1898754 L7.45771189,11.1950474' id='Polygon-1-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M14.5431701,0.0725939314 L14.4406031,3.00972988 L11.6155258,3.81980774 L9.97209912,1.38332745 L11.7814828,-0.93257805 L14.5431701,0.0725939314' id='Polygon-1-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> </g> </g> </g> </svg>",
  animals: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Group</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-117.000000, -639.000000)' stroke='#4A5361'> <g id='ic_Food' sketch:type='MSLayerGroup' transform='translate(118.000000, 640.000000)'> <g id='Group' sketch:type='MSShapeGroup'> <path d='M5.68377537,1.38156646 C6.23926066,1.13624 6.85372005,1 7.5,1 C8.14627995,1 8.76073934,1.13624 9.31622463,1.38156646 C9.80879275,0.562359019 10.8255888,0 12,0 C13.6568542,0 15,1.11928813 15,2.5 C15,3.5571398 14.2126246,4.46102843 13.0999226,4.82662514 C14.2496528,5.64185422 15,6.98330062 15,8.5 C15,10.7167144 13.3971873,12.5590719 11.2872671,12.9313673 C10.4867248,14.1757703 9.08961696,15 7.5,15 C5.91038304,15 4.51327524,14.1757703 3.71273291,12.9313673 C1.60281268,12.5590719 0,10.7167144 0,8.5 C0,6.98330062 0.750347244,5.64185422 1.90007741,4.82662514 C0.787375445,4.46102843 0,3.5571398 0,2.5 C0,1.11928813 1.34314575,0 3,0 C4.17441122,0 5.19120725,0.562359019 5.68377537,1.38156646 Z' id='Oval-8'></path> <path d='M5.73834228,12 C5.86290979,12 6.14642353,12 6.14642353,12 C6.14642353,12 6.43215696,12.4426123 6.5246582,12.4919739 C6.66455601,12.5666277 7,12.4919739 7,12.4919739 L7,12 L8,12 L8,12.4919739 L8.49799228,12.4919739 L8.84301769,12 L9.3918457,12 C9.3918457,12 8.99598457,12.9839478 8.49799228,12.9839478 L6.60702407,12.9839478 C6.21404813,12.9839478 5.45996094,12 5.73834228,12 Z' id='Rectangle-44-Copy-2'></path> <circle id='Oval-14' cx='10.5' cy='7.5' r='0.5'></circle> <circle id='Oval-14-Copy' cx='4.5' cy='7.5' r='0.5'></circle> <path d='M12.6999969,5 C12.6999969,3.06700338 11.1329936,1.5 9.19999695,1.5' id='Oval-16'></path> <path d='M5.5,5 C5.5,3.06700338 3.93299662,1.5 2,1.5' id='Oval-16-Copy' transform='translate(3.750000, 3.250000) scale(-1, 1) translate(-3.750000, -3.250000) '></path> <rect id='Rectangle-44-Copy' x='7' y='11' width='1' height='1'></rect> <path d='M6,10 L6.5,10 L6.49999999,9.5 L8.50000005,9.5 L8.50000005,10 L9,10 L9,10.5 L8.5,10.5 L8.5,11 L6.5,11 L6.5,10.5 L6,10.5 L6,10 Z' id='Path'></path> </g> </g> </g> </g> </svg>",
  chevron: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='13px' height='22px' viewBox='0 0 13 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Back Chevron</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Navigation-Bar/Back' transform='translate(-8.000000, -31.000000)' fill='#0076FF'> <path d='M8.5,42 L19,31.5 L21,33.5 L12.5,42 L21,50.5 L19,52.5 L8.5,42 Z' id='Back-Chevron'></path> </g> </g> </svg>",
  emoji: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Emoji</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-60.000000, -181.000000)' fill='#030303'> <g id='Bottom-Row' transform='translate(3.000000, 170.000000)' sketch:type='MSShapeGroup'> <path d='M66.75,30.5 C72.1347763,30.5 76.5,26.1347763 76.5,20.75 C76.5,15.3652237 72.1347763,11 66.75,11 C61.3652237,11 57,15.3652237 57,20.75 C57,26.1347763 61.3652237,30.5 66.75,30.5 Z M66.75,29.5 C71.5824916,29.5 75.5,25.5824916 75.5,20.75 C75.5,15.9175084 71.5824916,12 66.75,12 C61.9175084,12 58,15.9175084 58,20.75 C58,25.5824916 61.9175084,29.5 66.75,29.5 Z M63.75,19 C64.4403559,19 65,18.4403559 65,17.75 C65,17.0596441 64.4403559,16.5 63.75,16.5 C63.0596441,16.5 62.5,17.0596441 62.5,17.75 C62.5,18.4403559 63.0596441,19 63.75,19 Z M69.75,19 C70.4403559,19 71,18.4403559 71,17.75 C71,17.0596441 70.4403559,16.5 69.75,16.5 C69.0596441,16.5 68.5,17.0596441 68.5,17.75 C68.5,18.4403559 69.0596441,19 69.75,19 Z M59.8876334,22.1641444 C59.6390316,21.383134 60.065918,20.9785156 60.8530951,21.2329304 C60.8530951,21.2329304 63.0937503,22.2125 66.7500001,22.2125 C70.4062499,22.2125 72.6469047,21.2329304 72.6469047,21.2329304 C73.4287162,20.9662153 73.8812463,21.4044097 73.6058477,22.1807437 C73.6058477,22.1807437 72.6,27.575 66.75,27.575 C60.9,27.575 59.8876334,22.1641444 59.8876334,22.1641444 Z M66.75,23.1875 C64.06875,23.1875 61.8544055,22.4737821 61.8544055,22.4737821 C61.3273019,22.32948 61.1781233,22.5721615 61.5639555,22.957075 C61.5639555,22.957075 62.3625,24.65 66.75,24.65 C71.1375,24.65 71.9508503,22.9438304 71.9508503,22.9438304 C72.3093659,22.5399278 72.1690793,22.3359844 71.6354273,22.476349 C71.6354273,22.476349 69.43125,23.1875 66.75,23.1875 Z' id='Emoji'></path> </g> </g> </g> </svg>",
  "delete": {
    on: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='24px' height='18px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z' id='Back'></path> </g> </g> </g> </svg>",
    off: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='24px' height='18px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M338.70972,21.7097195 C338.317752,21.3177522 338.318965,20.6810349 338.70972,20.2902805 L344.643245,14.3567547 C344.840276,14.1597245 345.225639,14 345.493741,14 L355.997239,14 C357.103333,14 357.999999,14.8970601 357.999999,16.0058586 L357.999999,25.9941412 C357.999999,27.1019464 357.106457,27.9999999 355.997239,27.9999999 L345.493741,28 C345.221056,28 344.840643,27.8406431 344.643246,27.6432453 L338.70972,21.7097195 Z' id='Back'></path> </g> </g> </g> </svg>"
  },
  food: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Food</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-148.000000, -637.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Food' transform='translate(149.500000, 229.500000)' sketch:type='MSShapeGroup'> <path d='M5.5,15.5 L1,15.5 L0,5 L6.5,5 L6.26360933,7.48210202' id='Drink' stroke='#4A5461'></path> <path d='M6.01077545,1.96930098 L6.51571352,5.22270539 L5.71908184,5.67947812 L5.0389009,1.96930098 L4.85557247,1.96930098 L4.85557247,0.96930098 L8.85557247,0.96930098 L8.85557247,1.96930098 L6.01077545,1.96930098 Z' id='Straw' fill='#4A5461' transform='translate(6.855572, 3.324390) rotate(24.000000) translate(-6.855572, -3.324390) '></path> <rect id='Bottom-Bun' stroke='#4A5461' x='3' y='14' width='10.5' height='1.5' rx='1'></rect> <path d='M1.5,12.5024408 C1.5,11.948808 1.94916916,11.5 2.49268723,11.5 L14.0073128,11.5 C14.5555588,11.5 15,11.9469499 15,12.5024408 L15,12.9975592 C15,13.551192 14.5508308,14 14.0073128,14 L2.49268723,14 C1.94444121,14 1.5,13.5530501 1.5,12.9975592 L1.5,12.5024408 Z M3.93300003,11.8392727 C3.41771834,11.6518976 3.44483697,11.5 3.9955775,11.5 L13.0044225,11.5 C13.5542648,11.5 13.5866061,11.6503251 13.067,11.8392727 L8.5,13.5 L3.93300003,11.8392727 Z' id='&quot;Patty&quot;' fill='#4A5461'></path> <path d='M2.5,10.5 L13.5,10.5 L15,11.5 L1,11.5 L2.5,10.5 Z' id='Cheese' fill='#4A5461'></path> <path d='M8.25,10.5 C11.4256373,10.5 14,10.3284271 14,9.5 C14,8.67157288 11.4256373,8 8.25,8 C5.07436269,8 2.5,8.67157288 2.5,9.5 C2.5,10.3284271 5.07436269,10.5 8.25,10.5 Z' id='Top-Bun' stroke='#4A5461' stroke-width='0.75'></path> </g> </g> </g> </g> </svg>",
  flags: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='11px' height='15px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Flag</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-275.000000, -639.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Flag' transform='translate(275.000000, 231.500000)' sketch:type='MSShapeGroup'> <rect id='Pole' fill='#4A5461' x='0' y='0' width='1' height='14'></rect> <path d='M1,1 C1,1 1.25,2 3.5,2 C5.75,2 6,0.749999998 8,0.75 C10,0.749999998 10,1.5 10,1.5 L10,7.5 C10,7.5 10,6.5 8,6.5 C6,6.5 4.80623911,8 3.5,8 C2.19376089,8 1,7 1,7 L1,1 Z' stroke='#4A5461' stroke-linejoin='round'></path> </g> </g> </g> </g> </svg>",
  frequent: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Recent</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-55.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Recent' transform='translate(55.500000, 230.000000)' sketch:type='MSShapeGroup'> <circle id='Body' stroke='#4A5461' cx='8' cy='8' r='8'></circle> <path d='M7.5,7.5 L7.5,8.5 L8.5,8.5 L8.5,2 L7.5,2 L7.5,7.5 L4,7.5 L4,8.5 L8.5,8.5 L8.5,7.5 L7.5,7.5 Z' id='Hands' fill='#4A5461'></path> </g> </g> </g> </g> </svg>",
  keyboard: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='32.5px' height='23.5px' viewBox='0 0 65 47' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Shape</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='iPad-Portrait' transform='translate(-1436.000000, -1956.000000)' fill='#000000'> <g id='Keyboard-Light' transform='translate(0.000000, 1422.000000)'> <g id='Keyboard-down' transform='translate(1412.000000, 500.000000)'> <path d='M87.001332,34 C88.1051659,34 89,34.8997127 89,35.9932874 L89,61.0067126 C89,62.1075748 88.1058759,63 87.001332,63 L25.998668,63 C24.8948341,63 24,62.1002873 24,61.0067126 L24,35.9932874 C24,34.8924252 24.8941241,34 25.998668,34 L87.001332,34 Z M26,36 L26,61 L87,61 L87,36 L26,36 Z M79,40 L83,40 L83,44 L79,44 L79,40 Z M72,40 L76,40 L76,44 L72,44 L72,40 Z M65,40 L69,40 L69,44 L65,44 L65,40 Z M58,40 L62,40 L62,44 L58,44 L58,40 Z M51,40 L55,40 L55,44 L51,44 L51,40 Z M44,40 L48,40 L48,44 L44,44 L44,40 Z M37,40 L41,40 L41,44 L37,44 L37,40 Z M30,40 L34,40 L34,44 L30,44 L30,40 Z M79,47 L83,47 L83,51 L79,51 L79,47 Z M72,47 L76,47 L76,51 L72,51 L72,47 Z M65,47 L69,47 L69,51 L65,51 L65,47 Z M58,47 L62,47 L62,51 L58,51 L58,47 Z M51,47 L55,47 L55,51 L51,51 L51,47 Z M44,47 L48,47 L48,51 L44,51 L44,47 Z M37,47 L41,47 L41,51 L37,51 L37,47 Z M30,47 L34,47 L34,51 L30,51 L30,47 Z M79,54 L83,54 L83,58 L79,58 L79,54 Z M72,54 L76,54 L76,58 L72,58 L72,54 Z M44,54 L69,54 L69,58 L44,58 L44,54 Z M37,54 L41,54 L41,58 L37,58 L37,54 Z M30,54 L34,54 L34,58 L30,58 L30,54 Z M44.3163498,69.9771047 C43.3684225,70.5420342 43.3338721,71.5096495 44.2378217,72.1373912 L55.3621539,79.8626088 C56.2667113,80.4907726 57.7338965,80.4903505 58.6378461,79.8626088 L69.7621783,72.1373912 C70.6667357,71.5092274 70.648012,70.5205204 69.7115187,69.9234166 L69.9825731,70.0962396 C69.5181333,69.800115 68.7782557,69.8126493 68.3261307,70.1269323 L57.8154999,77.4331263 C57.3651117,77.746202 56.628165,77.7381786 56.1762103,77.4199424 L45.8386137,70.1408977 C45.3836472,69.8205407 44.6375039,69.7857088 44.1566393,70.0722862 L44.3163498,69.9771047 Z' id='Shape'></path> </g> </g> </g> </g> </svg>",
  keyPopUp: {
    "iphone-5": "<svg width='55px' height='92px' viewBox='53 316 55 92' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.34173231,40.9391701 C0.517466128,40.20589 0,39.1374251 0,37.9477635 L0,4.00345598 C0,1.78917136 1.79528248,0 4.00987566,0 L44.9901243,0 C47.2125608,0 49,1.7924083 49,4.00345598 L49,37.9477635 C49,38.9124051 48.6592798,39.7963659 48.0916041,40.4868665 C48.0414233,40.9032289 47.7111888,41.4074672 47.0825908,41.95225 C47.0825908,41.95225 38.5299145,49.0643362 38.5299145,51.1526424 C38.5299145,61.6497561 38.1770099,82.0025406 38.1770099,82.0025406 C38.1412304,84.2024354 36.3210284,86 34.1128495,86 L15.3059539,86 C13.10796,86 11.2781884,84.2100789 11.2417936,82.0020993 C11.2417936,82.0020993 10.8888889,61.6470852 10.8888889,51.1486361 C10.8888889,49.0616654 2.34143662,42.238655 2.34143662,42.238655 C1.77827311,41.7641365 1.44881354,41.3204237 1.34173231,40.9391701 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='49' height='86' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(56.000000, 318.000000)'> <use id='Rectangle-14' stroke='#B2B4B9' mask='url(#mask-3)' fill='#FCFCFC' xlink:href='#path-2'></use> </g> </svg>",
    "iphone-6s": "<svg width='64px' height='107px' viewBox='24 387 64 107' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.48647646,48.3779947 C0.58026649,47.6464296 0,46.529587 0,45.2781948 L0,3.99009787 C0,1.7825912 1.79509577,0 4.00945862,0 L53.9905414,0 C56.2005746,0 58,1.78642767 58,3.99009787 L58,45.2781948 C58,46.1833004 57.6982258,47.0169733 57.1895097,47.6856325 C57.0396865,48.0212497 56.7360098,48.3972834 56.2718363,48.7950661 C56.2718363,48.7950661 45.6068376,57.6220693 45.6068376,60.0746149 C45.6068376,72.4026205 45.177967,96.9923164 45.177967,96.9923164 C45.1413748,99.2122214 43.3193065,101 41.1090035,101 L17.386723,101 C15.1812722,101 13.354683,99.2055009 13.3177595,96.9918741 C13.3177595,96.9918741 12.8888889,72.3994838 12.8888889,60.0699099 C12.8888889,57.6189326 2.22673437,49.1462936 2.22673437,49.1462936 C1.90524087,48.8788327 1.65911655,48.620733 1.48647646,48.3779947 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='58' height='101' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(27.000000, 389.000000)'> <use id='Rectangle-14' stroke='#B2B4B9' mask='url(#mask-3)' fill='#FCFCFC' xlink:href='#path-2'></use> </g> </svg>",
    "iphone-6s-plus": "<svg width='70px' height='119px' viewBox='28 450 70 119' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.95729395,54.0728304 C0.785911132,53.3757699 0,52.098776 0,50.6389022 L0,3.99524419 C0,1.78671428 1.79242202,0 4.00348663,0 L59.9965134,0 C62.2046235,0 64,1.78873175 64,3.99524419 L64,50.6389022 C64,51.9233686 63.3937116,53.0651556 62.451391,53.795754 C62.4427752,53.8032433 62.4341019,53.8107404 62.4253709,53.8182454 C62.4253709,53.8182454 50.3247863,63.8977402 50.3247863,66.6173947 C50.3247863,80.2880544 49.8443049,108.002007 49.8443049,108.002007 C49.8079665,110.210234 47.9874232,112 45.7789089,112 L18.7680997,112 C16.5534397,112 14.7394456,110.20984 14.7027037,108.001566 C14.7027037,108.001566 14.2222222,80.2845761 14.2222222,66.6121773 C14.2222222,63.8942619 2.14081422,54.2321337 2.14081422,54.2321337 C2.07664913,54.1786298 2.01548111,54.1255134 1.95729395,54.0728304 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='64' height='112' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(31.000000, 452.000000)'> <use id='Rectangle-14' stroke='#B2B4B9' mask='url(#mask-3)' fill='#FCFCFC' xlink:href='#path-2'></use> </g> </svg>"
  },
  objects: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='11px' height='16px' viewBox='0 0 11 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Lightbulb</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-244.000000, -639.000000)' stroke='#4A5361'> <g id='Lightbulb' sketch:type='MSLayerGroup' transform='translate(244.000000, 639.000000)'> <path d='M8,10.4002904 C9.78083795,9.48993491 11,7.63734273 11,5.5 C11,2.46243388 8.53756612,0 5.5,0 C2.46243388,0 0,2.46243388 0,5.5 C0,7.63734273 1.21916205,9.48993491 3,10.4002904 L3,14.0020869 C3,15.1017394 3.89761602,16 5.0048815,16 L5.9951185,16 C7.1061002,16 8,15.1055038 8,14.0020869 L8,10.4002904 Z' id='Oval-17' sketch:type='MSShapeGroup'></path> <rect id='Rectangle-50' sketch:type='MSShapeGroup' x='3' y='12' width='5' height='1'></rect> <rect id='Rectangle-51' sketch:type='MSShapeGroup' x='4' y='13.5' width='1.5' height='1'></rect> <path d='M5,8.5 C5,8.5 3.49999999,7.50000001 4,7 C4.50000001,6.49999999 5,7.66666667 5.5,8 C5.5,8 6.5,6.50000001 7,7 C7.5,7.49999999 6,8.5 6,8.5 L6,11 L5,11 L5,8.5 Z' id='Rectangle-52' sketch:type='MSShapeGroup'></path> </g> </g> </g> </svg>",
  shift: {
    on: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='20px' height='18px' viewBox='0 0 20 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-14.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.7052388,13.2052388 C21.3157462,12.8157462 20.6857559,12.8142441 20.2947612,13.2052388 L11.9160767,21.5839233 C11.1339991,22.3660009 11.3982606,23 12.4979131,23 L16.5,23 L16.5,28.009222 C16.5,28.5564136 16.9463114,29 17.4975446,29 L24.5024554,29 C25.053384,29 25.5,28.5490248 25.5,28.009222 L25.5,23 L29.5020869,23 C30.6055038,23 30.866824,22.366824 30.0839233,21.5839233 L21.7052388,13.2052388 Z' id='Shift'></path> </g> </g> </g> </svg>",
    off: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='20px' height='18px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-14.000000, -129.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.6719008,12.2325898 C21.301032,11.8279916 20.6946892,11.8334731 20.3288195,12.2325898 L11.6947023,21.6512983 C10.7587441,22.672308 11.1285541,23.5 12.5097751,23.5 L15.9999999,23.5000002 L15.9999999,28.0014241 C15.9999999,28.8290648 16.6716559,29.5000001 17.497101,29.5000001 L24.5028992,29.5000001 C25.3297253,29.5000001 26.0000003,28.8349703 26.0000003,28.0014241 L26.0000003,23.5000001 L29.4902251,23.5000002 C30.8763357,23.5000002 31.2439521,22.6751916 30.3054161,21.6512985 L21.6719008,12.2325898 Z M21.341748,14.3645316 C21.1530056,14.1632064 20.8433515,14.1670914 20.6582514,14.3645316 L13.5,21.9999998 L17.5000001,21.9999999 L17.5000002,27.5089956 C17.5000002,27.7801703 17.7329027,28.0000008 18.0034229,28.0000008 L23.996577,28.0000008 C24.2746097,28.0000008 24.4999997,27.7721203 24.4999997,27.5089956 L24.4999997,21.9999999 L28.5,21.9999999 L21.341748,14.3645316 Z' id='Shift'></path> </g> </g> </g> </svg>"
  },
  smileys: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>:D</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-86.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id=':D' transform='translate(87.000000, 230.500000)' sketch:type='MSShapeGroup'> <circle id='Head' stroke='#4A5461' stroke-width='0.789473684' cx='7.5' cy='7.5' r='7.5'></circle> <path d='M7.5,13.5263158 C10.2686907,13.5263158 12.5131579,10.3684212 12.5131579,9.18421045 C12.5131579,7.60526317 11.4389098,9.18421043 7.5,9.18421053 C3.56109023,9.18421062 2.48684211,7.60526317 2.48684211,9.18421045 C2.48684211,10.368421 4.73130935,13.5263158 7.5,13.5263158 Z M7.5,10.9605263 C8.93233083,11.1578947 11.7969925,10.368421 11.7969925,9.44423552 C11.7969925,8.78947368 10.8762084,9.57894727 7.5,9.77631579 C4.12379162,9.57894743 3.20300872,8.78947369 3.20300752,9.44423552 C3.20300582,10.368421 6.06766917,11.1578947 7.5,10.9605263 Z' id='Smile' fill='#4A5461'></path> <path d='M5.23684211,6.3236598 C5.64378876,6.3236598 5.97368421,5.88183554 5.97368421,5.33681769 C5.97368421,4.79179985 5.64378876,4.34997559 5.23684211,4.34997559 C4.82989545,4.34997559 4.5,4.79179985 4.5,5.33681769 C4.5,5.88183554 4.82989545,6.3236598 5.23684211,6.3236598 Z M9.73684211,6.3236598 C10.1437888,6.3236598 10.4736842,5.88183554 10.4736842,5.33681769 C10.4736842,4.79179985 10.1437888,4.34997559 9.73684211,4.34997559 C9.32989545,4.34997559 9,4.79179985 9,5.33681769 C9,5.88183554 9.32989545,6.3236598 9.73684211,6.3236598 Z' id='Eyes' fill='#4A5461'></path> </g> </g> </g> </g> </svg>",
  symbols: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='16px' height='17px' viewBox='0 0 15 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Objects &amp; Symbols</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-304.000000, -638.000000)' fill='#4A5461'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Objects-&amp;-Symbols' transform='translate(304.000000, 230.000000)'> <g id='Thing' transform='translate(0.000000, 0.500000)' sketch:type='MSShapeGroup'> <rect id='Rectangle-1209' x='0' y='0' width='7' height='1'></rect> <rect id='Rectangle-1209' x='0' y='2' width='7' height='1'></rect> <rect id='Rectangle-1211' x='3' y='3' width='1' height='4'></rect> </g> <path d='M11.75,0.159263978 L11.75,0 L11,0 L11,5.091493 C10.59344,4.94221392 10.0639662,4.96453224 9.55715399,5.19017957 C8.69849293,5.5724801 8.23003835,6.39365621 8.51083141,7.02432774 C8.79162447,7.65499928 9.71533454,7.85634375 10.5739956,7.47404321 C11.2761183,7.16143803 11.7173393,6.55538972 11.7013595,6 L11.75,6 L11.75,1.39385056 C12.3175908,1.59590037 13,2.0817456 13,3.25 C13,4.25 12.75,5.5 12.75,5.5 C12.75,5.5 13.75,4.75 13.75,2.5 C13.75,1.02256101 12.5642674,0.407473019 11.75,0.159263978 Z' id='Note' sketch:type='MSShapeGroup'></path> <text id='&amp;' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'> <tspan x='0.25' y='16'>&amp;</tspan> </text> <text id='%' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'> <tspan x='7.75' y='16'>%</tspan> </text> </g> </g> </g> </g> </svg>",
  travel: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Transport</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-241.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Transport' transform='translate(241.500000, 230.000000)' sketch:type='MSShapeGroup'> <path d='M0,6 L1,6 L1,15 L0,15 L0,6 Z M15,4 L16,4 L16,15 L15,15 L15,4 Z M3.5,0 L4.5,0 L4.5,7 L3.5,7 L3.5,0 Z M1,6 L3.5,6 L3.5,7 L1,7 L1,6 Z M4.5,0 L9.5,0 L9.5,1 L4.5,1 L4.5,0 Z M9.5,0 L10.5,0 L10.5,6 L9.5,6 L9.5,0 Z M10.5,4 L15,4 L15,5 L10.5,5 L10.5,4 Z' id='Skyline' fill='#4A5461'></path> <g id='Windows' transform='translate(2.000000, 2.000000)' fill='#4A5461'> <rect id='Window' x='0' y='6' width='1' height='1'></rect> <rect id='Window' x='3.5' y='0' width='1' height='1'></rect> <rect id='Window' x='5.5' y='0' width='1' height='1'></rect> <rect id='Window' x='5.5' y='2' width='1' height='1'></rect> <rect id='Window' x='3.5' y='2' width='1' height='1'></rect> <rect id='Window' x='11' y='4' width='1' height='1'></rect> <rect id='Window' x='11' y='6' width='1' height='1'></rect> </g> <g id='Car' transform='translate(2.500000, 6.500000)'> <path d='M8.5,8 L2.5,8 L2.5,9.5 L0.5,9.5 L0.5,7.8681145 C0.201202192,7.69582702 0,7.37091363 0,6.9906311 L0,5.0093689 C0,4.45190985 0.444836974,4 0.995577499,4 L10.0044225,4 C10.5542648,4 11,4.44335318 11,5.0093689 L11,6.9906311 C11,7.3653315 10.7990244,7.69234519 10.5,7.86649002 L10.5,9.5 L8.5,9.5 L8.5,8 Z M1.75,6.5 C2.16421356,6.5 2.5,6.16421356 2.5,5.75 C2.5,5.33578644 2.16421356,5 1.75,5 C1.33578644,5 1,5.33578644 1,5.75 C1,6.16421356 1.33578644,6.5 1.75,6.5 Z M9.25,6.5 C9.66421356,6.5 10,6.16421356 10,5.75 C10,5.33578644 9.66421356,5 9.25,5 C8.83578644,5 8.5,5.33578644 8.5,5.75 C8.5,6.16421356 8.83578644,6.5 9.25,6.5 Z M0.5,7 L10.5,7 L10.5,7.5 L0.5,7.5 L0.5,7 Z M3,6.5 L8,6.5 L8,7 L3,7 L3,6.5 Z' id='Body' fill='#4A5461'></path> <path d='M1.5,4.5 L1.5,3 C1.5,1.34314575 2.83902013,0 4.50166547,0 L6.49833453,0 C8.15610859,0 9.5,1.34651712 9.5,3 L9.5,5' id='Roof' stroke='#4A5461'></path> </g> </g> </g> </g> </g> </svg>"
};

exports.framerFrames = {
  640: 2,
  750: 2,
  768: 2,
  1080: 3,
  1242: 3,
  1440: 4,
  1536: 2
};

exports.realDevices = {
  320: {
    480: {
      name: "iPhone",
      width: 320,
      height: 480,
      scale: 1
    }
  },
  480: {
    854: {
      name: "Android One",
      width: 480,
      height: 854,
      scale: 1.5
    }
  },
  640: {
    960: {
      name: "iPhone 4",
      width: 640,
      height: 960,
      scale: 2
    },
    1136: {
      name: "iPhone 5",
      width: 640,
      height: 1136,
      scale: 2
    }
  },
  720: {
    1280: {
      name: "XHDPI",
      width: 720,
      height: 1280,
      scale: 2
    }
  },
  750: {
    1118: {
      name: "iPhone 6",
      width: 750,
      height: 1118,
      scale: 2
    },
    1334: {
      name: "iPhone 6",
      width: 750,
      height: 1334,
      scale: 2
    }
  },
  768: {
    1024: {
      name: "iPad",
      width: 768,
      height: 1024,
      scale: 1
    },
    1280: {
      name: "Nexus 4",
      width: 768,
      height: 1280,
      scale: 2
    }
  },
  800: {
    1280: {
      name: "Nexus 7",
      width: 800,
      height: 1280,
      scale: 1
    }
  },
  1080: {
    1920: {
      name: "XXHDPI",
      width: 1080,
      height: 1920,
      scale: 3
    }
  },
  1200: {
    1920: {
      name: "Nexus 7",
      width: 1200,
      height: 1920,
      scale: 2
    }
  },
  1242: {
    2208: {
      name: "iPhone 6 Plus",
      width: 1242,
      height: 2208,
      scale: 3
    }
  },
  1440: {
    2560: {
      name: "XXXHDPI",
      width: 1440,
      height: 2560,
      scale: 4
    }
  },
  1441: {
    2561: {
      name: "Nexus 6",
      width: 1440,
      height: 2560,
      scale: 4
    }
  },
  1536: {
    2048: {
      name: "iPad",
      width: 1536,
      height: 2048,
      scale: 2
    }
  },
  1600: {
    2056: {
      name: "Nexus 10",
      width: 1600,
      height: 2056,
      scale: 2
    }
  },
  2048: {
    1536: {
      name: "Nexus 9",
      width: 2048,
      height: 1536,
      scale: 2
    },
    2732: {
      name: "iPad Pro",
      width: 2048,
      height: 2732,
      scale: 2
    }
  },
  2560: {
    1600: {
      name: "Nexus 10",
      width: 2560,
      height: 1600,
      scale: 2
    }
  },
  2732: {
    2048: {
      name: "iPad Pro",
      width: 2732,
      height: 2048,
      scale: 2
    }
  }
};

exports.colors = {
  red: "#F44336",
  red50: "#FFEBEE",
  red100: "#FFCDD2",
  red200: "#EF9A9A",
  red300: "#E57373",
  red400: "#EF5350",
  red500: "#F44336",
  red600: "#E53935",
  red700: "#D32F2F",
  red800: "#C62828",
  red900: "#B71C1C",
  redA100: "#FF8A80",
  redA200: "#FF5252",
  redA400: "#FF1744",
  redA700: "#D50000",
  pink: "#E91E63",
  pink50: "#FCE4EC",
  pink100: "#F8BBD0",
  pink200: "#F48FB1",
  pink300: "#F06292",
  pink400: "#EC407A",
  pink500: "#E91E63",
  pink600: "#D81B60",
  pink700: "#C2185B",
  pink800: "#AD1457",
  pink900: "#880E4F",
  pinkA100: "#FF80AB",
  pinkA200: "#FF4081",
  pinkA400: "#F50057",
  pinkA700: "#C51162",
  purple: "#9C27B0",
  purple50: "#F3E5F5",
  purple100: "#E1BEE7",
  purple200: "#CE93D8",
  purple300: "#BA68C8",
  purple400: "#AB47BC",
  purple500: "#9C27B0",
  purple600: "#8E24AA",
  purple700: "#7B1FA2",
  purple800: "#6A1B9A",
  purple900: "#4A148C",
  purpleA100: "#EA80FC",
  purpleA200: "#E040FB",
  purpleA400: "#D500F9",
  purpleA700: "#AA00FF",
  deepPurple: "#673AB7",
  deepPurple50: "#EDE7F6",
  deepPurple100: "#D1C4E9",
  deepPurple200: "#B39DDB",
  deepPurple300: "#9575CD",
  deepPurple400: "#7E57C2",
  deepPurple500: "#673AB7",
  deepPurple600: "#5E35B1",
  deepPurple700: "#512DA8",
  deepPurple800: "#4527A0",
  deepPurple900: "#311B92",
  deepPurpleA100: "#B388FF",
  deepPurpleA200: "#7C4DFF",
  deepPurpleA400: "#651FFF",
  deepPurpleA700: "#6200EA",
  indigo: "#3F51B5",
  indigo50: "#E8EAF6",
  indigo100: "#C5CAE9",
  indigo200: "#9FA8DA",
  indigo300: "#7986CB",
  indigo400: "#5C6BC0",
  indigo500: "#3F51B5",
  indigo600: "#3949AB",
  indigo700: "#303F9F",
  indigo800: "#283593",
  indigo900: "#1A237E",
  indigoA100: "#8C9EFF",
  indigoA200: "#536DFE",
  indigoA400: "#3D5AFE",
  indigoA700: "#304FFE",
  blue: "#2196F3",
  blue50: "#E3F2FD",
  blue100: "#BBDEFB",
  blue200: "#90CAF9",
  blue300: "#64B5F6",
  blue400: "#42A5F5",
  blue500: "#2196F3",
  blue600: "#1E88E5",
  blue700: "#1976D2",
  blue800: "#1565C0",
  blue900: "#0D47A1",
  blueA100: "#82B1FF",
  blueA200: "#448AFF",
  blueA400: "#2979FF",
  blueA700: "#2962FF",
  lightBlue: "#03A9F4",
  lightBlue50: "#E1F5FE",
  lightBlue100: "#B3E5FC",
  lightBlue200: "#81D4FA",
  lightBlue300: "#4FC3F7",
  lightBlue400: "#29B6F6",
  lightBlue500: "#03A9F4",
  lightBlue600: "#039BE5",
  lightBlue700: "#0288D1",
  lightBlue800: "#0277BD",
  lightBlue900: "#01579B",
  lightBlueA100: "#80D8FF",
  lightBlueA200: "#40C4FF",
  lightBlueA400: "#00B0FF",
  lightBlueA700: "#0091EA",
  cyan: "#00BCD4",
  cyan50: "#E0F7FA",
  cyan100: "#B2EBF2",
  cyan200: "#80DEEA",
  cyan300: "#4DD0E1",
  cyan400: "#26C6DA",
  cyan500: "#00BCD4",
  cyan600: "#00ACC1",
  cyan700: "#0097A7",
  cyan800: "#00838F",
  cyan900: "#006064",
  cyanA100: "#84FFFF",
  cyanA200: "#18FFFF",
  cyanA400: "#00E5FF",
  cyanA700: "#00B8D4",
  teal: "#009688",
  teal50: "#E0F2F1",
  teal100: "#B2DFDB",
  teal200: "#80CBC4",
  teal300: "#4DB6AC",
  teal400: "#26A69A",
  teal500: "#009688",
  teal600: "#00897B",
  teal700: "#00796B",
  teal800: "#00695C",
  teal900: "#004D40",
  tealA100: "#A7FFEB",
  tealA200: "#64FFDA",
  tealA400: "#1DE9B6",
  tealA700: "#00BFA5",
  green: "#4CAF50",
  green50: "#E8F5E9",
  green100: "#C8E6C9",
  green200: "#A5D6A7",
  green300: "#81C784",
  green400: "#66BB6A",
  green500: "#4CAF50",
  green600: "#43A047",
  green700: "#388E3C",
  green800: "#2E7D32",
  green900: "#1B5E20",
  greenA100: "#B9F6CA",
  greenA200: "#69F0AE",
  greenA400: "#00E676",
  greenA700: "#00C853",
  lightGreen: "#8BC34A",
  lightGreen50: "#F1F8E9",
  lightGreen100: "#DCEDC8",
  lightGreen200: "#C5E1A5",
  lightGreen300: "#AED581",
  lightGreen400: "#9CCC65",
  lightGreen500: "#8BC34A",
  lightGreen600: "#7CB342",
  lightGreen700: "#689F38",
  lightGreen800: "#558B2F",
  lightGreen900: "#33691E",
  lightGreenA100: "#CCFF90",
  lightGreenA200: "#B2FF59",
  lightGreenA400: "#76FF03",
  lightGreenA700: "#64DD17",
  lime: "#CDDC39",
  lime50: "#F9FBE7",
  lime100: "#F0F4C3",
  lime200: "#E6EE9C",
  lime300: "#DCE775",
  lime400: "#D4E157",
  lime500: "#CDDC39",
  lime600: "#C0CA33",
  lime700: "#AFB42B",
  lime800: "#9E9D24",
  lime900: "#827717",
  limeA100: "#F4FF81",
  limeA200: "#EEFF41",
  limeA400: "#C6FF00",
  limeA700: "#AEEA00",
  yellow: "#FFEB3B",
  yellow50: "#FFFDE7",
  yellow100: "#FFF9C4",
  yellow200: "#FFF59D",
  yellow300: "#FFF176",
  yellow400: "#FFEE58",
  yellow500: "#FFEB3B",
  yellow600: "#FDD835",
  yellow700: "#FBC02D",
  yellow800: "#F9A825",
  yellow900: "#F57F17",
  yellowA100: "#FFFF8D",
  yellowA200: "#FFFF00",
  yellowA400: "#FFEA00",
  yellowA700: "#FFD600",
  amber: "#FFC107",
  amber50: "#FFF8E1",
  amber100: "#FFECB3",
  amber200: "#FFE082",
  amber300: "#FFD54F",
  amber400: "#FFCA28",
  amber500: "#FFC107",
  amber600: "#FFB300",
  amber700: "#FFA000",
  amber800: "#FF8F00",
  amber900: "#FF6F00",
  amberA100: "#FFE57F",
  amberA200: "#FFD740",
  amberA400: "#FFC400",
  amberA700: "#FFAB00",
  orange: "#FF9800",
  orange50: "#FFF3E0",
  orange100: "#FFE0B2",
  orange200: "#FFCC80",
  orange300: "#FFB74D",
  orange400: "#FFA726",
  orange500: "#FF9800",
  orange600: "#FB8C00",
  orange700: "#F57C00",
  orange800: "#EF6C00",
  orange900: "#E65100",
  orangeA100: "#FFD180",
  orangeA200: "#FFAB40",
  orangeA400: "#FF9100",
  orangeA700: "#FF6D00",
  deepOrange: "#FF5722",
  deepOrange50: "#FBE9E7",
  deepOrange100: "#FFCCBC",
  deepOrange200: "#FFAB91",
  deepOrange300: "#FF8A65",
  deepOrange400: "#FF7043",
  deepOrange500: "#FF5722",
  deepOrange600: "#F4511E",
  deepOrange700: "#E64A19",
  deepOrange800: "#D84315",
  deepOrange900: "#BF360C",
  deepOrangeA100: "#FF9E80",
  deepOrangeA200: "#FF6E40",
  deepOrangeA400: "#FF3D00",
  deepOrangeA700: "#DD2C00",
  brown: "#795548",
  brown50: "#EFEBE9",
  brown100: "#D7CCC8",
  brown200: "#BCAAA4",
  brown300: "#A1887F",
  brown400: "#8D6E63",
  brown500: "#795548",
  brown600: "#6D4C41",
  brown700: "#5D4037",
  brown800: "#4E342E",
  brown900: "#3E2723",
  grey: "#9E9E9E",
  grey50: "#FAFAFA",
  grey100: "#F5F5F5",
  grey200: "#EEEEEE",
  grey300: "#E0E0E0",
  grey400: "#BDBDBD",
  grey500: "#9E9E9E",
  grey600: "#757575",
  grey700: "#616161",
  grey800: "#424242",
  grey900: "#212121",
  blueGrey: "#607D8B",
  blueGrey50: "#ECEFF1",
  blueGrey100: "#CFD8DC",
  blueGrey200: "#B0BEC5",
  blueGrey300: "#90A4AE",
  blueGrey400: "#78909C",
  blueGrey500: "#607D8B",
  blueGrey600: "#546E7A",
  blueGrey700: "#455A64",
  blueGrey800: "#37474F",
  blueGrey900: "#263238",
  black: "#000000",
  white: "#FFFFFF"
};


},{"material-kit":"material-kit"}],"material-kit-nav-bar":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var backButton, backIcon, homeButton, homeIcon, navbar, recentButton, recentIcon, setup, svgBack, svgHome;
  setup = m.utils.setupComponent(array, exports.defaults);
  navbar = new Layer({
    backgroundColor: "black"
  });
  navbar.type = "navbar";
  navbar.constraints = {
    bottom: -1,
    leading: 0,
    trailing: 0,
    height: 48
  };
  svgHome = m.utils.svg(m.assets.home);
  svgBack = m.utils.svg(m.assets.back);
  homeButton = new Layer({
    superLayer: navbar,
    borderRadius: m.utils.px(21),
    backgroundColor: "transparent",
    name: "home",
    clip: true
  });
  homeButton.constraints = {
    top: 3,
    height: 42,
    width: 94,
    align: "horizontal"
  };
  homeIcon = new Layer({
    superLayer: homeButton,
    width: svgHome.width,
    height: svgHome.height,
    html: svgHome.svg,
    backgroundColor: "transparent",
    name: "icon"
  });
  homeIcon.constraints = {
    align: "center"
  };
  recentButton = new Layer({
    superLayer: navbar,
    borderRadius: m.utils.px(21),
    backgroundColor: "transparent",
    name: "recent",
    clip: true
  });
  recentButton.constraints = {
    top: 3,
    height: 42,
    width: 94,
    leading: [homeButton, 6]
  };
  recentIcon = new Layer({
    superLayer: recentButton,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: m.utils.px(2),
    borderRadius: m.utils.px(2),
    name: "icon"
  });
  recentIcon.constraints = {
    align: "center",
    width: 16,
    height: 16
  };
  backButton = new Layer({
    superLayer: navbar,
    borderRadius: m.utils.px(21),
    backgroundColor: "transparent",
    name: "back",
    clip: true
  });
  backButton.constraints = {
    top: 3,
    height: 42,
    width: 94,
    trailing: [homeButton, 6]
  };
  backIcon = new Layer({
    superLayer: backButton,
    width: svgBack.width,
    height: svgBack.height,
    html: svgBack.svg,
    backgroundColor: "transparent",
    name: "icon"
  });
  backIcon.constraints = {
    align: "center"
  };
  m.layout.set({
    target: [navbar, homeButton, recentButton, backButton, homeIcon, backIcon, recentIcon]
  });
  m.utils.inky({
    layer: homeButton,
    moveToTap: false,
    color: "white",
    scale: 20,
    curve: "bezier-curve(1, 0.4, 0.4, 1.0)",
    opacity: .3
  });
  m.utils.inky({
    layer: backButton,
    moveToTap: false,
    color: "white",
    scale: 20,
    curve: "bezier-curve(1, 0.4, 0.4, 1.0)",
    opacity: .3
  });
  m.utils.inky({
    layer: recentButton,
    moveToTap: false,
    color: "white",
    scale: 20,
    curve: "bezier-curve(1, 0.4, 0.4, 1.0)",
    opacity: .3
  });
  backButton.on(Events.TouchEnd, function() {
    return m.removeFromStack();
  });
  navbar.back = backButton;
  navbar.back.backIcon = backIcon;
  navbar.home = homeButton;
  navbar.home.icon = homeIcon;
  navbar.recent = recentButton;
  navbar.recent.icon = recentIcon;
  Utils.interval(.05, function() {
    return navbar.bringToFront();
  });
  m.layout.set(navbar);
  return navbar;
};


},{"material-kit":"material-kit"}],"material-kit-snack-bar":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  animated: true,
  text: "Snackbar Text",
  action: void 0,
  actionColor: "limeA200",
  duration: 5
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var actionWidth, bar, barHeight, fabExists, i, l, len, navbarExists, ref, setup;
  setup = m.utils.setupComponent(array, exports.defaults);
  bar = new Layer({
    name: "snackbar",
    backgroundColor: "transparent",
    clip: true
  });
  bar.type = "snackbar";
  bar.bg = new Layer({
    backgroundColor: "#323232",
    superLayer: bar,
    name: "bg"
  });
  navbarExists = 0;
  fabExists = void 0;
  ref = Framer.CurrentContext.layers;
  for (i = 0, len = ref.length; i < len; i++) {
    l = ref[i];
    if (l.type === "navbar") {
      navbarExists = l;
    }
    if (l.type === "floating") {
      fabExists = l;
    }
    if (l.type === "snackbar" && l !== bar) {
      l.bg.animate({
        properties: {
          y: bar.height
        },
        time: .3,
        curve: "bezier-curve(.2, 0.4, 0.4, 1.0)"
      }, l.fabMoved ? (l.fabMoved.halted = true, l.fabMoved.constraints.bottom = fabExists.previousBottom, m.layout.animate({
        target: fabExists,
        curve: "bezier-curve(.2, 0.4, 0.4, 1.0)",
        time: .3
      }), Utils.delay(setup.duration, function() {
        fabExists.constraints.bottom = fabExists.previousBottom;
        return m.layout.animate({
          target: fabExists,
          curve: "bezier-curve(.2, 0.4, 0.4, 1.0)",
          time: .3
        });
      })) : void 0);
    }
  }
  bar.bringToFront();
  bar.constraints = {
    leading: 0,
    trailing: 0,
    bottom: [navbarExists, -1],
    height: 48
  };
  m.layout.set({
    target: [bar]
  });
  bar.bg.props = {
    width: bar.width,
    height: bar.height
  };
  actionWidth = m.px(24);
  if (setup.action) {
    bar.action = new m.Button({
      type: "flat",
      superLayer: bar.bg,
      text: setup.action,
      constraints: {
        trailing: 24,
        align: "vertical"
      },
      backgroundColor: "#3232",
      color: setup.actionColor
    });
    actionWidth = bar.action.width + m.px(48);
  }
  bar.text = new m.Text({
    fontSize: 14,
    color: "white",
    superLayer: bar.bg,
    constraints: {
      leading: 24,
      align: "vertical"
    },
    text: setup.text,
    name: "text",
    lineHeight: 18
  });
  if (m.device.width < actionWidth + bar.text.width + m.px(24)) {
    bar.text.constraints.width = m.dp(m.device.width) - (m.dp(actionWidth) + 24);
    m.utils.update(bar.text);
    m.layout.set(bar.text);
    bar.constraints.height = m.dp(bar.text.height) + 48;
    bar.bg.height = bar.text.height + m.px(48);
    m.layout.set({
      target: [bar, bar.text]
    });
    if (setup.action) {
      m.layout.set(bar.action);
    }
  }
  barHeight = bar.bg.height;
  if (fabExists) {
    bar.fabMoved = fabExists;
    fabExists.previousBottom = fabExists.constraints.bottom;
    fabExists.constraints.bottom = fabExists.constraints.bottom + m.dp(barHeight);
  }
  if (setup.animated) {
    bar.bg.y = bar.bg.height;
    bar.text.opacity = 0;
    bar.bg.animate({
      properties: {
        y: 0
      },
      time: .3,
      curve: "bezier-curve(.2, 0.4, 0.4, 1.0)"
    });
    bar.text.animate({
      properties: {
        opacity: 1
      },
      time: .3
    });
    if (setup.action) {
      bar.action.animate({
        properties: {
          opacity: 1
        },
        time: .3
      });
    }
    if (fabExists) {
      m.layout.animate({
        target: fabExists,
        curve: "bezier-curve(.2, 0.4, 0.4, 1.0)",
        time: .3
      });
    }
  }
  Utils.delay(setup.duration, function() {
    bar.bg.animate({
      properties: {
        y: bar.height
      },
      time: .3,
      curve: "bezier-curve(.2, 0.4, 0.4, 1.0)"
    });
    bar.text.animate({
      properties: {
        opacity: 0
      },
      time: .3
    });
    if (setup.action) {
      bar.action.animate({
        properties: {
          opacity: 0
        },
        time: .3
      });
    }
    if (fabExists && fabExists.halted !== true) {
      fabExists.constraints.bottom = fabExists.previousBottom;
      return m.layout.animate({
        target: fabExists,
        curve: "bezier-curve(.2, 0.4, 0.4, 1.0)",
        time: .3
      });
    }
  });
  Utils.delay(setup.duration + .3, function() {
    return bar.destroy();
  });
  return bar;
};


},{"material-kit":"material-kit"}],"material-kit-stack":[function(require,module,exports){
var m, stack;

m = require('material-kit');

exports.stack = stack = [];

exports.addToStack = function(layer) {
  if (stack.indexOf(layer) === -1) {
    return stack.push(layer);
  }
};

exports.removeFromStack = function(layer) {
  var layerToleave, overlay;
  if (stack.length > 0) {
    layerToleave = stack[stack.length - 1];
    if (layerToleave.exit !== void 0) {
      layerToleave.exit();
    } else {
      overlay = new Layer({
        backgroundColor: m.color("black"),
        width: m.device.width,
        height: m.device.height
      });
      overlay.placeBehind(layerToleave);
      layerToleave.constraints = {
        leading: m.dp(m.device.width)
      };
      m.layout.animate({
        target: layerToleave,
        time: .3
      });
      overlay.animate({
        properties: {
          opacity: 0
        },
        time: .5,
        delay: .2
      });
      Utils.delay(.6, function() {
        layerToleave.destroy();
        return overlay.destroy();
      });
    }
    return stack.pop();
  }
};


},{"material-kit":"material-kit"}],"material-kit-status-bar":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  carrier: "",
  network: "LTE",
  battery: 100,
  cellular: 2,
  style: "light",
  clock24: false,
  type: "statusBar",
  backgroundColor: "rgba(0,0,0,.1)",
  color: "black",
  opacity: .6
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var batteryIcon, cellular, cellularIcon, highBattery, lowBattery, midBattery, setup, statusBar, time, wifi, wifiIcon;
  setup = m.utils.setupComponent(array, exports.defaults);
  statusBar = new Layer({
    backgroundColor: setup.backgroundColor,
    name: "statusBar.all"
  });
  if (setup.style === "dark") {
    if (setup.backgroundColor === "rgba(0,0,0,.1)") {
      statusBar.backgroundColor = m.utils.color("black");
    }
    if (setup.color === "black") {
      setup.color = "white";
    }
    if (setup.opacity === .6) {
      setup.opacity = 1;
    }
  }
  if (setup.style === "light" && setup.color !== "black") {
    setup.opacity = 1;
  }
  statusBar.type = setup.type;
  statusBar.constraints = {
    leading: 0,
    trailing: 0,
    height: 24
  };
  switch (m.device.name) {
    case "iphone-6s-plus":
      this.topConstraint = 5;
      this.bluetooth = 5;
      break;
    case "fullscreen":
      this.topConstraint = 5;
      this.bluetooth = -10;
      break;
    default:
      this.topConstraint = 3;
      this.bluetooth = 3;
  }
  this.time = m.utils.getTime();
  time = new m.Text({
    style: "statusBarTime",
    text: m.utils.timeFormatter(this.time, setup.clock24),
    fontSize: 14,
    fontWeight: 500,
    superLayer: statusBar,
    color: setup.color,
    name: "time",
    opacity: setup.opacity
  });
  time.constraints = {
    trailing: 8,
    align: "vertical"
  };
  m.utils.timeDelegate(time, setup.clock24);
  batteryIcon = new Layer({
    superLayer: statusBar,
    backgroundColor: "transparent",
    name: "batteryIcon"
  });
  if (setup.battery > 70) {
    highBattery = m.utils.svg(m.assets.batteryHigh);
    batteryIcon.html = highBattery.svg;
    batteryIcon.height = highBattery.height;
    batteryIcon.width = highBattery.width;
    m.utils.changeFill(batteryIcon, setup.color);
    batteryIcon.opacity = setup.opacity;
  }
  if (setup.battery <= 70 && setup.battery > 20) {
    midBattery = m.utils.svg(m.assets.batteryMid);
    batteryIcon.html = midBattery.svg;
    m.utils.changeFill(batteryIcon, setup.color);
  }
  if (setup.battery <= 20) {
    lowBattery = m.utils.svg(m.assets.batteryLow);
    batteryIcon.html = lowBattery.svg;
    m.utils.changeFill(batteryIcon, setup.color);
  }
  batteryIcon.constraints = {
    trailing: [time, 7],
    align: "vertical"
  };
  cellularIcon = m.utils.svg(m.assets.cellular);
  cellular = new Layer({
    width: cellularIcon.width,
    height: cellularIcon.height,
    html: cellularIcon.svg,
    superLayer: statusBar,
    backgroundColor: "transparent",
    opacity: setup.opacity,
    name: "cellular"
  });
  cellular.constraints = {
    trailing: [batteryIcon, 7],
    align: "vertical"
  };
  m.utils.changeFill(cellular, setup.color);
  wifiIcon = m.utils.svg(m.assets.wifi, setup.color);
  wifi = new Layer({
    width: wifiIcon.width,
    height: wifiIcon.height,
    superLayer: statusBar,
    backgroundColor: "transparent",
    name: "wifi",
    html: wifiIcon.svg,
    opacity: setup.opacity
  });
  m.utils.changeFill(wifi, setup.color);
  wifi.constraints = {
    trailing: [cellular, 4],
    align: "vertical"
  };
  m.layout.set();
  statusBar.battery = {};
  statusBar.battery.icon = batteryIcon;
  statusBar.time = time;
  statusBar.cellular = cellular;
  m.layout.set({
    target: [statusBar, time, batteryIcon, cellular, wifi]
  });
  return statusBar;
};


},{"material-kit":"material-kit"}],"material-kit-text":[function(require,module,exports){
var m, style;

m = require('material-kit');

exports.defaults = {
  constraints: {},
  text: "Material Text Layer",
  type: "text",
  x: 0,
  y: 0,
  width: -1,
  height: -1,
  superLayer: void 0,
  style: "default",
  lines: 1,
  textAlign: "left",
  backgroundColor: "transparent",
  color: "black",
  fontSize: 17,
  fontStyle: "regular",
  fontFamily: "Roboto",
  fontWeight: "regular",
  lineHeight: "auto",
  name: "text layer",
  opacity: 1,
  textTransform: "none",
  letterSpacing: 0,
  name: "text layer"
};

exports.defaults.props = Object.keys(exports.defaults);

style = document.createElement('style');

style.type = 'text/css';

style.appendChild(document.createTextNode("@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic);\n @import url(https://fonts.googleapis.com/icon?family=Material+Icons); \n"));

document.getElementsByTagName('head')[0].appendChild(style);

exports.create = function(array) {
  var exceptions, i, j, len, len1, prop, ref, ref1, setup, textFrame, textLayer;
  setup = m.utils.setupComponent(array, exports.defaults);
  exceptions = Object.keys(setup);
  textLayer = new Layer({
    backgroundColor: "transparent",
    name: setup.name
  });
  textLayer.type = "text";
  textLayer.html = setup.text;
  ref = m.lib.layerProps;
  for (i = 0, len = ref.length; i < len; i++) {
    prop = ref[i];
    if (setup[prop]) {
      if (prop === "color") {
        setup[prop] = m.utils.color(setup[prop]);
      }
      textLayer[prop] = setup[prop];
    }
  }
  ref1 = m.lib.layerStyles;
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    prop = ref1[j];
    if (setup[prop]) {
      if (prop === "lineHeight" && setup[prop] === "auto") {
        textLayer.style.lineHeight = setup.fontSize;
      }
      if (prop === "fontWeight") {
        switch (setup[prop]) {
          case "ultrathin":
            setup[prop] = 100;
            break;
          case "thin":
            setup[prop] = 200;
            break;
          case "light":
            setup[prop] = 300;
            break;
          case "regular":
            setup[prop] = 400;
            break;
          case "medium":
            setup[prop] = 500;
            break;
          case "semibold":
            setup[prop] = 600;
            break;
          case "bold":
            setup[prop] = 700;
            break;
          case "black":
            setup[prop] = 800;
        }
      }
      if (prop === "fontSize" || prop === "lineHeight" || prop === "letterSpacing") {
        setup[prop] = m.utils.px(setup[prop]) + "px";
      }
      textLayer.style[prop] = setup[prop];
    }
  }
  textFrame = m.utils.textAutoSize(textLayer);
  textLayer.props = {
    height: textFrame.height,
    width: textFrame.width
  };
  textLayer.constraints = setup.constraints;
  m.layout.set({
    target: textLayer
  });
  return textLayer;
};


},{"material-kit":"material-kit"}],"material-kit-utils":[function(require,module,exports){
var m;

m = require('material-kit');

exports.pt = function(px) {
  var pt;
  pt = px / m.device.scale;
  pt = Math.round(pt);
  return pt;
};

exports.px = function(pt) {
  var px;
  px = pt * m.device.scale;
  px = Math.round(px);
  return px;
};

exports.color = function(colorString) {
  var color;
  if (colorString[0] === "#") {
    return colorString;
  } else {
    color = new Color(m.lib.colors[colorString]);
    if (colorString === "transparent") {
      color = "transparent";
    }
    return color;
  }
};

exports.clean = function(string) {
  string = string.replace(/[&]nbsp[;]/gi, " ").replace(/[<]br[>]/gi, "");
  return string;
};

exports.svg = function(svg) {
  var endIndex, hEndIndex, hStartIndex, height, heightString, newHeight, newString, newWidth, startIndex, string, wEndIndex, wStartIndex, width;
  startIndex = svg.search("<svg width=");
  endIndex = svg.search(" viewBox");
  string = svg.slice(startIndex, endIndex);
  wStartIndex = string.search("=") + 2;
  wEndIndex = string.search("px");
  width = string.slice(wStartIndex, wEndIndex);
  newWidth = exports.px(width);
  heightString = string.slice(wEndIndex + 4, string.length);
  hStartIndex = heightString.search("=") + 2;
  hEndIndex = heightString.search("px");
  height = heightString.slice(hStartIndex, hEndIndex);
  newHeight = exports.px(height);
  newString = string.replace(width, newWidth);
  newString = newString.replace(height, newHeight);
  svg = svg.replace(string, newString);
  return {
    svg: svg,
    width: newWidth,
    height: newHeight
  };
};

exports.changeFill = function(layer, color) {
  var endIndex, fillString, newString, startIndex, string;
  if (typeof color !== "object") {
    color = exports.color(color);
  }
  startIndex = layer.html.search("fill=\"#");
  fillString = layer.html.slice(startIndex, layer.html.length);
  endIndex = fillString.search("\"") + 8;
  string = fillString.slice(0, endIndex);
  newString = "fill=\"" + color;
  return layer.html = layer.html.replace(string, newString);
};

exports.capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.getTime = function() {
  var date, dateObj, day, daysOfTheWeek, hours, mins, month, monthsOfTheYear, secs;
  daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dateObj = new Date();
  month = monthsOfTheYear[dateObj.getMonth()];
  date = dateObj.getDate();
  day = daysOfTheWeek[dateObj.getDay()];
  hours = dateObj.getHours();
  mins = dateObj.getMinutes();
  secs = dateObj.getSeconds();
  return {
    month: month,
    date: date,
    day: day,
    hours: hours,
    mins: mins,
    secs: secs
  };
};

exports.bgBlur = function(layer) {
  layer.style["-webkit-backdrop-filter"] = "blur(" + (exports.px(5)) + "px)";
  return layer;
};

exports.textAutoSize = function(textLayer) {
  var constraints, styles, textFrame;
  constraints = {};
  if (textLayer.constraints) {
    if (textLayer.constraints.height) {
      constraints.height = exports.px(textLayer.constraints.height);
    }
    if (textLayer.constraints.width) {
      constraints.width = exports.px(textLayer.constraints.width);
    }
  }
  styles = {
    fontSize: textLayer.style.fontSize,
    fontFamily: textLayer.style.fontFamily,
    fontWeight: textLayer.style.fontWeight,
    fontStyle: textLayer.style.fontStyle,
    lineHeight: textLayer.style.lineHeight,
    letterSpacing: textLayer.style.letterSpacing,
    textTransform: textLayer.style.textTransform
  };
  textFrame = Utils.textSize(textLayer.html, styles, constraints);
  return {
    width: textFrame.width,
    height: textFrame.height
  };
};

exports.getDevice = function() {
  var device, frame;
  device = "";
  frame = true;
  if (m.lib.realDevices[innerWidth] && m.lib.realDevices[innerWidth][innerHeight]) {
    device = m.lib.realDevices[innerWidth][innerHeight];
    frame = false;
    Framer.Device.deviceType = "fullscreen";
  }
  if (frame) {
    device = {
      name: Framer.Device.deviceType,
      width: Framer.DeviceView.Devices[Framer.Device.deviceType].screenWidth,
      height: Framer.DeviceView.Devices[Framer.Device.deviceType].screenHeight,
      scale: m.lib.framerFrames[Framer.DeviceView.Devices[Framer.Device.deviceType].screenWidth]
    };
  }
  if (device.scale === void 0) {
    device.scale = 2;
  }
  if (device.width === void 0) {
    device.width = innerWidth;
  }
  if (device.height === void 0) {
    device.height = innerHeight;
  }
  return device;
};

exports.specialChar = function(layer) {
  var chosenColor, newText, text;
  text = layer;
  if (layer.type === "button") {
    text = layer.label;
  }
  if (text.html.indexOf("-b") !== -1) {
    newText = text.html.replace("-b ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        fontWeight: 600
      }
    ]);
  }
  if (text.html.indexOf("-r") !== -1) {
    newText = text.html.replace("-r ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "red"
      }
    ]);
  }
  if (text.html.indexOf("-rb") !== -1) {
    newText = text.html.replace("-rb ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "blue"
      }
    ]);
  }
  if (text.html.indexOf("-lb") !== -1) {
    newText = text.html.replace("-lb ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "light-blue"
      }
    ]);
  }
  if (text.html.indexOf("-g") !== -1) {
    newText = text.html.replace("-g ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "green"
      }
    ]);
  }
  if (text.html.indexOf("-o") !== -1) {
    newText = text.html.replace("-o ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "orange"
      }
    ]);
  }
  if (text.html.indexOf("-p") !== -1) {
    newText = text.html.replace("-p ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "orange"
      }
    ]);
  }
  if (text.html.indexOf("-y") !== -1) {
    newText = text.html.replace("-y ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "yellow"
      }
    ]);
  }
  if (text.html.indexOf("-#") !== -1) {
    chosenColor = text.html.slice(1, 8);
    newText = text.html.slice(9, text.html.length);
    exports.update(text, [
      {
        text: newText
      }, {
        color: chosenColor
      }
    ]);
  }
  if (text.html.indexOf("-") !== -1) {
    newText = text.html.replace("- ", "");
    exports.update(text, [
      {
        text: newText
      }
    ]);
  }
  if (layer.buttonType === "text") {
    layer.width = text.width;
  }
  return m.layout.set();
};

exports.update = function(layer, array) {
  var change, j, key, len, textFrame, value;
  if (array === void 0) {
    array = [];
  }
  if (layer.type === "text") {
    for (j = 0, len = array.length; j < len; j++) {
      change = array[j];
      key = Object.keys(change)[0];
      value = change[key];
      if (key === "text") {
        layer.html = value;
      }
      if (key === "fontWeight") {
        layer.style[key] = value;
      }
      if (key === "color") {
        layer.color = exports.color(value);
      }
    }
    textFrame = exports.textAutoSize(layer);
    layer.width = textFrame.width;
    layer.height = textFrame.height;
  }
  return m.layout.set();
};

exports.autoColor = function(colorObject) {
  var blue, color, green, red, rgb;
  rgb = colorObject.toRgbString();
  rgb = rgb.substring(4, rgb.length - 1);
  rgb = rgb.replace(/ /g, '');
  rgb = rgb.replace(/ /g, '');
  rgb = rgb.split(',');
  red = rgb[0];
  green = rgb[1];
  blue = rgb[2];
  color = "";
  if ((red * 0.299 + green * 0.587 + blue * 0.114) > 186) {
    color = exports.color("black");
  } else {
    color = exports.color("white");
  }
  return color;
};

exports.sameParent = function(layer1, layer2) {
  var parentOne, parentTwo;
  parentOne = layer1.superLayer;
  parentTwo = layer2.superLayer;
  if (parentOne === parentTwo) {
    return true;
  } else {
    return false;
  }
};

exports.timeDelegate = function(layer, clockType) {
  this.time = exports.getTime();
  return Utils.delay(60 - this.time.secs, function() {
    this.time = exports.getTime();
    exports.update(layer, [
      {
        text: exports.timeFormatter(this.time, clockType)
      }
    ]);
    return Utils.interval(60, function() {
      this.time = exports.getTime();
      return exports.update(layer, [
        {
          text: exports.timeFormatter(this.time, clockType)
        }
      ]);
    });
  });
};

exports.timeFormatter = function(timeObj, clockType) {
  if (clockType === false) {
    if (timeObj.hours > 12) {
      timeObj.hours = timeObj.hours - 12;
    }
    if (timeObj.hours === 0) {
      timeObj.hours = 12;
    }
  }
  if (timeObj.mins < 10) {
    timeObj.mins = "0" + timeObj.mins;
  }
  return timeObj.hours + ":" + timeObj.mins;
};

exports.setupComponent = function(array, defaults) {
  var i, j, len, obj, ref;
  if (array === void 0) {
    array = [];
  }
  obj = {};
  ref = defaults.props;
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (array[i] !== void 0) {
      obj[i] = array[i];
    } else {
      obj[i] = defaults[i];
    }
  }
  return obj;
};

exports.emojiFormatter = function(string) {
  var arrayOfCodes, code, decoded, j, k, len, len1, unicodeFormat;
  unicodeFormat = "";
  if (string[0] === "E" || string[0] === "3" || string[0] === "2" || string[0] === "C") {
    arrayOfCodes = string.split(" ");
    for (j = 0, len = arrayOfCodes.length; j < len; j++) {
      code = arrayOfCodes[j];
      unicodeFormat = unicodeFormat + "%" + code;
    }
  } else {
    arrayOfCodes = string.split(" ");
    unicodeFormat = "%F0%9F";
    for (k = 0, len1 = arrayOfCodes.length; k < len1; k++) {
      code = arrayOfCodes[k];
      unicodeFormat = unicodeFormat + "%" + code;
    }
  }
  decoded = decodeURIComponent(unicodeFormat);
  return decoded;
};

exports.buildEmojisObject = function() {
  var code, emoji, emojis, index, j, len, ref, results;
  emojis = [];
  ref = m.assets.emojiCodes;
  results = [];
  for (index = j = 0, len = ref.length; j < len; index = ++j) {
    code = ref[index];
    emoji = exports.emojiFormatter(code);
    results.push(emojis.push(emoji));
  }
  return results;
};

exports.toHHMMSS = function(int) {
  var hours, minutes, sec_num, seconds, timeString;
  sec_num = parseInt(int, 10);
  hours = Math.floor(sec_num / 3600);
  minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  seconds = sec_num - (hours * 3600) - (minutes * 60);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  timeString = "";
  if (hours !== "00") {
    timeString = hours + ':' + minutes + ':' + seconds;
  } else {
    timeString = minutes + ':' + seconds;
  }
  return timeString;
};

exports.inky = function(setup) {
  var inkColor, inkCurve, inkOpacity, inkScale, inkStartScale, inkyEffect, moveToTap, startX, startY;
  startX = setup.layer.width / 2;
  startY = setup.layer.height / 2;
  inkColor = "#0A0A0A";
  inkStartScale = .1;
  inkScale = 3;
  inkCurve = "bezier-curve(.2, 0.4, 0.4, 1.0)";
  inkOpacity = 1;
  moveToTap = true;
  if (setup.moveToTap !== void 0) {
    moveToTap = setup.moveToTap;
  }
  if (setup.color !== void 0) {
    inkColor = m.color(setup.color);
  }
  if (setup.scale !== void 0) {
    inkScale = setup.scale;
  }
  if (setup.startScale !== void 0) {
    inkStartScale = setup.startScale;
  }
  if (setup.curve !== void 0) {
    inkCurve = setup.curve;
  }
  if (setup.opacity !== void 0) {
    inkOpacity = setup.opacity;
  }
  inkyEffect = function(event, layer) {
    var circle;
    if (moveToTap === true) {
      startX = event.offsetX;
      startY = event.offsetY;
      if (Utils.isChrome() === false && Utils.isTouch()) {
        startX = event.touchCenter.x - layer.x;
        startY = event.touchCenter.y - layer.y;
      }
    }
    circle = new Layer({
      backgroundColor: inkColor,
      midX: startX,
      midY: startY,
      superLayer: layer,
      borderRadius: m.utils.px(50),
      opacity: inkOpacity
    });
    circle.scale = inkStartScale;
    circle.animate({
      properties: {
        scale: inkScale,
        opacity: 0
      },
      curve: inkCurve,
      time: .5
    });
    return Utils.delay(1, function() {
      return circle.destroy();
    });
  };
  if (Utils.isChrome() && Utils.isTouch()) {
    setup.layer.on(Events.DoubleTap, function(event) {
      return inkyEffect(event, this);
    });
  }
  if (Utils.isChrome() === false && Utils.isTouch()) {
    setup.layer.on(Events.Tap, function(event) {
      return inkyEffect(event, this);
    });
  }
  if (Utils.isDesktop()) {
    return setup.layer.on(Events.TouchEnd, function(event) {
      return inkyEffect(event, this);
    });
  }
};


},{"material-kit":"material-kit"}],"material-kit-video":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  video: void 0,
  superLayer: void 0,
  height: m.px(205),
  width: m.px(100),
  backgroundColor: "transparent",
  autoplay: true,
  constraints: {
    top: 0
  },
  max: true,
  progressColor: "blue800",
  mute: false,
  loop: false,
  idleLimit: 3,
  showPlayStop: true,
  image: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var UIdelegate, UIset, ratio, setup, videoLayer;
  setup = m.utils.setupComponent(array, exports.defaults);
  if (setup.max) {
    ratio = 0.5625;
    setup.width = m.device.width;
    setup.height = setup.width * 0.5625;
  }
  videoLayer = new VideoLayer({
    superLayer: setup.superLayer,
    video: setup.video,
    height: setup.height,
    width: setup.width,
    backgroundColor: setup.backgroundColor,
    name: "video"
  });
  if (setup.image) {
    videoLayer.image = setup.image;
  }
  videoLayer.player.autoplay = setup.autoplay;
  videoLayer.player.muted = setup.mute;
  videoLayer.player.loop = setup.loop;
  if (setup.constraints) {
    videoLayer.constraints = setup.constraints;
    m.layout.set(videoLayer);
  }
  videoLayer.controls = new Layer({
    height: videoLayer.height,
    width: videoLayer.width,
    superLayer: videoLayer,
    backgroundColor: "transparent",
    name: "controls"
  });
  UIset = function() {
    var idleTime;
    videoLayer.isFullScreen = false;
    videoLayer.playstop = new Layer({
      backgroundColor: m.color("black"),
      superLayer: videoLayer.controls,
      borderRadius: m.px(50),
      height: m.px(50),
      width: m.px(50),
      opacity: .6,
      name: "play/stop"
    });
    if (setup.showPlayStop === false) {
      videoLayer.playstop.opacity = 0;
    }
    videoLayer.playstop.center();
    videoLayer.pause = new m.Icon({
      name: "pause",
      color: "white"
    });
    videoLayer.play = new m.Icon({
      name: "play_arrow",
      color: "white"
    });
    videoLayer.fullscreen = new m.Icon({
      name: "fullscreen",
      color: "white"
    });
    videoLayer.fullscreen.constraints = {
      bottom: 0,
      trailing: 10
    };
    videoLayer.fullscreenExit = new m.Icon({
      name: "fullscreen_exit",
      color: "white"
    });
    videoLayer.fullscreenExit.constraints = {
      bottom: 0,
      trailing: 10
    };
    m.layout.set(videoLayer.fullscreen);
    videoLayer.play.visible = false;
    videoLayer.fullscreenExit.visible = false;
    videoLayer.controls.addSubLayer(videoLayer.pause);
    videoLayer.controls.addSubLayer(videoLayer.play);
    videoLayer.controls.addSubLayer(videoLayer.fullscreen);
    videoLayer.controls.addSubLayer(videoLayer.fullscreenExit);
    videoLayer.pause.center();
    videoLayer.play.center();
    videoLayer.currentTime = new m.Text({
      text: m.utils.toHHMMSS(videoLayer.player.currentTime),
      color: "white",
      constraints: {
        bottom: 8,
        leading: 17
      },
      superLayer: videoLayer.controls,
      fontSize: 14,
      name: "currentTime"
    });
    videoLayer.endTime = new m.Text({
      text: m.utils.toHHMMSS(videoLayer.player.duration),
      color: "white",
      constraints: {
        bottomEdges: videoLayer.currentTime,
        trailing: [videoLayer.fullscreen, 10]
      },
      superLayer: videoLayer.controls,
      fontSize: 14,
      name: "endTime"
    });
    videoLayer.timebar = new Layer({
      superLayer: videoLayer.controls,
      backgroundColor: m.color("grey300"),
      name: "timebar",
      opacity: .7
    });
    videoLayer.timebar.constraints = {
      leading: [videoLayer.currentTime, 20],
      trailing: [videoLayer.endTime, 20],
      height: 3,
      verticalCenter: videoLayer.currentTime
    };
    m.layout.set(videoLayer.timebar);
    videoLayer.seeker = new Layer({
      backgroundColor: "transparent",
      superLayer: videoLayer.controls,
      name: "seeker"
    });
    videoLayer.seeker.constraints = {
      width: 50,
      height: 50,
      verticalCenter: videoLayer.currentTime
    };
    m.layout.set(videoLayer.seeker);
    videoLayer.seekerDot = new Layer({
      width: m.px(15),
      height: m.px(15),
      borderRadius: m.px(15),
      backgroundColor: m.color(setup.progressColor),
      superLayer: videoLayer.seeker,
      name: "seekerDot"
    });
    videoLayer.seekerDot.center();
    videoLayer.progressBar = new Layer({
      backgroundColor: m.color(setup.progressColor),
      width: 0,
      superLayer: videoLayer.controls,
      name: "progress bar"
    });
    videoLayer.progressBar.constraints = {
      height: 3,
      verticalCenter: videoLayer.timebar
    };
    m.layout.set({
      target: [videoLayer.seeker, videoLayer.progressBar]
    });
    videoLayer.seekerOffset = videoLayer.seeker.width / 2 - videoLayer.seekerDot.width / 2;
    videoLayer.seeker.x = videoLayer.timebar.x - videoLayer.seekerOffset;
    videoLayer.progressBar.x = videoLayer.timebar.x;
    idleTime = 0;
    Utils.interval(1, function() {
      idleTime++;
      if (idleTime > setup.idleLimit && videoLayer.player.paused === false && videoLayer.seeker.working !== true) {
        videoLayer.controls.animate({
          properties: {
            opacity: 0
          },
          time: .25
        });
        return videoLayer.playstop.visible = false;
      } else {
        videoLayer.controls.opacity = 1;
        return videoLayer.playstop.visible = true;
      }
    });
    videoLayer.controls.on(Events.TouchStart, function() {
      if (idleTime > setup.idleLimit) {
        return idleTime = 0;
      } else {
        return idleTime = 5;
      }
    });
    videoLayer.playstop.on(Events.TouchEnd, function() {
      if (videoLayer.player.paused) {
        videoLayer.play.visible = false;
        videoLayer.pause.visible = true;
        return videoLayer.player.play();
      } else {
        videoLayer.play.visible = true;
        videoLayer.pause.visible = false;
        return videoLayer.player.pause();
      }
    });
    videoLayer.fullscreen.on(Events.TouchEnd, function() {
      videoLayer.fullscreen.visible = false;
      videoLayer.fullscreenExit.visible = true;
      videoLayer.cacheProps = videoLayer.props;
      videoLayer.cacheAlign = videoLayer.constraints.align;
      if (videoLayer.onFullScreen) {
        videoLayer.onFullScreen();
      }
      idleTime = 0;
      videoLayer.backdrop = new Layer({
        backgroundColor: "black",
        width: m.device.width,
        height: m.device.height,
        name: "backdrop"
      });
      videoLayer.constraints.align = "center";
      videoLayer.animate({
        properties: {
          width: m.device.width,
          height: m.device.width * 0.5625
        },
        time: .5
      });
      m.layout.animate({
        target: videoLayer,
        time: .5
      });
      if (setup.superLayer) {
        videoLayer.backdrop.superLayer = setup.superLayer;
        videoLayer.backdrop.placeBehind(videoLayer);
      } else {
        videoLayer.backdrop.placeBehind(videoLayer);
      }
      return m.addToStack(videoLayer);
    });
    videoLayer.fullscreenExit.on(Events.TouchEnd, function() {
      videoLayer.fullscreen.visible = true;
      videoLayer.fullscreenExit.visible = false;
      idleTime = 0;
      return m.removeFromStack();
    });
    videoLayer.exit = function() {
      videoLayer.animate({
        properties: {
          x: videoLayer.cacheProps.x,
          y: videoLayer.cacheProps.y,
          width: videoLayer.cacheProps.width,
          height: videoLayer.cacheProps.height
        },
        time: .5
      });
      videoLayer.constraints.align = videoLayer.cacheAlign;
      videoLayer.backdrop.animate({
        properties: {
          opacity: 0
        },
        time: .5,
        delay: .2
      });
      Utils.delay(.7, function() {
        return videoLayer.backdrop.destroy();
      });
      videoLayer.fullscreen.visible = true;
      videoLayer.fullscreenExit.visible = false;
      if (videoLayer.onFullScreenExit) {
        return videoLayer.onFullScreenExit();
      }
    };
    videoLayer.seeker.draggable.enabled = true;
    videoLayer.seeker.draggable.speedY = 0;
    videoLayer.seeker.draggable.speedX = 1;
    videoLayer.seeker.draggable.momentum = false;
    videoLayer.seeker.draggable.bounce = false;
    videoLayer.seeker.on(Events.TouchStart, function() {
      videoLayer.seeker.scale = 1.2;
      return videoLayer.seeker.working = true;
    });
    videoLayer.seeker.on(Events.DragMove, function() {
      var newCT;
      videoLayer.seeker.working = true;
      if (videoLayer.seeker.x + videoLayer.seekerOffset < videoLayer.timebar.x) {
        videoLayer.seeker.x = videoLayer.timebar.x - videoLayer.seekerOffset;
      }
      if (videoLayer.seeker.maxX > videoLayer.timebar.maxX + videoLayer.seekerOffset) {
        videoLayer.seeker.maxX = videoLayer.timebar.maxX + videoLayer.seekerOffset;
      }
      newCT = videoLayer.player.duration * ((videoLayer.seeker.x + videoLayer.seekerOffset - videoLayer.timebar.x) / videoLayer.timebar.width);
      if (newCT < 0) {
        newCT = 0;
      }
      if (newCT > videoLayer.player.duration) {
        newCT = videoLayer.player.duration;
      }
      return m.utils.update(videoLayer.currentTime, [
        {
          text: m.utils.toHHMMSS(newCT)
        }
      ]);
    });
    return videoLayer.seeker.on(Events.DragEnd, function() {
      var et, newCT;
      videoLayer.seeker.scale = 1;
      videoLayer.seeker.working = false;
      et = videoLayer.player.duration;
      newCT = et * ((videoLayer.seeker.x + videoLayer.seekerOffset - videoLayer.timebar.x) / videoLayer.timebar.width);
      if (newCT < 0) {
        newCT = 0;
      }
      if (newCT > videoLayer.player.duration) {
        newCT = videoLayer.player.duration;
      }
      newCT = Math.round(newCT);
      return videoLayer.player.currentTime = newCT;
    });
  };
  UIdelegate = function() {
    var ct, et;
    ct = videoLayer.player.currentTime;
    et = videoLayer.player.duration;
    if (videoLayer.seeker.working) {

    } else {
      m.utils.update(videoLayer.currentTime, [
        {
          text: m.utils.toHHMMSS(videoLayer.player.currentTime)
        }
      ]);
      videoLayer.seeker.x = videoLayer.timebar.x + (videoLayer.timebar.width * ct / et) - videoLayer.seekerOffset;
      return videoLayer.progressBar.width = videoLayer.seeker.x + videoLayer.seekerOffset - videoLayer.timebar.x;
    }
  };
  videoLayer.player.addEventListener("loadeddata", UIset);
  videoLayer.player.addEventListener("timeupdate", UIdelegate);
  return videoLayer;
};


},{"material-kit":"material-kit"}],"material-kit":[function(require,module,exports){
var appbar, banner, button, dialog, icon, layout, library, nav, snackbar, stack, status, text, utils, video;

exports.layout = layout = require('material-kit-layout');

exports.lib = library = require('material-kit-library');

exports.utils = utils = require('material-kit-utils');

exports.stack = stack = require('material-kit-stack');

exports.device = utils.getDevice();

exports.assets = library.assets;

exports.color = function(colorString) {
  return exports.utils.color(colorString);
};

exports.dp = function(px) {
  return exports.utils.pt(px);
};

exports.px = function(dp) {
  return exports.utils.px(dp);
};

exports.stack = stack.stack;

exports.addToStack = function(layer) {
  return stack.addToStack(layer);
};

exports.removeFromStack = function(layer) {
  return stack.removeFromStack(layer);
};

appbar = require('material-kit-app-bar');

banner = require('material-kit-banner');

button = require('material-kit-button');

dialog = require('material-kit-dialog');

icon = require('material-kit-icon');

nav = require('material-kit-nav-bar');

snackbar = require('material-kit-snack-bar');

status = require('material-kit-status-bar');

text = require('material-kit-text');

video = require('material-kit-video');

exports.AppBar = appbar.create;

exports.Banner = banner.create;

exports.Button = button.create;

exports.Dialog = dialog.create;

exports.Icon = icon.create;

exports.NavBar = nav.create;

exports.SnackBar = snackbar.create;

exports.StatusBar = status.create;

exports.Text = text.create;

exports.Video = video.create;


},{"material-kit-app-bar":"material-kit-app-bar","material-kit-banner":"material-kit-banner","material-kit-button":"material-kit-button","material-kit-dialog":"material-kit-dialog","material-kit-icon":"material-kit-icon","material-kit-layout":"material-kit-layout","material-kit-library":"material-kit-library","material-kit-nav-bar":"material-kit-nav-bar","material-kit-snack-bar":"material-kit-snack-bar","material-kit-stack":"material-kit-stack","material-kit-status-bar":"material-kit-status-bar","material-kit-text":"material-kit-text","material-kit-utils":"material-kit-utils","material-kit-video":"material-kit-video"}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL2RlbW9fZGF0YS5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1hcHAtYmFyLmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWJhbm5lci5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1idXR0b24uY29mZmVlIiwiL1VzZXJzL0tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtZGlhbG9nLmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWljb24uY29mZmVlIiwiL1VzZXJzL0tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtbGF5b3V0LmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWxpYnJhcnkuY29mZmVlIiwiL1VzZXJzL0tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtbmF2LWJhci5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1zbmFjay1iYXIuY29mZmVlIiwiL1VzZXJzL0tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtc3RhY2suY29mZmVlIiwiL1VzZXJzL0tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtc3RhdHVzLWJhci5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC10ZXh0LmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXV0aWxzLmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXZpZGVvLmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE9BQU8sQ0FBQyxJQUFSLEdBQWU7RUFDYixJQUFBLEVBQUs7SUFDSDtNQUNFLE9BQUEsRUFBUSx3QkFEVjtNQUVFLFFBQUEsRUFBUyxlQUZYO01BR0UsT0FBQSxFQUFRLFNBSFY7TUFJRSxhQUFBLEVBQWMsTUFKaEI7TUFLRSxVQUFBLEVBQVksWUFMZDtNQU1FLE1BQUEsRUFBTyxjQU5UO01BT0UsTUFBQSxFQUFTLFFBUFg7TUFRRSxXQUFBLEVBQVksSUFSZDtNQVNFLGFBQUEsRUFBZ0IsS0FUbEI7TUFVRSxPQUFBLEVBQVEsa0ZBVlY7TUFXRSxXQUFBLEVBQVksc0RBWGQ7TUFZRSxhQUFBLEVBQWMsMEdBWmhCO0tBREcsRUFl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QSxDQUFRLHNCQUFSOztBQUNULE1BQUEsR0FBUyxPQUFBLENBQVEscUJBQVI7O0FBQ1QsTUFBQSxHQUFTLE9BQUEsQ0FBUSxxQkFBUjs7QUFDVCxNQUFBLEdBQVMsT0FBQSxDQUFRLHFCQUFSOztBQUNULElBQUEsR0FBTyxPQUFBLENBQVEsbUJBQVI7O0FBQ1AsR0FBQSxHQUFNLE9BQUEsQ0FBUSxzQkFBUjs7QUFDTixRQUFBLEdBQVcsT0FBQSxDQUFRLHdCQUFSOztBQUNYLE1BQUEsR0FBUyxPQUFBLENBQVEseUJBQVI7O0FBQ1QsSUFBQSxHQUFPLE9BQUEsQ0FBUSxtQkFBUjs7QUFDUCxLQUFBLEdBQVEsT0FBQSxDQUFRLG9CQUFSOztBQUdSLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE1BQU0sQ0FBQzs7QUFDeEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsTUFBTSxDQUFDOztBQUN4QixPQUFPLENBQUMsTUFBUixHQUFpQixNQUFNLENBQUM7O0FBQ3hCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE1BQU0sQ0FBQzs7QUFDeEIsT0FBTyxDQUFDLElBQVIsR0FBZSxJQUFJLENBQUM7O0FBQ3BCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLEdBQUcsQ0FBQzs7QUFDckIsT0FBTyxDQUFDLFFBQVIsR0FBbUIsUUFBUSxDQUFDOztBQUM1QixPQUFPLENBQUMsU0FBUixHQUFvQixNQUFNLENBQUM7O0FBQzNCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsSUFBSSxDQUFDOztBQUNwQixPQUFPLENBQUMsS0FBUixHQUFnQixLQUFLLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0cy5qc29uID0ge1xuICBob21lOltcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJNYWtpbmcgTWF0ZXJpYWwgRGVzaWduXCIsXG4gICAgICBcImF1dGhvclwiOlwiR29vZ2xlIERlc2lnblwiLFxuICAgICAgXCJ2aWV3c1wiOlwiNDA5LDEzMFwiLFxuICAgICAgXCJzaG9ydF92aWV3c1wiOlwiNDA5S1wiXG4gICAgICBcInJlbF9kYXRlXCI6IFwiMSB5ZWFyIGFnb1wiLFxuICAgICAgXCJkYXRlXCI6XCJNYXkgMjgsIDIwMTVcIixcbiAgICAgIFwic3Vic1wiIDogXCI0MSwzNjdcIlxuICAgICAgXCJ0aHVtYnNfdXBcIjpcIjdLXCJcbiAgICAgIFwidGh1bWJzX2Rvd25cIiA6IFwiMTU2XCJcbiAgICAgIFwidmlkZW9cIjpcImh0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzE0MzI3MDU1Ni9Zb3VUdWJlL21ha2luZy1tYXRlcmlhbC1kZXNpZ24ubXA0XCIsXG4gICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9yclQ2djVzT3dKZy9tYXhyZXNkZWZhdWx0LmpwZ1wiLFxuICAgICAgXCJwcm9maWxlX3BpY1wiOlwiaHR0cHM6Ly95dDMuZ2dwaHQuY29tLy05OVJNa0wzMnlrOC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9WUlFrTWJ1bG5jby9zODgtYy1rLW5vLXJqLWMweGZmZmZmZi9waG90by5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiJDE4LDAwMCBhIG5pZ2h0IEhPVEVMIFJPT01cIixcbiAgICAgIFwiYXV0aG9yXCI6XCJDYWlzZXlOZWlzdGF0XCIsXG4gICAgICBcInZpZXdzXCI6XCIyLDEyMyw3MjVcIixcbiAgICAgIFwic2hvcnRfdmlld3NcIjpcIjJNXCJcbiAgICAgIFwiZGF0ZVwiOlwiTWF5IDE5LCAyMDE2XCIsXG4gICAgICBcInJlbF9kYXRlXCI6IFwiMyBkYXlzIGFnb1wiLFxuICAgICAgXCJzdWJzXCIgOiBcIjMsMDUzLDgxMlwiLFxuICAgICAgXCJ0aHVtYnNfdXBcIjpcIjc0S1wiXG4gICAgICBcInRodW1ic19kb3duXCIgOiBcIjEuOUtcIlxuICAgICAgXCJ2aWRlb1wiOlwiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMTQzMjcwNTU2L1lvdVR1YmUvY2FzZXktbmVpc3RhdC5tcDRcIixcbiAgICAgIFwidGh1bWJuYWlsXCI6XCJodHRwczovL2kueXRpbWcuY29tL3ZpLzhzcVk2UVh0VHNJL2hxZGVmYXVsdC5qcGdcIixcbiAgICAgIFwicHJvZmlsZV9waWNcIjpcImh0dHBzOi8veXQzLmdncGh0LmNvbS8teDJOTk4yeTQ5RzAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvUmh3VmF4TXZxVzgvczg4LWMtay1uby1yai1jMHhmZmZmZmYvcGhvdG8uanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkhpbGxhcnkgJiBCZXJuaWUgQ29sZCBPcGVuIC0gU05MXCIsXG4gICAgICBcImF1dGhvclwiOlwiU2F0dXJkYXkgTmlnaHQgTGl2ZVwiLFxuICAgICAgXCJ2aWV3c1wiOlwiMSwwMjcsNjc2XCIsXG4gICAgICBcInNob3J0X3ZpZXdzXCI6XCIxTVwiXG4gICAgICBcInJlbF9kYXRlXCI6IFwiMSBkYXkgYWdvXCIsXG4gICAgICBcImRhdGVcIjpcIk1heSAyMiwgMjAxNlwiLFxuICAgICAgXCJzdWJzXCIgOiBcIjIsNDAwLDAyMlwiLFxuICAgICAgXCJ0aHVtYnNfdXBcIjpcIjExS1wiXG4gICAgICBcInRodW1ic19kb3duXCIgOiBcIjk4OFwiXG4gICAgICBcInZpZGVvXCI6XCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8xNDMyNzA1NTYvWW91VHViZS9oaWxhcnktYmVybmllLm1wNFwiLFxuICAgICAgXCJ0aHVtYm5haWxcIjpcImh0dHBzOi8vaS55dGltZy5jb20vdmkvSFJxWmhKY2FlM00vbWF4cmVzZGVmYXVsdC5qcGdcIixcbiAgICAgIFwicHJvZmlsZV9waWNcIjpcImh0dHBzOi8veXQzLmdncGh0LmNvbS8teC1wS1cxeWI2eTgvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvalBiTVU0Wlcwc0Evczg4LWMtay1uby1yai1jMHhmZmZmZmYvcGhvdG8uanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkV1cm9wZWFuIHdpbmRvd3MgYXJlIGF3ZXNvbWVcIixcbiAgICAgIFwiYXV0aG9yXCI6XCJNYXR0aGlhcyBXYW5kZWxcIixcbiAgICAgIFwidmlld3NcIjpcIjQ4OSw2NDdcIixcbiAgICAgIFwic2hvcnRfdmlld3NcIjpcIjQ4OUtcIlxuICAgICAgXCJyZWxfZGF0ZVwiOiBcIjEgZGF5IGFnb1wiLFxuICAgICAgXCJkYXRlXCI6XCJNYXkgMjIsIDIwMTZcIixcbiAgICAgIFwic3Vic1wiIDogXCIyMSw0MDlcIixcbiAgICAgIFwidGh1bWJzX3VwXCI6XCIzS1wiXG4gICAgICBcInRodW1ic19kb3duXCIgOiBcIjEwNVwiXG4gICAgICBcInZpZGVvXCI6XCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8xNDMyNzA1NTYvWW91VHViZS9ldXJvcGVhbi13aW5kb3dzLm1wNFwiLFxuICAgICAgXCJ0aHVtYm5haWxcIjpcImh0dHBzOi8vaS55dGltZy5jb20vdmkvTFQ4ZUJqbGNUOHMvbWF4cmVzZGVmYXVsdC5qcGdcIixcbiAgICAgIFwicHJvZmlsZV9waWNcIjpcImh0dHBzOi8veXQzLmdncGh0LmNvbS8tUzFIWVpPVmpheUUvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvVVk3M3gzRG9Jdmcvczg4LWMtay1uby1yai1jMHhmZmZmZmYvcGhvdG8uanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIllvXCIsXG4gICAgICBcImF1dGhvclwiOlwiU2F0dXJkYXkgTmlnaHQgTGl2ZVwiLFxuICAgICAgXCJ2aWV3c1wiOlwiMSwwMjcsNjc2XCIsXG4gICAgICBcInNob3J0X3ZpZXdzXCI6XCIxTVwiXG4gICAgICBcInJlbF9kYXRlXCI6IFwiMSBkYXkgYWdvXCIsXG4gICAgICBcImRhdGVcIjpcIk1heSAyMiwgMjAxNlwiLFxuICAgICAgXCJzdWJzXCIgOiBcIjIsNDAwLDAyMlwiLFxuICAgICAgXCJ0aHVtYnNfdXBcIjpcIjExS1wiXG4gICAgICBcInRodW1ic19kb3duXCIgOiBcIjk4OFwiXG4gICAgICBcInZpZGVvXCI6XCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8xNDMyNzA1NTYvWW91VHViZS9oaWxhcnktYmVybmllLm1wNFwiLFxuICAgICAgXCJ0aHVtYm5haWxcIjpcImh0dHBzOi8vaS55dGltZy5jb20vdmkvSFJxWmhKY2FlM00vbWF4cmVzZGVmYXVsdC5qcGdcIixcbiAgICAgIFwicHJvZmlsZV9waWNcIjpcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3VzZXIvU2F0dXJkYXlOaWdodExpdmVcIlxuICAgIH1cbiAgXVxufVxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0dGl0bGU6XCJUaXRsZVwiXG5cdG1lbnU6dW5kZWZpbmVkXG5cblx0dHlwZTpcImFwcGJhclwiXG5cdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0dGFiczp1bmRlZmluZWRcblx0dGl0bGVDb2xvcjpcImJsYWNrXCJcblx0YWN0aW9uQ29sb3I6XCJibGFja1wiXG5cdHRhYnM6dW5kZWZpbmVkXG5cdHRhYnNDb2xvcjp1bmRlZmluZWRcblx0dGFic0luazp7Y29sb3I6XCJibHVlR3JleVwiLCBzY2FsZTo4fVxuXHR0YWJzQmFyQ29sb3I6XCJ5ZWxsb3dcIlxuXHR0YWJzQWx0Ontjb2xvcjp1bmRlZmluZWQsIG9wYWNpdHk6Ljd9XG5cdHRhYkljb25zOnVuZGVmaW5lZFxuXHRhY3Rpb25zOnVuZGVmaW5lZFxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblx0YmFyID0gbmV3IExheWVyXG5cdFx0bmFtZTpcIkFwcCBCYXJcIlxuXHRcdGJhY2tncm91bmRDb2xvcjptLmNvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblx0XHRzaGFkb3dDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC4xMilcIlxuXHRcdHNoYWRvd0JsdXI6IG0ucHgoNClcblx0XHRzaGFkb3dZOiBtLnB4KDIpXG5cblx0YmFyLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRoZWlnaHQ6ODBcblxuXHRpZiBzZXR1cC50YWJzXG5cdFx0YmFyLmNvbnN0cmFpbnRzLmhlaWdodCA9IDEyOFxuXG5cdGJhckFyZWEgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpiYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYXJBcmVhXCJcblx0YmFyQXJlYS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDo1NlxuXHRcdGJvdHRvbTowXG5cblx0aWYgc2V0dXAudGFicyAmJiBzZXR1cC50YWJzLmxlbmd0aCA+IDJcblx0XHRiYXJBcmVhLmNvbnN0cmFpbnRzLmJvdHRvbSA9IDQ4XG5cblx0aWYgc2V0dXAuc3VwZXJMYXllclxuXHRcdHNldHVwLnN1cGVyTGF5ZXIuYWRkU3ViTGF5ZXIoYmFyKVxuXG5cdG0ubGF5b3V0LnNldChbYmFyLCBiYXJBcmVhXSlcblxuXHRiYXIudHlwZSA9IHNldHVwLnR5cGVcblxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJzdGF0dXNCYXJcIlxuXHRcdFx0QHN0YXR1c0JhciA9IGxheWVyXG5cdFx0XHRiYXIucGxhY2VCZWhpbmQoQHN0YXR1c0JhcilcblxuXHRpZiBzZXR1cC50aXRsZUNvbG9yID09IFwiYmxhY2tcIlxuXHRcdHNldHVwLnRpdGxlQ29sb3IgPSBtLnV0aWxzLmF1dG9Db2xvcihiYXIuYmFja2dyb3VuZENvbG9yKS50b0hleFN0cmluZygpXG5cblx0aWYgc2V0dXAuYWN0aW9uQ29sb3IgPT0gXCJibGFja1wiXG5cdFx0c2V0dXAuYWN0aW9uQ29sb3IgPSBtLnV0aWxzLmF1dG9Db2xvcihiYXIuYmFja2dyb3VuZENvbG9yKS50b0hleFN0cmluZygpXG5cblx0aWYgdHlwZW9mIHNldHVwLnRpdGxlID09IFwic3RyaW5nXCJcblx0XHR0aXRsZSA9IG5ldyBtLlRleHRcblx0XHRcdGNvbG9yOnNldHVwLnRpdGxlQ29sb3Jcblx0XHRcdGZvbnRXZWlnaHQ6NTAwXG5cdFx0XHRzdXBlckxheWVyOmJhckFyZWFcblx0XHRcdHRleHQ6c2V0dXAudGl0bGVcblx0XHRcdGZvbnRTaXplOjIwXG5cblx0bS51dGlscy5zcGVjaWFsQ2hhcih0aXRsZSlcblxuXG5cdHRpdGxlTGVhZGluZyA9IDE2XG5cdGlmIHNldHVwLm1lbnVcblx0XHRiYXIubWVudSA9IG5ldyBtLkljb25cblx0XHRcdG5hbWU6c2V0dXAubWVudVxuXHRcdFx0Y29sb3I6c2V0dXAuYWN0aW9uQ29sb3Jcblx0XHRcdHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRcdFx0Y29uc3RyYWludHM6e2xlYWRpbmc6MTYsIHZlcnRpY2FsQ2VudGVyOnRpdGxlfVxuXHRcdFx0Y2xpcDpmYWxzZVxuXHRcdHRpdGxlTGVhZGluZyA9IFtiYXIubWVudSwgMTZdXG5cblx0XHRtLnV0aWxzLmlua3lcblx0XHRcdGxheWVyOmJhci5tZW51XG5cdFx0XHRtb3ZlVG9UYXA6ZmFsc2Vcblx0XHRcdGNvbG9yOlwid2hpdGVcIlxuXHRcdFx0b3BhY2l0eTouNFxuXHRcdFx0c2NhbGU6Ljdcblx0XHRcdHN0YXJ0U2NhbGU6LjdcblxuXG5cdHRpdGxlLmNvbnN0cmFpbnRzID1cblx0XHRib3R0b206MTJcblx0XHRsZWFkaW5nOnRpdGxlTGVhZGluZ1xuXG5cdGlmIHNldHVwLmxlZnRBY3Rpb25cblx0XHR0aXRsZS5jb25zdHJhaW50cy5sZWFkaW5nID0gNzNcblxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDpbdGl0bGVdXG5cblx0YWN0aW9uc0FycmF5ID0gW11cblx0aWYgc2V0dXAuYWN0aW9uc1xuXHRcdGZvciBhY3QsIGkgaW4gc2V0dXAuYWN0aW9uc1xuXHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdGljb24gPSBuZXcgbS5JY29uXG5cdFx0XHRcdFx0bmFtZTphY3Rcblx0XHRcdFx0XHRzdXBlckxheWVyOmJhckFyZWFcblx0XHRcdFx0XHRjb25zdHJhaW50czp7dHJhaWxpbmc6MjQsIHZlcnRpY2FsQ2VudGVyOnRpdGxlfVxuXHRcdFx0XHRcdGNvbG9yOnNldHVwLmFjdGlvbkNvbG9yXG5cdFx0XHRcdFx0Y2xpcDpmYWxzZVxuXHRcdFx0XHRhY3Rpb25zQXJyYXkucHVzaCBpY29uXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGljb24gPSBuZXcgbS5JY29uXG5cdFx0XHRcdFx0bmFtZTphY3Rcblx0XHRcdFx0XHRzdXBlckxheWVyOmJhckFyZWFcblx0XHRcdFx0XHRjb25zdHJhaW50czp7dHJhaWxpbmc6W2FjdGlvbnNBcnJheVtpIC0gMV0sIDI0XSwgdmVydGljYWxDZW50ZXI6dGl0bGV9XG5cdFx0XHRcdFx0Y29sb3I6c2V0dXAuYWN0aW9uQ29sb3Jcblx0XHRcdFx0XHRjbGlwOmZhbHNlXG5cdFx0XHRcdGFjdGlvbnNBcnJheS5wdXNoIGljb25cblxuXHRcdGZvciBhY3QgaW4gYWN0aW9uc0FycmF5XG5cdFx0XHRtLnV0aWxzLmlua3lcblx0XHRcdFx0bGF5ZXI6YWN0XG5cdFx0XHRcdG1vdmVUb1RhcDpmYWxzZVxuXHRcdFx0XHRjb2xvcjpcIndoaXRlXCJcblx0XHRcdFx0b3BhY2l0eTouNFxuXHRcdFx0XHRzY2FsZTouOFxuXHRcdFx0XHRzdGFydFNjYWxlOi43XG5cblxuXHRpZiBzZXR1cC50YWJzICYmIHNldHVwLnRhYnMubGVuZ3RoID4gMlxuXG5cdFx0aGFuZGxlVGFiU3RhdGVzID0gKGJhciwgbGF5ZXIpIC0+XG5cdFx0XHR0YWJzQXJyYXkgPSBPYmplY3Qua2V5cyhiYXIudGFicylcblx0XHRcdGFjdGl2ZVRhYkluZGV4ID0gdW5kZWZpbmVkXG5cdFx0XHRmb3IgdCwgaSBpbiB0YWJzQXJyYXlcblx0XHRcdFx0dGFiID0gYmFyLnRhYnNbdF1cblxuXHRcdFx0XHRpZiB0YWIgPT0gYmFyLmFjdGl2ZVRhYlxuXHRcdFx0XHRcdGFjdGl2ZVRhYkluZGV4ID0gaVxuXHRcdFx0XHRcdGJhci52aWV3c1t0XS5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOih4OjApXG5cdFx0XHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRcdHRhYi5sYWJlbC5vcGFjaXR5ID0gMVxuXHRcdFx0XHRcdHRhYi5sYWJlbC5jb2xvciA9IHNldHVwLnRhYnNDb2xvclxuXHRcdFx0XHRcdGJhci5hY3RpdmVCYXIuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczooeDpsYXllci54KVxuXHRcdFx0XHRcdFx0dGltZTouMjVcblx0XHRcdFx0XHRcdGN1cnZlOlwiYmV6aWVyLWN1cnZlKC4yLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0XHRcdFx0bS51dGlscy51cGRhdGUodGl0bGUsIFt7dGV4dDptLnV0aWxzLmNhcGl0YWxpemUoYmFyLmFjdGl2ZVRhYi5sYWJlbC5uYW1lKX1dKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aWYgYWN0aXZlVGFiSW5kZXggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRiYXIudmlld3NbdF0uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOih4Om0uZGV2aWNlLndpZHRoICogLTEpXG5cdFx0XHRcdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRcdFx0XHRcdGN1cnZlOlwiY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpXCJcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRiYXIudmlld3NbdF0uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOih4Om0uZGV2aWNlLndpZHRoKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRcdFx0XHRjdXJ2ZTpcImN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKVwiXG5cblx0XHRcdFx0XHRvcGFjaXR5ID0gMVxuXHRcdFx0XHRcdGNvbG9yID0gdGFiLmxhYmVsLmNvbG9yXG5cdFx0XHRcdFx0aWYgc2V0dXAudGFic0FsdC5vcGFjaXR5ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0b3BhY2l0eSA9IHNldHVwLnRhYnNBbHQub3BhY2l0eVxuXG5cdFx0XHRcdFx0aWYgc2V0dXAudGFic0FsdC5jb2xvciAhPSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdGNvbG9yID0gc2V0dXAudGFic0FsdC5jb2xvclxuXG5cdFx0XHRcdFx0dGFiLmxhYmVsLm9wYWNpdHkgPSBvcGFjaXR5XG5cdFx0XHRcdFx0dGFiLmxhYmVsLmNvbG9yID0gY29sb3JcblxuXHRcdHRhYnNBY3RpdmVCYXIgPSBuZXcgTGF5ZXJcblx0XHRcdGhlaWdodDptLnB4KDIpXG5cdFx0XHR3aWR0aDptLmRldmljZS53aWR0aC9zZXR1cC50YWJzLmxlbmd0aFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOm0uY29sb3Ioc2V0dXAudGFic0JhckNvbG9yKVxuXHRcdFx0c3VwZXJMYXllcjpiYXJcblx0XHR0YWJzQWN0aXZlQmFyLmNvbnN0cmFpbnRzID1cblx0XHRcdGJvdHRvbTowXG5cdFx0YmFyLmFjdGl2ZUJhciA9IHRhYnNBY3RpdmVCYXJcblxuXHRcdGJhci50YWJzID0ge31cblx0XHRiYXIudmlld3MgPSB7fVxuXHRcdGlmIHNldHVwLnRhYnMubGVuZ3RoIDwgNVxuXHRcdFx0Zm9yIHQsIGkgaW4gc2V0dXAudGFic1xuXHRcdFx0XHR2aWV3ID0gbmV3IExheWVyXG5cdFx0XHRcdFx0bmFtZTpcIlZpZXcgXCIgKyB0XG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHR2aWV3LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHR0b3A6YmFyXG5cdFx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0XHR3aWR0aDptLmRwKG0uZGV2aWNlLndpZHRoKVxuXHRcdFx0XHRiYXIudmlld3NbdF0gPSB2aWV3XG5cdFx0XHRcdGlmIGkgPiAwXG5cdFx0XHRcdFx0dmlldy54ID0gbS5kZXZpY2Uud2lkdGhcblx0XHRcdFx0dGFiID0gbmV3IExheWVyXG5cdFx0XHRcdFx0d2lkdGg6bS5kZXZpY2Uud2lkdGgvc2V0dXAudGFicy5sZW5ndGhcblx0XHRcdFx0XHRoZWlnaHQ6bS5weCg0OClcblx0XHRcdFx0XHR4OihtLmRldmljZS53aWR0aC9zZXR1cC50YWJzLmxlbmd0aCkgKiBpXG5cdFx0XHRcdFx0c3VwZXJMYXllcjpiYXJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRcdFx0Y2xpcDp0cnVlXG5cdFx0XHRcdFx0bmFtZTpcInRhYiBcIlxuXHRcdFx0XHR0YWIuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdG0ubGF5b3V0LnNldCh0YWIpXG5cdFx0XHRcdGlmIHNldHVwLnRhYnNDb2xvciA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRzZXR1cC50YWJzQ29sb3IgPSBtLnV0aWxzLmF1dG9Db2xvcihiYXIuYmFja2dyb3VuZENvbG9yKS50b0hleFN0cmluZygpXG5cdFx0XHRcdGxhYmVsID0gXCJcIlxuXHRcdFx0XHRpZiBzZXR1cC50YWJJY29uc1xuXHRcdFx0XHRcdGljb24gPSBzZXR1cC50YWJJY29uc1tpXVxuXHRcdFx0XHRcdGxhYmVsID0gbmV3IG0uSWNvblxuXHRcdFx0XHRcdFx0bmFtZTppY29uXG5cdFx0XHRcdFx0XHRzdXBlckxheWVyOnRhYlxuXHRcdFx0XHRcdFx0Y29sb3I6c2V0dXAudGFic0NvbG9yXG5cdFx0XHRcdFx0XHRjb25zdHJhaW50czp7YWxpZ246XCJjZW50ZXJcIn1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGxhYmVsID0gbmV3IG0uVGV4dFxuXHRcdFx0XHRcdFx0c3VwZXJMYXllcjp0YWJcblx0XHRcdFx0XHRcdGNvbnN0cmFpbnRzOnthbGlnbjpcImNlbnRlclwifVxuXHRcdFx0XHRcdFx0dGV4dDp0XG5cdFx0XHRcdFx0XHR0ZXh0VHJhbnNmb3JtOidVcHBlcmNhc2UnXG5cdFx0XHRcdFx0XHRmb250U2l6ZToxNFxuXHRcdFx0XHRcdFx0Y29sb3I6c2V0dXAudGFic0NvbG9yXG5cdFx0XHRcdGxhYmVsLm5hbWUgPSB0XG5cblx0XHRcdFx0dGFiLmxhYmVsID0gbGFiZWxcblxuXHRcdFx0XHRzZXR1cC50YWJzSW5rW1wibGF5ZXJcIl0gPSB0YWJcblx0XHRcdFx0bS51dGlscy5pbmt5KHNldHVwLnRhYnNJbmspXG5cdFx0XHRcdGJhci50YWJzW3RdID0gdGFiXG5cblx0XHRcdFx0dGFiLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0XHRiYXIuYWN0aXZlVGFiID0gQFxuXHRcdFx0XHRcdGhhbmRsZVRhYlN0YXRlcyhiYXIsIEApXG5cdGlmIHNldHVwLnRhYnNcblx0XHRpZiBzZXR1cC50YWJzLmxlbmd0aCA+IDJcblx0XHRcdGJhci5hY3RpdmVUYWIgPSBiYXIudGFic1tzZXR1cC50YWJzWzBdXVxuXHRcdFx0aGFuZGxlVGFiU3RhdGVzKGJhciwgYmFyLmFjdGl2ZVRhYilcblx0YmFyLnRpdGxlID0gdGl0bGVcblxuXG5cblx0cmV0dXJuIGJhclxuIiwiIyBCYW5uZXJcbm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGFwcDogXCJBcHBcIlxuXHR0aXRsZTpcIlRpdGxlXCJcblx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRhY3Rpb246XCJBY3Rpb25cIlxuXHR0aW1lOlwi4oCiIG5vd1wiXG5cdGljb246dW5kZWZpbmVkXG5cdGR1cmF0aW9uOjdcblx0YW5pbWF0ZWQ6dHJ1ZVxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblx0YmFubmVyID0gbmV3IExheWVyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdG5hbWU6XCJiYW5uZXJcIlxuXHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwwLDAsLjI0KVwiXG5cdFx0c2hhZG93Qmx1cjogbS5weCgyKVxuXHRcdHNoYWRvd1k6IG0ucHgoMilcblx0YmFubmVyLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRoZWlnaHQ6NzRcblxuXHQjIERpZmZlcmVudCBwb3NpdGlvbmluZ3MgZm9yIGVhY2ggZGV2aWNlXG5cdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwYWRcIlxuXHRcdFx0QGxlYWRpbmdJY29uID0gMjAwXG5cdFx0XHRAdG9wSWNvbiA9IDE1XG5cdFx0XHRAdG9wVGl0bGUgPSAxMVxuXHRcdHdoZW4gXCJpcGFkLXByb1wiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxOTJcblx0XHRcdEB0b3BJY29uID0gMTJcblx0XHRcdEB0b3BUaXRsZSA9IDlcblx0XHR3aGVuIFwiaXBob25lLTZzLXBsdXNcIlxuXHRcdFx0QGxlYWRpbmdJY29uID0gMTVcblx0XHRcdEB0b3BJY29uID0gMTJcblx0XHRcdEB0b3BUaXRsZSA9IDEwXG5cdFx0ZWxzZVxuXHRcdFx0QGxlYWRpbmdJY29uID0gMTVcblx0XHRcdEB0b3BJY29uID0gOFxuXHRcdFx0QHRvcFRpdGxlID0gNlxuXG5cdGlmIHNldHVwLmljb24gPT0gdW5kZWZpbmVkXG5cdFx0c2V0dXAuaWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmJhbm5lclxuXHRcdHNldHVwLmljb24uc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzY3RkY4MSAwJSwgIzAxQjQxRiAxMDAlKVwiXG5cdGVsc2Vcblx0XHRiYW5uZXIuYWRkU3ViTGF5ZXIoc2V0dXAuaWNvbilcblxuXHRzZXR1cC5pY29uLmJvcmRlclJhZGl1cyA9IG0udXRpbHMucHgoNC41KVxuXHRzZXR1cC5pY29uLm5hbWUgPSBcImljb25cIlxuXHRzZXR1cC5pY29uLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6MTZcblx0XHR3aWR0aDoxNlxuXHRcdGxlYWRpbmc6QGxlYWRpbmdJY29uXG5cdFx0dG9wOkB0b3BJY29uXG5cblx0YXBwID0gbmV3IG0uVGV4dCBzdHlsZTpcImFwcFwiLCB0ZXh0OnNldHVwLmFwcCwgY29sb3I6XCJibHVlXCIsIGZvbnRXZWlnaHQ6XCJtZWRpdW1cIiwgZm9udFNpemU6MTEsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwidGl0bGVcIlxuXHRhcHAuY29uc3RyYWludHMgPVxuXHRcdHZlcnRpY2FsQ2VudGVyOnNldHVwLmljb25cblx0XHRsZWFkaW5nOltzZXR1cC5pY29uLCA1XVxuXHR0aXRsZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJ0aXRsZVwiLCB0ZXh0OnNldHVwLnRpdGxlLCBjb2xvcjpcImJsYWNrXCIsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcInRpdGxlXCJcblx0dGl0bGUuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmdFZGdlczpzZXR1cC5pY29uXG5cdFx0dG9wOltzZXR1cC5pY29uLCA3XVxuXG5cdG1lc3NhZ2UgPSBuZXcgbS5UZXh0IHN0eWxlOlwidGl0bGVcIiwgdGV4dDpzZXR1cC5tZXNzYWdlLCBjb2xvcjpcImdyZXlcIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwidGl0bGVcIlxuXHRtZXNzYWdlLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nRWRnZXM6c2V0dXAuaWNvblxuXHRcdHRvcDpbdGl0bGUsIDVdXG5cblx0dGltZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJ0aW1lXCIsIHRleHQ6c2V0dXAudGltZSwgY29sb3I6XCJncmV5XCIsIGZvbnRTaXplOjExLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcInRpbWVcIlxuXHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOlthcHAsIDNdXG5cdFx0Ym90dG9tRWRnZXM6IGFwcFxuXG5cdG0ubGF5b3V0LnNldCgpXG5cdG0udXRpbHMuYmdCbHVyKGJhbm5lcilcblxuXHQjIyBCYW5uZXIgRHJhZyBzZXR0aW5nc1xuXHRiYW5uZXIuZHJhZ2dhYmxlID0gdHJ1ZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmhvcml6b250YWwgPSBmYWxzZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmNvbnN0cmFpbnRzID1cblx0XHR5OjBcblxuXHRiYW5uZXIuZHJhZ2dhYmxlLmJvdW5jZU9wdGlvbnMgPVxuXHQgICAgZnJpY3Rpb246IDI1XG5cdCAgICB0ZW5zaW9uOiAyNTBcblxuXHRiYW5uZXIub24gRXZlbnRzLkRyYWdFbmQsIC0+XG5cdFx0aWYgYmFubmVyLm1heFkgPCBtLnV0aWxzLnB4KDY4KVxuXHRcdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoobWF4WTowKVxuXHRcdFx0XHR0aW1lOi4xNVxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFV0aWxzLmRlbGF5IC4yNSwgLT5cblx0XHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cdCMgQnVmZmVyIHRoYXQgc2l0cyBhYm92ZSB0aGUgYmFubmVyXG5cdGJhbm5lckJ1ZmZlciA9IG5ldyBMYXllciBtYXhZOjAsIG5hbWU6XCJidWZmZXJcIiwgYmFja2dyb3VuZENvbG9yOlwiIzFCMUIxQ1wiLCBvcGFjaXR5Oi45LCBzdXBlckxheWVyOmJhbm5lciwgd2lkdGg6bS5kZXZpY2Uud2lkdGgsIG1heFk6YmFubmVyLnksIGhlaWdodDptLmRldmljZS5oZWlnaHRcblx0bS51dGlscy5iZ0JsdXIoYmFubmVyQnVmZmVyKVxuXG5cdCMgQW5pbWF0ZS1pblxuXHRpZiBzZXR1cC5hbmltYXRlZCA9PSB0cnVlXG5cdFx0YmFubmVyLnkgPSAwIC0gYmFubmVyLmhlaWdodFxuXHRcdGJhbm5lci5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOih5OjApXG5cdFx0XHR0aW1lOi4yNVxuXHRcdFx0Y3VydmU6XCJzcHJpbmcoNDAwLDIwLDApXCJcblxuXHQjIEFuaW1hdGUtb3V0XG5cdGlmIHNldHVwLmR1cmF0aW9uXG5cdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24sIC0+XG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uICsgLjI1LCAtPlxuXHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cdCMgRXhwb3J0IEJhbm5lclxuXHRiYW5uZXIuaWNvbiA9IHNldHVwLmljb25cblx0YmFubmVyLmFwcCA9IGFwcFxuXHRiYW5uZXIudGl0bGUgPSB0aXRsZVxuXHRiYW5uZXIubWVzc2FnZSA9IG1lc3NhZ2Vcblx0cmV0dXJuIGJhbm5lclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0XHR0ZXh0OlwidGV4dFwiXG5cdFx0dHlwZTpcImZsYXRcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRjb2xvcjpcInRlYWwzMDBcIlxuXHRcdG5hbWU6XCJidXR0b25cIlxuXHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdFx0Y29uc3RyYWludHM6dW5kZWZpbmVkXG5cdFx0aWNvbjpcInN0YXJcIlxuXHRcdGNsaXA6dHJ1ZVxuXHRcdGluazp1bmRlZmluZWRcblx0fVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRidXR0b24gPSBuZXcgTGF5ZXJcblx0XHRuYW1lOnNldHVwLm5hbWVcblx0XHRjbGlwOnNldHVwLmNsaXBcblxuXHRpZiBzZXR1cC5zdXBlckxheWVyXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihidXR0b24pXG5cblx0YnV0dG9uLnR5cGUgPSBzZXR1cC50eXBlXG5cdHN3aXRjaCBzZXR1cC50eXBlXG5cdFx0d2hlbiBcImZsb2F0aW5nXCJcblx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdCB3aWR0aDo1NlxuXHRcdFx0XHQgaGVpZ2h0OjU2XG5cdFx0XHRcdCBib3R0b206NjRcblx0XHRcdFx0IHRyYWlsaW5nOjE3XG5cdFx0XHRpZiBtLmRldmljZS5zY2FsZSA8IDRcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzLndpZHRoID0gNjRcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzLmhlaWdodCA9IDY0XG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gbS5weCgzMilcblx0XHRcdGJ1dHRvbi5zaGFkb3dDb2xvciA9IFwicmdiYSgwLDAsMCwuMTIpXCJcblx0XHRcdGJ1dHRvbi5zaGFkb3dZID0gbS5weCgyKVxuXHRcdFx0YnV0dG9uLnNoYWRvd0JsdXIgPSBtLnB4KDYpXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gbS5jb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRpZiB0eXBlb2Ygc2V0dXAuaWNvbiA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdGljb24gPSBtLkljb25cblx0XHRcdFx0XHRuYW1lOnNldHVwLmljb25cblx0XHRcdFx0XHRjb2xvcjpzZXR1cC5jb2xvclxuXHRcdFx0XHRcdHN1cGVyTGF5ZXI6YnV0dG9uXG5cdFx0XHRcdFx0Y29uc3RyYWludHM6e2FsaWduOlwiY2VudGVyXCJ9XG5cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6W2J1dHRvbl1cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6W2ljb25dXG5cblx0XHRlbHNlXG5cdFx0XHRsYWJlbCA9IG5ldyBtLlRleHRcblx0XHRcdFx0dGV4dDpzZXR1cC50ZXh0XG5cdFx0XHRcdHN1cGVyTGF5ZXI6YnV0dG9uXG5cdFx0XHRcdHRleHRUcmFuc2Zvcm06XCJ1cHBlcmNhc2VcIlxuXHRcdFx0XHRjb2xvcjpzZXR1cC5jb2xvclxuXHRcdFx0XHRmb250U2l6ZToxNFxuXHRcdFx0XHRsaW5lSGVpZ2h0OjE0XG5cdFx0XHRcdGZvbnRXZWlnaHQ6NTAwXG5cdFx0XHRsYWJlbC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGFsaWduOlwiY2VudGVyXCJcblx0XHRcdGJ1dHRvbi5wcm9wcyA9XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjptLmNvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0aGVpZ2h0Om0ucHgoMzYpXG5cdFx0XHRcdHdpZHRoOmxhYmVsLndpZHRoICsgbS5weCgxNilcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOm0ucHgoMilcblx0XHRcdFx0Y2xpcDpzZXR1cC5jbGlwXG5cblx0XHRcdGlmIGJ1dHRvbi53aWR0aCA8IG0ucHgoNjQpXG5cdFx0XHRcdGJ1dHRvbi53aWR0aCA9IG0ucHgoNjQpXG5cblx0XHRcdHN3aXRjaCBzZXR1cC50eXBlXG5cdFx0XHRcdHdoZW4gXCJyYWlzZWRcIlxuXHRcdFx0XHRcdGJ1dHRvbi5vcmlnQkdDID0gYnV0dG9uLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdGJ1dHRvbi5zaGFkb3dDb2xvciA9IFwicmdiYSgwLDAsMCwuMjQpXCJcblx0XHRcdFx0XHRidXR0b24uc2hhZG93WSA9IG0ucHgoMilcblx0XHRcdFx0XHRidXR0b24uc2hhZG93Qmx1ciA9IG0ucHgoMilcblx0XHRcdFx0XHRwcmVzc2VkQkdDID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5saWdodGVuKDEwKVxuXHRcdFx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOnByZXNzZWRCR0Ncblx0XHRcdFx0XHRcdFx0XHRzaGFkb3dZOm0ucHgoOClcblx0XHRcdFx0XHRcdFx0XHRzaGFkb3dCbHVyOm0ucHgoOClcblx0XHRcdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbi5vcmlnQkdDXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93WTptLnB4KDIpXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93Qmx1cjptLnB4KDIpXG5cdFx0XHRcdHdoZW4gXCJmbGF0XCJcblx0XHRcdFx0XHRidXR0b24ub3JpZ0JHQyA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRwcmVzc2VkQkdDID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5kYXJrZW4oNSlcblx0XHRcdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpwcmVzc2VkQkdDXG5cdFx0XHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBidXR0b24ub3JpZ0JHQ1xuXG5cblx0XHRcdGlmIHNldHVwLmNvbnN0cmFpbnRzXG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9IHNldHVwLmNvbnN0cmFpbnRzXG5cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6W2J1dHRvbiwgbGFiZWxdXG5cblx0aWYgc2V0dXAuaW5rXG5cdFx0cGFzc2VkSW5rID0gc2V0dXAuaW5rXG5cdFx0cGFzc2VkSW5rLmxheWVyID0gYnV0dG9uXG5cblx0XHRtLnV0aWxzLmlua3kocGFzc2VkSW5rKVxuXG5cdHJldHVybiBidXR0b25cbiIsIiMgQWxlcnRcbm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRpdGxlOiBcIlRpdGxlXCJcblx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRhY3Rpb25zOltcIkFncmVlXCIsIFwiRGVjbGluZVwiXVxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRkaWFsb2cgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImRpYWxvZ1wiXG5cdGRpYWxvZy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblxuXHRvdmVybGF5ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiM1RTVFNUVcIiwgc3VwZXJMYXllcjpkaWFsb2csIG5hbWU6XCJvdmVybGF5XCIsIG9wYWNpdHk6LjZcblx0b3ZlcmxheS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblxuXHRtb2RhbCA9IG5ldyBMYXllclxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRzdXBlckxheWVyOmRpYWxvZ1xuXHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDIpXG5cdFx0bmFtZTpcIm1vZGFsXCJcblx0XHRzaGFkb3dDb2xvcjpcInJnYmEoMCwwLDAsLjIpXCJcblx0XHRzaGFkb3dZOjI0XG5cdFx0c2hhZG93Qmx1cjoyNFxuXHRtb2RhbC5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdHdpZHRoOjI4MFxuXHRcdGhlaWdodDo0MDBcblxuXHR0aXRsZSA9IG5ldyBtLlRleHRcblx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0dGV4dDpzZXR1cC50aXRsZVxuXHRcdGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiXG5cdFx0Zm9udFNpemU6MjBcblx0XHRuYW1lOlwidGl0bGVcIlxuXHRcdGxpbmVIZWlnaHQ6MjBcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDoyMFxuXHRcdFx0d2lkdGg6MjIwXG5cdFx0XHRsZWFkaW5nOjI0XG5cblx0bWVzc2FnZSA9IG5ldyBtLlRleHRcblx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0dGV4dDpzZXR1cC5tZXNzYWdlXG5cdFx0Zm9udFNpemU6MTNcblx0XHRuYW1lOlwibWVzc2FnZVwiXG5cdFx0bGluZUhlaWdodDoxNlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOiBbdGl0bGUsIDEwXVxuXHRcdFx0bGVhZGluZzoyNFxuXHRcdFx0d2lkdGg6IDIyMFxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDpbZGlhbG9nLCBvdmVybGF5LCBtb2RhbCwgdGl0bGUsIG1lc3NhZ2VdXG5cblx0I1RpdGxlICsgTWVzc2FnZSArIDEgc2V0IG9mIGFjdGlvbnNcblx0bW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSAyMCArIG0udXRpbHMucHQodGl0bGUuaGVpZ2h0KSArIDEwICsgbS51dGlscy5wdChtZXNzYWdlLmhlaWdodCkgKyAyNCArIDQ0XG5cblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OltvdmVybGF5LCBtb2RhbF1cblx0ZGlhbG9nLmFjdGlvbnMgPSB7fVxuXHRhY3Rpb25zID0gW11cblx0Y2hhckNvdW50ID0gMFxuXHRpZiBzZXR1cC5hY3Rpb25zLmxlbmd0aCA+IDFcblx0XHRjaGFyQ291bnQgPSBzZXR1cC5hY3Rpb25zWzBdLmxlbmd0aCArIHNldHVwLmFjdGlvbnNbMV0ubGVuZ3RoXG5cdGlmIHNldHVwLmFjdGlvbnMubGVuZ3RoIDwgMyAmJiBjaGFyQ291bnQgPCAyNFxuXHRcdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblx0XHRcdGJ1dHRvbiA9IG5ldyBtLkJ1dHRvblxuXHRcdFx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0XHRcdHRleHQ6c2V0dXAuYWN0aW9uc1tpbmRleF1cblx0XHRcdFx0Y29sb3I6XCJibHVlXCJcblx0XHRcdGlmIGluZGV4ID09IDBcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzID0ge2JvdHRvbTo4LCB0cmFpbGluZzo4fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRidXR0b24uY29uc3RyYWludHMgPSB7Ym90dG9tOjgsIHRyYWlsaW5nOlthY3Rpb25zW2luZGV4IC0gMV0sIDhdfVxuXHRcdFx0ZGlhbG9nLmFjdGlvbnNbc2V0dXAuYWN0aW9uc1tpbmRleF1dID0gYnV0dG9uXG5cdFx0XHRhY3Rpb25zLnB1c2ggYnV0dG9uXG5cdFx0XHRtLmxheW91dC5zZXRcblx0XHRcdFx0dGFyZ2V0OmJ1dHRvblxuXHRlbHNlXG5cdFx0bW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSAyMCArIG0udXRpbHMucHQodGl0bGUuaGVpZ2h0KSArIDEwICsgbS51dGlscy5wdChtZXNzYWdlLmhlaWdodCkgKyAzMiArIChzZXR1cC5hY3Rpb25zLmxlbmd0aCAqIDM2KVxuXHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0dGFyZ2V0Om1vZGFsXG5cdFx0Zm9yIGFjdCwgaW5kZXggaW4gc2V0dXAuYWN0aW9uc1xuXHRcdFx0YnV0dG9uID0gbmV3IG0uQnV0dG9uXG5cdFx0XHRcdHN1cGVyTGF5ZXI6bW9kYWxcblx0XHRcdFx0dGV4dDpzZXR1cC5hY3Rpb25zW2luZGV4XVxuXHRcdFx0XHRjb2xvcjpcImJsdWVcIlxuXHRcdFx0aWYgaW5kZXggPT0gMFxuXHRcdFx0XHRidXR0b24uY29uc3RyYWludHMgPSB7dG9wOlttZXNzYWdlLCAyNF0sIHRyYWlsaW5nOjh9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9IHt0cmFpbGluZzo4LCB0b3A6YWN0aW9uc1tpbmRleCAtIDFdfVxuXHRcdFx0ZGlhbG9nLmFjdGlvbnNbc2V0dXAuYWN0aW9uc1tpbmRleF1dID0gYnV0dG9uXG5cdFx0XHRhY3Rpb25zLnB1c2ggYnV0dG9uXG5cdFx0XHRtLmxheW91dC5zZXRcblx0XHRcdFx0dGFyZ2V0OmJ1dHRvblxuXG5cblx0IyBFeHBvcnQgZGlhbG9nXG5cdGRpYWxvZy5vdmVybGF5ID0gb3ZlcmxheVxuXHRkaWFsb2cubW9kYWwgPSBtb2RhbFxuXHRkaWFsb2cudGl0bGUgPSB0aXRsZVxuXHRkaWFsb2cubWVzc2FnZSA9IG1lc3NhZ2VcblxuXHRyZXR1cm4gZGlhbG9nXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuICBuYW1lOiBcInN0YXJcIlxuICBzY2FsZTogbS5kZXZpY2Uuc2NhbGVcbiAgY29sb3I6IG0uY29sb3IoXCJibGFja1wiKVxuICBzdXBlckxheWVyOiB1bmRlZmluZWRcbiAgY29uc3RyYWludHM6IHVuZGVmaW5lZFxuICBjbGlwOnRydWVcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuICBzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG4gIGlmIHR5cGVvZiBzZXR1cC5uYW1lID09IFwic3RyaW5nXCJcbiAgICBpY29uTGF5ZXIgPSBuZXcgTGF5ZXJcbiAgICAgIGh0bWw6XCI8aSBjbGFzcz0nbWF0ZXJpYWwtaWNvbnMgbWQtMjQnPiN7c2V0dXAubmFtZX08L2k+XCJcbiAgICAgIGNvbG9yOm0uY29sb3Ioc2V0dXAuY29sb3IpXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gICAgICBjbGlwOnNldHVwLmNsaXBcbiAgICAgIG5hbWU6c2V0dXAubmFtZVxuICAgICAgc3VwZXJMYXllcjpzZXR1cC5zdXBlckxheWVyXG5cbiAgICBwYWRkaW5nUmlnaHQgPSAwXG4gICAgcGFkZGluZ1RvcCA9IDBcblxuICAgIHN3aXRjaCBtLmRldmljZS5zY2FsZVxuICAgICAgd2hlbiA0XG4gICAgICAgIHBhZGRpbmdUb3AgPSBtLnB4KDEyKSArIFwicHhcIlxuICAgICAgICBwYWRkaW5nUmlnaHQgPSBtLnB4KDIpICsgXCJweFwiXG4gICAgICB3aGVuIDNcbiAgICAgICAgcGFkZGluZ1RvcCA9IG0ucHgoMTApICsgXCJweFwiXG4gICAgICAgIHBhZGRpbmdSaWdodCA9IG0ucHgoNikgKyBcInB4XCJcbiAgICAgIHdoZW4gMlxuICAgICAgICBwYWRkaW5nVG9wID0gbS5weCg4KSArIFwicHhcIlxuICAgICAgICBwYWRkaW5nUmlnaHQgPSBtLnB4KDgpICsgXCJweFwiXG4gICAgICB3aGVuIDFcbiAgICAgICAgcGFkZGluZ1RvcCA9IG0ucHgoMTYpICsgXCJweFwiXG4gICAgICAgIHBhZGRpbmdSaWdodCA9IG0ucHgoNykgKyBcInB4XCJcblxuXG4gICAgZnJhbWUgPSBtLnV0aWxzLnRleHRBdXRvU2l6ZShpY29uTGF5ZXIpXG4gICAgaWNvbkxheWVyLmh0bWwgPSBcIjxzcGFuIHN0eWxlPSctd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoI3tzZXR1cC5zY2FsZX0pOyBwb3NpdGlvbjogYWJzb2x1dGU7Jz5cIiArIGljb25MYXllci5odG1sXG4gICAgaWNvbkxheWVyLndpZHRoID0gbS5weCgyNClcbiAgICBpY29uTGF5ZXIuaGVpZ2h0ID0gbS5weChmcmFtZS5oZWlnaHQpXG5cbiAgICBpY29uTGF5ZXIuc3R5bGUgPVxuICAgICAgXCJkaXNwbGF5XCIgOiBcImlubGluZS1ibG9ja1wiXG4gICAgICBcInBhZGRpbmctdG9wXCIgOiBwYWRkaW5nVG9wXG4gICAgICBcInBhZGRpbmctcmlnaHRcIiA6IHBhZGRpbmdSaWdodFxuICAgICAgXCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiXG4gICAgaWYgc2V0dXAuY29uc3RyYWludHNcbiAgICAgIGljb25MYXllci5jb25zdHJhaW50cyA9IHNldHVwLmNvbnN0cmFpbnRzXG4gICAgICBtLmxheW91dC5zZXRcbiAgICAgICAgdGFyZ2V0Omljb25MYXllclxuXG4gICAgcmV0dXJuIGljb25MYXllclxuICBlbHNlXG4gICAgaWNvbkxheWVyID0gc2V0dXAubGF5ZXJcbiAgICByZXR1cm4gaWNvbkxheWVyXG4iLCIjIFV0aWxzXG5cbm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGFuaW1hdGlvbnM6IHtcblx0XHR0YXJnZXQ6dW5kZWZpbmVkXG5cdFx0Y29uc3RyYWludHM6IHVuZGVmaW5lZFxuXHRcdGN1cnZlIDogXCJlYXNlLWluLW91dFwiXG5cdFx0Y3VydmVPcHRpb25zOiB1bmRlZmluZWRcblx0XHR0aW1lOjFcblx0XHRkZWxheTowXG5cdFx0cmVwZWF0OnVuZGVmaW5lZFxuXHRcdGNvbG9yTW9kZWw6dW5kZWZpbmVkXG5cdFx0c3RhZ2dlcjp1bmRlZmluZWRcblx0XHRmYWRlT3V0OmZhbHNlXG5cdFx0ZmFkZUluOmZhbHNlXG5cdH1cbn1cblxubGF5b3V0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHRhcmdldExheWVycyA9IFtdXG5cdGJsdWVwcmludCA9IFtdXG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGlmIHNldHVwLnRhcmdldFxuXHRcdGlmIHNldHVwLnRhcmdldC5sZW5ndGhcblx0XHRcdHRhcmdldExheWVycyA9IHNldHVwLnRhcmdldFxuXHRcdGVsc2Vcblx0XHRcdHRhcmdldExheWVycy5wdXNoIHNldHVwLnRhcmdldFxuXHRlbHNlXG5cdFx0dGFyZ2V0TGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXG5cdGlmIHNldHVwLnRhcmdldFxuXHRcdGlmIHNldHVwLmNvbnN0cmFpbnRzXG5cdFx0XHRmb3IgbmV3Q29uc3RyYWludCBpbiBPYmplY3Qua2V5cyhzZXR1cC5jb25zdHJhaW50cylcblx0XHRcdFx0c2V0dXAudGFyZ2V0LmNvbnN0cmFpbnRzW25ld0NvbnN0cmFpbnRdID0gc2V0dXAuY29uc3RyYWludHNbbmV3Q29uc3RyYWludF1cblxuXG5cdCNUcmFuc2xhdGUgbmV3IGNvbnN0cmFpbnRzXG5cdGZvciBsYXllciwgaW5kZXggaW4gdGFyZ2V0TGF5ZXJzXG5cdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0ge31cblx0XHRpZiBsYXllci5jb25zdHJhaW50c1xuXG5cdFx0XHRwcm9wcyA9IHt9XG5cdFx0XHRsYXllci5zdXBlckZyYW1lID0ge31cblxuXHRcdFx0aWYgbGF5ZXIuc3VwZXJMYXllclxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLmhlaWdodCA9IGxheWVyLnN1cGVyTGF5ZXIuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBsYXllci5zdXBlckxheWVyLndpZHRoXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0ID0gbS5kZXZpY2UuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBtLmRldmljZS53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nICE9IHVuZGVmaW5lZCAmJiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoID0ge31cblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wICE9IHVuZGVmaW5lZCAmJiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQgPSB7fVxuXG5cdFx0XHQjIFNpemUgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLndpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy53aWR0aCA9IG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbGF5ZXIud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0XG5cblxuXHRcdFx0IyBBbGlnbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5sZWFkaW5nRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nRWRnZXMueFxuXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcyAhPSB1bmRlZmluZWRcblxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi54ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnggPSBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzLnhcblxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoICsgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wRWRnZXMgIT0gdW5kZWZpbmVkXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnkgPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMudG9wRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnkgPSBsYXllci5jb25zdHJhaW50cy50b3BFZGdlcy55XG5cblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcEVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi55XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzICE9IHVuZGVmaW5lZFxuXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi55ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMueVxuXG5cdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueSAtIHByb3BzLmhlaWdodCArIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHRcblxuXG5cdFx0XHQjIFBvc2l0aW9uaW5nIGNvbnN0cmFpbnRzXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlcmBcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZyA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLCAxMClcblx0XHRcdFx0XHRwcm9wcy54ID0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcubGVuZ3RoID09IHVuZGVmaW5lZFxuXG5cdFx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmNhbGN1bGF0ZWRQb3NpdGlvbi54ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmNhbGN1bGF0ZWRQb3NpdGlvbi54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy54XG5cblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXG5cdFx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1swXS54XG5cblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1swXS5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGggKyBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMV0pXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYID0gcHJvcHMueFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0I0lmIGl0J3MgYSBudW1iZXJcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50cmFpbGluZykgLSBwcm9wcy53aWR0aFxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcubGVuZ3RoID09IHVuZGVmaW5lZFxuXG5cdFx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5jYWxjdWxhdGVkUG9zaXRpb24ueCA9PSB1bmRlZmluZWRcblxuXHRcdFx0XHRcdFx0XHRsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5jYWxjdWxhdGVkUG9zaXRpb24ueCA9IGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLnhcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cblx0XHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRsYXllci5jb25zdHJhaW50cy50cmFpbGluZ1swXS5jYWxjdWxhdGVkUG9zaXRpb24ueCA9IGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLnhcblxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54IC0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50cmFpbGluZ1sxXSkgLSBwcm9wcy53aWR0aFxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLmNhbGN1bGF0ZWRQb3NpdGlvblggPSBwcm9wcy54XG5cblx0XHRcdFx0IyNwZXJmb3JtIGF1dG9zaXplXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLmNhbGN1bGF0ZWRQb3NpdGlvblggLSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYICsgcHJvcHMud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMudG9wLCAxMClcblx0XHRcdFx0XHRwcm9wcy55ID0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50b3ApXG5cblx0XHRcdFx0ZWxzZVxuXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcC5sZW5ndGggPT0gdW5kZWZpbmVkXG5cblx0XHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcC5jYWxjdWxhdGVkUG9zaXRpb24ueSA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMudG9wLmNhbGN1bGF0ZWRQb3NpdGlvbi55ID0gbGF5ZXIuY29uc3RyYWludHMudG9wLnlcblxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcC5jYWxjdWxhdGVkUG9zaXRpb24ueSArIGxheWVyLmNvbnN0cmFpbnRzLnRvcC5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0XG5cblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2VcblxuXHRcdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi55ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRsYXllci5jb25zdHJhaW50cy50b3BbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnkgPSBsYXllci5jb25zdHJhaW50cy50b3BbMF0ueVxuXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHQgKyBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRvcFsxXSlcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSA9IHByb3BzLnlcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5ib3R0b20sIDEwKVxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAtIG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tKSAtIHByb3BzLmhlaWdodFxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmxlbmd0aCA9PSB1bmRlZmluZWRcblxuXHRcdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmNhbGN1bGF0ZWRQb3NpdGlvbi55ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5ib3R0b20uY2FsY3VsYXRlZFBvc2l0aW9uLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b20ueVxuXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmNhbGN1bGF0ZWRQb3NpdGlvbi55IC0gcHJvcHMuaGVpZ2h0XG5cblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2VcblxuXHRcdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi55ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5ib3R0b21bMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b21bMF0ueVxuXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi55IC0gIG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzFdKSAtIHByb3BzLmhlaWdodFxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuY2FsY3VsYXRlZFBvc2l0aW9uWSA9IHByb3BzLnlcblx0XHRcdFx0IyMgcGVyZm9ybSBhdXRvc2l6ZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LmNhbGN1bGF0ZWRQb3NpdGlvblkgLSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSArIHByb3BzLmhlaWdodFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFlcblxuXG5cdFx0XHQjIEFsaWdubWVudCBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNTZXQgdGhlIGNlbnRlcmluZyBmcmFtZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMlxuXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwidmVydGljYWxcIlxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAvIDIgLSBwcm9wcy5oZWlnaHQgLyAyXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJjZW50ZXJcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMlxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAvIDIgLSBwcm9wcy5oZWlnaHQgLyAyXG5cblxuXHRcdFx0IyBDZW50ZXJpbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5ob3Jpem9udGFsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgKGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoIC0gcHJvcHMud2lkdGgpIC8gMlxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy52ZXJ0aWNhbENlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgKGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHQgLSBwcm9wcy5oZWlnaHQpIC8gMlxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5jZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyAobGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aCAtIHByb3BzLndpZHRoKSAvIDJcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueSArIChsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodCAtIHByb3BzLmhlaWdodCkgLyAyXG5cblx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbiA9IHByb3BzXG5cdFx0ZWxzZVxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gbGF5ZXIucHJvcHNcblxuXHRcdGJsdWVwcmludC5wdXNoIGxheWVyXG5cblxuXHRyZXR1cm4gYmx1ZXByaW50XG5cbmV4cG9ydHMuc2V0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHByb3BzID0ge31cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zW2ldXG5cblx0Ymx1ZXByaW50ID0gbGF5b3V0KGFycmF5KVxuXG5cdGZvciBsYXllciwgaW5kZXggaW4gYmx1ZXByaW50XG5cdFx0Zm9yIGtleSBpbiBPYmplY3Qua2V5cyhsYXllci5jYWxjdWxhdGVkUG9zaXRpb24pXG5cdFx0XHRsYXllcltrZXldID0gbGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uW2tleV1cblxuZXhwb3J0cy5hbmltYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHByb3BzID0ge31cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zW2ldXG5cblx0Ymx1ZXByaW50ID0gbGF5b3V0KGFycmF5KVxuXG5cdGZvciBsYXllciwgaW5kZXggaW4gYmx1ZXByaW50XG5cdFx0I1RpbWluZ1xuXHRcdGRlbGF5ID0gc2V0dXAuZGVsYXlcblx0XHRpZiBzZXR1cC5zdGFnZ2VyXG5cdFx0XHRzdGFnID0gc2V0dXAuc3RhZ2dlclxuXHRcdFx0ZGVsYXkgPSAoKGluZGV4KSAqIHN0YWcpICsgZGVsYXlcblxuXHRcdGlmIHNldHVwLmZhZGVPdXRcblx0XHRcdGlmIGxheWVyID09IHNldHVwLmZhZGVPdXRcblx0XHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLm9wYWNpdHkgPSAwXG5cblx0XHRpZiBzZXR1cC5mYWRlSW5cblx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5vcGFjaXR5ID0gMVxuXG5cdFx0bGF5ZXIuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpsYXllci5jYWxjdWxhdGVkUG9zaXRpb25cblx0XHRcdHRpbWU6c2V0dXAudGltZVxuXHRcdFx0ZGVsYXk6ZGVsYXlcblx0XHRcdGN1cnZlOnNldHVwLmN1cnZlXG5cdFx0XHRyZXBlYXQ6c2V0dXAucmVwZWF0XG5cdFx0XHRjb2xvck1vZGVsOnNldHVwLmNvbG9yTW9kZWxcblx0XHRcdGN1cnZlT3B0aW9uczpzZXR1cC5jdXJ2ZU9wdGlvbnNcblxuXHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbiA9IHByb3BzXG4iLCJtID0gcmVxdWlyZSBcIm1hdGVyaWFsLWtpdFwiXG5cbiMgQnVpbGQgTGlicmFyeSAgUHJvcGVydGllc1xubGF5ZXIgPSBuZXcgTGF5ZXJcbmV4cG9ydHMubGF5ZXJQcm9wcyA9IE9iamVjdC5rZXlzKGxheWVyLnByb3BzKVxuZXhwb3J0cy5sYXllclByb3BzLnB1c2ggXCJzdXBlckxheWVyXCJcbmV4cG9ydHMubGF5ZXJQcm9wcy5wdXNoIFwiY29uc3RyYWludHNcIlxuZXhwb3J0cy5sYXllclN0eWxlcyA9IE9iamVjdC5rZXlzKGxheWVyLnN0eWxlKVxubGF5ZXIuZGVzdHJveSgpXG5cbmV4cG9ydHMuYXNzZXRzID0ge1xuXHRob21lOlwiPHN2ZyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScxNzIgMTYgMTYgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPlxuXHRcdCAgICAgICAgPGVsbGlwc2UgaWQ9J3BhdGgtMScgY3g9JzE4MCcgY3k9JzI0JyByeD0nOCcgcnk9JzgnPjwvZWxsaXBzZT5cblx0XHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTInIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGZpbGw9J3doaXRlJz5cblx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdCAgICA8L2RlZnM+XG5cdFx0ICAgIDx1c2UgaWQ9J2hvbWUnIHN0cm9rZT0nI0ZGRkZGRicgbWFzaz0ndXJsKCNtYXNrLTIpJyBzdHJva2Utd2lkdGg9JzQnIGZpbGw9J25vbmUnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdDwvc3ZnPlwiXG5cdGJhY2s6XCI8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE5cHgnIHZpZXdCb3g9JzMwMSAxNCAxNiAxOScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cbiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgPGRlZnM+PC9kZWZzPlxuICAgIDxwYXRoIGQ9J00zMDcuMDI5MzgzLDE3Ljc2NzE3MzMgQzMwNy41ODAwMjcsMTYuODAzNTQ1MyAzMDguNTEwMjkyLDE2Ljc3NTA3MTMgMzA5LjExMjAyMywxNy43MTEwOTc2IEwzMTUuOTQwODAyLDI4LjMzMzY0MzUgQzMxNi41NDAzNjgsMjkuMjY2MzAxNyAzMTYuMTM2MzU0LDMwLjAyMjM3MDYgMzE1LjAyNjMwNiwzMC4wMjIzNzA2IEwzMDIuMDI2NTE5LDMwLjAyMjM3MDYgQzMwMC45MjE4OTEsMzAuMDIyMzcwNiAzMDAuNDY3OTIzLDI5LjI0OTcyOCAzMDEuMDIzNDQzLDI4LjI3NzU2NzkgTDMwNy4wMjkzODMsMTcuNzY3MTczMyBaJyBpZD0nVHJpYW5nbGUtMScgc3Ryb2tlPScjRkZGRkZGJyBzdHJva2Utd2lkdGg9JzInIGZpbGw9J25vbmUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwOC41MDIwMjEsIDIzLjUyNDM5MSkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMzA4LjUwMjAyMSwgLTIzLjUyNDM5MSkgJz48L3BhdGg+XG5cdFx0PC9zdmc+XCJcblx0Y2VsbHVsYXI6XCI8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzM1IDQgMTYgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG4gICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgIDxkZWZzPjwvZGVmcz5cbiAgICA8ZyBpZD0nY2VsbHVsYXInIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDM1LjAwMDAwMCwgNC4wMDAwMDApJz5cbiAgICAgICAgPHBvbHlnb24gaWQ9J2JvdW5kcycgcG9pbnRzPScwIDAgMTYgMCAxNiAxNiAwIDE2Jz48L3BvbHlnb24+XG4gICAgICAgIDxwb2x5Z29uIGlkPSdTaGFwZScgZmlsbD0nIzAwMDAwMCcgcG9pbnRzPScwIDE1IDE0IDE1IDE0IDEnPjwvcG9seWdvbj5cbiAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0YmF0dGVyeUhpZ2ggOiBcIjxzdmcgd2lkdGg9JzlweCcgaGVpZ2h0PScxNHB4JyB2aWV3Qm94PSczIDEgOSAxNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+PC9kZWZzPlxuXHQgICAgPHBvbHlnb24gaWQ9J1NoYXBlJyBzdHJva2U9J25vbmUnIGZpbGw9JyMwMDAwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcgcG9pbnRzPSc5IDEuODc1IDkgMSA2IDEgNiAxLjg3NSAzIDEuODc1IDMgMTUgMTIgMTUgMTIgMS44NzUnPjwvcG9seWdvbj5cblx0PC9zdmc+XCJcblx0YmFubmVyQkcgOiB7XG5cdFx0XCJpcGhvbmUtNVwiOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMzIwcHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDMyMCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPmlwaG9uZTU8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNS81Uy81QycgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMCwwIEwzMjAsMCBMMzIwLDY4IEwwLDY4IEwwLDAgWiBNMTQyLDYxLjAwNDg4MTUgQzE0Miw1OS44OTc2MTYgMTQyLjg5NjI3OSw1OSAxNDQuMDAyNCw1OSBMMTc2Ljk5NzYsNTkgQzE3OC4xMDM0OTUsNTkgMTc5LDU5Ljg5Mzg5OTggMTc5LDYxLjAwNDg4MTUgTDE3OSw2MS45OTUxMTg1IEMxNzksNjMuMTAyMzg0IDE3OC4xMDM3MjEsNjQgMTc2Ljk5NzYsNjQgTDE0NC4wMDI0LDY0IEMxNDIuODk2NTA1LDY0IDE0Miw2My4xMDYxMDAyIDE0Miw2MS45OTUxMTg1IEwxNDIsNjEuMDA0ODgxNSBaJyBpZD0naXBob25lNSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRcImlwaG9uZS02c1wiOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPSczNzVweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMzc1IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42ICgyNjMwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kPC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01OC4wMDAwMDAsIC0yMy4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0XHRcdFx0PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTguMDAwMDAwLCA3LjAwMDAwMCknIGlkPSdOb3RpZmljYXRpb24tY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00wLDE2IEwzNzUsMTYgTDM3NSw4NCBMMCw4NCBMMCwxNiBaIE0xNjksNzcuMDA0ODgxNSBDMTY5LDc1Ljg5NzYxNiAxNjkuODk2Mjc5LDc1IDE3MS4wMDI0LDc1IEwyMDMuOTk3Niw3NSBDMjA1LjEwMzQ5NSw3NSAyMDYsNzUuODkzODk5OCAyMDYsNzcuMDA0ODgxNSBMMjA2LDc3Ljk5NTExODUgQzIwNiw3OS4xMDIzODQgMjA1LjEwMzcyMSw4MCAyMDMuOTk3Niw4MCBMMTcxLjAwMjQsODAgQzE2OS44OTY1MDUsODAgMTY5LDc5LjEwNjEwMDIgMTY5LDc3Ljk5NTExODUgTDE2OSw3Ny4wMDQ4ODE1IFonIGlkPSdOb3RpZmljYXRpb24tYmFja2dyb3VuZCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRcImlwaG9uZS02cy1wbHVzXCIgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPSc0MTRweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgNDE0IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQgQ29weTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0XHQ8ZyBpZD0naU9TOC1QdXNoLU5vdGlmaWNhdGlvbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTQzLjAwMDAwMCwgLTc0LjAwMDAwMCknIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0XHRcdFx0PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNDMuMDAwMDAwLCA3NC4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00wLDAgTDQxNCwwIEw0MTQsNjggTDAsNjggTDAsMCBaIE0xODksNjEuMDA0ODgxNSBDMTg5LDU5Ljg5NzYxNiAxODkuODk2Mjc5LDU5IDE5MS4wMDI0LDU5IEwyMjMuOTk3Niw1OSBDMjI1LjEwMzQ5NSw1OSAyMjYsNTkuODkzODk5OCAyMjYsNjEuMDA0ODgxNSBMMjI2LDYxLjk5NTExODUgQzIyNiw2My4xMDIzODQgMjI1LjEwMzcyMSw2NCAyMjMuOTk3Niw2NCBMMTkxLjAwMjQsNjQgQzE4OS44OTY1MDUsNjQgMTg5LDYzLjEwNjEwMDIgMTg5LDYxLjk5NTExODUgTDE4OSw2MS4wMDQ4ODE1IFonIGlkPSdOb3RpZmljYXRpb24tYmFja2dyb3VuZC1Db3B5Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGFkXCIgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPSc3NjhweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgNzY4IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPHRpdGxlPmlwYWQtcG9ydHJhaXQ8L3RpdGxlPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUG9ydHJhaXQnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMCwwIEw3NjgsMCBMNzY4LDY4IEwwLDY4IEwwLDAgWiBNMzY2LDYxLjAwNDg4MTUgQzM2Niw1OS44OTc2MTYgMzY2Ljg5NjI3OSw1OSAzNjguMDAyNCw1OSBMNDAwLjk5NzYsNTkgQzQwMi4xMDM0OTUsNTkgNDAzLDU5Ljg5Mzg5OTggNDAzLDYxLjAwNDg4MTUgTDQwMyw2MS45OTUxMTg1IEM0MDMsNjMuMTAyMzg0IDQwMi4xMDM3MjEsNjQgNDAwLjk5NzYsNjQgTDM2OC4wMDI0LDY0IEMzNjYuODk2NTA1LDY0IDM2Niw2My4xMDYxMDAyIDM2Niw2MS45OTUxMTg1IEwzNjYsNjEuMDA0ODgxNSBaJyBpZD0naXBhZC1wb3J0cmFpdCc+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRcImlwYWQtcHJvXCIgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScxMDI0cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDEwMjQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8dGl0bGU+aXBhZC1wcm8tcG9ydHJhaXQ8L3RpdGxlPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUHJvLVBvcnRyYWl0JyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMMTAyNCwwIEwxMDI0LDY4IEwwLDY4IEwwLDAgWiBNNDk0LDYxLjAwNDg4MTUgQzQ5NCw1OS44OTc2MTYgNDk0Ljg5NjI3OSw1OSA0OTYuMDAyNCw1OSBMNTI4Ljk5NzYsNTkgQzUzMC4xMDM0OTUsNTkgNTMxLDU5Ljg5Mzg5OTggNTMxLDYxLjAwNDg4MTUgTDUzMSw2MS45OTUxMTg1IEM1MzEsNjMuMTAyMzg0IDUzMC4xMDM3MjEsNjQgNTI4Ljk5NzYsNjQgTDQ5Ni4wMDI0LDY0IEM0OTQuODk2NTA1LDY0IDQ5NCw2My4xMDYxMDAyIDQ5NCw2MS45OTUxMTg1IEw0OTQsNjEuMDA0ODgxNSBaJyBpZD0naXBhZC1wcm8tcG9ydHJhaXQnPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdH1cblx0d2lmaTpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuPHN2ZyB3aWR0aD0nMThweCcgaGVpZ2h0PScxNHB4JyB2aWV3Qm94PScwIDAgMTggMTQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG4gICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+XG4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgPGRlZnM+PC9kZWZzPlxuICAgIDxnIGlkPSdNYXRlcmlhbC1EZXNpZ24tU3ltYm9scycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG4gICAgICAgIDxnIGlkPSdNYXRlcmlhbC9BbmRyb2lkL1N0YXR1cy1iYXItY29udGVudC1saWdodCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE1LjAwMDAwMCwgLTUuMDAwMDAwKScgZmlsbD0nIzAwMDAwMCc+XG4gICAgICAgICAgICA8ZyBpZD0nd2lmaScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQuMDAwMDAwLCA0LjAwMDAwMCknPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xOS4wMjI2Mjc5LDQuMDE1OTMxMjMgQzE2LjUxMTc4MDksMi4xMjI1NjM4MiAxMy4zODY5ODQ5LDEgMTAsMSBDNi42MTMwMTUxMywxIDMuNDg4MjE5MDgsMi4xMjI1NjM4MiAwLjk3NzM3MjA4NSw0LjAxNTkzMTIzIEwxMCwxNSBMMTkuMDIyNjI3OSw0LjAxNTkzMTIzIFonIGlkPSdTaGFwZSc+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgPC9nPlxuPC9zdmc+XCJcblx0c2lnbmFsSGlnaDogXCJcbjxzdmcgd2lkdGg9JzE0cHgnIGhlaWdodD0nMTRweCcgdmlld0JveD0nMCAxIDE0IDE0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cbiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICA8ZGVmcz48L2RlZnM+XG4gICAgPHBvbHlnb24gaWQ9J1NoYXBlJyBzdHJva2U9J25vbmUnIGZpbGw9JyNGRkZGRkYnIGZpbGwtcnVsZT0nZXZlbm9kZCcgcG9pbnRzPScwIDE1IDE0IDE1IDE0IDEnPjwvcG9seWdvbj5cbjwvc3ZnPlwiXG5cdGFjdGl2aXR5OiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTYgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Tb2NjZXIgQmFsbDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz5cblx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHRcdDwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTc5LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdTb2NjZXItQmFsbCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTc5LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8bWFzayBpZD0nbWFzay0yJyBza2V0Y2g6bmFtZT0nTWFzaycgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHRcdFx0XHRcdDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHRcdFx0XHRcdDwvbWFzaz5cblx0XHRcdFx0XHRcdFx0PHVzZSBpZD0nTWFzaycgc3Ryb2tlPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTIuMTIwMzA0NiBMMTIuODU3MzM4NCw4IEwxMy4zNzIzNzY1LDguODU3MTY3MyBMNi41MTUwMzgwNywxMi45Nzc0NzE5IEw2LDEyLjEyMDMwNDYgTDYsMTIuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjg0OTY0OCw4LjcyNjA1NTEgTDE5LjEwMDExMDMsNS4zNDUxMDkwMSBMMTkuNTIyNzI4NSw2LjI1MTQxNjggTDEyLjI3MjI2NjIsOS42MzIzNjI4OSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDMuMTIwMzA0NiBMMTIuODU3MzM4NCwtMSBMMTMuMzcyMzc2NSwtMC4xNDI4MzI2OTkgTDYuNTE1MDM4MDcsMy45Nzc0NzE5IEw2LDMuMTIwMzA0NiBMNiwzLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNLTEsNy4xMjAzMDQ2IEw1Ljg1NzMzODQxLDMgTDYuMzcyMzc2NDgsMy44NTcxNjczIEwtMC40ODQ5NjE5MjUsNy45Nzc0NzE5IEwtMSw3LjEyMDMwNDYgTC0xLDcuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nNCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nNSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzExLjUnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzEyJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDQuODU3MTY3MyBMMTEuODU3MzM4NCw4Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsOC4xMjAzMDQ2IEw1LjUxNTAzODA3LDQgTDUsNC44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSwxMi44NTcxNjczIEwxMS44NTczMzg0LDE2Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsMTYuMTIwMzA0NiBMNS41MTUwMzgwNywxMiBMNSwxMi44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xJyBmaWxsPScjRDhEOEQ4JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEtQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjQ1NzcxMTg5LDMuMTk1MDQ3MzkgTDcuMzU1MTQ0ODQsNi4xMzIxODMzMyBMNC41MzAwNjc2LDYuOTQyMjYxMiBMMi44ODY2NDA4OSw0LjUwNTc4MDkgTDQuNjk2MDI0NTcsMi4xODk4NzU0MSBMNy40NTc3MTE4OSwzLjE5NTA0NzM5JyBpZD0nUG9seWdvbi0xLUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjQ1NzcxMTg5LDExLjE5NTA0NzQgTDcuMzU1MTQ0ODQsMTQuMTMyMTgzMyBMNC41MzAwNjc2LDE0Ljk0MjI2MTIgTDIuODg2NjQwODksMTIuNTA1NzgwOSBMNC42OTYwMjQ1NywxMC4xODk4NzU0IEw3LjQ1NzcxMTg5LDExLjE5NTA0NzQnIGlkPSdQb2x5Z29uLTEtQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0IEwxNC40NDA2MDMxLDMuMDA5NzI5ODggTDExLjYxNTUyNTgsMy44MTk4MDc3NCBMOS45NzIwOTkxMiwxLjM4MzMyNzQ1IEwxMS43ODE0ODI4LC0wLjkzMjU3ODA1IEwxNC41NDMxNzAxLDAuMDcyNTkzOTMxNCcgaWQ9J1BvbHlnb24tMS1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0YW5pbWFsczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+R3JvdXA8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTcuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0naWNfRm9vZCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTE4LjAwMDAwMCwgNjQwLjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nR3JvdXAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjY4Mzc3NTM3LDEuMzgxNTY2NDYgQzYuMjM5MjYwNjYsMS4xMzYyNCA2Ljg1MzcyMDA1LDEgNy41LDEgQzguMTQ2Mjc5OTUsMSA4Ljc2MDczOTM0LDEuMTM2MjQgOS4zMTYyMjQ2MywxLjM4MTU2NjQ2IEM5LjgwODc5Mjc1LDAuNTYyMzU5MDE5IDEwLjgyNTU4ODgsMCAxMiwwIEMxMy42NTY4NTQyLDAgMTUsMS4xMTkyODgxMyAxNSwyLjUgQzE1LDMuNTU3MTM5OCAxNC4yMTI2MjQ2LDQuNDYxMDI4NDMgMTMuMDk5OTIyNiw0LjgyNjYyNTE0IEMxNC4yNDk2NTI4LDUuNjQxODU0MjIgMTUsNi45ODMzMDA2MiAxNSw4LjUgQzE1LDEwLjcxNjcxNDQgMTMuMzk3MTg3MywxMi41NTkwNzE5IDExLjI4NzI2NzEsMTIuOTMxMzY3MyBDMTAuNDg2NzI0OCwxNC4xNzU3NzAzIDkuMDg5NjE2OTYsMTUgNy41LDE1IEM1LjkxMDM4MzA0LDE1IDQuNTEzMjc1MjQsMTQuMTc1NzcwMyAzLjcxMjczMjkxLDEyLjkzMTM2NzMgQzEuNjAyODEyNjgsMTIuNTU5MDcxOSAwLDEwLjcxNjcxNDQgMCw4LjUgQzAsNi45ODMzMDA2MiAwLjc1MDM0NzI0NCw1LjY0MTg1NDIyIDEuOTAwMDc3NDEsNC44MjY2MjUxNCBDMC43ODczNzU0NDUsNC40NjEwMjg0MyAwLDMuNTU3MTM5OCAwLDIuNSBDMCwxLjExOTI4ODEzIDEuMzQzMTQ1NzUsMCAzLDAgQzQuMTc0NDExMjIsMCA1LjE5MTIwNzI1LDAuNTYyMzU5MDE5IDUuNjgzNzc1MzcsMS4zODE1NjY0NiBaJyBpZD0nT3ZhbC04Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNzM4MzQyMjgsMTIgQzUuODYyOTA5NzksMTIgNi4xNDY0MjM1MywxMiA2LjE0NjQyMzUzLDEyIEM2LjE0NjQyMzUzLDEyIDYuNDMyMTU2OTYsMTIuNDQyNjEyMyA2LjUyNDY1ODIsMTIuNDkxOTczOSBDNi42NjQ1NTYwMSwxMi41NjY2Mjc3IDcsMTIuNDkxOTczOSA3LDEyLjQ5MTk3MzkgTDcsMTIgTDgsMTIgTDgsMTIuNDkxOTczOSBMOC40OTc5OTIyOCwxMi40OTE5NzM5IEw4Ljg0MzAxNzY5LDEyIEw5LjM5MTg0NTcsMTIgQzkuMzkxODQ1NywxMiA4Ljk5NTk4NDU3LDEyLjk4Mzk0NzggOC40OTc5OTIyOCwxMi45ODM5NDc4IEw2LjYwNzAyNDA3LDEyLjk4Mzk0NzggQzYuMjE0MDQ4MTMsMTIuOTgzOTQ3OCA1LjQ1OTk2MDk0LDEyIDUuNzM4MzQyMjgsMTIgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5LTInPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdPdmFsLTE0JyBjeD0nMTAuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdPdmFsLTE0LUNvcHknIGN4PSc0LjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEyLjY5OTk5NjksNSBDMTIuNjk5OTk2OSwzLjA2NzAwMzM4IDExLjEzMjk5MzYsMS41IDkuMTk5OTk2OTUsMS41JyBpZD0nT3ZhbC0xNic+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjUsNSBDNS41LDMuMDY3MDAzMzggMy45MzI5OTY2MiwxLjUgMiwxLjUnIGlkPSdPdmFsLTE2LUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuNzUwMDAwLCAzLjI1MDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMy43NTAwMDAsIC0zLjI1MDAwMCkgJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyB4PSc3JyB5PScxMScgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDEwIEw2LjUsMTAgTDYuNDk5OTk5OTksOS41IEw4LjUwMDAwMDA1LDkuNSBMOC41MDAwMDAwNSwxMCBMOSwxMCBMOSwxMC41IEw4LjUsMTAuNSBMOC41LDExIEw2LjUsMTEgTDYuNSwxMC41IEw2LDEwLjUgTDYsMTAgWicgaWQ9J1BhdGgnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0Y2hldnJvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMTNweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTMgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkJhY2sgQ2hldnJvbjwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J05hdmlnYXRpb24tQmFyL0JhY2snIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC04LjAwMDAwMCwgLTMxLjAwMDAwMCknIGZpbGw9JyMwMDc2RkYnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J004LjUsNDIgTDE5LDMxLjUgTDIxLDMzLjUgTDEyLjUsNDIgTDIxLDUwLjUgTDE5LDUyLjUgTDguNSw0MiBaJyBpZD0nQmFjay1DaGV2cm9uJz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRlbW9qaSA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyB2aWV3Qm94PScwIDAgMjAgMjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPkVtb2ppPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTE4MS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nQm90dG9tLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDE3MC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J002Ni43NSwzMC41IEM3Mi4xMzQ3NzYzLDMwLjUgNzYuNSwyNi4xMzQ3NzYzIDc2LjUsMjAuNzUgQzc2LjUsMTUuMzY1MjIzNyA3Mi4xMzQ3NzYzLDExIDY2Ljc1LDExIEM2MS4zNjUyMjM3LDExIDU3LDE1LjM2NTIyMzcgNTcsMjAuNzUgQzU3LDI2LjEzNDc3NjMgNjEuMzY1MjIzNywzMC41IDY2Ljc1LDMwLjUgWiBNNjYuNzUsMjkuNSBDNzEuNTgyNDkxNiwyOS41IDc1LjUsMjUuNTgyNDkxNiA3NS41LDIwLjc1IEM3NS41LDE1LjkxNzUwODQgNzEuNTgyNDkxNiwxMiA2Ni43NSwxMiBDNjEuOTE3NTA4NCwxMiA1OCwxNS45MTc1MDg0IDU4LDIwLjc1IEM1OCwyNS41ODI0OTE2IDYxLjkxNzUwODQsMjkuNSA2Ni43NSwyOS41IFogTTYzLjc1LDE5IEM2NC40NDAzNTU5LDE5IDY1LDE4LjQ0MDM1NTkgNjUsMTcuNzUgQzY1LDE3LjA1OTY0NDEgNjQuNDQwMzU1OSwxNi41IDYzLjc1LDE2LjUgQzYzLjA1OTY0NDEsMTYuNSA2Mi41LDE3LjA1OTY0NDEgNjIuNSwxNy43NSBDNjIuNSwxOC40NDAzNTU5IDYzLjA1OTY0NDEsMTkgNjMuNzUsMTkgWiBNNjkuNzUsMTkgQzcwLjQ0MDM1NTksMTkgNzEsMTguNDQwMzU1OSA3MSwxNy43NSBDNzEsMTcuMDU5NjQ0MSA3MC40NDAzNTU5LDE2LjUgNjkuNzUsMTYuNSBDNjkuMDU5NjQ0MSwxNi41IDY4LjUsMTcuMDU5NjQ0MSA2OC41LDE3Ljc1IEM2OC41LDE4LjQ0MDM1NTkgNjkuMDU5NjQ0MSwxOSA2OS43NSwxOSBaIE01OS44ODc2MzM0LDIyLjE2NDE0NDQgQzU5LjYzOTAzMTYsMjEuMzgzMTM0IDYwLjA2NTkxOCwyMC45Nzg1MTU2IDYwLjg1MzA5NTEsMjEuMjMyOTMwNCBDNjAuODUzMDk1MSwyMS4yMzI5MzA0IDYzLjA5Mzc1MDMsMjIuMjEyNSA2Ni43NTAwMDAxLDIyLjIxMjUgQzcwLjQwNjI0OTksMjIuMjEyNSA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IEM3My40Mjg3MTYyLDIwLjk2NjIxNTMgNzMuODgxMjQ2MywyMS40MDQ0MDk3IDczLjYwNTg0NzcsMjIuMTgwNzQzNyBDNzMuNjA1ODQ3NywyMi4xODA3NDM3IDcyLjYsMjcuNTc1IDY2Ljc1LDI3LjU3NSBDNjAuOSwyNy41NzUgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBaIE02Ni43NSwyMy4xODc1IEM2NC4wNjg3NSwyMy4xODc1IDYxLjg1NDQwNTUsMjIuNDczNzgyMSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgQzYxLjMyNzMwMTksMjIuMzI5NDggNjEuMTc4MTIzMywyMi41NzIxNjE1IDYxLjU2Mzk1NTUsMjIuOTU3MDc1IEM2MS41NjM5NTU1LDIyLjk1NzA3NSA2Mi4zNjI1LDI0LjY1IDY2Ljc1LDI0LjY1IEM3MS4xMzc1LDI0LjY1IDcxLjk1MDg1MDMsMjIuOTQzODMwNCA3MS45NTA4NTAzLDIyLjk0MzgzMDQgQzcyLjMwOTM2NTksMjIuNTM5OTI3OCA3Mi4xNjkwNzkzLDIyLjMzNTk4NDQgNzEuNjM1NDI3MywyMi40NzYzNDkgQzcxLjYzNTQyNzMsMjIuNDc2MzQ5IDY5LjQzMTI1LDIzLjE4NzUgNjYuNzUsMjMuMTg3NSBaJyBpZD0nRW1vamknPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRkZWxldGU6IHtcblx0XHRvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzI0cHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzI0cHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaIE0zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzOC43MDk3MiwyMS43MDk3MTk1IEMzMzguMzE3NzUyLDIxLjMxNzc1MjIgMzM4LjMxODk2NSwyMC42ODEwMzQ5IDMzOC43MDk3MiwyMC4yOTAyODA1IEwzNDQuNjQzMjQ1LDE0LjM1Njc1NDcgQzM0NC44NDAyNzYsMTQuMTU5NzI0NSAzNDUuMjI1NjM5LDE0IDM0NS40OTM3NDEsMTQgTDM1NS45OTcyMzksMTQgQzM1Ny4xMDMzMzMsMTQgMzU3Ljk5OTk5OSwxNC44OTcwNjAxIDM1Ny45OTk5OTksMTYuMDA1ODU4NiBMMzU3Ljk5OTk5OSwyNS45OTQxNDEyIEMzNTcuOTk5OTk5LDI3LjEwMTk0NjQgMzU3LjEwNjQ1NywyNy45OTk5OTk5IDM1NS45OTcyMzksMjcuOTk5OTk5OSBMMzQ1LjQ5Mzc0MSwyOCBDMzQ1LjIyMTA1NiwyOCAzNDQuODQwNjQzLDI3Ljg0MDY0MzEgMzQ0LjY0MzI0NiwyNy42NDMyNDUzIEwzMzguNzA5NzIsMjEuNzA5NzE5NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0Zm9vZCA6ICBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Gb29kPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDguMDAwMDAwLCAtNjM3LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J0Zvb2QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDIyOS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS41LDE1LjUgTDEsMTUuNSBMMCw1IEw2LjUsNSBMNi4yNjM2MDkzMyw3LjQ4MjEwMjAyJyBpZD0nRHJpbmsnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LjAxMDc3NTQ1LDEuOTY5MzAwOTggTDYuNTE1NzEzNTIsNS4yMjI3MDUzOSBMNS43MTkwODE4NCw1LjY3OTQ3ODEyIEw1LjAzODkwMDksMS45NjkzMDA5OCBMNC44NTU1NzI0NywxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywxLjk2OTMwMDk4IEw2LjAxMDc3NTQ1LDEuOTY5MzAwOTggWicgaWQ9J1N0cmF3JyBmaWxsPScjNEE1NDYxJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg2Ljg1NTU3MiwgMy4zMjQzOTApIHJvdGF0ZSgyNC4wMDAwMDApIHRyYW5zbGF0ZSgtNi44NTU1NzIsIC0zLjMyNDM5MCkgJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J0JvdHRvbS1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgeD0nMycgeT0nMTQnIHdpZHRoPScxMC41JyBoZWlnaHQ9JzEuNScgcng9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMS41LDEyLjUwMjQ0MDggQzEuNSwxMS45NDg4MDggMS45NDkxNjkxNiwxMS41IDIuNDkyNjg3MjMsMTEuNSBMMTQuMDA3MzEyOCwxMS41IEMxNC41NTU1NTg4LDExLjUgMTUsMTEuOTQ2OTQ5OSAxNSwxMi41MDI0NDA4IEwxNSwxMi45OTc1NTkyIEMxNSwxMy41NTExOTIgMTQuNTUwODMwOCwxNCAxNC4wMDczMTI4LDE0IEwyLjQ5MjY4NzIzLDE0IEMxLjk0NDQ0MTIxLDE0IDEuNSwxMy41NTMwNTAxIDEuNSwxMi45OTc1NTkyIEwxLjUsMTIuNTAyNDQwOCBaIE0zLjkzMzAwMDAzLDExLjgzOTI3MjcgQzMuNDE3NzE4MzQsMTEuNjUxODk3NiAzLjQ0NDgzNjk3LDExLjUgMy45OTU1Nzc1LDExLjUgTDEzLjAwNDQyMjUsMTEuNSBDMTMuNTU0MjY0OCwxMS41IDEzLjU4NjYwNjEsMTEuNjUwMzI1MSAxMy4wNjcsMTEuODM5MjcyNyBMOC41LDEzLjUgTDMuOTMzMDAwMDMsMTEuODM5MjcyNyBaJyBpZD0nJnF1b3Q7UGF0dHkmcXVvdDsnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMi41LDEwLjUgTDEzLjUsMTAuNSBMMTUsMTEuNSBMMSwxMS41IEwyLjUsMTAuNSBaJyBpZD0nQ2hlZXNlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTguMjUsMTAuNSBDMTEuNDI1NjM3MywxMC41IDE0LDEwLjMyODQyNzEgMTQsOS41IEMxNCw4LjY3MTU3Mjg4IDExLjQyNTYzNzMsOCA4LjI1LDggQzUuMDc0MzYyNjksOCAyLjUsOC42NzE1NzI4OCAyLjUsOS41IEMyLjUsMTAuMzI4NDI3MSA1LjA3NDM2MjY5LDEwLjUgOC4yNSwxMC41IFonIGlkPSdUb3AtQnVuJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43NSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRmbGFnczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzExcHgnIGhlaWdodD0nMTVweCcgdmlld0JveD0nMCAwIDExIDE1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+RmxhZzwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjc1LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGbGFnJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNzUuMDAwMDAwLCAyMzEuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1BvbGUnIGZpbGw9JyM0QTU0NjEnIHg9JzAnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzE0Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEsMSBDMSwxIDEuMjUsMiAzLjUsMiBDNS43NSwyIDYsMC43NDk5OTk5OTggOCwwLjc1IEMxMCwwLjc0OTk5OTk5OCAxMCwxLjUgMTAsMS41IEwxMCw3LjUgQzEwLDcuNSAxMCw2LjUgOCw2LjUgQzYsNi41IDQuODA2MjM5MTEsOCAzLjUsOCBDMi4xOTM3NjA4OSw4IDEsNyAxLDcgTDEsMSBaJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZnJlcXVlbnQ6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlJlY2VudDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTUuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1JlY2VudCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTUuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nQm9keScgc3Ryb2tlPScjNEE1NDYxJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjUsNy41IEw3LjUsOC41IEw4LjUsOC41IEw4LjUsMiBMNy41LDIgTDcuNSw3LjUgTDQsNy41IEw0LDguNSBMOC41LDguNSBMOC41LDcuNSBMNy41LDcuNSBaJyBpZD0nSGFuZHMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0a2V5Ym9hcmQgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMzIuNXB4JyBoZWlnaHQ9JzIzLjVweCcgdmlld0JveD0nMCAwIDY1IDQ3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUG9ydHJhaXQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDM2LjAwMDAwMCwgLTE5NTYuMDAwMDAwKScgZmlsbD0nIzAwMDAwMCc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQtTGlnaHQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAxNDIyLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZC1kb3duJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDEyLjAwMDAwMCwgNTAwLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNODcuMDAxMzMyLDM0IEM4OC4xMDUxNjU5LDM0IDg5LDM0Ljg5OTcxMjcgODksMzUuOTkzMjg3NCBMODksNjEuMDA2NzEyNiBDODksNjIuMTA3NTc0OCA4OC4xMDU4NzU5LDYzIDg3LjAwMTMzMiw2MyBMMjUuOTk4NjY4LDYzIEMyNC44OTQ4MzQxLDYzIDI0LDYyLjEwMDI4NzMgMjQsNjEuMDA2NzEyNiBMMjQsMzUuOTkzMjg3NCBDMjQsMzQuODkyNDI1MiAyNC44OTQxMjQxLDM0IDI1Ljk5ODY2OCwzNCBMODcuMDAxMzMyLDM0IFogTTI2LDM2IEwyNiw2MSBMODcsNjEgTDg3LDM2IEwyNiwzNiBaIE03OSw0MCBMODMsNDAgTDgzLDQ0IEw3OSw0NCBMNzksNDAgWiBNNzIsNDAgTDc2LDQwIEw3Niw0NCBMNzIsNDQgTDcyLDQwIFogTTY1LDQwIEw2OSw0MCBMNjksNDQgTDY1LDQ0IEw2NSw0MCBaIE01OCw0MCBMNjIsNDAgTDYyLDQ0IEw1OCw0NCBMNTgsNDAgWiBNNTEsNDAgTDU1LDQwIEw1NSw0NCBMNTEsNDQgTDUxLDQwIFogTTQ0LDQwIEw0OCw0MCBMNDgsNDQgTDQ0LDQ0IEw0NCw0MCBaIE0zNyw0MCBMNDEsNDAgTDQxLDQ0IEwzNyw0NCBMMzcsNDAgWiBNMzAsNDAgTDM0LDQwIEwzNCw0NCBMMzAsNDQgTDMwLDQwIFogTTc5LDQ3IEw4Myw0NyBMODMsNTEgTDc5LDUxIEw3OSw0NyBaIE03Miw0NyBMNzYsNDcgTDc2LDUxIEw3Miw1MSBMNzIsNDcgWiBNNjUsNDcgTDY5LDQ3IEw2OSw1MSBMNjUsNTEgTDY1LDQ3IFogTTU4LDQ3IEw2Miw0NyBMNjIsNTEgTDU4LDUxIEw1OCw0NyBaIE01MSw0NyBMNTUsNDcgTDU1LDUxIEw1MSw1MSBMNTEsNDcgWiBNNDQsNDcgTDQ4LDQ3IEw0OCw1MSBMNDQsNTEgTDQ0LDQ3IFogTTM3LDQ3IEw0MSw0NyBMNDEsNTEgTDM3LDUxIEwzNyw0NyBaIE0zMCw0NyBMMzQsNDcgTDM0LDUxIEwzMCw1MSBMMzAsNDcgWiBNNzksNTQgTDgzLDU0IEw4Myw1OCBMNzksNTggTDc5LDU0IFogTTcyLDU0IEw3Niw1NCBMNzYsNTggTDcyLDU4IEw3Miw1NCBaIE00NCw1NCBMNjksNTQgTDY5LDU4IEw0NCw1OCBMNDQsNTQgWiBNMzcsNTQgTDQxLDU0IEw0MSw1OCBMMzcsNTggTDM3LDU0IFogTTMwLDU0IEwzNCw1NCBMMzQsNTggTDMwLDU4IEwzMCw1NCBaIE00NC4zMTYzNDk4LDY5Ljk3NzEwNDcgQzQzLjM2ODQyMjUsNzAuNTQyMDM0MiA0My4zMzM4NzIxLDcxLjUwOTY0OTUgNDQuMjM3ODIxNyw3Mi4xMzczOTEyIEw1NS4zNjIxNTM5LDc5Ljg2MjYwODggQzU2LjI2NjcxMTMsODAuNDkwNzcyNiA1Ny43MzM4OTY1LDgwLjQ5MDM1MDUgNTguNjM3ODQ2MSw3OS44NjI2MDg4IEw2OS43NjIxNzgzLDcyLjEzNzM5MTIgQzcwLjY2NjczNTcsNzEuNTA5MjI3NCA3MC42NDgwMTIsNzAuNTIwNTIwNCA2OS43MTE1MTg3LDY5LjkyMzQxNjYgTDY5Ljk4MjU3MzEsNzAuMDk2MjM5NiBDNjkuNTE4MTMzMyw2OS44MDAxMTUgNjguNzc4MjU1Nyw2OS44MTI2NDkzIDY4LjMyNjEzMDcsNzAuMTI2OTMyMyBMNTcuODE1NDk5OSw3Ny40MzMxMjYzIEM1Ny4zNjUxMTE3LDc3Ljc0NjIwMiA1Ni42MjgxNjUsNzcuNzM4MTc4NiA1Ni4xNzYyMTAzLDc3LjQxOTk0MjQgTDQ1LjgzODYxMzcsNzAuMTQwODk3NyBDNDUuMzgzNjQ3Miw2OS44MjA1NDA3IDQ0LjYzNzUwMzksNjkuNzg1NzA4OCA0NC4xNTY2MzkzLDcwLjA3MjI4NjIgTDQ0LjMxNjM0OTgsNjkuOTc3MTA0NyBaJyBpZD0nU2hhcGUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRrZXlQb3BVcDpcblx0XHRcImlwaG9uZS01XCIgOiBcIjxzdmcgd2lkdGg9JzU1cHgnIGhlaWdodD0nOTJweCcgdmlld0JveD0nNTMgMzE2IDU1IDkyJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHQgICAgICAgIDxwYXRoIGQ9J00xLjM0MTczMjMxLDQwLjkzOTE3MDEgQzAuNTE3NDY2MTI4LDQwLjIwNTg5IDAsMzkuMTM3NDI1MSAwLDM3Ljk0Nzc2MzUgTDAsNC4wMDM0NTU5OCBDMCwxLjc4OTE3MTM2IDEuNzk1MjgyNDgsMCA0LjAwOTg3NTY2LDAgTDQ0Ljk5MDEyNDMsMCBDNDcuMjEyNTYwOCwwIDQ5LDEuNzkyNDA4MyA0OSw0LjAwMzQ1NTk4IEw0OSwzNy45NDc3NjM1IEM0OSwzOC45MTI0MDUxIDQ4LjY1OTI3OTgsMzkuNzk2MzY1OSA0OC4wOTE2MDQxLDQwLjQ4Njg2NjUgQzQ4LjA0MTQyMzMsNDAuOTAzMjI4OSA0Ny43MTExODg4LDQxLjQwNzQ2NzIgNDcuMDgyNTkwOCw0MS45NTIyNSBDNDcuMDgyNTkwOCw0MS45NTIyNSAzOC41Mjk5MTQ1LDQ5LjA2NDMzNjIgMzguNTI5OTE0NSw1MS4xNTI2NDI0IEMzOC41Mjk5MTQ1LDYxLjY0OTc1NjEgMzguMTc3MDA5OSw4Mi4wMDI1NDA2IDM4LjE3NzAwOTksODIuMDAyNTQwNiBDMzguMTQxMjMwNCw4NC4yMDI0MzU0IDM2LjMyMTAyODQsODYgMzQuMTEyODQ5NSw4NiBMMTUuMzA1OTUzOSw4NiBDMTMuMTA3OTYsODYgMTEuMjc4MTg4NCw4NC4yMTAwNzg5IDExLjI0MTc5MzYsODIuMDAyMDk5MyBDMTEuMjQxNzkzNiw4Mi4wMDIwOTkzIDEwLjg4ODg4ODksNjEuNjQ3MDg1MiAxMC44ODg4ODg5LDUxLjE0ODYzNjEgQzEwLjg4ODg4ODksNDkuMDYxNjY1NCAyLjM0MTQzNjYyLDQyLjIzODY1NSAyLjM0MTQzNjYyLDQyLjIzODY1NSBDMS43NzgyNzMxMSw0MS43NjQxMzY1IDEuNDQ4ODEzNTQsNDEuMzIwNDIzNyAxLjM0MTczMjMxLDQwLjkzOTE3MDEgWicgaWQ9J3BhdGgtMic+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTMnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nNDknIGhlaWdodD0nODYnIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTYuMDAwMDAwLCAzMTguMDAwMDAwKSc+XG5cdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyNCMkI0QjknIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nI0ZDRkNGQycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnNcIiA6IFwiPHN2ZyB3aWR0aD0nNjRweCcgaGVpZ2h0PScxMDdweCcgdmlld0JveD0nMjQgMzg3IDY0IDEwNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+XG5cdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICA8L2ZpbHRlcj5cblx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS40ODY0NzY0Niw0OC4zNzc5OTQ3IEMwLjU4MDI2NjQ5LDQ3LjY0NjQyOTYgMCw0Ni41Mjk1ODcgMCw0NS4yNzgxOTQ4IEwwLDMuOTkwMDk3ODcgQzAsMS43ODI1OTEyIDEuNzk1MDk1NzcsMCA0LjAwOTQ1ODYyLDAgTDUzLjk5MDU0MTQsMCBDNTYuMjAwNTc0NiwwIDU4LDEuNzg2NDI3NjcgNTgsMy45OTAwOTc4NyBMNTgsNDUuMjc4MTk0OCBDNTgsNDYuMTgzMzAwNCA1Ny42OTgyMjU4LDQ3LjAxNjk3MzMgNTcuMTg5NTA5Nyw0Ny42ODU2MzI1IEM1Ny4wMzk2ODY1LDQ4LjAyMTI0OTcgNTYuNzM2MDA5OCw0OC4zOTcyODM0IDU2LjI3MTgzNjMsNDguNzk1MDY2MSBDNTYuMjcxODM2Myw0OC43OTUwNjYxIDQ1LjYwNjgzNzYsNTcuNjIyMDY5MyA0NS42MDY4Mzc2LDYwLjA3NDYxNDkgQzQ1LjYwNjgzNzYsNzIuNDAyNjIwNSA0NS4xNzc5NjcsOTYuOTkyMzE2NCA0NS4xNzc5NjcsOTYuOTkyMzE2NCBDNDUuMTQxMzc0OCw5OS4yMTIyMjE0IDQzLjMxOTMwNjUsMTAxIDQxLjEwOTAwMzUsMTAxIEwxNy4zODY3MjMsMTAxIEMxNS4xODEyNzIyLDEwMSAxMy4zNTQ2ODMsOTkuMjA1NTAwOSAxMy4zMTc3NTk1LDk2Ljk5MTg3NDEgQzEzLjMxNzc1OTUsOTYuOTkxODc0MSAxMi44ODg4ODg5LDcyLjM5OTQ4MzggMTIuODg4ODg4OSw2MC4wNjk5MDk5IEMxMi44ODg4ODg5LDU3LjYxODkzMjYgMi4yMjY3MzQzNyw0OS4xNDYyOTM2IDIuMjI2NzM0MzcsNDkuMTQ2MjkzNiBDMS45MDUyNDA4Nyw0OC44Nzg4MzI3IDEuNjU5MTE2NTUsNDguNjIwNzMzIDEuNDg2NDc2NDYsNDguMzc3OTk0NyBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc1OCcgaGVpZ2h0PScxMDEnIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjcuMDAwMDAwLCAzODkuMDAwMDAwKSc+XG5cdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyNCMkI0QjknIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nI0ZDRkNGQycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8c3ZnIHdpZHRoPSc3MHB4JyBoZWlnaHQ9JzExOXB4JyB2aWV3Qm94PScyOCA0NTAgNzAgMTE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHQgICAgICAgIDxwYXRoIGQ9J00xLjk1NzI5Mzk1LDU0LjA3MjgzMDQgQzAuNzg1OTExMTMyLDUzLjM3NTc2OTkgMCw1Mi4wOTg3NzYgMCw1MC42Mzg5MDIyIEwwLDMuOTk1MjQ0MTkgQzAsMS43ODY3MTQyOCAxLjc5MjQyMjAyLDAgNC4wMDM0ODY2MywwIEw1OS45OTY1MTM0LDAgQzYyLjIwNDYyMzUsMCA2NCwxLjc4ODczMTc1IDY0LDMuOTk1MjQ0MTkgTDY0LDUwLjYzODkwMjIgQzY0LDUxLjkyMzM2ODYgNjMuMzkzNzExNiw1My4wNjUxNTU2IDYyLjQ1MTM5MSw1My43OTU3NTQgQzYyLjQ0Mjc3NTIsNTMuODAzMjQzMyA2Mi40MzQxMDE5LDUzLjgxMDc0MDQgNjIuNDI1MzcwOSw1My44MTgyNDU0IEM2Mi40MjUzNzA5LDUzLjgxODI0NTQgNTAuMzI0Nzg2Myw2My44OTc3NDAyIDUwLjMyNDc4NjMsNjYuNjE3Mzk0NyBDNTAuMzI0Nzg2Myw4MC4yODgwNTQ0IDQ5Ljg0NDMwNDksMTA4LjAwMjAwNyA0OS44NDQzMDQ5LDEwOC4wMDIwMDcgQzQ5LjgwNzk2NjUsMTEwLjIxMDIzNCA0Ny45ODc0MjMyLDExMiA0NS43Nzg5MDg5LDExMiBMMTguNzY4MDk5NywxMTIgQzE2LjU1MzQzOTcsMTEyIDE0LjczOTQ0NTYsMTEwLjIwOTg0IDE0LjcwMjcwMzcsMTA4LjAwMTU2NiBDMTQuNzAyNzAzNywxMDguMDAxNTY2IDE0LjIyMjIyMjIsODAuMjg0NTc2MSAxNC4yMjIyMjIyLDY2LjYxMjE3NzMgQzE0LjIyMjIyMjIsNjMuODk0MjYxOSAyLjE0MDgxNDIyLDU0LjIzMjEzMzcgMi4xNDA4MTQyMiw1NC4yMzIxMzM3IEMyLjA3NjY0OTEzLDU0LjE3ODYyOTggMi4wMTU0ODExMSw1NC4xMjU1MTM0IDEuOTU3MjkzOTUsNTQuMDcyODMwNCBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc2NCcgaGVpZ2h0PScxMTInIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzEuMDAwMDAwLCA0NTIuMDAwMDAwKSc+XG5cdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyNCMkI0QjknIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nI0ZDRkNGQycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdG9iamVjdHMgOlxuXHRcdFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzExcHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDExIDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+TGlnaHRidWxiPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQ0LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0xpZ2h0YnVsYicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQ0LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNOCwxMC40MDAyOTA0IEM5Ljc4MDgzNzk1LDkuNDg5OTM0OTEgMTEsNy42MzczNDI3MyAxMSw1LjUgQzExLDIuNDYyNDMzODggOC41Mzc1NjYxMiwwIDUuNSwwIEMyLjQ2MjQzMzg4LDAgMCwyLjQ2MjQzMzg4IDAsNS41IEMwLDcuNjM3MzQyNzMgMS4yMTkxNjIwNSw5LjQ4OTkzNDkxIDMsMTAuNDAwMjkwNCBMMywxNC4wMDIwODY5IEMzLDE1LjEwMTczOTQgMy44OTc2MTYwMiwxNiA1LjAwNDg4MTUsMTYgTDUuOTk1MTE4NSwxNiBDNy4xMDYxMDAyLDE2IDgsMTUuMTA1NTAzOCA4LDE0LjAwMjA4NjkgTDgsMTAuNDAwMjkwNCBaJyBpZD0nT3ZhbC0xNycgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSczJyB5PScxMicgd2lkdGg9JzUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSc0JyB5PScxMy41JyB3aWR0aD0nMS41JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsOC41IEM1LDguNSAzLjQ5OTk5OTk5LDcuNTAwMDAwMDEgNCw3IEM0LjUwMDAwMDAxLDYuNDk5OTk5OTkgNSw3LjY2NjY2NjY3IDUuNSw4IEM1LjUsOCA2LjUsNi41MDAwMDAwMSA3LDcgQzcuNSw3LjQ5OTk5OTk5IDYsOC41IDYsOC41IEw2LDExIEw1LDExIEw1LDguNSBaJyBpZD0nUmVjdGFuZ2xlLTUyJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRzaGlmdCA6IHtcblx0XHRvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDIwIDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIxLjcwNTIzODgsMTMuMjA1MjM4OCBDMjEuMzE1NzQ2MiwxMi44MTU3NDYyIDIwLjY4NTc1NTksMTIuODE0MjQ0MSAyMC4yOTQ3NjEyLDEzLjIwNTIzODggTDExLjkxNjA3NjcsMjEuNTgzOTIzMyBDMTEuMTMzOTk5MSwyMi4zNjYwMDA5IDExLjM5ODI2MDYsMjMgMTIuNDk3OTEzMSwyMyBMMTYuNSwyMyBMMTYuNSwyOC4wMDkyMjIgQzE2LjUsMjguNTU2NDEzNiAxNi45NDYzMTE0LDI5IDE3LjQ5NzU0NDYsMjkgTDI0LjUwMjQ1NTQsMjkgQzI1LjA1MzM4NCwyOSAyNS41LDI4LjU0OTAyNDggMjUuNSwyOC4wMDkyMjIgTDI1LjUsMjMgTDI5LjUwMjA4NjksMjMgQzMwLjYwNTUwMzgsMjMgMzAuODY2ODI0LDIyLjM2NjgyNCAzMC4wODM5MjMzLDIxLjU4MzkyMzMgTDIxLjcwNTIzODgsMTMuMjA1MjM4OCBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDIwIDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMjkuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yMS42NzE5MDA4LDEyLjIzMjU4OTggQzIxLjMwMTAzMiwxMS44Mjc5OTE2IDIwLjY5NDY4OTIsMTEuODMzNDczMSAyMC4zMjg4MTk1LDEyLjIzMjU4OTggTDExLjY5NDcwMjMsMjEuNjUxMjk4MyBDMTAuNzU4NzQ0MSwyMi42NzIzMDggMTEuMTI4NTU0MSwyMy41IDEyLjUwOTc3NTEsMjMuNSBMMTUuOTk5OTk5OSwyMy41MDAwMDAyIEwxNS45OTk5OTk5LDI4LjAwMTQyNDEgQzE1Ljk5OTk5OTksMjguODI5MDY0OCAxNi42NzE2NTU5LDI5LjUwMDAwMDEgMTcuNDk3MTAxLDI5LjUwMDAwMDEgTDI0LjUwMjg5OTIsMjkuNTAwMDAwMSBDMjUuMzI5NzI1MywyOS41MDAwMDAxIDI2LjAwMDAwMDMsMjguODM0OTcwMyAyNi4wMDAwMDAzLDI4LjAwMTQyNDEgTDI2LjAwMDAwMDMsMjMuNTAwMDAwMSBMMjkuNDkwMjI1MSwyMy41MDAwMDAyIEMzMC44NzYzMzU3LDIzLjUwMDAwMDIgMzEuMjQzOTUyMSwyMi42NzUxOTE2IDMwLjMwNTQxNjEsMjEuNjUxMjk4NSBMMjEuNjcxOTAwOCwxMi4yMzI1ODk4IFogTTIxLjM0MTc0OCwxNC4zNjQ1MzE2IEMyMS4xNTMwMDU2LDE0LjE2MzIwNjQgMjAuODQzMzUxNSwxNC4xNjcwOTE0IDIwLjY1ODI1MTQsMTQuMzY0NTMxNiBMMTMuNSwyMS45OTk5OTk4IEwxNy41MDAwMDAxLDIxLjk5OTk5OTkgTDE3LjUwMDAwMDIsMjcuNTA4OTk1NiBDMTcuNTAwMDAwMiwyNy43ODAxNzAzIDE3LjczMjkwMjcsMjguMDAwMDAwOCAxOC4wMDM0MjI5LDI4LjAwMDAwMDggTDIzLjk5NjU3NywyOC4wMDAwMDA4IEMyNC4yNzQ2MDk3LDI4LjAwMDAwMDggMjQuNDk5OTk5NywyNy43NzIxMjAzIDI0LjQ5OTk5OTcsMjcuNTA4OTk1NiBMMjQuNDk5OTk5NywyMS45OTk5OTk5IEwyOC41LDIxLjk5OTk5OTkgTDIxLjM0MTc0OCwxNC4zNjQ1MzE2IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0c21pbGV5czogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+OkQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTg2LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSc6RCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoODcuMDAwMDAwLCAyMzAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nSGVhZCcgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzg5NDczNjg0JyBjeD0nNy41JyBjeT0nNy41JyByPSc3LjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjUsMTMuNTI2MzE1OCBDMTAuMjY4NjkwNywxMy41MjYzMTU4IDEyLjUxMzE1NzksMTAuMzY4NDIxMiAxMi41MTMxNTc5LDkuMTg0MjEwNDUgQzEyLjUxMzE1NzksNy42MDUyNjMxNyAxMS40Mzg5MDk4LDkuMTg0MjEwNDMgNy41LDkuMTg0MjEwNTMgQzMuNTYxMDkwMjMsOS4xODQyMTA2MiAyLjQ4Njg0MjExLDcuNjA1MjYzMTcgMi40ODY4NDIxMSw5LjE4NDIxMDQ1IEMyLjQ4Njg0MjExLDEwLjM2ODQyMSA0LjczMTMwOTM1LDEzLjUyNjMxNTggNy41LDEzLjUyNjMxNTggWiBNNy41LDEwLjk2MDUyNjMgQzguOTMyMzMwODMsMTEuMTU3ODk0NyAxMS43OTY5OTI1LDEwLjM2ODQyMSAxMS43OTY5OTI1LDkuNDQ0MjM1NTIgQzExLjc5Njk5MjUsOC43ODk0NzM2OCAxMC44NzYyMDg0LDkuNTc4OTQ3MjcgNy41LDkuNzc2MzE1NzkgQzQuMTIzNzkxNjIsOS41Nzg5NDc0MyAzLjIwMzAwODcyLDguNzg5NDczNjkgMy4yMDMwMDc1Miw5LjQ0NDIzNTUyIEMzLjIwMzAwNTgyLDEwLjM2ODQyMSA2LjA2NzY2OTE3LDExLjE1Nzg5NDcgNy41LDEwLjk2MDUyNjMgWicgaWQ9J1NtaWxlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuMjM2ODQyMTEsNi4zMjM2NTk4IEM1LjY0Mzc4ODc2LDYuMzIzNjU5OCA1Ljk3MzY4NDIxLDUuODgxODM1NTQgNS45NzM2ODQyMSw1LjMzNjgxNzY5IEM1Ljk3MzY4NDIxLDQuNzkxNzk5ODUgNS42NDM3ODg3Niw0LjM0OTk3NTU5IDUuMjM2ODQyMTEsNC4zNDk5NzU1OSBDNC44Mjk4OTU0NSw0LjM0OTk3NTU5IDQuNSw0Ljc5MTc5OTg1IDQuNSw1LjMzNjgxNzY5IEM0LjUsNS44ODE4MzU1NCA0LjgyOTg5NTQ1LDYuMzIzNjU5OCA1LjIzNjg0MjExLDYuMzIzNjU5OCBaIE05LjczNjg0MjExLDYuMzIzNjU5OCBDMTAuMTQzNzg4OCw2LjMyMzY1OTggMTAuNDczNjg0Miw1Ljg4MTgzNTU0IDEwLjQ3MzY4NDIsNS4zMzY4MTc2OSBDMTAuNDczNjg0Miw0Ljc5MTc5OTg1IDEwLjE0Mzc4ODgsNC4zNDk5NzU1OSA5LjczNjg0MjExLDQuMzQ5OTc1NTkgQzkuMzI5ODk1NDUsNC4zNDk5NzU1OSA5LDQuNzkxNzk5ODUgOSw1LjMzNjgxNzY5IEM5LDUuODgxODM1NTQgOS4zMjk4OTU0NSw2LjMyMzY1OTggOS43MzY4NDIxMSw2LjMyMzY1OTggWicgaWQ9J0V5ZXMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblxuXHRzeW1ib2xzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxN3B4JyB2aWV3Qm94PScwIDAgMTUgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5PYmplY3RzICZhbXA7IFN5bWJvbHM8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMwNC4wMDAwMDAsIC02MzguMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nT2JqZWN0cy0mYW1wOy1TeW1ib2xzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMDQuMDAwMDAwLCAyMzAuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RoaW5nJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMCcgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScyJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMTEnIHg9JzMnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzQnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjc1LDAuMTU5MjYzOTc4IEwxMS43NSwwIEwxMSwwIEwxMSw1LjA5MTQ5MyBDMTAuNTkzNDQsNC45NDIyMTM5MiAxMC4wNjM5NjYyLDQuOTY0NTMyMjQgOS41NTcxNTM5OSw1LjE5MDE3OTU3IEM4LjY5ODQ5MjkzLDUuNTcyNDgwMSA4LjIzMDAzODM1LDYuMzkzNjU2MjEgOC41MTA4MzE0MSw3LjAyNDMyNzc0IEM4Ljc5MTYyNDQ3LDcuNjU0OTk5MjggOS43MTUzMzQ1NCw3Ljg1NjM0Mzc1IDEwLjU3Mzk5NTYsNy40NzQwNDMyMSBDMTEuMjc2MTE4Myw3LjE2MTQzODAzIDExLjcxNzMzOTMsNi41NTUzODk3MiAxMS43MDEzNTk1LDYgTDExLjc1LDYgTDExLjc1LDEuMzkzODUwNTYgQzEyLjMxNzU5MDgsMS41OTU5MDAzNyAxMywyLjA4MTc0NTYgMTMsMy4yNSBDMTMsNC4yNSAxMi43NSw1LjUgMTIuNzUsNS41IEMxMi43NSw1LjUgMTMuNzUsNC43NSAxMy43NSwyLjUgQzEzLjc1LDEuMDIyNTYxMDEgMTIuNTY0MjY3NCwwLjQwNzQ3MzAxOSAxMS43NSwwLjE1OTI2Mzk3OCBaJyBpZD0nTm90ZScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGlkPScmYW1wOycgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRzcGFuIHg9JzAuMjUnIHk9JzE2Jz4mYW1wOzwvdHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGlkPSclJyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHNwYW4geD0nNy43NScgeT0nMTYnPiU8L3RzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0dHJhdmVsOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5UcmFuc3BvcnQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0MS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVHJhbnNwb3J0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDEuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsNiBMMSw2IEwxLDE1IEwwLDE1IEwwLDYgWiBNMTUsNCBMMTYsNCBMMTYsMTUgTDE1LDE1IEwxNSw0IFogTTMuNSwwIEw0LjUsMCBMNC41LDcgTDMuNSw3IEwzLjUsMCBaIE0xLDYgTDMuNSw2IEwzLjUsNyBMMSw3IEwxLDYgWiBNNC41LDAgTDkuNSwwIEw5LjUsMSBMNC41LDEgTDQuNSwwIFogTTkuNSwwIEwxMC41LDAgTDEwLjUsNiBMOS41LDYgTDkuNSwwIFogTTEwLjUsNCBMMTUsNCBMMTUsNSBMMTAuNSw1IEwxMC41LDQgWicgaWQ9J1NreWxpbmUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nV2luZG93cycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScwJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc0JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nQ2FyJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjUwMDAwMCwgNi41MDAwMDApJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LjUsOCBMMi41LDggTDIuNSw5LjUgTDAuNSw5LjUgTDAuNSw3Ljg2ODExNDUgQzAuMjAxMjAyMTkyLDcuNjk1ODI3MDIgMCw3LjM3MDkxMzYzIDAsNi45OTA2MzExIEwwLDUuMDA5MzY4OSBDMCw0LjQ1MTkwOTg1IDAuNDQ0ODM2OTc0LDQgMC45OTU1Nzc0OTksNCBMMTAuMDA0NDIyNSw0IEMxMC41NTQyNjQ4LDQgMTEsNC40NDMzNTMxOCAxMSw1LjAwOTM2ODkgTDExLDYuOTkwNjMxMSBDMTEsNy4zNjUzMzE1IDEwLjc5OTAyNDQsNy42OTIzNDUxOSAxMC41LDcuODY2NDkwMDIgTDEwLjUsOS41IEw4LjUsOS41IEw4LjUsOCBaIE0xLjc1LDYuNSBDMi4xNjQyMTM1Niw2LjUgMi41LDYuMTY0MjEzNTYgMi41LDUuNzUgQzIuNSw1LjMzNTc4NjQ0IDIuMTY0MjEzNTYsNSAxLjc1LDUgQzEuMzM1Nzg2NDQsNSAxLDUuMzM1Nzg2NDQgMSw1Ljc1IEMxLDYuMTY0MjEzNTYgMS4zMzU3ODY0NCw2LjUgMS43NSw2LjUgWiBNOS4yNSw2LjUgQzkuNjY0MjEzNTYsNi41IDEwLDYuMTY0MjEzNTYgMTAsNS43NSBDMTAsNS4zMzU3ODY0NCA5LjY2NDIxMzU2LDUgOS4yNSw1IEM4LjgzNTc4NjQ0LDUgOC41LDUuMzM1Nzg2NDQgOC41LDUuNzUgQzguNSw2LjE2NDIxMzU2IDguODM1Nzg2NDQsNi41IDkuMjUsNi41IFogTTAuNSw3IEwxMC41LDcgTDEwLjUsNy41IEwwLjUsNy41IEwwLjUsNyBaIE0zLDYuNSBMOCw2LjUgTDgsNyBMMyw3IEwzLDYuNSBaJyBpZD0nQm9keScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEuNSw0LjUgTDEuNSwzIEMxLjUsMS4zNDMxNDU3NSAyLjgzOTAyMDEzLDAgNC41MDE2NjU0NywwIEw2LjQ5ODMzNDUzLDAgQzguMTU2MTA4NTksMCA5LjUsMS4zNDY1MTcxMiA5LjUsMyBMOS41LDUnIGlkPSdSb29mJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG59XG5cblxuZXhwb3J0cy5mcmFtZXJGcmFtZXMgPVxuXHQ2NDA6MlxuXHQ3NTA6MlxuXHQ3Njg6MlxuXHQxMDgwOjNcblx0MTI0MjozXG5cdDE0NDA6NFxuXHQxNTM2OjJcblxuIyBEZXZpY2UgZnJhbWVzXG5leHBvcnRzLnJlYWxEZXZpY2VzID1cblx0MzIwOlxuXHRcdDQ4MDpcblx0XHRcdG5hbWU6XCJpUGhvbmVcIlxuXHRcdFx0d2lkdGg6MzIwXG5cdFx0XHRoZWlnaHQ6NDgwXG5cdFx0XHRzY2FsZToxXG5cdDQ4MDpcblx0XHQ4NTQ6XG5cdFx0XHRuYW1lOlwiQW5kcm9pZCBPbmVcIlxuXHRcdFx0d2lkdGg6NDgwXG5cdFx0XHRoZWlnaHQ6ODU0XG5cdFx0XHRzY2FsZToxLjVcblxuXHQ2NDA6XG5cdFx0OTYwOlxuXHRcdFx0bmFtZTpcImlQaG9uZSA0XCJcblx0XHRcdHdpZHRoOjY0MFxuXHRcdFx0aGVpZ2h0Ojk2MFxuXHRcdFx0c2NhbGU6MlxuXHRcdDExMzY6XG5cdFx0XHRuYW1lOlwiaVBob25lIDVcIlxuXHRcdFx0d2lkdGg6NjQwXG5cdFx0XHRoZWlnaHQ6MTEzNlxuXHRcdFx0c2NhbGU6MlxuXHQ3MjA6XG5cdFx0MTI4MDpcblx0XHRcdG5hbWU6XCJYSERQSVwiXG5cdFx0XHR3aWR0aDo3MjBcblx0XHRcdGhlaWdodDoxMjgwXG5cdFx0XHRzY2FsZToyXG5cdDc1MDpcblx0XHQxMTE4OlxuXHRcdFx0bmFtZTpcImlQaG9uZSA2XCJcblx0XHRcdHdpZHRoOjc1MFxuXHRcdFx0aGVpZ2h0OjExMThcblx0XHRcdHNjYWxlOjJcblx0XHQxMzM0OlxuXHRcdFx0bmFtZTpcImlQaG9uZSA2XCJcblx0XHRcdHdpZHRoOjc1MFxuXHRcdFx0aGVpZ2h0OjEzMzRcblx0XHRcdHNjYWxlOjJcblx0NzY4OlxuXHRcdDEwMjQ6XG5cdFx0XHRuYW1lOlwiaVBhZFwiXG5cdFx0XHR3aWR0aDo3Njhcblx0XHRcdGhlaWdodDoxMDI0XG5cdFx0XHRzY2FsZToxXG5cdFx0MTI4MDpcblx0XHRcdG5hbWU6XCJOZXh1cyA0XCJcblx0XHRcdHdpZHRoOjc2OFxuXHRcdFx0aGVpZ2h0OjEyODBcblx0XHRcdHNjYWxlOjJcblx0ODAwOlxuXHRcdDEyODA6XG5cdFx0XHRuYW1lOlwiTmV4dXMgN1wiXG5cdFx0XHR3aWR0aDo4MDBcblx0XHRcdGhlaWdodDoxMjgwXG5cdFx0XHRzY2FsZToxXG5cdDEwODA6XG5cdFx0MTkyMDpcblx0XHRcdG5hbWU6XCJYWEhEUElcIlxuXHRcdFx0d2lkdGg6MTA4MFxuXHRcdFx0aGVpZ2h0OjE5MjBcblx0XHRcdHNjYWxlOjNcblx0MTIwMDpcblx0XHQxOTIwOlxuXHRcdFx0bmFtZTpcIk5leHVzIDdcIlxuXHRcdFx0d2lkdGg6MTIwMFxuXHRcdFx0aGVpZ2h0OjE5MjBcblx0XHRcdHNjYWxlOjJcblx0MTI0Mjpcblx0XHQyMjA4OlxuXHRcdFx0bmFtZTpcImlQaG9uZSA2IFBsdXNcIlxuXHRcdFx0d2lkdGg6MTI0MlxuXHRcdFx0aGVpZ2h0OjIyMDhcblx0XHRcdHNjYWxlOjNcblx0MTQ0MDpcblx0XHQyNTYwOlxuXHRcdFx0bmFtZTpcIlhYWEhEUElcIlxuXHRcdFx0d2lkdGg6MTQ0MFxuXHRcdFx0aGVpZ2h0OjI1NjBcblx0XHRcdHNjYWxlOjRcblx0MTQ0MTpcblx0XHQyNTYxOlxuXHRcdFx0bmFtZTpcIk5leHVzIDZcIlxuXHRcdFx0d2lkdGg6MTQ0MFxuXHRcdFx0aGVpZ2h0OjI1NjBcblx0XHRcdHNjYWxlOjRcblx0MTUzNjpcblx0XHQyMDQ4OlxuXHRcdFx0bmFtZTpcImlQYWRcIlxuXHRcdFx0d2lkdGg6MTUzNlxuXHRcdFx0aGVpZ2h0OjIwNDhcblx0XHRcdHNjYWxlOjJcblx0MTYwMDpcblx0XHQyMDU2OlxuXHRcdFx0bmFtZTpcIk5leHVzIDEwXCJcblx0XHRcdHdpZHRoOjE2MDBcblx0XHRcdGhlaWdodDoyMDU2XG5cdFx0XHRzY2FsZToyXG5cdDIwNDg6XG5cdFx0MTUzNjpcblx0XHRcdG5hbWU6XCJOZXh1cyA5XCJcblx0XHRcdHdpZHRoOjIwNDhcblx0XHRcdGhlaWdodDoxNTM2XG5cdFx0XHRzY2FsZToyXG5cdFx0MjczMjpcblx0XHRcdG5hbWU6XCJpUGFkIFByb1wiXG5cdFx0XHR3aWR0aDoyMDQ4XG5cdFx0XHRoZWlnaHQ6MjczMlxuXHRcdFx0c2NhbGU6MlxuXHQyNTYwOlxuXHRcdDE2MDA6XG5cdFx0XHRuYW1lOlwiTmV4dXMgMTBcIlxuXHRcdFx0d2lkdGg6MjU2MFxuXHRcdFx0aGVpZ2h0OjE2MDBcblx0XHRcdHNjYWxlOjJcblx0MjczMjpcblx0XHQyMDQ4OlxuXHRcdFx0bmFtZTpcImlQYWQgUHJvXCJcblx0XHRcdHdpZHRoOjI3MzJcblx0XHRcdGhlaWdodDoyMDQ4XG5cdFx0XHRzY2FsZToyXG5cblxuZXhwb3J0cy5jb2xvcnMgPVxuXHRyZWQ6XCIjRjQ0MzM2XCJcblx0cmVkNTA6XCIjRkZFQkVFXCJcblx0cmVkMTAwOlwiI0ZGQ0REMlwiXG5cdHJlZDIwMDpcIiNFRjlBOUFcIlxuXHRyZWQzMDA6XCIjRTU3MzczXCJcblx0cmVkNDAwOlwiI0VGNTM1MFwiXG5cdHJlZDUwMDpcIiNGNDQzMzZcIlxuXHRyZWQ2MDA6XCIjRTUzOTM1XCJcblx0cmVkNzAwOlwiI0QzMkYyRlwiXG5cdHJlZDgwMDpcIiNDNjI4MjhcIlxuXHRyZWQ5MDA6XCIjQjcxQzFDXCJcblx0cmVkQTEwMDpcIiNGRjhBODBcIlxuXHRyZWRBMjAwOlwiI0ZGNTI1MlwiXG5cdHJlZEE0MDA6XCIjRkYxNzQ0XCJcblx0cmVkQTcwMDpcIiNENTAwMDBcIlxuXHRwaW5rOlwiI0U5MUU2M1wiXG5cdHBpbms1MDpcIiNGQ0U0RUNcIlxuXHRwaW5rMTAwOlwiI0Y4QkJEMFwiXG5cdHBpbmsyMDA6XCIjRjQ4RkIxXCJcblx0cGluazMwMDpcIiNGMDYyOTJcIlxuXHRwaW5rNDAwOlwiI0VDNDA3QVwiXG5cdHBpbms1MDA6XCIjRTkxRTYzXCJcblx0cGluazYwMDpcIiNEODFCNjBcIlxuXHRwaW5rNzAwOlwiI0MyMTg1QlwiXG5cdHBpbms4MDA6XCIjQUQxNDU3XCJcblx0cGluazkwMDpcIiM4ODBFNEZcIlxuXHRwaW5rQTEwMDpcIiNGRjgwQUJcIlxuXHRwaW5rQTIwMDpcIiNGRjQwODFcIlxuXHRwaW5rQTQwMDpcIiNGNTAwNTdcIlxuXHRwaW5rQTcwMDpcIiNDNTExNjJcIlxuXHRwdXJwbGU6XCIjOUMyN0IwXCJcblx0cHVycGxlNTA6XCIjRjNFNUY1XCJcblx0cHVycGxlMTAwOlwiI0UxQkVFN1wiXG5cdHB1cnBsZTIwMDpcIiNDRTkzRDhcIlxuXHRwdXJwbGUzMDA6XCIjQkE2OEM4XCJcblx0cHVycGxlNDAwOlwiI0FCNDdCQ1wiXG5cdHB1cnBsZTUwMDpcIiM5QzI3QjBcIlxuXHRwdXJwbGU2MDA6XCIjOEUyNEFBXCJcblx0cHVycGxlNzAwOlwiIzdCMUZBMlwiXG5cdHB1cnBsZTgwMDpcIiM2QTFCOUFcIlxuXHRwdXJwbGU5MDA6XCIjNEExNDhDXCJcblx0cHVycGxlQTEwMDpcIiNFQTgwRkNcIlxuXHRwdXJwbGVBMjAwOlwiI0UwNDBGQlwiXG5cdHB1cnBsZUE0MDA6XCIjRDUwMEY5XCJcblx0cHVycGxlQTcwMDpcIiNBQTAwRkZcIlxuXHRkZWVwUHVycGxlOlwiIzY3M0FCN1wiXG5cdGRlZXBQdXJwbGU1MDpcIiNFREU3RjZcIlxuXHRkZWVwUHVycGxlMTAwOlwiI0QxQzRFOVwiXG5cdGRlZXBQdXJwbGUyMDA6XCIjQjM5RERCXCJcblx0ZGVlcFB1cnBsZTMwMDpcIiM5NTc1Q0RcIlxuXHRkZWVwUHVycGxlNDAwOlwiIzdFNTdDMlwiXG5cdGRlZXBQdXJwbGU1MDA6XCIjNjczQUI3XCJcblx0ZGVlcFB1cnBsZTYwMDpcIiM1RTM1QjFcIlxuXHRkZWVwUHVycGxlNzAwOlwiIzUxMkRBOFwiXG5cdGRlZXBQdXJwbGU4MDA6XCIjNDUyN0EwXCJcblx0ZGVlcFB1cnBsZTkwMDpcIiMzMTFCOTJcIlxuXHRkZWVwUHVycGxlQTEwMDpcIiNCMzg4RkZcIlxuXHRkZWVwUHVycGxlQTIwMDpcIiM3QzRERkZcIlxuXHRkZWVwUHVycGxlQTQwMDpcIiM2NTFGRkZcIlxuXHRkZWVwUHVycGxlQTcwMDpcIiM2MjAwRUFcIlxuXHRpbmRpZ286XCIjM0Y1MUI1XCJcblx0aW5kaWdvNTA6XCIjRThFQUY2XCJcblx0aW5kaWdvMTAwOlwiI0M1Q0FFOVwiXG5cdGluZGlnbzIwMDpcIiM5RkE4REFcIlxuXHRpbmRpZ28zMDA6XCIjNzk4NkNCXCJcblx0aW5kaWdvNDAwOlwiIzVDNkJDMFwiXG5cdGluZGlnbzUwMDpcIiMzRjUxQjVcIlxuXHRpbmRpZ282MDA6XCIjMzk0OUFCXCJcblx0aW5kaWdvNzAwOlwiIzMwM0Y5RlwiXG5cdGluZGlnbzgwMDpcIiMyODM1OTNcIlxuXHRpbmRpZ285MDA6XCIjMUEyMzdFXCJcblx0aW5kaWdvQTEwMDpcIiM4QzlFRkZcIlxuXHRpbmRpZ29BMjAwOlwiIzUzNkRGRVwiXG5cdGluZGlnb0E0MDA6XCIjM0Q1QUZFXCJcblx0aW5kaWdvQTcwMDpcIiMzMDRGRkVcIlxuXHRibHVlOlwiIzIxOTZGM1wiXG5cdGJsdWU1MDpcIiNFM0YyRkRcIlxuXHRibHVlMTAwOlwiI0JCREVGQlwiXG5cdGJsdWUyMDA6XCIjOTBDQUY5XCJcblx0Ymx1ZTMwMDpcIiM2NEI1RjZcIlxuXHRibHVlNDAwOlwiIzQyQTVGNVwiXG5cdGJsdWU1MDA6XCIjMjE5NkYzXCJcblx0Ymx1ZTYwMDpcIiMxRTg4RTVcIlxuXHRibHVlNzAwOlwiIzE5NzZEMlwiXG5cdGJsdWU4MDA6XCIjMTU2NUMwXCJcblx0Ymx1ZTkwMDpcIiMwRDQ3QTFcIlxuXHRibHVlQTEwMDpcIiM4MkIxRkZcIlxuXHRibHVlQTIwMDpcIiM0NDhBRkZcIlxuXHRibHVlQTQwMDpcIiMyOTc5RkZcIlxuXHRibHVlQTcwMDpcIiMyOTYyRkZcIlxuXHRsaWdodEJsdWU6XCIjMDNBOUY0XCJcblx0bGlnaHRCbHVlNTA6XCIjRTFGNUZFXCJcblx0bGlnaHRCbHVlMTAwOlwiI0IzRTVGQ1wiXG5cdGxpZ2h0Qmx1ZTIwMDpcIiM4MUQ0RkFcIlxuXHRsaWdodEJsdWUzMDA6XCIjNEZDM0Y3XCJcblx0bGlnaHRCbHVlNDAwOlwiIzI5QjZGNlwiXG5cdGxpZ2h0Qmx1ZTUwMDpcIiMwM0E5RjRcIlxuXHRsaWdodEJsdWU2MDA6XCIjMDM5QkU1XCJcblx0bGlnaHRCbHVlNzAwOlwiIzAyODhEMVwiXG5cdGxpZ2h0Qmx1ZTgwMDpcIiMwMjc3QkRcIlxuXHRsaWdodEJsdWU5MDA6XCIjMDE1NzlCXCJcblx0bGlnaHRCbHVlQTEwMDpcIiM4MEQ4RkZcIlxuXHRsaWdodEJsdWVBMjAwOlwiIzQwQzRGRlwiXG5cdGxpZ2h0Qmx1ZUE0MDA6XCIjMDBCMEZGXCJcblx0bGlnaHRCbHVlQTcwMDpcIiMwMDkxRUFcIlxuXHRjeWFuOlwiIzAwQkNENFwiXG5cdGN5YW41MDpcIiNFMEY3RkFcIlxuXHRjeWFuMTAwOlwiI0IyRUJGMlwiXG5cdGN5YW4yMDA6XCIjODBERUVBXCJcblx0Y3lhbjMwMDpcIiM0REQwRTFcIlxuXHRjeWFuNDAwOlwiIzI2QzZEQVwiXG5cdGN5YW41MDA6XCIjMDBCQ0Q0XCJcblx0Y3lhbjYwMDpcIiMwMEFDQzFcIlxuXHRjeWFuNzAwOlwiIzAwOTdBN1wiXG5cdGN5YW44MDA6XCIjMDA4MzhGXCJcblx0Y3lhbjkwMDpcIiMwMDYwNjRcIlxuXHRjeWFuQTEwMDpcIiM4NEZGRkZcIlxuXHRjeWFuQTIwMDpcIiMxOEZGRkZcIlxuXHRjeWFuQTQwMDpcIiMwMEU1RkZcIlxuXHRjeWFuQTcwMDpcIiMwMEI4RDRcIlxuXHR0ZWFsOlwiIzAwOTY4OFwiXG5cdHRlYWw1MDpcIiNFMEYyRjFcIlxuXHR0ZWFsMTAwOlwiI0IyREZEQlwiXG5cdHRlYWwyMDA6XCIjODBDQkM0XCJcblx0dGVhbDMwMDpcIiM0REI2QUNcIlxuXHR0ZWFsNDAwOlwiIzI2QTY5QVwiXG5cdHRlYWw1MDA6XCIjMDA5Njg4XCJcblx0dGVhbDYwMDpcIiMwMDg5N0JcIlxuXHR0ZWFsNzAwOlwiIzAwNzk2QlwiXG5cdHRlYWw4MDA6XCIjMDA2OTVDXCJcblx0dGVhbDkwMDpcIiMwMDRENDBcIlxuXHR0ZWFsQTEwMDpcIiNBN0ZGRUJcIlxuXHR0ZWFsQTIwMDpcIiM2NEZGREFcIlxuXHR0ZWFsQTQwMDpcIiMxREU5QjZcIlxuXHR0ZWFsQTcwMDpcIiMwMEJGQTVcIlxuXHRncmVlbjpcIiM0Q0FGNTBcIlxuXHRncmVlbjUwOlwiI0U4RjVFOVwiXG5cdGdyZWVuMTAwOlwiI0M4RTZDOVwiXG5cdGdyZWVuMjAwOlwiI0E1RDZBN1wiXG5cdGdyZWVuMzAwOlwiIzgxQzc4NFwiXG5cdGdyZWVuNDAwOlwiIzY2QkI2QVwiXG5cdGdyZWVuNTAwOlwiIzRDQUY1MFwiXG5cdGdyZWVuNjAwOlwiIzQzQTA0N1wiXG5cdGdyZWVuNzAwOlwiIzM4OEUzQ1wiXG5cdGdyZWVuODAwOlwiIzJFN0QzMlwiXG5cdGdyZWVuOTAwOlwiIzFCNUUyMFwiXG5cdGdyZWVuQTEwMDpcIiNCOUY2Q0FcIlxuXHRncmVlbkEyMDA6XCIjNjlGMEFFXCJcblx0Z3JlZW5BNDAwOlwiIzAwRTY3NlwiXG5cdGdyZWVuQTcwMDpcIiMwMEM4NTNcIlxuXHRsaWdodEdyZWVuOlwiIzhCQzM0QVwiXG5cdGxpZ2h0R3JlZW41MDpcIiNGMUY4RTlcIlxuXHRsaWdodEdyZWVuMTAwOlwiI0RDRURDOFwiXG5cdGxpZ2h0R3JlZW4yMDA6XCIjQzVFMUE1XCJcblx0bGlnaHRHcmVlbjMwMDpcIiNBRUQ1ODFcIlxuXHRsaWdodEdyZWVuNDAwOlwiIzlDQ0M2NVwiXG5cdGxpZ2h0R3JlZW41MDA6XCIjOEJDMzRBXCJcblx0bGlnaHRHcmVlbjYwMDpcIiM3Q0IzNDJcIlxuXHRsaWdodEdyZWVuNzAwOlwiIzY4OUYzOFwiXG5cdGxpZ2h0R3JlZW44MDA6XCIjNTU4QjJGXCJcblx0bGlnaHRHcmVlbjkwMDpcIiMzMzY5MUVcIlxuXHRsaWdodEdyZWVuQTEwMDpcIiNDQ0ZGOTBcIlxuXHRsaWdodEdyZWVuQTIwMDpcIiNCMkZGNTlcIlxuXHRsaWdodEdyZWVuQTQwMDpcIiM3NkZGMDNcIlxuXHRsaWdodEdyZWVuQTcwMDpcIiM2NEREMTdcIlxuXHRsaW1lOlwiI0NEREMzOVwiXG5cdGxpbWU1MDpcIiNGOUZCRTdcIlxuXHRsaW1lMTAwOlwiI0YwRjRDM1wiXG5cdGxpbWUyMDA6XCIjRTZFRTlDXCJcblx0bGltZTMwMDpcIiNEQ0U3NzVcIlxuXHRsaW1lNDAwOlwiI0Q0RTE1N1wiXG5cdGxpbWU1MDA6XCIjQ0REQzM5XCJcblx0bGltZTYwMDpcIiNDMENBMzNcIlxuXHRsaW1lNzAwOlwiI0FGQjQyQlwiXG5cdGxpbWU4MDA6XCIjOUU5RDI0XCJcblx0bGltZTkwMDpcIiM4Mjc3MTdcIlxuXHRsaW1lQTEwMDpcIiNGNEZGODFcIlxuXHRsaW1lQTIwMDpcIiNFRUZGNDFcIlxuXHRsaW1lQTQwMDpcIiNDNkZGMDBcIlxuXHRsaW1lQTcwMDpcIiNBRUVBMDBcIlxuXHR5ZWxsb3c6XCIjRkZFQjNCXCJcblx0eWVsbG93NTA6XCIjRkZGREU3XCJcblx0eWVsbG93MTAwOlwiI0ZGRjlDNFwiXG5cdHllbGxvdzIwMDpcIiNGRkY1OURcIlxuXHR5ZWxsb3czMDA6XCIjRkZGMTc2XCJcblx0eWVsbG93NDAwOlwiI0ZGRUU1OFwiXG5cdHllbGxvdzUwMDpcIiNGRkVCM0JcIlxuXHR5ZWxsb3c2MDA6XCIjRkREODM1XCJcblx0eWVsbG93NzAwOlwiI0ZCQzAyRFwiXG5cdHllbGxvdzgwMDpcIiNGOUE4MjVcIlxuXHR5ZWxsb3c5MDA6XCIjRjU3RjE3XCJcblx0eWVsbG93QTEwMDpcIiNGRkZGOERcIlxuXHR5ZWxsb3dBMjAwOlwiI0ZGRkYwMFwiXG5cdHllbGxvd0E0MDA6XCIjRkZFQTAwXCJcblx0eWVsbG93QTcwMDpcIiNGRkQ2MDBcIlxuXHRhbWJlcjpcIiNGRkMxMDdcIlxuXHRhbWJlcjUwOlwiI0ZGRjhFMVwiXG5cdGFtYmVyMTAwOlwiI0ZGRUNCM1wiXG5cdGFtYmVyMjAwOlwiI0ZGRTA4MlwiXG5cdGFtYmVyMzAwOlwiI0ZGRDU0RlwiXG5cdGFtYmVyNDAwOlwiI0ZGQ0EyOFwiXG5cdGFtYmVyNTAwOlwiI0ZGQzEwN1wiXG5cdGFtYmVyNjAwOlwiI0ZGQjMwMFwiXG5cdGFtYmVyNzAwOlwiI0ZGQTAwMFwiXG5cdGFtYmVyODAwOlwiI0ZGOEYwMFwiXG5cdGFtYmVyOTAwOlwiI0ZGNkYwMFwiXG5cdGFtYmVyQTEwMDpcIiNGRkU1N0ZcIlxuXHRhbWJlckEyMDA6XCIjRkZENzQwXCJcblx0YW1iZXJBNDAwOlwiI0ZGQzQwMFwiXG5cdGFtYmVyQTcwMDpcIiNGRkFCMDBcIlxuXHRvcmFuZ2U6XCIjRkY5ODAwXCJcblx0b3JhbmdlNTA6XCIjRkZGM0UwXCJcblx0b3JhbmdlMTAwOlwiI0ZGRTBCMlwiXG5cdG9yYW5nZTIwMDpcIiNGRkNDODBcIlxuXHRvcmFuZ2UzMDA6XCIjRkZCNzREXCJcblx0b3JhbmdlNDAwOlwiI0ZGQTcyNlwiXG5cdG9yYW5nZTUwMDpcIiNGRjk4MDBcIlxuXHRvcmFuZ2U2MDA6XCIjRkI4QzAwXCJcblx0b3JhbmdlNzAwOlwiI0Y1N0MwMFwiXG5cdG9yYW5nZTgwMDpcIiNFRjZDMDBcIlxuXHRvcmFuZ2U5MDA6XCIjRTY1MTAwXCJcblx0b3JhbmdlQTEwMDpcIiNGRkQxODBcIlxuXHRvcmFuZ2VBMjAwOlwiI0ZGQUI0MFwiXG5cdG9yYW5nZUE0MDA6XCIjRkY5MTAwXCJcblx0b3JhbmdlQTcwMDpcIiNGRjZEMDBcIlxuXHRkZWVwT3JhbmdlOlwiI0ZGNTcyMlwiXG5cdGRlZXBPcmFuZ2U1MDpcIiNGQkU5RTdcIlxuXHRkZWVwT3JhbmdlMTAwOlwiI0ZGQ0NCQ1wiXG5cdGRlZXBPcmFuZ2UyMDA6XCIjRkZBQjkxXCJcblx0ZGVlcE9yYW5nZTMwMDpcIiNGRjhBNjVcIlxuXHRkZWVwT3JhbmdlNDAwOlwiI0ZGNzA0M1wiXG5cdGRlZXBPcmFuZ2U1MDA6XCIjRkY1NzIyXCJcblx0ZGVlcE9yYW5nZTYwMDpcIiNGNDUxMUVcIlxuXHRkZWVwT3JhbmdlNzAwOlwiI0U2NEExOVwiXG5cdGRlZXBPcmFuZ2U4MDA6XCIjRDg0MzE1XCJcblx0ZGVlcE9yYW5nZTkwMDpcIiNCRjM2MENcIlxuXHRkZWVwT3JhbmdlQTEwMDpcIiNGRjlFODBcIlxuXHRkZWVwT3JhbmdlQTIwMDpcIiNGRjZFNDBcIlxuXHRkZWVwT3JhbmdlQTQwMDpcIiNGRjNEMDBcIlxuXHRkZWVwT3JhbmdlQTcwMDpcIiNERDJDMDBcIlxuXHRicm93bjpcIiM3OTU1NDhcIlxuXHRicm93bjUwOlwiI0VGRUJFOVwiXG5cdGJyb3duMTAwOlwiI0Q3Q0NDOFwiXG5cdGJyb3duMjAwOlwiI0JDQUFBNFwiXG5cdGJyb3duMzAwOlwiI0ExODg3RlwiXG5cdGJyb3duNDAwOlwiIzhENkU2M1wiXG5cdGJyb3duNTAwOlwiIzc5NTU0OFwiXG5cdGJyb3duNjAwOlwiIzZENEM0MVwiXG5cdGJyb3duNzAwOlwiIzVENDAzN1wiXG5cdGJyb3duODAwOlwiIzRFMzQyRVwiXG5cdGJyb3duOTAwOlwiIzNFMjcyM1wiXG5cdGdyZXk6XCIjOUU5RTlFXCJcblx0Z3JleTUwOlwiI0ZBRkFGQVwiXG5cdGdyZXkxMDA6XCIjRjVGNUY1XCJcblx0Z3JleTIwMDpcIiNFRUVFRUVcIlxuXHRncmV5MzAwOlwiI0UwRTBFMFwiXG5cdGdyZXk0MDA6XCIjQkRCREJEXCJcblx0Z3JleTUwMDpcIiM5RTlFOUVcIlxuXHRncmV5NjAwOlwiIzc1NzU3NVwiXG5cdGdyZXk3MDA6XCIjNjE2MTYxXCJcblx0Z3JleTgwMDpcIiM0MjQyNDJcIlxuXHRncmV5OTAwOlwiIzIxMjEyMVwiXG5cdGJsdWVHcmV5OlwiIzYwN0Q4QlwiXG5cdGJsdWVHcmV5NTA6XCIjRUNFRkYxXCJcblx0Ymx1ZUdyZXkxMDA6XCIjQ0ZEOERDXCJcblx0Ymx1ZUdyZXkyMDA6XCIjQjBCRUM1XCJcblx0Ymx1ZUdyZXkzMDA6XCIjOTBBNEFFXCJcblx0Ymx1ZUdyZXk0MDA6XCIjNzg5MDlDXCJcblx0Ymx1ZUdyZXk1MDA6XCIjNjA3RDhCXCJcblx0Ymx1ZUdyZXk2MDA6XCIjNTQ2RTdBXCJcblx0Ymx1ZUdyZXk3MDA6XCIjNDU1QTY0XCJcblx0Ymx1ZUdyZXk4MDA6XCIjMzc0NzRGXCJcblx0Ymx1ZUdyZXk5MDA6XCIjMjYzMjM4XCJcblx0YmxhY2s6XCIjMDAwMDAwXCJcblx0d2hpdGU6XCIjRkZGRkZGXCJcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdG5hdmJhciA9IG5ldyBMYXllclxuXHRcdGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCJcblxuXHRuYXZiYXIudHlwZSA9IFwibmF2YmFyXCJcblxuXHRuYXZiYXIuY29uc3RyYWludHMgPVxuXHRcdGJvdHRvbTotMVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6NDhcblxuXHRzdmdIb21lID0gbS51dGlscy5zdmcobS5hc3NldHMuaG9tZSlcblx0c3ZnQmFjayA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmJhY2spXG5cblx0aG9tZUJ1dHRvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6bmF2YmFyXG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMjEpXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJob21lXCJcblx0XHRjbGlwOnRydWVcblxuXHRob21lQnV0dG9uLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6M1xuXHRcdGhlaWdodDo0MlxuXHRcdHdpZHRoOjk0XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRob21lSWNvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6aG9tZUJ1dHRvblxuXHRcdHdpZHRoOnN2Z0hvbWUud2lkdGhcblx0XHRoZWlnaHQ6c3ZnSG9tZS5oZWlnaHRcblx0XHRodG1sOnN2Z0hvbWUuc3ZnXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJpY29uXCJcblxuXHRob21lSWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXG5cdHJlY2VudEJ1dHRvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6bmF2YmFyXG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMjEpXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJyZWNlbnRcIlxuXHRcdGNsaXA6dHJ1ZVxuXG5cdHJlY2VudEJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0dG9wOjNcblx0XHRoZWlnaHQ6NDJcblx0XHR3aWR0aDo5NFxuXHRcdGxlYWRpbmc6W2hvbWVCdXR0b24sIDZdXG5cblx0cmVjZW50SWNvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6cmVjZW50QnV0dG9uXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGJvcmRlckNvbG9yOlwid2hpdGVcIlxuXHRcdGJvcmRlcldpZHRoOm0udXRpbHMucHgoMilcblx0XHRib3JkZXJSYWRpdXM6bS51dGlscy5weCgyKVxuXHRcdG5hbWU6XCJpY29uXCJcblxuXHRyZWNlbnRJY29uLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0d2lkdGg6MTZcblx0XHRoZWlnaHQ6MTZcblxuXHRiYWNrQnV0dG9uID0gbmV3IExheWVyXG5cdFx0c3VwZXJMYXllcjpuYXZiYXJcblx0XHRib3JkZXJSYWRpdXM6bS51dGlscy5weCgyMSlcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcImJhY2tcIlxuXHRcdGNsaXA6dHJ1ZVxuXG5cdGJhY2tCdXR0b24uY29uc3RyYWludHMgPVxuXHRcdHRvcDozXG5cdFx0aGVpZ2h0OjQyXG5cdFx0d2lkdGg6OTRcblx0XHR0cmFpbGluZzpbaG9tZUJ1dHRvbiwgNl1cblxuXG5cdGJhY2tJY29uID0gbmV3IExheWVyXG5cdFx0c3VwZXJMYXllcjpiYWNrQnV0dG9uXG5cdFx0d2lkdGg6c3ZnQmFjay53aWR0aFxuXHRcdGhlaWdodDpzdmdCYWNrLmhlaWdodFxuXHRcdGh0bWw6c3ZnQmFjay5zdmdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcImljb25cIlxuXG5cdGJhY2tJY29uLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OltuYXZiYXIsIGhvbWVCdXR0b24sIHJlY2VudEJ1dHRvbiwgYmFja0J1dHRvbiwgaG9tZUljb24sIGJhY2tJY29uLCByZWNlbnRJY29uXVxuXG5cdG0udXRpbHMuaW5reVxuXHRcdGxheWVyOmhvbWVCdXR0b25cblx0XHRtb3ZlVG9UYXA6ZmFsc2Vcblx0XHRjb2xvcjogXCJ3aGl0ZVwiXG5cdFx0c2NhbGU6IDIwXG5cdFx0Y3VydmU6IFwiYmV6aWVyLWN1cnZlKDEsIDAuNCwgMC40LCAxLjApXCJcblx0XHRvcGFjaXR5OiAuM1xuXHRtLnV0aWxzLmlua3lcblx0XHRcdGxheWVyOmJhY2tCdXR0b25cblx0XHRcdG1vdmVUb1RhcDpmYWxzZVxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIlxuXHRcdFx0c2NhbGU6IDIwXG5cdFx0XHRjdXJ2ZTogXCJiZXppZXItY3VydmUoMSwgMC40LCAwLjQsIDEuMClcIlxuXHRcdFx0b3BhY2l0eTogLjNcblx0bS51dGlscy5pbmt5XG5cdFx0XHRsYXllcjpyZWNlbnRCdXR0b25cblx0XHRcdG1vdmVUb1RhcDpmYWxzZVxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIlxuXHRcdFx0c2NhbGU6IDIwXG5cdFx0XHRjdXJ2ZTogXCJiZXppZXItY3VydmUoMSwgMC40LCAwLjQsIDEuMClcIlxuXHRcdFx0b3BhY2l0eTogLjNcblxuXHRiYWNrQnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRtLnJlbW92ZUZyb21TdGFjaygpXG5cblx0bmF2YmFyLmJhY2sgPSBiYWNrQnV0dG9uXG5cdG5hdmJhci5iYWNrLmJhY2tJY29uID0gYmFja0ljb25cblx0bmF2YmFyLmhvbWUgPSBob21lQnV0dG9uXG5cdG5hdmJhci5ob21lLmljb24gPSBob21lSWNvblxuXHRuYXZiYXIucmVjZW50ID0gcmVjZW50QnV0dG9uXG5cdG5hdmJhci5yZWNlbnQuaWNvbiA9IHJlY2VudEljb25cblxuXHRVdGlscy5pbnRlcnZhbCAuMDUsIC0+XG5cdFx0bmF2YmFyLmJyaW5nVG9Gcm9udCgpXG5cblx0bS5sYXlvdXQuc2V0KG5hdmJhcilcblx0cmV0dXJuIG5hdmJhclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0YW5pbWF0ZWQ6dHJ1ZVxuXHR0ZXh0OlwiU25hY2tiYXIgVGV4dFwiXG5cdGFjdGlvbjp1bmRlZmluZWRcblx0YWN0aW9uQ29sb3I6XCJsaW1lQTIwMFwiXG5cdGR1cmF0aW9uOjVcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cblx0YmFyID0gbmV3IExheWVyXG5cdFx0bmFtZTpcInNuYWNrYmFyXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Y2xpcDp0cnVlXG5cblx0YmFyLnR5cGUgPSBcInNuYWNrYmFyXCJcblx0YmFyLmJnID0gbmV3IExheWVyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwiIzMyMzIzMlwiXG5cdFx0c3VwZXJMYXllcjpiYXJcblx0XHRuYW1lOlwiYmdcIlxuXG5cdG5hdmJhckV4aXN0cyA9IDBcblx0ZmFiRXhpc3RzID0gdW5kZWZpbmVkXG5cblx0Zm9yIGwgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGwudHlwZSA9PSBcIm5hdmJhclwiXG5cdFx0XHRuYXZiYXJFeGlzdHMgPSBsXG5cblx0XHRpZiBsLnR5cGUgPT0gXCJmbG9hdGluZ1wiXG5cdFx0XHRmYWJFeGlzdHMgPSBsXG5cblx0XHRpZiBsLnR5cGUgPT0gXCJzbmFja2JhclwiICYmIGwgIT0gYmFyXG5cdFx0XHRsLmJnLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooeTpiYXIuaGVpZ2h0KVxuXHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdGN1cnZlOlwiYmV6aWVyLWN1cnZlKC4yLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0XHRcdGlmIGwuZmFiTW92ZWRcblx0XHRcdFx0XHRsLmZhYk1vdmVkLmhhbHRlZCA9IHRydWVcblx0XHRcdFx0XHRsLmZhYk1vdmVkLmNvbnN0cmFpbnRzLmJvdHRvbSA9IGZhYkV4aXN0cy5wcmV2aW91c0JvdHRvbVxuXHRcdFx0XHRcdG0ubGF5b3V0LmFuaW1hdGVcblx0XHRcdFx0XHRcdHRhcmdldDpmYWJFeGlzdHNcblx0XHRcdFx0XHRcdGN1cnZlOlwiYmV6aWVyLWN1cnZlKC4yLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24sIC0+XG5cdFx0XHRcdFx0XHRmYWJFeGlzdHMuY29uc3RyYWludHMuYm90dG9tID0gZmFiRXhpc3RzLnByZXZpb3VzQm90dG9tXG5cdFx0XHRcdFx0XHRtLmxheW91dC5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHRhcmdldDpmYWJFeGlzdHNcblx0XHRcdFx0XHRcdFx0Y3VydmU6XCJiZXppZXItY3VydmUoLjIsIDAuNCwgMC40LCAxLjApXCJcblx0XHRcdFx0XHRcdFx0dGltZTouM1xuXG5cdGJhci5icmluZ1RvRnJvbnQoKVxuXG5cdGJhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGJvdHRvbTpbbmF2YmFyRXhpc3RzLCAtMV1cblx0XHRoZWlnaHQ6NDhcblxuXHRtLmxheW91dC5zZXRcblx0XHR0YXJnZXQ6W2Jhcl1cblxuXHRiYXIuYmcucHJvcHMgPSB7d2lkdGg6YmFyLndpZHRoLCBoZWlnaHQ6YmFyLmhlaWdodH1cblx0YWN0aW9uV2lkdGggPSBtLnB4KDI0KVxuXG5cdGlmIHNldHVwLmFjdGlvblxuXHRcdGJhci5hY3Rpb24gPSBuZXcgbS5CdXR0b25cblx0XHRcdHR5cGU6XCJmbGF0XCJcblx0XHRcdHN1cGVyTGF5ZXI6YmFyLmJnXG5cdFx0XHR0ZXh0OnNldHVwLmFjdGlvblxuXHRcdFx0Y29uc3RyYWludHM6e3RyYWlsaW5nOjI0LCBhbGlnbjpcInZlcnRpY2FsXCJ9XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjMzIzMlwiXG5cdFx0XHRjb2xvcjpzZXR1cC5hY3Rpb25Db2xvclxuXHRcdGFjdGlvbldpZHRoID0gYmFyLmFjdGlvbi53aWR0aCArIG0ucHgoNDgpXG5cblx0YmFyLnRleHQgPSBuZXcgbS5UZXh0XG5cdFx0Zm9udFNpemU6MTRcblx0XHRjb2xvcjpcIndoaXRlXCJcblx0XHRzdXBlckxheWVyOmJhci5iZ1xuXHRcdGNvbnN0cmFpbnRzOntsZWFkaW5nOjI0LCBhbGlnbjpcInZlcnRpY2FsXCJ9XG5cdFx0dGV4dDpzZXR1cC50ZXh0XG5cdFx0bmFtZTpcInRleHRcIlxuXHRcdGxpbmVIZWlnaHQ6MThcblxuXHRpZiBtLmRldmljZS53aWR0aCA8IGFjdGlvbldpZHRoICsgYmFyLnRleHQud2lkdGggKyBtLnB4KDI0KVxuXHRcdGJhci50ZXh0LmNvbnN0cmFpbnRzLndpZHRoID0gbS5kcChtLmRldmljZS53aWR0aCkgLSAobS5kcChhY3Rpb25XaWR0aCkgKyAyNClcblx0XHRtLnV0aWxzLnVwZGF0ZShiYXIudGV4dClcblx0XHRtLmxheW91dC5zZXQoYmFyLnRleHQpXG5cdFx0YmFyLmNvbnN0cmFpbnRzLmhlaWdodCA9IG0uZHAoYmFyLnRleHQuaGVpZ2h0KSArIDQ4XG5cdFx0YmFyLmJnLmhlaWdodCA9IGJhci50ZXh0LmhlaWdodCArIG0ucHgoNDgpXG5cblx0XHRtLmxheW91dC5zZXRcblx0XHRcdHRhcmdldDpbYmFyLCBiYXIudGV4dF1cblxuXHRcdGlmIHNldHVwLmFjdGlvblxuXHRcdFx0bS5sYXlvdXQuc2V0KGJhci5hY3Rpb24pXG5cblx0YmFySGVpZ2h0ID0gYmFyLmJnLmhlaWdodFxuXG5cdGlmIGZhYkV4aXN0c1xuXHRcdGJhci5mYWJNb3ZlZCA9IGZhYkV4aXN0c1xuXHRcdGZhYkV4aXN0cy5wcmV2aW91c0JvdHRvbSA9IGZhYkV4aXN0cy5jb25zdHJhaW50cy5ib3R0b21cblx0XHRmYWJFeGlzdHMuY29uc3RyYWludHMuYm90dG9tID0gZmFiRXhpc3RzLmNvbnN0cmFpbnRzLmJvdHRvbSArIG0uZHAoYmFySGVpZ2h0KVxuXG5cdGlmIHNldHVwLmFuaW1hdGVkXG5cdFx0YmFyLmJnLnkgPSBiYXIuYmcuaGVpZ2h0XG5cdFx0YmFyLnRleHQub3BhY2l0eSA9IDBcblx0XHRiYXIuYmcuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczooeTowKVxuXHRcdFx0dGltZTouM1xuXHRcdFx0Y3VydmU6XCJiZXppZXItY3VydmUoLjIsIDAuNCwgMC40LCAxLjApXCJcblx0XHRiYXIudGV4dC5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjEpXG5cdFx0XHR0aW1lOi4zXG5cdFx0aWYgc2V0dXAuYWN0aW9uXG5cdFx0XHRiYXIuYWN0aW9uLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHR0aW1lOi4zXG5cdFx0aWYgZmFiRXhpc3RzXG5cdFx0XHRtLmxheW91dC5hbmltYXRlXG5cdFx0XHRcdHRhcmdldDpmYWJFeGlzdHNcblx0XHRcdFx0Y3VydmU6XCJiZXppZXItY3VydmUoLjIsIDAuNCwgMC40LCAxLjApXCJcblx0XHRcdFx0dGltZTouM1xuXG5cdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uLCAtPlxuXHRcdGJhci5iZy5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOih5OmJhci5oZWlnaHQpXG5cdFx0XHR0aW1lOi4zXG5cdFx0XHRjdXJ2ZTpcImJlemllci1jdXJ2ZSguMiwgMC40LCAwLjQsIDEuMClcIlxuXHRcdGJhci50ZXh0LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRpZiBzZXR1cC5hY3Rpb25cblx0XHRcdGJhci5hY3Rpb24uYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjApXG5cdFx0XHRcdHRpbWU6LjNcblx0XHRpZiBmYWJFeGlzdHMgJiYgZmFiRXhpc3RzLmhhbHRlZCAhPSB0cnVlXG5cdFx0XHRmYWJFeGlzdHMuY29uc3RyYWludHMuYm90dG9tID0gZmFiRXhpc3RzLnByZXZpb3VzQm90dG9tXG5cdFx0XHRtLmxheW91dC5hbmltYXRlXG5cdFx0XHRcdHRhcmdldDpmYWJFeGlzdHNcblx0XHRcdFx0Y3VydmU6XCJiZXppZXItY3VydmUoLjIsIDAuNCwgMC40LCAxLjApXCJcblx0XHRcdFx0dGltZTouM1xuXHRVdGlscy5kZWxheSBzZXR1cC5kdXJhdGlvbiArIC4zLCAtPlxuXHRcdGJhci5kZXN0cm95KClcblx0cmV0dXJuIGJhclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5zdGFjayA9IHN0YWNrID0gW11cblxuXG5leHBvcnRzLmFkZFRvU3RhY2sgPSAobGF5ZXIpIC0+XG4gIGlmIHN0YWNrLmluZGV4T2YobGF5ZXIpID09IC0xXG4gICAgc3RhY2sucHVzaCBsYXllclxuXG5leHBvcnRzLnJlbW92ZUZyb21TdGFjayA9IChsYXllcikgLT5cbiAgaWYgc3RhY2subGVuZ3RoID4gMFxuICAgIGxheWVyVG9sZWF2ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXG4gICAgaWYgbGF5ZXJUb2xlYXZlLmV4aXQgIT0gdW5kZWZpbmVkXG4gICAgICBsYXllclRvbGVhdmUuZXhpdCgpXG4gICAgZWxzZVxuICAgICAgb3ZlcmxheSA9IG5ldyBMYXllclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6bS5jb2xvcihcImJsYWNrXCIpXG4gICAgICAgIHdpZHRoOm0uZGV2aWNlLndpZHRoXG4gICAgICAgIGhlaWdodDptLmRldmljZS5oZWlnaHRcbiAgICAgIG92ZXJsYXkucGxhY2VCZWhpbmQobGF5ZXJUb2xlYXZlKVxuICAgICAgbGF5ZXJUb2xlYXZlLmNvbnN0cmFpbnRzID1cbiAgICAgICAgbGVhZGluZzptLmRwKG0uZGV2aWNlLndpZHRoKVxuICAgICAgbS5sYXlvdXQuYW5pbWF0ZVxuICAgICAgICB0YXJnZXQ6bGF5ZXJUb2xlYXZlXG4gICAgICAgIHRpbWU6LjNcbiAgICAgIG92ZXJsYXkuYW5pbWF0ZVxuICAgICAgICBwcm9wZXJ0aWVzOihvcGFjaXR5OjApXG4gICAgICAgIHRpbWU6LjVcbiAgICAgICAgZGVsYXk6LjJcbiAgICAgIFV0aWxzLmRlbGF5IC42LCAtPlxuICAgICAgICBsYXllclRvbGVhdmUuZGVzdHJveSgpXG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpXG4gICAgc3RhY2sucG9wKClcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGNhcnJpZXI6XCJcIlxuXHRuZXR3b3JrOlwiTFRFXCJcblx0YmF0dGVyeToxMDBcblx0Y2VsbHVsYXI6MlxuXHRzdHlsZTpcImxpZ2h0XCJcblx0Y2xvY2syNDpmYWxzZVxuXHR0eXBlOlwic3RhdHVzQmFyXCJcblx0YmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuMSlcIlxuXHRjb2xvcjogXCJibGFja1wiXG5cdG9wYWNpdHk6LjZcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdHN0YXR1c0JhciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6c2V0dXAuYmFja2dyb3VuZENvbG9yLCBuYW1lOlwic3RhdHVzQmFyLmFsbFwiXG5cblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJkYXJrXCJcblx0XHRpZiBzZXR1cC5iYWNrZ3JvdW5kQ29sb3IgPT0gXCJyZ2JhKDAsMCwwLC4xKVwiXG5cdFx0XHRzdGF0dXNCYXIuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImJsYWNrXCIpXG5cdFx0aWYgc2V0dXAuY29sb3IgPT0gXCJibGFja1wiXG5cdFx0XHRzZXR1cC5jb2xvciA9IFwid2hpdGVcIlxuXHRcdGlmIHNldHVwLm9wYWNpdHkgPT0gLjZcblx0XHRcdHNldHVwLm9wYWNpdHkgPSAxXG5cblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJsaWdodFwiICYmIHNldHVwLmNvbG9yICE9IFwiYmxhY2tcIlxuXHRcdHNldHVwLm9wYWNpdHkgPSAxXG5cblx0c3RhdHVzQmFyLnR5cGUgPSBzZXR1cC50eXBlXG5cdHN0YXR1c0Jhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDoyNFxuXG5cdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdFx0QGJsdWV0b290aCA9IDVcblxuXHRcdHdoZW4gXCJmdWxsc2NyZWVuXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdFx0QGJsdWV0b290aCA9IC0gMTBcblx0XHRlbHNlXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDNcblx0XHRcdEBibHVldG9vdGggPSAzXG5cblxuXG5cdEB0aW1lID0gbS51dGlscy5nZXRUaW1lKClcblx0dGltZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJUaW1lXCIsIHRleHQ6bS51dGlscy50aW1lRm9ybWF0dGVyKEB0aW1lLCBzZXR1cC5jbG9jazI0KSwgZm9udFNpemU6MTQsIGZvbnRXZWlnaHQ6NTAwLCBzdXBlckxheWVyOnN0YXR1c0JhciwgY29sb3I6c2V0dXAuY29sb3IsIG5hbWU6XCJ0aW1lXCIsIG9wYWNpdHk6c2V0dXAub3BhY2l0eVxuXHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZzo4XG5cdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cdG0udXRpbHMudGltZURlbGVnYXRlKHRpbWUsIHNldHVwLmNsb2NrMjQpXG5cblxuXHRiYXR0ZXJ5SWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOnN0YXR1c0JhciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJhdHRlcnlJY29uXCJcblx0aWYgc2V0dXAuYmF0dGVyeSA+IDcwXG5cdFx0aGlnaEJhdHRlcnkgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5iYXR0ZXJ5SGlnaClcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gaGlnaEJhdHRlcnkuc3ZnXG5cdFx0YmF0dGVyeUljb24uaGVpZ2h0ID0gaGlnaEJhdHRlcnkuaGVpZ2h0XG5cdFx0YmF0dGVyeUljb24ud2lkdGggPSBoaWdoQmF0dGVyeS53aWR0aFxuXHRcdG0udXRpbHMuY2hhbmdlRmlsbChiYXR0ZXJ5SWNvbiwgc2V0dXAuY29sb3IpXG5cdFx0YmF0dGVyeUljb24ub3BhY2l0eSA9IHNldHVwLm9wYWNpdHlcblxuXHRpZiBzZXR1cC5iYXR0ZXJ5IDw9IDcwICYmIHNldHVwLmJhdHRlcnkgPiAyMFxuXHRcdG1pZEJhdHRlcnkgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5iYXR0ZXJ5TWlkKVxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBtaWRCYXR0ZXJ5LnN2Z1xuXHRcdG0udXRpbHMuY2hhbmdlRmlsbChiYXR0ZXJ5SWNvbiwgc2V0dXAuY29sb3IpXG5cblx0aWYgc2V0dXAuYmF0dGVyeSA8PSAyMFxuXHRcdGxvd0JhdHRlcnkgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5iYXR0ZXJ5TG93KVxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBsb3dCYXR0ZXJ5LnN2Z1xuXHRcdG0udXRpbHMuY2hhbmdlRmlsbChiYXR0ZXJ5SWNvbiwgc2V0dXAuY29sb3IpXG5cblxuXHRiYXR0ZXJ5SWNvbi5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmcgOiBbdGltZSwgN11cblx0XHRhbGlnbjpcInZlcnRpY2FsXCJcblxuXG5cdGNlbGx1bGFySWNvbiA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmNlbGx1bGFyKVxuXHRjZWxsdWxhciA9IG5ldyBMYXllclxuXHRcdHdpZHRoOmNlbGx1bGFySWNvbi53aWR0aFxuXHRcdGhlaWdodDpjZWxsdWxhckljb24uaGVpZ2h0XG5cdFx0aHRtbDpjZWxsdWxhckljb24uc3ZnXG5cdFx0c3VwZXJMYXllcjpzdGF0dXNCYXJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0b3BhY2l0eTogc2V0dXAub3BhY2l0eVxuXHRcdG5hbWU6XCJjZWxsdWxhclwiXG5cblx0Y2VsbHVsYXIuY29uc3RyYWludHMgPVxuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeUljb24sIDddXG5cdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblx0bS51dGlscy5jaGFuZ2VGaWxsKGNlbGx1bGFyLCBzZXR1cC5jb2xvcilcblxuXHR3aWZpSWNvbiA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLndpZmksIHNldHVwLmNvbG9yKVxuXG5cdHdpZmkgPSBuZXcgTGF5ZXJcblx0XHR3aWR0aDp3aWZpSWNvbi53aWR0aFxuXHRcdGhlaWdodDp3aWZpSWNvbi5oZWlnaHRcblx0XHRzdXBlckxheWVyOnN0YXR1c0JhclxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwid2lmaVwiXG5cdFx0aHRtbDogd2lmaUljb24uc3ZnXG5cdFx0b3BhY2l0eTogc2V0dXAub3BhY2l0eVxuXG5cdG0udXRpbHMuY2hhbmdlRmlsbCh3aWZpLCBzZXR1cC5jb2xvcilcblxuXHR3aWZpLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZzpbY2VsbHVsYXIsIDRdXG5cdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblx0bS5sYXlvdXQuc2V0KClcblxuXHQjIEV4cG9ydCBzdGF0dXNCYXJcblx0c3RhdHVzQmFyLmJhdHRlcnkgPSB7fVxuXHQjIHN0YXR1c0Jhci5iYXR0ZXJ5LnBlcmNlbnQgPSBiYXR0ZXJ5UGVyY2VudFxuXHRzdGF0dXNCYXIuYmF0dGVyeS5pY29uID0gYmF0dGVyeUljb25cblx0IyBzdGF0dXNCYXIuYmx1ZXRvb3RoID0gYmx1ZXRvb3RoXG5cdHN0YXR1c0Jhci50aW1lID0gdGltZVxuXHQjIHN0YXR1c0Jhci53aWZpID0gd2lmaVxuXHRzdGF0dXNCYXIuY2VsbHVsYXIgPSBjZWxsdWxhclxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDpbc3RhdHVzQmFyLCB0aW1lLCBiYXR0ZXJ5SWNvbiwgY2VsbHVsYXIsIHdpZmldXG5cdHJldHVybiBzdGF0dXNCYXJcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0Y29uc3RyYWludHM6e31cblx0dGV4dDogXCJNYXRlcmlhbCBUZXh0IExheWVyXCJcblx0dHlwZTpcInRleHRcIlxuXHR4OjBcblx0eTowXG5cdHdpZHRoOi0xXG5cdGhlaWdodDotMVxuXHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRzdHlsZTpcImRlZmF1bHRcIlxuXHRsaW5lczoxXG5cdHRleHRBbGlnbjpcImxlZnRcIlxuXHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGNvbG9yOlwiYmxhY2tcIlxuXHRmb250U2l6ZTogMTdcblx0Zm9udFN0eWxlOlwicmVndWxhclwiXG5cdGZvbnRGYW1pbHk6XCJSb2JvdG9cIlxuXHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdGxpbmVIZWlnaHQ6XCJhdXRvXCJcblx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRvcGFjaXR5OjFcblx0dGV4dFRyYW5zZm9ybTpcIm5vbmVcIlxuXHRsZXR0ZXJTcGFjaW5nOjBcblx0bmFtZTpcInRleHQgbGF5ZXJcIlxufVxuXG4jdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1CbGFjay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUJvbGRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcblxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG5zdHlsZS50eXBlID0gJ3RleHQvY3NzJ1xuXG5zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDEwMCwxMDBpdGFsaWMsMzAwLDMwMGl0YWxpYyw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDkwMCw5MDBpdGFsaWMpO1xcbiBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTsgXFxuXCIpKVxuXG4jIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQGZvbnQtZmFjZSB7XFxuXCIgK1xuIyBcIlxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG5cIiArXG4jIFwiXFx0c3JjOiBsb2NhbCgn4pi6JyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLVRoaW5JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcblwiICtcbiMgXCJ9XFxuXCIgKyBcIlxcdGZvbnQtd2VpZ2h0OiAxMDBcIlxuIyBcIlxcdGZvbnQtZmFtaWx5OiBSb2JvdG8gIWltcG9ydGFudDtcXG5cIiArXG4jIFwifVxcblwiKSlcblxuIyBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkBmb250LWZhY2Uge1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXCIgK1xuIyBcIlxcdHNyYzogbG9jYWwoJ+KYuicpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXCIgK1xuIyBcIn1cXG5cIiArIFwiXFx0Zm9udC13ZWlnaHQ6IGxpZ2h0XCJcbiMgXCJcXHRmb250LWZhbWlseTogUm9ib3RvICFpbXBvcnRhbnQ7XFxuXCIgK1xuIyBcIn1cXG5cIikpXG4jXG4jIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCkpXG4jXG4jIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQGZvbnQtZmFjZSB7XFxuXCIgK1xuIyBcIlxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG5cIiArXG4jIFwiXFx0c3JjOiBsb2NhbCgn4pi6JyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcblwiICtcbiMgXCJ9XFxuXCIgKyBcIlxcdGZvbnQtd2VpZ2h0OiBcXFwibm9ybWFsXFxcIjtcXG5cIiArXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xcblwiICtcbiMgXCJ9XFxuXCIgKyBcIkBmb250LWZhY2Uge1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXCIgK1xuIyBcIlxcdHNyYzogbG9jYWwoJ+KYuicpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cIiArXG4jIFwifVxcblwiICsgXCJcXHRmb250LXdlaWdodDogXFxcInRoaW5cXFwiO1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogUm9ib3RvICFpbXBvcnRhbnQ7XFxuXCIgK1xuIyBcIn1cXG5cIlxuI1xuIyApKVxuXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKVxuXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdGV4Y2VwdGlvbnMgPSBPYmplY3Qua2V5cyhzZXR1cClcblx0dGV4dExheWVyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6c2V0dXAubmFtZVxuXHR0ZXh0TGF5ZXIudHlwZSA9IFwidGV4dFwiXG5cdHRleHRMYXllci5odG1sID0gc2V0dXAudGV4dFxuXHRmb3IgcHJvcCBpbiBtLmxpYi5sYXllclByb3BzXG5cdFx0aWYgc2V0dXBbcHJvcF1cblx0XHRcdGlmIHByb3AgPT0gXCJjb2xvclwiXG5cdFx0XHRcdHNldHVwW3Byb3BdID0gbS51dGlscy5jb2xvcihzZXR1cFtwcm9wXSlcblx0XHRcdHRleHRMYXllcltwcm9wXSA9IHNldHVwW3Byb3BdXG5cdGZvciBwcm9wIGluIG0ubGliLmxheWVyU3R5bGVzXG5cdFx0aWYgc2V0dXBbcHJvcF1cblx0XHRcdGlmIHByb3AgPT0gXCJsaW5lSGVpZ2h0XCIgJiYgc2V0dXBbcHJvcF0gPT0gXCJhdXRvXCJcblx0XHRcdFx0dGV4dExheWVyLnN0eWxlLmxpbmVIZWlnaHQgPSAgc2V0dXAuZm9udFNpemVcblx0XHRcdGlmIHByb3AgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0c3dpdGNoIHNldHVwW3Byb3BdXG5cdFx0XHRcdFx0d2hlbiBcInVsdHJhdGhpblwiIHRoZW4gc2V0dXBbcHJvcF0gPSAxMDBcblx0XHRcdFx0XHR3aGVuIFwidGhpblwiIHRoZW4gc2V0dXBbcHJvcF0gPSAyMDBcblx0XHRcdFx0XHR3aGVuIFwibGlnaHRcIiB0aGVuIHNldHVwW3Byb3BdID0gMzAwXG5cdFx0XHRcdFx0d2hlbiBcInJlZ3VsYXJcIiB0aGVuIHNldHVwW3Byb3BdID0gNDAwXG5cdFx0XHRcdFx0d2hlbiBcIm1lZGl1bVwiIHRoZW4gc2V0dXBbcHJvcF0gPSA1MDBcblx0XHRcdFx0XHR3aGVuIFwic2VtaWJvbGRcIiB0aGVuIHNldHVwW3Byb3BdID0gNjAwXG5cdFx0XHRcdFx0d2hlbiBcImJvbGRcIiB0aGVuIHNldHVwW3Byb3BdID0gNzAwXG5cdFx0XHRcdFx0d2hlbiBcImJsYWNrXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDgwMFxuXHRcdFx0aWYgcHJvcCA9PSBcImZvbnRTaXplXCIgfHwgcHJvcCA9PSBcImxpbmVIZWlnaHRcIiB8fCBwcm9wID09IFwibGV0dGVyU3BhY2luZ1wiXG5cdFx0XHRcdHNldHVwW3Byb3BdID0gbS51dGlscy5weChzZXR1cFtwcm9wXSkgKyBcInB4XCJcblx0XHRcdHRleHRMYXllci5zdHlsZVtwcm9wXSA9IHNldHVwW3Byb3BdXG5cblx0dGV4dEZyYW1lID0gbS51dGlscy50ZXh0QXV0b1NpemUodGV4dExheWVyKVxuXHR0ZXh0TGF5ZXIucHJvcHMgPSAoaGVpZ2h0OnRleHRGcmFtZS5oZWlnaHQsIHdpZHRoOnRleHRGcmFtZS53aWR0aClcblx0dGV4dExheWVyLmNvbnN0cmFpbnRzID0gc2V0dXAuY29uc3RyYWludHNcblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OnRleHRMYXllclxuXHRyZXR1cm4gdGV4dExheWVyXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG4jIyBDb252ZXJ0cyBweCB0byBwdFxuZXhwb3J0cy5wdCA9IChweCkgLT5cblx0cHQgPSBweC9tLmRldmljZS5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jIyBDb252ZXJ0cyBwdCB0byBweFxuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIG0uZGV2aWNlLnNjYWxlXG5cdHB4ID0gTWF0aC5yb3VuZChweClcblx0cmV0dXJuIHB4XG5cbiMjIGlPUyBDb2xvciDigJMgVGhpcyB3aWxsIHN0b3JlIGFsbCBvZiB0aGUgZGVmYXVsdCBpT1MgY29sb3JzIGludGVhZCBvZiB0aGUgZGVmYXVsdCBDU1MgY29sb3JzLiAqVGhpcyBpcyBvbmx5IHVwIGhlcmUgYmVjYXVzZSBJIHJlZmVyIHRvIGl0IGluIHRoZSBkZWZhdWx0cy4qXG5leHBvcnRzLmNvbG9yID0gKGNvbG9yU3RyaW5nKSAtPlxuXHRpZiBjb2xvclN0cmluZ1swXSA9PSBcIiNcIlxuXHRcdHJldHVybiBjb2xvclN0cmluZ1xuXHRlbHNlXG5cdFx0Y29sb3IgPSAgbmV3IENvbG9yKG0ubGliLmNvbG9yc1tjb2xvclN0cmluZ10pXG5cdFx0aWYgY29sb3JTdHJpbmcgPT0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRjb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdHJldHVybiBjb2xvclxuXG4jIFN1cHBvcnRpbmcgRnVuY3Rpb25zXG4jIFV0aWxzXG5cbiMgQ2xlYW5zIGEgc3RyaW5nIG9mIDxicj4gYW5kICZuYnNwO1xuZXhwb3J0cy5jbGVhbiA9IChzdHJpbmcpIC0+XG5cdCMjIHJlbW92ZSB3aGl0ZSBzcGFjZVxuXHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvWyZdbmJzcFs7XS9naSwgXCIgXCIpLnJlcGxhY2UoL1s8XWJyWz5dL2dpLCBcIlwiKVxuXHRyZXR1cm4gc3RyaW5nXG5cbiMgQ29udmVydHMgcHgncyBvZiBhbiBTVkcgdG8gc2NhbGFibGUgdmFyaWFibGVzXG5leHBvcnRzLnN2ZyA9IChzdmcpIC0+XG5cdCMgRmluZCBTdHJpbmdcblx0c3RhcnRJbmRleCA9IHN2Zy5zZWFyY2goXCI8c3ZnIHdpZHRoPVwiKVxuXHRlbmRJbmRleCA9IHN2Zy5zZWFyY2goXCIgdmlld0JveFwiKVxuXHRzdHJpbmcgPSBzdmcuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpXG5cblx0I0ZpbmQgd2lkdGhcblx0d1N0YXJ0SW5kZXggPSBzdHJpbmcuc2VhcmNoKFwiPVwiKSArIDJcblx0d0VuZEluZGV4ID0gIHN0cmluZy5zZWFyY2goXCJweFwiKVxuXHR3aWR0aCA9IHN0cmluZy5zbGljZSh3U3RhcnRJbmRleCwgd0VuZEluZGV4KVxuXHRuZXdXaWR0aCA9IGV4cG9ydHMucHgod2lkdGgpXG5cblx0IyBGaW5kIEhlaWdodFxuXHRoZWlnaHRTdHJpbmcgPSBzdHJpbmcuc2xpY2Uod0VuZEluZGV4ICsgNCwgc3RyaW5nLmxlbmd0aClcblx0aFN0YXJ0SW5kZXggPSBoZWlnaHRTdHJpbmcuc2VhcmNoKFwiPVwiKSsgMlxuXHRoRW5kSW5kZXggPSBoZWlnaHRTdHJpbmcuc2VhcmNoKFwicHhcIilcblx0aGVpZ2h0ID0gaGVpZ2h0U3RyaW5nLnNsaWNlKGhTdGFydEluZGV4LCBoRW5kSW5kZXgpXG5cdG5ld0hlaWdodCA9IGV4cG9ydHMucHgoaGVpZ2h0KVxuXG5cdCNDcmVhdGUgbmV3IHN0cmluZ1xuXHRuZXdTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSh3aWR0aCwgbmV3V2lkdGgpXG5cdG5ld1N0cmluZyA9IG5ld1N0cmluZy5yZXBsYWNlKGhlaWdodCwgbmV3SGVpZ2h0KVxuXG5cdCNSZXBsYWNlIHN0cmluZ3Ncblx0c3ZnID0gc3ZnLnJlcGxhY2Uoc3RyaW5nLCBuZXdTdHJpbmcpXG5cblx0cmV0dXJuIHtcblx0XHRzdmc6c3ZnXG5cdFx0d2lkdGg6bmV3V2lkdGhcblx0XHRoZWlnaHQ6bmV3SGVpZ2h0XG5cdH1cblxuIyBDaGFuZ2VzIHRoZSBmaWxsIG9mIGFuIFNWR1xuZXhwb3J0cy5jaGFuZ2VGaWxsID0gKGxheWVyLCBjb2xvcikgLT5cblx0aWYgdHlwZW9mIGNvbG9yICE9IFwib2JqZWN0XCJcblx0XHRjb2xvciA9IGV4cG9ydHMuY29sb3IoY29sb3IpXG5cdHN0YXJ0SW5kZXggPSBsYXllci5odG1sLnNlYXJjaChcImZpbGw9XFxcIiNcIilcblx0ZmlsbFN0cmluZyA9IGxheWVyLmh0bWwuc2xpY2Uoc3RhcnRJbmRleCwgbGF5ZXIuaHRtbC5sZW5ndGgpXG5cdGVuZEluZGV4ID0gZmlsbFN0cmluZy5zZWFyY2goXCJcXFwiXCIpICsgOFxuXHRzdHJpbmcgPSBmaWxsU3RyaW5nLnNsaWNlKDAsIGVuZEluZGV4KVxuXHRuZXdTdHJpbmcgPSBcImZpbGw9XFxcIlwiICsgY29sb3Jcblx0bGF5ZXIuaHRtbCA9IGxheWVyLmh0bWwucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuZXhwb3J0cy5jYXBpdGFsaXplID0gKHN0cmluZykgLT5cblx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxuXG4jIFJldHVybnMgdGhlIGN1cnJlbnQgdGltZVxuZXhwb3J0cy5nZXRUaW1lID0gLT5cblx0ZGF5c09mVGhlV2VlayA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG5cdG1vbnRoc09mVGhlWWVhciA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdXG5cdGRhdGVPYmogPSBuZXcgRGF0ZSgpXG5cdG1vbnRoID0gbW9udGhzT2ZUaGVZZWFyW2RhdGVPYmouZ2V0TW9udGgoKV1cblx0ZGF0ZSA9IGRhdGVPYmouZ2V0RGF0ZSgpXG5cdGRheSA9IGRheXNPZlRoZVdlZWtbZGF0ZU9iai5nZXREYXkoKV1cblx0aG91cnMgPSBkYXRlT2JqLmdldEhvdXJzKClcblx0bWlucyA9IGRhdGVPYmouZ2V0TWludXRlcygpXG5cdHNlY3MgPSBkYXRlT2JqLmdldFNlY29uZHMoKVxuXHRyZXR1cm4ge1xuXHRcdG1vbnRoOm1vbnRoXG5cdFx0ZGF0ZTpkYXRlXG5cdFx0ZGF5OmRheVxuXHRcdGhvdXJzOmhvdXJzXG5cdFx0bWluczptaW5zXG5cdFx0c2VjczpzZWNzXG5cdH1cblxuZXhwb3J0cy5iZ0JsdXIgPSAobGF5ZXIpIC0+XG5cdGxheWVyLnN0eWxlW1wiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIl0gPSBcImJsdXIoI3tleHBvcnRzLnB4KDUpfXB4KVwiXG5cdHJldHVybiBsYXllclxuXG5leHBvcnRzLnRleHRBdXRvU2l6ZSA9ICh0ZXh0TGF5ZXIpIC0+XG5cdCNEZWZpbmUgV2lkdGhcblx0Y29uc3RyYWludHMgPSB7fVxuXHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHNcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0XG5cdFx0XHRjb25zdHJhaW50cy5oZWlnaHQgPSBleHBvcnRzLnB4KHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHQpXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoXG5cdFx0XHRjb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXG5cdHN0eWxlcyA9XG5cdFx0Zm9udFNpemU6IHRleHRMYXllci5zdHlsZS5mb250U2l6ZVxuXHRcdGZvbnRGYW1pbHk6IHRleHRMYXllci5zdHlsZS5mb250RmFtaWx5XG5cdFx0Zm9udFdlaWdodDogdGV4dExheWVyLnN0eWxlLmZvbnRXZWlnaHRcblx0XHRmb250U3R5bGU6IHRleHRMYXllci5zdHlsZS5mb250U3R5bGVcblx0XHRsaW5lSGVpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGUubGluZUhlaWdodFxuXHRcdGxldHRlclNwYWNpbmc6IHRleHRMYXllci5zdHlsZS5sZXR0ZXJTcGFjaW5nXG5cdFx0dGV4dFRyYW5zZm9ybTogdGV4dExheWVyLnN0eWxlLnRleHRUcmFuc2Zvcm1cblx0dGV4dEZyYW1lID0gVXRpbHMudGV4dFNpemUodGV4dExheWVyLmh0bWwsIHN0eWxlcywgY29uc3RyYWludHMpXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiB0ZXh0RnJhbWUud2lkdGhcblx0XHRoZWlnaHQ6IHRleHRGcmFtZS5oZWlnaHRcblx0fVxuXG5leHBvcnRzLmdldERldmljZSA9IC0+XG5cdCMgTG9hZHMgdGhlIGluaXRpYWwgZnJhbWVcblx0ZGV2aWNlID0gXCJcIlxuXHRmcmFtZSA9IHRydWVcblx0aWYgbS5saWIucmVhbERldmljZXNbaW5uZXJXaWR0aF0gJiYgbS5saWIucmVhbERldmljZXNbaW5uZXJXaWR0aF1baW5uZXJIZWlnaHRdXG5cdFx0ZGV2aWNlID0gbS5saWIucmVhbERldmljZXNbaW5uZXJXaWR0aF1baW5uZXJIZWlnaHRdXG5cdFx0ZnJhbWUgPSBmYWxzZVxuXHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0aWYgZnJhbWVcblx0XHRkZXZpY2UgPVxuXHRcdFx0bmFtZTogRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG5cdFx0XHR3aWR0aCA6ICBGcmFtZXIuRGV2aWNlVmlldy5EZXZpY2VzW0ZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZV0uc2NyZWVuV2lkdGhcblx0XHRcdGhlaWdodDogIEZyYW1lci5EZXZpY2VWaWV3LkRldmljZXNbRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXS5zY3JlZW5IZWlnaHRcblx0XHRcdHNjYWxlOiBtLmxpYi5mcmFtZXJGcmFtZXNbRnJhbWVyLkRldmljZVZpZXcuRGV2aWNlc1tGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVdLnNjcmVlbldpZHRoXVxuXG5cdGlmIGRldmljZS5zY2FsZSA9PSB1bmRlZmluZWRcblx0XHRkZXZpY2Uuc2NhbGUgPSAyXG5cdGlmIGRldmljZS53aWR0aCA9PSB1bmRlZmluZWRcblx0XHRkZXZpY2Uud2lkdGggPSBpbm5lcldpZHRoXG5cdGlmIGRldmljZS5oZWlnaHQgPT0gdW5kZWZpbmVkXG5cdFx0ZGV2aWNlLmhlaWdodCA9IGlubmVySGVpZ2h0XG5cblx0cmV0dXJuIGRldmljZVxuXG5cbiMgU3BlY2lhbCBDaGFyYWN0ZXJzXG5leHBvcnRzLnNwZWNpYWxDaGFyID0gKGxheWVyKSAtPlxuXHR0ZXh0ID0gbGF5ZXJcblx0aWYgbGF5ZXIudHlwZSA9PSBcImJ1dHRvblwiXG5cdFx0dGV4dCA9IGxheWVyLmxhYmVsXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtmb250V2VpZ2h0OjYwMH1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1yXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJyZWRcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1yYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1yYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImJsdWVcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1sYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1sYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImxpZ2h0LWJsdWVcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1nXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWcgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJncmVlblwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLW9cIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItbyBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcIm9yYW5nZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXBcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItcCBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcIm9yYW5nZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXlcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCIteSBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcInllbGxvd1wifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLSNcIikgIT0gLTFcblx0XHRjaG9zZW5Db2xvciA9IHRleHQuaHRtbC5zbGljZSgxLCA4KVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwuc2xpY2UoOSwgdGV4dC5odG1sLmxlbmd0aClcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpjaG9zZW5Db2xvcn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1cIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fV0pXG5cdGlmIGxheWVyLmJ1dHRvblR5cGUgPT0gXCJ0ZXh0XCJcblx0XHRsYXllci53aWR0aCA9IHRleHQud2lkdGhcblx0bS5sYXlvdXQuc2V0KClcblxuZXhwb3J0cy51cGRhdGUgPSAobGF5ZXIsIGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGlmIGxheWVyLnR5cGUgPT0gXCJ0ZXh0XCJcblx0XHRmb3IgY2hhbmdlIGluIGFycmF5XG5cdFx0XHRrZXkgPSBPYmplY3Qua2V5cyhjaGFuZ2UpWzBdXG5cdFx0XHR2YWx1ZSA9IGNoYW5nZVtrZXldXG5cdFx0XHRpZiBrZXkgPT0gXCJ0ZXh0XCJcblx0XHRcdFx0bGF5ZXIuaHRtbCA9IHZhbHVlXG5cdFx0XHRpZiBrZXkgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVba2V5XSA9IHZhbHVlXG5cdFx0XHRpZiBrZXkgPT0gXCJjb2xvclwiXG5cdFx0XHRcdGxheWVyLmNvbG9yID0gZXhwb3J0cy5jb2xvcih2YWx1ZSlcblxuXHRcdHRleHRGcmFtZSA9IGV4cG9ydHMudGV4dEF1dG9TaXplKGxheWVyKVxuXHRcdGxheWVyLndpZHRoID0gdGV4dEZyYW1lLndpZHRoXG5cdFx0bGF5ZXIuaGVpZ2h0ID0gdGV4dEZyYW1lLmhlaWdodFxuXG5cblx0bS5sYXlvdXQuc2V0KClcblxuIyBEZWNpZGVzIGlmIGl0IHNob3VsZCBiZSB3aGl0ZS9ibGFjayB0ZXh0XG5leHBvcnRzLmF1dG9Db2xvciA9IChjb2xvck9iamVjdCkgLT5cblx0cmdiID0gY29sb3JPYmplY3QudG9SZ2JTdHJpbmcoKVxuXHRyZ2IgPSByZ2Iuc3Vic3RyaW5nKDQsIHJnYi5sZW5ndGgtMSlcblx0cmdiID0gcmdiLnJlcGxhY2UoLyAvZywgJycpXG5cdHJnYiA9IHJnYi5yZXBsYWNlKC8gL2csICcnKVxuXHRyZ2IgPSByZ2Iuc3BsaXQoJywnKVxuXHRyZWQgPSByZ2JbMF1cblx0Z3JlZW4gPSByZ2JbMV1cblx0Ymx1ZSA9IHJnYlsyXVxuXHRjb2xvciA9IFwiXCJcblx0aWYgKHJlZCowLjI5OSArIGdyZWVuKjAuNTg3ICsgYmx1ZSowLjExNCkgPiAxODZcblx0XHRjb2xvciA9IGV4cG9ydHMuY29sb3IoXCJibGFja1wiKVxuXHRlbHNlXG5cdFx0Y29sb3IgPSBleHBvcnRzLmNvbG9yKFwid2hpdGVcIilcblx0cmV0dXJuIGNvbG9yXG5cbmV4cG9ydHMuc2FtZVBhcmVudCA9IChsYXllcjEsIGxheWVyMikgLT5cblx0cGFyZW50T25lID0gbGF5ZXIxLnN1cGVyTGF5ZXJcblx0cGFyZW50VHdvID0gbGF5ZXIyLnN1cGVyTGF5ZXJcblx0aWYgcGFyZW50T25lID09IHBhcmVudFR3b1xuXHRcdHJldHVybiB0cnVlXG5cdGVsc2Vcblx0XHRyZXR1cm4gZmFsc2VcblxuXG5leHBvcnRzLnRpbWVEZWxlZ2F0ZSA9IChsYXllciwgY2xvY2tUeXBlKSAtPlxuXHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFV0aWxzLmRlbGF5IDYwIC0gQHRpbWUuc2VjcywgLT5cblx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG5cdFx0VXRpbHMuaW50ZXJ2YWwgNjAsIC0+XG5cdFx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcblxuZXhwb3J0cy50aW1lRm9ybWF0dGVyID0gKHRpbWVPYmosIGNsb2NrVHlwZSkgLT5cblx0aWYgY2xvY2tUeXBlID09IGZhbHNlXG5cdFx0aWYgdGltZU9iai5ob3VycyA+IDEyXG5cdFx0XHR0aW1lT2JqLmhvdXJzID0gdGltZU9iai5ob3VycyAtIDEyXG5cdFx0aWYgdGltZU9iai5ob3VycyA9PSAwIHRoZW4gdGltZU9iai5ob3VycyA9IDEyXG5cdGlmIHRpbWVPYmoubWlucyA8IDEwXG5cdFx0dGltZU9iai5taW5zID0gXCIwXCIgKyB0aW1lT2JqLm1pbnNcblx0cmV0dXJuIHRpbWVPYmouaG91cnMgKyBcIjpcIiArIHRpbWVPYmoubWluc1xuXG5leHBvcnRzLnNldHVwQ29tcG9uZW50ID0gKGFycmF5LCBkZWZhdWx0cykgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRvYmogPSB7fVxuXHRmb3IgaSBpbiBkZWZhdWx0cy5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0b2JqW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRvYmpbaV0gPSBkZWZhdWx0c1tpXVxuXHRyZXR1cm4gb2JqXG5cblxuZXhwb3J0cy5lbW9qaUZvcm1hdHRlciA9IChzdHJpbmcpIC0+XG5cdFx0dW5pY29kZUZvcm1hdCA9IFwiXCJcblx0XHRpZiBzdHJpbmdbMF0gPT0gXCJFXCIgfHwgc3RyaW5nWzBdID09IFwiM1wiIHx8IHN0cmluZ1swXSA9PSBcIjJcIiB8fCBzdHJpbmdbMF0gPT0gXCJDXCJcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdGVsc2Vcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdHVuaWNvZGVGb3JtYXQgPSBcIiVGMCU5RlwiXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHVuaWNvZGVGb3JtYXQpXG5cdFx0cmV0dXJuIGRlY29kZWRcblxuZXhwb3J0cy5idWlsZEVtb2ppc09iamVjdCA9ICgpIC0+XG5cdGVtb2ppcyA9IFtdXG5cdGZvciBjb2RlLCBpbmRleCBpbiBtLmFzc2V0cy5lbW9qaUNvZGVzXG5cdFx0ZW1vamkgPSBleHBvcnRzLmVtb2ppRm9ybWF0dGVyKGNvZGUpXG5cdFx0ZW1vamlzLnB1c2ggZW1vamlcblxuZXhwb3J0cy50b0hITU1TUyA9IChpbnQpIC0+XG4gIHNlY19udW0gPSBwYXJzZUludChpbnQsIDEwKVxuICBob3VycyAgID0gTWF0aC5mbG9vcihzZWNfbnVtIC8gMzYwMCk7XG4gIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzZWNfbnVtIC0gKGhvdXJzICogMzYwMCkpIC8gNjApO1xuICBzZWNvbmRzID0gc2VjX251bSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCk7XG5cbiAgaWYgKGhvdXJzICAgPCAxMCkgdGhlbiBob3VycyAgID0gXCIwXCIraG91cnNcbiAgaWYgKG1pbnV0ZXMgPCAxMCkgdGhlbiBtaW51dGVzID0gXCJcIittaW51dGVzXG4gIGlmIChzZWNvbmRzIDwgMTApIHRoZW4gc2Vjb25kcyA9IFwiMFwiK3NlY29uZHNcbiAgdGltZVN0cmluZyA9IFwiXCJcbiAgaWYgaG91cnMgIT0gXCIwMFwiXG4gICAgdGltZVN0cmluZyA9IGhvdXJzKyc6JyttaW51dGVzKyc6JytzZWNvbmRzXG4gIGVsc2VcbiAgICB0aW1lU3RyaW5nID0gbWludXRlcysnOicrc2Vjb25kc1xuXG4gIHJldHVybiB0aW1lU3RyaW5nXG5cbiNsYXllciwgbW92ZVRvVGFwLCBjb2xvciwgc2NhbGUsIGN1cnZlXG5leHBvcnRzLmlua3kgPSAoc2V0dXApIC0+XG5cdHN0YXJ0WCA9IHNldHVwLmxheWVyLndpZHRoLzJcblx0c3RhcnRZID0gc2V0dXAubGF5ZXIuaGVpZ2h0LzJcblxuXHRpbmtDb2xvciA9IFwiIzBBMEEwQVwiXG5cdGlua1N0YXJ0U2NhbGUgPSAuMVxuXHRpbmtTY2FsZSA9IDNcblx0aW5rQ3VydmUgPSBcImJlemllci1jdXJ2ZSguMiwgMC40LCAwLjQsIDEuMClcIlxuXHRpbmtPcGFjaXR5ID0gMVxuXHRtb3ZlVG9UYXAgPSB0cnVlXG5cblx0aWYgc2V0dXAubW92ZVRvVGFwICE9IHVuZGVmaW5lZFxuXHRcdG1vdmVUb1RhcCA9IHNldHVwLm1vdmVUb1RhcFxuXG5cdGlmIHNldHVwLmNvbG9yICE9IHVuZGVmaW5lZFxuXHRcdGlua0NvbG9yID0gbS5jb2xvcihzZXR1cC5jb2xvcilcblxuXHRpZiBzZXR1cC5zY2FsZSAhPSB1bmRlZmluZWRcblx0XHRpbmtTY2FsZSA9IHNldHVwLnNjYWxlXG5cblx0aWYgc2V0dXAuc3RhcnRTY2FsZSAhPSB1bmRlZmluZWRcblx0XHRpbmtTdGFydFNjYWxlID0gc2V0dXAuc3RhcnRTY2FsZVxuXG5cdGlmIHNldHVwLmN1cnZlICE9IHVuZGVmaW5lZFxuXHRcdGlua0N1cnZlID0gc2V0dXAuY3VydmVcblxuXHRpZiBzZXR1cC5vcGFjaXR5ICE9IHVuZGVmaW5lZFxuXHRcdGlua09wYWNpdHkgPSBzZXR1cC5vcGFjaXR5XG5cblx0aW5reUVmZmVjdCA9IChldmVudCwgbGF5ZXIpIC0+XG5cdFx0aWYgbW92ZVRvVGFwID09IHRydWVcblx0XHRcdHN0YXJ0WCA9IGV2ZW50Lm9mZnNldFhcblx0XHRcdHN0YXJ0WSA9IGV2ZW50Lm9mZnNldFlcblxuXHRcdFx0aWYgVXRpbHMuaXNDaHJvbWUoKSA9PSBmYWxzZSAmJiBVdGlscy5pc1RvdWNoKClcblx0XHRcdFx0c3RhcnRYID0gZXZlbnQudG91Y2hDZW50ZXIueCAtIGxheWVyLnhcblx0XHRcdFx0c3RhcnRZID0gZXZlbnQudG91Y2hDZW50ZXIueSAtIGxheWVyLnlcblxuXHRcdGNpcmNsZSA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOmlua0NvbG9yXG5cdFx0XHRtaWRYOnN0YXJ0WFxuXHRcdFx0bWlkWTpzdGFydFlcblx0XHRcdHN1cGVyTGF5ZXI6bGF5ZXJcblx0XHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDUwKVxuXHRcdFx0b3BhY2l0eTogaW5rT3BhY2l0eVxuXG5cdFx0Y2lyY2xlLnNjYWxlID0gaW5rU3RhcnRTY2FsZVxuXHRcdGNpcmNsZS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOihzY2FsZTppbmtTY2FsZSwgb3BhY2l0eTowKVxuXHRcdFx0Y3VydmU6aW5rQ3VydmVcblx0XHRcdHRpbWU6LjVcblx0XHRVdGlscy5kZWxheSAxLCAtPlxuXHRcdFx0Y2lyY2xlLmRlc3Ryb3koKVxuXG5cdGlmIFV0aWxzLmlzQ2hyb21lKCkgJiYgVXRpbHMuaXNUb3VjaCgpXG5cdFx0c2V0dXAubGF5ZXIub24gRXZlbnRzLkRvdWJsZVRhcCwgKGV2ZW50KSAtPlxuXHRcdFx0aW5reUVmZmVjdChldmVudCwgQClcblx0aWYgVXRpbHMuaXNDaHJvbWUoKSA9PSBmYWxzZSAmJiBVdGlscy5pc1RvdWNoKClcblx0XHRzZXR1cC5sYXllci5vbiBFdmVudHMuVGFwLCAoZXZlbnQpIC0+XG5cdFx0XHRpbmt5RWZmZWN0KGV2ZW50LCBAKVxuXHRpZiBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdHNldHVwLmxheWVyLm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGV2ZW50KSAtPlxuXHRcdFx0aW5reUVmZmVjdChldmVudCwgQClcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG4gIHZpZGVvOnVuZGVmaW5lZFxuICBzdXBlckxheWVyOnVuZGVmaW5lZFxuICBoZWlnaHQ6bS5weCgyMDUpXG4gIHdpZHRoOm0ucHgoMTAwKVxuICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gIGF1dG9wbGF5OnRydWVcbiAgY29uc3RyYWludHM6e3RvcDowfVxuICBtYXg6dHJ1ZVxuICBwcm9ncmVzc0NvbG9yOiBcImJsdWU4MDBcIlxuICBtdXRlOmZhbHNlXG4gIGxvb3A6ZmFsc2VcbiAgaWRsZUxpbWl0OjNcbiAgc2hvd1BsYXlTdG9wOnRydWVcbiAgaW1hZ2U6dW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cbiAgc2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuICBpZiBzZXR1cC5tYXhcbiAgICAgIHJhdGlvID0gMC41NjI1XG4gICAgICBzZXR1cC53aWR0aCA9IG0uZGV2aWNlLndpZHRoXG4gICAgICBzZXR1cC5oZWlnaHQgPSBzZXR1cC53aWR0aCAqIDAuNTYyNVxuXG4gIHZpZGVvTGF5ZXIgPSBuZXcgVmlkZW9MYXllclxuICAgIHN1cGVyTGF5ZXI6c2V0dXAuc3VwZXJMYXllclxuICAgIHZpZGVvOnNldHVwLnZpZGVvXG4gICAgaGVpZ2h0OnNldHVwLmhlaWdodFxuICAgIHdpZHRoOnNldHVwLndpZHRoXG4gICAgYmFja2dyb3VuZENvbG9yOnNldHVwLmJhY2tncm91bmRDb2xvclxuICAgIG5hbWU6XCJ2aWRlb1wiXG5cbiAgaWYgc2V0dXAuaW1hZ2VcbiAgICB2aWRlb0xheWVyLmltYWdlID0gc2V0dXAuaW1hZ2VcblxuICB2aWRlb0xheWVyLnBsYXllci5hdXRvcGxheSA9IHNldHVwLmF1dG9wbGF5XG4gIHZpZGVvTGF5ZXIucGxheWVyLm11dGVkID0gc2V0dXAubXV0ZVxuICB2aWRlb0xheWVyLnBsYXllci5sb29wID0gc2V0dXAubG9vcFxuXG4gIGlmIHNldHVwLmNvbnN0cmFpbnRzXG4gICAgdmlkZW9MYXllci5jb25zdHJhaW50cyA9IHNldHVwLmNvbnN0cmFpbnRzXG4gICAgbS5sYXlvdXQuc2V0KHZpZGVvTGF5ZXIpXG5cbiAgdmlkZW9MYXllci5jb250cm9scyA9IG5ldyBMYXllclxuICAgIGhlaWdodDp2aWRlb0xheWVyLmhlaWdodFxuICAgIHdpZHRoOnZpZGVvTGF5ZXIud2lkdGhcbiAgICBzdXBlckxheWVyOnZpZGVvTGF5ZXJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gICAgbmFtZTpcImNvbnRyb2xzXCJcblxuICBVSXNldCA9IC0+XG4gICAgdmlkZW9MYXllci5pc0Z1bGxTY3JlZW4gPSBmYWxzZVxuICAgIHZpZGVvTGF5ZXIucGxheXN0b3AgPSBuZXcgTGF5ZXJcbiAgICAgIGJhY2tncm91bmRDb2xvcjptLmNvbG9yKFwiYmxhY2tcIilcbiAgICAgIHN1cGVyTGF5ZXI6dmlkZW9MYXllci5jb250cm9sc1xuICAgICAgYm9yZGVyUmFkaXVzOm0ucHgoNTApXG4gICAgICBoZWlnaHQ6bS5weCg1MClcbiAgICAgIHdpZHRoOm0ucHgoNTApXG4gICAgICBvcGFjaXR5Oi42XG4gICAgICBuYW1lOlwicGxheS9zdG9wXCJcbiAgICBpZiBzZXR1cC5zaG93UGxheVN0b3AgPT0gZmFsc2VcbiAgICAgIHZpZGVvTGF5ZXIucGxheXN0b3Aub3BhY2l0eSA9IDBcbiAgICB2aWRlb0xheWVyLnBsYXlzdG9wLmNlbnRlcigpXG5cbiAgICB2aWRlb0xheWVyLnBhdXNlID0gbmV3IG0uSWNvblxuICAgIFx0bmFtZTpcInBhdXNlXCJcbiAgICBcdGNvbG9yOlwid2hpdGVcIlxuXG4gICAgdmlkZW9MYXllci5wbGF5ID0gbmV3IG0uSWNvblxuICAgIFx0bmFtZTpcInBsYXlfYXJyb3dcIlxuICAgIFx0Y29sb3I6XCJ3aGl0ZVwiXG5cbiAgICB2aWRlb0xheWVyLmZ1bGxzY3JlZW4gPSBuZXcgbS5JY29uXG4gICAgXHRuYW1lOlwiZnVsbHNjcmVlblwiXG4gICAgXHRjb2xvcjpcIndoaXRlXCJcblxuICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbi5jb25zdHJhaW50cyA9XG4gICAgICBib3R0b206MFxuICAgICAgdHJhaWxpbmc6MTBcblxuICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbkV4aXQgPSBuZXcgbS5JY29uXG4gICAgXHRuYW1lOlwiZnVsbHNjcmVlbl9leGl0XCJcbiAgICBcdGNvbG9yOlwid2hpdGVcIlxuXG4gICAgdmlkZW9MYXllci5mdWxsc2NyZWVuRXhpdC5jb25zdHJhaW50cyA9XG4gICAgICBib3R0b206MFxuICAgICAgdHJhaWxpbmc6MTBcblxuICAgIG0ubGF5b3V0LnNldCh2aWRlb0xheWVyLmZ1bGxzY3JlZW4pXG5cbiAgICB2aWRlb0xheWVyLnBsYXkudmlzaWJsZSA9IGZhbHNlXG4gICAgdmlkZW9MYXllci5mdWxsc2NyZWVuRXhpdC52aXNpYmxlID0gZmFsc2VcblxuICAgIHZpZGVvTGF5ZXIuY29udHJvbHMuYWRkU3ViTGF5ZXIodmlkZW9MYXllci5wYXVzZSlcbiAgICB2aWRlb0xheWVyLmNvbnRyb2xzLmFkZFN1YkxheWVyKHZpZGVvTGF5ZXIucGxheSlcbiAgICB2aWRlb0xheWVyLmNvbnRyb2xzLmFkZFN1YkxheWVyKHZpZGVvTGF5ZXIuZnVsbHNjcmVlbilcbiAgICB2aWRlb0xheWVyLmNvbnRyb2xzLmFkZFN1YkxheWVyKHZpZGVvTGF5ZXIuZnVsbHNjcmVlbkV4aXQpXG4gICAgdmlkZW9MYXllci5wYXVzZS5jZW50ZXIoKVxuICAgIHZpZGVvTGF5ZXIucGxheS5jZW50ZXIoKVxuXG5cbiAgICB2aWRlb0xheWVyLmN1cnJlbnRUaW1lID0gbmV3IG0uVGV4dFxuICAgICAgdGV4dDptLnV0aWxzLnRvSEhNTVNTKHZpZGVvTGF5ZXIucGxheWVyLmN1cnJlbnRUaW1lKVxuICAgICAgY29sb3I6XCJ3aGl0ZVwiXG4gICAgICBjb25zdHJhaW50czp7Ym90dG9tOjgsIGxlYWRpbmc6MTd9XG4gICAgICBzdXBlckxheWVyOnZpZGVvTGF5ZXIuY29udHJvbHNcbiAgICAgIGZvbnRTaXplOjE0XG4gICAgICBuYW1lOlwiY3VycmVudFRpbWVcIlxuXG4gICAgdmlkZW9MYXllci5lbmRUaW1lID0gbmV3IG0uVGV4dFxuICAgICAgdGV4dDptLnV0aWxzLnRvSEhNTVNTKHZpZGVvTGF5ZXIucGxheWVyLmR1cmF0aW9uKVxuICAgICAgY29sb3I6XCJ3aGl0ZVwiXG4gICAgICBjb25zdHJhaW50czp7Ym90dG9tRWRnZXM6dmlkZW9MYXllci5jdXJyZW50VGltZSwgdHJhaWxpbmc6W3ZpZGVvTGF5ZXIuZnVsbHNjcmVlbiwgMTBdfVxuICAgICAgc3VwZXJMYXllcjp2aWRlb0xheWVyLmNvbnRyb2xzXG4gICAgICBmb250U2l6ZToxNFxuICAgICAgbmFtZTpcImVuZFRpbWVcIlxuXG4gICAgdmlkZW9MYXllci50aW1lYmFyID0gbmV3IExheWVyXG4gICAgICBzdXBlckxheWVyOnZpZGVvTGF5ZXIuY29udHJvbHNcbiAgICAgIGJhY2tncm91bmRDb2xvcjptLmNvbG9yKFwiZ3JleTMwMFwiKVxuICAgICAgbmFtZTpcInRpbWViYXJcIlxuICAgICAgb3BhY2l0eTouN1xuXG4gICAgdmlkZW9MYXllci50aW1lYmFyLmNvbnN0cmFpbnRzID1cbiAgICAgIGxlYWRpbmc6W3ZpZGVvTGF5ZXIuY3VycmVudFRpbWUsIDIwXVxuICAgICAgdHJhaWxpbmc6W3ZpZGVvTGF5ZXIuZW5kVGltZSwgMjBdXG4gICAgICBoZWlnaHQ6M1xuICAgICAgdmVydGljYWxDZW50ZXI6dmlkZW9MYXllci5jdXJyZW50VGltZVxuICAgIG0ubGF5b3V0LnNldCh2aWRlb0xheWVyLnRpbWViYXIpXG5cbiAgICB2aWRlb0xheWVyLnNlZWtlciA9IG5ldyBMYXllclxuICAgICAgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuICAgICAgc3VwZXJMYXllcjp2aWRlb0xheWVyLmNvbnRyb2xzXG4gICAgICBuYW1lOlwic2Vla2VyXCJcblxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLmNvbnN0cmFpbnRzID1cbiAgICAgIHdpZHRoOjUwXG4gICAgICBoZWlnaHQ6NTBcbiAgICAgIHZlcnRpY2FsQ2VudGVyOnZpZGVvTGF5ZXIuY3VycmVudFRpbWVcbiAgICBtLmxheW91dC5zZXQodmlkZW9MYXllci5zZWVrZXIpXG5cbiAgICB2aWRlb0xheWVyLnNlZWtlckRvdCA9IG5ldyBMYXllclxuICAgICAgd2lkdGg6bS5weCgxNSlcbiAgICAgIGhlaWdodDptLnB4KDE1KVxuICAgICAgYm9yZGVyUmFkaXVzOm0ucHgoMTUpXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6bS5jb2xvcihzZXR1cC5wcm9ncmVzc0NvbG9yKVxuICAgICAgc3VwZXJMYXllcjp2aWRlb0xheWVyLnNlZWtlclxuICAgICAgbmFtZTpcInNlZWtlckRvdFwiXG5cbiAgICB2aWRlb0xheWVyLnNlZWtlckRvdC5jZW50ZXIoKVxuXG4gICAgdmlkZW9MYXllci5wcm9ncmVzc0JhciA9IG5ldyBMYXllclxuICAgICAgYmFja2dyb3VuZENvbG9yOm0uY29sb3Ioc2V0dXAucHJvZ3Jlc3NDb2xvcilcbiAgICAgIHdpZHRoOjBcbiAgICAgIHN1cGVyTGF5ZXI6dmlkZW9MYXllci5jb250cm9sc1xuICAgICAgbmFtZTpcInByb2dyZXNzIGJhclwiXG5cbiAgICB2aWRlb0xheWVyLnByb2dyZXNzQmFyLmNvbnN0cmFpbnRzID1cbiAgICAgIGhlaWdodDozXG4gICAgICB2ZXJ0aWNhbENlbnRlcjp2aWRlb0xheWVyLnRpbWViYXJcblxuICAgIG0ubGF5b3V0LnNldCh0YXJnZXQ6W3ZpZGVvTGF5ZXIuc2Vla2VyLCB2aWRlb0xheWVyLnByb2dyZXNzQmFyXSlcblxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyT2Zmc2V0ID0gKHZpZGVvTGF5ZXIuc2Vla2VyLndpZHRoLzIgLSB2aWRlb0xheWVyLnNlZWtlckRvdC53aWR0aC8yKVxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLnggPSB2aWRlb0xheWVyLnRpbWViYXIueCAtIHZpZGVvTGF5ZXIuc2Vla2VyT2Zmc2V0XG4gICAgdmlkZW9MYXllci5wcm9ncmVzc0Jhci54ID0gdmlkZW9MYXllci50aW1lYmFyLnhcblxuICAgICNIYW5kbGUgSWRlbG5lc3NcbiAgICBpZGxlVGltZSA9IDBcbiAgICBVdGlscy5pbnRlcnZhbCAxLCAtPlxuICAgICAgaWRsZVRpbWUrK1xuICAgICAgaWYgaWRsZVRpbWUgPiBzZXR1cC5pZGxlTGltaXQgJiYgdmlkZW9MYXllci5wbGF5ZXIucGF1c2VkID09IGZhbHNlICYmIHZpZGVvTGF5ZXIuc2Vla2VyLndvcmtpbmcgIT0gdHJ1ZVxuICAgICAgICB2aWRlb0xheWVyLmNvbnRyb2xzLmFuaW1hdGVcbiAgICAgICAgICBwcm9wZXJ0aWVzOihvcGFjaXR5OjApXG4gICAgICAgICAgdGltZTouMjVcbiAgICAgICAgdmlkZW9MYXllci5wbGF5c3RvcC52aXNpYmxlID0gZmFsc2VcbiAgICAgIGVsc2VcbiAgICAgICAgdmlkZW9MYXllci5jb250cm9scy5vcGFjaXR5ID0gMVxuICAgICAgICB2aWRlb0xheWVyLnBsYXlzdG9wLnZpc2libGUgPSB0cnVlXG5cbiAgICB2aWRlb0xheWVyLmNvbnRyb2xzLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuICAgICAgaWYgaWRsZVRpbWUgPiBzZXR1cC5pZGxlTGltaXRcbiAgICAgICAgaWRsZVRpbWUgPSAwXG4gICAgICBlbHNlXG4gICAgICAgIGlkbGVUaW1lID0gNVxuXG4gICAgdmlkZW9MYXllci5wbGF5c3RvcC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG4gICAgICBpZiB2aWRlb0xheWVyLnBsYXllci5wYXVzZWRcbiAgICAgICAgdmlkZW9MYXllci5wbGF5LnZpc2libGUgPSBmYWxzZVxuICAgICAgICB2aWRlb0xheWVyLnBhdXNlLnZpc2libGUgPSB0cnVlXG4gICAgICAgIHZpZGVvTGF5ZXIucGxheWVyLnBsYXkoKVxuICAgICAgZWxzZVxuICAgICAgICB2aWRlb0xheWVyLnBsYXkudmlzaWJsZSA9IHRydWVcbiAgICAgICAgdmlkZW9MYXllci5wYXVzZS52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgdmlkZW9MYXllci5wbGF5ZXIucGF1c2UoKVxuXG4gICAgdmlkZW9MYXllci5mdWxsc2NyZWVuLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cbiAgICAgICAgdmlkZW9MYXllci5mdWxsc2NyZWVuLnZpc2libGUgPSBmYWxzZVxuICAgICAgICB2aWRlb0xheWVyLmZ1bGxzY3JlZW5FeGl0LnZpc2libGUgPSB0cnVlXG4gICAgICAgIHZpZGVvTGF5ZXIuY2FjaGVQcm9wcyA9IHZpZGVvTGF5ZXIucHJvcHNcbiAgICAgICAgdmlkZW9MYXllci5jYWNoZUFsaWduID0gdmlkZW9MYXllci5jb25zdHJhaW50cy5hbGlnblxuXG4gICAgICAgIGlmIHZpZGVvTGF5ZXIub25GdWxsU2NyZWVuXG4gICAgICAgICAgdmlkZW9MYXllci5vbkZ1bGxTY3JlZW4oKVxuXG4gICAgICAgIGlkbGVUaW1lID0gMFxuICAgICAgICB2aWRlb0xheWVyLmJhY2tkcm9wID0gbmV3IExheWVyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIlxuICAgICAgICAgIHdpZHRoOm0uZGV2aWNlLndpZHRoXG4gICAgICAgICAgaGVpZ2h0Om0uZGV2aWNlLmhlaWdodFxuICAgICAgICAgIG5hbWU6XCJiYWNrZHJvcFwiXG4gICAgICAgIHZpZGVvTGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPSBcImNlbnRlclwiXG5cbiAgICAgICAgdmlkZW9MYXllci5hbmltYXRlXG4gICAgICAgICAgcHJvcGVydGllczpcbiAgICAgICAgICAgIHdpZHRoOiBtLmRldmljZS53aWR0aFxuICAgICAgICAgICAgaGVpZ2h0OiBtLmRldmljZS53aWR0aCAqIDAuNTYyNVxuICAgICAgICAgIHRpbWU6LjVcbiAgICAgICAgbS5sYXlvdXQuYW5pbWF0ZVxuICAgICAgICAgIHRhcmdldDp2aWRlb0xheWVyXG4gICAgICAgICAgdGltZTouNVxuICAgICAgICBpZiBzZXR1cC5zdXBlckxheWVyXG4gICAgICAgICAgdmlkZW9MYXllci5iYWNrZHJvcC5zdXBlckxheWVyID0gc2V0dXAuc3VwZXJMYXllclxuICAgICAgICAgIHZpZGVvTGF5ZXIuYmFja2Ryb3AucGxhY2VCZWhpbmQodmlkZW9MYXllcilcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHZpZGVvTGF5ZXIuYmFja2Ryb3AucGxhY2VCZWhpbmQodmlkZW9MYXllcilcbiAgICAgICAgbS5hZGRUb1N0YWNrKHZpZGVvTGF5ZXIpXG5cbiAgICB2aWRlb0xheWVyLmZ1bGxzY3JlZW5FeGl0Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cbiAgICAgICAgdmlkZW9MYXllci5mdWxsc2NyZWVuLnZpc2libGUgPSB0cnVlXG4gICAgICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbkV4aXQudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIGlkbGVUaW1lID0gMFxuICAgICAgICBtLnJlbW92ZUZyb21TdGFjaygpXG5cblxuXG4gICAgdmlkZW9MYXllci5leGl0ID0gKCkgLT5cbiAgICAgICAgdmlkZW9MYXllci5hbmltYXRlXG4gICAgICAgICAgcHJvcGVydGllczooeDp2aWRlb0xheWVyLmNhY2hlUHJvcHMueCwgeTp2aWRlb0xheWVyLmNhY2hlUHJvcHMueSwgd2lkdGg6dmlkZW9MYXllci5jYWNoZVByb3BzLndpZHRoLCBoZWlnaHQ6dmlkZW9MYXllci5jYWNoZVByb3BzLmhlaWdodClcbiAgICAgICAgICB0aW1lOi41XG5cbiAgICAgICAgdmlkZW9MYXllci5jb25zdHJhaW50cy5hbGlnbiA9IHZpZGVvTGF5ZXIuY2FjaGVBbGlnblxuXG4gICAgICAgIHZpZGVvTGF5ZXIuYmFja2Ryb3AuYW5pbWF0ZVxuICAgICAgICAgIHByb3BlcnRpZXM6KG9wYWNpdHk6MClcbiAgICAgICAgICB0aW1lOi41XG4gICAgICAgICAgZGVsYXk6LjJcbiAgICAgICAgVXRpbHMuZGVsYXkgLjcsIC0+XG4gICAgICAgICAgdmlkZW9MYXllci5iYWNrZHJvcC5kZXN0cm95KClcblxuICAgICAgICB2aWRlb0xheWVyLmZ1bGxzY3JlZW4udmlzaWJsZSA9IHRydWVcbiAgICAgICAgdmlkZW9MYXllci5mdWxsc2NyZWVuRXhpdC52aXNpYmxlID0gZmFsc2VcblxuICAgICAgICBpZiB2aWRlb0xheWVyLm9uRnVsbFNjcmVlbkV4aXRcbiAgICAgICAgICB2aWRlb0xheWVyLm9uRnVsbFNjcmVlbkV4aXQoKVxuXG4gICAgI1NlZWtlciBDb250cm9sc1xuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLmRyYWdnYWJsZS5lbmFibGVkID0gdHJ1ZVxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLmRyYWdnYWJsZS5zcGVlZFkgPSAwXG4gICAgdmlkZW9MYXllci5zZWVrZXIuZHJhZ2dhYmxlLnNwZWVkWCA9IDFcbiAgICB2aWRlb0xheWVyLnNlZWtlci5kcmFnZ2FibGUubW9tZW50dW0gPSBmYWxzZVxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLmRyYWdnYWJsZS5ib3VuY2UgPSBmYWxzZVxuXG4gICAgdmlkZW9MYXllci5zZWVrZXIub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG4gICAgICB2aWRlb0xheWVyLnNlZWtlci5zY2FsZSA9IDEuMlxuICAgICAgdmlkZW9MYXllci5zZWVrZXIud29ya2luZyA9IHRydWVcblxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLm9uIEV2ZW50cy5EcmFnTW92ZSwgLT5cbiAgICAgIHZpZGVvTGF5ZXIuc2Vla2VyLndvcmtpbmcgPSB0cnVlXG4gICAgICBpZiB2aWRlb0xheWVyLnNlZWtlci54ICsgdmlkZW9MYXllci5zZWVrZXJPZmZzZXQgPCB2aWRlb0xheWVyLnRpbWViYXIueFxuICAgICAgICB2aWRlb0xheWVyLnNlZWtlci54ID0gdmlkZW9MYXllci50aW1lYmFyLnggLSB2aWRlb0xheWVyLnNlZWtlck9mZnNldFxuICAgICAgaWYgdmlkZW9MYXllci5zZWVrZXIubWF4WCA+IHZpZGVvTGF5ZXIudGltZWJhci5tYXhYICsgdmlkZW9MYXllci5zZWVrZXJPZmZzZXRcbiAgICAgICAgdmlkZW9MYXllci5zZWVrZXIubWF4WCA9IHZpZGVvTGF5ZXIudGltZWJhci5tYXhYICsgdmlkZW9MYXllci5zZWVrZXJPZmZzZXRcbiAgICAgIG5ld0NUID0gdmlkZW9MYXllci5wbGF5ZXIuZHVyYXRpb24gKiAoKHZpZGVvTGF5ZXIuc2Vla2VyLnggKyB2aWRlb0xheWVyLnNlZWtlck9mZnNldCAtIHZpZGVvTGF5ZXIudGltZWJhci54KS92aWRlb0xheWVyLnRpbWViYXIud2lkdGgpXG4gICAgICBpZiBuZXdDVCA8IDBcbiAgICAgICAgbmV3Q1QgPSAwXG4gICAgICBpZiBuZXdDVCA+IHZpZGVvTGF5ZXIucGxheWVyLmR1cmF0aW9uXG4gICAgICAgIG5ld0NUID0gdmlkZW9MYXllci5wbGF5ZXIuZHVyYXRpb25cbiAgICAgIG0udXRpbHMudXBkYXRlKHZpZGVvTGF5ZXIuY3VycmVudFRpbWUsIFt7dGV4dDptLnV0aWxzLnRvSEhNTVNTKG5ld0NUKX1dKVxuXG4gICAgdmlkZW9MYXllci5zZWVrZXIub24gRXZlbnRzLkRyYWdFbmQsIC0+XG4gICAgICB2aWRlb0xheWVyLnNlZWtlci5zY2FsZSA9IDFcbiAgICAgIHZpZGVvTGF5ZXIuc2Vla2VyLndvcmtpbmcgPSBmYWxzZVxuICAgICAgZXQgPSB2aWRlb0xheWVyLnBsYXllci5kdXJhdGlvblxuICAgICAgbmV3Q1QgPSBldCAqICgodmlkZW9MYXllci5zZWVrZXIueCArIHZpZGVvTGF5ZXIuc2Vla2VyT2Zmc2V0IC0gdmlkZW9MYXllci50aW1lYmFyLngpL3ZpZGVvTGF5ZXIudGltZWJhci53aWR0aClcbiAgICAgIGlmIG5ld0NUIDwgMFxuICAgICAgICBuZXdDVCA9IDBcbiAgICAgIGlmIG5ld0NUID4gdmlkZW9MYXllci5wbGF5ZXIuZHVyYXRpb25cbiAgICAgICAgbmV3Q1QgPSB2aWRlb0xheWVyLnBsYXllci5kdXJhdGlvblxuICAgICAgbmV3Q1QgPSBNYXRoLnJvdW5kKG5ld0NUKVxuICAgICAgdmlkZW9MYXllci5wbGF5ZXIuY3VycmVudFRpbWUgPSBuZXdDVFxuXG5cbiAgVUlkZWxlZ2F0ZSA9IC0+XG4gICAgY3QgPSB2aWRlb0xheWVyLnBsYXllci5jdXJyZW50VGltZVxuICAgIGV0ID0gdmlkZW9MYXllci5wbGF5ZXIuZHVyYXRpb25cbiAgICBpZiB2aWRlb0xheWVyLnNlZWtlci53b3JraW5nXG4gICAgICAgICMgRG8gbm90aGluZ1xuICAgIGVsc2VcbiAgICAgIG0udXRpbHMudXBkYXRlKHZpZGVvTGF5ZXIuY3VycmVudFRpbWUsIFt7dGV4dDptLnV0aWxzLnRvSEhNTVNTKHZpZGVvTGF5ZXIucGxheWVyLmN1cnJlbnRUaW1lKX1dKVxuICAgICAgdmlkZW9MYXllci5zZWVrZXIueCA9IHZpZGVvTGF5ZXIudGltZWJhci54ICsgKHZpZGVvTGF5ZXIudGltZWJhci53aWR0aCAqIGN0L2V0KSAtIHZpZGVvTGF5ZXIuc2Vla2VyT2Zmc2V0XG4gICAgICB2aWRlb0xheWVyLnByb2dyZXNzQmFyLndpZHRoID0gIHZpZGVvTGF5ZXIuc2Vla2VyLnggKyB2aWRlb0xheWVyLnNlZWtlck9mZnNldCAtIHZpZGVvTGF5ZXIudGltZWJhci54XG5cbiAgdmlkZW9MYXllci5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZGRhdGFcIiwgVUlzZXQpXG4gIHZpZGVvTGF5ZXIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIFVJZGVsZWdhdGUpXG5cblxuICByZXR1cm4gdmlkZW9MYXllclxuIiwiI21hdGVyaWFsS2l0IE1vZHVsZVxuI0J5IEtldnluIEFybm90dFxuXG4jIEltcG9ydCBmcmFtZXdvcmtcbmV4cG9ydHMubGF5b3V0ID0gbGF5b3V0ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWxheW91dCdcbmV4cG9ydHMubGliID0gbGlicmFyeSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1saWJyYXJ5J1xuZXhwb3J0cy51dGlscyA9IHV0aWxzID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LXV0aWxzJ1xuZXhwb3J0cy5zdGFjayA9IHN0YWNrID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LXN0YWNrJ1xuXG4jIFNldHVwIHJlc291cmNlc1xuZXhwb3J0cy5kZXZpY2UgPSB1dGlscy5nZXREZXZpY2UoKVxuZXhwb3J0cy5hc3NldHMgPSBsaWJyYXJ5LmFzc2V0c1xuXG4jIyBTaG9ydGN1dHNcbmV4cG9ydHMuY29sb3IgPSAoY29sb3JTdHJpbmcpIC0+XG4gIHJldHVybiBleHBvcnRzLnV0aWxzLmNvbG9yKGNvbG9yU3RyaW5nKVxuXG5leHBvcnRzLmRwID0gKHB4KSAtPlxuICByZXR1cm4gZXhwb3J0cy51dGlscy5wdChweClcblxuZXhwb3J0cy5weCA9IChkcCkgLT5cbiAgcmV0dXJuIGV4cG9ydHMudXRpbHMucHgoZHApXG5cbmV4cG9ydHMuc3RhY2sgPSBzdGFjay5zdGFja1xuXG5leHBvcnRzLmFkZFRvU3RhY2sgPSAobGF5ZXIpIC0+XG4gIHN0YWNrLmFkZFRvU3RhY2sobGF5ZXIpXG5cbmV4cG9ydHMucmVtb3ZlRnJvbVN0YWNrID0gKGxheWVyKSAtPlxuICBzdGFjay5yZW1vdmVGcm9tU3RhY2sobGF5ZXIpXG5cblxuIyBJbXBvcnQgQ29tcG9uZW50c1xuYXBwYmFyID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWFwcC1iYXInXG5iYW5uZXIgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtYmFubmVyJ1xuYnV0dG9uID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWJ1dHRvbidcbmRpYWxvZyA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1kaWFsb2cnXG5pY29uID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWljb24nXG5uYXYgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtbmF2LWJhcidcbnNuYWNrYmFyID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LXNuYWNrLWJhcidcbnN0YXR1cyA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1zdGF0dXMtYmFyJ1xudGV4dCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC10ZXh0J1xudmlkZW8gPSByZXF1aXJlICdtYXRlcmlhbC1raXQtdmlkZW8nXG5cbiMjIFNldHVwIENvbXBvbmVudHNcbmV4cG9ydHMuQXBwQmFyID0gYXBwYmFyLmNyZWF0ZVxuZXhwb3J0cy5CYW5uZXIgPSBiYW5uZXIuY3JlYXRlXG5leHBvcnRzLkJ1dHRvbiA9IGJ1dHRvbi5jcmVhdGVcbmV4cG9ydHMuRGlhbG9nID0gZGlhbG9nLmNyZWF0ZVxuZXhwb3J0cy5JY29uID0gaWNvbi5jcmVhdGVcbmV4cG9ydHMuTmF2QmFyID0gbmF2LmNyZWF0ZVxuZXhwb3J0cy5TbmFja0JhciA9IHNuYWNrYmFyLmNyZWF0ZVxuZXhwb3J0cy5TdGF0dXNCYXIgPSBzdGF0dXMuY3JlYXRlXG5leHBvcnRzLlRleHQgPSB0ZXh0LmNyZWF0ZVxuZXhwb3J0cy5WaWRlbyA9IHZpZGVvLmNyZWF0ZVxuIl19
