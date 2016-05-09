require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iOSKit":[function(require,module,exports){
var bannerBG, comp, components, defaults, error, framerDevices, iconLibrary, j, layoutAlign, layoutChange, layoutSize, len, listenToKeys, onResize, screen, setProps, setupComponent, specialChar, textAutoSize;

framerDevices = {
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

exports.device = 0;

exports.name = 0;

exports.scale = 0;

exports.height = 0;

exports.width = 0;

exports.mobile = 0;

exports.platform = 0;

exports.orientation = 0;

screen = {};

exports.getDevice = function() {
  var device;
  device = Framer.Device.deviceType;

  /* This switch looks at the innerWidth to determine if the prototype is being opened on a device. 
  	If so, it'll override the device, and it'll adjust the view to fullscreen.
   */
  switch (innerWidth) {
    case 640:
      device = "apple-iphone-5s-silver";
      Framer.Device.deviceType = "fullscreen";
      break;
    case 750:
      device = "apple-ipad-6s-silver";
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
  exports.scale = framerDevices[device].scale;
  if (device === "fullscreen") {
    exports.width = window.innerWidth;
    exports.height = window.innerHeight;
  } else {
    exports.width = framerDevices[device].width;
    exports.height = framerDevices[device].height;
    if (window.innerWidth === 1242 || window.innerWidth === 2208) {
      exports.width = window.innerWidth;
      exports.height = window.innerHeight;
      exports.scale = 3;
    }
  }
  exports.mobile = framerDevices[device].mobile;
  exports.platform = framerDevices[device].platform;
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
  exports.device = device.replace("-silver", "");
  return screen = {
    width: exports.width,
    height: exports.height
  };
};

exports.orient = function() {
  var tempHeight, tempWidth;
  if (exports.orientation === -90) {
    tempHeight = exports.height;
    tempWidth = exports.width;
    exports.height = tempWidth;
    return exports.width = tempHeight;
  }
};

exports.getDevice();

exports.orient();

window.addEventListener("resize", onResize);

window.addEventListener("orientationchange", onResize);

onResize = function() {
  exports.getDevice();
  return exports.layout();
};

exports.pt = function(px) {
  var pt;
  pt = px / exports.scale;
  pt = Math.round(pt);
  return pt;
};

exports.px = function(pt) {
  var px;
  px = pt * exports.scale;
  px = Math.round(px);
  return px;
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

defaults = {
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
  },
  alert: {
    title: "Title",
    message: "Message",
    actions: ["OK"],
    action: "Action",
    secondaryAction: "secondaryAction"
  },
  banner: {
    title: "Title",
    message: "Message",
    action: "Action",
    time: "now",
    icon: void 0,
    duration: 7,
    animated: false
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
  framerProps: ["name", "width", "height", "superLayer", "opacity", "color", "backgroundColor", "x", "y", "midX", "midY", "maxX", "minX", "visible", "clip", "scrollHorizontal", "scrollVertical", "ignoreEvents", "z", "scaleX", "scaleY", "scaleZ", "scale", "skewX", "skewY", "skew", "originX", "originY", "originZ", "perspective", "perspectiveOriginX", "perspectiveOriginY", "rotationX", "rotationY", "rotationZ", "rotation", "blur", "brightness", "saturate", "hueRotate", "contrast", "invert", "grayscale", "sepia", "shadowX", "shadowY", "shadowBlur", "shadowSpread", "shadowColor", "borderColor", "borderWidth", "force2d", "flat", "backfaceVisible", "name", "matrix", "_matrix2d", "transformMatrix", "matrix3d", "borderRadius", "point", "size", "frame", "html", "image", "scrollX", "scrollY", "_domEventManager", "mouseWheelSpeedMultiplier", "velocityThreshold", "animationOptions", "constrained"],
  cssProps: ["fontFamily", "fontSize", "textAlign", "fontWeight", "lineHeight"],
  styleProps: ["fontFamily", "fontSize", "textAlign", "fontWeight", "lineHeight"],
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
  text: {
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
    name: "text layer",
    constraints: {}
  }
};

setProps = function(object) {
  var keys;
  keys = Object.keys(object);
  return object["props"] = keys;
};

components = [defaults.text, defaults.alert, defaults.banner, defaults.sheet, defaults.field, defaults.table, defaults.tableCell, defaults.keyboard, defaults.button, defaults.navBar, defaults.tabBar, defaults.tab, defaults.statusBar, defaults.lockScreen];

for (j = 0, len = components.length; j < len; j++) {
  comp = components[j];
  setProps(comp);
}

setupComponent = function(component, array) {
  var i, l, len1, obj, ref;
  if (array === void 0) {
    array = [];
  }
  obj = {};
  ref = defaults[component].props;
  for (l = 0, len1 = ref.length; l < len1; l++) {
    i = ref[l];
    if (array[i] !== void 0) {
      obj[i] = array[i];
    } else {
      obj[i] = defaults[component][i];
    }
  }
  return obj;
};

error = function(context, code) {
  if (code === 10) {
    print("Error Invalid Relationship – Layer id:" + context.id + " has a relationship with another layer not in the same superLayer.");
  }
  if (code === 20) {
    print("Error " + context + " requires a layer");
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

exports.animateLayout = function(array) {
  var animatedLayers, delay, i, index, l, layer, len1, len2, len3, m, n, newConstraint, props, ref, ref1, results, setup, stag;
  setup = {};
  animatedLayers = [];
  if (array) {
    ref = Object.keys(defaults.animations);
    for (l = 0, len1 = ref.length; l < len1; l++) {
      i = ref[l];
      if (array[i]) {
        setup[i] = array[i];
      } else {
        setup[i] = defaults.animations[i];
      }
    }
  }
  if (setup.target) {
    if (setup.target.length) {
      animatedLayers = setup.target;
    } else {
      animatedLayers.push(setup.target);
    }
  } else {
    animatedLayers = Framer.CurrentContext.layers;
  }
  if (setup.layer) {
    if (setup.constraints) {
      ref1 = Object.keys(setup.constraints);
      for (m = 0, len2 = ref1.length; m < len2; m++) {
        newConstraint = ref1[m];
        setup.layer.constraints[newConstraint] = setup.constraints[newConstraint];
      }
    }
  }
  results = [];
  for (index = n = 0, len3 = animatedLayers.length; n < len3; index = ++n) {
    layer = animatedLayers[index];
    if (layer.constraints) {
      layer.end = {};
      props = {};
      layer.superFrame = {};
      if (layer.superLayer) {
        layer.superFrame.height = layer.superLayer.height;
        layer.superFrame.width = layer.superLayer.width;
      } else {
        layer.superFrame.height = exports.height;
        layer.superFrame.width = exports.width;
      }
      if (layer.constraints.leading !== void 0 && layer.constraints.trailing !== void 0) {
        layer.constraints.autoWidth = {};
      }
      if (layer.constraints.top !== void 0 && layer.constraints.bottom !== void 0) {
        layer.constraints.autoHeight = {};
      }
      if (layer.constraints.width !== void 0) {
        props.width = exports.px(layer.constraints.width);
      } else {
        props.width = layer.width;
      }
      if (layer.constraints.height !== void 0) {
        props.height = exports.px(layer.constraints.height);
      } else {
        props.height = layer.height;
      }
      if (layer.constraints.leading !== void 0) {
        if (layer.constraints.leading === parseInt(layer.constraints.leading, 10)) {
          props.x = exports.px(layer.constraints.leading);
        } else {
          if (layer.constraints.leading[0].end === void 0) {
            exports.animateLayout({
              layer: layer.constraints.leading[0]
            });
          }
          if (layer.constraints.leading.length === void 0) {
            props.x = layer.constraints.leading.end.x + layer.constraints.leading.end.width;
          } else {
            props.x = layer.constraints.leading[0].end.x + layer.constraints.leading[0].end.width + exports.px(layer.constraints.leading[1]);
          }
        }
      }
      if (layer.constraints.autoWidth !== void 0) {
        layer.constraints.autoWidth.startX = props.x;
      }
      if (layer.constraints.trailing !== void 0) {
        if (layer.constraints.trailing === parseInt(layer.constraints.trailing, 10)) {
          props.x = layer.superFrame.width - exports.px(layer.constraints.trailing) - props.width;
        } else {
          if (layer.constraints.trailing[0].end === void 0) {
            exports.animateLayout({
              layer: layer.constraints.trailing[0]
            });
          }
          if (layer.constraints.trailing.length === void 0) {
            props.x = layer.constraints.trailing.end.x - props.width;
          } else {
            props.x = layer.constraints.trailing[0].end.x - exports.px(layer.constraints.trailing[1]) - props.width;
          }
        }
      }
      if (layer.constraints.autoWidth !== void 0) {
        layer.constraints.autoWidth.endX = props.x;
        props.x = layer.constraints.autoWidth.startX;
        props.width = layer.constraints.autoWidth.endX - layer.constraints.autoWidth.startX + props.width;
      }
      if (layer.constraints.top !== void 0) {
        if (layer.constraints.top === parseInt(layer.constraints.top, 10)) {
          props.y = exports.px(layer.constraints.top);
        } else {
          if (layer.constraints.top[0].end === void 0) {
            exports.animateLayout({
              layer: layer.constraints.top[0]
            });
          }
          if (layer.constraints.top.length === void 0) {
            props.y = layer.constraints.top.end.y + layer.constraints.top.end.height;
          } else {
            props.y = layer.constraints.top[0].end.y + layer.constraints.top[0].end.height + exports.px(layer.constraints.top[1]);
          }
        }
      }
      if (layer.constraints.autoHeight !== void 0) {
        layer.constraints.autoHeight.startY = props.y;
      }
      if (layer.constraints.bottom !== void 0) {
        if (layer.constraints.bottom === parseInt(layer.constraints.bottom, 10)) {
          props.y = layer.superFrame.height - exports.px(layer.constraints.bottom) - props.height;
        } else {
          if (layer.constraints.bottom[0].end === void 0) {
            exports.animateLayout({
              layer: layer.constraints.bottom[0]
            });
          }
          if (layer.constraints.bottom.length === void 0) {
            props.y = layer.constraints.bottom.end.y - props.height;
          } else {
            props.y = layer.constraints.bottom[0].end.y - exports.px(layer.constraints.bottom[1]);
          }
        }
      }
      if (layer.constraints.autoHeight !== void 0) {
        layer.constraints.autoHeight.endY = props.y;
        props.height = layer.constraints.autoHeight.endY - layer.constraints.autoHeight.startY;
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
        props.x = layer.constraints.horizontalCenter.end.x + (layer.constraints.horizontalCenter.end.width - props.width) / 2;
      }
      if (layer.constraints.verticalCenter !== void 0) {
        props.y = layer.constraints.verticalCenter.end.y + (layer.constraints.verticalCenter.end.height - props.height) / 2;
      }
      if (layer.constraints.center !== void 0) {
        props.x = layer.constraints.center.end.x + (layer.constraints.center.end.width - props.width) / 2;
        props.y = layer.constraints.center.end.y + (layer.constraints.center.end.height - props.height) / 2;
      }
      if (layer.constraints.leadingEdges !== void 0) {
        props.x = layer.constraints.leadingEdges.end.x;
      }
      if (layer.constraints.trailingEdges !== void 0) {
        props.x = layer.constraints.trailingEdges.end.x - props.width + layer.constraints.trailingEdges.end.width;
      }
      if (layer.constraints.topEdges !== void 0) {
        props.y = layer.constraints.topEdges.end.y;
      }
      if (layer.constraints.bottomEdges !== void 0) {
        props.y = layer.constraints.bottomEdges.end.y - props.height + layer.constraints.bottomEdges.end.height;
      }
      delay = setup.delay;
      if (setup.stagger) {
        stag = setup.stagger;
        delay = index * stag;
      }
      if (setup.fadeOut) {
        if (layer === setup.fadeOut) {
          props.opacity = 0;
        }
      }
      if (setup.fadeIn) {
        props.opacity = 1;
      }
      layer.animate({
        properties: props,
        time: setup.time,
        delay: delay,
        curve: setup.curve,
        repeat: setup.repeat,
        colorModel: setup.colorModel,
        curveOptions: setup.curveOptions
      });
      results.push(layer.end = props);
    } else {
      results.push(void 0);
    }
  }
  return results;
};

exports.layout = function(layer) {
  var a, c, l, len1, len2, len3, len4, m, n, p, q, ref, ref1, ref2, ref3, results;
  if (layer === void 0) {
    this.array = Framer.CurrentContext.layers;
  } else {
    this.array = [layer];
  }
  ref = this.array;
  results = [];
  for (l = 0, len1 = ref.length; l < len1; l++) {
    layer = ref[l];
    if (layer.constraints) {
      ref1 = defaults.constraintProps;
      for (m = 0, len2 = ref1.length; m < len2; m++) {
        p = ref1[m];
        layoutSize(layer, p);
      }
      ref2 = defaults.constraintTypes;
      for (n = 0, len3 = ref2.length; n < len3; n++) {
        c = ref2[n];
        if (layer.constraints[c] !== void 0) {
          layoutChange(layer, c);
        }
      }
      ref3 = defaults.constraintAligns;
      for (q = 0, len4 = ref3.length; q < len4; q++) {
        a = ref3[q];
        if (layer.constraints[a]) {
          layoutAlign(layer, a);
        }
      }
      if (layer.constraintListener === void 0) {
        results.push(layer.constraintListener = true);
      } else {
        results.push(void 0);
      }
    } else {
      results.push(void 0);
    }
  }
  return results;
};

layoutAlign = function(layer, type) {
  var declaredConstraint, deltaMove, i, l, len1;
  declaredConstraint = layer.constraints[type];
  if (layer.superLayer) {
    this.superLayer = layer.superLayer;
  } else {
    this.superLayer = screen;
  }
  if (declaredConstraint === parseInt(declaredConstraint, 10)) {
    error(type, 20);
  }
  if (declaredConstraint === layer) {
    error(type, 21);
  }
  if (typeof declaredConstraint === "object") {
    for (l = 0, len1 = declaredConstraint.length; l < len1; l++) {
      i = declaredConstraint[l];
      if (typeof i === "string") {
        this.type = i;
      }
      if (typeof i === "object") {
        this.layer = i;
      }
    }
    if (this.type === "horizontalCenter" || this.type === "horizontal") {
      deltaMove = (this.layer.width - layer.width) / 2;
      layer.x = this.layer.x + deltaMove;
      layer.constraints["leading"] = exports.pt(layer.x);
    }
    if (this.type === "verticalCenter" || this.type === "vertical") {
      deltaMove = (this.layer.height - layer.height) / 2;
      layer.y = this.layer.y + deltaMove;
      layer.constraints["top"] = exports.pt(layer.y);
    }
    if (this.type === "leadingEdges" || this.type === "leading") {
      layer.x = this.layer.x;
      layer.constraints["leading"] = exports.pt(layer.x);
    }
    if (this.type === "trailingEdges" || this.type === "trailing") {
      layer.maxX = this.layer.maxX;
      layer.constraints["trailing"] = exports.pt(this.superLayer.width - layer.maxX);
    }
    if (this.type === "topEdges" || this.type === "top") {
      layer.y = this.layer.y;
      layer.constraints["top"] = exports.pt(layer.y);
    }
    if (this.type === "bottomEdges" || this.type === "bottom") {
      layer.maxY = this.layer.maxY;
      layer.constraints["bottom"] = exports.pt(this.superLayer.height - layer.maxY);
    }
  }
  if (type === "horizontalCenter" || type === "horizontal") {
    deltaMove = (declaredConstraint.width - layer.width) / 2;
    layer.x = declaredConstraint.x + deltaMove;
  }
  if (type === "verticalCenter" || type === "vertical") {
    deltaMove = (declaredConstraint.height - layer.height) / 2;
    layer.y = declaredConstraint.y + deltaMove;
  }
  if (type === "leadingEdges") {
    layer.x = declaredConstraint.x;
    layer.constraints["leading"] = exports.pt(declaredConstraint.x);
  }
  if (type === "trailingEdges") {
    layer.maxX = declaredConstraint.maxX;
    layer.constraints["trailing"] = exports.pt(this.superLayer.height - layer.maxX);
  }
  if (type === "topEdges") {
    layer.y = declaredConstraint.y;
    layer.constraints["top"] = exports.pt(layer.y);
  }
  if (type === "bottomEdges") {
    layer.maxY = declaredConstraint.maxY;
    layer.constraints["bottom"] = exports.pt(this.superLayer.height - layer.maxY);
  }
  if (type === "align") {
    if (declaredConstraint === "horizontal") {
      layer.centerX();
    }
    if (declaredConstraint === "vertical") {
      layer.centerY();
    }
    if (declaredConstraint === "center") {
      layer.center();
    }
    if (declaredConstraint === "vertical") {
      return layer.centerY();
    }
  }
};

layoutSize = function(layer, type) {
  var textFrame;
  if (layer.constraints[type]) {
    layer[type] = exports.px(layer.constraints[type]);
    if (layer.type === "text") {
      textFrame = textAutoSize(layer);
      layer.width = textFrame.width;
      return layer.height = textFrame.height;
    }
  }
};

layoutChange = function(layer, type) {
  var endTrait, endX, l, len1, len2, len3, m, n, objProp, objProp2, object, opp, prop, ref, ref1, ref2, results, startX, superTrait, trait;
  if (layer.constraints[type] !== void 0) {
    prop = defaults.constraints[type].prop;
    objProp = defaults.constraints[type].objProp;
    opp = defaults.constraints[type].opp;
    superTrait = defaults.constraints[type].objProp;
    if (objProp !== "width" && objProp !== "height") {
      superTrait = defaults.constraints[type].objProp2;
    }
    if (layer.superLayer !== null) {
      this[superTrait] = layer.superLayer[superTrait];
    } else {
      this[superTrait] = exports[superTrait];
    }
    if (type === "top" || type === "leading") {
      if (layer.constraints[type] === parseInt(layer.constraints[type], 10)) {
        layer[prop] = layer.constraints[type] * exports.scale;
      } else {
        if (layer.constraints[type].length === void 0) {
          layer[prop] = layer.constraints[type][objProp];
        }
        if (layer.constraints[type].length === 1) {
          if (layer.constraints[type][0] === parseInt(layer.constraints[type][0], 10)) {
            layer[prop] = layer.constraints[type][0] * exports.scale;
          } else {
            layer[prop] = layer.constraints[type][0][objProp];
          }
        }
        if (layer.constraints[type].length > 1) {
          ref = layer.constraints[type];
          for (l = 0, len1 = ref.length; l < len1; l++) {
            object = ref[l];
            if (object === parseInt(object, 10)) {
              this.objInt = object;
            } else {
              this.objLayer = object;
            }
          }
          layer[prop] = (this.objInt * exports.scale) + this.objLayer[objProp];
        }
      }
      if (layer.constraints[opp] !== void 0) {
        trait = defaults.constraints[opp]["objProp"];
        if (layer.constraints[opp] === parseInt(layer.constraints[opp], 10)) {
          return layer[trait] = this[superTrait] - (layer[prop] + (exports.scale * layer.constraints[opp]));
        } else {
          if (layer.constraints[opp].length === void 0) {
            layer[trait] = layer[prop] - layer.constraints[opp][prop];
            if (layer[trait] < 0) {
              return layer[trait] = layer[trait] * -1;
            }
          } else {
            startX = layer.x;
            endX = 0;
            ref1 = layer.constraints[opp];
            for (m = 0, len2 = ref1.length; m < len2; m++) {
              object = ref1[m];
              if (object === parseInt(object, 10)) {
                endX = endX - object;
              } else {
                endTrait = defaults.constraints[opp].objProp2;
                endX = endX + object[endTrait];
              }
            }
            return layer.width = endX - startX;
          }
        }
      }
    } else {
      objProp2 = defaults.constraints[type].objProp2;
      if (layer.constraints[opp] === void 0) {
        if (layer.constraints[type] === parseInt(layer.constraints[type], 10)) {
          return layer[prop] = this[superTrait] - (layer.constraints[type] * exports.scale);
        } else {
          if (layer.constraints[type].length === void 0) {
            if (exports.sameParent(layer, layer.constraints[type])) {
              layer[prop] = layer.constraints[type][objProp2];
            } else {
              error(layer, 10);
            }
          }
          if (layer.constraints[type].length === 1) {
            if (layer.constraints[type][0] === parseInt(layer.constraints[type][0], 10)) {
              layer[prop] = this[objProp] - (layer.constraints[type][0] * exports.scale);
            } else {
              if (exports.sameParent(layer, layer.constraints[type][0])) {
                layer[prop] = layer.constraints[type][0][objProp2];
              } else {
                error(layer, 10);
              }
            }
          }
          if (layer.constraints[type].length > 1) {
            ref2 = layer.constraints[type];
            results = [];
            for (n = 0, len3 = ref2.length; n < len3; n++) {
              object = ref2[n];
              if (object === parseInt(object, 10)) {
                this.objInt = object;
              } else {
                this.objLayer = object;
              }
              results.push(layer[prop] = this.objLayer[objProp2] - exports.scale * this.objInt);
            }
            return results;
          }
        }
      }
    }
  }
};

exports.styles = {};

exports.bgBlur = function(layer) {
  layer.style["-webkit-backdrop-filter"] = "blur(" + (exports.px(5)) + "px)";
  return layer;
};

textAutoSize = function(textLayer) {
  var constraints, styles, textWidth;
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
        return key.backgroundColor = exports.color("light-key");
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
              backgroundColor: exports.color("light-key")
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
            y: exports.height
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
          keypress(keyboard.keys["delete"]);
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
        keyboard.keys["return"].backgroundColor = exports.color("light-key");
      }
      if (e.keyCode === 32 && keyboard) {
        keyboard.keys.space.backgroundColor = "White";
      }
      if (e.keyCode === 8 && keyboard) {
        keyboard.keys["delete"].animate({
          properties: {
            backgroundColor: exports.color("light-key")
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
              backgroundColor: exports.color("light-key")
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
        layer.color = exports.color(value);
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
    borderRadius: exports.px(10),
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
  modal.constraints["height"] = 20 + exports.pt(title.height) + 10 + exports.pt(message.height) + 24 + 44;
  actions = [];
  switch (setup.actions.length) {
    case 1:
      actLabel = exports.capitalize(setup.actions[0]);
      action = new Layer({
        superLayer: modal,
        backgroundColor: "transparent",
        name: setup.actions[0],
        borderRadius: exports.px(10)
      });
      action.constraints = {
        leading: 0,
        trailing: 0,
        bottom: 0,
        height: 44
      };
      action.label = new exports.Text({
        style: "alertAction",
        color: exports.color("blue"),
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
        borderRadius: exports.px(10),
        backgroundColor: "white"
      });
      action.constraints = {
        leading: 0,
        trailing: exports.pt(modal.width / 2),
        bottom: 0,
        height: 44
      };
      action.label = new exports.Text({
        style: "alertAction",
        color: exports.color("blue"),
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
        borderRadius: exports.px(10),
        backgroundColor: "white"
      });
      action2.constraints = {
        leading: exports.pt(modal.width / 2),
        trailing: 0,
        bottom: 0,
        height: 44
      };
      action2.label = new exports.Text({
        style: "alertAction",
        color: exports.color("blue"),
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
          borderRadius: exports.px(10),
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
          color: exports.color("blue"),
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
      act.origColor = exports.color("red");
    } else {
      act.origColor = exports.color("blue");
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

exports.Banner = function(array) {
  var banner, bannerBuffer, message, setup, time, title;
  setup = setupComponent("banner", array);
  banner = new Layer({
    backgroundColor: "transparent",
    name: "banner"
  });
  banner.html = exports.svg(bannerBG[exports.device]).svg;
  banner.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 68
  };
  switch (exports.device) {
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
    default:
      this.leadingIcon = 15;
      this.topIcon = 8;
      this.topTitle = 5;
  }
  if (setup.icon === void 0) {
    setup.icon = new Layer({
      superLayer: banner
    });
    setup.icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)";
  } else {
    banner.addSubLayer(setup.icon);
  }
  setup.icon.borderRadius = exports.px(4.5);
  setup.icon.name = "icon";
  setup.icon.constraints = {
    height: 20,
    width: 20,
    leading: this.leadingIcon,
    top: this.topIcon
  };
  title = new exports.Text({
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
  message = new exports.Text({
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
  time = new exports.Text({
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
  if (exports.device === "ipad" || exports.device === "ipad-pro") {
    time.constraints = {
      bottomEdges: title,
      trailing: this.leadingIcon
    };
  }
  exports.layout();
  exports.bgBlur(banner);
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
    if (banner.maxY < exports.px(68)) {
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
    width: exports.width,
    maxY: banner.y,
    height: exports.height
  });
  exports.bgBlur(bannerBuffer);
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
    exports.layout();
  }
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(button);
  }
  switch (setup.buttonType) {
    case "big":
      this.fontSize = 20;
      this.top = 18;
      this.fontWeight = "medium";
      button.constraints = {
        leading: 10,
        trailing: 10,
        height: 57
      };
      button.borderRadius = exports.px(12.5);
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
      button.borderRadius = exports.px(2.5);
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
      button.borderWidth = exports.px(1);
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
        width: textLayer.width + exports.px(60),
        height: textLayer.height + exports.px(10)
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
  var field, placeholder, setup, text;
  setup = setupComponent("field", array);
  field = new Layer({
    borderRadius: exports.px(setup.borderRadius),
    backgroundColor: setup.backgroundColor,
    width: exports.px(setup.width),
    height: exports.px(setup.height)
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
          y: exports.height
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
            y: exports.height
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
        width: exports.px(setup.cursor.width),
        height: exports.px(setup.cursor.height),
        superLayer: field,
        name: "cursor",
        backgroundColor: exports.color("blue"),
        borderRadius: exports.px(1)
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
      break;
    default:
      this.topConstraint = 3;
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
      this.isLockScreenPresent = true;
    }
  }
  if (this.isLockScreenPresent) {
    gripper = new Layer({
      superLayer: statusBar,
      width: exports.px(37),
      height: exports.px(5),
      name: "gripper",
      backgroundColor: "transparent",
      opacity: .5,
      name: "gripper"
    });
    gripper.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(37)) + "px' height='" + (exports.px(5)) + "px' viewBox='0 0 37 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Gripper</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Keyboard/Auto-Complete-Bar-Closed' transform='translate(-169.000000, -2.000000)' fill='#FFFFFF'> <rect id='Gripper' x='169.5' y='2.5' width='36' height='4' rx='2.5'></rect> </g> </g> </svg>";
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
        height: exports.px(5.5),
        width: exports.px(5.5),
        backgroundColor: "black",
        superLayer: statusBar,
        borderRadius: exports.px(5.5) / 2,
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
          height: exports.px(5.5),
          width: exports.px(5.5),
          superLayer: statusBar,
          borderRadius: exports.px(5.5) / 2,
          backgroundColor: "transparent",
          name: "signal[" + signal.length + "]"
        });
        nonDot.style.border = (exports.px(1)) + "px solid " + this.color;
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
        width: exports.px(14),
        height: exports.px(10),
        superLayer: statusBar,
        backgroundColor: "transparent",
        name: "network"
      });
      network.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(14)) + "px' height='" + (exports.px(10)) + "px' viewBox='0 0 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Wi-Fi</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/Charging' transform='translate(-87.000000, -5.000000)' fill='" + this.color + "'> <path d='M96.1444208,12.4385043 C95.626374,11.8454456 94.8523616,11.4689119 93.987563,11.4689119 C93.1390073,11.4689119 92.3778594,11.8314341 91.8601652,12.4053177 L94.0225391,14.5 L96.1444208,12.4385043 Z M98.3234964,10.3214425 C97.2447794,9.19174563 95.7014387,8.48445596 93.987563,8.48445596 C92.2882723,8.48445596 90.7566264,9.17975893 89.6792698,10.2926936 L90.7692987,11.3486 C91.567205,10.5053708 92.713648,9.97668394 93.987563,9.97668394 C95.2768836,9.97668394 96.4356305,10.518235 97.2346215,11.3793293 L98.3234964,10.3214425 L98.3234964,10.3214425 Z M100.5,8.20687933 C98.8629578,6.53943672 96.5505699,5.5 93.987563,5.5 C91.4375103,5.5 89.1355496,6.52895605 87.5,8.18164431 L88.5895579,9.23709441 C89.9460798,7.85431655 91.8628921,6.99222798 93.987563,6.99222798 C96.1260026,6.99222798 98.0538809,7.86552609 99.4118698,9.26404272 L100.5,8.20687933 Z' id='Wi-Fi'></path> </g> </g> </svg>";
      network.constraints = {
        leading: [signal[signal.length - 1], 7],
        top: this.topConstraint
      };
    }
  }
  batteryIcon = new Layer({
    width: exports.px(25),
    height: exports.px(10),
    superLayer: statusBar,
    backgroundColor: "transparent",
    name: "batteryIcon"
  });
  if (setup.battery > 70) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(25)) + "px' height='" + (exports.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.506744,6.5 C346.226877,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.230225,14 346.506744,14 L365.993256,14 C366.273123,14 366.5,13.783628 366.5,13.5079041 L366.5,6.99209595 C366.5,6.72031886 366.269775,6.5 365.993256,6.5 L346.506744,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  if (setup.battery <= 70 && setup.battery > 20) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(25)) + "px' height='" + (exports.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/White/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.501231,6.5 C346.224409,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.229751,14 346.501231,14 L356.498769,14 C356.775591,14 357,13.783628 357,13.5079041 L357,6.99209595 C357,6.72031886 356.770249,6.5 356.498769,6.5 L346.501231,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  if (setup.battery <= 20) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(25)) + "px' height='" + (exports.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/White/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.490479,6.5 C346.219595,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.215057,14 346.490479,14 L349.509521,14 C349.780405,14 350,13.783628 350,13.5079041 L350,6.99209595 C350,6.72031886 349.784943,6.5 349.509521,6.5 L346.490479,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  batteryIcon.constraints = {
    trailing: 7,
    top: this.topConstraint
  };
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
    top: 3
  };
  bluetooth = new Layer({
    width: exports.px(8),
    height: exports.px(15),
    superLayer: statusBar,
    opacity: .5,
    backgroundColor: "transparent",
    name: "bluetooth"
  });
  bluetooth.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(8)) + "px' height='" + (exports.px(15)) + "px' viewBox='0 0 8 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Bluetooth</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Icons-(White)' transform='translate(-137.000000, 0.000000)' fill='" + this.color + "'> <path d='M140.5,14.5 L145,10.25 L141.8,7.5 L145,4.75 L140.5,0.5 L140.5,6.07142857 L137.8,3.75 L137,4.5 L140.258333,7.375 L137,10.25 L137.8,11 L140.5,8.67857143 L140.5,14.5 Z M141.5,3 L143.366667,4.75 L141.5,6.25 L141.5,3 Z M141.5,8.5 L143.366667,10.25 L141.5,12 L141.5,8.5 Z' id='Bluetooth'></path> </g> </g> </svg>";
  bluetooth.constraints = {
    top: 3,
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
        width: exports.px(26),
        height: exports.px(39)
      };
      boardSpecs.expandedKey = exports.px(39);
      boardSpecs.expandedSpacer = exports.px(12);
      boardSpecs.padding = {};
      boardSpecs.padding.row1 = exports.px(3);
      boardSpecs.padding.row2 = exports.px(19);
      boardSpecs.padding.row3 = exports.px(54);
      boardSpecs.marginTop = {};
      boardSpecs.marginTop.row1 = exports.px(11);
      boardSpecs.marginTop.row2 = exports.px(26);
      boardSpecs.marginTop.row3 = exports.px(41);
      boardSpecs.marginTop.row4 = exports.px(55);
      boardSpecs.shiftIcon = {
        x: exports.px(9),
        y: exports.px(2)
      };
      boardSpecs.deleteIcon = {
        x: exports.px(7),
        y: exports.px(10)
      };
      boardSpecs.emojiIcon = {
        x: exports.px(8),
        y: exports.px(9)
      };
      boardSpecs.sideKey = exports.px(36.5);
      boardSpecs.sideKeyRadius = exports.px(4);
      boardSpecs.sideKeyBottom = exports.px(58);
      boardSpecs.iPadDeleteOffset = 0;
      boardSpecs.bottomRow = 8;
      boardSpecs.returnKey = exports.px(74);
      boardSpecs.spacer = exports.px(6);
      break;
    case "iphone-6s":
      boardSpecs.height = 216;
      boardSpecs.key = {
        width: exports.px(31.5),
        height: exports.px(42)
      };
      boardSpecs.expandedKey = exports.px(46.5);
      boardSpecs.expandedSpacer = exports.px(14);
      boardSpecs.padding = {};
      boardSpecs.padding.row1 = exports.px(3);
      boardSpecs.padding.row2 = exports.px(22);
      boardSpecs.padding.row3 = exports.px(59);
      boardSpecs.marginTop = {};
      boardSpecs.marginTop.row1 = exports.px(10);
      boardSpecs.marginTop.row2 = exports.px(22);
      boardSpecs.marginTop.row3 = exports.px(34);
      boardSpecs.marginTop.row4 = exports.px(44);
      boardSpecs.shiftIcon = {
        x: exports.px(11),
        y: exports.px(2)
      };
      boardSpecs.deleteIcon = {
        x: exports.px(10),
        y: exports.px(13)
      };
      boardSpecs.emojiIcon = {
        x: exports.px(11),
        y: exports.px(11)
      };
      boardSpecs.returnKey = exports.px(87.5);
      boardSpecs.bottomRow = 6;
      boardSpecs.iPadDeleteOffset = 0;
      boardSpecs.sideKey = exports.px(42);
      boardSpecs.sideKeyRadius = exports.px(5);
      boardSpecs.sideKeyBottom = exports.px(56);
      boardSpecs.spacer = exports.px(6);
      break;
    case "iphone-6s-plus":
      boardSpecs.height = 226;
      boardSpecs.key = {
        width: exports.px(35),
        height: exports.px(45)
      };
      boardSpecs.expandedKey = exports.px(50);
      boardSpecs.expandedSpacer = exports.px(20);
      boardSpecs.padding = {};
      boardSpecs.padding.row1 = exports.px(4);
      boardSpecs.padding.row2 = exports.px(25);
      boardSpecs.padding.row3 = exports.px(67);
      boardSpecs.marginTop = {};
      boardSpecs.marginTop.row1 = exports.px(8);
      boardSpecs.marginTop.row2 = exports.px(19);
      boardSpecs.marginTop.row3 = exports.px(30);
      boardSpecs.marginTop.row4 = exports.px(41);
      boardSpecs.shiftIcon = {
        x: exports.px(13),
        y: exports.px(2)
      };
      boardSpecs.deleteIcon = {
        x: exports.px(11),
        y: exports.px(14)
      };
      boardSpecs.emojiIcon = {
        x: exports.px(11),
        y: exports.px(11)
      };
      boardSpecs.bottomRow = 6;
      boardSpecs.iPadDeleteOffset = 0;
      boardSpecs.returnKey = exports.px(97);
      boardSpecs.sideKey = exports.px(45);
      boardSpecs.sideKeyRadius = exports.px(5);
      boardSpecs.spacer = exports.px(6);
      break;
    case "ipad":
      boardSpecs.height = 268;
      boardSpecs.key = {
        width: exports.px(56),
        height: exports.px(56)
      };
      boardSpecs.padding = {};
      boardSpecs.padding.row1 = exports.px(6);
      boardSpecs.padding.row2 = exports.px(35);
      boardSpecs.padding.row3 = exports.px(74);
      boardSpecs.marginTop = {};
      boardSpecs.marginTop.row1 = exports.px(10);
      boardSpecs.marginTop.row2 = exports.px(18);
      boardSpecs.marginTop.row3 = exports.px(28);
      boardSpecs.marginTop.row4 = exports.px(40);
      boardSpecs.shiftIcon = {
        x: exports.px(18),
        y: exports.px(2)
      };
      boardSpecs.deleteIcon = {
        x: exports.px(18),
        y: exports.px(20)
      };
      boardSpecs.emojiIcon = {
        x: exports.px(18),
        y: exports.px(18)
      };
      boardSpecs.bottomRow = 7;
      boardSpecs.iPadDeleteOffset = boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.marginTop.row1;
      boardSpecs.returnKey = exports.px(106);
      boardSpecs.sideKey = exports.px(56);
      boardSpecs.sideKey2 = exports.px(76);
      boardSpecs.sideKeyRadius = exports.px(5);
      boardSpecs.spacer = exports.px(12);
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
    board.y = exports.height;
    board.animate({
      properties: {
        maxY: exports.height
      },
      time: .25,
      curve: "ease-in-out"
    });
  } else {
    board.maxY = exports.height;
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
    x: this.x - 16 * exports.scale,
    backgroundColor: "transparent",
    superLayer: board,
    name: "key pop up"
  });
  box = new Layer({
    borderRadius: exports.px(10),
    superLayer: keyPopUp,
    backgroundColor: "transparent",
    color: "black",
    name: "letter"
  });
  box.style = {
    "font-size": 39 * exports.scale + "px",
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
      borderRadius: 5 * exports.scale,
      backgroundColor: "white",
      color: "black",
      shadowY: exports.px(1),
      shadowColor: "#929498",
      width: boardSpecs.key.width,
      height: boardSpecs.key.height
    });
    board.keys[letter] = key;
    keyPopUp.bringToFront();
    box.bringToFront();
    if (exports.scale === 2) {
      keyPopUp.constraints = {
        width: 65,
        height: 122
      };
      path.constraints = {
        width: 65,
        height: 122
      };
      path.y = 10;
      this.pathWidth = exports.px(65);
      this.pathHeight = exports.px(122);
      this.keyHeight = exports.px(32);
      this.keyWidth = exports.px(44);
      this.lineHeight = this.keyWidth - 17 + "px";
      box.constraints = {
        width: 32,
        height: 44
      };
      box.centerX();
      box.y = exports.px(28);
    }
    if (exports.scale === 3) {
      keyPopUp.constraints = {
        width: 68,
        height: 122
      };
      this.keyHeight = exports.px(122);
      this.keyWidth = exports.px(65);
      this.lineHeight = this.keyWidth + "px";
      this.pathWidth = exports.px(68);
      this.pathHeight = exports.px(128);
      path.y = 0;
      box.constraints = {
        width: 35,
        height: 46
      };
      box.centerX();
      box.y = exports.px(28);
    }
    if (exports.width === 640) {
      key.constraints = {
        width: 26,
        height: 39
      };
    }
    keyPopUp.visible = false;
    exports.layout();
    key.style = {
      "font-size": 25 * exports.scale + "px",
      "font-weight": 300,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': key.height - exports.px(2) + "px"
    };
    if (letter === "," || letter === ".") {
      extraSymbol = new Layer({
        superLayer: key,
        width: exports.px(30),
        height: exports.px(30),
        backgroundColor: "transparent",
        y: exports.px(15),
        color: exports.color("black"),
        name: "!/?"
      });
      extraSymbol.centerX();
      extraSymbol.style = {
        "font-size": exports.px(24) + "px",
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
      key.style["line-height"] = key.height + exports.px(10) + "px";
    }
    key.html = letter;
    if (index <= rowsMap[0].endIndex) {
      rowIndex = index - rowsMap[0].startIndex;
      key.x = rowsMap[0].padding + (rowIndex * boardSpecs.spacer) + firstRowKeyWidth;
      key.y = rowsMap[0].marginTop;
      if (exports.device === "ipad") {
        if (index % 2 !== 0) {
          key.width = key.width + exports.px(2);
        } else {
          key.width = key.width + exports.px(1);
        }
      }
      firstRowKeyWidth = firstRowKeyWidth + key.width;
    }
    if (index > rowsMap[0].endIndex && index <= rowsMap[1].endIndex) {
      rowIndex = index - rowsMap[1].startIndex;
      key.x = rowsMap[1].padding + (rowIndex * boardSpecs.spacer) + secondRowKeyWidth;
      key.y = rowsMap[1].marginTop + key.height;
      key.width = key.width + exports.px(1);
      secondRowKeyWidth = secondRowKeyWidth + key.width;
    }
    if (index > rowsMap[1].endIndex) {
      rowIndex = index - rowsMap[2].startIndex;
      key.x = rowsMap[2].padding + (rowIndex * boardSpecs.spacer) + (rowIndex * key.width);
      key.y = rowsMap[2].marginTop + key.height * 2;
    }
    path.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + this.pathWidth + "px' height='" + this.pathHeight + "' viewBox='0 0 63 114' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <title>Rectangle 44 Copy</title> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.21 0' in='shadowBlurOuter1' type='matrix' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-118.000000, -240.000000)' stroke='#C7C7C7' filter='url(#filter-1)' stroke-width='0.5' fill='#FFFFFF' opacity='0.998367537'> <path d='M134,306 C134,306 121,295 121,290 C121,279.616788 121,253.001456 121,253.001456 C121,247.477804 125.485832,243 131.002774,243 L167.862127,243 C173.386507,243 177.880862,247.469905 177.900044,252.997271 C177.900044,252.997271 178,280 177.999999,290 C177.999999,295.006553 165,306 165,306 L165,346.049594 C165,348.806807 162.770556,351.041969 160.002098,351.041969 L138.997902,351.041969 C136.237637,351.041969 134,348.808331 134,346.049594 L134,306 Z' id='Rectangle-44-Copy' sketch:type='MSShapeGroup' transform='translate(149.500000, 297.020985) scale(-1, 1) translate(-149.500000, -297.020985) '> </path> </g> </g> </svg>";
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
        return this.backgroundColor = exports.color("light-key");
      });
      key.on(Events.TouchEnd, function() {
        return this.backgroundColor = "white";
      });
    }
    key.on(Events.TouchEnd, function() {
      var len2, m;
      if (shiftIcon.states.state === "on") {
        shiftIcon.states["switch"]("default");
        shiftKey.backgroundColor = exports.color("light-key");
        if (exports.device === "ipad") {
          shiftIcon2.states["switch"]("default");
          shiftKey2.backgroundColor = exports.color("light-key");
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
    color: exports.color("black"),
    backgroundColor: exports.color("light-key"),
    shadowY: exports.px(1),
    shadowColor: "#929498",
    width: boardSpecs.sideKey,
    height: boardSpecs.sideKey,
    y: boardSpecs.marginTop.row3 + boardSpecs.key.height * 2
  });
  shiftKey.constraints = {
    leading: exports.pt(boardSpecs.padding.row1)
  };
  shiftIcon = new Layer({
    width: exports.px(20),
    height: exports.px(19),
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
    "font-size": exports.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  shiftKey.on(Events.TouchEnd, function() {
    var len2, len3, len4, len5, m, n, q, r;
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
          shiftKey.backgroundColor = exports.color("light-key");
          if (exports.device === "ipad") {
            shiftKey2.backgroundColor = exports.color("light-key");
          }
          for (n = 0, len3 = keysArray.length; n < len3; n++) {
            key = keysArray[n];
            key.style["text-transform"] = 'lowercase';
          }
          return box.style["text-transform"] = 'lowercase';
        }
        break;
      case 2:
        for (index = q = 0, len4 = keysArray.length; q < len4; index = ++q) {
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
        for (index = r = 0, len5 = keysArray.length; r < len5; index = ++r) {
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
    backgroundColor: exports.color("light-key"),
    shadowY: exports.px(1),
    shadowColor: "#929498",
    name: "delete",
    width: boardSpecs.sideKey,
    height: boardSpecs.sideKey,
    y: boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.iPadDeleteOffset
  });
  deleteKey.constraints = {
    trailing: exports.pt(boardSpecs.spacer) / 2
  };
  deleteIcon = new Layer({
    superLayer: deleteKey,
    width: exports.px(24),
    height: exports.px(18),
    backgroundColor: "transparent",
    x: boardSpecs.deleteIcon.x,
    y: boardSpecs.deleteIcon.y
  });
  if (exports.device === "ipad") {
    deleteKey.width = deleteKey.width + exports.px(5);
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
    deleteKey.backgroundColor = exports.color("light-key");
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
      backgroundColor: exports.color("light-key"),
      shadowY: exports.px(1),
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
      width: exports.px(32.5),
      height: exports.px(23.5),
      backgroundColor: "transparent"
    });
    keyboardIcon.html = iconLibrary.keyboard;
    keyboardIcon.center();
    board.keys.dismiss = keyboardKey;
    shiftKey2 = new Layer({
      superLayer: board,
      name: "shift",
      borderRadius: boardSpecs.sideKeyRadius,
      color: exports.color("black"),
      backgroundColor: exports.color("light-key"),
      shadowY: exports.px(1),
      shadowColor: "#929498",
      width: boardSpecs.sideKey2,
      height: boardSpecs.sideKey
    });
    shiftKey2.constraints = {
      trailingEdges: deleteKey,
      bottomEdges: shiftKey
    };
    shiftIcon2 = new Layer({
      width: exports.px(20),
      height: exports.px(19),
      superLayer: shiftKey2,
      backgroundColor: "transparent",
      x: boardSpecs.shiftIcon.x + exports.px(10),
      y: boardSpecs.shiftIcon.y
    });
    shiftIcon2.html = iconLibrary.shift.off;
    shiftKey2.style = {
      "font-size": exports.px(16) + "px",
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
      var len2, len3, len4, len5, m, n, q, r;
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
            shiftKey.backgroundColor = exports.color("light-key");
            shiftKey2.backgroundColor = exports.color("light-key");
            for (n = 0, len3 = keysArray.length; n < len3; n++) {
              key = keysArray[n];
              key.style["text-transform"] = 'lowercase';
            }
            return box.style["text-transform"] = 'lowercase';
          }
          break;
        case 2:
          for (index = q = 0, len4 = keysArray.length; q < len4; index = ++q) {
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
          for (index = r = 0, len5 = keysArray.length; r < len5; index = ++r) {
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
      color: exports.color("black"),
      backgroundColor: exports.color("light-key"),
      shadowY: exports.px(1),
      shadowColor: "#929498",
      width: boardSpecs.sideKey2,
      height: boardSpecs.key.height
    });
    numKey2.html = ".?123";
    numKey2.style = {
      "font-size": exports.px(16) + "px",
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
                key.style["font-size"] = exports.px(17) + "px";
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
              key.style["font-size"] = exports.px(25) + "px";
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
    borderRadius: exports.px(5),
    backgroundColor: exports.color("light-key"),
    shadowY: exports.px(1),
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
    "font-size": exports.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  numKey.on(Events.TouchStart, function() {
    var len2, len3, len4, len5, m, n, q, r;
    switch (board.keyboardState) {
      case 1:
        switch (exports.device) {
          case "ipad":
            for (index = m = 0, len2 = keysArray.length; m < len2; index = ++m) {
              key = keysArray[index];
              if (index < 27) {
                if (secondArray[index] === "undo") {
                  key.width = key.width * 2 + boardSpecs.spacer;
                  key.style["font-size"] = exports.px(17) + "px";
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
                  leading: [shiftKey, exports.pt(boardSpecs.expandedSpacer)]
                };
                exports.layout();
              }
              if (index > 19) {
                key.width = boardSpecs.expandedKey;
              }
              if (index > 20) {
                key.constraints = {
                  leading: [keysArray[index - 1], exports.pt(boardSpecs.spacer)]
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
          for (index = q = 0, len4 = keysArray.length; q < len4; index = ++q) {
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
        for (index = r = 0, len5 = keysArray.length; r < len5; index = ++r) {
          key = keysArray[index];
          if (key.html === "undo" || "redo") {
            key.width = boardSpecs.key.width;
            key.style["font-size"] = exports.px(25) + "px";
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
    borderRadius: exports.px(5),
    backgroundColor: exports.color("light-key"),
    shadowY: exports.px(1),
    shadowColor: "#929498",
    width: boardSpecs.sideKey,
    height: boardSpecs.key.height
  });
  emojiKey.constraints = {
    bottomEdges: numKey,
    leading: [numKey, 6]
  };
  emojiIcon = new Layer({
    width: exports.px(20),
    height: exports.px(19),
    superLayer: emojiKey,
    backgroundColor: "transparent",
    x: boardSpecs.emojiIcon.x,
    y: boardSpecs.emojiIcon.y
  });
  emojiIcon.html = iconLibrary.emoji;
  returnKey = new Layer({
    superLayer: board,
    borderRadius: exports.px(5),
    backgroundColor: exports.color(setup.returnColor),
    shadowY: exports.px(1),
    shadowColor: "#929498",
    color: "black",
    name: "return",
    width: boardSpecs.returnKey,
    height: boardSpecs.key.height
  });
  if (setup.returnColor !== "light-key") {
    returnKey.color = exports.setTextColor(exports.color(setup.returnColor));
  }
  if (exports.device === "ipad") {
    returnKey.constraints = {
      trailingEdges: deleteKey,
      top: exports.pt(boardSpecs.marginTop.row2 + boardSpecs.key.height)
    };
  } else {
    returnKey.constraints = {
      trailing: exports.pt(boardSpecs.spacer) / 2,
      bottomEdges: numKey
    };
  }
  returnKey.html = setup.returnText;
  returnKey.style = {
    "font-size": exports.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': boardSpecs.key.height + "px"
  };
  exports.layout();
  storedTextColor = returnKey.color;
  returnKey.on(Events.TouchStart, function() {
    returnKey.backgroundColor = "white";
    return returnKey.color = exports.color("black");
  });
  returnKey.on(Events.TouchEnd, function() {
    returnKey.backgroundColor = exports.color(setup.returnColor);
    return returnKey.color = storedTextColor;
  });
  board.keys["return"] = returnKey;
  spaceKey = new Layer({
    superLayer: board,
    borderRadius: exports.px(5),
    backgroundColor: "white",
    shadowY: exports.px(1),
    shadowColor: "#929498",
    color: "black",
    name: "space",
    height: boardSpecs.key.height
  });
  if (exports.device !== "ipad") {
    spaceKey.constraints = {
      bottomEdges: numKey,
      leading: [emojiKey, exports.pt(boardSpecs.spacer)],
      trailing: [returnKey, boardSpecs.spacer]
    };
    spaceKey.html = "space";
    spaceKey.style = {
      "font-size": exports.px(16) + "px",
      "font-weight": 400,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': boardSpecs.key.height + "px"
    };
  } else {
    spaceKey.constraints = {
      bottomEdges: numKey,
      leading: [emojiKey, exports.pt(boardSpecs.spacer)],
      trailing: [numKey2, boardSpecs.spacer]
    };
  }
  board.keys["&nbsp;"] = spaceKey;
  board.keys.space = spaceKey;
  exports.layout();
  spaceKey.on(Events.TouchStart, function() {
    return spaceKey.backgroundColor = exports.color("light-key");
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
    borderRadius: exports.px(12.5),
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
      width: exports.pt(exports.width) - 100
    };
    exports.layout();
    descriptionBuffer = exports.pt(description.height) + 42;
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
      borderRadius: exports.px(12.5)
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
          maxY: exports.height + exports.px((setup.actions.length + 3) * 58)
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
    sheets.maxY = exports.height + exports.px((setup.actions.length + 3) * 58);
    overlay.animate({
      properties: {
        opacity: 1
      },
      time: .3
    });
    sheets.animate({
      properties: {
        maxY: exports.height
      },
      time: .3
    });
  }
  overlay.on(Events.TouchEnd, function() {
    sheets.animate({
      properties: {
        maxY: exports.height + exports.px((setup.actions.length + 3) * 58)
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
        maxY: exports.height + exports.px((setup.actions.length + 3) * 58)
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
      svg = exports.svg(iconLibrary.chevron);
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
    width: exports.px(25),
    height: exports.px(25),
    backgroundColor: "transparent",
    name: "icon",
    superLayer: tabBox
  });
  icon.constraints = {
    align: "horizontal",
    top: 7
  };
  svgFrame = exports.svg(setup.icon);
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
        exports.changeFill(tab.icon, exports.color(setup.activeColor));
        tab.label.color = exports.color(setup.activeColor);
        results.push(tab.view.visible = true);
      } else {
        exports.changeFill(tab.icon, exports.color(setup.inactiveColor));
        tab.label.color = exports.color(setup.inactiveColor);
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
    exports.changeFill(tab.icon, exports.color(setup.inactiveColor));
    tab.label.color = exports.color(setup.inactiveColor);
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
      tabIndex = this.x / exports.px(tabWidth);
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

exports.Text = function(array) {
  var exceptions, l, len1, len2, m, prop, ref, ref1, setup, textFrame, textLayer;
  setup = setupComponent("text", array);
  exceptions = Object.keys(setup);
  textLayer = new Layer({
    backgroundColor: "transparent",
    name: setup.name
  });
  textLayer.type = "text";
  textLayer.html = setup.text;
  ref = defaults.framerProps;
  for (l = 0, len1 = ref.length; l < len1; l++) {
    prop = ref[l];
    if (setup[prop]) {
      if (prop === "color") {
        setup[prop] = exports.color(setup[prop]);
      }
      textLayer[prop] = setup[prop];
    }
  }
  ref1 = defaults.styleProps;
  for (m = 0, len2 = ref1.length; m < len2; m++) {
    prop = ref1[m];
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
      if (setup[prop] === parseInt(setup[prop], 10) && setup[prop] < 99) {
        setup[prop] = exports.px(setup[prop]) + "px";
      }
      textLayer.style[prop] = setup[prop];
    }
  }
  textFrame = textAutoSize(textLayer);
  textLayer.props = {
    height: textFrame.height,
    width: textFrame.width
  };
  textLayer.constraints = setup.constraints;
  exports.layout();
  return textLayer;
};

iconLibrary = {
  activity: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(16)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Soccer Ball</title> <desc>Created with Sketch.</desc> <defs> <circle id='path-1' cx='8' cy='8' r='8'></circle> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-179.000000, -639.000000)'> <g id='Soccer-Ball' sketch:type='MSLayerGroup' transform='translate(179.000000, 639.000000)'> <mask id='mask-2' sketch:name='Mask' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='Mask' stroke='#4A5361' sketch:type='MSShapeGroup' xlink:href='#path-1'></use> <path d='M6,12.1203046 L12.8573384,8 L13.3723765,8.8571673 L6.51503807,12.9774719 L6,12.1203046 L6,12.1203046 Z' id='Rectangle-47' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.849648,8.7260551 L19.1001103,5.34510901 L19.5227285,6.2514168 L12.2722662,9.63236289 L11.849648,8.7260551 L11.849648,8.7260551 Z' id='Rectangle-47-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M6,3.1203046 L12.8573384,-1 L13.3723765,-0.142832699 L6.51503807,3.9774719 L6,3.1203046 L6,3.1203046 Z' id='Rectangle-47-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M-1,7.1203046 L5.85733841,3 L6.37237648,3.8571673 L-0.484961925,7.9774719 L-1,7.1203046 L-1,7.1203046 Z' id='Rectangle-47-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <rect id='Rectangle-50' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='4' y='6' width='1' height='5'></rect> <rect id='Rectangle-51' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='11.5' y='3' width='1' height='12'></rect> <path d='M5,4.8571673 L11.8573384,8.9774719 L12.3723765,8.1203046 L5.51503807,4 L5,4.8571673' id='Rectangle-47-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M5,12.8571673 L11.8573384,16.9774719 L12.3723765,16.1203046 L5.51503807,12 L5,12.8571673' id='Rectangle-47-Copy-5' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1' fill='#D8D8D8' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,3.19504739 L7.35514484,6.13218333 L4.5300676,6.9422612 L2.88664089,4.5057809 L4.69602457,2.18987541 L7.45771189,3.19504739' id='Polygon-1-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,11.1950474 L7.35514484,14.1321833 L4.5300676,14.9422612 L2.88664089,12.5057809 L4.69602457,10.1898754 L7.45771189,11.1950474' id='Polygon-1-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M14.5431701,0.0725939314 L14.4406031,3.00972988 L11.6155258,3.81980774 L9.97209912,1.38332745 L11.7814828,-0.93257805 L14.5431701,0.0725939314' id='Polygon-1-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> </g> </g> </g> </svg>",
  animals: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Group</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-117.000000, -639.000000)' stroke='#4A5361'> <g id='ic_Food' sketch:type='MSLayerGroup' transform='translate(118.000000, 640.000000)'> <g id='Group' sketch:type='MSShapeGroup'> <path d='M5.68377537,1.38156646 C6.23926066,1.13624 6.85372005,1 7.5,1 C8.14627995,1 8.76073934,1.13624 9.31622463,1.38156646 C9.80879275,0.562359019 10.8255888,0 12,0 C13.6568542,0 15,1.11928813 15,2.5 C15,3.5571398 14.2126246,4.46102843 13.0999226,4.82662514 C14.2496528,5.64185422 15,6.98330062 15,8.5 C15,10.7167144 13.3971873,12.5590719 11.2872671,12.9313673 C10.4867248,14.1757703 9.08961696,15 7.5,15 C5.91038304,15 4.51327524,14.1757703 3.71273291,12.9313673 C1.60281268,12.5590719 0,10.7167144 0,8.5 C0,6.98330062 0.750347244,5.64185422 1.90007741,4.82662514 C0.787375445,4.46102843 0,3.5571398 0,2.5 C0,1.11928813 1.34314575,0 3,0 C4.17441122,0 5.19120725,0.562359019 5.68377537,1.38156646 Z' id='Oval-8'></path> <path d='M5.73834228,12 C5.86290979,12 6.14642353,12 6.14642353,12 C6.14642353,12 6.43215696,12.4426123 6.5246582,12.4919739 C6.66455601,12.5666277 7,12.4919739 7,12.4919739 L7,12 L8,12 L8,12.4919739 L8.49799228,12.4919739 L8.84301769,12 L9.3918457,12 C9.3918457,12 8.99598457,12.9839478 8.49799228,12.9839478 L6.60702407,12.9839478 C6.21404813,12.9839478 5.45996094,12 5.73834228,12 Z' id='Rectangle-44-Copy-2'></path> <circle id='Oval-14' cx='10.5' cy='7.5' r='0.5'></circle> <circle id='Oval-14-Copy' cx='4.5' cy='7.5' r='0.5'></circle> <path d='M12.6999969,5 C12.6999969,3.06700338 11.1329936,1.5 9.19999695,1.5' id='Oval-16'></path> <path d='M5.5,5 C5.5,3.06700338 3.93299662,1.5 2,1.5' id='Oval-16-Copy' transform='translate(3.750000, 3.250000) scale(-1, 1) translate(-3.750000, -3.250000) '></path> <rect id='Rectangle-44-Copy' x='7' y='11' width='1' height='1'></rect> <path d='M6,10 L6.5,10 L6.49999999,9.5 L8.50000005,9.5 L8.50000005,10 L9,10 L9,10.5 L8.5,10.5 L8.5,11 L6.5,11 L6.5,10.5 L6,10.5 L6,10 Z' id='Path'></path> </g> </g> </g> </g> </svg>",
  chevron: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='13px' height='22px' viewBox='0 0 13 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Back Chevron</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Navigation-Bar/Back' transform='translate(-8.000000, -31.000000)' fill='#0076FF'> <path d='M8.5,42 L19,31.5 L21,33.5 L12.5,42 L21,50.5 L19,52.5 L8.5,42 Z' id='Back-Chevron'></path> </g> </g> </svg>",
  emoji: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(20)) + "px' height='" + (exports.px(20)) + "px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Emoji</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-60.000000, -181.000000)' fill='#030303'> <g id='Bottom-Row' transform='translate(3.000000, 170.000000)' sketch:type='MSShapeGroup'> <path d='M66.75,30.5 C72.1347763,30.5 76.5,26.1347763 76.5,20.75 C76.5,15.3652237 72.1347763,11 66.75,11 C61.3652237,11 57,15.3652237 57,20.75 C57,26.1347763 61.3652237,30.5 66.75,30.5 Z M66.75,29.5 C71.5824916,29.5 75.5,25.5824916 75.5,20.75 C75.5,15.9175084 71.5824916,12 66.75,12 C61.9175084,12 58,15.9175084 58,20.75 C58,25.5824916 61.9175084,29.5 66.75,29.5 Z M63.75,19 C64.4403559,19 65,18.4403559 65,17.75 C65,17.0596441 64.4403559,16.5 63.75,16.5 C63.0596441,16.5 62.5,17.0596441 62.5,17.75 C62.5,18.4403559 63.0596441,19 63.75,19 Z M69.75,19 C70.4403559,19 71,18.4403559 71,17.75 C71,17.0596441 70.4403559,16.5 69.75,16.5 C69.0596441,16.5 68.5,17.0596441 68.5,17.75 C68.5,18.4403559 69.0596441,19 69.75,19 Z M59.8876334,22.1641444 C59.6390316,21.383134 60.065918,20.9785156 60.8530951,21.2329304 C60.8530951,21.2329304 63.0937503,22.2125 66.7500001,22.2125 C70.4062499,22.2125 72.6469047,21.2329304 72.6469047,21.2329304 C73.4287162,20.9662153 73.8812463,21.4044097 73.6058477,22.1807437 C73.6058477,22.1807437 72.6,27.575 66.75,27.575 C60.9,27.575 59.8876334,22.1641444 59.8876334,22.1641444 Z M66.75,23.1875 C64.06875,23.1875 61.8544055,22.4737821 61.8544055,22.4737821 C61.3273019,22.32948 61.1781233,22.5721615 61.5639555,22.957075 C61.5639555,22.957075 62.3625,24.65 66.75,24.65 C71.1375,24.65 71.9508503,22.9438304 71.9508503,22.9438304 C72.3093659,22.5399278 72.1690793,22.3359844 71.6354273,22.476349 C71.6354273,22.476349 69.43125,23.1875 66.75,23.1875 Z' id='Emoji'></path> </g> </g> </g> </svg>",
  "delete": {
    on: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(24)) + "px' height='" + (exports.px(18)) + "px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z' id='Back'></path> </g> </g> </g> </svg>",
    off: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(24)) + "px' height='" + (exports.px(18)) + "px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M338.70972,21.7097195 C338.317752,21.3177522 338.318965,20.6810349 338.70972,20.2902805 L344.643245,14.3567547 C344.840276,14.1597245 345.225639,14 345.493741,14 L355.997239,14 C357.103333,14 357.999999,14.8970601 357.999999,16.0058586 L357.999999,25.9941412 C357.999999,27.1019464 357.106457,27.9999999 355.997239,27.9999999 L345.493741,28 C345.221056,28 344.840643,27.8406431 344.643246,27.6432453 L338.70972,21.7097195 Z' id='Back'></path> </g> </g> </g> </svg>"
  },
  food: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Food</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-148.000000, -637.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Food' transform='translate(149.500000, 229.500000)' sketch:type='MSShapeGroup'> <path d='M5.5,15.5 L1,15.5 L0,5 L6.5,5 L6.26360933,7.48210202' id='Drink' stroke='#4A5461'></path> <path d='M6.01077545,1.96930098 L6.51571352,5.22270539 L5.71908184,5.67947812 L5.0389009,1.96930098 L4.85557247,1.96930098 L4.85557247,0.96930098 L8.85557247,0.96930098 L8.85557247,1.96930098 L6.01077545,1.96930098 Z' id='Straw' fill='#4A5461' transform='translate(6.855572, 3.324390) rotate(24.000000) translate(-6.855572, -3.324390) '></path> <rect id='Bottom-Bun' stroke='#4A5461' x='3' y='14' width='10.5' height='1.5' rx='1'></rect> <path d='M1.5,12.5024408 C1.5,11.948808 1.94916916,11.5 2.49268723,11.5 L14.0073128,11.5 C14.5555588,11.5 15,11.9469499 15,12.5024408 L15,12.9975592 C15,13.551192 14.5508308,14 14.0073128,14 L2.49268723,14 C1.94444121,14 1.5,13.5530501 1.5,12.9975592 L1.5,12.5024408 Z M3.93300003,11.8392727 C3.41771834,11.6518976 3.44483697,11.5 3.9955775,11.5 L13.0044225,11.5 C13.5542648,11.5 13.5866061,11.6503251 13.067,11.8392727 L8.5,13.5 L3.93300003,11.8392727 Z' id='&quot;Patty&quot;' fill='#4A5461'></path> <path d='M2.5,10.5 L13.5,10.5 L15,11.5 L1,11.5 L2.5,10.5 Z' id='Cheese' fill='#4A5461'></path> <path d='M8.25,10.5 C11.4256373,10.5 14,10.3284271 14,9.5 C14,8.67157288 11.4256373,8 8.25,8 C5.07436269,8 2.5,8.67157288 2.5,9.5 C2.5,10.3284271 5.07436269,10.5 8.25,10.5 Z' id='Top-Bun' stroke='#4A5461' stroke-width='0.75'></path> </g> </g> </g> </g> </svg>",
  flags: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(11)) + "px' height='" + (exports.px(15)) + "px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Flag</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-275.000000, -639.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Flag' transform='translate(275.000000, 231.500000)' sketch:type='MSShapeGroup'> <rect id='Pole' fill='#4A5461' x='0' y='0' width='1' height='14'></rect> <path d='M1,1 C1,1 1.25,2 3.5,2 C5.75,2 6,0.749999998 8,0.75 C10,0.749999998 10,1.5 10,1.5 L10,7.5 C10,7.5 10,6.5 8,6.5 C6,6.5 4.80623911,8 3.5,8 C2.19376089,8 1,7 1,7 L1,1 Z' stroke='#4A5461' stroke-linejoin='round'></path> </g> </g> </g> </g> </svg>",
  frequent: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Recent</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-55.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Recent' transform='translate(55.500000, 230.000000)' sketch:type='MSShapeGroup'> <circle id='Body' stroke='#4A5461' cx='8' cy='8' r='8'></circle> <path d='M7.5,7.5 L7.5,8.5 L8.5,8.5 L8.5,2 L7.5,2 L7.5,7.5 L4,7.5 L4,8.5 L8.5,8.5 L8.5,7.5 L7.5,7.5 Z' id='Hands' fill='#4A5461'></path> </g> </g> </g> </g> </svg>",
  keyboard: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(32.5)) + "px' height='" + (exports.px(23.5)) + "px' viewBox='0 0 65 47' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Shape</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='iPad-Portrait' transform='translate(-1436.000000, -1956.000000)' fill='#000000'> <g id='Keyboard-Light' transform='translate(0.000000, 1422.000000)'> <g id='Keyboard-down' transform='translate(1412.000000, 500.000000)'> <path d='M87.001332,34 C88.1051659,34 89,34.8997127 89,35.9932874 L89,61.0067126 C89,62.1075748 88.1058759,63 87.001332,63 L25.998668,63 C24.8948341,63 24,62.1002873 24,61.0067126 L24,35.9932874 C24,34.8924252 24.8941241,34 25.998668,34 L87.001332,34 Z M26,36 L26,61 L87,61 L87,36 L26,36 Z M79,40 L83,40 L83,44 L79,44 L79,40 Z M72,40 L76,40 L76,44 L72,44 L72,40 Z M65,40 L69,40 L69,44 L65,44 L65,40 Z M58,40 L62,40 L62,44 L58,44 L58,40 Z M51,40 L55,40 L55,44 L51,44 L51,40 Z M44,40 L48,40 L48,44 L44,44 L44,40 Z M37,40 L41,40 L41,44 L37,44 L37,40 Z M30,40 L34,40 L34,44 L30,44 L30,40 Z M79,47 L83,47 L83,51 L79,51 L79,47 Z M72,47 L76,47 L76,51 L72,51 L72,47 Z M65,47 L69,47 L69,51 L65,51 L65,47 Z M58,47 L62,47 L62,51 L58,51 L58,47 Z M51,47 L55,47 L55,51 L51,51 L51,47 Z M44,47 L48,47 L48,51 L44,51 L44,47 Z M37,47 L41,47 L41,51 L37,51 L37,47 Z M30,47 L34,47 L34,51 L30,51 L30,47 Z M79,54 L83,54 L83,58 L79,58 L79,54 Z M72,54 L76,54 L76,58 L72,58 L72,54 Z M44,54 L69,54 L69,58 L44,58 L44,54 Z M37,54 L41,54 L41,58 L37,58 L37,54 Z M30,54 L34,54 L34,58 L30,58 L30,54 Z M44.3163498,69.9771047 C43.3684225,70.5420342 43.3338721,71.5096495 44.2378217,72.1373912 L55.3621539,79.8626088 C56.2667113,80.4907726 57.7338965,80.4903505 58.6378461,79.8626088 L69.7621783,72.1373912 C70.6667357,71.5092274 70.648012,70.5205204 69.7115187,69.9234166 L69.9825731,70.0962396 C69.5181333,69.800115 68.7782557,69.8126493 68.3261307,70.1269323 L57.8154999,77.4331263 C57.3651117,77.746202 56.628165,77.7381786 56.1762103,77.4199424 L45.8386137,70.1408977 C45.3836472,69.8205407 44.6375039,69.7857088 44.1566393,70.0722862 L44.3163498,69.9771047 Z' id='Shape'></path> </g> </g> </g> </g> </svg>",
  objects: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(11)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 11 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Lightbulb</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-244.000000, -639.000000)' stroke='#4A5361'> <g id='Lightbulb' sketch:type='MSLayerGroup' transform='translate(244.000000, 639.000000)'> <path d='M8,10.4002904 C9.78083795,9.48993491 11,7.63734273 11,5.5 C11,2.46243388 8.53756612,0 5.5,0 C2.46243388,0 0,2.46243388 0,5.5 C0,7.63734273 1.21916205,9.48993491 3,10.4002904 L3,14.0020869 C3,15.1017394 3.89761602,16 5.0048815,16 L5.9951185,16 C7.1061002,16 8,15.1055038 8,14.0020869 L8,10.4002904 Z' id='Oval-17' sketch:type='MSShapeGroup'></path> <rect id='Rectangle-50' sketch:type='MSShapeGroup' x='3' y='12' width='5' height='1'></rect> <rect id='Rectangle-51' sketch:type='MSShapeGroup' x='4' y='13.5' width='1.5' height='1'></rect> <path d='M5,8.5 C5,8.5 3.49999999,7.50000001 4,7 C4.50000001,6.49999999 5,7.66666667 5.5,8 C5.5,8 6.5,6.50000001 7,7 C7.5,7.49999999 6,8.5 6,8.5 L6,11 L5,11 L5,8.5 Z' id='Rectangle-52' sketch:type='MSShapeGroup'></path> </g> </g> </g> </svg>",
  shift: {
    on: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(20)) + "px' height='" + (exports.px(18)) + "px' viewBox='0 0 20 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-14.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.7052388,13.2052388 C21.3157462,12.8157462 20.6857559,12.8142441 20.2947612,13.2052388 L11.9160767,21.5839233 C11.1339991,22.3660009 11.3982606,23 12.4979131,23 L16.5,23 L16.5,28.009222 C16.5,28.5564136 16.9463114,29 17.4975446,29 L24.5024554,29 C25.053384,29 25.5,28.5490248 25.5,28.009222 L25.5,23 L29.5020869,23 C30.6055038,23 30.866824,22.366824 30.0839233,21.5839233 L21.7052388,13.2052388 Z' id='Shift'></path> </g> </g> </g> </svg>",
    off: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(20)) + "px' height='" + (exports.px(18)) + "px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-14.000000, -129.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.6719008,12.2325898 C21.301032,11.8279916 20.6946892,11.8334731 20.3288195,12.2325898 L11.6947023,21.6512983 C10.7587441,22.672308 11.1285541,23.5 12.5097751,23.5 L15.9999999,23.5000002 L15.9999999,28.0014241 C15.9999999,28.8290648 16.6716559,29.5000001 17.497101,29.5000001 L24.5028992,29.5000001 C25.3297253,29.5000001 26.0000003,28.8349703 26.0000003,28.0014241 L26.0000003,23.5000001 L29.4902251,23.5000002 C30.8763357,23.5000002 31.2439521,22.6751916 30.3054161,21.6512985 L21.6719008,12.2325898 Z M21.341748,14.3645316 C21.1530056,14.1632064 20.8433515,14.1670914 20.6582514,14.3645316 L13.5,21.9999998 L17.5000001,21.9999999 L17.5000002,27.5089956 C17.5000002,27.7801703 17.7329027,28.0000008 18.0034229,28.0000008 L23.996577,28.0000008 C24.2746097,28.0000008 24.4999997,27.7721203 24.4999997,27.5089956 L24.4999997,21.9999999 L28.5,21.9999999 L21.341748,14.3645316 Z' id='Shift'></path> </g> </g> </g> </svg>"
  },
  smileys: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>:D</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-86.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id=':D' transform='translate(87.000000, 230.500000)' sketch:type='MSShapeGroup'> <circle id='Head' stroke='#4A5461' stroke-width='0.789473684' cx='7.5' cy='7.5' r='7.5'></circle> <path d='M7.5,13.5263158 C10.2686907,13.5263158 12.5131579,10.3684212 12.5131579,9.18421045 C12.5131579,7.60526317 11.4389098,9.18421043 7.5,9.18421053 C3.56109023,9.18421062 2.48684211,7.60526317 2.48684211,9.18421045 C2.48684211,10.368421 4.73130935,13.5263158 7.5,13.5263158 Z M7.5,10.9605263 C8.93233083,11.1578947 11.7969925,10.368421 11.7969925,9.44423552 C11.7969925,8.78947368 10.8762084,9.57894727 7.5,9.77631579 C4.12379162,9.57894743 3.20300872,8.78947369 3.20300752,9.44423552 C3.20300582,10.368421 6.06766917,11.1578947 7.5,10.9605263 Z' id='Smile' fill='#4A5461'></path> <path d='M5.23684211,6.3236598 C5.64378876,6.3236598 5.97368421,5.88183554 5.97368421,5.33681769 C5.97368421,4.79179985 5.64378876,4.34997559 5.23684211,4.34997559 C4.82989545,4.34997559 4.5,4.79179985 4.5,5.33681769 C4.5,5.88183554 4.82989545,6.3236598 5.23684211,6.3236598 Z M9.73684211,6.3236598 C10.1437888,6.3236598 10.4736842,5.88183554 10.4736842,5.33681769 C10.4736842,4.79179985 10.1437888,4.34997559 9.73684211,4.34997559 C9.32989545,4.34997559 9,4.79179985 9,5.33681769 C9,5.88183554 9.32989545,6.3236598 9.73684211,6.3236598 Z' id='Eyes' fill='#4A5461'></path> </g> </g> </g> </g> </svg>",
  symbols: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(16)) + "px' height='" + (exports.px(17)) + "px' viewBox='0 0 15 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Objects &amp; Symbols</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-304.000000, -638.000000)' fill='#4A5461'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Objects-&amp;-Symbols' transform='translate(304.000000, 230.000000)'> <g id='Thing' transform='translate(0.000000, 0.500000)' sketch:type='MSShapeGroup'> <rect id='Rectangle-1209' x='0' y='0' width='7' height='1'></rect> <rect id='Rectangle-1209' x='0' y='2' width='7' height='1'></rect> <rect id='Rectangle-1211' x='3' y='3' width='1' height='4'></rect> </g> <path d='M11.75,0.159263978 L11.75,0 L11,0 L11,5.091493 C10.59344,4.94221392 10.0639662,4.96453224 9.55715399,5.19017957 C8.69849293,5.5724801 8.23003835,6.39365621 8.51083141,7.02432774 C8.79162447,7.65499928 9.71533454,7.85634375 10.5739956,7.47404321 C11.2761183,7.16143803 11.7173393,6.55538972 11.7013595,6 L11.75,6 L11.75,1.39385056 C12.3175908,1.59590037 13,2.0817456 13,3.25 C13,4.25 12.75,5.5 12.75,5.5 C12.75,5.5 13.75,4.75 13.75,2.5 C13.75,1.02256101 12.5642674,0.407473019 11.75,0.159263978 Z' id='Note' sketch:type='MSShapeGroup'></path> <text id='&amp;' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'> <tspan x='0.25' y='16'>&amp;</tspan> </text> <text id='%' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'> <tspan x='7.75' y='16'>%</tspan> </text> </g> </g> </g> </g> </svg>",
  travel: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Transport</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-241.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Transport' transform='translate(241.500000, 230.000000)' sketch:type='MSShapeGroup'> <path d='M0,6 L1,6 L1,15 L0,15 L0,6 Z M15,4 L16,4 L16,15 L15,15 L15,4 Z M3.5,0 L4.5,0 L4.5,7 L3.5,7 L3.5,0 Z M1,6 L3.5,6 L3.5,7 L1,7 L1,6 Z M4.5,0 L9.5,0 L9.5,1 L4.5,1 L4.5,0 Z M9.5,0 L10.5,0 L10.5,6 L9.5,6 L9.5,0 Z M10.5,4 L15,4 L15,5 L10.5,5 L10.5,4 Z' id='Skyline' fill='#4A5461'></path> <g id='Windows' transform='translate(2.000000, 2.000000)' fill='#4A5461'> <rect id='Window' x='0' y='6' width='1' height='1'></rect> <rect id='Window' x='3.5' y='0' width='1' height='1'></rect> <rect id='Window' x='5.5' y='0' width='1' height='1'></rect> <rect id='Window' x='5.5' y='2' width='1' height='1'></rect> <rect id='Window' x='3.5' y='2' width='1' height='1'></rect> <rect id='Window' x='11' y='4' width='1' height='1'></rect> <rect id='Window' x='11' y='6' width='1' height='1'></rect> </g> <g id='Car' transform='translate(2.500000, 6.500000)'> <path d='M8.5,8 L2.5,8 L2.5,9.5 L0.5,9.5 L0.5,7.8681145 C0.201202192,7.69582702 0,7.37091363 0,6.9906311 L0,5.0093689 C0,4.45190985 0.444836974,4 0.995577499,4 L10.0044225,4 C10.5542648,4 11,4.44335318 11,5.0093689 L11,6.9906311 C11,7.3653315 10.7990244,7.69234519 10.5,7.86649002 L10.5,9.5 L8.5,9.5 L8.5,8 Z M1.75,6.5 C2.16421356,6.5 2.5,6.16421356 2.5,5.75 C2.5,5.33578644 2.16421356,5 1.75,5 C1.33578644,5 1,5.33578644 1,5.75 C1,6.16421356 1.33578644,6.5 1.75,6.5 Z M9.25,6.5 C9.66421356,6.5 10,6.16421356 10,5.75 C10,5.33578644 9.66421356,5 9.25,5 C8.83578644,5 8.5,5.33578644 8.5,5.75 C8.5,6.16421356 8.83578644,6.5 9.25,6.5 Z M0.5,7 L10.5,7 L10.5,7.5 L0.5,7.5 L0.5,7 Z M3,6.5 L8,6.5 L8,7 L3,7 L3,6.5 Z' id='Body' fill='#4A5461'></path> <path d='M1.5,4.5 L1.5,3 C1.5,1.34314575 2.83902013,0 4.50166547,0 L6.49833453,0 C8.15610859,0 9.5,1.34651712 9.5,3 L9.5,5' id='Roof' stroke='#4A5461'></path> </g> </g> </g> </g> </g> </svg>"
};

bannerBG = {
  "iphone-5": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='320px' height='68px' viewBox='0 0 320 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>iphone5</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPhone-5/5S/5C' fill='#1A1A1C'> <path d='M0,0 L320,0 L320,68 L0,68 L0,0 Z M142,61.0048815 C142,59.897616 142.896279,59 144.0024,59 L176.9976,59 C178.103495,59 179,59.8938998 179,61.0048815 L179,61.9951185 C179,63.102384 178.103721,64 176.9976,64 L144.0024,64 C142.896505,64 142,63.1061002 142,61.9951185 L142,61.0048815 Z' id='iphone5'></path> </g> </g> </svg>",
  "iphone-6s": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='375px' height='68px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'> <g transform='translate(58.000000, 7.000000)' id='Notification-container'> <g> <path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path> </g> </g> </g> </g> </svg>",
  "iphone-6s-plus": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='414px' height='68px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background Copy</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'> <g transform='translate(43.000000, 74.000000)' id='Notification-container'> <g> <path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path> </g> </g> </g> </g> </svg>",
  "ipad": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='768px' height='68px' viewBox='0 0 768 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Portrait' fill='#1A1A1C'> <path d='M0,0 L768,0 L768,68 L0,68 L0,0 Z M366,61.0048815 C366,59.897616 366.896279,59 368.0024,59 L400.9976,59 C402.103495,59 403,59.8938998 403,61.0048815 L403,61.9951185 C403,63.102384 402.103721,64 400.9976,64 L368.0024,64 C366.896505,64 366,63.1061002 366,61.9951185 L366,61.0048815 Z' id='ipad-portrait'></path> </g> </g> </svg>",
  "ipad-pro": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='1024px' height='68px' viewBox='0 0 1024 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-pro-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Pro-Portrait' fill='#1A1A1C'> <path d='M0,0 L1024,0 L1024,68 L0,68 L0,0 Z M494,61.0048815 C494,59.897616 494.896279,59 496.0024,59 L528.9976,59 C530.103495,59 531,59.8938998 531,61.0048815 L531,61.9951185 C531,63.102384 530.103721,64 528.9976,64 L496.0024,64 C494.896505,64 494,63.1061002 494,61.9951185 L494,61.0048815 Z' id='ipad-pro-portrait'></path> </g> </g> </svg>"
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9pT1MgS2l0IGZvciBGcmFtZXIvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9pT1NLaXQuY29mZmVlIiwiL1VzZXJzL2tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvaU9TIEtpdCBmb3IgRnJhbWVyL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDSUEsSUFBQTs7QUFBQSxhQUFBLEdBQWdCO0VBR2hCLFlBQUEsRUFBZTtJQUFFLE1BQUEsRUFBUSxNQUFNLENBQUMsV0FBakI7SUFBOEIsS0FBQSxFQUFPLE1BQU0sQ0FBQyxVQUE1QztJQUF3RCxLQUFBLEVBQU0sQ0FBOUQ7SUFBaUUsTUFBQSxFQUFPLEtBQXhFO0lBQStFLFFBQUEsRUFBUyxLQUF4RjtHQUhDO0VBUWhCLDRCQUFBLEVBQThCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBUmQ7RUFTaEIsd0JBQUEsRUFBMEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FUVjtFQVVoQixzQkFBQSxFQUF3QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElB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QSxHQUFXO0VBQ1YsVUFBQSxFQUFZLG96QkFERjtFQWFWLFdBQUEsRUFBYSxvK0JBYkg7RUE2QlYsZ0JBQUEsRUFBbUIsNCtCQTdCVDtFQTZDVixNQUFBLEVBQVMsK3pCQTdDQztFQXlEVixVQUFBLEVBQWEsKzBCQXpESDs7Ozs7QUNsdkhYLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiI2lPU0tpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHQgXG5cblxuZnJhbWVyRGV2aWNlcyA9IHtcblxuIyBGdWxsc2NyZWVuXG5cImZ1bGxzY3JlZW5cIiA6IHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcdHNjYWxlOjEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblxuIyBpUGhvbmVzXG5cbiMjIDVTXG5cImFwcGxlLWlwaG9uZS01cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNXMtZ29sZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyMgNWNcblwiYXBwbGUtaXBob25lLTVjLWdyZWVuXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLWJsdWVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy1yZWRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy13aGl0ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy15ZWxsb3dcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtcGlua1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyMgNnNcblwiYXBwbGUtaXBob25lLTZzLXNwYWNlLWdyYXlcIiA6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXJvc2UtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyMgNnMgcGx1c1xuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0Miwgc2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXBsdXMtcm9zZS1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyBpUGFkc1xuXG4jIyBBaXIgXG5cImFwcGxlLWlwYWQtYWlyLTItZ29sZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1haXItMi1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyMgTWluaVxuXCJhcHBsZS1pcGFkLW1pbmktNC1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1taW5pLTQtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtbWluaS00LXNpbHZlclwiOnsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNiwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jIyBQcm9cblwiYXBwbGUtaXBhZC1wcm8tZ29sZFwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLXByby1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbn1cblxuIyMgVGhlc2UgdmFyaWFibGVzIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggZGV0YWlscyBmcm9tIHRoZSBkZXZpY2UgdXBvbiBydW5uaW5nLiBcbmV4cG9ydHMuZGV2aWNlID0gMFxuZXhwb3J0cy5uYW1lID0gMFxuZXhwb3J0cy5zY2FsZSA9IDBcbmV4cG9ydHMuaGVpZ2h0ID0gMFxuZXhwb3J0cy53aWR0aCA9IDBcbmV4cG9ydHMubW9iaWxlID0gMFxuZXhwb3J0cy5wbGF0Zm9ybSA9IDBcbmV4cG9ydHMub3JpZW50YXRpb24gPSAwXG5cbnNjcmVlbiA9IHt9XG5cblxuXG4jIGdldERldmljZSB3aWxsIHBvcHVsYXRlIGRldmljZSB2YXJpYWJsZXMsIGFuZCBpdCdsbCBvdmVycmlkZSB0aGUgZnJhbWUgaWYgdGhlIGRldmljZSBpcyBkaWZmZXJlbnQuIFxuZXhwb3J0cy5nZXREZXZpY2UgPSAtPlxuXG5cdCMgTG9hZHMgdGhlIGluaXRpYWwgZnJhbWVcblx0ZGV2aWNlID0gRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG5cblx0IyMjIFRoaXMgc3dpdGNoIGxvb2tzIGF0IHRoZSBpbm5lcldpZHRoIHRvIGRldGVybWluZSBpZiB0aGUgcHJvdG90eXBlIGlzIGJlaW5nIG9wZW5lZCBvbiBhIGRldmljZS4gXG5cdElmIHNvLCBpdCdsbCBvdmVycmlkZSB0aGUgZGV2aWNlLCBhbmQgaXQnbGwgYWRqdXN0IHRoZSB2aWV3IHRvIGZ1bGxzY3JlZW4uIyMjXG5cblx0c3dpdGNoIGlubmVyV2lkdGhcblx0XHQjIGlQaG9uZSA1Yy81cy9TRVxuXHRcdHdoZW4gNjQwXG5cdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwaG9uZS01cy1zaWx2ZXJcIlxuXHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRcdCMgaVBob25lIDZzXG5cdFx0d2hlbiA3NTBcblx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC02cy1zaWx2ZXJcIlxuXHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRcdCMgaVBob25lIDZzK1xuXHRcdHdoZW4gMTI0MiBcblx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDIyMDhcblx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIlxuXHRcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGFkIGluIHBvcnRyYWl0XG5cdFx0d2hlbiAxNTM2IFxuXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMjA0OFxuXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCJcblx0XHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRcdCMgaVBhZFxuXHRcdHdoZW4gMjA0OFxuXG5cdFx0XHQjIGlQYWQgUHJvIGluIHBvcnRyYWl0XG5cdFx0XHRpZiBpbm5lckhlaWdodCA9PSAyNzMyXG5cdFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCJcblxuXHRcdFx0IyBpUGFkIGluIGxhbmRzY2NhcGVcblx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDE1MzZcblx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGFkLWFpci0yLXNpbHZlclwiXG5cdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGFkIFByb1xuXHRcdHdoZW4gMjczMlxuXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMjA0OFxuXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtcHJvLXNpbHZlclwiXG5cdFx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0ZXhwb3J0cy5zY2FsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5zY2FsZVxuXG5cdGlmIGRldmljZSA9PSBcImZ1bGxzY3JlZW5cIlxuXHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdGVsc2Vcblx0XHRleHBvcnRzLndpZHRoID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0uaGVpZ2h0XG5cdFx0aWYgd2luZG93LmlubmVyV2lkdGggPT0gMTI0MiB8fCB3aW5kb3cuaW5uZXJXaWR0aCA9PSAyMjA4XG5cdFx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHRleHBvcnRzLnNjYWxlID0gM1xuXHRleHBvcnRzLm1vYmlsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5tb2JpbGVcblx0ZXhwb3J0cy5wbGF0Zm9ybSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5wbGF0Zm9ybVxuXHRleHBvcnRzLm9yaWVudGF0aW9uID0gIEZyYW1lci5EZXZpY2Uub3JpZW50YXRpb25cblxuXHQjIERldmljZSBTdHJpbmcgU2NydWJiZXJcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCJhcHBsZS1cIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItZ29sZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ncmVlblwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ibHVlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJlZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi13aGl0ZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi15ZWxsb3dcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcGlua1wiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1zcGFjZS1ncmV5XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJvc2VcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1c1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1Y1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItbWluaVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1haXJcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItMlwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi00XCIsIFwiXCIpXG5cdGV4cG9ydHMuZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItc2lsdmVyXCIsIFwiXCIpXG5cdFxuXHQjIGV4cG9ydHMuZGV2aWNlIGJlY29tZXMgZWl0aGVyIGlwYWQsIGlwYWQtcHJvLCBpcGhvbmUtNSwgaXBob25lLTZzLCBpcGhvbmUtNnMtcGx1c1xuXG5cdHNjcmVlbiA9IHtcblx0XHR3aWR0aDpleHBvcnRzLndpZHRoXG5cdFx0aGVpZ2h0OmV4cG9ydHMuaGVpZ2h0XG5cdH1cblxuZXhwb3J0cy5vcmllbnQgPSAoKSAtPlxuXHRpZiBleHBvcnRzLm9yaWVudGF0aW9uID09IC05MFxuXHRcdHRlbXBIZWlnaHQgPSBleHBvcnRzLmhlaWdodFxuXHRcdHRlbXBXaWR0aCA9IGV4cG9ydHMud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHRlbXBXaWR0aFxuXHRcdGV4cG9ydHMud2lkdGggPSB0ZW1wSGVpZ2h0XG5cbmV4cG9ydHMuZ2V0RGV2aWNlKClcbmV4cG9ydHMub3JpZW50KClcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIgLCBvblJlc2l6ZSlcblxuIyBMaXN0ZW4gdG8gd2luZG93IHJlaXplXG5cbm9uUmVzaXplID0gKCkgLT5cblx0ZXhwb3J0cy5nZXREZXZpY2UoKVxuXHRleHBvcnRzLmxheW91dCgpXG5cbiMgU3VwcG9ydGluZyBGdW5jdGlvbnNcblxuIyMgQ29udmVydHMgcHggdG8gcHRcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvZXhwb3J0cy5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jIyBDb252ZXJ0cyBwdCB0byBweFxuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIGV4cG9ydHMuc2NhbGVcblx0cHggPSBNYXRoLnJvdW5kKHB4KVxuXHRyZXR1cm4gcHhcblxuIyBDbGVhbnMgYSBzdHJpbmcgb2YgPGJyPiBhbmQgJm5ic3A7XG5leHBvcnRzLmNsZWFuID0gKHN0cmluZykgLT5cblx0IyMgcmVtb3ZlIHdoaXRlIHNwYWNlXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bJl1uYnNwWztdL2dpLCBcIiBcIikucmVwbGFjZSgvWzxdYnJbPl0vZ2ksIFwiXCIpXG5cdHJldHVybiBzdHJpbmdcblxuIyBDb252ZXJ0cyBweCdzIG9mIGFuIFNWRyB0byBzY2FsYWJsZSB2YXJpYWJsZXNcbmV4cG9ydHMuc3ZnID0gKHN2ZykgLT5cblx0IyBGaW5kIFN0cmluZ1xuXHRzdGFydEluZGV4ID0gc3ZnLnNlYXJjaChcIjxzdmcgd2lkdGg9XCIpIFxuXHRlbmRJbmRleCA9IHN2Zy5zZWFyY2goXCIgdmlld0JveFwiKVxuXHRzdHJpbmcgPSBzdmcuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpXG5cblx0I0ZpbmQgd2lkdGhcblx0d1N0YXJ0SW5kZXggPSBzdHJpbmcuc2VhcmNoKFwiPVwiKSArIDJcblx0d0VuZEluZGV4ID0gIHN0cmluZy5zZWFyY2goXCJweFwiKVxuXHR3aWR0aCA9IHN0cmluZy5zbGljZSh3U3RhcnRJbmRleCwgd0VuZEluZGV4KVxuXHRuZXdXaWR0aCA9IGV4cG9ydHMucHgod2lkdGgpXG5cblx0IyBGaW5kIEhlaWdodFxuXHRoZWlnaHRTdHJpbmcgPSBzdHJpbmcuc2xpY2Uod0VuZEluZGV4ICsgNCwgc3RyaW5nLmxlbmd0aClcblx0aFN0YXJ0SW5kZXggPSBoZWlnaHRTdHJpbmcuc2VhcmNoKFwiPVwiKSsgMlxuXHRoRW5kSW5kZXggPSBoZWlnaHRTdHJpbmcuc2VhcmNoKFwicHhcIikgXG5cdGhlaWdodCA9IGhlaWdodFN0cmluZy5zbGljZShoU3RhcnRJbmRleCwgaEVuZEluZGV4KVxuXHRuZXdIZWlnaHQgPSBleHBvcnRzLnB4KGhlaWdodClcblxuXHQjQ3JlYXRlIG5ldyBzdHJpbmdcblx0bmV3U3RyaW5nID0gc3RyaW5nLnJlcGxhY2Uod2lkdGgsIG5ld1dpZHRoKVxuXHRuZXdTdHJpbmcgPSBuZXdTdHJpbmcucmVwbGFjZShoZWlnaHQsIG5ld0hlaWdodClcblxuXHQjUmVwbGFjZSBzdHJpbmdzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5cdHJldHVybiB7XG5cdFx0c3ZnOnN2Z1xuXHRcdHdpZHRoOm5ld1dpZHRoXG5cdFx0aGVpZ2h0Om5ld0hlaWdodFxuXHR9XG5cbiMgQ2hhbmdlcyB0aGUgZmlsbCBvZiBhbiBTVkdcbmV4cG9ydHMuY2hhbmdlRmlsbCA9IChsYXllciwgY29sb3IpIC0+XG5cdHN0YXJ0SW5kZXggPSBsYXllci5odG1sLnNlYXJjaChcImZpbGw9XFxcIiNcIilcblx0ZmlsbFN0cmluZyA9IGxheWVyLmh0bWwuc2xpY2Uoc3RhcnRJbmRleCwgbGF5ZXIuaHRtbC5sZW5ndGgpXG5cdGVuZEluZGV4ID0gZmlsbFN0cmluZy5zZWFyY2goXCJcXFwiPlwiKVxuXHRzdHJpbmcgPSBmaWxsU3RyaW5nLnNsaWNlKDAsIGVuZEluZGV4KVxuXHRuZXdTdHJpbmcgPSBcImZpbGw9XFxcIlwiICsgZXhwb3J0cy5jb2xvcihjb2xvcikudG9IZXhTdHJpbmcoKVxuXHRsYXllci5odG1sID0gbGF5ZXIuaHRtbC5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5leHBvcnRzLmNhcGl0YWxpemUgPSAoc3RyaW5nKSAtPlxuXHRyZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG5cbiMgUmV0dXJucyB0aGUgY3VycmVudCB0aW1lXG5leHBvcnRzLmdldFRpbWUgPSAtPlxuXHRkYXlzT2ZUaGVXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cblx0bW9udGhzT2ZUaGVZZWFyID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cblx0ZGF0ZU9iaiA9IG5ldyBEYXRlKClcblx0bW9udGggPSBtb250aHNPZlRoZVllYXJbZGF0ZU9iai5nZXRNb250aCgpXVxuXHRkYXRlID0gZGF0ZU9iai5nZXREYXRlKClcblx0ZGF5ID0gZGF5c09mVGhlV2Vla1tkYXRlT2JqLmdldERheSgpXVxuXHRob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKVxuXHRtaW5zID0gZGF0ZU9iai5nZXRNaW51dGVzKClcblx0c2VjcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXG5cdHJldHVybiB7XG5cdFx0bW9udGg6bW9udGhcblx0XHRkYXRlOmRhdGVcblx0XHRkYXk6ZGF5XG5cdFx0aG91cnM6aG91cnNcblx0XHRtaW5zOm1pbnNcblx0XHRzZWNzOnNlY3Ncblx0fVxuXG4jIyBpT1MgQ29sb3Ig4oCTIFRoaXMgd2lsbCBzdG9yZSBhbGwgb2YgdGhlIGRlZmF1bHQgaU9TIGNvbG9ycyBpbnRlYWQgb2YgdGhlIGRlZmF1bHQgQ1NTIGNvbG9ycy4gKlRoaXMgaXMgb25seSB1cCBoZXJlIGJlY2F1c2UgSSByZWZlciB0byBpdCBpbiB0aGUgZGVmYXVsdHMuKlxuZXhwb3J0cy5jb2xvciA9IChjb2xvclN0cmluZykgLT5cblx0Y29sb3IgPSBcIlwiXG5cdGlmIHR5cGVvZiBjb2xvclN0cmluZyA9PSBcInN0cmluZ1wiXG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy50b0xvd2VyQ2FzZSgpXG5cdHN3aXRjaCBjb2xvclN0cmluZ1xuXHRcdHdoZW4gXCJyZWRcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUzODI0XCIpXG5cdFx0d2hlbiBcImJsdWVcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjMDA3NkZGXCIpXG5cdFx0d2hlbiBcInBpbmtcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUyODUxXCIpXG5cdFx0d2hlbiBcImdyZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImdyYXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImJsYWNrXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzAzMDMwM1wiKVxuXHRcdHdoZW4gXCJ3aGl0ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiNFRkVGRjRcIilcblx0XHR3aGVuIFwib3JhbmdlXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGOTYwMFwiKVxuXHRcdHdoZW4gXCJncmVlblwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM0NERCNUVcIilcblx0XHR3aGVuIFwibGlnaHQgYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwibGlnaHQtYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwieWVsbG93XCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGQ0QwMFwiKVxuXHRcdHdoZW4gXCJsaWdodCBrZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOURBN0IzXCIpXG5cdFx0d2hlbiBcImxpZ2h0LWtleVwiIFxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOURBN0IzXCIpXG5cdFx0ZWxzZSBcblx0XHRcdGlmIGNvbG9yU3RyaW5nWzBdID09IFwiI1wiIHx8IGNvbG9yU3RyaW5nLnRvSGV4U3RyaW5nKClbMF0gPT0gXCIjXCJcblx0XHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoY29sb3JTdHJpbmcpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzkyOTI5MlwiKVxuXHRyZXR1cm4gY29sb3JcblxuIyMgRGVmYXVsdHMgZm9yIGV2ZXJ5dGhpbmdcbmRlZmF1bHRzID0ge1xuXHRhbmltYXRpb25zOiB7XG5cdFx0dGFyZ2V0OnVuZGVmaW5lZFxuXHRcdGNvbnN0cmFpbnRzOiB1bmRlZmluZWRcblx0XHRjdXJ2ZSA6IFwiZWFzZS1pbi1vdXRcIlxuXHRcdGN1cnZlT3B0aW9uczogdW5kZWZpbmVkXG5cdFx0dGltZToxXG5cdFx0ZGVsYXk6MFxuXHRcdHJlcGVhdDp1bmRlZmluZWRcblx0XHRjb2xvck1vZGVsOnVuZGVmaW5lZFxuXHRcdHN0YWdnZXI6dW5kZWZpbmVkXG5cdFx0ZmFkZU91dDpmYWxzZVxuXHRcdGZhZGVJbjpmYWxzZVxuXHR9XG5cdGFsZXJ0OiB7XG5cdFx0dGl0bGU6IFwiVGl0bGVcIlxuXHRcdG1lc3NhZ2U6XCJNZXNzYWdlXCJcblx0XHRhY3Rpb25zOltcIk9LXCJdXG5cdFx0YWN0aW9uOlwiQWN0aW9uXCJcblx0XHRzZWNvbmRhcnlBY3Rpb246IFwic2Vjb25kYXJ5QWN0aW9uXCJcblx0fVxuXHRiYW5uZXI6IHtcblx0XHR0aXRsZTogXCJUaXRsZVwiXG5cdFx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRcdGFjdGlvbjpcIkFjdGlvblwiXG5cdFx0dGltZTpcIm5vd1wiXG5cdFx0aWNvbjp1bmRlZmluZWRcblx0XHRkdXJhdGlvbjo3XG5cdFx0YW5pbWF0ZWQ6ZmFsc2Vcblx0fVxuXHRidXR0b246e1xuXHRcdHRleHQ6XCJ0ZXh0XCJcblx0XHR0eXBlOlwiYnV0dG9uXCJcblx0XHRidXR0b25UeXBlOlwidGV4dFwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGNvbG9yOlwiIzAwN0FGRlwiXG5cdFx0Zm9udFNpemU6MTdcblx0XHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdFx0bmFtZTpcImJ1dHRvblwiXG5cdFx0Ymx1cjp0cnVlXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHRjb25zdHJhaW50czp1bmRlZmluZWRcblx0fVxuXHRmcmFtZXJQcm9wcyA6W1wibmFtZVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwic3VwZXJMYXllclwiLCBcIm9wYWNpdHlcIiwgXCJjb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcInhcIiwgXCJ5XCIsIFwibWlkWFwiLCBcIm1pZFlcIiwgXCJtYXhYXCIsIFwibWluWFwiLCBcInZpc2libGVcIiwgXCJjbGlwXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwiaWdub3JlRXZlbnRzXCIsIFwielwiLCBcInNjYWxlWFwiLCBcInNjYWxlWVwiLCBcInNjYWxlWlwiLCBcInNjYWxlXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInNrZXdcIiwgXCJvcmlnaW5YXCIsIFwib3JpZ2luWVwiLCBcIm9yaWdpblpcIiwgXCJwZXJzcGVjdGl2ZVwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWFwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWVwiLCBcInJvdGF0aW9uWFwiLCBcInJvdGF0aW9uWVwiLCBcInJvdGF0aW9uWlwiLCBcInJvdGF0aW9uXCIsIFwiYmx1clwiLCBcImJyaWdodG5lc3NcIiwgXCJzYXR1cmF0ZVwiLCBcImh1ZVJvdGF0ZVwiLCBcImNvbnRyYXN0XCIsIFwiaW52ZXJ0XCIsIFwiZ3JheXNjYWxlXCIsIFwic2VwaWFcIiwgXCJzaGFkb3dYXCIsIFwic2hhZG93WVwiLCBcInNoYWRvd0JsdXJcIiwgXCJzaGFkb3dTcHJlYWRcIiwgXCJzaGFkb3dDb2xvclwiLCBcImJvcmRlckNvbG9yXCIsIFwiYm9yZGVyV2lkdGhcIiwgXCJmb3JjZTJkXCIsIFwiZmxhdFwiLCBcImJhY2tmYWNlVmlzaWJsZVwiLCBcIm5hbWVcIiwgXCJtYXRyaXhcIiwgXCJfbWF0cml4MmRcIiwgXCJ0cmFuc2Zvcm1NYXRyaXhcIiwgXCJtYXRyaXgzZFwiLCBcImJvcmRlclJhZGl1c1wiLCBcInBvaW50XCIsIFwic2l6ZVwiLCBcImZyYW1lXCIsIFwiaHRtbFwiLCBcImltYWdlXCIsIFwic2Nyb2xsWFwiLCBcInNjcm9sbFlcIiwgXCJfZG9tRXZlbnRNYW5hZ2VyXCIsIFwibW91c2VXaGVlbFNwZWVkTXVsdGlwbGllclwiLCBcInZlbG9jaXR5VGhyZXNob2xkXCIsIFwiYW5pbWF0aW9uT3B0aW9uc1wiLCBcImNvbnN0cmFpbmVkXCJdXG5cdGNzc1Byb3BzIDogW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwidGV4dEFsaWduXCIsIFwiZm9udFdlaWdodFwiLCBcImxpbmVIZWlnaHRcIl1cblx0c3R5bGVQcm9wczogW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwidGV4dEFsaWduXCIsIFwiZm9udFdlaWdodFwiLCBcImxpbmVIZWlnaHRcIl1cblx0Y29uc3RyYWludFByb3BzIDogW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl1cblx0Y29uc3RyYWludFR5cGVzOiBbXCJ0b3BcIiwgXCJsZWFkaW5nXCIsIFwidHJhaWxpbmdcIiwgXCJib3R0b21cIl1cblx0Y29uc3RyYWludEFsaWducyA6IFtcImhvcml6b250YWxDZW50ZXJcIiwgXCJ2ZXJ0aWNhbENlbnRlclwiLCBcImxlYWRpbmdFZGdlc1wiLCBcInRyYWlsaW5nRWRnZXNcIiwgXCJ0b3BFZGdlc1wiLCBcImJvdHRvbUVkZ2VzXCIsIFwiYWxpZ25cIiwgXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl1cblx0Y29uc3RyYWludHM6IHtcblx0XHR0b3A6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ5XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib3BwXCIgOiBcImJvdHRvbVwiXG5cdFx0fVxuXHRcdGxlYWRpbmc6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ4XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhYXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvcHBcIiA6IFwidHJhaWxpbmdcIlxuXHRcdH1cblx0XHRib3R0b206IHtcblx0XHRcdFwicHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJoZWlnaHRcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ5XCJcblx0XHRcdFwib3BwXCIgOiBcInRvcFwiXG5cdFx0fVxuXHRcdHRyYWlsaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ4XCJcblx0XHRcdFwib3BwXCIgOiBcImxlYWRpbmdcIlxuXHRcdH1cblx0fVxuXHRjdXJzb3I6e1xuXHRcdGNvbG9yOlwiYmx1ZVwiXG5cdFx0aGVpZ2h0OjIwXG5cdFx0d2lkdGg6MVxuXHR9XG5cdGZpZWxkOiB7XG5cdFx0aXNFZGl0aW5nOmZhbHNlXG5cdFx0Y3Vyc29yOnt9XG5cdFx0Ym9yZGVyUmFkaXVzOjVcblx0XHRib3JkZXJXaWR0aDowXG5cdFx0Ym9yZGVyQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Y29sb3I6XCIjMDkwOTA4XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkZGXCJcblx0XHRyZXR1cm5UZXh0OlwicmV0dXJuXCJcblx0XHRyZXR1cm5Db2xvcjpcImxpZ2h0LWtleVwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0dHlwZTpcImZpZWxkXCJcblx0XHRjb25zdHJhaW50czp1bmRlZmluZWRcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdHdpZHRoOjI1OFxuXHRcdGhlaWdodDozMFxuXHRcdGZvbnRTaXplOjE1XG5cdFx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRcdHBsYWNlaG9sZGVyVGV4dDpcInBsYWNlaG9sZGVyVGV4dFwiXG5cdFx0cGxhY2Vob2xkZXJDb2xvcjpcIiM4MDgwODBcIlxuXHRcdHRleHQ6XCJcIlxuXHRcdHRleHRDb25zdHJhaW50czp7YWxpZ246XCJ2ZXJ0aWNhbFwiLCBsZWFkaW5nOjh9XG5cdFx0aW5wdXQ6dHJ1ZVxuXG5cdH1cblx0bG9ja1NjcmVlbjoge1xuXHRcdHRpbWU6XCJkZWZhdWx0XCJcblx0XHRkYXRlOlwiZGVmYXVsdFwiXG5cdFx0cGFzc2NvZGU6ZmFsc2Vcblx0XHRjbG9jazI0OmZhbHNlXG5cdFx0dHlwZTpcImxvY2tTY3JlZW5cIlxuXHR9XG5cdGtleWJvYXJkOiB7XG5cdFx0cmV0dXJuVGV4dDpcInJldHVyblwiXG5cdFx0cmV0dXJuQ29sb3I6XCJsaWdodC1rZXlcIlxuXHRcdGFuaW1hdGVkOmZhbHNlXG5cdFx0b3V0cHV0OnVuZGVmaW5lZFxuXHR9XG5cdHNoZWV0OiB7XG5cdFx0YWN0aW9uczpbXCJPS1wiXVxuXHRcdGV4aXQ6XCJDYW5jZWxcIlxuXHRcdGFuaW1hdGVkOmZhbHNlXG5cdFx0ZGVzY3JpcHRpb246dW5kZWZpbmVkXG5cdH1cblx0bmF2QmFyOiB7XG5cdFx0dGl0bGU6XCJUaXRsZVwiXG5cdFx0bGVmdDp1bmRlZmluZWRcblx0XHRyaWdodDpcIkVkaXRcIlxuXHRcdGJsdXI6dHJ1ZVxuXHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdFx0dHlwZTpcIm5hdkJhclwiXG5cdH1cblx0c3RhdHVzQmFyOiB7XG5cdFx0Y2FycmllcjpcIlwiXG5cdFx0bmV0d29yazpcIkxURVwiXG5cdFx0YmF0dGVyeToxMDBcblx0XHRzaWduYWw6NVxuXHRcdHN0eWxlOlwiZGFya1wiXG5cdFx0Y2xvY2syNDpmYWxzZVxuXHRcdHR5cGU6XCJzdGF0dXNCYXJcIlxuXHR9XG5cdHRhYkJhciA6IHtcblx0XHR0YWJzOiBbXVxuXHRcdHN0YXJ0OjBcblx0XHR0eXBlOlwidGFiQmFyXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0YWN0aXZlQ29sb3I6XCJibHVlXCJcblx0XHRpbmFjdGl2ZUNvbG9yOlwiZ3JheVwiXG5cdFx0Ymx1cjp0cnVlXG5cdH1cblx0dGFiIDoge1xuXHRcdGxhYmVsOiBcImxhYmVsXCJcblx0XHRpY29uOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScyNXB4JyBoZWlnaHQ9JzI1cHgnIHZpZXdCb3g9JzAgMCAyNSAyNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+MTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMSc+XG5cdFx0XHRcdFx0PGcgaWQ9J0JvdHRvbS1CYXIvVGFiLUJhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTcuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nUGxhY2Vob2xkZXJzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNS4wMDAwMDAsIDcuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPScxJyB4PScwJyB5PScwJyB3aWR0aD0nMjUnIGhlaWdodD0nMjUnIHJ4PSczJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFjdGl2ZTogdW5kZWZpbmVkXG5cdFx0dW5hY3RpdmU6IHVuZGVmaW5lZFxuXHRcdHRhYkJhcjogdW5kZWZpbmVkXG5cdFx0dHlwZTogXCJ0YWJcIlxuXHR9XG5cdHRhYmxlIDoge1xuXHRcdGNvbnN0cmFpbnRzOiB1bmRlZmluZWRcblx0XHR0eXBlOlwidGFibGVcIlxuXHRcdGNvbnRlbnQ6W1xuXHRcdFx0e1xuXHRcdFx0XHRcImxhYmVsXCI6IFwiQVwiIFxuXHRcdFx0XHRcImRldGFpbFwiIDogXCJsZXR0ZXJcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJsYWJlbFwiIDogXCJCXCJcblx0XHRcdFx0XCJkZXRhaWxcIiA6IFwibGV0dGVyXCJcblxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0Y2VsbDpcImRlZmF1bHRcIlxuXHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdH1cblx0dGFibGVDZWxsIDoge1xuXHRcdHR5cGU6XCJ0YWJsZUNlbGxcIlxuXHRcdHByb3BlcnRpZXM6IFwiZGVmYXVsdFwiXG5cdFx0aGVpZ2h0OjUwXG5cdFx0c3dpcGU6ZmFsc2Vcblx0XHRzd2lwZUFjdGlvbjpcIkRlbGV0ZVwiXG5cdFx0c3dpcGVDb2xvcjpcIiNGRTM4MjRcIlxuXHRcdHN3aXBlVGV4dENvbG9yOlwiI0ZGRlwiXG5cdH1cblxuXHR0ZXh0OiB7XG5cdFx0dGV4dDogXCJpT1MgVGV4dCBMYXllclwiXG5cdFx0dHlwZTpcInRleHRcIlxuXHRcdHg6MFxuXHRcdHk6MFxuXHRcdHdpZHRoOi0xXG5cdFx0aGVpZ2h0Oi0xXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHRzdHlsZTpcImRlZmF1bHRcIlxuXHRcdGxpbmVzOjFcblx0XHR0ZXh0QWxpZ246XCJsZWZ0XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Y29sb3I6XCJibGFja1wiXG5cdFx0Zm9udFNpemU6IDE3XG5cdFx0Zm9udEZhbWlseTpcIi1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRsaW5lSGVpZ2h0OlwiYXV0b1wiXG5cdFx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRcdG9wYWNpdHk6MVxuXHRcdHRleHRUcmFuc2Zvcm06XCJub25lXCJcblx0XHRuYW1lOlwidGV4dCBsYXllclwiXG5cdFx0Y29uc3RyYWludHM6e31cblx0fVxufVxuXG5cbiMgQ29tcG9uZW50IENvbmZpZ3VyYXRpb24gRnVuY3Rpb25zXG5zZXRQcm9wcyA9IChvYmplY3QpIC0+XG5cdGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpXG5cdG9iamVjdFtcInByb3BzXCJdID0ga2V5c1xuXG5jb21wb25lbnRzID0gW2RlZmF1bHRzLnRleHQsIGRlZmF1bHRzLmFsZXJ0LCBkZWZhdWx0cy5iYW5uZXIsIGRlZmF1bHRzLnNoZWV0LCBkZWZhdWx0cy5maWVsZCwgZGVmYXVsdHMudGFibGUsIGRlZmF1bHRzLnRhYmxlQ2VsbCwgZGVmYXVsdHMua2V5Ym9hcmQsIGRlZmF1bHRzLmJ1dHRvbiwgZGVmYXVsdHMubmF2QmFyLCBkZWZhdWx0cy50YWJCYXIsIGRlZmF1bHRzLnRhYiwgZGVmYXVsdHMuc3RhdHVzQmFyLCBkZWZhdWx0cy5sb2NrU2NyZWVuXVxuXG5mb3IgY29tcCBpbiBjb21wb25lbnRzXG5cdHNldFByb3BzKGNvbXApXG5cbnNldHVwQ29tcG9uZW50ID0gKGNvbXBvbmVudCwgYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0b2JqID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHNbY29tcG9uZW50XS5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0b2JqW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRvYmpbaV0gPSBkZWZhdWx0c1tjb21wb25lbnRdW2ldXG5cdHJldHVybiBvYmpcblxuIyBFcnJvcnNcbmVycm9yID0gKGNvbnRleHQsIGNvZGUpIC0+XG5cdCMjIEVycm9yIGNvZGUgZnJvbSBzYW1lUGFyZW50XG5cdGlmIGNvZGUgPT0gMTBcblx0XHRwcmludCBcIkVycm9yIEludmFsaWQgUmVsYXRpb25zaGlwIOKAkyBMYXllciBpZDoje2NvbnRleHQuaWR9IGhhcyBhIHJlbGF0aW9uc2hpcCB3aXRoIGFub3RoZXIgbGF5ZXIgbm90IGluIHRoZSBzYW1lIHN1cGVyTGF5ZXIuXCJcblxuXHQjIyBFcnJvciBjb2RlcyBmcm9tIGxheW91dEFsaWduIFxuXHRpZiBjb2RlID09IDIwXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IHJlcXVpcmVzIGEgbGF5ZXJcIlxuXHRpZiBjb2RlID09IDIxXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IGNhbm5vdCByZWZlciB0byBpdHNlbGZcIlxuXG5cdCMjIEVycm9yIGNvZGVzIGZvciBhcHBseVxuXHRpZiBjb2RlID09IDQwXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IGlzIG5vdCBhIHZhbGlkIHdlaWdodC4gUGxlYXNlIHVzZSAxMDAsIDIwMCwgMzAwLi4uIG9yIFRoaW4sIExpZ2h0LCBSZWd1bGFyLi4uXCJcblxuXHQjIyBFcnJvciBjb2RlcyBmb3Igbm90IGEgdmFsaWQgdGFiXG5cdGlmIGNvZGUgPT0gNTBcblx0XHRwcmludCBcIkVycm9yIExheWVyIGlkOiN7Y29udGV4dH0gaXMgbm90IGEgdmFsaWQgVGFiIG9iamVjdC4gUGxlYXNlIGNyZWF0ZSBhIFRhYiB1c2luZyBuZXcgbW9kdWxlLlRhYi5cIlxuXG4jIFNwZWNpYWwgQ2hhcmFjdGVyc1xuc3BlY2lhbENoYXIgPSAobGF5ZXIpIC0+XG5cdHRleHQgPSBsYXllclxuXHRpZiBsYXllci50eXBlID09IFwiYnV0dG9uXCJcblx0XHR0ZXh0ID0gbGF5ZXIubGFiZWxcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1iIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2ZvbnRXZWlnaHQ6NjAwfV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItciBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcInJlZFwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXJiXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXJiIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwiYmx1ZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWxiXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWxiIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwibGlnaHQtYmx1ZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWdcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItZyBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImdyZWVuXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItb1wiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1vIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwib3JhbmdlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItcFwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1wIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwib3JhbmdlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCIteVwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi15IFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwieWVsbG93XCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItI1wiKSAhPSAtMVxuXHRcdGNob3NlbkNvbG9yID0gdGV4dC5odG1sLnNsaWNlKDEsIDgpXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5zbGljZSg5LCB0ZXh0Lmh0bWwubGVuZ3RoKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOmNob3NlbkNvbG9yfV0pXHRcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLSBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH1dKVxuXHRpZiBsYXllci5idXR0b25UeXBlID09IFwidGV4dFwiXG5cdFx0bGF5ZXIud2lkdGggPSB0ZXh0LndpZHRoXG5cdGV4cG9ydHMubGF5b3V0KClcblxuIyBEZWNpZGVzIGlmIGl0IHNob3VsZCBiZSB3aGl0ZS9ibGFjayB0ZXh0XG5leHBvcnRzLnNldFRleHRDb2xvciA9IChjb2xvck9iamVjdCkgLT5cblx0cmdiID0gY29sb3JPYmplY3QudG9SZ2JTdHJpbmcoKVxuXHRyZ2IgPSByZ2Iuc3Vic3RyaW5nKDQsIHJnYi5sZW5ndGgtMSlcblx0cmdiID0gcmdiLnJlcGxhY2UoLyAvZywgJycpXG5cdHJnYiA9IHJnYi5yZXBsYWNlKC8gL2csICcnKVxuXHRyZ2IgPSByZ2Iuc3BsaXQoJywnKVxuXHRyZWQgPSByZ2JbMF1cblx0Z3JlZW4gPSByZ2JbMV1cblx0Ymx1ZSA9IHJnYlsyXVxuXHRjb2xvciA9IFwiXCJcblx0aWYgKHJlZCowLjI5OSArIGdyZWVuKjAuNTg3ICsgYmx1ZSowLjExNCkgPiAxODYgXG5cdFx0Y29sb3IgPSBcIiMwMDBcIlxuXHRlbHNlXG5cdFx0Y29sb3IgPSBcIkZGRlwiXG5cdHJldHVybiBjb2xvclxuXG5leHBvcnRzLnNhbWVQYXJlbnQgPSAobGF5ZXIxLCBsYXllcjIpIC0+XG5cdHBhcmVudE9uZSA9IGxheWVyMS5zdXBlckxheWVyXG5cdHBhcmVudFR3byA9IGxheWVyMi5zdXBlckxheWVyXG5cdGlmIHBhcmVudE9uZSA9PSBwYXJlbnRUd29cblx0XHRyZXR1cm4gdHJ1ZVxuXHRlbHNlIFxuXHRcdHJldHVybiBmYWxzZVxuXG5cbiMgdXBkYXRlQ29uc3RyYWludHMgPSAobGF5ZXIpIC0+XG4jIFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1xuIyBcdFx0I0lmIGl0J3MgYSBudW1iZXJcbiMgXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMubGVhZGluZywgMTApXHRcbiMgXHRcdFx0bGF5ZXIuY29uc3RyYWludHMubGVhZGluZyA9IGV4cG9ydHMucHQobGF5ZXIueClcbiMgXHRcdGVsc2VcbiMgXHRcdFx0I0lmIGl0J3MgYSBsYXllclxuIyBcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmxlbmd0aCA9PSB1bmRlZmluZWRcbiMgXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID0gZXhwb3J0cy5wdChsYXllci54KVxuIyBcdFx0XHRlbHNlXG4jIFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcbiMgXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID0gW2xheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0sIGV4cG9ydHMucHQobGF5ZXIueCAtIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0ubWF4WCldXG5cbiMgXHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ1xuIyBcdFx0I0lmIGl0J3MgYSBudW1iZXJcbiMgXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLCAxMClcdFxuIyBcdFx0XHRsYXllci5jb25zdHJhaW50cy50cmFpbGluZyA9IGV4cG9ydHMucHQobGF5ZXIubWF4WClcbiMgXHRcdGVsc2VcbiMgXHRcdFx0I0lmIGl0J3MgYSBsYXllclxuIyBcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5sZW5ndGggPT0gdW5kZWZpbmVkXG4jIFx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgPSBleHBvcnRzLnB0KGxheWVyLm1heFgpXG4jIFx0XHRcdGVsc2VcbiMgXHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuIyBcdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nID0gW2xheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLCBleHBvcnRzLnB0KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLnggLSBsYXllci5tYXhYKV1cblxuIyBcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcFxuIyBcdFx0I0lmIGl0J3MgYSBudW1iZXJcbiMgXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50b3AsIDEwKVx0XG4jIFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9IGV4cG9ydHMucHQobGF5ZXIueSlcbiMgXHRcdGVsc2VcbiMgXHRcdFx0I0lmIGl0J3MgYSBsYXllclxuIyBcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AubGVuZ3RoID09IHVuZGVmaW5lZFxuIyBcdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9IGV4cG9ydHMucHQobGF5ZXIueSlcbiMgXHRcdFx0ZWxzZVxuIyBcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG4jIFx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMudG9wID0gW2xheWVyLmNvbnN0cmFpbnRzLnRvcFswXSwgZXhwb3J0cy5wdChsYXllci55IC0gbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLm1heFkpXVxuXG4jIFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tXG4jIFx0XHQjSWYgaXQncyBhIG51bWJlclxuIyBcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSwgMTApXHRcbiMgXHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYm90dG9tID0gZXhwb3J0cy5wdChsYXllci5tYXhZKVxuIyBcdFx0ZWxzZVxuIyBcdFx0XHQjSWYgaXQncyBhIGxheWVyXG4jIFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbS5sZW5ndGggPT0gdW5kZWZpbmVkXG4jIFx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYm90dG9tID0gZXhwb3J0cy5wdChsYXllci5tYXhZKVxuIyBcdFx0XHRlbHNlXG4jIFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcbiMgXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5ib3R0b20gPSBbbGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzBdLCBleHBvcnRzLnB0KGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbVswXS55IC0gbGF5ZXIubWF4WSldXG5cbiMgXHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiA9PSBcImNlbnRlclwiXG4jIFx0XHRsYXllci5jb25zdHJhaW50cy5hbGlnbiA9IHVuZGVmaW5lZFxuIyBcdFx0bGF5ZXIuY29uc3RyYWludHMubGVhZGluZyA9IGV4cG9ydHMucHQobGF5ZXIueClcbiMgXHRcdGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9IGV4cG9ydHMucHQobGF5ZXIueSlcblxuIyBcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwiaG9yaXpvbnRhbFwiXG4jIFx0XHRsYXllci5jb25zdHJhaW50cy5hbGlnbiA9IHVuZGVmaW5lZFxuIyBcdFx0bGF5ZXIuY29uc3RyYWludHMubGVhZGluZyA9IGV4cG9ydHMucHQobGF5ZXIueClcblxuIyBcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwidmVydGljYWxcIlxuIyBcdFx0bGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPSB1bmRlZmluZWRcbiMgXHRcdGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9IGV4cG9ydHMucHQobGF5ZXIueSlcblxuIyBcdGlmIGxheWVyLmNvbnN0cmFpbnRzLndpZHRoXG4jIFx0XHRsYXllci5jb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHQobGF5ZXIud2lkdGgpXG4jIFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0XG4jIFx0XHRsYXllci5jb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHQobGF5ZXIuaGVpZ2h0KVxuIFxuZXhwb3J0cy5hbmltYXRlTGF5b3V0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdGFuaW1hdGVkTGF5ZXJzID0gW11cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhkZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGRlZmF1bHRzLmFuaW1hdGlvbnNbaV1cblxuXHRpZiBzZXR1cC50YXJnZXQgXG5cdFx0aWYgc2V0dXAudGFyZ2V0Lmxlbmd0aCBcblx0XHRcdGFuaW1hdGVkTGF5ZXJzID0gc2V0dXAudGFyZ2V0XG5cdFx0ZWxzZVxuXHRcdFx0YW5pbWF0ZWRMYXllcnMucHVzaCBzZXR1cC50YXJnZXRcblx0ZWxzZVxuXHRcdGFuaW1hdGVkTGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXG5cdGlmIHNldHVwLmxheWVyXG5cdFx0aWYgc2V0dXAuY29uc3RyYWludHNcblx0XHRcdGZvciBuZXdDb25zdHJhaW50IGluIE9iamVjdC5rZXlzKHNldHVwLmNvbnN0cmFpbnRzKVxuXHRcdFx0XHRzZXR1cC5sYXllci5jb25zdHJhaW50c1tuZXdDb25zdHJhaW50XSA9IHNldHVwLmNvbnN0cmFpbnRzW25ld0NvbnN0cmFpbnRdXG5cblx0I1RyYW5zbGF0ZSBuZXcgY29uc3RyYWludHNcblx0Zm9yIGxheWVyLCBpbmRleCBpbiBhbmltYXRlZExheWVyc1xuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzXG5cdFx0XHRsYXllci5lbmQgPSB7fVxuXHRcdFx0cHJvcHMgPSB7fVxuXHRcdFx0bGF5ZXIuc3VwZXJGcmFtZSA9IHt9XG5cblx0XHRcdGlmIGxheWVyLnN1cGVyTGF5ZXJcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgPSBsYXllci5zdXBlckxheWVyLmhlaWdodFxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLndpZHRoID0gbGF5ZXIuc3VwZXJMYXllci53aWR0aFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLmhlaWdodCA9IGV4cG9ydHMuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBleHBvcnRzLndpZHRoXG5cdFx0XHRcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkICYmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGggPSB7fVx0XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCAhPSB1bmRlZmluZWQgJiYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ID0ge31cblxuXHRcdFx0IyBTaXplIGNvbnN0cmFpbnRzXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy53aWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMud2lkdGggPSBleHBvcnRzLnB4KGxheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0cHJvcHMud2lkdGggPSBsYXllci53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5oZWlnaHQgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLmhlaWdodCA9IGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0KVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5oZWlnaHRcblxuXHRcdFx0IyBQb3NpdGlvbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0I0lmIGl0J3MgYSBudW1iZXJgXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMubGVhZGluZywgMTApXHRcblx0XHRcdFx0XHRwcm9wcy54ID0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIHRoZSBsYXllciByZWZlcmVuY2VkIGhhc24ndCBiZWVuIHNldFxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uZW5kID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRleHBvcnRzLmFuaW1hdGVMYXlvdXRcblx0XHRcdFx0XHRcdFx0XHRsYXllcjpsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcuZW5kLnggKyBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmVuZC53aWR0aFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uZW5kLnggKyBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmVuZC53aWR0aCArIGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1sxXSlcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGggIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFggPSBwcm9wcy54XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50cmFpbGluZywgMTApXHRcblx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuc3VwZXJGcmFtZS53aWR0aCAtIGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcpIC0gcHJvcHMud2lkdGhcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiB0aGUgbGF5ZXIgcmVmZXJlbmNlZCBoYXNuJ3QgYmVlbiBzZXRcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ1swXS5lbmQgPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRcdGV4cG9ydHMuYW5pbWF0ZUxheW91dFxuXHRcdFx0XHRcdFx0XHRcdGxheWVyOmxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5lbmQueCAtIHByb3BzLndpZHRoXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdbMF0uZW5kLnggLSBleHBvcnRzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzFdKSAtIHByb3BzLndpZHRoXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguZW5kWCA9IHByb3BzLnhcblxuXHRcdFx0XHQjI3BlcmZvcm0gYXV0b3NpemVcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFhcblx0XHRcdFx0cHJvcHMud2lkdGggPSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguZW5kWCAtIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFggKyBwcm9wcy53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50b3AsIDEwKVx0XG5cdFx0XHRcdFx0cHJvcHMueSA9IGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMudG9wKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIHRoZSBsYXllciByZWZlcmVuY2VkIGhhc24ndCBiZWVuIHNldFxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5lbmQgPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRcdGV4cG9ydHMuYW5pbWF0ZUxheW91dFxuXHRcdFx0XHRcdFx0XHRcdGxheWVyOmxheWVyLmNvbnN0cmFpbnRzLnRvcFswXVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcC5lbmQueSArIGxheWVyLmNvbnN0cmFpbnRzLnRvcC5lbmQuaGVpZ2h0XG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmVuZC55ICsgbGF5ZXIuY29uc3RyYWludHMudG9wWzBdLmVuZC5oZWlnaHQgKyBleHBvcnRzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRvcFsxXSlcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSA9IHByb3BzLnlcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5ib3R0b20sIDEwKVx0XG5cdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0IC0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50cy5ib3R0b20pIC0gcHJvcHMuaGVpZ2h0XG5cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiB0aGUgbGF5ZXIgcmVmZXJlbmNlZCBoYXNuJ3QgYmVlbiBzZXRcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b21bMF0uZW5kID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRleHBvcnRzLmFuaW1hdGVMYXlvdXRcblx0XHRcdFx0XHRcdFx0XHRsYXllcjpsYXllci5jb25zdHJhaW50cy5ib3R0b21bMF1cblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b20uZW5kLnkgLSBwcm9wcy5oZWlnaHRcblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzBdLmVuZC55IC0gIGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzFdKVxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuZW5kWSA9IHByb3BzLnlcblx0XHRcdFx0IyMgcGVyZm9ybSBhdXRvc2l6ZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LmVuZFkgLSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSBcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuc3RhcnRZXG5cblxuXHRcdFx0IyBBbGlnbm1lbnQgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjU2V0IHRoZSBjZW50ZXJpbmcgZnJhbWVcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuc3VwZXJGcmFtZS53aWR0aCAvIDIgLSBwcm9wcy53aWR0aCAvIDIgXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0IC8gMiAtIHByb3BzLmhlaWdodCAvIDIgXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJjZW50ZXJcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMiBcblx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgLyAyIC0gcHJvcHMuaGVpZ2h0IC8gMiBcblxuXG5cdFx0XHQjIENlbnRlcmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIuZW5kLnggKyAobGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlci5lbmQud2lkdGggLSBwcm9wcy53aWR0aCkgLyAyXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIuZW5kLnkgKyAobGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIuZW5kLmhlaWdodCAtIHByb3BzLmhlaWdodCkgLyAyXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5lbmQueCArIChsYXllci5jb25zdHJhaW50cy5jZW50ZXIuZW5kLndpZHRoIC0gcHJvcHMud2lkdGgpIC8gMlxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmVuZC55ICsgKGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5lbmQuaGVpZ2h0IC0gcHJvcHMuaGVpZ2h0KSAvIDJcblxuXHRcdFx0IyBBbGlnbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ0VkZ2VzLmVuZC54IFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5lbmQueCAtIHByb3BzLndpZHRoICsgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5lbmQud2lkdGhcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3BFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcEVkZ2VzLmVuZC55XG5cdFx0XHRcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMuZW5kLnkgLSBwcm9wcy5oZWlnaHQgKyBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcy5lbmQuaGVpZ2h0IFxuXG5cdFx0XHQjVGltaW5nXG5cdFx0XHRkZWxheSA9IHNldHVwLmRlbGF5XG5cdFx0XHRpZiBzZXR1cC5zdGFnZ2VyXG5cdFx0XHRcdHN0YWcgPSBzZXR1cC5zdGFnZ2VyXG5cdFx0XHRcdGRlbGF5ID0gKChpbmRleCkgKiBzdGFnKVxuXG5cdFx0XHRpZiBzZXR1cC5mYWRlT3V0XG5cdFx0XHRcdCMgaWYgdHlwZW9mID09IFwiYm9vbGVhblwiXG5cdFx0XHRcdCMgXHRwcm9wcy5vcGFjaXR5ID0gMFxuXHRcdFx0XHRpZiBsYXllciA9PSBzZXR1cC5mYWRlT3V0XG5cdFx0XHRcdFx0cHJvcHMub3BhY2l0eSA9IDBcblxuXHRcdFx0aWYgc2V0dXAuZmFkZUluXG5cdFx0XHRcdHByb3BzLm9wYWNpdHkgPSAxXG5cblxuXHRcdFx0bGF5ZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOnByb3BzXG5cdFx0XHRcdHRpbWU6c2V0dXAudGltZVxuXHRcdFx0XHRkZWxheTpkZWxheVxuXHRcdFx0XHRjdXJ2ZTpzZXR1cC5jdXJ2ZVxuXHRcdFx0XHRyZXBlYXQ6c2V0dXAucmVwZWF0XG5cdFx0XHRcdGNvbG9yTW9kZWw6c2V0dXAuY29sb3JNb2RlbFxuXHRcdFx0XHRjdXJ2ZU9wdGlvbnM6c2V0dXAuY3VydmVPcHRpb25zXG5cblx0XHRcdGxheWVyLmVuZCA9IHByb3BzXG5cbiNSZWZyZXNoZXMgTGF5ZXIgb3IgQWxsIExheWVyc1xuZXhwb3J0cy5sYXlvdXQgPSAobGF5ZXIpIC0+XG5cdGlmIGxheWVyID09IHVuZGVmaW5lZFxuXHRcdEAuYXJyYXkgPSBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdGVsc2UgXG5cdFx0QC5hcnJheSA9IFtsYXllcl1cblx0Zm9yIGxheWVyIGluIEAuYXJyYXlcblx0XHRpZiBsYXllci5jb25zdHJhaW50c1xuXHRcdFx0Zm9yIHAgaW4gZGVmYXVsdHMuY29uc3RyYWludFByb3BzXG5cdFx0XHRcdGxheW91dFNpemUobGF5ZXIsIHApXG5cdFx0XHRmb3IgYyBpbiBkZWZhdWx0cy5jb25zdHJhaW50VHlwZXNcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbY10gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5b3V0Q2hhbmdlKGxheWVyLCBjKVxuXHRcdFx0Zm9yIGEgaW4gZGVmYXVsdHMuY29uc3RyYWludEFsaWduc1xuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1thXVxuXHRcdFx0XHRcdGxheW91dEFsaWduKGxheWVyLCBhKVxuXG5cdFx0XHQjVXBkYXRlcyB0aGUgY29uc3RyYWludHMgaWYgdGhlIGxheWVyIGlzIG1hbmlwdWxhdGVkIHRocm91Z2ggb3RoZXIgbWVhbnNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRMaXN0ZW5lciA9PSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludExpc3RlbmVyID0gdHJ1ZVxuXG4jQWxpZ24gY29uc3RyYWludHNcbmxheW91dEFsaWduID0gKGxheWVyLCB0eXBlKSAtPlxuXHRkZWNsYXJlZENvbnN0cmFpbnQgPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRpZiBsYXllci5zdXBlckxheWVyXG5cdFx0QHN1cGVyTGF5ZXIgPSBsYXllci5zdXBlckxheWVyXG5cdGVsc2Vcblx0XHRAc3VwZXJMYXllciA9IHNjcmVlblxuXHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gcGFyc2VJbnQoZGVjbGFyZWRDb25zdHJhaW50LCAxMClcblx0XHRlcnJvcih0eXBlLCAyMClcblx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IGxheWVyXG5cdFx0ZXJyb3IodHlwZSwgMjEpXG5cdGlmIHR5cGVvZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJvYmplY3RcIlxuXHRcdGZvciBpIGluIGRlY2xhcmVkQ29uc3RyYWludFxuXHRcdFx0aWYgdHlwZW9mIGkgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRAdHlwZSA9IGlcblx0XHRcdGlmIHR5cGVvZiBpID09IFwib2JqZWN0XCJcblx0XHRcdFx0QGxheWVyID0gaSBcblx0XHRpZiBAdHlwZSA9PSBcImhvcml6b250YWxDZW50ZXJcIiB8fCBAdHlwZSA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0ZGVsdGFNb3ZlID0gKEBsYXllci53aWR0aCAtIGxheWVyLndpZHRoKSAvIDJcblx0XHRcdGxheWVyLnggPSBAbGF5ZXIueCArIGRlbHRhTW92ZVxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJsZWFkaW5nXCJdID0gZXhwb3J0cy5wdChsYXllci54KVxuXHRcdGlmIEB0eXBlID09IFwidmVydGljYWxDZW50ZXJcIiB8fCBAdHlwZSA9PSBcInZlcnRpY2FsXCIgIFxuXHRcdFx0ZGVsdGFNb3ZlID0gKEBsYXllci5oZWlnaHQgLSBsYXllci5oZWlnaHQpIC8gMlxuXHRcdFx0bGF5ZXIueSA9IEBsYXllci55ICsgZGVsdGFNb3ZlXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcInRvcFwiXSA9IGV4cG9ydHMucHQobGF5ZXIueSlcblx0XHRpZiBAdHlwZSA9PSBcImxlYWRpbmdFZGdlc1wiIHx8IEB0eXBlID09IFwibGVhZGluZ1wiXG5cdFx0XHRsYXllci54ID0gQGxheWVyLnhcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1wibGVhZGluZ1wiXSA9IGV4cG9ydHMucHQobGF5ZXIueClcblx0XHRpZiBAdHlwZSA9PSBcInRyYWlsaW5nRWRnZXNcIiB8fCBAdHlwZSA9PSBcInRyYWlsaW5nXCJcblx0XHRcdGxheWVyLm1heFggPSBAbGF5ZXIubWF4WFxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0cmFpbGluZ1wiXSA9IGV4cG9ydHMucHQoQHN1cGVyTGF5ZXIud2lkdGggLSBsYXllci5tYXhYKVxuXHRcdGlmIEB0eXBlID09IFwidG9wRWRnZXNcIiB8fCBAdHlwZSA9PSBcInRvcFwiXG5cdFx0XHRsYXllci55ID0gQGxheWVyLnlcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1widG9wXCJdID0gZXhwb3J0cy5wdChsYXllci55KVxuXHRcdGlmIEB0eXBlID09IFwiYm90dG9tRWRnZXNcIiB8fCBAdHlwZSA9PSBcImJvdHRvbVwiXG5cdFx0XHRsYXllci5tYXhZID0gQGxheWVyLm1heFlcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1wiYm90dG9tXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci5oZWlnaHQgLSBsYXllci5tYXhZKVxuXHRpZiB0eXBlID09IFwiaG9yaXpvbnRhbENlbnRlclwiIHx8IHR5cGUgPT0gXCJob3Jpem9udGFsXCJcblx0XHRkZWx0YU1vdmUgPSAoZGVjbGFyZWRDb25zdHJhaW50LndpZHRoIC0gbGF5ZXIud2lkdGgpIC8gMlxuXHRcdGxheWVyLnggPSBkZWNsYXJlZENvbnN0cmFpbnQueCArIGRlbHRhTW92ZVxuXHRpZiB0eXBlID09IFwidmVydGljYWxDZW50ZXJcIiB8fCB0eXBlID09IFwidmVydGljYWxcIiAgXG5cdFx0ZGVsdGFNb3ZlID0gKGRlY2xhcmVkQ29uc3RyYWludC5oZWlnaHQgLSBsYXllci5oZWlnaHQpIC8gMlxuXHRcdGxheWVyLnkgPSBkZWNsYXJlZENvbnN0cmFpbnQueSArIGRlbHRhTW92ZVxuXHRpZiB0eXBlID09IFwibGVhZGluZ0VkZ2VzXCIgXG5cdFx0bGF5ZXIueCA9IGRlY2xhcmVkQ29uc3RyYWludC54XG5cdFx0bGF5ZXIuY29uc3RyYWludHNbXCJsZWFkaW5nXCJdID0gZXhwb3J0cy5wdChkZWNsYXJlZENvbnN0cmFpbnQueClcblx0aWYgdHlwZSA9PSBcInRyYWlsaW5nRWRnZXNcIlxuXHRcdGxheWVyLm1heFggPSBkZWNsYXJlZENvbnN0cmFpbnQubWF4WFxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1widHJhaWxpbmdcIl0gPSBleHBvcnRzLnB0KEBzdXBlckxheWVyLmhlaWdodCAtIGxheWVyLm1heFgpXG5cdGlmIHR5cGUgPT0gXCJ0b3BFZGdlc1wiXG5cdFx0bGF5ZXIueSA9IGRlY2xhcmVkQ29uc3RyYWludC55XG5cdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0b3BcIl0gPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cdGlmIHR5cGUgPT0gXCJib3R0b21FZGdlc1wiXG5cdFx0bGF5ZXIubWF4WSA9IGRlY2xhcmVkQ29uc3RyYWludC5tYXhZXG5cdFx0bGF5ZXIuY29uc3RyYWludHNbXCJib3R0b21cIl0gPSBleHBvcnRzLnB0KEBzdXBlckxheWVyLmhlaWdodCAtIGxheWVyLm1heFkpXG5cdGlmIHR5cGUgPT0gXCJhbGlnblwiXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJYKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJZKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJjZW50ZXJcIlxuXHRcdFx0bGF5ZXIuY2VudGVyKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJZKClcblxuI1NpemUgQ29uc3RyYWludHNcbmxheW91dFNpemUgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0bGF5ZXJbdHlwZV0gPSBleHBvcnRzLnB4KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdKVxuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJ0ZXh0XCJcblx0XHRcdHRleHRGcmFtZSA9IHRleHRBdXRvU2l6ZShsYXllcilcblx0XHRcdGxheWVyLndpZHRoID0gdGV4dEZyYW1lLndpZHRoXG5cdFx0XHRsYXllci5oZWlnaHQgPSB0ZXh0RnJhbWUuaGVpZ2h0XG5cbiNNb3ZlICYgUmVzaXplcyBMYXllcnNcbmxheW91dENoYW5nZSA9IChsYXllciwgdHlwZSkgLT5cblx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gIT0gdW5kZWZpbmVkIFxuXHRcdHByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5wcm9wXG5cdFx0b2JqUHJvcCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3Bcblx0XHRvcHAgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vcHBcblx0XHRzdXBlclRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcFxuXG5cdFx0aWYgb2JqUHJvcCAhPSBcIndpZHRoXCIgJiYgb2JqUHJvcCAhPSBcImhlaWdodFwiXG5cdFx0XHRzdXBlclRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcDJcblxuXHRcdGlmIGxheWVyLnN1cGVyTGF5ZXIgIT0gbnVsbFxuXHRcdFx0I0hhcyBhIHN1cGVyTGF5ZXJcblx0XHRcdEBbc3VwZXJUcmFpdF0gPSBsYXllci5zdXBlckxheWVyW3N1cGVyVHJhaXRdXG5cdFx0ZWxzZVxuXHRcdFx0I0RvZXMgbm90IGhhdmUgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gZXhwb3J0c1tzdXBlclRyYWl0XVxuXHRcdGlmIHR5cGUgPT0gXCJ0b3BcIiB8fCB0eXBlID09IFwibGVhZGluZ1wiXG5cdFx0XHQjIEhhbmRsZSBUb3AgJiBMZWFkaW5nXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gMVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdLCAxMClcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXVtvYmpQcm9wXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxIFxuXHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdGlmIG9iamVjdCA9PSBwYXJzZUludChvYmplY3QsIDEwKVxuXHRcdFx0XHRcdFx0XHRALm9iakludCA9IG9iamVjdFxuXHRcdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdFx0QC5vYmpMYXllciA9IG9iamVjdFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gKEAub2JqSW50ICogZXhwb3J0cy5zY2FsZSkgKyBALm9iakxheWVyW29ialByb3BdXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdICE9IHVuZGVmaW5lZFxuXHRcdFx0XHR0cmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW29wcF1bXCJvYmpQcm9wXCJdXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbb3BwXSwgMTApXG5cdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gQFtzdXBlclRyYWl0XSAtIChsYXllcltwcm9wXSArIChleHBvcnRzLnNjYWxlICogbGF5ZXIuY29uc3RyYWludHNbb3BwXSkpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IGxheWVyW3Byb3BdIC0gbGF5ZXIuY29uc3RyYWludHNbb3BwXVtwcm9wXVxuXHRcdFx0XHRcdFx0aWYgbGF5ZXJbdHJhaXRdIDwgMFxuXHRcdFx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBsYXllclt0cmFpdF0gKiAtMVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHN0YXJ0WCA9IGxheWVyLnhcblx0XHRcdFx0XHRcdGVuZFggPSAwXG5cdFx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW29wcF1cblx0XHRcdFx0XHRcdFx0IyBJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdFx0XHRcdGlmIG9iamVjdCA9PSBwYXJzZUludChvYmplY3QsIDEwKVxuXHRcdFx0XHRcdFx0XHRcdGVuZFggPSBlbmRYIC0gb2JqZWN0XG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRlbmRUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW29wcF0ub2JqUHJvcDJcblx0XHRcdFx0XHRcdFx0XHRlbmRYID0gZW5kWCArIG9iamVjdFtlbmRUcmFpdF1cblx0XHRcdFx0XHRcdGxheWVyLndpZHRoID0gZW5kWCAtIHN0YXJ0WFxuXHRcdFx0XHRcdFx0XG5cdFx0ZWxzZVxuXHRcdFx0IyMgSGFuZGxlIEJvdHRvbSAmIFRyYWlsaW5nXG5cdFx0XHRvYmpQcm9wMiA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdID09IHVuZGVmaW5lZFxuXHRcdFx0XHQjIyBObyBvcHBvc2l0ZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdFx0IyMgT25seSBJbnRlZ2VyXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHQjRW50ZXJlZCBMYXllclxuXHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wMl1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEwKVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSAxXG5cdFx0XHRcdFx0XHQjQXJyYXkgb2YgT25lXG5cdFx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRcdCNJbnRcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW29ialByb3BdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdCNPYmplY3Rcblx0XHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSlcblx0XHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdW29ialByb3AyXVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEwKVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA+IDFcdFxuXHRcdFx0XHRcdFx0I1JlbGF0aW9uc2hpcCBBcnJheVxuXHRcdFx0XHRcdFx0Zm9yIG9iamVjdCBpbiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0XHRALm9iakludCA9IG9iamVjdFxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0QC5vYmpMYXllciA9IG9iamVjdFxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEAub2JqTGF5ZXJbb2JqUHJvcDJdIC0gZXhwb3J0cy5zY2FsZSAqIEAub2JqSW50XG5cbiNUZXh0IExheWVyc1xuZXhwb3J0cy5zdHlsZXMgPSB7fVxuXG5leHBvcnRzLmJnQmx1ciA9IChsYXllcikgLT5cblx0bGF5ZXIuc3R5bGVbXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiXSA9IFwiYmx1cigje2V4cG9ydHMucHgoNSl9cHgpXCJcblx0cmV0dXJuIGxheWVyIFxuXG50ZXh0QXV0b1NpemUgPSAodGV4dExheWVyKSAtPlxuXHQjRGVmaW5lIFdpZHRoXG5cdGNvbnN0cmFpbnRzID0ge31cblx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzIFxuXHRcdGlmIHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHRcblx0XHRcdGNvbnN0cmFpbnRzLmhlaWdodCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGhcblx0XHRcdGNvbnN0cmFpbnRzLndpZHRoID0gZXhwb3J0cy5weCh0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdHN0eWxlcyA9XG5cdFx0Zm9udFNpemU6IHRleHRMYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXVxuXHRcdGZvbnRGYW1pbHk6IHRleHRMYXllci5zdHlsZVtcImZvbnQtZmFtaWx5XCJdXG5cdFx0Zm9udFdlaWdodDogdGV4dExheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl1cblx0XHRsaW5lSGVpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGVbXCJsaW5lLWhlaWdodFwiXVxuXHRcdGxldHRlclNwYWNpbmc6IHRleHRMYXllci5zdHlsZVtcImxldHRlci1zcGFjaW5nXCJdXG5cdFx0dGV4dFRyYW5zZm9ybTogdGV4dExheWVyLnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl1cblx0dGV4dFdpZHRoID0gVXRpbHMudGV4dFNpemUgdGV4dExheWVyLmh0bWwsIHN0eWxlcywgY29uc3RyYWludHNcblx0cmV0dXJuIHtcblx0XHR3aWR0aCA6IHRleHRXaWR0aC53aWR0aFxuXHRcdGhlaWdodDogdGV4dFdpZHRoLmhlaWdodFxuXHR9XG5cbmxpc3RlblRvS2V5cyA9IChmaWVsZCwga2V5Ym9hcmQpIC0+XG5cblx0a2V5cHJlc3MgPSAoa2V5KSAtPlxuXHRcdG9yaWdpbmFsQ29sb3IgPSBrZXkuYmFja2dyb3VuZENvbG9yXG5cdFx0c3dpdGNoIGtleS5uYW1lXG5cdFx0XHR3aGVuIFwic2hpZnRcIlxuXHRcdFx0XHRrZXkuaWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cdFx0XHRcdGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdHdoZW4gXCJkZWxldGVcIlxuXHRcdFx0XHRrZXkuaWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cdFx0XHRcdGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0a2V5Lmljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXHRcdFx0d2hlbiBcInNwYWNlXCJcblx0XHRcdFx0a2V5LmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdGVsc2Vcblx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgIT0gXCJpcGFkXCJcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC52aXNpYmxlID0gdHJ1ZVx0XG5cdFx0XHRcdFx0Ym94S2V5ID0ga2V5Lm5hbWVcblx0XHRcdFx0XHRpZiBpc1NoaWZ0XG5cdFx0XHRcdFx0XHRib3hLZXkgPSBib3hLZXkudG9VcHBlckNhc2UoKVxuXHRcdFx0XHRcdGtleWJvYXJkLmtleVBvcFVwLmJveC5odG1sID0gYm94S2V5XG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAubWF4WSA9IGtleS5tYXhZXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAubWlkWCA9IGtleS5taWRYXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRrZXkuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIikpXG5cdFx0XHRcdFx0XHR0aW1lOi4yXG5cblx0aXNDb21tYW5kID0gZmFsc2Vcblx0YWxsU2VsZWN0ZWQgPSBmYWxzZVxuXHRpc1NoaWZ0ID0gZmFsc2Vcblx0Y29kZXMgPSB7XG5cdFx0MTM6XCI8YnI+XCJcblx0XHQzMjpcIiZuYnNwO1wiXG5cdFx0MzM6XCIhXCJcblx0XHQzNDpcIlxcXCJcIlxuXHRcdDM1OlwiI1wiXG5cdFx0MzY6XCIkXCJcblx0XHQzNzpcIiVcIlxuXHRcdDM4OlwiJlwiXG5cdFx0Mzk6XCJcXCdcIlxuXHRcdDQwOlwiKFwiXG5cdFx0NDE6XCIpXCJcblx0XHQ0MjpcIipcIlxuXHRcdDQzOlwiK1wiXG5cdFx0NDQ6XCIsXCJcblx0XHQ0NTpcIi1cIlxuXHRcdDQ3OlwiL1wiXG5cdFx0NDY6XCIuXCJcblx0XHQ0ODpcIjBcIlxuXHRcdDQ5OlwiMVwiXG5cdFx0NTA6XCIyXCJcblx0XHQ1MTpcIjNcIlxuXHRcdDUyOlwiNFwiXG5cdFx0NTM6XCI1XCJcblx0XHQ1NDpcIjZcIlxuXHRcdDU1OlwiN1wiXG5cdFx0NTY6XCI4XCJcblx0XHQ1NzpcIjlcIlxuXHRcdDU4OlwiOlwiXG5cdFx0NTk6XCI7XCJcblx0XHQ2MDpcIjxcIlxuXHRcdDYxOlwiPVwiXG5cdFx0NjI6XCI+XCJcblx0XHQ2MzpcIj9cIlxuXHRcdDY0OlwiQFwiXG5cdFx0NjU6XCJBXCJcblx0XHQ2NjpcIkJcIlxuXHRcdDY3OlwiQ1wiXG5cdFx0Njg6XCJEXCJcblx0XHQ2OTpcIkVcIlxuXHRcdDcwOlwiRlwiXG5cdFx0NzE6XCJHXCJcblx0XHQ3MjpcIkhcIlxuXHRcdDczOlwiSVwiXG5cdFx0NzQ6XCJKXCJcblx0XHQ3NTpcIktcIlxuXHRcdDc2OlwiTFwiXG5cdFx0Nzc6XCJNXCJcblx0XHQ3ODpcIk5cIlxuXHRcdDc5OlwiT1wiXG5cdFx0ODA6XCJQXCJcblx0XHQ4MTpcIlFcIlxuXHRcdDgyOlwiUlwiXG5cdFx0ODM6XCJTXCJcblx0XHQ4NDpcIlRcIlxuXHRcdDg1OlwiVVwiXG5cdFx0ODY6XCJWXCJcblx0XHQ4NzpcIldcIlxuXHRcdDg4OlwiWFwiXG5cdFx0ODk6XCJZXCJcblx0XHQ5MDpcIlpcIlxuXHRcdDkxOlwiW1wiXG5cdFx0OTI6XCJcXFxcXCJcblx0XHQ5MzpcIl1cIlxuXHRcdDk0OlwiXlwiXG5cdFx0OTU6XCJfXCJcblx0XHQ5NjpcImBcIlxuXHRcdDk3OlwiYVwiXG5cdFx0OTg6XCJiXCJcblx0XHQ5OTpcImNcIlxuXHRcdDEwMDpcImRcIlxuXHRcdDEwMTpcImVcIlxuXHRcdDEwMjpcImZcIlxuXHRcdDEwMzpcImdcIlxuXHRcdDEwNDpcImhcIlxuXHRcdDEwNTpcImlcIlxuXHRcdDEwNjpcImpcIlxuXHRcdDEwNzpcImtcIlxuXHRcdDEwODpcImxcIlxuXHRcdDEwOTpcIm1cIlxuXHRcdDExMDpcIm5cIlxuXHRcdDExMTpcIm9cIlxuXHRcdDExMjpcInBcIlxuXHRcdDExMzpcInFcIlxuXHRcdDExNDpcInJcIlxuXHRcdDExNTpcInNcIlxuXHRcdDExNjpcInRcIlxuXHRcdDExNzpcInVcIlxuXHRcdDExODpcInZcIlxuXHRcdDExOTpcIndcIlxuXHRcdDEyMDpcInhcIlxuXHRcdDEyMTpcInlcIlxuXHRcdDEyMjpcInpcIlxuXHRcdDEyMzpcIntcIlxuXHRcdDEyNDpcInxcIlxuXHRcdDEyNTpcIn1cIlxuXHRcdDEyNjpcIn5cIlxuXHR9XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5ZG93bicsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDI3XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRrZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooeTpleHBvcnRzLmhlaWdodClcblx0XHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0XHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHRcdFx0XHRmaWVsZC5jbGlja1pvbmUuZGVzdHJveSgpXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMTZcblx0XHRcdFx0aXNTaGlmdCA9IHRydWVcblx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRrZXlwcmVzcyhrZXlib2FyZC5rZXlzLnNoaWZ0KVxuXHRcdFx0XHRcdGZvciBrIGluIGtleWJvYXJkLmtleXNBcnJheVxuXHRcdFx0XHRcdFx0ay5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gXCJ1cHBlcmNhc2VcIlxuXHRcdFx0aWYgYWxsU2VsZWN0ZWQgPT0gdHJ1ZVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPT0gMzcgfHwgZS5rZXlDb2RlID09IDM5XG5cdFx0XHRcdFx0YWxsU2VsZWN0ZWQgPSBmYWxzZVxuXHRcdFx0XHRcdGZpZWxkLnRleHQuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gOTFcblx0XHRcdFx0aXNDb21tYW5kID0gdHJ1ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDEzXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLnJldHVybi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDhcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdFx0a2V5cHJlc3Moa2V5Ym9hcmQua2V5cy5kZWxldGUpXG5cdFx0XHRcdGlmIGFsbFNlbGVjdGVkID09IHRydWVcblx0XHRcdFx0XHRleHBvcnRzLnVwZGF0ZShmaWVsZC50ZXh0LCBbdGV4dDpcIlwiXSlcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRcdFx0YWxsU2VsZWN0ZWQgPSBmYWxzZVxuXHRcdFx0XHRpbml0aWFsTGVuZ3RoID0gZmllbGQudGV4dC5odG1sLmxlbmd0aFxuXHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sLnNsaWNlKDAsIC0xKVxuXHRcdFx0XHRleHBvcnRzLnVwZGF0ZShmaWVsZC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdFx0ZW5kTGVuZ3RoID0gZmllbGQudGV4dC5odG1sLmxlbmd0aFxuXHRcdFx0XHRpZiBpbml0aWFsTGVuZ3RoID09IGVuZExlbmd0aFxuXHRcdFx0XHRcdG5ld1RleHQgPSBmaWVsZC50ZXh0Lmh0bWwuc2xpY2UoMCwgLTYpXG5cdFx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRcdGlmIGZpZWxkLnRleHQuaHRtbCA9PSBcIlwiXG5cdFx0XHRcdFx0ZmllbGQucGxhY2Vob2xkZXIudmlzaWJsZSA9IHRydWVcblxuXHRcdFx0XHQjIEdldCByaWQgb2YgJiBuYnNwO1xuXG5cdFx0XHRcdGZpZWxkLnZhbHVlID0gZXhwb3J0cy5jbGVhbihuZXdUZXh0KVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ2tleXVwJywgKGUpIC0+XG5cdFx0aWYgZmllbGQuYWN0aXZlXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gMTMgJiYga2V5Ym9hcmRcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5yZXR1cm4uYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDMyICYmIGtleWJvYXJkXG5cdFx0XHRcdGtleWJvYXJkLmtleXMuc3BhY2UuYmFja2dyb3VuZENvbG9yID0gXCJXaGl0ZVwiXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gOCAmJiBrZXlib2FyZFxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLmRlbGV0ZS5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIikpXG5cdFx0XHRcdFx0dGltZTouMVxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLmRlbGV0ZS5pY29uLnN0YXRlcy5zd2l0Y2goXCJvZmZcIilcblx0XHRcdGlmIGUua2V5Q29kZSA9PSA5MVxuXHRcdFx0XHRpc0NvbW1hbmQgPSBmYWxzZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDE2XG5cdFx0XHRcdGlzU2hpZnQgPSBmYWxzZVxuXHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdGZvciBrIGluIGtleWJvYXJkLmtleXNBcnJheVxuXHRcdFx0XHRcdFx0ay5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gXCJsb3dlcmNhc2VcIlxuXHRcdFx0XHRcdGtleWJvYXJkLmtleXMuc2hpZnQuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIikpXG5cdFx0XHRcdFx0XHR0aW1lOi4yXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5cy5zaGlmdC5pY29uLnN0YXRlcy5uZXh0KClcblx0XHRcdGlmIGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPD0gOTBcblx0XHRcdFx0aWYga2V5Ym9hcmQgJiYgZXhwb3J0cy5kZXZpY2UgIT0gXCJpcGFkXCJcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGsgPSBrZXlib2FyZC5rZXlzW2NvZGVzW2Uua2V5Q29kZV0udG9Mb3dlckNhc2UoKV1cblx0XHRcdFx0XHRrLmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIpXG5cdFx0XHRcdFx0XHR0aW1lOi4yXG5cblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdrZXlwcmVzcycsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZSBcblx0XHRcdGNoYXIgPSBjb2Rlc1tlLmtleUNvZGVdXG5cdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRrZXkgPSBrZXlib2FyZC5rZXlzW2NoYXJdXG5cdFx0XHRpZiBpc0NvbW1hbmQgPT0gdHJ1ZVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPT0gOTdcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMTgsIDI1NSwgLjIpXCJcblx0XHRcdFx0XHRhbGxTZWxlY3RlZCA9IHRydWVcblxuXHRcdFx0aWYgaXNDb21tYW5kID09IGZhbHNlXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwXG5cdFx0XHRcdFx0Y2hhcjIgPSBjaGFyLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdFx0a2V5ID0ga2V5Ym9hcmQua2V5c1tjaGFyMl1cblx0XHRcdFx0XHRcdGtleXByZXNzKGtleSlcblxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPj0gOTcgJiYgZS5rZXlDb2RlIDw9IDEyMiB8fCBlLmtleUNvZGUgPT0gMzJcdFx0XG5cdFx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRcdGtleXByZXNzKGtleSlcblxuXHRcdFx0XHRpZiBlLmtleUNvZGUgPiAzMVxuXHRcdFx0XHRcdG5ld1RleHQgPSBmaWVsZC50ZXh0Lmh0bWwgKyBjaGFyXG5cdFx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRcdFx0ZmllbGQudmFsdWUgPSBleHBvcnRzLmNsZWFuKG5ld1RleHQpXG5cbmV4cG9ydHMudXBkYXRlID0gKGxheWVyLCBhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRpZiBsYXllci50eXBlID09IFwidGV4dFwiXG5cdFx0Zm9yIGNoYW5nZSBpbiBhcnJheVxuXHRcdFx0a2V5ID0gT2JqZWN0LmtleXMoY2hhbmdlKVswXVxuXHRcdFx0dmFsdWUgPSBjaGFuZ2Vba2V5XVxuXHRcdFx0aWYga2V5ID09IFwidGV4dFwiXG5cdFx0XHRcdGxheWVyLmh0bWwgPSB2YWx1ZVxuXHRcdFx0aWYga2V5ID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW2tleV0gPSB2YWx1ZVxuXHRcdFx0aWYga2V5ID09IFwiY29sb3JcIlxuXHRcdFx0XHRsYXllci5jb2xvciA9IGV4cG9ydHMuY29sb3IodmFsdWUpXG5cblx0XHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUobGF5ZXIpXG5cdFx0bGF5ZXIud2lkdGggPSB0ZXh0RnJhbWUud2lkdGhcblx0XHRsYXllci5oZWlnaHQgPSB0ZXh0RnJhbWUuaGVpZ2h0XG5cblxuXHRleHBvcnRzLmxheW91dCgpXG5cbmV4cG9ydHMudGltZURlbGVnYXRlID0gKGxheWVyLCBjbG9ja1R5cGUpIC0+XG5cdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0VXRpbHMuZGVsYXkgNjAgLSBAdGltZS5zZWNzLCAtPlxuXHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcblx0XHRVdGlscy5pbnRlcnZhbCA2MCwgLT5cblx0XHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRcdGV4cG9ydHMudXBkYXRlKGxheWVyLCBbdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIGNsb2NrVHlwZSldKVxuIFxuZXhwb3J0cy50aW1lRm9ybWF0dGVyID0gKHRpbWVPYmosIGNsb2NrVHlwZSkgLT5cblx0aWYgY2xvY2tUeXBlID09IGZhbHNlIFxuXHRcdGlmIHRpbWVPYmouaG91cnMgPiAxMlxuXHRcdFx0dGltZU9iai5ob3VycyA9IHRpbWVPYmouaG91cnMgLSAxMlxuXHRcdGlmIHRpbWVPYmouaG91cnMgPT0gMCB0aGVuIHRpbWVPYmouaG91cnMgPSAxMlxuXHRpZiB0aW1lT2JqLm1pbnMgPCAxMFxuXHRcdHRpbWVPYmoubWlucyA9IFwiMFwiICsgdGltZU9iai5taW5zXG5cdHJldHVybiB0aW1lT2JqLmhvdXJzICsgXCI6XCIgKyB0aW1lT2JqLm1pbnNcblxuIyMgQ29tcG9uZW50cyBcbmV4cG9ydHMuQWxlcnQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJhbGVydFwiLCBhcnJheSlcblx0YWxlcnQgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImFsZXJ0XCJcblx0YWxlcnQuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRvdmVybGF5ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsLjMpXCIsIHN1cGVyTGF5ZXI6YWxlcnQsIG5hbWU6XCJvdmVybGF5XCJcblx0b3ZlcmxheS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0bW9kYWwgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgc3VwZXJMYXllcjphbGVydCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTApLCBuYW1lOlwibW9kYWxcIiwgeDo5MiwgeTo1Mzdcblx0bW9kYWwuY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiY2VudGVyXCJcblx0XHR3aWR0aDoyODBcblx0XHRoZWlnaHQ6NDAwXG5cdHRpdGxlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0VGl0bGVcIiwgc3VwZXJMYXllcjptb2RhbCwgdGV4dDpzZXR1cC50aXRsZSwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsICBuYW1lOlwidGl0bGVcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6MjBcblx0dGl0bGUuY29uc3RyYWludHMgPSBcblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHdpZHRoOjIyMFxuXHRcdHRvcDoyMFxuXHRtZXNzYWdlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0TWVzc2FnZVwiLCB0ZXh0OnNldHVwLm1lc3NhZ2UsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOm1vZGFsLCB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgbGluZUhlaWdodDoxNiwgd2lkdGg6MjQwLCBuYW1lOlwibWVzc2FnZVwiXG5cdG1lc3NhZ2UuY29uc3RyYWludHMgPVxuXHRcdHRvcDogW3RpdGxlLCAxMF1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHdpZHRoOiAyMjBcblx0ZGl2aWRlciA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCIsIG5hbWU6XCJob3Jpem9udGFsIGRpdmlkZXJcIlxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDoxXG5cdFx0Ym90dG9tOjQ0XG5cdGV4cG9ydHMubGF5b3V0KClcblx0XG5cdCNUaXRsZSArIE1lc3NhZ2UgKyAxIHNldCBvZiBhY3Rpb25zXG5cdG1vZGFsLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdID0gMjAgKyBleHBvcnRzLnB0KHRpdGxlLmhlaWdodCkgKyAxMCArIGV4cG9ydHMucHQobWVzc2FnZS5oZWlnaHQpICsgMjQgKyA0NFxuXG5cdGFjdGlvbnMgPSBbXVxuXHRzd2l0Y2ggc2V0dXAuYWN0aW9ucy5sZW5ndGhcblx0XHR3aGVuIDFcblx0XHRcdGFjdExhYmVsID0gZXhwb3J0cy5jYXBpdGFsaXplKHNldHVwLmFjdGlvbnNbMF0pXG5cdFx0XHRhY3Rpb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpzZXR1cC5hY3Rpb25zWzBdLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMClcblx0XHRcdGFjdGlvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdGFjdGlvbi5sYWJlbCA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCBjb2xvcjpleHBvcnRzLmNvbG9yKFwiYmx1ZVwiKSwgc3VwZXJMYXllcjphY3Rpb24sIHRleHQ6YWN0TGFiZWwsIG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRhY3Rpb24ubGFiZWwuY29uc3RyYWludHMgPSBcblx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0Ym90dG9tOjE2XG5cdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uXG5cdFx0d2hlbiAyXG5cdFx0XHRhY3RMYWJlbCA9IGV4cG9ydHMuY2FwaXRhbGl6ZShzZXR1cC5hY3Rpb25zWzBdKVxuXHRcdFx0YWN0aW9uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIG5hbWU6c2V0dXAuYWN0aW9uc1swXSwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRhY3Rpb24uY29uc3RyYWludHMgPSBcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOmV4cG9ydHMucHQobW9kYWwud2lkdGgvMilcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgY29sb3I6ZXhwb3J0cy5jb2xvcihcImJsdWVcIiksIHN1cGVyTGF5ZXI6YWN0aW9uLCB0ZXh0OmFjdExhYmVsLCBuYW1lOlwibGFiZWxcIlxuXHRcdFx0YWN0aW9uLmxhYmVsLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdGJvdHRvbToxNlxuXHRcdFx0YWN0aW9ucy5wdXNoIGFjdGlvblx0XHRcblxuXHRcdFx0dmVydERpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgYmFja2dyb3VuZENvbG9yOlwiI0UyRThFQlwiLCBuYW1lOlwidmVydGljYWwgZGl2aWRlclwiXG5cdFx0XHR2ZXJ0RGl2aWRlci5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHR3aWR0aDoxXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdGhlaWdodDo0NFxuXHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdFx0XHRhY3RMYWJlbDIgPSBleHBvcnRzLmNhcGl0YWxpemUoc2V0dXAuYWN0aW9uc1sxXSlcblx0XHRcdGFjdGlvbjIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgbmFtZTpzZXR1cC5hY3Rpb25zWzFdLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMCksIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdGFjdGlvbjIuY29uc3RyYWludHMgPSBcblx0XHRcdFx0bGVhZGluZzpleHBvcnRzLnB0KG1vZGFsLndpZHRoLzIpXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRhY3Rpb24yLmxhYmVsID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIGNvbG9yOmV4cG9ydHMuY29sb3IoXCJibHVlXCIpLCBzdXBlckxheWVyOmFjdGlvbjIsIHRleHQ6YWN0TGFiZWwyLCBuYW1lOlwibGFiZWxcIlxuXHRcdFx0YWN0aW9uMi5sYWJlbC5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRib3R0b206MTZcblx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb24yXG5cdFx0ZWxzZVxuXHRcdFx0Zm9yIGFjdCwgaW5kZXggaW4gc2V0dXAuYWN0aW9uc1xuXHRcdFx0XHRhY3RMYWJlbCA9IGV4cG9ydHMuY2FwaXRhbGl6ZShhY3QpXG5cdFx0XHRcdGFjdGlvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBuYW1lOmFjdCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRcdGFjdGlvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0XHRib3R0b206MCArICgoc2V0dXAuYWN0aW9ucy5sZW5ndGggLSBpbmRleCAtIDEpICogNDQpXG5cdFx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRcdGFjdGlvbkRpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgYmFja2dyb3VuZENvbG9yOlwiI0UyRThFQlwiLCBuYW1lOlwiaG9yaXpvbnRhbCBkaXZpZGVyXCJcblx0XHRcdFx0YWN0aW9uRGl2aWRlci5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0XHRoZWlnaHQ6MVxuXHRcdFx0XHRcdGJvdHRvbTowICsgKChzZXR1cC5hY3Rpb25zLmxlbmd0aCAtIGluZGV4KSAqIDQ0KVxuXHRcdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgY29sb3I6ZXhwb3J0cy5jb2xvcihcImJsdWVcIiksIHN1cGVyTGF5ZXI6YWN0aW9uLCB0ZXh0OmFjdExhYmVsLCBuYW1lOlwibGFiZWxcIlxuXHRcdFx0XHRhY3Rpb24ubGFiZWwuY29uc3RyYWludHMgPSBcblx0XHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdGJvdHRvbToxNFxuXHRcdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uXHRcdFxuXHRcdFx0XHRtb2RhbC5jb25zdHJhaW50c1tcImhlaWdodFwiXSA9IG1vZGFsLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdICsgNDIgLSAxMlxuXG5cdGFsZXJ0LmFjdGlvbnMgPSB7fVx0XG5cdGZvciBhY3QsaW5kZXggaW4gYWN0aW9uc1xuXG5cdFx0I0hhbmRsZSBzcGVjaWFsIGNoYXJhY3RlcnNcblx0XHRhY3QudHlwZSA9IFwiYnV0dG9uXCJcblx0XHRzcGVjaWFsQ2hhcihhY3QpXG5cdFx0XG5cdFx0aWYgc2V0dXAuYWN0aW9uc1tpbmRleF0uaW5kZXhPZihcIi1yXCIpID09IDBcblx0XHRcdGFjdC5vcmlnQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwicmVkXCIpXG5cdFx0ZWxzZVxuXHRcdFx0YWN0Lm9yaWdDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJibHVlXCIpXG5cblx0XHQjQWRkIFRvdWNoIEV2ZW50c1xuXHRcdGFjdC5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdEAuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRALmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmFjdC5iYWNrZ3JvdW5kQ29sb3IuZGFya2VuKDUpKVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0QC5sYWJlbC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOkAub3JpZ0NvbG9yLmxpZ2h0ZW4oMTApKVxuXHRcdFx0XHR0aW1lOi4yNVxuXG5cdFx0YWN0Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiKVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0QC5sYWJlbC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOkAub3JpZ0NvbG9yKVxuXHRcdFx0XHR0aW1lOi4yNVxuXG5cdFx0IyBFeHBvcnQgYWN0aW9uc1xuXHRcdGFsZXJ0LmFjdGlvbnNbYWN0Lm5hbWVdID0gYWN0XG5cblxuXHRleHBvcnRzLmxheW91dCgpXG5cblx0IyBFeHBvcnQgYWxlcnRcblx0YWxlcnQub3ZlcmxheSA9IG92ZXJsYXlcblx0YWxlcnQubW9kYWwgPSBtb2RhbFxuXHRhbGVydC50aXRsZSA9IHRpdGxlXG5cdGFsZXJ0Lm1lc3NhZ2UgPSBtZXNzYWdlXG5cblx0cmV0dXJuIGFsZXJ0XG5cbmV4cG9ydHMuQmFubmVyID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwiYmFubmVyXCIsIGFycmF5KVxuXHRiYW5uZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJhbm5lclwiXG5cdGJhbm5lci5odG1sID0gZXhwb3J0cy5zdmcoYmFubmVyQkdbZXhwb3J0cy5kZXZpY2VdKS5zdmdcblx0YmFubmVyLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRoZWlnaHQ6NjhcblxuXHQjIERpZmZlcmVudCBwb3NpdGlvbmluZ3MgZm9yIGVhY2ggZGV2aWNlXG5cdHN3aXRjaCBleHBvcnRzLmRldmljZSBcblx0XHR3aGVuIFwiaXBhZFwiIFxuXHRcdFx0QGxlYWRpbmdJY29uID0gMjAwXG5cdFx0XHRAdG9wSWNvbiA9IDE1XG5cdFx0XHRAdG9wVGl0bGUgPSAxMVxuXHRcdHdoZW4gXCJpcGFkLXByb1wiXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxOTJcblx0XHRcdEB0b3BJY29uID0gMTJcblx0XHRcdEB0b3BUaXRsZSA9IDlcblx0XHRlbHNlXG5cdFx0XHRAbGVhZGluZ0ljb24gPSAxNVxuXHRcdFx0QHRvcEljb24gPSA4XG5cdFx0XHRAdG9wVGl0bGUgPSA1XG5cblx0aWYgc2V0dXAuaWNvbiA9PSB1bmRlZmluZWRcblx0XHRzZXR1cC5pY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YmFubmVyXG5cdFx0c2V0dXAuaWNvbi5zdHlsZVtcImJhY2tncm91bmRcIl0gPSBcImxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNjdGRjgxIDAlLCAjMDFCNDFGIDEwMCUpXCJcblx0ZWxzZVxuXHRcdGJhbm5lci5hZGRTdWJMYXllcihzZXR1cC5pY29uKVxuXG5cdHNldHVwLmljb24uYm9yZGVyUmFkaXVzID0gZXhwb3J0cy5weCg0LjUpXG5cdHNldHVwLmljb24ubmFtZSA9IFwiaWNvblwiXG5cdHNldHVwLmljb24uY29uc3RyYWludHMgPVxuXHRcdGhlaWdodDoyMFxuXHRcdHdpZHRoOjIwXG5cdFx0bGVhZGluZzpAbGVhZGluZ0ljb25cblx0XHR0b3A6QHRvcEljb24gXG5cblx0dGl0bGUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYmFubmVyVGl0bGVcIiwgdGV4dDpzZXR1cC50aXRsZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250V2VpZ2h0OlwibWVkaXVtXCIsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcInRpdGxlXCJcblx0dGl0bGUuY29uc3RyYWludHMgPSBcblx0XHR0b3A6QHRvcFRpdGxlXG5cblx0XHRsZWFkaW5nOltzZXR1cC5pY29uLCAxMV1cblx0bWVzc2FnZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJiYW5uZXJNZXNzYWdlXCIsIHRleHQ6c2V0dXAubWVzc2FnZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjpiYW5uZXIsIG5hbWU6XCJtZXNzYWdlXCJcblx0bWVzc2FnZS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZ0VkZ2VzOnRpdGxlXG5cdFx0dG9wOlt0aXRsZSwgMl1cblxuXHR0aW1lID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImJhbm5lclRpbWVcIiwgdGV4dDpzZXR1cC50aW1lLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRTaXplOjExLCBzdXBlckxheWVyOmJhbm5lciwgbmFtZTpcInRpbWVcIlxuXHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOlt0aXRsZSwgNV1cblx0XHRib3R0b21FZGdlczogdGl0bGVcblxuXHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIiB8fCBleHBvcnRzLmRldmljZSA9PSBcImlwYWQtcHJvXCJcblx0XHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRcdGJvdHRvbUVkZ2VzOiB0aXRsZVxuXHRcdFx0dHJhaWxpbmc6IEBsZWFkaW5nSWNvblxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0ZXhwb3J0cy5iZ0JsdXIoYmFubmVyKVxuXG5cdCMjIEJhbm5lciBEcmFnIHNldHRpbmdzXG5cdGJhbm5lci5kcmFnZ2FibGUgPSB0cnVlXG5cdGJhbm5lci5kcmFnZ2FibGUuaG9yaXpvbnRhbCA9IGZhbHNlXG5cdGJhbm5lci5kcmFnZ2FibGUuY29uc3RyYWludHMgPVxuXHRcdHk6MFxuXG5cdGJhbm5lci5kcmFnZ2FibGUuYm91bmNlT3B0aW9ucyA9XG5cdCAgICBmcmljdGlvbjogMjVcblx0ICAgIHRlbnNpb246IDI1MFxuXG5cdGJhbm5lci5vbiBFdmVudHMuRHJhZ0VuZCwgLT5cblx0XHRpZiBiYW5uZXIubWF4WSA8IGV4cG9ydHMucHgoNjgpXG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjE1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0VXRpbHMuZGVsYXkgLjI1LCAtPlxuXHRcdFx0XHRiYW5uZXIuZGVzdHJveSgpXG5cblxuXHQjIEJ1ZmZlciB0aGF0IHNpdHMgYWJvdmUgdGhlIGJhbm5lclxuXHRiYW5uZXJCdWZmZXIgPSBuZXcgTGF5ZXIgbWF4WTowLCBuYW1lOlwiYnVmZmVyXCIsIGJhY2tncm91bmRDb2xvcjpcIiMxQjFCMUNcIiwgb3BhY2l0eTouOSwgc3VwZXJMYXllcjpiYW5uZXIsIHdpZHRoOmV4cG9ydHMud2lkdGgsIG1heFk6YmFubmVyLnksIGhlaWdodDpleHBvcnRzLmhlaWdodFxuXHRleHBvcnRzLmJnQmx1cihiYW5uZXJCdWZmZXIpXG5cblx0IyBBbmltYXRlLWluXG5cdGlmIHNldHVwLmFuaW1hdGVkID09IHRydWVcblx0XHRiYW5uZXIueSA9IDAgLSBiYW5uZXIuaGVpZ2h0XG5cdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KHk6MClcblx0XHRcdHRpbWU6LjI1XG5cdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblxuXHQjIEFuaW1hdGUtb3V0XG5cdGlmIHNldHVwLmR1cmF0aW9uXG5cdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24sIC0+XG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uICsgLjI1LCAtPlxuXHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXHRcdFxuXHQjIEV4cG9ydCBCYW5uZXJcblx0YmFubmVyLmljb24gPSBzZXR1cC5pY29uXG5cdGJhbm5lci50aXRsZSA9IHRpdGxlXG5cdGJhbm5lci5tZXNzYWdlID0gbWVzc2FnZVxuXHRyZXR1cm4gYmFubmVyXG5cbmV4cG9ydHMuQnV0dG9uID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwiYnV0dG9uXCIsIGFycmF5KVxuXHRidXR0b24gPSBuZXcgTGF5ZXIgbmFtZTpzZXR1cC5uYW1lXG5cdGJ1dHRvbi5idXR0b25UeXBlID0gc2V0dXAuYnV0dG9uVHlwZVxuXHRidXR0b24udHlwZSA9IHNldHVwLnR5cGVcblx0Y29sb3IgPSBcIlwiXG5cdGlmIHNldHVwLmNvbnN0cmFpbnRzXG5cdFx0YnV0dG9uLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRzZXR1cC5jb25zdHJhaW50c1xuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0aWYgc2V0dXAuc3VwZXJMYXllciBcblx0XHRzZXR1cC5zdXBlckxheWVyLmFkZFN1YkxheWVyKGJ1dHRvbilcblx0c3dpdGNoIHNldHVwLmJ1dHRvblR5cGVcblx0XHR3aGVuIFwiYmlnXCJcblx0XHRcdEBmb250U2l6ZSA9IDIwXG5cdFx0XHRAdG9wID0gMThcblx0XHRcdEBmb250V2VpZ2h0ID0gXCJtZWRpdW1cIlxuXHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzoxMFxuXHRcdFx0XHR0cmFpbGluZzoxMFxuXHRcdFx0XHRoZWlnaHQ6NTdcblx0XHRcdGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSBleHBvcnRzLnB4KDEyLjUpXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG5cdFx0XHRzd2l0Y2ggc2V0dXAuc3R5bGVcblx0XHRcdFx0d2hlbiBcImxpZ2h0XCJcblx0XHRcdFx0XHRjb2xvciA9IFwiIzAwN0FGRlwiXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1ciBcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuOSlcIlxuXHRcdFx0XHRcdFx0ZXhwb3J0cy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cdFx0XHRcdHdoZW4gXCJkYXJrXCJcblx0XHRcdFx0XHRjb2xvciA9IFwiI0ZGRlwiXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDQzLCA0MywgNDMsIC45KVwiXG5cdFx0XHRcdFx0XHRleHBvcnRzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCIjMjgyODI4XCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXIgXG5cdFx0XHRcdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3Ioc2V0dXAuYmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRcdFx0cmdiU3RyaW5nID0gYmFja2dyb3VuZENvbG9yLnRvUmdiU3RyaW5nKClcblx0XHRcdFx0XHRcdHJnYmFTdHJpbmcgPSByZ2JTdHJpbmcucmVwbGFjZShcIilcIiwgXCIsIC45KVwiKVxuXHRcdFx0XHRcdFx0cmdiYVN0cmluZyAgPSByZ2JhU3RyaW5nLnJlcGxhY2UoXCJyZ2JcIiwgXCJyZ2JhXCIpXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSByZ2JhU3RyaW5nXG5cdFx0XHRcdFx0XHRleHBvcnRzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblxuXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yXG5cblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0bmV3Q29sb3IgPSBcIlwiXG5cdFx0XHRcdGlmIHNldHVwLnN0eWxlID09IFwiZGFya1wiXG5cdFx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uYmFja2dyb3VuZENvbG9yLmxpZ2h0ZW4oMTApXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IuZGFya2VuKDEwKVxuXHRcdFx0XHRidXR0b24uYW5pbWF0ZSBcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6bmV3Q29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6YmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRcdHdoZW4gXCJzbWFsbFwiXG5cdFx0XHRAZm9udFNpemUgPSAxNlxuXHRcdFx0QHRvcCA9IDRcblx0XHRcdGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSBleHBvcnRzLnB4KDIuNSlcblx0XHRcdHN3aXRjaCBzZXR1cC5zdHlsZVxuXHRcdFx0XHR3aGVuIFwibGlnaHRcIlxuXHRcdFx0XHRcdGNvbG9yID0gXCIjMDA3QUZGXCJcblx0XHRcdFx0XHRidXR0b24uYm9yZGVyQ29sb3IgPSBcIiMwMDdBRkZcIlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdGJ1dHRvbi5ib3JkZXJDb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRidXR0b24uYm9yZGVyV2lkdGggPSBleHBvcnRzLnB4KDEpXG5cblxuXHRcdGVsc2Vcblx0XHRcdGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdEBmb250U2l6ZSA9IHNldHVwLmZvbnRTaXplXG5cdFx0XHRAZm9udFdlaWdodCA9IHNldHVwLmZvbnRXZWlnaHRcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5zdWJMYXllcnNbMF0uY29sb3IubGlnaHRlbigzMClcblx0XHRcdFx0YnV0dG9uLnN1YkxheWVyc1swXS5hbmltYXRlIFxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOm5ld0NvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5zdWJMYXllcnNbMF0uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOnNldHVwLmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0dGV4dExheWVyID0gbmV3IGV4cG9ydHMuVGV4dCB0ZXh0OnNldHVwLnRleHQsIGNvbG9yOmNvbG9yLCBzdXBlckxheWVyOmJ1dHRvbiwgZm9udFNpemU6QGZvbnRTaXplLCBmb250V2VpZ2h0OkBmb250V2VpZ2h0XG5cdHRleHRMYXllci5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRzd2l0Y2ggc2V0dXAuYnV0dG9uVHlwZSBcblx0XHR3aGVuIFwic21hbGxcIlxuXHRcdFx0YnV0dG9uLnByb3BzID0gKHdpZHRoOnRleHRMYXllci53aWR0aCArIGV4cG9ydHMucHgoNjApLCBoZWlnaHQ6IHRleHRMYXllci5oZWlnaHQgKyBleHBvcnRzLnB4KDEwKSlcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6Y29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVx0XG5cdFx0XHRcdHRleHRMYXllci5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6XCIjRkZGXCIpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiKVxuXHRcdFx0XHRcdHRpbWU6LjVcdFxuXHRcdFx0XHR0ZXh0TGF5ZXIuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRlbHNlIFxuXHRcdFx0YnV0dG9uLnByb3BzID0gKHdpZHRoOnRleHRMYXllci53aWR0aCwgaGVpZ2h0OnRleHRMYXllci5oZWlnaHQpXG5cdGV4cG9ydHMubGF5b3V0KClcblx0YnV0dG9uLmxhYmVsID0gdGV4dExheWVyXG5cdHJldHVybiBidXR0b25cblxuZXhwb3J0cy5GaWVsZCA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImZpZWxkXCIsIGFycmF5KVxuXHRmaWVsZCA9IG5ldyBMYXllciBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weChzZXR1cC5ib3JkZXJSYWRpdXMpLCBiYWNrZ3JvdW5kQ29sb3I6c2V0dXAuYmFja2dyb3VuZENvbG9yLCB3aWR0aDpleHBvcnRzLnB4KHNldHVwLndpZHRoKSwgaGVpZ2h0OmV4cG9ydHMucHgoc2V0dXAuaGVpZ2h0KVxuXHRpZiBzZXR1cC5jb25zdHJhaW50c1xuXHRcdGZpZWxkLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRzZXR1cC5jb25zdHJhaW50c1xuXHRmaWVsZC5hY3RpdmUgPSBmYWxzZVxuXHR0ZXh0ID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImZpZWxkVGV4dFwiLCBzdXBlckxheWVyOmZpZWxkLCB0ZXh0OnNldHVwLnRleHQsIGZvbnRTaXplOnNldHVwLmZvbnRTaXplLCBmb250V2VpZ2h0OnNldHVwLmZvbnRXZWlnaHQsIGNvbG9yOnNldHVwLmNvbG9yXG5cdGlmIHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRcdHRleHQuY29uc3RyYWludHMgPVxuXHRcdFx0c2V0dXAudGV4dENvbnN0cmFpbnRzXG5cdGZpZWxkLnRleHQgPSB0ZXh0XG5cblx0aWYgc2V0dXAuc3VwZXJMYXllclxuXHRcdHNldHVwLnN1cGVyTGF5ZXIuYWRkU3ViTGF5ZXIoZmllbGQpXG5cblxuXG5cblx0IyNIYW5kbGUga2V5cHJlc3Ncblx0dGV4dC5vbiBcImNoYW5nZTpodG1sXCIsIC0+XG5cdFx0aWYgdGV4dC5odG1sID09IFwiXCJcblx0XHRcdGZpZWxkLmN1cnNvci5jb25zdHJhaW50cyA9IHthbGlnbjpcInZlcnRpY2FsXCIsIGxlYWRpbmc6OH1cblx0XHRlbHNlXG5cdFx0XHRmaWVsZC5jdXJzb3IuY29uc3RyYWludHMgPSB7YWxpZ246XCJ2ZXJ0aWNhbFwiLCB0cmFpbGluZ0VkZ2VzOnRleHR9XG5cdFx0aWYgZmllbGQucGxhY2Vob2xkZXJcblx0XHRcdGZpZWxkLnBsYWNlaG9sZGVyLnZpc2libGUgPSBmYWxzZVxuXG5cdGlmIHNldHVwLnRleHQgPT0gXCJcIiB8fCBzZXR1cC50ZXh0ID09IHVuZGVmaW5lZFxuXHRcdHBsYWNlaG9sZGVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImZpZWxkUGxhY2Vob2xkZXJcIiwgc3VwZXJMYXllcjpmaWVsZCwgdGV4dDpzZXR1cC5wbGFjZWhvbGRlclRleHQsIGZvbnRTaXplOnNldHVwLmZvbnRTaXplLCBmb250V2VpZ2h0OnNldHVwLmZvbnRXZWlnaHQsIGNvbG9yOnNldHVwLnBsYWNlaG9sZGVyQ29sb3Jcblx0XHRpZiBzZXR1cC50ZXh0Q29uc3RyYWludHMgXG5cdFx0XHRwbGFjZWhvbGRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRcdGZpZWxkLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcblxuXHRmaWVsZC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0ZmllbGQuYWN0aXZlID0gdHJ1ZVxuXHRcdHRleHQudmlzaWJsZSA9IHRydWVcblx0XHRjbGlja1pvbmUgPSBuZXcgTGF5ZXIgbmFtZTpcImZpZWxkQWN0aXZlXCIsIG9wYWNpdHk6MFxuXHRcdGlmIHNldHVwLmlucHV0XG5cdFx0XHRrZXlib2FyZCA9IG5ldyBleHBvcnRzLktleWJvYXJkIGFuaW1hdGVkOnRydWUsIG91dHB1dDpmaWVsZCwgcmV0dXJuVGV4dDpzZXR1cC5yZXR1cm5UZXh0LCByZXR1cm5Db2xvcjpzZXR1cC5yZXR1cm5Db2xvclxuXHRcdFx0ZmllbGQua2V5Ym9hcmQgPSBrZXlib2FyZFxuXHRcdFx0Y2xpY2tab25lLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdHRvcDowXG5cdFx0XHRcdGJvdHRvbTprZXlib2FyZC5zcGVjcy5oZWlnaHRcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRlbHNlXG5cdFx0XHRjbGlja1pvbmUuY29uc3RyYWludHMgPVxuXHRcdFx0XHR0b3A6MFxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXG5cdFx0Y2xpY2tab25lLm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGhhbmRsZXIpIC0+XG5cdFx0XHQjICMgbGlzdGVuIGZvciBzb21ldGhpbmcgZWxzZVxuXHRcdFx0IyBpZiBoYW5kbGVyLm9mZnNldFggPCBmaWVsZC54IHx8IGhhbmRsZXIub2Zmc2V0WCA+IGZpZWxkLm1heFggfHwgaGFuZGxlci5vZmZzZXRZIDwgZmllbGQueSB8fCBoYW5kbGVyLm9mZnNldFkgPiBmaWVsZC5tYXhZXG5cdFx0XHQjIFx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0XHRcdGZpZWxkLmtleWJvYXJkLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooeTpleHBvcnRzLmhlaWdodClcblx0XHRcdFx0dGltZTouNFxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFV0aWxzLmRlbGF5IC41LCAtPlxuXHRcdFx0XHRmaWVsZC5rZXlib2FyZC5kZXN0cm95KClcblx0XHRcdFx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0Y2xpY2tab25lLmRlc3Ryb3koKVxuXHRcdGZpZWxkLmNsaWNrWm9uZSA9IGNsaWNrWm9uZVxuXG5cdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdGZpZWxkLmtleWJvYXJkLmtleXMuZGlzbWlzcy5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGZpZWxkLmtleWJvYXJkLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOih5OmV4cG9ydHMuaGVpZ2h0KVxuXHRcdFx0XHRcdHRpbWU6LjRcblx0XHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFx0VXRpbHMuZGVsYXkgLjUsIC0+XG5cdFx0XHRcdFx0ZmllbGQua2V5Ym9hcmQuZGVzdHJveSgpXG5cdFx0XHRcdFx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0XHRjbGlja1pvbmUuZGVzdHJveSgpXG4gXG5cblx0XHQjIyBEZWZhdWx0IEN1cnNvclxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhzZXR1cC5jdXJzb3IpXG5cdFx0aWYga2V5cy5sZW5ndGggPCAxXG5cdFx0XHRzZXR1cC5jdXJzb3IuY29uc3RyYWludHMgPSB7YWxpZ246XCJ2ZXJ0aWNhbFwiLCBsZWFkaW5nOjh9XG5cdFx0XHRzZXR1cC5jdXJzb3Iud2lkdGggPSAyXG5cdFx0XHRzZXR1cC5jdXJzb3IuaGVpZ2h0ID0gMjBcblxuXHRcdGlmIGZpZWxkLmN1cnNvciA9PSB1bmRlZmluZWRcblx0XHRcdGxpc3RlblRvS2V5cyhmaWVsZCwga2V5Ym9hcmQpXG5cdFx0XHRjdXJzb3IgPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weChzZXR1cC5jdXJzb3Iud2lkdGgpLCBoZWlnaHQ6ZXhwb3J0cy5weChzZXR1cC5jdXJzb3IuaGVpZ2h0KSwgc3VwZXJMYXllcjpmaWVsZCwgbmFtZTpcImN1cnNvclwiLCBiYWNrZ3JvdW5kQ29sb3I6ZXhwb3J0cy5jb2xvcihcImJsdWVcIiksIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEpXG5cdFx0XHRmaWVsZC5jdXJzb3IgPSBjdXJzb3Jcblx0XHRcdGN1cnNvci5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRzZXR1cC5jdXJzb3IuY29uc3RyYWludHNcblxuXHRcdFx0VXRpbHMuaW50ZXJ2YWwgLjUsIC0+XG5cdFx0XHRcdGlmIGZpZWxkLmFjdGl2ZSA9PSB0cnVlXG5cdFx0XHRcdFx0aWYgZmllbGQuY3Vyc29yLm9wYWNpdHkgPT0gMFxuXHRcdFx0XHRcdFx0ZmllbGQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZmllbGQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTowKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRmaWVsZC5jdXJzb3Iub3BhY2l0eSA9IDBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4gZmllbGRcblxuZXhwb3J0cy5TdGF0dXNCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJzdGF0dXNCYXJcIiwgYXJyYXkpXG5cdHN0YXR1c0JhciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwic3RhdHVzQmFyLmFsbFwiXG5cdHN0YXR1c0Jhci50eXBlID0gc2V0dXAudHlwZVxuXHRzdGF0dXNCYXIuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjIwXG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDVcblx0XHRlbHNlXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDNcblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJsaWdodFwiXG5cdFx0QGNvbG9yID0gXCJ3aGl0ZVwiXG5cdGVsc2Vcblx0XHRAY29sb3IgPSBcImJsYWNrXCJcblx0Zm9yIGxheWVyIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsYXllci50eXBlID09IFwibG9ja1NjcmVlblwiXG5cdFx0XHRAaXNMb2NrU2NyZWVuUHJlc2VudCA9IHRydWVcblx0aWYgQGlzTG9ja1NjcmVlblByZXNlbnRcblx0XHRncmlwcGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCB3aWR0aDpleHBvcnRzLnB4KDM3KSwgaGVpZ2h0OmV4cG9ydHMucHgoNSksIG5hbWU6XCJncmlwcGVyXCIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjUsIG5hbWU6XCJncmlwcGVyXCJcblx0XHRncmlwcGVyLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDM3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoNSl9cHgnIHZpZXdCb3g9JzAgMCAzNyA1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5HcmlwcGVyPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0F1dG8tQ29tcGxldGUtQmFyLUNsb3NlZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE2OS4wMDAwMDAsIC0yLjAwMDAwMCknIGZpbGw9JyNGRkZGRkYnPlxuXHRcdFx0XHRcdFx0PHJlY3QgaWQ9J0dyaXBwZXInIHg9JzE2OS41JyB5PScyLjUnIHdpZHRoPSczNicgaGVpZ2h0PSc0JyByeD0nMi41Jz48L3JlY3Q+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGdyaXBwZXIuY29uc3RyYWludHMgPSBcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6MlxuXHRlbHNlIFxuXHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRpZiBzZXR1cC5jbG9jazI0ID09IGZhbHNlXG5cdFx0XHRpZiBAdGltZS5ob3VycyA+IDExIFxuXHRcdFx0XHRAdGltZS5zdGFtcCA9IFwiUE1cIlxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAdGltZS5zdGFtcCA9IFwiQU1cIlxuXHRcdGVsc2Vcblx0XHRcdEB0aW1lLnN0YW1wID0gXCJcIlxuXHRcdHRpbWUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyVGltZVwiLCB0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgc2V0dXAuY2xvY2syNCkgKyBcIiBcIiArIEB0aW1lLnN0YW1wLCBmb250U2l6ZToxMiwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJ0aW1lXCJcblx0XHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6QHRvcENvbnN0cmFpbnRcblx0c2lnbmFsID0gW11cblx0aWYgc2V0dXAuc2lnbmFsIDwgMVxuXHRcdG5vTmV0d29yayA9IG5ldyBleHBvcnRzLlRleHQgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGZvbnRTaXplOjEyLCB0ZXh0OlwiTm8gTmV0d29ya1wiXG5cdFx0bm9OZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmc6N1xuXHRcdFx0dG9wOjNcblx0ZWxzZVxuXHRcdGZvciBpIGluIFswLi4uc2V0dXAuc2lnbmFsXVxuXHRcdFx0ZG90ID0gbmV3IExheWVyIGhlaWdodDpleHBvcnRzLnB4KDUuNSksIHdpZHRoOmV4cG9ydHMucHgoNS41KSwgYmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIiwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOkBjb2xvciwgbmFtZTpcInNpZ25hbFsje2l9XVwiXG5cdFx0XHRpZiBpID09IDBcblx0XHRcdFx0ZG90LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOjdcblx0XHRcdFx0XHR0b3A6N1x0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW2kgLSAxIF0sIDFdXG5cdFx0XHRcdFx0dG9wOjdcdFx0XHRcdFx0XG5cdFx0XHRzaWduYWwucHVzaCBkb3QgXG5cdFx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0aWYgc2V0dXAuc2lnbmFsIDwgNVxuXHRcdFx0bm9uRG90cyA9IDUgLSBzZXR1cC5zaWduYWxcblx0XHRcdGZvciBpIGluIFswLi4ubm9uRG90c11cblx0XHRcdFx0bm9uRG90ID0gbmV3IExheWVyIGhlaWdodDpleHBvcnRzLnB4KDUuNSksIHdpZHRoOmV4cG9ydHMucHgoNS41KSwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNpZ25hbFsje3NpZ25hbC5sZW5ndGh9XVwiXG5cdFx0XHRcdG5vbkRvdC5zdHlsZS5ib3JkZXIgPSBcIiN7ZXhwb3J0cy5weCgxKX1weCBzb2xpZCAje0Bjb2xvcn1cIlxuXHRcdFx0XHRub25Eb3QuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDFdXG5cdFx0XHRcdFx0dG9wOjdcblx0XHRcdFx0c2lnbmFsLnB1c2ggbm9uRG90XG5cdFx0XHRcdGV4cG9ydHMubGF5b3V0KClcdFxuXHRcdGNhcnJpZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyQ2FycmllclwiLCB0ZXh0OnNldHVwLmNhcnJpZXIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBmb250U2l6ZToxMiwgY29sb3I6QGNvbG9yLCBuYW1lOlwiY2FycmllclwiLCB0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiXG5cdFx0Y2Fycmllci5jb25zdHJhaW50cyA9IFxuXHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgN11cblx0XHRcdHRvcDozXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGlmIHNldHVwLmNhcnJpZXJcblx0XHRcdG5ldHdvcmsgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyTmV0d29ya1wiLCB0ZXh0OnNldHVwLm5ldHdvcmssIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBmb250U2l6ZToxMiwgY29sb3I6QGNvbG9yLCBuYW1lOlwibmV0d29ya1wiLCB0ZXh0VHJhbnNmb3JtOlwidXBwZXJjYXNlXCJcblx0XHRcdG5ldHdvcmsuY29uc3RyYWludHMgPVxuXHRcdFx0XHRsZWFkaW5nOltjYXJyaWVyLCA1XVxuXHRcdFx0XHR0b3A6M1xuXHRcdGlmIHNldHVwLmNhcnJpZXIgPT0gXCJcIiB8fCBzZXR1cC5jYXJyaWVyID09IFwid2lmaVwiXG5cdFx0XHRuZXR3b3JrID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMTQpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwibmV0d29ya1wiXG5cdFx0XHRuZXR3b3JrLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAxNCAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPldpLUZpPC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nU3RhdHVzLUJhci9CbGFjay9DaGFyZ2luZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTg3LjAwMDAwMCwgLTUuMDAwMDAwKScgZmlsbD0nI3tAY29sb3J9Jz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTk2LjE0NDQyMDgsMTIuNDM4NTA0MyBDOTUuNjI2Mzc0LDExLjg0NTQ0NTYgOTQuODUyMzYxNiwxMS40Njg5MTE5IDkzLjk4NzU2MywxMS40Njg5MTE5IEM5My4xMzkwMDczLDExLjQ2ODkxMTkgOTIuMzc3ODU5NCwxMS44MzE0MzQxIDkxLjg2MDE2NTIsMTIuNDA1MzE3NyBMOTQuMDIyNTM5MSwxNC41IEw5Ni4xNDQ0MjA4LDEyLjQzODUwNDMgWiBNOTguMzIzNDk2NCwxMC4zMjE0NDI1IEM5Ny4yNDQ3Nzk0LDkuMTkxNzQ1NjMgOTUuNzAxNDM4Nyw4LjQ4NDQ1NTk2IDkzLjk4NzU2Myw4LjQ4NDQ1NTk2IEM5Mi4yODgyNzIzLDguNDg0NDU1OTYgOTAuNzU2NjI2NCw5LjE3OTc1ODkzIDg5LjY3OTI2OTgsMTAuMjkyNjkzNiBMOTAuNzY5Mjk4NywxMS4zNDg2IEM5MS41NjcyMDUsMTAuNTA1MzcwOCA5Mi43MTM2NDgsOS45NzY2ODM5NCA5My45ODc1NjMsOS45NzY2ODM5NCBDOTUuMjc2ODgzNiw5Ljk3NjY4Mzk0IDk2LjQzNTYzMDUsMTAuNTE4MjM1IDk3LjIzNDYyMTUsMTEuMzc5MzI5MyBMOTguMzIzNDk2NCwxMC4zMjE0NDI1IEw5OC4zMjM0OTY0LDEwLjMyMTQ0MjUgWiBNMTAwLjUsOC4yMDY4NzkzMyBDOTguODYyOTU3OCw2LjUzOTQzNjcyIDk2LjU1MDU2OTksNS41IDkzLjk4NzU2Myw1LjUgQzkxLjQzNzUxMDMsNS41IDg5LjEzNTU0OTYsNi41Mjg5NTYwNSA4Ny41LDguMTgxNjQ0MzEgTDg4LjU4OTU1NzksOS4yMzcwOTQ0MSBDODkuOTQ2MDc5OCw3Ljg1NDMxNjU1IDkxLjg2Mjg5MjEsNi45OTIyMjc5OCA5My45ODc1NjMsNi45OTIyMjc5OCBDOTYuMTI2MDAyNiw2Ljk5MjIyNzk4IDk4LjA1Mzg4MDksNy44NjU1MjYwOSA5OS40MTE4Njk4LDkuMjY0MDQyNzIgTDEwMC41LDguMjA2ODc5MzMgWicgaWQ9J1dpLUZpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFx0bmV0d29yay5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRsZWFkaW5nOltzaWduYWxbc2lnbmFsLmxlbmd0aCAtIDFdLCA3XVxuXHRcdFx0XHR0b3A6QHRvcENvbnN0cmFpbnRcblx0YmF0dGVyeUljb24gPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyNSksIGhlaWdodDpleHBvcnRzLnB4KDEwKSwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYXR0ZXJ5SWNvblwiXG5cdGlmIHNldHVwLmJhdHRlcnkgPiA3MCBcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0PGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjUwNjc0NCw2LjUgQzM0Ni4yMjY4NzcsNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIzMDIyNSwxNCAzNDYuNTA2NzQ0LDE0IEwzNjUuOTkzMjU2LDE0IEMzNjYuMjczMTIzLDE0IDM2Ni41LDEzLjc4MzYyOCAzNjYuNSwxMy41MDc5MDQxIEwzNjYuNSw2Ljk5MjA5NTk1IEMzNjYuNSw2LjcyMDMxODg2IDM2Ni4yNjk3NzUsNi41IDM2NS45OTMyNTYsNi41IEwzNDYuNTA2NzQ0LDYuNSBaJyBpZD0nQmF0dGVyeSc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0aWYgc2V0dXAuYmF0dGVyeSA8PSA3MCAmJiBzZXR1cC5iYXR0ZXJ5ID4gMjBcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0PGcgaWQ9J1N0YXR1cy1CYXIvV2hpdGUvMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjUwMTIzMSw2LjUgQzM0Ni4yMjQ0MDksNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIyOTc1MSwxNCAzNDYuNTAxMjMxLDE0IEwzNTYuNDk4NzY5LDE0IEMzNTYuNzc1NTkxLDE0IDM1NywxMy43ODM2MjggMzU3LDEzLjUwNzkwNDEgTDM1Nyw2Ljk5MjA5NTk1IEMzNTcsNi43MjAzMTg4NiAzNTYuNzcwMjQ5LDYuNSAzNTYuNDk4NzY5LDYuNSBMMzQ2LjUwMTIzMSw2LjUgWicgaWQ9J0JhdHRlcnknPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGlmIHNldHVwLmJhdHRlcnkgPD0gMjBcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdFx0PGcgaWQ9J1N0YXR1cy1CYXIvV2hpdGUvMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjQ5MDQ3OSw2LjUgQzM0Ni4yMTk1OTUsNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIxNTA1NywxNCAzNDYuNDkwNDc5LDE0IEwzNDkuNTA5NTIxLDE0IEMzNDkuNzgwNDA1LDE0IDM1MCwxMy43ODM2MjggMzUwLDEzLjUwNzkwNDEgTDM1MCw2Ljk5MjA5NTk1IEMzNTAsNi43MjAzMTg4NiAzNDkuNzg0OTQzLDYuNSAzNDkuNTA5NTIxLDYuNSBMMzQ2LjQ5MDQ3OSw2LjUgWicgaWQ9J0JhdHRlcnknPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGJhdHRlcnlJY29uLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZyA6IDdcblx0XHR0b3A6QHRvcENvbnN0cmFpbnRcblx0YmF0dGVyeVBlcmNlbnQgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyQmF0dGVyeVBlcmNlbnRcIiwgdGV4dDpzZXR1cC5iYXR0ZXJ5ICsgXCIlXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBmb250U2l6ZToxMiwgY29sb3I6QGNvbG9yLCBuYW1lOlwiYmF0dGVyeVBlcmNlbnRcIlxuXHRiYXR0ZXJ5UGVyY2VudC5jb25zdHJhaW50cyA9IFxuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeUljb24sIDNdXG5cdFx0dG9wOjNcblx0Ymx1ZXRvb3RoID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoOCksIGhlaWdodDpleHBvcnRzLnB4KDE1KSwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIG9wYWNpdHk6LjUsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJibHVldG9vdGhcIlxuXHRibHVldG9vdGguaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDgpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNSl9cHgnIHZpZXdCb3g9JzAgMCA4IDE1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPkJsdWV0b290aDwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHQ8ZyBpZD0nU3RhdHVzLUljb25zLShXaGl0ZSknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMzcuMDAwMDAwLCAwLjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHRcdFx0PHBhdGggZD0nTTE0MC41LDE0LjUgTDE0NSwxMC4yNSBMMTQxLjgsNy41IEwxNDUsNC43NSBMMTQwLjUsMC41IEwxNDAuNSw2LjA3MTQyODU3IEwxMzcuOCwzLjc1IEwxMzcsNC41IEwxNDAuMjU4MzMzLDcuMzc1IEwxMzcsMTAuMjUgTDEzNy44LDExIEwxNDAuNSw4LjY3ODU3MTQzIEwxNDAuNSwxNC41IFogTTE0MS41LDMgTDE0My4zNjY2NjcsNC43NSBMMTQxLjUsNi4yNSBMMTQxLjUsMyBaIE0xNDEuNSw4LjUgTDE0My4zNjY2NjcsMTAuMjUgTDE0MS41LDEyIEwxNDEuNSw4LjUgWicgaWQ9J0JsdWV0b290aCc+PC9wYXRoPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0Ymx1ZXRvb3RoLmNvbnN0cmFpbnRzID0gXG5cdFx0dG9wOiAzXG5cdFx0dHJhaWxpbmc6IFtiYXR0ZXJ5UGVyY2VudCwgN11cblxuXHRleHBvcnRzLmxheW91dCgpXG5cblx0IyBFeHBvcnQgc3RhdHVzQmFyXG5cdHN0YXR1c0Jhci5iYXR0ZXJ5ID0ge31cblx0c3RhdHVzQmFyLmJhdHRlcnkucGVyY2VudCA9IGJhdHRlcnlQZXJjZW50XG5cdHN0YXR1c0Jhci5iYXR0ZXJ5Lmljb24gPSBiYXR0ZXJ5SWNvblxuXHRzdGF0dXNCYXIuYmx1ZXRvb3RoID0gYmx1ZXRvb3RoXG5cdHN0YXR1c0Jhci50aW1lID0gdGltZVxuXHRzdGF0dXNCYXIubmV0d29yayA9IG5ldHdvcmtcblx0c3RhdHVzQmFyLmNhcnJpZXIgPSBjYXJyaWVyXG5cdHN0YXR1c0Jhci5zaWduYWwgPSBzaWduYWxcblx0cmV0dXJuIHN0YXR1c0JhclxuXG5leHBvcnRzLktleWJvYXJkID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwia2V5Ym9hcmRcIiwgYXJyYXkpXG5cblx0I1RoaXMgd2lsbCBob2xkIGFsbCBvZiB0aGUgc3BlY3MgZm9yIGVhY2ggZGV2aWNlJ3Mga2V5Ym9hcmRcblx0Ym9hcmRTcGVjcyA9IHt9XG5cblx0I1RoaXMgd2lsbCBzZXQgdGhlIHNwZWNzXG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHRib2FyZFNwZWNzLmhlaWdodCA9IDIxNVxuXHRcdFx0Ym9hcmRTcGVjcy5rZXkgPSB7XG5cdFx0XHRcdHdpZHRoOmV4cG9ydHMucHgoMjYpXG5cdFx0XHRcdGhlaWdodDpleHBvcnRzLnB4KDM5KVxuXHRcdFx0fVxuXHRcdFx0Ym9hcmRTcGVjcy5leHBhbmRlZEtleSA9IGV4cG9ydHMucHgoMzkpXG5cdFx0XHRib2FyZFNwZWNzLmV4cGFuZGVkU3BhY2VyID0gZXhwb3J0cy5weCgxMilcblxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nID0ge31cblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cxID0gZXhwb3J0cy5weCgzKVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzIgPSBleHBvcnRzLnB4KDE5KVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzMgPSBleHBvcnRzLnB4KDU0KVxuXG5cblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wID0ge31cblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzEgPSBleHBvcnRzLnB4KDExKVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MiA9IGV4cG9ydHMucHgoMjYpXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czID0gZXhwb3J0cy5weCg0MSlcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzQgPSBleHBvcnRzLnB4KDU1KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNoaWZ0SWNvbiA9IHt4OmV4cG9ydHMucHgoOSksIHk6ZXhwb3J0cy5weCgyKX1cblx0XHRcdGJvYXJkU3BlY3MuZGVsZXRlSWNvbiA9IHt4OmV4cG9ydHMucHgoNyksIHk6ZXhwb3J0cy5weCgxMCl9XG5cdFx0XHRib2FyZFNwZWNzLmVtb2ppSWNvbiA9IHt4OmV4cG9ydHMucHgoOCksIHk6ZXhwb3J0cy5weCg5KX1cblxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5ID0gZXhwb3J0cy5weCgzNi41KVxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzID0gZXhwb3J0cy5weCg0KVxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5Qm90dG9tID0gZXhwb3J0cy5weCg1OClcblxuXHRcdFx0Ym9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0ID0gMFxuXHRcdFx0Ym9hcmRTcGVjcy5ib3R0b21Sb3cgPSA4XG5cdFx0XHRib2FyZFNwZWNzLnJldHVybktleSA9IGV4cG9ydHMucHgoNzQpXG5cblx0XHRcdGJvYXJkU3BlY3Muc3BhY2VyID0gZXhwb3J0cy5weCg2KVxuXG5cdFx0d2hlbiBcImlwaG9uZS02c1wiXG5cdFx0XHRib2FyZFNwZWNzLmhlaWdodCA9IDIxNlxuXHRcdFx0Ym9hcmRTcGVjcy5rZXkgPSB7XG5cdFx0XHRcdHdpZHRoOmV4cG9ydHMucHgoMzEuNSlcblx0XHRcdFx0aGVpZ2h0OmV4cG9ydHMucHgoNDIpXG5cdFx0XHR9XG5cblx0XHRcdGJvYXJkU3BlY3MuZXhwYW5kZWRLZXkgPSBleHBvcnRzLnB4KDQ2LjUpXG5cdFx0XHRib2FyZFNwZWNzLmV4cGFuZGVkU3BhY2VyID0gZXhwb3J0cy5weCgxNClcblxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nID0ge31cblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cxID0gZXhwb3J0cy5weCgzKVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzIgPSBleHBvcnRzLnB4KDIyKVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzMgPSBleHBvcnRzLnB4KDU5KVxuXG5cblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wID0ge31cblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzEgPSBleHBvcnRzLnB4KDEwKVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MiA9IGV4cG9ydHMucHgoMjIpXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czID0gZXhwb3J0cy5weCgzNClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzQgPSBleHBvcnRzLnB4KDQ0KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNoaWZ0SWNvbiA9IHt4OmV4cG9ydHMucHgoMTEpLCB5OmV4cG9ydHMucHgoMil9XG5cdFx0XHRib2FyZFNwZWNzLmRlbGV0ZUljb24gPSB7eDpleHBvcnRzLnB4KDEwKSwgeTpleHBvcnRzLnB4KDEzKX1cblx0XHRcdGJvYXJkU3BlY3MuZW1vamlJY29uID0ge3g6ZXhwb3J0cy5weCgxMSksIHk6ZXhwb3J0cy5weCgxMSl9XG5cblx0XHRcdGJvYXJkU3BlY3MucmV0dXJuS2V5ID0gZXhwb3J0cy5weCg4Ny41KVxuXHRcdFx0Ym9hcmRTcGVjcy5ib3R0b21Sb3cgPSA2XG5cdFx0XHRib2FyZFNwZWNzLmlQYWREZWxldGVPZmZzZXQgPSAwXG5cblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleSA9IGV4cG9ydHMucHgoNDIpXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMgPSBleHBvcnRzLnB4KDUpXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXlCb3R0b20gPSBleHBvcnRzLnB4KDU2KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNwYWNlciA9IGV4cG9ydHMucHgoNilcblxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRib2FyZFNwZWNzLmhlaWdodCA9IDIyNlxuXHRcdFx0Ym9hcmRTcGVjcy5rZXkgPSB7XG5cdFx0XHRcdHdpZHRoOmV4cG9ydHMucHgoMzUpXG5cdFx0XHRcdGhlaWdodDpleHBvcnRzLnB4KDQ1KVxuXHRcdFx0fVxuXHRcdFx0Ym9hcmRTcGVjcy5leHBhbmRlZEtleSA9IGV4cG9ydHMucHgoNTApXG5cdFx0XHRib2FyZFNwZWNzLmV4cGFuZGVkU3BhY2VyID0gZXhwb3J0cy5weCgyMClcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZyA9IHt9XG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MSA9IGV4cG9ydHMucHgoNClcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cyID0gZXhwb3J0cy5weCgyNSlcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3czID0gZXhwb3J0cy5weCg2NylcblxuXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcCA9IHt9XG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cxID0gZXhwb3J0cy5weCg4KVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MiA9IGV4cG9ydHMucHgoMTkpXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czID0gZXhwb3J0cy5weCgzMClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzQgPSBleHBvcnRzLnB4KDQxKVxuXG5cdFx0XHRib2FyZFNwZWNzLnNoaWZ0SWNvbiA9IHt4OmV4cG9ydHMucHgoMTMpLCB5OmV4cG9ydHMucHgoMil9XG5cdFx0XHRib2FyZFNwZWNzLmRlbGV0ZUljb24gPSB7eDpleHBvcnRzLnB4KDExKSwgeTpleHBvcnRzLnB4KDE0KX1cblx0XHRcdGJvYXJkU3BlY3MuZW1vamlJY29uID0ge3g6ZXhwb3J0cy5weCgxMSksIHk6ZXhwb3J0cy5weCgxMSl9XG5cblx0XHRcdGJvYXJkU3BlY3MuYm90dG9tUm93ID0gNlxuXG5cdFx0XHRib2FyZFNwZWNzLmlQYWREZWxldGVPZmZzZXQgPSAwXG5cblx0XHRcdGJvYXJkU3BlY3MucmV0dXJuS2V5ID0gZXhwb3J0cy5weCg5NylcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5ID0gZXhwb3J0cy5weCg0NSlcblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cyA9IGV4cG9ydHMucHgoNSlcblxuXHRcdFx0Ym9hcmRTcGVjcy5zcGFjZXIgPSBleHBvcnRzLnB4KDYpXG5cdFx0d2hlbiBcImlwYWRcIlxuXHRcdFx0Ym9hcmRTcGVjcy5oZWlnaHQgPSAyNjhcblx0XHRcdGJvYXJkU3BlY3Mua2V5ID0ge1xuXHRcdFx0XHR3aWR0aDpleHBvcnRzLnB4KDU2KVxuXHRcdFx0XHRoZWlnaHQ6ZXhwb3J0cy5weCg1Nilcblx0XHRcdH1cblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZyA9IHt9XG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MSA9IGV4cG9ydHMucHgoNilcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cyID0gZXhwb3J0cy5weCgzNSlcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3czID0gZXhwb3J0cy5weCg3NClcblxuXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcCA9IHt9XG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cxID0gZXhwb3J0cy5weCgxMClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzIgPSBleHBvcnRzLnB4KDE4KVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyA9IGV4cG9ydHMucHgoMjgpXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3c0ID0gZXhwb3J0cy5weCg0MClcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaGlmdEljb24gPSB7eDpleHBvcnRzLnB4KDE4KSwgeTpleHBvcnRzLnB4KDIpfVxuXHRcdFx0Ym9hcmRTcGVjcy5kZWxldGVJY29uID0ge3g6ZXhwb3J0cy5weCgxOCksIHk6ZXhwb3J0cy5weCgyMCl9XG5cdFx0XHRib2FyZFNwZWNzLmVtb2ppSWNvbiA9IHt4OmV4cG9ydHMucHgoMTgpLCB5OmV4cG9ydHMucHgoMTgpfVxuXG5cdFx0XHRib2FyZFNwZWNzLmJvdHRvbVJvdyA9IDdcblxuXHRcdFx0Ym9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0ID0gYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCAqIDIgLSBib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cxXG5cblx0XHRcdGJvYXJkU3BlY3MucmV0dXJuS2V5ID0gZXhwb3J0cy5weCgxMDYpXG5cblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleSA9IGV4cG9ydHMucHgoNTYpXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXkyID0gZXhwb3J0cy5weCg3Nilcblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cyA9IGV4cG9ydHMucHgoNSlcblxuXHRcdFx0Ym9hcmRTcGVjcy5zcGFjZXIgPSBleHBvcnRzLnB4KDEyKVxuXG5cdGJvYXJkID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNEMUQ1REFcIiwgbmFtZTpcImtleWJvYXJkXCJcblxuXHRib2FyZC5zcGVjcyA9IGJvYXJkU3BlY3NcblxuXHQjVGhpcyB3aWxsIGdlbmVyYXRlIGEgb2JqZWN0IHdpdGggMjE2IGhlaWdodCBhbmQgaXQnbGwgc3RyZXRjaCBlbmQgdG8gZW5kLiBcblx0Ym9hcmQuY29uc3RyYWludHMgPSAoaGVpZ2h0OmJvYXJkU3BlY3MuaGVpZ2h0LCB0cmFpbGluZzowLCBsZWFkaW5nOjApXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdCNUaGlzIHdpbGwgZGV0ZXJpbmUgaWYgaXQgc3RhcnRzIG9uIHRoZSBib3R0b20gb3IgcG9wcyB1cCBmcm9tIHRoZSBib3R0b20gXG5cdGlmIHNldHVwLmFuaW1hdGVkXG5cdFx0Ym9hcmQueSA9IGV4cG9ydHMuaGVpZ2h0XG5cdFx0Ym9hcmQuYW5pbWF0ZSBcblx0XHRcdHByb3BlcnRpZXM6KG1heFk6IGV4cG9ydHMuaGVpZ2h0KVxuXHRcdFx0dGltZTouMjVcblx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRlbHNlXG5cdFx0Ym9hcmQubWF4WSA9IGV4cG9ydHMuaGVpZ2h0XG5cblx0I0xldHRlcnMgdG8gYmUgbWFkZVxuXHRsZXR0ZXJzQXJyYXkgPSBbXCJxXCIsIFwid1wiLCBcImVcIiwgXCJyXCIsIFwidFwiLCBcInlcIiwgXCJ1XCIsIFwiaVwiLCBcIm9cIiwgXCJwXCIsIFwiYVwiLCBcInNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwielwiLCBcInhcIiwgXCJjXCIsIFwidlwiLCAgXCJiXCIsIFwiblwiLCBcIm1cIl1cblx0I1RoZXNlIGFycmF5cyBhcmUgZGVwZW5lZGVudCBvbiB0aGUgRGV2aWNlXG5cdHNlY29uZEFycmF5ID0gW11cblx0dGhpcmRBcnJheSA9IFtdXG5cblx0c3dpdGNoIGV4cG9ydHMuZGV2aWNlXG5cdFx0d2hlbiBcImlwYWRcIlxuXHRcdFx0c2Vjb25kQXJyYXkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCIsIFwiLVwiLCBcIi9cIiwgXCI6XCIsIFwiO1wiLCBcIihcIiwgXCIpXCIsIFwiJFwiLCBcIiZcIiwgXCJAXCIsIFwidW5kb1wiLCBcImhpZGVcIiwgXCIuXCIsICcsJywgXCI/XCIsIFwiIVwiLCBcIidcIiwgXCJcXFwiXCJdXG5cdFx0XHR0aGlyZEFycmF5ID0gW1wiXFxbXCIsIFwiXFxdXCIsIFwiXFx7XCIsIFwiXFx9XCIsIFwiI1wiLCBcIiVcIiwgXCJeXCIsIFwiKlwiLCBcIitcIiwgXCI9XCIsIFwiX1wiLCBcIlxcXFxcIiwgXCJ8XCIsIFwiflwiLCBcIjxcIiwgXCI+XCIsIFwi4oKsXCIsIFwiwqNcIiwgXCLCpVwiLCBcInJlZG9cIiwgXCJoaWRlXCIsIFwiLlwiLCAnLCcsIFwiP1wiLCBcIiFcIiwgXCInXCIsIFwiXFxcIlwiXVxuXHRcdGVsc2Vcblx0XHRcdHNlY29uZEFycmF5ID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiLCBcIi1cIiwgXCIvXCIsIFwiOlwiLCBcIjtcIiwgXCIoXCIsIFwiKVwiLCBcIiRcIiwgXCImXCIsIFwiQFwiLCBcIlxcXCJcIiwgXCIuXCIsICcsJywgXCI/XCIsIFwiIVwiLCBcIidcIl1cblx0XHRcdHRoaXJkQXJyYXkgPSBbXCJcXFtcIiwgXCJcXF1cIiwgXCJcXHtcIiwgXCJcXH1cIiwgXCIjXCIsIFwiJVwiLCBcIl5cIiwgXCIqXCIsIFwiK1wiLCBcIj1cIiwgXCJfXCIsIFwiXFxcXFwiLCBcInxcIiwgXCJ+XCIsIFwiPFwiLCBcIj5cIiwgXCLigqxcIiwgXCLCo1wiLCBcIsKlXCIsIFwi4oCiXCIsIFwiLlwiLCAnLCcsIFwiP1wiLCBcIiFcIiwgXCInXCIsIFwiXFxcIlwiXVxuXHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdGxldHRlcnNBcnJheS5wdXNoIFwiLFwiXG5cdFx0bGV0dGVyc0FycmF5LnB1c2ggXCIuXCJcblxuXHQjTnVtYmVycyB0byBiZSBtYWRlIChkZXBlbmRpbmcgb24gZGV2aWNlKVxuXHRudW1zQXJyYXkgPSBbMC4uOV1cblxuXHQjSG9sZHMgdGhlIGtleXMgdGhhdCB3ZSBtYWtlLiBUaGlzIHdpbGwgYWxsb3dzIHVzIHRvIHF1aWNrbHkgaXRlcmF0ZSB0aHJvdWdoIHRoZW0uIFxuXHRrZXlzQXJyYXkgPSBbXVxuXG5cdGtleVBvcFVwID0gbmV3IExheWVyIHdpZHRoOkBrZXlXaWR0aCwgaGVpZ2h0OkBrZXlIZWlnaHQsIHg6QC54LTE2KmV4cG9ydHMuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJrZXkgcG9wIHVwXCJcblx0Ym94ID0gbmV3IExheWVyIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEwKSwgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgY29sb3I6XCJibGFja1wiLCBuYW1lOlwibGV0dGVyXCJcblx0Ym94LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiAzOSAqIGV4cG9ydHMuc2NhbGUgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBAbGluZUhlaWdodFxuXHR9XG5cdEAuY29sb3IgPSBcIndoaXRlXCJcblx0cGF0aCA9IG5ldyBMYXllciBzdXBlckxheWVyOmtleVBvcFVwLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwic2hhcGUgcGF0aFwiXG5cdGJvYXJkLmtleVBvcFVwID0ga2V5UG9wVXBcblx0Ym9hcmQua2V5UG9wVXAuYm94ID0gYm94XG5cblx0cm93c01hcCA9IFtcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiBib2FyZFNwZWNzLnBhZGRpbmcucm93MVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAwXG5cdFx0XHRcImVuZEluZGV4XCIgOiA5XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzJcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDE4XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MlxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzNcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTlcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDI1XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93M1xuXHRcdH1cblx0XVxuXG5cdGZpcnN0Um93S2V5V2lkdGggPSAwXG5cdHNlY29uZFJvd0tleVdpZHRoID0gMFxuXG5cdGJvYXJkLmtleXMgPSB7fVxuXHRmb3IgbGV0dGVyIGluIGxldHRlcnNBcnJheVxuXHRcdGluZGV4ID0gbGV0dGVyc0FycmF5LmluZGV4T2YobGV0dGVyKSBcblx0XHRrZXkgPSBuZXcgTGF5ZXIgbmFtZTpsZXR0ZXIsIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czo1KmV4cG9ydHMuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIGNvbG9yOlwiYmxhY2tcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5rZXkud2lkdGgsIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0XHRib2FyZC5rZXlzW2xldHRlcl0gPSBrZXlcblx0XHRrZXlQb3BVcC5icmluZ1RvRnJvbnQoKVxuXHRcdGJveC5icmluZ1RvRnJvbnQoKVxuXHRcdGlmIGV4cG9ydHMuc2NhbGUgPT0gMlxuXHRcdFx0a2V5UG9wVXAuY29uc3RyYWludHMgPSAod2lkdGg6NjUsIGhlaWdodDoxMjIpXG5cdFx0XHRwYXRoLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY1LCBoZWlnaHQ6IDEyMilcblx0XHRcdHBhdGgueSA9IDEwXG5cdFx0XHRAcGF0aFdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBwYXRoSGVpZ2h0ID0gZXhwb3J0cy5weCgxMjIpXG5cdFx0XHRAa2V5SGVpZ2h0ID0gZXhwb3J0cy5weCgzMilcblx0XHRcdEBrZXlXaWR0aCA9IGV4cG9ydHMucHgoNDQpXG5cdFx0XHRAbGluZUhlaWdodCA9IEBrZXlXaWR0aCAtIDE3ICsgXCJweFwiXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzIsIGhlaWdodDo0NClcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gZXhwb3J0cy5weCgyOClcblxuXHRcdGlmIGV4cG9ydHMuc2NhbGUgPT0gM1xuXHRcdFx0a2V5UG9wVXAuY29uc3RyYWludHMgPSAod2lkdGg6NjgsIGhlaWdodDoxMjIpXG5cdFx0XHRAa2V5SGVpZ2h0ID0gZXhwb3J0cy5weCgxMjIpXG5cdFx0XHRAa2V5V2lkdGggPSBleHBvcnRzLnB4KDY1KVxuXHRcdFx0QGxpbmVIZWlnaHQgPSBAa2V5V2lkdGggKyBcInB4XCJcblx0XHRcdEBwYXRoV2lkdGggPSBleHBvcnRzLnB4KDY4KVxuXHRcdFx0QHBhdGhIZWlnaHQgPSBleHBvcnRzLnB4KDEyOClcblx0XHRcdHBhdGgueSA9IDBcblxuXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzUsIGhlaWdodDo0Nilcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gZXhwb3J0cy5weCgyOClcblxuXHRcdGlmIGV4cG9ydHMud2lkdGggPT0gNjQwXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MjYsIGhlaWdodDozOSlcblxuXHRcdGtleVBvcFVwLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGtleS5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiAyNSAqIGV4cG9ydHMuc2NhbGUgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGtleS5oZWlnaHQgLSBleHBvcnRzLnB4KDIpICsgXCJweFwiXG5cdFx0fVxuXHRcdGlmIGxldHRlciA9PSBcIixcIiB8fCBsZXR0ZXIgPT0gXCIuXCJcblx0XHRcdGV4dHJhU3ltYm9sID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5LCB3aWR0aDpleHBvcnRzLnB4KDMwKSwgaGVpZ2h0OmV4cG9ydHMucHgoMzApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB5OmV4cG9ydHMucHgoMTUpLCBjb2xvcjpleHBvcnRzLmNvbG9yKFwiYmxhY2tcIiksIG5hbWU6XCIhLz9cIlxuXHRcdFx0ZXh0cmFTeW1ib2wuY2VudGVyWCgpXG5cdFx0XHRleHRyYVN5bWJvbC5zdHlsZSA9IHtcblx0XHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMjQpICsgXCJweFwiXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdFx0J2xpbmUtaGVpZ2h0JyA6IFwiMjBweFwiXG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCBsZXR0ZXJcblx0XHRcdFx0d2hlbiBcIixcIiB0aGVuIGV4dHJhU3ltYm9sLmh0bWwgPSBcIiFcIlxuXHRcdFx0XHR3aGVuIFwiLlwiIHRoZW4gZXh0cmFTeW1ib2wuaHRtbCA9IFwiP1wiXG5cdFx0XHRrZXkuc3R5bGVbXCJsaW5lLWhlaWdodFwiXSA9IGtleS5oZWlnaHQgKyBleHBvcnRzLnB4KDEwKSArIFwicHhcIlxuXG5cdFx0a2V5Lmh0bWwgPSBsZXR0ZXJcblx0XHRcblx0XHRpZiBpbmRleCA8PSByb3dzTWFwWzBdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFswXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMF0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAoZmlyc3RSb3dLZXlXaWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFswXS5tYXJnaW5Ub3Bcblx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdCNIYW5kbGUgdGhlIGV4dHJhIHBpeGVscyBvbiB0aGUgdG9wIHJvd1xuXHRcdFx0XHRpZiBpbmRleCAlIDIgIT0gMFxuXHRcdFx0XHRcdGtleS53aWR0aCA9IGtleS53aWR0aCArIGV4cG9ydHMucHgoMilcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGtleS53aWR0aCA9IGtleS53aWR0aCArIGV4cG9ydHMucHgoMSlcblx0XHRcdGZpcnN0Um93S2V5V2lkdGggPSBmaXJzdFJvd0tleVdpZHRoICsga2V5LndpZHRoXG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzBdLmVuZEluZGV4ICYmIGluZGV4IDw9IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzFdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsxXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChzZWNvbmRSb3dLZXlXaWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyBleHBvcnRzLnB4KDEpXG5cdFx0XHRzZWNvbmRSb3dLZXlXaWR0aCA9IHNlY29uZFJvd0tleVdpZHRoICsga2V5LndpZHRoXG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsyXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMl0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzJdLm1hcmdpblRvcCArIGtleS5oZWlnaHQgKiAyXG5cblx0XHRwYXRoLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tAcGF0aFdpZHRofXB4JyBoZWlnaHQ9JyN7QHBhdGhIZWlnaHR9JyB2aWV3Qm94PScwIDAgNjMgMTE0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PHRpdGxlPlJlY3RhbmdsZSA0NCBDb3B5PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPlxuXHRcdFx0XHRcdDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHRcdFx0PGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0XHRcdDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdFx0XHRcdFx0PGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMjEgMCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHR5cGU9J21hdHJpeCcgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0XHRcdDxmZU1lcmdlPlxuXHRcdFx0XHRcdFx0XHQ8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHRcdFx0PGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdFx0PC9mZU1lcmdlPlxuXHRcdFx0XHRcdDwvZmlsdGVyPlxuXHRcdFx0XHQ8L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExOC4wMDAwMDAsIC0yNDAuMDAwMDAwKScgc3Ryb2tlPScjQzdDN0M3JyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2Utd2lkdGg9JzAuNScgXG5cdFx0XHRcdFx0ZmlsbD0nI0ZGRkZGRicgb3BhY2l0eT0nMC45OTgzNjc1MzcnPlxuXHRcdFx0XHRcdCA8cGF0aCBkPSdNMTM0LDMwNiBDMTM0LDMwNiAxMjEsMjk1IDEyMSwyOTAgQzEyMSwyNzkuNjE2Nzg4IDEyMSwyNTMuMDAxNDU2IDEyMSwyNTMuMDAxNDU2IEMxMjEsMjQ3LjQ3NzgwNCAxMjUuNDg1ODMyLDI0MyAxMzEuMDAyNzc0LDI0MyBMMTY3Ljg2MjEyNywyNDMgQzE3My4zODY1MDcsMjQzIDE3Ny44ODA4NjIsMjQ3LjQ2OTkwNSBcblx0XHRcdFx0XHQgMTc3LjkwMDA0NCwyNTIuOTk3MjcxIEMxNzcuOTAwMDQ0LDI1Mi45OTcyNzEgMTc4LDI4MCAxNzcuOTk5OTk5LDI5MCBDMTc3Ljk5OTk5OSwyOTUuMDA2NTUzIDE2NSwzMDYgMTY1LDMwNiBMMTY1LDM0Ni4wNDk1OTQgXG5cdFx0XHRcdFx0IEMxNjUsMzQ4LjgwNjgwNyAxNjIuNzcwNTU2LDM1MS4wNDE5NjkgMTYwLjAwMjA5OCwzNTEuMDQxOTY5IEwxMzguOTk3OTAyLDM1MS4wNDE5NjkgXG5cdFx0XHRcdFx0ICBDMTM2LjIzNzYzNywzNTEuMDQxOTY5IDEzNCwzNDguODA4MzMxIDEzNCwzNDYuMDQ5NTk0IEwxMzQsMzA2IFonIGlkPSdSZWN0YW5nbGUtNDQtQ29weScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQ5LjUwMDAwMCwgMjk3LjAyMDk4NSkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTQ5LjUwMDAwMCwgLTI5Ny4wMjA5ODUpICc+XG5cdFx0XHRcdFx0ICA8L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGtleXNBcnJheS5wdXNoIGtleVxuXG5cdFx0aWYgZXhwb3J0cy5kZXZpY2UgIT0gXCJpcGFkXCIgJiYgZXhwb3J0cy5kZXZpY2UgIT0gXCJpcGFkLXByb1wiXG5cdFx0XHQjIyBpUGhvbmUgS2V5IEFuaW1hdGlvbnNcblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IHRydWVcdFxuXHRcdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcblxuXHRcdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaE1vdmUsIC0+XG5cdFx0XHRcdGJveC5odG1sID0gQC5uYW1lXG5cdFx0XHRcdGtleVBvcFVwLm1heFkgPSBALm1heFlcblx0XHRcdFx0a2V5UG9wVXAubWlkWCA9IEAubWlkWFx0XG5cblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGtleVBvcFVwLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0ZWxzZSBcblx0XHRcdCNpUGFkIEtleSBBbmltYXRpb25zXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdEAuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0QC5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0XHRzaGlmdEljb24uc3RhdGVzLnN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2hpZnRJY29uMi5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cblx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXG5cdFx0XHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0XHRcdEBuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbCArIEAubmFtZS50b1VwcGVyQ2FzZSgpXG5cdFx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0aWYgc2V0dXAub3V0cHV0XG5cdFx0XHRcdFx0QG5ld1RleHQgPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sICsgQC5uYW1lXG5cdFx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblxuXHRib2FyZC5rZXlzQXJyYXkgPSBrZXlzQXJyYXlcblxuXHRib2FyZC5rZXlib2FyZFN0YXRlID0gMVxuXG5cdCMjIFNISUZUIEtFWVxuXG5cdHNoaWZ0S2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJzaGlmdFwiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBjb2xvcjpleHBvcnRzLmNvbG9yKFwiYmxhY2tcIiksIGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXksIHk6KGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzMgKyBib2FyZFNwZWNzLmtleS5oZWlnaHQgKiAyKVxuXHRzaGlmdEtleS5jb25zdHJhaW50cyA9IChsZWFkaW5nOmV4cG9ydHMucHQoYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzEpKVxuXHRzaGlmdEljb24gPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyMCksIGhlaWdodDpleHBvcnRzLnB4KDE5KSwgc3VwZXJMYXllcjpzaGlmdEtleSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLnNoaWZ0SWNvbi54LCB5OmJvYXJkU3BlY3Muc2hpZnRJY29uLnlcblx0c2hpZnRJY29uLmh0bWwgPSBpY29uTGlicmFyeS5zaGlmdC5vZmZcblxuXHRzaGlmdEljb24uc3RhdGVzLmFkZFxuXHRcdFwib25cIjpcblx0XHRcdGh0bWw6IGljb25MaWJyYXJ5LnNoaWZ0Lm9uXG5cdHNoaWZ0SWNvbi5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdCAgdGltZTogLjAxXG5cblx0c2hpZnRLZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdFx0fVxuXG5cblxuXHRzaGlmdEtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c3dpdGNoIGJvYXJkLmtleWJvYXJkU3RhdGUgXG5cdFx0XHR3aGVuIDFcblx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5uZXh0KClcblx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzaGlmdEljb24yLnN0YXRlcy5uZXh0KClcblx0XHRcdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlx0XG5cdFx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGtleS5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGtleS5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0XHRib3guc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHR3aGVuIDJcblx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0a2V5Lmh0bWwgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdGtleS5uYW1lID0gdGhpcmRBcnJheVtpbmRleF1cblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDNcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiMTIzXCJcblx0XHRcdHdoZW4gM1xuXHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXG5cdGJvYXJkLmtleXMuc2hpZnQgPSBzaGlmdEtleVxuXHRib2FyZC5rZXlzLnNoaWZ0Lmljb24gPSBzaGlmdEljb25cblxuXHQjIyBERUxFVEUgS0VZXG5cblx0ZGVsZXRlS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czpib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMsIGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBuYW1lOlwiZGVsZXRlXCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Muc2lkZUtleSwgeTooYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCAqIDIgLSBib2FyZFNwZWNzLmlQYWREZWxldGVPZmZzZXQpXG5cblxuXHRkZWxldGVLZXkuY29uc3RyYWludHMgPSAodHJhaWxpbmc6ZXhwb3J0cy5wdChib2FyZFNwZWNzLnNwYWNlcikvMilcblx0ZGVsZXRlSWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmRlbGV0ZUtleSwgd2lkdGg6ZXhwb3J0cy5weCgyNCksIGhlaWdodDpleHBvcnRzLnB4KDE4KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLmRlbGV0ZUljb24ueCwgeTpib2FyZFNwZWNzLmRlbGV0ZUljb24ueVxuXHRcblx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRkZWxldGVLZXkud2lkdGggPSBkZWxldGVLZXkud2lkdGggKyBleHBvcnRzLnB4KDUpXG5cblx0ZGVsZXRlSWNvbi5zdGF0ZXMuYWRkIFxuXHRcdFwib25cIjogXG5cdFx0XHRodG1sOiBpY29uTGlicmFyeS5kZWxldGUub25cblxuXHRkZWxldGVJY29uLnN0YXRlcy5hZGRcblx0XHRvZmY6IFxuXHRcdFx0aHRtbDogaWNvbkxpYnJhcnkuZGVsZXRlLm9mZlxuXG5cblx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdGRlbGV0ZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblxuXHRkZWxldGVLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdGRlbGV0ZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9mZlwiKVxuXG5cdFx0aWYgc2V0dXAub3V0cHV0XG5cdFx0XHRpbml0aWFsTGVuZ3RoID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdG5ld1RleHQgPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sLnNsaWNlKDAsIC0xKVxuXHRcdFx0ZXhwb3J0cy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0ZW5kTGVuZ3RoID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdGlmIGluaXRpYWxMZW5ndGggPT0gZW5kTGVuZ3RoIFxuXHRcdFx0XHRuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbC5zbGljZSgwLCAtNilcblx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0aWYgc2V0dXAub3V0cHV0LnRleHQuaHRtbCA9PSBcIlwiXG5cdFx0XHRcdHNldHVwLm91dHB1dC5wbGFjZWhvbGRlci52aXNpYmxlID0gdHJ1ZVxuXG5cblxuXHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cblx0Ym9hcmQua2V5cy5kZWxldGUgPSBkZWxldGVLZXlcblx0Ym9hcmQua2V5cy5kZWxldGUuaWNvbiA9IGRlbGV0ZUljb25cblxuXHQjIyBFWFRSQSBLRVlTXG5cblx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRrZXlib2FyZEtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwiZGlzbWlzc1wiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3I6ZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5zaWRlS2V5XG5cdFx0a2V5Ym9hcmRLZXkuY29uc3RyYWludHMgPSB7dHJhaWxpbmdFZGdlczpkZWxldGVLZXksIGJvdHRvbTpib2FyZFNwZWNzLmJvdHRvbVJvd31cblx0XHRrZXlib2FyZEljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlib2FyZEtleSwgd2lkdGg6ZXhwb3J0cy5weCgzMi41KSwgaGVpZ2h0OmV4cG9ydHMucHgoMjMuNSksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRrZXlib2FyZEljb24uaHRtbCA9IGljb25MaWJyYXJ5LmtleWJvYXJkXG5cdFx0a2V5Ym9hcmRJY29uLmNlbnRlcigpXG5cblx0XHRib2FyZC5rZXlzLmRpc21pc3MgPSBrZXlib2FyZEtleVxuXG5cdFx0c2hpZnRLZXkyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJzaGlmdFwiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLGNvbG9yOmV4cG9ydHMuY29sb3IoXCJibGFja1wiKSwgYmFja2dyb3VuZENvbG9yOmV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleTIsIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXlcblx0XHRzaGlmdEtleTIuY29uc3RyYWludHMgPSAodHJhaWxpbmdFZGdlczpkZWxldGVLZXksIGJvdHRvbUVkZ2VzOnNoaWZ0S2V5KVxuXHRcdHNoaWZ0SWNvbjIgPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyMCksIGhlaWdodDpleHBvcnRzLnB4KDE5KSwgc3VwZXJMYXllcjpzaGlmdEtleTIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6Ym9hcmRTcGVjcy5zaGlmdEljb24ueCtleHBvcnRzLnB4KDEwKSwgeTpib2FyZFNwZWNzLnNoaWZ0SWNvbi55XG5cdFx0c2hpZnRJY29uMi5odG1sID0gaWNvbkxpYnJhcnkuc2hpZnQub2ZmXG5cblx0XHRzaGlmdEtleTIuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IChib2FyZFNwZWNzLmtleS5oZWlnaHQpICsgXCJweFwiXG5cblx0XHR9XG5cblxuXHRcdHNoaWZ0SWNvbjIuc3RhdGVzLmFkZFxuXHRcdFx0XCJvblwiOlxuXHRcdFx0XHRodG1sOiBpY29uTGlicmFyeS5zaGlmdC5vblxuXHRcdHNoaWZ0SWNvbjIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRcdCAgdGltZTogLjAxXG5cblx0XHRzaGlmdEljb24yLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0c3dpdGNoIGJvYXJkLmtleWJvYXJkU3RhdGUgXG5cdFx0XHRcdHdoZW4gMVxuXHRcdFx0XHRcdHNoaWZ0SWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRcdFx0c2hpZnRJY29uMi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRcdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlx0XG5cdFx0XHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0XHRcdGJveC5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0d2hlbiAyXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHRoaXJkQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRrZXkubmFtZSA9IHRoaXJkQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDNcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIxMjNcIlxuXHRcdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0d2hlbiAzXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cblxuXHRcdG51bUtleTIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcIm51bVwiLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBjb2xvcjpleHBvcnRzLmNvbG9yKFwiYmxhY2tcIiksIGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXkyLCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdFx0bnVtS2V5Mi5odG1sID0gXCIuPzEyM1wiXG5cdFx0bnVtS2V5Mi5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE2KSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDogYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICsgXCJweFwiXG5cblx0XHR9XG5cdFx0bnVtS2V5Mi5jb25zdHJhaW50cyA9IHt0cmFpbGluZzpba2V5Ym9hcmRLZXksIDEyXSwgYm90dG9tRWRnZXM6a2V5Ym9hcmRLZXl9XG5cblx0XHRudW1LZXkyLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0c3dpdGNoIGJvYXJkLmtleWJvYXJkU3RhdGVcblx0XHRcdFx0d2hlbiAxXG5cdFx0XHRcdFx0IyMgQ2hhbmdlIExldHRlcnNcblx0XHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGlmIGluZGV4IDwgMjdcblx0XHRcdFx0XHRcdFx0aWYgc2Vjb25kQXJyYXlbaW5kZXhdID09IFwidW5kb1wiXG5cdFx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICogMiArIGJvYXJkU3BlY3Muc3BhY2VyXG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC1zaXplXCJdID0gZXhwb3J0cy5weCgxNykgKyBcInB4XCJcblx0XHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDQwMFxuXHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJoaWRlXCJcblx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXG5cdFx0XHRcdFx0IyMgSGFuZGxlIG51bSBrZXlzIGFuZCBzaGlmdCBrZXlzXG5cdFx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IGZhbHNlXG5cblx0XHRcdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdFx0c2hpZnRJY29uMi52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdFx0bnVtS2V5Mi5odG1sID0gXCJBQkNcIlxuXHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAyXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGlmIGtleS5odG1sID09IFwidW5kb1wiIHx8IFwicmVkb1wiXG5cdFx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGJvYXJkU3BlY3Mua2V5LndpZHRoXG5cdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IGV4cG9ydHMucHgoMjUpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMzAwXG5cdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGtleS5uYW1lID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSBsZXR0ZXJzQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRpZiBpbmRleCA+IDI1XG5cdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCJcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbi52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdFx0bnVtS2V5Mi5odG1sID0gXCIuPzEyM1wiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMVxuXG5cblx0IyMgTlVNIEtFWSB0b3A6ZXhwb3J0cy5wdChib2FyZFNwZWNzLm1hcmdpblRvcC5yb3c0ICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0KjMpXG5cblx0bnVtS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJudW1cIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRudW1LZXkuY29uc3RyYWludHMgPSAoYm90dG9tOmJvYXJkU3BlY3MuYm90dG9tUm93LCBsZWFkaW5nRWRnZXM6c2hpZnRLZXkpXG5cdGlmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiICYmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZC1wcm9cIlxuXHRcdG51bUtleS5odG1sID0gXCIxMjNcIlxuXHRlbHNlIFxuXHRcdG51bUtleS5odG1sID0gXCIuPzEyM1wiXG5cdG51bUtleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblx0fVxuXG5cdG51bUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzd2l0Y2ggYm9hcmQua2V5Ym9hcmRTdGF0ZVxuXHRcdFx0d2hlbiAxXG5cdFx0XHRcdCMjIENoYW5nZSBMZXR0ZXJzXHRcdFxuXHRcdFx0XHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2Vcblx0XHRcdFx0XHR3aGVuIFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPCAyN1xuXHRcdFx0XHRcdFx0XHRcdGlmIHNlY29uZEFycmF5W2luZGV4XSA9PSBcInVuZG9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICogMiArIGJvYXJkU3BlY3Muc3BhY2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXNpemVcIl0gPSBleHBvcnRzLnB4KDE3KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA0MDBcblx0XHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJoaWRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPT0gMjZcblx0XHRcdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRzaGlmdEljb24yLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0XHRudW1LZXkyLmh0bWwgPSBcIkFCQ1wiXG5cdFx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJvd0luZGV4ID0gMCBcblx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gMFxuXHRcdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGtleS5uYW1lID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDE5XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRcdFx0XHRcdFx0IyMgMm5kIFJvd1xuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDkgJiYgaW5kZXggPCAyMFxuXHRcdFx0XHRcdFx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChzZWNvbmRSb3dLZXlXaWR0aClcblx0XHRcdFx0XHRcdFx0XHRyb3dJbmRleCsrXG5cdFx0XHRcdFx0XHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGJvYXJkU3BlY3Mua2V5LndpZHRoXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDIwXG5cdFx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6W3NoaWZ0S2V5LCBleHBvcnRzLnB0KGJvYXJkU3BlY3MuZXhwYW5kZWRTcGFjZXIpXX1cblx0XHRcdFx0XHRcdFx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID4gMTlcblx0XHRcdFx0XHRcdFx0XHRrZXkud2lkdGggPSBib2FyZFNwZWNzLmV4cGFuZGVkS2V5XG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID4gMjBcblx0XHRcdFx0XHRcdFx0XHRrZXkuY29uc3RyYWludHMgPSB7bGVhZGluZzpba2V5c0FycmF5W2luZGV4IC0gMV0sIGV4cG9ydHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpXX1cblx0XHRcdFx0XHRcdFx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4ID4gMjRcblx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXG5cblx0XHRcdFx0IyMgSGFuZGxlIG51bSBrZXlzIGFuZCBzaGlmdCBrZXlzXG5cdFx0XHRcdG51bUtleS5odG1sID0gXCJBQkNcIlxuXHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IGZhbHNlXG5cblx0XHRcdGVsc2Vcblx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgIT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzZWNvbmRSb3dLZXlXaWR0aCA9IDBcblx0XHRcdFx0XHRyb3dJbmRleCA9IDBcblx0XHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGJvYXJkU3BlY3Mua2V5LndpZHRoXG5cdFx0XHRcdFx0XHRpZiBpbmRleCA+IDkgJiYgaW5kZXggPCAxOVxuXHRcdFx0XHRcdFx0XHRrZXkueCA9IHJvd3NNYXBbMV0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAoc2Vjb25kUm93S2V5V2lkdGgpXG5cdFx0XHRcdFx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0XHRcdFx0XHRcdHJvd0luZGV4Kytcblx0XHRcdFx0XHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGtleS53aWR0aFxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPT0gMTlcblx0XHRcdFx0XHRcdFx0a2V5LnkgPSByb3dzTWFwWzJdLm1hcmdpblRvcCArIGtleS5oZWlnaHQgKiAyXG5cdFx0XHRcdFx0XHRpZiBpbmRleCA+PSAxOVxuXHRcdFx0XHRcdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsyXS5zdGFydEluZGV4XG5cdFx0XHRcdFx0XHRcdGtleS54ID0gcm93c01hcFsyXS5wYWRkaW5nICsgKHJvd0luZGV4KmJvYXJkU3BlY3Muc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRcdFx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXHRcdFx0XHRcdFx0XHRrZXkuY29uc3RyYWludHMgPSB7fVxuXG5cdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdGlmIGtleS5odG1sID09IFwidW5kb1wiIHx8IFwicmVkb1wiXG5cdFx0XHRcdFx0XHRrZXkud2lkdGggPSBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC1zaXplXCJdID0gZXhwb3J0cy5weCgyNSkgKyBcInB4XCJcblx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMzAwXG5cdFx0XHRcdFx0a2V5LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0a2V5Lm5hbWUgPSBsZXR0ZXJzQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0a2V5Lmh0bWwgPSBsZXR0ZXJzQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0aWYgaW5kZXggPiAyNVxuXHRcdFx0XHRcdFx0a2V5LnN1YkxheWVyc1swXS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCJcIlxuXHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCJcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHQjIyBFTU9KSSBLRVlcblxuXHRlbW9qaUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwiZW1vamlcIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0ZW1vamlLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltudW1LZXksIDZdKVxuXHRlbW9qaUljb24gPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyMCksIGhlaWdodDpleHBvcnRzLnB4KDE5KSwgc3VwZXJMYXllcjplbW9qaUtleSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpib2FyZFNwZWNzLmVtb2ppSWNvbi54LCB5OmJvYXJkU3BlY3MuZW1vamlJY29uLnlcblx0ZW1vamlJY29uLmh0bWwgPSBpY29uTGlicmFyeS5lbW9qaVxuXG5cblxuXHQjIyBSRVRVUk4gS0VZXG5cblx0cmV0dXJuS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6ZXhwb3J0cy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvciksIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcInJldHVyblwiLCB3aWR0aDpib2FyZFNwZWNzLnJldHVybktleSwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRpZiBzZXR1cC5yZXR1cm5Db2xvciAhPSBcImxpZ2h0LWtleVwiXG5cdFx0cmV0dXJuS2V5LmNvbG9yID0gZXhwb3J0cy5zZXRUZXh0Q29sb3IoZXhwb3J0cy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvcikpXG5cdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0cmV0dXJuS2V5LmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nRWRnZXM6ZGVsZXRlS2V5LCB0b3A6ZXhwb3J0cy5wdChib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cyICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0KSApXG5cdGVsc2Vcblx0XHRyZXR1cm5LZXkuY29uc3RyYWludHMgPSAodHJhaWxpbmc6ZXhwb3J0cy5wdChib2FyZFNwZWNzLnNwYWNlcikvMiwgYm90dG9tRWRnZXM6bnVtS2V5KVxuXHRyZXR1cm5LZXkuaHRtbCA9IHNldHVwLnJldHVyblRleHRcblx0cmV0dXJuS2V5LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdH1cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdHN0b3JlZFRleHRDb2xvciA9IHJldHVybktleS5jb2xvclxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0cmV0dXJuS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdHJldHVybktleS5jb2xvciA9IGV4cG9ydHMuY29sb3IoXCJibGFja1wiKVxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLmNvbG9yKHNldHVwLnJldHVybkNvbG9yKVxuXHRcdHJldHVybktleS5jb2xvciA9IHN0b3JlZFRleHRDb2xvclxuXG5cdGJvYXJkLmtleXMucmV0dXJuID0gcmV0dXJuS2V5XG5cblxuXHQjIyBTUEFDRSBLRVlcblxuXHRzcGFjZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiLCBuYW1lOlwic3BhY2VcIiwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRcblx0aWYgZXhwb3J0cy5kZXZpY2UgIT0gXCJpcGFkXCJcblx0XHRzcGFjZUtleS5jb25zdHJhaW50cyA9IChib3R0b21FZGdlczpudW1LZXksIGxlYWRpbmc6W2Vtb2ppS2V5LCBleHBvcnRzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKV0sIHRyYWlsaW5nOltyZXR1cm5LZXksIGJvYXJkU3BlY3Muc3BhY2VyXSlcblx0XHRzcGFjZUtleS5odG1sID0gXCJzcGFjZVwiXG5cdFx0c3BhY2VLZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdFx0fVxuXHRlbHNlXG5cdFx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltlbW9qaUtleSwgZXhwb3J0cy5wdChib2FyZFNwZWNzLnNwYWNlcildLCB0cmFpbGluZzpbbnVtS2V5MiwgYm9hcmRTcGVjcy5zcGFjZXJdKVxuXHRib2FyZC5rZXlzW1wiJm5ic3A7XCJdID0gc3BhY2VLZXlcblx0Ym9hcmQua2V5cy5zcGFjZSA9IHNwYWNlS2V5XG5cdGV4cG9ydHMubGF5b3V0KClcblxuXG5cdHNwYWNlS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdHNwYWNlS2V5LmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIilcblxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c3BhY2VLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0aWYgc2V0dXAub3V0cHV0XG5cdFx0XHRAbmV3VGV4dCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwgKyBcIiZuYnNwO1wiXG5cdFx0XHRleHBvcnRzLnVwZGF0ZShzZXR1cC5vdXRwdXQudGV4dCwgW3RleHQ6QG5ld1RleHRdKVxuXG5cblx0IyMgRU1PSklTXG5cblx0ZW1vamlGb3JtYXR0ZXIgPSAoc3RyaW5nKSAtPlxuXHRcdHVuaWNvZGVGb3JtYXQgPSBcIlwiXG5cdFx0aWYgc3RyaW5nWzBdID09IFwiRVwiIHx8IHN0cmluZ1swXSA9PSBcIjNcIiB8fCBzdHJpbmdbMF0gPT0gXCIyXCIgfHwgc3RyaW5nWzBdID09IFwiQ1wiXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRlbHNlIFxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0dW5pY29kZUZvcm1hdCA9IFwiJUYwJTlGXCJcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdHJldHVybiB1bmljb2RlRm9ybWF0XG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRlbW9qaVNlY3Rpb25zID0gW1wiRnJlcXVuZXRseSBVc2VkXCIsIFwiU21pbGV5cyAmIFBlb3BsZVwiLCBcIkFuaW1hbHMgJiBOYXR1cmVcIiwgXCJGb29kICYgRHJpbmtcIiwgXCJBY3Rpdml0eVwiLCBcIlRyYXZlbCAmIFBsYWNlc1wiLCBcIk9iamVjdHNcIiwgXCJTeW1ib2xzXCIsIFwiRmxhZ3NcIl1cblx0cmF3RW1vamlzID0gW1wiOTggODBcIiwgXCI5OCBBQ1wiLCBcIjk4IDgxXCIsIFwiOTggODJcIiwgXCI5OCA4M1wiLCBcIjk4IDg0XCIsIFwiOTggODVcIiwgXCI5OCA4NlwiLCBcIjk4IDg3XCIsIFwiOTggODlcIiwgXCI5OCA4YVwiLCBcIjk5IDgyXCIsIFwiOTkgODNcIiwgXCJFMiA5OCBCQSBFRiBCOCA4RlwiLCBcIjk4IDhCXCIgLCBcIjk4IDhDXCIsIFwiOTggOERcIiwgXCI5OCA5OFwiLCBcIjk4IDk3XCIsIFwiOTggOTlcIiwgXCI5OCA5QVwiLCBcIjk4IDlDXCIsIFwiOTggOURcIiwgXCI5OCA5QlwiLCBcIkE0IDkxXCIsIFwiQTQgOTNcIiwgXCI5OCA4RVwiLCBcIkE0IDk3XCIsIFwiOTggOEZcIiwgXCI5OCBCNlwiLCBcIjk4IDkwXCIsIFwiOTggOTFcIiwgXCI5OCA5MlwiLCBcIjk5IDg0XCIsIFwiQTQgOTRcIiwgXCI5OCBCM1wiLCBcIjk4IDlFXCIsIFwiOTggOUZcIiwgXCI5OCBBMFwiLCBcIjk4IEExXCIsIFwiOTggOTRcIiwgXCI5OCA5NVwiLCBcIjk5IDgxXCIsIFwiRTIgOTggQjkgRUYgQjggOEZcIiwgXCI5OCBBM1wiLCBcIjk4IDk2XCIsIFwiOTggQUJcIiwgXCI5OCBBOVwiLCBcIjk4IEE0XCIsIFwiOTggQUVcIiwgXCI5OCBCMVwiLCBcIjk4IEE4XCIsIFwiOTggQjBcIiwgXCI5OCBBRlwiLCBcIjk4IEE2XCIsIFwiOTggQTdcIiwgXCI5OCBBMlwiLCBcIjk4IEE1XCIsIFwiOTggQUFcIiwgXCI5OCA5M1wiLCBcIjk4IEFEXCIsIFwiOTggQjVcIiwgXCI5OCBCMlwiLCBcIkE0IDkwXCIsIFwiOTggQjdcIiwgXCJBNCA5MlwiLCBcIkE0IDk1XCIsIFwiOTggQjRcIiwgXCI5MiBBNFwiLCBcIjkyIEE5XCIsIFwiOTggODhcIiwgXCI5MSBCRlwiLCBcIjkxIEI5XCIsIFwiOTEgQkFcIiwgXCI5MiA4MFwiLCBcIjkxIEJCXCIsIFwiOTEgQkRcIiwgXCJBNCA5NlwiLCBcIjk4IEJBXCIsIFwiOTggQjhcIiwgXCI5OCBCOVwiLCBcIjk4IEJCXCIsIFwiOTggQkNcIiwgXCI5OCBCRFwiLCBcIjk5IDgwXCIsIFwiOTggQkZcIiwgXCI5OCBCRVwiLCBcIjk5IDhDXCIsIFwiOTEgOEZcIiwgXCI5MSA4QlwiLCBcIjkxIDhEXCIsIFwiOTEgOEVcIiwgXCI5MSA4QVwiLCBcIkUyIDlDIDhBXCIsIFwiRTIgOUMgOEMgRUYgQjggOEZcIiwgXCI5MSA4Q1wiLCBcIkUyIDlDIDhCXCIsIFwiOTEgOTBcIiwgXCI5MiBBQVwiLCBcIjk5IDhGXCIsIFwiRTIgOTggOUQgRUYgQjggOEZcIiwgXCI5MSA4NlwiLCBcIjkxIDg3XCIsIFwiOTEgODhcIiwgXCI5MSA4OVwiLCBcIjk2IDk1XCIsIFwiOTYgOTBcIiwgXCJBNCA5OFwiLCBcIjk2IDk2XCIsIFwiRTIgOUMgOEQgRUYgQjggOEZcIiwgXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsIFwiOTEgODFcIiwgXCI5MSA4MFwiLCBcIjkxIEE0XCIsIFwiOTEgQTVcIiwgXCI5NyBBM1wiLCBcIjkxIEI2XCIsIFwiOTEgQTZcIiwgXCI5MSBBN1wiLCBcIjkxIEE4XCIsIFwiOTEgQTlcIiwgXCI5MSBCMVwiLCBcIjkxIEI0XCIsIFwiOTEgQjVcIiwgXCI5MSBCMlwiLCBcIjkxIEIzXCIsIFwiOTEgQUVcIiwgXCI5MSBCN1wiLCBcIjkyIDgyXCIsIFwiOTUgQjVcIiwgXCI4RSA4NVwiLCBcIjkxIEJDXCIsIFwiOTEgQjhcIiwgXCI5MSBCMFwiLCBcIjlBIEI2XCIsIFwiOEYgODNcIiwgXCI5MiA4M1wiLCBcIjkxIEFGXCIsIFwiOTEgQUJcIiwgXCI5MSBBQ1wiLCBcIjkxIEFEXCIsIFwiOTkgODdcIiwgXCI5MiA4MVwiLCBcIjk5IDg1XCIsIFwiOTkgODZcIiwgXCI5OSA4QlwiLCBcIjk5IDhFXCIsIFwiOTkgOERcIiwgXCI5MiA4N1wiLCBcIjkyIDg2XCIsIFwiOTIgOTFcIiwgXCI5MSBBOSBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MSBBOVwiLCBcIjkxIEE4IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkxIEE4XCIsIFwiOTIgOEZcIiwgXCI5MSBBOSBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MiA4QiBFMiA4MCA4RCBGMCA5RiA5MSBBOVwiLCBcIjkxIEE4IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkyIDhCIEUyIDgwIDhEIEYwIDlGIDkxIEE4XCIsIFwiOTEgQUFcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgOUFcIiwgXCI5MSA5NVwiLCBcIjkxIDk2XCIsIFwiOTEgOTRcIiwgXCI5MSA5N1wiLCBcIjkxIDk5XCIsIFwiOTEgOThcIiwgXCI5MiA4NFwiLCBcIjkyIDhCXCIsIFwiOTEgQTNcIiwgXCI5MSBBMFwiLCBcIjkxIEExXCIsIFwiOTEgQTJcIiwgXCI5MSA5RVwiLCBcIjkxIDlGXCIsIFwiOTEgOTJcIiwgXCI4RSBBOVwiLCBcIkUyIDlCIDkxXCIsIFwiOEUgOTNcIiwgXCI5MSA5MVwiLCBcIjhFIDkyXCIsIFwiOTEgOURcIiwgXCI5MSA5QlwiLCBcIjkxIDlDXCIsIFwiOTIgQkNcIiwgXCI5MSA5M1wiLCBcIjk1IEI2XCIsIFwiOTIgOERcIiwgXCI4QyA4MlwiLCBcIjlCIDkxXCIsIFwiOTAgQjZcIiwgXCI5MCBCMVwiLCBcIjkwIEFEXCIsIFwiOTAgQjlcIiwgXCI5MCBCMFwiLCBcIjkwIEJCXCIsIFwiOTAgQkNcIiwgXCI5MCBBOFwiLCBcIjkwIEFGXCIsIFwiQTYgODFcIiwgXCI5MCBBRVwiLCBcIjkwIEI3XCIsIFwiOTAgQkRcIiwgXCI5MCBCOFwiLCBcIjkwIDk5XCIsIFwiOTAgQjVcIiwgXCI5OSA4OFwiLCBcIjk5IDg5XCIsIFwiOTkgOEFcIiwgXCI5MCA5MlwiLCBcIjkwIDk0XCIsIFwiOTAgQTdcIiwgXCI5MCBBNlwiLCBcIjkwIEE0XCIsIFwiOTAgQTNcIiwgXCI5MCBBNVwiLCBcIjkwIEJBXCIsIFwiOTAgOTdcIiwgXCI5MCBCNFwiLCBcIkE2IDg0XCIsIFwiOTAgOURcIiwgXCI5MCA5QlwiLCBcIjkwIDhDXCIsIFwiOTAgOUVcIiwgXCI5MCA5Q1wiLCBcIjk1IEI3XCIsIFwiQTYgODJcIiwgXCJBNiA4MFwiLCBcIjkwIDhEXCIsIFwiOTAgQTJcIiwgXCI5MCBBMFwiLCBcIjkwIDlGXCIsIFwiOTAgQTFcIiwgXCI5MCBBQ1wiLCBcIjkwIEIzXCIsIFwiOTAgOEJcIiwgXCI5MCA4QVwiLCBcIjkwIDg2XCIsIFwiOTAgODVcIiwgXCI5MCA4M1wiLCBcIjkwIDgyXCIsIFwiOTAgODRcIiwgXCI5MCBBQVwiLCBcIjkwIEFCXCIsIFwiOTAgOThcIiwgXCI5MCA5MFwiLCBcIjkwIDhGXCIsIFwiOTAgOTFcIiwgXCI5MCA4RVwiLCBcIjkwIDk2XCIsIFwiOTAgODBcIiwgXCI5MCA4MVwiLCBcIjkwIDkzXCIsIFwiQTYgODNcIiwgXCI5NSA4QVwiLCBcIjkwIDk1XCIsIFwiOTAgQTlcIiwgXCI5MCA4OFwiLCBcIjkwIDg3XCIsIFwiOTAgQkZcIiwgXCI5MCBCRVwiLCBcIjkwIDg5XCIsIFwiOTAgQjJcIiwgXCI4QyBCNVwiLCBcIjhFIDg0XCIsIFwiOEMgQjJcIiwgXCI4QyBCM1wiLCBcIjhDIEI0XCIsIFwiOEMgQjFcIiwgXCI4QyBCRlwiLCBcIkUyIDk4IDk4XCIsIFwiOEQgODBcIiwgXCI4RSA4RFwiLCBcIjhFIDhCXCIsIFwiOEQgODNcIiwgXCI4RCA4MlwiLCBcIjhEIDgxXCIsIFwiOEMgQkVcIiwgXCI4QyBCQVwiLCBcIjhDIEJBXCIsIFwiOEMgQkJcIiwgXCI4QyBCOVwiLCBcIjhDIEI3XCIsIFwiOEMgQkNcIiwgXCI4QyBCOFwiLCBcIjkyIDkwXCIsIFwiOEQgODRcIiwgXCI4QyBCMFwiLCBcIjhFIDgzXCIsIFwiOTAgOUFcIiwgXCI5NSBCOFwiLCBcIjhDIDhFXCIsIFwiOEMgOERcIiwgXCI4QyA4RlwiLCBcIjhDIDk1XCIsIFwiOEMgOTZcIiwgXCI4QyA5N1wiLCBcIjhDIDk4XCIsIFwiOEMgOTFcIiwgXCI4QyA5MlwiLCBcIjhDIDkzXCIsIFwiOEMgOTRcIiwgXCI4QyA5QVwiLCBcIjhDIDlEXCIsIFwiOEMgOUJcIiwgXCI4QyA5Q1wiLCBcIjhDIDlFXCIsIFwiOEMgOTlcIiwgXCJFMiBBRCA5MCBFRiBCOCA4RlwiLCBcIjhDIDlGXCIsIFwiOTIgQUJcIiwgXCJFMiA5QyBBOFwiLCBcIkUyIDk4IDg0IEVGIEI4IDhGXCIsIFwiRTIgOTggODAgRUYgQjggOEZcIiwgXCI4QyBBNFwiLCBcIkUyIDlCIDg1IEVGIEI4IDhGXCIsIFwiOEMgQTVcIiwgXCI4QyBBNlwiLCBcIkUyIDk4IDgxIEVGIEI4IDhGXCIsIFwiOEMgQTdcIiwgXCJFMiA5QiA4OFwiLCBcIjhDIEE5XCIsIFwiRTIgOUEgQTEgRUYgQjggOEZcIiwgXCI5NCBBNVwiLCBcIjkyIEE1XCIsIFwiRTIgOUQgODQgRUYgQjggOEZcIiwgXCI4QyBBOFwiLCBcIkUyIDk4IDgzIEVGIEI4IDhGXCIsIFwiRTIgOUIgODQgRUYgQjggOEZcIiwgXCI4QyBBQ1wiLCBcIjkyIEE4XCIsIFwiOEMgQUFcIiwgXCI4QyBBQlwiLCBcIkUyIDk4IDgyIEVGIEI4IDhGXCIsIFwiRTIgOTggOTQgRUYgQjggOEZcIiwgXCI5MiBBN1wiLCBcIjkyIEE2XCIsIFwiOEMgOEFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOEQgOEZcIiwgXCI4RCA4RVwiLCBcIjhEIDkwXCIsIFwiOEQgOEFcIiwgXCI4RCA4QlwiLCBcIjhEIDhDXCIsIFwiOEQgODlcIiwgXCI4RCA4N1wiLCBcIjhEIDkzXCIsIFwiOEQgODhcIiwgXCI4RCA5MlwiLCBcIjhEIDkxXCIsIFwiOEQgOERcIiwgXCI4RCA4NVwiLCBcIjhEIDg2XCIsIFwiOEMgQjZcIiwgXCI4QyBCRFwiLCBcIjhEIEEwXCIsIFwiOEQgQUZcIiwgXCI4RCA5RVwiLCBcIkE3IDgwXCIsIFwiOEQgOTdcIiwgXCI4RCA5NlwiLCBcIjhEIEE0XCIsIFwiOEQgQjNcIiwgXCI4RCA5NFwiLCBcIjhEIDlGXCIsIFwiOEMgQURcIiwgXCI4RCA5NVwiLCBcIjhEIDlEXCIsIFwiOEMgQUVcIiwgXCI4QyBBRlwiLCBcIjhEIDlDXCIsIFwiOEQgQjJcIiwgXCI4RCBBNVwiLCBcIjhEIEEzXCIsIFwiOEQgQjFcIiwgXCI4RCA5QlwiLCBcIjhEIDk5XCIsIFwiOEQgOUFcIiwgXCI4RCA5OFwiLCBcIjhEIEEyXCIsIFwiOEQgQTFcIiwgXCI4RCBBN1wiLCBcIjhEIEE4XCIsIFwiOEQgQTZcIiwgXCI4RCBCMFwiLCBcIjhFIDgyXCIsIFwiOEQgQUVcIiwgXCI4RCBBQ1wiLCBcIjhEIEFEXCIsIFwiOEQgQUJcIiwgXCI4RCBCRlwiLCBcIjhEIEE5XCIsIFwiOEQgQUFcIiwgXCI4RCBCQVwiLCBcIjhEIEJCXCIsIFwiOEQgQjdcIiwgXCI4RCBCOFwiLCBcIjhEIEI5XCIsIFwiOEQgQkVcIiwgXCI4RCBCNlwiLCBcIjhEIEI1XCIsIFwiRTIgOTggOTUgRUYgQjggOEZcIiwgXCI4RCBCQ1wiLCBcIjhEIEI0XCIsIFwiOEQgQkRcIixcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIkUyIDlBIEJEIEVGIEI4IDhGXCIsIFwiOEYgODBcIiwgXCI4RiA4OFwiLCBcIkUyIDlBIEJFIEVGIEI4IDhGXCIsIFwiOEUgQkVcIiwgXCI4RiA5MFwiLCBcIjhGIDg5XCIsIFwiOEUgQjFcIiwgXCJFMiA5QiBCMyBFRiBCOCA4RlwiLCBcIjhGIDhDXCIsIFwiOEYgOTNcIiwgXCI4RiBCOFwiLCBcIjhGIDkyXCIsIFwiOEYgOTFcIiwgXCI4RiA4RlwiLCBcIjhFIEJGXCIsIFwiRTIgOUIgQjdcIiwgXCI4RiA4MlwiLCBcIkUyIDlCIEI4XCIsIFwiOEYgQjlcIiwgXCI4RSBBM1wiLCBcIjlBIEEzXCIsIFwiOEYgOEFcIiwgXCI4RiA4NFwiLCBcIjlCIDgwXCIsIFwiRTIgOUIgQjlcIiwgXCI4RiA4QlwiLCBcIjlBIEI0XCIsIFwiOUEgQjVcIiwgXCI4RiA4N1wiLCBcIjk1IEI0XCIsIFwiOEYgODZcIiwgXCI4RSBCRFwiLCBcIjhGIDg1XCIsIFwiOEUgOTZcIiwgXCI4RSA5N1wiLCBcIjhGIEI1XCIsIFwiOEUgQUJcIiwgXCI4RSA5RlwiLCBcIjhFIEFEXCIsIFwiOEUgQThcIiwgXCI4RSBBQVwiLCBcIjhFIEE0XCIsIFwiOEUgQTdcIiwgXCI4RSBCQ1wiLCBcIjhFIEI5XCIsIFwiOEUgQjdcIiwgXCI4RSBCQVwiLCBcIjhFIEI4XCIsIFwiOEUgQkJcIiwgXCI4RSBBQ1wiLCBcIjhFIEFFXCIsIFwiOTEgQkVcIiwgXCI4RSBBRlwiLCBcIjhFIEIyXCIsIFwiOEUgQjBcIiwgXCI4RSBCM1wiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlBIDk3XCIsIFwiOUEgOTVcIiwgXCI5QSA5OVwiLCBcIjlBIDhDXCIsIFwiOUEgOEVcIiwgXCI4RiA4RVwiLCBcIjlBIDkzXCIsIFwiOUEgOTFcIiwgXCI5QSA5MlwiLCBcIjlBIDkwXCIsIFwiOUEgOUFcIiwgXCI5QSA5QlwiLCBcIjlBIDlDXCIsXCI4RiA4RFwiLCBcIjlBIEIyXCIsIFwiOUEgQThcIiwgXCI5QSA5NFwiLCBcIjlBIDhEXCIsIFwiOUEgOThcIiwgXCI5QSA5NlwiLCBcIjlBIEExXCIsIFwiOUEgQTBcIiwgXCI5QSBBRlwiLCBcIjlBIDgzXCIsIFwiOUEgOEJcIiwgXCI5QSA5RFwiLCBcIjlBIDg0XCIsIFwiOUEgODVcIiwgXCI5QSA4OFwiLCBcIjlBIDlFXCIsIFwiOUEgODJcIiwgXCI5QSA4NlwiLCBcIjlBIDg3XCIsIFwiOUEgOEFcIiwgXCI5QSA4OVwiLCBcIjlBIDgxXCIsIFwiOUIgQTlcIiwgXCJFMiA5QyA4OCBFRiBCOCA4RlwiLCBcIjlCIEFCXCIsIFwiOUIgQUNcIiwgXCJFMiA5QiBCNSBFRiBCOCA4RlwiLCBcIjlCIEE1XCIsIFwiOUEgQTRcIiwgXCJFMiA5QiBCNFwiLCBcIjlCIEIzXCIsIFwiOUEgODBcIiwgXCI5QiBCMFwiLCBcIjkyIEJBXCIsIFwiRTIgOUEgOTMgRUYgQjggOEZcIiwgXCI5QSBBN1wiLCBcIkUyIDlCIEJEIEVGIEI4IDhGXCIsIFwiOUEgOEZcIiwgXCI5QSBBNlwiLCBcIjlBIEE1XCIsIFwiOEYgODFcIiwgXCI5QSBBMlwiLCBcIjhFIEExXCIsIFwiOEUgQTJcIiwgXCI4RSBBMFwiLCBcIjhGIDk3XCIsIFwiOEMgODFcIiwgXCI5NyBCQ1wiLCBcIjhGIEFEXCIsIFwiRTIgOUIgQjIgRUYgQjggOEZcIiwgXCI4RSA5MVwiLCBcIkUyIDlCIEIwXCIsIFwiOEYgOTRcIiwgXCI5NyBCQlwiLCBcIjhDIDhCXCIsIFwiOTcgQkVcIiwgXCI4RiA5NVwiLCBcIkUyIDlCIEJBIEVGIEI4IDhGXCIsIFwiOEYgOUVcIiwgXCI5QiBBM1wiLCBcIjlCIEE0XCIsIFwiOEMgODVcIiwgXCI4QyA4NFwiLCBcIjhGIDlDXCIsIFwiOEYgOTZcIiwgXCI4RiA5RFwiLCBcIjhDIDg3XCIsIFwiOEMgODZcIiwgXCI4RiA5OVwiLCBcIjhDIDgzXCIsIFwiOEMgODlcIiwgXCI4QyA4Q1wiLCBcIjhDIEEwXCIsIFwiOEUgODdcIiwgXCI4RSA4NlwiLCBcIjhDIDg4XCIsIFwiOEYgOThcIiwgXCI4RiBCMFwiLCBcIjhGIEFGXCIsIFwiOEYgOUZcIiwgXCI5NyBCRFwiLCBcIjhGIEEwXCIsIFwiOEYgQTFcIiwgXCI4RiA5QVwiLCBcIjhGIEEyXCIsIFwiOEYgQUNcIiwgXCI4RiBBM1wiLCBcIjhGIEE0XCIsIFwiOEYgQTVcIiwgXCI4RiBBNlwiLCBcIjhGIEE4XCIsIFwiOEYgQUFcIiwgXCI4RiBBQlwiLCBcIjhGIEE5XCIsIFwiOTIgOTJcIiwgXCI4RiA5QlwiLCBcIkUyIDlCIEFBIEVGIEI4IDhGXCIsIFwiOTUgOENcIiwgXCI5NSA4RFwiLCBcIjk1IDhCXCIsIFwiRTIgOUIgQTlcIiwgXCJFMiA4QyA5QSBFRiBCOCA4RlwiLCBcIjkzIEIxXCIsIFwiOTMgQjJcIiwgXCI5MiBCQlwiLCBcIkUyIDhDIEE4IEVGIEI4IDhGXCIsIFwiOTYgQTVcIiwgXCI5NiBBOFwiLCBcIjk2IEIxXCIsIFwiOTYgQjJcIiwgXCI5NSBCOVwiLCBcIjk3IDlDXCIsIFwiOTIgQkRcIiwgXCI5MiBCRVwiLCBcIjkyIEJGXCIsIFwiOTMgODBcIiwgXCI5MyBCQ1wiLCBcIjkzIEI3XCIsIFwiOTMgQjhcIiwgXCI5MyBCOVwiLCBcIjhFIEE1XCIsIFwiOTMgQkRcIiwgXCI4RSA5RVwiLCBcIjkzIDlFXCIsIFwiRTIgOTggOEUgRUYgQjggOEZcIiwgXCI5MyA5RlwiLCBcIjkzIEEwXCIsIFwiOTMgQkFcIiwgXCI5MyBCQlwiLCBcIjhFIDk5XCIsIFwiOEUgOUFcIiwgXCI4RSA5QlwiLCBcIkUyIDhGIEIxXCIsIFwiRTIgOEYgQjJcIiwgXCJFMiA4RiBCMFwiLCBcIjk1IEIwXCIsIFwiRTIgOEYgQjNcIiwgXCJFMiA4QyA5QiBFRiBCOCA4RlwiLCBcIjkzIEExXCIsIFwiOTQgOEJcIiwgXCI5NCA4Q1wiLCBcIjkyIEExXCIsIFwiOTQgQTZcIiwgXCI5NSBBRlwiLCBcIjk3IDkxXCIsIFwiOUIgQTJcIiwgXCI5MiBCOFwiLCBcIjkyIEI1XCIsIFwiOTIgQjRcIiwgXCI5MiBCNlwiLCBcIjkyIEI3XCIsIFwiOTIgQjBcIiwgXCI5MiBCM1wiLCBcIjkyIDhFXCIsIFwiRTIgOUEgOTZcIiwgXCI5NCBBN1wiLCBcIjk0IEE4XCIsIFwiRTIgOUEgOTJcIiwgXCI5QiBBMFwiLCBcIkUyIDlCIDhGXCIsIFwiOTQgQTlcIiwgXCJFMiA5QSA5OVwiLCBcIkUyIDlCIDkzXCIsIFwiOTQgQUJcIiwgXCI5MiBBM1wiLCBcIjk0IEFBXCIsIFwiOTcgQTFcIiwgXCJFMiA5QSA5NFwiLCBcIjlCIEExXCIsIFwiOUEgQUNcIiwgXCJFMiA5OCBBMCBFRiBCOCA4RlwiLCBcIkUyIDlBIEIwXCIsIFwiRTIgOUEgQjFcIiwgXCI4RiBCQVwiLCBcIjk0IEFFXCIsIFwiOTMgQkZcIiwgXCI5MiA4OFwiLCBcIkUyIDlBIDk3XCIsIFwiOTQgQURcIiwgXCI5NCBBQ1wiLCBcIjk1IEIzXCIsIFwiOTIgOEFcIiwgXCI5MiA4OVwiLCBcIjhDIEExXCIsIFwiOEYgQjdcIiwgXCI5NCA5NlwiLCBcIjlBIEJEXCIsIFwiOUEgQkZcIiwgXCI5QiA4MVwiLCBcIjk0IDkxXCIsIFwiOTcgOURcIiwgXCI5QiA4QlwiLCBcIjlCIDhDXCIsIFwiOUIgOEZcIiwgXCI5QSBBQVwiLCBcIjlCIDhFXCIsIFwiOTYgQkNcIiwgXCI5NyBCQVwiLCBcIkUyIDlCIEIxXCIsIFwiOTcgQkZcIiwgXCI5QiA4RFwiLCBcIjhFIDg4XCIsIFwiOEUgOEZcIiwgXCI4RSA4MFwiLCBcIjhFIDgxXCIsIFwiOEUgOEFcIiwgXCI4RSA4OVwiLCBcIjhFIDhFXCIsIFwiOEUgOTBcIiwgXCI4RSA4Q1wiLCBcIjhGIEFFXCIsIFwiRTIgOUMgODkgRUYgQjggOEZcIiwgXCI5MyBBOVwiLCBcIjkzIEE4XCIsIFwiOTMgQTdcIiwgXCI5MiA4Q1wiLCBcIjkzIEFFXCIsIFwiOTMgQUFcIiwgXCI5MyBBQlwiLCBcIjkzIEFDXCIsIFwiOTMgQURcIiwgXCI5MyBBNlwiLCBcIjkzIEFGXCIsIFwiOTMgQTVcIiwgXCI5MyBBNFwiLCBcIjkzIDlDXCIsIFwiOTMgODNcIiwgXCI5MyA5MVwiLCBcIjkzIDhBXCIsIFwiOTMgODhcIiwgXCI5MyA4OVwiLCBcIjkzIDg0XCIsIFwiOTMgODVcIiwgXCI5MyA4NlwiLCBcIjk3IDkzXCIsIFwiOTMgODdcIiwgXCI5NyA4M1wiLCBcIjk3IEIzXCIsIFwiOTcgODRcIiwgXCI5MyA4QlwiLCBcIjk3IDkyXCIsIFwiOTMgODFcIiwgXCI5MyA4MlwiLCBcIjk3IDgyXCIsIFwiOTcgOUVcIiwgXCI5MyBCMFwiLCBcIjkzIDkzXCIsIFwiOTMgOTVcIiwgXCI5MyA5N1wiLCBcIjkzIDk4XCIsIFwiOTMgOTlcIiwgXCI5MyA5NFwiLCBcIjkzIDkyXCIsIFwiOTMgOUFcIiwgXCI5MyA5NlwiLCBcIjk0IDk3XCIsIFwiOTMgOEVcIiwgXCI5NiA4N1wiLCBcIkUyIDlDIDgyIEVGIEI4IDhGXCIsIFwiOTMgOTBcIiwgXCI5MyA4RlwiLCBcIjkzIDhDXCIsIFwiOTMgOERcIiwgXCI5QSBBOVwiLCBcIjhGIEIzXCIsIFwiOEYgQjRcIiwgXCI5NCA5MFwiLCBcIjk0IDkyXCIsIFwiOTQgOTNcIiwgXCI5NCA4RlwiLCBcIjk2IDhBXCIsIFwiOTYgOEJcIiwgXCJFMiA5QyA5MiBFRiBCOCA4RlwiLCBcIjkzIDlEXCIsIFwiRTIgOUMgOEYgRUYgQjggOEZcIiwgXCI5NiA4RFwiLCBcIjk2IDhDXCIsIFwiOTQgOERcIiwgXCI5NCA4RVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCJFMiA5RCBBNCBFRiBCOCA4RlwiLCBcIjkyIDlCXCIsIFwiOTIgOUFcIiwgXCI5MiA5OVwiLCBcIjkyIDlDXCIsIFwiOTIgOTRcIiwgXCJFMiA5RCBBMyBFRiBCOCA4RlwiLCBcIjkyIDk1XCIsIFwiOTIgOUVcIiwgXCI5MiA5M1wiLCBcIjkyIDk3XCIsIFwiOTIgOTZcIiwgXCI5MiA5OFwiLCBcIjkyIDlEXCIsIFwiOTIgOUZcIiwgXCJFMiA5OCBBRSBFRiBCOCA4RlwiLCBcIkUyIDlDIDlEIEVGIEI4IDhGXCIsIFwiRTIgOTggQUEgRUYgQjggOEZcIiwgXCI5NSA4OVwiLCBcIkUyIDk4IEI4IEVGIEI4IDhGXCIsIFwiRTIgOUMgQTEgRUYgQjggOEZcIiwgXCI5NCBBRlwiLCBcIjk1IDhFXCIsIFwiRTIgOTggQUYgRUYgQjggOEZcIiwgXCJFMiA5OCBBNiBFRiBCOCA4RlwiLCBcIjlCIDkwXCIsIFwiRTIgOUIgOEVcIiwgXCJFMiA5OSA4OCBFRiBCOCA4RlwiLCBcIkUyIDk5IDg5IEVGIEI4IDhGXCIsIFwiRTIgOTkgOEEgRUYgQjggOEZcIiwgXCJFMiA5OSA4QiBFRiBCOCA4RlwiLCBcIkUyIDk5IDhDIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEQgRUYgQjggOEZcIiwgXCJFMiA5OSA4RSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhGIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTAgRUYgQjggOEZcIiwgXCJFMiA5OSA5MSBFRiBCOCA4RlwiLCBcIkUyIDk5IDkyIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTMgRUYgQjggOEZcIiwgXCI4NiA5NFwiLCBcIkUyIDlBIDlCXCIsIFwiODggQjNcIiwgXCI4OCBCOVwiLCBcIkUyIDk4IEEyIEVGIEI4IDhGXCIsIFwiRTIgOTggQTMgRUYgQjggOEZcIiwgXCI5MyBCNFwiLCBcIjkzIEIzXCIsIFwiODggQjZcIiwgXCI4OCA5QSBFRiBCOCA4RlwiLCBcIjg4IEI4XCIsIFwiODggQkFcIiwgXCI4OCBCNyBFRiBCOCA4RlwiLCBcIkUyIDlDIEI0IEVGIEI4IDhGXCIsIFwiODYgOUFcIiwgXCI4OSA5MVwiLCBcIjkyIEFFXCIsIFwiODkgOTBcIiwgXCJFMyA4QSA5OSBFRiBCOCA4RlwiLCBcIkUzIDhBIDk3IEVGIEI4IDhGXCIsIFwiODggQjRcIiwgXCI4OCBCNVwiLCBcIjg4IEIyXCIsIFwiODUgQjAgRUYgQjggOEZcIiwgXCI4NSBCMSBFRiBCOCA4RlwiLCBcIjg2IDhFXCIsIFwiODYgOTFcIiwgXCI4NSBCRSBFRiBCOCA4RlwiLCBcIjg2IDk4XCIsIFwiRTIgOUIgOTQgRUYgQjggOEZcIiwgXCI5MyA5QlwiLCBcIjlBIEFCXCIsIFwiRTIgOUQgOENcIiwgXCJFMiBBRCA5NSBFRiBCOCA4RlwiLCBcIjkyIEEyXCIsIFwiRTIgOTkgQTggRUYgQjggOEZcIiwgXCI5QSBCN1wiLCBcIjlBIEFGXCIsIFwiOUEgQjNcIiwgXCI5QSBCMVwiLCBcIjk0IDlFXCIsIFwiOTMgQjVcIiwgXCJFMiA5RCA5NyBFRiBCOCA4RlwiLCBcIkUyIDlEIDk1XCIsIFwiRTIgOUQgOTNcIiwgXCJFMiA5RCA5NFwiLCBcIkUyIDgwIEJDIEVGIEI4IDhGXCIsIFwiRTIgODEgODkgRUYgQjggOEZcIiwgXCI5MiBBRlwiLCBcIjk0IDg1XCIsIFwiOTQgODZcIiwgXCI5NCBCMVwiLCBcIkUyIDlBIDlDXCIsIFwiRTMgODAgQkQgRUYgQjggOEZcIiwgXCJFMiA5QSBBMCBFRiBCOCA4RlwiLCBcIjlBIEI4XCIsIFwiOTQgQjBcIiwgXCJFMiA5OSBCQiBFRiBCOCA4RlwiLCBcIjg4IEFGIEVGIEI4IDhGXCIsIFwiOTIgQjlcIiwgXCJFMiA5RCA4NyBFRiBCOCA4RlwiLCBcIkUyIDlDIEIzIEVGIEI4IDhGXCIsIFwiRTIgOUQgOEVcIiwgXCJFMiA5QyA4NVwiLCBcIjkyIEEwXCIsIFwiOEMgODBcIiwgXCJFMiA5RSBCRlwiLCBcIjhDIDkwXCIsIFwiRTIgOTMgODIgRUYgQjggOEZcIiwgXCI4RiBBN1wiLCBcIjg4IDgyIEVGIEI4IDhGXCIsIFwiOUIgODJcIiwgXCI5QiA4M1wiLCBcIjlCIDg0XCIsIFwiOUIgODVcIiwgXCJFMiA5OSBCRiBFRiBCOCA4RlwiLCBcIjlBIEFEXCIsIFwiOUEgQkVcIiwgXCI4NSBCRiBFRiBCOCA4RlwiLCBcIjlBIEIwXCIsIFwiOUEgQjlcIiwgXCI5QSBCQVwiLCBcIjlBIEJDXCIsIFwiOUEgQkJcIiwgXCI5QSBBRVwiLCBcIjhFIEE2XCIsIFwiOTMgQjZcIiwgXCI4OCA4MVwiLCBcIjg2IDk2XCIsIFwiODYgOTdcIiwgXCI4NiA5OVwiLCBcIjg2IDkyXCIsIFwiODYgOTVcIiwgXCI4NiA5M1wiLCBcIjMwIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzEgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMiBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMzIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzQgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM2IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzcgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzOCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM5IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiOTQgOUZcIiwgXCI5NCBBMlwiLCBcIkUyIDk2IEI2IEVGIEI4IDhGXCIsIFwiRTIgOEYgQjhcIiwgXCJFMiA4RiBBRlwiLCBcIkUyIDhGIEI5XCIsIFwiRTIgOEYgQkFcIiwgXCJFMiA4RiBBRFwiLCBcIkUyIDhGIEFFXCIsIFwiRTIgOEYgQTlcIiwgXCJFMiA4RiBBQVwiLCBcIjk0IDgwXCIsIFwiOTQgODFcIiwgXCI5NCA4MlwiLCBcIkUyIDk3IDgwIEVGIEI4IDhGXCIsIFwiOTQgQkNcIiwgXCI5NCBCRFwiLCBcIkUyIDhGIEFCXCIsIFwiRTIgOEYgQUNcIiwgXCJFMiA5RSBBMSBFRiBCOCA4RlwiLCBcIkUyIEFDIDg1IEVGIEI4IDhGXCIsIFwiRTIgQUMgODYgRUYgQjggOEZcIiwgXCJFMiBBQyA4NyBFRiBCOCA4RlwiLCBcIkUyIDg2IDk3IEVGIEI4IDhGXCIsIFwiRTIgODYgOTggRUYgQjggOEZcIiwgXCJFMiA4NiA5OSBFRiBCOCA4RlwiLCBcIkUyIDg2IDk2IEVGIEI4IDhGXCIsIFwiRTIgODYgOTUgRUYgQjggOEZcIiwgXCJFMiA4NiA5NCBFRiBCOCA4RlwiLCBcIjk0IDg0XCIsIFwiRTIgODYgQUEgRUYgQjggOEZcIiwgXCJFMiA4NiBBOSBFRiBCOCA4RlwiLCBcIkUyIEE0IEI0IEVGIEI4IDhGXCIsIFwiRTIgQTQgQjUgRUYgQjggOEZcIiwgXCIyMyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjJBIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiRTIgODQgQjkgRUYgQjggOEZcIiwgXCI5NCBBNFwiLCBcIjk0IEExXCIsIFwiOTQgQTBcIiwgXCI5NCBBM1wiLCBcIjhFIEI1XCIsIFwiOEUgQjZcIiwgXCJFMyA4MCBCMCBFRiBCOCA4RlwiLCBcIkUyIDlFIEIwXCIsIFwiRTIgOUMgOTQgRUYgQjggOEZcIiwgXCI5NCA4M1wiLCBcIkUyIDlFIDk1XCIsIFwiRTIgOUUgOTZcIiwgXCJFMiA5RSA5N1wiLCBcIkUyIDlDIDk2IEVGIEI4IDhGXCIsIFwiOTIgQjJcIiwgXCI5MiBCMVwiLCBcIkMyIEE5IEVGIEI4IDhGXCIsIFwiQzIgQUUgRUYgQjggOEZcIiwgXCJFMiA4NCBBMiBFRiBCOCA4RlwiLCBcIjk0IDlBXCIsIFwiOTQgOTlcIiwgXCI5NCA5QlwiLCBcIjk0IDlEXCIsIFwiOTQgOUNcIiwgXCJFMiA5OCA5MSBFRiBCOCA4RlwiLCBcIjk0IDk4XCIsIFwiRTIgOUEgQUEgRUYgQjggOEZcIiwgXCJFMiA5QSBBQiBFRiBCOCA4RlwiLCBcIjk0IEI0XCIsIFwiOTQgQjVcIiwgXCI5NCBCOFwiLCBcIjk0IEI5XCIsIFwiOTQgQjZcIiwgXCI5NCBCN1wiLCBcIjk0IEJBXCIsIFwiRTIgOTYgQUEgRUYgQjggOEZcIiwgXCJFMiA5NiBBQiBFRiBCOCA4RlwiLCBcIkUyIEFDIDlCIEVGIEI4IDhGXCIsIFwiRTIgQUMgOUMgRUYgQjggOEZcIiwgXCI5NCBCQlwiLCBcIkUyIDk3IEJDIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkIgRUYgQjggOEZcIiwgXCJFMiA5NyBCRSBFRiBCOCA4RlwiLCBcIkUyIDk3IEJEIEVGIEI4IDhGXCIsIFwiOTQgQjJcIiwgXCI5NCBCM1wiLCBcIjk0IDg4XCIsIFwiOTQgODlcIiwgXCI5NCA4QVwiLCBcIjk0IDg3XCIsIFwiOTMgQTNcIiwgXCI5MyBBMlwiLCBcIjk0IDk0XCIsIFwiOTQgOTVcIiwgXCI4MyA4RlwiLCBcIjgwIDg0IEVGIEI4IDhGXCIsIFwiRTIgOTkgQTAgRUYgQjggOEZcIiwgXCJFMiA5OSBBMyBFRiBCOCA4RlwiLCBcIkUyIDk5IEE1IEVGIEI4IDhGXCIsIFwiRTIgOTkgQTYgRUYgQjggOEZcIiwgXCI4RSBCNFwiLCBcIjkxIDgxIEUyIDgwIDhEIEYwIDlGIDk3IEE4XCIsIFwiOTIgQURcIiwgXCI5NyBBRlwiLCBcIjkyIEFDXCIsIFwiOTUgOTBcIiwgXCI5NSA5MVwiLCBcIjk1IDkyXCIsIFwiOTUgOTNcIiwgXCI5NSA5NFwiLCBcIjk1IDk1XCIsIFwiOTUgOTZcIiwgXCI5NSA5N1wiLCBcIjk1IDk4XCIsIFwiOTUgOTlcIiwgXCI5NSA5QVwiLCBcIjk1IDlCXCIsIFwiOTUgOUNcIiwgXCI5NSA5RFwiLCBcIjk1IDlFXCIsIFwiOTUgOUZcIiwgXCI5NSBBMFwiLCBcIjk1IEExXCIsIFwiOTUgQTJcIiwgXCI5NSBBM1wiLCBcIjk1IEE0XCIsIFwiOTUgQTVcIiwgXCI5NSBBNlwiLCBcIjk1IEE3XCIsIFwiOUIgOTFcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQlwiLCBcIjg3IEE2IEYwIDlGIDg3IEJEXCIsIFwiODcgQTYgRjAgOUYgODcgQjFcIiwgXCI4NyBBOSBGMCA5RiA4NyBCRlwiLCBcIjg3IEE2IEYwIDlGIDg3IEI4XCIsIFwiODcgQTYgRjAgOUYgODcgQTlcIiwgXCI4NyBBNiBGMCA5RiA4NyBCNFwiLCBcIjg3IEE2IEYwIDlGIDg3IEFFXCIsIFwiODcgQTYgRjAgOUYgODcgQjZcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE2IEYwIDlGIDg3IEI3XCIsIFwiODcgQTYgRjAgOUYgODcgQjJcIiwgXCI4NyBBNiBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE2IEYwIDlGIDg3IEJBXCIsIFwiODcgQTYgRjAgOUYgODcgQjlcIiwgXCI4NyBBNiBGMCA5RiA4NyBCRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEI4XCIsIFwiODcgQTcgRjAgOUYgODcgQURcIiwgXCI4NyBBNyBGMCA5RiA4NyBBOVwiLCBcIjg3IEE3IEYwIDlGIDg3IEE3XCIsIFwiODcgQTcgRjAgOUYgODcgQkVcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQVwiLCBcIjg3IEE3IEYwIDlGIDg3IEJGXCIsIFwiODcgQTcgRjAgOUYgODcgQUZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCMlwiLCBcIjg3IEE3IEYwIDlGIDg3IEI5XCIsIFwiODcgQTcgRjAgOUYgODcgQjRcIiwgXCI4NyBBNyBGMCA5RiA4NyBCNlwiLCBcIjg3IEE3IEYwIDlGIDg3IEE2XCIsIFwiODcgQTcgRjAgOUYgODcgQkNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCN1wiLCBcIjg3IEFFIEYwIDlGIDg3IEI0XCIsIFwiODcgQkIgRjAgOUYgODcgQUNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCM1wiLCBcIjg3IEE3IEYwIDlGIDg3IEFDXCIsIFwiODcgQTcgRjAgOUYgODcgQUJcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJCXCIsIFwiODcgQjAgRjAgOUYgODcgQURcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMlwiLCBcIjg3IEE4IEYwIDlGIDg3IEE2XCIsIFwiODcgQUUgRjAgOUYgODcgQThcIiwgXCI4NyBCMCBGMCA5RiA4NyBCRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFCXCIsIFwiODcgQjkgRjAgOUYgODcgQTlcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIzXCIsIFwiODcgQTggRjAgOUYgODcgQkRcIiwgXCI4NyBBOCBGMCA5RiA4NyBBOFwiLCBcIjg3IEE4IEYwIDlGIDg3IEI0XCIsIFwiODcgQjAgRjAgOUYgODcgQjJcIiwgXCI4NyBBOCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE4IEYwIDlGIDg3IEE5XCIsIFwiODcgQTggRjAgOUYgODcgQjBcIiwgXCI4NyBBOCBGMCA5RiA4NyBCN1wiLCBcIjg3IEFEIEYwIDlGIDg3IEI3XCIsIFwiODcgQTggRjAgOUYgODcgQkFcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJFXCIsIFwiODcgQTggRjAgOUYgODcgQkZcIiwgXCI4NyBBOSBGMCA5RiA4NyBCMFwiLCBcIjg3IEE5IEYwIDlGIDg3IEFGXCIsIFwiODcgQTkgRjAgOUYgODcgQjJcIiwgXCI4NyBBOSBGMCA5RiA4NyBCNFwiLCBcIjg3IEFBIEYwIDlGIDg3IEE4XCIsIFwiODcgQUEgRjAgOUYgODcgQUNcIiwgXCI4NyBCOCBGMCA5RiA4NyBCQlwiLCBcIjg3IEFDIEYwIDlGIDg3IEI2XCIsIFwiODcgQUEgRjAgOUYgODcgQjdcIiwgXCI4NyBBQSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFBIEYwIDlGIDg3IEI5XCIsIFwiODcgQUEgRjAgOUYgODcgQkFcIiwgXCI4NyBBQiBGMCA5RiA4NyBCMFwiLCBcIjg3IEFCIEYwIDlGIDg3IEI0XCIsIFwiODcgQUIgRjAgOUYgODcgQUZcIiwgXCI4NyBBQiBGMCA5RiA4NyBBRVwiLCBcIjg3IEFCIEYwIDlGIDg3IEI3XCIsIFwiODcgQUMgRjAgOUYgODcgQUJcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQlwiLCBcIjg3IEI5IEYwIDlGIDg3IEFCXCIsIFwiODcgQUMgRjAgOUYgODcgQTZcIiwgXCI4NyBBQyBGMCA5RiA4NyBCMlwiLCBcIjg3IEFDIEYwIDlGIDg3IEFBXCIsIFwiODcgQTkgRjAgOUYgODcgQUFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBRFwiLCBcIjg3IEFDIEYwIDlGIDg3IEFFXCIsIFwiODcgQUMgRjAgOUYgODcgQjdcIiwgXCI4NyBBQyBGMCA5RiA4NyBCMVwiLCBcIjg3IEFDIEYwIDlGIDg3IEE5XCIsIFwiODcgQUMgRjAgOUYgODcgQjVcIiwgXCI4NyBBQyBGMCA5RiA4NyBCQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI5XCIsIFwiODcgQUMgRjAgOUYgODcgQUNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCM1wiLCBcIjg3IEFDIEYwIDlGIDg3IEJDXCIsIFwiODcgQUMgRjAgOUYgODcgQkVcIiwgXCI4NyBBRCBGMCA5RiA4NyBCOVwiLCBcIjg3IEFEIEYwIDlGIDg3IEIzXCIsIFwiODcgQUQgRjAgOUYgODcgQjBcIiwgXCI4NyBBRCBGMCA5RiA4NyBCQVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI4XCIsIFwiODcgQUUgRjAgOUYgODcgQjNcIiwgXCI4NyBBRSBGMCA5RiA4NyBBOVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI3XCIsIFwiODcgQUUgRjAgOUYgODcgQjZcIiwgXCI4NyBBRSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFFIEYwIDlGIDg3IEIyXCIsIFwiODcgQUUgRjAgOUYgODcgQjFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFFXCIsIFwiODcgQUYgRjAgOUYgODcgQjJcIiwgXCI4NyBBRiBGMCA5RiA4NyBCNVwiLCBcIjg3IEFGIEYwIDlGIDg3IEFBXCIsIFwiODcgQUYgRjAgOUYgODcgQjRcIiwgXCI4NyBCMCBGMCA5RiA4NyBCRlwiLCBcIjg3IEIwIEYwIDlGIDg3IEFBXCIsIFwiODcgQjAgRjAgOUYgODcgQUVcIiwgXCI4NyBCRCBGMCA5RiA4NyBCMFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJDXCIsIFwiODcgQjAgRjAgOUYgODcgQUNcIiwgXCI4NyBCMSBGMCA5RiA4NyBBNlwiLCBcIjg3IEIxIEYwIDlGIDg3IEJCXCIsIFwiODcgQjEgRjAgOUYgODcgQTdcIiwgXCI4NyBCMSBGMCA5RiA4NyBCOFwiLCBcIjg3IEIxIEYwIDlGIDg3IEI3XCIsIFwiODcgQjEgRjAgOUYgODcgQkVcIiwgXCI4NyBCMSBGMCA5RiA4NyBBRVwiLCBcIjg3IEIxIEYwIDlGIDg3IEI5XCIsIFwiODcgQjEgRjAgOUYgODcgQkFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNFwiLCBcIjg3IEIyIEYwIDlGIDg3IEIwXCIsIFwiODcgQjIgRjAgOUYgODcgQUNcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQ1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJFXCIsIFwiODcgQjIgRjAgOUYgODcgQkJcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI5XCIsIFwiODcgQjIgRjAgOUYgODcgQURcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNlwiLCBcIjg3IEIyIEYwIDlGIDg3IEI3XCIsIFwiODcgQjIgRjAgOUYgODcgQkFcIiwgXCI4NyBCRSBGMCA5RiA4NyBCOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEJEXCIsIFwiODcgQUIgRjAgOUYgODcgQjJcIiwgXCI4NyBCMiBGMCA5RiA4NyBBOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEE4XCIsIFwiODcgQjIgRjAgOUYgODcgQjNcIiwgXCI4NyBCMiBGMCA5RiA4NyBBQVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI4XCIsIFwiODcgQjIgRjAgOUYgODcgQTZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRlwiLCBcIjg3IEIyIEYwIDlGIDg3IEIyXCIsIFwiODcgQjMgRjAgOUYgODcgQTZcIiwgXCI4NyBCMyBGMCA5RiA4NyBCN1wiLCBcIjg3IEIzIEYwIDlGIDg3IEI1XCIsIFwiODcgQjMgRjAgOUYgODcgQjFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBOFwiLCBcIjg3IEIzIEYwIDlGIDg3IEJGXCIsIFwiODcgQjMgRjAgOUYgODcgQUVcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFDXCIsIFwiODcgQjMgRjAgOUYgODcgQkFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQlwiLCBcIjg3IEIyIEYwIDlGIDg3IEI1XCIsIFwiODcgQjAgRjAgOUYgODcgQjVcIiwgXCI4NyBCMyBGMCA5RiA4NyBCNFwiLCBcIjg3IEI0IEYwIDlGIDg3IEIyXCIsIFwiODcgQjUgRjAgOUYgODcgQjBcIiwgXCI4NyBCNSBGMCA5RiA4NyBCQ1wiLCBcIjg3IEI1IEYwIDlGIDg3IEI4XCIsIFwiODcgQjUgRjAgOUYgODcgQTZcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI1IEYwIDlGIDg3IEJFXCIsIFwiODcgQjUgRjAgOUYgODcgQUFcIiwgXCI4NyBCNSBGMCA5RiA4NyBBRFwiLCBcIjg3IEI1IEYwIDlGIDg3IEIzXCIsIFwiODcgQjUgRjAgOUYgODcgQjFcIiwgXCI4NyBCNSBGMCA5RiA4NyBCOVwiLCBcIjg3IEI1IEYwIDlGIDg3IEI3XCIsIFwiODcgQjYgRjAgOUYgODcgQTZcIiwgXCI4NyBCNyBGMCA5RiA4NyBBQVwiLCBcIjg3IEI3IEYwIDlGIDg3IEI0XCIsIFwiODcgQjcgRjAgOUYgODcgQkFcIiwgXCI4NyBCNyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEIxXCIsIFwiODcgQjggRjAgOUYgODcgQURcIiwgXCI4NyBCMCBGMCA5RiA4NyBCM1wiLCBcIjg3IEIxIEYwIDlGIDg3IEE4XCIsIFwiODcgQjUgRjAgOUYgODcgQjJcIiwgXCI4NyBCQiBGMCA5RiA4NyBBOFwiLCBcIjg3IEJDIEYwIDlGIDg3IEI4XCIsIFwiODcgQjggRjAgOUYgODcgQjJcIiwgXCI4NyBCOCBGMCA5RiA4NyBCOVwiLCBcIjg3IEI4IEYwIDlGIDg3IEE2XCIsIFwiODcgQjggRjAgOUYgODcgQjNcIiwgXCI4NyBCNyBGMCA5RiA4NyBCOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEE4XCIsIFwiODcgQjggRjAgOUYgODcgQjFcIiwgXCI4NyBCOCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJEXCIsIFwiODcgQjggRjAgOUYgODcgQjBcIiwgXCI4NyBCOCBGMCA5RiA4NyBBRVwiLCBcIjg3IEI4IEYwIDlGIDg3IEE3XCIsIFwiODcgQjggRjAgOUYgODcgQjRcIiwgXCI4NyBCRiBGMCA5RiA4NyBBNlwiLCBcIjg3IEFDIEYwIDlGIDg3IEI4XCIsIFwiODcgQjAgRjAgOUYgODcgQjdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCOFwiLCBcIjg3IEFBIEYwIDlGIDg3IEI4XCIsIFwiODcgQjEgRjAgOUYgODcgQjBcIiwgXCI4NyBCOCBGMCA5RiA4NyBBOVwiLCBcIjg3IEI4IEYwIDlGIDg3IEI3XCIsIFwiODcgQjggRjAgOUYgODcgQkZcIiwgXCI4NyBCOCBGMCA5RiA4NyBBQVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFEXCIsIFwiODcgQjggRjAgOUYgODcgQkVcIiwgXCI4NyBCOSBGMCA5RiA4NyBCQ1wiLCBcIjg3IEI5IEYwIDlGIDg3IEFGXCIsIFwiODcgQjkgRjAgOUYgODcgQkZcIiwgXCI4NyBCOSBGMCA5RiA4NyBBRFwiLCBcIjg3IEI5IEYwIDlGIDg3IEIxXCIsIFwiODcgQjkgRjAgOUYgODcgQUNcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI5IEYwIDlGIDg3IEI0XCIsIFwiODcgQjkgRjAgOUYgODcgQjlcIiwgXCI4NyBCOSBGMCA5RiA4NyBCM1wiLCBcIjg3IEI5IEYwIDlGIDg3IEI3XCIsIFwiODcgQjkgRjAgOUYgODcgQjJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBOFwiLCBcIjg3IEI5IEYwIDlGIDg3IEJCXCIsIFwiODcgQkEgRjAgOUYgODcgQUNcIiwgXCI4NyBCQSBGMCA5RiA4NyBBNlwiLCBcIjg3IEE2IEYwIDlGIDg3IEFBXCIsIFwiODcgQUMgRjAgOUYgODcgQTdcIiwgXCI4NyBCQSBGMCA5RiA4NyBCOFwiLCBcIjg3IEJCIEYwIDlGIDg3IEFFXCIsIFwiODcgQkEgRjAgOUYgODcgQkVcIiwgXCI4NyBCQSBGMCA5RiA4NyBCRlwiLCBcIjg3IEJCIEYwIDlGIDg3IEJBXCIsIFwiODcgQkIgRjAgOUYgODcgQTZcIiwgXCI4NyBCQiBGMCA5RiA4NyBBQVwiLCBcIjg3IEJCIEYwIDlGIDg3IEIzXCIsIFwiODcgQkMgRjAgOUYgODcgQUJcIiwgXCI4NyBBQSBGMCA5RiA4NyBBRFwiLCBcIjg3IEJFIEYwIDlGIDg3IEFBXCIsIFwiODcgQkYgRjAgOUYgODcgQjJcIiwgXCI4NyBCRiBGMCA5RiA4NyBCQ1wiXVxuXHRlbW9qaXNBcnJheSA9IFtdXG5cdGZyZXFFbW9qaXNBcnJheSA9IFtdXG5cdGZvciBlbSBpbiByYXdFbW9qaXNcblx0XHRlbW9qaXNBcnJheS5wdXNoIGVtb2ppRm9ybWF0dGVyKGVtKVxuXG5cdFxuXHRmcmVxdWVudGx5VXNlZEVtb2ppc1JhdyA9IFtcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixdXG5cdGZvciBlbSBpbiBmcmVxdWVudGx5VXNlZEVtb2ppc1Jhd1xuXHRcdGZyZXFFbW9qaXNBcnJheS5wdXNoIGVtb2ppRm9ybWF0dGVyKGVtKVxuXG5cdCMgZW1vamlLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdCMgXHRlbW9qaUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0IyBcdGVtb2ppQkcgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0VDRUVGMVwiXG5cdCMgXHRib3ggPSBleHBvcnRzLnB4KDMwKVxuXHQjIFx0ZW1vamlCRy5jb25zdHJhaW50cyA9ICh0cmFpbGluZzoxLCBsZWFkaW5nOjEsIGJvdHRvbToxLCBoZWlnaHQ6MjU4KVxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0ZW1vamlHYWxsZXkgPSBuZXcgU2Nyb2xsQ29tcG9uZW50IHN1cGVyTGF5ZXI6ZW1vamlCRywgd2lkdGg6ZW1vamlCRy53aWR0aCwgaGVpZ2h0OmVtb2ppQkcuaGVpZ2h0IC0gZXhwb3J0cy5weCg0MClcblx0IyBcdGVtb2ppR2FsbGV5LnNwZWVkWSA9IDAgXG5cdCMgXHRlbW9qaVNwYWNlciA9IGV4cG9ydHMucHgoNilcblx0IyBcdGVtb2ppUGlja2VyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJlbW9qaSBwaWNrZXJcIiwgc3VwZXJMYXllcjplbW9qaUJHXG5cdCMgXHRlbW9qaVBpY2tlci5jb25zdHJhaW50cyA9IFxuXHQjIFx0XHRsZWFkaW5nOjFcblx0IyBcdFx0dHJhaWxpbmc6MVxuXHQjIFx0XHRib3R0b206MVxuXHQjIFx0XHRoZWlnaHQ6NDJcblx0IyBcdEFCQyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmVtb2ppUGlja2VyXG5cdCMgXHRBQkMuaHRtbCA9IFwiQUJDXCJcblx0IyBcdEFCQy5zdHlsZSA9IHtcblx0IyBcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTUpICsgXCJweFwiXG5cdCMgXHRcdFwiZm9udC13ZWlnaHRcIiA6IDUwMFxuXHQjIFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0IyBcdFx0XCJjb2xvclwiIDogXCIjNEY1NTVEXCJcblx0IyBcdH1cblx0IyBcdEFCQy5jb25zdHJhaW50cyA9IFxuXHQjIFx0XHRsZWFkaW5nOjEyXG5cdCMgXHRcdGJvdHRvbToxNFxuXHQjIFx0XHR3aWR0aDozMFxuXHQjIFx0XHRoZWlnaHQ6MTVcblxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0cm93ID0gLTFcblx0IyBcdEFCQy5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdCMgXHRcdGVtb2ppQkcuZGVzdHJveSgpXG5cdCMgXHRmcmVxdWVudCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdCMgXHRmcmVxdWVudC5odG1sID0gaWNvbkxpYnJhcnkuZnJlcXVlbnRcblx0IyBcdGZyZXF1ZW50LmNvbnN0cmFpbnRzID0gXG5cdCMgXHRcdGxlYWRpbmcgOiBbQUJDLCAxNV1cblx0IyBcdFx0Ym90dG9tOiAxNFxuXHQjIFx0XHR3aWR0aDoxNlxuXHQjIFx0XHRoZWlnaHQ6MjBcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdHNtaWxleXMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0c21pbGV5cy5odG1sID0gaWNvbkxpYnJhcnkuc21pbGV5c1xuXHQjIFx0c21pbGV5cy5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbZnJlcXVlbnQsIDE1XVxuXHQjIFx0XHRib3R0b206IDE0XG5cdCMgXHRcdHdpZHRoOjE2XG5cdCMgXHRcdGhlaWdodDoyMFxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0YW5pbWFscyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdCMgXHRhbmltYWxzLmh0bWwgPSBpY29uTGlicmFyeS5hbmltYWxzXG5cdCMgXHRhbmltYWxzLmNvbnN0cmFpbnRzID1cblx0IyBcdFx0bGVhZGluZyA6IFtzbWlsZXlzLCAxNV1cblx0IyBcdFx0Ym90dG9tOiAxNFxuXHQjIFx0XHR3aWR0aDoxNlxuXHQjIFx0XHRoZWlnaHQ6MjBcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdGZvb2QgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0Zm9vZC5odG1sID0gaWNvbkxpYnJhcnkuZm9vZFxuXHQjIFx0Zm9vZC5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbYW5pbWFscywgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHRhY3Rpdml0eSA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdCMgXHRhY3Rpdml0eS5odG1sID0gaWNvbkxpYnJhcnkuYWN0aXZpdHlcblx0IyBcdGFjdGl2aXR5LmNvbnN0cmFpbnRzID1cblx0IyBcdFx0bGVhZGluZyA6IFtmb29kLCAxNV1cblx0IyBcdFx0Ym90dG9tOiAxNFxuXHQjIFx0XHR3aWR0aDoxNlxuXHQjIFx0XHRoZWlnaHQ6MjBcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdHRyYXZlbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdCMgXHR0cmF2ZWwuaHRtbCA9IGljb25MaWJyYXJ5LnRyYXZlbFxuXHQjIFx0dHJhdmVsLmNvbnN0cmFpbnRzID1cblx0IyBcdFx0bGVhZGluZyA6IFthY3Rpdml0eSwgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHRvYmplY3RzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0IyBcdG9iamVjdHMuaHRtbCA9IGljb25MaWJyYXJ5Lm9iamVjdHNcblx0IyBcdG9iamVjdHMuY29uc3RyYWludHMgPVxuXHQjIFx0XHRsZWFkaW5nIDogW3RyYXZlbCwgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHRzeW1ib2xzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0IyBcdHN5bWJvbHMuaHRtbCA9IGljb25MaWJyYXJ5LnN5bWJvbHNcblx0IyBcdHN5bWJvbHMuY29uc3RyYWludHMgPVxuXHQjIFx0XHRsZWFkaW5nIDogW29iamVjdHMsIDE1XVxuXHQjIFx0XHRib3R0b206IDE0XG5cdCMgXHRcdHdpZHRoOjE2XG5cdCMgXHRcdGhlaWdodDoyMFxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0ZmxhZ3MgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0ZmxhZ3MuaHRtbCA9IGljb25MaWJyYXJ5LmZsYWdzXG5cdCMgXHRmbGFncy5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbc3ltYm9scywgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cblx0IyBcdGxvYWRFbW9qaXMgPSAoZW0pIC0+XG5cdCMgXHRcdHJvdysrIFxuXHQjIFx0XHRpbmRleCA9IGVtb2ppc0FycmF5LmluZGV4T2YoZW0pXG5cdCMgXHRcdGNvbCA9IE1hdGguZmxvb3IoaW5kZXgvNSlcblx0IyBcdFx0aWYgcm93ID4gNFxuXHQjIFx0XHRcdHJvdyA9IDAgXG5cdCMgXHRcdGVtb2ppID0gbmV3IExheWVyIHg6Y29sKmJveCArIChlbW9qaVNwYWNlciAqIGNvbCkgKyBleHBvcnRzLnB4KDMpLCB5OnJvdypib3ggKyAoZW1vamlTcGFjZXIgKiByb3cpICsgZXhwb3J0cy5weCg0MCksIHN1cGVyTGF5ZXI6ZW1vamlHYWxsZXkuY29udGVudCwgd2lkdGg6Ym94LCBoZWlnaHQ6Ym94LCBuYW1lOmRlY29kZVVSSUNvbXBvbmVudChlbSksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0IyBcdFx0ZW1vamkuaHRtbCA9IGRlY29kZVVSSUNvbXBvbmVudChlbSlcblx0IyBcdFx0ZW1vamkuc3R5bGUgPSB7XG5cdCMgXHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMjYpICsgXCJweFwiXG5cdCMgXHRcdFx0XCJsaW5lLWhlaWdodFwiIDogYm94ICsgXCJweFwiXG5cdCMgXHRcdFx0XCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiXG5cdCMgXHRcdH1cblx0IyBcdFx0ZW1vamkub24gRXZlbnRzLkNsaWNrLCAtPlxuXHQjIFx0XHRcdHByaW50IEAubmFtZVxuXHQjIFx0XHRlbW9qaXNMb2FkZWQrK1xuXHQjIFx0XHRwcmludCBlbW9qaXNMb2FkZWRcblxuXHQjIFx0aW5jID0gMjAwXG5cdCMgXHRmaXJzdExvYWQgPSAuMVxuXHQjIFx0dGltZUluYyA9IDJcblx0IyBcdGZ1bGxBbW91bnQgPSBlbW9qaXNBcnJheS5sZW5ndGhcblx0IyBcdGxvYWRzID0gTWF0aC5jZWlsKGZ1bGxBbW91bnQgLyBpbmMpIC0gMVxuXHQjIFx0cGFydGlhbEFtb3VudCA9IGZ1bGxBbW91bnQgJSBpbmNcblx0IyBcdGVtb2ppc0xvYWRlZCA9IDBcblx0IyBcdGZvciBpIGluIFswLi5sb2Fkc11cblx0IyBcdFx0aSsrXG5cdFx0XHRcblx0IyBcdCNTY3JvbGwgTG9hZFxuXHQjIFx0ZW1vamlHYWxsZXkub24gRXZlbnRzLk1vdmUsIC0+XG5cdCMgXHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAyMDAwICYmIGVtb2ppc0xvYWRlZCA8IDQwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsyMDAuLi40MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAyMDAxXG5cdCMgXHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiA1MDAwICYmIGVtb2ppc0xvYWRlZCA8IDYwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs0MDAuLi42MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSA1MDAxXG5cdCMgXHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiA3NTAwICYmIGVtb2ppc0xvYWRlZCA8IDgwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs2MDAuLi44MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSA3NTAxXG5cdCMgXHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAxMDAwMCAmJiBlbW9qaXNMb2FkZWQgPCAxMDAwXG5cdCMgXHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzgwMC4uLjEwMDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAxMDAwMVxuXHQjIFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMTI1MDAgJiYgZW1vamlzTG9hZGVkIDwgMTIwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsxMDAwLi4uMTI5N11cblx0IyBcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdCMgXHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDEyNTAxXG5cblx0IyBcdCNUaW1lIExvYWRcblx0IyBcdFV0aWxzLmRlbGF5IDEsIC0+IFxuXHQjIFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA0MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdCMgXHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMjAwLi4uNDAwXVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdFV0aWxzLmRlbGF5IDIuNSwgLT4gXG5cdCMgXHRcdGlmIGVtb2ppc0xvYWRlZCA8IDYwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0IyBcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs0MDAuLi42MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0VXRpbHMuZGVsYXkgMi41LCAtPiBcblx0IyBcdFx0aWYgZW1vamlzTG9hZGVkIDwgODAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHQjIFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdCMgXHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzYwMC4uLjgwMF1cblx0IyBcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdCMgXHRVdGlscy5kZWxheSA1LjUsIC0+IFxuXHQjIFx0XHRpZiBlbW9qaXNMb2FkZWQgPCAxMDAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHQjIFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdCMgXHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzgwMC4uLjEwMDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0VXRpbHMuZGVsYXkgNywgLT4gXG5cdCMgXHRcdGlmIGVtb2ppc0xvYWRlZCA8IDEyOTcgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdCMgXHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMTAwMC4uLjEyOTddXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXG5cblx0IyBcdGZvciBlbSBpbiBmcmVxRW1vamlzQXJyYXlcblx0IyBcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdGZvciBlbSBpbiBlbW9qaXNBcnJheVswLi4uaW5jXVxuXHQjIFx0XHRsb2FkRW1vamlzKGVtKVxuXG5cblx0IyBcdGZvciBzZWMgaW4gZW1vamlTZWN0aW9uc1xuXHQjIFx0XHRpbmRleCA9IGVtb2ppU2VjdGlvbnMuaW5kZXhPZihzZWMpXG5cdCMgXHRcdHRpdGxlID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlHYWxsZXkuY29udGVudCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDppbmRleCo1MDAwICsgZXhwb3J0cy5weCg4KSwgaGVpZ2h0OjgwLCB3aWR0aDo4MDBcblx0IyBcdFx0dGl0bGUuaHRtbCA9IHNlY1xuXHQjIFx0XHR0aXRsZS5zdHlsZSA9IHtcblx0IyBcdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxMikgKyBcInB4XCJcblx0IyBcdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA2MDBcblx0IyBcdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0IyBcdFx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblx0IyBcdFx0XHQnbGV0dGVyLXNwYWNpbmcnIDogZXhwb3J0cy5weCgwLjcpICsgXCJweFwiXG5cdCMgXHRcdFx0J2NvbG9yJyA6IFwiI0E1QTZBOVwiXG5cdCMgXHRcdFx0J3RleHQtdHJhbnNmb3JtJyA6ICd1cHBlcmNhc2UnXG5cdCMgXHRcdH1cblxuXG5cdCMgZW1vamlLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHQjIFx0ZW1vamlLZXkuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXG5cblxuXHRyZXR1cm4gYm9hcmRcblxuZXhwb3J0cy5TaGVldCA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcInNoZWV0XCIsIGFycmF5KVxuXHRzaGVldCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdHNoZWV0LmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0b3ZlcmxheSA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsIDAsIDAsIC40KVwiLCBzdXBlckxheWVyOnNoZWV0LCBuYW1lOlwib3ZlcmxheVwiXG5cdG92ZXJsYXkuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdHNoZWV0cyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOnNoZWV0XG5cdHNoZWV0cy5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdGV4aXRCdXR0b24gPSBuZXcgZXhwb3J0cy5CdXR0b24gYnV0dG9uVHlwZTpcImJpZ1wiLCB0ZXh0OnNldHVwLmV4aXQsIGJsdXI6ZmFsc2UsIHN1cGVyTGF5ZXI6c2hlZXRzXG5cdGV4aXRCdXR0b24uY29uc3RyYWludHMgPSBcblx0XHRib3R0b206MTBcblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdGFjdGlvbnMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpzaGVldHMsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEyLjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LCAuODUpXCJcblxuXHRkZXNjcmlwdGlvbkJ1ZmZlciA9IDBcblx0aWYgc2V0dXAuZGVzY3JpcHRpb25cblx0XHRkZXNjcmlwdGlvbiA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJzaGVldERlc2NyaXB0aW9uXCIsIHRleHQ6c2V0dXAuZGVzY3JpcHRpb24sIHN1cGVyTGF5ZXI6YWN0aW9ucywgZm9udFNpemU6MTMsIGNvbG9yOlwiIzhGOEU5NFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIlxuXHRcdGRlc2NyaXB0aW9uLmNvbnN0cmFpbnRzID0gXG5cdFx0XHR0b3A6MjFcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR3aWR0aDpleHBvcnRzLnB0KGV4cG9ydHMud2lkdGgpIC0gMTAwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGRlc2NyaXB0aW9uQnVmZmVyID0gZXhwb3J0cy5wdChkZXNjcmlwdGlvbi5oZWlnaHQpICsgNDJcblx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWN0aW9ucywgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0ZGl2aWRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRoZWlnaHQ6MVxuXHRcdFx0dG9wOmRlc2NyaXB0aW9uQnVmZmVyXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0ZXhwb3J0cy5iZ0JsdXIoYWN0aW9ucylcblx0YWN0aW9ucy5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MTBcblx0XHR0cmFpbGluZzoxMFxuXHRcdGJvdHRvbTpbZXhpdEJ1dHRvbiwgMTBdXG5cdFx0aGVpZ2h0OjU4ICogc2V0dXAuYWN0aW9ucy5sZW5ndGggKyBkZXNjcmlwdGlvbkJ1ZmZlclxuXHRleHBvcnRzLmxheW91dCgpXG5cdGFjdHMgPSB7fVxuXHRmb3IgYWN0LCBpbmRleCBpbiBzZXR1cC5hY3Rpb25zXG5cdFx0byA9IG5ldyBMYXllciBzdXBlckxheWVyOmFjdGlvbnMsIHdpZHRoOmFjdGlvbnMud2lkdGgsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEyLjUpXG5cdFx0by5jb25zdHJhaW50cyA9IFxuXHRcdFx0dG9wOmluZGV4ICogNTggKyBkZXNjcmlwdGlvbkJ1ZmZlclxuXHRcdFx0aGVpZ2h0OjU4XG5cdFx0YnV0dG9uID0gbmV3IGV4cG9ydHMuQnV0dG9uIHRleHQ6YWN0LCBzdXBlckxheWVyOm8sIGZvbnRTaXplOjIwXG5cdFx0c3BlY2lhbENoYXIoYnV0dG9uKVxuXHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0YnV0dG9uLmNvbG9yID0gXCIjRkUzODI0XCJcblx0XHRpZiBpbmRleCAhPSBzZXR1cC5hY3Rpb25zLmxlbmd0aCAtIDFcblx0XHRcdGRpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpvLCB3aWR0aDphY3Rpb25zLndpZHRoLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRDZFM0U3XCJcblx0XHRcdGRpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdFx0XHRoZWlnaHQ6MVxuXHRcdFx0XHRib3R0b206MFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRvLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDIxNSwyMTUsMjE1LC43KVwiXG5cdFx0XHRALmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczogKGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHR0aW1lOi41XG5cdFx0by5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRALmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIilcblx0XHRcdFx0dGltZTouNVxuXHRcdFx0c2hlZXRzLmFuaW1hdGUgXG5cdFx0XHRcdHByb3BlcnRpZXM6IChtYXhZOmV4cG9ydHMuaGVpZ2h0K2V4cG9ydHMucHgoKHNldHVwLmFjdGlvbnMubGVuZ3RoICsgMykgKiA1OCkpXG5cdFx0XHRcdHRpbWU6LjNcblx0XHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAob3BhY2l0eTowKVxuXHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdFx0c2hlZXQuZGVzdHJveSgpXG5cdFx0YWN0c1thY3RdID0gb1xuXG5cdGlmIHNldHVwLmFuaW1hdGVkID09IHRydWVcblx0XHRvdmVybGF5Lm9wYWNpdHkgPSAwIFxuXHRcdHNoZWV0cy5tYXhZID0gZXhwb3J0cy5oZWlnaHQgKyBleHBvcnRzLnB4KChzZXR1cC5hY3Rpb25zLmxlbmd0aCArIDMpICogNTgpXG5cdFx0b3ZlcmxheS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjEpXG5cdFx0XHR0aW1lOi4zXG5cdFx0c2hlZXRzLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KG1heFk6ZXhwb3J0cy5oZWlnaHQpXG5cdFx0XHR0aW1lOi4zXG5cblx0b3ZlcmxheS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c2hlZXRzLmFuaW1hdGUgXG5cdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTpleHBvcnRzLmhlaWdodCtleHBvcnRzLnB4KChzZXR1cC5hY3Rpb25zLmxlbmd0aCArIDMpICogNTgpKVxuXHRcdFx0dGltZTouM1xuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdHNoZWV0LmRlc3Ryb3koKVx0XHRcblxuXHRleGl0QnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRzaGVldHMuYW5pbWF0ZSBcblx0XHRcdHByb3BlcnRpZXM6IChtYXhZOmV4cG9ydHMuaGVpZ2h0K2V4cG9ydHMucHgoKHNldHVwLmFjdGlvbnMubGVuZ3RoICsgMykgKiA1OCkpXG5cdFx0XHR0aW1lOi4zXG5cdFx0b3ZlcmxheS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOiAob3BhY2l0eTowKVxuXHRcdFx0dGltZTouM1xuXHRcdFV0aWxzLmRlbGF5IC4zLCAtPlxuXHRcdFx0c2hlZXQuZGVzdHJveSgpXG5cblx0c2hlZXQuY2FuY2VsID0gZXhpdEJ1dHRvblxuXHRzaGVldC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG5cdHNoZWV0Lm92ZXJsYXkgPSBvdmVybGF5XG5cdHNoZWV0LmFjdGlvbnMgPSBhY3RzXG5cdHJldHVybiBzaGVldFxuXG5leHBvcnRzLk5hdkJhciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcIm5hdkJhclwiLCBhcnJheSlcblx0YmFyID0gbmV3IExheWVyIG5hbWU6XCJuYXZiYXJcIlxuXHRiYXJBcmVhID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGRpdmlkZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0IyQjJCMlwiLCBuYW1lOlwibmF2IGRpdmlkZXJcIiwgc3VwZXJMYXllcjpiYXJBcmVhXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXIgXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihiYXIpXG5cdGRpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdGhlaWdodDouNVxuXHRcdGJvdHRvbTowXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRpZiBzZXR1cC5ibHVyIFxuXHRcdGJhci5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpXCJcblx0XHRleHBvcnRzLmJnQmx1cihiYXIpXG5cdGVsc2Vcblx0XHRiYXIuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCJcblx0XHRleHBvcnRzLmJnQmx1cihiYXIpXG5cdGJhci50eXBlID0gc2V0dXAudHlwZVxuXHRiYXJBcmVhLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjQ0XG5cdFx0Ym90dG9tOjBcblx0YmFyLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjY0XG5cdGZvciBsYXllciBpbiBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdFx0aWYgbGF5ZXIudHlwZSA9PSBcInN0YXR1c0JhclwiXG5cdFx0XHRAc3RhdHVzQmFyID0gbGF5ZXJcblx0XHRcdGJhci5wbGFjZUJlaGluZChAc3RhdHVzQmFyKVxuXG5cdGlmIHR5cGVvZiBzZXR1cC50aXRsZSA9PSBcInN0cmluZ1wiXG5cdFx0dGl0bGUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwibmF2QmFyVGl0bGVcIiwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC50aXRsZVxuXHRpZiB0eXBlb2Ygc2V0dXAudGl0bGUgPT0gXCJvYmplY3RcIiBcblx0XHR0aXRsZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJuYXZCYXJUaXRsZVwiLCBmb250V2VpZ2h0Olwic2VtaWJvbGRcIiwgc3VwZXJMYXllcjpiYXJBcmVhLCB0ZXh0OnNldHVwLnRpdGxlLmxhYmVsLmh0bWxcblx0XHRiYXIuc3VwZXJMYXllciA9IHNldHVwLnRpdGxlLnZpZXdcblx0c3BlY2lhbENoYXIodGl0bGUpXG5cdHRpdGxlLmNvbnN0cmFpbnRzID0gXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRib3R0b206MTJcblxuXHQjIEhhbmRsZSBSaWdodFxuXHRpZiB0eXBlb2Ygc2V0dXAucmlnaHQgPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygc2V0dXAucmlnaHQgIT0gXCJib29sZWFuXCJcblx0XHRiYXIucmlnaHQgPSBuZXcgZXhwb3J0cy5CdXR0b24gc3VwZXJMYXllcjpiYXJBcmVhLCB0ZXh0OnNldHVwLnJpZ2h0LCBmb250V2VpZ2h0OjUwMCwgY29uc3RyYWludHM6e2JvdHRvbToxMiwgdHJhaWxpbmc6OH1cblx0XHRiYXIucmlnaHQudHlwZSA9IFwiYnV0dG9uXCJcblx0XHRzcGVjaWFsQ2hhcihiYXIucmlnaHQpXG5cdGlmIHR5cGVvZiBzZXR1cC5yaWdodCA9PSBcIm9iamVjdFwiXG5cdFx0YmFyLnJpZ2h0ID0gc2V0dXAucmlnaHRcblx0XHRiYXIucmlnaHQuc3VwZXJMYXllciA9IGJhckFyZWFcblx0XHRiYXIucmlnaHQuY29uc3RyYWludHMgPSB7XG5cdFx0XHR0cmFpbGluZzo4XG5cdFx0XHRib3R0b206MTJcblx0XHR9XG5cblx0IyBIYW5kbGUgTGVmdFxuXHRpZiB0eXBlb2Ygc2V0dXAubGVmdCA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZXR1cC5sZWZ0ICE9IFwiYm9vbGVhblwiXG5cdFx0bGVhZGluZyA9IDhcblx0XHRpZiBzZXR1cC5sZWZ0LmluZGV4T2YoXCI8XCIpICE9IC0xXG5cdFx0XHRzdmcgPSBleHBvcnRzLnN2ZyhpY29uTGlicmFyeS5jaGV2cm9uKVxuXHRcdFx0YmFyLmNoZXZyb24gPSBuZXcgTGF5ZXIgd2lkdGg6c3ZnLndpZHRoLCBoZWlnaHQ6c3ZnLmhlaWdodCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgc3VwZXJMYXllcjpiYXJBcmVhXG5cdFx0XHRiYXIuY2hldnJvbi5odG1sID0gc3ZnLnN2Z1xuXHRcdFx0YmFyLmNoZXZyb24uY29uc3RyYWludHMgPSB7Ym90dG9tOjksIGxlYWRpbmc6OH1cblx0XHRcdHNldHVwLmxlZnQgPSBzZXR1cC5sZWZ0LnJlcGxhY2UoXCI8XCIsIFwiXCIpXG5cdFx0XHRsZWFkaW5nID0gW2Jhci5jaGV2cm9uLCA0XVxuXG5cdFx0YmFyLmxlZnQgPSBuZXcgZXhwb3J0cy5CdXR0b24gc3VwZXJMYXllcjpiYXJBcmVhLCB0ZXh0OnNldHVwLmxlZnQsIGZvbnRXZWlnaHQ6NTAwLCBjb25zdHJhaW50czp7Ym90dG9tOjEyLCBsZWFkaW5nOmxlYWRpbmd9XG5cdFx0XG5cdFx0YmFyLmxlZnQub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRpZiBiYXIuY2hldnJvblxuXHRcdFx0XHRiYXIuY2hldnJvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTouMjUpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdGJhci5sZWZ0Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdGlmIGJhci5jaGV2cm9uXG5cdFx0XHRcdGJhci5jaGV2cm9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjEpXG5cdFx0XHRcdFx0dGltZTouNVxuXG5cdGlmIHR5cGVvZiBzZXR1cC5sZWZ0ID09IFwib2JqZWN0XCJcblx0XHRiYXIubGVmdCA9IHNldHVwLmxlZnRcblx0XHRiYXIubGVmdC5zdXBlckxheWVyID0gYmFyQXJlYVxuXHRcdGJhci5sZWZ0LmNvbnN0cmFpbnRzID0ge1xuXHRcdFx0bGVhZGluZzo4XG5cdFx0XHRib3R0b206MTJcblx0XHR9XG5cblxuXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4gYmFyXG5cbmV4cG9ydHMuVGFiID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwidGFiXCIsIGFycmF5KVxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2UgXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdEB0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0QHRhYldpZHRoID0gNzVcblx0dGFiVmlldyA9IG5ldyBMYXllciBuYW1lOnNldHVwLmxhYmVsICsgXCIgdmlld1wiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdHRhYlZpZXcuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHR0YWJCb3ggPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpzZXR1cC5sYWJlbCArIFwiIHRhYlwiXG5cdHRhYkJveC5jb25zdHJhaW50cyA9XG5cdFx0d2lkdGg6QHRhYldpZHRoXG5cdFx0aGVpZ2h0OjQ5XG5cdGljb24gPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyNSksIGhlaWdodDpleHBvcnRzLnB4KDI1KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImljb25cIiwgc3VwZXJMYXllcjp0YWJCb3hcblx0aWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6N1xuXHRzdmdGcmFtZSA9IGV4cG9ydHMuc3ZnKHNldHVwLmljb24pXG5cdGljb24uaHRtbCA9IHN2Z0ZyYW1lLnN2Z1xuXHRpY29uLndpZHRoID0gc3ZnRnJhbWUud2lkdGhcblx0aWNvbi5oZWlnaHQgPSBzdmdGcmFtZS5oZWlnaHRcblx0bGFiZWwgPSBuZXcgZXhwb3J0cy5UZXh0IHRleHQ6c2V0dXAubGFiZWwsIHN1cGVyTGF5ZXI6dGFiQm94LCBjb2xvcjpcIiM5MjkyOTJcIiwgZm9udFNpemU6MTAsIG5hbWU6XCJsYWJlbFwiLCB0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiXG5cdGxhYmVsLmNvbnN0cmFpbnRzID0gXG5cdFx0Ym90dG9tOjJcblx0XHRob3Jpem9udGFsQ2VudGVyOmljb25cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdCMgRXhwb3J0IFRhYlxuXHR0YWJCb3gudHlwZSA9IFwidGFiXCJcblx0dGFiQm94Lmljb24gPSBpY29uXG5cdHRhYkJveC52aWV3ID0gdGFiVmlld1xuXHR0YWJCb3gubGFiZWwgPSBsYWJlbFxuXG5cdHJldHVybiB0YWJCb3hcblxuZXhwb3J0cy5UYWJCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJ0YWJCYXJcIiwgYXJyYXkpXG5cdGlmIHNldHVwLnRhYnMubGVuZ3RoID09IDBcblx0XHRkdW1teVRhYiA9IG5ldyBleHBvcnRzLlRhYlxuXHRcdGR1bW15VGFiMiA9IG5ldyBleHBvcnRzLlRhYlxuXHRcdHNldHVwLnRhYnMucHVzaCBkdW1teVRhYlxuXHRcdHNldHVwLnRhYnMucHVzaCBkdW1teVRhYjJcblx0dGFiV2lkdGggPSA3NVxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2UgXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdHRhYldpZHRoID0gNTVcblx0XHRlbHNlXG5cdFx0XHR0YWJXaWR0aCA9IDc1XG5cdHRhYkJhciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwidGFiIGJhclwiXG5cdHRhYkJhckJHID0gbmV3IEJhY2tncm91bmRMYXllciBzdXBlckxheWVyOnRhYkJhciwgbmFtZTpcInRhYkJhciBiYWNrZ3JvdW5kXCJcblx0dGFiQmFyLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0Ym90dG9tOjBcblx0XHRoZWlnaHQ6NDlcblx0dGFiQmFyQkcuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRib3R0b206MFxuXHRcdGhlaWdodDo0OVxuXHRkaXZpZGVyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNCMkIyQjJcIiwgbmFtZTpcInRhYkRpdmlkZXJcIiwgc3VwZXJMYXllcjp0YWJCYXJcblx0ZGl2aWRlci5jb25zdHJhaW50cyA9IFxuXHRcdHRvcDowXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDouNVxuXHR0YWJCYXJCb3ggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjp0YWJCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJ0YWJCYXIgYm94XCJcblx0dGFiQmFyQm94LmNvbnN0cmFpbnRzID0gXG5cdFx0aGVpZ2h0OjQ5XG5cdFx0d2lkdGg6c2V0dXAudGFicy5sZW5ndGggKiB0YWJXaWR0aFxuXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHRzZXRBY3RpdmUgPSAodGFiSW5kZXgpIC0+XG5cdFx0Zm9yIHRhYiwgaW5kZXggaW4gc2V0dXAudGFic1xuXHRcdFx0aWYgaW5kZXggPT0gdGFiSW5kZXhcblx0XHRcdFx0ZXhwb3J0cy5jaGFuZ2VGaWxsKHRhYi5pY29uLCBleHBvcnRzLmNvbG9yKHNldHVwLmFjdGl2ZUNvbG9yKSlcblx0XHRcdFx0dGFiLmxhYmVsLmNvbG9yID0gZXhwb3J0cy5jb2xvcihzZXR1cC5hY3RpdmVDb2xvcilcblx0XHRcdFx0dGFiLnZpZXcudmlzaWJsZSA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZXhwb3J0cy5jaGFuZ2VGaWxsKHRhYi5pY29uLCBleHBvcnRzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpKVxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBleHBvcnRzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpXG5cdFx0XHRcdHRhYi52aWV3LnZpc2libGUgPSBmYWxzZVxuXG5cdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHQjQ2hlY2sgZm9yIHZhaWxkIHRhYiBvYmplY3Rcblx0XHRpZiB0YWIudHlwZSAhPSBcInRhYlwiXG5cdFx0XHRlcnJvcih0YWIuaWQsIDUpXG5cblx0XHR0YWJCYXJCb3guYWRkU3ViTGF5ZXIodGFiKVxuXHRcdCMgQ2hhbmdlIGNvbG9yc1xuXHRcdGV4cG9ydHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgZXhwb3J0cy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKSlcblx0XHR0YWIubGFiZWwuY29sb3IgPSBleHBvcnRzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpXG5cdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gc2V0dXAuYmFja2dyb3VuZENvbG9yXG5cdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LCAuOSlcIlxuXHRcdFx0ZXhwb3J0cy5iZ0JsdXIodGFiQmFyQkcpXG5cblx0XHRpZiBpbmRleCAhPSAwXG5cdFx0XHR0YWIuY29uc3RyYWludHMgPSBcblx0XHRcdFx0bGVhZGluZzpzZXR1cC50YWJzW2luZGV4IC0gMV1cblx0XHRcdGV4cG9ydHMubGF5b3V0KClcblxuXHRcdHRhYi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHRhYkluZGV4ID0gQC54IC8gZXhwb3J0cy5weCh0YWJXaWR0aClcblx0XHRcdHNldEFjdGl2ZSh0YWJJbmRleClcblx0dGFiQmFyQm94LmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdHNldEFjdGl2ZShzZXR1cC5zdGFydClcdFxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIHRhYkJhclxuXG5leHBvcnRzLlRleHQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJ0ZXh0XCIsIGFycmF5KVxuXHRleGNlcHRpb25zID0gT2JqZWN0LmtleXMoc2V0dXApXG5cdHRleHRMYXllciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLm5hbWVcblx0dGV4dExheWVyLnR5cGUgPSBcInRleHRcIlxuXHR0ZXh0TGF5ZXIuaHRtbCA9IHNldHVwLnRleHRcblx0Zm9yIHByb3AgaW4gZGVmYXVsdHMuZnJhbWVyUHJvcHNcblx0XHRpZiBzZXR1cFtwcm9wXVxuXHRcdFx0aWYgcHJvcCA9PSBcImNvbG9yXCJcblx0XHRcdFx0c2V0dXBbcHJvcF0gPSBleHBvcnRzLmNvbG9yKHNldHVwW3Byb3BdKVxuXHRcdFx0dGV4dExheWVyW3Byb3BdID0gc2V0dXBbcHJvcF1cblx0Zm9yIHByb3AgaW4gZGVmYXVsdHMuc3R5bGVQcm9wc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwibGluZUhlaWdodFwiICYmIHNldHVwW3Byb3BdID09IFwiYXV0b1wiXG5cdFx0XHRcdHNldHVwW3Byb3BdID0gIHNldHVwW1wiZm9udFNpemVcIl1cblx0XHRcdGlmIHByb3AgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0c3dpdGNoIHNldHVwW3Byb3BdXG5cdFx0XHRcdFx0d2hlbiBcInVsdHJhdGhpblwiIHRoZW4gc2V0dXBbcHJvcF0gPSAxMDBcblx0XHRcdFx0XHR3aGVuIFwidGhpblwiIHRoZW4gc2V0dXBbcHJvcF0gPSAyMDBcblx0XHRcdFx0XHR3aGVuIFwibGlnaHRcIiB0aGVuIHNldHVwW3Byb3BdID0gMzAwXG5cdFx0XHRcdFx0d2hlbiBcInJlZ3VsYXJcIiB0aGVuIHNldHVwW3Byb3BdID0gNDAwXG5cdFx0XHRcdFx0d2hlbiBcIm1lZGl1bVwiIHRoZW4gc2V0dXBbcHJvcF0gPSA1MDBcblx0XHRcdFx0XHR3aGVuIFwic2VtaWJvbGRcIiB0aGVuIHNldHVwW3Byb3BdID0gNjAwXG5cdFx0XHRcdFx0d2hlbiBcImJvbGRcIiB0aGVuIHNldHVwW3Byb3BdID0gNzAwXG5cdFx0XHRcdFx0d2hlbiBcImJsYWNrXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDgwMFxuXHRcdFx0aWYgc2V0dXBbcHJvcF0gPT0gcGFyc2VJbnQoc2V0dXBbcHJvcF0sIDEwKSAmJiBzZXR1cFtwcm9wXSA8IDk5XG5cdFx0XHRcdHNldHVwW3Byb3BdID0gZXhwb3J0cy5weChzZXR1cFtwcm9wXSkgKyBcInB4XCJcblx0XHRcdHRleHRMYXllci5zdHlsZVtwcm9wXSA9IHNldHVwW3Byb3BdXG5cdHRleHRGcmFtZSA9IHRleHRBdXRvU2l6ZSh0ZXh0TGF5ZXIpXG5cdHRleHRMYXllci5wcm9wcyA9IChoZWlnaHQ6dGV4dEZyYW1lLmhlaWdodCwgd2lkdGg6dGV4dEZyYW1lLndpZHRoKVxuXHR0ZXh0TGF5ZXIuY29uc3RyYWludHMgPSBzZXR1cC5jb25zdHJhaW50c1xuXHRleHBvcnRzLmxheW91dCgpXG5cdHJldHVybiB0ZXh0TGF5ZXJcblxuaWNvbkxpYnJhcnkgPSB7XG5cdGFjdGl2aXR5OiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE2KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTYgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Tb2NjZXIgQmFsbDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz5cblx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHRcdDwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTc5LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdTb2NjZXItQmFsbCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTc5LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8bWFzayBpZD0nbWFzay0yJyBza2V0Y2g6bmFtZT0nTWFzaycgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHRcdFx0XHRcdDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHRcdFx0XHRcdDwvbWFzaz5cblx0XHRcdFx0XHRcdFx0PHVzZSBpZD0nTWFzaycgc3Ryb2tlPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTIuMTIwMzA0NiBMMTIuODU3MzM4NCw4IEwxMy4zNzIzNzY1LDguODU3MTY3MyBMNi41MTUwMzgwNywxMi45Nzc0NzE5IEw2LDEyLjEyMDMwNDYgTDYsMTIuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjg0OTY0OCw4LjcyNjA1NTEgTDE5LjEwMDExMDMsNS4zNDUxMDkwMSBMMTkuNTIyNzI4NSw2LjI1MTQxNjggTDEyLjI3MjI2NjIsOS42MzIzNjI4OSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDMuMTIwMzA0NiBMMTIuODU3MzM4NCwtMSBMMTMuMzcyMzc2NSwtMC4xNDI4MzI2OTkgTDYuNTE1MDM4MDcsMy45Nzc0NzE5IEw2LDMuMTIwMzA0NiBMNiwzLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNLTEsNy4xMjAzMDQ2IEw1Ljg1NzMzODQxLDMgTDYuMzcyMzc2NDgsMy44NTcxNjczIEwtMC40ODQ5NjE5MjUsNy45Nzc0NzE5IEwtMSw3LjEyMDMwNDYgTC0xLDcuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nNCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nNSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzExLjUnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzEyJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDQuODU3MTY3MyBMMTEuODU3MzM4NCw4Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsOC4xMjAzMDQ2IEw1LjUxNTAzODA3LDQgTDUsNC44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSwxMi44NTcxNjczIEwxMS44NTczMzg0LDE2Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsMTYuMTIwMzA0NiBMNS41MTUwMzgwNywxMiBMNSwxMi44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xJyBmaWxsPScjRDhEOEQ4JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEtQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjQ1NzcxMTg5LDMuMTk1MDQ3MzkgTDcuMzU1MTQ0ODQsNi4xMzIxODMzMyBMNC41MzAwNjc2LDYuOTQyMjYxMiBMMi44ODY2NDA4OSw0LjUwNTc4MDkgTDQuNjk2MDI0NTcsMi4xODk4NzU0MSBMNy40NTc3MTE4OSwzLjE5NTA0NzM5JyBpZD0nUG9seWdvbi0xLUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjQ1NzcxMTg5LDExLjE5NTA0NzQgTDcuMzU1MTQ0ODQsMTQuMTMyMTgzMyBMNC41MzAwNjc2LDE0Ljk0MjI2MTIgTDIuODg2NjQwODksMTIuNTA1NzgwOSBMNC42OTYwMjQ1NywxMC4xODk4NzU0IEw3LjQ1NzcxMTg5LDExLjE5NTA0NzQnIGlkPSdQb2x5Z29uLTEtQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0IEwxNC40NDA2MDMxLDMuMDA5NzI5ODggTDExLjYxNTUyNTgsMy44MTk4MDc3NCBMOS45NzIwOTkxMiwxLjM4MzMyNzQ1IEwxMS43ODE0ODI4LC0wLjkzMjU3ODA1IEwxNC41NDMxNzAxLDAuMDcyNTkzOTMxNCcgaWQ9J1BvbHlnb24tMS1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0YW5pbWFsczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+R3JvdXA8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTcuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0naWNfRm9vZCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTE4LjAwMDAwMCwgNjQwLjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nR3JvdXAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjY4Mzc3NTM3LDEuMzgxNTY2NDYgQzYuMjM5MjYwNjYsMS4xMzYyNCA2Ljg1MzcyMDA1LDEgNy41LDEgQzguMTQ2Mjc5OTUsMSA4Ljc2MDczOTM0LDEuMTM2MjQgOS4zMTYyMjQ2MywxLjM4MTU2NjQ2IEM5LjgwODc5Mjc1LDAuNTYyMzU5MDE5IDEwLjgyNTU4ODgsMCAxMiwwIEMxMy42NTY4NTQyLDAgMTUsMS4xMTkyODgxMyAxNSwyLjUgQzE1LDMuNTU3MTM5OCAxNC4yMTI2MjQ2LDQuNDYxMDI4NDMgMTMuMDk5OTIyNiw0LjgyNjYyNTE0IEMxNC4yNDk2NTI4LDUuNjQxODU0MjIgMTUsNi45ODMzMDA2MiAxNSw4LjUgQzE1LDEwLjcxNjcxNDQgMTMuMzk3MTg3MywxMi41NTkwNzE5IDExLjI4NzI2NzEsMTIuOTMxMzY3MyBDMTAuNDg2NzI0OCwxNC4xNzU3NzAzIDkuMDg5NjE2OTYsMTUgNy41LDE1IEM1LjkxMDM4MzA0LDE1IDQuNTEzMjc1MjQsMTQuMTc1NzcwMyAzLjcxMjczMjkxLDEyLjkzMTM2NzMgQzEuNjAyODEyNjgsMTIuNTU5MDcxOSAwLDEwLjcxNjcxNDQgMCw4LjUgQzAsNi45ODMzMDA2MiAwLjc1MDM0NzI0NCw1LjY0MTg1NDIyIDEuOTAwMDc3NDEsNC44MjY2MjUxNCBDMC43ODczNzU0NDUsNC40NjEwMjg0MyAwLDMuNTU3MTM5OCAwLDIuNSBDMCwxLjExOTI4ODEzIDEuMzQzMTQ1NzUsMCAzLDAgQzQuMTc0NDExMjIsMCA1LjE5MTIwNzI1LDAuNTYyMzU5MDE5IDUuNjgzNzc1MzcsMS4zODE1NjY0NiBaJyBpZD0nT3ZhbC04Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNzM4MzQyMjgsMTIgQzUuODYyOTA5NzksMTIgNi4xNDY0MjM1MywxMiA2LjE0NjQyMzUzLDEyIEM2LjE0NjQyMzUzLDEyIDYuNDMyMTU2OTYsMTIuNDQyNjEyMyA2LjUyNDY1ODIsMTIuNDkxOTczOSBDNi42NjQ1NTYwMSwxMi41NjY2Mjc3IDcsMTIuNDkxOTczOSA3LDEyLjQ5MTk3MzkgTDcsMTIgTDgsMTIgTDgsMTIuNDkxOTczOSBMOC40OTc5OTIyOCwxMi40OTE5NzM5IEw4Ljg0MzAxNzY5LDEyIEw5LjM5MTg0NTcsMTIgQzkuMzkxODQ1NywxMiA4Ljk5NTk4NDU3LDEyLjk4Mzk0NzggOC40OTc5OTIyOCwxMi45ODM5NDc4IEw2LjYwNzAyNDA3LDEyLjk4Mzk0NzggQzYuMjE0MDQ4MTMsMTIuOTgzOTQ3OCA1LjQ1OTk2MDk0LDEyIDUuNzM4MzQyMjgsMTIgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5LTInPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdPdmFsLTE0JyBjeD0nMTAuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdPdmFsLTE0LUNvcHknIGN4PSc0LjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEyLjY5OTk5NjksNSBDMTIuNjk5OTk2OSwzLjA2NzAwMzM4IDExLjEzMjk5MzYsMS41IDkuMTk5OTk2OTUsMS41JyBpZD0nT3ZhbC0xNic+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjUsNSBDNS41LDMuMDY3MDAzMzggMy45MzI5OTY2MiwxLjUgMiwxLjUnIGlkPSdPdmFsLTE2LUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuNzUwMDAwLCAzLjI1MDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMy43NTAwMDAsIC0zLjI1MDAwMCkgJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyB4PSc3JyB5PScxMScgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDEwIEw2LjUsMTAgTDYuNDk5OTk5OTksOS41IEw4LjUwMDAwMDA1LDkuNSBMOC41MDAwMDAwNSwxMCBMOSwxMCBMOSwxMC41IEw4LjUsMTAuNSBMOC41LDExIEw2LjUsMTEgTDYuNSwxMC41IEw2LDEwLjUgTDYsMTAgWicgaWQ9J1BhdGgnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0Y2hldnJvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMTNweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTMgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkJhY2sgQ2hldnJvbjwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J05hdmlnYXRpb24tQmFyL0JhY2snIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC04LjAwMDAwMCwgLTMxLjAwMDAwMCknIGZpbGw9JyMwMDc2RkYnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J004LjUsNDIgTDE5LDMxLjUgTDIxLDMzLjUgTDEyLjUsNDIgTDIxLDUwLjUgTDE5LDUyLjUgTDguNSw0MiBaJyBpZD0nQmFjay1DaGV2cm9uJz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRlbW9qaSA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMjApfXB4JyB2aWV3Qm94PScwIDAgMjAgMjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPkVtb2ppPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTE4MS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nQm90dG9tLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDE3MC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J002Ni43NSwzMC41IEM3Mi4xMzQ3NzYzLDMwLjUgNzYuNSwyNi4xMzQ3NzYzIDc2LjUsMjAuNzUgQzc2LjUsMTUuMzY1MjIzNyA3Mi4xMzQ3NzYzLDExIDY2Ljc1LDExIEM2MS4zNjUyMjM3LDExIDU3LDE1LjM2NTIyMzcgNTcsMjAuNzUgQzU3LDI2LjEzNDc3NjMgNjEuMzY1MjIzNywzMC41IDY2Ljc1LDMwLjUgWiBNNjYuNzUsMjkuNSBDNzEuNTgyNDkxNiwyOS41IDc1LjUsMjUuNTgyNDkxNiA3NS41LDIwLjc1IEM3NS41LDE1LjkxNzUwODQgNzEuNTgyNDkxNiwxMiA2Ni43NSwxMiBDNjEuOTE3NTA4NCwxMiA1OCwxNS45MTc1MDg0IDU4LDIwLjc1IEM1OCwyNS41ODI0OTE2IDYxLjkxNzUwODQsMjkuNSA2Ni43NSwyOS41IFogTTYzLjc1LDE5IEM2NC40NDAzNTU5LDE5IDY1LDE4LjQ0MDM1NTkgNjUsMTcuNzUgQzY1LDE3LjA1OTY0NDEgNjQuNDQwMzU1OSwxNi41IDYzLjc1LDE2LjUgQzYzLjA1OTY0NDEsMTYuNSA2Mi41LDE3LjA1OTY0NDEgNjIuNSwxNy43NSBDNjIuNSwxOC40NDAzNTU5IDYzLjA1OTY0NDEsMTkgNjMuNzUsMTkgWiBNNjkuNzUsMTkgQzcwLjQ0MDM1NTksMTkgNzEsMTguNDQwMzU1OSA3MSwxNy43NSBDNzEsMTcuMDU5NjQ0MSA3MC40NDAzNTU5LDE2LjUgNjkuNzUsMTYuNSBDNjkuMDU5NjQ0MSwxNi41IDY4LjUsMTcuMDU5NjQ0MSA2OC41LDE3Ljc1IEM2OC41LDE4LjQ0MDM1NTkgNjkuMDU5NjQ0MSwxOSA2OS43NSwxOSBaIE01OS44ODc2MzM0LDIyLjE2NDE0NDQgQzU5LjYzOTAzMTYsMjEuMzgzMTM0IDYwLjA2NTkxOCwyMC45Nzg1MTU2IDYwLjg1MzA5NTEsMjEuMjMyOTMwNCBDNjAuODUzMDk1MSwyMS4yMzI5MzA0IDYzLjA5Mzc1MDMsMjIuMjEyNSA2Ni43NTAwMDAxLDIyLjIxMjUgQzcwLjQwNjI0OTksMjIuMjEyNSA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IEM3My40Mjg3MTYyLDIwLjk2NjIxNTMgNzMuODgxMjQ2MywyMS40MDQ0MDk3IDczLjYwNTg0NzcsMjIuMTgwNzQzNyBDNzMuNjA1ODQ3NywyMi4xODA3NDM3IDcyLjYsMjcuNTc1IDY2Ljc1LDI3LjU3NSBDNjAuOSwyNy41NzUgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBaIE02Ni43NSwyMy4xODc1IEM2NC4wNjg3NSwyMy4xODc1IDYxLjg1NDQwNTUsMjIuNDczNzgyMSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgQzYxLjMyNzMwMTksMjIuMzI5NDggNjEuMTc4MTIzMywyMi41NzIxNjE1IDYxLjU2Mzk1NTUsMjIuOTU3MDc1IEM2MS41NjM5NTU1LDIyLjk1NzA3NSA2Mi4zNjI1LDI0LjY1IDY2Ljc1LDI0LjY1IEM3MS4xMzc1LDI0LjY1IDcxLjk1MDg1MDMsMjIuOTQzODMwNCA3MS45NTA4NTAzLDIyLjk0MzgzMDQgQzcyLjMwOTM2NTksMjIuNTM5OTI3OCA3Mi4xNjkwNzkzLDIyLjMzNTk4NDQgNzEuNjM1NDI3MywyMi40NzYzNDkgQzcxLjYzNTQyNzMsMjIuNDc2MzQ5IDY5LjQzMTI1LDIzLjE4NzUgNjYuNzUsMjMuMTg3NSBaJyBpZD0nRW1vamknPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRkZWxldGU6IHtcblx0XHRvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaIE0zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzOC43MDk3MiwyMS43MDk3MTk1IEMzMzguMzE3NzUyLDIxLjMxNzc1MjIgMzM4LjMxODk2NSwyMC42ODEwMzQ5IDMzOC43MDk3MiwyMC4yOTAyODA1IEwzNDQuNjQzMjQ1LDE0LjM1Njc1NDcgQzM0NC44NDAyNzYsMTQuMTU5NzI0NSAzNDUuMjI1NjM5LDE0IDM0NS40OTM3NDEsMTQgTDM1NS45OTcyMzksMTQgQzM1Ny4xMDMzMzMsMTQgMzU3Ljk5OTk5OSwxNC44OTcwNjAxIDM1Ny45OTk5OTksMTYuMDA1ODU4NiBMMzU3Ljk5OTk5OSwyNS45OTQxNDEyIEMzNTcuOTk5OTk5LDI3LjEwMTk0NjQgMzU3LjEwNjQ1NywyNy45OTk5OTk5IDM1NS45OTcyMzksMjcuOTk5OTk5OSBMMzQ1LjQ5Mzc0MSwyOCBDMzQ1LjIyMTA1NiwyOCAzNDQuODQwNjQzLDI3Ljg0MDY0MzEgMzQ0LjY0MzI0NiwyNy42NDMyNDUzIEwzMzguNzA5NzIsMjEuNzA5NzE5NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0Zm9vZCA6ICBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Gb29kPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDguMDAwMDAwLCAtNjM3LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J0Zvb2QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDIyOS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS41LDE1LjUgTDEsMTUuNSBMMCw1IEw2LjUsNSBMNi4yNjM2MDkzMyw3LjQ4MjEwMjAyJyBpZD0nRHJpbmsnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LjAxMDc3NTQ1LDEuOTY5MzAwOTggTDYuNTE1NzEzNTIsNS4yMjI3MDUzOSBMNS43MTkwODE4NCw1LjY3OTQ3ODEyIEw1LjAzODkwMDksMS45NjkzMDA5OCBMNC44NTU1NzI0NywxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywxLjk2OTMwMDk4IEw2LjAxMDc3NTQ1LDEuOTY5MzAwOTggWicgaWQ9J1N0cmF3JyBmaWxsPScjNEE1NDYxJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg2Ljg1NTU3MiwgMy4zMjQzOTApIHJvdGF0ZSgyNC4wMDAwMDApIHRyYW5zbGF0ZSgtNi44NTU1NzIsIC0zLjMyNDM5MCkgJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J0JvdHRvbS1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgeD0nMycgeT0nMTQnIHdpZHRoPScxMC41JyBoZWlnaHQ9JzEuNScgcng9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMS41LDEyLjUwMjQ0MDggQzEuNSwxMS45NDg4MDggMS45NDkxNjkxNiwxMS41IDIuNDkyNjg3MjMsMTEuNSBMMTQuMDA3MzEyOCwxMS41IEMxNC41NTU1NTg4LDExLjUgMTUsMTEuOTQ2OTQ5OSAxNSwxMi41MDI0NDA4IEwxNSwxMi45OTc1NTkyIEMxNSwxMy41NTExOTIgMTQuNTUwODMwOCwxNCAxNC4wMDczMTI4LDE0IEwyLjQ5MjY4NzIzLDE0IEMxLjk0NDQ0MTIxLDE0IDEuNSwxMy41NTMwNTAxIDEuNSwxMi45OTc1NTkyIEwxLjUsMTIuNTAyNDQwOCBaIE0zLjkzMzAwMDAzLDExLjgzOTI3MjcgQzMuNDE3NzE4MzQsMTEuNjUxODk3NiAzLjQ0NDgzNjk3LDExLjUgMy45OTU1Nzc1LDExLjUgTDEzLjAwNDQyMjUsMTEuNSBDMTMuNTU0MjY0OCwxMS41IDEzLjU4NjYwNjEsMTEuNjUwMzI1MSAxMy4wNjcsMTEuODM5MjcyNyBMOC41LDEzLjUgTDMuOTMzMDAwMDMsMTEuODM5MjcyNyBaJyBpZD0nJnF1b3Q7UGF0dHkmcXVvdDsnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMi41LDEwLjUgTDEzLjUsMTAuNSBMMTUsMTEuNSBMMSwxMS41IEwyLjUsMTAuNSBaJyBpZD0nQ2hlZXNlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTguMjUsMTAuNSBDMTEuNDI1NjM3MywxMC41IDE0LDEwLjMyODQyNzEgMTQsOS41IEMxNCw4LjY3MTU3Mjg4IDExLjQyNTYzNzMsOCA4LjI1LDggQzUuMDc0MzYyNjksOCAyLjUsOC42NzE1NzI4OCAyLjUsOS41IEMyLjUsMTAuMzI4NDI3MSA1LjA3NDM2MjY5LDEwLjUgOC4yNSwxMC41IFonIGlkPSdUb3AtQnVuJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43NSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRmbGFnczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxMSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE1KX1weCcgdmlld0JveD0nMCAwIDExIDE1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+RmxhZzwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjc1LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGbGFnJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNzUuMDAwMDAwLCAyMzEuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1BvbGUnIGZpbGw9JyM0QTU0NjEnIHg9JzAnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzE0Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEsMSBDMSwxIDEuMjUsMiAzLjUsMiBDNS43NSwyIDYsMC43NDk5OTk5OTggOCwwLjc1IEMxMCwwLjc0OTk5OTk5OCAxMCwxLjUgMTAsMS41IEwxMCw3LjUgQzEwLDcuNSAxMCw2LjUgOCw2LjUgQzYsNi41IDQuODA2MjM5MTEsOCAzLjUsOCBDMi4xOTM3NjA4OSw4IDEsNyAxLDcgTDEsMSBaJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZnJlcXVlbnQ6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlJlY2VudDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTUuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1JlY2VudCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTUuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nQm9keScgc3Ryb2tlPScjNEE1NDYxJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjUsNy41IEw3LjUsOC41IEw4LjUsOC41IEw4LjUsMiBMNy41LDIgTDcuNSw3LjUgTDQsNy41IEw0LDguNSBMOC41LDguNSBMOC41LDcuNSBMNy41LDcuNSBaJyBpZD0nSGFuZHMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0a2V5Ym9hcmQgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDMyLjUpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgyMy41KX1weCcgdmlld0JveD0nMCAwIDY1IDQ3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUG9ydHJhaXQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDM2LjAwMDAwMCwgLTE5NTYuMDAwMDAwKScgZmlsbD0nIzAwMDAwMCc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQtTGlnaHQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAxNDIyLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZC1kb3duJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDEyLjAwMDAwMCwgNTAwLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNODcuMDAxMzMyLDM0IEM4OC4xMDUxNjU5LDM0IDg5LDM0Ljg5OTcxMjcgODksMzUuOTkzMjg3NCBMODksNjEuMDA2NzEyNiBDODksNjIuMTA3NTc0OCA4OC4xMDU4NzU5LDYzIDg3LjAwMTMzMiw2MyBMMjUuOTk4NjY4LDYzIEMyNC44OTQ4MzQxLDYzIDI0LDYyLjEwMDI4NzMgMjQsNjEuMDA2NzEyNiBMMjQsMzUuOTkzMjg3NCBDMjQsMzQuODkyNDI1MiAyNC44OTQxMjQxLDM0IDI1Ljk5ODY2OCwzNCBMODcuMDAxMzMyLDM0IFogTTI2LDM2IEwyNiw2MSBMODcsNjEgTDg3LDM2IEwyNiwzNiBaIE03OSw0MCBMODMsNDAgTDgzLDQ0IEw3OSw0NCBMNzksNDAgWiBNNzIsNDAgTDc2LDQwIEw3Niw0NCBMNzIsNDQgTDcyLDQwIFogTTY1LDQwIEw2OSw0MCBMNjksNDQgTDY1LDQ0IEw2NSw0MCBaIE01OCw0MCBMNjIsNDAgTDYyLDQ0IEw1OCw0NCBMNTgsNDAgWiBNNTEsNDAgTDU1LDQwIEw1NSw0NCBMNTEsNDQgTDUxLDQwIFogTTQ0LDQwIEw0OCw0MCBMNDgsNDQgTDQ0LDQ0IEw0NCw0MCBaIE0zNyw0MCBMNDEsNDAgTDQxLDQ0IEwzNyw0NCBMMzcsNDAgWiBNMzAsNDAgTDM0LDQwIEwzNCw0NCBMMzAsNDQgTDMwLDQwIFogTTc5LDQ3IEw4Myw0NyBMODMsNTEgTDc5LDUxIEw3OSw0NyBaIE03Miw0NyBMNzYsNDcgTDc2LDUxIEw3Miw1MSBMNzIsNDcgWiBNNjUsNDcgTDY5LDQ3IEw2OSw1MSBMNjUsNTEgTDY1LDQ3IFogTTU4LDQ3IEw2Miw0NyBMNjIsNTEgTDU4LDUxIEw1OCw0NyBaIE01MSw0NyBMNTUsNDcgTDU1LDUxIEw1MSw1MSBMNTEsNDcgWiBNNDQsNDcgTDQ4LDQ3IEw0OCw1MSBMNDQsNTEgTDQ0LDQ3IFogTTM3LDQ3IEw0MSw0NyBMNDEsNTEgTDM3LDUxIEwzNyw0NyBaIE0zMCw0NyBMMzQsNDcgTDM0LDUxIEwzMCw1MSBMMzAsNDcgWiBNNzksNTQgTDgzLDU0IEw4Myw1OCBMNzksNTggTDc5LDU0IFogTTcyLDU0IEw3Niw1NCBMNzYsNTggTDcyLDU4IEw3Miw1NCBaIE00NCw1NCBMNjksNTQgTDY5LDU4IEw0NCw1OCBMNDQsNTQgWiBNMzcsNTQgTDQxLDU0IEw0MSw1OCBMMzcsNTggTDM3LDU0IFogTTMwLDU0IEwzNCw1NCBMMzQsNTggTDMwLDU4IEwzMCw1NCBaIE00NC4zMTYzNDk4LDY5Ljk3NzEwNDcgQzQzLjM2ODQyMjUsNzAuNTQyMDM0MiA0My4zMzM4NzIxLDcxLjUwOTY0OTUgNDQuMjM3ODIxNyw3Mi4xMzczOTEyIEw1NS4zNjIxNTM5LDc5Ljg2MjYwODggQzU2LjI2NjcxMTMsODAuNDkwNzcyNiA1Ny43MzM4OTY1LDgwLjQ5MDM1MDUgNTguNjM3ODQ2MSw3OS44NjI2MDg4IEw2OS43NjIxNzgzLDcyLjEzNzM5MTIgQzcwLjY2NjczNTcsNzEuNTA5MjI3NCA3MC42NDgwMTIsNzAuNTIwNTIwNCA2OS43MTE1MTg3LDY5LjkyMzQxNjYgTDY5Ljk4MjU3MzEsNzAuMDk2MjM5NiBDNjkuNTE4MTMzMyw2OS44MDAxMTUgNjguNzc4MjU1Nyw2OS44MTI2NDkzIDY4LjMyNjEzMDcsNzAuMTI2OTMyMyBMNTcuODE1NDk5OSw3Ny40MzMxMjYzIEM1Ny4zNjUxMTE3LDc3Ljc0NjIwMiA1Ni42MjgxNjUsNzcuNzM4MTc4NiA1Ni4xNzYyMTAzLDc3LjQxOTk0MjQgTDQ1LjgzODYxMzcsNzAuMTQwODk3NyBDNDUuMzgzNjQ3Miw2OS44MjA1NDA3IDQ0LjYzNzUwMzksNjkuNzg1NzA4OCA0NC4xNTY2MzkzLDcwLjA3MjI4NjIgTDQ0LjMxNjM0OTgsNjkuOTc3MTA0NyBaJyBpZD0nU2hhcGUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRvYmplY3RzIDogXG5cdFx0XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDExKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTEgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5MaWdodGJ1bGI8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDQuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nTGlnaHRidWxiJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDQuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LDEwLjQwMDI5MDQgQzkuNzgwODM3OTUsOS40ODk5MzQ5MSAxMSw3LjYzNzM0MjczIDExLDUuNSBDMTEsMi40NjI0MzM4OCA4LjUzNzU2NjEyLDAgNS41LDAgQzIuNDYyNDMzODgsMCAwLDIuNDYyNDMzODggMCw1LjUgQzAsNy42MzczNDI3MyAxLjIxOTE2MjA1LDkuNDg5OTM0OTEgMywxMC40MDAyOTA0IEwzLDE0LjAwMjA4NjkgQzMsMTUuMTAxNzM5NCAzLjg5NzYxNjAyLDE2IDUuMDA0ODgxNSwxNiBMNS45OTUxMTg1LDE2IEM3LjEwNjEwMDIsMTYgOCwxNS4xMDU1MDM4IDgsMTQuMDAyMDg2OSBMOCwxMC40MDAyOTA0IFonIGlkPSdPdmFsLTE3JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzMnIHk9JzEyJyB3aWR0aD0nNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzQnIHk9JzEzLjUnIHdpZHRoPScxLjUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSw4LjUgQzUsOC41IDMuNDk5OTk5OTksNy41MDAwMDAwMSA0LDcgQzQuNTAwMDAwMDEsNi40OTk5OTk5OSA1LDcuNjY2NjY2NjcgNS41LDggQzUuNSw4IDYuNSw2LjUwMDAwMDAxIDcsNyBDNy41LDcuNDk5OTk5OTkgNiw4LjUgNiw4LjUgTDYsMTEgTDUsMTEgTDUsOC41IFonIGlkPSdSZWN0YW5nbGUtNTInIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdHNoaWZ0IDoge1xuXHRcdG9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjAgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMjEuNzA1MjM4OCwxMy4yMDUyMzg4IEMyMS4zMTU3NDYyLDEyLjgxNTc0NjIgMjAuNjg1NzU1OSwxMi44MTQyNDQxIDIwLjI5NDc2MTIsMTMuMjA1MjM4OCBMMTEuOTE2MDc2NywyMS41ODM5MjMzIEMxMS4xMzM5OTkxLDIyLjM2NjAwMDkgMTEuMzk4MjYwNiwyMyAxMi40OTc5MTMxLDIzIEwxNi41LDIzIEwxNi41LDI4LjAwOTIyMiBDMTYuNSwyOC41NTY0MTM2IDE2Ljk0NjMxMTQsMjkgMTcuNDk3NTQ0NiwyOSBMMjQuNTAyNDU1NCwyOSBDMjUuMDUzMzg0LDI5IDI1LjUsMjguNTQ5MDI0OCAyNS41LDI4LjAwOTIyMiBMMjUuNSwyMyBMMjkuNTAyMDg2OSwyMyBDMzAuNjA1NTAzOCwyMyAzMC44NjY4MjQsMjIuMzY2ODI0IDMwLjA4MzkyMzMsMjEuNTgzOTIzMyBMMjEuNzA1MjM4OCwxMy4yMDUyMzg4IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdG9mZiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjAgMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEyOS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTIxLjY3MTkwMDgsMTIuMjMyNTg5OCBDMjEuMzAxMDMyLDExLjgyNzk5MTYgMjAuNjk0Njg5MiwxMS44MzM0NzMxIDIwLjMyODgxOTUsMTIuMjMyNTg5OCBMMTEuNjk0NzAyMywyMS42NTEyOTgzIEMxMC43NTg3NDQxLDIyLjY3MjMwOCAxMS4xMjg1NTQxLDIzLjUgMTIuNTA5Nzc1MSwyMy41IEwxNS45OTk5OTk5LDIzLjUwMDAwMDIgTDE1Ljk5OTk5OTksMjguMDAxNDI0MSBDMTUuOTk5OTk5OSwyOC44MjkwNjQ4IDE2LjY3MTY1NTksMjkuNTAwMDAwMSAxNy40OTcxMDEsMjkuNTAwMDAwMSBMMjQuNTAyODk5MiwyOS41MDAwMDAxIEMyNS4zMjk3MjUzLDI5LjUwMDAwMDEgMjYuMDAwMDAwMywyOC44MzQ5NzAzIDI2LjAwMDAwMDMsMjguMDAxNDI0MSBMMjYuMDAwMDAwMywyMy41MDAwMDAxIEwyOS40OTAyMjUxLDIzLjUwMDAwMDIgQzMwLjg3NjMzNTcsMjMuNTAwMDAwMiAzMS4yNDM5NTIxLDIyLjY3NTE5MTYgMzAuMzA1NDE2MSwyMS42NTEyOTg1IEwyMS42NzE5MDA4LDEyLjIzMjU4OTggWiBNMjEuMzQxNzQ4LDE0LjM2NDUzMTYgQzIxLjE1MzAwNTYsMTQuMTYzMjA2NCAyMC44NDMzNTE1LDE0LjE2NzA5MTQgMjAuNjU4MjUxNCwxNC4zNjQ1MzE2IEwxMy41LDIxLjk5OTk5OTggTDE3LjUwMDAwMDEsMjEuOTk5OTk5OSBMMTcuNTAwMDAwMiwyNy41MDg5OTU2IEMxNy41MDAwMDAyLDI3Ljc4MDE3MDMgMTcuNzMyOTAyNywyOC4wMDAwMDA4IDE4LjAwMzQyMjksMjguMDAwMDAwOCBMMjMuOTk2NTc3LDI4LjAwMDAwMDggQzI0LjI3NDYwOTcsMjguMDAwMDAwOCAyNC40OTk5OTk3LDI3Ljc3MjEyMDMgMjQuNDk5OTk5NywyNy41MDg5OTU2IEwyNC40OTk5OTk3LDIxLjk5OTk5OTkgTDI4LjUsMjEuOTk5OTk5OSBMMjEuMzQxNzQ4LDE0LjM2NDUzMTYgWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0fVxuXHRzbWlsZXlzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT46RDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODYuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9JzpEJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg4Ny4wMDAwMDAsIDIzMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdIZWFkJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43ODk0NzM2ODQnIGN4PSc3LjUnIGN5PSc3LjUnIHI9JzcuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNSwxMy41MjYzMTU4IEMxMC4yNjg2OTA3LDEzLjUyNjMxNTggMTIuNTEzMTU3OSwxMC4zNjg0MjEyIDEyLjUxMzE1NzksOS4xODQyMTA0NSBDMTIuNTEzMTU3OSw3LjYwNTI2MzE3IDExLjQzODkwOTgsOS4xODQyMTA0MyA3LjUsOS4xODQyMTA1MyBDMy41NjEwOTAyMyw5LjE4NDIxMDYyIDIuNDg2ODQyMTEsNy42MDUyNjMxNyAyLjQ4Njg0MjExLDkuMTg0MjEwNDUgQzIuNDg2ODQyMTEsMTAuMzY4NDIxIDQuNzMxMzA5MzUsMTMuNTI2MzE1OCA3LjUsMTMuNTI2MzE1OCBaIE03LjUsMTAuOTYwNTI2MyBDOC45MzIzMzA4MywxMS4xNTc4OTQ3IDExLjc5Njk5MjUsMTAuMzY4NDIxIDExLjc5Njk5MjUsOS40NDQyMzU1MiBDMTEuNzk2OTkyNSw4Ljc4OTQ3MzY4IDEwLjg3NjIwODQsOS41Nzg5NDcyNyA3LjUsOS43NzYzMTU3OSBDNC4xMjM3OTE2Miw5LjU3ODk0NzQzIDMuMjAzMDA4NzIsOC43ODk0NzM2OSAzLjIwMzAwNzUyLDkuNDQ0MjM1NTIgQzMuMjAzMDA1ODIsMTAuMzY4NDIxIDYuMDY3NjY5MTcsMTEuMTU3ODk0NyA3LjUsMTAuOTYwNTI2MyBaJyBpZD0nU21pbGUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS4yMzY4NDIxMSw2LjMyMzY1OTggQzUuNjQzNzg4NzYsNi4zMjM2NTk4IDUuOTczNjg0MjEsNS44ODE4MzU1NCA1Ljk3MzY4NDIxLDUuMzM2ODE3NjkgQzUuOTczNjg0MjEsNC43OTE3OTk4NSA1LjY0Mzc4ODc2LDQuMzQ5OTc1NTkgNS4yMzY4NDIxMSw0LjM0OTk3NTU5IEM0LjgyOTg5NTQ1LDQuMzQ5OTc1NTkgNC41LDQuNzkxNzk5ODUgNC41LDUuMzM2ODE3NjkgQzQuNSw1Ljg4MTgzNTU0IDQuODI5ODk1NDUsNi4zMjM2NTk4IDUuMjM2ODQyMTEsNi4zMjM2NTk4IFogTTkuNzM2ODQyMTEsNi4zMjM2NTk4IEMxMC4xNDM3ODg4LDYuMzIzNjU5OCAxMC40NzM2ODQyLDUuODgxODM1NTQgMTAuNDczNjg0Miw1LjMzNjgxNzY5IEMxMC40NzM2ODQyLDQuNzkxNzk5ODUgMTAuMTQzNzg4OCw0LjM0OTk3NTU5IDkuNzM2ODQyMTEsNC4zNDk5NzU1OSBDOS4zMjk4OTU0NSw0LjM0OTk3NTU5IDksNC43OTE3OTk4NSA5LDUuMzM2ODE3NjkgQzksNS44ODE4MzU1NCA5LjMyOTg5NTQ1LDYuMzIzNjU5OCA5LjczNjg0MjExLDYuMzIzNjU5OCBaJyBpZD0nRXllcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXG5cdHN5bWJvbHM6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTYpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIHZpZXdCb3g9JzAgMCAxNSAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk9iamVjdHMgJmFtcDsgU3ltYm9sczwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzA0LjAwMDAwMCwgLTYzOC4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdPYmplY3RzLSZhbXA7LVN5bWJvbHMnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwNC4wMDAwMDAsIDIzMC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpbmcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAwLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScwJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzInIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIxMScgeD0nMycgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nNCc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuNzUsMC4xNTkyNjM5NzggTDExLjc1LDAgTDExLDAgTDExLDUuMDkxNDkzIEMxMC41OTM0NCw0Ljk0MjIxMzkyIDEwLjA2Mzk2NjIsNC45NjQ1MzIyNCA5LjU1NzE1Mzk5LDUuMTkwMTc5NTcgQzguNjk4NDkyOTMsNS41NzI0ODAxIDguMjMwMDM4MzUsNi4zOTM2NTYyMSA4LjUxMDgzMTQxLDcuMDI0MzI3NzQgQzguNzkxNjI0NDcsNy42NTQ5OTkyOCA5LjcxNTMzNDU0LDcuODU2MzQzNzUgMTAuNTczOTk1Niw3LjQ3NDA0MzIxIEMxMS4yNzYxMTgzLDcuMTYxNDM4MDMgMTEuNzE3MzM5Myw2LjU1NTM4OTcyIDExLjcwMTM1OTUsNiBMMTEuNzUsNiBMMTEuNzUsMS4zOTM4NTA1NiBDMTIuMzE3NTkwOCwxLjU5NTkwMDM3IDEzLDIuMDgxNzQ1NiAxMywzLjI1IEMxMyw0LjI1IDEyLjc1LDUuNSAxMi43NSw1LjUgQzEyLjc1LDUuNSAxMy43NSw0Ljc1IDEzLjc1LDIuNSBDMTMuNzUsMS4wMjI1NjEwMSAxMi41NjQyNjc0LDAuNDA3NDczMDE5IDExLjc1LDAuMTU5MjYzOTc4IFonIGlkPSdOb3RlJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgaWQ9JyZhbXA7JyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHNwYW4geD0nMC4yNScgeT0nMTYnPiZhbXA7PC90c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgaWQ9JyUnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDx0c3BhbiB4PSc3Ljc1JyB5PScxNic+JTwvdHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHR0cmF2ZWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlRyYW5zcG9ydDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQxLjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUcmFuc3BvcnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0MS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCw2IEwxLDYgTDEsMTUgTDAsMTUgTDAsNiBaIE0xNSw0IEwxNiw0IEwxNiwxNSBMMTUsMTUgTDE1LDQgWiBNMy41LDAgTDQuNSwwIEw0LjUsNyBMMy41LDcgTDMuNSwwIFogTTEsNiBMMy41LDYgTDMuNSw3IEwxLDcgTDEsNiBaIE00LjUsMCBMOS41LDAgTDkuNSwxIEw0LjUsMSBMNC41LDAgWiBNOS41LDAgTDEwLjUsMCBMMTAuNSw2IEw5LjUsNiBMOS41LDAgWiBNMTAuNSw0IEwxNSw0IEwxNSw1IEwxMC41LDUgTDEwLjUsNCBaJyBpZD0nU2t5bGluZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGlkPSdXaW5kb3dzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzAnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSc1LjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nMTEnIHk9JzQnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGlkPSdDYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIuNTAwMDAwLCA2LjUwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTguNSw4IEwyLjUsOCBMMi41LDkuNSBMMC41LDkuNSBMMC41LDcuODY4MTE0NSBDMC4yMDEyMDIxOTIsNy42OTU4MjcwMiAwLDcuMzcwOTEzNjMgMCw2Ljk5MDYzMTEgTDAsNS4wMDkzNjg5IEMwLDQuNDUxOTA5ODUgMC40NDQ4MzY5NzQsNCAwLjk5NTU3NzQ5OSw0IEwxMC4wMDQ0MjI1LDQgQzEwLjU1NDI2NDgsNCAxMSw0LjQ0MzM1MzE4IDExLDUuMDA5MzY4OSBMMTEsNi45OTA2MzExIEMxMSw3LjM2NTMzMTUgMTAuNzk5MDI0NCw3LjY5MjM0NTE5IDEwLjUsNy44NjY0OTAwMiBMMTAuNSw5LjUgTDguNSw5LjUgTDguNSw4IFogTTEuNzUsNi41IEMyLjE2NDIxMzU2LDYuNSAyLjUsNi4xNjQyMTM1NiAyLjUsNS43NSBDMi41LDUuMzM1Nzg2NDQgMi4xNjQyMTM1Niw1IDEuNzUsNSBDMS4zMzU3ODY0NCw1IDEsNS4zMzU3ODY0NCAxLDUuNzUgQzEsNi4xNjQyMTM1NiAxLjMzNTc4NjQ0LDYuNSAxLjc1LDYuNSBaIE05LjI1LDYuNSBDOS42NjQyMTM1Niw2LjUgMTAsNi4xNjQyMTM1NiAxMCw1Ljc1IEMxMCw1LjMzNTc4NjQ0IDkuNjY0MjEzNTYsNSA5LjI1LDUgQzguODM1Nzg2NDQsNSA4LjUsNS4zMzU3ODY0NCA4LjUsNS43NSBDOC41LDYuMTY0MjEzNTYgOC44MzU3ODY0NCw2LjUgOS4yNSw2LjUgWiBNMC41LDcgTDEwLjUsNyBMMTAuNSw3LjUgTDAuNSw3LjUgTDAuNSw3IFogTTMsNi41IEw4LDYuNSBMOCw3IEwzLDcgTDMsNi41IFonIGlkPSdCb2R5JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMS41LDQuNSBMMS41LDMgQzEuNSwxLjM0MzE0NTc1IDIuODM5MDIwMTMsMCA0LjUwMTY2NTQ3LDAgTDYuNDk4MzM0NTMsMCBDOC4xNTYxMDg1OSwwIDkuNSwxLjM0NjUxNzEyIDkuNSwzIEw5LjUsNScgaWQ9J1Jvb2YnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJ9XG5cbmJhbm5lckJHID0ge1xuXHRcImlwaG9uZS01XCI6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMzIwcHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDMyMCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+aXBob25lNTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNS81Uy81QycgZmlsbD0nIzFBMUExQyc+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMMzIwLDAgTDMyMCw2OCBMMCw2OCBMMCwwIFogTTE0Miw2MS4wMDQ4ODE1IEMxNDIsNTkuODk3NjE2IDE0Mi44OTYyNzksNTkgMTQ0LjAwMjQsNTkgTDE3Ni45OTc2LDU5IEMxNzguMTAzNDk1LDU5IDE3OSw1OS44OTM4OTk4IDE3OSw2MS4wMDQ4ODE1IEwxNzksNjEuOTk1MTE4NSBDMTc5LDYzLjEwMjM4NCAxNzguMTAzNzIxLDY0IDE3Ni45OTc2LDY0IEwxNDQuMDAyNCw2NCBDMTQyLjg5NjUwNSw2NCAxNDIsNjMuMTA2MTAwMiAxNDIsNjEuOTk1MTE4NSBMMTQyLDYxLjAwNDg4MTUgWicgaWQ9J2lwaG9uZTUnPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdFwiaXBob25lLTZzXCI6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPSczNzVweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMzc1IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01OC4wMDAwMDAsIC0yMy4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU4LjAwMDAwMCwgNy4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00wLDE2IEwzNzUsMTYgTDM3NSw4NCBMMCw4NCBMMCwxNiBaIE0xNjksNzcuMDA0ODgxNSBDMTY5LDc1Ljg5NzYxNiAxNjkuODk2Mjc5LDc1IDE3MS4wMDI0LDc1IEwyMDMuOTk3Niw3NSBDMjA1LjEwMzQ5NSw3NSAyMDYsNzUuODkzODk5OCAyMDYsNzcuMDA0ODgxNSBMMjA2LDc3Ljk5NTExODUgQzIwNiw3OS4xMDIzODQgMjA1LjEwMzcyMSw4MCAyMDMuOTk3Niw4MCBMMTcxLjAwMjQsODAgQzE2OS44OTY1MDUsODAgMTY5LDc5LjEwNjEwMDIgMTY5LDc3Ljk5NTExODUgTDE2OSw3Ny4wMDQ4ODE1IFonIGlkPSdOb3RpZmljYXRpb24tYmFja2dyb3VuZCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcImlwaG9uZS02cy1wbHVzXCIgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nNDE0cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDQxNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42ICgyNjMwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQgQ29weTwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0PGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC00My4wMDAwMDAsIC03NC4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0My4wMDAwMDAsIDc0LjAwMDAwMCknIGlkPSdOb3RpZmljYXRpb24tY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdDxnPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEw0MTQsMCBMNDE0LDY4IEwwLDY4IEwwLDAgWiBNMTg5LDYxLjAwNDg4MTUgQzE4OSw1OS44OTc2MTYgMTg5Ljg5NjI3OSw1OSAxOTEuMDAyNCw1OSBMMjIzLjk5NzYsNTkgQzIyNS4xMDM0OTUsNTkgMjI2LDU5Ljg5Mzg5OTggMjI2LDYxLjAwNDg4MTUgTDIyNiw2MS45OTUxMTg1IEMyMjYsNjMuMTAyMzg0IDIyNS4xMDM3MjEsNjQgMjIzLjk5NzYsNjQgTDE5MS4wMDI0LDY0IEMxODkuODk2NTA1LDY0IDE4OSw2My4xMDYxMDAyIDE4OSw2MS45OTUxMTg1IEwxODksNjEuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQtQ29weSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdFwiaXBhZFwiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9Jzc2OHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA3NjggNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5pcGFkLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qb3J0cmFpdCcgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMCwwIEw3NjgsMCBMNzY4LDY4IEwwLDY4IEwwLDAgWiBNMzY2LDYxLjAwNDg4MTUgQzM2Niw1OS44OTc2MTYgMzY2Ljg5NjI3OSw1OSAzNjguMDAyNCw1OSBMNDAwLjk5NzYsNTkgQzQwMi4xMDM0OTUsNTkgNDAzLDU5Ljg5Mzg5OTggNDAzLDYxLjAwNDg4MTUgTDQwMyw2MS45OTUxMTg1IEM0MDMsNjMuMTAyMzg0IDQwMi4xMDM3MjEsNjQgNDAwLjk5NzYsNjQgTDM2OC4wMDI0LDY0IEMzNjYuODk2NTA1LDY0IDM2Niw2My4xMDYxMDAyIDM2Niw2MS45OTUxMTg1IEwzNjYsNjEuMDA0ODgxNSBaJyBpZD0naXBhZC1wb3J0cmFpdCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XCJpcGFkLXByb1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzEwMjRweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMTAyNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPmlwYWQtcHJvLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qcm8tUG9ydHJhaXQnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMMTAyNCwwIEwxMDI0LDY4IEwwLDY4IEwwLDAgWiBNNDk0LDYxLjAwNDg4MTUgQzQ5NCw1OS44OTc2MTYgNDk0Ljg5NjI3OSw1OSA0OTYuMDAyNCw1OSBMNTI4Ljk5NzYsNTkgQzUzMC4xMDM0OTUsNTkgNTMxLDU5Ljg5Mzg5OTggNTMxLDYxLjAwNDg4MTUgTDUzMSw2MS45OTUxMTg1IEM1MzEsNjMuMTAyMzg0IDUzMC4xMDM3MjEsNjQgNTI4Ljk5NzYsNjQgTDQ5Ni4wMDI0LDY0IEM0OTQuODk2NTA1LDY0IDQ5NCw2My4xMDYxMDAyIDQ5NCw2MS45OTUxMTg1IEw0OTQsNjEuMDA0ODgxNSBaJyBpZD0naXBhZC1wcm8tcG9ydHJhaXQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdH1cbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
