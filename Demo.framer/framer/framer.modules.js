require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"material-kit-alert":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  title: "Title",
  message: "Message",
  actions: ["OK"],
  action: "Action",
  secondaryAction: "secondaryAction"
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var act, actLabel, actLabel2, action, action2, actionDivider, actions, alert, divider, i, index, j, len, len1, message, modal, overlay, ref, setup, title, vertDivider;
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
    backgroundColor: "rgba(0,0,0,.3)",
    superLayer: alert,
    name: "overlay"
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
    borderRadius: m.utils.px(10),
    name: "modal",
    x: 92,
    y: 537
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
    name: "title",
    textAlign: "center",
    lineHeight: 20,
    constraints: {
      top: 20,
      width: 220,
      align: "horizontal"
    }
  });
  message = new m.Text({
    superLayer: modal,
    text: setup.message,
    fontSize: 13,
    name: "message",
    textAlign: "center",
    lineHeight: 16,
    constraints: {
      top: [title, 10],
      align: "horizontal",
      width: 220
    }
  });
  divider = new Layer({
    superLayer: modal,
    backgroundColor: "#E2E8EB",
    name: "horizontal divider"
  });
  divider.constraints = {
    leading: 0,
    trailing: 0,
    height: 1,
    bottom: 44
  };
  m.layout.set();
  modal.constraints["height"] = 20 + m.utils.pt(title.height) + 10 + m.utils.pt(message.height) + 24 + 44;
  actions = [];
  switch (setup.actions.length) {
    case 1:
      actLabel = m.utils.capitalize(setup.actions[0]);
      action = new Layer({
        superLayer: modal,
        backgroundColor: "transparent",
        name: setup.actions[0],
        borderRadius: m.utils.px(10)
      });
      action.constraints = {
        leading: 0,
        trailing: 0,
        bottom: 0,
        height: 44
      };
      action.label = new m.Text({
        style: "alertAction",
        color: m.utils.color("blue"),
        superLayer: action,
        text: actLabel,
        name: "label"
      });
      action.label.constraints = {
        align: "horizontal",
        bottom: 16
      };
      actions.push(action);
      break;
    case 2:
      actLabel = m.utils.capitalize(setup.actions[0]);
      action = new Layer({
        superLayer: modal,
        name: setup.actions[0],
        borderRadius: m.utils.px(10),
        backgroundColor: "white"
      });
      action.constraints = {
        leading: 0,
        trailing: m.utils.pt(modal.width / 2),
        bottom: 0,
        height: 44
      };
      action.label = new m.Text({
        style: "alertAction",
        color: m.utils.color("blue"),
        superLayer: action,
        text: actLabel,
        name: "label"
      });
      action.label.constraints = {
        align: "horizontal",
        bottom: 16
      };
      actions.push(action);
      vertDivider = new Layer({
        superLayer: modal,
        backgroundColor: "#E2E8EB",
        name: "vertical divider"
      });
      vertDivider.constraints = {
        width: 1,
        bottom: 0,
        height: 44,
        align: "horizontal"
      };
      actLabel2 = m.utils.capitalize(setup.actions[1]);
      action2 = new Layer({
        superLayer: modal,
        name: setup.actions[1],
        borderRadius: m.utils.px(10),
        backgroundColor: "white"
      });
      action2.constraints = {
        leading: m.utils.pt(modal.width / 2),
        trailing: 0,
        bottom: 0,
        height: 44
      };
      action2.label = new m.Text({
        style: "alertAction",
        color: m.utils.color("blue"),
        superLayer: action2,
        text: actLabel2,
        name: "label"
      });
      action2.label.constraints = {
        align: "horizontal",
        bottom: 16
      };
      actions.push(action2);
      break;
    default:
      ref = setup.actions;
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        act = ref[index];
        actLabel = m.utils.capitalize(act);
        action = new Layer({
          superLayer: modal,
          name: act,
          borderRadius: m.utils.px(10),
          backgroundColor: "white"
        });
        action.constraints = {
          leading: 0,
          trailing: 0,
          bottom: 0 + ((setup.actions.length - index - 1) * 44),
          height: 44
        };
        actionDivider = new Layer({
          superLayer: modal,
          backgroundColor: "#E2E8EB",
          name: "horizontal divider"
        });
        actionDivider.constraints = {
          leading: 0,
          trailing: 0,
          height: 1,
          bottom: 0 + ((setup.actions.length - index) * 44)
        };
        action.label = new m.Text({
          style: "alertAction",
          color: m.utils.color("blue"),
          superLayer: action,
          text: actLabel,
          name: "label"
        });
        action.label.constraints = {
          align: "horizontal",
          bottom: 14
        };
        actions.push(action);
        modal.constraints["height"] = modal.constraints["height"] + 42 - 12;
      }
  }
  alert.actions = {};
  for (index = j = 0, len1 = actions.length; j < len1; index = ++j) {
    act = actions[index];
    act.type = "button";
    m.utils.specialChar(act);
    if (setup.actions[index].indexOf("-r") === 0) {
      act.origColor = m.utils.color("red");
    } else {
      act.origColor = m.utils.color("blue");
    }
    act.on(Events.TouchStart, function() {
      this.backgroundColor = "white";
      this.animate({
        properties: {
          backgroundColor: act.backgroundColor.darken(5)
        },
        time: .25
      });
      return this.label.animate({
        properties: {
          color: this.origColor.lighten(10)
        },
        time: .25
      });
    });
    act.on(Events.TouchEnd, function() {
      this.animate({
        properties: {
          backgroundColor: "white"
        },
        time: .25
      });
      return this.label.animate({
        properties: {
          color: this.origColor
        },
        time: .25
      });
    });
    alert.actions[act.name] = act;
  }
  m.layout.set();
  alert.overlay = overlay;
  alert.modal = modal;
  alert.title = title;
  alert.message = message;
  return alert;
};


},{"material-kit":"material-kit"}],"material-kit-banner":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  title: "Title",
  message: "Message",
  action: "Action",
  time: "now",
  icon: void 0,
  duration: 7,
  animated: false
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var banner, bannerBuffer, message, setup, time, title;
  setup = m.utils.setupComponent(array, exports.defaults);
  banner = new Layer({
    backgroundColor: "transparent",
    name: "banner"
  });
  banner.html = m.utils.svg(m.assets.bannerBG[m.device.name]).svg;
  banner.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 68
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
    height: 20,
    width: 20,
    leading: this.leadingIcon,
    top: this.topIcon
  };
  title = new m.Text({
    style: "bannerTitle",
    text: setup.title,
    color: "white",
    fontWeight: "medium",
    fontSize: 13,
    superLayer: banner,
    name: "title"
  });
  title.constraints = {
    top: this.topTitle,
    leading: [setup.icon, 11]
  };
  message = new m.Text({
    style: "bannerMessage",
    text: setup.message,
    color: "white",
    fontSize: 13,
    superLayer: banner,
    name: "message"
  });
  message.constraints = {
    leadingEdges: title,
    top: [title, 2]
  };
  time = new m.Text({
    style: "bannerTime",
    text: setup.time,
    color: "white",
    fontSize: 11,
    superLayer: banner,
    name: "time"
  });
  time.constraints = {
    leading: [title, 5],
    bottomEdges: title
  };
  if (m.device.name === "ipad" || m.device.name === "ipad-pro") {
    time.constraints = {
      bottomEdges: title,
      trailing: this.leadingIcon
    };
  }
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
      curve: "ease-in-out"
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
  banner.title = title;
  banner.message = message;
  return banner;
};


},{"material-kit":"material-kit"}],"material-kit-button":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  text: "text",
  type: "button",
  buttonType: "text",
  style: "light",
  backgroundColor: "white",
  color: "#007AFF",
  fontSize: 17,
  fontWeight: "regular",
  name: "button",
  blur: true,
  superLayer: void 0,
  constraints: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var backgroundColor, button, color, rgbString, rgbaString, setup, textLayer;
  setup = m.utils.setupComponent(array, exports.defaults);
  button = new Layer({
    name: setup.name
  });
  button.buttonType = setup.buttonType;
  button.type = setup.type;
  color = "";
  if (setup.constraints) {
    button.constraints = setup.constraints;
  }
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(button);
  }
  switch (setup.buttonType) {
    case "big":
      setup.fontSize = 20;
      setup.fontWeight = "medium";
      if (button.constraints === void 0) {
        button.constraints = {};
      }
      if (button.constraints.leading === void 0) {
        button.constraints.leading = 10;
      }
      if (button.constraints.trailing === void 0) {
        button.constraints.trailing = 10;
      }
      if (button.constraints.height === void 0) {
        button.constraints.height = 57;
      }
      button.borderRadius = m.utils.px(12.5);
      backgroundColor = "";
      switch (setup.style) {
        case "light":
          color = "#007AFF";
          if (setup.blur) {
            backgroundColor = "rgba(255, 255, 255, .9)";
            m.utils.bgBlur(button);
          } else {
            backgroundColor = "white";
          }
          break;
        case "dark":
          color = "#FFF";
          if (setup.blur) {
            backgroundColor = "rgba(43, 43, 43, .9)";
            m.utils.bgBlur(button);
          } else {
            backgroundColor = "#282828";
          }
          break;
        default:
          if (setup.blur) {
            color = setup.color;
            backgroundColor = new Color(setup.backgroundColor);
            rgbString = backgroundColor.toRgbString();
            rgbaString = rgbString.replace(")", ", .9)");
            rgbaString = rgbaString.replace("rgb", "rgba");
            backgroundColor = rgbaString;
            m.utils.bgBlur(button);
          } else {
            color = setup.color;
            backgroundColor = new Color(setup.backgroundColor);
          }
      }
      button.backgroundColor = backgroundColor;
      button.on(Events.TouchStart, function() {
        var newColor;
        newColor = "";
        if (setup.style === "dark") {
          newColor = button.backgroundColor.lighten(10);
        } else {
          newColor = button.backgroundColor.darken(10);
        }
        return button.animate({
          properties: {
            backgroundColor: newColor
          },
          time: .5
        });
      });
      button.on(Events.TouchEnd, function() {
        return button.animate({
          properties: {
            backgroundColor: backgroundColor
          },
          time: .5
        });
      });
      break;
    case "small":
      this.fontSize = 16;
      this.top = 4;
      button.borderRadius = m.utils.px(2.5);
      setup.fontWeight = 500;
      switch (setup.style) {
        case "light":
          color = "#007AFF";
          button.borderColor = "#007AFF";
          break;
        default:
          color = setup.color;
          button.borderColor = setup.color;
      }
      button.backgroundColor = "transparent";
      button.borderWidth = m.utils.px(1);
      break;
    default:
      button.backgroundColor = "transparent";
      color = setup.color;
      this.fontSize = setup.fontSize;
      this.fontWeight = setup.fontWeight;
      button.on(Events.TouchStart, function() {
        var newColor;
        newColor = button.subLayers[0].color.lighten(30);
        return button.subLayers[0].animate({
          properties: {
            color: newColor
          },
          time: .5
        });
      });
      button.on(Events.TouchEnd, function() {
        return button.subLayers[0].animate({
          properties: {
            color: setup.color
          },
          time: .5
        });
      });
  }
  textLayer = new m.Text({
    name: "label",
    text: setup.text,
    color: color,
    superLayer: button,
    fontSize: setup.fontSize,
    fontWeight: setup.fontWeight,
    constraints: {
      align: "center"
    }
  });
  switch (setup.buttonType) {
    case "small":
      button.props = {
        width: textLayer.width + m.utils.px(20),
        height: textLayer.height + m.utils.px(10)
      };
      button.on(Events.TouchStart, function() {
        button.animate({
          properties: {
            backgroundColor: color
          },
          time: .5
        });
        return textLayer.animate({
          properties: {
            color: "#FFF"
          },
          time: .5
        });
      });
      button.on(Events.TouchEnd, function() {
        button.animate({
          properties: {
            backgroundColor: "transparent"
          },
          time: .5
        });
        return textLayer.animate({
          properties: {
            color: color
          },
          time: .5
        });
      });
      break;
    default:
      button.props = {
        width: textLayer.width,
        height: textLayer.height
      };
  }
  button.label = textLayer;
  m.layout.set({
    target: button
  });
  m.layout.set({
    target: textLayer
  });
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
  print(setup.target);
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
  bluetooth: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='7px' height='13px' viewBox='0 0 8 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Bluetooth</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Status-Icons-(White)' transform='translate(-137.000000, 0.000000)' fill='#FFF'> <path d='M140.5,14.5 L145,10.25 L141.8,7.5 L145,4.75 L140.5,0.5 L140.5,6.07142857 L137.8,3.75 L137,4.5 L140.258333,7.375 L137,10.25 L137.8,11 L140.5,8.67857143 L140.5,14.5 Z M141.5,3 L143.366667,4.75 L141.5,6.25 L141.5,3 Z M141.5,8.5 L143.366667,10.25 L141.5,12 L141.5,8.5 Z' id='Bluetooth'></path> </g> </svg>",
  batteryHigh: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/100%' transform='translate(-345.000000, -5.000000)' fill='#030303'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.506744,6.5 C346.226877,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.230225,14 346.506744,14 L365.993256,14 C366.273123,14 366.5,13.783628 366.5,13.5079041 L366.5,6.99209595 C366.5,6.72031886 366.269775,6.5 365.993256,6.5 L346.506744,6.5 Z' id='Battery'></path> </g> </g> </svg>",
  batteryMid: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/Low-Power' transform='translate(-345.000000, -5.000000)' fill='#030303'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.50965,6.5 C346.228178,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.227653,14 346.50965,14 L356,14 L356,6.5 L346.50965,6.5 Z' id='Battery'></path> </g> </g> </svg>",
  batteryLow: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/20%' transform='translate(-345.000000, -5.000000)' fill='#030303'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.490479,6.5 C346.219595,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.215057,14 346.490479,14 L350,14 L350,6.5 L346.490479,6.5 Z' id='Battery'></path> </g> </g> </svg>",
  bannerBG: {
    "iphone-5": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='320px' height='68px' viewBox='0 0 320 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>iphone5</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPhone-5/5S/5C' fill='#1A1A1C'> <path d='M0,0 L320,0 L320,68 L0,68 L0,0 Z M142,61.0048815 C142,59.897616 142.896279,59 144.0024,59 L176.9976,59 C178.103495,59 179,59.8938998 179,61.0048815 L179,61.9951185 C179,63.102384 178.103721,64 176.9976,64 L144.0024,64 C142.896505,64 142,63.1061002 142,61.9951185 L142,61.0048815 Z' id='iphone5'></path> </g> </g> </svg>",
    "iphone-6s": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='375px' height='68px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'> <g transform='translate(58.000000, 7.000000)' id='Notification-container'> <g> <path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path> </g> </g> </g> </g> </svg>",
    "iphone-6s-plus": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='414px' height='68px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background Copy</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'> <g transform='translate(43.000000, 74.000000)' id='Notification-container'> <g> <path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path> </g> </g> </g> </g> </svg>",
    "ipad": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='768px' height='68px' viewBox='0 0 768 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Portrait' fill='#1A1A1C'> <path d='M0,0 L768,0 L768,68 L0,68 L0,0 Z M366,61.0048815 C366,59.897616 366.896279,59 368.0024,59 L400.9976,59 C402.103495,59 403,59.8938998 403,61.0048815 L403,61.9951185 C403,63.102384 402.103721,64 400.9976,64 L368.0024,64 C366.896505,64 366,63.1061002 366,61.9951185 L366,61.0048815 Z' id='ipad-portrait'></path> </g> </g> </svg>",
    "ipad-pro": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='1024px' height='68px' viewBox='0 0 1024 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-pro-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Pro-Portrait' fill='#1A1A1C'> <path d='M0,0 L1024,0 L1024,68 L0,68 L0,0 Z M494,61.0048815 C494,59.897616 494.896279,59 496.0024,59 L528.9976,59 C530.103495,59 531,59.8938998 531,61.0048815 L531,61.9951185 C531,63.102384 530.103721,64 528.9976,64 L496.0024,64 C494.896505,64 494,63.1061002 494,61.9951185 L494,61.0048815 Z' id='ipad-pro-portrait'></path> </g> </g> </svg>"
  },
  emojiCodes: ["98 80", "98 AC", "98 81", "98 82", "98 83", "98 84", "98 85", "98 86", "98 87", "98 89", "98 8a", "99 82", "99 83", "E2 98 BA EF B8 8F", "98 8B", "98 8C", "98 8D", "98 98", "98 97", "98 99", "98 9A", "98 9C", "98 9D", "98 9B", "A4 91", "A4 93", "98 8E", "A4 97", "98 8F", "98 B6", "98 90", "98 91", "98 92", "99 84", "A4 94", "98 B3", "98 9E", "98 9F", "98 A0", "98 A1", "98 94", "98 95", "99 81", "E2 98 B9 EF B8 8F", "98 A3", "98 96", "98 AB", "98 A9", "98 A4", "98 AE", "98 B1", "98 A8", "98 B0", "98 AF", "98 A6", "98 A7", "98 A2", "98 A5", "98 AA", "98 93", "98 AD", "98 B5", "98 B2", "A4 90", "98 B7", "A4 92", "A4 95", "98 B4", "92 A4", "92 A9", "98 88", "91 BF", "91 B9", "91 BA", "92 80", "91 BB", "91 BD", "A4 96", "98 BA", "98 B8", "98 B9", "98 BB", "98 BC", "98 BD", "99 80", "98 BF", "98 BE", "99 8C", "91 8F", "91 8B", "91 8D", "91 8E", "91 8A", "E2 9C 8A", "E2 9C 8C EF B8 8F", "91 8C", "E2 9C 8B", "91 90", "92 AA", "99 8F", "E2 98 9D EF B8 8F", "91 86", "91 87", "91 88", "91 89", "96 95", "96 90", "A4 98", "96 96", "E2 9C 8D EF B8 8F", "92 85", "91 84", "91 85", "91 82", "91 83", "91 81", "91 80", "91 A4", "91 A5", "97 A3", "91 B6", "91 A6", "91 A7", "91 A8", "91 A9", "91 B1", "91 B4", "91 B5", "91 B2", "91 B3", "91 AE", "91 B7", "92 82", "95 B5", "8E 85", "91 BC", "91 B8", "91 B0", "9A B6", "8F 83", "92 83", "91 AF", "91 AB", "91 AC", "91 AD", "99 87", "92 81", "99 85", "99 86", "99 8B", "99 8E", "99 8D", "92 87", "92 86", "92 91", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A8", "92 8F", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A8", "91 AA", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 9A", "91 95", "91 96", "91 94", "91 97", "91 99", "91 98", "92 84", "92 8B", "91 A3", "91 A0", "91 A1", "91 A2", "91 9E", "91 9F", "91 92", "8E A9", "E2 9B 91", "8E 93", "91 91", "8E 92", "91 9D", "91 9B", "91 9C", "92 BC", "91 93", "95 B6", "92 8D", "8C 82", "9B 91", "90 B6", "90 B1", "90 AD", "90 B9", "90 B0", "90 BB", "90 BC", "90 A8", "90 AF", "A6 81", "90 AE", "90 B7", "90 BD", "90 B8", "90 99", "90 B5", "99 88", "99 89", "99 8A", "90 92", "90 94", "90 A7", "90 A6", "90 A4", "90 A3", "90 A5", "90 BA", "90 97", "90 B4", "A6 84", "90 9D", "90 9B", "90 8C", "90 9E", "90 9C", "95 B7", "A6 82", "A6 80", "90 8D", "90 A2", "90 A0", "90 9F", "90 A1", "90 AC", "90 B3", "90 8B", "90 8A", "90 86", "90 85", "90 83", "90 82", "90 84", "90 AA", "90 AB", "90 98", "90 90", "90 8F", "90 91", "90 8E", "90 96", "90 80", "90 81", "90 93", "A6 83", "95 8A", "90 95", "90 A9", "90 88", "90 87", "90 BF", "90 BE", "90 89", "90 B2", "8C B5", "8E 84", "8C B2", "8C B3", "8C B4", "8C B1", "8C BF", "E2 98 98", "8D 80", "8E 8D", "8E 8B", "8D 83", "8D 82", "8D 81", "8C BE", "8C BA", "8C BA", "8C BB", "8C B9", "8C B7", "8C BC", "8C B8", "92 90", "8D 84", "8C B0", "8E 83", "90 9A", "95 B8", "8C 8E", "8C 8D", "8C 8F", "8C 95", "8C 96", "8C 97", "8C 98", "8C 91", "8C 92", "8C 93", "8C 94", "8C 9A", "8C 9D", "8C 9B", "8C 9C", "8C 9E", "8C 99", "E2 AD 90 EF B8 8F", "8C 9F", "92 AB", "E2 9C A8", "E2 98 84 EF B8 8F", "E2 98 80 EF B8 8F", "8C A4", "E2 9B 85 EF B8 8F", "8C A5", "8C A6", "E2 98 81 EF B8 8F", "8C A7", "E2 9B 88", "8C A9", "E2 9A A1 EF B8 8F", "94 A5", "92 A5", "E2 9D 84 EF B8 8F", "8C A8", "E2 98 83 EF B8 8F", "E2 9B 84 EF B8 8F", "8C AC", "92 A8", "8C AA", "8C AB", "E2 98 82 EF B8 8F", "E2 98 94 EF B8 8F", "92 A7", "92 A6", "8C 8A", "9B 91", "9B 91", "8D 8F", "8D 8E", "8D 90", "8D 8A", "8D 8B", "8D 8C", "8D 89", "8D 87", "8D 93", "8D 88", "8D 92", "8D 91", "8D 8D", "8D 85", "8D 86", "8C B6", "8C BD", "8D A0", "8D AF", "8D 9E", "A7 80", "8D 97", "8D 96", "8D A4", "8D B3", "8D 94", "8D 9F", "8C AD", "8D 95", "8D 9D", "8C AE", "8C AF", "8D 9C", "8D B2", "8D A5", "8D A3", "8D B1", "8D 9B", "8D 99", "8D 9A", "8D 98", "8D A2", "8D A1", "8D A7", "8D A8", "8D A6", "8D B0", "8E 82", "8D AE", "8D AC", "8D AD", "8D AB", "8D BF", "8D A9", "8D AA", "8D BA", "8D BB", "8D B7", "8D B8", "8D B9", "8D BE", "8D B6", "8D B5", "E2 98 95 EF B8 8F", "8D BC", "8D B4", "8D BD", "9B 91", "9B 91", "9B 91", "E2 9A BD EF B8 8F", "8F 80", "8F 88", "E2 9A BE EF B8 8F", "8E BE", "8F 90", "8F 89", "8E B1", "E2 9B B3 EF B8 8F", "8F 8C", "8F 93", "8F B8", "8F 92", "8F 91", "8F 8F", "8E BF", "E2 9B B7", "8F 82", "E2 9B B8", "8F B9", "8E A3", "9A A3", "8F 8A", "8F 84", "9B 80", "E2 9B B9", "8F 8B", "9A B4", "9A B5", "8F 87", "95 B4", "8F 86", "8E BD", "8F 85", "8E 96", "8E 97", "8F B5", "8E AB", "8E 9F", "8E AD", "8E A8", "8E AA", "8E A4", "8E A7", "8E BC", "8E B9", "8E B7", "8E BA", "8E B8", "8E BB", "8E AC", "8E AE", "91 BE", "8E AF", "8E B2", "8E B0", "8E B3", "9B 91", "9B 91", "9B 91", "9A 97", "9A 95", "9A 99", "9A 8C", "9A 8E", "8F 8E", "9A 93", "9A 91", "9A 92", "9A 90", "9A 9A", "9A 9B", "9A 9C", "8F 8D", "9A B2", "9A A8", "9A 94", "9A 8D", "9A 98", "9A 96", "9A A1", "9A A0", "9A AF", "9A 83", "9A 8B", "9A 9D", "9A 84", "9A 85", "9A 88", "9A 9E", "9A 82", "9A 86", "9A 87", "9A 8A", "9A 89", "9A 81", "9B A9", "E2 9C 88 EF B8 8F", "9B AB", "9B AC", "E2 9B B5 EF B8 8F", "9B A5", "9A A4", "E2 9B B4", "9B B3", "9A 80", "9B B0", "92 BA", "E2 9A 93 EF B8 8F", "9A A7", "E2 9B BD EF B8 8F", "9A 8F", "9A A6", "9A A5", "8F 81", "9A A2", "8E A1", "8E A2", "8E A0", "8F 97", "8C 81", "97 BC", "8F AD", "E2 9B B2 EF B8 8F", "8E 91", "E2 9B B0", "8F 94", "97 BB", "8C 8B", "97 BE", "8F 95", "E2 9B BA EF B8 8F", "8F 9E", "9B A3", "9B A4", "8C 85", "8C 84", "8F 9C", "8F 96", "8F 9D", "8C 87", "8C 86", "8F 99", "8C 83", "8C 89", "8C 8C", "8C A0", "8E 87", "8E 86", "8C 88", "8F 98", "8F B0", "8F AF", "8F 9F", "97 BD", "8F A0", "8F A1", "8F 9A", "8F A2", "8F AC", "8F A3", "8F A4", "8F A5", "8F A6", "8F A8", "8F AA", "8F AB", "8F A9", "92 92", "8F 9B", "E2 9B AA EF B8 8F", "95 8C", "95 8D", "95 8B", "E2 9B A9", "E2 8C 9A EF B8 8F", "93 B1", "93 B2", "92 BB", "E2 8C A8 EF B8 8F", "96 A5", "96 A8", "96 B1", "96 B2", "95 B9", "97 9C", "92 BD", "92 BE", "92 BF", "93 80", "93 BC", "93 B7", "93 B8", "93 B9", "8E A5", "93 BD", "8E 9E", "93 9E", "E2 98 8E EF B8 8F", "93 9F", "93 A0", "93 BA", "93 BB", "8E 99", "8E 9A", "8E 9B", "E2 8F B1", "E2 8F B2", "E2 8F B0", "95 B0", "E2 8F B3", "E2 8C 9B EF B8 8F", "93 A1", "94 8B", "94 8C", "92 A1", "94 A6", "95 AF", "97 91", "9B A2", "92 B8", "92 B5", "92 B4", "92 B6", "92 B7", "92 B0", "92 B3", "92 8E", "E2 9A 96", "94 A7", "94 A8", "E2 9A 92", "9B A0", "E2 9B 8F", "94 A9", "E2 9A 99", "E2 9B 93", "94 AB", "92 A3", "94 AA", "97 A1", "E2 9A 94", "9B A1", "9A AC", "E2 98 A0 EF B8 8F", "E2 9A B0", "E2 9A B1", "8F BA", "94 AE", "93 BF", "92 88", "E2 9A 97", "94 AD", "94 AC", "95 B3", "92 8A", "92 89", "8C A1", "8F B7", "94 96", "9A BD", "9A BF", "9B 81", "94 91", "97 9D", "9B 8B", "9B 8C", "9B 8F", "9A AA", "9B 8E", "96 BC", "97 BA", "E2 9B B1", "97 BF", "9B 8D", "8E 88", "8E 8F", "8E 80", "8E 81", "8E 8A", "8E 89", "8E 8E", "8E 90", "8E 8C", "8F AE", "E2 9C 89 EF B8 8F", "93 A9", "93 A8", "93 A7", "92 8C", "93 AE", "93 AA", "93 AB", "93 AC", "93 AD", "93 A6", "93 AF", "93 A5", "93 A4", "93 9C", "93 83", "93 91", "93 8A", "93 88", "93 89", "93 84", "93 85", "93 86", "97 93", "93 87", "97 83", "97 B3", "97 84", "93 8B", "97 92", "93 81", "93 82", "97 82", "97 9E", "93 B0", "93 93", "93 95", "93 97", "93 98", "93 99", "93 94", "93 92", "93 9A", "93 96", "94 97", "93 8E", "96 87", "E2 9C 82 EF B8 8F", "93 90", "93 8F", "93 8C", "93 8D", "9A A9", "8F B3", "8F B4", "94 90", "94 92", "94 93", "94 8F", "96 8A", "96 8B", "E2 9C 92 EF B8 8F", "93 9D", "E2 9C 8F EF B8 8F", "96 8D", "96 8C", "94 8D", "94 8E", "9B 91", "9B 91", "E2 9D A4 EF B8 8F", "92 9B", "92 9A", "92 99", "92 9C", "92 94", "E2 9D A3 EF B8 8F", "92 95", "92 9E", "92 93", "92 97", "92 96", "92 98", "92 9D", "92 9F", "E2 98 AE EF B8 8F", "E2 9C 9D EF B8 8F", "E2 98 AA EF B8 8F", "95 89", "E2 98 B8 EF B8 8F", "E2 9C A1 EF B8 8F", "94 AF", "95 8E", "E2 98 AF EF B8 8F", "E2 98 A6 EF B8 8F", "9B 90", "E2 9B 8E", "E2 99 88 EF B8 8F", "E2 99 89 EF B8 8F", "E2 99 8A EF B8 8F", "E2 99 8B EF B8 8F", "E2 99 8C EF B8 8F", "E2 99 8D EF B8 8F", "E2 99 8E EF B8 8F", "E2 99 8F EF B8 8F", "E2 99 90 EF B8 8F", "E2 99 91 EF B8 8F", "E2 99 92 EF B8 8F", "E2 99 93 EF B8 8F", "86 94", "E2 9A 9B", "88 B3", "88 B9", "E2 98 A2 EF B8 8F", "E2 98 A3 EF B8 8F", "93 B4", "93 B3", "88 B6", "88 9A EF B8 8F", "88 B8", "88 BA", "88 B7 EF B8 8F", "E2 9C B4 EF B8 8F", "86 9A", "89 91", "92 AE", "89 90", "E3 8A 99 EF B8 8F", "E3 8A 97 EF B8 8F", "88 B4", "88 B5", "88 B2", "85 B0 EF B8 8F", "85 B1 EF B8 8F", "86 8E", "86 91", "85 BE EF B8 8F", "86 98", "E2 9B 94 EF B8 8F", "93 9B", "9A AB", "E2 9D 8C", "E2 AD 95 EF B8 8F", "92 A2", "E2 99 A8 EF B8 8F", "9A B7", "9A AF", "9A B3", "9A B1", "94 9E", "93 B5", "E2 9D 97 EF B8 8F", "E2 9D 95", "E2 9D 93", "E2 9D 94", "E2 80 BC EF B8 8F", "E2 81 89 EF B8 8F", "92 AF", "94 85", "94 86", "94 B1", "E2 9A 9C", "E3 80 BD EF B8 8F", "E2 9A A0 EF B8 8F", "9A B8", "94 B0", "E2 99 BB EF B8 8F", "88 AF EF B8 8F", "92 B9", "E2 9D 87 EF B8 8F", "E2 9C B3 EF B8 8F", "E2 9D 8E", "E2 9C 85", "92 A0", "8C 80", "E2 9E BF", "8C 90", "E2 93 82 EF B8 8F", "8F A7", "88 82 EF B8 8F", "9B 82", "9B 83", "9B 84", "9B 85", "E2 99 BF EF B8 8F", "9A AD", "9A BE", "85 BF EF B8 8F", "9A B0", "9A B9", "9A BA", "9A BC", "9A BB", "9A AE", "8E A6", "93 B6", "88 81", "86 96", "86 97", "86 99", "86 92", "86 95", "86 93", "30 EF B8 8F E2 83 A3", "31 EF B8 8F E2 83 A3", "32 EF B8 8F E2 83 A3", "33 EF B8 8F E2 83 A3", "34 EF B8 8F E2 83 A3", "35 EF B8 8F E2 83 A3", "36 EF B8 8F E2 83 A3", "37 EF B8 8F E2 83 A3", "38 EF B8 8F E2 83 A3", "39 EF B8 8F E2 83 A3", "94 9F", "94 A2", "E2 96 B6 EF B8 8F", "E2 8F B8", "E2 8F AF", "E2 8F B9", "E2 8F BA", "E2 8F AD", "E2 8F AE", "E2 8F A9", "E2 8F AA", "94 80", "94 81", "94 82", "E2 97 80 EF B8 8F", "94 BC", "94 BD", "E2 8F AB", "E2 8F AC", "E2 9E A1 EF B8 8F", "E2 AC 85 EF B8 8F", "E2 AC 86 EF B8 8F", "E2 AC 87 EF B8 8F", "E2 86 97 EF B8 8F", "E2 86 98 EF B8 8F", "E2 86 99 EF B8 8F", "E2 86 96 EF B8 8F", "E2 86 95 EF B8 8F", "E2 86 94 EF B8 8F", "94 84", "E2 86 AA EF B8 8F", "E2 86 A9 EF B8 8F", "E2 A4 B4 EF B8 8F", "E2 A4 B5 EF B8 8F", "23 EF B8 8F E2 83 A3", "2A EF B8 8F E2 83 A3", "E2 84 B9 EF B8 8F", "94 A4", "94 A1", "94 A0", "94 A3", "8E B5", "8E B6", "E3 80 B0 EF B8 8F", "E2 9E B0", "E2 9C 94 EF B8 8F", "94 83", "E2 9E 95", "E2 9E 96", "E2 9E 97", "E2 9C 96 EF B8 8F", "92 B2", "92 B1", "C2 A9 EF B8 8F", "C2 AE EF B8 8F", "E2 84 A2 EF B8 8F", "94 9A", "94 99", "94 9B", "94 9D", "94 9C", "E2 98 91 EF B8 8F", "94 98", "E2 9A AA EF B8 8F", "E2 9A AB EF B8 8F", "94 B4", "94 B5", "94 B8", "94 B9", "94 B6", "94 B7", "94 BA", "E2 96 AA EF B8 8F", "E2 96 AB EF B8 8F", "E2 AC 9B EF B8 8F", "E2 AC 9C EF B8 8F", "94 BB", "E2 97 BC EF B8 8F", "E2 97 BB EF B8 8F", "E2 97 BE EF B8 8F", "E2 97 BD EF B8 8F", "94 B2", "94 B3", "94 88", "94 89", "94 8A", "94 87", "93 A3", "93 A2", "94 94", "94 95", "83 8F", "80 84 EF B8 8F", "E2 99 A0 EF B8 8F", "E2 99 A3 EF B8 8F", "E2 99 A5 EF B8 8F", "E2 99 A6 EF B8 8F", "8E B4", "91 81 E2 80 8D F0 9F 97 A8", "92 AD", "97 AF", "92 AC", "95 90", "95 91", "95 92", "95 93", "95 94", "95 95", "95 96", "95 97", "95 98", "95 99", "95 9A", "95 9B", "95 9C", "95 9D", "95 9E", "95 9F", "95 A0", "95 A1", "95 A2", "95 A3", "95 A4", "95 A5", "95 A6", "95 A7", "9B 91", "87 A6 F0 9F 87 AB", "87 A6 F0 9F 87 BD", "87 A6 F0 9F 87 B1", "87 A9 F0 9F 87 BF", "87 A6 F0 9F 87 B8", "87 A6 F0 9F 87 A9", "87 A6 F0 9F 87 B4", "87 A6 F0 9F 87 AE", "87 A6 F0 9F 87 B6", "87 A6 F0 9F 87 AC", "87 A6 F0 9F 87 B7", "87 A6 F0 9F 87 B2", "87 A6 F0 9F 87 BC", "87 A6 F0 9F 87 BA", "87 A6 F0 9F 87 B9", "87 A6 F0 9F 87 BF", "87 A7 F0 9F 87 B8", "87 A7 F0 9F 87 AD", "87 A7 F0 9F 87 A9", "87 A7 F0 9F 87 A7", "87 A7 F0 9F 87 BE", "87 A7 F0 9F 87 AA", "87 A7 F0 9F 87 BF", "87 A7 F0 9F 87 AF", "87 A7 F0 9F 87 B2", "87 A7 F0 9F 87 B9", "87 A7 F0 9F 87 B4", "87 A7 F0 9F 87 B6", "87 A7 F0 9F 87 A6", "87 A7 F0 9F 87 BC", "87 A7 F0 9F 87 B7", "87 AE F0 9F 87 B4", "87 BB F0 9F 87 AC", "87 A7 F0 9F 87 B3", "87 A7 F0 9F 87 AC", "87 A7 F0 9F 87 AB", "87 A7 F0 9F 87 AE", "87 A8 F0 9F 87 BB", "87 B0 F0 9F 87 AD", "87 A8 F0 9F 87 B2", "87 A8 F0 9F 87 A6", "87 AE F0 9F 87 A8", "87 B0 F0 9F 87 BE", "87 A8 F0 9F 87 AB", "87 B9 F0 9F 87 A9", "87 A8 F0 9F 87 B1", "87 A8 F0 9F 87 B3", "87 A8 F0 9F 87 BD", "87 A8 F0 9F 87 A8", "87 A8 F0 9F 87 B4", "87 B0 F0 9F 87 B2", "87 A8 F0 9F 87 AC", "87 A8 F0 9F 87 A9", "87 A8 F0 9F 87 B0", "87 A8 F0 9F 87 B7", "87 AD F0 9F 87 B7", "87 A8 F0 9F 87 BA", "87 A8 F0 9F 87 BC", "87 A8 F0 9F 87 BE", "87 A8 F0 9F 87 BF", "87 A9 F0 9F 87 B0", "87 A9 F0 9F 87 AF", "87 A9 F0 9F 87 B2", "87 A9 F0 9F 87 B4", "87 AA F0 9F 87 A8", "87 AA F0 9F 87 AC", "87 B8 F0 9F 87 BB", "87 AC F0 9F 87 B6", "87 AA F0 9F 87 B7", "87 AA F0 9F 87 AA", "87 AA F0 9F 87 B9", "87 AA F0 9F 87 BA", "87 AB F0 9F 87 B0", "87 AB F0 9F 87 B4", "87 AB F0 9F 87 AF", "87 AB F0 9F 87 AE", "87 AB F0 9F 87 B7", "87 AC F0 9F 87 AB", "87 B5 F0 9F 87 AB", "87 B9 F0 9F 87 AB", "87 AC F0 9F 87 A6", "87 AC F0 9F 87 B2", "87 AC F0 9F 87 AA", "87 A9 F0 9F 87 AA", "87 AC F0 9F 87 AD", "87 AC F0 9F 87 AE", "87 AC F0 9F 87 B7", "87 AC F0 9F 87 B1", "87 AC F0 9F 87 A9", "87 AC F0 9F 87 B5", "87 AC F0 9F 87 BA", "87 AC F0 9F 87 B9", "87 AC F0 9F 87 AC", "87 AC F0 9F 87 B3", "87 AC F0 9F 87 BC", "87 AC F0 9F 87 BE", "87 AD F0 9F 87 B9", "87 AD F0 9F 87 B3", "87 AD F0 9F 87 B0", "87 AD F0 9F 87 BA", "87 AE F0 9F 87 B8", "87 AE F0 9F 87 B3", "87 AE F0 9F 87 A9", "87 AE F0 9F 87 B7", "87 AE F0 9F 87 B6", "87 AE F0 9F 87 AA", "87 AE F0 9F 87 B2", "87 AE F0 9F 87 B1", "87 AE F0 9F 87 B9", "87 A8 F0 9F 87 AE", "87 AF F0 9F 87 B2", "87 AF F0 9F 87 B5", "87 AF F0 9F 87 AA", "87 AF F0 9F 87 B4", "87 B0 F0 9F 87 BF", "87 B0 F0 9F 87 AA", "87 B0 F0 9F 87 AE", "87 BD F0 9F 87 B0", "87 B0 F0 9F 87 BC", "87 B0 F0 9F 87 AC", "87 B1 F0 9F 87 A6", "87 B1 F0 9F 87 BB", "87 B1 F0 9F 87 A7", "87 B1 F0 9F 87 B8", "87 B1 F0 9F 87 B7", "87 B1 F0 9F 87 BE", "87 B1 F0 9F 87 AE", "87 B1 F0 9F 87 B9", "87 B1 F0 9F 87 BA", "87 B2 F0 9F 87 B4", "87 B2 F0 9F 87 B0", "87 B2 F0 9F 87 AC", "87 B2 F0 9F 87 BC", "87 B2 F0 9F 87 BE", "87 B2 F0 9F 87 BB", "87 B2 F0 9F 87 B1", "87 B2 F0 9F 87 B9", "87 B2 F0 9F 87 AD", "87 B2 F0 9F 87 B6", "87 B2 F0 9F 87 B7", "87 B2 F0 9F 87 BA", "87 BE F0 9F 87 B9", "87 B2 F0 9F 87 BD", "87 AB F0 9F 87 B2", "87 B2 F0 9F 87 A9", "87 B2 F0 9F 87 A8", "87 B2 F0 9F 87 B3", "87 B2 F0 9F 87 AA", "87 B2 F0 9F 87 B8", "87 B2 F0 9F 87 A6", "87 B2 F0 9F 87 BF", "87 B2 F0 9F 87 B2", "87 B3 F0 9F 87 A6", "87 B3 F0 9F 87 B7", "87 B3 F0 9F 87 B5", "87 B3 F0 9F 87 B1", "87 B3 F0 9F 87 A8", "87 B3 F0 9F 87 BF", "87 B3 F0 9F 87 AE", "87 B3 F0 9F 87 AA", "87 B3 F0 9F 87 AC", "87 B3 F0 9F 87 BA", "87 B3 F0 9F 87 AB", "87 B2 F0 9F 87 B5", "87 B0 F0 9F 87 B5", "87 B3 F0 9F 87 B4", "87 B4 F0 9F 87 B2", "87 B5 F0 9F 87 B0", "87 B5 F0 9F 87 BC", "87 B5 F0 9F 87 B8", "87 B5 F0 9F 87 A6", "87 B5 F0 9F 87 AC", "87 B5 F0 9F 87 BE", "87 B5 F0 9F 87 AA", "87 B5 F0 9F 87 AD", "87 B5 F0 9F 87 B3", "87 B5 F0 9F 87 B1", "87 B5 F0 9F 87 B9", "87 B5 F0 9F 87 B7", "87 B6 F0 9F 87 A6", "87 B7 F0 9F 87 AA", "87 B7 F0 9F 87 B4", "87 B7 F0 9F 87 BA", "87 B7 F0 9F 87 BC", "87 A7 F0 9F 87 B1", "87 B8 F0 9F 87 AD", "87 B0 F0 9F 87 B3", "87 B1 F0 9F 87 A8", "87 B5 F0 9F 87 B2", "87 BB F0 9F 87 A8", "87 BC F0 9F 87 B8", "87 B8 F0 9F 87 B2", "87 B8 F0 9F 87 B9", "87 B8 F0 9F 87 A6", "87 B8 F0 9F 87 B3", "87 B7 F0 9F 87 B8", "87 B8 F0 9F 87 A8", "87 B8 F0 9F 87 B1", "87 B8 F0 9F 87 AC", "87 B8 F0 9F 87 BD", "87 B8 F0 9F 87 B0", "87 B8 F0 9F 87 AE", "87 B8 F0 9F 87 A7", "87 B8 F0 9F 87 B4", "87 BF F0 9F 87 A6", "87 AC F0 9F 87 B8", "87 B0 F0 9F 87 B7", "87 B8 F0 9F 87 B8", "87 AA F0 9F 87 B8", "87 B1 F0 9F 87 B0", "87 B8 F0 9F 87 A9", "87 B8 F0 9F 87 B7", "87 B8 F0 9F 87 BF", "87 B8 F0 9F 87 AA", "87 A8 F0 9F 87 AD", "87 B8 F0 9F 87 BE", "87 B9 F0 9F 87 BC", "87 B9 F0 9F 87 AF", "87 B9 F0 9F 87 BF", "87 B9 F0 9F 87 AD", "87 B9 F0 9F 87 B1", "87 B9 F0 9F 87 AC", "87 B9 F0 9F 87 B0", "87 B9 F0 9F 87 B4", "87 B9 F0 9F 87 B9", "87 B9 F0 9F 87 B3", "87 B9 F0 9F 87 B7", "87 B9 F0 9F 87 B2", "87 B9 F0 9F 87 A8", "87 B9 F0 9F 87 BB", "87 BA F0 9F 87 AC", "87 BA F0 9F 87 A6", "87 A6 F0 9F 87 AA", "87 AC F0 9F 87 A7", "87 BA F0 9F 87 B8", "87 BB F0 9F 87 AE", "87 BA F0 9F 87 BE", "87 BA F0 9F 87 BF", "87 BB F0 9F 87 BA", "87 BB F0 9F 87 A6", "87 BB F0 9F 87 AA", "87 BB F0 9F 87 B3", "87 BC F0 9F 87 AB", "87 AA F0 9F 87 AD", "87 BE F0 9F 87 AA", "87 BF F0 9F 87 B2", "87 BF F0 9F 87 BC"],
  network: "<svg width='14px' height='10px' viewBox='87 5 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs></defs> <path d='M96.1444208,12.4385043 C95.626374,11.8454456 94.8523616,11.4689119 93.987563,11.4689119 C93.1390073,11.4689119 92.3778594,11.8314341 91.8601652,12.4053177 L94.0225391,14.5 L96.1444208,12.4385043 Z M98.3234964,10.3214425 C97.2447794,9.19174563 95.7014387,8.48445596 93.987563,8.48445596 C92.2882723,8.48445596 90.7566264,9.17975893 89.6792698,10.2926936 L90.7692987,11.3486 C91.567205,10.5053708 92.713648,9.97668394 93.987563,9.97668394 C95.2768836,9.97668394 96.4356305,10.518235 97.2346215,11.3793293 L98.3234964,10.3214425 L98.3234964,10.3214425 Z M100.5,8.20687933 C98.8629578,6.53943672 96.5505699,5.5 93.987563,5.5 C91.4375103,5.5 89.1355496,6.52895605 87.5,8.18164431 L88.5895579,9.23709441 C89.9460798,7.85431655 91.8628921,6.99222798 93.987563,6.99222798 C96.1260026,6.99222798 98.0538809,7.86552609 99.4118698,9.26404272 L100.5,8.20687933 Z' id='Wi-Fi' stroke='none' fill='#030303' fill-rule='evenodd'></path> </svg>",
  activity: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Soccer Ball</title> <desc>Created with Sketch.</desc> <defs> <circle id='path-1' cx='8' cy='8' r='8'></circle> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-179.000000, -639.000000)'> <g id='Soccer-Ball' sketch:type='MSLayerGroup' transform='translate(179.000000, 639.000000)'> <mask id='mask-2' sketch:name='Mask' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='Mask' stroke='#4A5361' sketch:type='MSShapeGroup' xlink:href='#path-1'></use> <path d='M6,12.1203046 L12.8573384,8 L13.3723765,8.8571673 L6.51503807,12.9774719 L6,12.1203046 L6,12.1203046 Z' id='Rectangle-47' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.849648,8.7260551 L19.1001103,5.34510901 L19.5227285,6.2514168 L12.2722662,9.63236289 L11.849648,8.7260551 L11.849648,8.7260551 Z' id='Rectangle-47-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M6,3.1203046 L12.8573384,-1 L13.3723765,-0.142832699 L6.51503807,3.9774719 L6,3.1203046 L6,3.1203046 Z' id='Rectangle-47-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M-1,7.1203046 L5.85733841,3 L6.37237648,3.8571673 L-0.484961925,7.9774719 L-1,7.1203046 L-1,7.1203046 Z' id='Rectangle-47-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <rect id='Rectangle-50' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='4' y='6' width='1' height='5'></rect> <rect id='Rectangle-51' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='11.5' y='3' width='1' height='12'></rect> <path d='M5,4.8571673 L11.8573384,8.9774719 L12.3723765,8.1203046 L5.51503807,4 L5,4.8571673' id='Rectangle-47-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M5,12.8571673 L11.8573384,16.9774719 L12.3723765,16.1203046 L5.51503807,12 L5,12.8571673' id='Rectangle-47-Copy-5' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1' fill='#D8D8D8' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,3.19504739 L7.35514484,6.13218333 L4.5300676,6.9422612 L2.88664089,4.5057809 L4.69602457,2.18987541 L7.45771189,3.19504739' id='Polygon-1-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,11.1950474 L7.35514484,14.1321833 L4.5300676,14.9422612 L2.88664089,12.5057809 L4.69602457,10.1898754 L7.45771189,11.1950474' id='Polygon-1-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M14.5431701,0.0725939314 L14.4406031,3.00972988 L11.6155258,3.81980774 L9.97209912,1.38332745 L11.7814828,-0.93257805 L14.5431701,0.0725939314' id='Polygon-1-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> </g> </g> </g> </svg>",
  animals: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Group</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-117.000000, -639.000000)' stroke='#4A5361'> <g id='ic_Food' sketch:type='MSLayerGroup' transform='translate(118.000000, 640.000000)'> <g id='Group' sketch:type='MSShapeGroup'> <path d='M5.68377537,1.38156646 C6.23926066,1.13624 6.85372005,1 7.5,1 C8.14627995,1 8.76073934,1.13624 9.31622463,1.38156646 C9.80879275,0.562359019 10.8255888,0 12,0 C13.6568542,0 15,1.11928813 15,2.5 C15,3.5571398 14.2126246,4.46102843 13.0999226,4.82662514 C14.2496528,5.64185422 15,6.98330062 15,8.5 C15,10.7167144 13.3971873,12.5590719 11.2872671,12.9313673 C10.4867248,14.1757703 9.08961696,15 7.5,15 C5.91038304,15 4.51327524,14.1757703 3.71273291,12.9313673 C1.60281268,12.5590719 0,10.7167144 0,8.5 C0,6.98330062 0.750347244,5.64185422 1.90007741,4.82662514 C0.787375445,4.46102843 0,3.5571398 0,2.5 C0,1.11928813 1.34314575,0 3,0 C4.17441122,0 5.19120725,0.562359019 5.68377537,1.38156646 Z' id='Oval-8'></path> <path d='M5.73834228,12 C5.86290979,12 6.14642353,12 6.14642353,12 C6.14642353,12 6.43215696,12.4426123 6.5246582,12.4919739 C6.66455601,12.5666277 7,12.4919739 7,12.4919739 L7,12 L8,12 L8,12.4919739 L8.49799228,12.4919739 L8.84301769,12 L9.3918457,12 C9.3918457,12 8.99598457,12.9839478 8.49799228,12.9839478 L6.60702407,12.9839478 C6.21404813,12.9839478 5.45996094,12 5.73834228,12 Z' id='Rectangle-44-Copy-2'></path> <circle id='Oval-14' cx='10.5' cy='7.5' r='0.5'></circle> <circle id='Oval-14-Copy' cx='4.5' cy='7.5' r='0.5'></circle> <path d='M12.6999969,5 C12.6999969,3.06700338 11.1329936,1.5 9.19999695,1.5' id='Oval-16'></path> <path d='M5.5,5 C5.5,3.06700338 3.93299662,1.5 2,1.5' id='Oval-16-Copy' transform='translate(3.750000, 3.250000) scale(-1, 1) translate(-3.750000, -3.250000) '></path> <rect id='Rectangle-44-Copy' x='7' y='11' width='1' height='1'></rect> <path d='M6,10 L6.5,10 L6.49999999,9.5 L8.50000005,9.5 L8.50000005,10 L9,10 L9,10.5 L8.5,10.5 L8.5,11 L6.5,11 L6.5,10.5 L6,10.5 L6,10 Z' id='Path'></path> </g> </g> </g> </g> </svg>",
  chevron: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='13px' height='22px' viewBox='0 0 13 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Back Chevron</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Navigation-Bar/Back' transform='translate(-8.000000, -31.000000)' fill='#0076FF'> <path d='M8.5,42 L19,31.5 L21,33.5 L12.5,42 L21,50.5 L19,52.5 L8.5,42 Z' id='Back-Chevron'></path> </g> </g> </svg>",
  emojis: ["😀", "😬", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😉", "😊", "🙂", "🙃", "☺️", "😋", "😌", "😍", "😘", "😗", "😙", "😚", "😜", "😝", "😛", "🤑", "🤓", "😎", "🤗", "😏", "😶", "😐", "😑", "😒", "🙄", "🤔", "😳", "😞", "😟", "😠", "😡", "😔", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "😤", "😮", "😱", "😨", "😰", "😯", "😦", "😧", "😢", "😥", "😪", "😓", "😭", "😵", "😲", "🤐", "😷", "🤒", "🤕", "😴", "💤", "💩", "😈", "👿", "👹", "👺", "💀", "👻", "👽", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙌", "👏", "👋", "👍", "👎", "👊", "✊", "✌️", "👌", "✋", "👐", "💪", "🙏", "☝️", "👆", "👇", "👈", "👉", "🖕", "🖐", "🤘", "🖖", "✍️", "💅", "👄", "👅", "👂", "👃", "👁", "👀", "👤", "👥", "🗣", "👶", "👦", "👧", "👨", "👩", "👱", "👴", "👵", "👲", "👳", "👮", "👷", "💂", "🕵", "🎅", "👼", "👸", "👰", "🚶", "🏃", "💃", "👯", "👫", "👬", "👭", "🙇", "💁", "🙅", "🙆", "🙋", "🙎", "🙍", "💇", "💆", "💑", "👩‍❤️‍👩", "👨‍❤️‍👨", "💏", "👩‍❤️‍💋‍👩", "👨‍❤️‍💋‍👨", "👪", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👚", "👕", "👖", "👔", "👗", "👙", "👘", "💄", "💋", "👣", "👠", "👡", "👢", "👞", "👟", "👒", "🎩", "⛑", "🎓", "👑", "🎒", "👝", "👛", "👜", "💼", "👓", "🕶", "💍", "🌂", "🛑", "🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🐌", "🐞", "🐜", "🕷", "🦂", "🦀", "🐍", "🐢", "🐠", "🐟", "🐡", "🐬", "🐳", "🐋", "🐊", "🐆", "🐅", "🐃", "🐂", "🐄", "🐪", "🐫", "🐘", "🐐", "🐏", "🐑", "🐎", "🐖", "🐀", "🐁", "🐓", "🦃", "🕊", "🐕", "🐩", "🐈", "🐇", "🐿", "🐾", "🐉", "🐲", "🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "☘", "🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🌾", "🌺", "🌺", "🌻", "🌹", "🌷", "🌼", "🌸", "💐", "🍄", "🌰", "🎃", "🐚", "🕸", "🌎", "🌍", "🌏", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌚", "🌝", "🌛", "🌜", "🌞", "🌙", "⭐️", "🌟", "💫", "✨", "☄️", "☀️", "🌤", "⛅️", "🌥", "🌦", "☁️", "🌧", "⛈", "🌩", "⚡️", "🔥", "💥", "❄️", "🌨", "☃️", "⛄️", "🌬", "💨", "🌪", "🌫", "☂️", "☔️", "💧", "💦", "🌊", "🛑", "🛑", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍅", "🍆", "🌶", "🌽", "🍠", "🍯", "🍞", "🧀", "🍗", "🍖", "🍤", "🍳", "🍔", "🍟", "🌭", "🍕", "🍝", "🌮", "🌯", "🍜", "🍲", "🍥", "🍣", "🍱", "🍛", "🍙", "🍚", "🍘", "🍢", "🍡", "🍧", "🍨", "🍦", "🍰", "🎂", "🍮", "🍬", "🍭", "🍫", "🍿", "🍩", "🍪", "🍺", "🍻", "🍷", "🍸", "🍹", "🍾", "🍶", "🍵", "☕️", "🍼", "🍴", "🍽", "🛑", "🛑", "🛑", "⚽️", "🏀", "🏈", "⚾️", "🎾", "🏐", "🏉", "🎱", "⛳️", "🏌", "🏓", "🏸", "🏒", "🏑", "🏏", "🎿", "⛷", "🏂", "⛸", "🏹", "🎣", "🚣", "🏊", "🏄", "🛀", "⛹", "🏋", "🚴", "🚵", "🏇", "🕴", "🏆", "🎽", "🏅", "🎖", "🎗", "🏵", "🎫", "🎟", "🎭", "🎨", "🎪", "🎤", "🎧", "🎼", "🎹", "🎷", "🎺", "🎸", "🎻", "🎬", "🎮", "👾", "🎯", "🎲", "🎰", "🎳", "🛑", "🛑", "🛑", "🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🏍", "🚲", "🚨", "🚔", "🚍", "🚘", "🚖", "🚡", "🚠", "🚯", "🚃", "🚋", "🚝", "🚄", "🚅", "🚈", "🚞", "🚂", "🚆", "🚇", "🚊", "🚉", "🚁", "🛩", "✈️", "🛫", "🛬", "⛵️", "🛥", "🚤", "⛴", "🛳", "🚀", "🛰", "💺", "⚓️", "🚧", "⛽️", "🚏", "🚦", "🚥", "🏁", "🚢", "🎡", "🎢", "🎠", "🏗", "🌁", "🗼", "🏭", "⛲️", "🎑", "⛰", "🏔", "🗻", "🌋", "🗾", "🏕", "⛺️", "🏞", "🛣", "🛤", "🌅", "🌄", "🏜", "🏖", "🏝", "🌇", "🌆", "🏙", "🌃", "🌉", "🌌", "🌠", "🎇", "🎆", "🌈", "🏘", "🏰", "🏯", "🏟", "🗽", "🏠", "🏡", "🏚", "🏢", "🏬", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏩", "💒", "🏛", "⛪️", "🕌", "🕍", "🕋", "⛩", "⌚️", "📱", "📲", "💻", "⌨️", "🖥", "🖨", "🖱", "🖲", "🕹", "🗜", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽", "🎞", "📞", "☎️", "📟", "📠", "📺", "📻", "🎙", "🎚", "🎛", "⏱", "⏲", "⏰", "🕰", "⏳", "⌛️", "📡", "🔋", "🔌", "💡", "🔦", "🕯", "🗑", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎", "⚖", "🔧", "🔨", "⚒", "🛠", "⛏", "🔩", "⚙", "⛓", "🔫", "💣", "🔪", "🗡", "⚔", "🛡", "🚬", "☠️", "⚰", "⚱", "🏺", "🔮", "📿", "💈", "⚗", "🔭", "🔬", "🕳", "💊", "💉", "🌡", "🏷", "🔖", "🚽", "🚿", "🛁", "🔑", "🗝", "🛋", "🛌", "🛏", "🚪", "🛎", "🖼", "🗺", "⛱", "🗿", "🛍", "🎈", "🎏", "🎀", "🎁", "🎊", "🎉", "🎎", "🎐", "🎌", "🏮", "✉️", "📩", "📨", "📧", "💌", "📮", "📪", "📫", "📬", "📭", "📦", "📯", "📥", "📤", "📜", "📃", "📑", "📊", "📈", "📉", "📄", "📅", "📆", "🗓", "📇", "🗃", "🗳", "🗄", "📋", "🗒", "📁", "📂", "🗂", "🗞", "📰", "📓", "📕", "📗", "📘", "📙", "📔", "📒", "📚", "📖", "🔗", "📎", "🖇", "✂️", "📐", "📏", "📌", "📍", "🚩", "🏳", "🏴", "🔐", "🔒", "🔓", "🔏", "🖊", "🖋", "✒️", "📝", "✏️", "🖍", "🖌", "🔍", "🔎", "🛑", "🛑", "❤️", "💛", "💚", "💙", "💜", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️", "☪️", "🕉", "☸️", "✡️", "🔯", "🕎", "☯️", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🆔", "⚛", "🈳", "🈹", "☢️", "☣️", "📴", "📳", "🈶", "🈚️", "🈸", "🈺", "🈷️", "✴️", "🆚", "🉑", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈲", "🅰️", "🅱️", "🆎", "🆑", "🅾️", "🆘", "⛔️", "📛", "🚫", "❌", "⭕️", "💢", "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "❗️", "❕", "❓", "❔", "‼️", "⁉️", "💯", "🔅", "🔆", "🔱", "⚜", "〽️", "⚠️", "🚸", "🔰", "♻️", "🈯️", "💹", "❇️", "✳️", "❎", "✅", "💠", "🌀", "➿", "🌐", "Ⓜ️", "🏧", "🈂️", "🛂", "🛃", "🛄", "🛅", "♿️", "🚭", "🚾", "🅿️", "🚰", "🚹", "🚺", "🚼", "🚻", "🚮", "🎦", "📶", "🈁", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "🔢", "▶️", "⏸", "⏯", "⏹", "⏺", "⏭", "⏮", "⏩", "⏪", "🔀", "🔁", "🔂", "◀️", "🔼", "🔽", "⏫", "⏬", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️", "🔄", "↪️", "↩️", "⤴️", "⤵️", "#️⃣", "*️⃣", "ℹ️", "🔤", "🔡", "🔠", "🔣", "🎵", "🎶", "〰️", "➰", "✔️", "🔃", "➕", "➖", "➗", "✖️", "💲", "💱", "©️", "®️", "™️", "🔚", "🔙", "🔛", "🔝", "🔜", "☑️", "🔘", "⚪️", "⚫️", "🔴", "🔵", "🔸", "🔹", "🔶", "🔷", "🔺", "▪️", "▫️", "⬛️", "⬜️", "🔻", "◼️", "◻️", "◾️", "◽️", "🔲", "🔳", "🔈", "🔉", "🔊", "🔇", "📣", "📢", "🔔", "🔕", "🃏", "🀄️", "♠️", "♣️", "♥️", "♦️", "🎴", "👁‍🗨", "💭", "🗯", "💬", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧", "🛑", "🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇶", "🇧🇦", "🇧🇼", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇨🇻", "🇰🇭", "🇨🇲", "🇨🇦", "🇮🇨", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇰", "🇨🇷", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇪🇺", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇱", "🇮🇹", "🇨🇮", "🇯🇲", "🇯🇵", "🇯🇪", "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇲🇪", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇲🇵", "🇰🇵", "🇳🇴", "🇴🇲", "🇵🇰", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇳", "🇵🇱", "🇵🇹", "🇵🇷", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇺", "🇷🇼", "🇧🇱", "🇸🇭", "🇰🇳", "🇱🇨", "🇵🇲", "🇻🇨", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇸🇧", "🇸🇴", "🇿🇦", "🇬🇸", "🇰🇷", "🇸🇸", "🇪🇸", "🇱🇰", "🇸🇩", "🇸🇷", "🇸🇿", "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇼", "🇹🇯", "🇹🇿", "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇰", "🇹🇴", "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🇺🇸", "🇻🇮", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"],
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

exports.frames = {
  "fullscreen": {
    height: window.innerHeight,
    width: window.innerWidth,
    scale: 1,
    mobile: false,
    platform: "web"
  },
  "apple-iphone-5s-space-gray": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5s-silver": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5s-gold": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-green": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-blue": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-red": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-white": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-yellow": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-pink": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-space-gray": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-silver": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-gold": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-rose-gold": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus-gold": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus-silver": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus-space-gray": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus-rose-gold": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-air-2-gold": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-air-2-silver": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-air-2-space-gray": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-mini-4-gold": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-mini-4-space-gray": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-mini-4-silver": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-pro-gold": {
    height: 2732,
    width: 2048,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-pro-silver": {
    height: 2732,
    width: 2048,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-pro-space-gray": {
    height: 2732,
    width: 2048,
    scale: 2,
    mobile: true,
    platform: "iOS"
  }
};


},{"material-kit":"material-kit"}],"material-kit-nav-bar":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  title: "Title",
  left: void 0,
  right: "Edit",
  blur: true,
  superLayer: void 0,
  type: "navBar"
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var bar, barArea, divider, i, layer, len, ref, setLeading, setup, svg, title;
  setup = m.utils.setupComponent(array, exports.defaults);
  bar = new Layer({
    name: "navbar"
  });
  bar.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 64
  };
  barArea = new Layer({
    superLayer: bar,
    backgroundColor: "transparent"
  });
  barArea.constraints = {
    leading: 0,
    trailing: 0,
    height: 44,
    bottom: 0
  };
  divider = new Layer({
    backgroundColor: "#B2B2B2",
    name: "nav divider",
    superLayer: barArea
  });
  divider.constraints = {
    height: .5,
    bottom: 0,
    leading: 0,
    trailing: 0
  };
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(bar);
  }
  if (setup.blur) {
    bar.backgroundColor = "rgba(255, 255, 255, .8)";
    m.utils.bgBlur(bar);
  } else {
    bar.backgroundColor = "rgba(255, 255, 255, 1)";
    m.utils.bgBlur(bar);
  }
  m.layout.set([bar, barArea, divider]);
  bar.type = setup.type;
  ref = Framer.CurrentContext.layers;
  for (i = 0, len = ref.length; i < len; i++) {
    layer = ref[i];
    if (layer.type === "statusBar") {
      this.statusBar = layer;
      bar.placeBehind(this.statusBar);
    }
  }
  if (typeof setup.title === "string") {
    title = new m.Text({
      style: "navBarTitle",
      fontWeight: "semibold",
      superLayer: barArea,
      text: setup.title
    });
  }
  if (typeof setup.title === "object") {
    title = new m.Text({
      style: "navBarTitle",
      fontWeight: "semibold",
      superLayer: barArea,
      text: setup.title.label.html
    });
    bar.superLayer = setup.title.view;
  }
  m.utils.specialChar(title);
  title.constraints = {
    align: "horizontal",
    bottom: 12
  };
  if (typeof setup.right === "string" && typeof setup.right !== "boolean") {
    bar.right = new m.Button({
      superLayer: barArea,
      text: setup.right,
      fontWeight: 500,
      constraints: {
        bottom: 12,
        trailing: 8
      }
    });
    bar.right.type = "button";
    m.utils.specialChar(bar.right);
  }
  if (typeof setup.right === "object") {
    bar.right = setup.right;
    bar.right.superLayer = barArea;
    bar.right.constraints = {
      trailing: 8,
      bottom: 12
    };
  }
  m.layout.set(bar.right);
  if (typeof setup.left === "string" && typeof setup.left !== "boolean") {
    setLeading = 8;
    if (setup.left.indexOf("<") !== -1) {
      svg = m.utils.svg(m.assets.chevron);
      bar.chevron = new Layer({
        name: "chevron",
        width: svg.width,
        height: svg.height,
        backgroundColor: "transparent",
        superLayer: barArea
      });
      bar.chevron.html = svg.svg;
      bar.chevron.constraints = {
        bottom: 9,
        leading: 8
      };
      setup.left = setup.left.replace("<", "");
      setLeading = [bar.chevron, 4];
      m.layout.set(bar.chevron);
    }
    bar.left = new m.Button({
      name: "left",
      superLayer: barArea,
      text: setup.left,
      fontWeight: 500,
      constraints: {
        bottom: 12,
        leading: setLeading
      }
    });
    bar.left.on(Events.TouchStart, function() {
      if (bar.chevron) {
        return bar.chevron.animate({
          properties: {
            opacity: .25
          },
          time: .5
        });
      }
    });
    bar.left.on(Events.TouchEnd, function() {
      if (bar.chevron) {
        return bar.chevron.animate({
          properties: {
            opacity: 1
          },
          time: .5
        });
      }
    });
  }
  if (typeof setup.left === "object") {
    bar.left = setup.left;
    bar.left.superLayer = barArea;
    bar.left.constraints = {
      leading: 8,
      bottom: 12
    };
  }
  m.layout.set(bar.left);
  return bar;
};


},{"material-kit":"material-kit"}],"material-kit-sheet":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  actions: ["OK"],
  exit: "Cancel",
  animated: false,
  description: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var act, actions, acts, button, description, descriptionBuffer, divider, exitButton, i, index, len, o, overlay, ref, setup, sheet, sheets;
  setup = m.utils.setupComponent(array, exports.defaults);
  sheet = new Layer({
    backgroundColor: "transparent"
  });
  sheet.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  m.layout.set(sheet);
  overlay = new Layer({
    backgroundColor: "rgba(0, 0, 0, .4)",
    superLayer: sheet,
    name: "overlay"
  });
  overlay.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  m.layout.set(overlay);
  sheets = new Layer({
    backgroundColor: "transparent",
    superLayer: sheet
  });
  sheets.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  m.layout.set(sheets);
  exitButton = new m.Button({
    buttonType: "big",
    text: setup.exit,
    blur: false,
    superLayer: sheets
  });
  exitButton.constraints.bottom = 10;
  m.layout.set(exitButton);
  actions = new Layer({
    superLayer: sheets,
    borderRadius: m.utils.px(12.5),
    backgroundColor: "rgba(255,255,255, .85)"
  });
  m.utils.bgBlur(actions);
  descriptionBuffer = 0;
  if (setup.description) {
    description = new m.Text({
      style: "sheetDescription",
      text: setup.description,
      superLayer: actions,
      fontSize: 13,
      color: "#8F8E94",
      textAlign: "center"
    });
    description.constraints = {
      top: 21,
      align: "horizontal",
      width: m.utils.pt(m.device.width) - 100
    };
    m.layout.set();
    descriptionBuffer = m.utils.pt(description.height) + 42;
    divider = new Layer({
      superLayer: actions,
      backgroundColor: "#D6E3E7"
    });
    divider.constraints = {
      height: 1,
      top: descriptionBuffer,
      leading: 0,
      trailing: 0
    };
    m.layout.set([description, divider]);
  }
  actions.constraints = {
    leading: 10,
    trailing: 10,
    bottom: [exitButton, 10],
    height: 58 * setup.actions.length + descriptionBuffer
  };
  m.layout.set(actions);
  acts = {};
  ref = setup.actions;
  for (index = i = 0, len = ref.length; i < len; index = ++i) {
    act = ref[index];
    o = new Layer({
      superLayer: actions,
      width: actions.width,
      backgroundColor: "transparent",
      borderRadius: m.utils.px(12.5)
    });
    o.constraints = {
      top: index * 58 + descriptionBuffer,
      height: 58
    };
    button = new m.Button({
      text: act,
      superLayer: o,
      fontSize: 20
    });
    m.utils.specialChar(button);
    button.constraints = {
      align: "center"
    };
    button.color = "#FE3824";
    if (index !== setup.actions.length - 1) {
      divider = new Layer({
        superLayer: o,
        width: actions.width,
        backgroundColor: "#D6E3E7"
      });
      divider.constraints = {
        height: 1,
        bottom: 0
      };
    }
    m.layout.set();
    o.on(Events.TouchStart, function() {
      var backgroundColor;
      backgroundColor = "rgba(215,215,215,.7)";
      return this.animate({
        properties: {
          backgroundColor: backgroundColor
        },
        time: .5
      });
    });
    o.on(Events.TouchEnd, function() {
      this.animate({
        properties: {
          backgroundColor: "transparent"
        },
        time: .5
      });
      sheets.animate({
        properties: {
          maxY: m.device.height + m.utils.px((setup.actions.length + 3) * 58)
        },
        time: .3
      });
      overlay.animate({
        properties: {
          opacity: 0
        },
        time: .3
      });
      return Utils.delay(.3, function() {
        return sheet.destroy();
      });
    });
    acts[act] = o;
  }
  if (setup.animated === true) {
    overlay.opacity = 0;
    sheets.maxY = m.device.height + m.utils.px((setup.actions.length + 3) * 58);
    overlay.animate({
      properties: {
        opacity: 1
      },
      time: .3
    });
    sheets.animate({
      properties: {
        maxY: m.device.height
      },
      time: .3
    });
  }
  overlay.on(Events.TouchEnd, function() {
    sheets.animate({
      properties: {
        maxY: m.device.height + m.utils.px((setup.actions.length + 3) * 58)
      },
      time: .3
    });
    overlay.animate({
      properties: {
        opacity: 0
      },
      time: .3
    });
    return Utils.delay(.3, function() {
      return sheet.destroy();
    });
  });
  exitButton.on(Events.TouchEnd, function() {
    sheets.animate({
      properties: {
        maxY: m.device.height + m.utils.px((setup.actions.length + 3) * 58)
      },
      time: .3
    });
    overlay.animate({
      properties: {
        opacity: 0
      },
      time: .3
    });
    return Utils.delay(.3, function() {
      return sheet.destroy();
    });
  });
  sheet.cancel = exitButton;
  sheet.description = description;
  sheet.overlay = overlay;
  sheet.actions = acts;
  return sheet;
};


},{"material-kit":"material-kit"}],"material-kit-status-bar":[function(require,module,exports){
var m;

m = require('material-kit');

exports.defaults = {
  carrier: "",
  network: "LTE",
  battery: 100,
  signal: 5,
  style: "dark",
  clock24: false,
  type: "statusBar"
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var batteryIcon, batteryPercent, bluetooth, bluetoothSVG, carrier, dot, gripper, highBattery, i, j, k, l, layer, len, lowBattery, midBattery, network, networkIcon, noNetwork, nonDot, nonDots, ref, ref1, ref2, setup, signal, statusBar, time;
  setup = m.utils.setupComponent(array, exports.defaults);
  statusBar = new Layer({
    backgroundColor: "transparent",
    name: "statusBar.all"
  });
  statusBar.type = setup.type;
  statusBar.constraints = {
    leading: 0,
    trailing: 0,
    height: 20
  };
  switch (m.device.name) {
    case "iphone-6s-plus":
      this.topConstraint = 5;
      this.batteryIcon = 5;
      this.bluetooth = 5;
      break;
    case "fullscreen":
      this.topConstraint = 5;
      this.batteryIcon = -12;
      this.bluetooth = -10;
      break;
    default:
      this.topConstraint = 3;
      this.batteryIcon = 2;
      this.bluetooth = 3;
  }
  if (setup.style === "light") {
    this.color = "white";
  } else {
    this.color = "black";
  }
  ref = Framer.CurrentContext.layers;
  for (j = 0, len = ref.length; j < len; j++) {
    layer = ref[j];
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
    if (setup.clock24 === false) {
      if (this.time.hours > 11) {
        this.time.stamp = "PM";
      } else {
        this.time.stamp = "AM";
      }
    } else {
      this.time.stamp = "";
    }
    time = new m.Text({
      style: "statusBarTime",
      text: m.utils.timeFormatter(this.time, setup.clock24) + " " + this.time.stamp,
      fontSize: 12,
      fontWeight: "semibold",
      superLayer: statusBar,
      color: this.color,
      name: "time"
    });
    time.constraints = {
      align: "horizontal",
      top: this.topConstraint
    };
  }
  signal = [];
  if (setup.signal < 1) {
    noNetwork = new m.Text({
      superLayer: statusBar,
      fontSize: 12,
      text: "No Network"
    });
    noNetwork.constraints = {
      leading: 7,
      top: 3
    };
  } else {
    for (i = k = 0, ref1 = setup.signal; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
      dot = new Layer({
        height: m.utils.px(5.5),
        width: m.utils.px(5.5),
        backgroundColor: "black",
        superLayer: statusBar,
        borderRadius: m.utils.px(5.5) / 2,
        backgroundColor: this.color,
        name: "signal[" + i + "]"
      });
      if (i === 0) {
        dot.constraints = {
          leading: 7,
          top: 7
        };
      } else {
        dot.constraints = {
          leading: [signal[i - 1], 1],
          top: 7
        };
      }
      signal.push(dot);
      m.layout.set();
    }
    if (setup.signal < 5) {
      nonDots = 5 - setup.signal;
      for (i = l = 0, ref2 = nonDots; 0 <= ref2 ? l < ref2 : l > ref2; i = 0 <= ref2 ? ++l : --l) {
        nonDot = new Layer({
          height: m.utils.px(5.5),
          width: m.utils.px(5.5),
          superLayer: statusBar,
          borderRadius: m.utils.px(5.5) / 2,
          backgroundColor: "transparent",
          name: "signal[" + signal.length + "]"
        });
        nonDot.style.border = (m.utils.px(1)) + "px solid " + this.color;
        nonDot.constraints = {
          leading: [signal[signal.length - 1], 1],
          top: 7
        };
        signal.push(nonDot);
        m.layout.set();
      }
    }
    carrier = new m.Text({
      style: "statusBarCarrier",
      text: setup.carrier,
      superLayer: statusBar,
      fontSize: 12,
      color: this.color,
      name: "carrier",
      textTransform: "capitalize"
    });
    carrier.constraints = {
      leading: [signal[signal.length - 1], 7],
      top: 3
    };
    m.layout.set();
    if (setup.carrier) {
      network = new m.Text({
        style: "statusBarNetwork",
        text: setup.network,
        superLayer: statusBar,
        fontSize: 12,
        color: this.color,
        name: "network",
        textTransform: "uppercase"
      });
      network.constraints = {
        leading: [carrier, 5],
        top: 3
      };
    }
    if (setup.carrier === "" || setup.carrier === "wifi") {
      networkIcon = m.utils.svg(m.assets.network, this.color);
      network = new Layer({
        width: networkIcon.width,
        height: networkIcon.height,
        superLayer: statusBar,
        backgroundColor: "transparent",
        name: "network"
      });
      network.html = networkIcon.svg;
      m.utils.changeFill(network, this.color);
      network.constraints = {
        leading: [signal[signal.length - 1], 5],
        top: this.topConstraint
      };
    }
  }
  batteryIcon = new Layer({
    width: m.utils.px(25),
    height: m.utils.px(10),
    superLayer: statusBar,
    backgroundColor: "transparent",
    name: "batteryIcon"
  });
  if (setup.battery > 70) {
    highBattery = m.utils.svg(m.assets.batteryHigh);
    batteryIcon.html = highBattery.svg;
    m.utils.changeFill(batteryIcon, this.color);
  }
  if (setup.battery <= 70 && setup.battery > 20) {
    midBattery = m.utils.svg(m.assets.batteryMid);
    batteryIcon.html = midBattery.svg;
    m.utils.changeFill(batteryIcon, this.color);
  }
  if (setup.battery <= 20) {
    lowBattery = m.utils.svg(m.assets.batteryLow);
    batteryIcon.html = lowBattery.svg;
    m.utils.changeFill(batteryIcon, this.color);
  }
  batteryIcon.constraints = {
    trailing: 7,
    top: this.batteryIcon
  };
  batteryPercent = new m.Text({
    style: "statusBarBatteryPercent",
    text: setup.battery + "%",
    superLayer: statusBar,
    fontSize: 12,
    color: this.color,
    name: "batteryPercent"
  });
  batteryPercent.constraints = {
    trailing: [batteryIcon, 3],
    verticalCenter: time
  };
  bluetoothSVG = m.utils.svg(m.assets.bluetooth);
  bluetooth = new Layer({
    width: bluetoothSVG.width,
    height: bluetoothSVG.height,
    superLayer: statusBar,
    opacity: .5,
    backgroundColor: "transparent",
    name: "bluetooth"
  });
  bluetooth.html = bluetoothSVG.svg;
  m.utils.changeFill(bluetooth, this.color);
  bluetooth.constraints = {
    top: this.bluetooth,
    trailing: [batteryPercent, 7]
  };
  m.layout.set();
  statusBar.battery = {};
  statusBar.battery.percent = batteryPercent;
  statusBar.battery.icon = batteryIcon;
  statusBar.bluetooth = bluetooth;
  statusBar.time = time;
  statusBar.network = network;
  statusBar.carrier = carrier;
  statusBar.signal = signal;
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
var m;

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
  fontFamily: "-apple-system, Helvetica, Arial, sans-serif",
  fontWeight: "regular",
  lineHeight: "auto",
  name: "text layer",
  opacity: 1,
  textTransform: "none",
  letterSpacing: 0,
  name: "text layer"
};

exports.defaults.props = Object.keys(exports.defaults);

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
  color = "";
  if (typeof colorString === "string") {
    colorString = colorString.toLowerCase();
  }
  switch (colorString) {
    case "red":
      color = new Color("#FE3824");
      break;
    case "blue":
      color = new Color("#0076FF");
      break;
    case "pink":
      color = new Color("#FE2851");
      break;
    case "grey":
      color = new Color("#929292");
      break;
    case "gray":
      color = new Color("#929292");
      break;
    case "black":
      color = new Color("#030303");
      break;
    case "white":
      color = new Color("#EFEFF4");
      break;
    case "orange":
      color = new Color("#FF9600");
      break;
    case "green":
      color = new Color("#44DB5E");
      break;
    case "light blue":
      color = new Color("#54C7FC");
      break;
    case "light-blue":
      color = new Color("#54C7FC");
      break;
    case "yellow":
      color = new Color("#FFCD00");
      break;
    case "light key":
      color = new Color("#9DA7B3");
      break;
    case "light-key":
      color = new Color("#9DA7B3");
      break;
    default:
      if (colorString[0] === "#" || colorString.toHexString()[0] === "#") {
        color = new Color(colorString);
      } else {
        color = new Color("#929292");
      }
  }
  return color;
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
  startIndex = layer.html.search("fill=\"#");
  fillString = layer.html.slice(startIndex, layer.html.length);
  endIndex = fillString.search("\">");
  string = fillString.slice(0, endIndex);
  newString = "fill=\"" + exports.color(color).toHexString();
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
  var capturedDevice, device;
  device = Framer.Device.deviceType;

  /* This switch looks at the innerWidth to determine if the prototype is being opened on a device.
  	If so, it'll override the device, and it'll adjust the view to fullscreen.
   */
  capturedDevice = {
    width: m.lib.frames[device].width,
    height: m.lib.frames[device].height,
    scale: m.lib.frames[device].scale,
    mobile: m.lib.frames[device].mobile,
    platform: m.lib.frames[device].platform
  };
  switch (innerWidth) {
    case 640:
      device = "apple-iphone-5s-silver";
      Framer.Device.deviceType = "fullscreen";
      break;
    case 750:
      device = "apple-iphone-6s-silver";
      Framer.Device.deviceType = "fullscreen";
      break;
    case 1242:
      if (innerHeight === 2208) {
        device = "apple-iphone-6s-plus-silver";
        Framer.Device.deviceType = "fullscreen";
      }
      break;
    case 1536:
      if (innerHeight === 2048) {
        device = "apple-ipad-air-2-silver";
        Framer.Device.deviceType = "fullscreen";
      }
      break;
    case 2048:
      if (innerHeight === 2732) {
        device = "apple-ipad-pro-silver";
      }
      if (innerHeight === 1536) {
        device = "apple-ipad-air-2-silver";
      }
      Framer.Device.deviceType = "fullscreen";
      break;
    case 2732:
      if (innerHeight === 2048) {
        device = "apple-ipad-pro-silver";
        Framer.Device.deviceType = "fullscreen";
      }
  }
  exports.scale = m.lib.frames[device].scale;
  if (device === "fullscreen") {
    exports.width = window.innerWidth;
    exports.height = window.innerHeight;
  } else {
    exports.width = m.lib.frames[device].width;
    exports.height = m.lib.frames[device].height;
    if (window.innerWidth === 1242 || window.innerWidth === 2208) {
      exports.width = window.innerWidth;
      exports.height = window.innerHeight;
      exports.scale = 3;
    }
  }
  exports.mobile = m.lib.frames[device].mobile;
  exports.platform = m.lib.frames[device].platform;
  exports.orientation = Framer.Device.orientation;
  device = device.replace("apple-", "");
  device = device.replace("-gold", "");
  device = device.replace("-green", "");
  device = device.replace("-blue", "");
  device = device.replace("-red", "");
  device = device.replace("-white", "");
  device = device.replace("-yellow", "");
  device = device.replace("-pink", "");
  device = device.replace("-space-grey", "");
  device = device.replace("-rose", "");
  device = device.replace("5s", "5");
  device = device.replace("5c", "5");
  device = device.replace("-mini", "");
  device = device.replace("-air", "");
  device = device.replace("-2", "");
  device = device.replace("-4", "");
  device = device.replace("-silver", "");
  capturedDevice.name = device;
  return capturedDevice;
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
    color = "#000";
  } else {
    color = "#FFF";
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


},{"material-kit":"material-kit"}],"material-kit":[function(require,module,exports){
var alert, banner, button, field, keyboard, layout, library, nav, sheet, status, tab, text, utils;

exports.layout = layout = require('material-kit-layout');

exports.lib = library = require('material-kit-library');

exports.utils = utils = require('material-kit-utils');

exports.device = utils.getDevice();

exports.assets = library.assets;

alert = require('material-kit-alert');

banner = require('material-kit-banner');

button = require('material-kit-button');

field = require('material-kit-field');

keyboard = require('material-kit-keyboard');

nav = require('material-kit-nav-bar');

sheet = require('material-kit-sheet');

status = require('material-kit-status-bar');

tab = require('material-kit-tab-bar');

text = require('material-kit-text');

exports.Alert = alert.create;

exports.Banner = banner.create;

exports.Button = button.create;

exports.Field = field.create;

exports.Keyboard = keyboard.create;

exports.NavBar = nav.create;

exports.Sheet = sheet.create;

exports.StatusBar = status.create;

exports.Tab = tab.tab;

exports.TabBar = tab.bar;

exports.Text = text.create;


},{"material-kit-alert":"material-kit-alert","material-kit-banner":"material-kit-banner","material-kit-button":"material-kit-button","material-kit-field":"material-kit-field","material-kit-keyboard":"material-kit-keyboard","material-kit-layout":"material-kit-layout","material-kit-library":"material-kit-library","material-kit-nav-bar":"material-kit-nav-bar","material-kit-sheet":"material-kit-sheet","material-kit-status-bar":"material-kit-status-bar","material-kit-tab-bar":"material-kit-tab-bar","material-kit-text":"material-kit-text","material-kit-utils":"material-kit-utils"}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9EZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1hbGVydC5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9EZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1iYW5uZXIuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtYnV0dG9uLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWZpZWxkLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWtleWJvYXJkLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWxheW91dC5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9EZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1saWJyYXJ5LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LW5hdi1iYXIuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtc2hlZXQuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtc3RhdHVzLWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9EZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC10YWItYmFyLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXRleHQuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtdXRpbHMuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQ0EsSUFBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLGNBQVI7O0FBRUosT0FBTyxDQUFDLFFBQVIsR0FBbUI7RUFDbEIsS0FBQSxFQUFPLE9BRFc7RUFFbEIsT0FBQSxFQUFRLFNBRlU7RUFHbEIsT0FBQSxFQUFRLENBQUMsSUFBRCxDQUhVO0VBSWxCLE1BQUEsRUFBTyxRQUpXO0VBS2xCLGVBQUEsRUFBaUIsaUJBTEM7OztBQVFuQixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQWpCLEdBQXlCLE1BQU0sQ0FBQyxJQUFQLENBQVksT0FBTyxDQUFDLFFBQXBCOztBQUV6QixPQUFPLENBQUMsTUFBUixHQUFpQixTQUFDLEtBQUQ7QUFDaEIsTUFBQTtFQUFBLEtBQUEsR0FBUSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQVIsQ0FBdUIsS0FBdkIsRUFBOEIsT0FBTyxDQUFDLFFBQXRDO0VBRVIsS0FBQSxHQUFZLElBQUEsS0FBQSxDQUFNO0lBQUEsZUFBQSxFQUFnQixhQUFoQjtJQUErQixJQUFBLEVBQUssT0FBcEM7R0FBTjtFQUNaLEtBQUssQ0FBQyxXQUFOLEdBQ0M7SUFBQSxPQUFBLEVBQVEsQ0FBUjtJQUNBLFFBQUEsRUFBUyxDQURUO0lBRUEsR0FBQSxFQUFJLENBRko7SUFHQSxNQUFBLEVBQU8sQ0FIUDs7RUFLRCxPQUFBLEdBQWMsSUFBQSxLQUFBLENBQU07SUFBQSxlQUFBLEVBQWdCLGdCQUFoQjtJQUFrQyxVQUFBLEVBQVcsS0FBN0M7SUFBb0QsSUFBQSxFQUFLLFNBQXpEO0dBQU47RUFDZCxPQUFPLENB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QVIsR0FBZ0IsS0FBSyxDQUFDOztBQUN0QixPQUFPLENBQUMsU0FBUixHQUFvQixNQUFNLENBQUM7O0FBQzNCLE9BQU8sQ0FBQyxHQUFSLEdBQWMsR0FBRyxDQUFDOztBQUNsQixPQUFPLENBQUMsTUFBUixHQUFpQixHQUFHLENBQUM7O0FBQ3JCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsSUFBSSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQWxlcnRcbm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRpdGxlOiBcIlRpdGxlXCJcblx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRhY3Rpb25zOltcIk9LXCJdXG5cdGFjdGlvbjpcIkFjdGlvblwiXG5cdHNlY29uZGFyeUFjdGlvbjogXCJzZWNvbmRhcnlBY3Rpb25cIlxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRhbGVydCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYWxlcnRcIlxuXHRhbGVydC5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblxuXHRvdmVybGF5ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsLjMpXCIsIHN1cGVyTGF5ZXI6YWxlcnQsIG5hbWU6XCJvdmVybGF5XCJcblx0b3ZlcmxheS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblxuXHRtb2RhbCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBzdXBlckxheWVyOmFsZXJ0LCBib3JkZXJSYWRpdXM6bS51dGlscy5weCgxMCksIG5hbWU6XCJtb2RhbFwiLCB4OjkyLCB5OjUzN1xuXHRtb2RhbC5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdHdpZHRoOjI4MFxuXHRcdGhlaWdodDo0MDBcblxuXHR0aXRsZSA9IG5ldyBtLlRleHRcblx0XHRzdXBlckxheWVyOm1vZGFsXG5cdFx0dGV4dDpzZXR1cC50aXRsZVxuXHRcdGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiXG5cdFx0bmFtZTpcInRpdGxlXCJcblx0XHR0ZXh0QWxpZ246XCJjZW50ZXJcIlxuXHRcdGxpbmVIZWlnaHQ6MjBcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDoyMFxuXHRcdFx0d2lkdGg6MjIwXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdG1lc3NhZ2UgPSBuZXcgbS5UZXh0XG5cdFx0c3VwZXJMYXllcjptb2RhbFxuXHRcdHRleHQ6c2V0dXAubWVzc2FnZVxuXHRcdGZvbnRTaXplOjEzXG5cdFx0bmFtZTpcIm1lc3NhZ2VcIlxuXHRcdHRleHRBbGlnbjpcImNlbnRlclwiXG5cdFx0bGluZUhlaWdodDoxNlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOiBbdGl0bGUsIDEwXVxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdHdpZHRoOiAyMjBcblxuXHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIiwgbmFtZTpcImhvcml6b250YWwgZGl2aWRlclwiXG5cdGRpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6MVxuXHRcdGJvdHRvbTo0NFxuXHRtLmxheW91dC5zZXQoKVxuXG5cdCNUaXRsZSArIE1lc3NhZ2UgKyAxIHNldCBvZiBhY3Rpb25zXG5cdG1vZGFsLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdID0gMjAgKyBtLnV0aWxzLnB0KHRpdGxlLmhlaWdodCkgKyAxMCArIG0udXRpbHMucHQobWVzc2FnZS5oZWlnaHQpICsgMjQgKyA0NFxuXG5cdGFjdGlvbnMgPSBbXVxuXHRzd2l0Y2ggc2V0dXAuYWN0aW9ucy5sZW5ndGhcblx0XHR3aGVuIDFcblx0XHRcdGFjdExhYmVsID0gbS51dGlscy5jYXBpdGFsaXplKHNldHVwLmFjdGlvbnNbMF0pXG5cdFx0XHRhY3Rpb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpzZXR1cC5hY3Rpb25zWzBdLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCgxMClcblx0XHRcdGFjdGlvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHR0cmFpbGluZzowXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdGhlaWdodDo0NFxuXHRcdFx0YWN0aW9uLmxhYmVsID0gbmV3IG0uVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIGNvbG9yOm0udXRpbHMuY29sb3IoXCJibHVlXCIpLCBzdXBlckxheWVyOmFjdGlvbiwgdGV4dDphY3RMYWJlbCwgbmFtZTpcImxhYmVsXCJcblx0XHRcdGFjdGlvbi5sYWJlbC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdGJvdHRvbToxNlxuXHRcdFx0YWN0aW9ucy5wdXNoIGFjdGlvblxuXHRcdHdoZW4gMlxuXHRcdFx0YWN0TGFiZWwgPSBtLnV0aWxzLmNhcGl0YWxpemUoc2V0dXAuYWN0aW9uc1swXSlcblx0XHRcdGFjdGlvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBuYW1lOnNldHVwLmFjdGlvbnNbMF0sIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDEwKSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0YWN0aW9uLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOm0udXRpbHMucHQobW9kYWwud2lkdGgvMilcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgbS5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgY29sb3I6bS51dGlscy5jb2xvcihcImJsdWVcIiksIHN1cGVyTGF5ZXI6YWN0aW9uLCB0ZXh0OmFjdExhYmVsLCBuYW1lOlwibGFiZWxcIlxuXHRcdFx0YWN0aW9uLmxhYmVsLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0Ym90dG9tOjE2XG5cdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uXG5cblx0XHRcdHZlcnREaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIiwgbmFtZTpcInZlcnRpY2FsIGRpdmlkZXJcIlxuXHRcdFx0dmVydERpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdFx0XHR3aWR0aDoxXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdGhlaWdodDo0NFxuXHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdFx0XHRhY3RMYWJlbDIgPSBtLnV0aWxzLmNhcGl0YWxpemUoc2V0dXAuYWN0aW9uc1sxXSlcblx0XHRcdGFjdGlvbjIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgbmFtZTpzZXR1cC5hY3Rpb25zWzFdLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCgxMCksIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdGFjdGlvbjIuY29uc3RyYWludHMgPVxuXHRcdFx0XHRsZWFkaW5nOm0udXRpbHMucHQobW9kYWwud2lkdGgvMilcblx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdGFjdGlvbjIubGFiZWwgPSBuZXcgbS5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgY29sb3I6bS51dGlscy5jb2xvcihcImJsdWVcIiksIHN1cGVyTGF5ZXI6YWN0aW9uMiwgdGV4dDphY3RMYWJlbDIsIG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRhY3Rpb24yLmxhYmVsLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0Ym90dG9tOjE2XG5cdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uMlxuXHRcdGVsc2Vcblx0XHRcdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblx0XHRcdFx0YWN0TGFiZWwgPSBtLnV0aWxzLmNhcGl0YWxpemUoYWN0KVxuXHRcdFx0XHRhY3Rpb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgbmFtZTphY3QsIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDEwKSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0XHRhY3Rpb24uY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0XHRib3R0b206MCArICgoc2V0dXAuYWN0aW9ucy5sZW5ndGggLSBpbmRleCAtIDEpICogNDQpXG5cdFx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRcdGFjdGlvbkRpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgYmFja2dyb3VuZENvbG9yOlwiI0UyRThFQlwiLCBuYW1lOlwiaG9yaXpvbnRhbCBkaXZpZGVyXCJcblx0XHRcdFx0YWN0aW9uRGl2aWRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRcdGhlaWdodDoxXG5cdFx0XHRcdFx0Ym90dG9tOjAgKyAoKHNldHVwLmFjdGlvbnMubGVuZ3RoIC0gaW5kZXgpICogNDQpXG5cdFx0XHRcdGFjdGlvbi5sYWJlbCA9IG5ldyBtLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCBjb2xvcjptLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKSwgc3VwZXJMYXllcjphY3Rpb24sIHRleHQ6YWN0TGFiZWwsIG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRcdGFjdGlvbi5sYWJlbC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHRib3R0b206MTRcblx0XHRcdFx0YWN0aW9ucy5wdXNoIGFjdGlvblxuXHRcdFx0XHRtb2RhbC5jb25zdHJhaW50c1tcImhlaWdodFwiXSA9IG1vZGFsLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdICsgNDIgLSAxMlxuXG5cdGFsZXJ0LmFjdGlvbnMgPSB7fVxuXHRmb3IgYWN0LGluZGV4IGluIGFjdGlvbnNcblxuXHRcdCNIYW5kbGUgc3BlY2lhbCBjaGFyYWN0ZXJzXG5cdFx0YWN0LnR5cGUgPSBcImJ1dHRvblwiXG5cdFx0bS51dGlscy5zcGVjaWFsQ2hhcihhY3QpXG5cblx0XHRpZiBzZXR1cC5hY3Rpb25zW2luZGV4XS5pbmRleE9mKFwiLXJcIikgPT0gMFxuXHRcdFx0YWN0Lm9yaWdDb2xvciA9IG0udXRpbHMuY29sb3IoXCJyZWRcIilcblx0XHRlbHNlXG5cdFx0XHRhY3Qub3JpZ0NvbG9yID0gbS51dGlscy5jb2xvcihcImJsdWVcIilcblxuXHRcdCNBZGQgVG91Y2ggRXZlbnRzXG5cdFx0YWN0Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0QC5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6YWN0LmJhY2tncm91bmRDb2xvci5kYXJrZW4oNSkpXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRALmxhYmVsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooY29sb3I6QC5vcmlnQ29sb3IubGlnaHRlbigxMCkpXG5cdFx0XHRcdHRpbWU6LjI1XG5cblx0XHRhY3Qub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIpXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRALmxhYmVsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooY29sb3I6QC5vcmlnQ29sb3IpXG5cdFx0XHRcdHRpbWU6LjI1XG5cblx0XHQjIEV4cG9ydCBhY3Rpb25zXG5cdFx0YWxlcnQuYWN0aW9uc1thY3QubmFtZV0gPSBhY3RcblxuXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0IyBFeHBvcnQgYWxlcnRcblx0YWxlcnQub3ZlcmxheSA9IG92ZXJsYXlcblx0YWxlcnQubW9kYWwgPSBtb2RhbFxuXHRhbGVydC50aXRsZSA9IHRpdGxlXG5cdGFsZXJ0Lm1lc3NhZ2UgPSBtZXNzYWdlXG5cblx0cmV0dXJuIGFsZXJ0XG4iLCIjIEJhbm5lclxubSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0dGl0bGU6IFwiVGl0bGVcIlxuXHRtZXNzYWdlOlwiTWVzc2FnZVwiXG5cdGFjdGlvbjpcIkFjdGlvblwiXG5cdHRpbWU6XCJub3dcIlxuXHRpY29uOnVuZGVmaW5lZFxuXHRkdXJhdGlvbjo3XG5cdGFuaW1hdGVkOmZhbHNlXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRiYW5uZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJhbm5lclwiXG5cdGJhbm5lci5odG1sID0gbS51dGlscy5zdmcobS5hc3NldHMuYmFubmVyQkdbbS5kZXZpY2UubmFtZV0pLnN2Z1xuXHRiYW5uZXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGhlaWdodDo2OFxuXG5cdCMgRGlmZmVyZW50IHBvc2l0aW9uaW5ncyBmb3IgZWFjaCBkZXZpY2Vcblx0c3dpdGNoIG0uZGV2aWNlLm5hbWVcblx0XHR3aGVuIFwiaXBhZFwiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAyMDBcblx0XHRcdEB0b3BJY29uID0gMTVcblx0XHRcdEB0b3BUaXRsZSA9IDExXG5cdFx0d2hlbiBcImlwYWQtcHJvXCJcblx0XHRcdEBsZWFkaW5nSWNvbiA9IDE5MlxuXHRcdFx0QHRvcEljb24gPSAxMlxuXHRcdFx0QHRvcFRpdGxlID0gOVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxNVxuXHRcdFx0QHRvcEljb24gPSAxMlxuXHRcdFx0QHRvcFRpdGxlID0gMTBcblx0XHRlbHNlXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxNVxuXHRcdFx0QHRvcEljb24gPSA4XG5cdFx0XHRAdG9wVGl0bGUgPSA2XG5cblx0aWYgc2V0dXAuaWNvbiA9PSB1bmRlZmluZWRcblx0XHRzZXR1cC5pY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YmFubmVyXG5cdFx0c2V0dXAuaWNvbi5zdHlsZVtcImJhY2tncm91bmRcIl0gPSBcImxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNjdGRjgxIDAlLCAjMDFCNDFGIDEwMCUpXCJcblx0ZWxzZVxuXHRcdGJhbm5lci5hZGRTdWJMYXllcihzZXR1cC5pY29uKVxuXG5cdHNldHVwLmljb24uYm9yZGVyUmFkaXVzID0gbS51dGlscy5weCg0LjUpXG5cdHNldHVwLmljb24ubmFtZSA9IFwiaWNvblwiXG5cdHNldHVwLmljb24uY29uc3RyYWludHMgPVxuXHRcdGhlaWdodDoyMFxuXHRcdHdpZHRoOjIwXG5cdFx0bGVhZGluZzpAbGVhZGluZ0ljb25cblx0XHR0b3A6QHRvcEljb25cblxuXHR0aXRsZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJiYW5uZXJUaXRsZVwiLCB0ZXh0OnNldHVwLnRpdGxlLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRXZWlnaHQ6XCJtZWRpdW1cIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwidGl0bGVcIlxuXHR0aXRsZS5jb25zdHJhaW50cyA9XG5cdFx0dG9wOkB0b3BUaXRsZVxuXHRcdGxlYWRpbmc6W3NldHVwLmljb24sIDExXVxuXHRtZXNzYWdlID0gbmV3IG0uVGV4dCBzdHlsZTpcImJhbm5lck1lc3NhZ2VcIiwgdGV4dDpzZXR1cC5tZXNzYWdlLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcIm1lc3NhZ2VcIlxuXHRtZXNzYWdlLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nRWRnZXM6dGl0bGVcblx0XHR0b3A6W3RpdGxlLCAyXVxuXG5cdHRpbWUgPSBuZXcgbS5UZXh0IHN0eWxlOlwiYmFubmVyVGltZVwiLCB0ZXh0OnNldHVwLnRpbWUsIGNvbG9yOlwid2hpdGVcIiwgZm9udFNpemU6MTEsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwidGltZVwiXG5cdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6W3RpdGxlLCA1XVxuXHRcdGJvdHRvbUVkZ2VzOiB0aXRsZVxuXG5cdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCIgfHwgbS5kZXZpY2UubmFtZSA9PSBcImlwYWQtcHJvXCJcblx0XHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRcdGJvdHRvbUVkZ2VzOiB0aXRsZVxuXHRcdFx0dHJhaWxpbmc6IEBsZWFkaW5nSWNvblxuXG5cdG0ubGF5b3V0LnNldCgpXG5cdG0udXRpbHMuYmdCbHVyKGJhbm5lcilcblxuXHQjIyBCYW5uZXIgRHJhZyBzZXR0aW5nc1xuXHRiYW5uZXIuZHJhZ2dhYmxlID0gdHJ1ZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmhvcml6b250YWwgPSBmYWxzZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmNvbnN0cmFpbnRzID1cblx0XHR5OjBcblxuXHRiYW5uZXIuZHJhZ2dhYmxlLmJvdW5jZU9wdGlvbnMgPVxuXHQgICAgZnJpY3Rpb246IDI1XG5cdCAgICB0ZW5zaW9uOiAyNTBcblxuXHRiYW5uZXIub24gRXZlbnRzLkRyYWdFbmQsIC0+XG5cdFx0aWYgYmFubmVyLm1heFkgPCBtLnV0aWxzLnB4KDY4KVxuXHRcdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoobWF4WTowKVxuXHRcdFx0XHR0aW1lOi4xNVxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFV0aWxzLmRlbGF5IC4yNSwgLT5cblx0XHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cdCMgQnVmZmVyIHRoYXQgc2l0cyBhYm92ZSB0aGUgYmFubmVyXG5cdGJhbm5lckJ1ZmZlciA9IG5ldyBMYXllciBtYXhZOjAsIG5hbWU6XCJidWZmZXJcIiwgYmFja2dyb3VuZENvbG9yOlwiIzFCMUIxQ1wiLCBvcGFjaXR5Oi45LCBzdXBlckxheWVyOmJhbm5lciwgd2lkdGg6bS5kZXZpY2Uud2lkdGgsIG1heFk6YmFubmVyLnksIGhlaWdodDptLmRldmljZS5oZWlnaHRcblx0bS51dGlscy5iZ0JsdXIoYmFubmVyQnVmZmVyKVxuXG5cdCMgQW5pbWF0ZS1pblxuXHRpZiBzZXR1cC5hbmltYXRlZCA9PSB0cnVlXG5cdFx0YmFubmVyLnkgPSAwIC0gYmFubmVyLmhlaWdodFxuXHRcdGJhbm5lci5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOih5OjApXG5cdFx0XHR0aW1lOi4yNVxuXHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cblx0IyBBbmltYXRlLW91dFxuXHRpZiBzZXR1cC5kdXJhdGlvblxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uLCAtPlxuXHRcdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoobWF4WTowKVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRVdGlscy5kZWxheSBzZXR1cC5kdXJhdGlvbiArIC4yNSwgLT5cblx0XHRcdGJhbm5lci5kZXN0cm95KClcblxuXHQjIEV4cG9ydCBCYW5uZXJcblx0YmFubmVyLmljb24gPSBzZXR1cC5pY29uXG5cdGJhbm5lci50aXRsZSA9IHRpdGxlXG5cdGJhbm5lci5tZXNzYWdlID0gbWVzc2FnZVxuXHRyZXR1cm4gYmFubmVyXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRcdHRleHQ6XCJ0ZXh0XCJcblx0XHR0eXBlOlwiYnV0dG9uXCJcblx0XHRidXR0b25UeXBlOlwidGV4dFwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGNvbG9yOlwiIzAwN0FGRlwiXG5cdFx0Zm9udFNpemU6MTdcblx0XHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdFx0bmFtZTpcImJ1dHRvblwiXG5cdFx0Ymx1cjp0cnVlXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHRjb25zdHJhaW50czp1bmRlZmluZWRcblx0fVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblx0YnV0dG9uID0gbmV3IExheWVyIG5hbWU6c2V0dXAubmFtZVxuXHRidXR0b24uYnV0dG9uVHlwZSA9IHNldHVwLmJ1dHRvblR5cGVcblx0YnV0dG9uLnR5cGUgPSBzZXR1cC50eXBlXG5cdGNvbG9yID0gXCJcIlxuXHRpZiBzZXR1cC5jb25zdHJhaW50c1xuXHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRzZXR1cC5jb25zdHJhaW50c1xuXHRpZiBzZXR1cC5zdXBlckxheWVyXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihidXR0b24pXG5cblx0c3dpdGNoIHNldHVwLmJ1dHRvblR5cGVcblx0XHR3aGVuIFwiYmlnXCJcblx0XHRcdHNldHVwLmZvbnRTaXplID0gMjBcblx0XHRcdHNldHVwLmZvbnRXZWlnaHQgPSBcIm1lZGl1bVwiXG5cblx0XHRcdGlmIGJ1dHRvbi5jb25zdHJhaW50cyA9PSB1bmRlZmluZWRcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzID0ge31cblxuXHRcdFx0aWYgYnV0dG9uLmNvbnN0cmFpbnRzLmxlYWRpbmcgPT0gdW5kZWZpbmVkXG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cy5sZWFkaW5nID0gMTBcblxuXHRcdFx0aWYgYnV0dG9uLmNvbnN0cmFpbnRzLnRyYWlsaW5nID09IHVuZGVmaW5lZFxuXHRcdFx0XHRidXR0b24uY29uc3RyYWludHMudHJhaWxpbmcgPSAxMFxuXG5cdFx0XHRpZiBidXR0b24uY29uc3RyYWludHMuaGVpZ2h0ID09IHVuZGVmaW5lZFxuXHRcdFx0XHRidXR0b24uY29uc3RyYWludHMuaGVpZ2h0ID0gNTdcblxuXHRcdFx0YnV0dG9uLmJvcmRlclJhZGl1cyA9IG0udXRpbHMucHgoMTIuNSlcblx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwiXCJcblxuXHRcdFx0c3dpdGNoIHNldHVwLnN0eWxlXG5cdFx0XHRcdHdoZW4gXCJsaWdodFwiXG5cdFx0XHRcdFx0Y29sb3IgPSBcIiMwMDdBRkZcIlxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuOSlcIlxuXHRcdFx0XHRcdFx0bS51dGlscy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cdFx0XHRcdHdoZW4gXCJkYXJrXCJcblx0XHRcdFx0XHRjb2xvciA9IFwiI0ZGRlwiXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDQzLCA0MywgNDMsIC45KVwiXG5cdFx0XHRcdFx0XHRtLnV0aWxzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCIjMjgyODI4XCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXJcblx0XHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdFx0XHRyZ2JTdHJpbmcgPSBiYWNrZ3JvdW5kQ29sb3IudG9SZ2JTdHJpbmcoKVxuXHRcdFx0XHRcdFx0cmdiYVN0cmluZyA9IHJnYlN0cmluZy5yZXBsYWNlKFwiKVwiLCBcIiwgLjkpXCIpXG5cdFx0XHRcdFx0XHRyZ2JhU3RyaW5nICA9IHJnYmFTdHJpbmcucmVwbGFjZShcInJnYlwiLCBcInJnYmFcIilcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IHJnYmFTdHJpbmdcblx0XHRcdFx0XHRcdG0udXRpbHMuYmdCbHVyKGJ1dHRvbilcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3Ioc2V0dXAuYmFja2dyb3VuZENvbG9yKVxuXG5cblx0XHRcdGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRuZXdDb2xvciA9IFwiXCJcblx0XHRcdFx0aWYgc2V0dXAuc3R5bGUgPT0gXCJkYXJrXCJcblx0XHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IubGlnaHRlbigxMClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5ld0NvbG9yID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5kYXJrZW4oMTApXG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOm5ld0NvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6YmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRcdHdoZW4gXCJzbWFsbFwiXG5cdFx0XHRAZm9udFNpemUgPSAxNlxuXHRcdFx0QHRvcCA9IDRcblx0XHRcdGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSBtLnV0aWxzLnB4KDIuNSlcblx0XHRcdHNldHVwLmZvbnRXZWlnaHQgPSA1MDBcblx0XHRcdHN3aXRjaCBzZXR1cC5zdHlsZVxuXHRcdFx0XHR3aGVuIFwibGlnaHRcIlxuXHRcdFx0XHRcdGNvbG9yID0gXCIjMDA3QUZGXCJcblx0XHRcdFx0XHRidXR0b24uYm9yZGVyQ29sb3IgPSBcIiMwMDdBRkZcIlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdGJ1dHRvbi5ib3JkZXJDb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRidXR0b24uYm9yZGVyV2lkdGggPSBtLnV0aWxzLnB4KDEpXG5cblxuXHRcdGVsc2Vcblx0XHRcdGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdEBmb250U2l6ZSA9IHNldHVwLmZvbnRTaXplXG5cdFx0XHRAZm9udFdlaWdodCA9IHNldHVwLmZvbnRXZWlnaHRcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5zdWJMYXllcnNbMF0uY29sb3IubGlnaHRlbigzMClcblx0XHRcdFx0YnV0dG9uLnN1YkxheWVyc1swXS5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6bmV3Q29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLnN1YkxheWVyc1swXS5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6c2V0dXAuY29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXG5cdHRleHRMYXllciA9IG5ldyBtLlRleHRcblx0XHRuYW1lOlwibGFiZWxcIlxuXHRcdHRleHQ6c2V0dXAudGV4dFxuXHRcdGNvbG9yOmNvbG9yXG5cdFx0c3VwZXJMYXllcjpidXR0b25cblx0XHRmb250U2l6ZTpzZXR1cC5mb250U2l6ZVxuXHRcdGZvbnRXZWlnaHQ6c2V0dXAuZm9udFdlaWdodFxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXG5cdHN3aXRjaCBzZXR1cC5idXR0b25UeXBlXG5cdFx0d2hlbiBcInNtYWxsXCJcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDp0ZXh0TGF5ZXIud2lkdGggKyBtLnV0aWxzLnB4KDIwKSwgaGVpZ2h0OiB0ZXh0TGF5ZXIuaGVpZ2h0ICsgbS51dGlscy5weCgxMCkpXG5cblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6Y29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0XHR0ZXh0TGF5ZXIuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOlwiI0ZGRlwiKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRcdHRleHRMYXllci5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6Y29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdGVsc2Vcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDp0ZXh0TGF5ZXIud2lkdGgsIGhlaWdodDp0ZXh0TGF5ZXIuaGVpZ2h0KVxuXG5cblxuXHRidXR0b24ubGFiZWwgPSB0ZXh0TGF5ZXJcblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OmJ1dHRvblxuXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDp0ZXh0TGF5ZXJcblx0cmV0dXJuIGJ1dHRvblxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9XG5cdGZpZWxkOlxuXHRcdGlzRWRpdGluZzpmYWxzZVxuXHRcdGN1cnNvcjp7fVxuXHRcdGJvcmRlclJhZGl1czo1XG5cdFx0Ym9yZGVyV2lkdGg6MFxuXHRcdGJvcmRlckNvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGNvbG9yOlwiIzA5MDkwOFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwiI0ZGRlwiXG5cdFx0cmV0dXJuVGV4dDpcInJldHVyblwiXG5cdFx0cmV0dXJuQ29sb3I6XCJsaWdodC1rZXlcIlxuXHRcdHN0eWxlOlwibGlnaHRcIlxuXHRcdHR5cGU6XCJmaWVsZFwiXG5cdFx0Y29uc3RyYWludHM6dW5kZWZpbmVkXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHR3aWR0aDoyNThcblx0XHRoZWlnaHQ6MzBcblx0XHRmb250U2l6ZToxNVxuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRwbGFjZWhvbGRlclRleHQ6XCJwbGFjZWhvbGRlclRleHRcIlxuXHRcdHBsYWNlaG9sZGVyQ29sb3I6XCIjODA4MDgwXCJcblx0XHR0ZXh0OlwiXCJcblx0XHR0ZXh0Q29uc3RyYWludHM6e2FsaWduOlwidmVydGljYWxcIiwgbGVhZGluZzo4fVxuXHRcdGlucHV0OnRydWVcblx0Y3Vyc29yOlxuXHRcdGNvbG9yOlwiYmx1ZVwiXG5cdFx0aGVpZ2h0OjIwXG5cdFx0d2lkdGg6MVxuXG5cbmV4cG9ydHMuZGVmYXVsdHMuZmllbGQucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmZpZWxkKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzLmZpZWxkKVxuXHRmaWVsZCA9IG5ldyBMYXllciBib3JkZXJSYWRpdXM6bS51dGlscy5weChzZXR1cC5ib3JkZXJSYWRpdXMpLCBiYWNrZ3JvdW5kQ29sb3I6c2V0dXAuYmFja2dyb3VuZENvbG9yLCB3aWR0aDptLnV0aWxzLnB4KHNldHVwLndpZHRoKSwgaGVpZ2h0Om0udXRpbHMucHgoc2V0dXAuaGVpZ2h0KVxuXHRpZiBzZXR1cC5jb25zdHJhaW50c1xuXHRcdGZpZWxkLmNvbnN0cmFpbnRzID1cblx0XHRcdHNldHVwLmNvbnN0cmFpbnRzXG5cdGZpZWxkLmFjdGl2ZSA9IGZhbHNlXG5cdHRleHQgPSBuZXcgbS5UZXh0IHN0eWxlOlwiZmllbGRUZXh0XCIsIHN1cGVyTGF5ZXI6ZmllbGQsIHRleHQ6c2V0dXAudGV4dCwgZm9udFNpemU6c2V0dXAuZm9udFNpemUsIGZvbnRXZWlnaHQ6c2V0dXAuZm9udFdlaWdodCwgY29sb3I6c2V0dXAuY29sb3Jcblx0aWYgc2V0dXAudGV4dENvbnN0cmFpbnRzXG5cdFx0dGV4dC5jb25zdHJhaW50cyA9XG5cdFx0XHRzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0ZmllbGQudGV4dCA9IHRleHRcblxuXHRpZiBzZXR1cC5zdXBlckxheWVyXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihmaWVsZClcblxuXG5cblxuXHQjI0hhbmRsZSBrZXlwcmVzc1xuXHR0ZXh0Lm9uIFwiY2hhbmdlOmh0bWxcIiwgLT5cblx0XHRpZiB0ZXh0Lmh0bWwgPT0gXCJcIlxuXHRcdFx0ZmllbGQuY3Vyc29yLmNvbnN0cmFpbnRzID0ge2FsaWduOlwidmVydGljYWxcIiwgbGVhZGluZzo4fVxuXHRcdGVsc2Vcblx0XHRcdGZpZWxkLmN1cnNvci5jb25zdHJhaW50cyA9IHthbGlnbjpcInZlcnRpY2FsXCIsIHRyYWlsaW5nRWRnZXM6dGV4dH1cblx0XHRpZiBmaWVsZC5wbGFjZWhvbGRlclxuXHRcdFx0ZmllbGQucGxhY2Vob2xkZXIudmlzaWJsZSA9IGZhbHNlXG5cblx0aWYgc2V0dXAudGV4dCA9PSBcIlwiIHx8IHNldHVwLnRleHQgPT0gdW5kZWZpbmVkXG5cdFx0cGxhY2Vob2xkZXIgPSBuZXcgbS5UZXh0IHN0eWxlOlwiZmllbGRQbGFjZWhvbGRlclwiLCBzdXBlckxheWVyOmZpZWxkLCB0ZXh0OnNldHVwLnBsYWNlaG9sZGVyVGV4dCwgZm9udFNpemU6c2V0dXAuZm9udFNpemUsIGZvbnRXZWlnaHQ6c2V0dXAuZm9udFdlaWdodCwgY29sb3I6c2V0dXAucGxhY2Vob2xkZXJDb2xvclxuXHRcdGlmIHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRcdFx0cGxhY2Vob2xkZXIuY29uc3RyYWludHMgPVxuXHRcdFx0XHRzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0XHRmaWVsZC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG5cblx0ZmllbGQub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdGZpZWxkLmFjdGl2ZSA9IHRydWVcblx0XHR0ZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0Y2xpY2tab25lID0gbmV3IExheWVyIG5hbWU6XCJmaWVsZEFjdGl2ZVwiLCBvcGFjaXR5OjBcblx0XHRpZiBzZXR1cC5pbnB1dFxuXHRcdFx0a2V5Ym9hcmQgPSBuZXcgbS5LZXlib2FyZCBhbmltYXRlZDp0cnVlLCBvdXRwdXQ6ZmllbGQsIHJldHVyblRleHQ6c2V0dXAucmV0dXJuVGV4dCwgcmV0dXJuQ29sb3I6c2V0dXAucmV0dXJuQ29sb3Jcblx0XHRcdGZpZWxkLmtleWJvYXJkID0ga2V5Ym9hcmRcblx0XHRcdGNsaWNrWm9uZS5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHRvcDowXG5cdFx0XHRcdGJvdHRvbTprZXlib2FyZC5zcGVjcy5oZWlnaHRcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRlbHNlXG5cdFx0XHRjbGlja1pvbmUuY29uc3RyYWludHMgPVxuXHRcdFx0XHR0b3A6MFxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXG5cdFx0Y2xpY2tab25lLm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGhhbmRsZXIpIC0+XG5cdFx0XHRmaWVsZC5rZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KHk6bS5kZXZpY2UuaGVpZ2h0KVxuXHRcdFx0XHR0aW1lOi40XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0VXRpbHMuZGVsYXkgLjUsIC0+XG5cdFx0XHRcdGZpZWxkLmtleWJvYXJkLmRlc3Ryb3koKVxuXHRcdFx0XHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0XHRjbGlja1pvbmUuZGVzdHJveSgpXG5cdFx0ZmllbGQuY2xpY2tab25lID0gY2xpY2tab25lXG5cblx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRmaWVsZC5rZXlib2FyZC5rZXlzLmRpc21pc3Mub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRmaWVsZC5rZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooeTptLmRldmljZS5oZWlnaHQpXG5cdFx0XHRcdFx0dGltZTouNFxuXHRcdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRVdGlscy5kZWxheSAuNSwgLT5cblx0XHRcdFx0XHRmaWVsZC5rZXlib2FyZC5kZXN0cm95KClcblx0XHRcdFx0XHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0XHRcdGNsaWNrWm9uZS5kZXN0cm95KClcblxuXG5cdFx0IyMgRGVmYXVsdCBDdXJzb3Jcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoc2V0dXAuY3Vyc29yKVxuXHRcdGlmIGtleXMubGVuZ3RoIDwgMVxuXHRcdFx0c2V0dXAuY3Vyc29yLmNvbnN0cmFpbnRzID0ge2FsaWduOlwidmVydGljYWxcIiwgbGVhZGluZzo4fVxuXHRcdFx0c2V0dXAuY3Vyc29yLndpZHRoID0gMlxuXHRcdFx0c2V0dXAuY3Vyc29yLmhlaWdodCA9IDIwXG5cblx0XHRpZiBmaWVsZC5jdXJzb3IgPT0gdW5kZWZpbmVkXG5cdFx0XHRsaXN0ZW5Ub0tleXMoZmllbGQsIGtleWJvYXJkKVxuXHRcdFx0Y3Vyc29yID0gbmV3IExheWVyIHdpZHRoOm0udXRpbHMucHgoc2V0dXAuY3Vyc29yLndpZHRoKSwgaGVpZ2h0Om0udXRpbHMucHgoc2V0dXAuY3Vyc29yLmhlaWdodCksIHN1cGVyTGF5ZXI6ZmllbGQsIG5hbWU6XCJjdXJzb3JcIiwgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJibHVlXCIpLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCgxKVxuXHRcdFx0ZmllbGQuY3Vyc29yID0gY3Vyc29yXG5cdFx0XHRjdXJzb3IuY29uc3RyYWludHMgPVxuXHRcdFx0XHRzZXR1cC5jdXJzb3IuY29uc3RyYWludHNcblxuXHRcdFx0VXRpbHMuaW50ZXJ2YWwgLjUsIC0+XG5cdFx0XHRcdGlmIGZpZWxkLmFjdGl2ZSA9PSB0cnVlXG5cdFx0XHRcdFx0aWYgZmllbGQuY3Vyc29yLm9wYWNpdHkgPT0gMFxuXHRcdFx0XHRcdFx0ZmllbGQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZmllbGQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTowKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRmaWVsZC5jdXJzb3Iub3BhY2l0eSA9IDBcblx0XHRtLmxheW91dC5zZXQoKVxuXG5cdG0ubGF5b3V0LnNldCgpXG5cdHJldHVybiBmaWVsZFxuXG5cblxuXG5saXN0ZW5Ub0tleXMgPSAoZmllbGQsIGtleWJvYXJkKSAtPlxuXHRrZXlwcmVzcyA9IChrZXkpIC0+XG5cdFx0b3JpZ2luYWxDb2xvciA9IGtleS5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRzd2l0Y2gga2V5Lm5hbWVcblx0XHRcdHdoZW4gXCJzaGlmdFwiXG5cdFx0XHRcdGtleS5pY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblx0XHRcdFx0a2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0d2hlbiBcImRlbGV0ZVwiXG5cdFx0XHRcdGtleS5pY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblx0XHRcdFx0a2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0XHRrZXkuaWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cdFx0XHR3aGVuIFwic3BhY2VcIlxuXHRcdFx0XHRrZXkuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpZiBtLmRldmljZS5uYW1lICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRib3hLZXkgPSBrZXkubmFtZVxuXHRcdFx0XHRcdGlmIGlzU2hpZnRcblx0XHRcdFx0XHRcdGJveEtleSA9IGJveEtleS50b1VwcGVyQ2FzZSgpXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAuYm94Lmh0bWwgPSBib3hLZXlcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC5tYXhZID0ga2V5Lm1heFlcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC5taWRYID0ga2V5Lm1pZFhcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGtleS5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSlcblx0XHRcdFx0XHRcdHRpbWU6LjJcblxuXHRpc0NvbW1hbmQgPSBmYWxzZVxuXHRhbGxTZWxlY3RlZCA9IGZhbHNlXG5cdGlzU2hpZnQgPSBmYWxzZVxuXHRjb2RlcyA9IHsgMTM6XCI8YnI+XCIsIDMyOlwiJm5ic3A7XCIsIDMzOlwiIVwiLCAzNDpcIlxcXCJcIiwgMzU6XCIjXCIsIDM2OlwiJFwiLCAzNzpcIiVcIiwgMzg6XCImXCIsIDM5OlwiXFwnXCIsIDQwOlwiKFwiLCA0MTpcIilcIiwgNDI6XCIqXCIsIDQzOlwiK1wiLCA0NDpcIixcIiwgNDU6XCItXCIsIDQ3OlwiL1wiLCA0NjpcIi5cIiwgNDg6XCIwXCIsIDQ5OlwiMVwiLCA1MDpcIjJcIiwgNTE6XCIzXCIsIDUyOlwiNFwiLCA1MzpcIjVcIiwgNTQ6XCI2XCIsIDU1OlwiN1wiLCA1NjpcIjhcIiwgNTc6XCI5XCIsIDU4OlwiOlwiLCA1OTpcIjtcIiwgNjA6XCI8XCIsIDYxOlwiPVwiLCA2MjpcIj5cIiwgNjM6XCI/XCIsIDY0OlwiQFwiLCA2NTpcIkFcIiwgNjY6XCJCXCIsIDY3OlwiQ1wiLCA2ODpcIkRcIiwgNjk6XCJFXCIsIDcwOlwiRlwiLCA3MTpcIkdcIiwgNzI6XCJIXCIsIDczOlwiSVwiLCA3NDpcIkpcIiwgNzU6XCJLXCIsIDc2OlwiTFwiLCA3NzpcIk1cIiwgNzg6XCJOXCIsIDc5OlwiT1wiLCA4MDpcIlBcIiwgODE6XCJRXCIsIDgyOlwiUlwiLCA4MzpcIlNcIiwgODQ6XCJUXCIsIDg1OlwiVVwiLCA4NjpcIlZcIiwgODc6XCJXXCIsIDg4OlwiWFwiLCA4OTpcIllcIiwgOTA6XCJaXCIsIDkxOlwiW1wiLCA5MjpcIlxcXFxcIiwgOTM6XCJdXCIsIDk0OlwiXlwiLCA5NTpcIl9cIiwgOTY6XCJgXCIsIDk3OlwiYVwiLCA5ODpcImJcIiwgOTk6XCJjXCIsIDEwMDpcImRcIiwgMTAxOlwiZVwiLCAxMDI6XCJmXCIsIDEwMzpcImdcIiwgMTA0OlwiaFwiLCAxMDU6XCJpXCIsIDEwNjpcImpcIiwgMTA3Olwia1wiLCAxMDg6XCJsXCIsIDEwOTpcIm1cIiwgMTEwOlwiblwiLCAxMTE6XCJvXCIsIDExMjpcInBcIiwgMTEzOlwicVwiLCAxMTQ6XCJyXCIsIDExNTpcInNcIiwgMTE2OlwidFwiLCAxMTc6XCJ1XCIsIDExODpcInZcIiwgMTE5Olwid1wiLCAxMjA6XCJ4XCIsIDEyMTpcInlcIiwgMTIyOlwielwiLCAxMjM6XCJ7XCIsIDEyNDpcInxcIiwgMTI1OlwifVwiLCAxMjY6XCJ+XCJ9XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5ZG93bicsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDI3XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRrZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooeTptLmRldmljZS5oZWlnaHQpXG5cdFx0XHRcdFx0dGltZTouMjVcblx0XHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0ZmllbGQuY2xpY2tab25lLmRlc3Ryb3koKVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDE2XG5cdFx0XHRcdGlzU2hpZnQgPSB0cnVlXG5cdFx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdFx0a2V5cHJlc3Moa2V5Ym9hcmQua2V5cy5zaGlmdClcblx0XHRcdFx0XHRmb3IgayBpbiBrZXlib2FyZC5rZXlzQXJyYXlcblx0XHRcdFx0XHRcdGsuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9IFwidXBwZXJjYXNlXCJcblx0XHRcdGlmIGFsbFNlbGVjdGVkID09IHRydWVcblx0XHRcdFx0aWYgZS5rZXlDb2RlID09IDM3IHx8IGUua2V5Q29kZSA9PSAzOVxuXHRcdFx0XHRcdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDkxXG5cdFx0XHRcdGlzQ29tbWFuZCA9IHRydWVcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAxM1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5yZXR1cm4uYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblx0XHRcdGlmIGUua2V5Q29kZSA9PSA4XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdGtleXByZXNzKGtleWJvYXJkLmtleXMuZGVsZXRlKVxuXHRcdFx0XHRpZiBhbGxTZWxlY3RlZCA9PSB0cnVlXG5cdFx0XHRcdFx0bS51dGlscy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6XCJcIl0pXG5cdFx0XHRcdFx0ZmllbGQudGV4dC5iYWNrZ3JvdW5kQ29sb3IgPVwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0XHRcdFx0aW5pdGlhbExlbmd0aCA9IGZpZWxkLnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdFx0bmV3VGV4dCA9IGZpZWxkLnRleHQuaHRtbC5zbGljZSgwLCAtMSlcblx0XHRcdFx0bS51dGlscy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRcdGVuZExlbmd0aCA9IGZpZWxkLnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdFx0aWYgaW5pdGlhbExlbmd0aCA9PSBlbmRMZW5ndGhcblx0XHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sLnNsaWNlKDAsIC02KVxuXHRcdFx0XHRcdG0udXRpbHMudXBkYXRlKGZpZWxkLnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0XHRpZiBmaWVsZC50ZXh0Lmh0bWwgPT0gXCJcIlxuXHRcdFx0XHRcdGZpZWxkLnBsYWNlaG9sZGVyLnZpc2libGUgPSB0cnVlXG5cblx0XHRcdFx0IyBHZXQgcmlkIG9mICYgbmJzcDtcblxuXHRcdFx0XHRmaWVsZC52YWx1ZSA9IG0udXRpbHMuY2xlYW4obmV3VGV4dClcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdrZXl1cCcsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDEzICYmIGtleWJvYXJkXG5cdFx0XHRcdGtleWJvYXJkLmtleXMucmV0dXJuLmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAzMiAmJiBrZXlib2FyZFxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLnNwYWNlLmJhY2tncm91bmRDb2xvciA9IFwiV2hpdGVcIlxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDggJiYga2V5Ym9hcmRcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5kZWxldGUuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdHRpbWU6LjFcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5kZWxldGUuaWNvbi5zdGF0ZXMuc3dpdGNoKFwib2ZmXCIpXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gOTFcblx0XHRcdFx0aXNDb21tYW5kID0gZmFsc2Vcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAxNlxuXHRcdFx0XHRpc1NoaWZ0ID0gZmFsc2Vcblx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRmb3IgayBpbiBrZXlib2FyZC5rZXlzQXJyYXlcblx0XHRcdFx0XHRcdGsuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9IFwibG93ZXJjYXNlXCJcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlzLnNoaWZ0LmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdFx0dGltZTouMlxuXHRcdFx0XHRcdGtleWJvYXJkLmtleXMuc2hpZnQuaWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRpZiBlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwXG5cdFx0XHRcdGlmIGtleWJvYXJkICYmIG0uZGV2aWNlLmFubWUgIT0gXCJpcGFkXCJcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGsgPSBrZXlib2FyZC5rZXlzW2NvZGVzW2Uua2V5Q29kZV0udG9Mb3dlckNhc2UoKV1cblx0XHRcdFx0XHRrLmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIpXG5cdFx0XHRcdFx0XHR0aW1lOi4yXG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5cHJlc3MnLCAoZSkgLT5cblx0XHRpZiBmaWVsZC5hY3RpdmVcblx0XHRcdGNoYXIgPSBjb2Rlc1tlLmtleUNvZGVdXG5cdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRrZXkgPSBrZXlib2FyZC5rZXlzW2NoYXJdXG5cdFx0XHRpZiBpc0NvbW1hbmQgPT0gdHJ1ZVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPT0gOTdcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMTgsIDI1NSwgLjIpXCJcblx0XHRcdFx0XHRhbGxTZWxlY3RlZCA9IHRydWVcblxuXHRcdFx0aWYgaXNDb21tYW5kID09IGZhbHNlXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwXG5cdFx0XHRcdFx0Y2hhcjIgPSBjaGFyLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdFx0a2V5ID0ga2V5Ym9hcmQua2V5c1tjaGFyMl1cblx0XHRcdFx0XHRcdGtleXByZXNzKGtleSlcblxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPj0gOTcgJiYgZS5rZXlDb2RlIDw9IDEyMiB8fCBlLmtleUNvZGUgPT0gMzJcblx0XHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdFx0a2V5cHJlc3Moa2V5KVxuXG5cdFx0XHRcdGlmIGUua2V5Q29kZSA+IDMxXG5cdFx0XHRcdFx0bmV3VGV4dCA9IGZpZWxkLnRleHQuaHRtbCArIGNoYXJcblx0XHRcdFx0XHRtLnV0aWxzLnVwZGF0ZShmaWVsZC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdFx0XHRmaWVsZC52YWx1ZSA9IG0udXRpbHMuY2xlYW4obmV3VGV4dClcbiIsIm0gPSByZXF1aXJlIFwibWF0ZXJpYWwta2l0XCJcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0XHRyZXR1cm5UZXh0OlwicmV0dXJuXCJcblx0XHRyZXR1cm5Db2xvcjpcImxpZ2h0LWtleVwiXG5cdFx0YW5pbWF0ZWQ6ZmFsc2Vcblx0XHRvdXRwdXQ6dW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG4jU2V0cyBzcGVjaWZpY2F0aW9ucyBmb3IgdGhlIEtleWJvYXJkIGJhc2VkIG9uIHRoZSBmcmFtZVxuYm9hcmRTcGVjc09iamVjdCA9XG5cdFwiaXBob25lLTVcIjpcblx0XHRoZWlnaHQ6MjE1XG5cdFx0a2V5OlxuXHRcdFx0d2lkdGg6IG0udXRpbHMucHgoMjYpXG5cdFx0XHRoZWlnaHQ6IG0udXRpbHMucHgoMzkpXG5cdFx0ZXhwYW5kZWRLZXk6IG0udXRpbHMucHgoMzkpXG5cdFx0ZXhwYW5kZWRTcGFjZXI6IG0udXRpbHMucHgoMTIpXG5cdFx0cGFkZGluZzpcblx0XHRcdHJvdzE6IG0udXRpbHMucHgoMylcblx0XHRcdHJvdzI6IG0udXRpbHMucHgoMTkpXG5cdFx0XHRyb3czOiBtLnV0aWxzLnB4KDU0KVxuXHRcdG1hcmdpblRvcDpcblx0XHRcdHJvdzE6IG0udXRpbHMucHgoMTEpXG5cdFx0XHRyb3cyOiBtLnV0aWxzLnB4KDI2KVxuXHRcdFx0cm93MzogbS51dGlscy5weCg0MSlcblx0XHRcdHJvdzQ6IG0udXRpbHMucHgoNTUpXG5cdFx0c2hpZnRJY29uOiB7eDptLnV0aWxzLnB4KDkpLCB5Om0udXRpbHMucHgoMil9XG5cdFx0ZGVsZXRlSWNvbjoge3g6bS51dGlscy5weCg3KSwgeTptLnV0aWxzLnB4KDEwKX1cblx0XHRlbW9qaUljb246IHt4Om0udXRpbHMucHgoOCksIHk6bS51dGlscy5weCg5KX1cblx0XHRzaWRlS2V5OiBtLnV0aWxzLnB4KDM2LjUpXG5cdFx0c2lkZUtleVJhZGl1czogbS51dGlscy5weCg0KVxuXHRcdHNpZGVLZXlCb3R0b206IG0udXRpbHMucHgoNTgpXG5cdFx0aVBhZERlbGV0ZU9mZnNldDogMFxuXHRcdGJvdHRvbVJvdzogOFxuXHRcdHJldHVybktleTogbS51dGlscy5weCg3NClcblx0XHRzcGFjZXI6IG0udXRpbHMucHgoNilcblx0XHRrZXlQb3BVcDpcblx0XHRcdHdpZHRoOjQ5XG5cdFx0XHRoZWlnaHQ6ODZcblx0XHRcdGJveFRvcDowXG5cdFx0cGF0aE9mZlNldDpcblx0XHRcdHg6LTdcblx0XHRcdHk6LTVcblx0XCJpcGhvbmUtNnNcIjpcblx0XHRoZWlnaHQ6MjE2XG5cdFx0a2V5OlxuXHRcdFx0d2lkdGg6IG0udXRpbHMucHgoMzEuNSlcblx0XHRcdGhlaWdodDogbS51dGlscy5weCg0Milcblx0XHRleHBhbmRlZEtleTogbS51dGlscy5weCg0Ni41KVxuXHRcdGV4cGFuZGVkU3BhY2VyOiBtLnV0aWxzLnB4KDE0KVxuXHRcdHBhZGRpbmc6XG5cdFx0XHRyb3cxOiBtLnV0aWxzLnB4KDMpXG5cdFx0XHRyb3cyOiBtLnV0aWxzLnB4KDIyKVxuXHRcdFx0cm93MzogbS51dGlscy5weCg1OSlcblx0XHRtYXJnaW5Ub3A6XG5cdFx0XHRyb3cxOiBtLnV0aWxzLnB4KDEwKVxuXHRcdFx0cm93MjogbS51dGlscy5weCgyMilcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoMzQpXG5cdFx0XHRyb3c0OiBtLnV0aWxzLnB4KDQ0KVxuXHRcdHNoaWZ0SWNvbjoge3g6bS51dGlscy5weCgxMSksIHk6bS51dGlscy5weCgyKX1cblx0XHRkZWxldGVJY29uOiB7eDptLnV0aWxzLnB4KDEwKSwgeTptLnV0aWxzLnB4KDEzKX1cblx0XHRlbW9qaUljb246IHt4Om0udXRpbHMucHgoMTEpLCB5Om0udXRpbHMucHgoMTEpfVxuXHRcdHNpZGVLZXk6IG0udXRpbHMucHgoNDIpXG5cdFx0c2lkZUtleVJhZGl1czogbS51dGlscy5weCg1KVxuXHRcdHNpZGVLZXlCb3R0b206IG0udXRpbHMucHgoNTYpXG5cdFx0aVBhZERlbGV0ZU9mZnNldDogMFxuXHRcdGJvdHRvbVJvdzogNlxuXHRcdHJldHVybktleTogbS51dGlscy5weCg4Ny41KVxuXHRcdHNwYWNlcjogbS51dGlscy5weCg2KVxuXHRcdGtleVBvcFVwOlxuXHRcdFx0d2lkdGg6NThcblx0XHRcdGhlaWdodDoxMDFcblx0XHRcdGJveFRvcDo1XG5cdFx0cGF0aE9mZlNldDpcblx0XHRcdHg6LTdcblx0XHRcdHk6LTVcblx0XCJpcGhvbmUtNnMtcGx1c1wiOlxuXHRcdGhlaWdodDoyMjZcblx0XHRrZXk6XG5cdFx0XHR3aWR0aDogbS51dGlscy5weCgzNSlcblx0XHRcdGhlaWdodDogbS51dGlscy5weCg0NSlcblx0XHRleHBhbmRlZEtleTogbS51dGlscy5weCg1MClcblx0XHRleHBhbmRlZFNwYWNlcjogbS51dGlscy5weCgyMClcblx0XHRwYWRkaW5nOlxuXHRcdFx0cm93MTogbS51dGlscy5weCg0KVxuXHRcdFx0cm93MjogbS51dGlscy5weCgyNSlcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoNjcpXG5cdFx0bWFyZ2luVG9wOlxuXHRcdFx0cm93MTogbS51dGlscy5weCg4KVxuXHRcdFx0cm93MjogbS51dGlscy5weCgxOSlcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoMzApXG5cdFx0XHRyb3c0OiBtLnV0aWxzLnB4KDQxKVxuXHRcdHNoaWZ0SWNvbjoge3g6bS51dGlscy5weCgxMyksIHk6bS51dGlscy5weCgyKX1cblx0XHRkZWxldGVJY29uOiB7eDptLnV0aWxzLnB4KDExKSwgeTptLnV0aWxzLnB4KDE0KX1cblx0XHRlbW9qaUljb246IHt4Om0udXRpbHMucHgoMTMpLCB5Om0udXRpbHMucHgoMTMpfVxuXHRcdHNpZGVLZXk6IG0udXRpbHMucHgoNDUpXG5cdFx0c2lkZUtleVJhZGl1czogbS51dGlscy5weCg1KVxuXHRcdHNpZGVLZXlCb3R0b206IG0udXRpbHMucHgoNTYpXG5cdFx0aVBhZERlbGV0ZU9mZnNldDogMFxuXHRcdGJvdHRvbVJvdzogNlxuXHRcdHJldHVybktleTogbS51dGlscy5weCg5Nylcblx0XHRzcGFjZXI6IG0udXRpbHMucHgoNilcblx0XHRrZXlQb3BVcDpcblx0XHRcdHdpZHRoOjY0XG5cdFx0XHRoZWlnaHQ6MTEyXG5cdFx0XHRib3hUb3A6OFxuXHRcdHBhdGhPZmZTZXQ6XG5cdFx0XHR4Oi03XG5cdFx0XHR5Oi01XG5cdFwiaXBhZFwiOlxuXHRcdGhlaWdodDoyNjhcblx0XHRrZXk6XG5cdFx0XHR3aWR0aDogbS51dGlscy5weCg1Nilcblx0XHRcdGhlaWdodDogbS51dGlscy5weCg1Nilcblx0XHRwYWRkaW5nOlxuXHRcdFx0cm93MTogbS51dGlscy5weCg2KVxuXHRcdFx0cm93MjogbS51dGlscy5weCgzNSlcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoNzQpXG5cdFx0bWFyZ2luVG9wOlxuXHRcdFx0cm93MTogbS51dGlscy5weCgxMClcblx0XHRcdHJvdzI6IG0udXRpbHMucHgoMTgpXG5cdFx0XHRyb3czOiBtLnV0aWxzLnB4KDI4KVxuXHRcdFx0cm93NDogbS51dGlscy5weCg0MClcblx0XHRzaGlmdEljb246IHt4Om0udXRpbHMucHgoMTgpLCB5Om0udXRpbHMucHgoMil9XG5cdFx0ZGVsZXRlSWNvbjoge3g6bS51dGlscy5weCgxOCksIHk6bS51dGlscy5weCgyMCl9XG5cdFx0ZW1vamlJY29uOiB7eDptLnV0aWxzLnB4KDE4KSwgeTptLnV0aWxzLnB4KDE4KX1cblx0XHRzaWRlS2V5OiBtLnV0aWxzLnB4KDU2KVxuXHRcdHNpZGVLZXkyOiBtLnV0aWxzLnB4KDc2KVxuXHRcdHNpZGVLZXlSYWRpdXM6IG0udXRpbHMucHgoNSlcblx0XHRzaWRlS2V5Qm90dG9tOiBtLnV0aWxzLnB4KDU2KVxuXHRcdGlQYWREZWxldGVPZmZzZXQ6IG0udXRpbHMucHgoMjgpICsgbS51dGlscy5weCg1NikgKiAyIC0gbS51dGlscy5weCgxMClcblx0XHRib3R0b21Sb3c6IDdcblx0XHRyZXR1cm5LZXk6IG0udXRpbHMucHgoMTA2KVxuXHRcdHNwYWNlcjogbS51dGlscy5weCgxMilcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cblx0IyMgS2V5Ym9hcmQgc2V0dXBcblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRib2FyZFNwZWNzID0gYm9hcmRTcGVjc09iamVjdFttLmRldmljZS5uYW1lXVxuXG5cdCMgU2V0dXAgdGhlIFNWR3Ncblx0c3ZnU2hpZnRPZmYgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5zaGlmdC5vZmYpXG5cdHN2Z1NoaWZ0T24gPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5zaGlmdC5vbilcblx0c3ZnRGVsZXRlT2ZmID0gbS51dGlscy5zdmcobS5hc3NldHMuZGVsZXRlLm9mZilcblx0c3ZnRGVsZXRlT24gPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5kZWxldGUub24pXG5cdHN2Z0Vtb2ppID0gbS51dGlscy5zdmcobS5hc3NldHMuZW1vamkpXG5cdHN2Z0tleVBvcFVwID0gbS51dGlscy5zdmcobS5hc3NldHMua2V5UG9wVXBbbS5kZXZpY2UubmFtZV0pXG5cblxuXHQjIFRoaXMgaXMgdGhlIHN1cGVyTGF5ZXIgb2YgdGhlIGtleWJvYXJkXG5cdGJvYXJkID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNEMUQ1REFcIiwgbmFtZTpcImtleWJvYXJkXCJcblx0Ym9hcmQuY29uc3RyYWludHMgPSAoaGVpZ2h0OmJvYXJkU3BlY3MuaGVpZ2h0LCB0cmFpbGluZzowLCBsZWFkaW5nOjApXG5cdGJvYXJkLnNwZWNzID0gYm9hcmRTcGVjc1xuXHRtLmxheW91dC5zZXQoYm9hcmQpXG5cblx0I1RoaXMgd2lsbCBkZXRlcmluZSBpZiBpdCBzdGFydHMgb24gdGhlIGJvdHRvbSBvciBwb3BzIHVwIGZyb20gdGhlIGJvdHRvbVxuXHRpZiBzZXR1cC5hbmltYXRlZFxuXHRcdGJvYXJkLnkgPSBtLmRldmljZS5oZWlnaHRcblx0XHRib2FyZC5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOihtYXhZOiBtLmRldmljZS5oZWlnaHQpXG5cdFx0XHR0aW1lOi4yNVxuXHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cdGVsc2Vcblx0XHRib2FyZC5tYXhZID0gbS5kZXZpY2UuaGVpZ2h0XG5cblx0I0xldHRlcnMgdG8gYmUgbWFkZVxuXHRsZXR0ZXJzQXJyYXkgPSBbXCJxXCIsIFwid1wiLCBcImVcIiwgXCJyXCIsIFwidFwiLCBcInlcIiwgXCJ1XCIsIFwiaVwiLCBcIm9cIiwgXCJwXCIsIFwiYVwiLCBcInNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwielwiLCBcInhcIiwgXCJjXCIsIFwidlwiLCAgXCJiXCIsIFwiblwiLCBcIm1cIl1cblxuXHQjVGhlc2UgYXJyYXlzIGFyZSBkZXBlbmVkZW50IG9uIHRoZSBEZXZpY2Vcblx0c2Vjb25kQXJyYXkgPSBbXVxuXHR0aGlyZEFycmF5ID0gW11cblxuXHRzd2l0Y2ggbS5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGFkXCJcblx0XHRcdHNlY29uZEFycmF5ID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiLCBcIi1cIiwgXCIvXCIsIFwiOlwiLCBcIjtcIiwgXCIoXCIsIFwiKVwiLCBcIiRcIiwgXCImXCIsIFwiQFwiLCBcInVuZG9cIiwgXCJoaWRlXCIsIFwiLlwiLCAnLCcsIFwiP1wiLCBcIiFcIiwgXCInXCIsIFwiXFxcIlwiXVxuXHRcdFx0dGhpcmRBcnJheSA9IFtcIlxcW1wiLCBcIlxcXVwiLCBcIlxce1wiLCBcIlxcfVwiLCBcIiNcIiwgXCIlXCIsIFwiXlwiLCBcIipcIiwgXCIrXCIsIFwiPVwiLCBcIl9cIiwgXCJcXFxcXCIsIFwifFwiLCBcIn5cIiwgXCI8XCIsIFwiPlwiLCBcIuKCrFwiLCBcIsKjXCIsIFwiwqVcIiwgXCJyZWRvXCIsIFwiaGlkZVwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiLCBcIlxcXCJcIl1cblx0XHRlbHNlXG5cdFx0XHRzZWNvbmRBcnJheSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIiwgXCItXCIsIFwiL1wiLCBcIjpcIiwgXCI7XCIsIFwiKFwiLCBcIilcIiwgXCIkXCIsIFwiJlwiLCBcIkBcIiwgXCJcXFwiXCIsIFwiLlwiLCAnLCcsIFwiP1wiLCBcIiFcIiwgXCInXCJdXG5cdFx0XHR0aGlyZEFycmF5ID0gW1wiXFxbXCIsIFwiXFxdXCIsIFwiXFx7XCIsIFwiXFx9XCIsIFwiI1wiLCBcIiVcIiwgXCJeXCIsIFwiKlwiLCBcIitcIiwgXCI9XCIsIFwiX1wiLCBcIlxcXFxcIiwgXCJ8XCIsIFwiflwiLCBcIjxcIiwgXCI+XCIsIFwi4oKsXCIsIFwiwqNcIiwgXCLCpVwiLCBcIuKAolwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiLCBcIlxcXCJcIl1cblxuXHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0bGV0dGVyc0FycmF5LnB1c2ggXCIsXCJcblx0XHRsZXR0ZXJzQXJyYXkucHVzaCBcIi5cIlxuXG5cdCNOdW1iZXJzIHRvIGJlIG1hZGUgKGRlcGVuZGluZyBvbiBkZXZpY2UpXG5cdG51bXNBcnJheSA9IFswLi45XVxuXG5cdCNIb2xkcyB0aGUga2V5IGxheWVycyB0aGF0IHdlIG1ha2UuIFRoaXMgd2lsbCBhbGxvd3MgdXMgdG8gcXVpY2tseSBpdGVyYXRlIHRocm91Z2ggdGhlbS5cblx0a2V5c0FycmF5ID0gW11cblxuXHQjIE9uIGlQaG9uZSwgdGhpcyBpcyB0aGUgbGl0dGxlIHRoaW5nIHRoYXQgcG9wcyB1cCB3aGVuIHlvdSB0YXAgbGV0dGVyc1xuXHRrZXlQb3BVcCA9IG5ldyBMYXllciB3aWR0aDptLnV0aWxzLnB4KGJvYXJkU3BlY3Mua2V5UG9wVXAud2lkdGgpLCBoZWlnaHQ6bS51dGlscy5weChib2FyZFNwZWNzLmtleVBvcFVwLmhlaWdodCksIHg6QC54LTE2Km0uZGV2aWNlLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwia2V5IHBvcCB1cFwiXG5cdGJveCA9IG5ldyBtLlRleHRcblx0XHR0ZXh0OlwicVwiXG5cdFx0c3VwZXJMYXllcjprZXlQb3BVcFxuXHRcdGNvbnN0cmFpbnRzOnt0b3A6Ym9hcmRTcGVjcy5rZXlQb3BVcC5ib3hUb3AsIGFsaWduOlwiaG9yaXpvbnRhbFwifVxuXHRcdGZvbnRTaXplOjM4XG5cdFx0Zm9udFdlaWdodDozMDBcblx0XHR0ZXh0QWxpZ246XCJjZW50ZXJcIlxuXHRALmNvbG9yID0gXCJ3aGl0ZVwiXG5cdHBhdGggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImtleSBwYXRoXCIsIHg6Ym9hcmRTcGVjcy5wYXRoT2ZmU2V0LngsIHk6Ym9hcmRTcGVjcy5wYXRoT2ZmU2V0LnksIHdpZHRoOm0udXRpbHMucHgoYm9hcmRTcGVjcy5rZXlQb3BVcC53aWR0aCksIGhlaWdodDptLnV0aWxzLnB4KGJvYXJkU3BlY3Mua2V5UG9wVXAuaGVpZ2h0KVxuXHRwYXRoLmh0bWwgPSBzdmdLZXlQb3BVcC5zdmdcblx0Ym9hcmQua2V5UG9wVXAgPSBrZXlQb3BVcFxuXHRib2FyZC5rZXlQb3BVcC5ib3ggPSBib3hcblxuXHRyb3dzTWFwID0gW1xuXHRcdHtcblx0XHRcdFwicGFkZGluZ1wiIDogYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzFcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogOVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzFcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwicGFkZGluZ1wiIDogYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzJcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDE4XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJwYWRkaW5nXCIgOiBib2FyZFNwZWNzLnBhZGRpbmcucm93M1xuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxOVxuXHRcdFx0XCJlbmRJbmRleFwiIDogMjVcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czXG5cdFx0fVxuXHRdXG5cblx0Zmlyc3RSb3dLZXlXaWR0aCA9IDBcblx0c2Vjb25kUm93S2V5V2lkdGggPSAwXG5cblx0Ym9hcmQua2V5cyA9IHt9XG5cdGZvciBsZXR0ZXIgaW4gbGV0dGVyc0FycmF5XG5cdFx0aW5kZXggPSBsZXR0ZXJzQXJyYXkuaW5kZXhPZihsZXR0ZXIpXG5cdFx0a2V5ID0gbmV3IExheWVyIG5hbWU6bGV0dGVyLCBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6NSptLmRldmljZS5zY2FsZSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgY29sb3I6XCJibGFja1wiLCBzaGFkb3dZOm0udXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLmtleS53aWR0aCwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRcdGJvYXJkLmtleXNbbGV0dGVyXSA9IGtleVxuXHRcdGtleVBvcFVwLmJyaW5nVG9Gcm9udCgpXG5cdFx0Ym94LmJyaW5nVG9Gcm9udCgpXG5cblxuXHRcdGlmIG0uZGV2aWNlLndpZHRoID09IDY0MFxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjI2LCBoZWlnaHQ6MzkpXG5cblx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdG0ubGF5b3V0LnNldCgpXG5cdFx0a2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IDI1ICogbS5kZXZpY2Uuc2NhbGUgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGtleS5oZWlnaHQgLSBtLnV0aWxzLnB4KDIpICsgXCJweFwiXG5cdFx0fVxuXHRcdGlmIGxldHRlciA9PSBcIixcIiB8fCBsZXR0ZXIgPT0gXCIuXCJcblx0XHRcdGV4dHJhU3ltYm9sID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5LCB3aWR0aDptLnV0aWxzLnB4KDMwKSwgaGVpZ2h0Om0udXRpbHMucHgoMzApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB5Om0udXRpbHMucHgoMTUpLCBjb2xvcjptLnV0aWxzLmNvbG9yKFwiYmxhY2tcIiksIG5hbWU6XCIhLz9cIlxuXHRcdFx0ZXh0cmFTeW1ib2wuY2VudGVyWCgpXG5cdFx0XHRleHRyYVN5bWJvbC5zdHlsZSA9IHtcblx0XHRcdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMjQpICsgXCJweFwiXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdFx0J2xpbmUtaGVpZ2h0JyA6IFwiMjBweFwiXG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCBsZXR0ZXJcblx0XHRcdFx0d2hlbiBcIixcIiB0aGVuIGV4dHJhU3ltYm9sLmh0bWwgPSBcIiFcIlxuXHRcdFx0XHR3aGVuIFwiLlwiIHRoZW4gZXh0cmFTeW1ib2wuaHRtbCA9IFwiP1wiXG5cdFx0XHRrZXkuc3R5bGVbXCJsaW5lLWhlaWdodFwiXSA9IGtleS5oZWlnaHQgKyBtLnV0aWxzLnB4KDEwKSArIFwicHhcIlxuXG5cdFx0a2V5Lmh0bWwgPSBsZXR0ZXJcblxuXHRcdGlmIGluZGV4IDw9IHJvd3NNYXBbMF0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzBdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChmaXJzdFJvd0tleVdpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzBdLm1hcmdpblRvcFxuXHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHQjSGFuZGxlIHRoZSBleHRyYSBwaXhlbHMgb24gdGhlIHRvcCByb3dcblx0XHRcdFx0aWYgaW5kZXggJSAyICE9IDBcblx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyBtLnV0aWxzLnB4KDIpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyBtLnV0aWxzLnB4KDEpXG5cdFx0XHRmaXJzdFJvd0tleVdpZHRoID0gZmlyc3RSb3dLZXlXaWR0aCArIGtleS53aWR0aFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFswXS5lbmRJbmRleCAmJiBpbmRleCA8PSByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsxXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMV0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAoc2Vjb25kUm93S2V5V2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMV0ubWFyZ2luVG9wICsga2V5LmhlaWdodFxuXHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICsgbS51dGlscy5weCgxKVxuXHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGtleS53aWR0aFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzJdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXG5cdFx0a2V5c0FycmF5LnB1c2gga2V5XG5cblx0XHRpZiBtLmRldmljZS5uYW1lICE9IFwiaXBhZFwiICYmIG0uZGV2aWNlLm5hbWUgIT0gXCJpcGFkLXByb1wiXG5cdFx0XHQjIyBpUGhvbmUgS2V5IEFuaW1hdGlvbnNcblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXG5cblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hNb3ZlLCAtPlxuXHRcdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcblxuXHRcdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRlbHNlXG5cdFx0XHQjaVBhZCBLZXkgQW5pbWF0aW9uc1xuXHRcdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRALmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdEAuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5zd2l0Y2goXCJkZWZhdWx0XCIpXG5cdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblxuXHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2hpZnRJY29uMi5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cblx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXG5cdFx0XHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0XHRcdEBuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbCArIEAubmFtZS50b1VwcGVyQ2FzZSgpXG5cdFx0XHRcdFx0bS51dGlscy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0aWYgc2V0dXAub3V0cHV0XG5cdFx0XHRcdFx0QG5ld1RleHQgPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sICsgQC5uYW1lXG5cdFx0XHRcdFx0bS51dGlscy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblxuXHRib2FyZC5rZXlzQXJyYXkgPSBrZXlzQXJyYXlcblxuXHRib2FyZC5rZXlib2FyZFN0YXRlID0gMVxuXG5cblxuXHQjIyBTSElGVCBLRVlcblxuXHRzaGlmdEtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwic2hpZnRcIiwgYm9yZGVyUmFkaXVzOmJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cywgY29sb3I6bS51dGlscy5jb2xvcihcImJsYWNrXCIpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5zaWRlS2V5LCB5Oihib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICogMilcblx0c2hpZnRLZXkuY29uc3RyYWludHMgPSAobGVhZGluZzptLnV0aWxzLnB0KGJvYXJkU3BlY3MucGFkZGluZy5yb3cxKSlcblx0c2hpZnRJY29uID0gbmV3IExheWVyIHdpZHRoOnN2Z1NoaWZ0T2ZmLndpZHRoLCBoZWlnaHQ6c3ZnU2hpZnRPZmYuaGVpZ2h0LCBzdXBlckxheWVyOnNoaWZ0S2V5LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmJvYXJkU3BlY3Muc2hpZnRJY29uLngsIHk6Ym9hcmRTcGVjcy5zaGlmdEljb24ueVxuXG5cdHNoaWZ0SWNvbi5odG1sID0gc3ZnU2hpZnRPZmYuc3ZnXG5cblx0c2hpZnRJY29uLnN0YXRlcy5hZGRcblx0XHRcIm9uXCI6XG5cdFx0XHRodG1sOiBzdmdTaGlmdE9uLnN2Z1xuXHRzaGlmdEljb24uc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHQgIHRpbWU6IC4wMVxuXG5cdHNoaWZ0S2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblx0XHR9XG5cblx0c2hpZnRLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHN3aXRjaCBib2FyZC5rZXlib2FyZFN0YXRlXG5cdFx0XHR3aGVuIDFcblx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5uZXh0KClcblx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGtleS5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0XHRib3guc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHR3aGVuIDJcblx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0a2V5Lmh0bWwgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdGtleS5uYW1lID0gdGhpcmRBcnJheVtpbmRleF1cblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDNcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIxMjNcIlxuXHRcdFx0d2hlbiAzXG5cdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdGlmIGluZGV4IDwgMjdcblx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPT0gMjZcblx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblxuXHRib2FyZC5rZXlzLnNoaWZ0ID0gc2hpZnRLZXlcblx0Ym9hcmQua2V5cy5zaGlmdC5pY29uID0gc2hpZnRJY29uXG5cblx0IyMgREVMRVRFIEtFWVxuXG5cdGRlbGV0ZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgbmFtZTpcImRlbGV0ZVwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXksIHk6KGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzMgKyBib2FyZFNwZWNzLmtleS5oZWlnaHQgKiAyIC0gYm9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0KVxuXG5cblx0ZGVsZXRlS2V5LmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nOm0udXRpbHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpLzIpXG5cdGRlbGV0ZUljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpkZWxldGVLZXksIHdpZHRoOm0udXRpbHMucHgoMjQpLCBoZWlnaHQ6bS51dGlscy5weCgxOCksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6Ym9hcmRTcGVjcy5kZWxldGVJY29uLngsIHk6Ym9hcmRTcGVjcy5kZWxldGVJY29uLnlcblxuXHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0ZGVsZXRlS2V5LndpZHRoID0gZGVsZXRlS2V5LndpZHRoICsgbS51dGlscy5weCg1KVxuXG5cdGRlbGV0ZUljb24uc3RhdGVzLmFkZFxuXHRcdFwib25cIjpcblx0XHRcdGh0bWw6IHN2Z0RlbGV0ZU9uLnN2Z1xuXG5cdGRlbGV0ZUljb24uc3RhdGVzLmFkZFxuXHRcdG9mZjpcblx0XHRcdGh0bWw6IHN2Z0RlbGV0ZU9mZi5zdmdcblxuXG5cdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cblx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvZmZcIilcblxuXHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0aW5pdGlhbExlbmd0aCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwubGVuZ3RoXG5cdFx0XHRuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbC5zbGljZSgwLCAtMSlcblx0XHRcdG0udXRpbHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdGVuZExlbmd0aCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwubGVuZ3RoXG5cdFx0XHRpZiBpbml0aWFsTGVuZ3RoID09IGVuZExlbmd0aFxuXHRcdFx0XHRuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbC5zbGljZSgwLCAtNilcblx0XHRcdFx0bS51dGlscy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0aWYgc2V0dXAub3V0cHV0LnRleHQuaHRtbCA9PSBcIlwiXG5cdFx0XHRcdHNldHVwLm91dHB1dC5wbGFjZWhvbGRlci52aXNpYmxlID0gdHJ1ZVxuXG5cblxuXHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cblx0Ym9hcmQua2V5cy5kZWxldGUgPSBkZWxldGVLZXlcblx0Ym9hcmQua2V5cy5kZWxldGUuaWNvbiA9IGRlbGV0ZUljb25cblxuXHQjIyBFWFRSQSBLRVlTXG5cblx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdGtleWJvYXJkS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJkaXNtaXNzXCIsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsIGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOm0udXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXlcblx0XHRrZXlib2FyZEtleS5jb25zdHJhaW50cyA9IHt0cmFpbGluZ0VkZ2VzOmRlbGV0ZUtleSwgYm90dG9tOmJvYXJkU3BlY3MuYm90dG9tUm93fVxuXHRcdGtleWJvYXJkSWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmtleWJvYXJkS2V5LCB3aWR0aDptLnV0aWxzLnB4KDMyLjUpLCBoZWlnaHQ6bS51dGlscy5weCgyMy41KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGtleWJvYXJkSWNvbi5odG1sID0gbS5hc3NldHMua2V5Ym9hcmRcblx0XHRrZXlib2FyZEljb24uY2VudGVyKClcblxuXHRcdGJvYXJkLmtleXMuZGlzbWlzcyA9IGtleWJvYXJkS2V5XG5cblx0XHRzaGlmdEtleTIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcInNoaWZ0XCIsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsY29sb3I6bS51dGlscy5jb2xvcihcImJsYWNrXCIpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5MiwgaGVpZ2h0OmJvYXJkU3BlY3Muc2lkZUtleVxuXHRcdHNoaWZ0S2V5Mi5jb25zdHJhaW50cyA9ICh0cmFpbGluZ0VkZ2VzOmRlbGV0ZUtleSwgYm90dG9tRWRnZXM6c2hpZnRLZXkpXG5cdFx0c2hpZnRJY29uMiA9IG5ldyBMYXllciB3aWR0aDptLnV0aWxzLnB4KDIwKSwgaGVpZ2h0Om0udXRpbHMucHgoMTkpLCBzdXBlckxheWVyOnNoaWZ0S2V5MiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLnNoaWZ0SWNvbi54K20udXRpbHMucHgoMTApLCB5OmJvYXJkU3BlY3Muc2hpZnRJY29uLnlcblx0XHRzaGlmdEljb24yLmh0bWwgPSBtLmFzc2V0cy5zaGlmdC5vZmZcblxuXHRcdHNoaWZ0S2V5Mi5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiBtLnV0aWxzLnB4KDE2KSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDogKGJvYXJkU3BlY3Mua2V5LmhlaWdodCkgKyBcInB4XCJcblxuXHRcdH1cblxuXG5cdFx0c2hpZnRJY29uMi5zdGF0ZXMuYWRkXG5cdFx0XHRcIm9uXCI6XG5cdFx0XHRcdGh0bWw6IHN2Z1NoaWZ0T24uc3ZnXG5cdFx0c2hpZnRJY29uMi5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0ICB0aW1lOiAuMDFcblxuXHRcdHNoaWZ0SWNvbjIub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZVxuXHRcdFx0XHR3aGVuIDFcblx0XHRcdFx0XHRzaGlmdEljb24uc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGtleS5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdFx0XHRib3guc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdHdoZW4gMlxuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAzXG5cdFx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0d2hlbiAzXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblxuXG5cdFx0bnVtS2V5MiA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwibnVtXCIsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsIGNvbG9yOm0udXRpbHMuY29sb3IoXCJibGFja1wiKSwgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleTIsIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0XHRudW1LZXkyLmh0bWwgPSBcIi4/MTIzXCJcblx0XHRudW1LZXkyLnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblxuXHRcdH1cblx0XHRudW1LZXkyLmNvbnN0cmFpbnRzID0ge3RyYWlsaW5nOltrZXlib2FyZEtleSwgMTJdLCBib3R0b21FZGdlczprZXlib2FyZEtleX1cblxuXHRcdG51bUtleTIub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZVxuXHRcdFx0XHR3aGVuIDFcblx0XHRcdFx0XHQjIyBDaGFuZ2UgTGV0dGVyc1xuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPCAyN1xuXHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJ1bmRvXCJcblx0XHRcdFx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKiAyICsgYm9hcmRTcGVjcy5zcGFjZXJcblx0XHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXNpemVcIl0gPSBtLnV0aWxzLnB4KDE3KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNDAwXG5cdFx0XHRcdFx0XHRcdGlmIHNlY29uZEFycmF5W2luZGV4XSA9PSBcImhpZGVcIlxuXHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPT0gMjZcblx0XHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRcdFx0XHQjIyBIYW5kbGUgbnVtIGtleXMgYW5kIHNoaWZ0IGtleXNcblx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiQUJDXCJcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gZmFsc2VcblxuXHRcdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiQUJDXCJcblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBrZXkuaHRtbCA9PSBcInVuZG9cIiB8fCBcInJlZG9cIlxuXHRcdFx0XHRcdFx0XHRrZXkud2lkdGggPSBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXNpemVcIl0gPSBtLnV0aWxzLnB4KDI1KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDMwMFxuXHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRrZXkubmFtZSA9IGxldHRlcnNBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGtleS5odG1sID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPiAyNVxuXHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdFx0bnVtS2V5Mi5odG1sID0gXCIuPzEyM1wiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMVxuXG5cblx0IyMgTlVNIEtFWSB0b3A6bS51dGlscy5wdChib2FyZFNwZWNzLm1hcmdpblRvcC5yb3c0ICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0KjMpXG5cblx0bnVtS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJudW1cIiwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoNSksIGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOm0udXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRudW1LZXkuY29uc3RyYWludHMgPSAoYm90dG9tOmJvYXJkU3BlY3MuYm90dG9tUm93LCBsZWFkaW5nRWRnZXM6c2hpZnRLZXkpXG5cdGlmIG0uZGV2aWNlLm5hbWUgIT0gXCJpcGFkXCIgJiYgbS5kZXZpY2UubmFtZSAhPSBcImlwYWQtcHJvXCJcblx0XHRudW1LZXkuaHRtbCA9IFwiMTIzXCJcblx0ZWxzZVxuXHRcdG51bUtleS5odG1sID0gXCIuPzEyM1wiXG5cdG51bUtleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogbS51dGlscy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblx0fVxuXG5cdG51bUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZVxuXHRcdFx0d2hlbiAxXG5cdFx0XHRcdCMjIENoYW5nZSBMZXR0ZXJzXG5cdFx0XHRcdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0XHRcdFx0d2hlbiBcImlwYWRcIlxuXHRcdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4IDwgMjdcblx0XHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJ1bmRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGtleS53aWR0aCAqIDIgKyBib2FyZFNwZWNzLnNwYWNlclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC1zaXplXCJdID0gbS51dGlscy5weCgxNykgKyBcInB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNDAwXG5cdFx0XHRcdFx0XHRcdFx0aWYgc2Vjb25kQXJyYXlbaW5kZXhdID09IFwiaGlkZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0c2hpZnRJY29uMi52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdFx0bnVtS2V5Mi5odG1sID0gXCJBQkNcIlxuXHRcdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRyb3dJbmRleCA9IDBcblx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gMFxuXHRcdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDE5XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRcdFx0XHRcdFx0IyMgMm5kIFJvd1xuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDkgJiYgaW5kZXggPCAyMFxuXHRcdFx0XHRcdFx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChzZWNvbmRSb3dLZXlXaWR0aClcblx0XHRcdFx0XHRcdFx0XHRyb3dJbmRleCsrXG5cdFx0XHRcdFx0XHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGJvYXJkU3BlY3Mua2V5LndpZHRoXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDIwXG5cdFx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6W3NoaWZ0S2V5LCBtLnV0aWxzLnB0KGJvYXJkU3BlY3MuZXhwYW5kZWRTcGFjZXIpXX1cblx0XHRcdFx0XHRcdFx0XHRtLmxheW91dC5zZXQoKVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDE5XG5cdFx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5leHBhbmRlZEtleVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDIwXG5cdFx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6W2tleXNBcnJheVtpbmRleCAtIDFdLCBtLnV0aWxzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKV19XG5cdFx0XHRcdFx0XHRcdFx0bS5sYXlvdXQuc2V0KClcblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPiAyNFxuXHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cblxuXHRcdFx0XHQjIyBIYW5kbGUgbnVtIGtleXMgYW5kIHNoaWZ0IGtleXNcblx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gZmFsc2VcblxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpZiBtLmRldmljZS5uYW1lICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSAwXG5cdFx0XHRcdFx0cm93SW5kZXggPSAwXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkud2lkdGggPSBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPiA5ICYmIGluZGV4IDwgMTlcblx0XHRcdFx0XHRcdFx0a2V5LnggPSByb3dzTWFwWzFdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHNlY29uZFJvd0tleVdpZHRoKVxuXHRcdFx0XHRcdFx0XHRrZXkueSA9IHJvd3NNYXBbMV0ubWFyZ2luVG9wICsga2V5LmhlaWdodFxuXHRcdFx0XHRcdFx0XHRyb3dJbmRleCsrXG5cdFx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gc2Vjb25kUm93S2V5V2lkdGggKyBrZXkud2lkdGhcblx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDE5XG5cdFx0XHRcdFx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPj0gMTlcblx0XHRcdFx0XHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0XHRcdFx0XHRrZXkueCA9IHJvd3NNYXBbMl0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0XHRcdFx0XHRrZXkueSA9IHJvd3NNYXBbMl0ubWFyZ2luVG9wICsga2V5LmhlaWdodCAqIDJcblx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge31cblxuXHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRpZiBrZXkuaHRtbCA9PSBcInVuZG9cIiB8fCBcInJlZG9cIlxuXHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5rZXkud2lkdGhcblx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IG0udXRpbHMucHgoMjUpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDMwMFxuXHRcdFx0XHRcdGtleS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGtleS5uYW1lID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdGtleS5odG1sID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdGlmIGluZGV4ID4gMjVcblx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiXCJcblx0XHRcdFx0c2hpZnRJY29uLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCJcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0IyMgRU1PSkkgS0VZXG5cblx0ZW1vamlLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImVtb2ppXCIsIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdGVtb2ppS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbUVkZ2VzOm51bUtleSwgbGVhZGluZzpbbnVtS2V5LCA2XSlcblx0ZW1vamlJY29uID0gbmV3IExheWVyIHdpZHRoOnN2Z0Vtb2ppLndpZHRoLCBoZWlnaHQ6c3ZnRW1vamkuaGVpZ2h0LCBzdXBlckxheWVyOmVtb2ppS2V5LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmJvYXJkU3BlY3MuZW1vamlJY29uLngsIHk6Ym9hcmRTcGVjcy5lbW9qaUljb24ueVxuXHRlbW9qaUljb24uaHRtbCA9IHN2Z0Vtb2ppLnN2Z1xuXG5cblxuXHQjIyBSRVRVUk4gS0VZXG5cblx0cmV0dXJuS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvciksIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcInJldHVyblwiLCB3aWR0aDpib2FyZFNwZWNzLnJldHVybktleSwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRpZiBzZXR1cC5yZXR1cm5Db2xvciAhPSBcImxpZ2h0LWtleVwiXG5cdFx0cmV0dXJuS2V5LmNvbG9yID0gZXhwb3J0cy5zZXRUZXh0Q29sb3IobS51dGlscy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvcikpXG5cdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRyZXR1cm5LZXkuY29uc3RyYWludHMgPSAodHJhaWxpbmdFZGdlczpkZWxldGVLZXksIHRvcDptLnV0aWxzLnB0KGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzIgKyBib2FyZFNwZWNzLmtleS5oZWlnaHQpIClcblx0ZWxzZVxuXHRcdHJldHVybktleS5jb25zdHJhaW50cyA9ICh0cmFpbGluZzptLnV0aWxzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKS8yLCBib3R0b21FZGdlczpudW1LZXkpXG5cdHJldHVybktleS5odG1sID0gc2V0dXAucmV0dXJuVGV4dFxuXHRyZXR1cm5LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICsgXCJweFwiXG5cblx0fVxuXHRtLmxheW91dC5zZXQoKVxuXG5cdHN0b3JlZFRleHRDb2xvciA9IHJldHVybktleS5jb2xvclxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0cmV0dXJuS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdHJldHVybktleS5jb2xvciA9IG0udXRpbHMuY29sb3IoXCJibGFja1wiKVxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKHNldHVwLnJldHVybkNvbG9yKVxuXHRcdHJldHVybktleS5jb2xvciA9IHN0b3JlZFRleHRDb2xvclxuXG5cdGJvYXJkLmtleXMucmV0dXJuID0gcmV0dXJuS2V5XG5cblxuXHQjIyBTUEFDRSBLRVlcblxuXHRzcGFjZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiLCBuYW1lOlwic3BhY2VcIiwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXG5cdGlmIG0uZGV2aWNlLm5hbWUgIT0gXCJpcGFkXCJcblx0XHRzcGFjZUtleS5jb25zdHJhaW50cyA9IChib3R0b21FZGdlczpudW1LZXksIGxlYWRpbmc6W2Vtb2ppS2V5LCBtLnV0aWxzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKV0sIHRyYWlsaW5nOltyZXR1cm5LZXksIGJvYXJkU3BlY3Muc3BhY2VyXSlcblx0XHRzcGFjZUtleS5odG1sID0gXCJzcGFjZVwiXG5cdFx0c3BhY2VLZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogbS51dGlscy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdFx0fVxuXHRlbHNlXG5cdFx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltlbW9qaUtleSwgbS51dGlscy5wdChib2FyZFNwZWNzLnNwYWNlcildLCB0cmFpbGluZzpbbnVtS2V5MiwgYm9hcmRTcGVjcy5zcGFjZXJdKVxuXHRib2FyZC5rZXlzW1wiJm5ic3A7XCJdID0gc3BhY2VLZXlcblx0Ym9hcmQua2V5cy5zcGFjZSA9IHNwYWNlS2V5XG5cdG0ubGF5b3V0LnNldCgpXG5cblxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cblx0c3BhY2VLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNwYWNlS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0QG5ld1RleHQgPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sICsgXCImbmJzcDtcIlxuXHRcdFx0bS51dGlscy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblxuXHRyZXR1cm4gYm9hcmRcbiIsIiMgVXRpbHNcblxubSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0YW5pbWF0aW9uczoge1xuXHRcdHRhcmdldDp1bmRlZmluZWRcblx0XHRjb25zdHJhaW50czogdW5kZWZpbmVkXG5cdFx0Y3VydmUgOiBcImVhc2UtaW4tb3V0XCJcblx0XHRjdXJ2ZU9wdGlvbnM6IHVuZGVmaW5lZFxuXHRcdHRpbWU6MVxuXHRcdGRlbGF5OjBcblx0XHRyZXBlYXQ6dW5kZWZpbmVkXG5cdFx0Y29sb3JNb2RlbDp1bmRlZmluZWRcblx0XHRzdGFnZ2VyOnVuZGVmaW5lZFxuXHRcdGZhZGVPdXQ6ZmFsc2Vcblx0XHRmYWRlSW46ZmFsc2Vcblx0fVxufVxuXG5sYXlvdXQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0dGFyZ2V0TGF5ZXJzID0gW11cblx0Ymx1ZXByaW50ID0gW11cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zW2ldXG5cblx0cHJpbnQgc2V0dXAudGFyZ2V0XG5cblx0aWYgc2V0dXAudGFyZ2V0XG5cdFx0aWYgc2V0dXAudGFyZ2V0Lmxlbmd0aFxuXHRcdFx0dGFyZ2V0TGF5ZXJzID0gc2V0dXAudGFyZ2V0XG5cdFx0ZWxzZVxuXHRcdFx0dGFyZ2V0TGF5ZXJzLnB1c2ggc2V0dXAudGFyZ2V0XG5cdGVsc2Vcblx0XHR0YXJnZXRMYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cblx0aWYgc2V0dXAudGFyZ2V0XG5cdFx0aWYgc2V0dXAuY29uc3RyYWludHNcblx0XHRcdGZvciBuZXdDb25zdHJhaW50IGluIE9iamVjdC5rZXlzKHNldHVwLmNvbnN0cmFpbnRzKVxuXHRcdFx0XHRzZXR1cC50YXJnZXQuY29uc3RyYWludHNbbmV3Q29uc3RyYWludF0gPSBzZXR1cC5jb25zdHJhaW50c1tuZXdDb25zdHJhaW50XVxuXG5cblx0I1RyYW5zbGF0ZSBuZXcgY29uc3RyYWludHNcblx0Zm9yIGxheWVyLCBpbmRleCBpbiB0YXJnZXRMYXllcnNcblx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSB7fVxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzXG5cblx0XHRcdHByb3BzID0ge31cblx0XHRcdGxheWVyLnN1cGVyRnJhbWUgPSB7fVxuXG5cdFx0XHRpZiBsYXllci5zdXBlckxheWVyXG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0ID0gbGF5ZXIuc3VwZXJMYXllci5oZWlnaHRcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS53aWR0aCA9IGxheWVyLnN1cGVyTGF5ZXIud2lkdGhcblx0XHRcdGVsc2Vcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgPSBtLmRldmljZS5oZWlnaHRcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS53aWR0aCA9IG0uZGV2aWNlLndpZHRoXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkICYmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGggPSB7fVxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgIT0gdW5kZWZpbmVkICYmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodCA9IHt9XG5cblx0XHRcdCMgU2l6ZSBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMud2lkdGggIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy53aWR0aClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHMud2lkdGggPSBsYXllci53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5oZWlnaHQgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLmhlaWdodCA9IG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0KVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5oZWlnaHRcblxuXHRcdFx0IyBQb3NpdGlvbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0I0lmIGl0J3MgYSBudW1iZXJgXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMubGVhZGluZywgMTApXG5cdFx0XHRcdFx0cHJvcHMueCA9IG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMubGVhZGluZylcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1swXS5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGggKyBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMV0pXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYID0gcHJvcHMueFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0I0lmIGl0J3MgYSBudW1iZXJcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50cmFpbGluZykgLSBwcm9wcy53aWR0aFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnggLSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzFdKSAtIHByb3BzLndpZHRoXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguY2FsY3VsYXRlZFBvc2l0aW9uWCA9IHByb3BzLnhcblxuXHRcdFx0XHQjI3BlcmZvcm0gYXV0b3NpemVcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFhcblx0XHRcdFx0cHJvcHMud2lkdGggPSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguY2FsY3VsYXRlZFBvc2l0aW9uWCAtIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFggKyBwcm9wcy53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50b3AsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnkgPSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRvcClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcC5jYWxjdWxhdGVkUG9zaXRpb24ueSArIGxheWVyLmNvbnN0cmFpbnRzLnRvcC5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0XG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHQgKyBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRvcFsxXSlcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSA9IHByb3BzLnlcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5ib3R0b20sIDEwKVxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAtIG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tKSAtIHByb3BzLmhlaWdodFxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b20uY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSBwcm9wcy5oZWlnaHRcblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b21bMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSAgbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy5ib3R0b21bMV0pIC0gcHJvcHMuaGVpZ2h0XG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5jYWxjdWxhdGVkUG9zaXRpb25ZID0gcHJvcHMueVxuXHRcdFx0XHQjIyBwZXJmb3JtIGF1dG9zaXplXG5cdFx0XHRcdHByb3BzLmhlaWdodCA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuY2FsY3VsYXRlZFBvc2l0aW9uWSAtIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuc3RhcnRZICsgcHJvcHMuaGVpZ2h0XG5cdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WVxuXG5cblx0XHRcdCMgQWxpZ25tZW50IGNvbnN0cmFpbnRzXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiAhPSB1bmRlZmluZWRcblx0XHRcdFx0I1NldCB0aGUgY2VudGVyaW5nIGZyYW1lXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLnN1cGVyRnJhbWUud2lkdGggLyAyIC0gcHJvcHMud2lkdGggLyAyXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0IC8gMiAtIHByb3BzLmhlaWdodCAvIDJcblxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiA9PSBcImNlbnRlclwiXG5cdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLnN1cGVyRnJhbWUud2lkdGggLyAyIC0gcHJvcHMud2lkdGggLyAyXG5cdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0IC8gMiAtIHByb3BzLmhlaWdodCAvIDJcblxuXG5cdFx0XHQjIENlbnRlcmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyAobGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGggLSBwcm9wcy53aWR0aCkgLyAyXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyAobGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodCAtIHByb3BzLmhlaWdodCkgLyAyXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueCArIChsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoIC0gcHJvcHMud2lkdGgpIC8gMlxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgKGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0IC0gcHJvcHMuaGVpZ2h0KSAvIDJcblxuXHRcdFx0IyBBbGlnbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi54XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nRWRnZXMgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi54IC0gcHJvcHMud2lkdGggKyBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aFxuXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcEVkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudG9wRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnlcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueSAtIHByb3BzLmhlaWdodCArIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHRcblxuXG5cdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSBwcm9wc1xuXHRcdGVsc2Vcblx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbiA9IGxheWVyLnByb3BzXG5cblx0XHRibHVlcHJpbnQucHVzaCBsYXllclxuXG5cblx0cmV0dXJuIGJsdWVwcmludFxuXG5leHBvcnRzLnNldCA9IChhcnJheSkgLT5cblx0c2V0dXAgPSB7fVxuXHRwcm9wcyA9IHt9XG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGJsdWVwcmludCA9IGxheW91dChhcnJheSlcblxuXHRmb3IgbGF5ZXIsIGluZGV4IGluIGJsdWVwcmludFxuXHRcdGZvciBrZXkgaW4gT2JqZWN0LmtleXMobGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uKVxuXHRcdFx0bGF5ZXJba2V5XSA9IGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbltrZXldXG5cbmV4cG9ydHMuYW5pbWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSB7fVxuXHRwcm9wcyA9IHt9XG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGJsdWVwcmludCA9IGxheW91dChhcnJheSlcblxuXHRmb3IgbGF5ZXIsIGluZGV4IGluIGJsdWVwcmludFxuXHRcdCNUaW1pbmdcblx0XHRkZWxheSA9IHNldHVwLmRlbGF5XG5cdFx0aWYgc2V0dXAuc3RhZ2dlclxuXHRcdFx0c3RhZyA9IHNldHVwLnN0YWdnZXJcblx0XHRcdGRlbGF5ID0gKChpbmRleCkgKiBzdGFnKSArIGRlbGF5XG5cblx0XHRpZiBzZXR1cC5mYWRlT3V0XG5cdFx0XHRpZiBsYXllciA9PSBzZXR1cC5mYWRlT3V0XG5cdFx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5vcGFjaXR5ID0gMFxuXG5cdFx0aWYgc2V0dXAuZmFkZUluXG5cdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24ub3BhY2l0eSA9IDFcblxuXHRcdGxheWVyLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uXG5cdFx0XHR0aW1lOnNldHVwLnRpbWVcblx0XHRcdGRlbGF5OmRlbGF5XG5cdFx0XHRjdXJ2ZTpzZXR1cC5jdXJ2ZVxuXHRcdFx0cmVwZWF0OnNldHVwLnJlcGVhdFxuXHRcdFx0Y29sb3JNb2RlbDpzZXR1cC5jb2xvck1vZGVsXG5cdFx0XHRjdXJ2ZU9wdGlvbnM6c2V0dXAuY3VydmVPcHRpb25zXG5cblx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSBwcm9wc1xuIiwibSA9IHJlcXVpcmUgXCJtYXRlcmlhbC1raXRcIlxuXG4jIEJ1aWxkIExpYnJhcnkgIFByb3BlcnRpZXNcbmxheWVyID0gbmV3IExheWVyXG5leHBvcnRzLmxheWVyUHJvcHMgPSBPYmplY3Qua2V5cyhsYXllci5wcm9wcylcbmV4cG9ydHMubGF5ZXJQcm9wcy5wdXNoIFwic3VwZXJMYXllclwiXG5leHBvcnRzLmxheWVyUHJvcHMucHVzaCBcImNvbnN0cmFpbnRzXCJcbmV4cG9ydHMubGF5ZXJTdHlsZXMgPSBPYmplY3Qua2V5cyhsYXllci5zdHlsZSlcbmxheWVyLmRlc3Ryb3koKVxuXG5leHBvcnRzLmFzc2V0cyA9IHtcblx0Ymx1ZXRvb3RoOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzdweCcgaGVpZ2h0PScxM3B4JyB2aWV3Qm94PScwIDAgOCAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5CbHVldG9vdGg8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdTdGF0dXMtSWNvbnMtKFdoaXRlKScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTEzNy4wMDAwMDAsIDAuMDAwMDAwKScgZmlsbD0nI0ZGRic+XG5cdFx0XHRcdFx0PHBhdGggZD0nTTE0MC41LDE0LjUgTDE0NSwxMC4yNSBMMTQxLjgsNy41IEwxNDUsNC43NSBMMTQwLjUsMC41IEwxNDAuNSw2LjA3MTQyODU3IEwxMzcuOCwzLjc1IEwxMzcsNC41IEwxNDAuMjU4MzMzLDcuMzc1IEwxMzcsMTAuMjUgTDEzNy44LDExIEwxNDAuNSw4LjY3ODU3MTQzIEwxNDAuNSwxNC41IFogTTE0MS41LDMgTDE0My4zNjY2NjcsNC43NSBMMTQxLjUsNi4yNSBMMTQxLjUsMyBaIE0xNDEuNSw4LjUgTDE0My4zNjY2NjcsMTAuMjUgTDE0MS41LDEyIEwxNDEuNSw4LjUgWicgaWQ9J0JsdWV0b290aCc+PC9wYXRoPlxuXHRcdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0YmF0dGVyeUhpZ2ggOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzI1cHgnIGhlaWdodD0nMTBweCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1N5bWJvbHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNTA2NzQ0LDYuNSBDMzQ2LjIyNjg3Nyw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjMwMjI1LDE0IDM0Ni41MDY3NDQsMTQgTDM2NS45OTMyNTYsMTQgQzM2Ni4yNzMxMjMsMTQgMzY2LjUsMTMuNzgzNjI4IDM2Ni41LDEzLjUwNzkwNDEgTDM2Ni41LDYuOTkyMDk1OTUgQzM2Ni41LDYuNzIwMzE4ODYgMzY2LjI2OTc3NSw2LjUgMzY1Ljk5MzI1Niw2LjUgTDM0Ni41MDY3NDQsNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRiYXR0ZXJ5TWlkIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyNXB4JyBoZWlnaHQ9JzEwcHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL0JsYWNrL0xvdy1Qb3dlcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNTA5NjUsNi41IEMzNDYuMjI4MTc4LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMjc2NTMsMTQgMzQ2LjUwOTY1LDE0IEwzNTYsMTQgTDM1Niw2LjUgTDM0Ni41MDk2NSw2LjUgWicgaWQ9J0JhdHRlcnknPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJhdHRlcnlMb3cgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzI1cHgnIGhlaWdodD0nMTBweCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1N5bWJvbHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svMjAlJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzQ1LjAwMDAwMCwgLTUuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNDkwNDc5LDYuNSBDMzQ2LjIxOTU5NSw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjE1MDU3LDE0IDM0Ni40OTA0NzksMTQgTDM1MCwxNCBMMzUwLDYuNSBMMzQ2LjQ5MDQ3OSw2LjUgWicgaWQ9J0JhdHRlcnknPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJhbm5lckJHIDoge1xuXHRcdFwiaXBob25lLTVcIjogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzMyMHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzMjAgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5pcGhvbmU1PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTUvNVMvNUMnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMMzIwLDAgTDMyMCw2OCBMMCw2OCBMMCwwIFogTTE0Miw2MS4wMDQ4ODE1IEMxNDIsNTkuODk3NjE2IDE0Mi44OTYyNzksNTkgMTQ0LjAwMjQsNTkgTDE3Ni45OTc2LDU5IEMxNzguMTAzNDk1LDU5IDE3OSw1OS44OTM4OTk4IDE3OSw2MS4wMDQ4ODE1IEwxNzksNjEuOTk1MTE4NSBDMTc5LDYzLjEwMjM4NCAxNzguMTAzNzIxLDY0IDE3Ni45OTc2LDY0IEwxNDQuMDAyNCw2NCBDMTQyLjg5NjUwNSw2NCAxNDIsNjMuMTA2MTAwMiAxNDIsNjEuOTk1MTE4NSBMMTQyLDYxLjAwNDg4MTUgWicgaWQ9J2lwaG9uZTUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnNcIjogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMzc1cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDM3NSA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZDwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjMuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU4LjAwMDAwMCwgNy4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwxNiBMMzc1LDE2IEwzNzUsODQgTDAsODQgTDAsMTYgWiBNMTY5LDc3LjAwNDg4MTUgQzE2OSw3NS44OTc2MTYgMTY5Ljg5NjI3OSw3NSAxNzEuMDAyNCw3NSBMMjAzLjk5NzYsNzUgQzIwNS4xMDM0OTUsNzUgMjA2LDc1Ljg5Mzg5OTggMjA2LDc3LjAwNDg4MTUgTDIwNiw3Ny45OTUxMTg1IEMyMDYsNzkuMTAyMzg0IDIwNS4xMDM3MjEsODAgMjAzLjk5NzYsODAgTDE3MS4wMDI0LDgwIEMxNjkuODk2NTA1LDgwIDE2OSw3OS4xMDYxMDAyIDE2OSw3Ny45OTUxMTg1IEwxNjksNzcuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nNDE0cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDQxNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kIENvcHk8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC00My4wMDAwMDAsIC03NC4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDQzLjAwMDAwMCwgNzQuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEw0MTQsMCBMNDE0LDY4IEwwLDY4IEwwLDAgWiBNMTg5LDYxLjAwNDg4MTUgQzE4OSw1OS44OTc2MTYgMTg5Ljg5NjI3OSw1OSAxOTEuMDAyNCw1OSBMMjIzLjk5NzYsNTkgQzIyNS4xMDM0OTUsNTkgMjI2LDU5Ljg5Mzg5OTggMjI2LDYxLjAwNDg4MTUgTDIyNiw2MS45OTUxMTg1IEMyMjYsNjMuMTAyMzg0IDIyNS4xMDM3MjEsNjQgMjIzLjk5NzYsNjQgTDE5MS4wMDI0LDY0IEMxODkuODk2NTA1LDY0IDE4OSw2My4xMDYxMDAyIDE4OSw2MS45OTUxMTg1IEwxODksNjEuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQtQ29weSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBhZFwiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nNzY4cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDc2OCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5pcGFkLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVBvcnRyYWl0JyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMNzY4LDAgTDc2OCw2OCBMMCw2OCBMMCwwIFogTTM2Niw2MS4wMDQ4ODE1IEMzNjYsNTkuODk3NjE2IDM2Ni44OTYyNzksNTkgMzY4LjAwMjQsNTkgTDQwMC45OTc2LDU5IEM0MDIuMTAzNDk1LDU5IDQwMyw1OS44OTM4OTk4IDQwMyw2MS4wMDQ4ODE1IEw0MDMsNjEuOTk1MTE4NSBDNDAzLDYzLjEwMjM4NCA0MDIuMTAzNzIxLDY0IDQwMC45OTc2LDY0IEwzNjguMDAyNCw2NCBDMzY2Ljg5NjUwNSw2NCAzNjYsNjMuMTA2MTAwMiAzNjYsNjEuOTk1MTE4NSBMMzY2LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcG9ydHJhaXQnPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGFkLXByb1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMTAyNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAxMDI0IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPHRpdGxlPmlwYWQtcHJvLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVByby1Qb3J0cmFpdCcgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDEwMjQsMCBMMTAyNCw2OCBMMCw2OCBMMCwwIFogTTQ5NCw2MS4wMDQ4ODE1IEM0OTQsNTkuODk3NjE2IDQ5NC44OTYyNzksNTkgNDk2LjAwMjQsNTkgTDUyOC45OTc2LDU5IEM1MzAuMTAzNDk1LDU5IDUzMSw1OS44OTM4OTk4IDUzMSw2MS4wMDQ4ODE1IEw1MzEsNjEuOTk1MTE4NSBDNTMxLDYzLjEwMjM4NCA1MzAuMTAzNzIxLDY0IDUyOC45OTc2LDY0IEw0OTYuMDAyNCw2NCBDNDk0Ljg5NjUwNSw2NCA0OTQsNjMuMTA2MTAwMiA0OTQsNjEuOTk1MTE4NSBMNDk0LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcHJvLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHR9XG5cdGVtb2ppQ29kZXM6IFtcIjk4IDgwXCIsIFwiOTggQUNcIiwgXCI5OCA4MVwiLCBcIjk4IDgyXCIsIFwiOTggODNcIiwgXCI5OCA4NFwiLCBcIjk4IDg1XCIsIFwiOTggODZcIiwgXCI5OCA4N1wiLCBcIjk4IDg5XCIsIFwiOTggOGFcIiwgXCI5OSA4MlwiLCBcIjk5IDgzXCIsIFwiRTIgOTggQkEgRUYgQjggOEZcIiwgXCI5OCA4QlwiICwgXCI5OCA4Q1wiLCBcIjk4IDhEXCIsIFwiOTggOThcIiwgXCI5OCA5N1wiLCBcIjk4IDk5XCIsIFwiOTggOUFcIiwgXCI5OCA5Q1wiLCBcIjk4IDlEXCIsIFwiOTggOUJcIiwgXCJBNCA5MVwiLCBcIkE0IDkzXCIsIFwiOTggOEVcIiwgXCJBNCA5N1wiLCBcIjk4IDhGXCIsIFwiOTggQjZcIiwgXCI5OCA5MFwiLCBcIjk4IDkxXCIsIFwiOTggOTJcIiwgXCI5OSA4NFwiLCBcIkE0IDk0XCIsIFwiOTggQjNcIiwgXCI5OCA5RVwiLCBcIjk4IDlGXCIsIFwiOTggQTBcIiwgXCI5OCBBMVwiLCBcIjk4IDk0XCIsIFwiOTggOTVcIiwgXCI5OSA4MVwiLCBcIkUyIDk4IEI5IEVGIEI4IDhGXCIsIFwiOTggQTNcIiwgXCI5OCA5NlwiLCBcIjk4IEFCXCIsIFwiOTggQTlcIiwgXCI5OCBBNFwiLCBcIjk4IEFFXCIsIFwiOTggQjFcIiwgXCI5OCBBOFwiLCBcIjk4IEIwXCIsIFwiOTggQUZcIiwgXCI5OCBBNlwiLCBcIjk4IEE3XCIsIFwiOTggQTJcIiwgXCI5OCBBNVwiLCBcIjk4IEFBXCIsIFwiOTggOTNcIiwgXCI5OCBBRFwiLCBcIjk4IEI1XCIsIFwiOTggQjJcIiwgXCJBNCA5MFwiLCBcIjk4IEI3XCIsIFwiQTQgOTJcIiwgXCJBNCA5NVwiLCBcIjk4IEI0XCIsIFwiOTIgQTRcIiwgXCI5MiBBOVwiLCBcIjk4IDg4XCIsIFwiOTEgQkZcIiwgXCI5MSBCOVwiLCBcIjkxIEJBXCIsIFwiOTIgODBcIiwgXCI5MSBCQlwiLCBcIjkxIEJEXCIsIFwiQTQgOTZcIiwgXCI5OCBCQVwiLCBcIjk4IEI4XCIsIFwiOTggQjlcIiwgXCI5OCBCQlwiLCBcIjk4IEJDXCIsIFwiOTggQkRcIiwgXCI5OSA4MFwiLCBcIjk4IEJGXCIsIFwiOTggQkVcIiwgXCI5OSA4Q1wiLCBcIjkxIDhGXCIsIFwiOTEgOEJcIiwgXCI5MSA4RFwiLCBcIjkxIDhFXCIsIFwiOTEgOEFcIiwgXCJFMiA5QyA4QVwiLCBcIkUyIDlDIDhDIEVGIEI4IDhGXCIsIFwiOTEgOENcIiwgXCJFMiA5QyA4QlwiLCBcIjkxIDkwXCIsIFwiOTIgQUFcIiwgXCI5OSA4RlwiLCBcIkUyIDk4IDlEIEVGIEI4IDhGXCIsIFwiOTEgODZcIiwgXCI5MSA4N1wiLCBcIjkxIDg4XCIsIFwiOTEgODlcIiwgXCI5NiA5NVwiLCBcIjk2IDkwXCIsIFwiQTQgOThcIiwgXCI5NiA5NlwiLCBcIkUyIDlDIDhEIEVGIEI4IDhGXCIsIFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLCBcIjkxIDgxXCIsIFwiOTEgODBcIiwgXCI5MSBBNFwiLCBcIjkxIEE1XCIsIFwiOTcgQTNcIiwgXCI5MSBCNlwiLCBcIjkxIEE2XCIsIFwiOTEgQTdcIiwgXCI5MSBBOFwiLCBcIjkxIEE5XCIsIFwiOTEgQjFcIiwgXCI5MSBCNFwiLCBcIjkxIEI1XCIsIFwiOTEgQjJcIiwgXCI5MSBCM1wiLCBcIjkxIEFFXCIsIFwiOTEgQjdcIiwgXCI5MiA4MlwiLCBcIjk1IEI1XCIsIFwiOEUgODVcIiwgXCI5MSBCQ1wiLCBcIjkxIEI4XCIsIFwiOTEgQjBcIiwgXCI5QSBCNlwiLCBcIjhGIDgzXCIsIFwiOTIgODNcIiwgXCI5MSBBRlwiLCBcIjkxIEFCXCIsIFwiOTEgQUNcIiwgXCI5MSBBRFwiLCBcIjk5IDg3XCIsIFwiOTIgODFcIiwgXCI5OSA4NVwiLCBcIjk5IDg2XCIsIFwiOTkgOEJcIiwgXCI5OSA4RVwiLCBcIjk5IDhEXCIsIFwiOTIgODdcIiwgXCI5MiA4NlwiLCBcIjkyIDkxXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkyIDhGXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MiA4QiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkxIEFBXCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIDlBXCIsIFwiOTEgOTVcIiwgXCI5MSA5NlwiLCBcIjkxIDk0XCIsIFwiOTEgOTdcIiwgXCI5MSA5OVwiLCBcIjkxIDk4XCIsIFwiOTIgODRcIiwgXCI5MiA4QlwiLCBcIjkxIEEzXCIsIFwiOTEgQTBcIiwgXCI5MSBBMVwiLCBcIjkxIEEyXCIsIFwiOTEgOUVcIiwgXCI5MSA5RlwiLCBcIjkxIDkyXCIsIFwiOEUgQTlcIiwgXCJFMiA5QiA5MVwiLCBcIjhFIDkzXCIsIFwiOTEgOTFcIiwgXCI4RSA5MlwiLCBcIjkxIDlEXCIsIFwiOTEgOUJcIiwgXCI5MSA5Q1wiLCBcIjkyIEJDXCIsIFwiOTEgOTNcIiwgXCI5NSBCNlwiLCBcIjkyIDhEXCIsIFwiOEMgODJcIiwgXCI5QiA5MVwiLCBcIjkwIEI2XCIsIFwiOTAgQjFcIiwgXCI5MCBBRFwiLCBcIjkwIEI5XCIsIFwiOTAgQjBcIiwgXCI5MCBCQlwiLCBcIjkwIEJDXCIsIFwiOTAgQThcIiwgXCI5MCBBRlwiLCBcIkE2IDgxXCIsIFwiOTAgQUVcIiwgXCI5MCBCN1wiLCBcIjkwIEJEXCIsIFwiOTAgQjhcIiwgXCI5MCA5OVwiLCBcIjkwIEI1XCIsIFwiOTkgODhcIiwgXCI5OSA4OVwiLCBcIjk5IDhBXCIsIFwiOTAgOTJcIiwgXCI5MCA5NFwiLCBcIjkwIEE3XCIsIFwiOTAgQTZcIiwgXCI5MCBBNFwiLCBcIjkwIEEzXCIsIFwiOTAgQTVcIiwgXCI5MCBCQVwiLCBcIjkwIDk3XCIsIFwiOTAgQjRcIiwgXCJBNiA4NFwiLCBcIjkwIDlEXCIsIFwiOTAgOUJcIiwgXCI5MCA4Q1wiLCBcIjkwIDlFXCIsIFwiOTAgOUNcIiwgXCI5NSBCN1wiLCBcIkE2IDgyXCIsIFwiQTYgODBcIiwgXCI5MCA4RFwiLCBcIjkwIEEyXCIsIFwiOTAgQTBcIiwgXCI5MCA5RlwiLCBcIjkwIEExXCIsIFwiOTAgQUNcIiwgXCI5MCBCM1wiLCBcIjkwIDhCXCIsIFwiOTAgOEFcIiwgXCI5MCA4NlwiLCBcIjkwIDg1XCIsIFwiOTAgODNcIiwgXCI5MCA4MlwiLCBcIjkwIDg0XCIsIFwiOTAgQUFcIiwgXCI5MCBBQlwiLCBcIjkwIDk4XCIsIFwiOTAgOTBcIiwgXCI5MCA4RlwiLCBcIjkwIDkxXCIsIFwiOTAgOEVcIiwgXCI5MCA5NlwiLCBcIjkwIDgwXCIsIFwiOTAgODFcIiwgXCI5MCA5M1wiLCBcIkE2IDgzXCIsIFwiOTUgOEFcIiwgXCI5MCA5NVwiLCBcIjkwIEE5XCIsIFwiOTAgODhcIiwgXCI5MCA4N1wiLCBcIjkwIEJGXCIsIFwiOTAgQkVcIiwgXCI5MCA4OVwiLCBcIjkwIEIyXCIsIFwiOEMgQjVcIiwgXCI4RSA4NFwiLCBcIjhDIEIyXCIsIFwiOEMgQjNcIiwgXCI4QyBCNFwiLCBcIjhDIEIxXCIsIFwiOEMgQkZcIiwgXCJFMiA5OCA5OFwiLCBcIjhEIDgwXCIsIFwiOEUgOERcIiwgXCI4RSA4QlwiLCBcIjhEIDgzXCIsIFwiOEQgODJcIiwgXCI4RCA4MVwiLCBcIjhDIEJFXCIsIFwiOEMgQkFcIiwgXCI4QyBCQVwiLCBcIjhDIEJCXCIsIFwiOEMgQjlcIiwgXCI4QyBCN1wiLCBcIjhDIEJDXCIsIFwiOEMgQjhcIiwgXCI5MiA5MFwiLCBcIjhEIDg0XCIsIFwiOEMgQjBcIiwgXCI4RSA4M1wiLCBcIjkwIDlBXCIsIFwiOTUgQjhcIiwgXCI4QyA4RVwiLCBcIjhDIDhEXCIsIFwiOEMgOEZcIiwgXCI4QyA5NVwiLCBcIjhDIDk2XCIsIFwiOEMgOTdcIiwgXCI4QyA5OFwiLCBcIjhDIDkxXCIsIFwiOEMgOTJcIiwgXCI4QyA5M1wiLCBcIjhDIDk0XCIsIFwiOEMgOUFcIiwgXCI4QyA5RFwiLCBcIjhDIDlCXCIsIFwiOEMgOUNcIiwgXCI4QyA5RVwiLCBcIjhDIDk5XCIsIFwiRTIgQUQgOTAgRUYgQjggOEZcIiwgXCI4QyA5RlwiLCBcIjkyIEFCXCIsIFwiRTIgOUMgQThcIiwgXCJFMiA5OCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk4IDgwIEVGIEI4IDhGXCIsIFwiOEMgQTRcIiwgXCJFMiA5QiA4NSBFRiBCOCA4RlwiLCBcIjhDIEE1XCIsIFwiOEMgQTZcIiwgXCJFMiA5OCA4MSBFRiBCOCA4RlwiLCBcIjhDIEE3XCIsIFwiRTIgOUIgODhcIiwgXCI4QyBBOVwiLCBcIkUyIDlBIEExIEVGIEI4IDhGXCIsIFwiOTQgQTVcIiwgXCI5MiBBNVwiLCBcIkUyIDlEIDg0IEVGIEI4IDhGXCIsIFwiOEMgQThcIiwgXCJFMiA5OCA4MyBFRiBCOCA4RlwiLCBcIkUyIDlCIDg0IEVGIEI4IDhGXCIsIFwiOEMgQUNcIiwgXCI5MiBBOFwiLCBcIjhDIEFBXCIsIFwiOEMgQUJcIiwgXCJFMiA5OCA4MiBFRiBCOCA4RlwiLCBcIkUyIDk4IDk0IEVGIEI4IDhGXCIsIFwiOTIgQTdcIiwgXCI5MiBBNlwiLCBcIjhDIDhBXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjhEIDhGXCIsIFwiOEQgOEVcIiwgXCI4RCA5MFwiLCBcIjhEIDhBXCIsIFwiOEQgOEJcIiwgXCI4RCA4Q1wiLCBcIjhEIDg5XCIsIFwiOEQgODdcIiwgXCI4RCA5M1wiLCBcIjhEIDg4XCIsIFwiOEQgOTJcIiwgXCI4RCA5MVwiLCBcIjhEIDhEXCIsIFwiOEQgODVcIiwgXCI4RCA4NlwiLCBcIjhDIEI2XCIsIFwiOEMgQkRcIiwgXCI4RCBBMFwiLCBcIjhEIEFGXCIsIFwiOEQgOUVcIiwgXCJBNyA4MFwiLCBcIjhEIDk3XCIsIFwiOEQgOTZcIiwgXCI4RCBBNFwiLCBcIjhEIEIzXCIsIFwiOEQgOTRcIiwgXCI4RCA5RlwiLCBcIjhDIEFEXCIsIFwiOEQgOTVcIiwgXCI4RCA5RFwiLCBcIjhDIEFFXCIsIFwiOEMgQUZcIiwgXCI4RCA5Q1wiLCBcIjhEIEIyXCIsIFwiOEQgQTVcIiwgXCI4RCBBM1wiLCBcIjhEIEIxXCIsIFwiOEQgOUJcIiwgXCI4RCA5OVwiLCBcIjhEIDlBXCIsIFwiOEQgOThcIiwgXCI4RCBBMlwiLCBcIjhEIEExXCIsIFwiOEQgQTdcIiwgXCI4RCBBOFwiLCBcIjhEIEE2XCIsIFwiOEQgQjBcIiwgXCI4RSA4MlwiLCBcIjhEIEFFXCIsIFwiOEQgQUNcIiwgXCI4RCBBRFwiLCBcIjhEIEFCXCIsIFwiOEQgQkZcIiwgXCI4RCBBOVwiLCBcIjhEIEFBXCIsIFwiOEQgQkFcIiwgXCI4RCBCQlwiLCBcIjhEIEI3XCIsIFwiOEQgQjhcIiwgXCI4RCBCOVwiLCBcIjhEIEJFXCIsIFwiOEQgQjZcIiwgXCI4RCBCNVwiLCBcIkUyIDk4IDk1IEVGIEI4IDhGXCIsIFwiOEQgQkNcIiwgXCI4RCBCNFwiLCBcIjhEIEJEXCIsXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCJFMiA5QSBCRCBFRiBCOCA4RlwiLCBcIjhGIDgwXCIsIFwiOEYgODhcIiwgXCJFMiA5QSBCRSBFRiBCOCA4RlwiLCBcIjhFIEJFXCIsIFwiOEYgOTBcIiwgXCI4RiA4OVwiLCBcIjhFIEIxXCIsIFwiRTIgOUIgQjMgRUYgQjggOEZcIiwgXCI4RiA4Q1wiLCBcIjhGIDkzXCIsIFwiOEYgQjhcIiwgXCI4RiA5MlwiLCBcIjhGIDkxXCIsIFwiOEYgOEZcIiwgXCI4RSBCRlwiLCBcIkUyIDlCIEI3XCIsIFwiOEYgODJcIiwgXCJFMiA5QiBCOFwiLCBcIjhGIEI5XCIsIFwiOEUgQTNcIiwgXCI5QSBBM1wiLCBcIjhGIDhBXCIsIFwiOEYgODRcIiwgXCI5QiA4MFwiLCBcIkUyIDlCIEI5XCIsIFwiOEYgOEJcIiwgXCI5QSBCNFwiLCBcIjlBIEI1XCIsIFwiOEYgODdcIiwgXCI5NSBCNFwiLCBcIjhGIDg2XCIsIFwiOEUgQkRcIiwgXCI4RiA4NVwiLCBcIjhFIDk2XCIsIFwiOEUgOTdcIiwgXCI4RiBCNVwiLCBcIjhFIEFCXCIsIFwiOEUgOUZcIiwgXCI4RSBBRFwiLCBcIjhFIEE4XCIsIFwiOEUgQUFcIiwgXCI4RSBBNFwiLCBcIjhFIEE3XCIsIFwiOEUgQkNcIiwgXCI4RSBCOVwiLCBcIjhFIEI3XCIsIFwiOEUgQkFcIiwgXCI4RSBCOFwiLCBcIjhFIEJCXCIsIFwiOEUgQUNcIiwgXCI4RSBBRVwiLCBcIjkxIEJFXCIsIFwiOEUgQUZcIiwgXCI4RSBCMlwiLCBcIjhFIEIwXCIsIFwiOEUgQjNcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QSA5N1wiLCBcIjlBIDk1XCIsIFwiOUEgOTlcIiwgXCI5QSA4Q1wiLCBcIjlBIDhFXCIsIFwiOEYgOEVcIiwgXCI5QSA5M1wiLCBcIjlBIDkxXCIsIFwiOUEgOTJcIiwgXCI5QSA5MFwiLCBcIjlBIDlBXCIsIFwiOUEgOUJcIiwgXCI5QSA5Q1wiLFwiOEYgOERcIiwgXCI5QSBCMlwiLCBcIjlBIEE4XCIsIFwiOUEgOTRcIiwgXCI5QSA4RFwiLCBcIjlBIDk4XCIsIFwiOUEgOTZcIiwgXCI5QSBBMVwiLCBcIjlBIEEwXCIsIFwiOUEgQUZcIiwgXCI5QSA4M1wiLCBcIjlBIDhCXCIsIFwiOUEgOURcIiwgXCI5QSA4NFwiLCBcIjlBIDg1XCIsIFwiOUEgODhcIiwgXCI5QSA5RVwiLCBcIjlBIDgyXCIsIFwiOUEgODZcIiwgXCI5QSA4N1wiLCBcIjlBIDhBXCIsIFwiOUEgODlcIiwgXCI5QSA4MVwiLCBcIjlCIEE5XCIsIFwiRTIgOUMgODggRUYgQjggOEZcIiwgXCI5QiBBQlwiLCBcIjlCIEFDXCIsIFwiRTIgOUIgQjUgRUYgQjggOEZcIiwgXCI5QiBBNVwiLCBcIjlBIEE0XCIsIFwiRTIgOUIgQjRcIiwgXCI5QiBCM1wiLCBcIjlBIDgwXCIsIFwiOUIgQjBcIiwgXCI5MiBCQVwiLCBcIkUyIDlBIDkzIEVGIEI4IDhGXCIsIFwiOUEgQTdcIiwgXCJFMiA5QiBCRCBFRiBCOCA4RlwiLCBcIjlBIDhGXCIsIFwiOUEgQTZcIiwgXCI5QSBBNVwiLCBcIjhGIDgxXCIsIFwiOUEgQTJcIiwgXCI4RSBBMVwiLCBcIjhFIEEyXCIsIFwiOEUgQTBcIiwgXCI4RiA5N1wiLCBcIjhDIDgxXCIsIFwiOTcgQkNcIiwgXCI4RiBBRFwiLCBcIkUyIDlCIEIyIEVGIEI4IDhGXCIsIFwiOEUgOTFcIiwgXCJFMiA5QiBCMFwiLCBcIjhGIDk0XCIsIFwiOTcgQkJcIiwgXCI4QyA4QlwiLCBcIjk3IEJFXCIsIFwiOEYgOTVcIiwgXCJFMiA5QiBCQSBFRiBCOCA4RlwiLCBcIjhGIDlFXCIsIFwiOUIgQTNcIiwgXCI5QiBBNFwiLCBcIjhDIDg1XCIsIFwiOEMgODRcIiwgXCI4RiA5Q1wiLCBcIjhGIDk2XCIsIFwiOEYgOURcIiwgXCI4QyA4N1wiLCBcIjhDIDg2XCIsIFwiOEYgOTlcIiwgXCI4QyA4M1wiLCBcIjhDIDg5XCIsIFwiOEMgOENcIiwgXCI4QyBBMFwiLCBcIjhFIDg3XCIsIFwiOEUgODZcIiwgXCI4QyA4OFwiLCBcIjhGIDk4XCIsIFwiOEYgQjBcIiwgXCI4RiBBRlwiLCBcIjhGIDlGXCIsIFwiOTcgQkRcIiwgXCI4RiBBMFwiLCBcIjhGIEExXCIsIFwiOEYgOUFcIiwgXCI4RiBBMlwiLCBcIjhGIEFDXCIsIFwiOEYgQTNcIiwgXCI4RiBBNFwiLCBcIjhGIEE1XCIsIFwiOEYgQTZcIiwgXCI4RiBBOFwiLCBcIjhGIEFBXCIsIFwiOEYgQUJcIiwgXCI4RiBBOVwiLCBcIjkyIDkyXCIsIFwiOEYgOUJcIiwgXCJFMiA5QiBBQSBFRiBCOCA4RlwiLCBcIjk1IDhDXCIsIFwiOTUgOERcIiwgXCI5NSA4QlwiLCBcIkUyIDlCIEE5XCIsIFwiRTIgOEMgOUEgRUYgQjggOEZcIiwgXCI5MyBCMVwiLCBcIjkzIEIyXCIsIFwiOTIgQkJcIiwgXCJFMiA4QyBBOCBFRiBCOCA4RlwiLCBcIjk2IEE1XCIsIFwiOTYgQThcIiwgXCI5NiBCMVwiLCBcIjk2IEIyXCIsIFwiOTUgQjlcIiwgXCI5NyA5Q1wiLCBcIjkyIEJEXCIsIFwiOTIgQkVcIiwgXCI5MiBCRlwiLCBcIjkzIDgwXCIsIFwiOTMgQkNcIiwgXCI5MyBCN1wiLCBcIjkzIEI4XCIsIFwiOTMgQjlcIiwgXCI4RSBBNVwiLCBcIjkzIEJEXCIsIFwiOEUgOUVcIiwgXCI5MyA5RVwiLCBcIkUyIDk4IDhFIEVGIEI4IDhGXCIsIFwiOTMgOUZcIiwgXCI5MyBBMFwiLCBcIjkzIEJBXCIsIFwiOTMgQkJcIiwgXCI4RSA5OVwiLCBcIjhFIDlBXCIsIFwiOEUgOUJcIiwgXCJFMiA4RiBCMVwiLCBcIkUyIDhGIEIyXCIsIFwiRTIgOEYgQjBcIiwgXCI5NSBCMFwiLCBcIkUyIDhGIEIzXCIsIFwiRTIgOEMgOUIgRUYgQjggOEZcIiwgXCI5MyBBMVwiLCBcIjk0IDhCXCIsIFwiOTQgOENcIiwgXCI5MiBBMVwiLCBcIjk0IEE2XCIsIFwiOTUgQUZcIiwgXCI5NyA5MVwiLCBcIjlCIEEyXCIsIFwiOTIgQjhcIiwgXCI5MiBCNVwiLCBcIjkyIEI0XCIsIFwiOTIgQjZcIiwgXCI5MiBCN1wiLCBcIjkyIEIwXCIsIFwiOTIgQjNcIiwgXCI5MiA4RVwiLCBcIkUyIDlBIDk2XCIsIFwiOTQgQTdcIiwgXCI5NCBBOFwiLCBcIkUyIDlBIDkyXCIsIFwiOUIgQTBcIiwgXCJFMiA5QiA4RlwiLCBcIjk0IEE5XCIsIFwiRTIgOUEgOTlcIiwgXCJFMiA5QiA5M1wiLCBcIjk0IEFCXCIsIFwiOTIgQTNcIiwgXCI5NCBBQVwiLCBcIjk3IEExXCIsIFwiRTIgOUEgOTRcIiwgXCI5QiBBMVwiLCBcIjlBIEFDXCIsIFwiRTIgOTggQTAgRUYgQjggOEZcIiwgXCJFMiA5QSBCMFwiLCBcIkUyIDlBIEIxXCIsIFwiOEYgQkFcIiwgXCI5NCBBRVwiLCBcIjkzIEJGXCIsIFwiOTIgODhcIiwgXCJFMiA5QSA5N1wiLCBcIjk0IEFEXCIsIFwiOTQgQUNcIiwgXCI5NSBCM1wiLCBcIjkyIDhBXCIsIFwiOTIgODlcIiwgXCI4QyBBMVwiLCBcIjhGIEI3XCIsIFwiOTQgOTZcIiwgXCI5QSBCRFwiLCBcIjlBIEJGXCIsIFwiOUIgODFcIiwgXCI5NCA5MVwiLCBcIjk3IDlEXCIsIFwiOUIgOEJcIiwgXCI5QiA4Q1wiLCBcIjlCIDhGXCIsIFwiOUEgQUFcIiwgXCI5QiA4RVwiLCBcIjk2IEJDXCIsIFwiOTcgQkFcIiwgXCJFMiA5QiBCMVwiLCBcIjk3IEJGXCIsIFwiOUIgOERcIiwgXCI4RSA4OFwiLCBcIjhFIDhGXCIsIFwiOEUgODBcIiwgXCI4RSA4MVwiLCBcIjhFIDhBXCIsIFwiOEUgODlcIiwgXCI4RSA4RVwiLCBcIjhFIDkwXCIsIFwiOEUgOENcIiwgXCI4RiBBRVwiLCBcIkUyIDlDIDg5IEVGIEI4IDhGXCIsIFwiOTMgQTlcIiwgXCI5MyBBOFwiLCBcIjkzIEE3XCIsIFwiOTIgOENcIiwgXCI5MyBBRVwiLCBcIjkzIEFBXCIsIFwiOTMgQUJcIiwgXCI5MyBBQ1wiLCBcIjkzIEFEXCIsIFwiOTMgQTZcIiwgXCI5MyBBRlwiLCBcIjkzIEE1XCIsIFwiOTMgQTRcIiwgXCI5MyA5Q1wiLCBcIjkzIDgzXCIsIFwiOTMgOTFcIiwgXCI5MyA4QVwiLCBcIjkzIDg4XCIsIFwiOTMgODlcIiwgXCI5MyA4NFwiLCBcIjkzIDg1XCIsIFwiOTMgODZcIiwgXCI5NyA5M1wiLCBcIjkzIDg3XCIsIFwiOTcgODNcIiwgXCI5NyBCM1wiLCBcIjk3IDg0XCIsIFwiOTMgOEJcIiwgXCI5NyA5MlwiLCBcIjkzIDgxXCIsIFwiOTMgODJcIiwgXCI5NyA4MlwiLCBcIjk3IDlFXCIsIFwiOTMgQjBcIiwgXCI5MyA5M1wiLCBcIjkzIDk1XCIsIFwiOTMgOTdcIiwgXCI5MyA5OFwiLCBcIjkzIDk5XCIsIFwiOTMgOTRcIiwgXCI5MyA5MlwiLCBcIjkzIDlBXCIsIFwiOTMgOTZcIiwgXCI5NCA5N1wiLCBcIjkzIDhFXCIsIFwiOTYgODdcIiwgXCJFMiA5QyA4MiBFRiBCOCA4RlwiLCBcIjkzIDkwXCIsIFwiOTMgOEZcIiwgXCI5MyA4Q1wiLCBcIjkzIDhEXCIsIFwiOUEgQTlcIiwgXCI4RiBCM1wiLCBcIjhGIEI0XCIsIFwiOTQgOTBcIiwgXCI5NCA5MlwiLCBcIjk0IDkzXCIsIFwiOTQgOEZcIiwgXCI5NiA4QVwiLCBcIjk2IDhCXCIsIFwiRTIgOUMgOTIgRUYgQjggOEZcIiwgXCI5MyA5RFwiLCBcIkUyIDlDIDhGIEVGIEI4IDhGXCIsIFwiOTYgOERcIiwgXCI5NiA4Q1wiLCBcIjk0IDhEXCIsIFwiOTQgOEVcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUQgQTQgRUYgQjggOEZcIiwgXCI5MiA5QlwiLCBcIjkyIDlBXCIsIFwiOTIgOTlcIiwgXCI5MiA5Q1wiLCBcIjkyIDk0XCIsIFwiRTIgOUQgQTMgRUYgQjggOEZcIiwgXCI5MiA5NVwiLCBcIjkyIDlFXCIsIFwiOTIgOTNcIiwgXCI5MiA5N1wiLCBcIjkyIDk2XCIsIFwiOTIgOThcIiwgXCI5MiA5RFwiLCBcIjkyIDlGXCIsIFwiRTIgOTggQUUgRUYgQjggOEZcIiwgXCJFMiA5QyA5RCBFRiBCOCA4RlwiLCBcIkUyIDk4IEFBIEVGIEI4IDhGXCIsIFwiOTUgODlcIiwgXCJFMiA5OCBCOCBFRiBCOCA4RlwiLCBcIkUyIDlDIEExIEVGIEI4IDhGXCIsIFwiOTQgQUZcIiwgXCI5NSA4RVwiLCBcIkUyIDk4IEFGIEVGIEI4IDhGXCIsIFwiRTIgOTggQTYgRUYgQjggOEZcIiwgXCI5QiA5MFwiLCBcIkUyIDlCIDhFXCIsIFwiRTIgOTkgODggRUYgQjggOEZcIiwgXCJFMiA5OSA4OSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhBIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEIgRUYgQjggOEZcIiwgXCJFMiA5OSA4QyBFRiBCOCA4RlwiLCBcIkUyIDk5IDhEIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEUgRUYgQjggOEZcIiwgXCJFMiA5OSA4RiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkwIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTEgRUYgQjggOEZcIiwgXCJFMiA5OSA5MiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkzIEVGIEI4IDhGXCIsIFwiODYgOTRcIiwgXCJFMiA5QSA5QlwiLCBcIjg4IEIzXCIsIFwiODggQjlcIiwgXCJFMiA5OCBBMiBFRiBCOCA4RlwiLCBcIkUyIDk4IEEzIEVGIEI4IDhGXCIsIFwiOTMgQjRcIiwgXCI5MyBCM1wiLCBcIjg4IEI2XCIsIFwiODggOUEgRUYgQjggOEZcIiwgXCI4OCBCOFwiLCBcIjg4IEJBXCIsIFwiODggQjcgRUYgQjggOEZcIiwgXCJFMiA5QyBCNCBFRiBCOCA4RlwiLCBcIjg2IDlBXCIsIFwiODkgOTFcIiwgXCI5MiBBRVwiLCBcIjg5IDkwXCIsIFwiRTMgOEEgOTkgRUYgQjggOEZcIiwgXCJFMyA4QSA5NyBFRiBCOCA4RlwiLCBcIjg4IEI0XCIsIFwiODggQjVcIiwgXCI4OCBCMlwiLCBcIjg1IEIwIEVGIEI4IDhGXCIsIFwiODUgQjEgRUYgQjggOEZcIiwgXCI4NiA4RVwiLCBcIjg2IDkxXCIsIFwiODUgQkUgRUYgQjggOEZcIiwgXCI4NiA5OFwiLCBcIkUyIDlCIDk0IEVGIEI4IDhGXCIsIFwiOTMgOUJcIiwgXCI5QSBBQlwiLCBcIkUyIDlEIDhDXCIsIFwiRTIgQUQgOTUgRUYgQjggOEZcIiwgXCI5MiBBMlwiLCBcIkUyIDk5IEE4IEVGIEI4IDhGXCIsIFwiOUEgQjdcIiwgXCI5QSBBRlwiLCBcIjlBIEIzXCIsIFwiOUEgQjFcIiwgXCI5NCA5RVwiLCBcIjkzIEI1XCIsIFwiRTIgOUQgOTcgRUYgQjggOEZcIiwgXCJFMiA5RCA5NVwiLCBcIkUyIDlEIDkzXCIsIFwiRTIgOUQgOTRcIiwgXCJFMiA4MCBCQyBFRiBCOCA4RlwiLCBcIkUyIDgxIDg5IEVGIEI4IDhGXCIsIFwiOTIgQUZcIiwgXCI5NCA4NVwiLCBcIjk0IDg2XCIsIFwiOTQgQjFcIiwgXCJFMiA5QSA5Q1wiLCBcIkUzIDgwIEJEIEVGIEI4IDhGXCIsIFwiRTIgOUEgQTAgRUYgQjggOEZcIiwgXCI5QSBCOFwiLCBcIjk0IEIwXCIsIFwiRTIgOTkgQkIgRUYgQjggOEZcIiwgXCI4OCBBRiBFRiBCOCA4RlwiLCBcIjkyIEI5XCIsIFwiRTIgOUQgODcgRUYgQjggOEZcIiwgXCJFMiA5QyBCMyBFRiBCOCA4RlwiLCBcIkUyIDlEIDhFXCIsIFwiRTIgOUMgODVcIiwgXCI5MiBBMFwiLCBcIjhDIDgwXCIsIFwiRTIgOUUgQkZcIiwgXCI4QyA5MFwiLCBcIkUyIDkzIDgyIEVGIEI4IDhGXCIsIFwiOEYgQTdcIiwgXCI4OCA4MiBFRiBCOCA4RlwiLCBcIjlCIDgyXCIsIFwiOUIgODNcIiwgXCI5QiA4NFwiLCBcIjlCIDg1XCIsIFwiRTIgOTkgQkYgRUYgQjggOEZcIiwgXCI5QSBBRFwiLCBcIjlBIEJFXCIsIFwiODUgQkYgRUYgQjggOEZcIiwgXCI5QSBCMFwiLCBcIjlBIEI5XCIsIFwiOUEgQkFcIiwgXCI5QSBCQ1wiLCBcIjlBIEJCXCIsIFwiOUEgQUVcIiwgXCI4RSBBNlwiLCBcIjkzIEI2XCIsIFwiODggODFcIiwgXCI4NiA5NlwiLCBcIjg2IDk3XCIsIFwiODYgOTlcIiwgXCI4NiA5MlwiLCBcIjg2IDk1XCIsIFwiODYgOTNcIiwgXCIzMCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMxIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzIgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM0IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzUgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNiBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM3IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzggRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzOSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjk0IDlGXCIsIFwiOTQgQTJcIiwgXCJFMiA5NiBCNiBFRiBCOCA4RlwiLCBcIkUyIDhGIEI4XCIsIFwiRTIgOEYgQUZcIiwgXCJFMiA4RiBCOVwiLCBcIkUyIDhGIEJBXCIsIFwiRTIgOEYgQURcIiwgXCJFMiA4RiBBRVwiLCBcIkUyIDhGIEE5XCIsIFwiRTIgOEYgQUFcIiwgXCI5NCA4MFwiLCBcIjk0IDgxXCIsIFwiOTQgODJcIiwgXCJFMiA5NyA4MCBFRiBCOCA4RlwiLCBcIjk0IEJDXCIsIFwiOTQgQkRcIiwgXCJFMiA4RiBBQlwiLCBcIkUyIDhGIEFDXCIsIFwiRTIgOUUgQTEgRUYgQjggOEZcIiwgXCJFMiBBQyA4NSBFRiBCOCA4RlwiLCBcIkUyIEFDIDg2IEVGIEI4IDhGXCIsIFwiRTIgQUMgODcgRUYgQjggOEZcIiwgXCJFMiA4NiA5NyBFRiBCOCA4RlwiLCBcIkUyIDg2IDk4IEVGIEI4IDhGXCIsIFwiRTIgODYgOTkgRUYgQjggOEZcIiwgXCJFMiA4NiA5NiBFRiBCOCA4RlwiLCBcIkUyIDg2IDk1IEVGIEI4IDhGXCIsIFwiRTIgODYgOTQgRUYgQjggOEZcIiwgXCI5NCA4NFwiLCBcIkUyIDg2IEFBIEVGIEI4IDhGXCIsIFwiRTIgODYgQTkgRUYgQjggOEZcIiwgXCJFMiBBNCBCNCBFRiBCOCA4RlwiLCBcIkUyIEE0IEI1IEVGIEI4IDhGXCIsIFwiMjMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIyQSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIkUyIDg0IEI5IEVGIEI4IDhGXCIsIFwiOTQgQTRcIiwgXCI5NCBBMVwiLCBcIjk0IEEwXCIsIFwiOTQgQTNcIiwgXCI4RSBCNVwiLCBcIjhFIEI2XCIsIFwiRTMgODAgQjAgRUYgQjggOEZcIiwgXCJFMiA5RSBCMFwiLCBcIkUyIDlDIDk0IEVGIEI4IDhGXCIsIFwiOTQgODNcIiwgXCJFMiA5RSA5NVwiLCBcIkUyIDlFIDk2XCIsIFwiRTIgOUUgOTdcIiwgXCJFMiA5QyA5NiBFRiBCOCA4RlwiLCBcIjkyIEIyXCIsIFwiOTIgQjFcIiwgXCJDMiBBOSBFRiBCOCA4RlwiLCBcIkMyIEFFIEVGIEI4IDhGXCIsIFwiRTIgODQgQTIgRUYgQjggOEZcIiwgXCI5NCA5QVwiLCBcIjk0IDk5XCIsIFwiOTQgOUJcIiwgXCI5NCA5RFwiLCBcIjk0IDlDXCIsIFwiRTIgOTggOTEgRUYgQjggOEZcIiwgXCI5NCA5OFwiLCBcIkUyIDlBIEFBIEVGIEI4IDhGXCIsIFwiRTIgOUEgQUIgRUYgQjggOEZcIiwgXCI5NCBCNFwiLCBcIjk0IEI1XCIsIFwiOTQgQjhcIiwgXCI5NCBCOVwiLCBcIjk0IEI2XCIsIFwiOTQgQjdcIiwgXCI5NCBCQVwiLCBcIkUyIDk2IEFBIEVGIEI4IDhGXCIsIFwiRTIgOTYgQUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QiBFRiBCOCA4RlwiLCBcIkUyIEFDIDlDIEVGIEI4IDhGXCIsIFwiOTQgQkJcIiwgXCJFMiA5NyBCQyBFRiBCOCA4RlwiLCBcIkUyIDk3IEJCIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkUgRUYgQjggOEZcIiwgXCJFMiA5NyBCRCBFRiBCOCA4RlwiLCBcIjk0IEIyXCIsIFwiOTQgQjNcIiwgXCI5NCA4OFwiLCBcIjk0IDg5XCIsIFwiOTQgOEFcIiwgXCI5NCA4N1wiLCBcIjkzIEEzXCIsIFwiOTMgQTJcIiwgXCI5NCA5NFwiLCBcIjk0IDk1XCIsIFwiODMgOEZcIiwgXCI4MCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEwIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTMgRUYgQjggOEZcIiwgXCJFMiA5OSBBNSBFRiBCOCA4RlwiLCBcIkUyIDk5IEE2IEVGIEI4IDhGXCIsIFwiOEUgQjRcIiwgXCI5MSA4MSBFMiA4MCA4RCBGMCA5RiA5NyBBOFwiLCBcIjkyIEFEXCIsIFwiOTcgQUZcIiwgXCI5MiBBQ1wiLCBcIjk1IDkwXCIsIFwiOTUgOTFcIiwgXCI5NSA5MlwiLCBcIjk1IDkzXCIsIFwiOTUgOTRcIiwgXCI5NSA5NVwiLCBcIjk1IDk2XCIsIFwiOTUgOTdcIiwgXCI5NSA5OFwiLCBcIjk1IDk5XCIsIFwiOTUgOUFcIiwgXCI5NSA5QlwiLCBcIjk1IDlDXCIsIFwiOTUgOURcIiwgXCI5NSA5RVwiLCBcIjk1IDlGXCIsIFwiOTUgQTBcIiwgXCI5NSBBMVwiLCBcIjk1IEEyXCIsIFwiOTUgQTNcIiwgXCI5NSBBNFwiLCBcIjk1IEE1XCIsIFwiOTUgQTZcIiwgXCI5NSBBN1wiLCBcIjlCIDkxXCIsIFwiODcgQTYgRjAgOUYgODcgQUJcIiwgXCI4NyBBNiBGMCA5RiA4NyBCRFwiLCBcIjg3IEE2IEYwIDlGIDg3IEIxXCIsIFwiODcgQTkgRjAgOUYgODcgQkZcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOFwiLCBcIjg3IEE2IEYwIDlGIDg3IEE5XCIsIFwiODcgQTYgRjAgOUYgODcgQjRcIiwgXCI4NyBBNiBGMCA5RiA4NyBBRVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI2XCIsIFwiODcgQTYgRjAgOUYgODcgQUNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCN1wiLCBcIjg3IEE2IEYwIDlGIDg3IEIyXCIsIFwiODcgQTYgRjAgOUYgODcgQkNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCQVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI5XCIsIFwiODcgQTYgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOFwiLCBcIjg3IEE3IEYwIDlGIDg3IEFEXCIsIFwiODcgQTcgRjAgOUYgODcgQTlcIiwgXCI4NyBBNyBGMCA5RiA4NyBBN1wiLCBcIjg3IEE3IEYwIDlGIDg3IEJFXCIsIFwiODcgQTcgRjAgOUYgODcgQUFcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFGXCIsIFwiODcgQTcgRjAgOUYgODcgQjJcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOVwiLCBcIjg3IEE3IEYwIDlGIDg3IEI0XCIsIFwiODcgQTcgRjAgOUYgODcgQjZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBNlwiLCBcIjg3IEE3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNFwiLCBcIjg3IEJCIEYwIDlGIDg3IEFDXCIsIFwiODcgQTcgRjAgOUYgODcgQjNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEFCXCIsIFwiODcgQTcgRjAgOUYgODcgQUVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQlwiLCBcIjg3IEIwIEYwIDlGIDg3IEFEXCIsIFwiODcgQTggRjAgOUYgODcgQjJcIiwgXCI4NyBBOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEE4XCIsIFwiODcgQjAgRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBBQlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE5XCIsIFwiODcgQTggRjAgOUYgODcgQjFcIiwgXCI4NyBBOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJEXCIsIFwiODcgQTggRjAgOUYgODcgQThcIiwgXCI4NyBBOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQUNcIiwgXCI4NyBBOCBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIwXCIsIFwiODcgQTggRjAgOUYgODcgQjdcIiwgXCI4NyBBRCBGMCA5RiA4NyBCN1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJBXCIsIFwiODcgQTggRjAgOUYgODcgQkNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJGXCIsIFwiODcgQTkgRjAgOUYgODcgQjBcIiwgXCI4NyBBOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIyXCIsIFwiODcgQTkgRjAgOUYgODcgQjRcIiwgXCI4NyBBQSBGMCA5RiA4NyBBOFwiLCBcIjg3IEFBIEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkJcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNlwiLCBcIjg3IEFBIEYwIDlGIDg3IEI3XCIsIFwiODcgQUEgRjAgOUYgODcgQUFcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOVwiLCBcIjg3IEFBIEYwIDlGIDg3IEJBXCIsIFwiODcgQUIgRjAgOUYgODcgQjBcIiwgXCI4NyBBQiBGMCA5RiA4NyBCNFwiLCBcIjg3IEFCIEYwIDlGIDg3IEFGXCIsIFwiODcgQUIgRjAgOUYgODcgQUVcIiwgXCI4NyBBQiBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEFCXCIsIFwiODcgQjUgRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQlwiLCBcIjg3IEFDIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQVwiLCBcIjg3IEE5IEYwIDlGIDg3IEFBXCIsIFwiODcgQUMgRjAgOUYgODcgQURcIiwgXCI4NyBBQyBGMCA5RiA4NyBBRVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI3XCIsIFwiODcgQUMgRjAgOUYgODcgQjFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI1XCIsIFwiODcgQUMgRjAgOUYgODcgQkFcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFDXCIsIFwiODcgQUMgRjAgOUYgODcgQjNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEJFXCIsIFwiODcgQUQgRjAgOUYgODcgQjlcIiwgXCI4NyBBRCBGMCA5RiA4NyBCM1wiLCBcIjg3IEFEIEYwIDlGIDg3IEIwXCIsIFwiODcgQUQgRjAgOUYgODcgQkFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCOFwiLCBcIjg3IEFFIEYwIDlGIDg3IEIzXCIsIFwiODcgQUUgRjAgOUYgODcgQTlcIiwgXCI4NyBBRSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFFIEYwIDlGIDg3IEI2XCIsIFwiODcgQUUgRjAgOUYgODcgQUFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMlwiLCBcIjg3IEFFIEYwIDlGIDg3IEIxXCIsIFwiODcgQUUgRjAgOUYgODcgQjlcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRVwiLCBcIjg3IEFGIEYwIDlGIDg3IEIyXCIsIFwiODcgQUYgRjAgOUYgODcgQjVcIiwgXCI4NyBBRiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFGIEYwIDlGIDg3IEI0XCIsIFwiODcgQjAgRjAgOUYgODcgQkZcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQVwiLCBcIjg3IEIwIEYwIDlGIDg3IEFFXCIsIFwiODcgQkQgRjAgOUYgODcgQjBcIiwgXCI4NyBCMCBGMCA5RiA4NyBCQ1wiLCBcIjg3IEIwIEYwIDlGIDg3IEFDXCIsIFwiODcgQjEgRjAgOUYgODcgQTZcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQlwiLCBcIjg3IEIxIEYwIDlGIDg3IEE3XCIsIFwiODcgQjEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEJFXCIsIFwiODcgQjEgRjAgOUYgODcgQUVcIiwgXCI4NyBCMSBGMCA5RiA4NyBCOVwiLCBcIjg3IEIxIEYwIDlGIDg3IEJBXCIsIFwiODcgQjIgRjAgOUYgODcgQjRcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMFwiLCBcIjg3IEIyIEYwIDlGIDg3IEFDXCIsIFwiODcgQjIgRjAgOUYgODcgQkNcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRVwiLCBcIjg3IEIyIEYwIDlGIDg3IEJCXCIsIFwiODcgQjIgRjAgOUYgODcgQjFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEFEXCIsIFwiODcgQjIgRjAgOUYgODcgQjZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCN1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJBXCIsIFwiODcgQkUgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRFwiLCBcIjg3IEFCIEYwIDlGIDg3IEIyXCIsIFwiODcgQjIgRjAgOUYgODcgQTlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEIzXCIsIFwiODcgQjIgRjAgOUYgODcgQUFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEE2XCIsIFwiODcgQjIgRjAgOUYgODcgQkZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIzIEYwIDlGIDg3IEE2XCIsIFwiODcgQjMgRjAgOUYgODcgQjdcIiwgXCI4NyBCMyBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEIxXCIsIFwiODcgQjMgRjAgOUYgODcgQThcIiwgXCI4NyBCMyBGMCA5RiA4NyBCRlwiLCBcIjg3IEIzIEYwIDlGIDg3IEFFXCIsIFwiODcgQjMgRjAgOUYgODcgQUFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIzIEYwIDlGIDg3IEJBXCIsIFwiODcgQjMgRjAgOUYgODcgQUJcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNVwiLCBcIjg3IEIwIEYwIDlGIDg3IEI1XCIsIFwiODcgQjMgRjAgOUYgODcgQjRcIiwgXCI4NyBCNCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI1IEYwIDlGIDg3IEIwXCIsIFwiODcgQjUgRjAgOUYgODcgQkNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEE2XCIsIFwiODcgQjUgRjAgOUYgODcgQUNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCRVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFBXCIsIFwiODcgQjUgRjAgOUYgODcgQURcIiwgXCI4NyBCNSBGMCA5RiA4NyBCM1wiLCBcIjg3IEI1IEYwIDlGIDg3IEIxXCIsIFwiODcgQjUgRjAgOUYgODcgQjlcIiwgXCI4NyBCNSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI2IEYwIDlGIDg3IEE2XCIsIFwiODcgQjcgRjAgOUYgODcgQUFcIiwgXCI4NyBCNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEI3IEYwIDlGIDg3IEJBXCIsIFwiODcgQjcgRjAgOUYgODcgQkNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFEXCIsIFwiODcgQjAgRjAgOUYgODcgQjNcIiwgXCI4NyBCMSBGMCA5RiA4NyBBOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEIyXCIsIFwiODcgQkIgRjAgOUYgODcgQThcIiwgXCI4NyBCQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIyXCIsIFwiODcgQjggRjAgOUYgODcgQjlcIiwgXCI4NyBCOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEI4IEYwIDlGIDg3IEIzXCIsIFwiODcgQjcgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBBOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIxXCIsIFwiODcgQjggRjAgOUYgODcgQUNcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQUVcIiwgXCI4NyBCOCBGMCA5RiA4NyBBN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI0XCIsIFwiODcgQkYgRjAgOUYgODcgQTZcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEI3XCIsIFwiODcgQjggRjAgOUYgODcgQjhcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOFwiLCBcIjg3IEIxIEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQTlcIiwgXCI4NyBCOCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJGXCIsIFwiODcgQjggRjAgOUYgODcgQUFcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEJFXCIsIFwiODcgQjkgRjAgOUYgODcgQkNcIiwgXCI4NyBCOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEJGXCIsIFwiODcgQjkgRjAgOUYgODcgQURcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI5IEYwIDlGIDg3IEFDXCIsIFwiODcgQjkgRjAgOUYgODcgQjBcIiwgXCI4NyBCOSBGMCA5RiA4NyBCNFwiLCBcIjg3IEI5IEYwIDlGIDg3IEI5XCIsIFwiODcgQjkgRjAgOUYgODcgQjNcIiwgXCI4NyBCOSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIyXCIsIFwiODcgQjkgRjAgOUYgODcgQThcIiwgXCI4NyBCOSBGMCA5RiA4NyBCQlwiLCBcIjg3IEJBIEYwIDlGIDg3IEFDXCIsIFwiODcgQkEgRjAgOUYgODcgQTZcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEE3XCIsIFwiODcgQkEgRjAgOUYgODcgQjhcIiwgXCI4NyBCQiBGMCA5RiA4NyBBRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJFXCIsIFwiODcgQkEgRjAgOUYgODcgQkZcIiwgXCI4NyBCQiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJCIEYwIDlGIDg3IEE2XCIsIFwiODcgQkIgRjAgOUYgODcgQUFcIiwgXCI4NyBCQiBGMCA5RiA4NyBCM1wiLCBcIjg3IEJDIEYwIDlGIDg3IEFCXCIsIFwiODcgQUEgRjAgOUYgODcgQURcIiwgXCI4NyBCRSBGMCA5RiA4NyBBQVwiLCBcIjg3IEJGIEYwIDlGIDg3IEIyXCIsIFwiODcgQkYgRjAgOUYgODcgQkNcIl1cblx0bmV0d29yazpcIlxuPHN2ZyB3aWR0aD0nMTRweCcgaGVpZ2h0PScxMHB4JyB2aWV3Qm94PSc4NyA1IDE0IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cbiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICA8ZGVmcz48L2RlZnM+XG4gICAgPHBhdGggZD0nTTk2LjE0NDQyMDgsMTIuNDM4NTA0MyBDOTUuNjI2Mzc0LDExLjg0NTQ0NTYgOTQuODUyMzYxNiwxMS40Njg5MTE5IDkzLjk4NzU2MywxMS40Njg5MTE5IEM5My4xMzkwMDczLDExLjQ2ODkxMTkgOTIuMzc3ODU5NCwxMS44MzE0MzQxIDkxLjg2MDE2NTIsMTIuNDA1MzE3NyBMOTQuMDIyNTM5MSwxNC41IEw5Ni4xNDQ0MjA4LDEyLjQzODUwNDMgWiBNOTguMzIzNDk2NCwxMC4zMjE0NDI1IEM5Ny4yNDQ3Nzk0LDkuMTkxNzQ1NjMgOTUuNzAxNDM4Nyw4LjQ4NDQ1NTk2IDkzLjk4NzU2Myw4LjQ4NDQ1NTk2IEM5Mi4yODgyNzIzLDguNDg0NDU1OTYgOTAuNzU2NjI2NCw5LjE3OTc1ODkzIDg5LjY3OTI2OTgsMTAuMjkyNjkzNiBMOTAuNzY5Mjk4NywxMS4zNDg2IEM5MS41NjcyMDUsMTAuNTA1MzcwOCA5Mi43MTM2NDgsOS45NzY2ODM5NCA5My45ODc1NjMsOS45NzY2ODM5NCBDOTUuMjc2ODgzNiw5Ljk3NjY4Mzk0IDk2LjQzNTYzMDUsMTAuNTE4MjM1IDk3LjIzNDYyMTUsMTEuMzc5MzI5MyBMOTguMzIzNDk2NCwxMC4zMjE0NDI1IEw5OC4zMjM0OTY0LDEwLjMyMTQ0MjUgWiBNMTAwLjUsOC4yMDY4NzkzMyBDOTguODYyOTU3OCw2LjUzOTQzNjcyIDk2LjU1MDU2OTksNS41IDkzLjk4NzU2Myw1LjUgQzkxLjQzNzUxMDMsNS41IDg5LjEzNTU0OTYsNi41Mjg5NTYwNSA4Ny41LDguMTgxNjQ0MzEgTDg4LjU4OTU1NzksOS4yMzcwOTQ0MSBDODkuOTQ2MDc5OCw3Ljg1NDMxNjU1IDkxLjg2Mjg5MjEsNi45OTIyMjc5OCA5My45ODc1NjMsNi45OTIyMjc5OCBDOTYuMTI2MDAyNiw2Ljk5MjIyNzk4IDk4LjA1Mzg4MDksNy44NjU1MjYwOSA5OS40MTE4Njk4LDkuMjY0MDQyNzIgTDEwMC41LDguMjA2ODc5MzMgWicgaWQ9J1dpLUZpJyBzdHJva2U9J25vbmUnIGZpbGw9JyMwMzAzMDMnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PC9wYXRoPlxuPC9zdmc+XCJcblx0YWN0aXZpdHk6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlNvY2NlciBCYWxsPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPlxuXHRcdFx0XHRcdDxjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNzkuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J1NvY2Nlci1CYWxsJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNzkuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxtYXNrIGlkPSdtYXNrLTInIHNrZXRjaDpuYW1lPSdNYXNrJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdFx0XHRcdFx0PHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdFx0XHRcdFx0PC9tYXNrPlxuXHRcdFx0XHRcdFx0XHQ8dXNlIGlkPSdNYXNrJyBzdHJva2U9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNiwxMi4xMjAzMDQ2IEwxMi44NTczMzg0LDggTDEzLjM3MjM3NjUsOC44NTcxNjczIEw2LjUxNTAzODA3LDEyLjk3NzQ3MTkgTDYsMTIuMTIwMzA0NiBMNiwxMi4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDcnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTkuMTAwMTEwMyw1LjM0NTEwOTAxIEwxOS41MjI3Mjg1LDYuMjUxNDE2OCBMMTIuMjcyMjY2Miw5LjYzMjM2Mjg5IEwxMS44NDk2NDgsOC43MjYwNTUxIEwxMS44NDk2NDgsOC43MjYwNTUxIFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMy4xMjAzMDQ2IEwxMi44NTczMzg0LC0xIEwxMy4zNzIzNzY1LC0wLjE0MjgzMjY5OSBMNi41MTUwMzgwNywzLjk3NzQ3MTkgTDYsMy4xMjAzMDQ2IEw2LDMuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00tMSw3LjEyMDMwNDYgTDUuODU3MzM4NDEsMyBMNi4zNzIzNzY0OCwzLjg1NzE2NzMgTC0wLjQ4NDk2MTkyNSw3Ljk3NzQ3MTkgTC0xLDcuMTIwMzA0NiBMLTEsNy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PSc0JyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PSc1Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTEuNScgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nMTInPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsNC44NTcxNjczIEwxMS44NTczMzg0LDguOTc3NDcxOSBMMTIuMzcyMzc2NSw4LjEyMDMwNDYgTDUuNTE1MDM4MDcsNCBMNSw0Ljg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDEyLjg1NzE2NzMgTDExLjg1NzMzODQsMTYuOTc3NDcxOSBMMTIuMzcyMzc2NSwxNi4xMjAzMDQ2IEw1LjUxNTAzODA3LDEyIEw1LDEyLjg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weS01JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEnIGZpbGw9JyNEOEQ4RDgnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMS1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNDU3NzExODksMy4xOTUwNDczOSBMNy4zNTUxNDQ4NCw2LjEzMjE4MzMzIEw0LjUzMDA2NzYsNi45NDIyNjEyIEwyLjg4NjY0MDg5LDQuNTA1NzgwOSBMNC42OTYwMjQ1NywyLjE4OTg3NTQxIEw3LjQ1NzcxMTg5LDMuMTk1MDQ3MzknIGlkPSdQb2x5Z29uLTEtQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNDU3NzExODksMTEuMTk1MDQ3NCBMNy4zNTUxNDQ4NCwxNC4xMzIxODMzIEw0LjUzMDA2NzYsMTQuOTQyMjYxMiBMMi44ODY2NDA4OSwxMi41MDU3ODA5IEw0LjY5NjAyNDU3LDEwLjE4OTg3NTQgTDcuNDU3NzExODksMTEuMTk1MDQ3NCcgaWQ9J1BvbHlnb24tMS1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQgTDE0LjQ0MDYwMzEsMy4wMDk3Mjk4OCBMMTEuNjE1NTI1OCwzLjgxOTgwNzc0IEw5Ljk3MjA5OTEyLDEuMzgzMzI3NDUgTDExLjc4MTQ4MjgsLTAuOTMyNTc4MDUgTDE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0JyBpZD0nUG9seWdvbi0xLUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRhbmltYWxzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Hcm91cDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExNy4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpY19Gb29kJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMTguMDAwMDAwLCA2NDAuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdHcm91cCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNjgzNzc1MzcsMS4zODE1NjY0NiBDNi4yMzkyNjA2NiwxLjEzNjI0IDYuODUzNzIwMDUsMSA3LjUsMSBDOC4xNDYyNzk5NSwxIDguNzYwNzM5MzQsMS4xMzYyNCA5LjMxNjIyNDYzLDEuMzgxNTY2NDYgQzkuODA4NzkyNzUsMC41NjIzNTkwMTkgMTAuODI1NTg4OCwwIDEyLDAgQzEzLjY1Njg1NDIsMCAxNSwxLjExOTI4ODEzIDE1LDIuNSBDMTUsMy41NTcxMzk4IDE0LjIxMjYyNDYsNC40NjEwMjg0MyAxMy4wOTk5MjI2LDQuODI2NjI1MTQgQzE0LjI0OTY1MjgsNS42NDE4NTQyMiAxNSw2Ljk4MzMwMDYyIDE1LDguNSBDMTUsMTAuNzE2NzE0NCAxMy4zOTcxODczLDEyLjU1OTA3MTkgMTEuMjg3MjY3MSwxMi45MzEzNjczIEMxMC40ODY3MjQ4LDE0LjE3NTc3MDMgOS4wODk2MTY5NiwxNSA3LjUsMTUgQzUuOTEwMzgzMDQsMTUgNC41MTMyNzUyNCwxNC4xNzU3NzAzIDMuNzEyNzMyOTEsMTIuOTMxMzY3MyBDMS42MDI4MTI2OCwxMi41NTkwNzE5IDAsMTAuNzE2NzE0NCAwLDguNSBDMCw2Ljk4MzMwMDYyIDAuNzUwMzQ3MjQ0LDUuNjQxODU0MjIgMS45MDAwNzc0MSw0LjgyNjYyNTE0IEMwLjc4NzM3NTQ0NSw0LjQ2MTAyODQzIDAsMy41NTcxMzk4IDAsMi41IEMwLDEuMTE5Mjg4MTMgMS4zNDMxNDU3NSwwIDMsMCBDNC4xNzQ0MTEyMiwwIDUuMTkxMjA3MjUsMC41NjIzNTkwMTkgNS42ODM3NzUzNywxLjM4MTU2NjQ2IFonIGlkPSdPdmFsLTgnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS43MzgzNDIyOCwxMiBDNS44NjI5MDk3OSwxMiA2LjE0NjQyMzUzLDEyIDYuMTQ2NDIzNTMsMTIgQzYuMTQ2NDIzNTMsMTIgNi40MzIxNTY5NiwxMi40NDI2MTIzIDYuNTI0NjU4MiwxMi40OTE5NzM5IEM2LjY2NDU1NjAxLDEyLjU2NjYyNzcgNywxMi40OTE5NzM5IDcsMTIuNDkxOTczOSBMNywxMiBMOCwxMiBMOCwxMi40OTE5NzM5IEw4LjQ5Nzk5MjI4LDEyLjQ5MTk3MzkgTDguODQzMDE3NjksMTIgTDkuMzkxODQ1NywxMiBDOS4zOTE4NDU3LDEyIDguOTk1OTg0NTcsMTIuOTgzOTQ3OCA4LjQ5Nzk5MjI4LDEyLjk4Mzk0NzggTDYuNjA3MDI0MDcsMTIuOTgzOTQ3OCBDNi4yMTQwNDgxMywxMi45ODM5NDc4IDUuNDU5OTYwOTQsMTIgNS43MzgzNDIyOCwxMiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHktMic+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQnIGN4PScxMC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQtQ29weScgY3g9JzQuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTIuNjk5OTk2OSw1IEMxMi42OTk5OTY5LDMuMDY3MDAzMzggMTEuMTMyOTkzNiwxLjUgOS4xOTk5OTY5NSwxLjUnIGlkPSdPdmFsLTE2Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSw1IEM1LjUsMy4wNjcwMDMzOCAzLjkzMjk5NjYyLDEuNSAyLDEuNScgaWQ9J092YWwtMTYtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy43NTAwMDAsIDMuMjUwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zLjc1MDAwMCwgLTMuMjUwMDAwKSAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHg9JzcnIHk9JzExJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTAgTDYuNSwxMCBMNi40OTk5OTk5OSw5LjUgTDguNTAwMDAwMDUsOS41IEw4LjUwMDAwMDA1LDEwIEw5LDEwIEw5LDEwLjUgTDguNSwxMC41IEw4LjUsMTEgTDYuNSwxMSBMNi41LDEwLjUgTDYsMTAuNSBMNiwxMCBaJyBpZD0nUGF0aCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRjaGV2cm9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScxM3B4JyBoZWlnaHQ9JzIycHgnIHZpZXdCb3g9JzAgMCAxMyAyMicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmFjayBDaGV2cm9uPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0ICAgICAgICA8ZyBpZD0nTmF2aWdhdGlvbi1CYXIvQmFjaycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTguMDAwMDAwLCAtMzEuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTguNSw0MiBMMTksMzEuNSBMMjEsMzMuNSBMMTIuNSw0MiBMMjEsNTAuNSBMMTksNTIuNSBMOC41LDQyIFonIGlkPSdCYWNrLUNoZXZyb24nPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGVtb2ppczogW1wi8J+YgFwiLCBcIvCfmKxcIiwgXCLwn5iBXCIsIFwi8J+YglwiLCBcIvCfmINcIiwgXCLwn5iEXCIsIFwi8J+YhVwiLCBcIvCfmIZcIiwgXCLwn5iHXCIsIFwi8J+YiVwiLCBcIvCfmIpcIiwgXCLwn5mCXCIsIFwi8J+Zg1wiLCBcIuKYuu+4j1wiLCBcIvCfmItcIiwgXCLwn5iMXCIsIFwi8J+YjVwiLCBcIvCfmJhcIiwgXCLwn5iXXCIsIFwi8J+YmVwiLCBcIvCfmJpcIiwgXCLwn5icXCIsIFwi8J+YnVwiLCBcIvCfmJtcIiwgXCLwn6SRXCIsIFwi8J+kk1wiLCBcIvCfmI5cIiwgXCLwn6SXXCIsIFwi8J+Yj1wiLCBcIvCfmLZcIiwgXCLwn5iQXCIsIFwi8J+YkVwiLCBcIvCfmJJcIiwgXCLwn5mEXCIsIFwi8J+klFwiLCBcIvCfmLNcIiwgXCLwn5ieXCIsIFwi8J+Yn1wiLCBcIvCfmKBcIiwgXCLwn5ihXCIsIFwi8J+YlFwiLCBcIvCfmJVcIiwgXCLwn5mBXCIsIFwi4pi577iPXCIsIFwi8J+Yo1wiLCBcIvCfmJZcIiwgXCLwn5irXCIsIFwi8J+YqVwiLCBcIvCfmKRcIiwgXCLwn5iuXCIsIFwi8J+YsVwiLCBcIvCfmKhcIiwgXCLwn5iwXCIsIFwi8J+Yr1wiLCBcIvCfmKZcIiwgXCLwn5inXCIsIFwi8J+YolwiLCBcIvCfmKVcIiwgXCLwn5iqXCIsIFwi8J+Yk1wiLCBcIvCfmK1cIiwgXCLwn5i1XCIsIFwi8J+YslwiLCBcIvCfpJBcIiwgXCLwn5i3XCIsIFwi8J+kklwiLCBcIvCfpJVcIiwgXCLwn5i0XCIsIFwi8J+SpFwiLCBcIvCfkqlcIiwgXCLwn5iIXCIsIFwi8J+Rv1wiLCBcIvCfkblcIiwgXCLwn5G6XCIsIFwi8J+SgFwiLCBcIvCfkbtcIiwgXCLwn5G9XCIsIFwi8J+kllwiLCBcIvCfmLpcIiwgXCLwn5i4XCIsIFwi8J+YuVwiLCBcIvCfmLtcIiwgXCLwn5i8XCIsIFwi8J+YvVwiLCBcIvCfmYBcIiwgXCLwn5i/XCIsIFwi8J+YvlwiLCBcIvCfmYxcIiwgXCLwn5GPXCIsIFwi8J+Ri1wiLCBcIvCfkY1cIiwgXCLwn5GOXCIsIFwi8J+RilwiLCBcIuKcilwiLCBcIuKcjO+4j1wiLCBcIvCfkYxcIiwgXCLinItcIiwgXCLwn5GQXCIsIFwi8J+SqlwiLCBcIvCfmY9cIiwgXCLimJ3vuI9cIiwgXCLwn5GGXCIsIFwi8J+Rh1wiLCBcIvCfkYhcIiwgXCLwn5GJXCIsIFwi8J+WlVwiLCBcIvCflpBcIiwgXCLwn6SYXCIsIFwi8J+WllwiLCBcIuKcje+4j1wiLCBcIvCfkoVcIiwgXCLwn5GEXCIsIFwi8J+RhVwiLCBcIvCfkYJcIiwgXCLwn5GDXCIsIFwi8J+RgVwiLCBcIvCfkYBcIiwgXCLwn5GkXCIsIFwi8J+RpVwiLCBcIvCfl6NcIiwgXCLwn5G2XCIsIFwi8J+RplwiLCBcIvCfkadcIiwgXCLwn5GoXCIsIFwi8J+RqVwiLCBcIvCfkbFcIiwgXCLwn5G0XCIsIFwi8J+RtVwiLCBcIvCfkbJcIiwgXCLwn5GzXCIsIFwi8J+RrlwiLCBcIvCfkbdcIiwgXCLwn5KCXCIsIFwi8J+VtVwiLCBcIvCfjoVcIiwgXCLwn5G8XCIsIFwi8J+RuFwiLCBcIvCfkbBcIiwgXCLwn5q2XCIsIFwi8J+Pg1wiLCBcIvCfkoNcIiwgXCLwn5GvXCIsIFwi8J+Rq1wiLCBcIvCfkaxcIiwgXCLwn5GtXCIsIFwi8J+Zh1wiLCBcIvCfkoFcIiwgXCLwn5mFXCIsIFwi8J+ZhlwiLCBcIvCfmYtcIiwgXCLwn5mOXCIsIFwi8J+ZjVwiLCBcIvCfkodcIiwgXCLwn5KGXCIsIFwi8J+SkVwiLCBcIvCfkanigI3inaTvuI/igI3wn5GpXCIsIFwi8J+RqOKAjeKdpO+4j+KAjfCfkahcIiwgXCLwn5KPXCIsIFwi8J+RqeKAjeKdpO+4j+KAjfCfkovigI3wn5GpXCIsIFwi8J+RqOKAjeKdpO+4j+KAjfCfkovigI3wn5GoXCIsIFwi8J+RqlwiLCBcIvCfkajigI3wn5Gp4oCN8J+Rp1wiLCBcIvCfkajigI3wn5Gp4oCN8J+Rp+KAjfCfkaZcIiwgXCLwn5Go4oCN8J+RqeKAjfCfkabigI3wn5GmXCIsIFwi8J+RqOKAjfCfkanigI3wn5Gn4oCN8J+Rp1wiLCBcIvCfkanigI3wn5Gp4oCN8J+RplwiLCBcIvCfkanigI3wn5Gp4oCN8J+Rp1wiLCBcIvCfkanigI3wn5Gp4oCN8J+Rp+KAjfCfkaZcIiwgXCLwn5Gp4oCN8J+RqeKAjfCfkabigI3wn5GmXCIsIFwi8J+RqeKAjfCfkanigI3wn5Gn4oCN8J+Rp1wiLCBcIvCfkajigI3wn5Go4oCN8J+RplwiLCBcIvCfkajigI3wn5Go4oCN8J+Rp1wiLCBcIvCfkajigI3wn5Go4oCN8J+Rp+KAjfCfkaZcIiwgXCLwn5Go4oCN8J+RqOKAjfCfkabigI3wn5GmXCIsIFwi8J+RqOKAjfCfkajigI3wn5Gn4oCN8J+Rp1wiLCBcIvCfkZpcIiwgXCLwn5GVXCIsIFwi8J+RllwiLCBcIvCfkZRcIiwgXCLwn5GXXCIsIFwi8J+RmVwiLCBcIvCfkZhcIiwgXCLwn5KEXCIsIFwi8J+Si1wiLCBcIvCfkaNcIiwgXCLwn5GgXCIsIFwi8J+RoVwiLCBcIvCfkaJcIiwgXCLwn5GeXCIsIFwi8J+Rn1wiLCBcIvCfkZJcIiwgXCLwn46pXCIsIFwi4puRXCIsIFwi8J+Ok1wiLCBcIvCfkZFcIiwgXCLwn46SXCIsIFwi8J+RnVwiLCBcIvCfkZtcIiwgXCLwn5GcXCIsIFwi8J+SvFwiLCBcIvCfkZNcIiwgXCLwn5W2XCIsIFwi8J+SjVwiLCBcIvCfjIJcIiwgXCLwn5uRXCIsIFwi8J+QtlwiLCBcIvCfkLFcIiwgXCLwn5CtXCIsIFwi8J+QuVwiLCBcIvCfkLBcIiwgXCLwn5C7XCIsIFwi8J+QvFwiLCBcIvCfkKhcIiwgXCLwn5CvXCIsIFwi8J+mgVwiLCBcIvCfkK5cIiwgXCLwn5C3XCIsIFwi8J+QvVwiLCBcIvCfkLhcIiwgXCLwn5CZXCIsIFwi8J+QtVwiLCBcIvCfmYhcIiwgXCLwn5mJXCIsIFwi8J+ZilwiLCBcIvCfkJJcIiwgXCLwn5CUXCIsIFwi8J+Qp1wiLCBcIvCfkKZcIiwgXCLwn5CkXCIsIFwi8J+Qo1wiLCBcIvCfkKVcIiwgXCLwn5C6XCIsIFwi8J+Ql1wiLCBcIvCfkLRcIiwgXCLwn6aEXCIsIFwi8J+QnVwiLCBcIvCfkJtcIiwgXCLwn5CMXCIsIFwi8J+QnlwiLCBcIvCfkJxcIiwgXCLwn5W3XCIsIFwi8J+mglwiLCBcIvCfpoBcIiwgXCLwn5CNXCIsIFwi8J+QolwiLCBcIvCfkKBcIiwgXCLwn5CfXCIsIFwi8J+QoVwiLCBcIvCfkKxcIiwgXCLwn5CzXCIsIFwi8J+Qi1wiLCBcIvCfkIpcIiwgXCLwn5CGXCIsIFwi8J+QhVwiLCBcIvCfkINcIiwgXCLwn5CCXCIsIFwi8J+QhFwiLCBcIvCfkKpcIiwgXCLwn5CrXCIsIFwi8J+QmFwiLCBcIvCfkJBcIiwgXCLwn5CPXCIsIFwi8J+QkVwiLCBcIvCfkI5cIiwgXCLwn5CWXCIsIFwi8J+QgFwiLCBcIvCfkIFcIiwgXCLwn5CTXCIsIFwi8J+mg1wiLCBcIvCflYpcIiwgXCLwn5CVXCIsIFwi8J+QqVwiLCBcIvCfkIhcIiwgXCLwn5CHXCIsIFwi8J+Qv1wiLCBcIvCfkL5cIiwgXCLwn5CJXCIsIFwi8J+QslwiLCBcIvCfjLVcIiwgXCLwn46EXCIsIFwi8J+MslwiLCBcIvCfjLNcIiwgXCLwn4y0XCIsIFwi8J+MsVwiLCBcIvCfjL9cIiwgXCLimJhcIiwgXCLwn42AXCIsIFwi8J+OjVwiLCBcIvCfjotcIiwgXCLwn42DXCIsIFwi8J+NglwiLCBcIvCfjYFcIiwgXCLwn4y+XCIsIFwi8J+MulwiLCBcIvCfjLpcIiwgXCLwn4y7XCIsIFwi8J+MuVwiLCBcIvCfjLdcIiwgXCLwn4y8XCIsIFwi8J+MuFwiLCBcIvCfkpBcIiwgXCLwn42EXCIsIFwi8J+MsFwiLCBcIvCfjoNcIiwgXCLwn5CaXCIsIFwi8J+VuFwiLCBcIvCfjI5cIiwgXCLwn4yNXCIsIFwi8J+Mj1wiLCBcIvCfjJVcIiwgXCLwn4yWXCIsIFwi8J+Ml1wiLCBcIvCfjJhcIiwgXCLwn4yRXCIsIFwi8J+MklwiLCBcIvCfjJNcIiwgXCLwn4yUXCIsIFwi8J+MmlwiLCBcIvCfjJ1cIiwgXCLwn4ybXCIsIFwi8J+MnFwiLCBcIvCfjJ5cIiwgXCLwn4yZXCIsIFwi4q2Q77iPXCIsIFwi8J+Mn1wiLCBcIvCfkqtcIiwgXCLinKhcIiwgXCLimITvuI9cIiwgXCLimIDvuI9cIiwgXCLwn4ykXCIsIFwi4puF77iPXCIsIFwi8J+MpVwiLCBcIvCfjKZcIiwgXCLimIHvuI9cIiwgXCLwn4ynXCIsIFwi4puIXCIsIFwi8J+MqVwiLCBcIuKaoe+4j1wiLCBcIvCflKVcIiwgXCLwn5KlXCIsIFwi4p2E77iPXCIsIFwi8J+MqFwiLCBcIuKYg++4j1wiLCBcIuKbhO+4j1wiLCBcIvCfjKxcIiwgXCLwn5KoXCIsIFwi8J+MqlwiLCBcIvCfjKtcIiwgXCLimILvuI9cIiwgXCLimJTvuI9cIiwgXCLwn5KnXCIsIFwi8J+SplwiLCBcIvCfjIpcIiwgXCLwn5uRXCIsIFwi8J+bkVwiLCBcIvCfjY9cIiwgXCLwn42OXCIsIFwi8J+NkFwiLCBcIvCfjYpcIiwgXCLwn42LXCIsIFwi8J+NjFwiLCBcIvCfjYlcIiwgXCLwn42HXCIsIFwi8J+Nk1wiLCBcIvCfjYhcIiwgXCLwn42SXCIsIFwi8J+NkVwiLCBcIvCfjY1cIiwgXCLwn42FXCIsIFwi8J+NhlwiLCBcIvCfjLZcIiwgXCLwn4y9XCIsIFwi8J+NoFwiLCBcIvCfja9cIiwgXCLwn42eXCIsIFwi8J+ngFwiLCBcIvCfjZdcIiwgXCLwn42WXCIsIFwi8J+NpFwiLCBcIvCfjbNcIiwgXCLwn42UXCIsIFwi8J+Nn1wiLCBcIvCfjK1cIiwgXCLwn42VXCIsIFwi8J+NnVwiLCBcIvCfjK5cIiwgXCLwn4yvXCIsIFwi8J+NnFwiLCBcIvCfjbJcIiwgXCLwn42lXCIsIFwi8J+No1wiLCBcIvCfjbFcIiwgXCLwn42bXCIsIFwi8J+NmVwiLCBcIvCfjZpcIiwgXCLwn42YXCIsIFwi8J+NolwiLCBcIvCfjaFcIiwgXCLwn42nXCIsIFwi8J+NqFwiLCBcIvCfjaZcIiwgXCLwn42wXCIsIFwi8J+OglwiLCBcIvCfja5cIiwgXCLwn42sXCIsIFwi8J+NrVwiLCBcIvCfjatcIiwgXCLwn42/XCIsIFwi8J+NqVwiLCBcIvCfjapcIiwgXCLwn426XCIsIFwi8J+Nu1wiLCBcIvCfjbdcIiwgXCLwn424XCIsIFwi8J+NuVwiLCBcIvCfjb5cIiwgXCLwn422XCIsIFwi8J+NtVwiLCBcIuKYle+4j1wiLCBcIvCfjbxcIiwgXCLwn420XCIsIFwi8J+NvVwiLCBcIvCfm5FcIiwgXCLwn5uRXCIsIFwi8J+bkVwiLCBcIuKave+4j1wiLCBcIvCfj4BcIiwgXCLwn4+IXCIsIFwi4pq+77iPXCIsIFwi8J+OvlwiLCBcIvCfj5BcIiwgXCLwn4+JXCIsIFwi8J+OsVwiLCBcIuKbs++4j1wiLCBcIvCfj4xcIiwgXCLwn4+TXCIsIFwi8J+PuFwiLCBcIvCfj5JcIiwgXCLwn4+RXCIsIFwi8J+Pj1wiLCBcIvCfjr9cIiwgXCLim7dcIiwgXCLwn4+CXCIsIFwi4pu4XCIsIFwi8J+PuVwiLCBcIvCfjqNcIiwgXCLwn5qjXCIsIFwi8J+PilwiLCBcIvCfj4RcIiwgXCLwn5uAXCIsIFwi4pu5XCIsIFwi8J+Pi1wiLCBcIvCfmrRcIiwgXCLwn5q1XCIsIFwi8J+Ph1wiLCBcIvCflbRcIiwgXCLwn4+GXCIsIFwi8J+OvVwiLCBcIvCfj4VcIiwgXCLwn46WXCIsIFwi8J+Ol1wiLCBcIvCfj7VcIiwgXCLwn46rXCIsIFwi8J+On1wiLCBcIvCfjq1cIiwgXCLwn46oXCIsIFwi8J+OqlwiLCBcIvCfjqRcIiwgXCLwn46nXCIsIFwi8J+OvFwiLCBcIvCfjrlcIiwgXCLwn463XCIsIFwi8J+OulwiLCBcIvCfjrhcIiwgXCLwn467XCIsIFwi8J+OrFwiLCBcIvCfjq5cIiwgXCLwn5G+XCIsIFwi8J+Or1wiLCBcIvCfjrJcIiwgXCLwn46wXCIsIFwi8J+Os1wiLCBcIvCfm5FcIiwgXCLwn5uRXCIsIFwi8J+bkVwiLCBcIvCfmpdcIiwgXCLwn5qVXCIsIFwi8J+amVwiLCBcIvCfmoxcIiwgXCLwn5qOXCIsIFwi8J+PjlwiLCBcIvCfmpNcIiwgXCLwn5qRXCIsIFwi8J+aklwiLCBcIvCfmpBcIiwgXCLwn5qaXCIsIFwi8J+am1wiLCBcIvCfmpxcIiwgXCLwn4+NXCIsIFwi8J+aslwiLCBcIvCfmqhcIiwgXCLwn5qUXCIsIFwi8J+ajVwiLCBcIvCfmphcIiwgXCLwn5qWXCIsIFwi8J+aoVwiLCBcIvCfmqBcIiwgXCLwn5qvXCIsIFwi8J+ag1wiLCBcIvCfmotcIiwgXCLwn5qdXCIsIFwi8J+ahFwiLCBcIvCfmoVcIiwgXCLwn5qIXCIsIFwi8J+anlwiLCBcIvCfmoJcIiwgXCLwn5qGXCIsIFwi8J+ah1wiLCBcIvCfmopcIiwgXCLwn5qJXCIsIFwi8J+agVwiLCBcIvCfm6lcIiwgXCLinIjvuI9cIiwgXCLwn5urXCIsIFwi8J+brFwiLCBcIuKbte+4j1wiLCBcIvCfm6VcIiwgXCLwn5qkXCIsIFwi4pu0XCIsIFwi8J+bs1wiLCBcIvCfmoBcIiwgXCLwn5uwXCIsIFwi8J+SulwiLCBcIuKak++4j1wiLCBcIvCfmqdcIiwgXCLim73vuI9cIiwgXCLwn5qPXCIsIFwi8J+aplwiLCBcIvCfmqVcIiwgXCLwn4+BXCIsIFwi8J+aolwiLCBcIvCfjqFcIiwgXCLwn46iXCIsIFwi8J+OoFwiLCBcIvCfj5dcIiwgXCLwn4yBXCIsIFwi8J+XvFwiLCBcIvCfj61cIiwgXCLim7LvuI9cIiwgXCLwn46RXCIsIFwi4puwXCIsIFwi8J+PlFwiLCBcIvCfl7tcIiwgXCLwn4yLXCIsIFwi8J+XvlwiLCBcIvCfj5VcIiwgXCLim7rvuI9cIiwgXCLwn4+eXCIsIFwi8J+bo1wiLCBcIvCfm6RcIiwgXCLwn4yFXCIsIFwi8J+MhFwiLCBcIvCfj5xcIiwgXCLwn4+WXCIsIFwi8J+PnVwiLCBcIvCfjIdcIiwgXCLwn4yGXCIsIFwi8J+PmVwiLCBcIvCfjINcIiwgXCLwn4yJXCIsIFwi8J+MjFwiLCBcIvCfjKBcIiwgXCLwn46HXCIsIFwi8J+OhlwiLCBcIvCfjIhcIiwgXCLwn4+YXCIsIFwi8J+PsFwiLCBcIvCfj69cIiwgXCLwn4+fXCIsIFwi8J+XvVwiLCBcIvCfj6BcIiwgXCLwn4+hXCIsIFwi8J+PmlwiLCBcIvCfj6JcIiwgXCLwn4+sXCIsIFwi8J+Po1wiLCBcIvCfj6RcIiwgXCLwn4+lXCIsIFwi8J+PplwiLCBcIvCfj6hcIiwgXCLwn4+qXCIsIFwi8J+Pq1wiLCBcIvCfj6lcIiwgXCLwn5KSXCIsIFwi8J+Pm1wiLCBcIuKbqu+4j1wiLCBcIvCflYxcIiwgXCLwn5WNXCIsIFwi8J+Vi1wiLCBcIuKbqVwiLCBcIuKMmu+4j1wiLCBcIvCfk7FcIiwgXCLwn5OyXCIsIFwi8J+Su1wiLCBcIuKMqO+4j1wiLCBcIvCflqVcIiwgXCLwn5aoXCIsIFwi8J+WsVwiLCBcIvCflrJcIiwgXCLwn5W5XCIsIFwi8J+XnFwiLCBcIvCfkr1cIiwgXCLwn5K+XCIsIFwi8J+Sv1wiLCBcIvCfk4BcIiwgXCLwn5O8XCIsIFwi8J+Tt1wiLCBcIvCfk7hcIiwgXCLwn5O5XCIsIFwi8J+OpVwiLCBcIvCfk71cIiwgXCLwn46eXCIsIFwi8J+TnlwiLCBcIuKYju+4j1wiLCBcIvCfk59cIiwgXCLwn5OgXCIsIFwi8J+TulwiLCBcIvCfk7tcIiwgXCLwn46ZXCIsIFwi8J+OmlwiLCBcIvCfjptcIiwgXCLij7FcIiwgXCLij7JcIiwgXCLij7BcIiwgXCLwn5WwXCIsIFwi4o+zXCIsIFwi4oyb77iPXCIsIFwi8J+ToVwiLCBcIvCflItcIiwgXCLwn5SMXCIsIFwi8J+SoVwiLCBcIvCflKZcIiwgXCLwn5WvXCIsIFwi8J+XkVwiLCBcIvCfm6JcIiwgXCLwn5K4XCIsIFwi8J+StVwiLCBcIvCfkrRcIiwgXCLwn5K2XCIsIFwi8J+St1wiLCBcIvCfkrBcIiwgXCLwn5KzXCIsIFwi8J+SjlwiLCBcIuKallwiLCBcIvCflKdcIiwgXCLwn5SoXCIsIFwi4pqSXCIsIFwi8J+boFwiLCBcIuKbj1wiLCBcIvCflKlcIiwgXCLimplcIiwgXCLim5NcIiwgXCLwn5SrXCIsIFwi8J+So1wiLCBcIvCflKpcIiwgXCLwn5ehXCIsIFwi4pqUXCIsIFwi8J+boVwiLCBcIvCfmqxcIiwgXCLimKDvuI9cIiwgXCLimrBcIiwgXCLimrFcIiwgXCLwn4+6XCIsIFwi8J+UrlwiLCBcIvCfk79cIiwgXCLwn5KIXCIsIFwi4pqXXCIsIFwi8J+UrVwiLCBcIvCflKxcIiwgXCLwn5WzXCIsIFwi8J+SilwiLCBcIvCfkolcIiwgXCLwn4yhXCIsIFwi8J+Pt1wiLCBcIvCflJZcIiwgXCLwn5q9XCIsIFwi8J+av1wiLCBcIvCfm4FcIiwgXCLwn5SRXCIsIFwi8J+XnVwiLCBcIvCfm4tcIiwgXCLwn5uMXCIsIFwi8J+bj1wiLCBcIvCfmqpcIiwgXCLwn5uOXCIsIFwi8J+WvFwiLCBcIvCfl7pcIiwgXCLim7FcIiwgXCLwn5e/XCIsIFwi8J+bjVwiLCBcIvCfjohcIiwgXCLwn46PXCIsIFwi8J+OgFwiLCBcIvCfjoFcIiwgXCLwn46KXCIsIFwi8J+OiVwiLCBcIvCfjo5cIiwgXCLwn46QXCIsIFwi8J+OjFwiLCBcIvCfj65cIiwgXCLinInvuI9cIiwgXCLwn5OpXCIsIFwi8J+TqFwiLCBcIvCfk6dcIiwgXCLwn5KMXCIsIFwi8J+TrlwiLCBcIvCfk6pcIiwgXCLwn5OrXCIsIFwi8J+TrFwiLCBcIvCfk61cIiwgXCLwn5OmXCIsIFwi8J+Tr1wiLCBcIvCfk6VcIiwgXCLwn5OkXCIsIFwi8J+TnFwiLCBcIvCfk4NcIiwgXCLwn5ORXCIsIFwi8J+TilwiLCBcIvCfk4hcIiwgXCLwn5OJXCIsIFwi8J+ThFwiLCBcIvCfk4VcIiwgXCLwn5OGXCIsIFwi8J+Xk1wiLCBcIvCfk4dcIiwgXCLwn5eDXCIsIFwi8J+Xs1wiLCBcIvCfl4RcIiwgXCLwn5OLXCIsIFwi8J+XklwiLCBcIvCfk4FcIiwgXCLwn5OCXCIsIFwi8J+XglwiLCBcIvCfl55cIiwgXCLwn5OwXCIsIFwi8J+Tk1wiLCBcIvCfk5VcIiwgXCLwn5OXXCIsIFwi8J+TmFwiLCBcIvCfk5lcIiwgXCLwn5OUXCIsIFwi8J+TklwiLCBcIvCfk5pcIiwgXCLwn5OWXCIsIFwi8J+Ul1wiLCBcIvCfk45cIiwgXCLwn5aHXCIsIFwi4pyC77iPXCIsIFwi8J+TkFwiLCBcIvCfk49cIiwgXCLwn5OMXCIsIFwi8J+TjVwiLCBcIvCfmqlcIiwgXCLwn4+zXCIsIFwi8J+PtFwiLCBcIvCflJBcIiwgXCLwn5SSXCIsIFwi8J+Uk1wiLCBcIvCflI9cIiwgXCLwn5aKXCIsIFwi8J+Wi1wiLCBcIuKcku+4j1wiLCBcIvCfk51cIiwgXCLinI/vuI9cIiwgXCLwn5aNXCIsIFwi8J+WjFwiLCBcIvCflI1cIiwgXCLwn5SOXCIsIFwi8J+bkVwiLCBcIvCfm5FcIiwgXCLinaTvuI9cIiwgXCLwn5KbXCIsIFwi8J+SmlwiLCBcIvCfkplcIiwgXCLwn5KcXCIsIFwi8J+SlFwiLCBcIuKdo++4j1wiLCBcIvCfkpVcIiwgXCLwn5KeXCIsIFwi8J+Sk1wiLCBcIvCfkpdcIiwgXCLwn5KWXCIsIFwi8J+SmFwiLCBcIvCfkp1cIiwgXCLwn5KfXCIsIFwi4piu77iPXCIsIFwi4pyd77iPXCIsIFwi4piq77iPXCIsIFwi8J+ViVwiLCBcIuKYuO+4j1wiLCBcIuKcoe+4j1wiLCBcIvCflK9cIiwgXCLwn5WOXCIsIFwi4piv77iPXCIsIFwi4pim77iPXCIsIFwi8J+bkFwiLCBcIuKbjlwiLCBcIuKZiO+4j1wiLCBcIuKZie+4j1wiLCBcIuKZiu+4j1wiLCBcIuKZi++4j1wiLCBcIuKZjO+4j1wiLCBcIuKZje+4j1wiLCBcIuKZju+4j1wiLCBcIuKZj++4j1wiLCBcIuKZkO+4j1wiLCBcIuKZke+4j1wiLCBcIuKZku+4j1wiLCBcIuKZk++4j1wiLCBcIvCfhpRcIiwgXCLimptcIiwgXCLwn4izXCIsIFwi8J+IuVwiLCBcIuKYou+4j1wiLCBcIuKYo++4j1wiLCBcIvCfk7RcIiwgXCLwn5OzXCIsIFwi8J+ItlwiLCBcIvCfiJrvuI9cIiwgXCLwn4i4XCIsIFwi8J+IulwiLCBcIvCfiLfvuI9cIiwgXCLinLTvuI9cIiwgXCLwn4aaXCIsIFwi8J+JkVwiLCBcIvCfkq5cIiwgXCLwn4mQXCIsIFwi44qZ77iPXCIsIFwi44qX77iPXCIsIFwi8J+ItFwiLCBcIvCfiLVcIiwgXCLwn4iyXCIsIFwi8J+FsO+4j1wiLCBcIvCfhbHvuI9cIiwgXCLwn4aOXCIsIFwi8J+GkVwiLCBcIvCfhb7vuI9cIiwgXCLwn4aYXCIsIFwi4puU77iPXCIsIFwi8J+Tm1wiLCBcIvCfmqtcIiwgXCLinYxcIiwgXCLirZXvuI9cIiwgXCLwn5KiXCIsIFwi4pmo77iPXCIsIFwi8J+at1wiLCBcIvCfmq9cIiwgXCLwn5qzXCIsIFwi8J+asVwiLCBcIvCflJ5cIiwgXCLwn5O1XCIsIFwi4p2X77iPXCIsIFwi4p2VXCIsIFwi4p2TXCIsIFwi4p2UXCIsIFwi4oC877iPXCIsIFwi4oGJ77iPXCIsIFwi8J+Sr1wiLCBcIvCflIVcIiwgXCLwn5SGXCIsIFwi8J+UsVwiLCBcIuKanFwiLCBcIuOAve+4j1wiLCBcIuKaoO+4j1wiLCBcIvCfmrhcIiwgXCLwn5SwXCIsIFwi4pm777iPXCIsIFwi8J+Ir++4j1wiLCBcIvCfkrlcIiwgXCLinYfvuI9cIiwgXCLinLPvuI9cIiwgXCLinY5cIiwgXCLinIVcIiwgXCLwn5KgXCIsIFwi8J+MgFwiLCBcIuKev1wiLCBcIvCfjJBcIiwgXCLik4LvuI9cIiwgXCLwn4+nXCIsIFwi8J+Igu+4j1wiLCBcIvCfm4JcIiwgXCLwn5uDXCIsIFwi8J+bhFwiLCBcIvCfm4VcIiwgXCLimb/vuI9cIiwgXCLwn5qtXCIsIFwi8J+avlwiLCBcIvCfhb/vuI9cIiwgXCLwn5qwXCIsIFwi8J+auVwiLCBcIvCfmrpcIiwgXCLwn5q8XCIsIFwi8J+au1wiLCBcIvCfmq5cIiwgXCLwn46mXCIsIFwi8J+TtlwiLCBcIvCfiIFcIiwgXCLwn4aWXCIsIFwi8J+Gl1wiLCBcIvCfhplcIiwgXCLwn4aSXCIsIFwi8J+GlVwiLCBcIvCfhpNcIiwgXCIw77iP4oOjXCIsIFwiMe+4j+KDo1wiLCBcIjLvuI/ig6NcIiwgXCIz77iP4oOjXCIsIFwiNO+4j+KDo1wiLCBcIjXvuI/ig6NcIiwgXCI277iP4oOjXCIsIFwiN++4j+KDo1wiLCBcIjjvuI/ig6NcIiwgXCI577iP4oOjXCIsIFwi8J+Un1wiLCBcIvCflKJcIiwgXCLilrbvuI9cIiwgXCLij7hcIiwgXCLij69cIiwgXCLij7lcIiwgXCLij7pcIiwgXCLij61cIiwgXCLij65cIiwgXCLij6lcIiwgXCLij6pcIiwgXCLwn5SAXCIsIFwi8J+UgVwiLCBcIvCflIJcIiwgXCLil4DvuI9cIiwgXCLwn5S8XCIsIFwi8J+UvVwiLCBcIuKPq1wiLCBcIuKPrFwiLCBcIuKeoe+4j1wiLCBcIuKshe+4j1wiLCBcIuKshu+4j1wiLCBcIuKsh++4j1wiLCBcIuKGl++4j1wiLCBcIuKGmO+4j1wiLCBcIuKGme+4j1wiLCBcIuKGlu+4j1wiLCBcIuKGle+4j1wiLCBcIuKGlO+4j1wiLCBcIvCflIRcIiwgXCLihqrvuI9cIiwgXCLihqnvuI9cIiwgXCLipLTvuI9cIiwgXCLipLXvuI9cIiwgXCIj77iP4oOjXCIsIFwiKu+4j+KDo1wiLCBcIuKEue+4j1wiLCBcIvCflKRcIiwgXCLwn5ShXCIsIFwi8J+UoFwiLCBcIvCflKNcIiwgXCLwn461XCIsIFwi8J+OtlwiLCBcIuOAsO+4j1wiLCBcIuKesFwiLCBcIuKclO+4j1wiLCBcIvCflINcIiwgXCLinpVcIiwgXCLinpZcIiwgXCLinpdcIiwgXCLinJbvuI9cIiwgXCLwn5KyXCIsIFwi8J+SsVwiLCBcIsKp77iPXCIsIFwiwq7vuI9cIiwgXCLihKLvuI9cIiwgXCLwn5SaXCIsIFwi8J+UmVwiLCBcIvCflJtcIiwgXCLwn5SdXCIsIFwi8J+UnFwiLCBcIuKYke+4j1wiLCBcIvCflJhcIiwgXCLimqrvuI9cIiwgXCLimqvvuI9cIiwgXCLwn5S0XCIsIFwi8J+UtVwiLCBcIvCflLhcIiwgXCLwn5S5XCIsIFwi8J+UtlwiLCBcIvCflLdcIiwgXCLwn5S6XCIsIFwi4paq77iPXCIsIFwi4par77iPXCIsIFwi4qyb77iPXCIsIFwi4qyc77iPXCIsIFwi8J+Uu1wiLCBcIuKXvO+4j1wiLCBcIuKXu++4j1wiLCBcIuKXvu+4j1wiLCBcIuKXve+4j1wiLCBcIvCflLJcIiwgXCLwn5SzXCIsIFwi8J+UiFwiLCBcIvCflIlcIiwgXCLwn5SKXCIsIFwi8J+Uh1wiLCBcIvCfk6NcIiwgXCLwn5OiXCIsIFwi8J+UlFwiLCBcIvCflJVcIiwgXCLwn4OPXCIsIFwi8J+AhO+4j1wiLCBcIuKZoO+4j1wiLCBcIuKZo++4j1wiLCBcIuKZpe+4j1wiLCBcIuKZpu+4j1wiLCBcIvCfjrRcIiwgXCLwn5GB4oCN8J+XqFwiLCBcIvCfkq1cIiwgXCLwn5evXCIsIFwi8J+SrFwiLCBcIvCflZBcIiwgXCLwn5WRXCIsIFwi8J+VklwiLCBcIvCflZNcIiwgXCLwn5WUXCIsIFwi8J+VlVwiLCBcIvCflZZcIiwgXCLwn5WXXCIsIFwi8J+VmFwiLCBcIvCflZlcIiwgXCLwn5WaXCIsIFwi8J+Vm1wiLCBcIvCflZxcIiwgXCLwn5WdXCIsIFwi8J+VnlwiLCBcIvCflZ9cIiwgXCLwn5WgXCIsIFwi8J+VoVwiLCBcIvCflaJcIiwgXCLwn5WjXCIsIFwi8J+VpFwiLCBcIvCflaVcIiwgXCLwn5WmXCIsIFwi8J+Vp1wiLCBcIvCfm5FcIiwgXCLwn4em8J+Hq1wiLCBcIvCfh6bwn4e9XCIsIFwi8J+HpvCfh7FcIiwgXCLwn4ep8J+Hv1wiLCBcIvCfh6bwn4e4XCIsIFwi8J+HpvCfh6lcIiwgXCLwn4em8J+HtFwiLCBcIvCfh6bwn4euXCIsIFwi8J+HpvCfh7ZcIiwgXCLwn4em8J+HrFwiLCBcIvCfh6bwn4e3XCIsIFwi8J+HpvCfh7JcIiwgXCLwn4em8J+HvFwiLCBcIvCfh6bwn4e6XCIsIFwi8J+HpvCfh7lcIiwgXCLwn4em8J+Hv1wiLCBcIvCfh6fwn4e4XCIsIFwi8J+Hp/Cfh61cIiwgXCLwn4en8J+HqVwiLCBcIvCfh6fwn4enXCIsIFwi8J+Hp/Cfh75cIiwgXCLwn4en8J+HqlwiLCBcIvCfh6fwn4e/XCIsIFwi8J+Hp/Cfh69cIiwgXCLwn4en8J+HslwiLCBcIvCfh6fwn4e5XCIsIFwi8J+Hp/Cfh7RcIiwgXCLwn4en8J+HtlwiLCBcIvCfh6fwn4emXCIsIFwi8J+Hp/Cfh7xcIiwgXCLwn4en8J+Ht1wiLCBcIvCfh67wn4e0XCIsIFwi8J+Hu/Cfh6xcIiwgXCLwn4en8J+Hs1wiLCBcIvCfh6fwn4esXCIsIFwi8J+Hp/Cfh6tcIiwgXCLwn4en8J+HrlwiLCBcIvCfh6jwn4e7XCIsIFwi8J+HsPCfh61cIiwgXCLwn4eo8J+HslwiLCBcIvCfh6jwn4emXCIsIFwi8J+HrvCfh6hcIiwgXCLwn4ew8J+HvlwiLCBcIvCfh6jwn4erXCIsIFwi8J+HufCfh6lcIiwgXCLwn4eo8J+HsVwiLCBcIvCfh6jwn4ezXCIsIFwi8J+HqPCfh71cIiwgXCLwn4eo8J+HqFwiLCBcIvCfh6jwn4e0XCIsIFwi8J+HsPCfh7JcIiwgXCLwn4eo8J+HrFwiLCBcIvCfh6jwn4epXCIsIFwi8J+HqPCfh7BcIiwgXCLwn4eo8J+Ht1wiLCBcIvCfh63wn4e3XCIsIFwi8J+HqPCfh7pcIiwgXCLwn4eo8J+HvFwiLCBcIvCfh6jwn4e+XCIsIFwi8J+HqPCfh79cIiwgXCLwn4ep8J+HsFwiLCBcIvCfh6nwn4evXCIsIFwi8J+HqfCfh7JcIiwgXCLwn4ep8J+HtFwiLCBcIvCfh6rwn4eoXCIsIFwi8J+HqvCfh6xcIiwgXCLwn4e48J+Hu1wiLCBcIvCfh6zwn4e2XCIsIFwi8J+HqvCfh7dcIiwgXCLwn4eq8J+HqlwiLCBcIvCfh6rwn4e5XCIsIFwi8J+HqvCfh7pcIiwgXCLwn4er8J+HsFwiLCBcIvCfh6vwn4e0XCIsIFwi8J+Hq/Cfh69cIiwgXCLwn4er8J+HrlwiLCBcIvCfh6vwn4e3XCIsIFwi8J+HrPCfh6tcIiwgXCLwn4e18J+Hq1wiLCBcIvCfh7nwn4erXCIsIFwi8J+HrPCfh6ZcIiwgXCLwn4es8J+HslwiLCBcIvCfh6zwn4eqXCIsIFwi8J+HqfCfh6pcIiwgXCLwn4es8J+HrVwiLCBcIvCfh6zwn4euXCIsIFwi8J+HrPCfh7dcIiwgXCLwn4es8J+HsVwiLCBcIvCfh6zwn4epXCIsIFwi8J+HrPCfh7VcIiwgXCLwn4es8J+HulwiLCBcIvCfh6zwn4e5XCIsIFwi8J+HrPCfh6xcIiwgXCLwn4es8J+Hs1wiLCBcIvCfh6zwn4e8XCIsIFwi8J+HrPCfh75cIiwgXCLwn4et8J+HuVwiLCBcIvCfh63wn4ezXCIsIFwi8J+HrfCfh7BcIiwgXCLwn4et8J+HulwiLCBcIvCfh67wn4e4XCIsIFwi8J+HrvCfh7NcIiwgXCLwn4eu8J+HqVwiLCBcIvCfh67wn4e3XCIsIFwi8J+HrvCfh7ZcIiwgXCLwn4eu8J+HqlwiLCBcIvCfh67wn4eyXCIsIFwi8J+HrvCfh7FcIiwgXCLwn4eu8J+HuVwiLCBcIvCfh6jwn4euXCIsIFwi8J+Hr/Cfh7JcIiwgXCLwn4ev8J+HtVwiLCBcIvCfh6/wn4eqXCIsIFwi8J+Hr/Cfh7RcIiwgXCLwn4ew8J+Hv1wiLCBcIvCfh7Dwn4eqXCIsIFwi8J+HsPCfh65cIiwgXCLwn4e98J+HsFwiLCBcIvCfh7Dwn4e8XCIsIFwi8J+HsPCfh6xcIiwgXCLwn4ex8J+HplwiLCBcIvCfh7Hwn4e7XCIsIFwi8J+HsfCfh6dcIiwgXCLwn4ex8J+HuFwiLCBcIvCfh7Hwn4e3XCIsIFwi8J+HsfCfh75cIiwgXCLwn4ex8J+HrlwiLCBcIvCfh7Hwn4e5XCIsIFwi8J+HsfCfh7pcIiwgXCLwn4ey8J+HtFwiLCBcIvCfh7Lwn4ewXCIsIFwi8J+HsvCfh6xcIiwgXCLwn4ey8J+HvFwiLCBcIvCfh7Lwn4e+XCIsIFwi8J+HsvCfh7tcIiwgXCLwn4ey8J+HsVwiLCBcIvCfh7Lwn4e5XCIsIFwi8J+HsvCfh61cIiwgXCLwn4ey8J+HtlwiLCBcIvCfh7Lwn4e3XCIsIFwi8J+HsvCfh7pcIiwgXCLwn4e+8J+HuVwiLCBcIvCfh7Lwn4e9XCIsIFwi8J+Hq/Cfh7JcIiwgXCLwn4ey8J+HqVwiLCBcIvCfh7Lwn4eoXCIsIFwi8J+HsvCfh7NcIiwgXCLwn4ey8J+HqlwiLCBcIvCfh7Lwn4e4XCIsIFwi8J+HsvCfh6ZcIiwgXCLwn4ey8J+Hv1wiLCBcIvCfh7Lwn4eyXCIsIFwi8J+Hs/Cfh6ZcIiwgXCLwn4ez8J+Ht1wiLCBcIvCfh7Pwn4e1XCIsIFwi8J+Hs/Cfh7FcIiwgXCLwn4ez8J+HqFwiLCBcIvCfh7Pwn4e/XCIsIFwi8J+Hs/Cfh65cIiwgXCLwn4ez8J+HqlwiLCBcIvCfh7Pwn4esXCIsIFwi8J+Hs/Cfh7pcIiwgXCLwn4ez8J+Hq1wiLCBcIvCfh7Lwn4e1XCIsIFwi8J+HsPCfh7VcIiwgXCLwn4ez8J+HtFwiLCBcIvCfh7Twn4eyXCIsIFwi8J+HtfCfh7BcIiwgXCLwn4e18J+HvFwiLCBcIvCfh7Xwn4e4XCIsIFwi8J+HtfCfh6ZcIiwgXCLwn4e18J+HrFwiLCBcIvCfh7Xwn4e+XCIsIFwi8J+HtfCfh6pcIiwgXCLwn4e18J+HrVwiLCBcIvCfh7Xwn4ezXCIsIFwi8J+HtfCfh7FcIiwgXCLwn4e18J+HuVwiLCBcIvCfh7Xwn4e3XCIsIFwi8J+HtvCfh6ZcIiwgXCLwn4e38J+HqlwiLCBcIvCfh7fwn4e0XCIsIFwi8J+Ht/Cfh7pcIiwgXCLwn4e38J+HvFwiLCBcIvCfh6fwn4exXCIsIFwi8J+HuPCfh61cIiwgXCLwn4ew8J+Hs1wiLCBcIvCfh7Hwn4eoXCIsIFwi8J+HtfCfh7JcIiwgXCLwn4e78J+HqFwiLCBcIvCfh7zwn4e4XCIsIFwi8J+HuPCfh7JcIiwgXCLwn4e48J+HuVwiLCBcIvCfh7jwn4emXCIsIFwi8J+HuPCfh7NcIiwgXCLwn4e38J+HuFwiLCBcIvCfh7jwn4eoXCIsIFwi8J+HuPCfh7FcIiwgXCLwn4e48J+HrFwiLCBcIvCfh7jwn4e9XCIsIFwi8J+HuPCfh7BcIiwgXCLwn4e48J+HrlwiLCBcIvCfh7jwn4enXCIsIFwi8J+HuPCfh7RcIiwgXCLwn4e/8J+HplwiLCBcIvCfh6zwn4e4XCIsIFwi8J+HsPCfh7dcIiwgXCLwn4e48J+HuFwiLCBcIvCfh6rwn4e4XCIsIFwi8J+HsfCfh7BcIiwgXCLwn4e48J+HqVwiLCBcIvCfh7jwn4e3XCIsIFwi8J+HuPCfh79cIiwgXCLwn4e48J+HqlwiLCBcIvCfh6jwn4etXCIsIFwi8J+HuPCfh75cIiwgXCLwn4e58J+HvFwiLCBcIvCfh7nwn4evXCIsIFwi8J+HufCfh79cIiwgXCLwn4e58J+HrVwiLCBcIvCfh7nwn4exXCIsIFwi8J+HufCfh6xcIiwgXCLwn4e58J+HsFwiLCBcIvCfh7nwn4e0XCIsIFwi8J+HufCfh7lcIiwgXCLwn4e58J+Hs1wiLCBcIvCfh7nwn4e3XCIsIFwi8J+HufCfh7JcIiwgXCLwn4e58J+HqFwiLCBcIvCfh7nwn4e7XCIsIFwi8J+HuvCfh6xcIiwgXCLwn4e68J+HplwiLCBcIvCfh6bwn4eqXCIsIFwi8J+HrPCfh6dcIiwgXCLwn4e68J+HuFwiLCBcIvCfh7vwn4euXCIsIFwi8J+HuvCfh75cIiwgXCLwn4e68J+Hv1wiLCBcIvCfh7vwn4e6XCIsIFwi8J+Hu/Cfh6ZcIiwgXCLwn4e78J+HqlwiLCBcIvCfh7vwn4ezXCIsIFwi8J+HvPCfh6tcIiwgXCLwn4eq8J+HrVwiLCBcIvCfh77wn4eqXCIsIFwi8J+Hv/Cfh7JcIiwgXCLwn4e/8J+HvFwiXVxuXHRlbW9qaSA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyB2aWV3Qm94PScwIDAgMjAgMjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPkVtb2ppPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTE4MS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nQm90dG9tLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDE3MC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J002Ni43NSwzMC41IEM3Mi4xMzQ3NzYzLDMwLjUgNzYuNSwyNi4xMzQ3NzYzIDc2LjUsMjAuNzUgQzc2LjUsMTUuMzY1MjIzNyA3Mi4xMzQ3NzYzLDExIDY2Ljc1LDExIEM2MS4zNjUyMjM3LDExIDU3LDE1LjM2NTIyMzcgNTcsMjAuNzUgQzU3LDI2LjEzNDc3NjMgNjEuMzY1MjIzNywzMC41IDY2Ljc1LDMwLjUgWiBNNjYuNzUsMjkuNSBDNzEuNTgyNDkxNiwyOS41IDc1LjUsMjUuNTgyNDkxNiA3NS41LDIwLjc1IEM3NS41LDE1LjkxNzUwODQgNzEuNTgyNDkxNiwxMiA2Ni43NSwxMiBDNjEuOTE3NTA4NCwxMiA1OCwxNS45MTc1MDg0IDU4LDIwLjc1IEM1OCwyNS41ODI0OTE2IDYxLjkxNzUwODQsMjkuNSA2Ni43NSwyOS41IFogTTYzLjc1LDE5IEM2NC40NDAzNTU5LDE5IDY1LDE4LjQ0MDM1NTkgNjUsMTcuNzUgQzY1LDE3LjA1OTY0NDEgNjQuNDQwMzU1OSwxNi41IDYzLjc1LDE2LjUgQzYzLjA1OTY0NDEsMTYuNSA2Mi41LDE3LjA1OTY0NDEgNjIuNSwxNy43NSBDNjIuNSwxOC40NDAzNTU5IDYzLjA1OTY0NDEsMTkgNjMuNzUsMTkgWiBNNjkuNzUsMTkgQzcwLjQ0MDM1NTksMTkgNzEsMTguNDQwMzU1OSA3MSwxNy43NSBDNzEsMTcuMDU5NjQ0MSA3MC40NDAzNTU5LDE2LjUgNjkuNzUsMTYuNSBDNjkuMDU5NjQ0MSwxNi41IDY4LjUsMTcuMDU5NjQ0MSA2OC41LDE3Ljc1IEM2OC41LDE4LjQ0MDM1NTkgNjkuMDU5NjQ0MSwxOSA2OS43NSwxOSBaIE01OS44ODc2MzM0LDIyLjE2NDE0NDQgQzU5LjYzOTAzMTYsMjEuMzgzMTM0IDYwLjA2NTkxOCwyMC45Nzg1MTU2IDYwLjg1MzA5NTEsMjEuMjMyOTMwNCBDNjAuODUzMDk1MSwyMS4yMzI5MzA0IDYzLjA5Mzc1MDMsMjIuMjEyNSA2Ni43NTAwMDAxLDIyLjIxMjUgQzcwLjQwNjI0OTksMjIuMjEyNSA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IEM3My40Mjg3MTYyLDIwLjk2NjIxNTMgNzMuODgxMjQ2MywyMS40MDQ0MDk3IDczLjYwNTg0NzcsMjIuMTgwNzQzNyBDNzMuNjA1ODQ3NywyMi4xODA3NDM3IDcyLjYsMjcuNTc1IDY2Ljc1LDI3LjU3NSBDNjAuOSwyNy41NzUgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBaIE02Ni43NSwyMy4xODc1IEM2NC4wNjg3NSwyMy4xODc1IDYxLjg1NDQwNTUsMjIuNDczNzgyMSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgQzYxLjMyNzMwMTksMjIuMzI5NDggNjEuMTc4MTIzMywyMi41NzIxNjE1IDYxLjU2Mzk1NTUsMjIuOTU3MDc1IEM2MS41NjM5NTU1LDIyLjk1NzA3NSA2Mi4zNjI1LDI0LjY1IDY2Ljc1LDI0LjY1IEM3MS4xMzc1LDI0LjY1IDcxLjk1MDg1MDMsMjIuOTQzODMwNCA3MS45NTA4NTAzLDIyLjk0MzgzMDQgQzcyLjMwOTM2NTksMjIuNTM5OTI3OCA3Mi4xNjkwNzkzLDIyLjMzNTk4NDQgNzEuNjM1NDI3MywyMi40NzYzNDkgQzcxLjYzNTQyNzMsMjIuNDc2MzQ5IDY5LjQzMTI1LDIzLjE4NzUgNjYuNzUsMjMuMTg3NSBaJyBpZD0nRW1vamknPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRkZWxldGU6IHtcblx0XHRvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzI0cHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzI0cHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaIE0zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzOC43MDk3MiwyMS43MDk3MTk1IEMzMzguMzE3NzUyLDIxLjMxNzc1MjIgMzM4LjMxODk2NSwyMC42ODEwMzQ5IDMzOC43MDk3MiwyMC4yOTAyODA1IEwzNDQuNjQzMjQ1LDE0LjM1Njc1NDcgQzM0NC44NDAyNzYsMTQuMTU5NzI0NSAzNDUuMjI1NjM5LDE0IDM0NS40OTM3NDEsMTQgTDM1NS45OTcyMzksMTQgQzM1Ny4xMDMzMzMsMTQgMzU3Ljk5OTk5OSwxNC44OTcwNjAxIDM1Ny45OTk5OTksMTYuMDA1ODU4NiBMMzU3Ljk5OTk5OSwyNS45OTQxNDEyIEMzNTcuOTk5OTk5LDI3LjEwMTk0NjQgMzU3LjEwNjQ1NywyNy45OTk5OTk5IDM1NS45OTcyMzksMjcuOTk5OTk5OSBMMzQ1LjQ5Mzc0MSwyOCBDMzQ1LjIyMTA1NiwyOCAzNDQuODQwNjQzLDI3Ljg0MDY0MzEgMzQ0LjY0MzI0NiwyNy42NDMyNDUzIEwzMzguNzA5NzIsMjEuNzA5NzE5NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0Zm9vZCA6ICBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Gb29kPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDguMDAwMDAwLCAtNjM3LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J0Zvb2QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDIyOS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS41LDE1LjUgTDEsMTUuNSBMMCw1IEw2LjUsNSBMNi4yNjM2MDkzMyw3LjQ4MjEwMjAyJyBpZD0nRHJpbmsnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LjAxMDc3NTQ1LDEuOTY5MzAwOTggTDYuNTE1NzEzNTIsNS4yMjI3MDUzOSBMNS43MTkwODE4NCw1LjY3OTQ3ODEyIEw1LjAzODkwMDksMS45NjkzMDA5OCBMNC44NTU1NzI0NywxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywxLjk2OTMwMDk4IEw2LjAxMDc3NTQ1LDEuOTY5MzAwOTggWicgaWQ9J1N0cmF3JyBmaWxsPScjNEE1NDYxJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg2Ljg1NTU3MiwgMy4zMjQzOTApIHJvdGF0ZSgyNC4wMDAwMDApIHRyYW5zbGF0ZSgtNi44NTU1NzIsIC0zLjMyNDM5MCkgJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J0JvdHRvbS1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgeD0nMycgeT0nMTQnIHdpZHRoPScxMC41JyBoZWlnaHQ9JzEuNScgcng9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMS41LDEyLjUwMjQ0MDggQzEuNSwxMS45NDg4MDggMS45NDkxNjkxNiwxMS41IDIuNDkyNjg3MjMsMTEuNSBMMTQuMDA3MzEyOCwxMS41IEMxNC41NTU1NTg4LDExLjUgMTUsMTEuOTQ2OTQ5OSAxNSwxMi41MDI0NDA4IEwxNSwxMi45OTc1NTkyIEMxNSwxMy41NTExOTIgMTQuNTUwODMwOCwxNCAxNC4wMDczMTI4LDE0IEwyLjQ5MjY4NzIzLDE0IEMxLjk0NDQ0MTIxLDE0IDEuNSwxMy41NTMwNTAxIDEuNSwxMi45OTc1NTkyIEwxLjUsMTIuNTAyNDQwOCBaIE0zLjkzMzAwMDAzLDExLjgzOTI3MjcgQzMuNDE3NzE4MzQsMTEuNjUxODk3NiAzLjQ0NDgzNjk3LDExLjUgMy45OTU1Nzc1LDExLjUgTDEzLjAwNDQyMjUsMTEuNSBDMTMuNTU0MjY0OCwxMS41IDEzLjU4NjYwNjEsMTEuNjUwMzI1MSAxMy4wNjcsMTEuODM5MjcyNyBMOC41LDEzLjUgTDMuOTMzMDAwMDMsMTEuODM5MjcyNyBaJyBpZD0nJnF1b3Q7UGF0dHkmcXVvdDsnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMi41LDEwLjUgTDEzLjUsMTAuNSBMMTUsMTEuNSBMMSwxMS41IEwyLjUsMTAuNSBaJyBpZD0nQ2hlZXNlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTguMjUsMTAuNSBDMTEuNDI1NjM3MywxMC41IDE0LDEwLjMyODQyNzEgMTQsOS41IEMxNCw4LjY3MTU3Mjg4IDExLjQyNTYzNzMsOCA4LjI1LDggQzUuMDc0MzYyNjksOCAyLjUsOC42NzE1NzI4OCAyLjUsOS41IEMyLjUsMTAuMzI4NDI3MSA1LjA3NDM2MjY5LDEwLjUgOC4yNSwxMC41IFonIGlkPSdUb3AtQnVuJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43NSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRmbGFnczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzExcHgnIGhlaWdodD0nMTVweCcgdmlld0JveD0nMCAwIDExIDE1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+RmxhZzwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjc1LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGbGFnJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNzUuMDAwMDAwLCAyMzEuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1BvbGUnIGZpbGw9JyM0QTU0NjEnIHg9JzAnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzE0Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEsMSBDMSwxIDEuMjUsMiAzLjUsMiBDNS43NSwyIDYsMC43NDk5OTk5OTggOCwwLjc1IEMxMCwwLjc0OTk5OTk5OCAxMCwxLjUgMTAsMS41IEwxMCw3LjUgQzEwLDcuNSAxMCw2LjUgOCw2LjUgQzYsNi41IDQuODA2MjM5MTEsOCAzLjUsOCBDMi4xOTM3NjA4OSw4IDEsNyAxLDcgTDEsMSBaJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZnJlcXVlbnQ6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlJlY2VudDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTUuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1JlY2VudCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTUuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nQm9keScgc3Ryb2tlPScjNEE1NDYxJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjUsNy41IEw3LjUsOC41IEw4LjUsOC41IEw4LjUsMiBMNy41LDIgTDcuNSw3LjUgTDQsNy41IEw0LDguNSBMOC41LDguNSBMOC41LDcuNSBMNy41LDcuNSBaJyBpZD0nSGFuZHMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0a2V5Ym9hcmQgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMzIuNXB4JyBoZWlnaHQ9JzIzLjVweCcgdmlld0JveD0nMCAwIDY1IDQ3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUG9ydHJhaXQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDM2LjAwMDAwMCwgLTE5NTYuMDAwMDAwKScgZmlsbD0nIzAwMDAwMCc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQtTGlnaHQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAxNDIyLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZC1kb3duJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDEyLjAwMDAwMCwgNTAwLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNODcuMDAxMzMyLDM0IEM4OC4xMDUxNjU5LDM0IDg5LDM0Ljg5OTcxMjcgODksMzUuOTkzMjg3NCBMODksNjEuMDA2NzEyNiBDODksNjIuMTA3NTc0OCA4OC4xMDU4NzU5LDYzIDg3LjAwMTMzMiw2MyBMMjUuOTk4NjY4LDYzIEMyNC44OTQ4MzQxLDYzIDI0LDYyLjEwMDI4NzMgMjQsNjEuMDA2NzEyNiBMMjQsMzUuOTkzMjg3NCBDMjQsMzQuODkyNDI1MiAyNC44OTQxMjQxLDM0IDI1Ljk5ODY2OCwzNCBMODcuMDAxMzMyLDM0IFogTTI2LDM2IEwyNiw2MSBMODcsNjEgTDg3LDM2IEwyNiwzNiBaIE03OSw0MCBMODMsNDAgTDgzLDQ0IEw3OSw0NCBMNzksNDAgWiBNNzIsNDAgTDc2LDQwIEw3Niw0NCBMNzIsNDQgTDcyLDQwIFogTTY1LDQwIEw2OSw0MCBMNjksNDQgTDY1LDQ0IEw2NSw0MCBaIE01OCw0MCBMNjIsNDAgTDYyLDQ0IEw1OCw0NCBMNTgsNDAgWiBNNTEsNDAgTDU1LDQwIEw1NSw0NCBMNTEsNDQgTDUxLDQwIFogTTQ0LDQwIEw0OCw0MCBMNDgsNDQgTDQ0LDQ0IEw0NCw0MCBaIE0zNyw0MCBMNDEsNDAgTDQxLDQ0IEwzNyw0NCBMMzcsNDAgWiBNMzAsNDAgTDM0LDQwIEwzNCw0NCBMMzAsNDQgTDMwLDQwIFogTTc5LDQ3IEw4Myw0NyBMODMsNTEgTDc5LDUxIEw3OSw0NyBaIE03Miw0NyBMNzYsNDcgTDc2LDUxIEw3Miw1MSBMNzIsNDcgWiBNNjUsNDcgTDY5LDQ3IEw2OSw1MSBMNjUsNTEgTDY1LDQ3IFogTTU4LDQ3IEw2Miw0NyBMNjIsNTEgTDU4LDUxIEw1OCw0NyBaIE01MSw0NyBMNTUsNDcgTDU1LDUxIEw1MSw1MSBMNTEsNDcgWiBNNDQsNDcgTDQ4LDQ3IEw0OCw1MSBMNDQsNTEgTDQ0LDQ3IFogTTM3LDQ3IEw0MSw0NyBMNDEsNTEgTDM3LDUxIEwzNyw0NyBaIE0zMCw0NyBMMzQsNDcgTDM0LDUxIEwzMCw1MSBMMzAsNDcgWiBNNzksNTQgTDgzLDU0IEw4Myw1OCBMNzksNTggTDc5LDU0IFogTTcyLDU0IEw3Niw1NCBMNzYsNTggTDcyLDU4IEw3Miw1NCBaIE00NCw1NCBMNjksNTQgTDY5LDU4IEw0NCw1OCBMNDQsNTQgWiBNMzcsNTQgTDQxLDU0IEw0MSw1OCBMMzcsNTggTDM3LDU0IFogTTMwLDU0IEwzNCw1NCBMMzQsNTggTDMwLDU4IEwzMCw1NCBaIE00NC4zMTYzNDk4LDY5Ljk3NzEwNDcgQzQzLjM2ODQyMjUsNzAuNTQyMDM0MiA0My4zMzM4NzIxLDcxLjUwOTY0OTUgNDQuMjM3ODIxNyw3Mi4xMzczOTEyIEw1NS4zNjIxNTM5LDc5Ljg2MjYwODggQzU2LjI2NjcxMTMsODAuNDkwNzcyNiA1Ny43MzM4OTY1LDgwLjQ5MDM1MDUgNTguNjM3ODQ2MSw3OS44NjI2MDg4IEw2OS43NjIxNzgzLDcyLjEzNzM5MTIgQzcwLjY2NjczNTcsNzEuNTA5MjI3NCA3MC42NDgwMTIsNzAuNTIwNTIwNCA2OS43MTE1MTg3LDY5LjkyMzQxNjYgTDY5Ljk4MjU3MzEsNzAuMDk2MjM5NiBDNjkuNTE4MTMzMyw2OS44MDAxMTUgNjguNzc4MjU1Nyw2OS44MTI2NDkzIDY4LjMyNjEzMDcsNzAuMTI2OTMyMyBMNTcuODE1NDk5OSw3Ny40MzMxMjYzIEM1Ny4zNjUxMTE3LDc3Ljc0NjIwMiA1Ni42MjgxNjUsNzcuNzM4MTc4NiA1Ni4xNzYyMTAzLDc3LjQxOTk0MjQgTDQ1LjgzODYxMzcsNzAuMTQwODk3NyBDNDUuMzgzNjQ3Miw2OS44MjA1NDA3IDQ0LjYzNzUwMzksNjkuNzg1NzA4OCA0NC4xNTY2MzkzLDcwLjA3MjI4NjIgTDQ0LjMxNjM0OTgsNjkuOTc3MTA0NyBaJyBpZD0nU2hhcGUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRrZXlQb3BVcDpcblx0XHRcImlwaG9uZS01XCIgOiBcIjxzdmcgd2lkdGg9JzU1cHgnIGhlaWdodD0nOTJweCcgdmlld0JveD0nNTMgMzE2IDU1IDkyJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHQgICAgICAgIDxwYXRoIGQ9J00xLjM0MTczMjMxLDQwLjkzOTE3MDEgQzAuNTE3NDY2MTI4LDQwLjIwNTg5IDAsMzkuMTM3NDI1MSAwLDM3Ljk0Nzc2MzUgTDAsNC4wMDM0NTU5OCBDMCwxLjc4OTE3MTM2IDEuNzk1MjgyNDgsMCA0LjAwOTg3NTY2LDAgTDQ0Ljk5MDEyNDMsMCBDNDcuMjEyNTYwOCwwIDQ5LDEuNzkyNDA4MyA0OSw0LjAwMzQ1NTk4IEw0OSwzNy45NDc3NjM1IEM0OSwzOC45MTI0MDUxIDQ4LjY1OTI3OTgsMzkuNzk2MzY1OSA0OC4wOTE2MDQxLDQwLjQ4Njg2NjUgQzQ4LjA0MTQyMzMsNDAuOTAzMjI4OSA0Ny43MTExODg4LDQxLjQwNzQ2NzIgNDcuMDgyNTkwOCw0MS45NTIyNSBDNDcuMDgyNTkwOCw0MS45NTIyNSAzOC41Mjk5MTQ1LDQ5LjA2NDMzNjIgMzguNTI5OTE0NSw1MS4xNTI2NDI0IEMzOC41Mjk5MTQ1LDYxLjY0OTc1NjEgMzguMTc3MDA5OSw4Mi4wMDI1NDA2IDM4LjE3NzAwOTksODIuMDAyNTQwNiBDMzguMTQxMjMwNCw4NC4yMDI0MzU0IDM2LjMyMTAyODQsODYgMzQuMTEyODQ5NSw4NiBMMTUuMzA1OTUzOSw4NiBDMTMuMTA3OTYsODYgMTEuMjc4MTg4NCw4NC4yMTAwNzg5IDExLjI0MTc5MzYsODIuMDAyMDk5MyBDMTEuMjQxNzkzNiw4Mi4wMDIwOTkzIDEwLjg4ODg4ODksNjEuNjQ3MDg1MiAxMC44ODg4ODg5LDUxLjE0ODYzNjEgQzEwLjg4ODg4ODksNDkuMDYxNjY1NCAyLjM0MTQzNjYyLDQyLjIzODY1NSAyLjM0MTQzNjYyLDQyLjIzODY1NSBDMS43NzgyNzMxMSw0MS43NjQxMzY1IDEuNDQ4ODEzNTQsNDEuMzIwNDIzNyAxLjM0MTczMjMxLDQwLjkzOTE3MDEgWicgaWQ9J3BhdGgtMic+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTMnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nNDknIGhlaWdodD0nODYnIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTYuMDAwMDAwLCAzMTguMDAwMDAwKSc+XG5cdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyNCMkI0QjknIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nI0ZDRkNGQycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnNcIiA6IFwiPHN2ZyB3aWR0aD0nNjRweCcgaGVpZ2h0PScxMDdweCcgdmlld0JveD0nMjQgMzg3IDY0IDEwNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+XG5cdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICA8L2ZpbHRlcj5cblx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS40ODY0NzY0Niw0OC4zNzc5OTQ3IEMwLjU4MDI2NjQ5LDQ3LjY0NjQyOTYgMCw0Ni41Mjk1ODcgMCw0NS4yNzgxOTQ4IEwwLDMuOTkwMDk3ODcgQzAsMS43ODI1OTEyIDEuNzk1MDk1NzcsMCA0LjAwOTQ1ODYyLDAgTDUzLjk5MDU0MTQsMCBDNTYuMjAwNTc0NiwwIDU4LDEuNzg2NDI3NjcgNTgsMy45OTAwOTc4NyBMNTgsNDUuMjc4MTk0OCBDNTgsNDYuMTgzMzAwNCA1Ny42OTgyMjU4LDQ3LjAxNjk3MzMgNTcuMTg5NTA5Nyw0Ny42ODU2MzI1IEM1Ny4wMzk2ODY1LDQ4LjAyMTI0OTcgNTYuNzM2MDA5OCw0OC4zOTcyODM0IDU2LjI3MTgzNjMsNDguNzk1MDY2MSBDNTYuMjcxODM2Myw0OC43OTUwNjYxIDQ1LjYwNjgzNzYsNTcuNjIyMDY5MyA0NS42MDY4Mzc2LDYwLjA3NDYxNDkgQzQ1LjYwNjgzNzYsNzIuNDAyNjIwNSA0NS4xNzc5NjcsOTYuOTkyMzE2NCA0NS4xNzc5NjcsOTYuOTkyMzE2NCBDNDUuMTQxMzc0OCw5OS4yMTIyMjE0IDQzLjMxOTMwNjUsMTAxIDQxLjEwOTAwMzUsMTAxIEwxNy4zODY3MjMsMTAxIEMxNS4xODEyNzIyLDEwMSAxMy4zNTQ2ODMsOTkuMjA1NTAwOSAxMy4zMTc3NTk1LDk2Ljk5MTg3NDEgQzEzLjMxNzc1OTUsOTYuOTkxODc0MSAxMi44ODg4ODg5LDcyLjM5OTQ4MzggMTIuODg4ODg4OSw2MC4wNjk5MDk5IEMxMi44ODg4ODg5LDU3LjYxODkzMjYgMi4yMjY3MzQzNyw0OS4xNDYyOTM2IDIuMjI2NzM0MzcsNDkuMTQ2MjkzNiBDMS45MDUyNDA4Nyw0OC44Nzg4MzI3IDEuNjU5MTE2NTUsNDguNjIwNzMzIDEuNDg2NDc2NDYsNDguMzc3OTk0NyBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc1OCcgaGVpZ2h0PScxMDEnIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjcuMDAwMDAwLCAzODkuMDAwMDAwKSc+XG5cdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyNCMkI0QjknIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nI0ZDRkNGQycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8c3ZnIHdpZHRoPSc3MHB4JyBoZWlnaHQ9JzExOXB4JyB2aWV3Qm94PScyOCA0NTAgNzAgMTE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHQgICAgICAgIDxwYXRoIGQ9J00xLjk1NzI5Mzk1LDU0LjA3MjgzMDQgQzAuNzg1OTExMTMyLDUzLjM3NTc2OTkgMCw1Mi4wOTg3NzYgMCw1MC42Mzg5MDIyIEwwLDMuOTk1MjQ0MTkgQzAsMS43ODY3MTQyOCAxLjc5MjQyMjAyLDAgNC4wMDM0ODY2MywwIEw1OS45OTY1MTM0LDAgQzYyLjIwNDYyMzUsMCA2NCwxLjc4ODczMTc1IDY0LDMuOTk1MjQ0MTkgTDY0LDUwLjYzODkwMjIgQzY0LDUxLjkyMzM2ODYgNjMuMzkzNzExNiw1My4wNjUxNTU2IDYyLjQ1MTM5MSw1My43OTU3NTQgQzYyLjQ0Mjc3NTIsNTMuODAzMjQzMyA2Mi40MzQxMDE5LDUzLjgxMDc0MDQgNjIuNDI1MzcwOSw1My44MTgyNDU0IEM2Mi40MjUzNzA5LDUzLjgxODI0NTQgNTAuMzI0Nzg2Myw2My44OTc3NDAyIDUwLjMyNDc4NjMsNjYuNjE3Mzk0NyBDNTAuMzI0Nzg2Myw4MC4yODgwNTQ0IDQ5Ljg0NDMwNDksMTA4LjAwMjAwNyA0OS44NDQzMDQ5LDEwOC4wMDIwMDcgQzQ5LjgwNzk2NjUsMTEwLjIxMDIzNCA0Ny45ODc0MjMyLDExMiA0NS43Nzg5MDg5LDExMiBMMTguNzY4MDk5NywxMTIgQzE2LjU1MzQzOTcsMTEyIDE0LjczOTQ0NTYsMTEwLjIwOTg0IDE0LjcwMjcwMzcsMTA4LjAwMTU2NiBDMTQuNzAyNzAzNywxMDguMDAxNTY2IDE0LjIyMjIyMjIsODAuMjg0NTc2MSAxNC4yMjIyMjIyLDY2LjYxMjE3NzMgQzE0LjIyMjIyMjIsNjMuODk0MjYxOSAyLjE0MDgxNDIyLDU0LjIzMjEzMzcgMi4xNDA4MTQyMiw1NC4yMzIxMzM3IEMyLjA3NjY0OTEzLDU0LjE3ODYyOTggMi4wMTU0ODExMSw1NC4xMjU1MTM0IDEuOTU3MjkzOTUsNTQuMDcyODMwNCBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc2NCcgaGVpZ2h0PScxMTInIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzEuMDAwMDAwLCA0NTIuMDAwMDAwKSc+XG5cdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyNCMkI0QjknIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nI0ZDRkNGQycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdG9iamVjdHMgOlxuXHRcdFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzExcHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDExIDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+TGlnaHRidWxiPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQ0LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0xpZ2h0YnVsYicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQ0LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNOCwxMC40MDAyOTA0IEM5Ljc4MDgzNzk1LDkuNDg5OTM0OTEgMTEsNy42MzczNDI3MyAxMSw1LjUgQzExLDIuNDYyNDMzODggOC41Mzc1NjYxMiwwIDUuNSwwIEMyLjQ2MjQzMzg4LDAgMCwyLjQ2MjQzMzg4IDAsNS41IEMwLDcuNjM3MzQyNzMgMS4yMTkxNjIwNSw5LjQ4OTkzNDkxIDMsMTAuNDAwMjkwNCBMMywxNC4wMDIwODY5IEMzLDE1LjEwMTczOTQgMy44OTc2MTYwMiwxNiA1LjAwNDg4MTUsMTYgTDUuOTk1MTE4NSwxNiBDNy4xMDYxMDAyLDE2IDgsMTUuMTA1NTAzOCA4LDE0LjAwMjA4NjkgTDgsMTAuNDAwMjkwNCBaJyBpZD0nT3ZhbC0xNycgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSczJyB5PScxMicgd2lkdGg9JzUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSc0JyB5PScxMy41JyB3aWR0aD0nMS41JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsOC41IEM1LDguNSAzLjQ5OTk5OTk5LDcuNTAwMDAwMDEgNCw3IEM0LjUwMDAwMDAxLDYuNDk5OTk5OTkgNSw3LjY2NjY2NjY3IDUuNSw4IEM1LjUsOCA2LjUsNi41MDAwMDAwMSA3LDcgQzcuNSw3LjQ5OTk5OTk5IDYsOC41IDYsOC41IEw2LDExIEw1LDExIEw1LDguNSBaJyBpZD0nUmVjdGFuZ2xlLTUyJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRzaGlmdCA6IHtcblx0XHRvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDIwIDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIxLjcwNTIzODgsMTMuMjA1MjM4OCBDMjEuMzE1NzQ2MiwxMi44MTU3NDYyIDIwLjY4NTc1NTksMTIuODE0MjQ0MSAyMC4yOTQ3NjEyLDEzLjIwNTIzODggTDExLjkxNjA3NjcsMjEuNTgzOTIzMyBDMTEuMTMzOTk5MSwyMi4zNjYwMDA5IDExLjM5ODI2MDYsMjMgMTIuNDk3OTEzMSwyMyBMMTYuNSwyMyBMMTYuNSwyOC4wMDkyMjIgQzE2LjUsMjguNTU2NDEzNiAxNi45NDYzMTE0LDI5IDE3LjQ5NzU0NDYsMjkgTDI0LjUwMjQ1NTQsMjkgQzI1LjA1MzM4NCwyOSAyNS41LDI4LjU0OTAyNDggMjUuNSwyOC4wMDkyMjIgTDI1LjUsMjMgTDI5LjUwMjA4NjksMjMgQzMwLjYwNTUwMzgsMjMgMzAuODY2ODI0LDIyLjM2NjgyNCAzMC4wODM5MjMzLDIxLjU4MzkyMzMgTDIxLjcwNTIzODgsMTMuMjA1MjM4OCBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDIwIDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMjkuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yMS42NzE5MDA4LDEyLjIzMjU4OTggQzIxLjMwMTAzMiwxMS44Mjc5OTE2IDIwLjY5NDY4OTIsMTEuODMzNDczMSAyMC4zMjg4MTk1LDEyLjIzMjU4OTggTDExLjY5NDcwMjMsMjEuNjUxMjk4MyBDMTAuNzU4NzQ0MSwyMi42NzIzMDggMTEuMTI4NTU0MSwyMy41IDEyLjUwOTc3NTEsMjMuNSBMMTUuOTk5OTk5OSwyMy41MDAwMDAyIEwxNS45OTk5OTk5LDI4LjAwMTQyNDEgQzE1Ljk5OTk5OTksMjguODI5MDY0OCAxNi42NzE2NTU5LDI5LjUwMDAwMDEgMTcuNDk3MTAxLDI5LjUwMDAwMDEgTDI0LjUwMjg5OTIsMjkuNTAwMDAwMSBDMjUuMzI5NzI1MywyOS41MDAwMDAxIDI2LjAwMDAwMDMsMjguODM0OTcwMyAyNi4wMDAwMDAzLDI4LjAwMTQyNDEgTDI2LjAwMDAwMDMsMjMuNTAwMDAwMSBMMjkuNDkwMjI1MSwyMy41MDAwMDAyIEMzMC44NzYzMzU3LDIzLjUwMDAwMDIgMzEuMjQzOTUyMSwyMi42NzUxOTE2IDMwLjMwNTQxNjEsMjEuNjUxMjk4NSBMMjEuNjcxOTAwOCwxMi4yMzI1ODk4IFogTTIxLjM0MTc0OCwxNC4zNjQ1MzE2IEMyMS4xNTMwMDU2LDE0LjE2MzIwNjQgMjAuODQzMzUxNSwxNC4xNjcwOTE0IDIwLjY1ODI1MTQsMTQuMzY0NTMxNiBMMTMuNSwyMS45OTk5OTk4IEwxNy41MDAwMDAxLDIxLjk5OTk5OTkgTDE3LjUwMDAwMDIsMjcuNTA4OTk1NiBDMTcuNTAwMDAwMiwyNy43ODAxNzAzIDE3LjczMjkwMjcsMjguMDAwMDAwOCAxOC4wMDM0MjI5LDI4LjAwMDAwMDggTDIzLjk5NjU3NywyOC4wMDAwMDA4IEMyNC4yNzQ2MDk3LDI4LjAwMDAwMDggMjQuNDk5OTk5NywyNy43NzIxMjAzIDI0LjQ5OTk5OTcsMjcuNTA4OTk1NiBMMjQuNDk5OTk5NywyMS45OTk5OTk5IEwyOC41LDIxLjk5OTk5OTkgTDIxLjM0MTc0OCwxNC4zNjQ1MzE2IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0c21pbGV5czogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+OkQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTg2LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSc6RCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoODcuMDAwMDAwLCAyMzAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nSGVhZCcgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzg5NDczNjg0JyBjeD0nNy41JyBjeT0nNy41JyByPSc3LjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjUsMTMuNTI2MzE1OCBDMTAuMjY4NjkwNywxMy41MjYzMTU4IDEyLjUxMzE1NzksMTAuMzY4NDIxMiAxMi41MTMxNTc5LDkuMTg0MjEwNDUgQzEyLjUxMzE1NzksNy42MDUyNjMxNyAxMS40Mzg5MDk4LDkuMTg0MjEwNDMgNy41LDkuMTg0MjEwNTMgQzMuNTYxMDkwMjMsOS4xODQyMTA2MiAyLjQ4Njg0MjExLDcuNjA1MjYzMTcgMi40ODY4NDIxMSw5LjE4NDIxMDQ1IEMyLjQ4Njg0MjExLDEwLjM2ODQyMSA0LjczMTMwOTM1LDEzLjUyNjMxNTggNy41LDEzLjUyNjMxNTggWiBNNy41LDEwLjk2MDUyNjMgQzguOTMyMzMwODMsMTEuMTU3ODk0NyAxMS43OTY5OTI1LDEwLjM2ODQyMSAxMS43OTY5OTI1LDkuNDQ0MjM1NTIgQzExLjc5Njk5MjUsOC43ODk0NzM2OCAxMC44NzYyMDg0LDkuNTc4OTQ3MjcgNy41LDkuNzc2MzE1NzkgQzQuMTIzNzkxNjIsOS41Nzg5NDc0MyAzLjIwMzAwODcyLDguNzg5NDczNjkgMy4yMDMwMDc1Miw5LjQ0NDIzNTUyIEMzLjIwMzAwNTgyLDEwLjM2ODQyMSA2LjA2NzY2OTE3LDExLjE1Nzg5NDcgNy41LDEwLjk2MDUyNjMgWicgaWQ9J1NtaWxlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuMjM2ODQyMTEsNi4zMjM2NTk4IEM1LjY0Mzc4ODc2LDYuMzIzNjU5OCA1Ljk3MzY4NDIxLDUuODgxODM1NTQgNS45NzM2ODQyMSw1LjMzNjgxNzY5IEM1Ljk3MzY4NDIxLDQuNzkxNzk5ODUgNS42NDM3ODg3Niw0LjM0OTk3NTU5IDUuMjM2ODQyMTEsNC4zNDk5NzU1OSBDNC44Mjk4OTU0NSw0LjM0OTk3NTU5IDQuNSw0Ljc5MTc5OTg1IDQuNSw1LjMzNjgxNzY5IEM0LjUsNS44ODE4MzU1NCA0LjgyOTg5NTQ1LDYuMzIzNjU5OCA1LjIzNjg0MjExLDYuMzIzNjU5OCBaIE05LjczNjg0MjExLDYuMzIzNjU5OCBDMTAuMTQzNzg4OCw2LjMyMzY1OTggMTAuNDczNjg0Miw1Ljg4MTgzNTU0IDEwLjQ3MzY4NDIsNS4zMzY4MTc2OSBDMTAuNDczNjg0Miw0Ljc5MTc5OTg1IDEwLjE0Mzc4ODgsNC4zNDk5NzU1OSA5LjczNjg0MjExLDQuMzQ5OTc1NTkgQzkuMzI5ODk1NDUsNC4zNDk5NzU1OSA5LDQuNzkxNzk5ODUgOSw1LjMzNjgxNzY5IEM5LDUuODgxODM1NTQgOS4zMjk4OTU0NSw2LjMyMzY1OTggOS43MzY4NDIxMSw2LjMyMzY1OTggWicgaWQ9J0V5ZXMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblxuXHRzeW1ib2xzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxN3B4JyB2aWV3Qm94PScwIDAgMTUgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5PYmplY3RzICZhbXA7IFN5bWJvbHM8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMwNC4wMDAwMDAsIC02MzguMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nT2JqZWN0cy0mYW1wOy1TeW1ib2xzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMDQuMDAwMDAwLCAyMzAuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RoaW5nJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMCcgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScyJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMTEnIHg9JzMnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzQnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjc1LDAuMTU5MjYzOTc4IEwxMS43NSwwIEwxMSwwIEwxMSw1LjA5MTQ5MyBDMTAuNTkzNDQsNC45NDIyMTM5MiAxMC4wNjM5NjYyLDQuOTY0NTMyMjQgOS41NTcxNTM5OSw1LjE5MDE3OTU3IEM4LjY5ODQ5MjkzLDUuNTcyNDgwMSA4LjIzMDAzODM1LDYuMzkzNjU2MjEgOC41MTA4MzE0MSw3LjAyNDMyNzc0IEM4Ljc5MTYyNDQ3LDcuNjU0OTk5MjggOS43MTUzMzQ1NCw3Ljg1NjM0Mzc1IDEwLjU3Mzk5NTYsNy40NzQwNDMyMSBDMTEuMjc2MTE4Myw3LjE2MTQzODAzIDExLjcxNzMzOTMsNi41NTUzODk3MiAxMS43MDEzNTk1LDYgTDExLjc1LDYgTDExLjc1LDEuMzkzODUwNTYgQzEyLjMxNzU5MDgsMS41OTU5MDAzNyAxMywyLjA4MTc0NTYgMTMsMy4yNSBDMTMsNC4yNSAxMi43NSw1LjUgMTIuNzUsNS41IEMxMi43NSw1LjUgMTMuNzUsNC43NSAxMy43NSwyLjUgQzEzLjc1LDEuMDIyNTYxMDEgMTIuNTY0MjY3NCwwLjQwNzQ3MzAxOSAxMS43NSwwLjE1OTI2Mzk3OCBaJyBpZD0nTm90ZScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGlkPScmYW1wOycgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRzcGFuIHg9JzAuMjUnIHk9JzE2Jz4mYW1wOzwvdHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGlkPSclJyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHNwYW4geD0nNy43NScgeT0nMTYnPiU8L3RzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0dHJhdmVsOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5UcmFuc3BvcnQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0MS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVHJhbnNwb3J0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDEuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsNiBMMSw2IEwxLDE1IEwwLDE1IEwwLDYgWiBNMTUsNCBMMTYsNCBMMTYsMTUgTDE1LDE1IEwxNSw0IFogTTMuNSwwIEw0LjUsMCBMNC41LDcgTDMuNSw3IEwzLjUsMCBaIE0xLDYgTDMuNSw2IEwzLjUsNyBMMSw3IEwxLDYgWiBNNC41LDAgTDkuNSwwIEw5LjUsMSBMNC41LDEgTDQuNSwwIFogTTkuNSwwIEwxMC41LDAgTDEwLjUsNiBMOS41LDYgTDkuNSwwIFogTTEwLjUsNCBMMTUsNCBMMTUsNSBMMTAuNSw1IEwxMC41LDQgWicgaWQ9J1NreWxpbmUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nV2luZG93cycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScwJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc0JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nQ2FyJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjUwMDAwMCwgNi41MDAwMDApJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LjUsOCBMMi41LDggTDIuNSw5LjUgTDAuNSw5LjUgTDAuNSw3Ljg2ODExNDUgQzAuMjAxMjAyMTkyLDcuNjk1ODI3MDIgMCw3LjM3MDkxMzYzIDAsNi45OTA2MzExIEwwLDUuMDA5MzY4OSBDMCw0LjQ1MTkwOTg1IDAuNDQ0ODM2OTc0LDQgMC45OTU1Nzc0OTksNCBMMTAuMDA0NDIyNSw0IEMxMC41NTQyNjQ4LDQgMTEsNC40NDMzNTMxOCAxMSw1LjAwOTM2ODkgTDExLDYuOTkwNjMxMSBDMTEsNy4zNjUzMzE1IDEwLjc5OTAyNDQsNy42OTIzNDUxOSAxMC41LDcuODY2NDkwMDIgTDEwLjUsOS41IEw4LjUsOS41IEw4LjUsOCBaIE0xLjc1LDYuNSBDMi4xNjQyMTM1Niw2LjUgMi41LDYuMTY0MjEzNTYgMi41LDUuNzUgQzIuNSw1LjMzNTc4NjQ0IDIuMTY0MjEzNTYsNSAxLjc1LDUgQzEuMzM1Nzg2NDQsNSAxLDUuMzM1Nzg2NDQgMSw1Ljc1IEMxLDYuMTY0MjEzNTYgMS4zMzU3ODY0NCw2LjUgMS43NSw2LjUgWiBNOS4yNSw2LjUgQzkuNjY0MjEzNTYsNi41IDEwLDYuMTY0MjEzNTYgMTAsNS43NSBDMTAsNS4zMzU3ODY0NCA5LjY2NDIxMzU2LDUgOS4yNSw1IEM4LjgzNTc4NjQ0LDUgOC41LDUuMzM1Nzg2NDQgOC41LDUuNzUgQzguNSw2LjE2NDIxMzU2IDguODM1Nzg2NDQsNi41IDkuMjUsNi41IFogTTAuNSw3IEwxMC41LDcgTDEwLjUsNy41IEwwLjUsNy41IEwwLjUsNyBaIE0zLDYuNSBMOCw2LjUgTDgsNyBMMyw3IEwzLDYuNSBaJyBpZD0nQm9keScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEuNSw0LjUgTDEuNSwzIEMxLjUsMS4zNDMxNDU3NSAyLjgzOTAyMDEzLDAgNC41MDE2NjU0NywwIEw2LjQ5ODMzNDUzLDAgQzguMTU2MTA4NTksMCA5LjUsMS4zNDY1MTcxMiA5LjUsMyBMOS41LDUnIGlkPSdSb29mJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG59XG5cbiMgRGV2aWNlIGZyYW1lc1xuZXhwb3J0cy5mcmFtZXMgPSAge1xuXG4jIEZ1bGxzY3JlZW5cblx0XCJmdWxsc2NyZWVuXCIgOiB7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LCB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHRzY2FsZToxLCBtb2JpbGU6ZmFsc2UsIHBsYXRmb3JtOlwid2ViXCJ9XG5cblx0IyBpUGhvbmVzXG5cdCMjIDVTXG5cdFwiYXBwbGUtaXBob25lLTVzLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVzLXNpbHZlclwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNXMtZ29sZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuXHQjIyA1Y1xuXHRcImFwcGxlLWlwaG9uZS01Yy1ncmVlblwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVjLWJsdWVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVjLXJlZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNWMtd2hpdGVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01Yy15ZWxsb3dcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01Yy1waW5rXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG5cdCMjIDZzXG5cdFwiYXBwbGUtaXBob25lLTZzLXNwYWNlLWdyYXlcIiA6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTZzLWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTZzLXJvc2UtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuXHQjIyA2cyBwbHVzXG5cdFwiYXBwbGUtaXBob25lLTZzLXBsdXMtZ29sZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsIHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1wbHVzLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1wbHVzXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1yb3NlLWdvbGRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG5cdCMgaVBhZHNcblxuXHQjIyBBaXJcblx0XCJhcHBsZS1pcGFkLWFpci0yLWdvbGRcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLWFpci0yLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG5cdCMjIE1pbmlcblx0XCJhcHBsZS1pcGFkLW1pbmktNC1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLW1pbmktNC1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLW1pbmktNC1zaWx2ZXJcIjp7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuXHQjIyBQcm9cblx0XCJhcHBsZS1pcGFkLXByby1nb2xkXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwYWQtcHJvLXNpbHZlclwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLXByby1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbn1cbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRpdGxlOlwiVGl0bGVcIlxuXHRsZWZ0OnVuZGVmaW5lZFxuXHRyaWdodDpcIkVkaXRcIlxuXHRibHVyOnRydWVcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0dHlwZTpcIm5hdkJhclwiXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRiYXIgPSBuZXcgTGF5ZXIgbmFtZTpcIm5hdmJhclwiXG5cdGJhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjY0XG5cblx0YmFyQXJlYSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJhciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRiYXJBcmVhLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjQ0XG5cdFx0Ym90dG9tOjBcblxuXHRkaXZpZGVyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNCMkIyQjJcIiwgbmFtZTpcIm5hdiBkaXZpZGVyXCIsIHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6LjVcblx0XHRib3R0b206MFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblxuXHRpZiBzZXR1cC5zdXBlckxheWVyXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihiYXIpXG5cblx0aWYgc2V0dXAuYmx1clxuXHRcdGJhci5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpXCJcblx0XHRtLnV0aWxzLmJnQmx1cihiYXIpXG5cdGVsc2Vcblx0XHRiYXIuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCJcblx0XHRtLnV0aWxzLmJnQmx1cihiYXIpXG5cblx0bS5sYXlvdXQuc2V0KFtiYXIsIGJhckFyZWEsIGRpdmlkZXJdKVxuXG5cdGJhci50eXBlID0gc2V0dXAudHlwZVxuXG5cblxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJzdGF0dXNCYXJcIlxuXHRcdFx0QHN0YXR1c0JhciA9IGxheWVyXG5cdFx0XHRiYXIucGxhY2VCZWhpbmQoQHN0YXR1c0JhcilcblxuXHRpZiB0eXBlb2Ygc2V0dXAudGl0bGUgPT0gXCJzdHJpbmdcIlxuXHRcdHRpdGxlID0gbmV3IG0uVGV4dCBzdHlsZTpcIm5hdkJhclRpdGxlXCIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOmJhckFyZWEsIHRleHQ6c2V0dXAudGl0bGVcblx0aWYgdHlwZW9mIHNldHVwLnRpdGxlID09IFwib2JqZWN0XCJcblx0XHR0aXRsZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJuYXZCYXJUaXRsZVwiLCBmb250V2VpZ2h0Olwic2VtaWJvbGRcIiwgc3VwZXJMYXllcjpiYXJBcmVhLCB0ZXh0OnNldHVwLnRpdGxlLmxhYmVsLmh0bWxcblx0XHRiYXIuc3VwZXJMYXllciA9IHNldHVwLnRpdGxlLnZpZXdcblx0bS51dGlscy5zcGVjaWFsQ2hhcih0aXRsZSlcblx0dGl0bGUuY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0Ym90dG9tOjEyXG5cblx0IyBIYW5kbGUgUmlnaHRcblx0aWYgdHlwZW9mIHNldHVwLnJpZ2h0ID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNldHVwLnJpZ2h0ICE9IFwiYm9vbGVhblwiXG5cdFx0YmFyLnJpZ2h0ID0gbmV3IG0uQnV0dG9uIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC5yaWdodCwgZm9udFdlaWdodDo1MDAsIGNvbnN0cmFpbnRzOntib3R0b206MTIsIHRyYWlsaW5nOjh9XG5cdFx0YmFyLnJpZ2h0LnR5cGUgPSBcImJ1dHRvblwiXG5cdFx0bS51dGlscy5zcGVjaWFsQ2hhcihiYXIucmlnaHQpXG5cdGlmIHR5cGVvZiBzZXR1cC5yaWdodCA9PSBcIm9iamVjdFwiXG5cdFx0YmFyLnJpZ2h0ID0gc2V0dXAucmlnaHRcblx0XHRiYXIucmlnaHQuc3VwZXJMYXllciA9IGJhckFyZWFcblx0XHRiYXIucmlnaHQuY29uc3RyYWludHMgPSB7XG5cdFx0XHR0cmFpbGluZzo4XG5cdFx0XHRib3R0b206MTJcblx0XHR9XG5cdG0ubGF5b3V0LnNldChiYXIucmlnaHQpXG5cblx0IyBIYW5kbGUgTGVmdFxuXHRpZiB0eXBlb2Ygc2V0dXAubGVmdCA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZXR1cC5sZWZ0ICE9IFwiYm9vbGVhblwiXG5cdFx0c2V0TGVhZGluZyA9IDhcblx0XHRpZiBzZXR1cC5sZWZ0LmluZGV4T2YoXCI8XCIpICE9IC0xXG5cdFx0XHRzdmcgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5jaGV2cm9uKVxuXHRcdFx0YmFyLmNoZXZyb24gPSBuZXcgTGF5ZXJcblx0XHRcdFx0bmFtZTpcImNoZXZyb25cIlxuXHRcdFx0XHR3aWR0aDpzdmcud2lkdGhcblx0XHRcdFx0aGVpZ2h0OnN2Zy5oZWlnaHRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRzdXBlckxheWVyOmJhckFyZWFcblx0XHRcdGJhci5jaGV2cm9uLmh0bWwgPSBzdmcuc3ZnXG5cdFx0XHRiYXIuY2hldnJvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0Ym90dG9tOjlcblx0XHRcdFx0XHRsZWFkaW5nOjhcblx0XHRcdHNldHVwLmxlZnQgPSBzZXR1cC5sZWZ0LnJlcGxhY2UoXCI8XCIsIFwiXCIpXG5cdFx0XHRzZXRMZWFkaW5nID0gW2Jhci5jaGV2cm9uLCA0XVxuXHRcdFx0bS5sYXlvdXQuc2V0KGJhci5jaGV2cm9uKVxuXG5cdFx0YmFyLmxlZnQgPSBuZXcgbS5CdXR0b25cblx0XHRcdG5hbWU6XCJsZWZ0XCJcblx0XHRcdHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRcdFx0dGV4dDpzZXR1cC5sZWZ0XG5cdFx0XHRmb250V2VpZ2h0OjUwMFxuXHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdGJvdHRvbToxMlxuXHRcdFx0XHRsZWFkaW5nOnNldExlYWRpbmdcblxuXHRcdGJhci5sZWZ0Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0aWYgYmFyLmNoZXZyb25cblx0XHRcdFx0YmFyLmNoZXZyb24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6LjI1KVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRiYXIubGVmdC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRpZiBiYXIuY2hldnJvblxuXHRcdFx0XHRiYXIuY2hldnJvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRpZiB0eXBlb2Ygc2V0dXAubGVmdCA9PSBcIm9iamVjdFwiXG5cdFx0YmFyLmxlZnQgPSBzZXR1cC5sZWZ0XG5cdFx0YmFyLmxlZnQuc3VwZXJMYXllciA9IGJhckFyZWFcblx0XHRiYXIubGVmdC5jb25zdHJhaW50cyA9IHtcblx0XHRcdGxlYWRpbmc6OFxuXHRcdFx0Ym90dG9tOjEyXG5cdFx0fVxuXG5cdG0ubGF5b3V0LnNldChiYXIubGVmdClcblx0cmV0dXJuIGJhclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0YWN0aW9uczpbXCJPS1wiXVxuXHRleGl0OlwiQ2FuY2VsXCJcblx0YW5pbWF0ZWQ6ZmFsc2Vcblx0ZGVzY3JpcHRpb246dW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdCMgU3VwZXIgY29udGFpbmVyXG5cdHNoZWV0ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0c2hlZXQuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdG0ubGF5b3V0LnNldChzaGVldClcblxuXHQjIE92ZXJsYXlcblx0b3ZlcmxheSA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsIDAsIDAsIC40KVwiLCBzdXBlckxheWVyOnNoZWV0LCBuYW1lOlwib3ZlcmxheVwiXG5cdG92ZXJsYXkuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdG0ubGF5b3V0LnNldChvdmVybGF5KVxuXG5cdCMgQ29udGFpbmVyXG5cdHNoZWV0cyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOnNoZWV0XG5cdHNoZWV0cy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0bS5sYXlvdXQuc2V0KHNoZWV0cylcblxuXHQjIEV4aXQgQnV0dG9uXG5cdGV4aXRCdXR0b24gPSBuZXcgbS5CdXR0b25cblx0XHRidXR0b25UeXBlOlwiYmlnXCJcblx0XHR0ZXh0OnNldHVwLmV4aXRcblx0XHRibHVyOmZhbHNlXG5cdFx0c3VwZXJMYXllcjpzaGVldHNcblx0ZXhpdEJ1dHRvbi5jb25zdHJhaW50cy5ib3R0b20gPSAxMFxuXG5cdG0ubGF5b3V0LnNldChleGl0QnV0dG9uKVxuXG5cdCMgQWN0aW9uc1xuXHRhY3Rpb25zID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c2hlZXRzLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCgxMi41KSwgYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwgLjg1KVwiXG5cdG0udXRpbHMuYmdCbHVyKGFjdGlvbnMpXG5cblxuXHQjIERlc2NyaXB0aW9uXG5cdGRlc2NyaXB0aW9uQnVmZmVyID0gMFxuXHRpZiBzZXR1cC5kZXNjcmlwdGlvblxuXHRcdGRlc2NyaXB0aW9uID0gbmV3IG0uVGV4dCBzdHlsZTpcInNoZWV0RGVzY3JpcHRpb25cIiwgdGV4dDpzZXR1cC5kZXNjcmlwdGlvbiwgc3VwZXJMYXllcjphY3Rpb25zLCBmb250U2l6ZToxMywgY29sb3I6XCIjOEY4RTk0XCIsIHRleHRBbGlnbjpcImNlbnRlclwiXG5cdFx0ZGVzY3JpcHRpb24uY29uc3RyYWludHMgPVxuXHRcdFx0dG9wOjIxXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0d2lkdGg6bS51dGlscy5wdChtLmRldmljZS53aWR0aCkgLSAxMDBcblx0XHRtLmxheW91dC5zZXQoKVxuXHRcdGRlc2NyaXB0aW9uQnVmZmVyID0gbS51dGlscy5wdChkZXNjcmlwdGlvbi5oZWlnaHQpICsgNDJcblx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWN0aW9ucywgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0ZGl2aWRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRoZWlnaHQ6MVxuXHRcdFx0dG9wOmRlc2NyaXB0aW9uQnVmZmVyXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRtLmxheW91dC5zZXQoW2Rlc2NyaXB0aW9uLCBkaXZpZGVyXSlcblxuXG5cdGFjdGlvbnMuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MTBcblx0XHR0cmFpbGluZzoxMFxuXHRcdGJvdHRvbTpbZXhpdEJ1dHRvbiwgMTBdXG5cdFx0aGVpZ2h0OjU4ICogc2V0dXAuYWN0aW9ucy5sZW5ndGggKyBkZXNjcmlwdGlvbkJ1ZmZlclxuXHRtLmxheW91dC5zZXQoYWN0aW9ucylcblxuXG5cdGFjdHMgPSB7fVxuXG5cdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblx0XHRvID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWN0aW9ucywgd2lkdGg6YWN0aW9ucy53aWR0aCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoMTIuNSlcblx0XHRvLmNvbnN0cmFpbnRzID1cblx0XHRcdHRvcDppbmRleCAqIDU4ICsgZGVzY3JpcHRpb25CdWZmZXJcblx0XHRcdGhlaWdodDo1OFxuXHRcdGJ1dHRvbiA9IG5ldyBtLkJ1dHRvbiB0ZXh0OmFjdCwgc3VwZXJMYXllcjpvLCBmb250U2l6ZToyMFxuXG5cdFx0bS51dGlscy5zcGVjaWFsQ2hhcihidXR0b24pXG5cblx0XHRidXR0b24uY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdGJ1dHRvbi5jb2xvciA9IFwiI0ZFMzgyNFwiXG5cdFx0aWYgaW5kZXggIT0gc2V0dXAuYWN0aW9ucy5sZW5ndGggLSAxXG5cdFx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bywgd2lkdGg6YWN0aW9ucy53aWR0aCwgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0XHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0aGVpZ2h0OjFcblx0XHRcdFx0Ym90dG9tOjBcblxuXHRcdG0ubGF5b3V0LnNldCgpXG5cblx0XHRvLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDIxNSwyMTUsMjE1LC43KVwiXG5cdFx0XHRALmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczogKGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHR0aW1lOi41XG5cblx0XHRvLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiKVxuXHRcdFx0XHR0aW1lOi41XG5cdFx0XHRzaGVldHMuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTptLmRldmljZS5oZWlnaHQrbS51dGlscy5weCgoc2V0dXAuYWN0aW9ucy5sZW5ndGggKyAzKSAqIDU4KSlcblx0XHRcdFx0dGltZTouM1xuXHRcdFx0b3ZlcmxheS5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6IChvcGFjaXR5OjApXG5cdFx0XHRcdHRpbWU6LjNcblx0XHRcdFV0aWxzLmRlbGF5IC4zLCAtPlxuXHRcdFx0XHRzaGVldC5kZXN0cm95KClcblx0XHRhY3RzW2FjdF0gPSBvXG5cblx0aWYgc2V0dXAuYW5pbWF0ZWQgPT0gdHJ1ZVxuXHRcdG92ZXJsYXkub3BhY2l0eSA9IDBcblx0XHRzaGVldHMubWF4WSA9IG0uZGV2aWNlLmhlaWdodCArIG0udXRpbHMucHgoKHNldHVwLmFjdGlvbnMubGVuZ3RoICsgMykgKiA1OClcblx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MSlcblx0XHRcdHRpbWU6LjNcblx0XHRzaGVldHMuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoobWF4WTptLmRldmljZS5oZWlnaHQpXG5cdFx0XHR0aW1lOi4zXG5cblx0b3ZlcmxheS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c2hlZXRzLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6IChtYXhZOm0uZGV2aWNlLmhlaWdodCttLnV0aWxzLnB4KChzZXR1cC5hY3Rpb25zLmxlbmd0aCArIDMpICogNTgpKVxuXHRcdFx0dGltZTouM1xuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdHNoZWV0LmRlc3Ryb3koKVxuXG5cdGV4aXRCdXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNoZWV0cy5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTptLmRldmljZS5oZWlnaHQrbS51dGlscy5weCgoc2V0dXAuYWN0aW9ucy5sZW5ndGggKyAzKSAqIDU4KSlcblx0XHRcdHRpbWU6LjNcblx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6IChvcGFjaXR5OjApXG5cdFx0XHR0aW1lOi4zXG5cdFx0VXRpbHMuZGVsYXkgLjMsIC0+XG5cdFx0XHRzaGVldC5kZXN0cm95KClcblxuXHRzaGVldC5jYW5jZWwgPSBleGl0QnV0dG9uXG5cdHNoZWV0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cblx0c2hlZXQub3ZlcmxheSA9IG92ZXJsYXlcblx0c2hlZXQuYWN0aW9ucyA9IGFjdHNcblx0cmV0dXJuIHNoZWV0XG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRjYXJyaWVyOlwiXCJcblx0bmV0d29yazpcIkxURVwiXG5cdGJhdHRlcnk6MTAwXG5cdHNpZ25hbDo1XG5cdHN0eWxlOlwiZGFya1wiXG5cdGNsb2NrMjQ6ZmFsc2Vcblx0dHlwZTpcInN0YXR1c0JhclwiXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRzdGF0dXNCYXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInN0YXR1c0Jhci5hbGxcIlxuXHRzdGF0dXNCYXIudHlwZSA9IHNldHVwLnR5cGVcblx0c3RhdHVzQmFyLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjIwXG5cdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdFx0QGJhdHRlcnlJY29uID0gNVxuXHRcdFx0QGJsdWV0b290aCA9IDVcblxuXHRcdHdoZW4gXCJmdWxsc2NyZWVuXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdFx0QGJhdHRlcnlJY29uID0gLSAxMlxuXHRcdFx0QGJsdWV0b290aCA9IC0gMTBcblx0XHRlbHNlXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDNcblx0XHRcdEBiYXR0ZXJ5SWNvbiA9IDJcblx0XHRcdEBibHVldG9vdGggPSAzXG5cblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJsaWdodFwiXG5cdFx0QGNvbG9yID0gXCJ3aGl0ZVwiXG5cdGVsc2Vcblx0XHRAY29sb3IgPSBcImJsYWNrXCJcblx0Zm9yIGxheWVyIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsYXllci50eXBlID09IFwibG9ja1NjcmVlblwiXG5cdFx0XHRAaXNMb2NrU2NyZWVuUHV0aWxzZW50ID0gdHJ1ZVxuXHRpZiBAaXNMb2NrU2NyZWVuUHV0aWxzZW50XG5cdFx0Z3JpcHBlciA9IG5ldyBMYXllciBzdXBlckxheWVyOnN0YXR1c0Jhciwgd2lkdGg6dXRpbHMucHgoMzcpLCBoZWlnaHQ6dXRpbHMucHgoNSksIG5hbWU6XCJncmlwcGVyXCIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjUsIG5hbWU6XCJncmlwcGVyXCJcblx0XHRncmlwcGVyLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3t1dGlscy5weCgzNyl9cHgnIGhlaWdodD0nI3t1dGlscy5weCg1KX1weCcgdmlld0JveD0nMCAwIDM3IDUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkdyaXBwZXI8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvQXV0by1Db21wbGV0ZS1CYXItQ2xvc2VkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTY5LjAwMDAwMCwgLTIuMDAwMDAwKScgZmlsbD0nI0ZGRkZGRic+XG5cdFx0XHRcdFx0XHQ8cmVjdCBpZD0nR3JpcHBlcicgeD0nMTY5LjUnIHk9JzIuNScgd2lkdGg9JzM2JyBoZWlnaHQ9JzQnIHJ4PScyLjUnPjwvcmVjdD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0Z3JpcHBlci5jb25zdHJhaW50cyA9XG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0dG9wOjJcblx0ZWxzZVxuXHRcdEB0aW1lID0gbS51dGlscy5nZXRUaW1lKClcblx0XHRpZiBzZXR1cC5jbG9jazI0ID09IGZhbHNlXG5cdFx0XHRpZiBAdGltZS5ob3VycyA+IDExXG5cdFx0XHRcdEB0aW1lLnN0YW1wID0gXCJQTVwiXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEB0aW1lLnN0YW1wID0gXCJBTVwiXG5cdFx0ZWxzZVxuXHRcdFx0QHRpbWUuc3RhbXAgPSBcIlwiXG5cdFx0dGltZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJUaW1lXCIsIHRleHQ6bS51dGlscy50aW1lRm9ybWF0dGVyKEB0aW1lLCBzZXR1cC5jbG9jazI0KSArIFwiIFwiICsgQHRpbWUuc3RhbXAsIGZvbnRTaXplOjEyLCBmb250V2VpZ2h0Olwic2VtaWJvbGRcIiwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGNvbG9yOkBjb2xvciwgbmFtZTpcInRpbWVcIlxuXHRcdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdHRvcDpAdG9wQ29uc3RyYWludFxuXHRzaWduYWwgPSBbXVxuXHRpZiBzZXR1cC5zaWduYWwgPCAxXG5cdFx0bm9OZXR3b3JrID0gbmV3IG0uVGV4dCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIHRleHQ6XCJObyBOZXR3b3JrXCJcblx0XHRub05ldHdvcmsuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZzo3XG5cdFx0XHR0b3A6M1xuXHRlbHNlXG5cdFx0Zm9yIGkgaW4gWzAuLi5zZXR1cC5zaWduYWxdXG5cdFx0XHRkb3QgPSBuZXcgTGF5ZXIgaGVpZ2h0Om0udXRpbHMucHgoNS41KSwgd2lkdGg6bS51dGlscy5weCg1LjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLCBzdXBlckxheWVyOnN0YXR1c0JhciwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoNS41KS8yLCBiYWNrZ3JvdW5kQ29sb3I6QGNvbG9yLCBuYW1lOlwic2lnbmFsWyN7aX1dXCJcblx0XHRcdGlmIGkgPT0gMFxuXHRcdFx0XHRkb3QuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6N1xuXHRcdFx0XHRcdHRvcDo3XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW2kgLSAxIF0sIDFdXG5cdFx0XHRcdFx0dG9wOjdcblx0XHRcdHNpZ25hbC5wdXNoIGRvdFxuXHRcdFx0bS5sYXlvdXQuc2V0KClcblx0XHRpZiBzZXR1cC5zaWduYWwgPCA1XG5cdFx0XHRub25Eb3RzID0gNSAtIHNldHVwLnNpZ25hbFxuXHRcdFx0Zm9yIGkgaW4gWzAuLi5ub25Eb3RzXVxuXHRcdFx0XHRub25Eb3QgPSBuZXcgTGF5ZXIgaGVpZ2h0Om0udXRpbHMucHgoNS41KSwgd2lkdGg6bS51dGlscy5weCg1LjUpLCBzdXBlckxheWVyOnN0YXR1c0JhciwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoNS41KS8yLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwic2lnbmFsWyN7c2lnbmFsLmxlbmd0aH1dXCJcblx0XHRcdFx0bm9uRG90LnN0eWxlLmJvcmRlciA9IFwiI3ttLnV0aWxzLnB4KDEpfXB4IHNvbGlkICN7QGNvbG9yfVwiXG5cdFx0XHRcdG5vbkRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgMV1cblx0XHRcdFx0XHR0b3A6N1xuXHRcdFx0XHRzaWduYWwucHVzaCBub25Eb3Rcblx0XHRcdFx0bS5sYXlvdXQuc2V0KClcblx0XHRjYXJyaWVyID0gbmV3IG0uVGV4dCBzdHlsZTpcInN0YXR1c0JhckNhcnJpZXJcIiwgdGV4dDpzZXR1cC5jYXJyaWVyLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcImNhcnJpZXJcIiwgdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIlxuXHRcdGNhcnJpZXIuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgN11cblx0XHRcdHRvcDozXG5cdFx0bS5sYXlvdXQuc2V0KClcblx0XHRpZiBzZXR1cC5jYXJyaWVyXG5cdFx0XHRuZXR3b3JrID0gbmV3IG0uVGV4dCBzdHlsZTpcInN0YXR1c0Jhck5ldHdvcmtcIiwgdGV4dDpzZXR1cC5uZXR3b3JrLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcIm5ldHdvcmtcIiwgdGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzpbY2FycmllciwgNV1cblx0XHRcdFx0dG9wOjNcblxuXHRcdGlmIHNldHVwLmNhcnJpZXIgPT0gXCJcIiB8fCBzZXR1cC5jYXJyaWVyID09IFwid2lmaVwiXG5cdFx0XHRuZXR3b3JrSWNvbiA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLm5ldHdvcmssIEBjb2xvcilcblx0XHRcdG5ldHdvcmsgPSBuZXcgTGF5ZXIgd2lkdGg6bmV0d29ya0ljb24ud2lkdGgsIGhlaWdodDpuZXR3b3JrSWNvbi5oZWlnaHQsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwibmV0d29ya1wiXG5cdFx0XHRuZXR3b3JrLmh0bWwgPSBuZXR3b3JrSWNvbi5zdmdcblx0XHRcdG0udXRpbHMuY2hhbmdlRmlsbChuZXR3b3JrLCBAY29sb3IpXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgNV1cblx0XHRcdFx0dG9wOkB0b3BDb25zdHJhaW50XG5cblx0YmF0dGVyeUljb24gPSBuZXcgTGF5ZXIgd2lkdGg6bS51dGlscy5weCgyNSksIGhlaWdodDptLnV0aWxzLnB4KDEwKSwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYXR0ZXJ5SWNvblwiXG5cdGlmIHNldHVwLmJhdHRlcnkgPiA3MFxuXHRcdGhpZ2hCYXR0ZXJ5ID0gbS51dGlscy5zdmcobS5hc3NldHMuYmF0dGVyeUhpZ2gpXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IGhpZ2hCYXR0ZXJ5LnN2Z1xuXHRcdG0udXRpbHMuY2hhbmdlRmlsbChiYXR0ZXJ5SWNvbiwgQGNvbG9yKVxuXG5cdGlmIHNldHVwLmJhdHRlcnkgPD0gNzAgJiYgc2V0dXAuYmF0dGVyeSA+IDIwXG5cdFx0bWlkQmF0dGVyeSA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmJhdHRlcnlNaWQpXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IG1pZEJhdHRlcnkuc3ZnXG5cdFx0bS51dGlscy5jaGFuZ2VGaWxsKGJhdHRlcnlJY29uLCBAY29sb3IpXG5cblx0aWYgc2V0dXAuYmF0dGVyeSA8PSAyMFxuXHRcdGxvd0JhdHRlcnkgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5iYXR0ZXJ5TG93KVxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBsb3dCYXR0ZXJ5LnN2Z1xuXHRcdG0udXRpbHMuY2hhbmdlRmlsbChiYXR0ZXJ5SWNvbiwgQGNvbG9yKVxuXG5cdGJhdHRlcnlJY29uLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZyA6IDdcblx0XHR0b3A6QGJhdHRlcnlJY29uXG5cblx0YmF0dGVyeVBlcmNlbnQgPSBuZXcgbS5UZXh0IHN0eWxlOlwic3RhdHVzQmFyQmF0dGVyeVBlcmNlbnRcIiwgdGV4dDpzZXR1cC5iYXR0ZXJ5ICsgXCIlXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBmb250U2l6ZToxMiwgY29sb3I6QGNvbG9yLCBuYW1lOlwiYmF0dGVyeVBlcmNlbnRcIlxuXHRiYXR0ZXJ5UGVyY2VudC5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmc6IFtiYXR0ZXJ5SWNvbiwgM11cblx0XHR2ZXJ0aWNhbENlbnRlcjp0aW1lXG5cblx0Ymx1ZXRvb3RoU1ZHID0gbS51dGlscy5zdmcobS5hc3NldHMuYmx1ZXRvb3RoKVxuXHRibHVldG9vdGggPSBuZXcgTGF5ZXIgd2lkdGg6Ymx1ZXRvb3RoU1ZHLndpZHRoLCBoZWlnaHQ6Ymx1ZXRvb3RoU1ZHLmhlaWdodCwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIG9wYWNpdHk6LjUsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJibHVldG9vdGhcIlxuXHRibHVldG9vdGguaHRtbCA9IGJsdWV0b290aFNWRy5zdmdcblx0bS51dGlscy5jaGFuZ2VGaWxsKGJsdWV0b290aCwgQGNvbG9yKVxuXHRibHVldG9vdGguY29uc3RyYWludHMgPVxuXHRcdHRvcDogQGJsdWV0b290aFxuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeVBlcmNlbnQsIDddXG5cblx0bS5sYXlvdXQuc2V0KClcblxuXHQjIEV4cG9ydCBzdGF0dXNCYXJcblx0c3RhdHVzQmFyLmJhdHRlcnkgPSB7fVxuXHRzdGF0dXNCYXIuYmF0dGVyeS5wZXJjZW50ID0gYmF0dGVyeVBlcmNlbnRcblx0c3RhdHVzQmFyLmJhdHRlcnkuaWNvbiA9IGJhdHRlcnlJY29uXG5cdHN0YXR1c0Jhci5ibHVldG9vdGggPSBibHVldG9vdGhcblx0c3RhdHVzQmFyLnRpbWUgPSB0aW1lXG5cdHN0YXR1c0Jhci5uZXR3b3JrID0gbmV0d29ya1xuXHRzdGF0dXNCYXIuY2FycmllciA9IGNhcnJpZXJcblx0c3RhdHVzQmFyLnNpZ25hbCA9IHNpZ25hbFxuXHRyZXR1cm4gc3RhdHVzQmFyXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRhYjoge1xuXHRcdGxhYmVsOiBcImxhYmVsXCJcblx0XHRpY29uOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScyNXB4JyBoZWlnaHQ9JzI1cHgnIHZpZXdCb3g9JzAgMCAyNSAyNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+MTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMSc+XG5cdFx0XHRcdFx0PGcgaWQ9J0JvdHRvbS1CYXIvVGFiLUJhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTcuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nUGxhY2Vob2xkZXJzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNS4wMDAwMDAsIDcuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPScxJyB4PScwJyB5PScwJyB3aWR0aD0nMjUnIGhlaWdodD0nMjUnIHJ4PSczJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFjdGl2ZTogdW5kZWZpbmVkXG5cdFx0dW5hY3RpdmU6IHVuZGVmaW5lZFxuXHRcdHRhYkJhcjogdW5kZWZpbmVkXG5cdFx0dHlwZTogXCJ0YWJcIlxuXHR9XG5cdGJhcjoge1xuXHRcdHRhYnM6IFtdXG5cdFx0c3RhcnQ6MFxuXHRcdHR5cGU6XCJ0YWJCYXJcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRhY3RpdmVDb2xvcjpcImJsdWVcIlxuXHRcdGluYWN0aXZlQ29sb3I6XCJncmF5XCJcblx0XHRibHVyOnRydWVcblx0fVxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnRhYi5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMudGFiKVxuZXhwb3J0cy5kZWZhdWx0cy5iYXIucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmJhcilcblxuZXhwb3J0cy50YWIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cy50YWIpXG5cdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdEB0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0QHRhYldpZHRoID0gNzVcblx0dGFiVmlldyA9IG5ldyBMYXllciBuYW1lOnNldHVwLmxhYmVsICsgXCIgdmlld1wiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdHRhYlZpZXcuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdHRhYkJveCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLmxhYmVsICsgXCIgdGFiXCJcblx0dGFiQm94LmNvbnN0cmFpbnRzID1cblx0XHR3aWR0aDpAdGFiV2lkdGhcblx0XHRoZWlnaHQ6NDlcblx0aWNvbiA9IG5ldyBMYXllciB3aWR0aDptLnV0aWxzLnB4KDI1KSwgaGVpZ2h0Om0udXRpbHMucHgoMjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiaWNvblwiLCBzdXBlckxheWVyOnRhYkJveFxuXHRpY29uLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHRvcDo3XG5cdHN2Z0ZyYW1lID0gbS51dGlscy5zdmcoc2V0dXAuaWNvbilcblx0aWNvbi5odG1sID0gc3ZnRnJhbWUuc3ZnXG5cdGljb24ud2lkdGggPSBzdmdGcmFtZS53aWR0aFxuXHRpY29uLmhlaWdodCA9IHN2Z0ZyYW1lLmhlaWdodFxuXHRsYWJlbCA9IG5ldyBtLlRleHQgdGV4dDpzZXR1cC5sYWJlbCwgc3VwZXJMYXllcjp0YWJCb3gsIGNvbG9yOlwiIzkyOTI5MlwiLCBmb250U2l6ZToxMCwgbmFtZTpcImxhYmVsXCIsIHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblx0bGFiZWwuY29uc3RyYWludHMgPVxuXHRcdGJvdHRvbToyXG5cdFx0aG9yaXpvbnRhbENlbnRlcjppY29uXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0IyBFeHBvcnQgVGFiXG5cdHRhYkJveC50eXBlID0gXCJ0YWJcIlxuXHR0YWJCb3guaWNvbiA9IGljb25cblx0dGFiQm94LnZpZXcgPSB0YWJWaWV3XG5cdHRhYkJveC5sYWJlbCA9IGxhYmVsXG5cblx0cmV0dXJuIHRhYkJveFxuXG5leHBvcnRzLmJhciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzLmJhcilcblx0aWYgc2V0dXAudGFicy5sZW5ndGggPT0gMFxuXHRcdGR1bW15VGFiID0gbmV3IGV4cG9ydHMudGFiXG5cdFx0ZHVtbXlUYWIyID0gbmV3IGV4cG9ydHMudGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiMlxuXHR0YWJXaWR0aCA9IDc1XG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHR0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0dGFiV2lkdGggPSA3NVxuXHR0YWJCYXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInRhYiBiYXJcIlxuXHR0YWJCYXJCRyA9IG5ldyBCYWNrZ3JvdW5kTGF5ZXIgc3VwZXJMYXllcjp0YWJCYXIsIG5hbWU6XCJ0YWJCYXIgYmFja2dyb3VuZFwiXG5cdHRhYkJhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGJvdHRvbTowXG5cdFx0aGVpZ2h0OjQ5XG5cdHRhYkJhckJHLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0Ym90dG9tOjBcblx0XHRoZWlnaHQ6NDlcblx0ZGl2aWRlciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjQjJCMkIyXCIsIG5hbWU6XCJ0YWJEaXZpZGVyXCIsIHN1cGVyTGF5ZXI6dGFiQmFyXG5cdGRpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdHRvcDowXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDouNVxuXHR0YWJCYXJCb3ggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjp0YWJCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJ0YWJCYXIgYm94XCJcblx0dGFiQmFyQm94LmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6NDlcblx0XHR3aWR0aDpzZXR1cC50YWJzLmxlbmd0aCAqIHRhYldpZHRoXG5cblx0bS5sYXlvdXQuc2V0KClcblxuXHRzZXRBY3RpdmUgPSAodGFiSW5kZXgpIC0+XG5cdFx0Zm9yIHRhYiwgaW5kZXggaW4gc2V0dXAudGFic1xuXHRcdFx0aWYgaW5kZXggPT0gdGFiSW5kZXhcblx0XHRcdFx0bS51dGlscy5jaGFuZ2VGaWxsKHRhYi5pY29uLCBtLnV0aWxzLmNvbG9yKHNldHVwLmFjdGl2ZUNvbG9yKSlcblx0XHRcdFx0dGFiLmxhYmVsLmNvbG9yID0gbS51dGlscy5jb2xvcihzZXR1cC5hY3RpdmVDb2xvcilcblx0XHRcdFx0dGFiLnZpZXcudmlzaWJsZSA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0bS51dGlscy5jaGFuZ2VGaWxsKHRhYi5pY29uLCBtLnV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpKVxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBtLnV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpXG5cdFx0XHRcdHRhYi52aWV3LnZpc2libGUgPSBmYWxzZVxuXG5cdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHQjQ2hlY2sgZm9yIHZhaWxkIHRhYiBvYmplY3Rcblx0XHRpZiB0YWIudHlwZSAhPSBcInRhYlwiXG5cdFx0XHRlcnJvcih0YWIuaWQsIDUpXG5cblx0XHR0YWJCYXJCb3guYWRkU3ViTGF5ZXIodGFiKVxuXHRcdCMgQ2hhbmdlIGNvbG9yc1xuXHRcdG0udXRpbHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgbS51dGlscy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKSlcblx0XHR0YWIubGFiZWwuY29sb3IgPSBtLnV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpXG5cdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gc2V0dXAuYmFja2dyb3VuZENvbG9yXG5cblx0XHRpZiBzZXR1cC5ibHVyXG5cdFx0XHR0YWJCYXJCRy5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsIC45KVwiXG5cdFx0XHRtLnV0aWxzLmJnQmx1cih0YWJCYXJCRylcblxuXHRcdGlmIGluZGV4ID09IDBcblx0XHRcdHRhYi5jb25zdHJhaW50cy5sZWFkaW5nID0gMFxuXHRcdGVsc2Vcblx0XHRcdHRhYi5jb25zdHJhaW50cy5sZWFkaW5nID0gc2V0dXAudGFic1tpbmRleCAtIDFdXG5cblx0XHRtLmxheW91dC5zZXQodGFiKVxuXG5cdFx0dGFiLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0dGFiSW5kZXggPSBALnggLyBtLnV0aWxzLnB4KHRhYldpZHRoKVxuXHRcdFx0c2V0QWN0aXZlKHRhYkluZGV4KVxuXHR0YWJCYXJCb3guY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0c2V0QWN0aXZlKHNldHVwLnN0YXJ0KVxuXG5cdG0ubGF5b3V0LnNldCgpXG5cdHJldHVybiB0YWJCYXJcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0Y29uc3RyYWludHM6e31cblx0dGV4dDogXCJNYXRlcmlhbCBUZXh0IExheWVyXCJcblx0dHlwZTpcInRleHRcIlxuXHR4OjBcblx0eTowXG5cdHdpZHRoOi0xXG5cdGhlaWdodDotMVxuXHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRzdHlsZTpcImRlZmF1bHRcIlxuXHRsaW5lczoxXG5cdHRleHRBbGlnbjpcImxlZnRcIlxuXHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGNvbG9yOlwiYmxhY2tcIlxuXHRmb250U2l6ZTogMTdcblx0Zm9udEZhbWlseTpcIi1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdGxpbmVIZWlnaHQ6XCJhdXRvXCJcblx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRvcGFjaXR5OjFcblx0dGV4dFRyYW5zZm9ybTpcIm5vbmVcIlxuXHRsZXR0ZXJTcGFjaW5nOjBcblx0bmFtZTpcInRleHQgbGF5ZXJcIlxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRleGNlcHRpb25zID0gT2JqZWN0LmtleXMoc2V0dXApXG5cdHRleHRMYXllciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLm5hbWVcblx0dGV4dExheWVyLnR5cGUgPSBcInRleHRcIlxuXHR0ZXh0TGF5ZXIuaHRtbCA9IHNldHVwLnRleHRcblx0Zm9yIHByb3AgaW4gbS5saWIubGF5ZXJQcm9wc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwiY29sb3JcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IG0udXRpbHMuY29sb3Ioc2V0dXBbcHJvcF0pXG5cdFx0XHR0ZXh0TGF5ZXJbcHJvcF0gPSBzZXR1cFtwcm9wXVxuXHRmb3IgcHJvcCBpbiBtLmxpYi5sYXllclN0eWxlc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwibGluZUhlaWdodFwiICYmIHNldHVwW3Byb3BdID09IFwiYXV0b1wiXG5cdFx0XHRcdHRleHRMYXllci5zdHlsZS5saW5lSGVpZ2h0ID0gIHNldHVwLmZvbnRTaXplXG5cdFx0XHRpZiBwcm9wID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdHN3aXRjaCBzZXR1cFtwcm9wXVxuXHRcdFx0XHRcdHdoZW4gXCJ1bHRyYXRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMTAwXG5cdFx0XHRcdFx0d2hlbiBcInRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMjAwXG5cdFx0XHRcdFx0d2hlbiBcImxpZ2h0XCIgdGhlbiBzZXR1cFtwcm9wXSA9IDMwMFxuXHRcdFx0XHRcdHdoZW4gXCJyZWd1bGFyXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDQwMFxuXHRcdFx0XHRcdHdoZW4gXCJtZWRpdW1cIiB0aGVuIHNldHVwW3Byb3BdID0gNTAwXG5cdFx0XHRcdFx0d2hlbiBcInNlbWlib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDYwMFxuXHRcdFx0XHRcdHdoZW4gXCJib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDcwMFxuXHRcdFx0XHRcdHdoZW4gXCJibGFja1wiIHRoZW4gc2V0dXBbcHJvcF0gPSA4MDBcblx0XHRcdGlmIHByb3AgPT0gXCJmb250U2l6ZVwiIHx8IHByb3AgPT0gXCJsaW5lSGVpZ2h0XCIgfHwgcHJvcCA9PSBcImxldHRlclNwYWNpbmdcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IG0udXRpbHMucHgoc2V0dXBbcHJvcF0pICsgXCJweFwiXG5cdFx0XHR0ZXh0TGF5ZXIuc3R5bGVbcHJvcF0gPSBzZXR1cFtwcm9wXVxuXG5cdHRleHRGcmFtZSA9IG0udXRpbHMudGV4dEF1dG9TaXplKHRleHRMYXllcilcblx0dGV4dExheWVyLnByb3BzID0gKGhlaWdodDp0ZXh0RnJhbWUuaGVpZ2h0LCB3aWR0aDp0ZXh0RnJhbWUud2lkdGgpXG5cdHRleHRMYXllci5jb25zdHJhaW50cyA9IHNldHVwLmNvbnN0cmFpbnRzXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDp0ZXh0TGF5ZXJcblx0cmV0dXJuIHRleHRMYXllclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuIyMgQ29udmVydHMgcHggdG8gcHRcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvbS5kZXZpY2Uuc2NhbGVcblx0cHQgPSBNYXRoLnJvdW5kKHB0KVxuXHRyZXR1cm4gcHRcblxuIyMgQ29udmVydHMgcHQgdG8gcHhcbmV4cG9ydHMucHggPSAocHQpIC0+XG5cdHB4ID0gcHQgKiBtLmRldmljZS5zY2FsZVxuXHRweCA9IE1hdGgucm91bmQocHgpXG5cdHJldHVybiBweFxuXG4jIyBpT1MgQ29sb3Ig4oCTIFRoaXMgd2lsbCBzdG9yZSBhbGwgb2YgdGhlIGRlZmF1bHQgaU9TIGNvbG9ycyBpbnRlYWQgb2YgdGhlIGRlZmF1bHQgQ1NTIGNvbG9ycy4gKlRoaXMgaXMgb25seSB1cCBoZXJlIGJlY2F1c2UgSSByZWZlciB0byBpdCBpbiB0aGUgZGVmYXVsdHMuKlxuZXhwb3J0cy5jb2xvciA9IChjb2xvclN0cmluZykgLT5cblx0Y29sb3IgPSBcIlwiXG5cdGlmIHR5cGVvZiBjb2xvclN0cmluZyA9PSBcInN0cmluZ1wiXG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy50b0xvd2VyQ2FzZSgpXG5cdHN3aXRjaCBjb2xvclN0cmluZ1xuXHRcdHdoZW4gXCJyZWRcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUzODI0XCIpXG5cdFx0d2hlbiBcImJsdWVcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjMDA3NkZGXCIpXG5cdFx0d2hlbiBcInBpbmtcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUyODUxXCIpXG5cdFx0d2hlbiBcImdyZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImdyYXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImJsYWNrXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzAzMDMwM1wiKVxuXHRcdHdoZW4gXCJ3aGl0ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiNFRkVGRjRcIilcblx0XHR3aGVuIFwib3JhbmdlXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGOTYwMFwiKVxuXHRcdHdoZW4gXCJncmVlblwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM0NERCNUVcIilcblx0XHR3aGVuIFwibGlnaHQgYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwibGlnaHQtYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwieWVsbG93XCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGQ0QwMFwiKVxuXHRcdHdoZW4gXCJsaWdodCBrZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOURBN0IzXCIpXG5cdFx0d2hlbiBcImxpZ2h0LWtleVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM5REE3QjNcIilcblx0XHRlbHNlXG5cdFx0XHRpZiBjb2xvclN0cmluZ1swXSA9PSBcIiNcIiB8fCBjb2xvclN0cmluZy50b0hleFN0cmluZygpWzBdID09IFwiI1wiXG5cdFx0XHRcdGNvbG9yID0gbmV3IENvbG9yKGNvbG9yU3RyaW5nKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM5MjkyOTJcIilcblx0cmV0dXJuIGNvbG9yXG5cbiMgU3VwcG9ydGluZyBGdW5jdGlvbnNcbiMgVXRpbHNcblxuIyBDbGVhbnMgYSBzdHJpbmcgb2YgPGJyPiBhbmQgJm5ic3A7XG5leHBvcnRzLmNsZWFuID0gKHN0cmluZykgLT5cblx0IyMgcmVtb3ZlIHdoaXRlIHNwYWNlXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bJl1uYnNwWztdL2dpLCBcIiBcIikucmVwbGFjZSgvWzxdYnJbPl0vZ2ksIFwiXCIpXG5cdHJldHVybiBzdHJpbmdcblxuIyBDb252ZXJ0cyBweCdzIG9mIGFuIFNWRyB0byBzY2FsYWJsZSB2YXJpYWJsZXNcbmV4cG9ydHMuc3ZnID0gKHN2ZykgLT5cblx0IyBGaW5kIFN0cmluZ1xuXHRzdGFydEluZGV4ID0gc3ZnLnNlYXJjaChcIjxzdmcgd2lkdGg9XCIpXG5cdGVuZEluZGV4ID0gc3ZnLnNlYXJjaChcIiB2aWV3Qm94XCIpXG5cdHN0cmluZyA9IHN2Zy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuXHQjRmluZCB3aWR0aFxuXHR3U3RhcnRJbmRleCA9IHN0cmluZy5zZWFyY2goXCI9XCIpICsgMlxuXHR3RW5kSW5kZXggPSAgc3RyaW5nLnNlYXJjaChcInB4XCIpXG5cdHdpZHRoID0gc3RyaW5nLnNsaWNlKHdTdGFydEluZGV4LCB3RW5kSW5kZXgpXG5cdG5ld1dpZHRoID0gZXhwb3J0cy5weCh3aWR0aClcblxuXHQjIEZpbmQgSGVpZ2h0XG5cdGhlaWdodFN0cmluZyA9IHN0cmluZy5zbGljZSh3RW5kSW5kZXggKyA0LCBzdHJpbmcubGVuZ3RoKVxuXHRoU3RhcnRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCI9XCIpKyAyXG5cdGhFbmRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCJweFwiKVxuXHRoZWlnaHQgPSBoZWlnaHRTdHJpbmcuc2xpY2UoaFN0YXJ0SW5kZXgsIGhFbmRJbmRleClcblx0bmV3SGVpZ2h0ID0gZXhwb3J0cy5weChoZWlnaHQpXG5cblx0I0NyZWF0ZSBuZXcgc3RyaW5nXG5cdG5ld1N0cmluZyA9IHN0cmluZy5yZXBsYWNlKHdpZHRoLCBuZXdXaWR0aClcblx0bmV3U3RyaW5nID0gbmV3U3RyaW5nLnJlcGxhY2UoaGVpZ2h0LCBuZXdIZWlnaHQpXG5cblx0I1JlcGxhY2Ugc3RyaW5nc1xuXHRzdmcgPSBzdmcucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuXHRyZXR1cm4ge1xuXHRcdHN2Zzpzdmdcblx0XHR3aWR0aDpuZXdXaWR0aFxuXHRcdGhlaWdodDpuZXdIZWlnaHRcblx0fVxuXG4jIENoYW5nZXMgdGhlIGZpbGwgb2YgYW4gU1ZHXG5leHBvcnRzLmNoYW5nZUZpbGwgPSAobGF5ZXIsIGNvbG9yKSAtPlxuXHRzdGFydEluZGV4ID0gbGF5ZXIuaHRtbC5zZWFyY2goXCJmaWxsPVxcXCIjXCIpXG5cdGZpbGxTdHJpbmcgPSBsYXllci5odG1sLnNsaWNlKHN0YXJ0SW5kZXgsIGxheWVyLmh0bWwubGVuZ3RoKVxuXHRlbmRJbmRleCA9IGZpbGxTdHJpbmcuc2VhcmNoKFwiXFxcIj5cIilcblx0c3RyaW5nID0gZmlsbFN0cmluZy5zbGljZSgwLCBlbmRJbmRleClcblx0bmV3U3RyaW5nID0gXCJmaWxsPVxcXCJcIiArIGV4cG9ydHMuY29sb3IoY29sb3IpLnRvSGV4U3RyaW5nKClcblx0bGF5ZXIuaHRtbCA9IGxheWVyLmh0bWwucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuZXhwb3J0cy5jYXBpdGFsaXplID0gKHN0cmluZykgLT5cblx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxuXG4jIFJldHVybnMgdGhlIGN1cnJlbnQgdGltZVxuZXhwb3J0cy5nZXRUaW1lID0gLT5cblx0ZGF5c09mVGhlV2VlayA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG5cdG1vbnRoc09mVGhlWWVhciA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdXG5cdGRhdGVPYmogPSBuZXcgRGF0ZSgpXG5cdG1vbnRoID0gbW9udGhzT2ZUaGVZZWFyW2RhdGVPYmouZ2V0TW9udGgoKV1cblx0ZGF0ZSA9IGRhdGVPYmouZ2V0RGF0ZSgpXG5cdGRheSA9IGRheXNPZlRoZVdlZWtbZGF0ZU9iai5nZXREYXkoKV1cblx0aG91cnMgPSBkYXRlT2JqLmdldEhvdXJzKClcblx0bWlucyA9IGRhdGVPYmouZ2V0TWludXRlcygpXG5cdHNlY3MgPSBkYXRlT2JqLmdldFNlY29uZHMoKVxuXHRyZXR1cm4ge1xuXHRcdG1vbnRoOm1vbnRoXG5cdFx0ZGF0ZTpkYXRlXG5cdFx0ZGF5OmRheVxuXHRcdGhvdXJzOmhvdXJzXG5cdFx0bWluczptaW5zXG5cdFx0c2VjczpzZWNzXG5cdH1cblxuZXhwb3J0cy5iZ0JsdXIgPSAobGF5ZXIpIC0+XG5cdGxheWVyLnN0eWxlW1wiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIl0gPSBcImJsdXIoI3tleHBvcnRzLnB4KDUpfXB4KVwiXG5cdHJldHVybiBsYXllclxuXG5leHBvcnRzLnRleHRBdXRvU2l6ZSA9ICh0ZXh0TGF5ZXIpIC0+XG5cdCNEZWZpbmUgV2lkdGhcblx0Y29uc3RyYWludHMgPSB7fVxuXHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHNcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0XG5cdFx0XHRjb25zdHJhaW50cy5oZWlnaHQgPSBleHBvcnRzLnB4KHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHQpXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoXG5cdFx0XHRjb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXG5cdHN0eWxlcyA9XG5cdFx0Zm9udFNpemU6IHRleHRMYXllci5zdHlsZS5mb250U2l6ZVxuXHRcdGZvbnRGYW1pbHk6IHRleHRMYXllci5zdHlsZS5mb250RmFtaWx5XG5cdFx0Zm9udFdlaWdodDogdGV4dExheWVyLnN0eWxlLmZvbnRXZWlnaHRcblx0XHRsaW5lSGVpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGUubGluZUhlaWdodFxuXHRcdGxldHRlclNwYWNpbmc6IHRleHRMYXllci5zdHlsZS5sZXR0ZXJTcGFjaW5nXG5cdFx0dGV4dFRyYW5zZm9ybTogdGV4dExheWVyLnN0eWxlLnRleHRUcmFuc2Zvcm1cblx0dGV4dEZyYW1lID0gVXRpbHMudGV4dFNpemUodGV4dExheWVyLmh0bWwsIHN0eWxlcywgY29uc3RyYWludHMpXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiB0ZXh0RnJhbWUud2lkdGhcblx0XHRoZWlnaHQ6IHRleHRGcmFtZS5oZWlnaHRcblx0fVxuXG5leHBvcnRzLmdldERldmljZSA9IC0+XG5cblxuXHQjIExvYWRzIHRoZSBpbml0aWFsIGZyYW1lXG5cdGRldmljZSA9IEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZVxuXG5cdCMjIyBUaGlzIHN3aXRjaCBsb29rcyBhdCB0aGUgaW5uZXJXaWR0aCB0byBkZXRlcm1pbmUgaWYgdGhlIHByb3RvdHlwZSBpcyBiZWluZyBvcGVuZWQgb24gYSBkZXZpY2UuXG5cdElmIHNvLCBpdCdsbCBvdmVycmlkZSB0aGUgZGV2aWNlLCBhbmQgaXQnbGwgYWRqdXN0IHRoZSB2aWV3IHRvIGZ1bGxzY3JlZW4uIyMjXG5cdGNhcHR1cmVkRGV2aWNlID0ge1xuXHRcdHdpZHRoOm0ubGliLmZyYW1lc1tkZXZpY2VdLndpZHRoXG5cdFx0aGVpZ2h0Om0ubGliLmZyYW1lc1tkZXZpY2VdLmhlaWdodFxuXHRcdHNjYWxlOm0ubGliLmZyYW1lc1tkZXZpY2VdLnNjYWxlXG5cdFx0bW9iaWxlOm0ubGliLmZyYW1lc1tkZXZpY2VdLm1vYmlsZVxuXHRcdHBsYXRmb3JtOm0ubGliLmZyYW1lc1tkZXZpY2VdLnBsYXRmb3JtXG5cdH1cblxuXHRzd2l0Y2ggaW5uZXJXaWR0aFxuXHRcdCMgaVBob25lIDVjLzVzL1NFXG5cdFx0d2hlbiA2NDBcblx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBob25lLTVzLXNpbHZlclwiXG5cdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGhvbmUgNnNcblx0XHR3aGVuIDc1MFxuXHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNnMtc2lsdmVyXCJcblx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0XHQjIGlQaG9uZSA2cytcblx0XHR3aGVuIDEyNDJcblx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDIyMDhcblx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIlxuXHRcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGFkIGluIHBvcnRyYWl0XG5cdFx0d2hlbiAxNTM2XG5cdFx0XHRpZiBpbm5lckhlaWdodCA9PSAyMDQ4XG5cdFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC1haXItMi1zaWx2ZXJcIlxuXHRcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGFkXG5cdFx0d2hlbiAyMDQ4XG5cblx0XHRcdCMgaVBhZCBQcm8gaW4gcG9ydHJhaXRcblx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDI3MzJcblx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGFkLXByby1zaWx2ZXJcIlxuXG5cdFx0XHQjIGlQYWQgaW4gbGFuZHNjY2FwZVxuXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMTUzNlxuXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCJcblx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0XHQjIGlQYWQgUHJvXG5cdFx0d2hlbiAyNzMyXG5cdFx0XHRpZiBpbm5lckhlaWdodCA9PSAyMDQ4XG5cdFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCJcblx0XHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRleHBvcnRzLnNjYWxlID0gbS5saWIuZnJhbWVzW2RldmljZV0uc2NhbGVcblxuXHRpZiBkZXZpY2UgPT0gXCJmdWxsc2NyZWVuXCJcblx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRlbHNlXG5cdFx0ZXhwb3J0cy53aWR0aCA9IG0ubGliLmZyYW1lc1tkZXZpY2VdLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSBtLmxpYi5mcmFtZXNbZGV2aWNlXS5oZWlnaHRcblx0XHRpZiB3aW5kb3cuaW5uZXJXaWR0aCA9PSAxMjQyIHx8IHdpbmRvdy5pbm5lcldpZHRoID09IDIyMDhcblx0XHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdGV4cG9ydHMuc2NhbGUgPSAzXG5cdGV4cG9ydHMubW9iaWxlID0gbS5saWIuZnJhbWVzW2RldmljZV0ubW9iaWxlXG5cdGV4cG9ydHMucGxhdGZvcm0gPSBtLmxpYi5mcmFtZXNbZGV2aWNlXS5wbGF0Zm9ybVxuXHRleHBvcnRzLm9yaWVudGF0aW9uID0gIEZyYW1lci5EZXZpY2Uub3JpZW50YXRpb25cblxuXHQjIERldmljZSBTdHJpbmcgU2NydWJiZXJcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCJhcHBsZS1cIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItZ29sZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ncmVlblwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ibHVlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJlZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi13aGl0ZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi15ZWxsb3dcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcGlua1wiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1zcGFjZS1ncmV5XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJvc2VcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1c1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1Y1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItbWluaVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1haXJcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItMlwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi00XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXNpbHZlclwiLCBcIlwiKVxuXG5cdGNhcHR1cmVkRGV2aWNlLm5hbWUgPSBkZXZpY2VcblxuXHQjIGV4cG9ydHMuZGV2aWNlIGJlY29tZXMgZWl0aGVyIGlwYWQsIGlwYWQtcHJvLCBpcGhvbmUtNSwgaXBob25lLTZzLCBpcGhvbmUtNnMtcGx1c1xuXHRyZXR1cm4gY2FwdHVyZWREZXZpY2VcblxuXG4jIFNwZWNpYWwgQ2hhcmFjdGVyc1xuZXhwb3J0cy5zcGVjaWFsQ2hhciA9IChsYXllcikgLT5cblx0dGV4dCA9IGxheWVyXG5cdGlmIGxheWVyLnR5cGUgPT0gXCJidXR0b25cIlxuXHRcdHRleHQgPSBsYXllci5sYWJlbFxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1iXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Zm9udFdlaWdodDo2MDB9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItclwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1yIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwicmVkXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItcmJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItcmIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJibHVlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItbGJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItbGIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJsaWdodC1ibHVlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItZ1wiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1nIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwiZ3JlZW5cIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1vXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLW8gXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJvcmFuZ2VcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1wXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXAgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJvcmFuZ2VcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi15XCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXkgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJ5ZWxsb3dcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi0jXCIpICE9IC0xXG5cdFx0Y2hvc2VuQ29sb3IgPSB0ZXh0Lmh0bWwuc2xpY2UoMSwgOClcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnNsaWNlKDksIHRleHQuaHRtbC5sZW5ndGgpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6Y2hvc2VuQ29sb3J9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLSBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH1dKVxuXHRpZiBsYXllci5idXR0b25UeXBlID09IFwidGV4dFwiXG5cdFx0bGF5ZXIud2lkdGggPSB0ZXh0LndpZHRoXG5cdG0ubGF5b3V0LnNldCgpXG5cbmV4cG9ydHMudXBkYXRlID0gKGxheWVyLCBhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRpZiBsYXllci50eXBlID09IFwidGV4dFwiXG5cdFx0Zm9yIGNoYW5nZSBpbiBhcnJheVxuXHRcdFx0a2V5ID0gT2JqZWN0LmtleXMoY2hhbmdlKVswXVxuXHRcdFx0dmFsdWUgPSBjaGFuZ2Vba2V5XVxuXHRcdFx0aWYga2V5ID09IFwidGV4dFwiXG5cdFx0XHRcdGxheWVyLmh0bWwgPSB2YWx1ZVxuXHRcdFx0aWYga2V5ID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW2tleV0gPSB2YWx1ZVxuXHRcdFx0aWYga2V5ID09IFwiY29sb3JcIlxuXHRcdFx0XHRsYXllci5jb2xvciA9IGV4cG9ydHMuY29sb3IodmFsdWUpXG5cblx0XHR0ZXh0RnJhbWUgPSBleHBvcnRzLnRleHRBdXRvU2l6ZShsYXllcilcblx0XHRsYXllci53aWR0aCA9IHRleHRGcmFtZS53aWR0aFxuXHRcdGxheWVyLmhlaWdodCA9IHRleHRGcmFtZS5oZWlnaHRcblxuXG5cdG0ubGF5b3V0LnNldCgpXG5cbiMgRGVjaWRlcyBpZiBpdCBzaG91bGQgYmUgd2hpdGUvYmxhY2sgdGV4dFxuZXhwb3J0cy5hdXRvQ29sb3IgPSAoY29sb3JPYmplY3QpIC0+XG5cdHJnYiA9IGNvbG9yT2JqZWN0LnRvUmdiU3RyaW5nKClcblx0cmdiID0gcmdiLnN1YnN0cmluZyg0LCByZ2IubGVuZ3RoLTEpXG5cdHJnYiA9IHJnYi5yZXBsYWNlKC8gL2csICcnKVxuXHRyZ2IgPSByZ2IucmVwbGFjZSgvIC9nLCAnJylcblx0cmdiID0gcmdiLnNwbGl0KCcsJylcblx0cmVkID0gcmdiWzBdXG5cdGdyZWVuID0gcmdiWzFdXG5cdGJsdWUgPSByZ2JbMl1cblx0Y29sb3IgPSBcIlwiXG5cdGlmIChyZWQqMC4yOTkgKyBncmVlbiowLjU4NyArIGJsdWUqMC4xMTQpID4gMTg2XG5cdFx0Y29sb3IgPSBcIiMwMDBcIlxuXHRlbHNlXG5cdFx0Y29sb3IgPSBcIiNGRkZcIlxuXHRyZXR1cm4gY29sb3JcblxuZXhwb3J0cy5zYW1lUGFyZW50ID0gKGxheWVyMSwgbGF5ZXIyKSAtPlxuXHRwYXJlbnRPbmUgPSBsYXllcjEuc3VwZXJMYXllclxuXHRwYXJlbnRUd28gPSBsYXllcjIuc3VwZXJMYXllclxuXHRpZiBwYXJlbnRPbmUgPT0gcGFyZW50VHdvXG5cdFx0cmV0dXJuIHRydWVcblx0ZWxzZVxuXHRcdHJldHVybiBmYWxzZVxuXG5cbmV4cG9ydHMudGltZURlbGVnYXRlID0gKGxheWVyLCBjbG9ja1R5cGUpIC0+XG5cdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0VXRpbHMuZGVsYXkgNjAgLSBAdGltZS5zZWNzLCAtPlxuXHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcblx0XHRVdGlscy5pbnRlcnZhbCA2MCwgLT5cblx0XHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRcdGV4cG9ydHMudXBkYXRlKGxheWVyLCBbdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIGNsb2NrVHlwZSldKVxuXG5leHBvcnRzLnRpbWVGb3JtYXR0ZXIgPSAodGltZU9iaiwgY2xvY2tUeXBlKSAtPlxuXHRpZiBjbG9ja1R5cGUgPT0gZmFsc2Vcblx0XHRpZiB0aW1lT2JqLmhvdXJzID4gMTJcblx0XHRcdHRpbWVPYmouaG91cnMgPSB0aW1lT2JqLmhvdXJzIC0gMTJcblx0XHRpZiB0aW1lT2JqLmhvdXJzID09IDAgdGhlbiB0aW1lT2JqLmhvdXJzID0gMTJcblx0aWYgdGltZU9iai5taW5zIDwgMTBcblx0XHR0aW1lT2JqLm1pbnMgPSBcIjBcIiArIHRpbWVPYmoubWluc1xuXHRyZXR1cm4gdGltZU9iai5ob3VycyArIFwiOlwiICsgdGltZU9iai5taW5zXG5cbmV4cG9ydHMuc2V0dXBDb21wb25lbnQgPSAoYXJyYXksIGRlZmF1bHRzKSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdG9iaiA9IHt9XG5cdGZvciBpIGluIGRlZmF1bHRzLnByb3BzXG5cdFx0aWYgYXJyYXlbaV0gIT0gdW5kZWZpbmVkXG5cdFx0XHRvYmpbaV0gPSBhcnJheVtpXVxuXHRcdGVsc2Vcblx0XHRcdG9ialtpXSA9IGRlZmF1bHRzW2ldXG5cdHJldHVybiBvYmpcblxuXG5leHBvcnRzLmVtb2ppRm9ybWF0dGVyID0gKHN0cmluZykgLT5cblx0XHR1bmljb2RlRm9ybWF0ID0gXCJcIlxuXHRcdGlmIHN0cmluZ1swXSA9PSBcIkVcIiB8fCBzdHJpbmdbMF0gPT0gXCIzXCIgfHwgc3RyaW5nWzBdID09IFwiMlwiIHx8IHN0cmluZ1swXSA9PSBcIkNcIlxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0ZWxzZVxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0dW5pY29kZUZvcm1hdCA9IFwiJUYwJTlGXCJcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQodW5pY29kZUZvcm1hdClcblx0XHRyZXR1cm4gZGVjb2RlZFxuXG5leHBvcnRzLmJ1aWxkRW1vamlzT2JqZWN0ID0gKCkgLT5cblx0ZW1vamlzID0gW11cblx0Zm9yIGNvZGUsIGluZGV4IGluIG0uYXNzZXRzLmVtb2ppQ29kZXNcblx0XHRlbW9qaSA9IGV4cG9ydHMuZW1vamlGb3JtYXR0ZXIoY29kZSlcblx0XHRlbW9qaXMucHVzaCBlbW9qaVxuIiwiI21hdGVyaWFsS2l0IE1vZHVsZVxuI0J5IEtldnluIEFybm90dFxuXG4jIEltcG9ydCBmcmFtZXdvcmtcbmV4cG9ydHMubGF5b3V0ID0gbGF5b3V0ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWxheW91dCdcbmV4cG9ydHMubGliID0gbGlicmFyeSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1saWJyYXJ5J1xuZXhwb3J0cy51dGlscyA9IHV0aWxzID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LXV0aWxzJ1xuXG4jIFNldHVwIHJlc291cmNlc1xuZXhwb3J0cy5kZXZpY2UgPSB1dGlscy5nZXREZXZpY2UoKVxuZXhwb3J0cy5hc3NldHMgPSBsaWJyYXJ5LmFzc2V0c1xuXG4jSW1wb3J0IENvbXBvbmVudHNcbmFsZXJ0ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWFsZXJ0J1xuYmFubmVyID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWJhbm5lcidcbmJ1dHRvbiA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1idXR0b24nXG5maWVsZCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1maWVsZCdcbmtleWJvYXJkID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWtleWJvYXJkJ1xubmF2ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LW5hdi1iYXInXG5zaGVldCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1zaGVldCdcbnN0YXR1cyA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1zdGF0dXMtYmFyJ1xudGFiID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LXRhYi1iYXInXG50ZXh0ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LXRleHQnXG5cbiMjU2V0dXAgQ29tcG9uZW50c1xuZXhwb3J0cy5BbGVydCA9IGFsZXJ0LmNyZWF0ZVxuZXhwb3J0cy5CYW5uZXIgPSBiYW5uZXIuY3JlYXRlXG5leHBvcnRzLkJ1dHRvbiA9IGJ1dHRvbi5jcmVhdGVcbmV4cG9ydHMuRmllbGQgPSBmaWVsZC5jcmVhdGVcbmV4cG9ydHMuS2V5Ym9hcmQgPSBrZXlib2FyZC5jcmVhdGVcbmV4cG9ydHMuTmF2QmFyID0gbmF2LmNyZWF0ZVxuZXhwb3J0cy5TaGVldCA9IHNoZWV0LmNyZWF0ZVxuZXhwb3J0cy5TdGF0dXNCYXIgPSBzdGF0dXMuY3JlYXRlXG5leHBvcnRzLlRhYiA9IHRhYi50YWJcbmV4cG9ydHMuVGFiQmFyID0gdGFiLmJhclxuZXhwb3J0cy5UZXh0ID0gdGV4dC5jcmVhdGVcbiJdfQ==
