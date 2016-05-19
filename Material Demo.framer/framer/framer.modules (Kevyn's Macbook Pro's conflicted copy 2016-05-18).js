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
  var act, actLabel, actLabel2, action, action2, actionDivider, actions, alert, i, index, j, len, len1, message, modal, overlay, ref, setup, title, vertDivider;
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
  tabs: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var bar, barArea, i, layer, len, ref, setLeading, setup, svg, title;
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
  if (setup.tabs) {
    barArea.constraints.bottom = 48;
  }
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(bar);
  }
  m.layout.set([bar, barArea]);
  bar.type = setup.type;
  ref = Framer.CurrentContext.layers;
  for (i = 0, len = ref.length; i < len; i++) {
    layer = ref[i];
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
  m.layout.set(bar.right);
  if (typeof setup.leftAction === "string" && typeof setup.leftAction !== "boolean") {
    setLeading = 8;
    if (setup.leftAction.indexOf("<") !== -1) {
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
      setup.leftAction = setup.leftAction.replace("<", "");
      setLeading = [bar.chevron, 4];
      m.layout.set(bar.chevron);
    }
    bar.left = new m.Button({
      name: "left",
      superLayer: barArea,
      text: setup.leftAction,
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
  if (typeof setup.leftAction === "object") {
    bar.left = setup.leftAction;
    bar.left.superLayer = barArea;
    bar.left.constraints = {
      leading: 8,
      bottom: 12
    };
  }
  m.layout.set(bar.left);
  bar.title = title;
  return bar;
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
      button.borderRadius = m.px(28);
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
        width: label.width + m.px(32),
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
  var iconLayer, setup;
  setup = m.utils.setupComponent(array, exports.defaults);
  iconLayer = new Layer({
    html: "<span style='-webkit-transform: scale(" + setup.scale + "); position: absolute;'><i class='material-icons md-48'>" + setup.name + "</i>",
    color: setup.color,
    height: setup.scale * 21,
    width: setup.scale * 20,
    backgroundColor: "transparent"
  });
  iconLayer.style = {
    "padding-top": iconLayer.height / 2 - m.px(1) + "px",
    "padding-left": iconLayer.width / 2 - m.px(3) + "px"
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
      height: 1280,
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
      superLayer: setup.layer,
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
      return inkyEffect(event);
    });
  }
  if (Utils.isChrome() === false && Utils.isTouch()) {
    setup.layer.on(Events.Tap, function(event) {
      return inkyEffect(event, this);
    });
  }
  if (Utils.isDesktop()) {
    return setup.layer.on(Events.TouchEnd, function(event) {
      return inkyEffect(event);
    });
  }
};


},{"material-kit":"material-kit"}],"material-kit":[function(require,module,exports){
var alert, appbar, banner, button, field, icon, keyboard, layout, library, nav, sheet, status, tab, text, utils;

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

sheet = require('material-kit-sheet');

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

exports.Sheet = sheet.create;

exports.StatusBar = status.create;

exports.Tab = tab.tab;

exports.TabBar = tab.bar;

exports.Text = text.create;


},{"material-kit-alert":"material-kit-alert","material-kit-app-bar":"material-kit-app-bar","material-kit-banner":"material-kit-banner","material-kit-button":"material-kit-button","material-kit-field":"material-kit-field","material-kit-icon":"material-kit-icon","material-kit-keyboard":"material-kit-keyboard","material-kit-layout":"material-kit-layout","material-kit-library":"material-kit-library","material-kit-nav-bar":"material-kit-nav-bar","material-kit-sheet":"material-kit-sheet","material-kit-status-bar":"material-kit-status-bar","material-kit-tab-bar":"material-kit-tab-bar","material-kit-text":"material-kit-text","material-kit-utils":"material-kit-utils"}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtYWxlcnQuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWFwcC1iYXIuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWJhbm5lci5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtYnV0dG9uLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bmEvRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC1maWVsZC5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtaWNvbi5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQta2V5Ym9hcmQuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LWxheW91dC5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtbGlicmFyeS5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtbmF2LWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvS2l0cyBmb3IgRnJhbWVyL2ZyYW1lci1tYXRlcmlhbC1raXQvTWF0ZXJpYWwgRGVtby5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbC1raXQtc2hlZXQuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXN0YXR1cy1iYXIuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXRhYi1iYXIuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXRleHQuY29mZmVlIiwiL1VzZXJzL2tldnluYS9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL0tpdHMgZm9yIEZyYW1lci9mcmFtZXItbWF0ZXJpYWwta2l0L01hdGVyaWFsIERlbW8uZnJhbWVyL21vZHVsZXMvbWF0ZXJpYWwta2l0LXV0aWxzLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bmEvRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9LaXRzIGZvciBGcmFtZXIvZnJhbWVyLW1hdGVyaWFsLWtpdC9NYXRlcmlhbCBEZW1vLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsLWtpdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBOztBQUFBLENBQUEsR0FBSSxPQUFBLENBQVEsY0FBUjs7QUFFSixPQUFPLENBQUMsUUFBUixHQUFtQjtFQUNsQixLQUFBLEVBQU8sT0FEVztFQUVsQixPQUFBLEVBQVEsU0FGVTtFQUdsQixPQUFBLEVBQVEsQ0FBQyxJQUFELENBSFU7RUFJbEIsTUFBQSxFQUFPLFFBSlc7RUFLbEIsZUFBQSxFQUFpQixpQkFMQzs7O0FBUW5CLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBakIsR0FBeUIsTUFBTSxDQUFDLElBQVAsQ0FBWSxPQUFPLENBQUMsUUFBcEI7O0FBRXpCLE9BQU8sQ0FB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T0FBQSxDQUFRLG1CQUFSOztBQUdQLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLEtBQUssQ0FBQzs7QUFDdEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsTUFBTSxDQUFDOztBQUN4QixPQUFPLENBQUMsTUFBUixHQUFpQixNQUFNLENBQUM7O0FBQ3hCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE1BQU0sQ0FBQzs7QUFDeEIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsS0FBSyxDQUFDOztBQUN0QixPQUFPLENBQUMsSUFBUixHQUFlLElBQUksQ0FBQzs7QUFDcEIsT0FBTyxDQUFDLFFBQVIsR0FBbUIsUUFBUSxDQUFDOztBQUM1QixPQUFPLENBQUMsTUFBUixHQUFpQixHQUFHLENBQUM7O0FBQ3JCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLEtBQUssQ0FBQzs7QUFDdEIsT0FBTyxDQUFDLFNBQVIsR0FBb0IsTUFBTSxDQUFDOztBQUMzQixPQUFPLENBQUMsR0FBUixHQUFjLEdBQUcsQ0FBQzs7QUFDbEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsR0FBRyxDQUFDOztBQUNyQixPQUFPLENBQUMsSUFBUixHQUFlLElBQUksQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIEFsZXJ0XG5tID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHR0aXRsZTogXCJUaXRsZVwiXG5cdG1lc3NhZ2U6XCJNZXNzYWdlXCJcblx0YWN0aW9uczpbXCJPS1wiXVxuXHRhY3Rpb246XCJBY3Rpb25cIlxuXHRzZWNvbmRhcnlBY3Rpb246IFwic2Vjb25kYXJ5QWN0aW9uXCJcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cblx0YWxlcnQgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImFsZXJ0XCJcblx0YWxlcnQuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cblx0b3ZlcmxheSA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjNUU1RTVFXCIsIHN1cGVyTGF5ZXI6YWxlcnQsIG5hbWU6XCJvdmVybGF5XCIsIG9wYWNpdHk6LjZcblx0b3ZlcmxheS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblxuXHRtb2RhbCA9IG5ldyBMYXllclxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRzdXBlckxheWVyOmFsZXJ0XG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMilcblx0XHRuYW1lOlwibW9kYWxcIlxuXHRcdHNoYWRvd0NvbG9yOlwicmdiYSgwLDAsMCwuMilcIlxuXHRcdHNoYWRvd1k6MjRcblx0XHRzaGFkb3dCbHVyOjI0XG5cdG1vZGFsLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0d2lkdGg6MjgwXG5cdFx0aGVpZ2h0OjQwMFxuXG5cdHRpdGxlID0gbmV3IG0uVGV4dFxuXHRcdHN1cGVyTGF5ZXI6bW9kYWxcblx0XHR0ZXh0OnNldHVwLnRpdGxlXG5cdFx0Zm9udFdlaWdodDpcInNlbWlib2xkXCJcblx0XHRmb250U2l6ZToyMFxuXHRcdG5hbWU6XCJ0aXRsZVwiXG5cdFx0bGluZUhlaWdodDoyMFxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOjIwXG5cdFx0XHR3aWR0aDoyMjBcblx0XHRcdGxlYWRpbmc6MjRcblxuXHRtZXNzYWdlID0gbmV3IG0uVGV4dFxuXHRcdHN1cGVyTGF5ZXI6bW9kYWxcblx0XHR0ZXh0OnNldHVwLm1lc3NhZ2Vcblx0XHRmb250U2l6ZToxM1xuXHRcdG5hbWU6XCJtZXNzYWdlXCJcblx0XHRsaW5lSGVpZ2h0OjE2XG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHR0b3A6IFt0aXRsZSwgMTBdXG5cdFx0XHRsZWFkaW5nOjI0XG5cdFx0XHR3aWR0aDogMjIwXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0I1RpdGxlICsgTWVzc2FnZSArIDEgc2V0IG9mIGFjdGlvbnNcblx0bW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSAyMCArIG0udXRpbHMucHQodGl0bGUuaGVpZ2h0KSArIDEwICsgbS51dGlscy5wdChtZXNzYWdlLmhlaWdodCkgKyAyNCArIDQ0XG5cblx0YWN0aW9ucyA9IFtdXG5cdHN3aXRjaCBzZXR1cC5hY3Rpb25zLmxlbmd0aFxuXHRcdHdoZW4gMVxuXHRcdFx0YWN0TGFiZWwgPSBtLnV0aWxzLmNhcGl0YWxpemUoc2V0dXAuYWN0aW9uc1swXSlcblx0XHRcdGFjdGlvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLmFjdGlvbnNbMF0sIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDEwKVxuXHRcdFx0YWN0aW9uLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgbS5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgY29sb3I6bS51dGlscy5jb2xvcihcImJsdWVcIiksIHN1cGVyTGF5ZXI6YWN0aW9uLCB0ZXh0OmFjdExhYmVsLCBuYW1lOlwibGFiZWxcIlxuXHRcdFx0YWN0aW9uLmxhYmVsLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0Ym90dG9tOjE2XG5cdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uXG5cdFx0d2hlbiAyXG5cdFx0XHRhY3RMYWJlbCA9IG0udXRpbHMuY2FwaXRhbGl6ZShzZXR1cC5hY3Rpb25zWzBdKVxuXHRcdFx0YWN0aW9uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIG5hbWU6c2V0dXAuYWN0aW9uc1swXSwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoMTApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRhY3Rpb24uY29uc3RyYWludHMgPVxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6bS51dGlscy5wdChtb2RhbC53aWR0aC8yKVxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdGFjdGlvbi5sYWJlbCA9IG5ldyBtLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCBjb2xvcjptLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKSwgc3VwZXJMYXllcjphY3Rpb24sIHRleHQ6YWN0TGFiZWwsIG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRhY3Rpb24ubGFiZWwuY29uc3RyYWludHMgPVxuXHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRib3R0b206MTZcblx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb25cblxuXHRcdFx0dmVydERpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgYmFja2dyb3VuZENvbG9yOlwiI0UyRThFQlwiLCBuYW1lOlwidmVydGljYWwgZGl2aWRlclwiXG5cdFx0XHR2ZXJ0RGl2aWRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHdpZHRoOjFcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0XHRcdGFjdExhYmVsMiA9IG0udXRpbHMuY2FwaXRhbGl6ZShzZXR1cC5hY3Rpb25zWzFdKVxuXHRcdFx0YWN0aW9uMiA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBuYW1lOnNldHVwLmFjdGlvbnNbMV0sIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDEwKSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0YWN0aW9uMi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGxlYWRpbmc6bS51dGlscy5wdChtb2RhbC53aWR0aC8yKVxuXHRcdFx0XHR0cmFpbGluZzowXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdGhlaWdodDo0NFxuXHRcdFx0YWN0aW9uMi5sYWJlbCA9IG5ldyBtLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCBjb2xvcjptLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKSwgc3VwZXJMYXllcjphY3Rpb24yLCB0ZXh0OmFjdExhYmVsMiwgbmFtZTpcImxhYmVsXCJcblx0XHRcdGFjdGlvbjIubGFiZWwuY29uc3RyYWludHMgPVxuXHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRib3R0b206MTZcblx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb24yXG5cdFx0ZWxzZVxuXHRcdFx0Zm9yIGFjdCwgaW5kZXggaW4gc2V0dXAuYWN0aW9uc1xuXHRcdFx0XHRhY3RMYWJlbCA9IG0udXRpbHMuY2FwaXRhbGl6ZShhY3QpXG5cdFx0XHRcdGFjdGlvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBuYW1lOmFjdCwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoMTApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRcdGFjdGlvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRcdGJvdHRvbTowICsgKChzZXR1cC5hY3Rpb25zLmxlbmd0aCAtIGluZGV4IC0gMSkgKiA0NClcblx0XHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdFx0YWN0aW9uRGl2aWRlciA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCIsIG5hbWU6XCJob3Jpem9udGFsIGRpdmlkZXJcIlxuXHRcdFx0XHRhY3Rpb25EaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0XHR0cmFpbGluZzowXG5cdFx0XHRcdFx0aGVpZ2h0OjFcblx0XHRcdFx0XHRib3R0b206MCArICgoc2V0dXAuYWN0aW9ucy5sZW5ndGggLSBpbmRleCkgKiA0NClcblx0XHRcdFx0YWN0aW9uLmxhYmVsID0gbmV3IG0uVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIGNvbG9yOm0udXRpbHMuY29sb3IoXCJibHVlXCIpLCBzdXBlckxheWVyOmFjdGlvbiwgdGV4dDphY3RMYWJlbCwgbmFtZTpcImxhYmVsXCJcblx0XHRcdFx0YWN0aW9uLmxhYmVsLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdGJvdHRvbToxNFxuXHRcdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uXG5cdFx0XHRcdG1vZGFsLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdID0gbW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gKyA0MiAtIDEyXG5cblx0YWxlcnQuYWN0aW9ucyA9IHt9XG5cdGZvciBhY3QsaW5kZXggaW4gYWN0aW9uc1xuXG5cdFx0I0hhbmRsZSBzcGVjaWFsIGNoYXJhY3RlcnNcblx0XHRhY3QudHlwZSA9IFwiYnV0dG9uXCJcblx0XHRtLnV0aWxzLnNwZWNpYWxDaGFyKGFjdClcblxuXHRcdGlmIHNldHVwLmFjdGlvbnNbaW5kZXhdLmluZGV4T2YoXCItclwiKSA9PSAwXG5cdFx0XHRhY3Qub3JpZ0NvbG9yID0gbS51dGlscy5jb2xvcihcInJlZFwiKVxuXHRcdGVsc2Vcblx0XHRcdGFjdC5vcmlnQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKVxuXG5cdFx0I0FkZCBUb3VjaCBFdmVudHNcblx0XHRhY3Qub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRALmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjphY3QuYmFja2dyb3VuZENvbG9yLmRhcmtlbig1KSlcblx0XHRcdFx0dGltZTouMjVcblx0XHRcdEAubGFiZWwuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpALm9yaWdDb2xvci5saWdodGVuKDEwKSlcblx0XHRcdFx0dGltZTouMjVcblxuXHRcdGFjdC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRALmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIilcblx0XHRcdFx0dGltZTouMjVcblx0XHRcdEAubGFiZWwuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpALm9yaWdDb2xvcilcblx0XHRcdFx0dGltZTouMjVcblxuXHRcdCMgRXhwb3J0IGFjdGlvbnNcblx0XHRhbGVydC5hY3Rpb25zW2FjdC5uYW1lXSA9IGFjdFxuXG5cblx0bS5sYXlvdXQuc2V0KClcblxuXHQjIEV4cG9ydCBhbGVydFxuXHRhbGVydC5vdmVybGF5ID0gb3ZlcmxheVxuXHRhbGVydC5tb2RhbCA9IG1vZGFsXG5cdGFsZXJ0LnRpdGxlID0gdGl0bGVcblx0YWxlcnQubWVzc2FnZSA9IG1lc3NhZ2VcblxuXHRyZXR1cm4gYWxlcnRcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRpdGxlOlwiVGl0bGVcIlxuXHRsZWZ0QWN0aW9uOnVuZGVmaW5lZFxuXHRyaWdodDpcIkVkaXRcIlxuXHRibHVyOnRydWVcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0dHlwZTpcIm5hdkJhclwiXG5cdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0dGFiczp1bmRlZmluZWRcblx0dGl0bGVDb2xvcjpcImJsYWNrXCJcblx0YWN0aW9uQ29sb3I6XCJibGFja1wiXG5cdHRhYnM6dW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRiYXIgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOlwiQXBwIEJhclwiXG5cdFx0YmFja2dyb3VuZENvbG9yOnNldHVwLmJhY2tncm91bmRDb2xvclxuXHRcdHNoYWRvd0NvbG9yOiBcInJnYmEoMCwgMCwgMCwgLjEyKVwiXG5cdFx0c2hhZG93Qmx1cjogbS5weCg0KVxuXG5cdGJhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjgwXG5cblx0aWYgc2V0dXAudGFic1xuXHRcdGJhci5jb25zdHJhaW50cy5oZWlnaHQgPSAxMjhcblxuXHRiYXJBcmVhID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGJhckFyZWEuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6NTZcblx0XHRib3R0b206MFxuXG5cdGlmIHNldHVwLnRhYnNcblx0XHRiYXJBcmVhLmNvbnN0cmFpbnRzLmJvdHRvbSA9IDQ4XG5cblx0aWYgc2V0dXAuc3VwZXJMYXllclxuXHRcdHNldHVwLnN1cGVyTGF5ZXIuYWRkU3ViTGF5ZXIoYmFyKVxuXG5cdG0ubGF5b3V0LnNldChbYmFyLCBiYXJBcmVhXSlcblxuXHRiYXIudHlwZSA9IHNldHVwLnR5cGVcblxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJzdGF0dXNCYXJcIlxuXHRcdFx0QHN0YXR1c0JhciA9IGxheWVyXG5cdFx0XHRiYXIucGxhY2VCZWhpbmQoQHN0YXR1c0JhcilcblxuXHRpZiBzZXR1cC50aXRsZUNvbG9yID09IFwiYmxhY2tcIlxuXHRcdHNldHVwLnRpdGxlQ29sb3IgPSBtLnV0aWxzLmF1dG9Db2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpLnRvSGV4U3RyaW5nKClcblxuXHRpZiBzZXR1cC5hY3Rpb25Db2xvciA9PSBcImJsYWNrXCJcblx0XHRzZXR1cC5hY3Rpb25Db2xvciA9IG0udXRpbHMuYXV0b0NvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcikudG9IZXhTdHJpbmcoKVxuXG5cdGlmIHR5cGVvZiBzZXR1cC50aXRsZSA9PSBcInN0cmluZ1wiXG5cdFx0dGl0bGUgPSBuZXcgbS5UZXh0XG5cdFx0XHRjb2xvcjpzZXR1cC50aXRsZUNvbG9yXG5cdFx0XHRmb250V2VpZ2h0Olwic2VtaWJvbGRcIlxuXHRcdFx0c3VwZXJMYXllcjpiYXJBcmVhXG5cdFx0XHR0ZXh0OnNldHVwLnRpdGxlXG5cdFx0XHRmb250U2l6ZToyMFxuXG5cblx0IyBpZiB0eXBlb2Ygc2V0dXAudGl0bGUgPT0gXCJvYmplY3RcIlxuXHQjIFx0dGl0bGUgPSBuZXcgbS5UZXh0IHN0eWxlOlwibmF2QmFyVGl0bGVcIiwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC50aXRsZS5sYWJlbC5odG1sXG5cdCMgXHRiYXIuc3VwZXJMYXllciA9IHNldHVwLnRpdGxlLnZpZXdcblxuXHRtLnV0aWxzLnNwZWNpYWxDaGFyKHRpdGxlKVxuXG5cdHRpdGxlLmNvbnN0cmFpbnRzID1cblx0XHRib3R0b206MTJcblx0XHRsZWFkaW5nOjE2XG5cblx0aWYgc2V0dXAubGVmdEFjdGlvblxuXHRcdHRpdGxlLmNvbnN0cmFpbnRzLmxlYWRpbmcgPSA3M1xuXG5cblx0bS5sYXlvdXQuc2V0KGJhci5yaWdodClcblxuXHQjIEhhbmRsZSBMZWZ0XG5cdGlmIHR5cGVvZiBzZXR1cC5sZWZ0QWN0aW9uID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNldHVwLmxlZnRBY3Rpb24gIT0gXCJib29sZWFuXCJcblx0XHRzZXRMZWFkaW5nID0gOFxuXHRcdGlmIHNldHVwLmxlZnRBY3Rpb24uaW5kZXhPZihcIjxcIikgIT0gLTFcblx0XHRcdHN2ZyA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmNoZXZyb24pXG5cdFx0XHRiYXIuY2hldnJvbiA9IG5ldyBMYXllclxuXHRcdFx0XHRuYW1lOlwiY2hldnJvblwiXG5cdFx0XHRcdHdpZHRoOnN2Zy53aWR0aFxuXHRcdFx0XHRoZWlnaHQ6c3ZnLmhlaWdodFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRcdHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRcdFx0YmFyLmNoZXZyb24uaHRtbCA9IHN2Zy5zdmdcblx0XHRcdGJhci5jaGV2cm9uLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRib3R0b206OVxuXHRcdFx0XHRcdGxlYWRpbmc6OFxuXHRcdFx0c2V0dXAubGVmdEFjdGlvbiA9IHNldHVwLmxlZnRBY3Rpb24ucmVwbGFjZShcIjxcIiwgXCJcIilcblx0XHRcdHNldExlYWRpbmcgPSBbYmFyLmNoZXZyb24sIDRdXG5cdFx0XHRtLmxheW91dC5zZXQoYmFyLmNoZXZyb24pXG5cblx0XHRiYXIubGVmdCA9IG5ldyBtLkJ1dHRvblxuXHRcdFx0bmFtZTpcImxlZnRcIlxuXHRcdFx0c3VwZXJMYXllcjpiYXJBcmVhXG5cdFx0XHR0ZXh0OnNldHVwLmxlZnRBY3Rpb25cblx0XHRcdGZvbnRXZWlnaHQ6NTAwXG5cdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0Ym90dG9tOjEyXG5cdFx0XHRcdGxlYWRpbmc6c2V0TGVhZGluZ1xuXG5cdFx0YmFyLmxlZnQub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRpZiBiYXIuY2hldnJvblxuXHRcdFx0XHRiYXIuY2hldnJvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTouMjUpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdGJhci5sZWZ0Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdGlmIGJhci5jaGV2cm9uXG5cdFx0XHRcdGJhci5jaGV2cm9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjEpXG5cdFx0XHRcdFx0dGltZTouNVxuXG5cdGlmIHR5cGVvZiBzZXR1cC5sZWZ0QWN0aW9uID09IFwib2JqZWN0XCJcblx0XHRiYXIubGVmdCA9IHNldHVwLmxlZnRBY3Rpb25cblx0XHRiYXIubGVmdC5zdXBlckxheWVyID0gYmFyQXJlYVxuXHRcdGJhci5sZWZ0LmNvbnN0cmFpbnRzID0ge1xuXHRcdFx0bGVhZGluZzo4XG5cdFx0XHRib3R0b206MTJcblx0XHR9XG5cblx0bS5sYXlvdXQuc2V0KGJhci5sZWZ0KVxuXG5cdGJhci50aXRsZSA9IHRpdGxlXG5cdHJldHVybiBiYXJcbiIsIiMgQmFubmVyXG5tID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHR0aXRsZTogXCJUaXRsZVwiXG5cdG1lc3NhZ2U6XCJNZXNzYWdlXCJcblx0YWN0aW9uOlwiQWN0aW9uXCJcblx0dGltZTpcIm5vd1wiXG5cdGljb246dW5kZWZpbmVkXG5cdGR1cmF0aW9uOjdcblx0YW5pbWF0ZWQ6ZmFsc2Vcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdGJhbm5lciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmFubmVyXCJcblx0YmFubmVyLmh0bWwgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5iYW5uZXJCR1ttLmRldmljZS5uYW1lXSkuc3ZnXG5cdGJhbm5lci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjY4XG5cblx0IyBEaWZmZXJlbnQgcG9zaXRpb25pbmdzIGZvciBlYWNoIGRldmljZVxuXHRzd2l0Y2ggbS5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGFkXCJcblx0XHRcdEBsZWFkaW5nSWNvbiA9IDIwMFxuXHRcdFx0QHRvcEljb24gPSAxNVxuXHRcdFx0QHRvcFRpdGxlID0gMTFcblx0XHR3aGVuIFwiaXBhZC1wcm9cIlxuXHRcdFx0QGxlYWRpbmdJY29uID0gMTkyXG5cdFx0XHRAdG9wSWNvbiA9IDEyXG5cdFx0XHRAdG9wVGl0bGUgPSA5XG5cdFx0d2hlbiBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRcdEBsZWFkaW5nSWNvbiA9IDE1XG5cdFx0XHRAdG9wSWNvbiA9IDEyXG5cdFx0XHRAdG9wVGl0bGUgPSAxMFxuXHRcdGVsc2Vcblx0XHRcdEBsZWFkaW5nSWNvbiA9IDE1XG5cdFx0XHRAdG9wSWNvbiA9IDhcblx0XHRcdEB0b3BUaXRsZSA9IDZcblxuXHRpZiBzZXR1cC5pY29uID09IHVuZGVmaW5lZFxuXHRcdHNldHVwLmljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpiYW5uZXJcblx0XHRzZXR1cC5pY29uLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwibGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM2N0ZGODEgMCUsICMwMUI0MUYgMTAwJSlcIlxuXHRlbHNlXG5cdFx0YmFubmVyLmFkZFN1YkxheWVyKHNldHVwLmljb24pXG5cblx0c2V0dXAuaWNvbi5ib3JkZXJSYWRpdXMgPSBtLnV0aWxzLnB4KDQuNSlcblx0c2V0dXAuaWNvbi5uYW1lID0gXCJpY29uXCJcblx0c2V0dXAuaWNvbi5jb25zdHJhaW50cyA9XG5cdFx0aGVpZ2h0OjIwXG5cdFx0d2lkdGg6MjBcblx0XHRsZWFkaW5nOkBsZWFkaW5nSWNvblxuXHRcdHRvcDpAdG9wSWNvblxuXG5cdHRpdGxlID0gbmV3IG0uVGV4dCBzdHlsZTpcImJhbm5lclRpdGxlXCIsIHRleHQ6c2V0dXAudGl0bGUsIGNvbG9yOlwid2hpdGVcIiwgZm9udFdlaWdodDpcIm1lZGl1bVwiLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjpiYW5uZXIsIG5hbWU6XCJ0aXRsZVwiXG5cdHRpdGxlLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6QHRvcFRpdGxlXG5cdFx0bGVhZGluZzpbc2V0dXAuaWNvbiwgMTFdXG5cdG1lc3NhZ2UgPSBuZXcgbS5UZXh0IHN0eWxlOlwiYmFubmVyTWVzc2FnZVwiLCB0ZXh0OnNldHVwLm1lc3NhZ2UsIGNvbG9yOlwid2hpdGVcIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwibWVzc2FnZVwiXG5cdG1lc3NhZ2UuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmdFZGdlczp0aXRsZVxuXHRcdHRvcDpbdGl0bGUsIDJdXG5cblx0dGltZSA9IG5ldyBtLlRleHQgc3R5bGU6XCJiYW5uZXJUaW1lXCIsIHRleHQ6c2V0dXAudGltZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZToxMSwgc3VwZXJMYXllcjpiYW5uZXIsIG5hbWU6XCJ0aW1lXCJcblx0dGltZS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzpbdGl0bGUsIDVdXG5cdFx0Ym90dG9tRWRnZXM6IHRpdGxlXG5cblx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIiB8fCBtLmRldmljZS5uYW1lID09IFwiaXBhZC1wcm9cIlxuXHRcdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdFx0Ym90dG9tRWRnZXM6IHRpdGxlXG5cdFx0XHR0cmFpbGluZzogQGxlYWRpbmdJY29uXG5cblx0bS5sYXlvdXQuc2V0KClcblx0bS51dGlscy5iZ0JsdXIoYmFubmVyKVxuXG5cdCMjIEJhbm5lciBEcmFnIHNldHRpbmdzXG5cdGJhbm5lci5kcmFnZ2FibGUgPSB0cnVlXG5cdGJhbm5lci5kcmFnZ2FibGUuaG9yaXpvbnRhbCA9IGZhbHNlXG5cdGJhbm5lci5kcmFnZ2FibGUuY29uc3RyYWludHMgPVxuXHRcdHk6MFxuXG5cdGJhbm5lci5kcmFnZ2FibGUuYm91bmNlT3B0aW9ucyA9XG5cdCAgICBmcmljdGlvbjogMjVcblx0ICAgIHRlbnNpb246IDI1MFxuXG5cdGJhbm5lci5vbiBFdmVudHMuRHJhZ0VuZCwgLT5cblx0XHRpZiBiYW5uZXIubWF4WSA8IG0udXRpbHMucHgoNjgpXG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjE1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0VXRpbHMuZGVsYXkgLjI1LCAtPlxuXHRcdFx0XHRiYW5uZXIuZGVzdHJveSgpXG5cblx0IyBCdWZmZXIgdGhhdCBzaXRzIGFib3ZlIHRoZSBiYW5uZXJcblx0YmFubmVyQnVmZmVyID0gbmV3IExheWVyIG1heFk6MCwgbmFtZTpcImJ1ZmZlclwiLCBiYWNrZ3JvdW5kQ29sb3I6XCIjMUIxQjFDXCIsIG9wYWNpdHk6LjksIHN1cGVyTGF5ZXI6YmFubmVyLCB3aWR0aDptLmRldmljZS53aWR0aCwgbWF4WTpiYW5uZXIueSwgaGVpZ2h0Om0uZGV2aWNlLmhlaWdodFxuXHRtLnV0aWxzLmJnQmx1cihiYW5uZXJCdWZmZXIpXG5cblx0IyBBbmltYXRlLWluXG5cdGlmIHNldHVwLmFuaW1hdGVkID09IHRydWVcblx0XHRiYW5uZXIueSA9IDAgLSBiYW5uZXIuaGVpZ2h0XG5cdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KHk6MClcblx0XHRcdHRpbWU6LjI1XG5cdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblxuXHQjIEFuaW1hdGUtb3V0XG5cdGlmIHNldHVwLmR1cmF0aW9uXG5cdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24sIC0+XG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uICsgLjI1LCAtPlxuXHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cdCMgRXhwb3J0IEJhbm5lclxuXHRiYW5uZXIuaWNvbiA9IHNldHVwLmljb25cblx0YmFubmVyLnRpdGxlID0gdGl0bGVcblx0YmFubmVyLm1lc3NhZ2UgPSBtZXNzYWdlXG5cdHJldHVybiBiYW5uZXJcbiIsIm0gPSByZXF1aXJlICdtYXRlcmlhbC1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdFx0dGV4dDpcInRleHRcIlxuXHRcdHR5cGU6XCJmbGF0XCJcblx0XHRzdHlsZTpcImxpZ2h0XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0Y29sb3I6XCJ0ZWFsMzAwXCJcblx0XHRmb250U2l6ZToxN1xuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRuYW1lOlwiYnV0dG9uXCJcblx0XHRibHVyOnRydWVcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdGNvbnN0cmFpbnRzOnVuZGVmaW5lZFxuXHRcdGljb246XCJzdGFyXCJcblx0XHRjbGlwOnRydWVcblx0XHRpbms6dW5kZWZpbmVkXG5cdH1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cblx0YnV0dG9uID0gbmV3IExheWVyXG5cdFx0bmFtZTpzZXR1cC5uYW1lXG5cdFx0Y2xpcDpzZXR1cC5jbGlwXG5cblx0aWYgc2V0dXAuc3VwZXJMYXllclxuXHRcdHNldHVwLnN1cGVyTGF5ZXIuYWRkU3ViTGF5ZXIoYnV0dG9uKVxuXG5cdHN3aXRjaCBzZXR1cC50eXBlXG5cdFx0d2hlbiBcImZsb2F0aW5nXCJcblx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdCB3aWR0aDo1NlxuXHRcdFx0XHQgaGVpZ2h0OjU2XG5cdFx0XHRcdCBib3R0b206NjRcblx0XHRcdFx0IHRyYWlsaW5nOjE3XG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gbS5weCgyOClcblx0XHRcdGJ1dHRvbi5zaGFkb3dDb2xvciA9IFwicmdiYSgwLDAsMCwuMTIpXCJcblx0XHRcdGJ1dHRvbi5zaGFkb3dZID0gbS5weCgyKVxuXHRcdFx0YnV0dG9uLnNoYWRvd0JsdXIgPSBtLnB4KDYpXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gbS5jb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRpZiB0eXBlb2Ygc2V0dXAuaWNvbiA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdGljb24gPSBtLkljb25cblx0XHRcdFx0XHRuYW1lOnNldHVwLmljb25cblx0XHRcdFx0XHRjb2xvcjptLmNvbG9yKHNldHVwLmNvbG9yKVxuXHRcdFx0XHRcdHN1cGVyTGF5ZXI6YnV0dG9uXG5cdFx0XHRcdFx0Y29uc3RyYWludHM6e2FsaWduOlwiY2VudGVyXCJ9XG5cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6W2J1dHRvbl1cblx0XHRcdG0ubGF5b3V0LnNldFxuXHRcdFx0XHR0YXJnZXQ6W2ljb25dXG5cdFx0ZWxzZVxuXHRcdFx0bGFiZWwgPSBuZXcgbS5UZXh0XG5cdFx0XHRcdHRleHQ6c2V0dXAudGV4dFxuXHRcdFx0XHRzdXBlckxheWVyOmJ1dHRvblxuXHRcdFx0XHR0ZXh0VHJhbnNmb3JtOlwidXBwZXJjYXNlXCJcblx0XHRcdFx0Y29sb3I6c2V0dXAuY29sb3Jcblx0XHRcdFx0Zm9udFNpemU6MTRcblx0XHRcdFx0bGluZUhlaWdodDoxNFxuXHRcdFx0XHRmb250V2VpZ2h0OjUwMFxuXHRcdFx0bGFiZWwuY29uc3RyYWludHMgPVxuXHRcdFx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0XHRidXR0b24ucHJvcHMgPVxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6bS5jb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdGhlaWdodDptLnB4KDM2KVxuXHRcdFx0XHR3aWR0aDpsYWJlbC53aWR0aCArIG0ucHgoMzIpXG5cdFx0XHRcdGJvcmRlclJhZGl1czptLnB4KDIpXG5cdFx0XHRcdGNsaXA6c2V0dXAuY2xpcFxuXG5cdFx0XHRzd2l0Y2ggc2V0dXAudHlwZVxuXHRcdFx0XHR3aGVuIFwicmFpc2VkXCJcblx0XHRcdFx0XHRidXR0b24ub3JpZ0JHQyA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRidXR0b24uc2hhZG93Q29sb3IgPSBcInJnYmEoMCwwLDAsLjI0KVwiXG5cdFx0XHRcdFx0YnV0dG9uLnNoYWRvd1kgPSBtLnB4KDIpXG5cdFx0XHRcdFx0YnV0dG9uLnNoYWRvd0JsdXIgPSBtLnB4KDIpXG5cdFx0XHRcdFx0cHJlc3NlZEJHQyA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IubGlnaHRlbigxMClcblx0XHRcdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpwcmVzc2VkQkdDXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93WTptLnB4KDgpXG5cdFx0XHRcdFx0XHRcdFx0c2hhZG93Qmx1cjptLnB4KDgpXG5cdFx0XHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBidXR0b24ub3JpZ0JHQ1xuXHRcdFx0XHRcdFx0XHRcdHNoYWRvd1k6bS5weCgyKVxuXHRcdFx0XHRcdFx0XHRcdHNoYWRvd0JsdXI6bS5weCgyKVxuXHRcdFx0XHR3aGVuIFwiZmxhdFwiXG5cdFx0XHRcdFx0YnV0dG9uLm9yaWdCR0MgPSBidXR0b24uYmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0cHJlc3NlZEJHQyA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IuZGFya2VuKDUpXG5cdFx0XHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6cHJlc3NlZEJHQ1xuXHRcdFx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYnV0dG9uLm9yaWdCR0NcblxuXG5cdFx0XHRidXR0b24uY29uc3RyYWludHMgPSBzZXR1cC5jb25zdHJhaW50c1xuXG5cdFx0XHRtLmxheW91dC5zZXRcblx0XHRcdFx0dGFyZ2V0OltidXR0b24sIGxhYmVsXVxuXG5cdGlmIHNldHVwLmlua1xuXHRcdHBhc3NlZEluayA9IHNldHVwLmlua1xuXHRcdHBhc3NlZEluay5sYXllciA9IGJ1dHRvblxuXG5cdFx0bS51dGlscy5pbmt5KHBhc3NlZEluaylcblxuXG5cblxuXHRyZXR1cm4gYnV0dG9uXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID1cblx0ZmllbGQ6XG5cdFx0aXNFZGl0aW5nOmZhbHNlXG5cdFx0Y3Vyc29yOnt9XG5cdFx0Ym9yZGVyUmFkaXVzOjVcblx0XHRib3JkZXJXaWR0aDowXG5cdFx0Ym9yZGVyQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Y29sb3I6XCIjMDkwOTA4XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkZGXCJcblx0XHRyZXR1cm5UZXh0OlwicmV0dXJuXCJcblx0XHRyZXR1cm5Db2xvcjpcImxpZ2h0LWtleVwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0dHlwZTpcImZpZWxkXCJcblx0XHRjb25zdHJhaW50czp1bmRlZmluZWRcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdHdpZHRoOjI1OFxuXHRcdGhlaWdodDozMFxuXHRcdGZvbnRTaXplOjE1XG5cdFx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRcdHBsYWNlaG9sZGVyVGV4dDpcInBsYWNlaG9sZGVyVGV4dFwiXG5cdFx0cGxhY2Vob2xkZXJDb2xvcjpcIiM4MDgwODBcIlxuXHRcdHRleHQ6XCJcIlxuXHRcdHRleHRDb25zdHJhaW50czp7YWxpZ246XCJ2ZXJ0aWNhbFwiLCBsZWFkaW5nOjh9XG5cdFx0aW5wdXQ6dHJ1ZVxuXHRjdXJzb3I6XG5cdFx0Y29sb3I6XCJibHVlXCJcblx0XHRoZWlnaHQ6MjBcblx0XHR3aWR0aDoxXG5cblxuZXhwb3J0cy5kZWZhdWx0cy5maWVsZC5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuZmllbGQpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMuZmllbGQpXG5cdGZpZWxkID0gbmV3IExheWVyIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KHNldHVwLmJvcmRlclJhZGl1cyksIGJhY2tncm91bmRDb2xvcjpzZXR1cC5iYWNrZ3JvdW5kQ29sb3IsIHdpZHRoOm0udXRpbHMucHgoc2V0dXAud2lkdGgpLCBoZWlnaHQ6bS51dGlscy5weChzZXR1cC5oZWlnaHQpXG5cdGlmIHNldHVwLmNvbnN0cmFpbnRzXG5cdFx0ZmllbGQuY29uc3RyYWludHMgPVxuXHRcdFx0c2V0dXAuY29uc3RyYWludHNcblx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0dGV4dCA9IG5ldyBtLlRleHQgc3R5bGU6XCJmaWVsZFRleHRcIiwgc3VwZXJMYXllcjpmaWVsZCwgdGV4dDpzZXR1cC50ZXh0LCBmb250U2l6ZTpzZXR1cC5mb250U2l6ZSwgZm9udFdlaWdodDpzZXR1cC5mb250V2VpZ2h0LCBjb2xvcjpzZXR1cC5jb2xvclxuXHRpZiBzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0XHR0ZXh0LmNvbnN0cmFpbnRzID1cblx0XHRcdHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRmaWVsZC50ZXh0ID0gdGV4dFxuXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXJcblx0XHRzZXR1cC5zdXBlckxheWVyLmFkZFN1YkxheWVyKGZpZWxkKVxuXG5cblxuXG5cdCMjSGFuZGxlIGtleXByZXNzXG5cdHRleHQub24gXCJjaGFuZ2U6aHRtbFwiLCAtPlxuXHRcdGlmIHRleHQuaHRtbCA9PSBcIlwiXG5cdFx0XHRmaWVsZC5jdXJzb3IuY29uc3RyYWludHMgPSB7YWxpZ246XCJ2ZXJ0aWNhbFwiLCBsZWFkaW5nOjh9XG5cdFx0ZWxzZVxuXHRcdFx0ZmllbGQuY3Vyc29yLmNvbnN0cmFpbnRzID0ge2FsaWduOlwidmVydGljYWxcIiwgdHJhaWxpbmdFZGdlczp0ZXh0fVxuXHRcdGlmIGZpZWxkLnBsYWNlaG9sZGVyXG5cdFx0XHRmaWVsZC5wbGFjZWhvbGRlci52aXNpYmxlID0gZmFsc2VcblxuXHRpZiBzZXR1cC50ZXh0ID09IFwiXCIgfHwgc2V0dXAudGV4dCA9PSB1bmRlZmluZWRcblx0XHRwbGFjZWhvbGRlciA9IG5ldyBtLlRleHQgc3R5bGU6XCJmaWVsZFBsYWNlaG9sZGVyXCIsIHN1cGVyTGF5ZXI6ZmllbGQsIHRleHQ6c2V0dXAucGxhY2Vob2xkZXJUZXh0LCBmb250U2l6ZTpzZXR1cC5mb250U2l6ZSwgZm9udFdlaWdodDpzZXR1cC5mb250V2VpZ2h0LCBjb2xvcjpzZXR1cC5wbGFjZWhvbGRlckNvbG9yXG5cdFx0aWYgc2V0dXAudGV4dENvbnN0cmFpbnRzXG5cdFx0XHRwbGFjZWhvbGRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRcdGZpZWxkLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcblxuXHRmaWVsZC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0ZmllbGQuYWN0aXZlID0gdHJ1ZVxuXHRcdHRleHQudmlzaWJsZSA9IHRydWVcblx0XHRjbGlja1pvbmUgPSBuZXcgTGF5ZXIgbmFtZTpcImZpZWxkQWN0aXZlXCIsIG9wYWNpdHk6MFxuXHRcdGlmIHNldHVwLmlucHV0XG5cdFx0XHRrZXlib2FyZCA9IG5ldyBtLktleWJvYXJkIGFuaW1hdGVkOnRydWUsIG91dHB1dDpmaWVsZCwgcmV0dXJuVGV4dDpzZXR1cC5yZXR1cm5UZXh0LCByZXR1cm5Db2xvcjpzZXR1cC5yZXR1cm5Db2xvclxuXHRcdFx0ZmllbGQua2V5Ym9hcmQgPSBrZXlib2FyZFxuXHRcdFx0Y2xpY2tab25lLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0dG9wOjBcblx0XHRcdFx0Ym90dG9tOmtleWJvYXJkLnNwZWNzLmhlaWdodFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdGVsc2Vcblx0XHRcdGNsaWNrWm9uZS5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHRvcDowXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHR0cmFpbGluZzowXG5cblx0XHRjbGlja1pvbmUub24gRXZlbnRzLlRvdWNoRW5kLCAoaGFuZGxlcikgLT5cblx0XHRcdGZpZWxkLmtleWJvYXJkLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooeTptLmRldmljZS5oZWlnaHQpXG5cdFx0XHRcdHRpbWU6LjRcblx0XHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cdFx0XHRVdGlscy5kZWxheSAuNSwgLT5cblx0XHRcdFx0ZmllbGQua2V5Ym9hcmQuZGVzdHJveSgpXG5cdFx0XHRcdGZpZWxkLmFjdGl2ZSA9IGZhbHNlXG5cdFx0XHRcdGNsaWNrWm9uZS5kZXN0cm95KClcblx0XHRmaWVsZC5jbGlja1pvbmUgPSBjbGlja1pvbmVcblxuXHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdGZpZWxkLmtleWJvYXJkLmtleXMuZGlzbWlzcy5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGZpZWxkLmtleWJvYXJkLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOih5Om0uZGV2aWNlLmhlaWdodClcblx0XHRcdFx0XHR0aW1lOi40XG5cdFx0XHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cdFx0XHRcdFV0aWxzLmRlbGF5IC41LCAtPlxuXHRcdFx0XHRcdGZpZWxkLmtleWJvYXJkLmRlc3Ryb3koKVxuXHRcdFx0XHRcdGZpZWxkLmFjdGl2ZSA9IGZhbHNlXG5cdFx0XHRcdFx0Y2xpY2tab25lLmRlc3Ryb3koKVxuXG5cblx0XHQjIyBEZWZhdWx0IEN1cnNvclxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhzZXR1cC5jdXJzb3IpXG5cdFx0aWYga2V5cy5sZW5ndGggPCAxXG5cdFx0XHRzZXR1cC5jdXJzb3IuY29uc3RyYWludHMgPSB7YWxpZ246XCJ2ZXJ0aWNhbFwiLCBsZWFkaW5nOjh9XG5cdFx0XHRzZXR1cC5jdXJzb3Iud2lkdGggPSAyXG5cdFx0XHRzZXR1cC5jdXJzb3IuaGVpZ2h0ID0gMjBcblxuXHRcdGlmIGZpZWxkLmN1cnNvciA9PSB1bmRlZmluZWRcblx0XHRcdGxpc3RlblRvS2V5cyhmaWVsZCwga2V5Ym9hcmQpXG5cdFx0XHRjdXJzb3IgPSBuZXcgTGF5ZXIgd2lkdGg6bS51dGlscy5weChzZXR1cC5jdXJzb3Iud2lkdGgpLCBoZWlnaHQ6bS51dGlscy5weChzZXR1cC5jdXJzb3IuaGVpZ2h0KSwgc3VwZXJMYXllcjpmaWVsZCwgbmFtZTpcImN1cnNvclwiLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImJsdWVcIiksIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDEpXG5cdFx0XHRmaWVsZC5jdXJzb3IgPSBjdXJzb3Jcblx0XHRcdGN1cnNvci5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHNldHVwLmN1cnNvci5jb25zdHJhaW50c1xuXG5cdFx0XHRVdGlscy5pbnRlcnZhbCAuNSwgLT5cblx0XHRcdFx0aWYgZmllbGQuYWN0aXZlID09IHRydWVcblx0XHRcdFx0XHRpZiBmaWVsZC5jdXJzb3Iub3BhY2l0eSA9PSAwXG5cdFx0XHRcdFx0XHRmaWVsZC5jdXJzb3IuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjEpXG5cdFx0XHRcdFx0XHRcdHRpbWU6LjNcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRmaWVsZC5jdXJzb3IuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjApXG5cdFx0XHRcdFx0XHRcdHRpbWU6LjNcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGZpZWxkLmN1cnNvci5vcGFjaXR5ID0gMFxuXHRcdG0ubGF5b3V0LnNldCgpXG5cblx0bS5sYXlvdXQuc2V0KClcblx0cmV0dXJuIGZpZWxkXG5cblxuXG5cbmxpc3RlblRvS2V5cyA9IChmaWVsZCwga2V5Ym9hcmQpIC0+XG5cdGtleXByZXNzID0gKGtleSkgLT5cblx0XHRvcmlnaW5hbENvbG9yID0ga2V5LmJhY2tncm91bmRDb2xvclxuXHRcdHN3aXRjaCBrZXkubmFtZVxuXHRcdFx0d2hlbiBcInNoaWZ0XCJcblx0XHRcdFx0a2V5Lmljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXHRcdFx0XHRrZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHR3aGVuIFwiZGVsZXRlXCJcblx0XHRcdFx0a2V5Lmljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXHRcdFx0XHRrZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRcdGtleS5pY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblx0XHRcdHdoZW4gXCJzcGFjZVwiXG5cdFx0XHRcdGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgIT0gXCJpcGFkXCJcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGJveEtleSA9IGtleS5uYW1lXG5cdFx0XHRcdFx0aWYgaXNTaGlmdFxuXHRcdFx0XHRcdFx0Ym94S2V5ID0gYm94S2V5LnRvVXBwZXJDYXNlKClcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC5ib3guaHRtbCA9IGJveEtleVxuXHRcdFx0XHRcdGtleWJvYXJkLmtleVBvcFVwLm1heFkgPSBrZXkubWF4WVxuXHRcdFx0XHRcdGtleWJvYXJkLmtleVBvcFVwLm1pZFggPSBrZXkubWlkWFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0a2V5LmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdFx0dGltZTouMlxuXG5cdGlzQ29tbWFuZCA9IGZhbHNlXG5cdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0aXNTaGlmdCA9IGZhbHNlXG5cdGNvZGVzID0geyAxMzpcIjxicj5cIiwgMzI6XCImbmJzcDtcIiwgMzM6XCIhXCIsIDM0OlwiXFxcIlwiLCAzNTpcIiNcIiwgMzY6XCIkXCIsIDM3OlwiJVwiLCAzODpcIiZcIiwgMzk6XCJcXCdcIiwgNDA6XCIoXCIsIDQxOlwiKVwiLCA0MjpcIipcIiwgNDM6XCIrXCIsIDQ0OlwiLFwiLCA0NTpcIi1cIiwgNDc6XCIvXCIsIDQ2OlwiLlwiLCA0ODpcIjBcIiwgNDk6XCIxXCIsIDUwOlwiMlwiLCA1MTpcIjNcIiwgNTI6XCI0XCIsIDUzOlwiNVwiLCA1NDpcIjZcIiwgNTU6XCI3XCIsIDU2OlwiOFwiLCA1NzpcIjlcIiwgNTg6XCI6XCIsIDU5OlwiO1wiLCA2MDpcIjxcIiwgNjE6XCI9XCIsIDYyOlwiPlwiLCA2MzpcIj9cIiwgNjQ6XCJAXCIsIDY1OlwiQVwiLCA2NjpcIkJcIiwgNjc6XCJDXCIsIDY4OlwiRFwiLCA2OTpcIkVcIiwgNzA6XCJGXCIsIDcxOlwiR1wiLCA3MjpcIkhcIiwgNzM6XCJJXCIsIDc0OlwiSlwiLCA3NTpcIktcIiwgNzY6XCJMXCIsIDc3OlwiTVwiLCA3ODpcIk5cIiwgNzk6XCJPXCIsIDgwOlwiUFwiLCA4MTpcIlFcIiwgODI6XCJSXCIsIDgzOlwiU1wiLCA4NDpcIlRcIiwgODU6XCJVXCIsIDg2OlwiVlwiLCA4NzpcIldcIiwgODg6XCJYXCIsIDg5OlwiWVwiLCA5MDpcIlpcIiwgOTE6XCJbXCIsIDkyOlwiXFxcXFwiLCA5MzpcIl1cIiwgOTQ6XCJeXCIsIDk1OlwiX1wiLCA5NjpcImBcIiwgOTc6XCJhXCIsIDk4OlwiYlwiLCA5OTpcImNcIiwgMTAwOlwiZFwiLCAxMDE6XCJlXCIsIDEwMjpcImZcIiwgMTAzOlwiZ1wiLCAxMDQ6XCJoXCIsIDEwNTpcImlcIiwgMTA2OlwialwiLCAxMDc6XCJrXCIsIDEwODpcImxcIiwgMTA5OlwibVwiLCAxMTA6XCJuXCIsIDExMTpcIm9cIiwgMTEyOlwicFwiLCAxMTM6XCJxXCIsIDExNDpcInJcIiwgMTE1Olwic1wiLCAxMTY6XCJ0XCIsIDExNzpcInVcIiwgMTE4OlwidlwiLCAxMTk6XCJ3XCIsIDEyMDpcInhcIiwgMTIxOlwieVwiLCAxMjI6XCJ6XCIsIDEyMzpcIntcIiwgMTI0OlwifFwiLCAxMjU6XCJ9XCIsIDEyNjpcIn5cIn1cblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdrZXlkb3duJywgKGUpIC0+XG5cdFx0aWYgZmllbGQuYWN0aXZlXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMjdcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGtleWJvYXJkLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOih5Om0uZGV2aWNlLmhlaWdodClcblx0XHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0XHRmaWVsZC5jbGlja1pvbmUuZGVzdHJveSgpXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMTZcblx0XHRcdFx0aXNTaGlmdCA9IHRydWVcblx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRrZXlwcmVzcyhrZXlib2FyZC5rZXlzLnNoaWZ0KVxuXHRcdFx0XHRcdGZvciBrIGluIGtleWJvYXJkLmtleXNBcnJheVxuXHRcdFx0XHRcdFx0ay5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gXCJ1cHBlcmNhc2VcIlxuXHRcdFx0aWYgYWxsU2VsZWN0ZWQgPT0gdHJ1ZVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPT0gMzcgfHwgZS5rZXlDb2RlID09IDM5XG5cdFx0XHRcdFx0YWxsU2VsZWN0ZWQgPSBmYWxzZVxuXHRcdFx0XHRcdGZpZWxkLnRleHQuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gOTFcblx0XHRcdFx0aXNDb21tYW5kID0gdHJ1ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDEzXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLnJldHVybi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDhcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdFx0a2V5cHJlc3Moa2V5Ym9hcmQua2V5cy5kZWxldGUpXG5cdFx0XHRcdGlmIGFsbFNlbGVjdGVkID09IHRydWVcblx0XHRcdFx0XHRtLnV0aWxzLnVwZGF0ZShmaWVsZC50ZXh0LCBbdGV4dDpcIlwiXSlcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRcdFx0YWxsU2VsZWN0ZWQgPSBmYWxzZVxuXHRcdFx0XHRpbml0aWFsTGVuZ3RoID0gZmllbGQudGV4dC5odG1sLmxlbmd0aFxuXHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sLnNsaWNlKDAsIC0xKVxuXHRcdFx0XHRtLnV0aWxzLnVwZGF0ZShmaWVsZC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdFx0ZW5kTGVuZ3RoID0gZmllbGQudGV4dC5odG1sLmxlbmd0aFxuXHRcdFx0XHRpZiBpbml0aWFsTGVuZ3RoID09IGVuZExlbmd0aFxuXHRcdFx0XHRcdG5ld1RleHQgPSBmaWVsZC50ZXh0Lmh0bWwuc2xpY2UoMCwgLTYpXG5cdFx0XHRcdFx0bS51dGlscy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRcdGlmIGZpZWxkLnRleHQuaHRtbCA9PSBcIlwiXG5cdFx0XHRcdFx0ZmllbGQucGxhY2Vob2xkZXIudmlzaWJsZSA9IHRydWVcblxuXHRcdFx0XHQjIEdldCByaWQgb2YgJiBuYnNwO1xuXG5cdFx0XHRcdGZpZWxkLnZhbHVlID0gbS51dGlscy5jbGVhbihuZXdUZXh0KVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ2tleXVwJywgKGUpIC0+XG5cdFx0aWYgZmllbGQuYWN0aXZlXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMTMgJiYga2V5Ym9hcmRcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5yZXR1cm4uYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDMyICYmIGtleWJvYXJkXG5cdFx0XHRcdGtleWJvYXJkLmtleXMuc3BhY2UuYmFja2dyb3VuZENvbG9yID0gXCJXaGl0ZVwiXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gOCAmJiBrZXlib2FyZFxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLmRlbGV0ZS5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIikpXG5cdFx0XHRcdFx0dGltZTouMVxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLmRlbGV0ZS5pY29uLnN0YXRlcy5zd2l0Y2goXCJvZmZcIilcblx0XHRcdGlmIGUua2V5Q29kZSA9PSA5MVxuXHRcdFx0XHRpc0NvbW1hbmQgPSBmYWxzZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDE2XG5cdFx0XHRcdGlzU2hpZnQgPSBmYWxzZVxuXHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdGZvciBrIGluIGtleWJvYXJkLmtleXNBcnJheVxuXHRcdFx0XHRcdFx0ay5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gXCJsb3dlcmNhc2VcIlxuXHRcdFx0XHRcdGtleWJvYXJkLmtleXMuc2hpZnQuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIikpXG5cdFx0XHRcdFx0XHR0aW1lOi4yXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5cy5zaGlmdC5pY29uLnN0YXRlcy5uZXh0KClcblx0XHRcdGlmIGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPD0gOTBcblx0XHRcdFx0aWYga2V5Ym9hcmQgJiYgbS5kZXZpY2UuYW5tZSAhPSBcImlwYWRcIlxuXHRcdFx0XHRcdGtleWJvYXJkLmtleVBvcFVwLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ayA9IGtleWJvYXJkLmtleXNbY29kZXNbZS5rZXlDb2RlXS50b0xvd2VyQ2FzZSgpXVxuXHRcdFx0XHRcdGsuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIilcblx0XHRcdFx0XHRcdHRpbWU6LjJcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdrZXlwcmVzcycsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0Y2hhciA9IGNvZGVzW2Uua2V5Q29kZV1cblx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdGtleSA9IGtleWJvYXJkLmtleXNbY2hhcl1cblx0XHRcdGlmIGlzQ29tbWFuZCA9PSB0cnVlXG5cdFx0XHRcdGlmIGUua2V5Q29kZSA9PSA5N1xuXHRcdFx0XHRcdGZpZWxkLnRleHQuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDExOCwgMjU1LCAuMilcIlxuXHRcdFx0XHRcdGFsbFNlbGVjdGVkID0gdHJ1ZVxuXG5cdFx0XHRpZiBpc0NvbW1hbmQgPT0gZmFsc2Vcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGlmIGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPD0gOTBcblx0XHRcdFx0XHRjaGFyMiA9IGNoYXIudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdFx0XHRrZXkgPSBrZXlib2FyZC5rZXlzW2NoYXIyXVxuXHRcdFx0XHRcdFx0a2V5cHJlc3Moa2V5KVxuXG5cdFx0XHRcdGlmIGUua2V5Q29kZSA+PSA5NyAmJiBlLmtleUNvZGUgPD0gMTIyIHx8IGUua2V5Q29kZSA9PSAzMlxuXHRcdFx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdFx0XHRrZXlwcmVzcyhrZXkpXG5cblx0XHRcdFx0aWYgZS5rZXlDb2RlID4gMzFcblx0XHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sICsgY2hhclxuXHRcdFx0XHRcdG0udXRpbHMudXBkYXRlKGZpZWxkLnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0XHRcdGZpZWxkLnZhbHVlID0gbS51dGlscy5jbGVhbihuZXdUZXh0KVxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcbiAgbmFtZTogXCJzdGFyXCJcbiAgc2NhbGU6IG0uZGV2aWNlLnNjYWxlXG4gIGNvbG9yOiBtLmNvbG9yKFwiYmxhY2tcIilcbiAgc3VwZXJMYXllcjogdW5kZWZpbmVkXG4gIGNvbnN0cmFpbnRzOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuICBzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG4gIGljb25MYXllciA9IG5ldyBMYXllclxuICAgIGh0bWw6XCI8c3BhbiBzdHlsZT0nLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCN7c2V0dXAuc2NhbGV9KTsgcG9zaXRpb246IGFic29sdXRlOyc+PGkgY2xhc3M9J21hdGVyaWFsLWljb25zIG1kLTQ4Jz4je3NldHVwLm5hbWV9PC9pPlwiXG4gICAgY29sb3I6c2V0dXAuY29sb3JcbiAgICBoZWlnaHQ6c2V0dXAuc2NhbGUgKiAyMVxuICAgIHdpZHRoOnNldHVwLnNjYWxlICogMjBcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cbiAgaWNvbkxheWVyLnN0eWxlID1cbiAgICBcInBhZGRpbmctdG9wXCI6aWNvbkxheWVyLmhlaWdodC8yIC0gbS5weCgxKSsgXCJweFwiXG4gICAgXCJwYWRkaW5nLWxlZnRcIjppY29uTGF5ZXIud2lkdGgvMiAtIG0ucHgoMykgKyBcInB4XCJcblxuICBpZiBzZXR1cC5zdXBlckxheWVyXG4gICAgaWNvbkxheWVyLnN1cGVyTGF5ZXIgPSBzZXR1cC5zdXBlckxheWVyXG5cbiAgaWYgc2V0dXAuY29uc3RyYWludHNcbiAgICBpY29uTGF5ZXIuY29uc3RyYWludHMgPSBzZXR1cC5jb25zdHJhaW50c1xuICAgIG0ubGF5b3V0LnNldFxuICAgICAgdGFyZ2V0Omljb25MYXllclxuXG4gIHJldHVybiBpY29uTGF5ZXJcbiIsIm0gPSByZXF1aXJlIFwibWF0ZXJpYWwta2l0XCJcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0XHRyZXR1cm5UZXh0OlwicmV0dXJuXCJcblx0XHRyZXR1cm5Db2xvcjpcImxpZ2h0LWtleVwiXG5cdFx0YW5pbWF0ZWQ6ZmFsc2Vcblx0XHRvdXRwdXQ6dW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG4jU2V0cyBzcGVjaWZpY2F0aW9ucyBmb3IgdGhlIEtleWJvYXJkIGJhc2VkIG9uIHRoZSBmcmFtZVxuYm9hcmRTcGVjc09iamVjdCA9XG5cdFwiaXBob25lLTVcIjpcblx0XHRoZWlnaHQ6MjE1XG5cdFx0a2V5OlxuXHRcdFx0d2lkdGg6IG0udXRpbHMucHgoMjYpXG5cdFx0XHRoZWlnaHQ6IG0udXRpbHMucHgoMzkpXG5cdFx0ZXhwYW5kZWRLZXk6IG0udXRpbHMucHgoMzkpXG5cdFx0ZXhwYW5kZWRTcGFjZXI6IG0udXRpbHMucHgoMTIpXG5cdFx0cGFkZGluZzpcblx0XHRcdHJvdzE6IG0udXRpbHMucHgoMylcblx0XHRcdHJvdzI6IG0udXRpbHMucHgoMTkpXG5cdFx0XHRyb3czOiBtLnV0aWxzLnB4KDU0KVxuXHRcdG1hcmdpblRvcDpcblx0XHRcdHJvdzE6IG0udXRpbHMucHgoMTEpXG5cdFx0XHRyb3cyOiBtLnV0aWxzLnB4KDI2KVxuXHRcdFx0cm93MzogbS51dGlscy5weCg0MSlcblx0XHRcdHJvdzQ6IG0udXRpbHMucHgoNTUpXG5cdFx0c2hpZnRJY29uOiB7eDptLnV0aWxzLnB4KDkpLCB5Om0udXRpbHMucHgoMil9XG5cdFx0ZGVsZXRlSWNvbjoge3g6bS51dGlscy5weCg3KSwgeTptLnV0aWxzLnB4KDEwKX1cblx0XHRlbW9qaUljb246IHt4Om0udXRpbHMucHgoOCksIHk6bS51dGlscy5weCg5KX1cblx0XHRzaWRlS2V5OiBtLnV0aWxzLnB4KDM2LjUpXG5cdFx0c2lkZUtleVJhZGl1czogbS51dGlscy5weCg0KVxuXHRcdHNpZGVLZXlCb3R0b206IG0udXRpbHMucHgoNTgpXG5cdFx0aVBhZERlbGV0ZU9mZnNldDogMFxuXHRcdGJvdHRvbVJvdzogOFxuXHRcdHJldHVybktleTogbS51dGlscy5weCg3NClcblx0XHRzcGFjZXI6IG0udXRpbHMucHgoNilcblx0XHRrZXlQb3BVcDpcblx0XHRcdHdpZHRoOjQ5XG5cdFx0XHRoZWlnaHQ6ODZcblx0XHRcdGJveFRvcDowXG5cdFx0cGF0aE9mZlNldDpcblx0XHRcdHg6LTdcblx0XHRcdHk6LTVcblx0XCJpcGhvbmUtNnNcIjpcblx0XHRoZWlnaHQ6MjE2XG5cdFx0a2V5OlxuXHRcdFx0d2lkdGg6IG0udXRpbHMucHgoMzEuNSlcblx0XHRcdGhlaWdodDogbS51dGlscy5weCg0Milcblx0XHRleHBhbmRlZEtleTogbS51dGlscy5weCg0Ni41KVxuXHRcdGV4cGFuZGVkU3BhY2VyOiBtLnV0aWxzLnB4KDE0KVxuXHRcdHBhZGRpbmc6XG5cdFx0XHRyb3cxOiBtLnV0aWxzLnB4KDMpXG5cdFx0XHRyb3cyOiBtLnV0aWxzLnB4KDIyKVxuXHRcdFx0cm93MzogbS51dGlscy5weCg1OSlcblx0XHRtYXJnaW5Ub3A6XG5cdFx0XHRyb3cxOiBtLnV0aWxzLnB4KDEwKVxuXHRcdFx0cm93MjogbS51dGlscy5weCgyMilcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoMzQpXG5cdFx0XHRyb3c0OiBtLnV0aWxzLnB4KDQ0KVxuXHRcdHNoaWZ0SWNvbjoge3g6bS51dGlscy5weCgxMSksIHk6bS51dGlscy5weCgyKX1cblx0XHRkZWxldGVJY29uOiB7eDptLnV0aWxzLnB4KDEwKSwgeTptLnV0aWxzLnB4KDEzKX1cblx0XHRlbW9qaUljb246IHt4Om0udXRpbHMucHgoMTEpLCB5Om0udXRpbHMucHgoMTEpfVxuXHRcdHNpZGVLZXk6IG0udXRpbHMucHgoNDIpXG5cdFx0c2lkZUtleVJhZGl1czogbS51dGlscy5weCg1KVxuXHRcdHNpZGVLZXlCb3R0b206IG0udXRpbHMucHgoNTYpXG5cdFx0aVBhZERlbGV0ZU9mZnNldDogMFxuXHRcdGJvdHRvbVJvdzogNlxuXHRcdHJldHVybktleTogbS51dGlscy5weCg4Ny41KVxuXHRcdHNwYWNlcjogbS51dGlscy5weCg2KVxuXHRcdGtleVBvcFVwOlxuXHRcdFx0d2lkdGg6NThcblx0XHRcdGhlaWdodDoxMDFcblx0XHRcdGJveFRvcDo1XG5cdFx0cGF0aE9mZlNldDpcblx0XHRcdHg6LTdcblx0XHRcdHk6LTVcblx0XCJpcGhvbmUtNnMtcGx1c1wiOlxuXHRcdGhlaWdodDoyMjZcblx0XHRrZXk6XG5cdFx0XHR3aWR0aDogbS51dGlscy5weCgzNSlcblx0XHRcdGhlaWdodDogbS51dGlscy5weCg0NSlcblx0XHRleHBhbmRlZEtleTogbS51dGlscy5weCg1MClcblx0XHRleHBhbmRlZFNwYWNlcjogbS51dGlscy5weCgyMClcblx0XHRwYWRkaW5nOlxuXHRcdFx0cm93MTogbS51dGlscy5weCg0KVxuXHRcdFx0cm93MjogbS51dGlscy5weCgyNSlcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoNjcpXG5cdFx0bWFyZ2luVG9wOlxuXHRcdFx0cm93MTogbS51dGlscy5weCg4KVxuXHRcdFx0cm93MjogbS51dGlscy5weCgxOSlcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoMzApXG5cdFx0XHRyb3c0OiBtLnV0aWxzLnB4KDQxKVxuXHRcdHNoaWZ0SWNvbjoge3g6bS51dGlscy5weCgxMyksIHk6bS51dGlscy5weCgyKX1cblx0XHRkZWxldGVJY29uOiB7eDptLnV0aWxzLnB4KDExKSwgeTptLnV0aWxzLnB4KDE0KX1cblx0XHRlbW9qaUljb246IHt4Om0udXRpbHMucHgoMTMpLCB5Om0udXRpbHMucHgoMTMpfVxuXHRcdHNpZGVLZXk6IG0udXRpbHMucHgoNDUpXG5cdFx0c2lkZUtleVJhZGl1czogbS51dGlscy5weCg1KVxuXHRcdHNpZGVLZXlCb3R0b206IG0udXRpbHMucHgoNTYpXG5cdFx0aVBhZERlbGV0ZU9mZnNldDogMFxuXHRcdGJvdHRvbVJvdzogNlxuXHRcdHJldHVybktleTogbS51dGlscy5weCg5Nylcblx0XHRzcGFjZXI6IG0udXRpbHMucHgoNilcblx0XHRrZXlQb3BVcDpcblx0XHRcdHdpZHRoOjY0XG5cdFx0XHRoZWlnaHQ6MTEyXG5cdFx0XHRib3hUb3A6OFxuXHRcdHBhdGhPZmZTZXQ6XG5cdFx0XHR4Oi03XG5cdFx0XHR5Oi01XG5cdFwiaXBhZFwiOlxuXHRcdGhlaWdodDoyNjhcblx0XHRrZXk6XG5cdFx0XHR3aWR0aDogbS51dGlscy5weCg1Nilcblx0XHRcdGhlaWdodDogbS51dGlscy5weCg1Nilcblx0XHRwYWRkaW5nOlxuXHRcdFx0cm93MTogbS51dGlscy5weCg2KVxuXHRcdFx0cm93MjogbS51dGlscy5weCgzNSlcblx0XHRcdHJvdzM6IG0udXRpbHMucHgoNzQpXG5cdFx0bWFyZ2luVG9wOlxuXHRcdFx0cm93MTogbS51dGlscy5weCgxMClcblx0XHRcdHJvdzI6IG0udXRpbHMucHgoMTgpXG5cdFx0XHRyb3czOiBtLnV0aWxzLnB4KDI4KVxuXHRcdFx0cm93NDogbS51dGlscy5weCg0MClcblx0XHRzaGlmdEljb246IHt4Om0udXRpbHMucHgoMTgpLCB5Om0udXRpbHMucHgoMil9XG5cdFx0ZGVsZXRlSWNvbjoge3g6bS51dGlscy5weCgxOCksIHk6bS51dGlscy5weCgyMCl9XG5cdFx0ZW1vamlJY29uOiB7eDptLnV0aWxzLnB4KDE4KSwgeTptLnV0aWxzLnB4KDE4KX1cblx0XHRzaWRlS2V5OiBtLnV0aWxzLnB4KDU2KVxuXHRcdHNpZGVLZXkyOiBtLnV0aWxzLnB4KDc2KVxuXHRcdHNpZGVLZXlSYWRpdXM6IG0udXRpbHMucHgoNSlcblx0XHRzaWRlS2V5Qm90dG9tOiBtLnV0aWxzLnB4KDU2KVxuXHRcdGlQYWREZWxldGVPZmZzZXQ6IG0udXRpbHMucHgoMjgpICsgbS51dGlscy5weCg1NikgKiAyIC0gbS51dGlscy5weCgxMClcblx0XHRib3R0b21Sb3c6IDdcblx0XHRyZXR1cm5LZXk6IG0udXRpbHMucHgoMTA2KVxuXHRcdHNwYWNlcjogbS51dGlscy5weCgxMilcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cblx0IyMgS2V5Ym9hcmQgc2V0dXBcblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRib2FyZFNwZWNzID0gYm9hcmRTcGVjc09iamVjdFttLmRldmljZS5uYW1lXVxuXG5cdCMgU2V0dXAgdGhlIFNWR3Ncblx0c3ZnU2hpZnRPZmYgPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5zaGlmdC5vZmYpXG5cdHN2Z1NoaWZ0T24gPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5zaGlmdC5vbilcblx0c3ZnRGVsZXRlT2ZmID0gbS51dGlscy5zdmcobS5hc3NldHMuZGVsZXRlLm9mZilcblx0c3ZnRGVsZXRlT24gPSBtLnV0aWxzLnN2ZyhtLmFzc2V0cy5kZWxldGUub24pXG5cdHN2Z0Vtb2ppID0gbS51dGlscy5zdmcobS5hc3NldHMuZW1vamkpXG5cdHN2Z0tleVBvcFVwID0gbS51dGlscy5zdmcobS5hc3NldHMua2V5UG9wVXBbbS5kZXZpY2UubmFtZV0pXG5cblxuXHQjIFRoaXMgaXMgdGhlIHN1cGVyTGF5ZXIgb2YgdGhlIGtleWJvYXJkXG5cdGJvYXJkID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNEMUQ1REFcIiwgbmFtZTpcImtleWJvYXJkXCJcblx0Ym9hcmQuY29uc3RyYWludHMgPSAoaGVpZ2h0OmJvYXJkU3BlY3MuaGVpZ2h0LCB0cmFpbGluZzowLCBsZWFkaW5nOjApXG5cdGJvYXJkLnNwZWNzID0gYm9hcmRTcGVjc1xuXHRtLmxheW91dC5zZXQoYm9hcmQpXG5cblx0I1RoaXMgd2lsbCBkZXRlcmluZSBpZiBpdCBzdGFydHMgb24gdGhlIGJvdHRvbSBvciBwb3BzIHVwIGZyb20gdGhlIGJvdHRvbVxuXHRpZiBzZXR1cC5hbmltYXRlZFxuXHRcdGJvYXJkLnkgPSBtLmRldmljZS5oZWlnaHRcblx0XHRib2FyZC5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOihtYXhZOiBtLmRldmljZS5oZWlnaHQpXG5cdFx0XHR0aW1lOi4yNVxuXHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cdGVsc2Vcblx0XHRib2FyZC5tYXhZID0gbS5kZXZpY2UuaGVpZ2h0XG5cblx0I0xldHRlcnMgdG8gYmUgbWFkZVxuXHRsZXR0ZXJzQXJyYXkgPSBbXCJxXCIsIFwid1wiLCBcImVcIiwgXCJyXCIsIFwidFwiLCBcInlcIiwgXCJ1XCIsIFwiaVwiLCBcIm9cIiwgXCJwXCIsIFwiYVwiLCBcInNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwielwiLCBcInhcIiwgXCJjXCIsIFwidlwiLCAgXCJiXCIsIFwiblwiLCBcIm1cIl1cblxuXHQjVGhlc2UgYXJyYXlzIGFyZSBkZXBlbmVkZW50IG9uIHRoZSBEZXZpY2Vcblx0c2Vjb25kQXJyYXkgPSBbXVxuXHR0aGlyZEFycmF5ID0gW11cblxuXHRzd2l0Y2ggbS5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGFkXCJcblx0XHRcdHNlY29uZEFycmF5ID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiLCBcIi1cIiwgXCIvXCIsIFwiOlwiLCBcIjtcIiwgXCIoXCIsIFwiKVwiLCBcIiRcIiwgXCImXCIsIFwiQFwiLCBcInVuZG9cIiwgXCJoaWRlXCIsIFwiLlwiLCAnLCcsIFwiP1wiLCBcIiFcIiwgXCInXCIsIFwiXFxcIlwiXVxuXHRcdFx0dGhpcmRBcnJheSA9IFtcIlxcW1wiLCBcIlxcXVwiLCBcIlxce1wiLCBcIlxcfVwiLCBcIiNcIiwgXCIlXCIsIFwiXlwiLCBcIipcIiwgXCIrXCIsIFwiPVwiLCBcIl9cIiwgXCJcXFxcXCIsIFwifFwiLCBcIn5cIiwgXCI8XCIsIFwiPlwiLCBcIuKCrFwiLCBcIsKjXCIsIFwiwqVcIiwgXCJyZWRvXCIsIFwiaGlkZVwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiLCBcIlxcXCJcIl1cblx0XHRlbHNlXG5cdFx0XHRzZWNvbmRBcnJheSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIiwgXCItXCIsIFwiL1wiLCBcIjpcIiwgXCI7XCIsIFwiKFwiLCBcIilcIiwgXCIkXCIsIFwiJlwiLCBcIkBcIiwgXCJcXFwiXCIsIFwiLlwiLCAnLCcsIFwiP1wiLCBcIiFcIiwgXCInXCJdXG5cdFx0XHR0aGlyZEFycmF5ID0gW1wiXFxbXCIsIFwiXFxdXCIsIFwiXFx7XCIsIFwiXFx9XCIsIFwiI1wiLCBcIiVcIiwgXCJeXCIsIFwiKlwiLCBcIitcIiwgXCI9XCIsIFwiX1wiLCBcIlxcXFxcIiwgXCJ8XCIsIFwiflwiLCBcIjxcIiwgXCI+XCIsIFwi4oKsXCIsIFwiwqNcIiwgXCLCpVwiLCBcIuKAolwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiLCBcIlxcXCJcIl1cblxuXHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0bGV0dGVyc0FycmF5LnB1c2ggXCIsXCJcblx0XHRsZXR0ZXJzQXJyYXkucHVzaCBcIi5cIlxuXG5cdCNOdW1iZXJzIHRvIGJlIG1hZGUgKGRlcGVuZGluZyBvbiBkZXZpY2UpXG5cdG51bXNBcnJheSA9IFswLi45XVxuXG5cdCNIb2xkcyB0aGUga2V5IGxheWVycyB0aGF0IHdlIG1ha2UuIFRoaXMgd2lsbCBhbGxvd3MgdXMgdG8gcXVpY2tseSBpdGVyYXRlIHRocm91Z2ggdGhlbS5cblx0a2V5c0FycmF5ID0gW11cblxuXHQjIE9uIGlQaG9uZSwgdGhpcyBpcyB0aGUgbGl0dGxlIHRoaW5nIHRoYXQgcG9wcyB1cCB3aGVuIHlvdSB0YXAgbGV0dGVyc1xuXHRrZXlQb3BVcCA9IG5ldyBMYXllciB3aWR0aDptLnV0aWxzLnB4KGJvYXJkU3BlY3Mua2V5UG9wVXAud2lkdGgpLCBoZWlnaHQ6bS51dGlscy5weChib2FyZFNwZWNzLmtleVBvcFVwLmhlaWdodCksIHg6QC54LTE2Km0uZGV2aWNlLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwia2V5IHBvcCB1cFwiXG5cdGJveCA9IG5ldyBtLlRleHRcblx0XHR0ZXh0OlwicVwiXG5cdFx0c3VwZXJMYXllcjprZXlQb3BVcFxuXHRcdGNvbnN0cmFpbnRzOnt0b3A6Ym9hcmRTcGVjcy5rZXlQb3BVcC5ib3hUb3AsIGFsaWduOlwiaG9yaXpvbnRhbFwifVxuXHRcdGZvbnRTaXplOjM4XG5cdFx0Zm9udFdlaWdodDozMDBcblx0XHR0ZXh0QWxpZ246XCJjZW50ZXJcIlxuXHRALmNvbG9yID0gXCJ3aGl0ZVwiXG5cdHBhdGggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImtleSBwYXRoXCIsIHg6Ym9hcmRTcGVjcy5wYXRoT2ZmU2V0LngsIHk6Ym9hcmRTcGVjcy5wYXRoT2ZmU2V0LnksIHdpZHRoOm0udXRpbHMucHgoYm9hcmRTcGVjcy5rZXlQb3BVcC53aWR0aCksIGhlaWdodDptLnV0aWxzLnB4KGJvYXJkU3BlY3Mua2V5UG9wVXAuaGVpZ2h0KVxuXHRwYXRoLmh0bWwgPSBzdmdLZXlQb3BVcC5zdmdcblx0Ym9hcmQua2V5UG9wVXAgPSBrZXlQb3BVcFxuXHRib2FyZC5rZXlQb3BVcC5ib3ggPSBib3hcblxuXHRyb3dzTWFwID0gW1xuXHRcdHtcblx0XHRcdFwicGFkZGluZ1wiIDogYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzFcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogOVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzFcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwicGFkZGluZ1wiIDogYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzJcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDE4XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJwYWRkaW5nXCIgOiBib2FyZFNwZWNzLnBhZGRpbmcucm93M1xuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxOVxuXHRcdFx0XCJlbmRJbmRleFwiIDogMjVcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czXG5cdFx0fVxuXHRdXG5cblx0Zmlyc3RSb3dLZXlXaWR0aCA9IDBcblx0c2Vjb25kUm93S2V5V2lkdGggPSAwXG5cblx0Ym9hcmQua2V5cyA9IHt9XG5cdGZvciBsZXR0ZXIgaW4gbGV0dGVyc0FycmF5XG5cdFx0aW5kZXggPSBsZXR0ZXJzQXJyYXkuaW5kZXhPZihsZXR0ZXIpXG5cdFx0a2V5ID0gbmV3IExheWVyIG5hbWU6bGV0dGVyLCBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6NSptLmRldmljZS5zY2FsZSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgY29sb3I6XCJibGFja1wiLCBzaGFkb3dZOm0udXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLmtleS53aWR0aCwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRcdGJvYXJkLmtleXNbbGV0dGVyXSA9IGtleVxuXHRcdGtleVBvcFVwLmJyaW5nVG9Gcm9udCgpXG5cdFx0Ym94LmJyaW5nVG9Gcm9udCgpXG5cblxuXHRcdGlmIG0uZGV2aWNlLndpZHRoID09IDY0MFxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjI2LCBoZWlnaHQ6MzkpXG5cblx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdG0ubGF5b3V0LnNldCgpXG5cdFx0a2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IDI1ICogbS5kZXZpY2Uuc2NhbGUgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGtleS5oZWlnaHQgLSBtLnV0aWxzLnB4KDIpICsgXCJweFwiXG5cdFx0fVxuXHRcdGlmIGxldHRlciA9PSBcIixcIiB8fCBsZXR0ZXIgPT0gXCIuXCJcblx0XHRcdGV4dHJhU3ltYm9sID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5LCB3aWR0aDptLnV0aWxzLnB4KDMwKSwgaGVpZ2h0Om0udXRpbHMucHgoMzApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB5Om0udXRpbHMucHgoMTUpLCBjb2xvcjptLnV0aWxzLmNvbG9yKFwiYmxhY2tcIiksIG5hbWU6XCIhLz9cIlxuXHRcdFx0ZXh0cmFTeW1ib2wuY2VudGVyWCgpXG5cdFx0XHRleHRyYVN5bWJvbC5zdHlsZSA9IHtcblx0XHRcdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMjQpICsgXCJweFwiXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdFx0J2xpbmUtaGVpZ2h0JyA6IFwiMjBweFwiXG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCBsZXR0ZXJcblx0XHRcdFx0d2hlbiBcIixcIiB0aGVuIGV4dHJhU3ltYm9sLmh0bWwgPSBcIiFcIlxuXHRcdFx0XHR3aGVuIFwiLlwiIHRoZW4gZXh0cmFTeW1ib2wuaHRtbCA9IFwiP1wiXG5cdFx0XHRrZXkuc3R5bGVbXCJsaW5lLWhlaWdodFwiXSA9IGtleS5oZWlnaHQgKyBtLnV0aWxzLnB4KDEwKSArIFwicHhcIlxuXG5cdFx0a2V5Lmh0bWwgPSBsZXR0ZXJcblxuXHRcdGlmIGluZGV4IDw9IHJvd3NNYXBbMF0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzBdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChmaXJzdFJvd0tleVdpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzBdLm1hcmdpblRvcFxuXHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHQjSGFuZGxlIHRoZSBleHRyYSBwaXhlbHMgb24gdGhlIHRvcCByb3dcblx0XHRcdFx0aWYgaW5kZXggJSAyICE9IDBcblx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyBtLnV0aWxzLnB4KDIpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyBtLnV0aWxzLnB4KDEpXG5cdFx0XHRmaXJzdFJvd0tleVdpZHRoID0gZmlyc3RSb3dLZXlXaWR0aCArIGtleS53aWR0aFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFswXS5lbmRJbmRleCAmJiBpbmRleCA8PSByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsxXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMV0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAoc2Vjb25kUm93S2V5V2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMV0ubWFyZ2luVG9wICsga2V5LmhlaWdodFxuXHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICsgbS51dGlscy5weCgxKVxuXHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGtleS53aWR0aFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzJdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXG5cdFx0a2V5c0FycmF5LnB1c2gga2V5XG5cblx0XHRpZiBtLmRldmljZS5uYW1lICE9IFwiaXBhZFwiICYmIG0uZGV2aWNlLm5hbWUgIT0gXCJpcGFkLXByb1wiXG5cdFx0XHQjIyBpUGhvbmUgS2V5IEFuaW1hdGlvbnNcblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXG5cblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hNb3ZlLCAtPlxuXHRcdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcblxuXHRcdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRlbHNlXG5cdFx0XHQjaVBhZCBLZXkgQW5pbWF0aW9uc1xuXHRcdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRALmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdEAuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5zd2l0Y2goXCJkZWZhdWx0XCIpXG5cdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblxuXHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2hpZnRJY29uMi5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cblx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXG5cdFx0XHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0XHRcdEBuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbCArIEAubmFtZS50b1VwcGVyQ2FzZSgpXG5cdFx0XHRcdFx0bS51dGlscy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0aWYgc2V0dXAub3V0cHV0XG5cdFx0XHRcdFx0QG5ld1RleHQgPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sICsgQC5uYW1lXG5cdFx0XHRcdFx0bS51dGlscy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblxuXHRib2FyZC5rZXlzQXJyYXkgPSBrZXlzQXJyYXlcblxuXHRib2FyZC5rZXlib2FyZFN0YXRlID0gMVxuXG5cblxuXHQjIyBTSElGVCBLRVlcblxuXHRzaGlmdEtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwic2hpZnRcIiwgYm9yZGVyUmFkaXVzOmJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cywgY29sb3I6bS51dGlscy5jb2xvcihcImJsYWNrXCIpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5zaWRlS2V5LCB5Oihib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICogMilcblx0c2hpZnRLZXkuY29uc3RyYWludHMgPSAobGVhZGluZzptLnV0aWxzLnB0KGJvYXJkU3BlY3MucGFkZGluZy5yb3cxKSlcblx0c2hpZnRJY29uID0gbmV3IExheWVyIHdpZHRoOnN2Z1NoaWZ0T2ZmLndpZHRoLCBoZWlnaHQ6c3ZnU2hpZnRPZmYuaGVpZ2h0LCBzdXBlckxheWVyOnNoaWZ0S2V5LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmJvYXJkU3BlY3Muc2hpZnRJY29uLngsIHk6Ym9hcmRTcGVjcy5zaGlmdEljb24ueVxuXG5cdHNoaWZ0SWNvbi5odG1sID0gc3ZnU2hpZnRPZmYuc3ZnXG5cblx0c2hpZnRJY29uLnN0YXRlcy5hZGRcblx0XHRcIm9uXCI6XG5cdFx0XHRodG1sOiBzdmdTaGlmdE9uLnN2Z1xuXHRzaGlmdEljb24uc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHQgIHRpbWU6IC4wMVxuXG5cdHNoaWZ0S2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblx0XHR9XG5cblx0c2hpZnRLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHN3aXRjaCBib2FyZC5rZXlib2FyZFN0YXRlXG5cdFx0XHR3aGVuIDFcblx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5uZXh0KClcblx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGtleS5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0XHRib3guc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHR3aGVuIDJcblx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0a2V5Lmh0bWwgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdGtleS5uYW1lID0gdGhpcmRBcnJheVtpbmRleF1cblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDNcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIxMjNcIlxuXHRcdFx0d2hlbiAzXG5cdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdGlmIGluZGV4IDwgMjdcblx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPT0gMjZcblx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblxuXHRib2FyZC5rZXlzLnNoaWZ0ID0gc2hpZnRLZXlcblx0Ym9hcmQua2V5cy5zaGlmdC5pY29uID0gc2hpZnRJY29uXG5cblx0IyMgREVMRVRFIEtFWVxuXG5cdGRlbGV0ZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgbmFtZTpcImRlbGV0ZVwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXksIHk6KGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzMgKyBib2FyZFNwZWNzLmtleS5oZWlnaHQgKiAyIC0gYm9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0KVxuXG5cblx0ZGVsZXRlS2V5LmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nOm0udXRpbHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpLzIpXG5cdGRlbGV0ZUljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpkZWxldGVLZXksIHdpZHRoOm0udXRpbHMucHgoMjQpLCBoZWlnaHQ6bS51dGlscy5weCgxOCksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6Ym9hcmRTcGVjcy5kZWxldGVJY29uLngsIHk6Ym9hcmRTcGVjcy5kZWxldGVJY29uLnlcblxuXHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0ZGVsZXRlS2V5LndpZHRoID0gZGVsZXRlS2V5LndpZHRoICsgbS51dGlscy5weCg1KVxuXG5cdGRlbGV0ZUljb24uc3RhdGVzLmFkZFxuXHRcdFwib25cIjpcblx0XHRcdGh0bWw6IHN2Z0RlbGV0ZU9uLnN2Z1xuXG5cdGRlbGV0ZUljb24uc3RhdGVzLmFkZFxuXHRcdG9mZjpcblx0XHRcdGh0bWw6IHN2Z0RlbGV0ZU9mZi5zdmdcblxuXG5cdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cblx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gbS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvZmZcIilcblxuXHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0aW5pdGlhbExlbmd0aCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwubGVuZ3RoXG5cdFx0XHRuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbC5zbGljZSgwLCAtMSlcblx0XHRcdG0udXRpbHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdGVuZExlbmd0aCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwubGVuZ3RoXG5cdFx0XHRpZiBpbml0aWFsTGVuZ3RoID09IGVuZExlbmd0aFxuXHRcdFx0XHRuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbC5zbGljZSgwLCAtNilcblx0XHRcdFx0bS51dGlscy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0aWYgc2V0dXAub3V0cHV0LnRleHQuaHRtbCA9PSBcIlwiXG5cdFx0XHRcdHNldHVwLm91dHB1dC5wbGFjZWhvbGRlci52aXNpYmxlID0gdHJ1ZVxuXG5cblxuXHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cblx0Ym9hcmQua2V5cy5kZWxldGUgPSBkZWxldGVLZXlcblx0Ym9hcmQua2V5cy5kZWxldGUuaWNvbiA9IGRlbGV0ZUljb25cblxuXHQjIyBFWFRSQSBLRVlTXG5cblx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdGtleWJvYXJkS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJkaXNtaXNzXCIsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsIGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOm0udXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXlcblx0XHRrZXlib2FyZEtleS5jb25zdHJhaW50cyA9IHt0cmFpbGluZ0VkZ2VzOmRlbGV0ZUtleSwgYm90dG9tOmJvYXJkU3BlY3MuYm90dG9tUm93fVxuXHRcdGtleWJvYXJkSWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmtleWJvYXJkS2V5LCB3aWR0aDptLnV0aWxzLnB4KDMyLjUpLCBoZWlnaHQ6bS51dGlscy5weCgyMy41KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGtleWJvYXJkSWNvbi5odG1sID0gbS5hc3NldHMua2V5Ym9hcmRcblx0XHRrZXlib2FyZEljb24uY2VudGVyKClcblxuXHRcdGJvYXJkLmtleXMuZGlzbWlzcyA9IGtleWJvYXJkS2V5XG5cblx0XHRzaGlmdEtleTIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcInNoaWZ0XCIsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsY29sb3I6bS51dGlscy5jb2xvcihcImJsYWNrXCIpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5MiwgaGVpZ2h0OmJvYXJkU3BlY3Muc2lkZUtleVxuXHRcdHNoaWZ0S2V5Mi5jb25zdHJhaW50cyA9ICh0cmFpbGluZ0VkZ2VzOmRlbGV0ZUtleSwgYm90dG9tRWRnZXM6c2hpZnRLZXkpXG5cdFx0c2hpZnRJY29uMiA9IG5ldyBMYXllciB3aWR0aDptLnV0aWxzLnB4KDIwKSwgaGVpZ2h0Om0udXRpbHMucHgoMTkpLCBzdXBlckxheWVyOnNoaWZ0S2V5MiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLnNoaWZ0SWNvbi54K20udXRpbHMucHgoMTApLCB5OmJvYXJkU3BlY3Muc2hpZnRJY29uLnlcblx0XHRzaGlmdEljb24yLmh0bWwgPSBtLmFzc2V0cy5zaGlmdC5vZmZcblxuXHRcdHNoaWZ0S2V5Mi5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiBtLnV0aWxzLnB4KDE2KSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDogKGJvYXJkU3BlY3Mua2V5LmhlaWdodCkgKyBcInB4XCJcblxuXHRcdH1cblxuXG5cdFx0c2hpZnRJY29uMi5zdGF0ZXMuYWRkXG5cdFx0XHRcIm9uXCI6XG5cdFx0XHRcdGh0bWw6IHN2Z1NoaWZ0T24uc3ZnXG5cdFx0c2hpZnRJY29uMi5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdFx0ICB0aW1lOiAuMDFcblxuXHRcdHNoaWZ0SWNvbjIub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZVxuXHRcdFx0XHR3aGVuIDFcblx0XHRcdFx0XHRzaGlmdEljb24uc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGtleS5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdFx0XHRib3guc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdHdoZW4gMlxuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAzXG5cdFx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0d2hlbiAzXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0aWYgbS5kZXZpY2UubmFtZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblxuXG5cdFx0bnVtS2V5MiA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwibnVtXCIsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsIGNvbG9yOm0udXRpbHMuY29sb3IoXCJibGFja1wiKSwgYmFja2dyb3VuZENvbG9yOm0udXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleTIsIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0XHRudW1LZXkyLmh0bWwgPSBcIi4/MTIzXCJcblx0XHRudW1LZXkyLnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblxuXHRcdH1cblx0XHRudW1LZXkyLmNvbnN0cmFpbnRzID0ge3RyYWlsaW5nOltrZXlib2FyZEtleSwgMTJdLCBib3R0b21FZGdlczprZXlib2FyZEtleX1cblxuXHRcdG51bUtleTIub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZVxuXHRcdFx0XHR3aGVuIDFcblx0XHRcdFx0XHQjIyBDaGFuZ2UgTGV0dGVyc1xuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPCAyN1xuXHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJ1bmRvXCJcblx0XHRcdFx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKiAyICsgYm9hcmRTcGVjcy5zcGFjZXJcblx0XHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXNpemVcIl0gPSBtLnV0aWxzLnB4KDE3KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNDAwXG5cdFx0XHRcdFx0XHRcdGlmIHNlY29uZEFycmF5W2luZGV4XSA9PSBcImhpZGVcIlxuXHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPT0gMjZcblx0XHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRcdFx0XHQjIyBIYW5kbGUgbnVtIGtleXMgYW5kIHNoaWZ0IGtleXNcblx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiQUJDXCJcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gZmFsc2VcblxuXHRcdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiQUJDXCJcblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBrZXkuaHRtbCA9PSBcInVuZG9cIiB8fCBcInJlZG9cIlxuXHRcdFx0XHRcdFx0XHRrZXkud2lkdGggPSBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXNpemVcIl0gPSBtLnV0aWxzLnB4KDI1KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDMwMFxuXHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRrZXkubmFtZSA9IGxldHRlcnNBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGtleS5odG1sID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPiAyNVxuXHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRpZiBtLmRldmljZS5uYW1lID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdFx0bnVtS2V5Mi5odG1sID0gXCIuPzEyM1wiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMVxuXG5cblx0IyMgTlVNIEtFWSB0b3A6bS51dGlscy5wdChib2FyZFNwZWNzLm1hcmdpblRvcC5yb3c0ICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0KjMpXG5cblx0bnVtS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJudW1cIiwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoNSksIGJhY2tncm91bmRDb2xvcjptLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOm0udXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRudW1LZXkuY29uc3RyYWludHMgPSAoYm90dG9tOmJvYXJkU3BlY3MuYm90dG9tUm93LCBsZWFkaW5nRWRnZXM6c2hpZnRLZXkpXG5cdGlmIG0uZGV2aWNlLm5hbWUgIT0gXCJpcGFkXCIgJiYgbS5kZXZpY2UubmFtZSAhPSBcImlwYWQtcHJvXCJcblx0XHRudW1LZXkuaHRtbCA9IFwiMTIzXCJcblx0ZWxzZVxuXHRcdG51bUtleS5odG1sID0gXCIuPzEyM1wiXG5cdG51bUtleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogbS51dGlscy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblx0fVxuXG5cdG51bUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZVxuXHRcdFx0d2hlbiAxXG5cdFx0XHRcdCMjIENoYW5nZSBMZXR0ZXJzXG5cdFx0XHRcdHN3aXRjaCBtLmRldmljZS5uYW1lXG5cdFx0XHRcdFx0d2hlbiBcImlwYWRcIlxuXHRcdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4IDwgMjdcblx0XHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJ1bmRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGtleS53aWR0aCAqIDIgKyBib2FyZFNwZWNzLnNwYWNlclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC1zaXplXCJdID0gbS51dGlscy5weCgxNykgKyBcInB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNDAwXG5cdFx0XHRcdFx0XHRcdFx0aWYgc2Vjb25kQXJyYXlbaW5kZXhdID09IFwiaGlkZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0c2hpZnRJY29uMi52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdFx0bnVtS2V5Mi5odG1sID0gXCJBQkNcIlxuXHRcdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRyb3dJbmRleCA9IDBcblx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gMFxuXHRcdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDE5XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRcdFx0XHRcdFx0IyMgMm5kIFJvd1xuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDkgJiYgaW5kZXggPCAyMFxuXHRcdFx0XHRcdFx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChzZWNvbmRSb3dLZXlXaWR0aClcblx0XHRcdFx0XHRcdFx0XHRyb3dJbmRleCsrXG5cdFx0XHRcdFx0XHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGJvYXJkU3BlY3Mua2V5LndpZHRoXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDIwXG5cdFx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6W3NoaWZ0S2V5LCBtLnV0aWxzLnB0KGJvYXJkU3BlY3MuZXhwYW5kZWRTcGFjZXIpXX1cblx0XHRcdFx0XHRcdFx0XHRtLmxheW91dC5zZXQoKVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDE5XG5cdFx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5leHBhbmRlZEtleVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDIwXG5cdFx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6W2tleXNBcnJheVtpbmRleCAtIDFdLCBtLnV0aWxzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKV19XG5cdFx0XHRcdFx0XHRcdFx0bS5sYXlvdXQuc2V0KClcblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPiAyNFxuXHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cblxuXHRcdFx0XHQjIyBIYW5kbGUgbnVtIGtleXMgYW5kIHNoaWZ0IGtleXNcblx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gZmFsc2VcblxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpZiBtLmRldmljZS5uYW1lICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSAwXG5cdFx0XHRcdFx0cm93SW5kZXggPSAwXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkud2lkdGggPSBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPiA5ICYmIGluZGV4IDwgMTlcblx0XHRcdFx0XHRcdFx0a2V5LnggPSByb3dzTWFwWzFdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHNlY29uZFJvd0tleVdpZHRoKVxuXHRcdFx0XHRcdFx0XHRrZXkueSA9IHJvd3NNYXBbMV0ubWFyZ2luVG9wICsga2V5LmhlaWdodFxuXHRcdFx0XHRcdFx0XHRyb3dJbmRleCsrXG5cdFx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gc2Vjb25kUm93S2V5V2lkdGggKyBrZXkud2lkdGhcblx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDE5XG5cdFx0XHRcdFx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPj0gMTlcblx0XHRcdFx0XHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0XHRcdFx0XHRrZXkueCA9IHJvd3NNYXBbMl0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0XHRcdFx0XHRrZXkueSA9IHJvd3NNYXBbMl0ubWFyZ2luVG9wICsga2V5LmhlaWdodCAqIDJcblx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge31cblxuXHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRpZiBrZXkuaHRtbCA9PSBcInVuZG9cIiB8fCBcInJlZG9cIlxuXHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5rZXkud2lkdGhcblx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IG0udXRpbHMucHgoMjUpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDMwMFxuXHRcdFx0XHRcdGtleS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGtleS5uYW1lID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdGtleS5odG1sID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdGlmIGluZGV4ID4gMjVcblx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiXCJcblx0XHRcdFx0c2hpZnRJY29uLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCJcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0IyMgRU1PSkkgS0VZXG5cblx0ZW1vamlLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImVtb2ppXCIsIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdGVtb2ppS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbUVkZ2VzOm51bUtleSwgbGVhZGluZzpbbnVtS2V5LCA2XSlcblx0ZW1vamlJY29uID0gbmV3IExheWVyIHdpZHRoOnN2Z0Vtb2ppLndpZHRoLCBoZWlnaHQ6c3ZnRW1vamkuaGVpZ2h0LCBzdXBlckxheWVyOmVtb2ppS2V5LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmJvYXJkU3BlY3MuZW1vamlJY29uLngsIHk6Ym9hcmRTcGVjcy5lbW9qaUljb24ueVxuXHRlbW9qaUljb24uaHRtbCA9IHN2Z0Vtb2ppLnN2Z1xuXG5cblxuXHQjIyBSRVRVUk4gS0VZXG5cblx0cmV0dXJuS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czptLnV0aWxzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6bS51dGlscy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvciksIHNoYWRvd1k6bS51dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcInJldHVyblwiLCB3aWR0aDpib2FyZFNwZWNzLnJldHVybktleSwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRpZiBzZXR1cC5yZXR1cm5Db2xvciAhPSBcImxpZ2h0LWtleVwiXG5cdFx0cmV0dXJuS2V5LmNvbG9yID0gZXhwb3J0cy5zZXRUZXh0Q29sb3IobS51dGlscy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvcikpXG5cdGlmIG0uZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCJcblx0XHRyZXR1cm5LZXkuY29uc3RyYWludHMgPSAodHJhaWxpbmdFZGdlczpkZWxldGVLZXksIHRvcDptLnV0aWxzLnB0KGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzIgKyBib2FyZFNwZWNzLmtleS5oZWlnaHQpIClcblx0ZWxzZVxuXHRcdHJldHVybktleS5jb25zdHJhaW50cyA9ICh0cmFpbGluZzptLnV0aWxzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKS8yLCBib3R0b21FZGdlczpudW1LZXkpXG5cdHJldHVybktleS5odG1sID0gc2V0dXAucmV0dXJuVGV4dFxuXHRyZXR1cm5LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IG0udXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICsgXCJweFwiXG5cblx0fVxuXHRtLmxheW91dC5zZXQoKVxuXG5cdHN0b3JlZFRleHRDb2xvciA9IHJldHVybktleS5jb2xvclxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0cmV0dXJuS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdHJldHVybktleS5jb2xvciA9IG0udXRpbHMuY29sb3IoXCJibGFja1wiKVxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKHNldHVwLnJldHVybkNvbG9yKVxuXHRcdHJldHVybktleS5jb2xvciA9IHN0b3JlZFRleHRDb2xvclxuXG5cdGJvYXJkLmtleXMucmV0dXJuID0gcmV0dXJuS2V5XG5cblxuXHQjIyBTUEFDRSBLRVlcblxuXHRzcGFjZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgc2hhZG93WTptLnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiLCBuYW1lOlwic3BhY2VcIiwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXG5cdGlmIG0uZGV2aWNlLm5hbWUgIT0gXCJpcGFkXCJcblx0XHRzcGFjZUtleS5jb25zdHJhaW50cyA9IChib3R0b21FZGdlczpudW1LZXksIGxlYWRpbmc6W2Vtb2ppS2V5LCBtLnV0aWxzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKV0sIHRyYWlsaW5nOltyZXR1cm5LZXksIGJvYXJkU3BlY3Muc3BhY2VyXSlcblx0XHRzcGFjZUtleS5odG1sID0gXCJzcGFjZVwiXG5cdFx0c3BhY2VLZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogbS51dGlscy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdFx0fVxuXHRlbHNlXG5cdFx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltlbW9qaUtleSwgbS51dGlscy5wdChib2FyZFNwZWNzLnNwYWNlcildLCB0cmFpbGluZzpbbnVtS2V5MiwgYm9hcmRTcGVjcy5zcGFjZXJdKVxuXHRib2FyZC5rZXlzW1wiJm5ic3A7XCJdID0gc3BhY2VLZXlcblx0Ym9hcmQua2V5cy5zcGFjZSA9IHNwYWNlS2V5XG5cdG0ubGF5b3V0LnNldCgpXG5cblxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBtLnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cblx0c3BhY2VLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNwYWNlS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0QG5ld1RleHQgPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sICsgXCImbmJzcDtcIlxuXHRcdFx0bS51dGlscy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblxuXHRyZXR1cm4gYm9hcmRcbiIsIiMgVXRpbHNcblxubSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0YW5pbWF0aW9uczoge1xuXHRcdHRhcmdldDp1bmRlZmluZWRcblx0XHRjb25zdHJhaW50czogdW5kZWZpbmVkXG5cdFx0Y3VydmUgOiBcImVhc2UtaW4tb3V0XCJcblx0XHRjdXJ2ZU9wdGlvbnM6IHVuZGVmaW5lZFxuXHRcdHRpbWU6MVxuXHRcdGRlbGF5OjBcblx0XHRyZXBlYXQ6dW5kZWZpbmVkXG5cdFx0Y29sb3JNb2RlbDp1bmRlZmluZWRcblx0XHRzdGFnZ2VyOnVuZGVmaW5lZFxuXHRcdGZhZGVPdXQ6ZmFsc2Vcblx0XHRmYWRlSW46ZmFsc2Vcblx0fVxufVxuXG5sYXlvdXQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0dGFyZ2V0TGF5ZXJzID0gW11cblx0Ymx1ZXByaW50ID0gW11cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zW2ldXG5cblx0aWYgc2V0dXAudGFyZ2V0XG5cdFx0aWYgc2V0dXAudGFyZ2V0Lmxlbmd0aFxuXHRcdFx0dGFyZ2V0TGF5ZXJzID0gc2V0dXAudGFyZ2V0XG5cdFx0ZWxzZVxuXHRcdFx0dGFyZ2V0TGF5ZXJzLnB1c2ggc2V0dXAudGFyZ2V0XG5cdGVsc2Vcblx0XHR0YXJnZXRMYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cblx0aWYgc2V0dXAudGFyZ2V0XG5cdFx0aWYgc2V0dXAuY29uc3RyYWludHNcblx0XHRcdGZvciBuZXdDb25zdHJhaW50IGluIE9iamVjdC5rZXlzKHNldHVwLmNvbnN0cmFpbnRzKVxuXHRcdFx0XHRzZXR1cC50YXJnZXQuY29uc3RyYWludHNbbmV3Q29uc3RyYWludF0gPSBzZXR1cC5jb25zdHJhaW50c1tuZXdDb25zdHJhaW50XVxuXG5cblx0I1RyYW5zbGF0ZSBuZXcgY29uc3RyYWludHNcblx0Zm9yIGxheWVyLCBpbmRleCBpbiB0YXJnZXRMYXllcnNcblx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSB7fVxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzXG5cblx0XHRcdHByb3BzID0ge31cblx0XHRcdGxheWVyLnN1cGVyRnJhbWUgPSB7fVxuXG5cdFx0XHRpZiBsYXllci5zdXBlckxheWVyXG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0ID0gbGF5ZXIuc3VwZXJMYXllci5oZWlnaHRcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS53aWR0aCA9IGxheWVyLnN1cGVyTGF5ZXIud2lkdGhcblx0XHRcdGVsc2Vcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgPSBtLmRldmljZS5oZWlnaHRcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS53aWR0aCA9IG0uZGV2aWNlLndpZHRoXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkICYmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGggPSB7fVxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgIT0gdW5kZWZpbmVkICYmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodCA9IHt9XG5cblx0XHRcdCMgU2l6ZSBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMud2lkdGggIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy53aWR0aClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHMud2lkdGggPSBsYXllci53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5oZWlnaHQgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLmhlaWdodCA9IG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0KVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5oZWlnaHRcblxuXHRcdFx0IyBQb3NpdGlvbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0I0lmIGl0J3MgYSBudW1iZXJgXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMubGVhZGluZywgMTApXG5cdFx0XHRcdFx0cHJvcHMueCA9IG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMubGVhZGluZylcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1swXS5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGggKyBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMV0pXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguc3RhcnRYID0gcHJvcHMueFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0I0lmIGl0J3MgYSBudW1iZXJcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC0gbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy50cmFpbGluZykgLSBwcm9wcy53aWR0aFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnggLSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzFdKSAtIHByb3BzLndpZHRoXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguY2FsY3VsYXRlZFBvc2l0aW9uWCA9IHByb3BzLnhcblxuXHRcdFx0XHQjI3BlcmZvcm0gYXV0b3NpemVcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFhcblx0XHRcdFx0cHJvcHMud2lkdGggPSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguY2FsY3VsYXRlZFBvc2l0aW9uWCAtIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFggKyBwcm9wcy53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50b3AsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnkgPSBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRvcClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcC5jYWxjdWxhdGVkUG9zaXRpb24ueSArIGxheWVyLmNvbnN0cmFpbnRzLnRvcC5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0XG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHQgKyBtLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRvcFsxXSlcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSA9IHByb3BzLnlcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5ib3R0b20sIDEwKVxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAtIG0udXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tKSAtIHByb3BzLmhlaWdodFxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b20uY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSBwcm9wcy5oZWlnaHRcblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b21bMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSAgbS51dGlscy5weChsYXllci5jb25zdHJhaW50cy5ib3R0b21bMV0pIC0gcHJvcHMuaGVpZ2h0XG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5jYWxjdWxhdGVkUG9zaXRpb25ZID0gcHJvcHMueVxuXHRcdFx0XHQjIyBwZXJmb3JtIGF1dG9zaXplXG5cdFx0XHRcdHByb3BzLmhlaWdodCA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuY2FsY3VsYXRlZFBvc2l0aW9uWSAtIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuc3RhcnRZICsgcHJvcHMuaGVpZ2h0XG5cdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WVxuXG5cblx0XHRcdCMgQWxpZ25tZW50IGNvbnN0cmFpbnRzXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiAhPSB1bmRlZmluZWRcblx0XHRcdFx0I1NldCB0aGUgY2VudGVyaW5nIGZyYW1lXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLnN1cGVyRnJhbWUud2lkdGggLyAyIC0gcHJvcHMud2lkdGggLyAyXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0IC8gMiAtIHByb3BzLmhlaWdodCAvIDJcblxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiA9PSBcImNlbnRlclwiXG5cdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLnN1cGVyRnJhbWUud2lkdGggLyAyIC0gcHJvcHMud2lkdGggLyAyXG5cdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0IC8gMiAtIHByb3BzLmhlaWdodCAvIDJcblxuXG5cdFx0XHQjIENlbnRlcmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyAobGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGggLSBwcm9wcy53aWR0aCkgLyAyXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyAobGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodCAtIHByb3BzLmhlaWdodCkgLyAyXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueCArIChsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoIC0gcHJvcHMud2lkdGgpIC8gMlxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgKGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0IC0gcHJvcHMuaGVpZ2h0KSAvIDJcblxuXHRcdFx0IyBBbGlnbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi54XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nRWRnZXMgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi54IC0gcHJvcHMud2lkdGggKyBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aFxuXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcEVkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudG9wRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnlcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueSAtIHByb3BzLmhlaWdodCArIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHRcblxuXG5cdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSBwcm9wc1xuXHRcdGVsc2Vcblx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbiA9IGxheWVyLnByb3BzXG5cblx0XHRibHVlcHJpbnQucHVzaCBsYXllclxuXG5cblx0cmV0dXJuIGJsdWVwcmludFxuXG5leHBvcnRzLnNldCA9IChhcnJheSkgLT5cblx0c2V0dXAgPSB7fVxuXHRwcm9wcyA9IHt9XG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGJsdWVwcmludCA9IGxheW91dChhcnJheSlcblxuXHRmb3IgbGF5ZXIsIGluZGV4IGluIGJsdWVwcmludFxuXHRcdGZvciBrZXkgaW4gT2JqZWN0LmtleXMobGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uKVxuXHRcdFx0bGF5ZXJba2V5XSA9IGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbltrZXldXG5cbmV4cG9ydHMuYW5pbWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSB7fVxuXHRwcm9wcyA9IHt9XG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGJsdWVwcmludCA9IGxheW91dChhcnJheSlcblxuXHRmb3IgbGF5ZXIsIGluZGV4IGluIGJsdWVwcmludFxuXHRcdCNUaW1pbmdcblx0XHRkZWxheSA9IHNldHVwLmRlbGF5XG5cdFx0aWYgc2V0dXAuc3RhZ2dlclxuXHRcdFx0c3RhZyA9IHNldHVwLnN0YWdnZXJcblx0XHRcdGRlbGF5ID0gKChpbmRleCkgKiBzdGFnKSArIGRlbGF5XG5cblx0XHRpZiBzZXR1cC5mYWRlT3V0XG5cdFx0XHRpZiBsYXllciA9PSBzZXR1cC5mYWRlT3V0XG5cdFx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5vcGFjaXR5ID0gMFxuXG5cdFx0aWYgc2V0dXAuZmFkZUluXG5cdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24ub3BhY2l0eSA9IDFcblxuXHRcdGxheWVyLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uXG5cdFx0XHR0aW1lOnNldHVwLnRpbWVcblx0XHRcdGRlbGF5OmRlbGF5XG5cdFx0XHRjdXJ2ZTpzZXR1cC5jdXJ2ZVxuXHRcdFx0cmVwZWF0OnNldHVwLnJlcGVhdFxuXHRcdFx0Y29sb3JNb2RlbDpzZXR1cC5jb2xvck1vZGVsXG5cdFx0XHRjdXJ2ZU9wdGlvbnM6c2V0dXAuY3VydmVPcHRpb25zXG5cblx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSBwcm9wc1xuIiwibSA9IHJlcXVpcmUgXCJtYXRlcmlhbC1raXRcIlxuXG4jIEJ1aWxkIExpYnJhcnkgIFByb3BlcnRpZXNcbmxheWVyID0gbmV3IExheWVyXG5leHBvcnRzLmxheWVyUHJvcHMgPSBPYmplY3Qua2V5cyhsYXllci5wcm9wcylcbmV4cG9ydHMubGF5ZXJQcm9wcy5wdXNoIFwic3VwZXJMYXllclwiXG5leHBvcnRzLmxheWVyUHJvcHMucHVzaCBcImNvbnN0cmFpbnRzXCJcbmV4cG9ydHMubGF5ZXJTdHlsZXMgPSBPYmplY3Qua2V5cyhsYXllci5zdHlsZSlcbmxheWVyLmRlc3Ryb3koKVxuXG5leHBvcnRzLmFzc2V0cyA9IHtcblx0aG9tZTpcIjxzdmcgd2lkdGg9JzE2cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMTcyIDE2IDE2IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz5cblx0XHQgICAgICAgIDxlbGxpcHNlIGlkPSdwYXRoLTEnIGN4PScxODAnIGN5PScyNCcgcng9JzgnIHJ5PSc4Jz48L2VsbGlwc2U+XG5cdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0yJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBmaWxsPSd3aGl0ZSc+XG5cdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHQgICAgICAgIDwvbWFzaz5cblx0XHQgICAgPC9kZWZzPlxuXHRcdCAgICA8dXNlIGlkPSdob21lJyBzdHJva2U9JyNGRkZGRkYnIG1hc2s9J3VybCgjbWFzay0yKScgc3Ryb2tlLXdpZHRoPSc0JyBmaWxsPSdub25lJyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHQ8L3N2Zz5cIlxuXHRiYWNrOlwiPHN2ZyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxOXB4JyB2aWV3Qm94PSczMDEgMTQgMTYgMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG4gICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgIDxkZWZzPjwvZGVmcz5cbiAgICA8cGF0aCBkPSdNMzA3LjAyOTM4MywxNy43NjcxNzMzIEMzMDcuNTgwMDI3LDE2LjgwMzU0NTMgMzA4LjUxMDI5MiwxNi43NzUwNzEzIDMwOS4xMTIwMjMsMTcuNzExMDk3NiBMMzE1Ljk0MDgwMiwyOC4zMzM2NDM1IEMzMTYuNTQwMzY4LDI5LjI2NjMwMTcgMzE2LjEzNjM1NCwzMC4wMjIzNzA2IDMxNS4wMjYzMDYsMzAuMDIyMzcwNiBMMzAyLjAyNjUxOSwzMC4wMjIzNzA2IEMzMDAuOTIxODkxLDMwLjAyMjM3MDYgMzAwLjQ2NzkyMywyOS4yNDk3MjggMzAxLjAyMzQ0MywyOC4yNzc1Njc5IEwzMDcuMDI5MzgzLDE3Ljc2NzE3MzMgWicgaWQ9J1RyaWFuZ2xlLTEnIHN0cm9rZT0nI0ZGRkZGRicgc3Ryb2tlLXdpZHRoPScyJyBmaWxsPSdub25lJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMDguNTAyMDIxLCAyMy41MjQzOTEpIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTMwOC41MDIwMjEsIC0yMy41MjQzOTEpICc+PC9wYXRoPlxuXHRcdDwvc3ZnPlwiXG5cdGNlbGx1bGFyOlwiPHN2ZyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PSczNSA0IDE2IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cbiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICA8ZGVmcz48L2RlZnM+XG4gICAgPGcgaWQ9J2NlbGx1bGFyJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzNS4wMDAwMDAsIDQuMDAwMDAwKSc+XG4gICAgICAgIDxwb2x5Z29uIGlkPSdib3VuZHMnIHBvaW50cz0nMCAwIDE2IDAgMTYgMTYgMCAxNic+PC9wb2x5Z29uPlxuICAgICAgICA8cG9seWdvbiBpZD0nU2hhcGUnIGZpbGw9JyMwMDAwMDAnIHBvaW50cz0nMCAxNSAxNCAxNSAxNCAxJz48L3BvbHlnb24+XG4gICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJhdHRlcnlIaWdoIDogXCI8c3ZnIHdpZHRoPSc5cHgnIGhlaWdodD0nMTRweCcgdmlld0JveD0nMyAxIDkgMTQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPjwvZGVmcz5cblx0ICAgIDxwb2x5Z29uIGlkPSdTaGFwZScgc3Ryb2tlPSdub25lJyBmaWxsPScjMDAwMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHBvaW50cz0nOSAxLjg3NSA5IDEgNiAxIDYgMS44NzUgMyAxLjg3NSAzIDE1IDEyIDE1IDEyIDEuODc1Jz48L3BvbHlnb24+XG5cdDwvc3ZnPlwiXG5cdGJhbm5lckJHIDoge1xuXHRcdFwiaXBob25lLTVcIjogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzMyMHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzMjAgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5pcGhvbmU1PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTUvNVMvNUMnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMMzIwLDAgTDMyMCw2OCBMMCw2OCBMMCwwIFogTTE0Miw2MS4wMDQ4ODE1IEMxNDIsNTkuODk3NjE2IDE0Mi44OTYyNzksNTkgMTQ0LjAwMjQsNTkgTDE3Ni45OTc2LDU5IEMxNzguMTAzNDk1LDU5IDE3OSw1OS44OTM4OTk4IDE3OSw2MS4wMDQ4ODE1IEwxNzksNjEuOTk1MTE4NSBDMTc5LDYzLjEwMjM4NCAxNzguMTAzNzIxLDY0IDE3Ni45OTc2LDY0IEwxNDQuMDAyNCw2NCBDMTQyLjg5NjUwNSw2NCAxNDIsNjMuMTA2MTAwMiAxNDIsNjEuOTk1MTE4NSBMMTQyLDYxLjAwNDg4MTUgWicgaWQ9J2lwaG9uZTUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnNcIjogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMzc1cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDM3NSA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZDwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjMuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU4LjAwMDAwMCwgNy4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwxNiBMMzc1LDE2IEwzNzUsODQgTDAsODQgTDAsMTYgWiBNMTY5LDc3LjAwNDg4MTUgQzE2OSw3NS44OTc2MTYgMTY5Ljg5NjI3OSw3NSAxNzEuMDAyNCw3NSBMMjAzLjk5NzYsNzUgQzIwNS4xMDM0OTUsNzUgMjA2LDc1Ljg5Mzg5OTggMjA2LDc3LjAwNDg4MTUgTDIwNiw3Ny45OTUxMTg1IEMyMDYsNzkuMTAyMzg0IDIwNS4xMDM3MjEsODAgMjAzLjk5NzYsODAgTDE3MS4wMDI0LDgwIEMxNjkuODk2NTA1LDgwIDE2OSw3OS4xMDYxMDAyIDE2OSw3Ny45OTUxMTg1IEwxNjksNzcuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nNDE0cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDQxNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kIENvcHk8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC00My4wMDAwMDAsIC03NC4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDQzLjAwMDAwMCwgNzQuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEw0MTQsMCBMNDE0LDY4IEwwLDY4IEwwLDAgWiBNMTg5LDYxLjAwNDg4MTUgQzE4OSw1OS44OTc2MTYgMTg5Ljg5NjI3OSw1OSAxOTEuMDAyNCw1OSBMMjIzLjk5NzYsNTkgQzIyNS4xMDM0OTUsNTkgMjI2LDU5Ljg5Mzg5OTggMjI2LDYxLjAwNDg4MTUgTDIyNiw2MS45OTUxMTg1IEMyMjYsNjMuMTAyMzg0IDIyNS4xMDM3MjEsNjQgMjIzLjk5NzYsNjQgTDE5MS4wMDI0LDY0IEMxODkuODk2NTA1LDY0IDE4OSw2My4xMDYxMDAyIDE4OSw2MS45OTUxMTg1IEwxODksNjEuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQtQ29weSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBhZFwiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nNzY4cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDc2OCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5pcGFkLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVBvcnRyYWl0JyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMNzY4LDAgTDc2OCw2OCBMMCw2OCBMMCwwIFogTTM2Niw2MS4wMDQ4ODE1IEMzNjYsNTkuODk3NjE2IDM2Ni44OTYyNzksNTkgMzY4LjAwMjQsNTkgTDQwMC45OTc2LDU5IEM0MDIuMTAzNDk1LDU5IDQwMyw1OS44OTM4OTk4IDQwMyw2MS4wMDQ4ODE1IEw0MDMsNjEuOTk1MTE4NSBDNDAzLDYzLjEwMjM4NCA0MDIuMTAzNzIxLDY0IDQwMC45OTc2LDY0IEwzNjguMDAyNCw2NCBDMzY2Ljg5NjUwNSw2NCAzNjYsNjMuMTA2MTAwMiAzNjYsNjEuOTk1MTE4NSBMMzY2LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcG9ydHJhaXQnPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGFkLXByb1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMTAyNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAxMDI0IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPHRpdGxlPmlwYWQtcHJvLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVByby1Qb3J0cmFpdCcgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDEwMjQsMCBMMTAyNCw2OCBMMCw2OCBMMCwwIFogTTQ5NCw2MS4wMDQ4ODE1IEM0OTQsNTkuODk3NjE2IDQ5NC44OTYyNzksNTkgNDk2LjAwMjQsNTkgTDUyOC45OTc2LDU5IEM1MzAuMTAzNDk1LDU5IDUzMSw1OS44OTM4OTk4IDUzMSw2MS4wMDQ4ODE1IEw1MzEsNjEuOTk1MTE4NSBDNTMxLDYzLjEwMjM4NCA1MzAuMTAzNzIxLDY0IDUyOC45OTc2LDY0IEw0OTYuMDAyNCw2NCBDNDk0Ljg5NjUwNSw2NCA0OTQsNjMuMTA2MTAwMiA0OTQsNjEuOTk1MTE4NSBMNDk0LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcHJvLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHR9XG5cdHdpZmk6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cbjxzdmcgd2lkdGg9JzE4cHgnIGhlaWdodD0nMTRweCcgdmlld0JveD0nMCAwIDE4IDE0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cbiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPlxuICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgIDxkZWZzPjwvZGVmcz5cbiAgICA8ZyBpZD0nTWF0ZXJpYWwtRGVzaWduLVN5bWJvbHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuICAgICAgICA8ZyBpZD0nTWF0ZXJpYWwvQW5kcm9pZC9TdGF0dXMtYmFyLWNvbnRlbnQtbGlnaHQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyMwMDAwMDAnPlxuICAgICAgICAgICAgPGcgaWQ9J3dpZmknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0LjAwMDAwMCwgNC4wMDAwMDApJz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTkuMDIyNjI3OSw0LjAxNTkzMTIzIEMxNi41MTE3ODA5LDIuMTIyNTYzODIgMTMuMzg2OTg0OSwxIDEwLDEgQzYuNjEzMDE1MTMsMSAzLjQ4ODIxOTA4LDIuMTIyNTYzODIgMC45NzczNzIwODUsNC4wMTU5MzEyMyBMMTAsMTUgTDE5LjAyMjYyNzksNC4wMTU5MzEyMyBaJyBpZD0nU2hhcGUnPjwvcGF0aD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgIDwvZz5cbjwvc3ZnPlwiXG5cdHNpZ25hbEhpZ2g6IFwiXG48c3ZnIHdpZHRoPScxNHB4JyBoZWlnaHQ9JzE0cHgnIHZpZXdCb3g9JzAgMSAxNCAxNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cbiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgPGRlZnM+PC9kZWZzPlxuICAgIDxwb2x5Z29uIGlkPSdTaGFwZScgc3Ryb2tlPSdub25lJyBmaWxsPScjRkZGRkZGJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHBvaW50cz0nMCAxNSAxNCAxNSAxNCAxJz48L3BvbHlnb24+XG48L3N2Zz5cIlxuXHRhY3Rpdml0eTogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE2cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE2IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+U29jY2VyIEJhbGw8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+XG5cdFx0XHRcdFx0PGNpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0XHQ8L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE3OS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nU29jY2VyLUJhbGwnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE3OS4wMDAwMDAsIDYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PG1hc2sgaWQ9J21hc2stMicgc2tldGNoOm5hbWU9J01hc2snIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0XHRcdFx0XHQ8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0XHRcdFx0XHQ8L21hc2s+XG5cdFx0XHRcdFx0XHRcdDx1c2UgaWQ9J01hc2snIHN0cm9rZT0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDEyLjEyMDMwNDYgTDEyLjg1NzMzODQsOCBMMTMuMzcyMzc2NSw4Ljg1NzE2NzMgTDYuNTE1MDM4MDcsMTIuOTc3NDcxOSBMNiwxMi4xMjAzMDQ2IEw2LDEyLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00NycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS44NDk2NDgsOC43MjYwNTUxIEwxOS4xMDAxMTAzLDUuMzQ1MTA5MDEgTDE5LjUyMjcyODUsNi4yNTE0MTY4IEwxMi4yNzIyNjYyLDkuNjMyMzYyODkgTDExLjg0OTY0OCw4LjcyNjA1NTEgTDExLjg0OTY0OCw4LjcyNjA1NTEgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNiwzLjEyMDMwNDYgTDEyLjg1NzMzODQsLTEgTDEzLjM3MjM3NjUsLTAuMTQyODMyNjk5IEw2LjUxNTAzODA3LDMuOTc3NDcxOSBMNiwzLjEyMDMwNDYgTDYsMy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTS0xLDcuMTIwMzA0NiBMNS44NTczMzg0MSwzIEw2LjM3MjM3NjQ4LDMuODU3MTY3MyBMLTAuNDg0OTYxOTI1LDcuOTc3NDcxOSBMLTEsNy4xMjAzMDQ2IEwtMSw3LjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzQnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzUnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PScxMS41JyB5PSczJyB3aWR0aD0nMScgaGVpZ2h0PScxMic+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSw0Ljg1NzE2NzMgTDExLjg1NzMzODQsOC45Nzc0NzE5IEwxMi4zNzIzNzY1LDguMTIwMzA0NiBMNS41MTUwMzgwNyw0IEw1LDQuODU3MTY3MycgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsMTIuODU3MTY3MyBMMTEuODU3MzM4NCwxNi45Nzc0NzE5IEwxMi4zNzIzNzY1LDE2LjEyMDMwNDYgTDUuNTE1MDM4MDcsMTIgTDUsMTIuODU3MTY3MycgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTUnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMScgZmlsbD0nI0Q4RDhEOCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xLUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNy40NTc3MTE4OSwzLjE5NTA0NzM5IEw3LjM1NTE0NDg0LDYuMTMyMTgzMzMgTDQuNTMwMDY3Niw2Ljk0MjI2MTIgTDIuODg2NjQwODksNC41MDU3ODA5IEw0LjY5NjAyNDU3LDIuMTg5ODc1NDEgTDcuNDU3NzExODksMy4xOTUwNDczOScgaWQ9J1BvbHlnb24tMS1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNy40NTc3MTE4OSwxMS4xOTUwNDc0IEw3LjM1NTE0NDg0LDE0LjEzMjE4MzMgTDQuNTMwMDY3NiwxNC45NDIyNjEyIEwyLjg4NjY0MDg5LDEyLjUwNTc4MDkgTDQuNjk2MDI0NTcsMTAuMTg5ODc1NCBMNy40NTc3MTE4OSwxMS4xOTUwNDc0JyBpZD0nUG9seWdvbi0xLUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xNC41NDMxNzAxLDAuMDcyNTkzOTMxNCBMMTQuNDQwNjAzMSwzLjAwOTcyOTg4IEwxMS42MTU1MjU4LDMuODE5ODA3NzQgTDkuOTcyMDk5MTIsMS4zODMzMjc0NSBMMTEuNzgxNDgyOCwtMC45MzI1NzgwNSBMMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQnIGlkPSdQb2x5Z29uLTEtQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGFuaW1hbHM6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkdyb3VwPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTE3LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J2ljX0Zvb2QnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDExOC4wMDAwMDAsIDY0MC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J0dyb3VwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS42ODM3NzUzNywxLjM4MTU2NjQ2IEM2LjIzOTI2MDY2LDEuMTM2MjQgNi44NTM3MjAwNSwxIDcuNSwxIEM4LjE0NjI3OTk1LDEgOC43NjA3MzkzNCwxLjEzNjI0IDkuMzE2MjI0NjMsMS4zODE1NjY0NiBDOS44MDg3OTI3NSwwLjU2MjM1OTAxOSAxMC44MjU1ODg4LDAgMTIsMCBDMTMuNjU2ODU0MiwwIDE1LDEuMTE5Mjg4MTMgMTUsMi41IEMxNSwzLjU1NzEzOTggMTQuMjEyNjI0Niw0LjQ2MTAyODQzIDEzLjA5OTkyMjYsNC44MjY2MjUxNCBDMTQuMjQ5NjUyOCw1LjY0MTg1NDIyIDE1LDYuOTgzMzAwNjIgMTUsOC41IEMxNSwxMC43MTY3MTQ0IDEzLjM5NzE4NzMsMTIuNTU5MDcxOSAxMS4yODcyNjcxLDEyLjkzMTM2NzMgQzEwLjQ4NjcyNDgsMTQuMTc1NzcwMyA5LjA4OTYxNjk2LDE1IDcuNSwxNSBDNS45MTAzODMwNCwxNSA0LjUxMzI3NTI0LDE0LjE3NTc3MDMgMy43MTI3MzI5MSwxMi45MzEzNjczIEMxLjYwMjgxMjY4LDEyLjU1OTA3MTkgMCwxMC43MTY3MTQ0IDAsOC41IEMwLDYuOTgzMzAwNjIgMC43NTAzNDcyNDQsNS42NDE4NTQyMiAxLjkwMDA3NzQxLDQuODI2NjI1MTQgQzAuNzg3Mzc1NDQ1LDQuNDYxMDI4NDMgMCwzLjU1NzEzOTggMCwyLjUgQzAsMS4xMTkyODgxMyAxLjM0MzE0NTc1LDAgMywwIEM0LjE3NDQxMTIyLDAgNS4xOTEyMDcyNSwwLjU2MjM1OTAxOSA1LjY4Mzc3NTM3LDEuMzgxNTY2NDYgWicgaWQ9J092YWwtOCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjczODM0MjI4LDEyIEM1Ljg2MjkwOTc5LDEyIDYuMTQ2NDIzNTMsMTIgNi4xNDY0MjM1MywxMiBDNi4xNDY0MjM1MywxMiA2LjQzMjE1Njk2LDEyLjQ0MjYxMjMgNi41MjQ2NTgyLDEyLjQ5MTk3MzkgQzYuNjY0NTU2MDEsMTIuNTY2NjI3NyA3LDEyLjQ5MTk3MzkgNywxMi40OTE5NzM5IEw3LDEyIEw4LDEyIEw4LDEyLjQ5MTk3MzkgTDguNDk3OTkyMjgsMTIuNDkxOTczOSBMOC44NDMwMTc2OSwxMiBMOS4zOTE4NDU3LDEyIEM5LjM5MTg0NTcsMTIgOC45OTU5ODQ1NywxMi45ODM5NDc4IDguNDk3OTkyMjgsMTIuOTgzOTQ3OCBMNi42MDcwMjQwNywxMi45ODM5NDc4IEM2LjIxNDA0ODEzLDEyLjk4Mzk0NzggNS40NTk5NjA5NCwxMiA1LjczODM0MjI4LDEyIFonIGlkPSdSZWN0YW5nbGUtNDQtQ29weS0yJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nT3ZhbC0xNCcgY3g9JzEwLjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nT3ZhbC0xNC1Db3B5JyBjeD0nNC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMi42OTk5OTY5LDUgQzEyLjY5OTk5NjksMy4wNjcwMDMzOCAxMS4xMzI5OTM2LDEuNSA5LjE5OTk5Njk1LDEuNScgaWQ9J092YWwtMTYnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS41LDUgQzUuNSwzLjA2NzAwMzM4IDMuOTMyOTk2NjIsMS41IDIsMS41JyBpZD0nT3ZhbC0xNi1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjc1MDAwMCwgMy4yNTAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMuNzUwMDAwLCAtMy4yNTAwMDApICc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNDQtQ29weScgeD0nNycgeT0nMTEnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNiwxMCBMNi41LDEwIEw2LjQ5OTk5OTk5LDkuNSBMOC41MDAwMDAwNSw5LjUgTDguNTAwMDAwMDUsMTAgTDksMTAgTDksMTAuNSBMOC41LDEwLjUgTDguNSwxMSBMNi41LDExIEw2LjUsMTAuNSBMNiwxMC41IEw2LDEwIFonIGlkPSdQYXRoJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGNoZXZyb24gOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzEzcHgnIGhlaWdodD0nMjJweCcgdmlld0JveD0nMCAwIDEzIDIyJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5CYWNrIENoZXZyb248L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHQgICAgICAgIDxnIGlkPSdOYXZpZ2F0aW9uLUJhci9CYWNrJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtOC4wMDAwMDAsIC0zMS4wMDAwMDApJyBmaWxsPScjMDA3NkZGJz5cblx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNOC41LDQyIEwxOSwzMS41IEwyMSwzMy41IEwxMi41LDQyIEwyMSw1MC41IEwxOSw1Mi41IEw4LjUsNDIgWicgaWQ9J0JhY2stQ2hldnJvbic+PC9wYXRoPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0ZW1vamkgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMjBweCcgdmlld0JveD0nMCAwIDIwIDIwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5FbW9qaTwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02MC4wMDAwMDAsIC0xODEuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J0JvdHRvbS1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxNzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNjYuNzUsMzAuNSBDNzIuMTM0Nzc2MywzMC41IDc2LjUsMjYuMTM0Nzc2MyA3Ni41LDIwLjc1IEM3Ni41LDE1LjM2NTIyMzcgNzIuMTM0Nzc2MywxMSA2Ni43NSwxMSBDNjEuMzY1MjIzNywxMSA1NywxNS4zNjUyMjM3IDU3LDIwLjc1IEM1NywyNi4xMzQ3NzYzIDYxLjM2NTIyMzcsMzAuNSA2Ni43NSwzMC41IFogTTY2Ljc1LDI5LjUgQzcxLjU4MjQ5MTYsMjkuNSA3NS41LDI1LjU4MjQ5MTYgNzUuNSwyMC43NSBDNzUuNSwxNS45MTc1MDg0IDcxLjU4MjQ5MTYsMTIgNjYuNzUsMTIgQzYxLjkxNzUwODQsMTIgNTgsMTUuOTE3NTA4NCA1OCwyMC43NSBDNTgsMjUuNTgyNDkxNiA2MS45MTc1MDg0LDI5LjUgNjYuNzUsMjkuNSBaIE02My43NSwxOSBDNjQuNDQwMzU1OSwxOSA2NSwxOC40NDAzNTU5IDY1LDE3Ljc1IEM2NSwxNy4wNTk2NDQxIDY0LjQ0MDM1NTksMTYuNSA2My43NSwxNi41IEM2My4wNTk2NDQxLDE2LjUgNjIuNSwxNy4wNTk2NDQxIDYyLjUsMTcuNzUgQzYyLjUsMTguNDQwMzU1OSA2My4wNTk2NDQxLDE5IDYzLjc1LDE5IFogTTY5Ljc1LDE5IEM3MC40NDAzNTU5LDE5IDcxLDE4LjQ0MDM1NTkgNzEsMTcuNzUgQzcxLDE3LjA1OTY0NDEgNzAuNDQwMzU1OSwxNi41IDY5Ljc1LDE2LjUgQzY5LjA1OTY0NDEsMTYuNSA2OC41LDE3LjA1OTY0NDEgNjguNSwxNy43NSBDNjguNSwxOC40NDAzNTU5IDY5LjA1OTY0NDEsMTkgNjkuNzUsMTkgWiBNNTkuODg3NjMzNCwyMi4xNjQxNDQ0IEM1OS42MzkwMzE2LDIxLjM4MzEzNCA2MC4wNjU5MTgsMjAuOTc4NTE1NiA2MC44NTMwOTUxLDIxLjIzMjkzMDQgQzYwLjg1MzA5NTEsMjEuMjMyOTMwNCA2My4wOTM3NTAzLDIyLjIxMjUgNjYuNzUwMDAwMSwyMi4yMTI1IEM3MC40MDYyNDk5LDIyLjIxMjUgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCBDNzMuNDI4NzE2MiwyMC45NjYyMTUzIDczLjg4MTI0NjMsMjEuNDA0NDA5NyA3My42MDU4NDc3LDIyLjE4MDc0MzcgQzczLjYwNTg0NzcsMjIuMTgwNzQzNyA3Mi42LDI3LjU3NSA2Ni43NSwyNy41NzUgQzYwLjksMjcuNTc1IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCA1OS44ODc2MzM0LDIyLjE2NDE0NDQgWiBNNjYuNzUsMjMuMTg3NSBDNjQuMDY4NzUsMjMuMTg3NSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgNjEuODU0NDA1NSwyMi40NzM3ODIxIEM2MS4zMjczMDE5LDIyLjMyOTQ4IDYxLjE3ODEyMzMsMjIuNTcyMTYxNSA2MS41NjM5NTU1LDIyLjk1NzA3NSBDNjEuNTYzOTU1NSwyMi45NTcwNzUgNjIuMzYyNSwyNC42NSA2Ni43NSwyNC42NSBDNzEuMTM3NSwyNC42NSA3MS45NTA4NTAzLDIyLjk0MzgzMDQgNzEuOTUwODUwMywyMi45NDM4MzA0IEM3Mi4zMDkzNjU5LDIyLjUzOTkyNzggNzIuMTY5MDc5MywyMi4zMzU5ODQ0IDcxLjYzNTQyNzMsMjIuNDc2MzQ5IEM3MS42MzU0MjczLDIyLjQ3NjM0OSA2OS40MzEyNSwyMy4xODc1IDY2Ljc1LDIzLjE4NzUgWicgaWQ9J0Vtb2ppJz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0ZGVsZXRlOiB7XG5cdFx0b24gOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScyNHB4JyBoZWlnaHQ9JzE4cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0b2ZmIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyNHB4JyBoZWlnaHQ9JzE4cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWiBNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzguNzA5NzIsMjEuNzA5NzE5NSBDMzM4LjMxNzc1MiwyMS4zMTc3NTIyIDMzOC4zMTg5NjUsMjAuNjgxMDM0OSAzMzguNzA5NzIsMjAuMjkwMjgwNSBMMzQ0LjY0MzI0NSwxNC4zNTY3NTQ3IEMzNDQuODQwMjc2LDE0LjE1OTcyNDUgMzQ1LjIyNTYzOSwxNCAzNDUuNDkzNzQxLDE0IEwzNTUuOTk3MjM5LDE0IEMzNTcuMTAzMzMzLDE0IDM1Ny45OTk5OTksMTQuODk3MDYwMSAzNTcuOTk5OTk5LDE2LjAwNTg1ODYgTDM1Ny45OTk5OTksMjUuOTk0MTQxMiBDMzU3Ljk5OTk5OSwyNy4xMDE5NDY0IDM1Ny4xMDY0NTcsMjcuOTk5OTk5OSAzNTUuOTk3MjM5LDI3Ljk5OTk5OTkgTDM0NS40OTM3NDEsMjggQzM0NS4yMjEwNTYsMjggMzQ0Ljg0MDY0MywyNy44NDA2NDMxIDM0NC42NDMyNDYsMjcuNjQzMjQ1MyBMMzM4LjcwOTcyLDIxLjcwOTcxOTUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHR9XG5cdGZvb2QgOiAgXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+Rm9vZDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQ4LjAwMDAwMCwgLTYzNy4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGb29kJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyMjkuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSwxNS41IEwxLDE1LjUgTDAsNSBMNi41LDUgTDYuMjYzNjA5MzMsNy40ODIxMDIwMicgaWQ9J0RyaW5rJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNi4wMTA3NzU0NSwxLjk2OTMwMDk4IEw2LjUxNTcxMzUyLDUuMjIyNzA1MzkgTDUuNzE5MDgxODQsNS42Nzk0NzgxMiBMNS4wMzg5MDA5LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMS45NjkzMDA5OCBMNC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMS45NjkzMDA5OCBMNi4wMTA3NzU0NSwxLjk2OTMwMDk4IFonIGlkPSdTdHJhdycgZmlsbD0nIzRBNTQ2MScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNi44NTU1NzIsIDMuMzI0MzkwKSByb3RhdGUoMjQuMDAwMDAwKSB0cmFuc2xhdGUoLTYuODU1NTcyLCAtMy4zMjQzOTApICc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdCb3R0b20tQnVuJyBzdHJva2U9JyM0QTU0NjEnIHg9JzMnIHk9JzE0JyB3aWR0aD0nMTAuNScgaGVpZ2h0PScxLjUnIHJ4PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEuNSwxMi41MDI0NDA4IEMxLjUsMTEuOTQ4ODA4IDEuOTQ5MTY5MTYsMTEuNSAyLjQ5MjY4NzIzLDExLjUgTDE0LjAwNzMxMjgsMTEuNSBDMTQuNTU1NTU4OCwxMS41IDE1LDExLjk0Njk0OTkgMTUsMTIuNTAyNDQwOCBMMTUsMTIuOTk3NTU5MiBDMTUsMTMuNTUxMTkyIDE0LjU1MDgzMDgsMTQgMTQuMDA3MzEyOCwxNCBMMi40OTI2ODcyMywxNCBDMS45NDQ0NDEyMSwxNCAxLjUsMTMuNTUzMDUwMSAxLjUsMTIuOTk3NTU5MiBMMS41LDEyLjUwMjQ0MDggWiBNMy45MzMwMDAwMywxMS44MzkyNzI3IEMzLjQxNzcxODM0LDExLjY1MTg5NzYgMy40NDQ4MzY5NywxMS41IDMuOTk1NTc3NSwxMS41IEwxMy4wMDQ0MjI1LDExLjUgQzEzLjU1NDI2NDgsMTEuNSAxMy41ODY2MDYxLDExLjY1MDMyNTEgMTMuMDY3LDExLjgzOTI3MjcgTDguNSwxMy41IEwzLjkzMzAwMDAzLDExLjgzOTI3MjcgWicgaWQ9JyZxdW90O1BhdHR5JnF1b3Q7JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIuNSwxMC41IEwxMy41LDEwLjUgTDE1LDExLjUgTDEsMTEuNSBMMi41LDEwLjUgWicgaWQ9J0NoZWVzZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LjI1LDEwLjUgQzExLjQyNTYzNzMsMTAuNSAxNCwxMC4zMjg0MjcxIDE0LDkuNSBDMTQsOC42NzE1NzI4OCAxMS40MjU2MzczLDggOC4yNSw4IEM1LjA3NDM2MjY5LDggMi41LDguNjcxNTcyODggMi41LDkuNSBDMi41LDEwLjMyODQyNzEgNS4wNzQzNjI2OSwxMC41IDguMjUsMTAuNSBaJyBpZD0nVG9wLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzUnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZmxhZ3M6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxMXB4JyBoZWlnaHQ9JzE1cHgnIHZpZXdCb3g9JzAgMCAxMSAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkZsYWc8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI3NS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nRmxhZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjc1LjAwMDAwMCwgMjMxLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdQb2xlJyBmaWxsPScjNEE1NDYxJyB4PScwJyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxNCc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xLDEgQzEsMSAxLjI1LDIgMy41LDIgQzUuNzUsMiA2LDAuNzQ5OTk5OTk4IDgsMC43NSBDMTAsMC43NDk5OTk5OTggMTAsMS41IDEwLDEuNSBMMTAsNy41IEMxMCw3LjUgMTAsNi41IDgsNi41IEM2LDYuNSA0LjgwNjIzOTExLDggMy41LDggQzIuMTkzNzYwODksOCAxLDcgMSw3IEwxLDEgWicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGZyZXF1ZW50OiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5SZWNlbnQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU1LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdSZWNlbnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU1LjUwMDAwMCwgMjMwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J0JvZHknIHN0cm9rZT0nIzRBNTQ2MScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNy41LDcuNSBMNy41LDguNSBMOC41LDguNSBMOC41LDIgTDcuNSwyIEw3LjUsNy41IEw0LDcuNSBMNCw4LjUgTDguNSw4LjUgTDguNSw3LjUgTDcuNSw3LjUgWicgaWQ9J0hhbmRzJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGtleWJvYXJkIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzMyLjVweCcgaGVpZ2h0PScyMy41cHgnIHZpZXdCb3g9JzAgMCA2NSA0NycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlNoYXBlPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVBvcnRyYWl0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQzNi4wMDAwMDAsIC0xOTU2LjAwMDAwMCknIGZpbGw9JyMwMDAwMDAnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkLUxpZ2h0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMTQyMi4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQtZG93bicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQxMi4wMDAwMDAsIDUwMC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTg3LjAwMTMzMiwzNCBDODguMTA1MTY1OSwzNCA4OSwzNC44OTk3MTI3IDg5LDM1Ljk5MzI4NzQgTDg5LDYxLjAwNjcxMjYgQzg5LDYyLjEwNzU3NDggODguMTA1ODc1OSw2MyA4Ny4wMDEzMzIsNjMgTDI1Ljk5ODY2OCw2MyBDMjQuODk0ODM0MSw2MyAyNCw2Mi4xMDAyODczIDI0LDYxLjAwNjcxMjYgTDI0LDM1Ljk5MzI4NzQgQzI0LDM0Ljg5MjQyNTIgMjQuODk0MTI0MSwzNCAyNS45OTg2NjgsMzQgTDg3LjAwMTMzMiwzNCBaIE0yNiwzNiBMMjYsNjEgTDg3LDYxIEw4NywzNiBMMjYsMzYgWiBNNzksNDAgTDgzLDQwIEw4Myw0NCBMNzksNDQgTDc5LDQwIFogTTcyLDQwIEw3Niw0MCBMNzYsNDQgTDcyLDQ0IEw3Miw0MCBaIE02NSw0MCBMNjksNDAgTDY5LDQ0IEw2NSw0NCBMNjUsNDAgWiBNNTgsNDAgTDYyLDQwIEw2Miw0NCBMNTgsNDQgTDU4LDQwIFogTTUxLDQwIEw1NSw0MCBMNTUsNDQgTDUxLDQ0IEw1MSw0MCBaIE00NCw0MCBMNDgsNDAgTDQ4LDQ0IEw0NCw0NCBMNDQsNDAgWiBNMzcsNDAgTDQxLDQwIEw0MSw0NCBMMzcsNDQgTDM3LDQwIFogTTMwLDQwIEwzNCw0MCBMMzQsNDQgTDMwLDQ0IEwzMCw0MCBaIE03OSw0NyBMODMsNDcgTDgzLDUxIEw3OSw1MSBMNzksNDcgWiBNNzIsNDcgTDc2LDQ3IEw3Niw1MSBMNzIsNTEgTDcyLDQ3IFogTTY1LDQ3IEw2OSw0NyBMNjksNTEgTDY1LDUxIEw2NSw0NyBaIE01OCw0NyBMNjIsNDcgTDYyLDUxIEw1OCw1MSBMNTgsNDcgWiBNNTEsNDcgTDU1LDQ3IEw1NSw1MSBMNTEsNTEgTDUxLDQ3IFogTTQ0LDQ3IEw0OCw0NyBMNDgsNTEgTDQ0LDUxIEw0NCw0NyBaIE0zNyw0NyBMNDEsNDcgTDQxLDUxIEwzNyw1MSBMMzcsNDcgWiBNMzAsNDcgTDM0LDQ3IEwzNCw1MSBMMzAsNTEgTDMwLDQ3IFogTTc5LDU0IEw4Myw1NCBMODMsNTggTDc5LDU4IEw3OSw1NCBaIE03Miw1NCBMNzYsNTQgTDc2LDU4IEw3Miw1OCBMNzIsNTQgWiBNNDQsNTQgTDY5LDU0IEw2OSw1OCBMNDQsNTggTDQ0LDU0IFogTTM3LDU0IEw0MSw1NCBMNDEsNTggTDM3LDU4IEwzNyw1NCBaIE0zMCw1NCBMMzQsNTQgTDM0LDU4IEwzMCw1OCBMMzAsNTQgWiBNNDQuMzE2MzQ5OCw2OS45NzcxMDQ3IEM0My4zNjg0MjI1LDcwLjU0MjAzNDIgNDMuMzMzODcyMSw3MS41MDk2NDk1IDQ0LjIzNzgyMTcsNzIuMTM3MzkxMiBMNTUuMzYyMTUzOSw3OS44NjI2MDg4IEM1Ni4yNjY3MTEzLDgwLjQ5MDc3MjYgNTcuNzMzODk2NSw4MC40OTAzNTA1IDU4LjYzNzg0NjEsNzkuODYyNjA4OCBMNjkuNzYyMTc4Myw3Mi4xMzczOTEyIEM3MC42NjY3MzU3LDcxLjUwOTIyNzQgNzAuNjQ4MDEyLDcwLjUyMDUyMDQgNjkuNzExNTE4Nyw2OS45MjM0MTY2IEw2OS45ODI1NzMxLDcwLjA5NjIzOTYgQzY5LjUxODEzMzMsNjkuODAwMTE1IDY4Ljc3ODI1NTcsNjkuODEyNjQ5MyA2OC4zMjYxMzA3LDcwLjEyNjkzMjMgTDU3LjgxNTQ5OTksNzcuNDMzMTI2MyBDNTcuMzY1MTExNyw3Ny43NDYyMDIgNTYuNjI4MTY1LDc3LjczODE3ODYgNTYuMTc2MjEwMyw3Ny40MTk5NDI0IEw0NS44Mzg2MTM3LDcwLjE0MDg5NzcgQzQ1LjM4MzY0NzIsNjkuODIwNTQwNyA0NC42Mzc1MDM5LDY5Ljc4NTcwODggNDQuMTU2NjM5Myw3MC4wNzIyODYyIEw0NC4zMTYzNDk4LDY5Ljk3NzEwNDcgWicgaWQ9J1NoYXBlJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0a2V5UG9wVXA6XG5cdFx0XCJpcGhvbmUtNVwiIDogXCI8c3ZnIHdpZHRoPSc1NXB4JyBoZWlnaHQ9JzkycHgnIHZpZXdCb3g9JzUzIDMxNiA1NSA5MicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+XG5cdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICA8L2ZpbHRlcj5cblx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS4zNDE3MzIzMSw0MC45MzkxNzAxIEMwLjUxNzQ2NjEyOCw0MC4yMDU4OSAwLDM5LjEzNzQyNTEgMCwzNy45NDc3NjM1IEwwLDQuMDAzNDU1OTggQzAsMS43ODkxNzEzNiAxLjc5NTI4MjQ4LDAgNC4wMDk4NzU2NiwwIEw0NC45OTAxMjQzLDAgQzQ3LjIxMjU2MDgsMCA0OSwxLjc5MjQwODMgNDksNC4wMDM0NTU5OCBMNDksMzcuOTQ3NzYzNSBDNDksMzguOTEyNDA1MSA0OC42NTkyNzk4LDM5Ljc5NjM2NTkgNDguMDkxNjA0MSw0MC40ODY4NjY1IEM0OC4wNDE0MjMzLDQwLjkwMzIyODkgNDcuNzExMTg4OCw0MS40MDc0NjcyIDQ3LjA4MjU5MDgsNDEuOTUyMjUgQzQ3LjA4MjU5MDgsNDEuOTUyMjUgMzguNTI5OTE0NSw0OS4wNjQzMzYyIDM4LjUyOTkxNDUsNTEuMTUyNjQyNCBDMzguNTI5OTE0NSw2MS42NDk3NTYxIDM4LjE3NzAwOTksODIuMDAyNTQwNiAzOC4xNzcwMDk5LDgyLjAwMjU0MDYgQzM4LjE0MTIzMDQsODQuMjAyNDM1NCAzNi4zMjEwMjg0LDg2IDM0LjExMjg0OTUsODYgTDE1LjMwNTk1MzksODYgQzEzLjEwNzk2LDg2IDExLjI3ODE4ODQsODQuMjEwMDc4OSAxMS4yNDE3OTM2LDgyLjAwMjA5OTMgQzExLjI0MTc5MzYsODIuMDAyMDk5MyAxMC44ODg4ODg5LDYxLjY0NzA4NTIgMTAuODg4ODg4OSw1MS4xNDg2MzYxIEMxMC44ODg4ODg5LDQ5LjA2MTY2NTQgMi4zNDE0MzY2Miw0Mi4yMzg2NTUgMi4zNDE0MzY2Miw0Mi4yMzg2NTUgQzEuNzc4MjczMTEsNDEuNzY0MTM2NSAxLjQ0ODgxMzU0LDQxLjMyMDQyMzcgMS4zNDE3MzIzMSw0MC45MzkxNzAxIFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzQ5JyBoZWlnaHQ9Jzg2JyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdFx0XHQgICAgPC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BvcG92ZXInIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU2LjAwMDAwMCwgMzE4LjAwMDAwMCknPlxuXHRcdFx0XHQgICAgICAgIDx1c2UgaWQ9J1JlY3RhbmdsZS0xNCcgc3Ryb2tlPScjQjJCNEI5JyBtYXNrPSd1cmwoI21hc2stMyknIGZpbGw9JyNGQ0ZDRkMnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBob25lLTZzXCIgOiBcIjxzdmcgd2lkdGg9JzY0cHgnIGhlaWdodD0nMTA3cHgnIHZpZXdCb3g9JzI0IDM4NyA2NCAxMDcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuNDg2NDc2NDYsNDguMzc3OTk0NyBDMC41ODAyNjY0OSw0Ny42NDY0Mjk2IDAsNDYuNTI5NTg3IDAsNDUuMjc4MTk0OCBMMCwzLjk5MDA5Nzg3IEMwLDEuNzgyNTkxMiAxLjc5NTA5NTc3LDAgNC4wMDk0NTg2MiwwIEw1My45OTA1NDE0LDAgQzU2LjIwMDU3NDYsMCA1OCwxLjc4NjQyNzY3IDU4LDMuOTkwMDk3ODcgTDU4LDQ1LjI3ODE5NDggQzU4LDQ2LjE4MzMwMDQgNTcuNjk4MjI1OCw0Ny4wMTY5NzMzIDU3LjE4OTUwOTcsNDcuNjg1NjMyNSBDNTcuMDM5Njg2NSw0OC4wMjEyNDk3IDU2LjczNjAwOTgsNDguMzk3MjgzNCA1Ni4yNzE4MzYzLDQ4Ljc5NTA2NjEgQzU2LjI3MTgzNjMsNDguNzk1MDY2MSA0NS42MDY4Mzc2LDU3LjYyMjA2OTMgNDUuNjA2ODM3Niw2MC4wNzQ2MTQ5IEM0NS42MDY4Mzc2LDcyLjQwMjYyMDUgNDUuMTc3OTY3LDk2Ljk5MjMxNjQgNDUuMTc3OTY3LDk2Ljk5MjMxNjQgQzQ1LjE0MTM3NDgsOTkuMjEyMjIxNCA0My4zMTkzMDY1LDEwMSA0MS4xMDkwMDM1LDEwMSBMMTcuMzg2NzIzLDEwMSBDMTUuMTgxMjcyMiwxMDEgMTMuMzU0NjgzLDk5LjIwNTUwMDkgMTMuMzE3NzU5NSw5Ni45OTE4NzQxIEMxMy4zMTc3NTk1LDk2Ljk5MTg3NDEgMTIuODg4ODg4OSw3Mi4zOTk0ODM4IDEyLjg4ODg4ODksNjAuMDY5OTA5OSBDMTIuODg4ODg4OSw1Ny42MTg5MzI2IDIuMjI2NzM0MzcsNDkuMTQ2MjkzNiAyLjIyNjczNDM3LDQ5LjE0NjI5MzYgQzEuOTA1MjQwODcsNDguODc4ODMyNyAxLjY1OTExNjU1LDQ4LjYyMDczMyAxLjQ4NjQ3NjQ2LDQ4LjM3Nzk5NDcgWicgaWQ9J3BhdGgtMic+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTMnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nNTgnIGhlaWdodD0nMTAxJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdFx0XHQgICAgPC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BvcG92ZXInIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3LjAwMDAwMCwgMzg5LjAwMDAwMCknPlxuXHRcdFx0XHQgICAgICAgIDx1c2UgaWQ9J1JlY3RhbmdsZS0xNCcgc3Ryb2tlPScjQjJCNEI5JyBtYXNrPSd1cmwoI21hc2stMyknIGZpbGw9JyNGQ0ZDRkMnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBob25lLTZzLXBsdXNcIiA6IFwiPHN2ZyB3aWR0aD0nNzBweCcgaGVpZ2h0PScxMTlweCcgdmlld0JveD0nMjggNDUwIDcwIDExOScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+XG5cdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0ICAgICAgICA8L2ZpbHRlcj5cblx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS45NTcyOTM5NSw1NC4wNzI4MzA0IEMwLjc4NTkxMTEzMiw1My4zNzU3Njk5IDAsNTIuMDk4Nzc2IDAsNTAuNjM4OTAyMiBMMCwzLjk5NTI0NDE5IEMwLDEuNzg2NzE0MjggMS43OTI0MjIwMiwwIDQuMDAzNDg2NjMsMCBMNTkuOTk2NTEzNCwwIEM2Mi4yMDQ2MjM1LDAgNjQsMS43ODg3MzE3NSA2NCwzLjk5NTI0NDE5IEw2NCw1MC42Mzg5MDIyIEM2NCw1MS45MjMzNjg2IDYzLjM5MzcxMTYsNTMuMDY1MTU1NiA2Mi40NTEzOTEsNTMuNzk1NzU0IEM2Mi40NDI3NzUyLDUzLjgwMzI0MzMgNjIuNDM0MTAxOSw1My44MTA3NDA0IDYyLjQyNTM3MDksNTMuODE4MjQ1NCBDNjIuNDI1MzcwOSw1My44MTgyNDU0IDUwLjMyNDc4NjMsNjMuODk3NzQwMiA1MC4zMjQ3ODYzLDY2LjYxNzM5NDcgQzUwLjMyNDc4NjMsODAuMjg4MDU0NCA0OS44NDQzMDQ5LDEwOC4wMDIwMDcgNDkuODQ0MzA0OSwxMDguMDAyMDA3IEM0OS44MDc5NjY1LDExMC4yMTAyMzQgNDcuOTg3NDIzMiwxMTIgNDUuNzc4OTA4OSwxMTIgTDE4Ljc2ODA5OTcsMTEyIEMxNi41NTM0Mzk3LDExMiAxNC43Mzk0NDU2LDExMC4yMDk4NCAxNC43MDI3MDM3LDEwOC4wMDE1NjYgQzE0LjcwMjcwMzcsMTA4LjAwMTU2NiAxNC4yMjIyMjIyLDgwLjI4NDU3NjEgMTQuMjIyMjIyMiw2Ni42MTIxNzczIEMxNC4yMjIyMjIyLDYzLjg5NDI2MTkgMi4xNDA4MTQyMiw1NC4yMzIxMzM3IDIuMTQwODE0MjIsNTQuMjMyMTMzNyBDMi4wNzY2NDkxMyw1NC4xNzg2Mjk4IDIuMDE1NDgxMTEsNTQuMTI1NTEzNCAxLjk1NzI5Mzk1LDU0LjA3MjgzMDQgWicgaWQ9J3BhdGgtMic+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTMnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nNjQnIGhlaWdodD0nMTEyJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdFx0XHQgICAgPC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BvcG92ZXInIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMxLjAwMDAwMCwgNDUyLjAwMDAwMCknPlxuXHRcdFx0XHQgICAgICAgIDx1c2UgaWQ9J1JlY3RhbmdsZS0xNCcgc3Ryb2tlPScjQjJCNEI5JyBtYXNrPSd1cmwoI21hc2stMyknIGZpbGw9JyNGQ0ZDRkMnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRvYmplY3RzIDpcblx0XHRcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScxMXB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxMSAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkxpZ2h0YnVsYjwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0NC4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdMaWdodGJ1bGInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0NC4wMDAwMDAsIDYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTgsMTAuNDAwMjkwNCBDOS43ODA4Mzc5NSw5LjQ4OTkzNDkxIDExLDcuNjM3MzQyNzMgMTEsNS41IEMxMSwyLjQ2MjQzMzg4IDguNTM3NTY2MTIsMCA1LjUsMCBDMi40NjI0MzM4OCwwIDAsMi40NjI0MzM4OCAwLDUuNSBDMCw3LjYzNzM0MjczIDEuMjE5MTYyMDUsOS40ODk5MzQ5MSAzLDEwLjQwMDI5MDQgTDMsMTQuMDAyMDg2OSBDMywxNS4xMDE3Mzk0IDMuODk3NjE2MDIsMTYgNS4wMDQ4ODE1LDE2IEw1Ljk5NTExODUsMTYgQzcuMTA2MTAwMiwxNiA4LDE1LjEwNTUwMzggOCwxNC4wMDIwODY5IEw4LDEwLjQwMDI5MDQgWicgaWQ9J092YWwtMTcnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeD0nMycgeT0nMTInIHdpZHRoPSc1JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeD0nNCcgeT0nMTMuNScgd2lkdGg9JzEuNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDguNSBDNSw4LjUgMy40OTk5OTk5OSw3LjUwMDAwMDAxIDQsNyBDNC41MDAwMDAwMSw2LjQ5OTk5OTk5IDUsNy42NjY2NjY2NyA1LjUsOCBDNS41LDggNi41LDYuNTAwMDAwMDEgNyw3IEM3LjUsNy40OTk5OTk5OSA2LDguNSA2LDguNSBMNiwxMSBMNSwxMSBMNSw4LjUgWicgaWQ9J1JlY3RhbmdsZS01Micgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0c2hpZnQgOiB7XG5cdFx0b24gOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScyMHB4JyBoZWlnaHQ9JzE4cHgnIHZpZXdCb3g9JzAgMCAyMCAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yMS43MDUyMzg4LDEzLjIwNTIzODggQzIxLjMxNTc0NjIsMTIuODE1NzQ2MiAyMC42ODU3NTU5LDEyLjgxNDI0NDEgMjAuMjk0NzYxMiwxMy4yMDUyMzg4IEwxMS45MTYwNzY3LDIxLjU4MzkyMzMgQzExLjEzMzk5OTEsMjIuMzY2MDAwOSAxMS4zOTgyNjA2LDIzIDEyLjQ5NzkxMzEsMjMgTDE2LjUsMjMgTDE2LjUsMjguMDA5MjIyIEMxNi41LDI4LjU1NjQxMzYgMTYuOTQ2MzExNCwyOSAxNy40OTc1NDQ2LDI5IEwyNC41MDI0NTU0LDI5IEMyNS4wNTMzODQsMjkgMjUuNSwyOC41NDkwMjQ4IDI1LjUsMjguMDA5MjIyIEwyNS41LDIzIEwyOS41MDIwODY5LDIzIEMzMC42MDU1MDM4LDIzIDMwLjg2NjgyNCwyMi4zNjY4MjQgMzAuMDgzOTIzMywyMS41ODM5MjMzIEwyMS43MDUyMzg4LDEzLjIwNTIzODggWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0b2ZmIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyMHB4JyBoZWlnaHQ9JzE4cHgnIHZpZXdCb3g9JzAgMCAyMCAxOScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L0xvd2VyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTI5LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMjEuNjcxOTAwOCwxMi4yMzI1ODk4IEMyMS4zMDEwMzIsMTEuODI3OTkxNiAyMC42OTQ2ODkyLDExLjgzMzQ3MzEgMjAuMzI4ODE5NSwxMi4yMzI1ODk4IEwxMS42OTQ3MDIzLDIxLjY1MTI5ODMgQzEwLjc1ODc0NDEsMjIuNjcyMzA4IDExLjEyODU1NDEsMjMuNSAxMi41MDk3NzUxLDIzLjUgTDE1Ljk5OTk5OTksMjMuNTAwMDAwMiBMMTUuOTk5OTk5OSwyOC4wMDE0MjQxIEMxNS45OTk5OTk5LDI4LjgyOTA2NDggMTYuNjcxNjU1OSwyOS41MDAwMDAxIDE3LjQ5NzEwMSwyOS41MDAwMDAxIEwyNC41MDI4OTkyLDI5LjUwMDAwMDEgQzI1LjMyOTcyNTMsMjkuNTAwMDAwMSAyNi4wMDAwMDAzLDI4LjgzNDk3MDMgMjYuMDAwMDAwMywyOC4wMDE0MjQxIEwyNi4wMDAwMDAzLDIzLjUwMDAwMDEgTDI5LjQ5MDIyNTEsMjMuNTAwMDAwMiBDMzAuODc2MzM1NywyMy41MDAwMDAyIDMxLjI0Mzk1MjEsMjIuNjc1MTkxNiAzMC4zMDU0MTYxLDIxLjY1MTI5ODUgTDIxLjY3MTkwMDgsMTIuMjMyNTg5OCBaIE0yMS4zNDE3NDgsMTQuMzY0NTMxNiBDMjEuMTUzMDA1NiwxNC4xNjMyMDY0IDIwLjg0MzM1MTUsMTQuMTY3MDkxNCAyMC42NTgyNTE0LDE0LjM2NDUzMTYgTDEzLjUsMjEuOTk5OTk5OCBMMTcuNTAwMDAwMSwyMS45OTk5OTk5IEwxNy41MDAwMDAyLDI3LjUwODk5NTYgQzE3LjUwMDAwMDIsMjcuNzgwMTcwMyAxNy43MzI5MDI3LDI4LjAwMDAwMDggMTguMDAzNDIyOSwyOC4wMDAwMDA4IEwyMy45OTY1NzcsMjguMDAwMDAwOCBDMjQuMjc0NjA5NywyOC4wMDAwMDA4IDI0LjQ5OTk5OTcsMjcuNzcyMTIwMyAyNC40OTk5OTk3LDI3LjUwODk5NTYgTDI0LjQ5OTk5OTcsMjEuOTk5OTk5OSBMMjguNSwyMS45OTk5OTk5IEwyMS4zNDE3NDgsMTQuMzY0NTMxNiBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHR9XG5cdHNtaWxleXM6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPjpEPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC04Ni4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nOkQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDg3LjAwMDAwMCwgMjMwLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J0hlYWQnIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLXdpZHRoPScwLjc4OTQ3MzY4NCcgY3g9JzcuNScgY3k9JzcuNScgcj0nNy41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNy41LDEzLjUyNjMxNTggQzEwLjI2ODY5MDcsMTMuNTI2MzE1OCAxMi41MTMxNTc5LDEwLjM2ODQyMTIgMTIuNTEzMTU3OSw5LjE4NDIxMDQ1IEMxMi41MTMxNTc5LDcuNjA1MjYzMTcgMTEuNDM4OTA5OCw5LjE4NDIxMDQzIDcuNSw5LjE4NDIxMDUzIEMzLjU2MTA5MDIzLDkuMTg0MjEwNjIgMi40ODY4NDIxMSw3LjYwNTI2MzE3IDIuNDg2ODQyMTEsOS4xODQyMTA0NSBDMi40ODY4NDIxMSwxMC4zNjg0MjEgNC43MzEzMDkzNSwxMy41MjYzMTU4IDcuNSwxMy41MjYzMTU4IFogTTcuNSwxMC45NjA1MjYzIEM4LjkzMjMzMDgzLDExLjE1Nzg5NDcgMTEuNzk2OTkyNSwxMC4zNjg0MjEgMTEuNzk2OTkyNSw5LjQ0NDIzNTUyIEMxMS43OTY5OTI1LDguNzg5NDczNjggMTAuODc2MjA4NCw5LjU3ODk0NzI3IDcuNSw5Ljc3NjMxNTc5IEM0LjEyMzc5MTYyLDkuNTc4OTQ3NDMgMy4yMDMwMDg3Miw4Ljc4OTQ3MzY5IDMuMjAzMDA3NTIsOS40NDQyMzU1MiBDMy4yMDMwMDU4MiwxMC4zNjg0MjEgNi4wNjc2NjkxNywxMS4xNTc4OTQ3IDcuNSwxMC45NjA1MjYzIFonIGlkPSdTbWlsZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjIzNjg0MjExLDYuMzIzNjU5OCBDNS42NDM3ODg3Niw2LjMyMzY1OTggNS45NzM2ODQyMSw1Ljg4MTgzNTU0IDUuOTczNjg0MjEsNS4zMzY4MTc2OSBDNS45NzM2ODQyMSw0Ljc5MTc5OTg1IDUuNjQzNzg4NzYsNC4zNDk5NzU1OSA1LjIzNjg0MjExLDQuMzQ5OTc1NTkgQzQuODI5ODk1NDUsNC4zNDk5NzU1OSA0LjUsNC43OTE3OTk4NSA0LjUsNS4zMzY4MTc2OSBDNC41LDUuODgxODM1NTQgNC44Mjk4OTU0NSw2LjMyMzY1OTggNS4yMzY4NDIxMSw2LjMyMzY1OTggWiBNOS43MzY4NDIxMSw2LjMyMzY1OTggQzEwLjE0Mzc4ODgsNi4zMjM2NTk4IDEwLjQ3MzY4NDIsNS44ODE4MzU1NCAxMC40NzM2ODQyLDUuMzM2ODE3NjkgQzEwLjQ3MzY4NDIsNC43OTE3OTk4NSAxMC4xNDM3ODg4LDQuMzQ5OTc1NTkgOS43MzY4NDIxMSw0LjM0OTk3NTU5IEM5LjMyOTg5NTQ1LDQuMzQ5OTc1NTkgOSw0Ljc5MTc5OTg1IDksNS4zMzY4MTc2OSBDOSw1Ljg4MTgzNTU0IDkuMzI5ODk1NDUsNi4zMjM2NTk4IDkuNzM2ODQyMTEsNi4zMjM2NTk4IFonIGlkPSdFeWVzJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cblx0c3ltYm9sczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE2cHgnIGhlaWdodD0nMTdweCcgdmlld0JveD0nMCAwIDE1IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+T2JqZWN0cyAmYW1wOyBTeW1ib2xzPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMDQuMDAwMDAwLCAtNjM4LjAwMDAwMCknIGZpbGw9JyM0QTU0NjEnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J09iamVjdHMtJmFtcDstU3ltYm9scycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzA0LjAwMDAwMCwgMjMwLjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGluZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzAnIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMicgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjExJyB4PSczJyB5PSczJyB3aWR0aD0nMScgaGVpZ2h0PSc0Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS43NSwwLjE1OTI2Mzk3OCBMMTEuNzUsMCBMMTEsMCBMMTEsNS4wOTE0OTMgQzEwLjU5MzQ0LDQuOTQyMjEzOTIgMTAuMDYzOTY2Miw0Ljk2NDUzMjI0IDkuNTU3MTUzOTksNS4xOTAxNzk1NyBDOC42OTg0OTI5Myw1LjU3MjQ4MDEgOC4yMzAwMzgzNSw2LjM5MzY1NjIxIDguNTEwODMxNDEsNy4wMjQzMjc3NCBDOC43OTE2MjQ0Nyw3LjY1NDk5OTI4IDkuNzE1MzM0NTQsNy44NTYzNDM3NSAxMC41NzM5OTU2LDcuNDc0MDQzMjEgQzExLjI3NjExODMsNy4xNjE0MzgwMyAxMS43MTczMzkzLDYuNTU1Mzg5NzIgMTEuNzAxMzU5NSw2IEwxMS43NSw2IEwxMS43NSwxLjM5Mzg1MDU2IEMxMi4zMTc1OTA4LDEuNTk1OTAwMzcgMTMsMi4wODE3NDU2IDEzLDMuMjUgQzEzLDQuMjUgMTIuNzUsNS41IDEyLjc1LDUuNSBDMTIuNzUsNS41IDEzLjc1LDQuNzUgMTMuNzUsMi41IEMxMy43NSwxLjAyMjU2MTAxIDEyLjU2NDI2NzQsMC40MDc0NzMwMTkgMTEuNzUsMC4xNTkyNjM5NzggWicgaWQ9J05vdGUnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBpZD0nJmFtcDsnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDx0c3BhbiB4PScwLjI1JyB5PScxNic+JmFtcDs8L3RzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBpZD0nJScgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRzcGFuIHg9JzcuNzUnIHk9JzE2Jz4lPC90c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdHRyYXZlbDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+VHJhbnNwb3J0PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDEuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RyYW5zcG9ydCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQxLjUwMDAwMCwgMjMwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00wLDYgTDEsNiBMMSwxNSBMMCwxNSBMMCw2IFogTTE1LDQgTDE2LDQgTDE2LDE1IEwxNSwxNSBMMTUsNCBaIE0zLjUsMCBMNC41LDAgTDQuNSw3IEwzLjUsNyBMMy41LDAgWiBNMSw2IEwzLjUsNiBMMy41LDcgTDEsNyBMMSw2IFogTTQuNSwwIEw5LjUsMCBMOS41LDEgTDQuNSwxIEw0LjUsMCBaIE05LjUsMCBMMTAuNSwwIEwxMC41LDYgTDkuNSw2IEw5LjUsMCBaIE0xMC41LDQgTDE1LDQgTDE1LDUgTDEwLjUsNSBMMTAuNSw0IFonIGlkPSdTa3lsaW5lJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PGcgaWQ9J1dpbmRvd3MnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCknIGZpbGw9JyM0QTU0NjEnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nMCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nMy41JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSc1LjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nMy41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nMTEnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0PGcgaWQ9J0NhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi41MDAwMDAsIDYuNTAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNOC41LDggTDIuNSw4IEwyLjUsOS41IEwwLjUsOS41IEwwLjUsNy44NjgxMTQ1IEMwLjIwMTIwMjE5Miw3LjY5NTgyNzAyIDAsNy4zNzA5MTM2MyAwLDYuOTkwNjMxMSBMMCw1LjAwOTM2ODkgQzAsNC40NTE5MDk4NSAwLjQ0NDgzNjk3NCw0IDAuOTk1NTc3NDk5LDQgTDEwLjAwNDQyMjUsNCBDMTAuNTU0MjY0OCw0IDExLDQuNDQzMzUzMTggMTEsNS4wMDkzNjg5IEwxMSw2Ljk5MDYzMTEgQzExLDcuMzY1MzMxNSAxMC43OTkwMjQ0LDcuNjkyMzQ1MTkgMTAuNSw3Ljg2NjQ5MDAyIEwxMC41LDkuNSBMOC41LDkuNSBMOC41LDggWiBNMS43NSw2LjUgQzIuMTY0MjEzNTYsNi41IDIuNSw2LjE2NDIxMzU2IDIuNSw1Ljc1IEMyLjUsNS4zMzU3ODY0NCAyLjE2NDIxMzU2LDUgMS43NSw1IEMxLjMzNTc4NjQ0LDUgMSw1LjMzNTc4NjQ0IDEsNS43NSBDMSw2LjE2NDIxMzU2IDEuMzM1Nzg2NDQsNi41IDEuNzUsNi41IFogTTkuMjUsNi41IEM5LjY2NDIxMzU2LDYuNSAxMCw2LjE2NDIxMzU2IDEwLDUuNzUgQzEwLDUuMzM1Nzg2NDQgOS42NjQyMTM1Niw1IDkuMjUsNSBDOC44MzU3ODY0NCw1IDguNSw1LjMzNTc4NjQ0IDguNSw1Ljc1IEM4LjUsNi4xNjQyMTM1NiA4LjgzNTc4NjQ0LDYuNSA5LjI1LDYuNSBaIE0wLjUsNyBMMTAuNSw3IEwxMC41LDcuNSBMMC41LDcuNSBMMC41LDcgWiBNMyw2LjUgTDgsNi41IEw4LDcgTDMsNyBMMyw2LjUgWicgaWQ9J0JvZHknIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xLjUsNC41IEwxLjUsMyBDMS41LDEuMzQzMTQ1NzUgMi44MzkwMjAxMywwIDQuNTAxNjY1NDcsMCBMNi40OTgzMzQ1MywwIEM4LjE1NjEwODU5LDAgOS41LDEuMzQ2NTE3MTIgOS41LDMgTDkuNSw1JyBpZD0nUm9vZicgc3Ryb2tlPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxufVxuXG5cbmV4cG9ydHMuZnJhbWVyRnJhbWVzID1cblx0NjQwOjJcblx0NzUwOjJcblx0NzY4OjJcblx0MTA4MDozXG5cdDEyNDI6M1xuXHQxNDQwOjRcblx0MTUzNjoyXG5cbiMgRGV2aWNlIGZyYW1lc1xuZXhwb3J0cy5yZWFsRGV2aWNlcyA9XG5cdDMyMDpcblx0XHQ0ODA6XG5cdFx0XHRuYW1lOlwiaVBob25lXCJcblx0XHRcdHdpZHRoOjMyMFxuXHRcdFx0aGVpZ2h0OjQ4MFxuXHRcdFx0c2NhbGU6MVxuXHQ0ODA6XG5cdFx0ODU0OlxuXHRcdFx0bmFtZTpcIkFuZHJvaWQgT25lXCJcblx0XHRcdHdpZHRoOjQ4MFxuXHRcdFx0aGVpZ2h0Ojg1NFxuXHRcdFx0c2NhbGU6MS41XG5cblx0NjQwOlxuXHRcdDk2MDpcblx0XHRcdG5hbWU6XCJpUGhvbmUgNFwiXG5cdFx0XHR3aWR0aDo2NDBcblx0XHRcdGhlaWdodDo5NjBcblx0XHRcdHNjYWxlOjJcblx0XHQxMTM2OlxuXHRcdFx0bmFtZTpcImlQaG9uZSA1XCJcblx0XHRcdHdpZHRoOjY0MFxuXHRcdFx0aGVpZ2h0OjExMzZcblx0XHRcdHNjYWxlOjJcblx0NzIwOlxuXHRcdDEyODA6XG5cdFx0XHRuYW1lOlwiWEhEUElcIlxuXHRcdFx0d2lkdGg6NzIwXG5cdFx0XHRoZWlnaHQ6MTI4MFxuXHRcdFx0c2NhbGU6MlxuXHQ3NTA6XG5cdFx0MTMzNDpcblx0XHRcdG5hbWU6XCJpUGhvbmUgNlwiXG5cdFx0XHR3aWR0aDo3NTBcblx0XHRcdGhlaWdodDoxMzM0XG5cdFx0XHRzY2FsZToyXG5cdDc2ODpcblx0XHQxMDI0OlxuXHRcdFx0bmFtZTpcImlQYWRcIlxuXHRcdFx0d2lkdGg6NzY4XG5cdFx0XHRoZWlnaHQ6MTAyNFxuXHRcdFx0c2NhbGU6MVxuXHRcdDEyODA6XG5cdFx0XHRuYW1lOlwiTmV4dXMgNFwiXG5cdFx0XHR3aWR0aDo3Njhcblx0XHRcdGhlaWdodDoxMjgwXG5cdFx0XHRzY2FsZToyXG5cdDgwMDpcblx0XHQxMjgwOlxuXHRcdFx0bmFtZTpcIk5leHVzIDdcIlxuXHRcdFx0d2lkdGg6ODAwXG5cdFx0XHRoZWlnaHQ6MTI4MFxuXHRcdFx0c2NhbGU6MVxuXHQxMDgwOlxuXHRcdDE5MjA6XG5cdFx0XHRuYW1lOlwiWFhIRFBJXCJcblx0XHRcdHdpZHRoOjEwODBcblx0XHRcdGhlaWdodDoxMjgwXG5cdFx0XHRzY2FsZTozXG5cdDEyMDA6XG5cdFx0MTkyMDpcblx0XHRcdG5hbWU6XCJOZXh1cyA3XCJcblx0XHRcdHdpZHRoOjEyMDBcblx0XHRcdGhlaWdodDoxOTIwXG5cdFx0XHRzY2FsZToyXG5cdDEyNDI6XG5cdFx0MjIwODpcblx0XHRcdG5hbWU6XCJpUGhvbmUgNiBQbHVzXCJcblx0XHRcdHdpZHRoOjEyNDJcblx0XHRcdGhlaWdodDoyMjA4XG5cdFx0XHRzY2FsZTozXG5cdDE0NDA6XG5cdFx0MjU2MDpcblx0XHRcdG5hbWU6XCJYWFhIRFBJXCJcblx0XHRcdHdpZHRoOjE0NDBcblx0XHRcdGhlaWdodDoyNTYwXG5cdFx0XHRzY2FsZTo0XG5cdDE0NDE6XG5cdFx0MjU2MTpcblx0XHRcdG5hbWU6XCJOZXh1cyA2XCJcblx0XHRcdHdpZHRoOjE0NDBcblx0XHRcdGhlaWdodDoyNTYwXG5cdFx0XHRzY2FsZTo0XG5cdDE1MzY6XG5cdFx0MjA0ODpcblx0XHRcdG5hbWU6XCJpUGFkXCJcblx0XHRcdHdpZHRoOjE1MzZcblx0XHRcdGhlaWdodDoyMDQ4XG5cdFx0XHRzY2FsZToyXG5cdDE2MDA6XG5cdFx0MjA1Njpcblx0XHRcdG5hbWU6XCJOZXh1cyAxMFwiXG5cdFx0XHR3aWR0aDoxNjAwXG5cdFx0XHRoZWlnaHQ6MjA1NlxuXHRcdFx0c2NhbGU6MlxuXHQyMDQ4OlxuXHRcdDE1MzY6XG5cdFx0XHRuYW1lOlwiTmV4dXMgOVwiXG5cdFx0XHR3aWR0aDoyMDQ4XG5cdFx0XHRoZWlnaHQ6MTUzNlxuXHRcdFx0c2NhbGU6MlxuXHRcdDI3MzI6XG5cdFx0XHRuYW1lOlwiaVBhZCBQcm9cIlxuXHRcdFx0d2lkdGg6MjA0OFxuXHRcdFx0aGVpZ2h0OjI3MzJcblx0XHRcdHNjYWxlOjJcblx0MjU2MDpcblx0XHQxNjAwOlxuXHRcdFx0bmFtZTpcIk5leHVzIDEwXCJcblx0XHRcdHdpZHRoOjI1NjBcblx0XHRcdGhlaWdodDoxNjAwXG5cdFx0XHRzY2FsZToyXG5cdDI3MzI6XG5cdFx0MjA0ODpcblx0XHRcdG5hbWU6XCJpUGFkIFByb1wiXG5cdFx0XHR3aWR0aDoyNzMyXG5cdFx0XHRoZWlnaHQ6MjA0OFxuXHRcdFx0c2NhbGU6MlxuXG5cbmV4cG9ydHMuY29sb3JzID1cblx0cmVkOlwiI0Y0NDMzNlwiXG5cdHJlZDUwOlwiI0ZGRUJFRVwiXG5cdHJlZDEwMDpcIiNGRkNERDJcIlxuXHRyZWQyMDA6XCIjRUY5QTlBXCJcblx0cmVkMzAwOlwiI0U1NzM3M1wiXG5cdHJlZDQwMDpcIiNFRjUzNTBcIlxuXHRyZWQ1MDA6XCIjRjQ0MzM2XCJcblx0cmVkNjAwOlwiI0U1MzkzNVwiXG5cdHJlZDcwMDpcIiNEMzJGMkZcIlxuXHRyZWQ4MDA6XCIjQzYyODI4XCJcblx0cmVkOTAwOlwiI0I3MUMxQ1wiXG5cdHJlZEExMDA6XCIjRkY4QTgwXCJcblx0cmVkQTIwMDpcIiNGRjUyNTJcIlxuXHRyZWRBNDAwOlwiI0ZGMTc0NFwiXG5cdHJlZEE3MDA6XCIjRDUwMDAwXCJcblx0cGluazpcIiNFOTFFNjNcIlxuXHRwaW5rNTA6XCIjRkNFNEVDXCJcblx0cGluazEwMDpcIiNGOEJCRDBcIlxuXHRwaW5rMjAwOlwiI0Y0OEZCMVwiXG5cdHBpbmszMDA6XCIjRjA2MjkyXCJcblx0cGluazQwMDpcIiNFQzQwN0FcIlxuXHRwaW5rNTAwOlwiI0U5MUU2M1wiXG5cdHBpbms2MDA6XCIjRDgxQjYwXCJcblx0cGluazcwMDpcIiNDMjE4NUJcIlxuXHRwaW5rODAwOlwiI0FEMTQ1N1wiXG5cdHBpbms5MDA6XCIjODgwRTRGXCJcblx0cGlua0ExMDA6XCIjRkY4MEFCXCJcblx0cGlua0EyMDA6XCIjRkY0MDgxXCJcblx0cGlua0E0MDA6XCIjRjUwMDU3XCJcblx0cGlua0E3MDA6XCIjQzUxMTYyXCJcblx0cHVycGxlOlwiIzlDMjdCMFwiXG5cdHB1cnBsZTUwOlwiI0YzRTVGNVwiXG5cdHB1cnBsZTEwMDpcIiNFMUJFRTdcIlxuXHRwdXJwbGUyMDA6XCIjQ0U5M0Q4XCJcblx0cHVycGxlMzAwOlwiI0JBNjhDOFwiXG5cdHB1cnBsZTQwMDpcIiNBQjQ3QkNcIlxuXHRwdXJwbGU1MDA6XCIjOUMyN0IwXCJcblx0cHVycGxlNjAwOlwiIzhFMjRBQVwiXG5cdHB1cnBsZTcwMDpcIiM3QjFGQTJcIlxuXHRwdXJwbGU4MDA6XCIjNkExQjlBXCJcblx0cHVycGxlOTAwOlwiIzRBMTQ4Q1wiXG5cdHB1cnBsZUExMDA6XCIjRUE4MEZDXCJcblx0cHVycGxlQTIwMDpcIiNFMDQwRkJcIlxuXHRwdXJwbGVBNDAwOlwiI0Q1MDBGOVwiXG5cdHB1cnBsZUE3MDA6XCIjQUEwMEZGXCJcblx0ZGVlcFB1cnBsZTpcIiM2NzNBQjdcIlxuXHRkZWVwUHVycGxlNTA6XCIjRURFN0Y2XCJcblx0ZGVlcFB1cnBsZTEwMDpcIiNEMUM0RTlcIlxuXHRkZWVwUHVycGxlMjAwOlwiI0IzOUREQlwiXG5cdGRlZXBQdXJwbGUzMDA6XCIjOTU3NUNEXCJcblx0ZGVlcFB1cnBsZTQwMDpcIiM3RTU3QzJcIlxuXHRkZWVwUHVycGxlNTAwOlwiIzY3M0FCN1wiXG5cdGRlZXBQdXJwbGU2MDA6XCIjNUUzNUIxXCJcblx0ZGVlcFB1cnBsZTcwMDpcIiM1MTJEQThcIlxuXHRkZWVwUHVycGxlODAwOlwiIzQ1MjdBMFwiXG5cdGRlZXBQdXJwbGU5MDA6XCIjMzExQjkyXCJcblx0ZGVlcFB1cnBsZUExMDA6XCIjQjM4OEZGXCJcblx0ZGVlcFB1cnBsZUEyMDA6XCIjN0M0REZGXCJcblx0ZGVlcFB1cnBsZUE0MDA6XCIjNjUxRkZGXCJcblx0ZGVlcFB1cnBsZUE3MDA6XCIjNjIwMEVBXCJcblx0aW5kaWdvOlwiIzNGNTFCNVwiXG5cdGluZGlnbzUwOlwiI0U4RUFGNlwiXG5cdGluZGlnbzEwMDpcIiNDNUNBRTlcIlxuXHRpbmRpZ28yMDA6XCIjOUZBOERBXCJcblx0aW5kaWdvMzAwOlwiIzc5ODZDQlwiXG5cdGluZGlnbzQwMDpcIiM1QzZCQzBcIlxuXHRpbmRpZ281MDA6XCIjM0Y1MUI1XCJcblx0aW5kaWdvNjAwOlwiIzM5NDlBQlwiXG5cdGluZGlnbzcwMDpcIiMzMDNGOUZcIlxuXHRpbmRpZ284MDA6XCIjMjgzNTkzXCJcblx0aW5kaWdvOTAwOlwiIzFBMjM3RVwiXG5cdGluZGlnb0ExMDA6XCIjOEM5RUZGXCJcblx0aW5kaWdvQTIwMDpcIiM1MzZERkVcIlxuXHRpbmRpZ29BNDAwOlwiIzNENUFGRVwiXG5cdGluZGlnb0E3MDA6XCIjMzA0RkZFXCJcblx0Ymx1ZTpcIiMyMTk2RjNcIlxuXHRibHVlNTA6XCIjRTNGMkZEXCJcblx0Ymx1ZTEwMDpcIiNCQkRFRkJcIlxuXHRibHVlMjAwOlwiIzkwQ0FGOVwiXG5cdGJsdWUzMDA6XCIjNjRCNUY2XCJcblx0Ymx1ZTQwMDpcIiM0MkE1RjVcIlxuXHRibHVlNTAwOlwiIzIxOTZGM1wiXG5cdGJsdWU2MDA6XCIjMUU4OEU1XCJcblx0Ymx1ZTcwMDpcIiMxOTc2RDJcIlxuXHRibHVlODAwOlwiIzE1NjVDMFwiXG5cdGJsdWU5MDA6XCIjMEQ0N0ExXCJcblx0Ymx1ZUExMDA6XCIjODJCMUZGXCJcblx0Ymx1ZUEyMDA6XCIjNDQ4QUZGXCJcblx0Ymx1ZUE0MDA6XCIjMjk3OUZGXCJcblx0Ymx1ZUE3MDA6XCIjMjk2MkZGXCJcblx0bGlnaHRCbHVlOlwiIzAzQTlGNFwiXG5cdGxpZ2h0Qmx1ZTUwOlwiI0UxRjVGRVwiXG5cdGxpZ2h0Qmx1ZTEwMDpcIiNCM0U1RkNcIlxuXHRsaWdodEJsdWUyMDA6XCIjODFENEZBXCJcblx0bGlnaHRCbHVlMzAwOlwiIzRGQzNGN1wiXG5cdGxpZ2h0Qmx1ZTQwMDpcIiMyOUI2RjZcIlxuXHRsaWdodEJsdWU1MDA6XCIjMDNBOUY0XCJcblx0bGlnaHRCbHVlNjAwOlwiIzAzOUJFNVwiXG5cdGxpZ2h0Qmx1ZTcwMDpcIiMwMjg4RDFcIlxuXHRsaWdodEJsdWU4MDA6XCIjMDI3N0JEXCJcblx0bGlnaHRCbHVlOTAwOlwiIzAxNTc5QlwiXG5cdGxpZ2h0Qmx1ZUExMDA6XCIjODBEOEZGXCJcblx0bGlnaHRCbHVlQTIwMDpcIiM0MEM0RkZcIlxuXHRsaWdodEJsdWVBNDAwOlwiIzAwQjBGRlwiXG5cdGxpZ2h0Qmx1ZUE3MDA6XCIjMDA5MUVBXCJcblx0Y3lhbjpcIiMwMEJDRDRcIlxuXHRjeWFuNTA6XCIjRTBGN0ZBXCJcblx0Y3lhbjEwMDpcIiNCMkVCRjJcIlxuXHRjeWFuMjAwOlwiIzgwREVFQVwiXG5cdGN5YW4zMDA6XCIjNEREMEUxXCJcblx0Y3lhbjQwMDpcIiMyNkM2REFcIlxuXHRjeWFuNTAwOlwiIzAwQkNENFwiXG5cdGN5YW42MDA6XCIjMDBBQ0MxXCJcblx0Y3lhbjcwMDpcIiMwMDk3QTdcIlxuXHRjeWFuODAwOlwiIzAwODM4RlwiXG5cdGN5YW45MDA6XCIjMDA2MDY0XCJcblx0Y3lhbkExMDA6XCIjODRGRkZGXCJcblx0Y3lhbkEyMDA6XCIjMThGRkZGXCJcblx0Y3lhbkE0MDA6XCIjMDBFNUZGXCJcblx0Y3lhbkE3MDA6XCIjMDBCOEQ0XCJcblx0dGVhbDpcIiMwMDk2ODhcIlxuXHR0ZWFsNTA6XCIjRTBGMkYxXCJcblx0dGVhbDEwMDpcIiNCMkRGREJcIlxuXHR0ZWFsMjAwOlwiIzgwQ0JDNFwiXG5cdHRlYWwzMDA6XCIjNERCNkFDXCJcblx0dGVhbDQwMDpcIiMyNkE2OUFcIlxuXHR0ZWFsNTAwOlwiIzAwOTY4OFwiXG5cdHRlYWw2MDA6XCIjMDA4OTdCXCJcblx0dGVhbDcwMDpcIiMwMDc5NkJcIlxuXHR0ZWFsODAwOlwiIzAwNjk1Q1wiXG5cdHRlYWw5MDA6XCIjMDA0RDQwXCJcblx0dGVhbEExMDA6XCIjQTdGRkVCXCJcblx0dGVhbEEyMDA6XCIjNjRGRkRBXCJcblx0dGVhbEE0MDA6XCIjMURFOUI2XCJcblx0dGVhbEE3MDA6XCIjMDBCRkE1XCJcblx0Z3JlZW46XCIjNENBRjUwXCJcblx0Z3JlZW41MDpcIiNFOEY1RTlcIlxuXHRncmVlbjEwMDpcIiNDOEU2QzlcIlxuXHRncmVlbjIwMDpcIiNBNUQ2QTdcIlxuXHRncmVlbjMwMDpcIiM4MUM3ODRcIlxuXHRncmVlbjQwMDpcIiM2NkJCNkFcIlxuXHRncmVlbjUwMDpcIiM0Q0FGNTBcIlxuXHRncmVlbjYwMDpcIiM0M0EwNDdcIlxuXHRncmVlbjcwMDpcIiMzODhFM0NcIlxuXHRncmVlbjgwMDpcIiMyRTdEMzJcIlxuXHRncmVlbjkwMDpcIiMxQjVFMjBcIlxuXHRncmVlbkExMDA6XCIjQjlGNkNBXCJcblx0Z3JlZW5BMjAwOlwiIzY5RjBBRVwiXG5cdGdyZWVuQTQwMDpcIiMwMEU2NzZcIlxuXHRncmVlbkE3MDA6XCIjMDBDODUzXCJcblx0bGlnaHRHcmVlbjpcIiM4QkMzNEFcIlxuXHRsaWdodEdyZWVuNTA6XCIjRjFGOEU5XCJcblx0bGlnaHRHcmVlbjEwMDpcIiNEQ0VEQzhcIlxuXHRsaWdodEdyZWVuMjAwOlwiI0M1RTFBNVwiXG5cdGxpZ2h0R3JlZW4zMDA6XCIjQUVENTgxXCJcblx0bGlnaHRHcmVlbjQwMDpcIiM5Q0NDNjVcIlxuXHRsaWdodEdyZWVuNTAwOlwiIzhCQzM0QVwiXG5cdGxpZ2h0R3JlZW42MDA6XCIjN0NCMzQyXCJcblx0bGlnaHRHcmVlbjcwMDpcIiM2ODlGMzhcIlxuXHRsaWdodEdyZWVuODAwOlwiIzU1OEIyRlwiXG5cdGxpZ2h0R3JlZW45MDA6XCIjMzM2OTFFXCJcblx0bGlnaHRHcmVlbkExMDA6XCIjQ0NGRjkwXCJcblx0bGlnaHRHcmVlbkEyMDA6XCIjQjJGRjU5XCJcblx0bGlnaHRHcmVlbkE0MDA6XCIjNzZGRjAzXCJcblx0bGlnaHRHcmVlbkE3MDA6XCIjNjRERDE3XCJcblx0bGltZTpcIiNDRERDMzlcIlxuXHRsaW1lNTA6XCIjRjlGQkU3XCJcblx0bGltZTEwMDpcIiNGMEY0QzNcIlxuXHRsaW1lMjAwOlwiI0U2RUU5Q1wiXG5cdGxpbWUzMDA6XCIjRENFNzc1XCJcblx0bGltZTQwMDpcIiNENEUxNTdcIlxuXHRsaW1lNTAwOlwiI0NEREMzOVwiXG5cdGxpbWU2MDA6XCIjQzBDQTMzXCJcblx0bGltZTcwMDpcIiNBRkI0MkJcIlxuXHRsaW1lODAwOlwiIzlFOUQyNFwiXG5cdGxpbWU5MDA6XCIjODI3NzE3XCJcblx0bGltZUExMDA6XCIjRjRGRjgxXCJcblx0bGltZUEyMDA6XCIjRUVGRjQxXCJcblx0bGltZUE0MDA6XCIjQzZGRjAwXCJcblx0bGltZUE3MDA6XCIjQUVFQTAwXCJcblx0eWVsbG93OlwiI0ZGRUIzQlwiXG5cdHllbGxvdzUwOlwiI0ZGRkRFN1wiXG5cdHllbGxvdzEwMDpcIiNGRkY5QzRcIlxuXHR5ZWxsb3cyMDA6XCIjRkZGNTlEXCJcblx0eWVsbG93MzAwOlwiI0ZGRjE3NlwiXG5cdHllbGxvdzQwMDpcIiNGRkVFNThcIlxuXHR5ZWxsb3c1MDA6XCIjRkZFQjNCXCJcblx0eWVsbG93NjAwOlwiI0ZERDgzNVwiXG5cdHllbGxvdzcwMDpcIiNGQkMwMkRcIlxuXHR5ZWxsb3c4MDA6XCIjRjlBODI1XCJcblx0eWVsbG93OTAwOlwiI0Y1N0YxN1wiXG5cdHllbGxvd0ExMDA6XCIjRkZGRjhEXCJcblx0eWVsbG93QTIwMDpcIiNGRkZGMDBcIlxuXHR5ZWxsb3dBNDAwOlwiI0ZGRUEwMFwiXG5cdHllbGxvd0E3MDA6XCIjRkZENjAwXCJcblx0YW1iZXI6XCIjRkZDMTA3XCJcblx0YW1iZXI1MDpcIiNGRkY4RTFcIlxuXHRhbWJlcjEwMDpcIiNGRkVDQjNcIlxuXHRhbWJlcjIwMDpcIiNGRkUwODJcIlxuXHRhbWJlcjMwMDpcIiNGRkQ1NEZcIlxuXHRhbWJlcjQwMDpcIiNGRkNBMjhcIlxuXHRhbWJlcjUwMDpcIiNGRkMxMDdcIlxuXHRhbWJlcjYwMDpcIiNGRkIzMDBcIlxuXHRhbWJlcjcwMDpcIiNGRkEwMDBcIlxuXHRhbWJlcjgwMDpcIiNGRjhGMDBcIlxuXHRhbWJlcjkwMDpcIiNGRjZGMDBcIlxuXHRhbWJlckExMDA6XCIjRkZFNTdGXCJcblx0YW1iZXJBMjAwOlwiI0ZGRDc0MFwiXG5cdGFtYmVyQTQwMDpcIiNGRkM0MDBcIlxuXHRhbWJlckE3MDA6XCIjRkZBQjAwXCJcblx0b3JhbmdlOlwiI0ZGOTgwMFwiXG5cdG9yYW5nZTUwOlwiI0ZGRjNFMFwiXG5cdG9yYW5nZTEwMDpcIiNGRkUwQjJcIlxuXHRvcmFuZ2UyMDA6XCIjRkZDQzgwXCJcblx0b3JhbmdlMzAwOlwiI0ZGQjc0RFwiXG5cdG9yYW5nZTQwMDpcIiNGRkE3MjZcIlxuXHRvcmFuZ2U1MDA6XCIjRkY5ODAwXCJcblx0b3JhbmdlNjAwOlwiI0ZCOEMwMFwiXG5cdG9yYW5nZTcwMDpcIiNGNTdDMDBcIlxuXHRvcmFuZ2U4MDA6XCIjRUY2QzAwXCJcblx0b3JhbmdlOTAwOlwiI0U2NTEwMFwiXG5cdG9yYW5nZUExMDA6XCIjRkZEMTgwXCJcblx0b3JhbmdlQTIwMDpcIiNGRkFCNDBcIlxuXHRvcmFuZ2VBNDAwOlwiI0ZGOTEwMFwiXG5cdG9yYW5nZUE3MDA6XCIjRkY2RDAwXCJcblx0ZGVlcE9yYW5nZTpcIiNGRjU3MjJcIlxuXHRkZWVwT3JhbmdlNTA6XCIjRkJFOUU3XCJcblx0ZGVlcE9yYW5nZTEwMDpcIiNGRkNDQkNcIlxuXHRkZWVwT3JhbmdlMjAwOlwiI0ZGQUI5MVwiXG5cdGRlZXBPcmFuZ2UzMDA6XCIjRkY4QTY1XCJcblx0ZGVlcE9yYW5nZTQwMDpcIiNGRjcwNDNcIlxuXHRkZWVwT3JhbmdlNTAwOlwiI0ZGNTcyMlwiXG5cdGRlZXBPcmFuZ2U2MDA6XCIjRjQ1MTFFXCJcblx0ZGVlcE9yYW5nZTcwMDpcIiNFNjRBMTlcIlxuXHRkZWVwT3JhbmdlODAwOlwiI0Q4NDMxNVwiXG5cdGRlZXBPcmFuZ2U5MDA6XCIjQkYzNjBDXCJcblx0ZGVlcE9yYW5nZUExMDA6XCIjRkY5RTgwXCJcblx0ZGVlcE9yYW5nZUEyMDA6XCIjRkY2RTQwXCJcblx0ZGVlcE9yYW5nZUE0MDA6XCIjRkYzRDAwXCJcblx0ZGVlcE9yYW5nZUE3MDA6XCIjREQyQzAwXCJcblx0YnJvd246XCIjNzk1NTQ4XCJcblx0YnJvd241MDpcIiNFRkVCRTlcIlxuXHRicm93bjEwMDpcIiNEN0NDQzhcIlxuXHRicm93bjIwMDpcIiNCQ0FBQTRcIlxuXHRicm93bjMwMDpcIiNBMTg4N0ZcIlxuXHRicm93bjQwMDpcIiM4RDZFNjNcIlxuXHRicm93bjUwMDpcIiM3OTU1NDhcIlxuXHRicm93bjYwMDpcIiM2RDRDNDFcIlxuXHRicm93bjcwMDpcIiM1RDQwMzdcIlxuXHRicm93bjgwMDpcIiM0RTM0MkVcIlxuXHRicm93bjkwMDpcIiMzRTI3MjNcIlxuXHRncmV5OlwiIzlFOUU5RVwiXG5cdGdyZXk1MDpcIiNGQUZBRkFcIlxuXHRncmV5MTAwOlwiI0Y1RjVGNVwiXG5cdGdyZXkyMDA6XCIjRUVFRUVFXCJcblx0Z3JleTMwMDpcIiNFMEUwRTBcIlxuXHRncmV5NDAwOlwiI0JEQkRCRFwiXG5cdGdyZXk1MDA6XCIjOUU5RTlFXCJcblx0Z3JleTYwMDpcIiM3NTc1NzVcIlxuXHRncmV5NzAwOlwiIzYxNjE2MVwiXG5cdGdyZXk4MDA6XCIjNDI0MjQyXCJcblx0Z3JleTkwMDpcIiMyMTIxMjFcIlxuXHRibHVlR3JleTpcIiM2MDdEOEJcIlxuXHRibHVlR3JleTUwOlwiI0VDRUZGMVwiXG5cdGJsdWVHcmV5MTAwOlwiI0NGRDhEQ1wiXG5cdGJsdWVHcmV5MjAwOlwiI0IwQkVDNVwiXG5cdGJsdWVHcmV5MzAwOlwiIzkwQTRBRVwiXG5cdGJsdWVHcmV5NDAwOlwiIzc4OTA5Q1wiXG5cdGJsdWVHcmV5NTAwOlwiIzYwN0Q4QlwiXG5cdGJsdWVHcmV5NjAwOlwiIzU0NkU3QVwiXG5cdGJsdWVHcmV5NzAwOlwiIzQ1NUE2NFwiXG5cdGJsdWVHcmV5ODAwOlwiIzM3NDc0RlwiXG5cdGJsdWVHcmV5OTAwOlwiIzI2MzIzOFwiXG5cdGJsYWNrOlwiIzAwMDAwMFwiXG5cdHdoaXRlOlwiI0ZGRkZGRlwiXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRuYXZiYXIgPSBuZXcgTGF5ZXJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiXG5cblx0bmF2YmFyLmNvbnN0cmFpbnRzID1cblx0XHRib3R0b206MFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6NDhcblxuXHRzdmdIb21lID0gbS51dGlscy5zdmcobS5hc3NldHMuaG9tZSlcblx0c3ZnQmFjayA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmJhY2spXG5cblx0aG9tZUJ1dHRvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6bmF2YmFyXG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMjEpXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJob21lXCJcblx0XHRjbGlwOnRydWVcblxuXHRob21lQnV0dG9uLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6M1xuXHRcdGhlaWdodDo0MlxuXHRcdHdpZHRoOjk0XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRob21lSWNvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6aG9tZUJ1dHRvblxuXHRcdHdpZHRoOnN2Z0hvbWUud2lkdGhcblx0XHRoZWlnaHQ6c3ZnSG9tZS5oZWlnaHRcblx0XHRodG1sOnN2Z0hvbWUuc3ZnXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJpY29uXCJcblxuXHRob21lSWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXG5cdHJlY2VudEJ1dHRvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6bmF2YmFyXG5cdFx0Ym9yZGVyUmFkaXVzOm0udXRpbHMucHgoMjEpXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJyZWNlbnRcIlxuXHRcdGNsaXA6dHJ1ZVxuXG5cdHJlY2VudEJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0dG9wOjNcblx0XHRoZWlnaHQ6NDJcblx0XHR3aWR0aDo5NFxuXHRcdGxlYWRpbmc6W2hvbWVCdXR0b24sIDZdXG5cblx0cmVjZW50SWNvbiA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6cmVjZW50QnV0dG9uXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGJvcmRlckNvbG9yOlwid2hpdGVcIlxuXHRcdGJvcmRlcldpZHRoOm0udXRpbHMucHgoMilcblx0XHRib3JkZXJSYWRpdXM6bS51dGlscy5weCgyKVxuXHRcdG5hbWU6XCJpY29uXCJcblxuXHRyZWNlbnRJY29uLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0d2lkdGg6MTZcblx0XHRoZWlnaHQ6MTZcblxuXHRiYWNrQnV0dG9uID0gbmV3IExheWVyXG5cdFx0c3VwZXJMYXllcjpuYXZiYXJcblx0XHRib3JkZXJSYWRpdXM6bS51dGlscy5weCgyMSlcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcImJhY2tcIlxuXHRcdGNsaXA6dHJ1ZVxuXG5cdGJhY2tCdXR0b24uY29uc3RyYWludHMgPVxuXHRcdHRvcDozXG5cdFx0aGVpZ2h0OjQyXG5cdFx0d2lkdGg6OTRcblx0XHR0cmFpbGluZzpbaG9tZUJ1dHRvbiwgNl1cblxuXG5cdGJhY2tJY29uID0gbmV3IExheWVyXG5cdFx0c3VwZXJMYXllcjpiYWNrQnV0dG9uXG5cdFx0d2lkdGg6c3ZnQmFjay53aWR0aFxuXHRcdGhlaWdodDpzdmdCYWNrLmhlaWdodFxuXHRcdGh0bWw6c3ZnQmFjay5zdmdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcImljb25cIlxuXG5cdGJhY2tJY29uLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OltuYXZiYXIsIGhvbWVCdXR0b24sIHJlY2VudEJ1dHRvbiwgYmFja0J1dHRvbiwgaG9tZUljb24sIGJhY2tJY29uLCByZWNlbnRJY29uXVxuXG5cdG0udXRpbHMuaW5reVxuXHRcdGxheWVyOmhvbWVCdXR0b25cblx0XHRtb3ZlVG9UYXA6ZmFsc2Vcblx0XHRjb2xvcjogXCJ3aGl0ZVwiXG5cdFx0c2NhbGU6IDIwXG5cdFx0Y3VydmU6IFwiYmV6aWVyLWN1cnZlKDEsIDAuNCwgMC40LCAxLjApXCJcblx0XHRvcGFjaXR5OiAuM1xuXHRtLnV0aWxzLmlua3lcblx0XHRcdGxheWVyOmJhY2tCdXR0b25cblx0XHRcdG1vdmVUb1RhcDpmYWxzZVxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIlxuXHRcdFx0c2NhbGU6IDIwXG5cdFx0XHRjdXJ2ZTogXCJiZXppZXItY3VydmUoMSwgMC40LCAwLjQsIDEuMClcIlxuXHRcdFx0b3BhY2l0eTogLjNcblx0bS51dGlscy5pbmt5XG5cdFx0XHRsYXllcjpyZWNlbnRCdXR0b25cblx0XHRcdG1vdmVUb1RhcDpmYWxzZVxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIlxuXHRcdFx0c2NhbGU6IDIwXG5cdFx0XHRjdXJ2ZTogXCJiZXppZXItY3VydmUoMSwgMC40LCAwLjQsIDEuMClcIlxuXHRcdFx0b3BhY2l0eTogLjNcblxuXG5cdG5hdmJhci5iYWNrID0gYmFja0J1dHRvblxuXHRuYXZiYXIuYmFjay5iYWNrSWNvbiA9IGJhY2tJY29uXG5cdG5hdmJhci5ob21lID0gaG9tZUJ1dHRvblxuXHRuYXZiYXIuaG9tZS5pY29uID0gaG9tZUljb25cblx0bmF2YmFyLnJlY2VudCA9IHJlY2VudEJ1dHRvblxuXHRuYXZiYXIucmVjZW50Lmljb24gPSByZWNlbnRJY29uXG5cblx0cmV0dXJuIG5hdmJhclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0YWN0aW9uczpbXCJPS1wiXVxuXHRleGl0OlwiQ2FuY2VsXCJcblx0YW5pbWF0ZWQ6ZmFsc2Vcblx0ZGVzY3JpcHRpb246dW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdCMgU3VwZXIgY29udGFpbmVyXG5cdHNoZWV0ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0c2hlZXQuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdG0ubGF5b3V0LnNldChzaGVldClcblxuXHQjIE92ZXJsYXlcblx0b3ZlcmxheSA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsIDAsIDAsIC40KVwiLCBzdXBlckxheWVyOnNoZWV0LCBuYW1lOlwib3ZlcmxheVwiXG5cdG92ZXJsYXkuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdG0ubGF5b3V0LnNldChvdmVybGF5KVxuXG5cdCMgQ29udGFpbmVyXG5cdHNoZWV0cyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOnNoZWV0XG5cdHNoZWV0cy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0bS5sYXlvdXQuc2V0KHNoZWV0cylcblxuXHQjIEV4aXQgQnV0dG9uXG5cdGV4aXRCdXR0b24gPSBuZXcgbS5CdXR0b25cblx0XHRidXR0b25UeXBlOlwiYmlnXCJcblx0XHR0ZXh0OnNldHVwLmV4aXRcblx0XHRibHVyOmZhbHNlXG5cdFx0c3VwZXJMYXllcjpzaGVldHNcblx0ZXhpdEJ1dHRvbi5jb25zdHJhaW50cy5ib3R0b20gPSAxMFxuXG5cdG0ubGF5b3V0LnNldChleGl0QnV0dG9uKVxuXG5cdCMgQWN0aW9uc1xuXHRhY3Rpb25zID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c2hlZXRzLCBib3JkZXJSYWRpdXM6bS51dGlscy5weCgxMi41KSwgYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwgLjg1KVwiXG5cdG0udXRpbHMuYmdCbHVyKGFjdGlvbnMpXG5cblxuXHQjIERlc2NyaXB0aW9uXG5cdGRlc2NyaXB0aW9uQnVmZmVyID0gMFxuXHRpZiBzZXR1cC5kZXNjcmlwdGlvblxuXHRcdGRlc2NyaXB0aW9uID0gbmV3IG0uVGV4dCBzdHlsZTpcInNoZWV0RGVzY3JpcHRpb25cIiwgdGV4dDpzZXR1cC5kZXNjcmlwdGlvbiwgc3VwZXJMYXllcjphY3Rpb25zLCBmb250U2l6ZToxMywgY29sb3I6XCIjOEY4RTk0XCIsIHRleHRBbGlnbjpcImNlbnRlclwiXG5cdFx0ZGVzY3JpcHRpb24uY29uc3RyYWludHMgPVxuXHRcdFx0dG9wOjIxXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0d2lkdGg6bS51dGlscy5wdChtLmRldmljZS53aWR0aCkgLSAxMDBcblx0XHRtLmxheW91dC5zZXQoKVxuXHRcdGRlc2NyaXB0aW9uQnVmZmVyID0gbS51dGlscy5wdChkZXNjcmlwdGlvbi5oZWlnaHQpICsgNDJcblx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWN0aW9ucywgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0ZGl2aWRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRoZWlnaHQ6MVxuXHRcdFx0dG9wOmRlc2NyaXB0aW9uQnVmZmVyXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRtLmxheW91dC5zZXQoW2Rlc2NyaXB0aW9uLCBkaXZpZGVyXSlcblxuXG5cdGFjdGlvbnMuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MTBcblx0XHR0cmFpbGluZzoxMFxuXHRcdGJvdHRvbTpbZXhpdEJ1dHRvbiwgMTBdXG5cdFx0aGVpZ2h0OjU4ICogc2V0dXAuYWN0aW9ucy5sZW5ndGggKyBkZXNjcmlwdGlvbkJ1ZmZlclxuXHRtLmxheW91dC5zZXQoYWN0aW9ucylcblxuXG5cdGFjdHMgPSB7fVxuXG5cdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblx0XHRvID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWN0aW9ucywgd2lkdGg6YWN0aW9ucy53aWR0aCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOm0udXRpbHMucHgoMTIuNSlcblx0XHRvLmNvbnN0cmFpbnRzID1cblx0XHRcdHRvcDppbmRleCAqIDU4ICsgZGVzY3JpcHRpb25CdWZmZXJcblx0XHRcdGhlaWdodDo1OFxuXHRcdGJ1dHRvbiA9IG5ldyBtLkJ1dHRvbiB0ZXh0OmFjdCwgc3VwZXJMYXllcjpvLCBmb250U2l6ZToyMFxuXG5cdFx0bS51dGlscy5zcGVjaWFsQ2hhcihidXR0b24pXG5cblx0XHRidXR0b24uY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdGJ1dHRvbi5jb2xvciA9IFwiI0ZFMzgyNFwiXG5cdFx0aWYgaW5kZXggIT0gc2V0dXAuYWN0aW9ucy5sZW5ndGggLSAxXG5cdFx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bywgd2lkdGg6YWN0aW9ucy53aWR0aCwgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0XHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0aGVpZ2h0OjFcblx0XHRcdFx0Ym90dG9tOjBcblxuXHRcdG0ubGF5b3V0LnNldCgpXG5cblx0XHRvLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDIxNSwyMTUsMjE1LC43KVwiXG5cdFx0XHRALmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczogKGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHR0aW1lOi41XG5cblx0XHRvLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiKVxuXHRcdFx0XHR0aW1lOi41XG5cdFx0XHRzaGVldHMuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTptLmRldmljZS5oZWlnaHQrbS51dGlscy5weCgoc2V0dXAuYWN0aW9ucy5sZW5ndGggKyAzKSAqIDU4KSlcblx0XHRcdFx0dGltZTouM1xuXHRcdFx0b3ZlcmxheS5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6IChvcGFjaXR5OjApXG5cdFx0XHRcdHRpbWU6LjNcblx0XHRcdFV0aWxzLmRlbGF5IC4zLCAtPlxuXHRcdFx0XHRzaGVldC5kZXN0cm95KClcblx0XHRhY3RzW2FjdF0gPSBvXG5cblx0aWYgc2V0dXAuYW5pbWF0ZWQgPT0gdHJ1ZVxuXHRcdG92ZXJsYXkub3BhY2l0eSA9IDBcblx0XHRzaGVldHMubWF4WSA9IG0uZGV2aWNlLmhlaWdodCArIG0udXRpbHMucHgoKHNldHVwLmFjdGlvbnMubGVuZ3RoICsgMykgKiA1OClcblx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MSlcblx0XHRcdHRpbWU6LjNcblx0XHRzaGVldHMuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoobWF4WTptLmRldmljZS5oZWlnaHQpXG5cdFx0XHR0aW1lOi4zXG5cblx0b3ZlcmxheS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c2hlZXRzLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6IChtYXhZOm0uZGV2aWNlLmhlaWdodCttLnV0aWxzLnB4KChzZXR1cC5hY3Rpb25zLmxlbmd0aCArIDMpICogNTgpKVxuXHRcdFx0dGltZTouM1xuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdHNoZWV0LmRlc3Ryb3koKVxuXG5cdGV4aXRCdXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNoZWV0cy5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTptLmRldmljZS5oZWlnaHQrbS51dGlscy5weCgoc2V0dXAuYWN0aW9ucy5sZW5ndGggKyAzKSAqIDU4KSlcblx0XHRcdHRpbWU6LjNcblx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6IChvcGFjaXR5OjApXG5cdFx0XHR0aW1lOi4zXG5cdFx0VXRpbHMuZGVsYXkgLjMsIC0+XG5cdFx0XHRzaGVldC5kZXN0cm95KClcblxuXHRzaGVldC5jYW5jZWwgPSBleGl0QnV0dG9uXG5cdHNoZWV0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cblx0c2hlZXQub3ZlcmxheSA9IG92ZXJsYXlcblx0c2hlZXQuYWN0aW9ucyA9IGFjdHNcblx0cmV0dXJuIHNoZWV0XG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRjYXJyaWVyOlwiXCJcblx0bmV0d29yazpcIkxURVwiXG5cdGJhdHRlcnk6MTAwXG5cdGNlbGx1bGFyOjJcblx0c3R5bGU6XCJsaWdodFwiXG5cdGNsb2NrMjQ6ZmFsc2Vcblx0dHlwZTpcInN0YXR1c0JhclwiXG5cdGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsLjEpXCJcblx0Y29sb3I6IFwiYmxhY2tcIlxuXHRvcGFjaXR5Oi42XG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRzdGF0dXNCYXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOnNldHVwLmJhY2tncm91bmRDb2xvciwgbmFtZTpcInN0YXR1c0Jhci5hbGxcIlxuXG5cdGlmIHNldHVwLnN0eWxlID09IFwiZGFya1wiXG5cdFx0aWYgc2V0dXAuYmFja2dyb3VuZENvbG9yID09IFwicmdiYSgwLDAsMCwuMSlcIlxuXHRcdFx0c3RhdHVzQmFyLmJhY2tncm91bmRDb2xvciA9IG0udXRpbHMuY29sb3IoXCJibGFja1wiKVxuXHRcdGlmIHNldHVwLmNvbG9yID09IFwiYmxhY2tcIlxuXHRcdFx0c2V0dXAuY29sb3IgPSBcIndoaXRlXCJcblx0XHRpZiBzZXR1cC5vcGFjaXR5ID09IC42XG5cdFx0XHRzZXR1cC5vcGFjaXR5ID0gMVxuXG5cdGlmIHNldHVwLnN0eWxlID09IFwibGlnaHRcIiAmJiBzZXR1cC5jb2xvciAhPSBcImJsYWNrXCJcblx0XHRzZXR1cC5vcGFjaXR5ID0gMVxuXG5cdHN0YXR1c0Jhci50eXBlID0gc2V0dXAudHlwZVxuXHRzdGF0dXNCYXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6MjRcblxuXHRzd2l0Y2ggbS5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDVcblx0XHRcdEBibHVldG9vdGggPSA1XG5cblx0XHR3aGVuIFwiZnVsbHNjcmVlblwiXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDVcblx0XHRcdEBibHVldG9vdGggPSAtIDEwXG5cdFx0ZWxzZVxuXHRcdFx0QHRvcENvbnN0cmFpbnQgPSAzXG5cdFx0XHRAYmx1ZXRvb3RoID0gM1xuXG5cblxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJsb2NrU2NyZWVuXCJcblx0XHRcdEBpc0xvY2tTY3JlZW5QdXRpbHNlbnQgPSB0cnVlXG5cdGlmIEBpc0xvY2tTY3JlZW5QdXRpbHNlbnRcblx0XHRncmlwcGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCB3aWR0aDp1dGlscy5weCgzNyksIGhlaWdodDp1dGlscy5weCg1KSwgbmFtZTpcImdyaXBwZXJcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNSwgbmFtZTpcImdyaXBwZXJcIlxuXHRcdGdyaXBwZXIuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDM3KX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDUpfXB4JyB2aWV3Qm94PScwIDAgMzcgNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+R3JpcHBlcjwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9BdXRvLUNvbXBsZXRlLUJhci1DbG9zZWQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNjkuMDAwMDAwLCAtMi4wMDAwMDApJyBmaWxsPScjRkZGRkZGJz5cblx0XHRcdFx0XHRcdDxyZWN0IGlkPSdHcmlwcGVyJyB4PScxNjkuNScgeT0nMi41JyB3aWR0aD0nMzYnIGhlaWdodD0nNCcgcng9JzIuNSc+PC9yZWN0PlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRncmlwcGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6MlxuXHRlbHNlXG5cdFx0QHRpbWUgPSBtLnV0aWxzLmdldFRpbWUoKVxuXHRcdHRpbWUgPSBuZXcgbS5UZXh0IHN0eWxlOlwic3RhdHVzQmFyVGltZVwiLCB0ZXh0Om0udXRpbHMudGltZUZvcm1hdHRlcihAdGltZSwgc2V0dXAuY2xvY2syNCksIGZvbnRTaXplOjE0LCBmb250V2VpZ2h0OjUwMCwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGNvbG9yOnNldHVwLmNvbG9yLCBuYW1lOlwidGltZVwiLCBvcGFjaXR5OnNldHVwLm9wYWNpdHlcblx0XHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRcdHRyYWlsaW5nOjhcblx0XHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdGJhdHRlcnlJY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmF0dGVyeUljb25cIlxuXHRpZiBzZXR1cC5iYXR0ZXJ5ID4gNzBcblx0XHRoaWdoQmF0dGVyeSA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmJhdHRlcnlIaWdoKVxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBoaWdoQmF0dGVyeS5zdmdcblx0XHRiYXR0ZXJ5SWNvbi5oZWlnaHQgPSBoaWdoQmF0dGVyeS5oZWlnaHRcblx0XHRiYXR0ZXJ5SWNvbi53aWR0aCA9IGhpZ2hCYXR0ZXJ5LndpZHRoXG5cdFx0bS51dGlscy5jaGFuZ2VGaWxsKGJhdHRlcnlJY29uLCBzZXR1cC5jb2xvcilcblx0XHRiYXR0ZXJ5SWNvbi5vcGFjaXR5ID0gc2V0dXAub3BhY2l0eVxuXG5cdGlmIHNldHVwLmJhdHRlcnkgPD0gNzAgJiYgc2V0dXAuYmF0dGVyeSA+IDIwXG5cdFx0bWlkQmF0dGVyeSA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmJhdHRlcnlNaWQpXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IG1pZEJhdHRlcnkuc3ZnXG5cdFx0bS51dGlscy5jaGFuZ2VGaWxsKGJhdHRlcnlJY29uLCBzZXR1cC5jb2xvcilcblxuXHRpZiBzZXR1cC5iYXR0ZXJ5IDw9IDIwXG5cdFx0bG93QmF0dGVyeSA9IG0udXRpbHMuc3ZnKG0uYXNzZXRzLmJhdHRlcnlMb3cpXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IGxvd0JhdHRlcnkuc3ZnXG5cdFx0bS51dGlscy5jaGFuZ2VGaWxsKGJhdHRlcnlJY29uLCBzZXR1cC5jb2xvcilcblxuXG5cdGJhdHRlcnlJY29uLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZyA6IFt0aW1lLCA3XVxuXHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cblx0Y2VsbHVsYXJJY29uID0gbS51dGlscy5zdmcobS5hc3NldHMuY2VsbHVsYXIpXG5cdGNlbGx1bGFyID0gbmV3IExheWVyXG5cdFx0d2lkdGg6Y2VsbHVsYXJJY29uLndpZHRoXG5cdFx0aGVpZ2h0OmNlbGx1bGFySWNvbi5oZWlnaHRcblx0XHRodG1sOmNlbGx1bGFySWNvbi5zdmdcblx0XHRzdXBlckxheWVyOnN0YXR1c0JhclxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRvcGFjaXR5OiBzZXR1cC5vcGFjaXR5XG5cdFx0bmFtZTpcImNlbGx1bGFyXCJcblxuXHRjZWxsdWxhci5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmc6IFtiYXR0ZXJ5SWNvbiwgN11cblx0XHRhbGlnbjpcInZlcnRpY2FsXCJcblxuXHRtLnV0aWxzLmNoYW5nZUZpbGwoY2VsbHVsYXIsIHNldHVwLmNvbG9yKVxuXG5cdHdpZmlJY29uID0gbS51dGlscy5zdmcobS5hc3NldHMud2lmaSwgc2V0dXAuY29sb3IpXG5cblx0d2lmaSA9IG5ldyBMYXllclxuXHRcdHdpZHRoOndpZmlJY29uLndpZHRoXG5cdFx0aGVpZ2h0OndpZmlJY29uLmhlaWdodFxuXHRcdHN1cGVyTGF5ZXI6c3RhdHVzQmFyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJ3aWZpXCJcblx0XHRodG1sOiB3aWZpSWNvbi5zdmdcblx0XHRvcGFjaXR5OiBzZXR1cC5vcGFjaXR5XG5cblx0bS51dGlscy5jaGFuZ2VGaWxsKHdpZmksIHNldHVwLmNvbG9yKVxuXG5cdHdpZmkuY29uc3RyYWludHMgPVxuXHRcdHRyYWlsaW5nOltjZWxsdWxhciwgNF1cblx0XHRhbGlnbjpcInZlcnRpY2FsXCJcblxuXHRtLmxheW91dC5zZXQoKVxuXG5cdCMgRXhwb3J0IHN0YXR1c0JhclxuXHRzdGF0dXNCYXIuYmF0dGVyeSA9IHt9XG5cdCMgc3RhdHVzQmFyLmJhdHRlcnkucGVyY2VudCA9IGJhdHRlcnlQZXJjZW50XG5cdHN0YXR1c0Jhci5iYXR0ZXJ5Lmljb24gPSBiYXR0ZXJ5SWNvblxuXHQjIHN0YXR1c0Jhci5ibHVldG9vdGggPSBibHVldG9vdGhcblx0c3RhdHVzQmFyLnRpbWUgPSB0aW1lXG5cdCMgc3RhdHVzQmFyLndpZmkgPSB3aWZpXG5cdHN0YXR1c0Jhci5jZWxsdWxhciA9IGNlbGx1bGFyXG5cblx0bS5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OltzdGF0dXNCYXIsIHRpbWUsIGJhdHRlcnlJY29uLCBjZWxsdWxhciwgd2lmaV1cblx0cmV0dXJuIHN0YXR1c0JhclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHR0YWI6IHtcblx0XHRsYWJlbDogXCJsYWJlbFwiXG5cdFx0aWNvbjpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMjVweCcgaGVpZ2h0PScyNXB4JyB2aWV3Qm94PScwIDAgMjUgMjUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPjE8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzEnPlxuXHRcdFx0XHRcdDxnIGlkPSdCb3R0b20tQmFyL1RhYi1CYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNS4wMDAwMDAsIC03LjAwMDAwMCknIGZpbGw9JyMwMDc2RkYnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J1BsYWNlaG9sZGVycycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjUuMDAwMDAwLCA3LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nMScgeD0nMCcgeT0nMCcgd2lkdGg9JzI1JyBoZWlnaHQ9JzI1JyByeD0nMyc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRhY3RpdmU6IHVuZGVmaW5lZFxuXHRcdHVuYWN0aXZlOiB1bmRlZmluZWRcblx0XHR0YWJCYXI6IHVuZGVmaW5lZFxuXHRcdHR5cGU6IFwidGFiXCJcblx0fVxuXHRiYXI6IHtcblx0XHR0YWJzOiBbXVxuXHRcdHN0YXJ0OjBcblx0XHR0eXBlOlwidGFiQmFyXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0YWN0aXZlQ29sb3I6XCJibHVlXCJcblx0XHRpbmFjdGl2ZUNvbG9yOlwiZ3JheVwiXG5cdFx0Ymx1cjp0cnVlXG5cdH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0cy50YWIucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLnRhYilcbmV4cG9ydHMuZGVmYXVsdHMuYmFyLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5iYXIpXG5cbmV4cG9ydHMudGFiID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IG0udXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMudGFiKVxuXHRzd2l0Y2ggbS5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHRAdGFiV2lkdGggPSA1NVxuXHRcdGVsc2Vcblx0XHRcdEB0YWJXaWR0aCA9IDc1XG5cdHRhYlZpZXcgPSBuZXcgTGF5ZXIgbmFtZTpzZXR1cC5sYWJlbCArIFwiIHZpZXdcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHR0YWJWaWV3LmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHR0YWJCb3ggPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpzZXR1cC5sYWJlbCArIFwiIHRhYlwiXG5cdHRhYkJveC5jb25zdHJhaW50cyA9XG5cdFx0d2lkdGg6QHRhYldpZHRoXG5cdFx0aGVpZ2h0OjQ5XG5cdGljb24gPSBuZXcgTGF5ZXIgd2lkdGg6bS51dGlscy5weCgyNSksIGhlaWdodDptLnV0aWxzLnB4KDI1KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImljb25cIiwgc3VwZXJMYXllcjp0YWJCb3hcblx0aWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6N1xuXHRzdmdGcmFtZSA9IG0udXRpbHMuc3ZnKHNldHVwLmljb24pXG5cdGljb24uaHRtbCA9IHN2Z0ZyYW1lLnN2Z1xuXHRpY29uLndpZHRoID0gc3ZnRnJhbWUud2lkdGhcblx0aWNvbi5oZWlnaHQgPSBzdmdGcmFtZS5oZWlnaHRcblx0bGFiZWwgPSBuZXcgbS5UZXh0IHRleHQ6c2V0dXAubGFiZWwsIHN1cGVyTGF5ZXI6dGFiQm94LCBjb2xvcjpcIiM5MjkyOTJcIiwgZm9udFNpemU6MTAsIG5hbWU6XCJsYWJlbFwiLCB0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiXG5cdGxhYmVsLmNvbnN0cmFpbnRzID1cblx0XHRib3R0b206MlxuXHRcdGhvcml6b250YWxDZW50ZXI6aWNvblxuXHRtLmxheW91dC5zZXQoKVxuXG5cdCMgRXhwb3J0IFRhYlxuXHR0YWJCb3gudHlwZSA9IFwidGFiXCJcblx0dGFiQm94Lmljb24gPSBpY29uXG5cdHRhYkJveC52aWV3ID0gdGFiVmlld1xuXHR0YWJCb3gubGFiZWwgPSBsYWJlbFxuXG5cdHJldHVybiB0YWJCb3hcblxuZXhwb3J0cy5iYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gbS51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cy5iYXIpXG5cdGlmIHNldHVwLnRhYnMubGVuZ3RoID09IDBcblx0XHRkdW1teVRhYiA9IG5ldyBleHBvcnRzLnRhYlxuXHRcdGR1bW15VGFiMiA9IG5ldyBleHBvcnRzLnRhYlxuXHRcdHNldHVwLnRhYnMucHVzaCBkdW1teVRhYlxuXHRcdHNldHVwLnRhYnMucHVzaCBkdW1teVRhYjJcblx0dGFiV2lkdGggPSA3NVxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2Vcblx0XHR3aGVuIFwiaXBob25lLTVcIlxuXHRcdFx0dGFiV2lkdGggPSA1NVxuXHRcdGVsc2Vcblx0XHRcdHRhYldpZHRoID0gNzVcblx0dGFiQmFyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJ0YWIgYmFyXCJcblx0dGFiQmFyQkcgPSBuZXcgQmFja2dyb3VuZExheWVyIHN1cGVyTGF5ZXI6dGFiQmFyLCBuYW1lOlwidGFiQmFyIGJhY2tncm91bmRcIlxuXHR0YWJCYXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRib3R0b206MFxuXHRcdGhlaWdodDo0OVxuXHR0YWJCYXJCRy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGJvdHRvbTowXG5cdFx0aGVpZ2h0OjQ5XG5cdGRpdmlkZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0IyQjJCMlwiLCBuYW1lOlwidGFiRGl2aWRlclwiLCBzdXBlckxheWVyOnRhYkJhclxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6MFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6LjVcblx0dGFiQmFyQm94ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6dGFiQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwidGFiQmFyIGJveFwiXG5cdHRhYkJhckJveC5jb25zdHJhaW50cyA9XG5cdFx0aGVpZ2h0OjQ5XG5cdFx0d2lkdGg6c2V0dXAudGFicy5sZW5ndGggKiB0YWJXaWR0aFxuXG5cdG0ubGF5b3V0LnNldCgpXG5cblx0c2V0QWN0aXZlID0gKHRhYkluZGV4KSAtPlxuXHRcdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHRcdGlmIGluZGV4ID09IHRhYkluZGV4XG5cdFx0XHRcdG0udXRpbHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgbS51dGlscy5jb2xvcihzZXR1cC5hY3RpdmVDb2xvcikpXG5cdFx0XHRcdHRhYi5sYWJlbC5jb2xvciA9IG0udXRpbHMuY29sb3Ioc2V0dXAuYWN0aXZlQ29sb3IpXG5cdFx0XHRcdHRhYi52aWV3LnZpc2libGUgPSB0cnVlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdG0udXRpbHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgbS51dGlscy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKSlcblx0XHRcdFx0dGFiLmxhYmVsLmNvbG9yID0gbS51dGlscy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKVxuXHRcdFx0XHR0YWIudmlldy52aXNpYmxlID0gZmFsc2VcblxuXHRmb3IgdGFiLCBpbmRleCBpbiBzZXR1cC50YWJzXG5cdFx0I0NoZWNrIGZvciB2YWlsZCB0YWIgb2JqZWN0XG5cdFx0aWYgdGFiLnR5cGUgIT0gXCJ0YWJcIlxuXHRcdFx0ZXJyb3IodGFiLmlkLCA1KVxuXG5cdFx0dGFiQmFyQm94LmFkZFN1YkxheWVyKHRhYilcblx0XHQjIENoYW5nZSBjb2xvcnNcblx0XHRtLnV0aWxzLmNoYW5nZUZpbGwodGFiLmljb24sIG0udXRpbHMuY29sb3Ioc2V0dXAuaW5hY3RpdmVDb2xvcikpXG5cdFx0dGFiLmxhYmVsLmNvbG9yID0gbS51dGlscy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKVxuXHRcdHRhYkJhckJHLmJhY2tncm91bmRDb2xvciA9IHNldHVwLmJhY2tncm91bmRDb2xvclxuXG5cdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LCAuOSlcIlxuXHRcdFx0bS51dGlscy5iZ0JsdXIodGFiQmFyQkcpXG5cblx0XHRpZiBpbmRleCA9PSAwXG5cdFx0XHR0YWIuY29uc3RyYWludHMubGVhZGluZyA9IDBcblx0XHRlbHNlXG5cdFx0XHR0YWIuY29uc3RyYWludHMubGVhZGluZyA9IHNldHVwLnRhYnNbaW5kZXggLSAxXVxuXG5cdFx0bS5sYXlvdXQuc2V0KHRhYilcblxuXHRcdHRhYi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHRhYkluZGV4ID0gQC54IC8gbS51dGlscy5weCh0YWJXaWR0aClcblx0XHRcdHNldEFjdGl2ZSh0YWJJbmRleClcblx0dGFiQmFyQm94LmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdHNldEFjdGl2ZShzZXR1cC5zdGFydClcblxuXHRtLmxheW91dC5zZXQoKVxuXHRyZXR1cm4gdGFiQmFyXG4iLCJtID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0J1xuXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGNvbnN0cmFpbnRzOnt9XG5cdHRleHQ6IFwiTWF0ZXJpYWwgVGV4dCBMYXllclwiXG5cdHR5cGU6XCJ0ZXh0XCJcblx0eDowXG5cdHk6MFxuXHR3aWR0aDotMVxuXHRoZWlnaHQ6LTFcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0c3R5bGU6XCJkZWZhdWx0XCJcblx0bGluZXM6MVxuXHR0ZXh0QWxpZ246XCJsZWZ0XCJcblx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRjb2xvcjpcImJsYWNrXCJcblx0Zm9udFNpemU6IDE3XG5cdGZvbnRTdHlsZTpcInJlZ3VsYXJcIlxuXHRmb250RmFtaWx5OlwiUm9ib3RvXCJcblx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRsaW5lSGVpZ2h0OlwiYXV0b1wiXG5cdG5hbWU6XCJ0ZXh0IGxheWVyXCJcblx0b3BhY2l0eToxXG5cdHRleHRUcmFuc2Zvcm06XCJub25lXCJcblx0bGV0dGVyU3BhY2luZzowXG5cdG5hbWU6XCJ0ZXh0IGxheWVyXCJcbn1cblxuI3VybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUJsYWNrSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1Cb2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLU1lZGl1bUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4jIHVybCgnbW9kdWxlcy9Sb2JvdG8vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG5cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbnN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcydcblxuc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwxMDAsMTAwaXRhbGljLDMwMCwzMDBpdGFsaWMsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDAsOTAwaXRhbGljKTtcXG4gQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7IFxcblwiKSlcblxuIyBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkBmb250LWZhY2Uge1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXCIgK1xuIyBcIlxcdHNyYzogbG9jYWwoJ+KYuicpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1UaGluSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cIiArXG4jIFwifVxcblwiICsgXCJcXHRmb250LXdlaWdodDogMTAwXCJcbiMgXCJcXHRmb250LWZhbWlseTogUm9ib3RvICFpbXBvcnRhbnQ7XFxuXCIgK1xuIyBcIn1cXG5cIikpXG5cbiMgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJAZm9udC1mYWNlIHtcXG5cIiArXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcblwiICtcbiMgXCJcXHRzcmM6IGxvY2FsKCfimLonKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcblwiICtcbiMgXCJ9XFxuXCIgKyBcIlxcdGZvbnQtd2VpZ2h0OiBsaWdodFwiXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xcblwiICtcbiMgXCJ9XFxuXCIpKVxuI1xuIyBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgpKVxuI1xuIyBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkBmb250LWZhY2Uge1xcblwiICtcbiMgXCJcXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuXCIgK1xuIyBcIlxcdHNyYzogbG9jYWwoJ+KYuicpLFxuIyB1cmwoJ21vZHVsZXMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cIiArXG4jIFwifVxcblwiICsgXCJcXHRmb250LXdlaWdodDogXFxcIm5vcm1hbFxcXCI7XFxuXCIgK1xuIyBcIlxcdGZvbnQtZmFtaWx5OiBSb2JvdG8gIWltcG9ydGFudDtcXG5cIiArXG4jIFwifVxcblwiICsgXCJAZm9udC1mYWNlIHtcXG5cIiArXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcblwiICtcbiMgXCJcXHRzcmM6IGxvY2FsKCfimLonKSxcbiMgdXJsKCdtb2R1bGVzL1JvYm90by9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXCIgK1xuIyBcIn1cXG5cIiArIFwiXFx0Zm9udC13ZWlnaHQ6IFxcXCJ0aGluXFxcIjtcXG5cIiArXG4jIFwiXFx0Zm9udC1mYW1pbHk6IFJvYm90byAhaW1wb3J0YW50O1xcblwiICtcbiMgXCJ9XFxuXCJcbiNcbiMgKSlcblxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSlcblxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBtLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRleGNlcHRpb25zID0gT2JqZWN0LmtleXMoc2V0dXApXG5cdHRleHRMYXllciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLm5hbWVcblx0dGV4dExheWVyLnR5cGUgPSBcInRleHRcIlxuXHR0ZXh0TGF5ZXIuaHRtbCA9IHNldHVwLnRleHRcblx0Zm9yIHByb3AgaW4gbS5saWIubGF5ZXJQcm9wc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwiY29sb3JcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IG0udXRpbHMuY29sb3Ioc2V0dXBbcHJvcF0pXG5cdFx0XHR0ZXh0TGF5ZXJbcHJvcF0gPSBzZXR1cFtwcm9wXVxuXHRmb3IgcHJvcCBpbiBtLmxpYi5sYXllclN0eWxlc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwibGluZUhlaWdodFwiICYmIHNldHVwW3Byb3BdID09IFwiYXV0b1wiXG5cdFx0XHRcdHRleHRMYXllci5zdHlsZS5saW5lSGVpZ2h0ID0gIHNldHVwLmZvbnRTaXplXG5cdFx0XHRpZiBwcm9wID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdHN3aXRjaCBzZXR1cFtwcm9wXVxuXHRcdFx0XHRcdHdoZW4gXCJ1bHRyYXRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMTAwXG5cdFx0XHRcdFx0d2hlbiBcInRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMjAwXG5cdFx0XHRcdFx0d2hlbiBcImxpZ2h0XCIgdGhlbiBzZXR1cFtwcm9wXSA9IDMwMFxuXHRcdFx0XHRcdHdoZW4gXCJyZWd1bGFyXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDQwMFxuXHRcdFx0XHRcdHdoZW4gXCJtZWRpdW1cIiB0aGVuIHNldHVwW3Byb3BdID0gNTAwXG5cdFx0XHRcdFx0d2hlbiBcInNlbWlib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDYwMFxuXHRcdFx0XHRcdHdoZW4gXCJib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDcwMFxuXHRcdFx0XHRcdHdoZW4gXCJibGFja1wiIHRoZW4gc2V0dXBbcHJvcF0gPSA4MDBcblx0XHRcdGlmIHByb3AgPT0gXCJmb250U2l6ZVwiIHx8IHByb3AgPT0gXCJsaW5lSGVpZ2h0XCIgfHwgcHJvcCA9PSBcImxldHRlclNwYWNpbmdcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IG0udXRpbHMucHgoc2V0dXBbcHJvcF0pICsgXCJweFwiXG5cdFx0XHR0ZXh0TGF5ZXIuc3R5bGVbcHJvcF0gPSBzZXR1cFtwcm9wXVxuXG5cdHRleHRGcmFtZSA9IG0udXRpbHMudGV4dEF1dG9TaXplKHRleHRMYXllcilcblx0dGV4dExheWVyLnByb3BzID0gKGhlaWdodDp0ZXh0RnJhbWUuaGVpZ2h0LCB3aWR0aDp0ZXh0RnJhbWUud2lkdGgpXG5cdHRleHRMYXllci5jb25zdHJhaW50cyA9IHNldHVwLmNvbnN0cmFpbnRzXG5cdG0ubGF5b3V0LnNldFxuXHRcdHRhcmdldDp0ZXh0TGF5ZXJcblx0cmV0dXJuIHRleHRMYXllclxuIiwibSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdCdcblxuIyMgQ29udmVydHMgcHggdG8gcHRcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvbS5kZXZpY2Uuc2NhbGVcblx0cHQgPSBNYXRoLnJvdW5kKHB0KVxuXHRyZXR1cm4gcHRcblxuIyMgQ29udmVydHMgcHQgdG8gcHhcbmV4cG9ydHMucHggPSAocHQpIC0+XG5cdHB4ID0gcHQgKiBtLmRldmljZS5zY2FsZVxuXHRweCA9IE1hdGgucm91bmQocHgpXG5cdHJldHVybiBweFxuXG4jIyBpT1MgQ29sb3Ig4oCTIFRoaXMgd2lsbCBzdG9yZSBhbGwgb2YgdGhlIGRlZmF1bHQgaU9TIGNvbG9ycyBpbnRlYWQgb2YgdGhlIGRlZmF1bHQgQ1NTIGNvbG9ycy4gKlRoaXMgaXMgb25seSB1cCBoZXJlIGJlY2F1c2UgSSByZWZlciB0byBpdCBpbiB0aGUgZGVmYXVsdHMuKlxuZXhwb3J0cy5jb2xvciA9IChjb2xvclN0cmluZykgLT5cblx0aWYgY29sb3JTdHJpbmdbMF0gPT0gXCIjXCJcblx0XHRyZXR1cm4gY29sb3JTdHJpbmdcblx0ZWxzZVxuXHRcdGNvbG9yID0gIG5ldyBDb2xvcihtLmxpYi5jb2xvcnNbY29sb3JTdHJpbmddKVxuXHRcdHJldHVybiBjb2xvclxuXG4jIFN1cHBvcnRpbmcgRnVuY3Rpb25zXG4jIFV0aWxzXG5cbiMgQ2xlYW5zIGEgc3RyaW5nIG9mIDxicj4gYW5kICZuYnNwO1xuZXhwb3J0cy5jbGVhbiA9IChzdHJpbmcpIC0+XG5cdCMjIHJlbW92ZSB3aGl0ZSBzcGFjZVxuXHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvWyZdbmJzcFs7XS9naSwgXCIgXCIpLnJlcGxhY2UoL1s8XWJyWz5dL2dpLCBcIlwiKVxuXHRyZXR1cm4gc3RyaW5nXG5cbiMgQ29udmVydHMgcHgncyBvZiBhbiBTVkcgdG8gc2NhbGFibGUgdmFyaWFibGVzXG5leHBvcnRzLnN2ZyA9IChzdmcpIC0+XG5cdCMgRmluZCBTdHJpbmdcblx0c3RhcnRJbmRleCA9IHN2Zy5zZWFyY2goXCI8c3ZnIHdpZHRoPVwiKVxuXHRlbmRJbmRleCA9IHN2Zy5zZWFyY2goXCIgdmlld0JveFwiKVxuXHRzdHJpbmcgPSBzdmcuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpXG5cblx0I0ZpbmQgd2lkdGhcblx0d1N0YXJ0SW5kZXggPSBzdHJpbmcuc2VhcmNoKFwiPVwiKSArIDJcblx0d0VuZEluZGV4ID0gIHN0cmluZy5zZWFyY2goXCJweFwiKVxuXHR3aWR0aCA9IHN0cmluZy5zbGljZSh3U3RhcnRJbmRleCwgd0VuZEluZGV4KVxuXHRuZXdXaWR0aCA9IGV4cG9ydHMucHgod2lkdGgpXG5cblx0IyBGaW5kIEhlaWdodFxuXHRoZWlnaHRTdHJpbmcgPSBzdHJpbmcuc2xpY2Uod0VuZEluZGV4ICsgNCwgc3RyaW5nLmxlbmd0aClcblx0aFN0YXJ0SW5kZXggPSBoZWlnaHRTdHJpbmcuc2VhcmNoKFwiPVwiKSsgMlxuXHRoRW5kSW5kZXggPSBoZWlnaHRTdHJpbmcuc2VhcmNoKFwicHhcIilcblx0aGVpZ2h0ID0gaGVpZ2h0U3RyaW5nLnNsaWNlKGhTdGFydEluZGV4LCBoRW5kSW5kZXgpXG5cdG5ld0hlaWdodCA9IGV4cG9ydHMucHgoaGVpZ2h0KVxuXG5cdCNDcmVhdGUgbmV3IHN0cmluZ1xuXHRuZXdTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSh3aWR0aCwgbmV3V2lkdGgpXG5cdG5ld1N0cmluZyA9IG5ld1N0cmluZy5yZXBsYWNlKGhlaWdodCwgbmV3SGVpZ2h0KVxuXG5cdCNSZXBsYWNlIHN0cmluZ3Ncblx0c3ZnID0gc3ZnLnJlcGxhY2Uoc3RyaW5nLCBuZXdTdHJpbmcpXG5cblx0cmV0dXJuIHtcblx0XHRzdmc6c3ZnXG5cdFx0d2lkdGg6bmV3V2lkdGhcblx0XHRoZWlnaHQ6bmV3SGVpZ2h0XG5cdH1cblxuIyBDaGFuZ2VzIHRoZSBmaWxsIG9mIGFuIFNWR1xuZXhwb3J0cy5jaGFuZ2VGaWxsID0gKGxheWVyLCBjb2xvcikgLT5cblx0aWYgdHlwZW9mIGNvbG9yICE9IFwib2JqZWN0XCJcblx0XHRjb2xvciA9IGV4cG9ydHMuY29sb3IoY29sb3IpXG5cdHN0YXJ0SW5kZXggPSBsYXllci5odG1sLnNlYXJjaChcImZpbGw9XFxcIiNcIilcblx0ZmlsbFN0cmluZyA9IGxheWVyLmh0bWwuc2xpY2Uoc3RhcnRJbmRleCwgbGF5ZXIuaHRtbC5sZW5ndGgpXG5cdGVuZEluZGV4ID0gZmlsbFN0cmluZy5zZWFyY2goXCJcXFwiXCIpICsgOFxuXHRzdHJpbmcgPSBmaWxsU3RyaW5nLnNsaWNlKDAsIGVuZEluZGV4KVxuXHRuZXdTdHJpbmcgPSBcImZpbGw9XFxcIlwiICsgY29sb3Jcblx0bGF5ZXIuaHRtbCA9IGxheWVyLmh0bWwucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuZXhwb3J0cy5jYXBpdGFsaXplID0gKHN0cmluZykgLT5cblx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxuXG4jIFJldHVybnMgdGhlIGN1cnJlbnQgdGltZVxuZXhwb3J0cy5nZXRUaW1lID0gLT5cblx0ZGF5c09mVGhlV2VlayA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG5cdG1vbnRoc09mVGhlWWVhciA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdXG5cdGRhdGVPYmogPSBuZXcgRGF0ZSgpXG5cdG1vbnRoID0gbW9udGhzT2ZUaGVZZWFyW2RhdGVPYmouZ2V0TW9udGgoKV1cblx0ZGF0ZSA9IGRhdGVPYmouZ2V0RGF0ZSgpXG5cdGRheSA9IGRheXNPZlRoZVdlZWtbZGF0ZU9iai5nZXREYXkoKV1cblx0aG91cnMgPSBkYXRlT2JqLmdldEhvdXJzKClcblx0bWlucyA9IGRhdGVPYmouZ2V0TWludXRlcygpXG5cdHNlY3MgPSBkYXRlT2JqLmdldFNlY29uZHMoKVxuXHRyZXR1cm4ge1xuXHRcdG1vbnRoOm1vbnRoXG5cdFx0ZGF0ZTpkYXRlXG5cdFx0ZGF5OmRheVxuXHRcdGhvdXJzOmhvdXJzXG5cdFx0bWluczptaW5zXG5cdFx0c2VjczpzZWNzXG5cdH1cblxuZXhwb3J0cy5iZ0JsdXIgPSAobGF5ZXIpIC0+XG5cdGxheWVyLnN0eWxlW1wiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIl0gPSBcImJsdXIoI3tleHBvcnRzLnB4KDUpfXB4KVwiXG5cdHJldHVybiBsYXllclxuXG5leHBvcnRzLnRleHRBdXRvU2l6ZSA9ICh0ZXh0TGF5ZXIpIC0+XG5cdCNEZWZpbmUgV2lkdGhcblx0Y29uc3RyYWludHMgPSB7fVxuXHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHNcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0XG5cdFx0XHRjb25zdHJhaW50cy5oZWlnaHQgPSBleHBvcnRzLnB4KHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHQpXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoXG5cdFx0XHRjb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXG5cdHN0eWxlcyA9XG5cdFx0Zm9udFNpemU6IHRleHRMYXllci5zdHlsZS5mb250U2l6ZVxuXHRcdGZvbnRGYW1pbHk6IHRleHRMYXllci5zdHlsZS5mb250RmFtaWx5XG5cdFx0Zm9udFdlaWdodDogdGV4dExheWVyLnN0eWxlLmZvbnRXZWlnaHRcblx0XHRmb250U3R5bGU6IHRleHRMYXllci5zdHlsZS5mb250U3R5bGVcblx0XHRsaW5lSGVpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGUubGluZUhlaWdodFxuXHRcdGxldHRlclNwYWNpbmc6IHRleHRMYXllci5zdHlsZS5sZXR0ZXJTcGFjaW5nXG5cdFx0dGV4dFRyYW5zZm9ybTogdGV4dExheWVyLnN0eWxlLnRleHRUcmFuc2Zvcm1cblx0dGV4dEZyYW1lID0gVXRpbHMudGV4dFNpemUodGV4dExheWVyLmh0bWwsIHN0eWxlcywgY29uc3RyYWludHMpXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiB0ZXh0RnJhbWUud2lkdGhcblx0XHRoZWlnaHQ6IHRleHRGcmFtZS5oZWlnaHRcblx0fVxuXG5leHBvcnRzLmdldERldmljZSA9IC0+XG5cdCMgTG9hZHMgdGhlIGluaXRpYWwgZnJhbWVcblx0ZGV2aWNlID0gXCJcIlxuXHRmcmFtZSA9IHRydWVcblx0aWYgbS5saWIucmVhbERldmljZXNbaW5uZXJXaWR0aF0gJiYgbS5saWIucmVhbERldmljZXNbaW5uZXJXaWR0aF1baW5uZXJIZWlnaHRdXG5cdFx0ZGV2aWNlID0gbS5saWIucmVhbERldmljZXNbaW5uZXJXaWR0aF1baW5uZXJIZWlnaHRdXG5cdFx0ZnJhbWUgPSBmYWxzZVxuXHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0aWYgZnJhbWVcblx0XHRkZXZpY2UgPVxuXHRcdFx0bmFtZTogRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG5cdFx0XHR3aWR0aCA6ICBGcmFtZXIuRGV2aWNlVmlldy5EZXZpY2VzW0ZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZV0uc2NyZWVuV2lkdGhcblx0XHRcdGhlaWdodDogIEZyYW1lci5EZXZpY2VWaWV3LkRldmljZXNbRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXS5zY3JlZW5IZWlnaHRcblx0XHRcdHNjYWxlOiBtLmxpYi5mcmFtZXJGcmFtZXNbRnJhbWVyLkRldmljZVZpZXcuRGV2aWNlc1tGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVdLnNjcmVlbldpZHRoXVxuXG5cdGlmIGRldmljZS5zY2FsZSA9PSB1bmRlZmluZWRcblx0XHRkZXZpY2Uuc2NhbGUgPSAyXG5cdGlmIGRldmljZS53aWR0aCA9PSB1bmRlZmluZWRcblx0XHRkZXZpY2Uud2lkdGggPSBpbm5lcldpZHRoXG5cdGlmIGRldmljZS5oZWlnaHQgPT0gdW5kZWZpbmVkXG5cdFx0ZGV2aWNlLmhlaWdodCA9IGlubmVySGVpZ2h0XG5cblx0cmV0dXJuIGRldmljZVxuXG5cbiMgU3BlY2lhbCBDaGFyYWN0ZXJzXG5leHBvcnRzLnNwZWNpYWxDaGFyID0gKGxheWVyKSAtPlxuXHR0ZXh0ID0gbGF5ZXJcblx0aWYgbGF5ZXIudHlwZSA9PSBcImJ1dHRvblwiXG5cdFx0dGV4dCA9IGxheWVyLmxhYmVsXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtmb250V2VpZ2h0OjYwMH1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1yXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJyZWRcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1yYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1yYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImJsdWVcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1sYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1sYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImxpZ2h0LWJsdWVcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1nXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWcgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJncmVlblwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLW9cIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItbyBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcIm9yYW5nZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXBcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItcCBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcIm9yYW5nZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXlcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCIteSBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcInllbGxvd1wifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLSNcIikgIT0gLTFcblx0XHRjaG9zZW5Db2xvciA9IHRleHQuaHRtbC5zbGljZSgxLCA4KVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwuc2xpY2UoOSwgdGV4dC5odG1sLmxlbmd0aClcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpjaG9zZW5Db2xvcn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1cIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fV0pXG5cdGlmIGxheWVyLmJ1dHRvblR5cGUgPT0gXCJ0ZXh0XCJcblx0XHRsYXllci53aWR0aCA9IHRleHQud2lkdGhcblx0bS5sYXlvdXQuc2V0KClcblxuZXhwb3J0cy51cGRhdGUgPSAobGF5ZXIsIGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGlmIGxheWVyLnR5cGUgPT0gXCJ0ZXh0XCJcblx0XHRmb3IgY2hhbmdlIGluIGFycmF5XG5cdFx0XHRrZXkgPSBPYmplY3Qua2V5cyhjaGFuZ2UpWzBdXG5cdFx0XHR2YWx1ZSA9IGNoYW5nZVtrZXldXG5cdFx0XHRpZiBrZXkgPT0gXCJ0ZXh0XCJcblx0XHRcdFx0bGF5ZXIuaHRtbCA9IHZhbHVlXG5cdFx0XHRpZiBrZXkgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVba2V5XSA9IHZhbHVlXG5cdFx0XHRpZiBrZXkgPT0gXCJjb2xvclwiXG5cdFx0XHRcdGxheWVyLmNvbG9yID0gZXhwb3J0cy5jb2xvcih2YWx1ZSlcblxuXHRcdHRleHRGcmFtZSA9IGV4cG9ydHMudGV4dEF1dG9TaXplKGxheWVyKVxuXHRcdGxheWVyLndpZHRoID0gdGV4dEZyYW1lLndpZHRoXG5cdFx0bGF5ZXIuaGVpZ2h0ID0gdGV4dEZyYW1lLmhlaWdodFxuXG5cblx0bS5sYXlvdXQuc2V0KClcblxuIyBEZWNpZGVzIGlmIGl0IHNob3VsZCBiZSB3aGl0ZS9ibGFjayB0ZXh0XG5leHBvcnRzLmF1dG9Db2xvciA9IChjb2xvck9iamVjdCkgLT5cblx0cmdiID0gY29sb3JPYmplY3QudG9SZ2JTdHJpbmcoKVxuXHRyZ2IgPSByZ2Iuc3Vic3RyaW5nKDQsIHJnYi5sZW5ndGgtMSlcblx0cmdiID0gcmdiLnJlcGxhY2UoLyAvZywgJycpXG5cdHJnYiA9IHJnYi5yZXBsYWNlKC8gL2csICcnKVxuXHRyZ2IgPSByZ2Iuc3BsaXQoJywnKVxuXHRyZWQgPSByZ2JbMF1cblx0Z3JlZW4gPSByZ2JbMV1cblx0Ymx1ZSA9IHJnYlsyXVxuXHRjb2xvciA9IFwiXCJcblx0aWYgKHJlZCowLjI5OSArIGdyZWVuKjAuNTg3ICsgYmx1ZSowLjExNCkgPiAxODZcblx0XHRjb2xvciA9IGV4cG9ydHMuY29sb3IoXCJibGFja1wiKVxuXHRlbHNlXG5cdFx0Y29sb3IgPSBleHBvcnRzLmNvbG9yKFwid2hpdGVcIilcblx0cmV0dXJuIGNvbG9yXG5cbmV4cG9ydHMuc2FtZVBhcmVudCA9IChsYXllcjEsIGxheWVyMikgLT5cblx0cGFyZW50T25lID0gbGF5ZXIxLnN1cGVyTGF5ZXJcblx0cGFyZW50VHdvID0gbGF5ZXIyLnN1cGVyTGF5ZXJcblx0aWYgcGFyZW50T25lID09IHBhcmVudFR3b1xuXHRcdHJldHVybiB0cnVlXG5cdGVsc2Vcblx0XHRyZXR1cm4gZmFsc2VcblxuXG5leHBvcnRzLnRpbWVEZWxlZ2F0ZSA9IChsYXllciwgY2xvY2tUeXBlKSAtPlxuXHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFV0aWxzLmRlbGF5IDYwIC0gQHRpbWUuc2VjcywgLT5cblx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG5cdFx0VXRpbHMuaW50ZXJ2YWwgNjAsIC0+XG5cdFx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcblxuZXhwb3J0cy50aW1lRm9ybWF0dGVyID0gKHRpbWVPYmosIGNsb2NrVHlwZSkgLT5cblx0aWYgY2xvY2tUeXBlID09IGZhbHNlXG5cdFx0aWYgdGltZU9iai5ob3VycyA+IDEyXG5cdFx0XHR0aW1lT2JqLmhvdXJzID0gdGltZU9iai5ob3VycyAtIDEyXG5cdFx0aWYgdGltZU9iai5ob3VycyA9PSAwIHRoZW4gdGltZU9iai5ob3VycyA9IDEyXG5cdGlmIHRpbWVPYmoubWlucyA8IDEwXG5cdFx0dGltZU9iai5taW5zID0gXCIwXCIgKyB0aW1lT2JqLm1pbnNcblx0cmV0dXJuIHRpbWVPYmouaG91cnMgKyBcIjpcIiArIHRpbWVPYmoubWluc1xuXG5leHBvcnRzLnNldHVwQ29tcG9uZW50ID0gKGFycmF5LCBkZWZhdWx0cykgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRvYmogPSB7fVxuXHRmb3IgaSBpbiBkZWZhdWx0cy5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0b2JqW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRvYmpbaV0gPSBkZWZhdWx0c1tpXVxuXHRyZXR1cm4gb2JqXG5cblxuZXhwb3J0cy5lbW9qaUZvcm1hdHRlciA9IChzdHJpbmcpIC0+XG5cdFx0dW5pY29kZUZvcm1hdCA9IFwiXCJcblx0XHRpZiBzdHJpbmdbMF0gPT0gXCJFXCIgfHwgc3RyaW5nWzBdID09IFwiM1wiIHx8IHN0cmluZ1swXSA9PSBcIjJcIiB8fCBzdHJpbmdbMF0gPT0gXCJDXCJcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdGVsc2Vcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdHVuaWNvZGVGb3JtYXQgPSBcIiVGMCU5RlwiXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHVuaWNvZGVGb3JtYXQpXG5cdFx0cmV0dXJuIGRlY29kZWRcblxuZXhwb3J0cy5idWlsZEVtb2ppc09iamVjdCA9ICgpIC0+XG5cdGVtb2ppcyA9IFtdXG5cdGZvciBjb2RlLCBpbmRleCBpbiBtLmFzc2V0cy5lbW9qaUNvZGVzXG5cdFx0ZW1vamkgPSBleHBvcnRzLmVtb2ppRm9ybWF0dGVyKGNvZGUpXG5cdFx0ZW1vamlzLnB1c2ggZW1vamlcblxuXG5cbiNsYXllciwgbW92ZVRvVGFwLCBjb2xvciwgc2NhbGUsIGN1cnZlXG5leHBvcnRzLmlua3kgPSAoc2V0dXApIC0+XG5cdHN0YXJ0WCA9IHNldHVwLmxheWVyLndpZHRoLzJcblx0c3RhcnRZID0gc2V0dXAubGF5ZXIuaGVpZ2h0LzJcblxuXHRpbmtDb2xvciA9IFwiIzBBMEEwQVwiXG5cdGlua1NjYWxlID0gM1xuXHRpbmtDdXJ2ZSA9IFwiYmV6aWVyLWN1cnZlKC4yLCAwLjQsIDAuNCwgMS4wKVwiXG5cdGlua09wYWNpdHkgPSAxXG5cdG1vdmVUb1RhcCA9IHRydWVcblxuXHRpZiBzZXR1cC5tb3ZlVG9UYXAgIT0gdW5kZWZpbmVkXG5cdFx0bW92ZVRvVGFwID0gc2V0dXAubW92ZVRvVGFwXG5cblx0aWYgc2V0dXAuY29sb3IgIT0gdW5kZWZpbmVkXG5cdFx0aW5rQ29sb3IgPSBtLmNvbG9yKHNldHVwLmNvbG9yKVxuXG5cdGlmIHNldHVwLnNjYWxlICE9IHVuZGVmaW5lZFxuXHRcdGlua1NjYWxlID0gc2V0dXAuc2NhbGVcblxuXHRpZiBzZXR1cC5jdXJ2ZSAhPSB1bmRlZmluZWRcblx0XHRpbmtDdXJ2ZSA9IHNldHVwLmN1cnZlXG5cblx0aWYgc2V0dXAub3BhY2l0eSAhPSB1bmRlZmluZWRcblx0XHRpbmtPcGFjaXR5ID0gc2V0dXAub3BhY2l0eVxuXG5cdGlua3lFZmZlY3QgPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdGlmIG1vdmVUb1RhcCA9PSB0cnVlXG5cdFx0XHRzdGFydFggPSBldmVudC5vZmZzZXRYXG5cdFx0XHRzdGFydFkgPSBldmVudC5vZmZzZXRZXG5cblx0XHRcdGlmIFV0aWxzLmlzQ2hyb21lKCkgPT0gZmFsc2UgJiYgVXRpbHMuaXNUb3VjaCgpXG5cdFx0XHRcdHN0YXJ0WCA9IGV2ZW50LnRvdWNoQ2VudGVyLnggLSBsYXllci54XG5cdFx0XHRcdHN0YXJ0WSA9IGV2ZW50LnRvdWNoQ2VudGVyLnkgLSBsYXllci55XG5cblx0XHRjaXJjbGUgPSBuZXcgTGF5ZXJcblx0XHRcdGJhY2tncm91bmRDb2xvcjppbmtDb2xvclxuXHRcdFx0bWlkWDpzdGFydFhcblx0XHRcdG1pZFk6c3RhcnRZXG5cdFx0XHRzdXBlckxheWVyOnNldHVwLmxheWVyXG5cdFx0XHRib3JkZXJSYWRpdXM6bS51dGlscy5weCg1MClcblx0XHRcdG9wYWNpdHk6IGlua09wYWNpdHlcblxuXHRcdGNpcmNsZS5zY2FsZSA9IC4xXG5cdFx0Y2lyY2xlLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KHNjYWxlOmlua1NjYWxlLCBvcGFjaXR5OjApXG5cdFx0XHRjdXJ2ZTppbmtDdXJ2ZVxuXHRcdFx0dGltZTouNVxuXHRcdFV0aWxzLmRlbGF5IDEsIC0+XG5cdFx0XHRjaXJjbGUuZGVzdHJveSgpXG5cblx0aWYgVXRpbHMuaXNDaHJvbWUoKSAmJiBVdGlscy5pc1RvdWNoKClcblx0XHRzZXR1cC5sYXllci5vbiBFdmVudHMuRG91YmxlVGFwLCAoZXZlbnQpIC0+XG5cdFx0XHRpbmt5RWZmZWN0KGV2ZW50KVxuXHRpZiBVdGlscy5pc0Nocm9tZSgpID09IGZhbHNlICYmIFV0aWxzLmlzVG91Y2goKVxuXHRcdHNldHVwLmxheWVyLm9uIEV2ZW50cy5UYXAsIChldmVudCkgLT5cblx0XHRcdGlua3lFZmZlY3QoZXZlbnQsIEApXG5cdGlmIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0c2V0dXAubGF5ZXIub24gRXZlbnRzLlRvdWNoRW5kLCAoZXZlbnQpIC0+XG5cdFx0XHRpbmt5RWZmZWN0KGV2ZW50KVxuIiwiI21hdGVyaWFsS2l0IE1vZHVsZVxuI0J5IEtldnluIEFybm90dFxuXG4jIEltcG9ydCBmcmFtZXdvcmtcbmV4cG9ydHMubGF5b3V0ID0gbGF5b3V0ID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWxheW91dCdcbmV4cG9ydHMubGliID0gbGlicmFyeSA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1saWJyYXJ5J1xuZXhwb3J0cy51dGlscyA9IHV0aWxzID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LXV0aWxzJ1xuXG4jIFNldHVwIHJlc291cmNlc1xuZXhwb3J0cy5kZXZpY2UgPSB1dGlscy5nZXREZXZpY2UoKVxuZXhwb3J0cy5hc3NldHMgPSBsaWJyYXJ5LmFzc2V0c1xuXG4jIyBTaG9ydGN1dHNcbmV4cG9ydHMuY29sb3IgPSAoY29sb3JTdHJpbmcpIC0+XG4gIHJldHVybiBleHBvcnRzLnV0aWxzLmNvbG9yKGNvbG9yU3RyaW5nKVxuXG5leHBvcnRzLmRwID0gKHB4KSAtPlxuICByZXR1cm4gZXhwb3J0cy51dGlscy5wdChweClcblxuZXhwb3J0cy5weCA9IChkcCkgLT5cbiAgcmV0dXJuIGV4cG9ydHMudXRpbHMucHgoZHApXG5cblxuIyBJbXBvcnQgQ29tcG9uZW50c1xuYWxlcnQgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtYWxlcnQnXG5hcHBiYXIgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtYXBwLWJhcidcbmJhbm5lciA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1iYW5uZXInXG5idXR0b24gPSByZXF1aXJlICdtYXRlcmlhbC1raXQtYnV0dG9uJ1xuZmllbGQgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtZmllbGQnXG5pY29uID0gcmVxdWlyZSAnbWF0ZXJpYWwta2l0LWljb24nXG5rZXlib2FyZCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1rZXlib2FyZCdcbm5hdiA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC1uYXYtYmFyJ1xuc2hlZXQgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtc2hlZXQnXG5zdGF0dXMgPSByZXF1aXJlICdtYXRlcmlhbC1raXQtc3RhdHVzLWJhcidcbnRhYiA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC10YWItYmFyJ1xudGV4dCA9IHJlcXVpcmUgJ21hdGVyaWFsLWtpdC10ZXh0J1xuXG4jIyBTZXR1cCBDb21wb25lbnRzXG5leHBvcnRzLkFsZXJ0ID0gYWxlcnQuY3JlYXRlXG5leHBvcnRzLkFwcEJhciA9IGFwcGJhci5jcmVhdGVcbmV4cG9ydHMuQmFubmVyID0gYmFubmVyLmNyZWF0ZVxuZXhwb3J0cy5CdXR0b24gPSBidXR0b24uY3JlYXRlXG5leHBvcnRzLkZpZWxkID0gZmllbGQuY3JlYXRlXG5leHBvcnRzLkljb24gPSBpY29uLmNyZWF0ZVxuZXhwb3J0cy5LZXlib2FyZCA9IGtleWJvYXJkLmNyZWF0ZVxuZXhwb3J0cy5OYXZCYXIgPSBuYXYuY3JlYXRlXG5leHBvcnRzLlNoZWV0ID0gc2hlZXQuY3JlYXRlXG5leHBvcnRzLlN0YXR1c0JhciA9IHN0YXR1cy5jcmVhdGVcbmV4cG9ydHMuVGFiID0gdGFiLnRhYlxuZXhwb3J0cy5UYWJCYXIgPSB0YWIuYmFyXG5leHBvcnRzLlRleHQgPSB0ZXh0LmNyZWF0ZVxuIl19
