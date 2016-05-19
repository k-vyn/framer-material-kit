require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"material-kit-alert":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  title: "Title",
  message: "Message",
  actions: ["OK", "Cancel"]
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var act, actions, alert, button, i, index, len, message, modal, overlay, ref, setup, title;
  setup = m.utils.setupComponent(array, exports.defaults);
  alert = new Layer({
    backgroundColor: "transparent",
    name: "alert"
  });
  alert.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  overlay = new Layer({
    backgroundColor: "#5E5E5E",
    superLayer: alert,
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
    superLayer: alert,
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
    target: [alert, overlay, modal, title, message]
  });
  modal.constraints["height"] = 20 + m.utils.pt(title.height) + 10 + m.utils.pt(message.height) + 24 + 44;
  m.layout.set({
    target: [overlay, modal]
  });
  alert.actions = {};
  actions = [];
  ref = setup.actions;
  for (index = i = 0, len = ref.length; i < len; index = ++i) {
    act = ref[index];
    if (index < 2) {
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
      alert.actions[setup.actions[index]] = button;
      actions.push(button);
      m.layout.set({
        target: button
      });
    }
  }
  alert.overlay = overlay;
  alert.modal = modal;
  alert.title = title;
  alert.message = message;
  return alert;
};


},{"material-kit":"material-kit"}],"material-kit-app-bar":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  title: "Title",
  leftAction: void 0,
  right: "Edit",
  blur: true,
  superLayer: void 0,
  type: "navBar",
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
  tabsBar: "yellow"
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var bar, barArea, handleTabStates, i, j, k, label, layer, len, len1, ref, ref1, setup, t, tab, tabsActiveBar, title;
  setup = m.utils.setupComponent(array, exports.defaults);
  bar = new Layer({
    name: "App Bar",
    backgroundColor: setup.backgroundColor,
    shadowColor: "rgba(0, 0, 0, .12)",
    shadowBlur: m.px(4)
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
    backgroundColor: "transparent"
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
    setup.titleColor = m.utils.autoColor(setup.backgroundColor).toHexString();
  }
  if (setup.actionColor === "black") {
    setup.actionColor = m.utils.autoColor(setup.backgroundColor).toHexString();
  }
  if (typeof setup.title === "string") {
    title = new m.Text({
      color: setup.titleColor,
      fontWeight: "semibold",
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
  if (setup.tabs && setup.tabs.length > 2) {
    handleTabStates = function(bar, layer) {
      var k, len1, results, t, tab, tabsArray;
      tabsArray = Object.keys(bar.tabs);
      results = [];
      for (k = 0, len1 = tabsArray.length; k < len1; k++) {
        t = tabsArray[k];
        tab = bar.tabs[t];
        if (tab === bar.activeTab) {
          tab.label.opacity = 1;
          results.push(bar.activeBar.animate({
            properties: {
              x: layer.x
            },
            time: .5,
            curve: "bezier-curve(.2, 0.4, 0.4, 1.0)"
          }));
        } else {
          results.push(tab.label.opacity = .7);
        }
      }
      return results;
    };
    tabsActiveBar = new Layer({
      height: m.px(2),
      width: m.device.width / 3,
      backgroundColor: "yellow",
      superLayer: bar
    });
    tabsActiveBar.constraints = {
      bottom: 0
    };
    bar.activeBar = tabsActiveBar;
    bar.tabs = {};
    if (setup.tabs.length === 3) {
      ref1 = setup.tabs;
      for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
        t = ref1[i];
        tab = new Layer({
          width: m.device.width / 3,
          height: m.px(48),
          x: (m.device.width / 3) * i,
          superLayer: bar,
          backgroundColor: "transparent",
          clip: true
        });
        tab.constraints = {
          bottom: 0
        };
        m.layout.set(tab);
        if (setup.tabsColor === void 0) {
          setup.tabsColor = m.utils.autoColor(setup.backgroundColor).toHexString();
        }
        label = new m.Text({
          superLayer: tab,
          constraints: {
            align: "center"
          },
          text: t,
          textTransform: 'Uppercase',
          color: setup.tabsColor
        });
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
  bar.activeTab = bar.tabs[setup.tabs[0]];
  bar.title = title;
  handleTabStates(bar, setup.tabs[0]);
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
          color: m.color(setup.color),
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
      button.constraints = setup.constraints;
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


},{"material-kit":"material-kit"}],"material-kit-field":[function(require,module,exports){
var listenToKeys, m;

m = require('material-kit');

exports.defaults = {
  field: {
    isEditing: false,
    cursor: {},
    borderRadius: 5,
    borderWidth: 0,
    borderColor: "transparent",
    color: "#090908",
    backgroundColor: "#FFF",
    returnText: "return",
    returnColor: "light-key",
    style: "light",
    type: "field",
    constraints: void 0,
    superLayer: void 0,
    width: 258,
    height: 30,
    fontSize: 15,
    fontWeight: "regular",
    placeholderText: "placeholderText",
    placeholderColor: "#808080",
    text: "",
    textConstraints: {
      align: "vertical",
      leading: 8
    },
    input: true
  },
  cursor: {
    color: "blue",
    height: 20,
    width: 1
  }
};

exports.defaults.field.props = Object.keys(exports.defaults.field);

exports.create = function(array) {
  var field, placeholder, setup, text;
  setup = m.utils.setupComponent(array, exports.defaults.field);
  field = new Layer({
    borderRadius: m.utils.px(setup.borderRadius),
    backgroundColor: setup.backgroundColor,
    width: m.utils.px(setup.width),
    height: m.utils.px(setup.height)
  });
  if (setup.constraints) {
    field.constraints = setup.constraints;
  }
  field.active = false;
  text = new m.Text({
    style: "fieldText",
    superLayer: field,
    text: setup.text,
    fontSize: setup.fontSize,
    fontWeight: setup.fontWeight,
    color: setup.color
  });
  if (setup.textConstraints) {
    text.constraints = setup.textConstraints;
  }
  field.text = text;
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(field);
  }
  text.on("change:html", function() {
    if (text.html === "") {
      field.cursor.constraints = {
        align: "vertical",
        leading: 8
      };
    } else {
      field.cursor.constraints = {
        align: "vertical",
        trailingEdges: text
      };
    }
    if (field.placeholder) {
      return field.placeholder.visible = false;
    }
  });
  if (setup.text === "" || setup.text === void 0) {
    placeholder = new m.Text({
      style: "fieldPlaceholder",
      superLayer: field,
      text: setup.placeholderText,
      fontSize: setup.fontSize,
      fontWeight: setup.fontWeight,
      color: setup.placeholderColor
    });
    if (setup.textConstraints) {
      placeholder.constraints = setup.textConstraints;
    }
    field.placeholder = placeholder;
  }
  field.on(Events.TouchEnd, function() {
    var clickZone, cursor, keyboard, keys;
    field.active = true;
    text.visible = true;
    clickZone = new Layer({
      name: "fieldActive",
      opacity: 0
    });
    if (setup.input) {
      keyboard = new m.Keyboard({
        animated: true,
        output: field,
        returnText: setup.returnText,
        returnColor: setup.returnColor
      });
      field.keyboard = keyboard;
      clickZone.constraints = {
        top: 0,
        bottom: keyboard.specs.height,
        leading: 0,
        trailing: 0
      };
    } else {
      clickZone.constraints = {
        top: 0,
        bottom: 0,
        leading: 0,
        trailing: 0
      };
    }
    clickZone.on(Events.TouchEnd, function(handler) {
      field.keyboard.animate({
        properties: {
          y: m.device.height
        },
        time: .4,
        curve: "ease-in-out"
      });
      return Utils.delay(.5, function() {
        field.keyboard.destroy();
        field.active = false;
        return clickZone.destroy();
      });
    });
    field.clickZone = clickZone;
    if (m.device.name === "ipad") {
      field.keyboard.keys.dismiss.on(Events.TouchEnd, function() {
        field.keyboard.animate({
          properties: {
            y: m.device.height
          },
          time: .4,
          curve: "ease-in-out"
        });
        return Utils.delay(.5, function() {
          field.keyboard.destroy();
          field.active = false;
          return clickZone.destroy();
        });
      });
    }
    keys = Object.keys(setup.cursor);
    if (keys.length < 1) {
      setup.cursor.constraints = {
        align: "vertical",
        leading: 8
      };
      setup.cursor.width = 2;
      setup.cursor.height = 20;
    }
    if (field.cursor === void 0) {
      listenToKeys(field, keyboard);
      cursor = new Layer({
        width: m.utils.px(setup.cursor.width),
        height: m.utils.px(setup.cursor.height),
        superLayer: field,
        name: "cursor",
        backgroundColor: m.utils.color("blue"),
        borderRadius: m.utils.px(1)
      });
      field.cursor = cursor;
      cursor.constraints = setup.cursor.constraints;
      Utils.interval(.5, function() {
        if (field.active === true) {
          if (field.cursor.opacity === 0) {
            return field.cursor.animate({
              properties: {
                opacity: 1
              },
              time: .3
            });
          } else {
            return field.cursor.animate({
              properties: {
                opacity: 0
              },
              time: .3
            });
          }
        } else {
          return field.cursor.opacity = 0;
        }
      });
    }
    return m.layout.set();
  });
  m.layout.set();
  return field;
};

listenToKeys = function(field, keyboard) {
  var allSelected, codes, isCommand, isShift, keypress;
  keypress = function(key) {
    var boxKey, originalColor;
    originalColor = key.backgroundColor;
    switch (key.name) {
      case "shift":
        key.icon.states.switchInstant("on");
        return key.backgroundColor = "white";
      case "delete":
        key.icon.states.switchInstant("on");
        key.backgroundColor = "white";
        return key.icon.states.switchInstant("on");
      case "space":
        return key.backgroundColor = m.utils.color("light-key");
      default:
        if (m.device.name !== "ipad") {
          keyboard.keyPopUp.visible = true;
          boxKey = key.name;
          if (isShift) {
            boxKey = boxKey.toUpperCase();
          }
          keyboard.keyPopUp.box.html = boxKey;
          keyboard.keyPopUp.maxY = key.maxY;
          return keyboard.keyPopUp.midX = key.midX;
        } else {
          return key.animate({
            properties: {
              backgroundColor: m.utils.color("light-key")
            },
            time: .2
          });
        }
    }
  };
  isCommand = false;
  allSelected = false;
  isShift = false;
  codes = {
    13: "<br>",
    32: "&nbsp;",
    33: "!",
    34: "\"",
    35: "#",
    36: "$",
    37: "%",
    38: "&",
    39: "\'",
    40: "(",
    41: ")",
    42: "*",
    43: "+",
    44: ",",
    45: "-",
    47: "/",
    46: ".",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    58: ":",
    59: ";",
    60: "<",
    61: "=",
    62: ">",
    63: "?",
    64: "@",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "[",
    92: "\\",
    93: "]",
    94: "^",
    95: "_",
    96: "`",
    97: "a",
    98: "b",
    99: "c",
    100: "d",
    101: "e",
    102: "f",
    103: "g",
    104: "h",
    105: "i",
    106: "j",
    107: "k",
    108: "l",
    109: "m",
    110: "n",
    111: "o",
    112: "p",
    113: "q",
    114: "r",
    115: "s",
    116: "t",
    117: "u",
    118: "v",
    119: "w",
    120: "x",
    121: "y",
    122: "z",
    123: "{",
    124: "|",
    125: "}",
    126: "~"
  };
  document.addEventListener('keydown', function(e) {
    var endLength, i, initialLength, k, len, newText, ref;
    if (field.active) {
      if (e.keyCode === 27) {
        e.preventDefault();
        keyboard.animate({
          properties: {
            y: m.device.height
          },
          time: .25,
          curve: "ease-in-out"
        });
        field.active = false;
        field.clickZone.destroy();
      }
      if (e.keyCode === 16) {
        isShift = true;
        if (keyboard) {
          keypress(keyboard.keys.shift);
          ref = keyboard.keysArray;
          for (i = 0, len = ref.length; i < len; i++) {
            k = ref[i];
            k.style["text-transform"] = "uppercase";
          }
        }
      }
      if (allSelected === true) {
        if (e.keyCode === 37 || e.keyCode === 39) {
          allSelected = false;
          field.text.backgroundColor = "transparent";
        }
      }
      if (e.keyCode === 91) {
        isCommand = true;
      }
      if (e.keyCode === 13) {
        e.preventDefault();
        keyboard.keys["return"].backgroundColor = "white";
      }
      if (e.keyCode === 8) {
        e.preventDefault();
        if (keyboard) {
          keypress(keyboard.keys["delete"]);
        }
        if (allSelected === true) {
          m.utils.update(field.text, [
            {
              text: ""
            }
          ]);
          field.text.backgroundColor = "transparent";
          allSelected = false;
        }
        initialLength = field.text.html.length;
        newText = field.text.html.slice(0, -1);
        m.utils.update(field.text, [
          {
            text: newText
          }
        ]);
        endLength = field.text.html.length;
        if (initialLength === endLength) {
          newText = field.text.html.slice(0, -6);
          m.utils.update(field.text, [
            {
              text: newText
            }
          ]);
        }
        if (field.text.html === "") {
          field.placeholder.visible = true;
        }
        return field.value = m.utils.clean(newText);
      }
    }
  });
  document.addEventListener('keyup', function(e) {
    var i, k, len, ref;
    if (field.active) {
      if (e.keyCode === 13 && keyboard) {
        keyboard.keys["return"].backgroundColor = m.utils.color("light-key");
      }
      if (e.keyCode === 32 && keyboard) {
        keyboard.keys.space.backgroundColor = "White";
      }
      if (e.keyCode === 8 && keyboard) {
        keyboard.keys["delete"].animate({
          properties: {
            backgroundColor: m.utils.color("light-key")
          },
          time: .1
        });
        keyboard.keys["delete"].icon.states["switch"]("off");
      }
      if (e.keyCode === 91) {
        isCommand = false;
      }
      if (e.keyCode === 16) {
        isShift = false;
        if (keyboard) {
          ref = keyboard.keysArray;
          for (i = 0, len = ref.length; i < len; i++) {
            k = ref[i];
            k.style["text-transform"] = "lowercase";
          }
          keyboard.keys.shift.animate({
            properties: {
              backgroundColor: m.utils.color("light-key")
            },
            time: .2
          });
          keyboard.keys.shift.icon.states.next();
        }
      }
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (keyboard && m.device.anme !== "ipad") {
          return keyboard.keyPopUp.visible = false;
        } else {
          k = keyboard.keys[codes[e.keyCode].toLowerCase()];
          return k.animate({
            properties: {
              backgroundColor: "white"
            },
            time: .2
          });
        }
      }
    }
  });
  return document.addEventListener('keypress', function(e) {
    var char, char2, key, newText;
    if (field.active) {
      char = codes[e.keyCode];
      if (keyboard) {
        key = keyboard.keys[char];
      }
      if (isCommand === true) {
        if (e.keyCode === 97) {
          field.text.backgroundColor = "rgba(0, 118, 255, .2)";
          allSelected = true;
        }
      }
      if (isCommand === false) {
        e.preventDefault();
        if (e.keyCode >= 65 && e.keyCode <= 90) {
          char2 = char.toLowerCase();
          if (keyboard) {
            key = keyboard.keys[char2];
            keypress(key);
          }
        }
        if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode === 32) {
          if (keyboard) {
            keypress(key);
          }
        }
        if (e.keyCode > 31) {
          newText = field.text.html + char;
          m.utils.update(field.text, [
            {
              text: newText
            }
          ]);
          return field.value = m.utils.clean(newText);
        }
      }
    }
  });
};


},{"material-kit":"material-kit"}],"material-kit-icon":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  name: "star",
  scale: m.device.scale,
  color: m.color("black"),
  superLayer: void 0,
  constraints: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var frame, iconLayer, setup, styles;
  setup = m.utils.setupComponent(array, exports.defaults);
  iconLayer = new Layer({
    html: "<i class='material-icons md-24'>" + setup.name + "</i>",
    color: setup.color,
    backgroundColor: "transparent",
    clip: true,
    name: "icon"
  });
  frame = m.utils.textAutoSize(iconLayer);
  iconLayer.html = ("<span style='-webkit-transform: scale(" + setup.scale + "); position: absolute;'>") + iconLayer.html;
  iconLayer.width = m.px(frame.width);
  iconLayer.height = m.px(frame.height);
  styles = {
    bottom: "10px",
    right: frame.width + "px",
    fontSize: m.px(frame.height) + "px"
  };
  switch (m.device.scale) {
    case 4:
      styles.fontSize = m.px(frame.height) / 1.5 + "px";
      styles.bottom = m.px(frame.height) + "px";
      styles.right = frame.width / 2.25 + "px";
      break;
    case 3:
      styles.fontSize = m.px(frame.height) / 1.2 + "px";
  }
  iconLayer.style = {
    "display": "inline-block",
    "font-size": styles.fontSize,
    "text-align": "center",
    "padding-right": styles.right,
    "padding-bottom": styles.bottom
  };
  if (setup.superLayer) {
    iconLayer.superLayer = setup.superLayer;
  }
  if (setup.constraints) {
    iconLayer.constraints = setup.constraints;
    m.layout.set({
      target: iconLayer
    });
  }
  return iconLayer;
};


},{"material-kit":"material-kit"}],"material-kit-keyboard":[function(require,module,exports){
var boardSpecsObject, m;

m = require("material-kit");

exports.defaults = {
  returnText: "return",
  returnColor: "light-key",
  animated: false,
  output: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

boardSpecsObject = {
  "iphone-5": {
    height: 215,
    key: {
      width: m.utils.px(26),
      height: m.utils.px(39)
    },
    expandedKey: m.utils.px(39),
    expandedSpacer: m.utils.px(12),
    padding: {
      row1: m.utils.px(3),
      row2: m.utils.px(19),
      row3: m.utils.px(54)
    },
    marginTop: {
      row1: m.utils.px(11),
      row2: m.utils.px(26),
      row3: m.utils.px(41),
      row4: m.utils.px(55)
    },
    shiftIcon: {
      x: m.utils.px(9),
      y: m.utils.px(2)
    },
    deleteIcon: {
      x: m.utils.px(7),
      y: m.utils.px(10)
    },
    emojiIcon: {
      x: m.utils.px(8),
      y: m.utils.px(9)
    },
    sideKey: m.utils.px(36.5),
    sideKeyRadius: m.utils.px(4),
    sideKeyBottom: m.utils.px(58),
    iPadDeleteOffset: 0,
    bottomRow: 8,
    returnKey: m.utils.px(74),
    spacer: m.utils.px(6),
    keyPopUp: {
      width: 49,
      height: 86,
      boxTop: 0
    },
    pathOffSet: {
      x: -7,
      y: -5
    }
  },
  "iphone-6s": {
    height: 216,
    key: {
      width: m.utils.px(31.5),
      height: m.utils.px(42)
    },
    expandedKey: m.utils.px(46.5),
    expandedSpacer: m.utils.px(14),
    padding: {
      row1: m.utils.px(3),
      row2: m.utils.px(22),
      row3: m.utils.px(59)
    },
    marginTop: {
      row1: m.utils.px(10),
      row2: m.utils.px(22),
      row3: m.utils.px(34),
      row4: m.utils.px(44)
    },
    shiftIcon: {
      x: m.utils.px(11),
      y: m.utils.px(2)
    },
    deleteIcon: {
      x: m.utils.px(10),
      y: m.utils.px(13)
    },
    emojiIcon: {
      x: m.utils.px(11),
      y: m.utils.px(11)
    },
    sideKey: m.utils.px(42),
    sideKeyRadius: m.utils.px(5),
    sideKeyBottom: m.utils.px(56),
    iPadDeleteOffset: 0,
    bottomRow: 6,
    returnKey: m.utils.px(87.5),
    spacer: m.utils.px(6),
    keyPopUp: {
      width: 58,
      height: 101,
      boxTop: 5
    },
    pathOffSet: {
      x: -7,
      y: -5
    }
  },
  "iphone-6s-plus": {
    height: 226,
    key: {
      width: m.utils.px(35),
      height: m.utils.px(45)
    },
    expandedKey: m.utils.px(50),
    expandedSpacer: m.utils.px(20),
    padding: {
      row1: m.utils.px(4),
      row2: m.utils.px(25),
      row3: m.utils.px(67)
    },
    marginTop: {
      row1: m.utils.px(8),
      row2: m.utils.px(19),
      row3: m.utils.px(30),
      row4: m.utils.px(41)
    },
    shiftIcon: {
      x: m.utils.px(13),
      y: m.utils.px(2)
    },
    deleteIcon: {
      x: m.utils.px(11),
      y: m.utils.px(14)
    },
    emojiIcon: {
      x: m.utils.px(13),
      y: m.utils.px(13)
    },
    sideKey: m.utils.px(45),
    sideKeyRadius: m.utils.px(5),
    sideKeyBottom: m.utils.px(56),
    iPadDeleteOffset: 0,
    bottomRow: 6,
    returnKey: m.utils.px(97),
    spacer: m.utils.px(6),
    keyPopUp: {
      width: 64,
      height: 112,
      boxTop: 8
    },
    pathOffSet: {
      x: -7,
      y: -5
    }
  },
  "ipad": {
    height: 268,
    key: {
      width: m.utils.px(56),
      height: m.utils.px(56)
    },
    padding: {
      row1: m.utils.px(6),
      row2: m.utils.px(35),
      row3: m.utils.px(74)
    },
    marginTop: {
      row1: m.utils.px(10),
      row2: m.utils.px(18),
      row3: m.utils.px(28),
      row4: m.utils.px(40)
    },
    shiftIcon: {
      x: m.utils.px(18),
      y: m.utils.px(2)
    },
    deleteIcon: {
      x: m.utils.px(18),
      y: m.utils.px(20)
    },
    emojiIcon: {
      x: m.utils.px(18),
      y: m.utils.px(18)
    },
    sideKey: m.utils.px(56),
    sideKey2: m.utils.px(76),
    sideKeyRadius: m.utils.px(5),
    sideKeyBottom: m.utils.px(56),
    iPadDeleteOffset: m.utils.px(28) + m.utils.px(56) * 2 - m.utils.px(10),
    bottomRow: 7,
    returnKey: m.utils.px(106),
    spacer: m.utils.px(12)
  }
};

exports.create = function(array) {
  var board, boardSpecs, box, deleteIcon, deleteKey, emojiIcon, emojiKey, extraSymbol, firstRowKeyWidth, i, index, key, keyPopUp, keyboardIcon, keyboardKey, keysArray, len, letter, lettersArray, numKey, numKey2, numsArray, path, returnKey, rowIndex, rowsMap, secondArray, secondRowKeyWidth, setup, shiftIcon, shiftIcon2, shiftKey, shiftKey2, spaceKey, storedTextColor, svgDeleteOff, svgDeleteOn, svgEmoji, svgKeyPopUp, svgShiftOff, svgShiftOn, thirdArray;
  setup = m.utils.setupComponent(array, exports.defaults);
  boardSpecs = boardSpecsObject[m.device.name];
  svgShiftOff = m.utils.svg(m.assets.shift.off);
  svgShiftOn = m.utils.svg(m.assets.shift.on);
  svgDeleteOff = m.utils.svg(m.assets["delete"].off);
  svgDeleteOn = m.utils.svg(m.assets["delete"].on);
  svgEmoji = m.utils.svg(m.assets.emoji);
  svgKeyPopUp = m.utils.svg(m.assets.keyPopUp[m.device.name]);
  board = new Layer({
    backgroundColor: "#D1D5DA",
    name: "keyboard"
  });
  board.constraints = {
    height: boardSpecs.height,
    trailing: 0,
    leading: 0
  };
  board.specs = boardSpecs;
  m.layout.set(board);
  if (setup.animated) {
    board.y = m.device.height;
    board.animate({
      properties: {
        maxY: m.device.height
      },
      time: .25,
      curve: "ease-in-out"
    });
  } else {
    board.maxY = m.device.height;
  }
  lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  secondArray = [];
  thirdArray = [];
  switch (m.device.name) {
    case "ipad":
      secondArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "undo", "hide", ".", ',', "?", "!", "'", "\""];
      thirdArray = ["\[", "\]", "\{", "\}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "redo", "hide", ".", ',', "?", "!", "'", "\""];
      break;
    default:
      secondArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "\"", ".", ',', "?", "!", "'"];
      thirdArray = ["\[", "\]", "\{", "\}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•", ".", ',', "?", "!", "'", "\""];
  }
  if (m.device.name === "ipad") {
    lettersArray.push(",");
    lettersArray.push(".");
  }
  numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  keysArray = [];
  keyPopUp = new Layer({
    width: m.utils.px(boardSpecs.keyPopUp.width),
    height: m.utils.px(boardSpecs.keyPopUp.height),
    x: this.x - 16 * m.device.scale,
    backgroundColor: "transparent",
    superLayer: board,
    name: "key pop up"
  });
  box = new m.Text({
    text: "q",
    superLayer: keyPopUp,
    constraints: {
      top: boardSpecs.keyPopUp.boxTop,
      align: "horizontal"
    },
    fontSize: 38,
    fontWeight: 300,
    textAlign: "center"
  });
  this.color = "white";
  path = new Layer({
    superLayer: keyPopUp,
    backgroundColor: "transparent",
    name: "key path",
    x: boardSpecs.pathOffSet.x,
    y: boardSpecs.pathOffSet.y,
    width: m.utils.px(boardSpecs.keyPopUp.width),
    height: m.utils.px(boardSpecs.keyPopUp.height)
  });
  path.html = svgKeyPopUp.svg;
  board.keyPopUp = keyPopUp;
  board.keyPopUp.box = box;
  rowsMap = [
    {
      "padding": boardSpecs.padding.row1,
      "startIndex": 0,
      "endIndex": 9,
      "marginTop": boardSpecs.marginTop.row1
    }, {
      "padding": boardSpecs.padding.row2,
      "startIndex": 10,
      "endIndex": 18,
      "marginTop": boardSpecs.marginTop.row2
    }, {
      "padding": boardSpecs.padding.row3,
      "startIndex": 19,
      "endIndex": 25,
      "marginTop": boardSpecs.marginTop.row3
    }
  ];
  firstRowKeyWidth = 0;
  secondRowKeyWidth = 0;
  board.keys = {};
  for (i = 0, len = lettersArray.length; i < len; i++) {
    letter = lettersArray[i];
    index = lettersArray.indexOf(letter);
    key = new Layer({
      name: letter,
      superLayer: board,
      borderRadius: 5 * m.device.scale,
      backgroundColor: "white",
      color: "black",
      shadowY: m.utils.px(1),
      shadowColor: "#929498",
      width: boardSpecs.key.width,
      height: boardSpecs.key.height
    });
    board.keys[letter] = key;
    keyPopUp.bringToFront();
    box.bringToFront();
    if (m.device.width === 640) {
      key.constraints = {
        width: 26,
        height: 39
      };
    }
    keyPopUp.visible = false;
    m.layout.set();
    key.style = {
      "font-size": 25 * m.device.scale + "px",
      "font-weight": 300,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': key.height - m.utils.px(2) + "px"
    };
    if (letter === "," || letter === ".") {
      extraSymbol = new Layer({
        superLayer: key,
        width: m.utils.px(30),
        height: m.utils.px(30),
        backgroundColor: "transparent",
        y: m.utils.px(15),
        color: m.utils.color("black"),
        name: "!/?"
      });
      extraSymbol.centerX();
      extraSymbol.style = {
        "font-size": m.utils.px(24) + "px",
        "font-weight": 300,
        "font-family": '-apple-system, Helvetica, Arial, sans-serif',
        'text-align': 'center',
        'line-height': "20px"
      };
      switch (letter) {
        case ",":
          extraSymbol.html = "!";
          break;
        case ".":
          extraSymbol.html = "?";
      }
      key.style["line-height"] = key.height + m.utils.px(10) + "px";
    }
    key.html = letter;
    if (index <= rowsMap[0].endIndex) {
      rowIndex = index - rowsMap[0].startIndex;
      key.x = rowsMap[0].padding + (rowIndex * boardSpecs.spacer) + firstRowKeyWidth;
      key.y = rowsMap[0].marginTop;
      if (m.device.name === "ipad") {
        if (index % 2 !== 0) {
          key.width = key.width + m.utils.px(2);
        } else {
          key.width = key.width + m.utils.px(1);
        }
      }
      firstRowKeyWidth = firstRowKeyWidth + key.width;
    }
    if (index > rowsMap[0].endIndex && index <= rowsMap[1].endIndex) {
      rowIndex = index - rowsMap[1].startIndex;
      key.x = rowsMap[1].padding + (rowIndex * boardSpecs.spacer) + secondRowKeyWidth;
      key.y = rowsMap[1].marginTop + key.height;
      key.width = key.width + m.utils.px(1);
      secondRowKeyWidth = secondRowKeyWidth + key.width;
    }
    if (index > rowsMap[1].endIndex) {
      rowIndex = index - rowsMap[2].startIndex;
      key.x = rowsMap[2].padding + (rowIndex * boardSpecs.spacer) + (rowIndex * key.width);
      key.y = rowsMap[2].marginTop + key.height * 2;
    }
    keysArray.push(key);
    if (m.device.name !== "ipad" && m.device.name !== "ipad-pro") {
      key.on(Events.TouchStart, function() {
        keyPopUp.visible = true;
        box.html = this.name;
        keyPopUp.maxY = this.maxY;
        return keyPopUp.midX = this.midX;
      });
      key.on(Events.TouchMove, function() {
        box.html = this.name;
        keyPopUp.maxY = this.maxY;
        return keyPopUp.midX = this.midX;
      });
      key.on(Events.TouchEnd, function() {
        return keyPopUp.visible = false;
      });
    } else {
      key.on(Events.TouchStart, function() {
        return this.backgroundColor = m.utils.color("light-key");
      });
      key.on(Events.TouchEnd, function() {
        return this.backgroundColor = "white";
      });
    }
    key.on(Events.TouchEnd, function() {
      var j, len1;
      if (shiftIcon.states.state === "on") {
        shiftIcon.states["switch"]("default");
        shiftKey.backgroundColor = m.utils.color("light-key");
        if (m.device.name === "ipad") {
          shiftIcon2.states["switch"]("default");
          shiftKey2.backgroundColor = m.utils.color("light-key");
        }
        for (j = 0, len1 = keysArray.length; j < len1; j++) {
          key = keysArray[j];
          key.style['text-transform'] = 'lowercase';
        }
        box.style['text-transform'] = 'lowercase';
        if (setup.output) {
          this.newText = setup.output.text.html + this.name.toUpperCase();
          return m.utils.update(setup.output.text, [
            {
              text: this.newText
            }
          ]);
        }
      } else {
        if (setup.output) {
          this.newText = setup.output.text.html + this.name;
          return m.utils.update(setup.output.text, [
            {
              text: this.newText
            }
          ]);
        }
      }
    });
  }
  board.keysArray = keysArray;
  board.keyboardState = 1;
  shiftKey = new Layer({
    superLayer: board,
    name: "shift",
    borderRadius: boardSpecs.sideKeyRadius,
    color: m.utils.color("black"),
    backgroundColor: m.utils.color("light-key"),
    shadowY: m.utils.px(1),
    shadowColor: "#929498",
    width: boardSpecs.sideKey,
    height: boardSpecs.sideKey,
    y: boardSpecs.marginTop.row3 + boardSpecs.key.height * 2
  });
  shiftKey.constraints = {
    leading: m.utils.pt(boardSpecs.padding.row1)
  };
  shiftIcon = new Layer({
    width: svgShiftOff.width,
    height: svgShiftOff.height,
    superLayer: shiftKey,
    backgroundColor: "transparent",
    x: boardSpecs.shiftIcon.x,
    y: boardSpecs.shiftIcon.y
  });
  shiftIcon.html = svgShiftOff.svg;
  shiftIcon.states.add({
    "on": {
      html: svgShiftOn.svg
    }
  });
  shiftIcon.states.animationOptions = {
    time: .01
  };
  shiftKey.style = {
    "font-size": m.utils.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  shiftKey.on(Events.TouchEnd, function() {
    var j, k, l, len1, len2, len3, len4, n;
    switch (board.keyboardState) {
      case 1:
        shiftIcon.states.next();
        if (m.device.name === "ipad") {
          shiftIcon2.states.next();
        }
        if (shiftIcon.states.state === "on") {
          shiftKey.backgroundColor = "white";
          if (m.device.name === "ipad") {
            shiftKey2.backgroundColor = "white";
          }
          for (j = 0, len1 = keysArray.length; j < len1; j++) {
            key = keysArray[j];
            key.style['text-transform'] = 'uppercase';
          }
          return box.style['text-transform'] = 'uppercase';
        } else {
          shiftKey.backgroundColor = m.utils.color("light-key");
          if (m.device.name === "ipad") {
            shiftKey2.backgroundColor = m.utils.color("light-key");
          }
          for (k = 0, len2 = keysArray.length; k < len2; k++) {
            key = keysArray[k];
            key.style["text-transform"] = 'lowercase';
          }
          return box.style["text-transform"] = 'lowercase';
        }
        break;
      case 2:
        for (index = l = 0, len3 = keysArray.length; l < len3; index = ++l) {
          key = keysArray[index];
          key.html = thirdArray[index];
          key.name = thirdArray[index];
        }
        board.keyboardState = 3;
        shiftKey.html = "123";
        if (m.device.name === "ipad") {
          return shiftKey2.html = "123";
        }
        break;
      case 3:
        for (index = n = 0, len4 = keysArray.length; n < len4; index = ++n) {
          key = keysArray[index];
          if (index < 27) {
            key.name = secondArray[index];
            key.html = secondArray[index];
            if (index === 26) {
              key.subLayers[0].visible = false;
            }
          } else {
            key.visible = false;
          }
        }
        shiftKey.html = "#+=";
        if (m.device.name === "ipad") {
          shiftKey2.html = "#+=";
        }
        return board.keyboardState = 2;
    }
  });
  board.keys.shift = shiftKey;
  board.keys.shift.icon = shiftIcon;
  deleteKey = new Layer({
    superLayer: board,
    borderRadius: boardSpecs.sideKeyRadius,
    backgroundColor: m.utils.color("light-key"),
    shadowY: m.utils.px(1),
    shadowColor: "#929498",
    name: "delete",
    width: boardSpecs.sideKey,
    height: boardSpecs.sideKey,
    y: boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.iPadDeleteOffset
  });
  deleteKey.constraints = {
    trailing: m.utils.pt(boardSpecs.spacer) / 2
  };
  deleteIcon = new Layer({
    superLayer: deleteKey,
    width: m.utils.px(24),
    height: m.utils.px(18),
    backgroundColor: "transparent",
    x: boardSpecs.deleteIcon.x,
    y: boardSpecs.deleteIcon.y
  });
  if (m.device.name === "ipad") {
    deleteKey.width = deleteKey.width + m.utils.px(5);
  }
  deleteIcon.states.add({
    "on": {
      html: svgDeleteOn.svg
    }
  });
  deleteIcon.states.add({
    off: {
      html: svgDeleteOff.svg
    }
  });
  deleteKey.on(Events.TouchStart, function() {
    deleteKey.backgroundColor = "white";
    return deleteIcon.states.switchInstant("on");
  });
  deleteKey.on(Events.TouchEnd, function() {
    var endLength, initialLength, newText;
    deleteKey.backgroundColor = m.utils.color("light-key");
    deleteIcon.states.switchInstant("off");
    if (setup.output) {
      initialLength = setup.output.text.html.length;
      newText = setup.output.text.html.slice(0, -1);
      m.utils.update(setup.output.text, [
        {
          text: newText
        }
      ]);
      endLength = setup.output.text.html.length;
      if (initialLength === endLength) {
        newText = setup.output.text.html.slice(0, -6);
        m.utils.update(setup.output.text, [
          {
            text: newText
          }
        ]);
      }
      if (setup.output.text.html === "") {
        return setup.output.placeholder.visible = true;
      }
    }
  });
  deleteIcon.states.switchInstant("off");
  board.keys["delete"] = deleteKey;
  board.keys["delete"].icon = deleteIcon;
  if (m.device.name === "ipad") {
    keyboardKey = new Layer({
      superLayer: board,
      name: "dismiss",
      borderRadius: boardSpecs.sideKeyRadius,
      backgroundColor: m.utils.color("light-key"),
      shadowY: m.utils.px(1),
      shadowColor: "#929498",
      width: boardSpecs.sideKey,
      height: boardSpecs.sideKey
    });
    keyboardKey.constraints = {
      trailingEdges: deleteKey,
      bottom: boardSpecs.bottomRow
    };
    keyboardIcon = new Layer({
      superLayer: keyboardKey,
      width: m.utils.px(32.5),
      height: m.utils.px(23.5),
      backgroundColor: "transparent"
    });
    keyboardIcon.html = m.assets.keyboard;
    keyboardIcon.center();
    board.keys.dismiss = keyboardKey;
    shiftKey2 = new Layer({
      superLayer: board,
      name: "shift",
      borderRadius: boardSpecs.sideKeyRadius,
      color: m.utils.color("black"),
      backgroundColor: m.utils.color("light-key"),
      shadowY: m.utils.px(1),
      shadowColor: "#929498",
      width: boardSpecs.sideKey2,
      height: boardSpecs.sideKey
    });
    shiftKey2.constraints = {
      trailingEdges: deleteKey,
      bottomEdges: shiftKey
    };
    shiftIcon2 = new Layer({
      width: m.utils.px(20),
      height: m.utils.px(19),
      superLayer: shiftKey2,
      backgroundColor: "transparent",
      x: boardSpecs.shiftIcon.x + m.utils.px(10),
      y: boardSpecs.shiftIcon.y
    });
    shiftIcon2.html = m.assets.shift.off;
    shiftKey2.style = {
      "font-size": m.utils.px(16) + "px",
      "font-weight": 400,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': boardSpecs.key.height + "px"
    };
    shiftIcon2.states.add({
      "on": {
        html: svgShiftOn.svg
      }
    });
    shiftIcon2.states.animationOptions = {
      time: .01
    };
    shiftIcon2.on(Events.TouchStart, function() {
      var j, k, l, len1, len2, len3, len4, n;
      switch (board.keyboardState) {
        case 1:
          shiftIcon.states.next();
          shiftIcon2.states.next();
          if (shiftIcon.states.state === "on") {
            shiftKey.backgroundColor = "white";
            shiftKey2.backgroundColor = "white";
            for (j = 0, len1 = keysArray.length; j < len1; j++) {
              key = keysArray[j];
              key.style['text-transform'] = 'uppercase';
            }
            return box.style['text-transform'] = 'uppercase';
          } else {
            shiftKey.backgroundColor = m.utils.color("light-key");
            shiftKey2.backgroundColor = m.utils.color("light-key");
            for (k = 0, len2 = keysArray.length; k < len2; k++) {
              key = keysArray[k];
              key.style["text-transform"] = 'lowercase';
            }
            return box.style["text-transform"] = 'lowercase';
          }
          break;
        case 2:
          for (index = l = 0, len3 = keysArray.length; l < len3; index = ++l) {
            key = keysArray[index];
            key.html = thirdArray[index];
            key.name = thirdArray[index];
          }
          board.keyboardState = 3;
          shiftKey.html = "123";
          if (m.device.name === "ipad") {
            return shiftKey2.html = "123";
          }
          break;
        case 3:
          for (index = n = 0, len4 = keysArray.length; n < len4; index = ++n) {
            key = keysArray[index];
            if (index < 27) {
              key.name = secondArray[index];
              key.html = secondArray[index];
              if (index === 26) {
                key.subLayers[0].visible = false;
              }
            } else {
              key.visible = false;
            }
          }
          shiftKey.html = "#+=";
          if (m.device.name === "ipad") {
            shiftKey2.html = "#+=";
          }
          return board.keyboardState = 2;
      }
    });
    numKey2 = new Layer({
      superLayer: board,
      name: "num",
      borderRadius: boardSpecs.sideKeyRadius,
      color: m.utils.color("black"),
      backgroundColor: m.utils.color("light-key"),
      shadowY: m.utils.px(1),
      shadowColor: "#929498",
      width: boardSpecs.sideKey2,
      height: boardSpecs.key.height
    });
    numKey2.html = ".?123";
    numKey2.style = {
      "font-size": m.utils.px(16) + "px",
      "font-weight": 400,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': boardSpecs.key.height + "px"
    };
    numKey2.constraints = {
      trailing: [keyboardKey, 12],
      bottomEdges: keyboardKey
    };
    numKey2.on(Events.TouchStart, function() {
      var j, k, len1, len2;
      switch (board.keyboardState) {
        case 1:
          for (index = j = 0, len1 = keysArray.length; j < len1; index = ++j) {
            key = keysArray[index];
            if (index < 27) {
              if (secondArray[index] === "undo") {
                key.width = key.width * 2 + boardSpecs.spacer;
                key.style["font-size"] = m.utils.px(17) + "px";
                key.style["font-weight"] = 400;
              }
              if (secondArray[index] === "hide") {
                key.visible = false;
              }
              key.name = secondArray[index];
              key.html = secondArray[index];
              if (index === 26) {
                key.subLayers[0].visible = false;
              }
            } else {
              key.visible = false;
            }
          }
          numKey.html = "ABC";
          shiftKey.html = "#+=";
          shiftIcon.visible = false;
          if (m.device.name === "ipad") {
            shiftIcon2.visible = false;
            shiftKey2.html = "#+=";
            numKey2.html = "ABC";
          }
          return board.keyboardState = 2;
        default:
          for (index = k = 0, len2 = keysArray.length; k < len2; index = ++k) {
            key = keysArray[index];
            if (key.html === "undo" || "redo") {
              key.width = boardSpecs.key.width;
              key.style["font-size"] = m.utils.px(25) + "px";
              key.style["font-weight"] = 300;
            }
            key.visible = true;
            key.name = lettersArray[index];
            key.html = lettersArray[index];
            if (index > 25) {
              key.subLayers[0].visible = true;
            }
          }
          shiftKey.html = "";
          shiftIcon.visible = true;
          if (m.device.name === "ipad") {
            numKey.html = ".?123";
            numKey2.html = ".?123";
            shiftKey2.html = "";
            shiftIcon2.visible = true;
          }
          return board.keyboardState = 1;
      }
    });
  }
  numKey = new Layer({
    superLayer: board,
    name: "num",
    borderRadius: m.utils.px(5),
    backgroundColor: m.utils.color("light-key"),
    shadowY: m.utils.px(1),
    shadowColor: "#929498",
    color: "black",
    width: boardSpecs.sideKey,
    height: boardSpecs.key.height
  });
  numKey.constraints = {
    bottom: boardSpecs.bottomRow,
    leadingEdges: shiftKey
  };
  if (m.device.name !== "ipad" && m.device.name !== "ipad-pro") {
    numKey.html = "123";
  } else {
    numKey.html = ".?123";
  }
  numKey.style = {
    "font-size": m.utils.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  numKey.on(Events.TouchStart, function() {
    var j, k, l, len1, len2, len3, len4, n;
    switch (board.keyboardState) {
      case 1:
        switch (m.device.name) {
          case "ipad":
            for (index = j = 0, len1 = keysArray.length; j < len1; index = ++j) {
              key = keysArray[index];
              if (index < 27) {
                if (secondArray[index] === "undo") {
                  key.width = key.width * 2 + boardSpecs.spacer;
                  key.style["font-size"] = m.utils.px(17) + "px";
                  key.style["font-weight"] = 400;
                }
                if (secondArray[index] === "hide") {
                  key.visible = false;
                }
                key.name = secondArray[index];
                key.html = secondArray[index];
                if (index === 26) {
                  key.subLayers[0].visible = false;
                }
              } else {
                key.visible = false;
              }
            }
            shiftIcon2.visible = false;
            shiftKey2.html = "#+=";
            numKey2.html = "ABC";
            board.keyboardState = 2;
            break;
          default:
            rowIndex = 0;
            secondRowKeyWidth = 0;
            for (index = k = 0, len2 = keysArray.length; k < len2; index = ++k) {
              key = keysArray[index];
              key.name = secondArray[index];
              key.html = secondArray[index];
              if (index === 19) {
                key.y = rowsMap[1].marginTop + key.height;
              }
              if (index > 9 && index < 20) {
                key.x = rowsMap[0].padding + (rowIndex * boardSpecs.spacer) + secondRowKeyWidth;
                rowIndex++;
                secondRowKeyWidth = secondRowKeyWidth + boardSpecs.key.width;
              }
              if (index === 20) {
                key.constraints = {
                  leading: [shiftKey, m.utils.pt(boardSpecs.expandedSpacer)]
                };
                m.layout.set();
              }
              if (index > 19) {
                key.width = boardSpecs.expandedKey;
              }
              if (index > 20) {
                key.constraints = {
                  leading: [keysArray[index - 1], m.utils.pt(boardSpecs.spacer)]
                };
                m.layout.set();
              }
              if (index > 24) {
                key.visible = false;
              }
            }
            board.keyboardState = 2;
        }
        numKey.html = "ABC";
        shiftKey.html = "#+=";
        return shiftIcon.visible = false;
      default:
        if (m.device.name !== "ipad") {
          secondRowKeyWidth = 0;
          rowIndex = 0;
          for (index = l = 0, len3 = keysArray.length; l < len3; index = ++l) {
            key = keysArray[index];
            key.width = boardSpecs.key.width;
            if (index > 9 && index < 19) {
              key.x = rowsMap[1].padding + (rowIndex * boardSpecs.spacer) + secondRowKeyWidth;
              key.y = rowsMap[1].marginTop + key.height;
              rowIndex++;
              secondRowKeyWidth = secondRowKeyWidth + key.width;
            }
            if (index === 19) {
              key.y = rowsMap[2].marginTop + key.height * 2;
            }
            if (index >= 19) {
              rowIndex = index - rowsMap[2].startIndex;
              key.x = rowsMap[2].padding + (rowIndex * boardSpecs.spacer) + (rowIndex * key.width);
              key.y = rowsMap[2].marginTop + key.height * 2;
              key.constraints = {};
            }
          }
        }
        for (index = n = 0, len4 = keysArray.length; n < len4; index = ++n) {
          key = keysArray[index];
          if (key.html === "undo" || "redo") {
            key.width = boardSpecs.key.width;
            key.style["font-size"] = m.utils.px(25) + "px";
            key.style["font-weight"] = 300;
          }
          key.visible = true;
          key.name = lettersArray[index];
          key.html = lettersArray[index];
          if (index > 25) {
            key.subLayers[0].visible = true;
          }
        }
        shiftKey.html = "";
        shiftIcon.visible = true;
        if (m.device.name === "ipad") {
          numKey.html = ".?123";
          numKey2.html = ".?123";
          shiftKey2.html = "";
          shiftIcon2.visible = true;
        }
        return board.keyboardState = 1;
    }
  });
  m.layout.set();
  emojiKey = new Layer({
    superLayer: board,
    name: "emoji",
    borderRadius: m.utils.px(5),
    backgroundColor: m.utils.color("light-key"),
    shadowY: m.utils.px(1),
    shadowColor: "#929498",
    width: boardSpecs.sideKey,
    height: boardSpecs.key.height
  });
  emojiKey.constraints = {
    bottomEdges: numKey,
    leading: [numKey, 6]
  };
  emojiIcon = new Layer({
    width: svgEmoji.width,
    height: svgEmoji.height,
    superLayer: emojiKey,
    backgroundColor: "transparent",
    x: boardSpecs.emojiIcon.x,
    y: boardSpecs.emojiIcon.y
  });
  emojiIcon.html = svgEmoji.svg;
  returnKey = new Layer({
    superLayer: board,
    borderRadius: m.utils.px(5),
    backgroundColor: m.utils.color(setup.returnColor),
    shadowY: m.utils.px(1),
    shadowColor: "#929498",
    color: "black",
    name: "return",
    width: boardSpecs.returnKey,
    height: boardSpecs.key.height
  });
  if (setup.returnColor !== "light-key") {
    returnKey.color = exports.setTextColor(m.utils.color(setup.returnColor));
  }
  if (m.device.name === "ipad") {
    returnKey.constraints = {
      trailingEdges: deleteKey,
      top: m.utils.pt(boardSpecs.marginTop.row2 + boardSpecs.key.height)
    };
  } else {
    returnKey.constraints = {
      trailing: m.utils.pt(boardSpecs.spacer) / 2,
      bottomEdges: numKey
    };
  }
  returnKey.html = setup.returnText;
  returnKey.style = {
    "font-size": m.utils.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  m.layout.set();
  storedTextColor = returnKey.color;
  returnKey.on(Events.TouchStart, function() {
    returnKey.backgroundColor = "white";
    return returnKey.color = m.utils.color("black");
  });
  returnKey.on(Events.TouchEnd, function() {
    returnKey.backgroundColor = m.utils.color(setup.returnColor);
    return returnKey.color = storedTextColor;
  });
  board.keys["return"] = returnKey;
  spaceKey = new Layer({
    superLayer: board,
    borderRadius: m.utils.px(5),
    backgroundColor: "white",
    shadowY: m.utils.px(1),
    shadowColor: "#929498",
    color: "black",
    name: "space",
    height: boardSpecs.key.height
  });
  if (m.device.name !== "ipad") {
    spaceKey.constraints = {
      bottomEdges: numKey,
      leading: [emojiKey, m.utils.pt(boardSpecs.spacer)],
      trailing: [returnKey, boardSpecs.spacer]
    };
    spaceKey.html = "space";
    spaceKey.style = {
      "font-size": m.utils.px(16) + "px",
      "font-weight": 400,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': boardSpecs.key.height + "px"
    };
  } else {
    spaceKey.constraints = {
      bottomEdges: numKey,
      leading: [emojiKey, m.utils.pt(boardSpecs.spacer)],
      trailing: [numKey2, boardSpecs.spacer]
    };
  }
  board.keys["&nbsp;"] = spaceKey;
  board.keys.space = spaceKey;
  m.layout.set();
  spaceKey.on(Events.TouchStart, function() {
    return spaceKey.backgroundColor = m.utils.color("light-key");
  });
  spaceKey.on(Events.TouchEnd, function() {
    spaceKey.backgroundColor = "white";
    if (setup.output) {
      this.newText = setup.output.text.html + "&nbsp;";
      return m.utils.update(setup.output.text, [
        {
          text: this.newText
        }
      ]);
    }
  });
  return board;
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
  navbar.back = backButton;
  navbar.back.backIcon = backIcon;
  navbar.home = homeButton;
  navbar.home.icon = homeIcon;
  navbar.recent = recentButton;
  navbar.recent.icon = recentIcon;
  return navbar;
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
  var batteryIcon, cellular, cellularIcon, gripper, highBattery, i, layer, len, lowBattery, midBattery, ref, setup, statusBar, time, wifi, wifiIcon;
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
  ref = Framer.CurrentContext.layers;
  for (i = 0, len = ref.length; i < len; i++) {
    layer = ref[i];
    if (layer.type === "lockScreen") {
      this.isLockScreenPutilsent = true;
    }
  }
  if (this.isLockScreenPutilsent) {
    gripper = new Layer({
      superLayer: statusBar,
      width: utils.px(37),
      height: utils.px(5),
      name: "gripper",
      backgroundColor: "transparent",
      opacity: .5,
      name: "gripper"
    });
    gripper.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(37)) + "px' height='" + (utils.px(5)) + "px' viewBox='0 0 37 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Gripper</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Keyboard/Auto-Complete-Bar-Closed' transform='translate(-169.000000, -2.000000)' fill='#FFFFFF'> <rect id='Gripper' x='169.5' y='2.5' width='36' height='4' rx='2.5'></rect> </g> </g> </svg>";
    gripper.constraints = {
      align: "horizontal",
      top: 2
    };
  } else {
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
  }
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


},{"material-kit":"material-kit"}],"material-kit-tab-bar":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  tab: {
    label: "label",
    icon: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='25px' viewBox='0 0 25 25' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>1</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='1'> <g id='Bottom-Bar/Tab-Bar' transform='translate(-25.000000, -7.000000)' fill='#0076FF'> <g id='Placeholders' transform='translate(25.000000, 7.000000)'> <rect id='1' x='0' y='0' width='25' height='25' rx='3'></rect> </g> </g> </g> </svg>",
    active: void 0,
    unactive: void 0,
    tabBar: void 0,
    type: "tab"
  },
  bar: {
    tabs: [],
    start: 0,
    type: "tabBar",
    backgroundColor: "white",
    activeColor: "blue",
    inactiveColor: "gray",
    blur: true
  }
};

exports.defaults.tab.props = Object.keys(exports.defaults.tab);

exports.defaults.bar.props = Object.keys(exports.defaults.bar);

exports.tab = function(array) {
  var icon, label, setup, svgFrame, tabBox, tabView;
  setup = m.utils.setupComponent(array, exports.defaults.tab);
  switch (m.device.name) {
    case "iphone-5":
      this.tabWidth = 55;
      break;
    default:
      this.tabWidth = 75;
  }
  tabView = new Layer({
    name: setup.label + " view",
    backgroundColor: "transparent"
  });
  tabView.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  tabBox = new Layer({
    backgroundColor: "transparent",
    name: setup.label + " tab"
  });
  tabBox.constraints = {
    width: this.tabWidth,
    height: 49
  };
  icon = new Layer({
    width: m.utils.px(25),
    height: m.utils.px(25),
    backgroundColor: "transparent",
    name: "icon",
    superLayer: tabBox
  });
  icon.constraints = {
    align: "horizontal",
    top: 7
  };
  svgFrame = m.utils.svg(setup.icon);
  icon.html = svgFrame.svg;
  icon.width = svgFrame.width;
  icon.height = svgFrame.height;
  label = new m.Text({
    text: setup.label,
    superLayer: tabBox,
    color: "#929292",
    fontSize: 10,
    name: "label",
    textTransform: "capitalize"
  });
  label.constraints = {
    bottom: 2,
    horizontalCenter: icon
  };
  m.layout.set();
  tabBox.type = "tab";
  tabBox.icon = icon;
  tabBox.view = tabView;
  tabBox.label = label;
  return tabBox;
};

exports.bar = function(array) {
  var divider, dummyTab, dummyTab2, i, index, len, ref, setActive, setup, tab, tabBar, tabBarBG, tabBarBox, tabWidth;
  setup = m.utils.setupComponent(array, exports.defaults.bar);
  if (setup.tabs.length === 0) {
    dummyTab = new exports.tab;
    dummyTab2 = new exports.tab;
    setup.tabs.push(dummyTab);
    setup.tabs.push(dummyTab2);
  }
  tabWidth = 75;
  switch (exports.device) {
    case "iphone-5":
      tabWidth = 55;
      break;
    default:
      tabWidth = 75;
  }
  tabBar = new Layer({
    backgroundColor: "transparent",
    name: "tab bar"
  });
  tabBarBG = new BackgroundLayer({
    superLayer: tabBar,
    name: "tabBar background"
  });
  tabBar.constraints = {
    leading: 0,
    trailing: 0,
    bottom: 0,
    height: 49
  };
  tabBarBG.constraints = {
    leading: 0,
    trailing: 0,
    bottom: 0,
    height: 49
  };
  divider = new Layer({
    backgroundColor: "#B2B2B2",
    name: "tabDivider",
    superLayer: tabBar
  });
  divider.constraints = {
    top: 0,
    leading: 0,
    trailing: 0,
    height: .5
  };
  tabBarBox = new Layer({
    superLayer: tabBar,
    backgroundColor: "transparent",
    name: "tabBar box"
  });
  tabBarBox.constraints = {
    height: 49,
    width: setup.tabs.length * tabWidth
  };
  m.layout.set();
  setActive = function(tabIndex) {
    var i, index, len, ref, results, tab;
    ref = setup.tabs;
    results = [];
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      tab = ref[index];
      if (index === tabIndex) {
        m.utils.changeFill(tab.icon, m.utils.color(setup.activeColor));
        tab.label.color = m.utils.color(setup.activeColor);
        results.push(tab.view.visible = true);
      } else {
        m.utils.changeFill(tab.icon, m.utils.color(setup.inactiveColor));
        tab.label.color = m.utils.color(setup.inactiveColor);
        results.push(tab.view.visible = false);
      }
    }
    return results;
  };
  ref = setup.tabs;
  for (index = i = 0, len = ref.length; i < len; index = ++i) {
    tab = ref[index];
    if (tab.type !== "tab") {
      error(tab.id, 5);
    }
    tabBarBox.addSubLayer(tab);
    m.utils.changeFill(tab.icon, m.utils.color(setup.inactiveColor));
    tab.label.color = m.utils.color(setup.inactiveColor);
    tabBarBG.backgroundColor = setup.backgroundColor;
    if (setup.blur) {
      tabBarBG.backgroundColor = "rgba(255,255,255, .9)";
      m.utils.bgBlur(tabBarBG);
    }
    if (index === 0) {
      tab.constraints.leading = 0;
    } else {
      tab.constraints.leading = setup.tabs[index - 1];
    }
    m.layout.set(tab);
    tab.on(Events.TouchStart, function() {
      var tabIndex;
      tabIndex = this.x / m.utils.px(tabWidth);
      return setActive(tabIndex);
    });
  }
  tabBarBox.constraints = {
    align: "horizontal"
  };
  setActive(setup.start);
  m.layout.set();
  return tabBar;
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

exports.inky = function(setup) {
  var inkColor, inkCurve, inkOpacity, inkScale, inkyEffect, moveToTap, startX, startY;
  startX = setup.layer.width / 2;
  startY = setup.layer.height / 2;
  inkColor = "#0A0A0A";
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
    circle.scale = .1;
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


},{"material-kit":"material-kit"}],"material-kit":[function(require,module,exports){
var alert, appbar, banner, button, field, icon, keyboard, layout, library, nav, status, tab, text, utils;

exports.layout = layout = require('material-kit-layout');

exports.lib = library = require('material-kit-library');

exports.utils = utils = require('material-kit-utils');

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

alert = require('material-kit-alert');

appbar = require('material-kit-app-bar');

banner = require('material-kit-banner');

button = require('material-kit-button');

field = require('material-kit-field');

icon = require('material-kit-icon');

keyboard = require('material-kit-keyboard');

nav = require('material-kit-nav-bar');

status = require('material-kit-status-bar');

tab = require('material-kit-tab-bar');

text = require('material-kit-text');

exports.Alert = alert.create;

exports.AppBar = appbar.create;

exports.Banner = banner.create;

exports.Button = button.create;

exports.Field = field.create;

exports.Icon = icon.create;

exports.Keyboard = keyboard.create;

exports.NavBar = nav.create;

exports.StatusBar = status.create;

exports.Tab = tab.tab;

exports.TabBar = tab.bar;

exports.Text = text.create;


},{"material-kit-alert":"material-kit-alert","material-kit-app-bar":"material-kit-app-bar","material-kit-banner":"material-kit-banner","material-kit-button":"material-kit-button","material-kit-field":"material-kit-field","material-kit-icon":"material-kit-icon","material-kit-keyboard":"material-kit-keyboard","material-kit-layout":"material-kit-layout","material-kit-library":"material-kit-library","material-kit-nav-bar":"material-kit-nav-bar","material-kit-status-bar":"material-kit-status-bar","material-kit-tab-bar":"material-kit-tab-bar","material-kit-text":"material-kit-text","material-kit-utils":"material-kit-utils"}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtYWxlcnQuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWFwcC1iYXIuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWJhbm5lci5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtYnV0dG9uLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bmEvRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1maWVsZC5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtaWNvbi5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQta2V5Ym9hcmQuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWxheW91dC5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtbGlicmFyeS5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtbmF2LWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtc3RhdHVzLWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtdGFiLWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtdGV4dC5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtdXRpbHMuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLElBQUE7O0FBQUEsQ0FBQSxHQUFJLE9BQUEsQ0FBUSxjQUFSOztBQUVKLE9BQU8sQ0FBQyxRQUFSLEdBQW1CO0VBQ2xCLEtBQUEsRUFBTyxPQURXO0VBRWxCLE9BQUEsRUFBUSxTQUZVO0VBR2xCLE9BQUEsRUFBUSxDQUFDLElBQUQsRUFBTyxRQUFQLENBSFU7OztBQU1uQixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQWpCLEdBQXlCLE1BQU0sQ0FBQyxJQUFQLENBQVksT0FBTyxDQUFDLFFBQXBCOztBQUV6QixPQUFPLENBQUMsTUFBUixHQUFpQixTQUFDLEtBQUQ7QUFDaEIsTUFBQTtFQUFBLEtBQUEsR0FBUSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQVIsQ0FBdUIsS0FBdkIsRUFBOEIsT0FBTyxDQUFDLFFBQXRDO0VBRVIsS0FBQSxHQUFZLElBQUEsS0FBQSxDQUFNO0lBQUEsZUFBQSxFQUFnQixhQUFoQjtJQUErQixJQUFBLEVBQUssT0FB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Q1QsS0FBQSxHQUFRLE9BQUEsQ0FBUSxvQkFBUjs7QUFDUixJQUFBLEdBQU8sT0FBQSxDQUFRLG1CQUFSOztBQUNQLFFBQUEsR0FBVyxPQUFBLENBQVEsdUJBQVI7O0FBQ1gsR0FBQSxHQUFNLE9BQUEsQ0FBUSxzQkFBUjs7QUFDTixNQUFBLEdBQVMsT0FBQSxDQUFRLHlCQUFSOztBQUNULEdBQUEsR0FBTSxPQUFBLENBQVEsc0JBQVI7O0FBQ04sSUFBQSxHQUFPLE9BQUEsQ0FBUSxtQkFBUjs7QUFHUCxPQUFPLENBQUMsS0FBUixHQUFnQixLQUFLLENBQUM7O0FBQ3RCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE1BQU0sQ0FBQzs7QUFDeEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsTUFBTSxDQUFDOztBQUN4QixPQUFPLENBQUMsTUFBUixHQUFpQixNQUFNLENBQUM7O0FBQ3hCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLEtBQUssQ0FBQzs7QUFDdEIsT0FBTyxDQUFDLElBQVIsR0FBZSxJQUFJLENBQUM7O0FBQ3BCLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFFBQVEsQ0FBQzs7QUFDNUIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsR0FBRyxDQUFDOztBQUNyQixPQUFPLENBQUMsU0FBUixHQUFvQixNQUFNLENBQUM7O0FBQzNCLE9BQU8sQ0FBQyxHQUFSLEdBQWMsR0FBRyxDQUFDOztBQUNsQixPQUFPLENBQUMsTUFBUixHQUFpQixHQUFHLENBQUM7O0FBQ3JCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsSUFBSSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQWxlcnRcbm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRpdGxlOiBcIlRpdGxlXCJcblx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRhY3Rpb25zOltcIk9LXCIsIFwiQ2FuY2VsXCJdXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdGFsZXJ0ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJhbGVydFwiXG5cdGFsZXJ0LmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXG5cdG92ZXJsYXkgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiIzVFNUU1RVwiLCBzdXBlckxheWVyOmFsZXJ0LCBuYW1lOlwib3ZlcmxheVwiLCBvcGFjaXR5Oi42XG5cdG92ZXJsYXkuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cblx0bW9kYWwgPSBuZXcgTGF5ZXJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0c3VwZXJMYXllcjphbGVydFxuXHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDIpXG5cdFx0bmFtZTpcIm1vZGFsXCJcblx0XHRzaGFkb3dDb2xvcjpcInJnYmEoMCwwLDAsLjIpXCJcblx0XHRzaGFkb3dZOjI0XG5cdFx0c2hhZG93Qmx1cjoyNFxuXHRtb2RhbC5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdHdpZHRoOjI4MFxuXHRcdGhlaWdodDo0MDBcblxuXHR0aXRsZSA9IG5ldyBtLlRleHRcblx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0dGV4dDpzZXR1cC50aXRsZVxuXHRcdGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiXG5cdFx0Zm9udFNpemU6MjBcblx0XHRuYW1lOlwidGl0bGVcIlxuXHRcdGxpbmVIZWlnaHQ6MjBcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDoyMFxuXHRcdFx0d2lkdGg6MjIwXG5cdFx0XHRsZWFkaW5nOjI0XG5cblx0bWVzc2FnZSA9IG5ldyBtLlRleHRcblx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0dGV4dDpzZXR1cC5tZXNzYWdlXG5cdFx0Zm9udFNpemU6MTNcblx0XHRuYW1lOlwibWVzc2FnZVwiXG5cdFx0bGluZUhlaWdodDoxNlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOiBbdGl0bGUsIDEwXVxuXHRcdFx0bGVhZGluZzoyNFxuXHRcdFx0d2lkdGg6IDIyMFxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDpbYWxlcnQsIG92ZXJsYXksIG1vZGFsLCB0aXRsZSwgbWVzc2FnZV1cblxuXHQjVGl0bGUgKyBNZXNzYWdlICsgMSBzZXQgb2YgYWN0aW9uc1xuXHRtb2RhbC5jb25zdHJhaW50c1tcImhlaWdodFwiXSA9IDIwICsgbS51dGlscy5wdCh0aXRsZS5oZWlnaHQpICsgMTAgKyBtLnV0aWxzLnB0KG1lc3NhZ2UuaGVpZ2h0KSArIDI0ICsgNDRcblxuXHRtLmxheW91dC5zZXRcblx0XHR0YXJnZXQ6W292ZXJsYXksIG1vZGFsXVxuXHRhbGVydC5hY3Rpb25zID0ge31cblx0YWN0aW9ucyA9IFtdXG5cdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblx0XHRpZiBpbmRleCA8IDJcblx0XHRcdGJ1dHRvbiA9IG5ldyBtLkJ1dHRvblxuXHRcdFx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0XHRcdHRleHQ6c2V0dXAuYWN0aW9uc1tpbmRleF1cblx0XHRcdFx0Y29sb3I6XCJibHVlXCJcblx0XHRcdGlmIGluZGV4ID09IDBcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzID0ge2JvdHRvbTo4LCB0cmFpbGluZzo4fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRidXR0b24uY29uc3RyYWludHMgPSB7Ym90dG9tOjgsIHRyYWlsaW5nOlthY3Rpb25zW2luZGV4IC0gMV0sIDhdfVxuXHRcdFx0YWxlcnQuYWN0aW9uc1tzZXR1cC5hY3Rpb25zW2luZGV4XV0gPSBidXR0b25cblx0XHRcdGFjdGlvbnMucHVzaCBidXR0b25cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6YnV0dG9uXG5cblx0IyBFeHBvcnQgYWxlcnRcblx0YWxlcnQub3ZlcmxheSA9IG92ZXJsYXlcblx0YWxlcnQubW9kYWwgPSBtb2RhbFxuXHRhbGVydC50aXRsZSA9IHRpdGxlXG5cdGFsZXJ0Lm1lc3NhZ2UgPSBtZXNzYWdlXG5cblx0cmV0dXJuIGFsZXJ0XG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHR0aXRsZTpcIlRpdGxlXCJcblx0bGVmdEFjdGlvbjp1bmRlZmluZWRcblx0cmlnaHQ6XCJFZGl0XCJcblx0Ymx1cjp0cnVlXG5cdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdHR5cGU6XCJuYXZCYXJcIlxuXHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdHRhYnM6dW5kZWZpbmVkXG5cdHRpdGxlQ29sb3I6XCJibGFja1wiXG5cdGFjdGlvbkNvbG9yOlwiYmxhY2tcIlxuXHR0YWJzOnVuZGVmaW5lZFxuXHR0YWJzQ29sb3I6dW5kZWZpbmVkXG5cdHRhYnNJbms6e2NvbG9yOlwiYmx1ZUdyZXlcIiwgc2NhbGU6OH1cblx0dGFic0JhcjpcInllbGxvd1wiXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRiYXIgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOlwiQXBwIEJhclwiXG5cdFx0YmFja2dyb3VuZENvbG9yOnNldHVwLmJhY2tncm91bmRDb2xvclxuXHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwgMCwgMCwgLjEyKVwiXG5cdFx0c2hhZG93Qmx1cjogbS5weCg0KVxuXG5cdGJhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjgwXG5cblx0aWYgc2V0dXAudGFic1xuXHRcdGJhci5jb25zdHJhaW50cy5oZWlnaHQgPSAxMjhcblxuXHRiYXJBcmVhID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGJhckFyZWEuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6NTZcblx0XHRib3R0b206MFxuXG5cdGlmIHNldHVwLnRhYnMgJiYgc2V0dXAudGFicy5sZW5ndGggPiAyXG5cdFx0YmFyQXJlYS5jb25zdHJhaW50cy5ib3R0b20gPSA0OFxuXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXJcblx0XHRzZXR1cC5zdXBlckxheWVyLmFkZFN1YkxheWVyKGJhcilcblxuXHRtLmxheW91dC5zZXQoW2JhciwgYmFyQXJlYV0pXG5cblx0YmFyLnR5cGUgPSBzZXR1cC50eXBlXG5cblx0Zm9yIGxheWVyIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsYXllci50eXBlID09IFwic3RhdHVzQmFyXCJcblx0XHRcdEBzdGF0dXNCYXIgPSBsYXllclxuXHRcdFx0YmFyLnBsYWNlQmVoaW5kKEBzdGF0dXNCYXIpXG5cblx0aWYgc2V0dXAudGl0bGVDb2xvciA9PSBcImJsYWNrXCJcblx0XHRzZXR1cC50aXRsZUNvbG9yID0gbS51dGlscy5hdXRvQ29sb3Ioc2V0dXAuYmFja2dyb3VuZENvbG9yKS50b0hleFN0cmluZygpXG5cblx0aWYgc2V0dXAuYWN0aW9uQ29sb3IgPT0gXCJibGFja1wiXG5cdFx0c2V0dXAuYWN0aW9uQ29sb3IgPSBtLnV0aWxzLmF1dG9Db2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpLnRvSGV4U3RyaW5nKClcblxuXHRpZiB0eXBlb2Ygc2V0dXAudGl0bGUgPT0gXCJzdHJpbmdcIlxuXHRcdHRpdGxlID0gbmV3IG0uVGV4dFxuXHRcdFx0Y29sb3I6c2V0dXAudGl0bGVDb2xvclxuXHRcdFx0Zm9udFdlaWdodDpcInNlbWlib2xkXCJcblx0XHRcdHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRcdFx0dGV4dDpzZXR1cC50aXRsZVxuXHRcdFx0Zm9udFNpemU6MjBcblxuXG5cdCMgaWYgdHlwZW9mIHNldHVwLnRpdGxlID09IFwib2JqZWN0XCJcblx0IyBcdHRpdGxlID0gbmV3IG0uVGV4dCBzdHlsZTpcIm5hdkJhclRpdGxlXCIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOmJhckFyZWEsIHRleHQ6c2V0dXAudGl0bGUubGFiZWwuaHRtbFxuXHQjIFx0YmFyLnN1cGVyTGF5ZXIgPSBzZXR1cC50aXRsZS52aWV3XG5cblx0bS51dGlscy5zcGVjaWFsQ2hhcih0aXRsZSlcblxuXHR0aXRsZS5jb25zdHJhaW50cyA9XG5cdFx0Ym90dG9tOjEyXG5cdFx0bGVhZGluZzoxNlxuXG5cdGlmIHNldHVwLmxlZnRBY3Rpb25cblx0XHR0aXRsZS5jb25zdHJhaW50cy5sZWFkaW5nID0gNzNcblxuXHRtLmxheW91dC5zZXRcblx0XHR0YXJnZXQ6W3RpdGxlXVxuXG5cdGlmIHNldHVwLnRhYnMgJiYgc2V0dXAudGFicy5sZW5ndGggPiAyXG5cblx0XHRoYW5kbGVUYWJTdGF0ZXMgPSAoYmFyLCBsYXllcikgLT5cblx0XHRcdHRhYnNBcnJheSA9IE9iamVjdC5rZXlzKGJhci50YWJzKVxuXHRcdFx0Zm9yIHQgaW4gdGFic0FycmF5XG5cdFx0XHRcdHRhYiA9IGJhci50YWJzW3RdXG5cdFx0XHRcdGlmIHRhYiA9PSBiYXIuYWN0aXZlVGFiXG5cdFx0XHRcdFx0dGFiLmxhYmVsLm9wYWNpdHkgPSAxXG5cdFx0XHRcdFx0YmFyLmFjdGl2ZUJhci5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOih4OmxheWVyLngpXG5cdFx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRcdFx0XHRjdXJ2ZTpcImJlemllci1jdXJ2ZSguMiwgMC40LCAwLjQsIDEuMClcIlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGFiLmxhYmVsLm9wYWNpdHkgPSAuN1xuXG5cdFx0dGFic0FjdGl2ZUJhciA9IG5ldyBMYXllclxuXHRcdFx0aGVpZ2h0Om0ucHgoMilcblx0XHRcdHdpZHRoOm0uZGV2aWNlLndpZHRoLzNcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcInllbGxvd1wiXG5cdFx0XHRzdXBlckxheWVyOmJhclxuXHRcdHRhYnNBY3RpdmVCYXIuY29uc3RyYWludHMgPVxuXHRcdFx0Ym90dG9tOjBcblx0XHRiYXIuYWN0aXZlQmFyID0gdGFic0FjdGl2ZUJhclxuXG5cdFx0YmFyLnRhYnMgPSB7fVxuXHRcdGlmIHNldHVwLnRhYnMubGVuZ3RoID09IDNcblx0XHRcdGZvciB0LCBpIGluIHNldHVwLnRhYnNcblx0XHRcdFx0dGFiID0gbmV3IExheWVyXG5cdFx0XHRcdFx0d2lkdGg6bS5kZXZpY2Uud2lkdGgvM1xuXHRcdFx0XHRcdGhlaWdodDptLnB4KDQ4KVxuXHRcdFx0XHRcdHg6KG0uZGV2aWNlLndpZHRoLzMpICogaVxuXHRcdFx0XHRcdHN1cGVyTGF5ZXI6YmFyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdGNsaXA6dHJ1ZVxuXHRcdFx0XHR0YWIuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdG0ubGF5b3V0LnNldCh0YWIpXG5cdFx0XHRcdGlmIHNldHVwLnRhYnNDb2xvciA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRzZXR1cC50YWJzQ29sb3IgPSBtLnV0aWxzLmF1dG9Db2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpLnRvSGV4U3RyaW5nKClcblx0XHRcdFx0bGFiZWwgPSBuZXcgbS5UZXh0XG5cdFx0XHRcdFx0c3VwZXJMYXllcjp0YWJcblx0XHRcdFx0XHRjb25zdHJhaW50czp7YWxpZ246XCJjZW50ZXJcIn1cblx0XHRcdFx0XHR0ZXh0OnRcblx0XHRcdFx0XHR0ZXh0VHJhbnNmb3JtOidVcHBlcmNhc2UnXG5cdFx0XHRcdFx0Y29sb3I6c2V0dXAudGFic0NvbG9yXG5cblx0XHRcdFx0dGFiLmxhYmVsID0gbGFiZWxcblxuXHRcdFx0XHRzZXR1cC50YWJzSW5rW1wibGF5ZXJcIl0gPSB0YWJcblx0XHRcdFx0bS51dGlscy5pbmt5KHNldHVwLnRhYnNJbmspXG5cdFx0XHRcdGJhci50YWJzW3RdID0gdGFiXG5cblxuXHRcdFx0XHR0YWIub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRcdGJhci5hY3RpdmVUYWIgPSBAXG5cdFx0XHRcdFx0aGFuZGxlVGFiU3RhdGVzKGJhciwgQClcblxuXHRiYXIuYWN0aXZlVGFiID0gYmFyLnRhYnNbc2V0dXAudGFic1swXV1cblx0YmFyLnRpdGxlID0gdGl0bGVcblx0aGFuZGxlVGFiU3RhdGVzKGJhciwgc2V0dXAudGFic1swXSlcblxuXG5cdHJldHVybiBiYXJcbiIsIiMgQmFubmVyXG5tID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRhcHA6IFwiQXBwXCJcblx0dGl0bGU6XCJUaXRsZVwiXG5cdG1lc3NhZ2U6XCJNZXNzYWdlXCJcblx0YWN0aW9uOlwiQWN0aW9uXCJcblx0dGltZTpcIuKAoiBub3dcIlxuXHRpY29uOnVuZGVmaW5lZFxuXHRkdXJhdGlvbjo3XG5cdGFuaW1hdGVkOmZhbHNlXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRiYW5uZXIgPSBuZXcgTGF5ZXJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0bmFtZTpcImJhbm5lclwiXG5cdFx0c2hhZG93Q29sb3I6IFwicmdiYSgwLDAsMCwuMjQpXCJcblx0XHRzaGFkb3dCbHVyOiBtLnB4KDIpXG5cdFx0c2hhZG93WTogbS5weCgyKVxuXHRiYW5uZXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGhlaWdodDo3NFxuXG5cdCMgRGlmZmVyZW50IHBvc2l0aW9uaW5ncyBmb3IgZWFjaCBkZXZpY2Vcblx0c3dpdGNoIG0uZGV2aWNlLm5hbWVcblx0XHR3aGVuIFwiaXBhZFwiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAyMDBcblx0XHRcdEB0b3BJY29uID0gMTVcblx0XHRcdEB0b3BUaXRsZSA9IDExXG5cdFx0d2hlbiBcImlwYWQtcHJvXCJcblx0XHRcdEBsZWFkaW5nSWNvbiA9IDE5MlxuXHRcdFx0QHRvcEljb24gPSAxMlxuXHRcdFx0QHRvcFRpdGxlID0gOVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxNVxuXHRcdFx0QHRvcEljb24gPSAxMlxuXHRcdFx0QHRvcFRpdGxlID0gMTBcblx0XHRlbHNlXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxNVxuXHRcdFx0QHRvcEljb24gPSA4XG5cdFx0XHRAdG9wVGl0bGUgPSA2XG5cblx0aWYgc2V0dXAuaWNvbiA9PSB1bmRlZmluZWRcblx0XHRzZXR1cC5pY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YmFubmVyXG5cdFx0c2V0dXAuaWNvbi5zdHlsZVtcImJhY2tncm91bmRcIl0gPSBcImxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNjdGRjgxIDAlLCAjMDFCNDFGIDEwMCUpXCJcblx0ZWxzZVxuXHRcdGJhbm5lci5hZGRTdWJMYXllcihzZXR1cC5pY29uKVxuXG5cdHNldHVwLmljb24uYm9yZGVyUmFkaXVzID0gbS51dGlscy5weCg0LjUpXG5cdHNldHVwLmljb24ubmFtZSA9IFwiaWNvblwiXG5cdHNldHVwLmljb24uY29uc3RyYWludHMgPVxuXHRcdGhlaWdodDoxNlxuXHRcdHdpZHRoOjE2XG5cdFx0bGVhZGluZzpAbGVhZGluZ0ljb25cblx0XHR0b3A6QHRvcEljb25cblxuXHRhcHAgPSBuZXcgbS5UZXh0IHN0eWxlOlwiYXBwXCIsIHRleHQ6c2V0dXAuYXBwLCBjb2xvcjpcImJsdWVcIiwgZm9udFdlaWdodDpcIm1lZGl1bVwiLCBmb250U2l6ZToxMSwgc3VwZXJMYXllcjpiYW5uZXIsIG5hbWU6XCJ0aXRsZVwiXG5cdGFwcC5jb25zdHJhaW50cyA9XG5cdFx0dmVydGljYWxDZW50ZXI6c2V0dXAuaWNvblxuXHRcdGxlYWRpbmc6W3NldHVwLmljb24sIDVdXG5cdHRpdGxlID0gbmV3IG0uVGV4dCBzdHlsZTpcInRpdGxlXCIsIHRleHQ6c2V0dXAudGl0bGUsIGNvbG9yOlwiYmxhY2tcIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwidGl0bGVcIlxuXHR0aXRsZS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZ0VkZ2VzOnNldHVwLmljb25cblx0XHR0b3A6W3NldHVwLmljb24sIDddXG5cblx0bWVzc2FnZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJ0aXRsZVwiLCB0ZXh0OnNldHVwLm1lc3NhZ2UsIGNvbG9yOlwiZ3JleVwiLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjpiYW5uZXIsIG5hbWU6XCJ0aXRsZVwiXG5cdG1lc3NhZ2UuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmdFZGdlczpzZXR1cC5pY29uXG5cdFx0dG9wOlt0aXRsZSwgNV1cblxuXHR0aW1lID0gbmV3IG0uVGV4dCBzdHlsZTpcInRpbWVcIiwgdGV4dDpzZXR1cC50aW1lLCBjb2xvcjpcImdyZXlcIiwgZm9udFNpemU6MTEsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwidGltZVwiXG5cdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6W2FwcCwgM11cblx0XHRib3R0b21FZGdlczogYXBwXG5cblx0bS5sYXlvdXQuc2V0KClcblx0bS51dGlscy5iZ0JsdXIoYmFubmVyKVxuXG5cdCMjIEJhbm5lciBEcmFnIHNldHRpbmdzXG5cdGJhbm5lci5kcmFnZ2FibGUgPSB0cnVlXG5cdGJhbm5lci5kcmFnZ2FibGUuaG9yaXpvbnRhbCA9IGZhbHNlXG5cdGJhbm5lci5kcmFnZ2FibGUuY29uc3RyYWludHMgPVxuXHRcdHk6MFxuXG5cdGJhbm5lci5kcmFnZ2FibGUuYm91bmNlT3B0aW9ucyA9XG5cdCAgICBmcmljdGlvbjogMjVcblx0ICAgIHRlbnNpb246IDI1MFxuXG5cdGJhbm5lci5vbiBFdmVudHMuRHJhZ0VuZCwgLT5cblx0XHRpZiBiYW5uZXIubWF4WSA8IG0udXRpbHMucHgoNjgpXG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjE1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0VXRpbHMuZGVsYXkgLjI1LCAtPlxuXHRcdFx0XHRiYW5uZXIuZGVzdHJveSgpXG5cblx0IyBCdWZmZXIgdGhhdCBzaXRzIGFib3ZlIHRoZSBiYW5uZXJcblx0YmFubmVyQnVmZmVyID0gbmV3IExheWVyIG1heFk6MCwgbmFtZTpcImJ1ZmZlclwiLCBiYWNrZ3JvdW5kQ29sb3I6XCIjMUIxQjFDXCIsIG9wYWNpdHk6LjksIHN1cGVyTGF5ZXI6YmFubmVyLCB3aWR0aDptLmRldmljZS53aWR0aCwgbWF4WTpiYW5uZXIueSwgaGVpZ2h0Om0uZGV2aWNlLmhlaWdodFxuXHRtLnV0aWxzLmJnQmx1cihiYW5uZXJCdWZmZXIpXG5cblx0IyBBbmltYXRlLWluXG5cdGlmIHNldHVwLmFuaW1hdGVkID09IHRydWVcblx0XHRiYW5uZXIueSA9IDAgLSBiYW5uZXIuaGVpZ2h0XG5cdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KHk6MClcblx0XHRcdHRpbWU6LjI1XG5cdFx0XHRjdXJ2ZTpcInNwcmluZyg0MDAsMjAsMClcIlxuXG5cdCMgQW5pbWF0ZS1vdXRcblx0aWYgc2V0dXAuZHVyYXRpb25cblx0XHRVdGlscy5kZWxheSBzZXR1cC5kdXJhdGlvbiwgLT5cblx0XHRcdGJhbm5lci5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KG1heFk6MClcblx0XHRcdFx0dGltZTouMjVcblx0XHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24gKyAuMjUsIC0+XG5cdFx0XHRiYW5uZXIuZGVzdHJveSgpXG5cblx0IyBFeHBvcnQgQmFubmVyXG5cdGJhbm5lci5pY29uID0gc2V0dXAuaWNvblxuXHRiYW5uZXIuYXBwID0gYXBwXG5cdGJhbm5lci50aXRsZSA9IHRpdGxlXG5cdGJhbm5lci5tZXNzYWdlID0gbWVzc2FnZVxuXHRyZXR1cm4gYmFubmVyXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRcdHRleHQ6XCJ0ZXh0XCJcblx0XHR0eXBlOlwiZmxhdFwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGNvbG9yOlwidGVhbDMwMFwiXG5cdFx0Zm9udFNpemU6MTdcblx0XHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdFx0bmFtZTpcImJ1dHRvblwiXG5cdFx0Ymx1cjp0cnVlXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHRjb25zdHJhaW50czp1bmRlZmluZWRcblx0XHRpY29uOlwic3RhclwiXG5cdFx0Y2xpcDp0cnVlXG5cdFx0aW5rOnVuZGVmaW5lZFxuXHR9XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdGJ1dHRvbiA9IG5ldyBMYXllclxuXHRcdG5hbWU6c2V0dXAubmFtZVxuXHRcdGNsaXA6c2V0dXAuY2xpcFxuXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXJcblx0XHRzZXR1cC5zdXBlckxheWVyLmFkZFN1YkxheWVyKGJ1dHRvbilcblxuXHRzd2l0Y2ggc2V0dXAudHlwZVxuXHRcdHdoZW4gXCJmbG9hdGluZ1wiXG5cdFx0XHRidXR0b24uY29uc3RyYWludHMgPVxuXHRcdFx0XHQgd2lkdGg6NTZcblx0XHRcdFx0IGhlaWdodDo1NlxuXHRcdFx0XHQgYm90dG9tOjY0XG5cdFx0XHRcdCB0cmFpbGluZzoxN1xuXHRcdFx0aWYgbS5kZXZpY2Uuc2NhbGUgPCA0XG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cy53aWR0aCA9IDY0XG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cy5oZWlnaHQgPSA2NFxuXHRcdFx0YnV0dG9uLmJvcmRlclJhZGl1cyA9IG0ucHgoMzIpXG5cdFx0XHRidXR0b24uc2hhZG93Q29sb3IgPSBcInJnYmEoMCwwLDAsLjEyKVwiXG5cdFx0XHRidXR0b24uc2hhZG93WSA9IG0ucHgoMilcblx0XHRcdGJ1dHRvbi5zaGFkb3dCbHVyID0gbS5weCg2KVxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IG0uY29sb3Ioc2V0dXAuYmFja2dyb3VuZENvbG9yKVxuXHRcdFx0aWYgdHlwZW9mIHNldHVwLmljb24gPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRpY29uID0gbS5JY29uXG5cdFx0XHRcdFx0bmFtZTpzZXR1cC5pY29uXG5cdFx0XHRcdFx0Y29sb3I6bS5jb2xvcihzZXR1cC5jb2xvcilcblx0XHRcdFx0XHRzdXBlckxheWVyOmJ1dHRvblxuXHRcdFx0XHRcdGNvbnN0cmFpbnRzOnthbGlnbjpcImNlbnRlclwifVxuXG5cdFx0XHRtLmxheW91dC5zZXRcblx0XHRcdFx0dGFyZ2V0OltidXR0b25dXG5cdFx0XHRtLmxheW91dC5zZXRcblx0XHRcdFx0dGFyZ2V0OltpY29uXVxuXHRcdGVsc2Vcblx0XHRcdGxhYmVsID0gbmV3IG0uVGV4dFxuXHRcdFx0XHR0ZXh0OnNldHVwLnRleHRcblx0XHRcdFx0c3VwZXJMYXllcjpidXR0b25cblx0XHRcdFx0dGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiXG5cdFx0XHRcdGNvbG9yOnNldHVwLmNvbG9yXG5cdFx0XHRcdGZvbnRTaXplOjE0XG5cdFx0XHRcdGxpbmVIZWlnaHQ6MTRcblx0XHRcdFx0Zm9udFdlaWdodDo1MDBcblx0XHRcdGxhYmVsLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdFx0YnV0dG9uLnByb3BzID1cblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOm0uY29sb3Ioc2V0dXAuYmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRoZWlnaHQ6bS5weCgzNilcblx0XHRcdFx0d2lkdGg6bGFiZWwud2lkdGggKyBtLnB4KDE2KVxuXHRcdFx0XHRib3JkZXJSYWRpdXM6bS5weCgyKVxuXHRcdFx0XHRjbGlwOnNldHVwLmNsaXBcblxuXHRcdFx0c3dpdGNoIHNldHVwLnR5cGVcblx0XHRcdFx0d2hlbiBcInJhaXNlZFwiXG5cdFx0XHRcdFx0YnV0dG9uLm9yaWdCR0MgPSBidXR0b24uYmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0YnV0dG9uLnNoYWRvd0NvbG9yID0gXCJyZ2JhKDAsMCwwLC4yNClcIlxuXHRcdFx0XHRcdGJ1dHRvbi5zaGFkb3dZID0gbS5weCgyKVxuXHRcdFx0XHRcdGJ1dHRvbi5zaGFkb3dCbHVyID0gbS5weCgyKVxuXHRcdFx0XHRcdHByZXNzZWRCR0MgPSBidXR0b24uYmFja2dyb3VuZENvbG9yLmxpZ2h0ZW4oMTApXG5cdFx0XHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6cHJlc3NlZEJHQ1xuXHRcdFx0XHRcdFx0XHRcdHNoYWRvd1k6bS5weCg4KVxuXHRcdFx0XHRcdFx0XHRcdHNoYWRvd0JsdXI6bS5weCg4KVxuXHRcdFx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYnV0dG9uLm9yaWdCR0Ncblx0XHRcdFx0XHRcdFx0XHRzaGFkb3dZOm0ucHgoMilcblx0XHRcdFx0XHRcdFx0XHRzaGFkb3dCbHVyOm0ucHgoMilcblx0XHRcdFx0d2hlbiBcImZsYXRcIlxuXHRcdFx0XHRcdGJ1dHRvbi5vcmlnQkdDID0gYnV0dG9uLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdHByZXNzZWRCR0MgPSBidXR0b24uYmFja2dyb3VuZENvbG9yLmRhcmtlbig1KVxuXHRcdFx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOnByZXNzZWRCR0Ncblx0XHRcdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbi5vcmlnQkdDXG5cblxuXHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzID0gc2V0dXAuY29uc3RyYWludHNcblxuXHRcdFx0bS5sYXlvdXQuc2V0XG5cdFx0XHRcdHRhcmdldDpbYnV0dG9uLCBsYWJlbF1cblxuXHRpZiBzZXR1cC5pbmtcblx0XHRwYXNzZWRJbmsgPSBzZXR1cC5pbmtcblx0XHRwYXNzZWRJbmsubGF5ZXIgPSBidXR0b25cblxuXHRcdG0udXRpbHMuaW5reShwYXNzZWRJbmspXG5cblxuXG5cblx0cmV0dXJuIGJ1dHRvblxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9XG5cdGZpZWxkOlxuXHRcdGlzRWRpdGluZzpmYWxzZVxuXHRcdGN1cnNvcjp7fVxuXHRcdGJvcmRlclJhZGl1czo1XG5cdFx0Ym9yZGVyV2lkdGg6MFxuXHRcdGJvcmRlckNvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGNvbG9yOlwiIzA5MDkwOFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwiI0ZGRlwiXG5cdFx0cmV0dXJuVGV4dDpcInJldHVyblwiXG5cdFx0cmV0dXJuQ29sb3I6XCJsaWdodC1rZXlcIlxuXHRcdHN0eWxlOlwibGlnaHRcIlxuXHRcdHR5cGU6XCJmaWVsZFwiXG5cdFx0Y29uc3RyYWludHM6dW5kZWZpbmVkXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHR3aWR0aDoyNThcblx0XHRoZWlnaHQ6MzBcblx0XHRmb250U2l6ZToxNVxuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRwbGFjZWhvbGRlclRleHQ6XCJwbGFjZWhvbGRlclRleHRcIlxuXHRcdHBsYWNlaG9sZGVyQ29sb3I6XCIjODA4MDgwXCJcblx0XHR0ZXh0OlwiXCJcblx0XHR0ZXh0Q29uc3RyYWludHM6e2FsaWduOlwidmVydGljYWxcIiwgbGVhZGluZzo4fVxuXHRcdGlucHV0OnRydWVcblx0Y3Vyc29yOlxuXHRcdGNvbG9yOlwiYmx1ZVwiXG5cdFx0aGVpZ2h0OjIwXG5cdFx0d2lkdGg6MVxuXG5cbmV4cG9ydHMuZGVmYXVsdHMuZmllbGQucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmZpZWxkKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzLmZpZWxkKVxuXHRmaWVsZCA9IG5ldyBMYXllciBib3JkZXJSYWRpdXM6bS51dGlscy5weChzZXR1cC5ib3JkZXJSYWRpdXMpLCBiYWNrZ3JvdW5kQ29sb3I6c2V0dXAuYmFja2dyb3VuZENvbG9yLCB3aWR0aDptLnV0aWxzLnB4KHNldHVwLndpZHRoKSwgaGVpZ2h0Om0udXRpbHMucHgoc2V0dXAuaGVpZ2h0KVxuXHRpZiBzZXR1cC5jb25zdHJhaW50c1xuXHRcdGZpZWxkLmNvbnN0cmFpbnRzID1cblx0XHRcdHNldHVwLmNvbnN0cmFpbnRzXG5cdGZpZWxkLmFjdGl2ZSA9IGZhbHNlXG5cdHRleHQgPSBuZXcgbS5UZXh0IHN0eWxlOlwiZmllbGRUZXh0XCIsIHN1cGVyTGF5ZXI6ZmllbGQsIHRleHQ6c2V0dXAudGV4dCwgZm9udFNpemU6c2V0dXAuZm9udFNpemUsIGZvbnRXZWlnaHQ6c2V0dXAuZm9udFdlaWdodCwgY29sb3I6c2V0dXAuY29sb3Jcblx0aWYgc2V0dXAudGV4dENvbnN0cmFpbnRzXG5cdFx0dGV4dC5jb25zdHJhaW50cyA9XG5cdFx0XHRzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0ZmllbGQudGV4dCA9IHRleHRcblxuXHRpZiBzZXR1cC5zdXBlckxheWVyXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihmaWVsZClcblxuXG5cblxuXHQjI0hhbmRsZSBrZXlwcmVzc1xuXHR0ZXh0Lm9uIFwiY2hhbmdlOmh0bWxcIiwgLT5cblx0XHRpZiB0ZXh0Lmh0bWwgPT0gXCJcIlxuXHRcdFx0ZmllbGQuY3Vyc29yLmNvbnN0cmFpbnRzID0ge2FsaWduOlwidmVydGljYWxcIiwgbGVhZGluZzo4fVxuXHRcdGVsc2Vcblx0XHRcdGZpZWxkLmN1cnNvci5jb25zdHJhaW50cyA9IHthbGlnbjpcInZlcnRpY2FsXCIsIHRyYWlsaW5nRWRnZXM6dGV4dH1cblx0XHRpZiBmaWVsZC5wbGFjZWhvbGRlclxuXHRcdFx0ZmllbGQucGxhY2Vob2xkZXIudmlzaWJsZSA9IGZhbHNlXG5cblx0aWYgc2V0dXAudGV4dCA9PSBcIlwiIHx8IHNldHVwLnRleHQgPT0gdW5kZWZpbmVkXG5cdFx0cGxhY2Vob2xkZXIgPSBuZXcgbS5UZXh0IHN0eWxlOlwiZmllbGRQbGFjZWhvbGRlclwiLCBzdXBlckxheWVyOmZpZWxkLCB0ZXh0OnNldHVwLnBsYWNlaG9sZGVyVGV4dCwgZm9udFNpemU6c2V0dXAuZm9udFNpemUsIGZvbnRXZWlnaHQ6c2V0dXAuZm9udFdlaWdodCwgY29sb3I6c2V0dXAucGxhY2Vob2xkZXJDb2xvclxuXHRcdGlmIHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRcdFx0cGxhY2Vob2xkZXIuY29uc3RyYWludHMgPVxuXHRcdFx0XHRzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0XHRmaWVsZC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG5cblx0ZmllbGQub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdGZpZWxkLmFjdGl2ZSA9IHRydWVcblx0XHR0ZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0Y2xpY2tab25lID0gbmV3IExheWVyIG5hbWU6XCJmaWVsZEFjdGl2ZVwiLCBvcGFjaXR5OjBcblx0XHRpZiBzZXR1cC5pbnB1dFxuXHRcdFx0a2V5Ym9hcmQgPSBuZXcgbS5LZXlib2FyZCBhbmltYXRlZDp0cnVlLCBvdXRwdXQ6ZmllbGQsIHJldHVyblRleHQ6c2V0dXAucmV0dXJuVGV4dCwgcmV0dXJuQ29sb3I6c2V0dXAucmV0dXJuQ29sb3Jcblx0XHRcdGZpZWxkLmtleWJvYXJkID0ga2V5Ym9hcmRcblx0XHRcdGNsaWNrWm9uZS5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHRvcDowXG5cdFx0XHRcdGJvdHRvbTprZXlib2FyZC5zcGVjcy5oZWlnaHRcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRlbHNlXG5cdFx0XHRjbGlja1pvbmUuY29uc3RyYWludHMgPVxuXHRcdFx0XHR0b3A6MFxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXG5cdFx0Y2xpY2tab25lLm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGhhbmRsZXIpIC0+XG5cdFx0XHRmaWVsZC5rZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KHk6bS5kZXZpY2UuaGVpZ2h0KVxuXHRcdFx0XHR0aW1lOi40XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0VXRpbHMuZGVsYXkgLjUsIC0+XG5cdFx0XHRcdGZpZWxkLmtleWJvYXJkLmRlc3Ryb3koKVxuXHRcdFx0XHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0XHRjbGlja1pvbmUuZGVzdHJveSgpXG5cdFx0ZmllbGQuY2xpY2tab25lID0gY2xpY2tab25lXG5cblx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRmaWVsZC5rZXlib2FyZC5rZXlzLmRpc21pc3Mub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRmaWVsZC5rZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooeTptLmRldmljZS5oZWlnaHQpXG5cdFx0XHRcdFx0dGltZTouNFxuXHRcdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRVdGlscy5kZWxheSAuNSwgLT5cblx0XHRcdFx0XHRmaWVsZC5rZXlib2FyZC5kZXN0cm95KClcblx0XHRcdFx0XHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0XHRcdGNsaWNrWm9uZS5kZXN0cm95KClcblxuXG5cdFx0IyMgRGVmYXVsdCBDdXJzb3Jcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoc2V0dXAuY3Vyc29yKVxuXHRcdGlmIGtleXMubGVuZ3RoIDwgMVxuXHRcdFx0c2V0dXAuY3Vyc29yLmNvbnN0cmFpbnRzID0ge2FsaWduOlwidmVydGljYWxcIiwgbGVhZGluZzo4fVxuXHRcdFx0c2V0dXAuY3Vyc29yLndpZHRoID0gMlxuXHRcdFx0c2V0dXAuY3Vyc29yLmhlaWdodCA9IDIwXG5cblx0XHRpZiBmaWVsZC5jdXJzb3IgPT0gdW5kZWZpbmVkXG5cdFx0XHRsaXN0ZW5Ub0tleXMoZmllbGQsIGtleWJvYXJkKVxuXHRcdFx0Y3Vyc29yID0gbmV3IExheWVyIHdpZHRoOm0udXRpbHMucHgoc2V0dXAuY3Vyc29yLndpZHRoKSwgaGVpZ2h0Om0udXRpbHMucHgoc2V0dXAuY3Vyc29yLmhlaWdodCksIHN1cGVyTGF5ZXI6ZmllbGQsIG5hbWU6XCJjdXJzb3JcIiwgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJibHVlXCIpLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCgxKVxuXHRcdFx0ZmllbGQuY3Vyc29yID0gY3Vyc29yXG5cdFx0XHRjdXJzb3IuY29uc3RyYWludHMgPVxuXHRcdFx0XHRzZXR1cC5jdXJzb3IuY29uc3RyYWludHNcblxuXHRcdFx0VXRpbHMuaW50ZXJ2YWwgLjUsIC0+XG5cdFx0XHRcdGlmIGZpZWxkLmFjdGl2ZSA9PSB0cnVlXG5cdFx0XHRcdFx0aWYgZmllbGQuY3Vyc29yLm9wYWNpdHkgPT0gMFxuXHRcdFx0XHRcdFx0ZmllbGQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZmllbGQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTowKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRmaWVsZC5jdXJzb3Iub3BhY2l0eSA9IDBcblx0XHRtLmxheW91dC5zZXQoKVxuXG5cdG0ubGF5b3V0LnNldCgpXG5cdHJldHVybiBmaWVsZFxuXG5cblxuXG5saXN0ZW5Ub0tleXMgPSAoZmllbGQsIGtleWJvYXJkKSAtPlxuXHRrZXlwcmVzcyA9IChrZXkpIC0+XG5cdFx0b3JpZ2luYWxDb2xvciA9IGtleS5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRzd2l0Y2gga2V5Lm5hbWVcblx0XHRcdHdoZW4gXCJzaGlmdFwiXG5cdFx0XHRcdGtleS5pY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblx0XHRcdFx0a2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0d2hlbiBcImRlbGV0ZVwiXG5cdFx0XHRcdGtleS5pY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblx0XHRcdFx0a2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0XHRrZXkuaWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cdFx0XHR3aGVuIFwic3BhY2VcIlxuXHRcdFx0XHRrZXkuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpZiBtLmRldmljZS5uYW1lICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRib3hLZXkgPSBrZXkubmFtZVxuXHRcdFx0XHRcdGlmIGlzU2hpZnRcblx0XHRcdFx0XHRcdGJveEtleSA9IGJveEtleS50b1VwcGVyQ2FzZSgpXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAuYm94Lmh0bWwgPSBib3hLZXlcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC5tYXhZID0ga2V5Lm1heFlcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC5taWRYID0ga2V5Lm1pZFhcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGtleS5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSlcblx0XHRcdFx0XHRcdHRpbWU6LjJcblxuXHRpc0NvbW1hbmQgPSBmYWxzZVxuXHRhbGxTZWxlY3RlZCA9IGZhbHNlXG5cdGlzU2hpZnQgPSBmYWxzZVxuXHRjb2RlcyA9IHsgMTM6XCI8YnI+XCIsIDMyOlwiJm5ic3A7XCIsIDMzOlwiIVwiLCAzNDpcIlxcXCJcIiwgMzU6XCIjXCIsIDM2OlwiJFwiLCAzNzpcIiVcIiwgMzg6XCImXCIsIDM5OlwiXFwnXCIsIDQwOlwiKFwiLCA0MTpcIilcIiwgNDI6XCIqXCIsIDQzOlwiK1wiLCA0NDpcIixcIiwgNDU6XCItXCIsIDQ3OlwiL1wiLCA0NjpcIi5cIiwgNDg6XCIwXCIsIDQ5OlwiMVwiLCA1MDpcIjJcIiwgNTE6XCIzXCIsIDUyOlwiNFwiLCA1MzpcIjVcIiwgNTQ6XCI2XCIsIDU1OlwiN1wiLCA1NjpcIjhcIiwgNTc6XCI5XCIsIDU4OlwiOlwiLCA1OTpcIjtcIiwgNjA6XCI8XCIsIDYxOlwiPVwiLCA2MjpcIj5cIiwgNjM6XCI/XCIsIDY0OlwiQFwiLCA2NTpcIkFcIiwgNjY6XCJCXCIsIDY3OlwiQ1wiLCA2ODpcIkRcIiwgNjk6XCJFXCIsIDcwOlwiRlwiLCA3MTpcIkdcIiwgNzI6XCJIXCIsIDczOlwiSVwiLCA3NDpcIkpcIiwgNzU6XCJLXCIsIDc2OlwiTFwiLCA3NzpcIk1cIiwgNzg6XCJOXCIsIDc5OlwiT1wiLCA4MDpcIlBcIiwgODE6XCJRXCIsIDgyOlwiUlwiLCA4MzpcIlNcIiwgODQ6XCJUXCIsIDg1OlwiVVwiLCA4NjpcIlZcIiwgODc6XCJXXCIsIDg4OlwiWFwiLCA4OTpcIllcIiwgOTA6XCJaXCIsIDkxOlwiW1wiLCA5MjpcIlxcXFxcIiwgOTM6XCJdXCIsIDk0OlwiXlwiLCA5NTpcIl9cIiwgOTY6XCJgXCIsIDk3OlwiYVwiLCA5ODpcImJcIiwgOTk6XCJjXCIsIDEwMDpcImRcIiwgMTAxOlwiZVwiLCAxMDI6XCJmXCIsIDEwMzpcImdcIiwgMTA0OlwiaFwiLCAxMDU6XCJpXCIsIDEwNjpcImpcIiwgMTA3Olwia1wiLCAxMDg6XCJsXCIsIDEwOTpcIm1cIiwgMTEwOlwiblwiLCAxMTE6XCJvXCIsIDExMjpcInBcIiwgMTEzOlwicVwiLCAxMTQ6XCJyXCIsIDExNTpcInNcIiwgMTE2OlwidFwiLCAxMTc6XCJ1XCIsIDExODpcInZcIiwgMTE5Olwid1wiLCAxMjA6XCJ4XCIsIDEyMTpcInlcIiwgMTIyOlwielwiLCAxMjM6XCJ7XCIsIDEyNDpcInxcIiwgMTI1OlwifVwiLCAxMjY6XCJ+XCJ9XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5ZG93bicsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDI3XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRrZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooeTptLmRldmljZS5oZWlnaHQpXG5cdFx0XHRcdFx0dGltZTouMjVcblx0XHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0ZmllbGQuY2xpY2tab25lLmRlc3Ryb3koKVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDE2XG5cdFx0XHRcdGlzU2hpZnQgPSB0cnVlXG5cdFx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdFx0a2V5cHJlc3Moa2V5Ym9hcmQua2V5cy5zaGlmdClcblx0XHRcdFx0XHRmb3IgayBpbiBrZXlib2FyZC5rZXlzQXJyYXlcblx0XHRcdFx0XHRcdGsuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9IFwidXBwZXJjYXNlXCJcblx0XHRcdGlmIGFsbFNlbGVjdGVkID09IHRydWVcblx0XHRcdFx0aWYgZS5rZXlDb2RlID09IDM3IHx8IGUua2V5Q29kZSA9PSAzOVxuXHRcdFx0XHRcdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDkxXG5cdFx0XHRcdGlzQ29tbWFuZCA9IHRydWVcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAxM1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5yZXR1cm4uYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblx0XHRcdGlmIGUua2V5Q29kZSA9PSA4XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdGtleXByZXNzKGtleWJvYXJkLmtleXMuZGVsZXRlKVxuXHRcdFx0XHRpZiBhbGxTZWxlY3RlZCA9PSB0cnVlXG5cdFx0XHRcdFx0bS51dGlscy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6XCJcIl0pXG5cdFx0XHRcdFx0ZmllbGQudGV4dC5iYWNrZ3JvdW5kQ29sb3IgPVwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0XHRcdFx0aW5pdGlhbExlbmd0aCA9IGZpZWxkLnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdFx0bmV3VGV4dCA9IGZpZWxkLnRleHQuaHRtbC5zbGljZSgwLCAtMSlcblx0XHRcdFx0bS51dGlscy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRcdGVuZExlbmd0aCA9IGZpZWxkLnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdFx0aWYgaW5pdGlhbExlbmd0aCA9PSBlbmRMZW5ndGhcblx0XHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sLnNsaWNlKDAsIC02KVxuXHRcdFx0XHRcdG0udXRpbHMudXBkYXRlKGZpZWxkLnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0XHRpZiBmaWVsZC50ZXh0Lmh0bWwgPT0gXCJcIlxuXHRcdFx0XHRcdGZpZWxkLnBsYWNlaG9sZGVyLnZpc2libGUgPSB0cnVlXG5cblx0XHRcdFx0IyBHZXQgcmlkIG9mICYgbmJzcDtcblxuXHRcdFx0XHRmaWVsZC52YWx1ZSA9IG0udXRpbHMuY2xlYW4obmV3VGV4dClcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdrZXl1cCcsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDEzICYmIGtleWJvYXJkXG5cdFx0XHRcdGtleWJvYXJkLmtleXMucmV0dXJuLmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAzMiAmJiBrZXlib2FyZFxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLnNwYWNlLmJhY2tncm91bmRDb2xvciA9IFwiV2hpdGVcIlxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDggJiYga2V5Ym9hcmRcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5kZWxldGUuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdHRpbWU6LjFcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5kZWxldGUuaWNvbi5zdGF0ZXMuc3dpdGNoKFwib2ZmXCIpXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gOTFcblx0XHRcdFx0aXNDb21tYW5kID0gZmFsc2Vcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAxNlxuXHRcdFx0XHRpc1NoaWZ0ID0gZmFsc2Vcblx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRmb3IgayBpbiBrZXlib2FyZC5rZXlzQXJyYXlcblx0XHRcdFx0XHRcdGsuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9IFwibG93ZXJjYXNlXCJcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlzLnNoaWZ0LmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdFx0dGltZTouMlxuXHRcdFx0XHRcdGtleWJvYXJkLmtleXMuc2hpZnQuaWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRpZiBlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwXG5cdFx0XHRcdGlmIGtleWJvYXJkICYmIG0uZGV2aWNlLmFubWUgIT0gXCJpcGFkXCJcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGsgPSBrZXlib2FyZC5rZXlzW2NvZGVzW2Uua2V5Q29kZV0udG9Mb3dlckNhc2UoKV1cblx0XHRcdFx0XHRrLmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIpXG5cdFx0XHRcdFx0XHR0aW1lOi4yXG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5cHJlc3MnLCAoZSkgLT5cblx0XHRpZiBmaWVsZC5hY3RpdmVcblx0XHRcdGNoYXIgPSBjb2Rlc1tlLmtleUNvZGVdXG5cdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRrZXkgPSBrZXlib2FyZC5rZXlzW2NoYXJdXG5cdFx0XHRpZiBpc0NvbW1hbmQgPT0gdHJ1ZVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPT0gOTdcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMTgsIDI1NSwgLjIpXCJcblx0XHRcdFx0XHRhbGxTZWxlY3RlZCA9IHRydWVcblxuXHRcdFx0aWYgaXNDb21tYW5kID09IGZhbHNlXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwXG5cdFx0XHRcdFx0Y2hhcjIgPSBjaGFyLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdFx0a2V5ID0ga2V5Ym9hcmQua2V5c1tjaGFyMl1cblx0XHRcdFx0XHRcdGtleXByZXNzKGtleSlcblxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPj0gOTcgJiYgZS5rZXlDb2RlIDw9IDEyMiB8fCBlLmtleUNvZGUgPT0gMzJcblx0XHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdFx0a2V5cHJlc3Moa2V5KVxuXG5cdFx0XHRcdGlmIGUua2V5Q29kZSA+IDMxXG5cdFx0XHRcdFx0bmV3VGV4dCA9IGZpZWxkLnRleHQuaHRtbCArIGNoYXJcblx0XHRcdFx0XHRtLnV0aWxzLnVwZGF0ZShmaWVsZC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdFx0XHRmaWVsZC52YWx1ZSA9IG0udXRpbHMuY2xlYW4obmV3VGV4dClcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG4gIG5hbWU6IFwic3RhclwiXG4gIHNjYWxlOiBtLmRldmljZS5zY2FsZVxuICBjb2xvcjogbS5jb2xvcihcImJsYWNrXCIpXG4gIHN1cGVyTGF5ZXI6IHVuZGVmaW5lZFxuICBjb25zdHJhaW50czogdW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cbiAgc2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuICBpY29uTGF5ZXIgPSBuZXcgTGF5ZXJcbiAgICBodG1sOlwiPGkgY2xhc3M9J21hdGVyaWFsLWljb25zIG1kLTI0Jz4je3NldHVwLm5hbWV9PC9pPlwiXG4gICAgY29sb3I6c2V0dXAuY29sb3JcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gICAgY2xpcDp0cnVlXG4gICAgbmFtZTpcImljb25cIlxuICBmcmFtZSA9IG0udXRpbHMudGV4dEF1dG9TaXplKGljb25MYXllcilcbiAgaWNvbkxheWVyLmh0bWwgPSBcIjxzcGFuIHN0eWxlPSctd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoI3tzZXR1cC5zY2FsZX0pOyBwb3NpdGlvbjogYWJzb2x1dGU7Jz5cIiArIGljb25MYXllci5odG1sXG4gIGljb25MYXllci53aWR0aCA9IG0ucHgoZnJhbWUud2lkdGgpXG4gIGljb25MYXllci5oZWlnaHQgPSBtLnB4KGZyYW1lLmhlaWdodClcblxuICBzdHlsZXMgPSB7XG4gICAgYm90dG9tIDogXCIxMHB4XCJcbiAgICByaWdodDogZnJhbWUud2lkdGggKyBcInB4XCJcbiAgICBmb250U2l6ZSA6IG0ucHgoZnJhbWUuaGVpZ2h0KSArIFwicHhcIlxuICB9XG4gIHN3aXRjaCBtLmRldmljZS5zY2FsZVxuICAgIHdoZW4gNFxuICAgICAgc3R5bGVzLmZvbnRTaXplID0gIG0ucHgoZnJhbWUuaGVpZ2h0KS8xLjUgKyBcInB4XCJcbiAgICAgIHN0eWxlcy5ib3R0b20gPSBtLnB4KGZyYW1lLmhlaWdodCkgKyBcInB4XCJcbiAgICAgIHN0eWxlcy5yaWdodCA9IGZyYW1lLndpZHRoLzIuMjUgKyBcInB4XCJcbiAgICB3aGVuIDNcbiAgICAgIHN0eWxlcy5mb250U2l6ZSA9ICBtLnB4KGZyYW1lLmhlaWdodCkvMS4yICsgXCJweFwiXG5cbiAgaWNvbkxheWVyLnN0eWxlID1cbiAgICBcImRpc3BsYXlcIiA6IFwiaW5saW5lLWJsb2NrXCJcbiAgICBcImZvbnQtc2l6ZVwiIDogc3R5bGVzLmZvbnRTaXplXG4gICAgXCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiXG4gICAgXCJwYWRkaW5nLXJpZ2h0XCIgOiBzdHlsZXMucmlnaHRcbiAgICBcInBhZGRpbmctYm90dG9tXCIgOiBzdHlsZXMuYm90dG9tXG5cbiAgaWYgc2V0dXAuc3VwZXJMYXllclxuICAgIGljb25MYXllci5zdXBlckxheWVyID0gc2V0dXAuc3VwZXJMYXllclxuXG4gIGlmIHNldHVwLmNvbnN0cmFpbnRzXG4gICAgaWNvbkxheWVyLmNvbnN0cmFpbnRzID0gc2V0dXAuY29uc3RyYWludHNcbiAgICBtLmxheW91dC5zZXRcbiAgICAgIHRhcmdldDppY29uTGF5ZXJcblxuICByZXR1cm4gaWNvbkxheWVyXG4iLCJtID0gcmVxdWlyZSBcIm1hdGVyaWFsLWtpdFwiXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdFx0cmV0dXJuVGV4dDpcInJldHVyblwiXG5cdFx0cmV0dXJuQ29sb3I6XCJsaWdodC1rZXlcIlxuXHRcdGFuaW1hdGVkOmZhbHNlXG5cdFx0b3V0cHV0OnVuZGVmaW5lZFxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuI1NldHMgc3BlY2lmaWNhdGlvbnMgZm9yIHRoZSBLZXlib2FyZCBiYXNlZCBvbiB0aGUgZnJhbWVcbmJvYXJkU3BlY3NPYmplY3QgPVxuXHRcImlwaG9uZS01XCI6XG5cdFx0aGVpZ2h0OjIxNVxuXHRcdGtleTpcblx0XHRcdHdpZHRoOiBtLnV0aWxzLnB4KDI2KVxuXHRcdFx0aGVpZ2h0OiBtLnV0aWxzLnB4KDM5KVxuXHRcdGV4cGFuZGVkS2V5OiBtLnV0aWxzLnB4KDM5KVxuXHRcdGV4cGFuZGVkU3BhY2VyOiBtLnV0aWxzLnB4KDEyKVxuXHRcdHBhZGRpbmc6XG5cdFx0XHRyb3cxOiBtLnV0aWxzLnB4KDMpXG5cdFx0XHRyb3cyOiBtLnV0aWxzLnB4KDE5KVxuXHRcdFx0cm93MzogbS51dGlscy5weCg1NClcblx0XHRtYXJnaW5Ub3A6XG5cdFx0XHRyb3cxOiBtLnV0aWxzLnB4KDExKVxuXHRcdFx0cm93MjogbS51dGlscy5weCgyNilcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoNDEpXG5cdFx0XHRyb3c0OiBtLnV0aWxzLnB4KDU1KVxuXHRcdHNoaWZ0SWNvbjoge3g6bS51dGlscy5weCg5KSwgeTptLnV0aWxzLnB4KDIpfVxuXHRcdGRlbGV0ZUljb246IHt4Om0udXRpbHMucHgoNyksIHk6bS51dGlscy5weCgxMCl9XG5cdFx0ZW1vamlJY29uOiB7eDptLnV0aWxzLnB4KDgpLCB5Om0udXRpbHMucHgoOSl9XG5cdFx0c2lkZUtleTogbS51dGlscy5weCgzNi41KVxuXHRcdHNpZGVLZXlSYWRpdXM6IG0udXRpbHMucHgoNClcblx0XHRzaWRlS2V5Qm90dG9tOiBtLnV0aWxzLnB4KDU4KVxuXHRcdGlQYWREZWxldGVPZmZzZXQ6IDBcblx0XHRib3R0b21Sb3c6IDhcblx0XHRyZXR1cm5LZXk6IG0udXRpbHMucHgoNzQpXG5cdFx0c3BhY2VyOiBtLnV0aWxzLnB4KDYpXG5cdFx0a2V5UG9wVXA6XG5cdFx0XHR3aWR0aDo0OVxuXHRcdFx0aGVpZ2h0Ojg2XG5cdFx0XHRib3hUb3A6MFxuXHRcdHBhdGhPZmZTZXQ6XG5cdFx0XHR4Oi03XG5cdFx0XHR5Oi01XG5cdFwiaXBob25lLTZzXCI6XG5cdFx0aGVpZ2h0OjIxNlxuXHRcdGtleTpcblx0XHRcdHdpZHRoOiBtLnV0aWxzLnB4KDMxLjUpXG5cdFx0XHRoZWlnaHQ6IG0udXRpbHMucHgoNDIpXG5cdFx0ZXhwYW5kZWRLZXk6IG0udXRpbHMucHgoNDYuNSlcblx0XHRleHBhbmRlZFNwYWNlcjogbS51dGlscy5weCgxNClcblx0XHRwYWRkaW5nOlxuXHRcdFx0cm93MTogbS51dGlscy5weCgzKVxuXHRcdFx0cm93MjogbS51dGlscy5weCgyMilcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoNTkpXG5cdFx0bWFyZ2luVG9wOlxuXHRcdFx0cm93MTogbS51dGlscy5weCgxMClcblx0XHRcdHJvdzI6IG0udXRpbHMucHgoMjIpXG5cdFx0XHRyb3czOiBtLnV0aWxzLnB4KDM0KVxuXHRcdFx0cm93NDogbS51dGlscy5weCg0NClcblx0XHRzaGlmdEljb246IHt4Om0udXRpbHMucHgoMTEpLCB5Om0udXRpbHMucHgoMil9XG5cdFx0ZGVsZXRlSWNvbjoge3g6bS51dGlscy5weCgxMCksIHk6bS51dGlscy5weCgxMyl9XG5cdFx0ZW1vamlJY29uOiB7eDptLnV0aWxzLnB4KDExKSwgeTptLnV0aWxzLnB4KDExKX1cblx0XHRzaWRlS2V5OiBtLnV0aWxzLnB4KDQyKVxuXHRcdHNpZGVLZXlSYWRpdXM6IG0udXRpbHMucHgoNSlcblx0XHRzaWRlS2V5Qm90dG9tOiBtLnV0aWxzLnB4KDU2KVxuXHRcdGlQYWREZWxldGVPZmZzZXQ6IDBcblx0XHRib3R0b21Sb3c6IDZcblx0XHRyZXR1cm5LZXk6IG0udXRpbHMucHgoODcuNSlcblx0XHRzcGFjZXI6IG0udXRpbHMucHgoNilcblx0XHRrZXlQb3BVcDpcblx0XHRcdHdpZHRoOjU4XG5cdFx0XHRoZWlnaHQ6MTAxXG5cdFx0XHRib3hUb3A6NVxuXHRcdHBhdGhPZmZTZXQ6XG5cdFx0XHR4Oi03XG5cdFx0XHR5Oi01XG5cdFwiaXBob25lLTZzLXBsdXNcIjpcblx0XHRoZWlnaHQ6MjI2XG5cdFx0a2V5OlxuXHRcdFx0d2lkdGg6IG0udXRpbHMucHgoMzUpXG5cdFx0XHRoZWlnaHQ6IG0udXRpbHMucHgoNDUpXG5cdFx0ZXhwYW5kZWRLZXk6IG0udXRpbHMucHgoNTApXG5cdFx0ZXhwYW5kZWRTcGFjZXI6IG0udXRpbHMucHgoMjApXG5cdFx0cGFkZGluZzpcblx0XHRcdHJvdzE6IG0udXRpbHMucHgoNClcblx0XHRcdHJvdzI6IG0udXRpbHMucHgoMjUpXG5cdFx0XHRyb3czOiBtLnV0aWxzLnB4KDY3KVxuXHRcdG1hcmdpblRvcDpcblx0XHRcdHJvdzE6IG0udXRpbHMucHgoOClcblx0XHRcdHJvdzI6IG0udXRpbHMucHgoMTkpXG5cdFx0XHRyb3czOiBtLnV0aWxzLnB4KDMwKVxuXHRcdFx0cm93NDogbS51dGlscy5weCg0MSlcblx0XHRzaGlmdEljb246IHt4Om0udXRpbHMucHgoMTMpLCB5Om0udXRpbHMucHgoMil9XG5cdFx0ZGVsZXRlSWNvbjoge3g6bS51dGlscy5weCgxMSksIHk6bS51dGlscy5weCgxNCl9XG5cdFx0ZW1vamlJY29uOiB7eDptLnV0aWxzLnB4KDEzKSwgeTptLnV0aWxzLnB4KDEzKX1cblx0XHRzaWRlS2V5OiBtLnV0aWxzLnB4KDQ1KVxuXHRcdHNpZGVLZXlSYWRpdXM6IG0udXRpbHMucHgoNSlcblx0XHRzaWRlS2V5Qm90dG9tOiBtLnV0aWxzLnB4KDU2KVxuXHRcdGlQYWREZWxldGVPZmZzZXQ6IDBcblx0XHRib3R0b21Sb3c6IDZcblx0XHRyZXR1cm5LZXk6IG0udXRpbHMucHgoOTcpXG5cdFx0c3BhY2VyOiBtLnV0aWxzLnB4KDYpXG5cdFx0a2V5UG9wVXA6XG5cdFx0XHR3aWR0aDo2NFxuXHRcdFx0aGVpZ2h0OjExMlxuXHRcdFx0Ym94VG9wOjhcblx0XHRwYXRoT2ZmU2V0OlxuXHRcdFx0eDotN1xuXHRcdFx0eTotNVxuXHRcImlwYWRcIjpcblx0XHRoZWlnaHQ6MjY4XG5cdFx0a2V5OlxuXHRcdFx0d2lkdGg6IG0udXRpbHMucHgoNTYpXG5cdFx0XHRoZWlnaHQ6IG0udXRpbHMucHgoNTYpXG5cdFx0cGFkZGluZzpcblx0XHRcdHJvdzE6IG0udXRpbHMucHgoNilcblx0XHRcdHJvdzI6IG0udXRpbHMucHgoMzUpXG5cdFx0XHRyb3czOiBtLnV0aWxzLnB4KDc0KVxuXHRcdG1hcmdpblRvcDpcblx0XHRcdHJvdzE6IG0udXRpbHMucHgoMTApXG5cdFx0XHRyb3cyOiBtLnV0aWxzLnB4KDE4KVxuXHRcdFx0cm93MzogbS51dGlscy5weCgyOClcblx0XHRcdHJvdzQ6IG0udXRpbHMucHgoNDApXG5cdFx0c2hpZnRJY29uOiB7eDptLnV0aWxzLnB4KDE4KSwgeTptLnV0aWxzLnB4KDIpfVxuXHRcdGRlbGV0ZUljb246IHt4Om0udXRpbHMucHgoMTgpLCB5Om0udXRpbHMucHgoMjApfVxuXHRcdGVtb2ppSWNvbjoge3g6bS51dGlscy5weCgxOCksIHk6bS51dGlscy5weCgxOCl9XG5cdFx0c2lkZUtleTogbS51dGlscy5weCg1Nilcblx0XHRzaWRlS2V5MjogbS51dGlscy5weCg3Nilcblx0XHRzaWRlS2V5UmFkaXVzOiBtLnV0aWxzLnB4KDUpXG5cdFx0c2lkZUtleUJvdHRvbTogbS51dGlscy5weCg1Nilcblx0XHRpUGFkRGVsZXRlT2Zmc2V0OiBtLnV0aWxzLnB4KDI4KSArIG0udXRpbHMucHgoNTYpICogMiAtIG0udXRpbHMucHgoMTApXG5cdFx0Ym90dG9tUm93OiA3XG5cdFx0cmV0dXJuS2V5OiBtLnV0aWxzLnB4KDEwNilcblx0XHRzcGFjZXI6IG0udXRpbHMucHgoMTIpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXG5cdCMjIEtleWJvYXJkIHNldHVwXG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblx0Ym9hcmRTcGVjcyA9IGJvYXJkU3BlY3NPYmplY3RbbS5kZXZpY2UubmFtZV1cblxuXHQjIFNldHVwIHRoZSBTVkdzXG5cdHN2Z1NoaWZ0T2ZmID0gbS51dGlscy5zdmcobS5hc3NldHMuc2hpZnQub2ZmKVxuXHRzdmdTaGlmdE9uID0gbS51dGlscy5zdmcobS5hc3NldHMuc2hpZnQub24pXG5cdHN2Z0RlbGV0ZU9mZiA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmRlbGV0ZS5vZmYpXG5cdHN2Z0RlbGV0ZU9uID0gbS51dGlscy5zdmcobS5hc3NldHMuZGVsZXRlLm9uKVxuXHRzdmdFbW9qaSA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmVtb2ppKVxuXHRzdmdLZXlQb3BVcCA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmtleVBvcFVwW20uZGV2aWNlLm5hbWVdKVxuXG5cblx0IyBUaGlzIGlzIHRoZSBzdXBlckxheWVyIG9mIHRoZSBrZXlib2FyZFxuXHRib2FyZCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjRDFENURBXCIsIG5hbWU6XCJrZXlib2FyZFwiXG5cdGJvYXJkLmNvbnN0cmFpbnRzID0gKGhlaWdodDpib2FyZFNwZWNzLmhlaWdodCwgdHJhaWxpbmc6MCwgbGVhZGluZzowKVxuXHRib2FyZC5zcGVjcyA9IGJvYXJkU3BlY3Ncblx0bS5sYXlvdXQuc2V0KGJvYXJkKVxuXG5cdCNUaGlzIHdpbGwgZGV0ZXJpbmUgaWYgaXQgc3RhcnRzIG9uIHRoZSBib3R0b20gb3IgcG9wcyB1cCBmcm9tIHRoZSBib3R0b21cblx0aWYgc2V0dXAuYW5pbWF0ZWRcblx0XHRib2FyZC55ID0gbS5kZXZpY2UuaGVpZ2h0XG5cdFx0Ym9hcmQuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoobWF4WTogbS5kZXZpY2UuaGVpZ2h0KVxuXHRcdFx0dGltZTouMjVcblx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRlbHNlXG5cdFx0Ym9hcmQubWF4WSA9IG0uZGV2aWNlLmhlaWdodFxuXG5cdCNMZXR0ZXJzIHRvIGJlIG1hZGVcblx0bGV0dGVyc0FycmF5ID0gW1wicVwiLCBcIndcIiwgXCJlXCIsIFwiclwiLCBcInRcIiwgXCJ5XCIsIFwidVwiLCBcImlcIiwgXCJvXCIsIFwicFwiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcInpcIiwgXCJ4XCIsIFwiY1wiLCBcInZcIiwgIFwiYlwiLCBcIm5cIiwgXCJtXCJdXG5cblx0I1RoZXNlIGFycmF5cyBhcmUgZGVwZW5lZGVudCBvbiB0aGUgRGV2aWNlXG5cdHNlY29uZEFycmF5ID0gW11cblx0dGhpcmRBcnJheSA9IFtdXG5cblx0c3dpdGNoIG0uZGV2aWNlLm5hbWVcblx0XHR3aGVuIFwiaXBhZFwiXG5cdFx0XHRzZWNvbmRBcnJheSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIiwgXCItXCIsIFwiL1wiLCBcIjpcIiwgXCI7XCIsIFwiKFwiLCBcIilcIiwgXCIkXCIsIFwiJlwiLCBcIkBcIiwgXCJ1bmRvXCIsIFwiaGlkZVwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiLCBcIlxcXCJcIl1cblx0XHRcdHRoaXJkQXJyYXkgPSBbXCJcXFtcIiwgXCJcXF1cIiwgXCJcXHtcIiwgXCJcXH1cIiwgXCIjXCIsIFwiJVwiLCBcIl5cIiwgXCIqXCIsIFwiK1wiLCBcIj1cIiwgXCJfXCIsIFwiXFxcXFwiLCBcInxcIiwgXCJ+XCIsIFwiPFwiLCBcIj5cIiwgXCLigqxcIiwgXCLCo1wiLCBcIsKlXCIsIFwicmVkb1wiLCBcImhpZGVcIiwgXCIuXCIsICcsJywgXCI/XCIsIFwiIVwiLCBcIidcIiwgXCJcXFwiXCJdXG5cdFx0ZWxzZVxuXHRcdFx0c2Vjb25kQXJyYXkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCIsIFwiLVwiLCBcIi9cIiwgXCI6XCIsIFwiO1wiLCBcIihcIiwgXCIpXCIsIFwiJFwiLCBcIiZcIiwgXCJAXCIsIFwiXFxcIlwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiXVxuXHRcdFx0dGhpcmRBcnJheSA9IFtcIlxcW1wiLCBcIlxcXVwiLCBcIlxce1wiLCBcIlxcfVwiLCBcIiNcIiwgXCIlXCIsIFwiXlwiLCBcIipcIiwgXCIrXCIsIFwiPVwiLCBcIl9cIiwgXCJcXFxcXCIsIFwifFwiLCBcIn5cIiwgXCI8XCIsIFwiPlwiLCBcIuKCrFwiLCBcIsKjXCIsIFwiwqVcIiwgXCLigKJcIiwgXCIuXCIsICcsJywgXCI/XCIsIFwiIVwiLCBcIidcIiwgXCJcXFwiXCJdXG5cblx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdGxldHRlcnNBcnJheS5wdXNoIFwiLFwiXG5cdFx0bGV0dGVyc0FycmF5LnB1c2ggXCIuXCJcblxuXHQjTnVtYmVycyB0byBiZSBtYWRlIChkZXBlbmRpbmcgb24gZGV2aWNlKVxuXHRudW1zQXJyYXkgPSBbMC4uOV1cblxuXHQjSG9sZHMgdGhlIGtleSBsYXllcnMgdGhhdCB3ZSBtYWtlLiBUaGlzIHdpbGwgYWxsb3dzIHVzIHRvIHF1aWNrbHkgaXRlcmF0ZSB0aHJvdWdoIHRoZW0uXG5cdGtleXNBcnJheSA9IFtdXG5cblx0IyBPbiBpUGhvbmUsIHRoaXMgaXMgdGhlIGxpdHRsZSB0aGluZyB0aGF0IHBvcHMgdXAgd2hlbiB5b3UgdGFwIGxldHRlcnNcblx0a2V5UG9wVXAgPSBuZXcgTGF5ZXIgd2lkdGg6bS51dGlscy5weChib2FyZFNwZWNzLmtleVBvcFVwLndpZHRoKSwgaGVpZ2h0Om0udXRpbHMucHgoYm9hcmRTcGVjcy5rZXlQb3BVcC5oZWlnaHQpLCB4OkAueC0xNiptLmRldmljZS5zY2FsZSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImtleSBwb3AgdXBcIlxuXHRib3ggPSBuZXcgbS5UZXh0XG5cdFx0dGV4dDpcInFcIlxuXHRcdHN1cGVyTGF5ZXI6a2V5UG9wVXBcblx0XHRjb25zdHJhaW50czp7dG9wOmJvYXJkU3BlY3Mua2V5UG9wVXAuYm94VG9wLCBhbGlnbjpcImhvcml6b250YWxcIn1cblx0XHRmb250U2l6ZTozOFxuXHRcdGZvbnRXZWlnaHQ6MzAwXG5cdFx0dGV4dEFsaWduOlwiY2VudGVyXCJcblx0QC5jb2xvciA9IFwid2hpdGVcIlxuXHRwYXRoID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJrZXkgcGF0aFwiLCB4OmJvYXJkU3BlY3MucGF0aE9mZlNldC54LCB5OmJvYXJkU3BlY3MucGF0aE9mZlNldC55LCB3aWR0aDptLnV0aWxzLnB4KGJvYXJkU3BlY3Mua2V5UG9wVXAud2lkdGgpLCBoZWlnaHQ6bS51dGlscy5weChib2FyZFNwZWNzLmtleVBvcFVwLmhlaWdodClcblx0cGF0aC5odG1sID0gc3ZnS2V5UG9wVXAuc3ZnXG5cdGJvYXJkLmtleVBvcFVwID0ga2V5UG9wVXBcblx0Ym9hcmQua2V5UG9wVXAuYm94ID0gYm94XG5cblx0cm93c01hcCA9IFtcblx0XHR7XG5cdFx0XHRcInBhZGRpbmdcIiA6IGJvYXJkU3BlY3MucGFkZGluZy5yb3cxXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDlcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cxXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcInBhZGRpbmdcIiA6IGJvYXJkU3BlY3MucGFkZGluZy5yb3cyXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDEwXG5cdFx0XHRcImVuZEluZGV4XCIgOiAxOFxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwicGFkZGluZ1wiIDogYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzNcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTlcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDI1XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93M1xuXHRcdH1cblx0XVxuXG5cdGZpcnN0Um93S2V5V2lkdGggPSAwXG5cdHNlY29uZFJvd0tleVdpZHRoID0gMFxuXG5cdGJvYXJkLmtleXMgPSB7fVxuXHRmb3IgbGV0dGVyIGluIGxldHRlcnNBcnJheVxuXHRcdGluZGV4ID0gbGV0dGVyc0FycmF5LmluZGV4T2YobGV0dGVyKVxuXHRcdGtleSA9IG5ldyBMYXllciBuYW1lOmxldHRlciwgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOjUqbS5kZXZpY2Uuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIGNvbG9yOlwiYmxhY2tcIiwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5rZXkud2lkdGgsIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0XHRib2FyZC5rZXlzW2xldHRlcl0gPSBrZXlcblx0XHRrZXlQb3BVcC5icmluZ1RvRnJvbnQoKVxuXHRcdGJveC5icmluZ1RvRnJvbnQoKVxuXG5cblx0XHRpZiBtLmRldmljZS53aWR0aCA9PSA2NDBcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDoyNiwgaGVpZ2h0OjM5KVxuXG5cdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRtLmxheW91dC5zZXQoKVxuXHRcdGtleS5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiAyNSAqIG0uZGV2aWNlLnNjYWxlICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBrZXkuaGVpZ2h0IC0gbS51dGlscy5weCgyKSArIFwicHhcIlxuXHRcdH1cblx0XHRpZiBsZXR0ZXIgPT0gXCIsXCIgfHwgbGV0dGVyID09IFwiLlwiXG5cdFx0XHRleHRyYVN5bWJvbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmtleSwgd2lkdGg6bS51dGlscy5weCgzMCksIGhlaWdodDptLnV0aWxzLnB4KDMwKSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeTptLnV0aWxzLnB4KDE1KSwgY29sb3I6bS51dGlscy5jb2xvcihcImJsYWNrXCIpLCBuYW1lOlwiIS8/XCJcblx0XHRcdGV4dHJhU3ltYm9sLmNlbnRlclgoKVxuXHRcdFx0ZXh0cmFTeW1ib2wuc3R5bGUgPSB7XG5cdFx0XHRcdFwiZm9udC1zaXplXCIgOiBtLnV0aWxzLnB4KDI0KSArIFwicHhcIlxuXHRcdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHRcdCdsaW5lLWhlaWdodCcgOiBcIjIwcHhcIlxuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggbGV0dGVyXG5cdFx0XHRcdHdoZW4gXCIsXCIgdGhlbiBleHRyYVN5bWJvbC5odG1sID0gXCIhXCJcblx0XHRcdFx0d2hlbiBcIi5cIiB0aGVuIGV4dHJhU3ltYm9sLmh0bWwgPSBcIj9cIlxuXHRcdFx0a2V5LnN0eWxlW1wibGluZS1oZWlnaHRcIl0gPSBrZXkuaGVpZ2h0ICsgbS51dGlscy5weCgxMCkgKyBcInB4XCJcblxuXHRcdGtleS5odG1sID0gbGV0dGVyXG5cblx0XHRpZiBpbmRleCA8PSByb3dzTWFwWzBdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFswXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMF0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAoZmlyc3RSb3dLZXlXaWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFswXS5tYXJnaW5Ub3Bcblx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0I0hhbmRsZSB0aGUgZXh0cmEgcGl4ZWxzIG9uIHRoZSB0b3Agcm93XG5cdFx0XHRcdGlmIGluZGV4ICUgMiAhPSAwXG5cdFx0XHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICsgbS51dGlscy5weCgyKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICsgbS51dGlscy5weCgxKVxuXHRcdFx0Zmlyc3RSb3dLZXlXaWR0aCA9IGZpcnN0Um93S2V5V2lkdGggKyBrZXkud2lkdGhcblx0XHRpZiBpbmRleCA+IHJvd3NNYXBbMF0uZW5kSW5kZXggJiYgaW5kZXggPD0gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMV0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzFdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHNlY29uZFJvd0tleVdpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRcdGtleS53aWR0aCA9IGtleS53aWR0aCArIG0udXRpbHMucHgoMSlcblx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gc2Vjb25kUm93S2V5V2lkdGggKyBrZXkud2lkdGhcblx0XHRpZiBpbmRleCA+IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzJdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsyXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMl0ubWFyZ2luVG9wICsga2V5LmhlaWdodCAqIDJcblxuXHRcdGtleXNBcnJheS5wdXNoIGtleVxuXG5cdFx0aWYgbS5kZXZpY2UubmFtZSAhPSBcImlwYWRcIiAmJiBtLmRldmljZS5uYW1lICE9IFwiaXBhZC1wcm9cIlxuXHRcdFx0IyMgaVBob25lIEtleSBBbmltYXRpb25zXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdGtleVBvcFVwLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGJveC5odG1sID0gQC5uYW1lXG5cdFx0XHRcdGtleVBvcFVwLm1heFkgPSBALm1heFlcblx0XHRcdFx0a2V5UG9wVXAubWlkWCA9IEAubWlkWFxuXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoTW92ZSwgLT5cblx0XHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXG5cblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGtleVBvcFVwLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0ZWxzZVxuXHRcdFx0I2lQYWQgS2V5IEFuaW1hdGlvbnNcblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0QC5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRALmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdHNoaWZ0SWNvbi5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cblx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLnN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXG5cdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblxuXHRcdFx0XHRpZiBzZXR1cC5vdXRwdXRcblx0XHRcdFx0XHRAbmV3VGV4dCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwgKyBALm5hbWUudG9VcHBlckNhc2UoKVxuXHRcdFx0XHRcdG0udXRpbHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpAbmV3VGV4dF0pXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0XHRcdEBuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbCArIEAubmFtZVxuXHRcdFx0XHRcdG0udXRpbHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpAbmV3VGV4dF0pXG5cblx0Ym9hcmQua2V5c0FycmF5ID0ga2V5c0FycmF5XG5cblx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXG5cblx0IyMgU0hJRlQgS0VZXG5cblx0c2hpZnRLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcInNoaWZ0XCIsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsIGNvbG9yOm0udXRpbHMuY29sb3IoXCJibGFja1wiKSwgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Muc2lkZUtleSwgeTooYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCAqIDIpXG5cdHNoaWZ0S2V5LmNvbnN0cmFpbnRzID0gKGxlYWRpbmc6bS51dGlscy5wdChib2FyZFNwZWNzLnBhZGRpbmcucm93MSkpXG5cdHNoaWZ0SWNvbiA9IG5ldyBMYXllciB3aWR0aDpzdmdTaGlmdE9mZi53aWR0aCwgaGVpZ2h0OnN2Z1NoaWZ0T2ZmLmhlaWdodCwgc3VwZXJMYXllcjpzaGlmdEtleSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLnNoaWZ0SWNvbi54LCB5OmJvYXJkU3BlY3Muc2hpZnRJY29uLnlcblxuXHRzaGlmdEljb24uaHRtbCA9IHN2Z1NoaWZ0T2ZmLnN2Z1xuXG5cdHNoaWZ0SWNvbi5zdGF0ZXMuYWRkXG5cdFx0XCJvblwiOlxuXHRcdFx0aHRtbDogc3ZnU2hpZnRPbi5zdmdcblx0c2hpZnRJY29uLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cblx0ICB0aW1lOiAuMDFcblxuXHRzaGlmdEtleS5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiBtLnV0aWxzLnB4KDE2KSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDogYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICsgXCJweFwiXG5cdFx0fVxuXG5cdHNoaWZ0S2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZVxuXHRcdFx0d2hlbiAxXG5cdFx0XHRcdHNoaWZ0SWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzaGlmdEljb24yLnN0YXRlcy5uZXh0KClcblx0XHRcdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGtleS5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdFx0Ym94LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0d2hlbiAyXG5cdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdGtleS5odG1sID0gdGhpcmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRrZXkubmFtZSA9IHRoaXJkQXJyYXlbaW5kZXhdXG5cdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAzXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIjEyM1wiXG5cdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiMTIzXCJcblx0XHRcdHdoZW4gM1xuXHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cblx0Ym9hcmQua2V5cy5zaGlmdCA9IHNoaWZ0S2V5XG5cdGJvYXJkLmtleXMuc2hpZnQuaWNvbiA9IHNoaWZ0SWNvblxuXG5cdCMjIERFTEVURSBLRVlcblxuXHRkZWxldGVLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOmJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cywgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIG5hbWU6XCJkZWxldGVcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5zaWRlS2V5LCB5Oihib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICogMiAtIGJvYXJkU3BlY3MuaVBhZERlbGV0ZU9mZnNldClcblxuXG5cdGRlbGV0ZUtleS5jb25zdHJhaW50cyA9ICh0cmFpbGluZzptLnV0aWxzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKS8yKVxuXHRkZWxldGVJY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZGVsZXRlS2V5LCB3aWR0aDptLnV0aWxzLnB4KDI0KSwgaGVpZ2h0Om0udXRpbHMucHgoMTgpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmJvYXJkU3BlY3MuZGVsZXRlSWNvbi54LCB5OmJvYXJkU3BlY3MuZGVsZXRlSWNvbi55XG5cblx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdGRlbGV0ZUtleS53aWR0aCA9IGRlbGV0ZUtleS53aWR0aCArIG0udXRpbHMucHgoNSlcblxuXHRkZWxldGVJY29uLnN0YXRlcy5hZGRcblx0XHRcIm9uXCI6XG5cdFx0XHRodG1sOiBzdmdEZWxldGVPbi5zdmdcblxuXHRkZWxldGVJY29uLnN0YXRlcy5hZGRcblx0XHRvZmY6XG5cdFx0XHRodG1sOiBzdmdEZWxldGVPZmYuc3ZnXG5cblxuXHRkZWxldGVLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0ZGVsZXRlS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXG5cdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0ZGVsZXRlS2V5LmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cblx0XHRpZiBzZXR1cC5vdXRwdXRcblx0XHRcdGluaXRpYWxMZW5ndGggPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sLmxlbmd0aFxuXHRcdFx0bmV3VGV4dCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwuc2xpY2UoMCwgLTEpXG5cdFx0XHRtLnV0aWxzLnVwZGF0ZShzZXR1cC5vdXRwdXQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRlbmRMZW5ndGggPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sLmxlbmd0aFxuXHRcdFx0aWYgaW5pdGlhbExlbmd0aCA9PSBlbmRMZW5ndGhcblx0XHRcdFx0bmV3VGV4dCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwuc2xpY2UoMCwgLTYpXG5cdFx0XHRcdG0udXRpbHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdGlmIHNldHVwLm91dHB1dC50ZXh0Lmh0bWwgPT0gXCJcIlxuXHRcdFx0XHRzZXR1cC5vdXRwdXQucGxhY2Vob2xkZXIudmlzaWJsZSA9IHRydWVcblxuXG5cblx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9mZlwiKVxuXG5cdGJvYXJkLmtleXMuZGVsZXRlID0gZGVsZXRlS2V5XG5cdGJvYXJkLmtleXMuZGVsZXRlLmljb24gPSBkZWxldGVJY29uXG5cblx0IyMgRVhUUkEgS0VZU1xuXG5cdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRrZXlib2FyZEtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwiZGlzbWlzc1wiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5zaWRlS2V5XG5cdFx0a2V5Ym9hcmRLZXkuY29uc3RyYWludHMgPSB7dHJhaWxpbmdFZGdlczpkZWxldGVLZXksIGJvdHRvbTpib2FyZFNwZWNzLmJvdHRvbVJvd31cblx0XHRrZXlib2FyZEljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlib2FyZEtleSwgd2lkdGg6bS51dGlscy5weCgzMi41KSwgaGVpZ2h0Om0udXRpbHMucHgoMjMuNSksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRrZXlib2FyZEljb24uaHRtbCA9IG0uYXNzZXRzLmtleWJvYXJkXG5cdFx0a2V5Ym9hcmRJY29uLmNlbnRlcigpXG5cblx0XHRib2FyZC5rZXlzLmRpc21pc3MgPSBrZXlib2FyZEtleVxuXG5cdFx0c2hpZnRLZXkyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJzaGlmdFwiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLGNvbG9yOm0udXRpbHMuY29sb3IoXCJibGFja1wiKSwgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleTIsIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXlcblx0XHRzaGlmdEtleTIuY29uc3RyYWludHMgPSAodHJhaWxpbmdFZGdlczpkZWxldGVLZXksIGJvdHRvbUVkZ2VzOnNoaWZ0S2V5KVxuXHRcdHNoaWZ0SWNvbjIgPSBuZXcgTGF5ZXIgd2lkdGg6bS51dGlscy5weCgyMCksIGhlaWdodDptLnV0aWxzLnB4KDE5KSwgc3VwZXJMYXllcjpzaGlmdEtleTIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6Ym9hcmRTcGVjcy5zaGlmdEljb24ueCttLnV0aWxzLnB4KDEwKSwgeTpib2FyZFNwZWNzLnNoaWZ0SWNvbi55XG5cdFx0c2hpZnRJY29uMi5odG1sID0gbS5hc3NldHMuc2hpZnQub2ZmXG5cblx0XHRzaGlmdEtleTIuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogbS51dGlscy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IChib2FyZFNwZWNzLmtleS5oZWlnaHQpICsgXCJweFwiXG5cblx0XHR9XG5cblxuXHRcdHNoaWZ0SWNvbjIuc3RhdGVzLmFkZFxuXHRcdFx0XCJvblwiOlxuXHRcdFx0XHRodG1sOiBzdmdTaGlmdE9uLnN2Z1xuXHRcdHNoaWZ0SWNvbjIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRcdCAgdGltZTogLjAxXG5cblx0XHRzaGlmdEljb24yLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0c3dpdGNoIGJvYXJkLmtleWJvYXJkU3RhdGVcblx0XHRcdFx0d2hlbiAxXG5cdFx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5uZXh0KClcblx0XHRcdFx0XHRzaGlmdEljb24yLnN0YXRlcy5uZXh0KClcblx0XHRcdFx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0XHRcdFx0Ym94LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0XHR3aGVuIDJcblx0XHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGtleS5odG1sID0gdGhpcmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGtleS5uYW1lID0gdGhpcmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gM1xuXHRcdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIjEyM1wiXG5cdFx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIjEyM1wiXG5cdFx0XHRcdHdoZW4gM1xuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPCAyN1xuXHRcdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAyNlxuXHRcdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cblxuXHRcdG51bUtleTIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcIm51bVwiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBjb2xvcjptLnV0aWxzLmNvbG9yKFwiYmxhY2tcIiksIGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOm0udXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXkyLCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdFx0bnVtS2V5Mi5odG1sID0gXCIuPzEyM1wiXG5cdFx0bnVtS2V5Mi5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiBtLnV0aWxzLnB4KDE2KSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDogYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICsgXCJweFwiXG5cblx0XHR9XG5cdFx0bnVtS2V5Mi5jb25zdHJhaW50cyA9IHt0cmFpbGluZzpba2V5Ym9hcmRLZXksIDEyXSwgYm90dG9tRWRnZXM6a2V5Ym9hcmRLZXl9XG5cblx0XHRudW1LZXkyLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0c3dpdGNoIGJvYXJkLmtleWJvYXJkU3RhdGVcblx0XHRcdFx0d2hlbiAxXG5cdFx0XHRcdFx0IyMgQ2hhbmdlIExldHRlcnNcblx0XHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGlmIGluZGV4IDwgMjdcblx0XHRcdFx0XHRcdFx0aWYgc2Vjb25kQXJyYXlbaW5kZXhdID09IFwidW5kb1wiXG5cdFx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICogMiArIGJvYXJkU3BlY3Muc3BhY2VyXG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC1zaXplXCJdID0gbS51dGlscy5weCgxNykgKyBcInB4XCJcblx0XHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDQwMFxuXHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJoaWRlXCJcblx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXG5cdFx0XHRcdFx0IyMgSGFuZGxlIG51bSBrZXlzIGFuZCBzaGlmdCBrZXlzXG5cdFx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IGZhbHNlXG5cblx0XHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEljb24yLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0XHRudW1LZXkyLmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0aWYga2V5Lmh0bWwgPT0gXCJ1bmRvXCIgfHwgXCJyZWRvXCJcblx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5rZXkud2lkdGhcblx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC1zaXplXCJdID0gbS51dGlscy5weCgyNSkgKyBcInB4XCJcblx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSAzMDBcblx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBsZXR0ZXJzQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRrZXkuaHRtbCA9IGxldHRlcnNBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGlmIGluZGV4ID4gMjVcblx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIlwiXG5cdFx0XHRcdFx0c2hpZnRJY29uLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIi4/MTIzXCJcblx0XHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIlwiXG5cdFx0XHRcdFx0XHRzaGlmdEljb24yLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXG5cdCMjIE5VTSBLRVkgdG9wOm0udXRpbHMucHQoYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93NCArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCozKVxuXG5cdG51bUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwibnVtXCIsIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0bnVtS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbTpib2FyZFNwZWNzLmJvdHRvbVJvdywgbGVhZGluZ0VkZ2VzOnNoaWZ0S2V5KVxuXHRpZiBtLmRldmljZS5uYW1lICE9IFwiaXBhZFwiICYmIG0uZGV2aWNlLm5hbWUgIT0gXCJpcGFkLXByb1wiXG5cdFx0bnVtS2V5Lmh0bWwgPSBcIjEyM1wiXG5cdGVsc2Vcblx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRudW1LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICsgXCJweFwiXG5cdH1cblxuXHRudW1LZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0c3dpdGNoIGJvYXJkLmtleWJvYXJkU3RhdGVcblx0XHRcdHdoZW4gMVxuXHRcdFx0XHQjIyBDaGFuZ2UgTGV0dGVyc1xuXHRcdFx0XHRzd2l0Y2ggbS5kZXZpY2UubmFtZVxuXHRcdFx0XHRcdHdoZW4gXCJpcGFkXCJcblx0XHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRcdFx0aWYgc2Vjb25kQXJyYXlbaW5kZXhdID09IFwidW5kb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKiAyICsgYm9hcmRTcGVjcy5zcGFjZXJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IG0udXRpbHMucHgoMTcpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDQwMFxuXHRcdFx0XHRcdFx0XHRcdGlmIHNlY29uZEFycmF5W2luZGV4XSA9PSBcImhpZGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAyNlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiQUJDXCJcblx0XHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cm93SW5kZXggPSAwXG5cdFx0XHRcdFx0XHRzZWNvbmRSb3dLZXlXaWR0aCA9IDBcblx0XHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAxOVxuXHRcdFx0XHRcdFx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0XHRcdFx0XHRcdCMjIDJuZCBSb3dcblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPiA5ICYmIGluZGV4IDwgMjBcblx0XHRcdFx0XHRcdFx0XHRrZXkueCA9IHJvd3NNYXBbMF0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAoc2Vjb25kUm93S2V5V2lkdGgpXG5cdFx0XHRcdFx0XHRcdFx0cm93SW5kZXgrK1xuXHRcdFx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gc2Vjb25kUm93S2V5V2lkdGggKyBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAyMFxuXHRcdFx0XHRcdFx0XHRcdGtleS5jb25zdHJhaW50cyA9IHtsZWFkaW5nOltzaGlmdEtleSwgbS51dGlscy5wdChib2FyZFNwZWNzLmV4cGFuZGVkU3BhY2VyKV19XG5cdFx0XHRcdFx0XHRcdFx0bS5sYXlvdXQuc2V0KClcblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPiAxOVxuXHRcdFx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGJvYXJkU3BlY3MuZXhwYW5kZWRLZXlcblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPiAyMFxuXHRcdFx0XHRcdFx0XHRcdGtleS5jb25zdHJhaW50cyA9IHtsZWFkaW5nOltrZXlzQXJyYXlbaW5kZXggLSAxXSwgbS51dGlscy5wdChib2FyZFNwZWNzLnNwYWNlcildfVxuXHRcdFx0XHRcdFx0XHRcdG0ubGF5b3V0LnNldCgpXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID4gMjRcblx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXG5cblx0XHRcdFx0IyMgSGFuZGxlIG51bSBrZXlzIGFuZCBzaGlmdCBrZXlzXG5cdFx0XHRcdG51bUtleS5odG1sID0gXCJBQkNcIlxuXHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IGZhbHNlXG5cblx0XHRcdGVsc2Vcblx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSAhPSBcImlwYWRcIlxuXHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gMFxuXHRcdFx0XHRcdHJvd0luZGV4ID0gMFxuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5rZXkud2lkdGhcblx0XHRcdFx0XHRcdGlmIGluZGV4ID4gOSAmJiBpbmRleCA8IDE5XG5cdFx0XHRcdFx0XHRcdGtleS54ID0gcm93c01hcFsxXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChzZWNvbmRSb3dLZXlXaWR0aClcblx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRcdFx0XHRcdFx0cm93SW5kZXgrK1xuXHRcdFx0XHRcdFx0XHRzZWNvbmRSb3dLZXlXaWR0aCA9IHNlY29uZFJvd0tleVdpZHRoICsga2V5LndpZHRoXG5cdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAxOVxuXHRcdFx0XHRcdFx0XHRrZXkueSA9IHJvd3NNYXBbMl0ubWFyZ2luVG9wICsga2V5LmhlaWdodCAqIDJcblx0XHRcdFx0XHRcdGlmIGluZGV4ID49IDE5XG5cdFx0XHRcdFx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzJdLnN0YXJ0SW5kZXhcblx0XHRcdFx0XHRcdFx0a2V5LnggPSByb3dzTWFwWzJdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzJdLm1hcmdpblRvcCArIGtleS5oZWlnaHQgKiAyXG5cdFx0XHRcdFx0XHRcdGtleS5jb25zdHJhaW50cyA9IHt9XG5cblx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0aWYga2V5Lmh0bWwgPT0gXCJ1bmRvXCIgfHwgXCJyZWRvXCJcblx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGJvYXJkU3BlY3Mua2V5LndpZHRoXG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXNpemVcIl0gPSBtLnV0aWxzLnB4KDI1KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSAzMDBcblx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRrZXkubmFtZSA9IGxldHRlcnNBcnJheVtpbmRleF1cblx0XHRcdFx0XHRrZXkuaHRtbCA9IGxldHRlcnNBcnJheVtpbmRleF1cblx0XHRcdFx0XHRpZiBpbmRleCA+IDI1XG5cdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIlwiXG5cdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIi4/MTIzXCJcblx0XHRcdFx0XHRudW1LZXkyLmh0bWwgPSBcIi4/MTIzXCJcblx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRzaGlmdEljb24yLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAxXG5cblxuXHRtLmxheW91dC5zZXQoKVxuXG5cdCMjIEVNT0pJIEtFWVxuXG5cdGVtb2ppS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJlbW9qaVwiLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCg1KSwgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRlbW9qaUtleS5jb25zdHJhaW50cyA9IChib3R0b21FZGdlczpudW1LZXksIGxlYWRpbmc6W251bUtleSwgNl0pXG5cdGVtb2ppSWNvbiA9IG5ldyBMYXllciB3aWR0aDpzdmdFbW9qaS53aWR0aCwgaGVpZ2h0OnN2Z0Vtb2ppLmhlaWdodCwgc3VwZXJMYXllcjplbW9qaUtleSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLmVtb2ppSWNvbi54LCB5OmJvYXJkU3BlY3MuZW1vamlJY29uLnlcblx0ZW1vamlJY29uLmh0bWwgPSBzdmdFbW9qaS5zdmdcblxuXG5cblx0IyMgUkVUVVJOIEtFWVxuXG5cdHJldHVybktleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCg1KSwgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3Ioc2V0dXAucmV0dXJuQ29sb3IpLCBzaGFkb3dZOm0udXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCIsIG5hbWU6XCJyZXR1cm5cIiwgd2lkdGg6Ym9hcmRTcGVjcy5yZXR1cm5LZXksIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0aWYgc2V0dXAucmV0dXJuQ29sb3IgIT0gXCJsaWdodC1rZXlcIlxuXHRcdHJldHVybktleS5jb2xvciA9IGV4cG9ydHMuc2V0VGV4dENvbG9yKG0udXRpbHMuY29sb3Ioc2V0dXAucmV0dXJuQ29sb3IpKVxuXHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0cmV0dXJuS2V5LmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nRWRnZXM6ZGVsZXRlS2V5LCB0b3A6bS51dGlscy5wdChib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cyICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0KSApXG5cdGVsc2Vcblx0XHRyZXR1cm5LZXkuY29uc3RyYWludHMgPSAodHJhaWxpbmc6bS51dGlscy5wdChib2FyZFNwZWNzLnNwYWNlcikvMiwgYm90dG9tRWRnZXM6bnVtS2V5KVxuXHRyZXR1cm5LZXkuaHRtbCA9IHNldHVwLnJldHVyblRleHRcblx0cmV0dXJuS2V5LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiBtLnV0aWxzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdH1cblx0bS5sYXlvdXQuc2V0KClcblxuXHRzdG9yZWRUZXh0Q29sb3IgPSByZXR1cm5LZXkuY29sb3Jcblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRyZXR1cm5LZXkuY29sb3IgPSBtLnV0aWxzLmNvbG9yKFwiYmxhY2tcIilcblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRyZXR1cm5LZXkuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvcilcblx0XHRyZXR1cm5LZXkuY29sb3IgPSBzdG9yZWRUZXh0Q29sb3JcblxuXHRib2FyZC5rZXlzLnJldHVybiA9IHJldHVybktleVxuXG5cblx0IyMgU1BBQ0UgS0VZXG5cblx0c3BhY2VLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcInNwYWNlXCIsIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblxuXHRpZiBtLmRldmljZS5uYW1lICE9IFwiaXBhZFwiXG5cdFx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltlbW9qaUtleSwgbS51dGlscy5wdChib2FyZFNwZWNzLnNwYWNlcildLCB0cmFpbGluZzpbcmV0dXJuS2V5LCBib2FyZFNwZWNzLnNwYWNlcl0pXG5cdFx0c3BhY2VLZXkuaHRtbCA9IFwic3BhY2VcIlxuXHRcdHNwYWNlS2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblxuXHRcdH1cblx0ZWxzZVxuXHRcdHNwYWNlS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbUVkZ2VzOm51bUtleSwgbGVhZGluZzpbZW1vamlLZXksIG0udXRpbHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpXSwgdHJhaWxpbmc6W251bUtleTIsIGJvYXJkU3BlY3Muc3BhY2VyXSlcblx0Ym9hcmQua2V5c1tcIiZuYnNwO1wiXSA9IHNwYWNlS2V5XG5cdGJvYXJkLmtleXMuc3BhY2UgPSBzcGFjZUtleVxuXHRtLmxheW91dC5zZXQoKVxuXG5cblx0c3BhY2VLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0c3BhY2VLZXkuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXG5cdHNwYWNlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRpZiBzZXR1cC5vdXRwdXRcblx0XHRcdEBuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbCArIFwiJm5ic3A7XCJcblx0XHRcdG0udXRpbHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpAbmV3VGV4dF0pXG5cblx0cmV0dXJuIGJvYXJkXG4iLCIjIFV0aWxzXG5cbm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGFuaW1hdGlvbnM6IHtcblx0XHR0YXJnZXQ6dW5kZWZpbmVkXG5cdFx0Y29uc3RyYWludHM6IHVuZGVmaW5lZFxuXHRcdGN1cnZlIDogXCJlYXNlLWluLW91dFwiXG5cdFx0Y3VydmVPcHRpb25zOiB1bmRlZmluZWRcblx0XHR0aW1lOjFcblx0XHRkZWxheTowXG5cdFx0cmVwZWF0OnVuZGVmaW5lZFxuXHRcdGNvbG9yTW9kZWw6dW5kZWZpbmVkXG5cdFx0c3RhZ2dlcjp1bmRlZmluZWRcblx0XHRmYWRlT3V0OmZhbHNlXG5cdFx0ZmFkZUluOmZhbHNlXG5cdH1cbn1cblxubGF5b3V0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHRhcmdldExheWVycyA9IFtdXG5cdGJsdWVwcmludCA9IFtdXG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGlmIHNldHVwLnRhcmdldFxuXHRcdGlmIHNldHVwLnRhcmdldC5sZW5ndGhcblx0XHRcdHRhcmdldExheWVycyA9IHNldHVwLnRhcmdldFxuXHRcdGVsc2Vcblx0XHRcdHRhcmdldExheWVycy5wdXNoIHNldHVwLnRhcmdldFxuXHRlbHNlXG5cdFx0dGFyZ2V0TGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXG5cdGlmIHNldHVwLnRhcmdldFxuXHRcdGlmIHNldHVwLmNvbnN0cmFpbnRzXG5cdFx0XHRmb3IgbmV3Q29uc3RyYWludCBpbiBPYmplY3Qua2V5cyhzZXR1cC5jb25zdHJhaW50cylcblx0XHRcdFx0c2V0dXAudGFyZ2V0LmNvbnN0cmFpbnRzW25ld0NvbnN0cmFpbnRdID0gc2V0dXAuY29uc3RyYWludHNbbmV3Q29uc3RyYWludF1cblxuXG5cdCNUcmFuc2xhdGUgbmV3IGNvbnN0cmFpbnRzXG5cdGZvciBsYXllciwgaW5kZXggaW4gdGFyZ2V0TGF5ZXJzXG5cdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0ge31cblx0XHRpZiBsYXllci5jb25zdHJhaW50c1xuXG5cdFx0XHRwcm9wcyA9IHt9XG5cdFx0XHRsYXllci5zdXBlckZyYW1lID0ge31cblxuXHRcdFx0aWYgbGF5ZXIuc3VwZXJMYXllclxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLmhlaWdodCA9IGxheWVyLnN1cGVyTGF5ZXIuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBsYXllci5zdXBlckxheWVyLndpZHRoXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0ID0gbS5kZXZpY2UuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBtLmRldmljZS53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nICE9IHVuZGVmaW5lZCAmJiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoID0ge31cblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wICE9IHVuZGVmaW5lZCAmJiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQgPSB7fVxuXG5cdFx0XHQjIFNpemUgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLndpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy53aWR0aCA9IG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbGF5ZXIud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0XG5cblx0XHRcdCMgUG9zaXRpb25pbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyYFxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnggPSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy5jYWxjdWxhdGVkUG9zaXRpb24ueCArIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1swXS5jYWxjdWxhdGVkUG9zaXRpb24ueCArIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoICsgbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzFdKVxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLnN0YXJ0WCA9IHByb3BzLnhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLCAxMClcblx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuc3VwZXJGcmFtZS53aWR0aCAtIG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcpIC0gcHJvcHMud2lkdGhcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcuY2FsY3VsYXRlZFBvc2l0aW9uLnggLSBwcm9wcy53aWR0aFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54IC0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50cmFpbGluZ1sxXSkgLSBwcm9wcy53aWR0aFxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLmNhbGN1bGF0ZWRQb3NpdGlvblggPSBwcm9wcy54XG5cblx0XHRcdFx0IyNwZXJmb3JtIGF1dG9zaXplXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLmNhbGN1bGF0ZWRQb3NpdGlvblggLSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYICsgcHJvcHMud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMudG9wLCAxMClcblx0XHRcdFx0XHRwcm9wcy55ID0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50b3ApXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy50b3AuY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyBsYXllci5jb25zdHJhaW50cy50b3AuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5jYWxjdWxhdGVkUG9zaXRpb24ueSArIGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0ICsgbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50b3BbMV0pXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFkgPSBwcm9wcy55XG5cblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMuYm90dG9tLCAxMClcblx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgLSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSkgLSBwcm9wcy5oZWlnaHRcblxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmNhbGN1bGF0ZWRQb3NpdGlvbi55IC0gcHJvcHMuaGVpZ2h0XG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi55IC0gIG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzFdKSAtIHByb3BzLmhlaWdodFxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuY2FsY3VsYXRlZFBvc2l0aW9uWSA9IHByb3BzLnlcblx0XHRcdFx0IyMgcGVyZm9ybSBhdXRvc2l6ZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LmNhbGN1bGF0ZWRQb3NpdGlvblkgLSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSArIHByb3BzLmhlaWdodFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFlcblxuXG5cdFx0XHQjIEFsaWdubWVudCBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNTZXQgdGhlIGNlbnRlcmluZyBmcmFtZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMlxuXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwidmVydGljYWxcIlxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAvIDIgLSBwcm9wcy5oZWlnaHQgLyAyXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJjZW50ZXJcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMlxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAvIDIgLSBwcm9wcy5oZWlnaHQgLyAyXG5cblxuXHRcdFx0IyBDZW50ZXJpbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5ob3Jpem9udGFsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgKGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoIC0gcHJvcHMud2lkdGgpIC8gMlxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy52ZXJ0aWNhbENlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgKGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHQgLSBwcm9wcy5oZWlnaHQpIC8gMlxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5jZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyAobGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aCAtIHByb3BzLndpZHRoKSAvIDJcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueSArIChsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodCAtIHByb3BzLmhlaWdodCkgLyAyXG5cblx0XHRcdCMgQWxpZ25pbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoICsgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3BFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcEVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi55XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSBwcm9wcy5oZWlnaHQgKyBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0XG5cblxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gcHJvcHNcblx0XHRlbHNlXG5cdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSBsYXllci5wcm9wc1xuXG5cdFx0Ymx1ZXByaW50LnB1c2ggbGF5ZXJcblxuXG5cdHJldHVybiBibHVlcHJpbnRcblxuZXhwb3J0cy5zZXQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0cHJvcHMgPSB7fVxuXHRpZiBhcnJheVxuXHRcdGZvciBpIGluIE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9ucylcblx0XHRcdGlmIGFycmF5W2ldXG5cdFx0XHRcdHNldHVwW2ldID0gYXJyYXlbaV1cblx0XHRcdGVsc2Vcblx0XHRcdFx0c2V0dXBbaV0gPSBleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnNbaV1cblxuXHRibHVlcHJpbnQgPSBsYXlvdXQoYXJyYXkpXG5cblx0Zm9yIGxheWVyLCBpbmRleCBpbiBibHVlcHJpbnRcblx0XHRmb3Iga2V5IGluIE9iamVjdC5rZXlzKGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbilcblx0XHRcdGxheWVyW2tleV0gPSBsYXllci5jYWxjdWxhdGVkUG9zaXRpb25ba2V5XVxuXG5leHBvcnRzLmFuaW1hdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0cHJvcHMgPSB7fVxuXHRpZiBhcnJheVxuXHRcdGZvciBpIGluIE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9ucylcblx0XHRcdGlmIGFycmF5W2ldXG5cdFx0XHRcdHNldHVwW2ldID0gYXJyYXlbaV1cblx0XHRcdGVsc2Vcblx0XHRcdFx0c2V0dXBbaV0gPSBleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnNbaV1cblxuXHRibHVlcHJpbnQgPSBsYXlvdXQoYXJyYXkpXG5cblx0Zm9yIGxheWVyLCBpbmRleCBpbiBibHVlcHJpbnRcblx0XHQjVGltaW5nXG5cdFx0ZGVsYXkgPSBzZXR1cC5kZWxheVxuXHRcdGlmIHNldHVwLnN0YWdnZXJcblx0XHRcdHN0YWcgPSBzZXR1cC5zdGFnZ2VyXG5cdFx0XHRkZWxheSA9ICgoaW5kZXgpICogc3RhZykgKyBkZWxheVxuXG5cdFx0aWYgc2V0dXAuZmFkZU91dFxuXHRcdFx0aWYgbGF5ZXIgPT0gc2V0dXAuZmFkZU91dFxuXHRcdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24ub3BhY2l0eSA9IDBcblxuXHRcdGlmIHNldHVwLmZhZGVJblxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLm9wYWNpdHkgPSAxXG5cblx0XHRsYXllci5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOmxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvblxuXHRcdFx0dGltZTpzZXR1cC50aW1lXG5cdFx0XHRkZWxheTpkZWxheVxuXHRcdFx0Y3VydmU6c2V0dXAuY3VydmVcblx0XHRcdHJlcGVhdDpzZXR1cC5yZXBlYXRcblx0XHRcdGNvbG9yTW9kZWw6c2V0dXAuY29sb3JNb2RlbFxuXHRcdFx0Y3VydmVPcHRpb25zOnNldHVwLmN1cnZlT3B0aW9uc1xuXG5cdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gcHJvcHNcbiIsIm0gPSByZXF1aXJlIFwibWF0ZXJpYWwta2l0XCJcblxuIyBCdWlsZCBMaWJyYXJ5ICBQcm9wZXJ0aWVzXG5sYXllciA9IG5ldyBMYXllclxuZXhwb3J0cy5sYXllclByb3BzID0gT2JqZWN0LmtleXMobGF5ZXIucHJvcHMpXG5leHBvcnRzLmxheWVyUHJvcHMucHVzaCBcInN1cGVyTGF5ZXJcIlxuZXhwb3J0cy5sYXllclByb3BzLnB1c2ggXCJjb25zdHJhaW50c1wiXG5leHBvcnRzLmxheWVyU3R5bGVzID0gT2JqZWN0LmtleXMobGF5ZXIuc3R5bGUpXG5sYXllci5kZXN0cm95KClcblxuZXhwb3J0cy5hc3NldHMgPSB7XG5cdGhvbWU6XCI8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzE3MiAxNiAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+XG5cdFx0ICAgICAgICA8ZWxsaXBzZSBpZD0ncGF0aC0xJyBjeD0nMTgwJyBjeT0nMjQnIHJ4PSc4JyByeT0nOCc+PC9lbGxpcHNlPlxuXHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMicgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgZmlsbD0nd2hpdGUnPlxuXHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0ICAgICAgICA8L21hc2s+XG5cdFx0ICAgIDwvZGVmcz5cblx0XHQgICAgPHVzZSBpZD0naG9tZScgc3Ryb2tlPScjRkZGRkZGJyBtYXNrPSd1cmwoI21hc2stMiknIHN0cm9rZS13aWR0aD0nNCcgZmlsbD0nbm9uZScgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0PC9zdmc+XCJcblx0YmFjazpcIjxzdmcgd2lkdGg9JzE2cHgnIGhlaWdodD0nMTlweCcgdmlld0JveD0nMzAxIDE0IDE2IDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cbiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICA8ZGVmcz48L2RlZnM+XG4gICAgPHBhdGggZD0nTTMwNy4wMjkzODMsMTcuNzY3MTczMyBDMzA3LjU4MDAyNywxNi44MDM1NDUzIDMwOC41MTAyOTIsMTYuNzc1MDcxMyAzMDkuMTEyMDIzLDE3LjcxMTA5NzYgTDMxNS45NDA4MDIsMjguMzMzNjQzNSBDMzE2LjU0MDM2OCwyOS4yNjYzMDE3IDMxNi4xMzYzNTQsMzAuMDIyMzcwNiAzMTUuMDI2MzA2LDMwLjAyMjM3MDYgTDMwMi4wMjY1MTksMzAuMDIyMzcwNiBDMzAwLjkyMTg5MSwzMC4wMjIzNzA2IDMwMC40Njc5MjMsMjkuMjQ5NzI4IDMwMS4wMjM0NDMsMjguMjc3NTY3OSBMMzA3LjAyOTM4MywxNy43NjcxNzMzIFonIGlkPSdUcmlhbmdsZS0xJyBzdHJva2U9JyNGRkZGRkYnIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzA4LjUwMjAyMSwgMjMuNTI0MzkxKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMDguNTAyMDIxLCAtMjMuNTI0MzkxKSAnPjwvcGF0aD5cblx0XHQ8L3N2Zz5cIlxuXHRjZWxsdWxhcjpcIjxzdmcgd2lkdGg9JzE2cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMzUgNCAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cbiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgPGRlZnM+PC9kZWZzPlxuICAgIDxnIGlkPSdjZWxsdWxhcicgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzUuMDAwMDAwLCA0LjAwMDAwMCknPlxuICAgICAgICA8cG9seWdvbiBpZD0nYm91bmRzJyBwb2ludHM9JzAgMCAxNiAwIDE2IDE2IDAgMTYnPjwvcG9seWdvbj5cbiAgICAgICAgPHBvbHlnb24gaWQ9J1NoYXBlJyBmaWxsPScjMDAwMDAwJyBwb2ludHM9JzAgMTUgMTQgMTUgMTQgMSc+PC9wb2x5Z29uPlxuICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRiYXR0ZXJ5SGlnaCA6IFwiPHN2ZyB3aWR0aD0nOXB4JyBoZWlnaHQ9JzE0cHgnIHZpZXdCb3g9JzMgMSA5IDE0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz48L2RlZnM+XG5cdCAgICA8cG9seWdvbiBpZD0nU2hhcGUnIHN0cm9rZT0nbm9uZScgZmlsbD0nIzAwMDAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyBwb2ludHM9JzkgMS44NzUgOSAxIDYgMSA2IDEuODc1IDMgMS44NzUgMyAxNSAxMiAxNSAxMiAxLjg3NSc+PC9wb2x5Z29uPlxuXHQ8L3N2Zz5cIlxuXHRiYW5uZXJCRyA6IHtcblx0XHRcImlwaG9uZS01XCI6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPSczMjBweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMzIwIDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+aXBob25lNTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS01LzVTLzVDJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDMyMCwwIEwzMjAsNjggTDAsNjggTDAsMCBaIE0xNDIsNjEuMDA0ODgxNSBDMTQyLDU5Ljg5NzYxNiAxNDIuODk2Mjc5LDU5IDE0NC4wMDI0LDU5IEwxNzYuOTk3Niw1OSBDMTc4LjEwMzQ5NSw1OSAxNzksNTkuODkzODk5OCAxNzksNjEuMDA0ODgxNSBMMTc5LDYxLjk5NTExODUgQzE3OSw2My4xMDIzODQgMTc4LjEwMzcyMSw2NCAxNzYuOTk3Niw2NCBMMTQ0LjAwMjQsNjQgQzE0Mi44OTY1MDUsNjQgMTQyLDYzLjEwNjEwMDIgMTQyLDYxLjk5NTExODUgTDE0Miw2MS4wMDQ4ODE1IFonIGlkPSdpcGhvbmU1Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBob25lLTZzXCI6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzM3NXB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzNzUgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQ8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0naU9TOC1QdXNoLU5vdGlmaWNhdGlvbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTIzLjAwMDAwMCknIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OC4wMDAwMDAsIDcuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMTYgTDM3NSwxNiBMMzc1LDg0IEwwLDg0IEwwLDE2IFogTTE2OSw3Ny4wMDQ4ODE1IEMxNjksNzUuODk3NjE2IDE2OS44OTYyNzksNzUgMTcxLjAwMjQsNzUgTDIwMy45OTc2LDc1IEMyMDUuMTAzNDk1LDc1IDIwNiw3NS44OTM4OTk4IDIwNiw3Ny4wMDQ4ODE1IEwyMDYsNzcuOTk1MTE4NSBDMjA2LDc5LjEwMjM4NCAyMDUuMTAzNzIxLDgwIDIwMy45OTc2LDgwIEwxNzEuMDAyNCw4MCBDMTY5Ljg5NjUwNSw4MCAxNjksNzkuMTA2MTAwMiAxNjksNzcuOTk1MTE4NSBMMTY5LDc3LjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBob25lLTZzLXBsdXNcIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzQxNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA0MTQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42ICgyNjMwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZCBDb3B5PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNDMuMDAwMDAwLCAtNzQuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0My4wMDAwMDAsIDc0LjAwMDAwMCknIGlkPSdOb3RpZmljYXRpb24tY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMNDE0LDAgTDQxNCw2OCBMMCw2OCBMMCwwIFogTTE4OSw2MS4wMDQ4ODE1IEMxODksNTkuODk3NjE2IDE4OS44OTYyNzksNTkgMTkxLjAwMjQsNTkgTDIyMy45OTc2LDU5IEMyMjUuMTAzNDk1LDU5IDIyNiw1OS44OTM4OTk4IDIyNiw2MS4wMDQ4ODE1IEwyMjYsNjEuOTk1MTE4NSBDMjI2LDYzLjEwMjM4NCAyMjUuMTAzNzIxLDY0IDIyMy45OTc2LDY0IEwxOTEuMDAyNCw2NCBDMTg5Ljg5NjUwNSw2NCAxODksNjMuMTA2MTAwMiAxODksNjEuOTk1MTE4NSBMMTg5LDYxLjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLUNvcHknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRcImlwYWRcIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9Jzc2OHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA3NjggNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8dGl0bGU+aXBhZC1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qb3J0cmFpdCcgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDc2OCwwIEw3NjgsNjggTDAsNjggTDAsMCBaIE0zNjYsNjEuMDA0ODgxNSBDMzY2LDU5Ljg5NzYxNiAzNjYuODk2Mjc5LDU5IDM2OC4wMDI0LDU5IEw0MDAuOTk3Niw1OSBDNDAyLjEwMzQ5NSw1OSA0MDMsNTkuODkzODk5OCA0MDMsNjEuMDA0ODgxNSBMNDAzLDYxLjk5NTExODUgQzQwMyw2My4xMDIzODQgNDAyLjEwMzcyMSw2NCA0MDAuOTk3Niw2NCBMMzY4LjAwMjQsNjQgQzM2Ni44OTY1MDUsNjQgMzY2LDYzLjEwNjEwMDIgMzY2LDYxLjk5NTExODUgTDM2Niw2MS4wMDQ4ODE1IFonIGlkPSdpcGFkLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBhZC1wcm9cIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzEwMjRweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMTAyNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5pcGFkLXByby1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qcm8tUG9ydHJhaXQnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMCwwIEwxMDI0LDAgTDEwMjQsNjggTDAsNjggTDAsMCBaIE00OTQsNjEuMDA0ODgxNSBDNDk0LDU5Ljg5NzYxNiA0OTQuODk2Mjc5LDU5IDQ5Ni4wMDI0LDU5IEw1MjguOTk3Niw1OSBDNTMwLjEwMzQ5NSw1OSA1MzEsNTkuODkzODk5OCA1MzEsNjEuMDA0ODgxNSBMNTMxLDYxLjk5NTExODUgQzUzMSw2My4xMDIzODQgNTMwLjEwMzcyMSw2NCA1MjguOTk3Niw2NCBMNDk2LjAwMjQsNjQgQzQ5NC44OTY1MDUsNjQgNDk0LDYzLjEwNjEwMDIgNDk0LDYxLjk5NTExODUgTDQ5NCw2MS4wMDQ4ODE1IFonIGlkPSdpcGFkLXByby1wb3J0cmFpdCc+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0fVxuXHR3aWZpOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG48c3ZnIHdpZHRoPScxOHB4JyBoZWlnaHQ9JzE0cHgnIHZpZXdCb3g9JzAgMCAxOCAxNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cbiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG4gICAgPHRpdGxlPlNoYXBlPC90aXRsZT5cbiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICA8ZGVmcz48L2RlZnM+XG4gICAgPGcgaWQ9J01hdGVyaWFsLURlc2lnbi1TeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cbiAgICAgICAgPGcgaWQ9J01hdGVyaWFsL0FuZHJvaWQvU3RhdHVzLWJhci1jb250ZW50LWxpZ2h0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScjMDAwMDAwJz5cbiAgICAgICAgICAgIDxnIGlkPSd3aWZpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNC4wMDAwMDAsIDQuMDAwMDAwKSc+XG4gICAgICAgICAgICAgICAgPHBhdGggZD0nTTE5LjAyMjYyNzksNC4wMTU5MzEyMyBDMTYuNTExNzgwOSwyLjEyMjU2MzgyIDEzLjM4Njk4NDksMSAxMCwxIEM2LjYxMzAxNTEzLDEgMy40ODgyMTkwOCwyLjEyMjU2MzgyIDAuOTc3MzcyMDg1LDQuMDE1OTMxMjMgTDEwLDE1IEwxOS4wMjI2Mjc5LDQuMDE1OTMxMjMgWicgaWQ9J1NoYXBlJz48L3BhdGg+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICA8L2c+XG48L3N2Zz5cIlxuXHRzaWduYWxIaWdoOiBcIlxuPHN2ZyB3aWR0aD0nMTRweCcgaGVpZ2h0PScxNHB4JyB2aWV3Qm94PScwIDEgMTQgMTQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG4gICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgIDxkZWZzPjwvZGVmcz5cbiAgICA8cG9seWdvbiBpZD0nU2hhcGUnIHN0cm9rZT0nbm9uZScgZmlsbD0nI0ZGRkZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBwb2ludHM9JzAgMTUgMTQgMTUgMTQgMSc+PC9wb2x5Z29uPlxuPC9zdmc+XCJcblx0YWN0aXZpdHk6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlNvY2NlciBCYWxsPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPlxuXHRcdFx0XHRcdDxjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNzkuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J1NvY2Nlci1CYWxsJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNzkuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxtYXNrIGlkPSdtYXNrLTInIHNrZXRjaDpuYW1lPSdNYXNrJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdFx0XHRcdFx0PHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdFx0XHRcdFx0PC9tYXNrPlxuXHRcdFx0XHRcdFx0XHQ8dXNlIGlkPSdNYXNrJyBzdHJva2U9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNiwxMi4xMjAzMDQ2IEwxMi44NTczMzg0LDggTDEzLjM3MjM3NjUsOC44NTcxNjczIEw2LjUxNTAzODA3LDEyLjk3NzQ3MTkgTDYsMTIuMTIwMzA0NiBMNiwxMi4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDcnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTkuMTAwMTEwMyw1LjM0NTEwOTAxIEwxOS41MjI3Mjg1LDYuMjUxNDE2OCBMMTIuMjcyMjY2Miw5LjYzMjM2Mjg5IEwxMS44NDk2NDgsOC43MjYwNTUxIEwxMS44NDk2NDgsOC43MjYwNTUxIFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMy4xMjAzMDQ2IEwxMi44NTczMzg0LC0xIEwxMy4zNzIzNzY1LC0wLjE0MjgzMjY5OSBMNi41MTUwMzgwNywzLjk3NzQ3MTkgTDYsMy4xMjAzMDQ2IEw2LDMuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00tMSw3LjEyMDMwNDYgTDUuODU3MzM4NDEsMyBMNi4zNzIzNzY0OCwzLjg1NzE2NzMgTC0wLjQ4NDk2MTkyNSw3Ljk3NzQ3MTkgTC0xLDcuMTIwMzA0NiBMLTEsNy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PSc0JyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PSc1Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTEuNScgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nMTInPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsNC44NTcxNjczIEwxMS44NTczMzg0LDguOTc3NDcxOSBMMTIuMzcyMzc2NSw4LjEyMDMwNDYgTDUuNTE1MDM4MDcsNCBMNSw0Ljg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDEyLjg1NzE2NzMgTDExLjg1NzMzODQsMTYuOTc3NDcxOSBMMTIuMzcyMzc2NSwxNi4xMjAzMDQ2IEw1LjUxNTAzODA3LDEyIEw1LDEyLjg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weS01JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEnIGZpbGw9JyNEOEQ4RDgnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMS1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNDU3NzExODksMy4xOTUwNDczOSBMNy4zNTUxNDQ4NCw2LjEzMjE4MzMzIEw0LjUzMDA2NzYsNi45NDIyNjEyIEwyLjg4NjY0MDg5LDQuNTA1NzgwOSBMNC42OTYwMjQ1NywyLjE4OTg3NTQxIEw3LjQ1NzcxMTg5LDMuMTk1MDQ3MzknIGlkPSdQb2x5Z29uLTEtQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNDU3NzExODksMTEuMTk1MDQ3NCBMNy4zNTUxNDQ4NCwxNC4xMzIxODMzIEw0LjUzMDA2NzYsMTQuOTQyMjYxMiBMMi44ODY2NDA4OSwxMi41MDU3ODA5IEw0LjY5NjAyNDU3LDEwLjE4OTg3NTQgTDcuNDU3NzExODksMTEuMTk1MDQ3NCcgaWQ9J1BvbHlnb24tMS1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQgTDE0LjQ0MDYwMzEsMy4wMDk3Mjk4OCBMMTEuNjE1NTI1OCwzLjgxOTgwNzc0IEw5Ljk3MjA5OTEyLDEuMzgzMzI3NDUgTDExLjc4MTQ4MjgsLTAuOTMyNTc4MDUgTDE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0JyBpZD0nUG9seWdvbi0xLUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRhbmltYWxzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Hcm91cDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExNy4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpY19Gb29kJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMTguMDAwMDAwLCA2NDAuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdHcm91cCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNjgzNzc1MzcsMS4zODE1NjY0NiBDNi4yMzkyNjA2NiwxLjEzNjI0IDYuODUzNzIwMDUsMSA3LjUsMSBDOC4xNDYyNzk5NSwxIDguNzYwNzM5MzQsMS4xMzYyNCA5LjMxNjIyNDYzLDEuMzgxNTY2NDYgQzkuODA4NzkyNzUsMC41NjIzNTkwMTkgMTAuODI1NTg4OCwwIDEyLDAgQzEzLjY1Njg1NDIsMCAxNSwxLjExOTI4ODEzIDE1LDIuNSBDMTUsMy41NTcxMzk4IDE0LjIxMjYyNDYsNC40NjEwMjg0MyAxMy4wOTk5MjI2LDQuODI2NjI1MTQgQzE0LjI0OTY1MjgsNS42NDE4NTQyMiAxNSw2Ljk4MzMwMDYyIDE1LDguNSBDMTUsMTAuNzE2NzE0NCAxMy4zOTcxODczLDEyLjU1OTA3MTkgMTEuMjg3MjY3MSwxMi45MzEzNjczIEMxMC40ODY3MjQ4LDE0LjE3NTc3MDMgOS4wODk2MTY5NiwxNSA3LjUsMTUgQzUuOTEwMzgzMDQsMTUgNC41MTMyNzUyNCwxNC4xNzU3NzAzIDMuNzEyNzMyOTEsMTIuOTMxMzY3MyBDMS42MDI4MTI2OCwxMi41NTkwNzE5IDAsMTAuNzE2NzE0NCAwLDguNSBDMCw2Ljk4MzMwMDYyIDAuNzUwMzQ3MjQ0LDUuNjQxODU0MjIgMS45MDAwNzc0MSw0LjgyNjYyNTE0IEMwLjc4NzM3NTQ0NSw0LjQ2MTAyODQzIDAsMy41NTcxMzk4IDAsMi41IEMwLDEuMTE5Mjg4MTMgMS4zNDMxNDU3NSwwIDMsMCBDNC4xNzQ0MTEyMiwwIDUuMTkxMjA3MjUsMC41NjIzNTkwMTkgNS42ODM3NzUzNywxLjM4MTU2NjQ2IFonIGlkPSdPdmFsLTgnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS43MzgzNDIyOCwxMiBDNS44NjI5MDk3OSwxMiA2LjE0NjQyMzUzLDEyIDYuMTQ2NDIzNTMsMTIgQzYuMTQ2NDIzNTMsMTIgNi40MzIxNTY5NiwxMi40NDI2MTIzIDYuNTI0NjU4MiwxMi40OTE5NzM5IEM2LjY2NDU1NjAxLDEyLjU2NjYyNzcgNywxMi40OTE5NzM5IDcsMTIuNDkxOTczOSBMNywxMiBMOCwxMiBMOCwxMi40OTE5NzM5IEw4LjQ5Nzk5MjI4LDEyLjQ5MTk3MzkgTDguODQzMDE3NjksMTIgTDkuMzkxODQ1NywxMiBDOS4zOTE4NDU3LDEyIDguOTk1OTg0NTcsMTIuOTgzOTQ3OCA4LjQ5Nzk5MjI4LDEyLjk4Mzk0NzggTDYuNjA3MDI0MDcsMTIuOTgzOTQ3OCBDNi4yMTQwNDgxMywxMi45ODM5NDc4IDUuNDU5OTYwOTQsMTIgNS43MzgzNDIyOCwxMiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHktMic+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQnIGN4PScxMC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQtQ29weScgY3g9JzQuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTIuNjk5OTk2OSw1IEMxMi42OTk5OTY5LDMuMDY3MDAzMzggMTEuMTMyOTkzNiwxLjUgOS4xOTk5OTY5NSwxLjUnIGlkPSdPdmFsLTE2Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSw1IEM1LjUsMy4wNjcwMDMzOCAzLjkzMjk5NjYyLDEuNSAyLDEuNScgaWQ9J092YWwtMTYtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy43NTAwMDAsIDMuMjUwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zLjc1MDAwMCwgLTMuMjUwMDAwKSAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHg9JzcnIHk9JzExJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTAgTDYuNSwxMCBMNi40OTk5OTk5OSw5LjUgTDguNTAwMDAwMDUsOS41IEw4LjUwMDAwMDA1LDEwIEw5LDEwIEw5LDEwLjUgTDguNSwxMC41IEw4LjUsMTEgTDYuNSwxMSBMNi41LDEwLjUgTDYsMTAuNSBMNiwxMCBaJyBpZD0nUGF0aCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRjaGV2cm9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScxM3B4JyBoZWlnaHQ9JzIycHgnIHZpZXdCb3g9JzAgMCAxMyAyMicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmFjayBDaGV2cm9uPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0ICAgICAgICA8ZyBpZD0nTmF2aWdhdGlvbi1CYXIvQmFjaycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTguMDAwMDAwLCAtMzEuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTguNSw0MiBMMTksMzEuNSBMMjEsMzMuNSBMMTIuNSw0MiBMMjEsNTAuNSBMMTksNTIuNSBMOC41LDQyIFonIGlkPSdCYWNrLUNoZXZyb24nPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGVtb2ppIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyMHB4JyBoZWlnaHQ9JzIwcHgnIHZpZXdCb3g9JzAgMCAyMCAyMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+RW1vamk8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L0xvd2VyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNjAuMDAwMDAwLCAtMTgxLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdDxnIGlkPSdCb3R0b20tUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTcwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTY2Ljc1LDMwLjUgQzcyLjEzNDc3NjMsMzAuNSA3Ni41LDI2LjEzNDc3NjMgNzYuNSwyMC43NSBDNzYuNSwxNS4zNjUyMjM3IDcyLjEzNDc3NjMsMTEgNjYuNzUsMTEgQzYxLjM2NTIyMzcsMTEgNTcsMTUuMzY1MjIzNyA1NywyMC43NSBDNTcsMjYuMTM0Nzc2MyA2MS4zNjUyMjM3LDMwLjUgNjYuNzUsMzAuNSBaIE02Ni43NSwyOS41IEM3MS41ODI0OTE2LDI5LjUgNzUuNSwyNS41ODI0OTE2IDc1LjUsMjAuNzUgQzc1LjUsMTUuOTE3NTA4NCA3MS41ODI0OTE2LDEyIDY2Ljc1LDEyIEM2MS45MTc1MDg0LDEyIDU4LDE1LjkxNzUwODQgNTgsMjAuNzUgQzU4LDI1LjU4MjQ5MTYgNjEuOTE3NTA4NCwyOS41IDY2Ljc1LDI5LjUgWiBNNjMuNzUsMTkgQzY0LjQ0MDM1NTksMTkgNjUsMTguNDQwMzU1OSA2NSwxNy43NSBDNjUsMTcuMDU5NjQ0MSA2NC40NDAzNTU5LDE2LjUgNjMuNzUsMTYuNSBDNjMuMDU5NjQ0MSwxNi41IDYyLjUsMTcuMDU5NjQ0MSA2Mi41LDE3Ljc1IEM2Mi41LDE4LjQ0MDM1NTkgNjMuMDU5NjQ0MSwxOSA2My43NSwxOSBaIE02OS43NSwxOSBDNzAuNDQwMzU1OSwxOSA3MSwxOC40NDAzNTU5IDcxLDE3Ljc1IEM3MSwxNy4wNTk2NDQxIDcwLjQ0MDM1NTksMTYuNSA2OS43NSwxNi41IEM2OS4wNTk2NDQxLDE2LjUgNjguNSwxNy4wNTk2NDQxIDY4LjUsMTcuNzUgQzY4LjUsMTguNDQwMzU1OSA2OS4wNTk2NDQxLDE5IDY5Ljc1LDE5IFogTTU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBDNTkuNjM5MDMxNiwyMS4zODMxMzQgNjAuMDY1OTE4LDIwLjk3ODUxNTYgNjAuODUzMDk1MSwyMS4yMzI5MzA0IEM2MC44NTMwOTUxLDIxLjIzMjkzMDQgNjMuMDkzNzUwMywyMi4yMTI1IDY2Ljc1MDAwMDEsMjIuMjEyNSBDNzAuNDA2MjQ5OSwyMi4yMTI1IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgQzczLjQyODcxNjIsMjAuOTY2MjE1MyA3My44ODEyNDYzLDIxLjQwNDQwOTcgNzMuNjA1ODQ3NywyMi4xODA3NDM3IEM3My42MDU4NDc3LDIyLjE4MDc0MzcgNzIuNiwyNy41NzUgNjYuNzUsMjcuNTc1IEM2MC45LDI3LjU3NSA1OS44ODc2MzM0LDIyLjE2NDE0NDQgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IFogTTY2Ljc1LDIzLjE4NzUgQzY0LjA2ODc1LDIzLjE4NzUgNjEuODU0NDA1NSwyMi40NzM3ODIxIDYxLjg1NDQwNTUsMjIuNDczNzgyMSBDNjEuMzI3MzAxOSwyMi4zMjk0OCA2MS4xNzgxMjMzLDIyLjU3MjE2MTUgNjEuNTYzOTU1NSwyMi45NTcwNzUgQzYxLjU2Mzk1NTUsMjIuOTU3MDc1IDYyLjM2MjUsMjQuNjUgNjYuNzUsMjQuNjUgQzcxLjEzNzUsMjQuNjUgNzEuOTUwODUwMywyMi45NDM4MzA0IDcxLjk1MDg1MDMsMjIuOTQzODMwNCBDNzIuMzA5MzY1OSwyMi41Mzk5Mjc4IDcyLjE2OTA3OTMsMjIuMzM1OTg0NCA3MS42MzU0MjczLDIyLjQ3NjM0OSBDNzEuNjM1NDI3MywyMi40NzYzNDkgNjkuNDMxMjUsMjMuMTg3NSA2Ni43NSwyMy4xODc1IFonIGlkPSdFbW9qaSc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGRlbGV0ZToge1xuXHRcdG9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMjRweCcgaGVpZ2h0PScxOHB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdG9mZiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMjRweCcgaGVpZ2h0PScxOHB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFogTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM4LjcwOTcyLDIxLjcwOTcxOTUgQzMzOC4zMTc3NTIsMjEuMzE3NzUyMiAzMzguMzE4OTY1LDIwLjY4MTAzNDkgMzM4LjcwOTcyLDIwLjI5MDI4MDUgTDM0NC42NDMyNDUsMTQuMzU2NzU0NyBDMzQ0Ljg0MDI3NiwxNC4xNTk3MjQ1IDM0NS4yMjU2MzksMTQgMzQ1LjQ5Mzc0MSwxNCBMMzU1Ljk5NzIzOSwxNCBDMzU3LjEwMzMzMywxNCAzNTcuOTk5OTk5LDE0Ljg5NzA2MDEgMzU3Ljk5OTk5OSwxNi4wMDU4NTg2IEwzNTcuOTk5OTk5LDI1Ljk5NDE0MTIgQzM1Ny45OTk5OTksMjcuMTAxOTQ2NCAzNTcuMTA2NDU3LDI3Ljk5OTk5OTkgMzU1Ljk5NzIzOSwyNy45OTk5OTk5IEwzNDUuNDkzNzQxLDI4IEMzNDUuMjIxMDU2LDI4IDM0NC44NDA2NDMsMjcuODQwNjQzMSAzNDQuNjQzMjQ2LDI3LjY0MzI0NTMgTDMzOC43MDk3MiwyMS43MDk3MTk1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0fVxuXHRmb29kIDogIFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkZvb2Q8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0OC4wMDAwMDAsIC02MzcuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nRm9vZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQ5LjUwMDAwMCwgMjI5LjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjUsMTUuNSBMMSwxNS41IEwwLDUgTDYuNSw1IEw2LjI2MzYwOTMzLDcuNDgyMTAyMDInIGlkPSdEcmluaycgc3Ryb2tlPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYuMDEwNzc1NDUsMS45NjkzMDA5OCBMNi41MTU3MTM1Miw1LjIyMjcwNTM5IEw1LjcxOTA4MTg0LDUuNjc5NDc4MTIgTDUuMDM4OTAwOSwxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDEuOTY5MzAwOTggTDYuMDEwNzc1NDUsMS45NjkzMDA5OCBaJyBpZD0nU3RyYXcnIGZpbGw9JyM0QTU0NjEnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDYuODU1NTcyLCAzLjMyNDM5MCkgcm90YXRlKDI0LjAwMDAwMCkgdHJhbnNsYXRlKC02Ljg1NTU3MiwgLTMuMzI0MzkwKSAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nQm90dG9tLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyB4PSczJyB5PScxNCcgd2lkdGg9JzEwLjUnIGhlaWdodD0nMS41JyByeD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xLjUsMTIuNTAyNDQwOCBDMS41LDExLjk0ODgwOCAxLjk0OTE2OTE2LDExLjUgMi40OTI2ODcyMywxMS41IEwxNC4wMDczMTI4LDExLjUgQzE0LjU1NTU1ODgsMTEuNSAxNSwxMS45NDY5NDk5IDE1LDEyLjUwMjQ0MDggTDE1LDEyLjk5NzU1OTIgQzE1LDEzLjU1MTE5MiAxNC41NTA4MzA4LDE0IDE0LjAwNzMxMjgsMTQgTDIuNDkyNjg3MjMsMTQgQzEuOTQ0NDQxMjEsMTQgMS41LDEzLjU1MzA1MDEgMS41LDEyLjk5NzU1OTIgTDEuNSwxMi41MDI0NDA4IFogTTMuOTMzMDAwMDMsMTEuODM5MjcyNyBDMy40MTc3MTgzNCwxMS42NTE4OTc2IDMuNDQ0ODM2OTcsMTEuNSAzLjk5NTU3NzUsMTEuNSBMMTMuMDA0NDIyNSwxMS41IEMxMy41NTQyNjQ4LDExLjUgMTMuNTg2NjA2MSwxMS42NTAzMjUxIDEzLjA2NywxMS44MzkyNzI3IEw4LjUsMTMuNSBMMy45MzMwMDAwMywxMS44MzkyNzI3IFonIGlkPScmcXVvdDtQYXR0eSZxdW90OycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yLjUsMTAuNSBMMTMuNSwxMC41IEwxNSwxMS41IEwxLDExLjUgTDIuNSwxMC41IFonIGlkPSdDaGVlc2UnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNOC4yNSwxMC41IEMxMS40MjU2MzczLDEwLjUgMTQsMTAuMzI4NDI3MSAxNCw5LjUgQzE0LDguNjcxNTcyODggMTEuNDI1NjM3Myw4IDguMjUsOCBDNS4wNzQzNjI2OSw4IDIuNSw4LjY3MTU3Mjg4IDIuNSw5LjUgQzIuNSwxMC4zMjg0MjcxIDUuMDc0MzYyNjksMTAuNSA4LjI1LDEwLjUgWicgaWQ9J1RvcC1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLXdpZHRoPScwLjc1Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGZsYWdzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTFweCcgaGVpZ2h0PScxNXB4JyB2aWV3Qm94PScwIDAgMTEgMTUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5GbGFnPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNzUuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J0ZsYWcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3NS4wMDAwMDAsIDIzMS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUG9sZScgZmlsbD0nIzRBNTQ2MScgeD0nMCcgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMTQnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMSwxIEMxLDEgMS4yNSwyIDMuNSwyIEM1Ljc1LDIgNiwwLjc0OTk5OTk5OCA4LDAuNzUgQzEwLDAuNzQ5OTk5OTk4IDEwLDEuNSAxMCwxLjUgTDEwLDcuNSBDMTAsNy41IDEwLDYuNSA4LDYuNSBDNiw2LjUgNC44MDYyMzkxMSw4IDMuNSw4IEMyLjE5Mzc2MDg5LDggMSw3IDEsNyBMMSwxIFonIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRmcmVxdWVudDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+UmVjZW50PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01NS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nUmVjZW50JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1NS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdCb2R5JyBzdHJva2U9JyM0QTU0NjEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNSw3LjUgTDcuNSw4LjUgTDguNSw4LjUgTDguNSwyIEw3LjUsMiBMNy41LDcuNSBMNCw3LjUgTDQsOC41IEw4LjUsOC41IEw4LjUsNy41IEw3LjUsNy41IFonIGlkPSdIYW5kcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRrZXlib2FyZCA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPSczMi41cHgnIGhlaWdodD0nMjMuNXB4JyB2aWV3Qm94PScwIDAgNjUgNDcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qb3J0cmFpdCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0MzYuMDAwMDAwLCAtMTk1Ni4wMDAwMDApJyBmaWxsPScjMDAwMDAwJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZC1MaWdodCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDE0MjIuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkLWRvd24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0MTIuMDAwMDAwLCA1MDAuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J004Ny4wMDEzMzIsMzQgQzg4LjEwNTE2NTksMzQgODksMzQuODk5NzEyNyA4OSwzNS45OTMyODc0IEw4OSw2MS4wMDY3MTI2IEM4OSw2Mi4xMDc1NzQ4IDg4LjEwNTg3NTksNjMgODcuMDAxMzMyLDYzIEwyNS45OTg2NjgsNjMgQzI0Ljg5NDgzNDEsNjMgMjQsNjIuMTAwMjg3MyAyNCw2MS4wMDY3MTI2IEwyNCwzNS45OTMyODc0IEMyNCwzNC44OTI0MjUyIDI0Ljg5NDEyNDEsMzQgMjUuOTk4NjY4LDM0IEw4Ny4wMDEzMzIsMzQgWiBNMjYsMzYgTDI2LDYxIEw4Nyw2MSBMODcsMzYgTDI2LDM2IFogTTc5LDQwIEw4Myw0MCBMODMsNDQgTDc5LDQ0IEw3OSw0MCBaIE03Miw0MCBMNzYsNDAgTDc2LDQ0IEw3Miw0NCBMNzIsNDAgWiBNNjUsNDAgTDY5LDQwIEw2OSw0NCBMNjUsNDQgTDY1LDQwIFogTTU4LDQwIEw2Miw0MCBMNjIsNDQgTDU4LDQ0IEw1OCw0MCBaIE01MSw0MCBMNTUsNDAgTDU1LDQ0IEw1MSw0NCBMNTEsNDAgWiBNNDQsNDAgTDQ4LDQwIEw0OCw0NCBMNDQsNDQgTDQ0LDQwIFogTTM3LDQwIEw0MSw0MCBMNDEsNDQgTDM3LDQ0IEwzNyw0MCBaIE0zMCw0MCBMMzQsNDAgTDM0LDQ0IEwzMCw0NCBMMzAsNDAgWiBNNzksNDcgTDgzLDQ3IEw4Myw1MSBMNzksNTEgTDc5LDQ3IFogTTcyLDQ3IEw3Niw0NyBMNzYsNTEgTDcyLDUxIEw3Miw0NyBaIE02NSw0NyBMNjksNDcgTDY5LDUxIEw2NSw1MSBMNjUsNDcgWiBNNTgsNDcgTDYyLDQ3IEw2Miw1MSBMNTgsNTEgTDU4LDQ3IFogTTUxLDQ3IEw1NSw0NyBMNTUsNTEgTDUxLDUxIEw1MSw0NyBaIE00NCw0NyBMNDgsNDcgTDQ4LDUxIEw0NCw1MSBMNDQsNDcgWiBNMzcsNDcgTDQxLDQ3IEw0MSw1MSBMMzcsNTEgTDM3LDQ3IFogTTMwLDQ3IEwzNCw0NyBMMzQsNTEgTDMwLDUxIEwzMCw0NyBaIE03OSw1NCBMODMsNTQgTDgzLDU4IEw3OSw1OCBMNzksNTQgWiBNNzIsNTQgTDc2LDU0IEw3Niw1OCBMNzIsNTggTDcyLDU0IFogTTQ0LDU0IEw2OSw1NCBMNjksNTggTDQ0LDU4IEw0NCw1NCBaIE0zNyw1NCBMNDEsNTQgTDQxLDU4IEwzNyw1OCBMMzcsNTQgWiBNMzAsNTQgTDM0LDU0IEwzNCw1OCBMMzAsNTggTDMwLDU0IFogTTQ0LjMxNjM0OTgsNjkuOTc3MTA0NyBDNDMuMzY4NDIyNSw3MC41NDIwMzQyIDQzLjMzMzg3MjEsNzEuNTA5NjQ5NSA0NC4yMzc4MjE3LDcyLjEzNzM5MTIgTDU1LjM2MjE1MzksNzkuODYyNjA4OCBDNTYuMjY2NzExMyw4MC40OTA3NzI2IDU3LjczMzg5NjUsODAuNDkwMzUwNSA1OC42Mzc4NDYxLDc5Ljg2MjYwODggTDY5Ljc2MjE3ODMsNzIuMTM3MzkxMiBDNzAuNjY2NzM1Nyw3MS41MDkyMjc0IDcwLjY0ODAxMiw3MC41MjA1MjA0IDY5LjcxMTUxODcsNjkuOTIzNDE2NiBMNjkuOTgyNTczMSw3MC4wOTYyMzk2IEM2OS41MTgxMzMzLDY5LjgwMDExNSA2OC43NzgyNTU3LDY5LjgxMjY0OTMgNjguMzI2MTMwNyw3MC4xMjY5MzIzIEw1Ny44MTU0OTk5LDc3LjQzMzEyNjMgQzU3LjM2NTExMTcsNzcuNzQ2MjAyIDU2LjYyODE2NSw3Ny43MzgxNzg2IDU2LjE3NjIxMDMsNzcuNDE5OTQyNCBMNDUuODM4NjEzNyw3MC4xNDA4OTc3IEM0NS4zODM2NDcyLDY5LjgyMDU0MDcgNDQuNjM3NTAzOSw2OS43ODU3MDg4IDQ0LjE1NjYzOTMsNzAuMDcyMjg2MiBMNDQuMzE2MzQ5OCw2OS45NzcxMDQ3IFonIGlkPSdTaGFwZSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGtleVBvcFVwOlxuXHRcdFwiaXBob25lLTVcIiA6IFwiPHN2ZyB3aWR0aD0nNTVweCcgaGVpZ2h0PSc5MnB4JyB2aWV3Qm94PSc1MyAzMTYgNTUgOTInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuMzQxNzMyMzEsNDAuOTM5MTcwMSBDMC41MTc0NjYxMjgsNDAuMjA1ODkgMCwzOS4xMzc0MjUxIDAsMzcuOTQ3NzYzNSBMMCw0LjAwMzQ1NTk4IEMwLDEuNzg5MTcxMzYgMS43OTUyODI0OCwwIDQuMDA5ODc1NjYsMCBMNDQuOTkwMTI0MywwIEM0Ny4yMTI1NjA4LDAgNDksMS43OTI0MDgzIDQ5LDQuMDAzNDU1OTggTDQ5LDM3Ljk0Nzc2MzUgQzQ5LDM4LjkxMjQwNTEgNDguNjU5Mjc5OCwzOS43OTYzNjU5IDQ4LjA5MTYwNDEsNDAuNDg2ODY2NSBDNDguMDQxNDIzMyw0MC45MDMyMjg5IDQ3LjcxMTE4ODgsNDEuNDA3NDY3MiA0Ny4wODI1OTA4LDQxLjk1MjI1IEM0Ny4wODI1OTA4LDQxLjk1MjI1IDM4LjUyOTkxNDUsNDkuMDY0MzM2MiAzOC41Mjk5MTQ1LDUxLjE1MjY0MjQgQzM4LjUyOTkxNDUsNjEuNjQ5NzU2MSAzOC4xNzcwMDk5LDgyLjAwMjU0MDYgMzguMTc3MDA5OSw4Mi4wMDI1NDA2IEMzOC4xNDEyMzA0LDg0LjIwMjQzNTQgMzYuMzIxMDI4NCw4NiAzNC4xMTI4NDk1LDg2IEwxNS4zMDU5NTM5LDg2IEMxMy4xMDc5Niw4NiAxMS4yNzgxODg0LDg0LjIxMDA3ODkgMTEuMjQxNzkzNiw4Mi4wMDIwOTkzIEMxMS4yNDE3OTM2LDgyLjAwMjA5OTMgMTAuODg4ODg4OSw2MS42NDcwODUyIDEwLjg4ODg4ODksNTEuMTQ4NjM2MSBDMTAuODg4ODg4OSw0OS4wNjE2NjU0IDIuMzQxNDM2NjIsNDIuMjM4NjU1IDIuMzQxNDM2NjIsNDIuMjM4NjU1IEMxLjc3ODI3MzExLDQxLjc2NDEzNjUgMS40NDg4MTM1NCw0MS4zMjA0MjM3IDEuMzQxNzMyMzEsNDAuOTM5MTcwMSBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc0OScgaGVpZ2h0PSc4NicgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1Ni4wMDAwMDAsIDMxOC4wMDAwMDApJz5cblx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nI0IyQjRCOScgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjRkNGQ0ZDJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRcImlwaG9uZS02c1wiIDogXCI8c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzEwN3B4JyB2aWV3Qm94PScyNCAzODcgNjQgMTA3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHQgICAgICAgIDxwYXRoIGQ9J00xLjQ4NjQ3NjQ2LDQ4LjM3Nzk5NDcgQzAuNTgwMjY2NDksNDcuNjQ2NDI5NiAwLDQ2LjUyOTU4NyAwLDQ1LjI3ODE5NDggTDAsMy45OTAwOTc4NyBDMCwxLjc4MjU5MTIgMS43OTUwOTU3NywwIDQuMDA5NDU4NjIsMCBMNTMuOTkwNTQxNCwwIEM1Ni4yMDA1NzQ2LDAgNTgsMS43ODY0Mjc2NyA1OCwzLjk5MDA5Nzg3IEw1OCw0NS4yNzgxOTQ4IEM1OCw0Ni4xODMzMDA0IDU3LjY5ODIyNTgsNDcuMDE2OTczMyA1Ny4xODk1MDk3LDQ3LjY4NTYzMjUgQzU3LjAzOTY4NjUsNDguMDIxMjQ5NyA1Ni43MzYwMDk4LDQ4LjM5NzI4MzQgNTYuMjcxODM2Myw0OC43OTUwNjYxIEM1Ni4yNzE4MzYzLDQ4Ljc5NTA2NjEgNDUuNjA2ODM3Niw1Ny42MjIwNjkzIDQ1LjYwNjgzNzYsNjAuMDc0NjE0OSBDNDUuNjA2ODM3Niw3Mi40MDI2MjA1IDQ1LjE3Nzk2Nyw5Ni45OTIzMTY0IDQ1LjE3Nzk2Nyw5Ni45OTIzMTY0IEM0NS4xNDEzNzQ4LDk5LjIxMjIyMTQgNDMuMzE5MzA2NSwxMDEgNDEuMTA5MDAzNSwxMDEgTDE3LjM4NjcyMywxMDEgQzE1LjE4MTI3MjIsMTAxIDEzLjM1NDY4Myw5OS4yMDU1MDA5IDEzLjMxNzc1OTUsOTYuOTkxODc0MSBDMTMuMzE3NzU5NSw5Ni45OTE4NzQxIDEyLjg4ODg4ODksNzIuMzk5NDgzOCAxMi44ODg4ODg5LDYwLjA2OTkwOTkgQzEyLjg4ODg4ODksNTcuNjE4OTMyNiAyLjIyNjczNDM3LDQ5LjE0NjI5MzYgMi4yMjY3MzQzNyw0OS4xNDYyOTM2IEMxLjkwNTI0MDg3LDQ4Ljg3ODgzMjcgMS42NTkxMTY1NSw0OC42MjA3MzMgMS40ODY0NzY0Niw0OC4zNzc5OTQ3IFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzU4JyBoZWlnaHQ9JzEwMScgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNy4wMDAwMDAsIDM4OS4wMDAwMDApJz5cblx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nI0IyQjRCOScgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjRkNGQ0ZDJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRcImlwaG9uZS02cy1wbHVzXCIgOiBcIjxzdmcgd2lkdGg9JzcwcHgnIGhlaWdodD0nMTE5cHgnIHZpZXdCb3g9JzI4IDQ1MCA3MCAxMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuOTU3MjkzOTUsNTQuMDcyODMwNCBDMC43ODU5MTExMzIsNTMuMzc1NzY5OSAwLDUyLjA5ODc3NiAwLDUwLjYzODkwMjIgTDAsMy45OTUyNDQxOSBDMCwxLjc4NjcxNDI4IDEuNzkyNDIyMDIsMCA0LjAwMzQ4NjYzLDAgTDU5Ljk5NjUxMzQsMCBDNjIuMjA0NjIzNSwwIDY0LDEuNzg4NzMxNzUgNjQsMy45OTUyNDQxOSBMNjQsNTAuNjM4OTAyMiBDNjQsNTEuOTIzMzY4NiA2My4zOTM3MTE2LDUzLjA2NTE1NTYgNjIuNDUxMzkxLDUzLjc5NTc1NCBDNjIuNDQyNzc1Miw1My44MDMyNDMzIDYyLjQzNDEwMTksNTMuODEwNzQwNCA2Mi40MjUzNzA5LDUzLjgxODI0NTQgQzYyLjQyNTM3MDksNTMuODE4MjQ1NCA1MC4zMjQ3ODYzLDYzLjg5Nzc0MDIgNTAuMzI0Nzg2Myw2Ni42MTczOTQ3IEM1MC4zMjQ3ODYzLDgwLjI4ODA1NDQgNDkuODQ0MzA0OSwxMDguMDAyMDA3IDQ5Ljg0NDMwNDksMTA4LjAwMjAwNyBDNDkuODA3OTY2NSwxMTAuMjEwMjM0IDQ3Ljk4NzQyMzIsMTEyIDQ1Ljc3ODkwODksMTEyIEwxOC43NjgwOTk3LDExMiBDMTYuNTUzNDM5NywxMTIgMTQuNzM5NDQ1NiwxMTAuMjA5ODQgMTQuNzAyNzAzNywxMDguMDAxNTY2IEMxNC43MDI3MDM3LDEwOC4wMDE1NjYgMTQuMjIyMjIyMiw4MC4yODQ1NzYxIDE0LjIyMjIyMjIsNjYuNjEyMTc3MyBDMTQuMjIyMjIyMiw2My44OTQyNjE5IDIuMTQwODE0MjIsNTQuMjMyMTMzNyAyLjE0MDgxNDIyLDU0LjIzMjEzMzcgQzIuMDc2NjQ5MTMsNTQuMTc4NjI5OCAyLjAxNTQ4MTExLDU0LjEyNTUxMzQgMS45NTcyOTM5NSw1NC4wNzI4MzA0IFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzY0JyBoZWlnaHQ9JzExMicgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMS4wMDAwMDAsIDQ1Mi4wMDAwMDApJz5cblx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nI0IyQjRCOScgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjRkNGQ0ZDJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0b2JqZWN0cyA6XG5cdFx0XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMTFweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTEgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5MaWdodGJ1bGI8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDQuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nTGlnaHRidWxiJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDQuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LDEwLjQwMDI5MDQgQzkuNzgwODM3OTUsOS40ODk5MzQ5MSAxMSw3LjYzNzM0MjczIDExLDUuNSBDMTEsMi40NjI0MzM4OCA4LjUzNzU2NjEyLDAgNS41LDAgQzIuNDYyNDMzODgsMCAwLDIuNDYyNDMzODggMCw1LjUgQzAsNy42MzczNDI3MyAxLjIxOTE2MjA1LDkuNDg5OTM0OTEgMywxMC40MDAyOTA0IEwzLDE0LjAwMjA4NjkgQzMsMTUuMTAxNzM5NCAzLjg5NzYxNjAyLDE2IDUuMDA0ODgxNSwxNiBMNS45OTUxMTg1LDE2IEM3LjEwNjEwMDIsMTYgOCwxNS4xMDU1MDM4IDgsMTQuMDAyMDg2OSBMOCwxMC40MDAyOTA0IFonIGlkPSdPdmFsLTE3JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzMnIHk9JzEyJyB3aWR0aD0nNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzQnIHk9JzEzLjUnIHdpZHRoPScxLjUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSw4LjUgQzUsOC41IDMuNDk5OTk5OTksNy41MDAwMDAwMSA0LDcgQzQuNTAwMDAwMDEsNi40OTk5OTk5OSA1LDcuNjY2NjY2NjcgNS41LDggQzUuNSw4IDYuNSw2LjUwMDAwMDAxIDcsNyBDNy41LDcuNDk5OTk5OTkgNiw4LjUgNiw4LjUgTDYsMTEgTDUsMTEgTDUsOC41IFonIGlkPSdSZWN0YW5nbGUtNTInIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdHNoaWZ0IDoge1xuXHRcdG9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScxOHB4JyB2aWV3Qm94PScwIDAgMjAgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMjEuNzA1MjM4OCwxMy4yMDUyMzg4IEMyMS4zMTU3NDYyLDEyLjgxNTc0NjIgMjAuNjg1NzU1OSwxMi44MTQyNDQxIDIwLjI5NDc2MTIsMTMuMjA1MjM4OCBMMTEuOTE2MDc2NywyMS41ODM5MjMzIEMxMS4xMzM5OTkxLDIyLjM2NjAwMDkgMTEuMzk4MjYwNiwyMyAxMi40OTc5MTMxLDIzIEwxNi41LDIzIEwxNi41LDI4LjAwOTIyMiBDMTYuNSwyOC41NTY0MTM2IDE2Ljk0NjMxMTQsMjkgMTcuNDk3NTQ0NiwyOSBMMjQuNTAyNDU1NCwyOSBDMjUuMDUzMzg0LDI5IDI1LjUsMjguNTQ5MDI0OCAyNS41LDI4LjAwOTIyMiBMMjUuNSwyMyBMMjkuNTAyMDg2OSwyMyBDMzAuNjA1NTAzOCwyMyAzMC44NjY4MjQsMjIuMzY2ODI0IDMwLjA4MzkyMzMsMjEuNTgzOTIzMyBMMjEuNzA1MjM4OCwxMy4yMDUyMzg4IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdG9mZiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScxOHB4JyB2aWV3Qm94PScwIDAgMjAgMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEyOS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTIxLjY3MTkwMDgsMTIuMjMyNTg5OCBDMjEuMzAxMDMyLDExLjgyNzk5MTYgMjAuNjk0Njg5MiwxMS44MzM0NzMxIDIwLjMyODgxOTUsMTIuMjMyNTg5OCBMMTEuNjk0NzAyMywyMS42NTEyOTgzIEMxMC43NTg3NDQxLDIyLjY3MjMwOCAxMS4xMjg1NTQxLDIzLjUgMTIuNTA5Nzc1MSwyMy41IEwxNS45OTk5OTk5LDIzLjUwMDAwMDIgTDE1Ljk5OTk5OTksMjguMDAxNDI0MSBDMTUuOTk5OTk5OSwyOC44MjkwNjQ4IDE2LjY3MTY1NTksMjkuNTAwMDAwMSAxNy40OTcxMDEsMjkuNTAwMDAwMSBMMjQuNTAyODk5MiwyOS41MDAwMDAxIEMyNS4zMjk3MjUzLDI5LjUwMDAwMDEgMjYuMDAwMDAwMywyOC44MzQ5NzAzIDI2LjAwMDAwMDMsMjguMDAxNDI0MSBMMjYuMDAwMDAwMywyMy41MDAwMDAxIEwyOS40OTAyMjUxLDIzLjUwMDAwMDIgQzMwLjg3NjMzNTcsMjMuNTAwMDAwMiAzMS4yNDM5NTIxLDIyLjY3NTE5MTYgMzAuMzA1NDE2MSwyMS42NTEyOTg1IEwyMS42NzE5MDA4LDEyLjIzMjU4OTggWiBNMjEuMzQxNzQ4LDE0LjM2NDUzMTYgQzIxLjE1MzAwNTYsMTQuMTYzMjA2NCAyMC44NDMzNTE1LDE0LjE2NzA5MTQgMjAuNjU4MjUxNCwxNC4zNjQ1MzE2IEwxMy41LDIxLjk5OTk5OTggTDE3LjUwMDAwMDEsMjEuOTk5OTk5OSBMMTcuNTAwMDAwMiwyNy41MDg5OTU2IEMxNy41MDAwMDAyLDI3Ljc4MDE3MDMgMTcuNzMyOTAyNywyOC4wMDAwMDA4IDE4LjAwMzQyMjksMjguMDAwMDAwOCBMMjMuOTk2NTc3LDI4LjAwMDAwMDggQzI0LjI3NDYwOTcsMjguMDAwMDAwOCAyNC40OTk5OTk3LDI3Ljc3MjEyMDMgMjQuNDk5OTk5NywyNy41MDg5OTU2IEwyNC40OTk5OTk3LDIxLjk5OTk5OTkgTDI4LjUsMjEuOTk5OTk5OSBMMjEuMzQxNzQ4LDE0LjM2NDUzMTYgWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0fVxuXHRzbWlsZXlzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT46RDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODYuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9JzpEJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg4Ny4wMDAwMDAsIDIzMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdIZWFkJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43ODk0NzM2ODQnIGN4PSc3LjUnIGN5PSc3LjUnIHI9JzcuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNSwxMy41MjYzMTU4IEMxMC4yNjg2OTA3LDEzLjUyNjMxNTggMTIuNTEzMTU3OSwxMC4zNjg0MjEyIDEyLjUxMzE1NzksOS4xODQyMTA0NSBDMTIuNTEzMTU3OSw3LjYwNTI2MzE3IDExLjQzODkwOTgsOS4xODQyMTA0MyA3LjUsOS4xODQyMTA1MyBDMy41NjEwOTAyMyw5LjE4NDIxMDYyIDIuNDg2ODQyMTEsNy42MDUyNjMxNyAyLjQ4Njg0MjExLDkuMTg0MjEwNDUgQzIuNDg2ODQyMTEsMTAuMzY4NDIxIDQuNzMxMzA5MzUsMTMuNTI2MzE1OCA3LjUsMTMuNTI2MzE1OCBaIE03LjUsMTAuOTYwNTI2MyBDOC45MzIzMzA4MywxMS4xNTc4OTQ3IDExLjc5Njk5MjUsMTAuMzY4NDIxIDExLjc5Njk5MjUsOS40NDQyMzU1MiBDMTEuNzk2OTkyNSw4Ljc4OTQ3MzY4IDEwLjg3NjIwODQsOS41Nzg5NDcyNyA3LjUsOS43NzYzMTU3OSBDNC4xMjM3OTE2Miw5LjU3ODk0NzQzIDMuMjAzMDA4NzIsOC43ODk0NzM2OSAzLjIwMzAwNzUyLDkuNDQ0MjM1NTIgQzMuMjAzMDA1ODIsMTAuMzY4NDIxIDYuMDY3NjY5MTcsMTEuMTU3ODk0NyA3LjUsMTAuOTYwNTI2MyBaJyBpZD0nU21pbGUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS4yMzY4NDIxMSw2LjMyMzY1OTggQzUuNjQzNzg4NzYsNi4zMjM2NTk4IDUuOTczNjg0MjEsNS44ODE4MzU1NCA1Ljk3MzY4NDIxLDUuMzM2ODE3NjkgQzUuOTczNjg0MjEsNC43OTE3OTk4NSA1LjY0Mzc4ODc2LDQuMzQ5OTc1NTkgNS4yMzY4NDIxMSw0LjM0OTk3NTU5IEM0LjgyOTg5NTQ1LDQuMzQ5OTc1NTkgNC41LDQuNzkxNzk5ODUgNC41LDUuMzM2ODE3NjkgQzQuNSw1Ljg4MTgzNTU0IDQuODI5ODk1NDUsNi4zMjM2NTk4IDUuMjM2ODQyMTEsNi4zMjM2NTk4IFogTTkuNzM2ODQyMTEsNi4zMjM2NTk4IEMxMC4xNDM3ODg4LDYuMzIzNjU5OCAxMC40NzM2ODQyLDUuODgxODM1NTQgMTAuNDczNjg0Miw1LjMzNjgxNzY5IEMxMC40NzM2ODQyLDQuNzkxNzk5ODUgMTAuMTQzNzg4OCw0LjM0OTk3NTU5IDkuNzM2ODQyMTEsNC4zNDk5NzU1OSBDOS4zMjk4OTU0NSw0LjM0OTk3NTU5IDksNC43OTE3OTk4NSA5LDUuMzM2ODE3NjkgQzksNS44ODE4MzU1NCA5LjMyOTg5NTQ1LDYuMzIzNjU5OCA5LjczNjg0MjExLDYuMzIzNjU5OCBaJyBpZD0nRXllcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXG5cdHN5bWJvbHM6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE3cHgnIHZpZXdCb3g9JzAgMCAxNSAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk9iamVjdHMgJmFtcDsgU3ltYm9sczwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzA0LjAwMDAwMCwgLTYzOC4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdPYmplY3RzLSZhbXA7LVN5bWJvbHMnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwNC4wMDAwMDAsIDIzMC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpbmcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAwLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScwJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzInIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIxMScgeD0nMycgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nNCc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuNzUsMC4xNTkyNjM5NzggTDExLjc1LDAgTDExLDAgTDExLDUuMDkxNDkzIEMxMC41OTM0NCw0Ljk0MjIxMzkyIDEwLjA2Mzk2NjIsNC45NjQ1MzIyNCA5LjU1NzE1Mzk5LDUuMTkwMTc5NTcgQzguNjk4NDkyOTMsNS41NzI0ODAxIDguMjMwMDM4MzUsNi4zOTM2NTYyMSA4LjUxMDgzMTQxLDcuMDI0MzI3NzQgQzguNzkxNjI0NDcsNy42NTQ5OTkyOCA5LjcxNTMzNDU0LDcuODU2MzQzNzUgMTAuNTczOTk1Niw3LjQ3NDA0MzIxIEMxMS4yNzYxMTgzLDcuMTYxNDM4MDMgMTEuNzE3MzM5Myw2LjU1NTM4OTcyIDExLjcwMTM1OTUsNiBMMTEuNzUsNiBMMTEuNzUsMS4zOTM4NTA1NiBDMTIuMzE3NTkwOCwxLjU5NTkwMDM3IDEzLDIuMDgxNzQ1NiAxMywzLjI1IEMxMyw0LjI1IDEyLjc1LDUuNSAxMi43NSw1LjUgQzEyLjc1LDUuNSAxMy43NSw0Ljc1IDEzLjc1LDIuNSBDMTMuNzUsMS4wMjI1NjEwMSAxMi41NjQyNjc0LDAuNDA3NDczMDE5IDExLjc1LDAuMTU5MjYzOTc4IFonIGlkPSdOb3RlJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgaWQ9JyZhbXA7JyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHNwYW4geD0nMC4yNScgeT0nMTYnPiZhbXA7PC90c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgaWQ9JyUnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDx0c3BhbiB4PSc3Ljc1JyB5PScxNic+JTwvdHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHR0cmF2ZWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlRyYW5zcG9ydDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQxLjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUcmFuc3BvcnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0MS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCw2IEwxLDYgTDEsMTUgTDAsMTUgTDAsNiBaIE0xNSw0IEwxNiw0IEwxNiwxNSBMMTUsMTUgTDE1LDQgWiBNMy41LDAgTDQuNSwwIEw0LjUsNyBMMy41LDcgTDMuNSwwIFogTTEsNiBMMy41LDYgTDMuNSw3IEwxLDcgTDEsNiBaIE00LjUsMCBMOS41LDAgTDkuNSwxIEw0LjUsMSBMNC41LDAgWiBNOS41LDAgTDEwLjUsMCBMMTAuNSw2IEw5LjUsNiBMOS41LDAgWiBNMTAuNSw0IEwxNSw0IEwxNSw1IEwxMC41LDUgTDEwLjUsNCBaJyBpZD0nU2t5bGluZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGlkPSdXaW5kb3dzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzAnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSc1LjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nMTEnIHk9JzQnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGlkPSdDYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIuNTAwMDAwLCA2LjUwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTguNSw4IEwyLjUsOCBMMi41LDkuNSBMMC41LDkuNSBMMC41LDcuODY4MTE0NSBDMC4yMDEyMDIxOTIsNy42OTU4MjcwMiAwLDcuMzcwOTEzNjMgMCw2Ljk5MDYzMTEgTDAsNS4wMDkzNjg5IEMwLDQuNDUxOTA5ODUgMC40NDQ4MzY5NzQsNCAwLjk5NTU3NzQ5OSw0IEwxMC4wMDQ0MjI1LDQgQzEwLjU1NDI2NDgsNCAxMSw0LjQ0MzM1MzE4IDExLDUuMDA5MzY4OSBMMTEsNi45OTA2MzExIEMxMSw3LjM2NTMzMTUgMTAuNzk5MDI0NCw3LjY5MjM0NTE5IDEwLjUsNy44NjY0OTAwMiBMMTAuNSw5LjUgTDguNSw5LjUgTDguNSw4IFogTTEuNzUsNi41IEMyLjE2NDIxMzU2LDYuNSAyLjUsNi4xNjQyMTM1NiAyLjUsNS43NSBDMi41LDUuMzM1Nzg2NDQgMi4xNjQyMTM1Niw1IDEuNzUsNSBDMS4zMzU3ODY0NCw1IDEsNS4zMzU3ODY0NCAxLDUuNzUgQzEsNi4xNjQyMTM1NiAxLjMzNTc4NjQ0LDYuNSAxLjc1LDYuNSBaIE05LjI1LDYuNSBDOS42NjQyMTM1Niw2LjUgMTAsNi4xNjQyMTM1NiAxMCw1Ljc1IEMxMCw1LjMzNTc4NjQ0IDkuNjY0MjEzNTYsNSA5LjI1LDUgQzguODM1Nzg2NDQsNSA4LjUsNS4zMzU3ODY0NCA4LjUsNS43NSBDOC41LDYuMTY0MjEzNTYgOC44MzU3ODY0NCw2LjUgOS4yNSw2LjUgWiBNMC41LDcgTDEwLjUsNyBMMTAuNSw3LjUgTDAuNSw3LjUgTDAuNSw3IFogTTMsNi41IEw4LDYuNSBMOCw3IEwzLDcgTDMsNi41IFonIGlkPSdCb2R5JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMS41LDQuNSBMMS41LDMgQzEuNSwxLjM0MzE0NTc1IDIuODM5MDIwMTMsMCA0LjUwMTY2NTQ3LDAgTDYuNDk4MzM0NTMsMCBDOC4xNTYxMDg1OSwwIDkuNSwxLjM0NjUxNzEyIDkuNSwzIEw5LjUsNScgaWQ9J1Jvb2YnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcbn1cblxuXG5leHBvcnRzLmZyYW1lckZyYW1lcyA9XG5cdDY0MDoyXG5cdDc1MDoyXG5cdDc2ODoyXG5cdDEwODA6M1xuXHQxMjQyOjNcblx0MTQ0MDo0XG5cdDE1MzY6MlxuXG4jIERldmljZSBmcmFtZXNcbmV4cG9ydHMucmVhbERldmljZXMgPVxuXHQzMjA6XG5cdFx0NDgwOlxuXHRcdFx0bmFtZTpcImlQaG9uZVwiXG5cdFx0XHR3aWR0aDozMjBcblx0XHRcdGhlaWdodDo0ODBcblx0XHRcdHNjYWxlOjFcblx0NDgwOlxuXHRcdDg1NDpcblx0XHRcdG5hbWU6XCJBbmRyb2lkIE9uZVwiXG5cdFx0XHR3aWR0aDo0ODBcblx0XHRcdGhlaWdodDo4NTRcblx0XHRcdHNjYWxlOjEuNVxuXG5cdDY0MDpcblx0XHQ5NjA6XG5cdFx0XHRuYW1lOlwiaVBob25lIDRcIlxuXHRcdFx0d2lkdGg6NjQwXG5cdFx0XHRoZWlnaHQ6OTYwXG5cdFx0XHRzY2FsZToyXG5cdFx0MTEzNjpcblx0XHRcdG5hbWU6XCJpUGhvbmUgNVwiXG5cdFx0XHR3aWR0aDo2NDBcblx0XHRcdGhlaWdodDoxMTM2XG5cdFx0XHRzY2FsZToyXG5cdDcyMDpcblx0XHQxMjgwOlxuXHRcdFx0bmFtZTpcIlhIRFBJXCJcblx0XHRcdHdpZHRoOjcyMFxuXHRcdFx0aGVpZ2h0OjEyODBcblx0XHRcdHNjYWxlOjJcblx0NzUwOlxuXHRcdDEzMzQ6XG5cdFx0XHRuYW1lOlwiaVBob25lIDZcIlxuXHRcdFx0d2lkdGg6NzUwXG5cdFx0XHRoZWlnaHQ6MTMzNFxuXHRcdFx0c2NhbGU6MlxuXHQ3Njg6XG5cdFx0MTAyNDpcblx0XHRcdG5hbWU6XCJpUGFkXCJcblx0XHRcdHdpZHRoOjc2OFxuXHRcdFx0aGVpZ2h0OjEwMjRcblx0XHRcdHNjYWxlOjFcblx0XHQxMjgwOlxuXHRcdFx0bmFtZTpcIk5leHVzIDRcIlxuXHRcdFx0d2lkdGg6NzY4XG5cdFx0XHRoZWlnaHQ6MTI4MFxuXHRcdFx0c2NhbGU6MlxuXHQ4MDA6XG5cdFx0MTI4MDpcblx0XHRcdG5hbWU6XCJOZXh1cyA3XCJcblx0XHRcdHdpZHRoOjgwMFxuXHRcdFx0aGVpZ2h0OjEyODBcblx0XHRcdHNjYWxlOjFcblx0MTA4MDpcblx0XHQxOTIwOlxuXHRcdFx0bmFtZTpcIlhYSERQSVwiXG5cdFx0XHR3aWR0aDoxMDgwXG5cdFx0XHRoZWlnaHQ6MTkyMFxuXHRcdFx0c2NhbGU6M1xuXHQxMjAwOlxuXHRcdDE5MjA6XG5cdFx0XHRuYW1lOlwiTmV4dXMgN1wiXG5cdFx0XHR3aWR0aDoxMjAwXG5cdFx0XHRoZWlnaHQ6MTkyMFxuXHRcdFx0c2NhbGU6MlxuXHQxMjQyOlxuXHRcdDIyMDg6XG5cdFx0XHRuYW1lOlwiaVBob25lIDYgUGx1c1wiXG5cdFx0XHR3aWR0aDoxMjQyXG5cdFx0XHRoZWlnaHQ6MjIwOFxuXHRcdFx0c2NhbGU6M1xuXHQxNDQwOlxuXHRcdDI1NjA6XG5cdFx0XHRuYW1lOlwiWFhYSERQSVwiXG5cdFx0XHR3aWR0aDoxNDQwXG5cdFx0XHRoZWlnaHQ6MjU2MFxuXHRcdFx0c2NhbGU6NFxuXHQxNDQxOlxuXHRcdDI1NjE6XG5cdFx0XHRuYW1lOlwiTmV4dXMgNlwiXG5cdFx0XHR3aWR0aDoxNDQwXG5cdFx0XHRoZWlnaHQ6MjU2MFxuXHRcdFx0c2NhbGU6NFxuXHQxNTM2OlxuXHRcdDIwNDg6XG5cdFx0XHRuYW1lOlwiaVBhZFwiXG5cdFx0XHR3aWR0aDoxNTM2XG5cdFx0XHRoZWlnaHQ6MjA0OFxuXHRcdFx0c2NhbGU6MlxuXHQxNjAwOlxuXHRcdDIwNTY6XG5cdFx0XHRuYW1lOlwiTmV4dXMgMTBcIlxuXHRcdFx0d2lkdGg6MTYwMFxuXHRcdFx0aGVpZ2h0OjIwNTZcblx0XHRcdHNjYWxlOjJcblx0MjA0ODpcblx0XHQxNTM2OlxuXHRcdFx0bmFtZTpcIk5leHVzIDlcIlxuXHRcdFx0d2lkdGg6MjA0OFxuXHRcdFx0aGVpZ2h0OjE1MzZcblx0XHRcdHNjYWxlOjJcblx0XHQyNzMyOlxuXHRcdFx0bmFtZTpcImlQYWQgUHJvXCJcblx0XHRcdHdpZHRoOjIwNDhcblx0XHRcdGhlaWdodDoyNzMyXG5cdFx0XHRzY2FsZToyXG5cdDI1NjA6XG5cdFx0MTYwMDpcblx0XHRcdG5hbWU6XCJOZXh1cyAxMFwiXG5cdFx0XHR3aWR0aDoyNTYwXG5cdFx0XHRoZWlnaHQ6MTYwMFxuXHRcdFx0c2NhbGU6MlxuXHQyNzMyOlxuXHRcdDIwNDg6XG5cdFx0XHRuYW1lOlwiaVBhZCBQcm9cIlxuXHRcdFx0d2lkdGg6MjczMlxuXHRcdFx0aGVpZ2h0OjIwNDhcblx0XHRcdHNjYWxlOjJcblxuXG5leHBvcnRzLmNvbG9ycyA9XG5cdHJlZDpcIiNGNDQzMzZcIlxuXHRyZWQ1MDpcIiNGRkVCRUVcIlxuXHRyZWQxMDA6XCIjRkZDREQyXCJcblx0cmVkMjAwOlwiI0VGOUE5QVwiXG5cdHJlZDMwMDpcIiNFNTczNzNcIlxuXHRyZWQ0MDA6XCIjRUY1MzUwXCJcblx0cmVkNTAwOlwiI0Y0NDMzNlwiXG5cdHJlZDYwMDpcIiNFNTM5MzVcIlxuXHRyZWQ3MDA6XCIjRDMyRjJGXCJcblx0cmVkODAwOlwiI0M2MjgyOFwiXG5cdHJlZDkwMDpcIiNCNzFDMUNcIlxuXHRyZWRBMTAwOlwiI0ZGOEE4MFwiXG5cdHJlZEEyMDA6XCIjRkY1MjUyXCJcblx0cmVkQTQwMDpcIiNGRjE3NDRcIlxuXHRyZWRBNzAwOlwiI0Q1MDAwMFwiXG5cdHBpbms6XCIjRTkxRTYzXCJcblx0cGluazUwOlwiI0ZDRTRFQ1wiXG5cdHBpbmsxMDA6XCIjRjhCQkQwXCJcblx0cGluazIwMDpcIiNGNDhGQjFcIlxuXHRwaW5rMzAwOlwiI0YwNjI5MlwiXG5cdHBpbms0MDA6XCIjRUM0MDdBXCJcblx0cGluazUwMDpcIiNFOTFFNjNcIlxuXHRwaW5rNjAwOlwiI0Q4MUI2MFwiXG5cdHBpbms3MDA6XCIjQzIxODVCXCJcblx0cGluazgwMDpcIiNBRDE0NTdcIlxuXHRwaW5rOTAwOlwiIzg4MEU0RlwiXG5cdHBpbmtBMTAwOlwiI0ZGODBBQlwiXG5cdHBpbmtBMjAwOlwiI0ZGNDA4MVwiXG5cdHBpbmtBNDAwOlwiI0Y1MDA1N1wiXG5cdHBpbmtBNzAwOlwiI0M1MTE2MlwiXG5cdHB1cnBsZTpcIiM5QzI3QjBcIlxuXHRwdXJwbGU1MDpcIiNGM0U1RjVcIlxuXHRwdXJwbGUxMDA6XCIjRTFCRUU3XCJcblx0cHVycGxlMjAwOlwiI0NFOTNEOFwiXG5cdHB1cnBsZTMwMDpcIiNCQTY4QzhcIlxuXHRwdXJwbGU0MDA6XCIjQUI0N0JDXCJcblx0cHVycGxlNTAwOlwiIzlDMjdCMFwiXG5cdHB1cnBsZTYwMDpcIiM4RTI0QUFcIlxuXHRwdXJwbGU3MDA6XCIjN0IxRkEyXCJcblx0cHVycGxlODAwOlwiIzZBMUI5QVwiXG5cdHB1cnBsZTkwMDpcIiM0QTE0OENcIlxuXHRwdXJwbGVBMTAwOlwiI0VBODBGQ1wiXG5cdHB1cnBsZUEyMDA6XCIjRTA0MEZCXCJcblx0cHVycGxlQTQwMDpcIiNENTAwRjlcIlxuXHRwdXJwbGVBNzAwOlwiI0FBMDBGRlwiXG5cdGRlZXBQdXJwbGU6XCIjNjczQUI3XCJcblx0ZGVlcFB1cnBsZTUwOlwiI0VERTdGNlwiXG5cdGRlZXBQdXJwbGUxMDA6XCIjRDFDNEU5XCJcblx0ZGVlcFB1cnBsZTIwMDpcIiNCMzlEREJcIlxuXHRkZWVwUHVycGxlMzAwOlwiIzk1NzVDRFwiXG5cdGRlZXBQdXJwbGU0MDA6XCIjN0U1N0MyXCJcblx0ZGVlcFB1cnBsZTUwMDpcIiM2NzNBQjdcIlxuXHRkZWVwUHVycGxlNjAwOlwiIzVFMzVCMVwiXG5cdGRlZXBQdXJwbGU3MDA6XCIjNTEyREE4XCJcblx0ZGVlcFB1cnBsZTgwMDpcIiM0NTI3QTBcIlxuXHRkZWVwUHVycGxlOTAwOlwiIzMxMUI5MlwiXG5cdGRlZXBQdXJwbGVBMTAwOlwiI0IzODhGRlwiXG5cdGRlZXBQdXJwbGVBMjAwOlwiIzdDNERGRlwiXG5cdGRlZXBQdXJwbGVBNDAwOlwiIzY1MUZGRlwiXG5cdGRlZXBQdXJwbGVBNzAwOlwiIzYyMDBFQVwiXG5cdGluZGlnbzpcIiMzRjUxQjVcIlxuXHRpbmRpZ281MDpcIiNFOEVBRjZcIlxuXHRpbmRpZ28xMDA6XCIjQzVDQUU5XCJcblx0aW5kaWdvMjAwOlwiIzlGQThEQVwiXG5cdGluZGlnbzMwMDpcIiM3OTg2Q0JcIlxuXHRpbmRpZ280MDA6XCIjNUM2QkMwXCJcblx0aW5kaWdvNTAwOlwiIzNGNTFCNVwiXG5cdGluZGlnbzYwMDpcIiMzOTQ5QUJcIlxuXHRpbmRpZ283MDA6XCIjMzAzRjlGXCJcblx0aW5kaWdvODAwOlwiIzI4MzU5M1wiXG5cdGluZGlnbzkwMDpcIiMxQTIzN0VcIlxuXHRpbmRpZ29BMTAwOlwiIzhDOUVGRlwiXG5cdGluZGlnb0EyMDA6XCIjNTM2REZFXCJcblx0aW5kaWdvQTQwMDpcIiMzRDVBRkVcIlxuXHRpbmRpZ29BNzAwOlwiIzMwNEZGRVwiXG5cdGJsdWU6XCIjMjE5NkYzXCJcblx0Ymx1ZTUwOlwiI0UzRjJGRFwiXG5cdGJsdWUxMDA6XCIjQkJERUZCXCJcblx0Ymx1ZTIwMDpcIiM5MENBRjlcIlxuXHRibHVlMzAwOlwiIzY0QjVGNlwiXG5cdGJsdWU0MDA6XCIjNDJBNUY1XCJcblx0Ymx1ZTUwMDpcIiMyMTk2RjNcIlxuXHRibHVlNjAwOlwiIzFFODhFNVwiXG5cdGJsdWU3MDA6XCIjMTk3NkQyXCJcblx0Ymx1ZTgwMDpcIiMxNTY1QzBcIlxuXHRibHVlOTAwOlwiIzBENDdBMVwiXG5cdGJsdWVBMTAwOlwiIzgyQjFGRlwiXG5cdGJsdWVBMjAwOlwiIzQ0OEFGRlwiXG5cdGJsdWVBNDAwOlwiIzI5NzlGRlwiXG5cdGJsdWVBNzAwOlwiIzI5NjJGRlwiXG5cdGxpZ2h0Qmx1ZTpcIiMwM0E5RjRcIlxuXHRsaWdodEJsdWU1MDpcIiNFMUY1RkVcIlxuXHRsaWdodEJsdWUxMDA6XCIjQjNFNUZDXCJcblx0bGlnaHRCbHVlMjAwOlwiIzgxRDRGQVwiXG5cdGxpZ2h0Qmx1ZTMwMDpcIiM0RkMzRjdcIlxuXHRsaWdodEJsdWU0MDA6XCIjMjlCNkY2XCJcblx0bGlnaHRCbHVlNTAwOlwiIzAzQTlGNFwiXG5cdGxpZ2h0Qmx1ZTYwMDpcIiMwMzlCRTVcIlxuXHRsaWdodEJsdWU3MDA6XCIjMDI4OEQxXCJcblx0bGlnaHRCbHVlODAwOlwiIzAyNzdCRFwiXG5cdGxpZ2h0Qmx1ZTkwMDpcIiMwMTU3OUJcIlxuXHRsaWdodEJsdWVBMTAwOlwiIzgwRDhGRlwiXG5cdGxpZ2h0Qmx1ZUEyMDA6XCIjNDBDNEZGXCJcblx0bGlnaHRCbHVlQTQwMDpcIiMwMEIwRkZcIlxuXHRsaWdodEJsdWVBNzAwOlwiIzAwOTFFQVwiXG5cdGN5YW46XCIjMDBCQ0Q0XCJcblx0Y3lhbjUwOlwiI0UwRjdGQVwiXG5cdGN5YW4xMDA6XCIjQjJFQkYyXCJcblx0Y3lhbjIwMDpcIiM4MERFRUFcIlxuXHRjeWFuMzAwOlwiIzRERDBFMVwiXG5cdGN5YW40MDA6XCIjMjZDNkRBXCJcblx0Y3lhbjUwMDpcIiMwMEJDRDRcIlxuXHRjeWFuNjAwOlwiIzAwQUNDMVwiXG5cdGN5YW43MDA6XCIjMDA5N0E3XCJcblx0Y3lhbjgwMDpcIiMwMDgzOEZcIlxuXHRjeWFuOTAwOlwiIzAwNjA2NFwiXG5cdGN5YW5BMTAwOlwiIzg0RkZGRlwiXG5cdGN5YW5BMjAwOlwiIzE4RkZGRlwiXG5cdGN5YW5BNDAwOlwiIzAwRTVGRlwiXG5cdGN5YW5BNzAwOlwiIzAwQjhENFwiXG5cdHRlYWw6XCIjMDA5Njg4XCJcblx0dGVhbDUwOlwiI0UwRjJGMVwiXG5cdHRlYWwxMDA6XCIjQjJERkRCXCJcblx0dGVhbDIwMDpcIiM4MENCQzRcIlxuXHR0ZWFsMzAwOlwiIzREQjZBQ1wiXG5cdHRlYWw0MDA6XCIjMjZBNjlBXCJcblx0dGVhbDUwMDpcIiMwMDk2ODhcIlxuXHR0ZWFsNjAwOlwiIzAwODk3QlwiXG5cdHRlYWw3MDA6XCIjMDA3OTZCXCJcblx0dGVhbDgwMDpcIiMwMDY5NUNcIlxuXHR0ZWFsOTAwOlwiIzAwNEQ0MFwiXG5cdHRlYWxBMTAwOlwiI0E3RkZFQlwiXG5cdHRlYWxBMjAwOlwiIzY0RkZEQVwiXG5cdHRlYWxBNDAwOlwiIzFERTlCNlwiXG5cdHRlYWxBNzAwOlwiIzAwQkZBNVwiXG5cdGdyZWVuOlwiIzRDQUY1MFwiXG5cdGdyZWVuNTA6XCIjRThGNUU5XCJcblx0Z3JlZW4xMDA6XCIjQzhFNkM5XCJcblx0Z3JlZW4yMDA6XCIjQTVENkE3XCJcblx0Z3JlZW4zMDA6XCIjODFDNzg0XCJcblx0Z3JlZW40MDA6XCIjNjZCQjZBXCJcblx0Z3JlZW41MDA6XCIjNENBRjUwXCJcblx0Z3JlZW42MDA6XCIjNDNBMDQ3XCJcblx0Z3JlZW43MDA6XCIjMzg4RTNDXCJcblx0Z3JlZW44MDA6XCIjMkU3RDMyXCJcblx0Z3JlZW45MDA6XCIjMUI1RTIwXCJcblx0Z3JlZW5BMTAwOlwiI0I5RjZDQVwiXG5cdGdyZWVuQTIwMDpcIiM2OUYwQUVcIlxuXHRncmVlbkE0MDA6XCIjMDBFNjc2XCJcblx0Z3JlZW5BNzAwOlwiIzAwQzg1M1wiXG5cdGxpZ2h0R3JlZW46XCIjOEJDMzRBXCJcblx0bGlnaHRHcmVlbjUwOlwiI0YxRjhFOVwiXG5cdGxpZ2h0R3JlZW4xMDA6XCIjRENFREM4XCJcblx0bGlnaHRHcmVlbjIwMDpcIiNDNUUxQTVcIlxuXHRsaWdodEdyZWVuMzAwOlwiI0FFRDU4MVwiXG5cdGxpZ2h0R3JlZW40MDA6XCIjOUNDQzY1XCJcblx0bGlnaHRHcmVlbjUwMDpcIiM4QkMzNEFcIlxuXHRsaWdodEdyZWVuNjAwOlwiIzdDQjM0MlwiXG5cdGxpZ2h0R3JlZW43MDA6XCIjNjg5RjM4XCJcblx0bGlnaHRHcmVlbjgwMDpcIiM1NThCMkZcIlxuXHRsaWdodEdyZWVuOTAwOlwiIzMzNjkxRVwiXG5cdGxpZ2h0R3JlZW5BMTAwOlwiI0NDRkY5MFwiXG5cdGxpZ2h0R3JlZW5BMjAwOlwiI0IyRkY1OVwiXG5cdGxpZ2h0R3JlZW5BNDAwOlwiIzc2RkYwM1wiXG5cdGxpZ2h0R3JlZW5BNzAwOlwiIzY0REQxN1wiXG5cdGxpbWU6XCIjQ0REQzM5XCJcblx0bGltZTUwOlwiI0Y5RkJFN1wiXG5cdGxpbWUxMDA6XCIjRjBGNEMzXCJcblx0bGltZTIwMDpcIiNFNkVFOUNcIlxuXHRsaW1lMzAwOlwiI0RDRTc3NVwiXG5cdGxpbWU0MDA6XCIjRDRFMTU3XCJcblx0bGltZTUwMDpcIiNDRERDMzlcIlxuXHRsaW1lNjAwOlwiI0MwQ0EzM1wiXG5cdGxpbWU3MDA6XCIjQUZCNDJCXCJcblx0bGltZTgwMDpcIiM5RTlEMjRcIlxuXHRsaW1lOTAwOlwiIzgyNzcxN1wiXG5cdGxpbWVBMTAwOlwiI0Y0RkY4MVwiXG5cdGxpbWVBMjAwOlwiI0VFRkY0MVwiXG5cdGxpbWVBNDAwOlwiI0M2RkYwMFwiXG5cdGxpbWVBNzAwOlwiI0FFRUEwMFwiXG5cdHllbGxvdzpcIiNGRkVCM0JcIlxuXHR5ZWxsb3c1MDpcIiNGRkZERTdcIlxuXHR5ZWxsb3cxMDA6XCIjRkZGOUM0XCJcblx0eWVsbG93MjAwOlwiI0ZGRjU5RFwiXG5cdHllbGxvdzMwMDpcIiNGRkYxNzZcIlxuXHR5ZWxsb3c0MDA6XCIjRkZFRTU4XCJcblx0eWVsbG93NTAwOlwiI0ZGRUIzQlwiXG5cdHllbGxvdzYwMDpcIiNGREQ4MzVcIlxuXHR5ZWxsb3c3MDA6XCIjRkJDMDJEXCJcblx0eWVsbG93ODAwOlwiI0Y5QTgyNVwiXG5cdHllbGxvdzkwMDpcIiNGNTdGMTdcIlxuXHR5ZWxsb3dBMTAwOlwiI0ZGRkY4RFwiXG5cdHllbGxvd0EyMDA6XCIjRkZGRjAwXCJcblx0eWVsbG93QTQwMDpcIiNGRkVBMDBcIlxuXHR5ZWxsb3dBNzAwOlwiI0ZGRDYwMFwiXG5cdGFtYmVyOlwiI0ZGQzEwN1wiXG5cdGFtYmVyNTA6XCIjRkZGOEUxXCJcblx0YW1iZXIxMDA6XCIjRkZFQ0IzXCJcblx0YW1iZXIyMDA6XCIjRkZFMDgyXCJcblx0YW1iZXIzMDA6XCIjRkZENTRGXCJcblx0YW1iZXI0MDA6XCIjRkZDQTI4XCJcblx0YW1iZXI1MDA6XCIjRkZDMTA3XCJcblx0YW1iZXI2MDA6XCIjRkZCMzAwXCJcblx0YW1iZXI3MDA6XCIjRkZBMDAwXCJcblx0YW1iZXI4MDA6XCIjRkY4RjAwXCJcblx0YW1iZXI5MDA6XCIjRkY2RjAwXCJcblx0YW1iZXJBMTAwOlwiI0ZGRTU3RlwiXG5cdGFtYmVyQTIwMDpcIiNGRkQ3NDBcIlxuXHRhbWJlckE0MDA6XCIjRkZDNDAwXCJcblx0YW1iZXJBNzAwOlwiI0ZGQUIwMFwiXG5cdG9yYW5nZTpcIiNGRjk4MDBcIlxuXHRvcmFuZ2U1MDpcIiNGRkYzRTBcIlxuXHRvcmFuZ2UxMDA6XCIjRkZFMEIyXCJcblx0b3JhbmdlMjAwOlwiI0ZGQ0M4MFwiXG5cdG9yYW5nZTMwMDpcIiNGRkI3NERcIlxuXHRvcmFuZ2U0MDA6XCIjRkZBNzI2XCJcblx0b3JhbmdlNTAwOlwiI0ZGOTgwMFwiXG5cdG9yYW5nZTYwMDpcIiNGQjhDMDBcIlxuXHRvcmFuZ2U3MDA6XCIjRjU3QzAwXCJcblx0b3JhbmdlODAwOlwiI0VGNkMwMFwiXG5cdG9yYW5nZTkwMDpcIiNFNjUxMDBcIlxuXHRvcmFuZ2VBMTAwOlwiI0ZGRDE4MFwiXG5cdG9yYW5nZUEyMDA6XCIjRkZBQjQwXCJcblx0b3JhbmdlQTQwMDpcIiNGRjkxMDBcIlxuXHRvcmFuZ2VBNzAwOlwiI0ZGNkQwMFwiXG5cdGRlZXBPcmFuZ2U6XCIjRkY1NzIyXCJcblx0ZGVlcE9yYW5nZTUwOlwiI0ZCRTlFN1wiXG5cdGRlZXBPcmFuZ2UxMDA6XCIjRkZDQ0JDXCJcblx0ZGVlcE9yYW5nZTIwMDpcIiNGRkFCOTFcIlxuXHRkZWVwT3JhbmdlMzAwOlwiI0ZGOEE2NVwiXG5cdGRlZXBPcmFuZ2U0MDA6XCIjRkY3MDQzXCJcblx0ZGVlcE9yYW5nZTUwMDpcIiNGRjU3MjJcIlxuXHRkZWVwT3JhbmdlNjAwOlwiI0Y0NTExRVwiXG5cdGRlZXBPcmFuZ2U3MDA6XCIjRTY0QTE5XCJcblx0ZGVlcE9yYW5nZTgwMDpcIiNEODQzMTVcIlxuXHRkZWVwT3JhbmdlOTAwOlwiI0JGMzYwQ1wiXG5cdGRlZXBPcmFuZ2VBMTAwOlwiI0ZGOUU4MFwiXG5cdGRlZXBPcmFuZ2VBMjAwOlwiI0ZGNkU0MFwiXG5cdGRlZXBPcmFuZ2VBNDAwOlwiI0ZGM0QwMFwiXG5cdGRlZXBPcmFuZ2VBNzAwOlwiI0REMkMwMFwiXG5cdGJyb3duOlwiIzc5NTU0OFwiXG5cdGJyb3duNTA6XCIjRUZFQkU5XCJcblx0YnJvd24xMDA6XCIjRDdDQ0M4XCJcblx0YnJvd24yMDA6XCIjQkNBQUE0XCJcblx0YnJvd24zMDA6XCIjQTE4ODdGXCJcblx0YnJvd240MDA6XCIjOEQ2RTYzXCJcblx0YnJvd241MDA6XCIjNzk1NTQ4XCJcblx0YnJvd242MDA6XCIjNkQ0QzQxXCJcblx0YnJvd243MDA6XCIjNUQ0MDM3XCJcblx0YnJvd244MDA6XCIjNEUzNDJFXCJcblx0YnJvd245MDA6XCIjM0UyNzIzXCJcblx0Z3JleTpcIiM5RTlFOUVcIlxuXHRncmV5NTA6XCIjRkFGQUZBXCJcblx0Z3JleTEwMDpcIiNGNUY1RjVcIlxuXHRncmV5MjAwOlwiI0VFRUVFRVwiXG5cdGdyZXkzMDA6XCIjRTBFMEUwXCJcblx0Z3JleTQwMDpcIiNCREJEQkRcIlxuXHRncmV5NTAwOlwiIzlFOUU5RVwiXG5cdGdyZXk2MDA6XCIjNzU3NTc1XCJcblx0Z3JleTcwMDpcIiM2MTYxNjFcIlxuXHRncmV5ODAwOlwiIzQyNDI0MlwiXG5cdGdyZXk5MDA6XCIjMjEyMTIxXCJcblx0Ymx1ZUdyZXk6XCIjNjA3RDhCXCJcblx0Ymx1ZUdyZXk1MDpcIiNFQ0VGRjFcIlxuXHRibHVlR3JleTEwMDpcIiNDRkQ4RENcIlxuXHRibHVlR3JleTIwMDpcIiNCMEJFQzVcIlxuXHRibHVlR3JleTMwMDpcIiM5MEE0QUVcIlxuXHRibHVlR3JleTQwMDpcIiM3ODkwOUNcIlxuXHRibHVlR3JleTUwMDpcIiM2MDdEOEJcIlxuXHRibHVlR3JleTYwMDpcIiM1NDZFN0FcIlxuXHRibHVlR3JleTcwMDpcIiM0NTVBNjRcIlxuXHRibHVlR3JleTgwMDpcIiMzNzQ3NEZcIlxuXHRibHVlR3JleTkwMDpcIiMyNjMyMzhcIlxuXHRibGFjazpcIiMwMDAwMDBcIlxuXHR3aGl0ZTpcIiNGRkZGRkZcIlxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cblx0bmF2YmFyID0gbmV3IExheWVyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIlxuXG5cdG5hdmJhci5jb25zdHJhaW50cyA9XG5cdFx0Ym90dG9tOjBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjQ4XG5cblx0c3ZnSG9tZSA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmhvbWUpXG5cdHN2Z0JhY2sgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5iYWNrKVxuXG5cdGhvbWVCdXR0b24gPSBuZXcgTGF5ZXJcblx0XHRzdXBlckxheWVyOm5hdmJhclxuXHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDIxKVxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwiaG9tZVwiXG5cdFx0Y2xpcDp0cnVlXG5cblx0aG9tZUJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0dG9wOjNcblx0XHRoZWlnaHQ6NDJcblx0XHR3aWR0aDo5NFxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0aG9tZUljb24gPSBuZXcgTGF5ZXJcblx0XHRzdXBlckxheWVyOmhvbWVCdXR0b25cblx0XHR3aWR0aDpzdmdIb21lLndpZHRoXG5cdFx0aGVpZ2h0OnN2Z0hvbWUuaGVpZ2h0XG5cdFx0aHRtbDpzdmdIb21lLnN2Z1xuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwiaWNvblwiXG5cblx0aG9tZUljb24uY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiY2VudGVyXCJcblxuXHRyZWNlbnRCdXR0b24gPSBuZXcgTGF5ZXJcblx0XHRzdXBlckxheWVyOm5hdmJhclxuXHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDIxKVxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwicmVjZW50XCJcblx0XHRjbGlwOnRydWVcblxuXHRyZWNlbnRCdXR0b24uY29uc3RyYWludHMgPVxuXHRcdHRvcDozXG5cdFx0aGVpZ2h0OjQyXG5cdFx0d2lkdGg6OTRcblx0XHRsZWFkaW5nOltob21lQnV0dG9uLCA2XVxuXG5cdHJlY2VudEljb24gPSBuZXcgTGF5ZXJcblx0XHRzdXBlckxheWVyOnJlY2VudEJ1dHRvblxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRib3JkZXJDb2xvcjpcIndoaXRlXCJcblx0XHRib3JkZXJXaWR0aDptLnV0aWxzLnB4KDIpXG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMilcblx0XHRuYW1lOlwiaWNvblwiXG5cblx0cmVjZW50SWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdHdpZHRoOjE2XG5cdFx0aGVpZ2h0OjE2XG5cblx0YmFja0J1dHRvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6bmF2YmFyXG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMjEpXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJiYWNrXCJcblx0XHRjbGlwOnRydWVcblxuXHRiYWNrQnV0dG9uLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6M1xuXHRcdGhlaWdodDo0MlxuXHRcdHdpZHRoOjk0XG5cdFx0dHJhaWxpbmc6W2hvbWVCdXR0b24sIDZdXG5cblxuXHRiYWNrSWNvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6YmFja0J1dHRvblxuXHRcdHdpZHRoOnN2Z0JhY2sud2lkdGhcblx0XHRoZWlnaHQ6c3ZnQmFjay5oZWlnaHRcblx0XHRodG1sOnN2Z0JhY2suc3ZnXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJpY29uXCJcblxuXHRiYWNrSWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDpbbmF2YmFyLCBob21lQnV0dG9uLCByZWNlbnRCdXR0b24sIGJhY2tCdXR0b24sIGhvbWVJY29uLCBiYWNrSWNvbiwgcmVjZW50SWNvbl1cblxuXHRtLnV0aWxzLmlua3lcblx0XHRsYXllcjpob21lQnV0dG9uXG5cdFx0bW92ZVRvVGFwOmZhbHNlXG5cdFx0Y29sb3I6IFwid2hpdGVcIlxuXHRcdHNjYWxlOiAyMFxuXHRcdGN1cnZlOiBcImJlemllci1jdXJ2ZSgxLCAwLjQsIDAuNCwgMS4wKVwiXG5cdFx0b3BhY2l0eTogLjNcblx0bS51dGlscy5pbmt5XG5cdFx0XHRsYXllcjpiYWNrQnV0dG9uXG5cdFx0XHRtb3ZlVG9UYXA6ZmFsc2Vcblx0XHRcdGNvbG9yOiBcIndoaXRlXCJcblx0XHRcdHNjYWxlOiAyMFxuXHRcdFx0Y3VydmU6IFwiYmV6aWVyLWN1cnZlKDEsIDAuNCwgMC40LCAxLjApXCJcblx0XHRcdG9wYWNpdHk6IC4zXG5cdG0udXRpbHMuaW5reVxuXHRcdFx0bGF5ZXI6cmVjZW50QnV0dG9uXG5cdFx0XHRtb3ZlVG9UYXA6ZmFsc2Vcblx0XHRcdGNvbG9yOiBcIndoaXRlXCJcblx0XHRcdHNjYWxlOiAyMFxuXHRcdFx0Y3VydmU6IFwiYmV6aWVyLWN1cnZlKDEsIDAuNCwgMC40LCAxLjApXCJcblx0XHRcdG9wYWNpdHk6IC4zXG5cblxuXHRuYXZiYXIuYmFjayA9IGJhY2tCdXR0b25cblx0bmF2YmFyLmJhY2suYmFja0ljb24gPSBiYWNrSWNvblxuXHRuYXZiYXIuaG9tZSA9IGhvbWVCdXR0b25cblx0bmF2YmFyLmhvbWUuaWNvbiA9IGhvbWVJY29uXG5cdG5hdmJhci5yZWNlbnQgPSByZWNlbnRCdXR0b25cblx0bmF2YmFyLnJlY2VudC5pY29uID0gcmVjZW50SWNvblxuXG5cdHJldHVybiBuYXZiYXJcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGNhcnJpZXI6XCJcIlxuXHRuZXR3b3JrOlwiTFRFXCJcblx0YmF0dGVyeToxMDBcblx0Y2VsbHVsYXI6MlxuXHRzdHlsZTpcImxpZ2h0XCJcblx0Y2xvY2syNDpmYWxzZVxuXHR0eXBlOlwic3RhdHVzQmFyXCJcblx0YmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuMSlcIlxuXHRjb2xvcjogXCJibGFja1wiXG5cdG9wYWNpdHk6LjZcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdHN0YXR1c0JhciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6c2V0dXAuYmFja2dyb3VuZENvbG9yLCBuYW1lOlwic3RhdHVzQmFyLmFsbFwiXG5cblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJkYXJrXCJcblx0XHRpZiBzZXR1cC5iYWNrZ3JvdW5kQ29sb3IgPT0gXCJyZ2JhKDAsMCwwLC4xKVwiXG5cdFx0XHRzdGF0dXNCYXIuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImJsYWNrXCIpXG5cdFx0aWYgc2V0dXAuY29sb3IgPT0gXCJibGFja1wiXG5cdFx0XHRzZXR1cC5jb2xvciA9IFwid2hpdGVcIlxuXHRcdGlmIHNldHVwLm9wYWNpdHkgPT0gLjZcblx0XHRcdHNldHVwLm9wYWNpdHkgPSAxXG5cblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJsaWdodFwiICYmIHNldHVwLmNvbG9yICE9IFwiYmxhY2tcIlxuXHRcdHNldHVwLm9wYWNpdHkgPSAxXG5cblx0c3RhdHVzQmFyLnR5cGUgPSBzZXR1cC50eXBlXG5cdHN0YXR1c0Jhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDoyNFxuXG5cdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdFx0QGJsdWV0b290aCA9IDVcblxuXHRcdHdoZW4gXCJmdWxsc2NyZWVuXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdFx0QGJsdWV0b290aCA9IC0gMTBcblx0XHRlbHNlXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDNcblx0XHRcdEBibHVldG9vdGggPSAzXG5cblxuXG5cdGZvciBsYXllciBpbiBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdFx0aWYgbGF5ZXIudHlwZSA9PSBcImxvY2tTY3JlZW5cIlxuXHRcdFx0QGlzTG9ja1NjcmVlblB1dGlsc2VudCA9IHRydWVcblx0aWYgQGlzTG9ja1NjcmVlblB1dGlsc2VudFxuXHRcdGdyaXBwZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpzdGF0dXNCYXIsIHdpZHRoOnV0aWxzLnB4KDM3KSwgaGVpZ2h0OnV0aWxzLnB4KDUpLCBuYW1lOlwiZ3JpcHBlclwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi41LCBuYW1lOlwiZ3JpcHBlclwiXG5cdFx0Z3JpcHBlci5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMzcpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoNSl9cHgnIHZpZXdCb3g9JzAgMCAzNyA1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5HcmlwcGVyPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0F1dG8tQ29tcGxldGUtQmFyLUNsb3NlZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE2OS4wMDAwMDAsIC0yLjAwMDAwMCknIGZpbGw9JyNGRkZGRkYnPlxuXHRcdFx0XHRcdFx0PHJlY3QgaWQ9J0dyaXBwZXInIHg9JzE2OS41JyB5PScyLjUnIHdpZHRoPSczNicgaGVpZ2h0PSc0JyByeD0nMi41Jz48L3JlY3Q+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGdyaXBwZXIuY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdHRvcDoyXG5cdGVsc2Vcblx0XHRAdGltZSA9IG0udXRpbHMuZ2V0VGltZSgpXG5cdFx0dGltZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJUaW1lXCIsIHRleHQ6bS51dGlscy50aW1lRm9ybWF0dGVyKEB0aW1lLCBzZXR1cC5jbG9jazI0KSwgZm9udFNpemU6MTQsIGZvbnRXZWlnaHQ6NTAwLCBzdXBlckxheWVyOnN0YXR1c0JhciwgY29sb3I6c2V0dXAuY29sb3IsIG5hbWU6XCJ0aW1lXCIsIG9wYWNpdHk6c2V0dXAub3BhY2l0eVxuXHRcdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdFx0dHJhaWxpbmc6OFxuXHRcdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblx0YmF0dGVyeUljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYXR0ZXJ5SWNvblwiXG5cdGlmIHNldHVwLmJhdHRlcnkgPiA3MFxuXHRcdGhpZ2hCYXR0ZXJ5ID0gbS51dGlscy5zdmcobS5hc3NldHMuYmF0dGVyeUhpZ2gpXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IGhpZ2hCYXR0ZXJ5LnN2Z1xuXHRcdGJhdHRlcnlJY29uLmhlaWdodCA9IGhpZ2hCYXR0ZXJ5LmhlaWdodFxuXHRcdGJhdHRlcnlJY29uLndpZHRoID0gaGlnaEJhdHRlcnkud2lkdGhcblx0XHRtLnV0aWxzLmNoYW5nZUZpbGwoYmF0dGVyeUljb24sIHNldHVwLmNvbG9yKVxuXHRcdGJhdHRlcnlJY29uLm9wYWNpdHkgPSBzZXR1cC5vcGFjaXR5XG5cblx0aWYgc2V0dXAuYmF0dGVyeSA8PSA3MCAmJiBzZXR1cC5iYXR0ZXJ5ID4gMjBcblx0XHRtaWRCYXR0ZXJ5ID0gbS51dGlscy5zdmcobS5hc3NldHMuYmF0dGVyeU1pZClcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gbWlkQmF0dGVyeS5zdmdcblx0XHRtLnV0aWxzLmNoYW5nZUZpbGwoYmF0dGVyeUljb24sIHNldHVwLmNvbG9yKVxuXG5cdGlmIHNldHVwLmJhdHRlcnkgPD0gMjBcblx0XHRsb3dCYXR0ZXJ5ID0gbS51dGlscy5zdmcobS5hc3NldHMuYmF0dGVyeUxvdylcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gbG93QmF0dGVyeS5zdmdcblx0XHRtLnV0aWxzLmNoYW5nZUZpbGwoYmF0dGVyeUljb24sIHNldHVwLmNvbG9yKVxuXG5cblx0YmF0dGVyeUljb24uY29uc3RyYWludHMgPVxuXHRcdHRyYWlsaW5nIDogW3RpbWUsIDddXG5cdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblxuXHRjZWxsdWxhckljb24gPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5jZWxsdWxhcilcblx0Y2VsbHVsYXIgPSBuZXcgTGF5ZXJcblx0XHR3aWR0aDpjZWxsdWxhckljb24ud2lkdGhcblx0XHRoZWlnaHQ6Y2VsbHVsYXJJY29uLmhlaWdodFxuXHRcdGh0bWw6Y2VsbHVsYXJJY29uLnN2Z1xuXHRcdHN1cGVyTGF5ZXI6c3RhdHVzQmFyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG9wYWNpdHk6IHNldHVwLm9wYWNpdHlcblx0XHRuYW1lOlwiY2VsbHVsYXJcIlxuXG5cdGNlbGx1bGFyLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZzogW2JhdHRlcnlJY29uLCA3XVxuXHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdG0udXRpbHMuY2hhbmdlRmlsbChjZWxsdWxhciwgc2V0dXAuY29sb3IpXG5cblx0d2lmaUljb24gPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy53aWZpLCBzZXR1cC5jb2xvcilcblxuXHR3aWZpID0gbmV3IExheWVyXG5cdFx0d2lkdGg6d2lmaUljb24ud2lkdGhcblx0XHRoZWlnaHQ6d2lmaUljb24uaGVpZ2h0XG5cdFx0c3VwZXJMYXllcjpzdGF0dXNCYXJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcIndpZmlcIlxuXHRcdGh0bWw6IHdpZmlJY29uLnN2Z1xuXHRcdG9wYWNpdHk6IHNldHVwLm9wYWNpdHlcblxuXHRtLnV0aWxzLmNoYW5nZUZpbGwod2lmaSwgc2V0dXAuY29sb3IpXG5cblx0d2lmaS5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmc6W2NlbGx1bGFyLCA0XVxuXHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0IyBFeHBvcnQgc3RhdHVzQmFyXG5cdHN0YXR1c0Jhci5iYXR0ZXJ5ID0ge31cblx0IyBzdGF0dXNCYXIuYmF0dGVyeS5wZXJjZW50ID0gYmF0dGVyeVBlcmNlbnRcblx0c3RhdHVzQmFyLmJhdHRlcnkuaWNvbiA9IGJhdHRlcnlJY29uXG5cdCMgc3RhdHVzQmFyLmJsdWV0b290aCA9IGJsdWV0b290aFxuXHRzdGF0dXNCYXIudGltZSA9IHRpbWVcblx0IyBzdGF0dXNCYXIud2lmaSA9IHdpZmlcblx0c3RhdHVzQmFyLmNlbGx1bGFyID0gY2VsbHVsYXJcblxuXHRtLmxheW91dC5zZXRcblx0XHR0YXJnZXQ6W3N0YXR1c0JhciwgdGltZSwgYmF0dGVyeUljb24sIGNlbGx1bGFyLCB3aWZpXVxuXHRyZXR1cm4gc3RhdHVzQmFyXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRhYjoge1xuXHRcdGxhYmVsOiBcImxhYmVsXCJcblx0XHRpY29uOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScyNXB4JyBoZWlnaHQ9JzI1cHgnIHZpZXdCb3g9JzAgMCAyNSAyNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+MTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMSc+XG5cdFx0XHRcdFx0PGcgaWQ9J0JvdHRvbS1CYXIvVGFiLUJhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTcuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nUGxhY2Vob2xkZXJzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNS4wMDAwMDAsIDcuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPScxJyB4PScwJyB5PScwJyB3aWR0aD0nMjUnIGhlaWdodD0nMjUnIHJ4PSczJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFjdGl2ZTogdW5kZWZpbmVkXG5cdFx0dW5hY3RpdmU6IHVuZGVmaW5lZFxuXHRcdHRhYkJhcjogdW5kZWZpbmVkXG5cdFx0dHlwZTogXCJ0YWJcIlxuXHR9XG5cdGJhcjoge1xuXHRcdHRhYnM6IFtdXG5cdFx0c3RhcnQ6MFxuXHRcdHR5cGU6XCJ0YWJCYXJcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRhY3RpdmVDb2xvcjpcImJsdWVcIlxuXHRcdGluYWN0aXZlQ29sb3I6XCJncmF5XCJcblx0XHRibHVyOnRydWVcblx0fVxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnRhYi5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMudGFiKVxuZXhwb3J0cy5kZWZhdWx0cy5iYXIucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmJhcilcblxuZXhwb3J0cy50YWIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cy50YWIpXG5cdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdEB0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0QHRhYldpZHRoID0gNzVcblx0dGFiVmlldyA9IG5ldyBMYXllciBuYW1lOnNldHVwLmxhYmVsICsgXCIgdmlld1wiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdHRhYlZpZXcuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdHRhYkJveCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLmxhYmVsICsgXCIgdGFiXCJcblx0dGFiQm94LmNvbnN0cmFpbnRzID1cblx0XHR3aWR0aDpAdGFiV2lkdGhcblx0XHRoZWlnaHQ6NDlcblx0aWNvbiA9IG5ldyBMYXllciB3aWR0aDptLnV0aWxzLnB4KDI1KSwgaGVpZ2h0Om0udXRpbHMucHgoMjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiaWNvblwiLCBzdXBlckxheWVyOnRhYkJveFxuXHRpY29uLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHRvcDo3XG5cdHN2Z0ZyYW1lID0gbS51dGlscy5zdmcoc2V0dXAuaWNvbilcblx0aWNvbi5odG1sID0gc3ZnRnJhbWUuc3ZnXG5cdGljb24ud2lkdGggPSBzdmdGcmFtZS53aWR0aFxuXHRpY29uLmhlaWdodCA9IHN2Z0ZyYW1lLmhlaWdodFxuXHRsYWJlbCA9IG5ldyBtLlRleHQgdGV4dDpzZXR1cC5sYWJlbCwgc3VwZXJMYXllcjp0YWJCb3gsIGNvbG9yOlwiIzkyOTI5MlwiLCBmb250U2l6ZToxMCwgbmFtZTpcImxhYmVsXCIsIHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblx0bGFiZWwuY29uc3RyYWludHMgPVxuXHRcdGJvdHRvbToyXG5cdFx0aG9yaXpvbnRhbENlbnRlcjppY29uXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0IyBFeHBvcnQgVGFiXG5cdHRhYkJveC50eXBlID0gXCJ0YWJcIlxuXHR0YWJCb3guaWNvbiA9IGljb25cblx0dGFiQm94LnZpZXcgPSB0YWJWaWV3XG5cdHRhYkJveC5sYWJlbCA9IGxhYmVsXG5cblx0cmV0dXJuIHRhYkJveFxuXG5leHBvcnRzLmJhciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzLmJhcilcblx0aWYgc2V0dXAudGFicy5sZW5ndGggPT0gMFxuXHRcdGR1bW15VGFiID0gbmV3IGV4cG9ydHMudGFiXG5cdFx0ZHVtbXlUYWIyID0gbmV3IGV4cG9ydHMudGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiMlxuXHR0YWJXaWR0aCA9IDc1XG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHR0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0dGFiV2lkdGggPSA3NVxuXHR0YWJCYXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInRhYiBiYXJcIlxuXHR0YWJCYXJCRyA9IG5ldyBCYWNrZ3JvdW5kTGF5ZXIgc3VwZXJMYXllcjp0YWJCYXIsIG5hbWU6XCJ0YWJCYXIgYmFja2dyb3VuZFwiXG5cdHRhYkJhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGJvdHRvbTowXG5cdFx0aGVpZ2h0OjQ5XG5cdHRhYkJhckJHLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0Ym90dG9tOjBcblx0XHRoZWlnaHQ6NDlcblx0ZGl2aWRlciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjQjJCMkIyXCIsIG5hbWU6XCJ0YWJEaXZpZGVyXCIsIHN1cGVyTGF5ZXI6dGFiQmFyXG5cdGRpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdHRvcDowXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDouNVxuXHR0YWJCYXJCb3ggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjp0YWJCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJ0YWJCYXIgYm94XCJcblx0dGFiQmFyQm94LmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6NDlcblx0XHR3aWR0aDpzZXR1cC50YWJzLmxlbmd0aCAqIHRhYldpZHRoXG5cblx0bS5sYXlvdXQuc2V0KClcblxuXHRzZXRBY3RpdmUgPSAodGFiSW5kZXgpIC0+XG5cdFx0Zm9yIHRhYiwgaW5kZXggaW4gc2V0dXAudGFic1xuXHRcdFx0aWYgaW5kZXggPT0gdGFiSW5kZXhcblx0XHRcdFx0bS51dGlscy5jaGFuZ2VGaWxsKHRhYi5pY29uLCBtLnV0aWxzLmNvbG9yKHNldHVwLmFjdGl2ZUNvbG9yKSlcblx0XHRcdFx0dGFiLmxhYmVsLmNvbG9yID0gbS51dGlscy5jb2xvcihzZXR1cC5hY3RpdmVDb2xvcilcblx0XHRcdFx0dGFiLnZpZXcudmlzaWJsZSA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0bS51dGlscy5jaGFuZ2VGaWxsKHRhYi5pY29uLCBtLnV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpKVxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBtLnV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpXG5cdFx0XHRcdHRhYi52aWV3LnZpc2libGUgPSBmYWxzZVxuXG5cdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHQjQ2hlY2sgZm9yIHZhaWxkIHRhYiBvYmplY3Rcblx0XHRpZiB0YWIudHlwZSAhPSBcInRhYlwiXG5cdFx0XHRlcnJvcih0YWIuaWQsIDUpXG5cblx0XHR0YWJCYXJCb3guYWRkU3ViTGF5ZXIodGFiKVxuXHRcdCMgQ2hhbmdlIGNvbG9yc1xuXHRcdG0udXRpbHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgbS51dGlscy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKSlcblx0XHR0YWIubGFiZWwuY29sb3IgPSBtLnV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpXG5cdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gc2V0dXAuYmFja2dyb3VuZENvbG9yXG5cblx0XHRpZiBzZXR1cC5ibHVyXG5cdFx0XHR0YWJCYXJCRy5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsIC45KVwiXG5cdFx0XHRtLnV0aWxzLmJnQmx1cih0YWJCYXJCRylcblxuXHRcdGlmIGluZGV4ID09IDBcblx0XHRcdHRhYi5jb25zdHJhaW50cy5sZWFkaW5nID0gMFxuXHRcdGVsc2Vcblx0XHRcdHRhYi5jb25zdHJhaW50cy5sZWFkaW5nID0gc2V0dXAudGFic1tpbmRleCAtIDFdXG5cblx0XHRtLmxheW91dC5zZXQodGFiKVxuXG5cdFx0dGFiLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0dGFiSW5kZXggPSBALnggLyBtLnV0aWxzLnB4KHRhYldpZHRoKVxuXHRcdFx0c2V0QWN0aXZlKHRhYkluZGV4KVxuXHR0YWJCYXJCb3guY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0c2V0QWN0aXZlKHNldHVwLnN0YXJ0KVxuXG5cdG0ubGF5b3V0LnNldCgpXG5cdHJldHVybiB0YWJCYXJcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0Y29uc3RyYWludHM6e31cblx0dGV4dDogXCJNYXRlcmlhbCBUZXh0IExheWVyXCJcblx0dHlwZTpcInRleHRcIlxuXHR4OjBcblx0eTowXG5cdHdpZHRoOi0xXG5cdGhlaWdodDotMVxuXHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRzdHlsZTpcImRlZmF1bHRcIlxuXHRsaW5lczoxXG5cdHRleHRBbGlnbjpcImxlZnRcIlxuXHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGNvbG9yOlwiYmxhY2tcIlxuXHRmb250U2l6ZTogMTdcblx0Zm9udFN0eWxlOlwicmVndWxhclwiXG5cdGZvbnRGYW1pbHk6XCJSb2JvdG9cIlxuXHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdGxpbmVIZWlnaHQ6XCJhdXRvXCJcblx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRvcGFjaXR5OjFcblx0dGV4dFRyYW5zZm9ybTpcIm5vbmVcIlxuXHRsZXR0ZXJTcGFjaW5nOjBcblx0bmFtZTpcInRleHQgbGF5ZXJcIlxufVxuXG4jdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1CbGFjay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUJvbGRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcblxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG5zdHlsZS50eXBlID0gJ3RleHQvY3NzJ1xuXG5zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDEwMCwxMDBpdGFsaWMsMzAwLDMwMGl0YWxpYyw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDkwMCw5MDBpdGFsaWMpO1xcbiBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTsgXFxuXCIpKVxuXG4jIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQGZvbnQtZmFjZSB7XFxuXCIgK1xuIyBcIlxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG5cIiArXG4jIFwiXFx0c3JjOiBsb2NhbCgn4pi6JyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLVRoaW5JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcblwiICtcbiMgXCJ9XFxuXCIgKyBcIlxcdGZvbnQtd2VpZ2h0OiAxMDBcIlxuIyBcIlxcdGZvbnQtZmFtaWx5OiBSb2JvdG8gIWltcG9ydGFudDtcXG5cIiArXG4jIFwifVxcblwiKSlcblxuIyBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkBmb250LWZhY2Uge1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXCIgK1xuIyBcIlxcdHNyYzogbG9jYWwoJ+KYuicpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXCIgK1xuIyBcIn1cXG5cIiArIFwiXFx0Zm9udC13ZWlnaHQ6IGxpZ2h0XCJcbiMgXCJcXHRmb250LWZhbWlseTogUm9ib3RvICFpbXBvcnRhbnQ7XFxuXCIgK1xuIyBcIn1cXG5cIikpXG4jXG4jIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCkpXG4jXG4jIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQGZvbnQtZmFjZSB7XFxuXCIgK1xuIyBcIlxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG5cIiArXG4jIFwiXFx0c3JjOiBsb2NhbCgn4pi6JyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcblwiICtcbiMgXCJ9XFxuXCIgKyBcIlxcdGZvbnQtd2VpZ2h0OiBcXFwibm9ybWFsXFxcIjtcXG5cIiArXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xcblwiICtcbiMgXCJ9XFxuXCIgKyBcIkBmb250LWZhY2Uge1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXCIgK1xuIyBcIlxcdHNyYzogbG9jYWwoJ+KYuicpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cIiArXG4jIFwifVxcblwiICsgXCJcXHRmb250LXdlaWdodDogXFxcInRoaW5cXFwiO1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogUm9ib3RvICFpbXBvcnRhbnQ7XFxuXCIgK1xuIyBcIn1cXG5cIlxuI1xuIyApKVxuXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKVxuXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdGV4Y2VwdGlvbnMgPSBPYmplY3Qua2V5cyhzZXR1cClcblx0dGV4dExheWVyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6c2V0dXAubmFtZVxuXHR0ZXh0TGF5ZXIudHlwZSA9IFwidGV4dFwiXG5cdHRleHRMYXllci5odG1sID0gc2V0dXAudGV4dFxuXHRmb3IgcHJvcCBpbiBtLmxpYi5sYXllclByb3BzXG5cdFx0aWYgc2V0dXBbcHJvcF1cblx0XHRcdGlmIHByb3AgPT0gXCJjb2xvclwiXG5cdFx0XHRcdHNldHVwW3Byb3BdID0gbS51dGlscy5jb2xvcihzZXR1cFtwcm9wXSlcblx0XHRcdHRleHRMYXllcltwcm9wXSA9IHNldHVwW3Byb3BdXG5cdGZvciBwcm9wIGluIG0ubGliLmxheWVyU3R5bGVzXG5cdFx0aWYgc2V0dXBbcHJvcF1cblx0XHRcdGlmIHByb3AgPT0gXCJsaW5lSGVpZ2h0XCIgJiYgc2V0dXBbcHJvcF0gPT0gXCJhdXRvXCJcblx0XHRcdFx0dGV4dExheWVyLnN0eWxlLmxpbmVIZWlnaHQgPSAgc2V0dXAuZm9udFNpemVcblx0XHRcdGlmIHByb3AgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0c3dpdGNoIHNldHVwW3Byb3BdXG5cdFx0XHRcdFx0d2hlbiBcInVsdHJhdGhpblwiIHRoZW4gc2V0dXBbcHJvcF0gPSAxMDBcblx0XHRcdFx0XHR3aGVuIFwidGhpblwiIHRoZW4gc2V0dXBbcHJvcF0gPSAyMDBcblx0XHRcdFx0XHR3aGVuIFwibGlnaHRcIiB0aGVuIHNldHVwW3Byb3BdID0gMzAwXG5cdFx0XHRcdFx0d2hlbiBcInJlZ3VsYXJcIiB0aGVuIHNldHVwW3Byb3BdID0gNDAwXG5cdFx0XHRcdFx0d2hlbiBcIm1lZGl1bVwiIHRoZW4gc2V0dXBbcHJvcF0gPSA1MDBcblx0XHRcdFx0XHR3aGVuIFwic2VtaWJvbGRcIiB0aGVuIHNldHVwW3Byb3BdID0gNjAwXG5cdFx0XHRcdFx0d2hlbiBcImJvbGRcIiB0aGVuIHNldHVwW3Byb3BdID0gNzAwXG5cdFx0XHRcdFx0d2hlbiBcImJsYWNrXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDgwMFxuXHRcdFx0aWYgcHJvcCA9PSBcImZvbnRTaXplXCIgfHwgcHJvcCA9PSBcImxpbmVIZWlnaHRcIiB8fCBwcm9wID09IFwibGV0dGVyU3BhY2luZ1wiXG5cdFx0XHRcdHNldHVwW3Byb3BdID0gbS51dGlscy5weChzZXR1cFtwcm9wXSkgKyBcInB4XCJcblx0XHRcdHRleHRMYXllci5zdHlsZVtwcm9wXSA9IHNldHVwW3Byb3BdXG5cblx0dGV4dEZyYW1lID0gbS51dGlscy50ZXh0QXV0b1NpemUodGV4dExheWVyKVxuXHR0ZXh0TGF5ZXIucHJvcHMgPSAoaGVpZ2h0OnRleHRGcmFtZS5oZWlnaHQsIHdpZHRoOnRleHRGcmFtZS53aWR0aClcblx0dGV4dExheWVyLmNvbnN0cmFpbnRzID0gc2V0dXAuY29uc3RyYWludHNcblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OnRleHRMYXllclxuXHRyZXR1cm4gdGV4dExheWVyXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG4jIyBDb252ZXJ0cyBweCB0byBwdFxuZXhwb3J0cy5wdCA9IChweCkgLT5cblx0cHQgPSBweC9tLmRldmljZS5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jIyBDb252ZXJ0cyBwdCB0byBweFxuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIG0uZGV2aWNlLnNjYWxlXG5cdHB4ID0gTWF0aC5yb3VuZChweClcblx0cmV0dXJuIHB4XG5cbiMjIGlPUyBDb2xvciDigJMgVGhpcyB3aWxsIHN0b3JlIGFsbCBvZiB0aGUgZGVmYXVsdCBpT1MgY29sb3JzIGludGVhZCBvZiB0aGUgZGVmYXVsdCBDU1MgY29sb3JzLiAqVGhpcyBpcyBvbmx5IHVwIGhlcmUgYmVjYXVzZSBJIHJlZmVyIHRvIGl0IGluIHRoZSBkZWZhdWx0cy4qXG5leHBvcnRzLmNvbG9yID0gKGNvbG9yU3RyaW5nKSAtPlxuXHRpZiBjb2xvclN0cmluZ1swXSA9PSBcIiNcIlxuXHRcdHJldHVybiBjb2xvclN0cmluZ1xuXHRlbHNlXG5cdFx0Y29sb3IgPSAgbmV3IENvbG9yKG0ubGliLmNvbG9yc1tjb2xvclN0cmluZ10pXG5cdFx0cmV0dXJuIGNvbG9yXG5cbiMgU3VwcG9ydGluZyBGdW5jdGlvbnNcbiMgVXRpbHNcblxuIyBDbGVhbnMgYSBzdHJpbmcgb2YgPGJyPiBhbmQgJm5ic3A7XG5leHBvcnRzLmNsZWFuID0gKHN0cmluZykgLT5cblx0IyMgcmVtb3ZlIHdoaXRlIHNwYWNlXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bJl1uYnNwWztdL2dpLCBcIiBcIikucmVwbGFjZSgvWzxdYnJbPl0vZ2ksIFwiXCIpXG5cdHJldHVybiBzdHJpbmdcblxuIyBDb252ZXJ0cyBweCdzIG9mIGFuIFNWRyB0byBzY2FsYWJsZSB2YXJpYWJsZXNcbmV4cG9ydHMuc3ZnID0gKHN2ZykgLT5cblx0IyBGaW5kIFN0cmluZ1xuXHRzdGFydEluZGV4ID0gc3ZnLnNlYXJjaChcIjxzdmcgd2lkdGg9XCIpXG5cdGVuZEluZGV4ID0gc3ZnLnNlYXJjaChcIiB2aWV3Qm94XCIpXG5cdHN0cmluZyA9IHN2Zy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuXHQjRmluZCB3aWR0aFxuXHR3U3RhcnRJbmRleCA9IHN0cmluZy5zZWFyY2goXCI9XCIpICsgMlxuXHR3RW5kSW5kZXggPSAgc3RyaW5nLnNlYXJjaChcInB4XCIpXG5cdHdpZHRoID0gc3RyaW5nLnNsaWNlKHdTdGFydEluZGV4LCB3RW5kSW5kZXgpXG5cdG5ld1dpZHRoID0gZXhwb3J0cy5weCh3aWR0aClcblxuXHQjIEZpbmQgSGVpZ2h0XG5cdGhlaWdodFN0cmluZyA9IHN0cmluZy5zbGljZSh3RW5kSW5kZXggKyA0LCBzdHJpbmcubGVuZ3RoKVxuXHRoU3RhcnRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCI9XCIpKyAyXG5cdGhFbmRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCJweFwiKVxuXHRoZWlnaHQgPSBoZWlnaHRTdHJpbmcuc2xpY2UoaFN0YXJ0SW5kZXgsIGhFbmRJbmRleClcblx0bmV3SGVpZ2h0ID0gZXhwb3J0cy5weChoZWlnaHQpXG5cblx0I0NyZWF0ZSBuZXcgc3RyaW5nXG5cdG5ld1N0cmluZyA9IHN0cmluZy5yZXBsYWNlKHdpZHRoLCBuZXdXaWR0aClcblx0bmV3U3RyaW5nID0gbmV3U3RyaW5nLnJlcGxhY2UoaGVpZ2h0LCBuZXdIZWlnaHQpXG5cblx0I1JlcGxhY2Ugc3RyaW5nc1xuXHRzdmcgPSBzdmcucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuXHRyZXR1cm4ge1xuXHRcdHN2Zzpzdmdcblx0XHR3aWR0aDpuZXdXaWR0aFxuXHRcdGhlaWdodDpuZXdIZWlnaHRcblx0fVxuXG4jIENoYW5nZXMgdGhlIGZpbGwgb2YgYW4gU1ZHXG5leHBvcnRzLmNoYW5nZUZpbGwgPSAobGF5ZXIsIGNvbG9yKSAtPlxuXHRpZiB0eXBlb2YgY29sb3IgIT0gXCJvYmplY3RcIlxuXHRcdGNvbG9yID0gZXhwb3J0cy5jb2xvcihjb2xvcilcblx0c3RhcnRJbmRleCA9IGxheWVyLmh0bWwuc2VhcmNoKFwiZmlsbD1cXFwiI1wiKVxuXHRmaWxsU3RyaW5nID0gbGF5ZXIuaHRtbC5zbGljZShzdGFydEluZGV4LCBsYXllci5odG1sLmxlbmd0aClcblx0ZW5kSW5kZXggPSBmaWxsU3RyaW5nLnNlYXJjaChcIlxcXCJcIikgKyA4XG5cdHN0cmluZyA9IGZpbGxTdHJpbmcuc2xpY2UoMCwgZW5kSW5kZXgpXG5cdG5ld1N0cmluZyA9IFwiZmlsbD1cXFwiXCIgKyBjb2xvclxuXHRsYXllci5odG1sID0gbGF5ZXIuaHRtbC5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5leHBvcnRzLmNhcGl0YWxpemUgPSAoc3RyaW5nKSAtPlxuXHRyZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG5cbiMgUmV0dXJucyB0aGUgY3VycmVudCB0aW1lXG5leHBvcnRzLmdldFRpbWUgPSAtPlxuXHRkYXlzT2ZUaGVXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cblx0bW9udGhzT2ZUaGVZZWFyID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cblx0ZGF0ZU9iaiA9IG5ldyBEYXRlKClcblx0bW9udGggPSBtb250aHNPZlRoZVllYXJbZGF0ZU9iai5nZXRNb250aCgpXVxuXHRkYXRlID0gZGF0ZU9iai5nZXREYXRlKClcblx0ZGF5ID0gZGF5c09mVGhlV2Vla1tkYXRlT2JqLmdldERheSgpXVxuXHRob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKVxuXHRtaW5zID0gZGF0ZU9iai5nZXRNaW51dGVzKClcblx0c2VjcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXG5cdHJldHVybiB7XG5cdFx0bW9udGg6bW9udGhcblx0XHRkYXRlOmRhdGVcblx0XHRkYXk6ZGF5XG5cdFx0aG91cnM6aG91cnNcblx0XHRtaW5zOm1pbnNcblx0XHRzZWNzOnNlY3Ncblx0fVxuXG5leHBvcnRzLmJnQmx1ciA9IChsYXllcikgLT5cblx0bGF5ZXIuc3R5bGVbXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiXSA9IFwiYmx1cigje2V4cG9ydHMucHgoNSl9cHgpXCJcblx0cmV0dXJuIGxheWVyXG5cbmV4cG9ydHMudGV4dEF1dG9TaXplID0gKHRleHRMYXllcikgLT5cblx0I0RlZmluZSBXaWR0aFxuXHRjb25zdHJhaW50cyA9IHt9XG5cdGlmIHRleHRMYXllci5jb25zdHJhaW50c1xuXHRcdGlmIHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHRcblx0XHRcdGNvbnN0cmFpbnRzLmhlaWdodCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGhcblx0XHRcdGNvbnN0cmFpbnRzLndpZHRoID0gZXhwb3J0cy5weCh0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cblx0c3R5bGVzID1cblx0XHRmb250U2l6ZTogdGV4dExheWVyLnN0eWxlLmZvbnRTaXplXG5cdFx0Zm9udEZhbWlseTogdGV4dExheWVyLnN0eWxlLmZvbnRGYW1pbHlcblx0XHRmb250V2VpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGUuZm9udFdlaWdodFxuXHRcdGZvbnRTdHlsZTogdGV4dExheWVyLnN0eWxlLmZvbnRTdHlsZVxuXHRcdGxpbmVIZWlnaHQ6IHRleHRMYXllci5zdHlsZS5saW5lSGVpZ2h0XG5cdFx0bGV0dGVyU3BhY2luZzogdGV4dExheWVyLnN0eWxlLmxldHRlclNwYWNpbmdcblx0XHR0ZXh0VHJhbnNmb3JtOiB0ZXh0TGF5ZXIuc3R5bGUudGV4dFRyYW5zZm9ybVxuXHR0ZXh0RnJhbWUgPSBVdGlscy50ZXh0U2l6ZSh0ZXh0TGF5ZXIuaHRtbCwgc3R5bGVzLCBjb25zdHJhaW50cylcblx0cmV0dXJuIHtcblx0XHR3aWR0aCA6IHRleHRGcmFtZS53aWR0aFxuXHRcdGhlaWdodDogdGV4dEZyYW1lLmhlaWdodFxuXHR9XG5cbmV4cG9ydHMuZ2V0RGV2aWNlID0gLT5cblx0IyBMb2FkcyB0aGUgaW5pdGlhbCBmcmFtZVxuXHRkZXZpY2UgPSBcIlwiXG5cdGZyYW1lID0gdHJ1ZVxuXHRpZiBtLmxpYi5yZWFsRGV2aWNlc1tpbm5lcldpZHRoXSAmJiBtLmxpYi5yZWFsRGV2aWNlc1tpbm5lcldpZHRoXVtpbm5lckhlaWdodF1cblx0XHRkZXZpY2UgPSBtLmxpYi5yZWFsRGV2aWNlc1tpbm5lcldpZHRoXVtpbm5lckhlaWdodF1cblx0XHRmcmFtZSA9IGZhbHNlXG5cdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRpZiBmcmFtZVxuXHRcdGRldmljZSA9XG5cdFx0XHRuYW1lOiBGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVcblx0XHRcdHdpZHRoIDogIEZyYW1lci5EZXZpY2VWaWV3LkRldmljZXNbRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXS5zY3JlZW5XaWR0aFxuXHRcdFx0aGVpZ2h0OiAgRnJhbWVyLkRldmljZVZpZXcuRGV2aWNlc1tGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVdLnNjcmVlbkhlaWdodFxuXHRcdFx0c2NhbGU6IG0ubGliLmZyYW1lckZyYW1lc1tGcmFtZXIuRGV2aWNlVmlldy5EZXZpY2VzW0ZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZV0uc2NyZWVuV2lkdGhdXG5cblx0aWYgZGV2aWNlLnNjYWxlID09IHVuZGVmaW5lZFxuXHRcdGRldmljZS5zY2FsZSA9IDJcblx0aWYgZGV2aWNlLndpZHRoID09IHVuZGVmaW5lZFxuXHRcdGRldmljZS53aWR0aCA9IGlubmVyV2lkdGhcblx0aWYgZGV2aWNlLmhlaWdodCA9PSB1bmRlZmluZWRcblx0XHRkZXZpY2UuaGVpZ2h0ID0gaW5uZXJIZWlnaHRcblxuXHRyZXR1cm4gZGV2aWNlXG5cblxuIyBTcGVjaWFsIENoYXJhY3RlcnNcbmV4cG9ydHMuc3BlY2lhbENoYXIgPSAobGF5ZXIpIC0+XG5cdHRleHQgPSBsYXllclxuXHRpZiBsYXllci50eXBlID09IFwiYnV0dG9uXCJcblx0XHR0ZXh0ID0gbGF5ZXIubGFiZWxcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1iIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2ZvbnRXZWlnaHQ6NjAwfV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItciBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcInJlZFwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXJiXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXJiIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwiYmx1ZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWxiXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWxiIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwibGlnaHQtYmx1ZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWdcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItZyBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImdyZWVuXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItb1wiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1vIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwib3JhbmdlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItcFwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1wIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwib3JhbmdlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCIteVwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi15IFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwieWVsbG93XCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItI1wiKSAhPSAtMVxuXHRcdGNob3NlbkNvbG9yID0gdGV4dC5odG1sLnNsaWNlKDEsIDgpXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5zbGljZSg5LCB0ZXh0Lmh0bWwubGVuZ3RoKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOmNob3NlbkNvbG9yfV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLVwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi0gXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9XSlcblx0aWYgbGF5ZXIuYnV0dG9uVHlwZSA9PSBcInRleHRcIlxuXHRcdGxheWVyLndpZHRoID0gdGV4dC53aWR0aFxuXHRtLmxheW91dC5zZXQoKVxuXG5leHBvcnRzLnVwZGF0ZSA9IChsYXllciwgYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0aWYgbGF5ZXIudHlwZSA9PSBcInRleHRcIlxuXHRcdGZvciBjaGFuZ2UgaW4gYXJyYXlcblx0XHRcdGtleSA9IE9iamVjdC5rZXlzKGNoYW5nZSlbMF1cblx0XHRcdHZhbHVlID0gY2hhbmdlW2tleV1cblx0XHRcdGlmIGtleSA9PSBcInRleHRcIlxuXHRcdFx0XHRsYXllci5odG1sID0gdmFsdWVcblx0XHRcdGlmIGtleSA9PSBcImZvbnRXZWlnaHRcIlxuXHRcdFx0XHRsYXllci5zdHlsZVtrZXldID0gdmFsdWVcblx0XHRcdGlmIGtleSA9PSBcImNvbG9yXCJcblx0XHRcdFx0bGF5ZXIuY29sb3IgPSBleHBvcnRzLmNvbG9yKHZhbHVlKVxuXG5cdFx0dGV4dEZyYW1lID0gZXhwb3J0cy50ZXh0QXV0b1NpemUobGF5ZXIpXG5cdFx0bGF5ZXIud2lkdGggPSB0ZXh0RnJhbWUud2lkdGhcblx0XHRsYXllci5oZWlnaHQgPSB0ZXh0RnJhbWUuaGVpZ2h0XG5cblxuXHRtLmxheW91dC5zZXQoKVxuXG4jIERlY2lkZXMgaWYgaXQgc2hvdWxkIGJlIHdoaXRlL2JsYWNrIHRleHRcbmV4cG9ydHMuYXV0b0NvbG9yID0gKGNvbG9yT2JqZWN0KSAtPlxuXHRyZ2IgPSBjb2xvck9iamVjdC50b1JnYlN0cmluZygpXG5cdHJnYiA9IHJnYi5zdWJzdHJpbmcoNCwgcmdiLmxlbmd0aC0xKVxuXHRyZ2IgPSByZ2IucmVwbGFjZSgvIC9nLCAnJylcblx0cmdiID0gcmdiLnJlcGxhY2UoLyAvZywgJycpXG5cdHJnYiA9IHJnYi5zcGxpdCgnLCcpXG5cdHJlZCA9IHJnYlswXVxuXHRncmVlbiA9IHJnYlsxXVxuXHRibHVlID0gcmdiWzJdXG5cdGNvbG9yID0gXCJcIlxuXHRpZiAocmVkKjAuMjk5ICsgZ3JlZW4qMC41ODcgKyBibHVlKjAuMTE0KSA+IDE4NlxuXHRcdGNvbG9yID0gZXhwb3J0cy5jb2xvcihcImJsYWNrXCIpXG5cdGVsc2Vcblx0XHRjb2xvciA9IGV4cG9ydHMuY29sb3IoXCJ3aGl0ZVwiKVxuXHRyZXR1cm4gY29sb3JcblxuZXhwb3J0cy5zYW1lUGFyZW50ID0gKGxheWVyMSwgbGF5ZXIyKSAtPlxuXHRwYXJlbnRPbmUgPSBsYXllcjEuc3VwZXJMYXllclxuXHRwYXJlbnRUd28gPSBsYXllcjIuc3VwZXJMYXllclxuXHRpZiBwYXJlbnRPbmUgPT0gcGFyZW50VHdvXG5cdFx0cmV0dXJuIHRydWVcblx0ZWxzZVxuXHRcdHJldHVybiBmYWxzZVxuXG5cbmV4cG9ydHMudGltZURlbGVnYXRlID0gKGxheWVyLCBjbG9ja1R5cGUpIC0+XG5cdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0VXRpbHMuZGVsYXkgNjAgLSBAdGltZS5zZWNzLCAtPlxuXHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcblx0XHRVdGlscy5pbnRlcnZhbCA2MCwgLT5cblx0XHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRcdGV4cG9ydHMudXBkYXRlKGxheWVyLCBbdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIGNsb2NrVHlwZSldKVxuXG5leHBvcnRzLnRpbWVGb3JtYXR0ZXIgPSAodGltZU9iaiwgY2xvY2tUeXBlKSAtPlxuXHRpZiBjbG9ja1R5cGUgPT0gZmFsc2Vcblx0XHRpZiB0aW1lT2JqLmhvdXJzID4gMTJcblx0XHRcdHRpbWVPYmouaG91cnMgPSB0aW1lT2JqLmhvdXJzIC0gMTJcblx0XHRpZiB0aW1lT2JqLmhvdXJzID09IDAgdGhlbiB0aW1lT2JqLmhvdXJzID0gMTJcblx0aWYgdGltZU9iai5taW5zIDwgMTBcblx0XHR0aW1lT2JqLm1pbnMgPSBcIjBcIiArIHRpbWVPYmoubWluc1xuXHRyZXR1cm4gdGltZU9iai5ob3VycyArIFwiOlwiICsgdGltZU9iai5taW5zXG5cbmV4cG9ydHMuc2V0dXBDb21wb25lbnQgPSAoYXJyYXksIGRlZmF1bHRzKSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdG9iaiA9IHt9XG5cdGZvciBpIGluIGRlZmF1bHRzLnByb3BzXG5cdFx0aWYgYXJyYXlbaV0gIT0gdW5kZWZpbmVkXG5cdFx0XHRvYmpbaV0gPSBhcnJheVtpXVxuXHRcdGVsc2Vcblx0XHRcdG9ialtpXSA9IGRlZmF1bHRzW2ldXG5cdHJldHVybiBvYmpcblxuXG5leHBvcnRzLmVtb2ppRm9ybWF0dGVyID0gKHN0cmluZykgLT5cblx0XHR1bmljb2RlRm9ybWF0ID0gXCJcIlxuXHRcdGlmIHN0cmluZ1swXSA9PSBcIkVcIiB8fCBzdHJpbmdbMF0gPT0gXCIzXCIgfHwgc3RyaW5nWzBdID09IFwiMlwiIHx8IHN0cmluZ1swXSA9PSBcIkNcIlxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0ZWxzZVxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0dW5pY29kZUZvcm1hdCA9IFwiJUYwJTlGXCJcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQodW5pY29kZUZvcm1hdClcblx0XHRyZXR1cm4gZGVjb2RlZFxuXG5leHBvcnRzLmJ1aWxkRW1vamlzT2JqZWN0ID0gKCkgLT5cblx0ZW1vamlzID0gW11cblx0Zm9yIGNvZGUsIGluZGV4IGluIG0uYXNzZXRzLmVtb2ppQ29kZXNcblx0XHRlbW9qaSA9IGV4cG9ydHMuZW1vamlGb3JtYXR0ZXIoY29kZSlcblx0XHRlbW9qaXMucHVzaCBlbW9qaVxuXG5cblxuI2xheWVyLCBtb3ZlVG9UYXAsIGNvbG9yLCBzY2FsZSwgY3VydmVcbmV4cG9ydHMuaW5reSA9IChzZXR1cCkgLT5cblx0c3RhcnRYID0gc2V0dXAubGF5ZXIud2lkdGgvMlxuXHRzdGFydFkgPSBzZXR1cC5sYXllci5oZWlnaHQvMlxuXG5cdGlua0NvbG9yID0gXCIjMEEwQTBBXCJcblx0aW5rU2NhbGUgPSAzXG5cdGlua0N1cnZlID0gXCJiZXppZXItY3VydmUoLjIsIDAuNCwgMC40LCAxLjApXCJcblx0aW5rT3BhY2l0eSA9IDFcblx0bW92ZVRvVGFwID0gdHJ1ZVxuXG5cdGlmIHNldHVwLm1vdmVUb1RhcCAhPSB1bmRlZmluZWRcblx0XHRtb3ZlVG9UYXAgPSBzZXR1cC5tb3ZlVG9UYXBcblxuXHRpZiBzZXR1cC5jb2xvciAhPSB1bmRlZmluZWRcblx0XHRpbmtDb2xvciA9IG0uY29sb3Ioc2V0dXAuY29sb3IpXG5cblx0aWYgc2V0dXAuc2NhbGUgIT0gdW5kZWZpbmVkXG5cdFx0aW5rU2NhbGUgPSBzZXR1cC5zY2FsZVxuXG5cdGlmIHNldHVwLmN1cnZlICE9IHVuZGVmaW5lZFxuXHRcdGlua0N1cnZlID0gc2V0dXAuY3VydmVcblxuXHRpZiBzZXR1cC5vcGFjaXR5ICE9IHVuZGVmaW5lZFxuXHRcdGlua09wYWNpdHkgPSBzZXR1cC5vcGFjaXR5XG5cblx0aW5reUVmZmVjdCA9IChldmVudCwgbGF5ZXIpIC0+XG5cdFx0aWYgbW92ZVRvVGFwID09IHRydWVcblx0XHRcdHN0YXJ0WCA9IGV2ZW50Lm9mZnNldFhcblx0XHRcdHN0YXJ0WSA9IGV2ZW50Lm9mZnNldFlcblxuXHRcdFx0aWYgVXRpbHMuaXNDaHJvbWUoKSA9PSBmYWxzZSAmJiBVdGlscy5pc1RvdWNoKClcblx0XHRcdFx0c3RhcnRYID0gZXZlbnQudG91Y2hDZW50ZXIueCAtIGxheWVyLnhcblx0XHRcdFx0c3RhcnRZID0gZXZlbnQudG91Y2hDZW50ZXIueSAtIGxheWVyLnlcblxuXHRcdGNpcmNsZSA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOmlua0NvbG9yXG5cdFx0XHRtaWRYOnN0YXJ0WFxuXHRcdFx0bWlkWTpzdGFydFlcblx0XHRcdHN1cGVyTGF5ZXI6bGF5ZXJcblx0XHRcdGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDUwKVxuXHRcdFx0b3BhY2l0eTogaW5rT3BhY2l0eVxuXG5cdFx0Y2lyY2xlLnNjYWxlID0gLjFcblx0XHRjaXJjbGUuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczooc2NhbGU6aW5rU2NhbGUsIG9wYWNpdHk6MClcblx0XHRcdGN1cnZlOmlua0N1cnZlXG5cdFx0XHR0aW1lOi41XG5cdFx0VXRpbHMuZGVsYXkgMSwgLT5cblx0XHRcdGNpcmNsZS5kZXN0cm95KClcblxuXHRpZiBVdGlscy5pc0Nocm9tZSgpICYmIFV0aWxzLmlzVG91Y2goKVxuXHRcdHNldHVwLmxheWVyLm9uIEV2ZW50cy5Eb3VibGVUYXAsIChldmVudCkgLT5cblx0XHRcdGlua3lFZmZlY3QoZXZlbnQsIEApXG5cdGlmIFV0aWxzLmlzQ2hyb21lKCkgPT0gZmFsc2UgJiYgVXRpbHMuaXNUb3VjaCgpXG5cdFx0c2V0dXAubGF5ZXIub24gRXZlbnRzLlRhcCwgKGV2ZW50KSAtPlxuXHRcdFx0aW5reUVmZmVjdChldmVudCwgQClcblx0aWYgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRzZXR1cC5sYXllci5vbiBFdmVudHMuVG91Y2hFbmQsIChldmVudCkgLT5cblx0XHRcdGlua3lFZmZlY3QoZXZlbnQsIEApXG4iLCIjbWF0ZXJpYWxLaXQgTW9kdWxlXG4jQnkgS2V2eW4gQXJub3R0XG5cbiMgSW1wb3J0IGZyYW1ld29ya1xuZXhwb3J0cy5sYXlvdXQgPSBsYXlvdXQgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtbGF5b3V0J1xuZXhwb3J0cy5saWIgPSBsaWJyYXJ5ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWxpYnJhcnknXG5leHBvcnRzLnV0aWxzID0gdXRpbHMgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtdXRpbHMnXG5cbiMgU2V0dXAgcmVzb3VyY2VzXG5leHBvcnRzLmRldmljZSA9IHV0aWxzLmdldERldmljZSgpXG5leHBvcnRzLmFzc2V0cyA9IGxpYnJhcnkuYXNzZXRzXG5cbiMjIFNob3J0Y3V0c1xuZXhwb3J0cy5jb2xvciA9IChjb2xvclN0cmluZykgLT5cbiAgcmV0dXJuIGV4cG9ydHMudXRpbHMuY29sb3IoY29sb3JTdHJpbmcpXG5cbmV4cG9ydHMuZHAgPSAocHgpIC0+XG4gIHJldHVybiBleHBvcnRzLnV0aWxzLnB0KHB4KVxuXG5leHBvcnRzLnB4ID0gKGRwKSAtPlxuICByZXR1cm4gZXhwb3J0cy51dGlscy5weChkcClcblxuXG4jIEltcG9ydCBDb21wb25lbnRzXG5hbGVydCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1hbGVydCdcbmFwcGJhciA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1hcHAtYmFyJ1xuYmFubmVyID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWJhbm5lcidcbmJ1dHRvbiA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1idXR0b24nXG5maWVsZCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1maWVsZCdcbmljb24gPSByZXF1aXJlICdtYXRlcmlhbC1raXQtaWNvbidcbmtleWJvYXJkID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWtleWJvYXJkJ1xubmF2ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LW5hdi1iYXInXG5zdGF0dXMgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtc3RhdHVzLWJhcidcbnRhYiA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC10YWItYmFyJ1xudGV4dCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC10ZXh0J1xuXG4jIyBTZXR1cCBDb21wb25lbnRzXG5leHBvcnRzLkFsZXJ0ID0gYWxlcnQuY3JlYXRlXG5leHBvcnRzLkFwcEJhciA9IGFwcGJhci5jcmVhdGVcbmV4cG9ydHMuQmFubmVyID0gYmFubmVyLmNyZWF0ZVxuZXhwb3J0cy5CdXR0b24gPSBidXR0b24uY3JlYXRlXG5leHBvcnRzLkZpZWxkID0gZmllbGQuY3JlYXRlXG5leHBvcnRzLkljb24gPSBpY29uLmNyZWF0ZVxuZXhwb3J0cy5LZXlib2FyZCA9IGtleWJvYXJkLmNyZWF0ZVxuZXhwb3J0cy5OYXZCYXIgPSBuYXYuY3JlYXRlXG5leHBvcnRzLlN0YXR1c0JhciA9IHN0YXR1cy5jcmVhdGVcbmV4cG9ydHMuVGFiID0gdGFiLnRhYlxuZXhwb3J0cy5UYWJCYXIgPSB0YWIuYmFyXG5leHBvcnRzLlRleHQgPSB0ZXh0LmNyZWF0ZVxuIl19
