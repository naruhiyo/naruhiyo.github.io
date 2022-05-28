"use strict";
(self["webpackChunknaruhiyo_github_io"] = self["webpackChunknaruhiyo_github_io"] || []).push([[746],{

/***/ 9334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "colorIsDark": () => (/* reexport */ colors/* colorIsDark */.P),
  "colorStyle": () => (/* reexport */ color/* colorStyle */.u),
  "normalizeColor": () => (/* reexport */ colors/* normalizeColor */.u),
  "sizeStyle": () => (/* reexport */ sizeStyle)
});

// EXTERNAL MODULE: ./node_modules/grommet-styles/es6/styles/color.js
var color = __webpack_require__(2298);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
;// CONCATENATED MODULE: ./node_modules/grommet-styles/es6/styles/size.js

var sizeStyle = function sizeStyle(name, value, theme) {
  return (0,styled_components_browser_esm.css)(["", ":", ";"], name, theme.global.size[value] || value);
};
;// CONCATENATED MODULE: ./node_modules/grommet-styles/es6/styles/index.js


// EXTERNAL MODULE: ./node_modules/grommet-styles/es6/utils/colors.js
var colors = __webpack_require__(9335);
;// CONCATENATED MODULE: ./node_modules/grommet-styles/es6/utils/index.js

;// CONCATENATED MODULE: ./node_modules/grommet-styles/es6/index.js



/***/ }),

/***/ 2298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ colorStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8804);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9335);


var colorStyle = function colorStyle(name, value, theme, required) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ":", ";"], name, (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .normalizeColor */ .u)(value, theme, required));
};

/***/ }),

/***/ 9335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ colorIsDark),
/* harmony export */   "u": () => (/* binding */ normalizeColor)
/* harmony export */ });
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
var parseHexToRGB = function parseHexToRGB(color) {
  return color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
    return "#" + r + r + g + g + b + b;
  }).substring(1).match(/.{2}/g).map(function (x) {
    return parseInt(x, 16);
  });
};

var getRGBArray = function getRGBArray(color) {
  if (/^#/.test(color)) {
    return parseHexToRGB(color);
  }

  if (/^rgb/.test(color)) {
    return color.match(/rgba?\((\s?[0-9]*\s?),(\s?[0-9]*\s?),(\s?[0-9]*\s?).*?\)/).splice(1);
  }

  return color;
};

var colorIsDark = function colorIsDark(color) {
  var _getRGBArray = getRGBArray(color),
      red = _getRGBArray[0],
      green = _getRGBArray[1],
      blue = _getRGBArray[2]; // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};
var normalizeColor = function normalizeColor(color, theme) {
  var colorSpec = theme.global.colors[color] || color; // If the color has a light or dark object, use that

  var result = colorSpec;

  if (theme.dark && colorSpec.dark) {
    result = colorSpec.dark;
  } else if (!theme.dark && colorSpec.light) {
    result = colorSpec.light;
  } // allow one level of indirection in color names


  if (result && theme.global.colors[result] && theme.global.colors[result] !== result) {
    result = normalizeColor(result, theme);
  }

  return result;
};

/***/ }),

/***/ 4616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ Box)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/background.js
var utils_background = __webpack_require__(6093);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Keyboard/Keyboard.js + 1 modules
var Keyboard = __webpack_require__(2282);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/responsive.js
var utils_responsive = __webpack_require__(1862);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/mixins.js
var mixins = __webpack_require__(9207);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/border.js
var utils_border = __webpack_require__(5789);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/animation.js

var PULSE_SIZES = {
  xsmall: 1.001,
  small: 1.01,
  medium: 1.1,
  large: 1.5,
  xlarge: 2
};
var SLIDE_SIZES = {
  xsmall: 1,
  small: 5,
  medium: 10,
  large: 50,
  xlarge: 200
};
var JIGGLE_SIZES = {
  xsmall: 0.1,
  small: 1,
  medium: 5,
  large: 400,
  xlarge: 1000
};
var ZOOM_SIZES = {
  xsmall: 0.001,
  small: 0.01,
  medium: 0.05,
  large: 0.1,
  xlarge: 0.5
};
var animationBounds = function animationBounds(type, size) {
  if (size === void 0) {
    size = 'medium';
  }

  if (type === 'draw') {
    return ['', "stroke-dashoffset: 0"];
  }

  if (type === 'fadeIn') {
    return ['opacity: 0;', 'opacity: 1;'];
  }

  if (type === 'fadeOut') {
    return ['opacity: 1;', 'opacity: 0;'];
  }

  if (type === 'jiggle') {
    var deg = JIGGLE_SIZES[size];
    return ["transform: rotate(-" + deg + "deg);", "transform: rotate(" + deg + "deg);"];
  }

  if (type === 'pulse') {
    return ['transform: scale(1);', "transform: scale(" + PULSE_SIZES[size] + ")"];
  }

  if (type === 'rotateRight') {
    return ["transform: rotate(0deg);", "transform: rotate(359deg);"];
  }

  if (type === 'rotateLeft') {
    return ["transform: rotate(0deg);", "transform: rotate(-359deg);"];
  }

  if (type === 'flipIn') {
    return ['transform: rotateY(90deg);', 'transform: rotateY(0);'];
  }

  if (type === 'flipOut') {
    return ['transform: rotateY(0);', 'transform: rotateY(90deg);'];
  }

  if (type === 'slideDown') {
    return ["transform: translateY(-" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideLeft') {
    return ["transform: translateX(" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideRight') {
    return ["transform: translateX(-" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'slideUp') {
    return ["transform: translateY(" + SLIDE_SIZES[size] + "%);", 'transform: none;'];
  }

  if (type === 'zoomIn') {
    return ["transform: scale(" + (1 - ZOOM_SIZES[size]) + ");", 'transform: none;'];
  }

  if (type === 'zoomOut') {
    return ["transform: scale(" + (1 + ZOOM_SIZES[size]) + ");", 'transform: none;'];
  }

  return [];
};
var normalizeTiming = function normalizeTiming(time, defaultTiming) {
  return typeof time === 'number' ? time / 1000.0 + "s" : time || defaultTiming;
};
var animationEnding = function animationEnding(type) {
  if (type === 'draw') {
    return 'linear forwards';
  }

  if (type === 'jiggle') {
    return 'alternate infinite';
  }

  if (type === 'pulse') {
    return 'alternate infinite';
  }

  if (type === 'rotateRight' || type === 'rotateLeft') {
    return 'infinite linear';
  }

  return 'forwards';
};
var animationObjectStyle = function animationObjectStyle(animation, theme, themeObj) {
  var bounds = animationBounds(animation.type, animation.size);
  var animationTheme = themeObj && themeObj.animation || theme.global.animation;

  if (bounds) {
    var animationTransition = (0,styled_components_browser_esm.css)(["from{", ";}to{", ";}"], bounds[0], bounds[1]);

    var defaultDuration = function defaultDuration() {
      return normalizeTiming(animationTheme[animation.type] ? animationTheme[animation.type].duration : animation.duration, animationTheme.duration);
    };

    return (0,styled_components_browser_esm.css)(["", " ", " ", " ", ""], (0,styled_components_browser_esm.keyframes)(["", ""], animationTransition), normalizeTiming(animation.duration, defaultDuration()), normalizeTiming(animation.delay, '0s'), animationEnding(animation.type));
  }

  return '';
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Box/StyledBox.js
var _FLEX_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var BASIS_MAP = {
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var basisStyle = (0,styled_components_browser_esm.css)(["flex-basis:", ";"], function (props) {
  return BASIS_MAP[props.basis] || props.theme.global.size[props.basis] || props.basis;
}); // min-width and min-height needed because of this
// https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
// we assume we are in the context of a Box going the other direction
// TODO: revisit this

var directionStyle = function directionStyle(direction, theme) {
  var styles = [(0,styled_components_browser_esm.css)(["min-width:0;min-height:0;flex-direction:", ";"], direction === 'row-responsive' ? 'row' : direction)];

  if (direction === 'row-responsive' && theme.box.responsiveBreakpoint) {
    var breakpoint = (0,utils_responsive/* getBreakpointStyle */.ze)(theme, theme.box.responsiveBreakpoint);

    if (breakpoint) {
      styles.push((0,mixins/* breakpointStyle */.bk)(breakpoint, "\n        flex-direction: column;\n        flex-basis: auto;\n        justify-content: flex-start;\n        align-items: stretch;\n      "));
    }
  }

  return styles;
};

var elevationStyle = function elevationStyle(elevation) {
  return (0,styled_components_browser_esm.css)(["box-shadow:", ";"], function (props) {
    return props.theme.global.elevation[props.theme.dark ? 'dark' : 'light'][elevation];
  });
};

var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);

var flexGrowShrinkProp = function flexGrowShrinkProp(flex) {
  if (typeof flex === 'boolean' || typeof flex === 'string') {
    return FLEX_MAP[flex];
  }

  return (flex.grow ? flex.grow : 0) + " " + (flex.shrink ? flex.shrink : 0);
};

var flexStyle = (0,styled_components_browser_esm.css)(["flex:", ";"], function (props) {
  return "" + flexGrowShrinkProp(props.flex) + (props.flex !== true && !props.basis ? ' auto' : '');
});
var JUSTIFY_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start'
};
var justifyStyle = (0,styled_components_browser_esm.css)(["justify-content:", ";"], function (props) {
  return JUSTIFY_MAP[props.justify];
});
var WRAP_MAP = {
  "true": 'wrap',
  reverse: 'wrap-reverse'
};
var wrapStyle = (0,styled_components_browser_esm.css)(["flex-wrap:", ";"], function (props) {
  return WRAP_MAP[props.wrapProp];
});

var animationItemStyle = function animationItemStyle(item, theme) {
  if (typeof item === 'string') {
    return animationObjectStyle({
      type: item
    }, theme);
  }

  if (Array.isArray(item)) {
    return item.reduce(function (style, a, index) {
      return (0,styled_components_browser_esm.css)(["", "", " ", ""], style, index > 0 ? ',' : '', animationItemStyle(a, theme));
    }, '');
  }

  if (typeof item === 'object') {
    return animationObjectStyle(item, theme);
  }

  return '';
};

var animationAncilaries = function animationAncilaries(animation) {
  if (animation.type === 'flipIn' || animation.type === 'flipOut') {
    return 'perspective: 1000px; transform-style: preserve-3d;';
  }

  return '';
};

var animationObjectInitialStyle = function animationObjectInitialStyle(animation) {
  var bounds = animationBounds(animation.type, animation.size);

  if (bounds) {
    return bounds[0] + " " + animationAncilaries(animation);
  }

  return '';
};

var animationInitialStyle = function animationInitialStyle(item) {
  if (typeof item === 'string') {
    return animationObjectInitialStyle({
      type: item
    });
  }

  if (Array.isArray(item)) {
    return item.map(function (a) {
      return typeof a === 'string' ? animationObjectInitialStyle({
        type: a
      }) : animationObjectInitialStyle(a);
    }).join('');
  }

  if (typeof item === 'object') {
    return animationObjectInitialStyle(item);
  }

  return '';
};

var animationStyle = (0,styled_components_browser_esm.css)(["", ";"], function (props) {
  return (0,styled_components_browser_esm.css)(["", " animation:", ";"], animationInitialStyle(props.animation), animationItemStyle(props.animation, props.theme));
});
var interactiveStyle = (0,styled_components_browser_esm.css)(["cursor:pointer;&:hover{", " ", "}"], function (props) {
  var _props$kindProp;

  return ((_props$kindProp = props.kindProp) == null ? void 0 : _props$kindProp.hover) && (0,utils_background/* getHoverIndicatorStyle */.AM)(props.kindProp.hover, props.theme);
}, function (props) {
  return props.hoverIndicator && (0,utils_background/* getHoverIndicatorStyle */.AM)(props.hoverIndicator, props.theme);
}); // NOTE: basis must be after flex! Otherwise, flex overrides basis

var StyledBox = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledBox",
  componentId: "sc-13pk1d4-0"
})(["display:flex;box-sizing:border-box;", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return !props.basis && 'max-width: 100%;';
}, styles/* genericStyles */.$G, function (props) {
  return props.align && styles/* alignStyle */.GU;
}, function (props) {
  return props.alignContent && styles/* alignContentStyle */.S6;
}, function (props) {
  return props.background && (0,utils_background/* backgroundStyle */.Nu)(props.background, props.theme);
}, function (props) {
  return props.border && (0,utils_border/* borderStyle */.$)(props.border, props.responsive, props.theme);
}, function (props) {
  return props.directionProp && directionStyle(props.directionProp, props.theme);
}, function (props) {
  return props.heightProp && (0,styles/* heightStyle */.tH)(props.heightProp, props.theme);
}, function (props) {
  return props.widthProp && (0,styles/* widthStyle */.ch)(props.widthProp, props.theme);
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return props.fillProp && (0,styles/* fillStyle */.EW)(props.fillProp);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.pad && (0,styles/* edgeStyle */.oW)('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.round && (0,styles/* roundStyle */.bS)(props.round, props.responsive, props.theme);
}, function (props) {
  return props.wrapProp && wrapStyle;
}, function (props) {
  return props.overflowProp && (0,styles/* overflowStyle */.uq)(props.overflowProp);
}, function (props) {
  return props.elevationProp && elevationStyle(props.elevationProp);
}, function (props) {
  return props.animation && animationStyle;
}, function (props) {
  return props.onClick && interactiveStyle;
}, function (props) {
  return props.onClick && props.focus && props.focusIndicator !== false && (0,styles/* focusStyle */.jq)();
}, function (props) {
  return props.theme.box && props.theme.box.extend;
}, function (props) {
  return props.kindProp && props.kindProp.extend;
});

var gapStyle = function gapStyle(directionProp, gap, responsive, border, theme) {
  var metric = theme.global.edgeSize[gap] || gap;
  var breakpoint = (0,utils_responsive/* getBreakpointStyle */.ze)(theme, theme.box.responsiveBreakpoint);
  var responsiveMetric = responsive && breakpoint && breakpoint.edgeSize[gap];
  var styles = [];

  if (directionProp === 'column' || directionProp === 'column-reverse') {
    styles.push("height: " + metric + ";");

    if (responsiveMetric) {
      styles.push((0,mixins/* breakpointStyle */.bk)(breakpoint, "height: " + responsiveMetric + ";"));
    }
  } else {
    styles.push("width: " + metric + ";");

    if (responsiveMetric) {
      if (directionProp === 'row' || directionProp === 'row-reverse') {
        styles.push((0,mixins/* breakpointStyle */.bk)(breakpoint, "width: " + responsiveMetric + ";"));
      } else if (directionProp === 'row-responsive') {
        styles.push((0,mixins/* breakpointStyle */.bk)(breakpoint, "\n          width: auto;\n          height: " + responsiveMetric + ";\n        "));
      }
    }
  }

  if (border === 'between' || border && border.side === 'between') {
    var borderSize = border.size || 'xsmall';
    var borderMetric = theme.global.borderSize[borderSize] || borderSize;
    var borderOffset = (0,mixins/* parseMetricToNum */.gd)(metric) / 2 - (0,mixins/* parseMetricToNum */.gd)(borderMetric) / 2 + "px";
    var responsiveBorderMetric = responsive && breakpoint && (breakpoint.borderSize[borderSize] || borderSize);
    var responsiveBorderOffset = responsiveBorderMetric && (0,mixins/* parseMetricToNum */.gd)(responsiveMetric) / 2 - (0,mixins/* parseMetricToNum */.gd)(responsiveBorderMetric) / 2 + "px";

    if (directionProp === 'column' || directionProp === 'column-reverse') {
      var adjustedBorder = typeof border === 'string' ? 'top' : _extends({}, border, {
        side: 'top'
      });
      styles.push((0,styled_components_browser_esm.css)(["position:relative;&:after{content:'';position:absolute;width:100%;top:", ";", "}"], borderOffset, (0,utils_border/* borderStyle */.$)(adjustedBorder, responsive, theme)));

      if (responsiveBorderOffset) {
        styles.push((0,mixins/* breakpointStyle */.bk)(breakpoint, "\n            &:after {\n              content: '';\n              top: " + responsiveBorderOffset + ";\n            }"));
      }
    } else {
      var _adjustedBorder = typeof border === 'string' ? 'left' : _extends({}, border, {
        side: 'left'
      });

      styles.push((0,styled_components_browser_esm.css)(["position:relative;&:after{content:'';position:absolute;height:100%;left:", ";", "}"], borderOffset, (0,utils_border/* borderStyle */.$)(_adjustedBorder, directionProp !== 'row-responsive' && responsive, theme)));

      if (responsiveBorderOffset) {
        if (directionProp === 'row' || directionProp === 'row-reverse') {
          styles.push((0,mixins/* breakpointStyle */.bk)(breakpoint, "\n              &:after {\n                content: '';\n                left: " + responsiveBorderOffset + ";\n              }"));
        } else if (directionProp === 'row-responsive') {
          var adjustedBorder2 = typeof border === 'string' ? 'top' : _extends({}, border, {
            side: 'top'
          });
          styles.push((0,mixins/* breakpointStyle */.bk)(breakpoint, "\n              &:after {\n                content: '';\n                height: auto;\n                left: unset;\n                width: 100%;\n                top: " + responsiveBorderOffset + ";\n                border-left: none;\n                " + (0,utils_border/* responsiveBorderStyle */.H)(adjustedBorder2, theme) + "\n              }"));
        }
      }
    }
  }

  return styles;
};

StyledBox.defaultProps = {};
Object.setPrototypeOf(StyledBox.defaultProps, default_props/* defaultProps */.l);
var StyledBoxGap = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledBox__StyledBoxGap",
  componentId: "sc-13pk1d4-1"
})(["flex:0 0 auto;align-self:stretch;", ";"], function (props) {
  return props.gap && gapStyle(props.directionProp, props.gap, props.responsive, props.border, props.theme);
});
StyledBoxGap.defaultProps = {};
Object.setPrototypeOf(StyledBoxGap.defaultProps, default_props/* defaultProps */.l);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Box/propTypes.js
function propTypes_extends() { propTypes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return propTypes_extends.apply(this, arguments); }



var OVERFLOW_VALUES = ['auto', 'hidden', 'scroll', 'visible'];
var ANIMATION_TYPE = prop_types_default().oneOf(['fadeIn', 'fadeOut', 'jiggle', 'pulse', 'rotateLeft', 'rotateRight', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut']);
var ANIMATION_SHAPE = prop_types_default().shape({
  type: ANIMATION_TYPE,
  delay: (prop_types_default()).number,
  duration: (prop_types_default()).number,
  size: prop_types_default().oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
});
var BORDER_SHAPE = prop_types_default().shape({
  color: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().shape({
    dark: (prop_types_default()).string,
    light: (prop_types_default()).string
  })]),
  side: prop_types_default().oneOf(['top', 'left', 'bottom', 'right', 'start', 'end', 'horizontal', 'vertical', 'all', 'between']),
  size: prop_types_default().oneOfType([prop_types_default().oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), (prop_types_default()).string]),
  style: prop_types_default().oneOf(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'hidden'])
}); // if you update values here, make sure to update in Drop/doc too.

var overflowPropType = prop_types_default().oneOfType([prop_types_default().oneOf(OVERFLOW_VALUES), prop_types_default().shape({
  horizontal: prop_types_default().oneOf(OVERFLOW_VALUES),
  vertical: prop_types_default().oneOf(OVERFLOW_VALUES)
}), (prop_types_default()).string]);
var PropType = {};

if (false) {}

var BoxPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Box/Box.js
var _excluded = ["a11yTitle", "background", "border", "children", "direction", "elevation", "fill", "gap", "kind", "onBlur", "onClick", "onFocus", "overflow", "responsive", "tag", "as", "wrap", "width", "height", "tabIndex"];

function Box_extends() { Box_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Box_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Box = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      background = _ref.background,
      border = _ref.border,
      children = _ref.children,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      elevation = _ref.elevation,
      fill = _ref.fill,
      gap = _ref.gap,
      kind = _ref.kind,
      _onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      _onFocus = _ref.onFocus,
      overflow = _ref.overflow,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      tag = _ref.tag,
      as = _ref.as,
      wrap = _ref.wrap,
      width = _ref.width,
      height = _ref.height,
      tabIndex = _ref.tabIndex,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;
  var focusable = (0,react.useMemo)(function () {
    return onClick && !(tabIndex < 0);
  }, [onClick, tabIndex]);

  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  var clickProps = (0,react.useMemo)(function () {
    if (focusable) {
      return {
        onClick: onClick,
        onFocus: function onFocus(event) {
          setFocus(true);
          if (_onFocus) _onFocus(event);
        },
        onBlur: function onBlur(event) {
          setFocus(false);
          if (_onBlur) _onBlur(event);
        }
      };
    }

    var result = {};
    if (_onBlur) result.onBlur = _onBlur;
    if (onClick) result.onClick = onClick;
    if (_onFocus) result.onFocus = _onFocus;
    return result;
  }, [focusable, onClick, _onFocus, _onBlur]);
  var adjustedTabIndex = (0,react.useMemo)(function () {
    if (tabIndex !== undefined) return tabIndex;
    if (focusable) return 0;
    return undefined;
  }, [focusable, tabIndex]);

  if ((border === 'between' || border && border.side === 'between') && !gap) {
    console.warn('Box must have a gap to use border between');
  }

  var contents = children;

  if (gap && gap !== 'none') {
    var boxAs = !as && tag ? tag : as;
    contents = [];
    var firstIndex;
    react.Children.forEach(children, function (child, index) {
      if (child) {
        if (firstIndex === undefined) {
          firstIndex = index;
        } else {
          contents.push( /*#__PURE__*/react.createElement(StyledBoxGap // eslint-disable-next-line react/no-array-index-key
          , {
            key: "gap-" + index,
            as: boxAs === 'span' ? boxAs : 'div',
            gap: gap,
            directionProp: direction,
            responsive: responsive,
            border: border
          }));
        }
      }

      contents.push(child);
    });
  } // construct a new theme object in case we have a background that wants
  // to change the background color context


  var nextTheme = (0,react.useMemo)(function () {
    var result;

    if (background || theme.darkChanged) {
      var dark = (0,utils_background/* backgroundIsDark */.im)(background, theme);
      var darkChanged = dark !== undefined && dark !== theme.dark;

      if (darkChanged || theme.darkChanged) {
        result = Box_extends({}, theme);
        result.dark = dark === undefined ? theme.dark : dark;
        result.background = background;
      } else if (background) {
        // This allows DataTable to intelligently set the background
        // of a pinned header or footer.
        result = Box_extends({}, theme);
        result.background = background;
      }
    }

    return result || theme;
  }, [background, theme]);
  var content = /*#__PURE__*/react.createElement(StyledBox, Box_extends({
    as: !as && tag ? tag : as,
    "aria-label": a11yTitle,
    background: background,
    border: border,
    ref: ref,
    directionProp: direction,
    elevationProp: elevation,
    fillProp: fill,
    focus: focus,
    kindProp: kind,
    overflowProp: overflow,
    wrapProp: wrap,
    widthProp: width,
    heightProp: height,
    responsive: responsive,
    tabIndex: adjustedTabIndex
  }, clickProps, rest), /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
    value: nextTheme
  }, contents));

  if (onClick) {
    content = /*#__PURE__*/react.createElement(Keyboard/* Keyboard */.N, {
      onEnter: onClick
    }, content);
  }

  return content;
});
Box.displayName = 'Box';
Box.propTypes = BoxPropTypes;


/***/ }),

/***/ 1999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/background.js
var utils_background = __webpack_require__(6093);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/colors.js
var colors = __webpack_require__(6808);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Button/propTypes.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var PropType = {};

if (false) {}

var ButtonPropTypes = PropType;
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Box/Box.js + 3 modules
var Box = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Tip/Tip.js + 1 modules
var Tip = __webpack_require__(8189);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/mixins.js
var mixins = __webpack_require__(9207);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/use-isomorphic-layout-effect.js
var use_isomorphic_layout_effect = __webpack_require__(2320);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var utils_styles = __webpack_require__(363);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Stack/StyledStack.js



var fillStyle = (0,styled_components_browser_esm.css)(["", " ", " flex-grow:1;display:flex;"], function (props) {
  return props.fillContainer === true || props.fillContainer === 'horizontal' ? "\n        width: 100%;\n        max-width: none;\n      " : '';
}, function (props) {
  return props.fillContainer === true || props.fillContainer === 'vertical' ? 'height: 100%;' : '';
});
var StyledStack = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledStack",
  componentId: "sc-ajspsk-0"
})(["position:relative;", " ", " ", ""], utils_styles/* genericStyles */.$G, function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});
StyledStack.defaultProps = {};
Object.setPrototypeOf(StyledStack.defaultProps, default_props/* defaultProps */.l);
var styleMap = {
  fill: "\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",
  center: "\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",
  left: "\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",
  right: "\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",
  top: "\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  bottom: "\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",
  'top-left': "\n    top: 0;\n    left: 0;\n  ",
  'bottom-left': "\n    bottom: 0;\n    left: 0;\n  ",
  'top-right': "\n    top: 0;\n    right: 0;\n  ",
  'bottom-right': "\n    bottom: 0;\n    right: 0;\n  "
};
var StyledStackLayer = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledStack__StyledStackLayer",
  componentId: "sc-ajspsk-1"
})(["position:", ";", " ", " ", " ", ""], function (props) {
  return props.guiding ? 'relative' : 'absolute';
}, function (props) {
  return props.guiding && 'display: block;';
}, function (props) {
  return !props.guiding && styleMap[props.anchor || 'fill'] + ";";
}, function (props) {
  return props.fillContainer && "\n    width: 100%;\n    height: 100%;\n  ";
}, function (props) {
  return !props.interactive && "pointer-events: none;";
});
StyledStackLayer.defaultProps = {};
Object.setPrototypeOf(StyledStackLayer.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Stack/propTypes.js
function propTypes_extends() { propTypes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return propTypes_extends.apply(this, arguments); }



var propTypes_PropType = {};

if (false) {}

var StackPropTypes = propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Stack/Stack.js
var _excluded = ["anchor", "children", "fill", "guidingChild", "interactiveChild"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Stack_extends() { Stack_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Stack_extends.apply(this, arguments); }





var buildStyledChildren = function buildStyledChildren(_ref) {
  var anchor = _ref.anchor,
      fill = _ref.fill,
      guidingIndex = _ref.guidingIndex,
      interactiveChild = _ref.interactiveChild,
      interactiveIndex = _ref.interactiveIndex;
  return function (child, index) {
    var interactive = interactiveChild === undefined || interactiveIndex === index;
    var isGuidingIndex = index === guidingIndex;
    var props = isGuidingIndex ? {
      guiding: true,
      fillContainer: fill
    } : {
      anchor: anchor
    };
    return /*#__PURE__*/react.createElement(StyledStackLayer, Stack_extends({
      key: index,
      interactive: interactive
    }, props), child);
  };
};

var Stack = /*#__PURE__*/(0,react.forwardRef)(function (_ref2, ref) {
  var anchor = _ref2.anchor,
      children = _ref2.children,
      fill = _ref2.fill,
      guidingChild = _ref2.guidingChild,
      interactiveChild = _ref2.interactiveChild,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded);

  var prunedChildren = react.Children.toArray(children).filter(function (c) {
    return c;
  });

  var toChildIndex = function toChildIndex(child) {
    var index = child;
    if (index === 'first' || !index) index = 0;else if (index === 'last') index = prunedChildren.length - 1;
    return index;
  };

  var guidingIndex = toChildIndex(guidingChild);
  var interactiveIndex = interactiveChild && toChildIndex(interactiveChild);
  var styledChildren = prunedChildren.map(buildStyledChildren({
    anchor: anchor,
    fill: fill,
    guidingIndex: guidingIndex,
    interactiveChild: interactiveChild,
    interactiveIndex: interactiveIndex
  }));
  return /*#__PURE__*/react.createElement(StyledStack, Stack_extends({
    ref: ref,
    fillContainer: fill
  }, rest), styledChildren);
});
Stack.displayName = 'Stack';
Stack.propTypes = StackPropTypes;

// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Text/Text.js + 2 modules
var Text = __webpack_require__(5151);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Button/Badge.js







var StyledBadgeContainer = (0,styled_components_browser_esm["default"])(Box/* Box */.x).withConfig({
  displayName: "Badge__StyledBadgeContainer",
  componentId: "sc-1es4ws1-0"
})(["", ""], function (props) {
  return props.theme.button.badge.container.extend;
});
var Badge = function Badge(_ref) {
  var children = _ref.children,
      content = _ref.content;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);
  var contentRef = (0,react.useRef)();
  var stackRef = (0,react.useRef)();
  var defaultBadgeDimension = typeof content === 'boolean' || content && content.value && typeof content.value === 'boolean' ? // empty badge should be smaller. this value was chosen as a default
  // after experimenting with various values
  (0,mixins/* parseMetricToNum */.gd)(theme.button.badge.size.medium) / 2 + "px" : theme.button.badge.size.medium; // size should drive height, match width to height by default
  // allow width to grow when content is wide

  var _useState = (0,react.useState)(defaultBadgeDimension),
      height = _useState[0],
      setHeight = _useState[1];

  var _useState2 = (0,react.useState)(height),
      width = _useState2[0],
      setWidth = _useState2[1]; // scale badge to fit its contents, leaving space horizontally
  // that is proportional to vertical space


  (0,use_isomorphic_layout_effect/* useLayoutEffect */.b)(function () {
    // when window resizes and hits a responsive breakpoint, width of the badge
    // can change (because pad is responsive, etc.). we want to recalculate
    // width since badge offset is reliant on its dimensions.
    var onResize = function onResize() {
      if (contentRef && contentRef.current) {
        if (typeof content === 'number' || typeof content === 'object' && content.value) {
          var _contentRef$current$g = contentRef.current.getBoundingClientRect(),
              contentHeight = _contentRef$current$g.height,
              contentWidth = _contentRef$current$g.width; // only adjust the width if contentHeight > 0
          // jest returns 0 for all getBoundingClientRect values,
          // so this ensures snapshots are closer to correct values


          if (contentHeight) {
            // height of content includes extra space around font from
            // line-height. account for this extra space with 2.5 multiplier
            // to add proportional horizontal space
            var verticalSpace = ((0,mixins/* parseMetricToNum */.gd)(height) - contentHeight) * 2.5;
            setWidth(Math.max((0,mixins/* parseMetricToNum */.gd)(width), Math.ceil(contentWidth + verticalSpace)) + "px");
          }
        } else {
          // caller has provided custom JSX
          setWidth(contentRef.current.getBoundingClientRect().width + "px");
          setHeight(contentRef.current.getBoundingClientRect().height + "px");
        }
      }
    };

    window.addEventListener('resize', onResize);
    onResize();
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, [content, height, width]); // offset the badge so it overlaps content

  (0,use_isomorphic_layout_effect/* useLayoutEffect */.b)(function () {
    if (stackRef && stackRef.current) {
      // when badge has content, offset should be 50%.
      // when badge is empty, offset by a smaller amount to keep the badge
      // closer to the content. this value was chosen as a reasonable default
      // after testing with various grommet icons.
      var divisor = typeof content === 'boolean' || content && content.value === true ? 3.5 : 2;
      var offset = {
        right: "-" + Math.round((0,mixins/* parseMetricToNum */.gd)(width) / divisor) + "px",
        top: "-" + Math.round((0,mixins/* parseMetricToNum */.gd)(height) / divisor) + "px"
      }; // second child of Stack is the div that receives absolute positioning
      // and contains our badge content

      stackRef.current.children[1].style.top = offset.top;
      stackRef.current.children[1].style.right = offset.right;
    }
  }, [content, height, width]);
  var value;
  if (typeof content === 'number') value = content;else if (typeof content === 'object') value = content.value;
  var badge;

  if (typeof value === 'number' || typeof value === 'boolean' || typeof content === 'boolean') {
    if (typeof value === 'number') {
      var max = content.max || 9;
      badge = /*#__PURE__*/react.createElement(Text/* Text */.x, {
        color: "text-strong",
        size: theme.button.badge.text.size.medium,
        weight: "normal",
        ref: contentRef
      }, value > max ? max + "+" : value);
    }

    badge = /*#__PURE__*/react.createElement(StyledBadgeContainer, {
      align: "center",
      background: content.background || theme.button.badge.container.background,
      flex: false,
      height: {
        min: height
      },
      justify: "center",
      round: true,
      pad: !(typeof value === 'boolean' || typeof content === 'boolean') ? theme.button.badge.container.pad : undefined,
      width: {
        min: width
      }
    }, badge); // caller has provided their own JSX and we will just render that
  } else badge = /*#__PURE__*/react.createElement(Box/* Box */.x, {
    ref: contentRef
  }, content);

  return /*#__PURE__*/react.createElement(Stack, {
    ref: stackRef,
    anchor: "top-right"
  }, children, badge);
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Button/StyledButton.js




var radiusStyle = function radiusStyle(props) {
  // border.radius shouldn't impact an only-icon rendering.
  var isIconOnly = props.hasIcon && !props.hasLabel;
  var size = props.sizeProp;

  if (!isIconOnly && size && props.theme.button.size && props.theme.button.size[size]) {
    return props.theme.button.size[size].border.radius;
  }

  return props.theme.button.border.radius;
};

var fontStyle = function fontStyle(props) {
  var size = props.sizeProp || 'medium';
  var data = props.theme.text[size];
  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var padStyle = function padStyle(props) {
  var size = props.sizeProp;

  if (size && props.theme.button.size && props.theme.button.size[size]) {
    return (0,styled_components_browser_esm.css)(["", " ", ""], props.theme.button.size[size].pad.vertical, props.theme.button.size[size].pad.horizontal);
  }

  return (0,styled_components_browser_esm.css)(["", " ", ""], props.theme.button.padding.vertical, props.theme.button.padding.horizontal);
};

var basicStyle = function basicStyle(props) {
  return (0,styled_components_browser_esm.css)(["border:", " solid ", ";border-radius:", ";color:", ";padding:", ";", ""], props.theme.button.border.width, (0,colors/* normalizeColor */.ut)(props.colorValue || props.theme.button.border.color || 'control', props.theme), radiusStyle(props), (0,colors/* normalizeColor */.ut)(props.theme.button.color || 'text', props.theme), padStyle(props), fontStyle(props));
};

var primaryStyle = function primaryStyle(props) {
  return (0,styled_components_browser_esm.css)(["", " border-radius:", ";", ""], (0,utils_background/* backgroundStyle */.Nu)((0,colors/* normalizeColor */.ut)(props.colorValue || props.theme.button.primary && props.theme.button.primary.color || 'control', props.theme), props.theme, props.theme.button.color), radiusStyle(props), props.theme.button.primary && props.theme.button.primary.extend);
};

function getHoverColor(props) {
  if (props.colorValue) {
    return (0,colors/* normalizeColor */.ut)(props.colorValue, props.theme);
  }

  if (props.active && props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.border && props.theme.button.primary.active.border.color) {
    return (0,colors/* normalizeColor */.ut)(props.theme.button.primary.active.border.color, props.theme);
  }

  return (0,colors/* normalizeColor */.ut)(props.theme.button.border.color || 'control', props.theme);
}

var hoverStyle = (0,styled_components_browser_esm.css)(["&:hover{", " ", ";}"], function (props) {
  return props.hoverIndicator && (0,utils_background/* getHoverIndicatorStyle */.AM)(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && (0,styled_components_browser_esm.css)(["box-shadow:0px 0px 0px 2px ", ";"], getHoverColor(props));
});

var StyledButton_fillStyle = function fillStyle(fillContainer) {
  if (fillContainer === 'horizontal') {
    return 'width: 100%;';
  }

  if (fillContainer === 'vertical') {
    return 'height: 100%;';
  }

  if (fillContainer) {
    return "\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ";
  }

  return undefined;
};

var plainStyle = function plainStyle(props) {
  return (0,styled_components_browser_esm.css)(["color:", ";outline:none;border:none;padding:0;text-align:inherit;"], (0,colors/* normalizeColor */.ut)(props.colorValue || 'inherit', props.theme));
};

var activeButtonStyle = function activeButtonStyle(props) {
  return (0,styled_components_browser_esm.css)(["", " ", " ", ""], utils_background/* activeStyle */.Ii, props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.border && props.theme.button.primary.active.border.color && "border: " + props.theme.button.border.width + " solid\n    " + (0,colors/* normalizeColor */.ut)(props.theme.button.primary.active.border.color, props.theme) + ";\n    ", props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.extend);
};

var disabledButtonStyle = function disabledButtonStyle(props) {
  return (0,styled_components_browser_esm.css)(["", " ", " ", " ", ""], (0,utils_styles/* disabledStyle */.Cv)(props.theme.button.disabled.opacity), !props.plain && props.theme.button.disabled.border && props.theme.button.disabled.border.color && "border: " + props.theme.button.border.width + " solid\n    " + (0,colors/* normalizeColor */.ut)(props.theme.button.disabled.border.color, props.theme) + ";", props.theme.button.disabled.color && ( // if primary button, apply disabled color to background. otherwise,
  // apply disabled color to the label
  props.primary ? (0,utils_background/* backgroundStyle */.Nu)((0,colors/* normalizeColor */.ut)(props.theme.button.disabled.color, props.theme), props.theme, props.theme.button.color) : "color: " + (0,colors/* normalizeColor */.ut)(props.theme.button.disabled.color, props.theme) + ";"), props.theme.button.disabled && props.theme.button.disabled.extend);
}; // Deprecate props.theme.button.disabled.opacity in V3


var StyledButton = styled_components_browser_esm["default"].button.withConfig({
  displayName: "StyledButton",
  componentId: "sc-323bzc-0"
})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;", " ", " ", " ", " ", " ", " ", " &:focus{", "}&:focus:not(:focus-visible){", "}", " ", " ", " ", " ", ""], utils_styles/* genericStyles */.$G, function (props) {
  return props.plain && plainStyle(props);
}, function (props) {
  return !props.plain && basicStyle(props);
}, function (props) {
  return props.primary && primaryStyle(props);
}, function (props) {
  return !props.disabled && !props.selected && !props.focus && hoverStyle;
}, function (props) {
  return !props.disabled && props.active && activeButtonStyle(props);
}, function (props) {
  return props.disabled && props.theme.button && props.theme.button.disabled && disabledButtonStyle(props);
}, function (props) {
  return (!props.plain || props.focusIndicator) && (0,utils_styles/* focusStyle */.jq)();
}, (0,utils_styles/* unfocusStyle */.GA)(), function (props) {
  return !props.plain && props.theme.button.transition && "\n    transition-property: " + props.theme.button.transition.properties.join(',') + ";\n    transition-duration: " + props.theme.button.transition.duration + "s;\n    transition-timing-function: " + props.theme.button.transition.timing + ";\n  ";
}, function (props) {
  return props.fillContainer && StyledButton_fillStyle(props.fillContainer);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    line-height: 0;\n  ";
}, function (props) {
  return props.pad && props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.theme.button && props.theme.button.extend;
});
StyledButton.defaultProps = {};
Object.setPrototypeOf(StyledButton.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Button/StyledButtonKind.js




var StyledButtonKind_radiusStyle = function radiusStyle(props) {
  var size = props.sizeProp; // caller has specified a themeObj to use for styling
  // relevant for cases like pagination which looks to theme.pagination.button

  var themeObj = typeof props.kind === 'object' ? props.kind : props.theme.button;
  if (size && themeObj.size && themeObj.size[size]) return (0,styled_components_browser_esm.css)(["border-radius:", ";"], themeObj.size[size].border.radius);
  if (themeObj.border && themeObj.border.radius) return (0,styled_components_browser_esm.css)(["border-radius:", ";"], themeObj.border.radius);
  return '';
};

var StyledButtonKind_fontStyle = function fontStyle(props) {
  var size = props.sizeProp || 'medium';
  var data = props.theme.text[size];
  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var padFromTheme = function padFromTheme(size, theme, themeObj) {
  if (size === void 0) {
    size = 'medium';
  }

  if (size && themeObj.size && themeObj.size[size] && themeObj.size[size].pad) {
    return {
      vertical: themeObj.size[size].pad.vertical,
      horizontal: themeObj.size[size].pad.horizontal
    };
  }

  if (theme.button.padding) {
    return {
      vertical: theme.global.edgeSize[theme.button.padding.vertical] || theme.button.padding.vertical,
      horizontal: theme.global.edgeSize[theme.button.padding.horizontal] || theme.button.padding.horizontal
    };
  }

  return undefined;
};

var StyledButtonKind_padStyle = function padStyle(_ref) {
  var size = _ref.sizeProp,
      theme = _ref.theme,
      kind = _ref.kind;
  // caller has specified a themeObj to use for styling
  // relevant for cases like pagination which looks to theme.pagination.button
  var themeObj = typeof kind === 'object' ? kind : theme.button;
  var pad = padFromTheme(size, theme, themeObj);
  return pad ? (0,styled_components_browser_esm.css)(["padding:", " ", ";"], pad.vertical, pad.horizontal) : '';
};

var StyledButtonKind_basicStyle = function basicStyle(props) {
  return (0,styled_components_browser_esm.css)(["border:none;", ";", " ", " ", ""], StyledButtonKind_radiusStyle(props), StyledButtonKind_padStyle(props), StyledButtonKind_fontStyle(props), props.icon && "\n    > svg {\n      display: flex;\n      align-self: center;\n      vertical-align: middle;\n    }\n  ");
};

var getPath = function getPath(theme, path) {
  var obj;

  if (path) {
    obj = theme;
    var parts = path.split('.');

    while (obj && parts.length) {
      obj = obj[parts.shift()];
    }
  }

  return obj;
};

var adjustPadStyle = function adjustPadStyle(pad, width) {
  var offset = (0,mixins/* parseMetricToNum */.gd)(width);
  return (0,styled_components_browser_esm.css)(["padding:", "px ", "px;"], Math.max((0,mixins/* parseMetricToNum */.gd)(pad.vertical) - offset, 0), Math.max((0,mixins/* parseMetricToNum */.gd)(pad.horizontal) - offset, 0));
}; // build up CSS from basic to specific based on the supplied sub-object paths


var kindStyle = function kindStyle(_ref2) {
  var colorValue = _ref2.colorValue,
      kind = _ref2.kind,
      size = _ref2.sizeProp,
      themePaths = _ref2.themePaths,
      theme = _ref2.theme;
  var styles = []; // caller has specified a themeObj to use for styling
  // relevant for cases like pagination which looks to theme.pagination.button

  var themeObj = typeof kind === 'object' ? kind : theme.button;
  var pad = padFromTheme(size, theme, themeObj);
  themePaths.base.forEach(function (themePath) {
    var obj = getPath(themeObj, themePath);

    if (obj) {
      styles.push((0,utils_styles/* kindPartStyles */.mJ)(obj, theme, colorValue));

      if (obj.border && obj.border.width && pad && !obj.padding) {
        // Adjust padding from the button.size or just top button.padding
        // to deal with the kind's border width. But don't override any
        // padding in the kind itself for backward compatibility
        styles.push(adjustPadStyle(pad, obj.border.width));
      }
    }
  }); // do the styling from the root of the object if caller passes one

  if (!themePaths.base.length && typeof kind === 'object') {
    var obj = kind;

    if (obj) {
      styles.push((0,utils_styles/* kindPartStyles */.mJ)(obj, theme, colorValue));

      if (obj.border && obj.border.width && pad && !obj.padding) {
        // Adjust padding from the button.size or just top button.padding
        // to deal with the kind's border width. But don't override any
        // padding in the kind itself for backward compatibility
        styles.push(adjustPadStyle(pad, obj.border.width));
      }
    }
  }

  themePaths.hover.forEach(function (themePath) {
    var obj = getPath(themeObj, themePath);

    if (obj) {
      var partStyles = (0,utils_styles/* kindPartStyles */.mJ)(obj, theme);
      var adjPadStyles = '';

      if (obj.border && obj.border.width && pad && !obj.padding) {
        // Adjust padding from the button.size or just top button.padding
        // to deal with the hover's border width. But don't override any
        // padding in the hover or hover.kind itself for backward compatibility
        adjPadStyles = adjustPadStyle(pad, obj.border.width);
      }

      if (partStyles.length > 0) {
        styles.push((0,styled_components_browser_esm.css)(["&:hover{", " ", "}"], partStyles, adjPadStyles));
      }
    }
  });
  return styles;
};

var hoverIndicatorStyle = function hoverIndicatorStyle(_ref3) {
  var hoverIndicator = _ref3.hoverIndicator,
      theme = _ref3.theme;
  var themishObj = {};
  if (hoverIndicator === true || hoverIndicator === 'background') themishObj.background = theme.global.hover.background;else if (hoverIndicator.color || hoverIndicator.background) {
    if (hoverIndicator.background) themishObj.background = hoverIndicator.background;
    if (hoverIndicator.color) themishObj.color = hoverIndicator.color;
  } else themishObj.background = hoverIndicator;
  var styles = (0,utils_styles/* kindPartStyles */.mJ)(themishObj, theme);
  if (styles.length > 0) return (0,styled_components_browser_esm.css)(["&:hover{", "}"], styles);
  return '';
};

var StyledButtonKind_fillStyle = function fillStyle(fillContainer) {
  if (fillContainer === 'horizontal') {
    return 'width: 100%;';
  }

  if (fillContainer === 'vertical') {
    return 'height: 100%;';
  }

  if (fillContainer) {
    return "\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ";
  }

  return undefined;
};

var StyledButtonKind_plainStyle = function plainStyle(props) {
  return (0,styled_components_browser_esm.css)(["outline:none;border:none;padding:0;text-align:inherit;color:inherit;", ""], props.icon && "\n    > svg {\n      display: flex;\n      align-self: center;\n      vertical-align: middle;\n    }\n  ");
};

var StyledButtonKind = styled_components_browser_esm["default"].button.withConfig({
  // don't let kind attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['kind'].includes(prop) && defaultValidatorFn(prop);
  }
}).withConfig({
  displayName: "StyledButtonKind",
  componentId: "sc-1vhfpnt-0"
})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;", " ", " ", " ", " ", " ", " ", " ", " &:focus{", "}&:focus:not(:focus-visible){", "}", " ", " ", ""], utils_styles/* genericStyles */.$G, function (props) {
  return props.plain && StyledButtonKind_plainStyle(props);
}, function (props) {
  return !props.disabled && props.active && utils_background/* activeStyle */.Ii;
}, function (props) {
  return !props.plain && StyledButtonKind_basicStyle(props);
}, function (props) {
  return !props.plain && kindStyle(props);
}, function (props) {
  return !props.plain && props.align && "\n    text-align: " + props.align + ";\n    ";
}, function (props) {
  return !props.disabled && props.hoverIndicator && hoverIndicatorStyle(props);
}, function (props) {
  return props.disabled && (0,utils_styles/* disabledStyle */.Cv)(props.theme.button.disabled.opacity);
}, function (props) {
  return (!props.plain || props.focusIndicator) && (0,utils_styles/* focusStyle */.jq)();
}, (0,utils_styles/* unfocusStyle */.GA)(), function (props) {
  return !props.plain && props.theme.button.transition && "\n    transition-property: " + props.theme.button.transition.properties.join(',') + ";\n    transition-duration: " + props.theme.button.transition.duration + "s;\n    transition-timing-function: " + props.theme.button.transition.timing + ";\n  ";
}, function (props) {
  return props.fillContainer && StyledButtonKind_fillStyle(props.fillContainer);
}, function (props) {
  return props.theme.button && props.theme.button.extend;
});
StyledButtonKind.defaultProps = {};
Object.setPrototypeOf(StyledButtonKind.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Button/Button.js
var Button_excluded = ["active", "align", "aria-label", "badge", "color", "children", "disabled", "icon", "focusIndicator", "gap", "fill", "href", "justify", "kind", "label", "onBlur", "onClick", "onFocus", "onMouseOut", "onMouseOver", "plain", "primary", "reverse", "secondary", "selected", "size", "tip", "type", "a11yTitle", "as"];

function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










 // We have two Styled* components to separate
// the newer default|primary|secondary approach,
// which we use the term "kind" to refer to,
// from the previous approach. Hopefully, when we get to grommet v3,
// we can drop the old way and just use kind.
//
// In the kind approach, we rely on the basic structure of the theme
// being repeated. For example: button.default, button.active,
// button.active.default all refer to a similar object containing
// { background, border, color, padding }.
// This allows us to use the same code to evaluate color and generate CSS.
// We just need to build up CSS, since selectors override previous ones.
// See StyledButtonKind.kindStyles() for this.
// And we build down to determine icon color, once we have a color from
// the latest applicable state, we can stop. See Button.getIconColor() for this.
// backgroundAndTextColor() is used in both cases to ensure we are determining
// color in the same way, so the icon and label align.
// only when default is in the theme
// Used to get the color for the icon to match what StyledButtonKind
// and backgroundStyle() will do for the label.
// The paths are ordered from basic to specific. Go through them
// specific to base until we find one that has a color and use that.

var getIconColor = function getIconColor(paths, theme, colorProp, kind) {
  if (paths === void 0) {
    paths = [];
  }

  var result = [];
  var index = paths.length - 1; // caller has specified a themeObj to use for styling
  // relevant for cases like pagination which looks to theme.pagination.button

  if (typeof kind === 'object') index = 0; // stop when we have a color or no more paths

  while (index >= 0 && !result[1]) {
    var obj = typeof kind === 'object' && kind || theme.button; // find the sub-object under the button them that corresponds with this path
    // for example: 'active.primary'

    if (paths[index]) {
      var parts = paths[index].split('.');

      while (obj && parts.length) {
        obj = obj[parts.shift()];
      }
    }

    if (obj) {
      // use passed in color for background if the theme has a background color
      var background = colorProp && obj.background && obj.background.color ? colorProp : obj.background; // if theme object explicitly sets the color to undefined, pass false
      // to indicate that the theme doesn't want any text color

      var objColor = obj.color || (Object.prototype.hasOwnProperty.call(obj, 'color') && obj.color === undefined ? false : undefined); // use passed in color for text if the theme doesn't have
      // background or border color

      var color = colorProp && (!obj.background || !obj.background.color) && (!obj.border || !obj.border.color) ? colorProp : objColor;
      result = (0,utils_background/* backgroundAndTextColors */.Ap)(background, color, theme);
    }

    index -= 1;
  }

  return result[1] || undefined;
};

var getPropertyColor = function getPropertyColor(property, paths, theme, kind, primary) {
  if (paths === void 0) {
    paths = [];
  }

  var result;

  if (kind) {
    var obj = typeof kind === 'object' && kind || theme.button; // index 0 is default state

    if (paths[0]) {
      var parts = paths[0].split('.');

      while (obj && parts.length) {
        obj = obj[parts.shift()];
      }
    }

    if (obj) {
      result = obj[property] || obj[property] && obj[property].color;
    }
  } else if (primary && theme && theme.button && theme.button.primary) {
    result = theme.button.primary[property] || theme.button.primary[property] && theme.button.primary[property].color;
  } else {
    result = theme && theme.button && theme.button[property] || theme && theme.button && theme.button[property] && theme.button[property].color;
  }

  return result;
};

var Button = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var active = _ref.active,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'center' : _ref$align,
      ariaLabel = _ref['aria-label'],
      badgeProp = _ref.badge,
      color = _ref.color,
      children = _ref.children,
      disabled = _ref.disabled,
      icon = _ref.icon,
      _ref$focusIndicator = _ref.focusIndicator,
      focusIndicator = _ref$focusIndicator === void 0 ? true : _ref$focusIndicator,
      gap = _ref.gap,
      fill = _ref.fill,
      href = _ref.href,
      justify = _ref.justify,
      kindArg = _ref.kind,
      label = _ref.label,
      _onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      _onFocus = _ref.onFocus,
      onMouseOut = _ref.onMouseOut,
      onMouseOver = _ref.onMouseOver,
      plain = _ref.plain,
      primary = _ref.primary,
      reverse = _ref.reverse,
      secondary = _ref.secondary,
      selected = _ref.selected,
      size = _ref.size,
      tip = _ref.tip,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$a11yTitle = _ref.a11yTitle,
      a11yTitle = _ref$a11yTitle === void 0 ? typeof tip === 'string' ? tip : undefined : _ref$a11yTitle,
      as = _ref.as,
      rest = Button_objectWithoutPropertiesLoose(_ref, Button_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;

  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = (0,react.useState)(false),
      hover = _useState2[0],
      setHover = _useState2[1];

  if ((icon || label) && children) {
    console.warn('Button should not have children if icon or label is provided');
  } // kindArg is object if we are referencing a theme object
  // outside of theme.button


  var kindObj = (0,react.useMemo)(function () {
    return typeof kindArg === 'object';
  }, [kindArg]); // if the theme has button.default, what kind of Button is this

  var kind = (0,react.useMemo)(function () {
    if (theme.button["default"] || kindObj) {
      if (kindArg) return kindArg;
      if (primary) return 'primary';
      if (secondary) return 'secondary';
      return 'default';
    }

    return undefined; // pre-default, no kind
  }, [kindArg, kindObj, primary, secondary, theme]); // When we have a kind and are not plain, themePaths stores the relative
  // paths within the theme for the current kind and state of the button.
  // These paths are used with getIconColor() above and kindStyle() within
  // StyledButtonKind.

  var themePaths = (0,react.useMemo)(function () {
    if (!kind || plain) return undefined;
    var result = {
      base: [],
      hover: []
    };
    if (!kindObj) result.base.push(kind);

    if (selected) {
      result.base.push('selected');
      if (!kindObj) result.base.push("selected." + kind);
    }

    if (disabled) {
      result.base.push('disabled');
      if (!kindObj) result.base.push("disabled." + kind);
    } else {
      if (active) {
        result.base.push('active');
        if (!kindObj) result.base.push("active." + kind);
      }

      result.hover.push('hover');
      if (!kindObj) result.hover.push("hover." + kind);

      if (active) {
        result.hover.push("hover.active");

        if (!kindObj) {
          result.hover.push("hover.active." + kind);
        }
      }
    }

    return result;
  }, [active, disabled, kind, kindObj, plain, selected]); // only used when theme does not have button.default

  var isDarkBackground = function isDarkBackground() {
    var backgroundColor = (0,utils_background/* normalizeBackground */.rj)((0,colors/* normalizeColor */.ut)(color || theme.button.primary && theme.button.primary.color || theme.global.colors.control || 'brand', theme), theme);
    return (0,colors/* colorIsDark */.Pi)(backgroundColor, theme);
  };

  var onMouseOverButton = function onMouseOverButton(event) {
    setHover(true);

    if (onMouseOver) {
      onMouseOver(event);
    }
  };

  var onMouseOutButton = function onMouseOutButton(event) {
    setHover(false);

    if (onMouseOut) {
      onMouseOut(event);
    }
  };

  var buttonIcon = icon; // only change color if user did not specify the color themselves...

  if (icon && !icon.props.color) {
    if (kind) {
      if (!plain) {
        // match what the label will use
        var iconColor = hover && getIconColor(themePaths.hover, theme) || getIconColor(themePaths.base, theme, color, kind);
        if (iconColor) buttonIcon = /*#__PURE__*/(0,react.cloneElement)(icon, {
          color: iconColor
        });
      }
    } else if (primary) {
      buttonIcon = /*#__PURE__*/(0,react.cloneElement)(icon, {
        color: theme.global.colors.text[isDarkBackground() ? 'dark' : 'light']
      });
    }
  }

  var domTag = !as && href ? 'a' : as;
  var first = reverse ? label : buttonIcon;
  var second = reverse ? buttonIcon : label;
  var contents;

  if (first && second) {
    contents = /*#__PURE__*/react.createElement(Box/* Box */.x, {
      direction: "row",
      align: "center",
      justify: justify || (align === 'center' ? 'center' : 'between'),
      gap: gap || theme.button.gap,
      responsive: false
    }, first, second);
  } else if (typeof children === 'function') {
    contents = children({
      disabled: disabled,
      hover: hover,
      focus: focus
    });
  } else {
    contents = first || second || children;
  }

  var background = getPropertyColor('background', themePaths && themePaths.base, theme, kind, primary);
  var border = getPropertyColor('border', themePaths && themePaths.base, theme, kind, primary); // set the badge relative to the button content
  // when the button doesn't have background or border
  // (!kind && icon && !label) is necessary because for old button logic,
  // if button has icon but not label, it will be considered "plain",
  // so no border or background will be applied

  var innerBadge = !background && !border || !kind && icon && !label;

  if (badgeProp && innerBadge) {
    contents = /*#__PURE__*/react.createElement(Badge, {
      content: badgeProp
    }, contents);
  }

  var styledButtonResult;

  if (kind) {
    styledButtonResult = /*#__PURE__*/react.createElement(StyledButtonKind, Button_extends({}, rest, {
      as: domTag,
      ref: ref,
      active: active,
      align: align,
      "aria-label": ariaLabel || a11yTitle,
      badge: badgeProp,
      colorValue: color,
      disabled: disabled,
      hasIcon: !!icon,
      gap: gap,
      hasLabel: !!label,
      icon: icon,
      fillContainer: fill,
      focus: focus,
      focusIndicator: focusIndicator,
      href: href,
      kind: kind,
      themePaths: themePaths,
      onClick: onClick,
      onFocus: function onFocus(event) {
        setFocus(true);
        if (_onFocus) _onFocus(event);
      },
      onBlur: function onBlur(event) {
        setFocus(false);
        if (_onBlur) _onBlur(event);
      },
      onMouseOver: onMouseOverButton,
      onMouseOut: onMouseOutButton,
      plain: plain || react.Children.count(children) > 0,
      primary: primary,
      sizeProp: size,
      type: !href ? type : undefined
    }), contents);
  } else {
    styledButtonResult = /*#__PURE__*/react.createElement(StyledButton, Button_extends({}, rest, {
      as: domTag,
      ref: ref,
      "aria-label": ariaLabel || a11yTitle,
      colorValue: color,
      active: active,
      selected: selected,
      disabled: disabled,
      hasIcon: !!icon,
      gap: gap,
      hasLabel: !!label,
      fillContainer: fill,
      focus: focus,
      focusIndicator: focusIndicator,
      href: href,
      kind: kind,
      themePaths: themePaths,
      onClick: onClick,
      onFocus: function onFocus(event) {
        setFocus(true);
        if (_onFocus) _onFocus(event);
      },
      onBlur: function onBlur(event) {
        setFocus(false);
        if (_onBlur) _onBlur(event);
      },
      onMouseOver: onMouseOverButton,
      onMouseOut: onMouseOutButton,
      pad: !plain,
      plain: typeof plain !== 'undefined' ? plain : react.Children.count(children) > 0 || icon && !label,
      primary: primary,
      sizeProp: size,
      type: !href ? type : undefined
    }), contents);
  }

  if (tip) {
    if (typeof tip === 'string') {
      styledButtonResult = /*#__PURE__*/react.createElement(Tip/* Tip */.C, {
        content: tip
      }, styledButtonResult);
    } else {
      styledButtonResult = /*#__PURE__*/react.createElement(Tip/* Tip */.C, tip, styledButtonResult);
    }
  } // if button has background or border, place badge relative
  // to outer edge of button


  if (badgeProp && !innerBadge) {
    styledButtonResult = /*#__PURE__*/react.createElement(Badge, {
      content: badgeProp
    }, styledButtonResult);
  }

  return styledButtonResult;
});
Button.displayName = 'Button';
Button.propTypes = ButtonPropTypes;


/***/ }),

/***/ 5865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Drop)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/DOM.js
var DOM = __webpack_require__(1205);
// EXTERNAL MODULE: ./node_modules/grommet/es6/contexts/RootsContext.js
var RootsContext = __webpack_require__(8601);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/FocusedContainer.js
var _excluded = ["hidden", "restrictScroll", "children", "trapFocus"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var FocusedContainer = function FocusedContainer(_ref) {
  var _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      _ref$restrictScroll = _ref.restrictScroll,
      restrictScroll = _ref$restrictScroll === void 0 ? false : _ref$restrictScroll,
      children = _ref.children,
      trapFocus = _ref.trapFocus,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0,react.useState)(''),
      bodyOverflowStyle = _useState[0],
      setBodyOverflowStyle = _useState[1];

  var ref = (0,react.useRef)(null);
  var roots = (0,react.useContext)(RootsContext/* RootsContext */.Y);

  var _useState2 = (0,react.useState)(roots),
      nextRoots = _useState2[0],
      setNextRoots = _useState2[1];

  (0,react.useEffect)(function () {
    // make sure value of null is not added to array
    if (ref.current) setNextRoots([].concat(roots, [ref.current]));
  }, [roots]);
  (0,react.useEffect)(function () {
    if (bodyOverflowStyle !== 'hidden' && !hidden && restrictScroll && trapFocus) {
      setBodyOverflowStyle(document.body.style.overflow);
      document.body.style.overflow = 'hidden';
    }

    return function () {
      if (bodyOverflowStyle !== 'hidden' && !hidden && restrictScroll && trapFocus) {
        document.body.style.overflow = bodyOverflowStyle;
      }
    };
  }, [bodyOverflowStyle, hidden, trapFocus, restrictScroll]);
  (0,react.useEffect)(function () {
    var timer = setTimeout(function () {
      if (!hidden && trapFocus && roots && roots[0]) {
        roots.forEach(DOM/* makeNodeUnfocusable */.Ui);
      }
    }, 0);
    return function () {
      // remove trap and restore ability to focus on the last root only
      if (roots && roots[0]) (0,DOM/* makeNodeFocusable */.e$)(roots[roots.length - 1]);
      clearTimeout(timer);
    };
  }, [hidden, roots, trapFocus]);
  return /*#__PURE__*/react.createElement(RootsContext/* RootsContext.Provider */.Y.Provider, {
    value: nextRoots
  }, /*#__PURE__*/react.createElement("div", _extends({
    ref: ref,
    "aria-hidden": hidden
  }, rest), children));
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/PortalContext.js

var PortalContext = /*#__PURE__*/react.createContext(undefined);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/mixins.js
var mixins = __webpack_require__(9207);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/background.js
var utils_background = __webpack_require__(6093);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Box/Box.js + 3 modules
var Box = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Keyboard/Keyboard.js + 1 modules
var Keyboard = __webpack_require__(2282);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Drop/StyledDrop.js





function getTransformOriginStyle(align) {
  var vertical = 'top';

  if (align.bottom) {
    vertical = 'bottom';
  }

  var horizontal = 'left';

  if (align.right) {
    horizontal = 'right';
  }

  return vertical + " " + horizontal;
}

var dropKeyFrames = (0,styled_components_browser_esm.keyframes)(["0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}"]); // The desired margin may be adjusted depending on drops alignment

var marginStyle = function marginStyle(theme, align, data, responsive, marginProp) {
  var margin = theme.global.edgeSize[data] || data;
  var adjustedMargin = {}; // if user provides CSS string such as '50px 12px', apply that always

  var customCSS = typeof margin === 'string' && margin.split(' ').length > 1;

  if (theme.global.drop.intelligentMargin === true && !customCSS && typeof margin === 'string') {
    if (align.top === 'bottom') adjustedMargin.top = margin;else if (align.bottom === 'top') adjustedMargin.bottom = margin;
    if (align.right === 'left') adjustedMargin.left = "-" + margin;else if (align.left === 'right') adjustedMargin.left = margin;
    if (!Object.keys(adjustedMargin)) adjustedMargin = 'none';
  } else {
    return (0,styles/* edgeStyle */.oW)('margin', marginProp || theme.global.drop.margin, responsive, theme.global.edgeSize.responsiveBreakpoint, theme);
  }

  return (0,styles/* edgeStyle */.oW)('margin', adjustedMargin, responsive, theme.global.edgeSize.responsiveBreakpoint, theme);
};

var StyledDrop = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledDrop",
  componentId: "sc-16s5rx8-0"
})(["", " ", " position:fixed;z-index:", ";outline:none;", " ", " opacity:0;transform-origin:", ";animation:", " 0.1s forwards;animation-delay:0.01s;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){display:flex;align-items:stretch;}", ""], styles/* baseStyle */.Oh, function (props) {
  return !props.plain && (props.round && (0,styles/* roundStyle */.bS)(props.round, true, props.theme) || "border-radius: " + props.theme.global.drop.border.radius + ";");
}, function (props) {
  return props.theme.global.drop.zIndex;
}, function (props) {
  return !props.plain && (0,utils_background/* backgroundStyle */.Nu)(props.background || props.theme.global.drop.background, props.theme);
}, function (props) {
  return !props.plain && (props.margin || props.theme.global.drop.margin) && props.theme.global && marginStyle(props.theme, props.alignProp, props.theme.global.drop.margin, props.responsive, props.margin);
}, function (props) {
  return getTransformOriginStyle(props.alignProp);
}, dropKeyFrames, function (props) {
  return props.theme.global.drop && props.theme.global.drop.extend;
});
StyledDrop.defaultProps = {};
Object.setPrototypeOf(StyledDrop.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Drop/DropContainer.js
var DropContainer_excluded = ["a11yTitle", "aria-label", "align", "background", "onAlign", "children", "dropTarget", "elevation", "onClickOutside", "onEsc", "onKeyDown", "overflow", "plain", "responsive", "restrictFocus", "stretch", "trapFocus"];

function DropContainer_extends() { DropContainer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropContainer_extends.apply(this, arguments); }

function DropContainer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








 // using react synthetic event to be able to stop propagation that
// would otherwise close the layer on ESC.

var preventLayerClose = function preventLayerClose(event) {
  var key = event.keyCode ? event.keyCode : event.which;

  if (key === 27) {
    event.stopPropagation();
  }
};

var defaultAlign = {
  top: 'top',
  left: 'left'
};
var defaultPortalContext = [];
var DropContainer = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      ariaLabel = _ref['aria-label'],
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? defaultAlign : _ref$align,
      background = _ref.background,
      onAlign = _ref.onAlign,
      children = _ref.children,
      dropTarget = _ref.dropTarget,
      elevation = _ref.elevation,
      onClickOutside = _ref.onClickOutside,
      onEsc = _ref.onEsc,
      onKeyDown = _ref.onKeyDown,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === void 0 ? 'auto' : _ref$overflow,
      plain = _ref.plain,
      responsive = _ref.responsive,
      restrictFocus = _ref.restrictFocus,
      _ref$stretch = _ref.stretch,
      stretch = _ref$stretch === void 0 ? 'width' : _ref$stretch,
      trapFocus = _ref.trapFocus,
      rest = DropContainer_objectWithoutPropertiesLoose(_ref, DropContainer_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;
  var portalContext = (0,react.useContext)(PortalContext) || defaultPortalContext;
  var portalId = (0,react.useMemo)(function () {
    return portalContext.length;
  }, [portalContext]);
  var nextPortalContext = (0,react.useMemo)(function () {
    return [].concat(portalContext, [portalId]);
  }, [portalContext, portalId]);
  var dropRef = (0,react.useRef)();
  (0,react.useEffect)(function () {
    var notifyAlign = function notifyAlign() {
      var styleCurrent = (ref || dropRef).current.style;
      var alignControl = styleCurrent.top !== '' ? 'top' : 'bottom';
      onAlign(alignControl);
    }; // We try to preserve the maxHeight as changing it causes any scroll
    // position to be lost. We set the maxHeight on mount and if the window
    // is resized.


    var place = function place(preserveHeight) {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var target = dropTarget;
      var container = (ref || dropRef).current;

      if (container && target) {
        // clear prior styling
        container.style.left = '';
        container.style.top = '';
        container.style.bottom = '';
        container.style.width = '';

        if (!preserveHeight) {
          container.style.maxHeight = '';
        } // get bounds


        var targetRect = target.getBoundingClientRect();
        var containerRect = container.getBoundingClientRect(); // determine width

        var width;

        if (stretch) {
          width = Math.min(stretch === 'align' ? Math.min(targetRect.width, containerRect.width) : Math.max(targetRect.width, containerRect.width), windowWidth);
        } else {
          width = Math.min(containerRect.width, windowWidth);
        } // set left position


        var left;

        if (align.left) {
          if (align.left === 'left') {
            left = targetRect.left;
          } else if (align.left === 'right') {
            left = targetRect.left + targetRect.width;
          }
        } else if (align.right) {
          if (align.right === 'left') {
            left = targetRect.left - width;
          } else if (align.right === 'right') {
            left = targetRect.left + targetRect.width - width;
          }
        } else {
          left = targetRect.left + targetRect.width / 2 - width / 2;
        }

        if (left + width > windowWidth) {
          left -= left + width - windowWidth;
        } else if (left < 0) {
          left = 0;
        } // set top or bottom position


        var top;
        var bottom;
        var maxHeight = containerRect.height;

        if (align.top) {
          if (align.top === 'top') {
            top = targetRect.top;
          } else {
            top = targetRect.bottom;
          } // Calculate visible area underneath the control w.r.t window height


          var percentVisibleAreaBelow = 100 - targetRect.bottom / windowHeight * 100; // Check whether it is within 20% from bottom of the window or
          // visible area to flip the control
          // DropContainer doesn't fit well within visible area when
          // percentVisibleAreaBelow value<=20%
          // There is enough space from DropContainer to bottom of the window
          // when percentVisibleAreaBelow>20%.

          if (windowHeight === top || percentVisibleAreaBelow <= 20) {
            // We need more room than we have.
            // We put it below, but there's more room above, put it above
            top = '';

            if (align.top === 'bottom') {
              bottom = targetRect.top;
            } else {
              bottom = targetRect.bottom;
            }

            maxHeight = bottom;
            container.style.maxHeight = maxHeight + "px";
          } else if (top > 0) {
            maxHeight = windowHeight - top;
            container.style.maxHeight = maxHeight + "px";
          } else {
            maxHeight = windowHeight - top;
          }
        } else if (align.bottom) {
          if (align.bottom === 'bottom') {
            bottom = targetRect.bottom;
          } else {
            bottom = targetRect.top;
          }

          maxHeight = bottom;
          container.style.maxHeight = maxHeight + "px";
        } else {
          // center
          top = targetRect.top + targetRect.height / 2 - containerRect.height / 2;
          maxHeight = windowHeight - top;
        } // if we can't fit it all, or we're rather close,
        // see if there's more room the other direction


        if (responsive && (containerRect.height > maxHeight || maxHeight < windowHeight / 10)) {
          // We need more room than we have.
          if (align.top && top > windowHeight / 2) {
            // We put it below, but there's more room above, put it above
            top = '';

            if (align.top === 'bottom') {
              // top = Math.max(targetRect.top - containerRect.height, 0);
              // maxHeight = targetRect.top - top;
              bottom = targetRect.top;
            } else {
              // top = Math.max(targetRect.bottom - containerRect.height, 0);
              // maxHeight = targetRect.bottom - top;
              bottom = targetRect.bottom;
            }

            maxHeight = bottom;
          } else if (align.bottom && maxHeight < windowHeight / 2) {
            // We put it above but there's more room below, put it below
            bottom = '';

            if (align.bottom === 'bottom') {
              top = targetRect.top;
            } else {
              top = targetRect.bottom;
            }

            maxHeight = windowHeight - top;
          }
        }

        container.style.left = left + "px";

        if (stretch) {
          // offset width by 0.1 to avoid a bug in ie11 that
          // unnecessarily wraps the text if width is the same
          // NOTE: turned off for now
          container.style.width = width + 0.1 + "px";
        } // the (position:absolute + scrollTop)
        // is presenting issues with desktop scroll flickering


        if (top !== '') {
          container.style.top = top + "px";
        }

        if (bottom !== '') {
          container.style.bottom = windowHeight - bottom + "px";
        }

        if (!preserveHeight) {
          if (theme.drop && theme.drop.maxHeight) {
            maxHeight = Math.min(maxHeight, (0,mixins/* parseMetricToNum */.gd)(theme.drop.maxHeight));
          }

          container.style.maxHeight = maxHeight + "px";
        }
      }

      if (onAlign) notifyAlign();
    };

    var scrollParents;

    var addScrollListeners = function addScrollListeners() {
      scrollParents = (0,DOM/* findScrollParents */.sq)(dropTarget);
      scrollParents.forEach(function (scrollParent) {
        return scrollParent.addEventListener('scroll', place);
      });
    };

    var removeScrollListeners = function removeScrollListeners() {
      scrollParents.forEach(function (scrollParent) {
        return scrollParent.removeEventListener('scroll', place);
      });
      scrollParents = [];
    };

    var onClickDocument = function onClickDocument(event) {
      // determine which portal id the target is in, if any
      var clickedPortalId = null;
      var node = event.target;

      while (clickedPortalId === null && node !== document) {
        var attr = node.getAttribute('data-g-portal-id');
        if (attr !== null) clickedPortalId = parseInt(attr, 10);
        node = node.parentNode;
      }

      if (clickedPortalId === null || portalContext.indexOf(clickedPortalId) !== -1) {
        onClickOutside(event);
      }
    };

    var onResize = function onResize() {
      removeScrollListeners();
      addScrollListeners();
      place(false);
    };

    addScrollListeners();
    window.addEventListener('resize', onResize);

    if (onClickOutside) {
      document.addEventListener('mousedown', onClickDocument);
    }

    place(false);
    return function () {
      removeScrollListeners();
      window.removeEventListener('resize', onResize);

      if (onClickOutside) {
        document.removeEventListener('mousedown', onClickDocument);
      }
    };
  }, [align, onAlign, dropTarget, onClickOutside, portalContext, portalId, ref, responsive, restrictFocus, stretch, theme.drop]);
  (0,react.useEffect)(function () {
    if (restrictFocus) {
      (ref || dropRef).current.focus();
    }
  }, [ref, restrictFocus]);
  var content = /*#__PURE__*/react.createElement(StyledDrop, DropContainer_extends({
    "aria-label": a11yTitle || ariaLabel,
    ref: ref || dropRef,
    as: Box/* Box */.x,
    background: background,
    plain: plain,
    elevation: !plain ? elevation || theme.global.drop.elevation || theme.global.drop.shadowSize || // backward compatibility
    'small' : undefined,
    tabIndex: "-1",
    alignProp: align,
    overflow: overflow,
    "data-g-portal-id": portalId
  }, rest), children);
  var themeContextValue = (0,react.useMemo)(function () {
    var dark;

    if (background || theme.global.drop.background) {
      dark = (0,utils_background/* backgroundIsDark */.im)(background || theme.global.drop.background, theme);
    }

    return DropContainer_extends({}, theme, {
      dark: dark
    });
  }, [background, theme]);
  var dark = themeContextValue.dark;

  if (dark !== undefined && dark !== theme.dark) {
    content = /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
      value: themeContextValue
    }, content);
  }

  return /*#__PURE__*/react.createElement(PortalContext.Provider, {
    value: nextPortalContext
  }, /*#__PURE__*/react.createElement(FocusedContainer, {
    onKeyDown: onEsc && preventLayerClose,
    trapFocus: trapFocus
  }, /*#__PURE__*/react.createElement(Keyboard/* Keyboard */.N // should capture keyboard event before other elements,
  // such as Layer
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  , {
    capture: true,
    onEsc: onEsc ? function (event) {
      event.stopPropagation();
      onEsc(event);
    } : undefined,
    onKeyDown: onKeyDown,
    target: "document"
  }, content)));
});

// EXTERNAL MODULE: ./node_modules/grommet/es6/contexts/ContainerTargetContext/ContainerTargetContext.js
var ContainerTargetContext = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/general-prop-types.js

var a11yTitlePropType = (prop_types_default()).string;
var alignPropType = prop_types_default().oneOfType([prop_types_default().oneOf(['baseline', 'center', 'end', 'start', 'stretch']), (prop_types_default()).string]);
var colorPropType = prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().shape({
  dark: (prop_types_default()).string,
  light: (prop_types_default()).string
})]);
var backgroundPropType = prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().shape({
  color: colorPropType,
  dark: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string]),
  image: (prop_types_default()).string,
  position: (prop_types_default()).string,
  opacity: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool, (prop_types_default()).number, prop_types_default().oneOf(['weak', 'medium', 'strong'])]),
  repeat: prop_types_default().oneOfType([prop_types_default().oneOf(['no-repeat', 'repeat']), (prop_types_default()).string]),
  size: prop_types_default().oneOfType([prop_types_default().oneOf(['cover', 'contain']), (prop_types_default()).string]),
  light: (prop_types_default()).string
})]);
var backgroundDoc = (/* unused pure expression or super */ null && (backgroundPropType));
var MARGIN_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
var marginProp = prop_types_default().oneOfType([prop_types_default().oneOf(['none'].concat(MARGIN_SIZES)), prop_types_default().shape({
  bottom: prop_types_default().oneOfType([prop_types_default().oneOf(MARGIN_SIZES), (prop_types_default()).string]),
  end: prop_types_default().oneOfType([prop_types_default().oneOf(MARGIN_SIZES), (prop_types_default()).string]),
  horizontal: prop_types_default().oneOfType([prop_types_default().oneOf(MARGIN_SIZES), (prop_types_default()).string]),
  left: prop_types_default().oneOfType([prop_types_default().oneOf(MARGIN_SIZES), (prop_types_default()).string]),
  right: prop_types_default().oneOfType([prop_types_default().oneOf(MARGIN_SIZES), (prop_types_default()).string]),
  start: prop_types_default().oneOfType([prop_types_default().oneOf(MARGIN_SIZES), (prop_types_default()).string]),
  top: prop_types_default().oneOfType([prop_types_default().oneOf(MARGIN_SIZES), (prop_types_default()).string]),
  vertical: prop_types_default().oneOfType([prop_types_default().oneOf(MARGIN_SIZES), (prop_types_default()).string])
}), (prop_types_default()).string]);
var PAD_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
var padPropType = prop_types_default().oneOfType([prop_types_default().oneOf(['none'].concat(PAD_SIZES)), prop_types_default().shape({
  bottom: prop_types_default().oneOfType([prop_types_default().oneOf(PAD_SIZES), (prop_types_default()).string]),
  end: prop_types_default().oneOfType([prop_types_default().oneOf(PAD_SIZES), (prop_types_default()).string]),
  horizontal: prop_types_default().oneOfType([prop_types_default().oneOf(PAD_SIZES), (prop_types_default()).string]),
  left: prop_types_default().oneOfType([prop_types_default().oneOf(PAD_SIZES), (prop_types_default()).string]),
  right: prop_types_default().oneOfType([prop_types_default().oneOf(PAD_SIZES), (prop_types_default()).string]),
  start: prop_types_default().oneOfType([prop_types_default().oneOf(PAD_SIZES), (prop_types_default()).string]),
  top: prop_types_default().oneOfType([prop_types_default().oneOf(PAD_SIZES), (prop_types_default()).string]),
  vertical: prop_types_default().oneOfType([prop_types_default().oneOf(PAD_SIZES), (prop_types_default()).string])
}), (prop_types_default()).string]);
var genericProps = {
  a11yTitle: a11yTitlePropType,
  alignSelf: prop_types_default().oneOf(['start', 'center', 'end', 'stretch']),
  gridArea: (prop_types_default()).string,
  margin: marginProp
};
var elevationPropType = prop_types_default().oneOfType([prop_types_default().oneOf(['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']), (prop_types_default()).string]);
var hoverIndicatorPropType = prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string, prop_types_default().oneOf(['background']), backgroundPropType, prop_types_default().shape({
  background: backgroundPropType,
  elevation: elevationPropType
})]);
var pointPropType = prop_types_default().oneOf(['circle', 'diamond', 'square', 'star', 'triangle', 'triangleDown']);
var patternPropType = prop_types_default().oneOf(['squares', 'circles', 'stripesHorizontal', 'stripesVertical', 'stripesDiagonalDown', 'stripesDiagonalUp']);
var roundPropType = prop_types_default().oneOfType([(prop_types_default()).bool, prop_types_default().oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), (prop_types_default()).string, prop_types_default().shape({
  corner: prop_types_default().oneOf(['top', 'left', 'bottom', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  size: prop_types_default().oneOfType([prop_types_default().oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), (prop_types_default()).string])
})]);
var dimSizeType = prop_types_default().oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']);
var heightPropType = prop_types_default().oneOfType([dimSizeType, (prop_types_default()).string, prop_types_default().shape({
  height: prop_types_default().oneOfType([dimSizeType, (prop_types_default()).string]),
  min: prop_types_default().oneOfType([dimSizeType, (prop_types_default()).string]),
  max: prop_types_default().oneOfType([dimSizeType, (prop_types_default()).string])
})]);
var widthPropType = prop_types_default().oneOfType([dimSizeType, (prop_types_default()).string, prop_types_default().shape({
  width: prop_types_default().oneOfType([dimSizeType, (prop_types_default()).string]),
  min: prop_types_default().oneOfType([dimSizeType, (prop_types_default()).string]),
  max: prop_types_default().oneOfType([dimSizeType, (prop_types_default()).string])
})]);
var OVERFLOW_VALUES = ['auto', 'hidden', 'scroll', 'visible'];
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Drop/propTypes.js

 // if you update values here, make sure to update in Box too.

var dropOverflowPropTypes = prop_types_default().oneOfType([prop_types_default().oneOf(OVERFLOW_VALUES), prop_types_default().shape({
  horizontal: prop_types_default().oneOf(OVERFLOW_VALUES),
  vertical: prop_types_default().oneOf(OVERFLOW_VALUES)
}), (prop_types_default()).string]);
var PropType = {};

if (false) {}

var DropPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Drop/Drop.js
var Drop_excluded = ["inline", "restrictFocus", "target", "trapFocus"];

function Drop_extends() { Drop_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Drop_extends.apply(this, arguments); }

function Drop_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var Drop = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var inline = _ref.inline,
      restrictFocus = _ref.restrictFocus,
      dropTarget = _ref.target,
      _ref$trapFocus = _ref.trapFocus,
      trapFocus = _ref$trapFocus === void 0 ? true : _ref$trapFocus,
      rest = Drop_objectWithoutPropertiesLoose(_ref, Drop_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;

  var _useState = (0,react.useState)(),
      originalFocusedElement = _useState[0],
      setOriginalFocusedElement = _useState[1];

  (0,react.useEffect)(function () {
    return setOriginalFocusedElement(document.activeElement);
  }, []);

  var _useState2 = (0,react.useState)(),
      dropContainer = _useState2[0],
      setDropContainer = _useState2[1];

  var containerTarget = (0,react.useContext)(ContainerTargetContext/* ContainerTargetContext */.c);
  (0,react.useEffect)(function () {
    return setDropContainer(!inline ? (0,DOM/* getNewContainer */.r9)(containerTarget) : undefined);
  }, [containerTarget, inline]); // just a few things to clean up when the Drop is unmounted

  (0,react.useEffect)(function () {
    return function () {
      if (restrictFocus && originalFocusedElement) {
        if (originalFocusedElement.focus) {
          (0,DOM/* setFocusWithoutScroll */.Mv)(originalFocusedElement);
        } else if (originalFocusedElement.parentNode && originalFocusedElement.parentNode.focus) {
          // required for IE11 and Edge
          (0,DOM/* setFocusWithoutScroll */.Mv)(originalFocusedElement.parentNode);
        }
      }

      if (dropContainer) {
        containerTarget.removeChild(dropContainer);
      }
    };
  }, [containerTarget, dropContainer, originalFocusedElement, restrictFocus]);
  var content = /*#__PURE__*/react.createElement(DropContainer, Drop_extends({
    ref: ref,
    dir: theme && theme.dir,
    dropTarget: dropTarget,
    restrictFocus: restrictFocus,
    trapFocus: trapFocus
  }, rest));
  if (inline) return content;
  if (dropContainer) return /*#__PURE__*/(0,react_dom.createPortal)(content, dropContainer);
  return null;
});
Drop.displayName = 'Drop';
Drop.propTypes = DropPropTypes;


/***/ }),

/***/ 5909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ Grid)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/border.js
var border = __webpack_require__(5789);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grid/StyledGrid.js




var fillStyle = function fillStyle(fill) {
  if (!fill) {
    return fill;
  }

  if (fill === 'horizontal') {
    return 'width: 100%;';
  }

  if (fill === 'vertical') {
    return 'height: 100%;';
  }

  return "\n      width: 100%;\n      height: 100%;\n    ";
};

var JUSTIFY_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var justifyStyle = (0,styled_components_browser_esm.css)(["justify-items:", ";"], function (props) {
  return JUSTIFY_MAP[props.justify];
});
var JUSTIFY_CONTENT_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var justifyContentStyle = (0,styled_components_browser_esm.css)(["justify-content:", ";"], function (props) {
  return JUSTIFY_CONTENT_MAP[props.justifyContent];
});

var gapSizes = function gapSizes(props) {
  var result = [];

  if (typeof props.gap === 'string') {
    var size = props.theme.global.edgeSize[props.gap] || props.gap;
    result[0] = size;
    result[1] = size;
  } else if (props.gap) {
    if (props.gap.row) result[0] = props.theme.global.edgeSize[props.gap.row] || props.gap.row;
    if (props.gap.column) result[1] = props.theme.global.edgeSize[props.gap.column] || props.gap.column;
  }

  return result;
};

var gapStyle = function gapStyle(props) {
  var sizes = gapSizes(props);

  if (sizes[0] !== undefined && sizes[1] !== undefined) {
    return "grid-gap: " + sizes[0] + " " + sizes[1] + ";";
  }

  if (sizes[0] !== undefined) {
    return "grid-row-gap: " + sizes[0] + ";";
  }

  if (sizes[1] !== undefined) {
    return "grid-column-gap: " + sizes[1] + ";";
  }

  return '';
};

var SIZE_MAP = {
  flex: '1fr',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var normalizeSize = function normalizeSize(size, props) {
  return SIZE_MAP[size] || props.theme.global.size[size] || size;
};

var getRepeatCount = function getRepeatCount(count) {
  return typeof count === 'number' ? count : "auto-" + (count || 'fit');
};

var getRepeatSize = function getRepeatSize(size, props) {
  if (size === 'flex') return '1fr';
  var gaps = gapSizes(props);
  var min;
  var max;
  var minFill;

  if (Array.isArray(size)) {
    var _size$ = size[0],
        minSize = _size$ === void 0 ? 'auto' : _size$,
        _size$2 = size[1],
        maxSize = _size$2 === void 0 ? 'auto' : _size$2;
    min = normalizeSize(minSize, props);
    if (min.search(/px/) !== -1) minFill = true;
    max = normalizeSize(maxSize, props);

    if (gaps[1] !== undefined) {
      // account for the column gap when using fractional sizes, e.g. 1/3
      if (minSize.indexOf('/') !== -1) min = "calc(" + min + " - (" + gaps[1] + " * (1 - " + minSize + ")))";
      if (maxSize.indexOf('/') !== -1) max = "calc(" + max + " - (" + gaps[1] + " * (1 - " + maxSize + ")))";
    }
  } else {
    min = normalizeSize(size, props);
    if (min.search(/px/) !== -1) minFill = true;
    max = '1fr';

    if (gaps[1] !== undefined) {
      // account for column gap with fractional sizes, e.g. 1/3
      if (size.indexOf('/') !== -1) min = "calc(" + min + " - (" + gaps[1] + " * (1 - " + size + ")))";
    }
  }

  if (minFill) {
    // ensure we never go beyond the container width,
    // for mobile/narrow situations
    min = "min(" + min + ", 100%)";
  }

  return "minmax(" + min + ", " + max + ")";
};

var columnsStyle = function columnsStyle(props) {
  if (Array.isArray(props.columns)) {
    return (0,styled_components_browser_esm.css)(["grid-template-columns:", ";"], props.columns.map(function (s) {
      if (Array.isArray(s)) {
        return "minmax(" + normalizeSize(s[0], props) + ", " + normalizeSize(s[1], props) + ")";
      }

      return normalizeSize(s, props);
    }).join(' '));
  }

  if (typeof props.columns === 'object') {
    return (0,styled_components_browser_esm.css)(["grid-template-columns:repeat( ", ",", " );"], getRepeatCount(props.columns.count), getRepeatSize(props.columns.size, props));
  }

  return (0,styled_components_browser_esm.css)(["grid-template-columns:repeat( auto-fill,", " );"], getRepeatSize(props.columns, props));
};

var rowsStyle = function rowsStyle(props) {
  if (Array.isArray(props.rowsProp)) {
    return (0,styled_components_browser_esm.css)(["grid-template-rows:", ";"], props.rowsProp.map(function (s) {
      if (Array.isArray(s)) {
        return "minmax(" + normalizeSize(s[0], props) + ", " + normalizeSize(s[1], props) + ")";
      }

      return normalizeSize(s, props);
    }).join(' '));
  }

  return (0,styled_components_browser_esm.css)(["grid-auto-rows:", ";"], props.theme.global.size[props.rowsProp]);
};

var areasStyle = function areasStyle(props) {
  // translate areas objects into grid-template-areas syntax
  if (!Array.isArray(props.rowsProp) || !Array.isArray(props.columns)) {
    console.warn('Grid `areas` requires `rows` and `columns` to be arrays.');
  }

  if (Array.isArray(props.areas) && props.areas.every(function (area) {
    return Array.isArray(area);
  })) {
    return "grid-template-areas: " + props.areas.map(function (area) {
      return "\"" + area.join(' ') + "\"";
    }).join(' ') + ";";
  }

  var cells = props.rowsProp.map(function () {
    return props.columns.map(function () {
      return '.';
    });
  });
  props.areas.forEach(function (area) {
    for (var row = area.start[1]; row <= area.end[1]; row += 1) {
      for (var column = area.start[0]; column <= area.end[0]; column += 1) {
        cells[row][column] = area.name;
      }
    }
  });
  return "grid-template-areas: " + cells.map(function (r) {
    return "\"" + r.join(' ') + "\"";
  }).join(' ') + ";";
};

var StyledGrid = styled_components_browser_esm["default"].div.attrs(function (props) {
  return {
    'aria-label': props.a11yTitleProp
  };
}).withConfig({
  displayName: "StyledGrid",
  componentId: "sc-1wofa1l-0"
})(["display:grid;box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styles/* genericStyles */.$G, function (props) {
  return props.border && (0,border/* borderStyle */.$)(props.border, props.responsive, props.theme);
}, function (props) {
  return fillStyle(props.fillContainer);
}, function (props) {
  return props.align && styles/* alignStyle */.GU;
}, function (props) {
  return props.alignContent && styles/* alignContentStyle */.S6;
}, function (props) {
  return props.areas && areasStyle(props);
}, function (props) {
  return props.columns && columnsStyle(props);
}, function (props) {
  return props.gap && gapStyle(props);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.justifyContent && justifyContentStyle;
}, function (props) {
  return props.pad && (0,styles/* edgeStyle */.oW)('padding', props.pad, props.responsive, props.theme.global.edgeSize.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.rowsProp && rowsStyle(props);
}, function (props) {
  return props.heightProp && (0,styles/* heightStyle */.tH)(props.heightProp, props.theme);
}, function (props) {
  return props.widthProp && (0,styles/* widthStyle */.ch)(props.widthProp, props.theme);
}, function (props) {
  return props.theme.grid && props.theme.grid.extend;
});
StyledGrid.defaultProps = {};
Object.setPrototypeOf(StyledGrid.defaultProps, default_props/* defaultProps */.l);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grid/propTypes.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var fixedSizes = (/* unused pure expression or super */ null && (['xsmall', 'small', 'medium', 'large', 'xlarge']));
var sizes = (/* unused pure expression or super */ null && (['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', 'flex', 'auto']));
var edgeSizes = (/* unused pure expression or super */ null && (['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'none']));
var BORDER_SHAPE = prop_types_default().shape({
  color: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().shape({
    dark: (prop_types_default()).string,
    light: (prop_types_default()).string
  })]),
  side: prop_types_default().oneOf(['top', 'left', 'bottom', 'right', 'start', 'end', 'horizontal', 'vertical', 'all', 'between']),
  size: prop_types_default().oneOfType([prop_types_default().oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), (prop_types_default()).string]),
  style: prop_types_default().oneOf(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'hidden'])
});
var PropType = {};

if (false) {}

var GridPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grid/Grid.js
var _excluded = ["a11yTitle", "aria-label", "border", "fill", "height", "responsive", "rows", "tag", "as", "width"];

function Grid_extends() { Grid_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Grid_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Grid = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var a11yTitle = props.a11yTitle,
      ariaLabel = props['aria-label'],
      border = props.border,
      fill = props.fill,
      height = props.height,
      _props$responsive = props.responsive,
      responsive = _props$responsive === void 0 ? true : _props$responsive,
      rows = props.rows,
      tag = props.tag,
      as = props.as,
      width = props.width,
      rest = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/react.createElement(StyledGrid, Grid_extends({
    ref: ref,
    a11yTitleProp: ariaLabel || a11yTitle,
    as: !as && tag ? tag : as,
    border: border,
    fillContainer: fill,
    heightProp: height,
    responsive: responsive,
    rowsProp: rows,
    widthProp: width
  }, rest));
});
Grid.displayName = 'Grid';
Grid.propTypes = GridPropTypes;
Grid.available = typeof window !== 'undefined' && window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');


/***/ }),

/***/ 7902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ Grommet)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/object.js
var object = __webpack_require__(5543);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ThemeContext/propTypes.js

var PropType = {};

if (false) {}

var ThemeContextPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ThemeContext/ThemeContext.js






styled_components_browser_esm.ThemeContext.Extend = function (_ref) {
  var children = _ref.children,
      value = _ref.value;
  return /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Consumer, null, function (theme) {
    return /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
      value: (0,object/* deepMerge */.RH)(theme, value)
    }, children);
  });
};

styled_components_browser_esm.ThemeContext.Extend.propTypes = {
  children: (prop_types_default()).node.isRequired,
  value: prop_types_default().shape({}).isRequired
};
styled_components_browser_esm.ThemeContext.propTypes = ThemeContextPropTypes;

// EXTERNAL MODULE: ./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js + 1 modules
var ResponsiveContext = __webpack_require__(456);
// EXTERNAL MODULE: ./node_modules/grommet/es6/contexts/ContainerTargetContext/ContainerTargetContext.js
var ContainerTargetContext = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/responsive.js
var utils_responsive = __webpack_require__(1862);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/colors.js
var colors = __webpack_require__(6808);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/background.js
var utils_background = __webpack_require__(6093);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/refs.js
var refs = __webpack_require__(7187);
// EXTERNAL MODULE: ./node_modules/grommet/es6/themes/base.js
var base = __webpack_require__(5502);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grommet/StyledGrommet.js




var fullStyle = function fullStyle(full) {
  if (full === 'min') return (0,styled_components_browser_esm.css)(["min-height:100vh;"]);
  return (0,styled_components_browser_esm.css)(["width:100vw;height:100vh;overflow:auto;"]);
};

var StyledGrommet = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledGrommet",
  componentId: "sc-19lkkz7-0"
})(["", " ", " ", " ", " ", ""], function (props) {
  return !props.plain && styles/* baseStyle */.Oh;
}, function (props) {
  return props.full && fullStyle(props.full);
}, function (props) {
  return props.theme.global.font.face;
}, function (props) {
  return props.theme.grommet.extend;
}, function (props) {
  return props.cssVars && Object.keys(props.theme.global.colors).filter(function (k) {
    return typeof props.theme.global.colors[k] === 'string';
  }).map(function (k) {
    return "--" + k + ": " + props.theme.global.colors[k] + ";";
  }).join('\n');
});
StyledGrommet.defaultProps = {};
Object.setPrototypeOf(StyledGrommet.defaultProps, default_props/* defaultProps */.l);

// EXTERNAL MODULE: ./node_modules/grommet/es6/contexts/RootsContext.js
var RootsContext = __webpack_require__(8601);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/OptionsContext.js

var OptionsContext = /*#__PURE__*/react.createContext({});
// EXTERNAL MODULE: ./node_modules/grommet/es6/contexts/MessageContext/MessageContext.js
var MessageContext = __webpack_require__(7598);
// EXTERNAL MODULE: ./node_modules/grommet/es6/languages/default.json
var languages_default = __webpack_require__(7412);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grommet/propTypes.js


var propTypes_PropType = {};

if (false) {}

var GrommetPropTypes = propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grommet/Grommet.js
var _excluded = ["children", "full", "containerTarget", "theme", "options", "messages"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var FullGlobalStyle = (0,styled_components_browser_esm.createGlobalStyle)(["body{margin:0;}"]);

var deviceResponsive = function deviceResponsive(userAgent, theme) {
  // log('--deviceResponsive', userAgent, theme);

  /*
   * Regexes provided for mobile and tablet detection are meant to replace
   * a full-featured specific library due to contributing a considerable size
   * into the bundle.
   *
   * User agents found https://deviceatlas.com/blog/list-of-user-agent-strings
   */
  if (userAgent) {
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent)) {
      return (0,utils_responsive/* getDeviceBreakpoint */.Nf)('tablet', theme);
    }

    if (/Mobile|iPhone|Android/.test(userAgent)) {
      return (0,utils_responsive/* getDeviceBreakpoint */.Nf)('phone', theme);
    }

    return (0,utils_responsive/* getDeviceBreakpoint */.Nf)('computer', theme);
  }

  return undefined;
};

var defaultOptions = {};
var Grommet = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var children = props.children,
      full = props.full,
      _props$containerTarge = props.containerTarget,
      containerTarget = _props$containerTarge === void 0 ? typeof document === 'object' ? document.body : undefined : _props$containerTarge,
      themeProp = props.theme,
      _props$options = props.options,
      options = _props$options === void 0 ? defaultOptions : _props$options,
      messagesProp = props.messages,
      rest = _objectWithoutPropertiesLoose(props, _excluded);

  var background = props.background,
      dir = props.dir,
      themeMode = props.themeMode,
      userAgent = props.userAgent;

  var _useState = (0,react.useState)(),
      stateResponsive = _useState[0],
      setResponsive = _useState[1];

  var _useState2 = (0,react.useState)([]),
      roots = _useState2[0],
      setRoots = _useState2[1];

  var theme = (0,react.useMemo)(function () {
    var nextTheme = (0,object/* deepMerge */.RH)(base/* base */.u, themeProp || {}); // if user provides specific menu alignment, we don't want
    // the defaults to be included at all (can cause issues with controlMirror)
    // override merged value with themeProp value

    if (themeProp && themeProp.menu && themeProp.menu.drop && themeProp.menu.drop.align) {
      delete nextTheme.menu.drop.align;
      nextTheme.menu.drop.align = themeProp.menu.drop.align;
    }

    var themeBackground = nextTheme.global.colors.background;
    nextTheme.dark = (themeMode || nextTheme.defaultMode) === 'dark';
    var color = (0,colors/* normalizeColor */.ut)(background || themeBackground, nextTheme);
    nextTheme.dark = (0,utils_background/* backgroundIsDark */.im)(color, nextTheme);
    nextTheme.baseBackground = background || themeBackground; // This allows DataTable to intelligently set the background of a pinned
    // header or footer.

    nextTheme.background = nextTheme.baseBackground;

    if (dir) {
      nextTheme.dir = dir;
    }

    return nextTheme;
  }, [background, dir, themeMode, themeProp]);
  var messages = (0,react.useMemo)(function () {
    // combine the passed in messages, if any, with the default
    // messages and format function.
    var nextMessages = (0,object/* deepMerge */.RH)(languages_default, (messagesProp == null ? void 0 : messagesProp.messages) || {});
    return {
      messages: nextMessages,
      format: function format(opts) {
        var message = (messagesProp == null ? void 0 : messagesProp.format) && messagesProp.format(opts);
        return typeof message !== 'undefined' ? message : (0,MessageContext/* format */.W)(opts, nextMessages);
      }
    };
  }, [messagesProp]);
  (0,react.useEffect)(function () {
    var onResize = function onResize() {
      setResponsive((0,utils_responsive/* getBreakpoint */.iu)(document.body.clientWidth, theme));
    };

    window.addEventListener('resize', onResize);
    onResize();
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, [theme]);
  var responsive = stateResponsive || deviceResponsive(userAgent, theme) || theme.global.deviceBreakpoints.tablet;
  var grommetRef = (0,refs/* useForwardedRef */.t)(ref);
  (0,react.useEffect)(function () {
    if (grommetRef.current) setRoots([grommetRef.current]);
  }, [grommetRef]);
  return /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
    value: theme
  }, /*#__PURE__*/react.createElement(ResponsiveContext/* ResponsiveContext.Provider */.b.Provider, {
    value: responsive
  }, /*#__PURE__*/react.createElement(RootsContext/* RootsContext.Provider */.Y.Provider, {
    value: roots
  }, /*#__PURE__*/react.createElement(ContainerTargetContext/* ContainerTargetContext.Provider */.c.Provider, {
    value: containerTarget
  }, /*#__PURE__*/react.createElement(OptionsContext.Provider, {
    value: options
  }, /*#__PURE__*/react.createElement(MessageContext/* MessageContext.Provider */.E.Provider, {
    value: messages
  }, /*#__PURE__*/react.createElement(StyledGrommet, _extends({
    full: full
  }, rest, {
    ref: grommetRef
  }), children), full && /*#__PURE__*/react.createElement(FullGlobalStyle, null)))))));
});
Grommet.displayName = 'Grommet';
Grommet.propTypes = GrommetPropTypes;


/***/ }),

/***/ 3438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/mixins.js
var mixins = __webpack_require__(9207);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/colors.js
var colors = __webpack_require__(6808);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Heading/StyledHeading.js




var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var headingTheme = props.theme.heading;
  var levelStyle = headingTheme.level[props.level];

  if (levelStyle) {
    var data = levelStyle[size];
    var styles = [(0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";max-width:", ";font-weight:", ";"], data ? data.size : size, data ? data.height : 'normal', props.fillProp && 'none' || data && data.maxWidth || levelStyle.medium.maxWidth, levelStyle.font.weight || headingTheme.weight)];

    if (props.responsive && headingTheme.responsiveBreakpoint) {
      var breakpoint = props.theme.global.breakpoints[headingTheme.responsiveBreakpoint];

      if (breakpoint) {
        var responsiveData = headingTheme.level[props.level + 1] ? headingTheme.level[props.level + 1][size] : headingTheme.level[props.level][size];

        if (responsiveData) {
          styles.push((0,mixins/* breakpointStyle */.bk)(breakpoint, "\n            font-size: " + responsiveData.size + ";\n            line-height: " + responsiveData.height + ";\n            max-width: " + (props.fillProp && 'none' || responsiveData.maxWidth) + ";\n          "));
        }
      }
    }

    return styles;
  }

  console.warn("Heading level " + props.level + " is not defined in your theme.");
  return '';
};

var fontFamily = function fontFamily(props) {
  var _ref = props.theme.heading.level[props.level] || {},
      font = _ref.font;

  if (font && font.family) {
    return (0,styled_components_browser_esm.css)(["font-family:", ";"], font.family);
  }

  return props.theme.heading.font ? (0,styled_components_browser_esm.css)(["font-family:", ";"], props.theme.heading.font.family) : '';
};

var truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = (0,styled_components_browser_esm.css)(["color:", ";"], function (props) {
  return (0,colors/* normalizeColor */.ut)(props.colorProp || props.theme.heading.color, props.theme);
});
var StyledHeading = styled_components_browser_esm["default"].h1.withConfig({
  displayName: "StyledHeading",
  componentId: "sc-1rdh4aw-0"
})(["", " ", " ", " ", " ", " ", " ", ""], styles/* genericStyles */.$G, function (props) {
  return fontFamily(props);
}, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && styles/* textAlignStyle */.jt;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return (props.colorProp || props.theme.heading.color) && colorStyle;
}, function (props) {
  return props.theme.heading && props.theme.heading.extend;
});
StyledHeading.defaultProps = {};
Object.setPrototypeOf(StyledHeading.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Heading/propTypes.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var PropType = {};

if (false) {}

var HeadingPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Heading/Heading.js
var _excluded = ["color", "fill", "level"];

function Heading_extends() { Heading_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Heading_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Heading = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref // munged to avoid styled-components putting it in the DOM
) {
  var color = _ref.color,
      fill = _ref.fill,
      level = _ref.level,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return (
    /*#__PURE__*/
    // enforce level to be a number
    react.createElement(StyledHeading, Heading_extends({
      as: "h" + level,
      colorProp: color,
      fillProp: fill,
      level: +level
    }, rest, {
      ref: ref
    }))
  );
});
Heading.displayName = 'Heading';
Heading.defaultProps = {
  level: 1,
  responsive: true
};
Heading.propTypes = HeadingPropTypes;


/***/ }),

/***/ 9365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ Image)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Image/StyledImage.js



var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle = (0,styled_components_browser_esm.css)(["flex:1 1;overflow:hidden;object-fit:", ";"], function (props) {
  return FIT_MAP[props.fit];
});
var StyledImage = styled_components_browser_esm["default"].img.withConfig({
  displayName: "StyledImage",
  componentId: "sc-ey4zx9-0"
})(["", " ", " ", " ", " ", ""], styles/* genericStyles */.$G, function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.fillProp && (0,styles/* fillStyle */.EW)(props.fillProp);
}, function (props) {
  return props.theme.image && props.theme.image.extend;
}, function (props) {
  return props.opacityProp && "opacity: " + (props.opacityProp === true ? props.theme.global.opacity.medium : props.theme.global.opacity[props.opacityProp] || props.opacityProp) + ";\n  ";
});
StyledImage.defaultProps = {};
Object.setPrototypeOf(StyledImage.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Image/propTypes.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var PropType = {};

if (false) {}

var ImagePropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Image/Image.js
var _excluded = ["a11yTitle", "fallback", "onError", "opacity", "fill", "src"];

function Image_extends() { Image_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Image_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Image = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      fallback = _ref.fallback,
      onError = _ref.onError,
      opacity = _ref.opacity,
      fill = _ref.fill,
      src = _ref.src,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0,react.useState)(false),
      isFallbackInUse = _useState[0],
      setFallbackInUse = _useState[1];

  var handleError = function handleError(event) {
    if (onError) onError(event);

    if (!isFallbackInUse && fallback && fallback !== '') {
      // eslint-disable-next-line no-param-reassign
      event.target.src = fallback;
      setFallbackInUse(true);
    }
  };

  var handleOnLoad = function handleOnLoad() {
    setFallbackInUse(false);
  };

  var extraProps = {
    onError: (onError || fallback) && handleError,
    onLoad: handleOnLoad
  };
  return /*#__PURE__*/react.createElement(StyledImage, Image_extends({
    "aria-label": a11yTitle
  }, rest, extraProps, {
    ref: ref,
    opacityProp: opacity,
    fillProp: fill,
    src: src === undefined ? '' : src
  }));
});
Image.displayName = 'Image';
Image.propTypes = ImagePropTypes;


/***/ }),

/***/ 2282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ Keyboard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Keyboard/propTypes.js

var PropType = {};

if (false) {}

var KeyboardPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Keyboard/Keyboard.js
var _excluded = ["capture", "target", "children", "onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var KEYS = {
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
  188: 'onComma',
  16: 'onShift'
};

var Keyboard = function Keyboard(_ref) {
  var capture = _ref.capture,
      target = _ref.target,
      children = _ref.children,
      onKeyDown = _ref.onKeyDown,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var onKeyDownHandler = (0,react.useCallback)(function (event) {
    var key = event.keyCode ? event.keyCode : event.which;
    var callbackName = KEYS[key];

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    if (callbackName && restProps[callbackName]) {
      restProps[callbackName].apply(restProps, [event].concat(rest));
    }

    if (onKeyDown) {
      onKeyDown.apply(void 0, [event].concat(rest));
    }
  }, [onKeyDown, restProps]);
  (0,react.useEffect)(function () {
    if (target === 'document') {
      document.addEventListener('keydown', onKeyDownHandler, capture);
    }

    return function () {
      if (target === 'document') {
        document.removeEventListener('keydown', onKeyDownHandler, capture);
      }
    };
  }, [capture, onKeyDownHandler, target]);
  return target === 'document' ? children : /*#__PURE__*/(0,react.cloneElement)(react.Children.only(children), {
    onKeyDown: onKeyDownHandler
  });
};

Keyboard.propTypes = KeyboardPropTypes;


/***/ }),

/***/ 2372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ GrommetMarkdown)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/markdown-to-jsx/dist/index.modern.js
var index_modern = __webpack_require__(6243);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/object.js
var object = __webpack_require__(5543);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Heading/Heading.js + 2 modules
var Heading = __webpack_require__(3438);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/colors.js
var colors = __webpack_require__(6808);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Paragraph/StyledParagraph.js



var colorStyle = (0,styled_components_browser_esm.css)(["color:", ";"], function (props) {
  return (0,colors/* normalizeColor */.ut)(props.colorProp, props.theme);
});

var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.paragraph[size];
  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";max-width:", ";"], data ? data.size : size, data ? data.height : 'normal', props.fillProp ? 'none' : data && data.maxWidth);
};

var fontFamily = (0,styled_components_browser_esm.css)(["font-family:", ";"], function (props) {
  return props.theme.paragraph.font.family;
});
var StyledParagraph = styled_components_browser_esm["default"].p.withConfig({
  displayName: "StyledParagraph",
  componentId: "sc-tbetod-0"
})(["", " ", " ", " ", " ", " ", ""], styles/* genericStyles */.$G, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && styles/* textAlignStyle */.jt;
}, function (props) {
  return props.colorProp && colorStyle;
}, function (props) {
  return props.theme.paragraph.font && props.theme.paragraph.font.family && fontFamily;
}, function (props) {
  return props.theme.paragraph && props.theme.paragraph.extend;
});
StyledParagraph.defaultProps = {};
Object.setPrototypeOf(StyledParagraph.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Paragraph/propTypes.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var PropType = {};

if (false) {}

var ParagraphPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Paragraph/Paragraph.js
var _excluded = ["color", "fill"];

function Paragraph_extends() { Paragraph_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Paragraph_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Paragraph = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var color = _ref.color,
      fill = _ref.fill,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/react.createElement(StyledParagraph, Paragraph_extends({
    ref: ref,
    colorProp: color,
    fillProp: fill
  }, rest));
});
Paragraph.displayName = 'Paragraph';
Paragraph.prototype = ParagraphPropTypes;

// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Box/Box.js + 3 modules
var Box = __webpack_require__(4616);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Anchor/StyledAnchor.js



var disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";

var StyledAnchor_sizeStyle = function sizeStyle(props) {
  if (props.size) {
    var size = props.size || 'medium';
    var data = props.theme.text[size];
    return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";"], data ? data.size : size, data ? data.height : 'normal');
  }

  return (0,styled_components_browser_esm.css)(["font-size:inherit;line-height:inherit;"]);
};

var StyledAnchor = styled_components_browser_esm["default"].a.withConfig({
  // prevent custom props from bleeding into DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['as', 'colorProp', 'focus', 'hasIcon', 'hasLabel', 'reverse'].includes(prop) && defaultValidatorFn(prop);
  }
}).withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-1rp7lwl-0"
})(["box-sizing:border-box;", " color:", ";", " text-decoration:", ";cursor:pointer;", " ", " ", " ", " ", " ", ""], function (props) {
  return StyledAnchor_sizeStyle(props);
}, function (props) {
  return (0,colors/* normalizeColor */.ut)(props.colorProp || props.theme.anchor.color, props.theme);
}, function (props) {
  return props.weight ? "font-weight: " + props.weight + ";" : props.theme.anchor.fontWeight && "font-weight: " + props.theme.anchor.fontWeight + ";";
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, styles/* genericStyles */.$G, function (props) {
  return !props.disabled && props.theme.anchor.hover && (0,styled_components_browser_esm.css)(["&:hover{", " ", " ", "}"], props.theme.anchor.hover.textDecoration && "text-decoration: " + props.theme.anchor.hover.textDecoration + ";", props.theme.anchor.hover.fontWeight && "font-weight: " + props.theme.anchor.hover.fontWeight + ";", props.theme.anchor.hover.extend);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && (0,styles/* focusStyle */.jq)();
}, function (props) {
  return props.theme.anchor.extend;
});
StyledAnchor.defaultProps = {};
Object.setPrototypeOf(StyledAnchor.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Anchor/propTypes.js
function propTypes_extends() { propTypes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return propTypes_extends.apply(this, arguments); }



var propTypes_PropType = {};

if (false) {}

var AnchorPropTypes = propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Anchor/Anchor.js
var Anchor_excluded = ["a11yTitle", "aria-label", "children", "color", "disabled", "gap", "href", "icon", "label", "onBlur", "onClick", "onFocus", "reverse"];

function Anchor_extends() { Anchor_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Anchor_extends.apply(this, arguments); }

function Anchor_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Anchor = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      ariaLabel = _ref['aria-label'],
      children = _ref.children,
      color = _ref.color,
      disabled = _ref.disabled,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 'small' : _ref$gap,
      href = _ref.href,
      icon = _ref.icon,
      label = _ref.label,
      _onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      _onFocus = _ref.onFocus,
      reverse = _ref.reverse,
      rest = Anchor_objectWithoutPropertiesLoose(_ref, Anchor_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;

  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  (0,react.useEffect)(function () {
    if ((icon || label) && children) {
      console.warn('Anchor should not have children if icon or label is provided');
    }
  }, [children, icon, label]);
  var coloredIcon = icon;

  if (icon && !icon.props.color) {
    coloredIcon = /*#__PURE__*/(0,react.cloneElement)(icon, {
      color: (0,colors/* normalizeColor */.ut)(color || theme.anchor.color, theme)
    });
  }

  var first = reverse ? label : coloredIcon;
  var second = reverse ? coloredIcon : label;
  return /*#__PURE__*/react.createElement(StyledAnchor, Anchor_extends({}, rest, {
    ref: ref,
    "aria-label": ariaLabel || a11yTitle,
    colorProp: color,
    disabled: disabled,
    hasIcon: !!icon,
    focus: focus,
    hasLabel: label,
    reverse: reverse,
    href: !disabled ? href : undefined,
    onClick: !disabled ? onClick : undefined,
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (_onBlur) _onBlur(event);
    }
  }), first && second ? /*#__PURE__*/react.createElement(Box/* Box */.x, {
    as: "span",
    direction: "row",
    align: "center",
    gap: gap,
    responsive: false,
    style: {
      display: 'inline-flex'
    }
  }, first, second) : first || second || children);
});
Anchor.displayName = 'Anchor';
Anchor.propTypes = AnchorPropTypes;

// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Image/Image.js + 2 modules
var Image = __webpack_require__(9365);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/background.js
var utils_background = __webpack_require__(6093);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/border.js
var border = __webpack_require__(5789);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Table/StyledTable.js



var SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};
var StyledTable_sizeStyle = (0,styled_components_browser_esm.css)(["width:", ";max-width:", ";overflow:hidden;"], function (props) {
  return props.size === 'auto' ? // setting width to a small value will allow
  // the cell to fit width of its content. this
  // is a commonly implemented CSS pattern to
  // allow an auto-width behavior on fixed table
  // layouts (which is what DataTable applies)
  // https://stackoverflow.com/questions/4757844/css-table-column-autowidth?noredirect=1&lq=1
  '1px' : SIZE_MAP[props.size] || props.theme.global.size[props.size] || props.size;
}, function (props) {
  return props.size !== 'auto' ? SIZE_MAP[props.size] || props.theme.global.size[props.size] || props.size : undefined;
});
var StyledTableCell = styled_components_browser_esm["default"].td.withConfig({
  displayName: "StyledTable__StyledTableCell",
  componentId: "sc-1m3u5g-0"
})(["margin:0;padding:0;font-weight:inherit;text-align:inherit;", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return props.size && StyledTable_sizeStyle;
}, function (props) {
  return props.verticalAlign && "vertical-align: " + props.verticalAlign + ";";
}, function (props) {
  return props.align && "text-align: " + props.align + ";";
}, function (props) {
  return props.background && (0,utils_background/* backgroundStyle */.Nu)(props.background, props.theme);
}, function (props) {
  return props.border && (0,border/* borderStyle */.$)(props.border, props.responsive, props.theme);
}, function (props) {
  return props.pad && (0,styles/* edgeStyle */.oW)('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.tableContextTheme && props.tableContextTheme.extend;
});
StyledTableCell.defaultProps = {};
Object.setPrototypeOf(StyledTableCell.defaultProps, default_props/* defaultProps */.l);
var StyledTableDataCaption = styled_components_browser_esm["default"].caption.withConfig({
  displayName: "StyledTable__StyledTableDataCaption",
  componentId: "sc-1m3u5g-1"
})(["margin-bottom:", ";"], function (props) {
  return props.theme.global.edgeSize.xxsmall;
});
StyledTableDataCaption.defaultProps = {};
Object.setPrototypeOf(StyledTableDataCaption.defaultProps, default_props/* defaultProps */.l);
var StyledTableRow = styled_components_browser_esm["default"].tr.withConfig({
  displayName: "StyledTable__StyledTableRow",
  componentId: "sc-1m3u5g-2"
})([""]);
StyledTableRow.defaultProps = {};
Object.setPrototypeOf(StyledTableRow.defaultProps, default_props/* defaultProps */.l);
var StyledTableBody = styled_components_browser_esm["default"].tbody.withConfig({
  displayName: "StyledTable__StyledTableBody",
  componentId: "sc-1m3u5g-3"
})([""]);
StyledTableBody.defaultProps = {};
Object.setPrototypeOf(StyledTableBody.defaultProps, default_props/* defaultProps */.l);
var StyledTableHeader = styled_components_browser_esm["default"].thead.withConfig({
  displayName: "StyledTable__StyledTableHeader",
  componentId: "sc-1m3u5g-4"
})([""]);
StyledTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledTableHeader.defaultProps, default_props/* defaultProps */.l);
var StyledTableFooter = styled_components_browser_esm["default"].tfoot.withConfig({
  displayName: "StyledTable__StyledTableFooter",
  componentId: "sc-1m3u5g-5"
})([""]);
StyledTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledTableFooter.defaultProps, default_props/* defaultProps */.l);
var StyledTable = styled_components_browser_esm["default"].table.withConfig({
  displayName: "StyledTable",
  componentId: "sc-1m3u5g-6"
})(["border-spacing:0;border-collapse:collapse;width:inherit;@media all and (min--moz-device-pixel-ratio:0){table-layout:fixed;}", " ", ";"], styles/* genericStyles */.$G, function (props) {
  return props.theme.table && props.theme.table.extend;
});
StyledTable.defaultProps = {};
Object.setPrototypeOf(StyledTable.defaultProps, default_props/* defaultProps */.l);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Table/propTypes.js
function Table_propTypes_extends() { Table_propTypes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Table_propTypes_extends.apply(this, arguments); }



var Table_propTypes_PropType = {};

if (false) {}

var TablePropTypes = Table_propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Table/Table.js
var Table_excluded = ["caption", "children"];

function Table_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Table = function Table(_ref) {
  var caption = _ref.caption,
      children = _ref.children,
      rest = Table_objectWithoutPropertiesLoose(_ref, Table_excluded);

  return /*#__PURE__*/react.createElement(StyledTable, rest, caption ? /*#__PURE__*/react.createElement(StyledTableDataCaption, null, caption) : null, children);
};

Table.propTypes = TablePropTypes;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Table/TableContext.js

var TableContext = /*#__PURE__*/react.createContext(undefined);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableBody/TableBody.js
function TableBody_extends() { TableBody_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableBody_extends.apply(this, arguments); }




var TableBody = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react.createElement(TableContext.Provider, {
    value: "body"
  }, /*#__PURE__*/react.createElement(StyledTableBody, TableBody_extends({
    ref: ref
  }, props)));
});
TableBody.displayName = 'TableBody';

// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/use-isomorphic-layout-effect.js
var use_isomorphic_layout_effect = __webpack_require__(2320);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/refs.js
var refs = __webpack_require__(7187);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableCell/propTypes.js

var BORDER_SHAPE = prop_types_default().shape({
  color: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().shape({
    dark: (prop_types_default()).string,
    light: (prop_types_default()).string
  })]),
  side: prop_types_default().oneOf(['top', 'left', 'bottom', 'right', 'start', 'end', 'horizontal', 'vertical', 'all', 'between']),
  size: prop_types_default().oneOfType([prop_types_default().oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), (prop_types_default()).string]),
  style: prop_types_default().oneOf(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'hidden'])
});
var TableCell_propTypes_PropType = {};

if (false) {}

var TableCellPropTypes = TableCell_propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableCell/TableCell.js
var TableCell_excluded = ["align", "aria-disabled", "background", "border", "children", "className", "colSpan", "onWidth", "pad", "plain", "rowSpan", "scope", "size", "verticalAlign"];

function TableCell_extends() { TableCell_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableCell_extends.apply(this, arguments); }

function TableCell_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var verticalAlignToJustify = {
  middle: 'center',
  top: 'start',
  bottom: 'end'
};
var TableCell = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var align = _ref.align,
      ariaDisabled = _ref['aria-disabled'],
      background = _ref.background,
      border = _ref.border,
      children = _ref.children,
      className = _ref.className,
      colSpan = _ref.colSpan,
      onWidth = _ref.onWidth,
      pad = _ref.pad,
      plain = _ref.plain,
      rowSpan = _ref.rowSpan,
      scope = _ref.scope,
      size = _ref.size,
      verticalAlign = _ref.verticalAlign,
      rest = TableCell_objectWithoutPropertiesLoose(_ref, TableCell_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;
  var tableContext = (0,react.useContext)(TableContext);
  var cellRef = (0,refs/* useForwardedRef */.t)(ref);
  var containerRef = (0,react.useRef)();
  (0,use_isomorphic_layout_effect/* useLayoutEffect */.b)(function () {
    if (onWidth) {
      var _cellRef$current$getB = cellRef.current.getBoundingClientRect(),
          width = _cellRef$current$getB.width;

      onWidth(width);
    }
  }, [cellRef, onWidth]); // if window resizes, recalculate cell height so that content
  // will continue to fill the height if the dimensions of the cell
  // have changed

  (0,react.useEffect)(function () {
    var updateHeight = function updateHeight() {
      if (plain === 'noPad') {
        var cell = cellRef.current;
        var container = containerRef.current;

        if (cell && container) {
          container.style.height = '';
          var cellRect = cell.getBoundingClientRect(); // height must match cell height otherwise table will apply some
          // margin around the cell content

          container.style.height = Math.max(cellRect.height - (border || theme.table[tableContext].border ? theme.global.borderSize.xsmall.replace('px', '') : 0), 0) + "px";
        }
      }
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();
    return function () {
      window.removeEventListener('resize', updateHeight);
    };
  }, [border, cellRef, plain, tableContext, theme.global.borderSize, theme.table]);
  var tableContextTheme;

  if (tableContext === 'header') {
    tableContextTheme = theme.table && theme.table.header;
  } else if (tableContext === 'footer') {
    tableContextTheme = theme.table && theme.table.footer;
  } else {
    tableContextTheme = theme.table && theme.table.body;
  } // merge tableContextTheme and rest


  var mergedProps = TableCell_extends({}, tableContextTheme, rest);

  Object.keys(mergedProps).forEach(function (key) {
    if (rest[key] === undefined) mergedProps[key] = tableContextTheme[key];
  }); // split out background, border, pad, and aria-disabled

  var cellProps = {
    align: align || mergedProps.align || undefined,
    'aria-disabled': ariaDisabled || undefined,
    background: background || mergedProps.background || undefined,
    border: border || mergedProps.border || undefined,
    pad: plain !== 'noPad' ? pad || mergedProps.pad || undefined : undefined,
    verticalAlign: verticalAlign || mergedProps.verticalAlign || undefined
  };
  delete mergedProps.align;
  delete mergedProps.ariaDisabled;
  delete mergedProps.background;
  delete mergedProps.border;
  delete mergedProps.pad;
  delete mergedProps.verticalAlign;
  var content = children;

  if (plain === 'noPad' && children) {
    // a Box with explicitly set height is necessary
    // for the child contents to be able to fill the
    // TableCell
    content = /*#__PURE__*/react.createElement(Box/* Box */.x, {
      ref: containerRef,
      justify: verticalAlign ? verticalAlignToJustify[verticalAlign] : 'center'
    }, children);
  } // construct a new theme object in case we have a background that wants
  // to change the background color context


  var nextTheme = (0,react.useMemo)(function () {
    var result;

    if (cellProps.background || theme.darkChanged) {
      var dark = (0,utils_background/* backgroundIsDark */.im)(cellProps.background, theme);
      var darkChanged = dark !== undefined && dark !== theme.dark;

      if (darkChanged || theme.darkChanged) {
        result = TableCell_extends({}, theme);
        result.dark = dark === undefined ? theme.dark : dark;
        result.background = cellProps.background;
      } else if (cellProps.background) {
        // This allows DataTable to intelligently set the background
        // of a pinned header or footer.
        result = TableCell_extends({}, theme);
        result.background = cellProps.background;
      }
    }

    return result || theme;
  }, [cellProps.background, theme]);
  return /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
    value: nextTheme
  }, /*#__PURE__*/react.createElement(StyledTableCell, TableCell_extends({
    ref: cellRef,
    as: scope ? 'th' : undefined,
    scope: scope,
    size: size,
    colSpan: colSpan,
    rowSpan: rowSpan,
    tableContext: tableContext,
    tableContextTheme: tableContextTheme
  }, plain === true ? mergedProps : {}, cellProps, {
    className: className
  }), plain || !Object.keys(mergedProps).length ? content : /*#__PURE__*/react.createElement(Box/* Box */.x, TableCell_extends({}, mergedProps, {
    align: align,
    justify: verticalAlignToJustify[verticalAlign]
  }), children)));
});
TableCell.displayName = 'TableCell';
TableCell.propTypes = TableCellPropTypes;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableFooter/TableFooter.js
function TableFooter_extends() { TableFooter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableFooter_extends.apply(this, arguments); }




var TableFooter = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react.createElement(TableContext.Provider, {
    value: "footer"
  }, /*#__PURE__*/react.createElement(StyledTableFooter, TableFooter_extends({
    ref: ref
  }, props)));
});
TableFooter.displayName = 'TableFooter';

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableHeader/TableHeader.js
function TableHeader_extends() { TableHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableHeader_extends.apply(this, arguments); }




var TableHeader = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react.createElement(TableContext.Provider, {
    value: "header"
  }, /*#__PURE__*/react.createElement(StyledTableHeader, TableHeader_extends({
    ref: ref
  }, props)));
});
TableHeader.displayName = 'TableHeader';

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableRow/TableRow.js
function TableRow_extends() { TableRow_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TableRow_extends.apply(this, arguments); }



var TableRow = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react.createElement(StyledTableRow, TableRow_extends({
    ref: ref
  }, props));
});
TableRow.displayName = 'TableRow';

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Markdown/propTypes.js

var Markdown_propTypes_PropType = {};

if (false) {}

var MarkdownPropTypes = Markdown_propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Markdown/Markdown.js
var Markdown_excluded = ["children", "components", "options", "theme"];

function Markdown_extends() { Markdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Markdown_extends.apply(this, arguments); }

function Markdown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















var GrommetMarkdown = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      components = _ref.components,
      options = _ref.options,
      theme = _ref.theme,
      rest = Markdown_objectWithoutPropertiesLoose(_ref, Markdown_excluded);

  var heading = [1, 2, 3, 4].reduce(function (obj, level) {
    var result = Markdown_extends({}, obj);

    result["h" + level] = {
      component: Heading/* Heading */.X,
      props: {
        level: level
      }
    };
    return result;
  }, {});
  var overrides = (0,object/* deepMerge */.RH)({
    a: {
      component: Anchor
    },
    img: {
      component: Image/* Image */.E
    },
    p: {
      component: Paragraph
    },
    table: {
      component: Table
    },
    td: {
      component: TableCell,
      props: {
        plain: true
      }
    },
    tbody: {
      component: TableBody
    },
    tfoot: {
      component: TableFooter
    },
    th: {
      component: TableCell
    },
    thead: {
      component: TableHeader
    },
    tr: {
      component: TableRow
    }
  }, heading, components, options && options.overrides); // we use Fragment as the wrapper so we can assign the ref with the div
  // wrapper can still be overridden with the options.

  return /*#__PURE__*/react.createElement("div", Markdown_extends({
    ref: ref
  }, rest), /*#__PURE__*/react.createElement(index_modern/* default */.Z, {
    children: children,
    options: Markdown_extends({
      wrapper: react.Fragment
    }, options, {
      overrides: overrides
    })
  }));
});
GrommetMarkdown.propTypes = MarkdownPropTypes;


/***/ }),

/***/ 5644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ Select)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/colors.js
var colors = __webpack_require__(6808);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Box/Box.js + 3 modules
var Box = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Button/Button.js + 7 modules
var Button = __webpack_require__(1999);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Drop/Drop.js + 6 modules
var Drop = __webpack_require__(5865);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/refs.js
var refs = __webpack_require__(7187);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DropButton/propTypes.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var PropType = {};

if (false) {}

var DropButtonPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DropButton/DropButton.js
var _excluded = ["a11yTitle", "onAlign", "disabled", "dropAlign", "dropProps", "dropContent", "dropTarget", "id", "open", "onClick", "onClose", "onOpen"];

function DropButton_extends() { DropButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropButton_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var defaultDropAlign = {
  top: 'top',
  left: 'left'
};
var DropButton = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var _ref$a11yTitle = _ref.a11yTitle,
      a11yTitle = _ref$a11yTitle === void 0 ? 'Open Drop' : _ref$a11yTitle,
      onAlign = _ref.onAlign,
      disabled = _ref.disabled,
      _ref$dropAlign = _ref.dropAlign,
      dropAlign = _ref$dropAlign === void 0 ? defaultDropAlign : _ref$dropAlign,
      dropProps = _ref.dropProps,
      dropContent = _ref.dropContent,
      dropTarget = _ref.dropTarget,
      id = _ref.id,
      open = _ref.open,
      onClick = _ref.onClick,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var buttonRef = (0,refs/* useForwardedRef */.t)(ref);

  var _useState = (0,react.useState)(),
      show = _useState[0],
      setShow = _useState[1];

  (0,react.useEffect)(function () {
    if (open !== undefined && open !== show) {
      setShow(open);
    }
  }, [open, show]);
  var onDropClose = (0,react.useCallback)(function (event) {
    // if the user has clicked on our Button, don't do anything here,
    // handle that in onClickInternal() below.
    var node = event.target;

    while (node !== document && node !== buttonRef.current) {
      node = node.parentNode;
    }

    if (node !== buttonRef.current) {
      // don't change internal state if caller is driving
      if (open === undefined) setShow(false);
      if (onClose) onClose(event);
    }
  }, [buttonRef, onClose, open]);
  var onClickInternal = (0,react.useCallback)(function (event) {
    if (!show) {
      setShow(true);
      if (onOpen) onOpen(event);
    } else {
      setShow(false);
      if (onClose) onClose(event);
    }

    if (onClick) onClick(event);
  }, [onClick, onClose, onOpen, show]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.z, DropButton_extends({
    id: id,
    ref: buttonRef,
    a11yTitle: a11yTitle,
    disabled: disabled
  }, rest, {
    onClick: onClickInternal
  })), show && buttonRef.current && /*#__PURE__*/react.createElement(Drop/* Drop */.U, DropButton_extends({
    id: id ? id + "__drop" : undefined,
    onAlign: onAlign,
    restrictFocus: true,
    align: dropAlign,
    target: dropTarget || buttonRef.current,
    onClickOutside: onDropClose,
    onEsc: onDropClose
  }, dropProps), dropContent));
});
DropButton.displayName = 'DropButton';
DropButton.propTypes = DropButtonPropTypes;

// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Keyboard/Keyboard.js + 1 modules
var Keyboard = __webpack_require__(2282);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Form/FormContext.js
 // When not a descendant of a Form, FormContext still provides a basic
// useFormInput. It doesn't do anything for components like TextInput.
// But, it does store the value for components like CheckBox or Select
// where the grommet component needs to know the value in order to
// render custom visuals.

var useFormInput = function useFormInput(_ref) {
  var valueProp = _ref.value,
      initialValue = _ref.initialValue;

  var _useState = (0,react.useState)(valueProp !== undefined ? valueProp : initialValue),
      value = _useState[0],
      setValue = _useState[1]; // Returns an array [value and function to set the value]


  return [valueProp !== undefined ? valueProp : value, function (nextValue) {
    if (initialValue !== undefined) setValue(nextValue);
  }];
};

var useFormField = function useFormField(_ref2) {
  var error = _ref2.error,
      info = _ref2.info,
      disabled = _ref2.disabled;
  return {
    error: error,
    info: info,
    disabled: disabled
  };
};

var FormContext = /*#__PURE__*/react.createContext({
  useFormField: useFormField,
  useFormInput: useFormInput
});
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/use-isomorphic-layout-effect.js
var use_isomorphic_layout_effect = __webpack_require__(2320);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/DOM.js
var DOM = __webpack_require__(1205);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/InfiniteScroll/propTypes.js

var propTypes_PropType = {};

if (false) {}

var InfiniteScrollPropTypes = propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/InfiniteScroll/InfiniteScroll.js






var calculateLastPageBound = function calculateLastPageBound(show, step) {
  return show ? Math.floor((show + step) / step) - 1 : 0;
};

var InfiniteScroll = function InfiniteScroll(_ref) {
  var children = _ref.children,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onMore = _ref.onMore,
      renderMarker = _ref.renderMarker,
      replace = _ref.replace,
      show = _ref.show,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 50 : _ref$step;

  // item index to be made visible initially
  var _useState = (0,react.useState)(),
      scrollShow = _useState[0],
      setScrollShow = _useState[1]; // the last page we have items for


  var lastPage = (0,react.useMemo)(function () {
    return Math.max(0, Math.ceil(items.length / step) - 1);
  }, [items.length, step]); // the pages we are rendering

  var _useState2 = (0,react.useState)([0, calculateLastPageBound(show, step)]),
      renderPageBounds = _useState2[0],
      setRenderPageBounds = _useState2[1]; // the heights of the pages, approximated after we render the first page
  // and then updated for pages that have rendered


  var _useState3 = (0,react.useState)([]),
      pageHeights = _useState3[0],
      setPageHeights = _useState3[1]; // what we're waiting for onMore to give us


  var _useState4 = (0,react.useState)(0),
      pendingLength = _useState4[0],
      setPendingLength = _useState4[1];

  var aboveMarkerRef = (0,react.useRef)(); // only when replacing

  var belowMarkerRef = (0,react.useRef)(); // scroll and resize handling

  (0,react.useEffect)(function () {
    var scrollParents;

    var evaluate = function evaluate() {
      if (!scrollParents) return;
      var scrollParent = scrollParents[0]; // Determine the scroll position of the scroll container

      var top;
      var height;

      if (scrollParent === document) {
        top = document.documentElement.scrollTop || document.body.scrollTop;
        height = window.innerHeight;
      } else {
        top = scrollParent.scrollTop;
        var rect = scrollParent.getBoundingClientRect();
        height = rect.height;
      }

      var offset = height / 4; // so we pre-load when the user scrolls slowly
      // Use the pageHeights to determine what pages we should render based
      // on the current scroll window.

      var nextBeginPage = 0;
      var index = 0;
      var pagesHeight = pageHeights[index] || 0;

      while (pageHeights[index + 1] && pagesHeight < top - offset) {
        index += 1;
        nextBeginPage += 1;
        pagesHeight += pageHeights[index];
      }

      var nextEndPage = nextBeginPage;

      while (pageHeights[index] !== undefined && pagesHeight < top + height + offset) {
        index += 1;
        nextEndPage += 1; // when we haven't rendered the nextEndPage and we aren't replacing,
        // we might not have a height for it yet

        pagesHeight += pageHeights[index] || 0;
      }

      if (!replace) {
        // when not replacing, never shrink bounds
        nextBeginPage = 0;
        nextEndPage = Math.max(renderPageBounds[1], nextEndPage);
      }

      if (show) {
        // ensure we try to render any show page
        var showPage = calculateLastPageBound(show, step);
        nextBeginPage = Math.min(showPage, nextBeginPage);
        nextEndPage = Math.max(showPage, nextEndPage);
      }

      if (nextBeginPage !== renderPageBounds[0] || nextEndPage !== renderPageBounds[1]) {
        setRenderPageBounds([nextBeginPage, nextEndPage]);
      }
    };

    var timer;

    var debounce = function debounce() {
      clearTimeout(timer);
      timer = setTimeout(evaluate, 10);
    }; // might not be there yet or might have already rendered everything


    if (belowMarkerRef.current) {
      scrollParents = (0,DOM/* findScrollParents */.sq)(belowMarkerRef.current);
      scrollParents.forEach(function (sp) {
        return sp.addEventListener('scroll', debounce);
      });
    }

    window.addEventListener('resize', debounce);
    evaluate();
    return function () {
      if (scrollParents) {
        scrollParents.forEach(function (sp) {
          return sp.removeEventListener('scroll', debounce);
        });
      }

      window.removeEventListener('resize', debounce);
      clearTimeout(timer);
    };
  }, [pageHeights, renderPageBounds, replace, show, step]); // check if we need to ask for more

  (0,react.useEffect)(function () {
    if (onMore && renderPageBounds[1] === lastPage && items.length >= pendingLength && items.length > 0) {
      // remember we've asked for more, so we don't keep asking if it takes
      // a while
      setPendingLength(items.length + 1);
      onMore();
    }
  }, [items.length, lastPage, onMore, pendingLength, renderPageBounds, step]);
  (0,react.useEffect)(function () {
    if (items.length === 0 && lastPage === 0 && pendingLength !== 0) {
      setPageHeights([]);
      setPendingLength(0);
      setRenderPageBounds([0, calculateLastPageBound(show, step)]);
    }
  }, [lastPage, pendingLength, show, step, items.length]); // scroll to any 'show'

  (0,use_isomorphic_layout_effect/* useLayoutEffect */.b)(function () {
    // ride out any animation delays, 100ms empirically measured
    var timer = setTimeout(function () {
      if (show && belowMarkerRef.current && show !== scrollShow) {
        // calculate show index based on beginPage
        var showIndex = show - renderPageBounds[0] * step + (renderPageBounds[0] ? 1 : 0);
        var showNode = belowMarkerRef.current.parentNode.children.item(showIndex);

        if (showNode) {
          var scrollParent = (0,DOM/* findScrollParent */.xD)(showNode);

          if ((0,DOM/* isNodeBeforeScroll */.rc)(showNode, scrollParent)) {
            showNode.scrollIntoView(true);
          } else if ((0,DOM/* isNodeAfterScroll */._8)(showNode, scrollParent)) {
            showNode.scrollIntoView(false);
          } // clean up after having shown


          setScrollShow(show);
        }
      }
    }, 100);
    return function () {
      return clearTimeout(timer);
    }; // Omitting scrollShow as a dependency due to concern that setScrollShow
    // is being called within the timer. If left included, re-renders and other
    // dependency values could change in an unpredictable manner during timer
    // and potentially result in an infinite loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderPageBounds, show, step]); // calculate and keep track of page heights

  (0,use_isomorphic_layout_effect/* useLayoutEffect */.b)(function () {
    // if don't have a belowMarker, we must have rendered everything already
    if (!belowMarkerRef.current) return; // calculate page heights for rendered pages

    var rendered = belowMarkerRef.current.parentNode.children; // ensure we've rendered the state we have
    // above? + items in rendered pages + below === rendered DOM elements length

    if ((aboveMarkerRef.current ? 1 : 0) + (renderPageBounds[1] - renderPageBounds[0] + 1) * step + 1 === rendered.length) {
      var nextPageHeights; // step through each page

      var i = renderPageBounds[0];
      var lastBottom;

      while (i <= renderPageBounds[1]) {
        var topIndex = (aboveMarkerRef.current ? 1 : 0) + (i - renderPageBounds[0]) * step;
        var bottomIndex = Math.min(topIndex + step - 1, rendered.length - 1); // we use lastBottom for top to ensure grid layouts work

        var top = lastBottom !== undefined ? lastBottom : rendered.item(topIndex).getBoundingClientRect().top;

        var _rendered$item$getBou = rendered.item(bottomIndex).getBoundingClientRect(),
            bottom = _rendered$item$getBou.bottom;

        var height = bottom - top;

        if (bottom && (!pageHeights || pageHeights[i] !== height)) {
          if (!nextPageHeights) nextPageHeights = [].concat(pageHeights || []);
          nextPageHeights[i] = height;
        }

        lastBottom = bottom;
        i += 1;
      } // estimate page heights for pages we haven't rendered yet


      while (replace && i <= lastPage) {
        if (!pageHeights[i] && pageHeights[i] !== pageHeights[0]) {
          if (!nextPageHeights) nextPageHeights = [].concat(pageHeights || []);
          var _nextPageHeights = nextPageHeights;
          nextPageHeights[i] = _nextPageHeights[0];
        }

        i += 1;
      }

      if (nextPageHeights) setPageHeights(nextPageHeights);
    }
  }, [lastPage, pageHeights, renderPageBounds, replace, step]); // calculate the height above the first rendered page using the pageHeights

  var aboveHeight = (0,react.useMemo)(function () {
    if (!replace) return 0;
    var height = 0;
    var i = 0;

    while (i < renderPageBounds[0]) {
      height += pageHeights[i] || 0;
      i += 1;
    }

    return height;
  }, [pageHeights, renderPageBounds, replace]); // calculate the height below the last rendered page using the pageHeights

  var belowHeight = (0,react.useMemo)(function () {
    if (!replace) return 0;
    var height = 0;
    var i = renderPageBounds[1] + 1;

    while (i <= lastPage) {
      height += pageHeights[i] || 0;
      i += 1;
    }

    return height;
  }, [lastPage, pageHeights, renderPageBounds, replace]);
  var firstIndex = renderPageBounds[0] * step;
  var lastIndex = Math.min((renderPageBounds[1] + 1) * step, items.length) - 1;
  var result = [];

  if (aboveHeight) {
    var marker = /*#__PURE__*/react.createElement(Box/* Box */.x, {
      key: "above",
      ref: aboveMarkerRef,
      flex: false,
      height: aboveHeight + "px"
    });

    if (renderMarker) {
      // need to give it a key
      marker = /*#__PURE__*/react.cloneElement(renderMarker(marker), {
        key: 'above'
      });
    }

    result.push(marker);
  }

  items.slice(firstIndex, lastIndex + 1).forEach(function (item, index) {
    var itemsIndex = firstIndex + index;
    var child = children(item, itemsIndex);
    result.push(child);
  });

  if (replace || renderPageBounds[1] < lastPage || onMore) {
    var _marker = /*#__PURE__*/react.createElement(Box/* Box */.x, {
      key: "below",
      ref: !renderMarker && belowMarkerRef || undefined,
      flex: false,
      height: (belowHeight || 0) + "px"
    });

    if (renderMarker) {
      // need to give it a key
      var renderedMarker = renderMarker(_marker);
      _marker = /*#__PURE__*/react.cloneElement(renderedMarker, {
        key: 'below',
        // We need to make sure our belowMarkerRef is tied to a component
        // that has the same parent as the items being rendered. This is so
        // we can use belowMarkerRef.current.parentNode.children to
        // get a reference to the items in the DOM for calculating pageHeights.
        //
        // Since the caller might have included a ref in what their
        // renderMarker returns, we have to take care of both refs.
        // https://github.com/facebook/react/issues/8873#issuecomment-489579878
        ref: function ref(node) {
          // Keep your own reference
          belowMarkerRef.current = node; // Call the original ref, if any

          var ref = renderedMarker.ref;

          if (typeof ref === 'function') {
            ref(node);
          } else if (ref !== null) {
            ref.current = node;
          }
        }
      });
    }

    result.push(_marker);
  }

  return result;
};

InfiniteScroll.propTypes = InfiniteScrollPropTypes;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/AnnounceContext/propTypes.js

var AnnounceContext_propTypes_PropType = {};

if (false) {}

var AnnounceContextPropTypes = AnnounceContext_propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/AnnounceContext/AnnounceContext.js



var createAnnouncer = function createAnnouncer() {
  var announcer = document.createElement('div');
  announcer.id = 'grommet-announcer';
  announcer.style.left = '-100%';
  announcer.style.right = '100%';
  announcer.style.position = 'fixed';
  announcer.style['z-index'] = '-1';
  document.body.insertBefore(announcer, document.body.firstChild);
  return announcer;
};

var AnnounceContext = /*#__PURE__*/react.createContext(function (message, mode, timeout) {
  if (mode === void 0) {
    mode = 'polite';
  }

  if (timeout === void 0) {
    timeout = 500;
  }

  // we only create a new container if we don't have one already
  // we create a separate node so that grommet does not set aria-hidden to it
  var announcer = document.body.querySelector("#grommet-announcer[aria-live]") || createAnnouncer();
  announcer.setAttribute('aria-live', 'off');
  announcer.innerHTML = message;
  announcer.setAttribute('aria-live', mode);
  setTimeout(function () {
    announcer.innerHTML = '';
  }, timeout);
});
AnnounceContext.propTypes = AnnounceContextPropTypes;
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/mixins.js
var mixins = __webpack_require__(9207);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextInput/StyledTextInput.js




var getPlainStyle = function getPlainStyle(plain) {
  if (plain === 'full') {
    return (0,styled_components_browser_esm.css)(["", " padding:0;"], styles/* plainInputStyle */.Zt);
  }

  return plain && styles/* plainInputStyle */.Zt;
};

var StyledTextInput = styled_components_browser_esm["default"].input.withConfig({
  displayName: "StyledTextInput",
  componentId: "sc-1x30a0s-0"
})(["", " ", " ", " ", " ", " ", ";"], styles/* inputStyle */.hG, function (props) {
  return getPlainStyle(props.plain);
}, function (props) {
  return props.icon && (props.reverse ? "padding-right: " + props.theme.global.edgeSize.large + ";" : "padding-left: " + props.theme.global.edgeSize.large + ";");
}, function (props) {
  return props.disabled && (0,styles/* disabledStyle */.Cv)(props.theme.textInput.disabled && props.theme.textInput.disabled.opacity);
}, function (props) {
  return props.textAlign && styles/* textAlignStyle */.jt;
}, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, default_props/* defaultProps */.l);
var StyledTextInputContainer = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledTextInput__StyledTextInputContainer",
  componentId: "sc-1x30a0s-1"
})(["position:relative;width:100%;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.container && props.theme.textInput.container.extend;
});
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(StyledTextInputContainer.defaultProps, default_props/* defaultProps */.l);
var StyledPlaceholder = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledTextInput__StyledPlaceholder",
  componentId: "sc-1x30a0s-2"
})(["position:absolute;left:", "px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;", ";"], function (props) {
  return (0,mixins/* parseMetricToNum */.gd)((0,styles/* getInputPadBySide */.dy)(props, 'left')) - (0,mixins/* parseMetricToNum */.gd)(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.placeholder && props.theme.textInput.placeholder.extend;
});
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(StyledPlaceholder.defaultProps, default_props/* defaultProps */.l);
var StyledIcon = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledTextInput__StyledIcon",
  componentId: "sc-1x30a0s-3"
})(["position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);pointer-events:none;", ""], function (props) {
  return props.reverse ? "right: " + (0,styles/* getInputPadBySide */.dy)(props, 'right') + ";" : "left: " + (0,styles/* getInputPadBySide */.dy)(props, 'left') + ";";
});
var StyledSuggestions = styled_components_browser_esm["default"].ol.withConfig({
  displayName: "StyledTextInput__StyledSuggestions",
  componentId: "sc-1x30a0s-4"
})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.suggestions && props.theme.textInput.suggestions.extend;
});
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(StyledSuggestions.defaultProps, default_props/* defaultProps */.l);

// EXTERNAL MODULE: ./node_modules/grommet/es6/contexts/MessageContext/MessageContext.js
var MessageContext = __webpack_require__(7598);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextInput/propTypes.js

var TextInput_propTypes_PropType = {};

if (false) {}

var TextInputPropTypes = TextInput_propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextInput/TextInput.js
var TextInput_excluded = ["a11yTitle", "defaultSuggestion", "defaultValue", "dropAlign", "dropHeight", "dropTarget", "dropProps", "focusIndicator", "icon", "id", "messages", "name", "onBlur", "onChange", "onFocus", "onKeyDown", "onSelect", "onSuggestionSelect", "onSuggestionsClose", "onSuggestionsOpen", "placeholder", "plain", "readOnly", "reverse", "suggestions", "textAlign", "value"];

function TextInput_extends() { TextInput_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TextInput_extends.apply(this, arguments); }

function TextInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















var renderLabel = function renderLabel(suggestion) {
  if (suggestion && typeof suggestion === 'object') {
    return suggestion.label || suggestion.value;
  }

  return suggestion;
};

var stringLabel = function stringLabel(suggestion) {
  if (suggestion && typeof suggestion === 'object') {
    if (suggestion.label && typeof suggestion.label === 'string') {
      return suggestion.label;
    }

    return suggestion.value;
  }

  return suggestion;
};

var ContainerBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x).withConfig({
  displayName: "TextInput__ContainerBox",
  componentId: "sc-1ai0c08-0"
})(["", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}"], function (props) {
  return props.dropHeight ? (0,styles/* sizeStyle */.Tq)('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
});
var TextInput_defaultDropAlign = {
  top: 'bottom',
  left: 'left'
};
var TextInput = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var _inputRef$current;

  var a11yTitle = _ref.a11yTitle,
      defaultSuggestion = _ref.defaultSuggestion,
      defaultValue = _ref.defaultValue,
      _ref$dropAlign = _ref.dropAlign,
      dropAlign = _ref$dropAlign === void 0 ? TextInput_defaultDropAlign : _ref$dropAlign,
      dropHeight = _ref.dropHeight,
      dropTarget = _ref.dropTarget,
      dropProps = _ref.dropProps,
      _ref$focusIndicator = _ref.focusIndicator,
      focusIndicator = _ref$focusIndicator === void 0 ? true : _ref$focusIndicator,
      icon = _ref.icon,
      id = _ref.id,
      messages = _ref.messages,
      name = _ref.name,
      _onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      onSelect = _ref.onSelect,
      onSuggestionSelect = _ref.onSuggestionSelect,
      onSuggestionsClose = _ref.onSuggestionsClose,
      onSuggestionsOpen = _ref.onSuggestionsOpen,
      placeholder = _ref.placeholder,
      plain = _ref.plain,
      readOnly = _ref.readOnly,
      reverse = _ref.reverse,
      suggestions = _ref.suggestions,
      textAlign = _ref.textAlign,
      valueProp = _ref.value,
      rest = TextInput_objectWithoutPropertiesLoose(_ref, TextInput_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;

  var _useContext = (0,react.useContext)(MessageContext/* MessageContext */.E),
      format = _useContext.format;

  var announce = (0,react.useContext)(AnnounceContext);
  var formContext = (0,react.useContext)(FormContext);
  var inputRef = (0,refs/* useForwardedRef */.t)(ref);
  var dropRef = (0,react.useRef)();
  var suggestionsRef = (0,react.useRef)(); // if this is a readOnly property, don't set a name with the form context
  // this allows Select to control the form context for the name.

  var _formContext$useFormI = formContext.useFormInput({
    name: readOnly ? undefined : name,
    value: valueProp
  }),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1];

  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = (0,react.useState)(false),
      showDrop = _useState2[0],
      setShowDrop = _useState2[1];

  var handleSuggestionSelect = (0,react.useMemo)(function () {
    return onSelect && !onSuggestionSelect ? onSelect : onSuggestionSelect;
  }, [onSelect, onSuggestionSelect]);
  var handleTextSelect = (0,react.useMemo)(function () {
    return onSelect && onSuggestionSelect ? onSelect : undefined;
  }, [onSelect, onSuggestionSelect]);

  var _useState3 = (0,react.useState)(),
      suggestionsAtClose = _useState3[0],
      setSuggestionsAtClose = _useState3[1];

  var openDrop = (0,react.useCallback)(function () {
    setShowDrop(true);
    announce(format({
      id: 'textInput.suggestionIsOpen',
      messages: messages
    }));
    announce(suggestions.length + " " + format({
      id: 'textInput.suggestionsCount',
      messages: messages
    }));
    if (onSuggestionsOpen) onSuggestionsOpen();
  }, [announce, messages, format, onSuggestionsOpen, suggestions]);
  var closeDrop = (0,react.useCallback)(function () {
    setSuggestionsAtClose(suggestions); // must be before closing drop

    setShowDrop(false);
    if (onSuggestionsClose) onSuggestionsClose();
  }, [onSuggestionsClose, suggestions]);
  var clickOutside = (0,react.useCallback)(function (event) {
    if (event.target !== inputRef.current) closeDrop();
  }, [inputRef, closeDrop]); // Handle scenarios where we have focus, the drop isn't showing,
  // and the suggestions change. We don't want to open the drop if
  // the drop has been closed by onEsc and the suggestions haven't
  // changed. So, we remember the suggestions we are showing when
  // the drop was closed and only re-open it when the suggestions
  // subsequently change.

  (0,react.useEffect)(function () {
    if (focus && !showDrop && suggestions && suggestions.length && (!suggestionsAtClose || suggestionsAtClose.length !== suggestions.length)) {
      openDrop();
    }
  }, [focus, openDrop, showDrop, suggestions, suggestionsAtClose]); // if we have no suggestions, close drop if it's open

  (0,react.useEffect)(function () {
    if (showDrop && (!suggestions || !suggestions.length)) {
      closeDrop();
    }
  }, [closeDrop, showDrop, suggestions]);
  var valueSuggestionIndex = (0,react.useMemo)(function () {
    return suggestions ? suggestions.map(function (suggestion) {
      return typeof suggestion === 'object' ? suggestion.value : suggestion;
    }).indexOf(value) : -1;
  }, [suggestions, value]); // choose the best suggestion, either the explicit default or the one
  // that matches the current value

  var resetSuggestionIndex = (0,react.useMemo)(function () {
    if (valueSuggestionIndex === -1 && typeof defaultSuggestion === 'number') {
      return defaultSuggestion;
    }

    return valueSuggestionIndex;
  }, [defaultSuggestion, valueSuggestionIndex]); // activeSuggestionIndex unifies mouse and keyboard interaction of
  // the suggestions

  var _useState4 = (0,react.useState)(resetSuggestionIndex),
      activeSuggestionIndex = _useState4[0],
      setActiveSuggestionIndex = _useState4[1]; // Only update active suggestion index when the mouse actually moves,
  // not when suggestions are moving under the mouse.


  var _useState5 = (0,react.useState)(),
      mouseMovedSinceLastKey = _useState5[0],
      setMouseMovedSinceLastKey = _useState5[1]; // set activeSuggestionIndex when value changes


  (0,react.useEffect)(function () {
    return setActiveSuggestionIndex(valueSuggestionIndex);
  }, [valueSuggestionIndex]); // reset activeSuggestionIndex when the drop is closed

  (0,react.useEffect)(function () {
    if (!showDrop) setActiveSuggestionIndex(resetSuggestionIndex);
  }, [resetSuggestionIndex, showDrop]); // announce active suggestion

  (0,react.useEffect)(function () {
    if (activeSuggestionIndex >= 0) {
      var label = stringLabel(suggestions[activeSuggestionIndex]);
      announce(label + " " + format({
        id: 'textInput.enterSelect',
        messages: messages
      }));
    }
  }, [activeSuggestionIndex, announce, messages, format, suggestions]); // make sure activeSuggestion is visible in scroll

  (0,react.useEffect)(function () {
    var timer = setTimeout(function () {
      var list = suggestionsRef.current;

      if (showDrop && activeSuggestionIndex !== -1 && list) {
        var container = list.parentNode;
        var item = list.children[activeSuggestionIndex];

        if (container.scrollTo) {
          if ((0,DOM/* isNodeAfterScroll */._8)(item, container)) container.scrollTo(0, item.offsetTop - (container.getBoundingClientRect().height - item.getBoundingClientRect().height));else if ((0,DOM/* isNodeBeforeScroll */.rc)(item, container)) container.scrollTo(0, item.offsetTop);
        }
      }
    }, 50); // delay to allow Drop to animate in

    return function () {
      return clearTimeout(timer);
    };
  }, [activeSuggestionIndex, showDrop]);

  var setValueFromSuggestion = function setValueFromSuggestion(event, suggestion) {
    // if we stole the focus in the drop, perhaps by interacting with
    // a suggestion button or the scrollbar, give it back
    inputRef.current.focus();
    inputRef.current.value = suggestion; // needed for uncontrolled cases

    closeDrop();

    if (handleSuggestionSelect) {
      if (event.persist) event.persist();
      var adjustedEvent = event;
      adjustedEvent.suggestion = suggestion;
      handleSuggestionSelect(adjustedEvent);
    }

    setValue(suggestion);
  };

  var onNextSuggestion = (0,react.useCallback)(function (event) {
    event.preventDefault();
    var nextActiveIndex = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);
    setActiveSuggestionIndex(nextActiveIndex);
    setMouseMovedSinceLastKey(false);
  }, [activeSuggestionIndex, suggestions]);
  var onPreviousSuggestion = (0,react.useCallback)(function (event) {
    event.preventDefault();
    var nextActiveIndex = Math.max(activeSuggestionIndex - 1, 0);
    setActiveSuggestionIndex(nextActiveIndex);
    setMouseMovedSinceLastKey(false);
  }, [activeSuggestionIndex]); // account for input value in both controlled and uncontrolled scenarios

  var hasValue = value || ((_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.value);
  var showStyledPlaceholder = (0,react.useMemo)(function () {
    return placeholder && typeof placeholder !== 'string' && !hasValue;
  }, [hasValue, placeholder]);
  var drop;
  var extraProps = {
    onSelect: handleTextSelect
  };

  if (showDrop) {
    drop = /*#__PURE__*/react.createElement(Drop/* Drop */.U, TextInput_extends({
      ref: dropRef,
      id: id ? "text-input-drop__" + id : undefined,
      align: dropAlign,
      responsive: false,
      target: dropTarget || inputRef.current,
      onClickOutside: clickOutside,
      onEsc: closeDrop
    }, dropProps), /*#__PURE__*/react.createElement(ContainerBox, {
      overflow: "auto",
      dropHeight: dropHeight,
      onMouseMove: function onMouseMove() {
        return setMouseMovedSinceLastKey(true);
      }
    }, /*#__PURE__*/react.createElement(StyledSuggestions, {
      ref: suggestionsRef
    }, /*#__PURE__*/react.createElement(InfiniteScroll, {
      items: suggestions,
      step: theme.select.step,
      show: activeSuggestionIndex !== -1 ? activeSuggestionIndex : undefined
    }, function (suggestion, index, itemRef) {
      // Determine whether the label is done as a child or
      // as an option Button kind property.
      var renderedLabel = renderLabel(suggestion);
      var child;
      if (typeof renderedLabel !== 'string') // must be an element rendered by suggestions.label
        child = renderedLabel;else if (!theme.button.option) // don't have theme support, need to layout here
        child = /*#__PURE__*/react.createElement(Box/* Box */.x, {
          align: "start",
          pad: "small"
        }, renderedLabel); // if we have a child, turn on plain

      return /*#__PURE__*/react.createElement("li", {
        key: stringLabel(suggestion) + "-" + index,
        ref: itemRef
      }, /*#__PURE__*/react.createElement(Button/* Button */.z, {
        active: activeSuggestionIndex === index,
        fill: "horizontal",
        plain: !child ? undefined : true,
        align: "start",
        kind: !child ? 'option' : undefined,
        label: !child ? renderedLabel : undefined,
        onClick: function onClick(event) {
          return setValueFromSuggestion(event, suggestion);
        },
        onMouseMove: mouseMovedSinceLastKey && activeSuggestionIndex !== index ? function () {
          return setActiveSuggestionIndex(index);
        } : undefined
      }, child));
    }))));
  }

  var keyboardProps = {
    onKeyDown: onKeyDown
  };

  if (showDrop) {
    keyboardProps.onEnter = function (event) {
      // prevent submitting forms via Enter when the drop is open
      event.preventDefault();
      if (activeSuggestionIndex >= 0) setValueFromSuggestion(event, suggestions[activeSuggestionIndex]);else closeDrop();
    };

    if (activeSuggestionIndex > 0) keyboardProps.onUp = onPreviousSuggestion;
    if (activeSuggestionIndex < suggestions.length - 1) keyboardProps.onDown = onNextSuggestion;
    keyboardProps.onTab = closeDrop;
  } else if (suggestions && suggestions.length > 0) {
    keyboardProps.onDown = openDrop;
  } // For the Keyboard target below, if we have focus,
  // either on the input element or within the drop,
  // then we set the target to the document,
  // otherwise we only listen to onDown on the input element itself,
  // primarily for tests.


  return /*#__PURE__*/react.createElement(StyledTextInputContainer, {
    plain: plain
  }, showStyledPlaceholder && /*#__PURE__*/react.createElement(StyledPlaceholder, null, placeholder), icon && /*#__PURE__*/react.createElement(StyledIcon, {
    reverse: reverse,
    theme: theme
  }, icon), /*#__PURE__*/react.createElement(Keyboard/* Keyboard */.N, TextInput_extends({
    target: focus ? 'document' : undefined
  }, keyboardProps), /*#__PURE__*/react.createElement(StyledTextInput, TextInput_extends({
    "aria-label": a11yTitle,
    ref: inputRef,
    id: id,
    name: name,
    autoComplete: "off",
    plain: plain,
    placeholder: typeof placeholder === 'string' ? placeholder : undefined,
    icon: icon,
    reverse: reverse,
    focus: focus,
    focusIndicator: focusIndicator,
    textAlign: textAlign
  }, rest, extraProps, {
    defaultValue: renderLabel(defaultValue),
    value: renderLabel(value),
    readOnly: readOnly,
    onFocus: function onFocus(event) {
      // Don't do anything if we are acting like we already have
      // focus. This can happen when this input loses focus temporarily
      // to our drop, see onBlur() handler below.
      if (!focus) {
        setFocus(true);

        if (suggestions && suggestions.length > 0) {
          announce(format({
            id: 'textInput.suggestionsExist',
            messages: messages
          }));
          openDrop();
        }

        if (_onFocus) _onFocus(event);
      }
    },
    onBlur: function onBlur(event) {
      // Only treat it as a blur if the element receiving focus
      // isn't in our drop. The relatedTarget will be our drop
      // when the user clicks on a suggestion or interacts with the
      // scrollbar in the drop.
      if (!event.relatedTarget || event.relatedTarget !== dropRef.current) {
        setFocus(false);
        if (_onBlur) _onBlur(event);
      }
    },
    onChange: readOnly ? undefined : function (event) {
      // when TextInput is not contained in a Form, no re-render
      // will come from this onChange and remove the placeholder
      // so we need to update state to ensure the styled
      // placeholder only appears when there is no value
      if (suggestions && focus && !showDrop) {
        openDrop();
      }

      setValue(event.target.value);
      setActiveSuggestionIndex(resetSuggestionIndex);
      if (onChange) onChange(event);
    }
  }))), drop);
});
TextInput.displayName = 'TextInput';
TextInput.propTypes = TextInputPropTypes;

// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/background.js
var background = __webpack_require__(6093);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Text/Text.js + 2 modules
var Text = __webpack_require__(5151);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Select/StyledSelect.js


var StyledContainer = styled_components_browser_esm["default"].div.withConfig({
  displayName: "StyledSelect__StyledContainer",
  componentId: "sc-znp66n-0"
})(["@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}", ";", ";"], function (props) {
  return props.dropHeight ? (0,styles/* sizeStyle */.Tq)('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
}, function (props) {
  return props.theme.select.container && props.theme.select.container.extend;
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Select/utils.js
var applyKey = function applyKey(option, key) {
  if (option === undefined) return undefined;
  if (typeof key === 'object') return applyKey(option, key.key);
  if (typeof key === 'function') return key(option);
  if (key !== undefined) return option[key];
  return option;
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Select/SelectContainer.js
function SelectContainer_extends() { SelectContainer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SelectContainer_extends.apply(this, arguments); }












 // position relative is so scroll can be managed correctly

var OptionsBox = styled_components_browser_esm["default"].div.withConfig({
  displayName: "SelectContainer__OptionsBox",
  componentId: "sc-1wi0ul8-0"
})(["position:relative;scroll-behavior:smooth;overflow:auto;outline:none;"]);
var SelectOption = (0,styled_components_browser_esm["default"])(Button/* Button */.z).withConfig({
  displayName: "SelectContainer__SelectOption",
  componentId: "sc-1wi0ul8-1"
})(["", " display:block;width:100%;"], function (props) {
  return props.selected && props.textComponent && background/* selectedStyle */.G0;
});
var ClearButton = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var clear = _ref.clear,
      onClear = _ref.onClear,
      name = _ref.name,
      theme = _ref.theme;
  var label = clear.label,
      position = clear.position;
  var align = position !== 'bottom' ? 'start' : 'center';
  var buttonLabel = label || "Clear " + (name || 'selection');
  return /*#__PURE__*/react.createElement(Button/* Button */.z, {
    fill: "horizontal",
    ref: ref,
    onClick: onClear,
    focusIndicator: false
  }, /*#__PURE__*/react.createElement(Box/* Box */.x, SelectContainer_extends({}, theme.select.clear.container, {
    align: align
  }), /*#__PURE__*/react.createElement(Text/* Text */.x, theme.select.clear.text, buttonLabel)));
});
var SelectContainer = /*#__PURE__*/(0,react.forwardRef)(function (_ref2, ref) {
  var clear = _ref2.clear,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      disabled = _ref2.disabled,
      disabledKey = _ref2.disabledKey,
      dropHeight = _ref2.dropHeight,
      _ref2$emptySearchMess = _ref2.emptySearchMessage,
      emptySearchMessage = _ref2$emptySearchMess === void 0 ? 'No matches found' : _ref2$emptySearchMess,
      id = _ref2.id,
      labelKey = _ref2.labelKey,
      multiple = _ref2.multiple,
      name = _ref2.name,
      onChange = _ref2.onChange,
      onKeyDown = _ref2.onKeyDown,
      onMore = _ref2.onMore,
      onSearch = _ref2.onSearch,
      optionIndexesInValue = _ref2.optionIndexesInValue,
      options = _ref2.options,
      allOptions = _ref2.allOptions,
      searchPlaceholder = _ref2.searchPlaceholder,
      search = _ref2.search,
      setSearch = _ref2.setSearch,
      selected = _ref2.selected,
      usingKeyboard = _ref2.usingKeyboard,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? '' : _ref2$value,
      valueKey = _ref2.valueKey,
      _ref2$replace = _ref2.replace,
      replace = _ref2$replace === void 0 ? true : _ref2$replace;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;

  var _useState = (0,react.useState)(-1),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = (0,react.useState)(),
      keyboardNavigation = _useState2[0],
      setKeyboardNavigation = _useState2[1];

  var searchRef = (0,react.useRef)();
  var optionsRef = (0,react.useRef)();
  var clearRef = (0,react.useRef)();
  (0,react.useEffect)(function () {
    var optionsNode = optionsRef.current;

    if (optionsNode.children) {
      var clearButton = clearRef.current;
      var index = activeIndex;
      if (clear && clear.position !== 'bottom' && clearButton) index += 1;
      var optionNode = optionsNode.children[index];
      if (optionNode) optionNode.focus();
    }
  }, [activeIndex, clear]); // set initial focus

  (0,react.useEffect)(function () {
    // need to wait for Drop to be ready
    var timer = setTimeout(function () {
      var optionsNode = optionsRef.current;
      var clearButton = clearRef.current;

      if (onSearch) {
        var searchInput = searchRef.current;

        if (searchInput && searchInput.focus) {
          (0,DOM/* setFocusWithoutScroll */.Mv)(searchInput);
        }
      } else if (clear && clearButton && clearButton.focus && clear.position !== 'bottom') {
        (0,DOM/* setFocusWithoutScroll */.Mv)(clearButton);
      } else if (optionsNode && optionsNode.children && usingKeyboard) {
        // if the user is navigating with the keyboard set the
        // first child as the active index when the drop opens
        (0,DOM/* setFocusWithoutScroll */.Mv)(optionsNode.children[0]);
        setActiveIndex(0);
      } else if (optionsNode) {
        (0,DOM/* setFocusWithoutScroll */.Mv)(optionsNode);
      }
    }, 100);
    return function () {
      return clearTimeout(timer);
    };
  }, [onSearch, usingKeyboard, clear]); // clear keyboardNavigation after a while

  (0,react.useEffect)(function () {
    if (keyboardNavigation) {
      // 100ms was empirically determined
      var timer = setTimeout(function () {
        return setKeyboardNavigation(false);
      }, 100);
      return function () {
        return clearTimeout(timer);
      };
    }

    return undefined;
  }, [keyboardNavigation]);
  var optionLabel = (0,react.useCallback)(function (index) {
    return applyKey(options[index], labelKey);
  }, [labelKey, options]);
  var optionValue = (0,react.useCallback)(function (index) {
    return applyKey(options[index], valueKey);
  }, [options, valueKey]);
  var isDisabled = (0,react.useCallback)(function (index) {
    var option = options[index];
    var result;

    if (disabledKey) {
      result = applyKey(option, disabledKey);
    } else if (Array.isArray(disabled)) {
      if (typeof disabled[0] === 'number') {
        result = disabled.indexOf(index) !== -1;
      } else {
        var optionVal = optionValue(index);
        result = disabled.indexOf(optionVal) !== -1;
      }
    }

    return result;
  }, [disabled, disabledKey, options, optionValue]);
  var isSelected = (0,react.useCallback)(function (index) {
    var result;

    if (selected) {
      // deprecated in favor of value
      result = selected.indexOf(index) !== -1;
    } else {
      var optionVal = optionValue(index);

      if (Array.isArray(value)) {
        if (value.length === 0) {
          result = false;
        } else if (typeof value[0] !== 'object') {
          result = value.indexOf(optionVal) !== -1;
        } else if (valueKey) {
          result = value.some(function (valueItem) {
            var valueValue = typeof valueKey === 'function' ? valueKey(valueItem) : valueItem[valueKey];
            return valueValue === optionVal;
          });
        }
      } else if (valueKey && typeof value === 'object') {
        var valueValue = typeof valueKey === 'function' ? valueKey(value) : value[valueKey];
        result = valueValue === optionVal;
      } else {
        result = value === optionVal;
      }
    }

    return result;
  }, [optionValue, selected, value, valueKey]);
  var selectOption = (0,react.useCallback)(function (index) {
    return function (event) {
      if (onChange) {
        var nextValue;
        var nextSelected;

        if (multiple) {
          var nextOptionIndexesInValue = optionIndexesInValue.slice(0);
          var allOptionsIndex = allOptions.indexOf(options[index]);
          var valueIndex = optionIndexesInValue.indexOf(allOptionsIndex);

          if (valueIndex === -1) {
            nextOptionIndexesInValue.push(allOptionsIndex);
          } else {
            nextOptionIndexesInValue.splice(valueIndex, 1);
          }

          nextValue = nextOptionIndexesInValue.map(function (i) {
            return valueKey && valueKey.reduce ? applyKey(allOptions[i], valueKey) : allOptions[i];
          });
          nextSelected = nextOptionIndexesInValue;
        } else {
          nextValue = valueKey && valueKey.reduce ? applyKey(options[index], valueKey) : options[index];
          nextSelected = index;
        }

        onChange(event, {
          option: options[index],
          value: nextValue,
          selected: nextSelected
        });
      }
    };
  }, [multiple, onChange, optionIndexesInValue, options, allOptions, valueKey]);
  var onClear = (0,react.useCallback)(function (event) {
    onChange(event, {
      option: undefined,
      value: '',
      selected: ''
    });
  }, [onChange]);
  var onNextOption = (0,react.useCallback)(function (event) {
    event.preventDefault();
    var nextActiveIndex = activeIndex + 1;
    var clearButton = clearRef.current;

    while (nextActiveIndex < options.length && isDisabled(nextActiveIndex)) {
      nextActiveIndex += 1;
    }

    if (nextActiveIndex !== options.length) {
      setActiveIndex(nextActiveIndex);
      setKeyboardNavigation(true);
    }

    if (clear && clear.position === 'bottom' && clearButton && nextActiveIndex >= options.length) {
      setActiveIndex(options.length);
      (0,DOM/* setFocusWithoutScroll */.Mv)(clearButton);
    }
  }, [activeIndex, isDisabled, options, clear]);
  var onPreviousOption = (0,react.useCallback)(function (event) {
    event.preventDefault();
    var nextActiveIndex = activeIndex - 1;
    var clearButton = clearRef.current;

    while (nextActiveIndex >= 0 && isDisabled(nextActiveIndex)) {
      nextActiveIndex -= 1;
    }

    if (nextActiveIndex >= 0) {
      setActiveIndex(nextActiveIndex);
      setKeyboardNavigation(true);
    }

    if (clear && clear.position !== 'bottom' && clearButton && activeIndex === 0) {
      setActiveIndex(-1);
    }
  }, [activeIndex, isDisabled, clear]);
  var onKeyDownOption = (0,react.useCallback)(function (event) {
    if (!onSearch) {
      var nextActiveIndex = options.findIndex(function (e, index) {
        var label;

        if (typeof e === 'object') {
          label = e.label || applyKey(e, labelKey);
        } else {
          label = e;
        }

        return typeof label === 'string' && label.charAt(0).toLowerCase() === event.key.toLowerCase() && !isDisabled(index);
      });

      if (nextActiveIndex >= 0) {
        event.preventDefault();
        setActiveIndex(nextActiveIndex);
        setKeyboardNavigation(true);
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [onKeyDown, options, isDisabled, onSearch, labelKey]);
  var onActiveOption = (0,react.useCallback)(function (index) {
    return function () {
      if (!keyboardNavigation) setActiveIndex(index);
    };
  }, [keyboardNavigation]);
  var onSelectOption = (0,react.useCallback)(function (event) {
    if (activeIndex >= 0 && activeIndex < options.length) {
      event.preventDefault(); // prevent submitting forms

      selectOption(activeIndex)(event);
    }
  }, [activeIndex, selectOption, options]);

  var shouldShowClearButton = function shouldShowClearButton(position) {
    var hasValue = Boolean(multiple ? value.length : value);
    var showAtPosition = position === 'bottom' ? (clear == null ? void 0 : clear.position) === 'bottom' : (clear == null ? void 0 : clear.position) !== 'bottom';
    return clear && hasValue && showAtPosition;
  };

  var customSearchInput = theme.select.searchInput;
  var SelectTextInput = customSearchInput || TextInput;
  var selectOptionsStyle = theme.select.options ? SelectContainer_extends({}, theme.select.options.box, theme.select.options.container) : {};
  return /*#__PURE__*/react.createElement(Keyboard/* Keyboard */.N, {
    onEnter: onSelectOption,
    onSpace: onSelectOption,
    onUp: onPreviousOption,
    onDown: onNextOption,
    onKeyDown: onKeyDownOption
  }, /*#__PURE__*/react.createElement(StyledContainer, {
    ref: ref,
    as: Box/* Box */.x,
    id: id ? id + "__select-drop" : undefined,
    dropHeight: dropHeight
  }, onSearch && /*#__PURE__*/react.createElement(Box/* Box */.x, {
    pad: !customSearchInput ? 'xsmall' : undefined,
    flex: false
  }, /*#__PURE__*/react.createElement(SelectTextInput, {
    focusIndicator: !customSearchInput,
    size: "small",
    ref: searchRef,
    type: "search",
    value: search || '',
    placeholder: searchPlaceholder,
    onChange: function onChange(event) {
      var nextSearch = event.target.value;
      setSearch(nextSearch);
      setActiveIndex(-1);
      onSearch(nextSearch);
    }
  })), /*#__PURE__*/react.createElement(OptionsBox, {
    role: "listbox",
    tabIndex: "-1",
    ref: optionsRef,
    "aria-multiselectable": multiple
  }, shouldShowClearButton('top') && /*#__PURE__*/react.createElement(ClearButton, {
    ref: clearRef,
    clear: clear,
    name: name,
    onClear: onClear,
    theme: theme
  }), options.length > 0 ? /*#__PURE__*/react.createElement(InfiniteScroll, {
    items: options,
    step: theme.select.step,
    onMore: onMore,
    replace: replace,
    show: activeIndex !== -1 ? activeIndex : undefined
  }, function (option, index, optionRef) {
    var optionDisabled = isDisabled(index);
    var optionSelected = isSelected(index);
    var optionActive = activeIndex === index; // Determine whether the label is done as a child or
    // as an option Button kind property.

    var child;
    var textComponent = false;

    if (children) {
      child = children(option, index, options, {
        active: optionActive,
        disabled: optionDisabled,
        selected: optionSelected
      });
      if (typeof child === 'string' || child.props && child.props.children && typeof child.props.children === 'string') textComponent = true;
    } else if (theme.select.options) {
      child = /*#__PURE__*/react.createElement(Box/* Box */.x, selectOptionsStyle, /*#__PURE__*/react.createElement(Text/* Text */.x, theme.select.options.text, optionLabel(index)));
      textComponent = true;
    } // if we have a child, turn on plain, and hoverIndicator


    return /*#__PURE__*/react.createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
    , {
      key: index,
      ref: optionRef,
      tabIndex: optionSelected ? '0' : '-1',
      role: "option",
      "aria-setsize": options.length,
      "aria-posinset": index + 1,
      "aria-selected": optionSelected,
      focusIndicator: false,
      "aria-disabled": optionDisabled || undefined,
      plain: !child ? undefined : true,
      align: "start",
      kind: !child ? 'option' : undefined,
      hoverIndicator: !child ? undefined : 'background',
      label: !child ? optionLabel(index) : undefined,
      disabled: optionDisabled || undefined,
      active: optionActive,
      selected: optionSelected,
      onMouseOver: !optionDisabled ? onActiveOption(index) : undefined,
      onClick: !optionDisabled ? selectOption(index) : undefined,
      textComponent: textComponent
    }, child);
  }) : /*#__PURE__*/react.createElement(SelectOption, {
    key: "search_empty",
    tabIndex: "-1",
    role: "menuitem",
    hoverIndicator: "background",
    disabled: true
  }, /*#__PURE__*/react.createElement(Box/* Box */.x, selectOptionsStyle, /*#__PURE__*/react.createElement(Text/* Text */.x, theme.select.container.text, emptySearchMessage))), shouldShowClearButton('bottom') && /*#__PURE__*/react.createElement(ClearButton, {
    ref: clearRef,
    clear: clear,
    name: name,
    onClear: onClear,
    theme: theme
  }))));
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Select/propTypes.js
function propTypes_extends() { propTypes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return propTypes_extends.apply(this, arguments); }



var Select_propTypes_PropType = {};

if (false) {}

var SelectPropTypes = Select_propTypes_PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Select/Select.js
var Select_excluded = ["a11yTitle", "aria-label", "alignSelf", "children", "clear", "closeOnChange", "defaultValue", "disabled", "disabledKey", "dropAlign", "dropHeight", "dropProps", "dropTarget", "emptySearchMessage", "focusIndicator", "gridArea", "id", "icon", "labelKey", "margin", "messages", "multiple", "name", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onKeyDown", "onMore", "onOpen", "onSearch", "open", "options", "placeholder", "plain", "replace", "searchPlaceholder", "selected", "size", "value", "valueKey", "valueLabel"];

function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }

function Select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














var SelectTextInput = (0,styled_components_browser_esm["default"])(TextInput).withConfig({
  displayName: "Select__SelectTextInput",
  componentId: "sc-17idtfo-0"
})(["cursor:", ";"], function (props) {
  return props.defaultCursor ? 'default' : 'pointer';
});
var HiddenInput = styled_components_browser_esm["default"].input.withConfig({
  displayName: "Select__HiddenInput",
  componentId: "sc-17idtfo-1"
})(["display:none;"]);
var StyledSelectDropButton = (0,styled_components_browser_esm["default"])(DropButton).withConfig({
  displayName: "Select__StyledSelectDropButton",
  componentId: "sc-17idtfo-2"
})(["", ";", ";", ";"], function (props) {
  return !props.callerPlain && styles/* controlBorderStyle */.Lw;
}, function (props) {
  return props.theme.select && props.theme.select.control && props.theme.select.control.extend;
}, function (props) {
  return props.open && props.theme.select.control.open;
});
StyledSelectDropButton.defaultProps = {};
Object.setPrototypeOf(StyledSelectDropButton.defaultProps, default_props/* defaultProps */.l);
var Select_defaultDropAlign = {
  top: 'bottom',
  left: 'left'
};
var Select = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      ariaLabel = _ref['aria-label'],
      alignSelf = _ref.alignSelf,
      children = _ref.children,
      _ref$clear = _ref.clear,
      clear = _ref$clear === void 0 ? false : _ref$clear,
      _ref$closeOnChange = _ref.closeOnChange,
      closeOnChange = _ref$closeOnChange === void 0 ? true : _ref$closeOnChange,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      disabledKey = _ref.disabledKey,
      _ref$dropAlign = _ref.dropAlign,
      dropAlign = _ref$dropAlign === void 0 ? Select_defaultDropAlign : _ref$dropAlign,
      dropHeight = _ref.dropHeight,
      dropProps = _ref.dropProps,
      dropTarget = _ref.dropTarget,
      emptySearchMessage = _ref.emptySearchMessage,
      focusIndicator = _ref.focusIndicator,
      gridArea = _ref.gridArea,
      id = _ref.id,
      icon = _ref.icon,
      labelKey = _ref.labelKey,
      margin = _ref.margin,
      messages = _ref.messages,
      multiple = _ref.multiple,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      onClose = _ref.onClose,
      onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      onMore = _ref.onMore,
      onOpen = _ref.onOpen,
      onSearch = _ref.onSearch,
      propOpen = _ref.open,
      optionsProp = _ref.options,
      placeholder = _ref.placeholder,
      plain = _ref.plain,
      replace = _ref.replace,
      searchPlaceholder = _ref.searchPlaceholder,
      selected = _ref.selected,
      size = _ref.size,
      valueProp = _ref.value,
      valueKey = _ref.valueKey,
      valueLabel = _ref.valueLabel,
      rest = Select_objectWithoutPropertiesLoose(_ref, Select_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props/* defaultProps.theme */.l.theme;
  var inputRef = (0,react.useRef)();
  var formContext = (0,react.useContext)(FormContext);

  var _useContext = (0,react.useContext)(MessageContext/* MessageContext */.E),
      format = _useContext.format; // Determine if the Select is opened with the keyboard. If so,
  // focus should be set on the first option when the drop opens
  // see set initial focus code in SelectContainer.js


  var _useState = (0,react.useState)(),
      usingKeyboard = _useState[0],
      setUsingKeyboard = _useState[1];

  var onMouseDown = function onMouseDown() {
    return setUsingKeyboard(false);
  };

  var onKeyPress = function onKeyPress() {
    return setUsingKeyboard(true);
  };

  (0,react.useEffect)(function () {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyPress);
    return function () {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyPress);
    };
  }, []); // value is used for what we receive in valueProp and the basis for
  // what we send with onChange
  // When 'valueKey' sets 'reduce', the value(s) here should match
  // what the 'valueKey' would return for the corresponding
  // selected option object.
  // Otherwise, the value(s) should match the selected options.

  var _formContext$useFormI = formContext.useFormInput({
    name: name,
    value: valueProp,
    initialValue: defaultValue || ''
  }),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1]; // valuedValue is the value mapped with any valueKey applied
  // When the options array contains objects, this property indicates how
  // to retrieve the value of each option.
  // If a string is provided, it is used as the key to retrieve a
  // property of an option object.
  // If a function is provided, it is called with the option and should
  // return the value.
  // If reduce is true, this value will be used for the 'value'
  // delivered via 'onChange'.


  var valuedValue = (0,react.useMemo)(function () {
    if (Array.isArray(value)) return value.map(function (v) {
      return valueKey && valueKey.reduce ? v : applyKey(v, valueKey);
    });
    return valueKey && valueKey.reduce ? value : applyKey(value, valueKey);
  }, [value, valueKey]); // search input value

  var _useState2 = (0,react.useState)(),
      search = _useState2[0],
      setSearch = _useState2[1]; // All select option indices and values


  var _useState3 = (0,react.useState)(optionsProp),
      allOptions = _useState3[0],
      setAllOptions = _useState3[1]; // Track changes to options property, except when options are being
  // updated due to search activity. Allows option's initial index value
  // to be referenced when filtered by search.


  (0,react.useEffect)(function () {
    if (!search) setAllOptions(optionsProp);
  }, [optionsProp, search]); // the option indexes present in the value

  var optionIndexesInValue = (0,react.useMemo)(function () {
    var result = [];
    allOptions.forEach(function (option, index) {
      if (selected !== undefined) {
        if (Array.isArray(selected)) {
          if (selected.indexOf(index) !== -1) result.push(index);
        } else if (index === selected) {
          result.push(index);
        }
      } else if (Array.isArray(valuedValue)) {
        if (valuedValue.some(function (v) {
          return v === applyKey(option, valueKey);
        })) {
          result.push(index);
        }
      } else if (valuedValue === applyKey(option, valueKey)) {
        result.push(index);
      }
    });
    return result;
  }, [allOptions, selected, valueKey, valuedValue]);

  var _useState4 = (0,react.useState)(propOpen),
      open = _useState4[0],
      setOpen = _useState4[1];

  (0,react.useEffect)(function () {
    return setOpen(propOpen);
  }, [propOpen]);
  var onRequestOpen = (0,react.useCallback)(function () {
    if (open) return;
    setOpen(true);
    if (onOpen) onOpen();
  }, [onOpen, open]);
  var onRequestClose = (0,react.useCallback)(function () {
    setOpen(false);
    if (onClose) onClose();
    setSearch();
  }, [onClose]);
  var triggerChangeEvent = (0,react.useCallback)(function (nextValue) {
    // Calling set value function directly on input because React library
    // overrides setter `event.target.value =` and loses original event
    // target fidelity.
    // https://stackoverflow.com/a/46012210
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(inputRef.current, nextValue);
    var event = new Event('input', {
      bubbles: true
    });
    inputRef.current.dispatchEvent(event);
  }, []);
  var onSelectChange = (0,react.useCallback)(function (event, _ref2) {
    var option = _ref2.option,
        nextValue = _ref2.value,
        nextSelected = _ref2.selected;
    if (closeOnChange) onRequestClose(); // nextValue must not be of type object to set value directly on the
    // input. if it is an object, then the user has not provided necessary
    // props to reduce object option

    if (typeof nextValue !== 'object' && nextValue !== event.target.value && inputRef.current) {
      // select registers changing option as a click event or keydown.
      // when in a form, we need to programatically trigger a change
      // event in order for the change event to be registered upstream
      // necessary for change validation in form
      triggerChangeEvent(nextValue);
    }

    setValue(nextValue);

    if (onChange) {
      event.persist();
      var adjustedEvent; // support for native event used by Preact

      if (event instanceof Event) {
        adjustedEvent = new event.constructor(event.type, event);
        Object.defineProperties(adjustedEvent, {
          target: {
            value: inputRef.current
          },
          value: {
            value: nextValue
          },
          option: {
            value: option
          },
          selected: {
            value: nextSelected
          }
        });
      } else {
        adjustedEvent = event;
        adjustedEvent.target = inputRef.current;
        adjustedEvent.value = nextValue;
        adjustedEvent.option = option;
        adjustedEvent.selected = nextSelected;
      }

      onChange(adjustedEvent);
    }

    setSearch();
  }, [closeOnChange, onChange, onRequestClose, setValue, triggerChangeEvent]);
  var SelectIcon;

  switch (icon) {
    case false:
      break;

    case true:
    case undefined:
      SelectIcon = open && theme.select.icons.up ? theme.select.icons.up : theme.select.icons.down;
      break;

    default:
      SelectIcon = icon;
  } // element to show, trumps inputValue


  var selectValue = (0,react.useMemo)(function () {
    if (valueLabel instanceof Function) {
      if (value) return valueLabel(value);
    } else if (valueLabel) return valueLabel;else if ( /*#__PURE__*/react.isValidElement(value)) return value; // deprecated


    return undefined;
  }, [value, valueLabel]); // if labelKey is a function and valueLabel is not defined
  // we should use the labelKey function to display the
  // selected value

  var displayLabelKey = (0,react.useMemo)(function () {
    var optionLabelKey = applyKey(allOptions[optionIndexesInValue[0]], labelKey);
    if (!selectValue && optionIndexesInValue.length === 1 && typeof optionLabelKey === 'object') return optionLabelKey;
    return undefined;
  }, [labelKey, allOptions, optionIndexesInValue, selectValue]); // text to show
  // When the options array contains objects, this property indicates how
  // to retrieve the value of each option.
  // If a string is provided, it is used as the key to retrieve a
  // property of an option object.
  // If a function is provided, it is called with the option and should
  // return the value.
  // If reduce is true, this value will be used for the 'value'
  // delivered via 'onChange'.

  var inputValue = (0,react.useMemo)(function () {
    if (!selectValue) {
      if (optionIndexesInValue.length === 0) return '';
      if (optionIndexesInValue.length === 1) return applyKey(allOptions[optionIndexesInValue[0]], labelKey);
      return format({
        id: 'select.multiple',
        messages: messages
      });
    }

    return undefined;
  }, [labelKey, messages, format, optionIndexesInValue, allOptions, selectValue]);
  var iconColor = (0,colors/* normalizeColor */.ut)(theme.select.icons.color || 'control', theme);
  return /*#__PURE__*/react.createElement(Keyboard/* Keyboard */.N, {
    onDown: onRequestOpen,
    onUp: onRequestOpen
  }, /*#__PURE__*/react.createElement(StyledSelectDropButton, {
    ref: ref,
    a11yTitle: "" + (ariaLabel || a11yTitle || placeholder || 'Open Drop') + (value ? format({
      id: 'select.selected',
      messages: messages,
      values: {
        currentSelectedValue: value
      }
    }) : ''),
    "aria-expanded": Boolean(open),
    "aria-haspopup": "listbox",
    id: id,
    disabled: disabled === true || undefined,
    dropAlign: dropAlign,
    dropTarget: dropTarget,
    open: open,
    alignSelf: alignSelf,
    focusIndicator: focusIndicator,
    onFocus: onFocus,
    onBlur: onBlur,
    gridArea: gridArea,
    margin: margin,
    onOpen: onRequestOpen,
    onClose: onRequestClose,
    onClick: onClick,
    dropContent: /*#__PURE__*/react.createElement(SelectContainer, {
      clear: clear,
      disabled: disabled,
      disabledKey: disabledKey,
      dropHeight: dropHeight,
      emptySearchMessage: emptySearchMessage,
      id: id,
      labelKey: labelKey,
      multiple: multiple,
      name: name,
      onChange: onSelectChange,
      onKeyDown: onKeyDown,
      onMore: onMore,
      onSearch: onSearch,
      options: optionsProp,
      allOptions: allOptions,
      optionIndexesInValue: optionIndexesInValue,
      replace: replace,
      searchPlaceholder: searchPlaceholder,
      search: search,
      setSearch: setSearch,
      selected: selected,
      usingKeyboard: usingKeyboard,
      value: value,
      valueKey: valueKey
    }, children) // StyledDropButton needs to know if the border should be shown
    ,
    callerPlain: plain,
    plain: true // Button should be plain
    ,
    dropProps: dropProps,
    theme: theme
  }, /*#__PURE__*/react.createElement(Box/* Box */.x, {
    align: "center",
    direction: "row",
    justify: "between",
    background: theme.select.background
  }, /*#__PURE__*/react.createElement(Box/* Box */.x, {
    direction: "row",
    flex: true,
    basis: "auto"
  }, selectValue || displayLabelKey ? /*#__PURE__*/react.createElement(react.Fragment, null, selectValue || displayLabelKey, /*#__PURE__*/react.createElement(HiddenInput, {
    type: "text",
    name: name,
    id: id ? id + "__input" : undefined,
    value: inputValue,
    ref: inputRef,
    readOnly: true
  })) : /*#__PURE__*/react.createElement(SelectTextInput, Select_extends({
    a11yTitle: (ariaLabel || a11yTitle) && "" + (ariaLabel || a11yTitle) + (value && typeof value === 'string' ? ", " + value : '') // When Select is disabled, we want to show a default cursor
    // but not have disabled styling come from TextInput
    // Disabled can be a bool or an array of options to disable.
    // We only want to disable the TextInput if the control
    // button should be disabled which occurs when disabled
    // equals true.
    ,
    defaultCursor: disabled === true || undefined,
    focusIndicator: false,
    id: id ? id + "__input" : undefined,
    name: name,
    ref: inputRef
  }, rest, {
    tabIndex: "-1",
    type: "text",
    placeholder: placeholder,
    plain: true,
    readOnly: true,
    value: inputValue,
    size: size,
    theme: theme
  }))), SelectIcon && /*#__PURE__*/react.createElement(Box/* Box */.x, {
    margin: theme.select.icons.margin,
    flex: false,
    style: {
      minWidth: 'auto'
    }
  }, /*#__PURE__*/(0,react.isValidElement)(SelectIcon) ? SelectIcon : /*#__PURE__*/react.createElement(SelectIcon, {
    color: iconColor,
    size: size
  })))));
});
Select.defaultProps = Select_extends({}, default_props/* defaultProps */.l);
Select.displayName = 'Select';
Select.propTypes = SelectPropTypes;


/***/ }),

/***/ 5151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/use-isomorphic-layout-effect.js
var use_isomorphic_layout_effect = __webpack_require__(2320);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/colors.js
var colors = __webpack_require__(6808);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/styles.js
var styles = __webpack_require__(363);
// EXTERNAL MODULE: ./node_modules/grommet/es6/default-props.js
var default_props = __webpack_require__(1755);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Text/StyledText.js




var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.text[size];

  if (data) {
    return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
  }

  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:normal;"], size);
};

var truncateStyle = "\n  white-space: nowrap;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = (0,styled_components_browser_esm.css)(["color:", ";"], function (props) {
  return (0,colors/* normalizeColor */.ut)(props.colorProp, props.theme);
});
var weightStyle = (0,styled_components_browser_esm.css)(["font-weight:", ";"], function (props) {
  return props.weight;
});
var wordBreakStyle = (0,styled_components_browser_esm.css)(["word-break:", ";"], function (props) {
  return props.wordBreak;
});
var fontFamily = (0,styled_components_browser_esm.css)(["font-family:", ";"], function (props) {
  return props.theme.text.font.family;
});
var StyledText = (0,styled_components_browser_esm["default"])('span').withConfig({
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return defaultValidatorFn(prop) && prop !== 'size';
  }
}).withConfig({
  displayName: "StyledText",
  componentId: "sc-1sadyjn-0"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], styles/* genericStyles */.$G, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.textAlign && styles/* textAlignStyle */.jt;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.colorProp && colorStyle;
}, function (props) {
  return props.weight && weightStyle;
}, function (props) {
  return props.wordBreak && wordBreakStyle;
}, function (props) {
  return props.theme.text.font && props.theme.text.font.family && fontFamily;
}, function (props) {
  return props.theme.text && props.theme.text.extend;
});
StyledText.defaultProps = {};
Object.setPrototypeOf(StyledText.defaultProps, default_props/* defaultProps */.l);

// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Tip/Tip.js + 1 modules
var Tip = __webpack_require__(8189);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/refs.js
var refs = __webpack_require__(7187);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Text/propTypes.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var PropType = {};

if (false) {}

var TextPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Text/Text.js
var _excluded = ["children", "color", "tag", "as", "tip", "a11yTitle", "truncate"];

function Text_extends() { Text_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Text_extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var Text = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      color = _ref.color,
      tag = _ref.tag,
      as = _ref.as,
      tipProp = _ref.tip,
      _ref$a11yTitle = _ref.a11yTitle,
      a11yTitle = _ref$a11yTitle === void 0 ? typeof tipProp === 'string' && tipProp || (tipProp == null ? void 0 : tipProp.content) || undefined : _ref$a11yTitle,
      truncate = _ref.truncate,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var textRef = (0,refs/* useForwardedRef */.t)(ref);

  var _useState = (0,react.useState)(false),
      textTruncated = _useState[0],
      setTextTruncated = _useState[1];

  (0,use_isomorphic_layout_effect/* useLayoutEffect */.b)(function () {
    var updateTip = function updateTip() {
      setTextTruncated(false);

      if (truncate === 'tip' && textRef.current && textRef.current.scrollWidth > textRef.current.offsetWidth) {
        setTextTruncated(true);
      }
    };

    window.addEventListener('resize', updateTip);
    updateTip();
    return function () {
      return window.removeEventListener('resize', updateTip);
    };
  }, [textRef, truncate]);
  var styledTextResult = /*#__PURE__*/react.createElement(StyledText, Text_extends({
    as: !as && tag ? tag : as,
    colorProp: color,
    "aria-label": a11yTitle,
    truncate: truncate
  }, rest, {
    ref: textRef
  }), children);

  if (tipProp || textTruncated) {
    // place the text content in a tip if truncate === 'tip'
    // and the text has been truncated
    if (textTruncated) {
      return /*#__PURE__*/react.createElement(Tip/* Tip */.C, Text_extends({
        content: children
      }, tipProp), styledTextResult);
    } // place the text content in a tip if truncate !== 'tip'
    // it displays even if the text has not truncated


    if (truncate !== 'tip') {
      return /*#__PURE__*/react.createElement(Tip/* Tip */.C, tipProp, styledTextResult);
    }
  }

  return styledTextResult;
});
Text.displayName = 'Text';
Text.defaultProps = {
  level: 1
};
Text.propTypes = TextPropTypes;


/***/ }),

/***/ 8189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ Tip)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Box/Box.js + 3 modules
var Box = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Drop/Drop.js + 6 modules
var Drop = __webpack_require__(5865);
// EXTERNAL MODULE: ./node_modules/grommet/es6/utils/refs.js
var refs = __webpack_require__(7187);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tip/propTypes.js

var PropType = {};

if (false) {}

var TipPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tip/Tip.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var Tip = /*#__PURE__*/(0,react.forwardRef)(function (_ref, tipRef) {
  var children = _ref.children,
      content = _ref.content,
      dropProps = _ref.dropProps,
      plain = _ref.plain;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);

  var _useState = (0,react.useState)(false),
      over = _useState[0],
      setOver = _useState[1];

  var _useState2 = (0,react.useState)(),
      usingKeyboard = _useState2[0],
      setUsingKeyboard = _useState2[1];

  var onMouseDown = function onMouseDown() {
    return setUsingKeyboard(false);
  };

  var onKeyDown = function onKeyDown() {
    return setUsingKeyboard(true);
  };

  (0,react.useEffect)(function () {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return function () {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  var componentRef = (0,refs/* useForwardedRef */.t)(tipRef); // Three use case for children
  // 1. Tip has a single child + it is a React Element => Great!
  // 2. Tip has a single child +  not React Element =>
  // span will wrap the child so we can use ref and events.
  // 3. Tip has more than one child => Abort, display Children.only error

  var child = react.Children.count(children) <= 1 && ! /*#__PURE__*/react.isValidElement(children) && /*#__PURE__*/react.createElement("span", null, children) || react.Children.only(children);
  var clonedChild = /*#__PURE__*/(0,react.cloneElement)(child, {
    onMouseEnter: function onMouseEnter() {
      return setOver(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setOver(false);
    },
    onFocus: function onFocus() {
      if (usingKeyboard) setOver(true);
    },
    onBlur: function onBlur() {
      if (usingKeyboard) setOver(false);
    },
    key: 'tip-child',
    ref: function ref(node) {
      // https://github.com/facebook/react/issues/8873#issuecomment-287873307
      if (typeof componentRef === 'function') {
        componentRef(node);
      } else if (componentRef) {
        // eslint-disable-next-line no-param-reassign
        componentRef.current = node;
      } // Call the original ref, if any


      var callerRef = child.ref;

      if (typeof callerRef === 'function') {
        callerRef(node);
      } else if (callerRef) {
        callerRef.current = node;
      }
    }
  });
  return [clonedChild, over && /*#__PURE__*/react.createElement(Drop/* Drop */.U, _extends({
    target: componentRef.current,
    trapFocus: false,
    key: "tip-drop"
  }, theme.tip.drop, dropProps), plain ? content : /*#__PURE__*/react.createElement(Box/* Box */.x, theme.tip.content, content))];
});
Tip.displayName = 'Tip';
Tip.propTypes = TipPropTypes;


/***/ }),

/***/ 8866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ ContainerTargetContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var ContainerTargetContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(typeof document === 'object' ? document.body : undefined);

/***/ }),

/***/ 7598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ MessageContext),
/* harmony export */   "W": () => (/* binding */ _format)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _languages_default_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7412);

 // options:
//   id: message id
//   messages: (optional) an object of message overrides
//   values: (optional) currently unused but in the future
//     will be an object with substitution values for
//     positional variables in the message text.
//   defaultMessage: (optional) default message to use if
//     the message isn't found elsewhere.

var _format = function format(options, messages) {
  var _options$id;

  // Message id's are hierarchical. For the component-specific
  // message objects passed as options.messages, just use the last
  // component in the id for backwards compatibility.
  //
  // For overall messages passed to grommet, use the hierarchical
  // id. For that messages object, the messages are in an object
  // hierarchy by component, similar to how the theme works.
  //
  // Applications that typically keep their messages in flat
  // objects with a single key string per message can override
  // this format function to get the grommet messages from
  // their bundles that way and don't need to pass the messages
  // themselves in this property, just the format function.
  var idParts = ((_options$id = options.id) == null ? void 0 : _options$id.split('.')) || []; // eslint-disable-next-line no-unsafe-optional-chaining

  var baseId = idParts[(idParts == null ? void 0 : idParts.length) - 1];
  var messageObj = messages;
  idParts.forEach(function (idPart) {
    if (typeof messageObj === 'object') {
      messageObj = messageObj[idPart];
    }
  });
  var message = (options.messages ? options.messages[baseId] : undefined) || messageObj || options.defaultMessage;
  var values = options.values;
  var newMessage = message;
  var tokens = message == null ? void 0 : message.match(/\{(.+?)\}/g);
  tokens == null ? void 0 : tokens.forEach(function (token) {
    var names = token.substr(1, token.length - 2);
    var value = values[names];
    newMessage = newMessage.replace(token, value);
  });
  return values ? newMessage : message;
};


var defaultValue = {
  messages: _languages_default_json__WEBPACK_IMPORTED_MODULE_1__,
  format: function format(options) {
    return _format(options, _languages_default_json__WEBPACK_IMPORTED_MODULE_1__);
  }
};
var MessageContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultValue);

/***/ }),

/***/ 456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ ResponsiveContext)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ResponsiveContext/propTypes.js

var PropType = {};

if (false) {}

var ResponsiveContextPropTypes = PropType;
;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js


var ResponsiveContext = /*#__PURE__*/react.createContext(undefined);
ResponsiveContext.propTypes = ResponsiveContextPropTypes;

/***/ }),

/***/ 8601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ RootsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
 // When toggling aria-hidden values, we only want to affect elements
// in the DOM that come from Grommet, so we track those elements in this
// context value. See FocusedContainer.js

var RootsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext([]);

/***/ }),

/***/ 1755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ defaultProps)
/* harmony export */ });
/* unused harmony export extendDefaultTheme */
/* harmony import */ var _themes_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5502);


var defaultProps = {
  theme: _themes_base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u
};
var extendDefaultTheme = function extendDefaultTheme(theme) {
  defaultProps.theme = deepMerge(base, theme);
};

/***/ }),

/***/ 5502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* unused harmony export generate */
/* harmony import */ var grommet_icons_icons_Actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2668);
/* harmony import */ var grommet_icons_icons_CircleInformation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3178);
/* harmony import */ var grommet_icons_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9263);
/* harmony import */ var grommet_icons_icons_Expand__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1131);
/* harmony import */ var grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2568);
/* harmony import */ var grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7953);
/* harmony import */ var grommet_icons_icons_FormNext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2700);
/* harmony import */ var grommet_icons_icons_FormPrevious__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7621);
/* harmony import */ var grommet_icons_icons_FormUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3165);
/* harmony import */ var grommet_icons_icons_Next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9420);
/* harmony import */ var grommet_icons_icons_Pause__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8838);
/* harmony import */ var grommet_icons_icons_Play__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3772);
/* harmony import */ var grommet_icons_icons_Previous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7544);
/* harmony import */ var grommet_icons_icons_StatusCriticalSmall__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3616);
/* harmony import */ var grommet_icons_icons_StatusGoodSmall__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6705);
/* harmony import */ var grommet_icons_icons_StatusWarningSmall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1866);
/* harmony import */ var grommet_icons_icons_StatusUnknownSmall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6646);
/* harmony import */ var grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9290);
/* harmony import */ var grommet_icons_icons_Volume__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5004);
/* harmony import */ var grommet_icons_icons_VolumeLow__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7165);
/* harmony import */ var grommet_icons_themes_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8128);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5543);
/* harmony import */ var _utils_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9207);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
























var brandColor = '#7D4CDB';
var accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
var neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
var statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC'
};
var darkColors = ['#333333', '#555555', '#777777', '#999999', '#999999', '#999999'];
var lightColors = ['#F8F8F8', '#F2F2F2', '#EDEDED', '#DADADA', '#DADADA', '#DADADA'];
var focusColor = accentColors[0];
var colors = {
  active: 'rgba(221, 221, 221, 0.5)',
  'background-back': {
    dark: '#33333308',
    light: '#EDEDED'
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF'
  },
  'background-contrast': {
    light: '#33333310',
    dark: '#FFFFFF18'
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: 'rgba(255, 255, 255, 0.33)',
    light: 'rgba(0, 0, 0, 0.33)'
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand'
  },
  focus: focusColor,
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: {
    dark: '#f8f8f8',
    light: '#444444'
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#000000'
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#555555'
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#666666'
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});
var generate = function generate(baseSpacing, scale) {
  if (baseSpacing === void 0) {
    baseSpacing = 24;
  }

  if (scale === void 0) {
    scale = 6;
  }

  // 24
  var baseFontSize = baseSpacing * 0.75; // 18

  var fontScale = baseSpacing / scale; // 4

  var fontSizing = function fontSizing(factor) {
    return {
      size: baseFontSize + factor * fontScale + "px",
      height: baseSpacing + factor * fontScale + "px",
      // maxWidth chosen to be ~50 characters wide
      // see: https://ux.stackexchange.com/a/34125
      maxWidth: baseSpacing * (baseFontSize + factor * fontScale) + "px"
    };
  };

  var borderWidth = 2;
  var controlBorderWidth = 1;
  var result = (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__/* .deepMerge */ .RH)(grommet_icons_themes_base__WEBPACK_IMPORTED_MODULE_1__.base, {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s'
        }
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: baseSpacing / 6 + "px",
        // 4
        large: baseSpacing / 2 + "px",
        // 12
        xlarge: baseSpacing + "px" // 24

      },
      breakpoints: {
        small: {
          value: baseSpacing * 32,
          // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: baseSpacing / 6 + "px",
            // 4
            large: baseSpacing / 4 + "px",
            // 6
            xlarge: baseSpacing / 2 + "px" // 12

          },
          edgeSize: {
            none: '0px',
            hair: '1px',
            // for Chart
            xxsmall: '2px',
            xsmall: baseSpacing / 8 + "px",
            // 3
            small: baseSpacing / 4 + "px",
            // 6
            medium: baseSpacing / 2 + "px",
            // 12
            large: baseSpacing + "px",
            // 24
            xlarge: baseSpacing * 2 + "px" // 48

          },
          size: {
            xxsmall: baseSpacing + "px",
            // 24
            xsmall: baseSpacing * 2 + "px",
            // 48
            small: baseSpacing * 4 + "px",
            // 96
            medium: baseSpacing * 8 + "px",
            // 192
            large: baseSpacing * 16 + "px",
            // 384
            xlarge: baseSpacing * 32 + "px",
            // 768
            full: '100%'
          }
        },
        medium: {
          value: baseSpacing * 64 // 1536

        },
        large: {} // anything above 'medium'

      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large'
      },
      colors: colors,
      control: {
        border: {
          width: controlBorderWidth + "px",
          radius: '4px',
          color: 'border'
        },
        disabled: {
          opacity: 0.3
        }
      },
      // The time to wait after the user stopped typing, measured in ms.
      debounceDelay: 300,
      drop: {
        // intelligentMargin: undefined,
        background: {
          dark: 'black',
          light: 'white'
        },
        border: {
          radius: '0px'
        },
        // margin: undefined
        shadowSize: 'small',
        // shadowSize is deprecated, use 'elevation'
        zIndex: '20'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        // for Chart
        xxsmall: baseSpacing / 8 + "px",
        // 3
        xsmall: baseSpacing / 4 + "px",
        // 6
        small: baseSpacing / 2 + "px",
        // 12
        medium: baseSpacing + "px",
        // 24
        large: baseSpacing * 2 + "px",
        // 48
        xlarge: baseSpacing * 4 + "px",
        // 96
        responsiveBreakpoint: 'small'
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)'
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)'
        }
      },
      focus: {
        // shadow or outline are required for accessibility
        border: {
          // remove to only have shadow
          color: 'focus'
        },
        // outline: { color: undefined, size: undefined },
        shadow: {
          color: 'focus',
          size: '2px'
        }
      },
      font: _extends({}, fontSizing(0)),
      hover: {
        background: {
          color: 'active',
          opacity: 'medium'
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      input: {
        padding: {
          horizontal: (0,_utils_mixins__WEBPACK_IMPORTED_MODULE_2__/* .parseMetricToNum */ .gd)(baseSpacing / 2 + "px") - (0,_utils_mixins__WEBPACK_IMPORTED_MODULE_2__/* .parseMetricToNum */ .gd)(controlBorderWidth + "px") + "px",
          vertical: (0,_utils_mixins__WEBPACK_IMPORTED_MODULE_2__/* .parseMetricToNum */ .gd)(baseSpacing / 2 + "px") - (0,_utils_mixins__WEBPACK_IMPORTED_MODULE_2__/* .parseMetricToNum */ .gd)(controlBorderWidth + "px") + "px"
        },
        font: {
          // size: undefined,
          // height: undefined,
          weight: 600
        } // deprecate in v3
        // weight: undefined,

      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1
      },
      selected: {
        background: 'selected',
        color: 'white'
      },
      spacing: baseSpacing + "px",
      size: {
        xxsmall: baseSpacing * 2 + "px",
        // 48
        xsmall: baseSpacing * 4 + "px",
        // 96
        small: baseSpacing * 8 + "px",
        // 192
        medium: baseSpacing * 16 + "px",
        // 384
        large: baseSpacing * 32 + "px",
        // 768
        xlarge: baseSpacing * 48 + "px",
        // 1152
        xxlarge: baseSpacing * 64 + "px",
        // 1536
        full: '100%'
      }
    },
    accordion: {
      panel: {// border: {
        //   side: 'bottom',
        //   color: 'border',
        // },
      },
      border: {
        side: 'bottom',
        color: 'border'
      },
      heading: {
        level: '4' // level ranges from 1-6
        // margin: undefined

      },
      hover: {
        color: {
          dark: 'light-4',
          light: 'dark-3'
        },
        // deprecated
        heading: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          }
        }
      },
      icons: {
        collapse: grommet_icons_icons_FormUp__WEBPACK_IMPORTED_MODULE_3__/* .FormUp */ .R,
        expand: grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_4__/* .FormDown */ .I // color: { dark: undefined, light: undefined },

      }
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'accent-1',
        light: 'brand'
      },
      hover: {
        textDecoration: 'underline' // fontWeight: undefined,
        // extend: undefined,

      } // extend: undefined,

    },
    avatar: {
      // extend: undefined,
      size: {
        xsmall: baseSpacing * 0.75 + "px",
        // 18px
        small: baseSpacing + "px",
        // 24px
        medium: baseSpacing * 2 + "px",
        // default 48px
        large: baseSpacing * 3 + "px",
        // 72px
        xlarge: baseSpacing * 4 + "px",
        // 96px
        '2xl': baseSpacing * 5 + "px",
        // 120px
        '3xl': baseSpacing * 6 + "px",
        // 144px
        '4xl': baseSpacing * 7 + "px",
        // 168px
        '5xl': baseSpacing * 8 + "px" // 192px

      },
      text: {
        size: {
          xsmall: 'small',
          // 14px
          small: 'medium',
          // 18px
          medium: 'large',
          // 22px
          large: 'xlarge',
          // 26px
          xlarge: 'xxlarge',
          // 34px
          '2xl': '3xl',
          // 42px
          '3xl': '4xl',
          // 54px
          '4xl': '5xl',
          // 70px
          '5xl': '6xl' // 90px

        } // fontWeight: undefined,
        // extend: undefined

      }
    },
    box: {
      responsiveBreakpoint: 'small' // when we switch rows to columns
      // extend: undefined,

    },
    button: {
      badge: {
        container: {
          background: 'brand' // pad: undefined,
          // extend: undefined,

        },
        size: {
          medium: baseSpacing + "px" // 24px

        },
        text: {
          size: {
            medium: 'small' // 14px

          }
        }
      },
      gap: 'small',
      size: {
        small: {
          border: {
            radius: baseSpacing * 0.75 + "px"
          },
          pad: {
            vertical: baseSpacing / 4 - borderWidth + "px",
            // 4px
            horizontal: baseSpacing - borderWidth * 2 + "px" // 20px,

          }
        },
        medium: {
          border: {
            radius: baseSpacing * 0.75 + "px" // 18px

          },
          pad: {
            vertical: baseSpacing / 4 - borderWidth + "px",
            // 4px
            horizontal: baseSpacing - borderWidth + "px" // 22px

          }
        },
        large: {
          border: {
            radius: baseSpacing + "px" // 24px

          },
          pad: {
            vertical: baseSpacing / 4 + borderWidth + "px",
            // 8px
            horizontal: baseSpacing + borderWidth * 4 + "px" // 32px,

          }
        }
      },
      border: {
        // color: { dark: undefined, light: undefined }
        width: borderWidth + "px",
        radius: baseSpacing * 0.75 + "px"
      },
      // color: { dark: undefined, light: undefined }
      // default: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   font: {
      //     weight: undefined,
      //   },
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      // primary: {
      //   font: {
      //     weight: undefined,
      //   },
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      // secondary: {
      //   font: {
      //     weight: undefined,
      //   },
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      // option: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      active: {
        background: 'active-background',
        //   border: undefined,
        color: 'active-text' //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},

      },
      disabled: {
        //   background: undefined,
        //   border: undefined,
        //   color: undefined,
        opacity: 0.3 //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},

      },
      // hover: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   extend: undefined,
      //   default: {},
      //   primary: {},
      //   secondary: {},
      // },
      padding: {
        vertical: baseSpacing / 4 - borderWidth + "px",
        horizontal: baseSpacing - borderWidth + "px"
      },
      transition: {
        timing: 'ease-in-out',
        duration: 0.1,
        properties: ['color', 'background-color', 'border-color', 'box-shadow']
      }
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: baseFontSize - fontScale + "px",
        lineHeight: 1.375,
        daySize: baseSpacing * 8 / 7 + "px",
        slideDuration: '0.2s'
      },
      medium: {
        fontSize: baseFontSize + "px",
        lineHeight: 1.45,
        daySize: baseSpacing * 16 / 7 + "px",
        slideDuration: '0.5s'
      },
      large: {
        fontSize: baseFontSize + 3 * fontScale + "px",
        lineHeight: 1.11,
        daySize: baseSpacing * 32 / 7 + "px",
        slideDuration: '0.8s'
      },
      icons: {
        previous: grommet_icons_icons_Previous__WEBPACK_IMPORTED_MODULE_5__/* .Previous */ .L,
        next: grommet_icons_icons_Next__WEBPACK_IMPORTED_MODULE_6__/* .Next */ .o,
        small: {
          previous: grommet_icons_icons_FormPrevious__WEBPACK_IMPORTED_MODULE_7__/* .FormPrevious */ .x,
          next: grommet_icons_icons_FormNext__WEBPACK_IMPORTED_MODULE_8__/* .FormNext */ .M
        }
      },
      heading: {
        level: '4'
      } // level ranges from 1-6

    },
    card: {
      container: {
        round: 'small',
        elevation: 'small' // extend: undefined,

      },
      // hover: {
      //   container: {
      //     elevation: undefined,
      //   },
      // },
      header: {},
      body: {},
      footer: {}
    },
    carousel: {
      icons: {
        current: grommet_icons_icons_Subtract__WEBPACK_IMPORTED_MODULE_9__/* .Subtract */ .L,
        next: grommet_icons_icons_Next__WEBPACK_IMPORTED_MODULE_6__/* .Next */ .o,
        previous: grommet_icons_icons_Previous__WEBPACK_IMPORTED_MODULE_5__/* .Previous */ .L // color: { dark: undefined, light: undefined },

      },
      animation: {
        duration: 1000
      },
      disabled: {
        icons: {// color: { dark: undefined, light: undefined },
        }
      }
    },
    chart: {
      color: 'graph-0' // extend: undefined,

    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        // extend: undefined,
        radius: '4px',
        thickness: '4px'
      },
      label: {
        align: 'center'
      },
      // color: { dark: undefined, light: undefined },
      // extend: undefined,
      // gap: undefined
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        } // background: undefined,

      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// checked: undefined,
        // indeterminate: undefined,
      },
      // pad: undefined,
      size: baseSpacing + "px",
      toggle: {
        // background: undefined
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9'
        },
        knob: {// extend: undefined,
        },
        radius: baseSpacing + "px",
        size: baseSpacing * 2 + "px" // extend: undefined,

      }
    },
    checkBoxGroup: {// container: {
      //   // any box props
      //   extend: undefined,
      // },
    },
    clock: {
      analog: {
        // extend: undefined,
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3'
          },
          width: baseSpacing / 3 + "px",
          size: baseSpacing + "px",
          shape: 'round'
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          },
          width: baseSpacing / 6 + "px",
          size: Math.round(baseSpacing / 2) + "px",
          shape: 'round'
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          },
          width: baseSpacing / 8 + "px",
          size: Math.round(baseSpacing / 2.666) + "px",
          shape: 'round'
        },
        size: {
          xsmall: baseSpacing * 2 + "px",
          small: baseSpacing * 3 + "px",
          medium: baseSpacing * 4 + "px",
          large: baseSpacing * 6 + "px",
          xlarge: baseSpacing * 9 + "px",
          xxlarge: baseSpacing * 12 + "px",
          huge: baseSpacing * 12 + "px" // kept for backwards compatibility

        }
      },
      digital: {
        text: {
          xsmall: {
            size: baseFontSize - 2 * fontScale + "px",
            height: 1.5
          },
          small: {
            size: baseFontSize - fontScale + "px",
            height: 1.43
          },
          medium: {
            size: baseFontSize + "px",
            height: 1.375
          },
          large: {
            size: baseFontSize + fontScale + "px",
            height: 1.167
          },
          xlarge: {
            size: baseFontSize + 2 * fontScale + "px",
            height: 1.1875
          },
          xxlarge: {
            size: baseFontSize + 4 * fontScale + "px",
            height: 1.125
          }
        }
      }
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500
    },
    dateInput: {// icon: {
      //   size: undefined,
      // },
    },
    dataTable: {
      // body: {
      //   extend: undefined,
      // },
      pinned: {
        // body: {
        //    background: undefined,
        //    extend: undefined,
        // },
        header: {
          background: {
            opacity: 'strong'
          } //  extend: undefined,

        },
        footer: {
          background: {
            opacity: 'strong'
          } //  extend: undefined,

        }
      },
      container: {
        // any box props
        gap: 'xsmall' // extend: undefined,

      },
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2'
        },
        border: {
          side: 'bottom',
          size: 'xsmall'
        },
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        }
      },
      groupEnd: {
        border: {
          side: 'bottom',
          size: 'xsmall'
        }
      },
      header: {
        // background: undefined,
        // border: undefined,
        // color: undefined,
        // extend: undefined,
        // font: {
        //   weight: undefined,
        //   size: undefined,
        // },
        gap: 'small',
        // hover: {
        //   background: undefined,
        // },
        // pad: undefined,
        units: {
          color: 'text-xweak',
          margin: {
            left: 'xsmall'
          },
          alignSelf: 'end'
        }
      },
      icons: {
        ascending: grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_4__/* .FormDown */ .I,
        contract: grommet_icons_icons_FormUp__WEBPACK_IMPORTED_MODULE_3__/* .FormUp */ .R,
        descending: grommet_icons_icons_FormUp__WEBPACK_IMPORTED_MODULE_3__/* .FormUp */ .R,
        expand: grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_4__/* .FormDown */ .I // sortable: undefined,

      },
      primary: {
        weight: 'bold'
      },
      resize: {
        border: {
          color: 'border',
          side: 'end'
        } // hover: {
        //   border: {
        //     color: undefined,
        //     side: undefined,
        //     size: undefined,
        //   },
        // },

      }
    },
    diagram: {
      // extend: undefined,
      line: {
        color: 'graph-0'
      }
    },
    // drop: {
    //   extend: undefined,
    //   maxHeight: undefined,
    // },
    fileInput: {
      // background: {},
      border: {
        // color: undefined,
        side: 'all',
        size: 'small',
        style: 'dashed'
      },
      dragOver: {
        border: {
          color: 'control'
        } // extend: undefined,

      },
      hover: {
        border: {
          color: 'brand'
        } // extend: undefined,

      },
      icons: {
        remove: grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_10__/* .FormClose */ .n
      },
      // pad: {},
      label: {
        margin: 'small' // extend: undefined,

      },
      message: {
        margin: 'small' // extend: undefined,

      } // extend: undefined,

    },
    formField: {
      border: {
        color: 'border',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical'
          }
        },
        position: 'inner',
        side: 'bottom'
      },
      content: {
        // margin: undefined,
        pad: 'small'
      },
      disabled: {
        background: {
          color: 'status-disabled',
          opacity: 'medium'
        } // border: {
        //   color: undefined,
        // },
        // label: {
        //   color: undefined,
        // },

      },
      // focus: {
      //   background: {
      //     color: undefined,
      //   },
      //   border: {
      //     color: undefined,
      //   },
      // },
      error: {
        color: 'status-critical',
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        } // background: undefined,
        // container: {}, // any Box props
        // icon: undefined,

      },
      // extend: undefined,
      help: {
        color: 'dark-3',
        margin: {
          start: 'small'
        }
      },
      info: {
        color: 'text-xweak',
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        } // container: {}, // any Box props
        // icon: undefined,

      },
      label: {
        margin: {
          vertical: 'xsmall',
          horizontal: 'small'
        } // requiredIndicator: undefined,

      },
      margin: {
        bottom: 'small'
      } // round: undefined,

    },
    grommet: {// extend: undefined
    },
    header: {
      sticky: {
        zIndex: '20'
      }
    },
    heading: {
      // color: undefined,
      font: {// family: undefined
      },
      level: {
        1: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(4)),
          medium: _extends({}, fontSizing(8)),
          large: _extends({}, fontSizing(16)),
          xlarge: _extends({}, fontSizing(24))
        },
        2: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(2)),
          medium: _extends({}, fontSizing(4)),
          large: _extends({}, fontSizing(8)),
          xlarge: _extends({}, fontSizing(12))
        },
        3: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(1)),
          medium: _extends({}, fontSizing(2)),
          large: _extends({}, fontSizing(4)),
          xlarge: _extends({}, fontSizing(6))
        },
        4: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(0)),
          medium: _extends({}, fontSizing(0)),
          large: _extends({}, fontSizing(0)),
          xlarge: _extends({}, fontSizing(0))
        },
        5: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(-0.5)),
          medium: _extends({}, fontSizing(-0.5)),
          large: _extends({}, fontSizing(-0.5)),
          xlarge: _extends({}, fontSizing(-0.5))
        },
        6: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _extends({}, fontSizing(-1)),
          medium: _extends({}, fontSizing(-1)),
          large: _extends({}, fontSizing(-1)),
          xlarge: _extends({}, fontSizing(-1))
        }
      },
      responsiveBreakpoint: 'small',
      // when we scale the font size down
      weight: 600
    },
    layer: {
      background: {
        dark: 'black',
        light: 'white'
      },
      border: {
        radius: '4px' // intelligentRounding: undefined,

      },
      container: {
        // elevation: undefined,
        zIndex: '20'
      },
      // extend: undefined,
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
      },
      responsiveBreakpoint: 'small',
      // when Layer takes over the full screen
      zIndex: '20'
    },
    list: {
      container: {
        // any box props
        gap: 'xsmall' // extend: undefined,

      },
      item: {
        // background: undefined,
        border: 'horizontal',
        pad: {
          horizontal: 'medium',
          vertical: 'small'
        } // extend: undefined,

      },
      icons: {
        down: grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_4__/* .FormDown */ .I,
        up: grommet_icons_icons_FormUp__WEBPACK_IMPORTED_MODULE_3__/* .FormUp */ .R
      } // extend: undefined,

    },
    maskedInput: {// container: {
      //   extend: undefined,
      // },
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    menu: {
      // background: undefined,
      // extend: undefined,
      drop: {
        align: {
          top: 'top',
          left: 'left'
        } // any drop props

      },
      icons: {
        down: grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_4__/* .FormDown */ .I // up: undefined,
        // color: { dark: undefined, light: undefined },

      }
    },
    meter: {
      color: 'graph-0' // colors: [] || colors: ['graph-0', 'graph-1', 'graph-2', 'graph-3'],
      // extend: undefined,

    },
    nameValueList: {
      gap: {
        column: 'large',
        row: 'small'
      },
      pair: {
        column: {
          gap: {
            column: 'large',
            row: 'medium'
          }
        }
      },
      name: {
        width: 'small'
      },
      value: {
        width: 'medium'
      }
    },
    nameValuePair: {
      column: {
        gap: 'xxsmall'
      },
      name: {
        // any text props
        color: 'text',
        weight: 'bold'
      },
      value: {
        // any text props
        color: 'text'
      }
    },
    notification: {
      actions: {// any anchor props
      },
      direction: 'column',
      container: {
        // any box props
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        background: {
          color: 'background-front'
        }
      },
      global: {
        direction: 'row',
        container: {
          // any box props
          pad: {
            horizontal: 'large',
            vertical: 'xsmall'
          }
        }
      },
      toast: {
        // direction: undefined,
        container: {
          // any box props
          elevation: 'medium',
          round: 'xsmall',
          width: 'medium'
        },
        layer: {
          position: 'top',
          margin: 'medium'
        },
        time: 8000
      },
      iconContainer: {
        // any box props
        pad: {
          right: 'small'
        },
        flex: false
      },
      textContainer: {
        // any box props
        gap: 'medium'
      },
      title: {
        // any text props
        weight: 'bold'
      },
      message: {
        // any text props
        margin: 'none'
      },
      close: {
        icon: grommet_icons_icons_FormClose__WEBPACK_IMPORTED_MODULE_10__/* .FormClose */ .n
      },
      critical: {
        icon: grommet_icons_icons_StatusCriticalSmall__WEBPACK_IMPORTED_MODULE_11__/* .StatusCriticalSmall */ .P,
        // background: undefined,
        color: 'status-critical',
        global: {
          background: {
            color: 'status-critical',
            opacity: 'weak'
          }
        } // toast: {},

      },
      warning: {
        icon: grommet_icons_icons_StatusWarningSmall__WEBPACK_IMPORTED_MODULE_12__/* .StatusWarningSmall */ .r,
        // background: undefined,
        color: 'status-warning',
        global: {
          background: {
            color: 'status-warning',
            opacity: 'weak'
          }
        } // toast: {},

      },
      normal: {
        icon: grommet_icons_icons_StatusGoodSmall__WEBPACK_IMPORTED_MODULE_13__/* .StatusGoodSmall */ .N,
        // background: undefined,
        color: 'status-ok',
        global: {
          background: {
            color: 'status-ok',
            opacity: 'weak'
          }
        } // toast: {},

      },
      info: {
        icon: grommet_icons_icons_CircleInformation__WEBPACK_IMPORTED_MODULE_14__/* .CircleInformation */ ._,
        // background: undefined,
        color: 'text-strong' // global: {},
        // toast: {},

      },
      unknown: {
        icon: grommet_icons_icons_StatusUnknownSmall__WEBPACK_IMPORTED_MODULE_15__/* .StatusUnknownSmall */ .Z,
        // background: undefined,
        color: 'status-unknown',
        global: {
          background: {
            color: 'status-unknown',
            opacity: 'weak'
          }
        } // toast: {},

      },
      // deprecate "undefined" in v3
      // and if undefined, no icon
      undefined: {
        icon: grommet_icons_icons_StatusUnknownSmall__WEBPACK_IMPORTED_MODULE_15__/* .StatusUnknownSmall */ .Z,
        // background: undefined,
        color: 'status-unknown' // global: {},
        // toast: {},

      }
    },
    page: {
      wide: {
        alignSelf: 'center',
        width: {
          min: 'medium',
          max: 'xxlarge'
        },
        small: {
          pad: {
            horizontal: 'large'
          }
        },
        medium: {
          pad: {
            horizontal: 'medium'
          }
        },
        large: {
          pad: {
            horizontal: 'large'
          }
        }
      },
      narrow: {
        alignSelf: 'center',
        width: {
          min: 'medium',
          max: 'large'
        },
        small: {
          pad: {
            horizontal: 'large'
          }
        },
        medium: {
          pad: {
            horizontal: 'medium'
          }
        },
        large: {
          pad: {
            horizontal: 'large'
          }
        }
      },
      full: {
        alignSelf: 'start',
        width: {
          min: 'medium',
          max: '100%'
        },
        small: {
          pad: {
            horizontal: 'large'
          }
        },
        medium: {
          pad: {
            horizontal: 'medium'
          }
        },
        large: {
          pad: {
            horizontal: 'large'
          }
        }
      }
    },
    pagination: {
      button: {
        active: {
          background: {
            color: 'active-background'
          }
        },
        color: 'text-strong',
        hover: {
          background: {
            color: 'background-contrast'
          },
          color: undefined
        },
        size: {
          small: {
            border: {
              radius: baseSpacing / 8 + "px",
              // 3
              width: '2px'
            },
            pad: {
              vertical: "4px",
              horizontal: "4px"
            },
            font: _extends({}, fontSizing(-1)),
            height: baseSpacing * 1.25 + "px",
            width: baseSpacing * 1.25 + "px"
          },
          medium: {
            border: {
              radius: baseSpacing / 6 + "px",
              // 4
              width: '2px'
            },
            pad: {
              vertical: "4px",
              horizontal: "4px"
            },
            font: _extends({}, fontSizing(0)),
            height: baseSpacing * 1.5 + "px",
            width: baseSpacing * 1.5 + "px"
          },
          large: {
            border: {
              radius: baseSpacing / 4 + "px",
              // 6
              width: '2px'
            },
            pad: {
              vertical: "4px",
              horizontal: "4px"
            },
            font: _extends({}, fontSizing(1)),
            height: baseSpacing * 2 + "px",
            width: baseSpacing * 2 + "px"
          }
        }
      },
      // container: {
      //   // any box props,
      //   extend: undefined,
      // },
      controls: {
        align: 'center',
        direction: 'row',
        gap: 'xxsmall',
        margin: 'none',
        pad: 'none'
      },
      icons: {
        // color: undefined,
        next: grommet_icons_icons_Next__WEBPACK_IMPORTED_MODULE_6__/* .Next */ .o,
        previous: grommet_icons_icons_Previous__WEBPACK_IMPORTED_MODULE_5__/* .Previous */ .L
      }
    },
    paragraph: {
      font: {// family: undefined
      },
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      large: _extends({}, fontSizing(1)),
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    spinner: {
      container: {
        animation: 'rotateRight',
        color: 'brand',
        pad: 'small',
        round: 'full',
        size: 'small'
      },
      // icon: undefined
      size: {
        xsmall: baseSpacing * 0.75 + "px",
        small: baseSpacing + "px",
        // default 24
        medium: baseSpacing * 2 + "px",
        large: baseSpacing * 3 + "px",
        xlarge: baseSpacing * 4 + "px"
      }
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '100%' // background: {
        //  color: undefined,
        // },
        // color: { dark: undefined, light: undefined },
        // extend: undefined,

      },
      // color: undefined,
      hover: {
        // background: {
        //   color: undefined,
        // },
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// circle: undefined,
      },
      gap: 'small',
      size: baseSpacing + "px",
      font: {// weight: undefined,
      },
      container: {// extend: undefined
      }
    },
    radioButtonGroup: {// container: {}, // any box props
    },
    rangeInput: {
      disabled: {
        opacity: 0.3 //   thumb: {
        //     color: undefined,
        //   },
        //   track: {
        //     color: undefined,
        //   },

      },
      // extend: undefined
      track: {
        height: '4px',
        color: 'border' // opacity: undefined,
        // lower: {
        //   color: 'undefined',
        //   opacity: undefined,
        // },
        // upper: {
        //   color: undefined,
        //   opacity: undefined,
        // },
        // extend: undefined

      },
      thumb: {// color: { dark: undefined, light: undefined },
        // extend: undefined
      }
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4'
        }
      } // edge: {
      //   type: undefined,
      // },

    },
    select: {
      // background: undefined,
      clear: {
        container: {
          pad: 'small',
          background: 'background-contrast'
        },
        // any box props
        text: {
          color: 'text-weak'
        } // any text props

      },
      container: {// extend: undefined,
      },
      control: {// extend: undefined,
        // open: undefined,
      },
      icons: {
        // color: { dark: undefined, light: undefined },
        margin: {
          horizontal: 'small'
        },
        down: grommet_icons_icons_FormDown__WEBPACK_IMPORTED_MODULE_4__/* .FormDown */ .I // up: undefined

      },
      options: {
        container: {
          align: 'start',
          pad: 'small'
        },
        text: {
          margin: 'none'
        }
      },
      // searchInput: undefined,
      step: 20
    },
    skipLinks: {
      position: 'top',
      container: {
        elevation: 'large',
        round: 'small',
        pad: 'medium'
      },
      label: {
        margin: {
          bottom: 'medium'
        },
        size: 'medium'
      }
    },
    tab: {
      active: {
        color: 'text' // background: undefined,

      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'accent-1',
          light: 'brand'
        },
        active: {
          color: {
            dark: 'white',
            light: 'black'
          }
        },
        disabled: {// color: undefined,
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black'
          } // extend: undefined,

        }
      },
      color: 'control',
      // disabled: {
      //   color: undefined,
      // },
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small'
      },
      pad: {
        bottom: 'xsmall'
      }
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      // gap: undefined,
      header: {// background: undefined,
        // border: {
        //   side: undefined,
        //   size: undefined,
        //   style: undefined,
        //   color: undefined,
        // },
        // extend: undefined,
      },
      panel: {// extend: undefined,
      }
    },
    table: {
      header: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'bottom' // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,

      },
      body: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        } // background: undefined,
        // border: undefined,
        // extend: undefined,

      },
      // row: {
      //   hover: {
      //     background: undefined,
      //     color: undefined,
      //   },
      // },
      footer: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'top' // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,

      }
    },
    tag: {
      // background: undefined,
      border: true,
      round: 'large',
      // name: undefined,
      pad: {
        horizontal: 'small',
        vertical: 'xsmall'
      },
      remove: {
        margin: {
          right: 'xsmall'
        }
      },
      separator: ' : ',
      size: {
        xsmall: {
          pad: {
            horizontal: baseSpacing / 3 + "px",
            vertical: 'xxsmall'
          },
          icon: {
            size: baseSpacing * 0.75 + "px"
          }
        },
        small: {
          pad: {
            horizontal: baseSpacing * 0.4 + "px",
            vertical: 'xxsmall'
          },
          icon: {
            size: baseSpacing * 0.75 + "px"
          }
        },
        large: {
          pad: {
            horizontal: baseSpacing / 3 * 2 + "px",
            vertical: "xsmall"
          },
          icon: {
            size: baseSpacing * 1.25 + "px"
          }
        },
        xlarge: {
          pad: {
            horizontal: baseSpacing * 0.75 + "px",
            vertical: 'xsmall'
          },
          icon: {
            size: baseSpacing * 1.5 + "px"
          }
        }
      },
      value: {
        weight: 600
      }
    },
    text: {
      font: {// family: undefined
      },
      xsmall: _extends({}, fontSizing(-1.5)),
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      // 18px
      large: _extends({}, fontSizing(1)),
      // 22px
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4)),
      '2xl': _extends({}, fontSizing(4)),
      '3xl': _extends({}, fontSizing(6)),
      '4xl': _extends({}, fontSizing(9)),
      '5xl': _extends({}, fontSizing(13)),
      '6xl': _extends({}, fontSizing(18))
    },
    textArea: {// extend: undefined,
      // disabled: { opacity: undefined },
    },
    textInput: {// extend: undefined,
      // disabled: { opacity: undefined },
    },
    tip: {
      content: {
        // any Box props
        background: 'background-contrast',
        elevation: 'small',
        margin: 'xsmall',
        pad: {
          vertical: 'xsmall',
          horizontal: 'small'
        },
        round: 'small'
      },
      drop: {
        // any props for the drop
        align: {
          top: 'bottom'
        },
        // most common use case is Header with Buttons
        background: 'none',
        elevation: 'none',
        margin: 'none'
      }
    },
    video: {
      captions: {
        background: 'rgba(0, 0, 0, 0.7)'
      },
      // controls: { background: undefined },
      icons: {
        closedCaption: grommet_icons_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_16__/* .ClosedCaption */ .V,
        configure: grommet_icons_icons_Actions__WEBPACK_IMPORTED_MODULE_17__/* .Actions */ .e,
        fullScreen: grommet_icons_icons_Expand__WEBPACK_IMPORTED_MODULE_18__/* .Expand */ .M,
        pause: grommet_icons_icons_Pause__WEBPACK_IMPORTED_MODULE_19__/* .Pause */ .d,
        play: grommet_icons_icons_Play__WEBPACK_IMPORTED_MODULE_20__/* .Play */ .s,
        reduceVolume: grommet_icons_icons_VolumeLow__WEBPACK_IMPORTED_MODULE_21__/* .VolumeLow */ .t,
        volume: grommet_icons_icons_Volume__WEBPACK_IMPORTED_MODULE_22__/* .Volume */ .f // color: { dark: undefined, light: undefined },

      },
      scrubber: {
        color: 'light-4',
        interval: 10 // track: { color: undefined }

      }
    },
    worldMap: {
      color: 'light-3',
      continent: {
        active: '8px',
        base: '6px'
      },
      hover: {
        color: 'light-4'
      },
      place: {
        active: '20px',
        base: '8px'
      }
    }
  });
  return (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__/* .deepFreeze */ ._A)(result);
};
var base = generate(24);

/***/ }),

/***/ 1205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mv": () => (/* binding */ setFocusWithoutScroll),
/* harmony export */   "Ui": () => (/* binding */ makeNodeUnfocusable),
/* harmony export */   "_8": () => (/* binding */ isNodeAfterScroll),
/* harmony export */   "e$": () => (/* binding */ makeNodeFocusable),
/* harmony export */   "r9": () => (/* binding */ getNewContainer),
/* harmony export */   "rc": () => (/* binding */ isNodeBeforeScroll),
/* harmony export */   "sq": () => (/* binding */ findScrollParents),
/* harmony export */   "xD": () => (/* binding */ findScrollParent)
/* harmony export */ });
/* unused harmony exports containsFocus, isFocusable, getFirstFocusableDescendant, shouldKeepFocus, findVisibleParent */
var findScrollParent = function findScrollParent(element, horizontal) {
  var result;

  if (element) {
    var parent = element.parentNode;

    while (!result && parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect(); // 10px is to account for borders and scrollbars in a lazy way

      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result = parent;
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result = parent;
      }

      parent = parent.parentNode;
    } // last scrollable element will be the document
    // if nothing else is scrollable in the page


    if (!result) {
      result = document;
    } else if (result.tagName.toLowerCase() === 'body') {
      result = document;
    }
  }

  return result;
};
var documentTags = ['html', 'body'];
var findScrollParents = function findScrollParents(element, horizontal) {
  var result = [];

  if (element) {
    var parent = element.parentNode;

    while (parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect(); // 10px is to account for borders and scrollbars in a lazy way

      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result.push(parent);
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent);
      }

      parent = parent.parentNode;
    }

    if (result.length && documentTags.includes(result[0].tagName.toLowerCase())) {
      result.length = 0;
    } // last scrollable element will be the document


    result.push(document);
  }

  return result;
};
var containsFocus = function containsFocus(node) {
  var element = document.activeElement;

  while (element) {
    if (element === node) break;
    element = element.parentElement;
  }

  return !!element;
}; // Check if the element.tagName is an input, select or textarea

var isFocusable = function isFocusable(element) {
  var tagName = element.tagName.toLowerCase();
  return tagName === 'input' || tagName === 'select' || tagName === 'textarea';
}; // Get the first element that can receive focus

var getFirstFocusableDescendant = function getFirstFocusableDescendant(element) {
  var children = element.getElementsByTagName('*');

  for (var i = 0; i < children.length; i += 1) {
    var child = children[i];

    if (isFocusable(child)) {
      return child;
    }
  }

  return undefined;
};
var shouldKeepFocus = function shouldKeepFocus() {
  var element = document.activeElement;
  if (isFocusable(element)) return true;
  return !!getFirstFocusableDescendant(element);
};
var getNewContainer = function getNewContainer(target, targetChildPosition) {
  if (target === void 0) {
    target = document.body;
  }

  // setup DOM
  var container = document.createElement('div');

  if (targetChildPosition === 'first') {
    // for SkipLinks
    target.prepend(container);
  } else {
    target.appendChild(container);
  }

  return container;
};
var setFocusWithoutScroll = function setFocusWithoutScroll(element) {
  var x = window.scrollX;
  var y = window.scrollY;
  element.focus();
  window.scrollTo(x, y);
};
var TABINDEX = 'tabindex';
var TABINDEX_STATE = 'data-g-tabindex';
var makeNodeFocusable = function makeNodeFocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.removeAttribute('aria-hidden'); // allow children to receive focus again

    var elements = node.getElementsByTagName('*'); // only reset elements we've changed in makeNodeUnfocusable()

    Array.prototype.filter.call(elements || [], function (element) {
      return element.hasAttribute(TABINDEX_STATE);
    }).forEach(function (element) {
      var prior = element.getAttribute(TABINDEX_STATE);

      if (prior >= 0) {
        element.setAttribute(TABINDEX, element.getAttribute(TABINDEX_STATE));
      } else if (prior === 'none') {
        element.removeAttribute(TABINDEX);
      }

      element.removeAttribute(TABINDEX_STATE);
    });
  }
};
var autoFocusingTags = /(a|area|input|select|textarea|button|iframe)$/;
var makeNodeUnfocusable = function makeNodeUnfocusable(node) {
  // do not touch aria live containers so that announcements work
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', true); // prevent children to receive focus

    var elements = node.getElementsByTagName('*'); // first, save off the tabIndex of any element with one

    Array.prototype.filter.call(elements || [], function (element) {
      return element.getAttribute(TABINDEX) !== null;
    }).forEach(function (element) {
      element.setAttribute(TABINDEX_STATE, element.getAttribute(TABINDEX));
      element.setAttribute(TABINDEX, -1);
    }); // then, if any element is inherently focusable and not handled above,
    // give it a tabIndex of -1 so it can't receive focus

    Array.prototype.filter.call(elements || [], function (element) {
      var currentTag = element.tagName.toLowerCase();
      return currentTag.match(autoFocusingTags) && element.focus && element.getAttribute(TABINDEX_STATE) === null;
    }).forEach(function (element) {
      element.setAttribute(TABINDEX_STATE, 'none');
      element.setAttribute(TABINDEX, -1);
    });
  }
};
var findVisibleParent = function findVisibleParent(element) {
  if (element) {
    // Get the closest ancestor element that is positioned.
    return element.offsetParent ? element : findVisibleParent(element.parentElement) || element;
  }

  return undefined;
};
var isNodeAfterScroll = function isNodeAfterScroll(node, target) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
      bottom = _node$getBoundingClie.bottom; // target will be the document from findScrollParent()


  var _ref = target.getBoundingClientRect ? target.getBoundingClientRect() : {
    height: 0,
    top: 0
  },
      height = _ref.height,
      top = _ref.top;

  return bottom >= top + height;
};
var isNodeBeforeScroll = function isNodeBeforeScroll(node, target) {
  var _node$getBoundingClie2 = node.getBoundingClientRect(),
      top = _node$getBoundingClie2.top; // target will be the document from findScrollParent()


  var _ref2 = target.getBoundingClientRect ? target.getBoundingClientRect() : {
    top: 0
  },
      targetTop = _ref2.top;

  return top <= targetTop;
};

/***/ }),

/***/ 6093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM": () => (/* binding */ getHoverIndicatorStyle),
/* harmony export */   "Ap": () => (/* binding */ backgroundAndTextColors),
/* harmony export */   "G0": () => (/* binding */ selectedStyle),
/* harmony export */   "Ii": () => (/* binding */ activeStyle),
/* harmony export */   "Nu": () => (/* binding */ backgroundStyle),
/* harmony export */   "im": () => (/* binding */ backgroundIsDark),
/* harmony export */   "rj": () => (/* binding */ normalizeBackground)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8804);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6808);

 // evalStyle() converts a styled-components item into a string

var evalStyle = function evalStyle(arg, theme) {
  if (arg && Array.isArray(arg) && typeof arg[0] === 'function') {
    return arg[0]({
      theme: theme
    });
  }

  return arg;
};

var normalizeBackground = function normalizeBackground(background, theme) {
  // If the background has a light or dark object, use that
  var result = background;

  if (background) {
    if (theme.dark && background.dark && typeof background.dark !== 'boolean') {
      result = background.dark;
    } else if (!theme.dark && background.light && typeof background.light !== 'boolean') {
      result = background.light;
    }

    result = evalStyle(result, theme);
  }

  return result;
};
var backgroundIsDark = function backgroundIsDark(backgroundArg, theme) {
  var background = normalizeBackground(backgroundArg, theme);
  var result;

  if (background) {
    if (typeof background === 'object') {
      var color = background.color,
          dark = background.dark,
          opacity = background.opacity;

      if (typeof dark === 'boolean') {
        result = dark;
      } else if (color && ( // weak opacity means we keep the existing darkness
      !opacity || opacity !== 'weak')) {
        var backgroundColor = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(background.color, theme);

        if (backgroundColor) {
          result = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .colorIsDark */ .Pi)(backgroundColor);
        }
      }
    } else {
      var _color = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(background, theme);

      if (_color) {
        result = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .colorIsDark */ .Pi)(_color);
      }
    }
  }

  return result;
};

var darkContext = function darkContext(backgroundColor) {
  var isDark = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .colorIsDark */ .Pi)(backgroundColor);
  if (isDark === undefined) return undefined;
  return isDark ? 'dark' : 'light';
}; // Returns an array of two CSS colors: [background, color]
// Either could be undefined.
// background could be a CSS gradient, like "linear-gradient(...)"


var backgroundAndTextColors = function backgroundAndTextColors(backgroundArg, textArg, theme) {
  if (!backgroundArg) return [undefined, textArg];
  var global = theme.global;
  var background = normalizeBackground(backgroundArg, theme);
  var text = textArg || global.colors.text;
  var backgroundColor;
  var textColor;

  if (typeof background === 'object') {
    if (background.dark === false) {
      textColor = text.light || text;
    } else if (background.dark) {
      textColor = text.dark || text;
    }

    if (background.color) {
      var color = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(background.color, theme, background.dark);
      var opacity = background.opacity === true ? global.opacity.medium : global.opacity[background.opacity] || background.opacity;
      backgroundColor = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .getRGBA */ .ls)(color, opacity) || color; // If we don't have a textColor already, and we aren't too translucent,
      // set the textColor to have the best contrast against the background
      // color.

      if (!textColor && (opacity === undefined || opacity > 0.3)) {
        var shade = darkContext(backgroundColor, theme);
        textColor = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(shade && text[shade] || text, theme);
      }
    }
  } else {
    backgroundColor = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(background, theme);

    var _shade = darkContext(backgroundColor, theme);

    if (_shade) {
      textColor = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(text[_shade] || text, theme, _shade === 'dark');
    } else {
      // If we can't determine the shade, we assume this isn't a simple color.
      // It could be a gradient. backgroundStyle() will take care of that case.
      if (backgroundColor !== 'transparent') backgroundColor = undefined;
      if (text) textColor = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(text, theme);
    }
  } // if textArg is false, we don't want the textColor, used for Button hover


  if (textArg === false) textColor = undefined;
  return [backgroundColor, textColor];
};
var backgroundStyle = function backgroundStyle(backgroundArg, theme, textColorArg) {
  // for Grommet component, if the background isn't defined, don't set it
  if (backgroundArg === undefined) return undefined;
  var background = normalizeBackground(backgroundArg, theme);

  if (typeof background === 'string' && background.lastIndexOf('url', 0) === 0) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background:", " no-repeat center center;background-size:cover;"], background);
  }

  var _backgroundAndTextCol = backgroundAndTextColors(background, textColorArg, theme),
      backgroundColor = _backgroundAndTextCol[0],
      textColor = _backgroundAndTextCol[1];

  if (background.image) {
    var backgroundStyles = "\n      " + (backgroundColor ? "background-color: " + backgroundColor + ";" : '') + "\n      background-image: " + background.image + ";\n      background-repeat: " + (background.repeat || 'no-repeat') + ";\n      background-position: " + (background.position || 'center center') + ";\n      background-size: " + (background.size || 'cover') + ";\n    "; // allow both background color and image, in case the image doesn't fill
    // when image and opacity are used together, we need to use pseudo :before
    // to ensure that only image and background color are affected by opacity
    // but not the container contents

    return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", " ", ""], textColor ? "color: " + textColor + ";" : '', !background.opacity ? backgroundStyles : "position: relative;\n        z-index: 0;\n        &:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          right: 0;\n          left: 0;\n          bottom: 0;\n          z-index: -1;\n          " + backgroundStyles + "\n          opacity: " + (background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity] || background.opacity) + ";\n        }");
  }

  if (backgroundColor) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";", ""], backgroundColor, textColor ? "color: " + textColor + ";" : '');
  }

  if (typeof background === 'string') // This case takes care of gradients
    // or theme colors that use CSS names like 'crimson' that we don't parse
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background:", ";"], (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(background, theme));
  return undefined;
};
var activeStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", ""], function (props) {
  return backgroundStyle((0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(props.theme.global.active.background, props.theme), props.theme, props.theme.global.active.color);
});
var selectedStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", ""], function (props) {
  return backgroundStyle((0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(props.theme.global.selected.background, props.theme), props.theme, props.theme.global.selected.color);
});
var getHoverIndicatorStyle = function getHoverIndicatorStyle(hoverIndicator, theme) {
  var background;
  var elevation;

  if (hoverIndicator === true || hoverIndicator === 'background') {
    background = theme.global.hover.background;
  } else if (typeof hoverIndicator === 'object') {
    if (hoverIndicator.elevation || hoverIndicator.background) {
      elevation = hoverIndicator.elevation;
      background = hoverIndicator.background;
    } else background = hoverIndicator;
  } else {
    background = hoverIndicator;
  }

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", " ", ""], backgroundStyle(background, theme, theme.global.hover.color), elevation && "box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'][elevation] + ";");
};

/***/ }),

/***/ 5789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ borderStyle),
/* harmony export */   "H": () => (/* binding */ responsiveBorderStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8804);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6808);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9207);



var responsiveBorderStyle = function responsiveBorderStyle(data, theme) {
  var color = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(data.color || 'border', theme);
  var borderSize = data.size || 'xsmall';
  var style = data.style || 'solid';
  var side = typeof data === 'string' ? data : data.side || 'all';
  var breakpoint = theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];
  if (!breakpoint.borderSize) breakpoint.borderSize = theme.global.borderSize;
  var value = breakpoint && (breakpoint.borderSize[borderSize] || borderSize) && style + " " + (breakpoint.borderSize[borderSize] || borderSize) + " " + color;
  if (!value) return undefined;
  if (side === 'top' || side === 'bottom' || side === 'left' || side === 'right') return "border-" + side + ": " + value + ";";
  if (side === 'end' || side === 'start') return "border-inline-" + side + ": " + value + ";";
  if (side === 'vertical') return "\n      border-left: " + value + ";\n      border-right: " + value + ";\n    ";
  if (side === 'horizontal') return "\n      border-top: " + value + ";\n      border-bottom: " + value + ";\n    ";
  if (side === 'between') return undefined; // no-op

  return "border: " + value + ";";
};
var borderStyle = function borderStyle(borderData, responsive, theme) {
  var borderStyles = [];
  (Array.isArray(borderData) ? borderData : [borderData]).forEach(function (data) {
    var styles = [];
    var color = (0,_colors__WEBPACK_IMPORTED_MODULE_0__/* .normalizeColor */ .ut)(data.color || 'border', theme);
    var borderSize = data.size || 'xsmall';
    var style = data.style || 'solid';
    var side = typeof data === 'string' ? data : data.side || 'all';
    var value = style + " " + (theme.global.borderSize[borderSize] || borderSize) + " " + color;
    var responsiveStyle = responsive && responsiveBorderStyle(data, theme);
    var breakpoint = responsiveStyle && theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];

    if (side === 'top' || side === 'bottom' || side === 'left' || side === 'right') {
      styles.push("border-" + side + ": " + value + ";");

      if (responsiveStyle) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_1__/* .breakpointStyle */ .bk)(breakpoint, responsiveStyle));
      }
    } else if (side === 'end' || side === 'start') {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-inline-", ":", ";"], side, value));

      if (responsiveStyle) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_1__/* .breakpointStyle */ .bk)(breakpoint, responsiveStyle));
      }
    } else if (side === 'vertical') {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-left:", ";border-right:", ";"], value, value));

      if (responsiveStyle) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_1__/* .breakpointStyle */ .bk)(breakpoint, responsiveStyle));
      }
    } else if (side === 'horizontal') {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-top:", ";border-bottom:", ";"], value, value));

      if (responsiveStyle) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_1__/* .breakpointStyle */ .bk)(breakpoint, responsiveStyle));
      }
    } else if (side === 'between') {// no-op
    } else {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border:", ";"], value));

      if (responsiveStyle) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_1__/* .breakpointStyle */ .bk)(breakpoint, responsiveStyle));
      }
    }

    borderStyles.push(styles);
  });
  return borderStyles;
};

/***/ }),

/***/ 6808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pi": () => (/* binding */ colorIsDark),
/* harmony export */   "ls": () => (/* binding */ getRGBA),
/* harmony export */   "ut": () => (/* binding */ normalizeColor)
/* harmony export */ });
// Returns the specific color that should be used according to the theme.
// If 'dark' is supplied, it takes precedence over 'theme.dark'.
// Can return undefined.
var normalizeColor = function normalizeColor(color, theme, dark) {
  var colorSpec = theme.global && theme.global.colors[color] !== undefined ? theme.global.colors[color] : color; // If the color has a light or dark object, use that

  var result = colorSpec;

  if (colorSpec) {
    if ((dark === true || dark === undefined && theme.dark) && colorSpec.dark !== undefined) {
      result = colorSpec.dark;
    } else if ((dark === false || !theme.dark) && colorSpec.light !== undefined) {
      result = colorSpec.light;
    }
  } // allow one level of indirection in color names


  if (result && theme.global && theme.global.colors[result] !== undefined) {
    result = normalizeColor(result, theme, dark);
  }

  return result;
};

var parseHexToRGB = function parseHexToRGB(color) {
  return color.length < 7 // 7 is what's needed for '#RRGGBB'
  ? color.match(/[A-Za-z0-9]{1}/g).map(function (v) {
    return parseInt("" + v + v, 16);
  }) : // https://stackoverflow.com/a/42429333
  color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
    return parseInt(v, 16);
  });
}; // From: https://stackoverflow.com/a/9493060/8513067
// Converts an HSL color value to RGB. Conversion formula
// adapted from http://en.wikipedia.org/wiki/HSL_color_space.
// Assumes h, s, and l are contained in the set [0, 1] and
// returns r, g, and b in the set [0, 255].


var hslToRGB = function hslToRGB(h, s, l) {
  var r;
  var g;
  var b;

  if (s === 0 || s === '0') {
    // achromatic
    r = l;
    g = l;
    b = l;
  } else {
    var hue2rgb = function hue2rgb(p, q, inT) {
      var t = inT;
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 0.16666667) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 0.66666667) return p + (q - p) * (0.66666667 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 0.33333333);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 0.33333333);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}; // allow for alpha: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA


var hexExp = /^#[A-Za-z0-9]{3,4}$|^#[A-Za-z0-9]{6,8}$/;
var rgbExp = /^rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?\)/;
var rgbaExp = /^rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([.0-9]*)\s?\)/; // e.g. hsl(240, 60%, 50%)

var hslExp = /^hsla?\(\s?([0-9]*)\s?,\s?([0-9]*)%?\s?,\s?([0-9]*)%?\s?.*?\)/;

var canExtractRGBArray = function canExtractRGBArray(color) {
  return hexExp.test(color) || rgbExp.test(color) || rgbaExp.test(color) || hslExp.test(color);
};

var getRGBArray = function getRGBArray(color) {
  if (hexExp.test(color)) {
    var _parseHexToRGB = parseHexToRGB(color),
        red = _parseHexToRGB[0],
        green = _parseHexToRGB[1],
        blue = _parseHexToRGB[2],
        alpha = _parseHexToRGB[3];

    return [red, green, blue, alpha !== undefined ? alpha / 255.0 : undefined];
  }

  var match = color.match(rgbExp);

  if (match) {
    return match.splice(1).map(function (v) {
      return parseInt(v, 10);
    });
  }

  match = color.match(rgbaExp);

  if (match) {
    return match.splice(1).map(function (v) {
      return parseFloat(v, 10);
    });
  }

  match = color.match(hslExp);

  if (match) {
    var _match$splice$map = match.splice(1).map(function (v) {
      return parseInt(v, 10);
    }),
        h = _match$splice$map[0],
        s = _match$splice$map[1],
        l = _match$splice$map[2];

    return hslToRGB(h / 360.0, s / 100.0, l / 100.0);
  }

  return color;
};

var colorIsDark = function colorIsDark(color) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray = getRGBArray(color),
        red = _getRGBArray[0],
        green = _getRGBArray[1],
        blue = _getRGBArray[2],
        alpha = _getRGBArray[3]; // if there is an alpha and it's greater than 50%, we can't really tell


    if (alpha < 0.5) return undefined;
    var brightness = (299 * red + 587 * green + 114 * blue) / 1000; // From: http://www.had2know.com/technology/color-contrast-calculator-web-design.html
    // Above domain is no longer registered.

    return brightness < 125;
  }

  return undefined;
};
var getRGBA = function getRGBA(color, opacity) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray2 = getRGBArray(color),
        red = _getRGBArray2[0],
        green = _getRGBArray2[1],
        blue = _getRGBArray2[2],
        alpha = _getRGBArray2[3];

    var normalizedAlpha;

    if (opacity !== undefined) {
      normalizedAlpha = opacity;
    } else if (alpha !== undefined) {
      normalizedAlpha = alpha;
    } else {
      normalizedAlpha = 1;
    }

    return "rgba(" + red + ", " + green + ", " + blue + ", " + normalizedAlpha + ")";
  }

  return undefined;
};

/***/ }),

/***/ 9207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bk": () => (/* binding */ breakpointStyle),
/* harmony export */   "gd": () => (/* binding */ parseMetricToNum)
/* harmony export */ });
/* unused harmony exports fontSize, findAllByType, getAvailableAtBadge */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8804);

var parseMetricToNum = function parseMetricToNum(metric) {
  if (typeof metric === 'number') return metric;

  if (metric.match(/\s/) && "production" !== 'production') {}

  return parseFloat(metric.match(/\d+(\.\d+)?/), 10);
};
var fontSize = function fontSize(size, lineHeight) {
  return css(["font-size:", ";line-height:", ";"], function (props) {
    return parseMetricToNum(size) / parseMetricToNum(props.theme.global.font.size) * 1 + "rem";
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToNum(size) / parseMetricToNum(props.theme.global.lineHeight)) * (parseMetricToNum(props.theme.global.lineHeight) / parseMetricToNum(size)) + "px";
  });
};
var breakpointStyle = function breakpointStyle(breakpoint, content) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media only screen ", "{", ";}"], breakpoint.value && "and (max-width: " + breakpoint.value + "px)", content);
};
var findAllByType = function findAllByType(component, type) {
  var matches = [];

  if (component.type === type) {
    matches.push(component);
  }

  if (component.children) {
    component.children.forEach(function (child) {
      matches = matches.concat(findAllByType(child, type));
    });
  }

  return matches;
};
var getAvailableAtBadge = function getAvailableAtBadge(availableAt, componentType) {
  return [{
    url: "https://storybook.grommet.io/?selectedKind=" + componentType + "-" + availableAt + "&full=0&stories=1&panelRight=0",
    badge: 'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
    label: 'Storybook'
  }, {
    url: "https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/" + availableAt.toLowerCase() + "&module=%2Fsrc%2F" + availableAt + ".js",
    badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
    label: 'CodeSandbox'
  }];
};

/***/ }),

/***/ 5543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RH": () => (/* binding */ deepMerge),
/* harmony export */   "_A": () => (/* binding */ deepFreeze)
/* harmony export */ });
/* unused harmony exports isObject, removeUndefined */
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var isObject = function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
};
var deepFreeze = function deepFreeze(obj) {
  Object.keys(obj).forEach(function (key) {
    return key && isObject(obj[key]) && Object.freeze(obj[key]);
  });
  return Object.freeze(obj);
};
var deepMerge = function deepMerge(target) {
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
};
var removeUndefined = function removeUndefined(obj) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  });
  return result;
};

/***/ }),

/***/ 7187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useForwardedRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2320);



var updateRef = function updateRef(ref, innerRef) {
  if (!ref) return;

  if (typeof ref === 'function') {
    ref(innerRef.current);
  } else {
    // eslint-disable-next-line no-param-reassign
    ref.current = innerRef.current;
  }
}; // https://medium.com/the-non-traditional-developer/how-to-use-the-forwarded-ref-in-react-1fb108f4e6af


var useForwardedRef = function useForwardedRef(ref) {
  var innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  updateRef(ref, innerRef);
  (0,_use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .b)(function () {
    return updateRef(ref, innerRef);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return updateRef(ref, innerRef);
  });
  return innerRef;
};

/***/ }),

/***/ 1862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nf": () => (/* binding */ getDeviceBreakpoint),
/* harmony export */   "iu": () => (/* binding */ getBreakpoint),
/* harmony export */   "ze": () => (/* binding */ getBreakpointStyle)
/* harmony export */ });
var getBreakpoint = function getBreakpoint(viewportWidth, theme) {
  var sortedBreakpoints = Object.keys(theme.global.breakpoints).sort(function (a, b) {
    var first = theme.global.breakpoints[a];
    var second = theme.global.breakpoints[b];
    if (!first) return 1;
    if (!second) return -1;
    if (!first.value) return 1;
    if (!second.value) return -1;
    return first.value - second.value;
  }); // the last breakpoint on the sorted array should have
  // no windowWidth boundaries

  var lastBreakpoint = sortedBreakpoints[sortedBreakpoints.length - 1];
  var result = sortedBreakpoints.find(function (name) {
    var breakpoint = theme.global.breakpoints[name];
    return !breakpoint.value || breakpoint.value >= viewportWidth ? name : false;
  });
  return result || lastBreakpoint;
};
var getDeviceBreakpoint = function getDeviceBreakpoint(type, theme) {
  return theme.global.deviceBreakpoints[type];
};
var getBreakpointStyle = function getBreakpointStyle(theme, breakpointSize) {
  var breakpoint = breakpointSize && theme.global.breakpoints[breakpointSize] || {};
  if (!breakpoint.edgeSize) breakpoint.edgeSize = theme.global.edgeSize;
  if (!breakpoint.borderSize) breakpoint.borderSize = theme.global.borderSize;
  if (!breakpoint.size) breakpoint.size = theme.global.size;
  return breakpoint;
};

/***/ }),

/***/ 363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": () => (/* binding */ genericStyles),
/* harmony export */   "Cv": () => (/* binding */ disabledStyle),
/* harmony export */   "EW": () => (/* binding */ fillStyle),
/* harmony export */   "GA": () => (/* binding */ unfocusStyle),
/* harmony export */   "GU": () => (/* binding */ alignStyle),
/* harmony export */   "Lw": () => (/* binding */ controlBorderStyle),
/* harmony export */   "Oh": () => (/* binding */ baseStyle),
/* harmony export */   "S6": () => (/* binding */ alignContentStyle),
/* harmony export */   "Tq": () => (/* binding */ sizeStyle),
/* harmony export */   "Zt": () => (/* binding */ plainInputStyle),
/* harmony export */   "bS": () => (/* binding */ roundStyle),
/* harmony export */   "ch": () => (/* binding */ widthStyle),
/* harmony export */   "dy": () => (/* binding */ getInputPadBySide),
/* harmony export */   "hG": () => (/* binding */ inputStyle),
/* harmony export */   "jq": () => (/* binding */ focusStyle),
/* harmony export */   "jt": () => (/* binding */ textAlignStyle),
/* harmony export */   "mJ": () => (/* binding */ kindPartStyles),
/* harmony export */   "oW": () => (/* binding */ edgeStyle),
/* harmony export */   "tH": () => (/* binding */ heightStyle),
/* harmony export */   "uq": () => (/* binding */ overflowStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8804);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6093);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6808);
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1862);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9207);





var baseStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-family:", ";font-size:", ";line-height:", ";font-weight:", ";", " box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;"], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return props.theme.global.font.size;
}, function (props) {
  return props.theme.global.font.height;
}, function (props) {
  return props.theme.global.font.weight;
}, function (props) {
  return !props.plain && (0,_background__WEBPACK_IMPORTED_MODULE_1__/* .backgroundStyle */ .Nu)(props.theme.baseBackground, props.theme);
});
var controlBorderStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border:", " solid ", ";border-radius:", ";"], function (props) {
  return props.theme.global.control.border.width;
}, function (props) {
  return (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)(props.theme.global.control.border.color || 'border', props.theme);
}, function (props) {
  return props.theme.global.control.border.radius;
});
var edgeStyle = function edgeStyle(kind, data, responsive, responsiveBreakpoint, theme) {
  var breakpoint = responsiveBreakpoint && theme.global.breakpoints[responsiveBreakpoint];

  if (typeof data === 'string') {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ":", ";", ";"], kind, theme.global.edgeSize[data] || data, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n        " + kind + ": " + (breakpoint.edgeSize[data] || data) + ";\n      ") : '');
  }

  var result = [];
  var horizontal = data.horizontal,
      vertical = data.vertical,
      top = data.top,
      bottom = data.bottom,
      left = data.left,
      right = data.right; // if horizontal and vertical are equal OR all sides are equal,
  // we can just return a single css value such as padding: 12px
  // instead of breaking out by sides.

  var horizontalVerticalEqual = horizontal && vertical && horizontal === vertical;
  var allSidesEqual = top && bottom && left && right && top === bottom === left === right;

  if (horizontalVerticalEqual || allSidesEqual) {
    // since the values will be the same between vertical & horizontal OR
    // left, right, top, & bottom, we can just choose one
    var value = horizontalVerticalEqual ? horizontal : top;
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ":", ";", ";"], kind, theme.global.edgeSize[value] || value, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n        " + kind + ": " + (breakpoint.edgeSize[value] || value) + ";\n      ") : '');
  }

  if (horizontal) {
    result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "-left:", ";", "-right:", ";", ";"], kind, theme.global.edgeSize[horizontal] || horizontal, kind, theme.global.edgeSize[horizontal] || horizontal, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          " + kind + "-left: " + (breakpoint.edgeSize[horizontal] || horizontal) + ";\n          " + kind + "-right: " + (breakpoint.edgeSize[horizontal] || horizontal) + ";\n        ") : ''));
  }

  if (vertical) {
    result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "-top:", ";", "-bottom:", ";", ";"], kind, theme.global.edgeSize[vertical] || vertical, kind, theme.global.edgeSize[vertical] || vertical, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          " + kind + "-top: " + (breakpoint.edgeSize[vertical] || vertical) + ";\n          " + kind + "-bottom: " + (breakpoint.edgeSize[vertical] || vertical) + ";\n        ") : ''));
  }

  if (top) {
    result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "-top:", ";", ";"], kind, theme.global.edgeSize[top] || top, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          " + kind + "-top: " + (breakpoint.edgeSize[top] || top) + ";\n        ") : ''));
  }

  if (bottom) {
    result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "-bottom:", ";", ";"], kind, theme.global.edgeSize[bottom] || bottom, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          " + kind + "-bottom: " + (breakpoint.edgeSize[bottom] || bottom) + ";\n        ") : ''));
  }

  if (left) {
    result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "-left:", ";", ";"], kind, theme.global.edgeSize[left] || left, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          " + kind + "-left: " + (breakpoint.edgeSize[left] || left) + ";\n        ") : ''));
  }

  if (right) {
    result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "-right:", ";", ";"], kind, theme.global.edgeSize[right] || right, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          " + kind + "-right: " + (breakpoint.edgeSize[right] || right) + ";\n        ") : ''));
  }

  if (data.start) {
    result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "-inline-start:", ";", ";"], kind, theme.global.edgeSize[data.start] || data.start, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          " + kind + "-inline-start: " + (breakpoint.edgeSize[data.start] || data.start) + ";\n        ") : ''));
  }

  if (data.end) {
    result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", "-inline-end:", ";", ";"], kind, theme.global.edgeSize[data.end] || data.end, responsive && breakpoint ? (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          " + kind + "-inline-end: " + (breakpoint.edgeSize[data.end] || data.end) + ";\n        ") : ''));
  }

  return result;
};
var fillStyle = function fillStyle(fillProp) {
  if (fillProp === 'horizontal') {
    return 'width: 100%;';
  }

  if (fillProp === 'vertical') {
    return 'height: 100%;';
  }

  if (fillProp) {
    return "\n      width: 100%;\n      height: 100%;\n    ";
  }

  return undefined;
};

var focusStyles = function focusStyles(props, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      forceOutline = _ref.forceOutline,
      justBorder = _ref.justBorder;

  var focus = props.theme.global.focus;

  if (!focus || forceOutline && !focus.outline) {
    var color = (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)('focus', props.theme);
    if (color) return "outline: 2px solid " + color + ";";
    return ''; // native
  }

  if (focus.outline && (!focus.border || !justBorder)) {
    if (typeof focus.outline === 'object') {
      var _color = (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)(focus.outline.color || 'focus', props.theme);

      var size = focus.outline.size || '2px';
      return "\n        outline-offset: 0px;\n        outline: " + size + " solid " + _color + ";\n      ";
    }

    return "outline: " + focus.outline + ";";
  }

  if (focus.shadow && (!focus.border || !justBorder)) {
    if (typeof focus.shadow === 'object') {
      var _color2 = (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)( // If there is a focus.border.color, use that for shadow too.
      // This is for backwards compatibility in v2.
      focus.border && focus.border.color || focus.shadow.color || 'focus', props.theme);

      var _size = focus.shadow.size || '2px'; // backwards compatible default


      return "\n        outline: none;\n        box-shadow: 0 0 " + _size + " " + _size + " " + _color2 + ";\n      ";
    }

    return "\n      outline: none;\n      box-shadow: " + focus.shadow + ";\n    ";
  }

  if (focus.border) {
    var _color3 = (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)(focus.border.color || 'focus', props.theme);

    return "\n      outline: none;\n      border-color: " + _color3 + ";\n    ";
  }

  return ''; // defensive
};

var unfocusStyles = function unfocusStyles(props, _temp2) {
  var _ref2 = _temp2 === void 0 ? {} : _temp2,
      forceOutline = _ref2.forceOutline,
      justBorder = _ref2.justBorder;

  var focus = props.theme.global.focus;

  if (!focus || forceOutline && !focus.outline) {
    var color = (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)('focus', props.theme);
    if (color) return "outline: none;";
    return ''; // native
  }

  if (focus.outline && (!focus.border || !justBorder)) {
    if (typeof focus.outline === 'object') {
      return "\n        outline-offset: 0px;\n        outline: none;\n      ";
    }

    return "outline: none;";
  }

  if (focus.shadow && (!focus.border || !justBorder)) {
    if (typeof focus.shadow === 'object') {
      return "\n        outline: none;\n        box-shadow: none;\n      ";
    }

    return "\n      outline: none;\n      box-shadow: none;\n    ";
  }

  if (focus.border) {
    return "\n      outline: none;\n      border-color: none;\n    ";
  }

  return ''; // defensive
}; // focus also supports clickable elements inside svg


var focusStyle = function focusStyle(_temp3) {
  var _ref3 = _temp3 === void 0 ? {} : _temp3,
      forceOutline = _ref3.forceOutline,
      justBorder = _ref3.justBorder,
      skipSvgChildren = _ref3.skipSvgChildren;

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " ", " ", ""], function (props) {
    return !skipSvgChildren && "\n  > circle,\n  > ellipse,\n  > line,\n  > path,\n  > polygon,\n  > polyline,\n  > rect {\n    " + focusStyles(props) + "\n  }";
  }, function (props) {
    return focusStyles(props, {
      forceOutline: forceOutline,
      justBorder: justBorder
    });
  }, !forceOutline && "\n  ::-moz-focus-inner {\n    border: 0;\n  }\n  ");
}; // This is placed next to focusStyle for easy maintainability
// of code since changes to focusStyle should be reflected in
// unfocusStyle as well.
// this function can be used to reset focus styles which is
// applicable when turning the focus ring off when using the mouse
// see https://nelo.is/writing/styling-better-focus-states/

var unfocusStyle = function unfocusStyle(_temp4) {
  var _ref4 = _temp4 === void 0 ? {} : _temp4,
      forceOutline = _ref4.forceOutline,
      justBorder = _ref4.justBorder,
      skipSvgChildren = _ref4.skipSvgChildren;

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " ", " ", ""], function (props) {
    return !skipSvgChildren && "\n  > circle,\n  > ellipse,\n  > line,\n  > path,\n  > polygon,\n  > polyline,\n  > rect {\n    " + unfocusStyles(props) + "\n  }";
  }, function (props) {
    return unfocusStyles(props, {
      forceOutline: forceOutline,
      justBorder: justBorder
    });
  }, !forceOutline && "\n  ::-moz-focus-inner {\n    border: 0;\n  }\n  ");
}; // For backwards compatibility we need to add back the control border width.
// Based on how grommet was functioning prior to https://github.com/grommet/grommet/pull/3939,
// the padding was subtracting the border width from the theme value, but the
// placeholder was not. Because we're now placing the subtraction into the
// theme itself, we have to add back in the border width here.
// This is used for placeholder/icon in TextInput and MaskedInput.

var adjustPad = function adjustPad(props, value) {
  return (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .parseMetricToNum */ .gd)((props.theme.global.edgeSize[value] || value) + "px") + (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .parseMetricToNum */ .gd)(props.theme.global.control.border.width + "px") + "px";
};

var getInputPadBySide = function getInputPadBySide(props, side) {
  if (typeof props.theme.global.input.padding !== 'object') {
    var _adjustedPad = adjustPad(props, props.theme.global.input.padding);

    return _adjustedPad;
  }

  var orientation;
  if (side === 'left' || side === 'right') orientation = 'horizontal';else if (side === 'top' || side === 'bottom') orientation = 'vertical';else orientation = undefined; // if individual side isn't available, fallback to the
  // orientation if possible

  var pad = props.theme.global.input.padding[side] || props.theme.global.input.padding[orientation];
  var adjustedPad = adjustPad(props, pad);
  return adjustedPad;
};
var placeholderColor = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["color:", ";"], function (props) {
  return (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)(props.theme.global.colors.placeholder, props.theme);
});
var placeholderStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["&::-webkit-input-placeholder{", ";}&::-moz-placeholder{", ";}&:-ms-input-placeholder{", ";}"], placeholderColor, placeholderColor, placeholderColor);

var inputSizeStyle = function inputSizeStyle(props) {
  var data = props.theme.text[props.size];

  if (!data) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:", ";"], props.size);
  }

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var inputStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-sizing:border-box;", " font-family:inherit;border:none;-webkit-appearance:none;background:transparent;color:inherit;width:100%;", " ", " ", " margin:0;", " &:focus{", ";}", " ", "::-webkit-search-decoration{-webkit-appearance:none;}&::-moz-focus-inner{border:none;outline:none;}&:-moz-placeholder,&::-moz-placeholder{opacity:1;}", ""], function (props) {
  var _props$theme$text$pro;

  return "font-size: " + (props.theme.global.input.font.size ? ((_props$theme$text$pro = props.theme.text[props.theme.global.input.font.size]) == null ? void 0 : _props$theme$text$pro.size) || props.theme.global.input.font.size : 'inherit') + ";";
}, function (props) {
  return props.theme.global.input.font.height && "line-height: " + props.theme.global.input.font.height + ";";
}, function (props) {
  return props.theme.global.input.padding && typeof props.theme.global.input.padding !== 'object' ? // On a breaking change release, this condition could be removed and
  // just the edgeStyle could remain. Currently, this is needed for
  // backwards compatibility since we are placing the calculation in
  // base.js
  "padding: " + ((0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .parseMetricToNum */ .gd)(props.theme.global.edgeSize[props.theme.global.input.padding] || props.theme.global.input.padding) - (0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .parseMetricToNum */ .gd)(props.theme.global.control.border.width)) + "px;" : edgeStyle('padding', props.theme.global.input.padding, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return (// for backwards compatibility, check if props.theme.global.input.weight
    (props.theme.global.input.weight || props.theme.global.input.font.weight) && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-weight:", ";"], props.theme.global.input.weight || props.theme.global.input.font.weight)
  );
}, function (props) {
  return props.size && inputSizeStyle(props);
}, function (props) {
  return (!props.plain || props.focusIndicator) && focusStyle();
}, controlBorderStyle, placeholderStyle, function (props) {
  return props.theme.global.input.extend;
});
var overflowStyle = function overflowStyle(overflowProp) {
  if (typeof overflowProp === 'string') {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["overflow:", ";"], overflowProp);
  }

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " ", ";"], overflowProp.horizontal && "overflow-x: " + overflowProp.horizontal + ";", overflowProp.vertical && "overflow-y: " + overflowProp.vertical + ";");
};
var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var genericStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " ", " ", ""], function (props) {
  return props.alignSelf && "align-self: " + ALIGN_SELF_MAP[props.alignSelf] + ";";
}, function (props) {
  return props.gridArea && "grid-area: " + props.gridArea + ";";
}, function (props) {
  return props.margin && props.theme.global && edgeStyle('margin', props.margin, props.responsive, props.theme.global.edgeSize.responsiveBreakpoint, props.theme);
});
var disabledStyle = function disabledStyle(componentStyle) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["opacity:", ";cursor:default;"], function (props) {
    return componentStyle || props.theme.global.control.disabled.opacity;
  });
};
var sizeStyle = function sizeStyle(name, value, theme) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ":", ";"], name, theme.global.size[value] || value);
};
var plainInputStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["outline:none;border:none;"]); // CSS for this sub-object in the theme

var kindPartStyles = function kindPartStyles(obj, theme, colorValue) {
  var styles = [];

  if (obj.padding || obj.pad) {
    // button uses `padding` but other components use Grommet `pad`
    var pad = obj.padding || obj.pad;
    if (pad.vertical || pad.horizontal) styles.push("padding: " + (theme.global.edgeSize[pad.vertical] || pad.vertical || 0) + " " + (theme.global.edgeSize[pad.horizontal] || pad.horizontal || 0) + ";");else styles.push("padding: " + (theme.global.edgeSize[pad] || pad || 0) + ";");
  }

  if (obj.background) styles.push((0,_background__WEBPACK_IMPORTED_MODULE_1__/* .backgroundStyle */ .Nu)(colorValue || obj.background, theme, obj.color || (Object.prototype.hasOwnProperty.call(obj, 'color') && obj.color === undefined ? false : undefined)));else if (obj.color) styles.push("color: " + (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)(obj.color, theme) + ";");

  if (obj.border) {
    if (obj.border.width) styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-style:solid;border-width:", ";"], obj.border.width));
    if (obj.border.color) styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-color:", ";"], (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)(!obj.background && colorValue || obj.border.color || 'border', theme)));
    if (obj.border.radius) styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-radius:", ";"], obj.border.radius));
  } else if (obj.border === false) styles.push('border: none;');

  if (colorValue && !obj.border && !obj.background) styles.push("color: " + (0,_colors__WEBPACK_IMPORTED_MODULE_2__/* .normalizeColor */ .ut)(colorValue, theme) + ";");

  if (obj.font) {
    if (obj.font.size) {
      styles.push("font-size: " + (theme.text[obj.font.size].size || obj.font.size) + ";");
    }

    if (obj.font.height) {
      styles.push("line-height: " + obj.font.height + ";");
    }

    if (obj.font.weight) {
      styles.push("font-weight: " + obj.font.weight + ";");
    }
  }

  if (obj.opacity) {
    var opacity = obj.opacity === true ? theme.global.opacity.medium : theme.global.opacity[obj.opacity] || obj.opacity;
    styles.push("opacity: " + opacity + ";");
  }

  if (obj.extend) styles.push(obj.extend);
  return styles;
};
var ROUND_MAP = {
  full: '100%'
};
var roundStyle = function roundStyle(data, responsive, theme) {
  var breakpoint = (0,_responsive__WEBPACK_IMPORTED_MODULE_4__/* .getBreakpointStyle */ .ze)(theme, theme.box.responsiveBreakpoint);
  var styles = [];

  if (typeof data === 'object') {
    var size = ROUND_MAP[data.size] || theme.global.edgeSize[data.size || 'medium'] || data.size;
    var responsiveSize = responsive && breakpoint && breakpoint.edgeSize[data.size] && (breakpoint.edgeSize[data.size] || data.size);

    if (data.corner === 'top') {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-top-left-radius:", ";border-top-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          border-top-left-radius: " + responsiveSize + ";\n          border-top-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'bottom') {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-bottom-left-radius:", ";border-bottom-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          border-bottom-left-radius: " + responsiveSize + ";\n          border-bottom-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'left') {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-top-left-radius:", ";border-bottom-left-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          border-top-left-radius: " + responsiveSize + ";\n          border-bottom-left-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'right') {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-top-right-radius:", ";border-bottom-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          border-top-right-radius: " + responsiveSize + ";\n          border-bottom-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner) {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-", "-radius:", ";"], data.corner, size));

      if (responsiveSize) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          border-" + data.corner + "-radius: " + responsiveSize + ";\n        "));
      }
    } else {
      styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-radius:", ";"], size));

      if (responsiveSize) {
        styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n          border-radius: " + responsiveSize + ";\n        "));
      }
    }
  } else {
    var _size2 = data === true ? 'medium' : data;

    styles.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-radius:", ";"], ROUND_MAP[_size2] || theme.global.edgeSize[_size2] || _size2));

    var _responsiveSize = breakpoint && breakpoint.edgeSize[_size2];

    if (_responsiveSize) {
      styles.push((0,_mixins__WEBPACK_IMPORTED_MODULE_3__/* .breakpointStyle */ .bk)(breakpoint, "\n        border-radius: " + _responsiveSize + ";\n      "));
    }
  }

  return styles;
};
var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  justify: 'justify',
  start: 'left'
};
var textAlignStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});
var ALIGN_ITEMS_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["align-items:", ";"], function (props) {
  var _ALIGN_ITEMS_MAP$prop;

  return (_ALIGN_ITEMS_MAP$prop = ALIGN_ITEMS_MAP[props.align]) != null ? _ALIGN_ITEMS_MAP$prop : props.align;
});
var ALIGN_CONTENT_MAP = {
  around: 'space-around',
  baseline: 'baseline',
  between: 'space-between',
  center: 'center',
  evenly: 'space-evenly',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignContentStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["align-content:", ";"], function (props) {
  var _ALIGN_CONTENT_MAP$pr;

  return (_ALIGN_CONTENT_MAP$pr = ALIGN_CONTENT_MAP[props.alignContent]) != null ? _ALIGN_CONTENT_MAP$pr : props.alignContent;
});

var getSize = function getSize(theme, size) {
  return theme.global.size[size] || size;
};

var widthObjectStyle = function widthObjectStyle(width, theme) {
  var result = [];
  if (width.max) result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-width:", ";"], getSize(theme, width.max)));
  if (width.min) result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["min-width:", ";"], getSize(theme, width.min)));
  if (width.width) result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:", ";"], getSize(theme, width.width)));
  return result;
};

var widthStringStyle = function widthStringStyle(width, theme) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:", ";"], getSize(theme, width));
};

var widthStyle = function widthStyle(width, theme) {
  return typeof width === 'object' ? widthObjectStyle(width, theme) : widthStringStyle(width, theme);
};

var heightObjectStyle = function heightObjectStyle(height, theme) {
  var result = [];
  if (height.max) result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["max-height:", ";"], getSize(theme, height.max)));
  if (height.min) result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["min-height:", ";"], getSize(theme, height.min))); // backwards compatibile

  if (height.width) result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:", ";"], getSize(theme, height.height)));
  if (height.height) result.push((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:", ";"], getSize(theme, height.height)));
  return result;
};

var heightStringStyle = function heightStringStyle(height, theme) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:", ";"], getSize(theme, height));
};

var heightStyle = function heightStyle(height, theme) {
  return typeof height === 'object' ? heightObjectStyle(height, theme) : heightStringStyle(height, theme);
};

/***/ }),

/***/ 2320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* eslint-disable no-restricted-imports */

/**
 * A substitute for React's useLayoutEffect, which does not generate warnings on
 * SSR. It is named useLayoutEffect so that all eslint rules applying to the
 * original useLayoutEffect would also apply to it.
 * This solution was suggested by Alex Reardon.
 * @see https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 * @see https://github.com/grommet/grommet/issues/4765
 */

var useLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useLayoutEffect)));

/***/ }),

/***/ 7412:
/***/ ((module) => {

module.exports = JSON.parse('{"calendar":{"previousMove":"Moved to {date}","previous":"Go to {date}","nextMove":"Moved to {date}","next":"Go to {date}"},"carousel":{"previous":"Go to slide {slide}","next":"Go to slide {slide}","jump":"Jump to slide {slide}"},"dateInput":{"openCalendar":"Press space to open calendar","enterCalendar":"Calendar is open, use arrow keys and enter to select a date.","exitCalendar":"Exited calendar dialog"},"fileInput":{"browse":"browse","dropPrompt":"Drop file here or","dropPromptMultiple":"Drop files here or","files":"files","maxSizeSingle":"The file is too large. Select a file no larger than {maxSize}.","maxSizeMultiple":{"singular":"One file is too large. Select files which are no larger than {maxSize}.","plural":"{numOfFiles} files are too large. Select files which are no larger than {maxSize}."},"remove":"remove","removeAll":"remove all","maxFile":"Attach a maximum of {max} files only."},"form":{"invalid":"invalid","required":"required"},"menu":{"openMenu":"Open Menu","closeMenu":"Close Menu"},"rangeSelector":{"lower":"Lower Bounds","upper":"Upper Bounds"},"select":{"multiple":"multiple","selected":"; Selected: {currentSelectedValue}"},"skipLinks":{"skipTo":"Skip To:"},"tabs":{"tabContents":"Tab Contents"},"textInput":{"enterSelect":"(Press Enter to Select)","suggestionsCount":"suggestions available","suggestionsExist":"This input has suggestions use arrow keys to navigate","suggestionIsOpen":"Suggestions drop is open, continue to use arrow keys to navigate"},"video":{"closeMenu":"close menu","fullScreen":"full screen","progressMeter":"video progress","scrubber":"scrubber","openMenu":"open menu","pauseButton":"pause","playButton":"play","volumeDown":"volume down","volumeUp":"volume up"}}');

/***/ })

}]);