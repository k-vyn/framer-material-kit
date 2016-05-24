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
  leftAction: void 0,
  right: "Edit",
  blur: true,
  superLayer: void 0,
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
  var act, actionsArray, bar, barArea, handleTabStates, i, icon, j, k, l, label, layer, len, len1, len2, len3, n, ref, ref1, ref2, setup, t, tab, tabsActiveBar, title, view;
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
  title.constraints = {
    bottom: 12,
    leading: 16
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
          color: setup.titleColor,
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
          color: setup.titleColor,
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
  if (setup.tabs.length > 2) {
    bar.activeTab = bar.tabs[setup.tabs[0]];
    handleTabStates(bar, bar.activeTab);
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
  animated: false
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
  style: "light",
  backgroundColor: "white",
  color: "teal300",
  fontSize: 17,
  fontWeight: "regular",
  name: "button",
  blur: true,
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
      if (layer.constraints.leading !== void 0) {
        if (layer.constraints.leading === parseInt(layer.constraints.leading, 10)) {
          props.x = m.utils.px(layer.constraints.leading);
        } else {
          if (layer.constraints.leading.length === void 0) {
            props.x = layer.constraints.leading.calculatedPosition.x + layer.constraints.leading.calculatedPosition.width;
          } else {
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
            props.x = layer.constraints.trailing.calculatedPosition.x - props.width;
          } else {
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
            props.y = layer.constraints.top.calculatedPosition.y + layer.constraints.top.calculatedPosition.height;
          } else {
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
            props.y = layer.constraints.bottom.calculatedPosition.y - props.height;
          } else {
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
      if (layer.constraints.leadingEdges !== void 0) {
        props.x = layer.constraints.leadingEdges.calculatedPosition.x;
      }
      if (layer.constraints.trailingEdges !== void 0) {
        props.x = layer.constraints.trailingEdges.calculatedPosition.x - props.width + layer.constraints.trailingEdges.calculatedPosition.width;
      }
      if (layer.constraints.topEdges !== void 0) {
        props.y = layer.constraints.topEdges.calculatedPosition.y;
      }
      if (layer.constraints.bottomEdges !== void 0) {
        props.y = layer.constraints.bottomEdges.calculatedPosition.y - props.height + layer.constraints.bottomEdges.calculatedPosition.height;
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
    bottom: 0,
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
  animated: false,
  text: "Snackbar Text",
  action: void 0,
  actionColor: "limeA200",
  duration: 3
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
    if (l.type === "snackbar") {
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
    bottom: navbarExists,
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
  }
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
        height: m.device.height - m.px(48)
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL2RlbW9fZGF0YS5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1hcHAtYmFyLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWJhbm5lci5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1idXR0b24uY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtZGlhbG9nLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWljb24uY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtbGF5b3V0LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWxpYnJhcnkuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtbmF2LWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1zbmFjay1iYXIuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtc3RhY2suY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtc3RhdHVzLWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC10ZXh0LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXV0aWxzLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXZpZGVvLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE9BQU8sQ0FBQyxJQUFSLEdBQWU7RUFDYixJQUFBLEVBQUs7SUFDSDtNQUNFLE9BQUEsRUFBUSx3QkFEVjtNQUVFLFFBQUEsRUFBUyxlQUZYO01BR0UsT0FBQSxFQUFRLFNBSFY7TUFJRSxhQUFBLEVBQWMsTUFKaEI7TUFLRSxVQUFBLEVBQVksWUFMZDtNQU1FLE1BQUEsRUFBTyxjQU5UO01BT0UsTUFBQSxFQUFTLFFBUFg7TUFRRSxXQUFBLEVBQVksSUFSZDtNQVNFLGFBQUEsRUFBZ0IsS0FUbEI7TUFVRSxPQUFBLEVBQVEsa0ZBVlY7TUFXRSxXQUFBLEVBQVksc0RBWGQ7TUFZRSxhQUFBLEVBQWMsMEdBWmhCO0tBREcsRUFl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bkIsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsS0FBakI7QUFEbUI7O0FBR3JCLE9BQU8sQ0FBQyxlQUFSLEdBQTBCLFNBQUMsS0FBRDtTQUN4QixLQUFLLENBQUMsZUFBTixDQUFzQixLQUF0QjtBQUR3Qjs7QUFLMUIsTUFBQSxHQUFTLE9BQUEsQ0FBUSxzQkFBUjs7QUFDVCxNQUFBLEdBQVMsT0FBQSxDQUFRLHFCQUFSOztBQUNULE1BQUEsR0FBUyxPQUFBLENBQVEscUJBQVI7O0FBQ1QsTUFBQSxHQUFTLE9BQUEsQ0FBUSxxQkFBUjs7QUFDVCxJQUFBLEdBQU8sT0FBQSxDQUFRLG1CQUFSOztBQUNQLEdBQUEsR0FBTSxPQUFBLENBQVEsc0JBQVI7O0FBQ04sUUFBQSxHQUFXLE9BQUEsQ0FBUSx3QkFBUjs7QUFDWCxNQUFBLEdBQVMsT0FBQSxDQUFRLHlCQUFSOztBQUNULElBQUEsR0FBTyxPQUFBLENBQVEsbUJBQVI7O0FBQ1AsS0FBQSxHQUFRLE9BQUEsQ0FBUSxvQkFBUjs7QUFHUixPQUFPLENBQUMsTUFBUixHQUFpQixNQUFNLENBQUM7O0FBQ3hCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE1BQU0sQ0FBQzs7QUFDeEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsTUFBTSxDQUFDOztBQUN4QixPQUFPLENBQUMsTUFBUixHQUFpQixNQUFNLENBQUM7O0FBQ3hCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsSUFBSSxDQUFDOztBQUNwQixPQUFPLENBQUMsTUFBUixHQUFpQixHQUFHLENBQUM7O0FBQ3JCLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFFBQVEsQ0FBQzs7QUFDNUIsT0FBTyxDQUFDLFNBQVIsR0FBb0IsTUFBTSxDQUFDOztBQUMzQixPQUFPLENBQUMsSUFBUixHQUFlLElBQUksQ0FBQzs7QUFDcEIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsS0FBSyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydHMuanNvbiA9IHtcbiAgaG9tZTpbXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiTWFraW5nIE1hdGVyaWFsIERlc2lnblwiLFxuICAgICAgXCJhdXRob3JcIjpcIkdvb2dsZSBEZXNpZ25cIixcbiAgICAgIFwidmlld3NcIjpcIjQwOSwxMzBcIixcbiAgICAgIFwic2hvcnRfdmlld3NcIjpcIjQwOUtcIlxuICAgICAgXCJyZWxfZGF0ZVwiOiBcIjEgeWVhciBhZ29cIixcbiAgICAgIFwiZGF0ZVwiOlwiTWF5IDI4LCAyMDE1XCIsXG4gICAgICBcInN1YnNcIiA6IFwiNDEsMzY3XCJcbiAgICAgIFwidGh1bWJzX3VwXCI6XCI3S1wiXG4gICAgICBcInRodW1ic19kb3duXCIgOiBcIjE1NlwiXG4gICAgICBcInZpZGVvXCI6XCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8xNDMyNzA1NTYvWW91VHViZS9tYWtpbmctbWF0ZXJpYWwtZGVzaWduLm1wNFwiLFxuICAgICAgXCJ0aHVtYm5haWxcIjpcImh0dHBzOi8vaS55dGltZy5jb20vdmkvcnJUNnY1c093SmcvbWF4cmVzZGVmYXVsdC5qcGdcIixcbiAgICAgIFwicHJvZmlsZV9waWNcIjpcImh0dHBzOi8veXQzLmdncGh0LmNvbS8tOTlSTWtMMzJ5azgvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvVlJRa01idWxuY28vczg4LWMtay1uby1yai1jMHhmZmZmZmYvcGhvdG8uanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIiQxOCwwMDAgYSBuaWdodCBIT1RFTCBST09NXCIsXG4gICAgICBcImF1dGhvclwiOlwiQ2Fpc2V5TmVpc3RhdFwiLFxuICAgICAgXCJ2aWV3c1wiOlwiMiwxMjMsNzI1XCIsXG4gICAgICBcInNob3J0X3ZpZXdzXCI6XCIyTVwiXG4gICAgICBcImRhdGVcIjpcIk1heSAxOSwgMjAxNlwiLFxuICAgICAgXCJyZWxfZGF0ZVwiOiBcIjMgZGF5cyBhZ29cIixcbiAgICAgIFwic3Vic1wiIDogXCIzLDA1Myw4MTJcIixcbiAgICAgIFwidGh1bWJzX3VwXCI6XCI3NEtcIlxuICAgICAgXCJ0aHVtYnNfZG93blwiIDogXCIxLjlLXCJcbiAgICAgIFwidmlkZW9cIjpcImh0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzE0MzI3MDU1Ni9Zb3VUdWJlL2Nhc2V5LW5laXN0YXQubXA0XCIsXG4gICAgICBcInRodW1ibmFpbFwiOlwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS84c3FZNlFYdFRzSS9ocWRlZmF1bHQuanBnXCIsXG4gICAgICBcInByb2ZpbGVfcGljXCI6XCJodHRwczovL3l0My5nZ3BodC5jb20vLXgyTk5OMnk0OUcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL1Jod1ZheE12cVc4L3M4OC1jLWstbm8tcmotYzB4ZmZmZmZmL3Bob3RvLmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJIaWxsYXJ5ICYgQmVybmllIENvbGQgT3BlbiAtIFNOTFwiLFxuICAgICAgXCJhdXRob3JcIjpcIlNhdHVyZGF5IE5pZ2h0IExpdmVcIixcbiAgICAgIFwidmlld3NcIjpcIjEsMDI3LDY3NlwiLFxuICAgICAgXCJzaG9ydF92aWV3c1wiOlwiMU1cIlxuICAgICAgXCJyZWxfZGF0ZVwiOiBcIjEgZGF5IGFnb1wiLFxuICAgICAgXCJkYXRlXCI6XCJNYXkgMjIsIDIwMTZcIixcbiAgICAgIFwic3Vic1wiIDogXCIyLDQwMCwwMjJcIixcbiAgICAgIFwidGh1bWJzX3VwXCI6XCIxMUtcIlxuICAgICAgXCJ0aHVtYnNfZG93blwiIDogXCI5ODhcIlxuICAgICAgXCJ2aWRlb1wiOlwiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMTQzMjcwNTU2L1lvdVR1YmUvaGlsYXJ5LWJlcm5pZS5tcDRcIixcbiAgICAgIFwidGh1bWJuYWlsXCI6XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0hScVpoSmNhZTNNL21heHJlc2RlZmF1bHQuanBnXCIsXG4gICAgICBcInByb2ZpbGVfcGljXCI6XCJodHRwczovL3l0My5nZ3BodC5jb20vLXgtcEtXMXliNnk4L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL2pQYk1VNFpXMHNBL3M4OC1jLWstbm8tcmotYzB4ZmZmZmZmL3Bob3RvLmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJFdXJvcGVhbiB3aW5kb3dzIGFyZSBhd2Vzb21lXCIsXG4gICAgICBcImF1dGhvclwiOlwiTWF0dGhpYXMgV2FuZGVsXCIsXG4gICAgICBcInZpZXdzXCI6XCI0ODksNjQ3XCIsXG4gICAgICBcInNob3J0X3ZpZXdzXCI6XCI0ODlLXCJcbiAgICAgIFwicmVsX2RhdGVcIjogXCIxIGRheSBhZ29cIixcbiAgICAgIFwiZGF0ZVwiOlwiTWF5IDIyLCAyMDE2XCIsXG4gICAgICBcInN1YnNcIiA6IFwiMjEsNDA5XCIsXG4gICAgICBcInRodW1ic191cFwiOlwiM0tcIlxuICAgICAgXCJ0aHVtYnNfZG93blwiIDogXCIxMDVcIlxuICAgICAgXCJ2aWRlb1wiOlwiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMTQzMjcwNTU2L1lvdVR1YmUvZXVyb3BlYW4td2luZG93cy5tcDRcIixcbiAgICAgIFwidGh1bWJuYWlsXCI6XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0xUOGVCamxjVDhzL21heHJlc2RlZmF1bHQuanBnXCIsXG4gICAgICBcInByb2ZpbGVfcGljXCI6XCJodHRwczovL3l0My5nZ3BodC5jb20vLVMxSFlaT1ZqYXlFL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL1VZNzN4M0RvSXZnL3M4OC1jLWstbm8tcmotYzB4ZmZmZmZmL3Bob3RvLmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJZb1wiLFxuICAgICAgXCJhdXRob3JcIjpcIlNhdHVyZGF5IE5pZ2h0IExpdmVcIixcbiAgICAgIFwidmlld3NcIjpcIjEsMDI3LDY3NlwiLFxuICAgICAgXCJzaG9ydF92aWV3c1wiOlwiMU1cIlxuICAgICAgXCJyZWxfZGF0ZVwiOiBcIjEgZGF5IGFnb1wiLFxuICAgICAgXCJkYXRlXCI6XCJNYXkgMjIsIDIwMTZcIixcbiAgICAgIFwic3Vic1wiIDogXCIyLDQwMCwwMjJcIixcbiAgICAgIFwidGh1bWJzX3VwXCI6XCIxMUtcIlxuICAgICAgXCJ0aHVtYnNfZG93blwiIDogXCI5ODhcIlxuICAgICAgXCJ2aWRlb1wiOlwiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMTQzMjcwNTU2L1lvdVR1YmUvaGlsYXJ5LWJlcm5pZS5tcDRcIixcbiAgICAgIFwidGh1bWJuYWlsXCI6XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0hScVpoSmNhZTNNL21heHJlc2RlZmF1bHQuanBnXCIsXG4gICAgICBcInByb2ZpbGVfcGljXCI6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS91c2VyL1NhdHVyZGF5TmlnaHRMaXZlXCJcbiAgICB9XG4gIF1cbn1cbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRpdGxlOlwiVGl0bGVcIlxuXHRsZWZ0QWN0aW9uOnVuZGVmaW5lZFxuXHRyaWdodDpcIkVkaXRcIlxuXHRibHVyOnRydWVcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0dHlwZTpcImFwcGJhclwiXG5cdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0dGFiczp1bmRlZmluZWRcblx0dGl0bGVDb2xvcjpcImJsYWNrXCJcblx0YWN0aW9uQ29sb3I6XCJibGFja1wiXG5cdHRhYnM6dW5kZWZpbmVkXG5cdHRhYnNDb2xvcjp1bmRlZmluZWRcblx0dGFic0luazp7Y29sb3I6XCJibHVlR3JleVwiLCBzY2FsZTo4fVxuXHR0YWJzQmFyQ29sb3I6XCJ5ZWxsb3dcIlxuXHR0YWJzQWx0Ontjb2xvcjp1bmRlZmluZWQsIG9wYWNpdHk6Ljd9XG5cdHRhYkljb25zOnVuZGVmaW5lZFxuXHRhY3Rpb25zOnVuZGVmaW5lZFxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblx0YmFyID0gbmV3IExheWVyXG5cdFx0bmFtZTpcIkFwcCBCYXJcIlxuXHRcdGJhY2tncm91bmRDb2xvcjptLmNvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblx0XHRzaGFkb3dDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC4xMilcIlxuXHRcdHNoYWRvd0JsdXI6IG0ucHgoNClcblx0XHRzaGFkb3dZOiBtLnB4KDIpXG5cblx0YmFyLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRoZWlnaHQ6ODBcblxuXHRpZiBzZXR1cC50YWJzXG5cdFx0YmFyLmNvbnN0cmFpbnRzLmhlaWdodCA9IDEyOFxuXG5cdGJhckFyZWEgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpiYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYXJBcmVhXCJcblx0YmFyQXJlYS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDo1NlxuXHRcdGJvdHRvbTowXG5cblx0aWYgc2V0dXAudGFicyAmJiBzZXR1cC50YWJzLmxlbmd0aCA+IDJcblx0XHRiYXJBcmVhLmNvbnN0cmFpbnRzLmJvdHRvbSA9IDQ4XG5cblx0aWYgc2V0dXAuc3VwZXJMYXllclxuXHRcdHNldHVwLnN1cGVyTGF5ZXIuYWRkU3ViTGF5ZXIoYmFyKVxuXG5cdG0ubGF5b3V0LnNldChbYmFyLCBiYXJBcmVhXSlcblxuXHRiYXIudHlwZSA9IHNldHVwLnR5cGVcblxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJzdGF0dXNCYXJcIlxuXHRcdFx0QHN0YXR1c0JhciA9IGxheWVyXG5cdFx0XHRiYXIucGxhY2VCZWhpbmQoQHN0YXR1c0JhcilcblxuXHRpZiBzZXR1cC50aXRsZUNvbG9yID09IFwiYmxhY2tcIlxuXHRcdHNldHVwLnRpdGxlQ29sb3IgPSBtLnV0aWxzLmF1dG9Db2xvcihiYXIuYmFja2dyb3VuZENvbG9yKS50b0hleFN0cmluZygpXG5cblx0aWYgc2V0dXAuYWN0aW9uQ29sb3IgPT0gXCJibGFja1wiXG5cdFx0c2V0dXAuYWN0aW9uQ29sb3IgPSBtLnV0aWxzLmF1dG9Db2xvcihiYXIuYmFja2dyb3VuZENvbG9yKS50b0hleFN0cmluZygpXG5cblx0aWYgdHlwZW9mIHNldHVwLnRpdGxlID09IFwic3RyaW5nXCJcblx0XHR0aXRsZSA9IG5ldyBtLlRleHRcblx0XHRcdGNvbG9yOnNldHVwLnRpdGxlQ29sb3Jcblx0XHRcdGZvbnRXZWlnaHQ6NTAwXG5cdFx0XHRzdXBlckxheWVyOmJhckFyZWFcblx0XHRcdHRleHQ6c2V0dXAudGl0bGVcblx0XHRcdGZvbnRTaXplOjIwXG5cblx0bS51dGlscy5zcGVjaWFsQ2hhcih0aXRsZSlcblxuXHR0aXRsZS5jb25zdHJhaW50cyA9XG5cdFx0Ym90dG9tOjEyXG5cdFx0bGVhZGluZzoxNlxuXG5cdGlmIHNldHVwLmxlZnRBY3Rpb25cblx0XHR0aXRsZS5jb25zdHJhaW50cy5sZWFkaW5nID0gNzNcblxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDpbdGl0bGVdXG5cblx0YWN0aW9uc0FycmF5ID0gW11cblx0aWYgc2V0dXAuYWN0aW9uc1xuXHRcdGZvciBhY3QsIGkgaW4gc2V0dXAuYWN0aW9uc1xuXHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdGljb24gPSBuZXcgbS5JY29uXG5cdFx0XHRcdFx0bmFtZTphY3Rcblx0XHRcdFx0XHRzdXBlckxheWVyOmJhckFyZWFcblx0XHRcdFx0XHRjb25zdHJhaW50czp7dHJhaWxpbmc6MjQsIHZlcnRpY2FsQ2VudGVyOnRpdGxlfVxuXHRcdFx0XHRcdGNvbG9yOnNldHVwLnRpdGxlQ29sb3Jcblx0XHRcdFx0XHRjbGlwOmZhbHNlXG5cdFx0XHRcdGFjdGlvbnNBcnJheS5wdXNoIGljb25cblx0XHRcdGVsc2Vcblx0XHRcdFx0aWNvbiA9IG5ldyBtLkljb25cblx0XHRcdFx0XHRuYW1lOmFjdFxuXHRcdFx0XHRcdHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRcdFx0XHRcdGNvbnN0cmFpbnRzOnt0cmFpbGluZzpbYWN0aW9uc0FycmF5W2kgLSAxXSwgMjRdLCB2ZXJ0aWNhbENlbnRlcjp0aXRsZX1cblx0XHRcdFx0XHRjb2xvcjpzZXR1cC50aXRsZUNvbG9yXG5cdFx0XHRcdFx0Y2xpcDpmYWxzZVxuXHRcdFx0XHRhY3Rpb25zQXJyYXkucHVzaCBpY29uXG5cblx0XHRmb3IgYWN0IGluIGFjdGlvbnNBcnJheVxuXHRcdFx0bS51dGlscy5pbmt5XG5cdFx0XHRcdGxheWVyOmFjdFxuXHRcdFx0XHRtb3ZlVG9UYXA6ZmFsc2Vcblx0XHRcdFx0Y29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRcdG9wYWNpdHk6LjRcblx0XHRcdFx0c2NhbGU6Ljhcblx0XHRcdFx0c3RhcnRTY2FsZTouN1xuXG5cblx0aWYgc2V0dXAudGFicyAmJiBzZXR1cC50YWJzLmxlbmd0aCA+IDJcblxuXHRcdGhhbmRsZVRhYlN0YXRlcyA9IChiYXIsIGxheWVyKSAtPlxuXHRcdFx0dGFic0FycmF5ID0gT2JqZWN0LmtleXMoYmFyLnRhYnMpXG5cdFx0XHRhY3RpdmVUYWJJbmRleCA9IHVuZGVmaW5lZFxuXHRcdFx0Zm9yIHQsIGkgaW4gdGFic0FycmF5XG5cdFx0XHRcdHRhYiA9IGJhci50YWJzW3RdXG5cblx0XHRcdFx0aWYgdGFiID09IGJhci5hY3RpdmVUYWJcblx0XHRcdFx0XHRhY3RpdmVUYWJJbmRleCA9IGlcblx0XHRcdFx0XHRiYXIudmlld3NbdF0uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczooeDowKVxuXHRcdFx0XHRcdFx0dGltZTouMjVcblx0XHRcdFx0XHR0YWIubGFiZWwub3BhY2l0eSA9IDFcblx0XHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBzZXR1cC50YWJzQ29sb3Jcblx0XHRcdFx0XHRiYXIuYWN0aXZlQmFyLmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KHg6bGF5ZXIueClcblx0XHRcdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRcdFx0XHRjdXJ2ZTpcImJlemllci1jdXJ2ZSguMiwgMC40LCAwLjQsIDEuMClcIlxuXHRcdFx0XHRcdG0udXRpbHMudXBkYXRlKHRpdGxlLCBbe3RleHQ6bS51dGlscy5jYXBpdGFsaXplKGJhci5hY3RpdmVUYWIubGFiZWwubmFtZSl9XSlcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIGFjdGl2ZVRhYkluZGV4ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0YmFyLnZpZXdzW3RdLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczooeDptLmRldmljZS53aWR0aCAqIC0xKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRcdFx0XHRjdXJ2ZTpcImN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKVwiXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YmFyLnZpZXdzW3RdLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczooeDptLmRldmljZS53aWR0aClcblx0XHRcdFx0XHRcdFx0dGltZTouMjVcblx0XHRcdFx0XHRcdFx0Y3VydmU6XCJjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlcIlxuXG5cdFx0XHRcdFx0b3BhY2l0eSA9IDFcblx0XHRcdFx0XHRjb2xvciA9IHRhYi5sYWJlbC5jb2xvclxuXHRcdFx0XHRcdGlmIHNldHVwLnRhYnNBbHQub3BhY2l0eSAhPSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdG9wYWNpdHkgPSBzZXR1cC50YWJzQWx0Lm9wYWNpdHlcblxuXHRcdFx0XHRcdGlmIHNldHVwLnRhYnNBbHQuY29sb3IgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRjb2xvciA9IHNldHVwLnRhYnNBbHQuY29sb3JcblxuXHRcdFx0XHRcdHRhYi5sYWJlbC5vcGFjaXR5ID0gb3BhY2l0eVxuXHRcdFx0XHRcdHRhYi5sYWJlbC5jb2xvciA9IGNvbG9yXG5cblx0XHR0YWJzQWN0aXZlQmFyID0gbmV3IExheWVyXG5cdFx0XHRoZWlnaHQ6bS5weCgyKVxuXHRcdFx0d2lkdGg6bS5kZXZpY2Uud2lkdGgvc2V0dXAudGFicy5sZW5ndGhcblx0XHRcdGJhY2tncm91bmRDb2xvcjptLmNvbG9yKHNldHVwLnRhYnNCYXJDb2xvcilcblx0XHRcdHN1cGVyTGF5ZXI6YmFyXG5cdFx0dGFic0FjdGl2ZUJhci5jb25zdHJhaW50cyA9XG5cdFx0XHRib3R0b206MFxuXHRcdGJhci5hY3RpdmVCYXIgPSB0YWJzQWN0aXZlQmFyXG5cblx0XHRiYXIudGFicyA9IHt9XG5cdFx0YmFyLnZpZXdzID0ge31cblx0XHRpZiBzZXR1cC50YWJzLmxlbmd0aCA8IDVcblx0XHRcdGZvciB0LCBpIGluIHNldHVwLnRhYnNcblx0XHRcdFx0dmlldyA9IG5ldyBMYXllclxuXHRcdFx0XHRcdG5hbWU6XCJWaWV3IFwiICsgdFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRcdFx0dmlldy5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0dG9wOmJhclxuXHRcdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdFx0d2lkdGg6bS5kcChtLmRldmljZS53aWR0aClcblx0XHRcdFx0YmFyLnZpZXdzW3RdID0gdmlld1xuXHRcdFx0XHRpZiBpID4gMFxuXHRcdFx0XHRcdHZpZXcueCA9IG0uZGV2aWNlLndpZHRoXG5cdFx0XHRcdHRhYiA9IG5ldyBMYXllclxuXHRcdFx0XHRcdHdpZHRoOm0uZGV2aWNlLndpZHRoL3NldHVwLnRhYnMubGVuZ3RoXG5cdFx0XHRcdFx0aGVpZ2h0Om0ucHgoNDgpXG5cdFx0XHRcdFx0eDoobS5kZXZpY2Uud2lkdGgvc2V0dXAudGFicy5sZW5ndGgpICogaVxuXHRcdFx0XHRcdHN1cGVyTGF5ZXI6YmFyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdGNsaXA6dHJ1ZVxuXHRcdFx0XHRcdG5hbWU6XCJ0YWIgXCJcblx0XHRcdFx0dGFiLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRtLmxheW91dC5zZXQodGFiKVxuXHRcdFx0XHRpZiBzZXR1cC50YWJzQ29sb3IgPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0c2V0dXAudGFic0NvbG9yID0gbS51dGlscy5hdXRvQ29sb3IoYmFyLmJhY2tncm91bmRDb2xvcikudG9IZXhTdHJpbmcoKVxuXHRcdFx0XHRsYWJlbCA9IFwiXCJcblx0XHRcdFx0aWYgc2V0dXAudGFiSWNvbnNcblx0XHRcdFx0XHRpY29uID0gc2V0dXAudGFiSWNvbnNbaV1cblx0XHRcdFx0XHRsYWJlbCA9IG5ldyBtLkljb25cblx0XHRcdFx0XHRcdG5hbWU6aWNvblxuXHRcdFx0XHRcdFx0c3VwZXJMYXllcjp0YWJcblx0XHRcdFx0XHRcdGNvbG9yOnNldHVwLnRhYnNDb2xvclxuXHRcdFx0XHRcdFx0Y29uc3RyYWludHM6e2FsaWduOlwiY2VudGVyXCJ9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRsYWJlbCA9IG5ldyBtLlRleHRcblx0XHRcdFx0XHRcdHN1cGVyTGF5ZXI6dGFiXG5cdFx0XHRcdFx0XHRjb25zdHJhaW50czp7YWxpZ246XCJjZW50ZXJcIn1cblx0XHRcdFx0XHRcdHRleHQ6dFxuXHRcdFx0XHRcdFx0dGV4dFRyYW5zZm9ybTonVXBwZXJjYXNlJ1xuXHRcdFx0XHRcdFx0Zm9udFNpemU6MTRcblx0XHRcdFx0XHRcdGNvbG9yOnNldHVwLnRhYnNDb2xvclxuXHRcdFx0XHRsYWJlbC5uYW1lID0gdFxuXG5cdFx0XHRcdHRhYi5sYWJlbCA9IGxhYmVsXG5cblx0XHRcdFx0c2V0dXAudGFic0lua1tcImxheWVyXCJdID0gdGFiXG5cdFx0XHRcdG0udXRpbHMuaW5reShzZXR1cC50YWJzSW5rKVxuXHRcdFx0XHRiYXIudGFic1t0XSA9IHRhYlxuXG5cdFx0XHRcdHRhYi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdFx0YmFyLmFjdGl2ZVRhYiA9IEBcblx0XHRcdFx0XHRoYW5kbGVUYWJTdGF0ZXMoYmFyLCBAKVxuXHRpZiBzZXR1cC50YWJzLmxlbmd0aCA+IDJcblx0XHRiYXIuYWN0aXZlVGFiID0gYmFyLnRhYnNbc2V0dXAudGFic1swXV1cblx0XHRoYW5kbGVUYWJTdGF0ZXMoYmFyLCBiYXIuYWN0aXZlVGFiKVxuXHRiYXIudGl0bGUgPSB0aXRsZVxuXG5cblxuXHRyZXR1cm4gYmFyXG4iLCIjIEJhbm5lclxubSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0YXBwOiBcIkFwcFwiXG5cdHRpdGxlOlwiVGl0bGVcIlxuXHRtZXNzYWdlOlwiTWVzc2FnZVwiXG5cdGFjdGlvbjpcIkFjdGlvblwiXG5cdHRpbWU6XCLigKIgbm93XCJcblx0aWNvbjp1bmRlZmluZWRcblx0ZHVyYXRpb246N1xuXHRhbmltYXRlZDpmYWxzZVxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblx0YmFubmVyID0gbmV3IExheWVyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdG5hbWU6XCJiYW5uZXJcIlxuXHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwwLDAsLjI0KVwiXG5cdFx0c2hhZG93Qmx1cjogbS5weCgyKVxuXHRcdHNoYWRvd1k6IG0ucHgoMilcblx0YmFubmVyLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRoZWlnaHQ6NzRcblxuXHQjIERpZmZlcmVudCBwb3NpdGlvbmluZ3MgZm9yIGVhY2ggZGV2aWNlXG5cdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwYWRcIlxuXHRcdFx0QGxlYWRpbmdJY29uID0gMjAwXG5cdFx0XHRAdG9wSWNvbiA9IDE1XG5cdFx0XHRAdG9wVGl0bGUgPSAxMVxuXHRcdHdoZW4gXCJpcGFkLXByb1wiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxOTJcblx0XHRcdEB0b3BJY29uID0gMTJcblx0XHRcdEB0b3BUaXRsZSA9IDlcblx0XHR3aGVuIFwiaXBob25lLTZzLXBsdXNcIlxuXHRcdFx0QGxlYWRpbmdJY29uID0gMTVcblx0XHRcdEB0b3BJY29uID0gMTJcblx0XHRcdEB0b3BUaXRsZSA9IDEwXG5cdFx0ZWxzZVxuXHRcdFx0QGxlYWRpbmdJY29uID0gMTVcblx0XHRcdEB0b3BJY29uID0gOFxuXHRcdFx0QHRvcFRpdGxlID0gNlxuXG5cdGlmIHNldHVwLmljb24gPT0gdW5kZWZpbmVkXG5cdFx0c2V0dXAuaWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmJhbm5lclxuXHRcdHNldHVwLmljb24uc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzY3RkY4MSAwJSwgIzAxQjQxRiAxMDAlKVwiXG5cdGVsc2Vcblx0XHRiYW5uZXIuYWRkU3ViTGF5ZXIoc2V0dXAuaWNvbilcblxuXHRzZXR1cC5pY29uLmJvcmRlclJhZGl1cyA9IG0udXRpbHMucHgoNC41KVxuXHRzZXR1cC5pY29uLm5hbWUgPSBcImljb25cIlxuXHRzZXR1cC5pY29uLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6MTZcblx0XHR3aWR0aDoxNlxuXHRcdGxlYWRpbmc6QGxlYWRpbmdJY29uXG5cdFx0dG9wOkB0b3BJY29uXG5cblx0YXBwID0gbmV3IG0uVGV4dCBzdHlsZTpcImFwcFwiLCB0ZXh0OnNldHVwLmFwcCwgY29sb3I6XCJibHVlXCIsIGZvbnRXZWlnaHQ6XCJtZWRpdW1cIiwgZm9udFNpemU6MTEsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwidGl0bGVcIlxuXHRhcHAuY29uc3RyYWludHMgPVxuXHRcdHZlcnRpY2FsQ2VudGVyOnNldHVwLmljb25cblx0XHRsZWFkaW5nOltzZXR1cC5pY29uLCA1XVxuXHR0aXRsZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJ0aXRsZVwiLCB0ZXh0OnNldHVwLnRpdGxlLCBjb2xvcjpcImJsYWNrXCIsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcInRpdGxlXCJcblx0dGl0bGUuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmdFZGdlczpzZXR1cC5pY29uXG5cdFx0dG9wOltzZXR1cC5pY29uLCA3XVxuXG5cdG1lc3NhZ2UgPSBuZXcgbS5UZXh0IHN0eWxlOlwidGl0bGVcIiwgdGV4dDpzZXR1cC5tZXNzYWdlLCBjb2xvcjpcImdyZXlcIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwidGl0bGVcIlxuXHRtZXNzYWdlLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nRWRnZXM6c2V0dXAuaWNvblxuXHRcdHRvcDpbdGl0bGUsIDVdXG5cblx0dGltZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJ0aW1lXCIsIHRleHQ6c2V0dXAudGltZSwgY29sb3I6XCJncmV5XCIsIGZvbnRTaXplOjExLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcInRpbWVcIlxuXHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOlthcHAsIDNdXG5cdFx0Ym90dG9tRWRnZXM6IGFwcFxuXG5cdG0ubGF5b3V0LnNldCgpXG5cdG0udXRpbHMuYmdCbHVyKGJhbm5lcilcblxuXHQjIyBCYW5uZXIgRHJhZyBzZXR0aW5nc1xuXHRiYW5uZXIuZHJhZ2dhYmxlID0gdHJ1ZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmhvcml6b250YWwgPSBmYWxzZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmNvbnN0cmFpbnRzID1cblx0XHR5OjBcblxuXHRiYW5uZXIuZHJhZ2dhYmxlLmJvdW5jZU9wdGlvbnMgPVxuXHQgICAgZnJpY3Rpb246IDI1XG5cdCAgICB0ZW5zaW9uOiAyNTBcblxuXHRiYW5uZXIub24gRXZlbnRzLkRyYWdFbmQsIC0+XG5cdFx0aWYgYmFubmVyLm1heFkgPCBtLnV0aWxzLnB4KDY4KVxuXHRcdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoobWF4WTowKVxuXHRcdFx0XHR0aW1lOi4xNVxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFV0aWxzLmRlbGF5IC4yNSwgLT5cblx0XHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cdCMgQnVmZmVyIHRoYXQgc2l0cyBhYm92ZSB0aGUgYmFubmVyXG5cdGJhbm5lckJ1ZmZlciA9IG5ldyBMYXllciBtYXhZOjAsIG5hbWU6XCJidWZmZXJcIiwgYmFja2dyb3VuZENvbG9yOlwiIzFCMUIxQ1wiLCBvcGFjaXR5Oi45LCBzdXBlckxheWVyOmJhbm5lciwgd2lkdGg6bS5kZXZpY2Uud2lkdGgsIG1heFk6YmFubmVyLnksIGhlaWdodDptLmRldmljZS5oZWlnaHRcblx0bS51dGlscy5iZ0JsdXIoYmFubmVyQnVmZmVyKVxuXG5cdCMgQW5pbWF0ZS1pblxuXHRpZiBzZXR1cC5hbmltYXRlZCA9PSB0cnVlXG5cdFx0YmFubmVyLnkgPSAwIC0gYmFubmVyLmhlaWdodFxuXHRcdGJhbm5lci5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOih5OjApXG5cdFx0XHR0aW1lOi4yNVxuXHRcdFx0Y3VydmU6XCJzcHJpbmcoNDAwLDIwLDApXCJcblxuXHQjIEFuaW1hdGUtb3V0XG5cdGlmIHNldHVwLmR1cmF0aW9uXG5cdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24sIC0+XG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uICsgLjI1LCAtPlxuXHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cdCMgRXhwb3J0IEJhbm5lclxuXHRiYW5uZXIuaWNvbiA9IHNldHVwLmljb25cblx0YmFubmVyLmFwcCA9IGFwcFxuXHRiYW5uZXIudGl0bGUgPSB0aXRsZVxuXHRiYW5uZXIubWVzc2FnZSA9IG1lc3NhZ2Vcblx0cmV0dXJuIGJhbm5lclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0XHR0ZXh0OlwidGV4dFwiXG5cdFx0dHlwZTpcImZsYXRcIlxuXHRcdHN0eWxlOlwibGlnaHRcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRjb2xvcjpcInRlYWwzMDBcIlxuXHRcdGZvbnRTaXplOjE3XG5cdFx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRcdG5hbWU6XCJidXR0b25cIlxuXHRcdGJsdXI6dHJ1ZVxuXHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdFx0Y29uc3RyYWludHM6dW5kZWZpbmVkXG5cdFx0aWNvbjpcInN0YXJcIlxuXHRcdGNsaXA6dHJ1ZVxuXHRcdGluazp1bmRlZmluZWRcblx0fVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRidXR0b24gPSBuZXcgTGF5ZXJcblx0XHRuYW1lOnNldHVwLm5hbWVcblx0XHRjbGlwOnNldHVwLmNsaXBcblxuXHRpZiBzZXR1cC5zdXBlckxheWVyXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihidXR0b24pXG5cblx0YnV0dG9uLnR5cGUgPSBzZXR1cC50eXBlXG5cdHN3aXRjaCBzZXR1cC50eXBlXG5cdFx0d2hlbiBcImZsb2F0aW5nXCJcblx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdCB3aWR0aDo1NlxuXHRcdFx0XHQgaGVpZ2h0OjU2XG5cdFx0XHRcdCBib3R0b206NjRcblx0XHRcdFx0IHRyYWlsaW5nOjE3XG5cdFx0XHRpZiBtLmRldmljZS5zY2FsZSA8IDRcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzLndpZHRoID0gNjRcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzLmhlaWdodCA9IDY0XG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gbS5weCgzMilcblx0XHRcdGJ1dHRvbi5zaGFkb3dDb2xvciA9IFwicmdiYSgwLDAsMCwuMTIpXCJcblx0XHRcdGJ1dHRvbi5zaGFkb3dZID0gbS5weCgyKVxuXHRcdFx0YnV0dG9uLnNoYWRvd0JsdXIgPSBtLnB4KDYpXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gbS5jb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRpZiB0eXBlb2Ygc2V0dXAuaWNvbiA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdGljb24gPSBtLkljb25cblx0XHRcdFx0XHRuYW1lOnNldHVwLmljb25cblx0XHRcdFx0XHRjb2xvcjpzZXR1cC5jb2xvclxuXHRcdFx0XHRcdHN1cGVyTGF5ZXI6YnV0dG9uXG5cdFx0XHRcdFx0Y29uc3RyYWludHM6e2FsaWduOlwiY2VudGVyXCJ9XG5cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6W2J1dHRvbl1cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6W2ljb25dXG5cblx0XHRlbHNlXG5cdFx0XHRsYWJlbCA9IG5ldyBtLlRleHRcblx0XHRcdFx0dGV4dDpzZXR1cC50ZXh0XG5cdFx0XHRcdHN1cGVyTGF5ZXI6YnV0dG9uXG5cdFx0XHRcdHRleHRUcmFuc2Zvcm06XCJ1cHBlcmNhc2VcIlxuXHRcdFx0XHRjb2xvcjpzZXR1cC5jb2xvclxuXHRcdFx0XHRmb250U2l6ZToxNFxuXHRcdFx0XHRsaW5lSGVpZ2h0OjE0XG5cdFx0XHRcdGZvbnRXZWlnaHQ6NTAwXG5cdFx0XHRsYWJlbC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGFsaWduOlwiY2VudGVyXCJcblx0XHRcdGJ1dHRvbi5wcm9wcyA9XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjptLmNvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0aGVpZ2h0Om0ucHgoMzYpXG5cdFx0XHRcdHdpZHRoOmxhYmVsLndpZHRoICsgbS5weCgxNilcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOm0ucHgoMilcblx0XHRcdFx0Y2xpcDpzZXR1cC5jbGlwXG5cblx0XHRcdGlmIGJ1dHRvbi53aWR0aCA8IG0ucHgoNjQpXG5cdFx0XHRcdGJ1dHRvbi53aWR0aCA9IG0ucHgoNjQpXG5cblx0XHRcdHN3aXRjaCBzZXR1cC50eXBlXG5cdFx0XHRcdHdoZW4gXCJyYWlzZWRcIlxuXHRcdFx0XHRcdGJ1dHRvbi5vcmlnQkdDID0gYnV0dG9uLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdGJ1dHRvbi5zaGFkb3dDb2xvciA9IFwicmdiYSgwLDAsMCwuMjQpXCJcblx0XHRcdFx0XHRidXR0b24uc2hhZG93WSA9IG0ucHgoMilcblx0XHRcdFx0XHRidXR0b24uc2hhZG93Qmx1ciA9IG0ucHgoMilcblx0XHRcdFx0XHRwcmVzc2VkQkdDID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5saWdodGVuKDEwKVxuXHRcdFx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOnByZXNzZWRCR0Ncblx0XHRcdFx0XHRcdFx0XHRzaGFkb3dZOm0ucHgoOClcblx0XHRcdFx0XHRcdFx0XHRzaGFkb3dCbHVyOm0ucHgoOClcblx0XHRcdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbi5vcmlnQkdDXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93WTptLnB4KDIpXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93Qmx1cjptLnB4KDIpXG5cdFx0XHRcdHdoZW4gXCJmbGF0XCJcblx0XHRcdFx0XHRidXR0b24ub3JpZ0JHQyA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRwcmVzc2VkQkdDID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5kYXJrZW4oNSlcblx0XHRcdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpwcmVzc2VkQkdDXG5cdFx0XHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBidXR0b24ub3JpZ0JHQ1xuXG5cblx0XHRcdGlmIHNldHVwLmNvbnN0cmFpbnRzXG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9IHNldHVwLmNvbnN0cmFpbnRzXG5cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6W2J1dHRvbiwgbGFiZWxdXG5cblx0aWYgc2V0dXAuaW5rXG5cdFx0cGFzc2VkSW5rID0gc2V0dXAuaW5rXG5cdFx0cGFzc2VkSW5rLmxheWVyID0gYnV0dG9uXG5cblx0XHRtLnV0aWxzLmlua3kocGFzc2VkSW5rKVxuXG5cdHJldHVybiBidXR0b25cbiIsIiMgQWxlcnRcbm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRpdGxlOiBcIlRpdGxlXCJcblx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRhY3Rpb25zOltcIkFncmVlXCIsIFwiRGVjbGluZVwiXVxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRkaWFsb2cgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImRpYWxvZ1wiXG5cdGRpYWxvZy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblxuXHRvdmVybGF5ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiM1RTVFNUVcIiwgc3VwZXJMYXllcjpkaWFsb2csIG5hbWU6XCJvdmVybGF5XCIsIG9wYWNpdHk6LjZcblx0b3ZlcmxheS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblxuXHRtb2RhbCA9IG5ldyBMYXllclxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRzdXBlckxheWVyOmRpYWxvZ1xuXHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDIpXG5cdFx0bmFtZTpcIm1vZGFsXCJcblx0XHRzaGFkb3dDb2xvcjpcInJnYmEoMCwwLDAsLjIpXCJcblx0XHRzaGFkb3dZOjI0XG5cdFx0c2hhZG93Qmx1cjoyNFxuXHRtb2RhbC5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdHdpZHRoOjI4MFxuXHRcdGhlaWdodDo0MDBcblxuXHR0aXRsZSA9IG5ldyBtLlRleHRcblx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0dGV4dDpzZXR1cC50aXRsZVxuXHRcdGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiXG5cdFx0Zm9udFNpemU6MjBcblx0XHRuYW1lOlwidGl0bGVcIlxuXHRcdGxpbmVIZWlnaHQ6MjBcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDoyMFxuXHRcdFx0d2lkdGg6MjIwXG5cdFx0XHRsZWFkaW5nOjI0XG5cblx0bWVzc2FnZSA9IG5ldyBtLlRleHRcblx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0dGV4dDpzZXR1cC5tZXNzYWdlXG5cdFx0Zm9udFNpemU6MTNcblx0XHRuYW1lOlwibWVzc2FnZVwiXG5cdFx0bGluZUhlaWdodDoxNlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOiBbdGl0bGUsIDEwXVxuXHRcdFx0bGVhZGluZzoyNFxuXHRcdFx0d2lkdGg6IDIyMFxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDpbZGlhbG9nLCBvdmVybGF5LCBtb2RhbCwgdGl0bGUsIG1lc3NhZ2VdXG5cblx0I1RpdGxlICsgTWVzc2FnZSArIDEgc2V0IG9mIGFjdGlvbnNcblx0bW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSAyMCArIG0udXRpbHMucHQodGl0bGUuaGVpZ2h0KSArIDEwICsgbS51dGlscy5wdChtZXNzYWdlLmhlaWdodCkgKyAyNCArIDQ0XG5cblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OltvdmVybGF5LCBtb2RhbF1cblx0ZGlhbG9nLmFjdGlvbnMgPSB7fVxuXHRhY3Rpb25zID0gW11cblx0Y2hhckNvdW50ID0gMFxuXHRpZiBzZXR1cC5hY3Rpb25zLmxlbmd0aCA+IDFcblx0XHRjaGFyQ291bnQgPSBzZXR1cC5hY3Rpb25zWzBdLmxlbmd0aCArIHNldHVwLmFjdGlvbnNbMV0ubGVuZ3RoXG5cdGlmIHNldHVwLmFjdGlvbnMubGVuZ3RoIDwgMyAmJiBjaGFyQ291bnQgPCAyNFxuXHRcdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblx0XHRcdGJ1dHRvbiA9IG5ldyBtLkJ1dHRvblxuXHRcdFx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0XHRcdHRleHQ6c2V0dXAuYWN0aW9uc1tpbmRleF1cblx0XHRcdFx0Y29sb3I6XCJibHVlXCJcblx0XHRcdGlmIGluZGV4ID09IDBcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzID0ge2JvdHRvbTo4LCB0cmFpbGluZzo4fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRidXR0b24uY29uc3RyYWludHMgPSB7Ym90dG9tOjgsIHRyYWlsaW5nOlthY3Rpb25zW2luZGV4IC0gMV0sIDhdfVxuXHRcdFx0ZGlhbG9nLmFjdGlvbnNbc2V0dXAuYWN0aW9uc1tpbmRleF1dID0gYnV0dG9uXG5cdFx0XHRhY3Rpb25zLnB1c2ggYnV0dG9uXG5cdFx0XHRtLmxheW91dC5zZXRcblx0XHRcdFx0dGFyZ2V0OmJ1dHRvblxuXHRlbHNlXG5cdFx0bW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSAyMCArIG0udXRpbHMucHQodGl0bGUuaGVpZ2h0KSArIDEwICsgbS51dGlscy5wdChtZXNzYWdlLmhlaWdodCkgKyAzMiArIChzZXR1cC5hY3Rpb25zLmxlbmd0aCAqIDM2KVxuXHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0dGFyZ2V0Om1vZGFsXG5cdFx0Zm9yIGFjdCwgaW5kZXggaW4gc2V0dXAuYWN0aW9uc1xuXHRcdFx0YnV0dG9uID0gbmV3IG0uQnV0dG9uXG5cdFx0XHRcdHN1cGVyTGF5ZXI6bW9kYWxcblx0XHRcdFx0dGV4dDpzZXR1cC5hY3Rpb25zW2luZGV4XVxuXHRcdFx0XHRjb2xvcjpcImJsdWVcIlxuXHRcdFx0aWYgaW5kZXggPT0gMFxuXHRcdFx0XHRidXR0b24uY29uc3RyYWludHMgPSB7dG9wOlttZXNzYWdlLCAyNF0sIHRyYWlsaW5nOjh9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9IHt0cmFpbGluZzo4LCB0b3A6YWN0aW9uc1tpbmRleCAtIDFdfVxuXHRcdFx0ZGlhbG9nLmFjdGlvbnNbc2V0dXAuYWN0aW9uc1tpbmRleF1dID0gYnV0dG9uXG5cdFx0XHRhY3Rpb25zLnB1c2ggYnV0dG9uXG5cdFx0XHRtLmxheW91dC5zZXRcblx0XHRcdFx0dGFyZ2V0OmJ1dHRvblxuXG5cblx0IyBFeHBvcnQgZGlhbG9nXG5cdGRpYWxvZy5vdmVybGF5ID0gb3ZlcmxheVxuXHRkaWFsb2cubW9kYWwgPSBtb2RhbFxuXHRkaWFsb2cudGl0bGUgPSB0aXRsZVxuXHRkaWFsb2cubWVzc2FnZSA9IG1lc3NhZ2VcblxuXHRyZXR1cm4gZGlhbG9nXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuICBuYW1lOiBcInN0YXJcIlxuICBzY2FsZTogbS5kZXZpY2Uuc2NhbGVcbiAgY29sb3I6IG0uY29sb3IoXCJibGFja1wiKVxuICBzdXBlckxheWVyOiB1bmRlZmluZWRcbiAgY29uc3RyYWludHM6IHVuZGVmaW5lZFxuICBjbGlwOnRydWVcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuICBzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG4gIGlmIHR5cGVvZiBzZXR1cC5uYW1lID09IFwic3RyaW5nXCJcbiAgICBpY29uTGF5ZXIgPSBuZXcgTGF5ZXJcbiAgICAgIGh0bWw6XCI8aSBjbGFzcz0nbWF0ZXJpYWwtaWNvbnMgbWQtMjQnPiN7c2V0dXAubmFtZX08L2k+XCJcbiAgICAgIGNvbG9yOm0uY29sb3Ioc2V0dXAuY29sb3IpXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gICAgICBjbGlwOnNldHVwLmNsaXBcbiAgICAgIG5hbWU6c2V0dXAubmFtZVxuICAgICAgc3VwZXJMYXllcjpzZXR1cC5zdXBlckxheWVyXG5cbiAgICBwYWRkaW5nUmlnaHQgPSAwXG4gICAgcGFkZGluZ1RvcCA9IDBcblxuICAgIHN3aXRjaCBtLmRldmljZS5zY2FsZVxuICAgICAgd2hlbiA0XG4gICAgICAgIHBhZGRpbmdUb3AgPSBtLnB4KDEyKSArIFwicHhcIlxuICAgICAgICBwYWRkaW5nUmlnaHQgPSBtLnB4KDIpICsgXCJweFwiXG4gICAgICB3aGVuIDNcbiAgICAgICAgcGFkZGluZ1RvcCA9IG0ucHgoMTApICsgXCJweFwiXG4gICAgICAgIHBhZGRpbmdSaWdodCA9IG0ucHgoNikgKyBcInB4XCJcbiAgICAgIHdoZW4gMlxuICAgICAgICBwYWRkaW5nVG9wID0gbS5weCg4KSArIFwicHhcIlxuICAgICAgICBwYWRkaW5nUmlnaHQgPSBtLnB4KDgpICsgXCJweFwiXG4gICAgICB3aGVuIDFcbiAgICAgICAgcGFkZGluZ1RvcCA9IG0ucHgoMTYpICsgXCJweFwiXG4gICAgICAgIHBhZGRpbmdSaWdodCA9IG0ucHgoNykgKyBcInB4XCJcblxuXG4gICAgZnJhbWUgPSBtLnV0aWxzLnRleHRBdXRvU2l6ZShpY29uTGF5ZXIpXG4gICAgaWNvbkxheWVyLmh0bWwgPSBcIjxzcGFuIHN0eWxlPSctd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoI3tzZXR1cC5zY2FsZX0pOyBwb3NpdGlvbjogYWJzb2x1dGU7Jz5cIiArIGljb25MYXllci5odG1sXG4gICAgaWNvbkxheWVyLndpZHRoID0gbS5weCgyNClcbiAgICBpY29uTGF5ZXIuaGVpZ2h0ID0gbS5weChmcmFtZS5oZWlnaHQpXG5cbiAgICBpY29uTGF5ZXIuc3R5bGUgPVxuICAgICAgXCJkaXNwbGF5XCIgOiBcImlubGluZS1ibG9ja1wiXG4gICAgICBcInBhZGRpbmctdG9wXCIgOiBwYWRkaW5nVG9wXG4gICAgICBcInBhZGRpbmctcmlnaHRcIiA6IHBhZGRpbmdSaWdodFxuICAgICAgXCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiXG4gICAgaWYgc2V0dXAuY29uc3RyYWludHNcbiAgICAgIGljb25MYXllci5jb25zdHJhaW50cyA9IHNldHVwLmNvbnN0cmFpbnRzXG4gICAgICBtLmxheW91dC5zZXRcbiAgICAgICAgdGFyZ2V0Omljb25MYXllclxuXG4gICAgcmV0dXJuIGljb25MYXllclxuICBlbHNlXG4gICAgaWNvbkxheWVyID0gc2V0dXAubGF5ZXJcbiAgICByZXR1cm4gaWNvbkxheWVyXG4iLCIjIFV0aWxzXG5cbm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGFuaW1hdGlvbnM6IHtcblx0XHR0YXJnZXQ6dW5kZWZpbmVkXG5cdFx0Y29uc3RyYWludHM6IHVuZGVmaW5lZFxuXHRcdGN1cnZlIDogXCJlYXNlLWluLW91dFwiXG5cdFx0Y3VydmVPcHRpb25zOiB1bmRlZmluZWRcblx0XHR0aW1lOjFcblx0XHRkZWxheTowXG5cdFx0cmVwZWF0OnVuZGVmaW5lZFxuXHRcdGNvbG9yTW9kZWw6dW5kZWZpbmVkXG5cdFx0c3RhZ2dlcjp1bmRlZmluZWRcblx0XHRmYWRlT3V0OmZhbHNlXG5cdFx0ZmFkZUluOmZhbHNlXG5cdH1cbn1cblxubGF5b3V0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHRhcmdldExheWVycyA9IFtdXG5cdGJsdWVwcmludCA9IFtdXG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGlmIHNldHVwLnRhcmdldFxuXHRcdGlmIHNldHVwLnRhcmdldC5sZW5ndGhcblx0XHRcdHRhcmdldExheWVycyA9IHNldHVwLnRhcmdldFxuXHRcdGVsc2Vcblx0XHRcdHRhcmdldExheWVycy5wdXNoIHNldHVwLnRhcmdldFxuXHRlbHNlXG5cdFx0dGFyZ2V0TGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXG5cdGlmIHNldHVwLnRhcmdldFxuXHRcdGlmIHNldHVwLmNvbnN0cmFpbnRzXG5cdFx0XHRmb3IgbmV3Q29uc3RyYWludCBpbiBPYmplY3Qua2V5cyhzZXR1cC5jb25zdHJhaW50cylcblx0XHRcdFx0c2V0dXAudGFyZ2V0LmNvbnN0cmFpbnRzW25ld0NvbnN0cmFpbnRdID0gc2V0dXAuY29uc3RyYWludHNbbmV3Q29uc3RyYWludF1cblxuXG5cdCNUcmFuc2xhdGUgbmV3IGNvbnN0cmFpbnRzXG5cdGZvciBsYXllciwgaW5kZXggaW4gdGFyZ2V0TGF5ZXJzXG5cdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0ge31cblx0XHRpZiBsYXllci5jb25zdHJhaW50c1xuXG5cdFx0XHRwcm9wcyA9IHt9XG5cdFx0XHRsYXllci5zdXBlckZyYW1lID0ge31cblxuXHRcdFx0aWYgbGF5ZXIuc3VwZXJMYXllclxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLmhlaWdodCA9IGxheWVyLnN1cGVyTGF5ZXIuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBsYXllci5zdXBlckxheWVyLndpZHRoXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0ID0gbS5kZXZpY2UuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBtLmRldmljZS53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nICE9IHVuZGVmaW5lZCAmJiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoID0ge31cblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wICE9IHVuZGVmaW5lZCAmJiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQgPSB7fVxuXG5cdFx0XHQjIFNpemUgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLndpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy53aWR0aCA9IG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbGF5ZXIud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0XG5cblx0XHRcdCMgUG9zaXRpb25pbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyYFxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnggPSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy5jYWxjdWxhdGVkUG9zaXRpb24ueCArIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1swXS5jYWxjdWxhdGVkUG9zaXRpb24ueCArIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoICsgbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzFdKVxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLnN0YXJ0WCA9IHByb3BzLnhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLCAxMClcblx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuc3VwZXJGcmFtZS53aWR0aCAtIG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcpIC0gcHJvcHMud2lkdGhcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcuY2FsY3VsYXRlZFBvc2l0aW9uLnggLSBwcm9wcy53aWR0aFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54IC0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50cmFpbGluZ1sxXSkgLSBwcm9wcy53aWR0aFxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLmNhbGN1bGF0ZWRQb3NpdGlvblggPSBwcm9wcy54XG5cblx0XHRcdFx0IyNwZXJmb3JtIGF1dG9zaXplXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLmNhbGN1bGF0ZWRQb3NpdGlvblggLSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYICsgcHJvcHMud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMudG9wLCAxMClcblx0XHRcdFx0XHRwcm9wcy55ID0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50b3ApXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy50b3AuY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyBsYXllci5jb25zdHJhaW50cy50b3AuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5jYWxjdWxhdGVkUG9zaXRpb24ueSArIGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0ICsgbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50b3BbMV0pXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFkgPSBwcm9wcy55XG5cblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMuYm90dG9tLCAxMClcblx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgLSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSkgLSBwcm9wcy5oZWlnaHRcblxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmNhbGN1bGF0ZWRQb3NpdGlvbi55IC0gcHJvcHMuaGVpZ2h0XG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi55IC0gIG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzFdKSAtIHByb3BzLmhlaWdodFxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuY2FsY3VsYXRlZFBvc2l0aW9uWSA9IHByb3BzLnlcblx0XHRcdFx0IyMgcGVyZm9ybSBhdXRvc2l6ZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LmNhbGN1bGF0ZWRQb3NpdGlvblkgLSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSArIHByb3BzLmhlaWdodFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFlcblxuXG5cdFx0XHQjIEFsaWdubWVudCBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNTZXQgdGhlIGNlbnRlcmluZyBmcmFtZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMlxuXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwidmVydGljYWxcIlxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAvIDIgLSBwcm9wcy5oZWlnaHQgLyAyXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJjZW50ZXJcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMlxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAvIDIgLSBwcm9wcy5oZWlnaHQgLyAyXG5cblxuXHRcdFx0IyBDZW50ZXJpbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5ob3Jpem9udGFsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgKGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoIC0gcHJvcHMud2lkdGgpIC8gMlxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy52ZXJ0aWNhbENlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgKGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHQgLSBwcm9wcy5oZWlnaHQpIC8gMlxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5jZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyAobGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aCAtIHByb3BzLndpZHRoKSAvIDJcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueSArIChsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodCAtIHByb3BzLmhlaWdodCkgLyAyXG5cblx0XHRcdCMgQWxpZ25pbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoICsgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3BFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcEVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi55XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSBwcm9wcy5oZWlnaHQgKyBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0XG5cblxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gcHJvcHNcblx0XHRlbHNlXG5cdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSBsYXllci5wcm9wc1xuXG5cdFx0Ymx1ZXByaW50LnB1c2ggbGF5ZXJcblxuXG5cdHJldHVybiBibHVlcHJpbnRcblxuZXhwb3J0cy5zZXQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0cHJvcHMgPSB7fVxuXHRpZiBhcnJheVxuXHRcdGZvciBpIGluIE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9ucylcblx0XHRcdGlmIGFycmF5W2ldXG5cdFx0XHRcdHNldHVwW2ldID0gYXJyYXlbaV1cblx0XHRcdGVsc2Vcblx0XHRcdFx0c2V0dXBbaV0gPSBleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnNbaV1cblxuXHRibHVlcHJpbnQgPSBsYXlvdXQoYXJyYXkpXG5cblx0Zm9yIGxheWVyLCBpbmRleCBpbiBibHVlcHJpbnRcblx0XHRmb3Iga2V5IGluIE9iamVjdC5rZXlzKGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbilcblx0XHRcdGxheWVyW2tleV0gPSBsYXllci5jYWxjdWxhdGVkUG9zaXRpb25ba2V5XVxuXG5leHBvcnRzLmFuaW1hdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0cHJvcHMgPSB7fVxuXHRpZiBhcnJheVxuXHRcdGZvciBpIGluIE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9ucylcblx0XHRcdGlmIGFycmF5W2ldXG5cdFx0XHRcdHNldHVwW2ldID0gYXJyYXlbaV1cblx0XHRcdGVsc2Vcblx0XHRcdFx0c2V0dXBbaV0gPSBleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnNbaV1cblxuXHRibHVlcHJpbnQgPSBsYXlvdXQoYXJyYXkpXG5cblx0Zm9yIGxheWVyLCBpbmRleCBpbiBibHVlcHJpbnRcblx0XHQjVGltaW5nXG5cdFx0ZGVsYXkgPSBzZXR1cC5kZWxheVxuXHRcdGlmIHNldHVwLnN0YWdnZXJcblx0XHRcdHN0YWcgPSBzZXR1cC5zdGFnZ2VyXG5cdFx0XHRkZWxheSA9ICgoaW5kZXgpICogc3RhZykgKyBkZWxheVxuXG5cdFx0aWYgc2V0dXAuZmFkZU91dFxuXHRcdFx0aWYgbGF5ZXIgPT0gc2V0dXAuZmFkZU91dFxuXHRcdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24ub3BhY2l0eSA9IDBcblxuXHRcdGlmIHNldHVwLmZhZGVJblxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLm9wYWNpdHkgPSAxXG5cblx0XHRsYXllci5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOmxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvblxuXHRcdFx0dGltZTpzZXR1cC50aW1lXG5cdFx0XHRkZWxheTpkZWxheVxuXHRcdFx0Y3VydmU6c2V0dXAuY3VydmVcblx0XHRcdHJlcGVhdDpzZXR1cC5yZXBlYXRcblx0XHRcdGNvbG9yTW9kZWw6c2V0dXAuY29sb3JNb2RlbFxuXHRcdFx0Y3VydmVPcHRpb25zOnNldHVwLmN1cnZlT3B0aW9uc1xuXG5cdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gcHJvcHNcbiIsIm0gPSByZXF1aXJlIFwibWF0ZXJpYWwta2l0XCJcblxuIyBCdWlsZCBMaWJyYXJ5ICBQcm9wZXJ0aWVzXG5sYXllciA9IG5ldyBMYXllclxuZXhwb3J0cy5sYXllclByb3BzID0gT2JqZWN0LmtleXMobGF5ZXIucHJvcHMpXG5leHBvcnRzLmxheWVyUHJvcHMucHVzaCBcInN1cGVyTGF5ZXJcIlxuZXhwb3J0cy5sYXllclByb3BzLnB1c2ggXCJjb25zdHJhaW50c1wiXG5leHBvcnRzLmxheWVyU3R5bGVzID0gT2JqZWN0LmtleXMobGF5ZXIuc3R5bGUpXG5sYXllci5kZXN0cm95KClcblxuZXhwb3J0cy5hc3NldHMgPSB7XG5cdGhvbWU6XCI8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzE3MiAxNiAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+XG5cdFx0ICAgICAgICA8ZWxsaXBzZSBpZD0ncGF0aC0xJyBjeD0nMTgwJyBjeT0nMjQnIHJ4PSc4JyByeT0nOCc+PC9lbGxpcHNlPlxuXHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMicgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgZmlsbD0nd2hpdGUnPlxuXHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0ICAgICAgICA8L21hc2s+XG5cdFx0ICAgIDwvZGVmcz5cblx0XHQgICAgPHVzZSBpZD0naG9tZScgc3Ryb2tlPScjRkZGRkZGJyBtYXNrPSd1cmwoI21hc2stMiknIHN0cm9rZS13aWR0aD0nNCcgZmlsbD0nbm9uZScgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0PC9zdmc+XCJcblx0YmFjazpcIjxzdmcgd2lkdGg9JzE2cHgnIGhlaWdodD0nMTlweCcgdmlld0JveD0nMzAxIDE0IDE2IDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cbiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICA8ZGVmcz48L2RlZnM+XG4gICAgPHBhdGggZD0nTTMwNy4wMjkzODMsMTcuNzY3MTczMyBDMzA3LjU4MDAyNywxNi44MDM1NDUzIDMwOC41MTAyOTIsMTYuNzc1MDcxMyAzMDkuMTEyMDIzLDE3LjcxMTA5NzYgTDMxNS45NDA4MDIsMjguMzMzNjQzNSBDMzE2LjU0MDM2OCwyOS4yNjYzMDE3IDMxNi4xMzYzNTQsMzAuMDIyMzcwNiAzMTUuMDI2MzA2LDMwLjAyMjM3MDYgTDMwMi4wMjY1MTksMzAuMDIyMzcwNiBDMzAwLjkyMTg5MSwzMC4wMjIzNzA2IDMwMC40Njc5MjMsMjkuMjQ5NzI4IDMwMS4wMjM0NDMsMjguMjc3NTY3OSBMMzA3LjAyOTM4MywxNy43NjcxNzMzIFonIGlkPSdUcmlhbmdsZS0xJyBzdHJva2U9JyNGRkZGRkYnIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzA4LjUwMjAyMSwgMjMuNTI0MzkxKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMDguNTAyMDIxLCAtMjMuNTI0MzkxKSAnPjwvcGF0aD5cblx0XHQ8L3N2Zz5cIlxuXHRjZWxsdWxhcjpcIjxzdmcgd2lkdGg9JzE2cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMzUgNCAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cbiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgPGRlZnM+PC9kZWZzPlxuICAgIDxnIGlkPSdjZWxsdWxhcicgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzUuMDAwMDAwLCA0LjAwMDAwMCknPlxuICAgICAgICA8cG9seWdvbiBpZD0nYm91bmRzJyBwb2ludHM9JzAgMCAxNiAwIDE2IDE2IDAgMTYnPjwvcG9seWdvbj5cbiAgICAgICAgPHBvbHlnb24gaWQ9J1NoYXBlJyBmaWxsPScjMDAwMDAwJyBwb2ludHM9JzAgMTUgMTQgMTUgMTQgMSc+PC9wb2x5Z29uPlxuICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRiYXR0ZXJ5SGlnaCA6IFwiPHN2ZyB3aWR0aD0nOXB4JyBoZWlnaHQ9JzE0cHgnIHZpZXdCb3g9JzMgMSA5IDE0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz48L2RlZnM+XG5cdCAgICA8cG9seWdvbiBpZD0nU2hhcGUnIHN0cm9rZT0nbm9uZScgZmlsbD0nIzAwMDAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyBwb2ludHM9JzkgMS44NzUgOSAxIDYgMSA2IDEuODc1IDMgMS44NzUgMyAxNSAxMiAxNSAxMiAxLjg3NSc+PC9wb2x5Z29uPlxuXHQ8L3N2Zz5cIlxuXHRiYW5uZXJCRyA6IHtcblx0XHRcImlwaG9uZS01XCI6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPSczMjBweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMzIwIDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+aXBob25lNTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS01LzVTLzVDJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDMyMCwwIEwzMjAsNjggTDAsNjggTDAsMCBaIE0xNDIsNjEuMDA0ODgxNSBDMTQyLDU5Ljg5NzYxNiAxNDIuODk2Mjc5LDU5IDE0NC4wMDI0LDU5IEwxNzYuOTk3Niw1OSBDMTc4LjEwMzQ5NSw1OSAxNzksNTkuODkzODk5OCAxNzksNjEuMDA0ODgxNSBMMTc5LDYxLjk5NTExODUgQzE3OSw2My4xMDIzODQgMTc4LjEwMzcyMSw2NCAxNzYuOTk3Niw2NCBMMTQ0LjAwMjQsNjQgQzE0Mi44OTY1MDUsNjQgMTQyLDYzLjEwNjEwMDIgMTQyLDYxLjk5NTExODUgTDE0Miw2MS4wMDQ4ODE1IFonIGlkPSdpcGhvbmU1Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBob25lLTZzXCI6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzM3NXB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzNzUgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQ8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0naU9TOC1QdXNoLU5vdGlmaWNhdGlvbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTIzLjAwMDAwMCknIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OC4wMDAwMDAsIDcuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMTYgTDM3NSwxNiBMMzc1LDg0IEwwLDg0IEwwLDE2IFogTTE2OSw3Ny4wMDQ4ODE1IEMxNjksNzUuODk3NjE2IDE2OS44OTYyNzksNzUgMTcxLjAwMjQsNzUgTDIwMy45OTc2LDc1IEMyMDUuMTAzNDk1LDc1IDIwNiw3NS44OTM4OTk4IDIwNiw3Ny4wMDQ4ODE1IEwyMDYsNzcuOTk1MTE4NSBDMjA2LDc5LjEwMjM4NCAyMDUuMTAzNzIxLDgwIDIwMy45OTc2LDgwIEwxNzEuMDAyNCw4MCBDMTY5Ljg5NjUwNSw4MCAxNjksNzkuMTA2MTAwMiAxNjksNzcuOTk1MTE4NSBMMTY5LDc3LjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBob25lLTZzLXBsdXNcIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzQxNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA0MTQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42ICgyNjMwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZCBDb3B5PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNDMuMDAwMDAwLCAtNzQuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0My4wMDAwMDAsIDc0LjAwMDAwMCknIGlkPSdOb3RpZmljYXRpb24tY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMNDE0LDAgTDQxNCw2OCBMMCw2OCBMMCwwIFogTTE4OSw2MS4wMDQ4ODE1IEMxODksNTkuODk3NjE2IDE4OS44OTYyNzksNTkgMTkxLjAwMjQsNTkgTDIyMy45OTc2LDU5IEMyMjUuMTAzNDk1LDU5IDIyNiw1OS44OTM4OTk4IDIyNiw2MS4wMDQ4ODE1IEwyMjYsNjEuOTk1MTE4NSBDMjI2LDYzLjEwMjM4NCAyMjUuMTAzNzIxLDY0IDIyMy45OTc2LDY0IEwxOTEuMDAyNCw2NCBDMTg5Ljg5NjUwNSw2NCAxODksNjMuMTA2MTAwMiAxODksNjEuOTk1MTE4NSBMMTg5LDYxLjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLUNvcHknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRcImlwYWRcIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9Jzc2OHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA3NjggNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8dGl0bGU+aXBhZC1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qb3J0cmFpdCcgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDc2OCwwIEw3NjgsNjggTDAsNjggTDAsMCBaIE0zNjYsNjEuMDA0ODgxNSBDMzY2LDU5Ljg5NzYxNiAzNjYuODk2Mjc5LDU5IDM2OC4wMDI0LDU5IEw0MDAuOTk3Niw1OSBDNDAyLjEwMzQ5NSw1OSA0MDMsNTkuODkzODk5OCA0MDMsNjEuMDA0ODgxNSBMNDAzLDYxLjk5NTExODUgQzQwMyw2My4xMDIzODQgNDAyLjEwMzcyMSw2NCA0MDAuOTk3Niw2NCBMMzY4LjAwMjQsNjQgQzM2Ni44OTY1MDUsNjQgMzY2LDYzLjEwNjEwMDIgMzY2LDYxLjk5NTExODUgTDM2Niw2MS4wMDQ4ODE1IFonIGlkPSdpcGFkLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBhZC1wcm9cIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzEwMjRweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMTAyNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5pcGFkLXByby1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qcm8tUG9ydHJhaXQnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMCwwIEwxMDI0LDAgTDEwMjQsNjggTDAsNjggTDAsMCBaIE00OTQsNjEuMDA0ODgxNSBDNDk0LDU5Ljg5NzYxNiA0OTQuODk2Mjc5LDU5IDQ5Ni4wMDI0LDU5IEw1MjguOTk3Niw1OSBDNTMwLjEwMzQ5NSw1OSA1MzEsNTkuODkzODk5OCA1MzEsNjEuMDA0ODgxNSBMNTMxLDYxLjk5NTExODUgQzUzMSw2My4xMDIzODQgNTMwLjEwMzcyMSw2NCA1MjguOTk3Niw2NCBMNDk2LjAwMjQsNjQgQzQ5NC44OTY1MDUsNjQgNDk0LDYzLjEwNjEwMDIgNDk0LDYxLjk5NTExODUgTDQ5NCw2MS4wMDQ4ODE1IFonIGlkPSdpcGFkLXByby1wb3J0cmFpdCc+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0fVxuXHR3aWZpOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG48c3ZnIHdpZHRoPScxOHB4JyBoZWlnaHQ9JzE0cHgnIHZpZXdCb3g9JzAgMCAxOCAxNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cbiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG4gICAgPHRpdGxlPlNoYXBlPC90aXRsZT5cbiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICA8ZGVmcz48L2RlZnM+XG4gICAgPGcgaWQ9J01hdGVyaWFsLURlc2lnbi1TeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cbiAgICAgICAgPGcgaWQ9J01hdGVyaWFsL0FuZHJvaWQvU3RhdHVzLWJhci1jb250ZW50LWxpZ2h0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScjMDAwMDAwJz5cbiAgICAgICAgICAgIDxnIGlkPSd3aWZpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNC4wMDAwMDAsIDQuMDAwMDAwKSc+XG4gICAgICAgICAgICAgICAgPHBhdGggZD0nTTE5LjAyMjYyNzksNC4wMTU5MzEyMyBDMTYuNTExNzgwOSwyLjEyMjU2MzgyIDEzLjM4Njk4NDksMSAxMCwxIEM2LjYxMzAxNTEzLDEgMy40ODgyMTkwOCwyLjEyMjU2MzgyIDAuOTc3MzcyMDg1LDQuMDE1OTMxMjMgTDEwLDE1IEwxOS4wMjI2Mjc5LDQuMDE1OTMxMjMgWicgaWQ9J1NoYXBlJz48L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICA8L2c+XG48L3N2Zz5cIlxuXHRzaWduYWxIaWdoOiBcIlxuPHN2ZyB3aWR0aD0nMTRweCcgaGVpZ2h0PScxNHB4JyB2aWV3Qm94PScwIDEgMTQgMTQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG4gICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgIDxkZWZzPjwvZGVmcz5cbiAgICA8cG9seWdvbiBpZD0nU2hhcGUnIHN0cm9rZT0nbm9uZScgZmlsbD0nI0ZGRkZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBwb2ludHM9JzAgMTUgMTQgMTUgMTQgMSc+PC9wb2x5Z29uPlxuPC9zdmc+XCJcblx0YWN0aXZpdHk6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlNvY2NlciBCYWxsPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPlxuXHRcdFx0XHRcdDxjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNzkuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J1NvY2Nlci1CYWxsJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNzkuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxtYXNrIGlkPSdtYXNrLTInIHNrZXRjaDpuYW1lPSdNYXNrJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdFx0XHRcdFx0PHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdFx0XHRcdFx0PC9tYXNrPlxuXHRcdFx0XHRcdFx0XHQ8dXNlIGlkPSdNYXNrJyBzdHJva2U9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNiwxMi4xMjAzMDQ2IEwxMi44NTczMzg0LDggTDEzLjM3MjM3NjUsOC44NTcxNjczIEw2LjUxNTAzODA3LDEyLjk3NzQ3MTkgTDYsMTIuMTIwMzA0NiBMNiwxMi4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDcnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTkuMTAwMTEwMyw1LjM0NTEwOTAxIEwxOS41MjI3Mjg1LDYuMjUxNDE2OCBMMTIuMjcyMjY2Miw5LjYzMjM2Mjg5IEwxMS44NDk2NDgsOC43MjYwNTUxIEwxMS44NDk2NDgsOC43MjYwNTUxIFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMy4xMjAzMDQ2IEwxMi44NTczMzg0LC0xIEwxMy4zNzIzNzY1LC0wLjE0MjgzMjY5OSBMNi41MTUwMzgwNywzLjk3NzQ3MTkgTDYsMy4xMjAzMDQ2IEw2LDMuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00tMSw3LjEyMDMwNDYgTDUuODU3MzM4NDEsMyBMNi4zNzIzNzY0OCwzLjg1NzE2NzMgTC0wLjQ4NDk2MTkyNSw3Ljk3NzQ3MTkgTC0xLDcuMTIwMzA0NiBMLTEsNy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PSc0JyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PSc1Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTEuNScgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nMTInPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsNC44NTcxNjczIEwxMS44NTczMzg0LDguOTc3NDcxOSBMMTIuMzcyMzc2NSw4LjEyMDMwNDYgTDUuNTE1MDM4MDcsNCBMNSw0Ljg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDEyLjg1NzE2NzMgTDExLjg1NzMzODQsMTYuOTc3NDcxOSBMMTIuMzcyMzc2NSwxNi4xMjAzMDQ2IEw1LjUxNTAzODA3LDEyIEw1LDEyLjg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weS01JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEnIGZpbGw9JyNEOEQ4RDgnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMS1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNDU3NzExODksMy4xOTUwNDczOSBMNy4zNTUxNDQ4NCw2LjEzMjE4MzMzIEw0LjUzMDA2NzYsNi45NDIyNjEyIEwyLjg4NjY0MDg5LDQuNTA1NzgwOSBMNC42OTYwMjQ1NywyLjE4OTg3NTQxIEw3LjQ1NzcxMTg5LDMuMTk1MDQ3MzknIGlkPSdQb2x5Z29uLTEtQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNDU3NzExODksMTEuMTk1MDQ3NCBMNy4zNTUxNDQ4NCwxNC4xMzIxODMzIEw0LjUzMDA2NzYsMTQuOTQyMjYxMiBMMi44ODY2NDA4OSwxMi41MDU3ODA5IEw0LjY5NjAyNDU3LDEwLjE4OTg3NTQgTDcuNDU3NzExODksMTEuMTk1MDQ3NCcgaWQ9J1BvbHlnb24tMS1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQgTDE0LjQ0MDYwMzEsMy4wMDk3Mjk4OCBMMTEuNjE1NTI1OCwzLjgxOTgwNzc0IEw5Ljk3MjA5OTEyLDEuMzgzMzI3NDUgTDExLjc4MTQ4MjgsLTAuOTMyNTc4MDUgTDE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0JyBpZD0nUG9seWdvbi0xLUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRhbmltYWxzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Hcm91cDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExNy4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpY19Gb29kJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMTguMDAwMDAwLCA2NDAuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdHcm91cCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNjgzNzc1MzcsMS4zODE1NjY0NiBDNi4yMzkyNjA2NiwxLjEzNjI0IDYuODUzNzIwMDUsMSA3LjUsMSBDOC4xNDYyNzk5NSwxIDguNzYwNzM5MzQsMS4xMzYyNCA5LjMxNjIyNDYzLDEuMzgxNTY2NDYgQzkuODA4NzkyNzUsMC41NjIzNTkwMTkgMTAuODI1NTg4OCwwIDEyLDAgQzEzLjY1Njg1NDIsMCAxNSwxLjExOTI4ODEzIDE1LDIuNSBDMTUsMy41NTcxMzk4IDE0LjIxMjYyNDYsNC40NjEwMjg0MyAxMy4wOTk5MjI2LDQuODI2NjI1MTQgQzE0LjI0OTY1MjgsNS42NDE4NTQyMiAxNSw2Ljk4MzMwMDYyIDE1LDguNSBDMTUsMTAuNzE2NzE0NCAxMy4zOTcxODczLDEyLjU1OTA3MTkgMTEuMjg3MjY3MSwxMi45MzEzNjczIEMxMC40ODY3MjQ4LDE0LjE3NTc3MDMgOS4wODk2MTY5NiwxNSA3LjUsMTUgQzUuOTEwMzgzMDQsMTUgNC41MTMyNzUyNCwxNC4xNzU3NzAzIDMuNzEyNzMyOTEsMTIuOTMxMzY3MyBDMS42MDI4MTI2OCwxMi41NTkwNzE5IDAsMTAuNzE2NzE0NCAwLDguNSBDMCw2Ljk4MzMwMDYyIDAuNzUwMzQ3MjQ0LDUuNjQxODU0MjIgMS45MDAwNzc0MSw0LjgyNjYyNTE0IEMwLjc4NzM3NTQ0NSw0LjQ2MTAyODQzIDAsMy41NTcxMzk4IDAsMi41IEMwLDEuMTE5Mjg4MTMgMS4zNDMxNDU3NSwwIDMsMCBDNC4xNzQ0MTEyMiwwIDUuMTkxMjA3MjUsMC41NjIzNTkwMTkgNS42ODM3NzUzNywxLjM4MTU2NjQ2IFonIGlkPSdPdmFsLTgnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS43MzgzNDIyOCwxMiBDNS44NjI5MDk3OSwxMiA2LjE0NjQyMzUzLDEyIDYuMTQ2NDIzNTMsMTIgQzYuMTQ2NDIzNTMsMTIgNi40MzIxNTY5NiwxMi40NDI2MTIzIDYuNTI0NjU4MiwxMi40OTE5NzM5IEM2LjY2NDU1NjAxLDEyLjU2NjYyNzcgNywxMi40OTE5NzM5IDcsMTIuNDkxOTczOSBMNywxMiBMOCwxMiBMOCwxMi40OTE5NzM5IEw4LjQ5Nzk5MjI4LDEyLjQ5MTk3MzkgTDguODQzMDE3NjksMTIgTDkuMzkxODQ1NywxMiBDOS4zOTE4NDU3LDEyIDguOTk1OTg0NTcsMTIuOTgzOTQ3OCA4LjQ5Nzk5MjI4LDEyLjk4Mzk0NzggTDYuNjA3MDI0MDcsMTIuOTgzOTQ3OCBDNi4yMTQwNDgxMywxMi45ODM5NDc4IDUuNDU5OTYwOTQsMTIgNS43MzgzNDIyOCwxMiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHktMic+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQnIGN4PScxMC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQtQ29weScgY3g9JzQuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTIuNjk5OTk2OSw1IEMxMi42OTk5OTY5LDMuMDY3MDAzMzggMTEuMTMyOTkzNiwxLjUgOS4xOTk5OTY5NSwxLjUnIGlkPSdPdmFsLTE2Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSw1IEM1LjUsMy4wNjcwMDMzOCAzLjkzMjk5NjYyLDEuNSAyLDEuNScgaWQ9J092YWwtMTYtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy43NTAwMDAsIDMuMjUwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zLjc1MDAwMCwgLTMuMjUwMDAwKSAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHg9JzcnIHk9JzExJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTAgTDYuNSwxMCBMNi40OTk5OTk5OSw5LjUgTDguNTAwMDAwMDUsOS41IEw4LjUwMDAwMDA1LDEwIEw5LDEwIEw5LDEwLjUgTDguNSwxMC41IEw4LjUsMTEgTDYuNSwxMSBMNi41LDEwLjUgTDYsMTAuNSBMNiwxMCBaJyBpZD0nUGF0aCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRjaGV2cm9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScxM3B4JyBoZWlnaHQ9JzIycHgnIHZpZXdCb3g9JzAgMCAxMyAyMicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmFjayBDaGV2cm9uPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0ICAgICAgICA8ZyBpZD0nTmF2aWdhdGlvbi1CYXIvQmFjaycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTguMDAwMDAwLCAtMzEuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTguNSw0MiBMMTksMzEuNSBMMjEsMzMuNSBMMTIuNSw0MiBMMjEsNTAuNSBMMTksNTIuNSBMOC41LDQyIFonIGlkPSdCYWNrLUNoZXZyb24nPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGVtb2ppIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyMHB4JyBoZWlnaHQ9JzIwcHgnIHZpZXdCb3g9JzAgMCAyMCAyMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+RW1vamk8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L0xvd2VyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNjAuMDAwMDAwLCAtMTgxLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdDxnIGlkPSdCb3R0b20tUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTcwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTY2Ljc1LDMwLjUgQzcyLjEzNDc3NjMsMzAuNSA3Ni41LDI2LjEzNDc3NjMgNzYuNSwyMC43NSBDNzYuNSwxNS4zNjUyMjM3IDcyLjEzNDc3NjMsMTEgNjYuNzUsMTEgQzYxLjM2NTIyMzcsMTEgNTcsMTUuMzY1MjIzNyA1NywyMC43NSBDNTcsMjYuMTM0Nzc2MyA2MS4zNjUyMjM3LDMwLjUgNjYuNzUsMzAuNSBaIE02Ni43NSwyOS41IEM3MS41ODI0OTE2LDI5LjUgNzUuNSwyNS41ODI0OTE2IDc1LjUsMjAuNzUgQzc1LjUsMTUuOTE3NTA4NCA3MS41ODI0OTE2LDEyIDY2Ljc1LDEyIEM2MS45MTc1MDg0LDEyIDU4LDE1LjkxNzUwODQgNTgsMjAuNzUgQzU4LDI1LjU4MjQ5MTYgNjEuOTE3NTA4NCwyOS41IDY2Ljc1LDI5LjUgWiBNNjMuNzUsMTkgQzY0LjQ0MDM1NTksMTkgNjUsMTguNDQwMzU1OSA2NSwxNy43NSBDNjUsMTcuMDU5NjQ0MSA2NC40NDAzNTU5LDE2LjUgNjMuNzUsMTYuNSBDNjMuMDU5NjQ0MSwxNi41IDYyLjUsMTcuMDU5NjQ0MSA2Mi41LDE3Ljc1IEM2Mi41LDE4LjQ0MDM1NTkgNjMuMDU5NjQ0MSwxOSA2My43NSwxOSBaIE02OS43NSwxOSBDNzAuNDQwMzU1OSwxOSA3MSwxOC40NDAzNTU5IDcxLDE3Ljc1IEM3MSwxNy4wNTk2NDQxIDcwLjQ0MDM1NTksMTYuNSA2OS43NSwxNi41IEM2OS4wNTk2NDQxLDE2LjUgNjguNSwxNy4wNTk2NDQxIDY4LjUsMTcuNzUgQzY4LjUsMTguNDQwMzU1OSA2OS4wNTk2NDQxLDE5IDY5Ljc1LDE5IFogTTU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBDNTkuNjM5MDMxNiwyMS4zODMxMzQgNjAuMDY1OTE4LDIwLjk3ODUxNTYgNjAuODUzMDk1MSwyMS4yMzI5MzA0IEM2MC44NTMwOTUxLDIxLjIzMjkzMDQgNjMuMDkzNzUwMywyMi4yMTI1IDY2Ljc1MDAwMDEsMjIuMjEyNSBDNzAuNDA2MjQ5OSwyMi4yMTI1IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgQzczLjQyODcxNjIsMjAuOTY2MjE1MyA3My44ODEyNDYzLDIxLjQwNDQwOTcgNzMuNjA1ODQ3NywyMi4xODA3NDM3IEM3My42MDU4NDc3LDIyLjE4MDc0MzcgNzIuNiwyNy41NzUgNjYuNzUsMjcuNTc1IEM2MC45LDI3LjU3NSA1OS44ODc2MzM0LDIyLjE2NDE0NDQgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IFogTTY2Ljc1LDIzLjE4NzUgQzY0LjA2ODc1LDIzLjE4NzUgNjEuODU0NDA1NSwyMi40NzM3ODIxIDYxLjg1NDQwNTUsMjIuNDczNzgyMSBDNjEuMzI3MzAxOSwyMi4zMjk0OCA2MS4xNzgxMjMzLDIyLjU3MjE2MTUgNjEuNTYzOTU1NSwyMi45NTcwNzUgQzYxLjU2Mzk1NTUsMjIuOTU3MDc1IDYyLjM2MjUsMjQuNjUgNjYuNzUsMjQuNjUgQzcxLjEzNzUsMjQuNjUgNzEuOTUwODUwMywyMi45NDM4MzA0IDcxLjk1MDg1MDMsMjIuOTQzODMwNCBDNzIuMzA5MzY1OSwyMi41Mzk5Mjc4IDcyLjE2OTA3OTMsMjIuMzM1OTg0NCA3MS42MzU0MjczLDIyLjQ3NjM0OSBDNzEuNjM1NDI3MywyMi40NzYzNDkgNjkuNDMxMjUsMjMuMTg3NSA2Ni43NSwyMy4xODc1IFonIGlkPSdFbW9qaSc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGRlbGV0ZToge1xuXHRcdG9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMjRweCcgaGVpZ2h0PScxOHB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdG9mZiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMjRweCcgaGVpZ2h0PScxOHB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFogTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM4LjcwOTcyLDIxLjcwOTcxOTUgQzMzOC4zMTc3NTIsMjEuMzE3NzUyMiAzMzguMzE4OTY1LDIwLjY4MTAzNDkgMzM4LjcwOTcyLDIwLjI5MDI4MDUgTDM0NC42NDMyNDUsMTQuMzU2NzU0NyBDMzQ0Ljg0MDI3NiwxNC4xNTk3MjQ1IDM0NS4yMjU2MzksMTQgMzQ1LjQ5Mzc0MSwxNCBMMzU1Ljk5NzIzOSwxNCBDMzU3LjEwMzMzMywxNCAzNTcuOTk5OTk5LDE0Ljg5NzA2MDEgMzU3Ljk5OTk5OSwxNi4wMDU4NTg2IEwzNTcuOTk5OTk5LDI1Ljk5NDE0MTIgQzM1Ny45OTk5OTksMjcuMTAxOTQ2NCAzNTcuMTA2NDU3LDI3Ljk5OTk5OTkgMzU1Ljk5NzIzOSwyNy45OTk5OTk5IEwzNDUuNDkzNzQxLDI4IEMzNDUuMjIxMDU2LDI4IDM0NC44NDA2NDMsMjcuODQwNjQzMSAzNDQuNjQzMjQ2LDI3LjY0MzI0NTMgTDMzOC43MDk3MiwyMS43MDk3MTk1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0fVxuXHRmb29kIDogIFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkZvb2Q8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0OC4wMDAwMDAsIC02MzcuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nRm9vZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQ5LjUwMDAwMCwgMjI5LjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjUsMTUuNSBMMSwxNS41IEwwLDUgTDYuNSw1IEw2LjI2MzYwOTMzLDcuNDgyMTAyMDInIGlkPSdEcmluaycgc3Ryb2tlPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYuMDEwNzc1NDUsMS45NjkzMDA5OCBMNi41MTU3MTM1Miw1LjIyMjcwNTM5IEw1LjcxOTA4MTg0LDUuNjc5NDc4MTIgTDUuMDM4OTAwOSwxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDEuOTY5MzAwOTggTDYuMDEwNzc1NDUsMS45NjkzMDA5OCBaJyBpZD0nU3RyYXcnIGZpbGw9JyM0QTU0NjEnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDYuODU1NTcyLCAzLjMyNDM5MCkgcm90YXRlKDI0LjAwMDAwMCkgdHJhbnNsYXRlKC02Ljg1NTU3MiwgLTMuMzI0MzkwKSAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nQm90dG9tLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyB4PSczJyB5PScxNCcgd2lkdGg9JzEwLjUnIGhlaWdodD0nMS41JyByeD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xLjUsMTIuNTAyNDQwOCBDMS41LDExLjk0ODgwOCAxLjk0OTE2OTE2LDExLjUgMi40OTI2ODcyMywxMS41IEwxNC4wMDczMTI4LDExLjUgQzE0LjU1NTU1ODgsMTEuNSAxNSwxMS45NDY5NDk5IDE1LDEyLjUwMjQ0MDggTDE1LDEyLjk5NzU1OTIgQzE1LDEzLjU1MTE5MiAxNC41NTA4MzA4LDE0IDE0LjAwNzMxMjgsMTQgTDIuNDkyNjg3MjMsMTQgQzEuOTQ0NDQxMjEsMTQgMS41LDEzLjU1MzA1MDEgMS41LDEyLjk5NzU1OTIgTDEuNSwxMi41MDI0NDA4IFogTTMuOTMzMDAwMDMsMTEuODM5MjcyNyBDMy40MTc3MTgzNCwxMS42NTE4OTc2IDMuNDQ0ODM2OTcsMTEuNSAzLjk5NTU3NzUsMTEuNSBMMTMuMDA0NDIyNSwxMS41IEMxMy41NTQyNjQ4LDExLjUgMTMuNTg2NjA2MSwxMS42NTAzMjUxIDEzLjA2NywxMS44MzkyNzI3IEw4LjUsMTMuNSBMMy45MzMwMDAwMywxMS44MzkyNzI3IFonIGlkPScmcXVvdDtQYXR0eSZxdW90OycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yLjUsMTAuNSBMMTMuNSwxMC41IEwxNSwxMS41IEwxLDExLjUgTDIuNSwxMC41IFonIGlkPSdDaGVlc2UnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNOC4yNSwxMC41IEMxMS40MjU2MzczLDEwLjUgMTQsMTAuMzI4NDI3MSAxNCw5LjUgQzE0LDguNjcxNTcyODggMTEuNDI1NjM3Myw4IDguMjUsOCBDNS4wNzQzNjI2OSw4IDIuNSw4LjY3MTU3Mjg4IDIuNSw5LjUgQzIuNSwxMC4zMjg0MjcxIDUuMDc0MzYyNjksMTAuNSA4LjI1LDEwLjUgWicgaWQ9J1RvcC1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLXdpZHRoPScwLjc1Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGZsYWdzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTFweCcgaGVpZ2h0PScxNXB4JyB2aWV3Qm94PScwIDAgMTEgMTUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5GbGFnPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNzUuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J0ZsYWcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3NS4wMDAwMDAsIDIzMS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUG9sZScgZmlsbD0nIzRBNTQ2MScgeD0nMCcgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMTQnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMSwxIEMxLDEgMS4yNSwyIDMuNSwyIEM1Ljc1LDIgNiwwLjc0OTk5OTk5OCA4LDAuNzUgQzEwLDAuNzQ5OTk5OTk4IDEwLDEuNSAxMCwxLjUgTDEwLDcuNSBDMTAsNy41IDEwLDYuNSA4LDYuNSBDNiw2LjUgNC44MDYyMzkxMSw4IDMuNSw4IEMyLjE5Mzc2MDg5LDggMSw3IDEsNyBMMSwxIFonIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRmcmVxdWVudDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+UmVjZW50PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01NS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nUmVjZW50JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1NS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdCb2R5JyBzdHJva2U9JyM0QTU0NjEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNSw3LjUgTDcuNSw4LjUgTDguNSw4LjUgTDguNSwyIEw3LjUsMiBMNy41LDcuNSBMNCw3LjUgTDQsOC41IEw4LjUsOC41IEw4LjUsNy41IEw3LjUsNy41IFonIGlkPSdIYW5kcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRrZXlib2FyZCA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPSczMi41cHgnIGhlaWdodD0nMjMuNXB4JyB2aWV3Qm94PScwIDAgNjUgNDcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qb3J0cmFpdCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0MzYuMDAwMDAwLCAtMTk1Ni4wMDAwMDApJyBmaWxsPScjMDAwMDAwJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZC1MaWdodCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDE0MjIuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkLWRvd24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0MTIuMDAwMDAwLCA1MDAuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J004Ny4wMDEzMzIsMzQgQzg4LjEwNTE2NTksMzQgODksMzQuODk5NzEyNyA4OSwzNS45OTMyODc0IEw4OSw2MS4wMDY3MTI2IEM4OSw2Mi4xMDc1NzQ4IDg4LjEwNTg3NTksNjMgODcuMDAxMzMyLDYzIEwyNS45OTg2NjgsNjMgQzI0Ljg5NDgzNDEsNjMgMjQsNjIuMTAwMjg3MyAyNCw2MS4wMDY3MTI2IEwyNCwzNS45OTMyODc0IEMyNCwzNC44OTI0MjUyIDI0Ljg5NDEyNDEsMzQgMjUuOTk4NjY4LDM0IEw4Ny4wMDEzMzIsMzQgWiBNMjYsMzYgTDI2LDYxIEw4Nyw2MSBMODcsMzYgTDI2LDM2IFogTTc5LDQwIEw4Myw0MCBMODMsNDQgTDc5LDQ0IEw3OSw0MCBaIE03Miw0MCBMNzYsNDAgTDc2LDQ0IEw3Miw0NCBMNzIsNDAgWiBNNjUsNDAgTDY5LDQwIEw2OSw0NCBMNjUsNDQgTDY1LDQwIFogTTU4LDQwIEw2Miw0MCBMNjIsNDQgTDU4LDQ0IEw1OCw0MCBaIE01MSw0MCBMNTUsNDAgTDU1LDQ0IEw1MSw0NCBMNTEsNDAgWiBNNDQsNDAgTDQ4LDQwIEw0OCw0NCBMNDQsNDQgTDQ0LDQwIFogTTM3LDQwIEw0MSw0MCBMNDEsNDQgTDM3LDQ0IEwzNyw0MCBaIE0zMCw0MCBMMzQsNDAgTDM0LDQ0IEwzMCw0NCBMMzAsNDAgWiBNNzksNDcgTDgzLDQ3IEw4Myw1MSBMNzksNTEgTDc5LDQ3IFogTTcyLDQ3IEw3Niw0NyBMNzYsNTEgTDcyLDUxIEw3Miw0NyBaIE02NSw0NyBMNjksNDcgTDY5LDUxIEw2NSw1MSBMNjUsNDcgWiBNNTgsNDcgTDYyLDQ3IEw2Miw1MSBMNTgsNTEgTDU4LDQ3IFogTTUxLDQ3IEw1NSw0NyBMNTUsNTEgTDUxLDUxIEw1MSw0NyBaIE00NCw0NyBMNDgsNDcgTDQ4LDUxIEw0NCw1MSBMNDQsNDcgWiBNMzcsNDcgTDQxLDQ3IEw0MSw1MSBMMzcsNTEgTDM3LDQ3IFogTTMwLDQ3IEwzNCw0NyBMMzQsNTEgTDMwLDUxIEwzMCw0NyBaIE03OSw1NCBMODMsNTQgTDgzLDU4IEw3OSw1OCBMNzksNTQgWiBNNzIsNTQgTDc2LDU0IEw3Niw1OCBMNzIsNTggTDcyLDU0IFogTTQ0LDU0IEw2OSw1NCBMNjksNTggTDQ0LDU4IEw0NCw1NCBaIE0zNyw1NCBMNDEsNTQgTDQxLDU4IEwzNyw1OCBMMzcsNTQgWiBNMzAsNTQgTDM0LDU0IEwzNCw1OCBMMzAsNTggTDMwLDU0IFogTTQ0LjMxNjM0OTgsNjkuOTc3MTA0NyBDNDMuMzY4NDIyNSw3MC41NDIwMzQyIDQzLjMzMzg3MjEsNzEuNTA5NjQ5NSA0NC4yMzc4MjE3LDcyLjEzNzM5MTIgTDU1LjM2MjE1MzksNzkuODYyNjA4OCBDNTYuMjY2NzExMyw4MC40OTA3NzI2IDU3LjczMzg5NjUsODAuNDkwMzUwNSA1OC42Mzc4NDYxLDc5Ljg2MjYwODggTDY5Ljc2MjE3ODMsNzIuMTM3MzkxMiBDNzAuNjY2NzM1Nyw3MS41MDkyMjc0IDcwLjY0ODAxMiw3MC41MjA1MjA0IDY5LjcxMTUxODcsNjkuOTIzNDE2NiBMNjkuOTgyNTczMSw3MC4wOTYyMzk2IEM2OS41MTgxMzMzLDY5LjgwMDExNSA2OC43NzgyNTU3LDY5LjgxMjY0OTMgNjguMzI2MTMwNyw3MC4xMjY5MzIzIEw1Ny44MTU0OTk5LDc3LjQzMzEyNjMgQzU3LjM2NTExMTcsNzcuNzQ2MjAyIDU2LjYyODE2NSw3Ny43MzgxNzg2IDU2LjE3NjIxMDMsNzcuNDE5OTQyNCBMNDUuODM4NjEzNyw3MC4xNDA4OTc3IEM0NS4zODM2NDcyLDY5LjgyMDU0MDcgNDQuNjM3NTAzOSw2OS43ODU3MDg4IDQ0LjE1NjYzOTMsNzAuMDcyMjg2MiBMNDQuMzE2MzQ5OCw2OS45NzcxMDQ3IFonIGlkPSdTaGFwZSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGtleVBvcFVwOlxuXHRcdFwiaXBob25lLTVcIiA6IFwiPHN2ZyB3aWR0aD0nNTVweCcgaGVpZ2h0PSc5MnB4JyB2aWV3Qm94PSc1MyAzMTYgNTUgOTInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuMzQxNzMyMzEsNDAuOTM5MTcwMSBDMC41MTc0NjYxMjgsNDAuMjA1ODkgMCwzOS4xMzc0MjUxIDAsMzcuOTQ3NzYzNSBMMCw0LjAwMzQ1NTk4IEMwLDEuNzg5MTcxMzYgMS43OTUyODI0OCwwIDQuMDA5ODc1NjYsMCBMNDQuOTkwMTI0MywwIEM0Ny4yMTI1NjA4LDAgNDksMS43OTI0MDgzIDQ5LDQuMDAzNDU1OTggTDQ5LDM3Ljk0Nzc2MzUgQzQ5LDM4LjkxMjQwNTEgNDguNjU5Mjc5OCwzOS43OTYzNjU5IDQ4LjA5MTYwNDEsNDAuNDg2ODY2NSBDNDguMDQxNDIzMyw0MC45MDMyMjg5IDQ3LjcxMTE4ODgsNDEuNDA3NDY3MiA0Ny4wODI1OTA4LDQxLjk1MjI1IEM0Ny4wODI1OTA4LDQxLjk1MjI1IDM4LjUyOTkxNDUsNDkuMDY0MzM2MiAzOC41Mjk5MTQ1LDUxLjE1MjY0MjQgQzM4LjUyOTkxNDUsNjEuNjQ5NzU2MSAzOC4xNzcwMDk5LDgyLjAwMjU0MDYgMzguMTc3MDA5OSw4Mi4wMDI1NDA2IEMzOC4xNDEyMzA0LDg0LjIwMjQzNTQgMzYuMzIxMDI4NCw4NiAzNC4xMTI4NDk1LDg2IEwxNS4zMDU5NTM5LDg2IEMxMy4xMDc5Niw4NiAxMS4yNzgxODg0LDg0LjIxMDA3ODkgMTEuMjQxNzkzNiw4Mi4wMDIwOTkzIEMxMS4yNDE3OTM2LDgyLjAwMjA5OTMgMTAuODg4ODg4OSw2MS42NDcwODUyIDEwLjg4ODg4ODksNTEuMTQ4NjM2MSBDMTAuODg4ODg4OSw0OS4wNjE2NjU0IDIuMzQxNDM2NjIsNDIuMjM4NjU1IDIuMzQxNDM2NjIsNDIuMjM4NjU1IEMxLjc3ODI3MzExLDQxLjc2NDEzNjUgMS40NDg4MTM1NCw0MS4zMjA0MjM3IDEuMzQxNzMyMzEsNDAuOTM5MTcwMSBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc0OScgaGVpZ2h0PSc4NicgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1Ni4wMDAwMDAsIDMxOC4wMDAwMDApJz5cblx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nI0IyQjRCOScgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjRkNGQ0ZDJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRcImlwaG9uZS02c1wiIDogXCI8c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzEwN3B4JyB2aWV3Qm94PScyNCAzODcgNjQgMTA3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHQgICAgICAgIDxwYXRoIGQ9J00xLjQ4NjQ3NjQ2LDQ4LjM3Nzk5NDcgQzAuNTgwMjY2NDksNDcuNjQ2NDI5NiAwLDQ2LjUyOTU4NyAwLDQ1LjI3ODE5NDggTDAsMy45OTAwOTc4NyBDMCwxLjc4MjU5MTIgMS43OTUwOTU3NywwIDQuMDA5NDU4NjIsMCBMNTMuOTkwNTQxNCwwIEM1Ni4yMDA1NzQ2LDAgNTgsMS43ODY0Mjc2NyA1OCwzLjk5MDA5Nzg3IEw1OCw0NS4yNzgxOTQ4IEM1OCw0Ni4xODMzMDA0IDU3LjY5ODIyNTgsNDcuMDE2OTczMyA1Ny4xODk1MDk3LDQ3LjY4NTYzMjUgQzU3LjAzOTY4NjUsNDguMDIxMjQ5NyA1Ni43MzYwMDk4LDQ4LjM5NzI4MzQgNTYuMjcxODM2Myw0OC43OTUwNjYxIEM1Ni4yNzE4MzYzLDQ4Ljc5NTA2NjEgNDUuNjA2ODM3Niw1Ny42MjIwNjkzIDQ1LjYwNjgzNzYsNjAuMDc0NjE0OSBDNDUuNjA2ODM3Niw3Mi40MDI2MjA1IDQ1LjE3Nzk2Nyw5Ni45OTIzMTY0IDQ1LjE3Nzk2Nyw5Ni45OTIzMTY0IEM0NS4xNDEzNzQ4LDk5LjIxMjIyMTQgNDMuMzE5MzA2NSwxMDEgNDEuMTA5MDAzNSwxMDEgTDE3LjM4NjcyMywxMDEgQzE1LjE4MTI3MjIsMTAxIDEzLjM1NDY4Myw5OS4yMDU1MDA5IDEzLjMxNzc1OTUsOTYuOTkxODc0MSBDMTMuMzE3NzU5NSw5Ni45OTE4NzQxIDEyLjg4ODg4ODksNzIuMzk5NDgzOCAxMi44ODg4ODg5LDYwLjA2OTkwOTkgQzEyLjg4ODg4ODksNTcuNjE4OTMyNiAyLjIyNjczNDM3LDQ5LjE0NjI5MzYgMi4yMjY3MzQzNyw0OS4xNDYyOTM2IEMxLjkwNTI0MDg3LDQ4Ljg3ODgzMjcgMS42NTkxMTY1NSw0OC42MjA3MzMgMS40ODY0NzY0Niw0OC4zNzc5OTQ3IFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzU4JyBoZWlnaHQ9JzEwMScgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNy4wMDAwMDAsIDM4OS4wMDAwMDApJz5cblx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nI0IyQjRCOScgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjRkNGQ0ZDJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRcImlwaG9uZS02cy1wbHVzXCIgOiBcIjxzdmcgd2lkdGg9JzcwcHgnIGhlaWdodD0nMTE5cHgnIHZpZXdCb3g9JzI4IDQ1MCA3MCAxMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuOTU3MjkzOTUsNTQuMDcyODMwNCBDMC43ODU5MTExMzIsNTMuMzc1NzY5OSAwLDUyLjA5ODc3NiAwLDUwLjYzODkwMjIgTDAsMy45OTUyNDQxOSBDMCwxLjc4NjcxNDI4IDEuNzkyNDIyMDIsMCA0LjAwMzQ4NjYzLDAgTDU5Ljk5NjUxMzQsMCBDNjIuMjA0NjIzNSwwIDY0LDEuNzg4NzMxNzUgNjQsMy45OTUyNDQxOSBMNjQsNTAuNjM4OTAyMiBDNjQsNTEuOTIzMzY4NiA2My4zOTM3MTE2LDUzLjA2NTE1NTYgNjIuNDUxMzkxLDUzLjc5NTc1NCBDNjIuNDQyNzc1Miw1My44MDMyNDMzIDYyLjQzNDEwMTksNTMuODEwNzQwNCA2Mi40MjUzNzA5LDUzLjgxODI0NTQgQzYyLjQyNTM3MDksNTMuODE4MjQ1NCA1MC4zMjQ3ODYzLDYzLjg5Nzc0MDIgNTAuMzI0Nzg2Myw2Ni42MTczOTQ3IEM1MC4zMjQ3ODYzLDgwLjI4ODA1NDQgNDkuODQ0MzA0OSwxMDguMDAyMDA3IDQ5Ljg0NDMwNDksMTA4LjAwMjAwNyBDNDkuODA3OTY2NSwxMTAuMjEwMjM0IDQ3Ljk4NzQyMzIsMTEyIDQ1Ljc3ODkwODksMTEyIEwxOC43NjgwOTk3LDExMiBDMTYuNTUzNDM5NywxMTIgMTQuNzM5NDQ1NiwxMTAuMjA5ODQgMTQuNzAyNzAzNywxMDguMDAxNTY2IEMxNC43MDI3MDM3LDEwOC4wMDE1NjYgMTQuMjIyMjIyMiw4MC4yODQ1NzYxIDE0LjIyMjIyMjIsNjYuNjEyMTc3MyBDMTQuMjIyMjIyMiw2My44OTQyNjE5IDIuMTQwODE0MjIsNTQuMjMyMTMzNyAyLjE0MDgxNDIyLDU0LjIzMjEzMzcgQzIuMDc2NjQ5MTMsNTQuMTc4NjI5OCAyLjAxNTQ4MTExLDU0LjEyNTUxMzQgMS45NTcyOTM5NSw1NC4wNzI4MzA0IFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzY0JyBoZWlnaHQ9JzExMicgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMS4wMDAwMDAsIDQ1Mi4wMDAwMDApJz5cblx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nI0IyQjRCOScgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjRkNGQ0ZDJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0b2JqZWN0cyA6XG5cdFx0XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMTFweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTEgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5MaWdodGJ1bGI8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDQuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nTGlnaHRidWxiJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDQuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LDEwLjQwMDI5MDQgQzkuNzgwODM3OTUsOS40ODk5MzQ5MSAxMSw3LjYzNzM0MjczIDExLDUuNSBDMTEsMi40NjI0MzM4OCA4LjUzNzU2NjEyLDAgNS41LDAgQzIuNDYyNDMzODgsMCAwLDIuNDYyNDMzODggMCw1LjUgQzAsNy42MzczNDI3MyAxLjIxOTE2MjA1LDkuNDg5OTM0OTEgMywxMC40MDAyOTA0IEwzLDE0LjAwMjA4NjkgQzMsMTUuMTAxNzM5NCAzLjg5NzYxNjAyLDE2IDUuMDA0ODgxNSwxNiBMNS45OTUxMTg1LDE2IEM3LjEwNjEwMDIsMTYgOCwxNS4xMDU1MDM4IDgsMTQuMDAyMDg2OSBMOCwxMC40MDAyOTA0IFonIGlkPSdPdmFsLTE3JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzMnIHk9JzEyJyB3aWR0aD0nNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzQnIHk9JzEzLjUnIHdpZHRoPScxLjUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSw4LjUgQzUsOC41IDMuNDk5OTk5OTksNy41MDAwMDAwMSA0LDcgQzQuNTAwMDAwMDEsNi40OTk5OTk5OSA1LDcuNjY2NjY2NjcgNS41LDggQzUuNSw4IDYuNSw2LjUwMDAwMDAxIDcsNyBDNy41LDcuNDk5OTk5OTkgNiw4LjUgNiw4LjUgTDYsMTEgTDUsMTEgTDUsOC41IFonIGlkPSdSZWN0YW5nbGUtNTInIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdHNoaWZ0IDoge1xuXHRcdG9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScxOHB4JyB2aWV3Qm94PScwIDAgMjAgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMjEuNzA1MjM4OCwxMy4yMDUyMzg4IEMyMS4zMTU3NDYyLDEyLjgxNTc0NjIgMjAuNjg1NzU1OSwxMi44MTQyNDQxIDIwLjI5NDc2MTIsMTMuMjA1MjM4OCBMMTEuOTE2MDc2NywyMS41ODM5MjMzIEMxMS4xMzM5OTkxLDIyLjM2NjAwMDkgMTEuMzk4MjYwNiwyMyAxMi40OTc5MTMxLDIzIEwxNi41LDIzIEwxNi41LDI4LjAwOTIyMiBDMTYuNSwyOC41NTY0MTM2IDE2Ljk0NjMxMTQsMjkgMTcuNDk3NTQ0NiwyOSBMMjQuNTAyNDU1NCwyOSBDMjUuMDUzMzg0LDI5IDI1LjUsMjguNTQ5MDI0OCAyNS41LDI4LjAwOTIyMiBMMjUuNSwyMyBMMjkuNTAyMDg2OSwyMyBDMzAuNjA1NTAzOCwyMyAzMC44NjY4MjQsMjIuMzY2ODI0IDMwLjA4MzkyMzMsMjEuNTgzOTIzMyBMMjEuNzA1MjM4OCwxMy4yMDUyMzg4IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdG9mZiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScxOHB4JyB2aWV3Qm94PScwIDAgMjAgMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEyOS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTIxLjY3MTkwMDgsMTIuMjMyNTg5OCBDMjEuMzAxMDMyLDExLjgyNzk5MTYgMjAuNjk0Njg5MiwxMS44MzM0NzMxIDIwLjMyODgxOTUsMTIuMjMyNTg5OCBMMTEuNjk0NzAyMywyMS42NTEyOTgzIEMxMC43NTg3NDQxLDIyLjY3MjMwOCAxMS4xMjg1NTQxLDIzLjUgMTIuNTA5Nzc1MSwyMy41IEwxNS45OTk5OTk5LDIzLjUwMDAwMDIgTDE1Ljk5OTk5OTksMjguMDAxNDI0MSBDMTUuOTk5OTk5OSwyOC44MjkwNjQ4IDE2LjY3MTY1NTksMjkuNTAwMDAwMSAxNy40OTcxMDEsMjkuNTAwMDAwMSBMMjQuNTAyODk5MiwyOS41MDAwMDAxIEMyNS4zMjk3MjUzLDI5LjUwMDAwMDEgMjYuMDAwMDAwMywyOC44MzQ5NzAzIDI2LjAwMDAwMDMsMjguMDAxNDI0MSBMMjYuMDAwMDAwMywyMy41MDAwMDAxIEwyOS40OTAyMjUxLDIzLjUwMDAwMDIgQzMwLjg3NjMzNTcsMjMuNTAwMDAwMiAzMS4yNDM5NTIxLDIyLjY3NTE5MTYgMzAuMzA1NDE2MSwyMS42NTEyOTg1IEwyMS42NzE5MDA4LDEyLjIzMjU4OTggWiBNMjEuMzQxNzQ4LDE0LjM2NDUzMTYgQzIxLjE1MzAwNTYsMTQuMTYzMjA2NCAyMC44NDMzNTE1LDE0LjE2NzA5MTQgMjAuNjU4MjUxNCwxNC4zNjQ1MzE2IEwxMy41LDIxLjk5OTk5OTggTDE3LjUwMDAwMDEsMjEuOTk5OTk5OSBMMTcuNTAwMDAwMiwyNy41MDg5OTU2IEMxNy41MDAwMDAyLDI3Ljc4MDE3MDMgMTcuNzMyOTAyNywyOC4wMDAwMDA4IDE4LjAwMzQyMjksMjguMDAwMDAwOCBMMjMuOTk2NTc3LDI4LjAwMDAwMDggQzI0LjI3NDYwOTcsMjguMDAwMDAwOCAyNC40OTk5OTk3LDI3Ljc3MjEyMDMgMjQuNDk5OTk5NywyNy41MDg5OTU2IEwyNC40OTk5OTk3LDIxLjk5OTk5OTkgTDI4LjUsMjEuOTk5OTk5OSBMMjEuMzQxNzQ4LDE0LjM2NDUzMTYgWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0fVxuXHRzbWlsZXlzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT46RDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODYuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9JzpEJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg4Ny4wMDAwMDAsIDIzMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdIZWFkJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43ODk0NzM2ODQnIGN4PSc3LjUnIGN5PSc3LjUnIHI9JzcuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNSwxMy41MjYzMTU4IEMxMC4yNjg2OTA3LDEzLjUyNjMxNTggMTIuNTEzMTU3OSwxMC4zNjg0MjEyIDEyLjUxMzE1NzksOS4xODQyMTA0NSBDMTIuNTEzMTU3OSw3LjYwNTI2MzE3IDExLjQzODkwOTgsOS4xODQyMTA0MyA3LjUsOS4xODQyMTA1MyBDMy41NjEwOTAyMyw5LjE4NDIxMDYyIDIuNDg2ODQyMTEsNy42MDUyNjMxNyAyLjQ4Njg0MjExLDkuMTg0MjEwNDUgQzIuNDg2ODQyMTEsMTAuMzY4NDIxIDQuNzMxMzA5MzUsMTMuNTI2MzE1OCA3LjUsMTMuNTI2MzE1OCBaIE03LjUsMTAuOTYwNTI2MyBDOC45MzIzMzA4MywxMS4xNTc4OTQ3IDExLjc5Njk5MjUsMTAuMzY4NDIxIDExLjc5Njk5MjUsOS40NDQyMzU1MiBDMTEuNzk2OTkyNSw4Ljc4OTQ3MzY4IDEwLjg3NjIwODQsOS41Nzg5NDcyNyA3LjUsOS43NzYzMTU3OSBDNC4xMjM3OTE2Miw5LjU3ODk0NzQzIDMuMjAzMDA4NzIsOC43ODk0NzM2OSAzLjIwMzAwNzUyLDkuNDQ0MjM1NTIgQzMuMjAzMDA1ODIsMTAuMzY4NDIxIDYuMDY3NjY5MTcsMTEuMTU3ODk0NyA3LjUsMTAuOTYwNTI2MyBaJyBpZD0nU21pbGUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS4yMzY4NDIxMSw2LjMyMzY1OTggQzUuNjQzNzg4NzYsNi4zMjM2NTk4IDUuOTczNjg0MjEsNS44ODE4MzU1NCA1Ljk3MzY4NDIxLDUuMzM2ODE3NjkgQzUuOTczNjg0MjEsNC43OTE3OTk4NSA1LjY0Mzc4ODc2LDQuMzQ5OTc1NTkgNS4yMzY4NDIxMSw0LjM0OTk3NTU5IEM0LjgyOTg5NTQ1LDQuMzQ5OTc1NTkgNC41LDQuNzkxNzk5ODUgNC41LDUuMzM2ODE3NjkgQzQuNSw1Ljg4MTgzNTU0IDQuODI5ODk1NDUsNi4zMjM2NTk4IDUuMjM2ODQyMTEsNi4zMjM2NTk4IFogTTkuNzM2ODQyMTEsNi4zMjM2NTk4IEMxMC4xNDM3ODg4LDYuMzIzNjU5OCAxMC40NzM2ODQyLDUuODgxODM1NTQgMTAuNDczNjg0Miw1LjMzNjgxNzY5IEMxMC40NzM2ODQyLDQuNzkxNzk5ODUgMTAuMTQzNzg4OCw0LjM0OTk3NTU5IDkuNzM2ODQyMTEsNC4zNDk5NzU1OSBDOS4zMjk4OTU0NSw0LjM0OTk3NTU5IDksNC43OTE3OTk4NSA5LDUuMzM2ODE3NjkgQzksNS44ODE4MzU1NCA5LjMyOTg5NTQ1LDYuMzIzNjU5OCA5LjczNjg0MjExLDYuMzIzNjU5OCBaJyBpZD0nRXllcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXG5cdHN5bWJvbHM6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE3cHgnIHZpZXdCb3g9JzAgMCAxNSAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk9iamVjdHMgJmFtcDsgU3ltYm9sczwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzA0LjAwMDAwMCwgLTYzOC4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdPYmplY3RzLSZhbXA7LVN5bWJvbHMnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwNC4wMDAwMDAsIDIzMC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpbmcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAwLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScwJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzInIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIxMScgeD0nMycgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nNCc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuNzUsMC4xNTkyNjM5NzggTDExLjc1LDAgTDExLDAgTDExLDUuMDkxNDkzIEMxMC41OTM0NCw0Ljk0MjIxMzkyIDEwLjA2Mzk2NjIsNC45NjQ1MzIyNCA5LjU1NzE1Mzk5LDUuMTkwMTc5NTcgQzguNjk4NDkyOTMsNS41NzI0ODAxIDguMjMwMDM4MzUsNi4zOTM2NTYyMSA4LjUxMDgzMTQxLDcuMDI0MzI3NzQgQzguNzkxNjI0NDcsNy42NTQ5OTkyOCA5LjcxNTMzNDU0LDcuODU2MzQzNzUgMTAuNTczOTk1Niw3LjQ3NDA0MzIxIEMxMS4yNzYxMTgzLDcuMTYxNDM4MDMgMTEuNzE3MzM5Myw2LjU1NTM4OTcyIDExLjcwMTM1OTUsNiBMMTEuNzUsNiBMMTEuNzUsMS4zOTM4NTA1NiBDMTIuMzE3NTkwOCwxLjU5NTkwMDM3IDEzLDIuMDgxNzQ1NiAxMywzLjI1IEMxMyw0LjI1IDEyLjc1LDUuNSAxMi43NSw1LjUgQzEyLjc1LDUuNSAxMy43NSw0Ljc1IDEzLjc1LDIuNSBDMTMuNzUsMS4wMjI1NjEwMSAxMi41NjQyNjc0LDAuNDA3NDczMDE5IDExLjc1LDAuMTU5MjYzOTc4IFonIGlkPSdOb3RlJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgaWQ9JyZhbXA7JyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHNwYW4geD0nMC4yNScgeT0nMTYnPiZhbXA7PC90c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgaWQ9JyUnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDx0c3BhbiB4PSc3Ljc1JyB5PScxNic+JTwvdHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHR0cmF2ZWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlRyYW5zcG9ydDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQxLjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUcmFuc3BvcnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0MS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCw2IEwxLDYgTDEsMTUgTDAsMTUgTDAsNiBaIE0xNSw0IEwxNiw0IEwxNiwxNSBMMTUsMTUgTDE1LDQgWiBNMy41LDAgTDQuNSwwIEw0LjUsNyBMMy41LDcgTDMuNSwwIFogTTEsNiBMMy41LDYgTDMuNSw3IEwxLDcgTDEsNiBaIE00LjUsMCBMOS41LDAgTDkuNSwxIEw0LjUsMSBMNC41LDAgWiBNOS41LDAgTDEwLjUsMCBMMTAuNSw2IEw5LjUsNiBMOS41LDAgWiBNMTAuNSw0IEwxNSw0IEwxNSw1IEwxMC41LDUgTDEwLjUsNCBaJyBpZD0nU2t5bGluZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGlkPSdXaW5kb3dzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzAnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSc1LjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nMTEnIHk9JzQnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGlkPSdDYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIuNTAwMDAwLCA2LjUwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTguNSw4IEwyLjUsOCBMMi41LDkuNSBMMC41LDkuNSBMMC41LDcuODY4MTE0NSBDMC4yMDEyMDIxOTIsNy42OTU4MjcwMiAwLDcuMzcwOTEzNjMgMCw2Ljk5MDYzMTEgTDAsNS4wMDkzNjg5IEMwLDQuNDUxOTA5ODUgMC40NDQ4MzY5NzQsNCAwLjk5NTU3NzQ5OSw0IEwxMC4wMDQ0MjI1LDQgQzEwLjU1NDI2NDgsNCAxMSw0LjQ0MzM1MzE4IDExLDUuMDA5MzY4OSBMMTEsNi45OTA2MzExIEMxMSw3LjM2NTMzMTUgMTAuNzk5MDI0NCw3LjY5MjM0NTE5IDEwLjUsNy44NjY0OTAwMiBMMTAuNSw5LjUgTDguNSw5LjUgTDguNSw4IFogTTEuNzUsNi41IEMyLjE2NDIxMzU2LDYuNSAyLjUsNi4xNjQyMTM1NiAyLjUsNS43NSBDMi41LDUuMzM1Nzg2NDQgMi4xNjQyMTM1Niw1IDEuNzUsNSBDMS4zMzU3ODY0NCw1IDEsNS4zMzU3ODY0NCAxLDUuNzUgQzEsNi4xNjQyMTM1NiAxLjMzNTc4NjQ0LDYuNSAxLjc1LDYuNSBaIE05LjI1LDYuNSBDOS42NjQyMTM1Niw2LjUgMTAsNi4xNjQyMTM1NiAxMCw1Ljc1IEMxMCw1LjMzNTc4NjQ0IDkuNjY0MjEzNTYsNSA5LjI1LDUgQzguODM1Nzg2NDQsNSA4LjUsNS4zMzU3ODY0NCA4LjUsNS43NSBDOC41LDYuMTY0MjEzNTYgOC44MzU3ODY0NCw2LjUgOS4yNSw2LjUgWiBNMC41LDcgTDEwLjUsNyBMMTAuNSw3LjUgTDAuNSw3LjUgTDAuNSw3IFogTTMsNi41IEw4LDYuNSBMOCw3IEwzLDcgTDMsNi41IFonIGlkPSdCb2R5JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMS41LDQuNSBMMS41LDMgQzEuNSwxLjM0MzE0NTc1IDIuODM5MDIwMTMsMCA0LjUwMTY2NTQ3LDAgTDYuNDk4MzM0NTMsMCBDOC4xNTYxMDg1OSwwIDkuNSwxLjM0NjUxNzEyIDkuNSwzIEw5LjUsNScgaWQ9J1Jvb2YnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcbn1cblxuXG5leHBvcnRzLmZyYW1lckZyYW1lcyA9XG5cdDY0MDoyXG5cdDc1MDoyXG5cdDc2ODoyXG5cdDEwODA6M1xuXHQxMjQyOjNcblx0MTQ0MDo0XG5cdDE1MzY6MlxuXG4jIERldmljZSBmcmFtZXNcbmV4cG9ydHMucmVhbERldmljZXMgPVxuXHQzMjA6XG5cdFx0NDgwOlxuXHRcdFx0bmFtZTpcImlQaG9uZVwiXG5cdFx0XHR3aWR0aDozMjBcblx0XHRcdGhlaWdodDo0ODBcblx0XHRcdHNjYWxlOjFcblx0NDgwOlxuXHRcdDg1NDpcblx0XHRcdG5hbWU6XCJBbmRyb2lkIE9uZVwiXG5cdFx0XHR3aWR0aDo0ODBcblx0XHRcdGhlaWdodDo4NTRcblx0XHRcdHNjYWxlOjEuNVxuXG5cdDY0MDpcblx0XHQ5NjA6XG5cdFx0XHRuYW1lOlwiaVBob25lIDRcIlxuXHRcdFx0d2lkdGg6NjQwXG5cdFx0XHRoZWlnaHQ6OTYwXG5cdFx0XHRzY2FsZToyXG5cdFx0MTEzNjpcblx0XHRcdG5hbWU6XCJpUGhvbmUgNVwiXG5cdFx0XHR3aWR0aDo2NDBcblx0XHRcdGhlaWdodDoxMTM2XG5cdFx0XHRzY2FsZToyXG5cdDcyMDpcblx0XHQxMjgwOlxuXHRcdFx0bmFtZTpcIlhIRFBJXCJcblx0XHRcdHdpZHRoOjcyMFxuXHRcdFx0aGVpZ2h0OjEyODBcblx0XHRcdHNjYWxlOjJcblx0NzUwOlxuXHRcdDExMTg6XG5cdFx0XHRuYW1lOlwiaVBob25lIDZcIlxuXHRcdFx0d2lkdGg6NzUwXG5cdFx0XHRoZWlnaHQ6MTExOFxuXHRcdFx0c2NhbGU6MlxuXHRcdDEzMzQ6XG5cdFx0XHRuYW1lOlwiaVBob25lIDZcIlxuXHRcdFx0d2lkdGg6NzUwXG5cdFx0XHRoZWlnaHQ6MTMzNFxuXHRcdFx0c2NhbGU6MlxuXHQ3Njg6XG5cdFx0MTAyNDpcblx0XHRcdG5hbWU6XCJpUGFkXCJcblx0XHRcdHdpZHRoOjc2OFxuXHRcdFx0aGVpZ2h0OjEwMjRcblx0XHRcdHNjYWxlOjFcblx0XHQxMjgwOlxuXHRcdFx0bmFtZTpcIk5leHVzIDRcIlxuXHRcdFx0d2lkdGg6NzY4XG5cdFx0XHRoZWlnaHQ6MTI4MFxuXHRcdFx0c2NhbGU6MlxuXHQ4MDA6XG5cdFx0MTI4MDpcblx0XHRcdG5hbWU6XCJOZXh1cyA3XCJcblx0XHRcdHdpZHRoOjgwMFxuXHRcdFx0aGVpZ2h0OjEyODBcblx0XHRcdHNjYWxlOjFcblx0MTA4MDpcblx0XHQxOTIwOlxuXHRcdFx0bmFtZTpcIlhYSERQSVwiXG5cdFx0XHR3aWR0aDoxMDgwXG5cdFx0XHRoZWlnaHQ6MTkyMFxuXHRcdFx0c2NhbGU6M1xuXHQxMjAwOlxuXHRcdDE5MjA6XG5cdFx0XHRuYW1lOlwiTmV4dXMgN1wiXG5cdFx0XHR3aWR0aDoxMjAwXG5cdFx0XHRoZWlnaHQ6MTkyMFxuXHRcdFx0c2NhbGU6MlxuXHQxMjQyOlxuXHRcdDIyMDg6XG5cdFx0XHRuYW1lOlwiaVBob25lIDYgUGx1c1wiXG5cdFx0XHR3aWR0aDoxMjQyXG5cdFx0XHRoZWlnaHQ6MjIwOFxuXHRcdFx0c2NhbGU6M1xuXHQxNDQwOlxuXHRcdDI1NjA6XG5cdFx0XHRuYW1lOlwiWFhYSERQSVwiXG5cdFx0XHR3aWR0aDoxNDQwXG5cdFx0XHRoZWlnaHQ6MjU2MFxuXHRcdFx0c2NhbGU6NFxuXHQxNDQxOlxuXHRcdDI1NjE6XG5cdFx0XHRuYW1lOlwiTmV4dXMgNlwiXG5cdFx0XHR3aWR0aDoxNDQwXG5cdFx0XHRoZWlnaHQ6MjU2MFxuXHRcdFx0c2NhbGU6NFxuXHQxNTM2OlxuXHRcdDIwNDg6XG5cdFx0XHRuYW1lOlwiaVBhZFwiXG5cdFx0XHR3aWR0aDoxNTM2XG5cdFx0XHRoZWlnaHQ6MjA0OFxuXHRcdFx0c2NhbGU6MlxuXHQxNjAwOlxuXHRcdDIwNTY6XG5cdFx0XHRuYW1lOlwiTmV4dXMgMTBcIlxuXHRcdFx0d2lkdGg6MTYwMFxuXHRcdFx0aGVpZ2h0OjIwNTZcblx0XHRcdHNjYWxlOjJcblx0MjA0ODpcblx0XHQxNTM2OlxuXHRcdFx0bmFtZTpcIk5leHVzIDlcIlxuXHRcdFx0d2lkdGg6MjA0OFxuXHRcdFx0aGVpZ2h0OjE1MzZcblx0XHRcdHNjYWxlOjJcblx0XHQyNzMyOlxuXHRcdFx0bmFtZTpcImlQYWQgUHJvXCJcblx0XHRcdHdpZHRoOjIwNDhcblx0XHRcdGhlaWdodDoyNzMyXG5cdFx0XHRzY2FsZToyXG5cdDI1NjA6XG5cdFx0MTYwMDpcblx0XHRcdG5hbWU6XCJOZXh1cyAxMFwiXG5cdFx0XHR3aWR0aDoyNTYwXG5cdFx0XHRoZWlnaHQ6MTYwMFxuXHRcdFx0c2NhbGU6MlxuXHQyNzMyOlxuXHRcdDIwNDg6XG5cdFx0XHRuYW1lOlwiaVBhZCBQcm9cIlxuXHRcdFx0d2lkdGg6MjczMlxuXHRcdFx0aGVpZ2h0OjIwNDhcblx0XHRcdHNjYWxlOjJcblxuXG5leHBvcnRzLmNvbG9ycyA9XG5cdHJlZDpcIiNGNDQzMzZcIlxuXHRyZWQ1MDpcIiNGRkVCRUVcIlxuXHRyZWQxMDA6XCIjRkZDREQyXCJcblx0cmVkMjAwOlwiI0VGOUE5QVwiXG5cdHJlZDMwMDpcIiNFNTczNzNcIlxuXHRyZWQ0MDA6XCIjRUY1MzUwXCJcblx0cmVkNTAwOlwiI0Y0NDMzNlwiXG5cdHJlZDYwMDpcIiNFNTM5MzVcIlxuXHRyZWQ3MDA6XCIjRDMyRjJGXCJcblx0cmVkODAwOlwiI0M2MjgyOFwiXG5cdHJlZDkwMDpcIiNCNzFDMUNcIlxuXHRyZWRBMTAwOlwiI0ZGOEE4MFwiXG5cdHJlZEEyMDA6XCIjRkY1MjUyXCJcblx0cmVkQTQwMDpcIiNGRjE3NDRcIlxuXHRyZWRBNzAwOlwiI0Q1MDAwMFwiXG5cdHBpbms6XCIjRTkxRTYzXCJcblx0cGluazUwOlwiI0ZDRTRFQ1wiXG5cdHBpbmsxMDA6XCIjRjhCQkQwXCJcblx0cGluazIwMDpcIiNGNDhGQjFcIlxuXHRwaW5rMzAwOlwiI0YwNjI5MlwiXG5cdHBpbms0MDA6XCIjRUM0MDdBXCJcblx0cGluazUwMDpcIiNFOTFFNjNcIlxuXHRwaW5rNjAwOlwiI0Q4MUI2MFwiXG5cdHBpbms3MDA6XCIjQzIxODVCXCJcblx0cGluazgwMDpcIiNBRDE0NTdcIlxuXHRwaW5rOTAwOlwiIzg4MEU0RlwiXG5cdHBpbmtBMTAwOlwiI0ZGODBBQlwiXG5cdHBpbmtBMjAwOlwiI0ZGNDA4MVwiXG5cdHBpbmtBNDAwOlwiI0Y1MDA1N1wiXG5cdHBpbmtBNzAwOlwiI0M1MTE2MlwiXG5cdHB1cnBsZTpcIiM5QzI3QjBcIlxuXHRwdXJwbGU1MDpcIiNGM0U1RjVcIlxuXHRwdXJwbGUxMDA6XCIjRTFCRUU3XCJcblx0cHVycGxlMjAwOlwiI0NFOTNEOFwiXG5cdHB1cnBsZTMwMDpcIiNCQTY4QzhcIlxuXHRwdXJwbGU0MDA6XCIjQUI0N0JDXCJcblx0cHVycGxlNTAwOlwiIzlDMjdCMFwiXG5cdHB1cnBsZTYwMDpcIiM4RTI0QUFcIlxuXHRwdXJwbGU3MDA6XCIjN0IxRkEyXCJcblx0cHVycGxlODAwOlwiIzZBMUI5QVwiXG5cdHB1cnBsZTkwMDpcIiM0QTE0OENcIlxuXHRwdXJwbGVBMTAwOlwiI0VBODBGQ1wiXG5cdHB1cnBsZUEyMDA6XCIjRTA0MEZCXCJcblx0cHVycGxlQTQwMDpcIiNENTAwRjlcIlxuXHRwdXJwbGVBNzAwOlwiI0FBMDBGRlwiXG5cdGRlZXBQdXJwbGU6XCIjNjczQUI3XCJcblx0ZGVlcFB1cnBsZTUwOlwiI0VERTdGNlwiXG5cdGRlZXBQdXJwbGUxMDA6XCIjRDFDNEU5XCJcblx0ZGVlcFB1cnBsZTIwMDpcIiNCMzlEREJcIlxuXHRkZWVwUHVycGxlMzAwOlwiIzk1NzVDRFwiXG5cdGRlZXBQdXJwbGU0MDA6XCIjN0U1N0MyXCJcblx0ZGVlcFB1cnBsZTUwMDpcIiM2NzNBQjdcIlxuXHRkZWVwUHVycGxlNjAwOlwiIzVFMzVCMVwiXG5cdGRlZXBQdXJwbGU3MDA6XCIjNTEyREE4XCJcblx0ZGVlcFB1cnBsZTgwMDpcIiM0NTI3QTBcIlxuXHRkZWVwUHVycGxlOTAwOlwiIzMxMUI5MlwiXG5cdGRlZXBQdXJwbGVBMTAwOlwiI0IzODhGRlwiXG5cdGRlZXBQdXJwbGVBMjAwOlwiIzdDNERGRlwiXG5cdGRlZXBQdXJwbGVBNDAwOlwiIzY1MUZGRlwiXG5cdGRlZXBQdXJwbGVBNzAwOlwiIzYyMDBFQVwiXG5cdGluZGlnbzpcIiMzRjUxQjVcIlxuXHRpbmRpZ281MDpcIiNFOEVBRjZcIlxuXHRpbmRpZ28xMDA6XCIjQzVDQUU5XCJcblx0aW5kaWdvMjAwOlwiIzlGQThEQVwiXG5cdGluZGlnbzMwMDpcIiM3OTg2Q0JcIlxuXHRpbmRpZ280MDA6XCIjNUM2QkMwXCJcblx0aW5kaWdvNTAwOlwiIzNGNTFCNVwiXG5cdGluZGlnbzYwMDpcIiMzOTQ5QUJcIlxuXHRpbmRpZ283MDA6XCIjMzAzRjlGXCJcblx0aW5kaWdvODAwOlwiIzI4MzU5M1wiXG5cdGluZGlnbzkwMDpcIiMxQTIzN0VcIlxuXHRpbmRpZ29BMTAwOlwiIzhDOUVGRlwiXG5cdGluZGlnb0EyMDA6XCIjNTM2REZFXCJcblx0aW5kaWdvQTQwMDpcIiMzRDVBRkVcIlxuXHRpbmRpZ29BNzAwOlwiIzMwNEZGRVwiXG5cdGJsdWU6XCIjMjE5NkYzXCJcblx0Ymx1ZTUwOlwiI0UzRjJGRFwiXG5cdGJsdWUxMDA6XCIjQkJERUZCXCJcblx0Ymx1ZTIwMDpcIiM5MENBRjlcIlxuXHRibHVlMzAwOlwiIzY0QjVGNlwiXG5cdGJsdWU0MDA6XCIjNDJBNUY1XCJcblx0Ymx1ZTUwMDpcIiMyMTk2RjNcIlxuXHRibHVlNjAwOlwiIzFFODhFNVwiXG5cdGJsdWU3MDA6XCIjMTk3NkQyXCJcblx0Ymx1ZTgwMDpcIiMxNTY1QzBcIlxuXHRibHVlOTAwOlwiIzBENDdBMVwiXG5cdGJsdWVBMTAwOlwiIzgyQjFGRlwiXG5cdGJsdWVBMjAwOlwiIzQ0OEFGRlwiXG5cdGJsdWVBNDAwOlwiIzI5NzlGRlwiXG5cdGJsdWVBNzAwOlwiIzI5NjJGRlwiXG5cdGxpZ2h0Qmx1ZTpcIiMwM0E5RjRcIlxuXHRsaWdodEJsdWU1MDpcIiNFMUY1RkVcIlxuXHRsaWdodEJsdWUxMDA6XCIjQjNFNUZDXCJcblx0bGlnaHRCbHVlMjAwOlwiIzgxRDRGQVwiXG5cdGxpZ2h0Qmx1ZTMwMDpcIiM0RkMzRjdcIlxuXHRsaWdodEJsdWU0MDA6XCIjMjlCNkY2XCJcblx0bGlnaHRCbHVlNTAwOlwiIzAzQTlGNFwiXG5cdGxpZ2h0Qmx1ZTYwMDpcIiMwMzlCRTVcIlxuXHRsaWdodEJsdWU3MDA6XCIjMDI4OEQxXCJcblx0bGlnaHRCbHVlODAwOlwiIzAyNzdCRFwiXG5cdGxpZ2h0Qmx1ZTkwMDpcIiMwMTU3OUJcIlxuXHRsaWdodEJsdWVBMTAwOlwiIzgwRDhGRlwiXG5cdGxpZ2h0Qmx1ZUEyMDA6XCIjNDBDNEZGXCJcblx0bGlnaHRCbHVlQTQwMDpcIiMwMEIwRkZcIlxuXHRsaWdodEJsdWVBNzAwOlwiIzAwOTFFQVwiXG5cdGN5YW46XCIjMDBCQ0Q0XCJcblx0Y3lhbjUwOlwiI0UwRjdGQVwiXG5cdGN5YW4xMDA6XCIjQjJFQkYyXCJcblx0Y3lhbjIwMDpcIiM4MERFRUFcIlxuXHRjeWFuMzAwOlwiIzRERDBFMVwiXG5cdGN5YW40MDA6XCIjMjZDNkRBXCJcblx0Y3lhbjUwMDpcIiMwMEJDRDRcIlxuXHRjeWFuNjAwOlwiIzAwQUNDMVwiXG5cdGN5YW43MDA6XCIjMDA5N0E3XCJcblx0Y3lhbjgwMDpcIiMwMDgzOEZcIlxuXHRjeWFuOTAwOlwiIzAwNjA2NFwiXG5cdGN5YW5BMTAwOlwiIzg0RkZGRlwiXG5cdGN5YW5BMjAwOlwiIzE4RkZGRlwiXG5cdGN5YW5BNDAwOlwiIzAwRTVGRlwiXG5cdGN5YW5BNzAwOlwiIzAwQjhENFwiXG5cdHRlYWw6XCIjMDA5Njg4XCJcblx0dGVhbDUwOlwiI0UwRjJGMVwiXG5cdHRlYWwxMDA6XCIjQjJERkRCXCJcblx0dGVhbDIwMDpcIiM4MENCQzRcIlxuXHR0ZWFsMzAwOlwiIzREQjZBQ1wiXG5cdHRlYWw0MDA6XCIjMjZBNjlBXCJcblx0dGVhbDUwMDpcIiMwMDk2ODhcIlxuXHR0ZWFsNjAwOlwiIzAwODk3QlwiXG5cdHRlYWw3MDA6XCIjMDA3OTZCXCJcblx0dGVhbDgwMDpcIiMwMDY5NUNcIlxuXHR0ZWFsOTAwOlwiIzAwNEQ0MFwiXG5cdHRlYWxBMTAwOlwiI0E3RkZFQlwiXG5cdHRlYWxBMjAwOlwiIzY0RkZEQVwiXG5cdHRlYWxBNDAwOlwiIzFERTlCNlwiXG5cdHRlYWxBNzAwOlwiIzAwQkZBNVwiXG5cdGdyZWVuOlwiIzRDQUY1MFwiXG5cdGdyZWVuNTA6XCIjRThGNUU5XCJcblx0Z3JlZW4xMDA6XCIjQzhFNkM5XCJcblx0Z3JlZW4yMDA6XCIjQTVENkE3XCJcblx0Z3JlZW4zMDA6XCIjODFDNzg0XCJcblx0Z3JlZW40MDA6XCIjNjZCQjZBXCJcblx0Z3JlZW41MDA6XCIjNENBRjUwXCJcblx0Z3JlZW42MDA6XCIjNDNBMDQ3XCJcblx0Z3JlZW43MDA6XCIjMzg4RTNDXCJcblx0Z3JlZW44MDA6XCIjMkU3RDMyXCJcblx0Z3JlZW45MDA6XCIjMUI1RTIwXCJcblx0Z3JlZW5BMTAwOlwiI0I5RjZDQVwiXG5cdGdyZWVuQTIwMDpcIiM2OUYwQUVcIlxuXHRncmVlbkE0MDA6XCIjMDBFNjc2XCJcblx0Z3JlZW5BNzAwOlwiIzAwQzg1M1wiXG5cdGxpZ2h0R3JlZW46XCIjOEJDMzRBXCJcblx0bGlnaHRHcmVlbjUwOlwiI0YxRjhFOVwiXG5cdGxpZ2h0R3JlZW4xMDA6XCIjRENFREM4XCJcblx0bGlnaHRHcmVlbjIwMDpcIiNDNUUxQTVcIlxuXHRsaWdodEdyZWVuMzAwOlwiI0FFRDU4MVwiXG5cdGxpZ2h0R3JlZW40MDA6XCIjOUNDQzY1XCJcblx0bGlnaHRHcmVlbjUwMDpcIiM4QkMzNEFcIlxuXHRsaWdodEdyZWVuNjAwOlwiIzdDQjM0MlwiXG5cdGxpZ2h0R3JlZW43MDA6XCIjNjg5RjM4XCJcblx0bGlnaHRHcmVlbjgwMDpcIiM1NThCMkZcIlxuXHRsaWdodEdyZWVuOTAwOlwiIzMzNjkxRVwiXG5cdGxpZ2h0R3JlZW5BMTAwOlwiI0NDRkY5MFwiXG5cdGxpZ2h0R3JlZW5BMjAwOlwiI0IyRkY1OVwiXG5cdGxpZ2h0R3JlZW5BNDAwOlwiIzc2RkYwM1wiXG5cdGxpZ2h0R3JlZW5BNzAwOlwiIzY0REQxN1wiXG5cdGxpbWU6XCIjQ0REQzM5XCJcblx0bGltZTUwOlwiI0Y5RkJFN1wiXG5cdGxpbWUxMDA6XCIjRjBGNEMzXCJcblx0bGltZTIwMDpcIiNFNkVFOUNcIlxuXHRsaW1lMzAwOlwiI0RDRTc3NVwiXG5cdGxpbWU0MDA6XCIjRDRFMTU3XCJcblx0bGltZTUwMDpcIiNDRERDMzlcIlxuXHRsaW1lNjAwOlwiI0MwQ0EzM1wiXG5cdGxpbWU3MDA6XCIjQUZCNDJCXCJcblx0bGltZTgwMDpcIiM5RTlEMjRcIlxuXHRsaW1lOTAwOlwiIzgyNzcxN1wiXG5cdGxpbWVBMTAwOlwiI0Y0RkY4MVwiXG5cdGxpbWVBMjAwOlwiI0VFRkY0MVwiXG5cdGxpbWVBNDAwOlwiI0M2RkYwMFwiXG5cdGxpbWVBNzAwOlwiI0FFRUEwMFwiXG5cdHllbGxvdzpcIiNGRkVCM0JcIlxuXHR5ZWxsb3c1MDpcIiNGRkZERTdcIlxuXHR5ZWxsb3cxMDA6XCIjRkZGOUM0XCJcblx0eWVsbG93MjAwOlwiI0ZGRjU5RFwiXG5cdHllbGxvdzMwMDpcIiNGRkYxNzZcIlxuXHR5ZWxsb3c0MDA6XCIjRkZFRTU4XCJcblx0eWVsbG93NTAwOlwiI0ZGRUIzQlwiXG5cdHllbGxvdzYwMDpcIiNGREQ4MzVcIlxuXHR5ZWxsb3c3MDA6XCIjRkJDMDJEXCJcblx0eWVsbG93ODAwOlwiI0Y5QTgyNVwiXG5cdHllbGxvdzkwMDpcIiNGNTdGMTdcIlxuXHR5ZWxsb3dBMTAwOlwiI0ZGRkY4RFwiXG5cdHllbGxvd0EyMDA6XCIjRkZGRjAwXCJcblx0eWVsbG93QTQwMDpcIiNGRkVBMDBcIlxuXHR5ZWxsb3dBNzAwOlwiI0ZGRDYwMFwiXG5cdGFtYmVyOlwiI0ZGQzEwN1wiXG5cdGFtYmVyNTA6XCIjRkZGOEUxXCJcblx0YW1iZXIxMDA6XCIjRkZFQ0IzXCJcblx0YW1iZXIyMDA6XCIjRkZFMDgyXCJcblx0YW1iZXIzMDA6XCIjRkZENTRGXCJcblx0YW1iZXI0MDA6XCIjRkZDQTI4XCJcblx0YW1iZXI1MDA6XCIjRkZDMTA3XCJcblx0YW1iZXI2MDA6XCIjRkZCMzAwXCJcblx0YW1iZXI3MDA6XCIjRkZBMDAwXCJcblx0YW1iZXI4MDA6XCIjRkY4RjAwXCJcblx0YW1iZXI5MDA6XCIjRkY2RjAwXCJcblx0YW1iZXJBMTAwOlwiI0ZGRTU3RlwiXG5cdGFtYmVyQTIwMDpcIiNGRkQ3NDBcIlxuXHRhbWJlckE0MDA6XCIjRkZDNDAwXCJcblx0YW1iZXJBNzAwOlwiI0ZGQUIwMFwiXG5cdG9yYW5nZTpcIiNGRjk4MDBcIlxuXHRvcmFuZ2U1MDpcIiNGRkYzRTBcIlxuXHRvcmFuZ2UxMDA6XCIjRkZFMEIyXCJcblx0b3JhbmdlMjAwOlwiI0ZGQ0M4MFwiXG5cdG9yYW5nZTMwMDpcIiNGRkI3NERcIlxuXHRvcmFuZ2U0MDA6XCIjRkZBNzI2XCJcblx0b3JhbmdlNTAwOlwiI0ZGOTgwMFwiXG5cdG9yYW5nZTYwMDpcIiNGQjhDMDBcIlxuXHRvcmFuZ2U3MDA6XCIjRjU3QzAwXCJcblx0b3JhbmdlODAwOlwiI0VGNkMwMFwiXG5cdG9yYW5nZTkwMDpcIiNFNjUxMDBcIlxuXHRvcmFuZ2VBMTAwOlwiI0ZGRDE4MFwiXG5cdG9yYW5nZUEyMDA6XCIjRkZBQjQwXCJcblx0b3JhbmdlQTQwMDpcIiNGRjkxMDBcIlxuXHRvcmFuZ2VBNzAwOlwiI0ZGNkQwMFwiXG5cdGRlZXBPcmFuZ2U6XCIjRkY1NzIyXCJcblx0ZGVlcE9yYW5nZTUwOlwiI0ZCRTlFN1wiXG5cdGRlZXBPcmFuZ2UxMDA6XCIjRkZDQ0JDXCJcblx0ZGVlcE9yYW5nZTIwMDpcIiNGRkFCOTFcIlxuXHRkZWVwT3JhbmdlMzAwOlwiI0ZGOEE2NVwiXG5cdGRlZXBPcmFuZ2U0MDA6XCIjRkY3MDQzXCJcblx0ZGVlcE9yYW5nZTUwMDpcIiNGRjU3MjJcIlxuXHRkZWVwT3JhbmdlNjAwOlwiI0Y0NTExRVwiXG5cdGRlZXBPcmFuZ2U3MDA6XCIjRTY0QTE5XCJcblx0ZGVlcE9yYW5nZTgwMDpcIiNEODQzMTVcIlxuXHRkZWVwT3JhbmdlOTAwOlwiI0JGMzYwQ1wiXG5cdGRlZXBPcmFuZ2VBMTAwOlwiI0ZGOUU4MFwiXG5cdGRlZXBPcmFuZ2VBMjAwOlwiI0ZGNkU0MFwiXG5cdGRlZXBPcmFuZ2VBNDAwOlwiI0ZGM0QwMFwiXG5cdGRlZXBPcmFuZ2VBNzAwOlwiI0REMkMwMFwiXG5cdGJyb3duOlwiIzc5NTU0OFwiXG5cdGJyb3duNTA6XCIjRUZFQkU5XCJcblx0YnJvd24xMDA6XCIjRDdDQ0M4XCJcblx0YnJvd24yMDA6XCIjQkNBQUE0XCJcblx0YnJvd24zMDA6XCIjQTE4ODdGXCJcblx0YnJvd240MDA6XCIjOEQ2RTYzXCJcblx0YnJvd241MDA6XCIjNzk1NTQ4XCJcblx0YnJvd242MDA6XCIjNkQ0QzQxXCJcblx0YnJvd243MDA6XCIjNUQ0MDM3XCJcblx0YnJvd244MDA6XCIjNEUzNDJFXCJcblx0YnJvd245MDA6XCIjM0UyNzIzXCJcblx0Z3JleTpcIiM5RTlFOUVcIlxuXHRncmV5NTA6XCIjRkFGQUZBXCJcblx0Z3JleTEwMDpcIiNGNUY1RjVcIlxuXHRncmV5MjAwOlwiI0VFRUVFRVwiXG5cdGdyZXkzMDA6XCIjRTBFMEUwXCJcblx0Z3JleTQwMDpcIiNCREJEQkRcIlxuXHRncmV5NTAwOlwiIzlFOUU5RVwiXG5cdGdyZXk2MDA6XCIjNzU3NTc1XCJcblx0Z3JleTcwMDpcIiM2MTYxNjFcIlxuXHRncmV5ODAwOlwiIzQyNDI0MlwiXG5cdGdyZXk5MDA6XCIjMjEyMTIxXCJcblx0Ymx1ZUdyZXk6XCIjNjA3RDhCXCJcblx0Ymx1ZUdyZXk1MDpcIiNFQ0VGRjFcIlxuXHRibHVlR3JleTEwMDpcIiNDRkQ4RENcIlxuXHRibHVlR3JleTIwMDpcIiNCMEJFQzVcIlxuXHRibHVlR3JleTMwMDpcIiM5MEE0QUVcIlxuXHRibHVlR3JleTQwMDpcIiM3ODkwOUNcIlxuXHRibHVlR3JleTUwMDpcIiM2MDdEOEJcIlxuXHRibHVlR3JleTYwMDpcIiM1NDZFN0FcIlxuXHRibHVlR3JleTcwMDpcIiM0NTVBNjRcIlxuXHRibHVlR3JleTgwMDpcIiMzNzQ3NEZcIlxuXHRibHVlR3JleTkwMDpcIiMyNjMyMzhcIlxuXHRibGFjazpcIiMwMDAwMDBcIlxuXHR3aGl0ZTpcIiNGRkZGRkZcIlxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cblx0bmF2YmFyID0gbmV3IExheWVyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIlxuXG5cdG5hdmJhci50eXBlID0gXCJuYXZiYXJcIlxuXG5cdG5hdmJhci5jb25zdHJhaW50cyA9XG5cdFx0Ym90dG9tOjBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjQ4XG5cblx0c3ZnSG9tZSA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmhvbWUpXG5cdHN2Z0JhY2sgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5iYWNrKVxuXG5cdGhvbWVCdXR0b24gPSBuZXcgTGF5ZXJcblx0XHRzdXBlckxheWVyOm5hdmJhclxuXHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDIxKVxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwiaG9tZVwiXG5cdFx0Y2xpcDp0cnVlXG5cblx0aG9tZUJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0dG9wOjNcblx0XHRoZWlnaHQ6NDJcblx0XHR3aWR0aDo5NFxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0aG9tZUljb24gPSBuZXcgTGF5ZXJcblx0XHRzdXBlckxheWVyOmhvbWVCdXR0b25cblx0XHR3aWR0aDpzdmdIb21lLndpZHRoXG5cdFx0aGVpZ2h0OnN2Z0hvbWUuaGVpZ2h0XG5cdFx0aHRtbDpzdmdIb21lLnN2Z1xuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwiaWNvblwiXG5cblx0aG9tZUljb24uY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiY2VudGVyXCJcblxuXHRyZWNlbnRCdXR0b24gPSBuZXcgTGF5ZXJcblx0XHRzdXBlckxheWVyOm5hdmJhclxuXHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDIxKVxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwicmVjZW50XCJcblx0XHRjbGlwOnRydWVcblxuXHRyZWNlbnRCdXR0b24uY29uc3RyYWludHMgPVxuXHRcdHRvcDozXG5cdFx0aGVpZ2h0OjQyXG5cdFx0d2lkdGg6OTRcblx0XHRsZWFkaW5nOltob21lQnV0dG9uLCA2XVxuXG5cdHJlY2VudEljb24gPSBuZXcgTGF5ZXJcblx0XHRzdXBlckxheWVyOnJlY2VudEJ1dHRvblxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRib3JkZXJDb2xvcjpcIndoaXRlXCJcblx0XHRib3JkZXJXaWR0aDptLnV0aWxzLnB4KDIpXG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMilcblx0XHRuYW1lOlwiaWNvblwiXG5cblx0cmVjZW50SWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdHdpZHRoOjE2XG5cdFx0aGVpZ2h0OjE2XG5cblx0YmFja0J1dHRvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6bmF2YmFyXG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMjEpXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJiYWNrXCJcblx0XHRjbGlwOnRydWVcblxuXHRiYWNrQnV0dG9uLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6M1xuXHRcdGhlaWdodDo0MlxuXHRcdHdpZHRoOjk0XG5cdFx0dHJhaWxpbmc6W2hvbWVCdXR0b24sIDZdXG5cblxuXHRiYWNrSWNvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6YmFja0J1dHRvblxuXHRcdHdpZHRoOnN2Z0JhY2sud2lkdGhcblx0XHRoZWlnaHQ6c3ZnQmFjay5oZWlnaHRcblx0XHRodG1sOnN2Z0JhY2suc3ZnXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJpY29uXCJcblxuXHRiYWNrSWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDpbbmF2YmFyLCBob21lQnV0dG9uLCByZWNlbnRCdXR0b24sIGJhY2tCdXR0b24sIGhvbWVJY29uLCBiYWNrSWNvbiwgcmVjZW50SWNvbl1cblxuXHRtLnV0aWxzLmlua3lcblx0XHRsYXllcjpob21lQnV0dG9uXG5cdFx0bW92ZVRvVGFwOmZhbHNlXG5cdFx0Y29sb3I6IFwid2hpdGVcIlxuXHRcdHNjYWxlOiAyMFxuXHRcdGN1cnZlOiBcImJlemllci1jdXJ2ZSgxLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0b3BhY2l0eTogLjNcblx0bS51dGlscy5pbmt5XG5cdFx0XHRsYXllcjpiYWNrQnV0dG9uXG5cdFx0XHRtb3ZlVG9UYXA6ZmFsc2Vcblx0XHRcdGNvbG9yOiBcIndoaXRlXCJcblx0XHRcdHNjYWxlOiAyMFxuXHRcdFx0Y3VydmU6IFwiYmV6aWVyLWN1cnZlKDEsIDAuNCwgMC40LCAxLjApXCJcblx0XHRcdG9wYWNpdHk6IC4zXG5cdG0udXRpbHMuaW5reVxuXHRcdFx0bGF5ZXI6cmVjZW50QnV0dG9uXG5cdFx0XHRtb3ZlVG9UYXA6ZmFsc2Vcblx0XHRcdGNvbG9yOiBcIndoaXRlXCJcblx0XHRcdHNjYWxlOiAyMFxuXHRcdFx0Y3VydmU6IFwiYmV6aWVyLWN1cnZlKDEsIDAuNCwgMC40LCAxLjApXCJcblx0XHRcdG9wYWNpdHk6IC4zXG5cblx0YmFja0J1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0bS5yZW1vdmVGcm9tU3RhY2soKVxuXG5cdG5hdmJhci5iYWNrID0gYmFja0J1dHRvblxuXHRuYXZiYXIuYmFjay5iYWNrSWNvbiA9IGJhY2tJY29uXG5cdG5hdmJhci5ob21lID0gaG9tZUJ1dHRvblxuXHRuYXZiYXIuaG9tZS5pY29uID0gaG9tZUljb25cblx0bmF2YmFyLnJlY2VudCA9IHJlY2VudEJ1dHRvblxuXHRuYXZiYXIucmVjZW50Lmljb24gPSByZWNlbnRJY29uXG5cblx0VXRpbHMuaW50ZXJ2YWwgLjA1LCAtPlxuXHRcdG5hdmJhci5icmluZ1RvRnJvbnQoKVxuXG5cdG0ubGF5b3V0LnNldChuYXZiYXIpXG5cdHJldHVybiBuYXZiYXJcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGFuaW1hdGVkOmZhbHNlXG5cdHRleHQ6XCJTbmFja2JhciBUZXh0XCJcblx0YWN0aW9uOnVuZGVmaW5lZFxuXHRhY3Rpb25Db2xvcjpcImxpbWVBMjAwXCJcblx0ZHVyYXRpb246M1xufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRiYXIgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOlwic25hY2tiYXJcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRjbGlwOnRydWVcblxuXHRiYXIudHlwZSA9IFwic25hY2tiYXJcIlxuXHRiYXIuYmcgPSBuZXcgTGF5ZXJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjMzIzMjMyXCJcblx0XHRzdXBlckxheWVyOmJhclxuXHRcdG5hbWU6XCJiZ1wiXG5cblxuXHRuYXZiYXJFeGlzdHMgPSAwXG5cdGZhYkV4aXN0cyA9IHVuZGVmaW5lZFxuXG5cdGZvciBsIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsLnR5cGUgPT0gXCJuYXZiYXJcIlxuXHRcdFx0bmF2YmFyRXhpc3RzID0gbFxuXG5cdFx0aWYgbC50eXBlID09IFwiZmxvYXRpbmdcIlxuXHRcdFx0ZmFiRXhpc3RzID0gbFxuXG5cdFx0aWYgbC50eXBlID09IFwic25hY2tiYXJcIlxuXHRcdFx0bC5iZy5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KHk6YmFyLmhlaWdodClcblx0XHRcdFx0dGltZTouM1xuXHRcdFx0XHRjdXJ2ZTpcImJlemllci1jdXJ2ZSguMiwgMC40LCAwLjQsIDEuMClcIlxuXHRcdFx0XHRpZiBsLmZhYk1vdmVkXG5cdFx0XHRcdFx0bC5mYWJNb3ZlZC5oYWx0ZWQgPSB0cnVlXG5cdFx0XHRcdFx0bC5mYWJNb3ZlZC5jb25zdHJhaW50cy5ib3R0b20gPSBmYWJFeGlzdHMucHJldmlvdXNCb3R0b21cblx0XHRcdFx0XHRtLmxheW91dC5hbmltYXRlXG5cdFx0XHRcdFx0XHR0YXJnZXQ6ZmFiRXhpc3RzXG5cdFx0XHRcdFx0XHRjdXJ2ZTpcImJlemllci1jdXJ2ZSguMiwgMC40LCAwLjQsIDEuMClcIlxuXHRcdFx0XHRcdFx0dGltZTouM1xuXHRcdFx0XHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uLCAtPlxuXHRcdFx0XHRcdFx0ZmFiRXhpc3RzLmNvbnN0cmFpbnRzLmJvdHRvbSA9IGZhYkV4aXN0cy5wcmV2aW91c0JvdHRvbVxuXHRcdFx0XHRcdFx0bS5sYXlvdXQuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ6ZmFiRXhpc3RzXG5cdFx0XHRcdFx0XHRcdGN1cnZlOlwiYmV6aWVyLWN1cnZlKC4yLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0XHRcdFx0XHRcdHRpbWU6LjNcblxuXHRiYXIuYnJpbmdUb0Zyb250KClcblxuXHRiYXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRib3R0b206bmF2YmFyRXhpc3RzXG5cdFx0aGVpZ2h0OjQ4XG5cblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OltiYXJdXG5cblx0YmFyLmJnLnByb3BzID0ge3dpZHRoOmJhci53aWR0aCwgaGVpZ2h0OmJhci5oZWlnaHR9XG5cdGFjdGlvbldpZHRoID0gbS5weCgyNClcblxuXHRpZiBzZXR1cC5hY3Rpb25cblx0XHRiYXIuYWN0aW9uID0gbmV3IG0uQnV0dG9uXG5cdFx0XHR0eXBlOlwiZmxhdFwiXG5cdFx0XHRzdXBlckxheWVyOmJhci5iZ1xuXHRcdFx0dGV4dDpzZXR1cC5hY3Rpb25cblx0XHRcdGNvbnN0cmFpbnRzOnt0cmFpbGluZzoyNCwgYWxpZ246XCJ2ZXJ0aWNhbFwifVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwiIzMyMzJcIlxuXHRcdFx0Y29sb3I6c2V0dXAuYWN0aW9uQ29sb3Jcblx0XHRhY3Rpb25XaWR0aCA9IGJhci5hY3Rpb24ud2lkdGggKyBtLnB4KDQ4KVxuXG5cdGJhci50ZXh0ID0gbmV3IG0uVGV4dFxuXHRcdGZvbnRTaXplOjE0XG5cdFx0Y29sb3I6XCJ3aGl0ZVwiXG5cdFx0c3VwZXJMYXllcjpiYXIuYmdcblx0XHRjb25zdHJhaW50czp7bGVhZGluZzoyNCwgYWxpZ246XCJ2ZXJ0aWNhbFwifVxuXHRcdHRleHQ6c2V0dXAudGV4dFxuXHRcdG5hbWU6XCJ0ZXh0XCJcblx0XHRsaW5lSGVpZ2h0OjE4XG5cblx0aWYgbS5kZXZpY2Uud2lkdGggPCBhY3Rpb25XaWR0aCArIGJhci50ZXh0LndpZHRoICsgbS5weCgyNClcblx0XHRiYXIudGV4dC5jb25zdHJhaW50cy53aWR0aCA9IG0uZHAobS5kZXZpY2Uud2lkdGgpIC0gKG0uZHAoYWN0aW9uV2lkdGgpICsgMjQpXG5cdFx0bS51dGlscy51cGRhdGUoYmFyLnRleHQpXG5cdFx0bS5sYXlvdXQuc2V0KGJhci50ZXh0KVxuXHRcdGJhci5jb25zdHJhaW50cy5oZWlnaHQgPSBtLmRwKGJhci50ZXh0LmhlaWdodCkgKyA0OFxuXHRcdGJhci5iZy5oZWlnaHQgPSBiYXIudGV4dC5oZWlnaHQgKyBtLnB4KDQ4KVxuXG5cdFx0bS5sYXlvdXQuc2V0XG5cdFx0XHR0YXJnZXQ6W2JhciwgYmFyLnRleHRdXG5cblx0XHRpZiBzZXR1cC5hY3Rpb25cblx0XHRcdG0ubGF5b3V0LnNldChiYXIuYWN0aW9uKVxuXG5cdGJhckhlaWdodCA9IGJhci5iZy5oZWlnaHRcblxuXHRpZiBmYWJFeGlzdHNcblx0XHRiYXIuZmFiTW92ZWQgPSBmYWJFeGlzdHNcblx0XHRmYWJFeGlzdHMucHJldmlvdXNCb3R0b20gPSBmYWJFeGlzdHMuY29uc3RyYWludHMuYm90dG9tXG5cdFx0ZmFiRXhpc3RzLmNvbnN0cmFpbnRzLmJvdHRvbSA9IGZhYkV4aXN0cy5jb25zdHJhaW50cy5ib3R0b20gKyBtLmRwKGJhckhlaWdodClcblxuXHRpZiBzZXR1cC5hbmltYXRlZFxuXHRcdGJhci5iZy55ID0gYmFyLmJnLmhlaWdodFxuXHRcdGJhci50ZXh0Lm9wYWNpdHkgPSAwXG5cdFx0YmFyLmJnLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRcdGN1cnZlOlwiYmV6aWVyLWN1cnZlKC4yLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0YmFyLnRleHQuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0dGltZTouM1xuXHRcdGlmIHNldHVwLmFjdGlvblxuXHRcdFx0YmFyLmFjdGlvbi5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MSlcblx0XHRcdFx0dGltZTouM1xuXHRcdGlmIGZhYkV4aXN0c1xuXHRcdFx0bS5sYXlvdXQuYW5pbWF0ZVxuXHRcdFx0XHR0YXJnZXQ6ZmFiRXhpc3RzXG5cdFx0XHRcdGN1cnZlOlwiYmV6aWVyLWN1cnZlKC4yLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0XHRcdHRpbWU6LjNcblxuXG5cdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24sIC0+XG5cdFx0XHRiYXIuYmcuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOih5OmJhci5oZWlnaHQpXG5cdFx0XHRcdHRpbWU6LjNcblx0XHRcdFx0Y3VydmU6XCJiZXppZXItY3VydmUoLjIsIDAuNCwgMC40LCAxLjApXCJcblx0XHRcdGJhci50ZXh0LmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTowKVxuXHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRpZiBzZXR1cC5hY3Rpb25cblx0XHRcdFx0YmFyLmFjdGlvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTowKVxuXHRcdFx0XHRcdHRpbWU6LjNcblx0XHRcdGlmIGZhYkV4aXN0cyAmJiBmYWJFeGlzdHMuaGFsdGVkICE9IHRydWVcblx0XHRcdFx0ZmFiRXhpc3RzLmNvbnN0cmFpbnRzLmJvdHRvbSA9IGZhYkV4aXN0cy5wcmV2aW91c0JvdHRvbVxuXHRcdFx0XHRtLmxheW91dC5hbmltYXRlXG5cdFx0XHRcdFx0dGFyZ2V0OmZhYkV4aXN0c1xuXHRcdFx0XHRcdGN1cnZlOlwiYmV6aWVyLWN1cnZlKC4yLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0XHRcdFx0dGltZTouM1xuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uICsgLjMsIC0+XG5cdFx0XHRiYXIuZGVzdHJveSgpXG5cdHJldHVybiBiYXJcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuc3RhY2sgPSBzdGFjayA9IFtdXG5cblxuZXhwb3J0cy5hZGRUb1N0YWNrID0gKGxheWVyKSAtPlxuICBpZiBzdGFjay5pbmRleE9mKGxheWVyKSA9PSAtMVxuICAgIHN0YWNrLnB1c2ggbGF5ZXJcblxuZXhwb3J0cy5yZW1vdmVGcm9tU3RhY2sgPSAobGF5ZXIpIC0+XG4gIGlmIHN0YWNrLmxlbmd0aCA+IDBcbiAgICBsYXllclRvbGVhdmUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXVxuICAgIGlmIGxheWVyVG9sZWF2ZS5leGl0ICE9IHVuZGVmaW5lZFxuICAgICAgbGF5ZXJUb2xlYXZlLmV4aXQoKVxuICAgIGVsc2VcbiAgICAgIG92ZXJsYXkgPSBuZXcgTGF5ZXJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOm0uY29sb3IoXCJibGFja1wiKVxuICAgICAgICB3aWR0aDptLmRldmljZS53aWR0aFxuICAgICAgICBoZWlnaHQ6bS5kZXZpY2UuaGVpZ2h0XG4gICAgICBvdmVybGF5LnBsYWNlQmVoaW5kKGxheWVyVG9sZWF2ZSlcbiAgICAgIGxheWVyVG9sZWF2ZS5jb25zdHJhaW50cyA9XG4gICAgICAgIGxlYWRpbmc6bS5kcChtLmRldmljZS53aWR0aClcbiAgICAgIG0ubGF5b3V0LmFuaW1hdGVcbiAgICAgICAgdGFyZ2V0OmxheWVyVG9sZWF2ZVxuICAgICAgICB0aW1lOi4zXG4gICAgICBvdmVybGF5LmFuaW1hdGVcbiAgICAgICAgcHJvcGVydGllczoob3BhY2l0eTowKVxuICAgICAgICB0aW1lOi41XG4gICAgICAgIGRlbGF5Oi4yXG4gICAgICBVdGlscy5kZWxheSAuNiwgLT5cbiAgICAgICAgbGF5ZXJUb2xlYXZlLmRlc3Ryb3koKVxuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKVxuICAgIHN0YWNrLnBvcCgpXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRjYXJyaWVyOlwiXCJcblx0bmV0d29yazpcIkxURVwiXG5cdGJhdHRlcnk6MTAwXG5cdGNlbGx1bGFyOjJcblx0c3R5bGU6XCJsaWdodFwiXG5cdGNsb2NrMjQ6ZmFsc2Vcblx0dHlwZTpcInN0YXR1c0JhclwiXG5cdGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsLjEpXCJcblx0Y29sb3I6IFwiYmxhY2tcIlxuXHRvcGFjaXR5Oi42XG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRzdGF0dXNCYXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOnNldHVwLmJhY2tncm91bmRDb2xvciwgbmFtZTpcInN0YXR1c0Jhci5hbGxcIlxuXG5cdGlmIHNldHVwLnN0eWxlID09IFwiZGFya1wiXG5cdFx0aWYgc2V0dXAuYmFja2dyb3VuZENvbG9yID09IFwicmdiYSgwLDAsMCwuMSlcIlxuXHRcdFx0c3RhdHVzQmFyLmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJibGFja1wiKVxuXHRcdGlmIHNldHVwLmNvbG9yID09IFwiYmxhY2tcIlxuXHRcdFx0c2V0dXAuY29sb3IgPSBcIndoaXRlXCJcblx0XHRpZiBzZXR1cC5vcGFjaXR5ID09IC42XG5cdFx0XHRzZXR1cC5vcGFjaXR5ID0gMVxuXG5cdGlmIHNldHVwLnN0eWxlID09IFwibGlnaHRcIiAmJiBzZXR1cC5jb2xvciAhPSBcImJsYWNrXCJcblx0XHRzZXR1cC5vcGFjaXR5ID0gMVxuXG5cdHN0YXR1c0Jhci50eXBlID0gc2V0dXAudHlwZVxuXHRzdGF0dXNCYXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6MjRcblxuXHRzd2l0Y2ggbS5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDVcblx0XHRcdEBibHVldG9vdGggPSA1XG5cblx0XHR3aGVuIFwiZnVsbHNjcmVlblwiXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDVcblx0XHRcdEBibHVldG9vdGggPSAtIDEwXG5cdFx0ZWxzZVxuXHRcdFx0QHRvcENvbnN0cmFpbnQgPSAzXG5cdFx0XHRAYmx1ZXRvb3RoID0gM1xuXG5cblxuXHRAdGltZSA9IG0udXRpbHMuZ2V0VGltZSgpXG5cdHRpbWUgPSBuZXcgbS5UZXh0IHN0eWxlOlwic3RhdHVzQmFyVGltZVwiLCB0ZXh0Om0udXRpbHMudGltZUZvcm1hdHRlcihAdGltZSwgc2V0dXAuY2xvY2syNCksIGZvbnRTaXplOjE0LCBmb250V2VpZ2h0OjUwMCwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGNvbG9yOnNldHVwLmNvbG9yLCBuYW1lOlwidGltZVwiLCBvcGFjaXR5OnNldHVwLm9wYWNpdHlcblx0dGltZS5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmc6OFxuXHRcdGFsaWduOlwidmVydGljYWxcIlxuXHRtLnV0aWxzLnRpbWVEZWxlZ2F0ZSh0aW1lLCBzZXR1cC5jbG9jazI0KVxuXG5cblx0YmF0dGVyeUljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYXR0ZXJ5SWNvblwiXG5cdGlmIHNldHVwLmJhdHRlcnkgPiA3MFxuXHRcdGhpZ2hCYXR0ZXJ5ID0gbS51dGlscy5zdmcobS5hc3NldHMuYmF0dGVyeUhpZ2gpXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IGhpZ2hCYXR0ZXJ5LnN2Z1xuXHRcdGJhdHRlcnlJY29uLmhlaWdodCA9IGhpZ2hCYXR0ZXJ5LmhlaWdodFxuXHRcdGJhdHRlcnlJY29uLndpZHRoID0gaGlnaEJhdHRlcnkud2lkdGhcblx0XHRtLnV0aWxzLmNoYW5nZUZpbGwoYmF0dGVyeUljb24sIHNldHVwLmNvbG9yKVxuXHRcdGJhdHRlcnlJY29uLm9wYWNpdHkgPSBzZXR1cC5vcGFjaXR5XG5cblx0aWYgc2V0dXAuYmF0dGVyeSA8PSA3MCAmJiBzZXR1cC5iYXR0ZXJ5ID4gMjBcblx0XHRtaWRCYXR0ZXJ5ID0gbS51dGlscy5zdmcobS5hc3NldHMuYmF0dGVyeU1pZClcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gbWlkQmF0dGVyeS5zdmdcblx0XHRtLnV0aWxzLmNoYW5nZUZpbGwoYmF0dGVyeUljb24sIHNldHVwLmNvbG9yKVxuXG5cdGlmIHNldHVwLmJhdHRlcnkgPD0gMjBcblx0XHRsb3dCYXR0ZXJ5ID0gbS51dGlscy5zdmcobS5hc3NldHMuYmF0dGVyeUxvdylcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gbG93QmF0dGVyeS5zdmdcblx0XHRtLnV0aWxzLmNoYW5nZUZpbGwoYmF0dGVyeUljb24sIHNldHVwLmNvbG9yKVxuXG5cblx0YmF0dGVyeUljb24uY29uc3RyYWludHMgPVxuXHRcdHRyYWlsaW5nIDogW3RpbWUsIDddXG5cdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblxuXHRjZWxsdWxhckljb24gPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5jZWxsdWxhcilcblx0Y2VsbHVsYXIgPSBuZXcgTGF5ZXJcblx0XHR3aWR0aDpjZWxsdWxhckljb24ud2lkdGhcblx0XHRoZWlnaHQ6Y2VsbHVsYXJJY29uLmhlaWdodFxuXHRcdGh0bWw6Y2VsbHVsYXJJY29uLnN2Z1xuXHRcdHN1cGVyTGF5ZXI6c3RhdHVzQmFyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG9wYWNpdHk6IHNldHVwLm9wYWNpdHlcblx0XHRuYW1lOlwiY2VsbHVsYXJcIlxuXG5cdGNlbGx1bGFyLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZzogW2JhdHRlcnlJY29uLCA3XVxuXHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdG0udXRpbHMuY2hhbmdlRmlsbChjZWxsdWxhciwgc2V0dXAuY29sb3IpXG5cblx0d2lmaUljb24gPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy53aWZpLCBzZXR1cC5jb2xvcilcblxuXHR3aWZpID0gbmV3IExheWVyXG5cdFx0d2lkdGg6d2lmaUljb24ud2lkdGhcblx0XHRoZWlnaHQ6d2lmaUljb24uaGVpZ2h0XG5cdFx0c3VwZXJMYXllcjpzdGF0dXNCYXJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcIndpZmlcIlxuXHRcdGh0bWw6IHdpZmlJY29uLnN2Z1xuXHRcdG9wYWNpdHk6IHNldHVwLm9wYWNpdHlcblxuXHRtLnV0aWxzLmNoYW5nZUZpbGwod2lmaSwgc2V0dXAuY29sb3IpXG5cblx0d2lmaS5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmc6W2NlbGx1bGFyLCA0XVxuXHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0IyBFeHBvcnQgc3RhdHVzQmFyXG5cdHN0YXR1c0Jhci5iYXR0ZXJ5ID0ge31cblx0IyBzdGF0dXNCYXIuYmF0dGVyeS5wZXJjZW50ID0gYmF0dGVyeVBlcmNlbnRcblx0c3RhdHVzQmFyLmJhdHRlcnkuaWNvbiA9IGJhdHRlcnlJY29uXG5cdCMgc3RhdHVzQmFyLmJsdWV0b290aCA9IGJsdWV0b290aFxuXHRzdGF0dXNCYXIudGltZSA9IHRpbWVcblx0IyBzdGF0dXNCYXIud2lmaSA9IHdpZmlcblx0c3RhdHVzQmFyLmNlbGx1bGFyID0gY2VsbHVsYXJcblxuXHRtLmxheW91dC5zZXRcblx0XHR0YXJnZXQ6W3N0YXR1c0JhciwgdGltZSwgYmF0dGVyeUljb24sIGNlbGx1bGFyLCB3aWZpXVxuXHRyZXR1cm4gc3RhdHVzQmFyXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGNvbnN0cmFpbnRzOnt9XG5cdHRleHQ6IFwiTWF0ZXJpYWwgVGV4dCBMYXllclwiXG5cdHR5cGU6XCJ0ZXh0XCJcblx0eDowXG5cdHk6MFxuXHR3aWR0aDotMVxuXHRoZWlnaHQ6LTFcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0c3R5bGU6XCJkZWZhdWx0XCJcblx0bGluZXM6MVxuXHR0ZXh0QWxpZ246XCJsZWZ0XCJcblx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRjb2xvcjpcImJsYWNrXCJcblx0Zm9udFNpemU6IDE3XG5cdGZvbnRTdHlsZTpcInJlZ3VsYXJcIlxuXHRmb250RmFtaWx5OlwiUm9ib3RvXCJcblx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRsaW5lSGVpZ2h0OlwiYXV0b1wiXG5cdG5hbWU6XCJ0ZXh0IGxheWVyXCJcblx0b3BhY2l0eToxXG5cdHRleHRUcmFuc2Zvcm06XCJub25lXCJcblx0bGV0dGVyU3BhY2luZzowXG5cdG5hbWU6XCJ0ZXh0IGxheWVyXCJcbn1cblxuI3VybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUJsYWNrSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1Cb2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLU1lZGl1bUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG5cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcydcblxuc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwxMDAsMTAwaXRhbGljLDMwMCwzMDBpdGFsaWMsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDAsOTAwaXRhbGljKTtcXG4gQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7IFxcblwiKSlcblxuIyBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkBmb250LWZhY2Uge1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXCIgK1xuIyBcIlxcdHNyYzogbG9jYWwoJ+KYuicpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1UaGluSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cIiArXG4jIFwifVxcblwiICsgXCJcXHRmb250LXdlaWdodDogMTAwXCJcbiMgXCJcXHRmb250LWZhbWlseTogUm9ib3RvICFpbXBvcnRhbnQ7XFxuXCIgK1xuIyBcIn1cXG5cIikpXG5cbiMgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJAZm9udC1mYWNlIHtcXG5cIiArXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcblwiICtcbiMgXCJcXHRzcmM6IGxvY2FsKCfimLonKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcblwiICtcbiMgXCJ9XFxuXCIgKyBcIlxcdGZvbnQtd2VpZ2h0OiBsaWdodFwiXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xcblwiICtcbiMgXCJ9XFxuXCIpKVxuI1xuIyBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgpKVxuI1xuIyBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkBmb250LWZhY2Uge1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXCIgK1xuIyBcIlxcdHNyYzogbG9jYWwoJ+KYuicpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cIiArXG4jIFwifVxcblwiICsgXCJcXHRmb250LXdlaWdodDogXFxcIm5vcm1hbFxcXCI7XFxuXCIgK1xuIyBcIlxcdGZvbnQtZmFtaWx5OiBSb2JvdG8gIWltcG9ydGFudDtcXG5cIiArXG4jIFwifVxcblwiICsgXCJAZm9udC1mYWNlIHtcXG5cIiArXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcblwiICtcbiMgXCJcXHRzcmM6IGxvY2FsKCfimLonKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXCIgK1xuIyBcIn1cXG5cIiArIFwiXFx0Zm9udC13ZWlnaHQ6IFxcXCJ0aGluXFxcIjtcXG5cIiArXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xcblwiICtcbiMgXCJ9XFxuXCJcbiNcbiMgKSlcblxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSlcblxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRleGNlcHRpb25zID0gT2JqZWN0LmtleXMoc2V0dXApXG5cdHRleHRMYXllciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLm5hbWVcblx0dGV4dExheWVyLnR5cGUgPSBcInRleHRcIlxuXHR0ZXh0TGF5ZXIuaHRtbCA9IHNldHVwLnRleHRcblx0Zm9yIHByb3AgaW4gbS5saWIubGF5ZXJQcm9wc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwiY29sb3JcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IG0udXRpbHMuY29sb3Ioc2V0dXBbcHJvcF0pXG5cdFx0XHR0ZXh0TGF5ZXJbcHJvcF0gPSBzZXR1cFtwcm9wXVxuXHRmb3IgcHJvcCBpbiBtLmxpYi5sYXllclN0eWxlc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwibGluZUhlaWdodFwiICYmIHNldHVwW3Byb3BdID09IFwiYXV0b1wiXG5cdFx0XHRcdHRleHRMYXllci5zdHlsZS5saW5lSGVpZ2h0ID0gIHNldHVwLmZvbnRTaXplXG5cdFx0XHRpZiBwcm9wID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdHN3aXRjaCBzZXR1cFtwcm9wXVxuXHRcdFx0XHRcdHdoZW4gXCJ1bHRyYXRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMTAwXG5cdFx0XHRcdFx0d2hlbiBcInRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMjAwXG5cdFx0XHRcdFx0d2hlbiBcImxpZ2h0XCIgdGhlbiBzZXR1cFtwcm9wXSA9IDMwMFxuXHRcdFx0XHRcdHdoZW4gXCJyZWd1bGFyXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDQwMFxuXHRcdFx0XHRcdHdoZW4gXCJtZWRpdW1cIiB0aGVuIHNldHVwW3Byb3BdID0gNTAwXG5cdFx0XHRcdFx0d2hlbiBcInNlbWlib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDYwMFxuXHRcdFx0XHRcdHdoZW4gXCJib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDcwMFxuXHRcdFx0XHRcdHdoZW4gXCJibGFja1wiIHRoZW4gc2V0dXBbcHJvcF0gPSA4MDBcblx0XHRcdGlmIHByb3AgPT0gXCJmb250U2l6ZVwiIHx8IHByb3AgPT0gXCJsaW5lSGVpZ2h0XCIgfHwgcHJvcCA9PSBcImxldHRlclNwYWNpbmdcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IG0udXRpbHMucHgoc2V0dXBbcHJvcF0pICsgXCJweFwiXG5cdFx0XHR0ZXh0TGF5ZXIuc3R5bGVbcHJvcF0gPSBzZXR1cFtwcm9wXVxuXG5cdHRleHRGcmFtZSA9IG0udXRpbHMudGV4dEF1dG9TaXplKHRleHRMYXllcilcblx0dGV4dExheWVyLnByb3BzID0gKGhlaWdodDp0ZXh0RnJhbWUuaGVpZ2h0LCB3aWR0aDp0ZXh0RnJhbWUud2lkdGgpXG5cdHRleHRMYXllci5jb25zdHJhaW50cyA9IHNldHVwLmNvbnN0cmFpbnRzXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDp0ZXh0TGF5ZXJcblx0cmV0dXJuIHRleHRMYXllclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuIyMgQ29udmVydHMgcHggdG8gcHRcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvbS5kZXZpY2Uuc2NhbGVcblx0cHQgPSBNYXRoLnJvdW5kKHB0KVxuXHRyZXR1cm4gcHRcblxuIyMgQ29udmVydHMgcHQgdG8gcHhcbmV4cG9ydHMucHggPSAocHQpIC0+XG5cdHB4ID0gcHQgKiBtLmRldmljZS5zY2FsZVxuXHRweCA9IE1hdGgucm91bmQocHgpXG5cdHJldHVybiBweFxuXG4jIyBpT1MgQ29sb3Ig4oCTIFRoaXMgd2lsbCBzdG9yZSBhbGwgb2YgdGhlIGRlZmF1bHQgaU9TIGNvbG9ycyBpbnRlYWQgb2YgdGhlIGRlZmF1bHQgQ1NTIGNvbG9ycy4gKlRoaXMgaXMgb25seSB1cCBoZXJlIGJlY2F1c2UgSSByZWZlciB0byBpdCBpbiB0aGUgZGVmYXVsdHMuKlxuZXhwb3J0cy5jb2xvciA9IChjb2xvclN0cmluZykgLT5cblx0aWYgY29sb3JTdHJpbmdbMF0gPT0gXCIjXCJcblx0XHRyZXR1cm4gY29sb3JTdHJpbmdcblx0ZWxzZVxuXHRcdGNvbG9yID0gIG5ldyBDb2xvcihtLmxpYi5jb2xvcnNbY29sb3JTdHJpbmddKVxuXHRcdGlmIGNvbG9yU3RyaW5nID09IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0Y29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRyZXR1cm4gY29sb3JcblxuIyBTdXBwb3J0aW5nIEZ1bmN0aW9uc1xuIyBVdGlsc1xuXG4jIENsZWFucyBhIHN0cmluZyBvZiA8YnI+IGFuZCAmbmJzcDtcbmV4cG9ydHMuY2xlYW4gPSAoc3RyaW5nKSAtPlxuXHQjIyByZW1vdmUgd2hpdGUgc3BhY2Vcblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1smXW5ic3BbO10vZ2ksIFwiIFwiKS5yZXBsYWNlKC9bPF1icls+XS9naSwgXCJcIilcblx0cmV0dXJuIHN0cmluZ1xuXG4jIENvbnZlcnRzIHB4J3Mgb2YgYW4gU1ZHIHRvIHNjYWxhYmxlIHZhcmlhYmxlc1xuZXhwb3J0cy5zdmcgPSAoc3ZnKSAtPlxuXHQjIEZpbmQgU3RyaW5nXG5cdHN0YXJ0SW5kZXggPSBzdmcuc2VhcmNoKFwiPHN2ZyB3aWR0aD1cIilcblx0ZW5kSW5kZXggPSBzdmcuc2VhcmNoKFwiIHZpZXdCb3hcIilcblx0c3RyaW5nID0gc3ZnLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuXG5cdCNGaW5kIHdpZHRoXG5cdHdTdGFydEluZGV4ID0gc3RyaW5nLnNlYXJjaChcIj1cIikgKyAyXG5cdHdFbmRJbmRleCA9ICBzdHJpbmcuc2VhcmNoKFwicHhcIilcblx0d2lkdGggPSBzdHJpbmcuc2xpY2Uod1N0YXJ0SW5kZXgsIHdFbmRJbmRleClcblx0bmV3V2lkdGggPSBleHBvcnRzLnB4KHdpZHRoKVxuXG5cdCMgRmluZCBIZWlnaHRcblx0aGVpZ2h0U3RyaW5nID0gc3RyaW5nLnNsaWNlKHdFbmRJbmRleCArIDQsIHN0cmluZy5sZW5ndGgpXG5cdGhTdGFydEluZGV4ID0gaGVpZ2h0U3RyaW5nLnNlYXJjaChcIj1cIikrIDJcblx0aEVuZEluZGV4ID0gaGVpZ2h0U3RyaW5nLnNlYXJjaChcInB4XCIpXG5cdGhlaWdodCA9IGhlaWdodFN0cmluZy5zbGljZShoU3RhcnRJbmRleCwgaEVuZEluZGV4KVxuXHRuZXdIZWlnaHQgPSBleHBvcnRzLnB4KGhlaWdodClcblxuXHQjQ3JlYXRlIG5ldyBzdHJpbmdcblx0bmV3U3RyaW5nID0gc3RyaW5nLnJlcGxhY2Uod2lkdGgsIG5ld1dpZHRoKVxuXHRuZXdTdHJpbmcgPSBuZXdTdHJpbmcucmVwbGFjZShoZWlnaHQsIG5ld0hlaWdodClcblxuXHQjUmVwbGFjZSBzdHJpbmdzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5cdHJldHVybiB7XG5cdFx0c3ZnOnN2Z1xuXHRcdHdpZHRoOm5ld1dpZHRoXG5cdFx0aGVpZ2h0Om5ld0hlaWdodFxuXHR9XG5cbiMgQ2hhbmdlcyB0aGUgZmlsbCBvZiBhbiBTVkdcbmV4cG9ydHMuY2hhbmdlRmlsbCA9IChsYXllciwgY29sb3IpIC0+XG5cdGlmIHR5cGVvZiBjb2xvciAhPSBcIm9iamVjdFwiXG5cdFx0Y29sb3IgPSBleHBvcnRzLmNvbG9yKGNvbG9yKVxuXHRzdGFydEluZGV4ID0gbGF5ZXIuaHRtbC5zZWFyY2goXCJmaWxsPVxcXCIjXCIpXG5cdGZpbGxTdHJpbmcgPSBsYXllci5odG1sLnNsaWNlKHN0YXJ0SW5kZXgsIGxheWVyLmh0bWwubGVuZ3RoKVxuXHRlbmRJbmRleCA9IGZpbGxTdHJpbmcuc2VhcmNoKFwiXFxcIlwiKSArIDhcblx0c3RyaW5nID0gZmlsbFN0cmluZy5zbGljZSgwLCBlbmRJbmRleClcblx0bmV3U3RyaW5nID0gXCJmaWxsPVxcXCJcIiArIGNvbG9yXG5cdGxheWVyLmh0bWwgPSBsYXllci5odG1sLnJlcGxhY2Uoc3RyaW5nLCBuZXdTdHJpbmcpXG5cbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IChzdHJpbmcpIC0+XG5cdHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcblxuIyBSZXR1cm5zIHRoZSBjdXJyZW50IHRpbWVcbmV4cG9ydHMuZ2V0VGltZSA9IC0+XG5cdGRheXNPZlRoZVdlZWsgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXVxuXHRtb250aHNPZlRoZVllYXIgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXVxuXHRkYXRlT2JqID0gbmV3IERhdGUoKVxuXHRtb250aCA9IG1vbnRoc09mVGhlWWVhcltkYXRlT2JqLmdldE1vbnRoKCldXG5cdGRhdGUgPSBkYXRlT2JqLmdldERhdGUoKVxuXHRkYXkgPSBkYXlzT2ZUaGVXZWVrW2RhdGVPYmouZ2V0RGF5KCldXG5cdGhvdXJzID0gZGF0ZU9iai5nZXRIb3VycygpXG5cdG1pbnMgPSBkYXRlT2JqLmdldE1pbnV0ZXMoKVxuXHRzZWNzID0gZGF0ZU9iai5nZXRTZWNvbmRzKClcblx0cmV0dXJuIHtcblx0XHRtb250aDptb250aFxuXHRcdGRhdGU6ZGF0ZVxuXHRcdGRheTpkYXlcblx0XHRob3Vyczpob3Vyc1xuXHRcdG1pbnM6bWluc1xuXHRcdHNlY3M6c2Vjc1xuXHR9XG5cbmV4cG9ydHMuYmdCbHVyID0gKGxheWVyKSAtPlxuXHRsYXllci5zdHlsZVtcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCJdID0gXCJibHVyKCN7ZXhwb3J0cy5weCg1KX1weClcIlxuXHRyZXR1cm4gbGF5ZXJcblxuZXhwb3J0cy50ZXh0QXV0b1NpemUgPSAodGV4dExheWVyKSAtPlxuXHQjRGVmaW5lIFdpZHRoXG5cdGNvbnN0cmFpbnRzID0ge31cblx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodFxuXHRcdFx0Y29uc3RyYWludHMuaGVpZ2h0ID0gZXhwb3J0cy5weCh0ZXh0TGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0KVxuXHRcdGlmIHRleHRMYXllci5jb25zdHJhaW50cy53aWR0aFxuXHRcdFx0Y29uc3RyYWludHMud2lkdGggPSBleHBvcnRzLnB4KHRleHRMYXllci5jb25zdHJhaW50cy53aWR0aClcblxuXHRzdHlsZXMgPVxuXHRcdGZvbnRTaXplOiB0ZXh0TGF5ZXIuc3R5bGUuZm9udFNpemVcblx0XHRmb250RmFtaWx5OiB0ZXh0TGF5ZXIuc3R5bGUuZm9udEZhbWlseVxuXHRcdGZvbnRXZWlnaHQ6IHRleHRMYXllci5zdHlsZS5mb250V2VpZ2h0XG5cdFx0Zm9udFN0eWxlOiB0ZXh0TGF5ZXIuc3R5bGUuZm9udFN0eWxlXG5cdFx0bGluZUhlaWdodDogdGV4dExheWVyLnN0eWxlLmxpbmVIZWlnaHRcblx0XHRsZXR0ZXJTcGFjaW5nOiB0ZXh0TGF5ZXIuc3R5bGUubGV0dGVyU3BhY2luZ1xuXHRcdHRleHRUcmFuc2Zvcm06IHRleHRMYXllci5zdHlsZS50ZXh0VHJhbnNmb3JtXG5cdHRleHRGcmFtZSA9IFV0aWxzLnRleHRTaXplKHRleHRMYXllci5odG1sLCBzdHlsZXMsIGNvbnN0cmFpbnRzKVxuXHRyZXR1cm4ge1xuXHRcdHdpZHRoIDogdGV4dEZyYW1lLndpZHRoXG5cdFx0aGVpZ2h0OiB0ZXh0RnJhbWUuaGVpZ2h0XG5cdH1cblxuZXhwb3J0cy5nZXREZXZpY2UgPSAtPlxuXHQjIExvYWRzIHRoZSBpbml0aWFsIGZyYW1lXG5cdGRldmljZSA9IFwiXCJcblx0ZnJhbWUgPSB0cnVlXG5cdGlmIG0ubGliLnJlYWxEZXZpY2VzW2lubmVyV2lkdGhdICYmIG0ubGliLnJlYWxEZXZpY2VzW2lubmVyV2lkdGhdW2lubmVySGVpZ2h0XVxuXHRcdGRldmljZSA9IG0ubGliLnJlYWxEZXZpY2VzW2lubmVyV2lkdGhdW2lubmVySGVpZ2h0XVxuXHRcdGZyYW1lID0gZmFsc2Vcblx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdGlmIGZyYW1lXG5cdFx0ZGV2aWNlID1cblx0XHRcdG5hbWU6IEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZVxuXHRcdFx0d2lkdGggOiAgRnJhbWVyLkRldmljZVZpZXcuRGV2aWNlc1tGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVdLnNjcmVlbldpZHRoXG5cdFx0XHRoZWlnaHQ6ICBGcmFtZXIuRGV2aWNlVmlldy5EZXZpY2VzW0ZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZV0uc2NyZWVuSGVpZ2h0XG5cdFx0XHRzY2FsZTogbS5saWIuZnJhbWVyRnJhbWVzW0ZyYW1lci5EZXZpY2VWaWV3LkRldmljZXNbRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXS5zY3JlZW5XaWR0aF1cblxuXHRpZiBkZXZpY2Uuc2NhbGUgPT0gdW5kZWZpbmVkXG5cdFx0ZGV2aWNlLnNjYWxlID0gMlxuXHRpZiBkZXZpY2Uud2lkdGggPT0gdW5kZWZpbmVkXG5cdFx0ZGV2aWNlLndpZHRoID0gaW5uZXJXaWR0aFxuXHRpZiBkZXZpY2UuaGVpZ2h0ID09IHVuZGVmaW5lZFxuXHRcdGRldmljZS5oZWlnaHQgPSBpbm5lckhlaWdodFxuXG5cdHJldHVybiBkZXZpY2VcblxuXG4jIFNwZWNpYWwgQ2hhcmFjdGVyc1xuZXhwb3J0cy5zcGVjaWFsQ2hhciA9IChsYXllcikgLT5cblx0dGV4dCA9IGxheWVyXG5cdGlmIGxheWVyLnR5cGUgPT0gXCJidXR0b25cIlxuXHRcdHRleHQgPSBsYXllci5sYWJlbFxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1iXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Zm9udFdlaWdodDo2MDB9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItclwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1yIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwicmVkXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItcmJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItcmIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJibHVlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItbGJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItbGIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJsaWdodC1ibHVlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItZ1wiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1nIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwiZ3JlZW5cIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1vXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLW8gXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJvcmFuZ2VcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1wXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXAgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJvcmFuZ2VcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi15XCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXkgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJ5ZWxsb3dcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi0jXCIpICE9IC0xXG5cdFx0Y2hvc2VuQ29sb3IgPSB0ZXh0Lmh0bWwuc2xpY2UoMSwgOClcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnNsaWNlKDksIHRleHQuaHRtbC5sZW5ndGgpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6Y2hvc2VuQ29sb3J9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLSBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH1dKVxuXHRpZiBsYXllci5idXR0b25UeXBlID09IFwidGV4dFwiXG5cdFx0bGF5ZXIud2lkdGggPSB0ZXh0LndpZHRoXG5cdG0ubGF5b3V0LnNldCgpXG5cbmV4cG9ydHMudXBkYXRlID0gKGxheWVyLCBhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRpZiBsYXllci50eXBlID09IFwidGV4dFwiXG5cdFx0Zm9yIGNoYW5nZSBpbiBhcnJheVxuXHRcdFx0a2V5ID0gT2JqZWN0LmtleXMoY2hhbmdlKVswXVxuXHRcdFx0dmFsdWUgPSBjaGFuZ2Vba2V5XVxuXHRcdFx0aWYga2V5ID09IFwidGV4dFwiXG5cdFx0XHRcdGxheWVyLmh0bWwgPSB2YWx1ZVxuXHRcdFx0aWYga2V5ID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW2tleV0gPSB2YWx1ZVxuXHRcdFx0aWYga2V5ID09IFwiY29sb3JcIlxuXHRcdFx0XHRsYXllci5jb2xvciA9IGV4cG9ydHMuY29sb3IodmFsdWUpXG5cblx0XHR0ZXh0RnJhbWUgPSBleHBvcnRzLnRleHRBdXRvU2l6ZShsYXllcilcblx0XHRsYXllci53aWR0aCA9IHRleHRGcmFtZS53aWR0aFxuXHRcdGxheWVyLmhlaWdodCA9IHRleHRGcmFtZS5oZWlnaHRcblxuXG5cdG0ubGF5b3V0LnNldCgpXG5cbiMgRGVjaWRlcyBpZiBpdCBzaG91bGQgYmUgd2hpdGUvYmxhY2sgdGV4dFxuZXhwb3J0cy5hdXRvQ29sb3IgPSAoY29sb3JPYmplY3QpIC0+XG5cdHJnYiA9IGNvbG9yT2JqZWN0LnRvUmdiU3RyaW5nKClcblx0cmdiID0gcmdiLnN1YnN0cmluZyg0LCByZ2IubGVuZ3RoLTEpXG5cdHJnYiA9IHJnYi5yZXBsYWNlKC8gL2csICcnKVxuXHRyZ2IgPSByZ2IucmVwbGFjZSgvIC9nLCAnJylcblx0cmdiID0gcmdiLnNwbGl0KCcsJylcblx0cmVkID0gcmdiWzBdXG5cdGdyZWVuID0gcmdiWzFdXG5cdGJsdWUgPSByZ2JbMl1cblx0Y29sb3IgPSBcIlwiXG5cdGlmIChyZWQqMC4yOTkgKyBncmVlbiowLjU4NyArIGJsdWUqMC4xMTQpID4gMTg2XG5cdFx0Y29sb3IgPSBleHBvcnRzLmNvbG9yKFwiYmxhY2tcIilcblx0ZWxzZVxuXHRcdGNvbG9yID0gZXhwb3J0cy5jb2xvcihcIndoaXRlXCIpXG5cdHJldHVybiBjb2xvclxuXG5leHBvcnRzLnNhbWVQYXJlbnQgPSAobGF5ZXIxLCBsYXllcjIpIC0+XG5cdHBhcmVudE9uZSA9IGxheWVyMS5zdXBlckxheWVyXG5cdHBhcmVudFR3byA9IGxheWVyMi5zdXBlckxheWVyXG5cdGlmIHBhcmVudE9uZSA9PSBwYXJlbnRUd29cblx0XHRyZXR1cm4gdHJ1ZVxuXHRlbHNlXG5cdFx0cmV0dXJuIGZhbHNlXG5cblxuZXhwb3J0cy50aW1lRGVsZWdhdGUgPSAobGF5ZXIsIGNsb2NrVHlwZSkgLT5cblx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRVdGlscy5kZWxheSA2MCAtIEB0aW1lLnNlY3MsIC0+XG5cdFx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRcdGV4cG9ydHMudXBkYXRlKGxheWVyLCBbdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIGNsb2NrVHlwZSldKVxuXHRcdFV0aWxzLmludGVydmFsIDYwLCAtPlxuXHRcdFx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRcdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG5cbmV4cG9ydHMudGltZUZvcm1hdHRlciA9ICh0aW1lT2JqLCBjbG9ja1R5cGUpIC0+XG5cdGlmIGNsb2NrVHlwZSA9PSBmYWxzZVxuXHRcdGlmIHRpbWVPYmouaG91cnMgPiAxMlxuXHRcdFx0dGltZU9iai5ob3VycyA9IHRpbWVPYmouaG91cnMgLSAxMlxuXHRcdGlmIHRpbWVPYmouaG91cnMgPT0gMCB0aGVuIHRpbWVPYmouaG91cnMgPSAxMlxuXHRpZiB0aW1lT2JqLm1pbnMgPCAxMFxuXHRcdHRpbWVPYmoubWlucyA9IFwiMFwiICsgdGltZU9iai5taW5zXG5cdHJldHVybiB0aW1lT2JqLmhvdXJzICsgXCI6XCIgKyB0aW1lT2JqLm1pbnNcblxuZXhwb3J0cy5zZXR1cENvbXBvbmVudCA9IChhcnJheSwgZGVmYXVsdHMpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0b2JqID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHMucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdG9ialtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0b2JqW2ldID0gZGVmYXVsdHNbaV1cblx0cmV0dXJuIG9ialxuXG5cbmV4cG9ydHMuZW1vamlGb3JtYXR0ZXIgPSAoc3RyaW5nKSAtPlxuXHRcdHVuaWNvZGVGb3JtYXQgPSBcIlwiXG5cdFx0aWYgc3RyaW5nWzBdID09IFwiRVwiIHx8IHN0cmluZ1swXSA9PSBcIjNcIiB8fCBzdHJpbmdbMF0gPT0gXCIyXCIgfHwgc3RyaW5nWzBdID09IFwiQ1wiXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRlbHNlXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHR1bmljb2RlRm9ybWF0ID0gXCIlRjAlOUZcIlxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0ZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudCh1bmljb2RlRm9ybWF0KVxuXHRcdHJldHVybiBkZWNvZGVkXG5cbmV4cG9ydHMuYnVpbGRFbW9qaXNPYmplY3QgPSAoKSAtPlxuXHRlbW9qaXMgPSBbXVxuXHRmb3IgY29kZSwgaW5kZXggaW4gbS5hc3NldHMuZW1vamlDb2Rlc1xuXHRcdGVtb2ppID0gZXhwb3J0cy5lbW9qaUZvcm1hdHRlcihjb2RlKVxuXHRcdGVtb2ppcy5wdXNoIGVtb2ppXG5cbmV4cG9ydHMudG9ISE1NU1MgPSAoaW50KSAtPlxuICBzZWNfbnVtID0gcGFyc2VJbnQoaW50LCAxMClcbiAgaG91cnMgICA9IE1hdGguZmxvb3Ioc2VjX251bSAvIDM2MDApO1xuICBtaW51dGVzID0gTWF0aC5mbG9vcigoc2VjX251bSAtIChob3VycyAqIDM2MDApKSAvIDYwKTtcbiAgc2Vjb25kcyA9IHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSAtIChtaW51dGVzICogNjApO1xuXG4gIGlmIChob3VycyAgIDwgMTApIHRoZW4gaG91cnMgICA9IFwiMFwiK2hvdXJzXG4gIGlmIChtaW51dGVzIDwgMTApIHRoZW4gbWludXRlcyA9IFwiXCIrbWludXRlc1xuICBpZiAoc2Vjb25kcyA8IDEwKSB0aGVuIHNlY29uZHMgPSBcIjBcIitzZWNvbmRzXG4gIHRpbWVTdHJpbmcgPSBcIlwiXG4gIGlmIGhvdXJzICE9IFwiMDBcIlxuICAgIHRpbWVTdHJpbmcgPSBob3VycysnOicrbWludXRlcysnOicrc2Vjb25kc1xuICBlbHNlXG4gICAgdGltZVN0cmluZyA9IG1pbnV0ZXMrJzonK3NlY29uZHNcblxuICByZXR1cm4gdGltZVN0cmluZ1xuXG4jbGF5ZXIsIG1vdmVUb1RhcCwgY29sb3IsIHNjYWxlLCBjdXJ2ZVxuZXhwb3J0cy5pbmt5ID0gKHNldHVwKSAtPlxuXHRzdGFydFggPSBzZXR1cC5sYXllci53aWR0aC8yXG5cdHN0YXJ0WSA9IHNldHVwLmxheWVyLmhlaWdodC8yXG5cblx0aW5rQ29sb3IgPSBcIiMwQTBBMEFcIlxuXHRpbmtTdGFydFNjYWxlID0gLjFcblx0aW5rU2NhbGUgPSAzXG5cdGlua0N1cnZlID0gXCJiZXppZXItY3VydmUoLjIsIDAuNCwgMC40LCAxLjApXCJcblx0aW5rT3BhY2l0eSA9IDFcblx0bW92ZVRvVGFwID0gdHJ1ZVxuXG5cdGlmIHNldHVwLm1vdmVUb1RhcCAhPSB1bmRlZmluZWRcblx0XHRtb3ZlVG9UYXAgPSBzZXR1cC5tb3ZlVG9UYXBcblxuXHRpZiBzZXR1cC5jb2xvciAhPSB1bmRlZmluZWRcblx0XHRpbmtDb2xvciA9IG0uY29sb3Ioc2V0dXAuY29sb3IpXG5cblx0aWYgc2V0dXAuc2NhbGUgIT0gdW5kZWZpbmVkXG5cdFx0aW5rU2NhbGUgPSBzZXR1cC5zY2FsZVxuXG5cdGlmIHNldHVwLnN0YXJ0U2NhbGUgIT0gdW5kZWZpbmVkXG5cdFx0aW5rU3RhcnRTY2FsZSA9IHNldHVwLnN0YXJ0U2NhbGVcblxuXHRpZiBzZXR1cC5jdXJ2ZSAhPSB1bmRlZmluZWRcblx0XHRpbmtDdXJ2ZSA9IHNldHVwLmN1cnZlXG5cblx0aWYgc2V0dXAub3BhY2l0eSAhPSB1bmRlZmluZWRcblx0XHRpbmtPcGFjaXR5ID0gc2V0dXAub3BhY2l0eVxuXG5cdGlua3lFZmZlY3QgPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdGlmIG1vdmVUb1RhcCA9PSB0cnVlXG5cdFx0XHRzdGFydFggPSBldmVudC5vZmZzZXRYXG5cdFx0XHRzdGFydFkgPSBldmVudC5vZmZzZXRZXG5cblx0XHRcdGlmIFV0aWxzLmlzQ2hyb21lKCkgPT0gZmFsc2UgJiYgVXRpbHMuaXNUb3VjaCgpXG5cdFx0XHRcdHN0YXJ0WCA9IGV2ZW50LnRvdWNoQ2VudGVyLnggLSBsYXllci54XG5cdFx0XHRcdHN0YXJ0WSA9IGV2ZW50LnRvdWNoQ2VudGVyLnkgLSBsYXllci55XG5cblx0XHRjaXJjbGUgPSBuZXcgTGF5ZXJcblx0XHRcdGJhY2tncm91bmRDb2xvcjppbmtDb2xvclxuXHRcdFx0bWlkWDpzdGFydFhcblx0XHRcdG1pZFk6c3RhcnRZXG5cdFx0XHRzdXBlckxheWVyOmxheWVyXG5cdFx0XHRib3JkZXJSYWRpdXM6bS51dGlscy5weCg1MClcblx0XHRcdG9wYWNpdHk6IGlua09wYWNpdHlcblxuXHRcdGNpcmNsZS5zY2FsZSA9IGlua1N0YXJ0U2NhbGVcblx0XHRjaXJjbGUuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczooc2NhbGU6aW5rU2NhbGUsIG9wYWNpdHk6MClcblx0XHRcdGN1cnZlOmlua0N1cnZlXG5cdFx0XHR0aW1lOi41XG5cdFx0VXRpbHMuZGVsYXkgMSwgLT5cblx0XHRcdGNpcmNsZS5kZXN0cm95KClcblxuXHRpZiBVdGlscy5pc0Nocm9tZSgpICYmIFV0aWxzLmlzVG91Y2goKVxuXHRcdHNldHVwLmxheWVyLm9uIEV2ZW50cy5Eb3VibGVUYXAsIChldmVudCkgLT5cblx0XHRcdGlua3lFZmZlY3QoZXZlbnQsIEApXG5cdGlmIFV0aWxzLmlzQ2hyb21lKCkgPT0gZmFsc2UgJiYgVXRpbHMuaXNUb3VjaCgpXG5cdFx0c2V0dXAubGF5ZXIub24gRXZlbnRzLlRhcCwgKGV2ZW50KSAtPlxuXHRcdFx0aW5reUVmZmVjdChldmVudCwgQClcblx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRzZXR1cC5sYXllci5vbiBFdmVudHMuVG91Y2hFbmQsIChldmVudCkgLT5cblx0XHRcdGlua3lFZmZlY3QoZXZlbnQsIEApXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuICB2aWRlbzp1bmRlZmluZWRcbiAgc3VwZXJMYXllcjp1bmRlZmluZWRcbiAgaGVpZ2h0Om0ucHgoMjA1KVxuICB3aWR0aDptLnB4KDEwMClcbiAgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuICBhdXRvcGxheTp0cnVlXG4gIGNvbnN0cmFpbnRzOnt0b3A6MH1cbiAgbWF4OnRydWVcbiAgcHJvZ3Jlc3NDb2xvcjogXCJibHVlODAwXCJcbiAgbXV0ZTpmYWxzZVxuICBsb29wOmZhbHNlXG4gIGlkbGVMaW1pdDozXG4gIHNob3dQbGF5U3RvcDp0cnVlXG4gIGltYWdlOnVuZGVmaW5lZFxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG4gIHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcbiAgaWYgc2V0dXAubWF4XG4gICAgICByYXRpbyA9IDAuNTYyNVxuICAgICAgc2V0dXAud2lkdGggPSBtLmRldmljZS53aWR0aFxuICAgICAgc2V0dXAuaGVpZ2h0ID0gc2V0dXAud2lkdGggKiAwLjU2MjVcblxuICB2aWRlb0xheWVyID0gbmV3IFZpZGVvTGF5ZXJcbiAgICBzdXBlckxheWVyOnNldHVwLnN1cGVyTGF5ZXJcbiAgICB2aWRlbzpzZXR1cC52aWRlb1xuICAgIGhlaWdodDpzZXR1cC5oZWlnaHRcbiAgICB3aWR0aDpzZXR1cC53aWR0aFxuICAgIGJhY2tncm91bmRDb2xvcjpzZXR1cC5iYWNrZ3JvdW5kQ29sb3JcbiAgICBuYW1lOlwidmlkZW9cIlxuXG4gIGlmIHNldHVwLmltYWdlXG4gICAgdmlkZW9MYXllci5pbWFnZSA9IHNldHVwLmltYWdlXG5cbiAgdmlkZW9MYXllci5wbGF5ZXIuYXV0b3BsYXkgPSBzZXR1cC5hdXRvcGxheVxuICB2aWRlb0xheWVyLnBsYXllci5tdXRlZCA9IHNldHVwLm11dGVcbiAgdmlkZW9MYXllci5wbGF5ZXIubG9vcCA9IHNldHVwLmxvb3BcblxuICBpZiBzZXR1cC5jb25zdHJhaW50c1xuICAgIHZpZGVvTGF5ZXIuY29uc3RyYWludHMgPSBzZXR1cC5jb25zdHJhaW50c1xuICAgIG0ubGF5b3V0LnNldCh2aWRlb0xheWVyKVxuXG4gIHZpZGVvTGF5ZXIuY29udHJvbHMgPSBuZXcgTGF5ZXJcbiAgICBoZWlnaHQ6dmlkZW9MYXllci5oZWlnaHRcbiAgICB3aWR0aDp2aWRlb0xheWVyLndpZHRoXG4gICAgc3VwZXJMYXllcjp2aWRlb0xheWVyXG4gICAgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuICAgIG5hbWU6XCJjb250cm9sc1wiXG5cbiAgVUlzZXQgPSAtPlxuICAgIHZpZGVvTGF5ZXIuaXNGdWxsU2NyZWVuID0gZmFsc2VcbiAgICB2aWRlb0xheWVyLnBsYXlzdG9wID0gbmV3IExheWVyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6bS5jb2xvcihcImJsYWNrXCIpXG4gICAgICBzdXBlckxheWVyOnZpZGVvTGF5ZXIuY29udHJvbHNcbiAgICAgIGJvcmRlclJhZGl1czptLnB4KDUwKVxuICAgICAgaGVpZ2h0Om0ucHgoNTApXG4gICAgICB3aWR0aDptLnB4KDUwKVxuICAgICAgb3BhY2l0eTouNlxuICAgICAgbmFtZTpcInBsYXkvc3RvcFwiXG4gICAgaWYgc2V0dXAuc2hvd1BsYXlTdG9wID09IGZhbHNlXG4gICAgICB2aWRlb0xheWVyLnBsYXlzdG9wLm9wYWNpdHkgPSAwXG4gICAgdmlkZW9MYXllci5wbGF5c3RvcC5jZW50ZXIoKVxuXG4gICAgdmlkZW9MYXllci5wYXVzZSA9IG5ldyBtLkljb25cbiAgICBcdG5hbWU6XCJwYXVzZVwiXG4gICAgXHRjb2xvcjpcIndoaXRlXCJcblxuICAgIHZpZGVvTGF5ZXIucGxheSA9IG5ldyBtLkljb25cbiAgICBcdG5hbWU6XCJwbGF5X2Fycm93XCJcbiAgICBcdGNvbG9yOlwid2hpdGVcIlxuXG4gICAgdmlkZW9MYXllci5mdWxsc2NyZWVuID0gbmV3IG0uSWNvblxuICAgIFx0bmFtZTpcImZ1bGxzY3JlZW5cIlxuICAgIFx0Y29sb3I6XCJ3aGl0ZVwiXG5cbiAgICB2aWRlb0xheWVyLmZ1bGxzY3JlZW4uY29uc3RyYWludHMgPVxuICAgICAgYm90dG9tOjBcbiAgICAgIHRyYWlsaW5nOjEwXG5cbiAgICB2aWRlb0xheWVyLmZ1bGxzY3JlZW5FeGl0ID0gbmV3IG0uSWNvblxuICAgIFx0bmFtZTpcImZ1bGxzY3JlZW5fZXhpdFwiXG4gICAgXHRjb2xvcjpcIndoaXRlXCJcblxuICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbkV4aXQuY29uc3RyYWludHMgPVxuICAgICAgYm90dG9tOjBcbiAgICAgIHRyYWlsaW5nOjEwXG5cbiAgICBtLmxheW91dC5zZXQodmlkZW9MYXllci5mdWxsc2NyZWVuKVxuXG4gICAgdmlkZW9MYXllci5wbGF5LnZpc2libGUgPSBmYWxzZVxuICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbkV4aXQudmlzaWJsZSA9IGZhbHNlXG5cbiAgICB2aWRlb0xheWVyLmNvbnRyb2xzLmFkZFN1YkxheWVyKHZpZGVvTGF5ZXIucGF1c2UpXG4gICAgdmlkZW9MYXllci5jb250cm9scy5hZGRTdWJMYXllcih2aWRlb0xheWVyLnBsYXkpXG4gICAgdmlkZW9MYXllci5jb250cm9scy5hZGRTdWJMYXllcih2aWRlb0xheWVyLmZ1bGxzY3JlZW4pXG4gICAgdmlkZW9MYXllci5jb250cm9scy5hZGRTdWJMYXllcih2aWRlb0xheWVyLmZ1bGxzY3JlZW5FeGl0KVxuICAgIHZpZGVvTGF5ZXIucGF1c2UuY2VudGVyKClcbiAgICB2aWRlb0xheWVyLnBsYXkuY2VudGVyKClcblxuXG4gICAgdmlkZW9MYXllci5jdXJyZW50VGltZSA9IG5ldyBtLlRleHRcbiAgICAgIHRleHQ6bS51dGlscy50b0hITU1TUyh2aWRlb0xheWVyLnBsYXllci5jdXJyZW50VGltZSlcbiAgICAgIGNvbG9yOlwid2hpdGVcIlxuICAgICAgY29uc3RyYWludHM6e2JvdHRvbTo4LCBsZWFkaW5nOjE3fVxuICAgICAgc3VwZXJMYXllcjp2aWRlb0xheWVyLmNvbnRyb2xzXG4gICAgICBmb250U2l6ZToxNFxuICAgICAgbmFtZTpcImN1cnJlbnRUaW1lXCJcblxuICAgIHZpZGVvTGF5ZXIuZW5kVGltZSA9IG5ldyBtLlRleHRcbiAgICAgIHRleHQ6bS51dGlscy50b0hITU1TUyh2aWRlb0xheWVyLnBsYXllci5kdXJhdGlvbilcbiAgICAgIGNvbG9yOlwid2hpdGVcIlxuICAgICAgY29uc3RyYWludHM6e2JvdHRvbUVkZ2VzOnZpZGVvTGF5ZXIuY3VycmVudFRpbWUsIHRyYWlsaW5nOlt2aWRlb0xheWVyLmZ1bGxzY3JlZW4sIDEwXX1cbiAgICAgIHN1cGVyTGF5ZXI6dmlkZW9MYXllci5jb250cm9sc1xuICAgICAgZm9udFNpemU6MTRcbiAgICAgIG5hbWU6XCJlbmRUaW1lXCJcblxuICAgIHZpZGVvTGF5ZXIudGltZWJhciA9IG5ldyBMYXllclxuICAgICAgc3VwZXJMYXllcjp2aWRlb0xheWVyLmNvbnRyb2xzXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6bS5jb2xvcihcImdyZXkzMDBcIilcbiAgICAgIG5hbWU6XCJ0aW1lYmFyXCJcbiAgICAgIG9wYWNpdHk6LjdcblxuICAgIHZpZGVvTGF5ZXIudGltZWJhci5jb25zdHJhaW50cyA9XG4gICAgICBsZWFkaW5nOlt2aWRlb0xheWVyLmN1cnJlbnRUaW1lLCAyMF1cbiAgICAgIHRyYWlsaW5nOlt2aWRlb0xheWVyLmVuZFRpbWUsIDIwXVxuICAgICAgaGVpZ2h0OjNcbiAgICAgIHZlcnRpY2FsQ2VudGVyOnZpZGVvTGF5ZXIuY3VycmVudFRpbWVcbiAgICBtLmxheW91dC5zZXQodmlkZW9MYXllci50aW1lYmFyKVxuXG4gICAgdmlkZW9MYXllci5zZWVrZXIgPSBuZXcgTGF5ZXJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcbiAgICAgIHN1cGVyTGF5ZXI6dmlkZW9MYXllci5jb250cm9sc1xuICAgICAgbmFtZTpcInNlZWtlclwiXG5cbiAgICB2aWRlb0xheWVyLnNlZWtlci5jb25zdHJhaW50cyA9XG4gICAgICB3aWR0aDo1MFxuICAgICAgaGVpZ2h0OjUwXG4gICAgICB2ZXJ0aWNhbENlbnRlcjp2aWRlb0xheWVyLmN1cnJlbnRUaW1lXG4gICAgbS5sYXlvdXQuc2V0KHZpZGVvTGF5ZXIuc2Vla2VyKVxuXG4gICAgdmlkZW9MYXllci5zZWVrZXJEb3QgPSBuZXcgTGF5ZXJcbiAgICAgIHdpZHRoOm0ucHgoMTUpXG4gICAgICBoZWlnaHQ6bS5weCgxNSlcbiAgICAgIGJvcmRlclJhZGl1czptLnB4KDE1KVxuICAgICAgYmFja2dyb3VuZENvbG9yOm0uY29sb3Ioc2V0dXAucHJvZ3Jlc3NDb2xvcilcbiAgICAgIHN1cGVyTGF5ZXI6dmlkZW9MYXllci5zZWVrZXJcbiAgICAgIG5hbWU6XCJzZWVrZXJEb3RcIlxuXG4gICAgdmlkZW9MYXllci5zZWVrZXJEb3QuY2VudGVyKClcblxuICAgIHZpZGVvTGF5ZXIucHJvZ3Jlc3NCYXIgPSBuZXcgTGF5ZXJcbiAgICAgIGJhY2tncm91bmRDb2xvcjptLmNvbG9yKHNldHVwLnByb2dyZXNzQ29sb3IpXG4gICAgICB3aWR0aDowXG4gICAgICBzdXBlckxheWVyOnZpZGVvTGF5ZXIuY29udHJvbHNcbiAgICAgIG5hbWU6XCJwcm9ncmVzcyBiYXJcIlxuXG4gICAgdmlkZW9MYXllci5wcm9ncmVzc0Jhci5jb25zdHJhaW50cyA9XG4gICAgICBoZWlnaHQ6M1xuICAgICAgdmVydGljYWxDZW50ZXI6dmlkZW9MYXllci50aW1lYmFyXG5cbiAgICBtLmxheW91dC5zZXQodGFyZ2V0Olt2aWRlb0xheWVyLnNlZWtlciwgdmlkZW9MYXllci5wcm9ncmVzc0Jhcl0pXG5cbiAgICB2aWRlb0xheWVyLnNlZWtlck9mZnNldCA9ICh2aWRlb0xheWVyLnNlZWtlci53aWR0aC8yIC0gdmlkZW9MYXllci5zZWVrZXJEb3Qud2lkdGgvMilcbiAgICB2aWRlb0xheWVyLnNlZWtlci54ID0gdmlkZW9MYXllci50aW1lYmFyLnggLSB2aWRlb0xheWVyLnNlZWtlck9mZnNldFxuICAgIHZpZGVvTGF5ZXIucHJvZ3Jlc3NCYXIueCA9IHZpZGVvTGF5ZXIudGltZWJhci54XG5cbiAgICAjSGFuZGxlIElkZWxuZXNzXG4gICAgaWRsZVRpbWUgPSAwXG4gICAgVXRpbHMuaW50ZXJ2YWwgMSwgLT5cbiAgICAgIGlkbGVUaW1lKytcbiAgICAgIGlmIGlkbGVUaW1lID4gc2V0dXAuaWRsZUxpbWl0ICYmIHZpZGVvTGF5ZXIucGxheWVyLnBhdXNlZCA9PSBmYWxzZSAmJiB2aWRlb0xheWVyLnNlZWtlci53b3JraW5nICE9IHRydWVcbiAgICAgICAgdmlkZW9MYXllci5jb250cm9scy5hbmltYXRlXG4gICAgICAgICAgcHJvcGVydGllczoob3BhY2l0eTowKVxuICAgICAgICAgIHRpbWU6LjI1XG4gICAgICAgIHZpZGVvTGF5ZXIucGxheXN0b3AudmlzaWJsZSA9IGZhbHNlXG4gICAgICBlbHNlXG4gICAgICAgIHZpZGVvTGF5ZXIuY29udHJvbHMub3BhY2l0eSA9IDFcbiAgICAgICAgdmlkZW9MYXllci5wbGF5c3RvcC52aXNpYmxlID0gdHJ1ZVxuXG4gICAgdmlkZW9MYXllci5jb250cm9scy5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cbiAgICAgIGlmIGlkbGVUaW1lID4gc2V0dXAuaWRsZUxpbWl0XG4gICAgICAgIGlkbGVUaW1lID0gMFxuICAgICAgZWxzZVxuICAgICAgICBpZGxlVGltZSA9IDVcblxuICAgIHZpZGVvTGF5ZXIucGxheXN0b3Aub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuICAgICAgaWYgdmlkZW9MYXllci5wbGF5ZXIucGF1c2VkXG4gICAgICAgIHZpZGVvTGF5ZXIucGxheS52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgdmlkZW9MYXllci5wYXVzZS52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB2aWRlb0xheWVyLnBsYXllci5wbGF5KClcbiAgICAgIGVsc2VcbiAgICAgICAgdmlkZW9MYXllci5wbGF5LnZpc2libGUgPSB0cnVlXG4gICAgICAgIHZpZGVvTGF5ZXIucGF1c2UudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIHZpZGVvTGF5ZXIucGxheWVyLnBhdXNlKClcblxuICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG4gICAgICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbi52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgdmlkZW9MYXllci5mdWxsc2NyZWVuRXhpdC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB2aWRlb0xheWVyLmNhY2hlUHJvcHMgPSB2aWRlb0xheWVyLnByb3BzXG4gICAgICAgIHZpZGVvTGF5ZXIuY2FjaGVBbGlnbiA9IHZpZGVvTGF5ZXIuY29uc3RyYWludHMuYWxpZ25cblxuICAgICAgICBpZiB2aWRlb0xheWVyLm9uRnVsbFNjcmVlblxuICAgICAgICAgIHZpZGVvTGF5ZXIub25GdWxsU2NyZWVuKClcblxuICAgICAgICBpZGxlVGltZSA9IDBcbiAgICAgICAgdmlkZW9MYXllci5iYWNrZHJvcCA9IG5ldyBMYXllclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCJcbiAgICAgICAgICB3aWR0aDptLmRldmljZS53aWR0aFxuICAgICAgICAgIGhlaWdodDptLmRldmljZS5oZWlnaHQgLSBtLnB4KDQ4KVxuICAgICAgICB2aWRlb0xheWVyLmNvbnN0cmFpbnRzLmFsaWduID0gXCJjZW50ZXJcIlxuXG4gICAgICAgIHZpZGVvTGF5ZXIuYW5pbWF0ZVxuICAgICAgICAgIHByb3BlcnRpZXM6XG4gICAgICAgICAgICB3aWR0aDogbS5kZXZpY2Uud2lkdGhcbiAgICAgICAgICAgIGhlaWdodDogbS5kZXZpY2Uud2lkdGggKiAwLjU2MjVcbiAgICAgICAgICB0aW1lOi41XG4gICAgICAgIG0ubGF5b3V0LmFuaW1hdGVcbiAgICAgICAgICB0YXJnZXQ6dmlkZW9MYXllclxuICAgICAgICAgIHRpbWU6LjVcbiAgICAgICAgaWYgc2V0dXAuc3VwZXJMYXllclxuICAgICAgICAgIHZpZGVvTGF5ZXIuYmFja2Ryb3Auc3VwZXJMYXllciA9IHNldHVwLnN1cGVyTGF5ZXJcbiAgICAgICAgICB2aWRlb0xheWVyLmJhY2tkcm9wLnBsYWNlQmVoaW5kKHZpZGVvTGF5ZXIpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB2aWRlb0xheWVyLmJhY2tkcm9wLnBsYWNlQmVoaW5kKHZpZGVvTGF5ZXIpXG4gICAgICAgIG0uYWRkVG9TdGFjayh2aWRlb0xheWVyKVxuXG4gICAgdmlkZW9MYXllci5mdWxsc2NyZWVuRXhpdC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG4gICAgICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbi52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB2aWRlb0xheWVyLmZ1bGxzY3JlZW5FeGl0LnZpc2libGUgPSBmYWxzZVxuICAgICAgICBpZGxlVGltZSA9IDBcbiAgICAgICAgbS5yZW1vdmVGcm9tU3RhY2soKVxuXG5cblxuICAgIHZpZGVvTGF5ZXIuZXhpdCA9ICgpIC0+XG4gICAgICAgIHZpZGVvTGF5ZXIuYW5pbWF0ZVxuICAgICAgICAgIHByb3BlcnRpZXM6KHg6dmlkZW9MYXllci5jYWNoZVByb3BzLngsIHk6dmlkZW9MYXllci5jYWNoZVByb3BzLnksIHdpZHRoOnZpZGVvTGF5ZXIuY2FjaGVQcm9wcy53aWR0aCwgaGVpZ2h0OnZpZGVvTGF5ZXIuY2FjaGVQcm9wcy5oZWlnaHQpXG4gICAgICAgICAgdGltZTouNVxuXG4gICAgICAgIHZpZGVvTGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPSB2aWRlb0xheWVyLmNhY2hlQWxpZ25cblxuICAgICAgICB2aWRlb0xheWVyLmJhY2tkcm9wLmFuaW1hdGVcbiAgICAgICAgICBwcm9wZXJ0aWVzOihvcGFjaXR5OjApXG4gICAgICAgICAgdGltZTouNVxuICAgICAgICAgIGRlbGF5Oi4yXG4gICAgICAgIFV0aWxzLmRlbGF5IC43LCAtPlxuICAgICAgICAgIHZpZGVvTGF5ZXIuYmFja2Ryb3AuZGVzdHJveSgpXG5cbiAgICAgICAgdmlkZW9MYXllci5mdWxsc2NyZWVuLnZpc2libGUgPSB0cnVlXG4gICAgICAgIHZpZGVvTGF5ZXIuZnVsbHNjcmVlbkV4aXQudmlzaWJsZSA9IGZhbHNlXG5cbiAgICAgICAgaWYgdmlkZW9MYXllci5vbkZ1bGxTY3JlZW5FeGl0XG4gICAgICAgICAgdmlkZW9MYXllci5vbkZ1bGxTY3JlZW5FeGl0KClcblxuICAgICNTZWVrZXIgQ29udHJvbHNcbiAgICB2aWRlb0xheWVyLnNlZWtlci5kcmFnZ2FibGUuZW5hYmxlZCA9IHRydWVcbiAgICB2aWRlb0xheWVyLnNlZWtlci5kcmFnZ2FibGUuc3BlZWRZID0gMFxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLmRyYWdnYWJsZS5zcGVlZFggPSAxXG4gICAgdmlkZW9MYXllci5zZWVrZXIuZHJhZ2dhYmxlLm1vbWVudHVtID0gZmFsc2VcbiAgICB2aWRlb0xheWVyLnNlZWtlci5kcmFnZ2FibGUuYm91bmNlID0gZmFsc2VcblxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuICAgICAgdmlkZW9MYXllci5zZWVrZXIuc2NhbGUgPSAxLjJcbiAgICAgIHZpZGVvTGF5ZXIuc2Vla2VyLndvcmtpbmcgPSB0cnVlXG5cbiAgICB2aWRlb0xheWVyLnNlZWtlci5vbiBFdmVudHMuRHJhZ01vdmUsIC0+XG4gICAgICB2aWRlb0xheWVyLnNlZWtlci53b3JraW5nID0gdHJ1ZVxuICAgICAgaWYgdmlkZW9MYXllci5zZWVrZXIueCArIHZpZGVvTGF5ZXIuc2Vla2VyT2Zmc2V0IDwgdmlkZW9MYXllci50aW1lYmFyLnhcbiAgICAgICAgdmlkZW9MYXllci5zZWVrZXIueCA9IHZpZGVvTGF5ZXIudGltZWJhci54IC0gdmlkZW9MYXllci5zZWVrZXJPZmZzZXRcbiAgICAgIGlmIHZpZGVvTGF5ZXIuc2Vla2VyLm1heFggPiB2aWRlb0xheWVyLnRpbWViYXIubWF4WCArIHZpZGVvTGF5ZXIuc2Vla2VyT2Zmc2V0XG4gICAgICAgIHZpZGVvTGF5ZXIuc2Vla2VyLm1heFggPSB2aWRlb0xheWVyLnRpbWViYXIubWF4WCArIHZpZGVvTGF5ZXIuc2Vla2VyT2Zmc2V0XG4gICAgICBuZXdDVCA9IHZpZGVvTGF5ZXIucGxheWVyLmR1cmF0aW9uICogKCh2aWRlb0xheWVyLnNlZWtlci54ICsgdmlkZW9MYXllci5zZWVrZXJPZmZzZXQgLSB2aWRlb0xheWVyLnRpbWViYXIueCkvdmlkZW9MYXllci50aW1lYmFyLndpZHRoKVxuICAgICAgaWYgbmV3Q1QgPCAwXG4gICAgICAgIG5ld0NUID0gMFxuICAgICAgaWYgbmV3Q1QgPiB2aWRlb0xheWVyLnBsYXllci5kdXJhdGlvblxuICAgICAgICBuZXdDVCA9IHZpZGVvTGF5ZXIucGxheWVyLmR1cmF0aW9uXG4gICAgICBtLnV0aWxzLnVwZGF0ZSh2aWRlb0xheWVyLmN1cnJlbnRUaW1lLCBbe3RleHQ6bS51dGlscy50b0hITU1TUyhuZXdDVCl9XSlcblxuICAgIHZpZGVvTGF5ZXIuc2Vla2VyLm9uIEV2ZW50cy5EcmFnRW5kLCAtPlxuICAgICAgdmlkZW9MYXllci5zZWVrZXIuc2NhbGUgPSAxXG4gICAgICB2aWRlb0xheWVyLnNlZWtlci53b3JraW5nID0gZmFsc2VcbiAgICAgIGV0ID0gdmlkZW9MYXllci5wbGF5ZXIuZHVyYXRpb25cbiAgICAgIG5ld0NUID0gZXQgKiAoKHZpZGVvTGF5ZXIuc2Vla2VyLnggKyB2aWRlb0xheWVyLnNlZWtlck9mZnNldCAtIHZpZGVvTGF5ZXIudGltZWJhci54KS92aWRlb0xheWVyLnRpbWViYXIud2lkdGgpXG4gICAgICBpZiBuZXdDVCA8IDBcbiAgICAgICAgbmV3Q1QgPSAwXG4gICAgICBpZiBuZXdDVCA+IHZpZGVvTGF5ZXIucGxheWVyLmR1cmF0aW9uXG4gICAgICAgIG5ld0NUID0gdmlkZW9MYXllci5wbGF5ZXIuZHVyYXRpb25cbiAgICAgIG5ld0NUID0gTWF0aC5yb3VuZChuZXdDVClcbiAgICAgIHZpZGVvTGF5ZXIucGxheWVyLmN1cnJlbnRUaW1lID0gbmV3Q1RcblxuXG4gIFVJZGVsZWdhdGUgPSAtPlxuICAgIGN0ID0gdmlkZW9MYXllci5wbGF5ZXIuY3VycmVudFRpbWVcbiAgICBldCA9IHZpZGVvTGF5ZXIucGxheWVyLmR1cmF0aW9uXG4gICAgaWYgdmlkZW9MYXllci5zZWVrZXIud29ya2luZ1xuICAgICAgICAjIERvIG5vdGhpbmdcbiAgICBlbHNlXG4gICAgICBtLnV0aWxzLnVwZGF0ZSh2aWRlb0xheWVyLmN1cnJlbnRUaW1lLCBbe3RleHQ6bS51dGlscy50b0hITU1TUyh2aWRlb0xheWVyLnBsYXllci5jdXJyZW50VGltZSl9XSlcbiAgICAgIHZpZGVvTGF5ZXIuc2Vla2VyLnggPSB2aWRlb0xheWVyLnRpbWViYXIueCArICh2aWRlb0xheWVyLnRpbWViYXIud2lkdGggKiBjdC9ldCkgLSB2aWRlb0xheWVyLnNlZWtlck9mZnNldFxuICAgICAgdmlkZW9MYXllci5wcm9ncmVzc0Jhci53aWR0aCA9ICB2aWRlb0xheWVyLnNlZWtlci54ICsgdmlkZW9MYXllci5zZWVrZXJPZmZzZXQgLSB2aWRlb0xheWVyLnRpbWViYXIueFxuXG4gIHZpZGVvTGF5ZXIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRkYXRhXCIsIFVJc2V0KVxuICB2aWRlb0xheWVyLnBsYXllci5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCBVSWRlbGVnYXRlKVxuXG5cbiAgcmV0dXJuIHZpZGVvTGF5ZXJcbiIsIiNtYXRlcmlhbEtpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHRcblxuIyBJbXBvcnQgZnJhbWV3b3JrXG5leHBvcnRzLmxheW91dCA9IGxheW91dCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1sYXlvdXQnXG5leHBvcnRzLmxpYiA9IGxpYnJhcnkgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtbGlicmFyeSdcbmV4cG9ydHMudXRpbHMgPSB1dGlscyA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC11dGlscydcbmV4cG9ydHMuc3RhY2sgPSBzdGFjayA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1zdGFjaydcblxuIyBTZXR1cCByZXNvdXJjZXNcbmV4cG9ydHMuZGV2aWNlID0gdXRpbHMuZ2V0RGV2aWNlKClcbmV4cG9ydHMuYXNzZXRzID0gbGlicmFyeS5hc3NldHNcblxuIyMgU2hvcnRjdXRzXG5leHBvcnRzLmNvbG9yID0gKGNvbG9yU3RyaW5nKSAtPlxuICByZXR1cm4gZXhwb3J0cy51dGlscy5jb2xvcihjb2xvclN0cmluZylcblxuZXhwb3J0cy5kcCA9IChweCkgLT5cbiAgcmV0dXJuIGV4cG9ydHMudXRpbHMucHQocHgpXG5cbmV4cG9ydHMucHggPSAoZHApIC0+XG4gIHJldHVybiBleHBvcnRzLnV0aWxzLnB4KGRwKVxuXG5leHBvcnRzLnN0YWNrID0gc3RhY2suc3RhY2tcblxuZXhwb3J0cy5hZGRUb1N0YWNrID0gKGxheWVyKSAtPlxuICBzdGFjay5hZGRUb1N0YWNrKGxheWVyKVxuXG5leHBvcnRzLnJlbW92ZUZyb21TdGFjayA9IChsYXllcikgLT5cbiAgc3RhY2sucmVtb3ZlRnJvbVN0YWNrKGxheWVyKVxuXG5cbiMgSW1wb3J0IENvbXBvbmVudHNcbmFwcGJhciA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1hcHAtYmFyJ1xuYmFubmVyID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWJhbm5lcidcbmJ1dHRvbiA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1idXR0b24nXG5kaWFsb2cgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtZGlhbG9nJ1xuaWNvbiA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1pY29uJ1xubmF2ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LW5hdi1iYXInXG5zbmFja2JhciA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1zbmFjay1iYXInXG5zdGF0dXMgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtc3RhdHVzLWJhcidcbnRleHQgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtdGV4dCdcbnZpZGVvID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LXZpZGVvJ1xuXG4jIyBTZXR1cCBDb21wb25lbnRzXG5leHBvcnRzLkFwcEJhciA9IGFwcGJhci5jcmVhdGVcbmV4cG9ydHMuQmFubmVyID0gYmFubmVyLmNyZWF0ZVxuZXhwb3J0cy5CdXR0b24gPSBidXR0b24uY3JlYXRlXG5leHBvcnRzLkRpYWxvZyA9IGRpYWxvZy5jcmVhdGVcbmV4cG9ydHMuSWNvbiA9IGljb24uY3JlYXRlXG5leHBvcnRzLk5hdkJhciA9IG5hdi5jcmVhdGVcbmV4cG9ydHMuU25hY2tCYXIgPSBzbmFja2Jhci5jcmVhdGVcbmV4cG9ydHMuU3RhdHVzQmFyID0gc3RhdHVzLmNyZWF0ZVxuZXhwb3J0cy5UZXh0ID0gdGV4dC5jcmVhdGVcbmV4cG9ydHMuVmlkZW8gPSB2aWRlby5jcmVhdGVcbiJdfQ==
