require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iOSKit":[function(require,module,exports){
var bannerBG, comp, components, defaults, error, framerDevices, iconLibrary, j, layoutAlign, layoutChange, layoutSize, len, listenToKeys, onResize, screen, setProps, setupComponent, specialChar, textAutoSize, updateConstraints;

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
    layer: void 0,
    constraints: void 0,
    curve: "ease-in-out",
    curveOptions: void 0,
    time: 1,
    delay: 0,
    repeat: void 0,
    colorModel: void 0,
    staggered: void 0
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

updateConstraints = function(layer) {
  if (layer.constraints.leading) {
    if (layer.constraints.leading === parseInt(layer.constraints.leading, 10)) {
      layer.constraints.leading = exports.pt(layer.x);
    } else {
      if (layer.constraints.leading.length === void 0) {
        layer.constraints.leading = exports.pt(layer.x);
      } else {
        layer.constraints.leading = [layer.constraints.leading[0], exports.pt(layer.x - layer.constraints.leading[0].maxX)];
      }
    }
  }
  if (layer.constraints.trailing) {
    if (layer.constraints.trailing === parseInt(layer.constraints.trailing, 10)) {
      layer.constraints.trailing = exports.pt(layer.maxX);
    } else {
      if (layer.constraints.trailing.length === void 0) {
        layer.constraints.trailing = exports.pt(layer.maxX);
      } else {
        layer.constraints.trailing = [layer.constraints.trailing[0], exports.pt(layer.constraints.trailing[0].x - layer.maxX)];
      }
    }
  }
  if (layer.constraints.top) {
    if (layer.constraints.top === parseInt(layer.constraints.top, 10)) {
      layer.constraints.top = exports.pt(layer.y);
    } else {
      if (layer.constraints.top.length === void 0) {
        layer.constraints.top = exports.pt(layer.y);
      } else {
        layer.constraints.top = [layer.constraints.top[0], exports.pt(layer.y - layer.constraints.top[0].maxY)];
      }
    }
  }
  if (layer.constraints.bottom) {
    if (layer.constraints.bottom === parseInt(layer.constraints.bottom, 10)) {
      layer.constraints.bottom = exports.pt(layer.maxY);
    } else {
      if (layer.constraints.bottom.length === void 0) {
        layer.constraints.bottom = exports.pt(layer.maxY);
      } else {
        layer.constraints.bottom = [layer.constraints.bottom[0], exports.pt(layer.constraints.bottom[0].y - layer.maxY)];
      }
    }
  }
  if (layer.constraints.align === "center") {
    layer.constraints.align = void 0;
    layer.constraints.leading = exports.pt(layer.x);
    layer.constraints.top = exports.pt(layer.y);
  }
  if (layer.constraints.align === "horizontal") {
    layer.constraints.align = void 0;
    layer.constraints.leading = exports.pt(layer.x);
  }
  if (layer.constraints.align === "vertical") {
    layer.constraints.align = void 0;
    layer.constraints.top = exports.pt(layer.y);
  }
  if (layer.constraints.width) {
    layer.constraints.width = exports.pt(layer.width);
  }
  if (layer.constraints.height) {
    return layer.constraints.width = exports.pt(layer.height);
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
  if (setup.layer) {
    animatedLayers.push(setup.layer);
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
      layer.final = {};
      props = {};
      if (layer.constraints.leading) {
        if (layer.constraints.leading === parseInt(layer.constraints.leading, 10)) {
          props.x = exports.px(layer.constraints.leading);
        } else {
          if (layer.constraints.leading.length === void 0) {
            props.x = layer.constraints.leading.x;
          } else {
            props.x = layer.constraints.leading[0].final.x + layer.constraints.leading[0].final.width + exports.px(layer.constraints.leading[1]);
          }
        }
      }
      if (layer.constraints.trailing) {
        if (layer.constraints.trailing === parseInt(layer.constraints.trailing, 10)) {
          props.maxX = exports.px(layer.constraints.trailing);
        }
      }
      if (layer.constraints.top) {
        if (layer.constraints.top === parseInt(layer.constraints.top, 10)) {
          props.y = exports.px(layer.constraints.top);
        }
      }
      if (layer.constraints.bottom) {
        if (layer.constraints.bottom === parseInt(layer.constraints.bottom, 10)) {
          props.maxY = exports.px(layer.constraints.bottom);
        }
      }
      if (layer.constraints.width) {
        props.width = exports.px(layer.constraints.width);
      } else {
        props.width = layer.width;
      }
      if (layer.constraints.height) {
        props.height = exports.px(layer.constraints.height);
      } else {
        props.height;
      }
      delay = setup.delay;
      if (setup.staggered) {
        stag = setup.staggered;
        delay = ((index - 1) * stag) + setup.delay;
      }
      print(delay);
      layer.animate({
        properties: props,
        time: setup.time,
        delay: delay,
        curve: setup.curve
      });
      layer.final = props;
      results.push(print(layer.final));
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
        layer.on("change:x", function() {
          return updateConstraints(this);
        });
        layer.on("change:y", function() {
          return updateConstraints(this);
        });
        layer.on("change:width", function() {
          return updateConstraints(this);
        });
        layer.on("change:height", function() {
          return updateConstraints(this);
        });
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
      backgroundColor: "transparent"
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
      if (handler.offsetX < field.x || handler.offsetX > field.maxX || handler.offsetY < field.y || handler.offsetY > field.maxY) {
        field.active = false;
        keyboard.destroy();
        return clickZone.destroy();
      }
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
      align: "center"
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL19Qcm9qZWN0cy9QZXJzb25hbC9pT1MgS2l0IGZvciBGcmFtZXIvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9pT1NLaXQuY29mZmVlIiwiL1VzZXJzL0tldnluL0Ryb3Bib3ggKFBlcnNvbmFsKS9fUHJvamVjdHMvUGVyc29uYWwvaU9TIEtpdCBmb3IgRnJhbWVyL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDSUEsSUFBQTs7QUFBQSxhQUFBLEdBQWdCO0VBR2hCLFlBQUEsRUFBZTtJQUFFLE1BQUEsRUFBUSxNQUFNLENBQUMsV0FBakI7SUFBOEIsS0FBQSxFQUFPLE1BQU0sQ0FBQyxVQUE1QztJQUF3RCxLQUFBLEVBQU0sQ0FBOUQ7SUFBaUUsTUFBQSxFQUFPLEtBQXhFO0lBQStFLFFBQUEsRUFBUyxLQUF4RjtHQUhDO0VBUWhCLDRCQUFBLEVBQThCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBUmQ7RUFTaEIsd0JBQUEsRUFBMEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FUVjtFQVVoQixzQkFBQSxFQUF3QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElB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QUNtQyxDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBRG5DLEdBQ21ELGc5REF4Ty9DO0VBMFBiLE9BQUEsRUFBUyxxRUFBQSxHQUNNLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FETixHQUNzQixjQUR0QixHQUNtQyxDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBRG5DLEdBQ21ELHkzREEzUC9DO0VBcVJiLE1BQUEsRUFBUSxxRUFBQSxHQUNPLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FEUCxHQUN1QixjQUR2QixHQUNvQyxDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBRHBDLEdBQ29ELGs5RUF0Ui9DOzs7QUFtVGQsUUFBQSxHQUFXO0VBQ1YsVUFBQSxFQUFZLG96QkFERjtFQWFWLFdBQUEsRUFBYSxvK0JBYkg7RUE2QlYsZ0JBQUEsRUFBbUIsNCtCQTdCVDtFQTZDVixNQUFBLEVBQVMsK3pCQTdDQztFQXlEVixVQUFBLEVBQWEsKzBCQXpESDs7Ozs7QUM5bUhYLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiI2lPU0tpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHQgXG5cblxuZnJhbWVyRGV2aWNlcyA9IHtcblxuIyBGdWxsc2NyZWVuXG5cImZ1bGxzY3JlZW5cIiA6IHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcdHNjYWxlOjEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblxuIyBpUGhvbmVzXG5cbiMjIDVTXG5cImFwcGxlLWlwaG9uZS01cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNXMtZ29sZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyMgNWNcblwiYXBwbGUtaXBob25lLTVjLWdyZWVuXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLWJsdWVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy1yZWRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy13aGl0ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy15ZWxsb3dcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtcGlua1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyMgNnNcblwiYXBwbGUtaXBob25lLTZzLXNwYWNlLWdyYXlcIiA6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXJvc2UtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyMgNnMgcGx1c1xuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0Miwgc2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXBsdXMtcm9zZS1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyBpUGFkc1xuXG4jIyBBaXIgXG5cImFwcGxlLWlwYWQtYWlyLTItZ29sZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1haXItMi1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyMgTWluaVxuXCJhcHBsZS1pcGFkLW1pbmktNC1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1taW5pLTQtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtbWluaS00LXNpbHZlclwiOnsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNiwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jIyBQcm9cblwiYXBwbGUtaXBhZC1wcm8tZ29sZFwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLXByby1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbn1cblxuIyMgVGhlc2UgdmFyaWFibGVzIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggZGV0YWlscyBmcm9tIHRoZSBkZXZpY2UgdXBvbiBydW5uaW5nLiBcbmV4cG9ydHMuZGV2aWNlID0gMFxuZXhwb3J0cy5uYW1lID0gMFxuZXhwb3J0cy5zY2FsZSA9IDBcbmV4cG9ydHMuaGVpZ2h0ID0gMFxuZXhwb3J0cy53aWR0aCA9IDBcbmV4cG9ydHMubW9iaWxlID0gMFxuZXhwb3J0cy5wbGF0Zm9ybSA9IDBcbmV4cG9ydHMub3JpZW50YXRpb24gPSAwXG5cbnNjcmVlbiA9IHt9XG5cblxuXG4jIGdldERldmljZSB3aWxsIHBvcHVsYXRlIGRldmljZSB2YXJpYWJsZXMsIGFuZCBpdCdsbCBvdmVycmlkZSB0aGUgZnJhbWUgaWYgdGhlIGRldmljZSBpcyBkaWZmZXJlbnQuIFxuZXhwb3J0cy5nZXREZXZpY2UgPSAtPlxuXG5cdCMgTG9hZHMgdGhlIGluaXRpYWwgZnJhbWVcblx0ZGV2aWNlID0gRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG5cblx0IyMjIFRoaXMgc3dpdGNoIGxvb2tzIGF0IHRoZSBpbm5lcldpZHRoIHRvIGRldGVybWluZSBpZiB0aGUgcHJvdG90eXBlIGlzIGJlaW5nIG9wZW5lZCBvbiBhIGRldmljZS4gXG5cdElmIHNvLCBpdCdsbCBvdmVycmlkZSB0aGUgZGV2aWNlLCBhbmQgaXQnbGwgYWRqdXN0IHRoZSB2aWV3IHRvIGZ1bGxzY3JlZW4uIyMjXG5cblx0c3dpdGNoIGlubmVyV2lkdGhcblx0XHQjIGlQaG9uZSA1Yy81cy9TRVxuXHRcdHdoZW4gNjQwXG5cdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwaG9uZS01cy1zaWx2ZXJcIlxuXHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRcdCMgaVBob25lIDZzXG5cdFx0d2hlbiA3NTBcblx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC02cy1zaWx2ZXJcIlxuXHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRcdCMgaVBob25lIDZzK1xuXHRcdHdoZW4gMTI0MiBcblx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDIyMDhcblx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIlxuXHRcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGFkIGluIHBvcnRyYWl0XG5cdFx0d2hlbiAxNTM2IFxuXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMjA0OFxuXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCJcblx0XHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXHRcdCMgaVBhZFxuXHRcdHdoZW4gMjA0OFxuXG5cdFx0XHQjIGlQYWQgUHJvIGluIHBvcnRyYWl0XG5cdFx0XHRpZiBpbm5lckhlaWdodCA9PSAyNzMyXG5cdFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCJcblxuXHRcdFx0IyBpUGFkIGluIGxhbmRzY2NhcGVcblx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDE1MzZcblx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGFkLWFpci0yLXNpbHZlclwiXG5cdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdFx0IyBpUGFkIFByb1xuXHRcdHdoZW4gMjczMlxuXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMjA0OFxuXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtcHJvLXNpbHZlclwiXG5cdFx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0ZXhwb3J0cy5zY2FsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5zY2FsZVxuXG5cdGlmIGRldmljZSA9PSBcImZ1bGxzY3JlZW5cIlxuXHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdGVsc2Vcblx0XHRleHBvcnRzLndpZHRoID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0uaGVpZ2h0XG5cdFx0aWYgd2luZG93LmlubmVyV2lkdGggPT0gMTI0MiB8fCB3aW5kb3cuaW5uZXJXaWR0aCA9PSAyMjA4XG5cdFx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHRleHBvcnRzLnNjYWxlID0gM1xuXHRleHBvcnRzLm1vYmlsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5tb2JpbGVcblx0ZXhwb3J0cy5wbGF0Zm9ybSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5wbGF0Zm9ybVxuXHRleHBvcnRzLm9yaWVudGF0aW9uID0gIEZyYW1lci5EZXZpY2Uub3JpZW50YXRpb25cblxuXHQjIERldmljZSBTdHJpbmcgU2NydWJiZXJcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCJhcHBsZS1cIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItZ29sZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ncmVlblwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ibHVlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJlZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi13aGl0ZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi15ZWxsb3dcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcGlua1wiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1zcGFjZS1ncmV5XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJvc2VcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1c1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1Y1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItbWluaVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1haXJcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItMlwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi00XCIsIFwiXCIpXG5cdGV4cG9ydHMuZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItc2lsdmVyXCIsIFwiXCIpXG5cdFxuXHQjIGV4cG9ydHMuZGV2aWNlIGJlY29tZXMgZWl0aGVyIGlwYWQsIGlwYWQtcHJvLCBpcGhvbmUtNSwgaXBob25lLTZzLCBpcGhvbmUtNnMtcGx1c1xuXG5cdHNjcmVlbiA9IHtcblx0XHR3aWR0aDpleHBvcnRzLndpZHRoXG5cdFx0aGVpZ2h0OmV4cG9ydHMuaGVpZ2h0XG5cdH1cblxuZXhwb3J0cy5vcmllbnQgPSAoKSAtPlxuXHRpZiBleHBvcnRzLm9yaWVudGF0aW9uID09IC05MFxuXHRcdHRlbXBIZWlnaHQgPSBleHBvcnRzLmhlaWdodFxuXHRcdHRlbXBXaWR0aCA9IGV4cG9ydHMud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHRlbXBXaWR0aFxuXHRcdGV4cG9ydHMud2lkdGggPSB0ZW1wSGVpZ2h0XG5cbmV4cG9ydHMuZ2V0RGV2aWNlKClcbmV4cG9ydHMub3JpZW50KClcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIgLCBvblJlc2l6ZSlcblxuIyBMaXN0ZW4gdG8gd2luZG93IHJlaXplXG5cbm9uUmVzaXplID0gKCkgLT5cblx0ZXhwb3J0cy5nZXREZXZpY2UoKVxuXHRleHBvcnRzLmxheW91dCgpXG5cbiMgU3VwcG9ydGluZyBGdW5jdGlvbnNcblxuIyMgQ29udmVydHMgcHggdG8gcHRcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvZXhwb3J0cy5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jIyBDb252ZXJ0cyBwdCB0byBweFxuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIGV4cG9ydHMuc2NhbGVcblx0cHggPSBNYXRoLnJvdW5kKHB4KVxuXHRyZXR1cm4gcHhcblxuIyBDbGVhbnMgYSBzdHJpbmcgb2YgPGJyPiBhbmQgJm5ic3A7XG5leHBvcnRzLmNsZWFuID0gKHN0cmluZykgLT5cblx0IyMgcmVtb3ZlIHdoaXRlIHNwYWNlXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bJl1uYnNwWztdL2dpLCBcIiBcIikucmVwbGFjZSgvWzxdYnJbPl0vZ2ksIFwiXCIpXG5cdHJldHVybiBzdHJpbmdcblxuIyBDb252ZXJ0cyBweCdzIG9mIGFuIFNWRyB0byBzY2FsYWJsZSB2YXJpYWJsZXNcbmV4cG9ydHMuc3ZnID0gKHN2ZykgLT5cblx0IyBGaW5kIFN0cmluZ1xuXHRzdGFydEluZGV4ID0gc3ZnLnNlYXJjaChcIjxzdmcgd2lkdGg9XCIpIFxuXHRlbmRJbmRleCA9IHN2Zy5zZWFyY2goXCIgdmlld0JveFwiKVxuXHRzdHJpbmcgPSBzdmcuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpXG5cblx0I0ZpbmQgd2lkdGhcblx0d1N0YXJ0SW5kZXggPSBzdHJpbmcuc2VhcmNoKFwiPVwiKSArIDJcblx0d0VuZEluZGV4ID0gIHN0cmluZy5zZWFyY2goXCJweFwiKVxuXHR3aWR0aCA9IHN0cmluZy5zbGljZSh3U3RhcnRJbmRleCwgd0VuZEluZGV4KVxuXHRuZXdXaWR0aCA9IGV4cG9ydHMucHgod2lkdGgpXG5cblx0IyBGaW5kIEhlaWdodFxuXHRoZWlnaHRTdHJpbmcgPSBzdHJpbmcuc2xpY2Uod0VuZEluZGV4ICsgNCwgc3RyaW5nLmxlbmd0aClcblx0aFN0YXJ0SW5kZXggPSBoZWlnaHRTdHJpbmcuc2VhcmNoKFwiPVwiKSsgMlxuXHRoRW5kSW5kZXggPSBoZWlnaHRTdHJpbmcuc2VhcmNoKFwicHhcIikgXG5cdGhlaWdodCA9IGhlaWdodFN0cmluZy5zbGljZShoU3RhcnRJbmRleCwgaEVuZEluZGV4KVxuXHRuZXdIZWlnaHQgPSBleHBvcnRzLnB4KGhlaWdodClcblxuXHQjQ3JlYXRlIG5ldyBzdHJpbmdcblx0bmV3U3RyaW5nID0gc3RyaW5nLnJlcGxhY2Uod2lkdGgsIG5ld1dpZHRoKVxuXHRuZXdTdHJpbmcgPSBuZXdTdHJpbmcucmVwbGFjZShoZWlnaHQsIG5ld0hlaWdodClcblxuXHQjUmVwbGFjZSBzdHJpbmdzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5cdHJldHVybiB7XG5cdFx0c3ZnOnN2Z1xuXHRcdHdpZHRoOm5ld1dpZHRoXG5cdFx0aGVpZ2h0Om5ld0hlaWdodFxuXHR9XG5cbiMgQ2hhbmdlcyB0aGUgZmlsbCBvZiBhbiBTVkdcbmV4cG9ydHMuY2hhbmdlRmlsbCA9IChsYXllciwgY29sb3IpIC0+XG5cdHN0YXJ0SW5kZXggPSBsYXllci5odG1sLnNlYXJjaChcImZpbGw9XFxcIiNcIilcblx0ZmlsbFN0cmluZyA9IGxheWVyLmh0bWwuc2xpY2Uoc3RhcnRJbmRleCwgbGF5ZXIuaHRtbC5sZW5ndGgpXG5cdGVuZEluZGV4ID0gZmlsbFN0cmluZy5zZWFyY2goXCJcXFwiPlwiKVxuXHRzdHJpbmcgPSBmaWxsU3RyaW5nLnNsaWNlKDAsIGVuZEluZGV4KVxuXHRuZXdTdHJpbmcgPSBcImZpbGw9XFxcIlwiICsgZXhwb3J0cy5jb2xvcihjb2xvcikudG9IZXhTdHJpbmcoKVxuXHRsYXllci5odG1sID0gbGF5ZXIuaHRtbC5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5leHBvcnRzLmNhcGl0YWxpemUgPSAoc3RyaW5nKSAtPlxuXHRyZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG5cbiMgUmV0dXJucyB0aGUgY3VycmVudCB0aW1lXG5leHBvcnRzLmdldFRpbWUgPSAtPlxuXHRkYXlzT2ZUaGVXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cblx0bW9udGhzT2ZUaGVZZWFyID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cblx0ZGF0ZU9iaiA9IG5ldyBEYXRlKClcblx0bW9udGggPSBtb250aHNPZlRoZVllYXJbZGF0ZU9iai5nZXRNb250aCgpXVxuXHRkYXRlID0gZGF0ZU9iai5nZXREYXRlKClcblx0ZGF5ID0gZGF5c09mVGhlV2Vla1tkYXRlT2JqLmdldERheSgpXVxuXHRob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKVxuXHRtaW5zID0gZGF0ZU9iai5nZXRNaW51dGVzKClcblx0c2VjcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXG5cdHJldHVybiB7XG5cdFx0bW9udGg6bW9udGhcblx0XHRkYXRlOmRhdGVcblx0XHRkYXk6ZGF5XG5cdFx0aG91cnM6aG91cnNcblx0XHRtaW5zOm1pbnNcblx0XHRzZWNzOnNlY3Ncblx0fVxuXG4jIyBpT1MgQ29sb3Ig4oCTIFRoaXMgd2lsbCBzdG9yZSBhbGwgb2YgdGhlIGRlZmF1bHQgaU9TIGNvbG9ycyBpbnRlYWQgb2YgdGhlIGRlZmF1bHQgQ1NTIGNvbG9ycy4gKlRoaXMgaXMgb25seSB1cCBoZXJlIGJlY2F1c2UgSSByZWZlciB0byBpdCBpbiB0aGUgZGVmYXVsdHMuKlxuZXhwb3J0cy5jb2xvciA9IChjb2xvclN0cmluZykgLT5cblx0Y29sb3IgPSBcIlwiXG5cdGlmIHR5cGVvZiBjb2xvclN0cmluZyA9PSBcInN0cmluZ1wiXG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy50b0xvd2VyQ2FzZSgpXG5cdHN3aXRjaCBjb2xvclN0cmluZ1xuXHRcdHdoZW4gXCJyZWRcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUzODI0XCIpXG5cdFx0d2hlbiBcImJsdWVcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjMDA3NkZGXCIpXG5cdFx0d2hlbiBcInBpbmtcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUyODUxXCIpXG5cdFx0d2hlbiBcImdyZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImdyYXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImJsYWNrXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzAzMDMwM1wiKVxuXHRcdHdoZW4gXCJ3aGl0ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiNFRkVGRjRcIilcblx0XHR3aGVuIFwib3JhbmdlXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGOTYwMFwiKVxuXHRcdHdoZW4gXCJncmVlblwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM0NERCNUVcIilcblx0XHR3aGVuIFwibGlnaHQgYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwibGlnaHQtYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwieWVsbG93XCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGQ0QwMFwiKVxuXHRcdHdoZW4gXCJsaWdodCBrZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOURBN0IzXCIpXG5cdFx0d2hlbiBcImxpZ2h0LWtleVwiIFxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOURBN0IzXCIpXG5cdFx0ZWxzZSBcblx0XHRcdGlmIGNvbG9yU3RyaW5nWzBdID09IFwiI1wiIHx8IGNvbG9yU3RyaW5nLnRvSGV4U3RyaW5nKClbMF0gPT0gXCIjXCJcblx0XHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoY29sb3JTdHJpbmcpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzkyOTI5MlwiKVxuXHRyZXR1cm4gY29sb3JcblxuIyMgRGVmYXVsdHMgZm9yIGV2ZXJ5dGhpbmdcbmRlZmF1bHRzID0ge1xuXHRhbmltYXRpb25zOiB7XG5cdFx0bGF5ZXI6dW5kZWZpbmVkXG5cdFx0Y29uc3RyYWludHM6IHVuZGVmaW5lZFxuXHRcdGN1cnZlIDogXCJlYXNlLWluLW91dFwiXG5cdFx0Y3VydmVPcHRpb25zOiB1bmRlZmluZWRcblx0XHR0aW1lOjFcblx0XHRkZWxheTowXG5cdFx0cmVwZWF0OnVuZGVmaW5lZFxuXHRcdGNvbG9yTW9kZWw6dW5kZWZpbmVkXG5cdFx0c3RhZ2dlcmVkOnVuZGVmaW5lZFxuXHR9XG5cdGFsZXJ0OiB7XG5cdFx0dGl0bGU6IFwiVGl0bGVcIlxuXHRcdG1lc3NhZ2U6XCJNZXNzYWdlXCJcblx0XHRhY3Rpb25zOltcIk9LXCJdXG5cdFx0YWN0aW9uOlwiQWN0aW9uXCJcblx0XHRzZWNvbmRhcnlBY3Rpb246IFwic2Vjb25kYXJ5QWN0aW9uXCJcblx0fVxuXHRiYW5uZXI6IHtcblx0XHR0aXRsZTogXCJUaXRsZVwiXG5cdFx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRcdGFjdGlvbjpcIkFjdGlvblwiXG5cdFx0dGltZTpcIm5vd1wiXG5cdFx0aWNvbjp1bmRlZmluZWRcblx0XHRkdXJhdGlvbjo3XG5cdFx0YW5pbWF0ZWQ6ZmFsc2Vcblx0fVxuXHRidXR0b246e1xuXHRcdHRleHQ6XCJ0ZXh0XCJcblx0XHR0eXBlOlwiYnV0dG9uXCJcblx0XHRidXR0b25UeXBlOlwidGV4dFwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGNvbG9yOlwiIzAwN0FGRlwiXG5cdFx0Zm9udFNpemU6MTdcblx0XHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdFx0bmFtZTpcImJ1dHRvblwiXG5cdFx0Ymx1cjp0cnVlXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHRjb25zdHJhaW50czp1bmRlZmluZWRcblx0fVxuXHRmcmFtZXJQcm9wcyA6W1wibmFtZVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwic3VwZXJMYXllclwiLCBcIm9wYWNpdHlcIiwgXCJjb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcInhcIiwgXCJ5XCIsIFwibWlkWFwiLCBcIm1pZFlcIiwgXCJtYXhYXCIsIFwibWluWFwiLCBcInZpc2libGVcIiwgXCJjbGlwXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwiaWdub3JlRXZlbnRzXCIsIFwielwiLCBcInNjYWxlWFwiLCBcInNjYWxlWVwiLCBcInNjYWxlWlwiLCBcInNjYWxlXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInNrZXdcIiwgXCJvcmlnaW5YXCIsIFwib3JpZ2luWVwiLCBcIm9yaWdpblpcIiwgXCJwZXJzcGVjdGl2ZVwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWFwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWVwiLCBcInJvdGF0aW9uWFwiLCBcInJvdGF0aW9uWVwiLCBcInJvdGF0aW9uWlwiLCBcInJvdGF0aW9uXCIsIFwiYmx1clwiLCBcImJyaWdodG5lc3NcIiwgXCJzYXR1cmF0ZVwiLCBcImh1ZVJvdGF0ZVwiLCBcImNvbnRyYXN0XCIsIFwiaW52ZXJ0XCIsIFwiZ3JheXNjYWxlXCIsIFwic2VwaWFcIiwgXCJzaGFkb3dYXCIsIFwic2hhZG93WVwiLCBcInNoYWRvd0JsdXJcIiwgXCJzaGFkb3dTcHJlYWRcIiwgXCJzaGFkb3dDb2xvclwiLCBcImJvcmRlckNvbG9yXCIsIFwiYm9yZGVyV2lkdGhcIiwgXCJmb3JjZTJkXCIsIFwiZmxhdFwiLCBcImJhY2tmYWNlVmlzaWJsZVwiLCBcIm5hbWVcIiwgXCJtYXRyaXhcIiwgXCJfbWF0cml4MmRcIiwgXCJ0cmFuc2Zvcm1NYXRyaXhcIiwgXCJtYXRyaXgzZFwiLCBcImJvcmRlclJhZGl1c1wiLCBcInBvaW50XCIsIFwic2l6ZVwiLCBcImZyYW1lXCIsIFwiaHRtbFwiLCBcImltYWdlXCIsIFwic2Nyb2xsWFwiLCBcInNjcm9sbFlcIiwgXCJfZG9tRXZlbnRNYW5hZ2VyXCIsIFwibW91c2VXaGVlbFNwZWVkTXVsdGlwbGllclwiLCBcInZlbG9jaXR5VGhyZXNob2xkXCIsIFwiYW5pbWF0aW9uT3B0aW9uc1wiLCBcImNvbnN0cmFpbmVkXCJdXG5cdGNzc1Byb3BzIDogW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwidGV4dEFsaWduXCIsIFwiZm9udFdlaWdodFwiLCBcImxpbmVIZWlnaHRcIl1cblx0c3R5bGVQcm9wczogW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwidGV4dEFsaWduXCIsIFwiZm9udFdlaWdodFwiLCBcImxpbmVIZWlnaHRcIl1cblx0Y29uc3RyYWludFByb3BzIDogW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl1cblx0Y29uc3RyYWludFR5cGVzOiBbXCJ0b3BcIiwgXCJsZWFkaW5nXCIsIFwidHJhaWxpbmdcIiwgXCJib3R0b21cIl1cblx0Y29uc3RyYWludEFsaWducyA6IFtcImhvcml6b250YWxDZW50ZXJcIiwgXCJ2ZXJ0aWNhbENlbnRlclwiLCBcImxlYWRpbmdFZGdlc1wiLCBcInRyYWlsaW5nRWRnZXNcIiwgXCJ0b3BFZGdlc1wiLCBcImJvdHRvbUVkZ2VzXCIsIFwiYWxpZ25cIiwgXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl1cblx0Y29uc3RyYWludHM6IHtcblx0XHR0b3A6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ5XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib3BwXCIgOiBcImJvdHRvbVwiXG5cdFx0fVxuXHRcdGxlYWRpbmc6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ4XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhYXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvcHBcIiA6IFwidHJhaWxpbmdcIlxuXHRcdH1cblx0XHRib3R0b206IHtcblx0XHRcdFwicHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJoZWlnaHRcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ5XCJcblx0XHRcdFwib3BwXCIgOiBcInRvcFwiXG5cdFx0fVxuXHRcdHRyYWlsaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ4XCJcblx0XHRcdFwib3BwXCIgOiBcImxlYWRpbmdcIlxuXHRcdH1cblx0fVxuXHRjdXJzb3I6e1xuXHRcdGNvbG9yOlwiYmx1ZVwiXG5cdFx0aGVpZ2h0OjIwXG5cdFx0d2lkdGg6MVxuXHR9XG5cdGZpZWxkOiB7XG5cdFx0aXNFZGl0aW5nOmZhbHNlXG5cdFx0Y3Vyc29yOnt9XG5cdFx0Ym9yZGVyUmFkaXVzOjVcblx0XHRib3JkZXJXaWR0aDowXG5cdFx0Ym9yZGVyQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Y29sb3I6XCIjMDkwOTA4XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkZGXCJcblx0XHRyZXR1cm5UZXh0OlwicmV0dXJuXCJcblx0XHRyZXR1cm5Db2xvcjpcImxpZ2h0LWtleVwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0dHlwZTpcImZpZWxkXCJcblx0XHRjb25zdHJhaW50czp1bmRlZmluZWRcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdHdpZHRoOjI1OFxuXHRcdGhlaWdodDozMFxuXHRcdGZvbnRTaXplOjE1XG5cdFx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRcdHBsYWNlaG9sZGVyVGV4dDpcInBsYWNlaG9sZGVyVGV4dFwiXG5cdFx0cGxhY2Vob2xkZXJDb2xvcjpcIiM4MDgwODBcIlxuXHRcdHRleHQ6XCJcIlxuXHRcdHRleHRDb25zdHJhaW50czp7YWxpZ246XCJ2ZXJ0aWNhbFwiLCBsZWFkaW5nOjh9XG5cdFx0aW5wdXQ6dHJ1ZVxuXG5cdH1cblx0bG9ja1NjcmVlbjoge1xuXHRcdHRpbWU6XCJkZWZhdWx0XCJcblx0XHRkYXRlOlwiZGVmYXVsdFwiXG5cdFx0cGFzc2NvZGU6ZmFsc2Vcblx0XHRjbG9jazI0OmZhbHNlXG5cdFx0dHlwZTpcImxvY2tTY3JlZW5cIlxuXHR9XG5cdGtleWJvYXJkOiB7XG5cdFx0cmV0dXJuVGV4dDpcInJldHVyblwiXG5cdFx0cmV0dXJuQ29sb3I6XCJsaWdodC1rZXlcIlxuXHRcdGFuaW1hdGVkOmZhbHNlXG5cdFx0b3V0cHV0OnVuZGVmaW5lZFxuXHR9XG5cdHNoZWV0OiB7XG5cdFx0YWN0aW9uczpbXCJPS1wiXVxuXHRcdGV4aXQ6XCJDYW5jZWxcIlxuXHRcdGFuaW1hdGVkOmZhbHNlXG5cdFx0ZGVzY3JpcHRpb246dW5kZWZpbmVkXG5cdH1cblx0bmF2QmFyOiB7XG5cdFx0dGl0bGU6XCJUaXRsZVwiXG5cdFx0bGVmdDp1bmRlZmluZWRcblx0XHRyaWdodDpcIkVkaXRcIlxuXHRcdGJsdXI6dHJ1ZVxuXHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdFx0dHlwZTpcIm5hdkJhclwiXG5cdH1cblx0c3RhdHVzQmFyOiB7XG5cdFx0Y2FycmllcjpcIlwiXG5cdFx0bmV0d29yazpcIkxURVwiXG5cdFx0YmF0dGVyeToxMDBcblx0XHRzaWduYWw6NVxuXHRcdHN0eWxlOlwiZGFya1wiXG5cdFx0Y2xvY2syNDpmYWxzZVxuXHRcdHR5cGU6XCJzdGF0dXNCYXJcIlxuXHR9XG5cdHRhYkJhciA6IHtcblx0XHR0YWJzOiBbXVxuXHRcdHN0YXJ0OjBcblx0XHR0eXBlOlwidGFiQmFyXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0YWN0aXZlQ29sb3I6XCJibHVlXCJcblx0XHRpbmFjdGl2ZUNvbG9yOlwiZ3JheVwiXG5cdFx0Ymx1cjp0cnVlXG5cdH1cblx0dGFiIDoge1xuXHRcdGxhYmVsOiBcImxhYmVsXCJcblx0XHRpY29uOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScyNXB4JyBoZWlnaHQ9JzI1cHgnIHZpZXdCb3g9JzAgMCAyNSAyNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+MTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMSc+XG5cdFx0XHRcdFx0PGcgaWQ9J0JvdHRvbS1CYXIvVGFiLUJhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTcuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nUGxhY2Vob2xkZXJzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNS4wMDAwMDAsIDcuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPScxJyB4PScwJyB5PScwJyB3aWR0aD0nMjUnIGhlaWdodD0nMjUnIHJ4PSczJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFjdGl2ZTogdW5kZWZpbmVkXG5cdFx0dW5hY3RpdmU6IHVuZGVmaW5lZFxuXHRcdHRhYkJhcjogdW5kZWZpbmVkXG5cdFx0dHlwZTogXCJ0YWJcIlxuXHR9XG5cdHRhYmxlIDoge1xuXHRcdGNvbnN0cmFpbnRzOiB1bmRlZmluZWRcblx0XHR0eXBlOlwidGFibGVcIlxuXHRcdGNvbnRlbnQ6W1xuXHRcdFx0e1xuXHRcdFx0XHRcImxhYmVsXCI6IFwiQVwiIFxuXHRcdFx0XHRcImRldGFpbFwiIDogXCJsZXR0ZXJcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJsYWJlbFwiIDogXCJCXCJcblx0XHRcdFx0XCJkZXRhaWxcIiA6IFwibGV0dGVyXCJcblxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0Y2VsbDpcImRlZmF1bHRcIlxuXHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdH1cblx0dGFibGVDZWxsIDoge1xuXHRcdHR5cGU6XCJ0YWJsZUNlbGxcIlxuXHRcdHByb3BlcnRpZXM6IFwiZGVmYXVsdFwiXG5cdFx0aGVpZ2h0OjUwXG5cdFx0c3dpcGU6ZmFsc2Vcblx0XHRzd2lwZUFjdGlvbjpcIkRlbGV0ZVwiXG5cdFx0c3dpcGVDb2xvcjpcIiNGRTM4MjRcIlxuXHRcdHN3aXBlVGV4dENvbG9yOlwiI0ZGRlwiXG5cdH1cblxuXHR0ZXh0OiB7XG5cdFx0dGV4dDogXCJpT1MgVGV4dCBMYXllclwiXG5cdFx0dHlwZTpcInRleHRcIlxuXHRcdHg6MFxuXHRcdHk6MFxuXHRcdHdpZHRoOi0xXG5cdFx0aGVpZ2h0Oi0xXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHRzdHlsZTpcImRlZmF1bHRcIlxuXHRcdGxpbmVzOjFcblx0XHR0ZXh0QWxpZ246XCJsZWZ0XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Y29sb3I6XCJibGFja1wiXG5cdFx0Zm9udFNpemU6IDE3XG5cdFx0Zm9udEZhbWlseTpcIi1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRsaW5lSGVpZ2h0OlwiYXV0b1wiXG5cdFx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRcdG9wYWNpdHk6MVxuXHRcdHRleHRUcmFuc2Zvcm06XCJub25lXCJcblx0XHRuYW1lOlwidGV4dCBsYXllclwiXG5cdFx0Y29uc3RyYWludHM6e31cblx0fVxufVxuXG5cbiMgQ29tcG9uZW50IENvbmZpZ3VyYXRpb24gRnVuY3Rpb25zXG5zZXRQcm9wcyA9IChvYmplY3QpIC0+XG5cdGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpXG5cdG9iamVjdFtcInByb3BzXCJdID0ga2V5c1xuXG5jb21wb25lbnRzID0gW2RlZmF1bHRzLnRleHQsIGRlZmF1bHRzLmFsZXJ0LCBkZWZhdWx0cy5iYW5uZXIsIGRlZmF1bHRzLnNoZWV0LCBkZWZhdWx0cy5maWVsZCwgZGVmYXVsdHMudGFibGUsIGRlZmF1bHRzLnRhYmxlQ2VsbCwgZGVmYXVsdHMua2V5Ym9hcmQsIGRlZmF1bHRzLmJ1dHRvbiwgZGVmYXVsdHMubmF2QmFyLCBkZWZhdWx0cy50YWJCYXIsIGRlZmF1bHRzLnRhYiwgZGVmYXVsdHMuc3RhdHVzQmFyLCBkZWZhdWx0cy5sb2NrU2NyZWVuXVxuXG5mb3IgY29tcCBpbiBjb21wb25lbnRzXG5cdHNldFByb3BzKGNvbXApXG5cbnNldHVwQ29tcG9uZW50ID0gKGNvbXBvbmVudCwgYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0b2JqID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHNbY29tcG9uZW50XS5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0b2JqW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRvYmpbaV0gPSBkZWZhdWx0c1tjb21wb25lbnRdW2ldXG5cdHJldHVybiBvYmpcblxuIyBFcnJvcnNcbmVycm9yID0gKGNvbnRleHQsIGNvZGUpIC0+XG5cdCMjIEVycm9yIGNvZGUgZnJvbSBzYW1lUGFyZW50XG5cdGlmIGNvZGUgPT0gMTBcblx0XHRwcmludCBcIkVycm9yIEludmFsaWQgUmVsYXRpb25zaGlwIOKAkyBMYXllciBpZDoje2NvbnRleHQuaWR9IGhhcyBhIHJlbGF0aW9uc2hpcCB3aXRoIGFub3RoZXIgbGF5ZXIgbm90IGluIHRoZSBzYW1lIHN1cGVyTGF5ZXIuXCJcblxuXHQjIyBFcnJvciBjb2RlcyBmcm9tIGxheW91dEFsaWduIFxuXHRpZiBjb2RlID09IDIwXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IHJlcXVpcmVzIGEgbGF5ZXJcIlxuXHRpZiBjb2RlID09IDIxXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IGNhbm5vdCByZWZlciB0byBpdHNlbGZcIlxuXG5cdCMjIEVycm9yIGNvZGVzIGZvciBhcHBseVxuXHRpZiBjb2RlID09IDQwXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IGlzIG5vdCBhIHZhbGlkIHdlaWdodC4gUGxlYXNlIHVzZSAxMDAsIDIwMCwgMzAwLi4uIG9yIFRoaW4sIExpZ2h0LCBSZWd1bGFyLi4uXCJcblxuXHQjIyBFcnJvciBjb2RlcyBmb3Igbm90IGEgdmFsaWQgdGFiXG5cdGlmIGNvZGUgPT0gNTBcblx0XHRwcmludCBcIkVycm9yIExheWVyIGlkOiN7Y29udGV4dH0gaXMgbm90IGEgdmFsaWQgVGFiIG9iamVjdC4gUGxlYXNlIGNyZWF0ZSBhIFRhYiB1c2luZyBuZXcgbW9kdWxlLlRhYi5cIlxuXG4jIFNwZWNpYWwgQ2hhcmFjdGVyc1xuc3BlY2lhbENoYXIgPSAobGF5ZXIpIC0+XG5cdHRleHQgPSBsYXllclxuXHRpZiBsYXllci50eXBlID09IFwiYnV0dG9uXCJcblx0XHR0ZXh0ID0gbGF5ZXIubGFiZWxcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1iIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2ZvbnRXZWlnaHQ6NjAwfV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItciBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcInJlZFwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXJiXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXJiIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwiYmx1ZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWxiXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWxiIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwibGlnaHQtYmx1ZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWdcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItZyBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImdyZWVuXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItb1wiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1vIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwib3JhbmdlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItcFwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1wIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwib3JhbmdlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCIteVwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi15IFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwieWVsbG93XCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItI1wiKSAhPSAtMVxuXHRcdGNob3NlbkNvbG9yID0gdGV4dC5odG1sLnNsaWNlKDEsIDgpXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5zbGljZSg5LCB0ZXh0Lmh0bWwubGVuZ3RoKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOmNob3NlbkNvbG9yfV0pXHRcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLSBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH1dKVxuXHRpZiBsYXllci5idXR0b25UeXBlID09IFwidGV4dFwiXG5cdFx0bGF5ZXIud2lkdGggPSB0ZXh0LndpZHRoXG5cdGV4cG9ydHMubGF5b3V0KClcblxuIyBEZWNpZGVzIGlmIGl0IHNob3VsZCBiZSB3aGl0ZS9ibGFjayB0ZXh0XG5leHBvcnRzLnNldFRleHRDb2xvciA9IChjb2xvck9iamVjdCkgLT5cblx0cmdiID0gY29sb3JPYmplY3QudG9SZ2JTdHJpbmcoKVxuXHRyZ2IgPSByZ2Iuc3Vic3RyaW5nKDQsIHJnYi5sZW5ndGgtMSlcblx0cmdiID0gcmdiLnJlcGxhY2UoLyAvZywgJycpXG5cdHJnYiA9IHJnYi5yZXBsYWNlKC8gL2csICcnKVxuXHRyZ2IgPSByZ2Iuc3BsaXQoJywnKVxuXHRyZWQgPSByZ2JbMF1cblx0Z3JlZW4gPSByZ2JbMV1cblx0Ymx1ZSA9IHJnYlsyXVxuXHRjb2xvciA9IFwiXCJcblx0aWYgKHJlZCowLjI5OSArIGdyZWVuKjAuNTg3ICsgYmx1ZSowLjExNCkgPiAxODYgXG5cdFx0Y29sb3IgPSBcIiMwMDBcIlxuXHRlbHNlXG5cdFx0Y29sb3IgPSBcIkZGRlwiXG5cdHJldHVybiBjb2xvclxuXG5leHBvcnRzLnNhbWVQYXJlbnQgPSAobGF5ZXIxLCBsYXllcjIpIC0+XG5cdHBhcmVudE9uZSA9IGxheWVyMS5zdXBlckxheWVyXG5cdHBhcmVudFR3byA9IGxheWVyMi5zdXBlckxheWVyXG5cdGlmIHBhcmVudE9uZSA9PSBwYXJlbnRUd29cblx0XHRyZXR1cm4gdHJ1ZVxuXHRlbHNlIFxuXHRcdHJldHVybiBmYWxzZVxuXG5cbnVwZGF0ZUNvbnN0cmFpbnRzID0gKGxheWVyKSAtPlxuXHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nXG5cdFx0I0lmIGl0J3MgYSBudW1iZXJcblx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcsIDEwKVx0XG5cdFx0XHRsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID0gZXhwb3J0cy5wdChsYXllci54KVxuXHRcdGVsc2Vcblx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID0gZXhwb3J0cy5wdChsYXllci54KVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID0gW2xheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0sIGV4cG9ydHMucHQobGF5ZXIueCAtIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0ubWF4WCldXG5cblx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdcblx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLCAxMClcdFxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgPSBleHBvcnRzLnB0KGxheWVyLm1heFgpXG5cdFx0ZWxzZVxuXHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy50cmFpbGluZyA9IGV4cG9ydHMucHQobGF5ZXIubWF4WClcblx0XHRcdGVsc2Vcblx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgPSBbbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdbMF0sIGV4cG9ydHMucHQobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdbMF0ueCAtIGxheWVyLm1heFgpXVxuXG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcFxuXHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLnRvcCwgMTApXHRcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9IGV4cG9ydHMucHQobGF5ZXIueSlcblx0XHRlbHNlXG5cdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy50b3AgPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9IFtsYXllci5jb25zdHJhaW50cy50b3BbMF0sIGV4cG9ydHMucHQobGF5ZXIueSAtIGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5tYXhZKV1cblxuXHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b21cblx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5ib3R0b20sIDEwKVx0XG5cdFx0XHRsYXllci5jb25zdHJhaW50cy5ib3R0b20gPSBleHBvcnRzLnB0KGxheWVyLm1heFkpXG5cdFx0ZWxzZVxuXHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYm90dG9tID0gZXhwb3J0cy5wdChsYXllci5tYXhZKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5ib3R0b20gPSBbbGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzBdLCBleHBvcnRzLnB0KGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbVswXS55IC0gbGF5ZXIubWF4WSldXG5cblx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJjZW50ZXJcIlxuXHRcdGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID0gdW5kZWZpbmVkXG5cdFx0bGF5ZXIuY29uc3RyYWludHMubGVhZGluZyA9IGV4cG9ydHMucHQobGF5ZXIueClcblx0XHRsYXllci5jb25zdHJhaW50cy50b3AgPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cblx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJob3Jpem9udGFsXCJcblx0XHRsYXllci5jb25zdHJhaW50cy5hbGlnbiA9IHVuZGVmaW5lZFxuXHRcdGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgPSBleHBvcnRzLnB0KGxheWVyLngpXG5cblx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0bGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPSB1bmRlZmluZWRcblx0XHRsYXllci5jb25zdHJhaW50cy50b3AgPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cblx0aWYgbGF5ZXIuY29uc3RyYWludHMud2lkdGhcblx0XHRsYXllci5jb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHQobGF5ZXIud2lkdGgpXG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzLmhlaWdodFxuXHRcdGxheWVyLmNvbnN0cmFpbnRzLndpZHRoID0gZXhwb3J0cy5wdChsYXllci5oZWlnaHQpXG4gXG5leHBvcnRzLmFuaW1hdGVMYXlvdXQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0YW5pbWF0ZWRMYXllcnMgPSBbXVxuXHRpZiBhcnJheVxuXHRcdGZvciBpIGluIE9iamVjdC5rZXlzKGRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGlmIHNldHVwLmxheWVyIFxuXHRcdGFuaW1hdGVkTGF5ZXJzLnB1c2ggc2V0dXAubGF5ZXJcblx0ZWxzZVxuXHRcdGFuaW1hdGVkTGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXG5cdGlmIHNldHVwLmxheWVyXG5cdFx0aWYgc2V0dXAuY29uc3RyYWludHNcblx0XHRcdGZvciBuZXdDb25zdHJhaW50IGluIE9iamVjdC5rZXlzKHNldHVwLmNvbnN0cmFpbnRzKVxuXHRcdFx0XHRzZXR1cC5sYXllci5jb25zdHJhaW50c1tuZXdDb25zdHJhaW50XSA9IHNldHVwLmNvbnN0cmFpbnRzW25ld0NvbnN0cmFpbnRdXG5cblx0I1RyYW5zbGF0ZSBuZXcgY29uc3RyYWludHNcblx0Zm9yIGxheWVyLCBpbmRleCBpbiBhbmltYXRlZExheWVyc1xuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzXG5cdFx0XHRsYXllci5maW5hbCA9IHt9XG5cdFx0XHRwcm9wcyA9IHt9XG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMubGVhZGluZywgMTApXHRcblx0XHRcdFx0XHRwcm9wcy54ID0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcueFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uZmluYWwueCArIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uZmluYWwud2lkdGggKyBleHBvcnRzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMV0pXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nIFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50cmFpbGluZywgMTApXHRcblx0XHRcdFx0XHRwcm9wcy5tYXhYID0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50cy50cmFpbGluZylcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50b3AsIDEwKVx0XG5cdFx0XHRcdFx0cHJvcHMueSA9IGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMudG9wKVxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5ib3R0b20sIDEwKVx0XG5cdFx0XHRcdFx0cHJvcHMubWF4WSA9IGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tKVxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy53aWR0aFxuXHRcdFx0XHRwcm9wcy53aWR0aCA9IGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbGF5ZXIud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0XG5cdFx0XHRcdHByb3BzLmhlaWdodCA9IGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0KVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHRcblxuXG5cdFx0XHRcblx0XHRcdCNUaW1pbmdcblx0XHRcdGRlbGF5ID0gc2V0dXAuZGVsYXlcblx0XHRcdGlmIHNldHVwLnN0YWdnZXJlZFxuXHRcdFx0XHRzdGFnID0gc2V0dXAuc3RhZ2dlcmVkXG5cdFx0XHRcdGRlbGF5ID0gKChpbmRleCAtIDEpICogc3RhZykgKyBzZXR1cC5kZWxheVxuXG5cdFx0XHRwcmludCBkZWxheVxuXG5cdFx0XHRsYXllci5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6cHJvcHNcblx0XHRcdFx0dGltZTpzZXR1cC50aW1lXG5cdFx0XHRcdGRlbGF5OmRlbGF5XG5cdFx0XHRcdGN1cnZlOnNldHVwLmN1cnZlXG5cblx0XHRcdGxheWVyLmZpbmFsID0gcHJvcHNcblx0XHRcdHByaW50IGxheWVyLmZpbmFsXG5cbiNSZWZyZXNoZXMgTGF5ZXIgb3IgQWxsIExheWVyc1xuZXhwb3J0cy5sYXlvdXQgPSAobGF5ZXIpIC0+XG5cdGlmIGxheWVyID09IHVuZGVmaW5lZFxuXHRcdEAuYXJyYXkgPSBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdGVsc2UgXG5cdFx0QC5hcnJheSA9IFtsYXllcl1cblx0Zm9yIGxheWVyIGluIEAuYXJyYXlcblx0XHRpZiBsYXllci5jb25zdHJhaW50c1xuXHRcdFx0Zm9yIHAgaW4gZGVmYXVsdHMuY29uc3RyYWludFByb3BzXG5cdFx0XHRcdGxheW91dFNpemUobGF5ZXIsIHApXG5cdFx0XHRmb3IgYyBpbiBkZWZhdWx0cy5jb25zdHJhaW50VHlwZXNcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbY10gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5b3V0Q2hhbmdlKGxheWVyLCBjKVxuXHRcdFx0Zm9yIGEgaW4gZGVmYXVsdHMuY29uc3RyYWludEFsaWduc1xuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1thXVxuXHRcdFx0XHRcdGxheW91dEFsaWduKGxheWVyLCBhKVxuXG5cdFx0XHQjVXBkYXRlcyB0aGUgY29uc3RyYWludHMgaWYgdGhlIGxheWVyIGlzIG1hbmlwdWxhdGVkIHRocm91Z2ggb3RoZXIgbWVhbnNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRMaXN0ZW5lciA9PSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIub24gXCJjaGFuZ2U6eFwiLCAtPlxuXHRcdFx0XHRcdHVwZGF0ZUNvbnN0cmFpbnRzKEApXG5cblx0XHRcdFx0bGF5ZXIub24gXCJjaGFuZ2U6eVwiLCAtPlxuXHRcdFx0XHRcdHVwZGF0ZUNvbnN0cmFpbnRzKEApXG5cblx0XHRcdFx0bGF5ZXIub24gXCJjaGFuZ2U6d2lkdGhcIiwgLT5cblx0XHRcdFx0XHR1cGRhdGVDb25zdHJhaW50cyhAKVxuXG5cdFx0XHRcdGxheWVyLm9uIFwiY2hhbmdlOmhlaWdodFwiLCAtPlxuXHRcdFx0XHRcdHVwZGF0ZUNvbnN0cmFpbnRzKEApXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRMaXN0ZW5lciA9IHRydWVcblxuI0FsaWduIGNvbnN0cmFpbnRzXG5sYXlvdXRBbGlnbiA9IChsYXllciwgdHlwZSkgLT5cblx0ZGVjbGFyZWRDb25zdHJhaW50ID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0aWYgbGF5ZXIuc3VwZXJMYXllclxuXHRcdEBzdXBlckxheWVyID0gbGF5ZXIuc3VwZXJMYXllclxuXHRlbHNlXG5cdFx0QHN1cGVyTGF5ZXIgPSBzY3JlZW5cblx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IHBhcnNlSW50KGRlY2xhcmVkQ29uc3RyYWludCwgMTApXG5cdFx0ZXJyb3IodHlwZSwgMjApXG5cdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBsYXllclxuXHRcdGVycm9yKHR5cGUsIDIxKVxuXHRpZiB0eXBlb2YgZGVjbGFyZWRDb25zdHJhaW50ID09IFwib2JqZWN0XCJcblx0XHRmb3IgaSBpbiBkZWNsYXJlZENvbnN0cmFpbnRcblx0XHRcdGlmIHR5cGVvZiBpID09IFwic3RyaW5nXCJcblx0XHRcdFx0QHR5cGUgPSBpXG5cdFx0XHRpZiB0eXBlb2YgaSA9PSBcIm9iamVjdFwiXG5cdFx0XHRcdEBsYXllciA9IGkgXG5cdFx0aWYgQHR5cGUgPT0gXCJob3Jpem9udGFsQ2VudGVyXCIgfHwgQHR5cGUgPT0gXCJob3Jpem9udGFsXCJcblx0XHRcdGRlbHRhTW92ZSA9IChAbGF5ZXIud2lkdGggLSBsYXllci53aWR0aCkgLyAyXG5cdFx0XHRsYXllci54ID0gQGxheWVyLnggKyBkZWx0YU1vdmVcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1wibGVhZGluZ1wiXSA9IGV4cG9ydHMucHQobGF5ZXIueClcblx0XHRpZiBAdHlwZSA9PSBcInZlcnRpY2FsQ2VudGVyXCIgfHwgQHR5cGUgPT0gXCJ2ZXJ0aWNhbFwiICBcblx0XHRcdGRlbHRhTW92ZSA9IChAbGF5ZXIuaGVpZ2h0IC0gbGF5ZXIuaGVpZ2h0KSAvIDJcblx0XHRcdGxheWVyLnkgPSBAbGF5ZXIueSArIGRlbHRhTW92ZVxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0b3BcIl0gPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cdFx0aWYgQHR5cGUgPT0gXCJsZWFkaW5nRWRnZXNcIiB8fCBAdHlwZSA9PSBcImxlYWRpbmdcIlxuXHRcdFx0bGF5ZXIueCA9IEBsYXllci54XG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImxlYWRpbmdcIl0gPSBleHBvcnRzLnB0KGxheWVyLngpXG5cdFx0aWYgQHR5cGUgPT0gXCJ0cmFpbGluZ0VkZ2VzXCIgfHwgQHR5cGUgPT0gXCJ0cmFpbGluZ1wiXG5cdFx0XHRsYXllci5tYXhYID0gQGxheWVyLm1heFhcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1widHJhaWxpbmdcIl0gPSBleHBvcnRzLnB0KEBzdXBlckxheWVyLndpZHRoIC0gbGF5ZXIubWF4WClcblx0XHRpZiBAdHlwZSA9PSBcInRvcEVkZ2VzXCIgfHwgQHR5cGUgPT0gXCJ0b3BcIlxuXHRcdFx0bGF5ZXIueSA9IEBsYXllci55XG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcInRvcFwiXSA9IGV4cG9ydHMucHQobGF5ZXIueSlcblx0XHRpZiBAdHlwZSA9PSBcImJvdHRvbUVkZ2VzXCIgfHwgQHR5cGUgPT0gXCJib3R0b21cIlxuXHRcdFx0bGF5ZXIubWF4WSA9IEBsYXllci5tYXhZXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImJvdHRvbVwiXSA9IGV4cG9ydHMucHQoQHN1cGVyTGF5ZXIuaGVpZ2h0IC0gbGF5ZXIubWF4WSlcblx0aWYgdHlwZSA9PSBcImhvcml6b250YWxDZW50ZXJcIiB8fCB0eXBlID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0ZGVsdGFNb3ZlID0gKGRlY2xhcmVkQ29uc3RyYWludC53aWR0aCAtIGxheWVyLndpZHRoKSAvIDJcblx0XHRsYXllci54ID0gZGVjbGFyZWRDb25zdHJhaW50LnggKyBkZWx0YU1vdmVcblx0aWYgdHlwZSA9PSBcInZlcnRpY2FsQ2VudGVyXCIgfHwgdHlwZSA9PSBcInZlcnRpY2FsXCIgIFxuXHRcdGRlbHRhTW92ZSA9IChkZWNsYXJlZENvbnN0cmFpbnQuaGVpZ2h0IC0gbGF5ZXIuaGVpZ2h0KSAvIDJcblx0XHRsYXllci55ID0gZGVjbGFyZWRDb25zdHJhaW50LnkgKyBkZWx0YU1vdmVcblx0aWYgdHlwZSA9PSBcImxlYWRpbmdFZGdlc1wiIFxuXHRcdGxheWVyLnggPSBkZWNsYXJlZENvbnN0cmFpbnQueFxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1wibGVhZGluZ1wiXSA9IGV4cG9ydHMucHQoZGVjbGFyZWRDb25zdHJhaW50LngpXG5cdGlmIHR5cGUgPT0gXCJ0cmFpbGluZ0VkZ2VzXCJcblx0XHRsYXllci5tYXhYID0gZGVjbGFyZWRDb25zdHJhaW50Lm1heFhcblx0XHRsYXllci5jb25zdHJhaW50c1tcInRyYWlsaW5nXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci5oZWlnaHQgLSBsYXllci5tYXhYKVxuXHRpZiB0eXBlID09IFwidG9wRWRnZXNcIlxuXHRcdGxheWVyLnkgPSBkZWNsYXJlZENvbnN0cmFpbnQueVxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1widG9wXCJdID0gZXhwb3J0cy5wdChsYXllci55KVxuXHRpZiB0eXBlID09IFwiYm90dG9tRWRnZXNcIlxuXHRcdGxheWVyLm1heFkgPSBkZWNsYXJlZENvbnN0cmFpbnQubWF4WVxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1wiYm90dG9tXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci5oZWlnaHQgLSBsYXllci5tYXhZKVxuXHRpZiB0eXBlID09IFwiYWxpZ25cIlxuXHRcdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWCgpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwidmVydGljYWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWSgpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwiY2VudGVyXCJcblx0XHRcdGxheWVyLmNlbnRlcigpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwidmVydGljYWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWSgpXG5cbiNTaXplIENvbnN0cmFpbnRzXG5sYXlvdXRTaXplID0gKGxheWVyLCB0eXBlKSAtPlxuXHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdGxheWVyW3R5cGVdID0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblx0XHRpZiBsYXllci50eXBlID09IFwidGV4dFwiXG5cdFx0XHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUobGF5ZXIpXG5cdFx0XHRsYXllci53aWR0aCA9IHRleHRGcmFtZS53aWR0aFxuXHRcdFx0bGF5ZXIuaGVpZ2h0ID0gdGV4dEZyYW1lLmhlaWdodFxuXG4jTW92ZSAmIFJlc2l6ZXMgTGF5ZXJzXG5sYXlvdXRDaGFuZ2UgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICE9IHVuZGVmaW5lZCBcblx0XHRwcm9wID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ucHJvcFxuXHRcdG9ialByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wXG5cdFx0b3BwID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub3BwXG5cdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3BcblxuXHRcdGlmIG9ialByb3AgIT0gXCJ3aWR0aFwiICYmIG9ialByb3AgIT0gXCJoZWlnaHRcIlxuXHRcdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cblx0XHRpZiBsYXllci5zdXBlckxheWVyICE9IG51bGxcblx0XHRcdCNIYXMgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gbGF5ZXIuc3VwZXJMYXllcltzdXBlclRyYWl0XVxuXHRcdGVsc2Vcblx0XHRcdCNEb2VzIG5vdCBoYXZlIGEgc3VwZXJMYXllclxuXHRcdFx0QFtzdXBlclRyYWl0XSA9IGV4cG9ydHNbc3VwZXJUcmFpdF1cblx0XHRpZiB0eXBlID09IFwidG9wXCIgfHwgdHlwZSA9PSBcImxlYWRpbmdcIlxuXHRcdFx0IyBIYW5kbGUgVG9wICYgTGVhZGluZ1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID4gMSBcblx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IChALm9iakludCAqIGV4cG9ydHMuc2NhbGUpICsgQC5vYmpMYXllcltvYmpQcm9wXVxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSAhPSB1bmRlZmluZWRcblx0XHRcdFx0dHJhaXQgPSBkZWZhdWx0cy5jb25zdHJhaW50c1tvcHBdW1wib2JqUHJvcFwiXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW29wcF0sIDEwKVxuXHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IEBbc3VwZXJUcmFpdF0gLSAobGF5ZXJbcHJvcF0gKyAoZXhwb3J0cy5zY2FsZSAqIGxheWVyLmNvbnN0cmFpbnRzW29wcF0pKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBsYXllcltwcm9wXSAtIGxheWVyLmNvbnN0cmFpbnRzW29wcF1bcHJvcF1cblx0XHRcdFx0XHRcdGlmIGxheWVyW3RyYWl0XSA8IDBcblx0XHRcdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gbGF5ZXJbdHJhaXRdICogLTFcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRzdGFydFggPSBsYXllci54XG5cdFx0XHRcdFx0XHRlbmRYID0gMFxuXHRcdFx0XHRcdFx0Zm9yIG9iamVjdCBpbiBsYXllci5jb25zdHJhaW50c1tvcHBdXG5cdFx0XHRcdFx0XHRcdCMgSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0XHRlbmRYID0gZW5kWCAtIG9iamVjdFxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVHJhaXQgPSBkZWZhdWx0cy5jb25zdHJhaW50c1tvcHBdLm9ialByb3AyXG5cdFx0XHRcdFx0XHRcdFx0ZW5kWCA9IGVuZFggKyBvYmplY3RbZW5kVHJhaXRdXG5cdFx0XHRcdFx0XHRsYXllci53aWR0aCA9IGVuZFggLSBzdGFydFhcblx0XHRcdFx0XHRcdFxuXHRcdGVsc2Vcblx0XHRcdCMjIEhhbmRsZSBCb3R0b20gJiBUcmFpbGluZ1xuXHRcdFx0b2JqUHJvcDIgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wMlxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSA9PSB1bmRlZmluZWRcblx0XHRcdFx0IyMgTm8gb3Bwb3NpdGVcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRcdCMjIE9ubHkgSW50ZWdlclxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQFtzdXBlclRyYWl0XSAtIChsYXllci5jb25zdHJhaW50c1t0eXBlXSAqIGV4cG9ydHMuc2NhbGUpXG5cdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0I0VudGVyZWQgTGF5ZXJcblx0XHRcdFx0XHRcdGlmIGV4cG9ydHMuc2FtZVBhcmVudChsYXllciwgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0pXG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcDJdXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGVycm9yKGxheWVyLCAxMClcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gMVxuXHRcdFx0XHRcdFx0I0FycmF5IG9mIE9uZVxuXHRcdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0sIDEwKVxuXHRcdFx0XHRcdFx0XHQjSW50XG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQFtvYmpQcm9wXSAtIChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSAqIGV4cG9ydHMuc2NhbGUpXG5cdFx0XHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdFx0XHQjT2JqZWN0XG5cdFx0XHRcdFx0XHRcdGlmIGV4cG9ydHMuc2FtZVBhcmVudChsYXllciwgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0pXG5cdFx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXVtvYmpQcm9wMl1cblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdGVycm9yKGxheWVyLCAxMClcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxXHRcblx0XHRcdFx0XHRcdCNSZWxhdGlvbnNoaXAgQXJyYXlcblx0XHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdFx0aWYgb2JqZWN0ID09IHBhcnNlSW50KG9iamVjdCwgMTApXG5cdFx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBALm9iakxheWVyW29ialByb3AyXSAtIGV4cG9ydHMuc2NhbGUgKiBALm9iakludFxuXG4jVGV4dCBMYXllcnNcbmV4cG9ydHMuc3R5bGVzID0ge31cblxuZXhwb3J0cy5iZ0JsdXIgPSAobGF5ZXIpIC0+XG5cdGxheWVyLnN0eWxlW1wiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIl0gPSBcImJsdXIoI3tleHBvcnRzLnB4KDUpfXB4KVwiXG5cdHJldHVybiBsYXllciBcblxudGV4dEF1dG9TaXplID0gKHRleHRMYXllcikgLT5cblx0I0RlZmluZSBXaWR0aFxuXHRjb25zdHJhaW50cyA9IHt9XG5cdGlmIHRleHRMYXllci5jb25zdHJhaW50cyBcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0XG5cdFx0XHRjb25zdHJhaW50cy5oZWlnaHQgPSBleHBvcnRzLnB4KHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHQpXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoXG5cdFx0XHRjb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXHRzdHlsZXMgPVxuXHRcdGZvbnRTaXplOiB0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LXNpemVcIl1cblx0XHRmb250RmFtaWx5OiB0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LWZhbWlseVwiXVxuXHRcdGZvbnRXZWlnaHQ6IHRleHRMYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdXG5cdFx0bGluZUhlaWdodDogdGV4dExheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl1cblx0XHRsZXR0ZXJTcGFjaW5nOiB0ZXh0TGF5ZXIuc3R5bGVbXCJsZXR0ZXItc3BhY2luZ1wiXVxuXHRcdHRleHRUcmFuc2Zvcm06IHRleHRMYXllci5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdXG5cdHRleHRXaWR0aCA9IFV0aWxzLnRleHRTaXplIHRleHRMYXllci5odG1sLCBzdHlsZXMsIGNvbnN0cmFpbnRzXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiB0ZXh0V2lkdGgud2lkdGhcblx0XHRoZWlnaHQ6IHRleHRXaWR0aC5oZWlnaHRcblx0fVxuXG5saXN0ZW5Ub0tleXMgPSAoZmllbGQsIGtleWJvYXJkKSAtPlxuXG5cdGtleXByZXNzID0gKGtleSkgLT5cblx0XHRvcmlnaW5hbENvbG9yID0ga2V5LmJhY2tncm91bmRDb2xvclxuXHRcdHN3aXRjaCBrZXkubmFtZVxuXHRcdFx0d2hlbiBcInNoaWZ0XCJcblx0XHRcdFx0a2V5Lmljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXHRcdFx0XHRrZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHR3aGVuIFwiZGVsZXRlXCJcblx0XHRcdFx0a2V5Lmljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXHRcdFx0XHRrZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRcdGtleS5pY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblx0XHRcdHdoZW4gXCJzcGFjZVwiXG5cdFx0XHRcdGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAudmlzaWJsZSA9IHRydWVcdFxuXHRcdFx0XHRcdGJveEtleSA9IGtleS5uYW1lXG5cdFx0XHRcdFx0aWYgaXNTaGlmdFxuXHRcdFx0XHRcdFx0Ym94S2V5ID0gYm94S2V5LnRvVXBwZXJDYXNlKClcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlQb3BVcC5ib3guaHRtbCA9IGJveEtleVxuXHRcdFx0XHRcdGtleWJvYXJkLmtleVBvcFVwLm1heFkgPSBrZXkubWF4WVxuXHRcdFx0XHRcdGtleWJvYXJkLmtleVBvcFVwLm1pZFggPSBrZXkubWlkWFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0a2V5LmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdFx0dGltZTouMlxuXG5cdGlzQ29tbWFuZCA9IGZhbHNlXG5cdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0aXNTaGlmdCA9IGZhbHNlXG5cdGNvZGVzID0ge1xuXHRcdDEzOlwiPGJyPlwiXG5cdFx0MzI6XCImbmJzcDtcIlxuXHRcdDMzOlwiIVwiXG5cdFx0MzQ6XCJcXFwiXCJcblx0XHQzNTpcIiNcIlxuXHRcdDM2OlwiJFwiXG5cdFx0Mzc6XCIlXCJcblx0XHQzODpcIiZcIlxuXHRcdDM5OlwiXFwnXCJcblx0XHQ0MDpcIihcIlxuXHRcdDQxOlwiKVwiXG5cdFx0NDI6XCIqXCJcblx0XHQ0MzpcIitcIlxuXHRcdDQ0OlwiLFwiXG5cdFx0NDU6XCItXCJcblx0XHQ0NzpcIi9cIlxuXHRcdDQ2OlwiLlwiXG5cdFx0NDg6XCIwXCJcblx0XHQ0OTpcIjFcIlxuXHRcdDUwOlwiMlwiXG5cdFx0NTE6XCIzXCJcblx0XHQ1MjpcIjRcIlxuXHRcdDUzOlwiNVwiXG5cdFx0NTQ6XCI2XCJcblx0XHQ1NTpcIjdcIlxuXHRcdDU2OlwiOFwiXG5cdFx0NTc6XCI5XCJcblx0XHQ1ODpcIjpcIlxuXHRcdDU5OlwiO1wiXG5cdFx0NjA6XCI8XCJcblx0XHQ2MTpcIj1cIlxuXHRcdDYyOlwiPlwiXG5cdFx0NjM6XCI/XCJcblx0XHQ2NDpcIkBcIlxuXHRcdDY1OlwiQVwiXG5cdFx0NjY6XCJCXCJcblx0XHQ2NzpcIkNcIlxuXHRcdDY4OlwiRFwiXG5cdFx0Njk6XCJFXCJcblx0XHQ3MDpcIkZcIlxuXHRcdDcxOlwiR1wiXG5cdFx0NzI6XCJIXCJcblx0XHQ3MzpcIklcIlxuXHRcdDc0OlwiSlwiXG5cdFx0NzU6XCJLXCJcblx0XHQ3NjpcIkxcIlxuXHRcdDc3OlwiTVwiXG5cdFx0Nzg6XCJOXCJcblx0XHQ3OTpcIk9cIlxuXHRcdDgwOlwiUFwiXG5cdFx0ODE6XCJRXCJcblx0XHQ4MjpcIlJcIlxuXHRcdDgzOlwiU1wiXG5cdFx0ODQ6XCJUXCJcblx0XHQ4NTpcIlVcIlxuXHRcdDg2OlwiVlwiXG5cdFx0ODc6XCJXXCJcblx0XHQ4ODpcIlhcIlxuXHRcdDg5OlwiWVwiXG5cdFx0OTA6XCJaXCJcblx0XHQ5MTpcIltcIlxuXHRcdDkyOlwiXFxcXFwiXG5cdFx0OTM6XCJdXCJcblx0XHQ5NDpcIl5cIlxuXHRcdDk1OlwiX1wiXG5cdFx0OTY6XCJgXCJcblx0XHQ5NzpcImFcIlxuXHRcdDk4OlwiYlwiXG5cdFx0OTk6XCJjXCJcblx0XHQxMDA6XCJkXCJcblx0XHQxMDE6XCJlXCJcblx0XHQxMDI6XCJmXCJcblx0XHQxMDM6XCJnXCJcblx0XHQxMDQ6XCJoXCJcblx0XHQxMDU6XCJpXCJcblx0XHQxMDY6XCJqXCJcblx0XHQxMDc6XCJrXCJcblx0XHQxMDg6XCJsXCJcblx0XHQxMDk6XCJtXCJcblx0XHQxMTA6XCJuXCJcblx0XHQxMTE6XCJvXCJcblx0XHQxMTI6XCJwXCJcblx0XHQxMTM6XCJxXCJcblx0XHQxMTQ6XCJyXCJcblx0XHQxMTU6XCJzXCJcblx0XHQxMTY6XCJ0XCJcblx0XHQxMTc6XCJ1XCJcblx0XHQxMTg6XCJ2XCJcblx0XHQxMTk6XCJ3XCJcblx0XHQxMjA6XCJ4XCJcblx0XHQxMjE6XCJ5XCJcblx0XHQxMjI6XCJ6XCJcblx0XHQxMjM6XCJ7XCJcblx0XHQxMjQ6XCJ8XCJcblx0XHQxMjU6XCJ9XCJcblx0XHQxMjY6XCJ+XCJcblx0fVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ2tleWRvd24nLCAoZSkgLT5cblx0XHRpZiBmaWVsZC5hY3RpdmVcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAyN1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0a2V5Ym9hcmQuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KHk6ZXhwb3J0cy5oZWlnaHQpXG5cdFx0XHRcdFx0dGltZTouMjVcblx0XHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0ZmllbGQuY2xpY2tab25lLmRlc3Ryb3koKVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDE2XG5cdFx0XHRcdGlzU2hpZnQgPSB0cnVlXG5cdFx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdFx0a2V5cHJlc3Moa2V5Ym9hcmQua2V5cy5zaGlmdClcblx0XHRcdFx0XHRmb3IgayBpbiBrZXlib2FyZC5rZXlzQXJyYXlcblx0XHRcdFx0XHRcdGsuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9IFwidXBwZXJjYXNlXCJcblx0XHRcdGlmIGFsbFNlbGVjdGVkID09IHRydWVcblx0XHRcdFx0aWYgZS5rZXlDb2RlID09IDM3IHx8IGUua2V5Q29kZSA9PSAzOVxuXHRcdFx0XHRcdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0XHRcdFx0XHRmaWVsZC50ZXh0LmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDkxXG5cdFx0XHRcdGlzQ29tbWFuZCA9IHRydWVcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAxM1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5yZXR1cm4uYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblx0XHRcdGlmIGUua2V5Q29kZSA9PSA4XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRpZiBrZXlib2FyZFxuXHRcdFx0XHRcdGtleXByZXNzKGtleWJvYXJkLmtleXMuZGVsZXRlKVxuXHRcdFx0XHRpZiBhbGxTZWxlY3RlZCA9PSB0cnVlXG5cdFx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6XCJcIl0pXG5cdFx0XHRcdFx0ZmllbGQudGV4dC5iYWNrZ3JvdW5kQ29sb3IgPVwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdGFsbFNlbGVjdGVkID0gZmFsc2Vcblx0XHRcdFx0aW5pdGlhbExlbmd0aCA9IGZpZWxkLnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdFx0bmV3VGV4dCA9IGZpZWxkLnRleHQuaHRtbC5zbGljZSgwLCAtMSlcblx0XHRcdFx0ZXhwb3J0cy51cGRhdGUoZmllbGQudGV4dCwgW3RleHQ6bmV3VGV4dF0pXG5cdFx0XHRcdGVuZExlbmd0aCA9IGZpZWxkLnRleHQuaHRtbC5sZW5ndGhcblx0XHRcdFx0aWYgaW5pdGlhbExlbmd0aCA9PSBlbmRMZW5ndGhcblx0XHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sLnNsaWNlKDAsIC02KVxuXHRcdFx0XHRcdGV4cG9ydHMudXBkYXRlKGZpZWxkLnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0XHRpZiBmaWVsZC50ZXh0Lmh0bWwgPT0gXCJcIlxuXHRcdFx0XHRcdGZpZWxkLnBsYWNlaG9sZGVyLnZpc2libGUgPSB0cnVlXG5cblx0XHRcdFx0IyBHZXQgcmlkIG9mICYgbmJzcDtcblxuXHRcdFx0XHRmaWVsZC52YWx1ZSA9IGV4cG9ydHMuY2xlYW4obmV3VGV4dClcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdrZXl1cCcsIChlKSAtPlxuXHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDEzICYmIGtleWJvYXJkXG5cdFx0XHRcdGtleWJvYXJkLmtleXMucmV0dXJuLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAzMiAmJiBrZXlib2FyZFxuXHRcdFx0XHRrZXlib2FyZC5rZXlzLnNwYWNlLmJhY2tncm91bmRDb2xvciA9IFwiV2hpdGVcIlxuXHRcdFx0aWYgZS5rZXlDb2RlID09IDggJiYga2V5Ym9hcmRcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5kZWxldGUuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdHRpbWU6LjFcblx0XHRcdFx0a2V5Ym9hcmQua2V5cy5kZWxldGUuaWNvbi5zdGF0ZXMuc3dpdGNoKFwib2ZmXCIpXG5cdFx0XHRpZiBlLmtleUNvZGUgPT0gOTFcblx0XHRcdFx0aXNDb21tYW5kID0gZmFsc2Vcblx0XHRcdGlmIGUua2V5Q29kZSA9PSAxNlxuXHRcdFx0XHRpc1NoaWZ0ID0gZmFsc2Vcblx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRmb3IgayBpbiBrZXlib2FyZC5rZXlzQXJyYXlcblx0XHRcdFx0XHRcdGsuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9IFwibG93ZXJjYXNlXCJcblx0XHRcdFx0XHRrZXlib2FyZC5rZXlzLnNoaWZ0LmFuaW1hdGVcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpKVxuXHRcdFx0XHRcdFx0dGltZTouMlxuXHRcdFx0XHRcdGtleWJvYXJkLmtleXMuc2hpZnQuaWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRpZiBlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwXG5cdFx0XHRcdGlmIGtleWJvYXJkICYmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0a2V5Ym9hcmQua2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRrID0ga2V5Ym9hcmQua2V5c1tjb2Rlc1tlLmtleUNvZGVdLnRvTG93ZXJDYXNlKCldXG5cdFx0XHRcdFx0ay5hbmltYXRlXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiKVxuXHRcdFx0XHRcdFx0dGltZTouMlxuXG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5cHJlc3MnLCAoZSkgLT5cblx0XHRpZiBmaWVsZC5hY3RpdmUgXG5cdFx0XHRjaGFyID0gY29kZXNbZS5rZXlDb2RlXVxuXHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0a2V5ID0ga2V5Ym9hcmQua2V5c1tjaGFyXVxuXHRcdFx0aWYgaXNDb21tYW5kID09IHRydWVcblx0XHRcdFx0aWYgZS5rZXlDb2RlID09IDk3XG5cdFx0XHRcdFx0ZmllbGQudGV4dC5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMTE4LCAyNTUsIC4yKVwiXG5cdFx0XHRcdFx0YWxsU2VsZWN0ZWQgPSB0cnVlXG5cblx0XHRcdGlmIGlzQ29tbWFuZCA9PSBmYWxzZVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0aWYgZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8PSA5MFxuXHRcdFx0XHRcdGNoYXIyID0gY2hhci50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0aWYga2V5Ym9hcmRcblx0XHRcdFx0XHRcdGtleSA9IGtleWJvYXJkLmtleXNbY2hhcjJdXG5cdFx0XHRcdFx0XHRrZXlwcmVzcyhrZXkpXG5cblx0XHRcdFx0aWYgZS5rZXlDb2RlID49IDk3ICYmIGUua2V5Q29kZSA8PSAxMjIgfHwgZS5rZXlDb2RlID09IDMyXHRcdFxuXHRcdFx0XHRcdGlmIGtleWJvYXJkXG5cdFx0XHRcdFx0XHRrZXlwcmVzcyhrZXkpXG5cblx0XHRcdFx0aWYgZS5rZXlDb2RlID4gMzFcblx0XHRcdFx0XHRuZXdUZXh0ID0gZmllbGQudGV4dC5odG1sICsgY2hhclxuXHRcdFx0XHRcdGV4cG9ydHMudXBkYXRlKGZpZWxkLnRleHQsIFt0ZXh0Om5ld1RleHRdKVxuXHRcdFx0XHRcdGZpZWxkLnZhbHVlID0gZXhwb3J0cy5jbGVhbihuZXdUZXh0KVxuXG5leHBvcnRzLnVwZGF0ZSA9IChsYXllciwgYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0aWYgbGF5ZXIudHlwZSA9PSBcInRleHRcIlxuXHRcdGZvciBjaGFuZ2UgaW4gYXJyYXlcblx0XHRcdGtleSA9IE9iamVjdC5rZXlzKGNoYW5nZSlbMF1cblx0XHRcdHZhbHVlID0gY2hhbmdlW2tleV1cblx0XHRcdGlmIGtleSA9PSBcInRleHRcIlxuXHRcdFx0XHRsYXllci5odG1sID0gdmFsdWVcblx0XHRcdGlmIGtleSA9PSBcImZvbnRXZWlnaHRcIlxuXHRcdFx0XHRsYXllci5zdHlsZVtrZXldID0gdmFsdWVcblx0XHRcdGlmIGtleSA9PSBcImNvbG9yXCJcblx0XHRcdFx0bGF5ZXIuY29sb3IgPSBleHBvcnRzLmNvbG9yKHZhbHVlKVxuXG5cdFx0dGV4dEZyYW1lID0gdGV4dEF1dG9TaXplKGxheWVyKVxuXHRcdGxheWVyLndpZHRoID0gdGV4dEZyYW1lLndpZHRoXG5cdFx0bGF5ZXIuaGVpZ2h0ID0gdGV4dEZyYW1lLmhlaWdodFxuXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5leHBvcnRzLnRpbWVEZWxlZ2F0ZSA9IChsYXllciwgY2xvY2tUeXBlKSAtPlxuXHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFV0aWxzLmRlbGF5IDYwIC0gQHRpbWUuc2VjcywgLT5cblx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG5cdFx0VXRpbHMuaW50ZXJ2YWwgNjAsIC0+XG5cdFx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcbiBcbmV4cG9ydHMudGltZUZvcm1hdHRlciA9ICh0aW1lT2JqLCBjbG9ja1R5cGUpIC0+XG5cdGlmIGNsb2NrVHlwZSA9PSBmYWxzZSBcblx0XHRpZiB0aW1lT2JqLmhvdXJzID4gMTJcblx0XHRcdHRpbWVPYmouaG91cnMgPSB0aW1lT2JqLmhvdXJzIC0gMTJcblx0aWYgdGltZU9iai5taW5zIDwgMTBcblx0XHR0aW1lT2JqLm1pbnMgPSBcIjBcIiArIHRpbWVPYmoubWluc1xuXHRyZXR1cm4gdGltZU9iai5ob3VycyArIFwiOlwiICsgdGltZU9iai5taW5zXG5cbiMjIENvbXBvbmVudHMgXG5leHBvcnRzLkFsZXJ0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwiYWxlcnRcIiwgYXJyYXkpXG5cdGFsZXJ0ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJhbGVydFwiXG5cdGFsZXJ0LmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0b3ZlcmxheSA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLC4zKVwiLCBzdXBlckxheWVyOmFsZXJ0LCBuYW1lOlwib3ZlcmxheVwiXG5cdG92ZXJsYXkuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdG1vZGFsID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHN1cGVyTGF5ZXI6YWxlcnQsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEwKSwgbmFtZTpcIm1vZGFsXCIsIHg6OTIsIHk6NTM3XG5cdG1vZGFsLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0d2lkdGg6MjgwXG5cdFx0aGVpZ2h0OjQwMFxuXHR0aXRsZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydFRpdGxlXCIsIHN1cGVyTGF5ZXI6bW9kYWwsIHRleHQ6c2V0dXAudGl0bGUsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCAgbmFtZTpcInRpdGxlXCIsIHRleHRBbGlnbjpcImNlbnRlclwiLCBsaW5lSGVpZ2h0OjIwXG5cdHRpdGxlLmNvbnN0cmFpbnRzID0gXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR3aWR0aDoyMjBcblx0XHR0b3A6MjBcblx0bWVzc2FnZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydE1lc3NhZ2VcIiwgdGV4dDpzZXR1cC5tZXNzYWdlLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjptb2RhbCwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6MTYsIHdpZHRoOjI0MCwgbmFtZTpcIm1lc3NhZ2VcIlxuXHRtZXNzYWdlLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6IFt0aXRsZSwgMTBdXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR3aWR0aDogMjIwXG5cdGRpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgYmFja2dyb3VuZENvbG9yOlwiI0UyRThFQlwiLCBuYW1lOlwiaG9yaXpvbnRhbCBkaXZpZGVyXCJcblx0ZGl2aWRlci5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6MVxuXHRcdGJvdHRvbTo0NFxuXHRleHBvcnRzLmxheW91dCgpXG5cdFxuXHQjVGl0bGUgKyBNZXNzYWdlICsgMSBzZXQgb2YgYWN0aW9uc1xuXHRtb2RhbC5jb25zdHJhaW50c1tcImhlaWdodFwiXSA9IDIwICsgZXhwb3J0cy5wdCh0aXRsZS5oZWlnaHQpICsgMTAgKyBleHBvcnRzLnB0KG1lc3NhZ2UuaGVpZ2h0KSArIDI0ICsgNDRcblxuXHRhY3Rpb25zID0gW11cblx0c3dpdGNoIHNldHVwLmFjdGlvbnMubGVuZ3RoXG5cdFx0d2hlbiAxXG5cdFx0XHRhY3RMYWJlbCA9IGV4cG9ydHMuY2FwaXRhbGl6ZShzZXR1cC5hY3Rpb25zWzBdKVxuXHRcdFx0YWN0aW9uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6c2V0dXAuYWN0aW9uc1swXSwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTApXG5cdFx0XHRhY3Rpb24uY29uc3RyYWludHMgPSBcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgY29sb3I6ZXhwb3J0cy5jb2xvcihcImJsdWVcIiksIHN1cGVyTGF5ZXI6YWN0aW9uLCB0ZXh0OmFjdExhYmVsLCBuYW1lOlwibGFiZWxcIlxuXHRcdFx0YWN0aW9uLmxhYmVsLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdGJvdHRvbToxNlxuXHRcdFx0YWN0aW9ucy5wdXNoIGFjdGlvblxuXHRcdHdoZW4gMlxuXHRcdFx0YWN0TGFiZWwgPSBleHBvcnRzLmNhcGl0YWxpemUoc2V0dXAuYWN0aW9uc1swXSlcblx0XHRcdGFjdGlvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOm1vZGFsLCBuYW1lOnNldHVwLmFjdGlvbnNbMF0sIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEwKSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0YWN0aW9uLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHR0cmFpbGluZzpleHBvcnRzLnB0KG1vZGFsLndpZHRoLzIpXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdGhlaWdodDo0NFxuXHRcdFx0YWN0aW9uLmxhYmVsID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIGNvbG9yOmV4cG9ydHMuY29sb3IoXCJibHVlXCIpLCBzdXBlckxheWVyOmFjdGlvbiwgdGV4dDphY3RMYWJlbCwgbmFtZTpcImxhYmVsXCJcblx0XHRcdGFjdGlvbi5sYWJlbC5jb25zdHJhaW50cyA9IFxuXHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRib3R0b206MTZcblx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb25cdFx0XG5cblx0XHRcdHZlcnREaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIiwgbmFtZTpcInZlcnRpY2FsIGRpdmlkZXJcIlxuXHRcdFx0dmVydERpdmlkZXIuY29uc3RyYWludHMgPSBcblx0XHRcdFx0d2lkdGg6MVxuXHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRcdFx0YWN0TGFiZWwyID0gZXhwb3J0cy5jYXBpdGFsaXplKHNldHVwLmFjdGlvbnNbMV0pXG5cdFx0XHRhY3Rpb24yID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIG5hbWU6c2V0dXAuYWN0aW9uc1sxXSwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTApLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRhY3Rpb24yLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGxlYWRpbmc6ZXhwb3J0cy5wdChtb2RhbC53aWR0aC8yKVxuXHRcdFx0XHR0cmFpbGluZzowXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdGhlaWdodDo0NFxuXHRcdFx0YWN0aW9uMi5sYWJlbCA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCBjb2xvcjpleHBvcnRzLmNvbG9yKFwiYmx1ZVwiKSwgc3VwZXJMYXllcjphY3Rpb24yLCB0ZXh0OmFjdExhYmVsMiwgbmFtZTpcImxhYmVsXCJcblx0XHRcdGFjdGlvbjIubGFiZWwuY29uc3RyYWludHMgPSBcblx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0Ym90dG9tOjE2XG5cdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uMlxuXHRcdGVsc2Vcblx0XHRcdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblx0XHRcdFx0YWN0TGFiZWwgPSBleHBvcnRzLmNhcGl0YWxpemUoYWN0KVxuXHRcdFx0XHRhY3Rpb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptb2RhbCwgbmFtZTphY3QsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEwKSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0XHRhY3Rpb24uY29uc3RyYWludHMgPSBcblx0XHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0XHR0cmFpbGluZzowXG5cdFx0XHRcdFx0Ym90dG9tOjAgKyAoKHNldHVwLmFjdGlvbnMubGVuZ3RoIC0gaW5kZXggLSAxKSAqIDQ0KVxuXHRcdFx0XHRcdGhlaWdodDo0NFxuXHRcdFx0XHRhY3Rpb25EaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bW9kYWwsIGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIiwgbmFtZTpcImhvcml6b250YWwgZGl2aWRlclwiXG5cdFx0XHRcdGFjdGlvbkRpdmlkZXIuY29uc3RyYWludHMgPSBcblx0XHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0XHR0cmFpbGluZzowXG5cdFx0XHRcdFx0aGVpZ2h0OjFcblx0XHRcdFx0XHRib3R0b206MCArICgoc2V0dXAuYWN0aW9ucy5sZW5ndGggLSBpbmRleCkgKiA0NClcblx0XHRcdFx0YWN0aW9uLmxhYmVsID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIGNvbG9yOmV4cG9ydHMuY29sb3IoXCJibHVlXCIpLCBzdXBlckxheWVyOmFjdGlvbiwgdGV4dDphY3RMYWJlbCwgbmFtZTpcImxhYmVsXCJcblx0XHRcdFx0YWN0aW9uLmxhYmVsLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHRib3R0b206MTRcblx0XHRcdFx0YWN0aW9ucy5wdXNoIGFjdGlvblx0XHRcblx0XHRcdFx0bW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSBtb2RhbC5jb25zdHJhaW50c1tcImhlaWdodFwiXSArIDQyIC0gMTJcblxuXHRhbGVydC5hY3Rpb25zID0ge31cdFxuXHRmb3IgYWN0LGluZGV4IGluIGFjdGlvbnNcblxuXHRcdCNIYW5kbGUgc3BlY2lhbCBjaGFyYWN0ZXJzXG5cdFx0YWN0LnR5cGUgPSBcImJ1dHRvblwiXG5cdFx0c3BlY2lhbENoYXIoYWN0KVxuXHRcdFxuXHRcdGlmIHNldHVwLmFjdGlvbnNbaW5kZXhdLmluZGV4T2YoXCItclwiKSA9PSAwXG5cdFx0XHRhY3Qub3JpZ0NvbG9yID0gZXhwb3J0cy5jb2xvcihcInJlZFwiKVxuXHRcdGVsc2Vcblx0XHRcdGFjdC5vcmlnQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwiYmx1ZVwiKVxuXG5cdFx0I0FkZCBUb3VjaCBFdmVudHNcblx0XHRhY3Qub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRALmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjphY3QuYmFja2dyb3VuZENvbG9yLmRhcmtlbig1KSlcblx0XHRcdFx0dGltZTouMjVcblx0XHRcdEAubGFiZWwuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpALm9yaWdDb2xvci5saWdodGVuKDEwKSlcblx0XHRcdFx0dGltZTouMjVcblxuXHRcdGFjdC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRALmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIilcblx0XHRcdFx0dGltZTouMjVcblx0XHRcdEAubGFiZWwuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpALm9yaWdDb2xvcilcblx0XHRcdFx0dGltZTouMjVcblxuXHRcdCMgRXhwb3J0IGFjdGlvbnNcblx0XHRhbGVydC5hY3Rpb25zW2FjdC5uYW1lXSA9IGFjdFxuXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdCMgRXhwb3J0IGFsZXJ0XG5cdGFsZXJ0Lm92ZXJsYXkgPSBvdmVybGF5XG5cdGFsZXJ0Lm1vZGFsID0gbW9kYWxcblx0YWxlcnQudGl0bGUgPSB0aXRsZVxuXHRhbGVydC5tZXNzYWdlID0gbWVzc2FnZVxuXG5cdHJldHVybiBhbGVydFxuXG5leHBvcnRzLkJhbm5lciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImJhbm5lclwiLCBhcnJheSlcblx0YmFubmVyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYW5uZXJcIlxuXHRiYW5uZXIuaHRtbCA9IGV4cG9ydHMuc3ZnKGJhbm5lckJHW2V4cG9ydHMuZGV2aWNlXSkuc3ZnXG5cdGJhbm5lci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjY4XG5cblx0IyBEaWZmZXJlbnQgcG9zaXRpb25pbmdzIGZvciBlYWNoIGRldmljZVxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2UgXG5cdFx0d2hlbiBcImlwYWRcIiBcblx0XHRcdEBsZWFkaW5nSWNvbiA9IDIwMFxuXHRcdFx0QHRvcEljb24gPSAxNVxuXHRcdFx0QHRvcFRpdGxlID0gMTFcblx0XHR3aGVuIFwiaXBhZC1wcm9cIlxuXHRcdFx0QGxlYWRpbmdJY29uID0gMTkyXG5cdFx0XHRAdG9wSWNvbiA9IDEyXG5cdFx0XHRAdG9wVGl0bGUgPSA5XG5cdFx0ZWxzZVxuXHRcdFx0QGxlYWRpbmdJY29uID0gMTVcblx0XHRcdEB0b3BJY29uID0gOFxuXHRcdFx0QHRvcFRpdGxlID0gNVxuXG5cdGlmIHNldHVwLmljb24gPT0gdW5kZWZpbmVkXG5cdFx0c2V0dXAuaWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmJhbm5lclxuXHRcdHNldHVwLmljb24uc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzY3RkY4MSAwJSwgIzAxQjQxRiAxMDAlKVwiXG5cdGVsc2Vcblx0XHRiYW5uZXIuYWRkU3ViTGF5ZXIoc2V0dXAuaWNvbilcblxuXHRzZXR1cC5pY29uLmJvcmRlclJhZGl1cyA9IGV4cG9ydHMucHgoNC41KVxuXHRzZXR1cC5pY29uLm5hbWUgPSBcImljb25cIlxuXHRzZXR1cC5pY29uLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6MjBcblx0XHR3aWR0aDoyMFxuXHRcdGxlYWRpbmc6QGxlYWRpbmdJY29uXG5cdFx0dG9wOkB0b3BJY29uIFxuXG5cdHRpdGxlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImJhbm5lclRpdGxlXCIsIHRleHQ6c2V0dXAudGl0bGUsIGNvbG9yOlwid2hpdGVcIiwgZm9udFdlaWdodDpcIm1lZGl1bVwiLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjpiYW5uZXIsIG5hbWU6XCJ0aXRsZVwiXG5cdHRpdGxlLmNvbnN0cmFpbnRzID0gXG5cdFx0dG9wOkB0b3BUaXRsZVxuXG5cdFx0bGVhZGluZzpbc2V0dXAuaWNvbiwgMTFdXG5cdG1lc3NhZ2UgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYmFubmVyTWVzc2FnZVwiLCB0ZXh0OnNldHVwLm1lc3NhZ2UsIGNvbG9yOlwid2hpdGVcIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyLCBuYW1lOlwibWVzc2FnZVwiXG5cdG1lc3NhZ2UuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmdFZGdlczp0aXRsZVxuXHRcdHRvcDpbdGl0bGUsIDJdXG5cblx0dGltZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJiYW5uZXJUaW1lXCIsIHRleHQ6c2V0dXAudGltZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZToxMSwgc3VwZXJMYXllcjpiYW5uZXIsIG5hbWU6XCJ0aW1lXCJcblx0dGltZS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzpbdGl0bGUsIDVdXG5cdFx0Ym90dG9tRWRnZXM6IHRpdGxlXG5cblx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCIgfHwgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkLXByb1wiXG5cdFx0dGltZS5jb25zdHJhaW50cyA9XG5cdFx0XHRib3R0b21FZGdlczogdGl0bGVcblx0XHRcdHRyYWlsaW5nOiBAbGVhZGluZ0ljb25cblxuXHRleHBvcnRzLmxheW91dCgpXG5cdGV4cG9ydHMuYmdCbHVyKGJhbm5lcilcblxuXHQjIyBCYW5uZXIgRHJhZyBzZXR0aW5nc1xuXHRiYW5uZXIuZHJhZ2dhYmxlID0gdHJ1ZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmhvcml6b250YWwgPSBmYWxzZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmNvbnN0cmFpbnRzID1cblx0XHR5OjBcblxuXHRiYW5uZXIuZHJhZ2dhYmxlLmJvdW5jZU9wdGlvbnMgPVxuXHQgICAgZnJpY3Rpb246IDI1XG5cdCAgICB0ZW5zaW9uOiAyNTBcblxuXHRiYW5uZXIub24gRXZlbnRzLkRyYWdFbmQsIC0+XG5cdFx0aWYgYmFubmVyLm1heFkgPCBleHBvcnRzLnB4KDY4KVxuXHRcdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoobWF4WTowKVxuXHRcdFx0XHR0aW1lOi4xNVxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFV0aWxzLmRlbGF5IC4yNSwgLT5cblx0XHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cblx0IyBCdWZmZXIgdGhhdCBzaXRzIGFib3ZlIHRoZSBiYW5uZXJcblx0YmFubmVyQnVmZmVyID0gbmV3IExheWVyIG1heFk6MCwgbmFtZTpcImJ1ZmZlclwiLCBiYWNrZ3JvdW5kQ29sb3I6XCIjMUIxQjFDXCIsIG9wYWNpdHk6LjksIHN1cGVyTGF5ZXI6YmFubmVyLCB3aWR0aDpleHBvcnRzLndpZHRoLCBtYXhZOmJhbm5lci55LCBoZWlnaHQ6ZXhwb3J0cy5oZWlnaHRcblx0ZXhwb3J0cy5iZ0JsdXIoYmFubmVyQnVmZmVyKVxuXG5cdCMgQW5pbWF0ZS1pblxuXHRpZiBzZXR1cC5hbmltYXRlZCA9PSB0cnVlXG5cdFx0YmFubmVyLnkgPSAwIC0gYmFubmVyLmhlaWdodFxuXHRcdGJhbm5lci5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOih5OjApXG5cdFx0XHR0aW1lOi4yNVxuXHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cblx0IyBBbmltYXRlLW91dFxuXHRpZiBzZXR1cC5kdXJhdGlvblxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uLCAtPlxuXHRcdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoobWF4WTowKVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRVdGlscy5kZWxheSBzZXR1cC5kdXJhdGlvbiArIC4yNSwgLT5cblx0XHRcdGJhbm5lci5kZXN0cm95KClcblx0XHRcblx0IyBFeHBvcnQgQmFubmVyXG5cdGJhbm5lci5pY29uID0gc2V0dXAuaWNvblxuXHRiYW5uZXIudGl0bGUgPSB0aXRsZVxuXHRiYW5uZXIubWVzc2FnZSA9IG1lc3NhZ2Vcblx0cmV0dXJuIGJhbm5lclxuXG5leHBvcnRzLkJ1dHRvbiA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImJ1dHRvblwiLCBhcnJheSlcblx0YnV0dG9uID0gbmV3IExheWVyIG5hbWU6c2V0dXAubmFtZVxuXHRidXR0b24uYnV0dG9uVHlwZSA9IHNldHVwLmJ1dHRvblR5cGVcblx0YnV0dG9uLnR5cGUgPSBzZXR1cC50eXBlXG5cdGNvbG9yID0gXCJcIlxuXHRpZiBzZXR1cC5jb25zdHJhaW50c1xuXHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0c2V0dXAuY29uc3RyYWludHNcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXIgXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihidXR0b24pXG5cdHN3aXRjaCBzZXR1cC5idXR0b25UeXBlXG5cdFx0d2hlbiBcImJpZ1wiXG5cdFx0XHRAZm9udFNpemUgPSAyMFxuXHRcdFx0QHRvcCA9IDE4XG5cdFx0XHRAZm9udFdlaWdodCA9IFwibWVkaXVtXCJcblx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGxlYWRpbmc6MTBcblx0XHRcdFx0dHJhaWxpbmc6MTBcblx0XHRcdFx0aGVpZ2h0OjU3XG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gZXhwb3J0cy5weCgxMi41KVxuXHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJcIlxuXHRcdFx0c3dpdGNoIHNldHVwLnN0eWxlXG5cdFx0XHRcdHdoZW4gXCJsaWdodFwiXG5cdFx0XHRcdFx0Y29sb3IgPSBcIiMwMDdBRkZcIlxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXIgXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpXCJcblx0XHRcdFx0XHRcdGV4cG9ydHMuYmdCbHVyKGJ1dHRvbilcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuXHRcdFx0XHR3aGVuIFwiZGFya1wiXG5cdFx0XHRcdFx0Y29sb3IgPSBcIiNGRkZcIlxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSg0MywgNDMsIDQzLCAuOSlcIlxuXHRcdFx0XHRcdFx0ZXhwb3J0cy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwiIzI4MjgyOFwiXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpZiBzZXR1cC5ibHVyIFxuXHRcdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0XHRcdHJnYlN0cmluZyA9IGJhY2tncm91bmRDb2xvci50b1JnYlN0cmluZygpXG5cdFx0XHRcdFx0XHRyZ2JhU3RyaW5nID0gcmdiU3RyaW5nLnJlcGxhY2UoXCIpXCIsIFwiLCAuOSlcIilcblx0XHRcdFx0XHRcdHJnYmFTdHJpbmcgID0gcmdiYVN0cmluZy5yZXBsYWNlKFwicmdiXCIsIFwicmdiYVwiKVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gcmdiYVN0cmluZ1xuXHRcdFx0XHRcdFx0ZXhwb3J0cy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cblxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclxuXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdG5ld0NvbG9yID0gXCJcIlxuXHRcdFx0XHRpZiBzZXR1cC5zdHlsZSA9PSBcImRhcmtcIlxuXHRcdFx0XHRcdG5ld0NvbG9yID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5saWdodGVuKDEwKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uYmFja2dyb3VuZENvbG9yLmRhcmtlbigxMClcblx0XHRcdFx0YnV0dG9uLmFuaW1hdGUgXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOm5ld0NvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cblx0XHR3aGVuIFwic21hbGxcIlxuXHRcdFx0QGZvbnRTaXplID0gMTZcblx0XHRcdEB0b3AgPSA0XG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gZXhwb3J0cy5weCgyLjUpXG5cdFx0XHRzd2l0Y2ggc2V0dXAuc3R5bGVcblx0XHRcdFx0d2hlbiBcImxpZ2h0XCJcblx0XHRcdFx0XHRjb2xvciA9IFwiIzAwN0FGRlwiXG5cdFx0XHRcdFx0YnV0dG9uLmJvcmRlckNvbG9yID0gXCIjMDA3QUZGXCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRidXR0b24uYm9yZGVyQ29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0YnV0dG9uLmJvcmRlcldpZHRoID0gZXhwb3J0cy5weCgxKVxuXG5cblx0XHRlbHNlXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRAZm9udFNpemUgPSBzZXR1cC5mb250U2l6ZVxuXHRcdFx0QGZvbnRXZWlnaHQgPSBzZXR1cC5mb250V2VpZ2h0XG5cblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uc3ViTGF5ZXJzWzBdLmNvbG9yLmxpZ2h0ZW4oMzApXG5cdFx0XHRcdGJ1dHRvbi5zdWJMYXllcnNbMF0uYW5pbWF0ZSBcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpuZXdDb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRidXR0b24uc3ViTGF5ZXJzWzBdLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpzZXR1cC5jb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cdHRleHRMYXllciA9IG5ldyBleHBvcnRzLlRleHQgdGV4dDpzZXR1cC50ZXh0LCBjb2xvcjpjb2xvciwgc3VwZXJMYXllcjpidXR0b24sIGZvbnRTaXplOkBmb250U2l6ZSwgZm9udFdlaWdodDpAZm9udFdlaWdodFxuXHR0ZXh0TGF5ZXIuY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiY2VudGVyXCJcblx0c3dpdGNoIHNldHVwLmJ1dHRvblR5cGUgXG5cdFx0d2hlbiBcInNtYWxsXCJcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDp0ZXh0TGF5ZXIud2lkdGggKyBleHBvcnRzLnB4KDYwKSwgaGVpZ2h0OiB0ZXh0TGF5ZXIuaGVpZ2h0ICsgZXhwb3J0cy5weCgxMCkpXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcdFxuXHRcdFx0XHR0ZXh0TGF5ZXIuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOlwiI0ZGRlwiKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIilcblx0XHRcdFx0XHR0aW1lOi41XHRcblx0XHRcdFx0dGV4dExheWVyLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpjb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0ZWxzZSBcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDp0ZXh0TGF5ZXIud2lkdGgsIGhlaWdodDp0ZXh0TGF5ZXIuaGVpZ2h0KVxuXHRleHBvcnRzLmxheW91dCgpXG5cdGJ1dHRvbi5sYWJlbCA9IHRleHRMYXllclxuXHRyZXR1cm4gYnV0dG9uXG5cbmV4cG9ydHMuRmllbGQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJmaWVsZFwiLCBhcnJheSlcblx0ZmllbGQgPSBuZXcgTGF5ZXIgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoc2V0dXAuYm9yZGVyUmFkaXVzKSwgYmFja2dyb3VuZENvbG9yOnNldHVwLmJhY2tncm91bmRDb2xvciwgd2lkdGg6ZXhwb3J0cy5weChzZXR1cC53aWR0aCksIGhlaWdodDpleHBvcnRzLnB4KHNldHVwLmhlaWdodClcblx0aWYgc2V0dXAuY29uc3RyYWludHNcblx0XHRmaWVsZC5jb25zdHJhaW50cyA9IFxuXHRcdFx0c2V0dXAuY29uc3RyYWludHNcblx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0dGV4dCA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJmaWVsZFRleHRcIiwgc3VwZXJMYXllcjpmaWVsZCwgdGV4dDpzZXR1cC50ZXh0LCBmb250U2l6ZTpzZXR1cC5mb250U2l6ZSwgZm9udFdlaWdodDpzZXR1cC5mb250V2VpZ2h0LCBjb2xvcjpzZXR1cC5jb2xvclxuXHRpZiBzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0XHR0ZXh0LmNvbnN0cmFpbnRzID1cblx0XHRcdHNldHVwLnRleHRDb25zdHJhaW50c1xuXHRmaWVsZC50ZXh0ID0gdGV4dFxuXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXJcblx0XHRzZXR1cC5zdXBlckxheWVyLmFkZFN1YkxheWVyKGZpZWxkKVxuXG5cdCMjSGFuZGxlIGtleXByZXNzXG5cdHRleHQub24gXCJjaGFuZ2U6aHRtbFwiLCAtPlxuXHRcdGlmIHRleHQuaHRtbCA9PSBcIlwiXG5cdFx0XHRmaWVsZC5jdXJzb3IuY29uc3RyYWludHMgPSB7YWxpZ246XCJ2ZXJ0aWNhbFwiLCBsZWFkaW5nOjh9XG5cdFx0ZWxzZVxuXHRcdFx0ZmllbGQuY3Vyc29yLmNvbnN0cmFpbnRzID0ge2FsaWduOlwidmVydGljYWxcIiwgdHJhaWxpbmdFZGdlczp0ZXh0fVxuXHRcdGlmIGZpZWxkLnBsYWNlaG9sZGVyXG5cdFx0XHRmaWVsZC5wbGFjZWhvbGRlci52aXNpYmxlID0gZmFsc2VcblxuXHRpZiBzZXR1cC50ZXh0ID09IFwiXCIgfHwgc2V0dXAudGV4dCA9PSB1bmRlZmluZWRcblx0XHRwbGFjZWhvbGRlciA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJmaWVsZFBsYWNlaG9sZGVyXCIsIHN1cGVyTGF5ZXI6ZmllbGQsIHRleHQ6c2V0dXAucGxhY2Vob2xkZXJUZXh0LCBmb250U2l6ZTpzZXR1cC5mb250U2l6ZSwgZm9udFdlaWdodDpzZXR1cC5mb250V2VpZ2h0LCBjb2xvcjpzZXR1cC5wbGFjZWhvbGRlckNvbG9yXG5cdFx0aWYgc2V0dXAudGV4dENvbnN0cmFpbnRzIFxuXHRcdFx0cGxhY2Vob2xkZXIuY29uc3RyYWludHMgPVxuXHRcdFx0XHRzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0XHRmaWVsZC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG5cblx0ZmllbGQub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdGZpZWxkLmFjdGl2ZSA9IHRydWVcblx0XHR0ZXh0LnZpc2libGUgPSB0cnVlXG5cdFx0Y2xpY2tab25lID0gbmV3IExheWVyIG5hbWU6XCJmaWVsZEFjdGl2ZVwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0aWYgc2V0dXAuaW5wdXRcblx0XHRcdGtleWJvYXJkID0gbmV3IGV4cG9ydHMuS2V5Ym9hcmQgYW5pbWF0ZWQ6dHJ1ZSwgb3V0cHV0OmZpZWxkLCByZXR1cm5UZXh0OnNldHVwLnJldHVyblRleHQsIHJldHVybkNvbG9yOnNldHVwLnJldHVybkNvbG9yXG5cdFx0XHRmaWVsZC5rZXlib2FyZCA9IGtleWJvYXJkXG5cdFx0XHRjbGlja1pvbmUuY29uc3RyYWludHMgPSBcblx0XHRcdFx0dG9wOjBcblx0XHRcdFx0Ym90dG9tOmtleWJvYXJkLnNwZWNzLmhlaWdodFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdGVsc2Vcblx0XHRcdGNsaWNrWm9uZS5jb25zdHJhaW50cyA9XG5cdFx0XHRcdHRvcDowXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHR0cmFpbGluZzowXG5cblx0XHRjbGlja1pvbmUub24gRXZlbnRzLlRvdWNoRW5kLCAoaGFuZGxlcikgLT5cblx0XHRcdCMjIGxpc3RlbiBmb3Igc29tZXRoaW5nIGVsc2Vcblx0XHRcdGlmIGhhbmRsZXIub2Zmc2V0WCA8IGZpZWxkLnggfHwgaGFuZGxlci5vZmZzZXRYID4gZmllbGQubWF4WCB8fCBoYW5kbGVyLm9mZnNldFkgPCBmaWVsZC55IHx8IGhhbmRsZXIub2Zmc2V0WSA+IGZpZWxkLm1heFlcblx0XHRcdFx0ZmllbGQuYWN0aXZlID0gZmFsc2Vcblx0XHRcdFx0a2V5Ym9hcmQuZGVzdHJveSgpXG5cdFx0XHRcdGNsaWNrWm9uZS5kZXN0cm95KClcblx0XHRmaWVsZC5jbGlja1pvbmUgPSBjbGlja1pvbmVcblxuXHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRmaWVsZC5rZXlib2FyZC5rZXlzLmRpc21pc3Mub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRmaWVsZC5rZXlib2FyZC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooeTpleHBvcnRzLmhlaWdodClcblx0XHRcdFx0XHR0aW1lOi40XG5cdFx0XHRcdFx0Y3VydmU6XCJlYXNlLWluLW91dFwiXG5cdFx0XHRcdFV0aWxzLmRlbGF5IC41LCAtPlxuXHRcdFx0XHRcdGZpZWxkLmtleWJvYXJkLmRlc3Ryb3koKVxuXHRcdFx0XHRcdGZpZWxkLmFjdGl2ZSA9IGZhbHNlXG5cdFx0XHRcdFx0Y2xpY2tab25lLmRlc3Ryb3koKVxuIFxuXG5cdFx0IyMgRGVmYXVsdCBDdXJzb3Jcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoc2V0dXAuY3Vyc29yKVxuXHRcdGlmIGtleXMubGVuZ3RoIDwgMVxuXHRcdFx0c2V0dXAuY3Vyc29yLmNvbnN0cmFpbnRzID0ge2FsaWduOlwidmVydGljYWxcIiwgbGVhZGluZzo4fVxuXHRcdFx0c2V0dXAuY3Vyc29yLndpZHRoID0gMlxuXHRcdFx0c2V0dXAuY3Vyc29yLmhlaWdodCA9IDIwXG5cblx0XHRpZiBmaWVsZC5jdXJzb3IgPT0gdW5kZWZpbmVkXG5cdFx0XHRsaXN0ZW5Ub0tleXMoZmllbGQsIGtleWJvYXJkKVxuXHRcdFx0Y3Vyc29yID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoc2V0dXAuY3Vyc29yLndpZHRoKSwgaGVpZ2h0OmV4cG9ydHMucHgoc2V0dXAuY3Vyc29yLmhlaWdodCksIHN1cGVyTGF5ZXI6ZmllbGQsIG5hbWU6XCJjdXJzb3JcIiwgYmFja2dyb3VuZENvbG9yOmV4cG9ydHMuY29sb3IoXCJibHVlXCIpLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxKVxuXHRcdFx0ZmllbGQuY3Vyc29yID0gY3Vyc29yXG5cdFx0XHRjdXJzb3IuY29uc3RyYWludHMgPSBcblx0XHRcdFx0c2V0dXAuY3Vyc29yLmNvbnN0cmFpbnRzXG5cblx0XHRcdFV0aWxzLmludGVydmFsIC41LCAtPlxuXHRcdFx0XHRpZiBmaWVsZC5hY3RpdmUgPT0gdHJ1ZVxuXHRcdFx0XHRcdGlmIGZpZWxkLmN1cnNvci5vcGFjaXR5ID09IDBcblx0XHRcdFx0XHRcdGZpZWxkLmN1cnNvci5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MSlcblx0XHRcdFx0XHRcdFx0dGltZTouM1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGZpZWxkLmN1cnNvci5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MClcblx0XHRcdFx0XHRcdFx0dGltZTouM1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZmllbGQuY3Vyc29yLm9wYWNpdHkgPSAwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIGZpZWxkXG5cbmV4cG9ydHMuU3RhdHVzQmFyID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwic3RhdHVzQmFyXCIsIGFycmF5KVxuXHRzdGF0dXNCYXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInN0YXR1c0Jhci5hbGxcIlxuXHRzdGF0dXNCYXIudHlwZSA9IHNldHVwLnR5cGVcblx0c3RhdHVzQmFyLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDoyMFxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2Vcblx0XHR3aGVuIFwiaXBob25lLTZzLXBsdXNcIlxuXHRcdFx0QHRvcENvbnN0cmFpbnQgPSA1XG5cdFx0ZWxzZVxuXHRcdFx0QHRvcENvbnN0cmFpbnQgPSAzXG5cdGlmIHNldHVwLnN0eWxlID09IFwibGlnaHRcIlxuXHRcdEBjb2xvciA9IFwid2hpdGVcIlxuXHRlbHNlXG5cdFx0QGNvbG9yID0gXCJibGFja1wiXG5cdGZvciBsYXllciBpbiBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdFx0aWYgbGF5ZXIudHlwZSA9PSBcImxvY2tTY3JlZW5cIlxuXHRcdFx0QGlzTG9ja1NjcmVlblByZXNlbnQgPSB0cnVlXG5cdGlmIEBpc0xvY2tTY3JlZW5QcmVzZW50XG5cdFx0Z3JpcHBlciA9IG5ldyBMYXllciBzdXBlckxheWVyOnN0YXR1c0Jhciwgd2lkdGg6ZXhwb3J0cy5weCgzNyksIGhlaWdodDpleHBvcnRzLnB4KDUpLCBuYW1lOlwiZ3JpcHBlclwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi41LCBuYW1lOlwiZ3JpcHBlclwiXG5cdFx0Z3JpcHBlci5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgzNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDUpfXB4JyB2aWV3Qm94PScwIDAgMzcgNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+R3JpcHBlcjwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9BdXRvLUNvbXBsZXRlLUJhci1DbG9zZWQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNjkuMDAwMDAwLCAtMi4wMDAwMDApJyBmaWxsPScjRkZGRkZGJz5cblx0XHRcdFx0XHRcdDxyZWN0IGlkPSdHcmlwcGVyJyB4PScxNjkuNScgeT0nMi41JyB3aWR0aD0nMzYnIGhlaWdodD0nNCcgcng9JzIuNSc+PC9yZWN0PlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRncmlwcGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0dG9wOjJcblx0ZWxzZSBcblx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0aWYgc2V0dXAuY2xvY2syNCA9PSBmYWxzZVxuXHRcdFx0aWYgQHRpbWUuaG91cnMgPiAxMSBcblx0XHRcdFx0QHRpbWUuc3RhbXAgPSBcIlBNXCJcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHRpbWUuc3RhbXAgPSBcIkFNXCJcblx0XHRlbHNlXG5cdFx0XHRAdGltZS5zdGFtcCA9IFwiXCJcblx0XHR0aW1lID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhclRpbWVcIiwgdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIHNldHVwLmNsb2NrMjQpICsgXCIgXCIgKyBAdGltZS5zdGFtcCwgZm9udFNpemU6MTIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOnN0YXR1c0JhciwgY29sb3I6QGNvbG9yLCBuYW1lOlwidGltZVwiXG5cdFx0dGltZS5jb25zdHJhaW50cyA9XG5cdFx0XHRhbGlnbjpcImNlbnRlclwiXG5cdHNpZ25hbCA9IFtdXG5cdGlmIHNldHVwLnNpZ25hbCA8IDFcblx0XHRub05ldHdvcmsgPSBuZXcgZXhwb3J0cy5UZXh0IHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBmb250U2l6ZToxMiwgdGV4dDpcIk5vIE5ldHdvcmtcIlxuXHRcdG5vTmV0d29yay5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nOjdcblx0XHRcdHRvcDozXG5cdGVsc2Vcblx0XHRmb3IgaSBpbiBbMC4uLnNldHVwLnNpZ25hbF1cblx0XHRcdGRvdCA9IG5ldyBMYXllciBoZWlnaHQ6ZXhwb3J0cy5weCg1LjUpLCB3aWR0aDpleHBvcnRzLnB4KDUuNSksIGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1LjUpLzIsIGJhY2tncm91bmRDb2xvcjpAY29sb3IsIG5hbWU6XCJzaWduYWxbI3tpfV1cIlxuXHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdGRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzo3XG5cdFx0XHRcdFx0dG9wOjdcdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkb3QuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtpIC0gMSBdLCAxXVxuXHRcdFx0XHRcdHRvcDo3XHRcdFx0XHRcdFxuXHRcdFx0c2lnbmFsLnB1c2ggZG90IFxuXHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGlmIHNldHVwLnNpZ25hbCA8IDVcblx0XHRcdG5vbkRvdHMgPSA1IC0gc2V0dXAuc2lnbmFsXG5cdFx0XHRmb3IgaSBpbiBbMC4uLm5vbkRvdHNdXG5cdFx0XHRcdG5vbkRvdCA9IG5ldyBMYXllciBoZWlnaHQ6ZXhwb3J0cy5weCg1LjUpLCB3aWR0aDpleHBvcnRzLnB4KDUuNSksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1LjUpLzIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJzaWduYWxbI3tzaWduYWwubGVuZ3RofV1cIlxuXHRcdFx0XHRub25Eb3Quc3R5bGUuYm9yZGVyID0gXCIje2V4cG9ydHMucHgoMSl9cHggc29saWQgI3tAY29sb3J9XCJcblx0XHRcdFx0bm9uRG90LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOltzaWduYWxbc2lnbmFsLmxlbmd0aCAtIDFdLCAxXVxuXHRcdFx0XHRcdHRvcDo3XG5cdFx0XHRcdHNpZ25hbC5wdXNoIG5vbkRvdFxuXHRcdFx0XHRleHBvcnRzLmxheW91dCgpXHRcblx0XHRjYXJyaWVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhckNhcnJpZXJcIiwgdGV4dDpzZXR1cC5jYXJyaWVyLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcImNhcnJpZXJcIiwgdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIlxuXHRcdGNhcnJpZXIuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDddXG5cdFx0XHR0b3A6M1xuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRpZiBzZXR1cC5jYXJyaWVyXG5cdFx0XHRuZXR3b3JrID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0Jhck5ldHdvcmtcIiwgdGV4dDpzZXR1cC5uZXR3b3JrLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcIm5ldHdvcmtcIiwgdGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzpbY2FycmllciwgNV1cblx0XHRcdFx0dG9wOjNcblx0XHRpZiBzZXR1cC5jYXJyaWVyID09IFwiXCIgfHwgc2V0dXAuY2FycmllciA9PSBcIndpZmlcIlxuXHRcdFx0bmV0d29yayA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDE0KSwgaGVpZ2h0OmV4cG9ydHMucHgoMTApLCBzdXBlckxheWVyOnN0YXR1c0JhciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcIm5ldHdvcmtcIlxuXHRcdFx0bmV0d29yay5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE0KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTApfXB4JyB2aWV3Qm94PScwIDAgMTQgMTAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5XaS1GaTwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svQ2hhcmdpbmcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC04Ny4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J005Ni4xNDQ0MjA4LDEyLjQzODUwNDMgQzk1LjYyNjM3NCwxMS44NDU0NDU2IDk0Ljg1MjM2MTYsMTEuNDY4OTExOSA5My45ODc1NjMsMTEuNDY4OTExOSBDOTMuMTM5MDA3MywxMS40Njg5MTE5IDkyLjM3Nzg1OTQsMTEuODMxNDM0MSA5MS44NjAxNjUyLDEyLjQwNTMxNzcgTDk0LjAyMjUzOTEsMTQuNSBMOTYuMTQ0NDIwOCwxMi40Mzg1MDQzIFogTTk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBDOTcuMjQ0Nzc5NCw5LjE5MTc0NTYzIDk1LjcwMTQzODcsOC40ODQ0NTU5NiA5My45ODc1NjMsOC40ODQ0NTU5NiBDOTIuMjg4MjcyMyw4LjQ4NDQ1NTk2IDkwLjc1NjYyNjQsOS4xNzk3NTg5MyA4OS42NzkyNjk4LDEwLjI5MjY5MzYgTDkwLjc2OTI5ODcsMTEuMzQ4NiBDOTEuNTY3MjA1LDEwLjUwNTM3MDggOTIuNzEzNjQ4LDkuOTc2NjgzOTQgOTMuOTg3NTYzLDkuOTc2NjgzOTQgQzk1LjI3Njg4MzYsOS45NzY2ODM5NCA5Ni40MzU2MzA1LDEwLjUxODIzNSA5Ny4yMzQ2MjE1LDExLjM3OTMyOTMgTDk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBMOTguMzIzNDk2NCwxMC4zMjE0NDI1IFogTTEwMC41LDguMjA2ODc5MzMgQzk4Ljg2Mjk1NzgsNi41Mzk0MzY3MiA5Ni41NTA1Njk5LDUuNSA5My45ODc1NjMsNS41IEM5MS40Mzc1MTAzLDUuNSA4OS4xMzU1NDk2LDYuNTI4OTU2MDUgODcuNSw4LjE4MTY0NDMxIEw4OC41ODk1NTc5LDkuMjM3MDk0NDEgQzg5Ljk0NjA3OTgsNy44NTQzMTY1NSA5MS44NjI4OTIxLDYuOTkyMjI3OTggOTMuOTg3NTYzLDYuOTkyMjI3OTggQzk2LjEyNjAwMjYsNi45OTIyMjc5OCA5OC4wNTM4ODA5LDcuODY1NTI2MDkgOTkuNDExODY5OCw5LjI2NDA0MjcyIEwxMDAuNSw4LjIwNjg3OTMzIFonIGlkPSdXaS1GaSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRcdG5ldHdvcmsuY29uc3RyYWludHMgPSBcblx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgN11cblx0XHRcdFx0dG9wOkB0b3BDb25zdHJhaW50XG5cdGJhdHRlcnlJY29uID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMjUpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmF0dGVyeUljb25cIlxuXHRpZiBzZXR1cC5iYXR0ZXJ5ID4gNzAgXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjUpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdDxnIGlkPSdTdGF0dXMtQmFyL0JsYWNrLzEwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBaIE0zNjgsOC41IEwzNjgsMTIgTDM2OC43NSwxMiBDMzY5LjE2NDIxNCwxMiAzNjkuNSwxMS42NjQ0MDUzIDM2OS41LDExLjI1Nzc0IEwzNjkuNSw5LjI0MjI1OTk4IEMzNjkuNSw4LjgzMjMyMTExIDM2OS4xNjcxMDEsOC41IDM2OC43NSw4LjUgTDM2OCw4LjUgWiBNMzQ2LjUwODE1Miw2IEMzNDUuOTUxMzY1LDYgMzQ1LjUsNi40NTY5OTY5MiAzNDUuNSw3LjAwODQ0MDU1IEwzNDUuNSwxMy40OTE1NTk0IEMzNDUuNSwxNC4wNDg1MDU4IDM0NS45NDkwNTgsMTQuNSAzNDYuNTA4MTUyLDE0LjUgTDM2NS45OTE4NDgsMTQuNSBDMzY2LjU0ODYzNSwxNC41IDM2NywxNC4wNDMwMDMxIDM2NywxMy40OTE1NTk0IEwzNjcsNy4wMDg0NDA1NSBDMzY3LDYuNDUxNDk0MjIgMzY2LjU1MDk0Miw2IDM2NS45OTE4NDgsNiBMMzQ2LjUwODE1Miw2IFogTTM0Ni41MDY3NDQsNi41IEMzNDYuMjI2ODc3LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMzAyMjUsMTQgMzQ2LjUwNjc0NCwxNCBMMzY1Ljk5MzI1NiwxNCBDMzY2LjI3MzEyMywxNCAzNjYuNSwxMy43ODM2MjggMzY2LjUsMTMuNTA3OTA0MSBMMzY2LjUsNi45OTIwOTU5NSBDMzY2LjUsNi43MjAzMTg4NiAzNjYuMjY5Nzc1LDYuNSAzNjUuOTkzMjU2LDYuNSBMMzQ2LjUwNjc0NCw2LjUgWicgaWQ9J0JhdHRlcnknPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGlmIHNldHVwLmJhdHRlcnkgPD0gNzAgJiYgc2V0dXAuYmF0dGVyeSA+IDIwXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjUpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdDxnIGlkPSdTdGF0dXMtQmFyL1doaXRlLzEwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBaIE0zNjgsOC41IEwzNjgsMTIgTDM2OC43NSwxMiBDMzY5LjE2NDIxNCwxMiAzNjkuNSwxMS42NjQ0MDUzIDM2OS41LDExLjI1Nzc0IEwzNjkuNSw5LjI0MjI1OTk4IEMzNjkuNSw4LjgzMjMyMTExIDM2OS4xNjcxMDEsOC41IDM2OC43NSw4LjUgTDM2OCw4LjUgWiBNMzQ2LjUwODE1Miw2IEMzNDUuOTUxMzY1LDYgMzQ1LjUsNi40NTY5OTY5MiAzNDUuNSw3LjAwODQ0MDU1IEwzNDUuNSwxMy40OTE1NTk0IEMzNDUuNSwxNC4wNDg1MDU4IDM0NS45NDkwNTgsMTQuNSAzNDYuNTA4MTUyLDE0LjUgTDM2NS45OTE4NDgsMTQuNSBDMzY2LjU0ODYzNSwxNC41IDM2NywxNC4wNDMwMDMxIDM2NywxMy40OTE1NTk0IEwzNjcsNy4wMDg0NDA1NSBDMzY3LDYuNDUxNDk0MjIgMzY2LjU1MDk0Miw2IDM2NS45OTE4NDgsNiBMMzQ2LjUwODE1Miw2IFogTTM0Ni41MDEyMzEsNi41IEMzNDYuMjI0NDA5LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMjk3NTEsMTQgMzQ2LjUwMTIzMSwxNCBMMzU2LjQ5ODc2OSwxNCBDMzU2Ljc3NTU5MSwxNCAzNTcsMTMuNzgzNjI4IDM1NywxMy41MDc5MDQxIEwzNTcsNi45OTIwOTU5NSBDMzU3LDYuNzIwMzE4ODYgMzU2Ljc3MDI0OSw2LjUgMzU2LjQ5ODc2OSw2LjUgTDM0Ni41MDEyMzEsNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRpZiBzZXR1cC5iYXR0ZXJ5IDw9IDIwXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjUpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdDxnIGlkPSdTdGF0dXMtQmFyL1doaXRlLzEwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHRcdFx0PHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBaIE0zNjgsOC41IEwzNjgsMTIgTDM2OC43NSwxMiBDMzY5LjE2NDIxNCwxMiAzNjkuNSwxMS42NjQ0MDUzIDM2OS41LDExLjI1Nzc0IEwzNjkuNSw5LjI0MjI1OTk4IEMzNjkuNSw4LjgzMjMyMTExIDM2OS4xNjcxMDEsOC41IDM2OC43NSw4LjUgTDM2OCw4LjUgWiBNMzQ2LjUwODE1Miw2IEMzNDUuOTUxMzY1LDYgMzQ1LjUsNi40NTY5OTY5MiAzNDUuNSw3LjAwODQ0MDU1IEwzNDUuNSwxMy40OTE1NTk0IEMzNDUuNSwxNC4wNDg1MDU4IDM0NS45NDkwNTgsMTQuNSAzNDYuNTA4MTUyLDE0LjUgTDM2NS45OTE4NDgsMTQuNSBDMzY2LjU0ODYzNSwxNC41IDM2NywxNC4wNDMwMDMxIDM2NywxMy40OTE1NTk0IEwzNjcsNy4wMDg0NDA1NSBDMzY3LDYuNDUxNDk0MjIgMzY2LjU1MDk0Miw2IDM2NS45OTE4NDgsNiBMMzQ2LjUwODE1Miw2IFogTTM0Ni40OTA0NzksNi41IEMzNDYuMjE5NTk1LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMTUwNTcsMTQgMzQ2LjQ5MDQ3OSwxNCBMMzQ5LjUwOTUyMSwxNCBDMzQ5Ljc4MDQwNSwxNCAzNTAsMTMuNzgzNjI4IDM1MCwxMy41MDc5MDQxIEwzNTAsNi45OTIwOTU5NSBDMzUwLDYuNzIwMzE4ODYgMzQ5Ljc4NDk0Myw2LjUgMzQ5LjUwOTUyMSw2LjUgTDM0Ni40OTA0NzksNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRiYXR0ZXJ5SWNvbi5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmcgOiA3XG5cdFx0dG9wOkB0b3BDb25zdHJhaW50XG5cdGJhdHRlcnlQZXJjZW50ID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhckJhdHRlcnlQZXJjZW50XCIsIHRleHQ6c2V0dXAuYmF0dGVyeSArIFwiJVwiLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcImJhdHRlcnlQZXJjZW50XCJcblx0YmF0dGVyeVBlcmNlbnQuY29uc3RyYWludHMgPSBcblx0XHR0cmFpbGluZzogW2JhdHRlcnlJY29uLCAzXVxuXHRcdHRvcDozXG5cdGJsdWV0b290aCA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDgpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxNSksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBvcGFjaXR5Oi41LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmx1ZXRvb3RoXCJcblx0Ymx1ZXRvb3RoLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCg4KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTUpfXB4JyB2aWV3Qm94PScwIDAgOCAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5CbHVldG9vdGg8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdFx0PGcgaWQ9J1N0YXR1cy1JY29ucy0oV2hpdGUpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTM3LjAwMDAwMCwgMC4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHRcdDxwYXRoIGQ9J00xNDAuNSwxNC41IEwxNDUsMTAuMjUgTDE0MS44LDcuNSBMMTQ1LDQuNzUgTDE0MC41LDAuNSBMMTQwLjUsNi4wNzE0Mjg1NyBMMTM3LjgsMy43NSBMMTM3LDQuNSBMMTQwLjI1ODMzMyw3LjM3NSBMMTM3LDEwLjI1IEwxMzcuOCwxMSBMMTQwLjUsOC42Nzg1NzE0MyBMMTQwLjUsMTQuNSBaIE0xNDEuNSwzIEwxNDMuMzY2NjY3LDQuNzUgTDE0MS41LDYuMjUgTDE0MS41LDMgWiBNMTQxLjUsOC41IEwxNDMuMzY2NjY3LDEwLjI1IEwxNDEuNSwxMiBMMTQxLjUsOC41IFonIGlkPSdCbHVldG9vdGgnPjwvcGF0aD5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJsdWV0b290aC5jb25zdHJhaW50cyA9IFxuXHRcdHRvcDogM1xuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeVBlcmNlbnQsIDddXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdCMgRXhwb3J0IHN0YXR1c0JhclxuXHRzdGF0dXNCYXIuYmF0dGVyeSA9IHt9XG5cdHN0YXR1c0Jhci5iYXR0ZXJ5LnBlcmNlbnQgPSBiYXR0ZXJ5UGVyY2VudFxuXHRzdGF0dXNCYXIuYmF0dGVyeS5pY29uID0gYmF0dGVyeUljb25cblx0c3RhdHVzQmFyLmJsdWV0b290aCA9IGJsdWV0b290aFxuXHRzdGF0dXNCYXIudGltZSA9IHRpbWVcblx0c3RhdHVzQmFyLm5ldHdvcmsgPSBuZXR3b3JrXG5cdHN0YXR1c0Jhci5jYXJyaWVyID0gY2FycmllclxuXHRzdGF0dXNCYXIuc2lnbmFsID0gc2lnbmFsXG5cdHJldHVybiBzdGF0dXNCYXJcblxuZXhwb3J0cy5LZXlib2FyZCA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImtleWJvYXJkXCIsIGFycmF5KVxuXG5cdCNUaGlzIHdpbGwgaG9sZCBhbGwgb2YgdGhlIHNwZWNzIGZvciBlYWNoIGRldmljZSdzIGtleWJvYXJkXG5cdGJvYXJkU3BlY3MgPSB7fVxuXG5cdCNUaGlzIHdpbGwgc2V0IHRoZSBzcGVjc1xuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2Vcblx0XHR3aGVuIFwiaXBob25lLTVcIlxuXHRcdFx0Ym9hcmRTcGVjcy5oZWlnaHQgPSAyMTVcblx0XHRcdGJvYXJkU3BlY3Mua2V5ID0ge1xuXHRcdFx0XHR3aWR0aDpleHBvcnRzLnB4KDI2KVxuXHRcdFx0XHRoZWlnaHQ6ZXhwb3J0cy5weCgzOSlcblx0XHRcdH1cblx0XHRcdGJvYXJkU3BlY3MuZXhwYW5kZWRLZXkgPSBleHBvcnRzLnB4KDM5KVxuXHRcdFx0Ym9hcmRTcGVjcy5leHBhbmRlZFNwYWNlciA9IGV4cG9ydHMucHgoMTIpXG5cblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZyA9IHt9XG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MSA9IGV4cG9ydHMucHgoMylcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cyID0gZXhwb3J0cy5weCgxOSlcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3czID0gZXhwb3J0cy5weCg1NClcblxuXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcCA9IHt9XG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cxID0gZXhwb3J0cy5weCgxMSlcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzIgPSBleHBvcnRzLnB4KDI2KVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyA9IGV4cG9ydHMucHgoNDEpXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3c0ID0gZXhwb3J0cy5weCg1NSlcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaGlmdEljb24gPSB7eDpleHBvcnRzLnB4KDkpLCB5OmV4cG9ydHMucHgoMil9XG5cdFx0XHRib2FyZFNwZWNzLmRlbGV0ZUljb24gPSB7eDpleHBvcnRzLnB4KDcpLCB5OmV4cG9ydHMucHgoMTApfVxuXHRcdFx0Ym9hcmRTcGVjcy5lbW9qaUljb24gPSB7eDpleHBvcnRzLnB4KDgpLCB5OmV4cG9ydHMucHgoOSl9XG5cblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleSA9IGV4cG9ydHMucHgoMzYuNSlcblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cyA9IGV4cG9ydHMucHgoNClcblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleUJvdHRvbSA9IGV4cG9ydHMucHgoNTgpXG5cblx0XHRcdGJvYXJkU3BlY3MuaVBhZERlbGV0ZU9mZnNldCA9IDBcblx0XHRcdGJvYXJkU3BlY3MuYm90dG9tUm93ID0gOFxuXHRcdFx0Ym9hcmRTcGVjcy5yZXR1cm5LZXkgPSBleHBvcnRzLnB4KDc0KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNwYWNlciA9IGV4cG9ydHMucHgoNilcblxuXHRcdHdoZW4gXCJpcGhvbmUtNnNcIlxuXHRcdFx0Ym9hcmRTcGVjcy5oZWlnaHQgPSAyMTZcblx0XHRcdGJvYXJkU3BlY3Mua2V5ID0ge1xuXHRcdFx0XHR3aWR0aDpleHBvcnRzLnB4KDMxLjUpXG5cdFx0XHRcdGhlaWdodDpleHBvcnRzLnB4KDQyKVxuXHRcdFx0fVxuXG5cdFx0XHRib2FyZFNwZWNzLmV4cGFuZGVkS2V5ID0gZXhwb3J0cy5weCg0Ni41KVxuXHRcdFx0Ym9hcmRTcGVjcy5leHBhbmRlZFNwYWNlciA9IGV4cG9ydHMucHgoMTQpXG5cblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZyA9IHt9XG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MSA9IGV4cG9ydHMucHgoMylcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3cyID0gZXhwb3J0cy5weCgyMilcblx0XHRcdGJvYXJkU3BlY3MucGFkZGluZy5yb3czID0gZXhwb3J0cy5weCg1OSlcblxuXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcCA9IHt9XG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cxID0gZXhwb3J0cy5weCgxMClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzIgPSBleHBvcnRzLnB4KDIyKVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyA9IGV4cG9ydHMucHgoMzQpXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3c0ID0gZXhwb3J0cy5weCg0NClcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaGlmdEljb24gPSB7eDpleHBvcnRzLnB4KDExKSwgeTpleHBvcnRzLnB4KDIpfVxuXHRcdFx0Ym9hcmRTcGVjcy5kZWxldGVJY29uID0ge3g6ZXhwb3J0cy5weCgxMCksIHk6ZXhwb3J0cy5weCgxMyl9XG5cdFx0XHRib2FyZFNwZWNzLmVtb2ppSWNvbiA9IHt4OmV4cG9ydHMucHgoMTEpLCB5OmV4cG9ydHMucHgoMTEpfVxuXG5cdFx0XHRib2FyZFNwZWNzLnJldHVybktleSA9IGV4cG9ydHMucHgoODcuNSlcblx0XHRcdGJvYXJkU3BlY3MuYm90dG9tUm93ID0gNlxuXHRcdFx0Ym9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0ID0gMFxuXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXkgPSBleHBvcnRzLnB4KDQyKVxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzID0gZXhwb3J0cy5weCg1KVxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5Qm90dG9tID0gZXhwb3J0cy5weCg1NilcblxuXHRcdFx0Ym9hcmRTcGVjcy5zcGFjZXIgPSBleHBvcnRzLnB4KDYpXG5cblx0XHR3aGVuIFwiaXBob25lLTZzLXBsdXNcIlxuXHRcdFx0Ym9hcmRTcGVjcy5oZWlnaHQgPSAyMjZcblx0XHRcdGJvYXJkU3BlY3Mua2V5ID0ge1xuXHRcdFx0XHR3aWR0aDpleHBvcnRzLnB4KDM1KVxuXHRcdFx0XHRoZWlnaHQ6ZXhwb3J0cy5weCg0NSlcblx0XHRcdH1cblx0XHRcdGJvYXJkU3BlY3MuZXhwYW5kZWRLZXkgPSBleHBvcnRzLnB4KDUwKVxuXHRcdFx0Ym9hcmRTcGVjcy5leHBhbmRlZFNwYWNlciA9IGV4cG9ydHMucHgoMjApXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcgPSB7fVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzEgPSBleHBvcnRzLnB4KDQpXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MiA9IGV4cG9ydHMucHgoMjUpXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MyA9IGV4cG9ydHMucHgoNjcpXG5cblxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3AgPSB7fVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MSA9IGV4cG9ydHMucHgoOClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzIgPSBleHBvcnRzLnB4KDE5KVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MyA9IGV4cG9ydHMucHgoMzApXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3c0ID0gZXhwb3J0cy5weCg0MSlcblxuXHRcdFx0Ym9hcmRTcGVjcy5zaGlmdEljb24gPSB7eDpleHBvcnRzLnB4KDEzKSwgeTpleHBvcnRzLnB4KDIpfVxuXHRcdFx0Ym9hcmRTcGVjcy5kZWxldGVJY29uID0ge3g6ZXhwb3J0cy5weCgxMSksIHk6ZXhwb3J0cy5weCgxNCl9XG5cdFx0XHRib2FyZFNwZWNzLmVtb2ppSWNvbiA9IHt4OmV4cG9ydHMucHgoMTEpLCB5OmV4cG9ydHMucHgoMTEpfVxuXG5cdFx0XHRib2FyZFNwZWNzLmJvdHRvbVJvdyA9IDZcblxuXHRcdFx0Ym9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0ID0gMFxuXG5cdFx0XHRib2FyZFNwZWNzLnJldHVybktleSA9IGV4cG9ydHMucHgoOTcpXG5cblx0XHRcdGJvYXJkU3BlY3Muc2lkZUtleSA9IGV4cG9ydHMucHgoNDUpXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMgPSBleHBvcnRzLnB4KDUpXG5cblx0XHRcdGJvYXJkU3BlY3Muc3BhY2VyID0gZXhwb3J0cy5weCg2KVxuXHRcdHdoZW4gXCJpcGFkXCJcblx0XHRcdGJvYXJkU3BlY3MuaGVpZ2h0ID0gMjY4XG5cdFx0XHRib2FyZFNwZWNzLmtleSA9IHtcblx0XHRcdFx0d2lkdGg6ZXhwb3J0cy5weCg1Nilcblx0XHRcdFx0aGVpZ2h0OmV4cG9ydHMucHgoNTYpXG5cdFx0XHR9XG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcgPSB7fVxuXHRcdFx0Ym9hcmRTcGVjcy5wYWRkaW5nLnJvdzEgPSBleHBvcnRzLnB4KDYpXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MiA9IGV4cG9ydHMucHgoMzUpXG5cdFx0XHRib2FyZFNwZWNzLnBhZGRpbmcucm93MyA9IGV4cG9ydHMucHgoNzQpXG5cblxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3AgPSB7fVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MSA9IGV4cG9ydHMucHgoMTApXG5cdFx0XHRib2FyZFNwZWNzLm1hcmdpblRvcC5yb3cyID0gZXhwb3J0cy5weCgxOClcblx0XHRcdGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzMgPSBleHBvcnRzLnB4KDI4KVxuXHRcdFx0Ym9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93NCA9IGV4cG9ydHMucHgoNDApXG5cblx0XHRcdGJvYXJkU3BlY3Muc2hpZnRJY29uID0ge3g6ZXhwb3J0cy5weCgxOCksIHk6ZXhwb3J0cy5weCgyKX1cblx0XHRcdGJvYXJkU3BlY3MuZGVsZXRlSWNvbiA9IHt4OmV4cG9ydHMucHgoMTgpLCB5OmV4cG9ydHMucHgoMjApfVxuXHRcdFx0Ym9hcmRTcGVjcy5lbW9qaUljb24gPSB7eDpleHBvcnRzLnB4KDE4KSwgeTpleHBvcnRzLnB4KDE4KX1cblxuXHRcdFx0Ym9hcmRTcGVjcy5ib3R0b21Sb3cgPSA3XG5cblx0XHRcdGJvYXJkU3BlY3MuaVBhZERlbGV0ZU9mZnNldCA9IGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzMgKyBib2FyZFNwZWNzLmtleS5oZWlnaHQgKiAyIC0gYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MVxuXG5cdFx0XHRib2FyZFNwZWNzLnJldHVybktleSA9IGV4cG9ydHMucHgoMTA2KVxuXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXkgPSBleHBvcnRzLnB4KDU2KVxuXHRcdFx0Ym9hcmRTcGVjcy5zaWRlS2V5MiA9IGV4cG9ydHMucHgoNzYpXG5cdFx0XHRib2FyZFNwZWNzLnNpZGVLZXlSYWRpdXMgPSBleHBvcnRzLnB4KDUpXG5cblx0XHRcdGJvYXJkU3BlY3Muc3BhY2VyID0gZXhwb3J0cy5weCgxMilcblxuXHRib2FyZCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjRDFENURBXCIsIG5hbWU6XCJrZXlib2FyZFwiXG5cblx0Ym9hcmQuc3BlY3MgPSBib2FyZFNwZWNzXG5cblx0I1RoaXMgd2lsbCBnZW5lcmF0ZSBhIG9iamVjdCB3aXRoIDIxNiBoZWlnaHQgYW5kIGl0J2xsIHN0cmV0Y2ggZW5kIHRvIGVuZC4gXG5cdGJvYXJkLmNvbnN0cmFpbnRzID0gKGhlaWdodDpib2FyZFNwZWNzLmhlaWdodCwgdHJhaWxpbmc6MCwgbGVhZGluZzowKVxuXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHQjVGhpcyB3aWxsIGRldGVyaW5lIGlmIGl0IHN0YXJ0cyBvbiB0aGUgYm90dG9tIG9yIHBvcHMgdXAgZnJvbSB0aGUgYm90dG9tIFxuXHRpZiBzZXR1cC5hbmltYXRlZFxuXHRcdGJvYXJkLnkgPSBleHBvcnRzLmhlaWdodFxuXHRcdGJvYXJkLmFuaW1hdGUgXG5cdFx0XHRwcm9wZXJ0aWVzOihtYXhZOiBleHBvcnRzLmhlaWdodClcblx0XHRcdHRpbWU6LjI1XG5cdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0ZWxzZVxuXHRcdGJvYXJkLm1heFkgPSBleHBvcnRzLmhlaWdodFxuXG5cdCNMZXR0ZXJzIHRvIGJlIG1hZGVcblx0bGV0dGVyc0FycmF5ID0gW1wicVwiLCBcIndcIiwgXCJlXCIsIFwiclwiLCBcInRcIiwgXCJ5XCIsIFwidVwiLCBcImlcIiwgXCJvXCIsIFwicFwiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcInpcIiwgXCJ4XCIsIFwiY1wiLCBcInZcIiwgIFwiYlwiLCBcIm5cIiwgXCJtXCJdXG5cdCNUaGVzZSBhcnJheXMgYXJlIGRlcGVuZWRlbnQgb24gdGhlIERldmljZVxuXHRzZWNvbmRBcnJheSA9IFtdXG5cdHRoaXJkQXJyYXkgPSBbXVxuXG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGFkXCJcblx0XHRcdHNlY29uZEFycmF5ID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiLCBcIi1cIiwgXCIvXCIsIFwiOlwiLCBcIjtcIiwgXCIoXCIsIFwiKVwiLCBcIiRcIiwgXCImXCIsIFwiQFwiLCBcInVuZG9cIiwgXCJoaWRlXCIsIFwiLlwiLCAnLCcsIFwiP1wiLCBcIiFcIiwgXCInXCIsIFwiXFxcIlwiXVxuXHRcdFx0dGhpcmRBcnJheSA9IFtcIlxcW1wiLCBcIlxcXVwiLCBcIlxce1wiLCBcIlxcfVwiLCBcIiNcIiwgXCIlXCIsIFwiXlwiLCBcIipcIiwgXCIrXCIsIFwiPVwiLCBcIl9cIiwgXCJcXFxcXCIsIFwifFwiLCBcIn5cIiwgXCI8XCIsIFwiPlwiLCBcIuKCrFwiLCBcIsKjXCIsIFwiwqVcIiwgXCJyZWRvXCIsIFwiaGlkZVwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiLCBcIlxcXCJcIl1cblx0XHRlbHNlXG5cdFx0XHRzZWNvbmRBcnJheSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIiwgXCItXCIsIFwiL1wiLCBcIjpcIiwgXCI7XCIsIFwiKFwiLCBcIilcIiwgXCIkXCIsIFwiJlwiLCBcIkBcIiwgXCJcXFwiXCIsIFwiLlwiLCAnLCcsIFwiP1wiLCBcIiFcIiwgXCInXCJdXG5cdFx0XHR0aGlyZEFycmF5ID0gW1wiXFxbXCIsIFwiXFxdXCIsIFwiXFx7XCIsIFwiXFx9XCIsIFwiI1wiLCBcIiVcIiwgXCJeXCIsIFwiKlwiLCBcIitcIiwgXCI9XCIsIFwiX1wiLCBcIlxcXFxcIiwgXCJ8XCIsIFwiflwiLCBcIjxcIiwgXCI+XCIsIFwi4oKsXCIsIFwiwqNcIiwgXCLCpVwiLCBcIuKAolwiLCBcIi5cIiwgJywnLCBcIj9cIiwgXCIhXCIsIFwiJ1wiLCBcIlxcXCJcIl1cblx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRsZXR0ZXJzQXJyYXkucHVzaCBcIixcIlxuXHRcdGxldHRlcnNBcnJheS5wdXNoIFwiLlwiXG5cblx0I051bWJlcnMgdG8gYmUgbWFkZSAoZGVwZW5kaW5nIG9uIGRldmljZSlcblx0bnVtc0FycmF5ID0gWzAuLjldXG5cblx0I0hvbGRzIHRoZSBrZXlzIHRoYXQgd2UgbWFrZS4gVGhpcyB3aWxsIGFsbG93cyB1cyB0byBxdWlja2x5IGl0ZXJhdGUgdGhyb3VnaCB0aGVtLiBcblx0a2V5c0FycmF5ID0gW11cblxuXHRrZXlQb3BVcCA9IG5ldyBMYXllciB3aWR0aDpAa2V5V2lkdGgsIGhlaWdodDpAa2V5SGVpZ2h0LCB4OkAueC0xNipleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwia2V5IHBvcCB1cFwiXG5cdGJveCA9IG5ldyBMYXllciBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcImxldHRlclwiXG5cdGJveC5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogMzkgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogMzAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogQGxpbmVIZWlnaHRcblx0fVxuXHRALmNvbG9yID0gXCJ3aGl0ZVwiXG5cdHBhdGggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNoYXBlIHBhdGhcIlxuXHRib2FyZC5rZXlQb3BVcCA9IGtleVBvcFVwXG5cdGJvYXJkLmtleVBvcFVwLmJveCA9IGJveFxuXG5cdHJvd3NNYXAgPSBbXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogYm9hcmRTcGVjcy5wYWRkaW5nLnJvdzFcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogOVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzFcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IGJvYXJkU3BlY3MucGFkZGluZy5yb3cyXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDEwXG5cdFx0XHRcImVuZEluZGV4XCIgOiAxOFxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzJcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IGJvYXJkU3BlY3MucGFkZGluZy5yb3czXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDE5XG5cdFx0XHRcImVuZEluZGV4XCIgOiAyNVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzNcblx0XHR9XG5cdF1cblxuXHRmaXJzdFJvd0tleVdpZHRoID0gMFxuXHRzZWNvbmRSb3dLZXlXaWR0aCA9IDBcblxuXHRib2FyZC5rZXlzID0ge31cblx0Zm9yIGxldHRlciBpbiBsZXR0ZXJzQXJyYXlcblx0XHRpbmRleCA9IGxldHRlcnNBcnJheS5pbmRleE9mKGxldHRlcikgXG5cdFx0a2V5ID0gbmV3IExheWVyIG5hbWU6bGV0dGVyLCBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6NSpleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBjb2xvcjpcImJsYWNrXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Mua2V5LndpZHRoLCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdFx0Ym9hcmQua2V5c1tsZXR0ZXJdID0ga2V5XG5cdFx0a2V5UG9wVXAuYnJpbmdUb0Zyb250KClcblx0XHRib3guYnJpbmdUb0Zyb250KClcblx0XHRpZiBleHBvcnRzLnNjYWxlID09IDJcblx0XHRcdGtleVBvcFVwLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY1LCBoZWlnaHQ6MTIyKVxuXHRcdFx0cGF0aC5jb25zdHJhaW50cyA9ICh3aWR0aDo2NSwgaGVpZ2h0OiAxMjIpXG5cdFx0XHRwYXRoLnkgPSAxMFxuXHRcdFx0QHBhdGhXaWR0aCA9IGV4cG9ydHMucHgoNjUpXG5cdFx0XHRAcGF0aEhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMzIpXG5cdFx0XHRAa2V5V2lkdGggPSBleHBvcnRzLnB4KDQ0KVxuXHRcdFx0QGxpbmVIZWlnaHQgPSBAa2V5V2lkdGggLSAxNyArIFwicHhcIlxuXHRcdFx0Ym94LmNvbnN0cmFpbnRzID0gKHdpZHRoOjMyLCBoZWlnaHQ6NDQpXG5cdFx0XHRib3guY2VudGVyWCgpXG5cdFx0XHRib3gueSA9IGV4cG9ydHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLnNjYWxlID09IDNcblx0XHRcdGtleVBvcFVwLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY4LCBoZWlnaHQ6MTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleVdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBsaW5lSGVpZ2h0ID0gQGtleVdpZHRoICsgXCJweFwiXG5cdFx0XHRAcGF0aFdpZHRoID0gZXhwb3J0cy5weCg2OClcblx0XHRcdEBwYXRoSGVpZ2h0ID0gZXhwb3J0cy5weCgxMjgpXG5cdFx0XHRwYXRoLnkgPSAwXG5cblxuXHRcdFx0Ym94LmNvbnN0cmFpbnRzID0gKHdpZHRoOjM1LCBoZWlnaHQ6NDYpXG5cdFx0XHRib3guY2VudGVyWCgpXG5cdFx0XHRib3gueSA9IGV4cG9ydHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjI2LCBoZWlnaHQ6MzkpXG5cblx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRrZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogMjUgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBrZXkuaGVpZ2h0IC0gZXhwb3J0cy5weCgyKSArIFwicHhcIlxuXHRcdH1cblx0XHRpZiBsZXR0ZXIgPT0gXCIsXCIgfHwgbGV0dGVyID09IFwiLlwiXG5cdFx0XHRleHRyYVN5bWJvbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmtleSwgd2lkdGg6ZXhwb3J0cy5weCgzMCksIGhlaWdodDpleHBvcnRzLnB4KDMwKSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeTpleHBvcnRzLnB4KDE1KSwgY29sb3I6ZXhwb3J0cy5jb2xvcihcImJsYWNrXCIpLCBuYW1lOlwiIS8/XCJcblx0XHRcdGV4dHJhU3ltYm9sLmNlbnRlclgoKVxuXHRcdFx0ZXh0cmFTeW1ib2wuc3R5bGUgPSB7XG5cdFx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDI0KSArIFwicHhcIlxuXHRcdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHRcdCdsaW5lLWhlaWdodCcgOiBcIjIwcHhcIlxuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggbGV0dGVyXG5cdFx0XHRcdHdoZW4gXCIsXCIgdGhlbiBleHRyYVN5bWJvbC5odG1sID0gXCIhXCJcblx0XHRcdFx0d2hlbiBcIi5cIiB0aGVuIGV4dHJhU3ltYm9sLmh0bWwgPSBcIj9cIlxuXHRcdFx0a2V5LnN0eWxlW1wibGluZS1oZWlnaHRcIl0gPSBrZXkuaGVpZ2h0ICsgZXhwb3J0cy5weCgxMCkgKyBcInB4XCJcblxuXHRcdGtleS5odG1sID0gbGV0dGVyXG5cdFx0XG5cdFx0aWYgaW5kZXggPD0gcm93c01hcFswXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMF0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzBdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKGZpcnN0Um93S2V5V2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMF0ubWFyZ2luVG9wXG5cdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHQjSGFuZGxlIHRoZSBleHRyYSBwaXhlbHMgb24gdGhlIHRvcCByb3dcblx0XHRcdFx0aWYgaW5kZXggJSAyICE9IDBcblx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyBleHBvcnRzLnB4KDIpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRrZXkud2lkdGggPSBrZXkud2lkdGggKyBleHBvcnRzLnB4KDEpXG5cdFx0XHRmaXJzdFJvd0tleVdpZHRoID0gZmlyc3RSb3dLZXlXaWR0aCArIGtleS53aWR0aFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFswXS5lbmRJbmRleCAmJiBpbmRleCA8PSByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsxXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMV0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAoc2Vjb25kUm93S2V5V2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMV0ubWFyZ2luVG9wICsga2V5LmhlaWdodFxuXHRcdFx0a2V5LndpZHRoID0ga2V5LndpZHRoICsgZXhwb3J0cy5weCgxKVxuXHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSBzZWNvbmRSb3dLZXlXaWR0aCArIGtleS53aWR0aFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzJdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXG5cdFx0cGF0aC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7QHBhdGhXaWR0aH1weCcgaGVpZ2h0PScje0BwYXRoSGVpZ2h0fScgdmlld0JveD0nMCAwIDYzIDExNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDx0aXRsZT5SZWN0YW5nbGUgNDQgQ29weTwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz5cblx0XHRcdFx0XHQ8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0XHRcdDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdFx0XHQ8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0XHRcdDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIxIDAnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyB0eXBlPSdtYXRyaXgnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdFx0XHQ8ZmVNZXJnZT5cblx0XHRcdFx0XHRcdFx0PGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0XHRcdDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHRcdDwvZmVNZXJnZT5cblx0XHRcdFx0XHQ8L2ZpbHRlcj5cblx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTguMDAwMDAwLCAtMjQwLjAwMDAwMCknIHN0cm9rZT0nI0M3QzdDNycgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlLXdpZHRoPScwLjUnIFxuXHRcdFx0XHRcdGZpbGw9JyNGRkZGRkYnIG9wYWNpdHk9JzAuOTk4MzY3NTM3Jz5cblx0XHRcdFx0XHQgPHBhdGggZD0nTTEzNCwzMDYgQzEzNCwzMDYgMTIxLDI5NSAxMjEsMjkwIEMxMjEsMjc5LjYxNjc4OCAxMjEsMjUzLjAwMTQ1NiAxMjEsMjUzLjAwMTQ1NiBDMTIxLDI0Ny40Nzc4MDQgMTI1LjQ4NTgzMiwyNDMgMTMxLjAwMjc3NCwyNDMgTDE2Ny44NjIxMjcsMjQzIEMxNzMuMzg2NTA3LDI0MyAxNzcuODgwODYyLDI0Ny40Njk5MDUgXG5cdFx0XHRcdFx0IDE3Ny45MDAwNDQsMjUyLjk5NzI3MSBDMTc3LjkwMDA0NCwyNTIuOTk3MjcxIDE3OCwyODAgMTc3Ljk5OTk5OSwyOTAgQzE3Ny45OTk5OTksMjk1LjAwNjU1MyAxNjUsMzA2IDE2NSwzMDYgTDE2NSwzNDYuMDQ5NTk0IFxuXHRcdFx0XHRcdCBDMTY1LDM0OC44MDY4MDcgMTYyLjc3MDU1NiwzNTEuMDQxOTY5IDE2MC4wMDIwOTgsMzUxLjA0MTk2OSBMMTM4Ljk5NzkwMiwzNTEuMDQxOTY5IFxuXHRcdFx0XHRcdCAgQzEzNi4yMzc2MzcsMzUxLjA0MTk2OSAxMzQsMzQ4LjgwODMzMSAxMzQsMzQ2LjA0OTU5NCBMMTM0LDMwNiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDI5Ny4wMjA5ODUpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTE0OS41MDAwMDAsIC0yOTcuMDIwOTg1KSAnPlxuXHRcdFx0XHRcdCAgPC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRrZXlzQXJyYXkucHVzaCBrZXlcblxuXHRcdGlmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiICYmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZC1wcm9cIlxuXHRcdFx0IyMgaVBob25lIEtleSBBbmltYXRpb25zXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdGtleVBvcFVwLnZpc2libGUgPSB0cnVlXHRcblx0XHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXG5cblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hNb3ZlLCAtPlxuXHRcdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcdFxuXG5cdFx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdGVsc2UgXG5cdFx0XHQjaVBhZCBLZXkgQW5pbWF0aW9uc1xuXHRcdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRALmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdEAuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5zd2l0Y2goXCJkZWZhdWx0XCIpXG5cdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIilcblxuXHRcdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLnN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXG5cdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblxuXHRcdFx0XHRpZiBzZXR1cC5vdXRwdXRcblx0XHRcdFx0XHRAbmV3VGV4dCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwgKyBALm5hbWUudG9VcHBlckNhc2UoKVxuXHRcdFx0XHRcdGV4cG9ydHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpAbmV3VGV4dF0pXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0XHRcdEBuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbCArIEAubmFtZVxuXHRcdFx0XHRcdGV4cG9ydHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpAbmV3VGV4dF0pXG5cblx0Ym9hcmQua2V5c0FycmF5ID0ga2V5c0FycmF5XG5cblx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXHQjIyBTSElGVCBLRVlcblxuXHRzaGlmdEtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwic2hpZnRcIiwgYm9yZGVyUmFkaXVzOmJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cywgY29sb3I6ZXhwb3J0cy5jb2xvcihcImJsYWNrXCIpLCBiYWNrZ3JvdW5kQ29sb3I6ZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5zaWRlS2V5LCB5Oihib2FyZFNwZWNzLm1hcmdpblRvcC5yb3czICsgYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICogMilcblx0c2hpZnRLZXkuY29uc3RyYWludHMgPSAobGVhZGluZzpleHBvcnRzLnB0KGJvYXJkU3BlY3MucGFkZGluZy5yb3cxKSlcblx0c2hpZnRJY29uID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMjApLCBoZWlnaHQ6ZXhwb3J0cy5weCgxOSksIHN1cGVyTGF5ZXI6c2hpZnRLZXksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6Ym9hcmRTcGVjcy5zaGlmdEljb24ueCwgeTpib2FyZFNwZWNzLnNoaWZ0SWNvbi55XG5cdHNoaWZ0SWNvbi5odG1sID0gaWNvbkxpYnJhcnkuc2hpZnQub2ZmXG5cblx0c2hpZnRJY29uLnN0YXRlcy5hZGRcblx0XHRcIm9uXCI6XG5cdFx0XHRodG1sOiBpY29uTGlicmFyeS5zaGlmdC5vblxuXHRzaGlmdEljb24uc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHQgIHRpbWU6IC4wMVxuXG5cdHNoaWZ0S2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblxuXHRcdH1cblxuXG5cblx0c2hpZnRLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHN3aXRjaCBib2FyZC5rZXlib2FyZFN0YXRlIFxuXHRcdFx0d2hlbiAxXG5cdFx0XHRcdHNoaWZ0SWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2hpZnRJY29uMi5zdGF0ZXMubmV4dCgpXG5cdFx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcdFxuXHRcdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0XHRcdGJveC5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdFx0Ym94LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0d2hlbiAyXG5cdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdGtleS5odG1sID0gdGhpcmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRrZXkubmFtZSA9IHRoaXJkQXJyYXlbaW5kZXhdXG5cdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAzXG5cdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIjEyM1wiXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIjEyM1wiXG5cdFx0XHR3aGVuIDNcblx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0aWYgaW5kZXggPCAyN1xuXHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGtleS5odG1sID0gc2Vjb25kQXJyYXlbaW5kZXhdXG5cdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAyNlxuXHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblxuXHRib2FyZC5rZXlzLnNoaWZ0ID0gc2hpZnRLZXlcblx0Ym9hcmQua2V5cy5zaGlmdC5pY29uID0gc2hpZnRJY29uXG5cblx0IyMgREVMRVRFIEtFWVxuXG5cdGRlbGV0ZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6Ym9hcmRTcGVjcy5zaWRlS2V5UmFkaXVzLCBiYWNrZ3JvdW5kQ29sb3I6ZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgbmFtZTpcImRlbGV0ZVwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLnNpZGVLZXksIHk6KGJvYXJkU3BlY3MubWFyZ2luVG9wLnJvdzMgKyBib2FyZFNwZWNzLmtleS5oZWlnaHQgKiAyIC0gYm9hcmRTcGVjcy5pUGFkRGVsZXRlT2Zmc2V0KVxuXG5cblx0ZGVsZXRlS2V5LmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nOmV4cG9ydHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpLzIpXG5cdGRlbGV0ZUljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpkZWxldGVLZXksIHdpZHRoOmV4cG9ydHMucHgoMjQpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxOCksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6Ym9hcmRTcGVjcy5kZWxldGVJY29uLngsIHk6Ym9hcmRTcGVjcy5kZWxldGVJY29uLnlcblx0XG5cdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0ZGVsZXRlS2V5LndpZHRoID0gZGVsZXRlS2V5LndpZHRoICsgZXhwb3J0cy5weCg1KVxuXG5cdGRlbGV0ZUljb24uc3RhdGVzLmFkZCBcblx0XHRcIm9uXCI6IFxuXHRcdFx0aHRtbDogaWNvbkxpYnJhcnkuZGVsZXRlLm9uXG5cblx0ZGVsZXRlSWNvbi5zdGF0ZXMuYWRkXG5cdFx0b2ZmOiBcblx0XHRcdGh0bWw6IGljb25MaWJyYXJ5LmRlbGV0ZS5vZmZcblxuXG5cdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cblx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKVxuXHRcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvZmZcIilcblxuXHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0aW5pdGlhbExlbmd0aCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwubGVuZ3RoXG5cdFx0XHRuZXdUZXh0ID0gc2V0dXAub3V0cHV0LnRleHQuaHRtbC5zbGljZSgwLCAtMSlcblx0XHRcdGV4cG9ydHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdGVuZExlbmd0aCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwubGVuZ3RoXG5cdFx0XHRpZiBpbml0aWFsTGVuZ3RoID09IGVuZExlbmd0aCBcblx0XHRcdFx0bmV3VGV4dCA9IHNldHVwLm91dHB1dC50ZXh0Lmh0bWwuc2xpY2UoMCwgLTYpXG5cdFx0XHRcdGV4cG9ydHMudXBkYXRlKHNldHVwLm91dHB1dC50ZXh0LCBbdGV4dDpuZXdUZXh0XSlcblx0XHRcdGlmIHNldHVwLm91dHB1dC50ZXh0Lmh0bWwgPT0gXCJcIlxuXHRcdFx0XHRzZXR1cC5vdXRwdXQucGxhY2Vob2xkZXIudmlzaWJsZSA9IHRydWVcblxuXG5cblx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9mZlwiKVxuXG5cdGJvYXJkLmtleXMuZGVsZXRlID0gZGVsZXRlS2V5XG5cdGJvYXJkLmtleXMuZGVsZXRlLmljb24gPSBkZWxldGVJY29uXG5cblx0IyMgRVhUUkEgS0VZU1xuXG5cdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0a2V5Ym9hcmRLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImRpc21pc3NcIiwgYm9yZGVyUmFkaXVzOmJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cywgYmFja2dyb3VuZENvbG9yOmV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIiksIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIHdpZHRoOmJvYXJkU3BlY3Muc2lkZUtleSwgaGVpZ2h0OmJvYXJkU3BlY3Muc2lkZUtleVxuXHRcdGtleWJvYXJkS2V5LmNvbnN0cmFpbnRzID0ge3RyYWlsaW5nRWRnZXM6ZGVsZXRlS2V5LCBib3R0b206Ym9hcmRTcGVjcy5ib3R0b21Sb3d9XG5cdFx0a2V5Ym9hcmRJY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5Ym9hcmRLZXksIHdpZHRoOmV4cG9ydHMucHgoMzIuNSksIGhlaWdodDpleHBvcnRzLnB4KDIzLjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0a2V5Ym9hcmRJY29uLmh0bWwgPSBpY29uTGlicmFyeS5rZXlib2FyZFxuXHRcdGtleWJvYXJkSWNvbi5jZW50ZXIoKVxuXG5cdFx0Ym9hcmQua2V5cy5kaXNtaXNzID0ga2V5Ym9hcmRLZXlcblxuXHRcdHNoaWZ0S2V5MiA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwic2hpZnRcIiwgYm9yZGVyUmFkaXVzOmJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cyxjb2xvcjpleHBvcnRzLmNvbG9yKFwiYmxhY2tcIiksIGJhY2tncm91bmRDb2xvcjpleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXkyLCBoZWlnaHQ6Ym9hcmRTcGVjcy5zaWRlS2V5XG5cdFx0c2hpZnRLZXkyLmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nRWRnZXM6ZGVsZXRlS2V5LCBib3R0b21FZGdlczpzaGlmdEtleSlcblx0XHRzaGlmdEljb24yID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMjApLCBoZWlnaHQ6ZXhwb3J0cy5weCgxOSksIHN1cGVyTGF5ZXI6c2hpZnRLZXkyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmJvYXJkU3BlY3Muc2hpZnRJY29uLngrZXhwb3J0cy5weCgxMCksIHk6Ym9hcmRTcGVjcy5zaGlmdEljb24ueVxuXHRcdHNoaWZ0SWNvbjIuaHRtbCA9IGljb25MaWJyYXJ5LnNoaWZ0Lm9mZlxuXG5cdFx0c2hpZnRLZXkyLnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiAoYm9hcmRTcGVjcy5rZXkuaGVpZ2h0KSArIFwicHhcIlxuXG5cdFx0fVxuXG5cblx0XHRzaGlmdEljb24yLnN0YXRlcy5hZGRcblx0XHRcdFwib25cIjpcblx0XHRcdFx0aHRtbDogaWNvbkxpYnJhcnkuc2hpZnQub25cblx0XHRzaGlmdEljb24yLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cblx0XHQgIHRpbWU6IC4wMVxuXG5cdFx0c2hpZnRJY29uMi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHN3aXRjaCBib2FyZC5rZXlib2FyZFN0YXRlIFxuXHRcdFx0XHR3aGVuIDFcblx0XHRcdFx0XHRzaGlmdEljb24uc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRcdHNoaWZ0SWNvbjIuc3RhdGVzLm5leHQoKVxuXHRcdFx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcdFxuXHRcdFx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdFx0XHRcdGJveC5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIilcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cdFx0XHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdFx0XHRib3guc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdHdoZW4gMlxuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0a2V5Lmh0bWwgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSB0aGlyZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAzXG5cdFx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiMTIzXCJcblx0XHRcdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIjEyM1wiXG5cdFx0XHRcdHdoZW4gM1xuXHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPCAyN1xuXHRcdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAyNlxuXHRcdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRzaGlmdEtleS5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXG5cblx0XHRudW1LZXkyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJudW1cIiwgYm9yZGVyUmFkaXVzOmJvYXJkU3BlY3Muc2lkZUtleVJhZGl1cywgY29sb3I6ZXhwb3J0cy5jb2xvcihcImJsYWNrXCIpLCBiYWNrZ3JvdW5kQ29sb3I6ZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5MiwgaGVpZ2h0OmJvYXJkU3BlY3Mua2V5LmhlaWdodFxuXHRcdG51bUtleTIuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdG51bUtleTIuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGJvYXJkU3BlY3Mua2V5LmhlaWdodCArIFwicHhcIlxuXG5cdFx0fVxuXHRcdG51bUtleTIuY29uc3RyYWludHMgPSB7dHJhaWxpbmc6W2tleWJvYXJkS2V5LCAxMl0sIGJvdHRvbUVkZ2VzOmtleWJvYXJkS2V5fVxuXG5cdFx0bnVtS2V5Mi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHN3aXRjaCBib2FyZC5rZXlib2FyZFN0YXRlXG5cdFx0XHRcdHdoZW4gMVxuXHRcdFx0XHRcdCMjIENoYW5nZSBMZXR0ZXJzXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBpbmRleCA8IDI3XG5cdFx0XHRcdFx0XHRcdGlmIHNlY29uZEFycmF5W2luZGV4XSA9PSBcInVuZG9cIlxuXHRcdFx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGtleS53aWR0aCAqIDIgKyBib2FyZFNwZWNzLnNwYWNlclxuXHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IGV4cG9ydHMucHgoMTcpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA0MDBcblx0XHRcdFx0XHRcdFx0aWYgc2Vjb25kQXJyYXlbaW5kZXhdID09IFwiaGlkZVwiXG5cdFx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAyNlxuXHRcdFx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGtleS52aXNpYmxlID0gZmFsc2VcblxuXHRcdFx0XHRcdCMjIEhhbmRsZSBudW0ga2V5cyBhbmQgc2hpZnQga2V5c1xuXHRcdFx0XHRcdG51bUtleS5odG1sID0gXCJBQkNcIlxuXHRcdFx0XHRcdHNoaWZ0S2V5Lmh0bWwgPSBcIiMrPVwiXG5cdFx0XHRcdFx0c2hpZnRJY29uLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0XHRcdFx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGFkXCJcblx0XHRcdFx0XHRcdHNoaWZ0SWNvbjIudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiQUJDXCJcblx0XHRcdFx0XHRib2FyZC5rZXlib2FyZFN0YXRlID0gMlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRpZiBrZXkuaHRtbCA9PSBcInVuZG9cIiB8fCBcInJlZG9cIlxuXHRcdFx0XHRcdFx0XHRrZXkud2lkdGggPSBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXNpemVcIl0gPSBleHBvcnRzLnB4KDI1KSArIFwicHhcIlxuXHRcdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDMwMFxuXHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRrZXkubmFtZSA9IGxldHRlcnNBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdGtleS5odG1sID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPiAyNVxuXHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRzaGlmdEljb24udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0XHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdFx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIi4/MTIzXCJcblx0XHRcdFx0XHRcdG51bUtleTIuaHRtbCA9IFwiLj8xMjNcIlxuXHRcdFx0XHRcdFx0c2hpZnRLZXkyLmh0bWwgPSBcIlwiXG5cdFx0XHRcdFx0XHRzaGlmdEljb24yLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDFcblxuXG5cdCMjIE5VTSBLRVkgdG9wOmV4cG9ydHMucHQoYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93NCArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCozKVxuXG5cdG51bUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwibnVtXCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6ZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiLCB3aWR0aDpib2FyZFNwZWNzLnNpZGVLZXksIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0bnVtS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbTpib2FyZFNwZWNzLmJvdHRvbVJvdywgbGVhZGluZ0VkZ2VzOnNoaWZ0S2V5KVxuXHRpZiBleHBvcnRzLmRldmljZSAhPSBcImlwYWRcIiAmJiBleHBvcnRzLmRldmljZSAhPSBcImlwYWQtcHJvXCJcblx0XHRudW1LZXkuaHRtbCA9IFwiMTIzXCJcblx0ZWxzZSBcblx0XHRudW1LZXkuaHRtbCA9IFwiLj8xMjNcIlxuXHRudW1LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogYm9hcmRTcGVjcy5rZXkuaGVpZ2h0ICsgXCJweFwiXG5cdH1cblxuXHRudW1LZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0c3dpdGNoIGJvYXJkLmtleWJvYXJkU3RhdGVcblx0XHRcdHdoZW4gMVxuXHRcdFx0XHQjIyBDaGFuZ2UgTGV0dGVyc1x0XHRcblx0XHRcdFx0c3dpdGNoIGV4cG9ydHMuZGV2aWNlXG5cdFx0XHRcdFx0d2hlbiBcImlwYWRcIlxuXHRcdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRcdGlmIGluZGV4IDwgMjdcblx0XHRcdFx0XHRcdFx0XHRpZiBzZWNvbmRBcnJheVtpbmRleF0gPT0gXCJ1bmRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS53aWR0aCA9IGtleS53aWR0aCAqIDIgKyBib2FyZFNwZWNzLnNwYWNlclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LnN0eWxlW1wiZm9udC1zaXplXCJdID0gZXhwb3J0cy5weCgxNykgKyBcInB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNDAwXG5cdFx0XHRcdFx0XHRcdFx0aWYgc2Vjb25kQXJyYXlbaW5kZXhdID09IFwiaGlkZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdFx0a2V5Lm5hbWUgPSBzZWNvbmRBcnJheVtpbmRleF1cblx0XHRcdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDI2XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXkuc3ViTGF5ZXJzWzBdLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0c2hpZnRJY29uMi52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0XHRcdHNoaWZ0S2V5Mi5odG1sID0gXCIjKz1cIlxuXHRcdFx0XHRcdFx0bnVtS2V5Mi5odG1sID0gXCJBQkNcIlxuXHRcdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRyb3dJbmRleCA9IDAgXG5cdFx0XHRcdFx0XHRzZWNvbmRSb3dLZXlXaWR0aCA9IDBcblx0XHRcdFx0XHRcdGZvciBrZXksIGluZGV4IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdFx0XHRrZXkubmFtZSA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRrZXkuaHRtbCA9IHNlY29uZEFycmF5W2luZGV4XVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAxOVxuXHRcdFx0XHRcdFx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0XHRcdFx0XHRcdCMjIDJuZCBSb3dcblx0XHRcdFx0XHRcdFx0aWYgaW5kZXggPiA5ICYmIGluZGV4IDwgMjBcblx0XHRcdFx0XHRcdFx0XHRrZXkueCA9IHJvd3NNYXBbMF0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAoc2Vjb25kUm93S2V5V2lkdGgpXG5cdFx0XHRcdFx0XHRcdFx0cm93SW5kZXgrK1xuXHRcdFx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gc2Vjb25kUm93S2V5V2lkdGggKyBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA9PSAyMFxuXHRcdFx0XHRcdFx0XHRcdGtleS5jb25zdHJhaW50cyA9IHtsZWFkaW5nOltzaGlmdEtleSwgZXhwb3J0cy5wdChib2FyZFNwZWNzLmV4cGFuZGVkU3BhY2VyKV19XG5cdFx0XHRcdFx0XHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDE5XG5cdFx0XHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5leHBhbmRlZEtleVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDIwXG5cdFx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6W2tleXNBcnJheVtpbmRleCAtIDFdLCBleHBvcnRzLnB0KGJvYXJkU3BlY3Muc3BhY2VyKV19XG5cdFx0XHRcdFx0XHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdFx0XHRcdFx0XHRpZiBpbmRleCA+IDI0XG5cdFx0XHRcdFx0XHRcdFx0a2V5LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRcdFx0Ym9hcmQua2V5Ym9hcmRTdGF0ZSA9IDJcblxuXG5cdFx0XHRcdCMjIEhhbmRsZSBudW0ga2V5cyBhbmQgc2hpZnQga2V5c1xuXHRcdFx0XHRudW1LZXkuaHRtbCA9IFwiQUJDXCJcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiIys9XCJcblx0XHRcdFx0c2hpZnRJY29uLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiXG5cdFx0XHRcdFx0c2Vjb25kUm93S2V5V2lkdGggPSAwXG5cdFx0XHRcdFx0cm93SW5kZXggPSAwXG5cdFx0XHRcdFx0Zm9yIGtleSwgaW5kZXggaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0XHRrZXkud2lkdGggPSBib2FyZFNwZWNzLmtleS53aWR0aFxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPiA5ICYmIGluZGV4IDwgMTlcblx0XHRcdFx0XHRcdFx0a2V5LnggPSByb3dzTWFwWzFdLnBhZGRpbmcgKyAocm93SW5kZXgqYm9hcmRTcGVjcy5zcGFjZXIpICsgKHNlY29uZFJvd0tleVdpZHRoKVxuXHRcdFx0XHRcdFx0XHRrZXkueSA9IHJvd3NNYXBbMV0ubWFyZ2luVG9wICsga2V5LmhlaWdodFxuXHRcdFx0XHRcdFx0XHRyb3dJbmRleCsrXG5cdFx0XHRcdFx0XHRcdHNlY29uZFJvd0tleVdpZHRoID0gc2Vjb25kUm93S2V5V2lkdGggKyBrZXkud2lkdGhcblx0XHRcdFx0XHRcdGlmIGluZGV4ID09IDE5XG5cdFx0XHRcdFx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXHRcdFx0XHRcdFx0aWYgaW5kZXggPj0gMTlcblx0XHRcdFx0XHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0XHRcdFx0XHRrZXkueCA9IHJvd3NNYXBbMl0ucGFkZGluZyArIChyb3dJbmRleCpib2FyZFNwZWNzLnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0XHRcdFx0XHRrZXkueSA9IHJvd3NNYXBbMl0ubWFyZ2luVG9wICsga2V5LmhlaWdodCAqIDJcblx0XHRcdFx0XHRcdFx0a2V5LmNvbnN0cmFpbnRzID0ge31cblxuXHRcdFx0XHRmb3Iga2V5LCBpbmRleCBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRpZiBrZXkuaHRtbCA9PSBcInVuZG9cIiB8fCBcInJlZG9cIlxuXHRcdFx0XHRcdFx0a2V5LndpZHRoID0gYm9hcmRTcGVjcy5rZXkud2lkdGhcblx0XHRcdFx0XHRcdGtleS5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IGV4cG9ydHMucHgoMjUpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRrZXkuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDMwMFxuXHRcdFx0XHRcdGtleS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGtleS5uYW1lID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdGtleS5odG1sID0gbGV0dGVyc0FycmF5W2luZGV4XVxuXHRcdFx0XHRcdGlmIGluZGV4ID4gMjVcblx0XHRcdFx0XHRcdGtleS5zdWJMYXllcnNbMF0udmlzaWJsZSA9IHRydWVcblx0XHRcdFx0c2hpZnRLZXkuaHRtbCA9IFwiXCJcblx0XHRcdFx0c2hpZnRJY29uLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBhZFwiXG5cdFx0XHRcdFx0bnVtS2V5Lmh0bWwgPSBcIi4/MTIzXCJcblx0XHRcdFx0XHRudW1LZXkyLmh0bWwgPSBcIi4/MTIzXCJcblx0XHRcdFx0XHRzaGlmdEtleTIuaHRtbCA9IFwiXCJcblx0XHRcdFx0XHRzaGlmdEljb24yLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGJvYXJkLmtleWJvYXJkU3RhdGUgPSAxXG5cblxuXHRleHBvcnRzLmxheW91dCgpXG5cblx0IyMgRU1PSkkgS0VZXG5cblx0ZW1vamlLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImVtb2ppXCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6ZXhwb3J0cy5jb2xvcihcImxpZ2h0LWtleVwiKSwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgd2lkdGg6Ym9hcmRTcGVjcy5zaWRlS2V5LCBoZWlnaHQ6Ym9hcmRTcGVjcy5rZXkuaGVpZ2h0XG5cdGVtb2ppS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbUVkZ2VzOm51bUtleSwgbGVhZGluZzpbbnVtS2V5LCA2XSlcblx0ZW1vamlJY29uID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMjApLCBoZWlnaHQ6ZXhwb3J0cy5weCgxOSksIHN1cGVyTGF5ZXI6ZW1vamlLZXksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6Ym9hcmRTcGVjcy5lbW9qaUljb24ueCwgeTpib2FyZFNwZWNzLmVtb2ppSWNvbi55XG5cdGVtb2ppSWNvbi5odG1sID0gaWNvbkxpYnJhcnkuZW1vamlcblxuXG5cblx0IyMgUkVUVVJOIEtFWVxuXG5cdHJldHVybktleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOmV4cG9ydHMuY29sb3Ioc2V0dXAucmV0dXJuQ29sb3IpLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCIsIG5hbWU6XCJyZXR1cm5cIiwgd2lkdGg6Ym9hcmRTcGVjcy5yZXR1cm5LZXksIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0aWYgc2V0dXAucmV0dXJuQ29sb3IgIT0gXCJsaWdodC1rZXlcIlxuXHRcdHJldHVybktleS5jb2xvciA9IGV4cG9ydHMuc2V0VGV4dENvbG9yKGV4cG9ydHMuY29sb3Ioc2V0dXAucmV0dXJuQ29sb3IpKVxuXHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwYWRcIlxuXHRcdHJldHVybktleS5jb25zdHJhaW50cyA9ICh0cmFpbGluZ0VkZ2VzOmRlbGV0ZUtleSwgdG9wOmV4cG9ydHMucHQoYm9hcmRTcGVjcy5tYXJnaW5Ub3Aucm93MiArIGJvYXJkU3BlY3Mua2V5LmhlaWdodCkgKVxuXHRlbHNlXG5cdFx0cmV0dXJuS2V5LmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nOmV4cG9ydHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpLzIsIGJvdHRvbUVkZ2VzOm51bUtleSlcblx0cmV0dXJuS2V5Lmh0bWwgPSBzZXR1cC5yZXR1cm5UZXh0XG5cdHJldHVybktleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblxuXHR9XG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHRzdG9yZWRUZXh0Q29sb3IgPSByZXR1cm5LZXkuY29sb3Jcblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRyZXR1cm5LZXkuY29sb3IgPSBleHBvcnRzLmNvbG9yKFwiYmxhY2tcIilcblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRyZXR1cm5LZXkuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvcilcblx0XHRyZXR1cm5LZXkuY29sb3IgPSBzdG9yZWRUZXh0Q29sb3JcblxuXHRib2FyZC5rZXlzLnJldHVybiA9IHJldHVybktleVxuXG5cblx0IyMgU1BBQ0UgS0VZXG5cblx0c3BhY2VLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcInNwYWNlXCIsIGhlaWdodDpib2FyZFNwZWNzLmtleS5oZWlnaHRcblx0XG5cdGlmIGV4cG9ydHMuZGV2aWNlICE9IFwiaXBhZFwiXG5cdFx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAoYm90dG9tRWRnZXM6bnVtS2V5LCBsZWFkaW5nOltlbW9qaUtleSwgZXhwb3J0cy5wdChib2FyZFNwZWNzLnNwYWNlcildLCB0cmFpbGluZzpbcmV0dXJuS2V5LCBib2FyZFNwZWNzLnNwYWNlcl0pXG5cdFx0c3BhY2VLZXkuaHRtbCA9IFwic3BhY2VcIlxuXHRcdHNwYWNlS2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBib2FyZFNwZWNzLmtleS5oZWlnaHQgKyBcInB4XCJcblxuXHRcdH1cblx0ZWxzZVxuXHRcdHNwYWNlS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbUVkZ2VzOm51bUtleSwgbGVhZGluZzpbZW1vamlLZXksIGV4cG9ydHMucHQoYm9hcmRTcGVjcy5zcGFjZXIpXSwgdHJhaWxpbmc6W251bUtleTIsIGJvYXJkU3BlY3Muc3BhY2VyXSlcblx0Ym9hcmQua2V5c1tcIiZuYnNwO1wiXSA9IHNwYWNlS2V5XG5cdGJvYXJkLmtleXMuc3BhY2UgPSBzcGFjZUtleVxuXHRleHBvcnRzLmxheW91dCgpXG5cblxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLmNvbG9yKFwibGlnaHQta2V5XCIpXG5cblx0c3BhY2VLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNwYWNlS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdGlmIHNldHVwLm91dHB1dFxuXHRcdFx0QG5ld1RleHQgPSBzZXR1cC5vdXRwdXQudGV4dC5odG1sICsgXCImbmJzcDtcIlxuXHRcdFx0ZXhwb3J0cy51cGRhdGUoc2V0dXAub3V0cHV0LnRleHQsIFt0ZXh0OkBuZXdUZXh0XSlcblxuXG5cdCMjIEVNT0pJU1xuXG5cdGVtb2ppRm9ybWF0dGVyID0gKHN0cmluZykgLT5cblx0XHR1bmljb2RlRm9ybWF0ID0gXCJcIlxuXHRcdGlmIHN0cmluZ1swXSA9PSBcIkVcIiB8fCBzdHJpbmdbMF0gPT0gXCIzXCIgfHwgc3RyaW5nWzBdID09IFwiMlwiIHx8IHN0cmluZ1swXSA9PSBcIkNcIlxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0ZWxzZSBcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdHVuaWNvZGVGb3JtYXQgPSBcIiVGMCU5RlwiXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRyZXR1cm4gdW5pY29kZUZvcm1hdFxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0ZW1vamlTZWN0aW9ucyA9IFtcIkZyZXF1bmV0bHkgVXNlZFwiLCBcIlNtaWxleXMgJiBQZW9wbGVcIiwgXCJBbmltYWxzICYgTmF0dXJlXCIsIFwiRm9vZCAmIERyaW5rXCIsIFwiQWN0aXZpdHlcIiwgXCJUcmF2ZWwgJiBQbGFjZXNcIiwgXCJPYmplY3RzXCIsIFwiU3ltYm9sc1wiLCBcIkZsYWdzXCJdXG5cdHJhd0Vtb2ppcyA9IFtcIjk4IDgwXCIsIFwiOTggQUNcIiwgXCI5OCA4MVwiLCBcIjk4IDgyXCIsIFwiOTggODNcIiwgXCI5OCA4NFwiLCBcIjk4IDg1XCIsIFwiOTggODZcIiwgXCI5OCA4N1wiLCBcIjk4IDg5XCIsIFwiOTggOGFcIiwgXCI5OSA4MlwiLCBcIjk5IDgzXCIsIFwiRTIgOTggQkEgRUYgQjggOEZcIiwgXCI5OCA4QlwiICwgXCI5OCA4Q1wiLCBcIjk4IDhEXCIsIFwiOTggOThcIiwgXCI5OCA5N1wiLCBcIjk4IDk5XCIsIFwiOTggOUFcIiwgXCI5OCA5Q1wiLCBcIjk4IDlEXCIsIFwiOTggOUJcIiwgXCJBNCA5MVwiLCBcIkE0IDkzXCIsIFwiOTggOEVcIiwgXCJBNCA5N1wiLCBcIjk4IDhGXCIsIFwiOTggQjZcIiwgXCI5OCA5MFwiLCBcIjk4IDkxXCIsIFwiOTggOTJcIiwgXCI5OSA4NFwiLCBcIkE0IDk0XCIsIFwiOTggQjNcIiwgXCI5OCA5RVwiLCBcIjk4IDlGXCIsIFwiOTggQTBcIiwgXCI5OCBBMVwiLCBcIjk4IDk0XCIsIFwiOTggOTVcIiwgXCI5OSA4MVwiLCBcIkUyIDk4IEI5IEVGIEI4IDhGXCIsIFwiOTggQTNcIiwgXCI5OCA5NlwiLCBcIjk4IEFCXCIsIFwiOTggQTlcIiwgXCI5OCBBNFwiLCBcIjk4IEFFXCIsIFwiOTggQjFcIiwgXCI5OCBBOFwiLCBcIjk4IEIwXCIsIFwiOTggQUZcIiwgXCI5OCBBNlwiLCBcIjk4IEE3XCIsIFwiOTggQTJcIiwgXCI5OCBBNVwiLCBcIjk4IEFBXCIsIFwiOTggOTNcIiwgXCI5OCBBRFwiLCBcIjk4IEI1XCIsIFwiOTggQjJcIiwgXCJBNCA5MFwiLCBcIjk4IEI3XCIsIFwiQTQgOTJcIiwgXCJBNCA5NVwiLCBcIjk4IEI0XCIsIFwiOTIgQTRcIiwgXCI5MiBBOVwiLCBcIjk4IDg4XCIsIFwiOTEgQkZcIiwgXCI5MSBCOVwiLCBcIjkxIEJBXCIsIFwiOTIgODBcIiwgXCI5MSBCQlwiLCBcIjkxIEJEXCIsIFwiQTQgOTZcIiwgXCI5OCBCQVwiLCBcIjk4IEI4XCIsIFwiOTggQjlcIiwgXCI5OCBCQlwiLCBcIjk4IEJDXCIsIFwiOTggQkRcIiwgXCI5OSA4MFwiLCBcIjk4IEJGXCIsIFwiOTggQkVcIiwgXCI5OSA4Q1wiLCBcIjkxIDhGXCIsIFwiOTEgOEJcIiwgXCI5MSA4RFwiLCBcIjkxIDhFXCIsIFwiOTEgOEFcIiwgXCJFMiA5QyA4QVwiLCBcIkUyIDlDIDhDIEVGIEI4IDhGXCIsIFwiOTEgOENcIiwgXCJFMiA5QyA4QlwiLCBcIjkxIDkwXCIsIFwiOTIgQUFcIiwgXCI5OSA4RlwiLCBcIkUyIDk4IDlEIEVGIEI4IDhGXCIsIFwiOTEgODZcIiwgXCI5MSA4N1wiLCBcIjkxIDg4XCIsIFwiOTEgODlcIiwgXCI5NiA5NVwiLCBcIjk2IDkwXCIsIFwiQTQgOThcIiwgXCI5NiA5NlwiLCBcIkUyIDlDIDhEIEVGIEI4IDhGXCIsIFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLCBcIjkxIDgxXCIsIFwiOTEgODBcIiwgXCI5MSBBNFwiLCBcIjkxIEE1XCIsIFwiOTcgQTNcIiwgXCI5MSBCNlwiLCBcIjkxIEE2XCIsIFwiOTEgQTdcIiwgXCI5MSBBOFwiLCBcIjkxIEE5XCIsIFwiOTEgQjFcIiwgXCI5MSBCNFwiLCBcIjkxIEI1XCIsIFwiOTEgQjJcIiwgXCI5MSBCM1wiLCBcIjkxIEFFXCIsIFwiOTEgQjdcIiwgXCI5MiA4MlwiLCBcIjk1IEI1XCIsIFwiOEUgODVcIiwgXCI5MSBCQ1wiLCBcIjkxIEI4XCIsIFwiOTEgQjBcIiwgXCI5QSBCNlwiLCBcIjhGIDgzXCIsIFwiOTIgODNcIiwgXCI5MSBBRlwiLCBcIjkxIEFCXCIsIFwiOTEgQUNcIiwgXCI5MSBBRFwiLCBcIjk5IDg3XCIsIFwiOTIgODFcIiwgXCI5OSA4NVwiLCBcIjk5IDg2XCIsIFwiOTkgOEJcIiwgXCI5OSA4RVwiLCBcIjk5IDhEXCIsIFwiOTIgODdcIiwgXCI5MiA4NlwiLCBcIjkyIDkxXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkyIDhGXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MiA4QiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkxIEFBXCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIDlBXCIsIFwiOTEgOTVcIiwgXCI5MSA5NlwiLCBcIjkxIDk0XCIsIFwiOTEgOTdcIiwgXCI5MSA5OVwiLCBcIjkxIDk4XCIsIFwiOTIgODRcIiwgXCI5MiA4QlwiLCBcIjkxIEEzXCIsIFwiOTEgQTBcIiwgXCI5MSBBMVwiLCBcIjkxIEEyXCIsIFwiOTEgOUVcIiwgXCI5MSA5RlwiLCBcIjkxIDkyXCIsIFwiOEUgQTlcIiwgXCJFMiA5QiA5MVwiLCBcIjhFIDkzXCIsIFwiOTEgOTFcIiwgXCI4RSA5MlwiLCBcIjkxIDlEXCIsIFwiOTEgOUJcIiwgXCI5MSA5Q1wiLCBcIjkyIEJDXCIsIFwiOTEgOTNcIiwgXCI5NSBCNlwiLCBcIjkyIDhEXCIsIFwiOEMgODJcIiwgXCI5QiA5MVwiLCBcIjkwIEI2XCIsIFwiOTAgQjFcIiwgXCI5MCBBRFwiLCBcIjkwIEI5XCIsIFwiOTAgQjBcIiwgXCI5MCBCQlwiLCBcIjkwIEJDXCIsIFwiOTAgQThcIiwgXCI5MCBBRlwiLCBcIkE2IDgxXCIsIFwiOTAgQUVcIiwgXCI5MCBCN1wiLCBcIjkwIEJEXCIsIFwiOTAgQjhcIiwgXCI5MCA5OVwiLCBcIjkwIEI1XCIsIFwiOTkgODhcIiwgXCI5OSA4OVwiLCBcIjk5IDhBXCIsIFwiOTAgOTJcIiwgXCI5MCA5NFwiLCBcIjkwIEE3XCIsIFwiOTAgQTZcIiwgXCI5MCBBNFwiLCBcIjkwIEEzXCIsIFwiOTAgQTVcIiwgXCI5MCBCQVwiLCBcIjkwIDk3XCIsIFwiOTAgQjRcIiwgXCJBNiA4NFwiLCBcIjkwIDlEXCIsIFwiOTAgOUJcIiwgXCI5MCA4Q1wiLCBcIjkwIDlFXCIsIFwiOTAgOUNcIiwgXCI5NSBCN1wiLCBcIkE2IDgyXCIsIFwiQTYgODBcIiwgXCI5MCA4RFwiLCBcIjkwIEEyXCIsIFwiOTAgQTBcIiwgXCI5MCA5RlwiLCBcIjkwIEExXCIsIFwiOTAgQUNcIiwgXCI5MCBCM1wiLCBcIjkwIDhCXCIsIFwiOTAgOEFcIiwgXCI5MCA4NlwiLCBcIjkwIDg1XCIsIFwiOTAgODNcIiwgXCI5MCA4MlwiLCBcIjkwIDg0XCIsIFwiOTAgQUFcIiwgXCI5MCBBQlwiLCBcIjkwIDk4XCIsIFwiOTAgOTBcIiwgXCI5MCA4RlwiLCBcIjkwIDkxXCIsIFwiOTAgOEVcIiwgXCI5MCA5NlwiLCBcIjkwIDgwXCIsIFwiOTAgODFcIiwgXCI5MCA5M1wiLCBcIkE2IDgzXCIsIFwiOTUgOEFcIiwgXCI5MCA5NVwiLCBcIjkwIEE5XCIsIFwiOTAgODhcIiwgXCI5MCA4N1wiLCBcIjkwIEJGXCIsIFwiOTAgQkVcIiwgXCI5MCA4OVwiLCBcIjkwIEIyXCIsIFwiOEMgQjVcIiwgXCI4RSA4NFwiLCBcIjhDIEIyXCIsIFwiOEMgQjNcIiwgXCI4QyBCNFwiLCBcIjhDIEIxXCIsIFwiOEMgQkZcIiwgXCJFMiA5OCA5OFwiLCBcIjhEIDgwXCIsIFwiOEUgOERcIiwgXCI4RSA4QlwiLCBcIjhEIDgzXCIsIFwiOEQgODJcIiwgXCI4RCA4MVwiLCBcIjhDIEJFXCIsIFwiOEMgQkFcIiwgXCI4QyBCQVwiLCBcIjhDIEJCXCIsIFwiOEMgQjlcIiwgXCI4QyBCN1wiLCBcIjhDIEJDXCIsIFwiOEMgQjhcIiwgXCI5MiA5MFwiLCBcIjhEIDg0XCIsIFwiOEMgQjBcIiwgXCI4RSA4M1wiLCBcIjkwIDlBXCIsIFwiOTUgQjhcIiwgXCI4QyA4RVwiLCBcIjhDIDhEXCIsIFwiOEMgOEZcIiwgXCI4QyA5NVwiLCBcIjhDIDk2XCIsIFwiOEMgOTdcIiwgXCI4QyA5OFwiLCBcIjhDIDkxXCIsIFwiOEMgOTJcIiwgXCI4QyA5M1wiLCBcIjhDIDk0XCIsIFwiOEMgOUFcIiwgXCI4QyA5RFwiLCBcIjhDIDlCXCIsIFwiOEMgOUNcIiwgXCI4QyA5RVwiLCBcIjhDIDk5XCIsIFwiRTIgQUQgOTAgRUYgQjggOEZcIiwgXCI4QyA5RlwiLCBcIjkyIEFCXCIsIFwiRTIgOUMgQThcIiwgXCJFMiA5OCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk4IDgwIEVGIEI4IDhGXCIsIFwiOEMgQTRcIiwgXCJFMiA5QiA4NSBFRiBCOCA4RlwiLCBcIjhDIEE1XCIsIFwiOEMgQTZcIiwgXCJFMiA5OCA4MSBFRiBCOCA4RlwiLCBcIjhDIEE3XCIsIFwiRTIgOUIgODhcIiwgXCI4QyBBOVwiLCBcIkUyIDlBIEExIEVGIEI4IDhGXCIsIFwiOTQgQTVcIiwgXCI5MiBBNVwiLCBcIkUyIDlEIDg0IEVGIEI4IDhGXCIsIFwiOEMgQThcIiwgXCJFMiA5OCA4MyBFRiBCOCA4RlwiLCBcIkUyIDlCIDg0IEVGIEI4IDhGXCIsIFwiOEMgQUNcIiwgXCI5MiBBOFwiLCBcIjhDIEFBXCIsIFwiOEMgQUJcIiwgXCJFMiA5OCA4MiBFRiBCOCA4RlwiLCBcIkUyIDk4IDk0IEVGIEI4IDhGXCIsIFwiOTIgQTdcIiwgXCI5MiBBNlwiLCBcIjhDIDhBXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjhEIDhGXCIsIFwiOEQgOEVcIiwgXCI4RCA5MFwiLCBcIjhEIDhBXCIsIFwiOEQgOEJcIiwgXCI4RCA4Q1wiLCBcIjhEIDg5XCIsIFwiOEQgODdcIiwgXCI4RCA5M1wiLCBcIjhEIDg4XCIsIFwiOEQgOTJcIiwgXCI4RCA5MVwiLCBcIjhEIDhEXCIsIFwiOEQgODVcIiwgXCI4RCA4NlwiLCBcIjhDIEI2XCIsIFwiOEMgQkRcIiwgXCI4RCBBMFwiLCBcIjhEIEFGXCIsIFwiOEQgOUVcIiwgXCJBNyA4MFwiLCBcIjhEIDk3XCIsIFwiOEQgOTZcIiwgXCI4RCBBNFwiLCBcIjhEIEIzXCIsIFwiOEQgOTRcIiwgXCI4RCA5RlwiLCBcIjhDIEFEXCIsIFwiOEQgOTVcIiwgXCI4RCA5RFwiLCBcIjhDIEFFXCIsIFwiOEMgQUZcIiwgXCI4RCA5Q1wiLCBcIjhEIEIyXCIsIFwiOEQgQTVcIiwgXCI4RCBBM1wiLCBcIjhEIEIxXCIsIFwiOEQgOUJcIiwgXCI4RCA5OVwiLCBcIjhEIDlBXCIsIFwiOEQgOThcIiwgXCI4RCBBMlwiLCBcIjhEIEExXCIsIFwiOEQgQTdcIiwgXCI4RCBBOFwiLCBcIjhEIEE2XCIsIFwiOEQgQjBcIiwgXCI4RSA4MlwiLCBcIjhEIEFFXCIsIFwiOEQgQUNcIiwgXCI4RCBBRFwiLCBcIjhEIEFCXCIsIFwiOEQgQkZcIiwgXCI4RCBBOVwiLCBcIjhEIEFBXCIsIFwiOEQgQkFcIiwgXCI4RCBCQlwiLCBcIjhEIEI3XCIsIFwiOEQgQjhcIiwgXCI4RCBCOVwiLCBcIjhEIEJFXCIsIFwiOEQgQjZcIiwgXCI4RCBCNVwiLCBcIkUyIDk4IDk1IEVGIEI4IDhGXCIsIFwiOEQgQkNcIiwgXCI4RCBCNFwiLCBcIjhEIEJEXCIsXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCJFMiA5QSBCRCBFRiBCOCA4RlwiLCBcIjhGIDgwXCIsIFwiOEYgODhcIiwgXCJFMiA5QSBCRSBFRiBCOCA4RlwiLCBcIjhFIEJFXCIsIFwiOEYgOTBcIiwgXCI4RiA4OVwiLCBcIjhFIEIxXCIsIFwiRTIgOUIgQjMgRUYgQjggOEZcIiwgXCI4RiA4Q1wiLCBcIjhGIDkzXCIsIFwiOEYgQjhcIiwgXCI4RiA5MlwiLCBcIjhGIDkxXCIsIFwiOEYgOEZcIiwgXCI4RSBCRlwiLCBcIkUyIDlCIEI3XCIsIFwiOEYgODJcIiwgXCJFMiA5QiBCOFwiLCBcIjhGIEI5XCIsIFwiOEUgQTNcIiwgXCI5QSBBM1wiLCBcIjhGIDhBXCIsIFwiOEYgODRcIiwgXCI5QiA4MFwiLCBcIkUyIDlCIEI5XCIsIFwiOEYgOEJcIiwgXCI5QSBCNFwiLCBcIjlBIEI1XCIsIFwiOEYgODdcIiwgXCI5NSBCNFwiLCBcIjhGIDg2XCIsIFwiOEUgQkRcIiwgXCI4RiA4NVwiLCBcIjhFIDk2XCIsIFwiOEUgOTdcIiwgXCI4RiBCNVwiLCBcIjhFIEFCXCIsIFwiOEUgOUZcIiwgXCI4RSBBRFwiLCBcIjhFIEE4XCIsIFwiOEUgQUFcIiwgXCI4RSBBNFwiLCBcIjhFIEE3XCIsIFwiOEUgQkNcIiwgXCI4RSBCOVwiLCBcIjhFIEI3XCIsIFwiOEUgQkFcIiwgXCI4RSBCOFwiLCBcIjhFIEJCXCIsIFwiOEUgQUNcIiwgXCI4RSBBRVwiLCBcIjkxIEJFXCIsIFwiOEUgQUZcIiwgXCI4RSBCMlwiLCBcIjhFIEIwXCIsIFwiOEUgQjNcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QSA5N1wiLCBcIjlBIDk1XCIsIFwiOUEgOTlcIiwgXCI5QSA4Q1wiLCBcIjlBIDhFXCIsIFwiOEYgOEVcIiwgXCI5QSA5M1wiLCBcIjlBIDkxXCIsIFwiOUEgOTJcIiwgXCI5QSA5MFwiLCBcIjlBIDlBXCIsIFwiOUEgOUJcIiwgXCI5QSA5Q1wiLFwiOEYgOERcIiwgXCI5QSBCMlwiLCBcIjlBIEE4XCIsIFwiOUEgOTRcIiwgXCI5QSA4RFwiLCBcIjlBIDk4XCIsIFwiOUEgOTZcIiwgXCI5QSBBMVwiLCBcIjlBIEEwXCIsIFwiOUEgQUZcIiwgXCI5QSA4M1wiLCBcIjlBIDhCXCIsIFwiOUEgOURcIiwgXCI5QSA4NFwiLCBcIjlBIDg1XCIsIFwiOUEgODhcIiwgXCI5QSA5RVwiLCBcIjlBIDgyXCIsIFwiOUEgODZcIiwgXCI5QSA4N1wiLCBcIjlBIDhBXCIsIFwiOUEgODlcIiwgXCI5QSA4MVwiLCBcIjlCIEE5XCIsIFwiRTIgOUMgODggRUYgQjggOEZcIiwgXCI5QiBBQlwiLCBcIjlCIEFDXCIsIFwiRTIgOUIgQjUgRUYgQjggOEZcIiwgXCI5QiBBNVwiLCBcIjlBIEE0XCIsIFwiRTIgOUIgQjRcIiwgXCI5QiBCM1wiLCBcIjlBIDgwXCIsIFwiOUIgQjBcIiwgXCI5MiBCQVwiLCBcIkUyIDlBIDkzIEVGIEI4IDhGXCIsIFwiOUEgQTdcIiwgXCJFMiA5QiBCRCBFRiBCOCA4RlwiLCBcIjlBIDhGXCIsIFwiOUEgQTZcIiwgXCI5QSBBNVwiLCBcIjhGIDgxXCIsIFwiOUEgQTJcIiwgXCI4RSBBMVwiLCBcIjhFIEEyXCIsIFwiOEUgQTBcIiwgXCI4RiA5N1wiLCBcIjhDIDgxXCIsIFwiOTcgQkNcIiwgXCI4RiBBRFwiLCBcIkUyIDlCIEIyIEVGIEI4IDhGXCIsIFwiOEUgOTFcIiwgXCJFMiA5QiBCMFwiLCBcIjhGIDk0XCIsIFwiOTcgQkJcIiwgXCI4QyA4QlwiLCBcIjk3IEJFXCIsIFwiOEYgOTVcIiwgXCJFMiA5QiBCQSBFRiBCOCA4RlwiLCBcIjhGIDlFXCIsIFwiOUIgQTNcIiwgXCI5QiBBNFwiLCBcIjhDIDg1XCIsIFwiOEMgODRcIiwgXCI4RiA5Q1wiLCBcIjhGIDk2XCIsIFwiOEYgOURcIiwgXCI4QyA4N1wiLCBcIjhDIDg2XCIsIFwiOEYgOTlcIiwgXCI4QyA4M1wiLCBcIjhDIDg5XCIsIFwiOEMgOENcIiwgXCI4QyBBMFwiLCBcIjhFIDg3XCIsIFwiOEUgODZcIiwgXCI4QyA4OFwiLCBcIjhGIDk4XCIsIFwiOEYgQjBcIiwgXCI4RiBBRlwiLCBcIjhGIDlGXCIsIFwiOTcgQkRcIiwgXCI4RiBBMFwiLCBcIjhGIEExXCIsIFwiOEYgOUFcIiwgXCI4RiBBMlwiLCBcIjhGIEFDXCIsIFwiOEYgQTNcIiwgXCI4RiBBNFwiLCBcIjhGIEE1XCIsIFwiOEYgQTZcIiwgXCI4RiBBOFwiLCBcIjhGIEFBXCIsIFwiOEYgQUJcIiwgXCI4RiBBOVwiLCBcIjkyIDkyXCIsIFwiOEYgOUJcIiwgXCJFMiA5QiBBQSBFRiBCOCA4RlwiLCBcIjk1IDhDXCIsIFwiOTUgOERcIiwgXCI5NSA4QlwiLCBcIkUyIDlCIEE5XCIsIFwiRTIgOEMgOUEgRUYgQjggOEZcIiwgXCI5MyBCMVwiLCBcIjkzIEIyXCIsIFwiOTIgQkJcIiwgXCJFMiA4QyBBOCBFRiBCOCA4RlwiLCBcIjk2IEE1XCIsIFwiOTYgQThcIiwgXCI5NiBCMVwiLCBcIjk2IEIyXCIsIFwiOTUgQjlcIiwgXCI5NyA5Q1wiLCBcIjkyIEJEXCIsIFwiOTIgQkVcIiwgXCI5MiBCRlwiLCBcIjkzIDgwXCIsIFwiOTMgQkNcIiwgXCI5MyBCN1wiLCBcIjkzIEI4XCIsIFwiOTMgQjlcIiwgXCI4RSBBNVwiLCBcIjkzIEJEXCIsIFwiOEUgOUVcIiwgXCI5MyA5RVwiLCBcIkUyIDk4IDhFIEVGIEI4IDhGXCIsIFwiOTMgOUZcIiwgXCI5MyBBMFwiLCBcIjkzIEJBXCIsIFwiOTMgQkJcIiwgXCI4RSA5OVwiLCBcIjhFIDlBXCIsIFwiOEUgOUJcIiwgXCJFMiA4RiBCMVwiLCBcIkUyIDhGIEIyXCIsIFwiRTIgOEYgQjBcIiwgXCI5NSBCMFwiLCBcIkUyIDhGIEIzXCIsIFwiRTIgOEMgOUIgRUYgQjggOEZcIiwgXCI5MyBBMVwiLCBcIjk0IDhCXCIsIFwiOTQgOENcIiwgXCI5MiBBMVwiLCBcIjk0IEE2XCIsIFwiOTUgQUZcIiwgXCI5NyA5MVwiLCBcIjlCIEEyXCIsIFwiOTIgQjhcIiwgXCI5MiBCNVwiLCBcIjkyIEI0XCIsIFwiOTIgQjZcIiwgXCI5MiBCN1wiLCBcIjkyIEIwXCIsIFwiOTIgQjNcIiwgXCI5MiA4RVwiLCBcIkUyIDlBIDk2XCIsIFwiOTQgQTdcIiwgXCI5NCBBOFwiLCBcIkUyIDlBIDkyXCIsIFwiOUIgQTBcIiwgXCJFMiA5QiA4RlwiLCBcIjk0IEE5XCIsIFwiRTIgOUEgOTlcIiwgXCJFMiA5QiA5M1wiLCBcIjk0IEFCXCIsIFwiOTIgQTNcIiwgXCI5NCBBQVwiLCBcIjk3IEExXCIsIFwiRTIgOUEgOTRcIiwgXCI5QiBBMVwiLCBcIjlBIEFDXCIsIFwiRTIgOTggQTAgRUYgQjggOEZcIiwgXCJFMiA5QSBCMFwiLCBcIkUyIDlBIEIxXCIsIFwiOEYgQkFcIiwgXCI5NCBBRVwiLCBcIjkzIEJGXCIsIFwiOTIgODhcIiwgXCJFMiA5QSA5N1wiLCBcIjk0IEFEXCIsIFwiOTQgQUNcIiwgXCI5NSBCM1wiLCBcIjkyIDhBXCIsIFwiOTIgODlcIiwgXCI4QyBBMVwiLCBcIjhGIEI3XCIsIFwiOTQgOTZcIiwgXCI5QSBCRFwiLCBcIjlBIEJGXCIsIFwiOUIgODFcIiwgXCI5NCA5MVwiLCBcIjk3IDlEXCIsIFwiOUIgOEJcIiwgXCI5QiA4Q1wiLCBcIjlCIDhGXCIsIFwiOUEgQUFcIiwgXCI5QiA4RVwiLCBcIjk2IEJDXCIsIFwiOTcgQkFcIiwgXCJFMiA5QiBCMVwiLCBcIjk3IEJGXCIsIFwiOUIgOERcIiwgXCI4RSA4OFwiLCBcIjhFIDhGXCIsIFwiOEUgODBcIiwgXCI4RSA4MVwiLCBcIjhFIDhBXCIsIFwiOEUgODlcIiwgXCI4RSA4RVwiLCBcIjhFIDkwXCIsIFwiOEUgOENcIiwgXCI4RiBBRVwiLCBcIkUyIDlDIDg5IEVGIEI4IDhGXCIsIFwiOTMgQTlcIiwgXCI5MyBBOFwiLCBcIjkzIEE3XCIsIFwiOTIgOENcIiwgXCI5MyBBRVwiLCBcIjkzIEFBXCIsIFwiOTMgQUJcIiwgXCI5MyBBQ1wiLCBcIjkzIEFEXCIsIFwiOTMgQTZcIiwgXCI5MyBBRlwiLCBcIjkzIEE1XCIsIFwiOTMgQTRcIiwgXCI5MyA5Q1wiLCBcIjkzIDgzXCIsIFwiOTMgOTFcIiwgXCI5MyA4QVwiLCBcIjkzIDg4XCIsIFwiOTMgODlcIiwgXCI5MyA4NFwiLCBcIjkzIDg1XCIsIFwiOTMgODZcIiwgXCI5NyA5M1wiLCBcIjkzIDg3XCIsIFwiOTcgODNcIiwgXCI5NyBCM1wiLCBcIjk3IDg0XCIsIFwiOTMgOEJcIiwgXCI5NyA5MlwiLCBcIjkzIDgxXCIsIFwiOTMgODJcIiwgXCI5NyA4MlwiLCBcIjk3IDlFXCIsIFwiOTMgQjBcIiwgXCI5MyA5M1wiLCBcIjkzIDk1XCIsIFwiOTMgOTdcIiwgXCI5MyA5OFwiLCBcIjkzIDk5XCIsIFwiOTMgOTRcIiwgXCI5MyA5MlwiLCBcIjkzIDlBXCIsIFwiOTMgOTZcIiwgXCI5NCA5N1wiLCBcIjkzIDhFXCIsIFwiOTYgODdcIiwgXCJFMiA5QyA4MiBFRiBCOCA4RlwiLCBcIjkzIDkwXCIsIFwiOTMgOEZcIiwgXCI5MyA4Q1wiLCBcIjkzIDhEXCIsIFwiOUEgQTlcIiwgXCI4RiBCM1wiLCBcIjhGIEI0XCIsIFwiOTQgOTBcIiwgXCI5NCA5MlwiLCBcIjk0IDkzXCIsIFwiOTQgOEZcIiwgXCI5NiA4QVwiLCBcIjk2IDhCXCIsIFwiRTIgOUMgOTIgRUYgQjggOEZcIiwgXCI5MyA5RFwiLCBcIkUyIDlDIDhGIEVGIEI4IDhGXCIsIFwiOTYgOERcIiwgXCI5NiA4Q1wiLCBcIjk0IDhEXCIsIFwiOTQgOEVcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUQgQTQgRUYgQjggOEZcIiwgXCI5MiA5QlwiLCBcIjkyIDlBXCIsIFwiOTIgOTlcIiwgXCI5MiA5Q1wiLCBcIjkyIDk0XCIsIFwiRTIgOUQgQTMgRUYgQjggOEZcIiwgXCI5MiA5NVwiLCBcIjkyIDlFXCIsIFwiOTIgOTNcIiwgXCI5MiA5N1wiLCBcIjkyIDk2XCIsIFwiOTIgOThcIiwgXCI5MiA5RFwiLCBcIjkyIDlGXCIsIFwiRTIgOTggQUUgRUYgQjggOEZcIiwgXCJFMiA5QyA5RCBFRiBCOCA4RlwiLCBcIkUyIDk4IEFBIEVGIEI4IDhGXCIsIFwiOTUgODlcIiwgXCJFMiA5OCBCOCBFRiBCOCA4RlwiLCBcIkUyIDlDIEExIEVGIEI4IDhGXCIsIFwiOTQgQUZcIiwgXCI5NSA4RVwiLCBcIkUyIDk4IEFGIEVGIEI4IDhGXCIsIFwiRTIgOTggQTYgRUYgQjggOEZcIiwgXCI5QiA5MFwiLCBcIkUyIDlCIDhFXCIsIFwiRTIgOTkgODggRUYgQjggOEZcIiwgXCJFMiA5OSA4OSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhBIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEIgRUYgQjggOEZcIiwgXCJFMiA5OSA4QyBFRiBCOCA4RlwiLCBcIkUyIDk5IDhEIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEUgRUYgQjggOEZcIiwgXCJFMiA5OSA4RiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkwIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTEgRUYgQjggOEZcIiwgXCJFMiA5OSA5MiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkzIEVGIEI4IDhGXCIsIFwiODYgOTRcIiwgXCJFMiA5QSA5QlwiLCBcIjg4IEIzXCIsIFwiODggQjlcIiwgXCJFMiA5OCBBMiBFRiBCOCA4RlwiLCBcIkUyIDk4IEEzIEVGIEI4IDhGXCIsIFwiOTMgQjRcIiwgXCI5MyBCM1wiLCBcIjg4IEI2XCIsIFwiODggOUEgRUYgQjggOEZcIiwgXCI4OCBCOFwiLCBcIjg4IEJBXCIsIFwiODggQjcgRUYgQjggOEZcIiwgXCJFMiA5QyBCNCBFRiBCOCA4RlwiLCBcIjg2IDlBXCIsIFwiODkgOTFcIiwgXCI5MiBBRVwiLCBcIjg5IDkwXCIsIFwiRTMgOEEgOTkgRUYgQjggOEZcIiwgXCJFMyA4QSA5NyBFRiBCOCA4RlwiLCBcIjg4IEI0XCIsIFwiODggQjVcIiwgXCI4OCBCMlwiLCBcIjg1IEIwIEVGIEI4IDhGXCIsIFwiODUgQjEgRUYgQjggOEZcIiwgXCI4NiA4RVwiLCBcIjg2IDkxXCIsIFwiODUgQkUgRUYgQjggOEZcIiwgXCI4NiA5OFwiLCBcIkUyIDlCIDk0IEVGIEI4IDhGXCIsIFwiOTMgOUJcIiwgXCI5QSBBQlwiLCBcIkUyIDlEIDhDXCIsIFwiRTIgQUQgOTUgRUYgQjggOEZcIiwgXCI5MiBBMlwiLCBcIkUyIDk5IEE4IEVGIEI4IDhGXCIsIFwiOUEgQjdcIiwgXCI5QSBBRlwiLCBcIjlBIEIzXCIsIFwiOUEgQjFcIiwgXCI5NCA5RVwiLCBcIjkzIEI1XCIsIFwiRTIgOUQgOTcgRUYgQjggOEZcIiwgXCJFMiA5RCA5NVwiLCBcIkUyIDlEIDkzXCIsIFwiRTIgOUQgOTRcIiwgXCJFMiA4MCBCQyBFRiBCOCA4RlwiLCBcIkUyIDgxIDg5IEVGIEI4IDhGXCIsIFwiOTIgQUZcIiwgXCI5NCA4NVwiLCBcIjk0IDg2XCIsIFwiOTQgQjFcIiwgXCJFMiA5QSA5Q1wiLCBcIkUzIDgwIEJEIEVGIEI4IDhGXCIsIFwiRTIgOUEgQTAgRUYgQjggOEZcIiwgXCI5QSBCOFwiLCBcIjk0IEIwXCIsIFwiRTIgOTkgQkIgRUYgQjggOEZcIiwgXCI4OCBBRiBFRiBCOCA4RlwiLCBcIjkyIEI5XCIsIFwiRTIgOUQgODcgRUYgQjggOEZcIiwgXCJFMiA5QyBCMyBFRiBCOCA4RlwiLCBcIkUyIDlEIDhFXCIsIFwiRTIgOUMgODVcIiwgXCI5MiBBMFwiLCBcIjhDIDgwXCIsIFwiRTIgOUUgQkZcIiwgXCI4QyA5MFwiLCBcIkUyIDkzIDgyIEVGIEI4IDhGXCIsIFwiOEYgQTdcIiwgXCI4OCA4MiBFRiBCOCA4RlwiLCBcIjlCIDgyXCIsIFwiOUIgODNcIiwgXCI5QiA4NFwiLCBcIjlCIDg1XCIsIFwiRTIgOTkgQkYgRUYgQjggOEZcIiwgXCI5QSBBRFwiLCBcIjlBIEJFXCIsIFwiODUgQkYgRUYgQjggOEZcIiwgXCI5QSBCMFwiLCBcIjlBIEI5XCIsIFwiOUEgQkFcIiwgXCI5QSBCQ1wiLCBcIjlBIEJCXCIsIFwiOUEgQUVcIiwgXCI4RSBBNlwiLCBcIjkzIEI2XCIsIFwiODggODFcIiwgXCI4NiA5NlwiLCBcIjg2IDk3XCIsIFwiODYgOTlcIiwgXCI4NiA5MlwiLCBcIjg2IDk1XCIsIFwiODYgOTNcIiwgXCIzMCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMxIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzIgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM0IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzUgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNiBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM3IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzggRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzOSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjk0IDlGXCIsIFwiOTQgQTJcIiwgXCJFMiA5NiBCNiBFRiBCOCA4RlwiLCBcIkUyIDhGIEI4XCIsIFwiRTIgOEYgQUZcIiwgXCJFMiA4RiBCOVwiLCBcIkUyIDhGIEJBXCIsIFwiRTIgOEYgQURcIiwgXCJFMiA4RiBBRVwiLCBcIkUyIDhGIEE5XCIsIFwiRTIgOEYgQUFcIiwgXCI5NCA4MFwiLCBcIjk0IDgxXCIsIFwiOTQgODJcIiwgXCJFMiA5NyA4MCBFRiBCOCA4RlwiLCBcIjk0IEJDXCIsIFwiOTQgQkRcIiwgXCJFMiA4RiBBQlwiLCBcIkUyIDhGIEFDXCIsIFwiRTIgOUUgQTEgRUYgQjggOEZcIiwgXCJFMiBBQyA4NSBFRiBCOCA4RlwiLCBcIkUyIEFDIDg2IEVGIEI4IDhGXCIsIFwiRTIgQUMgODcgRUYgQjggOEZcIiwgXCJFMiA4NiA5NyBFRiBCOCA4RlwiLCBcIkUyIDg2IDk4IEVGIEI4IDhGXCIsIFwiRTIgODYgOTkgRUYgQjggOEZcIiwgXCJFMiA4NiA5NiBFRiBCOCA4RlwiLCBcIkUyIDg2IDk1IEVGIEI4IDhGXCIsIFwiRTIgODYgOTQgRUYgQjggOEZcIiwgXCI5NCA4NFwiLCBcIkUyIDg2IEFBIEVGIEI4IDhGXCIsIFwiRTIgODYgQTkgRUYgQjggOEZcIiwgXCJFMiBBNCBCNCBFRiBCOCA4RlwiLCBcIkUyIEE0IEI1IEVGIEI4IDhGXCIsIFwiMjMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIyQSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIkUyIDg0IEI5IEVGIEI4IDhGXCIsIFwiOTQgQTRcIiwgXCI5NCBBMVwiLCBcIjk0IEEwXCIsIFwiOTQgQTNcIiwgXCI4RSBCNVwiLCBcIjhFIEI2XCIsIFwiRTMgODAgQjAgRUYgQjggOEZcIiwgXCJFMiA5RSBCMFwiLCBcIkUyIDlDIDk0IEVGIEI4IDhGXCIsIFwiOTQgODNcIiwgXCJFMiA5RSA5NVwiLCBcIkUyIDlFIDk2XCIsIFwiRTIgOUUgOTdcIiwgXCJFMiA5QyA5NiBFRiBCOCA4RlwiLCBcIjkyIEIyXCIsIFwiOTIgQjFcIiwgXCJDMiBBOSBFRiBCOCA4RlwiLCBcIkMyIEFFIEVGIEI4IDhGXCIsIFwiRTIgODQgQTIgRUYgQjggOEZcIiwgXCI5NCA5QVwiLCBcIjk0IDk5XCIsIFwiOTQgOUJcIiwgXCI5NCA5RFwiLCBcIjk0IDlDXCIsIFwiRTIgOTggOTEgRUYgQjggOEZcIiwgXCI5NCA5OFwiLCBcIkUyIDlBIEFBIEVGIEI4IDhGXCIsIFwiRTIgOUEgQUIgRUYgQjggOEZcIiwgXCI5NCBCNFwiLCBcIjk0IEI1XCIsIFwiOTQgQjhcIiwgXCI5NCBCOVwiLCBcIjk0IEI2XCIsIFwiOTQgQjdcIiwgXCI5NCBCQVwiLCBcIkUyIDk2IEFBIEVGIEI4IDhGXCIsIFwiRTIgOTYgQUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QiBFRiBCOCA4RlwiLCBcIkUyIEFDIDlDIEVGIEI4IDhGXCIsIFwiOTQgQkJcIiwgXCJFMiA5NyBCQyBFRiBCOCA4RlwiLCBcIkUyIDk3IEJCIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkUgRUYgQjggOEZcIiwgXCJFMiA5NyBCRCBFRiBCOCA4RlwiLCBcIjk0IEIyXCIsIFwiOTQgQjNcIiwgXCI5NCA4OFwiLCBcIjk0IDg5XCIsIFwiOTQgOEFcIiwgXCI5NCA4N1wiLCBcIjkzIEEzXCIsIFwiOTMgQTJcIiwgXCI5NCA5NFwiLCBcIjk0IDk1XCIsIFwiODMgOEZcIiwgXCI4MCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEwIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTMgRUYgQjggOEZcIiwgXCJFMiA5OSBBNSBFRiBCOCA4RlwiLCBcIkUyIDk5IEE2IEVGIEI4IDhGXCIsIFwiOEUgQjRcIiwgXCI5MSA4MSBFMiA4MCA4RCBGMCA5RiA5NyBBOFwiLCBcIjkyIEFEXCIsIFwiOTcgQUZcIiwgXCI5MiBBQ1wiLCBcIjk1IDkwXCIsIFwiOTUgOTFcIiwgXCI5NSA5MlwiLCBcIjk1IDkzXCIsIFwiOTUgOTRcIiwgXCI5NSA5NVwiLCBcIjk1IDk2XCIsIFwiOTUgOTdcIiwgXCI5NSA5OFwiLCBcIjk1IDk5XCIsIFwiOTUgOUFcIiwgXCI5NSA5QlwiLCBcIjk1IDlDXCIsIFwiOTUgOURcIiwgXCI5NSA5RVwiLCBcIjk1IDlGXCIsIFwiOTUgQTBcIiwgXCI5NSBBMVwiLCBcIjk1IEEyXCIsIFwiOTUgQTNcIiwgXCI5NSBBNFwiLCBcIjk1IEE1XCIsIFwiOTUgQTZcIiwgXCI5NSBBN1wiLCBcIjlCIDkxXCIsIFwiODcgQTYgRjAgOUYgODcgQUJcIiwgXCI4NyBBNiBGMCA5RiA4NyBCRFwiLCBcIjg3IEE2IEYwIDlGIDg3IEIxXCIsIFwiODcgQTkgRjAgOUYgODcgQkZcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOFwiLCBcIjg3IEE2IEYwIDlGIDg3IEE5XCIsIFwiODcgQTYgRjAgOUYgODcgQjRcIiwgXCI4NyBBNiBGMCA5RiA4NyBBRVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI2XCIsIFwiODcgQTYgRjAgOUYgODcgQUNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCN1wiLCBcIjg3IEE2IEYwIDlGIDg3IEIyXCIsIFwiODcgQTYgRjAgOUYgODcgQkNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCQVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI5XCIsIFwiODcgQTYgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOFwiLCBcIjg3IEE3IEYwIDlGIDg3IEFEXCIsIFwiODcgQTcgRjAgOUYgODcgQTlcIiwgXCI4NyBBNyBGMCA5RiA4NyBBN1wiLCBcIjg3IEE3IEYwIDlGIDg3IEJFXCIsIFwiODcgQTcgRjAgOUYgODcgQUFcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFGXCIsIFwiODcgQTcgRjAgOUYgODcgQjJcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOVwiLCBcIjg3IEE3IEYwIDlGIDg3IEI0XCIsIFwiODcgQTcgRjAgOUYgODcgQjZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBNlwiLCBcIjg3IEE3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNFwiLCBcIjg3IEJCIEYwIDlGIDg3IEFDXCIsIFwiODcgQTcgRjAgOUYgODcgQjNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEFCXCIsIFwiODcgQTcgRjAgOUYgODcgQUVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQlwiLCBcIjg3IEIwIEYwIDlGIDg3IEFEXCIsIFwiODcgQTggRjAgOUYgODcgQjJcIiwgXCI4NyBBOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEE4XCIsIFwiODcgQjAgRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBBQlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE5XCIsIFwiODcgQTggRjAgOUYgODcgQjFcIiwgXCI4NyBBOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJEXCIsIFwiODcgQTggRjAgOUYgODcgQThcIiwgXCI4NyBBOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQUNcIiwgXCI4NyBBOCBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIwXCIsIFwiODcgQTggRjAgOUYgODcgQjdcIiwgXCI4NyBBRCBGMCA5RiA4NyBCN1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJBXCIsIFwiODcgQTggRjAgOUYgODcgQkNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJGXCIsIFwiODcgQTkgRjAgOUYgODcgQjBcIiwgXCI4NyBBOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIyXCIsIFwiODcgQTkgRjAgOUYgODcgQjRcIiwgXCI4NyBBQSBGMCA5RiA4NyBBOFwiLCBcIjg3IEFBIEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkJcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNlwiLCBcIjg3IEFBIEYwIDlGIDg3IEI3XCIsIFwiODcgQUEgRjAgOUYgODcgQUFcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOVwiLCBcIjg3IEFBIEYwIDlGIDg3IEJBXCIsIFwiODcgQUIgRjAgOUYgODcgQjBcIiwgXCI4NyBBQiBGMCA5RiA4NyBCNFwiLCBcIjg3IEFCIEYwIDlGIDg3IEFGXCIsIFwiODcgQUIgRjAgOUYgODcgQUVcIiwgXCI4NyBBQiBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEFCXCIsIFwiODcgQjUgRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQlwiLCBcIjg3IEFDIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQVwiLCBcIjg3IEE5IEYwIDlGIDg3IEFBXCIsIFwiODcgQUMgRjAgOUYgODcgQURcIiwgXCI4NyBBQyBGMCA5RiA4NyBBRVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI3XCIsIFwiODcgQUMgRjAgOUYgODcgQjFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI1XCIsIFwiODcgQUMgRjAgOUYgODcgQkFcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFDXCIsIFwiODcgQUMgRjAgOUYgODcgQjNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEJFXCIsIFwiODcgQUQgRjAgOUYgODcgQjlcIiwgXCI4NyBBRCBGMCA5RiA4NyBCM1wiLCBcIjg3IEFEIEYwIDlGIDg3IEIwXCIsIFwiODcgQUQgRjAgOUYgODcgQkFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCOFwiLCBcIjg3IEFFIEYwIDlGIDg3IEIzXCIsIFwiODcgQUUgRjAgOUYgODcgQTlcIiwgXCI4NyBBRSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFFIEYwIDlGIDg3IEI2XCIsIFwiODcgQUUgRjAgOUYgODcgQUFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMlwiLCBcIjg3IEFFIEYwIDlGIDg3IEIxXCIsIFwiODcgQUUgRjAgOUYgODcgQjlcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRVwiLCBcIjg3IEFGIEYwIDlGIDg3IEIyXCIsIFwiODcgQUYgRjAgOUYgODcgQjVcIiwgXCI4NyBBRiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFGIEYwIDlGIDg3IEI0XCIsIFwiODcgQjAgRjAgOUYgODcgQkZcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQVwiLCBcIjg3IEIwIEYwIDlGIDg3IEFFXCIsIFwiODcgQkQgRjAgOUYgODcgQjBcIiwgXCI4NyBCMCBGMCA5RiA4NyBCQ1wiLCBcIjg3IEIwIEYwIDlGIDg3IEFDXCIsIFwiODcgQjEgRjAgOUYgODcgQTZcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQlwiLCBcIjg3IEIxIEYwIDlGIDg3IEE3XCIsIFwiODcgQjEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEJFXCIsIFwiODcgQjEgRjAgOUYgODcgQUVcIiwgXCI4NyBCMSBGMCA5RiA4NyBCOVwiLCBcIjg3IEIxIEYwIDlGIDg3IEJBXCIsIFwiODcgQjIgRjAgOUYgODcgQjRcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMFwiLCBcIjg3IEIyIEYwIDlGIDg3IEFDXCIsIFwiODcgQjIgRjAgOUYgODcgQkNcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRVwiLCBcIjg3IEIyIEYwIDlGIDg3IEJCXCIsIFwiODcgQjIgRjAgOUYgODcgQjFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEFEXCIsIFwiODcgQjIgRjAgOUYgODcgQjZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCN1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJBXCIsIFwiODcgQkUgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRFwiLCBcIjg3IEFCIEYwIDlGIDg3IEIyXCIsIFwiODcgQjIgRjAgOUYgODcgQTlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEIzXCIsIFwiODcgQjIgRjAgOUYgODcgQUFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEE2XCIsIFwiODcgQjIgRjAgOUYgODcgQkZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIzIEYwIDlGIDg3IEE2XCIsIFwiODcgQjMgRjAgOUYgODcgQjdcIiwgXCI4NyBCMyBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEIxXCIsIFwiODcgQjMgRjAgOUYgODcgQThcIiwgXCI4NyBCMyBGMCA5RiA4NyBCRlwiLCBcIjg3IEIzIEYwIDlGIDg3IEFFXCIsIFwiODcgQjMgRjAgOUYgODcgQUFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIzIEYwIDlGIDg3IEJBXCIsIFwiODcgQjMgRjAgOUYgODcgQUJcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNVwiLCBcIjg3IEIwIEYwIDlGIDg3IEI1XCIsIFwiODcgQjMgRjAgOUYgODcgQjRcIiwgXCI4NyBCNCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI1IEYwIDlGIDg3IEIwXCIsIFwiODcgQjUgRjAgOUYgODcgQkNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEE2XCIsIFwiODcgQjUgRjAgOUYgODcgQUNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCRVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFBXCIsIFwiODcgQjUgRjAgOUYgODcgQURcIiwgXCI4NyBCNSBGMCA5RiA4NyBCM1wiLCBcIjg3IEI1IEYwIDlGIDg3IEIxXCIsIFwiODcgQjUgRjAgOUYgODcgQjlcIiwgXCI4NyBCNSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI2IEYwIDlGIDg3IEE2XCIsIFwiODcgQjcgRjAgOUYgODcgQUFcIiwgXCI4NyBCNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEI3IEYwIDlGIDg3IEJBXCIsIFwiODcgQjcgRjAgOUYgODcgQkNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFEXCIsIFwiODcgQjAgRjAgOUYgODcgQjNcIiwgXCI4NyBCMSBGMCA5RiA4NyBBOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEIyXCIsIFwiODcgQkIgRjAgOUYgODcgQThcIiwgXCI4NyBCQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIyXCIsIFwiODcgQjggRjAgOUYgODcgQjlcIiwgXCI4NyBCOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEI4IEYwIDlGIDg3IEIzXCIsIFwiODcgQjcgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBBOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIxXCIsIFwiODcgQjggRjAgOUYgODcgQUNcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQUVcIiwgXCI4NyBCOCBGMCA5RiA4NyBBN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI0XCIsIFwiODcgQkYgRjAgOUYgODcgQTZcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEI3XCIsIFwiODcgQjggRjAgOUYgODcgQjhcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOFwiLCBcIjg3IEIxIEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQTlcIiwgXCI4NyBCOCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJGXCIsIFwiODcgQjggRjAgOUYgODcgQUFcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEJFXCIsIFwiODcgQjkgRjAgOUYgODcgQkNcIiwgXCI4NyBCOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEJGXCIsIFwiODcgQjkgRjAgOUYgODcgQURcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI5IEYwIDlGIDg3IEFDXCIsIFwiODcgQjkgRjAgOUYgODcgQjBcIiwgXCI4NyBCOSBGMCA5RiA4NyBCNFwiLCBcIjg3IEI5IEYwIDlGIDg3IEI5XCIsIFwiODcgQjkgRjAgOUYgODcgQjNcIiwgXCI4NyBCOSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIyXCIsIFwiODcgQjkgRjAgOUYgODcgQThcIiwgXCI4NyBCOSBGMCA5RiA4NyBCQlwiLCBcIjg3IEJBIEYwIDlGIDg3IEFDXCIsIFwiODcgQkEgRjAgOUYgODcgQTZcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEE3XCIsIFwiODcgQkEgRjAgOUYgODcgQjhcIiwgXCI4NyBCQiBGMCA5RiA4NyBBRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJFXCIsIFwiODcgQkEgRjAgOUYgODcgQkZcIiwgXCI4NyBCQiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJCIEYwIDlGIDg3IEE2XCIsIFwiODcgQkIgRjAgOUYgODcgQUFcIiwgXCI4NyBCQiBGMCA5RiA4NyBCM1wiLCBcIjg3IEJDIEYwIDlGIDg3IEFCXCIsIFwiODcgQUEgRjAgOUYgODcgQURcIiwgXCI4NyBCRSBGMCA5RiA4NyBBQVwiLCBcIjg3IEJGIEYwIDlGIDg3IEIyXCIsIFwiODcgQkYgRjAgOUYgODcgQkNcIl1cblx0ZW1vamlzQXJyYXkgPSBbXVxuXHRmcmVxRW1vamlzQXJyYXkgPSBbXVxuXHRmb3IgZW0gaW4gcmF3RW1vamlzXG5cdFx0ZW1vamlzQXJyYXkucHVzaCBlbW9qaUZvcm1hdHRlcihlbSlcblxuXHRcblx0ZnJlcXVlbnRseVVzZWRFbW9qaXNSYXcgPSBbXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXVxuXHRmb3IgZW0gaW4gZnJlcXVlbnRseVVzZWRFbW9qaXNSYXdcblx0XHRmcmVxRW1vamlzQXJyYXkucHVzaCBlbW9qaUZvcm1hdHRlcihlbSlcblxuXHQjIGVtb2ppS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHQjIFx0ZW1vamlLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdCMgXHRlbW9qaUJHID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNFQ0VFRjFcIlxuXHQjIFx0Ym94ID0gZXhwb3J0cy5weCgzMClcblx0IyBcdGVtb2ppQkcuY29uc3RyYWludHMgPSAodHJhaWxpbmc6MSwgbGVhZGluZzoxLCBib3R0b206MSwgaGVpZ2h0OjI1OClcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdGVtb2ppR2FsbGV5ID0gbmV3IFNjcm9sbENvbXBvbmVudCBzdXBlckxheWVyOmVtb2ppQkcsIHdpZHRoOmVtb2ppQkcud2lkdGgsIGhlaWdodDplbW9qaUJHLmhlaWdodCAtIGV4cG9ydHMucHgoNDApXG5cdCMgXHRlbW9qaUdhbGxleS5zcGVlZFkgPSAwIFxuXHQjIFx0ZW1vamlTcGFjZXIgPSBleHBvcnRzLnB4KDYpXG5cdCMgXHRlbW9qaVBpY2tlciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiZW1vamkgcGlja2VyXCIsIHN1cGVyTGF5ZXI6ZW1vamlCR1xuXHQjIFx0ZW1vamlQaWNrZXIuY29uc3RyYWludHMgPSBcblx0IyBcdFx0bGVhZGluZzoxXG5cdCMgXHRcdHRyYWlsaW5nOjFcblx0IyBcdFx0Ym90dG9tOjFcblx0IyBcdFx0aGVpZ2h0OjQyXG5cdCMgXHRBQkMgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgc3VwZXJMYXllcjplbW9qaVBpY2tlclxuXHQjIFx0QUJDLmh0bWwgPSBcIkFCQ1wiXG5cdCMgXHRBQkMuc3R5bGUgPSB7XG5cdCMgXHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE1KSArIFwicHhcIlxuXHQjIFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA1MDBcblx0IyBcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdCMgXHRcdFwiY29sb3JcIiA6IFwiIzRGNTU1RFwiXG5cdCMgXHR9XG5cdCMgXHRBQkMuY29uc3RyYWludHMgPSBcblx0IyBcdFx0bGVhZGluZzoxMlxuXHQjIFx0XHRib3R0b206MTRcblx0IyBcdFx0d2lkdGg6MzBcblx0IyBcdFx0aGVpZ2h0OjE1XG5cblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdHJvdyA9IC0xXG5cdCMgXHRBQkMub24gRXZlbnRzLkNsaWNrLCAtPlxuXHQjIFx0XHRlbW9qaUJHLmRlc3Ryb3koKVxuXHQjIFx0ZnJlcXVlbnQgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHQjIFx0ZnJlcXVlbnQuaHRtbCA9IGljb25MaWJyYXJ5LmZyZXF1ZW50XG5cdCMgXHRmcmVxdWVudC5jb25zdHJhaW50cyA9IFxuXHQjIFx0XHRsZWFkaW5nIDogW0FCQywgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHRzbWlsZXlzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0IyBcdHNtaWxleXMuaHRtbCA9IGljb25MaWJyYXJ5LnNtaWxleXNcblx0IyBcdHNtaWxleXMuY29uc3RyYWludHMgPVxuXHQjIFx0XHRsZWFkaW5nIDogW2ZyZXF1ZW50LCAxNV1cblx0IyBcdFx0Ym90dG9tOiAxNFxuXHQjIFx0XHR3aWR0aDoxNlxuXHQjIFx0XHRoZWlnaHQ6MjBcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdGFuaW1hbHMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0YW5pbWFscy5odG1sID0gaWNvbkxpYnJhcnkuYW5pbWFsc1xuXHQjIFx0YW5pbWFscy5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbc21pbGV5cywgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHRmb29kID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0IyBcdGZvb2QuaHRtbCA9IGljb25MaWJyYXJ5LmZvb2Rcblx0IyBcdGZvb2QuY29uc3RyYWludHMgPVxuXHQjIFx0XHRsZWFkaW5nIDogW2FuaW1hbHMsIDE1XVxuXHQjIFx0XHRib3R0b206IDE0XG5cdCMgXHRcdHdpZHRoOjE2XG5cdCMgXHRcdGhlaWdodDoyMFxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0YWN0aXZpdHkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0YWN0aXZpdHkuaHRtbCA9IGljb25MaWJyYXJ5LmFjdGl2aXR5XG5cdCMgXHRhY3Rpdml0eS5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbZm9vZCwgMTVdXG5cdCMgXHRcdGJvdHRvbTogMTRcblx0IyBcdFx0d2lkdGg6MTZcblx0IyBcdFx0aGVpZ2h0OjIwXG5cdCMgXHRleHBvcnRzLmxheW91dCgpXG5cdCMgXHR0cmF2ZWwgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHQjIFx0dHJhdmVsLmh0bWwgPSBpY29uTGlicmFyeS50cmF2ZWxcblx0IyBcdHRyYXZlbC5jb25zdHJhaW50cyA9XG5cdCMgXHRcdGxlYWRpbmcgOiBbYWN0aXZpdHksIDE1XVxuXHQjIFx0XHRib3R0b206IDE0XG5cdCMgXHRcdHdpZHRoOjE2XG5cdCMgXHRcdGhlaWdodDoyMFxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0b2JqZWN0cyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdCMgXHRvYmplY3RzLmh0bWwgPSBpY29uTGlicmFyeS5vYmplY3RzXG5cdCMgXHRvYmplY3RzLmNvbnN0cmFpbnRzID1cblx0IyBcdFx0bGVhZGluZyA6IFt0cmF2ZWwsIDE1XVxuXHQjIFx0XHRib3R0b206IDE0XG5cdCMgXHRcdHdpZHRoOjE2XG5cdCMgXHRcdGhlaWdodDoyMFxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHQjIFx0c3ltYm9scyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdCMgXHRzeW1ib2xzLmh0bWwgPSBpY29uTGlicmFyeS5zeW1ib2xzXG5cdCMgXHRzeW1ib2xzLmNvbnN0cmFpbnRzID1cblx0IyBcdFx0bGVhZGluZyA6IFtvYmplY3RzLCAxNV1cblx0IyBcdFx0Ym90dG9tOiAxNFxuXHQjIFx0XHR3aWR0aDoxNlxuXHQjIFx0XHRoZWlnaHQ6MjBcblx0IyBcdGV4cG9ydHMubGF5b3V0KClcblx0IyBcdGZsYWdzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0IyBcdGZsYWdzLmh0bWwgPSBpY29uTGlicmFyeS5mbGFnc1xuXHQjIFx0ZmxhZ3MuY29uc3RyYWludHMgPVxuXHQjIFx0XHRsZWFkaW5nIDogW3N5bWJvbHMsIDE1XVxuXHQjIFx0XHRib3R0b206IDE0XG5cdCMgXHRcdHdpZHRoOjE2XG5cdCMgXHRcdGhlaWdodDoyMFxuXHQjIFx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdCMgXHRsb2FkRW1vamlzID0gKGVtKSAtPlxuXHQjIFx0XHRyb3crKyBcblx0IyBcdFx0aW5kZXggPSBlbW9qaXNBcnJheS5pbmRleE9mKGVtKVxuXHQjIFx0XHRjb2wgPSBNYXRoLmZsb29yKGluZGV4LzUpXG5cdCMgXHRcdGlmIHJvdyA+IDRcblx0IyBcdFx0XHRyb3cgPSAwIFxuXHQjIFx0XHRlbW9qaSA9IG5ldyBMYXllciB4OmNvbCpib3ggKyAoZW1vamlTcGFjZXIgKiBjb2wpICsgZXhwb3J0cy5weCgzKSwgeTpyb3cqYm94ICsgKGVtb2ppU3BhY2VyICogcm93KSArIGV4cG9ydHMucHgoNDApLCBzdXBlckxheWVyOmVtb2ppR2FsbGV5LmNvbnRlbnQsIHdpZHRoOmJveCwgaGVpZ2h0OmJveCwgbmFtZTpkZWNvZGVVUklDb21wb25lbnQoZW0pLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdCMgXHRcdGVtb2ppLmh0bWwgPSBkZWNvZGVVUklDb21wb25lbnQoZW0pXG5cdCMgXHRcdGVtb2ppLnN0eWxlID0ge1xuXHQjIFx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDI2KSArIFwicHhcIlxuXHQjIFx0XHRcdFwibGluZS1oZWlnaHRcIiA6IGJveCArIFwicHhcIlxuXHQjIFx0XHRcdFwidGV4dC1hbGlnblwiIDogXCJjZW50ZXJcIlxuXHQjIFx0XHR9XG5cdCMgXHRcdGVtb2ppLm9uIEV2ZW50cy5DbGljaywgLT5cblx0IyBcdFx0XHRwcmludCBALm5hbWVcblx0IyBcdFx0ZW1vamlzTG9hZGVkKytcblx0IyBcdFx0cHJpbnQgZW1vamlzTG9hZGVkXG5cblx0IyBcdGluYyA9IDIwMFxuXHQjIFx0Zmlyc3RMb2FkID0gLjFcblx0IyBcdHRpbWVJbmMgPSAyXG5cdCMgXHRmdWxsQW1vdW50ID0gZW1vamlzQXJyYXkubGVuZ3RoXG5cdCMgXHRsb2FkcyA9IE1hdGguY2VpbChmdWxsQW1vdW50IC8gaW5jKSAtIDFcblx0IyBcdHBhcnRpYWxBbW91bnQgPSBmdWxsQW1vdW50ICUgaW5jXG5cdCMgXHRlbW9qaXNMb2FkZWQgPSAwXG5cdCMgXHRmb3IgaSBpbiBbMC4ubG9hZHNdXG5cdCMgXHRcdGkrK1xuXHRcdFx0XG5cdCMgXHQjU2Nyb2xsIExvYWRcblx0IyBcdGVtb2ppR2FsbGV5Lm9uIEV2ZW50cy5Nb3ZlLCAtPlxuXHQjIFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMjAwMCAmJiBlbW9qaXNMb2FkZWQgPCA0MDBcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMjAwLi4uNDAwXVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gMjAwMVxuXHQjIFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gNTAwMCAmJiBlbW9qaXNMb2FkZWQgPCA2MDBcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNDAwLi4uNjAwXVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gNTAwMVxuXHQjIFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gNzUwMCAmJiBlbW9qaXNMb2FkZWQgPCA4MDBcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNjAwLi4uODAwXVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gNzUwMVxuXHQjIFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMTAwMDAgJiYgZW1vamlzTG9hZGVkIDwgMTAwMFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs4MDAuLi4xMDAwXVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gMTAwMDFcblx0IyBcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDEyNTAwICYmIGVtb2ppc0xvYWRlZCA8IDEyMDBcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMTAwMC4uLjEyOTddXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAxMjUwMVxuXG5cdCMgXHQjVGltZSBMb2FkXG5cdCMgXHRVdGlscy5kZWxheSAxLCAtPiBcblx0IyBcdFx0aWYgZW1vamlzTG9hZGVkIDwgNDAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHQjIFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdCMgXHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzIwMC4uLjQwMF1cblx0IyBcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdCMgXHRVdGlscy5kZWxheSAyLjUsIC0+IFxuXHQjIFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA2MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdCMgXHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0IyBcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNDAwLi4uNjAwXVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdFV0aWxzLmRlbGF5IDIuNSwgLT4gXG5cdCMgXHRcdGlmIGVtb2ppc0xvYWRlZCA8IDgwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0IyBcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs2MDAuLi44MDBdXG5cdCMgXHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHQjIFx0VXRpbHMuZGVsYXkgNS41LCAtPiBcblx0IyBcdFx0aWYgZW1vamlzTG9hZGVkIDwgMTAwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0IyBcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHQjIFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs4MDAuLi4xMDAwXVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0IyBcdFV0aWxzLmRlbGF5IDcsIC0+IFxuXHQjIFx0XHRpZiBlbW9qaXNMb2FkZWQgPCAxMjk3ICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHQjIFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdCMgXHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzEwMDAuLi4xMjk3XVxuXHQjIFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblxuXG5cdCMgXHRmb3IgZW0gaW4gZnJlcUVtb2ppc0FycmF5XG5cdCMgXHRcdGxvYWRFbW9qaXMoZW0pXG5cdCMgXHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMC4uLmluY11cblx0IyBcdFx0bG9hZEVtb2ppcyhlbSlcblxuXG5cdCMgXHRmb3Igc2VjIGluIGVtb2ppU2VjdGlvbnNcblx0IyBcdFx0aW5kZXggPSBlbW9qaVNlY3Rpb25zLmluZGV4T2Yoc2VjKVxuXHQjIFx0XHR0aXRsZSA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppR2FsbGV5LmNvbnRlbnQsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6aW5kZXgqNTAwMCArIGV4cG9ydHMucHgoOCksIGhlaWdodDo4MCwgd2lkdGg6ODAwXG5cdCMgXHRcdHRpdGxlLmh0bWwgPSBzZWNcblx0IyBcdFx0dGl0bGUuc3R5bGUgPSB7XG5cdCMgXHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTIpICsgXCJweFwiXG5cdCMgXHRcdFx0XCJmb250LXdlaWdodFwiIDogNjAwXG5cdCMgXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdCMgXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cdCMgXHRcdFx0J2xldHRlci1zcGFjaW5nJyA6IGV4cG9ydHMucHgoMC43KSArIFwicHhcIlxuXHQjIFx0XHRcdCdjb2xvcicgOiBcIiNBNUE2QTlcIlxuXHQjIFx0XHRcdCd0ZXh0LXRyYW5zZm9ybScgOiAndXBwZXJjYXNlJ1xuXHQjIFx0XHR9XG5cblxuXHQjIGVtb2ppS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0IyBcdGVtb2ppS2V5LmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuY29sb3IoXCJsaWdodC1rZXlcIilcblxuXG5cblx0cmV0dXJuIGJvYXJkXG5cbmV4cG9ydHMuU2hlZXQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJzaGVldFwiLCBhcnJheSlcblx0c2hlZXQgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRzaGVldC5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdG92ZXJsYXkgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwicmdiYSgwLCAwLCAwLCAuNClcIiwgc3VwZXJMYXllcjpzaGVldCwgbmFtZTpcIm92ZXJsYXlcIlxuXHRvdmVybGF5LmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRzaGVldHMgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgc3VwZXJMYXllcjpzaGVldFxuXHRzaGVldHMuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRleGl0QnV0dG9uID0gbmV3IGV4cG9ydHMuQnV0dG9uIGJ1dHRvblR5cGU6XCJiaWdcIiwgdGV4dDpzZXR1cC5leGl0LCBibHVyOmZhbHNlLCBzdXBlckxheWVyOnNoZWV0c1xuXHRleGl0QnV0dG9uLmNvbnN0cmFpbnRzID0gXG5cdFx0Ym90dG9tOjEwXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRhY3Rpb25zID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c2hlZXRzLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMi41KSwgYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwgLjg1KVwiXG5cblx0ZGVzY3JpcHRpb25CdWZmZXIgPSAwXG5cdGlmIHNldHVwLmRlc2NyaXB0aW9uXG5cdFx0ZGVzY3JpcHRpb24gPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic2hlZXREZXNjcmlwdGlvblwiLCB0ZXh0OnNldHVwLmRlc2NyaXB0aW9uLCBzdXBlckxheWVyOmFjdGlvbnMsIGZvbnRTaXplOjEzLCBjb2xvcjpcIiM4RjhFOTRcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRkZXNjcmlwdGlvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0dG9wOjIxXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0d2lkdGg6ZXhwb3J0cy5wdChleHBvcnRzLndpZHRoKSAtIDEwMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRkZXNjcmlwdGlvbkJ1ZmZlciA9IGV4cG9ydHMucHQoZGVzY3JpcHRpb24uaGVpZ2h0KSArIDQyXG5cdFx0ZGl2aWRlciA9IG5ldyBMYXllciBzdXBlckxheWVyOmFjdGlvbnMsIGJhY2tncm91bmRDb2xvcjpcIiNENkUzRTdcIlxuXHRcdGRpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdFx0aGVpZ2h0OjFcblx0XHRcdHRvcDpkZXNjcmlwdGlvbkJ1ZmZlclxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdGV4cG9ydHMuYmdCbHVyKGFjdGlvbnMpXG5cdGFjdGlvbnMuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjEwXG5cdFx0dHJhaWxpbmc6MTBcblx0XHRib3R0b206W2V4aXRCdXR0b24sIDEwXVxuXHRcdGhlaWdodDo1OCAqIHNldHVwLmFjdGlvbnMubGVuZ3RoICsgZGVzY3JpcHRpb25CdWZmZXJcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRhY3RzID0ge31cblx0Zm9yIGFjdCwgaW5kZXggaW4gc2V0dXAuYWN0aW9uc1xuXHRcdG8gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjphY3Rpb25zLCB3aWR0aDphY3Rpb25zLndpZHRoLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMi41KVxuXHRcdG8uY29uc3RyYWludHMgPSBcblx0XHRcdHRvcDppbmRleCAqIDU4ICsgZGVzY3JpcHRpb25CdWZmZXJcblx0XHRcdGhlaWdodDo1OFxuXHRcdGJ1dHRvbiA9IG5ldyBleHBvcnRzLkJ1dHRvbiB0ZXh0OmFjdCwgc3VwZXJMYXllcjpvLCBmb250U2l6ZToyMFxuXHRcdHNwZWNpYWxDaGFyKGJ1dHRvbilcblx0XHRidXR0b24uY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdGJ1dHRvbi5jb2xvciA9IFwiI0ZFMzgyNFwiXG5cdFx0aWYgaW5kZXggIT0gc2V0dXAuYWN0aW9ucy5sZW5ndGggLSAxXG5cdFx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bywgd2lkdGg6YWN0aW9ucy53aWR0aCwgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0XHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0aGVpZ2h0OjFcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0by5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyMTUsMjE1LDIxNSwuNylcIlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6IChiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0dGltZTouNVxuXHRcdG8ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIpXG5cdFx0XHRcdHRpbWU6LjVcblx0XHRcdHNoZWV0cy5hbmltYXRlIFxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTpleHBvcnRzLmhlaWdodCtleHBvcnRzLnB4KChzZXR1cC5hY3Rpb25zLmxlbmd0aCArIDMpICogNTgpKVxuXHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdFx0dGltZTouM1xuXHRcdFx0VXRpbHMuZGVsYXkgLjMsIC0+XG5cdFx0XHRcdHNoZWV0LmRlc3Ryb3koKVxuXHRcdGFjdHNbYWN0XSA9IG9cblxuXHRpZiBzZXR1cC5hbmltYXRlZCA9PSB0cnVlXG5cdFx0b3ZlcmxheS5vcGFjaXR5ID0gMCBcblx0XHRzaGVldHMubWF4WSA9IGV4cG9ydHMuaGVpZ2h0ICsgZXhwb3J0cy5weCgoc2V0dXAuYWN0aW9ucy5sZW5ndGggKyAzKSAqIDU4KVxuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0dGltZTouM1xuXHRcdHNoZWV0cy5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOihtYXhZOmV4cG9ydHMuaGVpZ2h0KVxuXHRcdFx0dGltZTouM1xuXG5cdG92ZXJsYXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNoZWV0cy5hbmltYXRlIFxuXHRcdFx0cHJvcGVydGllczogKG1heFk6ZXhwb3J0cy5oZWlnaHQrZXhwb3J0cy5weCgoc2V0dXAuYWN0aW9ucy5sZW5ndGggKyAzKSAqIDU4KSlcblx0XHRcdHRpbWU6LjNcblx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6IChvcGFjaXR5OjApXG5cdFx0XHR0aW1lOi4zXG5cdFx0VXRpbHMuZGVsYXkgLjMsIC0+XG5cdFx0XHRzaGVldC5kZXN0cm95KClcdFx0XG5cblx0ZXhpdEJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c2hlZXRzLmFuaW1hdGUgXG5cdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTpleHBvcnRzLmhlaWdodCtleHBvcnRzLnB4KChzZXR1cC5hY3Rpb25zLmxlbmd0aCArIDMpICogNTgpKVxuXHRcdFx0dGltZTouM1xuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdHNoZWV0LmRlc3Ryb3koKVxuXG5cdHNoZWV0LmNhbmNlbCA9IGV4aXRCdXR0b25cblx0c2hlZXQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuXHRzaGVldC5vdmVybGF5ID0gb3ZlcmxheVxuXHRzaGVldC5hY3Rpb25zID0gYWN0c1xuXHRyZXR1cm4gc2hlZXRcblxuZXhwb3J0cy5OYXZCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJuYXZCYXJcIiwgYXJyYXkpXG5cdGJhciA9IG5ldyBMYXllciBuYW1lOlwibmF2YmFyXCJcblx0YmFyQXJlYSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJhciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRkaXZpZGVyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNCMkIyQjJcIiwgbmFtZTpcIm5hdiBkaXZpZGVyXCIsIHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRpZiBzZXR1cC5zdXBlckxheWVyIFxuXHRcdHNldHVwLnN1cGVyTGF5ZXIuYWRkU3ViTGF5ZXIoYmFyKVxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6LjVcblx0XHRib3R0b206MFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0aWYgc2V0dXAuYmx1ciBcblx0XHRiYXIuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC44KVwiXG5cdFx0ZXhwb3J0cy5iZ0JsdXIoYmFyKVxuXHRlbHNlXG5cdFx0YmFyLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiXG5cdFx0ZXhwb3J0cy5iZ0JsdXIoYmFyKVxuXHRiYXIudHlwZSA9IHNldHVwLnR5cGVcblx0YmFyQXJlYS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDo0NFxuXHRcdGJvdHRvbTowXG5cdGJhci5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGhlaWdodDo2NFxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJzdGF0dXNCYXJcIlxuXHRcdFx0QHN0YXR1c0JhciA9IGxheWVyXG5cdFx0XHRiYXIucGxhY2VCZWhpbmQoQHN0YXR1c0JhcilcblxuXHRpZiB0eXBlb2Ygc2V0dXAudGl0bGUgPT0gXCJzdHJpbmdcIlxuXHRcdHRpdGxlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcIm5hdkJhclRpdGxlXCIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOmJhckFyZWEsIHRleHQ6c2V0dXAudGl0bGVcblx0aWYgdHlwZW9mIHNldHVwLnRpdGxlID09IFwib2JqZWN0XCIgXG5cdFx0dGl0bGUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwibmF2QmFyVGl0bGVcIiwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC50aXRsZS5sYWJlbC5odG1sXG5cdFx0YmFyLnN1cGVyTGF5ZXIgPSBzZXR1cC50aXRsZS52aWV3XG5cdHNwZWNpYWxDaGFyKHRpdGxlKVxuXHR0aXRsZS5jb25zdHJhaW50cyA9IFxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0Ym90dG9tOjEyXG5cblx0IyBIYW5kbGUgUmlnaHRcblx0aWYgdHlwZW9mIHNldHVwLnJpZ2h0ID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNldHVwLnJpZ2h0ICE9IFwiYm9vbGVhblwiXG5cdFx0YmFyLnJpZ2h0ID0gbmV3IGV4cG9ydHMuQnV0dG9uIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC5yaWdodCwgZm9udFdlaWdodDo1MDAsIGNvbnN0cmFpbnRzOntib3R0b206MTIsIHRyYWlsaW5nOjh9XG5cdFx0YmFyLnJpZ2h0LnR5cGUgPSBcImJ1dHRvblwiXG5cdFx0c3BlY2lhbENoYXIoYmFyLnJpZ2h0KVxuXHRpZiB0eXBlb2Ygc2V0dXAucmlnaHQgPT0gXCJvYmplY3RcIlxuXHRcdGJhci5yaWdodCA9IHNldHVwLnJpZ2h0XG5cdFx0YmFyLnJpZ2h0LnN1cGVyTGF5ZXIgPSBiYXJBcmVhXG5cdFx0YmFyLnJpZ2h0LmNvbnN0cmFpbnRzID0ge1xuXHRcdFx0dHJhaWxpbmc6OFxuXHRcdFx0Ym90dG9tOjEyXG5cdFx0fVxuXG5cdCMgSGFuZGxlIExlZnRcblx0aWYgdHlwZW9mIHNldHVwLmxlZnQgPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygc2V0dXAubGVmdCAhPSBcImJvb2xlYW5cIlxuXHRcdGxlYWRpbmcgPSA4XG5cdFx0aWYgc2V0dXAubGVmdC5pbmRleE9mKFwiPFwiKSAhPSAtMVxuXHRcdFx0c3ZnID0gZXhwb3J0cy5zdmcoaWNvbkxpYnJhcnkuY2hldnJvbilcblx0XHRcdGJhci5jaGV2cm9uID0gbmV3IExheWVyIHdpZHRoOnN2Zy53aWR0aCwgaGVpZ2h0OnN2Zy5oZWlnaHQsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6YmFyQXJlYVxuXHRcdFx0YmFyLmNoZXZyb24uaHRtbCA9IHN2Zy5zdmdcblx0XHRcdGJhci5jaGV2cm9uLmNvbnN0cmFpbnRzID0ge2JvdHRvbTo5LCBsZWFkaW5nOjh9XG5cdFx0XHRzZXR1cC5sZWZ0ID0gc2V0dXAubGVmdC5yZXBsYWNlKFwiPFwiLCBcIlwiKVxuXHRcdFx0bGVhZGluZyA9IFtiYXIuY2hldnJvbiwgNF1cblxuXHRcdGJhci5sZWZ0ID0gbmV3IGV4cG9ydHMuQnV0dG9uIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC5sZWZ0LCBmb250V2VpZ2h0OjUwMCwgY29uc3RyYWludHM6e2JvdHRvbToxMiwgbGVhZGluZzpsZWFkaW5nfVxuXHRcdFxuXHRcdGJhci5sZWZ0Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0aWYgYmFyLmNoZXZyb25cblx0XHRcdFx0YmFyLmNoZXZyb24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6LjI1KVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRiYXIubGVmdC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRpZiBiYXIuY2hldnJvblxuXHRcdFx0XHRiYXIuY2hldnJvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRpZiB0eXBlb2Ygc2V0dXAubGVmdCA9PSBcIm9iamVjdFwiXG5cdFx0YmFyLmxlZnQgPSBzZXR1cC5sZWZ0XG5cdFx0YmFyLmxlZnQuc3VwZXJMYXllciA9IGJhckFyZWFcblx0XHRiYXIubGVmdC5jb25zdHJhaW50cyA9IHtcblx0XHRcdGxlYWRpbmc6OFxuXHRcdFx0Ym90dG9tOjEyXG5cdFx0fVxuXG5cblxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIGJhclxuXG5leHBvcnRzLlRhYiA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcInRhYlwiLCBhcnJheSlcblx0c3dpdGNoIGV4cG9ydHMuZGV2aWNlIFxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHRAdGFiV2lkdGggPSA1NVxuXHRcdGVsc2Vcblx0XHRcdEB0YWJXaWR0aCA9IDc1XG5cdHRhYlZpZXcgPSBuZXcgTGF5ZXIgbmFtZTpzZXR1cC5sYWJlbCArIFwiIHZpZXdcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHR0YWJWaWV3LmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0dGFiQm94ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6c2V0dXAubGFiZWwgKyBcIiB0YWJcIlxuXHR0YWJCb3guY29uc3RyYWludHMgPVxuXHRcdHdpZHRoOkB0YWJXaWR0aFxuXHRcdGhlaWdodDo0OVxuXHRpY29uID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMjUpLCBoZWlnaHQ6ZXhwb3J0cy5weCgyNSksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJpY29uXCIsIHN1cGVyTGF5ZXI6dGFiQm94XG5cdGljb24uY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0dG9wOjdcblx0c3ZnRnJhbWUgPSBleHBvcnRzLnN2ZyhzZXR1cC5pY29uKVxuXHRpY29uLmh0bWwgPSBzdmdGcmFtZS5zdmdcblx0aWNvbi53aWR0aCA9IHN2Z0ZyYW1lLndpZHRoXG5cdGljb24uaGVpZ2h0ID0gc3ZnRnJhbWUuaGVpZ2h0XG5cdGxhYmVsID0gbmV3IGV4cG9ydHMuVGV4dCB0ZXh0OnNldHVwLmxhYmVsLCBzdXBlckxheWVyOnRhYkJveCwgY29sb3I6XCIjOTI5MjkyXCIsIGZvbnRTaXplOjEwLCBuYW1lOlwibGFiZWxcIiwgdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIlxuXHRsYWJlbC5jb25zdHJhaW50cyA9IFxuXHRcdGJvdHRvbToyXG5cdFx0aG9yaXpvbnRhbENlbnRlcjppY29uXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHQjIEV4cG9ydCBUYWJcblx0dGFiQm94LnR5cGUgPSBcInRhYlwiXG5cdHRhYkJveC5pY29uID0gaWNvblxuXHR0YWJCb3gudmlldyA9IHRhYlZpZXdcblx0dGFiQm94LmxhYmVsID0gbGFiZWxcblxuXHRyZXR1cm4gdGFiQm94XG5cbmV4cG9ydHMuVGFiQmFyID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwidGFiQmFyXCIsIGFycmF5KVxuXHRpZiBzZXR1cC50YWJzLmxlbmd0aCA9PSAwXG5cdFx0ZHVtbXlUYWIgPSBuZXcgZXhwb3J0cy5UYWJcblx0XHRkdW1teVRhYjIgPSBuZXcgZXhwb3J0cy5UYWJcblx0XHRzZXR1cC50YWJzLnB1c2ggZHVtbXlUYWJcblx0XHRzZXR1cC50YWJzLnB1c2ggZHVtbXlUYWIyXG5cdHRhYldpZHRoID0gNzVcblx0c3dpdGNoIGV4cG9ydHMuZGV2aWNlIFxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHR0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0dGFiV2lkdGggPSA3NVxuXHR0YWJCYXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInRhYiBiYXJcIlxuXHR0YWJCYXJCRyA9IG5ldyBCYWNrZ3JvdW5kTGF5ZXIgc3VwZXJMYXllcjp0YWJCYXIsIG5hbWU6XCJ0YWJCYXIgYmFja2dyb3VuZFwiXG5cdHRhYkJhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGJvdHRvbTowXG5cdFx0aGVpZ2h0OjQ5XG5cdHRhYkJhckJHLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0Ym90dG9tOjBcblx0XHRoZWlnaHQ6NDlcblx0ZGl2aWRlciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjQjJCMkIyXCIsIG5hbWU6XCJ0YWJEaXZpZGVyXCIsIHN1cGVyTGF5ZXI6dGFiQmFyXG5cdGRpdmlkZXIuY29uc3RyYWludHMgPSBcblx0XHR0b3A6MFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6LjVcblx0dGFiQmFyQm94ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6dGFiQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwidGFiQmFyIGJveFwiXG5cdHRhYkJhckJveC5jb25zdHJhaW50cyA9IFxuXHRcdGhlaWdodDo0OVxuXHRcdHdpZHRoOnNldHVwLnRhYnMubGVuZ3RoICogdGFiV2lkdGhcblxuXHRleHBvcnRzLmxheW91dCgpXG5cblx0c2V0QWN0aXZlID0gKHRhYkluZGV4KSAtPlxuXHRcdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHRcdGlmIGluZGV4ID09IHRhYkluZGV4XG5cdFx0XHRcdGV4cG9ydHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgZXhwb3J0cy5jb2xvcihzZXR1cC5hY3RpdmVDb2xvcikpXG5cdFx0XHRcdHRhYi5sYWJlbC5jb2xvciA9IGV4cG9ydHMuY29sb3Ioc2V0dXAuYWN0aXZlQ29sb3IpXG5cdFx0XHRcdHRhYi52aWV3LnZpc2libGUgPSB0cnVlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGV4cG9ydHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgZXhwb3J0cy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKSlcblx0XHRcdFx0dGFiLmxhYmVsLmNvbG9yID0gZXhwb3J0cy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKVxuXHRcdFx0XHR0YWIudmlldy52aXNpYmxlID0gZmFsc2VcblxuXHRmb3IgdGFiLCBpbmRleCBpbiBzZXR1cC50YWJzXG5cdFx0I0NoZWNrIGZvciB2YWlsZCB0YWIgb2JqZWN0XG5cdFx0aWYgdGFiLnR5cGUgIT0gXCJ0YWJcIlxuXHRcdFx0ZXJyb3IodGFiLmlkLCA1KVxuXG5cdFx0dGFiQmFyQm94LmFkZFN1YkxheWVyKHRhYilcblx0XHQjIENoYW5nZSBjb2xvcnNcblx0XHRleHBvcnRzLmNoYW5nZUZpbGwodGFiLmljb24sIGV4cG9ydHMuY29sb3Ioc2V0dXAuaW5hY3RpdmVDb2xvcikpXG5cdFx0dGFiLmxhYmVsLmNvbG9yID0gZXhwb3J0cy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKVxuXHRcdHRhYkJhckJHLmJhY2tncm91bmRDb2xvciA9IHNldHVwLmJhY2tncm91bmRDb2xvclxuXHRcdGlmIHNldHVwLmJsdXJcblx0XHRcdHRhYkJhckJHLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwgLjkpXCJcblx0XHRcdGV4cG9ydHMuYmdCbHVyKHRhYkJhckJHKVxuXG5cdFx0aWYgaW5kZXggIT0gMFxuXHRcdFx0dGFiLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGxlYWRpbmc6c2V0dXAudGFic1tpbmRleCAtIDFdXG5cdFx0XHRleHBvcnRzLmxheW91dCgpXG5cblx0XHR0YWIub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHR0YWJJbmRleCA9IEAueCAvIGV4cG9ydHMucHgodGFiV2lkdGgpXG5cdFx0XHRzZXRBY3RpdmUodGFiSW5kZXgpXG5cdHRhYkJhckJveC5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRzZXRBY3RpdmUoc2V0dXAuc3RhcnQpXHRcblxuXHRleHBvcnRzLmxheW91dCgpXG5cdHJldHVybiB0YWJCYXJcblxuZXhwb3J0cy5UZXh0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwidGV4dFwiLCBhcnJheSlcblx0ZXhjZXB0aW9ucyA9IE9iamVjdC5rZXlzKHNldHVwKVxuXHR0ZXh0TGF5ZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpzZXR1cC5uYW1lXG5cdHRleHRMYXllci50eXBlID0gXCJ0ZXh0XCJcblx0dGV4dExheWVyLmh0bWwgPSBzZXR1cC50ZXh0XG5cdGZvciBwcm9wIGluIGRlZmF1bHRzLmZyYW1lclByb3BzXG5cdFx0aWYgc2V0dXBbcHJvcF1cblx0XHRcdGlmIHByb3AgPT0gXCJjb2xvclwiXG5cdFx0XHRcdHNldHVwW3Byb3BdID0gZXhwb3J0cy5jb2xvcihzZXR1cFtwcm9wXSlcblx0XHRcdHRleHRMYXllcltwcm9wXSA9IHNldHVwW3Byb3BdXG5cdGZvciBwcm9wIGluIGRlZmF1bHRzLnN0eWxlUHJvcHNcblx0XHRpZiBzZXR1cFtwcm9wXVxuXHRcdFx0aWYgcHJvcCA9PSBcImxpbmVIZWlnaHRcIiAmJiBzZXR1cFtwcm9wXSA9PSBcImF1dG9cIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9ICBzZXR1cFtcImZvbnRTaXplXCJdXG5cdFx0XHRpZiBwcm9wID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdHN3aXRjaCBzZXR1cFtwcm9wXVxuXHRcdFx0XHRcdHdoZW4gXCJ1bHRyYXRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMTAwXG5cdFx0XHRcdFx0d2hlbiBcInRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMjAwXG5cdFx0XHRcdFx0d2hlbiBcImxpZ2h0XCIgdGhlbiBzZXR1cFtwcm9wXSA9IDMwMFxuXHRcdFx0XHRcdHdoZW4gXCJyZWd1bGFyXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDQwMFxuXHRcdFx0XHRcdHdoZW4gXCJtZWRpdW1cIiB0aGVuIHNldHVwW3Byb3BdID0gNTAwXG5cdFx0XHRcdFx0d2hlbiBcInNlbWlib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDYwMFxuXHRcdFx0XHRcdHdoZW4gXCJib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDcwMFxuXHRcdFx0XHRcdHdoZW4gXCJibGFja1wiIHRoZW4gc2V0dXBbcHJvcF0gPSA4MDBcblx0XHRcdGlmIHNldHVwW3Byb3BdID09IHBhcnNlSW50KHNldHVwW3Byb3BdLCAxMCkgJiYgc2V0dXBbcHJvcF0gPCA5OVxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IGV4cG9ydHMucHgoc2V0dXBbcHJvcF0pICsgXCJweFwiXG5cdFx0XHR0ZXh0TGF5ZXIuc3R5bGVbcHJvcF0gPSBzZXR1cFtwcm9wXVxuXHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUodGV4dExheWVyKVxuXHR0ZXh0TGF5ZXIucHJvcHMgPSAoaGVpZ2h0OnRleHRGcmFtZS5oZWlnaHQsIHdpZHRoOnRleHRGcmFtZS53aWR0aClcblx0dGV4dExheWVyLmNvbnN0cmFpbnRzID0gc2V0dXAuY29uc3RyYWludHNcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4gdGV4dExheWVyXG5cbmljb25MaWJyYXJ5ID0ge1xuXHRhY3Rpdml0eTogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNil9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE2IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+U29jY2VyIEJhbGw8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+XG5cdFx0XHRcdFx0PGNpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0XHQ8L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE3OS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nU29jY2VyLUJhbGwnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE3OS4wMDAwMDAsIDYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PG1hc2sgaWQ9J21hc2stMicgc2tldGNoOm5hbWU9J01hc2snIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0XHRcdFx0XHQ8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0XHRcdFx0XHQ8L21hc2s+XG5cdFx0XHRcdFx0XHRcdDx1c2UgaWQ9J01hc2snIHN0cm9rZT0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDEyLjEyMDMwNDYgTDEyLjg1NzMzODQsOCBMMTMuMzcyMzc2NSw4Ljg1NzE2NzMgTDYuNTE1MDM4MDcsMTIuOTc3NDcxOSBMNiwxMi4xMjAzMDQ2IEw2LDEyLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00NycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS44NDk2NDgsOC43MjYwNTUxIEwxOS4xMDAxMTAzLDUuMzQ1MTA5MDEgTDE5LjUyMjcyODUsNi4yNTE0MTY4IEwxMi4yNzIyNjYyLDkuNjMyMzYyODkgTDExLjg0OTY0OCw4LjcyNjA1NTEgTDExLjg0OTY0OCw4LjcyNjA1NTEgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNiwzLjEyMDMwNDYgTDEyLjg1NzMzODQsLTEgTDEzLjM3MjM3NjUsLTAuMTQyODMyNjk5IEw2LjUxNTAzODA3LDMuOTc3NDcxOSBMNiwzLjEyMDMwNDYgTDYsMy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTS0xLDcuMTIwMzA0NiBMNS44NTczMzg0MSwzIEw2LjM3MjM3NjQ4LDMuODU3MTY3MyBMLTAuNDg0OTYxOTI1LDcuOTc3NDcxOSBMLTEsNy4xMjAzMDQ2IEwtMSw3LjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzQnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzUnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PScxMS41JyB5PSczJyB3aWR0aD0nMScgaGVpZ2h0PScxMic+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSw0Ljg1NzE2NzMgTDExLjg1NzMzODQsOC45Nzc0NzE5IEwxMi4zNzIzNzY1LDguMTIwMzA0NiBMNS41MTUwMzgwNyw0IEw1LDQuODU3MTY3MycgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsMTIuODU3MTY3MyBMMTEuODU3MzM4NCwxNi45Nzc0NzE5IEwxMi4zNzIzNzY1LDE2LjEyMDMwNDYgTDUuNTE1MDM4MDcsMTIgTDUsMTIuODU3MTY3MycgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTUnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMScgZmlsbD0nI0Q4RDhEOCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xLUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNy40NTc3MTE4OSwzLjE5NTA0NzM5IEw3LjM1NTE0NDg0LDYuMTMyMTgzMzMgTDQuNTMwMDY3Niw2Ljk0MjI2MTIgTDIuODg2NjQwODksNC41MDU3ODA5IEw0LjY5NjAyNDU3LDIuMTg5ODc1NDEgTDcuNDU3NzExODksMy4xOTUwNDczOScgaWQ9J1BvbHlnb24tMS1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNy40NTc3MTE4OSwxMS4xOTUwNDc0IEw3LjM1NTE0NDg0LDE0LjEzMjE4MzMgTDQuNTMwMDY3NiwxNC45NDIyNjEyIEwyLjg4NjY0MDg5LDEyLjUwNTc4MDkgTDQuNjk2MDI0NTcsMTAuMTg5ODc1NCBMNy40NTc3MTE4OSwxMS4xOTUwNDc0JyBpZD0nUG9seWdvbi0xLUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xNC41NDMxNzAxLDAuMDcyNTkzOTMxNCBMMTQuNDQwNjAzMSwzLjAwOTcyOTg4IEwxMS42MTU1MjU4LDMuODE5ODA3NzQgTDkuOTcyMDk5MTIsMS4zODMzMjc0NSBMMTEuNzgxNDgyOCwtMC45MzI1NzgwNSBMMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQnIGlkPSdQb2x5Z29uLTEtQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGFuaW1hbHM6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkdyb3VwPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTE3LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J2ljX0Zvb2QnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDExOC4wMDAwMDAsIDY0MC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J0dyb3VwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS42ODM3NzUzNywxLjM4MTU2NjQ2IEM2LjIzOTI2MDY2LDEuMTM2MjQgNi44NTM3MjAwNSwxIDcuNSwxIEM4LjE0NjI3OTk1LDEgOC43NjA3MzkzNCwxLjEzNjI0IDkuMzE2MjI0NjMsMS4zODE1NjY0NiBDOS44MDg3OTI3NSwwLjU2MjM1OTAxOSAxMC44MjU1ODg4LDAgMTIsMCBDMTMuNjU2ODU0MiwwIDE1LDEuMTE5Mjg4MTMgMTUsMi41IEMxNSwzLjU1NzEzOTggMTQuMjEyNjI0Niw0LjQ2MTAyODQzIDEzLjA5OTkyMjYsNC44MjY2MjUxNCBDMTQuMjQ5NjUyOCw1LjY0MTg1NDIyIDE1LDYuOTgzMzAwNjIgMTUsOC41IEMxNSwxMC43MTY3MTQ0IDEzLjM5NzE4NzMsMTIuNTU5MDcxOSAxMS4yODcyNjcxLDEyLjkzMTM2NzMgQzEwLjQ4NjcyNDgsMTQuMTc1NzcwMyA5LjA4OTYxNjk2LDE1IDcuNSwxNSBDNS45MTAzODMwNCwxNSA0LjUxMzI3NTI0LDE0LjE3NTc3MDMgMy43MTI3MzI5MSwxMi45MzEzNjczIEMxLjYwMjgxMjY4LDEyLjU1OTA3MTkgMCwxMC43MTY3MTQ0IDAsOC41IEMwLDYuOTgzMzAwNjIgMC43NTAzNDcyNDQsNS42NDE4NTQyMiAxLjkwMDA3NzQxLDQuODI2NjI1MTQgQzAuNzg3Mzc1NDQ1LDQuNDYxMDI4NDMgMCwzLjU1NzEzOTggMCwyLjUgQzAsMS4xMTkyODgxMyAxLjM0MzE0NTc1LDAgMywwIEM0LjE3NDQxMTIyLDAgNS4xOTEyMDcyNSwwLjU2MjM1OTAxOSA1LjY4Mzc3NTM3LDEuMzgxNTY2NDYgWicgaWQ9J092YWwtOCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjczODM0MjI4LDEyIEM1Ljg2MjkwOTc5LDEyIDYuMTQ2NDIzNTMsMTIgNi4xNDY0MjM1MywxMiBDNi4xNDY0MjM1MywxMiA2LjQzMjE1Njk2LDEyLjQ0MjYxMjMgNi41MjQ2NTgyLDEyLjQ5MTk3MzkgQzYuNjY0NTU2MDEsMTIuNTY2NjI3NyA3LDEyLjQ5MTk3MzkgNywxMi40OTE5NzM5IEw3LDEyIEw4LDEyIEw4LDEyLjQ5MTk3MzkgTDguNDk3OTkyMjgsMTIuNDkxOTczOSBMOC44NDMwMTc2OSwxMiBMOS4zOTE4NDU3LDEyIEM5LjM5MTg0NTcsMTIgOC45OTU5ODQ1NywxMi45ODM5NDc4IDguNDk3OTkyMjgsMTIuOTgzOTQ3OCBMNi42MDcwMjQwNywxMi45ODM5NDc4IEM2LjIxNDA0ODEzLDEyLjk4Mzk0NzggNS40NTk5NjA5NCwxMiA1LjczODM0MjI4LDEyIFonIGlkPSdSZWN0YW5nbGUtNDQtQ29weS0yJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nT3ZhbC0xNCcgY3g9JzEwLjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nT3ZhbC0xNC1Db3B5JyBjeD0nNC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMi42OTk5OTY5LDUgQzEyLjY5OTk5NjksMy4wNjcwMDMzOCAxMS4xMzI5OTM2LDEuNSA5LjE5OTk5Njk1LDEuNScgaWQ9J092YWwtMTYnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS41LDUgQzUuNSwzLjA2NzAwMzM4IDMuOTMyOTk2NjIsMS41IDIsMS41JyBpZD0nT3ZhbC0xNi1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjc1MDAwMCwgMy4yNTAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMuNzUwMDAwLCAtMy4yNTAwMDApICc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNDQtQ29weScgeD0nNycgeT0nMTEnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNiwxMCBMNi41LDEwIEw2LjQ5OTk5OTk5LDkuNSBMOC41MDAwMDAwNSw5LjUgTDguNTAwMDAwMDUsMTAgTDksMTAgTDksMTAuNSBMOC41LDEwLjUgTDguNSwxMSBMNi41LDExIEw2LjUsMTAuNSBMNiwxMC41IEw2LDEwIFonIGlkPSdQYXRoJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGNoZXZyb24gOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzEzcHgnIGhlaWdodD0nMjJweCcgdmlld0JveD0nMCAwIDEzIDIyJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5CYWNrIENoZXZyb248L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHQgICAgICAgIDxnIGlkPSdOYXZpZ2F0aW9uLUJhci9CYWNrJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtOC4wMDAwMDAsIC0zMS4wMDAwMDApJyBmaWxsPScjMDA3NkZGJz5cblx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNOC41LDQyIEwxOSwzMS41IEwyMSwzMy41IEwxMi41LDQyIEwyMSw1MC41IEwxOSw1Mi41IEw4LjUsNDIgWicgaWQ9J0JhY2stQ2hldnJvbic+PC9wYXRoPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0ZW1vamkgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDIwKX1weCcgdmlld0JveD0nMCAwIDIwIDIwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5FbW9qaTwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02MC4wMDAwMDAsIC0xODEuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J0JvdHRvbS1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxNzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNjYuNzUsMzAuNSBDNzIuMTM0Nzc2MywzMC41IDc2LjUsMjYuMTM0Nzc2MyA3Ni41LDIwLjc1IEM3Ni41LDE1LjM2NTIyMzcgNzIuMTM0Nzc2MywxMSA2Ni43NSwxMSBDNjEuMzY1MjIzNywxMSA1NywxNS4zNjUyMjM3IDU3LDIwLjc1IEM1NywyNi4xMzQ3NzYzIDYxLjM2NTIyMzcsMzAuNSA2Ni43NSwzMC41IFogTTY2Ljc1LDI5LjUgQzcxLjU4MjQ5MTYsMjkuNSA3NS41LDI1LjU4MjQ5MTYgNzUuNSwyMC43NSBDNzUuNSwxNS45MTc1MDg0IDcxLjU4MjQ5MTYsMTIgNjYuNzUsMTIgQzYxLjkxNzUwODQsMTIgNTgsMTUuOTE3NTA4NCA1OCwyMC43NSBDNTgsMjUuNTgyNDkxNiA2MS45MTc1MDg0LDI5LjUgNjYuNzUsMjkuNSBaIE02My43NSwxOSBDNjQuNDQwMzU1OSwxOSA2NSwxOC40NDAzNTU5IDY1LDE3Ljc1IEM2NSwxNy4wNTk2NDQxIDY0LjQ0MDM1NTksMTYuNSA2My43NSwxNi41IEM2My4wNTk2NDQxLDE2LjUgNjIuNSwxNy4wNTk2NDQxIDYyLjUsMTcuNzUgQzYyLjUsMTguNDQwMzU1OSA2My4wNTk2NDQxLDE5IDYzLjc1LDE5IFogTTY5Ljc1LDE5IEM3MC40NDAzNTU5LDE5IDcxLDE4LjQ0MDM1NTkgNzEsMTcuNzUgQzcxLDE3LjA1OTY0NDEgNzAuNDQwMzU1OSwxNi41IDY5Ljc1LDE2LjUgQzY5LjA1OTY0NDEsMTYuNSA2OC41LDE3LjA1OTY0NDEgNjguNSwxNy43NSBDNjguNSwxOC40NDAzNTU5IDY5LjA1OTY0NDEsMTkgNjkuNzUsMTkgWiBNNTkuODg3NjMzNCwyMi4xNjQxNDQ0IEM1OS42MzkwMzE2LDIxLjM4MzEzNCA2MC4wNjU5MTgsMjAuOTc4NTE1NiA2MC44NTMwOTUxLDIxLjIzMjkzMDQgQzYwLjg1MzA5NTEsMjEuMjMyOTMwNCA2My4wOTM3NTAzLDIyLjIxMjUgNjYuNzUwMDAwMSwyMi4yMTI1IEM3MC40MDYyNDk5LDIyLjIxMjUgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCBDNzMuNDI4NzE2MiwyMC45NjYyMTUzIDczLjg4MTI0NjMsMjEuNDA0NDA5NyA3My42MDU4NDc3LDIyLjE4MDc0MzcgQzczLjYwNTg0NzcsMjIuMTgwNzQzNyA3Mi42LDI3LjU3NSA2Ni43NSwyNy41NzUgQzYwLjksMjcuNTc1IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCA1OS44ODc2MzM0LDIyLjE2NDE0NDQgWiBNNjYuNzUsMjMuMTg3NSBDNjQuMDY4NzUsMjMuMTg3NSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgNjEuODU0NDA1NSwyMi40NzM3ODIxIEM2MS4zMjczMDE5LDIyLjMyOTQ4IDYxLjE3ODEyMzMsMjIuNTcyMTYxNSA2MS41NjM5NTU1LDIyLjk1NzA3NSBDNjEuNTYzOTU1NSwyMi45NTcwNzUgNjIuMzYyNSwyNC42NSA2Ni43NSwyNC42NSBDNzEuMTM3NSwyNC42NSA3MS45NTA4NTAzLDIyLjk0MzgzMDQgNzEuOTUwODUwMywyMi45NDM4MzA0IEM3Mi4zMDkzNjU5LDIyLjUzOTkyNzggNzIuMTY5MDc5MywyMi4zMzU5ODQ0IDcxLjYzNTQyNzMsMjIuNDc2MzQ5IEM3MS42MzU0MjczLDIyLjQ3NjM0OSA2OS40MzEyNSwyMy4xODc1IDY2Ljc1LDIzLjE4NzUgWicgaWQ9J0Vtb2ppJz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0ZGVsZXRlOiB7XG5cdFx0b24gOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0b2ZmIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWiBNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzguNzA5NzIsMjEuNzA5NzE5NSBDMzM4LjMxNzc1MiwyMS4zMTc3NTIyIDMzOC4zMTg5NjUsMjAuNjgxMDM0OSAzMzguNzA5NzIsMjAuMjkwMjgwNSBMMzQ0LjY0MzI0NSwxNC4zNTY3NTQ3IEMzNDQuODQwMjc2LDE0LjE1OTcyNDUgMzQ1LjIyNTYzOSwxNCAzNDUuNDkzNzQxLDE0IEwzNTUuOTk3MjM5LDE0IEMzNTcuMTAzMzMzLDE0IDM1Ny45OTk5OTksMTQuODk3MDYwMSAzNTcuOTk5OTk5LDE2LjAwNTg1ODYgTDM1Ny45OTk5OTksMjUuOTk0MTQxMiBDMzU3Ljk5OTk5OSwyNy4xMDE5NDY0IDM1Ny4xMDY0NTcsMjcuOTk5OTk5OSAzNTUuOTk3MjM5LDI3Ljk5OTk5OTkgTDM0NS40OTM3NDEsMjggQzM0NS4yMjEwNTYsMjggMzQ0Ljg0MDY0MywyNy44NDA2NDMxIDM0NC42NDMyNDYsMjcuNjQzMjQ1MyBMMzM4LjcwOTcyLDIxLjcwOTcxOTUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHR9XG5cdGZvb2QgOiAgXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+Rm9vZDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQ4LjAwMDAwMCwgLTYzNy4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGb29kJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyMjkuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSwxNS41IEwxLDE1LjUgTDAsNSBMNi41LDUgTDYuMjYzNjA5MzMsNy40ODIxMDIwMicgaWQ9J0RyaW5rJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNi4wMTA3NzU0NSwxLjk2OTMwMDk4IEw2LjUxNTcxMzUyLDUuMjIyNzA1MzkgTDUuNzE5MDgxODQsNS42Nzk0NzgxMiBMNS4wMzg5MDA5LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMS45NjkzMDA5OCBMNC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMS45NjkzMDA5OCBMNi4wMTA3NzU0NSwxLjk2OTMwMDk4IFonIGlkPSdTdHJhdycgZmlsbD0nIzRBNTQ2MScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNi44NTU1NzIsIDMuMzI0MzkwKSByb3RhdGUoMjQuMDAwMDAwKSB0cmFuc2xhdGUoLTYuODU1NTcyLCAtMy4zMjQzOTApICc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdCb3R0b20tQnVuJyBzdHJva2U9JyM0QTU0NjEnIHg9JzMnIHk9JzE0JyB3aWR0aD0nMTAuNScgaGVpZ2h0PScxLjUnIHJ4PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEuNSwxMi41MDI0NDA4IEMxLjUsMTEuOTQ4ODA4IDEuOTQ5MTY5MTYsMTEuNSAyLjQ5MjY4NzIzLDExLjUgTDE0LjAwNzMxMjgsMTEuNSBDMTQuNTU1NTU4OCwxMS41IDE1LDExLjk0Njk0OTkgMTUsMTIuNTAyNDQwOCBMMTUsMTIuOTk3NTU5MiBDMTUsMTMuNTUxMTkyIDE0LjU1MDgzMDgsMTQgMTQuMDA3MzEyOCwxNCBMMi40OTI2ODcyMywxNCBDMS45NDQ0NDEyMSwxNCAxLjUsMTMuNTUzMDUwMSAxLjUsMTIuOTk3NTU5MiBMMS41LDEyLjUwMjQ0MDggWiBNMy45MzMwMDAwMywxMS44MzkyNzI3IEMzLjQxNzcxODM0LDExLjY1MTg5NzYgMy40NDQ4MzY5NywxMS41IDMuOTk1NTc3NSwxMS41IEwxMy4wMDQ0MjI1LDExLjUgQzEzLjU1NDI2NDgsMTEuNSAxMy41ODY2MDYxLDExLjY1MDMyNTEgMTMuMDY3LDExLjgzOTI3MjcgTDguNSwxMy41IEwzLjkzMzAwMDAzLDExLjgzOTI3MjcgWicgaWQ9JyZxdW90O1BhdHR5JnF1b3Q7JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIuNSwxMC41IEwxMy41LDEwLjUgTDE1LDExLjUgTDEsMTEuNSBMMi41LDEwLjUgWicgaWQ9J0NoZWVzZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LjI1LDEwLjUgQzExLjQyNTYzNzMsMTAuNSAxNCwxMC4zMjg0MjcxIDE0LDkuNSBDMTQsOC42NzE1NzI4OCAxMS40MjU2MzczLDggOC4yNSw4IEM1LjA3NDM2MjY5LDggMi41LDguNjcxNTcyODggMi41LDkuNSBDMi41LDEwLjMyODQyNzEgNS4wNzQzNjI2OSwxMC41IDguMjUsMTAuNSBaJyBpZD0nVG9wLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzUnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZmxhZ3M6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTEpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNSl9cHgnIHZpZXdCb3g9JzAgMCAxMSAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkZsYWc8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI3NS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nRmxhZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjc1LjAwMDAwMCwgMjMxLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdQb2xlJyBmaWxsPScjNEE1NDYxJyB4PScwJyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxNCc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xLDEgQzEsMSAxLjI1LDIgMy41LDIgQzUuNzUsMiA2LDAuNzQ5OTk5OTk4IDgsMC43NSBDMTAsMC43NDk5OTk5OTggMTAsMS41IDEwLDEuNSBMMTAsNy41IEMxMCw3LjUgMTAsNi41IDgsNi41IEM2LDYuNSA0LjgwNjIzOTExLDggMy41LDggQzIuMTkzNzYwODksOCAxLDcgMSw3IEwxLDEgWicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGZyZXF1ZW50OiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5SZWNlbnQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU1LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdSZWNlbnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU1LjUwMDAwMCwgMjMwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J0JvZHknIHN0cm9rZT0nIzRBNTQ2MScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNy41LDcuNSBMNy41LDguNSBMOC41LDguNSBMOC41LDIgTDcuNSwyIEw3LjUsNy41IEw0LDcuNSBMNCw4LjUgTDguNSw4LjUgTDguNSw3LjUgTDcuNSw3LjUgWicgaWQ9J0hhbmRzJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGtleWJvYXJkIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgzMi41KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMjMuNSl9cHgnIHZpZXdCb3g9JzAgMCA2NSA0NycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlNoYXBlPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVBvcnRyYWl0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQzNi4wMDAwMDAsIC0xOTU2LjAwMDAwMCknIGZpbGw9JyMwMDAwMDAnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkLUxpZ2h0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMTQyMi4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQtZG93bicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQxMi4wMDAwMDAsIDUwMC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTg3LjAwMTMzMiwzNCBDODguMTA1MTY1OSwzNCA4OSwzNC44OTk3MTI3IDg5LDM1Ljk5MzI4NzQgTDg5LDYxLjAwNjcxMjYgQzg5LDYyLjEwNzU3NDggODguMTA1ODc1OSw2MyA4Ny4wMDEzMzIsNjMgTDI1Ljk5ODY2OCw2MyBDMjQuODk0ODM0MSw2MyAyNCw2Mi4xMDAyODczIDI0LDYxLjAwNjcxMjYgTDI0LDM1Ljk5MzI4NzQgQzI0LDM0Ljg5MjQyNTIgMjQuODk0MTI0MSwzNCAyNS45OTg2NjgsMzQgTDg3LjAwMTMzMiwzNCBaIE0yNiwzNiBMMjYsNjEgTDg3LDYxIEw4NywzNiBMMjYsMzYgWiBNNzksNDAgTDgzLDQwIEw4Myw0NCBMNzksNDQgTDc5LDQwIFogTTcyLDQwIEw3Niw0MCBMNzYsNDQgTDcyLDQ0IEw3Miw0MCBaIE02NSw0MCBMNjksNDAgTDY5LDQ0IEw2NSw0NCBMNjUsNDAgWiBNNTgsNDAgTDYyLDQwIEw2Miw0NCBMNTgsNDQgTDU4LDQwIFogTTUxLDQwIEw1NSw0MCBMNTUsNDQgTDUxLDQ0IEw1MSw0MCBaIE00NCw0MCBMNDgsNDAgTDQ4LDQ0IEw0NCw0NCBMNDQsNDAgWiBNMzcsNDAgTDQxLDQwIEw0MSw0NCBMMzcsNDQgTDM3LDQwIFogTTMwLDQwIEwzNCw0MCBMMzQsNDQgTDMwLDQ0IEwzMCw0MCBaIE03OSw0NyBMODMsNDcgTDgzLDUxIEw3OSw1MSBMNzksNDcgWiBNNzIsNDcgTDc2LDQ3IEw3Niw1MSBMNzIsNTEgTDcyLDQ3IFogTTY1LDQ3IEw2OSw0NyBMNjksNTEgTDY1LDUxIEw2NSw0NyBaIE01OCw0NyBMNjIsNDcgTDYyLDUxIEw1OCw1MSBMNTgsNDcgWiBNNTEsNDcgTDU1LDQ3IEw1NSw1MSBMNTEsNTEgTDUxLDQ3IFogTTQ0LDQ3IEw0OCw0NyBMNDgsNTEgTDQ0LDUxIEw0NCw0NyBaIE0zNyw0NyBMNDEsNDcgTDQxLDUxIEwzNyw1MSBMMzcsNDcgWiBNMzAsNDcgTDM0LDQ3IEwzNCw1MSBMMzAsNTEgTDMwLDQ3IFogTTc5LDU0IEw4Myw1NCBMODMsNTggTDc5LDU4IEw3OSw1NCBaIE03Miw1NCBMNzYsNTQgTDc2LDU4IEw3Miw1OCBMNzIsNTQgWiBNNDQsNTQgTDY5LDU0IEw2OSw1OCBMNDQsNTggTDQ0LDU0IFogTTM3LDU0IEw0MSw1NCBMNDEsNTggTDM3LDU4IEwzNyw1NCBaIE0zMCw1NCBMMzQsNTQgTDM0LDU4IEwzMCw1OCBMMzAsNTQgWiBNNDQuMzE2MzQ5OCw2OS45NzcxMDQ3IEM0My4zNjg0MjI1LDcwLjU0MjAzNDIgNDMuMzMzODcyMSw3MS41MDk2NDk1IDQ0LjIzNzgyMTcsNzIuMTM3MzkxMiBMNTUuMzYyMTUzOSw3OS44NjI2MDg4IEM1Ni4yNjY3MTEzLDgwLjQ5MDc3MjYgNTcuNzMzODk2NSw4MC40OTAzNTA1IDU4LjYzNzg0NjEsNzkuODYyNjA4OCBMNjkuNzYyMTc4Myw3Mi4xMzczOTEyIEM3MC42NjY3MzU3LDcxLjUwOTIyNzQgNzAuNjQ4MDEyLDcwLjUyMDUyMDQgNjkuNzExNTE4Nyw2OS45MjM0MTY2IEw2OS45ODI1NzMxLDcwLjA5NjIzOTYgQzY5LjUxODEzMzMsNjkuODAwMTE1IDY4Ljc3ODI1NTcsNjkuODEyNjQ5MyA2OC4zMjYxMzA3LDcwLjEyNjkzMjMgTDU3LjgxNTQ5OTksNzcuNDMzMTI2MyBDNTcuMzY1MTExNyw3Ny43NDYyMDIgNTYuNjI4MTY1LDc3LjczODE3ODYgNTYuMTc2MjEwMyw3Ny40MTk5NDI0IEw0NS44Mzg2MTM3LDcwLjE0MDg5NzcgQzQ1LjM4MzY0NzIsNjkuODIwNTQwNyA0NC42Mzc1MDM5LDY5Ljc4NTcwODggNDQuMTU2NjM5Myw3MC4wNzIyODYyIEw0NC4zMTYzNDk4LDY5Ljk3NzEwNDcgWicgaWQ9J1NoYXBlJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0b2JqZWN0cyA6IFxuXHRcdFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxMSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDExIDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+TGlnaHRidWxiPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQ0LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0xpZ2h0YnVsYicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQ0LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNOCwxMC40MDAyOTA0IEM5Ljc4MDgzNzk1LDkuNDg5OTM0OTEgMTEsNy42MzczNDI3MyAxMSw1LjUgQzExLDIuNDYyNDMzODggOC41Mzc1NjYxMiwwIDUuNSwwIEMyLjQ2MjQzMzg4LDAgMCwyLjQ2MjQzMzg4IDAsNS41IEMwLDcuNjM3MzQyNzMgMS4yMTkxNjIwNSw5LjQ4OTkzNDkxIDMsMTAuNDAwMjkwNCBMMywxNC4wMDIwODY5IEMzLDE1LjEwMTczOTQgMy44OTc2MTYwMiwxNiA1LjAwNDg4MTUsMTYgTDUuOTk1MTE4NSwxNiBDNy4xMDYxMDAyLDE2IDgsMTUuMTA1NTAzOCA4LDE0LjAwMjA4NjkgTDgsMTAuNDAwMjkwNCBaJyBpZD0nT3ZhbC0xNycgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSczJyB5PScxMicgd2lkdGg9JzUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSc0JyB5PScxMy41JyB3aWR0aD0nMS41JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsOC41IEM1LDguNSAzLjQ5OTk5OTk5LDcuNTAwMDAwMDEgNCw3IEM0LjUwMDAwMDAxLDYuNDk5OTk5OTkgNSw3LjY2NjY2NjY3IDUuNSw4IEM1LjUsOCA2LjUsNi41MDAwMDAwMSA3LDcgQzcuNSw3LjQ5OTk5OTk5IDYsOC41IDYsOC41IEw2LDExIEw1LDExIEw1LDguNSBaJyBpZD0nUmVjdGFuZ2xlLTUyJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRzaGlmdCA6IHtcblx0XHRvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDIwIDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIxLjcwNTIzODgsMTMuMjA1MjM4OCBDMjEuMzE1NzQ2MiwxMi44MTU3NDYyIDIwLjY4NTc1NTksMTIuODE0MjQ0MSAyMC4yOTQ3NjEyLDEzLjIwNTIzODggTDExLjkxNjA3NjcsMjEuNTgzOTIzMyBDMTEuMTMzOTk5MSwyMi4zNjYwMDA5IDExLjM5ODI2MDYsMjMgMTIuNDk3OTEzMSwyMyBMMTYuNSwyMyBMMTYuNSwyOC4wMDkyMjIgQzE2LjUsMjguNTU2NDEzNiAxNi45NDYzMTE0LDI5IDE3LjQ5NzU0NDYsMjkgTDI0LjUwMjQ1NTQsMjkgQzI1LjA1MzM4NCwyOSAyNS41LDI4LjU0OTAyNDggMjUuNSwyOC4wMDkyMjIgTDI1LjUsMjMgTDI5LjUwMjA4NjksMjMgQzMwLjYwNTUwMzgsMjMgMzAuODY2ODI0LDIyLjM2NjgyNCAzMC4wODM5MjMzLDIxLjU4MzkyMzMgTDIxLjcwNTIzODgsMTMuMjA1MjM4OCBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDIwIDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMjkuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yMS42NzE5MDA4LDEyLjIzMjU4OTggQzIxLjMwMTAzMiwxMS44Mjc5OTE2IDIwLjY5NDY4OTIsMTEuODMzNDczMSAyMC4zMjg4MTk1LDEyLjIzMjU4OTggTDExLjY5NDcwMjMsMjEuNjUxMjk4MyBDMTAuNzU4NzQ0MSwyMi42NzIzMDggMTEuMTI4NTU0MSwyMy41IDEyLjUwOTc3NTEsMjMuNSBMMTUuOTk5OTk5OSwyMy41MDAwMDAyIEwxNS45OTk5OTk5LDI4LjAwMTQyNDEgQzE1Ljk5OTk5OTksMjguODI5MDY0OCAxNi42NzE2NTU5LDI5LjUwMDAwMDEgMTcuNDk3MTAxLDI5LjUwMDAwMDEgTDI0LjUwMjg5OTIsMjkuNTAwMDAwMSBDMjUuMzI5NzI1MywyOS41MDAwMDAxIDI2LjAwMDAwMDMsMjguODM0OTcwMyAyNi4wMDAwMDAzLDI4LjAwMTQyNDEgTDI2LjAwMDAwMDMsMjMuNTAwMDAwMSBMMjkuNDkwMjI1MSwyMy41MDAwMDAyIEMzMC44NzYzMzU3LDIzLjUwMDAwMDIgMzEuMjQzOTUyMSwyMi42NzUxOTE2IDMwLjMwNTQxNjEsMjEuNjUxMjk4NSBMMjEuNjcxOTAwOCwxMi4yMzI1ODk4IFogTTIxLjM0MTc0OCwxNC4zNjQ1MzE2IEMyMS4xNTMwMDU2LDE0LjE2MzIwNjQgMjAuODQzMzUxNSwxNC4xNjcwOTE0IDIwLjY1ODI1MTQsMTQuMzY0NTMxNiBMMTMuNSwyMS45OTk5OTk4IEwxNy41MDAwMDAxLDIxLjk5OTk5OTkgTDE3LjUwMDAwMDIsMjcuNTA4OTk1NiBDMTcuNTAwMDAwMiwyNy43ODAxNzAzIDE3LjczMjkwMjcsMjguMDAwMDAwOCAxOC4wMDM0MjI5LDI4LjAwMDAwMDggTDIzLjk5NjU3NywyOC4wMDAwMDA4IEMyNC4yNzQ2MDk3LDI4LjAwMDAwMDggMjQuNDk5OTk5NywyNy43NzIxMjAzIDI0LjQ5OTk5OTcsMjcuNTA4OTk1NiBMMjQuNDk5OTk5NywyMS45OTk5OTk5IEwyOC41LDIxLjk5OTk5OTkgTDIxLjM0MTc0OCwxNC4zNjQ1MzE2IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0c21pbGV5czogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+OkQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTg2LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSc6RCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoODcuMDAwMDAwLCAyMzAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nSGVhZCcgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzg5NDczNjg0JyBjeD0nNy41JyBjeT0nNy41JyByPSc3LjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjUsMTMuNTI2MzE1OCBDMTAuMjY4NjkwNywxMy41MjYzMTU4IDEyLjUxMzE1NzksMTAuMzY4NDIxMiAxMi41MTMxNTc5LDkuMTg0MjEwNDUgQzEyLjUxMzE1NzksNy42MDUyNjMxNyAxMS40Mzg5MDk4LDkuMTg0MjEwNDMgNy41LDkuMTg0MjEwNTMgQzMuNTYxMDkwMjMsOS4xODQyMTA2MiAyLjQ4Njg0MjExLDcuNjA1MjYzMTcgMi40ODY4NDIxMSw5LjE4NDIxMDQ1IEMyLjQ4Njg0MjExLDEwLjM2ODQyMSA0LjczMTMwOTM1LDEzLjUyNjMxNTggNy41LDEzLjUyNjMxNTggWiBNNy41LDEwLjk2MDUyNjMgQzguOTMyMzMwODMsMTEuMTU3ODk0NyAxMS43OTY5OTI1LDEwLjM2ODQyMSAxMS43OTY5OTI1LDkuNDQ0MjM1NTIgQzExLjc5Njk5MjUsOC43ODk0NzM2OCAxMC44NzYyMDg0LDkuNTc4OTQ3MjcgNy41LDkuNzc2MzE1NzkgQzQuMTIzNzkxNjIsOS41Nzg5NDc0MyAzLjIwMzAwODcyLDguNzg5NDczNjkgMy4yMDMwMDc1Miw5LjQ0NDIzNTUyIEMzLjIwMzAwNTgyLDEwLjM2ODQyMSA2LjA2NzY2OTE3LDExLjE1Nzg5NDcgNy41LDEwLjk2MDUyNjMgWicgaWQ9J1NtaWxlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuMjM2ODQyMTEsNi4zMjM2NTk4IEM1LjY0Mzc4ODc2LDYuMzIzNjU5OCA1Ljk3MzY4NDIxLDUuODgxODM1NTQgNS45NzM2ODQyMSw1LjMzNjgxNzY5IEM1Ljk3MzY4NDIxLDQuNzkxNzk5ODUgNS42NDM3ODg3Niw0LjM0OTk3NTU5IDUuMjM2ODQyMTEsNC4zNDk5NzU1OSBDNC44Mjk4OTU0NSw0LjM0OTk3NTU5IDQuNSw0Ljc5MTc5OTg1IDQuNSw1LjMzNjgxNzY5IEM0LjUsNS44ODE4MzU1NCA0LjgyOTg5NTQ1LDYuMzIzNjU5OCA1LjIzNjg0MjExLDYuMzIzNjU5OCBaIE05LjczNjg0MjExLDYuMzIzNjU5OCBDMTAuMTQzNzg4OCw2LjMyMzY1OTggMTAuNDczNjg0Miw1Ljg4MTgzNTU0IDEwLjQ3MzY4NDIsNS4zMzY4MTc2OSBDMTAuNDczNjg0Miw0Ljc5MTc5OTg1IDEwLjE0Mzc4ODgsNC4zNDk5NzU1OSA5LjczNjg0MjExLDQuMzQ5OTc1NTkgQzkuMzI5ODk1NDUsNC4zNDk5NzU1OSA5LDQuNzkxNzk5ODUgOSw1LjMzNjgxNzY5IEM5LDUuODgxODM1NTQgOS4zMjk4OTU0NSw2LjMyMzY1OTggOS43MzY4NDIxMSw2LjMyMzY1OTggWicgaWQ9J0V5ZXMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblxuXHRzeW1ib2xzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE2KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTcpfXB4JyB2aWV3Qm94PScwIDAgMTUgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5PYmplY3RzICZhbXA7IFN5bWJvbHM8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMwNC4wMDAwMDAsIC02MzguMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nT2JqZWN0cy0mYW1wOy1TeW1ib2xzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMDQuMDAwMDAwLCAyMzAuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdFx0PGcgaWQ9J1RoaW5nJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMCcgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScyJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMTEnIHg9JzMnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzQnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjc1LDAuMTU5MjYzOTc4IEwxMS43NSwwIEwxMSwwIEwxMSw1LjA5MTQ5MyBDMTAuNTkzNDQsNC45NDIyMTM5MiAxMC4wNjM5NjYyLDQuOTY0NTMyMjQgOS41NTcxNTM5OSw1LjE5MDE3OTU3IEM4LjY5ODQ5MjkzLDUuNTcyNDgwMSA4LjIzMDAzODM1LDYuMzkzNjU2MjEgOC41MTA4MzE0MSw3LjAyNDMyNzc0IEM4Ljc5MTYyNDQ3LDcuNjU0OTk5MjggOS43MTUzMzQ1NCw3Ljg1NjM0Mzc1IDEwLjU3Mzk5NTYsNy40NzQwNDMyMSBDMTEuMjc2MTE4Myw3LjE2MTQzODAzIDExLjcxNzMzOTMsNi41NTUzODk3MiAxMS43MDEzNTk1LDYgTDExLjc1LDYgTDExLjc1LDEuMzkzODUwNTYgQzEyLjMxNzU5MDgsMS41OTU5MDAzNyAxMywyLjA4MTc0NTYgMTMsMy4yNSBDMTMsNC4yNSAxMi43NSw1LjUgMTIuNzUsNS41IEMxMi43NSw1LjUgMTMuNzUsNC43NSAxMy43NSwyLjUgQzEzLjc1LDEuMDIyNTYxMDEgMTIuNTY0MjY3NCwwLjQwNzQ3MzAxOSAxMS43NSwwLjE1OTI2Mzk3OCBaJyBpZD0nTm90ZScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGlkPScmYW1wOycgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRzcGFuIHg9JzAuMjUnIHk9JzE2Jz4mYW1wOzwvdHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGlkPSclJyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHNwYW4geD0nNy43NScgeT0nMTYnPiU8L3RzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0dHJhdmVsOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5UcmFuc3BvcnQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0MS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVHJhbnNwb3J0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDEuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsNiBMMSw2IEwxLDE1IEwwLDE1IEwwLDYgWiBNMTUsNCBMMTYsNCBMMTYsMTUgTDE1LDE1IEwxNSw0IFogTTMuNSwwIEw0LjUsMCBMNC41LDcgTDMuNSw3IEwzLjUsMCBaIE0xLDYgTDMuNSw2IEwzLjUsNyBMMSw3IEwxLDYgWiBNNC41LDAgTDkuNSwwIEw5LjUsMSBMNC41LDEgTDQuNSwwIFogTTkuNSwwIEwxMC41LDAgTDEwLjUsNiBMOS41LDYgTDkuNSwwIFogTTEwLjUsNCBMMTUsNCBMMTUsNSBMMTAuNSw1IEwxMC41LDQgWicgaWQ9J1NreWxpbmUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nV2luZG93cycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScwJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc0JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBpZD0nQ2FyJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjUwMDAwMCwgNi41MDAwMDApJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LjUsOCBMMi41LDggTDIuNSw5LjUgTDAuNSw5LjUgTDAuNSw3Ljg2ODExNDUgQzAuMjAxMjAyMTkyLDcuNjk1ODI3MDIgMCw3LjM3MDkxMzYzIDAsNi45OTA2MzExIEwwLDUuMDA5MzY4OSBDMCw0LjQ1MTkwOTg1IDAuNDQ0ODM2OTc0LDQgMC45OTU1Nzc0OTksNCBMMTAuMDA0NDIyNSw0IEMxMC41NTQyNjQ4LDQgMTEsNC40NDMzNTMxOCAxMSw1LjAwOTM2ODkgTDExLDYuOTkwNjMxMSBDMTEsNy4zNjUzMzE1IDEwLjc5OTAyNDQsNy42OTIzNDUxOSAxMC41LDcuODY2NDkwMDIgTDEwLjUsOS41IEw4LjUsOS41IEw4LjUsOCBaIE0xLjc1LDYuNSBDMi4xNjQyMTM1Niw2LjUgMi41LDYuMTY0MjEzNTYgMi41LDUuNzUgQzIuNSw1LjMzNTc4NjQ0IDIuMTY0MjEzNTYsNSAxLjc1LDUgQzEuMzM1Nzg2NDQsNSAxLDUuMzM1Nzg2NDQgMSw1Ljc1IEMxLDYuMTY0MjEzNTYgMS4zMzU3ODY0NCw2LjUgMS43NSw2LjUgWiBNOS4yNSw2LjUgQzkuNjY0MjEzNTYsNi41IDEwLDYuMTY0MjEzNTYgMTAsNS43NSBDMTAsNS4zMzU3ODY0NCA5LjY2NDIxMzU2LDUgOS4yNSw1IEM4LjgzNTc4NjQ0LDUgOC41LDUuMzM1Nzg2NDQgOC41LDUuNzUgQzguNSw2LjE2NDIxMzU2IDguODM1Nzg2NDQsNi41IDkuMjUsNi41IFogTTAuNSw3IEwxMC41LDcgTDEwLjUsNy41IEwwLjUsNy41IEwwLjUsNyBaIE0zLDYuNSBMOCw2LjUgTDgsNyBMMyw3IEwzLDYuNSBaJyBpZD0nQm9keScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEuNSw0LjUgTDEuNSwzIEMxLjUsMS4zNDMxNDU3NSAyLjgzOTAyMDEzLDAgNC41MDE2NjU0NywwIEw2LjQ5ODMzNDUzLDAgQzguMTU2MTA4NTksMCA5LjUsMS4zNDY1MTcxMiA5LjUsMyBMOS41LDUnIGlkPSdSb29mJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwifVxuXG5iYW5uZXJCRyA9IHtcblx0XCJpcGhvbmUtNVwiOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzMyMHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzMjAgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPmlwaG9uZTU8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTUvNVMvNUMnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDMyMCwwIEwzMjAsNjggTDAsNjggTDAsMCBaIE0xNDIsNjEuMDA0ODgxNSBDMTQyLDU5Ljg5NzYxNiAxNDIuODk2Mjc5LDU5IDE0NC4wMDI0LDU5IEwxNzYuOTk3Niw1OSBDMTc4LjEwMzQ5NSw1OSAxNzksNTkuODkzODk5OCAxNzksNjEuMDA0ODgxNSBMMTc5LDYxLjk5NTExODUgQzE3OSw2My4xMDIzODQgMTc4LjEwMzcyMSw2NCAxNzYuOTk3Niw2NCBMMTQ0LjAwMjQsNjQgQzE0Mi44OTY1MDUsNjQgMTQyLDYzLjEwNjEwMDIgMTQyLDYxLjk5NTExODUgTDE0Miw2MS4wMDQ4ODE1IFonIGlkPSdpcGhvbmU1Jz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRcImlwaG9uZS02c1wiOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMzc1cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDM3NSA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjMuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OC4wMDAwMDAsIDcuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwxNiBMMzc1LDE2IEwzNzUsODQgTDAsODQgTDAsMTYgWiBNMTY5LDc3LjAwNDg4MTUgQzE2OSw3NS44OTc2MTYgMTY5Ljg5NjI3OSw3NSAxNzEuMDAyNCw3NSBMMjAzLjk5NzYsNzUgQzIwNS4xMDM0OTUsNzUgMjA2LDc1Ljg5Mzg5OTggMjA2LDc3LjAwNDg4MTUgTDIwNiw3Ny45OTUxMTg1IEMyMDYsNzkuMTAyMzg0IDIwNS4xMDM3MjEsODAgMjAzLjk5NzYsODAgTDE3MS4wMDI0LDgwIEMxNjkuODk2NTA1LDgwIDE2OSw3OS4xMDYxMDAyIDE2OSw3Ny45OTUxMTg1IEwxNjksNzcuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzQxNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA0MTQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kIENvcHk8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNDMuMDAwMDAwLCAtNzQuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNDMuMDAwMDAwLCA3NC4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMNDE0LDAgTDQxNCw2OCBMMCw2OCBMMCwwIFogTTE4OSw2MS4wMDQ4ODE1IEMxODksNTkuODk3NjE2IDE4OS44OTYyNzksNTkgMTkxLjAwMjQsNTkgTDIyMy45OTc2LDU5IEMyMjUuMTAzNDk1LDU5IDIyNiw1OS44OTM4OTk4IDIyNiw2MS4wMDQ4ODE1IEwyMjYsNjEuOTk1MTE4NSBDMjI2LDYzLjEwMjM4NCAyMjUuMTAzNzIxLDY0IDIyMy45OTc2LDY0IEwxOTEuMDAyNCw2NCBDMTg5Ljg5NjUwNSw2NCAxODksNjMuMTA2MTAwMiAxODksNjEuOTk1MTE4NSBMMTg5LDYxLjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLUNvcHknPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRcImlwYWRcIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPSc3NjhweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgNzY4IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+aXBhZC1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUG9ydHJhaXQnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMNzY4LDAgTDc2OCw2OCBMMCw2OCBMMCwwIFogTTM2Niw2MS4wMDQ4ODE1IEMzNjYsNTkuODk3NjE2IDM2Ni44OTYyNzksNTkgMzY4LjAwMjQsNTkgTDQwMC45OTc2LDU5IEM0MDIuMTAzNDk1LDU5IDQwMyw1OS44OTM4OTk4IDQwMyw2MS4wMDQ4ODE1IEw0MDMsNjEuOTk1MTE4NSBDNDAzLDYzLjEwMjM4NCA0MDIuMTAzNzIxLDY0IDQwMC45OTc2LDY0IEwzNjguMDAyNCw2NCBDMzY2Ljg5NjUwNSw2NCAzNjYsNjMuMTA2MTAwMiAzNjYsNjEuOTk1MTE4NSBMMzY2LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcG9ydHJhaXQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFwiaXBhZC1wcm9cIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxMDI0cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDEwMjQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5pcGFkLXByby1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUHJvLVBvcnRyYWl0JyBmaWxsPScjMUExQTFDJz5cblx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDEwMjQsMCBMMTAyNCw2OCBMMCw2OCBMMCwwIFogTTQ5NCw2MS4wMDQ4ODE1IEM0OTQsNTkuODk3NjE2IDQ5NC44OTYyNzksNTkgNDk2LjAwMjQsNTkgTDUyOC45OTc2LDU5IEM1MzAuMTAzNDk1LDU5IDUzMSw1OS44OTM4OTk4IDUzMSw2MS4wMDQ4ODE1IEw1MzEsNjEuOTk1MTE4NSBDNTMxLDYzLjEwMjM4NCA1MzAuMTAzNzIxLDY0IDUyOC45OTc2LDY0IEw0OTYuMDAyNCw2NCBDNDk0Ljg5NjUwNSw2NCA0OTQsNjMuMTA2MTAwMiA0OTQsNjEuOTk1MTE4NSBMNDk0LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcHJvLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHR9XG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
