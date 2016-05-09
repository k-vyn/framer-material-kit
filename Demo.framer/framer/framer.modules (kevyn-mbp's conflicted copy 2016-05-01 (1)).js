require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ios-kit-banner":[function(require,module,exports){
var ios;

ios = require('ios-kit');

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
  setup = ios.setupComponent(array, exports.defaults);
  banner = new Layer({
    backgroundColor: "transparent",
    name: "banner"
  });
  banner.html = ios.utils.svg(ios.assets.bannerBG[ios.device.name]).svg;
  banner.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 68
  };
  switch (ios.device.name) {
    case "ipad":
      this.leadingIcon = 200;
      this.topIcon = 15;
      this.topTitle = 11;
      this.topMessage = 2;
      break;
    case "ipad-pro":
      this.leadingIcon = 192;
      this.topIcon = 12;
      this.topTitle = 9;
      this.topMessage = 2;
      break;
    case "iphone-6s-plus":
      this.leadingIcon = 15;
      this.topIcon = 12;
      this.topTitle = 10;
      this.topMessage = 7;
      break;
    default:
      this.leadingIcon = 15;
      this.topIcon = 8;
      this.topTitle = 6;
      this.topMessage = 2;
  }
  if (setup.icon === void 0) {
    setup.icon = new Layer({
      superLayer: banner
    });
    setup.icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)";
  } else {
    banner.addSubLayer(setup.icon);
  }
  setup.icon.borderRadius = ios.utils.px(4.5);
  setup.icon.name = "icon";
  setup.icon.constraints = {
    height: 20,
    width: 20,
    leading: this.leadingIcon,
    top: this.topIcon
  };
  title = new ios.Text({
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
  message = new ios.Text({
    style: "bannerMessage",
    text: setup.message,
    color: "white",
    fontSize: 13,
    superLayer: banner,
    name: "message"
  });
  message.constraints = {
    leadingEdges: title,
    top: [title, this.topMessage]
  };
  time = new ios.Text({
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
  if (ios.device.name === "ipad" || ios.device.name === "ipad-pro") {
    time.constraints = {
      bottomEdges: title,
      trailing: this.leadingIcon
    };
  }
  ios.layout.set();
  ios.utils.bgBlur(banner);
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
    if (banner.maxY < ios.utils.px(68)) {
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
    width: ios.device.width,
    maxY: banner.y,
    height: ios.device.height
  });
  ios.utils.bgBlur(bannerBuffer);
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


},{"ios-kit":"ios-kit"}],"ios-kit-layout":[function(require,module,exports){
var ios, layout;

ios = require('ios-kit');

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
        layer.superFrame.height = ios.device.height;
        layer.superFrame.width = ios.device.width;
      }
      if (layer.constraints.leading !== void 0 && layer.constraints.trailing !== void 0) {
        layer.constraints.autoWidth = {};
      }
      if (layer.constraints.top !== void 0 && layer.constraints.bottom !== void 0) {
        layer.constraints.autoHeight = {};
      }
      if (layer.constraints.width !== void 0) {
        props.width = ios.utils.px(layer.constraints.width);
      } else {
        props.width = layer.width;
      }
      if (layer.constraints.height !== void 0) {
        props.height = ios.utils.px(layer.constraints.height);
      } else {
        props.height = layer.height;
      }
      if (layer.constraints.leading !== void 0) {
        if (layer.constraints.leading === parseInt(layer.constraints.leading, 10)) {
          props.x = ios.utils.px(layer.constraints.leading);
        } else {
          if (layer.constraints.leading[0].calculatedPosition === void 0) {
            exports.animateLayout({
              layer: layer.constraints.leading[0]
            });
          }
          if (layer.constraints.leading.length === void 0) {
            props.x = layer.constraints.leading.calculatedPosition.x + layer.constraints.leading.calculatedPosition.width;
          } else {
            props.x = layer.constraints.leading[0].calculatedPosition.x + layer.constraints.leading[0].calculatedPosition.width + ios.utils.px(layer.constraints.leading[1]);
          }
        }
      }
      if (layer.constraints.autoWidth !== void 0) {
        layer.constraints.autoWidth.startX = props.x;
      }
      if (layer.constraints.trailing !== void 0) {
        if (layer.constraints.trailing === parseInt(layer.constraints.trailing, 10)) {
          props.x = layer.superFrame.width - ios.utils.px(layer.constraints.trailing) - props.width;
        } else {
          if (layer.constraints.trailing[0].calculatedPosition === void 0) {
            exports.animateLayout({
              layer: layer.constraints.trailing[0]
            });
          }
          if (layer.constraints.trailing.length === void 0) {
            props.x = layer.constraints.trailing.calculatedPosition.x - props.width;
          } else {
            props.x = layer.constraints.trailing[0].calculatedPosition.x - ios.utils.px(layer.constraints.trailing[1]) - props.width;
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
          props.y = ios.utils.px(layer.constraints.top);
        } else {
          if (layer.constraints.top.length === void 0) {
            props.y = layer.constraints.top.calculatedPosition.y + layer.constraints.top.calculatedPosition.height;
          } else {
            props.y = layer.constraints.top[0].calculatedPosition.y + layer.constraints.top[0].calculatedPosition.height + ios.utils.px(layer.constraints.top[1]);
          }
        }
      }
      if (layer.constraints.autoHeight !== void 0) {
        layer.constraints.autoHeight.startY = props.y;
      }
      if (layer.constraints.bottom !== void 0) {
        if (layer.constraints.bottom === parseInt(layer.constraints.bottom, 10)) {
          props.y = layer.superFrame.height - ios.utils.px(layer.constraints.bottom) - props.height;
        } else {
          if (layer.constraints.bottom.length === void 0) {
            props.y = layer.constraints.bottom.calculatedPosition.y - props.height;
          } else {
            props.y = layer.constraints.bottom[0].calculatedPosition.y - ios.utils.px(layer.constraints.bottom[1]) - props.height;
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


},{"ios-kit":"ios-kit"}],"ios-kit-library":[function(require,module,exports){
var layer;

layer = new Layer;

exports.layerProps = Object.keys(layer.props);

exports.layerProps.push("superLayer");

exports.layerStyles = Object.keys(layer.style);

layer.destroy();

exports.assets = {
  bannerBG: {
    "iphone-5": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='320px' height='68px' viewBox='0 0 320 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>iphone5</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPhone-5/5S/5C' fill='#1A1A1C'> <path d='M0,0 L320,0 L320,68 L0,68 L0,0 Z M142,61.0048815 C142,59.897616 142.896279,59 144.0024,59 L176.9976,59 C178.103495,59 179,59.8938998 179,61.0048815 L179,61.9951185 C179,63.102384 178.103721,64 176.9976,64 L144.0024,64 C142.896505,64 142,63.1061002 142,61.9951185 L142,61.0048815 Z' id='iphone5'></path> </g> </g> </svg>",
    "iphone-6s": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='375px' height='68px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'> <g transform='translate(58.000000, 7.000000)' id='Notification-container'> <g> <path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path> </g> </g> </g> </g> </svg>",
    "iphone-6s-plus": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='414px' height='68px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background Copy</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'> <g transform='translate(43.000000, 74.000000)' id='Notification-container'> <g> <path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path> </g> </g> </g> </g> </svg>",
    "ipad": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='768px' height='68px' viewBox='0 0 768 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Portrait' fill='#1A1A1C'> <path d='M0,0 L768,0 L768,68 L0,68 L0,0 Z M366,61.0048815 C366,59.897616 366.896279,59 368.0024,59 L400.9976,59 C402.103495,59 403,59.8938998 403,61.0048815 L403,61.9951185 C403,63.102384 402.103721,64 400.9976,64 L368.0024,64 C366.896505,64 366,63.1061002 366,61.9951185 L366,61.0048815 Z' id='ipad-portrait'></path> </g> </g> </svg>",
    "ipad-pro": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='1024px' height='68px' viewBox='0 0 1024 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-pro-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Pro-Portrait' fill='#1A1A1C'> <path d='M0,0 L1024,0 L1024,68 L0,68 L0,0 Z M494,61.0048815 C494,59.897616 494.896279,59 496.0024,59 L528.9976,59 C530.103495,59 531,59.8938998 531,61.0048815 L531,61.9951185 C531,63.102384 530.103721,64 528.9976,64 L496.0024,64 C494.896505,64 494,63.1061002 494,61.9951185 L494,61.0048815 Z' id='ipad-pro-portrait'></path> </g> </g> </svg>"
  }
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


},{}],"ios-kit-text":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  text: "iOS Text Layer",
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
  name: "text layer",
  constraints: {}
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var exceptions, i, j, len, len1, prop, ref, ref1, setup, textFrame, textLayer;
  setup = ios.setupComponent(array, exports.defaults);
  exceptions = Object.keys(setup);
  textLayer = new Layer({
    backgroundColor: "transparent",
    name: setup.name
  });
  textLayer.type = "text";
  textLayer.html = setup.text;
  ref = ios.lib.layerProps;
  for (i = 0, len = ref.length; i < len; i++) {
    prop = ref[i];
    if (setup[prop]) {
      if (prop === "color") {
        setup[prop] = ios.utils.color(setup[prop]);
      }
      textLayer[prop] = setup[prop];
    }
  }
  ref1 = ios.lib.layerStyles;
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    prop = ref1[j];
    if (setup[prop]) {
      if (prop === "lineHeight" && setup[prop] === "auto") {
        setup[prop] = setup["fontSize"];
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
        setup[prop] = ios.utils.px(setup[prop]) + "px";
      }
      textLayer.style[prop] = setup[prop];
    }
  }
  textFrame = ios.utils.textAutoSize(textLayer);
  textLayer.props = {
    height: textFrame.height,
    width: textFrame.width
  };
  textLayer.constraints = setup.constraints;
  ios.layout.set();
  return textLayer;
};


},{"ios-kit":"ios-kit"}],"ios-kit-utils":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.pt = function(px) {
  var pt;
  pt = px / ios.device.scale;
  pt = Math.round(pt);
  return pt;
};

exports.px = function(pt) {
  var px;
  px = pt * ios.device.scale;
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
  newString = "fill=\"" + utils.color(color).toHexString();
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
  var constraints, styles, textWidth;
  constraints = {};
  if (textLayer.constraints) {
    if (textLayer.constraints.height) {
      constraints.height = utils.px(textLayer.constraints.height);
    }
    if (textLayer.constraints.width) {
      constraints.width = utils.px(textLayer.constraints.width);
    }
  }
  styles = {
    fontSize: textLayer.style["font-size"],
    fontFamily: textLayer.style["font-family"],
    fontWeight: textLayer.style["font-weight"],
    lineHeight: textLayer.style["line-height"],
    letterSpacing: textLayer.style["letter-spacing"],
    textTransform: textLayer.style["text-transform"]
  };
  textWidth = Utils.textSize(textLayer.html, styles, constraints);
  return {
    width: textWidth.width,
    height: textWidth.height
  };
};

exports.getDevice = function() {
  var capturedDevice, device;
  device = Framer.Device.deviceType;

  /* This switch looks at the innerWidth to determine if the prototype is being opened on a device. 
  	If so, it'll override the device, and it'll adjust the view to fullscreen.
   */
  capturedDevice = {
    width: ios.lib.frames[device].width,
    height: ios.lib.frames[device].height,
    scale: ios.lib.frames[device].scale,
    mobile: ios.lib.frames[device].mobile,
    platform: ios.lib.frames[device].platform
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
  exports.scale = ios.lib.frames[device].scale;
  if (device === "fullscreen") {
    exports.width = window.innerWidth;
    exports.height = window.innerHeight;
  } else {
    exports.width = ios.lib.frames[device].width;
    exports.height = ios.lib.frames[device].height;
    if (window.innerWidth === 1242 || window.innerWidth === 2208) {
      exports.width = window.innerWidth;
      exports.height = window.innerHeight;
      exports.scale = 3;
    }
  }
  exports.mobile = ios.lib.frames[device].mobile;
  exports.platform = ios.lib.frames[device].platform;
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


},{"ios-kit":"ios-kit"}],"ios-kit":[function(require,module,exports){
var banner, bannerBG, comp, components, defaults, error, iconLibrary, j, layout, len, library, listenToKeys, setProps, specialChar, text, utils;

exports.layout = layout = require('ios-kit-layout');

exports.utils = utils = require('ios-kit-utils');

exports.lib = library = require('ios-kit-library');

exports.device = utils.getDevice();

exports.assets = library.assets;

banner = require('ios-kit-banner');

text = require('ios-kit-text');

exports.Banner = banner.create;

exports.Text = text.create;

defaults = {
  alert: {
    title: "Title",
    message: "Message",
    actions: ["OK"],
    action: "Action",
    secondaryAction: "secondaryAction"
  },
  button: {
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
  },
  constraintProps: ["height", "width"],
  constraintTypes: ["top", "leading", "trailing", "bottom"],
  constraintAligns: ["horizontalCenter", "verticalCenter", "leadingEdges", "trailingEdges", "topEdges", "bottomEdges", "align", "vertical", "horizontal"],
  constraints: {
    top: {
      "prop": "y",
      "objProp": "maxY",
      "objProp2": "height",
      "opp": "bottom"
    },
    leading: {
      "prop": "x",
      "objProp": "maxX",
      "objProp2": "width",
      "opp": "trailing"
    },
    bottom: {
      "prop": "maxY",
      "objProp": "height",
      "objProp2": "y",
      "opp": "top"
    },
    trailing: {
      "prop": "maxX",
      "objProp": "width",
      "objProp2": "x",
      "opp": "leading"
    }
  },
  cursor: {
    color: "blue",
    height: 20,
    width: 1
  },
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
  lockScreen: {
    time: "default",
    date: "default",
    passcode: false,
    clock24: false,
    type: "lockScreen"
  },
  keyboard: {
    returnText: "return",
    returnColor: "light-key",
    animated: false,
    output: void 0
  },
  sheet: {
    actions: ["OK"],
    exit: "Cancel",
    animated: false,
    description: void 0
  },
  navBar: {
    title: "Title",
    left: void 0,
    right: "Edit",
    blur: true,
    superLayer: void 0,
    type: "navBar"
  },
  statusBar: {
    carrier: "",
    network: "LTE",
    battery: 100,
    signal: 5,
    style: "dark",
    clock24: false,
    type: "statusBar"
  },
  tabBar: {
    tabs: [],
    start: 0,
    type: "tabBar",
    backgroundColor: "white",
    activeColor: "blue",
    inactiveColor: "gray",
    blur: true
  },
  tab: {
    label: "label",
    icon: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='25px' viewBox='0 0 25 25' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>1</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='1'> <g id='Bottom-Bar/Tab-Bar' transform='translate(-25.000000, -7.000000)' fill='#0076FF'> <g id='Placeholders' transform='translate(25.000000, 7.000000)'> <rect id='1' x='0' y='0' width='25' height='25' rx='3'></rect> </g> </g> </g> </svg>",
    active: void 0,
    unactive: void 0,
    tabBar: void 0,
    type: "tab"
  },
  table: {
    constraints: void 0,
    type: "table",
    content: [
      {
        "label": "A",
        "detail": "letter"
      }, {
        "label": "B",
        "detail": "letter"
      }
    ],
    cell: "default",
    superLayer: void 0
  },
  tableCell: {
    type: "tableCell",
    properties: "default",
    height: 50,
    swipe: false,
    swipeAction: "Delete",
    swipeColor: "#FE3824",
    swipeTextColor: "#FFF"
  },
  text: {}
};

setProps = function(object) {
  var keys;
  keys = Object.keys(object);
  return object["props"] = keys;
};

components = [defaults.text, defaults.alert, defaults.sheet, defaults.field, defaults.table, defaults.tableCell, defaults.keyboard, defaults.button, defaults.navBar, defaults.tabBar, defaults.tab, defaults.statusBar, defaults.lockScreen];

for (j = 0, len = components.length; j < len; j++) {
  comp = components[j];
  setProps(comp);
}

exports.setupComponent = function(array, defaults) {
  var i, l, len1, obj, ref;
  if (array === void 0) {
    array = [];
  }
  obj = {};
  ref = defaults.props;
  for (l = 0, len1 = ref.length; l < len1; l++) {
    i = ref[l];
    if (array[i] !== void 0) {
      obj[i] = array[i];
    } else {
      obj[i] = defaults[i];
    }
  }
  return obj;
};

error = function(context, code) {
  if (code === 10) {
    print("Error Invalid Relationship – Layer id:" + context.id + " has a relationship with another layer not in the same superLayer.");
  }
  if (code === 20) {
    print("Error " + context + " requiutils a layer");
  }
  if (code === 21) {
    print("Error " + context + " cannot refer to itself");
  }
  if (code === 40) {
    print("Error " + context + " is not a valid weight. Please use 100, 200, 300... or Thin, Light, Regular...");
  }
  if (code === 50) {
    return print("Error Layer id:" + context + " is not a valid Tab object. Please create a Tab using new module.Tab.");
  }
};

specialChar = function(layer) {
  var chosenColor, newText;
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
  return exports.layout();
};

exports.setTextColor = function(colorObject) {
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
    color = "FFF";
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

exports.styles = {};

exports.bgBlur = function(layer) {
  layer.style["-webkit-backdrop-filter"] = "blur(" + (utils.px(5)) + "px)";
  return layer;
};

listenToKeys = function(field, keyboard) {
  var allSelected, codes, isCommand, isShift, keyputilss;
  keyputilss = function(key) {
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
        return key.backgroundColor = utils.color("light-key");
      default:
        if (exports.device !== "ipad") {
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
              backgroundColor: utils.color("light-key")
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
    var endLength, initialLength, k, l, len1, newText, ref;
    if (field.active) {
      if (e.keyCode === 27) {
        e.preventDefault();
        keyboard.animate({
          properties: {
            y: exports.device.height
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
          keyputilss(keyboard.keys.shift);
          ref = keyboard.keysArray;
          for (l = 0, len1 = ref.length; l < len1; l++) {
            k = ref[l];
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
          keyputilss(keyboard.keys["delete"]);
        }
        if (allSelected === true) {
          exports.update(field.text, [
            {
              text: ""
            }
          ]);
          field.text.backgroundColor = "transparent";
          allSelected = false;
        }
        initialLength = field.text.html.length;
        newText = field.text.html.slice(0, -1);
        exports.update(field.text, [
          {
            text: newText
          }
        ]);
        endLength = field.text.html.length;
        if (initialLength === endLength) {
          newText = field.text.html.slice(0, -6);
          exports.update(field.text, [
            {
              text: newText
            }
          ]);
        }
        if (field.text.html === "") {
          field.placeholder.visible = true;
        }
        return field.value = exports.clean(newText);
      }
    }
  });
  document.addEventListener('keyup', function(e) {
    var k, l, len1, ref;
    if (field.active) {
      if (e.keyCode === 13 && keyboard) {
        keyboard.keys["return"].backgroundColor = utils.color("light-key");
      }
      if (e.keyCode === 32 && keyboard) {
        keyboard.keys.space.backgroundColor = "White";
      }
      if (e.keyCode === 8 && keyboard) {
        keyboard.keys["delete"].animate({
          properties: {
            backgroundColor: utils.color("light-key")
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
          for (l = 0, len1 = ref.length; l < len1; l++) {
            k = ref[l];
            k.style["text-transform"] = "lowercase";
          }
          keyboard.keys.shift.animate({
            properties: {
              backgroundColor: utils.color("light-key")
            },
            time: .2
          });
          keyboard.keys.shift.icon.states.next();
        }
      }
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (keyboard && exports.device !== "ipad") {
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
  return document.addEventListener('keyputilss', function(e) {
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
            keyputilss(key);
          }
        }
        if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode === 32) {
          if (keyboard) {
            keyputilss(key);
          }
        }
        if (e.keyCode > 31) {
          newText = field.text.html + char;
          exports.update(field.text, [
            {
              text: newText
            }
          ]);
          return field.value = exports.clean(newText);
        }
      }
    }
  });
};

exports.update = function(layer, array) {
  var change, key, l, len1, textFrame, value;
  if (array === void 0) {
    array = [];
  }
  if (layer.type === "text") {
    for (l = 0, len1 = array.length; l < len1; l++) {
      change = array[l];
      key = Object.keys(change)[0];
      value = change[key];
      if (key === "text") {
        layer.html = value;
      }
      if (key === "fontWeight") {
        layer.style[key] = value;
      }
      if (key === "color") {
        layer.color = utils.color(value);
      }
    }
    textFrame = textAutoSize(layer);
    layer.width = textFrame.width;
    layer.height = textFrame.height;
  }
  return exports.layout();
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

exports.Alert = function(array) {
  var act, actLabel, actLabel2, action, action2, actionDivider, actions, alert, divider, index, l, len1, len2, m, message, modal, overlay, ref, setup, title, vertDivider;
  setup = setupComponent("alert", array);
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
    borderRadius: utils.px(10),
    name: "modal",
    x: 92,
    y: 537
  });
  modal.constraints = {
    align: "center",
    width: 280,
    height: 400
  };
  title = new exports.Text({
    style: "alertTitle",
    superLayer: modal,
    text: setup.title,
    fontWeight: "semibold",
    name: "title",
    textAlign: "center",
    lineHeight: 20
  });
  title.constraints = {
    align: "horizontal",
    width: 220,
    top: 20
  };
  message = new exports.Text({
    style: "alertMessage",
    text: setup.message,
    fontSize: 13,
    superLayer: modal,
    textAlign: "center",
    lineHeight: 16,
    width: 240,
    name: "message"
  });
  message.constraints = {
    top: [title, 10],
    align: "horizontal",
    width: 220
  };
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
  exports.layout();
  modal.constraints["height"] = 20 + utils.pt(title.height) + 10 + utils.pt(message.height) + 24 + 44;
  actions = [];
  switch (setup.actions.length) {
    case 1:
      actLabel = exports.capitalize(setup.actions[0]);
      action = new Layer({
        superLayer: modal,
        backgroundColor: "transparent",
        name: setup.actions[0],
        borderRadius: utils.px(10)
      });
      action.constraints = {
        leading: 0,
        trailing: 0,
        bottom: 0,
        height: 44
      };
      action.label = new exports.Text({
        style: "alertAction",
        color: utils.color("blue"),
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
      actLabel = exports.capitalize(setup.actions[0]);
      action = new Layer({
        superLayer: modal,
        name: setup.actions[0],
        borderRadius: utils.px(10),
        backgroundColor: "white"
      });
      action.constraints = {
        leading: 0,
        trailing: utils.pt(modal.width / 2),
        bottom: 0,
        height: 44
      };
      action.label = new exports.Text({
        style: "alertAction",
        color: utils.color("blue"),
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
      actLabel2 = exports.capitalize(setup.actions[1]);
      action2 = new Layer({
        superLayer: modal,
        name: setup.actions[1],
        borderRadius: utils.px(10),
        backgroundColor: "white"
      });
      action2.constraints = {
        leading: utils.pt(modal.width / 2),
        trailing: 0,
        bottom: 0,
        height: 44
      };
      action2.label = new exports.Text({
        style: "alertAction",
        color: utils.color("blue"),
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
      for (index = l = 0, len1 = ref.length; l < len1; index = ++l) {
        act = ref[index];
        actLabel = exports.capitalize(act);
        action = new Layer({
          superLayer: modal,
          name: act,
          borderRadius: utils.px(10),
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
        action.label = new exports.Text({
          style: "alertAction",
          color: utils.color("blue"),
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
  for (index = m = 0, len2 = actions.length; m < len2; index = ++m) {
    act = actions[index];
    act.type = "button";
    specialChar(act);
    if (setup.actions[index].indexOf("-r") === 0) {
      act.origColor = utils.color("red");
    } else {
      act.origColor = utils.color("blue");
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
  exports.layout();
  alert.overlay = overlay;
  alert.modal = modal;
  alert.title = title;
  alert.message = message;
  return alert;
};

exports.Button = function(array) {
  var backgroundColor, button, color, rgbString, rgbaString, setup, textLayer;
  setup = setupComponent("button", array);
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
      this.fontSize = 20;
      this.top = 18;
      this.fontWeight = "medium";
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
      button.borderRadius = utils.px(12.5);
      backgroundColor = "";
      switch (setup.style) {
        case "light":
          color = "#007AFF";
          if (setup.blur) {
            backgroundColor = "rgba(255, 255, 255, .9)";
            exports.bgBlur(button);
          } else {
            backgroundColor = "white";
          }
          break;
        case "dark":
          color = "#FFF";
          if (setup.blur) {
            backgroundColor = "rgba(43, 43, 43, .9)";
            exports.bgBlur(button);
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
            exports.bgBlur(button);
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
      button.borderRadius = utils.px(2.5);
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
      button.borderWidth = utils.px(1);
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
  textLayer = new exports.Text({
    text: setup.text,
    color: color,
    superLayer: button,
    fontSize: this.fontSize,
    fontWeight: this.fontWeight
  });
  textLayer.constraints = {
    align: "center"
  };
  switch (setup.buttonType) {
    case "small":
      button.props = {
        width: textLayer.width + utils.px(60),
        height: textLayer.height + utils.px(10)
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
  exports.layout();
  button.label = textLayer;
  return button;
};

exports.Field = function(array) {
  var field, placeholder, setup;
  setup = setupComponent("field", array);
  field = new Layer({
    borderRadius: utils.px(setup.borderRadius),
    backgroundColor: setup.backgroundColor,
    width: utils.px(setup.width),
    height: utils.px(setup.height)
  });
  if (setup.constraints) {
    field.constraints = setup.constraints;
  }
  field.active = false;
  text = new exports.Text({
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
    placeholder = new exports.Text({
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
      keyboard = new exports.Keyboard({
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
          y: exports.device.height
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
    if (exports.device === "ipad") {
      field.keyboard.keys.dismiss.on(Events.TouchEnd, function() {
        field.keyboard.animate({
          properties: {
            y: exports.device.height
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
        width: utils.px(setup.cursor.width),
        height: utils.px(setup.cursor.height),
        superLayer: field,
        name: "cursor",
        backgroundColor: utils.color("blue"),
        borderRadius: utils.px(1)
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
    return exports.layout();
  });
  exports.layout();
  return field;
};

exports.StatusBar = function(array) {
  var batteryIcon, batteryPercent, bluetooth, carrier, dot, gripper, i, l, layer, len1, m, n, network, noNetwork, nonDot, nonDots, ref, ref1, ref2, setup, signal, statusBar, time;
  setup = setupComponent("statusBar", array);
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
  switch (exports.device) {
    case "iphone-6s-plus":
      this.topConstraint = 5;
      this.batteryIcon = 6;
      this.bluetooth = 5;
      break;
    case "fullscreen":
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
  for (l = 0, len1 = ref.length; l < len1; l++) {
    layer = ref[l];
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
    this.time = exports.getTime();
    if (setup.clock24 === false) {
      if (this.time.hours > 11) {
        this.time.stamp = "PM";
      } else {
        this.time.stamp = "AM";
      }
    } else {
      this.time.stamp = "";
    }
    time = new exports.Text({
      style: "statusBarTime",
      text: exports.timeFormatter(this.time, setup.clock24) + " " + this.time.stamp,
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
    noNetwork = new exports.Text({
      superLayer: statusBar,
      fontSize: 12,
      text: "No Network"
    });
    noNetwork.constraints = {
      leading: 7,
      top: 3
    };
  } else {
    for (i = m = 0, ref1 = setup.signal; 0 <= ref1 ? m < ref1 : m > ref1; i = 0 <= ref1 ? ++m : --m) {
      dot = new Layer({
        height: utils.px(5.5),
        width: utils.px(5.5),
        backgroundColor: "black",
        superLayer: statusBar,
        borderRadius: utils.px(5.5) / 2,
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
      exports.layout();
    }
    if (setup.signal < 5) {
      nonDots = 5 - setup.signal;
      for (i = n = 0, ref2 = nonDots; 0 <= ref2 ? n < ref2 : n > ref2; i = 0 <= ref2 ? ++n : --n) {
        nonDot = new Layer({
          height: utils.px(5.5),
          width: utils.px(5.5),
          superLayer: statusBar,
          borderRadius: utils.px(5.5) / 2,
          backgroundColor: "transparent",
          name: "signal[" + signal.length + "]"
        });
        nonDot.style.border = (utils.px(1)) + "px solid " + this.color;
        nonDot.constraints = {
          leading: [signal[signal.length - 1], 1],
          top: 7
        };
        signal.push(nonDot);
        exports.layout();
      }
    }
    carrier = new exports.Text({
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
    exports.layout();
    if (setup.carrier) {
      network = new exports.Text({
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
      network = new Layer({
        width: utils.px(14),
        height: utils.px(10),
        superLayer: statusBar,
        backgroundColor: "transparent",
        name: "network"
      });
      network.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(14)) + "px' height='" + (utils.px(10)) + "px' viewBox='0 0 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Wi-Fi</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/Charging' transform='translate(-87.000000, -5.000000)' fill='" + this.color + "'> <path d='M96.1444208,12.4385043 C95.626374,11.8454456 94.8523616,11.4689119 93.987563,11.4689119 C93.1390073,11.4689119 92.3778594,11.8314341 91.8601652,12.4053177 L94.0225391,14.5 L96.1444208,12.4385043 Z M98.3234964,10.3214425 C97.2447794,9.19174563 95.7014387,8.48445596 93.987563,8.48445596 C92.2882723,8.48445596 90.7566264,9.17975893 89.6792698,10.2926936 L90.7692987,11.3486 C91.567205,10.5053708 92.713648,9.97668394 93.987563,9.97668394 C95.2768836,9.97668394 96.4356305,10.518235 97.2346215,11.3793293 L98.3234964,10.3214425 L98.3234964,10.3214425 Z M100.5,8.20687933 C98.8629578,6.53943672 96.5505699,5.5 93.987563,5.5 C91.4375103,5.5 89.1355496,6.52895605 87.5,8.18164431 L88.5895579,9.23709441 C89.9460798,7.85431655 91.8628921,6.99222798 93.987563,6.99222798 C96.1260026,6.99222798 98.0538809,7.86552609 99.4118698,9.26404272 L100.5,8.20687933 Z' id='Wi-Fi'></path> </g> </g> </svg>";
      network.constraints = {
        leading: [signal[signal.length - 1], 7],
        top: this.topConstraint
      };
    }
  }
  batteryIcon = new Layer({
    width: utils.px(25),
    height: utils.px(10),
    superLayer: statusBar,
    backgroundColor: "transparent",
    name: "batteryIcon"
  });
  if (setup.battery > 70) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(25)) + "px' height='" + (utils.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.506744,6.5 C346.226877,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.230225,14 346.506744,14 L365.993256,14 C366.273123,14 366.5,13.783628 366.5,13.5079041 L366.5,6.99209595 C366.5,6.72031886 366.269775,6.5 365.993256,6.5 L346.506744,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  if (setup.battery <= 70 && setup.battery > 20) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(25)) + "px' height='" + (utils.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/White/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.501231,6.5 C346.224409,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.229751,14 346.501231,14 L356.498769,14 C356.775591,14 357,13.783628 357,13.5079041 L357,6.99209595 C357,6.72031886 356.770249,6.5 356.498769,6.5 L346.501231,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  if (setup.battery <= 20) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(25)) + "px' height='" + (utils.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/White/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.490479,6.5 C346.219595,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.215057,14 346.490479,14 L349.509521,14 C349.780405,14 350,13.783628 350,13.5079041 L350,6.99209595 C350,6.72031886 349.784943,6.5 349.509521,6.5 L346.490479,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  batteryPercent = new exports.Text({
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
  batteryIcon.constraints = {
    trailing: 7,
    top: this.batteryIcon
  };
  bluetooth = new Layer({
    width: utils.px(8),
    height: utils.px(15),
    superLayer: statusBar,
    opacity: .5,
    backgroundColor: "transparent",
    name: "bluetooth"
  });
  bluetooth.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(7)) + "px' height='" + (utils.px(13)) + "px' viewBox='0 0 8 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Bluetooth</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Icons-(White)' transform='translate(-137.000000, 0.000000)' fill='" + this.color + "'> <path d='M140.5,14.5 L145,10.25 L141.8,7.5 L145,4.75 L140.5,0.5 L140.5,6.07142857 L137.8,3.75 L137,4.5 L140.258333,7.375 L137,10.25 L137.8,11 L140.5,8.67857143 L140.5,14.5 Z M141.5,3 L143.366667,4.75 L141.5,6.25 L141.5,3 Z M141.5,8.5 L143.366667,10.25 L141.5,12 L141.5,8.5 Z' id='Bluetooth'></path> </g> </g> </svg>";
  bluetooth.constraints = {
    top: this.bluetooth,
    trailing: [batteryPercent, 7]
  };
  exports.layout();
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

exports.Keyboard = function(array) {
  var board, boardSpecs, box, deleteIcon, deleteKey, em, emojiFormatter, emojiIcon, emojiKey, emojiSections, emojisArray, extraSymbol, firstRowKeyWidth, freqEmojisArray, frequentlyUsedEmojisRaw, index, key, keyPopUp, keyboardIcon, keyboardKey, keysArray, l, len1, len2, len3, letter, lettersArray, m, n, numKey, numKey2, numsArray, path, rawEmojis, returnKey, rowIndex, rowsMap, secondArray, secondRowKeyWidth, setup, shiftIcon, shiftIcon2, shiftKey, shiftKey2, spaceKey, storedTextColor, thirdArray;
  setup = setupComponent("keyboard", array);
  boardSpecs = {};
  switch (exports.device) {
    case "iphone-5":
      boardSpecs.height = 215;
      boardSpecs.key = {
        width: utils.px(26),
        height: utils.px(39)
      };
      boardSpecs.expandedKey = utils.px(39);
      boardSpecs.expandedSpacer = utils.px(12);
      boardSpecs.padding = {};
      boardSpecs.padding.row1 = utils.px(3);
      boardSpecs.padding.row2 = utils.px(19);
      boardSpecs.padding.row3 = utils.px(54);
      boardSpecs.marginTop = {};
      boardSpecs.marginTop.row1 = utils.px(11);
      boardSpecs.marginTop.row2 = utils.px(26);
      boardSpecs.marginTop.row3 = utils.px(41);
      boardSpecs.marginTop.row4 = utils.px(55);
      boardSpecs.shiftIcon = {
        x: utils.px(9),
        y: utils.px(2)
      };
      boardSpecs.deleteIcon = {
        x: utils.px(7),
        y: utils.px(10)
      };
      boardSpecs.emojiIcon = {
        x: utils.px(8),
        y: utils.px(9)
      };
      boardSpecs.sideKey = utils.px(36.5);
      boardSpecs.sideKeyRadius = utils.px(4);
      boardSpecs.sideKeyBottom = utils.px(58);
      boardSpecs.iPadDeleteOffset = 0;
      boardSpecs.bottomRow = 8;
      boardSpecs.returnKey = utils.px(74);
      boardSpecs.spacer = utils.px(6);
      break;
    case "iphone-6s":
      boardSpecs.height = 216;
      boardSpecs.key = {
        width: utils.px(31.5),
        height: utils.px(42)
      };
      boardSpecs.expandedKey = utils.px(46.5);
      boardSpecs.expandedSpacer = utils.px(14);
      boardSpecs.padding = {};
      boardSpecs.padding.row1 = utils.px(3);
      boardSpecs.padding.row2 = utils.px(22);
      boardSpecs.padding.row3 = utils.px(59);
      boardSpecs.marginTop = {};
      boardSpecs.marginTop.row1 = utils.px(10);
      boardSpecs.marginTop.row2 = utils.px(22);
      boardSpecs.marginTop.row3 = utils.px(34);
      boardSpecs.marginTop.row4 = utils.px(44);
      boardSpecs.shiftIcon = {
        x: utils.px(11),
        y: utils.px(2)
      };
      boardSpecs.deleteIcon = {
        x: utils.px(10),
        y: utils.px(13)
      };
      boardSpecs.emojiIcon = {
        x: utils.px(11),
        y: utils.px(11)
      };
      boardSpecs.returnKey = utils.px(87.5);
      boardSpecs.bottomRow = 6;
      boardSpecs.iPadDeleteOffset = 0;
      boardSpecs.sideKey = utils.px(42);
      boardSpecs.sideKeyRadius = utils.px(5);
      boardSpecs.sideKeyBottom = utils.px(56);
      boardSpecs.spacer = utils.px(6);
      break;
    case "iphone-6s-plus":
      boardSpecs.height = 226;
      boardSpecs.key = {
        width: utils.px(35),
        height: utils.px(45)
      };
      boardSpecs.expandedKey = utils.px(50);
      boardSpecs.expandedSpacer = utils.px(20);
      boardSpecs.padding = {};
      boardSpecs.padding.row1 = utils.px(4);
      boardSpecs.padding.row2 = utils.px(25);
      boardSpecs.padding.row3 = utils.px(67);
      boardSpecs.marginTop = {};
      boardSpecs.marginTop.row1 = utils.px(8);
      boardSpecs.marginTop.row2 = utils.px(19);
      boardSpecs.marginTop.row3 = utils.px(30);
      boardSpecs.marginTop.row4 = utils.px(41);
      boardSpecs.shiftIcon = {
        x: utils.px(13),
        y: utils.px(2)
      };
      boardSpecs.deleteIcon = {
        x: utils.px(11),
        y: utils.px(14)
      };
      boardSpecs.emojiIcon = {
        x: utils.px(13),
        y: utils.px(13)
      };
      boardSpecs.bottomRow = 6;
      boardSpecs.iPadDeleteOffset = 0;
      boardSpecs.returnKey = utils.px(97);
      boardSpecs.sideKey = utils.px(45);
      boardSpecs.sideKeyRadius = utils.px(5);
      boardSpecs.spacer = utils.px(6);
      break;
    case "ipad":
      boardSpecs.height = 268;
      boardSpecs.key = {
        width: utils.px(56),
        height: utils.px(56)
      };
      boardSpecs.padding = {};
      boardSpecs.padding.row1 = utils.px(6);
      boardSpecs.padding.row2 = utils.px(35);
      boardSpecs.padding.row3 = utils.px(74);
      boardSpecs.marginTop = {};
      boardSpecs.marginTop.row1 = utils.px(10);
      boardSpecs.marginTop.row2 = utils.px(18);
      boardSpecs.marginTop.row3 = utils.px(28);
      boardSpecs.marginTop.row4 = utils.px(40);
      boardSpecs.shiftIcon = {
        x: utils.px(18),
        y: utils.px(2)
      };
      boardSpecs.deleteIcon = {
        x: utils.px(18),
        y: utils.px(20)
      };
      boardSpecs.emojiIcon = {
        x: utils.px(18),
        y: utils.px(18)
      };
      boardSpecs.bottomRow = 7;
      boardSpecs.iPadDeleteOffset = boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.marginTop.row1;
      boardSpecs.returnKey = utils.px(106);
      boardSpecs.sideKey = utils.px(56);
      boardSpecs.sideKey2 = utils.px(76);
      boardSpecs.sideKeyRadius = utils.px(5);
      boardSpecs.spacer = utils.px(12);
  }
  board = new Layer({
    backgroundColor: "#D1D5DA",
    name: "keyboard"
  });
  board.specs = boardSpecs;
  board.constraints = {
    height: boardSpecs.height,
    trailing: 0,
    leading: 0
  };
  exports.layout();
  if (setup.animated) {
    board.y = exports.device.height;
    board.animate({
      properties: {
        maxY: exports.device.height
      },
      time: .25,
      curve: "ease-in-out"
    });
  } else {
    board.maxY = exports.device.height;
  }
  lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  secondArray = [];
  thirdArray = [];
  switch (exports.device) {
    case "ipad":
      secondArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "undo", "hide", ".", ',', "?", "!", "'", "\""];
      thirdArray = ["\[", "\]", "\{", "\}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "redo", "hide", ".", ',', "?", "!", "'", "\""];
      break;
    default:
      secondArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "\"", ".", ',', "?", "!", "'"];
      thirdArray = ["\[", "\]", "\{", "\}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•", ".", ',', "?", "!", "'", "\""];
  }
  if (exports.device === "ipad") {
    lettersArray.push(",");
    lettersArray.push(".");
  }
  numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  keysArray = [];
  keyPopUp = new Layer({
    width: this.keyWidth,
    height: this.keyHeight,
    x: this.x - 16 * exports.device.scale,
    backgroundColor: "transparent",
    superLayer: board,
    name: "key pop up"
  });
  box = new Layer({
    borderRadius: utils.px(10),
    superLayer: keyPopUp,
    backgroundColor: "transparent",
    color: "black",
    name: "letter"
  });
  box.style = {
    "font-size": 39 * exports.device.scale + "px",
    "font-weight": 300,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': this.lineHeight
  };
  this.color = "white";
  path = new Layer({
    superLayer: keyPopUp,
    backgroundColor: "transparent",
    name: "shape path"
  });
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
  for (l = 0, len1 = lettersArray.length; l < len1; l++) {
    letter = lettersArray[l];
    index = lettersArray.indexOf(letter);
    key = new Layer({
      name: letter,
      superLayer: board,
      borderRadius: 5 * exports.device.scale,
      backgroundColor: "white",
      color: "black",
      shadowY: utils.px(1),
      shadowColor: "#929498",
      width: boardSpecs.key.width,
      height: boardSpecs.key.height
    });
    board.keys[letter] = key;
    keyPopUp.bringToFront();
    box.bringToFront();
    if (exports.device.scale === 2) {
      keyPopUp.constraints = {
        width: 65,
        height: 122
      };
      path.constraints = {
        width: 65,
        height: 122
      };
      path.y = 10;
      this.pathWidth = utils.px(65);
      this.pathHeight = utils.px(122);
      this.keyHeight = utils.px(32);
      this.keyWidth = utils.px(44);
      this.lineHeight = this.keyWidth - 17 + "px";
      box.constraints = {
        width: 32,
        height: 44
      };
      box.centerX();
      box.y = utils.px(28);
    }
    if (exports.device.scale === 3) {
      keyPopUp.constraints = {
        width: 68,
        height: 122
      };
      this.keyHeight = utils.px(122);
      this.keyWidth = utils.px(65);
      this.lineHeight = this.keyWidth + "px";
      this.pathWidth = utils.px(68);
      this.pathHeight = utils.px(128);
      path.y = 0;
      box.constraints = {
        width: 35,
        height: 46
      };
      box.centerX();
      box.y = utils.px(28);
    }
    if (exports.device.width === 640) {
      key.constraints = {
        width: 26,
        height: 39
      };
    }
    keyPopUp.visible = false;
    exports.layout();
    key.style = {
      "font-size": 25 * exports.device.scale + "px",
      "font-weight": 300,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': key.height - utils.px(2) + "px"
    };
    if (letter === "," || letter === ".") {
      extraSymbol = new Layer({
        superLayer: key,
        width: utils.px(30),
        height: utils.px(30),
        backgroundColor: "transparent",
        y: utils.px(15),
        color: utils.color("black"),
        name: "!/?"
      });
      extraSymbol.centerX();
      extraSymbol.style = {
        "font-size": utils.px(24) + "px",
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
      key.style["line-height"] = key.height + utils.px(10) + "px";
    }
    key.html = letter;
    if (index <= rowsMap[0].endIndex) {
      rowIndex = index - rowsMap[0].startIndex;
      key.x = rowsMap[0].padding + (rowIndex * boardSpecs.spacer) + firstRowKeyWidth;
      key.y = rowsMap[0].marginTop;
      if (exports.device === "ipad") {
        if (index % 2 !== 0) {
          key.width = key.width + utils.px(2);
        } else {
          key.width = key.width + utils.px(1);
        }
      }
      firstRowKeyWidth = firstRowKeyWidth + key.width;
    }
    if (index > rowsMap[0].endIndex && index <= rowsMap[1].endIndex) {
      rowIndex = index - rowsMap[1].startIndex;
      key.x = rowsMap[1].padding + (rowIndex * boardSpecs.spacer) + secondRowKeyWidth;
      key.y = rowsMap[1].marginTop + key.height;
      key.width = key.width + utils.px(1);
      secondRowKeyWidth = secondRowKeyWidth + key.width;
    }
    if (index > rowsMap[1].endIndex) {
      rowIndex = index - rowsMap[2].startIndex;
      key.x = rowsMap[2].padding + (rowIndex * boardSpecs.spacer) + (rowIndex * key.width);
      key.y = rowsMap[2].marginTop + key.height * 2;
    }
    path.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + this.pathWidth + "px' height='" + this.pathHeight + "' viewBox='0 0 63 114' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <title>Rectangle 44 Copy</title> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='0' in='SourceAlpha' utilsult='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' utilsult='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.21 0' in='shadowBlurOuter1' type='matrix' utilsult='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-118.000000, -240.000000)' stroke='#C7C7C7' filter='url(#filter-1)' stroke-width='0.5' fill='#FFFFFF' opacity='0.998367537'> <path d='M134,306 C134,306 121,295 121,290 C121,279.616788 121,253.001456 121,253.001456 C121,247.477804 125.485832,243 131.002774,243 L167.862127,243 C173.386507,243 177.880862,247.469905 177.900044,252.997271 C177.900044,252.997271 178,280 177.999999,290 C177.999999,295.006553 165,306 165,306 L165,346.049594 C165,348.806807 162.770556,351.041969 160.002098,351.041969 L138.997902,351.041969 C136.237637,351.041969 134,348.808331 134,346.049594 L134,306 Z' id='Rectangle-44-Copy' sketch:type='MSShapeGroup' transform='translate(149.500000, 297.020985) scale(-1, 1) translate(-149.500000, -297.020985) '> </path> </g> </g> </svg>";
    keysArray.push(key);
    if (exports.device !== "ipad" && exports.device !== "ipad-pro") {
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
        return this.backgroundColor = utils.color("light-key");
      });
      key.on(Events.TouchEnd, function() {
        return this.backgroundColor = "white";
      });
    }
    key.on(Events.TouchEnd, function() {
      var len2, m;
      if (shiftIcon.states.state === "on") {
        shiftIcon.states["switch"]("default");
        shiftKey.backgroundColor = utils.color("light-key");
        if (exports.device === "ipad") {
          shiftIcon2.states["switch"]("default");
          shiftKey2.backgroundColor = utils.color("light-key");
        }
        for (m = 0, len2 = keysArray.length; m < len2; m++) {
          key = keysArray[m];
          key.style['text-transform'] = 'lowercase';
        }
        box.style['text-transform'] = 'lowercase';
        if (setup.output) {
          this.newText = setup.output.text.html + this.name.toUpperCase();
          return exports.update(setup.output.text, [
            {
              text: this.newText
            }
          ]);
        }
      } else {
        if (setup.output) {
          this.newText = setup.output.text.html + this.name;
          return exports.update(setup.output.text, [
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
    color: utils.color("black"),
    backgroundColor: utils.color("light-key"),
    shadowY: utils.px(1),
    shadowColor: "#929498",
    width: boardSpecs.sideKey,
    height: boardSpecs.sideKey,
    y: boardSpecs.marginTop.row3 + boardSpecs.key.height * 2
  });
  shiftKey.constraints = {
    leading: utils.pt(boardSpecs.padding.row1)
  };
  shiftIcon = new Layer({
    width: utils.px(20),
    height: utils.px(19),
    superLayer: shiftKey,
    backgroundColor: "transparent",
    x: boardSpecs.shiftIcon.x,
    y: boardSpecs.shiftIcon.y
  });
  shiftIcon.html = iconLibrary.shift.off;
  shiftIcon.states.add({
    "on": {
      html: iconLibrary.shift.on
    }
  });
  shiftIcon.states.animationOptions = {
    time: .01
  };
  shiftKey.style = {
    "font-size": utils.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  shiftKey.on(Events.TouchEnd, function() {
    var len2, len3, len4, len5, m, n, p, q;
    switch (board.keyboardState) {
      case 1:
        shiftIcon.states.next();
        if (exports.device === "ipad") {
          shiftIcon2.states.next();
        }
        if (shiftIcon.states.state === "on") {
          shiftKey.backgroundColor = "white";
          if (exports.device === "ipad") {
            shiftKey2.backgroundColor = "white";
          }
          for (m = 0, len2 = keysArray.length; m < len2; m++) {
            key = keysArray[m];
            key.style['text-transform'] = 'uppercase';
          }
          return box.style['text-transform'] = 'uppercase';
        } else {
          shiftKey.backgroundColor = utils.color("light-key");
          if (exports.device === "ipad") {
            shiftKey2.backgroundColor = utils.color("light-key");
          }
          for (n = 0, len3 = keysArray.length; n < len3; n++) {
            key = keysArray[n];
            key.style["text-transform"] = 'lowercase';
          }
          return box.style["text-transform"] = 'lowercase';
        }
        break;
      case 2:
        for (index = p = 0, len4 = keysArray.length; p < len4; index = ++p) {
          key = keysArray[index];
          key.html = thirdArray[index];
          key.name = thirdArray[index];
        }
        board.keyboardState = 3;
        shiftKey.html = "123";
        if (exports.device === "ipad") {
          return shiftKey2.html = "123";
        }
        break;
      case 3:
        for (index = q = 0, len5 = keysArray.length; q < len5; index = ++q) {
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
        if (exports.device === "ipad") {
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
    backgroundColor: utils.color("light-key"),
    shadowY: utils.px(1),
    shadowColor: "#929498",
    name: "delete",
    width: boardSpecs.sideKey,
    height: boardSpecs.sideKey,
    y: boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.iPadDeleteOffset
  });
  deleteKey.constraints = {
    trailing: utils.pt(boardSpecs.spacer) / 2
  };
  deleteIcon = new Layer({
    superLayer: deleteKey,
    width: utils.px(24),
    height: utils.px(18),
    backgroundColor: "transparent",
    x: boardSpecs.deleteIcon.x,
    y: boardSpecs.deleteIcon.y
  });
  if (exports.device === "ipad") {
    deleteKey.width = deleteKey.width + utils.px(5);
  }
  deleteIcon.states.add({
    "on": {
      html: iconLibrary["delete"].on
    }
  });
  deleteIcon.states.add({
    off: {
      html: iconLibrary["delete"].off
    }
  });
  deleteKey.on(Events.TouchStart, function() {
    deleteKey.backgroundColor = "white";
    return deleteIcon.states.switchInstant("on");
  });
  deleteKey.on(Events.TouchEnd, function() {
    var endLength, initialLength, newText;
    deleteKey.backgroundColor = utils.color("light-key");
    deleteIcon.states.switchInstant("off");
    if (setup.output) {
      initialLength = setup.output.text.html.length;
      newText = setup.output.text.html.slice(0, -1);
      exports.update(setup.output.text, [
        {
          text: newText
        }
      ]);
      endLength = setup.output.text.html.length;
      if (initialLength === endLength) {
        newText = setup.output.text.html.slice(0, -6);
        exports.update(setup.output.text, [
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
  if (exports.device === "ipad") {
    keyboardKey = new Layer({
      superLayer: board,
      name: "dismiss",
      borderRadius: boardSpecs.sideKeyRadius,
      backgroundColor: utils.color("light-key"),
      shadowY: utils.px(1),
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
      width: utils.px(32.5),
      height: utils.px(23.5),
      backgroundColor: "transparent"
    });
    keyboardIcon.html = iconLibrary.keyboard;
    keyboardIcon.center();
    board.keys.dismiss = keyboardKey;
    shiftKey2 = new Layer({
      superLayer: board,
      name: "shift",
      borderRadius: boardSpecs.sideKeyRadius,
      color: utils.color("black"),
      backgroundColor: utils.color("light-key"),
      shadowY: utils.px(1),
      shadowColor: "#929498",
      width: boardSpecs.sideKey2,
      height: boardSpecs.sideKey
    });
    shiftKey2.constraints = {
      trailingEdges: deleteKey,
      bottomEdges: shiftKey
    };
    shiftIcon2 = new Layer({
      width: utils.px(20),
      height: utils.px(19),
      superLayer: shiftKey2,
      backgroundColor: "transparent",
      x: boardSpecs.shiftIcon.x + utils.px(10),
      y: boardSpecs.shiftIcon.y
    });
    shiftIcon2.html = iconLibrary.shift.off;
    shiftKey2.style = {
      "font-size": utils.px(16) + "px",
      "font-weight": 400,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': boardSpecs.key.height + "px"
    };
    shiftIcon2.states.add({
      "on": {
        html: iconLibrary.shift.on
      }
    });
    shiftIcon2.states.animationOptions = {
      time: .01
    };
    shiftIcon2.on(Events.TouchStart, function() {
      var len2, len3, len4, len5, m, n, p, q;
      switch (board.keyboardState) {
        case 1:
          shiftIcon.states.next();
          shiftIcon2.states.next();
          if (shiftIcon.states.state === "on") {
            shiftKey.backgroundColor = "white";
            shiftKey2.backgroundColor = "white";
            for (m = 0, len2 = keysArray.length; m < len2; m++) {
              key = keysArray[m];
              key.style['text-transform'] = 'uppercase';
            }
            return box.style['text-transform'] = 'uppercase';
          } else {
            shiftKey.backgroundColor = utils.color("light-key");
            shiftKey2.backgroundColor = utils.color("light-key");
            for (n = 0, len3 = keysArray.length; n < len3; n++) {
              key = keysArray[n];
              key.style["text-transform"] = 'lowercase';
            }
            return box.style["text-transform"] = 'lowercase';
          }
          break;
        case 2:
          for (index = p = 0, len4 = keysArray.length; p < len4; index = ++p) {
            key = keysArray[index];
            key.html = thirdArray[index];
            key.name = thirdArray[index];
          }
          board.keyboardState = 3;
          shiftKey.html = "123";
          if (exports.device === "ipad") {
            return shiftKey2.html = "123";
          }
          break;
        case 3:
          for (index = q = 0, len5 = keysArray.length; q < len5; index = ++q) {
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
          if (exports.device === "ipad") {
            shiftKey2.html = "#+=";
          }
          return board.keyboardState = 2;
      }
    });
    numKey2 = new Layer({
      superLayer: board,
      name: "num",
      borderRadius: boardSpecs.sideKeyRadius,
      color: utils.color("black"),
      backgroundColor: utils.color("light-key"),
      shadowY: utils.px(1),
      shadowColor: "#929498",
      width: boardSpecs.sideKey2,
      height: boardSpecs.key.height
    });
    numKey2.html = ".?123";
    numKey2.style = {
      "font-size": utils.px(16) + "px",
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
      var len2, len3, m, n;
      switch (board.keyboardState) {
        case 1:
          for (index = m = 0, len2 = keysArray.length; m < len2; index = ++m) {
            key = keysArray[index];
            if (index < 27) {
              if (secondArray[index] === "undo") {
                key.width = key.width * 2 + boardSpecs.spacer;
                key.style["font-size"] = utils.px(17) + "px";
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
          if (exports.device === "ipad") {
            shiftIcon2.visible = false;
            shiftKey2.html = "#+=";
            numKey2.html = "ABC";
          }
          return board.keyboardState = 2;
        default:
          for (index = n = 0, len3 = keysArray.length; n < len3; index = ++n) {
            key = keysArray[index];
            if (key.html === "undo" || "redo") {
              key.width = boardSpecs.key.width;
              key.style["font-size"] = utils.px(25) + "px";
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
          if (exports.device === "ipad") {
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
    borderRadius: utils.px(5),
    backgroundColor: utils.color("light-key"),
    shadowY: utils.px(1),
    shadowColor: "#929498",
    color: "black",
    width: boardSpecs.sideKey,
    height: boardSpecs.key.height
  });
  numKey.constraints = {
    bottom: boardSpecs.bottomRow,
    leadingEdges: shiftKey
  };
  if (exports.device !== "ipad" && exports.device !== "ipad-pro") {
    numKey.html = "123";
  } else {
    numKey.html = ".?123";
  }
  numKey.style = {
    "font-size": utils.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  numKey.on(Events.TouchStart, function() {
    var len2, len3, len4, len5, m, n, p, q;
    switch (board.keyboardState) {
      case 1:
        switch (exports.device) {
          case "ipad":
            for (index = m = 0, len2 = keysArray.length; m < len2; index = ++m) {
              key = keysArray[index];
              if (index < 27) {
                if (secondArray[index] === "undo") {
                  key.width = key.width * 2 + boardSpecs.spacer;
                  key.style["font-size"] = utils.px(17) + "px";
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
            for (index = n = 0, len3 = keysArray.length; n < len3; index = ++n) {
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
                  leading: [shiftKey, utils.pt(boardSpecs.expandedSpacer)]
                };
                exports.layout();
              }
              if (index > 19) {
                key.width = boardSpecs.expandedKey;
              }
              if (index > 20) {
                key.constraints = {
                  leading: [keysArray[index - 1], utils.pt(boardSpecs.spacer)]
                };
                exports.layout();
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
        if (exports.device !== "ipad") {
          secondRowKeyWidth = 0;
          rowIndex = 0;
          for (index = p = 0, len4 = keysArray.length; p < len4; index = ++p) {
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
        for (index = q = 0, len5 = keysArray.length; q < len5; index = ++q) {
          key = keysArray[index];
          if (key.html === "undo" || "redo") {
            key.width = boardSpecs.key.width;
            key.style["font-size"] = utils.px(25) + "px";
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
        if (exports.device === "ipad") {
          numKey.html = ".?123";
          numKey2.html = ".?123";
          shiftKey2.html = "";
          shiftIcon2.visible = true;
        }
        return board.keyboardState = 1;
    }
  });
  exports.layout();
  emojiKey = new Layer({
    superLayer: board,
    name: "emoji",
    borderRadius: utils.px(5),
    backgroundColor: utils.color("light-key"),
    shadowY: utils.px(1),
    shadowColor: "#929498",
    width: boardSpecs.sideKey,
    height: boardSpecs.key.height
  });
  emojiKey.constraints = {
    bottomEdges: numKey,
    leading: [numKey, 6]
  };
  emojiIcon = new Layer({
    width: utils.px(20),
    height: utils.px(19),
    superLayer: emojiKey,
    backgroundColor: "transparent",
    x: boardSpecs.emojiIcon.x,
    y: boardSpecs.emojiIcon.y
  });
  emojiIcon.html = iconLibrary.emoji;
  returnKey = new Layer({
    superLayer: board,
    borderRadius: utils.px(5),
    backgroundColor: utils.color(setup.returnColor),
    shadowY: utils.px(1),
    shadowColor: "#929498",
    color: "black",
    name: "return",
    width: boardSpecs.returnKey,
    height: boardSpecs.key.height
  });
  if (setup.returnColor !== "light-key") {
    returnKey.color = exports.setTextColor(utils.color(setup.returnColor));
  }
  if (exports.device === "ipad") {
    returnKey.constraints = {
      trailingEdges: deleteKey,
      top: utils.pt(boardSpecs.marginTop.row2 + boardSpecs.key.height)
    };
  } else {
    returnKey.constraints = {
      trailing: utils.pt(boardSpecs.spacer) / 2,
      bottomEdges: numKey
    };
  }
  returnKey.html = setup.returnText;
  returnKey.style = {
    "font-size": utils.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  exports.layout();
  storedTextColor = returnKey.color;
  returnKey.on(Events.TouchStart, function() {
    returnKey.backgroundColor = "white";
    return returnKey.color = utils.color("black");
  });
  returnKey.on(Events.TouchEnd, function() {
    returnKey.backgroundColor = utils.color(setup.returnColor);
    return returnKey.color = storedTextColor;
  });
  board.keys["return"] = returnKey;
  spaceKey = new Layer({
    superLayer: board,
    borderRadius: utils.px(5),
    backgroundColor: "white",
    shadowY: utils.px(1),
    shadowColor: "#929498",
    color: "black",
    name: "space",
    height: boardSpecs.key.height
  });
  if (exports.device !== "ipad") {
    spaceKey.constraints = {
      bottomEdges: numKey,
      leading: [emojiKey, utils.pt(boardSpecs.spacer)],
      trailing: [returnKey, boardSpecs.spacer]
    };
    spaceKey.html = "space";
    spaceKey.style = {
      "font-size": utils.px(16) + "px",
      "font-weight": 400,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': boardSpecs.key.height + "px"
    };
  } else {
    spaceKey.constraints = {
      bottomEdges: numKey,
      leading: [emojiKey, utils.pt(boardSpecs.spacer)],
      trailing: [numKey2, boardSpecs.spacer]
    };
  }
  board.keys["&nbsp;"] = spaceKey;
  board.keys.space = spaceKey;
  exports.layout();
  spaceKey.on(Events.TouchStart, function() {
    return spaceKey.backgroundColor = utils.color("light-key");
  });
  spaceKey.on(Events.TouchEnd, function() {
    spaceKey.backgroundColor = "white";
    if (setup.output) {
      this.newText = setup.output.text.html + "&nbsp;";
      return exports.update(setup.output.text, [
        {
          text: this.newText
        }
      ]);
    }
  });
  emojiFormatter = function(string) {
    var arrayOfCodes, code, len2, len3, m, n, unicodeFormat;
    unicodeFormat = "";
    if (string[0] === "E" || string[0] === "3" || string[0] === "2" || string[0] === "C") {
      arrayOfCodes = string.split(" ");
      for (m = 0, len2 = arrayOfCodes.length; m < len2; m++) {
        code = arrayOfCodes[m];
        unicodeFormat = unicodeFormat + "%" + code;
      }
    } else {
      arrayOfCodes = string.split(" ");
      unicodeFormat = "%F0%9F";
      for (n = 0, len3 = arrayOfCodes.length; n < len3; n++) {
        code = arrayOfCodes[n];
        unicodeFormat = unicodeFormat + "%" + code;
      }
    }
    return unicodeFormat;
  };
  exports.layout();
  emojiSections = ["Frequnetly Used", "Smileys & People", "Animals & Nature", "Food & Drink", "Activity", "Travel & Places", "Objects", "Symbols", "Flags"];
  rawEmojis = ["98 80", "98 AC", "98 81", "98 82", "98 83", "98 84", "98 85", "98 86", "98 87", "98 89", "98 8a", "99 82", "99 83", "E2 98 BA EF B8 8F", "98 8B", "98 8C", "98 8D", "98 98", "98 97", "98 99", "98 9A", "98 9C", "98 9D", "98 9B", "A4 91", "A4 93", "98 8E", "A4 97", "98 8F", "98 B6", "98 90", "98 91", "98 92", "99 84", "A4 94", "98 B3", "98 9E", "98 9F", "98 A0", "98 A1", "98 94", "98 95", "99 81", "E2 98 B9 EF B8 8F", "98 A3", "98 96", "98 AB", "98 A9", "98 A4", "98 AE", "98 B1", "98 A8", "98 B0", "98 AF", "98 A6", "98 A7", "98 A2", "98 A5", "98 AA", "98 93", "98 AD", "98 B5", "98 B2", "A4 90", "98 B7", "A4 92", "A4 95", "98 B4", "92 A4", "92 A9", "98 88", "91 BF", "91 B9", "91 BA", "92 80", "91 BB", "91 BD", "A4 96", "98 BA", "98 B8", "98 B9", "98 BB", "98 BC", "98 BD", "99 80", "98 BF", "98 BE", "99 8C", "91 8F", "91 8B", "91 8D", "91 8E", "91 8A", "E2 9C 8A", "E2 9C 8C EF B8 8F", "91 8C", "E2 9C 8B", "91 90", "92 AA", "99 8F", "E2 98 9D EF B8 8F", "91 86", "91 87", "91 88", "91 89", "96 95", "96 90", "A4 98", "96 96", "E2 9C 8D EF B8 8F", "92 85", "91 84", "91 85", "91 82", "91 83", "91 81", "91 80", "91 A4", "91 A5", "97 A3", "91 B6", "91 A6", "91 A7", "91 A8", "91 A9", "91 B1", "91 B4", "91 B5", "91 B2", "91 B3", "91 AE", "91 B7", "92 82", "95 B5", "8E 85", "91 BC", "91 B8", "91 B0", "9A B6", "8F 83", "92 83", "91 AF", "91 AB", "91 AC", "91 AD", "99 87", "92 81", "99 85", "99 86", "99 8B", "99 8E", "99 8D", "92 87", "92 86", "92 91", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A8", "92 8F", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A8", "91 AA", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 9A", "91 95", "91 96", "91 94", "91 97", "91 99", "91 98", "92 84", "92 8B", "91 A3", "91 A0", "91 A1", "91 A2", "91 9E", "91 9F", "91 92", "8E A9", "E2 9B 91", "8E 93", "91 91", "8E 92", "91 9D", "91 9B", "91 9C", "92 BC", "91 93", "95 B6", "92 8D", "8C 82", "9B 91", "90 B6", "90 B1", "90 AD", "90 B9", "90 B0", "90 BB", "90 BC", "90 A8", "90 AF", "A6 81", "90 AE", "90 B7", "90 BD", "90 B8", "90 99", "90 B5", "99 88", "99 89", "99 8A", "90 92", "90 94", "90 A7", "90 A6", "90 A4", "90 A3", "90 A5", "90 BA", "90 97", "90 B4", "A6 84", "90 9D", "90 9B", "90 8C", "90 9E", "90 9C", "95 B7", "A6 82", "A6 80", "90 8D", "90 A2", "90 A0", "90 9F", "90 A1", "90 AC", "90 B3", "90 8B", "90 8A", "90 86", "90 85", "90 83", "90 82", "90 84", "90 AA", "90 AB", "90 98", "90 90", "90 8F", "90 91", "90 8E", "90 96", "90 80", "90 81", "90 93", "A6 83", "95 8A", "90 95", "90 A9", "90 88", "90 87", "90 BF", "90 BE", "90 89", "90 B2", "8C B5", "8E 84", "8C B2", "8C B3", "8C B4", "8C B1", "8C BF", "E2 98 98", "8D 80", "8E 8D", "8E 8B", "8D 83", "8D 82", "8D 81", "8C BE", "8C BA", "8C BA", "8C BB", "8C B9", "8C B7", "8C BC", "8C B8", "92 90", "8D 84", "8C B0", "8E 83", "90 9A", "95 B8", "8C 8E", "8C 8D", "8C 8F", "8C 95", "8C 96", "8C 97", "8C 98", "8C 91", "8C 92", "8C 93", "8C 94", "8C 9A", "8C 9D", "8C 9B", "8C 9C", "8C 9E", "8C 99", "E2 AD 90 EF B8 8F", "8C 9F", "92 AB", "E2 9C A8", "E2 98 84 EF B8 8F", "E2 98 80 EF B8 8F", "8C A4", "E2 9B 85 EF B8 8F", "8C A5", "8C A6", "E2 98 81 EF B8 8F", "8C A7", "E2 9B 88", "8C A9", "E2 9A A1 EF B8 8F", "94 A5", "92 A5", "E2 9D 84 EF B8 8F", "8C A8", "E2 98 83 EF B8 8F", "E2 9B 84 EF B8 8F", "8C AC", "92 A8", "8C AA", "8C AB", "E2 98 82 EF B8 8F", "E2 98 94 EF B8 8F", "92 A7", "92 A6", "8C 8A", "9B 91", "9B 91", "8D 8F", "8D 8E", "8D 90", "8D 8A", "8D 8B", "8D 8C", "8D 89", "8D 87", "8D 93", "8D 88", "8D 92", "8D 91", "8D 8D", "8D 85", "8D 86", "8C B6", "8C BD", "8D A0", "8D AF", "8D 9E", "A7 80", "8D 97", "8D 96", "8D A4", "8D B3", "8D 94", "8D 9F", "8C AD", "8D 95", "8D 9D", "8C AE", "8C AF", "8D 9C", "8D B2", "8D A5", "8D A3", "8D B1", "8D 9B", "8D 99", "8D 9A", "8D 98", "8D A2", "8D A1", "8D A7", "8D A8", "8D A6", "8D B0", "8E 82", "8D AE", "8D AC", "8D AD", "8D AB", "8D BF", "8D A9", "8D AA", "8D BA", "8D BB", "8D B7", "8D B8", "8D B9", "8D BE", "8D B6", "8D B5", "E2 98 95 EF B8 8F", "8D BC", "8D B4", "8D BD", "9B 91", "9B 91", "9B 91", "E2 9A BD EF B8 8F", "8F 80", "8F 88", "E2 9A BE EF B8 8F", "8E BE", "8F 90", "8F 89", "8E B1", "E2 9B B3 EF B8 8F", "8F 8C", "8F 93", "8F B8", "8F 92", "8F 91", "8F 8F", "8E BF", "E2 9B B7", "8F 82", "E2 9B B8", "8F B9", "8E A3", "9A A3", "8F 8A", "8F 84", "9B 80", "E2 9B B9", "8F 8B", "9A B4", "9A B5", "8F 87", "95 B4", "8F 86", "8E BD", "8F 85", "8E 96", "8E 97", "8F B5", "8E AB", "8E 9F", "8E AD", "8E A8", "8E AA", "8E A4", "8E A7", "8E BC", "8E B9", "8E B7", "8E BA", "8E B8", "8E BB", "8E AC", "8E AE", "91 BE", "8E AF", "8E B2", "8E B0", "8E B3", "9B 91", "9B 91", "9B 91", "9A 97", "9A 95", "9A 99", "9A 8C", "9A 8E", "8F 8E", "9A 93", "9A 91", "9A 92", "9A 90", "9A 9A", "9A 9B", "9A 9C", "8F 8D", "9A B2", "9A A8", "9A 94", "9A 8D", "9A 98", "9A 96", "9A A1", "9A A0", "9A AF", "9A 83", "9A 8B", "9A 9D", "9A 84", "9A 85", "9A 88", "9A 9E", "9A 82", "9A 86", "9A 87", "9A 8A", "9A 89", "9A 81", "9B A9", "E2 9C 88 EF B8 8F", "9B AB", "9B AC", "E2 9B B5 EF B8 8F", "9B A5", "9A A4", "E2 9B B4", "9B B3", "9A 80", "9B B0", "92 BA", "E2 9A 93 EF B8 8F", "9A A7", "E2 9B BD EF B8 8F", "9A 8F", "9A A6", "9A A5", "8F 81", "9A A2", "8E A1", "8E A2", "8E A0", "8F 97", "8C 81", "97 BC", "8F AD", "E2 9B B2 EF B8 8F", "8E 91", "E2 9B B0", "8F 94", "97 BB", "8C 8B", "97 BE", "8F 95", "E2 9B BA EF B8 8F", "8F 9E", "9B A3", "9B A4", "8C 85", "8C 84", "8F 9C", "8F 96", "8F 9D", "8C 87", "8C 86", "8F 99", "8C 83", "8C 89", "8C 8C", "8C A0", "8E 87", "8E 86", "8C 88", "8F 98", "8F B0", "8F AF", "8F 9F", "97 BD", "8F A0", "8F A1", "8F 9A", "8F A2", "8F AC", "8F A3", "8F A4", "8F A5", "8F A6", "8F A8", "8F AA", "8F AB", "8F A9", "92 92", "8F 9B", "E2 9B AA EF B8 8F", "95 8C", "95 8D", "95 8B", "E2 9B A9", "E2 8C 9A EF B8 8F", "93 B1", "93 B2", "92 BB", "E2 8C A8 EF B8 8F", "96 A5", "96 A8", "96 B1", "96 B2", "95 B9", "97 9C", "92 BD", "92 BE", "92 BF", "93 80", "93 BC", "93 B7", "93 B8", "93 B9", "8E A5", "93 BD", "8E 9E", "93 9E", "E2 98 8E EF B8 8F", "93 9F", "93 A0", "93 BA", "93 BB", "8E 99", "8E 9A", "8E 9B", "E2 8F B1", "E2 8F B2", "E2 8F B0", "95 B0", "E2 8F B3", "E2 8C 9B EF B8 8F", "93 A1", "94 8B", "94 8C", "92 A1", "94 A6", "95 AF", "97 91", "9B A2", "92 B8", "92 B5", "92 B4", "92 B6", "92 B7", "92 B0", "92 B3", "92 8E", "E2 9A 96", "94 A7", "94 A8", "E2 9A 92", "9B A0", "E2 9B 8F", "94 A9", "E2 9A 99", "E2 9B 93", "94 AB", "92 A3", "94 AA", "97 A1", "E2 9A 94", "9B A1", "9A AC", "E2 98 A0 EF B8 8F", "E2 9A B0", "E2 9A B1", "8F BA", "94 AE", "93 BF", "92 88", "E2 9A 97", "94 AD", "94 AC", "95 B3", "92 8A", "92 89", "8C A1", "8F B7", "94 96", "9A BD", "9A BF", "9B 81", "94 91", "97 9D", "9B 8B", "9B 8C", "9B 8F", "9A AA", "9B 8E", "96 BC", "97 BA", "E2 9B B1", "97 BF", "9B 8D", "8E 88", "8E 8F", "8E 80", "8E 81", "8E 8A", "8E 89", "8E 8E", "8E 90", "8E 8C", "8F AE", "E2 9C 89 EF B8 8F", "93 A9", "93 A8", "93 A7", "92 8C", "93 AE", "93 AA", "93 AB", "93 AC", "93 AD", "93 A6", "93 AF", "93 A5", "93 A4", "93 9C", "93 83", "93 91", "93 8A", "93 88", "93 89", "93 84", "93 85", "93 86", "97 93", "93 87", "97 83", "97 B3", "97 84", "93 8B", "97 92", "93 81", "93 82", "97 82", "97 9E", "93 B0", "93 93", "93 95", "93 97", "93 98", "93 99", "93 94", "93 92", "93 9A", "93 96", "94 97", "93 8E", "96 87", "E2 9C 82 EF B8 8F", "93 90", "93 8F", "93 8C", "93 8D", "9A A9", "8F B3", "8F B4", "94 90", "94 92", "94 93", "94 8F", "96 8A", "96 8B", "E2 9C 92 EF B8 8F", "93 9D", "E2 9C 8F EF B8 8F", "96 8D", "96 8C", "94 8D", "94 8E", "9B 91", "9B 91", "E2 9D A4 EF B8 8F", "92 9B", "92 9A", "92 99", "92 9C", "92 94", "E2 9D A3 EF B8 8F", "92 95", "92 9E", "92 93", "92 97", "92 96", "92 98", "92 9D", "92 9F", "E2 98 AE EF B8 8F", "E2 9C 9D EF B8 8F", "E2 98 AA EF B8 8F", "95 89", "E2 98 B8 EF B8 8F", "E2 9C A1 EF B8 8F", "94 AF", "95 8E", "E2 98 AF EF B8 8F", "E2 98 A6 EF B8 8F", "9B 90", "E2 9B 8E", "E2 99 88 EF B8 8F", "E2 99 89 EF B8 8F", "E2 99 8A EF B8 8F", "E2 99 8B EF B8 8F", "E2 99 8C EF B8 8F", "E2 99 8D EF B8 8F", "E2 99 8E EF B8 8F", "E2 99 8F EF B8 8F", "E2 99 90 EF B8 8F", "E2 99 91 EF B8 8F", "E2 99 92 EF B8 8F", "E2 99 93 EF B8 8F", "86 94", "E2 9A 9B", "88 B3", "88 B9", "E2 98 A2 EF B8 8F", "E2 98 A3 EF B8 8F", "93 B4", "93 B3", "88 B6", "88 9A EF B8 8F", "88 B8", "88 BA", "88 B7 EF B8 8F", "E2 9C B4 EF B8 8F", "86 9A", "89 91", "92 AE", "89 90", "E3 8A 99 EF B8 8F", "E3 8A 97 EF B8 8F", "88 B4", "88 B5", "88 B2", "85 B0 EF B8 8F", "85 B1 EF B8 8F", "86 8E", "86 91", "85 BE EF B8 8F", "86 98", "E2 9B 94 EF B8 8F", "93 9B", "9A AB", "E2 9D 8C", "E2 AD 95 EF B8 8F", "92 A2", "E2 99 A8 EF B8 8F", "9A B7", "9A AF", "9A B3", "9A B1", "94 9E", "93 B5", "E2 9D 97 EF B8 8F", "E2 9D 95", "E2 9D 93", "E2 9D 94", "E2 80 BC EF B8 8F", "E2 81 89 EF B8 8F", "92 AF", "94 85", "94 86", "94 B1", "E2 9A 9C", "E3 80 BD EF B8 8F", "E2 9A A0 EF B8 8F", "9A B8", "94 B0", "E2 99 BB EF B8 8F", "88 AF EF B8 8F", "92 B9", "E2 9D 87 EF B8 8F", "E2 9C B3 EF B8 8F", "E2 9D 8E", "E2 9C 85", "92 A0", "8C 80", "E2 9E BF", "8C 90", "E2 93 82 EF B8 8F", "8F A7", "88 82 EF B8 8F", "9B 82", "9B 83", "9B 84", "9B 85", "E2 99 BF EF B8 8F", "9A AD", "9A BE", "85 BF EF B8 8F", "9A B0", "9A B9", "9A BA", "9A BC", "9A BB", "9A AE", "8E A6", "93 B6", "88 81", "86 96", "86 97", "86 99", "86 92", "86 95", "86 93", "30 EF B8 8F E2 83 A3", "31 EF B8 8F E2 83 A3", "32 EF B8 8F E2 83 A3", "33 EF B8 8F E2 83 A3", "34 EF B8 8F E2 83 A3", "35 EF B8 8F E2 83 A3", "36 EF B8 8F E2 83 A3", "37 EF B8 8F E2 83 A3", "38 EF B8 8F E2 83 A3", "39 EF B8 8F E2 83 A3", "94 9F", "94 A2", "E2 96 B6 EF B8 8F", "E2 8F B8", "E2 8F AF", "E2 8F B9", "E2 8F BA", "E2 8F AD", "E2 8F AE", "E2 8F A9", "E2 8F AA", "94 80", "94 81", "94 82", "E2 97 80 EF B8 8F", "94 BC", "94 BD", "E2 8F AB", "E2 8F AC", "E2 9E A1 EF B8 8F", "E2 AC 85 EF B8 8F", "E2 AC 86 EF B8 8F", "E2 AC 87 EF B8 8F", "E2 86 97 EF B8 8F", "E2 86 98 EF B8 8F", "E2 86 99 EF B8 8F", "E2 86 96 EF B8 8F", "E2 86 95 EF B8 8F", "E2 86 94 EF B8 8F", "94 84", "E2 86 AA EF B8 8F", "E2 86 A9 EF B8 8F", "E2 A4 B4 EF B8 8F", "E2 A4 B5 EF B8 8F", "23 EF B8 8F E2 83 A3", "2A EF B8 8F E2 83 A3", "E2 84 B9 EF B8 8F", "94 A4", "94 A1", "94 A0", "94 A3", "8E B5", "8E B6", "E3 80 B0 EF B8 8F", "E2 9E B0", "E2 9C 94 EF B8 8F", "94 83", "E2 9E 95", "E2 9E 96", "E2 9E 97", "E2 9C 96 EF B8 8F", "92 B2", "92 B1", "C2 A9 EF B8 8F", "C2 AE EF B8 8F", "E2 84 A2 EF B8 8F", "94 9A", "94 99", "94 9B", "94 9D", "94 9C", "E2 98 91 EF B8 8F", "94 98", "E2 9A AA EF B8 8F", "E2 9A AB EF B8 8F", "94 B4", "94 B5", "94 B8", "94 B9", "94 B6", "94 B7", "94 BA", "E2 96 AA EF B8 8F", "E2 96 AB EF B8 8F", "E2 AC 9B EF B8 8F", "E2 AC 9C EF B8 8F", "94 BB", "E2 97 BC EF B8 8F", "E2 97 BB EF B8 8F", "E2 97 BE EF B8 8F", "E2 97 BD EF B8 8F", "94 B2", "94 B3", "94 88", "94 89", "94 8A", "94 87", "93 A3", "93 A2", "94 94", "94 95", "83 8F", "80 84 EF B8 8F", "E2 99 A0 EF B8 8F", "E2 99 A3 EF B8 8F", "E2 99 A5 EF B8 8F", "E2 99 A6 EF B8 8F", "8E B4", "91 81 E2 80 8D F0 9F 97 A8", "92 AD", "97 AF", "92 AC", "95 90", "95 91", "95 92", "95 93", "95 94", "95 95", "95 96", "95 97", "95 98", "95 99", "95 9A", "95 9B", "95 9C", "95 9D", "95 9E", "95 9F", "95 A0", "95 A1", "95 A2", "95 A3", "95 A4", "95 A5", "95 A6", "95 A7", "9B 91", "87 A6 F0 9F 87 AB", "87 A6 F0 9F 87 BD", "87 A6 F0 9F 87 B1", "87 A9 F0 9F 87 BF", "87 A6 F0 9F 87 B8", "87 A6 F0 9F 87 A9", "87 A6 F0 9F 87 B4", "87 A6 F0 9F 87 AE", "87 A6 F0 9F 87 B6", "87 A6 F0 9F 87 AC", "87 A6 F0 9F 87 B7", "87 A6 F0 9F 87 B2", "87 A6 F0 9F 87 BC", "87 A6 F0 9F 87 BA", "87 A6 F0 9F 87 B9", "87 A6 F0 9F 87 BF", "87 A7 F0 9F 87 B8", "87 A7 F0 9F 87 AD", "87 A7 F0 9F 87 A9", "87 A7 F0 9F 87 A7", "87 A7 F0 9F 87 BE", "87 A7 F0 9F 87 AA", "87 A7 F0 9F 87 BF", "87 A7 F0 9F 87 AF", "87 A7 F0 9F 87 B2", "87 A7 F0 9F 87 B9", "87 A7 F0 9F 87 B4", "87 A7 F0 9F 87 B6", "87 A7 F0 9F 87 A6", "87 A7 F0 9F 87 BC", "87 A7 F0 9F 87 B7", "87 AE F0 9F 87 B4", "87 BB F0 9F 87 AC", "87 A7 F0 9F 87 B3", "87 A7 F0 9F 87 AC", "87 A7 F0 9F 87 AB", "87 A7 F0 9F 87 AE", "87 A8 F0 9F 87 BB", "87 B0 F0 9F 87 AD", "87 A8 F0 9F 87 B2", "87 A8 F0 9F 87 A6", "87 AE F0 9F 87 A8", "87 B0 F0 9F 87 BE", "87 A8 F0 9F 87 AB", "87 B9 F0 9F 87 A9", "87 A8 F0 9F 87 B1", "87 A8 F0 9F 87 B3", "87 A8 F0 9F 87 BD", "87 A8 F0 9F 87 A8", "87 A8 F0 9F 87 B4", "87 B0 F0 9F 87 B2", "87 A8 F0 9F 87 AC", "87 A8 F0 9F 87 A9", "87 A8 F0 9F 87 B0", "87 A8 F0 9F 87 B7", "87 AD F0 9F 87 B7", "87 A8 F0 9F 87 BA", "87 A8 F0 9F 87 BC", "87 A8 F0 9F 87 BE", "87 A8 F0 9F 87 BF", "87 A9 F0 9F 87 B0", "87 A9 F0 9F 87 AF", "87 A9 F0 9F 87 B2", "87 A9 F0 9F 87 B4", "87 AA F0 9F 87 A8", "87 AA F0 9F 87 AC", "87 B8 F0 9F 87 BB", "87 AC F0 9F 87 B6", "87 AA F0 9F 87 B7", "87 AA F0 9F 87 AA", "87 AA F0 9F 87 B9", "87 AA F0 9F 87 BA", "87 AB F0 9F 87 B0", "87 AB F0 9F 87 B4", "87 AB F0 9F 87 AF", "87 AB F0 9F 87 AE", "87 AB F0 9F 87 B7", "87 AC F0 9F 87 AB", "87 B5 F0 9F 87 AB", "87 B9 F0 9F 87 AB", "87 AC F0 9F 87 A6", "87 AC F0 9F 87 B2", "87 AC F0 9F 87 AA", "87 A9 F0 9F 87 AA", "87 AC F0 9F 87 AD", "87 AC F0 9F 87 AE", "87 AC F0 9F 87 B7", "87 AC F0 9F 87 B1", "87 AC F0 9F 87 A9", "87 AC F0 9F 87 B5", "87 AC F0 9F 87 BA", "87 AC F0 9F 87 B9", "87 AC F0 9F 87 AC", "87 AC F0 9F 87 B3", "87 AC F0 9F 87 BC", "87 AC F0 9F 87 BE", "87 AD F0 9F 87 B9", "87 AD F0 9F 87 B3", "87 AD F0 9F 87 B0", "87 AD F0 9F 87 BA", "87 AE F0 9F 87 B8", "87 AE F0 9F 87 B3", "87 AE F0 9F 87 A9", "87 AE F0 9F 87 B7", "87 AE F0 9F 87 B6", "87 AE F0 9F 87 AA", "87 AE F0 9F 87 B2", "87 AE F0 9F 87 B1", "87 AE F0 9F 87 B9", "87 A8 F0 9F 87 AE", "87 AF F0 9F 87 B2", "87 AF F0 9F 87 B5", "87 AF F0 9F 87 AA", "87 AF F0 9F 87 B4", "87 B0 F0 9F 87 BF", "87 B0 F0 9F 87 AA", "87 B0 F0 9F 87 AE", "87 BD F0 9F 87 B0", "87 B0 F0 9F 87 BC", "87 B0 F0 9F 87 AC", "87 B1 F0 9F 87 A6", "87 B1 F0 9F 87 BB", "87 B1 F0 9F 87 A7", "87 B1 F0 9F 87 B8", "87 B1 F0 9F 87 B7", "87 B1 F0 9F 87 BE", "87 B1 F0 9F 87 AE", "87 B1 F0 9F 87 B9", "87 B1 F0 9F 87 BA", "87 B2 F0 9F 87 B4", "87 B2 F0 9F 87 B0", "87 B2 F0 9F 87 AC", "87 B2 F0 9F 87 BC", "87 B2 F0 9F 87 BE", "87 B2 F0 9F 87 BB", "87 B2 F0 9F 87 B1", "87 B2 F0 9F 87 B9", "87 B2 F0 9F 87 AD", "87 B2 F0 9F 87 B6", "87 B2 F0 9F 87 B7", "87 B2 F0 9F 87 BA", "87 BE F0 9F 87 B9", "87 B2 F0 9F 87 BD", "87 AB F0 9F 87 B2", "87 B2 F0 9F 87 A9", "87 B2 F0 9F 87 A8", "87 B2 F0 9F 87 B3", "87 B2 F0 9F 87 AA", "87 B2 F0 9F 87 B8", "87 B2 F0 9F 87 A6", "87 B2 F0 9F 87 BF", "87 B2 F0 9F 87 B2", "87 B3 F0 9F 87 A6", "87 B3 F0 9F 87 B7", "87 B3 F0 9F 87 B5", "87 B3 F0 9F 87 B1", "87 B3 F0 9F 87 A8", "87 B3 F0 9F 87 BF", "87 B3 F0 9F 87 AE", "87 B3 F0 9F 87 AA", "87 B3 F0 9F 87 AC", "87 B3 F0 9F 87 BA", "87 B3 F0 9F 87 AB", "87 B2 F0 9F 87 B5", "87 B0 F0 9F 87 B5", "87 B3 F0 9F 87 B4", "87 B4 F0 9F 87 B2", "87 B5 F0 9F 87 B0", "87 B5 F0 9F 87 BC", "87 B5 F0 9F 87 B8", "87 B5 F0 9F 87 A6", "87 B5 F0 9F 87 AC", "87 B5 F0 9F 87 BE", "87 B5 F0 9F 87 AA", "87 B5 F0 9F 87 AD", "87 B5 F0 9F 87 B3", "87 B5 F0 9F 87 B1", "87 B5 F0 9F 87 B9", "87 B5 F0 9F 87 B7", "87 B6 F0 9F 87 A6", "87 B7 F0 9F 87 AA", "87 B7 F0 9F 87 B4", "87 B7 F0 9F 87 BA", "87 B7 F0 9F 87 BC", "87 A7 F0 9F 87 B1", "87 B8 F0 9F 87 AD", "87 B0 F0 9F 87 B3", "87 B1 F0 9F 87 A8", "87 B5 F0 9F 87 B2", "87 BB F0 9F 87 A8", "87 BC F0 9F 87 B8", "87 B8 F0 9F 87 B2", "87 B8 F0 9F 87 B9", "87 B8 F0 9F 87 A6", "87 B8 F0 9F 87 B3", "87 B7 F0 9F 87 B8", "87 B8 F0 9F 87 A8", "87 B8 F0 9F 87 B1", "87 B8 F0 9F 87 AC", "87 B8 F0 9F 87 BD", "87 B8 F0 9F 87 B0", "87 B8 F0 9F 87 AE", "87 B8 F0 9F 87 A7", "87 B8 F0 9F 87 B4", "87 BF F0 9F 87 A6", "87 AC F0 9F 87 B8", "87 B0 F0 9F 87 B7", "87 B8 F0 9F 87 B8", "87 AA F0 9F 87 B8", "87 B1 F0 9F 87 B0", "87 B8 F0 9F 87 A9", "87 B8 F0 9F 87 B7", "87 B8 F0 9F 87 BF", "87 B8 F0 9F 87 AA", "87 A8 F0 9F 87 AD", "87 B8 F0 9F 87 BE", "87 B9 F0 9F 87 BC", "87 B9 F0 9F 87 AF", "87 B9 F0 9F 87 BF", "87 B9 F0 9F 87 AD", "87 B9 F0 9F 87 B1", "87 B9 F0 9F 87 AC", "87 B9 F0 9F 87 B0", "87 B9 F0 9F 87 B4", "87 B9 F0 9F 87 B9", "87 B9 F0 9F 87 B3", "87 B9 F0 9F 87 B7", "87 B9 F0 9F 87 B2", "87 B9 F0 9F 87 A8", "87 B9 F0 9F 87 BB", "87 BA F0 9F 87 AC", "87 BA F0 9F 87 A6", "87 A6 F0 9F 87 AA", "87 AC F0 9F 87 A7", "87 BA F0 9F 87 B8", "87 BB F0 9F 87 AE", "87 BA F0 9F 87 BE", "87 BA F0 9F 87 BF", "87 BB F0 9F 87 BA", "87 BB F0 9F 87 A6", "87 BB F0 9F 87 AA", "87 BB F0 9F 87 B3", "87 BC F0 9F 87 AB", "87 AA F0 9F 87 AD", "87 BE F0 9F 87 AA", "87 BF F0 9F 87 B2", "87 BF F0 9F 87 BC"];
  emojisArray = [];
  freqEmojisArray = [];
  for (m = 0, len2 = rawEmojis.length; m < len2; m++) {
    em = rawEmojis[m];
    emojisArray.push(emojiFormatter(em));
  }
  frequentlyUsedEmojisRaw = ["92 85", "91 84", "91 85", "91 82", "91 83", "92 85", "91 84", "91 85", "91 82", "91 83", "92 85", "91 84", "91 85", "91 82", "91 83", "92 85", "91 84", "91 85", "91 82", "91 83", "92 85", "91 84", "91 85", "91 82", "91 83"];
  for (n = 0, len3 = frequentlyUsedEmojisRaw.length; n < len3; n++) {
    em = frequentlyUsedEmojisRaw[n];
    freqEmojisArray.push(emojiFormatter(em));
  }
  return board;
};

exports.Sheet = function(array) {
  var act, actions, acts, button, description, descriptionBuffer, divider, exitButton, index, l, len1, o, overlay, ref, setup, sheet, sheets;
  setup = setupComponent("sheet", array);
  sheet = new Layer({
    backgroundColor: "transparent"
  });
  sheet.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
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
  exitButton = new exports.Button({
    buttonType: "big",
    text: setup.exit,
    blur: false,
    superLayer: sheets
  });
  exitButton.constraints = {
    bottom: 10,
    align: "horizontal"
  };
  actions = new Layer({
    superLayer: sheets,
    borderRadius: utils.px(12.5),
    backgroundColor: "rgba(255,255,255, .85)"
  });
  descriptionBuffer = 0;
  if (setup.description) {
    description = new exports.Text({
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
      width: utils.pt(exports.device.width) - 100
    };
    exports.layout();
    descriptionBuffer = utils.pt(description.height) + 42;
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
  }
  exports.bgBlur(actions);
  actions.constraints = {
    leading: 10,
    trailing: 10,
    bottom: [exitButton, 10],
    height: 58 * setup.actions.length + descriptionBuffer
  };
  exports.layout();
  acts = {};
  ref = setup.actions;
  for (index = l = 0, len1 = ref.length; l < len1; index = ++l) {
    act = ref[index];
    o = new Layer({
      superLayer: actions,
      width: actions.width,
      backgroundColor: "transparent",
      borderRadius: utils.px(12.5)
    });
    o.constraints = {
      top: index * 58 + descriptionBuffer,
      height: 58
    };
    button = new exports.Button({
      text: act,
      superLayer: o,
      fontSize: 20
    });
    specialChar(button);
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
    exports.layout();
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
          maxY: exports.device.height + utils.px((setup.actions.length + 3) * 58)
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
    sheets.maxY = exports.device.height + utils.px((setup.actions.length + 3) * 58);
    overlay.animate({
      properties: {
        opacity: 1
      },
      time: .3
    });
    sheets.animate({
      properties: {
        maxY: exports.device.height
      },
      time: .3
    });
  }
  overlay.on(Events.TouchEnd, function() {
    sheets.animate({
      properties: {
        maxY: exports.device.height + utils.px((setup.actions.length + 3) * 58)
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
        maxY: exports.device.height + utils.px((setup.actions.length + 3) * 58)
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

exports.NavBar = function(array) {
  var bar, barArea, divider, l, layer, leading, len1, ref, setup, svg, title;
  setup = setupComponent("navBar", array);
  bar = new Layer({
    name: "navbar"
  });
  barArea = new Layer({
    superLayer: bar,
    backgroundColor: "transparent"
  });
  divider = new Layer({
    backgroundColor: "#B2B2B2",
    name: "nav divider",
    superLayer: barArea
  });
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(bar);
  }
  divider.constraints = {
    height: .5,
    bottom: 0,
    leading: 0,
    trailing: 0
  };
  if (setup.blur) {
    bar.backgroundColor = "rgba(255, 255, 255, .8)";
    exports.bgBlur(bar);
  } else {
    bar.backgroundColor = "rgba(255, 255, 255, 1)";
    exports.bgBlur(bar);
  }
  bar.type = setup.type;
  barArea.constraints = {
    leading: 0,
    trailing: 0,
    height: 44,
    bottom: 0
  };
  bar.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 64
  };
  ref = Framer.CurrentContext.layers;
  for (l = 0, len1 = ref.length; l < len1; l++) {
    layer = ref[l];
    if (layer.type === "statusBar") {
      this.statusBar = layer;
      bar.placeBehind(this.statusBar);
    }
  }
  if (typeof setup.title === "string") {
    title = new exports.Text({
      style: "navBarTitle",
      fontWeight: "semibold",
      superLayer: barArea,
      text: setup.title
    });
  }
  if (typeof setup.title === "object") {
    title = new exports.Text({
      style: "navBarTitle",
      fontWeight: "semibold",
      superLayer: barArea,
      text: setup.title.label.html
    });
    bar.superLayer = setup.title.view;
  }
  specialChar(title);
  title.constraints = {
    align: "horizontal",
    bottom: 12
  };
  if (typeof setup.right === "string" && typeof setup.right !== "boolean") {
    bar.right = new exports.Button({
      superLayer: barArea,
      text: setup.right,
      fontWeight: 500,
      constraints: {
        bottom: 12,
        trailing: 8
      }
    });
    bar.right.type = "button";
    specialChar(bar.right);
  }
  if (typeof setup.right === "object") {
    bar.right = setup.right;
    bar.right.superLayer = barArea;
    bar.right.constraints = {
      trailing: 8,
      bottom: 12
    };
  }
  if (typeof setup.left === "string" && typeof setup.left !== "boolean") {
    leading = 8;
    if (setup.left.indexOf("<") !== -1) {
      svg = exports.utils.svg(iconLibrary.chevron);
      bar.chevron = new Layer({
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
      leading = [bar.chevron, 4];
    }
    bar.left = new exports.Button({
      superLayer: barArea,
      text: setup.left,
      fontWeight: 500,
      constraints: {
        bottom: 12,
        leading: leading
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
  exports.layout();
  return bar;
};

exports.Tab = function(array) {
  var icon, label, setup, svgFrame, tabBox, tabView;
  setup = setupComponent("tab", array);
  switch (exports.device) {
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
    width: utils.px(25),
    height: utils.px(25),
    backgroundColor: "transparent",
    name: "icon",
    superLayer: tabBox
  });
  icon.constraints = {
    align: "horizontal",
    top: 7
  };
  svgFrame = exports.utils.svg(setup.icon);
  icon.html = svgFrame.svg;
  icon.width = svgFrame.width;
  icon.height = svgFrame.height;
  label = new exports.Text({
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
  exports.layout();
  tabBox.type = "tab";
  tabBox.icon = icon;
  tabBox.view = tabView;
  tabBox.label = label;
  return tabBox;
};

exports.TabBar = function(array) {
  var divider, dummyTab, dummyTab2, index, l, len1, ref, setActive, setup, tab, tabBar, tabBarBG, tabBarBox, tabWidth;
  setup = setupComponent("tabBar", array);
  if (setup.tabs.length === 0) {
    dummyTab = new exports.Tab;
    dummyTab2 = new exports.Tab;
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
  exports.layout();
  setActive = function(tabIndex) {
    var index, l, len1, ref, results, tab;
    ref = setup.tabs;
    results = [];
    for (index = l = 0, len1 = ref.length; l < len1; index = ++l) {
      tab = ref[index];
      if (index === tabIndex) {
        exports.changeFill(tab.icon, utils.color(setup.activeColor));
        tab.label.color = utils.color(setup.activeColor);
        results.push(tab.view.visible = true);
      } else {
        exports.changeFill(tab.icon, utils.color(setup.inactiveColor));
        tab.label.color = utils.color(setup.inactiveColor);
        results.push(tab.view.visible = false);
      }
    }
    return results;
  };
  ref = setup.tabs;
  for (index = l = 0, len1 = ref.length; l < len1; index = ++l) {
    tab = ref[index];
    if (tab.type !== "tab") {
      error(tab.id, 5);
    }
    tabBarBox.addSubLayer(tab);
    exports.changeFill(tab.icon, utils.color(setup.inactiveColor));
    tab.label.color = utils.color(setup.inactiveColor);
    tabBarBG.backgroundColor = setup.backgroundColor;
    if (setup.blur) {
      tabBarBG.backgroundColor = "rgba(255,255,255, .9)";
      exports.bgBlur(tabBarBG);
    }
    if (index !== 0) {
      tab.constraints = {
        leading: setup.tabs[index - 1]
      };
      exports.layout();
    }
    tab.on(Events.TouchStart, function() {
      var tabIndex;
      tabIndex = this.x / utils.px(tabWidth);
      return setActive(tabIndex);
    });
  }
  tabBarBox.constraints = {
    align: "horizontal"
  };
  setActive(setup.start);
  exports.layout();
  return tabBar;
};

iconLibrary = {
  activity: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(16)) + "px' height='" + (utils.px(16)) + "px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Soccer Ball</title> <desc>Created with Sketch.</desc> <defs> <circle id='path-1' cx='8' cy='8' r='8'></circle> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-179.000000, -639.000000)'> <g id='Soccer-Ball' sketch:type='MSLayerGroup' transform='translate(179.000000, 639.000000)'> <mask id='mask-2' sketch:name='Mask' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='Mask' stroke='#4A5361' sketch:type='MSShapeGroup' xlink:href='#path-1'></use> <path d='M6,12.1203046 L12.8573384,8 L13.3723765,8.8571673 L6.51503807,12.9774719 L6,12.1203046 L6,12.1203046 Z' id='Rectangle-47' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.849648,8.7260551 L19.1001103,5.34510901 L19.5227285,6.2514168 L12.2722662,9.63236289 L11.849648,8.7260551 L11.849648,8.7260551 Z' id='Rectangle-47-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M6,3.1203046 L12.8573384,-1 L13.3723765,-0.142832699 L6.51503807,3.9774719 L6,3.1203046 L6,3.1203046 Z' id='Rectangle-47-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M-1,7.1203046 L5.85733841,3 L6.37237648,3.8571673 L-0.484961925,7.9774719 L-1,7.1203046 L-1,7.1203046 Z' id='Rectangle-47-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <rect id='Rectangle-50' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='4' y='6' width='1' height='5'></rect> <rect id='Rectangle-51' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='11.5' y='3' width='1' height='12'></rect> <path d='M5,4.8571673 L11.8573384,8.9774719 L12.3723765,8.1203046 L5.51503807,4 L5,4.8571673' id='Rectangle-47-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M5,12.8571673 L11.8573384,16.9774719 L12.3723765,16.1203046 L5.51503807,12 L5,12.8571673' id='Rectangle-47-Copy-5' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1' fill='#D8D8D8' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,3.19504739 L7.35514484,6.13218333 L4.5300676,6.9422612 L2.88664089,4.5057809 L4.69602457,2.18987541 L7.45771189,3.19504739' id='Polygon-1-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,11.1950474 L7.35514484,14.1321833 L4.5300676,14.9422612 L2.88664089,12.5057809 L4.69602457,10.1898754 L7.45771189,11.1950474' id='Polygon-1-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M14.5431701,0.0725939314 L14.4406031,3.00972988 L11.6155258,3.81980774 L9.97209912,1.38332745 L11.7814828,-0.93257805 L14.5431701,0.0725939314' id='Polygon-1-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> </g> </g> </g> </svg>",
  animals: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(17)) + "px' height='" + (utils.px(16)) + "px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Group</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-117.000000, -639.000000)' stroke='#4A5361'> <g id='ic_Food' sketch:type='MSLayerGroup' transform='translate(118.000000, 640.000000)'> <g id='Group' sketch:type='MSShapeGroup'> <path d='M5.68377537,1.38156646 C6.23926066,1.13624 6.85372005,1 7.5,1 C8.14627995,1 8.76073934,1.13624 9.31622463,1.38156646 C9.80879275,0.562359019 10.8255888,0 12,0 C13.6568542,0 15,1.11928813 15,2.5 C15,3.5571398 14.2126246,4.46102843 13.0999226,4.82662514 C14.2496528,5.64185422 15,6.98330062 15,8.5 C15,10.7167144 13.3971873,12.5590719 11.2872671,12.9313673 C10.4867248,14.1757703 9.08961696,15 7.5,15 C5.91038304,15 4.51327524,14.1757703 3.71273291,12.9313673 C1.60281268,12.5590719 0,10.7167144 0,8.5 C0,6.98330062 0.750347244,5.64185422 1.90007741,4.82662514 C0.787375445,4.46102843 0,3.5571398 0,2.5 C0,1.11928813 1.34314575,0 3,0 C4.17441122,0 5.19120725,0.562359019 5.68377537,1.38156646 Z' id='Oval-8'></path> <path d='M5.73834228,12 C5.86290979,12 6.14642353,12 6.14642353,12 C6.14642353,12 6.43215696,12.4426123 6.5246582,12.4919739 C6.66455601,12.5666277 7,12.4919739 7,12.4919739 L7,12 L8,12 L8,12.4919739 L8.49799228,12.4919739 L8.84301769,12 L9.3918457,12 C9.3918457,12 8.99598457,12.9839478 8.49799228,12.9839478 L6.60702407,12.9839478 C6.21404813,12.9839478 5.45996094,12 5.73834228,12 Z' id='Rectangle-44-Copy-2'></path> <circle id='Oval-14' cx='10.5' cy='7.5' r='0.5'></circle> <circle id='Oval-14-Copy' cx='4.5' cy='7.5' r='0.5'></circle> <path d='M12.6999969,5 C12.6999969,3.06700338 11.1329936,1.5 9.19999695,1.5' id='Oval-16'></path> <path d='M5.5,5 C5.5,3.06700338 3.93299662,1.5 2,1.5' id='Oval-16-Copy' transform='translate(3.750000, 3.250000) scale(-1, 1) translate(-3.750000, -3.250000) '></path> <rect id='Rectangle-44-Copy' x='7' y='11' width='1' height='1'></rect> <path d='M6,10 L6.5,10 L6.49999999,9.5 L8.50000005,9.5 L8.50000005,10 L9,10 L9,10.5 L8.5,10.5 L8.5,11 L6.5,11 L6.5,10.5 L6,10.5 L6,10 Z' id='Path'></path> </g> </g> </g> </g> </svg>",
  chevron: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='13px' height='22px' viewBox='0 0 13 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Back Chevron</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Navigation-Bar/Back' transform='translate(-8.000000, -31.000000)' fill='#0076FF'> <path d='M8.5,42 L19,31.5 L21,33.5 L12.5,42 L21,50.5 L19,52.5 L8.5,42 Z' id='Back-Chevron'></path> </g> </g> </svg>",
  emoji: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(20)) + "px' height='" + (utils.px(20)) + "px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Emoji</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-60.000000, -181.000000)' fill='#030303'> <g id='Bottom-Row' transform='translate(3.000000, 170.000000)' sketch:type='MSShapeGroup'> <path d='M66.75,30.5 C72.1347763,30.5 76.5,26.1347763 76.5,20.75 C76.5,15.3652237 72.1347763,11 66.75,11 C61.3652237,11 57,15.3652237 57,20.75 C57,26.1347763 61.3652237,30.5 66.75,30.5 Z M66.75,29.5 C71.5824916,29.5 75.5,25.5824916 75.5,20.75 C75.5,15.9175084 71.5824916,12 66.75,12 C61.9175084,12 58,15.9175084 58,20.75 C58,25.5824916 61.9175084,29.5 66.75,29.5 Z M63.75,19 C64.4403559,19 65,18.4403559 65,17.75 C65,17.0596441 64.4403559,16.5 63.75,16.5 C63.0596441,16.5 62.5,17.0596441 62.5,17.75 C62.5,18.4403559 63.0596441,19 63.75,19 Z M69.75,19 C70.4403559,19 71,18.4403559 71,17.75 C71,17.0596441 70.4403559,16.5 69.75,16.5 C69.0596441,16.5 68.5,17.0596441 68.5,17.75 C68.5,18.4403559 69.0596441,19 69.75,19 Z M59.8876334,22.1641444 C59.6390316,21.383134 60.065918,20.9785156 60.8530951,21.2329304 C60.8530951,21.2329304 63.0937503,22.2125 66.7500001,22.2125 C70.4062499,22.2125 72.6469047,21.2329304 72.6469047,21.2329304 C73.4287162,20.9662153 73.8812463,21.4044097 73.6058477,22.1807437 C73.6058477,22.1807437 72.6,27.575 66.75,27.575 C60.9,27.575 59.8876334,22.1641444 59.8876334,22.1641444 Z M66.75,23.1875 C64.06875,23.1875 61.8544055,22.4737821 61.8544055,22.4737821 C61.3273019,22.32948 61.1781233,22.5721615 61.5639555,22.957075 C61.5639555,22.957075 62.3625,24.65 66.75,24.65 C71.1375,24.65 71.9508503,22.9438304 71.9508503,22.9438304 C72.3093659,22.5399278 72.1690793,22.3359844 71.6354273,22.476349 C71.6354273,22.476349 69.43125,23.1875 66.75,23.1875 Z' id='Emoji'></path> </g> </g> </g> </svg>",
  "delete": {
    on: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(24)) + "px' height='" + (utils.px(18)) + "px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z' id='Back'></path> </g> </g> </g> </svg>",
    off: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(24)) + "px' height='" + (utils.px(18)) + "px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M338.70972,21.7097195 C338.317752,21.3177522 338.318965,20.6810349 338.70972,20.2902805 L344.643245,14.3567547 C344.840276,14.1597245 345.225639,14 345.493741,14 L355.997239,14 C357.103333,14 357.999999,14.8970601 357.999999,16.0058586 L357.999999,25.9941412 C357.999999,27.1019464 357.106457,27.9999999 355.997239,27.9999999 L345.493741,28 C345.221056,28 344.840643,27.8406431 344.643246,27.6432453 L338.70972,21.7097195 Z' id='Back'></path> </g> </g> </g> </svg>"
  },
  food: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(17)) + "px' height='" + (utils.px(16)) + "px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Food</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-148.000000, -637.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Food' transform='translate(149.500000, 229.500000)' sketch:type='MSShapeGroup'> <path d='M5.5,15.5 L1,15.5 L0,5 L6.5,5 L6.26360933,7.48210202' id='Drink' stroke='#4A5461'></path> <path d='M6.01077545,1.96930098 L6.51571352,5.22270539 L5.71908184,5.67947812 L5.0389009,1.96930098 L4.85557247,1.96930098 L4.85557247,0.96930098 L8.85557247,0.96930098 L8.85557247,1.96930098 L6.01077545,1.96930098 Z' id='Straw' fill='#4A5461' transform='translate(6.855572, 3.324390) rotate(24.000000) translate(-6.855572, -3.324390) '></path> <rect id='Bottom-Bun' stroke='#4A5461' x='3' y='14' width='10.5' height='1.5' rx='1'></rect> <path d='M1.5,12.5024408 C1.5,11.948808 1.94916916,11.5 2.49268723,11.5 L14.0073128,11.5 C14.5555588,11.5 15,11.9469499 15,12.5024408 L15,12.9975592 C15,13.551192 14.5508308,14 14.0073128,14 L2.49268723,14 C1.94444121,14 1.5,13.5530501 1.5,12.9975592 L1.5,12.5024408 Z M3.93300003,11.8392727 C3.41771834,11.6518976 3.44483697,11.5 3.9955775,11.5 L13.0044225,11.5 C13.5542648,11.5 13.5866061,11.6503251 13.067,11.8392727 L8.5,13.5 L3.93300003,11.8392727 Z' id='&quot;Patty&quot;' fill='#4A5461'></path> <path d='M2.5,10.5 L13.5,10.5 L15,11.5 L1,11.5 L2.5,10.5 Z' id='Cheese' fill='#4A5461'></path> <path d='M8.25,10.5 C11.4256373,10.5 14,10.3284271 14,9.5 C14,8.67157288 11.4256373,8 8.25,8 C5.07436269,8 2.5,8.67157288 2.5,9.5 C2.5,10.3284271 5.07436269,10.5 8.25,10.5 Z' id='Top-Bun' stroke='#4A5461' stroke-width='0.75'></path> </g> </g> </g> </g> </svg>",
  flags: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(11)) + "px' height='" + (utils.px(15)) + "px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Flag</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-275.000000, -639.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Flag' transform='translate(275.000000, 231.500000)' sketch:type='MSShapeGroup'> <rect id='Pole' fill='#4A5461' x='0' y='0' width='1' height='14'></rect> <path d='M1,1 C1,1 1.25,2 3.5,2 C5.75,2 6,0.749999998 8,0.75 C10,0.749999998 10,1.5 10,1.5 L10,7.5 C10,7.5 10,6.5 8,6.5 C6,6.5 4.80623911,8 3.5,8 C2.19376089,8 1,7 1,7 L1,1 Z' stroke='#4A5461' stroke-linejoin='round'></path> </g> </g> </g> </g> </svg>",
  frequent: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(17)) + "px' height='" + (utils.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Recent</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-55.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Recent' transform='translate(55.500000, 230.000000)' sketch:type='MSShapeGroup'> <circle id='Body' stroke='#4A5461' cx='8' cy='8' r='8'></circle> <path d='M7.5,7.5 L7.5,8.5 L8.5,8.5 L8.5,2 L7.5,2 L7.5,7.5 L4,7.5 L4,8.5 L8.5,8.5 L8.5,7.5 L7.5,7.5 Z' id='Hands' fill='#4A5461'></path> </g> </g> </g> </g> </svg>",
  keyboard: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(32.5)) + "px' height='" + (utils.px(23.5)) + "px' viewBox='0 0 65 47' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Shape</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='iPad-Portrait' transform='translate(-1436.000000, -1956.000000)' fill='#000000'> <g id='Keyboard-Light' transform='translate(0.000000, 1422.000000)'> <g id='Keyboard-down' transform='translate(1412.000000, 500.000000)'> <path d='M87.001332,34 C88.1051659,34 89,34.8997127 89,35.9932874 L89,61.0067126 C89,62.1075748 88.1058759,63 87.001332,63 L25.998668,63 C24.8948341,63 24,62.1002873 24,61.0067126 L24,35.9932874 C24,34.8924252 24.8941241,34 25.998668,34 L87.001332,34 Z M26,36 L26,61 L87,61 L87,36 L26,36 Z M79,40 L83,40 L83,44 L79,44 L79,40 Z M72,40 L76,40 L76,44 L72,44 L72,40 Z M65,40 L69,40 L69,44 L65,44 L65,40 Z M58,40 L62,40 L62,44 L58,44 L58,40 Z M51,40 L55,40 L55,44 L51,44 L51,40 Z M44,40 L48,40 L48,44 L44,44 L44,40 Z M37,40 L41,40 L41,44 L37,44 L37,40 Z M30,40 L34,40 L34,44 L30,44 L30,40 Z M79,47 L83,47 L83,51 L79,51 L79,47 Z M72,47 L76,47 L76,51 L72,51 L72,47 Z M65,47 L69,47 L69,51 L65,51 L65,47 Z M58,47 L62,47 L62,51 L58,51 L58,47 Z M51,47 L55,47 L55,51 L51,51 L51,47 Z M44,47 L48,47 L48,51 L44,51 L44,47 Z M37,47 L41,47 L41,51 L37,51 L37,47 Z M30,47 L34,47 L34,51 L30,51 L30,47 Z M79,54 L83,54 L83,58 L79,58 L79,54 Z M72,54 L76,54 L76,58 L72,58 L72,54 Z M44,54 L69,54 L69,58 L44,58 L44,54 Z M37,54 L41,54 L41,58 L37,58 L37,54 Z M30,54 L34,54 L34,58 L30,58 L30,54 Z M44.3163498,69.9771047 C43.3684225,70.5420342 43.3338721,71.5096495 44.2378217,72.1373912 L55.3621539,79.8626088 C56.2667113,80.4907726 57.7338965,80.4903505 58.6378461,79.8626088 L69.7621783,72.1373912 C70.6667357,71.5092274 70.648012,70.5205204 69.7115187,69.9234166 L69.9825731,70.0962396 C69.5181333,69.800115 68.7782557,69.8126493 68.3261307,70.1269323 L57.8154999,77.4331263 C57.3651117,77.746202 56.628165,77.7381786 56.1762103,77.4199424 L45.8386137,70.1408977 C45.3836472,69.8205407 44.6375039,69.7857088 44.1566393,70.0722862 L44.3163498,69.9771047 Z' id='Shape'></path> </g> </g> </g> </g> </svg>",
  objects: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(11)) + "px' height='" + (utils.px(16)) + "px' viewBox='0 0 11 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Lightbulb</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-244.000000, -639.000000)' stroke='#4A5361'> <g id='Lightbulb' sketch:type='MSLayerGroup' transform='translate(244.000000, 639.000000)'> <path d='M8,10.4002904 C9.78083795,9.48993491 11,7.63734273 11,5.5 C11,2.46243388 8.53756612,0 5.5,0 C2.46243388,0 0,2.46243388 0,5.5 C0,7.63734273 1.21916205,9.48993491 3,10.4002904 L3,14.0020869 C3,15.1017394 3.89761602,16 5.0048815,16 L5.9951185,16 C7.1061002,16 8,15.1055038 8,14.0020869 L8,10.4002904 Z' id='Oval-17' sketch:type='MSShapeGroup'></path> <rect id='Rectangle-50' sketch:type='MSShapeGroup' x='3' y='12' width='5' height='1'></rect> <rect id='Rectangle-51' sketch:type='MSShapeGroup' x='4' y='13.5' width='1.5' height='1'></rect> <path d='M5,8.5 C5,8.5 3.49999999,7.50000001 4,7 C4.50000001,6.49999999 5,7.66666667 5.5,8 C5.5,8 6.5,6.50000001 7,7 C7.5,7.49999999 6,8.5 6,8.5 L6,11 L5,11 L5,8.5 Z' id='Rectangle-52' sketch:type='MSShapeGroup'></path> </g> </g> </g> </svg>",
  shift: {
    on: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(20)) + "px' height='" + (utils.px(18)) + "px' viewBox='0 0 20 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-14.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.7052388,13.2052388 C21.3157462,12.8157462 20.6857559,12.8142441 20.2947612,13.2052388 L11.9160767,21.5839233 C11.1339991,22.3660009 11.3982606,23 12.4979131,23 L16.5,23 L16.5,28.009222 C16.5,28.5564136 16.9463114,29 17.4975446,29 L24.5024554,29 C25.053384,29 25.5,28.5490248 25.5,28.009222 L25.5,23 L29.5020869,23 C30.6055038,23 30.866824,22.366824 30.0839233,21.5839233 L21.7052388,13.2052388 Z' id='Shift'></path> </g> </g> </g> </svg>",
    off: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(20)) + "px' height='" + (utils.px(18)) + "px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-14.000000, -129.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.6719008,12.2325898 C21.301032,11.8279916 20.6946892,11.8334731 20.3288195,12.2325898 L11.6947023,21.6512983 C10.7587441,22.672308 11.1285541,23.5 12.5097751,23.5 L15.9999999,23.5000002 L15.9999999,28.0014241 C15.9999999,28.8290648 16.6716559,29.5000001 17.497101,29.5000001 L24.5028992,29.5000001 C25.3297253,29.5000001 26.0000003,28.8349703 26.0000003,28.0014241 L26.0000003,23.5000001 L29.4902251,23.5000002 C30.8763357,23.5000002 31.2439521,22.6751916 30.3054161,21.6512985 L21.6719008,12.2325898 Z M21.341748,14.3645316 C21.1530056,14.1632064 20.8433515,14.1670914 20.6582514,14.3645316 L13.5,21.9999998 L17.5000001,21.9999999 L17.5000002,27.5089956 C17.5000002,27.7801703 17.7329027,28.0000008 18.0034229,28.0000008 L23.996577,28.0000008 C24.2746097,28.0000008 24.4999997,27.7721203 24.4999997,27.5089956 L24.4999997,21.9999999 L28.5,21.9999999 L21.341748,14.3645316 Z' id='Shift'></path> </g> </g> </g> </svg>"
  },
  smileys: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(17)) + "px' height='" + (utils.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>:D</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-86.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id=':D' transform='translate(87.000000, 230.500000)' sketch:type='MSShapeGroup'> <circle id='Head' stroke='#4A5461' stroke-width='0.789473684' cx='7.5' cy='7.5' r='7.5'></circle> <path d='M7.5,13.5263158 C10.2686907,13.5263158 12.5131579,10.3684212 12.5131579,9.18421045 C12.5131579,7.60526317 11.4389098,9.18421043 7.5,9.18421053 C3.56109023,9.18421062 2.48684211,7.60526317 2.48684211,9.18421045 C2.48684211,10.368421 4.73130935,13.5263158 7.5,13.5263158 Z M7.5,10.9605263 C8.93233083,11.1578947 11.7969925,10.368421 11.7969925,9.44423552 C11.7969925,8.78947368 10.8762084,9.57894727 7.5,9.77631579 C4.12379162,9.57894743 3.20300872,8.78947369 3.20300752,9.44423552 C3.20300582,10.368421 6.06766917,11.1578947 7.5,10.9605263 Z' id='Smile' fill='#4A5461'></path> <path d='M5.23684211,6.3236598 C5.64378876,6.3236598 5.97368421,5.88183554 5.97368421,5.33681769 C5.97368421,4.79179985 5.64378876,4.34997559 5.23684211,4.34997559 C4.82989545,4.34997559 4.5,4.79179985 4.5,5.33681769 C4.5,5.88183554 4.82989545,6.3236598 5.23684211,6.3236598 Z M9.73684211,6.3236598 C10.1437888,6.3236598 10.4736842,5.88183554 10.4736842,5.33681769 C10.4736842,4.79179985 10.1437888,4.34997559 9.73684211,4.34997559 C9.32989545,4.34997559 9,4.79179985 9,5.33681769 C9,5.88183554 9.32989545,6.3236598 9.73684211,6.3236598 Z' id='Eyes' fill='#4A5461'></path> </g> </g> </g> </g> </svg>",
  symbols: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(16)) + "px' height='" + (utils.px(17)) + "px' viewBox='0 0 15 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Objects &amp; Symbols</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-304.000000, -638.000000)' fill='#4A5461'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Objects-&amp;-Symbols' transform='translate(304.000000, 230.000000)'> <g id='Thing' transform='translate(0.000000, 0.500000)' sketch:type='MSShapeGroup'> <rect id='Rectangle-1209' x='0' y='0' width='7' height='1'></rect> <rect id='Rectangle-1209' x='0' y='2' width='7' height='1'></rect> <rect id='Rectangle-1211' x='3' y='3' width='1' height='4'></rect> </g> <path d='M11.75,0.159263978 L11.75,0 L11,0 L11,5.091493 C10.59344,4.94221392 10.0639662,4.96453224 9.55715399,5.19017957 C8.69849293,5.5724801 8.23003835,6.39365621 8.51083141,7.02432774 C8.79162447,7.65499928 9.71533454,7.85634375 10.5739956,7.47404321 C11.2761183,7.16143803 11.7173393,6.55538972 11.7013595,6 L11.75,6 L11.75,1.39385056 C12.3175908,1.59590037 13,2.0817456 13,3.25 C13,4.25 12.75,5.5 12.75,5.5 C12.75,5.5 13.75,4.75 13.75,2.5 C13.75,1.02256101 12.5642674,0.407473019 11.75,0.159263978 Z' id='Note' sketch:type='MSShapeGroup'></path> <text id='&amp;' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'> <tspan x='0.25' y='16'>&amp;</tspan> </text> <text id='%' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'> <tspan x='7.75' y='16'>%</tspan> </text> </g> </g> </g> </g> </svg>",
  travel: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(17)) + "px' height='" + (utils.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Transport</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-241.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Transport' transform='translate(241.500000, 230.000000)' sketch:type='MSShapeGroup'> <path d='M0,6 L1,6 L1,15 L0,15 L0,6 Z M15,4 L16,4 L16,15 L15,15 L15,4 Z M3.5,0 L4.5,0 L4.5,7 L3.5,7 L3.5,0 Z M1,6 L3.5,6 L3.5,7 L1,7 L1,6 Z M4.5,0 L9.5,0 L9.5,1 L4.5,1 L4.5,0 Z M9.5,0 L10.5,0 L10.5,6 L9.5,6 L9.5,0 Z M10.5,4 L15,4 L15,5 L10.5,5 L10.5,4 Z' id='Skyline' fill='#4A5461'></path> <g id='Windows' transform='translate(2.000000, 2.000000)' fill='#4A5461'> <rect id='Window' x='0' y='6' width='1' height='1'></rect> <rect id='Window' x='3.5' y='0' width='1' height='1'></rect> <rect id='Window' x='5.5' y='0' width='1' height='1'></rect> <rect id='Window' x='5.5' y='2' width='1' height='1'></rect> <rect id='Window' x='3.5' y='2' width='1' height='1'></rect> <rect id='Window' x='11' y='4' width='1' height='1'></rect> <rect id='Window' x='11' y='6' width='1' height='1'></rect> </g> <g id='Car' transform='translate(2.500000, 6.500000)'> <path d='M8.5,8 L2.5,8 L2.5,9.5 L0.5,9.5 L0.5,7.8681145 C0.201202192,7.69582702 0,7.37091363 0,6.9906311 L0,5.0093689 C0,4.45190985 0.444836974,4 0.995577499,4 L10.0044225,4 C10.5542648,4 11,4.44335318 11,5.0093689 L11,6.9906311 C11,7.3653315 10.7990244,7.69234519 10.5,7.86649002 L10.5,9.5 L8.5,9.5 L8.5,8 Z M1.75,6.5 C2.16421356,6.5 2.5,6.16421356 2.5,5.75 C2.5,5.33578644 2.16421356,5 1.75,5 C1.33578644,5 1,5.33578644 1,5.75 C1,6.16421356 1.33578644,6.5 1.75,6.5 Z M9.25,6.5 C9.66421356,6.5 10,6.16421356 10,5.75 C10,5.33578644 9.66421356,5 9.25,5 C8.83578644,5 8.5,5.33578644 8.5,5.75 C8.5,6.16421356 8.83578644,6.5 9.25,6.5 Z M0.5,7 L10.5,7 L10.5,7.5 L0.5,7.5 L0.5,7 Z M3,6.5 L8,6.5 L8,7 L3,7 L3,6.5 Z' id='Body' fill='#4A5461'></path> <path d='M1.5,4.5 L1.5,3 C1.5,1.34314575 2.83902013,0 4.50166547,0 L6.49833453,0 C8.15610859,0 9.5,1.34651712 9.5,3 L9.5,5' id='Roof' stroke='#4A5461'></path> </g> </g> </g> </g> </g> </svg>"
};

bannerBG = {
  "iphone-5": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='320px' height='68px' viewBox='0 0 320 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>iphone5</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPhone-5/5S/5C' fill='#1A1A1C'> <path d='M0,0 L320,0 L320,68 L0,68 L0,0 Z M142,61.0048815 C142,59.897616 142.896279,59 144.0024,59 L176.9976,59 C178.103495,59 179,59.8938998 179,61.0048815 L179,61.9951185 C179,63.102384 178.103721,64 176.9976,64 L144.0024,64 C142.896505,64 142,63.1061002 142,61.9951185 L142,61.0048815 Z' id='iphone5'></path> </g> </g> </svg>",
  "iphone-6s": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='375px' height='68px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'> <g transform='translate(58.000000, 7.000000)' id='Notification-container'> <g> <path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path> </g> </g> </g> </g> </svg>",
  "iphone-6s-plus": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='414px' height='68px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background Copy</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'> <g transform='translate(43.000000, 74.000000)' id='Notification-container'> <g> <path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path> </g> </g> </g> </g> </svg>",
  "ipad": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='768px' height='68px' viewBox='0 0 768 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Portrait' fill='#1A1A1C'> <path d='M0,0 L768,0 L768,68 L0,68 L0,0 Z M366,61.0048815 C366,59.897616 366.896279,59 368.0024,59 L400.9976,59 C402.103495,59 403,59.8938998 403,61.0048815 L403,61.9951185 C403,63.102384 402.103721,64 400.9976,64 L368.0024,64 C366.896505,64 366,63.1061002 366,61.9951185 L366,61.0048815 Z' id='ipad-portrait'></path> </g> </g> </svg>",
  "ipad-pro": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='1024px' height='68px' viewBox='0 0 1024 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-pro-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Pro-Portrait' fill='#1A1A1C'> <path d='M0,0 L1024,0 L1024,68 L0,68 L0,0 Z M494,61.0048815 C494,59.897616 494.896279,59 496.0024,59 L528.9976,59 C530.103495,59 531,59.8938998 531,61.0048815 L531,61.9951185 C531,63.102384 530.103721,64 528.9976,64 L496.0024,64 C494.896505,64 494,63.1061002 494,61.9951185 L494,61.0048815 Z' id='ipad-pro-portrait'></path> </g> </g> </svg>"
};


},{"ios-kit-banner":"ios-kit-banner","ios-kit-layout":"ios-kit-layout","ios-kit-library":"ios-kit-library","ios-kit-text":"ios-kit-text","ios-kit-utils":"ios-kit-utils"}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9pT1MgS2l0IGZvciBGcmFtZXIvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LWJhbm5lci5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9pT1MgS2l0IGZvciBGcmFtZXIvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LWxheW91dC5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9pT1MgS2l0IGZvciBGcmFtZXIvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LWxpYnJhcnkuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvaU9TIEtpdCBmb3IgRnJhbWVyL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC10ZXh0LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvX1Byb2plY3RzL1BlcnNvbmFsL2lPUyBLaXQgZm9yIEZyYW1lci9mcmFtZXItaW9zLWtpdC9EZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdXRpbHMuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvaU9TIEtpdCBmb3IgRnJhbWVyL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBOztBQUFBLEdB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Q0FEakMsR0FDK0MsZzlEQXhPM0M7RUEwUGIsT0FBQSxFQUFTLHFFQUFBLEdBQ00sQ0FBQyxLQUFLLENBQUMsRUFBTixDQUFTLEVBQVQsQ0FBRCxDQUROLEdBQ29CLGNBRHBCLEdBQ2lDLENBQUMsS0FBSyxDQUFDLEVBQU4sQ0FBUyxFQUFULENBQUQsQ0FEakMsR0FDK0MseTNEQTNQM0M7RUFxUmIsTUFBQSxFQUFRLHFFQUFBLEdBQ08sQ0FBQyxLQUFLLENBQUMsRUFBTixDQUFTLEVBQVQsQ0FBRCxDQURQLEdBQ3FCLGNBRHJCLEdBQ2tDLENBQUMsS0FBSyxDQUFDLEVBQU4sQ0FBUyxFQUFULENBQUQsQ0FEbEMsR0FDZ0QsazlFQXRSM0M7OztBQW1UZCxRQUFBLEdBQVc7RUFDVixVQUFBLEVBQVksb3pCQURGO0VBYVYsV0FBQSxFQUFhLG8rQkFiSDtFQTZCVixnQkFBQSxFQUFtQiw0K0JBN0JUO0VBNkNWLE1BQUEsRUFBUywrekJBN0NDO0VBeURWLFVBQUEsRUFBYSwrMEJBekRIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQmFubmVyIFxuaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0dGl0bGU6IFwiVGl0bGVcIlxuXHRtZXNzYWdlOlwiTWVzc2FnZVwiXG5cdGFjdGlvbjpcIkFjdGlvblwiXG5cdHRpbWU6XCJub3dcIlxuXHRpY29uOnVuZGVmaW5lZFxuXHRkdXJhdGlvbjo3XG5cdGFuaW1hdGVkOmZhbHNlXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBpb3Muc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdGJhbm5lciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmFubmVyXCJcblx0YmFubmVyLmh0bWwgPSBpb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMuYmFubmVyQkdbaW9zLmRldmljZS5uYW1lXSkuc3ZnXG5cdGJhbm5lci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjY4XG5cblx0IyBEaWZmZXJlbnQgcG9zaXRpb25pbmdzIGZvciBlYWNoIGRldmljZVxuXHRzd2l0Y2ggaW9zLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwYWRcIiBcblx0XHRcdEBsZWFkaW5nSWNvbiA9IDIwMFxuXHRcdFx0QHRvcEljb24gPSAxNVxuXHRcdFx0QHRvcFRpdGxlID0gMTFcblx0XHRcdEB0b3BNZXNzYWdlID0gMlxuXHRcdHdoZW4gXCJpcGFkLXByb1wiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxOTJcblx0XHRcdEB0b3BJY29uID0gMTJcblx0XHRcdEB0b3BUaXRsZSA9IDlcblx0XHRcdEB0b3BNZXNzYWdlID0gMlxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxNVxuXHRcdFx0QHRvcEljb24gPSAxMlxuXHRcdFx0QHRvcFRpdGxlID0gMTBcdFx0XG5cdFx0XHRAdG9wTWVzc2FnZSA9IDdcblx0XHRlbHNlXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxNVxuXHRcdFx0QHRvcEljb24gPSA4XG5cdFx0XHRAdG9wVGl0bGUgPSA2XG5cdFx0XHRAdG9wTWVzc2FnZSA9IDJcblxuXHRpZiBzZXR1cC5pY29uID09IHVuZGVmaW5lZFxuXHRcdHNldHVwLmljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpiYW5uZXJcblx0XHRzZXR1cC5pY29uLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwibGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM2N0ZGODEgMCUsICMwMUI0MUYgMTAwJSlcIlxuXHRlbHNlXG5cdFx0YmFubmVyLmFkZFN1YkxheWVyKHNldHVwLmljb24pXG5cblx0c2V0dXAuaWNvbi5ib3JkZXJSYWRpdXMgPSBpb3MudXRpbHMucHgoNC41KVxuXHRzZXR1cC5pY29uLm5hbWUgPSBcImljb25cIlxuXHRzZXR1cC5pY29uLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6MjBcblx0XHR3aWR0aDoyMFxuXHRcdGxlYWRpbmc6QGxlYWRpbmdJY29uXG5cdFx0dG9wOkB0b3BJY29uIFxuXG5cdHRpdGxlID0gbmV3IGlvcy5UZXh0IHN0eWxlOlwiYmFubmVyVGl0bGVcIiwgdGV4dDpzZXR1cC50aXRsZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250V2VpZ2h0OlwibWVkaXVtXCIsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcInRpdGxlXCJcblx0dGl0bGUuY29uc3RyYWludHMgPSBcblx0XHR0b3A6QHRvcFRpdGxlXG5cdFx0bGVhZGluZzpbc2V0dXAuaWNvbiwgMTFdXG5cdG1lc3NhZ2UgPSBuZXcgaW9zLlRleHQgc3R5bGU6XCJiYW5uZXJNZXNzYWdlXCIsIHRleHQ6c2V0dXAubWVzc2FnZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjpiYW5uZXIsIG5hbWU6XCJtZXNzYWdlXCJcblx0bWVzc2FnZS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZ0VkZ2VzOnRpdGxlXG5cdFx0dG9wOlt0aXRsZSwgQHRvcE1lc3NhZ2VdXG5cblx0dGltZSA9IG5ldyBpb3MuVGV4dCBzdHlsZTpcImJhbm5lclRpbWVcIiwgdGV4dDpzZXR1cC50aW1lLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRTaXplOjExLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcInRpbWVcIlxuXHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOlt0aXRsZSwgNV1cblx0XHRib3R0b21FZGdlczogdGl0bGVcblxuXHRpZiBpb3MuZGV2aWNlLm5hbWUgPT0gXCJpcGFkXCIgfHwgaW9zLmRldmljZS5uYW1lID09IFwiaXBhZC1wcm9cIlxuXHRcdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdFx0Ym90dG9tRWRnZXM6IHRpdGxlXG5cdFx0XHR0cmFpbGluZzogQGxlYWRpbmdJY29uXG5cblx0aW9zLmxheW91dC5zZXQoKVxuXHRpb3MudXRpbHMuYmdCbHVyKGJhbm5lcilcblxuXHQjIyBCYW5uZXIgRHJhZyBzZXR0aW5nc1xuXHRiYW5uZXIuZHJhZ2dhYmxlID0gdHJ1ZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmhvcml6b250YWwgPSBmYWxzZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmNvbnN0cmFpbnRzID1cblx0XHR5OjBcblxuXHRiYW5uZXIuZHJhZ2dhYmxlLmJvdW5jZU9wdGlvbnMgPVxuXHQgICAgZnJpY3Rpb246IDI1XG5cdCAgICB0ZW5zaW9uOiAyNTBcblxuXHRiYW5uZXIub24gRXZlbnRzLkRyYWdFbmQsIC0+XG5cdFx0aWYgYmFubmVyLm1heFkgPCBpb3MudXRpbHMucHgoNjgpXG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjE1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0VXRpbHMuZGVsYXkgLjI1LCAtPlxuXHRcdFx0XHRiYW5uZXIuZGVzdHJveSgpXG5cblx0IyBCdWZmZXIgdGhhdCBzaXRzIGFib3ZlIHRoZSBiYW5uZXJcblx0YmFubmVyQnVmZmVyID0gbmV3IExheWVyIG1heFk6MCwgbmFtZTpcImJ1ZmZlclwiLCBiYWNrZ3JvdW5kQ29sb3I6XCIjMUIxQjFDXCIsIG9wYWNpdHk6LjksIHN1cGVyTGF5ZXI6YmFubmVyLCB3aWR0aDppb3MuZGV2aWNlLndpZHRoLCBtYXhZOmJhbm5lci55LCBoZWlnaHQ6aW9zLmRldmljZS5oZWlnaHRcblx0aW9zLnV0aWxzLmJnQmx1cihiYW5uZXJCdWZmZXIpXG5cblx0IyBBbmltYXRlLWluXG5cdGlmIHNldHVwLmFuaW1hdGVkID09IHRydWVcblx0XHRiYW5uZXIueSA9IDAgLSBiYW5uZXIuaGVpZ2h0XG5cdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KHk6MClcblx0XHRcdHRpbWU6LjI1XG5cdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblxuXHQjIEFuaW1hdGUtb3V0XG5cdGlmIHNldHVwLmR1cmF0aW9uXG5cdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24sIC0+XG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uICsgLjI1LCAtPlxuXHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXHRcdFxuXHQjIEV4cG9ydCBCYW5uZXJcblx0YmFubmVyLmljb24gPSBzZXR1cC5pY29uXG5cdGJhbm5lci50aXRsZSA9IHRpdGxlXG5cdGJhbm5lci5tZXNzYWdlID0gbWVzc2FnZVxuXHRyZXR1cm4gYmFubmVyXG4iLCIjIFV0aWxzXG5cbmlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGFuaW1hdGlvbnM6IHtcblx0XHR0YXJnZXQ6dW5kZWZpbmVkXG5cdFx0Y29uc3RyYWludHM6IHVuZGVmaW5lZFxuXHRcdGN1cnZlIDogXCJlYXNlLWluLW91dFwiXG5cdFx0Y3VydmVPcHRpb25zOiB1bmRlZmluZWRcblx0XHR0aW1lOjFcblx0XHRkZWxheTowXG5cdFx0cmVwZWF0OnVuZGVmaW5lZFxuXHRcdGNvbG9yTW9kZWw6dW5kZWZpbmVkXG5cdFx0c3RhZ2dlcjp1bmRlZmluZWRcblx0XHRmYWRlT3V0OmZhbHNlXG5cdFx0ZmFkZUluOmZhbHNlXG5cdH1cbn1cblxubGF5b3V0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHRhcmdldExheWVycyA9IFtdXG5cdGJsdWVwcmludCA9IFtdXG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGlmIHNldHVwLnRhcmdldCBcblx0XHRpZiBzZXR1cC50YXJnZXQubGVuZ3RoIFxuXHRcdFx0dGFyZ2V0TGF5ZXJzID0gc2V0dXAudGFyZ2V0XG5cdFx0ZWxzZVxuXHRcdFx0dGFyZ2V0TGF5ZXJzLnB1c2ggc2V0dXAudGFyZ2V0XG5cdGVsc2Vcblx0XHR0YXJnZXRMYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cblx0aWYgc2V0dXAudGFyZ2V0XG5cdFx0aWYgc2V0dXAuY29uc3RyYWludHNcblx0XHRcdGZvciBuZXdDb25zdHJhaW50IGluIE9iamVjdC5rZXlzKHNldHVwLmNvbnN0cmFpbnRzKVxuXHRcdFx0XHRzZXR1cC50YXJnZXQuY29uc3RyYWludHNbbmV3Q29uc3RyYWludF0gPSBzZXR1cC5jb25zdHJhaW50c1tuZXdDb25zdHJhaW50XVxuXG5cdCNUcmFuc2xhdGUgbmV3IGNvbnN0cmFpbnRzXG5cdGZvciBsYXllciwgaW5kZXggaW4gdGFyZ2V0TGF5ZXJzXG5cdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0ge31cblx0XHRpZiBsYXllci5jb25zdHJhaW50c1xuXHRcdFx0cHJvcHMgPSB7fVxuXHRcdFx0bGF5ZXIuc3VwZXJGcmFtZSA9IHt9XG5cblx0XHRcdGlmIGxheWVyLnN1cGVyTGF5ZXJcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgPSBsYXllci5zdXBlckxheWVyLmhlaWdodFxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLndpZHRoID0gbGF5ZXIuc3VwZXJMYXllci53aWR0aFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLmhlaWdodCA9IGlvcy5kZXZpY2UuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBpb3MuZGV2aWNlLndpZHRoXG5cdFx0XHRcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkICYmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGggPSB7fVx0XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCAhPSB1bmRlZmluZWQgJiYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ID0ge31cblxuXHRcdFx0IyBTaXplIGNvbnN0cmFpbnRzXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy53aWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMud2lkdGggPSBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRwcm9wcy53aWR0aCA9IGxheWVyLndpZHRoXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmhlaWdodCAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0XG5cblx0XHRcdCMgUG9zaXRpb25pbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyYFxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcsIDEwKVx0XG5cdFx0XHRcdFx0cHJvcHMueCA9IGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIHRoZSBsYXllciByZWZlcmVuY2VkIGhhc24ndCBiZWVuIHNldFxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRleHBvcnRzLmFuaW1hdGVMYXlvdXRcblx0XHRcdFx0XHRcdFx0XHRsYXllcjpsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnggKyBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aCArIGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzFdKVxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLnN0YXJ0WCA9IHByb3BzLnhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLCAxMClcdFxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC0gaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nKSAtIHByb3BzLndpZHRoXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgdGhlIGxheWVyIHJlZmVyZW5jZWQgaGFzbid0IGJlZW4gc2V0XG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRleHBvcnRzLmFuaW1hdGVMYXlvdXRcblx0XHRcdFx0XHRcdFx0XHRsYXllcjpsYXllci5jb25zdHJhaW50cy50cmFpbGluZ1swXVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcuY2FsY3VsYXRlZFBvc2l0aW9uLnggLSBwcm9wcy53aWR0aFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54IC0gaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzFdKSAtIHByb3BzLndpZHRoXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguY2FsY3VsYXRlZFBvc2l0aW9uWCA9IHByb3BzLnhcblxuXHRcdFx0XHQjI3BlcmZvcm0gYXV0b3NpemVcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFhcblx0XHRcdFx0cHJvcHMud2lkdGggPSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguY2FsY3VsYXRlZFBvc2l0aW9uWCAtIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFggKyBwcm9wcy53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50b3AsIDEwKVx0XG5cdFx0XHRcdFx0cHJvcHMueSA9IGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy50b3ApXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy50b3AuY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyBsYXllci5jb25zdHJhaW50cy50b3AuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5jYWxjdWxhdGVkUG9zaXRpb24ueSArIGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0ICsgaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRvcFsxXSlcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSA9IHByb3BzLnlcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5ib3R0b20sIDEwKVx0XG5cdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0IC0gaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSkgLSBwcm9wcy5oZWlnaHRcblxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbS5sZW5ndGggPT0gdW5kZWZpbmVkIFxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbS5jYWxjdWxhdGVkUG9zaXRpb24ueSAtIHByb3BzLmhlaWdodFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b21bMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSAgaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbVsxXSkgLSBwcm9wcy5oZWlnaHRcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LmNhbGN1bGF0ZWRQb3NpdGlvblkgPSBwcm9wcy55XG5cdFx0XHRcdCMjIHBlcmZvcm0gYXV0b3NpemVcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5jYWxjdWxhdGVkUG9zaXRpb25ZIC0gbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFkgKyBwcm9wcy5oZWlnaHRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuc3RhcnRZXG5cblxuXHRcdFx0IyBBbGlnbm1lbnQgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjU2V0IHRoZSBjZW50ZXJpbmcgZnJhbWVcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuc3VwZXJGcmFtZS53aWR0aCAvIDIgLSBwcm9wcy53aWR0aCAvIDIgXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0IC8gMiAtIHByb3BzLmhlaWdodCAvIDIgXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJjZW50ZXJcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMiBcblx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgLyAyIC0gcHJvcHMuaGVpZ2h0IC8gMiBcblxuXG5cdFx0XHQjIENlbnRlcmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyAobGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGggLSBwcm9wcy53aWR0aCkgLyAyXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyAobGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodCAtIHByb3BzLmhlaWdodCkgLyAyXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueCArIChsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoIC0gcHJvcHMud2lkdGgpIC8gMlxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgKGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0IC0gcHJvcHMuaGVpZ2h0KSAvIDJcblxuXHRcdFx0IyBBbGlnbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi54IFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoICsgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3BFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcEVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi55XG5cdFx0XHRcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSBwcm9wcy5oZWlnaHQgKyBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0XG5cblxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gcHJvcHNcblx0XHRlbHNlXG5cdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSBsYXllci5wcm9wc1xuXG5cdFx0Ymx1ZXByaW50LnB1c2ggbGF5ZXJcblxuXG5cdHJldHVybiBibHVlcHJpbnRcblxuZXhwb3J0cy5zZXQgPSAoYXJyYXkpIC0+IFxuXHRzZXR1cCA9IHt9XG5cdHByb3BzID0ge31cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zW2ldXG5cblx0Ymx1ZXByaW50ID0gbGF5b3V0KGFycmF5KVxuXG5cdGZvciBsYXllciwgaW5kZXggaW4gYmx1ZXByaW50XG5cdFx0Zm9yIGtleSBpbiBPYmplY3Qua2V5cyhsYXllci5jYWxjdWxhdGVkUG9zaXRpb24pXG5cdFx0XHRsYXllcltrZXldID0gbGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uW2tleV1cblxuZXhwb3J0cy5hbmltYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHByb3BzID0ge31cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zW2ldXG5cblx0Ymx1ZXByaW50ID0gbGF5b3V0KGFycmF5KVxuXG5cdGZvciBsYXllciwgaW5kZXggaW4gYmx1ZXByaW50XG5cdFx0I1RpbWluZ1xuXHRcdGRlbGF5ID0gc2V0dXAuZGVsYXlcblx0XHRpZiBzZXR1cC5zdGFnZ2VyXG5cdFx0XHRzdGFnID0gc2V0dXAuc3RhZ2dlclxuXHRcdFx0ZGVsYXkgPSAoKGluZGV4KSAqIHN0YWcpICsgZGVsYXlcblxuXHRcdGlmIHNldHVwLmZhZGVPdXRcblx0XHRcdGlmIGxheWVyID09IHNldHVwLmZhZGVPdXRcblx0XHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLm9wYWNpdHkgPSAwXG5cblx0XHRpZiBzZXR1cC5mYWRlSW5cblx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5vcGFjaXR5ID0gMVxuXG5cdFx0bGF5ZXIuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpsYXllci5jYWxjdWxhdGVkUG9zaXRpb25cblx0XHRcdHRpbWU6c2V0dXAudGltZVxuXHRcdFx0ZGVsYXk6ZGVsYXlcblx0XHRcdGN1cnZlOnNldHVwLmN1cnZlXG5cdFx0XHRyZXBlYXQ6c2V0dXAucmVwZWF0XG5cdFx0XHRjb2xvck1vZGVsOnNldHVwLmNvbG9yTW9kZWxcblx0XHRcdGN1cnZlT3B0aW9uczpzZXR1cC5jdXJ2ZU9wdGlvbnNcblxuXHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbiA9IHByb3BzIiwiIyBMaWJyYXJ5XG5cbmxheWVyID0gbmV3IExheWVyXG5leHBvcnRzLmxheWVyUHJvcHMgPSBPYmplY3Qua2V5cyhsYXllci5wcm9wcylcbmV4cG9ydHMubGF5ZXJQcm9wcy5wdXNoIFwic3VwZXJMYXllclwiXG5leHBvcnRzLmxheWVyU3R5bGVzID0gT2JqZWN0LmtleXMobGF5ZXIuc3R5bGUpXG5sYXllci5kZXN0cm95KClcblxuZXhwb3J0cy5hc3NldHMgPSB7XG5cdGJhbm5lckJHIDoge1xuXHRcdFwiaXBob25lLTVcIjogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzMyMHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzMjAgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5pcGhvbmU1PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTUvNVMvNUMnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMMzIwLDAgTDMyMCw2OCBMMCw2OCBMMCwwIFogTTE0Miw2MS4wMDQ4ODE1IEMxNDIsNTkuODk3NjE2IDE0Mi44OTYyNzksNTkgMTQ0LjAwMjQsNTkgTDE3Ni45OTc2LDU5IEMxNzguMTAzNDk1LDU5IDE3OSw1OS44OTM4OTk4IDE3OSw2MS4wMDQ4ODE1IEwxNzksNjEuOTk1MTE4NSBDMTc5LDYzLjEwMjM4NCAxNzguMTAzNzIxLDY0IDE3Ni45OTc2LDY0IEwxNDQuMDAyNCw2NCBDMTQyLjg5NjUwNSw2NCAxNDIsNjMuMTA2MTAwMiAxNDIsNjEuOTk1MTE4NSBMMTQyLDYxLjAwNDg4MTUgWicgaWQ9J2lwaG9uZTUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnNcIjogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMzc1cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDM3NSA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZDwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjMuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU4LjAwMDAwMCwgNy4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwxNiBMMzc1LDE2IEwzNzUsODQgTDAsODQgTDAsMTYgWiBNMTY5LDc3LjAwNDg4MTUgQzE2OSw3NS44OTc2MTYgMTY5Ljg5NjI3OSw3NSAxNzEuMDAyNCw3NSBMMjAzLjk5NzYsNzUgQzIwNS4xMDM0OTUsNzUgMjA2LDc1Ljg5Mzg5OTggMjA2LDc3LjAwNDg4MTUgTDIwNiw3Ny45OTUxMTg1IEMyMDYsNzkuMTAyMzg0IDIwNS4xMDM3MjEsODAgMjAzLjk5NzYsODAgTDE3MS4wMDI0LDgwIEMxNjkuODk2NTA1LDgwIDE2OSw3OS4xMDYxMDAyIDE2OSw3Ny45OTUxMTg1IEwxNjksNzcuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nNDE0cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDQxNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kIENvcHk8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC00My4wMDAwMDAsIC03NC4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDQzLjAwMDAwMCwgNzQuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEw0MTQsMCBMNDE0LDY4IEwwLDY4IEwwLDAgWiBNMTg5LDYxLjAwNDg4MTUgQzE4OSw1OS44OTc2MTYgMTg5Ljg5NjI3OSw1OSAxOTEuMDAyNCw1OSBMMjIzLjk5NzYsNTkgQzIyNS4xMDM0OTUsNTkgMjI2LDU5Ljg5Mzg5OTggMjI2LDYxLjAwNDg4MTUgTDIyNiw2MS45OTUxMTg1IEMyMjYsNjMuMTAyMzg0IDIyNS4xMDM3MjEsNjQgMjIzLjk5NzYsNjQgTDE5MS4wMDI0LDY0IEMxODkuODk2NTA1LDY0IDE4OSw2My4xMDYxMDAyIDE4OSw2MS45OTUxMTg1IEwxODksNjEuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQtQ29weSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBhZFwiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nNzY4cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDc2OCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5pcGFkLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVBvcnRyYWl0JyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMNzY4LDAgTDc2OCw2OCBMMCw2OCBMMCwwIFogTTM2Niw2MS4wMDQ4ODE1IEMzNjYsNTkuODk3NjE2IDM2Ni44OTYyNzksNTkgMzY4LjAwMjQsNTkgTDQwMC45OTc2LDU5IEM0MDIuMTAzNDk1LDU5IDQwMyw1OS44OTM4OTk4IDQwMyw2MS4wMDQ4ODE1IEw0MDMsNjEuOTk1MTE4NSBDNDAzLDYzLjEwMjM4NCA0MDIuMTAzNzIxLDY0IDQwMC45OTc2LDY0IEwzNjguMDAyNCw2NCBDMzY2Ljg5NjUwNSw2NCAzNjYsNjMuMTA2MTAwMiAzNjYsNjEuOTk1MTE4NSBMMzY2LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcG9ydHJhaXQnPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGFkLXByb1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMTAyNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAxMDI0IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPHRpdGxlPmlwYWQtcHJvLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVByby1Qb3J0cmFpdCcgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDEwMjQsMCBMMTAyNCw2OCBMMCw2OCBMMCwwIFogTTQ5NCw2MS4wMDQ4ODE1IEM0OTQsNTkuODk3NjE2IDQ5NC44OTYyNzksNTkgNDk2LjAwMjQsNTkgTDUyOC45OTc2LDU5IEM1MzAuMTAzNDk1LDU5IDUzMSw1OS44OTM4OTk4IDUzMSw2MS4wMDQ4ODE1IEw1MzEsNjEuOTk1MTE4NSBDNTMxLDYzLjEwMjM4NCA1MzAuMTAzNzIxLDY0IDUyOC45OTc2LDY0IEw0OTYuMDAyNCw2NCBDNDk0Ljg5NjUwNSw2NCA0OTQsNjMuMTA2MTAwMiA0OTQsNjEuOTk1MTE4NSBMNDk0LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcHJvLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdH1cbn1cbiMgRGV2aWNlIGZyYW1lcyBcbmV4cG9ydHMuZnJhbWVzID0gIHtcblxuIyBGdWxsc2NyZWVuXG5cdFwiZnVsbHNjcmVlblwiIDogeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFx0c2NhbGU6MSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXG5cdCMgaVBob25lc1xuXHQjIyA1U1xuXHRcImFwcGxlLWlwaG9uZS01cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVzLWdvbGRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyMgNWNcblx0XCJhcHBsZS1pcGhvbmUtNWMtZ3JlZW5cIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01Yy1ibHVlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01Yy1yZWRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVjLXdoaXRlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNWMteWVsbG93XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNWMtcGlua1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuXHQjIyA2c1xuXHRcImFwcGxlLWlwaG9uZS02cy1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1nb2xkXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1yb3NlLWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyMgNnMgcGx1c1xuXHRcImFwcGxlLWlwaG9uZS02cy1wbHVzLWdvbGRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLCBzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTZzLXBsdXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtcGx1c1wiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyBpUGFkc1xuXG5cdCMjIEFpciBcblx0XCJhcHBsZS1pcGFkLWFpci0yLWdvbGRcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLWFpci0yLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG5cdCMjIE1pbmlcblx0XCJhcHBsZS1pcGFkLW1pbmktNC1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLW1pbmktNC1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLW1pbmktNC1zaWx2ZXJcIjp7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuXHQjIyBQcm9cblx0XCJhcHBsZS1pcGFkLXByby1nb2xkXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwYWQtcHJvLXNpbHZlclwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLXByby1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbn0iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdHRleHQ6IFwiaU9TIFRleHQgTGF5ZXJcIlxuXHR0eXBlOlwidGV4dFwiXG5cdHg6MFxuXHR5OjBcblx0d2lkdGg6LTFcblx0aGVpZ2h0Oi0xXG5cdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdHN0eWxlOlwiZGVmYXVsdFwiXG5cdGxpbmVzOjFcblx0dGV4dEFsaWduOlwibGVmdFwiXG5cdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0Y29sb3I6XCJibGFja1wiXG5cdGZvbnRTaXplOiAxN1xuXHRmb250RmFtaWx5OlwiLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiXG5cdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0bGluZUhlaWdodDpcImF1dG9cIlxuXHRuYW1lOlwidGV4dCBsYXllclwiXG5cdG9wYWNpdHk6MVxuXHR0ZXh0VHJhbnNmb3JtOlwibm9uZVwiXG5cdGxldHRlclNwYWNpbmc6MFxuXHRuYW1lOlwidGV4dCBsYXllclwiXG5cdGNvbnN0cmFpbnRzOnt9XG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IGlvcy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblx0ZXhjZXB0aW9ucyA9IE9iamVjdC5rZXlzKHNldHVwKVxuXHR0ZXh0TGF5ZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpzZXR1cC5uYW1lXG5cdHRleHRMYXllci50eXBlID0gXCJ0ZXh0XCJcblx0dGV4dExheWVyLmh0bWwgPSBzZXR1cC50ZXh0XG5cdGZvciBwcm9wIGluIGlvcy5saWIubGF5ZXJQcm9wc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwiY29sb3JcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IGlvcy51dGlscy5jb2xvcihzZXR1cFtwcm9wXSlcblx0XHRcdHRleHRMYXllcltwcm9wXSA9IHNldHVwW3Byb3BdXG5cdGZvciBwcm9wIGluIGlvcy5saWIubGF5ZXJTdHlsZXNcblx0XHRpZiBzZXR1cFtwcm9wXVxuXHRcdFx0aWYgcHJvcCA9PSBcImxpbmVIZWlnaHRcIiAmJiBzZXR1cFtwcm9wXSA9PSBcImF1dG9cIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9ICBzZXR1cFtcImZvbnRTaXplXCJdXG5cdFx0XHRpZiBwcm9wID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdHN3aXRjaCBzZXR1cFtwcm9wXVxuXHRcdFx0XHRcdHdoZW4gXCJ1bHRyYXRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMTAwXG5cdFx0XHRcdFx0d2hlbiBcInRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMjAwXG5cdFx0XHRcdFx0d2hlbiBcImxpZ2h0XCIgdGhlbiBzZXR1cFtwcm9wXSA9IDMwMFxuXHRcdFx0XHRcdHdoZW4gXCJyZWd1bGFyXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDQwMFxuXHRcdFx0XHRcdHdoZW4gXCJtZWRpdW1cIiB0aGVuIHNldHVwW3Byb3BdID0gNTAwXG5cdFx0XHRcdFx0d2hlbiBcInNlbWlib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDYwMFxuXHRcdFx0XHRcdHdoZW4gXCJib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDcwMFxuXHRcdFx0XHRcdHdoZW4gXCJibGFja1wiIHRoZW4gc2V0dXBbcHJvcF0gPSA4MDBcblx0XHRcdGlmIHByb3AgPT0gXCJmb250U2l6ZVwiIHx8IHByb3AgPT0gXCJsaW5lSGVpZ2h0XCIgfHwgcHJvcCA9PSBcImxldHRlclNwYWNpbmdcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IGlvcy51dGlscy5weChzZXR1cFtwcm9wXSkgKyBcInB4XCJcblx0XHRcdHRleHRMYXllci5zdHlsZVtwcm9wXSA9IHNldHVwW3Byb3BdXG5cblx0dGV4dEZyYW1lID0gaW9zLnV0aWxzLnRleHRBdXRvU2l6ZSh0ZXh0TGF5ZXIpXG5cdHRleHRMYXllci5wcm9wcyA9IChoZWlnaHQ6dGV4dEZyYW1lLmhlaWdodCwgd2lkdGg6dGV4dEZyYW1lLndpZHRoKVxuXHR0ZXh0TGF5ZXIuY29uc3RyYWludHMgPSBzZXR1cC5jb25zdHJhaW50c1xuXHRpb3MubGF5b3V0LnNldCgpXG5cdHJldHVybiB0ZXh0TGF5ZXIiLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG4jIyBDb252ZXJ0cyBweCB0byBwdFxuZXhwb3J0cy5wdCA9IChweCkgLT5cblx0cHQgPSBweC9pb3MuZGV2aWNlLnNjYWxlXG5cdHB0ID0gTWF0aC5yb3VuZChwdClcblx0cmV0dXJuIHB0XG5cbiMjIENvbnZlcnRzIHB0IHRvIHB4XG5leHBvcnRzLnB4ID0gKHB0KSAtPlxuXHRweCA9IHB0ICogaW9zLmRldmljZS5zY2FsZVxuXHRweCA9IE1hdGgucm91bmQocHgpXG5cdHJldHVybiBweFxuXG4jIyBpT1MgQ29sb3Ig4oCTIFRoaXMgd2lsbCBzdG9yZSBhbGwgb2YgdGhlIGRlZmF1bHQgaU9TIGNvbG9ycyBpbnRlYWQgb2YgdGhlIGRlZmF1bHQgQ1NTIGNvbG9ycy4gKlRoaXMgaXMgb25seSB1cCBoZXJlIGJlY2F1c2UgSSByZWZlciB0byBpdCBpbiB0aGUgZGVmYXVsdHMuKlxuZXhwb3J0cy5jb2xvciA9IChjb2xvclN0cmluZykgLT5cblx0Y29sb3IgPSBcIlwiXG5cdGlmIHR5cGVvZiBjb2xvclN0cmluZyA9PSBcInN0cmluZ1wiXG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy50b0xvd2VyQ2FzZSgpXG5cdHN3aXRjaCBjb2xvclN0cmluZ1xuXHRcdHdoZW4gXCJyZWRcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUzODI0XCIpXG5cdFx0d2hlbiBcImJsdWVcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjMDA3NkZGXCIpXG5cdFx0d2hlbiBcInBpbmtcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUyODUxXCIpXG5cdFx0d2hlbiBcImdyZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImdyYXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImJsYWNrXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzAzMDMwM1wiKVxuXHRcdHdoZW4gXCJ3aGl0ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiNFRkVGRjRcIilcblx0XHR3aGVuIFwib3JhbmdlXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGOTYwMFwiKVxuXHRcdHdoZW4gXCJncmVlblwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM0NERCNUVcIilcblx0XHR3aGVuIFwibGlnaHQgYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwibGlnaHQtYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwieWVsbG93XCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGQ0QwMFwiKVxuXHRcdHdoZW4gXCJsaWdodCBrZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOURBN0IzXCIpXG5cdFx0d2hlbiBcImxpZ2h0LWtleVwiIFxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOURBN0IzXCIpXG5cdFx0ZWxzZSBcblx0XHRcdGlmIGNvbG9yU3RyaW5nWzBdID09IFwiI1wiIHx8IGNvbG9yU3RyaW5nLnRvSGV4U3RyaW5nKClbMF0gPT0gXCIjXCJcblx0XHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoY29sb3JTdHJpbmcpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzkyOTI5MlwiKVxuXHRyZXR1cm4gY29sb3JcblxuIyBTdXBwb3J0aW5nIEZ1bmN0aW9uc1xuIyBVdGlsc1xuXG4jIENsZWFucyBhIHN0cmluZyBvZiA8YnI+IGFuZCAmbmJzcDtcbmV4cG9ydHMuY2xlYW4gPSAoc3RyaW5nKSAtPlxuXHQjIyByZW1vdmUgd2hpdGUgc3BhY2Vcblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1smXW5ic3BbO10vZ2ksIFwiIFwiKS5yZXBsYWNlKC9bPF1icls+XS9naSwgXCJcIilcblx0cmV0dXJuIHN0cmluZ1xuXG4jIENvbnZlcnRzIHB4J3Mgb2YgYW4gU1ZHIHRvIHNjYWxhYmxlIHZhcmlhYmxlc1xuZXhwb3J0cy5zdmcgPSAoc3ZnKSAtPlxuXHQjIEZpbmQgU3RyaW5nXG5cdHN0YXJ0SW5kZXggPSBzdmcuc2VhcmNoKFwiPHN2ZyB3aWR0aD1cIikgXG5cdGVuZEluZGV4ID0gc3ZnLnNlYXJjaChcIiB2aWV3Qm94XCIpXG5cdHN0cmluZyA9IHN2Zy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuXHQjRmluZCB3aWR0aFxuXHR3U3RhcnRJbmRleCA9IHN0cmluZy5zZWFyY2goXCI9XCIpICsgMlxuXHR3RW5kSW5kZXggPSAgc3RyaW5nLnNlYXJjaChcInB4XCIpXG5cdHdpZHRoID0gc3RyaW5nLnNsaWNlKHdTdGFydEluZGV4LCB3RW5kSW5kZXgpXG5cdG5ld1dpZHRoID0gZXhwb3J0cy5weCh3aWR0aClcblxuXHQjIEZpbmQgSGVpZ2h0XG5cdGhlaWdodFN0cmluZyA9IHN0cmluZy5zbGljZSh3RW5kSW5kZXggKyA0LCBzdHJpbmcubGVuZ3RoKVxuXHRoU3RhcnRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCI9XCIpKyAyXG5cdGhFbmRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCJweFwiKSBcblx0aGVpZ2h0ID0gaGVpZ2h0U3RyaW5nLnNsaWNlKGhTdGFydEluZGV4LCBoRW5kSW5kZXgpXG5cdG5ld0hlaWdodCA9IGV4cG9ydHMucHgoaGVpZ2h0KVxuXG5cdCNDcmVhdGUgbmV3IHN0cmluZ1xuXHRuZXdTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSh3aWR0aCwgbmV3V2lkdGgpXG5cdG5ld1N0cmluZyA9IG5ld1N0cmluZy5yZXBsYWNlKGhlaWdodCwgbmV3SGVpZ2h0KVxuXG5cdCNSZXBsYWNlIHN0cmluZ3Ncblx0c3ZnID0gc3ZnLnJlcGxhY2Uoc3RyaW5nLCBuZXdTdHJpbmcpXG5cblx0cmV0dXJuIHtcblx0XHRzdmc6c3ZnXG5cdFx0d2lkdGg6bmV3V2lkdGhcblx0XHRoZWlnaHQ6bmV3SGVpZ2h0XG5cdH1cblxuIyBDaGFuZ2VzIHRoZSBmaWxsIG9mIGFuIFNWR1xuZXhwb3J0cy5jaGFuZ2VGaWxsID0gKGxheWVyLCBjb2xvcikgLT5cblx0c3RhcnRJbmRleCA9IGxheWVyLmh0bWwuc2VhcmNoKFwiZmlsbD1cXFwiI1wiKVxuXHRmaWxsU3RyaW5nID0gbGF5ZXIuaHRtbC5zbGljZShzdGFydEluZGV4LCBsYXllci5odG1sLmxlbmd0aClcblx0ZW5kSW5kZXggPSBmaWxsU3RyaW5nLnNlYXJjaChcIlxcXCI+XCIpXG5cdHN0cmluZyA9IGZpbGxTdHJpbmcuc2xpY2UoMCwgZW5kSW5kZXgpXG5cdG5ld1N0cmluZyA9IFwiZmlsbD1cXFwiXCIgKyB1dGlscy5jb2xvcihjb2xvcikudG9IZXhTdHJpbmcoKVxuXHRsYXllci5odG1sID0gbGF5ZXIuaHRtbC5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5leHBvcnRzLmNhcGl0YWxpemUgPSAoc3RyaW5nKSAtPlxuXHRyZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG5cbiMgUmV0dXJucyB0aGUgY3VycmVudCB0aW1lXG5leHBvcnRzLmdldFRpbWUgPSAtPlxuXHRkYXlzT2ZUaGVXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cblx0bW9udGhzT2ZUaGVZZWFyID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cblx0ZGF0ZU9iaiA9IG5ldyBEYXRlKClcblx0bW9udGggPSBtb250aHNPZlRoZVllYXJbZGF0ZU9iai5nZXRNb250aCgpXVxuXHRkYXRlID0gZGF0ZU9iai5nZXREYXRlKClcblx0ZGF5ID0gZGF5c09mVGhlV2Vla1tkYXRlT2JqLmdldERheSgpXVxuXHRob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKVxuXHRtaW5zID0gZGF0ZU9iai5nZXRNaW51dGVzKClcblx0c2VjcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXG5cdHJldHVybiB7XG5cdFx0bW9udGg6bW9udGhcblx0XHRkYXRlOmRhdGVcblx0XHRkYXk6ZGF5XG5cdFx0aG91cnM6aG91cnNcblx0XHRtaW5zOm1pbnNcblx0XHRzZWNzOnNlY3Ncblx0fVxuXG5leHBvcnRzLmJnQmx1ciA9IChsYXllcikgLT5cblx0bGF5ZXIuc3R5bGVbXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiXSA9IFwiYmx1cigje2V4cG9ydHMucHgoNSl9cHgpXCJcblx0cmV0dXJuIGxheWVyIFxuXG5leHBvcnRzLnRleHRBdXRvU2l6ZSA9ICh0ZXh0TGF5ZXIpIC0+XG5cdCNEZWZpbmUgV2lkdGhcblx0Y29uc3RyYWludHMgPSB7fVxuXHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMgXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodFxuXHRcdFx0Y29uc3RyYWludHMuaGVpZ2h0ID0gdXRpbHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGhcblx0XHRcdGNvbnN0cmFpbnRzLndpZHRoID0gdXRpbHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXHRzdHlsZXMgPVxuXHRcdGZvbnRTaXplOiB0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LXNpemVcIl1cblx0XHRmb250RmFtaWx5OiB0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LWZhbWlseVwiXVxuXHRcdGZvbnRXZWlnaHQ6IHRleHRMYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdXG5cdFx0bGluZUhlaWdodDogdGV4dExheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl1cblx0XHRsZXR0ZXJTcGFjaW5nOiB0ZXh0TGF5ZXIuc3R5bGVbXCJsZXR0ZXItc3BhY2luZ1wiXVxuXHRcdHRleHRUcmFuc2Zvcm06IHRleHRMYXllci5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdXG5cdHRleHRXaWR0aCA9IFV0aWxzLnRleHRTaXplIHRleHRMYXllci5odG1sLCBzdHlsZXMsIGNvbnN0cmFpbnRzXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiB0ZXh0V2lkdGgud2lkdGhcblx0XHRoZWlnaHQ6IHRleHRXaWR0aC5oZWlnaHRcblx0fVxuXG5leHBvcnRzLmdldERldmljZSA9IC0+XG5cblxuXHQjIExvYWRzIHRoZSBpbml0aWFsIGZyYW1lXG5cdGRldmljZSA9IEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZVxuXG5cdCMjIyBUaGlzIHN3aXRjaCBsb29rcyBhdCB0aGUgaW5uZXJXaWR0aCB0byBkZXRlcm1pbmUgaWYgdGhlIHByb3RvdHlwZSBpcyBiZWluZyBvcGVuZWQgb24gYSBkZXZpY2UuIFxuXHRJZiBzbywgaXQnbGwgb3ZlcnJpZGUgdGhlIGRldmljZSwgYW5kIGl0J2xsIGFkanVzdCB0aGUgdmlldyB0byBmdWxsc2NyZWVuLiMjI1xuXHRjYXB0dXJlZERldmljZSA9IHtcblx0XHR3aWR0aDppb3MubGliLmZyYW1lc1tkZXZpY2VdLndpZHRoXG5cdFx0aGVpZ2h0Omlvcy5saWIuZnJhbWVzW2RldmljZV0uaGVpZ2h0XG5cdFx0c2NhbGU6aW9zLmxpYi5mcmFtZXNbZGV2aWNlXS5zY2FsZVxuXHRcdG1vYmlsZTppb3MubGliLmZyYW1lc1tkZXZpY2VdLm1vYmlsZVxuXHRcdHBsYXRmb3JtOmlvcy5saWIuZnJhbWVzW2RldmljZV0ucGxhdGZvcm1cblx0fVxuXG5cdHN3aXRjaCBpbm5lcldpZHRoXG5cdFx0IyBpUGhvbmUgNWMvNXMvU0Vcblx0XHR3aGVuIDY0MFxuXHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNXMtc2lsdmVyXCJcblx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0XHQjIGlQaG9uZSA2c1xuXHRcdHdoZW4gNzUwXG5cdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwaG9uZS02cy1zaWx2ZXJcIlxuXHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRcdCMgaVBob25lIDZzK1xuXHRcdHdoZW4gMTI0MiBcblx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDIyMDhcblx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIlxuXHRcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGFkIGluIHBvcnRyYWl0XG5cdFx0d2hlbiAxNTM2IFxuXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMjA0OFxuXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCJcblx0XHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRcdCMgaVBhZFxuXHRcdHdoZW4gMjA0OFxuXG5cdFx0XHQjIGlQYWQgUHJvIGluIHBvcnRyYWl0XG5cdFx0XHRpZiBpbm5lckhlaWdodCA9PSAyNzMyXG5cdFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCJcblxuXHRcdFx0IyBpUGFkIGluIGxhbmRzY2NhcGVcblx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDE1MzZcblx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGFkLWFpci0yLXNpbHZlclwiXG5cdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGFkIFByb1xuXHRcdHdoZW4gMjczMlxuXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMjA0OFxuXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtcHJvLXNpbHZlclwiXG5cdFx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0ZXhwb3J0cy5zY2FsZSA9IGlvcy5saWIuZnJhbWVzW2RldmljZV0uc2NhbGVcblxuXHRpZiBkZXZpY2UgPT0gXCJmdWxsc2NyZWVuXCJcblx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRlbHNlXG5cdFx0ZXhwb3J0cy53aWR0aCA9IGlvcy5saWIuZnJhbWVzW2RldmljZV0ud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IGlvcy5saWIuZnJhbWVzW2RldmljZV0uaGVpZ2h0XG5cdFx0aWYgd2luZG93LmlubmVyV2lkdGggPT0gMTI0MiB8fCB3aW5kb3cuaW5uZXJXaWR0aCA9PSAyMjA4XG5cdFx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHRleHBvcnRzLnNjYWxlID0gM1xuXHRleHBvcnRzLm1vYmlsZSA9IGlvcy5saWIuZnJhbWVzW2RldmljZV0ubW9iaWxlXG5cdGV4cG9ydHMucGxhdGZvcm0gPSBpb3MubGliLmZyYW1lc1tkZXZpY2VdLnBsYXRmb3JtXG5cdGV4cG9ydHMub3JpZW50YXRpb24gPSAgRnJhbWVyLkRldmljZS5vcmllbnRhdGlvblxuXG5cdCMgRGV2aWNlIFN0cmluZyBTY3J1YmJlclxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcImFwcGxlLVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1nb2xkXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLWdyZWVuXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLWJsdWVcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcmVkXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXdoaXRlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXllbGxvd1wiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1waW5rXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXNwYWNlLWdyZXlcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcm9zZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIjVzXCIsIFwiNVwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIjVjXCIsIFwiNVwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1taW5pXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLWFpclwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi0yXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLTRcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItc2lsdmVyXCIsIFwiXCIpXG5cblx0Y2FwdHVyZWREZXZpY2UubmFtZSA9IGRldmljZVxuXG5cdCMgZXhwb3J0cy5kZXZpY2UgYmVjb21lcyBlaXRoZXIgaXBhZCwgaXBhZC1wcm8sIGlwaG9uZS01LCBpcGhvbmUtNnMsIGlwaG9uZS02cy1wbHVzXG5cdHJldHVybiBjYXB0dXJlZERldmljZVxuIiwiI2lPU0tpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHQgXG5cbmV4cG9ydHMubGF5b3V0ID0gbGF5b3V0ID0gcmVxdWlyZSAnaW9zLWtpdC1sYXlvdXQnXG5leHBvcnRzLnV0aWxzID0gdXRpbHMgPSByZXF1aXJlICdpb3Mta2l0LXV0aWxzJ1xuZXhwb3J0cy5saWIgPSBsaWJyYXJ5ID0gcmVxdWlyZSAnaW9zLWtpdC1saWJyYXJ5J1xuXG5cbmV4cG9ydHMuZGV2aWNlID0gdXRpbHMuZ2V0RGV2aWNlKClcbmV4cG9ydHMuYXNzZXRzID0gbGlicmFyeS5hc3NldHNcblxuI0ltcG9ydCBDb21wb25lbnRzXG5iYW5uZXIgPSByZXF1aXJlICdpb3Mta2l0LWJhbm5lcidcbnRleHQgPSByZXF1aXJlICdpb3Mta2l0LXRleHQnXG5cbiMjRXhwb3J0IENvbXBvbmVudHNcbmV4cG9ydHMuQmFubmVyID0gYmFubmVyLmNyZWF0ZVxuZXhwb3J0cy5UZXh0ID0gdGV4dC5jcmVhdGVcblxuXG5cbiMjIERlZmF1bHRzIGZvciBldmVyeXRoaW5nXG5kZWZhdWx0cyA9IHtcblx0YWxlcnQ6IHtcblx0XHR0aXRsZTogXCJUaXRsZVwiXG5cdFx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRcdGFjdGlvbnM6W1wiT0tcIl1cblx0XHRhY3Rpb246XCJBY3Rpb25cIlxuXHRcdHNlY29uZGFyeUFjdGlvbjogXCJzZWNvbmRhcnlBY3Rpb25cIlxuXHR9XG5cdGJ1dHRvbjp7XG5cdFx0dGV4dDpcInRleHRcIlxuXHRcdHR5cGU6XCJidXR0b25cIlxuXHRcdGJ1dHRvblR5cGU6XCJ0ZXh0XCJcblx0XHRzdHlsZTpcImxpZ2h0XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0Y29sb3I6XCIjMDA3QUZGXCJcblx0XHRmb250U2l6ZToxN1xuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRuYW1lOlwiYnV0dG9uXCJcblx0XHRibHVyOnRydWVcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdGNvbnN0cmFpbnRzOnVuZGVmaW5lZFxuXHR9XG5cdGNvbnN0cmFpbnRQcm9wcyA6IFtcImhlaWdodFwiLCBcIndpZHRoXCJdXG5cdGNvbnN0cmFpbnRUeXBlczogW1widG9wXCIsIFwibGVhZGluZ1wiLCBcInRyYWlsaW5nXCIsIFwiYm90dG9tXCJdXG5cdGNvbnN0cmFpbnRBbGlnbnMgOiBbXCJob3Jpem9udGFsQ2VudGVyXCIsIFwidmVydGljYWxDZW50ZXJcIiwgXCJsZWFkaW5nRWRnZXNcIiwgXCJ0cmFpbGluZ0VkZ2VzXCIsIFwidG9wRWRnZXNcIiwgXCJib3R0b21FZGdlc1wiLCBcImFsaWduXCIsIFwidmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdXG5cdGNvbnN0cmFpbnRzOiB7XG5cdFx0dG9wOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcImhlaWdodFwiXG5cdFx0XHRcIm9wcFwiIDogXCJib3R0b21cIlxuXHRcdH1cblx0XHRsZWFkaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib3BwXCIgOiBcInRyYWlsaW5nXCJcblx0XHR9XG5cdFx0Ym90dG9tOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieVwiXG5cdFx0XHRcIm9wcFwiIDogXCJ0b3BcIlxuXHRcdH1cblx0XHR0cmFpbGluZzoge1xuXHRcdFx0XCJwcm9wXCIgOiBcIm1heFhcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieFwiXG5cdFx0XHRcIm9wcFwiIDogXCJsZWFkaW5nXCJcblx0XHR9XG5cdH1cblx0Y3Vyc29yOntcblx0XHRjb2xvcjpcImJsdWVcIlxuXHRcdGhlaWdodDoyMFxuXHRcdHdpZHRoOjFcblx0fVxuXHRmaWVsZDoge1xuXHRcdGlzRWRpdGluZzpmYWxzZVxuXHRcdGN1cnNvcjp7fVxuXHRcdGJvcmRlclJhZGl1czo1XG5cdFx0Ym9yZGVyV2lkdGg6MFxuXHRcdGJvcmRlckNvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGNvbG9yOlwiIzA5MDkwOFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwiI0ZGRlwiXG5cdFx0cmV0dXJuVGV4dDpcInJldHVyblwiXG5cdFx0cmV0dXJuQ29sb3I6XCJsaWdodC1rZXlcIlxuXHRcdHN0eWxlOlwibGlnaHRcIlxuXHRcdHR5cGU6XCJmaWVsZFwiXG5cdFx0Y29uc3RyYWludHM6dW5kZWZpbmVkXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHR3aWR0aDoyNThcblx0XHRoZWlnaHQ6MzBcblx0XHRmb250U2l6ZToxNVxuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRwbGFjZWhvbGRlclRleHQ6XCJwbGFjZWhvbGRlclRleHRcIlxuXHRcdHBsYWNlaG9sZGVyQ29sb3I6XCIjODA4MDgwXCJcblx0XHR0ZXh0OlwiXCJcblx0XHR0ZXh0Q29uc3RyYWludHM6e2FsaWduOlwidmVydGljYWxcIiwgbGVhZGluZzo4fVxuXHRcdGlucHV0OnRydWVcblxuXHR9XG5cdGxvY2tTY3JlZW46IHtcblx0XHR0aW1lOlwiZGVmYXVsdFwiXG5cdFx0ZGF0ZTpcImRlZmF1bHRcIlxuXHRcdHBhc3Njb2RlOmZhbHNlXG5cdFx0Y2xvY2syNDpmYWxzZVxuXHRcdHR5cGU6XCJsb2NrU2NyZWVuXCJcblx0fVxuXHRrZXlib2FyZDoge1xuXHRcdHJldHVyblRleHQ6XCJyZXR1cm5cIlxuXHRcdHJldHVybkNvbG9yOlwibGlnaHQta2V5XCJcblx0XHRhbmltYXRlZDpmYWxzZVxuXHRcdG91dHB1dDp1bmRlZmluZWRcblx0fVxuXHRzaGVldDoge1xuXHRcdGFjdGlvbnM6W1wiT0tcIl1cblx0XHRleGl0OlwiQ2FuY2VsXCJcblx0XHRhbmltYXRlZDpmYWxzZVxuXHRcdGRlc2NyaXB0aW9uOnVuZGVmaW5lZFxuXHR9XG5cdG5hdkJhcjoge1xuXHRcdHRpdGxlOlwiVGl0bGVcIlxuXHRcdGxlZnQ6dW5kZWZpbmVkXG5cdFx0cmlnaHQ6XCJFZGl0XCJcblx0XHRibHVyOnRydWVcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdHR5cGU6XCJuYXZCYXJcIlxuXHR9XG5cdHN0YXR1c0Jhcjoge1xuXHRcdGNhcnJpZXI6XCJcIlxuXHRcdG5ldHdvcms6XCJMVEVcIlxuXHRcdGJhdHRlcnk6MTAwXG5cdFx0c2lnbmFsOjVcblx0XHRzdHlsZTpcImRhcmtcIlxuXHRcdGNsb2NrMjQ6ZmFsc2Vcblx0XHR0eXBlOlwic3RhdHVzQmFyXCJcblx0fVxuXHR0YWJCYXIgOiB7XG5cdFx0dGFiczogW11cblx0XHRzdGFydDowXG5cdFx0dHlwZTpcInRhYkJhclwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGFjdGl2ZUNvbG9yOlwiYmx1ZVwiXG5cdFx0aW5hY3RpdmVDb2xvcjpcImdyYXlcIlxuXHRcdGJsdXI6dHJ1ZVxuXHR9XG5cdHRhYiA6IHtcblx0XHRsYWJlbDogXCJsYWJlbFwiXG5cdFx0aWNvbjpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMjVweCcgaGVpZ2h0PScyNXB4JyB2aWV3Qm94PScwIDAgMjUgMjUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPjE8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzEnPlxuXHRcdFx0XHRcdDxnIGlkPSdCb3R0b20tQmFyL1RhYi1CYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNS4wMDAwMDAsIC03LjAwMDAwMCknIGZpbGw9JyMwMDc2RkYnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J1BsYWNlaG9sZGVycycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjUuMDAwMDAwLCA3LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nMScgeD0nMCcgeT0nMCcgd2lkdGg9JzI1JyBoZWlnaHQ9JzI1JyByeD0nMyc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRhY3RpdmU6IHVuZGVmaW5lZFxuXHRcdHVuYWN0aXZlOiB1bmRlZmluZWRcblx0XHR0YWJCYXI6IHVuZGVmaW5lZFxuXHRcdHR5cGU6IFwidGFiXCJcblx0fVxuXHR0YWJsZSA6IHtcblx0XHRjb25zdHJhaW50czogdW5kZWZpbmVkXG5cdFx0dHlwZTpcInRhYmxlXCJcblx0XHRjb250ZW50Oltcblx0XHRcdHtcblx0XHRcdFx0XCJsYWJlbFwiOiBcIkFcIiBcblx0XHRcdFx0XCJkZXRhaWxcIiA6IFwibGV0dGVyXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwibGFiZWxcIiA6IFwiQlwiXG5cdFx0XHRcdFwiZGV0YWlsXCIgOiBcImxldHRlclwiXG5cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdGNlbGw6XCJkZWZhdWx0XCJcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHR9XG5cdHRhYmxlQ2VsbCA6IHtcblx0XHR0eXBlOlwidGFibGVDZWxsXCJcblx0XHRwcm9wZXJ0aWVzOiBcImRlZmF1bHRcIlxuXHRcdGhlaWdodDo1MFxuXHRcdHN3aXBlOmZhbHNlXG5cdFx0c3dpcGVBY3Rpb246XCJEZWxldGVcIlxuXHRcdHN3aXBlQ29sb3I6XCIjRkUzODI0XCJcblx0XHRzd2lwZVRleHRDb2xvcjpcIiNGRkZcIlxuXHR9XG5cblx0dGV4dDoge1xuXG5cdH1cbn1cblxuXG4jIENvbXBvbmVudCBDb25maWd1cmF0aW9uIEZ1bmN0aW9uc1xuc2V0UHJvcHMgPSAob2JqZWN0KSAtPlxuXHRrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KVxuXHRvYmplY3RbXCJwcm9wc1wiXSA9IGtleXNcblxuY29tcG9uZW50cyA9IFtkZWZhdWx0cy50ZXh0LCBkZWZhdWx0cy5hbGVydCwgZGVmYXVsdHMuc2hlZXQsIGRlZmF1bHRzLmZpZWxkLCBkZWZhdWx0cy50YWJsZSwgZGVmYXVsdHMudGFibGVDZWxsLCBkZWZhdWx0cy5rZXlib2FyZCwgZGVmYXVsdHMuYnV0dG9uLCBkZWZhdWx0cy5uYXZCYXIsIGRlZmF1bHRzLnRhYkJhciwgZGVmYXVsdHMudGFiLCBkZWZhdWx0cy5zdGF0dXNCYXIsIGRlZmF1bHRzLmxvY2tTY3JlZW5dXG5cbmZvciBjb21wIGluIGNvbXBvbmVudHNcblx0c2V0UHJvcHMoY29tcClcblxuZXhwb3J0cy5zZXR1cENvbXBvbmVudCA9IChhcnJheSwgZGVmYXVsdHMpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0b2JqID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHMucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdG9ialtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0b2JqW2ldID0gZGVmYXVsdHNbaV1cblx0cmV0dXJuIG9ialxuXG4jIEVycm9yc1xuZXJyb3IgPSAoY29udGV4dCwgY29kZSkgLT5cblx0IyMgRXJyb3IgY29kZSBmcm9tIHNhbWVQYXJlbnRcblx0aWYgY29kZSA9PSAxMFxuXHRcdHByaW50IFwiRXJyb3IgSW52YWxpZCBSZWxhdGlvbnNoaXAg4oCTIExheWVyIGlkOiN7Y29udGV4dC5pZH0gaGFzIGEgcmVsYXRpb25zaGlwIHdpdGggYW5vdGhlciBsYXllciBub3QgaW4gdGhlIHNhbWUgc3VwZXJMYXllci5cIlxuXG5cdCMjIEVycm9yIGNvZGVzIGZyb20gbGF5b3V0QWxpZ24gXG5cdGlmIGNvZGUgPT0gMjBcblx0XHRwcmludCBcIkVycm9yICN7Y29udGV4dH0gcmVxdWl1dGlscyBhIGxheWVyXCJcblx0aWYgY29kZSA9PSAyMVxuXHRcdHByaW50IFwiRXJyb3IgI3tjb250ZXh0fSBjYW5ub3QgcmVmZXIgdG8gaXRzZWxmXCJcblxuXHQjIyBFcnJvciBjb2RlcyBmb3IgYXBwbHlcblx0aWYgY29kZSA9PSA0MFxuXHRcdHByaW50IFwiRXJyb3IgI3tjb250ZXh0fSBpcyBub3QgYSB2YWxpZCB3ZWlnaHQuIFBsZWFzZSB1c2UgMTAwLCAyMDAsIDMwMC4uLiBvciBUaGluLCBMaWdodCwgUmVndWxhci4uLlwiXG5cblx0IyMgRXJyb3IgY29kZXMgZm9yIG5vdCBhIHZhbGlkIHRhYlxuXHRpZiBjb2RlID09IDUwXG5cdFx0cHJpbnQgXCJFcnJvciBMYXllciBpZDoje2NvbnRleHR9IGlzIG5vdCBhIHZhbGlkIFRhYiBvYmplY3QuIFBsZWFzZSBjcmVhdGUgYSBUYWIgdXNpbmcgbmV3IG1vZHVsZS5UYWIuXCJcblxuIyBTcGVjaWFsIENoYXJhY3RlcnNcbnNwZWNpYWxDaGFyID0gKGxheWVyKSAtPlxuXHR0ZXh0ID0gbGF5ZXJcblx0aWYgbGF5ZXIudHlwZSA9PSBcImJ1dHRvblwiXG5cdFx0dGV4dCA9IGxheWVyLmxhYmVsXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtmb250V2VpZ2h0OjYwMH1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1yXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJyZWRcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1yYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1yYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImJsdWVcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1sYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1sYiBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImxpZ2h0LWJsdWVcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1nXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWcgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJncmVlblwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLW9cIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItbyBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcIm9yYW5nZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXBcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItcCBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcIm9yYW5nZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXlcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCIteSBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcInllbGxvd1wifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLSNcIikgIT0gLTFcblx0XHRjaG9zZW5Db2xvciA9IHRleHQuaHRtbC5zbGljZSgxLCA4KVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwuc2xpY2UoOSwgdGV4dC5odG1sLmxlbmd0aClcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpjaG9zZW5Db2xvcn1dKVx0XG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLVwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi0gXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9XSlcblx0aWYgbGF5ZXIuYnV0dG9uVHlwZSA9PSBcInRleHRcIlxuXHRcdGxheWVyLndpZHRoID0gdGV4dC53aWR0aFxuXHRleHBvcnRzLmxheW91dCgpXG5cbiMgRGVjaWRlcyBpZiBpdCBzaG91bGQgYmUgd2hpdGUvYmxhY2sgdGV4dFxuZXhwb3J0cy5zZXRUZXh0Q29sb3IgPSAoY29sb3JPYmplY3QpIC0+XG5cdHJnYiA9IGNvbG9yT2JqZWN0LnRvUmdiU3RyaW5nKClcblx0cmdiID0gcmdiLnN1YnN0cmluZyg0LCByZ2IubGVuZ3RoLTEpXG5cdHJnYiA9IHJnYi5yZXBsYWNlKC8gL2csICcnKVxuXHRyZ2IgPSByZ2IucmVwbGFjZSgvIC9nLCAnJylcblx0cmdiID0gcmdiLnNwbGl0KCcsJylcblx0cmVkID0gcmdiWzBdXG5cdGdyZWVuID0gcmdiWzFdXG5cdGJsdWUgPSByZ2JbMl1cblx0Y29sb3IgPSBcIlwiXG5cdGlmIChyZWQqMC4yOTkgKyBncmVlbiowLjU4NyArIGJsdWUqMC4xMTQpID4gMTg2IFxuXHRcdGNvbG9yID0gXCIjMDAwXCJcblx0ZWxzZVxuXHRcdGNvbG9yID0gXCJGRkZcIlxuXHRyZXR1cm4gY29sb3JcblxuZXhwb3J0cy5zYW1lUGFyZW50ID0gKGxheWVyMSwgbGF5ZXIyKSAtPlxuXHRwYXJlbnRPbmUgPSBsYXllcjEuc3VwZXJMYXllclxuXHRwYXJlbnRUd28gPSBsYXllcjIuc3VwZXJMYXllclxuXHRpZiBwYXJlbnRPbmUgPT0gcGFyZW50VHdvXG5cdFx0cmV0dXJuIHRydWVcblx0ZWxzZSBcblx0XHRyZXR1cm4gZmFsc2VcblxuI1RleHQgTGF5ZXJzXG5leHBvcnRzLnN0eWxlcyA9IHt9XG5cbmV4cG9ydHMuYmdCbHVyID0gKGxheWVyKSAtPlxuXHRsYXllci5zdHlsZVtcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCJdID0gXCJibHVyKCN7dXRpbHMucHgoNSl9cHgpXCJcblx0cmV0dXJuIGxheWVyIFxuXG5saXN0ZW5Ub0tleXMgPSAoZmllbGQsIGtleWJvYXJkKSAtPlxuXG5cdGtleXB1dGlsc3MgPSAoa2V5KSAtPlxuXHRcdG9yaWdpbmFsQ29sb3IgPSBrZXkuYmFja2dyb3VuZENvbG9yXG5cdFx0c3dpdGNoIGtleS5uYW1lXG5cdFx0XHR3aGVuIFwic2hpZnRcIlxuXHRcdFx0XHRrZXkuaWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cdFx0XHRcdGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdHdoZW4gXCJkZWxldGVcIlxuXHRcdFx0XHRrZXkuaWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cdFx0XHRcdGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0a2V5Lmljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXHRcdFx0d2hlbiBcInNwYWNlXCJcblx0XHRcdFx0a2V5LmJhY2tncm91bmRDb2xvciA9IHV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAudmlzaWJsZSA9IHRydWVcdFxuXHRcdFx0XHRcdGJveEtleSA9IGtleS5uYW1lXG5cdFx0XHRcdFx0aWYgaXNTaGlmdFxuXHRcdFx0XHRcdFx0Ym94S2V5ID0gYm94S2V5LnRvVXBwZXJDYXNlKClcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC5ib3guaHRtbCA9IGJveEtleVxuXHRcdFx0XHRcdGtleWJvYXJkLmtleVBvcFVwLm1heFkgPSBrZXkubWF4WVxuXHRcdFx0XHRcdGtleWJvYXJkLmtleVBvcFVwLm1pZFggPSBrZXkubWlkWFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0a2V5LmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjp1dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSlcblx0XHRcdFx0XHRcdHRpbWU6LjJcblxuXHRpc0NvbW1hbmQgPSBmYWxzZVxuXHRhbGxTZWxlY3RlZCA9IGZhbHNlXG5cdGlzU2hpZnQgPSBmYWxzZVxuXHRjb2RlcyA9IHtcblx0XHQxMzpcIjxicj5cIlxuXHRcdDMyOlwiJm5ic3A7XCJcblx0XHQzMzpcIiFcIlxuXHRcdDM0OlwiXFxcIlwiXG5cdFx0MzU6XCIjXCJcblx0XHQzNjpcIiRcIlxuXHRcdDM3OlwiJVwiXG5cdFx0Mzg6XCImXCJcblx0XHQzOTpcIlxcJ1wiXG5cdFx0NDA6XCIoXCJcblx0XHQ0MTpcIilcIlxuXHRcdDQyOlwiKlwiXG5cdFx0NDM6XCIrXCJcblx0XHQ0NDpcIixcIlxuXHRcdDQ1OlwiLVwiXG5cdFx0NDc6XCIvXCJcblx0XHQ0NjpcIi5cIlxuXHRcdDQ4OlwiMFwiXG5cdFx0NDk6XCIxXCJcblx0XHQ1MDpcIjJcIlxuXHRcdDUxOlwiM1wiXG5cdFx0NTI6XCI0XCJcblx0XHQ1MzpcIjVcIlxuXHRcdDU0OlwiNlwiXG5cdFx0NTU6XCI3XCJcblx0XHQ1NjpcIjhcIlxuXHRcdDU3OlwiOVwiXG5cdFx0NTg6XCI6XCJcblx0XHQ1OTpcIjtcIlxuXHRcdDYwOlwiPFwiXG5cdFx0NjE6XCI9XCJcblx0XHQ2MjpcIj5cIlxuXHRcdDYzOlwiP1wiXG5cdFx0NjQ6XCJAXCJcblx0XHQ2NTpcIkFcIlxuXHRcdDY2OlwiQlwiXG5cdFx0Njc6XCJDXCJcblx0XHQ2ODpcIkRcIlxuXHRcdDY5OlwiRVwiXG5cdFx0NzA6XCJGXCJcblx0XHQ3MTpcIkdcIlxuXHRcdDcyOlwiSFwiXG5cdFx0NzM6XCJJXCJcblx0XHQ3NDpcIkpcIlxuXHRcdDc1OlwiS1wiXG5cdFx0NzY6XCJMXCJcblx0XHQ3NzpcIk1cIlxuXHRcdDc4OlwiTlwiXG5cdFx0Nzk6XCJPXCJcblx0XHQ4MDpcIlBcIlxuXHRcdDgxOlwiUVwiXG5cdFx0ODI6XCJSXCJcblx0XHQ4MzpcIlNcIlxuXHRcdDg0OlwiVFwiXG5cdFx0ODU6XCJVXCJcblx0XHQ4NjpcIlZcIlxuXHRcdDg3OlwiV1wiXG5cdFx0ODg6XCJYXCJcblx0XHQ4OTpcIllcIlxuXHRcdDkwOlwiWlwiXG5cdFx0OTE6XCJbXCJcblx0XHQ5MjpcIlxcXFxcIlxuXHRcdDkzOlwiXVwiXG5cdFx0OTQ6XCJeXCJcblx0XHQ5NTpcIl9cIlxuXHRcdDk2OlwiYFwiXG5cdFx0OTc6XCJhXCJcblx0XHQ5ODpcImJcIlxuXHRcdDk5OlwiY1wiXG5cdFx0MTAwOlwiZFwiXG5cdFx0MTAxOlwiZVwiXG5cdFx0MTAyOlwiZlwiXG5cdFx0MTAzOlwiZ1wiXG5cdFx0MTA0OlwiaFwiXG5cdFx0MTA1OlwiaVwiXG5cdFx0MTA2OlwialwiXG5cdFx0MTA3Olwia1wiXG5cdFx0MTA4OlwibFwiXG5cdFx0MTA5OlwibVwiXG5cdFx0MTEwOlwiblwiXG5cdFx0MTExOlwib1wiXG5cdFx0MTEyOlwicFwiXG5cdFx0MTEzOlwicVwiXG5cdFx0MTE0OlwiclwiXG5cdFx0MTE1Olwic1wiXG5cdFx0MTE2OlwidFwiXG5cdFx0MTE3OlwidVwiXG5cdFx0MTE4OlwidlwiXG5cdFx0MTE5Olwid1wiXG5cdFx0MTIwOlwieFwiXG5cdFx0MTIxOlwieVwiXG5cdFx0MTIyOlwielwiXG5cdFx0MTIzOlwie1wiXG5cdFx0MTI0OlwifFwiXG5cdFx0MTI1OlwifVwiXG5cdFx0MTI2OlwiflwiXG5cdH1cblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdrZXlkb3duJywgKGUpIC0+XG5cdFx0aWYgZmllbGQuYWN0aXZlXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMjdcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGtleWJvYXJkLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOih5OmV4cG9ydHMuZGV2aWNlLmhlaWdodClcblx0XHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0XHRmaWVsZC5jbGlja1pvbmUuZGVzdHJveSgpXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMTZcblx0XHRcdFx0aXNTaGlmdCA9IHRydWVcblx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRrZXlwdXRpbHNzKGtleWJvYXJkLmtleXMuc2hpZnQpXG5cdFx0XHRcdFx0Zm9yIGsgaW4ga2V5Ym9hcmQua2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrLnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSBcInVwcGVyY2FzZVwiXG5cdFx0XHRpZiBhbGxTZWxlY3RlZCA9PSB0cnVlXG5cdFx0XHRcdGlmIGUua2V5Q29kZSA9PSAzNyB8fCBlLmtleUNvZGUgPT0gMzlcblx0XHRcdFx0XHRhbGxTZWxlY3RlZCA9IGZhbHNlXG5cdFx0XHRcdFx0ZmllbGQudGV4dC5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRcdGlmIGUua2V5Q29kZSA9PSA5MVxuXHRcdFx0XHRpc0NvbW1hbmQgPSB0cnVlXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMTNcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGtleWJvYXJkLmtleXMucmV0dXJuLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gOFxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRrZXlwdXRpbHNzKGtleWJvYXJkLmtleXMuZGVsZXRlKVxuXHRcdFx0XHRpZiBhbGxTZWxlY3RlZCA9PSB0cnVlXG5cdFx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6XCJcIl0pXG5cdFx0XHRcdFx0ZmllbGQudGV4dC5iYWNrZ3JvdW5kQ29sb3IgPVwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0XHRcdFx0aW5pdGlhbExlbmd0aCA9IGZpZWxkLnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdFx0bmV3VGV4dCA9IGZpZWxkLnRleHQuaHRtbC5zbGljZSgwLCAtMSlcblx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRcdGVuZExlbmd0aCA9IGZpZWxkLnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdFx0aWYgaW5pdGlhbExlbmd0aCA9PSBlbmRMZW5ndGhcblx0XHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sLnNsaWNlKDAsIC02KVxuXHRcdFx0XHRcdGV4cG9ydHMudXBkYXRlKGZpZWxkLnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0XHRpZiBmaWVsZC50ZXh0Lmh0bWwgPT0gXCJcIlxuXHRcdFx0XHRcdGZpZWxkLnBsYWNlaG9sZGVyLnZpc2libGUgPSB0cnVlXG5cblx0XHRcdFx0IyBHZXQgcmlkIG9mICYgbmJzcDtcblxuXHRcdFx0XHRmaWVsZC52YWx1ZSA9IGV4cG9ydHMuY2xlYW4obmV3VGV4dClcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdrZXl1cCcsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDEzICYmIGtleWJvYXJkXG5cdFx0XHRcdGtleWJvYXJkLmtleXMucmV0dXJuLmJhY2tncm91bmRDb2xvciA9IHV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMzIgJiYga2V5Ym9hcmRcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5zcGFjZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIldoaXRlXCJcblx0XHRcdGlmIGUua2V5Q29kZSA9PSA4ICYmIGtleWJvYXJkXG5cdFx0XHRcdGtleWJvYXJkLmtleXMuZGVsZXRlLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6dXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIikpXG5cdFx0XHRcdFx0dGltZTouMVxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLmRlbGV0ZS5pY29uLnN0YXRlcy5zd2l0Y2goXCJvZmZcIilcblx0XHRcdGlmIGUua2V5Q29kZSA9PSA5MVxuXHRcdFx0XHRpc0NvbW1hbmQgPSBmYWxzZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDE2XG5cdFx0XHRcdGlzU2hpZnQgPSBmYWxzZVxuXHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdGZvciBrIGluIGtleWJvYXJkLmtleXNBcnJheVxuXHRcdFx0XHRcdFx0ay5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gXCJsb3dlcmNhc2VcIlxuXHRcdFx0XHRcdGtleWJvYXJkLmtleXMuc2hpZnQuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdFx0dGltZTouMlxuXHRcdFx0XHRcdGtleWJvYXJkLmtleXMuc2hpZnQuaWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRpZiBlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwXG5cdFx0XHRcdGlmIGtleWJvYXJkICYmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRrID0ga2V5Ym9hcmQua2V5c1tjb2Rlc1tlLmtleUNvZGVdLnRvTG93ZXJDYXNlKCldXG5cdFx0XHRcdFx0ay5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiKVxuXHRcdFx0XHRcdFx0dGltZTouMlxuXG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5cHV0aWxzcycsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZSBcblx0XHRcdGNoYXIgPSBjb2Rlc1tlLmtleUNvZGVdXG5cdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRrZXkgPSBrZXlib2FyZC5rZXlzW2NoYXJdXG5cdFx0XHRpZiBpc0NvbW1hbmQgPT0gdHJ1ZVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPT0gOTdcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMTgsIDI1NSwgLjIpXCJcblx0XHRcdFx0XHRhbGxTZWxlY3RlZCA9IHRydWVcblxuXHRcdFx0aWYgaXNDb21tYW5kID09IGZhbHNlXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwXG5cdFx0XHRcdFx0Y2hhcjIgPSBjaGFyLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdFx0a2V5ID0ga2V5Ym9hcmQua2V5c1tjaGFyMl1cblx0XHRcdFx0XHRcdGtleXB1dGlsc3Moa2V5KVxuXG5cdFx0XHRcdGlmIGUua2V5Q29kZSA+PSA5NyAmJiBlLmtleUNvZGUgPD0gMTIyIHx8IGUua2V5Q29kZSA9PSAzMlx0XHRcblx0XHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdFx0a2V5cHV0aWxzcyhrZXkpXG5cblx0XHRcdFx0aWYgZS5rZXlDb2RlID4gMzFcblx0XHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sICsgY2hhclxuXHRcdFx0XHRcdGV4cG9ydHMudXBkYXRlKGZpZWxkLnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0XHRcdGZpZWxkLnZhbHVlID0gZXhwb3J0cy5jbGVhbihuZXdUZXh0KVxuXG5leHBvcnRzLnVwZGF0ZSA9IChsYXllciwgYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0aWYgbGF5ZXIudHlwZSA9PSBcInRleHRcIlxuXHRcdGZvciBjaGFuZ2UgaW4gYXJyYXlcblx0XHRcdGtleSA9IE9iamVjdC5rZXlzKGNoYW5nZSlbMF1cblx0XHRcdHZhbHVlID0gY2hhbmdlW2tleV1cblx0XHRcdGlmIGtleSA9PSBcInRleHRcIlxuXHRcdFx0XHRsYXllci5odG1sID0gdmFsdWVcblx0XHRcdGlmIGtleSA9PSBcImZvbnRXZWlnaHRcIlxuXHRcdFx0XHRsYXllci5zdHlsZVtrZXldID0gdmFsdWVcblx0XHRcdGlmIGtleSA9PSBcImNvbG9yXCJcblx0XHRcdFx0bGF5ZXIuY29sb3IgPSB1dGlscy5jb2xvcih2YWx1ZSlcblxuXHRcdHRleHRGcmFtZSA9IHRleHRBdXRvU2l6ZShsYXllcilcblx0XHRsYXllci53aWR0aCA9IHRleHRGcmFtZS53aWR0aFxuXHRcdGxheWVyLmhlaWdodCA9IHRleHRGcmFtZS5oZWlnaHRcblxuXG5cdGV4cG9ydHMubGF5b3V0KClcblxuZXhwb3J0cy50aW1lRGVsZWdhdGUgPSAobGF5ZXIsIGNsb2NrVHlwZSkgLT5cblx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRVdGlscy5kZWxheSA2MCAtIEB0aW1lLnNlY3MsIC0+XG5cdFx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRcdGV4cG9ydHMudXBkYXRlKGxheWVyLCBbdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIGNsb2NrVHlwZSldKVxuXHRcdFV0aWxzLmludGVydmFsIDYwLCAtPlxuXHRcdFx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRcdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG4gXG5leHBvcnRzLnRpbWVGb3JtYXR0ZXIgPSAodGltZU9iaiwgY2xvY2tUeXBlKSAtPlxuXHRpZiBjbG9ja1R5cGUgPT0gZmFsc2UgXG5cdFx0aWYgdGltZU9iai5ob3VycyA+IDEyXG5cdFx0XHR0aW1lT2JqLmhvdXJzID0gdGltZU9iai5ob3VycyAtIDEyXG5cdFx0aWYgdGltZU9iai5ob3VycyA9PSAwIHRoZW4gdGltZU9iai5ob3VycyA9IDEyXG5cdGlmIHRpbWVPYmoubWlucyA8IDEwXG5cdFx0dGltZU9iai5taW5zID0gXCIwXCIgKyB0aW1lT2JqLm1pbnNcblx0cmV0dXJuIHRpbWVPYmouaG91cnMgKyBcIjpcIiArIHRpbWVPYmoubWluc1xuXG4jIyBDb21wb25lbnRzIFxuZXhwb3J0cy5BbGVydCA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImFsZXJ0XCIsIGFycmF5KVxuXHRhbGVydCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYWxlcnRcIlxuXHRhbGVydC5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdG92ZXJsYXkgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuMylcIiwgc3VwZXJMYXllcjphbGVydCwgbmFtZTpcIm92ZXJsYXlcIlxuXHRvdmVybGF5LmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRtb2RhbCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBzdXBlckxheWVyOmFsZXJ0LCBib3JkZXJSYWRpdXM6dXRpbHMucHgoMTApLCBuYW1lOlwibW9kYWxcIiwgeDo5MiwgeTo1Mzdcblx0bW9kYWwuY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiY2VudGVyXCJcblx0XHR3aWR0aDoyODBcblx0XHRoZWlnaHQ6NDAwXG5cdHRpdGxlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0VGl0bGVcIiwgc3VwZXJMYXllcjptb2RhbCwgdGV4dDpzZXR1cC50aXRsZSwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsICBuYW1lOlwidGl0bGVcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6MjBcblx0dGl0bGUuY29uc3RyYWludHMgPSBcblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHdpZHRoOjIyMFxuXHRcdHRvcDoyMFxuXHRtZXNzYWdlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0TWVzc2FnZVwiLCB0ZXh0OnNldHVwLm1lc3NhZ2UsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOm1vZGFsLCB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgbGluZUhlaWdodDoxNiwgd2lkdGg6MjQwLCBuYW1lOlwibWVzc2FnZVwiXG5cdG1lc3NhZ2UuY29uc3RyYWludHMgPVxuXHRcdHRvcDogW3RpdGxlLCAxMF1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHdpZHRoOiAyMjBcblx0ZGl2aWRlciA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCIsIG5hbWU6XCJob3Jpem9udGFsIGRpdmlkZXJcIlxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDoxXG5cdFx0Ym90dG9tOjQ0XG5cdGV4cG9ydHMubGF5b3V0KClcblx0XG5cdCNUaXRsZSArIE1lc3NhZ2UgKyAxIHNldCBvZiBhY3Rpb25zXG5cdG1vZGFsLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdID0gMjAgKyB1dGlscy5wdCh0aXRsZS5oZWlnaHQpICsgMTAgKyB1dGlscy5wdChtZXNzYWdlLmhlaWdodCkgKyAyNCArIDQ0XG5cblx0YWN0aW9ucyA9IFtdXG5cdHN3aXRjaCBzZXR1cC5hY3Rpb25zLmxlbmd0aFxuXHRcdHdoZW4gMVxuXHRcdFx0YWN0TGFiZWwgPSBleHBvcnRzLmNhcGl0YWxpemUoc2V0dXAuYWN0aW9uc1swXSlcblx0XHRcdGFjdGlvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLmFjdGlvbnNbMF0sIGJvcmRlclJhZGl1czp1dGlscy5weCgxMClcblx0XHRcdGFjdGlvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdGFjdGlvbi5sYWJlbCA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCBjb2xvcjp1dGlscy5jb2xvcihcImJsdWVcIiksIHN1cGVyTGF5ZXI6YWN0aW9uLCB0ZXh0OmFjdExhYmVsLCBuYW1lOlwibGFiZWxcIlxuXHRcdFx0YWN0aW9uLmxhYmVsLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdGJvdHRvbToxNlxuXHRcdFx0YWN0aW9ucy5wdXNoIGFjdGlvblxuXHRcdHdoZW4gMlxuXHRcdFx0YWN0TGFiZWwgPSBleHBvcnRzLmNhcGl0YWxpemUoc2V0dXAuYWN0aW9uc1swXSlcblx0XHRcdGFjdGlvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBuYW1lOnNldHVwLmFjdGlvbnNbMF0sIGJvcmRlclJhZGl1czp1dGlscy5weCgxMCksIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdGFjdGlvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6dXRpbHMucHQobW9kYWwud2lkdGgvMilcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgY29sb3I6dXRpbHMuY29sb3IoXCJibHVlXCIpLCBzdXBlckxheWVyOmFjdGlvbiwgdGV4dDphY3RMYWJlbCwgbmFtZTpcImxhYmVsXCJcblx0XHRcdGFjdGlvbi5sYWJlbC5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRib3R0b206MTZcblx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb25cdFx0XG5cblx0XHRcdHZlcnREaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIiwgbmFtZTpcInZlcnRpY2FsIGRpdmlkZXJcIlxuXHRcdFx0dmVydERpdmlkZXIuY29uc3RyYWludHMgPSBcblx0XHRcdFx0d2lkdGg6MVxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRcdFx0YWN0TGFiZWwyID0gZXhwb3J0cy5jYXBpdGFsaXplKHNldHVwLmFjdGlvbnNbMV0pXG5cdFx0XHRhY3Rpb24yID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIG5hbWU6c2V0dXAuYWN0aW9uc1sxXSwgYm9yZGVyUmFkaXVzOnV0aWxzLnB4KDEwKSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0YWN0aW9uMi5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRsZWFkaW5nOnV0aWxzLnB0KG1vZGFsLndpZHRoLzIpXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRhY3Rpb24yLmxhYmVsID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIGNvbG9yOnV0aWxzLmNvbG9yKFwiYmx1ZVwiKSwgc3VwZXJMYXllcjphY3Rpb24yLCB0ZXh0OmFjdExhYmVsMiwgbmFtZTpcImxhYmVsXCJcblx0XHRcdGFjdGlvbjIubGFiZWwuY29uc3RyYWludHMgPSBcblx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0Ym90dG9tOjE2XG5cdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uMlxuXHRcdGVsc2Vcblx0XHRcdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblx0XHRcdFx0YWN0TGFiZWwgPSBleHBvcnRzLmNhcGl0YWxpemUoYWN0KVxuXHRcdFx0XHRhY3Rpb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgbmFtZTphY3QsIGJvcmRlclJhZGl1czp1dGlscy5weCgxMCksIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdFx0YWN0aW9uLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRcdGJvdHRvbTowICsgKChzZXR1cC5hY3Rpb25zLmxlbmd0aCAtIGluZGV4IC0gMSkgKiA0NClcblx0XHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdFx0YWN0aW9uRGl2aWRlciA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCIsIG5hbWU6XCJob3Jpem9udGFsIGRpdmlkZXJcIlxuXHRcdFx0XHRhY3Rpb25EaXZpZGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRcdGhlaWdodDoxXG5cdFx0XHRcdFx0Ym90dG9tOjAgKyAoKHNldHVwLmFjdGlvbnMubGVuZ3RoIC0gaW5kZXgpICogNDQpXG5cdFx0XHRcdGFjdGlvbi5sYWJlbCA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCBjb2xvcjp1dGlscy5jb2xvcihcImJsdWVcIiksIHN1cGVyTGF5ZXI6YWN0aW9uLCB0ZXh0OmFjdExhYmVsLCBuYW1lOlwibGFiZWxcIlxuXHRcdFx0XHRhY3Rpb24ubGFiZWwuY29uc3RyYWludHMgPSBcblx0XHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdGJvdHRvbToxNFxuXHRcdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uXHRcdFxuXHRcdFx0XHRtb2RhbC5jb25zdHJhaW50c1tcImhlaWdodFwiXSA9IG1vZGFsLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdICsgNDIgLSAxMlxuXG5cdGFsZXJ0LmFjdGlvbnMgPSB7fVx0XG5cdGZvciBhY3QsaW5kZXggaW4gYWN0aW9uc1xuXG5cdFx0I0hhbmRsZSBzcGVjaWFsIGNoYXJhY3RlcnNcblx0XHRhY3QudHlwZSA9IFwiYnV0dG9uXCJcblx0XHRzcGVjaWFsQ2hhcihhY3QpXG5cdFx0XG5cdFx0aWYgc2V0dXAuYWN0aW9uc1tpbmRleF0uaW5kZXhPZihcIi1yXCIpID09IDBcblx0XHRcdGFjdC5vcmlnQ29sb3IgPSB1dGlscy5jb2xvcihcInJlZFwiKVxuXHRcdGVsc2Vcblx0XHRcdGFjdC5vcmlnQ29sb3IgPSB1dGlscy5jb2xvcihcImJsdWVcIilcblxuXHRcdCNBZGQgVG91Y2ggRXZlbnRzXG5cdFx0YWN0Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0QC5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6YWN0LmJhY2tncm91bmRDb2xvci5kYXJrZW4oNSkpXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRALmxhYmVsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooY29sb3I6QC5vcmlnQ29sb3IubGlnaHRlbigxMCkpXG5cdFx0XHRcdHRpbWU6LjI1XG5cblx0XHRhY3Qub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIpXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRALmxhYmVsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooY29sb3I6QC5vcmlnQ29sb3IpXG5cdFx0XHRcdHRpbWU6LjI1XG5cblx0XHQjIEV4cG9ydCBhY3Rpb25zXG5cdFx0YWxlcnQuYWN0aW9uc1thY3QubmFtZV0gPSBhY3RcblxuXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHQjIEV4cG9ydCBhbGVydFxuXHRhbGVydC5vdmVybGF5ID0gb3ZlcmxheVxuXHRhbGVydC5tb2RhbCA9IG1vZGFsXG5cdGFsZXJ0LnRpdGxlID0gdGl0bGVcblx0YWxlcnQubWVzc2FnZSA9IG1lc3NhZ2VcblxuXHRyZXR1cm4gYWxlcnRcblxuXG5leHBvcnRzLkJ1dHRvbiA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImJ1dHRvblwiLCBhcnJheSlcblx0YnV0dG9uID0gbmV3IExheWVyIG5hbWU6c2V0dXAubmFtZVxuXHRidXR0b24uYnV0dG9uVHlwZSA9IHNldHVwLmJ1dHRvblR5cGVcblx0YnV0dG9uLnR5cGUgPSBzZXR1cC50eXBlXG5cdGNvbG9yID0gXCJcIlxuXHRpZiBzZXR1cC5jb25zdHJhaW50c1xuXHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0c2V0dXAuY29uc3RyYWludHNcblx0aWYgc2V0dXAuc3VwZXJMYXllciBcblx0XHRzZXR1cC5zdXBlckxheWVyLmFkZFN1YkxheWVyKGJ1dHRvbilcblx0c3dpdGNoIHNldHVwLmJ1dHRvblR5cGVcblx0XHR3aGVuIFwiYmlnXCJcblx0XHRcdEBmb250U2l6ZSA9IDIwXG5cdFx0XHRAdG9wID0gMThcblx0XHRcdEBmb250V2VpZ2h0ID0gXCJtZWRpdW1cIlxuXHRcdFx0aWYgYnV0dG9uLmNvbnN0cmFpbnRzID09IHVuZGVmaW5lZFxuXHRcdFx0XHRidXR0b24uY29uc3RyYWludHMgPSB7fVxuXHRcdFx0aWYgYnV0dG9uLmNvbnN0cmFpbnRzLmxlYWRpbmcgPT0gdW5kZWZpbmVkXG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cy5sZWFkaW5nID0gMTBcblx0XHRcdGlmIGJ1dHRvbi5jb25zdHJhaW50cy50cmFpbGluZyA9PSB1bmRlZmluZWRcblx0XHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzLnRyYWlsaW5nID0gMTBcblx0XHRcdGlmIGJ1dHRvbi5jb25zdHJhaW50cy5oZWlnaHQgPT0gdW5kZWZpbmVkXG5cdFx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cy5oZWlnaHQgPSA1N1xuXHRcdFx0YnV0dG9uLmJvcmRlclJhZGl1cyA9IHV0aWxzLnB4KDEyLjUpXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG5cdFx0XHRzd2l0Y2ggc2V0dXAuc3R5bGVcblx0XHRcdFx0d2hlbiBcImxpZ2h0XCJcblx0XHRcdFx0XHRjb2xvciA9IFwiIzAwN0FGRlwiXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1ciBcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuOSlcIlxuXHRcdFx0XHRcdFx0ZXhwb3J0cy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cdFx0XHRcdHdoZW4gXCJkYXJrXCJcblx0XHRcdFx0XHRjb2xvciA9IFwiI0ZGRlwiXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDQzLCA0MywgNDMsIC45KVwiXG5cdFx0XHRcdFx0XHRleHBvcnRzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCIjMjgyODI4XCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXIgXG5cdFx0XHRcdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3Ioc2V0dXAuYmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRcdFx0cmdiU3RyaW5nID0gYmFja2dyb3VuZENvbG9yLnRvUmdiU3RyaW5nKClcblx0XHRcdFx0XHRcdHJnYmFTdHJpbmcgPSByZ2JTdHJpbmcucmVwbGFjZShcIilcIiwgXCIsIC45KVwiKVxuXHRcdFx0XHRcdFx0cmdiYVN0cmluZyAgPSByZ2JhU3RyaW5nLnJlcGxhY2UoXCJyZ2JcIiwgXCJyZ2JhXCIpXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSByZ2JhU3RyaW5nXG5cdFx0XHRcdFx0XHRleHBvcnRzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblxuXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yXG5cblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0bmV3Q29sb3IgPSBcIlwiXG5cdFx0XHRcdGlmIHNldHVwLnN0eWxlID09IFwiZGFya1wiXG5cdFx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uYmFja2dyb3VuZENvbG9yLmxpZ2h0ZW4oMTApXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IuZGFya2VuKDEwKVxuXHRcdFx0XHRidXR0b24uYW5pbWF0ZSBcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6bmV3Q29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6YmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRcdHdoZW4gXCJzbWFsbFwiXG5cdFx0XHRAZm9udFNpemUgPSAxNlxuXHRcdFx0QHRvcCA9IDRcblx0XHRcdGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSB1dGlscy5weCgyLjUpXG5cdFx0XHRzd2l0Y2ggc2V0dXAuc3R5bGVcblx0XHRcdFx0d2hlbiBcImxpZ2h0XCJcblx0XHRcdFx0XHRjb2xvciA9IFwiIzAwN0FGRlwiXG5cdFx0XHRcdFx0YnV0dG9uLmJvcmRlckNvbG9yID0gXCIjMDA3QUZGXCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRidXR0b24uYm9yZGVyQ29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0YnV0dG9uLmJvcmRlcldpZHRoID0gdXRpbHMucHgoMSlcblxuXG5cdFx0ZWxzZVxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0QGZvbnRTaXplID0gc2V0dXAuZm9udFNpemVcblx0XHRcdEBmb250V2VpZ2h0ID0gc2V0dXAuZm9udFdlaWdodFxuXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdG5ld0NvbG9yID0gYnV0dG9uLnN1YkxheWVyc1swXS5jb2xvci5saWdodGVuKDMwKVxuXHRcdFx0XHRidXR0b24uc3ViTGF5ZXJzWzBdLmFuaW1hdGUgXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6bmV3Q29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLnN1YkxheWVyc1swXS5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6c2V0dXAuY29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHR0ZXh0TGF5ZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHRleHQ6c2V0dXAudGV4dCwgY29sb3I6Y29sb3IsIHN1cGVyTGF5ZXI6YnV0dG9uLCBmb250U2l6ZTpAZm9udFNpemUsIGZvbnRXZWlnaHQ6QGZvbnRXZWlnaHRcblx0dGV4dExheWVyLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cdHN3aXRjaCBzZXR1cC5idXR0b25UeXBlIFxuXHRcdHdoZW4gXCJzbWFsbFwiXG5cdFx0XHRidXR0b24ucHJvcHMgPSAod2lkdGg6dGV4dExheWVyLndpZHRoICsgdXRpbHMucHgoNjApLCBoZWlnaHQ6IHRleHRMYXllci5oZWlnaHQgKyB1dGlscy5weCgxMCkpXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcdFxuXHRcdFx0XHR0ZXh0TGF5ZXIuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOlwiI0ZGRlwiKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIilcblx0XHRcdFx0XHR0aW1lOi41XHRcblx0XHRcdFx0dGV4dExheWVyLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpjb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0ZWxzZSBcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDp0ZXh0TGF5ZXIud2lkdGgsIGhlaWdodDp0ZXh0TGF5ZXIuaGVpZ2h0KVxuXHRleHBvcnRzLmxheW91dCgpXG5cdGJ1dHRvbi5sYWJlbCA9IHRleHRMYXllclxuXHRyZXR1cm4gYnV0dG9uXG5cbmV4cG9ydHMuRmllbGQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJmaWVsZFwiLCBhcnJheSlcblx0ZmllbGQgPSBuZXcgTGF5ZXIgYm9yZGVyUmFkaXVzOnV0aWxzLnB4KHNldHVwLmJvcmRlclJhZGl1cyksIGJhY2tncm91bmRDb2xvcjpzZXR1cC5iYWNrZ3JvdW5kQ29sb3IsIHdpZHRoOnV0aWxzLnB4KHNldHVwLndpZHRoKSwgaGVpZ2h0OnV0aWxzLnB4KHNldHVwLmhlaWdodClcblx0aWYgc2V0dXAuY29uc3RyYWludHNcblx0XHRmaWVsZC5jb25zdHJhaW50cyA9IFxuXHRcdFx0c2V0dXAuY29uc3RyYWludHNcblx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0dGV4dCA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJmaWVsZFRleHRcIiwgc3VwZXJMYXllcjpmaWVsZCwgdGV4dDpzZXR1cC50ZXh0LCBmb250U2l6ZTpzZXR1cC5mb250U2l6ZSwgZm9udFdlaWdodDpzZXR1cC5mb250V2VpZ2h0LCBjb2xvcjpzZXR1cC5jb2xvclxuXHRpZiBzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0XHR0ZXh0LmNvbnN0cmFpbnRzID1cblx0XHRcdHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRmaWVsZC50ZXh0ID0gdGV4dFxuXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXJcblx0XHRzZXR1cC5zdXBlckxheWVyLmFkZFN1YkxheWVyKGZpZWxkKVxuXG5cblxuXG5cdCMjSGFuZGxlIGtleXB1dGlsc3Ncblx0dGV4dC5vbiBcImNoYW5nZTpodG1sXCIsIC0+XG5cdFx0aWYgdGV4dC5odG1sID09IFwiXCJcblx0XHRcdGZpZWxkLmN1cnNvci5jb25zdHJhaW50cyA9IHthbGlnbjpcInZlcnRpY2FsXCIsIGxlYWRpbmc6OH1cblx0XHRlbHNlXG5cdFx0XHRmaWVsZC5jdXJzb3IuY29uc3RyYWludHMgPSB7YWxpZ246XCJ2ZXJ0aWNhbFwiLCB0cmFpbGluZ0VkZ2VzOnRleHR9XG5cdFx0aWYgZmllbGQucGxhY2Vob2xkZXJcblx0XHRcdGZpZWxkLnBsYWNlaG9sZGVyLnZpc2libGUgPSBmYWxzZVxuXG5cdGlmIHNldHVwLnRleHQgPT0gXCJcIiB8fCBzZXR1cC50ZXh0ID09IHVuZGVmaW5lZFxuXHRcdHBsYWNlaG9sZGVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImZpZWxkUGxhY2Vob2xkZXJcIiwgc3VwZXJMYXllcjpmaWVsZCwgdGV4dDpzZXR1cC5wbGFjZWhvbGRlclRleHQsIGZvbnRTaXplOnNldHVwLmZvbnRTaXplLCBmb250V2VpZ2h0OnNldHVwLmZvbnRXZWlnaHQsIGNvbG9yOnNldHVwLnBsYWNlaG9sZGVyQ29sb3Jcblx0XHRpZiBzZXR1cC50ZXh0Q29uc3RyYWludHMgXG5cdFx0XHRwbGFjZWhvbGRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRcdGZpZWxkLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcblxuXHRmaWVsZC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0ZmllbGQuYWN0aXZlID0gdHJ1ZVxuXHRcdHRleHQudmlzaWJsZSA9IHRydWVcblx0XHRjbGlja1pvbmUgPSBuZXcgTGF5ZXIgbmFtZTpcImZpZWxkQWN0aXZlXCIsIG9wYWNpdHk6MFxuXHRcdGlmIHNldHVwLmlucHV0XG5cdFx0XHRrZXlib2FyZCA9IG5ldyBleHBvcnRzLktleWJvYXJkIGFuaW1hdGVkOnRydWUsIG91dHB1dDpmaWVsZCwgcmV0dXJuVGV4dDpzZXR1cC5yZXR1cm5UZXh0LCByZXR1cm5Db2xvcjpzZXR1cC5yZXR1cm5Db2xvclxuXHRcdFx0ZmllbGQua2V5Ym9hcmQgPSBrZXlib2FyZFxuXHRcdFx0Y2xpY2tab25lLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdHRvcDowXG5cdFx0XHRcdGJvdHRvbTprZXlib2FyZC5zcGVjcy5oZWlnaHRcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRlbHNlXG5cdFx0XHRjbGlja1pvbmUuY29uc3RyYWludHMgPVxuXHRcdFx0XHR0b3A6MFxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXG5cdFx0Y2xpY2tab25lLm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGhhbmRsZXIpIC0+XG5cdFx0XHQjICMgbGlzdGVuIGZvciBzb21ldGhpbmcgZWxzZVxuXHRcdFx0IyBpZiBoYW5kbGVyLm9mZnNldFggPCBmaWVsZC54IHx8IGhhbmRsZXIub2Zmc2V0WCA+IGZpZWxkLm1heFggfHwgaGFuZGxlci5vZmZzZXRZIDwgZmllbGQueSB8fCBoYW5kbGVyLm9mZnNldFkgPiBmaWVsZC5tYXhZXG5cdFx0XHQjIFx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0XHRcdGZpZWxkLmtleWJvYXJkLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooeTpleHBvcnRzLmRldmljZS5oZWlnaHQpXG5cdFx0XHRcdHRpbWU6LjRcblx0XHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cdFx0XHRVdGlscy5kZWxheSAuNSwgLT5cblx0XHRcdFx0ZmllbGQua2V5Ym9hcmQuZGVzdHJveSgpXG5cdFx0XHRcdGZpZWxkLmFjdGl2ZSA9IGZhbHNlXG5cdFx0XHRcdGNsaWNrWm9uZS5kZXN0cm95KClcblx0XHRmaWVsZC5jbGlja1pvbmUgPSBjbGlja1pvbmVcblxuXHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRmaWVsZC5rZXlib2FyZC5rZXlzLmRpc21pc3Mub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRmaWVsZC5rZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooeTpleHBvcnRzLmRldmljZS5oZWlnaHQpXG5cdFx0XHRcdFx0dGltZTouNFxuXHRcdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRVdGlscy5kZWxheSAuNSwgLT5cblx0XHRcdFx0XHRmaWVsZC5rZXlib2FyZC5kZXN0cm95KClcblx0XHRcdFx0XHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0XHRcdGNsaWNrWm9uZS5kZXN0cm95KClcbiBcblxuXHRcdCMjIERlZmF1bHQgQ3Vyc29yXG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHNldHVwLmN1cnNvcilcblx0XHRpZiBrZXlzLmxlbmd0aCA8IDFcblx0XHRcdHNldHVwLmN1cnNvci5jb25zdHJhaW50cyA9IHthbGlnbjpcInZlcnRpY2FsXCIsIGxlYWRpbmc6OH1cblx0XHRcdHNldHVwLmN1cnNvci53aWR0aCA9IDJcblx0XHRcdHNldHVwLmN1cnNvci5oZWlnaHQgPSAyMFxuXG5cdFx0aWYgZmllbGQuY3Vyc29yID09IHVuZGVmaW5lZFxuXHRcdFx0bGlzdGVuVG9LZXlzKGZpZWxkLCBrZXlib2FyZClcblx0XHRcdGN1cnNvciA9IG5ldyBMYXllciB3aWR0aDp1dGlscy5weChzZXR1cC5jdXJzb3Iud2lkdGgpLCBoZWlnaHQ6dXRpbHMucHgoc2V0dXAuY3Vyc29yLmhlaWdodCksIHN1cGVyTGF5ZXI6ZmllbGQsIG5hbWU6XCJjdXJzb3JcIiwgYmFja2dyb3VuZENvbG9yOnV0aWxzLmNvbG9yKFwiYmx1ZVwiKSwgYm9yZGVyUmFkaXVzOnV0aWxzLnB4KDEpXG5cdFx0XHRmaWVsZC5jdXJzb3IgPSBjdXJzb3Jcblx0XHRcdGN1cnNvci5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRzZXR1cC5jdXJzb3IuY29uc3RyYWludHNcblxuXHRcdFx0VXRpbHMuaW50ZXJ2YWwgLjUsIC0+XG5cdFx0XHRcdGlmIGZpZWxkLmFjdGl2ZSA9PSB0cnVlXG5cdFx0XHRcdFx0aWYgZmllbGQuY3Vyc29yLm9wYWNpdHkgPT0gMFxuXHRcdFx0XHRcdFx0ZmllbGQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZmllbGQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTowKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRmaWVsZC5jdXJzb3Iub3BhY2l0eSA9IDBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4gZmllbGRcblxuZXhwb3J0cy5TdGF0dXNCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJzdGF0dXNCYXJcIiwgYXJyYXkpXG5cdHN0YXR1c0JhciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwic3RhdHVzQmFyLmFsbFwiXG5cdHN0YXR1c0Jhci50eXBlID0gc2V0dXAudHlwZVxuXHRzdGF0dXNCYXIuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjIwXG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDVcblx0XHRcdEBiYXR0ZXJ5SWNvbiA9IDZcblx0XHRcdEBibHVldG9vdGggPSA1XG5cdFx0d2hlbiBcImZ1bGxzY3JlZW5cIlxuXHRcdFx0QGJhdHRlcnlJY29uID0gLSAxMlxuXHRcdFx0QGJsdWV0b290aCA9IC0gMTBcblx0XHRlbHNlXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDNcblx0XHRcdEBiYXR0ZXJ5SWNvbiA9IDJcblx0XHRcdEBibHVldG9vdGggPSAzXG5cdGlmIHNldHVwLnN0eWxlID09IFwibGlnaHRcIlxuXHRcdEBjb2xvciA9IFwid2hpdGVcIlxuXHRlbHNlXG5cdFx0QGNvbG9yID0gXCJibGFja1wiXG5cdGZvciBsYXllciBpbiBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdFx0aWYgbGF5ZXIudHlwZSA9PSBcImxvY2tTY3JlZW5cIlxuXHRcdFx0QGlzTG9ja1NjcmVlblB1dGlsc2VudCA9IHRydWVcblx0aWYgQGlzTG9ja1NjcmVlblB1dGlsc2VudFxuXHRcdGdyaXBwZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpzdGF0dXNCYXIsIHdpZHRoOnV0aWxzLnB4KDM3KSwgaGVpZ2h0OnV0aWxzLnB4KDUpLCBuYW1lOlwiZ3JpcHBlclwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi41LCBuYW1lOlwiZ3JpcHBlclwiXG5cdFx0Z3JpcHBlci5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMzcpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoNSl9cHgnIHZpZXdCb3g9JzAgMCAzNyA1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5HcmlwcGVyPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0F1dG8tQ29tcGxldGUtQmFyLUNsb3NlZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE2OS4wMDAwMDAsIC0yLjAwMDAwMCknIGZpbGw9JyNGRkZGRkYnPlxuXHRcdFx0XHRcdFx0PHJlY3QgaWQ9J0dyaXBwZXInIHg9JzE2OS41JyB5PScyLjUnIHdpZHRoPSczNicgaGVpZ2h0PSc0JyByeD0nMi41Jz48L3JlY3Q+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGdyaXBwZXIuY29uc3RyYWludHMgPSBcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6MlxuXHRlbHNlIFxuXHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRpZiBzZXR1cC5jbG9jazI0ID09IGZhbHNlXG5cdFx0XHRpZiBAdGltZS5ob3VycyA+IDExIFxuXHRcdFx0XHRAdGltZS5zdGFtcCA9IFwiUE1cIlxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAdGltZS5zdGFtcCA9IFwiQU1cIlxuXHRcdGVsc2Vcblx0XHRcdEB0aW1lLnN0YW1wID0gXCJcIlxuXHRcdHRpbWUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyVGltZVwiLCB0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgc2V0dXAuY2xvY2syNCkgKyBcIiBcIiArIEB0aW1lLnN0YW1wLCBmb250U2l6ZToxMiwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJ0aW1lXCJcblx0XHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6QHRvcENvbnN0cmFpbnRcblx0c2lnbmFsID0gW11cblx0aWYgc2V0dXAuc2lnbmFsIDwgMVxuXHRcdG5vTmV0d29yayA9IG5ldyBleHBvcnRzLlRleHQgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGZvbnRTaXplOjEyLCB0ZXh0OlwiTm8gTmV0d29ya1wiXG5cdFx0bm9OZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmc6N1xuXHRcdFx0dG9wOjNcblx0ZWxzZVxuXHRcdGZvciBpIGluIFswLi4uc2V0dXAuc2lnbmFsXVxuXHRcdFx0ZG90ID0gbmV3IExheWVyIGhlaWdodDp1dGlscy5weCg1LjUpLCB3aWR0aDp1dGlscy5weCg1LjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLCBzdXBlckxheWVyOnN0YXR1c0JhciwgYm9yZGVyUmFkaXVzOnV0aWxzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOkBjb2xvciwgbmFtZTpcInNpZ25hbFsje2l9XVwiXG5cdFx0XHRpZiBpID09IDBcblx0XHRcdFx0ZG90LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOjdcblx0XHRcdFx0XHR0b3A6N1x0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW2kgLSAxIF0sIDFdXG5cdFx0XHRcdFx0dG9wOjdcdFx0XHRcdFx0XG5cdFx0XHRzaWduYWwucHVzaCBkb3QgXG5cdFx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0aWYgc2V0dXAuc2lnbmFsIDwgNVxuXHRcdFx0bm9uRG90cyA9IDUgLSBzZXR1cC5zaWduYWxcblx0XHRcdGZvciBpIGluIFswLi4ubm9uRG90c11cblx0XHRcdFx0bm9uRG90ID0gbmV3IExheWVyIGhlaWdodDp1dGlscy5weCg1LjUpLCB3aWR0aDp1dGlscy5weCg1LjUpLCBzdXBlckxheWVyOnN0YXR1c0JhciwgYm9yZGVyUmFkaXVzOnV0aWxzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNpZ25hbFsje3NpZ25hbC5sZW5ndGh9XVwiXG5cdFx0XHRcdG5vbkRvdC5zdHlsZS5ib3JkZXIgPSBcIiN7dXRpbHMucHgoMSl9cHggc29saWQgI3tAY29sb3J9XCJcblx0XHRcdFx0bm9uRG90LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOltzaWduYWxbc2lnbmFsLmxlbmd0aCAtIDFdLCAxXVxuXHRcdFx0XHRcdHRvcDo3XG5cdFx0XHRcdHNpZ25hbC5wdXNoIG5vbkRvdFxuXHRcdFx0XHRleHBvcnRzLmxheW91dCgpXHRcblx0XHRjYXJyaWVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhckNhcnJpZXJcIiwgdGV4dDpzZXR1cC5jYXJyaWVyLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcImNhcnJpZXJcIiwgdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIlxuXHRcdGNhcnJpZXIuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDddXG5cdFx0XHR0b3A6M1xuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRpZiBzZXR1cC5jYXJyaWVyXG5cdFx0XHRuZXR3b3JrID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0Jhck5ldHdvcmtcIiwgdGV4dDpzZXR1cC5uZXR3b3JrLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcIm5ldHdvcmtcIiwgdGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzpbY2FycmllciwgNV1cblx0XHRcdFx0dG9wOjNcblx0XHRpZiBzZXR1cC5jYXJyaWVyID09IFwiXCIgfHwgc2V0dXAuY2FycmllciA9PSBcIndpZmlcIlxuXHRcdFx0bmV0d29yayA9IG5ldyBMYXllciB3aWR0aDp1dGlscy5weCgxNCksIGhlaWdodDp1dGlscy5weCgxMCksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwibmV0d29ya1wiXG5cdFx0XHRuZXR3b3JrLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDE0KX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDE0IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+V2ktRmk8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdTdGF0dXMtQmFyL0JsYWNrL0NoYXJnaW5nJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODcuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNOTYuMTQ0NDIwOCwxMi40Mzg1MDQzIEM5NS42MjYzNzQsMTEuODQ1NDQ1NiA5NC44NTIzNjE2LDExLjQ2ODkxMTkgOTMuOTg3NTYzLDExLjQ2ODkxMTkgQzkzLjEzOTAwNzMsMTEuNDY4OTExOSA5Mi4zNzc4NTk0LDExLjgzMTQzNDEgOTEuODYwMTY1MiwxMi40MDUzMTc3IEw5NC4wMjI1MzkxLDE0LjUgTDk2LjE0NDQyMDgsMTIuNDM4NTA0MyBaIE05OC4zMjM0OTY0LDEwLjMyMTQ0MjUgQzk3LjI0NDc3OTQsOS4xOTE3NDU2MyA5NS43MDE0Mzg3LDguNDg0NDU1OTYgOTMuOTg3NTYzLDguNDg0NDU1OTYgQzkyLjI4ODI3MjMsOC40ODQ0NTU5NiA5MC43NTY2MjY0LDkuMTc5NzU4OTMgODkuNjc5MjY5OCwxMC4yOTI2OTM2IEw5MC43NjkyOTg3LDExLjM0ODYgQzkxLjU2NzIwNSwxMC41MDUzNzA4IDkyLjcxMzY0OCw5Ljk3NjY4Mzk0IDkzLjk4NzU2Myw5Ljk3NjY4Mzk0IEM5NS4yNzY4ODM2LDkuOTc2NjgzOTQgOTYuNDM1NjMwNSwxMC41MTgyMzUgOTcuMjM0NjIxNSwxMS4zNzkzMjkzIEw5OC4zMjM0OTY0LDEwLjMyMTQ0MjUgTDk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBaIE0xMDAuNSw4LjIwNjg3OTMzIEM5OC44NjI5NTc4LDYuNTM5NDM2NzIgOTYuNTUwNTY5OSw1LjUgOTMuOTg3NTYzLDUuNSBDOTEuNDM3NTEwMyw1LjUgODkuMTM1NTQ5Niw2LjUyODk1NjA1IDg3LjUsOC4xODE2NDQzMSBMODguNTg5NTU3OSw5LjIzNzA5NDQxIEM4OS45NDYwNzk4LDcuODU0MzE2NTUgOTEuODYyODkyMSw2Ljk5MjIyNzk4IDkzLjk4NzU2Myw2Ljk5MjIyNzk4IEM5Ni4xMjYwMDI2LDYuOTkyMjI3OTggOTguMDUzODgwOSw3Ljg2NTUyNjA5IDk5LjQxMTg2OTgsOS4yNjQwNDI3MiBMMTAwLjUsOC4yMDY4NzkzMyBaJyBpZD0nV2ktRmknPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDddXG5cdFx0XHRcdHRvcDpAdG9wQ29uc3RyYWludFxuXHRiYXR0ZXJ5SWNvbiA9IG5ldyBMYXllciB3aWR0aDp1dGlscy5weCgyNSksIGhlaWdodDp1dGlscy5weCgxMCksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmF0dGVyeUljb25cIlxuXHRpZiBzZXR1cC5iYXR0ZXJ5ID4gNzAgXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDI1KX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0PGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjUwNjc0NCw2LjUgQzM0Ni4yMjY4NzcsNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIzMDIyNSwxNCAzNDYuNTA2NzQ0LDE0IEwzNjUuOTkzMjU2LDE0IEMzNjYuMjczMTIzLDE0IDM2Ni41LDEzLjc4MzYyOCAzNjYuNSwxMy41MDc5MDQxIEwzNjYuNSw2Ljk5MjA5NTk1IEMzNjYuNSw2LjcyMDMxODg2IDM2Ni4yNjk3NzUsNi41IDM2NS45OTMyNTYsNi41IEwzNDYuNTA2NzQ0LDYuNSBaJyBpZD0nQmF0dGVyeSc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0aWYgc2V0dXAuYmF0dGVyeSA8PSA3MCAmJiBzZXR1cC5iYXR0ZXJ5ID4gMjBcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMjUpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMTApfXB4JyB2aWV3Qm94PScwIDAgMjUgMTAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkJhdHRlcnk8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdFx0XHQ8ZyBpZD0nU3RhdHVzLUJhci9XaGl0ZS8xMDAlJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzQ1LjAwMDAwMCwgLTUuMDAwMDAwKScgZmlsbD0nI3tAY29sb3J9Jz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNTAxMjMxLDYuNSBDMzQ2LjIyNDQwOSw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjI5NzUxLDE0IDM0Ni41MDEyMzEsMTQgTDM1Ni40OTg3NjksMTQgQzM1Ni43NzU1OTEsMTQgMzU3LDEzLjc4MzYyOCAzNTcsMTMuNTA3OTA0MSBMMzU3LDYuOTkyMDk1OTUgQzM1Nyw2LjcyMDMxODg2IDM1Ni43NzAyNDksNi41IDM1Ni40OTg3NjksNi41IEwzNDYuNTAxMjMxLDYuNSBaJyBpZD0nQmF0dGVyeSc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0aWYgc2V0dXAuYmF0dGVyeSA8PSAyMFxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3t1dGlscy5weCgyNSl9cHgnIGhlaWdodD0nI3t1dGlscy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdDxnIGlkPSdTdGF0dXMtQmFyL1doaXRlLzEwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBaIE0zNjgsOC41IEwzNjgsMTIgTDM2OC43NSwxMiBDMzY5LjE2NDIxNCwxMiAzNjkuNSwxMS42NjQ0MDUzIDM2OS41LDExLjI1Nzc0IEwzNjkuNSw5LjI0MjI1OTk4IEMzNjkuNSw4LjgzMjMyMTExIDM2OS4xNjcxMDEsOC41IDM2OC43NSw4LjUgTDM2OCw4LjUgWiBNMzQ2LjUwODE1Miw2IEMzNDUuOTUxMzY1LDYgMzQ1LjUsNi40NTY5OTY5MiAzNDUuNSw3LjAwODQ0MDU1IEwzNDUuNSwxMy40OTE1NTk0IEMzNDUuNSwxNC4wNDg1MDU4IDM0NS45NDkwNTgsMTQuNSAzNDYuNTA4MTUyLDE0LjUgTDM2NS45OTE4NDgsMTQuNSBDMzY2LjU0ODYzNSwxNC41IDM2NywxNC4wNDMwMDMxIDM2NywxMy40OTE1NTk0IEwzNjcsNy4wMDg0NDA1NSBDMzY3LDYuNDUxNDk0MjIgMzY2LjU1MDk0Miw2IDM2NS45OTE4NDgsNiBMMzQ2LjUwODE1Miw2IFogTTM0Ni40OTA0NzksNi41IEMzNDYuMjE5NTk1LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMTUwNTcsMTQgMzQ2LjQ5MDQ3OSwxNCBMMzQ5LjUwOTUyMSwxNCBDMzQ5Ljc4MDQwNSwxNCAzNTAsMTMuNzgzNjI4IDM1MCwxMy41MDc5MDQxIEwzNTAsNi45OTIwOTU5NSBDMzUwLDYuNzIwMzE4ODYgMzQ5Ljc4NDk0Myw2LjUgMzQ5LjUwOTUyMSw2LjUgTDM0Ni40OTA0NzksNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXG5cdGJhdHRlcnlQZXJjZW50ID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhckJhdHRlcnlQZXJjZW50XCIsIHRleHQ6c2V0dXAuYmF0dGVyeSArIFwiJVwiLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcImJhdHRlcnlQZXJjZW50XCJcblx0YmF0dGVyeVBlcmNlbnQuY29uc3RyYWludHMgPSBcblx0XHR0cmFpbGluZzogW2JhdHRlcnlJY29uLCAzXVxuXHRcdHZlcnRpY2FsQ2VudGVyOnRpbWVcblx0YmF0dGVyeUljb24uY29uc3RyYWludHMgPVxuXHRcdHRyYWlsaW5nIDogN1xuXHRcdHRvcDpAYmF0dGVyeUljb25cblx0Ymx1ZXRvb3RoID0gbmV3IExheWVyIHdpZHRoOnV0aWxzLnB4KDgpLCBoZWlnaHQ6dXRpbHMucHgoMTUpLCBzdXBlckxheWVyOnN0YXR1c0Jhciwgb3BhY2l0eTouNSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJsdWV0b290aFwiXG5cdGJsdWV0b290aC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDcpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMTMpfXB4JyB2aWV3Qm94PScwIDAgOCAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5CbHVldG9vdGg8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdFx0PGcgaWQ9J1N0YXR1cy1JY29ucy0oV2hpdGUpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTM3LjAwMDAwMCwgMC4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHRcdDxwYXRoIGQ9J00xNDAuNSwxNC41IEwxNDUsMTAuMjUgTDE0MS44LDcuNSBMMTQ1LDQuNzUgTDE0MC41LDAuNSBMMTQwLjUsNi4wNzE0Mjg1NyBMMTM3LjgsMy43NSBMMTM3LDQuNSBMMTQwLjI1ODMzMyw3LjM3NSBMMTM3LDEwLjI1IEwxMzcuOCwxMSBMMTQwLjUsOC42Nzg1NzE0MyBMMTQwLjUsMTQuNSBaIE0xNDEuNSwzIEwxNDMuMzY2NjY3LDQuNzUgTDE0MS41LDYuMjUgTDE0MS41LDMgWiBNMTQxLjUsOC41IEwxNDMuMzY2NjY3LDEwLjI1IEwxNDEuNSwxMiBMMTQxLjUsOC41IFonIGlkPSdCbHVldG9vdGgnPjwvcGF0aD5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJsdWV0b290aC5jb25zdHJhaW50cyA9IFxuXHRcdHRvcDogQGJsdWV0b290aFxuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeVBlcmNlbnQsIDddXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdCMgRXhwb3J0IHN0YXR1c0JhclxuXHRzdGF0dXNCYXIuYmF0dGVyeSA9IHt9XG5cdHN0YXR1c0Jhci5iYXR0ZXJ5LnBlcmNlbnQgPSBiYXR0ZXJ5UGVyY2VudFxuXHRzdGF0dXNCYXIuYmF0dGVyeS5pY29uID0gYmF0dGVyeUljb25cblx0c3RhdHVzQmFyLmJsdWV0b290aCA9IGJsdWV0b290aFxuXHRzdGF0dXNCYXIudGltZSA9IHRpbWVcblx0c3RhdHVzQmFyLm5ldHdvcmsgPSBuZXR3b3JrXG5cdHN0YXR1c0Jhci5jYXJyaWVyID0gY2FycmllclxuXHRzdGF0dXNCYXIuc2lnbmFsID0gc2lnbmFsXG5cdHJldHVybiBzdGF0dXNCYXJcblxuZXhwb3J0cy5LZXlib2FyZCA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImtleWJvYXJkXCIsIGFycmF5KVxuXG5cdCNUaGlzIHdpbGwgaG9sZCBhbGwgb2YgdGhlIHNwZWNzIGZvciBlYWNoIGRldmljZSdzIGtleWJvYXJkXG5cdGJvYXJkU3BlY3MgPSB7fVxuXG5cdCNUaGlzIHdpbGwgc2V0IHRoZSBzcGVjc1xuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2Vcblx0XHR3aGVuIFwiaXBob25lLTVcIlxuXHRcdFx0Ym9hcmRTcGVjcy5oZWlnaHQgPSAyMTVcblx0XHRcdGJvYXJkU3BlY3Mua2V5ID0ge1xuXHRcdFx0XHR3aWR0aDp1dGlscy5weCgyNilcblx0XHRcdFx0aGVpZ2h0OnV0aWxzLnB4KDM5KVxuXHRcdFx0fVxuXHRcdFx0Ym9hcmRTcGVjcy5leHBhbmRlZEtleSA9IHV0aWxzLnB4KDM5KVxuXHRcdFx0Ym9hcmRTcGVjcy5leHBhbmRlZFNwYWNlciA9IHV0aWxzLnB4KDEyKVxuXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcgPSB7fVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzEgPSB1dGlscy5weCgzKVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzIgPSB1dGlscy5weCgxOSlcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3czID0gdXRpbHMucHgoNTQpXG5cblxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3AgPSB7fVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MSA9IHV0aWxzLnB4KDExKVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MiA9IHV0aWxzLnB4KDI2KVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyA9IHV0aWxzLnB4KDQxKVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93NCA9IHV0aWxzLnB4KDU1KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNoaWZ0SWNvbiA9IHt4OnV0aWxzLnB4KDkpLCB5OnV0aWxzLnB4KDIpfVxuXHRcdFx0Ym9hcmRTcGVjcy5kZWxldGVJY29uID0ge3g6dXRpbHMucHgoNyksIHk6dXRpbHMucHgoMTApfVxuXHRcdFx0Ym9hcmRTcGVjcy5lbW9qaUljb24gPSB7eDp1dGlscy5weCg4KSwgeTp1dGlscy5weCg5KX1cblxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5ID0gdXRpbHMucHgoMzYuNSlcblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cyA9IHV0aWxzLnB4KDQpXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXlCb3R0b20gPSB1dGlscy5weCg1OClcblxuXHRcdFx0Ym9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0ID0gMFxuXHRcdFx0Ym9hcmRTcGVjcy5ib3R0b21Sb3cgPSA4XG5cdFx0XHRib2FyZFNwZWNzLnJldHVybktleSA9IHV0aWxzLnB4KDc0KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNwYWNlciA9IHV0aWxzLnB4KDYpXG5cblx0XHR3aGVuIFwiaXBob25lLTZzXCJcblx0XHRcdGJvYXJkU3BlY3MuaGVpZ2h0ID0gMjE2XG5cdFx0XHRib2FyZFNwZWNzLmtleSA9IHtcblx0XHRcdFx0d2lkdGg6dXRpbHMucHgoMzEuNSlcblx0XHRcdFx0aGVpZ2h0OnV0aWxzLnB4KDQyKVxuXHRcdFx0fVxuXG5cdFx0XHRib2FyZFNwZWNzLmV4cGFuZGVkS2V5ID0gdXRpbHMucHgoNDYuNSlcblx0XHRcdGJvYXJkU3BlY3MuZXhwYW5kZWRTcGFjZXIgPSB1dGlscy5weCgxNClcblxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nID0ge31cblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cxID0gdXRpbHMucHgoMylcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cyID0gdXRpbHMucHgoMjIpXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MyA9IHV0aWxzLnB4KDU5KVxuXG5cblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wID0ge31cblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzEgPSB1dGlscy5weCgxMClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzIgPSB1dGlscy5weCgyMilcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzMgPSB1dGlscy5weCgzNClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzQgPSB1dGlscy5weCg0NClcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaGlmdEljb24gPSB7eDp1dGlscy5weCgxMSksIHk6dXRpbHMucHgoMil9XG5cdFx0XHRib2FyZFNwZWNzLmRlbGV0ZUljb24gPSB7eDp1dGlscy5weCgxMCksIHk6dXRpbHMucHgoMTMpfVxuXHRcdFx0Ym9hcmRTcGVjcy5lbW9qaUljb24gPSB7eDp1dGlscy5weCgxMSksIHk6dXRpbHMucHgoMTEpfVxuXG5cdFx0XHRib2FyZFNwZWNzLnJldHVybktleSA9IHV0aWxzLnB4KDg3LjUpXG5cdFx0XHRib2FyZFNwZWNzLmJvdHRvbVJvdyA9IDZcblx0XHRcdGJvYXJkU3BlY3MuaVBhZERlbGV0ZU9mZnNldCA9IDBcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5ID0gdXRpbHMucHgoNDIpXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMgPSB1dGlscy5weCg1KVxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5Qm90dG9tID0gdXRpbHMucHgoNTYpXG5cblx0XHRcdGJvYXJkU3BlY3Muc3BhY2VyID0gdXRpbHMucHgoNilcblxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRib2FyZFNwZWNzLmhlaWdodCA9IDIyNlxuXHRcdFx0Ym9hcmRTcGVjcy5rZXkgPSB7XG5cdFx0XHRcdHdpZHRoOnV0aWxzLnB4KDM1KVxuXHRcdFx0XHRoZWlnaHQ6dXRpbHMucHgoNDUpXG5cdFx0XHR9XG5cdFx0XHRib2FyZFNwZWNzLmV4cGFuZGVkS2V5ID0gdXRpbHMucHgoNTApXG5cdFx0XHRib2FyZFNwZWNzLmV4cGFuZGVkU3BhY2VyID0gdXRpbHMucHgoMjApXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcgPSB7fVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzEgPSB1dGlscy5weCg0KVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzIgPSB1dGlscy5weCgyNSlcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3czID0gdXRpbHMucHgoNjcpXG5cblxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3AgPSB7fVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MSA9IHV0aWxzLnB4KDgpXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cyID0gdXRpbHMucHgoMTkpXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czID0gdXRpbHMucHgoMzApXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3c0ID0gdXRpbHMucHgoNDEpXG5cblx0XHRcdGJvYXJkU3BlY3Muc2hpZnRJY29uID0ge3g6dXRpbHMucHgoMTMpLCB5OnV0aWxzLnB4KDIpfVxuXHRcdFx0Ym9hcmRTcGVjcy5kZWxldGVJY29uID0ge3g6dXRpbHMucHgoMTEpLCB5OnV0aWxzLnB4KDE0KX1cblx0XHRcdGJvYXJkU3BlY3MuZW1vamlJY29uID0ge3g6dXRpbHMucHgoMTMpLCB5OnV0aWxzLnB4KDEzKX1cblxuXHRcdFx0Ym9hcmRTcGVjcy5ib3R0b21Sb3cgPSA2XG5cblx0XHRcdGJvYXJkU3BlY3MuaVBhZERlbGV0ZU9mZnNldCA9IDBcblxuXHRcdFx0Ym9hcmRTcGVjcy5yZXR1cm5LZXkgPSB1dGlscy5weCg5NylcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5ID0gdXRpbHMucHgoNDUpXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMgPSB1dGlscy5weCg1KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNwYWNlciA9IHV0aWxzLnB4KDYpXG5cdFx0d2hlbiBcImlwYWRcIlxuXHRcdFx0Ym9hcmRTcGVjcy5oZWlnaHQgPSAyNjhcblx0XHRcdGJvYXJkU3BlY3Mua2V5ID0ge1xuXHRcdFx0XHR3aWR0aDp1dGlscy5weCg1Nilcblx0XHRcdFx0aGVpZ2h0OnV0aWxzLnB4KDU2KVxuXHRcdFx0fVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nID0ge31cblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cxID0gdXRpbHMucHgoNilcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cyID0gdXRpbHMucHgoMzUpXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MyA9IHV0aWxzLnB4KDc0KVxuXG5cblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wID0ge31cblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzEgPSB1dGlscy5weCgxMClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzIgPSB1dGlscy5weCgxOClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzMgPSB1dGlscy5weCgyOClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzQgPSB1dGlscy5weCg0MClcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaGlmdEljb24gPSB7eDp1dGlscy5weCgxOCksIHk6dXRpbHMucHgoMil9XG5cdFx0XHRib2FyZFNwZWNzLmRlbGV0ZUljb24gPSB7eDp1dGlscy5weCgxOCksIHk6dXRpbHMucHgoMjApfVxuXHRcdFx0Ym9hcmRTcGVjcy5lbW9qaUljb24gPSB7eDp1dGlscy5weCgxOCksIHk6dXRpbHMucHgoMTgpfVxuXG5cdFx0XHRib2FyZFNwZWNzLmJvdHRvbVJvdyA9IDdcblxuXHRcdFx0Ym9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0ID0gYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCAqIDIgLSBib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cxXG5cblx0XHRcdGJvYXJkU3BlY3MucmV0dXJuS2V5ID0gdXRpbHMucHgoMTA2KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXkgPSB1dGlscy5weCg1Nilcblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleTIgPSB1dGlscy5weCg3Nilcblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cyA9IHV0aWxzLnB4KDUpXG5cblx0XHRcdGJvYXJkU3BlY3Muc3BhY2VyID0gdXRpbHMucHgoMTIpXG5cblx0Ym9hcmQgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0QxRDVEQVwiLCBuYW1lOlwia2V5Ym9hcmRcIlxuXG5cdGJvYXJkLnNwZWNzID0gYm9hcmRTcGVjc1xuXG5cdCNUaGlzIHdpbGwgZ2VuZXJhdGUgYSBvYmplY3Qgd2l0aCAyMTYgaGVpZ2h0IGFuZCBpdCdsbCBzdHJldGNoIGVuZCB0byBlbmQuIFxuXHRib2FyZC5jb25zdHJhaW50cyA9IChoZWlnaHQ6Ym9hcmRTcGVjcy5oZWlnaHQsIHRyYWlsaW5nOjAsIGxlYWRpbmc6MClcblxuXHRleHBvcnRzLmxheW91dCgpXG5cblx0I1RoaXMgd2lsbCBkZXRlcmluZSBpZiBpdCBzdGFydHMgb24gdGhlIGJvdHRvbSBvciBwb3BzIHVwIGZyb20gdGhlIGJvdHRvbSBcblx0aWYgc2V0dXAuYW5pbWF0ZWRcblx0XHRib2FyZC55ID0gZXhwb3J0cy5kZXZpY2UuaGVpZ2h0XG5cdFx0Ym9hcmQuYW5pbWF0ZSBcblx0XHRcdHByb3BlcnRpZXM6KG1heFk6IGV4cG9ydHMuZGV2aWNlLmhlaWdodClcblx0XHRcdHRpbWU6LjI1XG5cdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0ZWxzZVxuXHRcdGJvYXJkLm1heFkgPSBleHBvcnRzLmRldmljZS5oZWlnaHRcblxuXHQjTGV0dGVycyB0byBiZSBtYWRlXG5cdGxldHRlcnNBcnJheSA9IFtcInFcIiwgXCJ3XCIsIFwiZVwiLCBcInJcIiwgXCJ0XCIsIFwieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiLCBcInBcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJ6XCIsIFwieFwiLCBcImNcIiwgXCJ2XCIsICBcImJcIiwgXCJuXCIsIFwibVwiXVxuXHQjVGhlc2UgYXJyYXlzIGFyZSBkZXBlbmVkZW50IG9uIHRoZSBEZXZpY2Vcblx0c2Vjb25kQXJyYXkgPSBbXVxuXHR0aGlyZEFycmF5ID0gW11cblxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2Vcblx0XHR3aGVuIFwiaXBhZFwiXG5cdFx0XHRzZWNvbmRBcnJheSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIiwgXCItXCIsIFwiL1wiLCBcIjpcIiwgXCI7XCIsIFwiKFwiLCBcIilcIiwgXCIkXCIsIFwiJlwiLCBcIkBcIiwgXCJ1bmRvXCIsIFwiaGlkZVwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiLCBcIlxcXCJcIl1cblx0XHRcdHRoaXJkQXJyYXkgPSBbXCJcXFtcIiwgXCJcXF1cIiwgXCJcXHtcIiwgXCJcXH1cIiwgXCIjXCIsIFwiJVwiLCBcIl5cIiwgXCIqXCIsIFwiK1wiLCBcIj1cIiwgXCJfXCIsIFwiXFxcXFwiLCBcInxcIiwgXCJ+XCIsIFwiPFwiLCBcIj5cIiwgXCLigqxcIiwgXCLCo1wiLCBcIsKlXCIsIFwicmVkb1wiLCBcImhpZGVcIiwgXCIuXCIsICcsJywgXCI/XCIsIFwiIVwiLCBcIidcIiwgXCJcXFwiXCJdXG5cdFx0ZWxzZVxuXHRcdFx0c2Vjb25kQXJyYXkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCIsIFwiLVwiLCBcIi9cIiwgXCI6XCIsIFwiO1wiLCBcIihcIiwgXCIpXCIsIFwiJFwiLCBcIiZcIiwgXCJAXCIsIFwiXFxcIlwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiXVxuXHRcdFx0dGhpcmRBcnJheSA9IFtcIlxcW1wiLCBcIlxcXVwiLCBcIlxce1wiLCBcIlxcfVwiLCBcIiNcIiwgXCIlXCIsIFwiXlwiLCBcIipcIiwgXCIrXCIsIFwiPVwiLCBcIl9cIiwgXCJcXFxcXCIsIFwifFwiLCBcIn5cIiwgXCI8XCIsIFwiPlwiLCBcIuKCrFwiLCBcIsKjXCIsIFwiwqVcIiwgXCLigKJcIiwgXCIuXCIsICcsJywgXCI/XCIsIFwiIVwiLCBcIidcIiwgXCJcXFwiXCJdXG5cdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0bGV0dGVyc0FycmF5LnB1c2ggXCIsXCJcblx0XHRsZXR0ZXJzQXJyYXkucHVzaCBcIi5cIlxuXG5cdCNOdW1iZXJzIHRvIGJlIG1hZGUgKGRlcGVuZGluZyBvbiBkZXZpY2UpXG5cdG51bXNBcnJheSA9IFswLi45XVxuXG5cdCNIb2xkcyB0aGUga2V5cyB0aGF0IHdlIG1ha2UuIFRoaXMgd2lsbCBhbGxvd3MgdXMgdG8gcXVpY2tseSBpdGVyYXRlIHRocm91Z2ggdGhlbS4gXG5cdGtleXNBcnJheSA9IFtdXG5cblx0a2V5UG9wVXAgPSBuZXcgTGF5ZXIgd2lkdGg6QGtleVdpZHRoLCBoZWlnaHQ6QGtleUhlaWdodCwgeDpALngtMTYqZXhwb3J0cy5kZXZpY2Uuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJrZXkgcG9wIHVwXCJcblx0Ym94ID0gbmV3IExheWVyIGJvcmRlclJhZGl1czp1dGlscy5weCgxMCksIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcImxldHRlclwiXG5cdGJveC5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogMzkgKiBleHBvcnRzLmRldmljZS5zY2FsZSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IEBsaW5lSGVpZ2h0XG5cdH1cblx0QC5jb2xvciA9IFwid2hpdGVcIlxuXHRwYXRoID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJzaGFwZSBwYXRoXCJcblx0Ym9hcmQua2V5UG9wVXAgPSBrZXlQb3BVcFxuXHRib2FyZC5rZXlQb3BVcC5ib3ggPSBib3hcblxuXHRyb3dzTWFwID0gW1xuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IGJvYXJkU3BlY3MucGFkZGluZy5yb3cxXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDlcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cxXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiBib2FyZFNwZWNzLnBhZGRpbmcucm93MlxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogMThcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cyXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiBib2FyZFNwZWNzLnBhZGRpbmcucm93M1xuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxOVxuXHRcdFx0XCJlbmRJbmRleFwiIDogMjVcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czXG5cdFx0fVxuXHRdXG5cblx0Zmlyc3RSb3dLZXlXaWR0aCA9IDBcblx0c2Vjb25kUm93S2V5V2lkdGggPSAwXG5cblx0Ym9hcmQua2V5cyA9IHt9XG5cdGZvciBsZXR0ZXIgaW4gbGV0dGVyc0FycmF5XG5cdFx0aW5kZXggPSBsZXR0ZXJzQXJyYXkuaW5kZXhPZihsZXR0ZXIpIFxuXHRcdGtleSA9IG5ldyBMYXllciBuYW1lOmxldHRlciwgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOjUqZXhwb3J0cy5kZXZpY2Uuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIGNvbG9yOlwiYmxhY2tcIiwgc2hhZG93WTp1dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Mua2V5LndpZHRoLCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdFx0Ym9hcmQua2V5c1tsZXR0ZXJdID0ga2V5XG5cdFx0a2V5UG9wVXAuYnJpbmdUb0Zyb250KClcblx0XHRib3guYnJpbmdUb0Zyb250KClcblx0XHRpZiBleHBvcnRzLmRldmljZS5zY2FsZSA9PSAyXG5cdFx0XHRrZXlQb3BVcC5jb25zdHJhaW50cyA9ICh3aWR0aDo2NSwgaGVpZ2h0OjEyMilcblx0XHRcdHBhdGguY29uc3RyYWludHMgPSAod2lkdGg6NjUsIGhlaWdodDogMTIyKVxuXHRcdFx0cGF0aC55ID0gMTBcblx0XHRcdEBwYXRoV2lkdGggPSB1dGlscy5weCg2NSlcblx0XHRcdEBwYXRoSGVpZ2h0ID0gdXRpbHMucHgoMTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IHV0aWxzLnB4KDMyKVxuXHRcdFx0QGtleVdpZHRoID0gdXRpbHMucHgoNDQpXG5cdFx0XHRAbGluZUhlaWdodCA9IEBrZXlXaWR0aCAtIDE3ICsgXCJweFwiXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzIsIGhlaWdodDo0NClcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gdXRpbHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLmRldmljZS5zY2FsZSA9PSAzXG5cdFx0XHRrZXlQb3BVcC5jb25zdHJhaW50cyA9ICh3aWR0aDo2OCwgaGVpZ2h0OjEyMilcblx0XHRcdEBrZXlIZWlnaHQgPSB1dGlscy5weCgxMjIpXG5cdFx0XHRAa2V5V2lkdGggPSB1dGlscy5weCg2NSlcblx0XHRcdEBsaW5lSGVpZ2h0ID0gQGtleVdpZHRoICsgXCJweFwiXG5cdFx0XHRAcGF0aFdpZHRoID0gdXRpbHMucHgoNjgpXG5cdFx0XHRAcGF0aEhlaWdodCA9IHV0aWxzLnB4KDEyOClcblx0XHRcdHBhdGgueSA9IDBcblxuXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzUsIGhlaWdodDo0Nilcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gdXRpbHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLmRldmljZS53aWR0aCA9PSA2NDBcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDoyNiwgaGVpZ2h0OjM5KVxuXG5cdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0a2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IDI1ICogZXhwb3J0cy5kZXZpY2Uuc2NhbGUgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGtleS5oZWlnaHQgLSB1dGlscy5weCgyKSArIFwicHhcIlxuXHRcdH1cblx0XHRpZiBsZXR0ZXIgPT0gXCIsXCIgfHwgbGV0dGVyID09IFwiLlwiXG5cdFx0XHRleHRyYVN5bWJvbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmtleSwgd2lkdGg6dXRpbHMucHgoMzApLCBoZWlnaHQ6dXRpbHMucHgoMzApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB5OnV0aWxzLnB4KDE1KSwgY29sb3I6dXRpbHMuY29sb3IoXCJibGFja1wiKSwgbmFtZTpcIiEvP1wiXG5cdFx0XHRleHRyYVN5bWJvbC5jZW50ZXJYKClcblx0XHRcdGV4dHJhU3ltYm9sLnN0eWxlID0ge1xuXHRcdFx0XHRcImZvbnQtc2l6ZVwiIDogdXRpbHMucHgoMjQpICsgXCJweFwiXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdFx0J2xpbmUtaGVpZ2h0JyA6IFwiMjBweFwiXG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCBsZXR0ZXJcblx0XHRcdFx0d2hlbiBcIixcIiB0aGVuIGV4dHJhU3ltYm9sLmh0bWwgPSBcIiFcIlxuXHRcdFx0XHR3aGVuIFwiLlwiIHRoZW4gZXh0cmFTeW1ib2wuaHRtbCA9IFwiP1wiXG5cdFx0XHRrZXkuc3R5bGVbXCJsaW5lLWhlaWdodFwiXSA9IGtleS5oZWlnaHQgKyB1dGlscy5weCgxMCkgKyBcInB4XCJcblxuXHRcdGtleS5odG1sID0gbGV0dGVyXG5cdFx0XG5cdFx0aWYgaW5kZXggPD0gcm93c01hcFswXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMF0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzBdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKGZpcnN0Um93S2V5V2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMF0ubWFyZ2luVG9wXG5cdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHQjSGFuZGxlIHRoZSBleHRyYSBwaXhlbHMgb24gdGhlIHRvcCByb3dcblx0XHRcdFx0aWYgaW5kZXggJSAyICE9IDBcblx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyB1dGlscy5weCgyKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICsgdXRpbHMucHgoMSlcblx0XHRcdGZpcnN0Um93S2V5V2lkdGggPSBmaXJzdFJvd0tleVdpZHRoICsga2V5LndpZHRoXG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzBdLmVuZEluZGV4ICYmIGluZGV4IDw9IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzFdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsxXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChzZWNvbmRSb3dLZXlXaWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyB1dGlscy5weCgxKVxuXHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGtleS53aWR0aFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzJdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXG5cdFx0cGF0aC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7QHBhdGhXaWR0aH1weCcgaGVpZ2h0PScje0BwYXRoSGVpZ2h0fScgdmlld0JveD0nMCAwIDYzIDExNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDx0aXRsZT5SZWN0YW5nbGUgNDQgQ29weTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz5cblx0XHRcdFx0XHQ8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0XHRcdDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdTb3VyY2VBbHBoYScgdXRpbHN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0XHRcdDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgdXRpbHN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdFx0XHQ8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yMSAwJyBpbj0nc2hhZG93Qmx1ck91dGVyMScgdHlwZT0nbWF0cml4JyB1dGlsc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdFx0XHQ8ZmVNZXJnZT5cblx0XHRcdFx0XHRcdFx0PGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0XHRcdDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHRcdDwvZmVNZXJnZT5cblx0XHRcdFx0XHQ8L2ZpbHRlcj5cblx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTguMDAwMDAwLCAtMjQwLjAwMDAwMCknIHN0cm9rZT0nI0M3QzdDNycgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlLXdpZHRoPScwLjUnIFxuXHRcdFx0XHRcdGZpbGw9JyNGRkZGRkYnIG9wYWNpdHk9JzAuOTk4MzY3NTM3Jz5cblx0XHRcdFx0XHQgPHBhdGggZD0nTTEzNCwzMDYgQzEzNCwzMDYgMTIxLDI5NSAxMjEsMjkwIEMxMjEsMjc5LjYxNjc4OCAxMjEsMjUzLjAwMTQ1NiAxMjEsMjUzLjAwMTQ1NiBDMTIxLDI0Ny40Nzc4MDQgMTI1LjQ4NTgzMiwyNDMgMTMxLjAwMjc3NCwyNDMgTDE2Ny44NjIxMjcsMjQzIEMxNzMuMzg2NTA3LDI0MyAxNzcuODgwODYyLDI0Ny40Njk5MDUgXG5cdFx0XHRcdFx0IDE3Ny45MDAwNDQsMjUyLjk5NzI3MSBDMTc3LjkwMDA0NCwyNTIuOTk3MjcxIDE3OCwyODAgMTc3Ljk5OTk5OSwyOTAgQzE3Ny45OTk5OTksMjk1LjAwNjU1MyAxNjUsMzA2IDE2NSwzMDYgTDE2NSwzNDYuMDQ5NTk0IFxuXHRcdFx0XHRcdCBDMTY1LDM0OC44MDY4MDcgMTYyLjc3MDU1NiwzNTEuMDQxOTY5IDE2MC4wMDIwOTgsMzUxLjA0MTk2OSBMMTM4Ljk5NzkwMiwzNTEuMDQxOTY5IFxuXHRcdFx0XHRcdCAgQzEzNi4yMzc2MzcsMzUxLjA0MTk2OSAxMzQsMzQ4LjgwODMzMSAxMzQsMzQ2LjA0OTU5NCBMMTM0LDMwNiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDI5Ny4wMjA5ODUpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTE0OS41MDAwMDAsIC0yOTcuMDIwOTg1KSAnPlxuXHRcdFx0XHRcdCAgPC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRrZXlzQXJyYXkucHVzaCBrZXlcblxuXHRcdGlmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiICYmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZC1wcm9cIlxuXHRcdFx0IyMgaVBob25lIEtleSBBbmltYXRpb25zXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdGtleVBvcFVwLnZpc2libGUgPSB0cnVlXHRcblx0XHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXG5cblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hNb3ZlLCAtPlxuXHRcdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcdFxuXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdGVsc2UgXG5cdFx0XHQjaVBhZCBLZXkgQW5pbWF0aW9uc1xuXHRcdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRALmJhY2tncm91bmRDb2xvciA9IHV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRALmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdHNoaWZ0SWNvbi5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSB1dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2hpZnRJY29uMi5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSB1dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXG5cdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblxuXHRcdFx0XHRpZiBzZXR1cC5vdXRwdXRcblx0XHRcdFx0XHRAbmV3VGV4dCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwgKyBALm5hbWUudG9VcHBlckNhc2UoKVxuXHRcdFx0XHRcdGV4cG9ydHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpAbmV3VGV4dF0pXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0XHRcdEBuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbCArIEAubmFtZVxuXHRcdFx0XHRcdGV4cG9ydHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpAbmV3VGV4dF0pXG5cblx0Ym9hcmQua2V5c0FycmF5ID0ga2V5c0FycmF5XG5cblx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXHQjIyBTSElGVCBLRVlcblxuXHRzaGlmdEtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwic2hpZnRcIiwgYm9yZGVyUmFkaXVzOmJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cywgY29sb3I6dXRpbHMuY29sb3IoXCJibGFja1wiKSwgYmFja2dyb3VuZENvbG9yOnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5zaWRlS2V5LCB5Oihib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICogMilcblx0c2hpZnRLZXkuY29uc3RyYWludHMgPSAobGVhZGluZzp1dGlscy5wdChib2FyZFNwZWNzLnBhZGRpbmcucm93MSkpXG5cdHNoaWZ0SWNvbiA9IG5ldyBMYXllciB3aWR0aDp1dGlscy5weCgyMCksIGhlaWdodDp1dGlscy5weCgxOSksIHN1cGVyTGF5ZXI6c2hpZnRLZXksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6Ym9hcmRTcGVjcy5zaGlmdEljb24ueCwgeTpib2FyZFNwZWNzLnNoaWZ0SWNvbi55XG5cdHNoaWZ0SWNvbi5odG1sID0gaWNvbkxpYnJhcnkuc2hpZnQub2ZmXG5cblx0c2hpZnRJY29uLnN0YXRlcy5hZGRcblx0XHRcIm9uXCI6XG5cdFx0XHRodG1sOiBpY29uTGlicmFyeS5zaGlmdC5vblxuXHRzaGlmdEljb24uc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHQgIHRpbWU6IC4wMVxuXG5cdHNoaWZ0S2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IHV0aWxzLnB4KDE2KSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDogYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICsgXCJweFwiXG5cblx0XHR9XG5cblxuXG5cdHNoaWZ0S2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZSBcblx0XHRcdHdoZW4gMVxuXHRcdFx0XHRzaGlmdEljb24uc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXHRcblx0XHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IHV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSB1dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdFx0Ym94LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0d2hlbiAyXG5cdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdGtleS5odG1sID0gdGhpcmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRrZXkubmFtZSA9IHRoaXJkQXJyYXlbaW5kZXhdXG5cdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAzXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIjEyM1wiXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIjEyM1wiXG5cdFx0XHR3aGVuIDNcblx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0aWYgaW5kZXggPCAyN1xuXHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAyNlxuXHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblxuXHRib2FyZC5rZXlzLnNoaWZ0ID0gc2hpZnRLZXlcblx0Ym9hcmQua2V5cy5zaGlmdC5pY29uID0gc2hpZnRJY29uXG5cblx0IyMgREVMRVRFIEtFWVxuXG5cdGRlbGV0ZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3I6dXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6dXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBuYW1lOlwiZGVsZXRlXCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Muc2lkZUtleSwgeTooYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCAqIDIgLSBib2FyZFNwZWNzLmlQYWREZWxldGVPZmZzZXQpXG5cblxuXHRkZWxldGVLZXkuY29uc3RyYWludHMgPSAodHJhaWxpbmc6dXRpbHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpLzIpXG5cdGRlbGV0ZUljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpkZWxldGVLZXksIHdpZHRoOnV0aWxzLnB4KDI0KSwgaGVpZ2h0OnV0aWxzLnB4KDE4KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLmRlbGV0ZUljb24ueCwgeTpib2FyZFNwZWNzLmRlbGV0ZUljb24ueVxuXHRcblx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRkZWxldGVLZXkud2lkdGggPSBkZWxldGVLZXkud2lkdGggKyB1dGlscy5weCg1KVxuXG5cdGRlbGV0ZUljb24uc3RhdGVzLmFkZCBcblx0XHRcIm9uXCI6IFxuXHRcdFx0aHRtbDogaWNvbkxpYnJhcnkuZGVsZXRlLm9uXG5cblx0ZGVsZXRlSWNvbi5zdGF0ZXMuYWRkXG5cdFx0b2ZmOiBcblx0XHRcdGh0bWw6IGljb25MaWJyYXJ5LmRlbGV0ZS5vZmZcblxuXG5cdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cblx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gdXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cblx0XHRpZiBzZXR1cC5vdXRwdXRcblx0XHRcdGluaXRpYWxMZW5ndGggPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sLmxlbmd0aFxuXHRcdFx0bmV3VGV4dCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwuc2xpY2UoMCwgLTEpXG5cdFx0XHRleHBvcnRzLnVwZGF0ZShzZXR1cC5vdXRwdXQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRlbmRMZW5ndGggPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sLmxlbmd0aFxuXHRcdFx0aWYgaW5pdGlhbExlbmd0aCA9PSBlbmRMZW5ndGggXG5cdFx0XHRcdG5ld1RleHQgPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sLnNsaWNlKDAsIC02KVxuXHRcdFx0XHRleHBvcnRzLnVwZGF0ZShzZXR1cC5vdXRwdXQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRpZiBzZXR1cC5vdXRwdXQudGV4dC5odG1sID09IFwiXCJcblx0XHRcdFx0c2V0dXAub3V0cHV0LnBsYWNlaG9sZGVyLnZpc2libGUgPSB0cnVlXG5cblxuXG5cdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvZmZcIilcblxuXHRib2FyZC5rZXlzLmRlbGV0ZSA9IGRlbGV0ZUtleVxuXHRib2FyZC5rZXlzLmRlbGV0ZS5pY29uID0gZGVsZXRlSWNvblxuXG5cdCMjIEVYVFJBIEtFWVNcblxuXHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdGtleWJvYXJkS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJkaXNtaXNzXCIsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsIGJhY2tncm91bmRDb2xvcjp1dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTp1dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Muc2lkZUtleVxuXHRcdGtleWJvYXJkS2V5LmNvbnN0cmFpbnRzID0ge3RyYWlsaW5nRWRnZXM6ZGVsZXRlS2V5LCBib3R0b206Ym9hcmRTcGVjcy5ib3R0b21Sb3d9XG5cdFx0a2V5Ym9hcmRJY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5Ym9hcmRLZXksIHdpZHRoOnV0aWxzLnB4KDMyLjUpLCBoZWlnaHQ6dXRpbHMucHgoMjMuNSksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRrZXlib2FyZEljb24uaHRtbCA9IGljb25MaWJyYXJ5LmtleWJvYXJkXG5cdFx0a2V5Ym9hcmRJY29uLmNlbnRlcigpXG5cblx0XHRib2FyZC5rZXlzLmRpc21pc3MgPSBrZXlib2FyZEtleVxuXG5cdFx0c2hpZnRLZXkyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJzaGlmdFwiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLGNvbG9yOnV0aWxzLmNvbG9yKFwiYmxhY2tcIiksIGJhY2tncm91bmRDb2xvcjp1dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTp1dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleTIsIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXlcblx0XHRzaGlmdEtleTIuY29uc3RyYWludHMgPSAodHJhaWxpbmdFZGdlczpkZWxldGVLZXksIGJvdHRvbUVkZ2VzOnNoaWZ0S2V5KVxuXHRcdHNoaWZ0SWNvbjIgPSBuZXcgTGF5ZXIgd2lkdGg6dXRpbHMucHgoMjApLCBoZWlnaHQ6dXRpbHMucHgoMTkpLCBzdXBlckxheWVyOnNoaWZ0S2V5MiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLnNoaWZ0SWNvbi54K3V0aWxzLnB4KDEwKSwgeTpib2FyZFNwZWNzLnNoaWZ0SWNvbi55XG5cdFx0c2hpZnRJY29uMi5odG1sID0gaWNvbkxpYnJhcnkuc2hpZnQub2ZmXG5cblx0XHRzaGlmdEtleTIuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogdXRpbHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiAoYm9hcmRTcGVjcy5rZXkuaGVpZ2h0KSArIFwicHhcIlxuXG5cdFx0fVxuXG5cblx0XHRzaGlmdEljb24yLnN0YXRlcy5hZGRcblx0XHRcdFwib25cIjpcblx0XHRcdFx0aHRtbDogaWNvbkxpYnJhcnkuc2hpZnQub25cblx0XHRzaGlmdEljb24yLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cblx0XHQgIHRpbWU6IC4wMVxuXG5cdFx0c2hpZnRJY29uMi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHN3aXRjaCBib2FyZC5rZXlib2FyZFN0YXRlIFxuXHRcdFx0XHR3aGVuIDFcblx0XHRcdFx0XHRzaGlmdEljb24uc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcdFxuXHRcdFx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0XHRcdGJveC5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IHV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gdXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0XHRcdGJveC5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0d2hlbiAyXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHRoaXJkQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRrZXkubmFtZSA9IHRoaXJkQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDNcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIxMjNcIlxuXHRcdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0d2hlbiAzXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cblxuXHRcdG51bUtleTIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcIm51bVwiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBjb2xvcjp1dGlscy5jb2xvcihcImJsYWNrXCIpLCBiYWNrZ3JvdW5kQ29sb3I6dXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6dXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXkyLCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdFx0bnVtS2V5Mi5odG1sID0gXCIuPzEyM1wiXG5cdFx0bnVtS2V5Mi5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiB1dGlscy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdFx0fVxuXHRcdG51bUtleTIuY29uc3RyYWludHMgPSB7dHJhaWxpbmc6W2tleWJvYXJkS2V5LCAxMl0sIGJvdHRvbUVkZ2VzOmtleWJvYXJkS2V5fVxuXG5cdFx0bnVtS2V5Mi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHN3aXRjaCBib2FyZC5rZXlib2FyZFN0YXRlXG5cdFx0XHRcdHdoZW4gMVxuXHRcdFx0XHRcdCMjIENoYW5nZSBMZXR0ZXJzXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRcdGlmIHNlY29uZEFycmF5W2luZGV4XSA9PSBcInVuZG9cIlxuXHRcdFx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGtleS53aWR0aCAqIDIgKyBib2FyZFNwZWNzLnNwYWNlclxuXHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IHV0aWxzLnB4KDE3KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNDAwXG5cdFx0XHRcdFx0XHRcdGlmIHNlY29uZEFycmF5W2luZGV4XSA9PSBcImhpZGVcIlxuXHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPT0gMjZcblx0XHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRcdFx0XHQjIyBIYW5kbGUgbnVtIGtleXMgYW5kIHNoaWZ0IGtleXNcblx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiQUJDXCJcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gZmFsc2VcblxuXHRcdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEljb24yLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0XHRudW1LZXkyLmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0aWYga2V5Lmh0bWwgPT0gXCJ1bmRvXCIgfHwgXCJyZWRvXCJcblx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5rZXkud2lkdGhcblx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC1zaXplXCJdID0gdXRpbHMucHgoMjUpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMzAwXG5cdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGtleS5uYW1lID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSBsZXR0ZXJzQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRpZiBpbmRleCA+IDI1XG5cdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCJcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdFx0bnVtS2V5Mi5odG1sID0gXCIuPzEyM1wiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMVxuXG5cblx0IyMgTlVNIEtFWSB0b3A6dXRpbHMucHQoYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93NCArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCozKVxuXG5cdG51bUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwibnVtXCIsIGJvcmRlclJhZGl1czp1dGlscy5weCg1KSwgYmFja2dyb3VuZENvbG9yOnV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0bnVtS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbTpib2FyZFNwZWNzLmJvdHRvbVJvdywgbGVhZGluZ0VkZ2VzOnNoaWZ0S2V5KVxuXHRpZiBleHBvcnRzLmRldmljZSAhPSBcImlwYWRcIiAmJiBleHBvcnRzLmRldmljZSAhPSBcImlwYWQtcHJvXCJcblx0XHRudW1LZXkuaHRtbCA9IFwiMTIzXCJcblx0ZWxzZSBcblx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRudW1LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IHV0aWxzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXHR9XG5cblx0bnVtS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdHN3aXRjaCBib2FyZC5rZXlib2FyZFN0YXRlXG5cdFx0XHR3aGVuIDFcblx0XHRcdFx0IyMgQ2hhbmdlIExldHRlcnNcdFx0XG5cdFx0XHRcdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdFx0XHRcdHdoZW4gXCJpcGFkXCJcblx0XHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRcdFx0aWYgc2Vjb25kQXJyYXlbaW5kZXhdID09IFwidW5kb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKiAyICsgYm9hcmRTcGVjcy5zcGFjZXJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IHV0aWxzLnB4KDE3KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA0MDBcblx0XHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJoaWRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPT0gMjZcblx0XHRcdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRzaGlmdEljb24yLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0XHRudW1LZXkyLmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJvd0luZGV4ID0gMCBcblx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gMFxuXHRcdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDE5XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRcdFx0XHRcdFx0IyMgMm5kIFJvd1xuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDkgJiYgaW5kZXggPCAyMFxuXHRcdFx0XHRcdFx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChzZWNvbmRSb3dLZXlXaWR0aClcblx0XHRcdFx0XHRcdFx0XHRyb3dJbmRleCsrXG5cdFx0XHRcdFx0XHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGJvYXJkU3BlY3Mua2V5LndpZHRoXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDIwXG5cdFx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6W3NoaWZ0S2V5LCB1dGlscy5wdChib2FyZFNwZWNzLmV4cGFuZGVkU3BhY2VyKV19XG5cdFx0XHRcdFx0XHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDE5XG5cdFx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5leHBhbmRlZEtleVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDIwXG5cdFx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6W2tleXNBcnJheVtpbmRleCAtIDFdLCB1dGlscy5wdChib2FyZFNwZWNzLnNwYWNlcildfVxuXHRcdFx0XHRcdFx0XHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPiAyNFxuXHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cblxuXHRcdFx0XHQjIyBIYW5kbGUgbnVtIGtleXMgYW5kIHNoaWZ0IGtleXNcblx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gZmFsc2VcblxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpZiBleHBvcnRzLmRldmljZSAhPSBcImlwYWRcIlxuXHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gMFxuXHRcdFx0XHRcdHJvd0luZGV4ID0gMFxuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5rZXkud2lkdGhcblx0XHRcdFx0XHRcdGlmIGluZGV4ID4gOSAmJiBpbmRleCA8IDE5XG5cdFx0XHRcdFx0XHRcdGtleS54ID0gcm93c01hcFsxXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChzZWNvbmRSb3dLZXlXaWR0aClcblx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRcdFx0XHRcdFx0cm93SW5kZXgrK1xuXHRcdFx0XHRcdFx0XHRzZWNvbmRSb3dLZXlXaWR0aCA9IHNlY29uZFJvd0tleVdpZHRoICsga2V5LndpZHRoXG5cdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAxOVxuXHRcdFx0XHRcdFx0XHRrZXkueSA9IHJvd3NNYXBbMl0ubWFyZ2luVG9wICsga2V5LmhlaWdodCAqIDJcblx0XHRcdFx0XHRcdGlmIGluZGV4ID49IDE5XG5cdFx0XHRcdFx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzJdLnN0YXJ0SW5kZXhcblx0XHRcdFx0XHRcdFx0a2V5LnggPSByb3dzTWFwWzJdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzJdLm1hcmdpblRvcCArIGtleS5oZWlnaHQgKiAyXG5cdFx0XHRcdFx0XHRcdGtleS5jb25zdHJhaW50cyA9IHt9XG5cblx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0aWYga2V5Lmh0bWwgPT0gXCJ1bmRvXCIgfHwgXCJyZWRvXCJcblx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGJvYXJkU3BlY3Mua2V5LndpZHRoXG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXNpemVcIl0gPSB1dGlscy5weCgyNSkgKyBcInB4XCJcblx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMzAwXG5cdFx0XHRcdFx0a2V5LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0a2V5Lm5hbWUgPSBsZXR0ZXJzQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0a2V5Lmh0bWwgPSBsZXR0ZXJzQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0aWYgaW5kZXggPiAyNVxuXHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCJcIlxuXHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCJcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHQjIyBFTU9KSSBLRVlcblxuXHRlbW9qaUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwiZW1vamlcIiwgYm9yZGVyUmFkaXVzOnV0aWxzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6dXRpbHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6dXRpbHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0ZW1vamlLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltudW1LZXksIDZdKVxuXHRlbW9qaUljb24gPSBuZXcgTGF5ZXIgd2lkdGg6dXRpbHMucHgoMjApLCBoZWlnaHQ6dXRpbHMucHgoMTkpLCBzdXBlckxheWVyOmVtb2ppS2V5LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmJvYXJkU3BlY3MuZW1vamlJY29uLngsIHk6Ym9hcmRTcGVjcy5lbW9qaUljb24ueVxuXHRlbW9qaUljb24uaHRtbCA9IGljb25MaWJyYXJ5LmVtb2ppXG5cblxuXG5cdCMjIFJFVFVSTiBLRVlcblxuXHRyZXR1cm5LZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOnV0aWxzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6dXRpbHMuY29sb3Ioc2V0dXAucmV0dXJuQ29sb3IpLCBzaGFkb3dZOnV0aWxzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiLCBuYW1lOlwicmV0dXJuXCIsIHdpZHRoOmJvYXJkU3BlY3MucmV0dXJuS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdGlmIHNldHVwLnJldHVybkNvbG9yICE9IFwibGlnaHQta2V5XCJcblx0XHRyZXR1cm5LZXkuY29sb3IgPSBleHBvcnRzLnNldFRleHRDb2xvcih1dGlscy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvcikpXG5cdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0cmV0dXJuS2V5LmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nRWRnZXM6ZGVsZXRlS2V5LCB0b3A6dXRpbHMucHQoYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MiArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCkgKVxuXHRlbHNlXG5cdFx0cmV0dXJuS2V5LmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nOnV0aWxzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKS8yLCBib3R0b21FZGdlczpudW1LZXkpXG5cdHJldHVybktleS5odG1sID0gc2V0dXAucmV0dXJuVGV4dFxuXHRyZXR1cm5LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IHV0aWxzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdH1cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdHN0b3JlZFRleHRDb2xvciA9IHJldHVybktleS5jb2xvclxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0cmV0dXJuS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdHJldHVybktleS5jb2xvciA9IHV0aWxzLmNvbG9yKFwiYmxhY2tcIilcblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRyZXR1cm5LZXkuYmFja2dyb3VuZENvbG9yID0gdXRpbHMuY29sb3Ioc2V0dXAucmV0dXJuQ29sb3IpXG5cdFx0cmV0dXJuS2V5LmNvbG9yID0gc3RvcmVkVGV4dENvbG9yXG5cblx0Ym9hcmQua2V5cy5yZXR1cm4gPSByZXR1cm5LZXlcblxuXG5cdCMjIFNQQUNFIEtFWVxuXG5cdHNwYWNlS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czp1dGlscy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgc2hhZG93WTp1dGlscy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcInNwYWNlXCIsIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0XG5cdGlmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiXG5cdFx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltlbW9qaUtleSwgdXRpbHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpXSwgdHJhaWxpbmc6W3JldHVybktleSwgYm9hcmRTcGVjcy5zcGFjZXJdKVxuXHRcdHNwYWNlS2V5Lmh0bWwgPSBcInNwYWNlXCJcblx0XHRzcGFjZUtleS5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiB1dGlscy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdFx0fVxuXHRlbHNlXG5cdFx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltlbW9qaUtleSwgdXRpbHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpXSwgdHJhaWxpbmc6W251bUtleTIsIGJvYXJkU3BlY3Muc3BhY2VyXSlcblx0Ym9hcmQua2V5c1tcIiZuYnNwO1wiXSA9IHNwYWNlS2V5XG5cdGJvYXJkLmtleXMuc3BhY2UgPSBzcGFjZUtleVxuXHRleHBvcnRzLmxheW91dCgpXG5cblxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSB1dGlscy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXG5cdHNwYWNlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRpZiBzZXR1cC5vdXRwdXRcblx0XHRcdEBuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbCArIFwiJm5ic3A7XCJcblx0XHRcdGV4cG9ydHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpAbmV3VGV4dF0pXG5cblxuXHQjIyBFTU9KSVNcblxuXHRlbW9qaUZvcm1hdHRlciA9IChzdHJpbmcpIC0+XG5cdFx0dW5pY29kZUZvcm1hdCA9IFwiXCJcblx0XHRpZiBzdHJpbmdbMF0gPT0gXCJFXCIgfHwgc3RyaW5nWzBdID09IFwiM1wiIHx8IHN0cmluZ1swXSA9PSBcIjJcIiB8fCBzdHJpbmdbMF0gPT0gXCJDXCJcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdGVsc2UgXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHR1bmljb2RlRm9ybWF0ID0gXCIlRjAlOUZcIlxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0cmV0dXJuIHVuaWNvZGVGb3JtYXRcblxuXHRleHBvcnRzLmxheW91dCgpXG5cdGVtb2ppU2VjdGlvbnMgPSBbXCJGcmVxdW5ldGx5IFVzZWRcIiwgXCJTbWlsZXlzICYgUGVvcGxlXCIsIFwiQW5pbWFscyAmIE5hdHVyZVwiLCBcIkZvb2QgJiBEcmlua1wiLCBcIkFjdGl2aXR5XCIsIFwiVHJhdmVsICYgUGxhY2VzXCIsIFwiT2JqZWN0c1wiLCBcIlN5bWJvbHNcIiwgXCJGbGFnc1wiXVxuXHRyYXdFbW9qaXMgPSBbXCI5OCA4MFwiLCBcIjk4IEFDXCIsIFwiOTggODFcIiwgXCI5OCA4MlwiLCBcIjk4IDgzXCIsIFwiOTggODRcIiwgXCI5OCA4NVwiLCBcIjk4IDg2XCIsIFwiOTggODdcIiwgXCI5OCA4OVwiLCBcIjk4IDhhXCIsIFwiOTkgODJcIiwgXCI5OSA4M1wiLCBcIkUyIDk4IEJBIEVGIEI4IDhGXCIsIFwiOTggOEJcIiAsIFwiOTggOENcIiwgXCI5OCA4RFwiLCBcIjk4IDk4XCIsIFwiOTggOTdcIiwgXCI5OCA5OVwiLCBcIjk4IDlBXCIsIFwiOTggOUNcIiwgXCI5OCA5RFwiLCBcIjk4IDlCXCIsIFwiQTQgOTFcIiwgXCJBNCA5M1wiLCBcIjk4IDhFXCIsIFwiQTQgOTdcIiwgXCI5OCA4RlwiLCBcIjk4IEI2XCIsIFwiOTggOTBcIiwgXCI5OCA5MVwiLCBcIjk4IDkyXCIsIFwiOTkgODRcIiwgXCJBNCA5NFwiLCBcIjk4IEIzXCIsIFwiOTggOUVcIiwgXCI5OCA5RlwiLCBcIjk4IEEwXCIsIFwiOTggQTFcIiwgXCI5OCA5NFwiLCBcIjk4IDk1XCIsIFwiOTkgODFcIiwgXCJFMiA5OCBCOSBFRiBCOCA4RlwiLCBcIjk4IEEzXCIsIFwiOTggOTZcIiwgXCI5OCBBQlwiLCBcIjk4IEE5XCIsIFwiOTggQTRcIiwgXCI5OCBBRVwiLCBcIjk4IEIxXCIsIFwiOTggQThcIiwgXCI5OCBCMFwiLCBcIjk4IEFGXCIsIFwiOTggQTZcIiwgXCI5OCBBN1wiLCBcIjk4IEEyXCIsIFwiOTggQTVcIiwgXCI5OCBBQVwiLCBcIjk4IDkzXCIsIFwiOTggQURcIiwgXCI5OCBCNVwiLCBcIjk4IEIyXCIsIFwiQTQgOTBcIiwgXCI5OCBCN1wiLCBcIkE0IDkyXCIsIFwiQTQgOTVcIiwgXCI5OCBCNFwiLCBcIjkyIEE0XCIsIFwiOTIgQTlcIiwgXCI5OCA4OFwiLCBcIjkxIEJGXCIsIFwiOTEgQjlcIiwgXCI5MSBCQVwiLCBcIjkyIDgwXCIsIFwiOTEgQkJcIiwgXCI5MSBCRFwiLCBcIkE0IDk2XCIsIFwiOTggQkFcIiwgXCI5OCBCOFwiLCBcIjk4IEI5XCIsIFwiOTggQkJcIiwgXCI5OCBCQ1wiLCBcIjk4IEJEXCIsIFwiOTkgODBcIiwgXCI5OCBCRlwiLCBcIjk4IEJFXCIsIFwiOTkgOENcIiwgXCI5MSA4RlwiLCBcIjkxIDhCXCIsIFwiOTEgOERcIiwgXCI5MSA4RVwiLCBcIjkxIDhBXCIsIFwiRTIgOUMgOEFcIiwgXCJFMiA5QyA4QyBFRiBCOCA4RlwiLCBcIjkxIDhDXCIsIFwiRTIgOUMgOEJcIiwgXCI5MSA5MFwiLCBcIjkyIEFBXCIsIFwiOTkgOEZcIiwgXCJFMiA5OCA5RCBFRiBCOCA4RlwiLCBcIjkxIDg2XCIsIFwiOTEgODdcIiwgXCI5MSA4OFwiLCBcIjkxIDg5XCIsIFwiOTYgOTVcIiwgXCI5NiA5MFwiLCBcIkE0IDk4XCIsIFwiOTYgOTZcIiwgXCJFMiA5QyA4RCBFRiBCOCA4RlwiLCBcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIiwgXCI5MSA4MVwiLCBcIjkxIDgwXCIsIFwiOTEgQTRcIiwgXCI5MSBBNVwiLCBcIjk3IEEzXCIsIFwiOTEgQjZcIiwgXCI5MSBBNlwiLCBcIjkxIEE3XCIsIFwiOTEgQThcIiwgXCI5MSBBOVwiLCBcIjkxIEIxXCIsIFwiOTEgQjRcIiwgXCI5MSBCNVwiLCBcIjkxIEIyXCIsIFwiOTEgQjNcIiwgXCI5MSBBRVwiLCBcIjkxIEI3XCIsIFwiOTIgODJcIiwgXCI5NSBCNVwiLCBcIjhFIDg1XCIsIFwiOTEgQkNcIiwgXCI5MSBCOFwiLCBcIjkxIEIwXCIsIFwiOUEgQjZcIiwgXCI4RiA4M1wiLCBcIjkyIDgzXCIsIFwiOTEgQUZcIiwgXCI5MSBBQlwiLCBcIjkxIEFDXCIsIFwiOTEgQURcIiwgXCI5OSA4N1wiLCBcIjkyIDgxXCIsIFwiOTkgODVcIiwgXCI5OSA4NlwiLCBcIjk5IDhCXCIsIFwiOTkgOEVcIiwgXCI5OSA4RFwiLCBcIjkyIDg3XCIsIFwiOTIgODZcIiwgXCI5MiA5MVwiLCBcIjkxIEE5IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkxIEE5XCIsIFwiOTEgQTggRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQThcIiwgXCI5MiA4RlwiLCBcIjkxIEE5IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkyIDhCIEUyIDgwIDhEIEYwIDlGIDkxIEE5XCIsIFwiOTEgQTggRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQThcIiwgXCI5MSBBQVwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSA5QVwiLCBcIjkxIDk1XCIsIFwiOTEgOTZcIiwgXCI5MSA5NFwiLCBcIjkxIDk3XCIsIFwiOTEgOTlcIiwgXCI5MSA5OFwiLCBcIjkyIDg0XCIsIFwiOTIgOEJcIiwgXCI5MSBBM1wiLCBcIjkxIEEwXCIsIFwiOTEgQTFcIiwgXCI5MSBBMlwiLCBcIjkxIDlFXCIsIFwiOTEgOUZcIiwgXCI5MSA5MlwiLCBcIjhFIEE5XCIsIFwiRTIgOUIgOTFcIiwgXCI4RSA5M1wiLCBcIjkxIDkxXCIsIFwiOEUgOTJcIiwgXCI5MSA5RFwiLCBcIjkxIDlCXCIsIFwiOTEgOUNcIiwgXCI5MiBCQ1wiLCBcIjkxIDkzXCIsIFwiOTUgQjZcIiwgXCI5MiA4RFwiLCBcIjhDIDgyXCIsIFwiOUIgOTFcIiwgXCI5MCBCNlwiLCBcIjkwIEIxXCIsIFwiOTAgQURcIiwgXCI5MCBCOVwiLCBcIjkwIEIwXCIsIFwiOTAgQkJcIiwgXCI5MCBCQ1wiLCBcIjkwIEE4XCIsIFwiOTAgQUZcIiwgXCJBNiA4MVwiLCBcIjkwIEFFXCIsIFwiOTAgQjdcIiwgXCI5MCBCRFwiLCBcIjkwIEI4XCIsIFwiOTAgOTlcIiwgXCI5MCBCNVwiLCBcIjk5IDg4XCIsIFwiOTkgODlcIiwgXCI5OSA4QVwiLCBcIjkwIDkyXCIsIFwiOTAgOTRcIiwgXCI5MCBBN1wiLCBcIjkwIEE2XCIsIFwiOTAgQTRcIiwgXCI5MCBBM1wiLCBcIjkwIEE1XCIsIFwiOTAgQkFcIiwgXCI5MCA5N1wiLCBcIjkwIEI0XCIsIFwiQTYgODRcIiwgXCI5MCA5RFwiLCBcIjkwIDlCXCIsIFwiOTAgOENcIiwgXCI5MCA5RVwiLCBcIjkwIDlDXCIsIFwiOTUgQjdcIiwgXCJBNiA4MlwiLCBcIkE2IDgwXCIsIFwiOTAgOERcIiwgXCI5MCBBMlwiLCBcIjkwIEEwXCIsIFwiOTAgOUZcIiwgXCI5MCBBMVwiLCBcIjkwIEFDXCIsIFwiOTAgQjNcIiwgXCI5MCA4QlwiLCBcIjkwIDhBXCIsIFwiOTAgODZcIiwgXCI5MCA4NVwiLCBcIjkwIDgzXCIsIFwiOTAgODJcIiwgXCI5MCA4NFwiLCBcIjkwIEFBXCIsIFwiOTAgQUJcIiwgXCI5MCA5OFwiLCBcIjkwIDkwXCIsIFwiOTAgOEZcIiwgXCI5MCA5MVwiLCBcIjkwIDhFXCIsIFwiOTAgOTZcIiwgXCI5MCA4MFwiLCBcIjkwIDgxXCIsIFwiOTAgOTNcIiwgXCJBNiA4M1wiLCBcIjk1IDhBXCIsIFwiOTAgOTVcIiwgXCI5MCBBOVwiLCBcIjkwIDg4XCIsIFwiOTAgODdcIiwgXCI5MCBCRlwiLCBcIjkwIEJFXCIsIFwiOTAgODlcIiwgXCI5MCBCMlwiLCBcIjhDIEI1XCIsIFwiOEUgODRcIiwgXCI4QyBCMlwiLCBcIjhDIEIzXCIsIFwiOEMgQjRcIiwgXCI4QyBCMVwiLCBcIjhDIEJGXCIsIFwiRTIgOTggOThcIiwgXCI4RCA4MFwiLCBcIjhFIDhEXCIsIFwiOEUgOEJcIiwgXCI4RCA4M1wiLCBcIjhEIDgyXCIsIFwiOEQgODFcIiwgXCI4QyBCRVwiLCBcIjhDIEJBXCIsIFwiOEMgQkFcIiwgXCI4QyBCQlwiLCBcIjhDIEI5XCIsIFwiOEMgQjdcIiwgXCI4QyBCQ1wiLCBcIjhDIEI4XCIsIFwiOTIgOTBcIiwgXCI4RCA4NFwiLCBcIjhDIEIwXCIsIFwiOEUgODNcIiwgXCI5MCA5QVwiLCBcIjk1IEI4XCIsIFwiOEMgOEVcIiwgXCI4QyA4RFwiLCBcIjhDIDhGXCIsIFwiOEMgOTVcIiwgXCI4QyA5NlwiLCBcIjhDIDk3XCIsIFwiOEMgOThcIiwgXCI4QyA5MVwiLCBcIjhDIDkyXCIsIFwiOEMgOTNcIiwgXCI4QyA5NFwiLCBcIjhDIDlBXCIsIFwiOEMgOURcIiwgXCI4QyA5QlwiLCBcIjhDIDlDXCIsIFwiOEMgOUVcIiwgXCI4QyA5OVwiLCBcIkUyIEFEIDkwIEVGIEI4IDhGXCIsIFwiOEMgOUZcIiwgXCI5MiBBQlwiLCBcIkUyIDlDIEE4XCIsIFwiRTIgOTggODQgRUYgQjggOEZcIiwgXCJFMiA5OCA4MCBFRiBCOCA4RlwiLCBcIjhDIEE0XCIsIFwiRTIgOUIgODUgRUYgQjggOEZcIiwgXCI4QyBBNVwiLCBcIjhDIEE2XCIsIFwiRTIgOTggODEgRUYgQjggOEZcIiwgXCI4QyBBN1wiLCBcIkUyIDlCIDg4XCIsIFwiOEMgQTlcIiwgXCJFMiA5QSBBMSBFRiBCOCA4RlwiLCBcIjk0IEE1XCIsIFwiOTIgQTVcIiwgXCJFMiA5RCA4NCBFRiBCOCA4RlwiLCBcIjhDIEE4XCIsIFwiRTIgOTggODMgRUYgQjggOEZcIiwgXCJFMiA5QiA4NCBFRiBCOCA4RlwiLCBcIjhDIEFDXCIsIFwiOTIgQThcIiwgXCI4QyBBQVwiLCBcIjhDIEFCXCIsIFwiRTIgOTggODIgRUYgQjggOEZcIiwgXCJFMiA5OCA5NCBFRiBCOCA4RlwiLCBcIjkyIEE3XCIsIFwiOTIgQTZcIiwgXCI4QyA4QVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI4RCA4RlwiLCBcIjhEIDhFXCIsIFwiOEQgOTBcIiwgXCI4RCA4QVwiLCBcIjhEIDhCXCIsIFwiOEQgOENcIiwgXCI4RCA4OVwiLCBcIjhEIDg3XCIsIFwiOEQgOTNcIiwgXCI4RCA4OFwiLCBcIjhEIDkyXCIsIFwiOEQgOTFcIiwgXCI4RCA4RFwiLCBcIjhEIDg1XCIsIFwiOEQgODZcIiwgXCI4QyBCNlwiLCBcIjhDIEJEXCIsIFwiOEQgQTBcIiwgXCI4RCBBRlwiLCBcIjhEIDlFXCIsIFwiQTcgODBcIiwgXCI4RCA5N1wiLCBcIjhEIDk2XCIsIFwiOEQgQTRcIiwgXCI4RCBCM1wiLCBcIjhEIDk0XCIsIFwiOEQgOUZcIiwgXCI4QyBBRFwiLCBcIjhEIDk1XCIsIFwiOEQgOURcIiwgXCI4QyBBRVwiLCBcIjhDIEFGXCIsIFwiOEQgOUNcIiwgXCI4RCBCMlwiLCBcIjhEIEE1XCIsIFwiOEQgQTNcIiwgXCI4RCBCMVwiLCBcIjhEIDlCXCIsIFwiOEQgOTlcIiwgXCI4RCA5QVwiLCBcIjhEIDk4XCIsIFwiOEQgQTJcIiwgXCI4RCBBMVwiLCBcIjhEIEE3XCIsIFwiOEQgQThcIiwgXCI4RCBBNlwiLCBcIjhEIEIwXCIsIFwiOEUgODJcIiwgXCI4RCBBRVwiLCBcIjhEIEFDXCIsIFwiOEQgQURcIiwgXCI4RCBBQlwiLCBcIjhEIEJGXCIsIFwiOEQgQTlcIiwgXCI4RCBBQVwiLCBcIjhEIEJBXCIsIFwiOEQgQkJcIiwgXCI4RCBCN1wiLCBcIjhEIEI4XCIsIFwiOEQgQjlcIiwgXCI4RCBCRVwiLCBcIjhEIEI2XCIsIFwiOEQgQjVcIiwgXCJFMiA5OCA5NSBFRiBCOCA4RlwiLCBcIjhEIEJDXCIsIFwiOEQgQjRcIiwgXCI4RCBCRFwiLFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUEgQkQgRUYgQjggOEZcIiwgXCI4RiA4MFwiLCBcIjhGIDg4XCIsIFwiRTIgOUEgQkUgRUYgQjggOEZcIiwgXCI4RSBCRVwiLCBcIjhGIDkwXCIsIFwiOEYgODlcIiwgXCI4RSBCMVwiLCBcIkUyIDlCIEIzIEVGIEI4IDhGXCIsIFwiOEYgOENcIiwgXCI4RiA5M1wiLCBcIjhGIEI4XCIsIFwiOEYgOTJcIiwgXCI4RiA5MVwiLCBcIjhGIDhGXCIsIFwiOEUgQkZcIiwgXCJFMiA5QiBCN1wiLCBcIjhGIDgyXCIsIFwiRTIgOUIgQjhcIiwgXCI4RiBCOVwiLCBcIjhFIEEzXCIsIFwiOUEgQTNcIiwgXCI4RiA4QVwiLCBcIjhGIDg0XCIsIFwiOUIgODBcIiwgXCJFMiA5QiBCOVwiLCBcIjhGIDhCXCIsIFwiOUEgQjRcIiwgXCI5QSBCNVwiLCBcIjhGIDg3XCIsIFwiOTUgQjRcIiwgXCI4RiA4NlwiLCBcIjhFIEJEXCIsIFwiOEYgODVcIiwgXCI4RSA5NlwiLCBcIjhFIDk3XCIsIFwiOEYgQjVcIiwgXCI4RSBBQlwiLCBcIjhFIDlGXCIsIFwiOEUgQURcIiwgXCI4RSBBOFwiLCBcIjhFIEFBXCIsIFwiOEUgQTRcIiwgXCI4RSBBN1wiLCBcIjhFIEJDXCIsIFwiOEUgQjlcIiwgXCI4RSBCN1wiLCBcIjhFIEJBXCIsIFwiOEUgQjhcIiwgXCI4RSBCQlwiLCBcIjhFIEFDXCIsIFwiOEUgQUVcIiwgXCI5MSBCRVwiLCBcIjhFIEFGXCIsIFwiOEUgQjJcIiwgXCI4RSBCMFwiLCBcIjhFIEIzXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUEgOTdcIiwgXCI5QSA5NVwiLCBcIjlBIDk5XCIsIFwiOUEgOENcIiwgXCI5QSA4RVwiLCBcIjhGIDhFXCIsIFwiOUEgOTNcIiwgXCI5QSA5MVwiLCBcIjlBIDkyXCIsIFwiOUEgOTBcIiwgXCI5QSA5QVwiLCBcIjlBIDlCXCIsIFwiOUEgOUNcIixcIjhGIDhEXCIsIFwiOUEgQjJcIiwgXCI5QSBBOFwiLCBcIjlBIDk0XCIsIFwiOUEgOERcIiwgXCI5QSA5OFwiLCBcIjlBIDk2XCIsIFwiOUEgQTFcIiwgXCI5QSBBMFwiLCBcIjlBIEFGXCIsIFwiOUEgODNcIiwgXCI5QSA4QlwiLCBcIjlBIDlEXCIsIFwiOUEgODRcIiwgXCI5QSA4NVwiLCBcIjlBIDg4XCIsIFwiOUEgOUVcIiwgXCI5QSA4MlwiLCBcIjlBIDg2XCIsIFwiOUEgODdcIiwgXCI5QSA4QVwiLCBcIjlBIDg5XCIsIFwiOUEgODFcIiwgXCI5QiBBOVwiLCBcIkUyIDlDIDg4IEVGIEI4IDhGXCIsIFwiOUIgQUJcIiwgXCI5QiBBQ1wiLCBcIkUyIDlCIEI1IEVGIEI4IDhGXCIsIFwiOUIgQTVcIiwgXCI5QSBBNFwiLCBcIkUyIDlCIEI0XCIsIFwiOUIgQjNcIiwgXCI5QSA4MFwiLCBcIjlCIEIwXCIsIFwiOTIgQkFcIiwgXCJFMiA5QSA5MyBFRiBCOCA4RlwiLCBcIjlBIEE3XCIsIFwiRTIgOUIgQkQgRUYgQjggOEZcIiwgXCI5QSA4RlwiLCBcIjlBIEE2XCIsIFwiOUEgQTVcIiwgXCI4RiA4MVwiLCBcIjlBIEEyXCIsIFwiOEUgQTFcIiwgXCI4RSBBMlwiLCBcIjhFIEEwXCIsIFwiOEYgOTdcIiwgXCI4QyA4MVwiLCBcIjk3IEJDXCIsIFwiOEYgQURcIiwgXCJFMiA5QiBCMiBFRiBCOCA4RlwiLCBcIjhFIDkxXCIsIFwiRTIgOUIgQjBcIiwgXCI4RiA5NFwiLCBcIjk3IEJCXCIsIFwiOEMgOEJcIiwgXCI5NyBCRVwiLCBcIjhGIDk1XCIsIFwiRTIgOUIgQkEgRUYgQjggOEZcIiwgXCI4RiA5RVwiLCBcIjlCIEEzXCIsIFwiOUIgQTRcIiwgXCI4QyA4NVwiLCBcIjhDIDg0XCIsIFwiOEYgOUNcIiwgXCI4RiA5NlwiLCBcIjhGIDlEXCIsIFwiOEMgODdcIiwgXCI4QyA4NlwiLCBcIjhGIDk5XCIsIFwiOEMgODNcIiwgXCI4QyA4OVwiLCBcIjhDIDhDXCIsIFwiOEMgQTBcIiwgXCI4RSA4N1wiLCBcIjhFIDg2XCIsIFwiOEMgODhcIiwgXCI4RiA5OFwiLCBcIjhGIEIwXCIsIFwiOEYgQUZcIiwgXCI4RiA5RlwiLCBcIjk3IEJEXCIsIFwiOEYgQTBcIiwgXCI4RiBBMVwiLCBcIjhGIDlBXCIsIFwiOEYgQTJcIiwgXCI4RiBBQ1wiLCBcIjhGIEEzXCIsIFwiOEYgQTRcIiwgXCI4RiBBNVwiLCBcIjhGIEE2XCIsIFwiOEYgQThcIiwgXCI4RiBBQVwiLCBcIjhGIEFCXCIsIFwiOEYgQTlcIiwgXCI5MiA5MlwiLCBcIjhGIDlCXCIsIFwiRTIgOUIgQUEgRUYgQjggOEZcIiwgXCI5NSA4Q1wiLCBcIjk1IDhEXCIsIFwiOTUgOEJcIiwgXCJFMiA5QiBBOVwiLCBcIkUyIDhDIDlBIEVGIEI4IDhGXCIsIFwiOTMgQjFcIiwgXCI5MyBCMlwiLCBcIjkyIEJCXCIsIFwiRTIgOEMgQTggRUYgQjggOEZcIiwgXCI5NiBBNVwiLCBcIjk2IEE4XCIsIFwiOTYgQjFcIiwgXCI5NiBCMlwiLCBcIjk1IEI5XCIsIFwiOTcgOUNcIiwgXCI5MiBCRFwiLCBcIjkyIEJFXCIsIFwiOTIgQkZcIiwgXCI5MyA4MFwiLCBcIjkzIEJDXCIsIFwiOTMgQjdcIiwgXCI5MyBCOFwiLCBcIjkzIEI5XCIsIFwiOEUgQTVcIiwgXCI5MyBCRFwiLCBcIjhFIDlFXCIsIFwiOTMgOUVcIiwgXCJFMiA5OCA4RSBFRiBCOCA4RlwiLCBcIjkzIDlGXCIsIFwiOTMgQTBcIiwgXCI5MyBCQVwiLCBcIjkzIEJCXCIsIFwiOEUgOTlcIiwgXCI4RSA5QVwiLCBcIjhFIDlCXCIsIFwiRTIgOEYgQjFcIiwgXCJFMiA4RiBCMlwiLCBcIkUyIDhGIEIwXCIsIFwiOTUgQjBcIiwgXCJFMiA4RiBCM1wiLCBcIkUyIDhDIDlCIEVGIEI4IDhGXCIsIFwiOTMgQTFcIiwgXCI5NCA4QlwiLCBcIjk0IDhDXCIsIFwiOTIgQTFcIiwgXCI5NCBBNlwiLCBcIjk1IEFGXCIsIFwiOTcgOTFcIiwgXCI5QiBBMlwiLCBcIjkyIEI4XCIsIFwiOTIgQjVcIiwgXCI5MiBCNFwiLCBcIjkyIEI2XCIsIFwiOTIgQjdcIiwgXCI5MiBCMFwiLCBcIjkyIEIzXCIsIFwiOTIgOEVcIiwgXCJFMiA5QSA5NlwiLCBcIjk0IEE3XCIsIFwiOTQgQThcIiwgXCJFMiA5QSA5MlwiLCBcIjlCIEEwXCIsIFwiRTIgOUIgOEZcIiwgXCI5NCBBOVwiLCBcIkUyIDlBIDk5XCIsIFwiRTIgOUIgOTNcIiwgXCI5NCBBQlwiLCBcIjkyIEEzXCIsIFwiOTQgQUFcIiwgXCI5NyBBMVwiLCBcIkUyIDlBIDk0XCIsIFwiOUIgQTFcIiwgXCI5QSBBQ1wiLCBcIkUyIDk4IEEwIEVGIEI4IDhGXCIsIFwiRTIgOUEgQjBcIiwgXCJFMiA5QSBCMVwiLCBcIjhGIEJBXCIsIFwiOTQgQUVcIiwgXCI5MyBCRlwiLCBcIjkyIDg4XCIsIFwiRTIgOUEgOTdcIiwgXCI5NCBBRFwiLCBcIjk0IEFDXCIsIFwiOTUgQjNcIiwgXCI5MiA4QVwiLCBcIjkyIDg5XCIsIFwiOEMgQTFcIiwgXCI4RiBCN1wiLCBcIjk0IDk2XCIsIFwiOUEgQkRcIiwgXCI5QSBCRlwiLCBcIjlCIDgxXCIsIFwiOTQgOTFcIiwgXCI5NyA5RFwiLCBcIjlCIDhCXCIsIFwiOUIgOENcIiwgXCI5QiA4RlwiLCBcIjlBIEFBXCIsIFwiOUIgOEVcIiwgXCI5NiBCQ1wiLCBcIjk3IEJBXCIsIFwiRTIgOUIgQjFcIiwgXCI5NyBCRlwiLCBcIjlCIDhEXCIsIFwiOEUgODhcIiwgXCI4RSA4RlwiLCBcIjhFIDgwXCIsIFwiOEUgODFcIiwgXCI4RSA4QVwiLCBcIjhFIDg5XCIsIFwiOEUgOEVcIiwgXCI4RSA5MFwiLCBcIjhFIDhDXCIsIFwiOEYgQUVcIiwgXCJFMiA5QyA4OSBFRiBCOCA4RlwiLCBcIjkzIEE5XCIsIFwiOTMgQThcIiwgXCI5MyBBN1wiLCBcIjkyIDhDXCIsIFwiOTMgQUVcIiwgXCI5MyBBQVwiLCBcIjkzIEFCXCIsIFwiOTMgQUNcIiwgXCI5MyBBRFwiLCBcIjkzIEE2XCIsIFwiOTMgQUZcIiwgXCI5MyBBNVwiLCBcIjkzIEE0XCIsIFwiOTMgOUNcIiwgXCI5MyA4M1wiLCBcIjkzIDkxXCIsIFwiOTMgOEFcIiwgXCI5MyA4OFwiLCBcIjkzIDg5XCIsIFwiOTMgODRcIiwgXCI5MyA4NVwiLCBcIjkzIDg2XCIsIFwiOTcgOTNcIiwgXCI5MyA4N1wiLCBcIjk3IDgzXCIsIFwiOTcgQjNcIiwgXCI5NyA4NFwiLCBcIjkzIDhCXCIsIFwiOTcgOTJcIiwgXCI5MyA4MVwiLCBcIjkzIDgyXCIsIFwiOTcgODJcIiwgXCI5NyA5RVwiLCBcIjkzIEIwXCIsIFwiOTMgOTNcIiwgXCI5MyA5NVwiLCBcIjkzIDk3XCIsIFwiOTMgOThcIiwgXCI5MyA5OVwiLCBcIjkzIDk0XCIsIFwiOTMgOTJcIiwgXCI5MyA5QVwiLCBcIjkzIDk2XCIsIFwiOTQgOTdcIiwgXCI5MyA4RVwiLCBcIjk2IDg3XCIsIFwiRTIgOUMgODIgRUYgQjggOEZcIiwgXCI5MyA5MFwiLCBcIjkzIDhGXCIsIFwiOTMgOENcIiwgXCI5MyA4RFwiLCBcIjlBIEE5XCIsIFwiOEYgQjNcIiwgXCI4RiBCNFwiLCBcIjk0IDkwXCIsIFwiOTQgOTJcIiwgXCI5NCA5M1wiLCBcIjk0IDhGXCIsIFwiOTYgOEFcIiwgXCI5NiA4QlwiLCBcIkUyIDlDIDkyIEVGIEI4IDhGXCIsIFwiOTMgOURcIiwgXCJFMiA5QyA4RiBFRiBCOCA4RlwiLCBcIjk2IDhEXCIsIFwiOTYgOENcIiwgXCI5NCA4RFwiLCBcIjk0IDhFXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIkUyIDlEIEE0IEVGIEI4IDhGXCIsIFwiOTIgOUJcIiwgXCI5MiA5QVwiLCBcIjkyIDk5XCIsIFwiOTIgOUNcIiwgXCI5MiA5NFwiLCBcIkUyIDlEIEEzIEVGIEI4IDhGXCIsIFwiOTIgOTVcIiwgXCI5MiA5RVwiLCBcIjkyIDkzXCIsIFwiOTIgOTdcIiwgXCI5MiA5NlwiLCBcIjkyIDk4XCIsIFwiOTIgOURcIiwgXCI5MiA5RlwiLCBcIkUyIDk4IEFFIEVGIEI4IDhGXCIsIFwiRTIgOUMgOUQgRUYgQjggOEZcIiwgXCJFMiA5OCBBQSBFRiBCOCA4RlwiLCBcIjk1IDg5XCIsIFwiRTIgOTggQjggRUYgQjggOEZcIiwgXCJFMiA5QyBBMSBFRiBCOCA4RlwiLCBcIjk0IEFGXCIsIFwiOTUgOEVcIiwgXCJFMiA5OCBBRiBFRiBCOCA4RlwiLCBcIkUyIDk4IEE2IEVGIEI4IDhGXCIsIFwiOUIgOTBcIiwgXCJFMiA5QiA4RVwiLCBcIkUyIDk5IDg4IEVGIEI4IDhGXCIsIFwiRTIgOTkgODkgRUYgQjggOEZcIiwgXCJFMiA5OSA4QSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhCIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEMgRUYgQjggOEZcIiwgXCJFMiA5OSA4RCBFRiBCOCA4RlwiLCBcIkUyIDk5IDhFIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEYgRUYgQjggOEZcIiwgXCJFMiA5OSA5MCBFRiBCOCA4RlwiLCBcIkUyIDk5IDkxIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTIgRUYgQjggOEZcIiwgXCJFMiA5OSA5MyBFRiBCOCA4RlwiLCBcIjg2IDk0XCIsIFwiRTIgOUEgOUJcIiwgXCI4OCBCM1wiLCBcIjg4IEI5XCIsIFwiRTIgOTggQTIgRUYgQjggOEZcIiwgXCJFMiA5OCBBMyBFRiBCOCA4RlwiLCBcIjkzIEI0XCIsIFwiOTMgQjNcIiwgXCI4OCBCNlwiLCBcIjg4IDlBIEVGIEI4IDhGXCIsIFwiODggQjhcIiwgXCI4OCBCQVwiLCBcIjg4IEI3IEVGIEI4IDhGXCIsIFwiRTIgOUMgQjQgRUYgQjggOEZcIiwgXCI4NiA5QVwiLCBcIjg5IDkxXCIsIFwiOTIgQUVcIiwgXCI4OSA5MFwiLCBcIkUzIDhBIDk5IEVGIEI4IDhGXCIsIFwiRTMgOEEgOTcgRUYgQjggOEZcIiwgXCI4OCBCNFwiLCBcIjg4IEI1XCIsIFwiODggQjJcIiwgXCI4NSBCMCBFRiBCOCA4RlwiLCBcIjg1IEIxIEVGIEI4IDhGXCIsIFwiODYgOEVcIiwgXCI4NiA5MVwiLCBcIjg1IEJFIEVGIEI4IDhGXCIsIFwiODYgOThcIiwgXCJFMiA5QiA5NCBFRiBCOCA4RlwiLCBcIjkzIDlCXCIsIFwiOUEgQUJcIiwgXCJFMiA5RCA4Q1wiLCBcIkUyIEFEIDk1IEVGIEI4IDhGXCIsIFwiOTIgQTJcIiwgXCJFMiA5OSBBOCBFRiBCOCA4RlwiLCBcIjlBIEI3XCIsIFwiOUEgQUZcIiwgXCI5QSBCM1wiLCBcIjlBIEIxXCIsIFwiOTQgOUVcIiwgXCI5MyBCNVwiLCBcIkUyIDlEIDk3IEVGIEI4IDhGXCIsIFwiRTIgOUQgOTVcIiwgXCJFMiA5RCA5M1wiLCBcIkUyIDlEIDk0XCIsIFwiRTIgODAgQkMgRUYgQjggOEZcIiwgXCJFMiA4MSA4OSBFRiBCOCA4RlwiLCBcIjkyIEFGXCIsIFwiOTQgODVcIiwgXCI5NCA4NlwiLCBcIjk0IEIxXCIsIFwiRTIgOUEgOUNcIiwgXCJFMyA4MCBCRCBFRiBCOCA4RlwiLCBcIkUyIDlBIEEwIEVGIEI4IDhGXCIsIFwiOUEgQjhcIiwgXCI5NCBCMFwiLCBcIkUyIDk5IEJCIEVGIEI4IDhGXCIsIFwiODggQUYgRUYgQjggOEZcIiwgXCI5MiBCOVwiLCBcIkUyIDlEIDg3IEVGIEI4IDhGXCIsIFwiRTIgOUMgQjMgRUYgQjggOEZcIiwgXCJFMiA5RCA4RVwiLCBcIkUyIDlDIDg1XCIsIFwiOTIgQTBcIiwgXCI4QyA4MFwiLCBcIkUyIDlFIEJGXCIsIFwiOEMgOTBcIiwgXCJFMiA5MyA4MiBFRiBCOCA4RlwiLCBcIjhGIEE3XCIsIFwiODggODIgRUYgQjggOEZcIiwgXCI5QiA4MlwiLCBcIjlCIDgzXCIsIFwiOUIgODRcIiwgXCI5QiA4NVwiLCBcIkUyIDk5IEJGIEVGIEI4IDhGXCIsIFwiOUEgQURcIiwgXCI5QSBCRVwiLCBcIjg1IEJGIEVGIEI4IDhGXCIsIFwiOUEgQjBcIiwgXCI5QSBCOVwiLCBcIjlBIEJBXCIsIFwiOUEgQkNcIiwgXCI5QSBCQlwiLCBcIjlBIEFFXCIsIFwiOEUgQTZcIiwgXCI5MyBCNlwiLCBcIjg4IDgxXCIsIFwiODYgOTZcIiwgXCI4NiA5N1wiLCBcIjg2IDk5XCIsIFwiODYgOTJcIiwgXCI4NiA5NVwiLCBcIjg2IDkzXCIsIFwiMzAgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMyIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM1IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzYgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM4IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzkgRUYgQjggOEYgRTIgODMgQTNcIiwgXCI5NCA5RlwiLCBcIjk0IEEyXCIsIFwiRTIgOTYgQjYgRUYgQjggOEZcIiwgXCJFMiA4RiBCOFwiLCBcIkUyIDhGIEFGXCIsIFwiRTIgOEYgQjlcIiwgXCJFMiA4RiBCQVwiLCBcIkUyIDhGIEFEXCIsIFwiRTIgOEYgQUVcIiwgXCJFMiA4RiBBOVwiLCBcIkUyIDhGIEFBXCIsIFwiOTQgODBcIiwgXCI5NCA4MVwiLCBcIjk0IDgyXCIsIFwiRTIgOTcgODAgRUYgQjggOEZcIiwgXCI5NCBCQ1wiLCBcIjk0IEJEXCIsIFwiRTIgOEYgQUJcIiwgXCJFMiA4RiBBQ1wiLCBcIkUyIDlFIEExIEVGIEI4IDhGXCIsIFwiRTIgQUMgODUgRUYgQjggOEZcIiwgXCJFMiBBQyA4NiBFRiBCOCA4RlwiLCBcIkUyIEFDIDg3IEVGIEI4IDhGXCIsIFwiRTIgODYgOTcgRUYgQjggOEZcIiwgXCJFMiA4NiA5OCBFRiBCOCA4RlwiLCBcIkUyIDg2IDk5IEVGIEI4IDhGXCIsIFwiRTIgODYgOTYgRUYgQjggOEZcIiwgXCJFMiA4NiA5NSBFRiBCOCA4RlwiLCBcIkUyIDg2IDk0IEVGIEI4IDhGXCIsIFwiOTQgODRcIiwgXCJFMiA4NiBBQSBFRiBCOCA4RlwiLCBcIkUyIDg2IEE5IEVGIEI4IDhGXCIsIFwiRTIgQTQgQjQgRUYgQjggOEZcIiwgXCJFMiBBNCBCNSBFRiBCOCA4RlwiLCBcIjIzIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMkEgRUYgQjggOEYgRTIgODMgQTNcIiwgXCJFMiA4NCBCOSBFRiBCOCA4RlwiLCBcIjk0IEE0XCIsIFwiOTQgQTFcIiwgXCI5NCBBMFwiLCBcIjk0IEEzXCIsIFwiOEUgQjVcIiwgXCI4RSBCNlwiLCBcIkUzIDgwIEIwIEVGIEI4IDhGXCIsIFwiRTIgOUUgQjBcIiwgXCJFMiA5QyA5NCBFRiBCOCA4RlwiLCBcIjk0IDgzXCIsIFwiRTIgOUUgOTVcIiwgXCJFMiA5RSA5NlwiLCBcIkUyIDlFIDk3XCIsIFwiRTIgOUMgOTYgRUYgQjggOEZcIiwgXCI5MiBCMlwiLCBcIjkyIEIxXCIsIFwiQzIgQTkgRUYgQjggOEZcIiwgXCJDMiBBRSBFRiBCOCA4RlwiLCBcIkUyIDg0IEEyIEVGIEI4IDhGXCIsIFwiOTQgOUFcIiwgXCI5NCA5OVwiLCBcIjk0IDlCXCIsIFwiOTQgOURcIiwgXCI5NCA5Q1wiLCBcIkUyIDk4IDkxIEVGIEI4IDhGXCIsIFwiOTQgOThcIiwgXCJFMiA5QSBBQSBFRiBCOCA4RlwiLCBcIkUyIDlBIEFCIEVGIEI4IDhGXCIsIFwiOTQgQjRcIiwgXCI5NCBCNVwiLCBcIjk0IEI4XCIsIFwiOTQgQjlcIiwgXCI5NCBCNlwiLCBcIjk0IEI3XCIsIFwiOTQgQkFcIiwgXCJFMiA5NiBBQSBFRiBCOCA4RlwiLCBcIkUyIDk2IEFCIEVGIEI4IDhGXCIsIFwiRTIgQUMgOUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QyBFRiBCOCA4RlwiLCBcIjk0IEJCXCIsIFwiRTIgOTcgQkMgRUYgQjggOEZcIiwgXCJFMiA5NyBCQiBFRiBCOCA4RlwiLCBcIkUyIDk3IEJFIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkQgRUYgQjggOEZcIiwgXCI5NCBCMlwiLCBcIjk0IEIzXCIsIFwiOTQgODhcIiwgXCI5NCA4OVwiLCBcIjk0IDhBXCIsIFwiOTQgODdcIiwgXCI5MyBBM1wiLCBcIjkzIEEyXCIsIFwiOTQgOTRcIiwgXCI5NCA5NVwiLCBcIjgzIDhGXCIsIFwiODAgODQgRUYgQjggOEZcIiwgXCJFMiA5OSBBMCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEzIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTUgRUYgQjggOEZcIiwgXCJFMiA5OSBBNiBFRiBCOCA4RlwiLCBcIjhFIEI0XCIsIFwiOTEgODEgRTIgODAgOEQgRjAgOUYgOTcgQThcIiwgXCI5MiBBRFwiLCBcIjk3IEFGXCIsIFwiOTIgQUNcIiwgXCI5NSA5MFwiLCBcIjk1IDkxXCIsIFwiOTUgOTJcIiwgXCI5NSA5M1wiLCBcIjk1IDk0XCIsIFwiOTUgOTVcIiwgXCI5NSA5NlwiLCBcIjk1IDk3XCIsIFwiOTUgOThcIiwgXCI5NSA5OVwiLCBcIjk1IDlBXCIsIFwiOTUgOUJcIiwgXCI5NSA5Q1wiLCBcIjk1IDlEXCIsIFwiOTUgOUVcIiwgXCI5NSA5RlwiLCBcIjk1IEEwXCIsIFwiOTUgQTFcIiwgXCI5NSBBMlwiLCBcIjk1IEEzXCIsIFwiOTUgQTRcIiwgXCI5NSBBNVwiLCBcIjk1IEE2XCIsIFwiOTUgQTdcIiwgXCI5QiA5MVwiLCBcIjg3IEE2IEYwIDlGIDg3IEFCXCIsIFwiODcgQTYgRjAgOUYgODcgQkRcIiwgXCI4NyBBNiBGMCA5RiA4NyBCMVwiLCBcIjg3IEE5IEYwIDlGIDg3IEJGXCIsIFwiODcgQTYgRjAgOUYgODcgQjhcIiwgXCI4NyBBNiBGMCA5RiA4NyBBOVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI0XCIsIFwiODcgQTYgRjAgOUYgODcgQUVcIiwgXCI4NyBBNiBGMCA5RiA4NyBCNlwiLCBcIjg3IEE2IEYwIDlGIDg3IEFDXCIsIFwiODcgQTYgRjAgOUYgODcgQjdcIiwgXCI4NyBBNiBGMCA5RiA4NyBCMlwiLCBcIjg3IEE2IEYwIDlGIDg3IEJDXCIsIFwiODcgQTYgRjAgOUYgODcgQkFcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOVwiLCBcIjg3IEE2IEYwIDlGIDg3IEJGXCIsIFwiODcgQTcgRjAgOUYgODcgQjhcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRFwiLCBcIjg3IEE3IEYwIDlGIDg3IEE5XCIsIFwiODcgQTcgRjAgOUYgODcgQTdcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRVwiLCBcIjg3IEE3IEYwIDlGIDg3IEFBXCIsIFwiODcgQTcgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEIyXCIsIFwiODcgQTcgRjAgOUYgODcgQjlcIiwgXCI4NyBBNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEE3IEYwIDlGIDg3IEI2XCIsIFwiODcgQTcgRjAgOUYgODcgQTZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEI3XCIsIFwiODcgQUUgRjAgOUYgODcgQjRcIiwgXCI4NyBCQiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEIzXCIsIFwiODcgQTcgRjAgOUYgODcgQUNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFFXCIsIFwiODcgQTggRjAgOUYgODcgQkJcIiwgXCI4NyBCMCBGMCA5RiA4NyBBRFwiLCBcIjg3IEE4IEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQTZcIiwgXCI4NyBBRSBGMCA5RiA4NyBBOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJFXCIsIFwiODcgQTggRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIxXCIsIFwiODcgQTggRjAgOUYgODcgQjNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEE4IEYwIDlGIDg3IEE4XCIsIFwiODcgQTggRjAgOUYgODcgQjRcIiwgXCI4NyBCMCBGMCA5RiA4NyBCMlwiLCBcIjg3IEE4IEYwIDlGIDg3IEFDXCIsIFwiODcgQTggRjAgOUYgODcgQTlcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMFwiLCBcIjg3IEE4IEYwIDlGIDg3IEI3XCIsIFwiODcgQUQgRjAgOUYgODcgQjdcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJDXCIsIFwiODcgQTggRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIwXCIsIFwiODcgQTkgRjAgOUYgODcgQUZcIiwgXCI4NyBBOSBGMCA5RiA4NyBCMlwiLCBcIjg3IEE5IEYwIDlGIDg3IEI0XCIsIFwiODcgQUEgRjAgOUYgODcgQThcIiwgXCI4NyBBQSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJCXCIsIFwiODcgQUMgRjAgOUYgODcgQjZcIiwgXCI4NyBBQSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFBIEYwIDlGIDg3IEFBXCIsIFwiODcgQUEgRjAgOUYgODcgQjlcIiwgXCI4NyBBQSBGMCA5RiA4NyBCQVwiLCBcIjg3IEFCIEYwIDlGIDg3IEIwXCIsIFwiODcgQUIgRjAgOUYgODcgQjRcIiwgXCI4NyBBQiBGMCA5RiA4NyBBRlwiLCBcIjg3IEFCIEYwIDlGIDg3IEFFXCIsIFwiODcgQUIgRjAgOUYgODcgQjdcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQlwiLCBcIjg3IEI1IEYwIDlGIDg3IEFCXCIsIFwiODcgQjkgRjAgOUYgODcgQUJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBNlwiLCBcIjg3IEFDIEYwIDlGIDg3IEIyXCIsIFwiODcgQUMgRjAgOUYgODcgQUFcIiwgXCI4NyBBOSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFEXCIsIFwiODcgQUMgRjAgOUYgODcgQUVcIiwgXCI4NyBBQyBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEIxXCIsIFwiODcgQUMgRjAgOUYgODcgQTlcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNVwiLCBcIjg3IEFDIEYwIDlGIDg3IEJBXCIsIFwiODcgQUMgRjAgOUYgODcgQjlcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEIzXCIsIFwiODcgQUMgRjAgOUYgODcgQkNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCRVwiLCBcIjg3IEFEIEYwIDlGIDg3IEI5XCIsIFwiODcgQUQgRjAgOUYgODcgQjNcIiwgXCI4NyBBRCBGMCA5RiA4NyBCMFwiLCBcIjg3IEFEIEYwIDlGIDg3IEJBXCIsIFwiODcgQUUgRjAgOUYgODcgQjhcIiwgXCI4NyBBRSBGMCA5RiA4NyBCM1wiLCBcIjg3IEFFIEYwIDlGIDg3IEE5XCIsIFwiODcgQUUgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEFBXCIsIFwiODcgQUUgRjAgOUYgODcgQjJcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI5XCIsIFwiODcgQTggRjAgOUYgODcgQUVcIiwgXCI4NyBBRiBGMCA5RiA4NyBCMlwiLCBcIjg3IEFGIEYwIDlGIDg3IEI1XCIsIFwiODcgQUYgRjAgOUYgODcgQUFcIiwgXCI4NyBBRiBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJGXCIsIFwiODcgQjAgRjAgOUYgODcgQUFcIiwgXCI4NyBCMCBGMCA5RiA4NyBBRVwiLCBcIjg3IEJEIEYwIDlGIDg3IEIwXCIsIFwiODcgQjAgRjAgOUYgODcgQkNcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIxIEYwIDlGIDg3IEE2XCIsIFwiODcgQjEgRjAgOUYgODcgQkJcIiwgXCI4NyBCMSBGMCA5RiA4NyBBN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEI4XCIsIFwiODcgQjEgRjAgOUYgODcgQjdcIiwgXCI4NyBCMSBGMCA5RiA4NyBCRVwiLCBcIjg3IEIxIEYwIDlGIDg3IEFFXCIsIFwiODcgQjEgRjAgOUYgODcgQjlcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI0XCIsIFwiODcgQjIgRjAgOUYgODcgQjBcIiwgXCI4NyBCMiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJDXCIsIFwiODcgQjIgRjAgOUYgODcgQkVcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQlwiLCBcIjg3IEIyIEYwIDlGIDg3IEIxXCIsIFwiODcgQjIgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBRFwiLCBcIjg3IEIyIEYwIDlGIDg3IEI2XCIsIFwiODcgQjIgRjAgOUYgODcgQjdcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJFIEYwIDlGIDg3IEI5XCIsIFwiODcgQjIgRjAgOUYgODcgQkRcIiwgXCI4NyBBQiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIyIEYwIDlGIDg3IEE5XCIsIFwiODcgQjIgRjAgOUYgODcgQThcIiwgXCI4NyBCMiBGMCA5RiA4NyBCM1wiLCBcIjg3IEIyIEYwIDlGIDg3IEFBXCIsIFwiODcgQjIgRjAgOUYgODcgQjhcIiwgXCI4NyBCMiBGMCA5RiA4NyBBNlwiLCBcIjg3IEIyIEYwIDlGIDg3IEJGXCIsIFwiODcgQjIgRjAgOUYgODcgQjJcIiwgXCI4NyBCMyBGMCA5RiA4NyBBNlwiLCBcIjg3IEIzIEYwIDlGIDg3IEI3XCIsIFwiODcgQjMgRjAgOUYgODcgQjVcIiwgXCI4NyBCMyBGMCA5RiA4NyBCMVwiLCBcIjg3IEIzIEYwIDlGIDg3IEE4XCIsIFwiODcgQjMgRjAgOUYgODcgQkZcIiwgXCI4NyBCMyBGMCA5RiA4NyBBRVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFBXCIsIFwiODcgQjMgRjAgOUYgODcgQUNcIiwgXCI4NyBCMyBGMCA5RiA4NyBCQVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFCXCIsIFwiODcgQjIgRjAgOUYgODcgQjVcIiwgXCI4NyBCMCBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEI0XCIsIFwiODcgQjQgRjAgOUYgODcgQjJcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI1IEYwIDlGIDg3IEJDXCIsIFwiODcgQjUgRjAgOUYgODcgQjhcIiwgXCI4NyBCNSBGMCA5RiA4NyBBNlwiLCBcIjg3IEI1IEYwIDlGIDg3IEFDXCIsIFwiODcgQjUgRjAgOUYgODcgQkVcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFEXCIsIFwiODcgQjUgRjAgOUYgODcgQjNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI1IEYwIDlGIDg3IEI5XCIsIFwiODcgQjUgRjAgOUYgODcgQjdcIiwgXCI4NyBCNiBGMCA5RiA4NyBBNlwiLCBcIjg3IEI3IEYwIDlGIDg3IEFBXCIsIFwiODcgQjcgRjAgOUYgODcgQjRcIiwgXCI4NyBCNyBGMCA5RiA4NyBCQVwiLCBcIjg3IEI3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjFcIiwgXCI4NyBCOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIzXCIsIFwiODcgQjEgRjAgOUYgODcgQThcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMlwiLCBcIjg3IEJCIEYwIDlGIDg3IEE4XCIsIFwiODcgQkMgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI4IEYwIDlGIDg3IEI5XCIsIFwiODcgQjggRjAgOUYgODcgQTZcIiwgXCI4NyBCOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEI3IEYwIDlGIDg3IEI4XCIsIFwiODcgQjggRjAgOUYgODcgQThcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkRcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMFwiLCBcIjg3IEI4IEYwIDlGIDg3IEFFXCIsIFwiODcgQjggRjAgOUYgODcgQTdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEJGIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjhcIiwgXCI4NyBCMCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI4XCIsIFwiODcgQUEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI4IEYwIDlGIDg3IEE5XCIsIFwiODcgQjggRjAgOUYgODcgQjdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRlwiLCBcIjg3IEI4IEYwIDlGIDg3IEFBXCIsIFwiODcgQTggRjAgOUYgODcgQURcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEI5IEYwIDlGIDg3IEJDXCIsIFwiODcgQjkgRjAgOUYgODcgQUZcIiwgXCI4NyBCOSBGMCA5RiA4NyBCRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEFEXCIsIFwiODcgQjkgRjAgOUYgODcgQjFcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIwXCIsIFwiODcgQjkgRjAgOUYgODcgQjRcIiwgXCI4NyBCOSBGMCA5RiA4NyBCOVwiLCBcIjg3IEI5IEYwIDlGIDg3IEIzXCIsIFwiODcgQjkgRjAgOUYgODcgQjdcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE4XCIsIFwiODcgQjkgRjAgOUYgODcgQkJcIiwgXCI4NyBCQSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEJBIEYwIDlGIDg3IEE2XCIsIFwiODcgQTYgRjAgOUYgODcgQUFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBN1wiLCBcIjg3IEJBIEYwIDlGIDg3IEI4XCIsIFwiODcgQkIgRjAgOUYgODcgQUVcIiwgXCI4NyBCQSBGMCA5RiA4NyBCRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJGXCIsIFwiODcgQkIgRjAgOUYgODcgQkFcIiwgXCI4NyBCQiBGMCA5RiA4NyBBNlwiLCBcIjg3IEJCIEYwIDlGIDg3IEFBXCIsIFwiODcgQkIgRjAgOUYgODcgQjNcIiwgXCI4NyBCQyBGMCA5RiA4NyBBQlwiLCBcIjg3IEFBIEYwIDlGIDg3IEFEXCIsIFwiODcgQkUgRjAgOUYgODcgQUFcIiwgXCI4NyBCRiBGMCA5RiA4NyBCMlwiLCBcIjg3IEJGIEYwIDlGIDg3IEJDXCJdXG5cdGVtb2ppc0FycmF5ID0gW11cblx0ZnJlcUVtb2ppc0FycmF5ID0gW11cblx0Zm9yIGVtIGluIHJhd0Vtb2ppc1xuXHRcdGVtb2ppc0FycmF5LnB1c2ggZW1vamlGb3JtYXR0ZXIoZW0pXG5cblx0XG5cdGZyZXF1ZW50bHlVc2VkRW1vamlzUmF3ID0gW1wiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLF1cblx0Zm9yIGVtIGluIGZyZXF1ZW50bHlVc2VkRW1vamlzUmF3XG5cdFx0ZnJlcUVtb2ppc0FycmF5LnB1c2ggZW1vamlGb3JtYXR0ZXIoZW0pXG5cblx0IyBlbW9qaUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0IyBcdGVtb2ppS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHQjIFx0ZW1vamlCRyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjRUNFRUYxXCJcblx0IyBcdGJveCA9IHV0aWxzLnB4KDMwKVxuXHQjIFx0ZW1vamlCRy5jb25zdHJhaW50cyA9ICh0cmFpbGluZzoxLCBsZWFkaW5nOjEsIGJvdHRvbToxLCBoZWlnaHQ6MjU4KVxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0ZW1vamlHYWxsZXkgPSBuZXcgU2Nyb2xsQ29tcG9uZW50IHN1cGVyTGF5ZXI6ZW1vamlCRywgd2lkdGg6ZW1vamlCRy53aWR0aCwgaGVpZ2h0OmVtb2ppQkcuaGVpZ2h0IC0gdXRpbHMucHgoNDApXG5cdCMgXHRlbW9qaUdhbGxleS5zcGVlZFkgPSAwIFxuXHQjIFx0ZW1vamlTcGFjZXIgPSB1dGlscy5weCg2KVxuXHQjIFx0ZW1vamlQaWNrZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImVtb2ppIHBpY2tlclwiLCBzdXBlckxheWVyOmVtb2ppQkdcblx0IyBcdGVtb2ppUGlja2VyLmNvbnN0cmFpbnRzID0gXG5cdCMgXHRcdGxlYWRpbmc6MVxuXHQjIFx0XHR0cmFpbGluZzoxXG5cdCMgXHRcdGJvdHRvbToxXG5cdCMgXHRcdGhlaWdodDo0MlxuXHQjIFx0QUJDID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXJcblx0IyBcdEFCQy5odG1sID0gXCJBQkNcIlxuXHQjIFx0QUJDLnN0eWxlID0ge1xuXHQjIFx0XHRcImZvbnQtc2l6ZVwiIDogdXRpbHMucHgoMTUpICsgXCJweFwiXG5cdCMgXHRcdFwiZm9udC13ZWlnaHRcIiA6IDUwMFxuXHQjIFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0IyBcdFx0XCJjb2xvclwiIDogXCIjNEY1NTVEXCJcblx0IyBcdH1cblx0IyBcdEFCQy5jb25zdHJhaW50cyA9IFxuXHQjIFx0XHRsZWFkaW5nOjEyXG5cdCMgXHRcdGJvdHRvbToxNFxuXHQjIFx0XHR3aWR0aDozMFxuXHQjIFx0XHRoZWlnaHQ6MTVcblxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0cm93ID0gLTFcblx0IyBcdEFCQy5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdCMgXHRcdGVtb2ppQkcuZGVzdHJveSgpXG5cdCMgXHRmcmVxdWVudCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdCMgXHRmcmVxdWVudC5odG1sID0gaWNvbkxpYnJhcnkuZnJlcXVlbnRcblx0IyBcdGZyZXF1ZW50LmNvbnN0cmFpbnRzID0gXG5cdCMgXHRcdGxlYWRpbmcgOiBbQUJDLCAxNV1cblx0IyBcdFx0Ym90dG9tOiAxNFxuXHQjIFx0XHR3aWR0aDoxNlxuXHQjIFx0XHRoZWlnaHQ6MjBcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdHNtaWxleXMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0c21pbGV5cy5odG1sID0gaWNvbkxpYnJhcnkuc21pbGV5c1xuXHQjIFx0c21pbGV5cy5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbZnJlcXVlbnQsIDE1XVxuXHQjIFx0XHRib3R0b206IDE0XG5cdCMgXHRcdHdpZHRoOjE2XG5cdCMgXHRcdGhlaWdodDoyMFxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0YW5pbWFscyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdCMgXHRhbmltYWxzLmh0bWwgPSBpY29uTGlicmFyeS5hbmltYWxzXG5cdCMgXHRhbmltYWxzLmNvbnN0cmFpbnRzID1cblx0IyBcdFx0bGVhZGluZyA6IFtzbWlsZXlzLCAxNV1cblx0IyBcdFx0Ym90dG9tOiAxNFxuXHQjIFx0XHR3aWR0aDoxNlxuXHQjIFx0XHRoZWlnaHQ6MjBcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdGZvb2QgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0Zm9vZC5odG1sID0gaWNvbkxpYnJhcnkuZm9vZFxuXHQjIFx0Zm9vZC5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbYW5pbWFscywgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHRhY3Rpdml0eSA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdCMgXHRhY3Rpdml0eS5odG1sID0gaWNvbkxpYnJhcnkuYWN0aXZpdHlcblx0IyBcdGFjdGl2aXR5LmNvbnN0cmFpbnRzID1cblx0IyBcdFx0bGVhZGluZyA6IFtmb29kLCAxNV1cblx0IyBcdFx0Ym90dG9tOiAxNFxuXHQjIFx0XHR3aWR0aDoxNlxuXHQjIFx0XHRoZWlnaHQ6MjBcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdHRyYXZlbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdCMgXHR0cmF2ZWwuaHRtbCA9IGljb25MaWJyYXJ5LnRyYXZlbFxuXHQjIFx0dHJhdmVsLmNvbnN0cmFpbnRzID1cblx0IyBcdFx0bGVhZGluZyA6IFthY3Rpdml0eSwgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHRvYmplY3RzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0IyBcdG9iamVjdHMuaHRtbCA9IGljb25MaWJyYXJ5Lm9iamVjdHNcblx0IyBcdG9iamVjdHMuY29uc3RyYWludHMgPVxuXHQjIFx0XHRsZWFkaW5nIDogW3RyYXZlbCwgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHRzeW1ib2xzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0IyBcdHN5bWJvbHMuaHRtbCA9IGljb25MaWJyYXJ5LnN5bWJvbHNcblx0IyBcdHN5bWJvbHMuY29uc3RyYWludHMgPVxuXHQjIFx0XHRsZWFkaW5nIDogW29iamVjdHMsIDE1XVxuXHQjIFx0XHRib3R0b206IDE0XG5cdCMgXHRcdHdpZHRoOjE2XG5cdCMgXHRcdGhlaWdodDoyMFxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0ZmxhZ3MgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0ZmxhZ3MuaHRtbCA9IGljb25MaWJyYXJ5LmZsYWdzXG5cdCMgXHRmbGFncy5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbc3ltYm9scywgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cblx0IyBcdGxvYWRFbW9qaXMgPSAoZW0pIC0+XG5cdCMgXHRcdHJvdysrIFxuXHQjIFx0XHRpbmRleCA9IGVtb2ppc0FycmF5LmluZGV4T2YoZW0pXG5cdCMgXHRcdGNvbCA9IE1hdGguZmxvb3IoaW5kZXgvNSlcblx0IyBcdFx0aWYgcm93ID4gNFxuXHQjIFx0XHRcdHJvdyA9IDAgXG5cdCMgXHRcdGVtb2ppID0gbmV3IExheWVyIHg6Y29sKmJveCArIChlbW9qaVNwYWNlciAqIGNvbCkgKyB1dGlscy5weCgzKSwgeTpyb3cqYm94ICsgKGVtb2ppU3BhY2VyICogcm93KSArIHV0aWxzLnB4KDQwKSwgc3VwZXJMYXllcjplbW9qaUdhbGxleS5jb250ZW50LCB3aWR0aDpib3gsIGhlaWdodDpib3gsIG5hbWU6ZGVjb2RlVVJJQ29tcG9uZW50KGVtKSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHQjIFx0XHRlbW9qaS5odG1sID0gZGVjb2RlVVJJQ29tcG9uZW50KGVtKVxuXHQjIFx0XHRlbW9qaS5zdHlsZSA9IHtcblx0IyBcdFx0XHRcImZvbnQtc2l6ZVwiIDogdXRpbHMucHgoMjYpICsgXCJweFwiXG5cdCMgXHRcdFx0XCJsaW5lLWhlaWdodFwiIDogYm94ICsgXCJweFwiXG5cdCMgXHRcdFx0XCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiXG5cdCMgXHRcdH1cblx0IyBcdFx0ZW1vamkub24gRXZlbnRzLkNsaWNrLCAtPlxuXHQjIFx0XHRcdHByaW50IEAubmFtZVxuXHQjIFx0XHRlbW9qaXNMb2FkZWQrK1xuXHQjIFx0XHRwcmludCBlbW9qaXNMb2FkZWRcblxuXHQjIFx0aW5jID0gMjAwXG5cdCMgXHRmaXJzdExvYWQgPSAuMVxuXHQjIFx0dGltZUluYyA9IDJcblx0IyBcdGZ1bGxBbW91bnQgPSBlbW9qaXNBcnJheS5sZW5ndGhcblx0IyBcdGxvYWRzID0gTWF0aC5jZWlsKGZ1bGxBbW91bnQgLyBpbmMpIC0gMVxuXHQjIFx0cGFydGlhbEFtb3VudCA9IGZ1bGxBbW91bnQgJSBpbmNcblx0IyBcdGVtb2ppc0xvYWRlZCA9IDBcblx0IyBcdGZvciBpIGluIFswLi5sb2Fkc11cblx0IyBcdFx0aSsrXG5cdFx0XHRcblx0IyBcdCNTY3JvbGwgTG9hZFxuXHQjIFx0ZW1vamlHYWxsZXkub24gRXZlbnRzLk1vdmUsIC0+XG5cdCMgXHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAyMDAwICYmIGVtb2ppc0xvYWRlZCA8IDQwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsyMDAuLi40MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAyMDAxXG5cdCMgXHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiA1MDAwICYmIGVtb2ppc0xvYWRlZCA8IDYwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs0MDAuLi42MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSA1MDAxXG5cdCMgXHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiA3NTAwICYmIGVtb2ppc0xvYWRlZCA8IDgwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs2MDAuLi44MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSA3NTAxXG5cdCMgXHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAxMDAwMCAmJiBlbW9qaXNMb2FkZWQgPCAxMDAwXG5cdCMgXHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzgwMC4uLjEwMDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAxMDAwMVxuXHQjIFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMTI1MDAgJiYgZW1vamlzTG9hZGVkIDwgMTIwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsxMDAwLi4uMTI5N11cblx0IyBcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdCMgXHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDEyNTAxXG5cblx0IyBcdCNUaW1lIExvYWRcblx0IyBcdFV0aWxzLmRlbGF5IDEsIC0+IFxuXHQjIFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA0MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdCMgXHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMjAwLi4uNDAwXVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdFV0aWxzLmRlbGF5IDIuNSwgLT4gXG5cdCMgXHRcdGlmIGVtb2ppc0xvYWRlZCA8IDYwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0IyBcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs0MDAuLi42MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0VXRpbHMuZGVsYXkgMi41LCAtPiBcblx0IyBcdFx0aWYgZW1vamlzTG9hZGVkIDwgODAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHQjIFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdCMgXHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzYwMC4uLjgwMF1cblx0IyBcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdCMgXHRVdGlscy5kZWxheSA1LjUsIC0+IFxuXHQjIFx0XHRpZiBlbW9qaXNMb2FkZWQgPCAxMDAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHQjIFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdCMgXHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzgwMC4uLjEwMDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0VXRpbHMuZGVsYXkgNywgLT4gXG5cdCMgXHRcdGlmIGVtb2ppc0xvYWRlZCA8IDEyOTcgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdCMgXHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMTAwMC4uLjEyOTddXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXG5cblx0IyBcdGZvciBlbSBpbiBmcmVxRW1vamlzQXJyYXlcblx0IyBcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdGZvciBlbSBpbiBlbW9qaXNBcnJheVswLi4uaW5jXVxuXHQjIFx0XHRsb2FkRW1vamlzKGVtKVxuXG5cblx0IyBcdGZvciBzZWMgaW4gZW1vamlTZWN0aW9uc1xuXHQjIFx0XHRpbmRleCA9IGVtb2ppU2VjdGlvbnMuaW5kZXhPZihzZWMpXG5cdCMgXHRcdHRpdGxlID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlHYWxsZXkuY29udGVudCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDppbmRleCo1MDAwICsgdXRpbHMucHgoOCksIGhlaWdodDo4MCwgd2lkdGg6ODAwXG5cdCMgXHRcdHRpdGxlLmh0bWwgPSBzZWNcblx0IyBcdFx0dGl0bGUuc3R5bGUgPSB7XG5cdCMgXHRcdFx0XCJmb250LXNpemVcIiA6IHV0aWxzLnB4KDEyKSArIFwicHhcIlxuXHQjIFx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDYwMFxuXHQjIFx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHQjIFx0XHRcdCdsaW5lLWhlaWdodCcgOiB1dGlscy5weCg0MikgKyBcInB4XCJcblx0IyBcdFx0XHQnbGV0dGVyLXNwYWNpbmcnIDogdXRpbHMucHgoMC43KSArIFwicHhcIlxuXHQjIFx0XHRcdCdjb2xvcicgOiBcIiNBNUE2QTlcIlxuXHQjIFx0XHRcdCd0ZXh0LXRyYW5zZm9ybScgOiAndXBwZXJjYXNlJ1xuXHQjIFx0XHR9XG5cblxuXHQjIGVtb2ppS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0IyBcdGVtb2ppS2V5LmJhY2tncm91bmRDb2xvciA9IHV0aWxzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cblxuXG5cdHJldHVybiBib2FyZFxuXG5leHBvcnRzLlNoZWV0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwic2hlZXRcIiwgYXJyYXkpXG5cdHNoZWV0ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0c2hlZXQuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRvdmVybGF5ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwgMCwgMCwgLjQpXCIsIHN1cGVyTGF5ZXI6c2hlZXQsIG5hbWU6XCJvdmVybGF5XCJcblx0b3ZlcmxheS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0c2hlZXRzID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6c2hlZXRcblx0c2hlZXRzLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0ZXhpdEJ1dHRvbiA9IG5ldyBleHBvcnRzLkJ1dHRvbiBidXR0b25UeXBlOlwiYmlnXCIsIHRleHQ6c2V0dXAuZXhpdCwgYmx1cjpmYWxzZSwgc3VwZXJMYXllcjpzaGVldHNcblx0ZXhpdEJ1dHRvbi5jb25zdHJhaW50cyA9IFxuXHRcdGJvdHRvbToxMFxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0YWN0aW9ucyA9IG5ldyBMYXllciBzdXBlckxheWVyOnNoZWV0cywgYm9yZGVyUmFkaXVzOnV0aWxzLnB4KDEyLjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LCAuODUpXCJcblxuXHRkZXNjcmlwdGlvbkJ1ZmZlciA9IDBcblx0aWYgc2V0dXAuZGVzY3JpcHRpb25cblx0XHRkZXNjcmlwdGlvbiA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJzaGVldERlc2NyaXB0aW9uXCIsIHRleHQ6c2V0dXAuZGVzY3JpcHRpb24sIHN1cGVyTGF5ZXI6YWN0aW9ucywgZm9udFNpemU6MTMsIGNvbG9yOlwiIzhGOEU5NFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIlxuXHRcdGRlc2NyaXB0aW9uLmNvbnN0cmFpbnRzID0gXG5cdFx0XHR0b3A6MjFcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR3aWR0aDp1dGlscy5wdChleHBvcnRzLmRldmljZS53aWR0aCkgLSAxMDBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0ZGVzY3JpcHRpb25CdWZmZXIgPSB1dGlscy5wdChkZXNjcmlwdGlvbi5oZWlnaHQpICsgNDJcblx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWN0aW9ucywgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0ZGl2aWRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRoZWlnaHQ6MVxuXHRcdFx0dG9wOmRlc2NyaXB0aW9uQnVmZmVyXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0ZXhwb3J0cy5iZ0JsdXIoYWN0aW9ucylcblx0YWN0aW9ucy5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MTBcblx0XHR0cmFpbGluZzoxMFxuXHRcdGJvdHRvbTpbZXhpdEJ1dHRvbiwgMTBdXG5cdFx0aGVpZ2h0OjU4ICogc2V0dXAuYWN0aW9ucy5sZW5ndGggKyBkZXNjcmlwdGlvbkJ1ZmZlclxuXHRleHBvcnRzLmxheW91dCgpXG5cdGFjdHMgPSB7fVxuXHRmb3IgYWN0LCBpbmRleCBpbiBzZXR1cC5hY3Rpb25zXG5cdFx0byA9IG5ldyBMYXllciBzdXBlckxheWVyOmFjdGlvbnMsIHdpZHRoOmFjdGlvbnMud2lkdGgsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czp1dGlscy5weCgxMi41KVxuXHRcdG8uY29uc3RyYWludHMgPSBcblx0XHRcdHRvcDppbmRleCAqIDU4ICsgZGVzY3JpcHRpb25CdWZmZXJcblx0XHRcdGhlaWdodDo1OFxuXHRcdGJ1dHRvbiA9IG5ldyBleHBvcnRzLkJ1dHRvbiB0ZXh0OmFjdCwgc3VwZXJMYXllcjpvLCBmb250U2l6ZToyMFxuXHRcdHNwZWNpYWxDaGFyKGJ1dHRvbilcblx0XHRidXR0b24uY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdGJ1dHRvbi5jb2xvciA9IFwiI0ZFMzgyNFwiXG5cdFx0aWYgaW5kZXggIT0gc2V0dXAuYWN0aW9ucy5sZW5ndGggLSAxXG5cdFx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bywgd2lkdGg6YWN0aW9ucy53aWR0aCwgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0XHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0aGVpZ2h0OjFcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0by5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyMTUsMjE1LDIxNSwuNylcIlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6IChiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0dGltZTouNVxuXHRcdG8ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIpXG5cdFx0XHRcdHRpbWU6LjVcblx0XHRcdHNoZWV0cy5hbmltYXRlIFxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTpleHBvcnRzLmRldmljZS5oZWlnaHQrdXRpbHMucHgoKHNldHVwLmFjdGlvbnMubGVuZ3RoICsgMykgKiA1OCkpXG5cdFx0XHRcdHRpbWU6LjNcblx0XHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAob3BhY2l0eTowKVxuXHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdFx0c2hlZXQuZGVzdHJveSgpXG5cdFx0YWN0c1thY3RdID0gb1xuXG5cdGlmIHNldHVwLmFuaW1hdGVkID09IHRydWVcblx0XHRvdmVybGF5Lm9wYWNpdHkgPSAwIFxuXHRcdHNoZWV0cy5tYXhZID0gZXhwb3J0cy5kZXZpY2UuaGVpZ2h0ICsgdXRpbHMucHgoKHNldHVwLmFjdGlvbnMubGVuZ3RoICsgMykgKiA1OClcblx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MSlcblx0XHRcdHRpbWU6LjNcblx0XHRzaGVldHMuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoobWF4WTpleHBvcnRzLmRldmljZS5oZWlnaHQpXG5cdFx0XHR0aW1lOi4zXG5cblx0b3ZlcmxheS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c2hlZXRzLmFuaW1hdGUgXG5cdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTpleHBvcnRzLmRldmljZS5oZWlnaHQrdXRpbHMucHgoKHNldHVwLmFjdGlvbnMubGVuZ3RoICsgMykgKiA1OCkpXG5cdFx0XHR0aW1lOi4zXG5cdFx0b3ZlcmxheS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOiAob3BhY2l0eTowKVxuXHRcdFx0dGltZTouM1xuXHRcdFV0aWxzLmRlbGF5IC4zLCAtPlxuXHRcdFx0c2hlZXQuZGVzdHJveSgpXHRcdFxuXG5cdGV4aXRCdXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNoZWV0cy5hbmltYXRlIFxuXHRcdFx0cHJvcGVydGllczogKG1heFk6ZXhwb3J0cy5kZXZpY2UuaGVpZ2h0K3V0aWxzLnB4KChzZXR1cC5hY3Rpb25zLmxlbmd0aCArIDMpICogNTgpKVxuXHRcdFx0dGltZTouM1xuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdHNoZWV0LmRlc3Ryb3koKVxuXG5cdHNoZWV0LmNhbmNlbCA9IGV4aXRCdXR0b25cblx0c2hlZXQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuXHRzaGVldC5vdmVybGF5ID0gb3ZlcmxheVxuXHRzaGVldC5hY3Rpb25zID0gYWN0c1xuXHRyZXR1cm4gc2hlZXRcblxuZXhwb3J0cy5OYXZCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJuYXZCYXJcIiwgYXJyYXkpXG5cdGJhciA9IG5ldyBMYXllciBuYW1lOlwibmF2YmFyXCJcblx0YmFyQXJlYSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJhciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRkaXZpZGVyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNCMkIyQjJcIiwgbmFtZTpcIm5hdiBkaXZpZGVyXCIsIHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRpZiBzZXR1cC5zdXBlckxheWVyIFxuXHRcdHNldHVwLnN1cGVyTGF5ZXIuYWRkU3ViTGF5ZXIoYmFyKVxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6LjVcblx0XHRib3R0b206MFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0aWYgc2V0dXAuYmx1ciBcblx0XHRiYXIuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC44KVwiXG5cdFx0ZXhwb3J0cy5iZ0JsdXIoYmFyKVxuXHRlbHNlXG5cdFx0YmFyLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiXG5cdFx0ZXhwb3J0cy5iZ0JsdXIoYmFyKVxuXHRiYXIudHlwZSA9IHNldHVwLnR5cGVcblx0YmFyQXJlYS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDo0NFxuXHRcdGJvdHRvbTowXG5cdGJhci5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGhlaWdodDo2NFxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJzdGF0dXNCYXJcIlxuXHRcdFx0QHN0YXR1c0JhciA9IGxheWVyXG5cdFx0XHRiYXIucGxhY2VCZWhpbmQoQHN0YXR1c0JhcilcblxuXHRpZiB0eXBlb2Ygc2V0dXAudGl0bGUgPT0gXCJzdHJpbmdcIlxuXHRcdHRpdGxlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcIm5hdkJhclRpdGxlXCIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOmJhckFyZWEsIHRleHQ6c2V0dXAudGl0bGVcblx0aWYgdHlwZW9mIHNldHVwLnRpdGxlID09IFwib2JqZWN0XCIgXG5cdFx0dGl0bGUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwibmF2QmFyVGl0bGVcIiwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC50aXRsZS5sYWJlbC5odG1sXG5cdFx0YmFyLnN1cGVyTGF5ZXIgPSBzZXR1cC50aXRsZS52aWV3XG5cdHNwZWNpYWxDaGFyKHRpdGxlKVxuXHR0aXRsZS5jb25zdHJhaW50cyA9IFxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0Ym90dG9tOjEyXG5cblx0IyBIYW5kbGUgUmlnaHRcblx0aWYgdHlwZW9mIHNldHVwLnJpZ2h0ID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNldHVwLnJpZ2h0ICE9IFwiYm9vbGVhblwiXG5cdFx0YmFyLnJpZ2h0ID0gbmV3IGV4cG9ydHMuQnV0dG9uIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC5yaWdodCwgZm9udFdlaWdodDo1MDAsIGNvbnN0cmFpbnRzOntib3R0b206MTIsIHRyYWlsaW5nOjh9XG5cdFx0YmFyLnJpZ2h0LnR5cGUgPSBcImJ1dHRvblwiXG5cdFx0c3BlY2lhbENoYXIoYmFyLnJpZ2h0KVxuXHRpZiB0eXBlb2Ygc2V0dXAucmlnaHQgPT0gXCJvYmplY3RcIlxuXHRcdGJhci5yaWdodCA9IHNldHVwLnJpZ2h0XG5cdFx0YmFyLnJpZ2h0LnN1cGVyTGF5ZXIgPSBiYXJBcmVhXG5cdFx0YmFyLnJpZ2h0LmNvbnN0cmFpbnRzID0ge1xuXHRcdFx0dHJhaWxpbmc6OFxuXHRcdFx0Ym90dG9tOjEyXG5cdFx0fVxuXG5cdCMgSGFuZGxlIExlZnRcblx0aWYgdHlwZW9mIHNldHVwLmxlZnQgPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygc2V0dXAubGVmdCAhPSBcImJvb2xlYW5cIlxuXHRcdGxlYWRpbmcgPSA4XG5cdFx0aWYgc2V0dXAubGVmdC5pbmRleE9mKFwiPFwiKSAhPSAtMVxuXHRcdFx0c3ZnID0gZXhwb3J0cy51dGlscy5zdmcoaWNvbkxpYnJhcnkuY2hldnJvbilcblx0XHRcdGJhci5jaGV2cm9uID0gbmV3IExheWVyIHdpZHRoOnN2Zy53aWR0aCwgaGVpZ2h0OnN2Zy5oZWlnaHQsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRcdFx0YmFyLmNoZXZyb24uaHRtbCA9IHN2Zy5zdmdcblx0XHRcdGJhci5jaGV2cm9uLmNvbnN0cmFpbnRzID0ge2JvdHRvbTo5LCBsZWFkaW5nOjh9XG5cdFx0XHRzZXR1cC5sZWZ0ID0gc2V0dXAubGVmdC5yZXBsYWNlKFwiPFwiLCBcIlwiKVxuXHRcdFx0bGVhZGluZyA9IFtiYXIuY2hldnJvbiwgNF1cblxuXHRcdGJhci5sZWZ0ID0gbmV3IGV4cG9ydHMuQnV0dG9uIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC5sZWZ0LCBmb250V2VpZ2h0OjUwMCwgY29uc3RyYWludHM6e2JvdHRvbToxMiwgbGVhZGluZzpsZWFkaW5nfVxuXHRcdFxuXHRcdGJhci5sZWZ0Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0aWYgYmFyLmNoZXZyb25cblx0XHRcdFx0YmFyLmNoZXZyb24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6LjI1KVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRiYXIubGVmdC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRpZiBiYXIuY2hldnJvblxuXHRcdFx0XHRiYXIuY2hldnJvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRpZiB0eXBlb2Ygc2V0dXAubGVmdCA9PSBcIm9iamVjdFwiXG5cdFx0YmFyLmxlZnQgPSBzZXR1cC5sZWZ0XG5cdFx0YmFyLmxlZnQuc3VwZXJMYXllciA9IGJhckFyZWFcblx0XHRiYXIubGVmdC5jb25zdHJhaW50cyA9IHtcblx0XHRcdGxlYWRpbmc6OFxuXHRcdFx0Ym90dG9tOjEyXG5cdFx0fVxuXG5cblxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIGJhclxuXG5leHBvcnRzLlRhYiA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcInRhYlwiLCBhcnJheSlcblx0c3dpdGNoIGV4cG9ydHMuZGV2aWNlIFxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHRAdGFiV2lkdGggPSA1NVxuXHRcdGVsc2Vcblx0XHRcdEB0YWJXaWR0aCA9IDc1XG5cdHRhYlZpZXcgPSBuZXcgTGF5ZXIgbmFtZTpzZXR1cC5sYWJlbCArIFwiIHZpZXdcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHR0YWJWaWV3LmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0dGFiQm94ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6c2V0dXAubGFiZWwgKyBcIiB0YWJcIlxuXHR0YWJCb3guY29uc3RyYWludHMgPVxuXHRcdHdpZHRoOkB0YWJXaWR0aFxuXHRcdGhlaWdodDo0OVxuXHRpY29uID0gbmV3IExheWVyIHdpZHRoOnV0aWxzLnB4KDI1KSwgaGVpZ2h0OnV0aWxzLnB4KDI1KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImljb25cIiwgc3VwZXJMYXllcjp0YWJCb3hcblx0aWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6N1xuXHRzdmdGcmFtZSA9IGV4cG9ydHMudXRpbHMuc3ZnKHNldHVwLmljb24pXG5cdGljb24uaHRtbCA9IHN2Z0ZyYW1lLnN2Z1xuXHRpY29uLndpZHRoID0gc3ZnRnJhbWUud2lkdGhcblx0aWNvbi5oZWlnaHQgPSBzdmdGcmFtZS5oZWlnaHRcblx0bGFiZWwgPSBuZXcgZXhwb3J0cy5UZXh0IHRleHQ6c2V0dXAubGFiZWwsIHN1cGVyTGF5ZXI6dGFiQm94LCBjb2xvcjpcIiM5MjkyOTJcIiwgZm9udFNpemU6MTAsIG5hbWU6XCJsYWJlbFwiLCB0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiXG5cdGxhYmVsLmNvbnN0cmFpbnRzID0gXG5cdFx0Ym90dG9tOjJcblx0XHRob3Jpem9udGFsQ2VudGVyOmljb25cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdCMgRXhwb3J0IFRhYlxuXHR0YWJCb3gudHlwZSA9IFwidGFiXCJcblx0dGFiQm94Lmljb24gPSBpY29uXG5cdHRhYkJveC52aWV3ID0gdGFiVmlld1xuXHR0YWJCb3gubGFiZWwgPSBsYWJlbFxuXG5cdHJldHVybiB0YWJCb3hcblxuZXhwb3J0cy5UYWJCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJ0YWJCYXJcIiwgYXJyYXkpXG5cdGlmIHNldHVwLnRhYnMubGVuZ3RoID09IDBcblx0XHRkdW1teVRhYiA9IG5ldyBleHBvcnRzLlRhYlxuXHRcdGR1bW15VGFiMiA9IG5ldyBleHBvcnRzLlRhYlxuXHRcdHNldHVwLnRhYnMucHVzaCBkdW1teVRhYlxuXHRcdHNldHVwLnRhYnMucHVzaCBkdW1teVRhYjJcblx0dGFiV2lkdGggPSA3NVxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2UgXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdHRhYldpZHRoID0gNTVcblx0XHRlbHNlXG5cdFx0XHR0YWJXaWR0aCA9IDc1XG5cdHRhYkJhciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwidGFiIGJhclwiXG5cdHRhYkJhckJHID0gbmV3IEJhY2tncm91bmRMYXllciBzdXBlckxheWVyOnRhYkJhciwgbmFtZTpcInRhYkJhciBiYWNrZ3JvdW5kXCJcblx0dGFiQmFyLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0Ym90dG9tOjBcblx0XHRoZWlnaHQ6NDlcblx0dGFiQmFyQkcuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRib3R0b206MFxuXHRcdGhlaWdodDo0OVxuXHRkaXZpZGVyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNCMkIyQjJcIiwgbmFtZTpcInRhYkRpdmlkZXJcIiwgc3VwZXJMYXllcjp0YWJCYXJcblx0ZGl2aWRlci5jb25zdHJhaW50cyA9IFxuXHRcdHRvcDowXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDouNVxuXHR0YWJCYXJCb3ggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjp0YWJCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJ0YWJCYXIgYm94XCJcblx0dGFiQmFyQm94LmNvbnN0cmFpbnRzID0gXG5cdFx0aGVpZ2h0OjQ5XG5cdFx0d2lkdGg6c2V0dXAudGFicy5sZW5ndGggKiB0YWJXaWR0aFxuXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHRzZXRBY3RpdmUgPSAodGFiSW5kZXgpIC0+XG5cdFx0Zm9yIHRhYiwgaW5kZXggaW4gc2V0dXAudGFic1xuXHRcdFx0aWYgaW5kZXggPT0gdGFiSW5kZXhcblx0XHRcdFx0ZXhwb3J0cy5jaGFuZ2VGaWxsKHRhYi5pY29uLCB1dGlscy5jb2xvcihzZXR1cC5hY3RpdmVDb2xvcikpXG5cdFx0XHRcdHRhYi5sYWJlbC5jb2xvciA9IHV0aWxzLmNvbG9yKHNldHVwLmFjdGl2ZUNvbG9yKVxuXHRcdFx0XHR0YWIudmlldy52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRleHBvcnRzLmNoYW5nZUZpbGwodGFiLmljb24sIHV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpKVxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSB1dGlscy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKVxuXHRcdFx0XHR0YWIudmlldy52aXNpYmxlID0gZmFsc2VcblxuXHRmb3IgdGFiLCBpbmRleCBpbiBzZXR1cC50YWJzXG5cdFx0I0NoZWNrIGZvciB2YWlsZCB0YWIgb2JqZWN0XG5cdFx0aWYgdGFiLnR5cGUgIT0gXCJ0YWJcIlxuXHRcdFx0ZXJyb3IodGFiLmlkLCA1KVxuXG5cdFx0dGFiQmFyQm94LmFkZFN1YkxheWVyKHRhYilcblx0XHQjIENoYW5nZSBjb2xvcnNcblx0XHRleHBvcnRzLmNoYW5nZUZpbGwodGFiLmljb24sIHV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpKVxuXHRcdHRhYi5sYWJlbC5jb2xvciA9IHV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpXG5cdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gc2V0dXAuYmFja2dyb3VuZENvbG9yXG5cdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LCAuOSlcIlxuXHRcdFx0ZXhwb3J0cy5iZ0JsdXIodGFiQmFyQkcpXG5cblx0XHRpZiBpbmRleCAhPSAwXG5cdFx0XHR0YWIuY29uc3RyYWludHMgPSBcblx0XHRcdFx0bGVhZGluZzpzZXR1cC50YWJzW2luZGV4IC0gMV1cblx0XHRcdGV4cG9ydHMubGF5b3V0KClcblxuXHRcdHRhYi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHRhYkluZGV4ID0gQC54IC8gdXRpbHMucHgodGFiV2lkdGgpXG5cdFx0XHRzZXRBY3RpdmUodGFiSW5kZXgpXG5cdHRhYkJhckJveC5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRzZXRBY3RpdmUoc2V0dXAuc3RhcnQpXHRcblxuXHRleHBvcnRzLmxheW91dCgpXG5cdHJldHVybiB0YWJCYXJcblxuXG5cbmljb25MaWJyYXJ5ID0ge1xuXHRhY3Rpdml0eTogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMTYpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTYgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Tb2NjZXIgQmFsbDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz5cblx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHRcdDwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTc5LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdTb2NjZXItQmFsbCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTc5LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8bWFzayBpZD0nbWFzay0yJyBza2V0Y2g6bmFtZT0nTWFzaycgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHRcdFx0XHRcdDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHRcdFx0XHRcdDwvbWFzaz5cblx0XHRcdFx0XHRcdFx0PHVzZSBpZD0nTWFzaycgc3Ryb2tlPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTIuMTIwMzA0NiBMMTIuODU3MzM4NCw4IEwxMy4zNzIzNzY1LDguODU3MTY3MyBMNi41MTUwMzgwNywxMi45Nzc0NzE5IEw2LDEyLjEyMDMwNDYgTDYsMTIuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjg0OTY0OCw4LjcyNjA1NTEgTDE5LjEwMDExMDMsNS4zNDUxMDkwMSBMMTkuNTIyNzI4NSw2LjI1MTQxNjggTDEyLjI3MjI2NjIsOS42MzIzNjI4OSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDMuMTIwMzA0NiBMMTIuODU3MzM4NCwtMSBMMTMuMzcyMzc2NSwtMC4xNDI4MzI2OTkgTDYuNTE1MDM4MDcsMy45Nzc0NzE5IEw2LDMuMTIwMzA0NiBMNiwzLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNLTEsNy4xMjAzMDQ2IEw1Ljg1NzMzODQxLDMgTDYuMzcyMzc2NDgsMy44NTcxNjczIEwtMC40ODQ5NjE5MjUsNy45Nzc0NzE5IEwtMSw3LjEyMDMwNDYgTC0xLDcuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nNCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nNSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzExLjUnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzEyJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDQuODU3MTY3MyBMMTEuODU3MzM4NCw4Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsOC4xMjAzMDQ2IEw1LjUxNTAzODA3LDQgTDUsNC44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSwxMi44NTcxNjczIEwxMS44NTczMzg0LDE2Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsMTYuMTIwMzA0NiBMNS41MTUwMzgwNywxMiBMNSwxMi44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xJyBmaWxsPScjRDhEOEQ4JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEtQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjQ1NzcxMTg5LDMuMTk1MDQ3MzkgTDcuMzU1MTQ0ODQsNi4xMzIxODMzMyBMNC41MzAwNjc2LDYuOTQyMjYxMiBMMi44ODY2NDA4OSw0LjUwNTc4MDkgTDQuNjk2MDI0NTcsMi4xODk4NzU0MSBMNy40NTc3MTE4OSwzLjE5NTA0NzM5JyBpZD0nUG9seWdvbi0xLUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjQ1NzcxMTg5LDExLjE5NTA0NzQgTDcuMzU1MTQ0ODQsMTQuMTMyMTgzMyBMNC41MzAwNjc2LDE0Ljk0MjI2MTIgTDIuODg2NjQwODksMTIuNTA1NzgwOSBMNC42OTYwMjQ1NywxMC4xODk4NzU0IEw3LjQ1NzcxMTg5LDExLjE5NTA0NzQnIGlkPSdQb2x5Z29uLTEtQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0IEwxNC40NDA2MDMxLDMuMDA5NzI5ODggTDExLjYxNTUyNTgsMy44MTk4MDc3NCBMOS45NzIwOTkxMiwxLjM4MzMyNzQ1IEwxMS43ODE0ODI4LC0wLjkzMjU3ODA1IEwxNC41NDMxNzAxLDAuMDcyNTkzOTMxNCcgaWQ9J1BvbHlnb24tMS1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0YW5pbWFsczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Hcm91cDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExNy4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpY19Gb29kJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMTguMDAwMDAwLCA2NDAuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdHcm91cCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNjgzNzc1MzcsMS4zODE1NjY0NiBDNi4yMzkyNjA2NiwxLjEzNjI0IDYuODUzNzIwMDUsMSA3LjUsMSBDOC4xNDYyNzk5NSwxIDguNzYwNzM5MzQsMS4xMzYyNCA5LjMxNjIyNDYzLDEuMzgxNTY2NDYgQzkuODA4NzkyNzUsMC41NjIzNTkwMTkgMTAuODI1NTg4OCwwIDEyLDAgQzEzLjY1Njg1NDIsMCAxNSwxLjExOTI4ODEzIDE1LDIuNSBDMTUsMy41NTcxMzk4IDE0LjIxMjYyNDYsNC40NjEwMjg0MyAxMy4wOTk5MjI2LDQuODI2NjI1MTQgQzE0LjI0OTY1MjgsNS42NDE4NTQyMiAxNSw2Ljk4MzMwMDYyIDE1LDguNSBDMTUsMTAuNzE2NzE0NCAxMy4zOTcxODczLDEyLjU1OTA3MTkgMTEuMjg3MjY3MSwxMi45MzEzNjczIEMxMC40ODY3MjQ4LDE0LjE3NTc3MDMgOS4wODk2MTY5NiwxNSA3LjUsMTUgQzUuOTEwMzgzMDQsMTUgNC41MTMyNzUyNCwxNC4xNzU3NzAzIDMuNzEyNzMyOTEsMTIuOTMxMzY3MyBDMS42MDI4MTI2OCwxMi41NTkwNzE5IDAsMTAuNzE2NzE0NCAwLDguNSBDMCw2Ljk4MzMwMDYyIDAuNzUwMzQ3MjQ0LDUuNjQxODU0MjIgMS45MDAwNzc0MSw0LjgyNjYyNTE0IEMwLjc4NzM3NTQ0NSw0LjQ2MTAyODQzIDAsMy41NTcxMzk4IDAsMi41IEMwLDEuMTE5Mjg4MTMgMS4zNDMxNDU3NSwwIDMsMCBDNC4xNzQ0MTEyMiwwIDUuMTkxMjA3MjUsMC41NjIzNTkwMTkgNS42ODM3NzUzNywxLjM4MTU2NjQ2IFonIGlkPSdPdmFsLTgnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS43MzgzNDIyOCwxMiBDNS44NjI5MDk3OSwxMiA2LjE0NjQyMzUzLDEyIDYuMTQ2NDIzNTMsMTIgQzYuMTQ2NDIzNTMsMTIgNi40MzIxNTY5NiwxMi40NDI2MTIzIDYuNTI0NjU4MiwxMi40OTE5NzM5IEM2LjY2NDU1NjAxLDEyLjU2NjYyNzcgNywxMi40OTE5NzM5IDcsMTIuNDkxOTczOSBMNywxMiBMOCwxMiBMOCwxMi40OTE5NzM5IEw4LjQ5Nzk5MjI4LDEyLjQ5MTk3MzkgTDguODQzMDE3NjksMTIgTDkuMzkxODQ1NywxMiBDOS4zOTE4NDU3LDEyIDguOTk1OTg0NTcsMTIuOTgzOTQ3OCA4LjQ5Nzk5MjI4LDEyLjk4Mzk0NzggTDYuNjA3MDI0MDcsMTIuOTgzOTQ3OCBDNi4yMTQwNDgxMywxMi45ODM5NDc4IDUuNDU5OTYwOTQsMTIgNS43MzgzNDIyOCwxMiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHktMic+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQnIGN4PScxMC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQtQ29weScgY3g9JzQuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTIuNjk5OTk2OSw1IEMxMi42OTk5OTY5LDMuMDY3MDAzMzggMTEuMTMyOTkzNiwxLjUgOS4xOTk5OTY5NSwxLjUnIGlkPSdPdmFsLTE2Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSw1IEM1LjUsMy4wNjcwMDMzOCAzLjkzMjk5NjYyLDEuNSAyLDEuNScgaWQ9J092YWwtMTYtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy43NTAwMDAsIDMuMjUwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zLjc1MDAwMCwgLTMuMjUwMDAwKSAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHg9JzcnIHk9JzExJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTAgTDYuNSwxMCBMNi40OTk5OTk5OSw5LjUgTDguNTAwMDAwMDUsOS41IEw4LjUwMDAwMDA1LDEwIEw5LDEwIEw5LDEwLjUgTDguNSwxMC41IEw4LjUsMTEgTDYuNSwxMSBMNi41LDEwLjUgTDYsMTAuNSBMNiwxMCBaJyBpZD0nUGF0aCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRjaGV2cm9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScxM3B4JyBoZWlnaHQ9JzIycHgnIHZpZXdCb3g9JzAgMCAxMyAyMicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmFjayBDaGV2cm9uPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0ICAgICAgICA8ZyBpZD0nTmF2aWdhdGlvbi1CYXIvQmFjaycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTguMDAwMDAwLCAtMzEuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTguNSw0MiBMMTksMzEuNSBMMjEsMzMuNSBMMTIuNSw0MiBMMjEsNTAuNSBMMTksNTIuNSBMOC41LDQyIFonIGlkPSdCYWNrLUNoZXZyb24nPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGVtb2ppIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDIwKX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDIwKX1weCcgdmlld0JveD0nMCAwIDIwIDIwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5FbW9qaTwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02MC4wMDAwMDAsIC0xODEuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J0JvdHRvbS1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxNzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNjYuNzUsMzAuNSBDNzIuMTM0Nzc2MywzMC41IDc2LjUsMjYuMTM0Nzc2MyA3Ni41LDIwLjc1IEM3Ni41LDE1LjM2NTIyMzcgNzIuMTM0Nzc2MywxMSA2Ni43NSwxMSBDNjEuMzY1MjIzNywxMSA1NywxNS4zNjUyMjM3IDU3LDIwLjc1IEM1NywyNi4xMzQ3NzYzIDYxLjM2NTIyMzcsMzAuNSA2Ni43NSwzMC41IFogTTY2Ljc1LDI5LjUgQzcxLjU4MjQ5MTYsMjkuNSA3NS41LDI1LjU4MjQ5MTYgNzUuNSwyMC43NSBDNzUuNSwxNS45MTc1MDg0IDcxLjU4MjQ5MTYsMTIgNjYuNzUsMTIgQzYxLjkxNzUwODQsMTIgNTgsMTUuOTE3NTA4NCA1OCwyMC43NSBDNTgsMjUuNTgyNDkxNiA2MS45MTc1MDg0LDI5LjUgNjYuNzUsMjkuNSBaIE02My43NSwxOSBDNjQuNDQwMzU1OSwxOSA2NSwxOC40NDAzNTU5IDY1LDE3Ljc1IEM2NSwxNy4wNTk2NDQxIDY0LjQ0MDM1NTksMTYuNSA2My43NSwxNi41IEM2My4wNTk2NDQxLDE2LjUgNjIuNSwxNy4wNTk2NDQxIDYyLjUsMTcuNzUgQzYyLjUsMTguNDQwMzU1OSA2My4wNTk2NDQxLDE5IDYzLjc1LDE5IFogTTY5Ljc1LDE5IEM3MC40NDAzNTU5LDE5IDcxLDE4LjQ0MDM1NTkgNzEsMTcuNzUgQzcxLDE3LjA1OTY0NDEgNzAuNDQwMzU1OSwxNi41IDY5Ljc1LDE2LjUgQzY5LjA1OTY0NDEsMTYuNSA2OC41LDE3LjA1OTY0NDEgNjguNSwxNy43NSBDNjguNSwxOC40NDAzNTU5IDY5LjA1OTY0NDEsMTkgNjkuNzUsMTkgWiBNNTkuODg3NjMzNCwyMi4xNjQxNDQ0IEM1OS42MzkwMzE2LDIxLjM4MzEzNCA2MC4wNjU5MTgsMjAuOTc4NTE1NiA2MC44NTMwOTUxLDIxLjIzMjkzMDQgQzYwLjg1MzA5NTEsMjEuMjMyOTMwNCA2My4wOTM3NTAzLDIyLjIxMjUgNjYuNzUwMDAwMSwyMi4yMTI1IEM3MC40MDYyNDk5LDIyLjIxMjUgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCBDNzMuNDI4NzE2MiwyMC45NjYyMTUzIDczLjg4MTI0NjMsMjEuNDA0NDA5NyA3My42MDU4NDc3LDIyLjE4MDc0MzcgQzczLjYwNTg0NzcsMjIuMTgwNzQzNyA3Mi42LDI3LjU3NSA2Ni43NSwyNy41NzUgQzYwLjksMjcuNTc1IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCA1OS44ODc2MzM0LDIyLjE2NDE0NDQgWiBNNjYuNzUsMjMuMTg3NSBDNjQuMDY4NzUsMjMuMTg3NSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgNjEuODU0NDA1NSwyMi40NzM3ODIxIEM2MS4zMjczMDE5LDIyLjMyOTQ4IDYxLjE3ODEyMzMsMjIuNTcyMTYxNSA2MS41NjM5NTU1LDIyLjk1NzA3NSBDNjEuNTYzOTU1NSwyMi45NTcwNzUgNjIuMzYyNSwyNC42NSA2Ni43NSwyNC42NSBDNzEuMTM3NSwyNC42NSA3MS45NTA4NTAzLDIyLjk0MzgzMDQgNzEuOTUwODUwMywyMi45NDM4MzA0IEM3Mi4zMDkzNjU5LDIyLjUzOTkyNzggNzIuMTY5MDc5MywyMi4zMzU5ODQ0IDcxLjYzNTQyNzMsMjIuNDc2MzQ5IEM3MS42MzU0MjczLDIyLjQ3NjM0OSA2OS40MzEyNSwyMy4xODc1IDY2Ljc1LDIzLjE4NzUgWicgaWQ9J0Vtb2ppJz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0ZGVsZXRlOiB7XG5cdFx0b24gOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDI0KX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMjQpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFogTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM4LjcwOTcyLDIxLjcwOTcxOTUgQzMzOC4zMTc3NTIsMjEuMzE3NzUyMiAzMzguMzE4OTY1LDIwLjY4MTAzNDkgMzM4LjcwOTcyLDIwLjI5MDI4MDUgTDM0NC42NDMyNDUsMTQuMzU2NzU0NyBDMzQ0Ljg0MDI3NiwxNC4xNTk3MjQ1IDM0NS4yMjU2MzksMTQgMzQ1LjQ5Mzc0MSwxNCBMMzU1Ljk5NzIzOSwxNCBDMzU3LjEwMzMzMywxNCAzNTcuOTk5OTk5LDE0Ljg5NzA2MDEgMzU3Ljk5OTk5OSwxNi4wMDU4NTg2IEwzNTcuOTk5OTk5LDI1Ljk5NDE0MTIgQzM1Ny45OTk5OTksMjcuMTAxOTQ2NCAzNTcuMTA2NDU3LDI3Ljk5OTk5OTkgMzU1Ljk5NzIzOSwyNy45OTk5OTk5IEwzNDUuNDkzNzQxLDI4IEMzNDUuMjIxMDU2LDI4IDM0NC44NDA2NDMsMjcuODQwNjQzMSAzNDQuNjQzMjQ2LDI3LjY0MzI0NTMgTDMzOC43MDk3MiwyMS43MDk3MTk1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0fVxuXHRmb29kIDogIFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDE3KX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+Rm9vZDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQ4LjAwMDAwMCwgLTYzNy4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGb29kJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyMjkuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSwxNS41IEwxLDE1LjUgTDAsNSBMNi41LDUgTDYuMjYzNjA5MzMsNy40ODIxMDIwMicgaWQ9J0RyaW5rJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNi4wMTA3NzU0NSwxLjk2OTMwMDk4IEw2LjUxNTcxMzUyLDUuMjIyNzA1MzkgTDUuNzE5MDgxODQsNS42Nzk0NzgxMiBMNS4wMzg5MDA5LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMS45NjkzMDA5OCBMNC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMS45NjkzMDA5OCBMNi4wMTA3NzU0NSwxLjk2OTMwMDk4IFonIGlkPSdTdHJhdycgZmlsbD0nIzRBNTQ2MScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNi44NTU1NzIsIDMuMzI0MzkwKSByb3RhdGUoMjQuMDAwMDAwKSB0cmFuc2xhdGUoLTYuODU1NTcyLCAtMy4zMjQzOTApICc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdCb3R0b20tQnVuJyBzdHJva2U9JyM0QTU0NjEnIHg9JzMnIHk9JzE0JyB3aWR0aD0nMTAuNScgaGVpZ2h0PScxLjUnIHJ4PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEuNSwxMi41MDI0NDA4IEMxLjUsMTEuOTQ4ODA4IDEuOTQ5MTY5MTYsMTEuNSAyLjQ5MjY4NzIzLDExLjUgTDE0LjAwNzMxMjgsMTEuNSBDMTQuNTU1NTU4OCwxMS41IDE1LDExLjk0Njk0OTkgMTUsMTIuNTAyNDQwOCBMMTUsMTIuOTk3NTU5MiBDMTUsMTMuNTUxMTkyIDE0LjU1MDgzMDgsMTQgMTQuMDA3MzEyOCwxNCBMMi40OTI2ODcyMywxNCBDMS45NDQ0NDEyMSwxNCAxLjUsMTMuNTUzMDUwMSAxLjUsMTIuOTk3NTU5MiBMMS41LDEyLjUwMjQ0MDggWiBNMy45MzMwMDAwMywxMS44MzkyNzI3IEMzLjQxNzcxODM0LDExLjY1MTg5NzYgMy40NDQ4MzY5NywxMS41IDMuOTk1NTc3NSwxMS41IEwxMy4wMDQ0MjI1LDExLjUgQzEzLjU1NDI2NDgsMTEuNSAxMy41ODY2MDYxLDExLjY1MDMyNTEgMTMuMDY3LDExLjgzOTI3MjcgTDguNSwxMy41IEwzLjkzMzAwMDAzLDExLjgzOTI3MjcgWicgaWQ9JyZxdW90O1BhdHR5JnF1b3Q7JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIuNSwxMC41IEwxMy41LDEwLjUgTDE1LDExLjUgTDEsMTEuNSBMMi41LDEwLjUgWicgaWQ9J0NoZWVzZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LjI1LDEwLjUgQzExLjQyNTYzNzMsMTAuNSAxNCwxMC4zMjg0MjcxIDE0LDkuNSBDMTQsOC42NzE1NzI4OCAxMS40MjU2MzczLDggOC4yNSw4IEM1LjA3NDM2MjY5LDggMi41LDguNjcxNTcyODggMi41LDkuNSBDMi41LDEwLjMyODQyNzEgNS4wNzQzNjI2OSwxMC41IDguMjUsMTAuNSBaJyBpZD0nVG9wLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzUnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZmxhZ3M6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDExKX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDE1KX1weCcgdmlld0JveD0nMCAwIDExIDE1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+RmxhZzwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjc1LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGbGFnJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNzUuMDAwMDAwLCAyMzEuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1BvbGUnIGZpbGw9JyM0QTU0NjEnIHg9JzAnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzE0Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEsMSBDMSwxIDEuMjUsMiAzLjUsMiBDNS43NSwyIDYsMC43NDk5OTk5OTggOCwwLjc1IEMxMCwwLjc0OTk5OTk5OCAxMCwxLjUgMTAsMS41IEwxMCw3LjUgQzEwLDcuNSAxMCw2LjUgOCw2LjUgQzYsNi41IDQuODA2MjM5MTEsOCAzLjUsOCBDMi4xOTM3NjA4OSw4IDEsNyAxLDcgTDEsMSBaJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZnJlcXVlbnQ6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDE3KX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+UmVjZW50PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01NS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nUmVjZW50JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1NS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdCb2R5JyBzdHJva2U9JyM0QTU0NjEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNSw3LjUgTDcuNSw4LjUgTDguNSw4LjUgTDguNSwyIEw3LjUsMiBMNy41LDcuNSBMNCw3LjUgTDQsOC41IEw4LjUsOC41IEw4LjUsNy41IEw3LjUsNy41IFonIGlkPSdIYW5kcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRrZXlib2FyZCA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDMyLjUpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMjMuNSl9cHgnIHZpZXdCb3g9JzAgMCA2NSA0NycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlNoYXBlPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVBvcnRyYWl0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQzNi4wMDAwMDAsIC0xOTU2LjAwMDAwMCknIGZpbGw9JyMwMDAwMDAnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkLUxpZ2h0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMTQyMi4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQtZG93bicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQxMi4wMDAwMDAsIDUwMC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTg3LjAwMTMzMiwzNCBDODguMTA1MTY1OSwzNCA4OSwzNC44OTk3MTI3IDg5LDM1Ljk5MzI4NzQgTDg5LDYxLjAwNjcxMjYgQzg5LDYyLjEwNzU3NDggODguMTA1ODc1OSw2MyA4Ny4wMDEzMzIsNjMgTDI1Ljk5ODY2OCw2MyBDMjQuODk0ODM0MSw2MyAyNCw2Mi4xMDAyODczIDI0LDYxLjAwNjcxMjYgTDI0LDM1Ljk5MzI4NzQgQzI0LDM0Ljg5MjQyNTIgMjQuODk0MTI0MSwzNCAyNS45OTg2NjgsMzQgTDg3LjAwMTMzMiwzNCBaIE0yNiwzNiBMMjYsNjEgTDg3LDYxIEw4NywzNiBMMjYsMzYgWiBNNzksNDAgTDgzLDQwIEw4Myw0NCBMNzksNDQgTDc5LDQwIFogTTcyLDQwIEw3Niw0MCBMNzYsNDQgTDcyLDQ0IEw3Miw0MCBaIE02NSw0MCBMNjksNDAgTDY5LDQ0IEw2NSw0NCBMNjUsNDAgWiBNNTgsNDAgTDYyLDQwIEw2Miw0NCBMNTgsNDQgTDU4LDQwIFogTTUxLDQwIEw1NSw0MCBMNTUsNDQgTDUxLDQ0IEw1MSw0MCBaIE00NCw0MCBMNDgsNDAgTDQ4LDQ0IEw0NCw0NCBMNDQsNDAgWiBNMzcsNDAgTDQxLDQwIEw0MSw0NCBMMzcsNDQgTDM3LDQwIFogTTMwLDQwIEwzNCw0MCBMMzQsNDQgTDMwLDQ0IEwzMCw0MCBaIE03OSw0NyBMODMsNDcgTDgzLDUxIEw3OSw1MSBMNzksNDcgWiBNNzIsNDcgTDc2LDQ3IEw3Niw1MSBMNzIsNTEgTDcyLDQ3IFogTTY1LDQ3IEw2OSw0NyBMNjksNTEgTDY1LDUxIEw2NSw0NyBaIE01OCw0NyBMNjIsNDcgTDYyLDUxIEw1OCw1MSBMNTgsNDcgWiBNNTEsNDcgTDU1LDQ3IEw1NSw1MSBMNTEsNTEgTDUxLDQ3IFogTTQ0LDQ3IEw0OCw0NyBMNDgsNTEgTDQ0LDUxIEw0NCw0NyBaIE0zNyw0NyBMNDEsNDcgTDQxLDUxIEwzNyw1MSBMMzcsNDcgWiBNMzAsNDcgTDM0LDQ3IEwzNCw1MSBMMzAsNTEgTDMwLDQ3IFogTTc5LDU0IEw4Myw1NCBMODMsNTggTDc5LDU4IEw3OSw1NCBaIE03Miw1NCBMNzYsNTQgTDc2LDU4IEw3Miw1OCBMNzIsNTQgWiBNNDQsNTQgTDY5LDU0IEw2OSw1OCBMNDQsNTggTDQ0LDU0IFogTTM3LDU0IEw0MSw1NCBMNDEsNTggTDM3LDU4IEwzNyw1NCBaIE0zMCw1NCBMMzQsNTQgTDM0LDU4IEwzMCw1OCBMMzAsNTQgWiBNNDQuMzE2MzQ5OCw2OS45NzcxMDQ3IEM0My4zNjg0MjI1LDcwLjU0MjAzNDIgNDMuMzMzODcyMSw3MS41MDk2NDk1IDQ0LjIzNzgyMTcsNzIuMTM3MzkxMiBMNTUuMzYyMTUzOSw3OS44NjI2MDg4IEM1Ni4yNjY3MTEzLDgwLjQ5MDc3MjYgNTcuNzMzODk2NSw4MC40OTAzNTA1IDU4LjYzNzg0NjEsNzkuODYyNjA4OCBMNjkuNzYyMTc4Myw3Mi4xMzczOTEyIEM3MC42NjY3MzU3LDcxLjUwOTIyNzQgNzAuNjQ4MDEyLDcwLjUyMDUyMDQgNjkuNzExNTE4Nyw2OS45MjM0MTY2IEw2OS45ODI1NzMxLDcwLjA5NjIzOTYgQzY5LjUxODEzMzMsNjkuODAwMTE1IDY4Ljc3ODI1NTcsNjkuODEyNjQ5MyA2OC4zMjYxMzA3LDcwLjEyNjkzMjMgTDU3LjgxNTQ5OTksNzcuNDMzMTI2MyBDNTcuMzY1MTExNyw3Ny43NDYyMDIgNTYuNjI4MTY1LDc3LjczODE3ODYgNTYuMTc2MjEwMyw3Ny40MTk5NDI0IEw0NS44Mzg2MTM3LDcwLjE0MDg5NzcgQzQ1LjM4MzY0NzIsNjkuODIwNTQwNyA0NC42Mzc1MDM5LDY5Ljc4NTcwODggNDQuMTU2NjM5Myw3MC4wNzIyODYyIEw0NC4zMTYzNDk4LDY5Ljk3NzEwNDcgWicgaWQ9J1NoYXBlJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0b2JqZWN0cyA6IFxuXHRcdFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMTEpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTEgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5MaWdodGJ1bGI8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDQuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nTGlnaHRidWxiJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDQuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LDEwLjQwMDI5MDQgQzkuNzgwODM3OTUsOS40ODk5MzQ5MSAxMSw3LjYzNzM0MjczIDExLDUuNSBDMTEsMi40NjI0MzM4OCA4LjUzNzU2NjEyLDAgNS41LDAgQzIuNDYyNDMzODgsMCAwLDIuNDYyNDMzODggMCw1LjUgQzAsNy42MzczNDI3MyAxLjIxOTE2MjA1LDkuNDg5OTM0OTEgMywxMC40MDAyOTA0IEwzLDE0LjAwMjA4NjkgQzMsMTUuMTAxNzM5NCAzLjg5NzYxNjAyLDE2IDUuMDA0ODgxNSwxNiBMNS45OTUxMTg1LDE2IEM3LjEwNjEwMDIsMTYgOCwxNS4xMDU1MDM4IDgsMTQuMDAyMDg2OSBMOCwxMC40MDAyOTA0IFonIGlkPSdPdmFsLTE3JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzMnIHk9JzEyJyB3aWR0aD0nNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzQnIHk9JzEzLjUnIHdpZHRoPScxLjUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSw4LjUgQzUsOC41IDMuNDk5OTk5OTksNy41MDAwMDAwMSA0LDcgQzQuNTAwMDAwMDEsNi40OTk5OTk5OSA1LDcuNjY2NjY2NjcgNS41LDggQzUuNSw4IDYuNSw2LjUwMDAwMDAxIDcsNyBDNy41LDcuNDk5OTk5OTkgNiw4LjUgNiw4LjUgTDYsMTEgTDUsMTEgTDUsOC41IFonIGlkPSdSZWN0YW5nbGUtNTInIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdHNoaWZ0IDoge1xuXHRcdG9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nI3t1dGlscy5weCgyMCl9cHgnIGhlaWdodD0nI3t1dGlscy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyMCAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yMS43MDUyMzg4LDEzLjIwNTIzODggQzIxLjMxNTc0NjIsMTIuODE1NzQ2MiAyMC42ODU3NTU5LDEyLjgxNDI0NDEgMjAuMjk0NzYxMiwxMy4yMDUyMzg4IEwxMS45MTYwNzY3LDIxLjU4MzkyMzMgQzExLjEzMzk5OTEsMjIuMzY2MDAwOSAxMS4zOTgyNjA2LDIzIDEyLjQ5NzkxMzEsMjMgTDE2LjUsMjMgTDE2LjUsMjguMDA5MjIyIEMxNi41LDI4LjU1NjQxMzYgMTYuOTQ2MzExNCwyOSAxNy40OTc1NDQ2LDI5IEwyNC41MDI0NTU0LDI5IEMyNS4wNTMzODQsMjkgMjUuNSwyOC41NDkwMjQ4IDI1LjUsMjguMDA5MjIyIEwyNS41LDIzIEwyOS41MDIwODY5LDIzIEMzMC42MDU1MDM4LDIzIDMwLjg2NjgyNCwyMi4zNjY4MjQgMzAuMDgzOTIzMywyMS41ODM5MjMzIEwyMS43MDUyMzg4LDEzLjIwNTIzODggWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0b2ZmIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDIwKX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDIwIDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMjkuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yMS42NzE5MDA4LDEyLjIzMjU4OTggQzIxLjMwMTAzMiwxMS44Mjc5OTE2IDIwLjY5NDY4OTIsMTEuODMzNDczMSAyMC4zMjg4MTk1LDEyLjIzMjU4OTggTDExLjY5NDcwMjMsMjEuNjUxMjk4MyBDMTAuNzU4NzQ0MSwyMi42NzIzMDggMTEuMTI4NTU0MSwyMy41IDEyLjUwOTc3NTEsMjMuNSBMMTUuOTk5OTk5OSwyMy41MDAwMDAyIEwxNS45OTk5OTk5LDI4LjAwMTQyNDEgQzE1Ljk5OTk5OTksMjguODI5MDY0OCAxNi42NzE2NTU5LDI5LjUwMDAwMDEgMTcuNDk3MTAxLDI5LjUwMDAwMDEgTDI0LjUwMjg5OTIsMjkuNTAwMDAwMSBDMjUuMzI5NzI1MywyOS41MDAwMDAxIDI2LjAwMDAwMDMsMjguODM0OTcwMyAyNi4wMDAwMDAzLDI4LjAwMTQyNDEgTDI2LjAwMDAwMDMsMjMuNTAwMDAwMSBMMjkuNDkwMjI1MSwyMy41MDAwMDAyIEMzMC44NzYzMzU3LDIzLjUwMDAwMDIgMzEuMjQzOTUyMSwyMi42NzUxOTE2IDMwLjMwNTQxNjEsMjEuNjUxMjk4NSBMMjEuNjcxOTAwOCwxMi4yMzI1ODk4IFogTTIxLjM0MTc0OCwxNC4zNjQ1MzE2IEMyMS4xNTMwMDU2LDE0LjE2MzIwNjQgMjAuODQzMzUxNSwxNC4xNjcwOTE0IDIwLjY1ODI1MTQsMTQuMzY0NTMxNiBMMTMuNSwyMS45OTk5OTk4IEwxNy41MDAwMDAxLDIxLjk5OTk5OTkgTDE3LjUwMDAwMDIsMjcuNTA4OTk1NiBDMTcuNTAwMDAwMiwyNy43ODAxNzAzIDE3LjczMjkwMjcsMjguMDAwMDAwOCAxOC4wMDM0MjI5LDI4LjAwMDAwMDggTDIzLjk5NjU3NywyOC4wMDAwMDA4IEMyNC4yNzQ2MDk3LDI4LjAwMDAwMDggMjQuNDk5OTk5NywyNy43NzIxMjAzIDI0LjQ5OTk5OTcsMjcuNTA4OTk1NiBMMjQuNDk5OTk5NywyMS45OTk5OTk5IEwyOC41LDIxLjk5OTk5OTkgTDIxLjM0MTc0OCwxNC4zNjQ1MzE2IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0c21pbGV5czogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT46RDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODYuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9JzpEJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg4Ny4wMDAwMDAsIDIzMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdIZWFkJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43ODk0NzM2ODQnIGN4PSc3LjUnIGN5PSc3LjUnIHI9JzcuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNSwxMy41MjYzMTU4IEMxMC4yNjg2OTA3LDEzLjUyNjMxNTggMTIuNTEzMTU3OSwxMC4zNjg0MjEyIDEyLjUxMzE1NzksOS4xODQyMTA0NSBDMTIuNTEzMTU3OSw3LjYwNTI2MzE3IDExLjQzODkwOTgsOS4xODQyMTA0MyA3LjUsOS4xODQyMTA1MyBDMy41NjEwOTAyMyw5LjE4NDIxMDYyIDIuNDg2ODQyMTEsNy42MDUyNjMxNyAyLjQ4Njg0MjExLDkuMTg0MjEwNDUgQzIuNDg2ODQyMTEsMTAuMzY4NDIxIDQuNzMxMzA5MzUsMTMuNTI2MzE1OCA3LjUsMTMuNTI2MzE1OCBaIE03LjUsMTAuOTYwNTI2MyBDOC45MzIzMzA4MywxMS4xNTc4OTQ3IDExLjc5Njk5MjUsMTAuMzY4NDIxIDExLjc5Njk5MjUsOS40NDQyMzU1MiBDMTEuNzk2OTkyNSw4Ljc4OTQ3MzY4IDEwLjg3NjIwODQsOS41Nzg5NDcyNyA3LjUsOS43NzYzMTU3OSBDNC4xMjM3OTE2Miw5LjU3ODk0NzQzIDMuMjAzMDA4NzIsOC43ODk0NzM2OSAzLjIwMzAwNzUyLDkuNDQ0MjM1NTIgQzMuMjAzMDA1ODIsMTAuMzY4NDIxIDYuMDY3NjY5MTcsMTEuMTU3ODk0NyA3LjUsMTAuOTYwNTI2MyBaJyBpZD0nU21pbGUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS4yMzY4NDIxMSw2LjMyMzY1OTggQzUuNjQzNzg4NzYsNi4zMjM2NTk4IDUuOTczNjg0MjEsNS44ODE4MzU1NCA1Ljk3MzY4NDIxLDUuMzM2ODE3NjkgQzUuOTczNjg0MjEsNC43OTE3OTk4NSA1LjY0Mzc4ODc2LDQuMzQ5OTc1NTkgNS4yMzY4NDIxMSw0LjM0OTk3NTU5IEM0LjgyOTg5NTQ1LDQuMzQ5OTc1NTkgNC41LDQuNzkxNzk5ODUgNC41LDUuMzM2ODE3NjkgQzQuNSw1Ljg4MTgzNTU0IDQuODI5ODk1NDUsNi4zMjM2NTk4IDUuMjM2ODQyMTEsNi4zMjM2NTk4IFogTTkuNzM2ODQyMTEsNi4zMjM2NTk4IEMxMC4xNDM3ODg4LDYuMzIzNjU5OCAxMC40NzM2ODQyLDUuODgxODM1NTQgMTAuNDczNjg0Miw1LjMzNjgxNzY5IEMxMC40NzM2ODQyLDQuNzkxNzk5ODUgMTAuMTQzNzg4OCw0LjM0OTk3NTU5IDkuNzM2ODQyMTEsNC4zNDk5NzU1OSBDOS4zMjk4OTU0NSw0LjM0OTk3NTU5IDksNC43OTE3OTk4NSA5LDUuMzM2ODE3NjkgQzksNS44ODE4MzU1NCA5LjMyOTg5NTQ1LDYuMzIzNjU5OCA5LjczNjg0MjExLDYuMzIzNjU5OCBaJyBpZD0nRXllcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXG5cdHN5bWJvbHM6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDE2KX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDE3KX1weCcgdmlld0JveD0nMCAwIDE1IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+T2JqZWN0cyAmYW1wOyBTeW1ib2xzPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMDQuMDAwMDAwLCAtNjM4LjAwMDAwMCknIGZpbGw9JyM0QTU0NjEnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J09iamVjdHMtJmFtcDstU3ltYm9scycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzA0LjAwMDAwMCwgMjMwLjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGluZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzAnIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMicgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjExJyB4PSczJyB5PSczJyB3aWR0aD0nMScgaGVpZ2h0PSc0Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS43NSwwLjE1OTI2Mzk3OCBMMTEuNzUsMCBMMTEsMCBMMTEsNS4wOTE0OTMgQzEwLjU5MzQ0LDQuOTQyMjEzOTIgMTAuMDYzOTY2Miw0Ljk2NDUzMjI0IDkuNTU3MTUzOTksNS4xOTAxNzk1NyBDOC42OTg0OTI5Myw1LjU3MjQ4MDEgOC4yMzAwMzgzNSw2LjM5MzY1NjIxIDguNTEwODMxNDEsNy4wMjQzMjc3NCBDOC43OTE2MjQ0Nyw3LjY1NDk5OTI4IDkuNzE1MzM0NTQsNy44NTYzNDM3NSAxMC41NzM5OTU2LDcuNDc0MDQzMjEgQzExLjI3NjExODMsNy4xNjE0MzgwMyAxMS43MTczMzkzLDYuNTU1Mzg5NzIgMTEuNzAxMzU5NSw2IEwxMS43NSw2IEwxMS43NSwxLjM5Mzg1MDU2IEMxMi4zMTc1OTA4LDEuNTk1OTAwMzcgMTMsMi4wODE3NDU2IDEzLDMuMjUgQzEzLDQuMjUgMTIuNzUsNS41IDEyLjc1LDUuNSBDMTIuNzUsNS41IDEzLjc1LDQuNzUgMTMuNzUsMi41IEMxMy43NSwxLjAyMjU2MTAxIDEyLjU2NDI2NzQsMC40MDc0NzMwMTkgMTEuNzUsMC4xNTkyNjM5NzggWicgaWQ9J05vdGUnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBpZD0nJmFtcDsnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDx0c3BhbiB4PScwLjI1JyB5PScxNic+JmFtcDs8L3RzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBpZD0nJScgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRzcGFuIHg9JzcuNzUnIHk9JzE2Jz4lPC90c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdHRyYXZlbDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7dXRpbHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7dXRpbHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5UcmFuc3BvcnQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0MS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVHJhbnNwb3J0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDEuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsNiBMMSw2IEwxLDE1IEwwLDE1IEwwLDYgWiBNMTUsNCBMMTYsNCBMMTYsMTUgTDE1LDE1IEwxNSw0IFogTTMuNSwwIEw0LjUsMCBMNC41LDcgTDMuNSw3IEwzLjUsMCBaIE0xLDYgTDMuNSw2IEwzLjUsNyBMMSw3IEwxLDYgWiBNNC41LDAgTDkuNSwwIEw5LjUsMSBMNC41LDEgTDQuNSwwIFogTTkuNSwwIEwxMC41LDAgTDEwLjUsNiBMOS41LDYgTDkuNSwwIFogTTEwLjUsNCBMMTUsNCBMMTUsNSBMMTAuNSw1IEwxMC41LDQgWicgaWQ9J1NreWxpbmUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nV2luZG93cycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScwJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc0JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nQ2FyJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjUwMDAwMCwgNi41MDAwMDApJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LjUsOCBMMi41LDggTDIuNSw5LjUgTDAuNSw5LjUgTDAuNSw3Ljg2ODExNDUgQzAuMjAxMjAyMTkyLDcuNjk1ODI3MDIgMCw3LjM3MDkxMzYzIDAsNi45OTA2MzExIEwwLDUuMDA5MzY4OSBDMCw0LjQ1MTkwOTg1IDAuNDQ0ODM2OTc0LDQgMC45OTU1Nzc0OTksNCBMMTAuMDA0NDIyNSw0IEMxMC41NTQyNjQ4LDQgMTEsNC40NDMzNTMxOCAxMSw1LjAwOTM2ODkgTDExLDYuOTkwNjMxMSBDMTEsNy4zNjUzMzE1IDEwLjc5OTAyNDQsNy42OTIzNDUxOSAxMC41LDcuODY2NDkwMDIgTDEwLjUsOS41IEw4LjUsOS41IEw4LjUsOCBaIE0xLjc1LDYuNSBDMi4xNjQyMTM1Niw2LjUgMi41LDYuMTY0MjEzNTYgMi41LDUuNzUgQzIuNSw1LjMzNTc4NjQ0IDIuMTY0MjEzNTYsNSAxLjc1LDUgQzEuMzM1Nzg2NDQsNSAxLDUuMzM1Nzg2NDQgMSw1Ljc1IEMxLDYuMTY0MjEzNTYgMS4zMzU3ODY0NCw2LjUgMS43NSw2LjUgWiBNOS4yNSw2LjUgQzkuNjY0MjEzNTYsNi41IDEwLDYuMTY0MjEzNTYgMTAsNS43NSBDMTAsNS4zMzU3ODY0NCA5LjY2NDIxMzU2LDUgOS4yNSw1IEM4LjgzNTc4NjQ0LDUgOC41LDUuMzM1Nzg2NDQgOC41LDUuNzUgQzguNSw2LjE2NDIxMzU2IDguODM1Nzg2NDQsNi41IDkuMjUsNi41IFogTTAuNSw3IEwxMC41LDcgTDEwLjUsNy41IEwwLjUsNy41IEwwLjUsNyBaIE0zLDYuNSBMOCw2LjUgTDgsNyBMMyw3IEwzLDYuNSBaJyBpZD0nQm9keScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEuNSw0LjUgTDEuNSwzIEMxLjUsMS4zNDMxNDU3NSAyLjgzOTAyMDEzLDAgNC41MDE2NjU0NywwIEw2LjQ5ODMzNDUzLDAgQzguMTU2MTA4NTksMCA5LjUsMS4zNDY1MTcxMiA5LjUsMyBMOS41LDUnIGlkPSdSb29mJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwifVxuXG5iYW5uZXJCRyA9IHtcblx0XCJpcGhvbmUtNVwiOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzMyMHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzMjAgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPmlwaG9uZTU8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTUvNVMvNUMnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDMyMCwwIEwzMjAsNjggTDAsNjggTDAsMCBaIE0xNDIsNjEuMDA0ODgxNSBDMTQyLDU5Ljg5NzYxNiAxNDIuODk2Mjc5LDU5IDE0NC4wMDI0LDU5IEwxNzYuOTk3Niw1OSBDMTc4LjEwMzQ5NSw1OSAxNzksNTkuODkzODk5OCAxNzksNjEuMDA0ODgxNSBMMTc5LDYxLjk5NTExODUgQzE3OSw2My4xMDIzODQgMTc4LjEwMzcyMSw2NCAxNzYuOTk3Niw2NCBMMTQ0LjAwMjQsNjQgQzE0Mi44OTY1MDUsNjQgMTQyLDYzLjEwNjEwMDIgMTQyLDYxLjk5NTExODUgTDE0Miw2MS4wMDQ4ODE1IFonIGlkPSdpcGhvbmU1Jz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRcImlwaG9uZS02c1wiOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMzc1cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDM3NSA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjMuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OC4wMDAwMDAsIDcuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwxNiBMMzc1LDE2IEwzNzUsODQgTDAsODQgTDAsMTYgWiBNMTY5LDc3LjAwNDg4MTUgQzE2OSw3NS44OTc2MTYgMTY5Ljg5NjI3OSw3NSAxNzEuMDAyNCw3NSBMMjAzLjk5NzYsNzUgQzIwNS4xMDM0OTUsNzUgMjA2LDc1Ljg5Mzg5OTggMjA2LDc3LjAwNDg4MTUgTDIwNiw3Ny45OTUxMTg1IEMyMDYsNzkuMTAyMzg0IDIwNS4xMDM3MjEsODAgMjAzLjk5NzYsODAgTDE3MS4wMDI0LDgwIEMxNjkuODk2NTA1LDgwIDE2OSw3OS4xMDYxMDAyIDE2OSw3Ny45OTUxMTg1IEwxNjksNzcuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzQxNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA0MTQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kIENvcHk8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNDMuMDAwMDAwLCAtNzQuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNDMuMDAwMDAwLCA3NC4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMNDE0LDAgTDQxNCw2OCBMMCw2OCBMMCwwIFogTTE4OSw2MS4wMDQ4ODE1IEMxODksNTkuODk3NjE2IDE4OS44OTYyNzksNTkgMTkxLjAwMjQsNTkgTDIyMy45OTc2LDU5IEMyMjUuMTAzNDk1LDU5IDIyNiw1OS44OTM4OTk4IDIyNiw2MS4wMDQ4ODE1IEwyMjYsNjEuOTk1MTE4NSBDMjI2LDYzLjEwMjM4NCAyMjUuMTAzNzIxLDY0IDIyMy45OTc2LDY0IEwxOTEuMDAyNCw2NCBDMTg5Ljg5NjUwNSw2NCAxODksNjMuMTA2MTAwMiAxODksNjEuOTk1MTE4NSBMMTg5LDYxLjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLUNvcHknPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRcImlwYWRcIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPSc3NjhweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgNzY4IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+aXBhZC1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUG9ydHJhaXQnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMNzY4LDAgTDc2OCw2OCBMMCw2OCBMMCwwIFogTTM2Niw2MS4wMDQ4ODE1IEMzNjYsNTkuODk3NjE2IDM2Ni44OTYyNzksNTkgMzY4LjAwMjQsNTkgTDQwMC45OTc2LDU5IEM0MDIuMTAzNDk1LDU5IDQwMyw1OS44OTM4OTk4IDQwMyw2MS4wMDQ4ODE1IEw0MDMsNjEuOTk1MTE4NSBDNDAzLDYzLjEwMjM4NCA0MDIuMTAzNzIxLDY0IDQwMC45OTc2LDY0IEwzNjguMDAyNCw2NCBDMzY2Ljg5NjUwNSw2NCAzNjYsNjMuMTA2MTAwMiAzNjYsNjEuOTk1MTE4NSBMMzY2LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcG9ydHJhaXQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFwiaXBhZC1wcm9cIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxMDI0cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDEwMjQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5pcGFkLXByby1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUHJvLVBvcnRyYWl0JyBmaWxsPScjMUExQTFDJz5cblx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDEwMjQsMCBMMTAyNCw2OCBMMCw2OCBMMCwwIFogTTQ5NCw2MS4wMDQ4ODE1IEM0OTQsNTkuODk3NjE2IDQ5NC44OTYyNzksNTkgNDk2LjAwMjQsNTkgTDUyOC45OTc2LDU5IEM1MzAuMTAzNDk1LDU5IDUzMSw1OS44OTM4OTk4IDUzMSw2MS4wMDQ4ODE1IEw1MzEsNjEuOTk1MTE4NSBDNTMxLDYzLjEwMjM4NCA1MzAuMTAzNzIxLDY0IDUyOC45OTc2LDY0IEw0OTYuMDAyNCw2NCBDNDk0Ljg5NjUwNSw2NCA0OTQsNjMuMTA2MTAwMiA0OTQsNjEuOTk1MTE4NSBMNDk0LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcHJvLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHR9XG4iXX0=
