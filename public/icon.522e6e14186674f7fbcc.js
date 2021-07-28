"use strict";
(self["webpackChunknaruhiyo_github_io"] = self["webpackChunknaruhiyo_github_io"] || []).push([[896],{

/***/ 2416:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.StyledIcon = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _styledComponents = _interopRequireWildcard(__webpack_require__(4038));

var _grommetStyles = __webpack_require__(8296);

var _defaultProps = __webpack_require__(3508);

var _excluded = ["a11yTitle", "color", "size", "theme"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var colorCss = (0, _styledComponents.css)(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill=\"none\"]{stroke-width:0;}}*[stroke*=\"#\"],*[STROKE*=\"#\"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*=\"#\"],*[FILL*=\"#\"]{fill:inherit;stroke:none;}"], function (props) {
  return (0, _grommetStyles.colorStyle)('fill', props.color || props.theme.global.colors.icon, props.theme);
}, function (props) {
  return (0, _grommetStyles.colorStyle)('stroke', props.color || props.theme.global.colors.icon, props.theme);
});

var IconInner = function IconInner(_ref) {
  var a11yTitle = _ref.a11yTitle,
      color = _ref.color,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    "aria-label": a11yTitle
  }, rest));
};

IconInner.displayName = 'Icon';

var parseMetricToNum = function parseMetricToNum(string) {
  return parseFloat(string.match(/\d+(\.\d+)?/), 10);
};

var StyledIcon = (0, _styledComponents["default"])(IconInner).withConfig({
  displayName: "StyledIcon",
  componentId: "ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", ""], function (_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'medium' : _ref2$size,
      theme = _ref2.theme,
      viewBox = _ref2.viewBox;

  var _split = (viewBox || '0 0 24 24').split(' '),
      w = _split[2],
      h = _split[3];

  var scale = w / h;
  var dimension = parseMetricToNum(theme.icon.size[size] || size);

  if (w < h) {
    return "\n      width: " + dimension + "px;\n      height: " + dimension / scale + "px;\n    ";
  }

  if (h < w) {
    return "\n      width: " + dimension * scale + "px;\n      height: " + dimension + "px;\n    ";
  }

  return "\n      width: " + dimension + "px;\n      height: " + dimension + "px;\n    ";
}, function (_ref3) {
  var color = _ref3.color;
  return color !== 'plain' && colorCss;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme && theme.icon.extend;
});
exports.StyledIcon = StyledIcon;
StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, _defaultProps.defaultProps);

/***/ }),

/***/ 3508:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.extendDefaultTheme = exports.defaultProps = void 0;

var _utils = __webpack_require__(9457);

var _themes = __webpack_require__(7581);

var defaultProps = {
  theme: _themes.base
};
exports.defaultProps = defaultProps;

var extendDefaultTheme = function extendDefaultTheme(theme) {
  defaultProps.theme = (0, _utils.deepMerge)(_themes.base, theme);
};

exports.extendDefaultTheme = extendDefaultTheme;

/***/ }),

/***/ 8511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Accessibility": () => (/* reexport */ Accessibility),
  "Achievement": () => (/* reexport */ Achievement),
  "Action": () => (/* reexport */ Action),
  "Actions": () => (/* reexport */ Actions),
  "Ad": () => (/* reexport */ Ad),
  "Add": () => (/* reexport */ Add),
  "AddCircle": () => (/* reexport */ AddCircle),
  "Aed": () => (/* reexport */ Aed),
  "Aggregate": () => (/* reexport */ Aggregate),
  "Aid": () => (/* reexport */ Aid),
  "AidOption": () => (/* reexport */ AidOption),
  "Alarm": () => (/* reexport */ Alarm),
  "Alert": () => (/* reexport */ Alert),
  "Amazon": () => (/* reexport */ Amazon),
  "Amex": () => (/* reexport */ Amex),
  "Analytics": () => (/* reexport */ Analytics),
  "Anchor": () => (/* reexport */ Anchor),
  "Android": () => (/* reexport */ Android),
  "Announce": () => (/* reexport */ Announce),
  "Apple": () => (/* reexport */ Apple),
  "AppleAppStore": () => (/* reexport */ AppleAppStore),
  "Apps": () => (/* reexport */ Apps),
  "AppsRounded": () => (/* reexport */ AppsRounded),
  "Archive": () => (/* reexport */ Archive),
  "Archlinux": () => (/* reexport */ Archlinux),
  "Article": () => (/* reexport */ Article),
  "Aruba": () => (/* reexport */ Aruba),
  "Ascend": () => (/* reexport */ Ascend),
  "Ascending": () => (/* reexport */ Ascending),
  "AssistListening": () => (/* reexport */ AssistListening),
  "Atm": () => (/* reexport */ Atm),
  "Attachment": () => (/* reexport */ Attachment),
  "Attraction": () => (/* reexport */ Attraction),
  "Baby": () => (/* reexport */ Baby),
  "BackTen": () => (/* reexport */ BackTen),
  "Bar": () => (/* reexport */ Bar),
  "BarChart": () => (/* reexport */ BarChart),
  "Basket": () => (/* reexport */ Basket),
  "Beacon": () => (/* reexport */ Beacon),
  "Bike": () => (/* reexport */ Bike),
  "Bitcoin": () => (/* reexport */ Bitcoin),
  "BladesHorizontal": () => (/* reexport */ BladesHorizontal),
  "BladesVertical": () => (/* reexport */ BladesVertical),
  "Blank": () => (/* reexport */ Blank),
  "BlockQuote": () => (/* reexport */ BlockQuote),
  "Blog": () => (/* reexport */ Blog),
  "Bluetooth": () => (/* reexport */ Bluetooth),
  "Bold": () => (/* reexport */ Bold),
  "Book": () => (/* reexport */ Book),
  "Bookmark": () => (/* reexport */ Bookmark),
  "BottomCorner": () => (/* reexport */ BottomCorner),
  "Braille": () => (/* reexport */ Braille),
  "Briefcase": () => (/* reexport */ Briefcase),
  "Brush": () => (/* reexport */ Brush),
  "Bug": () => (/* reexport */ Bug),
  "Bundle": () => (/* reexport */ Bundle),
  "Bus": () => (/* reexport */ Bus),
  "BusinessService": () => (/* reexport */ BusinessService),
  "Cafeteria": () => (/* reexport */ Cafeteria),
  "Calculator": () => (/* reexport */ Calculator),
  "Calendar": () => (/* reexport */ Calendar),
  "Camera": () => (/* reexport */ Camera),
  "Capacity": () => (/* reexport */ Capacity),
  "Car": () => (/* reexport */ Car),
  "CaretDown": () => (/* reexport */ CaretDown),
  "CaretDownFill": () => (/* reexport */ CaretDownFill),
  "CaretLeftFill": () => (/* reexport */ CaretLeftFill),
  "CaretNext": () => (/* reexport */ CaretNext),
  "CaretPrevious": () => (/* reexport */ CaretPrevious),
  "CaretRightFill": () => (/* reexport */ CaretRightFill),
  "CaretUp": () => (/* reexport */ CaretUp),
  "CaretUpFill": () => (/* reexport */ CaretUpFill),
  "Cart": () => (/* reexport */ Cart),
  "Catalog": () => (/* reexport */ Catalog),
  "CatalogOption": () => (/* reexport */ CatalogOption),
  "Centos": () => (/* reexport */ Centos),
  "Certificate": () => (/* reexport */ Certificate),
  "Channel": () => (/* reexport */ Channel),
  "ChapterAdd": () => (/* reexport */ ChapterAdd),
  "ChapterNext": () => (/* reexport */ ChapterNext),
  "ChapterPrevious": () => (/* reexport */ ChapterPrevious),
  "Chat": () => (/* reexport */ Chat),
  "ChatOption": () => (/* reexport */ ChatOption),
  "Checkbox": () => (/* reexport */ Checkbox),
  "CheckboxSelected": () => (/* reexport */ CheckboxSelected),
  "Checkmark": () => (/* reexport */ Checkmark),
  "Chrome": () => (/* reexport */ Chrome),
  "CircleAlert": () => (/* reexport */ CircleAlert),
  "CircleInformation": () => (/* reexport */ CircleInformation),
  "CirclePlay": () => (/* reexport */ CirclePlay),
  "CircleQuestion": () => (/* reexport */ CircleQuestion),
  "Clear": () => (/* reexport */ Clear),
  "ClearOption": () => (/* reexport */ ClearOption),
  "Cli": () => (/* reexport */ Cli),
  "Clipboard": () => (/* reexport */ Clipboard),
  "Clock": () => (/* reexport */ Clock),
  "Clone": () => (/* reexport */ Clone),
  "Close": () => (/* reexport */ Close),
  "ClosedCaption": () => (/* reexport */ ClosedCaption),
  "Cloud": () => (/* reexport */ Cloud),
  "CloudComputer": () => (/* reexport */ CloudComputer),
  "CloudDownload": () => (/* reexport */ CloudDownload),
  "CloudSoftware": () => (/* reexport */ CloudSoftware),
  "CloudUpload": () => (/* reexport */ CloudUpload),
  "Cloudlinux": () => (/* reexport */ Cloudlinux),
  "Cluster": () => (/* reexport */ Cluster),
  "CoatCheck": () => (/* reexport */ CoatCheck),
  "Code": () => (/* reexport */ Code),
  "CodeSandbox": () => (/* reexport */ CodeSandbox),
  "Codepen": () => (/* reexport */ Codepen),
  "Coffee": () => (/* reexport */ Coffee),
  "Columns": () => (/* reexport */ Columns),
  "Command": () => (/* reexport */ Command),
  "Compare": () => (/* reexport */ Compare),
  "Compass": () => (/* reexport */ Compass),
  "Compliance": () => (/* reexport */ Compliance),
  "Configure": () => (/* reexport */ Configure),
  "Connect": () => (/* reexport */ Connect),
  "Connectivity": () => (/* reexport */ Connectivity),
  "Console": () => (/* reexport */ Console),
  "Contact": () => (/* reexport */ Contact),
  "ContactInfo": () => (/* reexport */ ContactInfo),
  "Contract": () => (/* reexport */ Contract),
  "Copy": () => (/* reexport */ Copy),
  "Cpu": () => (/* reexport */ Cpu),
  "CreativeCommons": () => (/* reexport */ CreativeCommons),
  "CreditCard": () => (/* reexport */ CreditCard),
  "Css3": () => (/* reexport */ Css3),
  "Cube": () => (/* reexport */ Cube),
  "Cubes": () => (/* reexport */ Cubes),
  "Currency": () => (/* reexport */ Currency),
  "Cursor": () => (/* reexport */ Cursor),
  "Cut": () => (/* reexport */ Cut),
  "Cycle": () => (/* reexport */ Cycle),
  "Dashboard": () => (/* reexport */ Dashboard),
  "Database": () => (/* reexport */ Database),
  "Debian": () => (/* reexport */ Debian),
  "Deliver": () => (/* reexport */ Deliver),
  "Deploy": () => (/* reexport */ Deploy),
  "Descend": () => (/* reexport */ Descend),
  "Descending": () => (/* reexport */ Descending),
  "Desktop": () => (/* reexport */ Desktop),
  "Detach": () => (/* reexport */ Detach),
  "Device": () => (/* reexport */ Device),
  "Diamond": () => (/* reexport */ Diamond),
  "Directions": () => (/* reexport */ Directions),
  "DisabledOutline": () => (/* reexport */ DisabledOutline),
  "Disc": () => (/* reexport */ Disc),
  "Dislike": () => (/* reexport */ Dislike),
  "Docker": () => (/* reexport */ Docker),
  "Document": () => (/* reexport */ Document),
  "DocumentCloud": () => (/* reexport */ DocumentCloud),
  "DocumentConfig": () => (/* reexport */ DocumentConfig),
  "DocumentCsv": () => (/* reexport */ DocumentCsv),
  "DocumentDownload": () => (/* reexport */ DocumentDownload),
  "DocumentExcel": () => (/* reexport */ DocumentExcel),
  "DocumentImage": () => (/* reexport */ DocumentImage),
  "DocumentLocked": () => (/* reexport */ DocumentLocked),
  "DocumentMissing": () => (/* reexport */ DocumentMissing),
  "DocumentNotes": () => (/* reexport */ DocumentNotes),
  "DocumentOutlook": () => (/* reexport */ DocumentOutlook),
  "DocumentPdf": () => (/* reexport */ DocumentPdf),
  "DocumentPerformance": () => (/* reexport */ DocumentPerformance),
  "DocumentPpt": () => (/* reexport */ DocumentPpt),
  "DocumentRtf": () => (/* reexport */ DocumentRtf),
  "DocumentSound": () => (/* reexport */ DocumentSound),
  "DocumentStore": () => (/* reexport */ DocumentStore),
  "DocumentTest": () => (/* reexport */ DocumentTest),
  "DocumentText": () => (/* reexport */ DocumentText),
  "DocumentThreat": () => (/* reexport */ DocumentThreat),
  "DocumentTime": () => (/* reexport */ DocumentTime),
  "DocumentTransfer": () => (/* reexport */ DocumentTransfer),
  "DocumentTxt": () => (/* reexport */ DocumentTxt),
  "DocumentUpdate": () => (/* reexport */ DocumentUpdate),
  "DocumentUpload": () => (/* reexport */ DocumentUpload),
  "DocumentUser": () => (/* reexport */ DocumentUser),
  "DocumentVerified": () => (/* reexport */ DocumentVerified),
  "DocumentVideo": () => (/* reexport */ DocumentVideo),
  "DocumentWindows": () => (/* reexport */ DocumentWindows),
  "DocumentWord": () => (/* reexport */ DocumentWord),
  "DocumentZip": () => (/* reexport */ DocumentZip),
  "Domain": () => (/* reexport */ Domain),
  "Dos": () => (/* reexport */ Dos),
  "Down": () => (/* reexport */ Down),
  "Download": () => (/* reexport */ Download),
  "DownloadOption": () => (/* reexport */ DownloadOption),
  "Drag": () => (/* reexport */ Drag),
  "Drawer": () => (/* reexport */ Drawer),
  "Dribbble": () => (/* reexport */ Dribbble),
  "DriveCage": () => (/* reexport */ DriveCage),
  "Dropbox": () => (/* reexport */ Dropbox),
  "Duplicate": () => (/* reexport */ Duplicate),
  "Dxc": () => (/* reexport */ Dxc),
  "Ebay": () => (/* reexport */ Ebay),
  "Edge": () => (/* reexport */ Edge),
  "Edit": () => (/* reexport */ Edit),
  "Eject": () => (/* reexport */ Eject),
  "Elevator": () => (/* reexport */ Elevator),
  "Emergency": () => (/* reexport */ Emergency),
  "Emoji": () => (/* reexport */ Emoji),
  "EmptyCircle": () => (/* reexport */ EmptyCircle),
  "Erase": () => (/* reexport */ Erase),
  "Escalator": () => (/* reexport */ Escalator),
  "Expand": () => (/* reexport */ Expand),
  "Ezmeral": () => (/* reexport */ Ezmeral),
  "Facebook": () => (/* reexport */ Facebook),
  "FacebookOption": () => (/* reexport */ FacebookOption),
  "Fan": () => (/* reexport */ Fan),
  "FanOption": () => (/* reexport */ FanOption),
  "FastForward": () => (/* reexport */ FastForward),
  "Favorite": () => (/* reexport */ Favorite),
  "Fedora": () => (/* reexport */ Fedora),
  "Figma": () => (/* reexport */ Figma),
  "Filter": () => (/* reexport */ Filter),
  "FingerPrint": () => (/* reexport */ FingerPrint),
  "Fireball": () => (/* reexport */ Fireball),
  "Firefox": () => (/* reexport */ Firefox),
  "Firewall": () => (/* reexport */ Firewall),
  "Flag": () => (/* reexport */ Flag),
  "FlagFill": () => (/* reexport */ FlagFill),
  "Flows": () => (/* reexport */ Flows),
  "Folder": () => (/* reexport */ Folder),
  "FolderCycle": () => (/* reexport */ FolderCycle),
  "FolderOpen": () => (/* reexport */ FolderOpen),
  "FormAdd": () => (/* reexport */ FormAdd),
  "FormAttachment": () => (/* reexport */ FormAttachment),
  "FormCalendar": () => (/* reexport */ FormCalendar),
  "FormCheckmark": () => (/* reexport */ FormCheckmark),
  "FormClock": () => (/* reexport */ FormClock),
  "FormClose": () => (/* reexport */ FormClose),
  "FormCut": () => (/* reexport */ FormCut),
  "FormDown": () => (/* reexport */ FormDown),
  "FormEdit": () => (/* reexport */ FormEdit),
  "FormFilter": () => (/* reexport */ FormFilter),
  "FormFolder": () => (/* reexport */ FormFolder),
  "FormLocation": () => (/* reexport */ FormLocation),
  "FormLock": () => (/* reexport */ FormLock),
  "FormNext": () => (/* reexport */ FormNext),
  "FormNextLink": () => (/* reexport */ FormNextLink),
  "FormPrevious": () => (/* reexport */ FormPrevious),
  "FormPreviousLink": () => (/* reexport */ FormPreviousLink),
  "FormRefresh": () => (/* reexport */ FormRefresh),
  "FormSchedule": () => (/* reexport */ FormSchedule),
  "FormSearch": () => (/* reexport */ FormSearch),
  "FormSubtract": () => (/* reexport */ FormSubtract),
  "FormTrash": () => (/* reexport */ FormTrash),
  "FormUp": () => (/* reexport */ FormUp),
  "FormUpload": () => (/* reexport */ FormUpload),
  "FormView": () => (/* reexport */ FormView),
  "FormViewHide": () => (/* reexport */ FormViewHide),
  "ForwardTen": () => (/* reexport */ ForwardTen),
  "Freebsd": () => (/* reexport */ Freebsd),
  "Gallery": () => (/* reexport */ Gallery),
  "Gamepad": () => (/* reexport */ Gamepad),
  "Gateway": () => (/* reexport */ Gateway),
  "Gatsbyjs": () => (/* reexport */ Gatsbyjs),
  "Gem": () => (/* reexport */ Gem),
  "Gift": () => (/* reexport */ Gift),
  "Github": () => (/* reexport */ Github),
  "Globe": () => (/* reexport */ Globe),
  "Golang": () => (/* reexport */ Golang),
  "Google": () => (/* reexport */ Google),
  "GooglePlay": () => (/* reexport */ GooglePlay),
  "GooglePlus": () => (/* reexport */ GooglePlus),
  "GoogleWallet": () => (/* reexport */ GoogleWallet),
  "GraphQl": () => (/* reexport */ GraphQl),
  "Gremlin": () => (/* reexport */ Gremlin),
  "Grid": () => (/* reexport */ Grid),
  "Grommet": () => (/* reexport */ Grommet),
  "Group": () => (/* reexport */ Group),
  "Grow": () => (/* reexport */ Grow),
  "Hadoop": () => (/* reexport */ Hadoop),
  "Halt": () => (/* reexport */ Halt),
  "Help": () => (/* reexport */ Help),
  "HelpOption": () => (/* reexport */ HelpOption),
  "Heroku": () => (/* reexport */ Heroku),
  "Hide": () => (/* reexport */ Hide),
  "History": () => (/* reexport */ History),
  "Home": () => (/* reexport */ Home),
  "HomeOption": () => (/* reexport */ HomeOption),
  "Horton": () => (/* reexport */ Horton),
  "Host": () => (/* reexport */ Host),
  "HostMaintenance": () => (/* reexport */ HostMaintenance),
  "Hp": () => (/* reexport */ Hp),
  "Hpe": () => (/* reexport */ Hpe),
  "HpeLabs": () => (/* reexport */ HpeLabs),
  "Hpi": () => (/* reexport */ Hpi),
  "Html5": () => (/* reexport */ Html5),
  "IceCream": () => (/* reexport */ IceCream),
  "Image": () => (/* reexport */ Image),
  "Impact": () => (/* reexport */ Impact),
  "InProgress": () => (/* reexport */ InProgress),
  "Inbox": () => (/* reexport */ Inbox),
  "Indicator": () => (/* reexport */ Indicator),
  "Info": () => (/* reexport */ Info),
  "Inherit": () => (/* reexport */ Inherit),
  "Insecure": () => (/* reexport */ Insecure),
  "Inspect": () => (/* reexport */ Inspect),
  "Instagram": () => (/* reexport */ Instagram),
  "Install": () => (/* reexport */ Install),
  "InstallOption": () => (/* reexport */ InstallOption),
  "Integration": () => (/* reexport */ Integration),
  "InternetExplorer": () => (/* reexport */ InternetExplorer),
  "Italic": () => (/* reexport */ Italic),
  "Iteration": () => (/* reexport */ Iteration),
  "Java": () => (/* reexport */ Java),
  "Js": () => (/* reexport */ Js),
  "Key": () => (/* reexport */ Key),
  "Keyboard": () => (/* reexport */ Keyboard),
  "Language": () => (/* reexport */ Language),
  "Lastfm": () => (/* reexport */ Lastfm),
  "Launch": () => (/* reexport */ Launch),
  "Layer": () => (/* reexport */ Layer),
  "License": () => (/* reexport */ License),
  "Like": () => (/* reexport */ Like),
  "LineChart": () => (/* reexport */ LineChart),
  "Link": () => (/* reexport */ Link),
  "LinkBottom": () => (/* reexport */ LinkBottom),
  "LinkDown": () => (/* reexport */ LinkDown),
  "LinkNext": () => (/* reexport */ LinkNext),
  "LinkPrevious": () => (/* reexport */ LinkPrevious),
  "LinkTop": () => (/* reexport */ LinkTop),
  "LinkUp": () => (/* reexport */ LinkUp),
  "Linkedin": () => (/* reexport */ Linkedin),
  "LinkedinOption": () => (/* reexport */ LinkedinOption),
  "List": () => (/* reexport */ List),
  "Local": () => (/* reexport */ Local),
  "Location": () => (/* reexport */ Location),
  "LocationPin": () => (/* reexport */ LocationPin),
  "Lock": () => (/* reexport */ Lock),
  "Login": () => (/* reexport */ Login),
  "Logout": () => (/* reexport */ Logout),
  "Lounge": () => (/* reexport */ Lounge),
  "Magic": () => (/* reexport */ Magic),
  "Mail": () => (/* reexport */ Mail),
  "MailOption": () => (/* reexport */ MailOption),
  "Mandriva": () => (/* reexport */ Mandriva),
  "Manual": () => (/* reexport */ Manual),
  "Map": () => (/* reexport */ Map),
  "MapLocation": () => (/* reexport */ MapLocation),
  "Mastercard": () => (/* reexport */ Mastercard),
  "Medium": () => (/* reexport */ Medium),
  "Memory": () => (/* reexport */ Memory),
  "Menu": () => (/* reexport */ Menu),
  "Microfocus": () => (/* reexport */ Microfocus),
  "Microphone": () => (/* reexport */ Microphone),
  "Money": () => (/* reexport */ Money),
  "Monitor": () => (/* reexport */ Monitor),
  "Monospace": () => (/* reexport */ Monospace),
  "Moon": () => (/* reexport */ Moon),
  "More": () => (/* reexport */ More),
  "MoreVertical": () => (/* reexport */ MoreVertical),
  "Mouse": () => (/* reexport */ Mouse),
  "Multimedia": () => (/* reexport */ Multimedia),
  "Multiple": () => (/* reexport */ Multiple),
  "Music": () => (/* reexport */ Music),
  "Mysql": () => (/* reexport */ Mysql),
  "Navigate": () => (/* reexport */ Navigate),
  "Network": () => (/* reexport */ Network),
  "NetworkDrive": () => (/* reexport */ NetworkDrive),
  "New": () => (/* reexport */ New),
  "NewWindow": () => (/* reexport */ NewWindow),
  "Next": () => (/* reexport */ Next),
  "Node": () => (/* reexport */ Node),
  "Nodes": () => (/* reexport */ Nodes),
  "Norton": () => (/* reexport */ Norton),
  "Note": () => (/* reexport */ Note),
  "Notes": () => (/* reexport */ Notes),
  "Notification": () => (/* reexport */ Notification),
  "Npm": () => (/* reexport */ Npm),
  "ObjectGroup": () => (/* reexport */ ObjectGroup),
  "ObjectUngroup": () => (/* reexport */ ObjectUngroup),
  "OfflineStorage": () => (/* reexport */ OfflineStorage),
  "Onedrive": () => (/* reexport */ Onedrive),
  "Opera": () => (/* reexport */ Opera),
  "Optimize": () => (/* reexport */ Optimize),
  "Oracle": () => (/* reexport */ Oracle),
  "OrderedList": () => (/* reexport */ OrderedList),
  "Organization": () => (/* reexport */ Organization),
  "Overview": () => (/* reexport */ Overview),
  "Package": () => (/* reexport */ Package),
  "Paint": () => (/* reexport */ Paint),
  "Pan": () => (/* reexport */ Pan),
  "Pause": () => (/* reexport */ Pause),
  "PauseFill": () => (/* reexport */ PauseFill),
  "Paypal": () => (/* reexport */ Paypal),
  "Performance": () => (/* reexport */ Performance),
  "PersonalComputer": () => (/* reexport */ PersonalComputer),
  "Phone": () => (/* reexport */ Phone),
  "PhoneFlip": () => (/* reexport */ PhoneFlip),
  "PhoneHorizontal": () => (/* reexport */ PhoneHorizontal),
  "PhoneVertical": () => (/* reexport */ PhoneVertical),
  "PieChart": () => (/* reexport */ PieChart),
  "PiedPiper": () => (/* reexport */ PiedPiper),
  "Pin": () => (/* reexport */ Pin),
  "Pinterest": () => (/* reexport */ Pinterest),
  "Plan": () => (/* reexport */ Plan),
  "Play": () => (/* reexport */ Play),
  "PlayFill": () => (/* reexport */ PlayFill),
  "Plug": () => (/* reexport */ Plug),
  "Pocket": () => (/* reexport */ Pocket),
  "Power": () => (/* reexport */ Power),
  "PowerCycle": () => (/* reexport */ PowerCycle),
  "PowerForceShutdown": () => (/* reexport */ PowerForceShutdown),
  "PowerReset": () => (/* reexport */ PowerReset),
  "PowerShutdown": () => (/* reexport */ PowerShutdown),
  "Previous": () => (/* reexport */ Previous),
  "Print": () => (/* reexport */ Print),
  "ProductHunt": () => (/* reexport */ ProductHunt),
  "Projects": () => (/* reexport */ Projects),
  "Qr": () => (/* reexport */ Qr),
  "Radial": () => (/* reexport */ Radial),
  "RadialSelected": () => (/* reexport */ RadialSelected),
  "Raspberry": () => (/* reexport */ Raspberry),
  "Reactjs": () => (/* reexport */ Reactjs),
  "Reddit": () => (/* reexport */ Reddit),
  "Redhat": () => (/* reexport */ Redhat),
  "Redo": () => (/* reexport */ Redo),
  "Refresh": () => (/* reexport */ Refresh),
  "Resources": () => (/* reexport */ Resources),
  "Restaurant": () => (/* reexport */ Restaurant),
  "Restroom": () => (/* reexport */ Restroom),
  "RestroomMen": () => (/* reexport */ RestroomMen),
  "RestroomWomen": () => (/* reexport */ RestroomWomen),
  "Resume": () => (/* reexport */ Resume),
  "Return": () => (/* reexport */ Return),
  "Revert": () => (/* reexport */ Revert),
  "Rewind": () => (/* reexport */ Rewind),
  "Risk": () => (/* reexport */ Risk),
  "Robot": () => (/* reexport */ Robot),
  "RotateLeft": () => (/* reexport */ RotateLeft),
  "RotateRight": () => (/* reexport */ RotateRight),
  "Rss": () => (/* reexport */ Rss),
  "Run": () => (/* reexport */ Run),
  "SafariOption": () => (/* reexport */ SafariOption),
  "Sans": () => (/* reexport */ Sans),
  "Satellite": () => (/* reexport */ Satellite),
  "Save": () => (/* reexport */ Save),
  "Scan": () => (/* reexport */ Scan),
  "Schedule": () => (/* reexport */ Schedule),
  "ScheduleNew": () => (/* reexport */ ScheduleNew),
  "SchedulePlay": () => (/* reexport */ SchedulePlay),
  "Schedules": () => (/* reexport */ Schedules),
  "Sco": () => (/* reexport */ Sco),
  "Scorecard": () => (/* reexport */ Scorecard),
  "Script": () => (/* reexport */ Script),
  "Sd": () => (/* reexport */ Sd),
  "Search": () => (/* reexport */ Search),
  "SearchAdvanced": () => (/* reexport */ SearchAdvanced),
  "Secure": () => (/* reexport */ Secure),
  "Select": () => (/* reexport */ Select),
  "Selection": () => (/* reexport */ Selection),
  "Semantics": () => (/* reexport */ Semantics),
  "Send": () => (/* reexport */ Send),
  "Server": () => (/* reexport */ Server),
  "ServerCluster": () => (/* reexport */ ServerCluster),
  "Servers": () => (/* reexport */ Servers),
  "ServicePlay": () => (/* reexport */ ServicePlay),
  "Services": () => (/* reexport */ Services),
  "SettingsOption": () => (/* reexport */ SettingsOption),
  "Share": () => (/* reexport */ Share),
  "ShareOption": () => (/* reexport */ ShareOption),
  "ShareRounded": () => (/* reexport */ ShareRounded),
  "Shield": () => (/* reexport */ Shield),
  "ShieldSecurity": () => (/* reexport */ ShieldSecurity),
  "Shift": () => (/* reexport */ Shift),
  "Shop": () => (/* reexport */ Shop),
  "Sidebar": () => (/* reexport */ Sidebar),
  "Sign": () => (/* reexport */ Sign),
  "Skype": () => (/* reexport */ Skype),
  "Slack": () => (/* reexport */ Slack),
  "Snapchat": () => (/* reexport */ Snapchat),
  "Solaris": () => (/* reexport */ Solaris),
  "Sort": () => (/* reexport */ Sort),
  "Soundcloud": () => (/* reexport */ Soundcloud),
  "Spa": () => (/* reexport */ Spa),
  "Spectrum": () => (/* reexport */ Spectrum),
  "Split": () => (/* reexport */ Split),
  "Splits": () => (/* reexport */ Splits),
  "Spotify": () => (/* reexport */ Spotify),
  "Square": () => (/* reexport */ Square),
  "StackOverflow": () => (/* reexport */ StackOverflow),
  "Stakeholder": () => (/* reexport */ Stakeholder),
  "Star": () => (/* reexport */ Star),
  "StarHalf": () => (/* reexport */ StarHalf),
  "StatusCritical": () => (/* reexport */ StatusCritical),
  "StatusCriticalSmall": () => (/* reexport */ StatusCriticalSmall),
  "StatusDisabled": () => (/* reexport */ StatusDisabled),
  "StatusDisabledSmall": () => (/* reexport */ StatusDisabledSmall),
  "StatusGood": () => (/* reexport */ StatusGood),
  "StatusGoodSmall": () => (/* reexport */ StatusGoodSmall),
  "StatusInfo": () => (/* reexport */ StatusInfo),
  "StatusInfoSmall": () => (/* reexport */ StatusInfoSmall),
  "StatusPlaceholder": () => (/* reexport */ StatusPlaceholder),
  "StatusPlaceholderSmall": () => (/* reexport */ StatusPlaceholderSmall),
  "StatusUnknown": () => (/* reexport */ StatusUnknown),
  "StatusUnknownSmall": () => (/* reexport */ StatusUnknownSmall),
  "StatusWarning": () => (/* reexport */ StatusWarning),
  "StatusWarningSmall": () => (/* reexport */ StatusWarningSmall),
  "Steps": () => (/* reexport */ Steps),
  "StepsOption": () => (/* reexport */ StepsOption),
  "Stop": () => (/* reexport */ Stop),
  "StopFill": () => (/* reexport */ StopFill),
  "Storage": () => (/* reexport */ Storage),
  "StreetView": () => (/* reexport */ StreetView),
  "StrikeThrough": () => (/* reexport */ StrikeThrough),
  "Stripe": () => (/* reexport */ Stripe),
  "Subscript": () => (/* reexport */ Subscript),
  "Subtract": () => (/* reexport */ Subtract),
  "SubtractCircle": () => (/* reexport */ SubtractCircle),
  "Sun": () => (/* reexport */ Sun),
  "Superscript": () => (/* reexport */ Superscript),
  "Support": () => (/* reexport */ Support),
  "Suse": () => (/* reexport */ Suse),
  "Swift": () => (/* reexport */ Swift),
  "Swim": () => (/* reexport */ Swim),
  "Switch": () => (/* reexport */ Switch),
  "Sync": () => (/* reexport */ Sync),
  "System": () => (/* reexport */ System),
  "Table": () => (/* reexport */ Table),
  "TableAdd": () => (/* reexport */ TableAdd),
  "Tag": () => (/* reexport */ Tag),
  "Tape": () => (/* reexport */ Tape),
  "TapeOption": () => (/* reexport */ TapeOption),
  "Target": () => (/* reexport */ Target),
  "Task": () => (/* reexport */ Task),
  "Tasks": () => (/* reexport */ Tasks),
  "Technology": () => (/* reexport */ Technology),
  "Template": () => (/* reexport */ Template),
  "Terminal": () => (/* reexport */ Terminal),
  "Test": () => (/* reexport */ Test),
  "TestDesktop": () => (/* reexport */ TestDesktop),
  "TextAlignCenter": () => (/* reexport */ TextAlignCenter),
  "TextAlignFull": () => (/* reexport */ TextAlignFull),
  "TextAlignLeft": () => (/* reexport */ TextAlignLeft),
  "TextAlignRight": () => (/* reexport */ TextAlignRight),
  "TextWrap": () => (/* reexport */ TextWrap),
  "Threats": () => (/* reexport */ Threats),
  "ThreeD": () => (/* reexport */ ThreeD),
  "ThreeDffects": () => (/* reexport */ ThreeDffects),
  "Ticket": () => (/* reexport */ Ticket),
  "Tictok": () => (/* reexport */ Tictok),
  "Time": () => (/* reexport */ Time),
  "Tip": () => (/* reexport */ Tip),
  "Toast": () => (/* reexport */ Toast),
  "Tools": () => (/* reexport */ Tools),
  "Tooltip": () => (/* reexport */ Tooltip),
  "TopCorner": () => (/* reexport */ TopCorner),
  "Train": () => (/* reexport */ Train),
  "Transaction": () => (/* reexport */ Transaction),
  "Trash": () => (/* reexport */ Trash),
  "Tree": () => (/* reexport */ Tree),
  "TreeOption": () => (/* reexport */ TreeOption),
  "Trigger": () => (/* reexport */ Trigger),
  "Trophy": () => (/* reexport */ Trophy),
  "Troubleshoot": () => (/* reexport */ Troubleshoot),
  "Tty": () => (/* reexport */ Tty),
  "Tumblr": () => (/* reexport */ Tumblr),
  "Turbolinux": () => (/* reexport */ Turbolinux),
  "Twitter": () => (/* reexport */ Twitter),
  "Ubuntu": () => (/* reexport */ Ubuntu),
  "Underline": () => (/* reexport */ Underline),
  "Undo": () => (/* reexport */ Undo),
  "Unlink": () => (/* reexport */ Unlink),
  "Unlock": () => (/* reexport */ Unlock),
  "UnorderedList": () => (/* reexport */ UnorderedList),
  "Unsorted": () => (/* reexport */ Unsorted),
  "Up": () => (/* reexport */ Up),
  "Update": () => (/* reexport */ Update),
  "Upgrade": () => (/* reexport */ Upgrade),
  "Upload": () => (/* reexport */ Upload),
  "UploadOption": () => (/* reexport */ UploadOption),
  "UsbKey": () => (/* reexport */ UsbKey),
  "User": () => (/* reexport */ User),
  "UserAdd": () => (/* reexport */ UserAdd),
  "UserAdmin": () => (/* reexport */ UserAdmin),
  "UserExpert": () => (/* reexport */ UserExpert),
  "UserFemale": () => (/* reexport */ UserFemale),
  "UserManager": () => (/* reexport */ UserManager),
  "UserNew": () => (/* reexport */ UserNew),
  "UserPolice": () => (/* reexport */ UserPolice),
  "UserSettings": () => (/* reexport */ UserSettings),
  "UserWorker": () => (/* reexport */ UserWorker),
  "Validate": () => (/* reexport */ Validate),
  "Vend": () => (/* reexport */ Vend),
  "Video": () => (/* reexport */ Video),
  "View": () => (/* reexport */ View),
  "Vimeo": () => (/* reexport */ Vimeo),
  "VirtualMachine": () => (/* reexport */ VirtualMachine),
  "VirtualStorage": () => (/* reexport */ VirtualStorage),
  "Visa": () => (/* reexport */ Visa),
  "VmMaintenance": () => (/* reexport */ VmMaintenance),
  "Vmware": () => (/* reexport */ Vmware),
  "Volume": () => (/* reexport */ Volume),
  "VolumeControl": () => (/* reexport */ VolumeControl),
  "VolumeLow": () => (/* reexport */ VolumeLow),
  "VolumeMute": () => (/* reexport */ VolumeMute),
  "Vulnerability": () => (/* reexport */ Vulnerability),
  "Waypoint": () => (/* reexport */ Waypoint),
  "Webcam": () => (/* reexport */ Webcam),
  "Wheelchair": () => (/* reexport */ Wheelchair),
  "WheelchairActive": () => (/* reexport */ WheelchairActive),
  "Wifi": () => (/* reexport */ Wifi),
  "WifiLow": () => (/* reexport */ WifiLow),
  "WifiMedium": () => (/* reexport */ WifiMedium),
  "WifiNone": () => (/* reexport */ WifiNone),
  "Windows": () => (/* reexport */ Windows),
  "WindowsLegacy": () => (/* reexport */ WindowsLegacy),
  "Wordpress": () => (/* reexport */ Wordpress),
  "Workshop": () => (/* reexport */ Workshop),
  "Yoga": () => (/* reexport */ Yoga),
  "Youtube": () => (/* reexport */ Youtube),
  "Zoom": () => (/* reexport */ Zoom),
  "ZoomIn": () => (/* reexport */ ZoomIn),
  "ZoomOut": () => (/* reexport */ ZoomOut),
  "base": () => (/* reexport */ base),
  "defaultProps": () => (/* reexport */ defaultProps),
  "extendDefaultTheme": () => (/* reexport */ extendDefaultTheme)
});

;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/utils.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) {
    return target;
  } // making sure to not change target (immutable)


  var output = _extends({}, target);

  sources.forEach(function (source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = _extends({}, source[key]);
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
}
/* harmony default export */ const utils = ({
  deepMerge: deepMerge,
  isObject: isObject
});
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/themes/base.js
var base = {
  global: {
    colors: {
      icon: '#666666'
    }
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px'
    }
  }
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/default-props.js


var defaultProps = {
  theme: base
};
var extendDefaultTheme = function extendDefaultTheme(theme) {
  defaultProps.theme = deepMerge(base, theme);
};
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(4038);
// EXTERNAL MODULE: ./node_modules/grommet-styles/es6/styles/color.js
var color = __webpack_require__(3171);
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/StyledIcon.js
var _excluded = ["a11yTitle", "color", "size", "theme"];

function StyledIcon_extends() {
  StyledIcon_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StyledIcon_extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}





var colorCss = (0,styled_components_browser_esm.css)(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill=\"none\"]{stroke-width:0;}}*[stroke*=\"#\"],*[STROKE*=\"#\"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*=\"#\"],*[FILL*=\"#\"]{fill:inherit;stroke:none;}"], function (props) {
  return (0,color/* colorStyle */.u)('fill', props.color || props.theme.global.colors.icon, props.theme);
}, function (props) {
  return (0,color/* colorStyle */.u)('stroke', props.color || props.theme.global.colors.icon, props.theme);
});

var IconInner = function IconInner(_ref) {
  var a11yTitle = _ref.a11yTitle,
      color = _ref.color,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/react.createElement("svg", StyledIcon_extends({
    "aria-label": a11yTitle
  }, rest));
};

IconInner.displayName = 'Icon';

var parseMetricToNum = function parseMetricToNum(string) {
  return parseFloat(string.match(/\d+(\.\d+)?/), 10);
};

var StyledIcon = (0,styled_components_browser_esm.default)(IconInner).withConfig({
  displayName: "StyledIcon",
  componentId: "ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", ""], function (_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'medium' : _ref2$size,
      theme = _ref2.theme,
      viewBox = _ref2.viewBox;

  var _split = (viewBox || '0 0 24 24').split(' '),
      w = _split[2],
      h = _split[3];

  var scale = w / h;
  var dimension = parseMetricToNum(theme.icon.size[size] || size);

  if (w < h) {
    return "\n      width: " + dimension + "px;\n      height: " + dimension / scale + "px;\n    ";
  }

  if (h < w) {
    return "\n      width: " + dimension * scale + "px;\n      height: " + dimension + "px;\n    ";
  }

  return "\n      width: " + dimension + "px;\n      height: " + dimension + "px;\n    ";
}, function (_ref3) {
  var color = _ref3.color;
  return color !== 'plain' && colorCss;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme && theme.icon.extend;
});
StyledIcon.defaultProps = {};
Object.setPrototypeOf(StyledIcon.defaultProps, defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Accessibility.js
function Accessibility_extends() {
  Accessibility_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Accessibility_extends.apply(this, arguments);
}



var Accessibility = function Accessibility(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Accessibility_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Accessibility"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 8h7v6l-4 7M20 8h-7v6l4 7M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 3h2v5h-2V8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Achievement.js
function Achievement_extends() {
  Achievement_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Achievement_extends.apply(this, arguments);
}



var Achievement = function Achievement(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Achievement_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Achievement"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10.325 14.763A6.002 6.002 0 0 1 6 9V1h12v9M6 3H1v4c0 2.509 1.791 4 4 4h1m14.034-.115C21.742 10.49 23 9.103 23 7V3h-5m-8 16H5v4h11.5m0-13a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm3.5 4-4.5 4.5L13 16m-2.794-.576A4 4 0 0 0 8 19"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Action.js
function Action_extends() {
  Action_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Action_extends.apply(this, arguments);
}



var Action = function Action(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Action_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Action"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m1 23 3-3-3 3zM20 4l3-3-3 3zM9 11l3-3-3 3zm4 4 3-3-3 3zM10 5l9 9 1-1c2-2 4.053-5 0-9s-7-2-9 0l-1 1zm-6 6 1-1 9 9-1 1c-2 2-5 4.087-9 0s-2-7 0-9z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Actions.js
function Actions_extends() {
  Actions_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Actions_extends.apply(this, arguments);
}



var Actions = function Actions(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Actions_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Actions"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-11V1m0 22v-5.5M1 12h5.5m11 0H23M4.437 4.437l4.125 4.125m6.876 6.876 4.124 4.124m0-15.125-4.125 4.125m-6.874 6.876-4.126 4.124"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Ad.js
function Ad_extends() {
  Ad_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Ad_extends.apply(this, arguments);
}



var Ad = function Ad(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Ad_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ad"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 10h4v4h-4v-4zm4 8h-4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4m-4 8h-4a8 8 0 0 1-8-8v-4a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8v4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/AddCircle.js
function AddCircle_extends() {
  AddCircle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return AddCircle_extends.apply(this, arguments);
}



var AddCircle = function AddCircle(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, AddCircle_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "AddCircle"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-4V6m-6 6h12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Add.js
function Add_extends() {
  Add_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Add_extends.apply(this, arguments);
}



var Add = function Add(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Add_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Add"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22V2M2 12h20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Aed.js
function Aed_extends() {
  Aed_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Aed_extends.apply(this, arguments);
}



var Aed = function Aed(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Aed_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Aed"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 8.4C2 4 5 3 7 3s4 2 5 3.5C13 5 15 3 17 3s5 1 5 5.4C22 15 12 21 12 21S2 15 2 8.4zM12 6c-.5-.5-2 4-2 4h2v2.5L14 9h-2s1-6 5-6c-4 0-5 3-5 3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Aggregate.js
function Aggregate_extends() {
  Aggregate_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Aggregate_extends.apply(this, arguments);
}



var Aggregate = function Aggregate(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Aggregate_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Aggregate"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 15h7V8a7 7 0 1 0-7 7zm8-6H9v7a7 7 0 1 0 7-7z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/AidOption.js
function AidOption_extends() {
  AidOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return AidOption_extends.apply(this, arguments);
}



var AidOption = function AidOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, AidOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "AidOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 9v10V9zm5 5H7h10zM1 6.995C1 5.893 1.89 5 2.991 5H21.01C22.109 5 23 5.893 23 6.995v14.01C23 22.107 22.11 23 21.009 23H2.99A1.992 1.992 0 0 1 1 21.005V6.995zM7 5V2.01C7 1.451 7.456 1 7.995 1h8.01c.55 0 .995.443.995 1.01V5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Aid.js
function Aid_extends() {
  Aid_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Aid_extends.apply(this, arguments);
}



var Aid = function Aid(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Aid_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Aid"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 22h22V6H1v16zM8 6h8V2H8v4zm0 8h8m-4-4v8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Alarm.js
function Alarm_extends() {
  Alarm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Alarm_extends.apply(this, arguments);
}



var Alarm = function Alarm(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Alarm_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Alarm"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M21 13a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9zM5.5 19.5 2 23l3.5-3.5zm13 0L22 23l-3.5-3.5zM9 4c-.71-1.092-2.118-2-4-2-2.1 0-4 1.9-4 4 0 1.882.908 3.29 2 4m18 0c1.092-.71 2-2.118 2-4 0-2.1-1.9-4-4-4-1.882 0-3.29.908-4 2m-3 4v5l3 3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Alert.js
function Alert_extends() {
  Alert_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Alert_extends.apply(this, arguments);
}



var Alert = function Alert(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Alert_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Alert"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 17v2m0-9v6m0-13L2 22h20L12 3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Amazon.js
function Amazon_extends() {
  Amazon_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Amazon_extends.apply(this, arguments);
}



var Amazon = function Amazon(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Amazon_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Amazon"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#F90",
    fillRule: "evenodd",
    d: "M11.992 23.94c-3.155-.021-5.956-1.061-8.46-2.955a16.663 16.663 0 0 1-2.446-2.282c-.027-.03-.072-.058-.075-.09-.011-.117-.008-.234-.011-.35.1.016.218.003.298.053.67.417 1.314.878 2 1.264a18.612 18.612 0 0 0 6.378 2.192c1.18.18 2.365.24 3.55.17a17.755 17.755 0 0 0 6.486-1.648c.325-.151.644-.316.964-.479.154-.079.307-.111.438.028.139.146.133.322.036.485a1.11 1.11 0 0 1-.222.248c-1.841 1.633-3.995 2.636-6.396 3.103-.832.161-1.684.217-2.527.321l-.013-.06m8.89-5.095c-.456.044-.961.094-1.467.14-.11.01-.224.017-.334.01-.128-.008-.148-.086-.078-.18a.658.658 0 0 1 .162-.137c.536-.359 1.141-.516 1.769-.6a4.51 4.51 0 0 1 1.773.096c.394.106.48.153.45.61-.078 1.206-.466 2.303-1.34 3.183-.045.046-.087.104-.143.126-.074.029-.16.028-.24.04.002-.073-.013-.152.009-.219.208-.634.426-1.265.633-1.9a1.97 1.97 0 0 0 .073-.397c.051-.428-.12-.643-.574-.71-.212-.03-.427-.039-.693-.062M13.997 9.42c-.86-.005-1.68.032-2.466.296-.388.13-.781.295-1.115.527-.923.639-1.163 1.59-1.087 2.65.04.562.209 1.082.623 1.489.588.578 1.579.654 2.374.184.693-.41 1.107-1.042 1.375-1.779.395-1.085.27-2.216.296-3.367m.632 6.353c-.309.28-.594.545-.884.804-1.118.994-2.438 1.438-3.92 1.467-.805.017-1.596-.044-2.349-.342-1.342-.53-2.197-1.51-2.544-2.902-.431-1.728-.286-3.392.737-4.902.756-1.116 1.849-1.78 3.11-2.186 1.084-.35 2.205-.502 3.33-.628.618-.07 1.236-.13 1.884-.199-.02-.773.09-1.55-.181-2.297-.241-.662-.75-1.003-1.414-1.155-1.007-.23-2.147.145-2.688.938-.184.27-.296.597-.395.913-.139.445-.343.59-.805.535-.902-.107-1.807-.196-2.71-.302-.447-.052-.624-.307-.537-.742.397-1.98 1.543-3.363 3.41-4.09 2.201-.86 4.452-.927 6.684-.106 1.85.68 2.865 2.035 3 4.013.046.668.052 1.34.055 2.009.007 1.732.016 3.464-.003 5.196-.01.965.258 1.82.844 2.582.141.183.284.367.403.564.198.327.145.575-.141.822-.737.636-1.472 1.273-2.208 1.911-.404.352-.685.347-1.092.004a7.019 7.019 0 0 1-1.357-1.569c-.069-.107-.142-.21-.229-.338"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Amex.js
function Amex_extends() {
  Amex_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Amex_extends.apply(this, arguments);
}



var Amex = function Amex(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Amex_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Amex"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#002663",
    fillRule: "evenodd",
    d: "m4.314 11.965-.82-1.997-.815 1.997h1.635zm7.859 2.161-.005-3.922-1.736 3.922h-1.05L7.64 10.2v3.926H5.206l-.46-1.117H2.253l-.465 1.117h-1.3l2.144-5.008H4.41l2.036 4.742V9.118H8.4l1.567 3.397 1.439-3.397H13.4v5.008h-1.227zm3.133-1.024v-.997h2.628v-1.022h-2.628v-.911h3.001l1.31 1.46-1.368 1.47h-2.943zm8.111 1.044h-1.556l-1.474-1.659-1.532 1.659h-4.742v-5.01h4.815l1.473 1.642 1.523-1.642h1.564l-2.327 2.505 2.256 2.505z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Analytics.js
function Analytics_extends() {
  Analytics_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Analytics_extends.apply(this, arguments);
}



var Analytics = function Analytics(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Analytics_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Analytics"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 7c1.25 1.67 2 3.75 2 6 0 5.52-4.48 10-10 10S2 18.52 2 13 6.48 3 12 3m0-2v12l9.6-7.2C19.41 2.89 15.92 1 12 1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Anchor.js
function Anchor_extends() {
  Anchor_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Anchor_extends.apply(this, arguments);
}



var Anchor = function Anchor(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Anchor_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Anchor"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8-11v15m-8-5.027C6.194 19.324 8.86 21 12 21c3.14 0 5.807-1.676 8-5.027M16 10H8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Android.js
function Android_extends() {
  Android_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Android_extends.apply(this, arguments);
}



var Android = function Android(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Android_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Android"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#A4C639",
    fillRule: "evenodd",
    d: "M5.685 7.914h12.718v10.364c0 .615-.499 1.115-1.114 1.115h-1.274v3.156A1.44 1.44 0 0 1 14.587 24a1.44 1.44 0 0 1-1.43-1.451v-3.156h-2.225v3.156A1.44 1.44 0 0 1 9.502 24a1.44 1.44 0 0 1-1.429-1.451v-3.156H6.8c-.615 0-1.115-.5-1.115-1.115V7.914zm-2.492-.085c-.797 0-1.443.656-1.443 1.466v5.727c0 .808.646 1.465 1.443 1.465s1.443-.657 1.443-1.465V9.295c0-.81-.646-1.466-1.443-1.466zm15.21-.96H5.685C5.842 5.059 7.018 3.5 8.71 2.597L7.5.82a.525.525 0 1 1 .868-.59l1.318 1.936a7.204 7.204 0 0 1 4.717 0L15.721.23a.524.524 0 1 1 .867.59L15.38 2.596c1.692.902 2.866 2.461 3.023 4.274zm-8.338-2.461a.703.703 0 1 0-1.406-.001.703.703 0 0 0 1.406 0zm5.454 0a.704.704 0 1 0-1.408 0 .704.704 0 0 0 1.408 0zm5.378 3.42c-.797 0-1.444.656-1.444 1.466v5.729c0 .81.647 1.466 1.444 1.466.797 0 1.441-.657 1.441-1.466v-5.73c0-.809-.644-1.466-1.441-1.466z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Announce.js
function Announce_extends() {
  Announce_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Announce_extends.apply(this, arguments);
}



var Announce = function Announce(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Announce_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Announce"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M11 15c3 0 8 4 8 4V3s-5 4-8 4v8zm-6 0 3 8h4l-3-8m10-1a3 3 0 1 0 0-6m-8 11c1 0 3-1 3-3M2 11c0-3.111 1.791-4 4-4h5v8H6c-2.209 0-4-.889-4-4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/AppleAppStore.js
function AppleAppStore_extends() {
  AppleAppStore_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return AppleAppStore_extends.apply(this, arguments);
}



var AppleAppStore = function AppleAppStore(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, AppleAppStore_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "AppleAppStore"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#1D81F3",
    d: "M3 17a1 1 0 0 1 0-2h10.5c1 0 2 2 1.5 2H3zm14 0a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4zM12.633 3.501a1 1 0 0 1 1.734.998L7.46 16.495a1 1 0 0 1-1.734-.997L12.633 3.5zM4 18.5c.5-1 3.5-2 2.5-.28A852.88 852.88 0 0 1 4.867 21a1 1 0 0 1-1.734-.998L4 18.5zM9.133 4.499a1 1 0 1 1 1.734-.998L12.61 6.53a1 1 0 1 1-1.733.998L9.133 4.499zM13 11.5c-.898-1.5 0-4.5.716-3.004L20.366 20a1 1 0 0 1-1.733.998L13 11.5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Apple.js
function Apple_extends() {
  Apple_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Apple_extends.apply(this, arguments);
}



var Apple = function Apple(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Apple_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Apple"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#AAA",
    fillRule: "evenodd",
    d: "M15.3 3.832c.84-1.014 1.404-2.427 1.25-3.832-1.208.049-2.67.805-3.535 1.819-.777.898-1.457 2.335-1.273 3.712 1.346.105 2.722-.684 3.56-1.699m3.02 8.918c.034 3.632 3.186 4.841 3.22 4.857-.025.085-.502 1.722-1.66 3.413-1 1.462-2.038 2.919-3.674 2.949-1.607.029-2.123-.953-3.961-.953-1.836 0-2.41.923-3.932.982-1.578.06-2.78-1.581-3.79-3.037-2.06-2.98-3.635-8.42-1.52-12.092C4.054 7.045 5.932 5.89 7.97 5.861c1.55-.03 3.013 1.043 3.96 1.043.948 0 2.726-1.29 4.595-1.101.783.033 2.979.316 4.39 2.381-.114.07-2.621 1.53-2.594 4.566"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/AppsRounded.js
function AppsRounded_extends() {
  AppsRounded_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return AppsRounded_extends.apply(this, arguments);
}



var AppsRounded = function AppsRounded(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, AppsRounded_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "AppsRounded"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.2 2h-.039c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C2 5.18 2 5.635 2 6.161v.678c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h.678c.527 0 .981 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167C11 7.82 11 7.365 11 6.839V6.16c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A17.9 17.9 0 0 0 6.839 2H6.2zM4.546 4.109c.05-.025.15-.063.422-.085C5.25 4 5.623 4 6.2 4h.6c.577 0 .949 0 1.232.024.272.022.373.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422C9 5.25 9 5.623 9 6.2v.6c0 .577 0 .949-.024 1.232-.022.272-.06.373-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085C7.75 9 7.377 9 6.8 9h-.6c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C4 7.75 4 7.377 4 6.8v-.6c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437zM17.2 2h-.038c-.528 0-.982 0-1.357.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C13 5.18 13 5.635 13 6.161v.678c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.357.031h.676c.528 0 .982 0 1.357-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167C22 7.82 22 7.365 22 6.839V6.16c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A17.9 17.9 0 0 0 17.839 2H17.2zm-1.654 2.109c.05-.025.15-.063.422-.085C16.25 4 16.623 4 17.2 4h.6c.577 0 .949 0 1.232.024.272.022.372.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422C20 5.25 20 5.623 20 6.2v.6c0 .577 0 .949-.024 1.232-.022.272-.06.373-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085C18.75 9 18.377 9 17.8 9h-.6c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C15 7.75 15 7.377 15 6.8v-.6c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437zM6.161 13h.678c.527 0 .981 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.357v.676c0 .528 0 .982-.03 1.357-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296C7.82 22 7.365 22 6.839 22H6.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A17.9 17.9 0 0 1 2 17.839v-.677c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C5.18 13 5.635 13 6.161 13zm-1.193 2.024c-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C4 16.25 4 16.623 4 17.2v.6c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C5.25 20 5.623 20 6.2 20h.6c.577 0 .949 0 1.232-.024.272-.022.373-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C9 18.75 9 18.377 9 17.8v-.6c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C7.75 15 7.377 15 6.8 15h-.6c-.577 0-.949 0-1.232.024zM17.2 13h-.038c-.528 0-.982 0-1.357.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167-.031.375-.031.83-.031 1.357v.676c0 .528 0 .982.03 1.357.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h.677c.528 0 .982 0 1.357-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356v-.677c0-.528 0-.982-.03-1.357-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296C18.82 13 18.365 13 17.838 13H17.2zm-1.654 2.109c.05-.025.15-.063.422-.085C16.25 15 16.623 15 17.2 15h.6c.577 0 .949 0 1.232.024.272.022.372.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422.023.283.024.655.024 1.232v.6c0 .577 0 .949-.024 1.232-.022.272-.06.372-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085C18.75 20 18.377 20 17.8 20h-.6c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C15 18.75 15 18.377 15 17.8v-.6c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Apps.js
function Apps_extends() {
  Apps_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Apps_extends.apply(this, arguments);
}



var Apps = function Apps(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Apps_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Apps"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 5h2V3h-2v2zm-8 0h2V3h-2v2zM3 5h2V3H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Archive.js
function Archive_extends() {
  Archive_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Archive_extends.apply(this, arguments);
}



var Archive = function Archive(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Archive_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Archive"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 23h18V6H3v17zm6-9h6v-4H9v4zM1 6h22V1H1v5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Archlinux.js
function Archlinux_extends() {
  Archlinux_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Archlinux_extends.apply(this, arguments);
}



var Archlinux = function Archlinux(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Archlinux_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Archlinux"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#1793D1",
    fillRule: "evenodd",
    d: "M11.995 0c-1.068 2.619-1.712 4.332-2.901 6.873.729.773 1.624 1.673 3.077 2.69-1.562-.643-2.628-1.289-3.425-1.959C7.224 10.78 4.84 15.304 0 24c3.804-2.196 6.752-3.55 9.5-4.066a6.964 6.964 0 0 1-.18-1.63l.004-.121c.06-2.437 1.328-4.311 2.83-4.184 1.501.127 2.668 2.207 2.608 4.644-.011.459-.063.9-.153 1.309 2.717.532 5.634 1.882 9.387 4.048-.74-1.362-1.4-2.59-2.031-3.76-.994-.77-2.03-1.771-4.143-2.856 1.452.377 2.493.813 3.303 1.3C14.713 6.746 14.195 5.16 11.995 0z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Article.js
function Article_extends() {
  Article_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Article_extends.apply(this, arguments);
}



var Article = function Article(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Article_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Article"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 7h3v4h-3V7zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Aruba.js
function Aruba_extends() {
  Aruba_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Aruba_extends.apply(this, arguments);
}



var Aruba = function Aruba(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Aruba_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Aruba"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#FF8300",
    fillRule: "evenodd",
    d: "M12.11 17.302c-3.074 0-5.602-2.46-5.602-5.465 0-3.006 2.528-5.465 5.602-5.465 3.074 0 5.601 2.46 5.601 5.465s-2.527 5.465-5.601 5.465zM12.11 2C6.508 2 2 6.44 2 11.837c0 5.465 4.508 9.836 10.11 9.836 2.323 0 4.44-.751 6.148-2.049 1.025 1.708 3.962 2.05 3.962 2.05v-9.837C22.22 6.44 17.71 2 12.11 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Ascend.js
function Ascend_extends() {
  Ascend_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Ascend_extends.apply(this, arguments);
}



var Ascend = function Ascend(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Ascend_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ascend"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2 8 6-6 6 6m-3 13h11m-11-4h8m-8-4h5M8 2v20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Ascending.js
function Ascending_extends() {
  Ascending_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Ascending_extends.apply(this, arguments);
}



var Ascending = function Ascending(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Ascending_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ascending"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m12.08 7.286.354-.353.354.353L17 11.498l-.707.708-3.358-3.359V17h-1V8.847l-3.359 3.359-.707-.708 4.212-4.212z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/AssistListening.js
function AssistListening_extends() {
  AssistListening_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return AssistListening_extends.apply(this, arguments);
}



var AssistListening = function AssistListening(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, AssistListening_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "AssistListening"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11 21c.757.667 1.424 1 2 1 2 0 3-1 3-3 0-1.333.667-2.667 2-4 1.267-1.267 2-3.067 2-5a7 7 0 0 0-14 0m11 0a4 4 0 1 0-8 0M3 20l5-6 1 4 5-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Atm.js
function Atm_extends() {
  Atm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Atm_extends.apply(this, arguments);
}



var Atm = function Atm(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Atm_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Atm"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 10H1V6h22v4h-3M6 6h12v14.006A2.003 2.003 0 0 1 15.991 22H8.01A2.002 2.002 0 0 1 6 20.006V6zm7 12h3m-3-3h3m-3-3h3m-6 10V6M3 2h3m2 0h3m2 0h3m2 0h3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Attachment.js
function Attachment_extends() {
  Attachment_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Attachment_extends.apply(this, arguments);
}



var Attachment = function Attachment(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Attachment_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Attachment"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m22 12-9 9c-6 6-15-3-9-9l9-9c4-4 10 2 6 6l-9 9c-2 2-5-1-3-3l9-9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Attraction.js
function Attraction_extends() {
  Attraction_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Attraction_extends.apply(this, arguments);
}



var Attraction = function Attraction(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Attraction_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Attraction"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m13 2 1.5.5L13 3V2zm1 16 1 5h-2l1-5zm0-1.5 2 6.5h-4l2-6.5zM12 6l9 5v2H3v-2l9-5zm-7.5 7h15c0 4.167 1.5 10 1.5 10H3s1.5-5.833 1.5-10zm0 0h15c0 4.167 1.5 10 1.5 10H3s1.5-5.833 1.5-10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Baby.js
function Baby_extends() {
  Baby_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Baby_extends.apply(this, arguments);
}



var Baby = function Baby(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Baby_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Baby"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 15h4s-1 1.5-2 1.5-2-1.5-2-1.5zm2-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 6-4-3m0 6 3 2.5-2.5 2.5M6 12l4-3m0 6-2.5 2.75L10 20m0-11h4v3h-4V9z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/BackTen.js
function BackTen_extends() {
  BackTen_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return BackTen_extends.apply(this, arguments);
}



var BackTen = function BackTen(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, BackTen_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BackTen"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3.111 7.556C4.67 4.267 8.07 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m0-8v4h4m3 8V9l-2 .533M17 12c0-2-1-3.5-2.5-3.5S12 10 12 12s1 3.5 2.5 3.5S17 14 17 12zm-2.5-3.5C16.925 8.5 17 11 17 12s0 3.5-2.5 3.5S12 13 12 12s.059-3.5 2.5-3.5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/BarChart.js
function BarChart_extends() {
  BarChart_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return BarChart_extends.apply(this, arguments);
}



var BarChart = function BarChart(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, BarChart_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BarChart"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M0 22h24M22 2h-4v16h4V2zM6 6H2v12h4V6zm8 12h-4v-8h4v8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bar.js
function Bar_extends() {
  Bar_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bar_extends.apply(this, arguments);
}



var Bar = function Bar(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bar_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bar"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 5h16v18H7V5zm0 0h16V3c0-1.105-.895-2-1.994-2H8.994A1.992 1.992 0 0 0 7 3v2zM1 8.009C1 6.899 1.898 6 2.998 6H7v12H2.998A2.005 2.005 0 0 1 1 15.991V8.01zM11 8v10m4-10v10m4-10v10"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Basket.js
function Basket_extends() {
  Basket_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Basket_extends.apply(this, arguments);
}



var Basket = function Basket(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Basket_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Basket"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 12h20l-2 11H4L2 12zm18-4-6-7M4 8l6-7M1 8h22v4H1V8zm7 7v5m8-5v5m-4-5v5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Beacon.js
function Beacon_extends() {
  Beacon_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Beacon_extends.apply(this, arguments);
}



var Beacon = function Beacon(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Beacon_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Beacon"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.515.515A11.966 11.966 0 0 0 0 9c0 3.313 1.344 6.315 3.515 8.485l1.414-1.414A9.966 9.966 0 0 1 2 9a9.966 9.966 0 0 1 2.929-7.071L3.515.515zm2.828 2.828A7.978 7.978 0 0 0 4 9c0 2.209.897 4.21 2.343 5.657l1.414-1.414A5.978 5.978 0 0 1 6 9c0-1.657.67-3.156 1.757-4.243L6.343 3.343zM12 5a4 4 0 0 0-1 7.874V23h2V12.874A4.002 4.002 0 0 0 12 5zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7.657-5.657A7.978 7.978 0 0 1 20 9c0 2.209-.897 4.21-2.343 5.657l-1.414-1.414A5.978 5.978 0 0 0 18 9c0-1.657-.67-3.156-1.757-4.243l1.414-1.414zM20.485.515A11.965 11.965 0 0 1 24 9c0 3.313-1.344 6.315-3.515 8.485l-1.414-1.414A9.966 9.966 0 0 0 22 9a9.966 9.966 0 0 0-2.929-7.071L20.485.515z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bike.js
function Bike_extends() {
  Bike_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bike_extends.apply(this, arguments);
}



var Bike = function Bike(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bike_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bike"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 6h5m9 9L16 5h-3M9 9l-4 6h7c0-3 2-6 5-6H9zm0 0L7 6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bitcoin.js
function Bitcoin_extends() {
  Bitcoin_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bitcoin_extends.apply(this, arguments);
}



var Bitcoin = function Bitcoin(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bitcoin_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bitcoin"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#F90",
    fillRule: "evenodd",
    d: "M23.64 14.905c-1.602 6.429-8.114 10.342-14.544 8.738C2.669 22.041-1.244 15.528.359 9.1 1.962 2.67 8.473-1.244 14.902.36c6.43 1.603 10.342 8.116 8.739 14.546zm-6.349-4.613c.24-1.597-.977-2.456-2.64-3.028l.54-2.164-1.317-.328-.525 2.106a55.083 55.083 0 0 0-1.055-.248l.53-2.12-1.317-.328-.54 2.162a44.05 44.05 0 0 1-.84-.197l.001-.007-1.816-.453-.35 1.406s.977.224.956.238c.534.133.63.486.614.766l-.615 2.464c.037.01.085.023.137.044l-.139-.035-.86 3.453c-.066.162-.231.405-.604.312.013.02-.957-.239-.957-.239l-.654 1.508 1.713.427c.32.08.632.163.94.242l-.546 2.188 1.316.328.54-2.164c.359.097.707.187 1.049.272l-.538 2.155 1.317.328.544-2.184c2.246.425 3.934.253 4.645-1.778.573-1.635-.029-2.578-1.21-3.193.86-.198 1.508-.764 1.681-1.933zm-3.008 4.219c-.407 1.635-3.16.75-4.053.53l.723-2.9c.893.223 3.755.664 3.33 2.37zm.407-4.243c-.371 1.487-2.663.732-3.406.547l.656-2.63c.743.186 3.137.532 2.75 2.083z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/BladesHorizontal.js
function BladesHorizontal_extends() {
  BladesHorizontal_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return BladesHorizontal_extends.apply(this, arguments);
}



var BladesHorizontal = function BladesHorizontal(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, BladesHorizontal_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BladesHorizontal"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0 2h2v12H4V4zm0 14v2h2v-2H4zm7-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2zm0 2h2v12h-2V4zm0 14h2v2h-2v-2zm5-14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V4zm4 0h-2v12h2V4zm0 14h-2v2h2v-2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/BladesVertical.js
function BladesVertical_extends() {
  BladesVertical_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return BladesVertical_extends.apply(this, arguments);
}



var BladesVertical = function BladesVertical(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, BladesVertical_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BladesVertical"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v2h12V4H4zm14 0v2h2V4h-2zM2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zm2 0v2h12v-2H4zm16 2h-2v-2h2v2zM4 16a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4zm0 4v-2h12v2H4zm14 0h2v-2h-2v2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/BlockQuote.js
function BlockQuote_extends() {
  BlockQuote_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return BlockQuote_extends.apply(this, arguments);
}



var BlockQuote = function BlockQuote(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, BlockQuote_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BlockQuote"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M.78 8.89c0-3.07 1.53-4.3 4.3-4.34L5.38 6C3.78 6.17 3 7 3.1 8.31h1.44V12H.78zm5.9 0c0-3.07 1.53-4.3 4.3-4.34l.3 1.45C9.68 6.17 8.89 7 9 8.31h1.44V12H6.68zm10.26 6.22c0 3.07-1.53 4.3-4.3 4.34L12.35 18c1.6-.16 2.39-1 2.28-2.3h-1.45V12h3.76zm5.9 0c0 3.07-1.53 4.3-4.3 4.34l-.3-1.45c1.6-.16 2.39-1 2.28-2.3h-1.44V12h3.76z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Blog.js
function Blog_extends() {
  Blog_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Blog_extends.apply(this, arguments);
}



var Blog = function Blog(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Blog_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Blog"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM5 1c9.925 0 18 8.075 18 18m-5 0c0-7.168-5.832-13-13-13m8 13c0-4.411-3.589-8-8-8m-3 0v8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bluetooth.js
function Bluetooth_extends() {
  Bluetooth_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bluetooth_extends.apply(this, arguments);
}



var Bluetooth = function Bluetooth(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bluetooth_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bluetooth"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m7 7 10 9-5 4V4l5 4-10 8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bold.js
function Bold_extends() {
  Bold_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bold_extends.apply(this, arguments);
}



var Bold = function Bold(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bold_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bold"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M14 11.57a7.93 7.93 0 0 1 3.11 1.25 3.32 3.32 0 0 1 1.28 2.71A3.58 3.58 0 0 1 17 18.42a7.9 7.9 0 0 1-5 1.39H4.07v-.42a3.57 3.57 0 0 0 1.46-.2 1.17 1.17 0 0 0 .54-.52 4.75 4.75 0 0 0 .15-1.58V7a4.81 4.81 0 0 0-.15-1.6 1.13 1.13 0 0 0-.54-.52 3.67 3.67 0 0 0-1.46-.2v-.42h7.45a10.57 10.57 0 0 1 3.78.48 3.94 3.94 0 0 1 1.75 1.42 3.52 3.52 0 0 1 .64 2 2.86 2.86 0 0 1-.81 2A5.84 5.84 0 0 1 14 11.57zm-4.17.58v5.56a1.27 1.27 0 0 0 .32.93 1.27 1.27 0 0 0 .93.31 3.57 3.57 0 0 0 1.69-.41A2.79 2.79 0 0 0 14 17.37a3.61 3.61 0 0 0 .41-1.73 3.81 3.81 0 0 0-.5-2 2.72 2.72 0 0 0-1.39-1.21 7.52 7.52 0 0 0-2.67-.28zm0-.89a5.92 5.92 0 0 0 2.4-.37 2.73 2.73 0 0 0 1.19-1 3.17 3.17 0 0 0 .41-1.7 3.18 3.18 0 0 0-.41-1.69 2.59 2.59 0 0 0-1.16-1 6.2 6.2 0 0 0-2.43-.33z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Book.js
function Book_extends() {
  Book_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Book_extends.apply(this, arguments);
}



var Book = function Book(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Book_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Book"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 1v10l3-2 3 2V1M5.5 18a2.5 2.5 0 1 0 0 5H22M3 20.5v-17A2.5 2.5 0 0 1 5.5 1H21v17.007H5.492M20.5 18a2.5 2.5 0 1 0 0 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bookmark.js
function Bookmark_extends() {
  Bookmark_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bookmark_extends.apply(this, arguments);
}



var Bookmark = function Bookmark(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bookmark_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bookmark"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 1v21l7-5 7 5V1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/BottomCorner.js
function BottomCorner_extends() {
  BottomCorner_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return BottomCorner_extends.apply(this, arguments);
}



var BottomCorner = function BottomCorner(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, BottomCorner_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BottomCorner"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 20h12V8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Braille.js
function Braille_extends() {
  Braille_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Braille_extends.apply(this, arguments);
}



var Braille = function Braille(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Braille_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Braille"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10-10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Briefcase.js
function Briefcase_extends() {
  Briefcase_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Briefcase_extends.apply(this, arguments);
}



var Briefcase = function Briefcase(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Briefcase_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Briefcase"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 6h22v15H1V6zm5 0v15M18 6v15M8 6V3h8v3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Brush.js
function Brush_extends() {
  Brush_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Brush_extends.apply(this, arguments);
}



var Brush = function Brush(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Brush_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Brush"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9.312 11.73a5.001 5.001 0 0 0-5.362 1.12c-1.953 1.952-1.414 8.485-1.414 8.485s6.532.538 8.485-1.415a5.001 5.001 0 0 0 1.12-5.362L22.334 4.364a1.997 1.997 0 0 0 0-2.828 1.995 1.995 0 0 0-2.828 0L9.312 11.729zm1.002-1.617 1.838 1.838 1.697 1.697"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bug.js
function Bug_extends() {
  Bug_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bug_extends.apply(this, arguments);
}



var Bug = function Bug(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bug_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bug"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M23 20c-1.38-2.09-3-3-4-3M5 17c-1 0-2.62.91-4 3M19 9c3 0 4-3 4-3M1 6s1 3 4 3m14 4h5-5zM5 13H0h5zm7 10V12v11zm0 0c-4 0-7-3-7-7V9s3-2.012 7-2c4 .012 7 2 7 2v7c0 4-3 7-7 7zM7 8V6c0-2.76 2.24-5 5-5s5 2.24 5 5v2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bundle.js
function Bundle_extends() {
  Bundle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bundle_extends.apply(this, arguments);
}



var Bundle = function Bundle(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bundle_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bundle"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 14H7h10zm0-11h6v10h-6M1 13v4h6m10 0h6v-4M1 17v4h6m16-4v4h-6M7 22h10V2H7v20zm0-9H1V3h6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Bus.js
function Bus_extends() {
  Bus_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Bus_extends.apply(this, arguments);
}



var Bus = function Bus(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Bus_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Bus"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 12h18v8H3v-8zm0-8c0-1.105.893-2 1.995-2h14.01C20.107 2 21 2.887 21 4v8H3V4zm0 16h3v2.001a.996.996 0 0 1-.999.999H3.999A.996.996 0 0 1 3 22.001V20zm15 0h3v2.001a.996.996 0 0 1-.999.999h-1.002a.996.996 0 0 1-.999-.999V20zM7 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 6v6M1 5v8m22-8v8m-13 3h4M3 6h18"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/BusinessService.js
function BusinessService_extends() {
  BusinessService_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return BusinessService_extends.apply(this, arguments);
}



var BusinessService = function BusinessService(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, BusinessService_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "BusinessService"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 23H1V5h22v18h-7M8 5V1h8v4M9 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.008 1.876a4 4 0 1 0-1.244-7.193m-5.062 5.043A4 4 0 0 0 10 23a4 4 0 0 0 1.401-7.748"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cafeteria.js
function Cafeteria_extends() {
  Cafeteria_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cafeteria_extends.apply(this, arguments);
}



var Cafeteria = function Cafeteria(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cafeteria_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cafeteria"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 1v7c0 1.657-1.347 3-2.997 3H5.997A3.002 3.002 0 0 1 3 8V1m3 6V1m3 6V1M6 11v10.504C6 22.33 6.666 23 7.5 23c.828 0 1.5-.68 1.5-1.496V11m6 7v3.5a1.5 1.5 0 1 0 3-.005V15s3 0 3-3V7c0-3-2-5-6-5v16z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Calculator.js
function Calculator_extends() {
  Calculator_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Calculator_extends.apply(this, arguments);
}



var Calculator = function Calculator(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Calculator_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Calculator"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 23H2V1h20v22zm-6-6h2v2h-2v-2zm-5 0h2v2h-2v-2zm5-5h2v2h-2v-2zm-5 0h2v2h-2v-2zm-5 5h2v2H6v-2zm0-5h2v2H6v-2zm12-3H6V5h12v4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Calendar.js
function Calendar_extends() {
  Calendar_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Calendar_extends.apply(this, arguments);
}



var Calendar = function Calendar(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Calendar_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Calendar"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 5h20v17H2V5zm16 0V1M6 5V1m-4 9h20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Camera.js
function Camera_extends() {
  Camera_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Camera_extends.apply(this, arguments);
}



var Camera = function Camera(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Camera_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Camera"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 21V7h5l2-4h8l2 4h5v14H1zm11-3a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Capacity.js
function Capacity_extends() {
  Capacity_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Capacity_extends.apply(this, arguments);
}



var Capacity = function Capacity(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Capacity_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Capacity"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M1 19h22V5H1v14zm3-3h3V8H4v8zm6 0h3V8h-3v8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Car.js
function Car_extends() {
  Car_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Car_extends.apply(this, arguments);
}



var Car = function Car(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Car_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Car"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 10.997c0-.55.44-.997 1.002-.997h19.996c.553 0 1.002.453 1.002.997v6.006c0 .55-.44.997-1.002.997H2.002A1.004 1.004 0 0 1 1 17.003v-6.006zM6 2h12l4 8H2l4-8zm6 8.5L15 5M3 18h3v2.99c0 .558-.443 1.01-.999 1.01H3.999A.999.999 0 0 1 3 20.99V18zm15 0h3v2.99c0 .558-.443 1.01-.999 1.01h-1.002A.999.999 0 0 1 18 20.99V18zM5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-7-2v2m2-2v2m-4-2v2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CaretDownFill.js
function CaretDownFill_extends() {
  CaretDownFill_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CaretDownFill_extends.apply(this, arguments);
}



var CaretDownFill = function CaretDownFill(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CaretDownFill_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretDownFill"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M18 9H6l6 6 6-6z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CaretDown.js
function CaretDown_extends() {
  CaretDown_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CaretDown_extends.apply(this, arguments);
}



var CaretDown = function CaretDown(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CaretDown_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretDown"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 8 12 20 2 8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CaretLeftFill.js
function CaretLeftFill_extends() {
  CaretLeftFill_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CaretLeftFill_extends.apply(this, arguments);
}



var CaretLeftFill = function CaretLeftFill(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CaretLeftFill_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretLeftFill"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M15 18V6l-6 6z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CaretNext.js
function CaretNext_extends() {
  CaretNext_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CaretNext_extends.apply(this, arguments);
}



var CaretNext = function CaretNext(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CaretNext_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretNext"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m6 2 12 10L6 22z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CaretPrevious.js
function CaretPrevious_extends() {
  CaretPrevious_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CaretPrevious_extends.apply(this, arguments);
}



var CaretPrevious = function CaretPrevious(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CaretPrevious_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretPrevious"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 2 6 12l12 10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CaretRightFill.js
function CaretRightFill_extends() {
  CaretRightFill_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CaretRightFill_extends.apply(this, arguments);
}



var CaretRightFill = function CaretRightFill(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CaretRightFill_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretRightFill"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M9 6v12l6-6z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CaretUpFill.js
function CaretUpFill_extends() {
  CaretUpFill_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CaretUpFill_extends.apply(this, arguments);
}



var CaretUpFill = function CaretUpFill(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CaretUpFill_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretUpFill"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M6 15h12l-6-6-6 6z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CaretUp.js
function CaretUp_extends() {
  CaretUp_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CaretUp_extends.apply(this, arguments);
}



var CaretUp = function CaretUp(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CaretUp_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretUp"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 16 12 4 2 16z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cart.js
function Cart_extends() {
  Cart_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cart_extends.apply(this, arguments);
}



var Cart = function Cart(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cart_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cart"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 5h17l-2 9H7L4 2H0m7 12 1 4h13m-2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM9 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CatalogOption.js
function CatalogOption_extends() {
  CatalogOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CatalogOption_extends.apply(this, arguments);
}



var CatalogOption = function CatalogOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CatalogOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CatalogOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5.5 18a2.5 2.5 0 1 0 0 5H22M3 20.5v-17A2.5 2.5 0 0 1 5.5 1H21v17.007H5.492M20.5 18a2.5 2.5 0 1 0 0 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Catalog.js
function Catalog_extends() {
  Catalog_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Catalog_extends.apply(this, arguments);
}



var Catalog = function Catalog(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Catalog_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Catalog"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 6 1 4.5v13.943L12 23l11-4.557V4l-4 2M5 16V2l7 3 7-3v14l-7 3-7-3zm6.95-11v14"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Centos.js
function Centos_extends() {
  Centos_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Centos_extends.apply(this, arguments);
}



var Centos = function Centos(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Centos_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Centos"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#7E2F76",
    fillRule: "evenodd",
    d: "M5.161 6.25 3.249 8.164V3.227h4.935L6.24 5.172l-.147.146.147.147 4.514 4.516v.738h-.83L5.457 6.251l-.15-.15-.146.15zm5.594 3.142V3.227H8.772l-2.09 2.091 4.073 4.074zM5.307 6.693 3.25 8.753v1.966h6.083L5.307 6.693zm7.964 2.67 4.044-4.045-2.119-2.12h-1.925v6.165zm4.636-4.045-.15.147-4.486 4.49v.764h.786l4.477-4.478.146-.146.15.146 1.96 1.96V3.2h-5.005l1.973 1.973.15.146zm-6.736-2.51v7l.828.828.856-.856V2.782h1.924L12 0 9.192 2.807h1.98zm3.478 7.911h6.141V8.794l-2.11-2.11-4.031 4.035zm-4.025 1.292-.872-.872h-6.92V9.17L0 12.002l2.832 2.832V12.81h6.993l.8-.799zm2.647 2.68v6.056h1.964l2.045-2.046-4.009-4.01zM5.317 17.32l4.092-4.093h-6.16v2.024l2.068 2.069zm13.364 0 2.11-2.11v-1.983h-6.2l4.09 4.093zm2.529-2.53 2.787-2.788-2.787-2.788v1.925h-6.98l-.863.863.808.808h7.035v1.98zm-2.53 3.118-.146-.146L14 13.227h-.729v.875l4.452 4.452.146.147-.146.15-1.897 1.896h4.964v-4.945l-1.96 1.96-.15.146zm-5.825 3.256v-6.89l-.872-.872-.799.799v6.963h-2.04L11.984 24l2.835-2.836h-1.964zm-6.762-2.463.147-.147 4.527-4.528v-.8h-.77l-4.534 4.536-.146.146-.147-.146-1.92-1.922v4.907h4.887L6.24 18.85l-.147-.15zm4.674-4.083L6.682 18.7l2.046 2.046h2.04v-6.13z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Certificate.js
function Certificate_extends() {
  Certificate_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Certificate_extends.apply(this, arguments);
}



var Certificate = function Certificate(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Certificate_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Certificate"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 0h18v4.083a6.002 6.002 0 0 1 3 10.39v9.396l-1.555-1.037L18 21.202l-2.445 1.63L14 23.87V20H1V0zm13 18v-3.528a6.002 6.002 0 0 1 3-10.39V2.001H3v16h11zm2-2.341v4.472l1.445-.963.555-.37.555.37L20 20.13v-4.47a5.99 5.99 0 0 1-2 .34 5.99 5.99 0 0 1-2-.341zM18 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-7 3H5V7h6v2zm-6 3h5v-2H5v2zm2 3H5v-2h2v2zM5 6h2V4H5v2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Channel.js
function Channel_extends() {
  Channel_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Channel_extends.apply(this, arguments);
}



var Channel = function Channel(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Channel_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Channel"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 9h20v13H2V9zm19-7-8 7h-2L3 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ChapterAdd.js
function ChapterAdd_extends() {
  ChapterAdd_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ChapterAdd_extends.apply(this, arguments);
}



var ChapterAdd = function ChapterAdd(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ChapterAdd_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ChapterAdd"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 14V5h14v15h-8m8-4h4V1H9v4M5 16v8m4-4H1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ChapterNext.js
function ChapterNext_extends() {
  ChapterNext_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ChapterNext_extends.apply(this, arguments);
}



var ChapterNext = function ChapterNext(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ChapterNext_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ChapterNext"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 3.5V20l9-6v6l11-8-11-8v6L1 3.5zM22 2v20V2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ChapterPrevious.js
function ChapterPrevious_extends() {
  ChapterPrevious_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ChapterPrevious_extends.apply(this, arguments);
}



var ChapterPrevious = function ChapterPrevious(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ChapterPrevious_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ChapterPrevious"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M23 3.5V20l-9-6v6L3 12l11-8v6l9-6.5zM2 2v20V2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ChatOption.js
function ChatOption_extends() {
  ChatOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ChatOption_extends.apply(this, arguments);
}



var ChatOption = function ChatOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ChatOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ChatOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 7V1h14v10h-3v5l-5-4M1 7h14v11H9l-5 4v-4H1V7z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Chat.js
function Chat_extends() {
  Chat_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Chat_extends.apply(this, arguments);
}



var Chat = function Chat(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Chat_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Chat"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 1H5a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12l6 5V5a4 4 0 0 0-4-4zm0 6H6m13 4h-9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CheckboxSelected.js
function CheckboxSelected_extends() {
  CheckboxSelected_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CheckboxSelected_extends.apply(this, arguments);
}



var CheckboxSelected = function CheckboxSelected(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CheckboxSelected_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CheckboxSelected"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 2h20v20H2V2zm3 11 5 4 9-11"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Checkbox.js
function Checkbox_extends() {
  Checkbox_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Checkbox_extends.apply(this, arguments);
}



var Checkbox = function Checkbox(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Checkbox_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Checkbox"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 2h20v20H2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Checkmark.js
function Checkmark_extends() {
  Checkmark_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Checkmark_extends.apply(this, arguments);
}



var Checkmark = function Checkmark(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Checkmark_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Checkmark"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2 14 7 6L22 4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Chrome.js
function Chrome_extends() {
  Chrome_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Chrome_extends.apply(this, arguments);
}



var Chrome = function Chrome(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Chrome_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Chrome"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#4285F4",
    d: "M11.973 16.414A4.32 4.32 0 0 1 7.66 12.1a4.32 4.32 0 0 1 4.314-4.315 4.32 4.32 0 0 1 4.315 4.315 4.32 4.32 0 0 1-4.315 4.314z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#4AAE48",
    d: "M13.791 17.181a5.507 5.507 0 0 1-5.38-.926 5.496 5.496 0 0 1-1.718-2.505l-.002-.006L1.936 5.51A11.892 11.892 0 0 0 .23 14.35a11.896 11.896 0 0 0 5.08 7.627 11.894 11.894 0 0 0 4.557 1.84l3.924-6.635z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#EA3939",
    d: "M22.76 6.707a12.08 12.08 0 0 0-20.185-2.25l4.016 6.956a5.393 5.393 0 0 1 5.274-4.706H22.76z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FED14B",
    d: "M11.926 24c3.01 0 5.891-1.129 8.11-3.178a11.932 11.932 0 0 0 3.816-7.893 12.05 12.05 0 0 0-.744-5.144h-7.856a5.506 5.506 0 0 1 2.09 4.34 5.529 5.529 0 0 1-1.182 3.381l-5.008 8.47c.258.016.518.024.774.024z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CircleAlert.js
function CircleAlert_extends() {
  CircleAlert_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CircleAlert_extends.apply(this, arguments);
}



var CircleAlert = function CircleAlert(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CircleAlert_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CircleAlert"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-11 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm1-15v8h-2V6h2zm0 10v2h-2v-2h2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CircleInformation.js
function CircleInformation_extends() {
  CircleInformation_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CircleInformation_extends.apply(this, arguments);
}



var CircleInformation = function CircleInformation(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CircleInformation_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CircleInformation"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-12v8m0-12v2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CirclePlay.js
function CirclePlay_extends() {
  CirclePlay_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CirclePlay_extends.apply(this, arguments);
}



var CirclePlay = function CirclePlay(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CirclePlay_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CirclePlay"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-2.5-6.5 6-3.5-6-3.5v7zm1-2 2-1.5-2-1.5v3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CircleQuestion.js
function CircleQuestion_extends() {
  CircleQuestion_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CircleQuestion_extends.apply(this, arguments);
}



var CircleQuestion = function CircleQuestion(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CircleQuestion_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CircleQuestion"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-7v-1c0-1 0-1.5 1-2s2-1 2-2.5c0-1-1-2.5-3-2.5s-3 1.264-3 3m3 6v2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ClearOption.js
function ClearOption_extends() {
  ClearOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ClearOption_extends.apply(this, arguments);
}



var ClearOption = function ClearOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ClearOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ClearOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 4a2 2 0 1 1 4 0v6h6v4H4v-4h6V4zM4 14h16v8H4v-8zm12 8v-5.635M8 22v-5.635M12 22v-5.635"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Clear.js
function Clear_extends() {
  Clear_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Clear_extends.apply(this, arguments);
}



var Clear = function Clear(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Clear_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Clear"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM5 5l14 14"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cli.js
function Cli_extends() {
  Cli_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cli_extends.apply(this, arguments);
}



var Cli = function Cli(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cli_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cli"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h22v22H1V1zm0 4h22M5 1v4m6 11h8M5 10l3 3-3 3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Clipboard.js
function Clipboard_extends() {
  Clipboard_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Clipboard_extends.apply(this, arguments);
}



var Clipboard = function Clipboard(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Clipboard_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Clipboard"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 3h5v20H3V3h5m0-2h8v5H8V1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Clock.js
function Clock_extends() {
  Clock_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Clock_extends.apply(this, arguments);
}



var Clock = function Clock(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Clock_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Clock"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm10-5a1 1 0 1 0-2 0v5a1 1 0 0 0 .4.8l4 3a1 1 0 0 0 1.2-1.6L13 11.5V7z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Clone.js
function Clone_extends() {
  Clone_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Clone_extends.apply(this, arguments);
}



var Clone = function Clone(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Clone_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Clone"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 23h16V7H7v16zM17 4V1h-3M1 14v3h3m-3-5V6v6zM4 1H1v3m5-3h6-6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Close.js
function Close_extends() {
  Close_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Close_extends.apply(this, arguments);
}



var Close = function Close(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Close_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Close"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m3 3 18 18M3 21 21 3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ClosedCaption.js
function ClosedCaption_extends() {
  ClosedCaption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ClosedCaption_extends.apply(this, arguments);
}



var ClosedCaption = function ClosedCaption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ClosedCaption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ClosedCaption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 12c0-7 1.5-8 11-8s11 1 11 8-1.5 8-11 8-11-1-11-8zm4.25 2c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2-1.23 0-2.229-.75-2.229-2v-4C5.5 8.75 6.5 8 7.75 8s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2v4zm8 0c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2-1.23 0-2.229-.75-2.229-2v-4c-.021-1.25.979-2 2.229-2s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2v4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CloudComputer.js
function CloudComputer_extends() {
  CloudComputer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CloudComputer_extends.apply(this, arguments);
}



var CloudComputer = function CloudComputer(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CloudComputer_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CloudComputer"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 6V5c0-3 1.5-4 4-4h4c2.5 0 4 1.5 4 4v1c3 0 5 2 5 5s-2 5-5 5M14 6H6c-3 0-5 1.5-5 5s2 5 5 5m2 3h8v-7H8v7zm4 0v4-4zm-3 4h6-6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CloudDownload.js
function CloudDownload_extends() {
  CloudDownload_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CloudDownload_extends.apply(this, arguments);
}



var CloudDownload = function CloudDownload(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CloudDownload_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CloudDownload"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 17A5 5 0 0 1 6 7h6M6 7V6c0-3 2-4 5-4h2c3 0 5 1 5 4v1a5 5 0 0 1 0 10m-6-5v9m-4-4 4 4 4-4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CloudSoftware.js
function CloudSoftware_extends() {
  CloudSoftware_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CloudSoftware_extends.apply(this, arguments);
}



var CloudSoftware = function CloudSoftware(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CloudSoftware_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CloudSoftware"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 23h8V12H8v11zm0-7h8m-4-4v4M6 6V5c0-3 1.5-4 4-4h4c2.5 0 4 1.5 4 4v1c3 0 5 2 5 5s-2 5-5 5M14 6H6c-3 0-5 1.5-5 5s2 5 5 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CloudUpload.js
function CloudUpload_extends() {
  CloudUpload_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CloudUpload_extends.apply(this, arguments);
}



var CloudUpload = function CloudUpload(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CloudUpload_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CloudUpload"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 17A5 5 0 0 1 6 7h6M6 7V6c0-3 2-4 5-4h2c3 0 5 1 5 4v1a5 5 0 0 1 0 10m-6-4v9m-4-6 3.965-4.035L16 16"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cloud.js
function Cloud_extends() {
  Cloud_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cloud_extends.apply(this, arguments);
}



var Cloud = function Cloud(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cloud_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cloud"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 17v1c0 3-2 4-5 4h-2c-3 0-5-1-5-4v-1A5 5 0 0 1 6 7h6M6 7V6c0-3 2-4 5-4h2c3 0 5 1 5 4v1a5 5 0 0 1 0 10h-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cloudlinux.js
function Cloudlinux_extends() {
  Cloudlinux_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cloudlinux_extends.apply(this, arguments);
}



var Cloudlinux = function Cloudlinux(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cloudlinux_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cloudlinux"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#5875B8",
    fillRule: "evenodd",
    d: "M14.068 5.79c.05.046.095.092.142.139.314.323.609.674.881 1.055l.001.001c.266.381.51.792.744 1.234.046-1.496-.243-2.81-.914-4.036-.307-.563-.618-1.141-1.14-1.532-.749-.562-1.596-.944-2.502-1.185a8.126 8.126 0 0 0-1.242-.229C6.917.809 3.77 2.365 2.093 5.477c.188.05.268-.111.376-.198 3.53-2.871 8.406-2.579 11.539.451l.06.06zm-3.528 10.9c-.575-.335-1.099-.74-1.638-1.185.545 1.559 2.637 3.432 4.421 3.92-.073-.06-.14-.127-.22-.178-.908-.585-1.654-1.338-2.29-2.206-.087-.12-.153-.282-.273-.351zM23.593 9.6c.015-.065.018-.123-.068-.137l-.013.138-.028.327a8.633 8.633 0 0 1-10.866 7.614c-.174-.047-.346-.097-.519-.145 1.151 1.294 2.568 2.07 4.244 2.387.563.106 1.108.09 1.662-.06 2.074-.567 3.706-1.75 4.812-3.583 1.235-2.048 1.52-4.243.776-6.542zM14.47 20.53c-2.821-.515-4.856-2.149-6.25-4.638a7.351 7.351 0 0 0 1.16 4.367c.256.403.498.832.908 1.1 2.679 1.743 5.467 1.921 8.32.483 1.49-.75 2.59-1.927 3.324-3.44-2.166 1.853-4.644 2.641-7.462 2.128zM9.766.5c5.73.51 9.29 5.722 7.69 11.262-.018.063-.062.127.047.168 1.308-1.283 2.121-2.818 2.357-4.65a2.62 2.62 0 0 0-.04-.935C19.26 3.91 17.88 2.08 15.678.922c-1.922-1.01-3.952-1.2-6.038-.523-.065-.012-.127-.017-.137.074l.141.013c.04.006.081.012.122.016zm6.969 11.226-.002-.038-.002-.016-.006.016.01.038zm3.816-2.163c-.515 2.819-2.154 4.848-4.747 6.253 1.576.038 2.942-.281 4.202-1.015.508-.295 1.037-.583 1.382-1.076 2.771-3.958 1.356-9.512-2.99-11.658 1.876 2.169 2.671 4.661 2.153 7.496zm-1.094 1.196a.248.248 0 0 0-.155.105 8.36 8.36 0 0 1-2.433 2.46.53.53 0 0 0-.174.169c-.315.577-.731 1.082-1.121 1.608 1.866-.936 3.163-2.38 3.883-4.342zM16.36 5.667c-.117.098-.041.179-.024.247.235.94.335 1.904.153 2.844-.196 1.014.162 1.945.242 2.915.247-.55.329-1.137.388-1.727.15-1.492-.115-2.912-.76-4.279zm-1.836 10.702a.692.692 0 0 0-.323.01c-.58.156-1.176.228-1.772.293-.036-.017-.077-.03-.086.021-.003.014.052.037.08.056 1.993.643 3.93.468 5.854-.37-.053-.036-.073-.061-.096-.063a.378.378 0 0 0-.121.01 8.324 8.324 0 0 1-3.536.043zm-5.65-.855a2.158 2.158 0 0 1-.034-.02c.009.01.018.017.028.026l.006-.006zm-.486-6.56c.037-.014.076-.034.046-.077-.008-.01-.063.011-.097.018a.41.41 0 0 0 .05.058zM5.496 21.848c.034.056.073.1.143.048l-.087-.106a.448.448 0 0 0-.056.058zM10.65 4.51c.967.61 1.825 1.352 2.447 2.307.347.534.73.595 1.3.4-1.003-1.293-2.218-2.219-3.747-2.707zM8.337 8.895c-1.863.954-3.11 2.448-3.877 4.4.063-.011.095-.008.112-.023a.38.38 0 0 0 .079-.093 8.322 8.322 0 0 1 2.47-2.53.69.69 0 0 0 .221-.235c.3-.521.67-.993 1.046-1.46a.41.41 0 0 1-.05-.059zM7.6 18.103a.25.25 0 0 0 .036-.184 8.364 8.364 0 0 1-.02-3.46.53.53 0 0 0 .004-.242c-.186-.63-.248-1.282-.345-1.93-.658 1.982-.554 3.92.325 5.816zM6.09 7.61c1.056-.229 2.117-.224 3.18-.06.147.024.308.091.441.056.644-.17 1.3-.255 1.997-.32-1.488-.718-4.292-.563-5.898.354.094-.01.19-.01.28-.03zm-.538 14.18-.212-.25a8.633 8.633 0 0 1 2.3-13.068c.155-.09.313-.176.47-.264-1.73-.101-3.281.352-4.69 1.313-.472.323-.847.72-1.132 1.218-1.066 1.867-1.384 3.857-.87 5.936.576 2.321 1.926 4.074 4.078 5.174a.448.448 0 0 1 .056-.058zm2.119-2.068c-1.63-2.357-1.906-4.951-1.065-7.779-1.141 1.09-1.881 2.28-2.254 3.69-.15.568-.321 1.145-.216 1.738.839 4.759 5.767 7.686 10.357 6.13-2.86-.208-5.184-1.408-6.822-3.779zM.445 14.447C-.105 12.86-.16 11.25.363 9.664c1-3.033 3.098-4.879 6.225-5.54.479-.101.954.032 1.419.136a7.355 7.355 0 0 1 3.908 2.267c-2.745-.774-5.34-.49-7.697 1.14-2.356 1.63-3.551 3.94-3.773 6.78z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cluster.js
function Cluster_extends() {
  Cluster_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cluster_extends.apply(this, arguments);
}



var Cluster = function Cluster(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cluster_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cluster"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 9h8V1H8v8zM1 23h8v-8H1v8zm14 0h8v-8h-8v8zM5 15l3-6-3 6zm5 4h4-4zm6-10 3 6-3-6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CoatCheck.js
function CoatCheck_extends() {
  CoatCheck_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CoatCheck_extends.apply(this, arguments);
}



var CoatCheck = function CoatCheck(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CoatCheck_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CoatCheck"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 11 10.155 6.462c.467.297.845.981.845 1.547v1.982A1 1 0 0 1 21.998 22H2.002A1 1 0 0 1 1 20.99v-1.98c0-.558.379-1.251.845-1.548L12 11zm3-6a3 3 0 0 0-6 0c0 .932.411 1.802 1.09 2.314C11 8 12 8 12 9.5V11"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CodeSandbox.js
function CodeSandbox_extends() {
  CodeSandbox_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CodeSandbox_extends.apply(this, arguments);
}



var CodeSandbox = function CodeSandbox(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CodeSandbox_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CodeSandbox"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#444",
    strokeWidth: "2",
    d: "m12 1.5-9 5v11l9 5 9-5v-11l-9-5zm0 21v-11m9-5-9 5m0 0-9-5m18 11V12l-4.5 2.5V20l4.5-2.5zm-18 0V12l4.5 2.5V20L3 17.5zm9-16L7.5 4 12 6.5 16.5 4 12 1.5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Code.js
function Code_extends() {
  Code_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Code_extends.apply(this, arguments);
}



var Code = function Code(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Code_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Code"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m9 22 6-20m2 15 5-5-5-5M7 17l-5-5 5-5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Codepen.js
function Codepen_extends() {
  Codepen_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Codepen_extends.apply(this, arguments);
}



var Codepen = function Codepen(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Codepen_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Codepen"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "M12 22.03c-5.53 0-10.03-4.5-10.03-10.03C1.97 6.47 6.47 1.97 12 1.97c5.53 0 10.03 4.5 10.03 10.03 0 5.53-4.5 10.03-10.03 10.03M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.372-12-12-12m6.144 13.067L16.55 12l1.595-1.067v2.134zm-5.506 4.524v-2.975l2.764-1.849 2.232 1.493-4.996 3.33zM12 13.509 9.745 12 12 10.492 14.255 12 12 13.51zm-.638 4.082L6.366 14.26l2.232-1.493 2.764 1.85v2.974zm-5.506-6.658L7.45 12l-1.595 1.067v-2.134zm5.506-4.523v2.974l-2.764 1.85L6.366 9.74l4.996-3.33zm1.276 0 4.996 3.33-2.232 1.493-2.764-1.85V6.41zm6.776 3.246-.005-.027a.624.624 0 0 0-.011-.054l-.01-.03a.617.617 0 0 0-.052-.12l-.019-.03a.568.568 0 0 0-.08-.101l-.026-.025a.728.728 0 0 0-.036-.03l-.029-.022-.01-.008-6.782-4.521a.637.637 0 0 0-.708 0l-6.782 4.52-.01.009-.03.022a.578.578 0 0 0-.035.03c-.01.008-.017.016-.026.025a.553.553 0 0 0-.099.13.594.594 0 0 0-.021.043l-.014.03c-.007.016-.012.032-.017.047l-.01.031c-.004.018-.008.036-.01.054l-.006.027a.613.613 0 0 0-.006.083v4.522a.57.57 0 0 0 .006.083l.005.028.011.053.01.031c.005.016.01.031.017.047l.014.03a.755.755 0 0 0 .067.111.422.422 0 0 0 .053.062l.026.025a.545.545 0 0 0 .065.052l.01.008 6.782 4.522a.637.637 0 0 0 .708 0l6.782-4.522.01-.008a.711.711 0 0 0 .065-.052c.01-.008.017-.016.026-.025a.611.611 0 0 0 .032-.034l.021-.028a.568.568 0 0 0 .027-.039l.019-.029a.574.574 0 0 0 .021-.042l.014-.031a.443.443 0 0 0 .017-.047l.01-.03a.628.628 0 0 0 .01-.054l.006-.028a.66.66 0 0 0 .006-.083V9.739a.648.648 0 0 0-.006-.083z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Coffee.js
function Coffee_extends() {
  Coffee_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Coffee_extends.apply(this, arguments);
}



var Coffee = function Coffee(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Coffee_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Coffee"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    d: "M6.264 20.192c4.096 2.868 8.602-.081 11.47-4.177 2.868-4.095 4.097-9.338.002-12.206-4.096-2.868-8.602.08-11.47 4.176-2.868 4.096-4.098 9.339-.002 12.207z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#000",
    d: "M16.589 5.447c-1.393.246-5.326 2.375-5.408 5.98-.083 3.604-2.787 6.594-3.77 7.126 1.803.042 5.326-2.375 5.408-5.98.083-3.604 2.786-6.594 3.77-7.126z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Columns.js
function Columns_extends() {
  Columns_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Columns_extends.apply(this, arguments);
}



var Columns = function Columns(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Columns_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Columns"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 2v20V2zm-5 0v20V2zM7 2v20V2zM2 22h20V2H2v20z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Command.js
function Command_extends() {
  Command_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Command_extends.apply(this, arguments);
}



var Command = function Command(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Command_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Command"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 9H5.5C3.5 9 2 7.5 2 5.5S3.5 2 5.5 2 9 3.5 9 5.5v13c0 2-1.5 3.5-3.5 3.5S2 20.5 2 18.5 3.5 15 5.5 15h13c2 0 3.5 1.5 3.5 3.5S20.5 22 18.5 22 15 20.5 15 18.5v-13c0-2 1.5-3.5 3.5-3.5S22 3.5 22 5.5 20.5 9 18.5 9H12z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Compare.js
function Compare_extends() {
  Compare_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Compare_extends.apply(this, arguments);
}



var Compare = function Compare(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Compare_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Compare"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M11 7H1v10h6V8m4-3v4l2-2-2-2zm0 12 2 2v-4l-2 2zm2 0h10V7h-6v9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Compass.js
function Compass_extends() {
  Compass_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Compass_extends.apply(this, arguments);
}



var Compass = function Compass(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Compass_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Compass"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-2-12 5-1-1 5-5 1 1-5zm2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Compliance.js
function Compliance_extends() {
  Compliance_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Compliance_extends.apply(this, arguments);
}



var Compliance = function Compliance(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Compliance_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Compliance"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#231F20",
    strokeWidth: "2",
    d: "M8 6h8V1H8v5zm8-3h5v20H3V3h5m0 11 3 3 6-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Configure.js
function Configure_extends() {
  Configure_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Configure_extends.apply(this, arguments);
}



var Configure = function Configure(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Configure_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Configure"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 15c4.009-.065 7-3.033 7-7 0-3.012-.997-2.015-2-1-.991.98-3 3-3 3l-4-4s2.02-2.009 3-3c1.015-1.003 1.015-2-1-2-3.967 0-6.947 2.991-7 7 .042.976 0 3 0 3-1.885 1.897-4.34 4.353-6 6-2.932 2.944 1.056 6.932 4 4 1.65-1.662 4.113-4.125 6-6 0 0 2.024-.042 3 0z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Connect.js
function Connect_extends() {
  Connect_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Connect_extends.apply(this, arguments);
}



var Connect = function Connect(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Connect_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Connect"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 21c-2.5 2.5-5 2-7 0s-2.5-4.5 0-7l3-3 7 7-3 3zm4-18c2.5-2.5 5-2 7.001 0 2.001 2 2.499 4.5 0 7l-3 3L11 6l3-3zm-3 7-2.5 2.5L11 10zm3 3-2.5 2.5L14 13z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Connectivity.js
function Connectivity_extends() {
  Connectivity_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Connectivity_extends.apply(this, arguments);
}



var Connectivity = function Connectivity(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Connectivity_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Connectivity"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 8v4l3 3 6-6-4-4H5L2.5 3M17 7l3 3v7m-7-6 3 3m-5-1 3 3m-7 1 3 3h10"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Console.js
function Console_extends() {
  Console_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Console_extends.apply(this, arguments);
}



var Console = function Console(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Console_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Console"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7zm5-3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm0 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm1.707-9.707a1 1 0 1 0-1.414 1.414L9.586 11l-2.293 2.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ContactInfo.js
function ContactInfo_extends() {
  ContactInfo_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ContactInfo_extends.apply(this, arguments);
}



var ContactInfo = function ContactInfo(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ContactInfo_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ContactInfo"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4 6v-2c0-2.25-1.787-4-4.036-4h.054C2.768 12 1 13.75 1 16v2M12 7h12M12 17h10m-10-5h7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Contact.js
function Contact_extends() {
  Contact_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Contact_extends.apply(this, arguments);
}



var Contact = function Contact(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Contact_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Contact"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 2h21v16h-8l-8 4v-4H1V2zm5 8h1v1H6v-1zm5 0h1v1h-1v-1zm5 0h1v1h-1v-1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Contract.js
function Contract_extends() {
  Contract_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Contract_extends.apply(this, arguments);
}



var Contract = function Contract(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Contract_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Contract"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 14h8v8m-9 1 9-9M23 1l-9 9m8 0h-8V2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Copy.js
function Copy_extends() {
  Copy_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Copy_extends.apply(this, arguments);
}



var Copy = function Copy(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Copy_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Copy"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 15h8-8zm0-4h10H9zm0-4h4-4zm7-6v6h6M6 5H2v18h16v-4m4 0H6V1h11l5 5v13z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cpu.js
function Cpu_extends() {
  Cpu_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cpu_extends.apply(this, arguments);
}



var Cpu = function Cpu(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cpu_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cpu"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 3H7V1H5v2a2 2 0 0 0-2 2H1v2h2v2H1v2h2v2H1v2h2v2H1v2h2a2 2 0 0 0 2 2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2a2 2 0 0 0 2-2h2v-2h-2v-2h2v-2h-2v-2h2V9h-2V7h2V5h-2a2 2 0 0 0-2-2V1h-2v2h-2V1h-2v2h-2V1H9v2zM5 5h14v14H5V5zm8 1h-1v6h6V6h-5zm1 2h2v2h-2V8z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CreativeCommons.js
function CreativeCommons_extends() {
  CreativeCommons_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CreativeCommons_extends.apply(this, arguments);
}



var CreativeCommons = function CreativeCommons(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CreativeCommons_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CreativeCommons"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "M11.984 0c-3.292 0-6.19 1.218-8.428 3.49C1.25 5.827 0 8.856 0 12.016c0 3.194 1.218 6.157 3.523 8.461 2.304 2.305 5.3 3.556 8.46 3.556 3.16 0 6.223-1.251 8.593-3.588C22.815 18.239 24 15.309 24 12.016c0-3.259-1.185-6.222-3.457-8.493C18.24 1.218 15.276 0 11.983 0zm.032 2.173c2.7 0 5.104 1.02 6.98 2.897 1.843 1.843 2.83 4.28 2.83 6.946 0 2.7-.954 5.07-2.797 6.881-1.943 1.91-4.445 2.93-7.013 2.93-2.6 0-5.037-1.02-6.913-2.897-1.877-1.877-2.93-4.346-2.93-6.914 0-2.6 1.053-5.07 2.93-6.98 1.843-1.875 4.214-2.863 6.913-2.863zm-.154 7.846c-.68-1.237-1.837-1.73-3.181-1.73-1.957 0-3.514 1.384-3.514 3.727 0 2.382 1.464 3.727 3.58 3.727 1.358 0 2.516-.745 3.154-1.877l-1.49-.758c-.333.798-.839 1.038-1.478 1.038-1.105 0-1.61-.919-1.61-2.13 0-1.21.426-2.13 1.61-2.13.32 0 .959.173 1.331.972l1.598-.839zm6.932 0c-.68-1.237-1.837-1.73-3.181-1.73-1.957 0-3.514 1.384-3.514 3.727 0 2.382 1.464 3.727 3.58 3.727 1.358 0 2.516-.745 3.154-1.877l-1.49-.758c-.333.798-.839 1.038-1.477 1.038-1.105 0-1.611-.919-1.611-2.13 0-1.21.426-2.13 1.61-2.13.32 0 .959.173 1.331.972l1.598-.839z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/CreditCard.js
function CreditCard_extends() {
  CreditCard_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CreditCard_extends.apply(this, arguments);
}



var CreditCard = function CreditCard(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, CreditCard_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CreditCard"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 5c0-.552.44-1 1.002-1h19.996A1 1 0 0 1 23 5v14c0 .552-.44 1-1.002 1H2.002A1 1 0 0 1 1 19V5zm0 3h22v2H1V8zm4 7h2v.5H5V15zm5 0h6v.5h-6V15z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Css3.js
function Css3_extends() {
  Css3_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Css3_extends.apply(this, arguments);
}



var Css3 = function Css3(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Css3_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Css3"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 3h14l-3 15-8 4-7-4 1-4m1-5h14"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cube.js
function Cube_extends() {
  Cube_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cube_extends.apply(this, arguments);
}



var Cube = function Cube(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cube_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cube"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m12 2 10 5v10l-10 5-10-5V7l10-5zM2 7l10 5 10-5m-10 5v10-10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cubes.js
function Cubes_extends() {
  Cubes_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cubes_extends.apply(this, arguments);
}



var Cubes = function Cubes(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cubes_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cubes"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m6.5 10.5 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6zm-11 12 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6zm5.5 3 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6zm0-6 5.5 3 5.5-3m-5.5 3v6-6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Currency.js
function Currency_extends() {
  Currency_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Currency_extends.apply(this, arguments);
}



var Currency = function Currency(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Currency_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Currency"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 5h22v14H1V5zm1 4a3 3 0 0 0 3-3m-3 9a3 3 0 0 1 3 3m17-9a3 3 0 0 1-3-3m3 9a3 3 0 0 0-3 3m-7-2c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cursor.js
function Cursor_extends() {
  Cursor_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cursor_extends.apply(this, arguments);
}



var Cursor = function Cursor(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cursor_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cursor"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m6 3 12 11-5 1 3 5.5-3 1.5-3-6-4 3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cut.js
function Cut_extends() {
  Cut_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cut_extends.apply(this, arguments);
}



var Cut = function Cut(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cut_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cut"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M23 4 8 16 23 4zm0 16L8 8l15 12zM5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Cycle.js
function Cycle_extends() {
  Cycle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cycle_extends.apply(this, arguments);
}



var Cycle = function Cycle(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Cycle_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Cycle"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M13 20c6-1 8-6 8-10m-7 6-2 4 4 3M0 9l4-3 3 4m2 10c-6-3-7-8-5-14m16 1C16 1 10 1 6 4.006M20 2v5h-5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Dashboard.js
function Dashboard_extends() {
  Dashboard_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Dashboard_extends.apply(this, arguments);
}



var Dashboard = function Dashboard(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Dashboard_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Dashboard"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3-6a3 3 0 0 0-6 0M5 5l2 2m5 0v6m0-10v2m7 7h2M3 12h2m12-5 2-2M3 17h18"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Database.js
function Database_extends() {
  Database_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Database_extends.apply(this, arguments);
}



var Database = function Database(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Database_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Database"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 2h22v7H1V2zm3 10h1v1H4v-1zm0-7h1v1H4V5zm0 14h1v1H4v-1zm-3-3h22v7H1v-7zm0-7h22v7H1V9z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Debian.js
function Debian_extends() {
  Debian_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Debian_extends.apply(this, arguments);
}



var Debian = function Debian(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Debian_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Debian"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#A80030",
    fillRule: "evenodd",
    d: "M2.656 5.167c.03.167.383-.233.107.39-.532.371-.064.162-.107-.39zm.003.032-.005-.06c0 .023.001.043.005.06zm-.446 1.76c-.344.44-.159.535-.195.834.125-.382.147-.612.195-.833zM13.04 0c-.372.031-.742.05-1.108.097l.161.022c.27-.099.661-.054.947-.119zm-.611.467.01-.04-.15.066.14-.026zM12.015.31c.212.038.459.067.424.118.232-.051.285-.098-.424-.118zM9.8 13.202c-.138-.153-.22-.338-.312-.521.088.323.267.6.434.881l-.122-.36zm4.317-.237c.144-.112.274-.226.39-.336a2.97 2.97 0 0 1-.984.05c-.398.007.075.206.594.286zm1.54-.817c.237-.327.41-.685.47-1.055-.053.264-.196.492-.33.732-.744.468-.07-.278-.001-.561-.8 1.006-.11.603-.139.884zm.788-2.05c.048-.716-.141-.49-.205-.217.075.039.133.505.205.217zm-4.558 5.147a4.674 4.674 0 0 1-1.527-1.168c.228.335.475.66.794.916-.54-.183-1.26-1.308-1.47-1.354.93 1.666 3.773 2.92 5.262 2.298-.69.026-1.565.014-2.339-.272-.294-.151-.685-.45-.697-.553-.015.038-.038.076-.023.133zm.04-.157a.057.057 0 0 0-.016.05.367.367 0 0 0 .016-.05zm-2.8-1.583c.26.355.468.74.802 1.017-.24-.469-.419-.663-.747-1.296l-.056.279zM20.46 8.576c.006-.365.101-.191.138-.281-.071-.041-.26-.321-.374-.858.083-.126.222.327.335.345-.073-.426-.198-.752-.203-1.08-.33-.689-.117.092-.384-.295-.351-1.095.29-.254.334-.752.532.771.836 1.965.975 2.46a10.077 10.077 0 0 0-.488-1.753c.162.068-.26-1.241.21-.374-.502-1.848-2.15-3.575-3.665-4.386.185.17.42.383.335.416-.753-.448-.621-.483-.729-.673-.614-.25-.654.02-1.06 0-1.159-.613-1.382-.548-2.447-.933l.049.227c-.767-.256-.894.097-1.722 0-.05-.039.265-.142.525-.18-.741.098-.706-.146-1.432.027.179-.125.368-.208.559-.315-.605.037-1.444.352-1.185.065-.986.44-2.737 1.058-3.72 1.98l-.03-.207c-.451.54-1.965 1.615-2.085 2.315l-.12.028c-.235.397-.387.846-.573 1.255-.306.522-.449.2-.405.282-.603 1.223-.902 2.25-1.161 3.092.184.276.004 1.659.074 2.766-.303 5.467 3.837 10.775 8.362 12 .663.238 1.65.229 2.488.253-.99-.283-1.118-.15-2.082-.486-.695-.328-.848-.702-1.34-1.13l.195.345c-.966-.342-.562-.423-1.348-.672l.208-.272c-.313-.023-.83-.528-.97-.807l-.343.014c-.412-.508-.631-.874-.615-1.158l-.11.197c-.126-.215-1.515-1.904-.795-1.511-.134-.122-.312-.2-.505-.55l.147-.167c-.346-.447-.638-1.018-.616-1.209.185.25.313.297.44.34-.875-2.173-.924-.12-1.588-2.212l.14-.012c-.107-.162-.172-.337-.259-.51l.061-.609c-.63-.729-.176-3.1-.085-4.4.063-.528.526-1.09.879-1.973L4.26 7.18c.41-.716 2.343-2.875 3.238-2.764.433-.544-.086-.002-.171-.139.952-.985 1.251-.696 1.894-.873.693-.412-.595.16-.266-.157 1.198-.306.849-.696 2.412-.851.165.094-.383.145-.52.266.998-.488 3.16-.377 4.562.271 1.63.762 3.459 3.011 3.53 5.128l.083.022c-.042.842.129 1.815-.166 2.709l.2-.424c.024.644-.188.955-.378 1.508l-.344.172c-.281.546.027.346-.174.78-.44.391-1.333 1.222-1.619 1.298-.209-.004.142-.246.188-.34-.588.403-.472.605-1.371.85l-.026-.058c-2.218 1.043-5.297-1.024-5.256-3.844-.024.179-.068.134-.117.206-.114-1.45.67-2.908 1.993-3.503 1.294-.64 2.812-.378 3.739.486-.51-.667-1.523-1.374-2.724-1.308-1.177.019-2.278.767-2.645 1.578-.603.38-.673 1.463-.935 1.662-.354 2.597.664 3.72 2.387 5.04.137.092.155.145.144.192l.001-.002c2.032.76 4.131.575 5.89-.834.447-.348.935-.94 1.077-.95-.213.32.036.155-.128.437.446-.719-.193-.293.461-1.241l.242.332c-.09-.596.741-1.32.657-2.264.19-.289.212.31.01.974.28-.736.074-.855.146-1.462.078.204.18.42.233.636-.183-.711.187-1.198.279-1.612-.09-.04-.282.315-.326-.526z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Deliver.js
function Deliver_extends() {
  Deliver_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Deliver_extends.apply(this, arguments);
}



var Deliver = function Deliver(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Deliver_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Deliver"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 18H1V3h13v14m0 1H9m-3 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm11 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM14 8h5l4 5v5h-3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Deploy.js
function Deploy_extends() {
  Deploy_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Deploy_extends.apply(this, arguments);
}



var Deploy = function Deploy(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Deploy_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Deploy"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M23 1s-6.528-.458-9 2c-.023.037-4 4-4 4L5 8l-3 2 8 4 4 8 2-3 1-5s3.963-3.977 4-4c2.458-2.472 2-9 2-9zm-6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 17c-1-1-3-1-4 0s-1 5-1 5 4 0 5-1 1-3 0-4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Descend.js
function Descend_extends() {
  Descend_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Descend_extends.apply(this, arguments);
}



var Descend = function Descend(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Descend_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Descend"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2 16 6 6 6-6M11 3h11M11 7h8m-8 4h5M8 22V2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Descending.js
function Descending_extends() {
  Descending_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Descending_extends.apply(this, arguments);
}



var Descending = function Descending(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Descending_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Descending"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m11.92 16.714-.354.353-.354-.353L7 12.502l.707-.708 3.359 3.359V7h1v8.153l3.358-3.359.707.708-4.212 4.212z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Desktop.js
function Desktop_extends() {
  Desktop_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Desktop_extends.apply(this, arguments);
}



var Desktop = function Desktop(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Desktop_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Desktop"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h22v18H1V1zm4 22h14H5zm5-4v4-4zm4 0v4-4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Detach.js
function Detach_extends() {
  Detach_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Detach_extends.apply(this, arguments);
}



var Detach = function Detach(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Detach_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Detach"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m4 4 16 16m2-8-5.28 5.28M15 19l-2 2c-6 6-15-3-9-9l2-2m2-2 5-5c4-4 10 2 6 6l-5 5m-2 2-2 2c-2 2-5-1-3-3l2-2m2-2 5-5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Device.js
function Device_extends() {
  Device_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Device_extends.apply(this, arguments);
}



var Device = function Device(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Device_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Device"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 7h20v14h-6l-4-4-4 4H2V7zm4-5 5 5h2l5-5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Diamond.js
function Diamond_extends() {
  Diamond_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Diamond_extends.apply(this, arguments);
}



var Diamond = function Diamond(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Diamond_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Diamond"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M11 3 7 9l5 11m1-17 4 6-5 11"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Directions.js
function Directions_extends() {
  Directions_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Directions_extends.apply(this, arguments);
}



var Directions = function Directions(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Directions_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Directions"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m17 11 5-5-5-5m5 5h-4a6 6 0 0 0-6 6v12M7 6l-5 5 5 5m-5-5h4a6 6 0 0 1 6 6v7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DisabledOutline.js
function DisabledOutline_extends() {
  DisabledOutline_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DisabledOutline_extends.apply(this, arguments);
}



var DisabledOutline = function DisabledOutline(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DisabledOutline_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DisabledOutline"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4zm3-1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4zm2 8h12v2H6v-2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Disc.js
function Disc_extends() {
  Disc_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Disc_extends.apply(this, arguments);
}



var Disc = function Disc(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Disc_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Disc"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Dislike.js
function Dislike_extends() {
  Dislike_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Dislike_extends.apply(this, arguments);
}



var Dislike = function Dislike(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Dislike_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Dislike"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M23 1H4C2 1 1 2 1 4v10h7v6c0 2 1 3 3 3h2s.016-6 .016-7.326C13.016 14.348 14 13 16 13h7V1zm-5 0v12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Docker.js
function Docker_extends() {
  Docker_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Docker_extends.apply(this, arguments);
}



var Docker = function Docker(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Docker_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Docker"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#0DB7ED",
    fillRule: "evenodd",
    d: "M6.942 14.9c.056 0 .11.01.158.03a.179.179 0 1 0 .246.24.438.438 0 1 1-.404-.27zm0 1.185a.749.749 0 1 1 .002-1.497.749.749 0 0 1-.002 1.497zm13.444-4.901c-2.124 5.628-6.92 8.135-12.576 8.135-2.672 0-4.803-.92-6.167-2.452l.01-.006c.393.02.745.026 1.101.026.327 0 .646-.003.941-.02l.084-.006s.091-.006.046-.007a8.545 8.545 0 0 0 1.877-.306 4.82 4.82 0 0 0 .286-.09.197.197 0 0 0-.128-.371c-.69.239-1.6.37-2.715.395a21.668 21.668 0 0 1-1.86-.045 6.3 6.3 0 0 1-.386-.58l-.187-.34C.15 14.411-.096 13.12.034 11.716h16.363c1.344 0 2.656-.502 3.28-1.055-1.117-.908-1.006-3.064-.295-3.886.618.496 1.613 1.54 1.442 2.871.777-.39 2.127-.583 3.176.022-.659 1.286-2.107 1.67-3.614 1.516zm-18.13.135h2.212V9.106H2.255v2.213zm2.552 0h2.213V9.106H4.808v2.213zm0-2.553h2.213V6.553H4.808v2.213zm2.553 2.553h2.213V9.106H7.361v2.213zm0-2.553h2.213V6.553H7.361v2.213zm2.553 2.553h2.213V9.106H9.914v2.213zm0-2.553h2.213V6.553H9.914v2.213zm0-2.553h2.213V4H9.914v2.213zm2.553 5.106h2.213V9.106h-2.213v2.213z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentCloud.js
function DocumentCloud_extends() {
  DocumentCloud_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentCloud_extends.apply(this, arguments);
}



var DocumentCloud = function DocumentCloud(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentCloud_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentCloud"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-4M18 1v5h5m-12 7H6.002A3.003 3.003 0 0 0 3 16c0 1.657 1.343 3 2.99 3H7v1.01A2.993 2.993 0 0 0 10.002 23h1.996A2.999 2.999 0 0 0 15 20.01V19m-4 0h4.998A3.003 3.003 0 0 0 19 16c0-1.657-1.343-3-2.99-3H15v-1.01A2.993 2.993 0 0 0 11.998 9h-1.996A2.999 2.999 0 0 0 7 11.99V13"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentConfig.js
function DocumentConfig_extends() {
  DocumentConfig_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentConfig_extends.apply(this, arguments);
}



var DocumentConfig = function DocumentConfig(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentConfig_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentConfig"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23h-7m2-22v5h5M9 14v-3m0 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 3v-3m3-3h3M3 17h3m-1-4 2 2m4 4 2 2m0-8-2 2m-4 4-2 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentCsv.js
function DocumentCsv_extends() {
  DocumentCsv_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentCsv_extends.apply(this, arguments);
}



var DocumentCsv = function DocumentCsv(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentCsv_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentCsv"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M7 13H5c-1 0-2 .5-2 1.5v3c0 1 1 1.5 2 1.5h2m6.25-6h-2.5c-1.5 0-2 .5-2 1.5s.5 1.5 2 1.5 2 .5 2 1.5-.5 1.5-2 1.5h-2.5m12.25-7v.5C20.5 13 18 19 18 19h-.5S15 13 15 12.5V12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentDownload.js
function DocumentDownload_extends() {
  DocumentDownload_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentDownload_extends.apply(this, arguments);
}



var DocumentDownload = function DocumentDownload(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentDownload_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentDownload"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 1H17.5L21 4.5V23H3L2.998 1zM16 1v5h5m-9 3v9m-4-3 4 4 4-4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentExcel.js
function DocumentExcel_extends() {
  DocumentExcel_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentExcel_extends.apply(this, arguments);
}



var DocumentExcel = function DocumentExcel(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentExcel_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentExcel"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M9.25 12l-2 3.25-2-3.25H5l2.25 3.5-2.5 3.5H5l2.25-3.25L9.5 19h.25l-2.5-3.5L9.5 12h-.25z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentImage.js
function DocumentImage_extends() {
  DocumentImage_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentImage_extends.apply(this, arguments);
}



var DocumentImage = function DocumentImage(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentImage_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentImage"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-3M18 1v5h5M3 11h13v12H3V11zm4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-2 7 2-3 2 2 4-6 3 4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentLocked.js
function DocumentLocked_extends() {
  DocumentLocked_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentLocked_extends.apply(this, arguments);
}



var DocumentLocked = function DocumentLocked(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentLocked_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentLocked"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M4 15h10v8H4v-8zm2 0v-2a3 3 0 0 1 6 0v2m-4 4h2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentMissing.js
function DocumentMissing_extends() {
  DocumentMissing_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentMissing_extends.apply(this, arguments);
}



var DocumentMissing = function DocumentMissing(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentMissing_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentMissing"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 1H17.5L21 4.5V23H3L2.998 1zM16 1v5h5M9 12l6 6m0-6-6 6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentNotes.js
function DocumentNotes_extends() {
  DocumentNotes_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentNotes_extends.apply(this, arguments);
}



var DocumentNotes = function DocumentNotes(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentNotes_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentNotes"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M9.75 12v6.5H9.5l-5-6.5H4v7h.25v-6.5h.25l5 6.5h.5v-7h-.25z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentOutlook.js
function DocumentOutlook_extends() {
  DocumentOutlook_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentOutlook_extends.apply(this, arguments);
}



var DocumentOutlook = function DocumentOutlook(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentOutlook_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentOutlook"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 9V1H17.5L21 4.5V23H2M16 1v5h5M7.75 15.75C7.75 13.5 6.5 12 5 12s-2.75 1.5-2.75 3.75S3.5 19.5 5 19.5s2.75-1.5 2.75-3.75zM5 12c2.425 0 3 2.5 3 3.75s-.5 3.75-3 3.75-3-2.5-3-3.75S2.559 12 5 12z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentPdf.js
function DocumentPdf_extends() {
  DocumentPdf_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentPdf_extends.apply(this, arguments);
}



var DocumentPdf = function DocumentPdf(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentPdf_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentPdf"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M3 12h1.5c2 0 2.25 1.25 2.25 2s-.25 2-2.25 2H3.25v2H3v-6zm6.5 6v-6h1.705c1.137 0 2.295.5 2.295 3s-1.158 3-2.295 3H9.5zm7 1v-7h4m-4 3.5h3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentPerformance.js
function DocumentPerformance_extends() {
  DocumentPerformance_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentPerformance_extends.apply(this, arguments);
}



var DocumentPerformance = function DocumentPerformance(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentPerformance_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentPerformance"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M3 19l5-5 4 4 6.5-6.5M19 17v-6h-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentPpt.js
function DocumentPpt_extends() {
  DocumentPpt_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentPpt_extends.apply(this, arguments);
}



var DocumentPpt = function DocumentPpt(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentPpt_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentPpt"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M4 12h1.5c2 0 3.5.5 3.5 2.25S7.5 16.5 5.5 16.5H4.25V19H4v-7z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentRtf.js
function DocumentRtf_extends() {
  DocumentRtf_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentRtf_extends.apply(this, arguments);
}



var DocumentRtf = function DocumentRtf(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentRtf_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentRtf"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-2.5 6h-4v7m3-3.5h-3m-8-3.5h6m-3 0v7M3 19v-7h1.5C5 12 7 12 7 14s-2 2-2.5 2H3m2.25 0 2.25 3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentSound.js
function DocumentSound_extends() {
  DocumentSound_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentSound_extends.apply(this, arguments);
}



var DocumentSound = function DocumentSound(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentSound_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentSound"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 9V1H17.5L21 4.5V23h-3M16 1v5h5M1 14.01v4h3l4 3V11l-4 3.01H1zM11 18a2 2 0 1 0 0-4m0 8a6 6 0 1 0 0-12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentStore.js
function DocumentStore_extends() {
  DocumentStore_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentStore_extends.apply(this, arguments);
}



var DocumentStore = function DocumentStore(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentStore_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentStore"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M3 12s1-2 6-2 6 2 6 2v9s-1 2-6 2-6-2-6-2v-9zm0 5s2 2 6 2 6-2 6-2M3 13s2 2 6 2 6-2 6-2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentTest.js
function DocumentTest_extends() {
  DocumentTest_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentTest_extends.apply(this, arguments);
}



var DocumentTest = function DocumentTest(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentTest_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentTest"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 6V1H19.5L23 4.5V23h-3M18 1v5h5M6 9h8M8 9v4.5l-5 8V23h14v-1.581L12 13.5V9m-6.5 8.5s2 1.5 4.5 0 4.5 0 4.5 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentText.js
function DocumentText_extends() {
  DocumentText_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentText_extends.apply(this, arguments);
}



var DocumentText = function DocumentText(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentText_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentText"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 16h10H6zm0-4h12H6zm0-4h5-5zm8-7v7h7M3 23V1h12l6 6v16H3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentThreat.js
function DocumentThreat_extends() {
  DocumentThreat_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentThreat_extends.apply(this, arguments);
}



var DocumentThreat = function DocumentThreat(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentThreat_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentThreat"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M9 23a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12V9c0-1 0-2 2-2s2 1 2 2 0 2 2 2h2m-9 0h2v2H8v-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentTime.js
function DocumentTime_extends() {
  DocumentTime_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentTime_extends.apply(this, arguments);
}



var DocumentTime = function DocumentTime(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentTime_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentTime"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M10 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-11v4l3 3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentTransfer.js
function DocumentTransfer_extends() {
  DocumentTransfer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentTransfer_extends.apply(this, arguments);
}



var DocumentTransfer = function DocumentTransfer(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentTransfer_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentTransfer"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M8 12l-4 4 4 4m-4-4h11"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentTxt.js
function DocumentTxt_extends() {
  DocumentTxt_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentTxt_extends.apply(this, arguments);
}



var DocumentTxt = function DocumentTxt(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentTxt_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentTxt"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M2 12h5m-2.5 0v7M16 12h5m-2.5 0v7m-4-7.5-6 7m0-7 6 7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentUpdate.js
function DocumentUpdate_extends() {
  DocumentUpdate_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentUpdate_extends.apply(this, arguments);
}



var DocumentUpdate = function DocumentUpdate(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentUpdate_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentUpdate"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 7V1H17.5L21 4.5V23h-6m1-22v5h5M8 23A7 7 0 1 0 8 9a7 7 0 0 0 0 14zm-3.5-6.5L8 13l3.5 3.5m-3.5-3V20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentUpload.js
function DocumentUpload_extends() {
  DocumentUpload_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentUpload_extends.apply(this, arguments);
}



var DocumentUpload = function DocumentUpload(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentUpload_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentUpload"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 1H17.5L21 4.5V23H3L2.998 1zM16 1v5h5m-9 14v-9m-4 3 4-4 4 4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentUser.js
function DocumentUser_extends() {
  DocumentUser_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentUser_extends.apply(this, arguments);
}



var DocumentUser = function DocumentUser(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentUser_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentUser"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23h-7m2-22v5h5M8 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM3 23v-1c0-4 3-5 5-5s5 1 5 5v1H3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentVerified.js
function DocumentVerified_extends() {
  DocumentVerified_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentVerified_extends.apply(this, arguments);
}



var DocumentVerified = function DocumentVerified(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentVerified_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentVerified"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2.998 1H17.5L21 4.5V23H3L2.998 1zM16 1v5h5M7.5 15l3 3 6-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentVideo.js
function DocumentVideo_extends() {
  DocumentVideo_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentVideo_extends.apply(this, arguments);
}



var DocumentVideo = function DocumentVideo(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentVideo_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentVideo"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 7V1H19.5L23 4.5V23H4M18 1v5h5M3 10h9v9H3v-9zm9 3 5-2.5v8L12 16v-3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentWindows.js
function DocumentWindows_extends() {
  DocumentWindows_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentWindows_extends.apply(this, arguments);
}



var DocumentWindows = function DocumentWindows(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentWindows_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentWindows"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-8.75 5.5-6 7m0-7 6 7M20.5 12h-4v6h4m-1-3h-3M7 12H3v6h4m-1-3H3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentWord.js
function DocumentWord_extends() {
  DocumentWord_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentWord_extends.apply(this, arguments);
}



var DocumentWord = function DocumentWord(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentWord_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentWord"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-9 6-1.5 6.75h-.25L9.5 12H9l-2.75 6.75H6L4.5 12H4l2 7h.5L9 12.5h.5L12 19h.5l2-7H14z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DocumentZip.js
function DocumentZip_extends() {
  DocumentZip_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DocumentZip_extends.apply(this, arguments);
}



var DocumentZip = function DocumentZip(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DocumentZip_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentZip"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M2 13h5v1l-4 4v1h5m3-7v8-8zm4 1v7-7zm5 2a2 2 0 0 0-2-2h-3v4h3a2 2 0 0 0 2-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Document.js
function Document_extends() {
  Document_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Document_extends.apply(this, arguments);
}



var Document = function Document(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Document_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Document"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 1v7h7m0 15H3V1h12l3 3 3 3v16z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Domain.js
function Domain_extends() {
  Domain_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Domain_extends.apply(this, arguments);
}



var Domain = function Domain(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Domain_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Domain"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M13 3v4-4zM9 3v4-4zM5 3v4-4zM1 7h22H1zm0 14h22V3H1v18z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Dos.js
function Dos_extends() {
  Dos_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Dos_extends.apply(this, arguments);
}



var Dos = function Dos(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Dos_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Dos"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "m0 4.546 4.934-.124c.958-.02 1.844.082 2.74.392v.175C6.9 5.648 6.345 6.43 5.84 7.306l-2.997.021.02 8.498 1.772.123 1.813-.02c1.082-.011 2.08-1.741 2.174-2.679l.267-2.955c.114-1.298.865-2.297 2.03-2.833.73 1.226 1.05 2.585 1.05 4.017 0 4.501-2.791 7.344-7.19 7.18L0 18.471V4.546zm20.704 4.172c-.237-1.37-1.38-2.05-2.75-2.05-.938 0-2.473.411-2.524 1.586-.01.062 0 .113.02.165l.557 1.596c.113.33.134.69.134 1.04 0 .402-.052.804-.103 1.206-1.978-.556-3.369-1.514-3.369-3.74 0-2.997 2.421-4.398 5.181-4.398 3.07 0 5.47 1.432 5.666 4.595h-2.812zm-8.24 5.366 2.75.02c.288 1.762 1.452 2.246 3.182 2.246 1.082 0 2.699-.257 2.699-1.638 0-.72-.567-1.092-1.143-1.41l.144-2.75c2.194.596 3.904 1.42 3.904 3.995 0 3.05-2.905 4.337-5.583 4.337-1.916 0-4.398-.556-5.418-2.369-.32-.556-.618-1.277-.618-1.926a.78.78 0 0 1 .02-.155l.062-.35zm7.24-2.627c0 1.576-.422 3.049-1.143 4.43-.185.01-.37.03-.556.03-.597 0-2.05-.401-2.05-1.133 0-.123.02-.247.062-.36l.546-1.823c.113-.36.072-.794.072-1.154 0-1.411-.639-2.297-.69-3.265-.03-.68 1.257-1 1.71-1 .309 0 .618 0 .927.031a8.49 8.49 0 0 1 1.123 4.244zM10.61 17.03l.648-.927 1.082.02c.515 1.123 1.36 1.885 2.39 2.545a7.166 7.166 0 0 1-2.277.37c-1.143 0-2.215-.257-3.275-.659l1.432-1.35zm1.926-10.321a8.19 8.19 0 0 0-.495-.02c-1.74 0-3.327 1.523-3.533 3.233l-.453 3.719c-.062.525-.515 1.06-.855 1.442-.288.309-.628.37-1.05.37h-.052a9.589 9.589 0 0 1-.814-3.862C5.284 7.358 7.654 4 12.062 4c.865 0 1.689.165 2.502.391-.864.639-1.544 1.35-2.028 2.318z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Down.js
function Down_extends() {
  Down_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Down_extends.apply(this, arguments);
}



var Down = function Down(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Down_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Down"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2 8.35 10.173 9.823L21.997 8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DownloadOption.js
function DownloadOption_extends() {
  DownloadOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DownloadOption_extends.apply(this, arguments);
}



var DownloadOption = function DownloadOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DownloadOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DownloadOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm14.293-.707L13 14.586V6h-2v8.586l-3.293-3.293-1.414 1.414 5 5 .707.707.707-.707 5-5-1.414-1.414z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Download.js
function Download_extends() {
  Download_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Download_extends.apply(this, arguments);
}



var Download = function Download(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Download_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Download"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 17v6h22v-6M12 2v17m-7-7 7 7 7-7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Drag.js
function Drag_extends() {
  Drag_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Drag_extends.apply(this, arguments);
}



var Drag = function Drag(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Drag_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Drag"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M15 5h2V3h-2v2zM7 5h2V3H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Drawer.js
function Drawer_extends() {
  Drawer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Drawer_extends.apply(this, arguments);
}



var Drawer = function Drawer(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Drawer_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Drawer"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 14 6 2h12l5 12-2 8H3l-2-8zm0 0h22"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Dribbble.js
function Dribbble_extends() {
  Dribbble_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Dribbble_extends.apply(this, arguments);
}



var Dribbble = function Dribbble(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Dribbble_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Dribbble"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#E74D89",
    d: "M11.432 8.635c-1.77-3.15-3.666-5.716-3.803-5.904A10.263 10.263 0 0 0 1.97 9.887c.27.004 4.54.056 9.46-1.252zm1.278 3.443c.135-.041.27-.083.404-.122a34.204 34.204 0 0 0-.832-1.741c-5.278 1.58-10.342 1.464-10.521 1.46-.003.107-.008.215-.008.325a10.2 10.2 0 0 0 2.63 6.852l-.007-.01s2.804-4.976 8.334-6.764zM5.701 20.08l.003-.005c-.076-.058-.157-.115-.233-.176.137.11.23.181.23.181zM9.62 2.076c-.036.01-.063.02-.1.03a.535.535 0 0 1 .1-.03zm9.15 2.234A10.198 10.198 0 0 0 12 1.751c-.833 0-1.64.103-2.415.289.157.206 2.08 2.762 3.83 5.978 3.865-1.447 5.327-3.666 5.354-3.708zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm1.744-10.322c-6.015 2.096-8.001 6.31-8.04 6.396A10.2 10.2 0 0 0 12 22.247c1.42 0 2.772-.29 4.002-.811-.152-.899-.747-4.038-2.19-7.783-.024.01-.046.015-.068.025zm.46-4.132a30.12 30.12 0 0 1 .901 2.016c3.54-.446 7.024.31 7.14.335a10.206 10.206 0 0 0-2.332-6.406c-.02.029-1.663 2.405-5.709 4.055zm1.528 3.634c1.347 3.698 1.89 6.708 1.994 7.32a10.242 10.242 0 0 0 4.39-6.874c-.203-.066-3.07-.977-6.384-.446z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/DriveCage.js
function DriveCage_extends() {
  DriveCage_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DriveCage_extends.apply(this, arguments);
}



var DriveCage = function DriveCage(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, DriveCage_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DriveCage"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 23V2h22v21M1 8h22H1zm0 6h22H1zm0 6h22H1zM4 5h12H4zm14 0h2-2zm0 6h2-2zm0 6h2-2zM4 11h12H4zm0 6h12H4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Dropbox.js
function Dropbox_extends() {
  Dropbox_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Dropbox_extends.apply(this, arguments);
}



var Dropbox = function Dropbox(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Dropbox_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Dropbox"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#007EE5",
    fillRule: "evenodd",
    d: "M7.06 1 0 5.61l4.882 3.908L12 5.123 7.06 1zM0 13.428l7.06 4.61L12 13.914 4.882 9.52 0 13.43zm12 .486 4.94 4.124 7.06-4.61-4.882-3.91L12 13.914zM24 5.61 16.94 1 12 5.124l7.118 4.395L24 5.609zM12.014 14.8 7.06 18.913l-2.12-1.385v1.552l7.074 4.243 7.075-4.243v-1.552l-2.12 1.385-4.955-4.112z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Duplicate.js
function Duplicate_extends() {
  Duplicate_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Duplicate_extends.apply(this, arguments);
}



var Duplicate = function Duplicate(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Duplicate_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Duplicate"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.5 17H1V1h16v3.5M7 7h16v16H7V7zm8 4v8-8zm-4 4h8-8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Dxc.js
function Dxc_extends() {
  Dxc_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Dxc_extends.apply(this, arguments);
}



var Dxc = function Dxc(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Dxc_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Dxc"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "m12 14 4 7H8l4-7zm0-4L8 3h8l-4 7zM2 18H0V6h2a6 6 0 1 1 0 12zm20 0a6 6 0 1 1 0-12h2v12h-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Ebay.js
function Ebay_extends() {
  Ebay_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Ebay_extends.apply(this, arguments);
}



var Ebay = function Ebay(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Ebay_extends({
    viewBox: "0 0 60 24",
    a11yTitle: "Ebay"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#E53238",
    d: "M7.773 5.218C3.544 5.218.02 6.998.02 12.366c0 4.253 2.37 6.931 7.862 6.931 6.466 0 6.88-4.224 6.88-4.224H11.63s-.671 2.275-3.938 2.275c-2.66 0-4.573-1.783-4.573-4.28H15.09V11.5c0-2.472-1.582-6.282-7.317-6.282zm-.109 2.004c2.533 0 4.259 1.538 4.259 3.844H3.187c0-2.448 2.253-3.844 4.477-3.844z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#0064D2",
    d: "M15.088.02V16.6c0 .941-.068 2.263-.068 2.263h2.988s.107-.95.107-1.817c0 0 1.476 2.29 5.49 2.29 4.227 0 7.098-2.91 7.098-7.08 0-3.878-2.637-6.998-7.09-6.998-4.172 0-5.468 2.233-5.468 2.233V.02h-3.057zm7.753 7.29c2.87 0 4.695 2.112 4.695 4.948 0 3.04-2.108 5.029-4.675 5.029-3.063 0-4.716-2.373-4.716-5.002 0-2.45 1.483-4.975 4.696-4.975z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5AF02",
    d: "M38.129 5.218c-6.362 0-6.77 3.455-6.77 4.007h3.166s.166-2.017 3.386-2.017c2.091 0 3.712.95 3.712 2.775v.65h-3.712c-4.93 0-7.535 1.43-7.535 4.332 0 2.856 2.407 4.41 5.661 4.41 4.434 0 5.863-2.43 5.863-2.43 0 .966.075 1.919.075 1.919h2.815s-.109-1.18-.109-1.936V10.4c0-4.281-3.481-5.182-6.552-5.182zm3.494 7.365v.866c0 1.13-.703 3.94-4.842 3.94-2.267 0-3.238-1.123-3.238-2.424 0-2.367 3.272-2.382 8.08-2.382z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#86B817",
    d: "M42.976 5.76h3.562l5.113 10.159L56.753 5.76h3.227l-9.292 18.086h-3.385l2.681-5.042z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Edge.js
function Edge_extends() {
  Edge_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Edge_extends.apply(this, arguments);
}



var Edge = function Edge(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Edge_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Edge"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#00A1F1",
    fillRule: "evenodd",
    d: "M5.487 6.357C2.632 8.134 1 10.66 1 10.66s.423-5.296 4.487-8.395C7.103 1.033 9.313 0 12.285 0c1.117 0 3.459.195 5.568 1.495 2.109 1.3 2.961 2.39 3.911 3.984.41.688.744 1.572.952 2.425.391 1.598.438 3.508.438 3.508v2.517H8.081s-.368 5.065 6.564 5.065c2.411 0 3.255-.38 4.048-.614 1.241-.367 2.44-1.187 2.44-1.187l.002 5.06S18.298 24 14.012 24c-1.207 0-2.479-.101-3.706-.5-1.072-.347-3.316-1.285-4.819-3.483-.531-.778-1.107-1.813-1.393-2.824-.308-1.093-.304-2.155-.304-2.74 0-2.188.747-4.277 2.044-5.787C7.515 6.71 9.638 5.848 9.638 5.848s-.691.807-1.117 1.81a8.288 8.288 0 0 0-.542 2.015h8.511s.498-5.086-4.815-5.086c-2.003 0-4.462.695-6.188 1.77"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Edit.js
function Edit_extends() {
  Edit_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Edit_extends.apply(this, arguments);
}



var Edit = function Edit(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Edit_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Edit"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m14 4 6 6-6-6zm8.294 1.294c.39.39.387 1.025-.008 1.42L9 20l-7 2 2-7L17.286 1.714a1 1 0 0 1 1.42-.008l3.588 3.588zM3 19l2 2m2-4 8-8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Eject.js
function Eject_extends() {
  Eject_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Eject_extends.apply(this, arguments);
}



var Eject = function Eject(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Eject_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Eject"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M21 14 12 2 3 14h18zM2 22h20v-4H2v4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Elevator.js
function Elevator_extends() {
  Elevator_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Elevator_extends.apply(this, arguments);
}



var Elevator = function Elevator(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Elevator_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Elevator"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M1 2.991C1 1.891 1.89 1 2.991 1H21.01C22.109 1 23 1.89 23 2.991V21.01c0 1.1-.89 1.991-1.991 1.991H2.99A1.99 1.99 0 0 1 1 21.009V2.99zM16.5 8l1.5 2h-3l1.5-2zm0 8 1.5-2h-3l1.5 2zM5 13l1.556-3.112C6.801 9.398 7.444 9 8 9h0c.552 0 1.2.398 1.444.888L11 13m-4.5 5 1.25-8h.5l1.25 8M8 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Emergency.js
function Emergency_extends() {
  Emergency_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Emergency_extends.apply(this, arguments);
}



var Emergency = function Emergency(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Emergency_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Emergency"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M10 7.172V2h4v5.172l3.657-3.657 2.828 2.828L16.828 10H22v4h-5.172l3.657 3.657-2.828 2.828L14 16.828V22h-4v-5.172l-3.657 3.657-2.828-2.828L7.172 14H2v-4h5.172L3.515 6.343l2.828-2.828L10 7.172z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Emoji.js
function Emoji_extends() {
  Emoji_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Emoji_extends.apply(this, arguments);
}



var Emoji = function Emoji(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Emoji_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Emoji"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M12 1.73A10.27 10.27 0 1 0 22.24 12 10.25 10.25 0 0 0 12 1.73zM21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.8 11.05a1.55 1.55 0 1 0-1.51-1.5 1.56 1.56 0 0 0 1.51 1.5zm6.64 0a1.55 1.55 0 1 0 0-3.09 1.53 1.53 0 0 0-1.51 1.59 1.51 1.51 0 0 0 1.51 1.5zm-3.25 5.3A6.58 6.58 0 0 1 6.9 13.5a5.71 5.71 0 0 0 5.3 4 5.54 5.54 0 0 0 5.31-4 6.27 6.27 0 0 1-5.32 2.85z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/EmptyCircle.js
function EmptyCircle_extends() {
  EmptyCircle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return EmptyCircle_extends.apply(this, arguments);
}



var EmptyCircle = function EmptyCircle(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, EmptyCircle_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "EmptyCircle"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Erase.js
function Erase_extends() {
  Erase_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Erase_extends.apply(this, arguments);
}



var Erase = function Erase(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Erase_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Erase"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 21 22 6l-4-4L2 18l3 3h14M6 14l4 4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Escalator.js
function Escalator_extends() {
  Escalator_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Escalator_extends.apply(this, arguments);
}



var Escalator = function Escalator(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Escalator_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Escalator"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M22 9a2 2 0 0 0-1.998-2H16L6 17H4c-1.105 0-2 .888-2 2h0a2 2 0 0 0 1.998 2H8l10-10h2c1.105 0 2-.888 2-2h0zM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6v-2.505c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V14l-1 1zm5-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6V7.495c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V9l-1 1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Expand.js
function Expand_extends() {
  Expand_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Expand_extends.apply(this, arguments);
}



var Expand = function Expand(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Expand_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Expand"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m10 14-8 8m-1-7v8h8M22 2l-8 8m1-9h8v8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Ezmeral.js
function Ezmeral_extends() {
  Ezmeral_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Ezmeral_extends.apply(this, arguments);
}



var Ezmeral = function Ezmeral(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Ezmeral_extends({
    viewBox: "0 0 48 24",
    a11yTitle: "Ezmeral"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M7 8h34v8H7V8z",
    fill: "#01A982"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M1 8h6v8H1V8zm40 0h6v8h-6V8zM7 16h34v6H7v-6z",
    fill: "#00775B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M7 2h34v6H7V2z",
    fill: "#00C781"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m1 8 6-6v6H1zm0 8 6 6v-6H1zm46-8-6-6v6h6zm0 8-6 6v-6h6z",
    fill: "#01A982"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FacebookOption.js
function FacebookOption_extends() {
  FacebookOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FacebookOption_extends.apply(this, arguments);
}



var FacebookOption = function FacebookOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FacebookOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FacebookOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#3B5998",
    fillRule: "evenodd",
    d: "M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Facebook.js
function Facebook_extends() {
  Facebook_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Facebook_extends.apply(this, arguments);
}



var Facebook = function Facebook(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Facebook_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Facebook"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#3B5998",
    fillRule: "evenodd",
    d: "M23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h11.75v-9h-3v-3.75h3v-3c0-3.1 1.963-4.625 4.728-4.625 1.324 0 2.463.099 2.794.142v3.24l-1.917.001c-1.504 0-1.855.715-1.855 1.763v2.479h3.75L19.5 15h-3l.06 9H23a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FanOption.js
function FanOption_extends() {
  FanOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FanOption_extends.apply(this, arguments);
}



var FanOption = function FanOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FanOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FanOption"
  }, props), /*#__PURE__*/react.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "1",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "10",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15 9.5c.5-.333.9-1.7.5-2.5S13.333 5.667 13 5.5m1 5c1.5-2 0-3.5-2.5-5-1.546-.927 2-1.5 4.5.5 1.875 1.5 1 2.5-2 5.5v-1zm-5.015 3.902c-.5.333-.9 1.7-.5 2.5s2.167 1.333 2.5 1.5m-1-5c-1.5 2 0 3.5 2.5 5 1.546.927-2 1.5-4.5-.5-1.875-1.5-1-2.5 2-5.5v1zm-.443-4.458c-.334-.5-1.7-.9-2.5-.5s-1.334 2.166-1.5 2.5m5-1c-2-1.5-3.5 0-5 2.5-.928 1.546-1.5-2 .5-4.5 1.5-1.875 2.5-1 5.5 2h-1zm3.902 5.014c.333.5 1.7.9 2.5.5s1.333-2.166 1.5-2.5m-5 1c2 1.5 3.5 0 5-2.5.927-1.546 1.5 2-.5 4.5-1.5 1.876-2.5 1-5.5-2h1z",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    clipRule: "evenodd",
    d: "M3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm17 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    stroke: "#000",
    strokeWidth: "2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Fan.js
function Fan_extends() {
  Fan_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Fan_extends.apply(this, arguments);
}



var Fan = function Fan(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Fan_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Fan"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm3-3c4 3 5 7 5 7m-8 4c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-14c3-5 7-6 7-6m-7 12c-3 4-7 5-7 5m4-8C5 9 4 5 4 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FastForward.js
function FastForward_extends() {
  FastForward_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FastForward_extends.apply(this, arguments);
}



var FastForward = function FastForward(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FastForward_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FastForward"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 2.059V8L1 2.059v20L9 16v6.059l13-10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Favorite.js
function Favorite_extends() {
  Favorite_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Favorite_extends.apply(this, arguments);
}



var Favorite = function Favorite(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Favorite_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Favorite"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 8.4C1 4 4.5 3 6.5 3 9 3 11 5 12 6.5 13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Fedora.js
function Fedora_extends() {
  Fedora_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Fedora_extends.apply(this, arguments);
}



var Fedora = function Fedora(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Fedora_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Fedora"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#4F6DB1",
    fillRule: "evenodd",
    d: "M12 0C5.375 0 .005 5.368 0 11.992v9.286A2.728 2.728 0 0 0 2.728 24h9.277C18.63 23.997 24 18.626 24 12c0-6.627-5.373-12-12-12zm4.595 5.577c-.379 0-.517-.073-1.072-.073a2.973 2.973 0 0 0-2.973 2.968v2.583a.42.42 0 0 0 .42.419h1.953c.728 0 1.316.58 1.316 1.31 0 .734-.594 1.312-1.33 1.312H12.55v2.985a5.632 5.632 0 0 1-5.631 5.632c-.472 0-.808-.053-1.245-.167-.637-.167-1.157-.689-1.157-1.296 0-.734.533-1.269 1.33-1.269.378 0 .516.073 1.072.073 1.64 0 2.97-1.328 2.972-2.968v-2.583a.42.42 0 0 0-.42-.419H7.518c-.727 0-1.315-.58-1.315-1.31 0-.735.594-1.312 1.33-1.312H9.89V8.476a5.632 5.632 0 0 1 5.632-5.632c.472 0 .807.054 1.244.168.637.167 1.158.689 1.158 1.296 0 .734-.533 1.269-1.33 1.269z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Figma.js
function Figma_extends() {
  Figma_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Figma_extends.apply(this, arguments);
}



var Figma = function Figma(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Figma_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Figma"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(4)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    fill: "#19BCFE"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#09CF83",
    d: "M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#A259FF",
    d: "M4 16h4V8H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F24E1E",
    d: "M4 8h4V0H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF7262",
    d: "M12 8H8V0h4a4 4 0 1 1 0 8z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Filter.js
function Filter_extends() {
  Filter_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Filter_extends.apply(this, arguments);
}



var Filter = function Filter(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Filter_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Filter"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m3 6 7 7v8h4v-8l7-7V3H3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FingerPrint.js
function FingerPrint_extends() {
  FingerPrint_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FingerPrint_extends.apply(this, arguments);
}



var FingerPrint = function FingerPrint(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FingerPrint_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FingerPrint"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M14 15a2 2 0 1 0-2 2h0m0 3a5 5 0 1 1 5-5 1.5 1.5 0 0 0 3 0 8 8 0 1 0-8 8h2M1 15c0 2.672.953 5.122 2.537 7.027M20.52 8.042A10.978 10.978 0 0 0 12 4a10.977 10.977 0 0 0-8.464 3.974m14.99-5.363A13.939 13.939 0 0 0 12 1a13.94 13.94 0 0 0-6.481 1.587"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Fireball.js
function Fireball_extends() {
  Fireball_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Fireball_extends.apply(this, arguments);
}



var Fireball = function Fireball(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Fireball_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Fireball"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-9-1.75 1 .75-2-1.25-1h1.5L12 9.25l.75 1.75h1.5L13 12l.75 2L12 13z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Firefox.js
function Firefox_extends() {
  Firefox_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Firefox_extends.apply(this, arguments);
}



var Firefox = function Firefox(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Firefox_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Firefox"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#E66000",
    fillRule: "evenodd",
    d: "m4.25 1-.145 3.684c.624-.154 1.235-.246 1.83.01 1.291-1.768 3.148-2.376 5.194-2.6l.038.06c-.04.045-.08.089-.122.131a9.473 9.473 0 0 0-1.948 2.847c-.134.306-.166.658-.238.99-.029.129.037.198.168.216.607.083 1.212.18 1.822.25.382.043.769.051 1.154.067.18.008.258.097.262.267.015.684-.213 1.27-.759 1.69a4.414 4.414 0 0 1-1.781.804c-.068.015-.135.035-.208.054l.198 2.515-1.854-.888c-.186.392-.2.78-.082 1.176.316 1.073 1.431 1.695 2.586 1.41.404-.1.795-.27 1.176-.444.376-.17.729-.39 1.096-.583.622-.324 1.249-.296 1.874-.006.09.041.18.095.249.165.234.234.417.503.323.857-.091.342-.34.54-.677.611a2.823 2.823 0 0 1-.594.059c-.132-.001-.202.042-.274.148-.68 1.009-1.562 1.752-2.79 1.964-.517.09-1.05.075-1.576.104-.07.004-.14-.006-.255-.012.07.064.105.104.147.135 1.39 1.027 2.927 1.378 4.614.974 1.381-.33 2.61-.949 3.623-1.965.966-.968 1.408-2.15 1.422-3.496.014-1.353-.288-2.634-.98-3.807-.121-.205-.279-.39-.454-.63 1.19.54 2.24 1.153 2.727 2.42.143-1.582-.148-3.08-.758-4.525-.61-1.444-1.485-2.695-2.682-3.731.05.01.1.018.149.034 2.694.844 4.763 2.45 6.056 4.991.626 1.23.946 2.552 1.111 3.913.177 1.457.156 2.906-.216 4.338-.622 2.398-1.935 4.359-3.753 6.013-1.73 1.574-3.745 2.595-6.052 2.887-5.14.651-9.19-1.198-12.063-5.526C.665 16.849.126 14.92.023 12.859-.144 9.51.61 6.385 2.272 3.478A9.851 9.851 0 0 1 4.049 1.18c.05-.048.102-.093.2-.181"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Firewall.js
function Firewall_extends() {
  Firewall_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Firewall_extends.apply(this, arguments);
}



var Firewall = function Firewall(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Firewall_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Firewall"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.006 2.02a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zm5.916 2.976a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1h-5.8zm-8.822 0a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1H3.1zm0 9.992a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1H3.1zm7.723 1.1a1.1 1.1 0 0 1 1.1-1.1h5.8a1.1 1.1 0 0 1 1.1 1.1v1.8a1.1 1.1 0 0 1-1.1 1.1h-5.8a1.1 1.1 0 0 1-1.1-1.1v-1.8zm-5.975-5.015a1.1 1.1 0 0 1 1.1-1.1h5.8a1.1 1.1 0 0 1 1.1 1.1v1.8a1.1 1.1 0 0 1-1.1 1.1h-5.8a1.1 1.1 0 0 1-1.1-1.1v-1.8zm9.866-1.061a1.1 1.1 0 0 0-1.1 1.1v1.8a1.1 1.1 0 0 0 1.1 1.1h5.8a1.1 1.1 0 0 0 1.1-1.1v-1.8a1.1 1.1 0 0 0-1.1-1.1h-5.8zM14 3.019a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm1 16.962a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-6zm-9.988 1a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1zM3 9.973a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zm16.63-3.977a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2zm1.015 8.992a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zM2 20.981a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM3.011 2.019a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FlagFill.js
function FlagFill_extends() {
  FlagFill_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FlagFill_extends.apply(this, arguments);
}



var FlagFill = function FlagFill(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FlagFill_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FlagFill"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 24V2c8-3.524 11 4.644 20 0v12c-8 4.895-13-4.103-20 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Flag.js
function Flag_extends() {
  Flag_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Flag_extends.apply(this, arguments);
}



var Flag = function Flag(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Flag_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Flag"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 24V2c8-3.524 11 4.644 20 0v12c-8 4.895-13-4.103-20 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Flows.js
function Flows_extends() {
  Flows_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Flows_extends.apply(this, arguments);
}



var Flows = function Flows(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Flows_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Flows"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 2a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5zM4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zm1 8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H5zm-1 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FolderCycle.js
function FolderCycle_extends() {
  FolderCycle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FolderCycle_extends.apply(this, arguments);
}



var FolderCycle = function FolderCycle(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FolderCycle_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FolderCycle"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 18a5 5 0 0 1 5-5c1.985 0 3.7 1.156 4.5 3m.5 2a5 5 0 0 1-5 5c-1.985 0-3.699-1.156-4.5-3m5.5-4h4v-4m-6 8H7v4m-3-1H1V1h8l3 4h11v18h-4M1 9h22M4 23H1V1h8l3 4h11v18h-4M1 9h22"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FolderOpen.js
function FolderOpen_extends() {
  FolderOpen_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FolderOpen_extends.apply(this, arguments);
}



var FolderOpen = function FolderOpen(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FolderOpen_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FolderOpen"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 2h6l2 4h6v4H5V2zm-3 8h20l-3 12H5L2 10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Folder.js
function Folder_extends() {
  Folder_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Folder_extends.apply(this, arguments);
}



var Folder = function Folder(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Folder_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Folder"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 10V2h8l3 4h9v4H2zm0 0h20v12H2V10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormAdd.js
function FormAdd_extends() {
  FormAdd_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormAdd_extends.apply(this, arguments);
}



var FormAdd = function FormAdd(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormAdd_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormAdd"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 18V6m-6 6h12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormAttachment.js
function FormAttachment_extends() {
  FormAttachment_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormAttachment_extends.apply(this, arguments);
}



var FormAttachment = function FormAttachment(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormAttachment_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormAttachment"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m6 13.293 6.36-6.36c2.828-2.828 7.069 1.413 4.242 4.24l-6.361 6.36c-1.414 1.414-3.534-.706-2.12-2.12l6.36-6.36"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormCalendar.js
function FormCalendar_extends() {
  FormCalendar_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormCalendar_extends.apply(this, arguments);
}



var FormCalendar = function FormCalendar(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormCalendar_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormCalendar"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 19h12V8H6v11zm9-11V5v3zM9 8V5v3zm-3 3.5h12H6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormCheckmark.js
function FormCheckmark_extends() {
  FormCheckmark_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormCheckmark_extends.apply(this, arguments);
}



var FormCheckmark = function FormCheckmark(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormCheckmark_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormCheckmark"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m6 13 4.2 3.6L18 7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormClock.js
function FormClock_extends() {
  FormClock_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormClock_extends.apply(this, arguments);
}



var FormClock = function FormClock(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormClock_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormClock"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-10v4l3 1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormClose.js
function FormClose_extends() {
  FormClose_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormClose_extends.apply(this, arguments);
}



var FormClose = function FormClose(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormClose_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormClose"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m7 7 10 10M7 17 17 7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormCut.js
function FormCut_extends() {
  FormCut_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormCut_extends.apply(this, arguments);
}



var FormCut = function FormCut(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormCut_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormCut"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m18 7.524-7.857 6.286L18 7.524zm0 8.38L10.143 9.62 18 15.905zm-9.429-5.761a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143zm0 6.286a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormDown.js
function FormDown_extends() {
  FormDown_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormDown_extends.apply(this, arguments);
}



var FormDown = function FormDown(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormDown_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormDown"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m18 9-6 6-6-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormEdit.js
function FormEdit_extends() {
  FormEdit_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormEdit_extends.apply(this, arguments);
}



var FormEdit = function FormEdit(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormEdit_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormEdit"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m11.996 8.336 3.497 3.498-3.497-3.498zm5.54-.54a.994.994 0 0 1-.004 1.416l-7.451 7.451L6 17.83l1.166-4.08 7.451-7.452a.997.997 0 0 1 1.416-.005l1.504 1.504z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormFilter.js
function FormFilter_extends() {
  FormFilter_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormFilter_extends.apply(this, arguments);
}



var FormFilter = function FormFilter(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormFilter_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormFilter"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m6 8 5.667 4.667V18h.666v-5.333L18 8V6H6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormFolder.js
function FormFolder_extends() {
  FormFolder_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormFolder_extends.apply(this, arguments);
}



var FormFolder = function FormFolder(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormFolder_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormFolder"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 18V6h4.8l1.8 2.4H18V18z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormLocation.js
function FormLocation_extends() {
  FormLocation_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormLocation_extends.apply(this, arguments);
}



var FormLocation = function FormLocation(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormLocation_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormLocation"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 17s-4-3-4-6c0-2.5 2-4 4-4s4 1.5 4 4c0 3-4 6-4 6zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormLock.js
function FormLock_extends() {
  FormLock_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormLock_extends.apply(this, arguments);
}



var FormLock = function FormLock(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormLock_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormLock"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 11V8a3 3 0 0 1 6 0v3m-3 2v3m5 2v-7H7v7h10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormNextLink.js
function FormNextLink_extends() {
  FormNextLink_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormNextLink_extends.apply(this, arguments);
}



var FormNextLink = function FormNextLink(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormNextLink_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormNextLink"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 12.4h12M12.6 7l5.4 5.4-5.4 5.4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormNext.js
function FormNext_extends() {
  FormNext_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormNext_extends.apply(this, arguments);
}



var FormNext = function FormNext(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormNext_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormNext"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m9 6 6 6-6 6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormPreviousLink.js
function FormPreviousLink_extends() {
  FormPreviousLink_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormPreviousLink_extends.apply(this, arguments);
}



var FormPreviousLink = function FormPreviousLink(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormPreviousLink_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormPreviousLink"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 12.4H6M11.4 7 6 12.4l5.4 5.4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormPrevious.js
function FormPrevious_extends() {
  FormPrevious_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormPrevious_extends.apply(this, arguments);
}



var FormPrevious = function FormPrevious(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormPrevious_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormPrevious"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m15 6-6 6 6 6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormRefresh.js
function FormRefresh_extends() {
  FormRefresh_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormRefresh_extends.apply(this, arguments);
}



var FormRefresh = function FormRefresh(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormRefresh_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormRefresh"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17.333 9.333C16.398 7.36 14.358 6 12 6a6 6 0 1 0 6 6m.5-6v4h-4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormSchedule.js
function FormSchedule_extends() {
  FormSchedule_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormSchedule_extends.apply(this, arguments);
}



var FormSchedule = function FormSchedule(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormSchedule_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormSchedule"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 19h12V8H6v11zm2-4h2-2zm3 0h5-5zm4-7V5v3zM9 8V5v3zm-3 3.5h12H6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormSearch.js
function FormSearch_extends() {
  FormSearch_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormSearch_extends.apply(this, arguments);
}



var FormSearch = function FormSearch(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormSearch_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormSearch"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M13.8 13.8 18 18l-4.2-4.2zM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormSubtract.js
function FormSubtract_extends() {
  FormSubtract_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormSubtract_extends.apply(this, arguments);
}



var FormSubtract = function FormSubtract(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormSubtract_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormSubtract"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 12h12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormTrash.js
function FormTrash_extends() {
  FormTrash_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormTrash_extends.apply(this, arguments);
}



var FormTrash = function FormTrash(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormTrash_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormTrash"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7.5 9h9v10h-9V9zM5 9h14M9.364 6h5v3h-5V6zm1.181 5v6m3-6v6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormUp.js
function FormUp_extends() {
  FormUp_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormUp_extends.apply(this, arguments);
}



var FormUp = function FormUp(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormUp_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormUp"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m18 15-6-6-6 6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormUpload.js
function FormUpload_extends() {
  FormUpload_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormUpload_extends.apply(this, arguments);
}



var FormUpload = function FormUpload(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormUpload_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormUpload"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 14.182v3.273h12v-3.273M12 6v8M8.182 9.818 12 6l3.818 3.818"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormViewHide.js
function FormViewHide_extends() {
  FormViewHide_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormViewHide_extends.apply(this, arguments);
}



var FormViewHide = function FormViewHide(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormViewHide_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormViewHide"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 12h3c.5 2.5 3.273 5 6 5s5.5-2.5 6-5h3m-9 5v3m-4.5-4.5-2 2m11-2 2 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/FormView.js
function FormView_extends() {
  FormView_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormView_extends.apply(this, arguments);
}



var FormView = function FormView(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, FormView_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormView"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 17c-2.727 0-6-2.778-6-5s3.273-5 6-5 6 2.778 6 5-3.273 5-6 5zm-1-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ForwardTen.js
function ForwardTen_extends() {
  ForwardTen_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ForwardTen_extends.apply(this, arguments);
}



var ForwardTen = function ForwardTen(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ForwardTen_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ForwardTen"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20.889 7.556C19.33 4.267 15.93 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m0-8v4h-4m-9 8V9l-2 .533M17 12c0-2-1-3.5-2.5-3.5S12 10 12 12s1 3.5 2.5 3.5S17 14 17 12zm-2.5-3.5C16.925 8.5 17 11 17 12s0 3.5-2.5 3.5S12 13 12 12s.059-3.5 2.5-3.5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Freebsd.js
function Freebsd_extends() {
  Freebsd_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Freebsd_extends.apply(this, arguments);
}



var Freebsd = function Freebsd(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Freebsd_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Freebsd"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#9B2718",
    fillRule: "evenodd",
    d: "M23.725.403c1.273 1.272-2.254 6.862-2.85 7.458-.597.596-2.111.048-3.383-1.224-1.272-1.272-1.82-2.787-1.224-3.383.596-.596 6.185-4.123 7.457-2.85zM5.885 1.75C3.943.647 1.179-.58.3.3c-.891.89.38 3.717 1.493 5.662A11.945 11.945 0 0 1 5.885 1.75zm15.9 5.674c.179.606.147 1.108-.143 1.397-.678.678-2.508-.044-4.158-1.614a8.227 8.227 0 0 1-.341-.323c-.596-.597-1.06-1.232-1.357-1.817-.578-1.036-.723-1.952-.286-2.388.238-.238.619-.303 1.083-.22.303-.19.66-.404 1.053-.623a11.491 11.491 0 0 0-5.33-1.301C5.928.534.757 5.704.757 12.082S5.927 23.63 12.306 23.63c6.378 0 11.548-5.17 11.548-11.548 0-2.06-.54-3.991-1.485-5.666-.204.373-.403.714-.584 1.007z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Gallery.js
function Gallery_extends() {
  Gallery_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Gallery_extends.apply(this, arguments);
}



var Gallery = function Gallery(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Gallery_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gallery"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h18v18H1V1zm4 18v4h18V5.97h-4M6 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM2 18l5-6 3 3 4-5 5 6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Gamepad.js
function Gamepad_extends() {
  Gamepad_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Gamepad_extends.apply(this, arguments);
}



var Gamepad = function Gamepad(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Gamepad_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gamepad"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 6V2m0 4c2.498.044 4.006 0 5 0 2 0 4 .5 5 4s1 5.5 1 8-2 3-4 3-3.054-4-7-4-5 4-7 4-4-.5-4-3 0-4.5 1-8 3-4 5-4c.994 0 2.502.044 5 0zm6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 12h6M7 9v6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Gateway.js
function Gateway_extends() {
  Gateway_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Gateway_extends.apply(this, arguments);
}



var Gateway = function Gateway(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Gateway_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gateway"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm11.031-5.031H13V4h-2v2.969H8.969l1.2 1.6L11.2 9.944l.8 1.066.8-1.066 1.031-1.375 1.2-1.6h-2zM12 12.997l-.8 1.067-1.031 1.375-1.2 1.6H11V20h2v-2.96h2.031l-1.2-1.6-1.031-1.376-.8-1.067zM4.025 12.8 2.958 12l1.067-.8L5.4 10.169l1.6-1.2V11h3v2H7v2.031l-1.6-1.2L4.025 12.8zm17.017-.8-1.067-.8-1.375-1.031-1.6-1.2V11h-3v2h3v2.031l1.6-1.2 1.375-1.031 1.067-.8z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Gatsbyjs.js
function Gatsbyjs_extends() {
  Gatsbyjs_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Gatsbyjs_extends.apply(this, arguments);
}



var Gatsbyjs = function Gatsbyjs(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Gatsbyjs_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gatsbyjs"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#639",
    d: "M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm10-11.908h-6.452v1.834h4.424c-.645 2.753-2.674 5.046-5.346 5.964L4.027 9.34c1.106-3.211 4.24-5.505 7.835-5.505 2.765 0 5.254 1.377 6.82 3.487l1.383-1.193C18.22 3.651 15.272 2 11.862 2 7.069 2 3.014 5.395 2 9.89L14.165 22C18.59 20.899 22 16.862 22 12.091v.001zM2 12c0 2.593 1.018 5.092 2.963 7.037C6.908 20.982 9.5 22 12 22L2 12z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Gem.js
function Gem_extends() {
  Gem_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Gem_extends.apply(this, arguments);
}



var Gem = function Gem(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Gem_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gem"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 1h-.414l-.293.293-3 3L3 4.586v14.828l.293.293 3 3 .293.293h10.828l.293-.293 3-3 .293-.293V4.586l-.293-.293-3-3L17.414 1H7zM5 6v12h1V6H5zm3 15h8v-1H8v1zm11-3V6h-1v12h1zM16 3H8v1h8V3zm0 3v12H8V6h8z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Gift.js
function Gift_extends() {
  Gift_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Gift_extends.apply(this, arguments);
}



var Gift = function Gift(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Gift_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gift"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 11h18v12H3V11zm-1 0V7h20v4H2zm10 12V7v16zM7 7h5s-2-5-5-5C3.5 2 3 7 7 7zm10.184 0h-5s1.816-5 5-5c3.316 0 4 5 0 5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Github.js
function Github_extends() {
  Github_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Github_extends.apply(this, arguments);
}



var Github = function Github(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Github_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Github"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437.55.102.75-.238.75-.53 0-.26-.009-.952-.014-1.87-3.06.664-3.706-1.475-3.706-1.475-.5-1.27-1.221-1.61-1.221-1.61-.999-.681.075-.668.075-.668 1.105.078 1.685 1.134 1.685 1.134.981 1.68 2.575 1.195 3.202.914.1-.71.384-1.195.698-1.47-2.442-.278-5.01-1.222-5.01-5.437 0-1.2.428-2.183 1.132-2.952-.114-.278-.491-1.397.108-2.91 0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128.6 1.514.223 2.633.11 2.911.705.769 1.13 1.751 1.13 2.952 0 4.226-2.572 5.156-5.022 5.428.395.34.747 1.01.747 2.037 0 1.47-.014 2.657-.014 3.017 0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Globe.js
function Globe_extends() {
  Globe_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Globe_extends.apply(this, arguments);
}



var Globe = function Globe(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Globe_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Globe"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 8s3.5 1 5 2 .564 2.42 1 3c.436.58 2-1 2 2s3 1 3 4 2.5 2.5 3 1 2.233-3.134 2-5c-.233-1.866-1-3-3-3s-3.5-.5-4-2 3-2 2-5 0-4 0-4m10 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Golang.js
function Golang_extends() {
  Golang_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Golang_extends.apply(this, arguments);
}



var Golang = function Golang(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Golang_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Golang"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#8CC5E7",
    d: "M21.468 3.206c.713 1.474-1.455 1.631-1.344 2.289.204 1.186.065 2.947-.092 4.68-.27 2.937 1.927 9.97-2.65 12.796-.862.538-2.91.834-4.93.88h-.019c-2.02-.046-4.346-.342-5.208-.88-4.568-2.826-2.372-9.859-2.631-12.796-.167-1.733-.306-3.494-.093-4.68.111-.658-2.057-.806-1.343-2.289.611-1.27 2.122-.148 2.501-.547C7.596.65 9.95.111 11.803.065h1.02c1.843.093 4.197.593 6.143 2.594.38.399 1.881-.722 2.502.547zm-10.036 7.7c-.083.038-.222.946.204.992.288.028 1.075.12 1.26 0 .362-.232.325-.788.121-.927-.343-.222-1.492-.11-1.585-.064zm-2.352-6.8c-.955-.111-2.558.778-2.799 2.669-.26 1.964 2.057 3.91 4.281 1.964 1.196-1.047 1.613-4.272-1.482-4.633zm6.45 0c-3.096.361-2.679 3.586-1.483 4.633 2.223 1.946 4.54 0 4.28-1.964-.231-1.89-1.834-2.78-2.798-2.669z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8937F",
    d: "M12.313 8.988c.584-.083 1.983.584 1.89 1.372-.111.917-3.605 1.038-3.79-.056-.111-.667.417-1.093 1.9-1.316zm7.885 7.386c-.287-.01-.472-.39-.472-.621 0-.417.055-.908.361-1.121.63-.436 1.13 1.751.111 1.742zm-15.78 0c-1.02.009-.52-2.178.111-1.742.306.213.361.704.361 1.12 0 .233-.185.612-.472.622zm13.844 6.718c.185.269.194.454-.102.593-1.13.519-2.14-.176-1.76-.37.805-.408 1.306-1.048 1.862-.223zm-11.908.093c.556-.825 1.057-.186 1.863.222.38.195-.63.89-1.76.37-.297-.138-.288-.324-.103-.592z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#000",
    d: "M19.735 3.429c.046-.195.528-.288.797.046.324.398-.473.945-.51.723-.092-.603-.342-.575-.287-.77zm-14.854 0c.056.194-.195.166-.287.769-.037.222-.834-.325-.51-.723.26-.334.741-.241.797-.046zm10.86 4.512a1.056 1.056 0 1 1 0-2.112 1.056 1.056 0 0 1 0 2.112zm-.278-1.177a.334.334 0 1 0 0-.667.334.334 0 0 0 0 .667zm-4.105 2.67c.111-.427.5-.566.816-.575.806-.019 1.112.417 1.14.76.055.583-2.206.722-1.956-.186zM8.875 7.94a1.056 1.056 0 1 1 0-2.112 1.056 1.056 0 0 1 0 2.112zm.278-1.177a.334.334 0 1 0 0-.667.334.334 0 0 0 0 .667z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/GooglePlay.js
function GooglePlay_extends() {
  GooglePlay_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return GooglePlay_extends.apply(this, arguments);
}



var GooglePlay = function GooglePlay(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, GooglePlay_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlay"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    stroke: "#444",
    strokeWidth: "2"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinejoin: "round",
    d: "M3 2v20l18-10z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m3 2 11 14M3 22 14 8"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/GooglePlus.js
function GooglePlus_extends() {
  GooglePlus_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return GooglePlus_extends.apply(this, arguments);
}



var GooglePlus = function GooglePlus(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, GooglePlus_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlus"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#4285F4",
    fillRule: "evenodd",
    d: "M.02 11.203c.066-3.906 3.676-7.327 7.603-7.197 1.882-.087 3.65.728 5.091 1.872a27.061 27.061 0 0 1-1.932 1.991C9.05 6.68 6.586 6.338 4.853 7.713c-2.478 1.705-2.59 5.731-.207 7.567 2.318 2.092 6.7 1.053 7.34-2.15-1.451-.022-2.907 0-4.36-.048-.003-.861-.007-1.723-.003-2.585a707.94 707.94 0 0 1 7.286.008c.145 2.027-.124 4.185-1.376 5.86-1.896 2.655-5.702 3.43-8.672 2.292-2.98-1.13-5.092-4.26-4.84-7.454m19.623-2.882h2.165c.004.721.007 1.445.015 2.165.724.008 1.452.008 2.176.015v2.154c-.724.007-1.448.011-2.176.018-.008.724-.011 1.445-.015 2.165H19.64c-.007-.72-.007-1.44-.014-2.161l-2.177-.022v-2.154c.725-.007 1.449-.01 2.177-.015.003-.724.01-1.444.018-2.165"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/GoogleWallet.js
function GoogleWallet_extends() {
  GoogleWallet_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return GoogleWallet_extends.apply(this, arguments);
}



var GoogleWallet = function GoogleWallet(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, GoogleWallet_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "GoogleWallet"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#4285F4",
    fillRule: "evenodd",
    d: "M12.3 20.206a2.365 2.365 0 0 1-2.722 1.046 2.386 2.386 0 0 1-1.687-2.377c-.34-3.8-2.458-7.06-5.693-8.798a2.258 2.258 0 0 1-.93-3.058c.4-.748 1.162-1.2 2-1.2.375 0 .749.09 1.071.271 2.145 1.143 4.035 2.785 5.4 4.658-.185-1.543-.673-3.047-1.49-4.36a2.393 2.393 0 0 1-.193-2.04 2.339 2.339 0 0 1 1.393-1.432 2.05 2.05 0 0 1 .852-.155c.464 0 .916.142 1.29.387.035.022.068.043.101.066-.036-.04-.1-.079-.1-.079 2.782 1.701 5.153 4.045 6.791 6.66a19.654 19.654 0 0 0-1.773-6.22 2.497 2.497 0 0 1 1.188-3.33A2.37 2.37 0 0 1 18.868 0a2.53 2.53 0 0 1 2.259 1.432 24.472 24.472 0 0 1 1.767 5.084c.4 1.78.62 3.652.633 5.51 0 1.884-.22 3.716-.62 5.51-.103.477-.22.929-.361 1.406-.439 1.587-.942 2.813-1.445 3.755A2.504 2.504 0 0 1 18.907 24c-.374 0-.735-.09-1.07-.245-.75-.349-1.2-.994-1.368-1.703a2.49 2.49 0 0 1-.065-.581c0-.542-.026-.903-.026-.903 0-2.695-.644-5.261-1.83-7.518a15.707 15.707 0 0 1-2.247 7.156z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Google.js
function Google_extends() {
  Google_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Google_extends.apply(this, arguments);
}



var Google = function Google(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Google_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Google"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#EA4335",
    d: "M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#34A853",
    d: "M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#4A90E2",
    d: "M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FBBC05",
    d: "M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/GraphQl.js
function GraphQl_extends() {
  GraphQl_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return GraphQl_extends.apply(this, arguments);
}



var GraphQl = function GraphQl(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, GraphQl_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "GraphQl"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#E535AB",
    d: "m14.334 2.852 4.71 2.72c.142-.15.308-.28.495-.39A2.234 2.234 0 0 1 22.585 6a2.234 2.234 0 0 1-1.546 3.31v5.38a2.228 2.228 0 1 1-2.166 3.544l-4.626 2.67A2.231 2.231 0 0 1 12.192 24a2.227 2.227 0 0 1-2.12-2.925l-4.678-2.701a2.23 2.23 0 1 1-2.27-3.634l.001-5.48A2.232 2.232 0 0 1 1.798 6a2.232 2.232 0 0 1 3.458-.51l4.765-2.752A2.227 2.227 0 0 1 12.192 0a2.227 2.227 0 0 1 2.142 2.852zm-.493.88c-.05.054-.103.106-.157.155l6.278 10.875.069-.02V9.255a2.226 2.226 0 0 1-1.501-2.816L13.84 3.73zm-3.28.019a2.237 2.237 0 0 1-.093-.107L5.816 6.33a2.227 2.227 0 0 1-1.683 2.976v5.386l.1.02L10.56 3.751zm2.24.624a2.237 2.237 0 0 1-1.401-.06L5.14 15.154a2.238 2.238 0 0 1 .74 1.12h12.621a2.236 2.236 0 0 1 .595-.996L12.8 4.375zm.949 15.8 4.739-2.736a2.247 2.247 0 0 1-.035-.157H5.93c-.013.07-.03.14-.049.208l4.716 2.723a2.22 2.22 0 0 1 1.596-.672c.607 0 1.156.242 1.558.634z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Gremlin.js
function Gremlin_extends() {
  Gremlin_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Gremlin_extends.apply(this, arguments);
}



var Gremlin = function Gremlin(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Gremlin_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Gremlin"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 2c.5 0 1-.321 1-1 0-.113-2-.075-2 0 0 .679.5 1 1 1zm-9 8s.003-8 0-12c.003-4-.447-8 9-8s8.997 4 9 8c-.003 4 0 12 0 12m-.932-17c3.26 0 3.58-3.58 2.046-5.114C20.58.352 17 .673 17 3.932M7 19c0-.203 2.5 1.152 5 1 2.5.152 5-1.499 5-1 0 .802-1.5 2-5 2s-5-1.493-5-2zM3.945 7C.605 7 .38 3.42 1.908 1.886 3.435.352 7 .673 7 3.932"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Grid.js
function Grid_extends() {
  Grid_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Grid_extends.apply(this, arguments);
}



var Grid = function Grid(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Grid_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Grid"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 1v22m8-22v22M1 8h22M1 16h22M1 1h22v22H1V1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Grommet.js
function Grommet_extends() {
  Grommet_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Grommet_extends.apply(this, arguments);
}



var Grommet = function Grommet(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Grommet_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Grommet"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#865CD6",
    strokeWidth: "4",
    d: "M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10 10-4.485 10-10S17.515 2 12 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Group.js
function Group_extends() {
  Group_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Group_extends.apply(this, arguments);
}



var Group = function Group(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Group_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Group"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-6 9v-3a6 6 0 1 1 12 0v3M13 5c.404-1.664 2.015-3 4-3 2.172 0 3.98 1.79 4 4-.02 2.21-1.828 4-4 4h-1 1c3.288 0 6 2.686 6 6v2M11 5c-.404-1.664-2.015-3-4-3-2.172 0-3.98 1.79-4 4 .02 2.21 1.828 4 4 4h1-1c-3.288 0-6 2.686-6 6v2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Grow.js
function Grow_extends() {
  Grow_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Grow_extends.apply(this, arguments);
}



var Grow = function Grow(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Grow_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Grow"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 16V7m0 4c0-3 0-6-7-6 0 3 0 6 7 6zm-8 5h16m-2 0-2 7H8l-2-7m6-9c0-3 0-6 7-6 0 3 0 6-7 6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Hadoop.js
function Hadoop_extends() {
  Hadoop_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Hadoop_extends.apply(this, arguments);
}



var Hadoop = function Hadoop(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Hadoop_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Hadoop"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#92CCF4",
    fillRule: "evenodd",
    d: "M22.615 8.515c-.162.64-.49 1.186-1.168 1.428-.332.118-.547-.004-.886-.102.333.032.524.083.822-.064a2.72 2.72 0 0 0 1.232-1.262zm1.355 4.215c-.08.777-.287 1.532-.656 2.172a3.548 3.548 0 0 1-1.407 1.385c-.417.222-.902.35-1.403.403a5.83 5.83 0 0 1-1.56-.06l-.07.234c-.03.097-.06.194-.088.29-.103.337-.347.64-.652.865-.314.232-.698.383-1.055.4a1.443 1.443 0 0 1-.84-.203c-.226-.133-.42-.318-.631-.522l-.277-.267-.187-.18-.02.123c.098.197.167.382.237.572.045.12.09.241.145.373.082.195.144.358.187.527.043.17.066.344.072.557l.015.542c.004.17.008.341.014.512.075.136.12.23.142.334a1.3 1.3 0 0 1 .01.393c-.028.394-.158.614-.377.739-.206.116-.478.133-.814.132l-.235-.001c-.327 0-.832 0-.986-.01a3.395 3.395 0 0 1-.525-.066.762.762 0 0 1-.28-.121c-.112.09-.21.171-.309.252-.29.24-.584.483-.702.561a4.06 4.06 0 0 0-.125.206c-.121.214-.211.371-.498.527-.564.304-1 .278-1.382.043-.365-.224-.666-.635-.98-1.12-.15-.23-.39-.61-.506-.983-.129-.412-.11-.812.3-1.023l.058-.03.123-.064a7.16 7.16 0 0 1-1.393-.05l.012.086c.024.208.04.344.02.48-.02.14-.075.265-.193.442l-.058.082c-.11.163-.175.26-.326.594.015.165.02.298.009.43a2.702 2.702 0 0 1-.093.477c-.13.478-.61.588-1.142.554-.488-.03-1.023-.184-1.332-.268l-.174-.046a4.952 4.952 0 0 1-.778-.248c-.473-.216-.777-.555-.481-1.204a4.04 4.04 0 0 0 .127-.314c.014-.037.024-.073.036-.11a1.48 1.48 0 0 1-.746-.103c-.437-.166-.853-.483-1.108-.738a2.696 2.696 0 0 1-.482-.65 2.495 2.495 0 0 1-.252-.748c-.069-.408-.02-.455.22-.687l.087-.083.357-.354c.127-.126.256-.253.382-.38l.175-.472.111-.305a5.999 5.999 0 0 1-.083-.596 9.29 9.29 0 0 1-.037-1.14c.01-.256.034-.492.073-.718-.2.044-.402.041-.586-.017a.905.905 0 0 1-.55-.489 2.162 2.162 0 0 1-.116-.299 5.379 5.379 0 0 1-.088-.322.993.993 0 0 1-.286-.525 1.016 1.016 0 0 1 .098-.612 2.04 2.04 0 0 1 .384-.536c.425-.442 1.03-.774 1.31-.823l.212-.037-.07.203c-.037.102-.08.21-.12.315-.013.03-.024.061-.037.095a.69.69 0 0 1 .243.406c.057.25.02.537-.028.753l-.058.258-.163-.207c-.04-.049-.073-.1-.104-.149a1.443 1.443 0 0 0-.086-.122c-.022.336-.063.672-.302.902.007.028.01.044.015.047.004.002.044-.02.142-.058.169-.065.318-.172.46-.298.144-.13.276-.28.41-.426.152-.294.325-.573.528-.837.205-.27.441-.526.713-.766a6.577 6.577 0 0 1 2.047-1.266c.72-.278 1.521-.453 2.506-.611a12.88 12.88 0 0 1 .809-.78 1.96 1.96 0 0 1 .562-.368c.158-.065.313-.09.488-.103.301-.4.575-.744.898-1.042a4.13 4.13 0 0 1 1.247-.792c1.082-.456 1.999-.694 2.866-.64.873.055 1.69.405 2.566 1.128.165.136.334.284.502.43.367.324.727.64 1.15.904.16.099.294.185.427.286.132.1.253.212.38.362.153.183.292.366.415.562.103.163.193.337.272.527.18-.072.369-.152.521-.28.131-.113.24-.273.35-.432.097-.143.195-.286.312-.403a.476.476 0 0 1 .128-.095c.178-.094.404-.079.618-.005.202.07.397.192.53.323.06.06.11.123.141.185.266.509.458 1.216.573 1.943.13.818.164 1.665.102 2.288zm-3.725-3.348a9.904 9.904 0 0 0-.113.003.614.614 0 0 1 .13.19.414.414 0 0 1 .052-.043 6.955 6.955 0 0 0-.069-.15zM1.499 11.654c.098-.011.16.04.236.116-.014-.181-.048-.316-.176-.39l-.025.088c-.016.059-.026.12-.035.186zm.391 1.98a9.669 9.669 0 0 1 .228-.666 1.715 1.715 0 0 1-.518.33c-.524.21-.513.029-.739-.426.48-.383.258-.853.41-1.382.036-.122.087-.24.16-.397C.93 11.395.006 12.24.623 12.88c.067.241.118.43.21.62.189.395.682.294 1.057.135zm1.389 6.399c-.537-.811-1.021-1.778-1.305-2.76l-.158.421-.72.73c-.178.18-.213.187-.177.442.048.35.255.723.564 1.038.282.288 1.258 1.04 1.641.528.082-.11.12-.245.155-.384v-.015zm11.783-1.536c-.085-.202-.131-.39-.19-.582-.128.457-.3.886-.456 1.38-.148.467-.909 1.822-1.356 2.151.087.065.247.09.532.115.201.017.995.021 1.195.024.439.008.606-.025.65-.525.022-.245.002-.29-.12-.505l-.032-1.148c-.01-.362-.08-.572-.223-.91zm7.89-9.624c-.103-.247-.51-.618-.77-.366-.262.255-.459.614-.744.84-.389.305-1.057.2-.936.85.088.472.114 1.001.012 1.442-.096.423-.196 1.024-.417 1.308.065-.24.175-.867.206-1.29a3.72 3.72 0 0 0-.053-.791l-.147.003c-.178.004-.469.26-.547.419-.218.444-.233.856-.477 1.279.197-.473.086-.899.266-1.405.063-.179.223-.333.409-.427-.104-.015-.207.03-.36.065-.651.156-.622.668-1.023 1.157.387-.709.19-1.179 1.028-1.37.275-.063.477-.088.658.057h.011l.143-.012c-.023-.13-.049-.258-.074-.379a3.908 3.908 0 0 0-1.13.02c.085-.037.168-.071.248-.1.125-.046.247-.082.367-.103a.238.238 0 0 0 .023-.079.243.243 0 0 0-.218-.263.238.238 0 0 0-.259.218.303.303 0 0 0 .025.13.594.594 0 0 1 .015-.569.725.725 0 0 1-.42.006 2.616 2.616 0 0 0 .62-.21.59.59 0 0 1 .554-.034c.079.023.167.054.273.093a6.158 6.158 0 0 0-.562-.948c-.208-.289-.382-.388-.689-.57a6.177 6.177 0 0 1-.196-.12c-.227-.042-.48-.083-.698-.041.18-.07.315-.1.473-.112-.434-.311-.809-.66-1.237-1.02-1.653-1.39-2.99-1.292-5.095-.378-.854.372-1.16.746-1.686 1.418h.017a23.346 23.346 0 0 0 1.615-.084c-.568.133-1.112.239-1.67.323-.615.094-.804.078-1.269.53-.855.833-1.572 1.774-2.355 2.618-.453.49-.679.98-.945 1.537-.264.554-.227.764.127 1.243.362.491.58.713.734 1.148.4-.617.882-1.13 1.39-1.743a25.384 25.384 0 0 0-1.136 1.97c-.214.42-.319.635-.312 1.1.401.462.653.709 1.025.81.401.111.78.093 1.142-.095.902-.467 1.759-1.076 2.76-1.153.517-.92.372-2.079.186-3.127-.154-.87-.115-1.638.093-2.511.052.848.12 1.635.288 2.467.245 1.218.297 2.27-.216 3.528-1.106.027-2.014.675-2.995 1.177-.441.225-.854.248-1.348.13-.503-.119-.889-.507-1.407-1.074.05-.429.107-.695.26-1.01-.185-.557-.414-.812-.838-1.381-.49-.66-.499-.946-.128-1.697.268-.544.519-1.047.942-1.543.417-.492.8-.95 1.188-1.384-1.61.245-2.638.633-3.738 1.598-.815.715-1.324 1.604-1.687 2.63-.23.648-.294 1.3-.185 2.36.139 1.364.864 2.904 1.644 4.027-.095.7-.219 1.226-.414 1.726-.221.566.66.74 1.085.856.345.095 1.656.455 1.786-.01.077-.278.077-.473.058-.767.234-.466.305-.528.472-.804.178-.295.193-.413.195-.76 0-.447-.011-1.245.008-1.534.06.258.132.618.192.963a7.332 7.332 0 0 0 2.789-.036c.012-.065.033-.136.057-.223.063-.218.188-.436.25-.654l-.05.644c-.018.221-.019.4.009.62l.044.364c-.067-.11-.172-.218-.233-.33-.415.274-.643.428-1.05.643-.431.228.062 1.043.24 1.326.39.62.857 1.355 1.583.971.238-.125.378-.417.537-.626.213-.126 1.343-1.08 1.523-1.183.254-.146 1.167-1.642 1.283-2.015.255-.827.555-1.456.64-2.318-.582-.245-.864-.517-1.281-1.007a5.436 5.436 0 0 0 1.723.867c.23.203.463.408.704.623.35.312.672.63 1.18.639.55.01 1.17-.41 1.33-.931l.184-.602a5.48 5.48 0 0 1-.318-.087c-.114.274-.105.38-.158.582-.093.344-.567.583-1.063.463-.176-.043-.28-.067-.343-.113.05.136.147.251.328.284.2.037.347.053.638-.013-.36.187-.475.195-.73.138-.67-.149-.434-.956-.288-1.45.092-.31.06-.64-.009-.951.254.16.455.302.744.4 1.354.455 2.96.92 4.322.159 1.068-.596 1.654-1.919 1.785-3.13.118-1.08-.085-2.765-.527-3.836zm-6.909 6.503c-.026.168-.062.376-.089.544.072-.19.157-.41.24-.591.087-.192.136-.209.32-.31.133-.072.372-.17.503-.242-.135.023-.378.072-.512.095-.362.061-.405.148-.462.504zM9.865 8.908c-.419.415-.826 1.84-.956 2.409.204-.474.718-1.797 1.112-2.134a1.39 1.39 0 0 1 .266-.192c-.282.473-.261.59-.162 1.224.084-.644.307-.893.672-1.373.4-.101.776-.22 1.187-.381-.464.052-.926.1-1.39.144-.39.036-.452.03-.729.303zm6.964 1.58a.767.767 0 0 0-.432-.392c.167-.09.33-.183.457-.298-.373.173-.807.13-1.127.347-.283.19-.672.794-.959 1.05.207-.08.407-.22.591-.367a.762.762 0 0 0 .286.589.314.314 0 0 1-.06-.085.323.323 0 1 1 .6-.231 2.06 2.06 0 0 0-.412.403 1.729 1.729 0 0 0-.25.457 4.386 4.386 0 0 1 2.081-1.345 2.255 2.255 0 0 0-.705.118.763.763 0 0 0-.07-.247zm-2.666-.584c.126-.556.349-1.092 1.212-1.506-1.144.286-1.359.767-1.212 1.506z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Halt.js
function Halt_extends() {
  Halt_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Halt_extends.apply(this, arguments);
}



var Halt = function Halt(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Halt_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Halt"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 23h7c3 0 4-2 4-5V6c0-2-1-2-1.5-2S16 4 16 6v7-9c0-1 0-2-1.5-2S13 3 13 4v9V3c0-1 0-2-1.5-2S10 2 10 3v10-9c0-1 .03-2-1.5-2C7 2 7 3 7 4v14-4c0-1-.55-2-2-2H4v6c0 3.962 2 5.024 4 5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/HelpOption.js
function HelpOption_extends() {
  HelpOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return HelpOption_extends.apply(this, arguments);
}



var HelpOption = function HelpOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, HelpOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "HelpOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7zm5-3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5c-1.448 0-2 1.052-2 1.5a1 1 0 1 1-2 0c0-1.552 1.448-3.5 4-3.5 1.156 0 2.17.289 2.909.935C15.664 7.096 16 8.017 16 9c0 1.188-.306 2.028-.882 2.668a4.313 4.313 0 0 1-.828.693 14.92 14.92 0 0 1-.368.235l-.018.011c-.124.078-.236.15-.347.223-.35.236-.493.412-.55.526-.046.088-.077.205-.028.438a1 1 0 0 1-1.958.412c-.126-.6-.083-1.197.204-1.759.273-.535.718-.942 1.218-1.277.14-.094.277-.18.399-.257l.009-.006c.122-.076.228-.142.328-.21.205-.136.346-.25.453-.368.174-.193.368-.516.368-1.329 0-.517-.164-.846-.409-1.06-.261-.229-.747-.44-1.591-.44zm0 8.281a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Help.js
function Help_extends() {
  Help_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Help_extends.apply(this, arguments);
}



var Help = function Help(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Help_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Help"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5v-3c0-2 1-2 3-3s3-2.842 3-5A6 6 0 1 0 6 7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Heroku.js
function Heroku_extends() {
  Heroku_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Heroku_extends.apply(this, arguments);
}



var Heroku = function Heroku(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Heroku_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Heroku"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#6762A6",
    fillRule: "evenodd",
    d: "M20.443 0H3.162A2.162 2.162 0 0 0 1 2.162V21.84C1 23.034 1.97 24 3.162 24h17.28a2.159 2.159 0 0 0 2.16-2.16V2.162A2.16 2.16 0 0 0 20.442 0zm.958 21.84a.96.96 0 0 1-.958.96H3.162a.961.961 0 0 1-.962-.96V2.162c0-.532.432-.962.962-.962h17.28c.53 0 .96.43.96.962V21.84zm-15-1.439 2.701-2.4L6.4 15.6v4.8zm9.757-9.729c-.486-.488-1.373-1.071-2.856-1.071-1.627 0-3.303.424-4.5.812V3.6H6.4v10.41l1.697-.769c.028-.013 2.763-1.239 5.205-1.239 1.218 0 1.488.67 1.501 1.231v7.17h2.398v-7.2c.003-.155-.012-1.486-1.043-2.53M13 7.5h2.401c1.085-1.228 1.637-2.536 1.8-3.899h-2.399c-.267 1.36-.858 2.66-1.802 3.9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Hide.js
function Hide_extends() {
  Hide_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Hide_extends.apply(this, arguments);
}



var Hide = function Hide(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Hide_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Hide"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 17c-2.727 0-6-2.778-6-5s3.273-5 6-5 6 2.778 6 5-3.273 5-6 5zm-1-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm9-7L4 19"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/History.js
function History_extends() {
  History_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return History_extends.apply(this, arguments);
}



var History = function History(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, History_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "History"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1C7.563 1 4 4 2 7.5M1 1v7h7m8 9-4-4V6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/HomeOption.js
function HomeOption_extends() {
  HomeOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return HomeOption_extends.apply(this, arguments);
}



var HomeOption = function HomeOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, HomeOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "HomeOption"
  }, props), /*#__PURE__*/react.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "4",
    stroke: "#000",
    strokeWidth: "2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Home.js
function Home_extends() {
  Home_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Home_extends.apply(this, arguments);
}



var Home = function Home(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Home_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Home"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m1 11 11-9 11 9m-8 12v-8H9v8m-5 0V9m16 14V9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Horton.js
function Horton_extends() {
  Horton_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Horton_extends.apply(this, arguments);
}



var Horton = function Horton(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Horton_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Horton"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#89BA4E",
    fillRule: "evenodd",
    d: "M2.3 12.977h-.157c-.319.989-.755 1.957-.932 2.97-.222 1.292-.238 2.624-.34 3.936-.027.339.126.517.465.52 1.526.02 1.352.081 1.602-1.198.017-.089.029-.178.057-.267.52-1.658.545-3.285-.27-4.875-.178-.344-.283-.723-.424-1.086zm16.606-5.922a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0zm2.176 2.737c.206.44.153 1.021.15 1.538-.005.924-.057 1.849-.098 2.773a609.04 609.04 0 0 1-.125 2.922c-.577-.355-1.037-.605-1.457-.908-.141-.1-.242-.335-.254-.517-.097-1.097-.194-2.2-.226-3.301-.017-.695-.202-1.207-.925-1.405-.383-.1-.58-.367-.726-.735-.614-1.525-1.251-3.047-1.93-4.686 1.163.214 2.237.388 3.298.618.19.04.375.278.488.472.622 1.066 1.276 2.115 1.805 3.23zm.569 7.225c0 .016.016.028.04.08.771.057 1.615.352 2.172-.718-.364-.105-.686-.201-1.01-.286-1.202-.315-1.202-.315-1.202.924zm-6.3-3.205c-.098-.347-.271-.496-.63-.549-.436-.068-.933-.117-1.272-.359-1.497-1.086-2.942-2.244-4.424-3.354-.4-.303-.496-.618-.33-1.082.245-.694.455-1.4.718-2.208-.226.025-.331.029-.432.049-1.308.29-2.604.646-3.928.86-.86.14-1.38.577-1.9 1.25C1.888 10.055.92 11.79.564 13.85c-.13.754-.371 1.489-.565 2.232.06.04.125.08.186.12.125-.144.302-.27.367-.435.404-1.09.779-2.188 1.175-3.278.205-.565.387-.61.762-.129.243.307.465.658.594 1.021.69 1.95 1.352 3.908 2.026 5.861.408 1.19.412 1.17 1.683 1.175.48 0 .654-.17.614-.638-.085-1.013-.138-2.026-.23-3.035-.045-.517.185-.755.662-.884 1.174-.315 2.34-.654 3.507-.99.735-.205.807-.18 1.17.473.764 1.36 1.563 2.704 2.261 4.101.38.767.884 1.062 1.715.973.61-.065.658-.073.493-.682-.545-1.974-1.102-3.948-1.635-5.922zm-.118-7.54c-.38-1.04-.928-1.61-2.054-1.719-.719-.069-1.417-.36-2.128-.553h-.217c-.097.214-.214.42-.287.638-.408 1.223-.787 2.454-1.207 3.669-.157.452-.056.742.327 1.021 1.062.787 2.127 1.578 3.148 2.422 1.635.989 2.24.989 2.975.985.735-.004 1.32 0 2.059 0-.093-.263-.15-.448-.222-.626-.808-1.941-1.68-3.859-2.394-5.837zm-3.786 9.18c-.287.035-.658.052-.682.536-.053 1.082-.15 2.163-.234 3.354.02.25-.073.78.113.912.274.19.759.154 1.138.101.153-.02.34-.307.392-.508.14-.521.153-1.082.327-1.59.318-.945.12-1.777-.453-2.531-.12-.162-.411-.3-.601-.275zM24 15.725c-.093-.566-.145-1.082-.274-1.579-.033-.125-.291-.238-.46-.258-.11-.016-.32.113-.36.222-.286.75.19 1.506 1.094 1.615z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/HostMaintenance.js
function HostMaintenance_extends() {
  HostMaintenance_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return HostMaintenance_extends.apply(this, arguments);
}



var HostMaintenance = function HostMaintenance(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, HostMaintenance_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "HostMaintenance"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m14 23 6-6m1-3a2 2 0 1 0 2 2M17 4h1v1h-1V4zm-7 19H3V1h18v10M3 13h14M3 18h10M3 8h18"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Host.js
function Host_extends() {
  Host_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Host_extends.apply(this, arguments);
}



var Host = function Host(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Host_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Host"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 4h1v1h-1V4zM3 1h18v22H3V1zm0 12h18H3zm0 5h18H3zM3 8h18H3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Hp.js
function Hp_extends() {
  Hp_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Hp_extends.apply(this, arguments);
}



var Hp = function Hp(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Hp_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Hp"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "M8.421 0 5 15.127h2.138L10.56 0H8.421zm8.993 8.873-1.496 6.225h2.138l1.496-6.225h-2.138zm-3.635 0L10.36 24h2.138l3.42-15.127H13.78zm-3.647 0-1.497 6.225h2.138l1.496-6.225h-2.137z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/HpeLabs.js
function HpeLabs_extends() {
  HpeLabs_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return HpeLabs_extends.apply(this, arguments);
}



var HpeLabs = function HpeLabs(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, HpeLabs_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "HpeLabs"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#01A982",
    strokeWidth: "2",
    d: "M14 23H5V2h12v13h-4V6H9v13h11"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Hpe.js
function Hpe_extends() {
  Hpe_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Hpe_extends.apply(this, arguments);
}



var Hpe = function Hpe(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Hpe_extends({
    viewBox: "0 0 48 24",
    a11yTitle: "Hpe"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 6h44v12H2V6zm3 3h38v6H5V9z",
    fill: "#00C781"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Hpi.js
function Hpi_extends() {
  Hpi_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Hpi_extends.apply(this, arguments);
}



var Hpi = function Hpi(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Hpi_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Hpi"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#0096D6",
    fillRule: "evenodd",
    d: "M15.793 15.333a.5.5 0 0 0 .442-.315l2.196-6.37c.06-.173-.04-.315-.225-.315h-1a.502.502 0 0 0-.443.315l-2.206 6.37c-.06.174.041.315.225.315h1.01zM24 12c0 6.627-5.373 12-12 12-.183 0-.36-.02-.542-.027l2.42-6.991a.503.503 0 0 1 .443-.315H16c2.607 0 2.631-.865 2.906-1.66.642-1.862 1.75-5.073 1.964-5.701C21.178 8.41 21.28 7 19.001 7H15a.504.504 0 0 0-.443.315L8.925 23.587C3.79 22.227 0 17.562 0 12 0 6.694 3.448 2.2 8.223.615L2.776 16.351c-.06.174.04.316.224.316h2a.503.503 0 0 0 .443-.316l2.666-7.703a.501.501 0 0 1 .442-.315h.989c.183 0 .284.142.224.315l-2.656 7.703c-.059.174.042.316.225.316h2a.501.501 0 0 0 .442-.316l2.427-7.036C12.765 7.682 12.312 7 10.346 7H9.013c-.183 0-.284-.142-.224-.315L11.086.046C11.39.023 11.691 0 12 0c6.627 0 12 5.373 12 12z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Html5.js
function Html5_extends() {
  Html5_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Html5_extends.apply(this, arguments);
}



var Html5 = function Html5(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Html5_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Html5"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 2h18v16l-9 4-9-4V2zm14 4H8v5h8v5l-4 1.5L8 16v-2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/IceCream.js
function IceCream_extends() {
  IceCream_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return IceCream_extends.apply(this, arguments);
}



var IceCream = function IceCream(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, IceCream_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "IceCream"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 8c2 0 2-1.5.5-1.5 0-3-2-5.5-5.5-5.5S6.5 3.5 6.5 6.5C5 6.5 5 8 7 8m0 0h10l-5 13L7 8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Image.js
function Image_extends() {
  Image_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Image_extends.apply(this, arguments);
}



var Image = function Image(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Image_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Image"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 3h22v18H1V3zm5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm17 6-5-6-6 7-3-3-8 8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Impact.js
function Impact_extends() {
  Impact_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Impact_extends.apply(this, arguments);
}



var Impact = function Impact(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Impact_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Impact"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m13 2 9 4v11l-9 5V2zm9 4-9 5 9-5zM9 22V2v20zm0-10L3 5l6 7zm0 0H1h8zm0 0-6 7 6-7z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/InProgress.js
function InProgress_extends() {
  InProgress_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return InProgress_extends.apply(this, arguments);
}



var InProgress = function InProgress(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, InProgress_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "InProgress"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h22M10 4.5h4V6c0 1-2 2-2 2s-2-1-2-2V4.5zM5 1v5c0 3 5 3.235 5 6s-5 3-5 6v5M19 1v5c0 3-5 3.235-5 6s5 3 5 6v5M1 23h22M8 21c0-2 4-4 4-4s4 2 4 4v2H8v-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Inbox.js
function Inbox_extends() {
  Inbox_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Inbox_extends.apply(this, arguments);
}



var Inbox = function Inbox(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Inbox_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Inbox"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 13 6 2h12l5 11v9H1v-9zm0 0h7v3h8v-3h7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Indicator.js
function Indicator_extends() {
  Indicator_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Indicator_extends.apply(this, arguments);
}



var Indicator = function Indicator(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Indicator_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Indicator"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7-3A7 7 0 0 0 5 8c0 1.933.5 3 2 5s3 3.5 3 6v4h4v-4c0-2.5 1.5-4 3-6s2-3.067 2-5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Info.js
function Info_extends() {
  Info_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Info_extends.apply(this, arguments);
}



var Info = function Info(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Info_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Info"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M15 17c0-3 4-5 4-9s-3-7-7-7-7 3-7 7 4 6 4 9v3c0 2 1 3 3 3s3-1 3-3v-3zm-6 1h6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Inherit.js
function Inherit_extends() {
  Inherit_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Inherit_extends.apply(this, arguments);
}



var Inherit = function Inherit(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Inherit_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Inherit"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#231F20",
    strokeWidth: "2",
    d: "m17 18-5-3 5 3zM7 18l5-3v-4m5 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17 6a5 5 0 1 1-10.001-.001A5 5 0 0 1 17 6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Insecure.js
function Insecure_extends() {
  Insecure_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Insecure_extends.apply(this, arguments);
}



var Insecure = function Insecure(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Insecure_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Insecure"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 6.919V6a4.724 4.724 0 015-5 4.724 4.724 0 015 5v5.052M12 23a7 7 0 10-7-7 7 7 0 007 7zm2.985-7h-5.97"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Inspect.js
function Inspect_extends() {
  Inspect_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Inspect_extends.apply(this, arguments);
}



var Inspect = function Inspect(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Inspect_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Inspect"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM1 16V6.5A4.5 4.5 0 0 1 5.5 2H6m17 14V6.5A4.5 4.5 0 0 0 18.5 2H18m.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM10 17s0-2 2-2 2 2 2 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Instagram.js
function Instagram_extends() {
  Instagram_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Instagram_extends.apply(this, arguments);
}



var Instagram = function Instagram(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Instagram_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Instagram"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M17.318.077c1.218.056 2.06.235 2.838.537a5.36 5.36 0 0 1 1.956 1.274 5.36 5.36 0 0 1 1.274 1.956c.302.779.481 1.62.537 2.838C23.992 8.192 24 8.724 24 12s-.008 3.808-.077 5.318c-.056 1.218-.235 2.06-.537 2.839a5.36 5.36 0 0 1-1.274 1.955 5.359 5.359 0 0 1-1.956 1.274c-.779.302-1.62.481-2.838.537-1.51.069-2.041.077-5.318.077-3.277 0-3.809-.008-5.318-.077-1.218-.056-2.06-.235-2.839-.537a5.359 5.359 0 0 1-1.955-1.274 5.36 5.36 0 0 1-1.274-1.956c-.302-.779-.481-1.62-.537-2.838C.008 15.81 0 15.278 0 12c0-3.277.008-3.81.077-5.318.056-1.218.235-2.06.537-2.838a5.36 5.36 0 0 1 1.274-1.956A5.36 5.36 0 0 1 3.843.614C4.623.312 5.464.133 6.682.077 8.19.008 8.722 0 12 0c3.277 0 3.81.008 5.318.077zM12 2.667c-3.24 0-3.736.007-5.197.074-.927.042-1.483.16-1.994.359a2.73 2.73 0 0 0-1.036.673A2.707 2.707 0 0 0 3.1 4.809c-.198.51-.317 1.067-.359 1.994C2.674 8.264 2.667 8.76 2.667 12s.007 3.736.074 5.197c.042.927.16 1.483.359 1.993.17.436.35.713.673 1.037.324.324.601.504 1.036.673.51.198 1.067.317 1.994.359 1.462.067 1.958.074 5.197.074 3.24 0 3.735-.007 5.197-.074.927-.042 1.483-.16 1.994-.359a2.73 2.73 0 0 0 1.036-.673c.324-.324.504-.601.673-1.036.198-.51.317-1.067.359-1.994.067-1.462.074-1.958.074-5.197s-.007-3.735-.074-5.197c-.042-.927-.16-1.483-.359-1.993a2.709 2.709 0 0 0-.673-1.037A2.708 2.708 0 0 0 19.19 3.1c-.51-.198-1.067-.317-1.994-.359-1.461-.067-1.957-.074-5.197-.074zm0 15.555a6.222 6.222 0 1 1 0-12.444 6.222 6.222 0 0 1 0 12.444zm0-2.666a3.556 3.556 0 1 0 0-7.112 3.556 3.556 0 0 0 0 7.112zm6.222-8.445a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/InstallOption.js
function InstallOption_extends() {
  InstallOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return InstallOption_extends.apply(this, arguments);
}



var InstallOption = function InstallOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, InstallOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "InstallOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 6v10V6zm0-5c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm5 11-5 5-5-5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Install.js
function Install_extends() {
  Install_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Install_extends.apply(this, arguments);
}



var Install = function Install(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Install_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Install"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 13.5v4L12 22l-7-4.5v-4m7 8.5v-8.5m6.5-5-6.5-4L15.5 2 22 6l-3.5 2.5zm-13 0 6.5-4L8.5 2 2 6l3.5 2.5zm13 .5L12 13l3.5 2.5 6.5-4L18.5 9zm-13 0 6.5 4-3.5 2.5-6.5-4L5.5 9z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Integration.js
function Integration_extends() {
  Integration_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Integration_extends.apply(this, arguments);
}



var Integration = function Integration(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Integration_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Integration"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#231F20",
    strokeWidth: "2",
    d: "M5 21h18V9H5m14 6H1V3h18"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/InternetExplorer.js
function InternetExplorer_extends() {
  InternetExplorer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return InternetExplorer_extends.apply(this, arguments);
}



var InternetExplorer = function InternetExplorer(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, InternetExplorer_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "InternetExplorer"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#00A1F1",
    fillRule: "evenodd",
    d: "M24 12.337c0-1.898-.491-3.68-1.351-5.229 3.666-8.298-3.929-7.083-4.352-7-1.609.315-3.097.82-4.47 1.461a10.868 10.868 0 0 0-.612-.017C8.09 1.552 3.8 5.126 2.702 9.918c2.702-3.03 4.592-4.253 5.724-4.742-.18.161-.358.324-.532.489l-.17.165c-.115.11-.23.22-.342.332l-.196.2c-.1.101-.199.202-.295.304-.07.072-.136.144-.204.216a26.855 26.855 0 0 0-1.15 1.31 31.222 31.222 0 0 0-.41.505l-.2.253-.183.24-.206.272-.14.193a33.453 33.453 0 0 0-1.168 1.7l-.002.003c-.093.145-.182.287-.27.428l-.014.023c-.088.141-.173.28-.255.418l-.009.014c-.222.37-.427.727-.613 1.063-.971 1.76-1.444 2.99-1.464 3.063-3.068 10.966 6.505 6.335 7.841 5.644a10.74 10.74 0 0 0 4.77 1.11c4.69 0 8.68-2.993 10.165-7.173h-5.666c-.839 1.416-2.453 2.376-4.308 2.376-2.717 0-4.92-2.059-4.92-4.598h15.426c.059-.455.089-.919.089-1.39zM21.985 1.724c.929.627 1.674 1.61.394 4.926a10.82 10.82 0 0 0-5.267-4.372c.998-.482 3.47-1.501 4.873-.554zM2.248 21.989c-.757-.776-.89-2.665.779-6.108a10.816 10.816 0 0 0 4.696 5.739c-1.08.595-3.95 1.934-5.475.369zM8.46 10.776c.086-2.468 2.235-4.444 4.874-4.444 2.64 0 4.787 1.976 4.874 4.444H8.46z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Italic.js
function Italic_extends() {
  Italic_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Italic_extends.apply(this, arguments);
}



var Italic = function Italic(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Italic_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Italic"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "m13 19.56-.13.43H6.3l.16-.43a4.05 4.05 0 0 0 1.3-.17 1.6 1.6 0 0 0 .76-.55 7.22 7.22 0 0 0 .8-2l2.77-9.61a7.07 7.07 0 0 0 .35-1.81.86.86 0 0 0-.15-.52.94.94 0 0 0-.46-.32 4.28 4.28 0 0 0-1.22-.11l.14-.43h6.16l-.13.43a2.6 2.6 0 0 0-1.12.17 1.78 1.78 0 0 0-.81.67 9.08 9.08 0 0 0-.71 1.93l-2.74 9.63a8.76 8.76 0 0 0-.4 1.69.83.83 0 0 0 .15.5.92.92 0 0 0 .47.32 6.35 6.35 0 0 0 1.38.18z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Iteration.js
function Iteration_extends() {
  Iteration_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Iteration_extends.apply(this, arguments);
}



var Iteration = function Iteration(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Iteration_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Iteration"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 9v14h14M5 5v14h14M9 15h14V1H9v14z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Java.js
function Java_extends() {
  Java_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Java_extends.apply(this, arguments);
}



var Java = function Java(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Java_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Java"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 18V9h16v9c0 4-2 5-8 5s-8-1-8-5zm16-9v3a3 3 0 1 0 3-3h-3zm-4-3V2M5 6V4m4 2V0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Js.js
function Js_extends() {
  Js_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Js_extends.apply(this, arguments);
}



var Js = function Js(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Js_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Js"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F1DC50",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#333",
    strokeWidth: "2",
    d: "M12 11v8c0 .876-.523 2-2 2-2.385 0-2.5-2-2.5-2m13.29-5.484c-.6-1.01-1.396-1.516-2.386-1.516C16.856 12 16 13 16 14s.5 2 2.508 2.5c1.278.318 2.492 1 2.492 2.5s-1.315 2-2.5 2c-1.514 0-2.514-.667-3-2"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Key.js
function Key_extends() {
  Key_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Key_extends.apply(this, arguments);
}



var Key = function Key(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Key_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Key"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 13v3h3v3h3v2l2 2h5v-4L12.74 8.74C12.91 8.19 13 7.6 13 7c0-3.31-2.69-6-6-6S1 3.69 1 7a6.005 6.005 0 0 0 8.47 5.47L10 13zM6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Keyboard.js
function Keyboard_extends() {
  Keyboard_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Keyboard_extends.apply(this, arguments);
}



var Keyboard = function Keyboard(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Keyboard_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Keyboard"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 7a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7zm-2 0v10H2V7h20zM3 10h3V8H3v2zm2 3H3v-2h2v2zm-2 3h1v-2H3v2zm14-2v2H7v-2h10zm1 2h1v-2h-1v2zm3 0h-1v-2h1v2zm-3-3h3v-2h-3v2zm3-3h-2V8h2v2zm-5 0h2V8h-2v2zm-7 0H7V8h2v2zm1 0h2V8h-2v2zm5 0h-2V8h2v2zM5 16h1v-2H5v2zm3-3H6v-2h2v2zm1 0h2v-2H9v2zm5 0h-2v-2h2v2zm1 0h2v-2h-2v2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Language.js
function Language_extends() {
  Language_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Language_extends.apply(this, arguments);
}



var Language = function Language(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Language_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Language"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0 0c3 0 4-5 4-11S15 1 12 1 8 6 8 12s1 11 4 11zM2 16h20M2 8h20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Lastfm.js
function Lastfm_extends() {
  Lastfm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Lastfm_extends.apply(this, arguments);
}



var Lastfm = function Lastfm(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Lastfm_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Lastfm"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#B72024",
    d: "M20.297 10.924c-.21-.069-.413-.132-.609-.194-1.494-.47-2.394-.753-2.394-1.916 0-.943.727-1.627 1.73-1.627.769 0 1.341.319 1.855 1.038.048.067.138.09.213.05l1.507-.768a.162.162 0 0 0 .084-.101.166.166 0 0 0-.014-.131c-.807-1.435-1.972-2.133-3.56-2.133-2.417 0-3.98 1.462-3.98 3.725 0 2.314 1.511 3.25 4.298 4.168 1.616.538 2.33.824 2.33 1.973 0 1.291-1.165 2.22-2.755 2.166-1.666-.056-2.17-.94-2.806-2.386a720.097 720.097 0 0 1-2.307-5.337C12.662 6.621 10.232 5 7.22 5 3.239 5 0 8.239 0 12.22c0 3.98 3.238 7.219 7.219 7.219 2.17 0 4.206-.962 5.582-2.641a.167.167 0 0 0 .025-.173l-.91-2.1a.171.171 0 0 0-.149-.1.165.165 0 0 0-.154.09 4.946 4.946 0 0 1-4.395 2.66 4.96 4.96 0 0 1-4.954-4.955 4.96 4.96 0 0 1 4.954-4.955c1.989 0 3.81 1.18 4.534 2.941l2.251 5.134.26.577c1.017 2.37 2.512 3.432 4.854 3.44 2.784 0 4.883-1.844 4.883-4.29 0-2.457-1.358-3.378-3.703-4.143z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Launch.js
function Launch_extends() {
  Launch_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Launch_extends.apply(this, arguments);
}



var Launch = function Launch(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Launch_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Launch"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 9v5s-3 2-3 5v1h4l2 3h4l2-3h4v-1c0-3-3-5-3-5V9c0-4-3-8-5-8S7 5 7 9zm1 11h8M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Layer.js
function Layer_extends() {
  Layer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Layer_extends.apply(this, arguments);
}



var Layer = function Layer(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Layer_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Layer"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h16v16H1V1zm19 6h3v16H7v-3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/License.js
function License_extends() {
  License_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return License_extends.apply(this, arguments);
}



var License = function License(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, License_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "License"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 13v3h3v3h3v2l2 2h5v-4L12.74 8.74C12.91 8.19 13 7.6 13 7c0-3.31-2.69-6-6-6S1 3.69 1 7a6.005 6.005 0 0 0 8.47 5.47L10 13zM6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Like.js
function Like_extends() {
  Like_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Like_extends.apply(this, arguments);
}



var Like = function Like(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Like_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Like"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 23h19c2 0 3-1 3-3V10h-7V4c0-2-1-3-3-3h-2s-.016 6-.016 7.326C10.984 9.652 10 11 8 11H1v12zm5 0V11"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LineChart.js
function LineChart_extends() {
  LineChart_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LineChart_extends.apply(this, arguments);
}



var LineChart = function LineChart(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LineChart_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LineChart"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m1 16 7-7 5 5L23 4M0 22h23.999M16 4h7v7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LinkBottom.js
function LinkBottom_extends() {
  LinkBottom_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LinkBottom_extends.apply(this, arguments);
}



var LinkBottom = function LinkBottom(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LinkBottom_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkBottom"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 19V1M4 11l8 8 8-8M2 22h20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LinkDown.js
function LinkDown_extends() {
  LinkDown_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LinkDown_extends.apply(this, arguments);
}



var LinkDown = function LinkDown(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LinkDown_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkDown"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22V2M3 13l9 9 9-9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LinkNext.js
function LinkNext_extends() {
  LinkNext_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LinkNext_extends.apply(this, arguments);
}



var LinkNext = function LinkNext(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LinkNext_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkNext"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 12h20m-9-9 9 9-9 9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LinkPrevious.js
function LinkPrevious_extends() {
  LinkPrevious_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LinkPrevious_extends.apply(this, arguments);
}



var LinkPrevious = function LinkPrevious(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LinkPrevious_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkPrevious"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 12H2m9-9-9 9 9 9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LinkTop.js
function LinkTop_extends() {
  LinkTop_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LinkTop_extends.apply(this, arguments);
}



var LinkTop = function LinkTop(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LinkTop_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkTop"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 5v18M4 13l8-8 8 8M2 2h20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LinkUp.js
function LinkUp_extends() {
  LinkUp_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LinkUp_extends.apply(this, arguments);
}



var LinkUp = function LinkUp(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LinkUp_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkUp"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 2v20M3 11l9-9 9 9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Link.js
function Link_extends() {
  Link_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Link_extends.apply(this, arguments);
}



var Link = function Link(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Link_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Link"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16.125 2.42a2.009 2.009 0 0 1 2.84-.001l2.616 2.617a2 2 0 0 1-.001 2.839l-3.705 3.705a2.009 2.009 0 0 1-2.84.001L12.42 8.964a2 2 0 0 1 .001-2.839l3.705-3.705zm-10 10a2.009 2.009 0 0 1 2.84-.001l2.616 2.617a2 2 0 0 1-.001 2.839L7.875 21.58a2.009 2.009 0 0 1-2.84.001L2.42 18.964a2 2 0 0 1 .001-2.839l3.705-3.705zM7 17 17 7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LinkedinOption.js
function LinkedinOption_extends() {
  LinkedinOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LinkedinOption_extends.apply(this, arguments);
}



var LinkedinOption = function LinkedinOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LinkedinOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LinkedinOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#0077B5",
    fillRule: "evenodd",
    d: "M22.037 22h-4.152v-6.496c0-1.55-.026-3.542-2.157-3.542-2.16 0-2.49 1.688-2.49 3.43V22H9.09V8.64h3.98v1.827h.058c.553-1.05 1.908-2.158 3.928-2.158 4.204 0 4.98 2.766 4.98 6.364V22zM4.409 6.816A2.407 2.407 0 0 1 2 4.407a2.408 2.408 0 1 1 2.41 2.408zM6.486 22H2.33V8.64h4.156V22z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Linkedin.js
function Linkedin_extends() {
  Linkedin_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Linkedin_extends.apply(this, arguments);
}



var Linkedin = function Linkedin(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Linkedin_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Linkedin"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#0077B5",
    fillRule: "evenodd",
    d: "M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036-1.851 0-2.134 1.447-2.134 2.942v5.664H9.352V8.997h3.413v1.566h.049c.475-.9 1.636-1.85 3.367-1.85 3.605 0 4.27 2.371 4.27 5.456v6.281zM5.339 7.433a2.063 2.063 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM7.12 20.45H3.558V8.997H7.12V20.45zM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/List.js
function List_extends() {
  List_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return List_extends.apply(this, arguments);
}



var List = function List(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, List_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "List"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M9 6h12M9 12h12M9 18h8M4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Local.js
function Local_extends() {
  Local_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Local_extends.apply(this, arguments);
}



var Local = function Local(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Local_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Local"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 4h22v16H1V4zm10 4h12M1 16h22M1 12h22M11 4v8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/LocationPin.js
function LocationPin_extends() {
  LocationPin_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LocationPin_extends.apply(this, arguments);
}



var LocationPin = function LocationPin(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, LocationPin_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "LocationPin"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 0v12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Location.js
function Location_extends() {
  Location_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Location_extends.apply(this, arguments);
}



var Location = function Location(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Location_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Location"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22s-8-6-8-12c0-5 4-8 8-8s8 3 8 8c0 6-8 12-8 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Lock.js
function Lock_extends() {
  Lock_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Lock_extends.apply(this, arguments);
}



var Lock = function Lock(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Lock_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Lock"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 23V11H5v12h14zm-7-8v4m5-8V7c0-3 0-6-5-6S7 4 7 7v4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Login.js
function Login_extends() {
  Login_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Login_extends.apply(this, arguments);
}



var Login = function Login(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Login_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Login"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 15v7h13V2H9v7m9 3H0m13-5 5 5-5 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Logout.js
function Logout_extends() {
  Logout_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Logout_extends.apply(this, arguments);
}



var Logout = function Logout(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Logout_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Logout"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#231F20",
    strokeWidth: "2",
    d: "M13 9V2H1v20h12v-7m9-3H5m12-5 5 5-5 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Lounge.js
function Lounge_extends() {
  Lounge_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Lounge_extends.apply(this, arguments);
}



var Lounge = function Lounge(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Lounge_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Lounge"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 5.997C5 5.447 5.45 5 6.007 5h11.986C18.55 5 19 5.453 19 5.997V13H5V5.997zM22 8v7.003c0 .55-.455.997-.992.997H2.992A.999.999 0 0 1 2 15.003V8m3 8v2-2zm14 0v2-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Magic.js
function Magic_extends() {
  Magic_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Magic_extends.apply(this, arguments);
}



var Magic = function Magic(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Magic_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Magic"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2.5 19.5 17-17 2 2-17 17-2-2zm.5.5L15 8l1 1L4 21l-1-1zM5.5 3l-.5.5.5.5.5-.5-.5-.5zm6 0-.5.5.5.5.5-.5-.5-.5zm-3 3-.5.5.5.5.5-.5-.5-.5zm12 6-.5.5.5.5.5-.5-.5-.5zm0 5-.5.5.5.5.5-.5-.5-.5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/MailOption.js
function MailOption_extends() {
  MailOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return MailOption_extends.apply(this, arguments);
}



var MailOption = function MailOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, MailOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "MailOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 4h22v16H1V4zm0 1 11 8.5L23 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Mail.js
function Mail_extends() {
  Mail_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Mail_extends.apply(this, arguments);
}



var Mail = function Mail(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Mail_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Mail"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#01A982",
    fillRule: "evenodd",
    d: "M23 20V6l-11 9L1 6v14h22zm-11-8 10-8H2l10 8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Mandriva.js
function Mandriva_extends() {
  Mandriva_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Mandriva_extends.apply(this, arguments);
}



var Mandriva = function Mandriva(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Mandriva_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Mandriva"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#E8B845",
    fillRule: "evenodd",
    d: "M14.557 17.2c-3.021 2.72-6.354 4.146-9.075 4.148h-.008c-1.938-.001-3.565-.726-4.544-2.222C-1.43 15.519.858 8.797 6.042 4.11c.44-.398.888-.768 1.339-1.111-4.343 4.582-6.112 10.546-3.938 13.868 1.952 2.983 6.474 2.899 10.912.13l-1.323-1.332c-.157-.157-.428-.258-.692-.258a.826.826 0 0 0-.292.05l-4.279 1.656a.774.774 0 0 1-.275.06c-.176 0-.259-.093-.292-.148-.052-.085-.087-.24.042-.495l2.094-4.082c.148-.29.1-.748-.105-1L6.336 7.892c-.195-.239-.18-.406-.134-.504.033-.07.126-.19.372-.19.048 0 .1.006.155.015l4.528.729a.68.68 0 0 0 .11.008c.307 0 .655-.18.809-.417l2.487-3.853c.152-.237.302-.287.4-.287.09 0 .306.044.368.449l.706 4.533c.05.322.358.664.672.747l4.434 1.175c.332.088.399.259.408.352.01.094-.019.274-.325.43l-4.094 2.07c-.29.147-.52.545-.502.87l.253 4.582c.01.193-.027.337-.113.428a.292.292 0 0 1-.217.093c-.123 0-.253-.068-.387-.203L14.557 17.2zM24 11.403c-1.245-.672-1.423-.64-2.355.424.671-1.244.639-1.423-.425-2.356 1.245.672 1.424.64 2.356-.424-.672 1.245-.64 1.424.424 2.356z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Manual.js
function Manual_extends() {
  Manual_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Manual_extends.apply(this, arguments);
}



var Manual = function Manual(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Manual_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Manual"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 9v8-8zm-4 0v8-8zM8 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM4 23h16v-3H4v3zm3-3h10v-3H7v3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/MapLocation.js
function MapLocation_extends() {
  MapLocation_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return MapLocation_extends.apply(this, arguments);
}



var MapLocation = function MapLocation(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, MapLocation_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "MapLocation"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17.5 6.5 23 9v13l-7-3-8 3-7-3V6l5 2m10 11v-7M8 22V12m4 4.273S6 11.5 6 7c0-3.75 3-6 6-6s6 2.25 6 6c0 4.5-6 9.273-6 9.273zM13 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Map.js
function Map_extends() {
  Map_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Map_extends.apply(this, arguments);
}



var Map = function Map(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Map_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Map"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M15 15h4l3 7H2l3-7h4m4-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8c0 5 6 10 6 10s6-5 6-10c0-3.417-2.686-6-6-6S6 4.583 6 8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Mastercard.js
function Mastercard_extends() {
  Mastercard_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Mastercard_extends.apply(this, arguments);
}



var Mastercard = function Mastercard(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Mastercard_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Mastercard"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "7",
    cy: "12",
    r: "7",
    fill: "#EA001B"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "17",
    cy: "12",
    r: "7",
    fill: "#FFA200",
    fillOpacity: ".8"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Medium.js
function Medium_extends() {
  Medium_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Medium_extends.apply(this, arguments);
}



var Medium = function Medium(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Medium_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Medium"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#444",
    d: "M2.846 5.887a.93.93 0 0 0-.303-.784l-2.24-2.7V2H7.26l5.378 11.795L17.367 2H24v.403L22.084 4.24a.56.56 0 0 0-.213.538v13.498a.56.56 0 0 0 .213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537V7.32l-5.39 13.688h-.727L4.28 7.32v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V5.887z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Memory.js
function Memory_extends() {
  Memory_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Memory_extends.apply(this, arguments);
}



var Memory = function Memory(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Memory_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Memory"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3a2 2 0 0 0-2 2H1v2h2v2H1v2h2v2H1v2h2v2H1v2h2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2v-2h-2v-2h2v-2h-2v-2h2V9h-2V7h2V5h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2h-2a2 2 0 0 0-2-2H5zm6 4v2h2V7h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zM5 5h4v14H5V5zm10 0h4v14h-4V5z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Menu.js
function Menu_extends() {
  Menu_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Menu_extends.apply(this, arguments);
}



var Menu = function Menu(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Menu_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Menu"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 19h20M2 5h20M2 12h20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Microfocus.js
function Microfocus_extends() {
  Microfocus_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Microfocus_extends.apply(this, arguments);
}



var Microfocus = function Microfocus(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Microfocus_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Microfocus"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#0078EF",
    fillRule: "evenodd",
    d: "M1 5h4v14h14v4H1V5zm4-4h18v18h-4V5H5V1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Microphone.js
function Microphone_extends() {
  Microphone_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Microphone_extends.apply(this, arguments);
}



var Microphone = function Microphone(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Microphone_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Microphone"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 11c0 3 1.79 4 4 4s4-1 4-4V5c0-3-1.79-4-4-4S8 2 8 5v6zM4 9v2c0 5 3.582 8 8 8s8-3 8-8V9m-8 15v-5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Money.js
function Money_extends() {
  Money_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Money_extends.apply(this, arguments);
}



var Money = function Money(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Money_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Money"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2 3.134 2 7 2 7-.895 7-2zM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Monitor.js
function Monitor_extends() {
  Monitor_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Monitor_extends.apply(this, arguments);
}



var Monitor = function Monitor(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Monitor_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Monitor"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 16h22V2H1v14zm4 6h14H5zm4 0h6v-6H9v6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Monospace.js
function Monospace_extends() {
  Monospace_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Monospace_extends.apply(this, arguments);
}



var Monospace = function Monospace(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Monospace_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Monospace"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M11.88 17h-2.3l-.93-2.9H4.44L3.57 17H1.32L5.41 4.17h2.25zM8 11.93 6.52 7.17l-1.43 4.76zM14.13 17 12.22 4.17h1.66L15.07 13l1.46-8.82h1.92l1.4 9 1.23-9h1.62L20.78 17h-1.72l-1.6-9.6-1.58 9.6zm-2.77.95v1.39H1.89v-1.39h-.51v1.91h10.49v-1.91h-.51zm10.81.05v1.39h-9.48V18h-.5v1.91h10.49V18h-.51z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Moon.js
function Moon_extends() {
  Moon_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Moon_extends.apply(this, arguments);
}



var Moon = function Moon(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Moon_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Moon"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "m18.25 18.78.531.846a1 1 0 0 0-.282-1.815l-.25.968zm0-13.56.249.97a1 1 0 0 0 .282-1.816l-.532.847zM14 21a8.962 8.962 0 0 0 4.781-1.374l-1.063-1.694A6.962 6.962 0 0 1 14 19v2zm-9-9a9 9 0 0 0 9 9v-2a7 7 0 0 1-7-7H5zm9-9a9 9 0 0 0-9 9h2a7 7 0 0 1 7-7V3zm4.781 1.374A8.962 8.962 0 0 0 14 3v2c1.368 0 2.641.391 3.718 1.067l1.063-1.693zm-.78-.122A8.004 8.004 0 0 0 12 12h2a6.003 6.003 0 0 1 4.499-5.81L18 4.251zM12 12c0 3.729 2.55 6.86 6 7.748l.499-1.937A6.003 6.003 0 0 1 14 12h-2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/MoreVertical.js
function MoreVertical_extends() {
  MoreVertical_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return MoreVertical_extends.apply(this, arguments);
}



var MoreVertical = function MoreVertical(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, MoreVertical_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "MoreVertical"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M14 14h-4v-4h4v4zm0-7h-4V3h4v4zm0 14h-4v-4h4v4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/More.js
function More_extends() {
  More_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return More_extends.apply(this, arguments);
}



var More = function More(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, More_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "More"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 13v-2h2v2H3zm8 0v-2h2v2h-2zm8 0v-2h2v2h-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Mouse.js
function Mouse_extends() {
  Mouse_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Mouse_extends.apply(this, arguments);
}



var Mouse = function Mouse(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Mouse_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Mouse"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 9a6 6 0 1 1 12 0v6a6 6 0 0 1-12 0V9zm2 2v4a4 4 0 0 0 8 0v-4H8zm8-2a4.002 4.002 0 0 0-3-3.874V9h3zm-5 0H8a4.002 4.002 0 0 1 3-3.874V9z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Multimedia.js
function Multimedia_extends() {
  Multimedia_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Multimedia_extends.apply(this, arguments);
}



var Multimedia = function Multimedia(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Multimedia_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Multimedia"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 8v14h20V9M11 4 7 8M2 4v4h15l4-4H2zm14 0-4 4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Multiple.js
function Multiple_extends() {
  Multiple_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Multiple_extends.apply(this, arguments);
}



var Multiple = function Multiple(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Multiple_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Multiple"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 15h4V1H9v4m6 14h4V5H5v4M1 23h14V9H1v14z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Music.js
function Music_extends() {
  Music_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Music_extends.apply(this, arguments);
}



var Music = function Music(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Music_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Music"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 17.998C1 16.894 1.887 16 2.998 16H9v4.002A1.993 1.993 0 0 1 7.002 22H2.998A2 2 0 0 1 1 20.002v-2.004zm14 0c0-1.104.887-1.998 1.998-1.998H23v4.002A1.993 1.993 0 0 1 21.002 22h-4.004A2 2 0 0 1 15 20.002v-2.004zM9 16V2h14v13.5M9 6h14"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Mysql.js
function Mysql_extends() {
  Mysql_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Mysql_extends.apply(this, arguments);
}



var Mysql = function Mysql(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Mysql_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Mysql"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#00758F",
    fillRule: "evenodd",
    d: "M5.462 4.04a2.65 2.65 0 0 0-.67.074v.038h.037c.13.267.36.44.521.67l.372.781.038-.037c.23-.162.336-.422.335-.819-.093-.097-.107-.219-.187-.335-.106-.154-.312-.242-.446-.372zm18.017 19.097c.175.129.293.329.521.41v-.038c-.12-.152-.15-.362-.26-.521a73.62 73.62 0 0 1-.484-.484 7.948 7.948 0 0 0-1.713-1.638c-.508-.365-1.649-.859-1.861-1.451l-.038-.038c.361-.04.784-.171 1.117-.26.56-.15 1.06-.112 1.638-.26.261-.076.521-.15.782-.224v-.15c-.292-.3-.5-.696-.819-.967-.834-.71-1.743-1.42-2.68-2.01-.52-.329-1.162-.541-1.713-.82-.185-.093-.51-.142-.632-.297-.29-.37-.447-.837-.67-1.266-.467-.9-.927-1.883-1.34-2.83-.283-.645-.467-1.281-.82-1.86-1.69-2.78-3.51-4.457-6.328-6.106-.6-.35-1.322-.489-2.084-.67l-1.229-.074c-.25-.105-.51-.41-.744-.559C3.188.434.792-.849.102.838c-.437 1.065.652 2.104 1.042 2.643.273.379.623.803.819 1.229.128.28.15.56.26.856.271.73.506 1.522.856 2.196.178.341.373.7.596 1.005.138.187.372.27.409.559-.23.321-.242.82-.371 1.228-.582 1.835-.363 4.115.484 5.473.259.416.87 1.31 1.711.967.736-.3.572-1.228.782-2.047.047-.186.019-.323.112-.447v.037l.67 1.34c.496.799 1.376 1.634 2.122 2.197.386.292.69.797 1.191.968v-.038h-.037c-.098-.15-.25-.213-.372-.335a8.554 8.554 0 0 1-.857-.968c-.678-.92-1.277-1.928-1.823-2.977-.261-.502-.488-1.054-.708-1.564-.085-.197-.084-.494-.26-.596-.241.374-.596.676-.782 1.117-.298.705-.337 1.565-.447 2.457-.065.023-.036.007-.075.037-.518-.125-.7-.659-.893-1.117-.487-1.157-.578-3.022-.149-4.355.111-.345.613-1.431.41-1.75-.098-.318-.417-.501-.596-.744A5.83 5.83 0 0 1 3.6 7.166c-.398-.902-.585-1.916-1.005-2.829-.2-.436-.54-.877-.819-1.265-.308-.43-.654-.746-.893-1.266-.085-.185-.201-.48-.075-.67.04-.128.097-.182.224-.223.216-.167.817.055 1.042.148.597.248 1.095.484 1.6.82.243.16.489.472.782.558h.335c.525.12 1.112.037 1.601.186.865.263 1.64.672 2.345 1.117 2.146 1.355 3.9 3.283 5.1 5.584.193.37.277.724.447 1.117.343.792.775 1.607 1.116 2.382.34.773.673 1.553 1.154 2.196.253.338 1.231.52 1.676.708.311.131.821.269 1.116.446.564.34 1.11.745 1.638 1.117.264.187 1.077.595 1.117.93-1.31-.034-2.31.087-3.164.448-.243.102-.63.105-.67.409.133.14.154.35.26.521.204.33.549.773.856 1.005.337.254.683.525 1.043.745.64.39 1.356.614 1.972 1.005.365.231.726.521 1.08.782z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Navigate.js
function Navigate_extends() {
  Navigate_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Navigate_extends.apply(this, arguments);
}



var Navigate = function Navigate(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Navigate_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Navigate"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m20 11 2-3-2-3h-8v6h8zm-8 13V0M4 2 2 5l2 3h8V2H4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/NetworkDrive.js
function NetworkDrive_extends() {
  NetworkDrive_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return NetworkDrive_extends.apply(this, arguments);
}



var NetworkDrive = function NetworkDrive(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, NetworkDrive_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "NetworkDrive"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8v2.17a3.001 3.001 0 1 1-2 0V14H3a2 2 0 0 1-2-2V6zm10 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM3 6v6h18V6H3zm3 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Network.js
function Network_extends() {
  Network_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Network_extends.apply(this, arguments);
}



var Network = function Network(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Network_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Network"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7.5 7v8.514c0 4.243 5.5 2.829 5.5 6.6V24m-2-14L7.5 7 4 10m12.5-8v8.44c0 4.068-3.5 2.712-3.5 6.328V24m0-19 3.5-3L20 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/NewWindow.js
function NewWindow_extends() {
  NewWindow_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return NewWindow_extends.apply(this, arguments);
}



var NewWindow = function NewWindow(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, NewWindow_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "NewWindow"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M11 9h8m-4 4V5m2 12v6H1V7h6m0-6h16v16H7V1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/New.js
function New_extends() {
  New_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return New_extends.apply(this, arguments);
}



var New = function New(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, New_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "New"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 1v22M2 6l20 12m0-12L2 18"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Next.js
function Next_extends() {
  Next_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Next_extends.apply(this, arguments);
}



var Next = function Next(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Next_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Next"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m7 2 10 10L7 22"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Node.js
function Node_extends() {
  Node_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Node_extends.apply(this, arguments);
}



var Node = function Node(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Node_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Node"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#689F63",
    d: "M11.899 24c-.322 0-.64-.084-.923-.247l-2.935-1.738c-.439-.245-.225-.332-.08-.382.584-.204.703-.25 1.327-.605.066-.037.152-.024.219.015l2.255 1.339a.298.298 0 0 0 .273 0l8.794-5.077a.277.277 0 0 0 .134-.237V6.919a.282.282 0 0 0-.136-.242l-8.79-5.072a.27.27 0 0 0-.271 0l-8.79 5.072a.28.28 0 0 0-.139.24v10.148c0 .097.053.19.137.236l2.408 1.391c1.308.654 2.107-.116 2.107-.891V7.785a.25.25 0 0 1 .255-.254h1.114c.139 0 .253.11.253.254v10.02c0 1.744-.95 2.745-2.604 2.745-.509 0-.91 0-2.028-.55l-2.307-1.33a1.86 1.86 0 0 1-.922-1.605V6.917c0-.66.352-1.277.922-1.602L10.976.236a1.928 1.928 0 0 1 1.849 0l8.792 5.08c.568.329.922.943.922 1.603v10.149a1.86 1.86 0 0 1-.922 1.602l-8.792 5.079a1.848 1.848 0 0 1-.927.246V24zm2.716-6.993c-3.848 0-4.654-1.766-4.654-3.248 0-.14.113-.253.254-.253h1.136c.126 0 .231.091.251.215.172 1.158.683 1.742 3.01 1.742 1.853 0 2.641-.419 2.641-1.402 0-.566-.225-.986-3.104-1.268-2.408-.238-3.896-.768-3.896-2.694 0-1.775 1.497-2.831 4.004-2.831 2.815 0 4.211.977 4.387 3.077a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.246-.199c-.275-1.217-.94-1.607-2.747-1.607-2.023 0-2.259.705-2.259 1.233 0 .64.277.828 3.007 1.189 2.703.359 3.987.865 3.987 2.765 0 1.915-1.599 3.014-4.385 3.014l.012-.01z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Nodes.js
function Nodes_extends() {
  Nodes_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Nodes_extends.apply(this, arguments);
}



var Nodes = function Nodes(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Nodes_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Nodes"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Norton.js
function Norton_extends() {
  Norton_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Norton_extends.apply(this, arguments);
}



var Norton = function Norton(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Norton_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Norton"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#E0B02F",
    d: "M21.91.816h.797v.797h-.797V.816zm0 .797h-1.477v.797h1.477v-.797zm-1.477.797v1.554h-.738V2.41h.738zm0 1.554h.758v.758h-.758v-.758zm.758 0v-.748h.836v.748h-.836zm-.758.758v1.613h-.65v.632h-.69v.923H18.5v.787h-.758V7.9h-.758l-.01.777h.768v.826h-.758l.01.903h-.651l.01.758h-.603l-.01.855c-1.136 1.635-1.923 3.351-2.633 5.063-.09.217-.123.395-.233.524-.239.28-.595.368-.885.36-.542-.015-1.02-.268-1.272-.855-.85-1.97-1.27-3.35-3.605-5.937-.376-.417-.289-.949.01-1.117.286-.163.687-.046 1.136.204 1.258.7 1.958 1.415 3.45 3.4.543-1.311 1.482-3.084 2.652-5.004h.544V7.9h.515v-.75h.758V5.956h.817l-.01.758h.758v-.758h-.748v-.68h.68v-.554h1.253V5.5h.768v-.778h.738zm-1.506 0v-.758h.768v.758h-.768zm0-.758h-.767v-.728h.767v.728zm1.506-1.55h.757v.798h-.757v-.798zm2.27-.799h.819v.799h-.82v-.799zm-6.156 2.929v.742h-.933V6.53h-.933v.734a7.115 7.115 0 0 0-3.313-.812c-3.947 0-7.152 3.195-7.152 7.142 0 3.946 3.205 7.141 7.152 7.141a7.139 7.139 0 0 0 7.141-7.141 7.115 7.115 0 0 0-.823-3.333h.726v-.933h.622v-.933h.622v-.777h.27a10.357 10.357 0 0 1 1.887 5.976C21.813 19.34 17.153 24 11.406 24 5.66 24 1 19.34 1 13.594 1 7.847 5.66 3.187 11.406 3.187c1.87 0 3.624.493 5.14 1.357zM22.703 0h.819v.817h-.82V0z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Note.js
function Note_extends() {
  Note_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Note_extends.apply(this, arguments);
}



var Note = function Note(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Note_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Note"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 23h15l7-7V1H1v22zm14 0v-8h8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Notes.js
function Notes_extends() {
  Notes_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Notes_extends.apply(this, arguments);
}



var Notes = function Notes(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Notes_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Notes"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 1v22h13l5-5V1H3zm3 16h5m-5-4h12M6 9h10M3 5h18m0 12h-6v6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Notification.js
function Notification_extends() {
  Notification_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Notification_extends.apply(this, arguments);
}



var Notification = function Notification(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Notification_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Notification"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 19V9a8 8 0 0 1 16 0v10M1 19h22m-8 0v1a3 3 0 1 1-6 0v-1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Npm.js
function Npm_extends() {
  Npm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Npm_extends.apply(this, arguments);
}



var Npm = function Npm(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Npm_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Npm"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D40001",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFF",
    d: "M16.718 7.928h-4.513V20.25H4V3h16v17.249h-3.282V7.93z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ObjectGroup.js
function ObjectGroup_extends() {
  ObjectGroup_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ObjectGroup_extends.apply(this, arguments);
}



var ObjectGroup = function ObjectGroup(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ObjectGroup_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ObjectGroup"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h3v3H1V1zm19 0h3v3h-3V1zM4 2h16M4 22h16M1 20h3v3H1v-3zm19 0h3v3h-3v-3zM2 4v16M22 4v16M7 7h7v6H7V7zm10 3v7h-7v-2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ObjectUngroup.js
function ObjectUngroup_extends() {
  ObjectUngroup_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ObjectUngroup_extends.apply(this, arguments);
}



var ObjectUngroup = function ObjectUngroup(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ObjectUngroup_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ObjectUngroup"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h3v3H1V1zm12 0h3v3h-3V1zM4 2h9m2 7h5M4 15h9M1 13h3v3H1v-3zm12 0h3v3h-3v-3zM2 4v9m13-9v9m5-5h3v3h-3V8zm-9 14h9M8 20h3v3H8v-3zm12 0h3v3h-3v-3zM9 16v4m13-9v9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/OfflineStorage.js
function OfflineStorage_extends() {
  OfflineStorage_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return OfflineStorage_extends.apply(this, arguments);
}



var OfflineStorage = function OfflineStorage(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, OfflineStorage_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "OfflineStorage"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 1 0 0 18zm8-12h-8a3 3 0 0 0 0 6h8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Onedrive.js
function Onedrive_extends() {
  Onedrive_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Onedrive_extends.apply(this, arguments);
}



var Onedrive = function Onedrive(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Onedrive_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Onedrive"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#4F8AD8",
    fillRule: "evenodd",
    d: "M21.692 13.987a2.733 2.733 0 0 1 .602 5.232h-13.7a3.166 3.166 0 1 1 .281-6.321 3.963 3.963 0 0 1 7.482-2.05 3.454 3.454 0 0 1 5.336 3.138zM8.187 12.209a3.873 3.873 0 0 0-3.44 3.843c0 .81.252 1.563.681 2.186h-2.15a3.279 3.279 0 0 1-.237-6.549 3.692 3.692 0 0 1 5.668-3.86 5.103 5.103 0 0 1 9.648 1.757c-.036-.001-.072-.003-.109-.003-.568 0-1.125.115-1.64.337a4.644 4.644 0 0 0-3.778-1.929 4.67 4.67 0 0 0-4.643 4.218z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Opera.js
function Opera_extends() {
  Opera_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Opera_extends.apply(this, arguments);
}



var Opera = function Opera(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Opera_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Opera"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#CC0F16",
    fillRule: "evenodd",
    d: "M12.125 0C5.568 0 1 4.756 1 11.889 1 18.236 5.438 24 12.125 24c6.752 0 11.226-5.763 11.226-12.111C23.35 4.699 18.62 0 12.125 0zm0 21.32a3.308 3.308 0 0 1-1.425-.298c-1.141-.575-1.828-1.85-2.23-3.41-.435-1.809-.484-4.004-.484-5.926 0-3.431.25-6.532 1.65-8.08.612-.65 1.418-1.034 2.476-1.037h.013c1.379 0 2.345.675 3.016 1.734 1 1.688 1.227 4.424 1.227 7.368 0 4.18-.278 9.65-4.243 9.65z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Optimize.js
function Optimize_extends() {
  Optimize_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Optimize_extends.apply(this, arguments);
}



var Optimize = function Optimize(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Optimize_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Optimize"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 22h4v-4H2v4zM22 2 12 12m10-2V2h-8m8 11h-4v9h4v-9zm-12 9h4v-6h-4v6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Oracle.js
function Oracle_extends() {
  Oracle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Oracle_extends.apply(this, arguments);
}



var Oracle = function Oracle(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Oracle_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Oracle"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "red",
    fillRule: "evenodd",
    d: "M7.957 18.912A6.953 6.953 0 0 1 1 11.962 6.963 6.963 0 0 1 7.957 5h8.087A6.961 6.961 0 0 1 23 11.962a6.952 6.952 0 0 1-6.956 6.95H7.957zm7.907-2.453a4.497 4.497 0 0 0 4.503-4.497 4.507 4.507 0 0 0-4.503-4.508H8.136a4.507 4.507 0 0 0-4.503 4.508 4.498 4.498 0 0 0 4.503 4.497h7.728z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/OrderedList.js
function OrderedList_extends() {
  OrderedList_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return OrderedList_extends.apply(this, arguments);
}



var OrderedList = function OrderedList(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, OrderedList_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "OrderedList"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M5.77 6.42h18.06v1.75H5.77zm0 5.29h18.06v1.75H5.77zm0 5.28h18.06v1.75H5.77zM3.13 4.87V8a2 2 0 0 0 0 .45.3.3 0 0 0 .13.16.62.62 0 0 0 .32.06h.12v.11h-2v-.07h.1a.79.79 0 0 0 .35-.06.29.29 0 0 0 .14-.16A1.75 1.75 0 0 0 2.3 8V6a1.28 1.28 0 0 0 0-.33.24.24 0 0 0-.1-.11.28.28 0 0 0-.16 0 .91.91 0 0 0-.35.09l-.05-.1L3 4.87zm.52 9.43H1.37v-.06a12.51 12.51 0 0 0 1.27-1.67 1.81 1.81 0 0 0 .22-.84.7.7 0 0 0-.18-.5.6.6 0 0 0-.45-.2.75.75 0 0 0-.68.44h-.11a1.58 1.58 0 0 1 .47-.81 1.09 1.09 0 0 1 .72-.26 1.06 1.06 0 0 1 .54.14 1 1 0 0 1 .38.37.9.9 0 0 1 .14.45 1.6 1.6 0 0 1-.21.77 7.28 7.28 0 0 1-1.25 1.47h.83a1.87 1.87 0 0 0 .4 0 .33.33 0 0 0 .15-.09 1.16 1.16 0 0 0 .16-.26h.1zM2.09 18v-.1a1.88 1.88 0 0 0 .45-.17.67.67 0 0 0 .22-.25.69.69 0 0 0 .09-.34.55.55 0 0 0-.17-.41.58.58 0 0 0-.43-.17.8.8 0 0 0-.68.42h-.11a1.72 1.72 0 0 1 .54-.79 1.16 1.16 0 0 1 .71-.24.93.93 0 0 1 .66.24.76.76 0 0 1 .26.57.78.78 0 0 1-.12.41 1 1 0 0 1-.38.35 1.34 1.34 0 0 1 .51.4 1 1 0 0 1 .17.6 1.38 1.38 0 0 1-.44 1A1.62 1.62 0 0 1 2.2 20a1.24 1.24 0 0 1-.71-.16.34.34 0 0 1-.16-.29.32.32 0 0 1 .31-.32.41.41 0 0 1 .18 0l.32.25a.84.84 0 0 0 .52.23.47.47 0 0 0 .34-.16.61.61 0 0 0 .15-.42 1.1 1.1 0 0 0-.27-.72 1.42 1.42 0 0 0-.79-.41z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Organization.js
function Organization_extends() {
  Organization_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Organization_extends.apply(this, arguments);
}



var Organization = function Organization(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Organization_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Organization"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 3v20H4V3h16zM8.042 9h2V7h-2v2zM14 9h2V7h-2v2zm-5.958 6h2v-2h-2v2zm2 8h4v-4h-4v4zM14 15h2v-2h-2v2zM2 3h20V1H2v2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Overview.js
function Overview_extends() {
  Overview_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Overview_extends.apply(this, arguments);
}



var Overview = function Overview(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Overview_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Overview"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM10 7h4M1.5 14.5S5.5 5 6 4s1.5-1 2-1 2 0 2 2v11m-4.5 5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm17-6.5S18.5 5 18 4s-1.5-1-2-1-2 0-2 2v11m-4 0h4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Package.js
function Package_extends() {
  Package_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Package_extends.apply(this, arguments);
}



var Package = function Package(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Package_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Package"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.371.571 12 .423l-.371.148-10 4L1 4.823v14.354l.629.251 10 4 .371.149.371-.149 10-4 .629-.251V4.823l-.629-.252-10-4zM3 6.977v10.846l8 3.2V10.177l-8-3.2zm10 3.2v10.846l8-3.2V6.977l-8 3.2zM19.307 5.5 12 2.577 9.943 3.4l7.307 2.923 2.057-.823zm-14.614 0L7.25 4.477 14.557 7.4 12 8.423 4.693 5.5z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Paint.js
function Paint_extends() {
  Paint_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Paint_extends.apply(this, arguments);
}



var Paint = function Paint(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Paint_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Paint"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 10H2c0-5.523 0-9 10-9s10 3.477 10 9h-2m-8 0c4.418 0 8-.895 8-2s-3.582-2-8-2-8 .895-8 2 3.582 2 8 2zM4 20c0 1.657 3.582 3 8 3s8-1.343 8-3m0-12v12V8zM4 20V8v12zm4-7v4m5-4v4m-6-5c-1.5 0-3-1-3-4m14 5.5V12c0-2 2-1 2-4M8 13a1 1 0 0 0-1-1m6 1a1 1 0 0 1 2 0v.5m0 0a1.5 1.5 0 0 0 3 0M8 17a2.5 2.5 0 1 0 5 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Pan.js
function Pan_extends() {
  Pan_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Pan_extends.apply(this, arguments);
}



var Pan = function Pan(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Pan_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pan"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8.5 5.5 12 2l3.5 3.5M22 12H2m3.5-3.5L2 12l3.5 3.5m13 0L22 12l-3.5-3.5M12 22V2M8.5 18.5 12 22l3.5-3.5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PauseFill.js
function PauseFill_extends() {
  PauseFill_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PauseFill_extends.apply(this, arguments);
}



var PauseFill = function PauseFill(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PauseFill_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PauseFill"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 21h6V3H3v18zm1-2h4V5H4v14zm1-2h2V7H5v10zm10 4h6V3h-6v18zm1-2h4V5h-4v14zm1-2h2V7h-2v10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Pause.js
function Pause_extends() {
  Pause_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Pause_extends.apply(this, arguments);
}



var Pause = function Pause(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Pause_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pause"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 21h6V3H3v18zm12 0h6V3h-6v18z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Paypal.js
function Paypal_extends() {
  Paypal_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Paypal_extends.apply(this, arguments);
}



var Paypal = function Paypal(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Paypal_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Paypal"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#003087",
    fillRule: "evenodd",
    d: "M21.495 7.054c-1.07 4.973-4.48 7.604-9.89 7.604H9.643L8.18 24h3.182c.46 0 .85-.334.923-.788l.037-.198.732-4.636.047-.256a.933.933 0 0 1 .922-.788h.581c3.76 0 6.705-1.528 7.565-5.946.345-1.773.179-3.26-.674-4.334M19.317 1.81C18.206.543 16.197 0 13.627 0H6.169c-.526 0-.973.383-1.055.9L2.008 20.598a.64.64 0 0 0 .633.74h4.604l1.157-7.335-.036.23c.082-.518.526-.9 1.051-.9h2.188c4.299 0 7.664-1.747 8.648-6.797.029-.15.076-.438.076-.438.279-1.869-.002-3.137-1.012-4.287"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Performance.js
function Performance_extends() {
  Performance_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Performance_extends.apply(this, arguments);
}



var Performance = function Performance(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Performance_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Performance"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 19-2 3-3-1-.5-3.5L3 17l-1-3 3-2-3-2 1-3 3.5-.5L7 3l3-1 2 3 2-3 3 1 .5 3.5L21 7l1 3-3 2 3 2-1 3-3.5.5L17 21l-3 1-2-3zm0-3a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PersonalComputer.js
function PersonalComputer_extends() {
  PersonalComputer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PersonalComputer_extends.apply(this, arguments);
}



var PersonalComputer = function PersonalComputer(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PersonalComputer_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PersonalComputer"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 18h18V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13zm-1 2h20c1 0 1-1 1-1H1s0 1 1 1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PhoneFlip.js
function PhoneFlip_extends() {
  PhoneFlip_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PhoneFlip_extends.apply(this, arguments);
}



var PhoneFlip = function PhoneFlip(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PhoneFlip_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneFlip"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 1a1 1 0 0 0-.928.629l-4 10a1 1 0 0 0 0 .742l4 10A1 1 0 0 0 8 23h10a1 1 0 0 0 .928-1.371L15.078 12l3.851-9.629A1 1 0 0 0 18 1H8zM5.477 11l3.2-8h2.794a1 1 0 0 0 1 1h.057a1 1 0 0 0 1.001-1h2.994l-3.2 8H5.477zm0 2 3.2 8h7.846l-3.2-8H5.477zm5.558 6.773a1 1 0 0 1 .937-1.351h.056a1 1 0 1 1 0 2h-.056a1 1 0 0 1-.937-.649z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PhoneHorizontal.js
function PhoneHorizontal_extends() {
  PhoneHorizontal_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PhoneHorizontal_extends.apply(this, arguments);
}



var PhoneHorizontal = function PhoneHorizontal(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PhoneHorizontal_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneHorizontal"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23 7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7zm-2 5.996V17H3V7h18v4.004a1.038 1.038 0 0 0-.094-.004h-1a1 1 0 0 0 0 2h1c.032 0 .063-.002.094-.004z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PhoneVertical.js
function PhoneVertical_extends() {
  PhoneVertical_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PhoneVertical_extends.apply(this, arguments);
}



var PhoneVertical = function PhoneVertical(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PhoneVertical_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneVertical"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 23a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10zm-6-2H7V3h10v18h-4v-1.031a1 1 0 0 0-2 0V21z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Phone.js
function Phone_extends() {
  Phone_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Phone_extends.apply(this, arguments);
}



var Phone = function Phone(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Phone_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Phone"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6.375 2C5 2 3 3.5 2.5 4.5c-.715 1.43-.597 1.99-.125 3.5.625 2 2.457 5.545 5 8 3.625 3.5 7 5 8.5 5.5s3.125 0 4.125-1 2-2 .875-3.5c-.797-1.063-1.959-2.292-3.375-3-1.288-.644-2.056-.41-2.5.5-.246.503-.322 1.466-.5 2-.225.674-1.125.5-2.125 0C11.418 16.021 9 14 7 11c-1.24-1.859.742-1.87 2-2.5 1-.5 1.31-1.65.5-3C8 3 7.5 2 6.375 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PieChart.js
function PieChart_extends() {
  PieChart_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PieChart_extends.apply(this, arguments);
}



var PieChart = function PieChart(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PieChart_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PieChart"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M10 23a9 9 0 0 1 0-18v9l1.162 1.162 5.202 5.202A8.972 8.972 0 0 1 10 23zm4-13V1a9 9 0 0 1 9 9h-9zm0 3h8a8.964 8.964 0 0 1-2.107 5.787L14 13z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PiedPiper.js
function PiedPiper_extends() {
  PiedPiper_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PiedPiper_extends.apply(this, arguments);
}



var PiedPiper = function PiedPiper(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PiedPiper_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PiedPiper"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#609B4D",
    fillRule: "evenodd",
    d: "M0 19.421c2.274 0 4.042-.758 4.042-.758s3.032-7.579 7.326-7.579c3.285 0 3.79 2.527 3.79 2.527S19.958 4.263 24 3c-3.79 3.032-3.284 6.316-5.053 7.832-1.768 1.515-1.768.006-3.79 3.543-4.546.505-6.032 2.014-9.094 3.783 5.305-2.526 6.316-2.78 11.116-2.526.504.026.758.252.505.757-.733 1.466-1.28 3.673-2.273 3.537-5.558-.758-8.843.506-11.622.506-2.778 0-3.789-.506-3.789-1.01z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Pin.js
function Pin_extends() {
  Pin_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Pin_extends.apply(this, arguments);
}



var Pin = function Pin(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Pin_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pin"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m16 3-6 6s-4-1-7 2l10 10c3-3 2-7 2-7l6-6-5-5zM1 23l7-7m6-15 9 9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Pinterest.js
function Pinterest_extends() {
  Pinterest_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Pinterest_extends.apply(this, arguments);
}



var Pinterest = function Pinterest(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Pinterest_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pinterest"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#BD081C",
    fillRule: "evenodd",
    d: "M12 0C5.372 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.95-.2-2.406.042-3.442.217-.936 1.407-5.965 1.407-5.965s-.36-.718-.36-1.781c0-1.669.968-2.915 2.172-2.915 1.024 0 1.518.769 1.518 1.69 0 1.03-.655 2.57-.993 3.996-.283 1.195.598 2.169 1.777 2.169 2.133 0 3.772-2.25 3.772-5.495 0-2.873-2.065-4.883-5.013-4.883-3.414 0-5.418 2.562-5.418 5.208 0 1.031.397 2.138.893 2.739a.359.359 0 0 1 .083.344c-.091.38-.293 1.194-.333 1.361-.053.219-.174.266-.402.16-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.261 7.93-7.261 4.162 0 7.397 2.966 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.358-.632-2.75-1.378l-.748 2.853c-.27 1.042-1.002 2.348-1.492 3.146A11.99 11.99 0 0 0 12 24c6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Plan.js
function Plan_extends() {
  Plan_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Plan_extends.apply(this, arguments);
}



var Plan = function Plan(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Plan_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Plan"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 4V0v4zM7 18H5h2zm12 0H9h10zM7 14H5h2zm12 0H9h10zM6 4V0v4zM1 9h22H1zm0 14h22V4H1v19z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PlayFill.js
function PlayFill_extends() {
  PlayFill_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PlayFill_extends.apply(this, arguments);
}



var PlayFill = function PlayFill(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PlayFill_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PlayFill"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m3 22 18-10L3 2v20zm2-3 12.6-7L5 5v14zm2-3 7.2-4L7 8v8zm2-3 1.8-1L9 11v2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Play.js
function Play_extends() {
  Play_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Play_extends.apply(this, arguments);
}



var Play = function Play(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Play_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Play"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m3 22 18-10L3 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Plug.js
function Plug_extends() {
  Plug_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Plug_extends.apply(this, arguments);
}



var Plug = function Plug(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Plug_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Plug"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 5V1h-2v4h-4V1H8v4H5v8a3 3 0 0 0 3 3h3v8h2v-8h3a3 3 0 0 0 3-3V5h-3zm-9 8V7h10v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Pocket.js
function Pocket_extends() {
  Pocket_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Pocket_extends.apply(this, arguments);
}



var Pocket = function Pocket(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Pocket_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pocket"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F50057",
    d: "M12 2H2a2 2 0 0 0-2 2v8c0 5.982 6 11 12 11s12-5.018 12-11V4a2 2 0 0 0-2-2H12z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    d: "m6 9 6.404 6L18 9"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PowerCycle.js
function PowerCycle_extends() {
  PowerCycle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PowerCycle_extends.apply(this, arguments);
}



var PowerCycle = function PowerCycle(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PowerCycle_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PowerCycle"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 8a8.955 8.955 0 0 0-8.036-5C7.014 3 3 7.03 3 12m1 4a8.955 8.955 0 0 0 8.036 5C16.986 21 21 16.97 21 12M9 16H3v6M21 2v6h-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PowerForceShutdown.js
function PowerForceShutdown_extends() {
  PowerForceShutdown_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PowerForceShutdown_extends.apply(this, arguments);
}



var PowerForceShutdown = function PowerForceShutdown(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PowerForceShutdown_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PowerForceShutdown"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PowerReset.js
function PowerReset_extends() {
  PowerReset_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PowerReset_extends.apply(this, arguments);
}



var PowerReset = function PowerReset(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PowerReset_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PowerReset"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 0 18 9 9 0 0 0 9-9m0-9v6h-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/PowerShutdown.js
function PowerShutdown_extends() {
  PowerShutdown_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PowerShutdown_extends.apply(this, arguments);
}



var PowerShutdown = function PowerShutdown(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, PowerShutdown_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PowerShutdown"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 1v8M6.994 4.52a9.044 9.044 0 0 0-1.358 1.116 9 9 0 1 0 11.37-1.117"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Power.js
function Power_extends() {
  Power_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Power_extends.apply(this, arguments);
}



var Power = function Power(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Power_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Power"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 4c3.364 1.43 6 4.99 6 9 0 5.6-4.473 10-10 10S2 18.6 2 13c0-4.01 2.636-7.57 6-9m4-3v10"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Previous.js
function Previous_extends() {
  Previous_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Previous_extends.apply(this, arguments);
}



var Previous = function Previous(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Previous_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Previous"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 2 7 12l10 10"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Print.js
function Print_extends() {
  Print_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Print_extends.apply(this, arguments);
}



var Print = function Print(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Print_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Print"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 19H1V7h22v12h-5M3 16h18M6 16v7h12v-7m0-9V1H6v6m11 5h2v-1h-2v1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ProductHunt.js
function ProductHunt_extends() {
  ProductHunt_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ProductHunt_extends.apply(this, arguments);
}



var ProductHunt = function ProductHunt(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ProductHunt_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ProductHunt"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#DA552F",
    fillRule: "evenodd",
    d: "M13.6 8.4h-3.4V12h3.4a1.8 1.8 0 1 0 0-3.6m0 6h-3.4V18H7.8V6h5.8a4.2 4.2 0 1 1 0 8.4M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.627 0 12-5.372 12-12S18.627 0 12 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Projects.js
function Projects_extends() {
  Projects_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Projects_extends.apply(this, arguments);
}



var Projects = function Projects(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Projects_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Projects"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 15v8H1v-8h8zm14 0v8h-8v-8h8zM9 1v8H1V1h8zm14 0v8h-8V1h8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Qr.js
function Qr_extends() {
  Qr_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Qr_extends.apply(this, arguments);
}



var Qr = function Qr(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Qr_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Qr"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#000",
    d: "M13 14h1v1h-1v-1zm1 1h1v1h-1v-1zm0 1h1v1h-1v-1zm2 0h1v1h-1v-1zm0 1h1v1h-1v-1zm-3-1h1v1h-1v-1zm2 0h1v1h-1v-1zm0 1h1v1h-1v-1zm3-1h1v1h-1v-1zm0-1h1v1h-1v-1zm1-1h1v1h-1v-1zm-2 2h1v1h-1v-1zm0 1h1v1h-1v-1zm-1 1h1v1h-1v-1zm-1 0h1v1h-1v-1zm2 0h1v1h-1v-1zm1 0h1v1h-1v-1zm-2 1h1v1h-1v-1zm-2 0h1v1h-1v-1zm1 0h1v1h-1v-1zm-2 0h1v1h-1v-1zm0 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 0h1v1h-1v-1zm2 0h1v1h-1v-1zm1 0h1v1h-1v-1zm-1-2h1v1h-1v-1zm1 0h1v1h-1v-1zm1-1h1v1h-1v-1zm0-1h1v1h-1v-1zm0 3h1v1h-1v-1zm0-1h1v1h-1v-1zm1-1h1v1h-1v-1zm0-1h1v1h-1v-1zm1 3h1v1h-1v-1zm0-2h1v1h-1v-1zm0 1h1v1h-1v-1zm-2-3h1v1h-1v-1zm-6 1h1v1h-1v-1zm-1 0h1v1h-1v-1zm0 1h1v1h-1v-1zm2 0h1v1h-1v-1zm-3 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 1h1v1h-1v-1zm0 1h1v1h-1v-1zm0-19h1v1h-1V1zm1 1h1v1h-1V2zm-1 2h1v1h-1V4zm1 1h1v1h-1V5zm-1 1h1v1h-1V6zm1 0h1v1h-1V6zm0 1h1v1h-1V7zm0 1h1v1h-1V8zm-1 1h1v1h-1V9zm1 0h1v1h-1V9zm-1 1h1v1h-1v-1zM1 11h1v1H1v-1zm1 1h1v1H2v-1zm2-1h1v1H4v-1zm0 1h1v1H4v-1zm1-1h1v1H5v-1zm1 1h1v1H6v-1zm1-1h1v1H7v-1zm1 1h1v1H8v-1zm0-1h1v1H8v-1zm1 0h1v1H9v-1zm1 0h1v1h-1v-1zm1 1h1v1h-1v-1zm2 0h1v1h-1v-1zm1-1h1v1h-1v-1zm1 0h1v1h-1v-1zm1 0h1v1h-1v-1zm-1 2h1v1h-1v-1zm-2 9h1v1h-1v-1zm-1 0h1v1h-1v-1zm0-9h1v1h-1v-1zm-1 0h1v1h-1v-1zm0 1h1v1h-1v-1zm0 1h1v1h-1v-1zm11-1h1v1h-1v-1zm-1 1h1v1h-1v-1zm1 2h1v1h-1v-1zm-5-4h1v1h-1v-1zm1-1h1v1h-1v-1zm4 0h1v1h-1v-1zm0 1h1v1h-1v-1zm-1 0h1v1h-1v-1zm1 8h1v1h-1v-1zm-1 1h1v1h-1v-1zm-2 0h1v1h-1v-1zm3 0h1v1h-1v-1z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    d: "M15 2h7v7h-7V2zM2 2h7v7H2V2zm0 13h7v7H2v-7zM18 5h1v1h-1V5zM5 5h1v1H5V5zm0 13h1v1H5v-1z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/RadialSelected.js
function RadialSelected_extends() {
  RadialSelected_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RadialSelected_extends.apply(this, arguments);
}



var RadialSelected = function RadialSelected(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, RadialSelected_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "RadialSelected"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Radial.js
function Radial_extends() {
  Radial_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Radial_extends.apply(this, arguments);
}



var Radial = function Radial(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Radial_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Radial"
  }, props), /*#__PURE__*/react.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "11",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Raspberry.js
function Raspberry_extends() {
  Raspberry_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Raspberry_extends.apply(this, arguments);
}



var Raspberry = function Raspberry(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Raspberry_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Raspberry"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#C7053D",
    fillRule: "evenodd",
    d: "M8.087 0a.667.667 0 0 0-.399.165c-.363-.14-.717-.19-1.032.096-.486-.063-.643.067-.762.22-.107-.003-.8-.11-1.117.364-.798-.095-1.049.47-.763.994-.163.253-.332.5.048.981-.134.268-.05.558.267.91-.084.376.081.641.376.848-.055.515.472.815.629.922.06.3.187.584.79.74.099.447.46.525.811.619-1.159.673-2.153 1.558-2.146 3.733l-.17.303c-1.328.808-2.524 3.406-.654 5.518.122.66.326 1.134.508 1.66.273 2.117 2.054 3.11 2.523 3.227.688.524 1.422 1.02 2.413 1.369.935.964 1.946 1.331 3.005 1.331s2.07-.367 3.005-1.331c.992-.348 1.725-.845 2.413-1.37.47-.117 2.25-1.11 2.523-3.226.182-.526.386-1 .508-1.66 1.87-2.112.674-4.71-.655-5.518l-.169-.303c.007-2.175-.987-3.06-2.146-3.733.35-.094.712-.172.812-.619.602-.156.729-.44.79-.74.157-.107.683-.407.628-.922.295-.207.46-.472.376-.848.318-.352.402-.642.267-.91.38-.48.212-.728.049-.98.285-.526.034-1.09-.763-.995-.318-.474-1.01-.367-1.117-.365-.12-.152-.277-.282-.763-.22-.315-.284-.669-.235-1.032-.095A.667.667 0 0 0 16.742 0c-.232-.007-.43.134-.643.202-.523-.17-.641.061-.898.156-.569-.12-.742.143-1.015.42l-.32-.007c-.858.506-1.282 1.535-1.452 1.535-.17 0-.594-1.029-1.453-1.535l-.319.006C10.37.501 10.196.238 9.627.358 9.37.263 9.252.031 8.73.202 8.516.134 8.318-.007 8.087 0zm.03.609c.436.161.663.37.9.575.08-.108.202-.188.052-.45.31.18.544.39.717.625.191-.122.112-.287.113-.441.322.262.528.54.778.812.05-.037.093-.162.132-.358.768.744 1.852 2.62.279 3.365C9.749 3.633 8.15 2.83 6.38 2.228c2.277 1.174 3.602 2.123 4.327 2.932-.371 1.49-2.31 1.56-3.019 1.518.145-.068.266-.15.31-.275-.179-.127-.81-.013-1.25-.26.17-.036.249-.069.328-.194-.416-.132-.864-.248-1.128-.468.143.002.275.033.46-.095-.372-.201-.77-.36-1.078-.668.193-.004.4-.002.46-.073a4.155 4.155 0 0 1-.867-.704c.27.033.382.006.448-.04-.258-.265-.583-.487-.739-.812.2.069.383.093.515-.008-.088-.198-.464-.314-.68-.776.211.02.436.046.48 0-.097-.398-.264-.622-.429-.854.451-.007 1.134.001 1.103-.037l-.279-.285c.44-.118.892.02 1.219.122.147-.115-.004-.263-.183-.413.374.05.713.136 1.019.255C7.56.945 7.289.799 7.159.65c.578.11.825.263 1.068.417.177-.169.01-.312-.11-.46zm8.594 0c-.12.147-.287.29-.11.46.244-.155.49-.308 1.068-.418-.13.148-.401.294-.238.442a4.431 4.431 0 0 1 1.02-.255c-.18.15-.33.298-.184.413.328-.102.779-.24 1.22-.122l-.28.285c-.03.038.652.03 1.103.037-.165.232-.331.456-.43.854.045.046.27.02.48 0-.215.462-.591.578-.679.776.132.101.315.077.515.008-.155.325-.48.547-.738.811.065.047.178.074.447.041a4.155 4.155 0 0 1-.866.704c.06.07.267.069.46.073-.31.307-.706.467-1.079.668.186.128.318.097.46.095-.264.22-.711.336-1.127.468.079.125.158.158.327.193-.44.248-1.071.134-1.249.26.043.125.164.208.31.276-.71.041-2.648-.029-3.02-1.518.726-.81 2.05-1.758 4.328-2.932-1.772.602-3.37 1.405-4.708 2.509-1.574-.744-.49-2.62.278-3.365.04.196.082.32.133.358.25-.272.455-.55.777-.812 0 .154-.078.32.114.441.172-.235.406-.446.716-.624-.15.26-.027.341.053.45.236-.207.463-.415.899-.576zM12.414 6.77c1.359 0 2.492.923 2.494 1.466.004.68-.994 1.38-2.476 1.398h-.036c-1.482-.018-2.48-.717-2.476-1.398.003-.543 1.136-1.466 2.494-1.466zm-3.813.447h.084c.22 0 .447.02.677.059.777.13-3.72 4.058-3.79 3.182-.062-2.003 1.278-3.213 3.03-3.241zm7.542 0h.084c1.751.028 3.091 1.238 3.03 3.24-.07.877-4.567-3.05-3.791-3.181.23-.04.457-.058.677-.06zm-6.825 2.5c.259-.002.521.036.777.122 1.363.458 2.052 2.053 1.54 3.56-.513 1.509-2.034 2.36-3.398 1.903-1.363-.458-2.052-2.053-1.54-3.56.417-1.226 1.498-2.017 2.62-2.025zm6.193 0c1.122.008 2.204.8 2.62 2.024.513 1.508-.176 3.103-1.54 3.56-1.364.459-2.885-.393-3.398-1.901-.512-1.508.177-3.103 1.54-3.56.256-.087.519-.125.778-.123zM5.33 11.4c1.062.015.273 5.052-.69 4.624-1.092-.879-1.444-3.451.582-4.608a.405.405 0 0 1 .082-.014l.026-.002zm14.168 0 .027.002a.404.404 0 0 1 .081.014c2.026 1.157 1.675 3.73.582 4.608-.963.428-1.752-4.609-.69-4.624zm-7.084 3.482a2.8 2.8 0 0 1 1.874.7c.52.47.822 1.14.818 1.811 0 .66-.295 1.313-.8 1.778a2.88 2.88 0 0 1-1.892.739 2.884 2.884 0 0 1-1.892-.739 2.448 2.448 0 0 1-.8-1.778 2.456 2.456 0 0 1 .818-1.81 2.796 2.796 0 0 1 1.874-.7zM6.148 16.2c.703-.014 1.568.541 2.268 1.353.78.94 1.136 2.593.485 3.08-.617.372-2.115.218-3.178-1.31-.718-1.282-.624-2.587-.12-2.97.164-.1.348-.149.545-.153zm12.465 0h.067c.197.004.38.052.546.153.503.383.597 1.688-.12 2.97-1.064 1.528-2.562 1.682-3.178 1.31-.652-.487-.297-2.14.484-3.08.678-.787 1.51-1.333 2.201-1.353zm-6.199 4.504c1.09-.012 2.71.447 2.69 1.032.017.405-1.312 1.574-2.667 1.516h-.045c-1.356.058-2.685-1.11-2.667-1.516-.02-.585 1.6-1.044 2.69-1.032z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Reactjs.js
function Reactjs_extends() {
  Reactjs_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Reactjs_extends.apply(this, arguments);
}



var Reactjs = function Reactjs(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Reactjs_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Reactjs"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "#00D8FF",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "11.996",
    cy: "11.653",
    r: "2.142"
  }), /*#__PURE__*/react.createElement("path", {
    fillRule: "nonzero",
    d: "M11.996 7.81c2.768 0 5.397.39 7.396 1.078 2.22.764 3.575 1.894 3.575 2.765 0 .927-1.463 2.131-3.838 2.918-1.89.626-4.42.968-7.133.968-2.85 0-5.409-.335-7.277-.974-1.17-.4-2.136-.92-2.799-1.486-.595-.51-.895-1.016-.895-1.426 0-.874 1.302-1.988 3.475-2.746 2-.697 4.693-1.098 7.496-1.098m0-1.025c-2.912 0-5.718.418-7.834 1.156C1.622 8.825 0 10.213 0 11.653c0 1.486 1.741 2.978 4.387 3.882 1.989.68 4.654 1.029 7.609 1.029 2.816 0 5.451-.356 7.456-1.02 2.75-.912 4.54-2.385 4.54-3.891 0-1.445-1.675-2.842-4.266-3.735-2.113-.727-4.854-1.134-7.73-1.134m-3.348 2.96c1.383-2.399 3.034-4.481 4.63-5.87 1.77-1.54 3.426-2.15 4.18-1.714.803.463 1.116 2.331.611 4.782-.402 1.95-1.37 4.312-2.725 6.663-1.424 2.469-2.992 4.518-4.48 5.817-.93.814-1.863 1.391-2.685 1.682-.738.26-1.327.268-1.682.063-.757-.436-1.072-2.121-.643-4.381.395-2.081 1.394-4.615 2.794-7.043m-.888-.512c-1.455 2.522-2.495 5.162-2.913 7.363-.501 2.643-.11 4.742 1.137 5.46 1.289.744 3.45-.02 5.555-1.86 1.583-1.383 3.217-3.518 4.693-6.077 1.406-2.44 2.415-4.9 2.84-6.969.585-2.837.203-5.124-1.102-5.876-1.252-.722-3.298.03-5.366 1.83C10.92 4.568 9.197 6.74 7.76 9.231m.891 4.378C7.264 11.215 6.285 8.744 5.879 6.67c-.451-2.305-.152-4.043.602-4.479.802-.465 2.577.198 4.448 1.859 1.49 1.322 3.052 3.34 4.411 5.689 1.429 2.467 2.42 4.848 2.804 6.785.24 1.213.274 2.31.115 3.167-.143.77-.43 1.284-.785 1.49-.756.437-2.373-.132-4.117-1.633-1.605-1.38-3.302-3.511-4.706-5.937m-.887.514c1.459 2.52 3.226 4.74 4.925 6.2 2.039 1.755 4.052 2.463 5.298 1.742 1.287-.745 1.705-2.999 1.162-5.742-.408-2.061-1.441-4.543-2.922-7.1-1.41-2.437-3.039-4.54-4.618-5.942C9.443 1.36 7.271.548 5.967 1.303c-1.25.724-1.62 2.873-1.094 5.563.429 2.193 1.45 4.769 2.891 7.258"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Reddit.js
function Reddit_extends() {
  Reddit_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Reddit_extends.apply(this, arguments);
}



var Reddit = function Reddit(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Reddit_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Reddit"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4500",
    fillRule: "evenodd",
    d: "M15.57 15.284c-.897 0-1.65-.728-1.65-1.625s.753-1.648 1.65-1.648c.897 0 1.625.752 1.625 1.649 0 .896-.728 1.624-1.625 1.624m.381 3.153c-.835.835-2.124 1.24-3.939 1.24h-.026c-1.815 0-3.102-.405-3.937-1.24a.655.655 0 1 1 .927-.927c.576.576 1.56.856 3.01.856l.013.001h.013c1.45 0 2.435-.281 3.012-.857a.655.655 0 1 1 .927.927m-9.146-4.778c0-.896.753-1.648 1.649-1.648.897 0 1.624.752 1.624 1.649 0 .896-.727 1.624-1.624 1.624-.896 0-1.649-.728-1.649-1.625M19.998 3.311c.607 0 1.102.494 1.102 1.101s-.495 1.102-1.102 1.102a1.103 1.103 0 0 1-1.102-1.102c0-.607.494-1.101 1.102-1.101M24 11.875a2.887 2.887 0 0 0-2.884-2.884c-.689 0-1.321.243-1.818.647-1.758-1.105-3.99-1.771-6.383-1.912l1.248-3.946 3.43.808a2.415 2.415 0 0 0 2.405 2.237 2.415 2.415 0 0 0 2.412-2.413A2.415 2.415 0 0 0 19.998 2c-.93 0-1.739.53-2.141 1.303l-3.986-.938a.655.655 0 0 0-.774.44l-1.55 4.897c-2.578.063-5.001.732-6.889 1.902a2.87 2.87 0 0 0-1.774-.613A2.887 2.887 0 0 0 0 11.875a2.88 2.88 0 0 0 1.249 2.373 5.063 5.063 0 0 0-.048.693c0 1.988 1.155 3.837 3.254 5.207 2.011 1.313 4.674 2.036 7.496 2.036s5.485-.723 7.497-2.036c2.098-1.37 3.254-3.22 3.254-5.207 0-.213-.015-.424-.04-.633A2.884 2.884 0 0 0 24 11.875"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Redhat.js
function Redhat_extends() {
  Redhat_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Redhat_extends.apply(this, arguments);
}



var Redhat = function Redhat(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Redhat_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Redhat"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#E00",
    d: "M5.832 6.125c.645-2.404 1.531-3.365 2.66-2.885 1.691.722 2.416.481 3.141 0 .484-.32 1.209-.32 2.175 0l3.384 1.443c.967.32 1.611 1.442 1.934 3.366.322 1.923.564 3.205.725 3.846 2.417.962 3.786 2.405 4.109 4.328.483 2.885-3.384 5.77-11.36 4.327C4.624 19.108-.452 14.54.032 11.895c.322-1.763 1.853-2.644 4.592-2.644l1.208-3.126z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#000",
    d: "M4.887 8.538c1.462 2.507 4.142 4.074 8.04 4.7 3.897.627 6.171 0 6.82-1.88.278 1.417.278 2.357 0 2.82-.914 1.527-3.411 1.969-6.09 1.646-3.897-.47-6.74-1.724-8.526-3.76-.487-.627-.731-1.175-.731-1.646 0-.47.162-1.096.487-1.88z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Redo.js
function Redo_extends() {
  Redo_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Redo_extends.apply(this, arguments);
}



var Redo = function Redo(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Redo_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Redo"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M16.82 4 15.4 5.44 17.94 8H8.23a6 6 0 0 0 0 12h2v-2h-2a4 4 0 0 1 0-8h9.71l-2.54 2.51 1.41 1.41L21.77 9z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Refresh.js
function Refresh_extends() {
  Refresh_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Refresh_extends.apply(this, arguments);
}



var Refresh = function Refresh(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Refresh_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Refresh"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 0 18 9 9 0 0 0 9-9m0-9v6h-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Resources.js
function Resources_extends() {
  Resources_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Resources_extends.apply(this, arguments);
}



var Resources = function Resources(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Resources_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Resources"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m12 3 9 4.5-9 4.5-9-4.5L12 3zm4.5 7.25L21 12.5 12 17l-9-4.5 4.5-2.25m9 5L21 17.5 12 22l-9-4.5 4.5-2.25"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Restaurant.js
function Restaurant_extends() {
  Restaurant_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Restaurant_extends.apply(this, arguments);
}



var Restaurant = function Restaurant(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Restaurant_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Restaurant"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 18H5h14zm-7 0v-6 6zm3 0v-4 4zm-6 0v-4 4zm10 4V11.33a3.001 3.001 0 1 0-2.08-5.63C16.55 3.874 14.46 2 12 2S7.45 3.874 7.08 5.7A3 3 0 1 0 5 11.33V22h14z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/RestroomMen.js
function RestroomMen_extends() {
  RestroomMen_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RestroomMen_extends.apply(this, arguments);
}



var RestroomMen = function RestroomMen(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, RestroomMen_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "RestroomMen"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 13.5 11 8l-1 13m7-7.5L13 8l1 13M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 3h2v5.5h-2V8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/RestroomWomen.js
function RestroomWomen_extends() {
  RestroomWomen_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RestroomWomen_extends.apply(this, arguments);
}



var RestroomWomen = function RestroomWomen(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, RestroomWomen_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "RestroomWomen"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 13.5 11 8l1 13m5-7.5L13 8l-1 13m0-16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 3h2l1.5 8.5h-5L11 8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Restroom.js
function Restroom_extends() {
  Restroom_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Restroom_extends.apply(this, arguments);
}



var Restroom = function Restroom(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Restroom_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Restroom"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M6 11h12M6 3h12m-6 13a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5zM7 3h10v8H7V3zm0 3h2.5m5 9.5 1.5 6H8l1.5-6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Resume.js
function Resume_extends() {
  Resume_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Resume_extends.apply(this, arguments);
}



var Resume = function Resume(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Resume_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Resume"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 20h5V4H1v16zm10-1 11-7-11-7v14z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Return.js
function Return_extends() {
  Return_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Return_extends.apply(this, arguments);
}



var Return = function Return(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Return_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Return"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m9 19-5-5 5-5m9-5v10H5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Revert.js
function Revert_extends() {
  Revert_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Revert_extends.apply(this, arguments);
}



var Revert = function Revert(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Revert_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Revert"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 3 3 8l5 5m4 7h3a6 6 0 1 0 0-12H4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Rewind.js
function Rewind_extends() {
  Rewind_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Rewind_extends.apply(this, arguments);
}



var Rewind = function Rewind(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Rewind_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Rewind"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 3.5V20l-9-6v6L2 12l11-8v6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Risk.js
function Risk_extends() {
  Risk_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Risk_extends.apply(this, arguments);
}



var Risk = function Risk(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Risk_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Risk"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 10h1V9h-1v1zm4 0h1V9h-1v1zm0-4h1V5h-1v1zm-4 0h1V5h-1v1zM9 19h1v-1H9v1zm-4-4h1v-1H5v1zm5-5H1v13h13v-9m-4 0h13V1H10v13z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Robot.js
function Robot_extends() {
  Robot_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Robot_extends.apply(this, arguments);
}



var Robot = function Robot(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Robot_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Robot"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18.348 15.954a7 7 0 1 0-12.622.156M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-17V3M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 4.988L5 16s.072-.772.5-.5c.93.591 3.074 1.5 6.5 1.5 3.554 0 5.618-.916 6.5-1.5.359-.238.5.5.5.5l-1 2.988S17.005 21 12 21s-6-2.012-6-2.012z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/RotateLeft.js
function RotateLeft_extends() {
  RotateLeft_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RotateLeft_extends.apply(this, arguments);
}



var RotateLeft = function RotateLeft(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, RotateLeft_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "RotateLeft"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M11.52 3.43A9.09 9.09 0 0 0 5.7 5.55v-3.2H4.07v6.5h6.5V7.21H6.3a7.46 7.46 0 1 1-1.47 8.65l-1.46.73a9.11 9.11 0 1 0 8.15-13.16z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/RotateRight.js
function RotateRight_extends() {
  RotateRight_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RotateRight_extends.apply(this, arguments);
}



var RotateRight = function RotateRight(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, RotateRight_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "RotateRight"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M12.48 3.43a9.09 9.09 0 0 1 5.82 2.12v-3.2h1.64v6.5h-6.5V7.21h4.26a7.46 7.46 0 1 0 1.47 8.65l1.46.73a9.11 9.11 0 1 1-8.15-13.16z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Rss.js
function Rss_extends() {
  Rss_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Rss_extends.apply(this, arguments);
}



var Rss = function Rss(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Rss_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Rss"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 21C22 10.507 13.493 2 3 2m14 19c0-7.732-6.268-14-14-14m9 14a9 9 0 0 0-9-9m1 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Run.js
function Run_extends() {
  Run_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Run_extends.apply(this, arguments);
}



var Run = function Run(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Run_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Run"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m15 11 3 2m0-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9.5 9.5 9.525 6H15L8 17H4m11-9-3 5 .5 1L17 7.5 15 6m-4 7 5 3.5v5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/SafariOption.js
function SafariOption_extends() {
  SafariOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SafariOption_extends.apply(this, arguments);
}



var SafariOption = function SafariOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, SafariOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "SafariOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#87C5F8",
    fillRule: "evenodd",
    d: "M12.541 11.844c.022-.414-.33-.772-.775-.79-.47-.02-.827.325-.835.802-.007.423.337.758.79.772.45.014.795-.317.82-.784m4.673-6.722-.053-.04c-.053.044-.109.087-.16.135-1.914 1.787-3.831 3.571-5.741 5.364a3.48 3.48 0 0 0-.588.696c-1.401 2.307-2.789 4.623-4.179 6.936-.057.094-.102.194-.153.292a.242.242 0 0 0 .172-.069c1.94-1.812 3.883-3.62 5.814-5.443a4.03 4.03 0 0 0 .65-.824c1.371-2.256 2.73-4.521 4.092-6.783.052-.086.098-.176.146-.264m-.07-1.094c1.999 1.394 3.251 3.257 3.89 5.607-.233.057-.45.093-.652.167-.087.032-.145.144-.216.219.094.041.193.124.283.117.206-.02.408-.083.655-.138.45 2.407.068 4.629-1.183 6.729-.195-.118-.357-.242-.537-.317-.12-.05-.266-.033-.4-.045.065.109.11.242.202.323.148.129.327.224.533.36-1.375 2.01-3.215 3.324-5.6 3.961-.07-.266-.121-.526-.212-.773-.033-.09-.157-.147-.241-.22-.026.1-.087.206-.074.3.035.242.103.48.17.774-2.431.453-4.689.095-6.835-1.19.164-.256.33-.483.458-.73.053-.101.025-.244.034-.368-.113.06-.259.095-.332.187-.167.208-.298.446-.47.713-2.039-1.396-3.342-3.275-3.983-5.68.31-.072.574-.12.826-.203.085-.028.14-.146.21-.224-.1-.033-.204-.104-.299-.092-.253.033-.502.1-.797.164-.448-2.44-.062-4.696 1.251-6.829.19.12.354.25.54.334.144.066.314.074.473.108-.096-.14-.172-.3-.294-.412-.145-.131-.33-.219-.525-.343 1.425-1.992 3.285-3.301 5.708-3.895.056.241.087.471.165.683.045.119.165.208.251.31.03-.12.092-.245.08-.362-.022-.22-.087-.434-.145-.698 2.415-.423 4.647-.028 6.751 1.255-.15.242-.302.46-.42.695-.042.082.003.208.008.313.09-.04.208-.056.262-.123.16-.201.293-.422.465-.677M11.845 22.42c5.876-.014 10.586-4.76 10.577-10.659-.008-5.772-4.783-10.507-10.589-10.499C5.936 1.27 1.25 6.01 1.264 11.95c.015 5.752 4.797 10.484 10.581 10.47M11.836 0c6.506-.007 11.845 5.307 11.85 11.794A11.86 11.86 0 0 1 11.86 23.683C5.328 23.715 0 18.378 0 11.8 0 5.303 5.312.007 11.836.001"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Sans.js
function Sans_extends() {
  Sans_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Sans_extends.apply(this, arguments);
}



var Sans = function Sans(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Sans_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sans"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 2h20v8H2V3zm0 10v8h20v-8H2zm3-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 17a2 2 0 1 1 4 0 2 2 0 0 1-4 0z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Satellite.js
function Satellite_extends() {
  Satellite_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Satellite_extends.apply(this, arguments);
}



var Satellite = function Satellite(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Satellite_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Satellite"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 17C2.97 12.794 2.97 6.118 7 2l15 15c-4.118 4.03-10.794 4.03-15 0zm0 0c-3.295 0-6 2.95-6 6h12c0-1.139-.37-2.034-1-3m3-11 4-4-4 4zm5.5-8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Save.js
function Save_extends() {
  Save_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Save_extends.apply(this, arguments);
}



var Save = function Save(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Save_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Save"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 2v19h18V3h-9v11m-4-3 4 4 4-4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Scan.js
function Scan_extends() {
  Scan_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Scan_extends.apply(this, arguments);
}



var Scan = function Scan(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Scan_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Scan"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 10V3H4v7m-3 2h22H1zm3 1v3-3zm16 3v-3 3zM7 21H4v-3m16 0v3h-3m-8 0h6-6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ScheduleNew.js
function ScheduleNew_extends() {
  ScheduleNew_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ScheduleNew_extends.apply(this, arguments);
}



var ScheduleNew = function ScheduleNew(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ScheduleNew_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ScheduleNew"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 0v3M1 7h18M6 0v3m-2 8h2m2 0h8M4 15h2m2 0h6m-2 4H1V3h18v10m0 2v9m-4-7 8 5m0-5-8 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/SchedulePlay.js
function SchedulePlay_extends() {
  SchedulePlay_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SchedulePlay_extends.apply(this, arguments);
}



var SchedulePlay = function SchedulePlay(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, SchedulePlay_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "SchedulePlay"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 0v3M1 7h18M6 0v3m-2 8h2m2 0h8M4 15h2m2 0h6m-1 4H1V3h18v10m-1 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-.5-6 1.5 1-1.5 1v-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Schedule.js
function Schedule_extends() {
  Schedule_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Schedule_extends.apply(this, arguments);
}



var Schedule = function Schedule(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Schedule_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Schedule"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 23h22V4H1v19zM18 4V0v4zM6 4V0v4zM1 8.5h22H1zM6 14c.556-1.333 1.39-2 2.5-2 1.3 0 2 1 2 2s-1 2-2 3l-2 2v.5h5.405m5.08 1L17 12h-.5c-.5 1.5-2 2-2.743 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Schedules.js
function Schedules_extends() {
  Schedules_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Schedules_extends.apply(this, arguments);
}



var Schedules = function Schedules(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Schedules_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Schedules"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 7h6v16H7v-4m16-8h-6M13 0v3M1 7h16M1 3h16v16H1V3zm4-3v3m-1 8h2m2 0h6M4 15h2m2 0h6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Sco.js
function Sco_extends() {
  Sco_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Sco_extends.apply(this, arguments);
}



var Sco = function Sco(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Sco_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sco"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#3158A0",
    fillRule: "evenodd",
    d: "M16.16 16.105H24c-.247.746-.99 1.367-1.794 1.367H1.273c-.804 0-1.33-.62-1.268-1.367h14.702a3.784 3.784 0 0 1-.2-1.957h.959c0 .187 0 .343.03.497.31-.093.62-.28.897-.497h.619c-.526.56-1.02 1.025-1.268 1.212.114.277.261.528.416.745zm5.583-8.39C20.692 7.28 19.362 7 17.847 7c-1.546 0-3.03.28-4.206.715l.032.062h8.009l.06-.062zm-6.617 4.941c.031-.062.062-.124.093-.218l-10.792.032-.03-.125c2.659-.528 5.967-.839 9.523-.839.557 0 1.144 0 1.67.031.03-.124.062-.217.093-.342H7.026l-.031-.093c2.319-.497 5.225-.808 8.348-.808h.34c-.03-.062-.061-.186-.092-.28H9.715l-.03-.093a29.155 29.155 0 0 1 5.38-.684 1.616 1.616 0 0 0-.34-.31h-2.876l-.062-.094c1.484-.466 3.278-.745 5.226-.745 1.887 0 3.556.31 4.885.745l-.03.063-6.555.03c.092.063.185.156.278.28.37-.031.741-.031 1.113-.031 2.35 0 4.514.28 6.245.653l-.03.186h-6.896c.031.094.031.218.062.311 2.505.032 4.793.31 6.71.683l-.031.187h-6.617c0 .125 0 .249-.031.342 2.412.124 4.638.373 6.494.745l-.031.156h-4.144a.554.554 0 0 1-.155.218h-.494c.03-.062.093-.125.124-.218h-1.948c-.031.093-.031.156-.063.218h-.773zm-.62 1.492c.032-.156.063-.31.125-.467H6.839l-.062-.124c2.32-.466 5.195-.777 8.287-.777 0-.031.031-.093.062-.124h.773c0 .031-.031.093-.031.124.587.031 1.206.031 1.762.093a.958.958 0 0 0 .154-.217h.495c-.03.093-.093.155-.186.249a33.22 33.22 0 0 1 4.36.559l-.03.217h-4.98c-.154.156-.278.31-.432.467h-.618c.217-.125.402-.31.557-.467h-1.423a2.767 2.767 0 0 0-.062.467h-.958z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Scorecard.js
function Scorecard_extends() {
  Scorecard_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Scorecard_extends.apply(this, arguments);
}



var Scorecard = function Scorecard(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Scorecard_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Scorecard"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 18v-6m3 6v-5m3 5v-8m2-7h4v20H3V3h4m0-2h10v4H7V1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Script.js
function Script_extends() {
  Script_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Script_extends.apply(this, arguments);
}



var Script = function Script(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Script_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Script"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 1a4 4 0 0 0-4 4v1h5.847L4.01 18.859l-.01.07V19a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1h-5.847L19.99 5.141l.01-.07V5a4 4 0 0 0-4-4H4zm0 2a2 2 0 0 0-1.732 1h3.464A2 2 0 0 0 4 3zm3.465 0H16a2 2 0 0 1 1.999 1.936L16.133 18H10v1a2 2 0 0 1-3.999.064L7.99 5.141l.01-.07V5c0-.729-.195-1.412-.535-2zM20 21h-8.535a3.97 3.97 0 0 0 .409-1h9.858A2 2 0 0 1 20 21z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Sd.js
function Sd_extends() {
  Sd_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Sd_extends.apply(this, arguments);
}



var Sd = function Sd(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Sd_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sd"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 2a2 2 0 0 1 2-2h13a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 22 5v17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm14.586 0H4v20h16V5.414L16.586 2zM5 7V3h2v4H5zm3-4v4h2V3H8zm3 4V3h2v4h-2zm3-2v2h2V5h-2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/SearchAdvanced.js
function SearchAdvanced_extends() {
  SearchAdvanced_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SearchAdvanced_extends.apply(this, arguments);
}



var SearchAdvanced = function SearchAdvanced(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, SearchAdvanced_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "SearchAdvanced"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m15 16 6 6-6-6zm-5 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 1v6m-3-3h6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Search.js
function Search_extends() {
  Search_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Search_extends.apply(this, arguments);
}



var Search = function Search(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Search_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Search"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m15 15 7 7-7-7zm-5.5 2a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Secure.js
function Secure_extends() {
  Secure_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Secure_extends.apply(this, arguments);
}



var Secure = function Secure(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Secure_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Secure"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 11V6c0-3 2-5 5-5s5 2 5 5v5m-5 12a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-8v4m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Select.js
function Select_extends() {
  Select_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Select_extends.apply(this, arguments);
}



var Select = function Select(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Select_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Select"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 1h6-6zm11.188 18.472L16 22l-3.5-4.5-3 3.5L7 7l13 6.5-4.5 1.5 3.688 4.472zM19 4V1h-3M6 1H3v3m0 10v3h3M19 6v4-4zM3 12V6v6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Selection.js
function Selection_extends() {
  Selection_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Selection_extends.apply(this, arguments);
}



var Selection = function Selection(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Selection_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Selection"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 18h3V6H5v12zm7-16v20V2zM1 22h22V2H1v20z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Semantics.js
function Semantics_extends() {
  Semantics_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Semantics_extends.apply(this, arguments);
}



var Semantics = function Semantics(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Semantics_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Semantics"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2 17 10-5 10 5v4l-10-5-10 5v-4zm0-9 10-5 10 5v4L12 7 2 12V8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Send.js
function Send_extends() {
  Send_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Send_extends.apply(this, arguments);
}



var Send = function Send(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Send_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Send"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M22 3 2 11l18.5 8L22 3zM10 20.5l3-4.5m2.5-6.5L9 14l.859 6.012c.078.546.216.537.306-.003L11 15l4.5-5.5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ServerCluster.js
function ServerCluster_extends() {
  ServerCluster_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ServerCluster_extends.apply(this, arguments);
}



var ServerCluster = function ServerCluster(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ServerCluster_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ServerCluster"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 8h22V1H1v7zm10-3h1V4h-1v1zm8 0h1V4h-1v1zm-4 0h1V4h-1v1zm-4 7h1v-1h-1v1zm8 0h1v-1h-1v1zm-4 0h1v-1h-1v1zm-4 7h1v-1h-1v1zm8 0h1v-1h-1v1zm-4 0h1v-1h-1v1zM1 15h22V8H1v7zm0 7h22v-7H1v7zm20 1H3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Server.js
function Server_extends() {
  Server_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Server_extends.apply(this, arguments);
}



var Server = function Server(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Server_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Server"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M14 19h1v-1h-1v1zm-9 4h14V1H5v22zM8 5h8-8zm0 4h8-8zm0 4h8-8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Servers.js
function Servers_extends() {
  Servers_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Servers_extends.apply(this, arguments);
}



var Servers = function Servers(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Servers_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Servers"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 19h1v-1H7v1zm11 0h1v-1h-1v1zM1 23h11V1H1v22zm11 0h11V1H12v22zM4 5h5-5zm11 0h5-5zM4 9h5-5zm11 0h5-5zM4 13h5-5zm11 0h5-5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ServicePlay.js
function ServicePlay_extends() {
  ServicePlay_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ServicePlay_extends.apply(this, arguments);
}



var ServicePlay = function ServicePlay(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ServicePlay_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ServicePlay"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12zm7.995 3.657a6 6 0 1 0-1.89-10.22m-8.281 6.255A6 6 0 0 0 9 23a6 6 0 0 0 2.127-11.612M6.5 6 8 7 6.5 8V6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Services.js
function Services_extends() {
  Services_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Services_extends.apply(this, arguments);
}



var Services = function Services(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Services_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Services"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6V0m0 12V9M0 6h3m6 0h3M2 2l2 2m4 4 2 2m0-8L8 4M4 8l-2 2m16 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6V3m0 12v-3m-6-3h3m6 0h3M14 5l2 2m4 4 2 2m0-8-2 2m-4 4-2 2m-5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6v-3m0 12v-3m-6-3h3m6 0h3M5 14l2 2m4 4 2 2m0-8-2 2m-4 4-2 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/SettingsOption.js
function SettingsOption_extends() {
  SettingsOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SettingsOption_extends.apply(this, arguments);
}



var SettingsOption = function SettingsOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, SettingsOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "SettingsOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 9V0m3 12h9M0 12h9m3 12v-9m0 6a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.5 8.5 1 7.5m19.5 8 2.5 1M3 3l2.5 2.5M3 3l2.5 2.5M18 18l2.5 2.5m0-17.5L18 5.5M5.5 18 3 20.5m9-5.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8.5-6.5 2.5-1m-7.5-4 1-2.5m-1 19.5 1 2.5m-8-2.5-1 2.5m-4-7.5-2.5 1m7.5-13L7.5 1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ShareOption.js
function ShareOption_extends() {
  ShareOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ShareOption_extends.apply(this, arguments);
}



var ShareOption = function ShareOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ShareOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ShareOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-2-4-8-5m8-7-8 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ShareRounded.js
function ShareRounded_extends() {
  ShareRounded_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ShareRounded_extends.apply(this, arguments);
}



var ShareRounded = function ShareRounded(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ShareRounded_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ShareRounded"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.924 3.617a.997.997 0 0 0-.215-.322l-.004-.004A.997.997 0 0 0 20 3h-6a1 1 0 1 0 0 2h3.586l-7.293 7.293a1 1 0 1 0 1.414 1.414L19 6.414V10a1 1 0 1 0 2 0V3.997a.999.999 0 0 0-.076-.38zM3 8a5 5 0 0 1 5-5h1a1 1 0 0 1 0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1a1 1 0 1 1 2 0v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Share.js
function Share_extends() {
  Share_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Share_extends.apply(this, arguments);
}



var Share = function Share(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Share_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Share"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 13v10H1V5h10m3-4h9v9m-13 4L23 1 10 14z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ShieldSecurity.js
function ShieldSecurity_extends() {
  ShieldSecurity_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ShieldSecurity_extends.apply(this, arguments);
}



var ShieldSecurity = function ShieldSecurity(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ShieldSecurity_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ShieldSecurity"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22s-9-4-9-11V5l9-3 9 3v6c0 7-9 11-9 11zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6V5m0 12v-3m-6-3h3m6 0h3M8 7l2 2m4 4 2 2m0-8-2 2m-4 4-2 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Shield.js
function Shield_extends() {
  Shield_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Shield_extends.apply(this, arguments);
}



var Shield = function Shield(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Shield_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Shield"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22S3 18 3 5l9-3 9 3c0 13-9 17-9 17zM4 11h16m-8-9v20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Shift.js
function Shift_extends() {
  Shift_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Shift_extends.apply(this, arguments);
}



var Shift = function Shift(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Shift_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Shift"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 0v24M2 12h10m10 0H12M6 8l-4 4 4 4m12-8 4 4-4 4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Shop.js
function Shop_extends() {
  Shop_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Shop_extends.apply(this, arguments);
}



var Shop = function Shop(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Shop_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Shop"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M4 7h16v16H4V7zm4 2V5c0-2.21 1.795-4 4-4h0c2.21 0 4 1.795 4 4v4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Sidebar.js
function Sidebar_extends() {
  Sidebar_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Sidebar_extends.apply(this, arguments);
}



var Sidebar = function Sidebar(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Sidebar_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sidebar"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 22h22V2H1v20zM16 2v20V2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Sign.js
function Sign_extends() {
  Sign_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Sign_extends.apply(this, arguments);
}



var Sign = function Sign(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Sign_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sign"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 23h7c3 0 4-2 4-5V6c0-2-1-2-1.5-2S16 4 16 6v7c0-1 0-2-1.5-2S13 13 13 13c0-1 0-2-1.5-2S10 12 10 13V4c0-1 .03-2-1.5-2C7 2 7 3 7 4v14-4c0-1-.55-2-2-2H4v6c0 3.962 2 5.024 4 5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Skype.js
function Skype_extends() {
  Skype_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Skype_extends.apply(this, arguments);
}



var Skype = function Skype(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Skype_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Skype"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#00AFF0",
    fillRule: "evenodd",
    d: "M12.052 18.856c-4.027 0-5.828-1.98-5.828-3.463 0-.761.562-1.295 1.336-1.295 1.724 0 1.277 2.475 4.492 2.475 1.645 0 2.554-.894 2.554-1.809 0-.55-.271-1.159-1.355-1.426l-3.581-.894c-2.884-.723-3.407-2.282-3.407-3.748 0-3.043 2.864-4.185 5.556-4.185 2.477 0 5.4 1.369 5.4 3.194 0 .783-.678 1.238-1.452 1.238-1.47 0-1.2-2.035-4.162-2.035-1.47 0-2.283.665-2.283 1.618 0 .95 1.16 1.254 2.168 1.483l2.651.59c2.903.646 3.64 2.34 3.64 3.938 0 2.472-1.898 4.319-5.73 4.319m11.1-4.887-.022.127-.04-.241c.021.037.04.076.061.114.124-.674.19-1.364.19-2.054a11.297 11.297 0 0 0-3.32-8.014A11.287 11.287 0 0 0 12.006.583c-.722 0-1.444.067-2.147.202l-.005.001c.04.021.08.04.118.061L9.736.81l.12-.024A6.722 6.722 0 0 0 6.709 0a6.663 6.663 0 0 0-4.744 1.965A6.666 6.666 0 0 0 0 6.71c0 1.14.293 2.26.844 3.252.007-.041.012-.083.02-.123l.041.237C.883 10.04.865 10 .844 9.962a11.402 11.402 0 0 0-.171 1.953c0 1.53.3 3.015.891 4.412a11.285 11.285 0 0 0 2.428 3.602 11.268 11.268 0 0 0 3.603 2.428c1.397.592 2.882.892 4.412.892.665 0 1.332-.061 1.984-.177-.038-.02-.077-.04-.115-.063l.242.043c-.042.008-.084.013-.127.02 1.004.569 2.14.87 3.3.87a6.66 6.66 0 0 0 4.744-1.965A6.66 6.66 0 0 0 24 17.233a6.707 6.707 0 0 0-.85-3.264"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Slack.js
function Slack_extends() {
  Slack_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Slack_extends.apply(this, arguments);
}



var Slack = function Slack(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Slack_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Slack"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#E01E5A",
    d: "M5.048 15.124a2.512 2.512 0 0 1-2.515 2.514A2.512 2.512 0 0 1 .02 15.124a2.512 2.512 0 0 1 2.514-2.514h2.515v2.514zm1.257 0a2.512 2.512 0 0 1 2.514-2.514 2.512 2.512 0 0 1 2.514 2.514v6.286a2.512 2.512 0 0 1-2.514 2.514 2.512 2.512 0 0 1-2.514-2.514v-6.286z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#36C5F0",
    d: "M8.819 5.029a2.512 2.512 0 0 1-2.514-2.515A2.512 2.512 0 0 1 8.819 0a2.512 2.512 0 0 1 2.514 2.514V5.03H8.82zm0 1.276a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514H2.514A2.512 2.512 0 0 1 0 8.82a2.512 2.512 0 0 1 2.514-2.514H8.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#2EB67D",
    d: "M18.895 8.819a2.512 2.512 0 0 1 2.515-2.514 2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514h-2.515V8.82zm-1.257 0a2.512 2.512 0 0 1-2.514 2.514 2.512 2.512 0 0 1-2.515-2.514V2.514A2.512 2.512 0 0 1 15.124 0a2.512 2.512 0 0 1 2.514 2.514V8.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#ECB22E",
    d: "M15.124 18.895a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.515 2.512 2.512 0 0 1-2.514-2.515v-2.514h2.514zm0-1.257a2.512 2.512 0 0 1-2.514-2.514 2.512 2.512 0 0 1 2.514-2.514h6.305a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514h-6.305z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Snapchat.js
function Snapchat_extends() {
  Snapchat_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Snapchat_extends.apply(this, arguments);
}



var Snapchat = function Snapchat(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Snapchat_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Snapchat"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#FFFC00",
    fillRule: "evenodd",
    d: "M12.151 22.532c-.068 0-.133-.003-.182-.005-.04.003-.08.005-.12.005-1.43 0-2.385-.676-3.228-1.272-.604-.427-1.174-.83-1.842-.941a5.947 5.947 0 0 0-.97-.082c-.567 0-1.016.088-1.344.152-.201.039-.375.073-.51.073-.14 0-.311-.031-.383-.275a8.157 8.157 0 0 1-.136-.557c-.098-.447-.169-.72-.336-.746C1.308 18.607.249 18.2.038 17.706A.458.458 0 0 1 0 17.551a.288.288 0 0 1 .241-.3c1.423-.235 2.689-.987 3.762-2.237a8.434 8.434 0 0 0 1.29-2.008c.206-.42.247-.782.122-1.078-.231-.544-.996-.787-1.502-.948a5.405 5.405 0 0 1-.34-.115c-.448-.177-1.186-.551-1.088-1.068.072-.377.57-.64.973-.64.112 0 .211.02.294.06.456.213.865.321 1.217.321.438 0 .65-.167.7-.214a74.562 74.562 0 0 0-.042-.717c-.103-1.636-.231-3.67.29-4.838C7.473.276 10.777.005 11.752.005A249 249 0 0 0 12.236 0c.978 0 4.289.272 5.848 3.767.52 1.168.392 3.205.289 4.842l-.005.078a67.21 67.21 0 0 0-.038.637c.048.044.242.197.635.212.336-.013.722-.12 1.147-.32a.906.906 0 0 1 .375-.074c.15 0 .301.03.428.082l.007.003c.36.128.596.384.601.652.005.25-.181.625-1.097.986a5.552 5.552 0 0 1-.34.116c-.506.16-1.27.403-1.501.947-.126.295-.084.658.123 1.077l.006.014c.064.15 1.605 3.665 5.045 4.231a.288.288 0 0 1 .24.3.462.462 0 0 1-.038.157c-.209.491-1.268.898-3.06 1.175-.169.026-.24.298-.337.743-.04.184-.08.364-.136.553-.053.179-.169.266-.355.266h-.028a2.83 2.83 0 0 1-.51-.065 6.712 6.712 0 0 0-1.345-.142c-.315 0-.64.027-.97.082-.666.11-1.236.513-1.84.94-.844.597-1.8 1.273-3.229 1.273"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Solaris.js
function Solaris_extends() {
  Solaris_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Solaris_extends.apply(this, arguments);
}



var Solaris = function Solaris(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Solaris_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Solaris"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#D47B27",
    fillRule: "evenodd",
    d: "M10.18 4.764c-.872-.309-1.27-1.127-1.27-1.127-.068-.094-.353-.779-.353-.78-.3-.792-.845-1.035-.845-1.035-.671-.394-1.5-.404-1.5-.404.035-.005.493.207.493.207 1.08.515.756 1.744.756 1.744-.07.331-.086.97-.086.97a1.55 1.55 0 0 0 .659 1.312 7.557 7.557 0 0 1 2.147-.887M5.597 8.17c-.836.399-1.696.102-1.696.102-.115-.018-.8-.3-.8-.3-.773-.35-1.33-.136-1.33-.136-.754.196-1.347.775-1.347.775.021-.028.495-.202.495-.202 1.128-.4 1.768.698 1.768.698.184.284.625.747.625.747a1.551 1.551 0 0 0 1.393.462 7.54 7.54 0 0 1 .892-2.146m-.832 5.65c-.31.872-1.127 1.272-1.127 1.272-.095.067-.78.352-.78.352-.793.3-1.035.846-1.035.846-.395.67-.404 1.5-.404 1.5-.005-.036.206-.494.206-.494.515-1.08 1.745-.756 1.745-.756.33.07.969.086.969.086a1.55 1.55 0 0 0 1.312-.658 7.596 7.596 0 0 1-.886-2.148m3.406 4.583c.398.836.102 1.696.102 1.696-.019.115-.301.801-.302.801-.349.772-.134 1.33-.134 1.33.195.754.775 1.347.775 1.347-.029-.022-.203-.496-.203-.496-.4-1.127.699-1.767.699-1.767.283-.185.747-.626.747-.626a1.55 1.55 0 0 0 .461-1.393 7.602 7.602 0 0 1-2.145-.892m5.649.833c.873.309 1.272 1.127 1.272 1.127.068.094.353.78.352.78.3.792.846 1.035.846 1.035.671.395 1.5.404 1.5.404-.035.005-.493-.207-.493-.207-1.08-.515-.757-1.744-.757-1.744.07-.33.086-.97.086-.97a1.55 1.55 0 0 0-.658-1.312 7.587 7.587 0 0 1-2.148.887m4.584-3.406c.835-.399 1.696-.102 1.696-.102.115.018.8.301.8.301.773.35 1.33.135 1.33.135.754-.196 1.347-.775 1.347-.775-.022.029-.495.202-.495.202-1.128.4-1.768-.698-1.768-.698-.185-.284-.625-.747-.625-.747a1.55 1.55 0 0 0-1.394-.462 7.573 7.573 0 0 1-.891 2.146m.832-5.65c.31-.872 1.127-1.272 1.127-1.272.094-.067.78-.353.78-.352.792-.3 1.035-.845 1.035-.845.395-.672.405-1.5.405-1.5.004.035-.208.493-.208.493-.514 1.08-1.744.756-1.744.756-.33-.07-.97-.086-.97-.086a1.551 1.551 0 0 0-1.312.658c.204.335.384.692.536 1.066.147.358.264.72.351 1.082M15.83 5.597c-.398-.836-.103-1.696-.103-1.696.02-.115.302-.801.303-.8.349-.773.134-1.33.134-1.33-.196-.755-.775-1.348-.775-1.348.029.022.203.496.203.496.399 1.127-.7 1.768-.7 1.768-.282.185-.746.625-.746.625a1.55 1.55 0 0 0-.462 1.393 7.562 7.562 0 0 1 2.146.892m-8.243.387c-.925.042-1.602-.565-1.602-.565-.099-.061-.62-.588-.62-.589-.577-.621-1.174-.64-1.174-.64-.77-.113-1.542.19-1.542.19.031-.017.535.007.535.007 1.194.07 1.358 1.33 1.358 1.33.06.333.286.93.286.93a1.55 1.55 0 0 0 1.104.967 7.566 7.566 0 0 1 1.655-1.63m-2.961 4.882c-.624.684-1.533.734-1.533.734-.113.026-.855.023-.855.022C1.391 11.59.956 12 .956 12 .33 12.464 0 13.225 0 13.225c.01-.035.383-.375.383-.375.893-.795 1.9-.02 1.9-.02.278.194.86.457.86.457a1.55 1.55 0 0 0 1.465-.097 7.57 7.57 0 0 1 .018-2.324m1.358 5.547c.042.925-.564 1.603-.564 1.603-.062.098-.59.62-.59.62-.621.576-.64 1.173-.64 1.173-.113.77.19 1.542.19 1.542-.017-.03.007-.535.007-.535.07-1.194 1.33-1.358 1.33-1.358.333-.06.93-.285.93-.285a1.55 1.55 0 0 0 .968-1.105 7.603 7.603 0 0 1-1.631-1.655m4.882 2.962c.684.624.734 1.532.734 1.532.026.113.023.855.023.855-.033.847.376 1.283.376 1.283.465.624 1.226.955 1.226.955-.035-.01-.375-.382-.375-.382-.795-.894-.019-1.901-.019-1.901.193-.278.456-.86.456-.86a1.552 1.552 0 0 0-.097-1.465 7.544 7.544 0 0 1-2.324-.017m5.547-1.358c.925-.043 1.603.564 1.603.564.098.062.62.589.62.589.576.622 1.173.64 1.173.64.77.113 1.542-.19 1.542-.19-.03.017-.535-.006-.535-.006-1.194-.07-1.358-1.33-1.358-1.33-.06-.333-.285-.931-.285-.931a1.55 1.55 0 0 0-1.105-.967 7.55 7.55 0 0 1-1.655 1.63m2.962-4.882c.624-.684 1.532-.734 1.532-.734.114-.026.856-.023.856-.022.846.032 1.282-.377 1.282-.377.624-.465.955-1.225.955-1.225-.01.034-.382.374-.382.374-.894.795-1.901.02-1.901.02-.278-.194-.86-.457-.86-.457a1.55 1.55 0 0 0-1.465.097 7.56 7.56 0 0 1-.017 2.324m-1.358-5.547c-.043-.925.564-1.602.564-1.602.062-.099.589-.621.59-.62.62-.577.64-1.174.64-1.174.112-.77-.191-1.542-.191-1.542.018.031-.006.535-.006.535-.07 1.194-1.33 1.358-1.33 1.358-.333.06-.931.286-.931.286a1.551 1.551 0 0 0-.968 1.104 7.574 7.574 0 0 1 1.632 1.655m-4.883-2.961c-.684-.624-.734-1.533-.734-1.533-.026-.113-.023-.855-.022-.855C12.41 1.39 12 .956 12 .956 11.536.33 10.776 0 10.776 0c.034.01.374.383.374.383.795.894.02 1.9.02 1.9-.193.278-.457.86-.457.86-.345.78.053 1.399.097 1.466a7.526 7.526 0 0 1 2.324.017"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Sort.js
function Sort_extends() {
  Sort_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Sort_extends.apply(this, arguments);
}



var Sort = function Sort(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Sort_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sort"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 3h15M7 9h9m-9 6h15M2 2h2v2H2V2zm0 6h2v2H2V8zm0 6h2v2H2v-2zm0 6h2v2H2v-2zm5 1h9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Soundcloud.js
function Soundcloud_extends() {
  Soundcloud_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Soundcloud_extends.apply(this, arguments);
}



var Soundcloud = function Soundcloud(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Soundcloud_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Soundcloud"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#F66E10",
    fillRule: "evenodd",
    d: "M20.727 11.677c1.674 0 3.03 1.368 3.03 3.055 0 1.688-1.356 3.057-3.03 3.057l-8.4-.005a.368.368 0 0 1-.327-.361v-9.7c.002-.178.063-.27.292-.359A5.377 5.377 0 0 1 14.23 7c2.794 0 5.084 2.16 5.325 4.914a3.01 3.01 0 0 1 1.172-.237zM10.237 18h-.973A.268.268 0 0 1 9 17.73V7.77c0-.148.119-.27.264-.27h.972c.145 0 .264.122.264.27v9.96c0 .148-.119.27-.264.27zm-9-1.503H.263A.267.267 0 0 1 0 16.228v-2.462c0-.148.119-.269.264-.269h.972c.145 0 .264.121.264.27v2.461c0 .148-.119.27-.264.27zm6 1.503h-.973A.261.261 0 0 1 6 17.743v-6.486c0-.141.119-.257.264-.257h.972c.145 0 .264.116.264.257v6.486a.261.261 0 0 1-.264.257zm-3 0h-.973A.258.258 0 0 1 3 17.75v-5c0-.137.119-.25.264-.25h.972c.145 0 .264.113.264.25v5c0 .137-.119.25-.264.25z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Spa.js
function Spa_extends() {
  Spa_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Spa_extends.apply(this, arguments);
}



var Spa = function Spa(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Spa_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Spa"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c1.5 0 4-1 4-5.5S12 6 12 6s-4 6-4 10.5 2.5 5.5 4 5.5zm0 0c-1.5 0-2.953-.22-5-1.5C3 18 2.5 10 2.5 10s4.5.5 6.5 2m3 10c1.5 0 2.953-.22 5-1.5C21 18 21.5 10 21.5 10s-4.5.5-6.5 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Spectrum.js
function Spectrum_extends() {
  Spectrum_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Spectrum_extends.apply(this, arguments);
}



var Spectrum = function Spectrum(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Spectrum_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Spectrum"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#7B2DFB",
    fillRule: "evenodd",
    d: "M22.131 23.399h-9.006c-.795 0-1.506-.62-1.503-1.417.018-4.958-.878-6.584-2.753-8.224-1.969-1.72-5.414-2.055-7.375-2.094a1.508 1.508 0 0 1-1.479-1.507L0 1.533A1.505 1.505 0 0 1 1.431.023c2.95-.133 9.632.183 15.09 4.956 4.434 3.875 6.824 9.541 7.118 16.859a1.507 1.507 0 0 1-1.508 1.56"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Split.js
function Split_extends() {
  Split_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Split_extends.apply(this, arguments);
}



var Split = function Split(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Split_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Split"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 22h22V2H1v20zM12 2v20V2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Splits.js
function Splits_extends() {
  Splits_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Splits_extends.apply(this, arguments);
}



var Splits = function Splits(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Splits_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Splits"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 22h22V2H1v20zM8 2v20V2zm8 0v20V2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Spotify.js
function Spotify_extends() {
  Spotify_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Spotify_extends.apply(this, arguments);
}



var Spotify = function Spotify(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Spotify_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Spotify"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#1ED760",
    fillRule: "evenodd",
    d: "M19.098 10.638C15.23 8.341 8.85 8.13 5.158 9.251a1.122 1.122 0 1 1-.652-2.148C8.745 5.816 15.79 6.064 20.244 8.708a1.122 1.122 0 1 1-1.146 1.93m-.126 3.403a.936.936 0 0 1-1.287.308c-3.225-1.983-8.142-2.557-11.958-1.399a.937.937 0 0 1-1.167-.623.937.937 0 0 1 .624-1.167c4.358-1.322 9.776-.682 13.48 1.594.44.271.578.847.308 1.287m-1.469 3.267a.748.748 0 0 1-1.028.25c-2.818-1.723-6.365-2.112-10.542-1.158a.748.748 0 1 1-.333-1.458c4.571-1.045 8.492-.595 11.655 1.338a.748.748 0 0 1 .248 1.028M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Square.js
function Square_extends() {
  Square_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Square_extends.apply(this, arguments);
}



var Square = function Square(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Square_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Square"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#28C101",
    fillRule: "evenodd",
    d: "M14.444 8.333H9.556c-.675 0-1.223.548-1.223 1.223v4.888c0 .675.548 1.223 1.223 1.223h4.888c.675 0 1.223-.548 1.223-1.223V9.556c0-.675-.548-1.223-1.223-1.223M18.111 22H5.89A3.89 3.89 0 0 1 2 18.111V5.89A3.89 3.89 0 0 1 5.889 2H18.11A3.89 3.89 0 0 1 22 5.889V18.11A3.89 3.89 0 0 1 18.111 22zm0 2A5.89 5.89 0 0 0 24 18.111V5.89A5.89 5.89 0 0 0 18.111 0H5.89A5.89 5.89 0 0 0 0 5.889V18.11A5.89 5.89 0 0 0 5.889 24H18.11z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StackOverflow.js
function StackOverflow_extends() {
  StackOverflow_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StackOverflow_extends.apply(this, arguments);
}



var StackOverflow = function StackOverflow(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StackOverflow_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StackOverflow"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#FE7A15",
    fillRule: "evenodd",
    d: "M11.414.132a1.406 1.406 0 0 1 1.188 0l10.82 5.055a.421.421 0 0 1-.002.764l-10.905 5.017a1.215 1.215 0 0 1-1.016 0L.595 5.951a.42.42 0 0 1-.002-.764L11.413.132zm12.009 11.526a.42.42 0 0 1-.003.764l-10.904 5.017a1.215 1.215 0 0 1-1.016 0L.595 12.422a.42.42 0 0 1-.002-.764l2.235-1.044a1.216 1.216 0 0 1 1.023-.003l7.649 3.52c.322.148.694.148 1.016 0l7.649-3.52a1.22 1.22 0 0 1 1.023.003l2.235 1.044zm0 6.5a.42.42 0 0 1-.003.764l-10.904 5.017a1.215 1.215 0 0 1-1.016 0L.595 18.922a.42.42 0 0 1-.002-.764l2.235-1.044a1.216 1.216 0 0 1 1.023-.003l7.649 3.52c.322.148.694.148 1.016 0l7.649-3.52a1.22 1.22 0 0 1 1.023.003l2.235 1.044z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Stakeholder.js
function Stakeholder_extends() {
  Stakeholder_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Stakeholder_extends.apply(this, arguments);
}



var Stakeholder = function Stakeholder(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Stakeholder_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Stakeholder"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m14 9 4.5 2L23 9V4l-4.5-2L14 4v5zM7 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM1 23v-2c0-4 2.5-6 6-6s6 2 6 6v2H1zM14 4l4.5 2L23 4m-4.5 2v5-5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StarHalf.js
function StarHalf_extends() {
  StarHalf_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StarHalf_extends.apply(this, arguments);
}



var StarHalf = function StarHalf(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StarHalf_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StarHalf"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#000",
    fillOpacity: ".2",
    d: "M12 16.667V2l2.5 7.5H22L16 14l3 8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFC95E",
    d: "M12 16.667 5 22l3-8-6-4.5h7.5L12 2z"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Star.js
function Star_extends() {
  Star_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Star_extends.apply(this, arguments);
}



var Star = function Star(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Star_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Star"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#FFC95E",
    fillRule: "evenodd",
    d: "M12 16.667 5 22l3-8-6-4.5h7.5L12 2l2.5 7.5H22L16 14l3 8z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusCriticalSmall.js
function StatusCriticalSmall_extends() {
  StatusCriticalSmall_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusCriticalSmall_extends.apply(this, arguments);
}



var StatusCriticalSmall = function StatusCriticalSmall(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusCriticalSmall_extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusCriticalSmall"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    d: "M6.712 1.263a1.005 1.005 0 0 0-1.424 0L1.263 5.288a1.005 1.005 0 0 0 0 1.424l4.025 4.025a1.005 1.005 0 0 0 1.424 0l4.025-4.025a1.005 1.005 0 0 0 0-1.424L6.712 1.263z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusCritical.js
function StatusCritical_extends() {
  StatusCritical_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusCritical_extends.apply(this, arguments);
}



var StatusCritical = function StatusCritical(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusCritical_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusCritical"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12.703 2.703a.99.99 0 0 0-1.406 0l-8.594 8.594a.99.99 0 0 0 0 1.406l8.594 8.594a.99.99 0 0 0 1.406 0l8.594-8.594a.99.99 0 0 0 0-1.406l-8.594-8.594zM8.983 14.7 14.7 8.983m-5.717 0L14.7 14.7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusDisabledSmall.js
function StatusDisabledSmall_extends() {
  StatusDisabledSmall_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusDisabledSmall_extends.apply(this, arguments);
}



var StatusDisabledSmall = function StatusDisabledSmall(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusDisabledSmall_extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusDisabledSmall"
  }, props), /*#__PURE__*/react.createElement("rect", {
    width: "10",
    height: "10",
    x: "1",
    y: "1",
    fillRule: "evenodd",
    stroke: "#000",
    rx: "1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusDisabled.js
function StatusDisabled_extends() {
  StatusDisabled_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusDisabled_extends.apply(this, arguments);
}



var StatusDisabled = function StatusDisabled(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusDisabled_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusDisabled"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 3.99C2 2.892 2.898 2 3.99 2h16.02C21.108 2 22 2.898 22 3.99v16.02c0 1.099-.898 1.99-1.99 1.99H3.99A1.995 1.995 0 0 1 2 20.01V3.99zM18 12H6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusGoodSmall.js
function StatusGoodSmall_extends() {
  StatusGoodSmall_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusGoodSmall_extends.apply(this, arguments);
}



var StatusGoodSmall = function StatusGoodSmall(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusGoodSmall_extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusGoodSmall"
  }, props), /*#__PURE__*/react.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "5",
    fillRule: "evenodd",
    stroke: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusGood.js
function StatusGood_extends() {
  StatusGood_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusGood_extends.apply(this, arguments);
}



var StatusGood = function StatusGood(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusGood_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusGood"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM7 12l4 3 5-7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusInfoSmall.js
function StatusInfoSmall_extends() {
  StatusInfoSmall_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusInfoSmall_extends.apply(this, arguments);
}



var StatusInfoSmall = function StatusInfoSmall(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusInfoSmall_extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusInfoSmall"
  }, props), /*#__PURE__*/react.createElement("rect", {
    width: "10",
    height: "10",
    x: "1",
    y: "1",
    fillRule: "evenodd",
    stroke: "#000",
    rx: "1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusInfo.js
function StatusInfo_extends() {
  StatusInfo_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusInfo_extends.apply(this, arguments);
}



var StatusInfo = function StatusInfo(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusInfo_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusInfo"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 3.99C2 2.892 2.898 2 3.99 2h16.02C21.108 2 22 2.898 22 3.99v16.02c0 1.099-.898 1.99-1.99 1.99H3.99A1.995 1.995 0 0 1 2 20.01V3.99zM12 10v8m0-12v2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusPlaceholderSmall.js
function StatusPlaceholderSmall_extends() {
  StatusPlaceholderSmall_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusPlaceholderSmall_extends.apply(this, arguments);
}



var StatusPlaceholderSmall = function StatusPlaceholderSmall(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusPlaceholderSmall_extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusPlaceholderSmall"
  }, props), /*#__PURE__*/react.createElement("rect", {
    width: "10",
    height: "10",
    x: "1",
    y: "1",
    fillRule: "evenodd",
    stroke: "#000",
    rx: "1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusPlaceholder.js
function StatusPlaceholder_extends() {
  StatusPlaceholder_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusPlaceholder_extends.apply(this, arguments);
}



var StatusPlaceholder = function StatusPlaceholder(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusPlaceholder_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusPlaceholder"
  }, props), /*#__PURE__*/react.createElement("rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    rx: "2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusUnknownSmall.js
function StatusUnknownSmall_extends() {
  StatusUnknownSmall_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusUnknownSmall_extends.apply(this, arguments);
}



var StatusUnknownSmall = function StatusUnknownSmall(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusUnknownSmall_extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusUnknownSmall"
  }, props), /*#__PURE__*/react.createElement("rect", {
    width: "10",
    height: "10",
    x: "1",
    y: "1",
    fillRule: "evenodd",
    stroke: "#000",
    rx: "1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusUnknown.js
function StatusUnknown_extends() {
  StatusUnknown_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusUnknown_extends.apply(this, arguments);
}



var StatusUnknown = function StatusUnknown(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusUnknown_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusUnknown"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 3.99C2 2.892 2.898 2 3.99 2h16.02C21.108 2 22 2.898 22 3.99v16.02c0 1.099-.898 1.99-1.99 1.99H3.99A1.995 1.995 0 0 1 2 20.01V3.99zM12 15v-1c0-1 0-1.5 1-2s2-1 2-2.5c0-1-1-2.5-3-2.5s-3 1.264-3 3m3 6v2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusWarningSmall.js
function StatusWarningSmall_extends() {
  StatusWarningSmall_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusWarningSmall_extends.apply(this, arguments);
}



var StatusWarningSmall = function StatusWarningSmall(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusWarningSmall_extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusWarningSmall"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    strokeLinejoin: "round",
    d: "m6 1 5 9H1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StatusWarning.js
function StatusWarning_extends() {
  StatusWarning_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StatusWarning_extends.apply(this, arguments);
}



var StatusWarning = function StatusWarning(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StatusWarning_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StatusWarning"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 3 10 18H2L12 3zm0 6v6m0 1v2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StepsOption.js
function StepsOption_extends() {
  StepsOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StepsOption_extends.apply(this, arguments);
}



var StepsOption = function StepsOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StepsOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StepsOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M24 9h-5v5h-5v5H9v5m-8 0v-7.003c0-.55.313-1.31.703-1.7L15.297 1.703c.388-.388 1.156-.703 1.7-.703H24"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Steps.js
function Steps_extends() {
  Steps_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Steps_extends.apply(this, arguments);
}



var Steps = function Steps(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Steps_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Steps"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 6h-5v5H6v5H1v7h22V1h-7z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StopFill.js
function StopFill_extends() {
  StopFill_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StopFill_extends.apply(this, arguments);
}



var StopFill = function StopFill(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StopFill_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StopFill"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 4h16v16H4V4zm2 2h12v12H6V6zm2 2h8v8H8V8zm2 2h4v4h-4v-4zm1 1h2v2h-2v-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Stop.js
function Stop_extends() {
  Stop_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Stop_extends.apply(this, arguments);
}



var Stop = function Stop(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Stop_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Stop"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 4h16v16H4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Storage.js
function Storage_extends() {
  Storage_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Storage_extends.apply(this, arguments);
}



var Storage = function Storage(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Storage_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Storage"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 5.077S3.667 2 12 2s10 3.077 10 3.077v13.846S20.333 22 12 22 2 18.923 2 18.923V5.077zM2 13s3.333 3 10 3 10-3 10-3M2 7s3.333 3 10 3 10-3 10-3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StreetView.js
function StreetView_extends() {
  StreetView_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StreetView_extends.apply(this, arguments);
}



var StreetView = function StreetView(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StreetView_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StreetView"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-1 18v-6h3v-2c0-3.34-2.76-5.97-6-6-3.21.03-6 2.66-6 6v2h3v6m-5.5 0h17-17z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/StrikeThrough.js
function StrikeThrough_extends() {
  StrikeThrough_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StrikeThrough_extends.apply(this, arguments);
}



var StrikeThrough = function StrikeThrough(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, StrikeThrough_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "StrikeThrough"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M5.77 12.17h12.46v1.09H5.77zm10.93 1.48h-3.81c.59.34 1 .6 1.18.74a3.39 3.39 0 0 1 1 1.07 2.38 2.38 0 0 1 .31 1.14 2.3 2.3 0 0 1-.82 1.76 3.18 3.18 0 0 1-2.22.74 4.7 4.7 0 0 1-2.23-.54 3.77 3.77 0 0 1-1.55-1.36 7.41 7.41 0 0 1-.79-2.46h-.41V20h.41a1.35 1.35 0 0 1 .24-.7.59.59 0 0 1 .44-.17 6.5 6.5 0 0 1 1.39.35 12.63 12.63 0 0 0 1.45.41 7.26 7.26 0 0 0 1.25.1A4.87 4.87 0 0 0 16 18.72a4 4 0 0 0 1.34-3 3.8 3.8 0 0 0-.42-1.72c-.06-.13-.14-.23-.22-.35zm-7.81-2.44c.21.17.49.36.81.57h4.87c-.48-.29-1.07-.62-1.76-1a12.49 12.49 0 0 1-3.33-2.24A1.93 1.93 0 0 1 9 7.26a2.18 2.18 0 0 1 .77-1.63 2.72 2.72 0 0 1 1.93-.71 4.14 4.14 0 0 1 2 .53 3.78 3.78 0 0 1 1.49 1.43 6.6 6.6 0 0 1 .73 2.42h.41V4h-.41a1.39 1.39 0 0 1-.3.7.67.67 0 0 1-.48.17 2.64 2.64 0 0 1-.89-.28A6.45 6.45 0 0 0 11.68 4a4.49 4.49 0 0 0-3.21 1.21A3.75 3.75 0 0 0 7.21 8a3.57 3.57 0 0 0 .43 1.73 4.72 4.72 0 0 0 1.25 1.48z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Stripe.js
function Stripe_extends() {
  Stripe_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Stripe_extends.apply(this, arguments);
}



var Stripe = function Stripe(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Stripe_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Stripe"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#AACBFB",
    fillRule: "evenodd",
    d: "M1 1h22v22H1V1zm10.12 8.19c0-.604.494-.836 1.314-.836 1.174 0 2.658.356 3.833.99V5.71c-1.283-.509-2.55-.71-3.833-.71-3.138 0-5.225 1.639-5.225 4.375 0 4.266 5.874 3.586 5.874 5.425 0 .711-.619.943-1.484.943-1.283 0-2.922-.525-4.22-1.236v3.679c1.437.618 2.89.88 4.22.88 3.215 0 5.426-1.591 5.426-4.358-.016-4.607-5.905-3.788-5.905-5.519z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Subscript.js
function Subscript_extends() {
  Subscript_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Subscript_extends.apply(this, arguments);
}



var Subscript = function Subscript(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Subscript_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Subscript"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "m18.74 3.63.19 4.07h-.49a4.92 4.92 0 0 0-.38-1.54A2.58 2.58 0 0 0 17 5.07a3.68 3.68 0 0 0-1.73-.35h-2.44V18a3.54 3.54 0 0 0 .35 2 1.92 1.92 0 0 0 1.5.54h.6V21H7.92v-.5h.61a1.76 1.76 0 0 0 1.56-.67 3.88 3.88 0 0 0 .29-1.83V4.72H8.29a5.79 5.79 0 0 0-1.73.18 2.37 2.37 0 0 0-1.14.93 3.78 3.78 0 0 0-.56 1.87h-.48l.21-4.07zm3.74 13.05h.33v5.59a1.13 1.13 0 0 0 .06.4.41.41 0 0 0 .17.21.63.63 0 0 0 .28.08h.4v.27h-2.96V23h.45a.62.62 0 0 0 .29-.1.38.38 0 0 0 .15-.22 1.4 1.4 0 0 0 0-.37v-3.89a4.45 4.45 0 0 0 0-.64c0-.15-.1-.23-.24-.23a.82.82 0 0 0-.28 0l-.3.13-.18-.25z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/SubtractCircle.js
function SubtractCircle_extends() {
  SubtractCircle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SubtractCircle_extends.apply(this, arguments);
}



var SubtractCircle = function SubtractCircle(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, SubtractCircle_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "SubtractCircle"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM6 12h12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Subtract.js
function Subtract_extends() {
  Subtract_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Subtract_extends.apply(this, arguments);
}



var Subtract = function Subtract(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Subtract_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Subtract"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 12h20"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Sun.js
function Sun_extends() {
  Sun_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Sun_extends.apply(this, arguments);
}



var Sun = function Sun(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Sun_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sun"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1zM6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm1 12a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm10-8a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM4 13a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h2zm15.778-8.778a1 1 0 0 1 0 1.414L18.364 7.05a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM7.05 18.364a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414zM4.222 4.222a1 1 0 0 1 1.414 0L7.05 5.636A1 1 0 1 1 5.636 7.05L4.222 5.636a1 1 0 0 1 0-1.414zM18.364 16.95a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Superscript.js
function Superscript_extends() {
  Superscript_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Superscript_extends.apply(this, arguments);
}



var Superscript = function Superscript(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Superscript_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Superscript"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "m18.74 3.63.19 4.07h-.49a4.9 4.9 0 0 0-.38-1.54A2.57 2.57 0 0 0 17 5.07a3.68 3.68 0 0 0-1.73-.35h-2.44V18a3.56 3.56 0 0 0 .34 2 1.92 1.92 0 0 0 1.5.54h.6V21H7.92v-.5h.61a1.76 1.76 0 0 0 1.56-.67 3.88 3.88 0 0 0 .29-1.83V4.72H8.29a5.82 5.82 0 0 0-1.73.18 2.37 2.37 0 0 0-1.14.93 3.78 3.78 0 0 0-.56 1.87h-.48l.21-4.07zM22.48 1h.33v5.62a1.13 1.13 0 0 0 .06.4.41.41 0 0 0 .17.21.63.63 0 0 0 .28.08h.4v.29h-2.96v-.27h.45a.62.62 0 0 0 .29-.1.38.38 0 0 0 .15-.23 1.4 1.4 0 0 0 0-.37V2.77a4.45 4.45 0 0 0 0-.64c0-.15-.1-.23-.24-.23a.82.82 0 0 0-.28 0l-.3.13-.18-.25z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Support.js
function Support_extends() {
  Support_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Support_extends.apply(this, arguments);
}



var Support = function Support(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Support_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Support"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.222 19.778c4.296 4.296 11.26 4.296 15.556 0 4.296-4.296 4.296-11.26 0-15.556-4.296-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.26 0 15.556zM6.343 21.9l4.243-4.242m-8.485 0 4.242-4.243m11.314-2.828 4.242-4.243m-8.485 0 4.243-4.242m-9.9 14.142a6 6 0 1 0 8.486-8.486 6 6 0 0 0-8.486 8.486zm-5.656-9.9 4.242 4.243m0-8.485 4.243 4.242m2.828 11.314 4.243 4.242m0-8.485 4.242 4.243"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Suse.js
function Suse_extends() {
  Suse_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Suse_extends.apply(this, arguments);
}



var Suse = function Suse(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Suse_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Suse"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#7AC142",
    fillRule: "evenodd",
    d: "M24 8.285c-1.42-2.294-3.663-3.936-6.087-4.354-2.037-.354-5.752-.391-7.72 3.322-.822 1.55-.771 3.568.13 5.268.919 1.74 2.561 2.859 4.504 3.072 1.928.21 3.376-.236 4.19-1.288.82-1.063.972-2.509.39-3.687-.624-1.265-1.567-1.937-2.875-2.048-.999-.089-1.737.327-2.005.75a1.417 1.417 0 0 0-.218.737c0 .95.867 1.21 1.043 1.222.054-.003.316-.008.662-.095l.168-.056.2-.056a1.234 1.234 0 0 1 1.463 1.21c0 .408-.207.789-.631 1.071-.182.115-.35.179-.525.234a4.356 4.356 0 0 1-1.373.236c-1.505-.002-3.6-1.295-3.626-3.724-.014-1.371.673-2.618 1.885-3.422 1.394-.922 3.803-1.235 6.04.137 2.75 1.682 3.469 4.981 2.75 7.23-1.043 3.258-3.98 5-7.853 4.653-2.745-.244-5.295-1.693-6.812-3.874a9.615 9.615 0 0 1-1.44-3.119c-.62-2.456.006-5.066.472-6.222.8-1.981 1.993-3.813 3.566-5.482H1.001A1 1 0 0 0 0 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8.285z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Swift.js
function Swift_extends() {
  Swift_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Swift_extends.apply(this, arguments);
}



var Swift = function Swift(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Swift_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Swift"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#D15F3E",
    fillRule: "evenodd",
    d: "M18.103 21.018c-2.827 1.633-6.714 1.801-10.625.125-3.166-1.347-5.794-3.705-7.478-6.4.808.674 1.752 1.213 2.762 1.684 4.039 1.893 8.077 1.764 10.918.005l-.004-.005C9.634 13.328 6.198 9.286 3.638 5.985c-.54-.539-.943-1.212-1.348-1.819 3.1 2.83 8.018 6.4 9.769 7.411C8.354 7.67 5.053 2.82 5.187 2.954c5.861 5.928 11.319 9.297 11.319 9.297.18.101.32.186.432.262.118-.3.221-.612.308-.936.944-3.436-.134-7.343-2.492-10.577 5.456 3.301 8.69 9.499 7.343 14.686-.035.14-.074.279-.115.414l.048.058c2.694 3.369 1.953 6.94 1.616 6.266-1.461-2.86-4.167-1.986-5.543-1.406z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Swim.js
function Swim_extends() {
  Swim_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Swim_extends.apply(this, arguments);
}



var Swim = function Swim(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Swim_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Swim"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11 13c.5.5 2.13-.112 3.262-.5 1.46-.5 3.238 0 2.738-.5l-2-2s-4.5 2.5-4 3zm-9 7c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M2 16c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1M17.5 4l-5.278 3 3.278 3.5L12 12m7.222-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Switch.js
function Switch_extends() {
  Switch_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Switch_extends.apply(this, arguments);
}



var Switch = function Switch(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Switch_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Switch"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 1h14v22H5V1zm2.5 10H17v10H7V11h.5zM15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-4 13v-5h2v5h-2zm1-13.998a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Sync.js
function Sync_extends() {
  Sync_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Sync_extends.apply(this, arguments);
}



var Sync = function Sync(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Sync_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Sync"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 19h11a7 7 0 0 0 7-7V9M8 15l-4 4 4 4M19 5H8a7 7 0 0 0-7 7v3M16 1l4 4-4 4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/System.js
function System_extends() {
  System_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return System_extends.apply(this, arguments);
}



var System = function System(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, System_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "System"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 19h22V1H1v18zm4 4h14H5zm3 0h8v-4H8v4zM7.757 5.757l2.122 2.122-2.122-2.122zM9 10H6h3zm.879 2.121-2.122 2.122 2.122-2.122zM12 13v3-3zm2.121-.879 2.122 2.122-2.122-2.122zM18 10h-3 3zm-1.757-4.243-2.122 2.122 2.122-2.122zM12 7V4v3zm0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TableAdd.js
function TableAdd_extends() {
  TableAdd_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TableAdd_extends.apply(this, arguments);
}



var TableAdd = function TableAdd(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TableAdd_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TableAdd"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 5v18m8-18v6M1 11h16M1 5h22M1 17h10m6 6H1V1h22v16m-6 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-9v6m0-6v6m-3-3h6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Table.js
function Table_extends() {
  Table_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Table_extends.apply(this, arguments);
}



var Table = function Table(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Table_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Table"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 5v18m8-18v18M1 11h22M1 5h22M1 17h22M1 1h22v22H1V1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tag.js
function Tag_extends() {
  Tag_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tag_extends.apply(this, arguments);
}



var Tag = function Tag(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tag_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tag"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M11.706 22.294a.992.992 0 0 1-1.41.003l-8.593-8.594a1 1 0 0 1 .003-1.409L13 1h10v10L11.706 22.294zM6 12l6 6M9 9l6 6m2-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TapeOption.js
function TapeOption_extends() {
  TapeOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TapeOption_extends.apply(this, arguments);
}



var TapeOption = function TapeOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TapeOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TapeOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 2h21v20H2V7m10 12a7 7 0 0 1-7-7m7 7a7 7 0 0 0 0-14H1m11 4c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tape.js
function Tape_extends() {
  Tape_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tape_extends.apply(this, arguments);
}



var Tape = function Tape(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tape_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tape"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 2h20v20H2V2zm17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm-7-3c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Target.js
function Target_extends() {
  Target_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Target_extends.apply(this, arguments);
}



var Target = function Target(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Target_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Target"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-5 0c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6 6-2.691 6-6zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Task.js
function Task_extends() {
  Task_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Task_extends.apply(this, arguments);
}



var Task = function Task(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Task_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Task"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 20h12m-12-8h12M12 4h12M1 19l3 3 5-5m-8-6 3 3 5-5m0-8L4 6 1 3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tasks.js
function Tasks_extends() {
  Tasks_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tasks_extends.apply(this, arguments);
}



var Tasks = function Tasks(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tasks_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tasks"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 3h22v4H1V3zm0 7h22v4H1v-4zm0 7h22v4H1v-4zM1 4h15v2H1V4zm0 7h5v2H1v-2zm0 7h10v2H1v-2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Technology.js
function Technology_extends() {
  Technology_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Technology_extends.apply(this, arguments);
}



var Technology = function Technology(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Technology_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Technology"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm.5 6 8-8M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13-13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 21l2-2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Template.js
function Template_extends() {
  Template_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Template_extends.apply(this, arguments);
}



var Template = function Template(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Template_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Template"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 3h22v18H1V3zm0 5h22M7 8v13"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Terminal.js
function Terminal_extends() {
  Terminal_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Terminal_extends.apply(this, arguments);
}



var Terminal = function Terminal(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Terminal_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Terminal"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2 5 6 6-6 6m7 0h14"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TestDesktop.js
function TestDesktop_extends() {
  TestDesktop_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TestDesktop_extends.apply(this, arguments);
}



var TestDesktop = function TestDesktop(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TestDesktop_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TestDesktop"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18.218 1H23v18H1V1h5m11 9c-4-3-6 3-10 0M5 23h14H5zm5-22v4.773l-5 7.182V15h14v-2.045l-5-7.182V1M8 1h8-8zm0 22h8v-4H8v4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Test.js
function Test_extends() {
  Test_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Test_extends.apply(this, arguments);
}



var Test = function Test(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Test_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Test"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 1v7L2 20v3h20v-3L15 8V1m0 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9-7c-7-3-6 4-12 1M6 1h12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TextAlignCenter.js
function TextAlignCenter_extends() {
  TextAlignCenter_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TextAlignCenter_extends.apply(this, arguments);
}



var TextAlignCenter = function TextAlignCenter(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TextAlignCenter_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextAlignCenter"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M.46 3.06h23.08v2.18H.46zM4.1 8.29h15.81v2.18H4.1zM.46 13.53h23.08v2.18H.46zm3.64 5.23h15.81v2.18H4.1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TextAlignFull.js
function TextAlignFull_extends() {
  TextAlignFull_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TextAlignFull_extends.apply(this, arguments);
}



var TextAlignFull = function TextAlignFull(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TextAlignFull_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextAlignFull"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M.46 3.06h23.08v2.18H.46zm0 5.23h23.08v2.18H.46zm0 5.24h23.08v2.18H.46zm0 5.23h15.81v2.18H.46z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TextAlignLeft.js
function TextAlignLeft_extends() {
  TextAlignLeft_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TextAlignLeft_extends.apply(this, arguments);
}



var TextAlignLeft = function TextAlignLeft(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TextAlignLeft_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextAlignLeft"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M.46 3.06h23.08v2.18H.46zm0 5.23h15.81v2.18H.46zm0 5.24h23.08v2.18H.46zm0 5.23h15.81v2.18H.46z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TextAlignRight.js
function TextAlignRight_extends() {
  TextAlignRight_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TextAlignRight_extends.apply(this, arguments);
}



var TextAlignRight = function TextAlignRight(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TextAlignRight_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextAlignRight"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M.46 3.06h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73zM.46 13.53h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TextWrap.js
function TextWrap_extends() {
  TextWrap_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TextWrap_extends.apply(this, arguments);
}



var TextWrap = function TextWrap(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TextWrap_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TextWrap"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 10h7-7zM1 14h13V2H1v12zm5-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m11 0h7-7zm0-4h7-7zm0 12h7-7zM0 18h24H0zm0 4h24H0zm14-8v-1l-4-5-3 3-1-1-4 4h12z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Threats.js
function Threats_extends() {
  Threats_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Threats_extends.apply(this, arguments);
}



var Threats = function Threats(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Threats_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Threats"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M9 23A7 7 0 1 0 9 9a7 7 0 0 0 0 14zM9 6V5c0-3 2-4 4-4s4 1 4 4v3c0 1 0 3 2 3s2-2 2-3c0-2 1-2 2-2m-11 7-6 6m0-6 6 6m-6-9V6h6v4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ThreeDffects.js
function ThreeDffects_extends() {
  ThreeDffects_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ThreeDffects_extends.apply(this, arguments);
}



var ThreeDffects = function ThreeDffects(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ThreeDffects_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ThreeDffects"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M11 3h2l9 3v11l-10 3.5L2 17V6.5L4 6l9 2.5-2 .5-9-2.5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ThreeD.js
function ThreeD_extends() {
  ThreeD_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ThreeD_extends.apply(this, arguments);
}



var ThreeD = function ThreeD(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ThreeD_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ThreeD"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 5.5v13l10 4 10-4v-13l-10-4-10 4zM13 12h5v5M2 5.5l10 4 10-4M6 14s6 6.5 12-2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Ticket.js
function Ticket_extends() {
  Ticket_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Ticket_extends.apply(this, arguments);
}



var Ticket = function Ticket(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Ticket_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ticket"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7 16h10V8H7v8zm13-4c0 2 1 3 3 3v5H1v-5c2 0 3-1 3-3S3 9 1 9V4h22v5c-2 0-3 1-3 3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tictok.js
function Tictok_extends() {
  Tictok_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tictok_extends.apply(this, arguments);
}



var Tictok = function Tictok(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tictok_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tictok"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M22.459 6.846v3.659c-.197 0-.433.04-.669.04a7.295 7.295 0 0 1-4.682-1.732v7.79a6.987 6.987 0 0 1-1.416 4.25 7.02 7.02 0 0 1-5.626 2.832 6.993 6.993 0 0 1-5.941-3.305c1.259 1.18 2.95 1.928 4.8 1.928a6.893 6.893 0 0 0 5.586-2.833c.866-1.18 1.417-2.636 1.417-4.249v-7.83c1.259 1.102 2.872 1.732 4.682 1.732.236 0 .433 0 .669-.04v-2.36c.354.078.669.118 1.023.118h.157z",
    fill: "#FF004F"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M11.05 9.56v4.053a3.28 3.28 0 0 0-.866-.118c-1.732 0-3.148 1.456-3.148 3.226 0 .394.079.748.197 1.102-.787-.59-1.338-1.535-1.338-2.597 0-1.77 1.416-3.226 3.148-3.226.314 0 .59.04.865.118V9.521h.236c.315 0 .63 0 .905.04zm6.648-5.626c-.708-.63-1.22-1.495-1.495-2.4h.945v.551c.078.63.275 1.26.55 1.85z",
    fill: "#FF004F"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M21.318 6.767v2.36c-.197.04-.433.04-.669.04a7.295 7.295 0 0 1-4.682-1.73v7.79a6.986 6.986 0 0 1-1.416 4.248c-1.299 1.732-3.305 2.833-5.587 2.833-1.85 0-3.541-.747-4.8-1.928a7.136 7.136 0 0 1-1.062-3.737c0-3.817 3.03-6.925 6.806-7.043v2.597a3.277 3.277 0 0 0-.865-.118c-1.732 0-3.148 1.455-3.148 3.226 0 1.062.512 2.046 1.338 2.597.433 1.22 1.613 2.124 2.95 2.124 1.732 0 3.148-1.456 3.148-3.226V1.534h2.872c.276.945.787 1.77 1.495 2.4a5.397 5.397 0 0 0 3.62 2.833z",
    fill: "#000"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M9.908 8.184V9.52c-3.777.118-6.806 3.227-6.806 7.043 0 1.377.393 2.636 1.062 3.738A7.122 7.122 0 0 1 2 15.148c0-3.896 3.148-7.043 7.003-7.043.315 0 .63.04.905.079z",
    fill: "#00F7EF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M16.203 1.534h-2.872v15.187c0 1.77-1.416 3.227-3.147 3.227-1.377 0-2.518-.866-2.951-2.125.511.354 1.14.59 1.81.59 1.73 0 3.147-1.416 3.147-3.187V0h3.817v.079c0 .157 0 .314.039.472 0 .315.079.669.157.983zm5.115 3.777v1.417c-1.574-.315-2.911-1.377-3.659-2.794a5.11 5.11 0 0 0 3.659 1.377z",
    fill: "#00F7EF"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Time.js
function Time_extends() {
  Time_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Time_extends.apply(this, arguments);
}



var Time = function Time(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Time_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Time"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M1 13h4l2.5-9 5 16.5L17 9l2 4h4",
    stroke: "#000",
    strokeWidth: "2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tip.js
function Tip_extends() {
  Tip_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tip_extends.apply(this, arguments);
}



var Tip = function Tip(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tip_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tip"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16.007 18H22V2H2v16h6.243l3.882 4 3.882-4z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Toast.js
function Toast_extends() {
  Toast_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Toast_extends.apply(this, arguments);
}



var Toast = function Toast(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Toast_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Toast"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 2a4 4 0 0 0-2 7.465V16h12V9.465A4 4 0 0 0 16 2H8zm3.321 4.874a1.004 1.004 0 0 1 1.38-.37l1.715.991c.483.279.652.889.37 1.38l-.991 1.715a1.004 1.004 0 0 1-1.38.37L10.7 9.968a1.004 1.004 0 0 1-.37-1.379l.991-1.716zM8 18v2m4-2v5m4-5v3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tools.js
function Tools_extends() {
  Tools_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tools_extends.apply(this, arguments);
}



var Tools = function Tools(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tools_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tools"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m11 2 11 11-4.5 4.5-11-11L11 2zm5 4 1-1 2 2-1 1m-5 5-9 9-2-2 9-9m-6 7 1 1"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tooltip.js
function Tooltip_extends() {
  Tooltip_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tooltip_extends.apply(this, arguments);
}



var Tooltip = function Tooltip(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tooltip_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tooltip"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16.5 18 12 22.5 7.5 18H1V1h22v17h-6.5zM6 10h1V9H6v1zm5.5 0h1V9h-1v1zm5.5 0h1V9h-1v1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TopCorner.js
function TopCorner_extends() {
  TopCorner_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TopCorner_extends.apply(this, arguments);
}



var TopCorner = function TopCorner(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TopCorner_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TopCorner"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 4H4v12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Train.js
function Train_extends() {
  Train_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Train_extends.apply(this, arguments);
}



var Train = function Train(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Train_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Train"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 1h14a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm4 1h6M3 5h18M4 23h16M3 12h18M7 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 5v7m-3 8-2 3m8-3 2 3"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Transaction.js
function Transaction_extends() {
  Transaction_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Transaction_extends.apply(this, arguments);
}



var Transaction = function Transaction(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Transaction_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Transaction"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 7h18m-4-5 5 5-5 5m6 5H4m4-5-5 5 5 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Trash.js
function Trash_extends() {
  Trash_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Trash_extends.apply(this, arguments);
}



var Trash = function Trash(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Trash_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Trash"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 5h16v18H4V5zM1 5h22M9 1h6v4H9V1zm0 0h6v4H9V1zm6 8v10M9 9v10"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/TreeOption.js
function TreeOption_extends() {
  TreeOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TreeOption_extends.apply(this, arguments);
}



var TreeOption = function TreeOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, TreeOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "TreeOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m7 13 4.375-7H9l3-4 3 4h-2.375L17 13h-2l4 6.667H5L9 13H7zm5 11v-4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tree.js
function Tree_extends() {
  Tree_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tree_extends.apply(this, arguments);
}



var Tree = function Tree(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tree_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tree"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 1h6v6H4V1zm12 10h4v4h-4v-4zm0 8h4v4h-4v-4zM7 7v14h9m-9-8h9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Trigger.js
function Trigger_extends() {
  Trigger_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Trigger_extends.apply(this, arguments);
}



var Trigger = function Trigger(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Trigger_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Trigger"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4 14h6l-3 9h2L20 9h-6l4-8H7z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Trophy.js
function Trophy_extends() {
  Trophy_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Trophy_extends.apply(this, arguments);
}



var Trophy = function Trophy(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Trophy_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Trophy"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 15a6 6 0 0 1-6-6V1h12v8a6 6 0 0 1-6 6zM6 3H1v4c0 2.509 1.791 4 4 4h1V3zm12 8h1c2.209 0 4-1.491 4-4V3h-5v8zM5 23h14v-4H5v4zm11-4a4 4 0 1 0-8 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Troubleshoot.js
function Troubleshoot_extends() {
  Troubleshoot_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Troubleshoot_extends.apply(this, arguments);
}



var Troubleshoot = function Troubleshoot(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Troubleshoot_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Troubleshoot"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 5c0-2 1-4 2-4l2 4h2l2-4c1 0 2 2 2 4 0 2.254-1 4-3 5v11c0 1 0 2-2 2s-2-1-2-2V10C2 9 1 7.254 1 5zm18 7v6m-2 0 1 5h2l1-5h-4zm-3-6h10-10zm7 0V3a2 2 0 1 0-4 0v9"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tty.js
function Tty_extends() {
  Tty_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tty_extends.apply(this, arguments);
}



var Tty = function Tty(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tty_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tty"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M7 19h10a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H7h0a1 1 0 0 1-1-1h0a1 1 0 0 1 1-1zm0-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Tumblr.js
function Tumblr_extends() {
  Tumblr_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tumblr_extends.apply(this, arguments);
}



var Tumblr = function Tumblr(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Tumblr_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tumblr"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#35465C",
    fillRule: "evenodd",
    d: "M17.639 19.17c-.446.212-1.3.398-1.937.415-1.92.05-2.293-1.35-2.31-2.367v-7.47h4.82V6.114H13.41V0H9.894c-.057 0-.158.051-.172.18C9.516 2.051 8.64 5.335 5 6.647v3.1h2.428v7.842c0 2.685 1.981 6.499 7.21 6.41 1.763-.031 3.722-.77 4.155-1.406L17.64 19.17z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Turbolinux.js
function Turbolinux_extends() {
  Turbolinux_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Turbolinux_extends.apply(this, arguments);
}



var Turbolinux = function Turbolinux(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Turbolinux_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Turbolinux"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#528DC4",
    fillRule: "evenodd",
    d: "m9.419 6.222.547 1.23h-3.35L6 6.223h3.419zm3.692 5.949L7.094 0l7.042 4.17.41 1.984h3.351l-.752 2.051h-2.188l1.778 8.274-4.171-2.052L14.684 24 8.187 10.803l4.923 1.368z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Twitter.js
function Twitter_extends() {
  Twitter_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Twitter_extends.apply(this, arguments);
}



var Twitter = function Twitter(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Twitter_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Twitter"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#1DA1F2",
    fillRule: "evenodd",
    d: "M24 4.309a9.83 9.83 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.196 4.925 4.925 0 0 0-8.39 4.49A13.974 13.974 0 0 1 1.671 2.9a4.902 4.902 0 0 0-.667 2.476c0 1.708.869 3.216 2.191 4.099A4.936 4.936 0 0 1 .964 8.86v.06a4.926 4.926 0 0 0 3.95 4.829 4.964 4.964 0 0 1-2.224.085 4.93 4.93 0 0 0 4.6 3.42 9.886 9.886 0 0 1-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.309"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Ubuntu.js
function Ubuntu_extends() {
  Ubuntu_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Ubuntu_extends.apply(this, arguments);
}



var Ubuntu = function Ubuntu(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Ubuntu_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Ubuntu"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#DD4814",
    fillRule: "evenodd",
    d: "M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12S5.372 0 12 0c6.627 0 12 5.373 12 12zM3.84 10.398a1.602 1.602 0 1 0 0 3.204 1.602 1.602 0 0 0 0-3.204zm11.44 7.282a1.601 1.601 0 1 0 1.6 2.774 1.601 1.601 0 0 0-1.6-2.774zM7.32 12c0-1.583.787-2.982 1.99-3.829L8.14 6.21a6.972 6.972 0 0 0-2.878 4.046c.506.413.829 1.041.829 1.745 0 .704-.323 1.332-.83 1.745A6.97 6.97 0 0 0 8.14 17.79l1.171-1.962A4.672 4.672 0 0 1 7.32 12zM12 7.32a4.68 4.68 0 0 1 4.66 4.265l2.284-.033a6.938 6.938 0 0 0-2.068-4.515c-.61.23-1.313.195-1.92-.156a2.244 2.244 0 0 1-1.097-1.588 6.96 6.96 0 0 0-4.943.468l1.113 1.994A4.66 4.66 0 0 1 12 7.32zm0 9.36a4.66 4.66 0 0 1-1.971-.435l-1.114 1.994a6.961 6.961 0 0 0 4.944.467 2.245 2.245 0 0 1 1.096-1.587 2.245 2.245 0 0 1 1.921-.156 6.938 6.938 0 0 0 2.068-4.515l-2.283-.033A4.679 4.679 0 0 1 12 16.68zm3.279-10.36a1.601 1.601 0 1 0 1.602-2.773A1.601 1.601 0 0 0 15.28 6.32z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Underline.js
function Underline_extends() {
  Underline_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Underline_extends.apply(this, arguments);
}



var Underline = function Underline(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Underline_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Underline"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M14.41 4.53v-.35h4.66v.36h-.49a1.34 1.34 0 0 0-1.19.65 3 3 0 0 0-.2 1.4v5.33a9.45 9.45 0 0 1-.41 3.08 3.85 3.85 0 0 1-1.54 1.87 5.49 5.49 0 0 1-3.13.78 5.89 5.89 0 0 1-3.27-.75 4 4 0 0 1-1.58-2A11.14 11.14 0 0 1 7 11.64V6.5a2.58 2.58 0 0 0-.33-1.59 1.38 1.38 0 0 0-1.08-.38H5v-.35h5.68v.36h-.5A1.3 1.3 0 0 0 9.06 5a2.87 2.87 0 0 0-.25 1.5v5.73A12.52 12.52 0 0 0 9 14a3.71 3.71 0 0 0 .51 1.54 2.77 2.77 0 0 0 1.06.91 3.68 3.68 0 0 0 1.7.36 4.69 4.69 0 0 0 2.31-.56 3 3 0 0 0 1.39-1.44 8.33 8.33 0 0 0 .37-3V6.5A2.72 2.72 0 0 0 16 5a1.43 1.43 0 0 0-1.12-.43zM4.93 20v-1H19v1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Undo.js
function Undo_extends() {
  Undo_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Undo_extends.apply(this, arguments);
}



var Undo = function Undo(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Undo_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Undo"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M7.18 4 8.6 5.44 6.06 8h9.71a6 6 0 0 1 0 12h-2v-2h2a4 4 0 0 0 0-8H6.06l2.54 2.51-1.42 1.41L2.23 9z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Unlink.js
function Unlink_extends() {
  Unlink_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Unlink_extends.apply(this, arguments);
}



var Unlink = function Unlink(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Unlink_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Unlink"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m17 11 4.586 4.586a1.998 1.998 0 0 1 0 2.828l-3.172 3.172a1.998 1.998 0 0 1-2.828 0L11 17m6-9h4m-5-1V3M8 21v-4m-5-1h4m0-3L2.414 8.414a1.998 1.998 0 0 1 0-2.828l3.172-3.172a1.998 1.998 0 0 1 2.828 0L13 7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Unlock.js
function Unlock_extends() {
  Unlock_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Unlock_extends.apply(this, arguments);
}



var Unlock = function Unlock(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Unlock_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Unlock"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M23 23V11H9v12h14zm-9-6h4m-7-6V7c0-3 0-6-5-6S1 4 1 7v4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UnorderedList.js
function UnorderedList_extends() {
  UnorderedList_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UnorderedList_extends.apply(this, arguments);
}



var UnorderedList = function UnorderedList(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UnorderedList_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UnorderedList"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M5.94 6.42H24v1.75H5.94zm0 5.29H24v1.75H5.94zm0 5.28H24v1.75H5.94z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "1.85",
    cy: "7.29",
    r: "1.52"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "1.85",
    cy: "12.58",
    r: "1.52"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: "1.85",
    cy: "17.87",
    r: "1.52"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Unsorted.js
function Unsorted_extends() {
  Unsorted_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Unsorted_extends.apply(this, arguments);
}



var Unsorted = function Unsorted(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Unsorted_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Unsorted"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m15.204 15.321 1.597-1.597.707.707-2.45 2.45-.354.354-.353-.353-2.45-2.45.707-.708 1.596 1.597V7.217h1v8.104zm-5.9-6.407v8.104h1V8.914l1.597 1.597.707-.707-2.45-2.45L9.803 7l-.354.354L7 9.804l.707.707 1.597-1.597z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Up.js
function Up_extends() {
  Up_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Up_extends.apply(this, arguments);
}



var Up = function Up(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Up_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Up"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m2 15.999 10.173-9.824 9.824 10.173"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Update.js
function Update_extends() {
  Update_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Update_extends.apply(this, arguments);
}



var Update = function Update(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Update_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Update"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1.75 16.002C3.353 20.098 7.338 23 12 23c6.075 0 11-4.925 11-11m-.75-4.002C20.649 3.901 16.663 1 12 1 5.925 1 1 5.925 1 12m8 4H1v8M23 0v8h-8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Upgrade.js
function Upgrade_extends() {
  Upgrade_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Upgrade_extends.apply(this, arguments);
}



var Upgrade = function Upgrade(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Upgrade_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Upgrade"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 18V8v10zm0 5c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5-11-5-5-5 5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UploadOption.js
function UploadOption_extends() {
  UploadOption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UploadOption_extends.apply(this, arguments);
}



var UploadOption = function UploadOption(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UploadOption_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UploadOption"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-6.414.707.707 5 5-1.414 1.414L13 9.414V18h-2V9.414l-3.293 3.293-1.414-1.414 5-5L12 5.586z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Upload.js
function Upload_extends() {
  Upload_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Upload_extends.apply(this, arguments);
}



var Upload = function Upload(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Upload_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Upload"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 17v6h22v-6M12 2v17M5 9l7-7 7 7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UsbKey.js
function UsbKey_extends() {
  UsbKey_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UsbKey_extends.apply(this, arguments);
}



var UsbKey = function UsbKey(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UsbKey_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UsbKey"
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h14v-1h7V7h-7V6H3zm14 3v5h5V9h-5zm-2 6V8H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12zm4-3.992h1.01v-1.01H19v1.01zm.51 2h-.5v-1.01h1.01v1.01h-.51z",
    fill: "#000"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserAdd.js
function UserAdd_extends() {
  UserAdd_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserAdd_extends.apply(this, arguments);
}



var UserAdd = function UserAdd(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserAdd_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserAdd"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M5 24v-5m6 5v-5M1 24v-6c0-4.97 3.134-7 7-7s7 2 7 7v6M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm8 0h8m-4-4v8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserAdmin.js
function UserAdmin_extends() {
  UserAdmin_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserAdmin_extends.apply(this, arguments);
}



var UserAdmin = function UserAdmin(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserAdmin_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserAdmin"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h7m2-3.5a2.5 2.5 0 1 0 5.002-.002A2.5 2.5 0 0 0 10 19.5zM23 15l-3-3-6 6m3.5-3.5 3 3-3-3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserExpert.js
function UserExpert_extends() {
  UserExpert_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserExpert_extends.apply(this, arguments);
}



var UserExpert = function UserExpert(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserExpert_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserExpert"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm6.643 4.696a6.745 6.745 0 0 0-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22 23 13"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserFemale.js
function UserFemale_extends() {
  UserFemale_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserFemale_extends.apply(this, arguments);
}



var UserFemale = function UserFemale(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserFemale_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserFemale"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 24v-5c0-4-4.06-5-5-5 3.948 0 5-2 5-2s-3.057-1.969-3-6c-.057-3-2.15-5-5-5-2.988 0-5.081 2-5 5-.081 3.969-3 6-3 6s.914 2 5 2c-1.079 0-5 1-5 5v5m12-5v5m-8-5v5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserManager.js
function UserManager_extends() {
  UserManager_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserManager_extends.apply(this, arguments);
}



var UserManager = function UserManager(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserManager_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserManager"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 12c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 1a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm6-6c-1.5 0-3 .36-5-2-2 2.36-4.5 3-7 2m1 6 5.025 5.257L17 13m-5 5v5"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserNew.js
function UserNew_extends() {
  UserNew_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserNew_extends.apply(this, arguments);
}



var UserNew = function UserNew(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserNew_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserNew"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 24V12m5 10-10-7m10 0-10 7M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserPolice.js
function UserPolice_extends() {
  UserPolice_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserPolice_extends.apply(this, arguments);
}



var UserPolice = function UserPolice(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserPolice_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserPolice"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16 14c2.374 1.183 4 3.65 4 7v2H4v-2c0-3.354 1.631-5.825 4-7m4 1c3.26 0 5.903-2.686 5.903-5.999 0-.702.218-1.375 0-2.001M6.093 7c-.21.615 0 1.313 0 2.001C6.093 12.314 8.738 15 12 15M6 8h12l3-4c-1.912-1.735-5.21-3-9-3-3.836 0-7.168 1.296-9 3l3 4zm6-3a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserSettings.js
function UserSettings_extends() {
  UserSettings_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserSettings_extends.apply(this, arguments);
}



var UserSettings = function UserSettings(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserSettings_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserSettings"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 21c-1.655 0-3-1.346-3-3s1.345-3 3-3c1.654 0 3 1.346 3 3s-1.346 3-3 3zm6-3h-3 3zm-3.879 2.122 2.121 2.12-2.12-2.12zM18.001 24v-3 3zm-4.244-1.757 2.121-2.122-2.12 2.122zM12 18h3-3zm3.878-2.121-2.12-2.121 2.12 2.12zm2.122-.88v-3 3zm2.121.88 2.121-2.121-2.12 2.12zM12.5 12.5C11.266 11.446 9.775 11 8 11c-3.866 0-7 2.03-7 7v5h10M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/UserWorker.js
function UserWorker_extends() {
  UserWorker_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return UserWorker_extends.apply(this, arguments);
}



var UserWorker = function UserWorker(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, UserWorker_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "UserWorker"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 6h18H3zm7-4v2m4-2v2m2 8c2.374 1.183 4 3.65 4 7v4H4v-4c0-3.354 1.631-5.825 4-7m4 4.5V23m0-10a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-4-1a4 4 0 1 0 8 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/User.js
function User_extends() {
  User_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return User_extends.apply(this, arguments);
}



var User = function User(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, User_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "User"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M8 24v-5m8 5v-5M3 24v-5c0-4.97 4.03-8 9-8s9 3.03 9 8v5m-9-13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Validate.js
function Validate_extends() {
  Validate_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Validate_extends.apply(this, arguments);
}



var Validate = function Validate(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Validate_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Validate"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M20 15c-1 1 1.25 3.75 0 5s-4-1-5 0-1.5 3-3 3-2-2-3-3-3.75 1.25-5 0 1-4 0-5-3-1.5-3-3 2-2 3-3-1.25-3.75 0-5 4 1 5 0 1.5-3 3-3 2 2 3 3 3.75-1.25 5 0-1 4 0 5 3 1.5 3 3-2 2-3 3zM7 12l3 3 7-7"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Vend.js
function Vend_extends() {
  Vend_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Vend_extends.apply(this, arguments);
}



var Vend = function Vend(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Vend_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Vend"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 2.002A.998.998 0 0 1 3.993 1h16.014c.548 0 .993.44.993 1.002V23H3V2.002zM15 1v22M3 16h12m-7 1h2m-3-1v-4m0-3V5m4 11v-4m0-3V5m6 7h1m-1-3h2m-2 11h2M3 9h12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Video.js
function Video_extends() {
  Video_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Video_extends.apply(this, arguments);
}



var Video = function Video(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Video_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Video"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m15 9 8-4v14l-8-4V9zM1 5h14v14H1V5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/View.js
function View_extends() {
  View_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return View_extends.apply(this, arguments);
}



var View = function View(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, View_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "View"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 21c-5 0-11-5-11-9s6-9 11-9 11 5 11 9-6 9-11 9zm0-14a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Vimeo.js
function Vimeo_extends() {
  Vimeo_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Vimeo_extends.apply(this, arguments);
}



var Vimeo = function Vimeo(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Vimeo_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Vimeo"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#1AB7EA",
    fillRule: "evenodd",
    d: "M23.988 6.802c-.107 2.336-1.738 5.534-4.894 9.595-3.264 4.24-6.024 6.36-8.282 6.36-1.4 0-2.584-1.29-3.55-3.873-.646-2.368-1.291-4.736-1.938-7.103-.718-2.582-1.488-3.874-2.312-3.874-.18 0-.808.378-1.884 1.13L0 7.583c1.184-1.04 2.352-2.08 3.502-3.123 1.58-1.364 2.767-2.082 3.556-2.155 1.868-.18 3.018 1.097 3.449 3.83.466 2.948.79 4.782.97 5.5.54 2.446 1.132 3.668 1.779 3.668.501 0 1.257-.794 2.262-2.382 1.005-1.586 1.544-2.793 1.616-3.623.144-1.369-.395-2.055-1.616-2.055-.574 0-1.167.132-1.776.393 1.18-3.862 3.433-5.738 6.76-5.632 2.466.073 3.629 1.672 3.486 4.798"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/VirtualMachine.js
function VirtualMachine_extends() {
  VirtualMachine_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return VirtualMachine_extends.apply(this, arguments);
}



var VirtualMachine = function VirtualMachine(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, VirtualMachine_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "VirtualMachine"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 23h13V10H1v13zm9-4h13V6H10v13zm-5-5h13V1H5v13z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/VirtualStorage.js
function VirtualStorage_extends() {
  VirtualStorage_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return VirtualStorage_extends.apply(this, arguments);
}



var VirtualStorage = function VirtualStorage(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, VirtualStorage_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "VirtualStorage"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5zm0-4.5c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5zm0-5.5c4.97 0 9-2.239 9-5s-4.03-5-9-5-9 2.239-9 5 4.03 5 9 5z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Visa.js
function Visa_extends() {
  Visa_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Visa_extends.apply(this, arguments);
}



var Visa = function Visa(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Visa_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Visa"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#1A1F71",
    fillRule: "evenodd",
    d: "M5.756 6.342C4.344 5.56 2.733 4.93.931 4.494l.059-.35h7.407c.997.036 1.804.355 2.082 1.422l1.61 7.743v.001l.48 2.335 4.497-11.491h4.865L14.7 20.974l-4.86.005L5.756 6.342z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/VmMaintenance.js
function VmMaintenance_extends() {
  VmMaintenance_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return VmMaintenance_extends.apply(this, arguments);
}



var VmMaintenance = function VmMaintenance(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, VmMaintenance_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "VmMaintenance"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 10V2H7v12h7V7H2v12h8m4 4 6-6m1-3a2 2 0 1 0 2 2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Vmware.js
function Vmware_extends() {
  Vmware_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Vmware_extends.apply(this, arguments);
}



var Vmware = function Vmware(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Vmware_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Vmware"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#879AC3",
    fillRule: "evenodd",
    d: "M5.574 0c-.959 0-1.728.754-1.728 1.68v5.744H1.728C.77 7.424 0 8.18 0 9.104v12.438c0 .926.77 1.68 1.728 1.68H14.58c.96 0 1.753-.754 1.753-1.68v-2.045h5.939c.958 0 1.728-.757 1.728-1.68V5.38c0-.924-.77-1.655-1.728-1.655h-2.118V1.68c0-.926-.771-1.68-1.728-1.68H5.574zm0 .95h12.852c.42 0 .755.323.755.73v2.044H9.42c-.957 0-1.753.731-1.753 1.655v2.045H4.82V1.68c0-.407.332-.73.755-.73zm3.846 3.7h9.76v9.443a.759.759 0 0 1-.754.755h-2.093V9.103c0-.923-.794-1.68-1.753-1.68H8.641V5.38c0-.406.36-.73.779-.73zm10.734 0h2.118c.42 0 .754.323.754.73v12.437c0 .406-.334.73-.754.73h-5.94v-2.75h2.094c.957 0 1.728-.778 1.728-1.704V4.65zM1.728 8.372h2.118v5.72c0 .926.769 1.704 1.728 1.704h2.093v2.02c0 .923.796 1.68 1.753 1.68h5.939v2.045c0 .406-.356.73-.779.73H1.728a.735.735 0 0 1-.754-.73V9.103c0-.405.329-.73.754-.73zm3.091 0h2.848v6.475H5.574a.757.757 0 0 1-.755-.755v-5.72zm3.822 0h5.94c.422 0 .778.325.778.73v5.745H8.641V8.373zm0 7.424h6.718v2.75h-5.94c-.419 0-.778-.324-.778-.73v-2.02z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/VolumeControl.js
function VolumeControl_extends() {
  VolumeControl_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return VolumeControl_extends.apply(this, arguments);
}



var VolumeControl = function VolumeControl(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, VolumeControl_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "VolumeControl"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8 8l3 3m1 11a9.99 9.99 0 0 0 8.307-4.43A9.953 9.953 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/VolumeLow.js
function VolumeLow_extends() {
  VolumeLow_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return VolumeLow_extends.apply(this, arguments);
}



var VolumeLow = function VolumeLow(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, VolumeLow_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "VolumeLow"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 8v8h5.099L12 21V3L6 8H1zm14 8a4 4 0 1 0 0-8"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/VolumeMute.js
function VolumeMute_extends() {
  VolumeMute_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return VolumeMute_extends.apply(this, arguments);
}



var VolumeMute = function VolumeMute(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, VolumeMute_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "VolumeMute"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 8v8h5.099L12 21V3L6 8H1zm14 1 6 6m0-6-6 6"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Volume.js
function Volume_extends() {
  Volume_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Volume_extends.apply(this, arguments);
}



var Volume = function Volume(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Volume_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Volume"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M15 16a4 4 0 0 0 0-8m0 12c5 0 8-3.589 8-8s-3.589-8-8-8M1 12V8h5l6-5v18l-6-5H1v-4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Vulnerability.js
function Vulnerability_extends() {
  Vulnerability_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Vulnerability_extends.apply(this, arguments);
}



var Vulnerability = function Vulnerability(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Vulnerability_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Vulnerability"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 0v24V0zM0 12h24H0zm17 0c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5zm-5 9c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Waypoint.js
function Waypoint_extends() {
  Waypoint_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Waypoint_extends.apply(this, arguments);
}



var Waypoint = function Waypoint(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Waypoint_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Waypoint"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m3 11 8 2 2 8 8-18z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Webcam.js
function Webcam_extends() {
  Webcam_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Webcam_extends.apply(this, arguments);
}



var Webcam = function Webcam(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Webcam_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Webcam"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M20 22H4",
    stroke: "#000",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15.5 18v3m-7.5.5V18",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    clipRule: "evenodd",
    d: "M12 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    clipRule: "evenodd",
    d: "M12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    clipRule: "evenodd",
    d: "M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    stroke: "#000",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    clipRule: "evenodd",
    d: "M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    stroke: "#000",
    strokeWidth: "2"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/WheelchairActive.js
function WheelchairActive_extends() {
  WheelchairActive_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return WheelchairActive_extends.apply(this, arguments);
}



var WheelchairActive = function WheelchairActive(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, WheelchairActive_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "WheelchairActive"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m7 6 3-3 7 3v2l-3 3M9 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-5 5 3-2 6m2-17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 6 4-4m-6 4 4-4"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Wheelchair.js
function Wheelchair_extends() {
  Wheelchair_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Wheelchair_extends.apply(this, arguments);
}



var Wheelchair = function Wheelchair(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Wheelchair_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Wheelchair"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 3v9h7l2 6h2m-6-9H9a6 6 0 1 0 6 6M11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/WifiLow.js
function WifiLow_extends() {
  WifiLow_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return WifiLow_extends.apply(this, arguments);
}



var WifiLow = function WifiLow(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, WifiLow_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "WifiLow"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#000",
    strokeWidth: "2"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0"
  }), /*#__PURE__*/react.createElement("path", {
    strokeOpacity: ".2",
    d: "M4.929 10.929c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0",
    opacity: ".8"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/WifiMedium.js
function WifiMedium_extends() {
  WifiMedium_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return WifiMedium_extends.apply(this, arguments);
}



var WifiMedium = function WifiMedium(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, WifiMedium_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "WifiMedium"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0"
  }), /*#__PURE__*/react.createElement("path", {
    strokeOpacity: ".2",
    d: "M2.1 8.1c5.468-5.467 14.332-5.467 19.8 0",
    opacity: ".8"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/WifiNone.js
function WifiNone_extends() {
  WifiNone_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return WifiNone_extends.apply(this, arguments);
}



var WifiNone = function WifiNone(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, WifiNone_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "WifiNone"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/react.createElement("path", {
    strokeOpacity: ".2",
    d: "M7.757 13.757a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0",
    opacity: ".8"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Wifi.js
function Wifi_extends() {
  Wifi_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Wifi_extends.apply(this, arguments);
}



var Wifi = function Wifi(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Wifi_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Wifi"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4.243-6.243a6 6 0 0 1 8.486 0M4.929 10.93c3.905-3.905 10.237-3.905 14.142 0M2.101 8.1c5.467-5.468 14.331-5.468 19.798 0"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/WindowsLegacy.js
function WindowsLegacy_extends() {
  WindowsLegacy_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return WindowsLegacy_extends.apply(this, arguments);
}



var WindowsLegacy = function WindowsLegacy(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, WindowsLegacy_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "WindowsLegacy"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F35325",
    d: "m2.613 10.096.282-.985c.666-2.301 1.332-4.603 1.996-6.904.026-.09.054-.164.157-.205 1.15-.461 2.327-.825 3.565-.959 1.666-.18 3.195.21 4.607 1.094.184.115.362.24.55.347.12.069.136.142.098.272-.553 1.897-1.1 3.795-1.648 5.694-.192.661-.388 1.322-.574 1.986-.04.148-.075.173-.211.08-.814-.553-1.672-1.017-2.633-1.263-1.212-.312-2.423-.25-3.632.015-.862.19-1.692.474-2.557.828"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#81BC06",
    d: "M17.277 13.025c-1.529.01-2.878-.526-4.134-1.351-.355-.234-.354-.232-.238-.635.712-2.458 1.421-4.918 2.134-7.376.07-.241.019-.285.29-.104.895.6 1.839 1.094 2.908 1.31 1.128.228 2.248.15 3.362-.099.7-.157 1.38-.377 2.048-.635.096-.036.195-.098.294-.007.097.09.052.19.022.293-.713 2.465-1.426 4.93-2.134 7.397-.033.115-.093.171-.2.214-1.162.465-2.351.831-3.604.95-.248.025-.498.03-.748.043"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFBA08",
    d: "m21.377 13.352-.442 1.533c-.602 2.08-1.206 4.162-1.801 6.245a.437.437 0 0 1-.298.32c-1.026.395-2.069.72-3.163.874-1.693.238-3.268-.082-4.73-.963-.242-.146-.475-.306-.72-.45-.12-.07-.13-.144-.093-.272.523-1.796 1.04-3.594 1.56-5.392l.635-2.194c.067-.23.068-.23.28-.09.76.501 1.551.936 2.434 1.186 1.273.36 2.547.3 3.822.018.849-.187 1.668-.472 2.516-.815"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#05A6F0",
    d: "m11.179 12.047-.366 1.261c-.623 2.156-1.249 4.312-1.866 6.47-.054.185-.103.19-.253.088-.857-.585-1.764-1.065-2.787-1.298-1.157-.264-2.309-.193-3.458.059-.72.157-1.418.384-2.106.649-.09.034-.183.085-.277.008-.105-.086-.06-.191-.03-.291l2.132-7.377a.282.282 0 0 1 .185-.203c1.18-.475 2.389-.844 3.663-.962 1.571-.144 3.026.212 4.372 1.029.23.14.457.285.684.43.058.038.138.07.107.137"
  })));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Windows.js
function Windows_extends() {
  Windows_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Windows_extends.apply(this, arguments);
}



var Windows = function Windows(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Windows_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Windows"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#001589",
    fillRule: "evenodd",
    d: "M23.923 0 10.959 1.893v9.588l12.964-.102V0zM0 3.398l.009 8.155 9.773-.055-.004-9.432L0 3.398zm.008 17.283 9.773 1.344-.008-9.44-9.766-.063.001 8.159zm10.951 1.49L23.923 24l.004-11.326-12.986-.022.018 9.519z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Wordpress.js
function Wordpress_extends() {
  Wordpress_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Wordpress_extends.apply(this, arguments);
}



var Wordpress = function Wordpress(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Wordpress_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Wordpress"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#21759B",
    fillRule: "evenodd",
    d: "M0 12a12 12 0 0 0 6.763 10.799L1.039 7.116A11.958 11.958 0 0 0 0 11.999m20.1-.605c0-1.483-.533-2.51-.99-3.309-.607-.99-1.178-1.826-1.178-2.815 0-1.103.836-2.13 2.015-2.13.053 0 .104.007.155.01A11.954 11.954 0 0 0 12 0C7.807 0 4.12 2.151 1.973 5.408c.282.01.548.014.773.014 1.255 0 3.198-.152 3.198-.152.646-.038.723.913.076.989 0 0-.65.076-1.373.114l4.37 12.998 2.626-7.876-1.869-5.121a22.087 22.087 0 0 1-1.26-.115c-.646-.038-.57-1.027.077-.989 0 0 1.982.153 3.16.153 1.256 0 3.199-.153 3.199-.153.647-.038.723.913.076.989 0 0-.65.076-1.373.114l4.337 12.899 1.197-3.999c.518-1.66.913-2.852.913-3.879m-7.89 1.655L8.61 23.51a11.988 11.988 0 0 0 7.374-.192 1.14 1.14 0 0 1-.085-.165L12.21 13.05zm10.32-6.807c.051.383.08.792.08 1.234 0 1.217-.228 2.586-.912 4.298l-3.666 10.597A11.993 11.993 0 0 0 24 12c0-2.086-.533-4.047-1.47-5.757"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Workshop.js
function Workshop_extends() {
  Workshop_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Workshop_extends.apply(this, arguments);
}



var Workshop = function Workshop(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Workshop_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Workshop"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4V1zM6.5 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Yoga.js
function Yoga_extends() {
  Yoga_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Yoga_extends.apply(this, arguments);
}



var Yoga = function Yoga(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Yoga_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Yoga"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 11-1 3 1 3h-1.5L9 14l.5-4.5L12 11zm1-9L9 6v8l1 3H6l-3 5m17.5 0-5-3.5L12 17l-1-3 1-3 3.5 2v5.5M14 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 2L10 17v-3.5l1-3z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Youtube.js
function Youtube_extends() {
  Youtube_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Youtube_extends.apply(this, arguments);
}



var Youtube = function Youtube(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Youtube_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Youtube"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "#CD201F",
    fillRule: "evenodd",
    d: "M9.522 15.553V8.81l6.484 3.383-6.484 3.36zM23.76 7.641s-.235-1.654-.954-2.382c-.913-.956-1.936-.96-2.405-1.016C17.043 4 12.005 4 12.005 4h-.01s-5.038 0-8.396.243c-.47.055-1.492.06-2.406 1.016C.474 5.987.24 7.641.24 7.641S0 9.584 0 11.525v1.822c0 1.942.24 3.884.24 3.884s.234 1.653.953 2.382c.914.956 2.113.926 2.647 1.026 1.92.184 8.16.241 8.16.241s5.043-.007 8.401-.25c.47-.056 1.492-.061 2.405-1.017.72-.729.954-2.382.954-2.382s.24-1.942.24-3.885v-1.82c0-1.942-.24-3.885-.24-3.885z"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ZoomIn.js
function ZoomIn_extends() {
  ZoomIn_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ZoomIn_extends.apply(this, arguments);
}



var ZoomIn = function ZoomIn(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ZoomIn_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ZoomIn"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m16 16 7 7-7-7zm-6 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3V5m-5 5h10"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/ZoomOut.js
function ZoomOut_extends() {
  ZoomOut_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ZoomOut_extends.apply(this, arguments);
}



var ZoomOut = function ZoomOut(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, ZoomOut_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ZoomOut"
  }, props), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m16 16 7 7-7-7zm-6 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8h10"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Zoom.js
function Zoom_extends() {
  Zoom_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Zoom_extends.apply(this, arguments);
}



var Zoom = function Zoom(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Zoom_extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Zoom"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M0 8a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8z",
    fill: "#3984FD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M5 9a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v4a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V9zm10.5 2.752a2 2 0 0 1 .495-1.318l1.69-1.932c.457-.52 1.315-.198 1.315.494v6.008c0 .693-.858 1.015-1.314.494l-1.691-1.932a2 2 0 0 1-.495-1.317v-.498z",
    fill: "#fff"
  }));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/Blank.js
function Blank_extends() {
  Blank_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Blank_extends.apply(this, arguments);
}



var Blank = function Blank(props) {
  return /*#__PURE__*/react.createElement(StyledIcon, Blank_extends({
    viewBox: "0 0 24 24",
    "aria-hidden": true
  }, props));
};
;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/icons/index.js







































































































































































































































































































































































































































































































































































































































;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/themes/index.js

;// CONCATENATED MODULE: ./node_modules/grommet-icons/es6/index.js




/***/ }),

/***/ 9863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.e = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Actions = function Actions(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Actions"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-11V1m0 22v-5.5M1 12h5.5m11 0H23M4.437 4.437l4.125 4.125m6.876 6.876 4.124 4.124m0-15.125-4.125 4.125m-6.874 6.876-4.126 4.124"
  }));
};

exports.e = Actions;

/***/ }),

/***/ 5198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.e = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Blank = function Blank(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    "aria-hidden": true
  }, props));
};

exports.e = Blank;

/***/ }),

/***/ 8377:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.f = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Calendar = function Calendar(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Calendar"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 5h20v17H2V5zm16 0V1M6 5V1m-4 9h20"
  }));
};

exports.f = Calendar;

/***/ }),

/***/ 8116:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.V = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var ClosedCaption = function ClosedCaption(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ClosedCaption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 12c0-7 1.5-8 11-8s11 1 11 8-1.5 8-11 8-11-1-11-8zm4.25 2c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2-1.23 0-2.229-.75-2.229-2v-4C5.5 8.75 6.5 8 7.75 8s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2v4zm8 0c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2-1.23 0-2.229-.75-2.229-2v-4c-.021-1.25.979-2 2.229-2s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2v4z"
  }));
};

exports.V = ClosedCaption;

/***/ }),

/***/ 5204:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.M = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Expand = function Expand(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Expand"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m10 14-8 8m-1-7v8h8M22 2l-8 8m1-9h8v8"
  }));
};

exports.M = Expand;

/***/ }),

/***/ 6586:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.n = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var FormClose = function FormClose(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormClose"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m7 7 10 10M7 17 17 7"
  }));
};

exports.n = FormClose;

/***/ }),

/***/ 3963:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.I = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var FormDown = function FormDown(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormDown"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m18 9-6 6-6-6"
  }));
};

exports.I = FormDown;

/***/ }),

/***/ 1807:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.M = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var FormNext = function FormNext(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormNext"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m9 6 6 6-6 6"
  }));
};

exports.M = FormNext;

/***/ }),

/***/ 6828:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.x = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var FormPrevious = function FormPrevious(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormPrevious"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m15 6-6 6 6 6"
  }));
};

exports.x = FormPrevious;

/***/ }),

/***/ 4993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.H = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var FormSearch = function FormSearch(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormSearch"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M13.8 13.8 18 18l-4.2-4.2zM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
  }));
};

exports.H = FormSearch;

/***/ }),

/***/ 1381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.R = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var FormUp = function FormUp(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "FormUp"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m18 15-6-6-6 6"
  }));
};

exports.R = FormUp;

/***/ }),

/***/ 3031:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.o = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Next = function Next(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Next"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m7 2 10 10L7 22"
  }));
};

exports.o = Next;

/***/ }),

/***/ 4391:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.d = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Pause = function Pause(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Pause"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M3 21h6V3H3v18zm12 0h6V3h-6v18z"
  }));
};

exports.d = Pause;

/***/ }),

/***/ 8518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.s = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Play = function Play(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Play"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "m3 22 18-10L3 2z"
  }));
};

exports.s = Play;

/***/ }),

/***/ 9250:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.L = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Previous = function Previous(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Previous"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M17 2 7 12l10 10"
  }));
};

exports.L = Previous;

/***/ }),

/***/ 3362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.L = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Subtract = function Subtract(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Subtract"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 12h20"
  }));
};

exports.L = Subtract;

/***/ }),

/***/ 6068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.f = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Volume = function Volume(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Volume"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M15 16a4 4 0 0 0 0-8m0 12c5 0 8-3.589 8-8s-3.589-8-8-8M1 12V8h5l6-5v18l-6-5H1v-4"
  }));
};

exports.f = Volume;

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.t = void 0;

var _react = _interopRequireDefault(__webpack_require__(3750));

var _StyledIcon = __webpack_require__(2416);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var VolumeLow = function VolumeLow(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "VolumeLow"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 8v8h5.099L12 21V3L6 8H1zm14 8a4 4 0 1 0 0-8"
  }));
};

exports.t = VolumeLow;

/***/ }),

/***/ 1769:
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;
exports.base = void 0;
var base = {
  global: {
    colors: {
      icon: '#666666'
    }
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px'
    }
  }
};
exports.base = base;

/***/ }),

/***/ 7581:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.base = void 0;

var _base = __webpack_require__(1769);

exports.base = _base.base;

/***/ }),

/***/ 9457:
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;
exports.isObject = isObject;
exports.deepMerge = deepMerge;
exports.default = void 0;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) {
    return target;
  } // making sure to not change target (immutable)


  var output = _extends({}, target);

  sources.forEach(function (source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = _extends({}, source[key]);
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
}

var _default = {
  deepMerge: deepMerge,
  isObject: isObject
};
exports.default = _default;

/***/ })

}]);