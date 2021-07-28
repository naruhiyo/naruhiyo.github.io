"use strict";
(self["webpackChunknaruhiyo_github_io"] = self["webpackChunknaruhiyo_github_io"] || []).push([[746],{

/***/ 8296:
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
var color = __webpack_require__(3171);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(4038);
;// CONCATENATED MODULE: ./node_modules/grommet-styles/es6/styles/size.js

var sizeStyle = function sizeStyle(name, value, theme) {
  return (0,styled_components_browser_esm.css)(["", ":", ";"], name, theme.global.size[value] || value);
};
;// CONCATENATED MODULE: ./node_modules/grommet-styles/es6/styles/index.js


// EXTERNAL MODULE: ./node_modules/grommet-styles/es6/utils/colors.js
var colors = __webpack_require__(4586);
;// CONCATENATED MODULE: ./node_modules/grommet-styles/es6/utils/index.js

;// CONCATENATED MODULE: ./node_modules/grommet-styles/es6/index.js



/***/ }),

/***/ 3171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ colorStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4038);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4586);


var colorStyle = function colorStyle(name, value, theme, required) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ":", ";"], name, (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .normalizeColor */ .u)(value, theme, required));
};

/***/ }),

/***/ 4586:
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

/***/ 1329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Accordion": () => (/* reexport */ AccordionWrapper),
  "AccordionPanel": () => (/* reexport */ AccordionPanelWrapper),
  "Anchor": () => (/* reexport */ Anchor),
  "AnnounceContext": () => (/* reexport */ AnnounceContext),
  "Avatar": () => (/* reexport */ Avatar),
  "Box": () => (/* reexport */ BoxWrapper),
  "Button": () => (/* reexport */ ButtonWrapper),
  "Calendar": () => (/* reexport */ CalendarWrapper),
  "Card": () => (/* reexport */ CardWrapper),
  "CardBody": () => (/* reexport */ CardBodyWrapper),
  "CardFooter": () => (/* reexport */ CardFooterWrapper),
  "CardHeader": () => (/* reexport */ CardHeaderWrapper),
  "Carousel": () => (/* reexport */ Carousel),
  "Chart": () => (/* reexport */ ChartWrapper),
  "CheckBox": () => (/* reexport */ CheckBoxWrapper),
  "CheckBoxGroup": () => (/* reexport */ CheckBoxGroup),
  "Clock": () => (/* reexport */ ClockWrapper),
  "Collapsible": () => (/* reexport */ CollapsibleWrapper),
  "ContainerTargetContext": () => (/* reexport */ ContainerTargetContext),
  "DataChart": () => (/* reexport */ DataChartWrapper),
  "DataTable": () => (/* reexport */ DataTableWrapper),
  "DateInput": () => (/* reexport */ DateInputWrapper),
  "Diagram": () => (/* reexport */ DiagramWrapper),
  "Distribution": () => (/* reexport */ DistributionWrapper),
  "Drop": () => (/* reexport */ DropWrapper),
  "DropButton": () => (/* reexport */ DropButtonWrapper),
  "FileInput": () => (/* reexport */ FileInputWrapper),
  "Footer": () => (/* reexport */ FooterWrapper),
  "Form": () => (/* reexport */ FormWrapper),
  "FormContext": () => (/* reexport */ FormContext),
  "FormField": () => (/* reexport */ FormFieldWrapper),
  "Grid": () => (/* reexport */ GridWrapper),
  "Grommet": () => (/* reexport */ GrommetWrapper),
  "Header": () => (/* reexport */ HeaderWrapper),
  "Heading": () => (/* reexport */ HeadingWrapper),
  "Image": () => (/* reexport */ ImageWrapper),
  "InfiniteScroll": () => (/* reexport */ InfiniteScrollWrapper),
  "Keyboard": () => (/* reexport */ KeyboardWrapper),
  "Layer": () => (/* reexport */ LayerWrapper),
  "List": () => (/* reexport */ ListWrapper),
  "Main": () => (/* reexport */ MainWrapper),
  "Markdown": () => (/* reexport */ GrommetMarkdownWrapper),
  "MaskedInput": () => (/* reexport */ MaskedInputWrapper),
  "Menu": () => (/* reexport */ MenuWrapper),
  "Meter": () => (/* reexport */ MeterWrapper),
  "Nav": () => (/* reexport */ NavWrapper),
  "Pagination": () => (/* reexport */ PaginationWrapper),
  "Paragraph": () => (/* reexport */ ParagraphWrapper),
  "RadioButton": () => (/* reexport */ RadioButtonWrapper),
  "RadioButtonGroup": () => (/* reexport */ RadioButtonGroup_RadioButtonGroupWrapper),
  "RangeInput": () => (/* reexport */ RangeInputWrapper),
  "RangeSelector": () => (/* reexport */ RangeSelectorWrapper),
  "ResponsiveContext": () => (/* reexport */ ResponsiveContext),
  "RootsContext": () => (/* reexport */ RootsContext),
  "RoutedAnchor": () => (/* reexport */ RoutedAnchorWrapper),
  "RoutedButton": () => (/* reexport */ RoutedButtonWrapper),
  "Select": () => (/* reexport */ SelectWrapper),
  "Sidebar": () => (/* reexport */ Sidebar),
  "SkipLink": () => (/* reexport */ SkipLink),
  "SkipLinkTarget": () => (/* reexport */ SkipLinkTarget),
  "SkipLinks": () => (/* reexport */ SkipLinksWrapper),
  "Spinner": () => (/* reexport */ SpinnerWrapper),
  "Stack": () => (/* reexport */ StackWrapper),
  "Tab": () => (/* reexport */ TabWrapper),
  "Table": () => (/* reexport */ TableWrapper),
  "TableBody": () => (/* reexport */ TableBodyWrapper),
  "TableCell": () => (/* reexport */ TableCellWrapper),
  "TableFooter": () => (/* reexport */ TableFooterWrapper),
  "TableHeader": () => (/* reexport */ TableHeaderWrapper),
  "TableRow": () => (/* reexport */ TableRowWrapper),
  "Tabs": () => (/* reexport */ TabsWrapper),
  "Text": () => (/* reexport */ TextWrapper),
  "TextArea": () => (/* reexport */ TextAreaWrapper),
  "TextInput": () => (/* reexport */ TextInputWrapper),
  "ThemeContext": () => (/* reexport */ styled_components_browser_esm.ThemeContext),
  "Tip": () => (/* reexport */ TipWrapper),
  "Video": () => (/* reexport */ VideoWrapper),
  "WorldMap": () => (/* reexport */ WorldMapWrapper),
  "base": () => (/* reexport */ base_base),
  "calcBounds": () => (/* reexport */ calcBounds),
  "calcs": () => (/* reexport */ calcs),
  "dark": () => (/* reexport */ dark),
  "defaultProps": () => (/* reexport */ default_props_defaultProps),
  "extendDefaultTheme": () => (/* reexport */ extendDefaultTheme),
  "generate": () => (/* reexport */ generate),
  "grommet": () => (/* reexport */ grommet),
  "round": () => (/* reexport */ round)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(4038);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/object.js
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
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Actions.js
var Actions = __webpack_require__(9863);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/ClosedCaption.js
var ClosedCaption = __webpack_require__(8116);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Expand.js
var Expand = __webpack_require__(5204);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/FormClose.js
var FormClose = __webpack_require__(6586);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/FormDown.js
var FormDown = __webpack_require__(3963);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/FormNext.js
var FormNext = __webpack_require__(1807);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/FormPrevious.js
var FormPrevious = __webpack_require__(6828);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/FormUp.js
var FormUp = __webpack_require__(1381);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Next.js
var Next = __webpack_require__(3031);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Pause.js
var Pause = __webpack_require__(4391);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Play.js
var Play = __webpack_require__(8518);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Previous.js
var Previous = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Subtract.js
var Subtract = __webpack_require__(3362);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Volume.js
var Volume = __webpack_require__(6068);
// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/VolumeLow.js
var VolumeLow = __webpack_require__(37);
// EXTERNAL MODULE: ./node_modules/grommet-icons/themes/base.js
var base = __webpack_require__(1769);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/mixins.js

var parseMetricToNum = function parseMetricToNum(metric) {
  if (typeof metric === 'number') return metric;

  if (metric.match(/\s/) && "production" !== 'production') {
    console.warn("Invalid single measurement value: \"" + metric + "\"");
  }

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
  return (0,styled_components_browser_esm.css)(["@media only screen ", "{", ";}"], breakpoint.value && "and (max-width: " + breakpoint.value + "px)", content);
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
;// CONCATENATED MODULE: ./node_modules/grommet/es6/themes/base.js
function base_extends() {
  base_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return base_extends.apply(this, arguments);
}



















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
  } // 24


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
  var result = deepMerge(base.base, {
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
      font: base_extends({}, fontSizing(0)),
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
          horizontal: parseMetricToNum(baseSpacing / 2 + "px") - parseMetricToNum(controlBorderWidth + "px") + "px",
          vertical: parseMetricToNum(baseSpacing / 2 + "px") - parseMetricToNum(controlBorderWidth + "px") + "px"
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
        collapse: FormUp/* FormUp */.R,
        expand: FormDown/* FormDown */.I // color: { dark: undefined, light: undefined },

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
        previous: Previous/* Previous */.L,
        next: Next/* Next */.o,
        small: {
          previous: FormPrevious/* FormPrevious */.x,
          next: FormNext/* FormNext */.M
        }
      },
      heading: {
        level: '4'
      } // level ranges from 1-6

    },
    card: {
      container: {
        round: 'small',
        elevation: 'small'
      },
      header: {},
      body: {},
      footer: {}
    },
    carousel: {
      icons: {
        current: Subtract/* Subtract */.L,
        next: Next/* Next */.o,
        previous: Previous/* Previous */.L // color: { dark: undefined, light: undefined },

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
          }
        }
      },
      icons: {
        ascending: FormDown/* FormDown */.I,
        contract: FormUp/* FormUp */.R,
        descending: FormUp/* FormUp */.R,
        expand: FormDown/* FormDown */.I // sortable: undefined,

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
        remove: FormClose/* FormClose */.n
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
    heading: {
      // color: undefined,
      font: {// family: undefined
      },
      level: {
        1: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: base_extends({}, fontSizing(4)),
          medium: base_extends({}, fontSizing(8)),
          large: base_extends({}, fontSizing(16)),
          xlarge: base_extends({}, fontSizing(24))
        },
        2: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: base_extends({}, fontSizing(2)),
          medium: base_extends({}, fontSizing(4)),
          large: base_extends({}, fontSizing(8)),
          xlarge: base_extends({}, fontSizing(12))
        },
        3: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: base_extends({}, fontSizing(1)),
          medium: base_extends({}, fontSizing(2)),
          large: base_extends({}, fontSizing(4)),
          xlarge: base_extends({}, fontSizing(6))
        },
        4: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: base_extends({}, fontSizing(0)),
          medium: base_extends({}, fontSizing(0)),
          large: base_extends({}, fontSizing(0)),
          xlarge: base_extends({}, fontSizing(0))
        },
        5: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: base_extends({}, fontSizing(-0.5)),
          medium: base_extends({}, fontSizing(-0.5)),
          large: base_extends({}, fontSizing(-0.5)),
          xlarge: base_extends({}, fontSizing(-0.5))
        },
        6: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: base_extends({}, fontSizing(-1)),
          medium: base_extends({}, fontSizing(-1)),
          large: base_extends({}, fontSizing(-1)),
          xlarge: base_extends({}, fontSizing(-1))
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
        down: FormDown/* FormDown */.I,
        up: FormUp/* FormUp */.R
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
        down: FormDown/* FormDown */.I // up: undefined,
        // color: { dark: undefined, light: undefined },

      }
    },
    meter: {
      color: 'graph-0' // colors: [] || colors: ['graph-0', 'graph-1', 'graph-2', 'graph-3'],
      // extend: undefined,

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
            font: base_extends({}, fontSizing(-1)),
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
            font: base_extends({}, fontSizing(0)),
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
            font: base_extends({}, fontSizing(1)),
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
        next: Next/* Next */.o,
        previous: Previous/* Previous */.L
      }
    },
    paragraph: {
      font: {// family: undefined
      },
      small: base_extends({}, fontSizing(-1)),
      medium: base_extends({}, fontSizing(0)),
      large: base_extends({}, fontSizing(1)),
      xlarge: base_extends({}, fontSizing(2)),
      xxlarge: base_extends({}, fontSizing(4))
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
        down: FormDown/* FormDown */.I // up: undefined

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
    text: {
      font: {// family: undefined
      },
      xsmall: base_extends({}, fontSizing(-1.5)),
      small: base_extends({}, fontSizing(-1)),
      medium: base_extends({}, fontSizing(0)),
      // 18px
      large: base_extends({}, fontSizing(1)),
      // 22px
      xlarge: base_extends({}, fontSizing(2)),
      xxlarge: base_extends({}, fontSizing(4)),
      '2xl': base_extends({}, fontSizing(4)),
      '3xl': base_extends({}, fontSizing(6)),
      '4xl': base_extends({}, fontSizing(9)),
      '5xl': base_extends({}, fontSizing(13)),
      '6xl': base_extends({}, fontSizing(18))
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
        closedCaption: ClosedCaption/* ClosedCaption */.V,
        configure: Actions/* Actions */.e,
        fullScreen: Expand/* Expand */.M,
        pause: Pause/* Pause */.d,
        play: Play/* Play */.s,
        reduceVolume: VolumeLow/* VolumeLow */.t,
        volume: Volume/* Volume */.f // color: { dark: undefined, light: undefined },

      },
      // scrubber: { track: { color: undefined } },
      scrubber: {
        color: 'light-4'
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
  return deepFreeze(result);
};
var base_base = generate(24);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/default-props.js


var default_props_defaultProps = {
  theme: base_base
};
var extendDefaultTheme = function extendDefaultTheme(theme) {
  default_props_defaultProps.theme = deepMerge(base_base, theme);
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/colors.js
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
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/background.js

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
        var backgroundColor = normalizeColor(background.color, theme);

        if (backgroundColor) {
          result = colorIsDark(backgroundColor);
        }
      }
    } else {
      var _color = normalizeColor(background, theme);

      if (_color) {
        result = colorIsDark(_color);
      }
    }
  }

  return result;
};

var darkContext = function darkContext(backgroundColor) {
  var isDark = colorIsDark(backgroundColor);
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
      var color = normalizeColor(background.color, theme, background.dark);
      var opacity = background.opacity === true ? global.opacity.medium : global.opacity[background.opacity] || background.opacity;
      backgroundColor = getRGBA(color, opacity) || color; // If we don't have a textColor already, and we aren't too translucent,
      // set the textColor to have the best contrast against the background
      // color.

      if (!textColor && (opacity === undefined || opacity > 0.3)) {
        var shade = darkContext(backgroundColor, theme);
        textColor = normalizeColor(shade && text[shade] || text, theme);
      }
    }
  } else {
    backgroundColor = normalizeColor(background, theme);

    var _shade = darkContext(backgroundColor, theme);

    if (_shade) {
      textColor = normalizeColor(text[_shade] || text, theme, _shade === 'dark');
    } else {
      // If we can't determine the shade, we assume this isn't a simple color.
      // It could be a gradient. backgroundStyle() will take care of that case.
      if (backgroundColor !== 'transparent') backgroundColor = undefined;
      if (text) textColor = normalizeColor(text, theme);
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
    return (0,styled_components_browser_esm.css)(["background:", " no-repeat center center;background-size:cover;"], background);
  }

  var _backgroundAndTextCol = backgroundAndTextColors(background, textColorArg, theme),
      backgroundColor = _backgroundAndTextCol[0],
      textColor = _backgroundAndTextCol[1];

  if (background.image) {
    var backgroundStyles = "\n      " + (backgroundColor ? "background-color: " + backgroundColor + ";" : '') + "\n      background-image: " + background.image + ";\n      background-repeat: " + (background.repeat || 'no-repeat') + ";\n      background-position: " + (background.position || 'center center') + ";\n      background-size: " + (background.size || 'cover') + ";\n    "; // allow both background color and image, in case the image doesn't fill
    // when image and opacity are used together, we need to use pseudo :before
    // to ensure that only image and background color are affected by opacity
    // but not the container contents

    return (0,styled_components_browser_esm.css)(["", " ", ""], textColor ? "color: " + textColor + ";" : '', !background.opacity ? backgroundStyles : "position: relative;\n        z-index: 0;\n        &:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          right: 0;\n          left: 0;\n          bottom: 0;\n          z-index: -1;\n          " + backgroundStyles + "\n          opacity: " + (background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity] || background.opacity) + ";\n        }");
  }

  if (backgroundColor) {
    return (0,styled_components_browser_esm.css)(["background-color:", ";", ""], backgroundColor, textColor ? "color: " + textColor + ";" : '');
  }

  if (typeof background === 'string') // This case takes care of gradients
    // or theme colors that use CSS names like 'crimson' that we don't parse
    return (0,styled_components_browser_esm.css)(["background:", ";"], normalizeColor(background, theme));
  return undefined;
};
var activeStyle = (0,styled_components_browser_esm.css)(["", ""], function (props) {
  return backgroundStyle(normalizeColor(props.theme.global.active.background, props.theme), props.theme, props.theme.global.active.color);
});
var selectedStyle = (0,styled_components_browser_esm.css)(["", ""], function (props) {
  return backgroundStyle(normalizeColor(props.theme.global.selected.background, props.theme), props.theme, props.theme.global.selected.color);
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

  return (0,styled_components_browser_esm.css)(["", " ", ""], backgroundStyle(background, theme, theme.global.hover.color), elevation && "box-shadow: " + theme.global.elevation[theme.dark ? 'dark' : 'light'][elevation] + ";");
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Keyboard/Keyboard.js
var _excluded = ["capture", "target", "children", "onKeyDown"];

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

var KeyboardDoc;

if (false) {}

var KeyboardWrapper = KeyboardDoc || Keyboard;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/responsive.js
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
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/styles.js





var baseStyle = (0,styled_components_browser_esm.css)(["font-family:", ";font-size:", ";line-height:", ";font-weight:", ";", " box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;"], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return props.theme.global.font.size;
}, function (props) {
  return props.theme.global.font.height;
}, function (props) {
  return props.theme.global.font.weight;
}, function (props) {
  return !props.plain && backgroundStyle(props.theme.baseBackground, props.theme);
});
var controlBorderStyle = (0,styled_components_browser_esm.css)(["border:", " solid ", ";border-radius:", ";"], function (props) {
  return props.theme.global.control.border.width;
}, function (props) {
  return normalizeColor(props.theme.global.control.border.color || 'border', props.theme);
}, function (props) {
  return props.theme.global.control.border.radius;
});
var edgeStyle = function edgeStyle(kind, data, responsive, responsiveBreakpoint, theme) {
  var breakpoint = responsiveBreakpoint && theme.global.breakpoints[responsiveBreakpoint];

  if (typeof data === 'string') {
    return (0,styled_components_browser_esm.css)(["", ":", ";", ";"], kind, theme.global.edgeSize[data] || data, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + ": " + (breakpoint.edgeSize[data] || data) + ";\n      ") : '');
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
    return (0,styled_components_browser_esm.css)(["", ":", ";", ";"], kind, theme.global.edgeSize[value] || value, responsive && breakpoint ? breakpointStyle(breakpoint, "\n        " + kind + ": " + (breakpoint.edgeSize[value] || value) + ";\n      ") : '');
  }

  if (horizontal) {
    result.push((0,styled_components_browser_esm.css)(["", "-left:", ";", "-right:", ";", ";"], kind, theme.global.edgeSize[horizontal] || horizontal, kind, theme.global.edgeSize[horizontal] || horizontal, responsive && breakpoint ? breakpointStyle(breakpoint, "\n          " + kind + "-left: " + (breakpoint.edgeSize[horizontal] || horizontal) + ";\n          " + kind + "-right: " + (breakpoint.edgeSize[horizontal] || horizontal) + ";\n        ") : ''));
  }

  if (vertical) {
    result.push((0,styled_components_browser_esm.css)(["", "-top:", ";", "-bottom:", ";", ";"], kind, theme.global.edgeSize[vertical] || vertical, kind, theme.global.edgeSize[vertical] || vertical, responsive && breakpoint ? breakpointStyle(breakpoint, "\n          " + kind + "-top: " + (breakpoint.edgeSize[vertical] || vertical) + ";\n          " + kind + "-bottom: " + (breakpoint.edgeSize[vertical] || vertical) + ";\n        ") : ''));
  }

  if (top) {
    result.push((0,styled_components_browser_esm.css)(["", "-top:", ";", ";"], kind, theme.global.edgeSize[top] || top, responsive && breakpoint ? breakpointStyle(breakpoint, "\n          " + kind + "-top: " + (breakpoint.edgeSize[top] || top) + ";\n        ") : ''));
  }

  if (bottom) {
    result.push((0,styled_components_browser_esm.css)(["", "-bottom:", ";", ";"], kind, theme.global.edgeSize[bottom] || bottom, responsive && breakpoint ? breakpointStyle(breakpoint, "\n          " + kind + "-bottom: " + (breakpoint.edgeSize[bottom] || bottom) + ";\n        ") : ''));
  }

  if (left) {
    result.push((0,styled_components_browser_esm.css)(["", "-left:", ";", ";"], kind, theme.global.edgeSize[left] || left, responsive && breakpoint ? breakpointStyle(breakpoint, "\n          " + kind + "-left: " + (breakpoint.edgeSize[left] || left) + ";\n        ") : ''));
  }

  if (right) {
    result.push((0,styled_components_browser_esm.css)(["", "-right:", ";", ";"], kind, theme.global.edgeSize[right] || right, responsive && breakpoint ? breakpointStyle(breakpoint, "\n          " + kind + "-right: " + (breakpoint.edgeSize[right] || right) + ";\n        ") : ''));
  }

  if (data.start) {
    result.push((0,styled_components_browser_esm.css)(["", "-inline-start:", ";", ";"], kind, theme.global.edgeSize[data.start] || data.start, responsive && breakpoint ? breakpointStyle(breakpoint, "\n          " + kind + "-inline-start: " + (breakpoint.edgeSize[data.start] || data.start) + ";\n        ") : ''));
  }

  if (data.end) {
    result.push((0,styled_components_browser_esm.css)(["", "-inline-end:", ";", ";"], kind, theme.global.edgeSize[data.end] || data.end, responsive && breakpoint ? breakpointStyle(breakpoint, "\n          " + kind + "-inline-end: " + (breakpoint.edgeSize[data.end] || data.end) + ";\n        ") : ''));
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
    var color = normalizeColor('focus', props.theme);
    if (color) return "outline: 2px solid " + color + ";";
    return ''; // native
  }

  if (focus.outline && (!focus.border || !justBorder)) {
    if (typeof focus.outline === 'object') {
      var _color = normalizeColor(focus.outline.color || 'focus', props.theme);

      var size = focus.outline.size || '2px';
      return "\n        outline-offset: 0px;\n        outline: " + size + " solid " + _color + ";\n      ";
    }

    return "outline: " + focus.outline + ";";
  }

  if (focus.shadow && (!focus.border || !justBorder)) {
    if (typeof focus.shadow === 'object') {
      var _color2 = normalizeColor( // If there is a focus.border.color, use that for shadow too.
      // This is for backwards compatibility in v2.
      focus.border && focus.border.color || focus.shadow.color || 'focus', props.theme);

      var _size = focus.shadow.size || '2px'; // backwards compatible default


      return "\n        outline: none;\n        box-shadow: 0 0 " + _size + " " + _size + " " + _color2 + ";\n      ";
    }

    return "\n      outline: none;\n      box-shadow: " + focus.shadow + ";\n    ";
  }

  if (focus.border) {
    var _color3 = normalizeColor(focus.border.color || 'focus', props.theme);

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
    var color = normalizeColor('focus', props.theme);
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

  return (0,styled_components_browser_esm.css)(["", " ", " ", ""], function (props) {
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

  return (0,styled_components_browser_esm.css)(["", " ", " ", ""], function (props) {
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
  return parseMetricToNum((props.theme.global.edgeSize[value] || value) + "px") + parseMetricToNum(props.theme.global.control.border.width + "px") + "px";
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
var placeholderColor = (0,styled_components_browser_esm.css)(["color:", ";"], function (props) {
  return normalizeColor(props.theme.global.colors.placeholder, props.theme);
});
var placeholderStyle = (0,styled_components_browser_esm.css)(["&::-webkit-input-placeholder{", ";}&::-moz-placeholder{", ";}&:-ms-input-placeholder{", ";}"], placeholderColor, placeholderColor, placeholderColor);

var inputSizeStyle = function inputSizeStyle(props) {
  var data = props.theme.text[props.size];

  if (!data) {
    return (0,styled_components_browser_esm.css)(["font-size:", ";"], props.size);
  }

  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var inputStyle = (0,styled_components_browser_esm.css)(["box-sizing:border-box;", " font-family:inherit;border:none;-webkit-appearance:none;background:transparent;color:inherit;width:100%;", " ", " ", " margin:0;", " &:focus{", ";}", " ", "::-webkit-search-decoration{-webkit-appearance:none;}&::-moz-focus-inner{border:none;outline:none;}&:-moz-placeholder,&::-moz-placeholder{opacity:1;}", ""], function (props) {
  var _props$theme$text$pro;

  return "font-size: " + (props.theme.global.input.font.size ? ((_props$theme$text$pro = props.theme.text[props.theme.global.input.font.size]) == null ? void 0 : _props$theme$text$pro.size) || props.theme.global.input.font.size : 'inherit') + ";";
}, function (props) {
  return props.theme.global.input.font.height && "line-height: " + props.theme.global.input.font.height + ";";
}, function (props) {
  return props.theme.global.input.padding && typeof props.theme.global.input.padding !== 'object' ? // On a breaking change release, this condition could be removed and
  // just the edgeStyle could remain. Currently, this is needed for
  // backwards compatibility since we are placing the calculation in
  // base.js
  "padding: " + (parseMetricToNum(props.theme.global.edgeSize[props.theme.global.input.padding] || props.theme.global.input.padding) - parseMetricToNum(props.theme.global.control.border.width)) + "px;" : edgeStyle('padding', props.theme.global.input.padding, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return (// for backwards compatibility, check if props.theme.global.input.weight
    (props.theme.global.input.weight || props.theme.global.input.font.weight) && (0,styled_components_browser_esm.css)(["font-weight:", ";"], props.theme.global.input.weight || props.theme.global.input.font.weight)
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
    return (0,styled_components_browser_esm.css)(["overflow:", ";"], overflowProp);
  }

  return (0,styled_components_browser_esm.css)(["", " ", ";"], overflowProp.horizontal && "overflow-x: " + overflowProp.horizontal + ";", overflowProp.vertical && "overflow-y: " + overflowProp.vertical + ";");
};
var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var genericStyles = (0,styled_components_browser_esm.css)(["", " ", " ", ""], function (props) {
  return props.alignSelf && "align-self: " + ALIGN_SELF_MAP[props.alignSelf] + ";";
}, function (props) {
  return props.gridArea && "grid-area: " + props.gridArea + ";";
}, function (props) {
  return props.margin && props.theme.global && edgeStyle('margin', props.margin, props.responsive, props.theme.global.edgeSize.responsiveBreakpoint, props.theme);
});
var disabledStyle = function disabledStyle(componentStyle) {
  return (0,styled_components_browser_esm.css)(["opacity:", ";cursor:default;"], function (props) {
    return componentStyle || props.theme.global.control.disabled.opacity;
  });
};
var sizeStyle = function sizeStyle(name, value, theme) {
  return (0,styled_components_browser_esm.css)(["", ":", ";"], name, theme.global.size[value] || value);
};
var plainInputStyle = (0,styled_components_browser_esm.css)(["outline:none;border:none;"]); // CSS for this sub-object in the theme

var kindPartStyles = function kindPartStyles(obj, theme, colorValue) {
  var styles = [];

  if (obj.padding || obj.pad) {
    // button uses `padding` but other components use Grommet `pad`
    var pad = obj.padding || obj.pad;
    if (pad.vertical || pad.horizontal) styles.push("padding: " + (theme.global.edgeSize[pad.vertical] || pad.vertical || 0) + " " + (theme.global.edgeSize[pad.horizontal] || pad.horizontal || 0) + ";");else styles.push("padding: " + (theme.global.edgeSize[pad] || pad || 0) + ";");
  }

  if (obj.background) styles.push(backgroundStyle(colorValue || obj.background, theme, obj.color || (Object.prototype.hasOwnProperty.call(obj, 'color') && obj.color === undefined ? false : undefined)));else if (obj.color) styles.push("color: " + normalizeColor(obj.color, theme) + ";");

  if (obj.border) {
    if (obj.border.width) styles.push((0,styled_components_browser_esm.css)(["border-style:solid;border-width:", ";"], obj.border.width));
    if (obj.border.color) styles.push((0,styled_components_browser_esm.css)(["border-color:", ";"], normalizeColor(!obj.background && colorValue || obj.border.color || 'border', theme)));
    if (obj.border.radius) styles.push((0,styled_components_browser_esm.css)(["border-radius:", ";"], obj.border.radius));
  } else if (obj.border === false) styles.push('border: none;');

  if (colorValue && !obj.border && !obj.background) styles.push("color: " + normalizeColor(colorValue, theme) + ";");

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
  var breakpoint = getBreakpointStyle(theme, theme.box.responsiveBreakpoint);
  var styles = [];

  if (typeof data === 'object') {
    var size = ROUND_MAP[data.size] || theme.global.edgeSize[data.size || 'medium'] || data.size;
    var responsiveSize = responsive && breakpoint && breakpoint.edgeSize[data.size] && (breakpoint.edgeSize[data.size] || data.size);

    if (data.corner === 'top') {
      styles.push((0,styled_components_browser_esm.css)(["border-top-left-radius:", ";border-top-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-top-left-radius: " + responsiveSize + ";\n          border-top-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'bottom') {
      styles.push((0,styled_components_browser_esm.css)(["border-bottom-left-radius:", ";border-bottom-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-bottom-left-radius: " + responsiveSize + ";\n          border-bottom-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'left') {
      styles.push((0,styled_components_browser_esm.css)(["border-top-left-radius:", ";border-bottom-left-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-top-left-radius: " + responsiveSize + ";\n          border-bottom-left-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner === 'right') {
      styles.push((0,styled_components_browser_esm.css)(["border-top-right-radius:", ";border-bottom-right-radius:", ";"], size, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-top-right-radius: " + responsiveSize + ";\n          border-bottom-right-radius: " + responsiveSize + ";\n        "));
      }
    } else if (data.corner) {
      styles.push((0,styled_components_browser_esm.css)(["border-", "-radius:", ";"], data.corner, size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-" + data.corner + "-radius: " + responsiveSize + ";\n        "));
      }
    } else {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:", ";"], size));

      if (responsiveSize) {
        styles.push(breakpointStyle(breakpoint, "\n          border-radius: " + responsiveSize + ";\n        "));
      }
    }
  } else {
    var _size2 = data === true ? 'medium' : data;

    styles.push((0,styled_components_browser_esm.css)(["border-radius:", ";"], ROUND_MAP[_size2] || theme.global.edgeSize[_size2] || _size2));

    var _responsiveSize = breakpoint && breakpoint.edgeSize[_size2];

    if (_responsiveSize) {
      styles.push(breakpointStyle(breakpoint, "\n        border-radius: " + _responsiveSize + ";\n      "));
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
var textAlignStyle = (0,styled_components_browser_esm.css)(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});
var ALIGN_ITEMS_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var alignStyle = (0,styled_components_browser_esm.css)(["align-items:", ";"], function (props) {
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
var alignContentStyle = (0,styled_components_browser_esm.css)(["align-content:", ";"], function (props) {
  var _ALIGN_CONTENT_MAP$pr;

  return (_ALIGN_CONTENT_MAP$pr = ALIGN_CONTENT_MAP[props.alignContent]) != null ? _ALIGN_CONTENT_MAP$pr : props.alignContent;
});

var getSize = function getSize(theme, size) {
  return theme.global.size[size] || size;
};

var widthObjectStyle = function widthObjectStyle(width, theme) {
  var result = [];
  if (width.max) result.push((0,styled_components_browser_esm.css)(["max-width:", ";"], getSize(theme, width.max)));
  if (width.min) result.push((0,styled_components_browser_esm.css)(["min-width:", ";"], getSize(theme, width.min)));
  if (width.width) result.push((0,styled_components_browser_esm.css)(["width:", ";"], getSize(theme, width.width)));
  return result;
};

var widthStringStyle = function widthStringStyle(width, theme) {
  return (0,styled_components_browser_esm.css)(["width:", ";"], getSize(theme, width));
};

var widthStyle = function widthStyle(width, theme) {
  return typeof width === 'object' ? widthObjectStyle(width, theme) : widthStringStyle(width, theme);
};

var heightObjectStyle = function heightObjectStyle(height, theme) {
  var result = [];
  if (height.max) result.push((0,styled_components_browser_esm.css)(["max-height:", ";"], getSize(theme, height.max)));
  if (height.min) result.push((0,styled_components_browser_esm.css)(["min-height:", ";"], getSize(theme, height.min)));
  if (height.width) result.push((0,styled_components_browser_esm.css)(["height:", ";"], getSize(theme, height.height)));
  return result;
};

var heightStringStyle = function heightStringStyle(height, theme) {
  return (0,styled_components_browser_esm.css)(["height:", ";"], getSize(theme, height));
};

var heightStyle = function heightStyle(height, theme) {
  return typeof height === 'object' ? heightObjectStyle(height, theme) : heightStringStyle(height, theme);
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/border.js



var responsiveBorderStyle = function responsiveBorderStyle(data, theme) {
  var color = normalizeColor(data.color || 'border', theme);
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
var borderStyle = function borderStyle(data, responsive, theme) {
  var styles = [];
  var color = normalizeColor(data.color || 'border', theme);
  var borderSize = data.size || 'xsmall';
  var style = data.style || 'solid';
  var side = typeof data === 'string' ? data : data.side || 'all';
  var value = style + " " + (theme.global.borderSize[borderSize] || borderSize) + " " + color;
  var responsiveStyle = responsive && responsiveBorderStyle(data, theme);
  var breakpoint = responsiveStyle && theme.box.responsiveBreakpoint && theme.global.breakpoints[theme.box.responsiveBreakpoint];

  if (side === 'top' || side === 'bottom' || side === 'left' || side === 'right') {
    styles.push("border-" + side + ": " + value + ";");

    if (responsiveStyle) {
      styles.push(breakpointStyle(breakpoint, responsiveStyle));
    }
  } else if (side === 'end' || side === 'start') {
    styles.push((0,styled_components_browser_esm.css)(["border-inline-", ":", ";"], side, value));

    if (responsiveStyle) {
      styles.push(breakpointStyle(breakpoint, responsiveStyle));
    }
  } else if (side === 'vertical') {
    styles.push((0,styled_components_browser_esm.css)(["border-left:", ";border-right:", ";"], value, value));

    if (responsiveStyle) {
      styles.push(breakpointStyle(breakpoint, responsiveStyle));
    }
  } else if (side === 'horizontal') {
    styles.push((0,styled_components_browser_esm.css)(["border-top:", ";border-bottom:", ";"], value, value));

    if (responsiveStyle) {
      styles.push(breakpointStyle(breakpoint, responsiveStyle));
    }
  } else if (side === 'between') {// no-op
  } else {
    styles.push((0,styled_components_browser_esm.css)(["border:", ";"], value));

    if (responsiveStyle) {
      styles.push(breakpointStyle(breakpoint, responsiveStyle));
    }
  }

  return styles;
};
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

function StyledBox_extends() {
  StyledBox_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return StyledBox_extends.apply(this, arguments);
}






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
    var breakpoint = getBreakpointStyle(theme, theme.box.responsiveBreakpoint);

    if (breakpoint) {
      styles.push(breakpointStyle(breakpoint, "\n        flex-direction: column;\n        flex-basis: auto;\n        justify-content: flex-start;\n        align-items: stretch;\n      "));
    }
  }

  return styles;
};

var elevationStyle = (0,styled_components_browser_esm.css)(["box-shadow:", ";"], function (props) {
  return props.theme.global.elevation[props.theme.dark ? 'dark' : 'light'][props.elevationProp];
});
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
var interactiveStyle = (0,styled_components_browser_esm.css)(["cursor:pointer;&:hover{", "}"], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}); // NOTE: basis must be after flex! Otherwise, flex overrides basis

var StyledBox = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledBox",
  componentId: "sc-13pk1d4-0"
})(["display:flex;box-sizing:border-box;", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return !props.basis && 'max-width: 100%;';
}, genericStyles, function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.background && backgroundStyle(props.background, props.theme);
}, function (props) {
  return props.border && (Array.isArray(props.border) ? props.border.map(function (border) {
    return borderStyle(border, props.responsive, props.theme);
  }) : borderStyle(props.border, props.responsive, props.theme));
}, function (props) {
  return props.directionProp && directionStyle(props.directionProp, props.theme);
}, function (props) {
  return props.heightProp && heightStyle(props.heightProp, props.theme);
}, function (props) {
  return props.widthProp && widthStyle(props.widthProp, props.theme);
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return props.fillProp && fillStyle(props.fillProp);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.pad && edgeStyle('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.round && roundStyle(props.round, props.responsive, props.theme);
}, function (props) {
  return props.wrapProp && wrapStyle;
}, function (props) {
  return props.overflowProp && overflowStyle(props.overflowProp);
}, function (props) {
  return props.elevationProp && elevationStyle;
}, function (props) {
  return props.animation && animationStyle;
}, function (props) {
  return props.onClick && interactiveStyle;
}, function (props) {
  return props.onClick && props.focus && props.focusIndicator !== false && focusStyle();
}, function (props) {
  return props.theme.box && props.theme.box.extend;
});

var gapStyle = function gapStyle(directionProp, gap, responsive, border, theme) {
  var metric = theme.global.edgeSize[gap] || gap;
  var breakpoint = getBreakpointStyle(theme, theme.box.responsiveBreakpoint);
  var responsiveMetric = responsive && breakpoint && breakpoint.edgeSize[gap];
  var styles = [];

  if (directionProp === 'column' || directionProp === 'column-reverse') {
    styles.push("height: " + metric + ";");

    if (responsiveMetric) {
      styles.push(breakpointStyle(breakpoint, "height: " + responsiveMetric + ";"));
    }
  } else {
    styles.push("width: " + metric + ";");

    if (responsiveMetric) {
      if (directionProp === 'row' || directionProp === 'row-reverse') {
        styles.push(breakpointStyle(breakpoint, "width: " + responsiveMetric + ";"));
      } else if (directionProp === 'row-responsive') {
        styles.push(breakpointStyle(breakpoint, "\n          width: auto;\n          height: " + responsiveMetric + ";\n        "));
      }
    }
  }

  if (border === 'between' || border && border.side === 'between') {
    var borderSize = border.size || 'xsmall';
    var borderMetric = theme.global.borderSize[borderSize] || borderSize;
    var borderOffset = parseMetricToNum(metric) / 2 - parseMetricToNum(borderMetric) / 2 + "px";
    var responsiveBorderMetric = responsive && breakpoint && (breakpoint.borderSize[borderSize] || borderSize);
    var responsiveBorderOffset = responsiveBorderMetric && parseMetricToNum(responsiveMetric) / 2 - parseMetricToNum(responsiveBorderMetric) / 2 + "px";

    if (directionProp === 'column' || directionProp === 'column-reverse') {
      var adjustedBorder = typeof border === 'string' ? 'top' : StyledBox_extends({}, border, {
        side: 'top'
      });
      styles.push((0,styled_components_browser_esm.css)(["position:relative;&:after{content:'';position:absolute;width:100%;top:", ";", "}"], borderOffset, borderStyle(adjustedBorder, responsive, theme)));

      if (responsiveBorderOffset) {
        styles.push(breakpointStyle(breakpoint, "\n            &:after {\n              content: '';\n              top: " + responsiveBorderOffset + ";\n            }"));
      }
    } else {
      var _adjustedBorder = typeof border === 'string' ? 'left' : StyledBox_extends({}, border, {
        side: 'left'
      });

      styles.push((0,styled_components_browser_esm.css)(["position:relative;&:after{content:'';position:absolute;height:100%;left:", ";", "}"], borderOffset, borderStyle(_adjustedBorder, directionProp !== 'row-responsive' && responsive, theme)));

      if (responsiveBorderOffset) {
        if (directionProp === 'row' || directionProp === 'row-reverse') {
          styles.push(breakpointStyle(breakpoint, "\n              &:after {\n                content: '';\n                left: " + responsiveBorderOffset + ";\n              }"));
        } else if (directionProp === 'row-responsive') {
          var adjustedBorder2 = typeof border === 'string' ? 'top' : StyledBox_extends({}, border, {
            side: 'top'
          });
          styles.push(breakpointStyle(breakpoint, "\n              &:after {\n                content: '';\n                height: auto;\n                left: unset;\n                width: 100%;\n                top: " + responsiveBorderOffset + ";\n                border-left: none;\n                " + responsiveBorderStyle(adjustedBorder2, theme) + "\n              }"));
        }
      }
    }
  }

  return styles;
};

StyledBox.defaultProps = {};
Object.setPrototypeOf(StyledBox.defaultProps, default_props_defaultProps);
var StyledBoxGap = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledBox__StyledBoxGap",
  componentId: "sc-13pk1d4-1"
})(["flex:0 0 auto;align-self:stretch;", ";"], function (props) {
  return props.gap && gapStyle(props.directionProp, props.gap, props.responsive, props.border, props.theme);
});
StyledBoxGap.defaultProps = {};
Object.setPrototypeOf(StyledBoxGap.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Box/Box.js
var Box_excluded = ["a11yTitle", "background", "border", "children", "direction", "elevation", "fill", "gap", "onBlur", "onClick", "onFocus", "overflow", "responsive", "tag", "as", "wrap", "width", "height", "tabIndex"];

function Box_extends() {
  Box_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Box_extends.apply(this, arguments);
}

function Box_objectWithoutPropertiesLoose(source, excluded) {
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
      rest = Box_objectWithoutPropertiesLoose(_ref, Box_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
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
      var dark = backgroundIsDark(background, theme);
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
    content = /*#__PURE__*/react.createElement(KeyboardWrapper, {
      onEnter: onClick
    }, content);
  }

  return content;
});
Box.displayName = 'Box';
var BoxDoc;

if (false) {}

var BoxWrapper = BoxDoc || Box;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Accordion/AccordionContext.js

var AccordionContext = /*#__PURE__*/(0,react.createContext)({});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Accordion/Accordion.js
var Accordion_excluded = ["activeIndex", "animate", "children", "multiple", "onActive"];

function Accordion_extends() {
  Accordion_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Accordion_extends.apply(this, arguments);
}

function Accordion_objectWithoutPropertiesLoose(source, excluded) {
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





var activeAsArray = function activeAsArray(active) {
  return typeof active === 'number' ? [active] : active;
};

var Accordion = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var activeIndex = _ref.activeIndex,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? true : _ref$animate,
      children = _ref.children,
      multiple = _ref.multiple,
      onActive = _ref.onActive,
      rest = Accordion_objectWithoutPropertiesLoose(_ref, Accordion_excluded);

  var _useState = (0,react.useState)([]),
      activeIndexes = _useState[0],
      setActiveIndexes = _useState[1];

  var _useState2 = (0,react.useState)(),
      stateActiveIndex = _useState2[0],
      setStateActiveIndex = _useState2[1]; // Derived state from props
  // https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops


  var derivedActiveIndexes = activeAsArray(activeIndex) || [];

  if ((typeof activeIndex !== 'undefined' || activeIndex !== stateActiveIndex) && derivedActiveIndexes.join() !== activeIndexes.join()) {
    setActiveIndexes(derivedActiveIndexes);
    setStateActiveIndex(activeIndex);
  }

  var _onPanelChange = function onPanelChange(index) {
    var nextActiveIndexes = [].concat(activeIndexes || []);
    var nextActiveIndex = nextActiveIndexes.indexOf(index);

    if (nextActiveIndex > -1) {
      nextActiveIndexes.splice(nextActiveIndex, 1);
    } else if (multiple) {
      nextActiveIndexes.push(index);
    } else {
      nextActiveIndexes = [index];
    }

    setActiveIndexes(nextActiveIndexes);

    if (onActive) {
      onActive(nextActiveIndexes);
    }
  };

  return /*#__PURE__*/react.createElement(BoxWrapper, Accordion_extends({
    ref: ref,
    role: "tablist"
  }, rest), react.Children.toArray(children).filter(function (child) {
    return child;
  }).map(function (child, index) {
    return /*#__PURE__*/react.createElement(AccordionContext.Provider, {
      // eslint-disable-next-line react/no-array-index-key
      key: index,
      value: {
        active: activeIndexes.indexOf(index) > -1,
        animate: animate,
        onPanelChange: function onPanelChange() {
          return _onPanelChange(index);
        }
      }
    }, child);
  }));
});
Accordion.displayName = 'Accordion';
var AccordionDoc;

if (false) {}

var AccordionWrapper = AccordionDoc || Accordion;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Accordion/index.js

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(9227);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/DOM.js
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
};
var getFirstFocusableDescendant = function getFirstFocusableDescendant(element) {
  var children = element.getElementsByTagName('*');

  for (var i = 0; i < children.length; i += 1) {
    var child = children[i];
    var tagName = child.tagName.toLowerCase();

    if (tagName === 'input' || tagName === 'select') {
      return child;
    }
  }

  return undefined;
};
var getNewContainer = function getNewContainer(target, targetChildPosition) {
  if (target === void 0) {
    target = document.body;
  } // setup DOM


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
;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/RootsContext.js
 // When toggling aria-hidden values, we only want to affect elements
// in the DOM that come from Grommet, so we track those elements in this
// context value. See FocusedContainer.js

var RootsContext = /*#__PURE__*/react.createContext(undefined);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/FocusedContainer.js
var FocusedContainer_excluded = ["hidden", "restrictScroll", "children", "trapFocus"];

function FocusedContainer_extends() {
  FocusedContainer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FocusedContainer_extends.apply(this, arguments);
}

function FocusedContainer_objectWithoutPropertiesLoose(source, excluded) {
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




var FocusedContainer = function FocusedContainer(_ref) {
  var _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      _ref$restrictScroll = _ref.restrictScroll,
      restrictScroll = _ref$restrictScroll === void 0 ? false : _ref$restrictScroll,
      children = _ref.children,
      trapFocus = _ref.trapFocus,
      rest = FocusedContainer_objectWithoutPropertiesLoose(_ref, FocusedContainer_excluded);

  var _useState = (0,react.useState)(''),
      bodyOverflowStyle = _useState[0],
      setBodyOverflowStyle = _useState[1];

  var ref = (0,react.useRef)(null);
  var roots = (0,react.useContext)(RootsContext);

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
      if (!hidden && trapFocus && roots && roots[0] !== null) {
        roots.forEach(makeNodeUnfocusable);
      }
    }, 0);
    return function () {
      // remove trap and restore ability to focus on the last root only
      if (roots && roots[0] !== null) makeNodeFocusable(roots[roots.length - 1]);
      clearTimeout(timer);
    };
  }, [hidden, roots, trapFocus]);
  return /*#__PURE__*/react.createElement(RootsContext.Provider, {
    value: nextRoots
  }, /*#__PURE__*/react.createElement("div", FocusedContainer_extends({
    ref: ref,
    "aria-hidden": hidden
  }, rest), children));
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/PortalContext.js

var PortalContext = /*#__PURE__*/react.createContext(undefined);
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
    return edgeStyle('margin', marginProp || theme.global.drop.margin, responsive, theme.global.edgeSize.responsiveBreakpoint, theme);
  }

  return edgeStyle('margin', adjustedMargin, responsive, theme.global.edgeSize.responsiveBreakpoint, theme);
};

var StyledDrop = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledDrop",
  componentId: "sc-16s5rx8-0"
})(["", " ", " position:fixed;z-index:", ";outline:none;", " ", " opacity:0;transform-origin:", ";animation:", " 0.1s forwards;animation-delay:0.01s;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){display:flex;align-items:stretch;}", ""], baseStyle, function (props) {
  return !props.plain && (props.round && roundStyle(props.round, true, props.theme) || "border-radius: " + props.theme.global.drop.border.radius + ";");
}, function (props) {
  return props.theme.global.drop.zIndex;
}, function (props) {
  return !props.plain && backgroundStyle(props.background || props.theme.global.drop.background, props.theme);
}, function (props) {
  return !props.plain && (props.margin || props.theme.global.drop.margin) && props.theme.global && marginStyle(props.theme, props.alignProp, props.theme.global.drop.margin, props.responsive, props.margin);
}, function (props) {
  return getTransformOriginStyle(props.alignProp);
}, dropKeyFrames, function (props) {
  return props.theme.global.drop && props.theme.global.drop.extend;
});
StyledDrop.defaultProps = {};
Object.setPrototypeOf(StyledDrop.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Drop/DropContainer.js
var DropContainer_excluded = ["align", "background", "onAlign", "children", "dropTarget", "elevation", "onClickOutside", "onEsc", "onKeyDown", "overflow", "plain", "responsive", "restrictFocus", "stretch", "trapFocus"];

function DropContainer_extends() {
  DropContainer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DropContainer_extends.apply(this, arguments);
}

function DropContainer_objectWithoutPropertiesLoose(source, excluded) {
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
  var _ref$align = _ref.align,
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

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
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
            maxHeight = Math.min(maxHeight, parseMetricToNum(theme.drop.maxHeight));
          }

          container.style.maxHeight = maxHeight + "px";
        }
      }

      if (onAlign) notifyAlign();
    };

    var scrollParents;

    var addScrollListeners = function addScrollListeners() {
      scrollParents = findScrollParents(dropTarget);
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
    ref: ref || dropRef,
    as: BoxWrapper,
    background: background,
    plain: plain,
    elevation: !plain ? elevation || theme.global.drop.elevation || theme.global.drop.shadowSize || // backward compatibility
    'small' : undefined,
    tabIndex: "-1",
    alignProp: align,
    overflow: overflow,
    "data-g-portal-id": portalId
  }, rest), children);

  if (background || theme.global.drop.background) {
    var dark = backgroundIsDark(background || theme.global.drop.background, theme);

    if (dark !== undefined && dark !== theme.dark) {
      content = /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
        value: DropContainer_extends({}, theme, {
          dark: dark
        })
      }, content);
    }
  }

  return /*#__PURE__*/react.createElement(PortalContext.Provider, {
    value: nextPortalContext
  }, /*#__PURE__*/react.createElement(FocusedContainer, {
    onKeyDown: onEsc && preventLayerClose,
    trapFocus: trapFocus
  }, /*#__PURE__*/react.createElement(KeyboardWrapper // should capture keyboard event before other elements,
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

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ContainerTargetContext/ContainerTargetContext.js

var ContainerTargetContext = /*#__PURE__*/react.createContext(typeof document === 'object' ? document.body : undefined);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Drop/Drop.js
var Drop_excluded = ["restrictFocus", "target", "trapFocus"];

function Drop_extends() {
  Drop_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Drop_extends.apply(this, arguments);
}

function Drop_objectWithoutPropertiesLoose(source, excluded) {
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








var Drop = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var restrictFocus = _ref.restrictFocus,
      dropTarget = _ref.target,
      _ref$trapFocus = _ref.trapFocus,
      trapFocus = _ref$trapFocus === void 0 ? true : _ref$trapFocus,
      rest = Drop_objectWithoutPropertiesLoose(_ref, Drop_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)(),
      originalFocusedElement = _useState[0],
      setOriginalFocusedElement = _useState[1];

  (0,react.useEffect)(function () {
    return setOriginalFocusedElement(document.activeElement);
  }, []);

  var _useState2 = (0,react.useState)(),
      dropContainer = _useState2[0],
      setDropContainer = _useState2[1];

  var containerTarget = (0,react.useContext)(ContainerTargetContext);
  (0,react.useEffect)(function () {
    return setDropContainer(getNewContainer(containerTarget));
  }, [containerTarget]); // just a few things to clean up when the Drop is unmounted

  (0,react.useEffect)(function () {
    return function () {
      if (restrictFocus && originalFocusedElement) {
        if (originalFocusedElement.focus) {
          setFocusWithoutScroll(originalFocusedElement);
        } else if (originalFocusedElement.parentNode && originalFocusedElement.parentNode.focus) {
          // required for IE11 and Edge
          setFocusWithoutScroll(originalFocusedElement.parentNode);
        }
      }

      if (dropContainer) {
        containerTarget.removeChild(dropContainer);
      }
    };
  }, [containerTarget, dropContainer, originalFocusedElement, restrictFocus]);
  return dropContainer ? /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(DropContainer, Drop_extends({
    ref: ref,
    dir: theme && theme.dir,
    dropTarget: dropTarget,
    restrictFocus: restrictFocus,
    trapFocus: trapFocus
  }, rest)), dropContainer) : null;
});
Drop.displayName = 'Drop';
var DropDoc;

if (false) {}

var DropWrapper = DropDoc || Drop;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/use-isomorphic-layout-effect.js
/* eslint-disable no-restricted-imports */

/**
 * A substitute for React's useLayoutEffect, which does not generate warnings on
 * SSR. It is named useLayoutEffect so that all eslint rules applying to the
 * original useLayoutEffect would also apply to it.
 * This solution was suggested by Alex Reardon.
 * @see https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 * @see https://github.com/grommet/grommet/issues/4765
 */

var useLayoutEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ const use_isomorphic_layout_effect = ((/* unused pure expression or super */ null && (useLayoutEffect)));
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/refs.js



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
  var innerRef = (0,react.useRef)(null);
  updateRef(ref, innerRef);
  useLayoutEffect(function () {
    return updateRef(ref, innerRef);
  });
  (0,react.useEffect)(function () {
    return updateRef(ref, innerRef);
  });
  return innerRef;
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tip/Tip.js
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






var Tip = /*#__PURE__*/(0,react.forwardRef)(function (_ref, tipRef) {
  var children = _ref.children,
      content = _ref.content,
      dropProps = _ref.dropProps,
      plain = _ref.plain;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);

  var _useState = (0,react.useState)(false),
      over = _useState[0],
      setOver = _useState[1];

  var componentRef = useForwardedRef(tipRef); // In cases the child is a primitive

  var wrapInvalidElement = function wrapInvalidElement() {
    return (// Handle the use case of a primitive string child
      // so we'll be able to assign ref and events on the child.
      ! /*#__PURE__*/react.isValidElement(children) ? /*#__PURE__*/react.createElement("span", null, children) : children
    );
  };
  /* Three use case for children
    1. Tip has a single child + it is a React Element => Great!
    2. Tip has a single child +  not React Element => span will wrap the child.
    3. Tip has more than one child => Abort, display Children.only error 
  */


  var child = react.Children.count(children) === 1 ? wrapInvalidElement() : react.Children.only(children);
  var clonedChild = /*#__PURE__*/(0,react.cloneElement)(child, {
    onMouseEnter: function onMouseEnter() {
      return setOver(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setOver(false);
    },
    onFocus: function onFocus() {
      return setOver(true);
    },
    onBlur: function onBlur() {
      return setOver(false);
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
  return [clonedChild, over && /*#__PURE__*/react.createElement(DropWrapper, Tip_extends({
    target: componentRef.current,
    trapFocus: false,
    key: "tip-drop"
  }, theme.tip.drop, dropProps), plain ? content : /*#__PURE__*/react.createElement(BoxWrapper, theme.tip.content, content))];
});
Tip.displayName = 'Tip';
var TipDoc;

if (false) {}

var TipWrapper = TipDoc || Tip;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Stack/StyledStack.js



var StyledStack_fillStyle = (0,styled_components_browser_esm.css)(["", " ", " flex-grow:1;display:flex;"], function (props) {
  return props.fillContainer === true || props.fillContainer === 'horizontal' ? "\n        width: 100%;\n        max-width: none;\n      " : '';
}, function (props) {
  return props.fillContainer === true || props.fillContainer === 'vertical' ? 'height: 100%;' : '';
});
var StyledStack = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledStack",
  componentId: "ajspsk-0"
})(["position:relative;", " ", " ", ""], genericStyles, function (props) {
  return props.fillContainer && StyledStack_fillStyle;
}, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});
StyledStack.defaultProps = {};
Object.setPrototypeOf(StyledStack.defaultProps, default_props_defaultProps);
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
var StyledStackLayer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledStack__StyledStackLayer",
  componentId: "ajspsk-1"
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
Object.setPrototypeOf(StyledStackLayer.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Stack/Stack.js
var Stack_excluded = ["anchor", "children", "fill", "guidingChild", "interactiveChild"];

function Stack_objectWithoutPropertiesLoose(source, excluded) {
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

function Stack_extends() {
  Stack_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Stack_extends.apply(this, arguments);
}




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
      rest = Stack_objectWithoutPropertiesLoose(_ref2, Stack_excluded);

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
var StackDoc;

if (false) {}

var StackWrapper = StackDoc || Stack;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Text/StyledText.js




var StyledText_sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.text[size];

  if (data) {
    return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
  }

  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:normal;"], size);
};

var truncateStyle = "\n  white-space: nowrap;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = (0,styled_components_browser_esm.css)(["color:", ";"], function (props) {
  return normalizeColor(props.colorProp, props.theme);
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
var StyledText = (0,styled_components_browser_esm.default)('span').withConfig({
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return defaultValidatorFn(prop) && prop !== 'size';
  }
}).withConfig({
  displayName: "StyledText",
  componentId: "sc-1sadyjn-0"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return StyledText_sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
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
Object.setPrototypeOf(StyledText.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Text/Text.js
var Text_excluded = ["children", "color", "tag", "as", "tip", "a11yTitle", "truncate"];

function Text_extends() {
  Text_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Text_extends.apply(this, arguments);
}

function Text_objectWithoutPropertiesLoose(source, excluded) {
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





var Text = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      color = _ref.color,
      tag = _ref.tag,
      as = _ref.as,
      tipProp = _ref.tip,
      _ref$a11yTitle = _ref.a11yTitle,
      a11yTitle = _ref$a11yTitle === void 0 ? typeof tipProp === 'string' ? tipProp : undefined : _ref$a11yTitle,
      truncate = _ref.truncate,
      rest = Text_objectWithoutPropertiesLoose(_ref, Text_excluded);

  var textRef = useForwardedRef(ref);

  var _useState = (0,react.useState)(tipProp),
      tip = _useState[0],
      setTip = _useState[1]; // place the text content in a tip if truncate === 'tip'
  // and the text has been truncated


  (0,react.useEffect)(function () {
    if (truncate === 'tip') {
      if (textRef.current && textRef.current.scrollWidth > textRef.current.offsetWidth) {
        setTip(children);
      } else setTip(undefined);
    }
  }, [children, textRef, truncate]);
  var styledTextResult = /*#__PURE__*/react.createElement(StyledText, Text_extends({
    as: !as && tag ? tag : as,
    colorProp: color,
    "aria-label": a11yTitle,
    truncate: truncate
  }, rest, {
    ref: textRef
  }), children);

  if (tip) {
    if (typeof tip === 'string') {
      return /*#__PURE__*/react.createElement(TipWrapper, {
        content: tip
      }, styledTextResult);
    }

    return /*#__PURE__*/react.createElement(TipWrapper, tip, styledTextResult);
  }

  return styledTextResult;
});
Text.displayName = 'Text';
Text.defaultProps = {
  level: 1
};
var TextDoc;

if (false) {}

var TextWrapper = TextDoc || Text;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Button/Badge.js







var StyledBadgeContainer = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
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
  parseMetricToNum(theme.button.badge.size.medium) / 2 + "px" : theme.button.badge.size.medium; // size should drive height, match width to height by default
  // allow width to grow when content is wide

  var _useState = (0,react.useState)(defaultBadgeDimension),
      height = _useState[0],
      setHeight = _useState[1];

  var _useState2 = (0,react.useState)(height),
      width = _useState2[0],
      setWidth = _useState2[1]; // scale badge to fit its contents, leaving space horizontally
  // that is proportional to vertical space


  useLayoutEffect(function () {
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
            var verticalSpace = (parseMetricToNum(height) - contentHeight) * 2.5;
            setWidth(Math.max(parseMetricToNum(width), Math.ceil(contentWidth + verticalSpace)) + "px");
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

  useLayoutEffect(function () {
    if (stackRef && stackRef.current) {
      // when badge has content, offset should be 50%.
      // when badge is empty, offset by a smaller amount to keep the badge
      // closer to the content. this value was chosen as a reasonable default
      // after testing with various grommet icons.
      var divisor = typeof content === 'boolean' || content && content.value === true ? 3.5 : 2;
      var offset = {
        right: "-" + Math.round(parseMetricToNum(width) / divisor) + "px",
        top: "-" + Math.round(parseMetricToNum(height) / divisor) + "px"
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
      badge = /*#__PURE__*/react.createElement(TextWrapper, {
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
  } else badge = /*#__PURE__*/react.createElement(BoxWrapper, {
    ref: contentRef
  }, content);

  return /*#__PURE__*/react.createElement(StackWrapper, {
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
  return (0,styled_components_browser_esm.css)(["border:", " solid ", ";border-radius:", ";color:", ";padding:", ";", ""], props.theme.button.border.width, normalizeColor(props.colorValue || props.theme.button.border.color || 'control', props.theme), radiusStyle(props), normalizeColor(props.theme.button.color || 'text', props.theme), padStyle(props), fontStyle(props));
};

var primaryStyle = function primaryStyle(props) {
  return (0,styled_components_browser_esm.css)(["", " border-radius:", ";", ""], backgroundStyle(normalizeColor(props.colorValue || props.theme.button.primary && props.theme.button.primary.color || 'control', props.theme), props.theme, props.theme.button.color), radiusStyle(props), props.theme.button.primary && props.theme.button.primary.extend);
};

function getHoverColor(props) {
  if (props.colorValue) {
    return normalizeColor(props.colorValue, props.theme);
  }

  if (props.active && props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.border && props.theme.button.primary.active.border.color) {
    return normalizeColor(props.theme.button.primary.active.border.color, props.theme);
  }

  return normalizeColor(props.theme.button.border.color || 'control', props.theme);
}

var hoverStyle = (0,styled_components_browser_esm.css)(["&:hover{", " ", ";}"], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
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
  return (0,styled_components_browser_esm.css)(["color:", ";outline:none;border:none;padding:0;text-align:inherit;"], normalizeColor(props.colorValue || 'inherit', props.theme));
};

var activeButtonStyle = function activeButtonStyle(props) {
  return (0,styled_components_browser_esm.css)(["", " ", " ", ""], activeStyle, props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.border && props.theme.button.primary.active.border.color && "border: " + props.theme.button.border.width + " solid\n    " + normalizeColor(props.theme.button.primary.active.border.color, props.theme) + ";\n    ", props.primary && props.theme.button.primary && props.theme.button.primary.active && props.theme.button.primary.active.extend);
};

var disabledButtonStyle = function disabledButtonStyle(props) {
  return (0,styled_components_browser_esm.css)(["", " ", " ", " ", ""], disabledStyle(props.theme.button.disabled.opacity), !props.plain && props.theme.button.disabled.border && props.theme.button.disabled.border.color && "border: " + props.theme.button.border.width + " solid\n    " + normalizeColor(props.theme.button.disabled.border.color, props.theme) + ";", props.theme.button.disabled.color && ( // if primary button, apply disabled color to background. otherwise,
  // apply disabled color to the label
  props.primary ? backgroundStyle(normalizeColor(props.theme.button.disabled.color, props.theme), props.theme, props.theme.button.color) : "color: " + normalizeColor(props.theme.button.disabled.color, props.theme) + ";"), props.theme.button.disabled && props.theme.button.disabled.extend);
}; // Deprecate props.theme.button.disabled.opacity in V3


var StyledButton = styled_components_browser_esm.default.button.withConfig({
  displayName: "StyledButton",
  componentId: "sc-323bzc-0"
})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;", " ", " ", " ", " ", " ", " ", " &:focus{", "}&:focus:not(:focus-visible){", "}", " ", " ", " ", " ", ""], genericStyles, function (props) {
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
  return (!props.plain || props.focusIndicator) && focusStyle();
}, unfocusStyle(), function (props) {
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
Object.setPrototypeOf(StyledButton.defaultProps, default_props_defaultProps);

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
      kind = _ref.kind; // caller has specified a themeObj to use for styling
  // relevant for cases like pagination which looks to theme.pagination.button

  var themeObj = typeof kind === 'object' ? kind : theme.button;
  var pad = padFromTheme(size, theme, themeObj);
  return pad ? (0,styled_components_browser_esm.css)(["padding:", " ", ";"], pad.vertical, pad.horizontal) : '';
}; // The > svg rule is to ensure Buttons with just an icon don't add additional
// vertical height internally.


var StyledButtonKind_basicStyle = function basicStyle(props) {
  return (0,styled_components_browser_esm.css)(["border:none;", ";", " ", " ", ""], StyledButtonKind_radiusStyle(props), StyledButtonKind_padStyle(props), StyledButtonKind_fontStyle(props), props.badge ? "\n  svg {\n    vertical-align: bottom;\n  }" : "> svg {\n    vertical-align: bottom;\n  }");
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
  var offset = parseMetricToNum(width);
  return (0,styled_components_browser_esm.css)(["padding:", "px ", "px;"], Math.max(parseMetricToNum(pad.vertical) - offset, 0), Math.max(parseMetricToNum(pad.horizontal) - offset, 0));
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
      styles.push(kindPartStyles(obj, theme, colorValue));

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
      styles.push(kindPartStyles(obj, theme, colorValue));

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
      var partStyles = kindPartStyles(obj, theme);
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
  var styles = kindPartStyles(themishObj, theme);
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
}; // The > svg rule is to ensure Buttons with just an icon don't add additional
// vertical height internally.


var StyledButtonKind_plainStyle = function plainStyle() {
  return (0,styled_components_browser_esm.css)(["outline:none;border:none;padding:0;text-align:inherit;color:inherit;> svg{vertical-align:bottom;}"]);
};

var StyledButtonKind = styled_components_browser_esm.default.button.withConfig({
  // don't let kind attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['kind'].includes(prop) && defaultValidatorFn(prop);
  }
}).withConfig({
  displayName: "StyledButtonKind",
  componentId: "sc-1vhfpnt-0"
})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;", " ", " ", " ", " ", " ", " ", " ", " &:focus{", "}&:focus:not(:focus-visible){", "}", " ", " ", ""], genericStyles, function (props) {
  return props.plain && StyledButtonKind_plainStyle(props);
}, function (props) {
  return !props.disabled && props.active && activeStyle;
}, function (props) {
  return !props.plain && StyledButtonKind_basicStyle(props);
}, function (props) {
  return !props.plain && kindStyle(props);
}, function (props) {
  return !props.plain && props.align && "\n    text-align: " + props.align + ";\n    ";
}, function (props) {
  return !props.disabled && props.hoverIndicator && hoverIndicatorStyle(props);
}, function (props) {
  return props.disabled && disabledStyle(props.theme.button.disabled.opacity);
}, function (props) {
  return (!props.plain || props.focusIndicator) && focusStyle();
}, unfocusStyle(), function (props) {
  return !props.plain && props.theme.button.transition && "\n    transition-property: " + props.theme.button.transition.properties.join(',') + ";\n    transition-duration: " + props.theme.button.transition.duration + "s;\n    transition-timing-function: " + props.theme.button.transition.timing + ";\n  ";
}, function (props) {
  return props.fillContainer && StyledButtonKind_fillStyle(props.fillContainer);
}, function (props) {
  return props.theme.button && props.theme.button.extend;
});
StyledButtonKind.defaultProps = {};
Object.setPrototypeOf(StyledButtonKind.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Button/Button.js
var Button_excluded = ["active", "align", "aria-label", "badge", "color", "children", "disabled", "icon", "focusIndicator", "gap", "fill", "href", "kind", "label", "onBlur", "onClick", "onFocus", "onMouseOut", "onMouseOver", "plain", "primary", "reverse", "secondary", "selected", "size", "tip", "type", "a11yTitle", "as"];

function Button_extends() {
  Button_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Button_extends.apply(this, arguments);
}

function Button_objectWithoutPropertiesLoose(source, excluded) {
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
      result = backgroundAndTextColors(background, color, theme);
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
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 'small' : _ref$gap,
      fill = _ref.fill,
      href = _ref.href,
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

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

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
    var backgroundColor = normalizeBackground(normalizeColor(color || theme.button.primary && theme.button.primary.color || theme.global.colors.control || 'brand', theme), theme);
    return colorIsDark(backgroundColor, theme);
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
    contents = /*#__PURE__*/react.createElement(BoxWrapper, {
      direction: "row",
      align: "center",
      justify: align === 'center' ? 'center' : 'between',
      gap: gap,
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
      gap: gap,
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
      styledButtonResult = /*#__PURE__*/react.createElement(TipWrapper, {
        content: tip
      }, styledButtonResult);
    } else {
      styledButtonResult = /*#__PURE__*/react.createElement(TipWrapper, tip, styledButtonResult);
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
var ButtonDoc;

if (false) {}

var ButtonWrapper = ButtonDoc || Button;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Collapsible/Collapsible.js






var AnimatedBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "Collapsible__AnimatedBox",
  componentId: "sc-15kniua-0"
})(["", ""], function (props) {
  return props.shouldOpen ? "visibility: hidden;\n      position: absolute;\n      pointer-events: none;" : // eslint-disable-next-line max-len
  "transition: " + ("max-" + props.dimension + " " + props.speedProp + "ms, opacity " + props.speedProp + "ms") + ";\n      opacity: " + (props.open ? 1 : 0) + ";\n      overflow: " + (props.animate || !props.open ? 'hidden' : 'visible') + ";";
});
var Collapsible = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      direction = _ref.direction,
      openArg = _ref.open;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)(openArg),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react.useState)(false),
      animate = _useState2[0],
      setAnimate = _useState2[1];

  var _useState3 = (0,react.useState)(theme.collapsible.minSpeed),
      speed = _useState3[0],
      setSpeed = _useState3[1];

  var dimension = (0,react.useMemo)(function () {
    return direction === 'horizontal' ? 'width' : 'height';
  }, [direction]);
  var containerRef = useForwardedRef(ref);
  var sizeRef = (0,react.useRef)();
  var shouldOpen = !open && openArg;
  var shouldClose = open && !openArg; // when the caller changes openArg, trigger animation

  (0,react.useEffect)(function () {
    if (openArg !== open) {
      setAnimate(true);
      setOpen(openArg);
    }
  }, [open, openArg]); // prepare to open or close

  useLayoutEffect(function () {
    var container = containerRef.current; // skip this if animation is in progress

    if (!animate && shouldOpen) {
      var parentPrevPosition = container.parentNode.style.position;
      container.parentNode.style.position = 'relative';

      var _container$getBoundin = container.getBoundingClientRect(),
          size = _container$getBoundin[dimension];

      container.parentNode.style.position = parentPrevPosition;
      sizeRef.current = size;
    }

    if (shouldOpen) {
      container.style["max-" + dimension] = 0;
    } else if (shouldClose) {
      var _container$getBoundin2 = container.getBoundingClientRect(),
          _size = _container$getBoundin2[dimension];

      container.style["max-" + dimension] = _size + "px";
    }
  }, [shouldOpen, shouldClose, containerRef, dimension, animate]);
  (0,react.useEffect)(function () {
    if (shouldOpen || shouldClose) {
      var container = containerRef.current;
      var _theme$collapsible = theme.collapsible,
          minSpeed = _theme$collapsible.minSpeed,
          baseline = _theme$collapsible.baseline;
      var nextSpeed = Math.max(sizeRef.current / baseline * minSpeed, minSpeed);
      setSpeed(nextSpeed);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          // Change the max to where we want to end up, the transition will
          // animate to get there. We do this in an animation frame to
          // give our starter setting a chance to fully render.
          container.style["max-" + dimension] = shouldOpen ? sizeRef.current + "px" : 0;
        });
      });
    }
  }, [shouldOpen, shouldClose, containerRef, dimension, theme]);
  (0,react.useEffect)(function () {
    if (animate) {
      var container = containerRef.current;
      var timer = setTimeout(function () {
        setAnimate(false);
        container.removeAttribute('style');
      }, speed);
      return function () {
        return clearTimeout(timer);
      };
    }

    return undefined; // we need open here to cancel the timer and restart it
  }, [animate, containerRef, speed, open]);
  return /*#__PURE__*/react.createElement(AnimatedBox, {
    "aria-hidden": !open,
    ref: containerRef,
    open: open,
    animate: animate,
    dimension: dimension,
    speedProp: speed // an intermediate state that will render invisible element
    // we need to do this because we can't use scrollHeight/scrollWidth
    // to get size while overflow is hidden.
    // skipped if animation is in progress
    ,
    shouldOpen: !animate && shouldOpen
  }, shouldOpen || open || animate ? children : null);
});
Collapsible.displayName = 'Collapsible';
var CollapsibleDoc;

if (false) {}

var CollapsibleWrapper = CollapsibleDoc || Collapsible;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Heading/StyledHeading.js




var StyledHeading_sizeStyle = function sizeStyle(props) {
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
          styles.push(breakpointStyle(breakpoint, "\n            font-size: " + responsiveData.size + ";\n            line-height: " + responsiveData.height + ";\n            max-width: " + (props.fillProp && 'none' || responsiveData.maxWidth) + ";\n          "));
        }
      }
    }

    return styles;
  }

  console.warn("Heading level " + props.level + " is not defined in your theme.");
  return '';
};

var StyledHeading_fontFamily = function fontFamily(props) {
  var _ref = props.theme.heading.level[props.level] || {},
      font = _ref.font;

  if (font && font.family) {
    return (0,styled_components_browser_esm.css)(["font-family:", ";"], font.family);
  }

  return props.theme.heading.font ? (0,styled_components_browser_esm.css)(["font-family:", ";"], props.theme.heading.font.family) : '';
};

var StyledHeading_truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var StyledHeading_colorStyle = (0,styled_components_browser_esm.css)(["color:", ";"], function (props) {
  return normalizeColor(props.colorProp || props.theme.heading.color, props.theme);
});
var StyledHeading = styled_components_browser_esm.default.h1.withConfig({
  displayName: "StyledHeading",
  componentId: "sc-1rdh4aw-0"
})(["", " ", " ", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return StyledHeading_fontFamily(props);
}, function (props) {
  return StyledHeading_sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && StyledHeading_truncateStyle;
}, function (props) {
  return (props.colorProp || props.theme.heading.color) && StyledHeading_colorStyle;
}, function (props) {
  return props.theme.heading && props.theme.heading.extend;
});
StyledHeading.defaultProps = {};
Object.setPrototypeOf(StyledHeading.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Heading/Heading.js
var Heading_excluded = ["color", "fill", "level"];

function Heading_extends() {
  Heading_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Heading_extends.apply(this, arguments);
}

function Heading_objectWithoutPropertiesLoose(source, excluded) {
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



var Heading = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var color = _ref.color,
      fill = _ref.fill,
      level = _ref.level,
      rest = Heading_objectWithoutPropertiesLoose(_ref, Heading_excluded);

  return (
    /*#__PURE__*/
    // munged to avoid styled-components putting it in the DOM
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
var HeadingDoc;

if (false) {}

var HeadingWrapper = HeadingDoc || Heading;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/AccordionPanel/AccordionPanel.js
var AccordionPanel_excluded = ["children", "header", "label", "onClick", "onMouseOut", "onMouseOver", "onFocus", "onBlur"];

function AccordionPanel_extends() {
  AccordionPanel_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return AccordionPanel_extends.apply(this, arguments);
}

function AccordionPanel_objectWithoutPropertiesLoose(source, excluded) {
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










var AccordionPanel = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      header = _ref.header,
      label = _ref.label,
      onClick = _ref.onClick,
      _onMouseOut = _ref.onMouseOut,
      _onMouseOver = _ref.onMouseOver,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      rest = AccordionPanel_objectWithoutPropertiesLoose(_ref, AccordionPanel_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useContext = (0,react.useContext)(AccordionContext),
      active = _useContext.active,
      animate = _useContext.animate,
      onPanelChange = _useContext.onPanelChange;

  var _useState = (0,react.useState)(undefined),
      hover = _useState[0],
      setHover = _useState[1];

  var _useState2 = (0,react.useState)(),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var iconColor = (0,react.useMemo)(function () {
    return normalizeColor(theme.accordion.icons.color || 'control', theme);
  }, [theme]);
  var AccordionIcon = (0,react.useMemo)(function () {
    return active ? theme.accordion.icons.collapse : theme.accordion.icons.expand;
  }, [active, theme.accordion.icons]);
  var defaultHoverColor = JSON.stringify({
    dark: 'light-4',
    light: 'dark-3'
  }); // accordion.hover.color will be deprecated in v3.

  if (JSON.stringify(theme.accordion.hover.color) !== defaultHoverColor) console.warn("The theme style for accordion.hover.color is deprecated, \n        use accordion.hover.heading.color instead."); // accordion.hover.heading.color will trump accordion.hover.color in case
  // the user sets its value to be any other value than the
  // default value (defaultHoverColor).
  // accordion.hover.color will be deprecated in v3.

  var headingColor = theme.accordion.hover && JSON.stringify(theme.accordion.hover.heading.color) !== defaultHoverColor ? theme.accordion.hover.heading.color : theme.accordion.hover.color;
  var contentBorder = theme.accordion.border;
  var panelBorder = theme.accordion.panel.border;
  var abutMargin;
  if (panelBorder) // abutMargin 'bottom' is set to overlap adjacent border panels
    abutMargin = {
      bottom: "-" + parseMetricToNum( // in case border.size defined as a t-shirt size
      // or in case border size is a custom size i.e. '5px'
      theme.global.borderSize[panelBorder.size] || panelBorder.size || theme.global.borderSize.xsmall // '-1px'
      ) + "px"
    };
  return /*#__PURE__*/react.createElement(BoxWrapper, {
    ref: ref,
    flex: false,
    onClick: onClick,
    border: panelBorder,
    margin: abutMargin
  }, /*#__PURE__*/react.createElement(ButtonWrapper, {
    role: "tab",
    "aria-selected": active,
    "aria-expanded": active,
    plain: theme.button["default"] ? true : undefined,
    onClick: onPanelChange,
    onMouseOver: function onMouseOver(event) {
      setHover(headingColor);
      if (_onMouseOver) _onMouseOver(event);
    },
    onMouseOut: function onMouseOut(event) {
      setHover(undefined);
      if (_onMouseOut) _onMouseOut(event);
    },
    onFocus: function onFocus(event) {
      setHover(headingColor);
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setHover(undefined);
      setFocus(false);
      if (_onBlur) _onBlur(event);
    },
    style: focus ? {
      zIndex: 1
    } : undefined
  }, header || /*#__PURE__*/react.createElement(BoxWrapper, AccordionPanel_extends({
    align: "center",
    direction: "row",
    justify: "between"
  }, rest), typeof label === 'string' ? /*#__PURE__*/react.createElement(BoxWrapper, {
    pad: {
      horizontal: 'xsmall'
    }
  }, /*#__PURE__*/react.createElement(HeadingWrapper, {
    level: theme.accordion.heading && theme.accordion.heading.level || 4,
    margin: theme.accordion.heading && theme.accordion.heading.margin || undefined,
    color: hover
  }, label)) : label, AccordionIcon && /*#__PURE__*/react.createElement(BoxWrapper, {
    pad: {
      horizontal: 'small'
    },
    width: {
      min: 'fit-content'
    }
  }, /*#__PURE__*/react.createElement(AccordionIcon, {
    color: iconColor
  })))), /*#__PURE__*/react.createElement(BoxWrapper, {
    border: contentBorder
  }, animate ? /*#__PURE__*/react.createElement(CollapsibleWrapper, {
    open: active
  }, children) : active && children));
});
AccordionPanel.displayName = 'AccordionPanel';
var AccordionPanelDoc;

if (false) {}

var AccordionPanelWrapper = AccordionPanelDoc || AccordionPanel;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/AccordionPanel/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Anchor/StyledAnchor.js



var StyledAnchor_disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";

var StyledAnchor_sizeStyle = function sizeStyle(props) {
  if (props.size) {
    var size = props.size || 'medium';
    var data = props.theme.text[size];
    return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";"], data ? data.size : size, data ? data.height : 'normal');
  }

  return (0,styled_components_browser_esm.css)(["font-size:inherit;line-height:inherit;"]);
};

var StyledAnchor = styled_components_browser_esm.default.a.withConfig({
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
  return normalizeColor(props.colorProp || props.theme.anchor.color, props.theme);
}, function (props) {
  return props.weight ? "font-weight: " + props.weight + ";" : props.theme.anchor.fontWeight && "font-weight: " + props.theme.anchor.fontWeight + ";";
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, genericStyles, function (props) {
  return !props.disabled && props.theme.anchor.hover && (0,styled_components_browser_esm.css)(["&:hover{", " ", " ", "}"], props.theme.anchor.hover.textDecoration && "text-decoration: " + props.theme.anchor.hover.textDecoration + ";", props.theme.anchor.hover.fontWeight && "font-weight: " + props.theme.anchor.hover.fontWeight + ";", props.theme.anchor.hover.extend);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && StyledAnchor_disabledStyle;
}, function (props) {
  return props.focus && focusStyle();
}, function (props) {
  return props.theme.anchor.extend;
});
StyledAnchor.defaultProps = {};
Object.setPrototypeOf(StyledAnchor.defaultProps, default_props_defaultProps);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2275);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/general-prop-types.js

var a11yTitlePropType = (prop_types_default()).string;
var getBorderPropType = function getBorderPropType(_ref) {
  var _ref$includeBetween = _ref.includeBetween,
      includeBetween = _ref$includeBetween === void 0 ? true : _ref$includeBetween;
  return PropTypes.shape({
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
      dark: PropTypes.string,
      light: PropTypes.string
    })]),
    side: PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'start', 'end', 'horizontal', 'vertical', 'all'].concat(includeBetween ? ['between'] : [])),
    size: PropTypes.oneOfType([PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.string]),
    style: PropTypes.oneOf(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'hidden'])
  });
};
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
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Anchor/propTypes.js
function propTypes_extends() {
  propTypes_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return propTypes_extends.apply(this, arguments);
}



var AnchorType = propTypes_extends({}, genericProps, {
  a11yTitle: (prop_types_default()).string,
  as: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]),
  color: colorPropType,
  disabled: (prop_types_default()).bool,
  href: (prop_types_default()).string,
  icon: (prop_types_default()).element,
  label: (prop_types_default()).node,
  onClick: (prop_types_default()).func,
  reverse: (prop_types_default()).bool,
  size: prop_types_default().oneOfType([prop_types_default().oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), (prop_types_default()).string]),
  weight: prop_types_default().oneOfType([prop_types_default().oneOf(['normal', 'bold']), (prop_types_default()).number])
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Anchor/Anchor.js
var Anchor_excluded = ["a11yTitle", "aria-label", "children", "color", "disabled", "href", "icon", "label", "onBlur", "onClick", "onFocus", "reverse"];

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

function Anchor_objectWithoutPropertiesLoose(source, excluded) {
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








var Anchor = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      ariaLabel = _ref['aria-label'],
      children = _ref.children,
      color = _ref.color,
      disabled = _ref.disabled,
      href = _ref.href,
      icon = _ref.icon,
      label = _ref.label,
      _onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      _onFocus = _ref.onFocus,
      reverse = _ref.reverse,
      rest = Anchor_objectWithoutPropertiesLoose(_ref, Anchor_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

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
      color: normalizeColor(color || theme.anchor.color, theme)
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
  }), first && second ? /*#__PURE__*/react.createElement(BoxWrapper, {
    as: "span",
    direction: "row",
    align: "center",
    gap: "small",
    responsive: false,
    style: {
      display: 'inline-flex'
    }
  }, first, second) : first || second || children);
});
Anchor.displayName = 'Anchor';
Anchor.propTypes = AnchorType;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Anchor/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Avatar/StyledAvatar.js




var StyledAvatarText = (0,styled_components_browser_esm.default)(TextWrapper).withConfig({
  displayName: "StyledAvatar__StyledAvatarText",
  componentId: "sc-1suyamb-0"
})(["", " ", ""], function (props) {
  return props.theme.avatar && props.theme.avatar.text && props.theme.avatar.text.fontWeight && "font-weight: " + props.theme.avatar.text.fontWeight + ";";
}, function (props) {
  return props.theme.avatar.text && props.theme.avatar.text.extend;
});
StyledAvatarText.defaultProps = {};
Object.setPrototypeOf(StyledAvatarText.defaultProps, default_props_defaultProps);
var StyledAvatar = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "StyledAvatar",
  componentId: "sc-1suyamb-1"
})(["", ""], function (props) {
  return props.theme.avatar && props.theme.avatar.extend;
});
StyledAvatar.defaultProps = {};
Object.setPrototypeOf(StyledAvatar.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Avatar/Avatar.js
var Avatar_excluded = ["align", "children", "height", "justify", "round", "size", "src", "width"];

function Avatar_extends() {
  Avatar_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Avatar_extends.apply(this, arguments);
}

function Avatar_objectWithoutPropertiesLoose(source, excluded) {
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






var Avatar = function Avatar(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'center' : _ref$align,
      children = _ref.children,
      height = _ref.height,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'center' : _ref$justify,
      _ref$round = _ref.round,
      round = _ref$round === void 0 ? 'full' : _ref$round,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      src = _ref.src,
      width = _ref.width,
      rest = Avatar_objectWithoutPropertiesLoose(_ref, Avatar_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var avatarSize = theme.avatar.size[size] || size;
  var avatarTextSize = theme.avatar.text.size[size] || 'large';
  var avatarProps = {
    align: align,
    height: avatarSize,
    justify: justify,
    overflow: 'hidden',
    round: round,
    width: avatarSize
  };

  var AvatarChildren = function AvatarChildren() {
    return /*#__PURE__*/react.createElement(StyledAvatar, Avatar_extends({}, avatarProps, rest), children);
  };

  if (height || width) {
    console.warn('Avatar should use `size` instead of `height` or `width` props');
  }

  if (typeof src === 'string') {
    return /*#__PURE__*/react.createElement(StyledAvatar, Avatar_extends({}, avatarProps, rest, {
      background: "url(" + src + ")"
    }));
  }

  if (typeof children === 'string') {
    return /*#__PURE__*/react.createElement(StyledAvatar, Avatar_extends({}, avatarProps, rest), /*#__PURE__*/react.createElement(StyledAvatarText, {
      alignSelf: "center",
      size: avatarTextSize
    }, children));
  }

  return /*#__PURE__*/react.createElement(AvatarChildren, null);
};


;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Avatar/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Box/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Button/index.js

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
  } // we only create a new container if we don't have one already
  // we create a separate node so that grommet does not set aria-hidden to it


  var announcer = document.body.querySelector("#grommet-announcer[aria-live]") || createAnnouncer();
  announcer.setAttribute('aria-live', 'off');
  announcer.innerHTML = message;
  announcer.setAttribute('aria-live', mode);
  setTimeout(function () {
    announcer.innerHTML = '';
  }, timeout);
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/languages/default.json
const default_namespaceObject = JSON.parse('{"calendar":{"previous":"Moved to {date}","next":"Moved to {date}"},"fileInput":{"browse":"browse","dropPrompt":"Drop file here or","dropPromptMultiple":"Drop files here or","files":"files","remove":"remove","removeAll":"remove all"},"form":{"invalid":"invalid","required":"required"},"menu":{"openMenu":"Open Menu","closeMenu":"Close Menu"},"rangeSelector":{"lower":"Lower Bounds","upper":"Upper Bounds"},"select":{"multiple":"multiple"},"skipLinks":{"skipTo":"Skip To:"},"tabs":{"tabContents":"Tab Contents"},"textInput":{"enterSelect":"(Press Enter to Select)","suggestionsCount":"suggestions available","suggestionsExist":"This input has suggestions use arrow keys to navigate","suggestionIsOpen":"Suggestions drop is open, continue to use arrow keys to navigate"},"video":{"closeMenu":"close menu","fullScreen":"full screen","progressMeter":"video progress","scrubber":"scrubber","openMenu":"open menu","pauseButton":"pause","playButton":"play","volumeDown":"volume down","volumeUp":"volume up"}}');
;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/MessageContext/MessageContext.js

 // options:
//   id: message id
//   messages: (optional) an object of message overrides
//   values: (optional) currently unused but in the future
//     will be an object with substitution values for
//     positional variables in the message text.
//   defaultMessage: (optional) default message to use if
//     the message isn't found elsewhere.

var _format = function format(options, messages) {
  var _options$id; // Message id's are hierarchical. For the component-specific
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


  var idParts = ((_options$id = options.id) == null ? void 0 : _options$id.split('.')) || [];
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
  messages: default_namespaceObject,
  format: function format(options) {
    return _format(options, default_namespaceObject);
  }
};
var MessageContext = /*#__PURE__*/react.createContext(defaultValue);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Calendar/StyledCalendar.js




var StyledCalendar_sizeStyle = function sizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  var width = props.fillContainer ? '100%' : props.theme.global.size[props.sizeProp];
  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";width:", ";", ""], data.fontSize, data.lineHeight, width, function (p) {
    return p.fillContainer && 'height: 100%;';
  });
};

var StyledCalendar = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledCalendar",
  componentId: "sc-1y4xhmp-0"
})(["", " ", " ", ""], genericStyles, function (props) {
  return StyledCalendar_sizeStyle(props);
}, function (props) {
  return props.theme.calendar && props.theme.calendar.extend;
});
StyledCalendar.defaultProps = {};
Object.setPrototypeOf(StyledCalendar.defaultProps, default_props_defaultProps);

var weeksContainerSizeStyle = function weeksContainerSizeStyle(props) {
  var height = props.fillContainer ? '100%' : parseMetricToNum(props.theme.calendar[props.sizeProp].daySize) * 6 + "px";
  return "\n    height: " + height + ";\n\n  ";
};

var StyledWeeksContainer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledCalendar__StyledWeeksContainer",
  componentId: "sc-1y4xhmp-1"
})(["overflow:hidden;", " ", ";"], function (props) {
  return weeksContainerSizeStyle(props);
}, function (props) {
  return props.focus && !props.plain && focusStyle();
});
StyledWeeksContainer.defaultProps = {};
Object.setPrototypeOf(StyledWeeksContainer.defaultProps, default_props_defaultProps);

var slideStyle = function slideStyle(props) {
  var _props$slide = props.slide,
      direction = _props$slide.direction,
      weeks = _props$slide.weeks,
      sizeProp = props.sizeProp,
      theme = props.theme;
  var _theme$calendar$sizeP = theme.calendar[sizeProp],
      daySize = _theme$calendar$sizeP.daySize,
      slideDuration = _theme$calendar$sizeP.slideDuration;
  var amount = parseMetricToNum(daySize) * weeks;
  var translateYFrom = direction === 'down' ? "-" + amount + "px" : '0';
  var translateYTo = direction === 'up' ? "-" + amount + "px" : '0';
  var slideTransition = (0,styled_components_browser_esm.css)(["0%{transform:translateY(", ");}100%{transform:translateY(", ");}"], translateYFrom, translateYTo);
  return (0,styled_components_browser_esm.css)(["animation:", " ", " forwards;"], (0,styled_components_browser_esm.keyframes)(["", ""], slideTransition), slideDuration);
};

var weeksSizeStyle = function weeksSizeStyle() {
  return (0,styled_components_browser_esm.css)(["display:flex;flex-direction:column;height:100%;"]);
};

var StyledWeeks = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledCalendar__StyledWeeks",
  componentId: "sc-1y4xhmp-2"
})(["position:relative;", " ", ";"], function (props) {
  return props.fillContainer && weeksSizeStyle();
}, function (props) {
  return props.slide && slideStyle(props);
});
StyledWeeks.defaultProps = {};
Object.setPrototypeOf(StyledWeeks.defaultProps, default_props_defaultProps);
var StyledWeek = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledCalendar__StyledWeek",
  componentId: "sc-1y4xhmp-3"
})(["display:flex;justify-content:space-between;", ""], function (props) {
  return props.fillContainer && 'flex: 1;';
});
StyledWeek.defaultProps = {};
Object.setPrototypeOf(StyledWeek.defaultProps, default_props_defaultProps); // The width of 14.3% is derived from dividing 100/7. We want the
// widths of 7 days to equally fill 100% of the row.

var StyledDayContainer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledCalendar__StyledDayContainer",
  componentId: "sc-1y4xhmp-4"
})(["flex:0 1 auto;", ""], function (props) {
  return props.fillContainer && 'width: 14.3%;';
});
StyledDayContainer.defaultProps = {};
Object.setPrototypeOf(StyledDayContainer.defaultProps, default_props_defaultProps);

var daySizeStyle = function daySizeStyle(props) {
  var data = props.theme.calendar[props.sizeProp];
  return (0,styled_components_browser_esm.css)(["width:", ";height:", ";"], props.fillContainer ? '100%' : data.daySize, props.fillContainer ? '100%' : data.daySize);
};

var StyledDay = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledCalendar__StyledDay",
  componentId: "sc-1y4xhmp-5"
})(["display:flex;justify-content:center;align-items:center;", " ", " ", " ", " ", " ", ""], function (props) {
  return daySizeStyle(props);
}, function (props) {
  return props.isSelected && backgroundStyle('control', props.theme) || props.inRange && backgroundStyle({
    color: 'control',
    opacity: 'weak'
  }, props.theme);
}, function (props) {
  return props.otherMonth && 'opacity: 0.5;';
}, function (props) {
  return props.isSelected && 'font-weight: bold;';
}, function (props) {
  return (// when theme uses kind Buttons, since we use children for Button,
    // we have to special case how we handle disabled days here
    props.disabledProp && props.theme.button["default"] && kindPartStyles(props.theme.button.disabled, props.theme)
  );
}, function (props) {
  return props.theme.calendar && props.theme.calendar.day && props.theme.calendar.day.extend;
});
StyledDay.defaultProps = {};
Object.setPrototypeOf(StyledDay.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Calendar/utils.js
// Utility functions for the Calendar.
// Just what's needed to avoid having to include a dependency like momentjs.
var DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
var addDays = function addDays(date, days) {
  var result = new Date(date.getTime() + DAY_MILLISECONDS * days); // Deal with crossing the daylight savings time boundary,
  // where adding a day's worth when the time is midnight results in
  // being a day off.

  var hourDelta = result.getHours() - date.getHours(); // At this point, hourDelta is typically 0 (normal day),
  // +23 (November daylight saving), or -23 (March Daylight saving)
  // depending on which side of the switch we are on.
  // Convert so that hourDelta is either +1 or -1.

  if (hourDelta === 23) {
    hourDelta -= 24;
  } else if (hourDelta === -23) {
    hourDelta += 24;
  }

  result.setHours(result.getHours() - hourDelta);
  return result;
};
var subtractDays = function subtractDays(date, days) {
  return addDays(date, -days);
};
var addMonths = function addMonths(date, months) {
  var result = new Date(date);
  var years = Math.floor((date.getMonth() + months) / 12);
  result.setFullYear(date.getFullYear() + years);
  var targetMonth = (date.getMonth() + months) % 12;
  result.setMonth(targetMonth < 0 ? 12 + targetMonth : targetMonth);
  return result;
};
var subtractMonths = function subtractMonths(date, months) {
  return addMonths(date, -months);
};
var startOfMonth = function startOfMonth(date) {
  var result = new Date(date);
  result.setDate(1);
  return result;
};
var endOfMonth = function endOfMonth(date) {
  var result = addMonths(date, 1);
  result.setDate(0);
  return result;
};
var sameDay = function sameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};
var sameDayOrAfter = function sameDayOrAfter(date1, date2) {
  return date1.getFullYear() > date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() > date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() >= date2.getDate());
};
var sameDayOrBefore = function sameDayOrBefore(date1, date2) {
  return date1.getFullYear() < date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() < date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() <= date2.getDate());
};
var daysApart = function daysApart(date1, date2) {
  return Math.floor((date1.getTime() - date2.getTime()) / DAY_MILLISECONDS);
}; // account for timezone offset of user's local machine

var localTimezoneToUTC = function localTimezoneToUTC(date) {
  return new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
};
var formatToLocalYYYYMMDD = function formatToLocalYYYYMMDD(date) {
  var adjustedDate = new Date(date);
  return new Date(adjustedDate.getTime() - adjustedDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];
}; // betweenDates takes an array of two elements and checks if the
// supplied date lies between them, inclusive.
// returns 2 if exact match to one end, 1 if between, undefined otherwise

var betweenDates = function betweenDates(date, dates) {
  var result;

  if (dates) {
    var _dates$map = dates.map(function (d) {
      return d ? new Date(d) : undefined;
    }),
        from = _dates$map[0],
        to = _dates$map[1];

    if (from && sameDay(date, from) || to && sameDay(date, to)) {
      result = 2;
    } else if (from && sameDayOrAfter(date, from) && to && sameDayOrBefore(date, to)) {
      result = 1;
    }
  } else {
    result = 1;
  }

  return result;
}; // withinDates takes an array of string dates or 2 element arrays and
// checks whether the supplied date matches any string or is between
// any dates in arrays.
// returns 2 if exact match, 1 if between, undefined otherwise

var withinDates = function withinDates(date, dates) {
  var result;

  if (dates) {
    if (Array.isArray(dates)) {
      dates.some(function (d) {
        if (typeof d === 'string') {
          if (sameDay(date, new Date(d))) {
            result = 2;
          }
        } else {
          result = betweenDates(date, d);
        }

        return result;
      });
    } else if (sameDay(date, new Date(dates))) {
      result = 2;
    }
  }

  return result;
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Calendar/Calendar.js
var Calendar_excluded = ["activeDate", "animate", "bounds", "children", "date", "dates", "daysOfWeek", "disabled", "fill", "firstDayOfWeek", "header", "locale", "messages", "onReference", "onSelect", "range", "reference", "showAdjacentDays", "size"];

function Calendar_objectWithoutPropertiesLoose(source, excluded) {
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












var headingPadMap = {
  small: 'xsmall',
  medium: 'small',
  large: 'medium'
};
var activeDates = {
  start: 'start',
  end: 'end'
};
var timeStamp = new RegExp(/T.*/);

var normalizeForTimezone = function normalizeForTimezone(date, refDate) {
  if (!date) return undefined;
  return (!timeStamp.test(refDate || date) ? localTimezoneToUTC(new Date(date)) : new Date(date)).toISOString();
};

var normalizeReference = function normalizeReference(reference, date, dates) {
  var normalizedReference;

  if (reference) {
    normalizedReference = new Date(reference);
  } else if (date) {
    if (typeof date === 'string') {
      normalizedReference = new Date(date);
    } else if (Array.isArray(date)) {
      if (typeof date[0] === 'string') {
        normalizedReference = new Date(date[0]);
      } else if (Array.isArray(date[0])) {
        normalizedReference = new Date(date[0][0] ? date[0][0] : date[0][1]);
      } else {
        normalizedReference = new Date();
        normalizedReference.setHours(0, 0, 0, 0);
      }
    }
  } else if (dates && dates.length > 0) {
    if (typeof dates[0] === 'string') {
      normalizedReference = new Date(dates[0]);
    } else if (Array.isArray(dates[0])) {
      normalizedReference = new Date(dates[0][0] ? dates[0][0] : dates[0][1]);
    } else {
      normalizedReference = new Date();
      normalizedReference.setHours(0, 0, 0, 0);
    }
  } else {
    normalizedReference = new Date();
    normalizedReference.setHours(0, 0, 0, 0);
  }

  return normalizedReference;
};

var buildDisplayBounds = function buildDisplayBounds(reference, firstDayOfWeek) {
  var start = new Date(reference);
  start.setDate(1); // first of month
  // In case Sunday is the first day of the month, and the user asked for Monday
  // to be the first day of the week, then we need to include Sunday and six
  // days prior.

  start = start.getDay() === 0 && firstDayOfWeek === 1 ? start = subtractDays(start, 6) : // beginning of week
  start = subtractDays(start, start.getDay() - firstDayOfWeek);
  var end = addDays(start, 7 * 5 + 7); // 5 weeks to end of week

  return [start, end];
};

var millisecondsPerYear = 31557600000;

var CalendarDayButton = function CalendarDayButton(props) {
  return /*#__PURE__*/react.createElement(ButtonWrapper, Calendar_extends({
    tabIndex: -1,
    plain: true
  }, props));
};

var CalendarDay = function CalendarDay(_ref) {
  var children = _ref.children,
      fill = _ref.fill,
      size = _ref.size,
      isInRange = _ref.isInRange,
      isSelected = _ref.isSelected,
      otherMonth = _ref.otherMonth,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps;
  return /*#__PURE__*/react.createElement(StyledDayContainer, {
    role: "gridcell",
    sizeProp: size,
    fillContainer: fill
  }, /*#__PURE__*/react.createElement(CalendarDayButton, Calendar_extends({
    fill: fill
  }, buttonProps), /*#__PURE__*/react.createElement(StyledDay, {
    disabledProp: buttonProps.disabled,
    inRange: isInRange,
    otherMonth: otherMonth,
    isSelected: isSelected,
    sizeProp: size,
    fillContainer: fill
  }, children)));
};

var CalendarCustomDay = function CalendarCustomDay(_ref2) {
  var children = _ref2.children,
      fill = _ref2.fill,
      size = _ref2.size,
      buttonProps = _ref2.buttonProps;

  if (!buttonProps) {
    return /*#__PURE__*/react.createElement(StyledDayContainer, {
      role: "gridcell",
      sizeProp: size,
      fillContainer: fill
    }, children);
  }

  return /*#__PURE__*/react.createElement(StyledDayContainer, {
    role: "gridcell",
    sizeProp: size,
    fillContainer: fill
  }, /*#__PURE__*/react.createElement(CalendarDayButton, Calendar_extends({
    fill: fill
  }, buttonProps), children));
};

var Calendar = /*#__PURE__*/(0,react.forwardRef)(function (_ref3, ref) {
  var activeDateProp = _ref3.activeDate,
      _ref3$animate = _ref3.animate,
      animate = _ref3$animate === void 0 ? true : _ref3$animate,
      boundsProp = _ref3.bounds,
      children = _ref3.children,
      dateProp = _ref3.date,
      datesProp = _ref3.dates,
      daysOfWeek = _ref3.daysOfWeek,
      disabled = _ref3.disabled,
      fill = _ref3.fill,
      _ref3$firstDayOfWeek = _ref3.firstDayOfWeek,
      firstDayOfWeek = _ref3$firstDayOfWeek === void 0 ? 0 : _ref3$firstDayOfWeek,
      header = _ref3.header,
      _ref3$locale = _ref3.locale,
      locale = _ref3$locale === void 0 ? 'en-US' : _ref3$locale,
      messages = _ref3.messages,
      onReference = _ref3.onReference,
      onSelect = _ref3.onSelect,
      range = _ref3.range,
      referenceProp = _ref3.reference,
      _ref3$showAdjacentDay = _ref3.showAdjacentDays,
      showAdjacentDays = _ref3$showAdjacentDay === void 0 ? true : _ref3$showAdjacentDay,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 'medium' : _ref3$size,
      rest = Calendar_objectWithoutPropertiesLoose(_ref3, Calendar_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var announce = (0,react.useContext)(AnnounceContext);

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format; // set activeDate when caller changes it, allows us to change
  // it internally too


  var _useState = (0,react.useState)(dateProp && typeof dateProp === 'string' && range ? activeDates.end : activeDates.start),
      activeDate = _useState[0],
      setActiveDate = _useState[1];

  (0,react.useEffect)(function () {
    if (activeDateProp) setActiveDate(activeDateProp);
  }, [activeDateProp]); // function that runs inside the useEffect for date and dates

  var normalizeDate = function normalizeDate(dateValue) {
    // convert values to UTC based on if date is string or array
    if (typeof dateValue === 'string') {
      return normalizeForTimezone(dateValue);
    }

    if (Array.isArray(dateValue)) {
      if (Array.isArray(dateValue[0])) {
        var from;
        var to;

        var _dateValue$0$map = dateValue[0].map(function (day) {
          return day ? new Date(day) : undefined;
        });

        from = _dateValue$0$map[0];
        to = _dateValue$0$map[1];
        if (from) from = normalizeForTimezone(from, dateValue[0][0]);
        if (to) to = normalizeForTimezone(to, dateValue[0][0]);
        return [[from, to]];
      }

      var dateArray = [];
      dateValue.forEach(function (d) {
        if (Array.isArray(d)) {
          var _from;

          var _to;

          var _d$map = d.map(function (day) {
            return new Date(day);
          });

          _from = _d$map[0];
          _to = _d$map[1];
          _from = normalizeForTimezone(_from, d[0]);
          _to = normalizeForTimezone(_to, d[0]);
          dateArray.push([_from, _to]);
        } else {
          dateArray.push(normalizeForTimezone(d));
        }
      });
      return dateArray;
    }

    return undefined;
  }; // set date when caller changes it, allows us to change it internally too


  var _useState2 = (0,react.useState)(dateProp),
      date = _useState2[0],
      setDate = _useState2[1];

  (0,react.useEffect)(function () {
    setDate(normalizeDate(dateProp));
  }, [dateProp]); // set dates when caller changes it, allows us to change it internally too

  var _useState3 = (0,react.useState)(datesProp),
      dates = _useState3[0],
      setDates = _useState3[1];

  (0,react.useEffect)(function () {
    setDates(normalizeDate(datesProp));
  }, [datesProp]); // set reference based on what the caller passed or date/dates.

  var _useState4 = (0,react.useState)(normalizeReference(referenceProp, date, dates)),
      reference = _useState4[0],
      setReference = _useState4[1];

  (0,react.useEffect)(function () {
    return setReference(normalizeReference(referenceProp, dateProp, datesProp));
  }, [dateProp, datesProp, referenceProp]); // normalize bounds

  var _useState5 = (0,react.useState)(boundsProp ? boundsProp.map(function (b) {
    return normalizeForTimezone(b);
  }) : undefined),
      bounds = _useState5[0],
      setBounds = _useState5[1];

  (0,react.useEffect)(function () {
    if (boundsProp) setBounds(boundsProp.map(function (b) {
      return normalizeForTimezone(b);
    }));else setBounds(undefined);
  }, [boundsProp]); // calculate the bounds we display based on the reference

  var _useState6 = (0,react.useState)(buildDisplayBounds(reference, firstDayOfWeek)),
      displayBounds = _useState6[0],
      setDisplayBounds = _useState6[1];

  var _useState7 = (0,react.useState)(),
      targetDisplayBounds = _useState7[0],
      setTargetDisplayBounds = _useState7[1];

  var _useState8 = (0,react.useState)(),
      slide = _useState8[0],
      setSlide = _useState8[1];

  var _useState9 = (0,react.useState)(),
      animating = _useState9[0],
      setAnimating = _useState9[1]; // When the reference changes, we need to update the displayBounds.
  // This is easy when we aren't animating. If we are animating,
  // we temporarily increase the displayBounds to be the union of the old
  // and new ones and set slide to drive the animation. We keep track
  // of where we are heading via targetDisplayBounds. When the animation
  // finishes, we prune displayBounds down to where we are headed and
  // clear the slide and targetDisplayBounds.


  (0,react.useEffect)(function () {
    var nextDisplayBounds = buildDisplayBounds(reference, firstDayOfWeek); // Checks if the difference between the current and next DisplayBounds is
    // greater than a year. If that's the case, calendar should update without
    // animation.

    if (nextDisplayBounds[0].getTime() !== displayBounds[0].getTime() && nextDisplayBounds[1].getTime() !== displayBounds[1].getTime()) {
      var diffBoundsAboveYear = false;

      if (nextDisplayBounds[0].getTime() < displayBounds[0].getTime()) {
        if (displayBounds[0].getTime() - nextDisplayBounds[0].getTime() > millisecondsPerYear) {
          diffBoundsAboveYear = true;
        }
      } else if (nextDisplayBounds[1].getTime() > displayBounds[1].getTime()) {
        if (nextDisplayBounds[1].getTime() - displayBounds[1].getTime() > millisecondsPerYear) {
          diffBoundsAboveYear = true;
        }
      }

      if (!animate || diffBoundsAboveYear) {
        setDisplayBounds(nextDisplayBounds);
      } else {
        setTargetDisplayBounds(nextDisplayBounds);
      }
    }
  }, [animate, firstDayOfWeek, reference, displayBounds]);
  (0,react.useEffect)(function () {
    if (targetDisplayBounds) {
      if (targetDisplayBounds[0].getTime() < displayBounds[0].getTime()) {
        // only animate if the duration is within a year
        if (displayBounds[0].getTime() - targetDisplayBounds[0].getTime() < millisecondsPerYear) {
          setDisplayBounds([targetDisplayBounds[0], displayBounds[1]]);
          setSlide({
            direction: 'down',
            weeks: daysApart(displayBounds[0], targetDisplayBounds[0]) / 7
          });
          setAnimating(true);
        }
      } else if (targetDisplayBounds[1].getTime() > displayBounds[1].getTime()) {
        if (targetDisplayBounds[1].getTime() - displayBounds[1].getTime() < millisecondsPerYear) {
          setDisplayBounds([displayBounds[0], targetDisplayBounds[1]]);
          setSlide({
            direction: 'up',
            weeks: daysApart(targetDisplayBounds[1], displayBounds[1]) / 7
          });
          setAnimating(true);
        }
      }

      return undefined;
    }

    setSlide(undefined);
    return undefined;
  }, [animating, displayBounds, targetDisplayBounds]); // Last step in updating the displayBounds. Allows for pruning
  // displayBounds and cleaning up states to occur after animation.

  (0,react.useEffect)(function () {
    if (animating && targetDisplayBounds) {
      // Wait for animation to finish before cleaning up.
      var timer = setTimeout(function () {
        setDisplayBounds(targetDisplayBounds);
        setTargetDisplayBounds(undefined);
        setSlide(undefined);
        setAnimating(false);
      }, 400 // Empirically determined.
      );
      return function () {
        return clearTimeout(timer);
      };
    }

    return undefined;
  }, [animating, targetDisplayBounds]); // We have to deal with reference being the end of a month with more
  // days than the month we are changing to. So, we always set reference
  // to the first of the month before changing the month.

  var previousMonth = (0,react.useMemo)(function () {
    return endOfMonth(subtractMonths(startOfMonth(reference), 1));
  }, [reference]);
  var nextMonth = (0,react.useMemo)(function () {
    return startOfMonth(addMonths(startOfMonth(reference), 1));
  }, [reference]);
  var daysRef = (0,react.useRef)();

  var _useState10 = (0,react.useState)(),
      focus = _useState10[0],
      setFocus = _useState10[1];

  var _useState11 = (0,react.useState)(),
      active = _useState11[0],
      setActive = _useState11[1];

  var changeReference = (0,react.useCallback)(function (nextReference) {
    if (betweenDates(nextReference, bounds)) {
      setReference(nextReference);
      if (onReference) onReference(nextReference.toISOString());
    }
  }, [onReference, bounds]);
  var selectDate = (0,react.useCallback)(function (selectedDate) {
    var nextDates;
    var nextDate; // output date with no timestamp if that's how user provided it

    var adjustedDate;

    if (!range) {
      nextDate = selectedDate;

      if (datesProp) {
        datesProp.forEach(function (d) {
          if (!timeStamp.test(d)) {
            adjustedDate = formatToLocalYYYYMMDD(nextDate);

            if (d === adjustedDate) {
              nextDate = undefined;
            } else {
              adjustedDate = undefined;
            }
          }
        });
      } else if (typeof dateProp === 'string') {
        if (!timeStamp.test(dateProp)) {
          adjustedDate = formatToLocalYYYYMMDD(selectedDate);

          if (dateProp === adjustedDate) {
            nextDate = undefined;
          } else {
            adjustedDate = undefined;
          }
        }
      } else if (Array.isArray(dateProp)) {
        dateProp.forEach(function (d) {
          if (!timeStamp.test(d)) {
            adjustedDate = formatToLocalYYYYMMDD(nextDate);

            if (d === adjustedDate) {
              nextDate = undefined;
            } else {
              adjustedDate = undefined;
            }
          }
        });
      } else {
        adjustedDate = undefined;
      }
    } // everything down is a range
    else if (!dates && !Array.isArray(date)) {
      // if user supplies date, convert this into dates
      if (date) {
        var priorDate = new Date(date);
        var selDate = new Date(selectedDate);

        if (activeDate === activeDates.start) {
          if (selDate.getTime() > priorDate.getTime()) {
            nextDates = [[selectedDate, undefined]];
          } else {
            nextDates = [[selectedDate, date]];
          }

          setActiveDate(activeDates.end);
          if (activeDateProp) setActiveDate(activeDateProp);
        } else if (activeDate === activeDates.end) {
          if (selDate.getTime() < priorDate.getTime()) {
            nextDates = [[selectedDate, undefined]];
            setActiveDate(activeDates.end);
          } else {
            nextDates = [[date, selectedDate]];
            setActiveDate(activeDates.start);
          }

          if (activeDateProp) setActiveDate(activeDateProp);
        }
      } else if (activeDate === activeDates.start) {
        nextDates = [[selectedDate, undefined]];
        setActiveDate(activeDates.end);
      } else if (activeDate === activeDates.end) {
        nextDates = [[undefined, selectedDate]];
      }

      if (activeDateProp) setActiveDate(activeDateProp);
    } else if (dates || date) {
      var handleSelection = function handleSelection(dateValue) {
        var priorDates = dateValue[0].map(function (d) {
          return new Date(d);
        });
        var selDate = new Date(selectedDate);

        if (selDate.getTime() === priorDates[0].getTime()) {
          nextDates = [[undefined, dateValue[0][1]]];
          setActiveDate(activeDates.start);
        } else if (selDate.getTime() === priorDates[1].getTime()) {
          nextDates = [[dateValue[0][0], undefined]];
          setActiveDate(activeDates.end);
          if (activeDateProp) setActiveDate(activeDateProp);
        } else if (activeDate === activeDates.start) {
          if (selDate.getTime() > priorDates[1].getTime()) {
            nextDates = [[selectedDate, undefined]];
          } else {
            nextDates = [[selectedDate, dateValue[0][1]]];
          }

          setActiveDate(activeDates.end);
          if (activeDateProp) setActiveDate(activeDateProp);
        } else if (activeDate === activeDates.end) {
          if (selDate.getTime() < priorDates[0].getTime()) {
            nextDates = [[selectedDate, undefined]];
            setActiveDate(activeDates.end);
          } else {
            nextDates = [[dateValue[0][0], selectedDate]];
            setActiveDate(activeDates.start);
          }

          if (activeDateProp) setActiveDate(activeDateProp);
        } // cleanup


        if (!nextDates[0][0] && !nextDates[0][1]) nextDates = undefined;
      }; // have dates


      if (dates) {
        handleSelection(dates);
      } else if (date && Array.isArray(date)) {
        handleSelection(date);
      }
    }

    setDates(nextDates);

    if (date && typeof date === 'string') {
      setDate(nextDate);
    } else if (date && Array.isArray(date)) {
      setDate(nextDates);
    }

    setActive(new Date(selectedDate));

    if (onSelect) {
      var adjustedDates;

      if (nextDates && Array.isArray(nextDates[0]) && (!nextDates[0][0] || !nextDates[0][1]) && range === true) {
        // return string for backwards compatibility
        var _nextDates$0$filter = nextDates[0].filter(function (d) {
          return d;
        });

        adjustedDates = _nextDates$0$filter[0];
      } else {
        adjustedDates = nextDates;
      }

      onSelect(adjustedDates || adjustedDate || nextDate);
    }
  }, [activeDate, activeDateProp, date, dateProp, dates, datesProp, onSelect, range]);

  var renderCalendarHeader = function renderCalendarHeader() {
    var PreviousIcon = size === 'small' ? theme.calendar.icons.small.previous : theme.calendar.icons.previous;
    var NextIcon = size === 'small' ? theme.calendar.icons.small.next : theme.calendar.icons.next;
    return /*#__PURE__*/react.createElement(BoxWrapper, {
      direction: "row",
      justify: "between",
      align: "center"
    }, /*#__PURE__*/react.createElement(BoxWrapper, {
      flex: true,
      pad: {
        horizontal: headingPadMap[size] || 'small'
      }
    }, /*#__PURE__*/react.createElement(HeadingWrapper, {
      level: size === 'small' ? theme.calendar.heading && theme.calendar.heading.level || 4 : (theme.calendar.heading && theme.calendar.heading.level || 4) - 1,
      size: size,
      margin: "none"
    }, reference.toLocaleDateString(locale, {
      month: 'long',
      year: 'numeric'
    }))), /*#__PURE__*/react.createElement(BoxWrapper, {
      flex: false,
      direction: "row",
      align: "center"
    }, /*#__PURE__*/react.createElement(ButtonWrapper, {
      a11yTitle: previousMonth.toLocaleDateString(locale, {
        month: 'long',
        year: 'numeric'
      }),
      icon: /*#__PURE__*/react.createElement(PreviousIcon, {
        size: size !== 'small' ? size : undefined
      }),
      disabled: !betweenDates(previousMonth, bounds),
      onClick: function onClick() {
        changeReference(previousMonth);
        announce(format({
          id: 'calendar.previous',
          messages: messages,
          values: {
            date: previousMonth.toLocaleDateString(locale, {
              month: 'long',
              year: 'numeric'
            })
          }
        }));
      }
    }), /*#__PURE__*/react.createElement(ButtonWrapper, {
      a11yTitle: nextMonth.toLocaleDateString(locale, {
        month: 'long',
        year: 'numeric'
      }),
      icon: /*#__PURE__*/react.createElement(NextIcon, {
        size: size !== 'small' ? size : undefined
      }),
      disabled: !betweenDates(nextMonth, bounds),
      onClick: function onClick() {
        changeReference(nextMonth);
        announce(format({
          id: 'calendar.next',
          messages: messages,
          values: {
            date: nextMonth.toLocaleDateString(locale, {
              month: 'long',
              year: 'numeric'
            })
          }
        }));
      }
    })));
  };

  var renderDaysOfWeek = function renderDaysOfWeek() {
    var day = new Date(displayBounds[0]);
    var days = [];

    while (days.length < 7) {
      days.push( /*#__PURE__*/react.createElement(StyledDayContainer, {
        role: "gridcell",
        key: days.length,
        sizeProp: size,
        fillContainer: fill
      }, /*#__PURE__*/react.createElement(StyledDay, {
        otherMonth: true,
        sizeProp: size,
        fillContainer: fill
      }, day.toLocaleDateString(locale, {
        weekday: 'narrow'
      }))));
      day = addDays(day, 1);
    }

    return /*#__PURE__*/react.createElement(StyledWeek, {
      role: "row"
    }, days);
  };

  var weeks = [];
  var day = new Date(displayBounds[0]);
  var days;
  var firstDayInMonth;

  while (day.getTime() < displayBounds[1].getTime()) {
    if (day.getDay() === firstDayOfWeek) {
      if (days) {
        weeks.push( /*#__PURE__*/react.createElement(StyledWeek, {
          role: "row",
          key: day.getTime(),
          fillContainer: fill
        }, days));
      }

      days = [];
    }

    var otherMonth = day.getMonth() !== reference.getMonth();

    if (!showAdjacentDays && otherMonth) {
      days.push( /*#__PURE__*/react.createElement(StyledDayContainer, {
        role: "gridcell",
        key: day.getTime(),
        sizeProp: size,
        fillContainer: fill
      }, /*#__PURE__*/react.createElement(StyledDay, {
        sizeProp: size,
        fillContainer: fill
      })));
    } else if (
    /* Do not show adjacent days in 6th row if all days
    fall in the next month */
    showAdjacentDays === 'trim' && otherMonth && weeks.length === 5 &&
    /* If the length days array is less than the current getDate()
    we know that all days in the array are from the next month. */
    days.length < day.getDate()) {
      days.push( /*#__PURE__*/react.createElement(StyledDayContainer, {
        role: "gridcell",
        key: day.getTime(),
        sizeProp: size,
        fillContainer: fill
      }, /*#__PURE__*/react.createElement(StyledDay, {
        sizeProp: size,
        fillContainer: fill
      })));
    } else {
      (function () {
        var dateString = day.toISOString(); // this.dayRefs[dateString] = React.createRef();

        var selected = false;
        var inRange = false;
        var selectedState = withinDates(day, date || dates);

        if (selectedState === 2) {
          selected = true;
        } else if (selectedState === 1) {
          inRange = true;
        }

        var dayDisabled = withinDates(day, disabled) || bounds && !betweenDates(day, bounds);

        if (!firstDayInMonth && !dayDisabled && day.getMonth() === reference.getMonth()) {
          firstDayInMonth = dateString;
        }

        if (!children) {
          days.push( /*#__PURE__*/react.createElement(CalendarDay, {
            key: day.getTime(),
            buttonProps: {
              a11yTitle: day.toDateString(),
              active: active && active.getTime() === day.getTime(),
              disabled: dayDisabled && !!dayDisabled,
              onClick: function onClick() {
                selectDate(dateString);
                announce("Selected " + formatToLocalYYYYMMDD(dateString), 'assertive'); // Chrome moves the focus indicator to this button. Set
                // the focus to the grid of days instead.

                daysRef.current.focus();
              },
              onMouseOver: function onMouseOver() {
                return setActive(new Date(dateString));
              },
              onMouseOut: function onMouseOut() {
                return setActive(undefined);
              }
            },
            isInRange: inRange,
            isSelected: selected,
            otherMonth: day.getMonth() !== reference.getMonth(),
            size: size,
            fill: fill
          }, day.getDate()));
        } else {
          days.push( /*#__PURE__*/react.createElement(CalendarCustomDay, {
            key: day.getTime(),
            buttonProps: onSelect ? {
              a11yTitle: day.toDateString(),
              active: active && active.getTime() === day.getTime(),
              disabled: dayDisabled && !!dayDisabled,
              onClick: function onClick() {
                selectDate(dateString);
                announce("Selected \n                          " + formatToLocalYYYYMMDD(dateString), 'assertive'); // Chrome moves the focus indicator to this button. Set
                // the focus to the grid of days instead.

                daysRef.current.focus();
              },
              onMouseOver: function onMouseOver() {
                return setActive(new Date(dateString));
              },
              onMouseOut: function onMouseOut() {
                return setActive(undefined);
              }
            } : null,
            size: size,
            fill: fill
          }, children({
            date: day,
            day: day.getDate(),
            isInRange: inRange,
            isSelected: selected
          })));
        }
      })();
    }

    day = addDays(day, 1);
  }

  weeks.push( /*#__PURE__*/react.createElement(StyledWeek, {
    role: "row",
    key: day.getTime(),
    fillContainer: fill
  }, days));
  return /*#__PURE__*/react.createElement(StyledCalendar, Calendar_extends({
    ref: ref,
    sizeProp: size,
    fillContainer: fill
  }, rest), /*#__PURE__*/react.createElement(BoxWrapper, {
    fill: fill
  }, header ? header({
    date: reference,
    locale: locale,
    onPreviousMonth: function onPreviousMonth() {
      changeReference(previousMonth);
      announce(format({
        id: 'calendar.previous',
        messages: messages,
        values: {
          date: previousMonth.toLocaleDateString(locale, {
            month: 'long',
            year: 'numeric'
          })
        }
      }));
    },
    onNextMonth: function onNextMonth() {
      changeReference(nextMonth);
      announce(format({
        id: 'calendar.next',
        messages: messages,
        values: {
          date: nextMonth.toLocaleDateString(locale, {
            month: 'long',
            year: 'numeric'
          })
        }
      }));
    },
    previousInBound: betweenDates(previousMonth, bounds),
    nextInBound: betweenDates(nextMonth, bounds)
  }) : renderCalendarHeader(previousMonth, nextMonth), daysOfWeek && renderDaysOfWeek(), /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onEnter: function onEnter() {
      return active !== undefined ? selectDate(active.toISOString()) : undefined;
    },
    onUp: function onUp(event) {
      event.preventDefault();
      event.stopPropagation(); // so the page doesn't scroll

      setActive(addDays(active, -7));
    },
    onDown: function onDown(event) {
      event.preventDefault();
      event.stopPropagation(); // so the page doesn't scroll

      setActive(addDays(active, 7));
    },
    onLeft: function onLeft() {
      return active && setActive(addDays(active, -1));
    },
    onRight: function onRight() {
      return active && setActive(addDays(active, 1));
    }
  }, /*#__PURE__*/react.createElement(StyledWeeksContainer, {
    tabIndex: 0,
    role: "grid",
    "aria-label": reference.toLocaleDateString(locale, {
      month: 'long',
      year: 'numeric'
    }),
    ref: daysRef,
    sizeProp: size,
    fillContainer: fill,
    focus: focus,
    onFocus: function onFocus() {
      setFocus(true);

      if (date && betweenDates(new Date(date), displayBounds)) {
        setActive(new Date(date));
      } else {
        setActive(new Date(firstDayInMonth));
      }
    },
    onBlur: function onBlur() {
      setFocus(false);
      setActive(undefined);
    }
  }, /*#__PURE__*/react.createElement(StyledWeeks, {
    slide: slide,
    sizeProp: size,
    fillContainer: fill
  }, weeks)))));
});
Calendar.displayName = 'Calendar';
var CalendarDoc;

if (false) {}

var CalendarWrapper = CalendarDoc || Calendar;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Calendar/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Card/Card.js
function Card_extends() {
  Card_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Card_extends.apply(this, arguments);
}





var Card = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var rest = Card_extends({}, _ref);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  return /*#__PURE__*/react.createElement(BoxWrapper, Card_extends({
    overflow: "hidden",
    ref: ref
  }, theme.card.container, rest));
});
Card.displayName = 'Card';
var CardDoc;

if (false) {}

var CardWrapper = CardDoc || Card;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Card/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CardBody/CardBody.js
function CardBody_extends() {
  CardBody_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CardBody_extends.apply(this, arguments);
}






var CardBody = function CardBody(_ref) {
  var rest = CardBody_extends({}, _ref);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  return /*#__PURE__*/react.createElement(BoxWrapper, CardBody_extends({
    flex: true
  }, theme.card.body, rest));
};

var CardBodyDoc;

if (false) {}

var CardBodyWrapper = CardBodyDoc || CardBody;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CardBody/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Footer/Footer.js
function Footer_extends() {
  Footer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Footer_extends.apply(this, arguments);
}




var Footer = function Footer(_ref) {
  var rest = Footer_extends({}, _ref);

  return /*#__PURE__*/react.createElement(BoxWrapper, Footer_extends({
    as: "footer",
    align: "center",
    direction: "row",
    flex: false,
    gap: "medium",
    justify: "between"
  }, rest));
};

var FooterDoc;

if (false) {}

var FooterWrapper = FooterDoc || Footer;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CardFooter/CardFooter.js
function CardFooter_extends() {
  CardFooter_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CardFooter_extends.apply(this, arguments);
}




 // Needs to have a CardBody or a flex container when Card uses a fixed height.

var CardFooter = function CardFooter(_ref) {
  var rest = CardFooter_extends({}, _ref);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  return /*#__PURE__*/react.createElement(FooterWrapper, CardFooter_extends({}, theme.card.footer, rest));
};

var CardFooterDoc;

if (false) {}

var CardFooterWrapper = CardFooterDoc || CardFooter;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CardFooter/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Header/Header.js
function Header_extends() {
  Header_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Header_extends.apply(this, arguments);
}



var Header = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var rest = Header_extends({}, _ref);

  return /*#__PURE__*/react.createElement(BoxWrapper, Header_extends({
    align: "center",
    as: "header",
    direction: "row",
    flex: false,
    justify: "between",
    gap: "medium"
  }, rest, {
    ref: ref
  }));
});
Header.displayName = 'Header';
var HeaderDoc;

if (false) {}

var HeaderWrapper = HeaderDoc || Header;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CardHeader/CardHeader.js
function CardHeader_extends() {
  CardHeader_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CardHeader_extends.apply(this, arguments);
}






var CardHeader = function CardHeader(_ref) {
  var rest = CardHeader_extends({}, _ref);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  return /*#__PURE__*/react.createElement(HeaderWrapper, CardHeader_extends({}, theme.card.header, rest));
};

var CardHeaderDoc;

if (false) {}

var CardHeaderWrapper = CardHeaderDoc || CardHeader;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CardHeader/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ThemeContext/ThemeContext.js





styled_components_browser_esm.ThemeContext.Extend = function (_ref) {
  var children = _ref.children,
      value = _ref.value;
  return /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Consumer, null, function (theme) {
    return /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
      value: deepMerge(theme, value)
    }, children);
  });
};

styled_components_browser_esm.ThemeContext.Extend.propTypes = {
  children: (prop_types_default()).node.isRequired,
  value: prop_types_default().shape({}).isRequired
};

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Carousel/propTypes.js
function Carousel_propTypes_extends() {
  Carousel_propTypes_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Carousel_propTypes_extends.apply(this, arguments);
}



var CarouselType = Carousel_propTypes_extends({}, genericProps, {
  activeChild: (prop_types_default()).number,
  fill: (prop_types_default()).bool,
  play: (prop_types_default()).number,
  initialChild: (prop_types_default()).number,
  onChild: (prop_types_default()).func,
  controls: prop_types_default().oneOfType([(prop_types_default()).bool, prop_types_default().oneOf(['arrows', 'selectors'])])
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Carousel/Carousel.js
var Carousel_excluded = ["activeChild", "initialChild", "onChild", "play", "children", "controls", "fill", "onFocus", "onBlur"];

function Carousel_extends() {
  Carousel_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Carousel_extends.apply(this, arguments);
}

function Carousel_objectWithoutPropertiesLoose(source, excluded) {
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











var Carousel = function Carousel(_ref) {
  var activeChild = _ref.activeChild,
      initialChild = _ref.initialChild,
      onChild = _ref.onChild,
      play = _ref.play,
      children = _ref.children,
      controls = _ref.controls,
      fill = _ref.fill,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      rest = Carousel_objectWithoutPropertiesLoose(_ref, Carousel_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  var timerRef = (0,react.useRef)();

  var _useState2 = (0,react.useState)({
    activeIndex: activeChild !== undefined ? activeChild : initialChild
  }),
      indexes = _useState2[0],
      setIndexes = _useState2[1];

  var activeIndex = indexes.activeIndex,
      priorActiveIndex = indexes.priorActiveIndex;
  var lastIndex = react.Children.count(children) - 1;

  if (activeIndex !== activeChild && activeChild !== undefined) {
    if (activeChild >= 0 && activeChild <= lastIndex) {
      setIndexes({
        activeIndex: activeChild,
        priorActiveIndex: activeIndex
      });
    }
  }

  var onChildChange = (0,react.useCallback)(function (index) {
    if (onChild) {
      onChild(index);
    }
  }, [onChild]);
  (0,react.useEffect)(function () {
    if (play) {
      var timer = setInterval(function () {
        if (activeIndex < lastIndex) {
          setIndexes({
            activeIndex: activeIndex + 1,
            priorActiveIndex: activeIndex
          });
          onChildChange(activeIndex + 1);
        } else {
          setIndexes({
            activeIndex: 0,
            priorActiveIndex: activeIndex
          });
          onChildChange(0);
        }
      }, play);
      timerRef.current = timer;
      return function () {
        clearTimeout(timer);
      };
    }

    return function () {};
  }, [activeIndex, play, children, lastIndex, onChildChange]);

  var onRight = function onRight() {
    if (activeIndex >= lastIndex) {
      return;
    }

    clearInterval(timerRef.current);
    setIndexes({
      activeIndex: activeIndex + 1,
      priorActiveIndex: activeIndex
    });
    onChildChange(activeIndex + 1);
  };

  var onLeft = function onLeft() {
    if (activeIndex <= 0) {
      return;
    }

    clearInterval(timerRef.current);
    setIndexes({
      activeIndex: activeIndex - 1,
      priorActiveIndex: activeIndex
    });
    onChildChange(activeIndex - 1);
  };

  var onSelect = function onSelect(index) {
    return function () {
      if (activeIndex !== index) {
        clearInterval(timerRef.current);
        setIndexes({
          activeIndex: index,
          priorActiveIndex: activeIndex
        });
        onChildChange(index);
      }
    };
  };

  var showArrows = controls && controls !== 'selectors';
  var showSelectors = controls && controls !== 'arrows';
  var CurrentIcon = theme.carousel.icons.current;
  var iconColor = normalizeColor(theme.carousel.icons.color || 'control', theme);
  var selectors = [];
  var wrappedChildren = react.Children.map(children, function (child, index) {
    selectors.push( /*#__PURE__*/react.createElement(ButtonWrapper // eslint-disable-next-line react/no-array-index-key
    , {
      key: index,
      icon: /*#__PURE__*/react.createElement(CurrentIcon, {
        color: activeIndex === index ? iconColor : undefined
      }),
      onClick: onSelect(index)
    }));
    var animation;
    var visibility = 'visible';

    if (index === activeIndex) {
      if (priorActiveIndex !== undefined) {
        animation = {
          type: priorActiveIndex < activeIndex ? 'slideLeft' : 'slideRight',
          size: 'xlarge',
          duration: theme.carousel.animation.duration
        };
      }
    } else if (index === priorActiveIndex) {
      animation = {
        type: 'fadeOut',
        duration: theme.carousel.animation.duration
      };
    } else {
      animation = {
        type: 'fadeOut',
        duration: 0
      };
      visibility = 'hidden';
    }

    return /*#__PURE__*/react.createElement(BoxWrapper, {
      fill: fill,
      style: {
        visibility: visibility
      },
      overflow: "hidden"
    }, /*#__PURE__*/react.createElement(BoxWrapper, {
      fill: fill,
      animation: animation
    }, child));
  });
  var NextIcon = theme.carousel.icons.next;
  var PreviousIcon = theme.carousel.icons.previous;
  var nextIconDisabled = activeIndex >= lastIndex;
  var previousIconDisabled = activeIndex <= 0;
  return /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onLeft: onLeft,
    onRight: onRight
  }, /*#__PURE__*/react.createElement(StackWrapper, Carousel_extends({
    guidingChild: activeIndex,
    fill: fill
  }, rest), wrappedChildren, /*#__PURE__*/react.createElement(BoxWrapper, {
    tabIndex: "0",
    focus: focus,
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (_onBlur) _onBlur(event);
    },
    fill: true,
    direction: "row",
    justify: "between"
  }, showArrows && /*#__PURE__*/react.createElement(ButtonWrapper, {
    fill: "vertical",
    icon: /*#__PURE__*/react.createElement(PreviousIcon, {
      color: normalizeColor(previousIconDisabled ? theme.carousel.disabled.icons.color : theme.carousel.icons.color, theme)
    }),
    plain: true,
    disabled: previousIconDisabled,
    onClick: onLeft,
    hoverIndicator: true
  }), showSelectors && /*#__PURE__*/react.createElement(BoxWrapper, {
    justify: "end",
    fill: !showArrows && 'horizontal'
  }, /*#__PURE__*/react.createElement(BoxWrapper, {
    direction: "row",
    justify: "center"
  }, selectors)), showArrows && /*#__PURE__*/react.createElement(ButtonWrapper, {
    fill: "vertical",
    icon: /*#__PURE__*/react.createElement(NextIcon, {
      color: normalizeColor(nextIconDisabled ? theme.carousel.disabled.icons.color : theme.carousel.icons.color, theme)
    }),
    plain: true,
    disabled: nextIconDisabled,
    onClick: onRight,
    hoverIndicator: true
  }))));
};

Carousel.defaultProps = {
  initialChild: 0,
  controls: true
};
Object.setPrototypeOf(Carousel.defaultProps, default_props_defaultProps);
Carousel.displayName = 'Carousel';
Carousel.propTypes = CarouselType;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Carousel/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Form/FormContext.js
 // When not a descendant of a Form, FormContext still provides a basic
// useFormInput. It doesn't do anything for components like TextInput.
// But, it does store the value for components like CheckBox or Select
// where the grommet component needs to know the value in order to
// render custom visuals.

var useFormInput = function useFormInput(_, valueProp, initialValue) {
  var _useState = (0,react.useState)(valueProp !== undefined ? valueProp : initialValue),
      value = _useState[0],
      setValue = _useState[1];

  return [valueProp !== undefined ? valueProp : value, function (nextValue) {
    if (initialValue !== undefined) setValue(nextValue);
  }];
};

var useFormField = function useFormField(_ref) {
  var error = _ref.error,
      info = _ref.info;
  return {
    error: error,
    info: info
  };
};

var FormContext = /*#__PURE__*/react.createContext({
  useFormField: useFormField,
  useFormInput: useFormInput
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CheckBox/StyledCheckBox.js


 // Note: since `fillStyle` is only used in one place, `justify-content` was
// added to it to simplify its logic. If this is ever reused somewhere else,
// consider the need of separating those once again.

var StyledCheckBox_fillStyle = function fillStyle() {
  return "\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n      justify-content: space-between;\n    ";
};

var StyledCheckBox_disabledStyle = "\n  opacity: 0.5;\n  cursor: default;\n";
var StyledCheckBox_hoverStyle = (0,styled_components_browser_esm.css)([":hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:", ";}:hover{background-color:", ";}"], function (props) {
  var _props$theme$checkBox, _props$theme$checkBox2;

  return normalizeColor((_props$theme$checkBox = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox2 = _props$theme$checkBox.border) == null ? void 0 : _props$theme$checkBox2.color, props.theme);
}, function (props) {
  var _props$theme$checkBox3, _props$theme$checkBox4;

  return normalizeColor(!props.disabled && ((_props$theme$checkBox3 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox4 = _props$theme$checkBox3.background) == null ? void 0 : _props$theme$checkBox4.color), props.theme);
});
var StyledCheckBoxIcon = styled_components_browser_esm.default.svg.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxIcon",
  componentId: "sc-1dbk5ju-0"
})(["box-sizing:border-box;stroke-width:", ";stroke:", ";width:", ";height:", ";", ";"], function (props) {
  return props.theme.checkBox.check.thickness;
}, function (props) {
  return normalizeColor(props.theme.checkBox.color || 'control', props.theme);
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.size || props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.icon.extend;
});
StyledCheckBoxIcon.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxIcon.defaultProps, default_props_defaultProps);
var StyledCheckBoxContainer = styled_components_browser_esm.default.label.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxContainer",
  componentId: "sc-1dbk5ju-1"
})(["display:flex;flex-direction:row;align-items:", ";user-select:none;", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return props.theme.checkBox.label.align;
}, function (props) {
  return props.fillProp ? StyledCheckBox_fillStyle() : 'width: fit-content;';
}, function (props) {
  return (props.pad || props.theme.checkBox.pad) && edgeStyle('padding', props.pad || props.theme.checkBox.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.disabled && StyledCheckBox_disabledStyle;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, StyledCheckBox_hoverStyle, function (props) {
  var _props$theme$checkBox5, _props$theme$checkBox6, _props$theme$checkBox7, _props$theme$checkBox8;

  return props.focus && !props.focusIndicator && "\n    input:not([disabled]) + div,\n    input:not([disabled]) + span {\n      border-color: " + normalizeColor((_props$theme$checkBox5 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox6 = _props$theme$checkBox5.border) == null ? void 0 : _props$theme$checkBox6.color, props.theme) + ";\n    }\n     \n    background-color: " + normalizeColor(!props.disabled && ((_props$theme$checkBox7 = props.theme.checkBox.hover) == null ? void 0 : (_props$theme$checkBox8 = _props$theme$checkBox7.background) == null ? void 0 : _props$theme$checkBox8.color), props.theme) + ";";
}, function (props) {
  return props.theme.checkBox.extend;
});
StyledCheckBoxContainer.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxContainer.defaultProps, default_props_defaultProps);
var StyledCheckBoxInput = styled_components_browser_esm.default.input.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxInput",
  componentId: "sc-1dbk5ju-2"
})(["opacity:0;-moz-appearance:none;width:0;height:0;margin:0;", ":checked + span > span{left:calc( ", " - ", " );background:", ";}"], function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return normalizeColor(props.theme.checkBox.color || 'control', props.theme);
});
StyledCheckBoxInput.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxInput.defaultProps, default_props_defaultProps);
var StyledCheckBoxBox = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxBox",
  componentId: "sc-1dbk5ju-3"
})(["", ";", ";"], function (props) {
  return props.focus && props.focusIndicator && focusStyle();
}, function (props) {
  return props.theme.checkBox.check.extend;
});
StyledCheckBoxBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxBox.defaultProps, default_props_defaultProps);
var StyledCheckBoxToggle = styled_components_browser_esm.default.span.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxToggle",
  componentId: "sc-1dbk5ju-4"
})(["box-sizing:border-box;vertical-align:middle;display:inline-block;width:", ";height:", ";border:", " solid;border-color:", ";border-radius:", ";background-color:", ";", ";", ";"], function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return normalizeColor(props.theme.checkBox.border.color, props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.background ? normalizeColor(props.theme.checkBox.toggle.background, props.theme) : 'transparent';
}, function (props) {
  return props.focus && props.focusIndicator && focusStyle();
}, function (props) {
  return props.theme.checkBox.toggle.extend;
});
StyledCheckBoxToggle.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxToggle.defaultProps, default_props_defaultProps);
var StyledCheckBoxKnob = styled_components_browser_esm.default.span.withConfig({
  displayName: "StyledCheckBox__StyledCheckBoxKnob",
  componentId: "sc-1dbk5ju-5"
})(["box-sizing:border-box;position:relative;display:inherit;top:-", ";left:-", ";transition:all 0.3s;width:", ";height:", ";background:", ";border-radius:", ";", ";"], function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return normalizeColor(props.theme.checkBox.toggle.color, props.theme);
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.theme.checkBox.toggle.knob.extend;
});
StyledCheckBoxKnob.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxKnob.defaultProps, default_props_defaultProps);
var StyledCheckBox = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledCheckBox",
  componentId: "sc-1dbk5ju-6"
})(["flex-shrink:0;"]);
StyledCheckBox.defaultProps = {};
Object.setPrototypeOf(StyledCheckBox.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CheckBox/CheckBox.js
var CheckBox_excluded = ["a11yTitle", "aria-label", "checked", "defaultChecked", "disabled", "fill", "focus", "focusIndicator", "id", "label", "name", "onBlur", "onChange", "onFocus", "onMouseEnter", "onMouseLeave", "onMouseOut", "onMouseOver", "pad", "reverse", "toggle", "indeterminate"];

function CheckBox_extends() {
  CheckBox_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CheckBox_extends.apply(this, arguments);
}

function CheckBox_objectWithoutPropertiesLoose(source, excluded) {
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










var stopLabelClick = function stopLabelClick(event) {
  // prevents clicking on the label trigging the event twice
  // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
  if (event.target.type !== 'checkbox') {
    event.stopPropagation();
  }
};

var CheckBox = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var _ref2;

  var a11yTitle = _ref.a11yTitle,
      ariaLabel = _ref['aria-label'],
      checkedProp = _ref.checked,
      _ref$defaultChecked = _ref.defaultChecked,
      defaultChecked = _ref$defaultChecked === void 0 ? false : _ref$defaultChecked,
      disabled = _ref.disabled,
      fill = _ref.fill,
      focusProp = _ref.focus,
      _ref$focusIndicator = _ref.focusIndicator,
      focusIndicator = _ref$focusIndicator === void 0 ? true : _ref$focusIndicator,
      id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      _onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseLeave = _ref.onMouseLeave,
      _onMouseOut = _ref.onMouseOut,
      _onMouseOver = _ref.onMouseOver,
      pad = _ref.pad,
      reverse = _ref.reverse,
      toggle = _ref.toggle,
      indeterminate = _ref.indeterminate,
      rest = CheckBox_objectWithoutPropertiesLoose(_ref, CheckBox_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var formContext = (0,react.useContext)(FormContext);

  var _formContext$useFormI = formContext.useFormInput(name, checkedProp, defaultChecked),
      checked = _formContext$useFormI[0],
      setChecked = _formContext$useFormI[1];

  var _useState = (0,react.useState)(focusProp),
      focus = _useState[0],
      setFocus = _useState[1];

  (0,react.useEffect)(function () {
    return setFocus(focusProp);
  }, [focusProp]);
  (0,react.useEffect)(function () {
    if (checkedProp && indeterminate) {
      console.warn('Checkbox cannot be "checked" and "indeterminate" at the same time.');
    }

    if (toggle && indeterminate) {
      console.warn('Checkbox of type toggle does not have "indeterminate" state.');
    }
  }, [checkedProp, toggle, indeterminate]);
  var themeableProps = {
    checked: checked,
    disabled: disabled,
    focus: focus,
    // when contained in a FormField, focusIndicator = false,
    // so that the FormField has focus style. However, we still
    // need to visually indicate when a CheckBox is active.
    // If focus = true but focusIndicator = false,
    // we will apply the hover treament.
    focusIndicator: focusIndicator,
    reverse: reverse,
    toggle: toggle,
    indeterminate: indeterminate
  };
  var hidden;

  if (disabled && checked) {
    hidden = /*#__PURE__*/react.createElement("input", {
      name: name,
      type: "hidden",
      value: "true"
    });
  }

  var _theme$checkBox$icons = theme.checkBox.icons,
      CheckedIcon = _theme$checkBox$icons.checked,
      IndeterminateIcon = _theme$checkBox$icons.indeterminate;
  var borderColor = normalizeColor(theme.checkBox.border.color, theme);

  if (checked) {
    borderColor = normalizeColor(theme.checkBox.color || 'control', theme);
  }

  var visual = toggle ? /*#__PURE__*/react.createElement(StyledCheckBoxToggle, themeableProps, /*#__PURE__*/react.createElement(StyledCheckBoxKnob, themeableProps)) : /*#__PURE__*/react.createElement(StyledCheckBoxBox, CheckBox_extends({
    as: BoxWrapper,
    align: "center",
    justify: "center",
    width: theme.checkBox.size,
    height: theme.checkBox.size,
    border: {
      size: theme.checkBox.border.width,
      color: borderColor
    },
    round: theme.checkBox.check.radius
  }, themeableProps), !indeterminate && checked && (CheckedIcon ? /*#__PURE__*/react.createElement(CheckedIcon, {
    theme: theme,
    as: StyledCheckBoxIcon
  }) : /*#__PURE__*/react.createElement(StyledCheckBoxIcon, CheckBox_extends({
    theme: theme,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet"
  }, themeableProps), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    d: "M6,11.3 L10.3,16 L18,6.2"
  }))), !checked && indeterminate && (IndeterminateIcon ? /*#__PURE__*/react.createElement(IndeterminateIcon, {
    theme: theme,
    as: StyledCheckBoxIcon
  }) : /*#__PURE__*/react.createElement(StyledCheckBoxIcon, CheckBox_extends({
    theme: theme,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet"
  }, themeableProps), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    d: "M6,12 L18,12"
  }))));
  var side = reverse ? 'left' : 'right';
  var checkBoxNode = /*#__PURE__*/react.createElement(StyledCheckBox, CheckBox_extends({
    as: BoxWrapper,
    align: "center",
    justify: "center",
    margin: label && (_ref2 = {}, _ref2[side] = theme.checkBox.gap || 'small', _ref2)
  }, themeableProps), /*#__PURE__*/react.createElement(StyledCheckBoxInput, CheckBox_extends({}, rest, {
    ref: ref,
    type: "checkbox"
  }, removeUndefined({
    id: id,
    name: name,
    checked: checked,
    disabled: disabled
  }), themeableProps, {
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (_onBlur) _onBlur(event);
    },
    onChange: function onChange(event) {
      setChecked(event.target.checked);
      if (_onChange) _onChange(event);
    }
  })), visual, hidden);
  var normalizedLabel = typeof label === 'string' ? /*#__PURE__*/react.createElement("span", null, label) : label;
  var first = reverse ? normalizedLabel : checkBoxNode;
  var second = reverse ? checkBoxNode : normalizedLabel;
  return /*#__PURE__*/react.createElement(StyledCheckBoxContainer, CheckBox_extends({
    "aria-label": ariaLabel || a11yTitle,
    fillProp: fill,
    reverse: reverse
  }, removeUndefined({
    htmlFor: id,
    disabled: disabled
  }), {
    checked: checked,
    onClick: stopLabelClick,
    pad: pad,
    onMouseEnter: function onMouseEnter(event) {
      return _onMouseEnter == null ? void 0 : _onMouseEnter(event);
    },
    onMouseOver: function onMouseOver(event) {
      return _onMouseOver == null ? void 0 : _onMouseOver(event);
    },
    onMouseLeave: function onMouseLeave(event) {
      return _onMouseLeave == null ? void 0 : _onMouseLeave(event);
    },
    onMouseOut: function onMouseOut(event) {
      return _onMouseOut == null ? void 0 : _onMouseOut(event);
    }
  }, themeableProps), first, second);
});
CheckBox.displayName = 'CheckBox';
var CheckBoxDoc;

if (false) {}

var CheckBoxWrapper = CheckBoxDoc || CheckBox;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CheckBoxGroup/StyledCheckBoxGroup.js



var StyledCheckBoxGroup = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "StyledCheckBoxGroup",
  componentId: "sc-2nhc5d-0"
})(["", ""], function (props) {
  return props.theme.checkBoxGroup && props.theme.checkBoxGroup.container && props.theme.checkBoxGroup.container.extend;
});
StyledCheckBoxGroup.defaultProps = {};
Object.setPrototypeOf(StyledCheckBoxGroup.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CheckBoxGroup/CheckBoxGroup.js
var CheckBoxGroup_excluded = ["value", "disabled", "focusIndicator", "gap", "labelKey", "valueKey", "onChange", "options", "name"],
    _excluded2 = ["value"];

function CheckBoxGroup_extends() {
  CheckBoxGroup_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return CheckBoxGroup_extends.apply(this, arguments);
}

function CheckBoxGroup_objectWithoutPropertiesLoose(source, excluded) {
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






var CheckBoxGroup = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var valueProp = _ref.value,
      disabledProp = _ref.disabled,
      _ref$focusIndicator = _ref.focusIndicator,
      focusIndicator = _ref$focusIndicator === void 0 ? true : _ref$focusIndicator,
      gap = _ref.gap,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey,
      onChange = _ref.onChange,
      optionsProp = _ref.options,
      name = _ref.name,
      rest = CheckBoxGroup_objectWithoutPropertiesLoose(_ref, CheckBoxGroup_excluded);

  var formContext = (0,react.useContext)(FormContext);
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || defaultProps.theme; // In case option is a string, normalize it to be an object

  var options = optionsProp.map(function (option) {
    return typeof option === 'string' ? {
      disabled: disabledProp,
      value: option,
      label: option
    } : option;
  }); // 'value' is an array of checked valueKeys

  var _formContext$useFormI = formContext.useFormInput(name, valueProp, []),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1]; // Logic is necessary to maintain a proper data structure for Form logic


  var onCheckBoxChange = function onCheckBoxChange(event, optionValue, option) {
    // deep copy of value
    var nextValue = JSON.parse(JSON.stringify(value)) || [];
    var optionIndex = nextValue.indexOf(optionValue); // If the value option isn't in the array, add it.
    // Otherwise, remove it.

    if (optionIndex < 0) nextValue.push(optionValue);else nextValue.splice(optionIndex, 1);
    setValue(nextValue); // Similar functionality to Select onChange()

    if (onChange) {
      event.persist(); // extract from React synthetic event pool

      var adjustedEvent = event;
      adjustedEvent.value = nextValue;
      adjustedEvent.option = option;
      onChange(adjustedEvent);
    }
  };

  return /*#__PURE__*/react.createElement(StyledCheckBoxGroup, CheckBoxGroup_extends({
    ref: ref,
    role: "group"
  }, theme.checkBoxGroup.container, {
    gap: gap || (theme.checkBoxGroup.container && theme.checkBoxGroup.container.gap ? theme.checkBoxGroup.container.gap : 'small') // consistent with RadioButtonGroup default

  }, rest), options.map(function (option) {
    var optionValue = option.value;
    var label = labelKey ? option[labelKey] : option.label;
    var valueOption = valueKey ? option[valueKey] : optionValue;
    var checked = value.indexOf(valueOption) >= 0;
    var disabled = disabledProp || option.disabled;
    var key = label + "-" + valueOption;
    if (option.checked) console.warn( // eslint-disable-next-line max-len
    "'checked' prop of an individual CheckBox shouldn't be used in a CheckBoxGroup component. Use the CheckBoxGroup 'value' prop instead."); // value shouldn't propagate the input field and the onChange option

    var omit = option.value,
        optionRest = CheckBoxGroup_objectWithoutPropertiesLoose(option, _excluded2);

    var optionProps = CheckBoxGroup_extends({}, optionRest, {
      label: label,
      disabled: disabled
    });

    return /*#__PURE__*/react.createElement(CheckBoxWrapper, CheckBoxGroup_extends({
      key: key
    }, optionProps, {
      disabled: disabled,
      checked: checked // when contained in a FormField, focusIndicator = false,
      // so that the FormField has focus style. However, we still
      // need to visually indicate when a CheckBox is active.
      // In CheckBox, if focus = true but focusIndicator = false,
      // we will apply the hover treament.
      ,
      focusIndicator: focusIndicator,
      label: label,
      onChange: function onChange(event) {
        return onCheckBoxChange(event, valueOption, optionProps);
      }
    }));
  }));
});
CheckBoxGroup.displayName = 'CheckBoxGroup';
var CheckBoxGroupDoc;

if (false) {}

var RadioButtonGroupWrapper = CheckBoxGroupDoc || CheckBoxGroup;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CheckBoxGroup/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Chart/StyledChart.js




var animateStyle = function animateStyle(_ref) {
  var theme = _ref.theme,
      typeProp = _ref.typeProp;
  var animateBounds;
  if (typeProp === 'line') // 200% allows the line to be squiggly
    animateBounds = ['stroke-dashoffset: 200%;', 'stroke-dashoffset: 0%;'];else if (typeProp === 'point') animateBounds = ['opacity: 0;', 'opacity: 1;'];else animateBounds = ['transform: scaleY(0);', 'transform: scaleY(1);'];
  return (0,styled_components_browser_esm.css)(["", " animation:", " ", " forwards;", ""], typeProp === 'line' && 'stroke-dasharray: 200%;', (0,styled_components_browser_esm.keyframes)(["from{", "}to{", "}"], animateBounds[0], animateBounds[1]), theme.global.animation.duration, (typeProp === 'bar' || typeProp === 'area') && 'transform-origin: center bottom 0;');
};

var StyledChart = styled_components_browser_esm.default.svg.withConfig({
  displayName: "StyledChart",
  componentId: "sc-1nae0gf-0"
})(["display:block;max-width:100%;overflow:visible;", " ", " ", ";"], genericStyles, function (props) {
  return props.animate && animateStyle(props);
}, function (props) {
  return props.theme.chart && props.theme.chart.extend;
});
StyledChart.defaultProps = {};
Object.setPrototypeOf(StyledChart.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Chart/utils.js
var normalizeValues = function normalizeValues(values) {
  return (values || []).map(function (value, index) {
    if (value === undefined) return {
      value: [index, undefined]
    };
    if (typeof value === 'number') return {
      value: [index, value]
    };
    if (Array.isArray(value)) return {
      value: value
    };
    return value;
  });
};
var normalizeBounds = function normalizeBounds(bounds, values) {
  var result = bounds;

  if (!result) {
    result = [[0, 1], [0, 1]];
    (values || []).forEach(function (value) {
      if (value.value[0] !== undefined) {
        result[0][0] = Math.min(result[0][0], value.value[0]);
        result[0][1] = Math.max(result[0][1], value.value[0]);
      }

      if (value.value[1] !== undefined) {
        result[1][0] = Math.min(result[1][0], value.value[1]);
        result[1][1] = Math.max(result[1][1], value.value[1]);
      }

      if (value.value[2] !== undefined) {
        result[1][0] = Math.min(result[1][0], value.value[2]);
        result[1][1] = Math.max(result[1][1], value.value[2]);
      }
    });
  }

  return result;
};
var areNormalizedValuesEquals = function areNormalizedValuesEquals(valuesX, valuesY) {
  console.warn("This function will be removed in the upcoming releases.\nPlease get in touch with us if you have concerns.");
  if (!valuesX || !valuesY) return false;
  if (valuesX.length !== valuesY.length) return false;
  if (valuesX.length === 0) return true;
  if (!valuesX[0].value || !valuesY[0].value) return false;
  return valuesX.every(function (_, i) {
    return valuesX[i].value.every(function (value, index) {
      return value === valuesY[i].value[index];
    });
  });
};
var areNormalizedBoundsEquals = function areNormalizedBoundsEquals(boundsX, boundsY) {
  console.warn("This function will be removed in the upcoming releases.\nPlease get in touch with us if you have concerns.");
  if (!boundsX || !boundsY) return false;
  if (boundsX.length !== boundsY.length || !(boundsX.length > 0)) return false;
  return boundsX.every(function (_, i) {
    return boundsX[i].every(function (value, index) {
      return value === boundsY[i][index];
    });
  });
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Chart/Chart.js
var Chart_excluded = ["a11yTitle", "bounds", "color", "dash", "gap", "id", "onClick", "onHover", "opacity", "overflow", "pad", "pattern", "point", "round", "size", "thickness", "type", "values"],
    Chart_excluded2 = ["color", "label", "onHover", "opacity", "thickness", "value"],
    _excluded3 = ["color", "label", "onHover", "opacity", "thickness", "value"];

function Chart_extends() {
  Chart_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Chart_extends.apply(this, arguments);
}

function Chart_objectWithoutPropertiesLoose(source, excluded) {
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








var gradientMaskColor = '#ffffff'; // use constants so re-renders don't re-trigger effects

var defaultSize = {
  height: 'small',
  width: 'medium'
};
var defaultValues = [];
var Chart = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      propsBounds = _ref.bounds,
      color = _ref.color,
      dash = _ref.dash,
      gap = _ref.gap,
      id = _ref.id,
      onClick = _ref.onClick,
      onHover = _ref.onHover,
      propsOpacity = _ref.opacity,
      _ref$overflow = _ref.overflow,
      overflow = _ref$overflow === void 0 ? false : _ref$overflow,
      pad = _ref.pad,
      pattern = _ref.pattern,
      point = _ref.point,
      round = _ref.round,
      _ref$size = _ref.size,
      propsSize = _ref$size === void 0 ? defaultSize : _ref$size,
      _ref$thickness = _ref.thickness,
      thickness = _ref$thickness === void 0 ? 'medium' : _ref$thickness,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'bar' : _ref$type,
      _ref$values = _ref.values,
      propsValues = _ref$values === void 0 ? defaultValues : _ref$values,
      rest = Chart_objectWithoutPropertiesLoose(_ref, Chart_excluded);

  var containerRef = useForwardedRef(ref);
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme; // normalize variables

  var values = (0,react.useMemo)(function () {
    return normalizeValues(propsValues);
  }, [propsValues]);
  var bounds = (0,react.useMemo)(function () {
    return normalizeBounds(propsBounds, values);
  }, [propsBounds, values]);
  var strokeWidth = (0,react.useMemo)(function () {
    return parseMetricToNum(theme.global.edgeSize[thickness] || thickness);
  }, [theme.global.edgeSize, thickness]);
  var inset = (0,react.useMemo)(function () {
    var result = [0, 0, 0, 0];

    if (pad) {
      if (pad.horizontal) {
        var padSize = parseMetricToNum(theme.global.edgeSize[pad.horizontal]);
        result[0] += padSize;
        result[2] += padSize;
      }

      if (pad.vertical) {
        var _padSize = parseMetricToNum(theme.global.edgeSize[pad.vertical]);

        result[1] += _padSize;
        result[3] += _padSize;
      }

      if (typeof pad === 'string') {
        var _padSize2 = parseMetricToNum(theme.global.edgeSize[pad]);

        result = [_padSize2, _padSize2, _padSize2, _padSize2];
      }
    }

    return result;
  }, [pad, theme.global.edgeSize]);
  var strokeDasharray = (0,react.useMemo)(function () {
    if (dash) {
      if (round) return strokeWidth + " " + strokeWidth * 1.5;
      return strokeWidth * 2 + " " + strokeWidth / 2;
    }

    return undefined;
  }, [dash, round, strokeWidth]); // potentially dynamic sizing

  var _useState = (0,react.useState)([0, 0]),
      containerSize = _useState[0],
      setContainerSize = _useState[1];

  var needContainerSize = (0,react.useMemo)(function () {
    return propsSize && (propsSize === 'full' || propsSize === 'fill' || propsSize.height === 'full' || propsSize.height === 'fill' || propsSize.width === 'full' || propsSize.width === 'fill');
  }, [propsSize]);
  var size = (0,react.useMemo)(function () {
    var gapWidth = gap ? parseMetricToNum(theme.global.edgeSize[gap] || gap) : strokeWidth; // autoWidth is how wide we'd pefer

    var autoWidth = strokeWidth * values.length + (values.length - 1) * gapWidth;
    var sizeWidth = typeof propsSize === 'string' ? propsSize : propsSize.width || defaultSize.width;
    var width;

    if (sizeWidth === 'full' || sizeWidth === 'fill') {
      width = containerSize[0];
    } else if (sizeWidth === 'auto') {
      width = autoWidth;
    } else {
      width = parseMetricToNum(theme.global.size[sizeWidth] || sizeWidth);
    }

    var sizeHeight = typeof propsSize === 'string' ? propsSize : propsSize.height || defaultSize.height;
    var height;

    if (sizeHeight === 'full' || sizeHeight === 'fill') {
      height = containerSize[1];
    } else {
      height = parseMetricToNum(theme.global.size[sizeHeight] || sizeHeight);
    }

    return [width, height];
  }, [containerSize, gap, propsSize, strokeWidth, theme.global.edgeSize, theme.global.size, values]);
  var scale = (0,react.useMemo)(function () {
    return [(size[0] - (inset[0] + inset[2])) / (bounds[0][1] - bounds[0][0]), (size[1] - (inset[1] + inset[3])) / (bounds[1][1] - bounds[1][0])];
  }, [bounds, inset, size]);
  var viewBounds = (0,react.useMemo)(function () {
    return overflow ? [0, 0, size[0], size[1]] : [-(strokeWidth / 2), -(strokeWidth / 2), size[0] + strokeWidth, size[1] + strokeWidth];
  }, [overflow, size, strokeWidth]); // set container size when we get ref or when size changes

  useLayoutEffect(function () {
    if (containerRef.current && needContainerSize) {
      var containerNode = containerRef.current;

      if (containerNode) {
        var parentNode = containerNode.parentNode;

        if (parentNode) {
          var rect = parentNode.getBoundingClientRect();

          if (rect.width !== containerSize[0] || rect.height !== containerSize[1]) {
            setContainerSize([rect.width, rect.height]);
          }
        }
      }
    }
  }, [containerRef, containerSize, needContainerSize]); // container size, if needed

  (0,react.useEffect)(function () {
    var onResize = function onResize() {
      var parentNode = containerRef.current.parentNode;
      var rect = parentNode.getBoundingClientRect();
      setContainerSize([rect.width, rect.height]);
    };

    if (needContainerSize) {
      window.addEventListener('resize', onResize);
      return function () {
        return window.removeEventListener('resize', onResize);
      };
    }

    return undefined;
  }, [containerRef, needContainerSize]); // Converts values to drawing coordinates.
  // Takes into account the bounds, any inset, and the scale.

  var valueToCoordinate = function valueToCoordinate(xValue, yValue) {
    return [(xValue - bounds[0][0]) * scale[0] + inset[0], size[1] - ((yValue - bounds[1][0]) * scale[1] + inset[1])];
  };

  var useGradient = color && Array.isArray(color);
  var patternId;

  function getOpacity(valueOpacity) {
    return valueOpacity && theme.global.opacity[valueOpacity] || ( // eslint-disable-next-line no-nested-ternary
    valueOpacity === true ? theme.global.opacity.medium : valueOpacity === false ? undefined : valueOpacity);
  }

  var renderBars = function renderBars() {
    return (values || []).filter(function (_ref2) {
      var value = _ref2.value;
      return value[1] !== undefined;
    }).map(function (valueArg, index) {
      var valueColor = valueArg.color,
          label = valueArg.label,
          valueOnHover = valueArg.onHover,
          valueOpacity = valueArg.opacity,
          valueThickness = valueArg.thickness,
          value = valueArg.value,
          valueRest = Chart_objectWithoutPropertiesLoose(valueArg, Chart_excluded2);

      var key = "p-" + index; // Math.min/max are to handle negative values

      var bottom = value.length === 2 ? Math.min(Math.max(0, bounds[1][0]), value[1]) : Math.min(value[1], value[2]);
      var top = value.length === 2 ? Math.max(Math.min(0, bounds[1][1]), value[1]) : Math.max(value[1], value[2]);
      var d = "M " + valueToCoordinate(value[0], bottom).join(',') + (" L " + valueToCoordinate(value[0], top).join(','));
      var hoverProps;

      if (valueOnHover) {
        hoverProps = {
          onMouseOver: function onMouseOver() {
            return valueOnHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return valueOnHover(false);
          }
        };
      }

      var clickProps;

      if (onClick) {
        clickProps = {
          onClick: onClick
        };
      }

      return /*#__PURE__*/react.createElement("g", {
        key: key,
        fill: "none",
        stroke: valueColor ? normalizeColor(valueColor, theme) : undefined,
        strokeWidth: valueThickness ? parseMetricToNum(theme.global.edgeSize[valueThickness] || valueThickness) : undefined,
        opacity: getOpacity(valueOpacity)
      }, /*#__PURE__*/react.createElement("title", null, label), /*#__PURE__*/react.createElement("path", Chart_extends({
        d: d
      }, hoverProps, clickProps, valueRest, {
        strokeDasharray: strokeDasharray
      })));
    });
  };

  var renderLine = function renderLine() {
    var d = '';
    var d2 = '';
    (values || []).filter(function (_ref3) {
      var value = _ref3.value;
      return value[1] !== undefined;
    }).forEach(function (_ref4) {
      var value = _ref4.value;
      d += (d ? ' L' : 'M') + " " + valueToCoordinate(value[0], value[1]).join(',');

      if (value[2] !== undefined) {
        d2 += (d2 ? ' L' : 'M') + " " + valueToCoordinate(value[0], value[2]).join(',');
      }
    });
    var hoverProps;

    if (onHover) {
      hoverProps = {
        onMouseOver: function onMouseOver() {
          return onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(false);
        }
      };
    }

    var clickProps;

    if (onClick) {
      clickProps = {
        onClick: onClick
      };
    }

    return /*#__PURE__*/react.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/react.createElement("path", Chart_extends({
      d: d
    }, hoverProps, clickProps, {
      strokeDasharray: strokeDasharray
    })), d2 && /*#__PURE__*/react.createElement("path", Chart_extends({
      d: d2
    }, hoverProps, clickProps, {
      strokeDasharray: strokeDasharray
    })));
  };

  var renderArea = function renderArea() {
    var d = '';
    (values || []).filter(function (_ref5) {
      var value = _ref5.value;
      return value[1] !== undefined;
    }).forEach(function (_ref6, index) {
      var value = _ref6.value;
      d += (!index ? 'M' : ' L') + " " + valueToCoordinate(value[0], value[value.length === 2 ? 1 : 2]).join(',');
    });
    (values || []).filter(function (_ref7) {
      var value = _ref7.value;
      return value[1] !== undefined;
    }).reverse().forEach(function (_ref8) {
      var value = _ref8.value;
      d += " L " + valueToCoordinate(value[0], // Math.max() is to account for value[1] being negative
      value.length === 2 ? Math.max(0, bounds[1][0]) : value[1]).join(',');
    });

    if (d.length > 0) {
      d += ' Z';
    }

    var hoverProps;

    if (onHover) {
      hoverProps = {
        onMouseOver: function onMouseOver() {
          return onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(false);
        }
      };
    }

    var clickProps;

    if (onClick) {
      clickProps = {
        onClick: onClick
      };
    }

    patternId = pattern && pattern + "-" + id + "-pattern";
    return /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", Chart_extends({
      d: d,
      fill: patternId ? "url(#" + patternId + ")" : undefined
    }, hoverProps, clickProps)));
  };

  var renderPoints = function renderPoints() {
    return (values || []).filter(function (_ref9) {
      var value = _ref9.value;
      return value[1] !== undefined;
    }).map(function (valueArg, index) {
      var valueColor = valueArg.color,
          label = valueArg.label,
          valueOnHover = valueArg.onHover,
          valueOpacity = valueArg.opacity,
          valueThickness = valueArg.thickness,
          value = valueArg.value,
          valueRest = Chart_objectWithoutPropertiesLoose(valueArg, _excluded3);

      var key = "p-" + index;
      var hoverProps;

      if (valueOnHover) {
        hoverProps = {
          onMouseOver: function onMouseOver() {
            return valueOnHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return valueOnHover(false);
          }
        };
      }

      var clickProps;

      if (onClick) {
        clickProps = {
          onClick: onClick
        };
      }

      var width = valueThickness ? parseMetricToNum(theme.global.edgeSize[valueThickness] || valueThickness) : strokeWidth;

      var renderPoint = function renderPoint(valueX, valueY) {
        var props = Chart_extends({}, hoverProps, clickProps, valueRest);

        var _valueToCoordinate = valueToCoordinate(valueX, valueY),
            cx = _valueToCoordinate[0],
            cy = _valueToCoordinate[1];

        var off = width / 2;
        if (point === 'circle' || !point && round) return /*#__PURE__*/react.createElement("circle", Chart_extends({
          cx: cx,
          cy: cy,
          r: off
        }, props));
        var d;
        if (point === 'diamond') d = "M " + cx + " " + (cy - off) + " L " + (cx + off) + " " + cy + " L " + cx + " " + (cy + off) + " L " + (cx - off) + " " + cy + " Z";else if (point === 'star') {
          var off1 = off / 3;
          var off2 = off1 * 2;
          d = "M " + cx + " " + (cy - off) + " L " + (cx - off2) + " " + (cy + off) + " L " + (cx + off) + " " + (cy - off1) + " L " + (cx - off) + " " + (cy - off1) + " L " + (cx + off2) + " " + (cy + off) + " Z";
        } else if (point === 'triangle') d = "M " + cx + " " + (cy - off) + " L " + (cx + off) + " " + (cy + off) + " L " + (cx - off) + " " + (cy + off) + " Z";else if (point === 'triangleDown') d = "M " + (cx - off) + " " + (cy - off) + " L " + (cx + off) + " " + (cy - off) + " L " + cx + " " + (cy + off) + " Z"; // square
        else d = "M " + (cx - off) + " " + (cy - off) + " L " + (cx + off) + " " + (cy - off) + " L " + (cx + off) + " " + (cy + off) + " L " + (cx - off) + " " + (cy + off) + " Z";
        return /*#__PURE__*/react.createElement("path", {
          d: d
        });
      };

      return /*#__PURE__*/react.createElement("g", {
        key: key,
        stroke: "none",
        fill: valueColor ? normalizeColor(valueColor, theme) : undefined,
        opacity: getOpacity(valueOpacity)
      }, /*#__PURE__*/react.createElement("title", null, label), renderPoint(value[0], value[1]), value[2] !== undefined && renderPoint(value[0], value[2]));
    });
  };

  var contents;

  if (type === 'bar') {
    contents = renderBars();
  } else if (type === 'line') {
    contents = renderLine();
  } else if (type === 'area') {
    contents = renderArea();
  } else if (type === 'point') {
    contents = renderPoints();
  }

  var viewBox = viewBounds.join(' ');
  var colorName;

  if (!useGradient) {
    if (color && color.color) colorName = color.color;else if (color) colorName = color;else if (theme.chart && theme.chart.color) colorName = theme.chart.color;
  }

  var opacity;

  if (propsOpacity === true) {
    opacity = theme.global.opacity.medium;
  } else if (propsOpacity) {
    opacity = theme.global.opacity[propsOpacity] ? theme.global.opacity[propsOpacity] : propsOpacity;
  } else if (color && color.opacity) {
    opacity = theme.global.opacity[color.opacity] ? theme.global.opacity[color.opacity] : color.opacity;
  } else opacity = undefined;

  var stroke;

  if (type !== 'point') {
    if (useGradient) stroke = gradientMaskColor;else stroke = normalizeColor(colorName, theme);
  } else stroke = 'none';

  var fill;

  if (type === 'point' || type === 'area') {
    if (useGradient) fill = gradientMaskColor;else fill = normalizeColor(colorName, theme);
  } else fill = 'none';

  var drawing = /*#__PURE__*/react.createElement("g", {
    stroke: stroke,
    strokeWidth: type !== 'point' && (type !== 'area' || !pattern) ? strokeWidth : undefined,
    fill: fill,
    strokeLinecap: round ? 'round' : 'butt',
    strokeLinejoin: round ? 'round' : 'miter',
    opacity: opacity
  }, contents);
  var defs = [];
  var gradientRect;

  if (useGradient && size[1]) {
    var uniqueGradientId = color.map(function (element) {
      return element.color;
    }).join('-');
    var gradientId = uniqueGradientId + "-" + id + "-gradient";
    var maskId = uniqueGradientId + "-" + id + "-mask";
    defs.push( /*#__PURE__*/react.createElement("linearGradient", {
      key: "gradientId",
      id: gradientId,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 1
    }, color.slice(0).sort(function (c1, c2) {
      return c2.value - c1.value;
    }).map(function (_ref10) {
      var value = _ref10.value,
          gradientColor = _ref10.color;
      return /*#__PURE__*/react.createElement("stop", {
        key: value,
        offset: // TODO:
        (size[1] - (value - bounds[1][0]) * scale[1]) / size[1],
        stopColor: normalizeColor(gradientColor, theme)
      });
    })));
    defs.push( /*#__PURE__*/react.createElement("mask", {
      key: "mask",
      id: maskId
    }, drawing));
    gradientRect = /*#__PURE__*/react.createElement("rect", {
      x: viewBounds[0],
      y: viewBounds[1],
      width: viewBounds[2],
      height: viewBounds[3],
      fill: "url(#" + gradientId + ")",
      mask: "url(#" + maskId + ")"
    });
  } else if (patternId) {
    var content;
    var diagonal = pattern.match(/Diagonal/);
    var unit = diagonal ? strokeWidth * Math.sqrt(2) : strokeWidth;
    var half = unit / 2;

    var _double = unit * 2;

    var pColor = normalizeColor(colorName, theme);

    if (pattern === 'squares') {
      content = /*#__PURE__*/react.createElement("rect", {
        x: half,
        y: half,
        width: unit,
        height: unit,
        fill: pColor
      });
    } else if (pattern === 'circles') {
      content = /*#__PURE__*/react.createElement("circle", {
        cx: unit,
        cy: unit,
        r: half,
        fill: pColor
      });
    } else if (pattern === 'stripesHorizontal') {
      content = /*#__PURE__*/react.createElement("path", {
        d: "M 0 " + unit + " L " + _double + " " + unit,
        stroke: pColor,
        strokeWidth: strokeWidth
      });
    } else if (pattern === 'stripesVertical') {
      content = /*#__PURE__*/react.createElement("path", {
        d: "M " + unit + " 0 L " + unit + " " + _double,
        stroke: pColor,
        strokeWidth: strokeWidth
      });
    } else if (pattern === 'stripesDiagonalDown') {
      content = /*#__PURE__*/react.createElement("path", {
        d: "M " + half + " " + -half + " L " + (_double + half) + " " + (_double - half) + "\n              M " + -half + " " + half + " L " + (_double - half) + " " + (_double + half),
        stroke: pColor,
        strokeWidth: strokeWidth
      });
    } else if (pattern === 'stripesDiagonalUp') {
      content = /*#__PURE__*/react.createElement("path", {
        d: "M " + -half + " " + (_double - half) + " L " + (_double - half) + " " + -half + "\n              M " + half + " " + (_double + half) + " L " + (_double + half) + " " + half,
        stroke: pColor,
        strokeWidth: strokeWidth
      });
    }

    defs.push( /*#__PURE__*/react.createElement("pattern", {
      key: patternId,
      id: patternId,
      width: _double,
      height: _double,
      patternUnits: "userSpaceOnUse"
    }, content));
  }

  return /*#__PURE__*/react.createElement(StyledChart, Chart_extends({
    ref: containerRef,
    id: id,
    "aria-label": a11yTitle,
    viewBox: viewBox,
    preserveAspectRatio: "none",
    width: size === 'full' ? '100%' : size[0],
    height: size === 'full' ? '100%' : size[1],
    typeProp: type // prevent adding to DOM

  }, rest), defs.length && /*#__PURE__*/react.createElement("defs", null, defs), useGradient ? gradientRect : drawing);
});
Chart.displayName = 'Chart';
var ChartDoc;

if (false) {}

var ChartWrapper = ChartDoc || Chart;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Chart/calcs.js

var thicknessPad = {
  xlarge: 'large',
  large: 'medium',
  medium: 'small',
  small: 'xsmall',
  xsmall: 'xxsmall'
};
var round = function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

var alignMax = function alignMax(value, interval) {
  if (value > 0) return value - value % interval + interval;
  if (value < 0) return value + value % interval;
  return value;
};

var alignMin = function alignMin(value, interval) {
  if (value > 0) return value - value % interval;
  if (value < 0) return value - value % interval - interval;
  return value;
};

var calcBounds = function calcBounds(values, options) {
  if (options === void 0) {
    options = {};
  } // coarseness influences the rounding of the bounds, the smaller the
  // number, the more the bounds will be rounded. e.g. 111 -> 110 -> 100
  // Normalize to an array. Backwards compatible has no coarseness for x-axis


  var coarseness = Array.isArray(options.coarseness) && options.coarseness || options.coarseness && [undefined, options.coarseness] || [undefined, 5]; // the number of steps is one less than the number of labels

  var steps = options.steps || [1, 1];
  var calcValues = normalizeValues(values || []); // min and max values

  var minX;
  var maxX;
  var minY;
  var maxY;

  if (calcValues.length) {
    // Calculate the max and min values.
    calcValues.filter(function (value) {
      return value !== undefined;
    }).forEach(function (value) {
      var x = value.value[0];

      if (x !== undefined) {
        minX = minX === undefined ? x : Math.min(minX, x);
        maxX = maxX === undefined ? x : Math.max(maxX, x);
      }

      var y = value.value[1];

      if (y !== undefined) {
        minY = minY === undefined ? y : Math.min(minY, y);
        maxY = maxY === undefined ? y : Math.max(maxY, y);
      } // handle ranges of values


      var y2 = value.value[2];

      if (y2 !== undefined) {
        minY = Math.min(minY, y2);
        maxY = Math.max(maxY, y2);
      }
    }); // when max === min, offset them so we can show something

    if (maxX === minX) {
      if (maxX > 0) minX = maxX - 1;else maxX = minX + 1;
    }

    if (maxY === minY) {
      if (maxY > 0) minY = maxY - 1;else maxY = minY + 1;
    } // Calculate some reasonable bounds based on the max and min values.
    // This is so values like 87342.12 don't end up being displayed as the
    // graph axis labels.


    var cX = coarseness[0],
        cY = coarseness[1];

    if (cX) {
      var deltaX = maxX - minX;
      var intervalX = Number.parseFloat((deltaX / cX).toPrecision(1));
      minX = alignMin(minX, intervalX);
      maxX = alignMax(maxX, intervalX);
    }

    if (cY) {
      var deltaY = maxY - minY;
      var intervalY = Number.parseFloat((deltaY / cY).toPrecision(1));
      minY = alignMin(minY, intervalY);
      maxY = alignMax(maxY, intervalY);
    }

    if (minY < 0 && maxY > 0 && Math.abs(minY) !== Math.abs(maxY)) {
      // Adjust min and max when crossing 0 to ensure 0 will be shown on
      // the Y axis based on the number of steps.
      // const ratio = Math.abs(max) / Math.abs(min);
      var stepInterval = (maxY - minY) / steps[1];
      var minSteps = minY / stepInterval;
      var maxSteps = maxY / stepInterval;

      if (Math.abs(minSteps) < Math.abs(maxSteps)) {
        stepInterval = maxY / Math.floor(maxSteps);
        maxY = stepInterval * Math.floor(maxSteps);
        minY = stepInterval * Math.floor(minSteps);
      } else {
        stepInterval = Math.abs(minY / Math.ceil(minSteps));
        minY = stepInterval * Math.ceil(minSteps);
        maxY = stepInterval * Math.ceil(maxSteps);
      }
    }
  }

  var bounds;
  if (calcValues.length) bounds = [[minX, maxX], [minY, maxY]];else bounds = [[], []];
  return bounds;
};
var calcs = function calcs(values, options) {
  if (values === void 0) {
    values = [];
  }

  if (options === void 0) {
    options = {};
  } // the number of steps is one less than the number of labels


  var steps = options.steps || [1, 1];
  var bounds = options.bounds || calcBounds(values, options);
  if (options.min !== undefined) bounds[1][0] = options.min;
  if (options.max !== undefined) bounds[1][1] = options.max;
  var dimensions = [round(bounds[0][1] - bounds[0][0], 2), round(bounds[1][1] - bounds[1][0], 2)]; // Calculate x and y axis values across the specfied number of steps.

  var yAxis = [];
  var y = bounds[1][1]; // To deal with javascript math limitations, round the step with 4 decimal
  // places and then push the values with 2 decimal places

  var yStepInterval = round(dimensions[1] / steps[1], 4);

  while (round(y, 2) >= bounds[1][0]) {
    yAxis.push(round(y, 2));
    y -= yStepInterval;
  }

  var xAxis = [];
  var x = bounds[0][0];
  var xStepInterval = round(dimensions[0] / steps[0], 4);

  while (round(x, 2) <= bounds[0][1]) {
    xAxis.push(round(x, 2));
    x += xStepInterval;
  }

  var _options = options,
      thickness = _options.thickness;

  if (!thickness) {
    // Set bar thickness based on number of values being rendered.
    // Someday, it would be better to include the actual rendered size.
    // These values were emirically determined, trying to balance visibility
    // and overlap across resolutions.
    if (values.length < 5) {
      thickness = 'xlarge';
    } else if (values.length < 11) {
      thickness = 'large';
    } else if (values.length < 21) {
      thickness = 'medium';
    } else if (values.length < 61) {
      thickness = 'small';
    } else if (values.length < 121) {
      thickness = 'xsmall';
    } else {
      thickness = 'hair';
    }
  }

  var pad = thicknessPad[thickness];
  return {
    axis: [xAxis, yAxis],
    bounds: bounds,
    dimensions: dimensions,
    pad: pad,
    thickness: thickness
  };
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Chart/index.js


;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/CheckBox/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Clock/StyledClock.js



var StyledHour = styled_components_browser_esm.default.line.withConfig({
  displayName: "StyledClock__StyledHour",
  componentId: "y4xw8s-0"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.hour.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.hour.color, props.theme);
});
StyledHour.defaultProps = {};
Object.setPrototypeOf(StyledHour.defaultProps, default_props_defaultProps);
var StyledMinute = styled_components_browser_esm.default.line.withConfig({
  displayName: "StyledClock__StyledMinute",
  componentId: "y4xw8s-1"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.minute.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.minute.color, props.theme);
});
StyledMinute.defaultProps = {};
Object.setPrototypeOf(StyledMinute.defaultProps, default_props_defaultProps);
var StyledSecond = styled_components_browser_esm.default.line.withConfig({
  displayName: "StyledClock__StyledSecond",
  componentId: "y4xw8s-2"
})(["stroke-width:", ";stroke:", ";transition:stroke 1s ease-out;"], function (props) {
  return props.theme.clock.analog.second.width;
}, function (props) {
  return normalizeColor(props.theme.clock.analog.second.color, props.theme);
});
StyledSecond.defaultProps = {};
Object.setPrototypeOf(StyledSecond.defaultProps, default_props_defaultProps);
var StyledAnalog = styled_components_browser_esm.default.svg.withConfig({
  displayName: "StyledClock__StyledAnalog",
  componentId: "y4xw8s-3"
})(["width:", ";height:", ";", " ", ";"], function (props) {
  return props.theme.clock.analog.size[props.size];
}, function (props) {
  return props.theme.clock.analog.size[props.size];
}, genericStyles, function (props) {
  return props.theme.clock.analog && props.theme.clock.analog.extend;
});
StyledAnalog.defaultProps = {};
Object.setPrototypeOf(StyledAnalog.defaultProps, default_props_defaultProps);

var StyledClock_sizeStyle = function sizeStyle(props) {
  // size is a combination of the size and height properties
  var size = props.size || 'medium';
  var data = props.theme.clock.digital.text[size] || {};
  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";"], data.size || props.theme.clock.digital.text.medium.size, data.height || props.theme.clock.digital.text.medium.height);
};

var StyledDigitalDigit = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledClock__StyledDigitalDigit",
  componentId: "y4xw8s-4"
})(["position:relative;width:0.8em;text-align:center;overflow:hidden;", ";"], function (props) {
  return StyledClock_sizeStyle(props);
});
StyledDigitalDigit.defaultProps = {};
Object.setPrototypeOf(StyledDigitalDigit.defaultProps, default_props_defaultProps);
var previousUp = (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(0);}100%{transform:translateY(-100%);}"]);
var previousDown = (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(0);}100%{transform:translateY(100%);}"]);
var StyledDigitalPrevious = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledClock__StyledDigitalPrevious",
  componentId: "y4xw8s-5"
})(["position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:", " 0.5s forwards;"], function (props) {
  return props.direction === 'down' ? previousDown : previousUp;
});
StyledDigitalPrevious.defaultProps = {};
Object.setPrototypeOf(StyledDigitalPrevious.defaultProps, default_props_defaultProps);
var nextUp = (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]);
var nextDown = (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]);
var StyledDigitalNext = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledClock__StyledDigitalNext",
  componentId: "y4xw8s-6"
})(["position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:", " 0.5s forwards;"], function (props) {
  return props.direction === 'down' ? nextDown : nextUp;
});
StyledDigitalNext.defaultProps = {};
Object.setPrototypeOf(StyledDigitalNext.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Clock/Analog.js
var Analog_excluded = ["elements", "precision"];

function Analog_extends() {
  Analog_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Analog_extends.apply(this, arguments);
}

function Analog_objectWithoutPropertiesLoose(source, excluded) {
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





 // this will serve both minutes and hours (360 / 6)

var ANGLE_UNIT = 6; // 360 / 12

var HOUR_ANGLE_UNIT = 30;

var getClockDimensions = function getClockDimensions(theme) {
  return {
    size: parseMetricToNum(theme.clock.analog.size.medium),
    secondSize: parseMetricToNum(theme.clock.analog.second.size),
    minuteSize: parseMetricToNum(theme.clock.analog.minute.size),
    hourSize: parseMetricToNum(theme.clock.analog.hour.size)
  };
};

var getClockState = function getClockState(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  var hour12 = hours > 12 ? hours - 12 : hours;
  var minuteAngle = minutes * ANGLE_UNIT;
  return {
    // offset hour angle by half of the minute angle so that it gets closer
    // to the next hour
    hourAngle: hour12 * HOUR_ANGLE_UNIT + minutes / 2,
    minuteAngle: minuteAngle,
    secondAngle: seconds * ANGLE_UNIT
  };
};

var Analog = /*#__PURE__*/(0,react.forwardRef)(function (_ref2, ref) {
  var elements = _ref2.elements,
      precision = _ref2.precision,
      rest = Analog_objectWithoutPropertiesLoose(_ref2, Analog_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useMemo = (0,react.useMemo)(function () {
    return getClockState(elements);
  }, [elements]),
      hourAngle = _useMemo.hourAngle,
      minuteAngle = _useMemo.minuteAngle,
      secondAngle = _useMemo.secondAngle;

  var _useMemo2 = (0,react.useMemo)(function () {
    return getClockDimensions(theme);
  }, [theme]),
      size = _useMemo2.size,
      secondSize = _useMemo2.secondSize,
      minuteSize = _useMemo2.minuteSize,
      hourSize = _useMemo2.hourSize;

  var halfSize = size / 2;
  var secondHand;

  if (precision === 'seconds') {
    secondHand = /*#__PURE__*/react.createElement(StyledSecond, {
      x1: halfSize,
      y1: halfSize,
      x2: halfSize,
      y2: secondSize,
      stroke: "#000000",
      strokeLinecap: theme.clock.analog.second.shape,
      style: {
        transform: "rotate(" + secondAngle + "deg)",
        transformOrigin: halfSize + "px " + halfSize + "px"
      }
    });
  }

  var minuteHand;

  if (precision === 'seconds' || precision === 'minutes') {
    minuteHand = /*#__PURE__*/react.createElement(StyledMinute, {
      x1: halfSize,
      y1: halfSize,
      x2: halfSize,
      y2: minuteSize,
      stroke: "#000000",
      strokeLinecap: theme.clock.analog.minute.shape,
      style: {
        transform: "rotate(" + minuteAngle + "deg)",
        transformOrigin: halfSize + "px " + halfSize + "px"
      }
    });
  }

  return /*#__PURE__*/react.createElement(StyledAnalog, Analog_extends({
    ref: ref,
    version: "1.1",
    width: size,
    height: size,
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 " + size + " " + size
  }, rest), secondHand, minuteHand, /*#__PURE__*/react.createElement(StyledHour, {
    x1: halfSize,
    y1: halfSize,
    x2: halfSize,
    y2: hourSize,
    stroke: "#000000",
    strokeLinecap: theme.clock.analog.hour.shape,
    style: {
      transform: "rotate(" + hourAngle + "deg)",
      transformOrigin: halfSize + "px " + halfSize + "px"
    }
  }));
});
Analog.displayName = 'Analog';

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Clock/Digital.js
var Digital_excluded = ["elements", "precision", "run", "size"];

function Digital_extends() {
  Digital_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Digital_extends.apply(this, arguments);
}

function Digital_objectWithoutPropertiesLoose(source, excluded) {
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





var Digit = function Digit(_ref) {
  var number = _ref.number,
      run = _ref.run,
      size = _ref.size;

  var _useState = (0,react.useState)(number),
      previous = _useState[0],
      setPrevious = _useState[1];

  var _useState2 = (0,react.useState)(),
      changing = _useState2[0],
      setChanging = _useState2[1];

  (0,react.useEffect)(function () {
    if (number !== previous) {
      setChanging(true);
      var timer = setTimeout(function () {
        setPrevious(number);
        setChanging(false);
      }, 900);
      return function () {
        return clearTimeout(timer);
      };
    }

    return undefined;
  }, [number, previous]);

  if (changing) {
    var direction = run === 'backward' ? 'down' : 'up';
    return /*#__PURE__*/react.createElement(StyledDigitalDigit, {
      size: size
    }, /*#__PURE__*/react.createElement(StyledDigitalPrevious, {
      direction: direction
    }, Math.floor(previous)), /*#__PURE__*/react.createElement(StyledDigitalNext, {
      direction: direction
    }, Math.floor(number)));
  }

  return /*#__PURE__*/react.createElement(StyledDigitalDigit, {
    size: size
  }, Math.floor(number));
};

var Element = function Element(_ref2) {
  var number = _ref2.number,
      run = _ref2.run,
      sep = _ref2.sep,
      size = _ref2.size;
  var tens = Math.floor(number / 10);
  var ones = number % 10;
  var result = [/*#__PURE__*/react.createElement(Digit, {
    key: "tens",
    run: run,
    size: size,
    number: tens
  }), /*#__PURE__*/react.createElement(Digit, {
    key: "ones",
    run: run,
    size: size,
    number: ones
  })];

  if (sep) {
    result.unshift( /*#__PURE__*/react.createElement(StyledDigitalDigit, {
      key: "sep",
      size: size
    }, ":"));
  }

  return result;
};

var Digital = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var elements = props.elements,
      precision = props.precision,
      run = props.run,
      size = props.size,
      rest = Digital_objectWithoutPropertiesLoose(props, Digital_excluded);

  var seconds;

  if (precision === 'seconds') {
    seconds = /*#__PURE__*/react.createElement(Element, {
      number: elements.seconds,
      run: run,
      size: size,
      sep: true
    });
  }

  var minutes;

  if (precision === 'minutes' || precision === 'seconds') {
    minutes = /*#__PURE__*/react.createElement(Element, {
      number: elements.minutes,
      run: run,
      size: size,
      sep: true
    });
  }

  return /*#__PURE__*/react.createElement(BoxWrapper, Digital_extends({
    ref: ref,
    direction: "row"
  }, rest), /*#__PURE__*/react.createElement(Element, {
    number: elements.hours12 || elements.hours,
    run: run,
    size: size
  }), minutes, seconds);
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Clock/Clock.js
var Clock_excluded = ["hourLimit", "onChange", "precision", "run", "size", "time", "type"];

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

function Clock_objectWithoutPropertiesLoose(source, excluded) {
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




var TIME_REGEXP = /T([0-9]{2}):([0-9]{2})(?::([0-9.,]{2,}))?/;
var DURATION_REGEXP = /^(-|\+)?P.*T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?$/;

var parseTime = function parseTime(time, hourLimit) {
  var result = {};

  if (time) {
    var match = DURATION_REGEXP.exec(time);

    if (match) {
      result.hours = parseFloat(match[2]);

      if (hourLimit === 12) {
        result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
      }

      result.minutes = parseFloat(match[3]) || 0;
      result.seconds = parseFloat(match[4]) || 0;
      result.duration = true;
    } else {
      match = TIME_REGEXP.exec(time);

      if (match) {
        result.hours = parseFloat(match[1]);

        if (hourLimit === 12) {
          result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
        }

        result.minutes = parseFloat(match[2]) || 0;
        result.seconds = parseFloat(match[3]) || 0;
      } else {
        console.error("Grommet Clock cannot parse '" + time + "'");
      }
    }
  } else {
    var date = new Date();
    result.hours = date.getHours();
    result.minutes = date.getMinutes();
    result.seconds = date.getSeconds();
  }

  return result;
};

var Clock = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var _ref$hourLimit = _ref.hourLimit,
      hourLimit = _ref$hourLimit === void 0 ? 24 : _ref$hourLimit,
      onChange = _ref.onChange,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? 'seconds' : _ref$precision,
      _ref$run = _ref.run,
      run = _ref$run === void 0 ? 'forward' : _ref$run,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      time = _ref.time,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'analog' : _ref$type,
      rest = Clock_objectWithoutPropertiesLoose(_ref, Clock_excluded);

  var _useState = (0,react.useState)(parseTime(time, hourLimit)),
      elements = _useState[0],
      setElements = _useState[1];

  (0,react.useEffect)(function () {
    return setElements(parseTime(time, hourLimit));
  }, [hourLimit, time]);
  (0,react.useEffect)(function () {
    var atDurationEnd = run === 'backward' && elements.duration && !elements.hours && !elements.minutes && !elements.seconds;

    if (run && !atDurationEnd) {
      // set the interval time based on the precision
      var interval = 1000;
      var increment = 'seconds';

      if (precision !== 'seconds' && elements.seconds === 0) {
        interval *= 60;
        increment = 'minutes';

        if (precision !== 'minutes' && elements.minutes === 0) {
          interval *= 60;
          increment = 'hours';
        }
      }

      var timer = setInterval(function () {
        var nextElements = Clock_extends({}, elements); // adjust time based on precision


        if (increment === 'seconds') {
          if (run === 'backward') {
            nextElements.seconds -= 1;
          } else {
            nextElements.seconds += 1;
          }
        } else if (increment === 'minutes') {
          if (run === 'backward') {
            nextElements.minutes -= 1;
          } else {
            nextElements.minutes += 1;
          }
        } else if (increment === 'hours') {
          if (run === 'backward') {
            nextElements.hours -= 1;
          } else {
            nextElements.hours += 1;
          }
        } // deal with overflows


        if (nextElements.seconds >= 60) {
          nextElements.minutes += Math.floor(nextElements.seconds / 60);
          nextElements.seconds = 0;
        } else if (nextElements.seconds < 0) {
          nextElements.minutes += Math.floor(nextElements.seconds / 60);
          nextElements.seconds = 59;
        }

        if (nextElements.minutes >= 60) {
          nextElements.hours += Math.floor(nextElements.minutes / 60);
          nextElements.minutes = 0;
        } else if (nextElements.minutes < 0) {
          nextElements.hours += Math.floor(nextElements.minutes / 60);
          nextElements.minutes = 59;
        }

        if (nextElements.hours >= 24 || nextElements.hours < 0) {
          nextElements.hours = 0;
        }

        if (hourLimit === 12) {
          nextElements.hours12 = nextElements.hours > 12 ? nextElements.hours - 12 : nextElements.hours;
        }

        setElements(nextElements);

        if (onChange) {
          var e = nextElements;

          if (e.duration) {
            onChange("P" + e.hours + "H" + e.minutes + "M" + e.seconds + "S");
          } else {
            onChange("T" + e.hours + ":" + e.minutes + ":" + e.seconds);
          }
        }
      }, interval);
      return function () {
        return clearInterval(timer);
      };
    }

    return undefined;
  }, [elements, hourLimit, onChange, precision, run]);
  var content;

  if (type === 'analog') {
    content = /*#__PURE__*/react.createElement(Analog, Clock_extends({
      ref: ref,
      elements: elements,
      precision: precision,
      size: size
    }, rest));
  } else if (type === 'digital') {
    content = /*#__PURE__*/react.createElement(Digital, Clock_extends({
      ref: ref,
      elements: elements,
      precision: precision,
      run: run,
      size: size
    }, rest));
  }

  return content;
});
Clock.displayName = 'Clock';
var ClockDoc;

if (false) {}

var ClockWrapper = ClockDoc || Clock;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Clock/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Collapsible/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grid/StyledGrid.js




var StyledGrid_fillStyle = function fillStyle(fill) {
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

var StyledGrid_JUSTIFY_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};
var StyledGrid_justifyStyle = (0,styled_components_browser_esm.css)(["justify-items:", ";"], function (props) {
  return StyledGrid_JUSTIFY_MAP[props.justify];
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

var StyledGrid_gapStyle = function gapStyle(props) {
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

var StyledGrid = styled_components_browser_esm.default.div.attrs(function (props) {
  return {
    'aria-label': props.a11yTitleProp
  };
}).withConfig({
  displayName: "StyledGrid",
  componentId: "sc-1wofa1l-0"
})(["display:grid;box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return props.border && (Array.isArray(props.border) ? props.border.map(function (border) {
    return borderStyle(border, props.responsive, props.theme);
  }) : borderStyle(props.border, props.responsive, props.theme));
}, function (props) {
  return StyledGrid_fillStyle(props.fillContainer);
}, function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.areas && areasStyle(props);
}, function (props) {
  return props.columns && columnsStyle(props);
}, function (props) {
  return props.gap && StyledGrid_gapStyle(props);
}, function (props) {
  return props.justify && StyledGrid_justifyStyle;
}, function (props) {
  return props.justifyContent && justifyContentStyle;
}, function (props) {
  return props.pad && edgeStyle('padding', props.pad, props.responsive, props.theme.global.edgeSize.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.rowsProp && rowsStyle(props);
}, function (props) {
  return props.heightProp && heightStyle(props.heightProp, props.theme);
}, function (props) {
  return props.widthProp && widthStyle(props.widthProp, props.theme);
}, function (props) {
  return props.theme.grid && props.theme.grid.extend;
});
StyledGrid.defaultProps = {};
Object.setPrototypeOf(StyledGrid.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grid/Grid.js
var Grid_excluded = ["a11yTitle", "aria-label", "border", "fill", "height", "responsive", "rows", "tag", "as", "width"];

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

function Grid_objectWithoutPropertiesLoose(source, excluded) {
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
      rest = Grid_objectWithoutPropertiesLoose(props, Grid_excluded);

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
var GridDoc;

if (false) {}

var GridWrapper = GridDoc || Grid;
GridWrapper.available = typeof window !== 'undefined' && window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/Swatch.js




var Swatch = function Swatch(_ref) {
  var aspect = _ref.aspect,
      color = _ref.color,
      point = _ref.point,
      thickness = _ref.thickness;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);
  var dim = parseInt(theme.global.spacing, 10) / 2;
  var half = dim / 2;
  var width = dim;
  var content;
  if (aspect === 'x') content = /*#__PURE__*/react.createElement("path", {
    d: "M 0 " + half + " L " + dim + " " + half,
    stroke: "#000"
  });else if (aspect === 'y') content = /*#__PURE__*/react.createElement("path", {
    d: "M " + half + " 0 L " + half + " " + dim,
    stroke: "#000"
  });else if (aspect === 'thickness') content = /*#__PURE__*/react.createElement("g", {
    stroke: "#000",
    fill: "none"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: half,
    cy: half,
    r: half / 4
  }), /*#__PURE__*/react.createElement("circle", {
    cx: half,
    cy: half,
    r: half - 1
  }));else if (aspect === 'color') content = /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("rect", {
    x: 0,
    y: 0,
    width: half,
    height: dim,
    fill: "#000",
    opacity: 0.4
  }), /*#__PURE__*/react.createElement("rect", {
    x: half,
    y: 0,
    width: half,
    height: dim,
    fill: "#000",
    opacity: 0.8
  }));else if (point === 'circle') content = /*#__PURE__*/react.createElement("circle", {
    cx: half,
    cy: half,
    r: half
  });else {
    var d;
    if (point === 'diamond') d = "M " + half + " 0 L " + dim + " " + half + " L " + half + " " + dim + " L 0 " + half + " Z";else if (point === 'star') {
      var off1 = half / 3;
      var off2 = off1 * 2;
      d = "M " + half + " 0 L " + (half - off2) + " " + dim + " L " + dim + " " + (half - off1) + " L 0 " + (half - off1) + " L " + (half + off2) + " " + dim + " Z";
    } else if (point === 'triangle') d = "M " + half + " 0 L " + dim + " " + dim + " L 0 " + dim + " Z";else if (point === 'triangleDown') d = "M 0 0 L " + dim + " 0 L " + half + " " + dim + " Z";else if (point === 'square') d = "M 0 0 L " + dim + " 0 L " + dim + " " + dim + " L 0 " + dim + " Z"; // TODO: dash
    else if (thickness) {
      width = parseMetricToNum(theme.global.edgeSize[thickness]) || dim;
      d = "M 0 0 L " + width + " 0 L " + width + " " + dim + " L 0 " + dim + " Z";
    } // box
    else d = "M 0 0 L " + dim + " 0 L " + dim + " " + dim + " L 0 " + dim + " Z";
    content = /*#__PURE__*/react.createElement("path", {
      d: d
    });
  }
  var opacity = color && color.opacity ? theme.global.opacity[color.opacity] : undefined;
  return /*#__PURE__*/react.createElement("svg", {
    width: width,
    height: dim,
    viewBox: "0 0 " + width + " " + dim,
    fill: color ? normalizeColor(color.color || color, theme) : undefined,
    opacity: opacity,
    stroke: "none"
  }, content);
};


;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/Detail.js









var DetailControl = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "Detail__DetailControl",
  componentId: "huiwg9-0"
})(["&:focus{", "}&:focus:not(:focus-visible){", "}"], focusStyle(), unfocusStyle());

var Detail = function Detail(_ref) {
  var activeProperty = _ref.activeProperty,
      axis = _ref.axis,
      data = _ref.data,
      series = _ref.series,
      seriesStyles = _ref.seriesStyles,
      renderValue = _ref.renderValue,
      thickness = _ref.thickness;

  var _useState = (0,react.useState)(),
      detailIndex = _useState[0],
      setDetailIndex = _useState[1];

  var activeIndex = (0,react.useRef)();
  var detailRefs = (0,react.useMemo)(function () {
    return [];
  }, []);
  var onMouseLeave = (0,react.useCallback)(function (event) {
    // Only remove detail if the mouse isn't over the active index.
    // This helps distinguish leaving the drop on the edge where it is
    // anchored.
    var rect = activeIndex.current.getBoundingClientRect();

    if (event.pageX < rect.left || event.pageX > rect.right || event.pageY < rect.top || event.pageY > rect.bottom) {
      activeIndex.current = undefined;
      setDetailIndex(undefined);
    }
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onLeft: function onLeft() {
      if (detailIndex === undefined) setDetailIndex(data.length - 1);else if (detailIndex > 0) setDetailIndex(detailIndex - 1);
    },
    onRight: function onRight() {
      if (detailIndex === undefined) setDetailIndex(0);else if (detailIndex < data.length - 1) setDetailIndex(detailIndex + 1);
    }
  }, /*#__PURE__*/react.createElement(DetailControl, {
    key: "band",
    tabIndex: 0,
    direction: "row",
    fill: true,
    justify: "between",
    responsive: false,
    onFocus: function onFocus() {},
    onBlur: function onBlur() {
      return setDetailIndex(undefined);
    }
  }, data.map(function (_, i) {
    return /*#__PURE__*/react.createElement(BoxWrapper // eslint-disable-next-line react/no-array-index-key
    , {
      key: i,
      align: "center",
      responsive: false,
      width: thickness,
      onMouseOver: function onMouseOver(event) {
        activeIndex.current = event.currentTarget;
        setDetailIndex(i);
      },
      onMouseLeave: onMouseLeave,
      onFocus: function onFocus() {},
      onBlur: function onBlur() {}
    }, /*#__PURE__*/react.createElement(BoxWrapper, {
      ref: function ref(c) {
        detailRefs[i] = c;
      },
      fill: "vertical",
      border: detailIndex === i ? true : undefined
    }));
  }))), detailIndex !== undefined && detailRefs[detailIndex] && /*#__PURE__*/react.createElement(DropWrapper, {
    key: "drop",
    target: detailRefs[detailIndex],
    align: detailIndex > data.length / 2 ? {
      right: 'left'
    } : {
      left: 'right'
    },
    plain: true,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/react.createElement(BoxWrapper, {
    pad: "small",
    background: {
      color: 'background-back'
    }
  }, /*#__PURE__*/react.createElement(GridWrapper, {
    columns: ['auto', 'auto', 'auto'],
    gap: "xsmall",
    align: "center"
  }, series.filter(function (_ref2) {
    var property = _ref2.property;
    return !activeProperty || activeProperty === property || axis && axis.x && axis.x.property === property;
  }).map(function (serie) {
    var propertyStyle = seriesStyles[serie.property];
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: serie.property
    }, propertyStyle ? /*#__PURE__*/react.createElement(Swatch, propertyStyle) : /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement(TextWrapper, {
      size: "small"
    }, serie.label || serie.property), /*#__PURE__*/react.createElement(TextWrapper, {
      size: "small",
      weight: "bold"
    }, renderValue(serie, detailIndex)));
  })))));
};


;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/Legend.js
function Legend_extends() {
  Legend_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Legend_extends.apply(this, arguments);
}







var Legend = function Legend(_ref) {
  var activeProperty = _ref.activeProperty,
      seriesProp = _ref.series,
      seriesStyles = _ref.seriesStyles,
      setActiveProperty = _ref.setActiveProperty;
  var series = (0,react.useMemo)(function () {
    return seriesProp.filter(function (s) {
      return seriesStyles[s.property];
    });
  }, [seriesProp, seriesStyles]);
  var interactive = (0,react.useMemo)( // filter out properties that are used in point chart aspects
  function () {
    return series.filter(function (_ref2) {
      var property = _ref2.property;
      return !seriesStyles[property].aspect;
    }).length > 1;
  }, [series, seriesStyles]);
  return /*#__PURE__*/react.createElement(BoxWrapper, {
    margin: {
      top: 'small'
    },
    direction: "row",
    wrap: true,
    gap: "small"
  }, series.map(function (_ref3) {
    var property = _ref3.property,
        label = _ref3.label;
    var isActive = property === activeProperty;
    var swatchProps = {};
    var textProps = {};

    if (activeProperty !== undefined) {
      if (!isActive) {
        // swatchProps.color = 'status-disabled';
        textProps.color = 'text-xweak';
      } else {
        textProps.color = 'text-strong';
      }
    }

    var content = /*#__PURE__*/react.createElement(BoxWrapper, {
      key: property,
      direction: "row",
      align: "center",
      pad: {
        horizontal: 'small',
        vertical: 'xsmall'
      },
      gap: "xsmall"
    }, /*#__PURE__*/react.createElement(Swatch, Legend_extends({}, seriesStyles[property], swatchProps)), /*#__PURE__*/react.createElement(TextWrapper, textProps, label || property));

    if (interactive) {
      content = /*#__PURE__*/react.createElement(ButtonWrapper, {
        key: property,
        active: isActive,
        onClick: function onClick() {
          return setActiveProperty(isActive ? undefined : property);
        },
        hoverIndicator: true
      }, content);
    }

    return content;
  }));
};


;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/XAxis.js


var XAxis = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var chartProps = _ref.chartProps,
      data = _ref.data,
      renderValue = _ref.renderValue,
      serie = _ref.serie; // pull the x-axis values from the first chart, all should have the same

  var _axis = (Array.isArray(chartProps[0]) ? chartProps[0][0] : chartProps[0]).axis,
      axisValues = _axis[0];
  return /*#__PURE__*/react.createElement(BoxWrapper, {
    ref: ref,
    gridArea: "xAxis",
    direction: "row",
    justify: "between"
  }, axisValues.map(function (dataIndex, i) {
    var align;
    if (axisValues.length === data.length) align = 'center';else if (i === 0) align = 'start';else if (i === axisValues.length - 1) align = 'end';else align = 'center';
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react.createElement(BoxWrapper, {
        key: i,
        flex: true,
        align: align
      }, serie ? renderValue(serie, dataIndex) : dataIndex)
    );
  }));
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/utils.js
var points = ['circle', 'diamond', 'square', 'star', 'triangle', 'triangleDown'];
var heightYGranularity = {
  xxsmall: {
    fine: 2,
    medium: 2
  },
  xsmall: {
    fine: 3,
    medium: 2
  },
  small: {
    fine: 5,
    medium: 3
  },
  medium: {
    fine: 7,
    medium: 5
  },
  large: {
    fine: 9,
    medium: 5
  },
  xlarge: {
    fine: 11,
    medium: 5
  }
};
var halfPad = {
  xlarge: 'large',
  large: 'medium',
  medium: 'small',
  small: 'xsmall',
  xsmall: 'xxsmall'
};
var doublePad = {
  large: 'xlarge',
  medium: 'large',
  small: 'medium',
  xsmall: 'small',
  xxsmall: 'xsmall'
};
var createDateFormat = function createDateFormat(firstValue, lastValue, full) {
  var dateFormat;
  var startDate = new Date(firstValue);
  var endDate = new Date(lastValue);

  if ( // check for valid dates, this is the fastest way
  !Number.isNaN(startDate.getTime()) && !Number.isNaN(endDate.getTime())) {
    var delta = Math.abs(endDate - startDate);
    var options;
    if (delta < 60000) // less than 1 minute
      options = full ? {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: undefined
      } : {
        second: '2-digit',
        day: undefined
      };else if (delta < 3600000) // less than 1 hour
      options = full ? {
        hour: 'numeric',
        minute: '2-digit',
        day: undefined
      } : {
        minute: '2-digit',
        day: undefined
      };else if (delta < 86400000) // less than 1 day
      options = {
        hour: 'numeric'
      };else if (delta < 2592000000) // less than 30 days
      options = {
        month: full ? 'short' : 'numeric',
        day: 'numeric'
      };else if (delta < 31557600000) // less than 1 year
      options = {
        month: full ? 'long' : 'short'
      }; // 1 year or more
    else options = {
      year: 'numeric'
    };
    if (options) dateFormat = new Intl.DateTimeFormat(undefined, options).format;
  }

  return dateFormat;
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/YAxis.js





var YAxis = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var chartProps = _ref.chartProps,
      pad = _ref.pad,
      renderValue = _ref.renderValue,
      _ref$serie = _ref.serie,
      serie = _ref$serie === void 0 ? {} : _ref$serie;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);
  var render = serie.render,
      suffix = serie.suffix; // pull the x-axis values from the first chart, all should have the same

  var _axis = (Array.isArray(chartProps[0]) ? chartProps[0][0] : chartProps[0]).axis,
      axisValues = _axis[1];
  var divideBy;
  var unit;

  if (!render && !suffix) {
    // figure out how many digits to show
    var maxValue = Math.max.apply(Math, axisValues.map(function (v) {
      return Math.abs(v);
    }));

    if (maxValue > 10000000) {
      divideBy = 1000000;
      unit = 'M';
    } else if (maxValue > 10000) {
      divideBy = 1000;
      unit = 'K';
    }
  } // Set basis to match double the vertical pad, so we can align the
  // text with the guides


  var edgeSize = doublePad[pad.vertical || pad];
  var basis = theme.global.edgeSize[edgeSize] || edgeSize;
  return /*#__PURE__*/react.createElement(BoxWrapper, {
    ref: ref,
    gridArea: "yAxis",
    justify: "between",
    flex: true
  }, axisValues.map(function (axisValue, i) {
    var content = renderValue(serie, undefined, axisValue);

    if (content === axisValue) {
      if (divideBy) content = round(content / divideBy, 0);
      if (unit) content = "" + content + unit;
    }

    return /*#__PURE__*/react.createElement(BoxWrapper // eslint-disable-next-line react/no-array-index-key
    , {
      key: i,
      align: "end",
      basis: basis,
      flex: "shrink",
      justify: basis ? 'center' : undefined
    }, content);
  }));
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/XGuide.js


var XGuide = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var guide = _ref.guide,
      pad = _ref.pad;
  return /*#__PURE__*/react.createElement(BoxWrapper, {
    ref: ref,
    fill: true,
    direction: "row",
    justify: "between",
    pad: pad,
    responsive: false
  }, Array.from({
    length: guide.x.count
  }).map(function (_, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react.createElement(BoxWrapper, {
        key: i,
        border: "left"
      })
    );
  }));
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/YGuide.js


var YGuide = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var guide = _ref.guide,
      pad = _ref.pad;
  return /*#__PURE__*/react.createElement(BoxWrapper, {
    ref: ref,
    fill: true,
    justify: "between",
    pad: pad,
    responsive: false
  }, Array.from({
    length: guide.y.count
  }).map(function (_, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react.createElement(BoxWrapper, {
        key: i,
        border: "top"
      })
    );
  }));
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/DataChart.js
var DataChart_excluded = ["a11yTitle", "axis", "bounds", "chart", "data", "detail", "gap", "guide", "legend", "pad", "series", "size"],
    DataChart_excluded2 = ["property", "type", "x", "y"];

function DataChart_extends() {
  DataChart_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DataChart_extends.apply(this, arguments);
}

function DataChart_objectWithoutPropertiesLoose(source, excluded) {
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















 // DataChart takes a generic data array of objects plus as few properties
// as possible, and creates a Stack of Charts with x and y axes, a legend,
// and interactive detail.
// Much of the code here-in involves the "few properties" aspect where we
// normalize and automatically handle whatever the caller didn't specify.

var DataChart = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      _ref$axis = _ref.axis,
      axisProp = _ref$axis === void 0 ? true : _ref$axis,
      _ref$bounds = _ref.bounds,
      boundsProp = _ref$bounds === void 0 ? 'align' : _ref$bounds,
      chart = _ref.chart,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      detail = _ref.detail,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 'small' : _ref$gap,
      guideProp = _ref.guide,
      legend = _ref.legend,
      padProp = _ref.pad,
      seriesProp = _ref.series,
      size = _ref.size,
      rest = DataChart_objectWithoutPropertiesLoose(_ref, DataChart_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || defaultProps.theme; // legend interaction, if any

  var _useState = (0,react.useState)(),
      activeProperty = _useState[0],
      setActiveProperty = _useState[1]; // refs used for ie11 not having Grid


  var xRef = (0,react.useRef)();
  var spacerRef = (0,react.useRef)(); // normalize seriesProp to an array of objects, one per property

  var series = (0,react.useMemo)(function () {
    if (Array.isArray(seriesProp)) return seriesProp.filter(function (s) {
      return s.property || typeof s === 'string';
    }).map(function (s) {
      return typeof s === 'string' ? {
        property: s
      } : s;
    });
    if (typeof seriesProp === 'string') return [{
      property: seriesProp
    }];
    if (seriesProp) return [seriesProp];
    return [];
  }, [seriesProp]);

  var getPropertySeries = function getPropertySeries(prop) {
    return series.find(function (_ref2) {
      var property = _ref2.property;
      return prop === property;
    });
  }; // Normalize chart to an array of objects.
  // Each chart has one or more properties associated with it.
  // A stacked bar chart has an array of properties.
  // A point chart can have x, y, thickness, and color each driven
  // by a separate property.


  var charts = (0,react.useMemo)(function () {
    if (!chart) {
      if (series.length === 1) return series.filter(function (s) {
        return s.property;
      }).map(function (s) {
        return {
          property: s.property
        };
      }); // if we have more than one property, we'll use the first for
      // the x-axis and we'll plot the rest

      return series.slice(1).map(function (s) {
        return {
          property: s.property
        };
      });
    }

    if (Array.isArray(chart)) return chart.map(function (c) {
      return typeof c === 'string' ? {
        property: c
      } : c;
    }).filter(function (_ref3) {
      var property = _ref3.property;
      return property;
    });
    if (typeof chart === 'string') return [{
      property: chart
    }];
    if (chart) return [chart];
    return [];
  }, [chart, series]); // map the series property values into their own arrays

  var seriesValues = (0,react.useMemo)(function () {
    var result = {};
    series.forEach(function (_ref4) {
      var property = _ref4.property;
      result[property] = data.map(function (d) {
        return d[property];
      });
    });
    return result;
  }, [data, series]); // Setup the values property for each chart.
  // The index into 'charts' can be used to index into 'chartValues'.

  var chartValues = (0,react.useMemo)(function () {
    return charts.map(function (_ref5) {
      var opacity = _ref5.opacity,
          property = _ref5.property,
          type = _ref5.type;

      if (property) {
        if (Array.isArray(property)) {
          // A range chart or a stacked bar chart have multiple properties.
          // In this case, this returns an array of values,
          // one per property.
          if (type === 'bars') {
            // Further down, where we render, each property is rendered
            // using a separate Chart component and the values are stacked
            // such that they line up appropriately.
            var totals = [];
            return property.map(function (cp) {
              // handle object or string
              var aProperty = cp.property || cp;
              var values = seriesValues[aProperty];
              if (!values) return undefined; // property name isn't valid

              return values.map(function (v, i) {
                var base = totals[i] || 0;
                totals[i] = base + v;
                return [i, base, base + v];
              });
            });
          }

          return data.map(function (_, index) {
            return [index].concat(property.map(function (p) {
              return seriesValues[p] ? seriesValues[p][index] : data[index][p];
            }));
          });
        }

        if (typeof property === 'object') {
          // When 'property' is an array, the keys of this array indicate
          // which property drives which part of the rendered Chart.
          var color = property.color,
              thickness = property.thickness,
              x = property.x,
              y = property.y,
              y2 = property.y2;
          return seriesValues[x].map(function (value, index) {
            var aValue = {
              value: [value]
            };
            aValue.value.push(seriesValues[y][index]);
            if (y2) aValue.value.push(seriesValues[y2][index]);

            if (thickness) {
              var t = seriesValues[thickness.property || thickness][index];
              aValue.thickness = thickness.transform ? thickness.transform(t) : t;
            }

            if (color) {
              var c = seriesValues[color.property || color][index];
              aValue.color = color.transform ? color.transform(c) : c;
            }

            if (opacity) aValue.opacity = opacity;
            return aValue;
          });
        }

        return seriesValues[property];
      }

      return undefined;
    });
  }, [charts, data, seriesValues]); // map granularities to work well with the number of data points we have

  var granularities = (0,react.useMemo)(function () {
    var medium; // determine a good medium granularity that will align well with the
    // length of the data

    var steps = data.length - 1; // special case property driven point charts

    if (charts[0] && typeof charts[0].property === 'object') medium = 3;else if (steps < 4) medium = data.length;else if (steps === 4) medium = 3;else if (steps % 4 === 0) medium = 5;else if (steps % 3 === 0) medium = 4;else if (steps % 2 === 0) medium = 3;else medium = 2;
    return {
      x: {
        coarse: 2,
        fine: data.length,
        medium: medium
      },
      y: DataChart_extends({}, heightYGranularity[size && size.height || 'small'] || {
        fine: 5,
        medium: 3
      }, {
        coarse: 2
      })
    };
  }, [charts, data.length, size]); // normalize axis to objects, convert granularity to a number

  var axis = (0,react.useMemo)(function () {
    if (!axisProp) return undefined;
    var result = {};
    if (axisProp === true || axisProp.x === true) result.x = {};
    if (axisProp === true || axisProp.y === true) result.y = {};
    if (!result.x && axisProp.x) result.x = typeof axisProp.x === 'string' ? {
      property: axisProp.x
    } : DataChart_extends({}, axisProp.x);
    if (!result.y && axisProp.y) result.y = typeof axisProp.y === 'string' ? {
      property: axisProp.y
    } : DataChart_extends({}, axisProp.y);

    if (result.x) {
      if (!result.x.property) {
        // see if we have a point chart that has an x property
        if (data && data[0]) {
          if (data[0].date) result.x.property = 'date';else if (data[0].time) result.x.property = 'time';
        }
      }

      if (!result.x.granularity) result.x.granularity = 'coarse';
    }

    if (result.y) {
      if (!result.y.property && charts[0]) // see if we have a point chart that has an x property
        result.y.property = charts[0].property.y || charts[0].property;
      if (!result.y.granularity) result.y.granularity = 'coarse';
    } // calculate number of entries based on granularity


    if (result.x) {
      var _result$x$granularity = result.x.granularity,
          granularity = _result$x$granularity === void 0 ? 'coarse' : _result$x$granularity;
      result.x.count = granularities.x[granularity];
    }

    if (result.y) {
      var _result$y$granularity = result.y.granularity,
          _granularity = _result$y$granularity === void 0 ? 'coarse' : _result$y$granularity;

      result.y.count = granularities.y[_granularity];
    }

    return result;
  }, [axisProp, data, charts, granularities]); // calculate axis, bounds, and thickness for each chart

  var chartProps = (0,react.useMemo)(function () {
    var steps = [];
    var coarseness = [undefined, 5];

    if (axis && axis.x) {
      var _axis$x$granularity = axis.x.granularity,
          granularity = _axis$x$granularity === void 0 ? 'coarse' : _axis$x$granularity;
      steps[0] = granularities.x[granularity] - 1;
    } else steps[0] = data.length - 1;

    if (axis && axis.y) {
      var _axis$y$granularity = axis.y.granularity,
          _granularity2 = _axis$y$granularity === void 0 ? 'coarse' : _axis$y$granularity;

      steps[1] = granularities.y[_granularity2] - 1;
    } else steps[1] = 1;

    var chartBounds = chartValues.map(function (_, index) {
      if (charts[index].type === 'bars') {
        // merge values for bars case
        var mergedValues = chartValues[index][0].slice(0);
        chartValues[index].slice(1).filter(function (values) {
          return values;
        }) // property name isn't valid
        .forEach(function (values) {
          mergedValues = mergedValues.map(function (__, i) {
            return [i, Math.min(mergedValues[i][1], values[i][1]), Math.max(mergedValues[i][2], values[i][2])];
          });
        });
        return calcBounds(mergedValues, {
          coarseness: coarseness,
          steps: steps
        });
      } // if this is a data driven x chart, set coarseness for x


      return calcBounds(chartValues[index], {
        coarseness: charts[index].property.x ? [5, 5] : coarseness,
        steps: steps
      });
    });

    if (boundsProp === 'align' && chartBounds.length) {
      var alignedBounds = [].concat(chartBounds[0]);
      chartBounds.forEach(function (bounds) {
        alignedBounds[0][0] = Math.min(alignedBounds[0][0], bounds[0][0]);
        alignedBounds[0][1] = Math.max(alignedBounds[0][1], bounds[0][1]);
        alignedBounds[1][0] = Math.min(alignedBounds[1][0], bounds[1][0]);
        alignedBounds[1][1] = Math.max(alignedBounds[1][1], bounds[1][1]);
      });
      chartBounds = chartBounds.map(function () {
        return alignedBounds;
      });
    }

    return chartValues.map(function (values, index) {
      var calcValues = charts[index].type === 'bars' ? values[0] : values;
      return calcs(calcValues, {
        bounds: chartBounds[index],
        steps: steps
      });
    });
  }, [axis, boundsProp, charts, chartValues, data, granularities]); // normalize how we style data properties for use by Legend and Detail

  var seriesStyles = (0,react.useMemo)(function () {
    var result = {}; // start from what we were explicitly given

    charts.forEach(function (_ref6, index) {
      var color = _ref6.color,
          point = _ref6.point,
          property = _ref6.property,
          thickness = _ref6.thickness,
          type = _ref6.type;
      var calcThickness = chartProps[index].thickness;

      if (typeof property === 'object' && !Array.isArray(property)) {
        // data driven point chart
        Object.keys(property).forEach(function (aspect) {
          var prop = property[aspect];
          if (!result[prop.property || prop]) result[prop.property || prop] = {
            aspect: aspect
          };
        });
      } else {
        var props = Array.isArray(property) ? property : [property];
        props.forEach(function (prop) {
          var p = prop.property || prop;
          var pColor = prop.color || color;
          if (!result[p]) result[p] = {};
          if (pColor && !result[p].color) result[p].color = pColor;
          if (point && !result[p].point) result[p].point = point;else if (type === 'point') result[p].point = false;
          if ((thickness || calcThickness) && !result[p].thickness) result[p].thickness = thickness || calcThickness;
        });
      }
    }); // set color for any non-aspect properties we don't have one for yet

    var colorIndex = 0;
    var pointIndex = 0;
    Object.keys(result).forEach(function (key) {
      var seriesStyle = result[key];

      if (!seriesStyle.aspect && !seriesStyle.color) {
        seriesStyle.color = "graph-" + colorIndex;
        colorIndex += 1;
      } // set opacity if it isn't set and this isn't the active property


      if (activeProperty !== undefined && activeProperty !== key) {
        seriesStyle.opacity = 'medium';
      }

      if (seriesStyle.point === false) {
        seriesStyle.point = points[pointIndex];
        pointIndex += 1;
      }
    });
    return result;
  }, [activeProperty, charts, chartProps]); // normalize guide

  var guide = (0,react.useMemo)(function () {
    if (!guideProp) return undefined;
    var result;

    if (guideProp === true) {
      result = {
        x: {},
        y: {}
      };
    } else {
      result = {};
      if (guideProp.x) result.x = DataChart_extends({}, guideProp.x);
      if (guideProp.y) result.y = DataChart_extends({}, guideProp.y);
    } // set counts


    if (result.x) {
      // if no granularity and axis, align count with axis
      if (!result.x.granularity && axis && axis.x) result.x.count = axis.x.count;
      if (!result.x.count) result.x.count = granularities.x[result.x.granularity || 'coarse'];
    }

    if (result.y) {
      // if no granularity and axis, align count with axis
      if (!result.y.granularity && axis && axis.y) result.y.count = axis.y.count;
      if (!result.y.count) result.y.count = granularities.y[result.y.granularity || 'coarse'];
    }

    return result;
  }, [axis, granularities, guideProp]); // set the pad to half the thickness, based on the chart types

  var pad = (0,react.useMemo)(function () {
    if (padProp !== undefined) return padProp;
    var result = {};
    charts.forEach(function (_ref7, index) {
      var type = _ref7.type;
      var thickness = chartProps[index].thickness;
      result.horizontal = halfPad[thickness];
      if (type && type !== 'bar') result.vertical = halfPad[thickness];
    });
    return result;
  }, [chartProps, charts, padProp]); // The thickness of the Detail segments. We need to convert to numbers
  // to be able to compare across charts where some might be using T-shirt
  // labels and others might be pixel values.

  var detailThickness = (0,react.useMemo)(function () {
    var result = 0;

    if (detail) {
      charts.forEach(function (_, index) {
        var thickness = chartProps[index].thickness;
        result = Math.max(result, parseMetricToNum(theme.global.edgeSize[thickness] || thickness));
      });
    }

    return result + "px";
  }, [charts, chartProps, detail, theme]);
  var dateFormats = (0,react.useMemo)(function () {
    var result = {};
    var full = axis && axis.x && axis.x.granularity === 'coarse';
    series.forEach(function (_ref8) {
      var property = _ref8.property,
          render = _ref8.render;

      if (!render && data.length > 1 && typeof data[0][property] === 'string') {
        result[property] = createDateFormat(data[0][property], data[data.length - 1][property], full);
      }
    });
    return result;
  }, [axis, data, series]); // for ie11, align the spacer Box height to the x-axis height

  useLayoutEffect(function () {
    if (xRef.current && spacerRef.current) {
      var rect = xRef.current.getBoundingClientRect();
      spacerRef.current.style.height = rect.height + "px";
    }
  }, []);

  var renderValue = function renderValue(serie, dataIndex, valueArg) {
    var value;

    if (valueArg !== undefined) {
      if (serie && serie.render) return serie.render(valueArg);
      value = valueArg;
    } else {
      var datum = data[dataIndex];
      value = datum[serie.property];
      if (serie && serie.render) return serie.render(value, datum, serie.property);
    }

    if (serie) {
      var dateFormat = dateFormats[serie.property];
      if (dateFormat) return dateFormat(new Date(value));
      if (serie.prefix) value = "" + serie.prefix + value;
      if (serie.suffix) value = "" + value + serie.suffix;
    }

    return value;
  }; // TODO: revisit how x/y axis are hooked up to charts and series


  var xAxisElement = axis && axis.x && chartProps.length ? /*#__PURE__*/react.createElement(XAxis, {
    ref: xRef,
    axis: axis,
    chartProps: chartProps,
    data: data,
    renderValue: renderValue,
    serie: axis.x.property && getPropertySeries(axis.x.property)
  }) : null;
  var yAxisElement = axis && axis.y && chartProps.length ? /*#__PURE__*/react.createElement(YAxis, {
    axis: axis,
    chartProps: chartProps,
    pad: pad,
    renderValue: renderValue,
    serie: axis.y.property && getPropertySeries(axis.y.property)
  }) : null;
  var stackFill = (0,react.useMemo)(function () {
    if (size === 'fill' || size && size.width === 'fill' && size.height === 'fill') return true;
    if (size && size.width === 'fill') return 'horizontal';
    if (size && size.height === 'fill') return 'vertical';
    return undefined;
  }, [size]);
  var guidingChild = (0,react.useMemo)(function () {
    var result = 0;
    if (guide && guide.x) result += 1;
    if (guide && guide.y) result += 1;
    return result;
  }, [guide]);
  var stackElement = /*#__PURE__*/react.createElement(StackWrapper, {
    gridArea: "charts",
    guidingChild: guidingChild,
    fill: stackFill
  }, guide && guide.x && /*#__PURE__*/react.createElement(XGuide, {
    guide: guide,
    pad: pad
  }), guide && guide.y && /*#__PURE__*/react.createElement(YGuide, {
    guide: guide,
    pad: pad
  }), charts.map(function (_ref9, i) {
    var prop = _ref9.property,
        type = _ref9.type,
        x = _ref9.x,
        y = _ref9.y,
        chartRest = DataChart_objectWithoutPropertiesLoose(_ref9, DataChart_excluded2);

    if (type === 'bars') {
      // reverse to ensure area Charts are stacked in the right order
      return prop.map(function (cProp, j) {
        var pProp = cProp.property || cProp;
        return /*#__PURE__*/react.createElement(ChartWrapper // eslint-disable-next-line react/no-array-index-key
        , DataChart_extends({
          key: j // when property name isn't valid, send empty array
          ,
          values: chartValues[i][j] || [],
          overflow: true
        }, seriesStyles[pProp], chartProps[i], chartRest, {
          type: "bar",
          size: size,
          pad: pad
        }));
      }).reverse();
    }

    return /*#__PURE__*/react.createElement(ChartWrapper // eslint-disable-next-line react/no-array-index-key
    , DataChart_extends({
      key: i,
      values: chartValues[i],
      overflow: true
    }, seriesStyles[prop], chartProps[i], chartRest, {
      type: type,
      size: size,
      pad: pad
    }));
  }), detail && /*#__PURE__*/react.createElement(Detail, {
    activeProperty: activeProperty,
    axis: axis,
    data: data,
    series: series,
    seriesStyles: seriesStyles,
    renderValue: renderValue,
    thickness: detailThickness
  }));
  var legendElement = legend ? /*#__PURE__*/react.createElement(Legend, {
    series: series,
    seriesStyles: seriesStyles,
    activeProperty: activeProperty,
    setActiveProperty: setActiveProperty
  }) : null; // IE11

  if (!GridWrapper.available) {
    var _content = stackElement;

    if (xAxisElement) {
      _content = /*#__PURE__*/react.createElement(BoxWrapper, null, _content, xAxisElement);
    }

    if (yAxisElement) {
      _content = /*#__PURE__*/react.createElement(BoxWrapper, {
        direction: "row"
      }, /*#__PURE__*/react.createElement(BoxWrapper, null, yAxisElement, /*#__PURE__*/react.createElement(BoxWrapper, {
        ref: spacerRef,
        flex: false
      })), _content);
    }

    if (legendElement) {
      _content = /*#__PURE__*/react.createElement(BoxWrapper, null, _content, legendElement);
    }

    return _content;
  }

  var content = /*#__PURE__*/react.createElement(GridWrapper, DataChart_extends({
    ref: ref,
    "aria-label": a11yTitle,
    fill: stackFill,
    columns: ['auto', stackFill === true || stackFill === 'horizontal' ? 'flex' : 'auto'],
    rows: [stackFill === true || stackFill === 'vertical' ? 'flex' : 'auto', 'auto'],
    areas: [{
      name: 'yAxis',
      start: [0, 0],
      end: [0, 0]
    }, {
      name: 'xAxis',
      start: [1, 1],
      end: [1, 1]
    }, {
      name: 'charts',
      start: [1, 0],
      end: [1, 0]
    }],
    gap: gap
  }, rest), xAxisElement, yAxisElement, stackElement);

  if (legendElement) {
    content = /*#__PURE__*/react.createElement(BoxWrapper, {
      align: "start"
    }, content, legendElement);
  }

  return content;
});
DataChart.displayName = 'DataChart';
var DataChartDoc;

if (false) {}

var DataChartWrapper = DataChartDoc || DataChart;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataChart/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Table/TableContext.js

var TableContext = /*#__PURE__*/react.createContext(undefined);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Table/StyledTable.js



var StyledTable_SIZE_MAP = {
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
  '1px' : StyledTable_SIZE_MAP[props.size] || props.theme.global.size[props.size] || props.size;
}, function (props) {
  return props.size !== 'auto' ? StyledTable_SIZE_MAP[props.size] || props.theme.global.size[props.size] || props.size : undefined;
});
var StyledTableCell = styled_components_browser_esm.default.td.withConfig({
  displayName: "StyledTable__StyledTableCell",
  componentId: "sc-1m3u5g-0"
})(["margin:0;padding:0;font-weight:inherit;text-align:inherit;", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return props.size && StyledTable_sizeStyle;
}, function (props) {
  return props.verticalAlign && "vertical-align: " + props.verticalAlign + ";";
}, function (props) {
  return props.align && "text-align: " + props.align + ";";
}, function (props) {
  return props.background && backgroundStyle(props.background, props.theme);
}, function (props) {
  return props.border && borderStyle(props.border, props.responsive, props.theme);
}, function (props) {
  return props.pad && edgeStyle('padding', props.pad, props.responsive, props.theme.box.responsiveBreakpoint, props.theme);
}, function (props) {
  return props.tableContextTheme && props.tableContextTheme.extend;
});
StyledTableCell.defaultProps = {};
Object.setPrototypeOf(StyledTableCell.defaultProps, default_props_defaultProps);
var StyledTableDataCaption = styled_components_browser_esm.default.caption.withConfig({
  displayName: "StyledTable__StyledTableDataCaption",
  componentId: "sc-1m3u5g-1"
})(["margin-bottom:", ";"], function (props) {
  return props.theme.global.edgeSize.xxsmall;
});
StyledTableDataCaption.defaultProps = {};
Object.setPrototypeOf(StyledTableDataCaption.defaultProps, default_props_defaultProps);
var StyledTableRow = styled_components_browser_esm.default.tr.withConfig({
  displayName: "StyledTable__StyledTableRow",
  componentId: "sc-1m3u5g-2"
})([""]);
StyledTableRow.defaultProps = {};
Object.setPrototypeOf(StyledTableRow.defaultProps, default_props_defaultProps);
var StyledTableBody = styled_components_browser_esm.default.tbody.withConfig({
  displayName: "StyledTable__StyledTableBody",
  componentId: "sc-1m3u5g-3"
})([""]);
StyledTableBody.defaultProps = {};
Object.setPrototypeOf(StyledTableBody.defaultProps, default_props_defaultProps);
var StyledTableHeader = styled_components_browser_esm.default.thead.withConfig({
  displayName: "StyledTable__StyledTableHeader",
  componentId: "sc-1m3u5g-4"
})([""]);
StyledTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledTableHeader.defaultProps, default_props_defaultProps);
var StyledTableFooter = styled_components_browser_esm.default.tfoot.withConfig({
  displayName: "StyledTable__StyledTableFooter",
  componentId: "sc-1m3u5g-5"
})([""]);
StyledTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledTableFooter.defaultProps, default_props_defaultProps);
var StyledTable = styled_components_browser_esm.default.table.withConfig({
  displayName: "StyledTable",
  componentId: "sc-1m3u5g-6"
})(["border-spacing:0;border-collapse:collapse;width:inherit;@media all and (min--moz-device-pixel-ratio:0){table-layout:fixed;}", " ", ";"], genericStyles, function (props) {
  return props.theme.table && props.theme.table.extend;
});
StyledTable.defaultProps = {};
Object.setPrototypeOf(StyledTable.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableCell/TableCell.js
var TableCell_excluded = ["align", "background", "border", "children", "className", "colSpan", "onWidth", "pad", "plain", "scope", "size", "verticalAlign"];

function TableCell_extends() {
  TableCell_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TableCell_extends.apply(this, arguments);
}

function TableCell_objectWithoutPropertiesLoose(source, excluded) {
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









var verticalAlignToJustify = {
  middle: 'center',
  top: 'start',
  bottom: 'end'
};
var TableCell = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var align = _ref.align,
      background = _ref.background,
      border = _ref.border,
      children = _ref.children,
      className = _ref.className,
      colSpan = _ref.colSpan,
      onWidth = _ref.onWidth,
      pad = _ref.pad,
      plain = _ref.plain,
      scope = _ref.scope,
      size = _ref.size,
      verticalAlign = _ref.verticalAlign,
      rest = TableCell_objectWithoutPropertiesLoose(_ref, TableCell_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var tableContext = (0,react.useContext)(TableContext);
  var cellRef = useForwardedRef(ref);
  var containerRef = (0,react.useRef)();
  useLayoutEffect(function () {
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
  } // merge tabelContextTheme and rest


  var mergedProps = TableCell_extends({}, tableContextTheme, rest);

  Object.keys(mergedProps).forEach(function (key) {
    if (rest[key] === undefined) mergedProps[key] = tableContextTheme[key];
  }); // split out background, border, and pad

  var cellProps = {
    align: align || mergedProps.align || undefined,
    background: background || mergedProps.background || undefined,
    border: border || mergedProps.border || undefined,
    pad: plain !== 'noPad' ? pad || mergedProps.pad || undefined : undefined,
    verticalAlign: verticalAlign || mergedProps.verticalAlign || undefined
  };
  delete mergedProps.align;
  delete mergedProps.background;
  delete mergedProps.border;
  delete mergedProps.pad;
  delete mergedProps.verticalAlign;
  var content = children;

  if (plain === 'noPad' && children) {
    // a Box with explicitly set height is necessary
    // for the child contents to be able to fill the
    // TableCell
    content = /*#__PURE__*/react.createElement(BoxWrapper, {
      ref: containerRef,
      justify: "center"
    }, children);
  } // construct a new theme object in case we have a background that wants
  // to change the background color context


  var nextTheme = (0,react.useMemo)(function () {
    var result;

    if (cellProps.background || theme.darkChanged) {
      var dark = backgroundIsDark(cellProps.background, theme);
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
    tableContext: tableContext,
    tableContextTheme: tableContextTheme
  }, plain === true ? mergedProps : {}, cellProps, {
    className: className
  }), plain || !Object.keys(mergedProps).length ? content : /*#__PURE__*/react.createElement(BoxWrapper, TableCell_extends({}, mergedProps, {
    align: align,
    justify: verticalAlignToJustify[verticalAlign]
  }), children)));
});
TableCell.displayName = 'TableCell';
var TableCellDoc;

if (false) {}

var TableCellWrapper = TableCellDoc || TableCell;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/Resizer.js
function Resizer_extends() {
  Resizer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Resizer_extends.apply(this, arguments);
}






var InteractionBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "Resizer__InteractionBox",
  componentId: "sc-8l808w-0"
})(["cursor:col-resize;> *{opacity:0;}", " &:hover{> *{opacity:1;}}"], function (props) {
  return props.active && '> * { opacity: 1; }';
});

var Resizer = function Resizer(_ref) {
  var onResize = _ref.onResize,
      property = _ref.property;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = (0,react.useState)(),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = (0,react.useState)(),
      width = _useState3[0],
      setWidth = _useState3[1];

  var ref = (0,react.useRef)();
  var onMouseDown = (0,react.useCallback)(function (event) {
    if (ref.current) {
      var element = ref.current; // find TH parent

      while (element && element.nodeName !== 'TH') {
        element = element.parentNode;
      }

      var rect = element.getBoundingClientRect();
      setStart(event.clientX);
      setWidth(rect.width);
      setActive(true);
    }
  }, []);
  var onMouseMove = (0,react.useCallback)(function (event) {
    // We determined 12 empirically as being wide enough to hit but
    // not too wide to cause false hits.
    var nextWidth = Math.max(12, width + (event.clientX - start));
    onResize(property, nextWidth);
  }, [onResize, property, start, width]);
  var onMouseUp = (0,react.useCallback)(function () {
    setActive(false);
    setStart(undefined);
    setWidth(undefined);
  }, []);
  (0,react.useEffect)(function () {
    var remove = function remove() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };

    if (active) {
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
      return remove;
    }

    remove();
    return undefined;
  }, [active, onMouseMove, onMouseUp]);
  var border;

  if (theme.dataTable.resize.hover && theme.dataTable.resize.hover.border) {
    var _theme$dataTable$resi = theme.dataTable.resize.hover.border,
        color = _theme$dataTable$resi.color,
        _theme$dataTable$resi2 = _theme$dataTable$resi.side,
        side = _theme$dataTable$resi2 === void 0 ? 'end' : _theme$dataTable$resi2,
        size = _theme$dataTable$resi.size;
    border = {
      color: color,
      side: side,
      size: size
    };
  }

  return /*#__PURE__*/react.createElement(StackWrapper, {
    anchor: "right"
  }, /*#__PURE__*/react.createElement(BoxWrapper, Resizer_extends({
    flex: false,
    responsive: false,
    pad: {
      vertical: 'small'
    }
  }, theme.dataTable.resize)), /*#__PURE__*/react.createElement(InteractionBox, {
    active: active,
    flex: false,
    pad: {
      left: 'xsmall'
    },
    ref: ref,
    responsive: false,
    onMouseDown: onMouseDown,
    onMouseMove: start !== undefined ? onMouseMove : undefined,
    onMouseUp: start !== undefined ? onMouseUp : undefined
  }, /*#__PURE__*/react.createElement(BoxWrapper, {
    pad: {
      vertical: 'small'
    },
    border: border
  })));
};

Resizer.displayName = 'Resizer';
Resizer.defaultProps = {};
Object.setPrototypeOf(Resizer.defaultProps, default_props_defaultProps);

// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/FormSearch.js
var FormSearch = __webpack_require__(4993);
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
      step = _ref$step === void 0 ? 50 : _ref$step; // item index to be made visible initially

  var _useState = (0,react.useState)(),
      scrollShow = _useState[0],
      setScrollShow = _useState[1]; // the last page we have items for


  var lastPage = (0,react.useMemo)(function () {
    return Math.floor(items.length / step);
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
      scrollParents = findScrollParents(belowMarkerRef.current);
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
    if (onMore && renderPageBounds[1] === lastPage && items.length >= pendingLength) {
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

  useLayoutEffect(function () {
    // ride out any animation delays, 100ms empirically measured
    var timer = setTimeout(function () {
      if (show && belowMarkerRef.current && show !== scrollShow) {
        // calculate show index based on beginPage
        var showIndex = show - renderPageBounds[0] * step + (renderPageBounds[0] ? 1 : 0);
        var showNode = belowMarkerRef.current.parentNode.children.item(showIndex);

        if (showNode) {
          var scrollParent = findScrollParent(showNode);

          if (isNodeBeforeScroll(showNode, scrollParent)) {
            showNode.scrollIntoView(true);
          } else if (isNodeAfterScroll(showNode, scrollParent)) {
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

  useLayoutEffect(function () {
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
    var marker = /*#__PURE__*/react.createElement(BoxWrapper, {
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
    var _marker = /*#__PURE__*/react.createElement(BoxWrapper, {
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

var InfiniteScrollDoc;

if (false) {}

var InfiniteScrollWrapper = InfiniteScrollDoc || InfiniteScroll;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextInput/StyledTextInput.js




var getPlainStyle = function getPlainStyle(plain) {
  if (plain === 'full') {
    return (0,styled_components_browser_esm.css)(["", " padding:0;"], plainInputStyle);
  }

  return plain && plainInputStyle;
};

var StyledTextInput = styled_components_browser_esm.default.input.withConfig({
  displayName: "StyledTextInput",
  componentId: "sc-1x30a0s-0"
})(["", " ", " ", " ", " ", " ", ";"], inputStyle, function (props) {
  return getPlainStyle(props.plain);
}, function (props) {
  return props.icon && (props.reverse ? "padding-right: " + props.theme.global.edgeSize.large + ";" : "padding-left: " + props.theme.global.edgeSize.large + ";");
}, function (props) {
  return props.disabled && disabledStyle(props.theme.textInput.disabled && props.theme.textInput.disabled.opacity);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, default_props_defaultProps);
var StyledTextInputContainer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledTextInput__StyledTextInputContainer",
  componentId: "sc-1x30a0s-1"
})(["position:relative;width:100%;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.container && props.theme.textInput.container.extend;
});
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(StyledTextInputContainer.defaultProps, default_props_defaultProps);
var StyledPlaceholder = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledTextInput__StyledPlaceholder",
  componentId: "sc-1x30a0s-2"
})(["position:absolute;left:", "px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;", ";"], function (props) {
  return parseMetricToNum(getInputPadBySide(props, 'left')) - parseMetricToNum(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.placeholder && props.theme.textInput.placeholder.extend;
});
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(StyledPlaceholder.defaultProps, default_props_defaultProps);
var StyledIcon = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledTextInput__StyledIcon",
  componentId: "sc-1x30a0s-3"
})(["position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);pointer-events:none;", ""], function (props) {
  return props.reverse ? "right: " + getInputPadBySide(props, 'right') + ";" : "left: " + getInputPadBySide(props, 'left') + ";";
});
var StyledSuggestions = styled_components_browser_esm.default.ol.withConfig({
  displayName: "StyledTextInput__StyledSuggestions",
  componentId: "sc-1x30a0s-4"
})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.suggestions && props.theme.textInput.suggestions.extend;
});
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(StyledSuggestions.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextInput/TextInput.js
var TextInput_excluded = ["a11yTitle", "defaultSuggestion", "defaultValue", "dropAlign", "dropHeight", "dropTarget", "dropProps", "focusIndicator", "icon", "id", "messages", "name", "onBlur", "onChange", "onFocus", "onKeyDown", "onSelect", "onSuggestionSelect", "onSuggestionsClose", "onSuggestionsOpen", "placeholder", "plain", "readOnly", "reverse", "suggestions", "textAlign", "value"];

function TextInput_extends() {
  TextInput_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TextInput_extends.apply(this, arguments);
}

function TextInput_objectWithoutPropertiesLoose(source, excluded) {
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

var ContainerBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "TextInput__ContainerBox",
  componentId: "sc-1ai0c08-0"
})(["", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}"], function (props) {
  return props.dropHeight ? sizeStyle('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
});
var defaultDropAlign = {
  top: 'bottom',
  left: 'left'
};
var TextInput = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      defaultSuggestion = _ref.defaultSuggestion,
      defaultValue = _ref.defaultValue,
      _ref$dropAlign = _ref.dropAlign,
      dropAlign = _ref$dropAlign === void 0 ? defaultDropAlign : _ref$dropAlign,
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

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format;

  var announce = (0,react.useContext)(AnnounceContext);
  var formContext = (0,react.useContext)(FormContext);
  var inputRef = useForwardedRef(ref);
  var dropRef = (0,react.useRef)();
  var suggestionsRef = (0,react.useRef)(); // if this is a readOnly property, don't set a name with the form context
  // this allows Select to control the form context for the name.

  var _formContext$useFormI = formContext.useFormInput(readOnly ? undefined : name, valueProp),
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
  }, [onSuggestionsClose, suggestions]); // Handle scenarios where we have focus, the drop isn't showing,
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
    if (showDrop && (!suggestions || !suggestions.length)) closeDrop();
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
          if (isNodeAfterScroll(item, container)) container.scrollTo(0, item.offsetTop - (container.getBoundingClientRect().height - item.getBoundingClientRect().height));else if (isNodeBeforeScroll(item, container)) container.scrollTo(0, item.offsetTop);
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
  }, [activeSuggestionIndex]);

  var _useState6 = (0,react.useState)(placeholder && typeof placeholder !== 'string' && !(inputRef.current && inputRef.current.value) && !value),
      showStyledPlaceholder = _useState6[0],
      setShowStyledPlaceholder = _useState6[1];

  var drop;
  var extraProps = {
    onSelect: handleTextSelect
  };

  if (showDrop) {
    drop = /*#__PURE__*/react.createElement(DropWrapper, TextInput_extends({
      ref: dropRef,
      id: id ? "text-input-drop__" + id : undefined,
      align: dropAlign,
      responsive: false,
      target: dropTarget || inputRef.current,
      onClickOutside: closeDrop,
      onEsc: closeDrop
    }, dropProps), /*#__PURE__*/react.createElement(ContainerBox, {
      overflow: "auto",
      dropHeight: dropHeight,
      onMouseMove: function onMouseMove() {
        return setMouseMovedSinceLastKey(true);
      }
    }, /*#__PURE__*/react.createElement(StyledSuggestions, {
      ref: suggestionsRef
    }, /*#__PURE__*/react.createElement(InfiniteScrollWrapper, {
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
        child = /*#__PURE__*/react.createElement(BoxWrapper, {
          align: "start",
          pad: "small"
        }, renderedLabel); // if we have a child, turn on plain

      return /*#__PURE__*/react.createElement("li", {
        key: stringLabel(suggestion) + "-" + index,
        ref: itemRef
      }, /*#__PURE__*/react.createElement(ButtonWrapper, {
        active: activeSuggestionIndex === index,
        fill: true,
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
  }, icon), /*#__PURE__*/react.createElement(KeyboardWrapper, TextInput_extends({
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
      setShowStyledPlaceholder(placeholder && typeof placeholder !== 'string' && !event.target.value);
      setValue(event.target.value);
      setActiveSuggestionIndex(resetSuggestionIndex);
      if (onChange) onChange(event);
    }
  }))), drop);
});
TextInput.displayName = 'TextInput';
var TextInputDoc;

if (false) {}

var TextInputWrapper = TextInputDoc || TextInput;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/Searcher.js











var Searcher = function Searcher(_ref) {
  var filtering = _ref.filtering,
      filters = _ref.filters,
      onFilter = _ref.onFilter,
      onFiltering = _ref.onFiltering,
      property = _ref.property;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var inputRef = (0,react.useRef)();
  var needsFocus = filtering === property;
  (0,react.useEffect)(function () {
    if (inputRef && needsFocus) {
      inputRef.current.focus();
    }
  }, [needsFocus, inputRef]);
  return filtering === property ? /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onEsc: function onEsc() {
      return onFiltering(undefined);
    }
  }, /*#__PURE__*/react.createElement(BoxWrapper, {
    width: {
      min: 'xsmall'
    },
    flex: true,
    pad: {
      horizontal: 'small'
    }
  }, /*#__PURE__*/react.createElement(TextInputWrapper, {
    name: "search-" + property,
    a11yTitle: "Search by " + property,
    ref: inputRef,
    value: filters[property],
    onChange: function onChange(event) {
      return onFilter(property, event.target.value);
    },
    onBlur: function onBlur() {
      return onFiltering(undefined);
    }
  }))) : /*#__PURE__*/react.createElement(react.Fragment, null, filters[property] ? /*#__PURE__*/react.createElement(BoxWrapper, {
    flex: false,
    pad: {
      horizontal: 'small'
    },
    direction: "row",
    align: "center"
  }, /*#__PURE__*/react.createElement(TextWrapper, null, filters[property])) : null, /*#__PURE__*/react.createElement(ButtonWrapper, {
    a11yTitle: "Open search by " + property,
    icon: /*#__PURE__*/react.createElement(FormSearch/* FormSearch */.H, {
      color: normalizeColor(filtering === property ? 'brand' : 'border', theme)
    }),
    hoverIndicator: true,
    onClick: function onClick() {
      return onFiltering(filtering === property ? undefined : property);
    }
  }));
};

Searcher.displayName = 'Searcher';
Searcher.defaultProps = {};
Object.setPrototypeOf(Searcher.defaultProps, default_props_defaultProps);

// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Blank.js
var Blank = __webpack_require__(5198);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/ExpanderCell.js
var ExpanderCell_excluded = ["context", "expanded", "onToggle", "pad"],
    ExpanderCell_excluded2 = ["background", "border", "context"];

function ExpanderCell_extends() {
  ExpanderCell_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return ExpanderCell_extends.apply(this, arguments);
}

function ExpanderCell_objectWithoutPropertiesLoose(source, excluded) {
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








 // ExpanderControl is separated from ExpanderCell to give TableCell a chance
// to set the ThemeContext dark context.

var ExpanderControl = function ExpanderControl(_ref) {
  var context = _ref.context,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      pad = _ref.pad,
      rest = ExpanderCell_objectWithoutPropertiesLoose(_ref, ExpanderCell_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var content;

  if (onToggle) {
    var ExpandIcon = theme.dataTable.icons[expanded ? 'contract' : 'expand'];
    content = /*#__PURE__*/react.createElement(ExpandIcon, {
      color: normalizeColor('border', theme)
    });
  } else {
    content = /*#__PURE__*/react.createElement(Blank/* Blank */.e, null);
  }

  var normalizedThemeProps = ExpanderCell_extends({}, theme.table[context], theme.dataTable[context]);

  delete normalizedThemeProps.background;
  delete normalizedThemeProps.border;
  delete normalizedThemeProps.pad;
  content = /*#__PURE__*/react.createElement(BoxWrapper, ExpanderCell_extends({}, normalizedThemeProps, rest, {
    align: "center",
    fill: true,
    pad: pad
  }), content);

  if (onToggle) {
    content = /*#__PURE__*/react.createElement(ButtonWrapper, {
      fill: true,
      a11yTitle: expanded ? 'collapse' : 'expand',
      hoverIndicator: true,
      onClick: onToggle,
      plain: true
    }, content);
  }

  return content;
};

var ExpanderCell = function ExpanderCell(_ref2) {
  var background = _ref2.background,
      border = _ref2.border,
      context = _ref2.context,
      rest = ExpanderCell_objectWithoutPropertiesLoose(_ref2, ExpanderCell_excluded2);

  return /*#__PURE__*/react.createElement(TableCellWrapper, {
    background: background,
    border: border,
    size: "xxsmall",
    plain: "noPad",
    verticalAlign: context === 'groupEnd' ? 'bottom' : 'top'
  }, /*#__PURE__*/react.createElement(ExpanderControl, ExpanderCell_extends({
    context: context
  }, rest)));
};

ExpanderCell.displayName = 'ExpanderCell';
ExpanderCell.defaultProps = {};
Object.setPrototypeOf(ExpanderCell.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableRow/TableRow.js
function TableRow_extends() {
  TableRow_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TableRow_extends.apply(this, arguments);
}



var TableRow = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react.createElement(StyledTableRow, TableRow_extends({
    ref: ref
  }, props));
});
TableRow.displayName = 'TableRow';
var TableRowDoc;

if (false) {}

var TableRowWrapper = TableRowDoc || TableRow;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Table/Table.js
var Table_excluded = ["caption", "children"];

function Table_objectWithoutPropertiesLoose(source, excluded) {
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




var Table = function Table(_ref) {
  var caption = _ref.caption,
      children = _ref.children,
      rest = Table_objectWithoutPropertiesLoose(_ref, Table_excluded);

  return /*#__PURE__*/react.createElement(StyledTable, rest, caption ? /*#__PURE__*/react.createElement(StyledTableDataCaption, null, caption) : null, children);
};

var TableDoc;

if (false) {}

var TableWrapper = TableDoc || Table;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableBody/TableBody.js
function TableBody_extends() {
  TableBody_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TableBody_extends.apply(this, arguments);
}




var TableBody = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react.createElement(TableContext.Provider, {
    value: "body"
  }, /*#__PURE__*/react.createElement(StyledTableBody, TableBody_extends({
    ref: ref
  }, props)));
});
TableBody.displayName = 'TableBody';
var TableBodyDoc;

if (false) {}

var TableBodyWrapper = TableBodyDoc || TableBody;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableHeader/TableHeader.js
function TableHeader_extends() {
  TableHeader_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TableHeader_extends.apply(this, arguments);
}




var TableHeader = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react.createElement(TableContext.Provider, {
    value: "header"
  }, /*#__PURE__*/react.createElement(StyledTableHeader, TableHeader_extends({
    ref: ref
  }, props)));
});
TableHeader.displayName = 'TableHeader';
var TableHeaderDoc;

if (false) {}

var TableHeaderWrapper = TableHeaderDoc || TableHeader;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableFooter/TableFooter.js
function TableFooter_extends() {
  TableFooter_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TableFooter_extends.apply(this, arguments);
}




var TableFooter = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react.createElement(TableContext.Provider, {
    value: "footer"
  }, /*#__PURE__*/react.createElement(StyledTableFooter, TableFooter_extends({
    ref: ref
  }, props)));
});
TableFooter.displayName = 'TableFooter';
var TableFooterDoc;

if (false) {}

var TableFooterWrapper = TableFooterDoc || TableFooter;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/StyledDataTable.js









 // border-collapse: separate is needed so pinned header/footer borders work

var StyledDataTable = (0,styled_components_browser_esm.default)(TableWrapper).withConfig({
  displayName: "StyledDataTable",
  componentId: "xrlyjm-0"
})(["position:relative;border-spacing:0;border-collapse:separate;height:auto;", " ", " ", ";"], genericStyles, function (props) {
  return props.fillProp && fillStyle(props.fillProp);
}, function (props) {
  return props.theme.dataTable && props.theme.dataTable.body && props.theme.dataTable.body.extend;
});
StyledDataTable.defaultProps = {};
Object.setPrototypeOf(StyledDataTable.defaultProps, default_props_defaultProps); // when paginated, this wraps the data table and pagination component

var StyledContainer = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "StyledDataTable__StyledContainer",
  componentId: "xrlyjm-1"
})(["", ";"], function (props) {
  return props.theme.dataTable && props.theme.dataTable.container && props.theme.dataTable.container.extend;
});
StyledContainer.defaultProps = {};
Object.setPrototypeOf(StyledContainer.defaultProps, default_props_defaultProps);
var StyledDataTable_hoverStyle = (0,styled_components_browser_esm.css)(["", " color:", ";"], function (props) {
  return backgroundStyle(normalizeColor(props.theme.table && props.theme.table.row && props.theme.table.row.hover && props.theme.table.row.hover.background || props.theme.global.hover.background, props.theme), props.theme);
}, function (props) {
  return normalizeColor(props.theme.table && props.theme.table.row && props.theme.table.row.hover && props.theme.table.row.hover.color || props.theme.global.hover.color, props.theme);
});
var StyledDataTableRow = (0,styled_components_browser_esm.default)(TableRowWrapper).withConfig({
  displayName: "StyledDataTable__StyledDataTableRow",
  componentId: "xrlyjm-2"
})(["", " ", "   ", ""], function (props) {
  return props.size && "\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ";
}, function (props) {
  return props.onClick && "\n    cursor: pointer;\n  ";
}, function (props) {
  return props.active && StyledDataTable_hoverStyle;
});
StyledDataTableRow.defaultProps = {};
Object.setPrototypeOf(StyledDataTableRow.defaultProps, default_props_defaultProps); // focus styling other than outline doesn't work on <tbody />

var StyledDataTableBody = (0,styled_components_browser_esm.default)(TableBodyWrapper).withConfig({
  displayName: "StyledDataTable__StyledDataTableBody",
  componentId: "xrlyjm-3"
})(["", " &:focus{", "}&:focus:not(:focus-visible){", "}"], function (props) {
  return props.size && "\n    display: block;\n    width: 100%;\n    max-height: " + props.theme.global.size[props.size] + ";\n    overflow: auto;\n  ";
}, focusStyle({
  skipSvgChildren: true,
  forceOutline: true
}), unfocusStyle({
  skipSvgChildren: true,
  forceOutline: true
}));
StyledDataTableBody.defaultProps = {};
Object.setPrototypeOf(StyledDataTableBody.defaultProps, default_props_defaultProps);
var StyledDataTableHeader = (0,styled_components_browser_esm.default)(TableHeaderWrapper).withConfig({
  displayName: "StyledDataTable__StyledDataTableHeader",
  componentId: "xrlyjm-4"
})(["", ""], function (props) {
  return props.size && "\n    display: table;\n    width: calc(100% - " + props.scrollOffset + "px);\n    table-layout: fixed;\n  ";
});
StyledDataTableHeader.defaultProps = {};
Object.setPrototypeOf(StyledDataTableHeader.defaultProps, default_props_defaultProps);
var StyledDataTableFooter = (0,styled_components_browser_esm.default)(TableFooterWrapper).withConfig({
  displayName: "StyledDataTable__StyledDataTableFooter",
  componentId: "xrlyjm-5"
})(["", " ", ""], function (props) {
  return props.size && "\n    display: table;\n    width: calc(100% - " + props.scrollOffset + "px);\n    table-layout: fixed;\n  ";
}, function (props) {
  return props.pin && "\n      /* Safari needs the relative positioning of tfoot specified */\n      position: sticky;\n      bottom: 0;\n      z-index: 1;\n  ";
});
StyledDataTableFooter.defaultProps = {};
Object.setPrototypeOf(StyledDataTableFooter.defaultProps, default_props_defaultProps);
var StyledDataTableCell = (0,styled_components_browser_esm.default)(TableCellWrapper).withConfig({
  displayName: "StyledDataTable__StyledDataTableCell",
  componentId: "xrlyjm-6"
})(["", ";", ""], function (props) {
  return props.context === 'header' && props.theme.dataTable && props.theme.dataTable.header && props.theme.dataTable.header.extend;
}, function (props) {
  return props.pin && props.pin.length > 0 && "\n    position: sticky;\n    " + props.pin.map(function (p) {
    return p + ": " + (props.pinnedOffset && props.pinnedOffset[p] && props.pinnedOffset[p] + "px" || 0) + ";";
  }).join(' ') + "\n    z-index: " + Object.keys(props.pin).length + ";\n    " + (props.theme.dataTable && props.theme.dataTable.pinned && props.theme.dataTable.pinned[props.context] && props.theme.dataTable.pinned[props.context].extend ? props.theme.dataTable.pinned[props.context].extend : '') + "\n  ";
});
StyledDataTableCell.defaultProps = {};
Object.setPrototypeOf(StyledDataTableCell.defaultProps, default_props_defaultProps);
var StyledDataTable_StyledPlaceholder = (0,styled_components_browser_esm.default)('caption').withConfig({
  displayName: "StyledDataTable__StyledPlaceholder",
  componentId: "xrlyjm-7"
})(["position:absolute;", " ", " left:0;right:0;"], function (props) {
  return "top: " + (props.top || 0) + "px;";
}, function (props) {
  return "bottom: " + (props.bottom || 0) + "px;";
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/buildState.js
// This file contains helper functions for DataTable, to keep the component
// files simpler.
var set = function set(obj, path, value) {
  var parts = path;
  if (Object(obj) !== obj) return obj;
  if (!Array.isArray(path)) parts = path.toString().match(/[^.[\]]+/g) || [];
  parts.slice(0, -1).reduce(function (acc, item, index) {
    if (Object(acc[item]) === acc[item]) {
      return acc[item];
    }

    acc[item] = Math.abs(parts[index + 1]) > 0 === +parts[index + 1] ? [] : {};
    return acc[item];
  }, obj)[parts[parts.length - 1]] = value;
  return obj;
}; // get the value for the property in the datum object

var datumValue = function datumValue(datum, property) {
  if (!property) return undefined;
  var parts = property.split('.');

  if (parts.length === 1) {
    return datum[property];
  }

  if (!datum[parts[0]]) {
    return undefined;
  }

  return datumValue(datum[parts[0]], parts.slice(1).join('.'));
}; // get the primary property name

var normalizePrimaryProperty = function normalizePrimaryProperty(columns, primaryKey) {
  var result;
  columns.forEach(function (column) {
    // remember the first key property
    if (column.primary && !result) {
      result = column.property;
    }
  });

  if (!result) {
    if (primaryKey === false) result = undefined;else if (primaryKey) result = primaryKey;else if (columns.length > 0) result = columns[0].property;
  }

  return result;
}; // initialize filters with empty strings

var initializeFilters = function initializeFilters(columns) {
  var result = {};
  columns.forEach(function (column) {
    if (column.search) {
      result[column.property] = '';
    }
  });
  return result;
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

var escapeRegExp = function escapeRegExp(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}; // filter data based on filters then sort


var filterAndSortData = function filterAndSortData(data, filters, onSearch, sort) {
  var result = data;

  if (!onSearch) {
    var regexps = {};
    Object.keys(filters).filter(function (n) {
      return filters[n];
    }).forEach(function (n) {
      regexps[n] = new RegExp(escapeRegExp(filters[n]), 'i');
    });

    if (Object.keys(regexps).length > 0) {
      result = data.filter(function (datum) {
        return !Object.keys(regexps).some(function (property) {
          return !regexps[property].test(datumValue(datum, property));
        });
      });
    }
  }

  if (sort && !sort.external) {
    var property = sort.property,
        direction = sort.direction;
    result = result === data ? [].concat(data) : result; // don't sort caller's data

    var sortAsc = direction === 'asc';
    var before = sortAsc ? 1 : -1;
    var after = sortAsc ? -1 : 1;
    result.sort(function (d1, d2) {
      var d1Val = datumValue(d1, property);
      var d2Val = datumValue(d2, property);

      if (typeof d1Val === 'string' && typeof d2Val === 'string') {
        var sortResult = d1Val.localeCompare(d2Val, undefined, {
          sensitivity: 'base'
        });
        return sortAsc ? sortResult : -sortResult;
      }

      if (d1Val > d2Val) return before;
      if (d1Val < d2Val) return after;
      return 0;
    });
  }

  return result;
}; // aggregate reducers

var sumReducer = function sumReducer(accumulated, next) {
  return accumulated + next;
};

var minReducer = function minReducer(accumulated, next) {
  return accumulated === undefined ? next : Math.min(accumulated, next);
};

var maxReducer = function maxReducer(accumulated, next) {
  return accumulated === undefined ? next : Math.max(accumulated, next);
};

var reducers = {
  max: maxReducer,
  min: minReducer,
  sum: sumReducer
}; // aggregate reducers init values

var reducersInitValues = {
  min: Number.MAX_VALUE,
  max: Number.MIN_VALUE,
  sum: 0
}; // aggregate a single column

var aggregateColumn = function aggregateColumn(column, data) {
  var value;

  if (column.aggregate === 'avg') {
    value = data.map(function (d) {
      return datumValue(d, column.property);
    }).reduce(sumReducer);
    value /= data.length;
  } else {
    value = data.map(function (d) {
      return datumValue(d, column.property);
    }).reduce(reducers[column.aggregate], reducersInitValues[column.aggregate]);
  }

  return value;
}; // aggregate all columns that can


var aggregate = function aggregate(columns, data) {
  var result = {};
  columns.forEach(function (column) {
    if (column.aggregate) {
      var value = aggregateColumn(column, data);
      result = set(result, column.property, value);
    }
  });
  return result;
}; // build the values for the footer cells


var buildFooterValues = function buildFooterValues(columns, data) {
  var aggregateValues = aggregate(columns, data);
  var result = {};
  columns.forEach(function (column) {
    if (column.footer) {
      if (typeof column.footer === 'string') {
        result = set(result, column.property, column.footer);
      } else if (column.footer.aggregate) {
        var value = datumValue(aggregateValues, column.property);
        result = set(result, column.property, value);
      }
    }
  });
  return result;
}; // looks at the groupBy property of each data object and returns an
// array with one item for each unique value of that property.

var buildGroups = function buildGroups(columns, data, groupBy) {
  var result;

  if (groupBy) {
    result = [];
    var groupMap = {};
    data.forEach(function (datum) {
      var groupByProperty = groupBy.property ? groupBy.property : groupBy;
      var groupValue = datumValue(datum, groupByProperty);

      if (!groupMap[groupValue]) {
        var group = {
          data: [],
          datum: {},
          key: groupValue
        };
        group.datum[groupByProperty] = groupValue;
        result.push(group);
        groupMap[groupValue] = group;
      }

      groupMap[groupValue].data.push(datum);
    }); // include any aggregate column values across the data for each group

    columns.forEach(function (column) {
      if (column.aggregate) {
        result.forEach(function (group) {
          var datum = group.datum;
          datum[column.property] = aggregateColumn(column, group.data);
        });
      }
    });
  }

  return result;
}; // build group expanded state, expanding any in groupBy.expand

var buildGroupState = function buildGroupState(groups, groupBy) {
  var result = {};

  if (groups) {
    groups.forEach(function (_ref) {
      var key = _ref.key;
      result[key] = {
        expanded: false
      };
    });
  }

  if (groupBy && groupBy.expand) {
    groupBy.expand.forEach(function (value) {
      result[value] = {
        expanded: true
      };
    });
  }

  return result;
};
var normalizeBackgroundColor = function normalizeBackgroundColor(theme) {
  var background = theme.background; // context background

  if (typeof background === 'string') return background;
  if (background.light && background.dark) return background;
  if (background.color) return background.color;
  return undefined;
};
var normalizeRowProp = function normalizeRowProp(name, rowProp, prop) {
  if (rowProp && rowProp[name]) return rowProp[name];
  return prop;
};
var tableContextNames = ['header', 'body', 'footer'];
var cellPropertyNames = ['background', 'border', 'pad']; // Convert property specific cell props to context specific cell props.
// For example, background={{ header: { background } }}
// will become cellProps.header.background

var normalizeCellProps = function normalizeCellProps(props, theme) {
  var result = {};
  tableContextNames.forEach(function (context) {
    result[context] = {
      pinned: {}
    };
    cellPropertyNames.forEach(function (propName) {
      var _props$propName, _theme$dataTable, _theme$dataTable$cont, _theme$table, _theme$table$context, _props$propName3, _props$propName3$pinn, _props$propName5, _theme$dataTable2, _theme$dataTable2$pin, _theme$dataTable2$pin2;

      var value = (props == null ? void 0 : (_props$propName = props[propName]) == null ? void 0 : _props$propName[context]) || // if the propName is used without context, it applies to all contexts
      tableContextNames.every(function (n) {
        var _props$propName2;

        return !(props != null && (_props$propName2 = props[propName]) != null && _props$propName2[n]);
      }) && (props == null ? void 0 : props[propName]) || (theme == null ? void 0 : (_theme$dataTable = theme.dataTable) == null ? void 0 : (_theme$dataTable$cont = _theme$dataTable[context]) == null ? void 0 : _theme$dataTable$cont[propName]) || (theme == null ? void 0 : (_theme$table = theme.table) == null ? void 0 : (_theme$table$context = _theme$table[context]) == null ? void 0 : _theme$table$context[propName]);
      if (value !== undefined) result[context][propName] = value; // pinned case

      value = (props == null ? void 0 : (_props$propName3 = props[propName]) == null ? void 0 : (_props$propName3$pinn = _props$propName3.pinned) == null ? void 0 : _props$propName3$pinn[context]) || context === 'body' && tableContextNames.every(function (n) {
        var _props$propName4, _props$propName4$pinn;

        return !(props != null && (_props$propName4 = props[propName]) != null && (_props$propName4$pinn = _props$propName4.pinned) != null && _props$propName4$pinn[n]);
      }) && (props == null ? void 0 : (_props$propName5 = props[propName]) == null ? void 0 : _props$propName5.pinned) || (theme == null ? void 0 : (_theme$dataTable2 = theme.dataTable) == null ? void 0 : (_theme$dataTable2$pin = _theme$dataTable2.pinned) == null ? void 0 : (_theme$dataTable2$pin2 = _theme$dataTable2$pin[context]) == null ? void 0 : _theme$dataTable2$pin2[propName]);

      if (value !== undefined) {
        if (propName === 'background' && theme.background && value.opacity && !value.color) // theme context has an active background color but the
          // theme doesn't set an explicit color, repeat the context
          // background explicitly
          value.color = normalizeBackgroundColor(theme);
        if (context === 'body') // in case we have pinned columns, store the pinned stuff in
          // cellProps.body.pinned
          result[context].pinned[propName] = value;else if (props.pin === true || props.pin === context) // this context is pinned, use the pinned value directly
          result[context][propName] = value;
      }
    });
  });
  return result;
};
var normalizeRowCellProps = function normalizeRowCellProps(rowProps, cellProps, primaryKey, index) {
  var result = {
    pinned: {}
  };
  ['background', 'border', 'pad'].forEach(function (propName) {
    var _rowProps$primaryKey;

    var row = primaryKey && rowProps && (rowProps == null ? void 0 : (_rowProps$primaryKey = rowProps[primaryKey]) == null ? void 0 : _rowProps$primaryKey[propName]);
    var cell = cellProps[propName];
    var value = row && (Array.isArray(row) ? row[index % row.length] : row) || (Array.isArray(cell) ? cell[index % cell.length] : cell);
    if (value !== undefined) result[propName] = value;
    var rowPin = rowProps && rowProps.pinned && rowProps.pinned[propName];
    var cellPin = cellProps.pinned[propName];
    value = rowPin && (Array.isArray(rowPin) ? rowPin[index % rowPin.length] : rowPin) || (Array.isArray(cellPin) ? cellPin[index % cellPin.length] : cellPin);
    if (value !== undefined) result.pinned[propName] = value;
  });
  return result;
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/Header.js
var Header_excluded = ["background", "border", "color", "font", "gap", "pad", "units"],
    Header_excluded2 = ["cellProps", "columns", "data", "fill", "filtering", "filters", "groups", "groupState", "onFilter", "onFiltering", "onResize", "onSelect", "onSort", "onToggle", "onWidths", "pin", "pinnedOffset", "primaryProperty", "selected", "rowDetails", "sort", "widths"];

function DataTable_Header_extends() {
  DataTable_Header_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DataTable_Header_extends.apply(this, arguments);
}

function Header_objectWithoutPropertiesLoose(source, excluded) {
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















 // separate theme values into groupings depending on what
// part of header cell they should style

var separateThemeProps = function separateThemeProps(theme) {
  var _theme$dataTable$head = theme.dataTable.header,
      background = _theme$dataTable$head.background,
      border = _theme$dataTable$head.border,
      color = _theme$dataTable$head.color,
      font = _theme$dataTable$head.font,
      gap = _theme$dataTable$head.gap,
      pad = _theme$dataTable$head.pad,
      units = _theme$dataTable$head.units,
      rest = Header_objectWithoutPropertiesLoose(_theme$dataTable$head, Header_excluded);

  var textProps = DataTable_Header_extends({
    color: color
  }, font);

  var iconProps = {
    color: color
  };

  var layoutProps = DataTable_Header_extends({}, rest);

  return [layoutProps, textProps, iconProps];
}; // build up CSS from basic to specific based on the supplied sub-object paths.
// adapted from StyledButtonKind to only include parts relevant for DataTable


var buttonStyle = function buttonStyle(_ref) {
  var pad = _ref.pad,
      theme = _ref.theme;
  var styles = [];

  var _separateThemeProps = separateThemeProps(theme),
      layoutProps = _separateThemeProps[0],
      iconProps = _separateThemeProps[2]; // if cell is sortable, we want pad to be applied
  // to the button instead of the cell


  if (pad) {
    styles.push(kindPartStyles({
      pad: pad
    }, theme));
  }

  if (layoutProps) {
    styles.push(kindPartStyles(layoutProps, theme));
  }

  if (layoutProps.hover) {
    // CSS for this sub-object in the theme
    var partStyles = kindPartStyles(layoutProps.hover, theme);
    if (partStyles.length > 0) styles.push((0,styled_components_browser_esm.css)(["&:hover{", "}"], partStyles));
  }

  if (iconProps.color) {
    styles.push((0,styled_components_browser_esm.css)(["svg{stroke:", ";fill:", ";}"], normalizeColor(iconProps.color, theme), normalizeColor(iconProps.color, theme)));
  }

  return styles;
};

var StyledHeaderCellButton = (0,styled_components_browser_esm.default)(ButtonWrapper).withConfig({
  displayName: "Header__StyledHeaderCellButton",
  componentId: "sc-1baku5q-0"
})(["", ""], function (props) {
  return buttonStyle(props);
}); // allow extend to spread onto Box that surrounds column label

var StyledContentBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "Header__StyledContentBox",
  componentId: "sc-1baku5q-1"
})(["", ""], function (props) {
  return props.extend;
});
var Header_Header = /*#__PURE__*/(0,react.forwardRef)(function (_ref2, ref) {
  var cellProps = _ref2.cellProps,
      columns = _ref2.columns,
      data = _ref2.data,
      fill = _ref2.fill,
      filtering = _ref2.filtering,
      filters = _ref2.filters,
      groups = _ref2.groups,
      groupState = _ref2.groupState,
      onFilter = _ref2.onFilter,
      onFiltering = _ref2.onFiltering,
      onResize = _ref2.onResize,
      onSelect = _ref2.onSelect,
      onSort = _ref2.onSort,
      onToggle = _ref2.onToggle,
      onWidths = _ref2.onWidths,
      pinProp = _ref2.pin,
      pinnedOffset = _ref2.pinnedOffset,
      primaryProperty = _ref2.primaryProperty,
      selected = _ref2.selected,
      rowDetails = _ref2.rowDetails,
      sort = _ref2.sort,
      widths = _ref2.widths,
      rest = Header_objectWithoutPropertiesLoose(_ref2, Header_excluded2);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _separateThemeProps2 = separateThemeProps(theme),
      layoutProps = _separateThemeProps2[0],
      textProps = _separateThemeProps2[1];

  var _useState = (0,react.useState)([]),
      cellWidths = _useState[0],
      setCellWidths = _useState[1];

  var updateWidths = (0,react.useCallback)(function (width) {
    return setCellWidths(function (values) {
      return [].concat(values, [width]);
    });
  }, []);
  (0,react.useEffect)(function () {
    if (onWidths && cellWidths.length !== 0) {
      onWidths(cellWidths);
    }
  }, [cellWidths, onWidths]);
  var pin = pinProp ? ['top'] : [];
  return /*#__PURE__*/react.createElement(StyledDataTableHeader, DataTable_Header_extends({
    ref: ref,
    fillProp: fill
  }, rest), /*#__PURE__*/react.createElement(StyledDataTableRow, null, groups && /*#__PURE__*/react.createElement(ExpanderCell, {
    background: cellProps.background,
    border: cellProps.border,
    context: "header",
    expanded: Object.keys(groupState).filter(function (k) {
      return !groupState[k].expanded;
    }).length === 0,
    onToggle: onToggle,
    pad: cellProps.pad
  }), (selected || onSelect) && /*#__PURE__*/react.createElement(StyledDataTableCell, {
    background: cellProps.background,
    onWidth: updateWidths,
    plain: "noPad",
    size: "auto",
    context: "header",
    scope: "col",
    pin: pin
  }, onSelect && /*#__PURE__*/react.createElement(CheckBoxWrapper, {
    a11yTitle: selected.length === data.length ? 'unselect all' : 'select all',
    checked: selected.length > 0 && data.length > 0 && selected.length === data.length,
    indeterminate: selected.length > 0 && selected.length < data.length,
    onChange: function onChange() {
      // if any are selected, clear selection
      if (selected.length === data.length) onSelect([]); // if none are selected, select all data
      else onSelect(data.map(function (datum) {
        return datumValue(datum, primaryProperty);
      }));
    },
    pad: cellProps.pad
  })), rowDetails && /*#__PURE__*/react.createElement(TableCellWrapper, {
    size: "xxsmall",
    plain: true,
    pad: "none"
  }), columns.map(function (_ref3) {
    var property = _ref3.property,
        header = _ref3.header,
        align = _ref3.align,
        columnPin = _ref3.pin,
        search = _ref3.search,
        sortable = _ref3.sortable,
        verticalAlign = _ref3.verticalAlign,
        size = _ref3.size,
        units = _ref3.units;
    var content;
    var unitsContent = units ? /*#__PURE__*/react.createElement(TextWrapper, DataTable_Header_extends({}, textProps, theme.dataTable.header.units), units) : undefined;

    if (typeof header === 'string') {
      content = /*#__PURE__*/react.createElement(TextWrapper, textProps, header);

      if (Object.keys(layoutProps).length && (sortable === false || !onSort)) {
        // apply rest of layout styling if cell is not sortable,
        // otherwise this styling will be applied by
        // StyledHeaderCellButton
        content = /*#__PURE__*/react.createElement(StyledContentBox, layoutProps, content);
      }
    } else content = header;

    if (onSort && sortable !== false) {
      var Icon;

      if (onSort && sortable !== false) {
        if (sort && sort.property === property) {
          Icon = theme.dataTable.icons[sort.direction !== 'asc' ? 'ascending' : 'descending'];
        } else if (theme.dataTable.icons.sortable) {
          Icon = theme.dataTable.icons.sortable;
        }
      }

      content = /*#__PURE__*/react.createElement(StyledHeaderCellButton, {
        plain: true,
        column: property,
        fill: "vertical",
        onClick: onSort(property),
        sort: sort,
        pad: cellProps.pad,
        sortable: true
      }, /*#__PURE__*/react.createElement(BoxWrapper, {
        direction: "row",
        align: "center",
        gap: "xsmall",
        justify: align
      }, content, Icon && /*#__PURE__*/react.createElement(Icon, null)));
    }

    if (unitsContent) {
      content = /*#__PURE__*/react.createElement(BoxWrapper, {
        align: "baseline",
        direction: "row"
      }, content, unitsContent);
    } // content should fill any available space in cell


    content = /*#__PURE__*/react.createElement(BoxWrapper, {
      flex: "grow"
    }, content);

    if (search || onResize) {
      var resizer = onResize ? /*#__PURE__*/react.createElement(Resizer, {
        property: property,
        onResize: onResize
      }) : null;
      var searcher = search && filters ? /*#__PURE__*/react.createElement(Searcher, {
        filtering: filtering,
        filters: filters,
        property: property,
        onFilter: onFilter,
        onFiltering: onFiltering
      }) : null;
      content = /*#__PURE__*/react.createElement(BoxWrapper, {
        direction: "row",
        align: "center",
        justify: !align || align === 'start' ? 'between' : align,
        gap: theme.dataTable.header.gap,
        fill: "vertical",
        style: onResize ? {
          position: 'relative'
        } : undefined
      }, content, searcher && resizer ? /*#__PURE__*/react.createElement(BoxWrapper, {
        flex: "shrink",
        direction: "row",
        align: "center",
        gap: theme.dataTable.header.gap
      }, searcher, resizer) : searcher || resizer);
    }

    var cellPin = [].concat(pin);
    if (columnPin) cellPin.push('left');
    return /*#__PURE__*/react.createElement(StyledDataTableCell, {
      key: property,
      align: align,
      context: "header",
      verticalAlign: verticalAlign,
      background: cellProps.background,
      border: cellProps.border,
      onWidth: updateWidths // if sortable, pad will be included in the button styling
      ,
      pad: sortable === false || !onSort ? cellProps.pad : 'none',
      pin: cellPin,
      plain: true,
      pinnedOffset: pinnedOffset && pinnedOffset[property],
      scope: "col",
      size: widths && widths[property] ? undefined : size,
      style: widths && widths[property] ? {
        width: widths[property]
      } : undefined
    }, content);
  })));
});
Header_Header.displayName = 'Header';
Header_Header.defaultProps = {};
Object.setPrototypeOf(Header_Header.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/Cell.js
function Cell_extends() {
  Cell_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Cell_extends.apply(this, arguments);
}








var Cell = /*#__PURE__*/(0,react.memo)(function (_ref) {
  var background = _ref.background,
      border = _ref.border,
      _ref$column = _ref.column,
      align = _ref$column.align,
      columnPin = _ref$column.pin,
      plain = _ref$column.plain,
      footer = _ref$column.footer,
      property = _ref$column.property,
      render = _ref$column.render,
      verticalAlign = _ref$column.verticalAlign,
      size = _ref$column.size,
      datum = _ref.datum,
      pad = _ref.pad,
      cellPin = _ref.pin,
      pinnedOffset = _ref.pinnedOffset,
      primaryProperty = _ref.primaryProperty,
      scope = _ref.scope;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var value = datumValue(datum, property);
  var context = (0,react.useContext)(TableContext);
  var renderContexts = context === 'body' || context === 'footer' && footer && footer.aggregate;
  var content;

  if (render && renderContexts) {
    content = render(datum);
  } else if (value !== undefined) {
    content = value;
  }

  if (typeof content === 'string' || typeof content === 'number') {
    var textProps = property === primaryProperty ? theme.dataTable.primary : {};
    content = /*#__PURE__*/react.createElement(TextWrapper, textProps, content);
  }

  var pin = [];
  if (cellPin) pin.push.apply(pin, cellPin);
  if (columnPin) pin.push('left');
  return /*#__PURE__*/react.createElement(StyledDataTableCell, Cell_extends({
    scope: scope
  }, theme.dataTable[context], {
    align: align,
    context: context,
    verticalAlign: verticalAlign,
    size: size,
    background: background,
    pinnedOffset: pinnedOffset,
    border: border,
    pad: pad,
    pin: pin,
    plain: plain ? 'noPad' : undefined
  }), content);
});
Cell.displayName = 'Cell';
Cell.defaultProps = {};
Object.setPrototypeOf(Cell.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/Footer.js
var Footer_excluded = ["cellProps", "columns", "fill", "footerValues", "groups", "onSelect", "pin", "pinnedOffset", "primaryProperty", "selected"];

function DataTable_Footer_extends() {
  DataTable_Footer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DataTable_Footer_extends.apply(this, arguments);
}

function Footer_objectWithoutPropertiesLoose(source, excluded) {
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







var Footer_Footer = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var cellProps = _ref.cellProps,
      columns = _ref.columns,
      fill = _ref.fill,
      footerValues = _ref.footerValues,
      groups = _ref.groups,
      onSelect = _ref.onSelect,
      pinProp = _ref.pin,
      pinnedOffset = _ref.pinnedOffset,
      primaryProperty = _ref.primaryProperty,
      selected = _ref.selected,
      rest = Footer_objectWithoutPropertiesLoose(_ref, Footer_excluded);

  var pin = pinProp ? ['bottom'] : [];
  return /*#__PURE__*/react.createElement(StyledDataTableFooter, DataTable_Footer_extends({
    ref: ref,
    fillProp: fill,
    pin: pinProp
  }, rest), /*#__PURE__*/react.createElement(TableRowWrapper, null, groups && /*#__PURE__*/react.createElement(TableCellWrapper, {
    plain: true,
    size: "xxsmall",
    pad: "none",
    verticalAlign: "top",
    background: cellProps.background,
    border: cellProps.border
  }), (selected || onSelect) && /*#__PURE__*/react.createElement(StyledDataTableCell, {
    background: cellProps.background,
    context: "footer",
    pin: pin
  }), columns.map(function (column) {
    var cellPin = [].concat(pin);
    if (column.pin) cellPin.push('left');
    return /*#__PURE__*/react.createElement(Cell, {
      key: column.property,
      background: column.pin && cellProps.pinned.background || cellProps.background,
      border: column.pin && cellProps.pinned.border || cellProps.border,
      context: "footer",
      column: column,
      datum: footerValues,
      pad: column.pin && cellProps.pinned.pad || cellProps.pad,
      pin: pin.length ? pin : undefined,
      pinnedOffset: pinnedOffset && pinnedOffset[column.property],
      primaryProperty: primaryProperty
    });
  })));
});
Footer_Footer.displayName = 'Footer';
Footer_Footer.defaultProps = {};
Object.setPrototypeOf(Footer_Footer.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/Body.js
var Body_excluded = ["cellProps", "columns", "data", "onMore", "replace", "onClickRow", "onSelect", "pinnedOffset", "primaryProperty", "rowProps", "selected", "rowDetails", "show", "size", "step", "rowExpand", "setRowExpand"];

function Body_extends() {
  Body_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Body_extends.apply(this, arguments);
}

function Body_objectWithoutPropertiesLoose(source, excluded) {
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












var Row = /*#__PURE__*/(0,react.memo)(function (_ref) {
  var cellProps = _ref.cellProps,
      primaryValue = _ref.primaryValue,
      index = _ref.index,
      rowRef = _ref.rowRef,
      size = _ref.size,
      active = _ref.active,
      onClickRow = _ref.onClickRow,
      datum = _ref.datum,
      selected = _ref.selected,
      onSelect = _ref.onSelect,
      isSelected = _ref.isSelected,
      rowDetails = _ref.rowDetails,
      isRowExpanded = _ref.isRowExpanded,
      setActive = _ref.setActive,
      setRowExpand = _ref.setRowExpand,
      rowExpand = _ref.rowExpand,
      columns = _ref.columns,
      pinnedOffset = _ref.pinnedOffset,
      primaryProperty = _ref.primaryProperty,
      data = _ref.data;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StyledDataTableRow, {
    ref: rowRef,
    size: size,
    active: active,
    onClick: onClickRow ? function (event) {
      // extract from React's synthetic event pool
      event.persist();
      var adjustedEvent = event;
      adjustedEvent.datum = datum;
      adjustedEvent.index = index;
      onClickRow(adjustedEvent);
    } : undefined,
    onMouseEnter: onClickRow ? function () {
      setActive(index);
    } : undefined,
    onMouseLeave: onClickRow ? function () {
      return setActive(undefined);
    } : undefined
  }, (selected || onSelect) && /*#__PURE__*/react.createElement(TableCellWrapper, {
    background: cellProps.background,
    plain: "noPad",
    size: "auto"
  }, /*#__PURE__*/react.createElement(CheckBoxWrapper, {
    a11yTitle: (isSelected ? 'unselect' : 'select') + " " + primaryValue,
    checked: isSelected,
    disabled: !onSelect,
    onChange: function onChange() {
      if (isSelected) {
        onSelect(selected.filter(function (s) {
          return s !== primaryValue;
        }));
      } else onSelect([].concat(selected, [primaryValue]));
    },
    pad: cellProps.pad
  })), rowDetails && /*#__PURE__*/react.createElement(ExpanderCell, {
    context: isRowExpanded ? 'groupHeader' : 'body',
    expanded: isRowExpanded,
    onToggle: function onToggle() {
      if (isRowExpanded) {
        setRowExpand(rowExpand.filter(function (s) {
          return s !== index;
        }));
      } else {
        setRowExpand([].concat(rowExpand, [index]));
      }
    },
    pad: cellProps.pad
  }), columns.map(function (column) {
    return /*#__PURE__*/react.createElement(Cell, {
      key: column.property,
      background: column.pin && cellProps.pinned.background || cellProps.background,
      border: column.pin && cellProps.pinned.border || cellProps.border,
      context: "body",
      column: column,
      datum: datum,
      pad: column.pin && cellProps.pinned.pad || cellProps.pad,
      pinnedOffset: pinnedOffset && pinnedOffset[column.property],
      primaryProperty: primaryProperty,
      scope: column.primary || column.property === primaryProperty ? 'row' : undefined
    });
  })), rowDetails && isRowExpanded && /*#__PURE__*/react.createElement(StyledDataTableRow, {
    key: index.toString() + "_expand"
  }, (selected || onSelect) && /*#__PURE__*/react.createElement(TableCellWrapper, null), /*#__PURE__*/react.createElement(TableCellWrapper, {
    colSpan: columns.length + 1
  }, rowDetails(data[index]))));
});
var Body = /*#__PURE__*/(0,react.forwardRef)(function (_ref2, ref) {
  var cellPropsProp = _ref2.cellProps,
      columns = _ref2.columns,
      data = _ref2.data,
      onMore = _ref2.onMore,
      replace = _ref2.replace,
      onClickRow = _ref2.onClickRow,
      onSelect = _ref2.onSelect,
      pinnedOffset = _ref2.pinnedOffset,
      primaryProperty = _ref2.primaryProperty,
      rowProps = _ref2.rowProps,
      selected = _ref2.selected,
      rowDetails = _ref2.rowDetails,
      show = _ref2.show,
      size = _ref2.size,
      step = _ref2.step,
      rowExpand = _ref2.rowExpand,
      setRowExpand = _ref2.setRowExpand,
      rest = Body_objectWithoutPropertiesLoose(_ref2, Body_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || defaultProps.theme;

  var _React$useState = react.useState(),
      active = _React$useState[0],
      setActive = _React$useState[1];

  var _React$useState2 = react.useState(),
      lastActive = _React$useState2[0],
      setLastActive = _React$useState2[1];

  return /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onEnter: onClickRow && active >= 0 ? function (event) {
      event.persist();
      var adjustedEvent = event;
      adjustedEvent.datum = data[active];
      onClickRow(adjustedEvent);
    } : undefined,
    onUp: onClickRow && active ? function () {
      return setActive(active - 1);
    } : undefined,
    onDown: onClickRow && data.length ? function () {
      setActive(active >= 0 ? Math.min(active + 1, data.length - 1) : 0);
    } : undefined
  }, /*#__PURE__*/react.createElement(StyledDataTableBody, Body_extends({
    ref: ref,
    size: size,
    tabIndex: onClickRow ? 0 : undefined,
    onFocus: function onFocus() {
      return !active && active !== 0 ? setActive(lastActive) : setActive(active);
    },
    onBlur: function onBlur() {
      setLastActive(active);
      setActive(undefined);
    }
  }, rest), /*#__PURE__*/react.createElement(InfiniteScrollWrapper, {
    items: data,
    onMore: onMore,
    replace: replace,
    renderMarker: function renderMarker(marker) {
      return /*#__PURE__*/react.createElement(TableRowWrapper, null, /*#__PURE__*/react.createElement(TableCellWrapper, null, marker));
    },
    scrollableAncestor: "window",
    show: show,
    step: step
  }, function (datum, index, rowRef) {
    var primaryValue = primaryProperty ? datumValue(datum, primaryProperty) : undefined;
    var isSelected = selected && selected.includes(primaryValue);
    var isRowExpanded = rowExpand && rowExpand.includes(index);
    var cellProps = normalizeRowCellProps(rowProps, cellPropsProp, primaryValue, index);
    return /*#__PURE__*/react.createElement(Row, {
      key: index,
      setActive: setActive,
      rowRef: rowRef,
      cellProps: cellProps,
      primaryValue: primaryValue,
      isSelected: isSelected,
      isRowExpanded: isRowExpanded,
      index: index,
      size: size,
      active: active >= 0 ? active === index : undefined,
      onClickRow: onClickRow,
      datum: datum,
      selected: selected,
      onSelect: onSelect,
      rowDetails: rowDetails,
      setRowExpand: setRowExpand,
      rowExpand: rowExpand,
      columns: columns,
      primaryProperty: primaryProperty,
      rowProps: rowProps,
      data: data,
      theme: theme,
      pinnedOffset: pinnedOffset
    });
  })));
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/GroupedBody.js
var GroupedBody_excluded = ["cellProps", "columns", "groupBy", "groups", "groupState", "pinnedOffset", "primaryProperty", "onMore", "onSelect", "onToggle", "replace", "rowProps", "selected", "size", "step"];

function GroupedBody_extends() {
  GroupedBody_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return GroupedBody_extends.apply(this, arguments);
}

function GroupedBody_objectWithoutPropertiesLoose(source, excluded) {
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










var GroupedBody = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var cellPropsProp = _ref.cellProps,
      columns = _ref.columns,
      groupBy = _ref.groupBy,
      groups = _ref.groups,
      groupState = _ref.groupState,
      pinnedOffset = _ref.pinnedOffset,
      primaryProperty = _ref.primaryProperty,
      onMore = _ref.onMore,
      onSelect = _ref.onSelect,
      onToggle = _ref.onToggle,
      replace = _ref.replace,
      rowProps = _ref.rowProps,
      selected = _ref.selected,
      size = _ref.size,
      step = _ref.step,
      rest = GroupedBody_objectWithoutPropertiesLoose(_ref, GroupedBody_excluded);

  var items = (0,react.useMemo)(function () {
    var nextItems = [];
    groups.forEach(function (group) {
      var expanded = groupState[group.key].expanded;
      var memberCount = group.data.length;

      if (memberCount > 1) {
        // need a header
        var primaryKeys = [];

        if (group.data.length) {
          group.data.forEach(function (datum) {
            primaryKeys.push(datum[primaryProperty]);
          });
        }

        var groupSelected = primaryKeys && selected ? primaryKeys.filter(function (val) {
          return selected.includes(val);
        }) : [];
        var isGroupSelected = groupSelected.length > 0 && group.data.length > 0 && groupSelected.length === group.data.length;
        nextItems.push({
          expanded: expanded,
          key: group.key,
          datum: group.datum,
          context: 'groupHeader',
          isSelected: isGroupSelected,
          indeterminate: groupSelected.length > 0 && groupSelected.length < group.data.length,
          onChange: function onChange() {
            if (isGroupSelected) {
              onSelect(selected.filter(function (s) {
                return !groupSelected.includes(s);
              }));
            } else onSelect([].concat(selected, primaryKeys));
          }
        });
      }

      if (memberCount === 1 || expanded) {
        // add the group members
        group.data.forEach(function (datum, index) {
          var primaryValue = primaryProperty ? datumValue(datum, primaryProperty) : undefined;
          var isSelected = selected && selected.includes(primaryValue);
          nextItems.push({
            key: datum[primaryProperty],
            primaryValue: primaryProperty ? datumValue(datum, primaryProperty) : undefined,
            datum: datum,
            context: memberCount > 1 && index === memberCount - 1 ? 'groupEnd' : 'body',
            isSelected: isSelected,
            onChange: function onChange() {
              if (isSelected) {
                onSelect(selected.filter(function (s) {
                  return s !== primaryValue;
                }));
              } else onSelect([].concat(selected, [primaryValue]));
            }
          });
        });
      }
    });
    return nextItems;
  }, [groups, groupState, primaryProperty, selected, onSelect]);
  return /*#__PURE__*/react.createElement(StyledDataTableBody, GroupedBody_extends({
    ref: ref,
    size: size
  }, rest), /*#__PURE__*/react.createElement(InfiniteScrollWrapper, {
    items: items,
    onMore: onMore,
    replace: replace,
    renderMarker: function renderMarker(marker) {
      return /*#__PURE__*/react.createElement(TableRowWrapper, null, /*#__PURE__*/react.createElement(TableCellWrapper, null, marker));
    },
    scrollableAncestor: "window",
    step: step
  }, function (row, index, rowRef) {
    var context = row.context,
        datum = row.datum,
        expanded = row.expanded,
        indeterminate = row.indeterminate,
        isSelected = row.isSelected,
        key = row.key,
        onChange = row.onChange,
        primaryValue = row.primaryValue;
    var cellProps = normalizeRowCellProps(rowProps, cellPropsProp, primaryValue, index);
    return /*#__PURE__*/react.createElement(StyledDataTableRow, {
      ref: rowRef,
      key: key,
      size: size
    }, /*#__PURE__*/react.createElement(ExpanderCell, {
      background: cellProps.background,
      border: cellProps.border,
      context: context,
      pad: cellProps.pad,
      onToggle: context === 'groupHeader' ? onToggle(key) : undefined,
      expanded: expanded
    }), (selected || onSelect) && /*#__PURE__*/react.createElement(TableCellWrapper, {
      background: cellProps.background,
      plain: "noPad",
      size: "auto"
    }, /*#__PURE__*/react.createElement(CheckBoxWrapper, {
      a11yTitle: (isSelected ? 'unselect' : 'select') + " " + (context === 'groupHeader' ? key : primaryValue),
      checked: isSelected,
      indeterminate: indeterminate,
      disabled: !onSelect,
      onChange: onChange,
      pad: cellProps.pad
    })), columns.map(function (column) {
      var scope;

      if (context === 'groupHeader') {
        scope = column.property === groupBy ? 'row' : undefined;
      } else {
        scope = column.primary ? 'row' : undefined;
      }

      return /*#__PURE__*/react.createElement(Cell, {
        key: column.property,
        background: cellProps.background,
        border: cellProps.border,
        context: context,
        column: column,
        datum: datum,
        pad: cellProps.pad,
        scope: scope,
        pinnedOffset: context === 'groupHeader' && pinnedOffset && pinnedOffset[column.property]
      });
    }));
  }));
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Nav/Nav.js
function Nav_extends() {
  Nav_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Nav_extends.apply(this, arguments);
}




var Nav = function Nav(_ref) {
  var rest = Nav_extends({}, _ref);

  return /*#__PURE__*/react.createElement(BoxWrapper, Nav_extends({
    as: "nav",
    flex: false,
    gap: "medium"
  }, rest));
};

var NavDoc;

if (false) {}

var NavWrapper = NavDoc || Nav;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Pagination/StyledPageControl.js




var StyledPageControl_sizeStyle = function sizeStyle(props) {
  var style = props.theme.pagination.button && props.theme.pagination.button.size && props.theme.pagination.button.size[props.size || 'medium'];
  return style ? {
    content: {
      fontSize: style.font && style.font.size,
      lineHeight: style.font && style.font.height
    },
    container: {
      height: style.height,
      minWidth: style.width
    }
  } : '';
};

var StyledPaginationButton = (0,styled_components_browser_esm.default)(ButtonWrapper).withConfig({
  displayName: "StyledPageControl__StyledPaginationButton",
  componentId: "sc-1vlfaez-0"
})(["> svg{vertical-align:middle;}", ";"], function (props) {
  return StyledPageControl_sizeStyle(props).content;
});
var StyledPageControl_StyledContainer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledPageControl__StyledContainer",
  componentId: "sc-1vlfaez-1"
})(["display:flex;align-items:center;justify-content:center;max-width:100%;", ";", ";"], function (props) {
  return StyledPageControl_sizeStyle(props).container;
}, function (props) {
  return props.theme.pagination.control && props.theme.pagination.control.extend;
});
var StyledSeparator = (0,styled_components_browser_esm.default)(TextWrapper).withConfig({
  displayName: "StyledPageControl__StyledSeparator",
  componentId: "sc-1vlfaez-2"
})(["font-weight:bold;", ";", ";"], function (props) {
  return "font-size: " + (StyledPageControl_sizeStyle(props).content && StyledPageControl_sizeStyle(props).content.fontSize);
}, function (props) {
  return "line-height: " + (StyledPageControl_sizeStyle(props).content && StyledPageControl_sizeStyle(props).content.lineHeight);
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Pagination/PageControl.js
var PageControl_excluded = ["control", "separator", "size"];

function PageControl_extends() {
  PageControl_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return PageControl_extends.apply(this, arguments);
}

function PageControl_objectWithoutPropertiesLoose(source, excluded) {
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




var PageControl = function PageControl(_ref) {
  var control = _ref.control,
      separator = _ref.separator,
      sizeProp = _ref.size,
      rest = PageControl_objectWithoutPropertiesLoose(_ref, PageControl_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);
  var size = sizeProp || 'medium';
  return /*#__PURE__*/react.createElement(StyledPageControl_StyledContainer, {
    as: "li",
    size: size
  }, separator ? /*#__PURE__*/react.createElement(StyledSeparator, {
    size: size
  }, "\u2026") : /*#__PURE__*/react.createElement(StyledPaginationButton, PageControl_extends({
    a11yTitle: "Go to page " + control,
    fill: true,
    kind: theme.pagination.button,
    label: control,
    size: size
  }, rest)));
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Pagination/Pagination.js
var Pagination_excluded = ["a11yTitle", "aria-label", "numberItems", "numberEdgePages", "numberMiddlePages", "onChange", "page", "size", "step"];

function Pagination_extends() {
  Pagination_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Pagination_extends.apply(this, arguments);
}

function Pagination_objectWithoutPropertiesLoose(source, excluded) {
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







var StyledPaginationContainer = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "Pagination__StyledPaginationContainer",
  componentId: "rnlw6m-0"
})(["", ""], function (props) {
  return props.theme.pagination.container && props.theme.pagination.container.extend;
});

var getPageIndices = function getPageIndices(begin, end) {
  var indices = [];

  for (var i = begin; i <= end; i += 1) {
    indices.push(i);
  }

  return indices;
};

var Pagination = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      ariaLabel = _ref['aria-label'],
      numberItems = _ref.numberItems,
      _ref$numberEdgePages = _ref.numberEdgePages,
      numberEdgePages = _ref$numberEdgePages === void 0 ? 1 : _ref$numberEdgePages,
      _ref$numberMiddlePage = _ref.numberMiddlePages,
      numberMiddlePagesProp = _ref$numberMiddlePage === void 0 ? 3 : _ref$numberMiddlePage,
      onChange = _ref.onChange,
      pageProp = _ref.page,
      size = _ref.size,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 10 : _ref$step,
      rest = Pagination_objectWithoutPropertiesLoose(_ref, Pagination_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  /* Calculate total number pages */

  var totalPages = Math.ceil(numberItems / step);

  var _useState = (0,react.useState)(Math.min(pageProp, totalPages) || 1),
      activePage = _useState[0],
      setActivePage = _useState[1];

  (0,react.useEffect)(function () {
    setActivePage(pageProp || 1);
  }, [pageProp]);
  /* Define page indices to display */

  var beginPages = getPageIndices(1, Math.min(numberEdgePages, totalPages));
  var endPages = getPageIndices(Math.max(totalPages - numberEdgePages + 1, numberEdgePages + 1), totalPages);
  var numberMiddlePages;

  if (numberMiddlePagesProp < 1) {
    numberMiddlePages = 1;
    console.warn( // eslint-disable-next-line max-len
    "Property \"numberMiddlePages\" should not be < 1. One middle page button will be shown. Set \"numberMiddlePages\" >= 1 to remove this warning.");
  } else numberMiddlePages = numberMiddlePagesProp;

  var startingMiddlePages; // odd

  if (numberMiddlePages % 2) startingMiddlePages = Math.min(activePage - Math.floor(numberMiddlePages / 2), totalPages - numberEdgePages - numberMiddlePages); // even, cannot split equally around active page
  // let extra page appear on middlePagesEnd instead
  else startingMiddlePages = Math.min(activePage - Math.floor(numberMiddlePages / 2) + 1, totalPages - numberEdgePages - numberMiddlePages);
  var middlePagesBegin = Math.max(startingMiddlePages, numberEdgePages + 2);
  var middlePagesEnd = Math.min(Math.max(activePage + Math.floor(numberMiddlePages / 2), numberEdgePages + numberMiddlePages + 1), endPages.length > 0 ? endPages[0] - 2 : totalPages - 1);
  var middlePages = getPageIndices(middlePagesBegin, middlePagesEnd);
  var beginFlex = [];
  if (middlePagesBegin > numberEdgePages + 2) beginFlex = ['more-prev'];else if (numberEdgePages + 1 < totalPages - numberEdgePages) beginFlex = [numberEdgePages + 1];
  var endFlex = [];
  if (middlePagesEnd < totalPages - numberEdgePages - 1) endFlex = ['more-next'];else if (totalPages - numberEdgePages > numberEdgePages) endFlex = [totalPages - numberEdgePages];

  var getItemIndices = function getItemIndices(nextPage) {
    var startIndex = step * (nextPage - 1);
    var endIndex = startIndex + step;
    return {
      startIndex: startIndex,
      endIndex: endIndex
    };
  };

  var handleClick = function handleClick(event, nextPage) {
    setActivePage(nextPage);

    if (onChange) {
      event.persist();
      var adjustedEvent = event;
      adjustedEvent.page = nextPage; // for controlled use cases, provide user with info on
      // what range of indices should be displayed given the active page

      var _getItemIndices = getItemIndices(nextPage),
          startIndex = _getItemIndices.startIndex,
          endIndex = _getItemIndices.endIndex;

      adjustedEvent.startIndex = startIndex;
      adjustedEvent.endIndex = endIndex;
      onChange(adjustedEvent);
    }
  };

  var NextIcon = theme.pagination.icons.next;
  var PreviousIcon = theme.pagination.icons.previous;
  var iconColor = theme.pagination.icons.color;
  var navProps = {
    next: {
      // https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination
      'aria-disabled': activePage === totalPages ? 'true' : undefined,
      disabled: activePage === totalPages || !numberItems,
      icon: /*#__PURE__*/react.createElement(NextIcon, {
        color: iconColor
      }),
      onClick: function onClick(event) {
        var nextPage = activePage + 1;
        handleClick(event, nextPage);
      },
      label: undefined
    },
    previous: {
      'aria-disabled': activePage === 1 ? 'true' : undefined,
      disabled: activePage === 1 || !numberItems,
      icon: /*#__PURE__*/react.createElement(PreviousIcon, {
        color: iconColor
      }),
      onClick: function onClick(event) {
        var previousPage = activePage - 1;
        handleClick(event, previousPage);
      },
      label: undefined
    }
  };
  var controls = ['previous'].concat(beginPages, beginFlex, middlePages, endFlex, endPages, ['next']);
  /* Set props for each page index. Each page index should display a
   * clickable index, control, or placeholder (e.g. ellipsis) indicating
   * more pages are available.
   */

  controls = controls.map(function (control) {
    return Pagination_extends({
      active: control === activePage,
      a11yTitle: typeof control === 'number' ? "Go to page " + control : "Go to " + control + " page",
      // https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination
      // https://www.w3.org/TR/wai-aria-1.1/#aria-current
      'aria-current': control === activePage ? 'page' : undefined,
      control: control,
      onClick: function onClick(event) {
        handleClick(event, control);
      },
      separator: control === 'more-prev' || control === 'more-next'
    }, navProps[control]);
  });
  return /*#__PURE__*/react.createElement(StyledPaginationContainer, Pagination_extends({}, theme.pagination.container, rest), /*#__PURE__*/react.createElement(NavWrapper, {
    a11yTitle: ariaLabel || a11yTitle || 'Pagination Navigation',
    ref: ref
  }, /*#__PURE__*/react.createElement(BoxWrapper, Pagination_extends({
    as: "ul"
  }, theme.pagination.controls), controls.map(function (control, index) {
    return (
      /*#__PURE__*/

      /* Using index as key (as opposed to a unique id) seems to
       * help React prioritize rendering the updated controls as
       * desired. Whereas, using a unique id resulted in rendering
       * the active control with an undesired lag. */
      // eslint-disable-next-line react/no-array-index-key
      react.createElement(PageControl, Pagination_extends({
        key: index,
        size: size
      }, control))
    );
  }))));
});
Pagination.displayName = 'Pagination';
var PaginationDoc;

if (false) {}

var PaginationWrapper = PaginationDoc || Pagination;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/pagination.js
var pagination_excluded = ["data", "page", "step"];

function pagination_extends() {
  pagination_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return pagination_extends.apply(this, arguments);
}

function pagination_objectWithoutPropertiesLoose(source, excluded) {
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


var normalizeShow = function normalizeShow(showProp, step) {
  var page; // by default, show refers to the index of an item,
  // but if using pagination, show can take the form of { page: # },
  // where page refers to the page # to show

  if (typeof showProp === 'number') page = Math.ceil((showProp + 1) / step);else if (typeof showProp === 'object' && 'page' in showProp) page = showProp.page;
  return page;
};
var usePagination = function usePagination(_ref) {
  var data = _ref.data,
      page = _ref.page,
      step = _ref.step,
      rest = pagination_objectWithoutPropertiesLoose(_ref, pagination_excluded);

  var totalPages = data ? Math.ceil(data.length / step) : 0;

  var _useState = (0,react.useState)(Math.min(page, totalPages) || 1),
      activePage = _useState[0],
      setActivePage = _useState[1];

  var itemsBeginIndex = step * (activePage - 1);
  var itemsEndIndex = itemsBeginIndex + step;
  var currentItems = (0,react.useMemo)(function () {
    if (Array.isArray(data)) return data.slice(itemsBeginIndex, itemsEndIndex);
    return [];
  }, [data, itemsBeginIndex, itemsEndIndex]);

  var paginationProps = pagination_extends({
    numberItems: data && data.length,
    onChange: function onChange(event) {
      return setActivePage(event.page);
    },
    page: page,
    step: step
  }, rest);

  return [currentItems, paginationProps];
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/DataTable.js
var DataTable_excluded = ["background", "border", "columns", "data", "fill", "groupBy", "onClickRow", "onMore", "onSearch", "onSelect", "onSort", "replace", "pad", "paginate", "pin", "placeholder", "primaryKey", "resizeable", "rowProps", "select", "show", "size", "sort", "sortable", "rowDetails", "step"];

function DataTable_extends() {
  DataTable_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DataTable_extends.apply(this, arguments);
}

function DataTable_objectWithoutPropertiesLoose(source, excluded) {
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
















function useGroupState(groups, groupBy) {
  var _useState = (0,react.useState)(function () {
    return buildGroupState(groups, groupBy);
  }),
      groupState = _useState[0],
      setGroupState = _useState[1];

  var _useState2 = (0,react.useState)({
    groups: groups,
    groupBy: groupBy
  }),
      prevDeps = _useState2[0],
      setPrevDeps = _useState2[1];

  var prevGroups = prevDeps.groups,
      prevGroupBy = prevDeps.groupBy;

  if (groups !== prevGroups || groupBy !== prevGroupBy) {
    setPrevDeps({
      groups: groups,
      groupBy: groupBy
    });
    var nextGroupState = buildGroupState(groups, groupBy);
    setGroupState(nextGroupState);
    return [nextGroupState, setGroupState];
  }

  return [groupState, setGroupState];
}

var DataTable = function DataTable(_ref) {
  var background = _ref.background,
      border = _ref.border,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      fill = _ref.fill,
      groupBy = _ref.groupBy,
      onClickRow = _ref.onClickRow,
      onMore = _ref.onMore,
      onSearch = _ref.onSearch,
      onSelect = _ref.onSelect,
      onSortProp = _ref.onSort,
      replace = _ref.replace,
      pad = _ref.pad,
      paginate = _ref.paginate,
      pin = _ref.pin,
      placeholder = _ref.placeholder,
      primaryKey = _ref.primaryKey,
      resizeable = _ref.resizeable,
      rowProps = _ref.rowProps,
      select = _ref.select,
      showProp = _ref.show,
      size = _ref.size,
      sortProp = _ref.sort,
      sortable = _ref.sortable,
      rowDetails = _ref.rowDetails,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 50 : _ref$step,
      rest = DataTable_objectWithoutPropertiesLoose(_ref, DataTable_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme; // property name of the primary property

  var primaryProperty = (0,react.useMemo)(function () {
    return normalizePrimaryProperty(columns, primaryKey);
  }, [columns, primaryKey]); // whether or not we should show a footer

  var showFooter = (0,react.useMemo)(function () {
    return columns.filter(function (c) {
      return c.footer;
    }).length > 0;
  }, [columns]); // what column we are actively capturing filter input on

  var _useState3 = (0,react.useState)(),
      filtering = _useState3[0],
      setFiltering = _useState3[1]; // the currently active filters


  var _useState4 = (0,react.useState)(initializeFilters(columns)),
      filters = _useState4[0],
      setFilters = _useState4[1]; // which column we are sorting on, with direction


  var _useState5 = (0,react.useState)(sortProp || {}),
      sort = _useState5[0],
      setSort = _useState5[1]; // the data filtered and sorted, if needed


  var adjustedData = (0,react.useMemo)(function () {
    return filterAndSortData(data, filters, onSearch, sort);
  }, [data, filters, onSearch, sort]); // the values to put in the footer cells

  var footerValues = (0,react.useMemo)(function () {
    return buildFooterValues(columns, adjustedData);
  }, [adjustedData, columns]); // cell styling properties: background, border, pad

  var cellProps = (0,react.useMemo)(function () {
    return normalizeCellProps({
      background: background,
      border: border,
      pad: pad,
      pin: pin
    }, theme);
  }, [background, border, pad, pin, theme]); // if groupBy, an array with one item per unique groupBy key value

  var groups = (0,react.useMemo)(function () {
    return buildGroups(columns, adjustedData, groupBy);
  }, [adjustedData, columns, groupBy]); // an object indicating which group values are expanded

  var _useGroupState = useGroupState(groups, groupBy),
      groupState = _useGroupState[0],
      setGroupState = _useGroupState[1];

  var _useState6 = (0,react.useState)(select || onSelect && [] || undefined),
      selected = _useState6[0],
      setSelected = _useState6[1];

  (0,react.useEffect)(function () {
    return setSelected(select || onSelect && [] || undefined);
  }, [onSelect, select]);

  var _useState7 = (0,react.useState)([]),
      rowExpand = _useState7[0],
      setRowExpand = _useState7[1]; // any customized column widths


  var _useState8 = (0,react.useState)({}),
      widths = _useState8[0],
      setWidths = _useState8[1]; // placeholder placement stuff


  var headerRef = (0,react.useRef)();
  var bodyRef = (0,react.useRef)();
  var footerRef = (0,react.useRef)();

  var _useState9 = (0,react.useState)(),
      headerHeight = _useState9[0],
      setHeaderHeight = _useState9[1];

  var _useState10 = (0,react.useState)(),
      footerHeight = _useState10[0],
      setFooterHeight = _useState10[1]; // offset compensation when body overflows


  var _useState11 = (0,react.useState)(0),
      scrollOffset = _useState11[0],
      setScrollOffset = _useState11[1]; // multiple pinned columns offset


  var _useState12 = (0,react.useState)(),
      pinnedOffset = _useState12[0],
      setPinnedOffset = _useState12[1];

  var onHeaderWidths = (0,react.useCallback)(function (columnWidths) {
    var pinnedProperties = columns.map(function (pinnedColumn) {
      return pinnedColumn.pin && pinnedColumn.property;
    }).filter(function (n) {
      return n;
    });
    var nextPinnedOffset = {};

    if (columnWidths !== []) {
      pinnedProperties.forEach(function (property, index) {
        var hasSelectColumn = Boolean(select || onSelect);
        var columnIndex = columns.findIndex(function (column) {
          return column.property === property;
        }) + hasSelectColumn;

        if (columnWidths[columnIndex]) {
          nextPinnedOffset[property] = {
            width: columnWidths[columnIndex],
            left: index === 0 ? 0 : nextPinnedOffset[pinnedProperties[index - 1]].left + nextPinnedOffset[pinnedProperties[index - 1]].width
          };
        }
      });
      setPinnedOffset(nextPinnedOffset);
    }
  }, [columns, setPinnedOffset, select, onSelect]); // eslint-disable-next-line react-hooks/exhaustive-deps

  useLayoutEffect(function () {
    var _bodyRef$current$pare;

    var nextScrollOffset = ((_bodyRef$current$pare = bodyRef.current.parentElement) == null ? void 0 : _bodyRef$current$pare.clientWidth) - bodyRef.current.clientWidth;
    if (nextScrollOffset !== scrollOffset) setScrollOffset(nextScrollOffset);
  });
  useLayoutEffect(function () {
    if (placeholder) {
      if (headerRef.current) {
        var nextHeaderHeight = headerRef.current.getBoundingClientRect().height;
        setHeaderHeight(nextHeaderHeight);
      } else setHeaderHeight(0);

      if (footerRef.current) {
        var nextFooterHeight = footerRef.current.getBoundingClientRect().height;
        setFooterHeight(nextFooterHeight);
      } else setFooterHeight(0);
    }
  }, [footerRef, headerRef, placeholder]); // remember that we are filtering on this property

  var onFiltering = function onFiltering(property) {
    return setFiltering(property);
  }; // remember the search text we should filter this property by


  var onFilter = function onFilter(property, value) {
    var nextFilters = DataTable_extends({}, filters);

    nextFilters[property] = value;
    setFilters(nextFilters); // Let caller know about search, if interested

    if (onSearch) onSearch(nextFilters);
  }; // toggle the sort direction on this property


  var onSort = function onSort(property) {
    return function () {
      var external = sort ? sort.external : false;
      var direction;
      if (!sort || property !== sort.property) direction = 'asc';else if (sort.direction === 'asc') direction = 'desc';else direction = 'asc';
      var nextSort = {
        property: property,
        direction: direction,
        external: external
      };
      setSort(nextSort);
      if (onSortProp) onSortProp(nextSort);
    };
  }; // toggle whether the group is expanded


  var onToggleGroup = function onToggleGroup(groupValue) {
    return function () {
      var nextGroupState = DataTable_extends({}, groupState);

      nextGroupState[groupValue] = DataTable_extends({}, nextGroupState[groupValue], {
        expanded: !nextGroupState[groupValue].expanded
      });
      setGroupState(nextGroupState);

      if (groupBy.onExpand) {
        var expandedKeys = Object.keys(nextGroupState).filter(function (k) {
          return nextGroupState[k].expanded;
        });
        groupBy.onExpand(expandedKeys);
      }
    };
  }; // toggle whether all groups are expanded


  var onToggleGroups = function onToggleGroups() {
    var expanded = Object.keys(groupState).filter(function (k) {
      return !groupState[k].expanded;
    }).length === 0;
    var nextGroupState = {};
    Object.keys(groupState).forEach(function (k) {
      nextGroupState[k] = DataTable_extends({}, groupState[k], {
        expanded: !expanded
      });
    });
    setGroupState(nextGroupState);

    if (groupBy.onExpand) {
      var expandedKeys = Object.keys(nextGroupState).filter(function (k) {
        return nextGroupState[k].expanded;
      });
      groupBy.onExpand(expandedKeys);
    }
  }; // remember the width this property's column should be


  var onResize = (0,react.useCallback)(function (property, width) {
    if (widths[property] !== width) {
      var nextWidths = DataTable_extends({}, widths);

      nextWidths[property] = width;
      setWidths(nextWidths);
    }
  }, [widths]);

  if (size && resizeable) {
    console.warn('DataTable cannot combine "size" and "resizeble".');
  }

  var _usePagination = usePagination(DataTable_extends({
    data: adjustedData,
    page: normalizeShow(showProp, step),
    step: step
  }, paginate)),
      items = _usePagination[0],
      paginationProps = _usePagination[1];

  var Container = paginate ? StyledContainer : react.Fragment;
  var containterProps = paginate ? DataTable_extends({}, theme.dataTable.container, {
    fill: fill
  }) : undefined; // DataTable should overflow if paginating but pagination component
  // should remain in its location

  var OverflowContainer = paginate ? BoxWrapper : react.Fragment;
  var overflowContainerProps = paginate ? {
    overflow: {
      horizontal: 'auto'
    },
    flex: false
  } : undefined; // necessary for Firefox, otherwise paginated DataTable will
  // not fill its container like it does by default on other
  // browsers like Chrome/Safari

  var paginatedDataTableProps = paginate && (fill === true || fill === 'horizontal') ? {
    style: {
      minWidth: '100%'
    }
  } : undefined;
  return /*#__PURE__*/react.createElement(Container, containterProps, /*#__PURE__*/react.createElement(OverflowContainer, overflowContainerProps, /*#__PURE__*/react.createElement(StyledDataTable, DataTable_extends({
    fillProp: !paginate ? fill : undefined
  }, paginatedDataTableProps, rest), /*#__PURE__*/react.createElement(Header_Header, {
    ref: headerRef,
    cellProps: cellProps.header,
    columns: columns,
    data: adjustedData,
    fill: fill,
    filtering: filtering,
    filters: filters,
    groups: groups,
    groupState: groupState,
    pin: pin === true || pin === 'header',
    pinnedOffset: pinnedOffset,
    selected: selected,
    size: size,
    sort: sort,
    widths: widths,
    onFiltering: onFiltering,
    onFilter: onFilter,
    onResize: resizeable ? onResize : undefined,
    onSelect: onSelect ? function (nextSelected) {
      setSelected(nextSelected);
      if (onSelect) onSelect(nextSelected);
    } : undefined,
    onSort: sortable || sortProp || onSortProp ? onSort : undefined,
    onToggle: onToggleGroups,
    onWidths: onHeaderWidths,
    primaryProperty: primaryProperty,
    scrollOffset: scrollOffset,
    rowDetails: rowDetails
  }), groups ? /*#__PURE__*/react.createElement(GroupedBody, {
    ref: bodyRef,
    cellProps: cellProps.body,
    columns: columns,
    groupBy: groupBy.property ? groupBy.property : groupBy,
    groups: groups,
    groupState: groupState,
    pinnedOffset: pinnedOffset,
    primaryProperty: primaryProperty,
    onMore: onMore,
    onSelect: onSelect ? function (nextSelected) {
      setSelected(nextSelected);
      if (onSelect) onSelect(nextSelected);
    } : undefined,
    onToggle: onToggleGroup,
    replace: replace,
    rowProps: rowProps,
    selected: selected,
    size: size,
    step: step
  }) : /*#__PURE__*/react.createElement(Body, {
    ref: bodyRef,
    cellProps: cellProps.body,
    columns: columns,
    data: !paginate ? adjustedData : items,
    onMore: onMore,
    replace: replace,
    onClickRow: onClickRow,
    onSelect: onSelect ? function (nextSelected) {
      setSelected(nextSelected);
      if (onSelect) onSelect(nextSelected);
    } : undefined,
    pinnedCellProps: cellProps.pinned,
    pinnedOffset: pinnedOffset,
    placeholder: placeholder,
    primaryProperty: primaryProperty,
    rowProps: rowProps,
    selected: selected,
    show: !paginate ? showProp : undefined,
    size: size,
    step: step,
    rowDetails: rowDetails,
    rowExpand: rowExpand,
    setRowExpand: setRowExpand
  }), showFooter && /*#__PURE__*/react.createElement(Footer_Footer, {
    ref: footerRef,
    cellProps: cellProps.footer,
    columns: columns,
    fill: fill,
    footerValues: footerValues,
    groups: groups,
    onSelect: onSelect,
    pin: pin === true || pin === 'footer',
    pinnedOffset: pinnedOffset,
    primaryProperty: primaryProperty,
    scrollOffset: scrollOffset,
    selected: selected,
    size: size
  }), placeholder && /*#__PURE__*/react.createElement(StyledDataTable_StyledPlaceholder, {
    top: headerHeight,
    bottom: footerHeight
  }, typeof placeholder === 'string' ? /*#__PURE__*/react.createElement(BoxWrapper, {
    background: {
      color: 'background-front',
      opacity: 'strong'
    },
    align: "center",
    justify: "center",
    fill: "vertical"
  }, /*#__PURE__*/react.createElement(TextWrapper, null, placeholder)) : placeholder))), paginate && data.length > step && items && items.length ? /*#__PURE__*/react.createElement(PaginationWrapper, DataTable_extends({
    alignSelf: "end"
  }, paginationProps)) : null);
};

var DataTableDoc;

if (false) {}

var DataTableWrapper = DataTableDoc || DataTable;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DataTable/index.js

// EXTERNAL MODULE: ./node_modules/grommet-icons/icons/Calendar.js
var icons_Calendar = __webpack_require__(8377);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DropButton/DropButton.js
var DropButton_excluded = ["a11yTitle", "onAlign", "disabled", "dropAlign", "dropProps", "dropContent", "dropTarget", "id", "open", "onClick", "onClose", "onOpen"];

function DropButton_extends() {
  DropButton_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DropButton_extends.apply(this, arguments);
}

function DropButton_objectWithoutPropertiesLoose(source, excluded) {
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





var DropButton_defaultDropAlign = {
  top: 'top',
  left: 'left'
};
var DropButton = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var _ref$a11yTitle = _ref.a11yTitle,
      a11yTitle = _ref$a11yTitle === void 0 ? 'Open Drop' : _ref$a11yTitle,
      onAlign = _ref.onAlign,
      disabled = _ref.disabled,
      _ref$dropAlign = _ref.dropAlign,
      dropAlign = _ref$dropAlign === void 0 ? DropButton_defaultDropAlign : _ref$dropAlign,
      dropProps = _ref.dropProps,
      dropContent = _ref.dropContent,
      dropTarget = _ref.dropTarget,
      id = _ref.id,
      open = _ref.open,
      onClick = _ref.onClick,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      rest = DropButton_objectWithoutPropertiesLoose(_ref, DropButton_excluded);

  var buttonRef = useForwardedRef(ref);

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
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ButtonWrapper, DropButton_extends({
    id: id,
    ref: buttonRef,
    a11yTitle: a11yTitle,
    disabled: disabled
  }, rest, {
    onClick: onClickInternal
  })), show && buttonRef.current && /*#__PURE__*/react.createElement(DropWrapper, DropButton_extends({
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
var DropButtonDoc;

if (false) {}

var DropButtonWrapper = DropButtonDoc || DropButton;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/MaskedInput/StyledMaskedInput.js


var StyledMaskedInput = styled_components_browser_esm.default.input.withConfig({
  displayName: "StyledMaskedInput",
  componentId: "sc-99vkfa-0"
})(["", " ", " ", " ", " ", " ", ";"], inputStyle, function (props) {
  return props.plain && plainInputStyle;
}, function (props) {
  return props.icon && (props.reverse ? "padding-right: " + props.theme.global.edgeSize.large + ";" : "padding-left: " + props.theme.global.edgeSize.large + ";");
}, function (props) {
  return props.disabled && disabledStyle(props.theme.maskedInput.disabled && props.theme.maskedInput.disabled.opacity);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.extend;
});
var StyledMaskedInputContainer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledMaskedInput__StyledMaskedInputContainer",
  componentId: "sc-99vkfa-1"
})(["position:relative;width:100%;", ";"], function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.container && props.theme.maskedInput.container.extend;
});
var StyledMaskedInput_StyledIcon = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledMaskedInput__StyledIcon",
  componentId: "sc-99vkfa-2"
})(["position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);pointer-events:none;", ""], function (props) {
  return props.reverse ? "right: " + getInputPadBySide(props, 'right') + ";" : "left: " + getInputPadBySide(props, 'left') + ";";
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/MaskedInput/MaskedInput.js
var MaskedInput_excluded = ["a11yTitle", "dropHeight", "dropProps", "focus", "focusIndicator", "icon", "id", "mask", "name", "onBlur", "onChange", "onFocus", "onKeyDown", "placeholder", "plain", "reverse", "textAlign", "value"];

function MaskedInput_extends() {
  MaskedInput_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return MaskedInput_extends.apply(this, arguments);
}

function MaskedInput_objectWithoutPropertiesLoose(source, excluded) {
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












var parseValue = function parseValue(mask, value) {
  // break the value up into mask parts
  var valueParts = []; // { part, beginIndex, endIndex }

  var valueIndex = 0;
  var maskIndex = 0;

  while (value !== undefined && valueIndex < value.length && maskIndex < mask.length) {
    var item = mask[maskIndex];
    var found = void 0;

    if (item.fixed) {
      var length = item.fixed.length; // grab however much of value (starting at valueIndex) matches
      // item.fixed. If none matches it and there is more in value
      // add in the fixed item.

      var matching = 0;

      while (matching < length && value[valueIndex + matching] === item.fixed[matching]) {
        matching += 1;
      }

      if (matching > 0) {
        var part = value.slice(valueIndex, valueIndex + matching);

        if (valueIndex + matching < value.length) {
          // matched part of the fixed portion but there's more stuff
          // after it. Go ahead and fill in the entire fixed chunk
          part = item.fixed;
        }

        valueParts.push({
          part: part,
          beginIndex: valueIndex,
          endIndex: valueIndex + matching - 1
        });
        valueIndex += matching;
      } else {
        valueParts.push({
          part: item.fixed,
          beginIndex: valueIndex,
          endIndex: valueIndex + length - 1
        });
      }

      maskIndex += 1;
      found = true;
    } else if (item.options) {
      // reverse assuming larger is later
      found = item.options.slice(0).reverse() // eslint-disable-next-line no-loop-func
      .some(function (option) {
        var length = option.length;
        var part = value.slice(valueIndex, valueIndex + length);

        if (part === option) {
          valueParts.push({
            part: part,
            beginIndex: valueIndex,
            endIndex: valueIndex + length - 1
          });
          valueIndex += length;
          maskIndex += 1;
          return true;
        }

        return false;
      });
    }

    if (!found) {
      if (item.regexp) {
        var minLength = Array.isArray(item.length) && item.length[0] || item.length || 1;
        var maxLength = Array.isArray(item.length) && item.length[1] || item.length || value.length - valueIndex;
        var _length = maxLength;

        while (!found && _length >= minLength) {
          var _part = value.slice(valueIndex, valueIndex + _length);

          if (item.regexp.test(_part)) {
            valueParts.push({
              part: _part,
              beginIndex: valueIndex,
              endIndex: valueIndex + _length - 1
            });
            valueIndex += _length;
            maskIndex += 1;
            found = true;
          }

          _length -= 1;
        }

        if (!found) {
          valueIndex = value.length;
        }
      } else {
        var _length2 = Array.isArray(item.length) ? item.length[1] : item.length || value.length - valueIndex;

        var _part2 = value.slice(valueIndex, valueIndex + _length2);

        valueParts.push({
          part: _part2,
          beginIndex: valueIndex,
          endIndex: valueIndex + _length2 - 1
        });
        valueIndex += _length2;
        maskIndex += 1;
      }
    }
  }

  return valueParts;
};

var defaultMask = [{
  regexp: /[^]*/
}];
var MaskedInput_ContainerBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "MaskedInput__ContainerBox",
  componentId: "af8hzu-0"
})(["", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}"], function (props) {
  return props.dropHeight ? sizeStyle('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
});
var dropAlign = {
  top: 'bottom',
  left: 'left'
};
var MaskedInput = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      dropHeight = _ref.dropHeight,
      dropProps = _ref.dropProps,
      focusProp = _ref.focus,
      _ref$focusIndicator = _ref.focusIndicator,
      focusIndicator = _ref$focusIndicator === void 0 ? true : _ref$focusIndicator,
      icon = _ref.icon,
      id = _ref.id,
      _ref$mask = _ref.mask,
      mask = _ref$mask === void 0 ? defaultMask : _ref$mask,
      name = _ref.name,
      _onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      placeholder = _ref.placeholder,
      plain = _ref.plain,
      reverse = _ref.reverse,
      textAlign = _ref.textAlign,
      valueProp = _ref.value,
      rest = MaskedInput_objectWithoutPropertiesLoose(_ref, MaskedInput_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var formContext = (0,react.useContext)(FormContext);

  var _formContext$useFormI = formContext.useFormInput(name, valueProp),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1];

  var _useState = (0,react.useState)(parseValue(mask, value)),
      valueParts = _useState[0],
      setValueParts = _useState[1];

  (0,react.useEffect)(function () {
    setValueParts(parseValue(mask, value));
  }, [mask, value]);
  var inputRef = useForwardedRef(ref);
  var dropRef = (0,react.useRef)();

  var _useState2 = (0,react.useState)(focusProp),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var _useState3 = (0,react.useState)(),
      activeMaskIndex = _useState3[0],
      setActiveMaskIndex = _useState3[1];

  var _useState4 = (0,react.useState)(),
      activeOptionIndex = _useState4[0],
      setActiveOptionIndex = _useState4[1];

  var _useState5 = (0,react.useState)(),
      showDrop = _useState5[0],
      setShowDrop = _useState5[1];

  (0,react.useEffect)(function () {
    if (focus) {
      var timer = setTimeout(function () {
        // determine which mask element the caret is at
        var caretIndex = inputRef.current.selectionStart;
        var maskIndex;
        valueParts.some(function (part, index) {
          if (part.beginIndex <= caretIndex && part.endIndex >= caretIndex) {
            maskIndex = index;
            return true;
          }

          return false;
        });

        if (maskIndex === undefined && valueParts.length < mask.length) {
          maskIndex = valueParts.length; // first unused one
        }

        if (maskIndex && mask[maskIndex].fixed) {
          maskIndex -= 1; // fixed mask parts are never "active"
        }

        if (maskIndex !== activeMaskIndex) {
          setActiveMaskIndex(maskIndex);
          setActiveOptionIndex(-1);
          setShowDrop(maskIndex >= 0 && mask[maskIndex].options && true);
        }
      }, 10); // 10ms empirically chosen

      return function () {
        return clearTimeout(timer);
      };
    }

    return undefined;
  }, [activeMaskIndex, focus, inputRef, mask, valueParts]);
  var setInputValue = (0,react.useCallback)(function (nextValue) {
    // Calling set value function directly on input because React library
    // overrides setter `event.target.value =` and loses original event
    // target fidelity.
    // https://stackoverflow.com/a/46012210 &&
    // https://github.com/grommet/grommet/pull/3171#discussion_r296415239
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(inputRef.current, nextValue);
    var event = new Event('input', {
      bubbles: true
    });
    inputRef.current.dispatchEvent(event);
  }, [inputRef]); // This could be due to a paste or as the user is typing.

  var onChangeInput = (0,react.useCallback)(function (event) {
    // Align with the mask.
    var nextValueParts = parseValue(mask, event.target.value);
    var nextValue = nextValueParts.map(function (part) {
      return part.part;
    }).join('');

    if (nextValue !== event.target.value) {
      // The mask required inserting something, change the input.
      // This will re-trigger this callback with the next value
      setInputValue(nextValue);
    } else if (value !== nextValue) {
      setValue(nextValue);
      if (onChange) onChange(event);
    }
  }, [mask, onChange, setInputValue, setValue, value]);
  var onOption = (0,react.useCallback)(function (option) {
    return function () {
      var nextValueParts = [].concat(valueParts);
      nextValueParts[activeMaskIndex] = {
        part: option
      }; // add any fixed parts that follow

      var index = activeMaskIndex + 1;

      while (index < mask.length && !nextValueParts[index] && mask[index].fixed) {
        nextValueParts[index] = {
          part: mask[index].fixed
        };
        index += 1;
      }

      var nextValue = nextValueParts.map(function (part) {
        return part.part;
      }).join('');
      setInputValue(nextValue); // restore focus to input

      inputRef.current.focus();
    };
  }, [activeMaskIndex, inputRef, mask, setInputValue, valueParts]);
  var onNextOption = (0,react.useCallback)(function (event) {
    var item = mask[activeMaskIndex];

    if (item && item.options) {
      event.preventDefault();
      var index = Math.min(activeOptionIndex + 1, item.options.length - 1);
      setActiveOptionIndex(index);
    }
  }, [activeMaskIndex, activeOptionIndex, mask]);
  var onPreviousOption = (0,react.useCallback)(function (event) {
    if (activeMaskIndex >= 0 && mask[activeMaskIndex].options) {
      event.preventDefault();
      var index = Math.max(activeOptionIndex - 1, 0);
      setActiveOptionIndex(index);
    }
  }, [activeMaskIndex, activeOptionIndex, mask]);
  var onSelectOption = (0,react.useCallback)(function (event) {
    if (activeMaskIndex >= 0 && activeOptionIndex >= 0) {
      event.preventDefault();
      var option = mask[activeMaskIndex].options[activeOptionIndex];
      onOption(option)();
    }
  }, [activeMaskIndex, activeOptionIndex, mask, onOption]);
  var onEsc = (0,react.useCallback)(function (event) {
    if (showDrop) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      setShowDrop(false);
    }
  }, [showDrop]);
  var onHideDrop = (0,react.useCallback)(function () {
    return setShowDrop(false);
  }, []);

  var renderPlaceholder = function renderPlaceholder() {
    return mask.map(function (item) {
      return item.placeholder || item.fixed;
    }).join('');
  };

  return /*#__PURE__*/react.createElement(StyledMaskedInputContainer, {
    plain: plain
  }, icon && /*#__PURE__*/react.createElement(StyledMaskedInput_StyledIcon, {
    reverse: reverse,
    theme: theme
  }, icon), /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onEsc: onEsc,
    onTab: showDrop ? function () {
      return setShowDrop(false);
    } : undefined,
    onLeft: undefined,
    onRight: undefined,
    onUp: onPreviousOption,
    onDown: showDrop ? onNextOption : function () {
      return setShowDrop(true);
    },
    onEnter: onSelectOption,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/react.createElement(StyledMaskedInput, MaskedInput_extends({
    ref: inputRef,
    "aria-label": a11yTitle,
    id: id,
    name: name,
    autoComplete: "off",
    focusIndicator: focusIndicator,
    plain: plain,
    placeholder: placeholder || renderPlaceholder(),
    icon: icon,
    reverse: reverse,
    focus: focus,
    textAlign: textAlign
  }, rest, {
    value: value,
    theme: theme,
    onFocus: function onFocus(event) {
      setFocus(true);
      setShowDrop(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false); // This will be called when the user clicks on a suggestion,
      // check for that and don't remove the drop in that case.
      // Drop will already have removed itself if the user has focused
      // outside of the Drop.

      if (!dropRef.current) setShowDrop(false);
      if (_onBlur) _onBlur(event);
    },
    onChange: onChangeInput
  }))), showDrop && mask[activeMaskIndex] && mask[activeMaskIndex].options && /*#__PURE__*/react.createElement(DropWrapper, MaskedInput_extends({
    id: id ? "masked-input-drop__" + id : undefined,
    align: dropAlign,
    responsive: false,
    target: inputRef.current,
    onClickOutside: onHideDrop,
    onEsc: onHideDrop
  }, dropProps), /*#__PURE__*/react.createElement(MaskedInput_ContainerBox, {
    ref: dropRef,
    overflow: "auto",
    dropHeight: dropHeight
  }, mask[activeMaskIndex].options.map(function (option, index) {
    // Determine whether the label is done as a child or
    // as an option Button kind property.
    var child = !theme.button.option ? /*#__PURE__*/react.createElement(BoxWrapper, {
      pad: {
        horizontal: 'small',
        vertical: 'xsmall'
      }
    }, option) : undefined; // if we have a child, turn on plain, and hoverIndicator

    return /*#__PURE__*/react.createElement(BoxWrapper, {
      key: option,
      flex: false
    }, /*#__PURE__*/react.createElement(ButtonWrapper, {
      tabIndex: "-1",
      onClick: onOption(option),
      onMouseOver: function onMouseOver() {
        return setActiveOptionIndex(index);
      },
      onFocus: function onFocus() {},
      active: index === activeOptionIndex,
      plain: !child ? undefined : true,
      align: "start",
      kind: !child ? 'option' : undefined,
      hoverIndicator: !child ? undefined : 'background',
      label: !child ? option : undefined
    }, child));
  }))));
});
MaskedInput.displayName = 'MaskedInput';
var MaskedInputDoc;

if (false) {}

var MaskedInputWrapper = MaskedInputDoc || MaskedInput;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DateInput/utils.js
function utils_extends() {
  utils_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return utils_extends.apply(this, arguments);
} // Converting between Date and String types is handled via a "schema".
// The schema is an array of strings, split into strings with identical
// characters. So, 'mm/dd/yyyy' will be ['mm', '/', 'dd', '/', 'yyyyy'].


var formatToSchema = function formatToSchema(format) {
  if (!format) return undefined;
  var result = [];
  var i = 0;
  var part;

  while (i < format.length) {
    if (!part || part[0] !== format[i]) {
      if (part) result.push(part);
      part = format[i];
    } else {
      part += format[i];
    }

    i += 1;
  }

  if (part) result.push(part);
  return result;
};
var masks = {
  m: {
    length: [1, 2],
    regexp: new RegExp("^[1-9]$|^1[0-2]$")
  },
  mm: {
    length: [1, 2],
    regexp: new RegExp("^[0-1]$|^0[1-9]$|^1[0-2]$")
  },
  d: {
    length: [1, 2],
    regexp: new RegExp("^[1-9]$|^[1-2][0-9]$|^3[0-1]$")
  },
  dd: {
    length: [1, 2],
    regexp: new RegExp("^[0-3]$|^0[1-9]$|^[1-2][0-9]$|^3[0-1]$")
  },
  yy: {
    length: [1, 2],
    regexp: new RegExp("^[0-9]{1,2}$")
  },
  yyyy: {
    length: [1, 4],
    regexp: new RegExp("^[0-9]{1,4}$")
  }
};
var schemaToMask = function schemaToMask(schema) {
  if (!schema) return undefined;
  return schema.map(function (part) {
    var lower = part.toLowerCase();
    var _char = lower[0];
    if (_char === 'm' || _char === 'd' || _char === 'y') return utils_extends({
      placeholder: part
    }, masks[lower]);
    return {
      fixed: part
    };
  });
}; // convert value into text representation using the schema

var valueToText = function valueToText(value, schema) {
  var text = ''; // when user initializes dates as empty array, we want to still
  // show the placeholder text

  if (!value || Array.isArray(value) && !value.length) return text;
  var dates = (Array.isArray(value) ? value : [value]).map(function (v) {
    return new Date(v);
  });
  var dateIndex = 0;
  var parts = {};
  schema.every(function (part) {
    var _char2 = part[0].toLowerCase(); // advance dateIndex if we already have this part


    while (dateIndex < dates.length && (Number.isNaN(dates[dateIndex].date) || (_char2 === 'm' || _char2 === 'd' || _char2 === 'y') && parts[part])) {
      dateIndex += 1;
      parts = {};
    }

    var date = dates[dateIndex];

    if (date && part === 'm') {
      text += date.getMonth() + 1;
      parts[part] = true;
    } else if (date && part === 'mm') {
      text += ("0" + (date.getMonth() + 1)).slice(-2);
      parts[part] = true;
    } else if (date && part === 'd') {
      text += date.getDate();
      parts[part] = true;
    } else if (date && part === 'dd') {
      text += ("0" + date.getDate()).slice(-2);
      parts[part] = true;
    } else if (date && part === 'yy') {
      text += date.getFullYear().toString().slice(-2);
      parts[part] = true;
    } else if (date && part === 'yyyy') {
      text += date.getFullYear();
      parts[part] = true;
    } else if (!date && (part[0] === 'm' || part[0] === 'd' || part[0] === 'y')) {
      return false;
    } else {
      text += part;
    }

    return true;
  });
  return text;
};
var charCodeZero = '0'.charCodeAt(0);
var charCodeNine = '9'.charCodeAt(0);

var pullDigits = function pullDigits(text, index) {
  var end = index;

  while (text.charCodeAt(end) >= charCodeZero && text.charCodeAt(end) <= charCodeNine) {
    end += 1;
  }

  return text.slice(index, end);
};

var textToValue = function textToValue(text, schema, valueProp, range) {
  if (!text) return range ? [] : undefined;
  var result;

  var addDate = function addDate(parts) {
    // Do a little sanity checking on the parts first.
    // If not valid, leave as is.
    if (!parts.m || !parts.d || !parts.y || parts.y.length < 4 || parts.m.length > 2 || parts.d.length > 2 || parts.m > 12 || parts.d > 31) return parts;
    var date = new Date(parts.y, parts.m - 1, parts.d).toISOString(); // match time and timezone of any supplied valueProp

    if (valueProp && (Array.isArray(valueProp) && valueProp[0] || !Array.isArray(valueProp))) {
      var valueDate = new Date(Array.isArray(valueProp) && valueProp.length ? valueProp[0] : valueProp).toISOString();
      date = date.split('T')[0] + "T" + valueDate.split('T')[1];
    }

    if (!range) {
      if (!result) result = date;
    } else {
      if (!result) result = [];
      result.push(date);
    } // we've consumed these parts, return an empty object in case we need
    // to start building up another one for a range


    return {};
  };

  var parts = {};
  var index = 0;
  schema.forEach(function (part) {
    if (index < text.length) {
      var lower = part.toLowerCase();
      var _char3 = lower[0];
      if (parts[_char3] !== undefined) parts = addDate(parts);

      if (_char3 === 'm') {
        parts.m = pullDigits(text, index);
        index += parts.m.length;
      } else if (_char3 === 'd') {
        parts.d = pullDigits(text, index);
        index += parts.d.length;
      } else if (_char3 === 'y') {
        parts.y = pullDigits(text, index);
        index += parts.y.length;

        if (lower === 'yy' && parts.y.length === 2) {
          // convert to full year, pivot at 69 based on POSIX strptime()
          parts.y = "" + (parts.y < 69 ? 20 : 19) + parts.y;
        }
      } else if (text.slice(index, index + part.length) === part) {
        index += part.length;
      } else {
        // syntax error
        index = text.length;
        result = undefined;
      }
    }
  });
  parts = addDate(parts);
  if (!result) return range ? [] : undefined;
  return result;
};
var valuesAreEqual = function valuesAreEqual(value1, value2) {
  return Array.isArray(value1) && Array.isArray(value2) && value1.every(function (d1, i) {
    return d1 === value2[i];
  }) || value1 === value2;
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DateInput/DateInput.js
var DateInput_excluded = ["buttonProps", "calendarProps", "defaultValue", "disabled", "dropProps", "format", "id", "inline", "inputProps", "name", "onChange", "onFocus", "value"];

function DateInput_extends() {
  DateInput_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return DateInput_extends.apply(this, arguments);
}

function DateInput_objectWithoutPropertiesLoose(source, excluded) {
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














var DateInput = /*#__PURE__*/(0,react.forwardRef)(function (_ref, refArg) {
  var buttonProps = _ref.buttonProps,
      calendarProps = _ref.calendarProps,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      dropProps = _ref.dropProps,
      format = _ref.format,
      id = _ref.id,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      inputProps = _ref.inputProps,
      name = _ref.name,
      _onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      valueArg = _ref.value,
      rest = DateInput_objectWithoutPropertiesLoose(_ref, DateInput_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var iconSize = theme.dateInput.icon && theme.dateInput.icon.size || 'medium';

  var _useContext = (0,react.useContext)(FormContext),
      useFormInput = _useContext.useFormInput;

  var ref = useForwardedRef(refArg);

  var _useFormInput = useFormInput(name, valueArg, defaultValue),
      value = _useFormInput[0],
      setValue = _useFormInput[1]; // do we expect multiple dates?


  var range = Array.isArray(value) || format && format.includes('-'); // parse format and build a formal schema we can use elsewhere

  var schema = (0,react.useMemo)(function () {
    return formatToSchema(format);
  }, [format]); // mask is only used when a format is provided

  var mask = (0,react.useMemo)(function () {
    return schemaToMask(schema);
  }, [schema]); // textValue is only used when a format is provided

  var _useState = (0,react.useState)(schema ? valueToText(value, schema) : undefined),
      textValue = _useState[0],
      setTextValue = _useState[1]; // We need to distinguish between the caller changing a Form value
  // and the user typing a date that he isn't finished with yet.
  // To handle this, we see if we have a value and the text value
  // associated with it doesn't align to it, then we update the text value.
  // We compare using textToValue to avoid "06/01/2021" not
  // matching "06/1/2021".


  (0,react.useEffect)(function () {
    if (schema && value && (Array.isArray(value) && value[0] || !Array.isArray(value))) {
      var nextTextValue = valueToText(value, schema);

      if (!valuesAreEqual(textToValue(textValue, schema, value, range), textToValue(nextTextValue, schema, value, range))) {
        setTextValue(nextTextValue);
      }
    }
  }, [range, schema, textValue, value]); // when format and not inline, whether to show the Calendar in a Drop

  var _useState2 = (0,react.useState)(),
      open = _useState2[0],
      setOpen = _useState2[1];

  var calendar = /*#__PURE__*/react.createElement(CalendarWrapper, DateInput_extends({
    ref: inline ? ref : undefined,
    id: inline && !format ? id : undefined,
    range: range,
    date: range ? undefined : value // when caller initializes with empty array, dates should be undefined
    // allowing the user to select both begin and end of the range
    ,
    dates: range && value.length ? [value] : undefined,
    onSelect: disabled ? undefined : function (nextValue) {
      var normalizedValue;

      if (range && Array.isArray(nextValue)) {
        normalizedValue = nextValue[0];
      } // clicking an edge date removes it
      else if (range) normalizedValue = [nextValue, nextValue];else normalizedValue = nextValue;

      if (schema) setTextValue(valueToText(normalizedValue, schema));
      setValue(normalizedValue);
      if (_onChange) _onChange({
        value: normalizedValue
      });
      if (open && !range) setOpen(false);
    }
  }, calendarProps));

  if (!format) {
    // When no format is specified, we don't give the user a way to type
    if (inline) return calendar;
    return /*#__PURE__*/react.createElement(DropButtonWrapper, DateInput_extends({
      ref: ref,
      id: id,
      dropProps: DateInput_extends({
        align: {
          top: 'bottom',
          left: 'left'
        }
      }, dropProps),
      dropContent: calendar,
      icon: /*#__PURE__*/react.createElement(icons_Calendar/* Calendar */.f, {
        size: iconSize
      })
    }, buttonProps));
  }

  var input = /*#__PURE__*/react.createElement(FormContext.Provider, {
    key: "input" // don't let MaskedInput drive the Form
    ,
    value: {
      useFormInput: function useFormInput(_, val) {
        return [val, function () {}];
      }
    }
  }, /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onEsc: open ? function () {
      return setOpen(false);
    } : undefined
  }, /*#__PURE__*/react.createElement(MaskedInputWrapper, DateInput_extends({
    ref: ref,
    id: id,
    name: name,
    icon: /*#__PURE__*/react.createElement(icons_Calendar/* Calendar */.f, {
      size: iconSize
    }),
    reverse: true,
    disabled: disabled,
    mask: mask
  }, inputProps, rest, {
    value: textValue,
    onChange: function onChange(event) {
      var nextTextValue = event.target.value;
      setTextValue(nextTextValue);
      var nextValue = textToValue(nextTextValue, schema, value, range); // update value even when undefined

      setValue(nextValue);

      if (_onChange) {
        event.persist(); // extract from React synthetic event pool

        var adjustedEvent = event;
        adjustedEvent.value = nextValue;

        _onChange(adjustedEvent);
      }
    },
    onFocus: function onFocus(event) {
      setOpen(true);
      if (_onFocus) _onFocus(event);
    }
  }))));

  if (inline) {
    return /*#__PURE__*/react.createElement(BoxWrapper, null, input, calendar);
  }

  if (open) {
    return [input, /*#__PURE__*/react.createElement(DropWrapper, DateInput_extends({
      overflow: "visible",
      key: "drop",
      id: id ? id + "__drop" : undefined,
      target: ref.current,
      align: DateInput_extends({
        top: 'bottom',
        left: 'left'
      }, dropProps),
      onEsc: function onEsc() {
        return setOpen(false);
      },
      onClickOutside: function onClickOutside() {
        return setOpen(false);
      }
    }, dropProps), calendar)];
  }

  return input;
});
DateInput.displayName = 'DateInput';
var DateInputDoc;

if (false) {}

var DateInputWrapper = DateInputDoc || DateInput;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DateInput/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Diagram/StyledDiagram.js




var StyledDiagram_animationItemStyle = function animationItemStyle(animationType, theme) {
  if (typeof animationType === 'string') {
    return animationObjectStyle({
      type: animationType
    }, theme, theme.diagram);
  }

  if (typeof animationType === 'object') {
    return animationObjectStyle(animationType, theme, theme.diagram);
  }

  if (typeof animationType === 'boolean') {
    return animationObjectStyle({
      type: 'draw'
    }, theme, theme.diagram);
  }

  return '';
};

var StyledDiagram_animationStyle = function animationStyle(props) {
  var animationCopy = props.animation;

  if (typeof props.animation === 'object') {
    animationCopy.type = animationCopy.type || 'draw';
  }

  var animationType = animationCopy.type || animationCopy;

  if (animationType === 'draw' || animationType === true) {
    return (0,styled_components_browser_esm.css)(["path{stroke-dasharray:500;stroke-dashoffset:500;animation:", ";}"], StyledDiagram_animationItemStyle(animationCopy, props.theme));
  }

  return (0,styled_components_browser_esm.css)(["animation:", ";"], StyledDiagram_animationItemStyle(animationCopy, props.theme));
};

var connectionStyle = function connectionStyle(connection, index, theme) {
  var type = connection.props.animation.type;

  if (typeof connection.props.animation === 'object') {
    type = type || 'draw';
  }

  var animationType = type || connection.props.animation;
  return (0,styled_components_browser_esm.css)(["path:nth-child(", "){stroke-dasharray:", ";stroke-dashoffset:", ";animation:", ";}"], index + 1, animationType === 'draw' || animationType === true ? 500 : 0, animationType === 'draw' || animationType === true ? 500 : 0, StyledDiagram_animationItemStyle(connection.props.animation, theme));
};

var availableAnimations = [true, 'draw', 'pulse'];
var StyledDiagram = styled_components_browser_esm.default.svg.withConfig({
  displayName: "StyledDiagram",
  componentId: "sc-1vzeu9f-0"
})(["max-width:100%;width:100%;height:100%;", " ", " ", ""], function (props) {
  return props.connections && props.connections.map(function (connection, index) {
    if (connection !== undefined && connection.props.animation) {
      var animation = connection.props.animation; // setting type to 'draw' if user doesn't specify a type

      if (typeof animation === 'object') {
        // copying 'connection' to avoid linter error
        var connectionCopy = connection;
        connectionCopy.props.animation.type = animation.type || 'draw';
        return availableAnimations.includes(animation.type || animation) ? connectionStyle(connectionCopy, index, props.theme) : '';
      }

      return connectionStyle(connection, index, props.theme);
    }

    return '';
  });
}, function (props) {
  return props.animation && (availableAnimations.includes(props.animation.type || props.animation) || Object.keys(props.animation).length !== 0) ? StyledDiagram_animationStyle(props) : '';
}, function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});
StyledDiagram.defaultProps = {};
Object.setPrototypeOf(StyledDiagram.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Diagram/Diagram.js
var Diagram_excluded = ["connections"],
    Diagram_excluded2 = ["anchor", "animation", "color", "offset", "round", "thickness", "type"];

function Diagram_extends() {
  Diagram_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Diagram_extends.apply(this, arguments);
}

function Diagram_objectWithoutPropertiesLoose(source, excluded) {
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







var computeMidPoint = function computeMidPoint(fromPoint, toPoint) {
  return [fromPoint[0] > toPoint[0] ? toPoint[0] + (fromPoint[0] - toPoint[0]) / 2 : fromPoint[0] + (toPoint[0] - fromPoint[0]) / 2, fromPoint[1] > toPoint[1] ? toPoint[1] + (fromPoint[1] - toPoint[1]) / 2 : fromPoint[1] + (toPoint[1] - fromPoint[1]) / 2];
};

var COMMANDS = {
  curved: function curved(fromPoint, toPoint, offset, anchor) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    var cmds = "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " ";

    if (anchor === 'horizontal') {
      cmds += "Q " + (midPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + (midPoint[0] + offset + "," + (midPoint[1] + offset) + " ");
    } else {
      cmds += "Q " + (fromPoint[0] + offset) + "," + (midPoint[1] + offset) + " " + (midPoint[0] + offset + "," + (midPoint[1] + offset) + " ");
    }

    cmds += "T " + (toPoint[0] + offset) + "," + (toPoint[1] + offset);
    return cmds;
  },
  direct: function direct(fromPoint, toPoint, offset) {
    return "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + ("L " + (toPoint[0] + offset) + "," + (toPoint[1] + offset));
  },
  rectilinear: function rectilinear(fromPoint, toPoint, offset, anchor) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    var cmds = "M " + (fromPoint[0] + offset) + "," + (fromPoint[1] + offset) + " ";

    if (anchor === 'horizontal') {
      cmds += "L " + (midPoint[0] + offset) + "," + (fromPoint[1] + offset) + " " + ("L " + (midPoint[0] + offset) + "," + (toPoint[1] + offset) + " ");
    } else {
      cmds += "L " + (fromPoint[0] + offset) + "," + (midPoint[1] + offset) + " " + ("L " + (toPoint[0] + offset) + "," + (midPoint[1] + offset) + " ");
    }

    cmds += "L " + (toPoint[0] + offset) + "," + (toPoint[1] + offset);
    return cmds;
  }
};

var findTarget = function findTarget(target) {
  if (typeof target === 'string') {
    return document.getElementById(target);
  }

  return target;
};

var Diagram = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var connections = _ref.connections,
      rest = Diagram_objectWithoutPropertiesLoose(_ref, Diagram_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)({
    width: 0,
    height: 0
  }),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var _useState2 = (0,react.useState)(),
      connectionPoints = _useState2[0],
      setConnectionPoints = _useState2[1];

  var svgRef = useForwardedRef(ref);
  (0,react.useEffect)(function () {
    setConnectionPoints(undefined);
  }, [connections]);
  var onResize = (0,react.useCallback)(function () {
    var svg = svgRef.current;

    if (svg) {
      var rect = svg.getBoundingClientRect();

      if (rect.width !== dimensions.width || rect.height !== dimensions.height) {
        setDimensions({
          width: rect.width,
          height: rect.height
        });
        setConnectionPoints(undefined);
      }
    }
  }, [dimensions.width, dimensions.height, svgRef]); // Ref that stores resize handler

  var savedOnResize = (0,react.useRef)(); // Update resize ref value if onResize changes.
  // This allows our effect below to always get latest handler

  (0,react.useEffect)(function () {
    savedOnResize.current = onResize;
  }, [onResize]);
  (0,react.useEffect)(function () {
    var onResizeHandler = function onResizeHandler(event) {
      return savedOnResize.current(event);
    };

    onResizeHandler();
    window.addEventListener('resize', onResizeHandler);
    return function () {
      window.removeEventListener('resize', onResizeHandler);
    };
  }, []);
  var placeConnections = (0,react.useCallback)(function () {
    var containerRect = svgRef.current.getBoundingClientRect();
    var updatedConnectionPoints = connections.map(function (_ref2) {
      var anchor = _ref2.anchor,
          fromTarget = _ref2.fromTarget,
          toTarget = _ref2.toTarget;
      var points;
      var fromElement = findTarget(fromTarget);
      var toElement = findTarget(toTarget);

      if (!fromElement) {
        console.warn("Diagram cannot find " + fromTarget);
      }

      if (!toElement) {
        console.warn("Diagram cannot find " + toTarget);
      }

      if (fromElement && toElement) {
        var fromRect = fromElement.getBoundingClientRect();
        var toRect = toElement.getBoundingClientRect(); // There is no x and y when unit testing.

        var fromPoint = [fromRect.left - containerRect.left || 0, fromRect.top - containerRect.top || 0];
        var toPoint = [toRect.left - containerRect.left || 0, toRect.top - containerRect.top || 0];

        if (anchor === 'vertical') {
          fromPoint[0] += fromRect.width / 2;
          toPoint[0] += toRect.width / 2;

          if (fromRect.top < toRect.top) {
            fromPoint[1] += fromRect.height;
          } else {
            toPoint[1] += toRect.height;
          }
        } else if (anchor === 'horizontal') {
          fromPoint[1] += fromRect.height / 2;
          toPoint[1] += toRect.height / 2;

          if (fromRect.left < toRect.left) {
            fromPoint[0] += fromRect.width;
          } else {
            toPoint[0] += toRect.width;
          }
        } else {
          // center
          fromPoint[0] += fromRect.width / 2;
          fromPoint[1] += fromRect.height / 2;
          toPoint[0] += toRect.width / 2;
          toPoint[1] += toRect.height / 2;
        }

        points = [fromPoint, toPoint];
      }

      return points;
    });
    setConnectionPoints(updatedConnectionPoints);
  }, [connections, svgRef]);
  (0,react.useEffect)(function () {
    if (!connectionPoints) {
      placeConnections();
    }
  }, [connectionPoints, placeConnections]);
  var paths;

  if (connectionPoints) {
    paths = connections.map(function (_ref3, index) {
      var anchor = _ref3.anchor,
          animation = _ref3.animation,
          color = _ref3.color,
          offset = _ref3.offset,
          round = _ref3.round,
          thickness = _ref3.thickness,
          type = _ref3.type,
          connectionRest = Diagram_objectWithoutPropertiesLoose(_ref3, Diagram_excluded2);

      var path;

      var cleanedRest = Diagram_extends({}, connectionRest);

      delete cleanedRest.fromTarget;
      delete cleanedRest.toTarget;
      var points = connectionPoints[index];

      if (points) {
        var offsetWidth = offset ? parseMetricToNum(theme.global.edgeSize[offset]) : 0;
        var d = COMMANDS[type || 'curved'](points[0], points[1], offsetWidth, anchor);
        var strokeWidth = thickness ? parseMetricToNum(theme.global.edgeSize[thickness] || thickness) : 1;
        var colorName = color || theme.diagram.line && theme.diagram.line.color;

        if (!colorName) {
          var colors = Object.keys(theme.global.colors).filter(function (n) {
            return n.match(/^graph-[0-9]$/);
          });
          colorName = colors[index % colors.length];
        }

        path = /*#__PURE__*/react.createElement("path", Diagram_extends({
          // eslint-disable-next-line react/no-array-index-key
          key: index,
          animation: animation
        }, cleanedRest, {
          stroke: normalizeColor(colorName, theme),
          strokeWidth: strokeWidth,
          strokeLinecap: round ? 'round' : 'butt',
          strokeLinejoin: round ? 'round' : 'miter',
          fill: "none",
          d: d
        }));
      }

      return path;
    });
  }

  return /*#__PURE__*/react.createElement(StyledDiagram, Diagram_extends({
    ref: svgRef,
    viewBox: "0 0 " + dimensions.width + " " + dimensions.height,
    preserveAspectRatio: "xMinYMin meet",
    connections: paths
  }, rest), /*#__PURE__*/react.createElement("g", null, paths));
});
Diagram.displayName = 'Diagram';
Diagram.defaultProps = {
  connections: []
};
var DiagramDoc;

if (false) {}

var DiagramWrapper = DiagramDoc || Diagram;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Diagram/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Distribution/Distribution.js
var Distribution_excluded = ["basis", "children", "direction", "fill", "gap", "values"];

function Distribution_extends() {
  Distribution_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Distribution_extends.apply(this, arguments);
}

function Distribution_objectWithoutPropertiesLoose(source, excluded) {
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






var Value = function Value(_ref) {
  var basis = _ref.basis,
      children = _ref.children;
  return /*#__PURE__*/react.createElement(BoxWrapper, {
    basis: basis,
    flex: "shrink",
    overflow: "hidden"
  }, children);
};

Value.propTypes = {
  basis: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).node.isRequired
};

var Distribution = function Distribution(_ref2) {
  var basis = _ref2.basis,
      children = _ref2.children,
      direction = _ref2.direction,
      fill = _ref2.fill,
      gap = _ref2.gap,
      values = _ref2.values,
      rest = Distribution_objectWithoutPropertiesLoose(_ref2, Distribution_excluded);

  if (values.length === 1) {
    var value = values[0];
    return /*#__PURE__*/react.createElement(Value, {
      value: value,
      basis: basis
    }, children(value));
  }

  if (values.length > 1) {
    var reducer = function reducer(accumulator, _ref3) {
      var value = _ref3.value;
      return accumulator + (value || 0);
    };

    var total = values.filter(function (v) {
      return Object.prototype.hasOwnProperty.call(v, 'value');
    }).reduce(reducer, 0); // figure out how many of the values area needed to represent half of the
    // total

    var subTotal = 0;
    var subIndex;
    values.some(function (v, index) {
      subTotal += Object.prototype.hasOwnProperty.call(v, 'value') ? v.value : 0;

      if (subTotal >= total * 0.4) {
        subIndex = index + 1;
        return true;
      }

      return false;
    });

    if (subIndex === values.length) {
      var _value = values[0];
      return /*#__PURE__*/react.createElement(Value, {
        value: _value,
        basis: basis
      }, children(_value));
    }

    var childBasis;

    if (subTotal === 0) {
      childBasis = ['0px', '0px'];
    } else if (subTotal === total) {
      childBasis = ['full', '0px'];
    } else if (subTotal > total * 0.7) {
      childBasis = ['3/4', '1/4'];
    } else if (subTotal > total * 0.6) {
      childBasis = ['2/3', '1/3'];
    } else {
      childBasis = ['1/2', '1/2'];
    }

    return /*#__PURE__*/react.createElement(BoxWrapper, Distribution_extends({
      direction: direction,
      basis: basis,
      flex: basis ? 'shrink' : true,
      overflow: "hidden",
      gap: gap,
      fill: fill
    }, rest), /*#__PURE__*/react.createElement(Distribution, {
      values: values.slice(0, subIndex),
      basis: childBasis[0],
      direction: direction === 'row' ? 'column' : 'row',
      gap: gap
    }, children), /*#__PURE__*/react.createElement(Distribution, {
      values: values.slice(subIndex),
      basis: childBasis[1],
      direction: direction === 'row' ? 'column' : 'row',
      gap: gap
    }, children));
  }

  return null;
};

Distribution.defaultProps = {
  basis: undefined,
  children: function children(value) {
    return /*#__PURE__*/react.createElement(BoxWrapper, {
      fill: true,
      border: true
    }, /*#__PURE__*/react.createElement(TextWrapper, null, value.value));
  },
  direction: 'row',
  gap: 'xsmall',
  values: []
};
var DistributionDoc;

if (false) {}

var DistributionWrapper = DistributionDoc || Distribution;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Distribution/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Drop/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/DropButton/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/FileInput/StyledFileInput.js



var StyledFileInput = styled_components_browser_esm.default.input.withConfig({
  displayName: "StyledFileInput",
  componentId: "rl7ywv-0"
})(["position:absolute;height:100%;width:100%;", " opacity:0;border:none;", " ", " &::-moz-focus-inner{border:none;outline:none;}"], inputStyle, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return props.rightOffset && "\n    width: calc(100% - " + props.rightOffset + "px);\n    right: " + props.rightOffset + "px;\n    ";
});
StyledFileInput.defaultProps = {};
Object.setPrototypeOf(StyledFileInput.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/FileInput/FileInput.js
var FileInput_excluded = ["a11yTitle", "background", "border", "disabled", "id", "plain", "renderFile", "messages", "margin", "multiple", "name", "onChange", "pad", "value"];

function FileInput_extends() {
  FileInput_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FileInput_extends.apply(this, arguments);
}

function FileInput_objectWithoutPropertiesLoose(source, excluded) {
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












 // We want the interaction of <input type="file" /> but none of its styling.
// So, we put what we want to show underneath and
// position the <input /> on top with an opacity of zero.
// If there are any files selected, we need to show the buttons to remove them.
// So, we offset the <input /> from the right by the appropriate width.
// We don't use Stack because of how we need to control the positioning.

var ContentsBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "FileInput__ContentsBox",
  componentId: "sc-1jzq7im-0"
})(["position:relative;", " ", ";", ";", ";"], function (props) {
  return props.disabled && disabledStyle();
}, function (props) {
  return props.theme.fileInput && props.theme.fileInput.extend;
}, function (props) {
  return props.hover && props.theme.fileInput && props.theme.fileInput.hover && props.theme.fileInput.hover.extend;
}, function (props) {
  return props.dragOver && props.theme.fileInput && props.theme.fileInput.dragOver && props.theme.fileInput.dragOver.extend;
});
var Label = (0,styled_components_browser_esm.default)(TextWrapper).withConfig({
  displayName: "FileInput__Label",
  componentId: "sc-1jzq7im-1"
})(["", ";"], function (props) {
  return props.theme.fileInput && props.theme.fileInput.label && props.theme.fileInput.label.extend;
});
var Message = (0,styled_components_browser_esm.default)(TextWrapper).withConfig({
  displayName: "FileInput__Message",
  componentId: "sc-1jzq7im-2"
})(["", ";"], function (props) {
  return props.theme.fileInput && props.theme.fileInput.message && props.theme.fileInput.message.extend;
});
var FileInput = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      background = _ref.background,
      border = _ref.border,
      disabled = _ref.disabled,
      id = _ref.id,
      plain = _ref.plain,
      renderFile = _ref.renderFile,
      messages = _ref.messages,
      margin = _ref.margin,
      multiple = _ref.multiple,
      name = _ref.name,
      _onChange = _ref.onChange,
      pad = _ref.pad,
      valueProp = _ref.value,
      rest = FileInput_objectWithoutPropertiesLoose(_ref, FileInput_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format;

  var formContext = (0,react.useContext)(FormContext);

  var _formContext$useFormI = formContext.useFormInput(name, valueProp, []),
      files = _formContext$useFormI[0],
      setFiles = _formContext$useFormI[1];

  var _React$useState = react.useState(),
      hover = _React$useState[0],
      setHover = _React$useState[1];

  var _React$useState2 = react.useState(),
      dragOver = _React$useState2[0],
      setDragOver = _React$useState2[1];

  var aggregateThreshold = multiple && multiple.aggregateThreshold || 10;
  var inputRef = useForwardedRef(ref);
  var controlRef = (0,react.useRef)();
  var removeRef = (0,react.useRef)();
  var RemoveIcon = theme.fileInput.icons.remove;

  var mergeTheme = function mergeTheme(propertyName, defaultKey) {
    var result = {};
    var themeProp = theme.fileInput[propertyName];
    if (themeProp) if (typeof themeProp !== 'object') {
      if (defaultKey) result[defaultKey] = themeProp;else result = themeProp;
    } else result = FileInput_extends({}, themeProp);
    var hoverThemeProp = theme.fileInput.hover[propertyName];
    if (hover && hoverThemeProp) if (typeof hoverThemeProp !== 'object') {
      if (defaultKey) result[defaultKey] = hoverThemeProp;else result = hoverThemeProp;
    } else result = FileInput_extends({}, result, hoverThemeProp);
    var dragOverThemeProp = theme.fileInput.dragOver[propertyName];
    if (dragOver && dragOverThemeProp) if (typeof dragOverThemeProp !== 'object') {
      if (defaultKey) result[defaultKey] = dragOverThemeProp;else result = dragOverThemeProp;
    } else result = FileInput_extends({}, result, dragOverThemeProp);
    return typeof result === 'object' && Object.keys(result).length === 0 ? undefined : result;
  };

  var rightPad;

  if (mergeTheme('pad')) {
    var _mergeTheme = mergeTheme('pad'),
        horizontal = _mergeTheme.horizontal,
        right = _mergeTheme.right;

    if (right) {
      rightPad = theme.global.edgeSize[right] || right;
    } else if (horizontal) {
      rightPad = theme.global.edgeSize[horizontal] || horizontal;
    }
  } // rightPad needs to be included in the rightOffset
  // otherwise input may cover the RemoveButton, making it
  // unreachable by mouse click.
  // If browse anchor or button is greater than remove button then
  // rightoffset will take the larger width


  var rightOffset;

  if (removeRef.current && controlRef.current) {
    var rightOffsetBrowse = controlRef.current.getBoundingClientRect().width;
    var rightOffsetRemove = removeRef.current.getBoundingClientRect().width;
    if (rightPad && typeof rightPad === 'string') rightOffset = rightOffsetRemove + parseMetricToNum(rightPad);

    if (files.length === 1 || files.length > aggregateThreshold) {
      rightOffset = rightOffsetBrowse + rightOffsetRemove + parseMetricToNum(theme.global.edgeSize.small) * 2;
    } else if (rightOffsetBrowse > rightOffsetRemove) {
      rightOffset = rightOffsetBrowse + parseMetricToNum(theme.global.edgeSize.small) * 2;
    } else rightOffset = rightOffsetRemove;
  } else if (!files.length && controlRef.current) {
    rightOffset = controlRef.current.getBoundingClientRect().width + parseMetricToNum(theme.global.edgeSize.small) * 2;
  } // Show the number of files when more than one


  var message;

  if (!files.length) {
    message = format({
      id: multiple ? 'fileInput.dropPromptMultiple' : 'fileInput.dropPrompt',
      messages: messages
    });
  } else message = files.length + " items";

  return /*#__PURE__*/react.createElement(ContentsBox, {
    theme: theme,
    flex: false,
    disabled: disabled,
    background: mergeTheme('background', 'color'),
    border: !plain ? mergeTheme('border', 'side') : undefined,
    margin: mergeTheme('margin'),
    pad: mergeTheme('pad'),
    round: mergeTheme('round', 'size'),
    align: files.length ? 'stretch' : 'center',
    justify: "center",
    hover: hover,
    onMouseOver: disabled ? undefined : function () {
      return setHover(true);
    },
    onMouseOut: disabled ? undefined : function () {
      return setHover(false);
    },
    dragOver: dragOver
  }, (!files.length || files.length > 1) && /*#__PURE__*/react.createElement(BoxWrapper, {
    align: "center",
    fill: "horizontal",
    direction: "row",
    justify: "between"
  }, files.length <= aggregateThreshold && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Message, theme.fileInput.message, message), /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onSpace: function onSpace(event) {
      if (controlRef.current === event.target) inputRef.current.click();
    },
    onEnter: function onEnter(event) {
      if (controlRef.current === event.target) inputRef.current.click();
    }
  }, theme.fileInput.button ? /*#__PURE__*/react.createElement(ButtonWrapper, {
    ref: controlRef,
    kind: theme.fileInput.button,
    label: format({
      id: 'fileInput.browse',
      messages: messages
    }),
    onClick: function onClick() {
      inputRef.current.click();
      inputRef.current.focus();
    }
  }) : /*#__PURE__*/react.createElement(Anchor, {
    tabIndex: 0,
    alignSelf: "center",
    ref: controlRef,
    margin: "small",
    onClick: function onClick() {
      inputRef.current.click();
      inputRef.current.focus();
    },
    label: format({
      id: 'fileInput.browse',
      messages: messages
    })
  })))), files.length > aggregateThreshold && /*#__PURE__*/react.createElement(BoxWrapper, {
    justify: "between",
    direction: "row",
    align: "center"
  }, /*#__PURE__*/react.createElement(Label, theme.fileInput.label, files.length, ' ', format({
    id: 'fileInput.files',
    messages: messages
  })), /*#__PURE__*/react.createElement(BoxWrapper, {
    flex: false,
    direction: "row",
    align: "center"
  }, /*#__PURE__*/react.createElement(ButtonWrapper, {
    ref: removeRef,
    a11yTitle: format({
      id: 'fileInput.removeAll',
      messages: messages
    }),
    icon: /*#__PURE__*/react.createElement(RemoveIcon, null),
    hoverIndicator: true,
    onClick: function onClick(event) {
      event.stopPropagation();
      if (_onChange) _onChange(event, {
        files: []
      });
      setFiles([]);
      inputRef.current.focus();
    }
  }), /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onSpace: function onSpace(event) {
      if (controlRef.current === event.target) inputRef.current.click();
    },
    onEnter: function onEnter(event) {
      if (controlRef.current === event.target) inputRef.current.click();
    }
  }, theme.fileInput.button ? /*#__PURE__*/react.createElement(ButtonWrapper, {
    ref: controlRef,
    kind: theme.fileInput.button,
    label: format({
      id: 'fileInput.browse',
      messages: messages
    }),
    onClick: function onClick() {
      inputRef.current.click();
      inputRef.current.focus();
    }
  }) : /*#__PURE__*/react.createElement(Anchor, {
    tabIndex: 0,
    alignSelf: "center",
    ref: controlRef,
    margin: "small",
    onClick: function onClick() {
      inputRef.current.click();
      inputRef.current.focus();
    },
    label: format({
      id: 'fileInput.browse',
      messages: messages
    })
  })))), files.length > 0 && files.length <= aggregateThreshold && files.map(function (file, index) {
    return /*#__PURE__*/react.createElement(BoxWrapper, {
      key: file.name,
      justify: "between",
      direction: "row",
      align: "center"
    }, renderFile ? renderFile(file) : /*#__PURE__*/react.createElement(Label, FileInput_extends({
      weight: theme.global.input.weight || theme.global.input.font.weight,
      truncate: true
    }, theme.fileInput.label), file.name), /*#__PURE__*/react.createElement(BoxWrapper, {
      flex: false,
      direction: "row",
      align: "center"
    }, /*#__PURE__*/react.createElement(ButtonWrapper, {
      ref: index ? undefined : removeRef,
      a11yTitle: format({
        id: 'fileInput.remove',
        messages: messages
      }) + " " + file.name,
      icon: /*#__PURE__*/react.createElement(RemoveIcon, null),
      hoverIndicator: true,
      onClick: function onClick(event) {
        event.stopPropagation();
        var nextFiles = [].concat(files);
        nextFiles.splice(index, 1);
        setFiles(nextFiles);
        if (_onChange) _onChange(event, {
          files: nextFiles
        });
        if (nextFiles.length === 0) inputRef.current.value = '';
        inputRef.current.focus();
      }
    }), files.length === 1 && /*#__PURE__*/react.createElement(KeyboardWrapper, {
      onSpace: function onSpace(event) {
        if (controlRef.current === event.target) inputRef.current.click();
      },
      onEnter: function onEnter(event) {
        if (controlRef.current === event.target) inputRef.current.click();
      }
    }, theme.fileInput.button ? /*#__PURE__*/react.createElement(ButtonWrapper, {
      ref: controlRef,
      kind: theme.fileInput.button,
      label: format({
        id: 'fileInput.browse',
        messages: messages
      }),
      onClick: function onClick() {
        inputRef.current.click();
        inputRef.current.focus();
      }
    }) : /*#__PURE__*/react.createElement(Anchor, {
      tabIndex: 0,
      ref: controlRef,
      margin: "small",
      onClick: function onClick() {
        inputRef.current.click();
        inputRef.current.focus();
      },
      label: format({
        id: 'fileInput.browse',
        messages: messages
      })
    }))));
  }), /*#__PURE__*/react.createElement(StyledFileInput, FileInput_extends({
    ref: inputRef,
    type: "file",
    id: id,
    name: name,
    multiple: multiple,
    disabled: disabled,
    plain: true,
    rightOffset: rightOffset
  }, rest, {
    onDragOver: function onDragOver() {
      return setDragOver(true);
    },
    onDragLeave: function onDragLeave() {
      return setDragOver(false);
    },
    onChange: function onChange(event) {
      event.persist();
      var fileList = event.target.files;
      var nextFiles = multiple ? [].concat(files) : [];

      var _loop = function _loop(i) {
        // avoid duplicates
        var existing = nextFiles.filter(function (file) {
          return file.name === fileList[i].name && file.size === fileList[i].size;
        }).length > 0;
        if (!existing) nextFiles.push(fileList[i]);
      };

      for (var i = 0; i < fileList.length; i += 1) {
        _loop(i);
      }

      setFiles(nextFiles);
      setDragOver(false);
      if (_onChange) _onChange(event, {
        files: nextFiles
      });
    }
  })));
});
FileInput.defaultProps = {};
Object.setPrototypeOf(FileInput.defaultProps, default_props_defaultProps);
FileInput.displayName = 'FileInput';
var FileInputDoc;

if (false) {}

var FileInputWrapper = FileInputDoc || FileInput;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/FileInput/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Footer/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Form/Form.js
var Form_excluded = ["children", "errors", "infos", "messages", "onChange", "onReset", "onSubmit", "onValidate", "validate", "value"];

function Form_extends() {
  Form_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Form_extends.apply(this, arguments);
}

function Form_objectWithoutPropertiesLoose(source, excluded) {
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




var Form_defaultValue = {};
var defaultTouched = {};
var defaultValidationResults = {
  errors: {},
  infos: {}
}; // validations is an array from Object.entries()

var validate = function validate(validations, value, omitValid) {
  var nextErrors = {};
  var nextInfos = {};
  validations.forEach(function (_ref) {
    var name = _ref[0],
        validation = _ref[1];

    if (!omitValid) {
      nextErrors[name] = undefined;
      nextInfos[name] = undefined;
    }

    var result = validation(value[name], value); // typeof error === 'object' is implied for both cases of error with
    // a status message and for an error object that is a react node

    if (typeof result === 'object') {
      if (result.status === 'info') {
        nextInfos[name] = result.message;
      } else {
        nextErrors[name] = result.message || result; // could be a node
      }
    } else if (typeof result === 'string') {
      nextErrors[name] = result;
    }
  });
  return [nextErrors, nextInfos];
};

var Form = /*#__PURE__*/(0,react.forwardRef)(function (_ref2, ref) {
  var children = _ref2.children,
      _ref2$errors = _ref2.errors,
      errorsProp = _ref2$errors === void 0 ? defaultValidationResults.errors : _ref2$errors,
      _ref2$infos = _ref2.infos,
      infosProp = _ref2$infos === void 0 ? defaultValidationResults.infos : _ref2$infos,
      messages = _ref2.messages,
      onChange = _ref2.onChange,
      _onReset = _ref2.onReset,
      _onSubmit = _ref2.onSubmit,
      onValidate = _ref2.onValidate,
      _ref2$validate = _ref2.validate,
      validateOn = _ref2$validate === void 0 ? 'submit' : _ref2$validate,
      valueProp = _ref2.value,
      rest = Form_objectWithoutPropertiesLoose(_ref2, Form_excluded);

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format;

  var _useState = (0,react.useState)(valueProp || Form_defaultValue),
      valueState = _useState[0],
      setValueState = _useState[1];

  var value = (0,react.useMemo)(function () {
    return valueProp || valueState;
  }, [valueProp, valueState]);

  var _useState2 = (0,react.useState)(defaultTouched),
      touched = _useState2[0],
      setTouched = _useState2[1];

  var _useState3 = (0,react.useState)(defaultValidationResults),
      validationResults = _useState3[0],
      setValidationResults = _useState3[1]; // when onBlur input validation is triggered, we need to complete any
  // potential click events before running the onBlur validation.
  // otherwise, click events like reset, etc. may not be registered.
  // for a detailed scenario/discussion,
  // see: https://github.com/grommet/grommet/issues/4863
  // the value of pendingValidation is the name of the FormField
  // awaiting validation.


  var _useState4 = (0,react.useState)(undefined),
      pendingValidation = _useState4[0],
      setPendingValidation = _useState4[1];

  (0,react.useEffect)(function () {
    setPendingValidation(undefined);
    setValidationResults({
      errors: errorsProp,
      infos: infosProp
    });
  }, [errorsProp, infosProp]);
  var validations = (0,react.useRef)({});
  var requiredFields = (0,react.useRef)([]);
  var buildValid = (0,react.useCallback)(function (nextErrors) {
    var valid = false;
    valid = requiredFields.current.filter(function (n) {
      return Object.keys(validations.current).includes(n);
    }).every(function (field) {
      return value[field] && (value[field] !== '' || value[field] !== false);
    });
    if (Object.keys(nextErrors).length > 0) valid = false;
    return valid;
  }, [value]); // Remove any errors that we don't have any validations for anymore.

  var filterErrorValidations = function filterErrorValidations(errors) {
    var nextErrors = errors;
    return Object.keys(nextErrors).filter(function (n) {
      return !validations.current[n] || nextErrors[n] === undefined;
    }).forEach(function (n) {
      return delete nextErrors[n];
    });
  }; // Remove any infos that we don't have any validations for anymore.


  var filterInfoValidations = function filterInfoValidations(infos) {
    var nextInfos = infos;
    return Object.keys(nextInfos).filter(function (n) {
      return !validations.current[n] || nextInfos[n] === undefined;
    }).forEach(function (n) {
      return delete nextInfos[n];
    });
  }; // On initial mount, when validateOn is change or blur,
  // set validation results for any set fields and calculate whether
  // the form is valid overall.


  (0,react.useEffect)(function () {
    var validationsForSetFields = Object.entries(validations.current).filter(function (_ref3) {
      var n = _ref3[0];
      return value[n];
    });

    if (validationsForSetFields.length > 0 && validateOn !== 'submit') {
      var _validate = validate(validationsForSetFields, value),
          errors = _validate[0],
          infos = _validate[1];

      filterErrorValidations(errors);
      filterInfoValidations(infos);
      var nextValidationResults = {
        errors: errors,
        infos: infos,
        valid: buildValid(errors)
      };
      if (onValidate) onValidate(nextValidationResults);
      setValidationResults(nextValidationResults);
    } // We only want to run this for the value we have on initial mount.
    // We don't want subsequent changes to the value to re-run this.
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []); // Currently, onBlur validation will trigger after a timeout of 120ms.

  (0,react.useEffect)(function () {
    var timer = setTimeout(function () {
      if (pendingValidation) {
        // run validations on the pending one and any other touched fields
        var _validate2 = validate(Object.entries(validations.current).filter(function (_ref4) {
          var n = _ref4[0];
          return touched[n] || pendingValidation.includes(n);
        }), value),
            validatedErrors = _validate2[0],
            validatedInfos = _validate2[1];

        setPendingValidation(undefined);
        setValidationResults(function (prevValidationResults) {
          // keep any previous errors and infos for untouched keys,
          // these may have come from a submit
          var nextErrors = Form_extends({}, prevValidationResults.errors, validatedErrors);

          var nextInfos = Form_extends({}, prevValidationResults.infos, validatedInfos);

          filterErrorValidations(nextErrors);
          filterInfoValidations(nextInfos);
          var nextValidationResults = {
            errors: nextErrors,
            infos: nextInfos,
            valid: buildValid(nextErrors)
          };
          if (onValidate) onValidate(nextValidationResults);
          return nextValidationResults;
        });
      } // a timeout is needed to ensure that a click event (like one on a reset
      // button) completes prior to running the validation. without a timeout,
      // the blur will always complete and trigger a validation prematurely
      // The following values have been empirically tested, but 120 was
      // selected because it is the largest value
      // Chrome: 100, Safari: 120, Firefox: 80

    }, 120);
    return function () {
      return clearTimeout(timer);
    };
  }, [buildValid, pendingValidation, onValidate, touched, value, requiredFields]); // clear any errors when value changes

  (0,react.useEffect)(function () {
    if (validateOn !== 'change') setPendingValidation(undefined);
    setValidationResults(function (prevValidationResults) {
      var _validate3 = validate(Object.entries(validations.current).filter(function (_ref5) {
        var n = _ref5[0];
        return prevValidationResults.errors[n] || prevValidationResults.infos[n];
      }), value),
          nextErrors = _validate3[0],
          nextInfos = _validate3[1];

      return {
        errors: Form_extends({}, prevValidationResults.errors, nextErrors),
        infos: Form_extends({}, prevValidationResults.infos, nextInfos)
      };
    });
  }, [touched, validateOn, value]); // There are three basic patterns of handling form input value state:
  //
  // 1 - form controlled
  //
  // In this model, the caller sets `value` and `onChange` properties
  // on the Form component to supply the values used by the input fields.
  // In useFormContext(), componentValue would be undefined and formValue
  // is be set to whatever the form state has. Whenever the form state
  // changes, we update the contextValue so the input component will use
  // that. When the input component changes, we will call update() to
  // update the form state.
  //
  // 2 - input controlled
  //
  // In this model, the caller sets `value` and `onChange` properties
  // on the input components, like TextInput, to supply the value for it.
  // In useFormContext(), componentValue is this value and we ensure to
  // update the form state, via update(), and set the contextValue from
  // the componentValue. When the input component changes, we will
  // call update() to update the form state.
  //
  // 3 - uncontrolled
  //
  // In this model, the caller doesn't set a `value` or `onChange` property
  // at either the form or input component levels.
  // In useFormContext(), componentValue is undefined and valueProp is
  // undefined and nothing much happens here. That is, unless the
  // calling component needs to know the state in order to work, such
  // as CheckBox or Select. In this case, those components supply
  // an initialValue, which will trigger updating the contextValue so
  // they can have access to it.
  //

  var useFormInput = function useFormInput(name, componentValue, initialValue) {
    var _useState5 = (0,react.useState)(initialValue),
        inputValue = _useState5[0],
        setInputValue = _useState5[1];

    var formValue = name ? value[name] : undefined; // for dynamic forms, we need to track when an input has been added to
    // the form value. if the input is unmounted, we will delete its key/value
    // from the form value.

    var keyCreated = (0,react.useRef)(false); // This effect is for pattern #2, where the controlled input
    // component is driving the value via componentValue.

    (0,react.useEffect)(function () {
      if (name && // we have somewhere to put this
      componentValue !== undefined && // input driving
      componentValue !== formValue // don't already have it
      ) {
        setValueState(function (prevValue) {
          var nextValue = Form_extends({}, prevValue);

          nextValue[name] = componentValue;
          return nextValue;
        }); // don't onChange on programmatic changes
      }
    }, [componentValue, formValue, name]); // on unmount, if the form is uncontrolled, remove the key/value
    // from the form value

    (0,react.useEffect)(function () {
      return function () {
        if (keyCreated.current) {
          keyCreated.current = false;
          setValueState(function (prevValue) {
            var nextValue = Form_extends({}, prevValue);

            delete nextValue[name];
            return nextValue;
          });
        }
      };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // only run onmount and unmount
    );
    var useValue;
    if (componentValue !== undefined) // input component drives, pattern #2
      useValue = componentValue;else if (valueProp && name && formValue !== undefined) // form drives, pattern #1
      useValue = formValue;else if (formValue === undefined && name) // form has reset, so reset input value as well
      useValue = initialValue;else useValue = inputValue;
    return [useValue, function (nextComponentValue) {
      if (name) {
        // we have somewhere to put this
        var nextTouched = Form_extends({}, touched);

        nextTouched[name] = true;

        if (!touched[name]) {
          // don't update if not needed
          setTouched(nextTouched);
        }

        var nextValue = Form_extends({}, value); // if nextValue doesn't have a key for name, this must be
        // uncontrolled form. we will flag this field was added so
        // we know to remove its value from the form if it is dynamically
        // removed


        if (!(name in nextValue)) keyCreated.current = true;
        nextValue[name] = nextComponentValue;
        setValueState(nextValue);
        if (onChange) onChange(nextValue, {
          touched: nextTouched
        });
      }

      if (initialValue !== undefined) setInputValue(nextComponentValue);
    }];
  };

  var useFormField = function useFormField(_ref6) {
    var errorArg = _ref6.error,
        infoArg = _ref6.info,
        name = _ref6.name,
        required = _ref6.required,
        validateArg = _ref6.validate;
    var error = errorArg || validationResults.errors[name];
    var info = infoArg || validationResults.infos[name];
    (0,react.useEffect)(function () {
      var validateSingle = function validateSingle(aValidate, value2, data) {
        var result;

        if (typeof aValidate === 'function') {
          result = aValidate(value2, data);
        } else if (aValidate.regexp) {
          if (!aValidate.regexp.test(value2)) {
            result = aValidate.message || format({
              id: 'form.invalid',
              messages: messages
            });

            if (aValidate.status) {
              result = {
                message: result,
                status: aValidate.status
              };
            }
          }
        }

        return result;
      };

      var validateField = function validateField(value2, data) {
        var result;

        if (required && ( // false is for CheckBox
        value2 === undefined || value2 === '' || value2 === false || Array.isArray(value2) && !value2.length)) {
          result = format({
            id: 'form.required',
            messages: messages
          });
        } else if (validateArg) {
          if (Array.isArray(validateArg)) {
            validateArg.some(function (aValidate) {
              result = validateSingle(aValidate, value2, data);
              return !!result;
            });
          } else {
            result = validateSingle(validateArg, value2, data);
          }
        }

        return result;
      };

      var index = requiredFields.current.indexOf(name);

      if (required) {
        if (index === -1) requiredFields.current.push(name);
      } else if (index !== -1) requiredFields.current.splice(index, 1);

      if (validateArg || required) {
        validations.current[name] = validateField;
        return function () {
          return delete validations.current[name];
        };
      }

      return undefined;
    }, [error, name, required, validateArg]);
    return {
      error: error,
      info: info,
      inForm: true,
      onBlur: validateOn === 'blur' ? function () {
        return setPendingValidation(pendingValidation ? [].concat(pendingValidation, [name]) : [name]);
      } : undefined,
      onChange: validateOn === 'change' ? function () {
        return setPendingValidation(pendingValidation ? [].concat(pendingValidation, [name]) : [name]);
      } : undefined
    };
  };

  return /*#__PURE__*/react.createElement("form", Form_extends({
    ref: ref
  }, rest, {
    onReset: function onReset(event) {
      setPendingValidation(undefined);

      if (!valueProp) {
        setValueState(Form_defaultValue);
        if (onChange) onChange(Form_defaultValue, {
          touched: defaultTouched
        });
      }

      setTouched(defaultTouched);
      setValidationResults(defaultValidationResults);

      if (_onReset) {
        event.persist(); // extract from React's synthetic event pool

        var adjustedEvent = event;
        adjustedEvent.value = Form_defaultValue;

        _onReset(adjustedEvent);
      }
    },
    onSubmit: function onSubmit(event) {
      // Don't submit the form via browser form action. We don't want it
      // if the validation fails. And, we assume a javascript action handler
      // otherwise.
      event.preventDefault();
      setPendingValidation(undefined);

      var _validate4 = validate(Object.entries(validations.current), value, true),
          nextErrors = _validate4[0],
          nextInfos = _validate4[1];

      setValidationResults(function () {
        var nextValidationResults = {
          errors: nextErrors,
          infos: nextInfos,
          // Show form's validity when clicking on Submit
          valid: buildValid(nextErrors)
        };
        if (onValidate) onValidate(nextValidationResults);
        return nextValidationResults;
      });

      if (Object.keys(nextErrors).length === 0 && _onSubmit) {
        event.persist(); // extract from React's synthetic event pool

        var adjustedEvent = event;
        adjustedEvent.value = value;
        adjustedEvent.touched = touched;

        _onSubmit(adjustedEvent);
      }
    }
  }), /*#__PURE__*/react.createElement(FormContext.Provider, {
    value: {
      useFormField: useFormField,
      useFormInput: useFormInput
    }
  }, children));
});
Form.displayName = 'Form';
var FormDoc;

if (false) {}

var FormWrapper = FormDoc || Form;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Form/index.js


;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RadioButton/StyledRadioButton.js



var StyledRadioButton_disabledStyle = "\n  opacity: 0.5;\n  cursor: default;\n";
var StyledRadioButtonContainer = styled_components_browser_esm.default.label.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonContainer",
  componentId: "g1f6ld-0"
})(["display:flex;flex-direction:row;align-items:center;user-select:none;width:fit-content;", " ", ":hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:", ";}:hover{background-color:", ";}", " ", ";"], function (props) {
  return props.disabled && StyledRadioButton_disabledStyle;
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return normalizeColor(props.theme.radioButton.hover.border.color, props.theme);
}, function (props) {
  return normalizeColor(!props.disabled && props.theme.radioButton.hover && props.theme.radioButton.hover.background && props.theme.radioButton.hover.background.color, props.theme);
}, function (props) {
  return props.focus && !props.focusIndicator && "\n      input:not([disabled]) + div,\n      input:not([disabled]) + span {\n      border-color: " + normalizeColor(props.theme.radioButton.hover.border.color, props.theme) + ";\n    }\n    background-color: " + normalizeColor(!props.disabled && props.theme.radioButton.hover && props.theme.radioButton.hover.background && props.theme.radioButton.hover.background.color, props.theme) + ";\n    ";
}, function (props) {
  return props.theme.radioButton.container.extend;
});
StyledRadioButtonContainer.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonContainer.defaultProps, default_props_defaultProps);
var StyledRadioButtonInput = styled_components_browser_esm.default.input.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonInput",
  componentId: "g1f6ld-1"
})(["opacity:0;-moz-appearance:none;width:0;height:0;margin:0;", ";"], function (props) {
  return !props.disabled && 'cursor: pointer;';
});
StyledRadioButtonInput.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonInput.defaultProps, default_props_defaultProps);
var StyledRadioButtonLabel = styled_components_browser_esm.default.span.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonLabel",
  componentId: "g1f6ld-2"
})(["", ""], function (props) {
  return props.theme.radioButton.font.weight && (0,styled_components_browser_esm.css)(["font-weight:", ";"], props.theme.radioButton.font.weight);
});
StyledRadioButtonLabel.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonLabel.defaultProps, default_props_defaultProps);
var StyledRadioButtonIcon = styled_components_browser_esm.default.svg.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonIcon",
  componentId: "g1f6ld-3"
})(["box-sizing:border-box;width:", ";height:", ";fill:", ";", ";"], function (props) {
  return props.theme.radioButton.icon.size || props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.icon.size || props.theme.radioButton.size;
}, function (props) {
  return normalizeColor(props.theme.radioButton.check.color || 'control', props.theme);
}, function (props) {
  return props.theme.radioButton.icon.extend;
});
StyledRadioButtonIcon.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonIcon.defaultProps, default_props_defaultProps);
var StyledRadioButtonBox = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledRadioButton__StyledRadioButtonBox",
  componentId: "g1f6ld-4"
})(["background-color:", ";", ";", ";"], function (props) {
  return props.theme.radioButton.check.background && props.theme.radioButton.check.background.color;
}, function (props) {
  return props.focus && focusStyle();
}, function (props) {
  return props.theme.radioButton.check.extend;
});
StyledRadioButtonBox.defaultProps = {};
Object.setPrototypeOf(StyledRadioButtonBox.defaultProps, default_props_defaultProps);
var StyledRadioButton = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledRadioButton",
  componentId: "g1f6ld-5"
})(["", ";"], function (props) {
  return props.theme.radioButton && props.theme.radioButton.extend;
});
StyledRadioButton.defaultProps = {};
Object.setPrototypeOf(StyledRadioButton.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RadioButton/RadioButton.js
var RadioButton_excluded = ["a11yTitle", "checked", "children", "disabled", "focus", "focusIndicator", "id", "label", "name", "onChange"];

function RadioButton_extends() {
  RadioButton_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RadioButton_extends.apply(this, arguments);
}

function RadioButton_objectWithoutPropertiesLoose(source, excluded) {
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







var RadioButton = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      checked = _ref.checked,
      children = _ref.children,
      disabled = _ref.disabled,
      focus = _ref.focus,
      focusIndicator = _ref.focusIndicator,
      id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      rest = RadioButton_objectWithoutPropertiesLoose(_ref, RadioButton_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)(),
      hover = _useState[0],
      setHover = _useState[1];

  var normalizedLabel = typeof label === 'string' ? /*#__PURE__*/react.createElement(StyledRadioButtonLabel, null, label) : label;
  var Icon = theme.radioButton.icons.circle;
  var borderColor = normalizeColor(theme.radioButton.border.color, theme);

  if (checked) {
    borderColor = normalizeColor(theme.radioButton.color || 'control', theme);
  }

  return /*#__PURE__*/react.createElement(StyledRadioButtonContainer, RadioButton_extends({}, removeUndefined({
    htmlFor: id,
    disabled: disabled
  }), {
    onClick: function onClick(event) {
      // prevents clicking on the label trigging the event twice
      // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
      if (event.target.type !== 'radio') {
        event.stopPropagation();
      }
    },
    focus: focus,
    focusIndicator: focusIndicator,
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }), /*#__PURE__*/react.createElement(StyledRadioButton, {
    as: BoxWrapper,
    flex: false,
    margin: label ? {
      right: theme.radioButton.gap || 'small'
    } : undefined
  }, /*#__PURE__*/react.createElement(StyledRadioButtonInput, RadioButton_extends({
    "aria-label": a11yTitle
  }, rest, {
    ref: ref,
    type: "radio"
  }, removeUndefined({
    id: id,
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }))), children ? children({
    checked: checked,
    focus: focus && focusIndicator,
    hover: hover
  }) : /*#__PURE__*/react.createElement(StyledRadioButtonBox, {
    focus: focus && focusIndicator,
    as: BoxWrapper,
    align: "center",
    justify: "center",
    width: theme.radioButton.size,
    height: theme.radioButton.size,
    border: {
      size: theme.radioButton.border.width,
      color: borderColor
    },
    round: theme.radioButton.check.radius
  }, checked && (Icon ? /*#__PURE__*/react.createElement(Icon, {
    as: StyledRadioButtonIcon
  }) : /*#__PURE__*/react.createElement(StyledRadioButtonIcon, {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 6
  }))))), normalizedLabel);
});
RadioButton.displayName = 'RadioButton';
var RadioButtonDoc;

if (false) {}

var RadioButtonWrapper = RadioButtonDoc || RadioButton;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RadioButtonGroup/RadioButtonGroup.js
var RadioButtonGroup_excluded = ["children", "defaultValue", "disabled", "focusIndicator", "name", "onChange", "options", "value", "gap"],
    RadioButtonGroup_excluded2 = ["disabled", "id", "label", "value"];

function RadioButtonGroup_extends() {
  RadioButtonGroup_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RadioButtonGroup_extends.apply(this, arguments);
}

function RadioButtonGroup_objectWithoutPropertiesLoose(source, excluded) {
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








var RadioButtonGroup = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      _ref$focusIndicator = _ref.focusIndicator,
      focusIndicator = _ref$focusIndicator === void 0 ? true : _ref$focusIndicator,
      name = _ref.name,
      _onChange = _ref.onChange,
      optionsProp = _ref.options,
      valueProp = _ref.value,
      gap = _ref.gap,
      rest = RadioButtonGroup_objectWithoutPropertiesLoose(_ref, RadioButtonGroup_excluded);

  var formContext = (0,react.useContext)(FormContext);
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme; // normalize options to always use an object

  var options = optionsProp.map(function (o) {
    return typeof o !== 'object' ? {
      disabled: disabled,
      id: rest.id ? rest.id + "-" + o : "" + o,
      // force string
      label: typeof o !== 'string' ? JSON.stringify(o) : o,
      value: o
    } : RadioButtonGroup_extends({
      disabled: disabled
    }, o);
  });

  var _formContext$useFormI = formContext.useFormInput(name, valueProp, defaultValue || ''),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1]; // track if focus is on one of the radio buttons


  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  var optionRefs = (0,react.useRef)([]);
  var valueIndex = react.useMemo(function () {
    var result;
    options.some(function (option, index) {
      if (option.value === value) {
        result = index;
        return true;
      }

      return false;
    });
    return result;
  }, [options, value]);
  (0,react.useEffect)(function () {
    // if tab comes back to RadioButtonGroup when there still is no selection,
    // we want focus to be on the first RadioButton
    if (focus && !valueIndex) {
      optionRefs.current[0].focus();
    }
  }, [focus, valueIndex]);

  var onNext = function onNext() {
    if (valueIndex !== undefined && valueIndex < options.length - 1) {
      var nextIndex = valueIndex + 1; // ensure change event occurs

      optionRefs.current[nextIndex].click();
    }
  };

  var onPrevious = function onPrevious() {
    if (valueIndex > 0) {
      var nextIndex = valueIndex - 1; // ensure change event occurs

      optionRefs.current[nextIndex].click();
    }
  };

  var onFocus = function onFocus() {
    // Delay just a wee bit so Chrome doesn't missing turning the button on.
    // Chrome behaves differently in that focus is given to radio buttons
    // when the user selects one, unlike Safari and Firefox.
    setTimeout(function () {
      setFocus(true);
    }, 1);
  };

  var onBlur = function onBlur() {
    return setFocus(false);
  };

  return /*#__PURE__*/react.createElement(KeyboardWrapper, {
    target: "document",
    onUp: focus ? onPrevious : undefined,
    onDown: focus ? onNext : undefined,
    onLeft: focus ? onPrevious : undefined,
    onRight: focus ? onNext : undefined
  }, /*#__PURE__*/react.createElement(BoxWrapper, RadioButtonGroup_extends({
    ref: ref,
    role: "radiogroup"
  }, theme.radioButtonGroup.container, {
    gap: gap || (theme.radioButtonGroup.container && theme.radioButtonGroup.container.gap ? theme.radioButtonGroup.container.gap : 'small')
  }, rest), options.map(function (_ref2, index) {
    var optionDisabled = _ref2.disabled,
        id = _ref2.id,
        label = _ref2.label,
        optionValue = _ref2.value,
        optionRest = RadioButtonGroup_objectWithoutPropertiesLoose(_ref2, RadioButtonGroup_excluded2); // if focus is within the RadioButtonGroup, determine
    // which radio button should be the active one


    var focusable = optionValue === value || value === undefined && !index || // when nothing has been selected, show focus
    // on the first radiobutton
    value === '' && index === 0;
    return /*#__PURE__*/react.createElement(RadioButtonWrapper, RadioButtonGroup_extends({
      ref: function ref(aRef) {
        optionRefs.current[index] = aRef;
      },
      key: optionValue,
      name: name,
      label: !children ? label : undefined,
      disabled: optionDisabled,
      checked: optionValue === value,
      focus: focus && focusable // when contained in a FormField, focusIndicator = false,
      // so that the FormField has focus style. However, we still
      // need to visually indicate when a RadioButton is active.
      // In RadioButton, if focus = true but focusIndicator = false,
      // we will apply the hover treament.
      ,
      focusIndicator: focusIndicator,
      id: id,
      value: optionValue,
      onFocus: onFocus,
      onBlur: onBlur,
      onChange: function onChange(event) {
        setValue(optionValue);
        if (_onChange) _onChange(event);
      },
      tabIndex: focusable ? '0' : '-1' // necessary for Firefox

    }, optionRest), children ? function (state) {
      return children(optionsProp[index], state);
    } : null);
  })));
});
RadioButtonGroup.displayName = 'RadioButtonGroup';
var RadioButtonGroupDoc;

if (false) {}

var RadioButtonGroup_RadioButtonGroupWrapper = RadioButtonGroupDoc || RadioButtonGroup;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/FormField/FormField.js
var FormField_excluded = ["error", "info", "message", "type"],
    FormField_excluded2 = ["component", "disabled", "invalid", "name", "onChange"],
    FormField_excluded3 = ["children", "className", "component", "contentProps", "disabled", "error", "help", "htmlFor", "info", "label", "margin", "name", "onBlur", "onChange", "onFocus", "pad", "required", "style", "validate"];

function FormField_extends() {
  FormField_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return FormField_extends.apply(this, arguments);
}

function FormField_objectWithoutPropertiesLoose(source, excluded) {
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















var grommetInputNames = ['CheckBox', 'CheckBoxGroup', 'TextInput', 'Select', 'MaskedInput', 'TextArea', 'DateInput', 'FileInput', 'RadioButtonGroup'];
var grommetInputPadNames = ['CheckBox', 'CheckBoxGroup', 'RadioButtonGroup', 'RangeInput'];

var isGrommetInput = function isGrommetInput(comp) {
  return comp && (grommetInputNames.indexOf(comp.displayName) !== -1 || grommetInputPadNames.indexOf(comp.displayName) !== -1);
};

var FormFieldBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "FormField__FormFieldBox",
  componentId: "m9hood-0"
})(["", " ", ""], function (props) {
  return props.focus && focusStyle({
    justBorder: true
  });
}, function (props) {
  return props.theme.formField && props.theme.formField.extend;
});
var FormFieldContentBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "FormField__FormFieldContentBox",
  componentId: "m9hood-1"
})(["", ""], function (props) {
  return props.focus && focusStyle({
    justBorder: true
  });
});
var StyledMessageContainer = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "FormField__StyledMessageContainer",
  componentId: "m9hood-2"
})(["", ""], function (props) {
  return props.messageType && props.theme.formField[props.messageType].container && props.theme.formField[props.messageType].container.extend;
});

var FormField_Message = function Message(_ref) {
  var error = _ref.error,
      info = _ref.info,
      message = _ref.message,
      type = _ref.type,
      rest = FormField_objectWithoutPropertiesLoose(_ref, FormField_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  if (message) {
    var icon;
    var containerProps;

    if (type) {
      icon = theme.formField[type] && theme.formField[type].icon;
      containerProps = theme.formField[type] && theme.formField[type].container;
    }

    var messageContent;
    if (typeof message === 'string') messageContent = /*#__PURE__*/react.createElement(TextWrapper, rest, message);else messageContent = /*#__PURE__*/react.createElement(BoxWrapper, rest, message);
    return icon || containerProps ? /*#__PURE__*/react.createElement(StyledMessageContainer, FormField_extends({
      direction: "row",
      messageType: type
    }, containerProps), icon && /*#__PURE__*/react.createElement(BoxWrapper, {
      flex: false
    }, icon), messageContent) : messageContent;
  }

  return null;
};

var Input = function Input(_ref2) {
  var component = _ref2.component,
      disabled = _ref2.disabled,
      invalid = _ref2.invalid,
      name = _ref2.name,
      _onChange = _ref2.onChange,
      rest = FormField_objectWithoutPropertiesLoose(_ref2, FormField_excluded2);

  var formContext = (0,react.useContext)(FormContext);

  var _formContext$useFormI = formContext.useFormInput(name, rest.value),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1];

  var InputComponent = component || TextInputWrapper; // Grommet input components already check for FormContext
  // and, using their `name`, end up calling the useFormInput.setValue()
  // already. For custom components, we expect they will call
  // this onChange() and we'll call setValue() here, primarily
  // for backwards compatibility.

  var extraProps = isGrommetInput(InputComponent) ? {
    focusIndicator: false,
    onChange: _onChange,
    plain: true
  } : {
    value: value,
    onChange: function onChange(event) {
      setValue(event.value !== undefined ? event.value : event.target.value);
      if (_onChange) _onChange(event);
    }
  };
  return /*#__PURE__*/react.createElement(InputComponent, FormField_extends({
    name: name,
    disabled: disabled,
    "aria-invalid": invalid || undefined
  }, rest, extraProps));
};

var debounce = function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

var FormField = /*#__PURE__*/(0,react.forwardRef)(function (_ref3, ref) {
  var children = _ref3.children,
      className = _ref3.className,
      component = _ref3.component,
      contentProps = _ref3.contentProps,
      disabled = _ref3.disabled,
      errorProp = _ref3.error,
      help = _ref3.help,
      htmlFor = _ref3.htmlFor,
      infoProp = _ref3.info,
      label = _ref3.label,
      margin = _ref3.margin,
      name = _ref3.name,
      _onBlur = _ref3.onBlur,
      onChange = _ref3.onChange,
      _onFocus = _ref3.onFocus,
      pad = _ref3.pad,
      required = _ref3.required,
      style = _ref3.style,
      validate = _ref3.validate,
      rest = FormField_objectWithoutPropertiesLoose(_ref3, FormField_excluded3);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var formContext = (0,react.useContext)(FormContext);

  var _formContext$useFormF = formContext.useFormField({
    error: errorProp,
    info: infoProp,
    name: name,
    required: required,
    validate: validate
  }),
      error = _formContext$useFormF.error,
      info = _formContext$useFormF.info,
      inForm = _formContext$useFormF.inForm,
      contextOnBlur = _formContext$useFormF.onBlur,
      contextOnChange = _formContext$useFormF.onChange;

  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  var formFieldRef = useForwardedRef(ref);
  var formFieldTheme = theme.formField;
  var themeBorder = formFieldTheme.border; // This is here for backwards compatibility. In case the child is a grommet
  // input component, set plain and focusIndicator props, if they aren't
  // already set.

  var wantContentPad = component && (component === CheckBoxWrapper || component === CheckBoxGroup || component === RadioButtonGroup_RadioButtonGroupWrapper);
  var contents = themeBorder && children && react.Children.map(children, function (child) {
    if (child && child.type && grommetInputPadNames.indexOf(child.type.displayName) !== -1) {
      wantContentPad = true;
    }

    if (child && child.type && grommetInputNames.indexOf(child.type.displayName) !== -1 && child.props.plain === undefined && child.props.focusIndicator === undefined) {
      return /*#__PURE__*/(0,react.cloneElement)(child, {
        plain: true,
        focusIndicator: false
      });
    }

    return child;
  }) || children; // put rest on container, unless we use internal Input

  var containerRest = rest;

  if (inForm) {
    if (!contents) containerRest = {};
    contents = contents || /*#__PURE__*/react.createElement(Input, FormField_extends({
      component: component,
      disabled: disabled,
      invalid: !!error,
      name: name,
      label: component === CheckBoxWrapper ? label : undefined
    }, rest));
  }

  var themeContentProps = FormField_extends({}, formFieldTheme.content);

  if (!pad && !wantContentPad) {
    themeContentProps.pad = undefined;
  }

  if (themeBorder && themeBorder.position === 'inner') {
    if (error && formFieldTheme.error) {
      themeContentProps.background = formFieldTheme.error.background;
    } else if (disabled && formFieldTheme.disabled) {
      themeContentProps.background = formFieldTheme.disabled.background;
    }
  } // fileinput handle
  // use fileinput plain use formfield to drive the border


  var isFileInputComponent;
  if (children && react.Children.forEach(children, function (child) {
    if (child && child.type && 'FileInput'.indexOf(child.type.displayName) !== -1) isFileInputComponent = true;
  })) ;

  if (!themeBorder) {
    contents = /*#__PURE__*/react.createElement(BoxWrapper, FormField_extends({}, themeContentProps, contentProps), contents);
  }

  var borderColor;

  if (disabled && formFieldTheme.disabled.border && formFieldTheme.disabled.border.color) {
    borderColor = formFieldTheme.disabled.border.color;
  } else if ( // backward compatibility check
  error && themeBorder && themeBorder.error.color || error && formFieldTheme.error && formFieldTheme.error.border) {
    if (themeBorder.error.color && formFieldTheme.error.border === undefined) {
      borderColor = themeBorder.error.color || 'status-critical';
    } else if (formFieldTheme.error.border && formFieldTheme.error.border.color) {
      borderColor = formFieldTheme.error.border.color || 'status-critical';
    }
  } else if (focus && formFieldTheme.focus && formFieldTheme.focus.border && formFieldTheme.focus.border.color) {
    borderColor = formFieldTheme.focus.border.color;
  } else {
    borderColor = themeBorder && themeBorder.color || 'border';
  }

  var labelStyle = FormField_extends({}, formFieldTheme.label);

  if (disabled) {
    labelStyle.color = formFieldTheme.disabled && formFieldTheme.disabled.label ? formFieldTheme.disabled.label.color : labelStyle.color;
  }

  var abut;
  var abutMargin;
  var outerStyle = style; // If fileinput is wrapped in a formfield we want to use
  // the border style from the fileInput.theme. We also do not
  // want the foocus around the formfield since the the focus
  // is on the anchor/button inside fileinput

  if (themeBorder) {
    var innerProps = themeBorder.position === 'inner' ? {
      border: FormField_extends({}, themeBorder, {
        size: isFileInputComponent ? theme.fileInput.border.size : undefined,
        style: isFileInputComponent ? theme.fileInput.border.style : undefined,
        side: isFileInputComponent ? theme.fileInput.border.side : themeBorder.side || 'bottom',
        color: borderColor
      }),
      round: formFieldTheme.round,
      focus: isFileInputComponent ? undefined : focus
    } : {};
    contents = /*#__PURE__*/react.createElement(FormFieldContentBox, FormField_extends({}, themeContentProps, innerProps, contentProps), contents);
    var mergedMargin = margin || formFieldTheme.margin;
    abut = themeBorder.position === 'outer' && (themeBorder.side === 'all' || themeBorder.side === 'horizontal' || !themeBorder.side) && !(mergedMargin && (typeof mergedMargin === 'string' && mergedMargin !== 'none' || mergedMargin.bottom && mergedMargin.bottom !== 'none' || mergedMargin.horizontal && mergedMargin.horizontal !== 'none'));

    if (abut) {
      // marginBottom is set to overlap adjacent fields
      abutMargin = {
        bottom: '-1px'
      };

      if (margin) {
        abutMargin = margin;
      } else if (themeBorder.size) {
        // if the user defines a margin,
        // then the default margin below will be overridden
        abutMargin = {
          bottom: "-" + parseMetricToNum(theme.global.borderSize[themeBorder.size] || themeBorder.size) + "px"
        };
      }

      outerStyle = FormField_extends({
        position: focus ? 'relative' : undefined,
        zIndex: focus ? 10 : undefined
      }, style);
    }
  }

  var outerBackground;

  if (themeBorder && themeBorder.position === 'outer') {
    if (error && formFieldTheme.error && formFieldTheme.error.background) {
      outerBackground = formFieldTheme.error.background;
    } else if (focus && formFieldTheme.focus && formFieldTheme.focus.background && formFieldTheme.focus.background.color) {
      outerBackground = formFieldTheme.focus.background.color;
    } else if (disabled && formFieldTheme.disabled && formFieldTheme.disabled.background) {
      outerBackground = formFieldTheme.disabled.background;
    }
  }

  var outerProps = themeBorder && themeBorder.position === 'outer' ? {
    border: FormField_extends({}, themeBorder, {
      color: borderColor
    }),
    round: formFieldTheme.round,
    focus: focus
  } : {};
  var requiredIndicator = theme.formField.label.requiredIndicator;
  if (requiredIndicator === true) // a11yTitle necessary so screenreader announces as "required"
    // as opposed to "star"
    // accessibility resource: https://www.deque.com/blog/anatomy-of-accessible-forms-required-form-fields/
    requiredIndicator = /*#__PURE__*/react.createElement(TextWrapper, {
      a11yTitle: "required"
    }, "*");
  return /*#__PURE__*/react.createElement(FormFieldBox, FormField_extends({
    ref: formFieldRef,
    className: className,
    background: outerBackground,
    margin: abut ? abutMargin : margin || FormField_extends({}, formFieldTheme.margin)
  }, outerProps, {
    style: outerStyle,
    onFocus: function onFocus(event) {
      setFocus(containsFocus(formFieldRef.current));
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (contextOnBlur) contextOnBlur(event);
      if (_onBlur) _onBlur(event);
    },
    onChange: contextOnChange || onChange ? function (event) {
      event.persist();
      if (onChange) onChange(event);

      if (contextOnChange) {
        var debouncedFn = debounce(function () {
          contextOnChange(event); // A half second (500ms) debounce can be a helpful starting
          // point. You want to give the user time to fill out a
          // field, but capture their attention before they move on
          // past it. 2 second (2000ms) might be too long depending
          // on how fast people type, and 200ms would be an eye blink
        }, 500);
        debouncedFn();
      }
    } : undefined
  }, containerRest), label && component !== CheckBoxWrapper || help ? /*#__PURE__*/react.createElement(react.Fragment, null, label && component !== CheckBoxWrapper && /*#__PURE__*/react.createElement(TextWrapper, FormField_extends({
    as: "label",
    htmlFor: htmlFor
  }, labelStyle), label, required && requiredIndicator ? requiredIndicator : undefined), /*#__PURE__*/react.createElement(FormField_Message, FormField_extends({
    message: help
  }, formFieldTheme.help))) : undefined, contents, /*#__PURE__*/react.createElement(FormField_Message, FormField_extends({
    type: "error",
    message: error
  }, formFieldTheme.error)), /*#__PURE__*/react.createElement(FormField_Message, FormField_extends({
    type: "info",
    message: info
  }, formFieldTheme.info)));
});
FormField.displayName = 'FormField';
var FormFieldDoc;

if (false) {}

var FormFieldWrapper = FormFieldDoc || FormField;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/FormField/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grid/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js

var ResponsiveContext = /*#__PURE__*/react.createContext(undefined);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grommet/StyledGrommet.js




var fullStyle = function fullStyle(full) {
  if (full === 'min') return (0,styled_components_browser_esm.css)(["min-height:100vh;"]);
  return (0,styled_components_browser_esm.css)(["width:100vw;height:100vh;overflow:auto;"]);
};

var StyledGrommet = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledGrommet",
  componentId: "sc-19lkkz7-0"
})(["", " ", " ", " ", " ", ""], function (props) {
  return !props.plain && baseStyle;
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
Object.setPrototypeOf(StyledGrommet.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/OptionsContext.js

var OptionsContext = /*#__PURE__*/react.createContext(undefined);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grommet/Grommet.js
var Grommet_excluded = ["children", "full", "containerTarget", "theme", "options", "messages"];

var _templateObject;

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

function Grommet_objectWithoutPropertiesLoose(source, excluded) {
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

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}











var FullGlobalStyle = (0,styled_components_browser_esm.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  body { margin: 0; }\n"])));

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
      return getDeviceBreakpoint('tablet', theme);
    }

    if (/Mobile|iPhone|Android/.test(userAgent)) {
      return getDeviceBreakpoint('phone', theme);
    }

    return getDeviceBreakpoint('computer', theme);
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
      rest = Grommet_objectWithoutPropertiesLoose(props, Grommet_excluded);

  var background = props.background,
      dir = props.dir,
      themeMode = props.themeMode,
      userAgent = props.userAgent;

  var _useState = (0,react.useState)(),
      stateResponsive = _useState[0],
      setResponsive = _useState[1];

  var theme = (0,react.useMemo)(function () {
    var nextTheme = deepMerge(base_base, themeProp || {}); // if user provides specific menu alignment, we don't want
    // the defaults to be included at all (can cause issues with controlMirror)
    // override merged value with themeProp value

    if (themeProp && themeProp.menu && themeProp.menu.drop && themeProp.menu.drop.align) {
      delete nextTheme.menu.drop.align;
      nextTheme.menu.drop.align = themeProp.menu.drop.align;
    }

    var themeBackground = nextTheme.global.colors.background;
    nextTheme.dark = (themeMode || nextTheme.defaultMode) === 'dark';
    var color = normalizeColor(background || themeBackground, nextTheme);
    nextTheme.dark = backgroundIsDark(color, nextTheme);
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
    var nextMessages = deepMerge(default_namespaceObject, (messagesProp == null ? void 0 : messagesProp.messages) || {});
    return {
      messages: nextMessages,
      format: function format(opts) {
        var message = (messagesProp == null ? void 0 : messagesProp.format) && messagesProp.format(opts);
        return typeof message !== 'undefined' ? message : _format(opts, nextMessages);
      }
    };
  }, [messagesProp]);
  (0,react.useEffect)(function () {
    var onResize = function onResize() {
      setResponsive(getBreakpoint(document.body.clientWidth, theme));
    };

    window.addEventListener('resize', onResize);
    onResize();
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, [theme]);
  var responsive = stateResponsive || deviceResponsive(userAgent, theme) || theme.global.deviceBreakpoints.tablet;
  var grommetRef = useForwardedRef(ref);
  return /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
    value: theme
  }, /*#__PURE__*/react.createElement(ResponsiveContext.Provider, {
    value: responsive
  }, /*#__PURE__*/react.createElement(RootsContext.Provider, {
    value: [grommetRef.current]
  }, /*#__PURE__*/react.createElement(ContainerTargetContext.Provider, {
    value: containerTarget
  }, /*#__PURE__*/react.createElement(OptionsContext.Provider, {
    value: options
  }, /*#__PURE__*/react.createElement(MessageContext.Provider, {
    value: messages
  }, /*#__PURE__*/react.createElement(StyledGrommet, Grommet_extends({
    full: full
  }, rest, {
    ref: grommetRef
  }), children), full && /*#__PURE__*/react.createElement(FullGlobalStyle, null)))))));
});
Grommet.displayName = 'Grommet';
var GrommetDoc;

if (false) {}

var GrommetWrapper = GrommetDoc || Grommet;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Grommet/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Header/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Heading/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Image/StyledImage.js



var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var fitStyle = (0,styled_components_browser_esm.css)(["flex:1 1;overflow:hidden;object-fit:", ";"], function (props) {
  return FIT_MAP[props.fit];
});
var StyledImage = styled_components_browser_esm.default.img.withConfig({
  displayName: "StyledImage",
  componentId: "ey4zx9-0"
})(["", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.fillProp && fillStyle(props.fillProp);
}, function (props) {
  return props.theme.image && props.theme.image.extend;
}, function (props) {
  return props.opacityProp && "opacity: " + (props.opacityProp === true ? props.theme.global.opacity.medium : props.theme.global.opacity[props.opacityProp] || props.opacityProp) + ";\n  ";
});
StyledImage.defaultProps = {};
Object.setPrototypeOf(StyledImage.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Image/Image.js
var Image_excluded = ["a11yTitle", "fallback", "onError", "opacity", "fill", "src"];

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

function Image_objectWithoutPropertiesLoose(source, excluded) {
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



var Image = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      fallback = _ref.fallback,
      onError = _ref.onError,
      opacity = _ref.opacity,
      fill = _ref.fill,
      src = _ref.src,
      rest = Image_objectWithoutPropertiesLoose(_ref, Image_excluded);

  var _useState = (0,react.useState)(false),
      imageMissing = _useState[0],
      setImageMissing = _useState[1];

  var handleError = function handleError(event) {
    if (onError) {
      onError(event);
    }

    setImageMissing(true);
  };

  var extraProps = {
    onError: (onError || fallback) && handleError
  };
  return /*#__PURE__*/react.createElement(StyledImage, Image_extends({
    "aria-label": a11yTitle
  }, rest, extraProps, {
    ref: ref,
    opacityProp: opacity,
    fillProp: fill,
    src: !imageMissing ? src : fallback
  }));
});
Image.displayName = 'Image';
var ImageDoc;

if (false) {}

var ImageWrapper = ImageDoc || Image;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Image/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/InfiniteScroll/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Keyboard/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Layer/StyledLayer.js



var hiddenPositionStyle = (0,styled_components_browser_esm.css)(["left:-100%;right:100%;z-index:-1;position:fixed;"]);
var desktopLayerStyle = "\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n";
var responsiveLayerStyle = "\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n";
var StyledLayer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledLayer",
  componentId: "rmtehz-0"
})(["", " background:transparent;position:relative;z-index:", ";pointer-events:none;outline:none;", " ", ";"], baseStyle, function (props) {
  return props.theme.layer.zIndex;
}, function (props) {
  if (props.position === 'hidden') {
    return hiddenPositionStyle;
  }

  var styles = [];
  styles.push(desktopLayerStyle);

  if (props.responsive && props.theme.layer.responsiveBreakpoint && !props.layerTarget) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];
    styles.push(breakpointStyle(breakpoint, responsiveLayerStyle));
  }

  return styles;
}, function (props) {
  return props.theme.layer && props.theme.layer.extend;
});
StyledLayer.defaultProps = {};
Object.setPrototypeOf(StyledLayer.defaultProps, default_props_defaultProps);
var StyledOverlay = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledLayer__StyledOverlay",
  componentId: "rmtehz-1"
})(["position:absolute;", " top:0px;left:0px;right:0px;bottom:0px;", " pointer-events:all;will-change:transform;"], function (props) {
  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];
    return breakpointStyle(breakpoint, 'position: relative;');
  }

  return '';
}, function (props) {
  return !props.plain && props.theme.layer.overlay.background && backgroundStyle(props.theme.layer.overlay.background, props.theme);
});

var getMargin = function getMargin(margin, theme, position) {
  var axis = position.indexOf('top') !== -1 || position.indexOf('bottom') !== -1 ? 'vertical' : 'horizontal';
  var marginValue = margin[position] || margin[axis] || margin;
  var marginApplied = theme.global.edgeSize[marginValue] || marginValue;
  var marginInTheme = !!theme.global.edgeSize[marginValue];
  return !marginInTheme && typeof marginValue !== 'string' ? 0 : parseMetricToNum(marginApplied);
};

var getBounds = function getBounds(bounds, margin, theme, position) {
  if (position === void 0) {
    position = undefined;
  }

  if (position) {
    return bounds[position] + getMargin(margin, theme, position);
  }

  return {
    bottom: bounds.bottom + getMargin(margin, theme, 'bottom'),
    // 'bottom-left': getMargin(margin, theme, 'bottom-left'),
    // 'bottom-right': getMargin(margin, theme, 'bottom-right'),
    end: bounds.right + getMargin(margin, theme, 'end'),
    left: bounds.left + getMargin(margin, theme, 'left'),
    right: bounds.right + getMargin(margin, theme, 'right'),
    start: bounds.left + getMargin(margin, theme, 'start'),
    top: bounds.top + getMargin(margin, theme, 'top') // 'top-right': getMargin(margin, theme, 'top-right'),
    // 'top-left': getMargin(margin, theme, 'top-left'),

  };
};

var KEYFRAMES = {
  center: {
    vertical: (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(-50%) scale(0.8);}100%{transform:translateX(-50%) scale(1);}"]),
    horizontal: (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(-50%) scale(0.8);}100%{transform:translateY(-50) scale(1);}"]),
    "true": (0,styled_components_browser_esm.keyframes)(["0%{transform:scale(0.8);}100%{transform:scale(1);}"]),
    "false": (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-50%,-50%) scale(0.8);}100%{transform:translate(-50%,-50%) scale(1);}"])
  },
  top: {
    vertical: (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}"]),
    horizontal: (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),
    "true": (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"]),
    "false": (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}"])
  },
  bottom: {
    vertical: (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}"]),
    horizontal: (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),
    "true": (0,styled_components_browser_esm.keyframes)(["0%{transform:translateY(100%);}100%{transform:translateY(0);}"]),
    "false": (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}"])
  },
  left: {
    vertical: (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),
    horizontal: (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"]),
    "true": (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),
    "false": (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"])
  },
  right: {
    vertical: (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),
    horizontal: (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"]),
    "true": (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),
    "false": (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"])
  },
  start: {
    vertical: (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),
    horizontal: (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"]),
    "true": (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(-100%);}100%{transform:translateX(0);}"]),
    "false": (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}"])
  },
  end: {
    vertical: (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),
    horizontal: (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"]),
    "true": (0,styled_components_browser_esm.keyframes)(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]),
    "false": (0,styled_components_browser_esm.keyframes)(["0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}"])
  }
};
var animationDuration = 200;

var getAnimationStyle = function getAnimationStyle(props, position, full) {
  var animation = props.animation !== undefined ? props.animation : props.animate;
  if (animation === undefined) animation = 'slide';
  var keys;

  if (animation === 'slide' || animation === true) {
    keys = KEYFRAMES[position][full];
  } else if (animation === 'fadeIn') {
    keys = (0,styled_components_browser_esm.keyframes)(["0%{opacity:0}100%{opacity:1}"]);
  }

  return keys ? (0,styled_components_browser_esm.css)(["animation:", " ", "s ease-in-out forwards;"], keys, animationDuration / 1000.0) : '';
}; // POSITIONS combines 'position', 'full', and 'margin' properties, since
// they are all interdependent.
// Basically, non-full axes combine 50% position with -50% translation.
// full axes pin to the window edges offset by any margin.
// The keyframe animations are included as they are done via translations
// as well so they must take into account the non-animated positioning.


var POSITIONS = {
  center: {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:50%;transform:translateX(-50%);", ""], bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'center', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;top:50%;transform:translateY(-50%);", ""], bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'center', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;", ""], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'center', 'true');
      });
    },
    "false": function _false() {
      return (0,styled_components_browser_esm.css)(["top:50%;left:50%;transform:translate(-50%,-50%);", ""], function (props) {
        return getAnimationStyle(props, 'center', 'false');
      });
    }
  },
  top: {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:50%;transform:translate(-50%,0%);", ""], bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'top', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;top:", "px;transform:translateY(0);", ""], bounds.left, bounds.right, bounds.top, function (props) {
        return getAnimationStyle(props, 'top', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;transform:translateY(0);", ""], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;left:50%;transform:translate(-50%,0);", ""], bounds.top, function (props) {
        return getAnimationStyle(props, 'top', 'false');
      });
    }
  },
  bottom: {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:50%;transform:translate(-50%,0);", ""], bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;bottom:", "px;transform:translateY(0);", ""], bounds.left, bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;transform:translateY(0);", ""], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["bottom:", "px;left:50%;transform:translate(-50%,0);", ""], bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'false');
      });
    }
  },
  left: {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'left', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;top:50%;transform:translate(0,-50%);", ""], bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'left', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'left', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;top:50%;transform:translate(0,-50%);", ""], bounds.left, function (props) {
        return getAnimationStyle(props, 'left', 'false');
      });
    }
  },
  right: {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;right:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;top:50%;transform:translate(0,-50%);", ""], bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["right:", "px;top:50%;transform:translate(0,-50%);", ""], bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'false');
      });
    }
  },
  start: {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;inset-inline-start:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.start, function (props) {
        return getAnimationStyle(props, 'start', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["inset-inline-start:", "px;inset-inline-end:", "px;top:50%;transform:translate(0,-50%);", ""], bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'start', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;inset-inline-start:", "px;inset-inline-end:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'start', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["inset-inline-start:", "px;top:50%;transform:translate(0,-50%);", ""], bounds.start, function (props) {
        return getAnimationStyle(props, 'start', 'false');
      });
    }
  },
  end: {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;inset-inline-end:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["inset-inline-start:", "px;inset-inline-end:", "px;top:50%;transform:translate(0,-50%);", ""], bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;inset-inline-start:", "px;inset-inline-end:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["inset-inline-end:", "px;top:50%;transform:translate(0,-50%);", ""], bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'false');
      });
    }
  },
  'top-right': {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;right:", "px;transform:translateX(0);", ";"], bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;top:0;transform:translateX(0);", ";"], bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;transform:translateX(0);", ";"], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;right:", "px;transform:translateY(0);", ";"], bounds.top, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    }
  },
  'top-left': {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;top:0;transform:translateX(0);", ""], bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;left:", "px;transform:translateY(0);", ""], bounds.top, bounds.left, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    }
  },
  'bottom-right': {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;right:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;bottom:", "px;transform:translateY(0);", ""], bounds.left, bounds.right, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["bottom:", "px;right:", "px;transform:translateY(0);", ""], bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    }
  },
  'bottom-left': {
    vertical: function vertical(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return (0,styled_components_browser_esm.css)(["left:", "px;right:", "px;bottom:", "px;transform:translateY(0);", ""], bounds.left, bounds.right, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "true": function _true(bounds) {
      return (0,styled_components_browser_esm.css)(["top:", "px;bottom:", "px;left:", "px;right:", "px;transform:translateX(0);", ""], bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return (0,styled_components_browser_esm.css)(["bottom:", "px;left:", "px;transform:translateY(0);", ""], bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    }
  }
};

var StyledLayer_roundStyle = function roundStyle(data, theme, position, margin) {
  var styles = [];
  var size = data === true ? 'medium' : data;
  var round = theme.global.edgeSize[size] || size; // if user provides CSS string such as '50px 12px', apply that always

  var customCSS = round.split(' ').length > 1;

  if (margin === 'none' && !customCSS && theme.layer.border.intelligentRounding === true) {
    if (position === 'bottom') {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:", " ", " 0 0;"], round, round));
    } else if (position === 'bottom-left') {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:0 ", " 0 0;"], round));
    } else if (position === 'bottom-right') {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:", " 0 0 0;"], round));
    } else if (position === 'end') {
      // only works on Firefox, what should be fallback?
      styles.push((0,styled_components_browser_esm.css)(["border-start-start-radius:", ";border-end-start-radius:", ";"], round, round));
    } else if (position === 'left') {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:0 ", " ", " 0;"], round, round));
    } else if (position === 'right') {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:", " 0 0 ", ";"], round, round));
    } else if (position === 'start') {
      // only works on Firefox, what should be fallback?
      styles.push((0,styled_components_browser_esm.css)(["border-end-end-radius:", ";border-start-end-radius:", ";"], round, round));
    } else if (position === 'top') {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:0 0 ", " ", ";"], round, round));
    } else if (position === 'top-left') {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:0 0 ", " 0;"], round));
    } else if (position === 'top-right') {
      styles.push((0,styled_components_browser_esm.css)(["border-radius:0 0 0 ", ";"], round));
    } else {
      // position is center, apply uniform border-radius
      styles.push((0,styled_components_browser_esm.css)(["border-radius:", ";"], round));
    }
  } else {
    // if there's a margin apply uniform border-radius, or if user has supplied
    // a complex CSS string such as "50px 20px" apply this
    styles.push((0,styled_components_browser_esm.css)(["border-radius:", ";"], round));
  }

  return styles;
};

var bounds = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var desktopContainerStyle = (0,styled_components_browser_esm.css)(["", " max-height:", ";max-width:", ";", ";", ";"], function (props) {
  if (!props.modal && props.position === 'hidden') {
    return hiddenPositionStyle;
  }

  return (0,styled_components_browser_esm.css)(["position:", ";"], props.modal || props.layerTarget ? 'absolute' : 'fixed');
}, function (props) {
  return "calc(100% - " + getBounds(bounds, props.margin, props.theme, 'top') + "px - " + getBounds(bounds, props.margin, props.theme, 'bottom') + "px)";
}, function (props) {
  return "calc(100% - " + getBounds(bounds, props.margin, props.theme, 'left') + "px - " + getBounds(bounds, props.margin, props.theme, 'right') + "px)";
}, function (props) {
  return props.plain || props.full && props.margin === 'none' ? "border-radius: 0;" : StyledLayer_roundStyle(props.theme.layer.border.radius, props.theme, props.position, props.margin);
}, function (props) {
  return props.position !== 'hidden' && POSITIONS[props.position][props.full](getBounds(bounds, props.margin, props.theme), bounds) || '';
});

var responsiveContainerStyle = function responsiveContainerStyle(props) {
  return (0,styled_components_browser_esm.css)(["position:relative;max-height:none;max-width:none;border-radius:0;height:", ";width:", ";"], !props.layerTarget ? '100vh' : '100%', !props.layerTarget ? '100vw' : '100%');
};

var StyledLayer_elevationStyle = (0,styled_components_browser_esm.css)(["box-shadow:", ";"], function (props) {
  return props.theme.global.elevation[props.theme.dark ? 'dark' : 'light'][props.theme.layer.container.elevation];
});
var StyledLayer_StyledContainer = styled_components_browser_esm.default.div.withConfig({
  // don't let elevation leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['elevation'].includes(prop) && defaultValidatorFn(prop);
  }
}).withConfig({
  displayName: "StyledLayer__StyledContainer",
  componentId: "rmtehz-2"
})(["", " display:flex;flex-direction:column;min-height:", ";", " outline:none;pointer-events:all;z-index:", ";", " ", " ", ";", ";"], function (props) {
  return !props.modal ? baseStyle : '';
}, function (props) {
  return props.theme.global.size.xxsmall;
}, function (props) {
  return !props.plain && (props.background || props.theme.layer.background) && backgroundStyle(props.background || props.theme.layer.background, props.theme);
}, function (props) {
  return props.theme.layer.container.zIndex;
}, function (props) {
  return !props.plain && props.theme.layer.container.elevation && StyledLayer_elevationStyle;
}, desktopContainerStyle, function (props) {
  if (props.responsive && props.theme.layer.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[props.theme.layer.responsiveBreakpoint];

    if (breakpoint) {
      return breakpointStyle(breakpoint, responsiveContainerStyle);
    }
  }

  return '';
}, function (props) {
  return props.theme.layer.container && props.theme.layer.container.extend;
});
StyledLayer_StyledContainer.defaultProps = {};
Object.setPrototypeOf(StyledLayer_StyledContainer.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Layer/LayerContainer.js
var LayerContainer_excluded = ["background", "children", "full", "id", "margin", "modal", "onClickOutside", "onEsc", "plain", "position", "responsive", "target"];

function LayerContainer_extends() {
  LayerContainer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return LayerContainer_extends.apply(this, arguments);
}

function LayerContainer_objectWithoutPropertiesLoose(source, excluded) {
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










var HiddenAnchor = styled_components_browser_esm.default.a.withConfig({
  displayName: "LayerContainer__HiddenAnchor",
  componentId: "sc-1srj14c-0"
})(["width:0;height:0;overflow:hidden;position:absolute;"]);
var LayerContainer_defaultPortalContext = [];
var LayerContainer = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var background = _ref.background,
      children = _ref.children,
      _ref$full = _ref.full,
      full = _ref$full === void 0 ? false : _ref$full,
      id = _ref.id,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 'none' : _ref$margin,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? true : _ref$modal,
      onClickOutside = _ref.onClickOutside,
      onEsc = _ref.onEsc,
      plain = _ref.plain,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'center' : _ref$position,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      layerTarget = _ref.target,
      rest = LayerContainer_objectWithoutPropertiesLoose(_ref, LayerContainer_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var size = (0,react.useContext)(ResponsiveContext); // layerOptions was created to preserve backwards compatibility but
  // should not be supported in v3

  var _useContext = (0,react.useContext)(OptionsContext),
      layerOptions = _useContext.layer;

  var anchorRef = (0,react.useRef)();
  var containerRef = (0,react.useRef)();
  var layerRef = (0,react.useRef)();
  var portalContext = (0,react.useContext)(PortalContext) || LayerContainer_defaultPortalContext;
  var portalId = (0,react.useMemo)(function () {
    return portalContext.length;
  }, [portalContext]);
  var nextPortalContext = (0,react.useMemo)(function () {
    return [].concat(portalContext, [portalId]);
  }, [portalContext, portalId]);
  (0,react.useEffect)(function () {
    if (position !== 'hidden') {
      var node = layerRef.current || containerRef.current || ref.current;
      if (node && node.scrollIntoView) node.scrollIntoView(); // Once layer is open we make sure it has focus so that you
      // can start tabbing inside the layer. If the caller put focus
      // on an element already, we honor that. Otherwise, we put
      // the focus in the hidden anchor.

      var element = document.activeElement;

      while (element) {
        if (element === containerRef.current) {
          // already have focus inside the container
          break;
        }

        element = element.parentElement;
      }

      if (modal && !element && anchorRef.current) {
        anchorRef.current.focus();
      }
    }
  }, [modal, position, ref]);
  (0,react.useEffect)(function () {
    if (position !== 'hidden') {
      var node = layerRef.current || containerRef.current || ref.current;
      if (node && node.scrollIntoView) node.scrollIntoView();
    }
  }, [position, ref]);
  (0,react.useEffect)(function () {
    var onClickDocument = function onClickDocument(event) {
      // determine which portal id the target is in, if any
      var clickedPortalId = null;
      var node = event.target;

      while (clickedPortalId === null && node !== document && node !== null) {
        // check if user click occurred within the layer
        var attr = node.getAttribute('data-g-portal-id');
        if (attr !== null && attr !== '') clickedPortalId = parseInt(attr, 10); // loop upward through parents to see if clicked element is a child
        // of the Layer. if so, click was inside Layer
        else node = node.parentNode;
      }

      if ((clickedPortalId === null || portalContext.indexOf(clickedPortalId) !== -1) && node !== null) {
        // if the click occurred outside of the Layer portal, call
        // the user's onClickOutside function
        onClickOutside(event);
      }
    }; // if user provides an onClickOutside function, listen for mousedown event


    if (onClickOutside) {
      document.addEventListener('mousedown', onClickDocument);
    }

    if (layerTarget) {
      var updateBounds = function updateBounds() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var target = findVisibleParent(layerTarget); // affects StyledLayer

        var layer = layerRef.current;

        if (layer && target) {
          // clear prior styling
          layer.style.left = '';
          layer.style.top = '';
          layer.style.bottom = '';
          layer.style.width = ''; // get bounds

          var targetRect = target.getBoundingClientRect();
          var layerRect = layer.getBoundingClientRect(); // ensure that layer moves with the target

          layer.style.left = targetRect.left + "px";
          layer.style.right = windowWidth - targetRect.right + "px";
          layer.style.top = targetRect.top + "px";
          layer.style.bottom = windowHeight - targetRect.bottom + "px";
          layer.style.maxHeight = targetRect.height;
          layer.style.maxWidth = Math.min(layerRect.width, windowWidth);
        }
      };

      updateBounds();
      window.addEventListener('resize', updateBounds);
      window.addEventListener('scroll', updateBounds, true);
      return function () {
        window.removeEventListener('resize', updateBounds);
        window.removeEventListener('scroll', updateBounds, true);

        if (onClickOutside) {
          document.removeEventListener('mousedown', onClickDocument);
        }
      };
    }

    return function () {
      if (onClickOutside) {
        document.removeEventListener('mousedown', onClickDocument);
      }
    };
  }, [layerTarget, onClickOutside, portalContext, portalId]);
  var content = /*#__PURE__*/react.createElement(StyledLayer_StyledContainer, LayerContainer_extends({
    ref: ref || containerRef,
    background: background,
    elevation: theme.layer.container.elevation // layerOptions was created to preserve backwards compatibility but
    // should not be supported in v3. In v3, this should always be
    // ${id}__container
    ,
    id: layerOptions && layerOptions.singleId ? id + "__container" : id,
    full: full,
    margin: margin,
    modal: modal
  }, rest, {
    position: position,
    plain: plain,
    responsive: responsive,
    layerTarget: layerTarget,
    dir: theme.dir // portalId is used to determine if click occurred inside
    // or outside of the layer
    ,
    "data-g-portal-id": portalId
  }), /*#__PURE__*/react.createElement(HiddenAnchor, {
    ref: anchorRef,
    tabIndex: "-1",
    "aria-hidden": "true"
  }), children);
  content = /*#__PURE__*/react.createElement(StyledLayer, {
    ref: layerRef,
    id: id,
    plain: plain,
    position: position,
    responsive: responsive,
    layerTarget: layerTarget,
    tabIndex: "-1",
    dir: theme.dir
  }, modal && /*#__PURE__*/react.createElement(StyledOverlay, {
    plain: plain,
    responsive: responsive,
    onMouseDown: onClickOutside
  }), content);

  if (onEsc) {
    content = /*#__PURE__*/react.createElement(KeyboardWrapper, {
      onEsc: onEsc ? function (event) {
        // prevent further capturing or bubbling of event to other
        // child or parent elements
        event.stopPropagation();
        onEsc(event);
      } : undefined,
      target: modal === false ? 'document' : undefined
    }, content);
  }

  if (theme.layer.background) {
    var dark = backgroundIsDark(theme.layer.background, theme);

    if (dark !== undefined && dark !== theme.dark) {
      content = /*#__PURE__*/react.createElement(styled_components_browser_esm.ThemeContext.Provider, {
        value: LayerContainer_extends({}, theme, {
          dark: dark
        })
      }, content);
    }
  }

  content = /*#__PURE__*/react.createElement(PortalContext.Provider, {
    value: nextPortalContext
  }, content);
  var hitResponsiveBreakpoint = responsive && size === theme.layer.responsiveBreakpoint; // if layer is responsive and we've hit the breakpoint,
  // the layer will be filling the viewport, so we want to
  // restrict the scroll to the layer and not allow the
  // body to scroll

  if (modal || hitResponsiveBreakpoint) {
    content = /*#__PURE__*/react.createElement(FocusedContainer, {
      hidden: position === 'hidden' // if layer has a target, do not restrict scroll.
      // restricting scroll could inhibit the user's
      // ability to scroll the page while the layer is open.
      ,
      restrictScroll: !layerTarget || hitResponsiveBreakpoint ? true : undefined,
      trapFocus: true
    }, content);
  }

  return content;
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Layer/Layer.js
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








var Layer = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var animate = props.animate,
      animation = props.animation,
      targetChildPosition = props.targetChildPosition;

  var _useState = (0,react.useState)(),
      originalFocusedElement = _useState[0],
      setOriginalFocusedElement = _useState[1];

  (0,react.useEffect)(function () {
    return setOriginalFocusedElement(document.activeElement);
  }, []);

  var _useState2 = (0,react.useState)(),
      layerContainer = _useState2[0],
      setLayerContainer = _useState2[1];

  var containerTarget = (0,react.useContext)(ContainerTargetContext);
  (0,react.useEffect)(function () {
    return setLayerContainer(getNewContainer(containerTarget, targetChildPosition));
  }, [containerTarget, targetChildPosition]); // just a few things to clean up when the Layer is unmounted

  useLayoutEffect(function () {
    return function () {
      if (originalFocusedElement) {
        if (originalFocusedElement.focus) {
          // wait for the fixed positioning to come back to normal
          // see layer styling for reference
          setTimeout(function () {
            return originalFocusedElement.focus();
          }, 0);
        } else if (originalFocusedElement.parentNode && originalFocusedElement.parentNode.focus) {
          // required for IE11 and Edge
          originalFocusedElement.parentNode.focus();
        }
      }

      if (layerContainer) {
        var activeAnimation = animation !== undefined ? animation : animate;

        if (activeAnimation !== false) {
          // undefined uses 'slide' as the default
          // animate out and remove later
          var layerClone = layerContainer.cloneNode(true);
          layerClone.id = 'layerClone';
          containerTarget.appendChild(layerClone);
          var clonedContainer = layerClone.querySelector('[class*="StyledLayer__StyledContainer"]');

          if (clonedContainer && clonedContainer.style) {
            clonedContainer.style.animationDirection = 'reverse';
          }

          setTimeout(function () {
            // we add the id and query here so the unit tests work
            var clone = document.getElementById('layerClone');

            if (clone) {
              containerTarget.removeChild(clone);
              layerContainer.remove();
            }
          }, animationDuration);
        } else {
          containerTarget.removeChild(layerContainer);
        }
      }
    };
  }, [animate, animation, containerTarget, layerContainer, originalFocusedElement]);
  return layerContainer ? /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(LayerContainer, Layer_extends({
    ref: ref
  }, props)), layerContainer) : null;
});
Layer.displayName = 'Layer';
var LayerDoc;

if (false) {}

var LayerWrapper = LayerDoc || Layer;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Layer/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/List/List.js
var List_excluded = ["action", "as", "background", "border", "children", "data", "focus", "itemProps", "onOrder", "pad", "paginate", "primaryKey", "secondaryKey", "show", "step", "onClickItem", "onMore"];

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

function List_objectWithoutPropertiesLoose(source, excluded) {
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










var StyledList = styled_components_browser_esm.default.ul.withConfig({
  displayName: "List__StyledList",
  componentId: "sc-130gdqg-0"
})(["list-style:none;", " padding:0;", " &:focus{", "}", "}", "}"], function (props) {
  return !props.margin && 'margin: 0;';
}, genericStyles, function (props) {
  return props.tabIndex >= 0 && focusStyle({
    forceOutline: true,
    skipSvgChildren: true
  });
}, function (props) {
  return props.itemFocus && focusStyle({
    forceOutline: true,
    skipSvgChildren: true
  });
}, function (props) {
  return props.theme.list && props.theme.list.extend;
});
var StyledItem = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "List__StyledItem",
  componentId: "sc-130gdqg-1"
})(["", " ", " &:focus{", "}", ""], function (props) {
  return props.onClick && "cursor: pointer;";
}, function (props) {
  return props.draggable && "cursor: move;";
}, unfocusStyle({
  forceOutline: true,
  skipSvgChildren: true
}), function (props) {
  return props.theme.list && props.theme.list.item && props.theme.list.item.extend;
}); // when paginated, this wraps the data table and pagination component

var List_StyledContainer = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "List__StyledContainer",
  componentId: "sc-130gdqg-2"
})(["", ";"], function (props) {
  return props.theme.list && props.theme.list.container && props.theme.list.container.extend;
});

var normalize = function normalize(item, index, property) {
  if (typeof property === 'function') {
    return property(item, index);
  }

  return item[property];
};

var reorder = function reorder(array, source, target) {
  var result = array.slice(0);
  var tmp = result[source];
  if (source < target) for (var i = source; i < target; i += 1) {
    result[i] = result[i + 1];
  } else for (var _i = source; _i > target; _i -= 1) {
    result[_i] = result[_i - 1];
  }
  result[target] = tmp;
  return result;
}; // Determine the primary content for a row. If the List
// has a primaryKey defined this returns the item data
// based on this primary key. If no primaryKey property
// is defined this will return unknown. The intent of
// the content from the primary key is that it is unique
// within the list.


var getPrimaryContent = function getPrimaryContent(item, index, primaryKey) {
  var primaryContent;

  if (primaryKey) {
    if (typeof primaryKey === 'function') {
      primaryContent = primaryKey(item, index);
    } else {
      primaryContent = normalize(item, index, primaryKey);
    }
  }

  return primaryContent;
};

var getKey = function getKey(item, index, primaryContent) {
  if (typeof primaryContent === 'string') {
    return primaryContent;
  }

  return typeof item === 'string' ? item : index;
};

var getItemId = function getItemId(item, index, primaryKey) {
  var primaryContent = getPrimaryContent(item, index, primaryKey);
  return getKey(item, index, primaryContent);
};

var List = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var action = _ref.action,
      as = _ref.as,
      background = _ref.background,
      border = _ref.border,
      children = _ref.children,
      data = _ref.data,
      focus = _ref.focus,
      itemProps = _ref.itemProps,
      onOrder = _ref.onOrder,
      pad = _ref.pad,
      paginate = _ref.paginate,
      primaryKey = _ref.primaryKey,
      secondaryKey = _ref.secondaryKey,
      showProp = _ref.show,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? paginate ? 50 : undefined : _ref$step,
      onClickItem = _ref.onClickItem,
      onMore = _ref.onMore,
      rest = List_objectWithoutPropertiesLoose(_ref, List_excluded);

  var listRef = useForwardedRef(ref);
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext); // active will be the index of the current 'active'
  // control in the list. If the onOrder property is defined
  // this will be the index of up or down control for ordering
  // items in the list. In this case the item index of that
  // control would be the active index / 2.
  // If onOrder is not defined but onClickItem is (e.g. the
  // List items are likely selectable), active will be the
  // index of the item which is currently active.

  var _useState = (0,react.useState)(),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = (0,react.useState)(),
      lastActive = _useState2[0],
      setLastActive = _useState2[1];

  var _useState3 = (0,react.useState)(),
      itemFocus = _useState3[0],
      setItemFocus = _useState3[1];

  var _useState4 = (0,react.useState)(),
      dragging = _useState4[0],
      setDragging = _useState4[1];

  var _usePagination = usePagination(List_extends({
    data: data,
    page: normalizeShow(showProp, step),
    step: step
  }, paginate)),
      items = _usePagination[0],
      paginationProps = _usePagination[1];

  var Container = paginate ? List_StyledContainer : react.Fragment;
  var containterProps = paginate ? List_extends({}, theme.list.container) : undefined;

  var _useState5 = (0,react.useState)(),
      orderingData = _useState5[0],
      setOrderingData = _useState5[1];

  var draggingRef = (0,react.useRef)();
  var ariaProps = {
    role: onClickItem || onOrder ? 'listbox' : 'list'
  };

  if (active >= 0) {
    var activeId; // We have an item that is 'focused' within the list. This could
    // be the list item or one of the up/down ordering buttons.
    // We need to figure out an id of the thing that will be shown as active

    if (onOrder) {
      // figure out which arrow button will be the active one.
      var buttonId = active % 2 ? 'MoveDown' : 'MoveUp';
      var itemIndex = Math.trunc(active / 2);
      activeId = "" + getItemId(data[itemIndex], itemIndex, primaryKey) + buttonId;
    } else if (onClickItem) {
      // The whole list item is active. Figure out an id
      activeId = getItemId(data[active], active, primaryKey);
    }

    ariaProps['aria-activedescendant'] = activeId;
  }

  return /*#__PURE__*/react.createElement(Container, containterProps, /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onEnter: (onClickItem || onOrder) && active >= 0 ? function (event) {
      if (onOrder) {
        var index = Math.trunc(active / 2); // Call onOrder with the re-ordered data.
        // Update the active control index so that the
        // active control will stay on the same item
        // even though it moved up or down.

        if (active % 2) {
          onOrder(reorder(data, index, index + 1));
          setActive(Math.min(active + 2, data.length * 2 - 2));
        } else {
          onOrder(reorder(data, index, index - 1));
          setActive(Math.max(active - 2, 1));
        }
      } else {
        event.persist();
        var adjustedEvent = event;
        adjustedEvent.item = data[active];
        adjustedEvent.index = active;
        onClickItem(adjustedEvent);
      }
    } : undefined,
    onUp: (onClickItem || onOrder) && active ? function () {
      var min = onOrder ? 1 : 0;
      setActive(Math.max(active - 1, min));
    } : undefined,
    onDown: (onClickItem || onOrder) && data && data.length ? function () {
      var min = onOrder ? 1 : 0;
      var max = onOrder ? data.length * 2 - 2 : data.length - 1;
      setActive(active >= min ? Math.min(active + 1, max) : min);
    } : undefined
  }, /*#__PURE__*/react.createElement(StyledList, List_extends({
    ref: listRef,
    as: as || 'ul',
    itemFocus: itemFocus,
    tabIndex: onClickItem || onOrder ? 0 : undefined,
    onFocus: function onFocus() {
      return (// Fixes zero-th index showing undefined.
        // Checks for active variable to stop bug where activeStyle
        // gets applied to lastActive instead of the item the user
        // is currently clicking on
        !active && active !== 0 ? setActive(lastActive) : setActive(active)
      );
    },
    onBlur: function onBlur() {
      setLastActive(active);
      setActive(undefined);
    }
  }, ariaProps, rest), /*#__PURE__*/react.createElement(InfiniteScrollWrapper, {
    items: !paginate ? orderingData || data : items,
    onMore: onMore,
    scrollableAncestor: "window",
    show: !paginate ? showProp : undefined,
    step: step,
    renderMarker: function renderMarker(marker) {
      return /*#__PURE__*/react.createElement(BoxWrapper, {
        as: "li",
        flex: false
      }, marker);
    }
  }, function (item, index) {
    var content;
    var boxProps = {};
    var itemId;

    if (children) {
      content = children(item, index, onClickItem ? {
        active: active === index
      } : undefined);
    } else if (primaryKey) {
      if (typeof primaryKey === 'function') {
        itemId = primaryKey(item, index);
        content = itemId;
      } else {
        itemId = normalize(item, index, primaryKey);
        content = /*#__PURE__*/react.createElement(TextWrapper, {
          key: "p",
          weight: "bold"
        }, itemId);
      }

      if (secondaryKey) {
        if (typeof secondaryKey === 'function') {
          content = [content, secondaryKey(item, index)];
        } else {
          content = [content, /*#__PURE__*/react.createElement(TextWrapper, {
            key: "s"
          }, normalize(item, index, secondaryKey))];
        }

        boxProps = {
          direction: 'row',
          align: 'center',
          justify: 'between',
          gap: 'medium'
        };
      }
    } else if (typeof item === 'object') {
      content = item[Object.keys(item)[0]];
    } else {
      content = item;
    }

    var key = getKey(item, index, itemId);

    if (action) {
      content = [/*#__PURE__*/react.createElement(BoxWrapper, {
        align: "start",
        key: "actionContainer" + index
      }, content), action(item, index)];
      boxProps = {
        direction: 'row',
        align: secondaryKey ? 'start' : 'center',
        justify: 'between',
        gap: 'medium'
      };
    }

    var adjustedBackground = background || theme.list.item.background;

    if (!onOrder && active === index || dragging === index) {
      adjustedBackground = theme.global.hover.background;
    } else if (Array.isArray(adjustedBackground)) {
      adjustedBackground = adjustedBackground[index % adjustedBackground.length];
    }

    var adjustedBorder = border !== undefined ? border : theme.list.item.border;

    if (adjustedBorder === 'horizontal' && index) {
      adjustedBorder = 'bottom';
    }

    var clickProps;

    if (onClickItem && !onOrder) {
      clickProps = {
        role: 'option',
        tabIndex: -1,
        active: active === index,
        onClick: function onClick(event) {
          // extract from React's synthetic event pool
          event.persist();
          var adjustedEvent = event;
          adjustedEvent.item = item;
          adjustedEvent.index = index;
          onClickItem(adjustedEvent); // put focus on the List container to meet WCAG
          // accessibility guidelines that focus remains on `ul`

          listRef.current.focus();
        },
        onMouseOver: function onMouseOver() {
          return setActive(index);
        },
        onMouseOut: function onMouseOut() {
          return setActive(undefined);
        },
        onFocus: function onFocus() {
          setActive(index);
          setItemFocus(true);
        },
        onBlur: function onBlur() {
          setActive(undefined);
          setItemFocus(false);
        }
      };
    }

    var orderProps;
    var orderControls;

    if (onOrder) {
      orderProps = {
        draggable: true,
        onDragStart: function onDragStart(event) {
          event.dataTransfer.setData('text/plain', ''); // allowed per
          // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#define_the_drag_effect
          // eslint-disable-next-line no-param-reassign

          event.dataTransfer.effectAllowed = 'move';
          setDragging(index);
          setActive(undefined);
        },
        onDragEnd: function onDragEnd() {
          setDragging(undefined);
          setOrderingData(undefined);
        },
        onDragOver: function onDragOver(event) {
          if (dragging !== undefined) {
            event.preventDefault();

            if (dragging !== index) {
              // eslint-disable-next-line no-param-reassign
              event.dataTransfer.dropEffect = 'move';
              setOrderingData(reorder(orderingData || data, dragging, index));
              setDragging(index);
            }
          }
        },
        onDrop: function onDrop() {
          if (orderingData) {
            onOrder(orderingData);
          }
        },
        ref: dragging === index ? draggingRef : undefined
      };
      var Up = theme.list.icons.up;
      var Down = theme.list.icons.down;
      orderControls = /*#__PURE__*/react.createElement(BoxWrapper, {
        direction: "row",
        align: "center",
        justify: "end"
      }, /*#__PURE__*/react.createElement(ButtonWrapper, {
        id: key + "MoveUp",
        a11yTitle: index + 1 + " " + key + " move up",
        icon: /*#__PURE__*/react.createElement(Up, null),
        hoverIndicator: true,
        focusIndicator: false,
        disabled: !index,
        active: active === index * 2,
        onClick: function onClick(event) {
          event.stopPropagation();
          onOrder(reorder(data, index, index - 1));
        },
        tabIndex: -1,
        onMouseOver: function onMouseOver() {
          return setActive(index * 2);
        },
        onMouseOut: function onMouseOut() {
          return setActive(undefined);
        },
        onFocus: function onFocus() {
          setActive(index * 2);
          setItemFocus(true);
        },
        onBlur: function onBlur() {
          setActive(undefined);
          setItemFocus(false);
        }
      }), /*#__PURE__*/react.createElement(ButtonWrapper, {
        id: key + "MoveDown",
        a11yTitle: index + 1 + " " + key + " move down",
        icon: /*#__PURE__*/react.createElement(Down, null),
        hoverIndicator: true,
        focusIndicator: false,
        disabled: index >= data.length - 1,
        active: active === index * 2 + 1,
        onClick: function onClick(event) {
          event.stopPropagation();
          onOrder(reorder(data, index, index + 1));
        },
        tabIndex: -1,
        onMouseOver: function onMouseOver() {
          return setActive(index * 2 + 1);
        },
        onMouseOut: function onMouseOut() {
          return setActive(undefined);
        },
        onFocus: function onFocus() {
          setActive(index * 2 + 1);
          setItemFocus(true);
        },
        onBlur: function onBlur() {
          setActive(undefined);
          setItemFocus(false);
        }
      }));
      boxProps = {
        direction: 'row',
        align: 'center',
        gap: 'medium'
      };
      content = /*#__PURE__*/react.createElement(BoxWrapper, {
        flex: true
      }, content);
    }

    if (itemProps && itemProps[index]) {
      boxProps = List_extends({}, boxProps, itemProps[index]);
    }

    return /*#__PURE__*/react.createElement(StyledItem, List_extends({
      key: key,
      tag: "li",
      flex: false,
      pad: pad || theme.list.item.pad,
      background: adjustedBackground,
      border: adjustedBorder
    }, boxProps, clickProps, orderProps), onOrder && /*#__PURE__*/react.createElement(TextWrapper, null, index + 1), content, orderControls);
  }))), paginate && data.length > step && items && items.length ? /*#__PURE__*/react.createElement(PaginationWrapper, List_extends({
    alignSelf: "end"
  }, paginationProps)) : null);
});
List.displayName = 'List';
var ListDoc;

if (false) {}

var ListWrapper = ListDoc || List;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/List/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Main/Main.js
function Main_extends() {
  Main_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Main_extends.apply(this, arguments);
}




var Main = function Main(_ref) {
  var rest = Main_extends({}, _ref);

  return /*#__PURE__*/react.createElement(BoxWrapper, Main_extends({
    as: "main",
    fill: "vertical",
    flex: "grow",
    overflow: "auto"
  }, rest));
};

var MainDoc;

if (false) {}

var MainWrapper = MainDoc || Main;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Main/index.js

// EXTERNAL MODULE: ./node_modules/markdown-to-jsx/dist/index.module.js
var index_module = __webpack_require__(3410);
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Paragraph/StyledParagraph.js



var StyledParagraph_colorStyle = (0,styled_components_browser_esm.css)(["color:", ";"], function (props) {
  return normalizeColor(props.colorProp, props.theme);
});

var StyledParagraph_sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.paragraph[size];
  return (0,styled_components_browser_esm.css)(["font-size:", ";line-height:", ";max-width:", ";"], data ? data.size : size, data ? data.height : 'normal', props.fillProp ? 'none' : data && data.maxWidth);
};

var StyledParagraph_fontFamily = (0,styled_components_browser_esm.css)(["font-family:", ";"], function (props) {
  return props.theme.paragraph.font.family;
});
var StyledParagraph = styled_components_browser_esm.default.p.withConfig({
  displayName: "StyledParagraph",
  componentId: "tbetod-0"
})(["", " ", " ", " ", " ", " ", ""], genericStyles, function (props) {
  return StyledParagraph_sizeStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.colorProp && StyledParagraph_colorStyle;
}, function (props) {
  return props.theme.paragraph.font && props.theme.paragraph.font.family && StyledParagraph_fontFamily;
}, function (props) {
  return props.theme.paragraph && props.theme.paragraph.extend;
});
StyledParagraph.defaultProps = {};
Object.setPrototypeOf(StyledParagraph.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Paragraph/Paragraph.js
var Paragraph_excluded = ["color", "fill"];

function Paragraph_extends() {
  Paragraph_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Paragraph_extends.apply(this, arguments);
}

function Paragraph_objectWithoutPropertiesLoose(source, excluded) {
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



var Paragraph = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var color = _ref.color,
      fill = _ref.fill,
      rest = Paragraph_objectWithoutPropertiesLoose(_ref, Paragraph_excluded);

  return /*#__PURE__*/react.createElement(StyledParagraph, Paragraph_extends({
    ref: ref,
    colorProp: color,
    fillProp: fill
  }, rest));
});
Paragraph.displayName = 'Paragraph';
var ParagraphDoc;

if (false) {}

var ParagraphWrapper = ParagraphDoc || Paragraph;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Markdown/Markdown.js
var Markdown_excluded = ["components", "options", "theme"];

function Markdown_extends() {
  Markdown_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Markdown_extends.apply(this, arguments);
}

function Markdown_objectWithoutPropertiesLoose(source, excluded) {
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















var GrommetMarkdown = function GrommetMarkdown(_ref) {
  var components = _ref.components,
      options = _ref.options,
      theme = _ref.theme,
      rest = Markdown_objectWithoutPropertiesLoose(_ref, Markdown_excluded);

  var heading = [1, 2, 3, 4].reduce(function (obj, level) {
    var result = Markdown_extends({}, obj);

    result["h" + level] = {
      component: HeadingWrapper,
      props: {
        level: level
      }
    };
    return result;
  }, {});
  var overrides = deepMerge({
    a: {
      component: Anchor
    },
    img: {
      component: ImageWrapper
    },
    p: {
      component: ParagraphWrapper
    },
    table: {
      component: TableWrapper
    },
    td: {
      component: TableCellWrapper
    },
    tbody: {
      component: TableBodyWrapper
    },
    tfoot: {
      component: TableFooterWrapper
    },
    th: {
      component: TableCellWrapper
    },
    thead: {
      component: TableHeaderWrapper
    },
    tr: {
      component: TableRowWrapper
    }
  }, heading, components, options && options.overrides);
  return /*#__PURE__*/react.createElement(index_module/* default */.Z, Markdown_extends({
    options: Markdown_extends({}, options, {
      overrides: overrides
    })
  }, rest));
};

var GrommetMarkdownDoc;

if (false) {}

var GrommetMarkdownWrapper = GrommetMarkdownDoc || GrommetMarkdown;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Markdown/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/MaskedInput/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Menu/Menu.js
var Menu_excluded = ["a11yTitle", "aria-label", "children", "disabled", "dropAlign", "dropBackground", "dropProps", "dropTarget", "justifyContent", "icon", "items", "label", "messages", "onKeyDown", "open", "plain", "size"],
    Menu_excluded2 = ["align"];

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

function Menu_objectWithoutPropertiesLoose(source, excluded) {
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











var Menu_ContainerBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "Menu__ContainerBox",
  componentId: "sc-17fcys9-0"
})(["max-height:inherit;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}", ";"], function (props) {
  return props.theme.menu.extend;
});
/* Notes on keyboard interactivity (based on W3) // For details reference: https://www.w3.org/TR/wai-aria-practices/#menu

To open menu when menu button is focused:
- Space/Enter/Up arrow/Down arrow will open menu

To navigate within menu:
- Up/down arrow keys can be used and will loop through options
(keeping focus within the Menu)
- Tab can be used, but once the last menu item is reached, Tab will close the
Menu and continue through page content.

To close the menu:
- Tabbing beyond the first or last menu item.
- Esc will close the menu
- Select a menu item

To make a selection:
- Enter key is pressed.
- Space is pressed.
*/

var Menu = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var a11yTitle = props.a11yTitle,
      ariaLabel = props['aria-label'],
      children = props.children,
      disabled = props.disabled,
      dropAlign = props.dropAlign,
      dropBackground = props.dropBackground,
      dropProps = props.dropProps,
      dropTarget = props.dropTarget,
      justifyContent = props.justifyContent,
      icon = props.icon,
      items = props.items,
      label = props.label,
      messages = props.messages,
      onKeyDown = props.onKeyDown,
      open = props.open,
      plain = props.plain,
      size = props.size,
      rest = Menu_objectWithoutPropertiesLoose(props, Menu_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format;

  var iconColor = normalizeColor(theme.menu.icons.color || 'control', theme); // need to destructure the align otherwise it will get passed through
  // to DropButton and override prop values

  var _theme$menu$drop = theme.menu.drop,
      themeDropAlign = _theme$menu$drop.align,
      themeDropProps = Menu_objectWithoutPropertiesLoose(_theme$menu$drop, Menu_excluded2);

  var align = dropProps && dropProps.align || dropAlign || themeDropAlign;
  var controlButtonIndex = (0,react.useMemo)(function () {
    if (align.top === 'top') return -1;
    if (align.bottom === 'bottom') return items.length;
    return undefined;
  }, [align, items]); // Keeps track of whether menu options should be mirrored
  // when there's not enough space below DropButton. This state
  // is modified on /Drop/DropContainer.js.

  var _useState = (0,react.useState)(),
      alignControlMirror = _useState[0],
      setAlignControlMirror = _useState[1];

  var buttonRefs = {};
  var constants = (0,react.useMemo)(function () {
    return {
      none: 'none',
      tab: 9,
      // Menu control button included on top of menu items
      controlTop: align.top === 'top' || undefined,
      // Menu control button included on the bottom of menu items
      controlBottom: align.bottom === 'bottom' || undefined,
      controlButtonIndex: controlButtonIndex
    };
  }, [align, controlButtonIndex]);

  var _useState2 = (0,react.useState)(constants.none),
      activeItemIndex = _useState2[0],
      setActiveItemIndex = _useState2[1];

  var _useState3 = (0,react.useState)(open || false),
      isOpen = _useState3[0],
      setOpen = _useState3[1];

  var MenuIcon = isOpen && theme.menu.icons.up ? theme.menu.icons.up : theme.menu.icons.down;
  var onDropClose = (0,react.useCallback)(function () {
    setActiveItemIndex(constants.none);
    setOpen(false);
  }, [constants.none]);
  var onDropOpen = (0,react.useCallback)(function () {
    setOpen(true);
  }, []);

  var onSelectMenuItem = function onSelectMenuItem(event) {
    if (isOpen) {
      if (activeItemIndex >= 0) {
        event.preventDefault();
        event.stopPropagation();
        buttonRefs[activeItemIndex].click();
      }
    } else {
      onDropOpen();
    }
  };

  var isTab = function isTab(event) {
    return event.keyCode === constants.tab || event.which === constants.tab;
  };

  var onNextMenuItem = function onNextMenuItem(event) {
    event.preventDefault();

    if (!isOpen) {
      onDropOpen();
    } else if (isTab(event) && (!constants.controlBottom && activeItemIndex === items.length - 1 || constants.controlBottom && activeItemIndex === controlButtonIndex)) {
      // User has reached end of the menu, this tab will close
      // the menu drop because there are no more "next items" to access
      onDropClose();
    } else {
      var index;

      if ( // This checks if the user has reached the end of the menu.
      // In the case the the menu control button is located at the
      // bottom of the menu, it checks if the user has reached the button.
      // Otherwise, it checks if the user is at the last menu item.
      constants.controlBottom && activeItemIndex === controlButtonIndex || !constants.controlBottom && activeItemIndex === items.length - 1 || activeItemIndex === constants.none) {
        // place focus on the first menu item
        index = 0;
      } else {
        index = activeItemIndex + 1;
      }

      setActiveItemIndex(index);
      buttonRefs[index].focus();
    }
  };

  var onPreviousMenuItem = function onPreviousMenuItem(event) {
    event.preventDefault();

    if (!isOpen) {
      onDropOpen();
    } else if (isTab(event) && (constants.controlTop && activeItemIndex === controlButtonIndex || !constants.controlTop && activeItemIndex - 1 < 0)) {
      // User has reached beginning of the menu, this tab will close
      // the menu drop because there are no more "previous items" to access
      onDropClose();
    } else {
      var index;

      if (activeItemIndex - 1 < 0) {
        if (constants.controlTop && activeItemIndex - 1 === controlButtonIndex) {
          index = items.length;
        } else {
          index = items.length - 1;
        }
      } else {
        index = activeItemIndex - 1;
      }

      setActiveItemIndex(index);
      buttonRefs[index].focus();
    }
  };

  var menuIcon = icon !== false ? icon !== true && icon || /*#__PURE__*/react.createElement(MenuIcon, {
    color: iconColor,
    size: size
  }) : null;
  var buttonProps = {
    plain: plain,
    size: size
  };
  var content;

  if (children) {
    content = children;
  } else if (!theme.button["default"]) {
    content = /*#__PURE__*/react.createElement(BoxWrapper, {
      direction: "row",
      justify: justifyContent,
      align: "center",
      pad: "small",
      gap: label && icon !== false ? 'small' : undefined
    }, /*#__PURE__*/react.createElement(TextWrapper, {
      size: size
    }, label), menuIcon);
  } else {
    // when a theme has theme.button.default, keep content as
    // undefined so we can rely on Button label & icon props
    buttonProps = {
      icon: menuIcon,
      label: label,
      plain: plain,
      reverse: true,
      size: size
    };
    content = undefined;
  }

  var controlMirror = /*#__PURE__*/react.createElement(BoxWrapper, {
    flex: false
  }, /*#__PURE__*/react.createElement(ButtonWrapper, Menu_extends({
    ref: function ref(r) {
      // make it accessible at the end of all menu items
      buttonRefs[items.length] = r;
    },
    a11yTitle: ariaLabel || a11yTitle || format({
      id: 'menu.closeMenu',
      messages: messages
    }),
    active: activeItemIndex === controlButtonIndex,
    focusIndicator: false,
    hoverIndicator: "background",
    onClick: onDropClose,
    onFocus: function onFocus() {
      return setActiveItemIndex(controlButtonIndex);
    } // On first tab into menu, the control button should not
    // be able to receive tab focus because the focus should
    // go to the first menu item instead.
    ,
    tabIndex: activeItemIndex === constants.none ? '-1' : undefined
  }, buttonProps), typeof content === 'function' ? function () {
    return content(Menu_extends({}, props, {
      drop: true
    }));
  } : content));
  return /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onDown: onNextMenuItem,
    onUp: onPreviousMenuItem,
    onEnter: onSelectMenuItem,
    onSpace: onSelectMenuItem,
    onEsc: onDropClose,
    onTab: onDropClose,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/react.createElement(DropButtonWrapper, Menu_extends({
    ref: ref
  }, rest, buttonProps, {
    a11yTitle: ariaLabel || a11yTitle || format({
      id: 'menu.openMenu',
      messages: messages
    }),
    onAlign: setAlignControlMirror,
    disabled: disabled,
    dropAlign: align,
    dropTarget: dropTarget,
    dropProps: dropProps || themeDropProps,
    open: isOpen,
    onOpen: onDropOpen,
    onClose: onDropClose,
    dropContent: /*#__PURE__*/react.createElement(KeyboardWrapper, {
      onTab: function onTab(event) {
        return event.shiftKey ? onPreviousMenuItem(event) : onNextMenuItem(event);
      },
      onEnter: onSelectMenuItem
    }, /*#__PURE__*/react.createElement(Menu_ContainerBox, {
      background: dropBackground || theme.menu.background
    }, alignControlMirror === 'top' && align.top === 'top' ? controlMirror : undefined, /*#__PURE__*/react.createElement(BoxWrapper, {
      overflow: "auto"
    }, items.map(function (item, index) {
      // Determine whether the label is done as a child or
      // as an option Button kind property.
      var child = !theme.button.option ? /*#__PURE__*/react.createElement(BoxWrapper, {
        align: "start",
        pad: "small",
        direction: "row",
        gap: item.gap
      }, item.reverse && item.label, item.icon, !item.reverse && item.label) : undefined; // if we have a child, turn on plain, and hoverIndicator

      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        react.createElement(BoxWrapper, {
          key: index,
          flex: false
        }, /*#__PURE__*/react.createElement(ButtonWrapper, Menu_extends({
          ref: function ref(r) {
            buttonRefs[index] = r;
          },
          onFocus: function onFocus() {
            return setActiveItemIndex(index);
          },
          active: activeItemIndex === index,
          focusIndicator: false,
          plain: !child ? undefined : true,
          align: "start",
          kind: !child ? 'option' : undefined,
          hoverIndicator: !child ? undefined : 'background'
        }, !child ? item : Menu_extends({}, item, {
          gap: undefined,
          icon: undefined,
          label: undefined,
          reverse: undefined
        }), {
          onClick: function onClick() {
            if (item.onClick) {
              item.onClick.apply(item, arguments);
            }

            if (item.close !== false) {
              onDropClose();
            }
          }
        }), child))
      );
    })), alignControlMirror === 'bottom' || align.bottom === 'bottom' ? controlMirror : undefined))
  }), content));
});
Menu.defaultProps = {
  items: [],
  messages: undefined,
  justifyContent: 'start'
};
Menu.displayName = 'Menu';
var MenuDoc;

if (false) {}

var MenuWrapper = MenuDoc || Menu;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Menu/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Meter/StyledMeter.js



var StyledMeter_roundStyle = (0,styled_components_browser_esm.css)(["border-radius:", ";"], function (props) {
  return props.theme.global.edgeSize[props.round.size];
}); // overflow: hidden is needed for ie11

var StyledMeter = styled_components_browser_esm.default.svg.withConfig({
  displayName: "StyledMeter",
  componentId: "nsxarx-0"
})(["max-width:100%;overflow:hidden;", " ", " path{transition:stroke 0.3s,stroke-width 0.3s;}", ";"], genericStyles, function (props) {
  return props.round && StyledMeter_roundStyle;
}, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});
StyledMeter.defaultProps = {};
Object.setPrototypeOf(StyledMeter.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Meter/utils.js

var strokeProps = function strokeProps(color, theme) {
  var result = {};

  if (color) {
    if (typeof color === 'object') {
      result.stroke = normalizeColor(color.color, theme);

      if (color.opacity) {
        result.strokeOpacity = "" + (color.opacity === true ? theme.global.opacity.medium : theme.global.opacity[color.opacity] || color.opacity);
      }
    } else {
      result.stroke = normalizeColor(color, theme);
    }
  }

  return result;
};
var neutralExp = /^neutral-\d+/;
var defaultColor = function defaultColor(index, theme, valuesLength) {
  if (index === valuesLength - 1 && theme.meter.color) {
    return theme.meter.color;
  } // We want the last value to have the first color


  var colorIndex = valuesLength - index - 1;

  if (theme.meter && theme.meter.colors) {
    var _colors = theme.meter.colors[theme.dark ? 'dark' : 'light'] || theme.meter.colors;

    return _colors[colorIndex % _colors.length];
  }

  var colors = Object.keys(theme.global.colors).filter(function (n) {
    return n.match(/^graph-[0-9]$/);
  });

  if (colors.length > 0) {
    return colors[colorIndex % colors.length];
  } // Deprecate using "neutral-*" color names. Remove eventually.


  var neutralColors = Object.keys(theme.global.colors).filter(function (k) {
    return neutralExp.test(k);
  });
  return neutralColors[colorIndex % neutralColors.length];
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Meter/Bar.js
var Bar_excluded = ["background", "max", "round", "size", "thickness", "direction", "values"],
    Bar_excluded2 = ["color", "highlight", "label", "onHover", "value"];

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

function Bar_objectWithoutPropertiesLoose(source, excluded) {
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







var Bar = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var background = props.background,
      max = props.max,
      round = props.round,
      size = props.size,
      thicknessProp = props.thickness,
      direction = props.direction,
      values = props.values,
      rest = Bar_objectWithoutPropertiesLoose(props, Bar_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var length = size === 'full' ? 288 : parseMetricToNum(theme.global.size[size] || size);
  var thickness = parseMetricToNum(theme.global.edgeSize[thicknessProp] || thicknessProp); // account for the round cap, if any

  var capOffset = round ? thickness / 2 : 0;
  var mid = thickness / 2;
  var someHighlight = (values || []).some(function (v) {
    return v.highlight;
  });
  var start = direction === 'horizontal' ? capOffset : max * (length - 2 * capOffset) / max;
  var paths = (values || []).reduce(function (acc, valueArg, index) {
    if (valueArg.value > 0) {
      var color = valueArg.color,
          highlight = valueArg.highlight,
          label = valueArg.label,
          onHover = valueArg.onHover,
          value = valueArg.value,
          pathRest = Bar_objectWithoutPropertiesLoose(valueArg, Bar_excluded2);

      var key = "p-" + index;
      var delta = value * (length - 2 * capOffset) / max;
      var d = direction === 'horizontal' ? "M " + start + "," + mid + " L " + (start + delta) + "," + mid : "M " + mid + "," + start + " L " + mid + "," + (start - delta);
      var colorName = color || defaultColor(index, theme, values ? values.length : 0);
      var hoverProps;

      if (onHover) {
        hoverProps = {
          onMouseOver: function onMouseOver() {
            return onHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return onHover(false);
          }
        };
      }

      if (direction === 'horizontal') {
        start += delta;
      } else {
        start -= delta;
      }

      var result = /*#__PURE__*/react.createElement("path", Bar_extends({
        key: key,
        d: d,
        fill: "none"
      }, strokeProps(someHighlight && !highlight ? background : colorName, theme), {
        strokeWidth: direction === 'horizontal' ? thickness : length,
        strokeLinecap: round ? 'round' : 'butt'
      }, hoverProps, pathRest));
      acc.push(result);
    }

    return acc;
  }, []).reverse(); // reverse so the caps looks right

  var width;

  if (direction === 'horizontal') {
    width = size === 'full' ? '100%' : length;
  } else {
    width = size === 'full' ? '100%' : thickness;
  }

  var backgroundPath = direction === 'horizontal' ? "M " + capOffset + "," + mid + " L " + (length - capOffset) + "," + mid : "M " + mid + "," + capOffset + " L " + mid + "," + (length - capOffset);
  return /*#__PURE__*/react.createElement(StyledMeter, Bar_extends({
    ref: ref,
    viewBox: direction === 'horizontal' ? "0 0 " + length + " " + thickness : "0 0 " + thickness + " " + length,
    preserveAspectRatio: "none",
    width: width,
    height: direction === 'horizontal' ? thickness : length,
    round: round ? {
      size: thicknessProp
    } : undefined
  }, rest), /*#__PURE__*/react.createElement("path", Bar_extends({
    d: backgroundPath,
    fill: "none"
  }, strokeProps(background, theme), {
    strokeWidth: thickness,
    strokeLinecap: round ? 'round' : 'square'
  })), paths);
});
Bar.displayName = 'Bar';
Bar.defaultProps = {
  background: 'light-1'
};
Object.setPrototypeOf(Bar.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/utils/graphics.js
var POST_DECIMAL_DIGITS = 10;
var baseUnit = 24;
var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};
var arcCommands = function arcCommands(centerX, centerY, radius, startAngle, endAngle) {
  // handle that we can't draw a complete circle
  var normalizedEndAngle = endAngle;

  if (endAngle - startAngle >= 360) {
    normalizedEndAngle = startAngle + 359.99;
  }

  var start = polarToCartesian(centerX, centerY, radius, normalizedEndAngle);
  var end = polarToCartesian(centerX, centerY, radius, startAngle);
  var arcSweep = normalizedEndAngle - startAngle <= 180 ? '0' : '1';
  var d = ['M', start.x.toFixed(POST_DECIMAL_DIGITS), start.y.toFixed(POST_DECIMAL_DIGITS), 'A', radius.toFixed(POST_DECIMAL_DIGITS), radius.toFixed(POST_DECIMAL_DIGITS), 0, arcSweep, 0, end.x.toFixed(POST_DECIMAL_DIGITS), end.y.toFixed(POST_DECIMAL_DIGITS)].join(' ');
  return d;
};
var translateEndAngle = function translateEndAngle(startAngle, anglePer, value) {
  return Math.min(360, Math.max(0, startAngle + anglePer * value));
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Meter/Circle.js
var Circle_excluded = ["background", "max", "round", "size", "thickness", "type", "values"],
    Circle_excluded2 = ["color", "highlight", "label", "onHover", "value"];

function Circle_extends() {
  Circle_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Circle_extends.apply(this, arguments);
}

function Circle_objectWithoutPropertiesLoose(source, excluded) {
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







var Circle = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var background = props.background,
      max = props.max,
      round = props.round,
      size = props.size,
      thickness = props.thickness,
      type = props.type,
      values = props.values,
      rest = Circle_objectWithoutPropertiesLoose(props, Circle_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);
  var width = size === 'full' ? 288 : parseMetricToNum(theme.global.size[size] || size);
  var height = type === 'pie' ? width / 2 : parseMetricToNum(theme.global.edgeSize[thickness] || thickness);
  var mid = width / 2;
  var radius = width / 2 - height / 2;
  var anglePer = 360 / max;
  var someHighlight = (values || []).some(function (v) {
    return v.highlight;
  });
  var startValue = 0;
  var startAngle = 0;
  var paths = [];
  var pathCaps = [];
  (values || []).filter(function (v) {
    return v.value > 0;
  }).forEach(function (valueArg, index) {
    var color = valueArg.color,
        highlight = valueArg.highlight,
        label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        pathRest = Circle_objectWithoutPropertiesLoose(valueArg, Circle_excluded2);

    var key = "p-" + index;
    var colorName = color || defaultColor(index, theme, values ? values.length : 0);
    var endAngle;

    if (startValue + value >= max) {
      endAngle = 360;
    } else {
      endAngle = Math.min(360, translateEndAngle(startAngle, anglePer, value));
    }

    var hoverProps;

    if (onHover) {
      hoverProps = {
        onMouseOver: function onMouseOver() {
          return onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(false);
        }
      };
    }

    var stroke = strokeProps(someHighlight && !highlight ? background : colorName, theme);

    if (round) {
      var d1 = arcCommands(width / 2, width / 2, radius, startAngle, endAngle);
      paths.unshift( /*#__PURE__*/react.createElement("path", Circle_extends({
        key: key,
        d: d1,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "round"
      }, hoverProps, pathRest))); // To handle situations where the last values are small, redraw
      // a dot at the end. Give just a bit of angle to avoid anti-aliasing
      // leakage around the edge.

      var d2 = arcCommands(width / 2, width / 2, radius, endAngle - 0.5, endAngle);
      var pathCap = /*#__PURE__*/react.createElement("path", Circle_extends({
        key: key + "-",
        d: d2,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "round"
      }, hoverProps, pathRest)); // If we are on a large enough path to not need re-drawing previous
      // ones, clear the pathCaps we've collected already.

      if (endAngle - startAngle > 2 * anglePer) {
        pathCaps = [];
      }

      pathCaps.unshift(pathCap);
    } else {
      var d = arcCommands(width / 2, width / 2, radius, startAngle, endAngle);
      paths.push( /*#__PURE__*/react.createElement("path", Circle_extends({
        key: key,
        d: d,
        fill: "none"
      }, stroke, {
        strokeWidth: height,
        strokeLinecap: "butt"
      }, hoverProps, pathRest)));
    }

    startValue += value;
    startAngle = endAngle;
  });
  return /*#__PURE__*/react.createElement(StyledMeter, Circle_extends({
    ref: ref,
    viewBox: "0 0 " + width + " " + width,
    width: size === 'full' ? '100%' : width,
    height: size === 'full' ? '100%' : width
  }, rest), /*#__PURE__*/react.createElement("circle", Circle_extends({
    cx: mid,
    cy: mid,
    r: radius
  }, strokeProps(background, theme), {
    strokeWidth: height,
    strokeLinecap: round ? 'round' : 'square',
    fill: "none"
  })), paths, pathCaps);
});
Circle.displayName = 'Circle';
Circle.defaultProps = {};
Object.setPrototypeOf(Circle.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Meter/Meter.js
var Meter_excluded = ["background", "color", "direction", "size", "thickness", "type", "value", "values"];

function Meter_extends() {
  Meter_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Meter_extends.apply(this, arguments);
}

function Meter_objectWithoutPropertiesLoose(source, excluded) {
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





var deriveMax = function deriveMax(values) {
  var max = 100;

  if (values && values.length > 1) {
    max = 0;
    values.forEach(function (v) {
      max += v.value;
    });
  }

  return max;
};

var Meter = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var _ref$background = _ref.background,
      background = _ref$background === void 0 ? {
    color: 'light-2',
    opacity: 'medium'
  } : _ref$background,
      color = _ref.color,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$thickness = _ref.thickness,
      thickness = _ref$thickness === void 0 ? 'medium' : _ref$thickness,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'bar' : _ref$type,
      value = _ref.value,
      valuesProp = _ref.values,
      rest = Meter_objectWithoutPropertiesLoose(_ref, Meter_excluded); // normalize values to an array of objects


  var values = (0,react.useMemo)(function () {
    if (valuesProp) return valuesProp;
    if (value) return [{
      color: color,
      value: value
    }];
    return [];
  }, [color, value, valuesProp]);
  var memoizedMax = (0,react.useMemo)(function () {
    return deriveMax(values);
  }, [values]);
  var content;

  if (type === 'bar') {
    content = /*#__PURE__*/react.createElement(Bar, Meter_extends({
      ref: ref,
      max: memoizedMax,
      values: values,
      size: size,
      thickness: thickness,
      background: background,
      direction: direction
    }, rest));
  } else if (type === 'circle' || type === 'pie') {
    content = /*#__PURE__*/react.createElement(Circle, Meter_extends({
      ref: ref,
      max: memoizedMax,
      values: values,
      size: size,
      thickness: thickness,
      type: type,
      background: background
    }, rest));
  }

  return content;
});
Meter.displayName = 'Meter';
var MeterDoc;

if (false) {}

var MeterWrapper = MeterDoc || Meter;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Meter/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Pagination/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Paragraph/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Nav/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RadioButton/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RadioButtonGroup/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RangeInput/StyledRangeInput.js


 // opacity of the bound trumps the track opacity

var getBoundOpacity = function getBoundOpacity(props, bound) {
  return props.theme.rangeInput && props.theme.rangeInput.track && props.theme.rangeInput.track[bound] && props.theme.rangeInput.track[bound].opacity ? props.theme.rangeInput.track[bound].opacity : 1;
};

var getBoundColor = function getBoundColor(props, bound) {
  if (props.theme.rangeInput && props.theme.rangeInput.track && props.theme.rangeInput.track[bound] && props.theme.rangeInput.track[bound].color) {
    return getRGBA(normalizeColor(props.theme.rangeInput.track[bound].color, props.theme), getBoundOpacity(props, bound));
  } // If bound color is undefined pick the default track color with bound opacity


  return getRGBA(normalizeColor(props.theme.rangeInput.track.color, props.theme), getBoundOpacity(props, bound));
};

var trackColorStyle = function trackColorStyle(props) {
  // backward compatibility in case no bounds are defined
  if (props.theme.rangeInput && props.theme.rangeInput.track && !props.theme.rangeInput.track.lower && !props.theme.rangeInput.track.upper) {
    var color = getRGBA(normalizeColor(props.theme.rangeInput.track.color, props.theme), 0.2); // Since the track color was changed from border-with-opacity to just border
    // this condition is used to make sure we are applying the opacity correctly
    // for 'border' color (for backward compatibility purposes).

    if (color === 'rgba(0, 0, 0, 0.2)') return "background: " + color; // no bounds are defined but color may have changed

    return "background: " + getRGBA(normalizeColor(props.theme.rangeInput.track.color, props.theme), props.theme.rangeInput.track.opacity || 1);
  }

  var max = props.max || 100; // 'max' defaults to 100 in case not specified

  var min = props.min || 0; // 'min' defaults to 0 in case not specified

  var thumbPosition = (props.value - min) / (max - min) * 100 + "%";
  var lowerTrackColor = getBoundColor(props, 'lower');
  var upperTrackColor = getBoundColor(props, 'upper');
  return "background: linear-gradient(\n      to right,\n      " + lowerTrackColor + ",\n      " + lowerTrackColor + " " + thumbPosition + ",\n      " + upperTrackColor + " " + thumbPosition + ",\n      " + upperTrackColor + "\n    );\n  ";
};

var rangeTrackStyle = (0,styled_components_browser_esm.css)(["box-sizing:border-box;width:100%;height:", ";", ";", ""], function (props) {
  return props.theme.rangeInput.track.height;
}, function (props) {
  return trackColorStyle(props);
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.track && props.theme.rangeInput.track.extend;
});
var rangeThumbStyle = (0,styled_components_browser_esm.css)(["box-sizing:border-box;position:relative;border-radius:", ";height:", ";width:", ";overflow:visible;background:", ";-webkit-appearance:none;cursor:pointer;", ""], function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return normalizeColor(props.theme.rangeInput.thumb.color || 'control', props.theme);
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.thumb && props.theme.rangeInput.thumb.extend;
});
var firefoxMicrosoftThumbStyle = (0,styled_components_browser_esm.css)(["", " margin-top:0px;height:", ";width:", ";", ""], rangeThumbStyle, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.thumb && props.theme.rangeInput.thumb.extend;
});
/* eslint-disable max-len */

var StyledRangeInput = styled_components_browser_esm.default.input.withConfig({
  displayName: "StyledRangeInput",
  componentId: "sc-15st9ck-0"
})(["box-sizing:border-box;position:relative;-webkit-appearance:none;border-color:transparent;height:", ";width:100%;padding:0px;cursor:pointer;background:transparent;&::-moz-focus-inner{border:none;}&::-moz-focus-outer{border:none;}&::-webkit-slider-runnable-track{", "}&::-webkit-slider-thumb{margin-top:-", "px;", " ", "}&::-moz-range-track{", "}&::-moz-range-thumb{", "}&::-ms-thumb{", "}", " &::-ms-track{", " border-color:transparent;color:transparent;}&::-ms-fill-lower{", ";border-color:transparent;}&::-ms-fill-upper{", ";border-color:transparent;}", " ", ""], function (props) {
  return props.theme.global.spacing;
}, rangeTrackStyle, function (props) {
  return (parseMetricToNum(props.theme.global.spacing) - parseMetricToNum(props.theme.rangeInput.track.height || 0)) * 0.5;
}, rangeThumbStyle, function (props) {
  return !props.disabled && (0,styled_components_browser_esm.css)(["&:hover{box-shadow:0px 0px 0px 2px ", ";}"], normalizeColor(props.theme.rangeInput.thumb.color || 'control', props.theme));
}, rangeTrackStyle, firefoxMicrosoftThumbStyle, firefoxMicrosoftThumbStyle, function (props) {
  return !props.disabled && (0,styled_components_browser_esm.css)(["&:hover::-moz-range-thumb{box-shadow:0px 0px 0px 2px ", ";}&:hover::-ms-thumb{box-shadow:0px 0px 0px 2px ", ";}"], normalizeColor(props.theme.rangeInput.thumb.color || 'control', props.theme), normalizeColor(props.theme.rangeInput.thumb.color || 'control', props.theme));
}, rangeTrackStyle, function (props) {
  return trackColorStyle(props, 'lower');
}, function (props) {
  return trackColorStyle(props, 'upper');
}, function (props) {
  return props.focus && focusStyle();
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.extend;
});
/* eslint-enable max-len */

StyledRangeInput.defaultProps = {};
Object.setPrototypeOf(StyledRangeInput.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RangeInput/RangeInput.js
var RangeInput_excluded = ["a11yTitle", "name", "onChange", "onFocus", "onBlur", "value"];

function RangeInput_extends() {
  RangeInput_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RangeInput_extends.apply(this, arguments);
}

function RangeInput_objectWithoutPropertiesLoose(source, excluded) {
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




var RangeInput = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      name = _ref.name,
      _onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      valueProp = _ref.value,
      rest = RangeInput_objectWithoutPropertiesLoose(_ref, RangeInput_excluded);

  var formContext = (0,react.useContext)(FormContext);

  var _formContext$useFormI = formContext.useFormInput(name, valueProp),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1];

  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  return /*#__PURE__*/react.createElement(StyledRangeInput, RangeInput_extends({
    "aria-label": a11yTitle,
    ref: ref,
    name: name,
    focus: focus,
    value: value
  }, rest, {
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (_onBlur) _onBlur(event);
    },
    onChange: function onChange(event) {
      setValue(event.target.value);
      if (_onChange) _onChange(event);
    },
    type: "range"
  }));
});
RangeInput.displayName = 'RangeInput';
var RangeInputDoc;

if (false) {}

var RangeInputWrapper = RangeInputDoc || RangeInput;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RangeInput/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RangeSelector/EdgeControl.js
var EdgeControl_excluded = ["color", "direction", "edge", "onDecrease", "onIncrease", "thickness"];

function EdgeControl_extends() {
  EdgeControl_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return EdgeControl_extends.apply(this, arguments);
}

function EdgeControl_objectWithoutPropertiesLoose(source, excluded) {
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







var DIRECTION_PROPS = {
  horizontal: {
    cursor: 'col-resize',
    fill: 'vertical'
  },
  vertical: {
    cursor: 'row-resize',
    fill: 'horizontal'
  }
};
var EdgeControl_StyledBox = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "EdgeControl__StyledBox",
  componentId: "sc-1xo2yt9-0"
})(["", ""], function (props) {
  return props.focus && focusStyle();
});
var EdgeControl = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var color = _ref.color,
      direction = _ref.direction,
      edge = _ref.edge,
      onDecrease = _ref.onDecrease,
      onIncrease = _ref.onIncrease,
      thickness = _ref.thickness,
      rest = EdgeControl_objectWithoutPropertiesLoose(_ref, EdgeControl_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext);

  var _useState = (0,react.useState)(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var _DIRECTION_PROPS$dire = DIRECTION_PROPS[direction],
      cursor = _DIRECTION_PROPS$dire.cursor,
      fill = _DIRECTION_PROPS$dire.fill;
  var size = parseMetricToNum(theme.global.spacing) / 2;
  var keyboardProps = direction === 'vertical' ? {
    onUp: onDecrease,
    onDown: onIncrease
  } : {
    onLeft: onDecrease,
    onRight: onIncrease
  };
  var boxDirection = direction === 'vertical' ? 'row' : 'column';
  var type = theme.rangeSelector && theme.rangeSelector.edge && theme.rangeSelector.edge.type || 'disc';
  var node;
  var backgroundColor = normalizeColor(color || 'control', theme);

  if (type === 'bar') {
    node = /*#__PURE__*/react.createElement(EdgeControl_StyledBox, {
      flex: !thickness,
      justifySelf: "stretch",
      width: direction === 'vertical' ? thickness : size + "px",
      height: direction === 'vertical' ? size + "px" : thickness,
      background: backgroundColor,
      focus: focus
    });
  } else if (type === 'disc') {
    node = /*#__PURE__*/react.createElement(EdgeControl_StyledBox, {
      width: size + "px",
      height: size + "px",
      round: "full",
      background: backgroundColor,
      focus: focus
    });
  } else {
    node = type;
  }

  return /*#__PURE__*/react.createElement(KeyboardWrapper, keyboardProps, /*#__PURE__*/react.createElement(BoxWrapper, {
    direction: boxDirection,
    style: {
      flex: '0 0 1px'
    },
    overflow: "visible",
    align: "center",
    justify: "center",
    alignSelf: "stretch"
  }, /*#__PURE__*/react.createElement(BoxWrapper, EdgeControl_extends({
    ref: ref,
    direction: boxDirection,
    justify: "center",
    align: "center",
    basis: "full",
    fill: fill,
    style: {
      cursor: cursor,
      outline: 'none',
      minWidth: size,
      minHeight: size,
      zIndex: 10
    },
    tabIndex: 0,
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    }
  }, rest), node)));
});
EdgeControl.displayName = 'EdgeControl';
EdgeControl.defaultProps = {};
Object.setPrototypeOf(EdgeControl.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RangeSelector/RangeSelector.js
var RangeSelector_excluded = ["color", "direction", "invert", "max", "messages", "min", "onChange", "opacity", "round", "size", "step", "values"];

function RangeSelector_extends() {
  RangeSelector_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RangeSelector_extends.apply(this, arguments);
}

function RangeSelector_objectWithoutPropertiesLoose(source, excluded) {
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







var Container = (0,styled_components_browser_esm.default)(BoxWrapper).withConfig({
  displayName: "RangeSelector__Container",
  componentId: "siof5p-0"
})(["user-select:none;"]);
var RangeSelector = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var color = _ref.color,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
      invert = _ref.invert,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      messages = _ref.messages,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      onChange = _ref.onChange,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 'medium' : _ref$opacity,
      round = _ref.round,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? [] : _ref$values,
      rest = RangeSelector_objectWithoutPropertiesLoose(_ref, RangeSelector_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || defaultProps.theme;

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format;

  var _useState = (0,react.useState)(),
      changing = _useState[0],
      setChanging = _useState[1];

  var _useState2 = (0,react.useState)(),
      lastChange = _useState2[0],
      setLastChange = _useState2[1];

  var _useState3 = (0,react.useState)(),
      moveValue = _useState3[0],
      setMoveValue = _useState3[1];

  var containerRef = (0,react.useRef)();
  var valueForMouseCoord = (0,react.useCallback)(function (event) {
    var rect = containerRef.current.getBoundingClientRect();
    var value;

    if (direction === 'vertical') {
      // there is no x and y in unit testing
      var y = event.clientY - (rect.top || 0); // test resilience

      var scaleY = rect.height / (max - min + 1) || 1; // test resilience

      value = Math.floor(y / scaleY) + min;
    } else {
      var x = event.clientX - (rect.left || 0); // test resilience

      var scaleX = rect.width / (max - min + 1) || 1; // test resilience

      value = Math.floor(x / scaleX) + min;
    } // align with closest step within [min, max]


    var result = Math.ceil(value / step) * step;

    if (result < min) {
      return min;
    }

    if (result > max) {
      return max;
    }

    return result;
  }, [direction, max, min, step]);
  var onMouseMove = (0,react.useCallback)(function (event) {
    var value = valueForMouseCoord(event);
    var nextValues;

    if (changing === 'lower' && value <= values[1] && value !== moveValue) {
      nextValues = [value, values[1]];
    } else if (changing === 'upper' && value >= values[0] && value !== moveValue) {
      nextValues = [values[0], value];
    } else if (changing === 'selection' && value !== moveValue) {
      if (value === max) {
        nextValues = [max - (values[1] - values[0]), max];
      } else if (value === min) {
        nextValues = [min, min + (values[1] - values[0])];
      } else {
        var delta = value - moveValue;

        if (values[0] + delta >= min && values[1] + delta <= max) {
          nextValues = [values[0] + delta, values[1] + delta];
        }
      }
    }

    if (nextValues) {
      setMoveValue(value);
      onChange(nextValues);
    }
  }, [values, changing, moveValue, max, min, setMoveValue, onChange, valueForMouseCoord]);
  (0,react.useEffect)(function () {
    var onMouseUp = function onMouseUp() {
      return setChanging(undefined);
    };

    if (changing) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      return function () {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };
    }

    return undefined;
  }, [changing, onMouseMove]);
  var onClick = (0,react.useCallback)(function (event) {
    var value = valueForMouseCoord(event);

    if (value <= values[0] || value < values[1] && lastChange === 'lower') {
      setLastChange('lower');
      onChange([value, values[1]]);
    } else if (value >= values[1] || value > values[0] && lastChange === 'upper') {
      setLastChange('upper');
      onChange([values[0], value]);
    }
  }, [lastChange, onChange, valueForMouseCoord, values]);
  var onTouchMove = (0,react.useCallback)(function (event) {
    var touchEvent = event.changedTouches[0];
    onMouseMove(touchEvent);
  }, [onMouseMove]);
  var lower = values[0],
      upper = values[1]; // It needs to be true when vertical, due to how browsers manage height
  // const fill = direction === 'vertical' ? true : 'horizontal';

  var thickness = size === 'full' ? undefined : parseMetricToNum(theme.global.edgeSize[size] || size) + "px";
  var layoutProps = {
    fill: direction,
    round: round
  };
  if (direction === 'vertical') layoutProps.width = thickness;else layoutProps.height = thickness;
  if (size === 'full') layoutProps.alignSelf = 'stretch';
  return /*#__PURE__*/react.createElement(Container, RangeSelector_extends({
    ref: containerRef,
    direction: direction === 'vertical' ? 'column' : 'row',
    align: "center",
    fill: true
  }, rest, {
    tabIndex: "-1",
    onClick: onChange ? onClick : undefined,
    onTouchMove: onChange ? onTouchMove : undefined
  }), /*#__PURE__*/react.createElement(BoxWrapper, RangeSelector_extends({
    style: {
      flex: lower - min + " 0 0"
    },
    background: invert ? // preserve existing dark, instead of using darknes
    // of this color
    {
      color: color || theme.rangeSelector.background.invert.color,
      opacity: opacity,
      dark: theme.dark
    } : undefined
  }, layoutProps)), /*#__PURE__*/react.createElement(EdgeControl, {
    a11yTitle: format({
      id: 'rangeSelector.lower',
      messages: messages
    }),
    tabIndex: 0,
    ref: ref,
    color: color,
    direction: direction,
    thickness: thickness,
    edge: "lower",
    onMouseDown: onChange ? function () {
      return setChanging('lower');
    } : undefined,
    onTouchStart: onChange ? function () {
      return setChanging('lower');
    } : undefined,
    onDecrease: onChange && lower - step >= min ? function () {
      return onChange([lower - step, upper]);
    } : undefined,
    onIncrease: onChange && lower + step <= upper ? function () {
      return onChange([lower + step, upper]);
    } : undefined
  }), /*#__PURE__*/react.createElement(BoxWrapper, RangeSelector_extends({
    style: {
      flex: upper - lower + 1 + " 0 0",
      cursor: direction === 'vertical' ? 'ns-resize' : 'ew-resize'
    },
    background: invert ? undefined : // preserve existing dark, instead of using darknes of
    // this color
    {
      color: color || 'control',
      opacity: opacity,
      dark: theme.dark
    }
  }, layoutProps, {
    onMouseDown: onChange ? function (event) {
      var nextMoveValue = valueForMouseCoord(event);
      setChanging('selection');
      setMoveValue(nextMoveValue);
    } : undefined
  })), /*#__PURE__*/react.createElement(EdgeControl, {
    a11yTitle: format({
      id: 'rangeSelector.upper',
      messages: messages
    }),
    tabIndex: 0,
    color: color,
    direction: direction,
    thickness: thickness,
    edge: "upper",
    onMouseDown: onChange ? function () {
      return setChanging('upper');
    } : undefined,
    onTouchStart: onChange ? function () {
      return setChanging('upper');
    } : undefined,
    onDecrease: onChange && upper - step >= lower ? function () {
      return onChange([lower, upper - step]);
    } : undefined,
    onIncrease: onChange && upper + step <= max ? function () {
      return onChange([lower, upper + step]);
    } : undefined
  }), /*#__PURE__*/react.createElement(BoxWrapper, RangeSelector_extends({
    style: {
      flex: max - upper + " 0 0"
    },
    background: invert ? // preserve existing dark, instead of using darknes of this
    // color
    {
      color: color || theme.rangeSelector.background.invert.color,
      opacity: opacity,
      dark: theme.dark
    } : undefined
  }, layoutProps, {
    round: round
  })));
});
RangeSelector.displayName = 'RangeSelector';
var RangeSelectorDoc;

if (false) {}

var RangeSelectorWrapper = RangeSelectorDoc || RangeSelector;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RangeSelector/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RoutedAnchor/RoutedAnchor.js
var RoutedAnchor_excluded = ["path", "method"];

function RoutedAnchor_extends() {
  RoutedAnchor_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RoutedAnchor_extends.apply(this, arguments);
}

function RoutedAnchor_objectWithoutPropertiesLoose(source, excluded) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}





var RoutedAnchor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(RoutedAnchor, _Component);

  function RoutedAnchor() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RoutedAnchor.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        path = _this$props.path,
        method = _this$props.method,
        rest = RoutedAnchor_objectWithoutPropertiesLoose(_this$props, RoutedAnchor_excluded);

    if (false) {}

    return /*#__PURE__*/react.createElement(Anchor, RoutedAnchor_extends({}, rest, {
      href: path,
      onClick: function onClick(event) {
        var onClick = _this.props.onClick;
        var router = _this.context.router;

        if (event) {
          var modifierKey = event.ctrlKey || event.metaKey; // if the user right-clicked in the Anchor we should let it go

          if (modifierKey) {
            return;
          }
        }

        if (router) {
          event.preventDefault();
          (router.history || router)[method](path);
        }

        if (onClick) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          onClick.apply(void 0, [event].concat(args));
        }
      }
    }));
  };

  return RoutedAnchor;
}(react.Component);

RoutedAnchor.contextTypes = {
  router: prop_types_default().shape({}).isRequired
};
RoutedAnchor.defaultProps = {
  method: 'push'
};
var RoutedAnchorDoc;

if (false) {}

var RoutedAnchorWrapper = RoutedAnchorDoc || RoutedAnchor;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RoutedAnchor/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RoutedButton/RoutedButton.js
var RoutedButton_excluded = ["href", "path", "method", "onClick"];

function RoutedButton_extends() {
  RoutedButton_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return RoutedButton_extends.apply(this, arguments);
}

function RoutedButton_objectWithoutPropertiesLoose(source, excluded) {
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

function RoutedButton_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  RoutedButton_setPrototypeOf(subClass, superClass);
}

function RoutedButton_setPrototypeOf(o, p) {
  RoutedButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return RoutedButton_setPrototypeOf(o, p);
}





var RoutedButton = /*#__PURE__*/function (_Component) {
  RoutedButton_inheritsLoose(RoutedButton, _Component);

  function RoutedButton() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;

    _this.onClick = function (event) {
      var _this$props = _this.props,
          method = _this$props.method,
          onClick = _this$props.onClick,
          path = _this$props.path;
      var router = _this.context.router;

      if (event) {
        var modifierKey = event.ctrlKey || event.metaKey; // if the user right-clicked in the button we should let it go

        if (modifierKey) {
          return;
        }
      }

      if (router) {
        event.preventDefault();
        (router.history || router)[method](path);
      }

      if (onClick) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        onClick.apply(void 0, [event].concat(args));
      }
    };

    return _this;
  }

  var _proto = RoutedButton.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        href = _this$props2.href,
        path = _this$props2.path,
        method = _this$props2.method,
        onClick = _this$props2.onClick,
        rest = RoutedButton_objectWithoutPropertiesLoose(_this$props2, RoutedButton_excluded);

    if (false) {}

    return /*#__PURE__*/react.createElement(ButtonWrapper, RoutedButton_extends({}, rest, {
      href: path || href,
      disabled: !path && !onClick,
      onClick: this.onClick
    }));
  };

  return RoutedButton;
}(react.Component);

RoutedButton.contextTypes = {
  router: prop_types_default().shape({}).isRequired
};
RoutedButton.defaultProps = {
  method: 'push'
};
var RoutedButtonDoc;

if (false) {}

var RoutedButtonWrapper = RoutedButtonDoc || RoutedButton;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/RoutedButton/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Select/StyledSelect.js


var StyledSelect_StyledContainer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledSelect__StyledContainer",
  componentId: "znp66n-0"
})(["@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}", ";", ";"], function (props) {
  return props.dropHeight ? sizeStyle('max-height', props.dropHeight, props.theme) : 'max-height: inherit;';
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
function SelectContainer_extends() {
  SelectContainer_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SelectContainer_extends.apply(this, arguments);
}












 // position relative is so scroll can be managed correctly

var OptionsBox = styled_components_browser_esm.default.div.withConfig({
  displayName: "SelectContainer__OptionsBox",
  componentId: "sc-1wi0ul8-0"
})(["position:relative;scroll-behavior:smooth;overflow:auto;outline:none;"]);
var SelectOption = (0,styled_components_browser_esm.default)(ButtonWrapper).withConfig({
  displayName: "SelectContainer__SelectOption",
  componentId: "sc-1wi0ul8-1"
})(["", " display:block;width:100%;"], function (props) {
  return props.selected && props.textComponent && selectedStyle;
});

var ClearButton = function ClearButton(_ref) {
  var clear = _ref.clear,
      onClear = _ref.onClear,
      name = _ref.name,
      theme = _ref.theme,
      setFocus = _ref.setFocus;
  var label = clear.label,
      position = clear.position;
  var align = position !== 'bottom' ? 'start' : 'center';
  var buttonLabel = label || "Clear " + (name || 'selection');
  return /*#__PURE__*/react.createElement(ButtonWrapper, {
    onClick: onClear,
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    }
  }, /*#__PURE__*/react.createElement(BoxWrapper, SelectContainer_extends({}, theme.select.clear.container, {
    align: align
  }), /*#__PURE__*/react.createElement(TextWrapper, theme.select.clear.text, buttonLabel)));
};

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
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? '' : _ref2$value,
      valueKey = _ref2.valueKey,
      _ref2$replace = _ref2.replace,
      replace = _ref2$replace === void 0 ? true : _ref2$replace;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)(-1),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = (0,react.useState)(),
      keyboardNavigation = _useState2[0],
      setKeyboardNavigation = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      focus = _useState3[0],
      setFocus = _useState3[1];

  var searchRef = (0,react.useRef)();
  var optionsRef = (0,react.useRef)(); // adjust activeIndex when options change

  (0,react.useEffect)(function () {
    if (activeIndex === -1 && search && optionIndexesInValue.length) {
      setActiveIndex(optionIndexesInValue[0]);
    }
  }, [activeIndex, optionIndexesInValue, search]); // set initial focus

  (0,react.useEffect)(function () {
    // need to wait for Drop to be ready
    var timer = setTimeout(function () {
      var optionsNode = optionsRef.current;

      if (onSearch) {
        var searchInput = searchRef.current;

        if (searchInput && searchInput.focus) {
          setFocusWithoutScroll(searchInput);
        }
      } else if (optionsNode) {
        setFocusWithoutScroll(optionsNode);
      }
    }, 100);
    return function () {
      return clearTimeout(timer);
    };
  }, [onSearch]); // clear keyboardNavigation after a while

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

    while (nextActiveIndex < options.length && isDisabled(nextActiveIndex)) {
      nextActiveIndex += 1;
    }

    if (nextActiveIndex !== options.length) {
      setActiveIndex(nextActiveIndex);
      setKeyboardNavigation(true);
    }
  }, [activeIndex, isDisabled, options]);
  var onPreviousOption = (0,react.useCallback)(function (event) {
    event.preventDefault();
    var nextActiveIndex = activeIndex - 1;

    while (nextActiveIndex >= 0 && isDisabled(nextActiveIndex)) {
      nextActiveIndex -= 1;
    }

    if (nextActiveIndex >= 0) {
      setActiveIndex(nextActiveIndex);
      setKeyboardNavigation(true);
    }
  }, [activeIndex, isDisabled]);
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
    if (activeIndex >= 0 && !focus) {
      event.preventDefault(); // prevent submitting forms

      selectOption(activeIndex)(event);
    }
  }, [activeIndex, selectOption, focus]);
  var customSearchInput = theme.select.searchInput;
  var SelectTextInput = customSearchInput || TextInputWrapper;
  var selectOptionsStyle = theme.select.options ? SelectContainer_extends({}, theme.select.options.box, theme.select.options.container) : {};
  return /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onEnter: onSelectOption,
    onUp: onPreviousOption,
    onDown: onNextOption,
    onKeyDown: onKeyDownOption
  }, /*#__PURE__*/react.createElement(StyledSelect_StyledContainer, {
    ref: ref,
    as: BoxWrapper,
    id: id ? id + "__select-drop" : undefined,
    dropHeight: dropHeight
  }, onSearch && /*#__PURE__*/react.createElement(BoxWrapper, {
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
  })), clear && clear.position !== 'bottom' && value && /*#__PURE__*/react.createElement(ClearButton, {
    clear: clear,
    name: name,
    onClear: onClear,
    theme: theme,
    setFocus: setFocus
  }), /*#__PURE__*/react.createElement(OptionsBox, {
    role: "menubar",
    tabIndex: "-1",
    ref: optionsRef
  }, options.length > 0 ? /*#__PURE__*/react.createElement(InfiniteScrollWrapper, {
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
      child = /*#__PURE__*/react.createElement(BoxWrapper, selectOptionsStyle, /*#__PURE__*/react.createElement(TextWrapper, theme.select.options.text, optionLabel(index)));
      textComponent = true;
    } // if we have a child, turn on plain, and hoverIndicator


    return /*#__PURE__*/react.createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
    , {
      key: index,
      ref: optionRef,
      tabIndex: "-1",
      role: "menuitem",
      plain: !child ? undefined : true,
      align: "start",
      kind: !child ? 'option' : undefined,
      hoverIndicator: !child ? undefined : 'background',
      label: !child ? optionLabel(index) : undefined,
      disabled: optionDisabled || undefined,
      active: optionActive,
      selected: optionSelected,
      option: option,
      onMouseOver: !optionDisabled ? onActiveOption(index) : undefined,
      onClick: !optionDisabled ? selectOption(index) : undefined,
      textComponent: textComponent
    }, child);
  }) : /*#__PURE__*/react.createElement(SelectOption, {
    key: "search_empty",
    tabIndex: "-1",
    role: "menuitem",
    hoverIndicator: "background",
    disabled: true,
    option: emptySearchMessage
  }, /*#__PURE__*/react.createElement(BoxWrapper, selectOptionsStyle, /*#__PURE__*/react.createElement(TextWrapper, theme.select.container.text, emptySearchMessage)))), clear && clear.position === 'bottom' && value && /*#__PURE__*/react.createElement(ClearButton, {
    clear: clear,
    name: name,
    onClear: onClear,
    theme: theme,
    setFocus: setFocus
  })));
});

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Select/Select.js
var Select_excluded = ["a11yTitle", "aria-label", "alignSelf", "children", "clear", "closeOnChange", "defaultValue", "disabled", "disabledKey", "dropAlign", "dropHeight", "dropProps", "dropTarget", "emptySearchMessage", "focusIndicator", "gridArea", "id", "icon", "labelKey", "margin", "messages", "multiple", "name", "onChange", "onClick", "onClose", "onKeyDown", "onMore", "onOpen", "onSearch", "open", "options", "placeholder", "plain", "replace", "searchPlaceholder", "selected", "size", "value", "valueKey", "valueLabel"];

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

function Select_objectWithoutPropertiesLoose(source, excluded) {
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













var SelectTextInput = (0,styled_components_browser_esm.default)(TextInputWrapper).withConfig({
  displayName: "Select__SelectTextInput",
  componentId: "sc-17idtfo-0"
})(["cursor:", ";"], function (props) {
  return props.defaultCursor ? 'default' : 'pointer';
});
var HiddenInput = styled_components_browser_esm.default.input.withConfig({
  displayName: "Select__HiddenInput",
  componentId: "sc-17idtfo-1"
})(["display:none;"]);
var StyledSelectDropButton = (0,styled_components_browser_esm.default)(DropButtonWrapper).withConfig({
  displayName: "Select__StyledSelectDropButton",
  componentId: "sc-17idtfo-2"
})(["", ";", ";", ";"], function (props) {
  return !props.callerPlain && controlBorderStyle;
}, function (props) {
  return props.theme.select && props.theme.select.control && props.theme.select.control.extend;
}, function (props) {
  return props.open && props.theme.select.control.open;
});
StyledSelectDropButton.defaultProps = {};
Object.setPrototypeOf(StyledSelectDropButton.defaultProps, default_props_defaultProps);
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
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      onClose = _ref.onClose,
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

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var inputRef = (0,react.useRef)();
  var formContext = (0,react.useContext)(FormContext);

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format; // value is used for what we receive in valueProp and the basis for
  // what we send with onChange
  // When 'valueKey' sets 'reduce', the value(s) here should match
  // what the 'valueKey' would return for the corresponding
  // selected option object.
  // Otherwise, the value(s) should match the selected options.


  var _formContext$useFormI = formContext.useFormInput(name, valueProp, defaultValue || ''),
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

  var _useState = (0,react.useState)(),
      search = _useState[0],
      setSearch = _useState[1]; // All select option indices and values


  var _useState2 = (0,react.useState)(optionsProp),
      allOptions = _useState2[0],
      setAllOptions = _useState2[1]; // Track changes to options property, except when options are being
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

  var _useState3 = (0,react.useState)(propOpen),
      open = _useState3[0],
      setOpen = _useState3[1];

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
    if (valueLabel) return valueLabel;
    if ( /*#__PURE__*/react.isValidElement(value)) return value; // deprecated

    return undefined;
  }, [value, valueLabel]); // text to show
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
  var iconColor = normalizeColor(theme.select.icons.color || 'control', theme);
  return /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onDown: onRequestOpen,
    onUp: onRequestOpen
  }, /*#__PURE__*/react.createElement(StyledSelectDropButton, {
    ref: ref,
    a11yTitle: ariaLabel || a11yTitle,
    id: id,
    disabled: disabled === true || undefined,
    dropAlign: dropAlign,
    dropTarget: dropTarget,
    open: open,
    alignSelf: alignSelf,
    focusIndicator: focusIndicator,
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
      value: value,
      valueKey: valueKey
    }, children) // StyledDropButton needs to know if the border should be shown
    ,
    callerPlain: plain,
    plain: true // Button should be plain
    ,
    dropProps: dropProps,
    theme: theme
  }, /*#__PURE__*/react.createElement(BoxWrapper, {
    align: "center",
    direction: "row",
    justify: "between",
    background: theme.select.background
  }, /*#__PURE__*/react.createElement(BoxWrapper, {
    direction: "row",
    flex: true,
    basis: "auto"
  }, selectValue ? /*#__PURE__*/react.createElement(react.Fragment, null, selectValue, /*#__PURE__*/react.createElement(HiddenInput, {
    type: "text",
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
  }))), SelectIcon && /*#__PURE__*/react.createElement(BoxWrapper, {
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
Select.defaultProps = Select_extends({}, default_props_defaultProps);
Select.displayName = 'Select';
var SelectDoc;

if (false) {}

var SelectWrapper = SelectDoc || Select;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Select/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Sidebar/Sidebar.js
var Sidebar_excluded = ["children", "footer", "header"];

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

function Sidebar_objectWithoutPropertiesLoose(source, excluded) {
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




var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      footer = _ref.footer,
      header = _ref.header,
      rest = Sidebar_objectWithoutPropertiesLoose(_ref, Sidebar_excluded);

  return /*#__PURE__*/react.createElement(BoxWrapper, Sidebar_extends({
    pad: "small",
    gap: "large",
    height: {
      min: '100%'
    }
  }, rest), header, /*#__PURE__*/react.createElement(BoxWrapper, {
    flex: true
  }, children), footer);
};
Sidebar.propTypes = {
  children: (prop_types_default()).node,
  footer: (prop_types_default()).node,
  header: (prop_types_default()).node
};
Sidebar.defaultProps = {
  children: undefined,
  footer: undefined,
  header: undefined
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Sidebar/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/SkipLink/SkipLink.js
var SkipLink_excluded = ["id", "label"];

function SkipLink_extends() {
  SkipLink_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SkipLink_extends.apply(this, arguments);
}

function SkipLink_objectWithoutPropertiesLoose(source, excluded) {
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



var SkipLink = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
      label = _ref.label,
      rest = SkipLink_objectWithoutPropertiesLoose(_ref, SkipLink_excluded);

  return /*#__PURE__*/react.createElement(Anchor, SkipLink_extends({
    href: "#" + id,
    ref: ref,
    label: label
  }, rest));
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/SkipLink/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/SkipLinks/SkipLinks.js








var SkipLinks = function SkipLinks(_ref) {
  var children = _ref.children,
      id = _ref.id,
      messages = _ref.messages;
  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)(false),
      showLayer = _useState[0],
      setShowLayer = _useState[1];

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format;

  var layerRef = (0,react.useRef)(null);

  var onFocus = function onFocus() {
    setShowLayer(true);
  };

  var removeLayer = function removeLayer() {
    setShowLayer(false);
  };

  var onBlur = function onBlur() {
    // timeout needed so it gives enough time for activeElement to be updated
    setTimeout(function () {
      var layerNode = layerRef.current;

      if (layerNode && !layerNode.contains(document.activeElement)) {
        // close the layer when the activeElement isn't contained in the layer
        removeLayer();
      }
    }, 0);
  };

  return /*#__PURE__*/react.createElement(LayerWrapper, {
    id: id,
    position: showLayer ? theme.skipLinks.position : 'hidden',
    ref: layerRef,
    onFocus: onFocus,
    onBlur: onBlur,
    modal: false // Prepend the Layer so any SkipLink will be the first element that
    // pressing the Tab key reaches, targetChildPosition triggers prepend.
    ,
    targetChildPosition: "first" // Non-modal Layer's will take the full screen at small breakpoints
    // by default, which isn't what we want, hence setting responsive false
    ,
    responsive: false
  }, /*#__PURE__*/react.createElement(BoxWrapper, theme.skipLinks.container, /*#__PURE__*/react.createElement(TextWrapper, theme.skipLinks.label, format({
    id: 'skipLinks.skipTo',
    messages: messages
  })), /*#__PURE__*/react.createElement(BoxWrapper, {
    align: "center",
    gap: "medium"
  }, react.Children.map(children, function (child, index) {
    return /*#__PURE__*/(0,react.cloneElement)(child, {
      key: "skip-link-" + index,
      onClick: removeLayer
    });
  }))));
};

SkipLinks.defaultProps = {};
var SkipLinksDoc;

if (false) {}

var SkipLinksWrapper = SkipLinksDoc || SkipLinks;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/SkipLinks/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/SkipLinkTarget/SkipLinkTarget.js
var SkipLinkTarget_excluded = ["label"];

function SkipLinkTarget_extends() {
  SkipLinkTarget_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return SkipLinkTarget_extends.apply(this, arguments);
}

function SkipLinkTarget_objectWithoutPropertiesLoose(source, excluded) {
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




var SkipLinkTarget_HiddenAnchor = (0,styled_components_browser_esm.default)(Anchor).withConfig({
  displayName: "SkipLinkTarget__HiddenAnchor",
  componentId: "sc-16wjfgk-0"
})(["width:0;height:0;overflow:hidden;position:absolute;"]);
var SkipLinkTarget = function SkipLinkTarget(_ref) {
  var label = _ref.label,
      rest = SkipLinkTarget_objectWithoutPropertiesLoose(_ref, SkipLinkTarget_excluded);

  return /*#__PURE__*/react.createElement(SkipLinkTarget_HiddenAnchor, SkipLinkTarget_extends({}, rest, {
    tabIndex: "-1",
    "aria-hidden": "true"
  }), label);
};
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/SkipLinkTarget/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Spinner/Spinner.js
var Spinner_excluded = ["ref", "size"],
    Spinner_excluded2 = ["children", "color", "size", "message"],
    Spinner_excluded3 = ["size", "color"];

function Spinner_extends() {
  Spinner_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Spinner_extends.apply(this, arguments);
}

function Spinner_objectWithoutPropertiesLoose(source, excluded) {
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







var BasicSpinner = function BasicSpinner(_ref) {
  var ref = _ref.ref,
      size = _ref.size,
      rest = Spinner_objectWithoutPropertiesLoose(_ref, Spinner_excluded);

  return /*#__PURE__*/react.createElement(BoxWrapper, Spinner_extends({
    height: size,
    width: size,
    ref: ref
  }, rest));
};
/**
 * If the user is calling <Spinner>…</Spinner> with children, it will take
 * precedence over theme styling. Yet, it will still inherit the
 * default animation and size of the spinner, and of course any additional
 * given props.
 *
 * If the user is providing an icon/svg via the theme.spinner.icon,
 * the Spinner will use it as a child and will include all its relevant
 * theme props (size/color/pad…) as well,
 * user will only need to type <Spinner />.
 * If the icon has its own animation, user can turn it off via the theme.
 *
 * If none of the above is provider, <Spinner /> will provide its default
 * border, size and friends, all configurable via theme or props.
 */


var Spinner = /*#__PURE__*/(0,react.forwardRef)(function (_ref2, ref) {
  var children = _ref2.children,
      colorProp = _ref2.color,
      size = _ref2.size,
      message = _ref2.message,
      rest = Spinner_objectWithoutPropertiesLoose(_ref2, Spinner_excluded2);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;
  var announce = (0,react.useContext)(AnnounceContext);
  (0,react.useEffect)(function () {
    if (message != null && message.start) announce(message.start);else if (typeof message === 'string') announce(message);
    return function () {
      return (message == null ? void 0 : message.end) && announce(message.end);
    };
  }, [announce, message]); // Avoid color and size leaking into the DOM

  var _theme$spinner$contai = theme.spinner.container,
      sizeThemeProp = _theme$spinner$contai.size,
      colorThemeProp = _theme$spinner$contai.color,
      themeProps = Spinner_objectWithoutPropertiesLoose(_theme$spinner$contai, Spinner_excluded3);

  var normalizedSize = size || sizeThemeProp;
  var spinnerSize = theme.spinner.size[normalizedSize] || normalizedSize;
  var color = colorProp || colorThemeProp;
  var Icon = theme.spinner.icon; // children will take precedence over theme attributes

  if (children) {
    return /*#__PURE__*/react.createElement(BasicSpinner, Spinner_extends({
      size: spinnerSize,
      ref: ref
    }, rest), children);
  } // In case icon is provided by the theme


  if (Icon) return /*#__PURE__*/react.createElement(BasicSpinner, Spinner_extends({
    size: spinnerSize,
    ref: ref
  }, themeProps, rest), /*#__PURE__*/(0,react.isValidElement)(Icon) ? Icon : /*#__PURE__*/react.createElement(Icon, {
    size: spinnerSize,
    color: color
  }));
  return /*#__PURE__*/react.createElement(BasicSpinner, Spinner_extends({
    size: spinnerSize,
    ref: ref,
    border: [{
      side: 'all',
      color: 'background-contrast',
      size: size
    }, {
      side: 'top',
      color: color,
      size: size
    }]
  }, themeProps, rest));
});
Spinner.displayName = 'Spinner';
var SpinnerDoc;

if (false) {}

var SpinnerWrapper = SpinnerDoc || Spinner;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Spinner/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Stack/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Table/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableBody/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableCell/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableFooter/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableHeader/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TableRow/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tabs/TabsContext.js

var TabsContext = /*#__PURE__*/react.createContext({});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tab/StyledTab.js



var tabHoverStyle = (0,styled_components_browser_esm.css)(["&:hover{", " ", " ", ";}"], function (props) {
  return props.theme.tab.hover.background && (0,styled_components_browser_esm.css)(["background:", ";"], normalizeColor(props.theme.tab.hover.background, props.theme));
}, function (props) {
  return props.theme.tab.hover.color && (0,styled_components_browser_esm.css)(["color:", ";"], normalizeColor(props.theme.tab.hover.color, props.theme));
}, function (props) {
  return props.theme.tab.hover.extend;
});
var StyledTab = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledTab",
  componentId: "sc-1nnwnsb-0"
})(["", " ", " ", " ", ""], genericStyles, function (props) {
  return !props.plain && !props.disabled && props.theme.tab.hover && tabHoverStyle;
}, function (props) {
  return props.disabled && props.theme.tab.disabled;
}, function (props) {
  return props.theme.tab.extend;
});
StyledTab.defaultProps = {};
Object.setPrototypeOf(StyledTab.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tab/Tab.js
var Tab_excluded = ["active", "disabled", "children", "icon", "plain", "title", "onMouseOver", "onMouseOut", "reverse"];

function Tab_extends() {
  Tab_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tab_extends.apply(this, arguments);
}

function Tab_objectWithoutPropertiesLoose(source, excluded) {
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










var Tab = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var activeProp = _ref.active,
      disabled = _ref.disabled,
      children = _ref.children,
      icon = _ref.icon,
      plain = _ref.plain,
      title = _ref.title,
      onMouseOver = _ref.onMouseOver,
      onMouseOut = _ref.onMouseOut,
      reverse = _ref.reverse,
      rest = Tab_objectWithoutPropertiesLoose(_ref, Tab_excluded);

  var _useContext = (0,react.useContext)(TabsContext),
      active = _useContext.active,
      activeIndex = _useContext.activeIndex,
      onActivate = _useContext.onActivate,
      setActiveContent = _useContext.setActiveContent,
      setActiveTitle = _useContext.setActiveTitle;

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useState = (0,react.useState)(undefined),
      over = _useState[0],
      setOver = _useState[1];

  var _useState2 = (0,react.useState)(undefined),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var normalizedTitle = title;
  var tabStyles = {};
  (0,react.useEffect)(function () {
    if (active) {
      setActiveContent(children);
      var activeTitle = typeof title === 'string' ? title : activeIndex + 1;
      setActiveTitle(activeTitle);
    }
  }, [active, activeIndex, children, setActiveContent, setActiveTitle, title]);

  var onMouseOverTab = function onMouseOverTab(event) {
    setOver(true);

    if (onMouseOver) {
      onMouseOver(event);
    }
  };

  var onMouseOutTab = function onMouseOutTab(event) {
    setOver(undefined);

    if (onMouseOut) {
      onMouseOut(event);
    }
  };

  var onClickTab = function onClickTab(event) {
    if (event) {
      event.preventDefault();
    }

    onActivate();
  };

  if (active && disabled) {
    console.warn( // eslint-disable-next-line max-len
    "Warning: Tab props 'active' and 'disabled' have both been set to TRUE on the same Tab resulting in an interesting Tab state. Is this your intent?");
  }

  if (!plain) {
    if (typeof title !== 'string') {
      normalizedTitle = title;
    } else if (active) {
      normalizedTitle = /*#__PURE__*/react.createElement(TextWrapper, theme.tab.active, title);
    } else if (disabled && theme.tab.disabled) {
      normalizedTitle = /*#__PURE__*/react.createElement(TextWrapper, theme.tab.disabled, title);
    } else {
      normalizedTitle = /*#__PURE__*/react.createElement(TextWrapper, {
        color: over ? theme.tab.hover.color : theme.tab.color
      }, title);
    }

    if (theme.tab.border) {
      var borderColor = theme.tab.border.color || theme.global.control.border.color;

      if (active) {
        borderColor = theme.tab.border.active.color || borderColor;
      } else if (disabled && theme.tab.border.disabled) {
        borderColor = theme.tab.border.disabled.color || borderColor;
      } else if (over) {
        borderColor = theme.tab.border.hover.color || borderColor;
      }

      borderColor = normalizeColor(borderColor, theme);
      tabStyles.border = {
        side: theme.tab.border.side,
        size: theme.tab.border.size,
        color: borderColor
      };
    }

    tabStyles.background = active ? theme.tab.active.background || theme.tab.background : theme.tab.background;
    tabStyles.pad = theme.tab.pad;
    tabStyles.margin = theme.tab.margin;
  } // needed to apply hover/active styles to the icon


  var renderIcon = function renderIcon(iconProp) {
    if (active) {
      return /*#__PURE__*/react.cloneElement(iconProp, Tab_extends({}, theme.tab.active));
    }

    if (disabled) {
      return /*#__PURE__*/react.cloneElement(iconProp, Tab_extends({}, theme.tab.disabled));
    }

    return /*#__PURE__*/react.cloneElement(iconProp, {
      color: over ? theme.tab.hover.color : theme.tab.color
    });
  };

  var normalizedIcon;

  if (icon) {
    normalizedIcon = renderIcon(icon);
  }

  var first = reverse ? normalizedTitle : normalizedIcon;
  var second = reverse ? normalizedIcon : normalizedTitle;
  var withIconStyles;

  if (first && second) {
    withIconStyles = {
      direction: 'row',
      align: 'center',
      justify: 'center',
      gap: 'small'
    };
  }

  return /*#__PURE__*/react.createElement(ButtonWrapper, Tab_extends({
    ref: ref,
    plain: true,
    role: "tab",
    "aria-selected": active,
    "aria-expanded": active,
    disabled: disabled
  }, rest, {
    onClick: onClickTab,
    onMouseOver: onMouseOverTab,
    onMouseOut: onMouseOutTab,
    onFocus: function onFocus() {
      setFocus(true);
      if (onMouseOver) onMouseOver();
    },
    onBlur: function onBlur() {
      setFocus(undefined);
      if (onMouseOut) onMouseOut();
    } // ensure focus outline is not covered by hover styling
    // of adjacent tabs
    ,
    style: focus && {
      zIndex: 1
    }
  }), /*#__PURE__*/react.createElement(StyledTab, Tab_extends({
    as: BoxWrapper,
    disabled: disabled,
    plain: plain
  }, withIconStyles, tabStyles), first, second));
});
Tab.displayName = 'Tab';
Tab.defaultProps = {};
Object.setPrototypeOf(Tab.defaultProps, default_props_defaultProps);
var TabDoc;

if (false) {}

var TabWrapper = TabDoc || Tab;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tab/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tabs/StyledTabs.js
var StyledTabs_FLEX_MAP;




var StyledTabsHeader = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledTabs__StyledTabsHeader",
  componentId: "a4fwxl-0"
})(["", ";"], function (props) {
  return props.theme.tabs.header.extend;
});
StyledTabsHeader.defaultProps = {};
Object.setPrototypeOf(StyledTabsHeader.defaultProps, default_props_defaultProps);
var Tabs_StyledTabs_FLEX_MAP = (StyledTabs_FLEX_MAP = {}, StyledTabs_FLEX_MAP[true] = '1 1', StyledTabs_FLEX_MAP[false] = '0 0', StyledTabs_FLEX_MAP.grow = '1 0', StyledTabs_FLEX_MAP.shrink = '0 1', StyledTabs_FLEX_MAP);
var StyledTabs_flexStyle = (0,styled_components_browser_esm.css)(["flex:", ";"], function (props) {
  return "" + Tabs_StyledTabs_FLEX_MAP[props.flex] + (props.flex !== true ? ' auto' : '');
});
var StyledTabPanel = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledTabs__StyledTabPanel",
  componentId: "a4fwxl-1"
})(["min-height:0;", " ", ";"], function (props) {
  return props.flex && StyledTabs_flexStyle;
}, function (props) {
  return props.theme.tabs.panel.extend;
});
StyledTabPanel.defaultProps = {};
Object.setPrototypeOf(StyledTabPanel.defaultProps, default_props_defaultProps);
var StyledTabs = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledTabs",
  componentId: "a4fwxl-2"
})(["", " ", ";"], genericStyles, function (props) {
  return props.theme.tabs.extend;
});
StyledTabs.defaultProps = {};
Object.setPrototypeOf(StyledTabs.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tabs/Tabs.js
var Tabs_excluded = ["alignControls", "children", "flex", "justify", "messages", "responsive"];

function Tabs_extends() {
  Tabs_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return Tabs_extends.apply(this, arguments);
}

function Tabs_objectWithoutPropertiesLoose(source, excluded) {
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









var Tabs = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var alignControls = _ref.alignControls,
      children = _ref.children,
      flex = _ref.flex,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'center' : _ref$justify,
      messages = _ref.messages,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      rest = Tabs_objectWithoutPropertiesLoose(_ref, Tabs_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format;

  var propsActiveIndex = rest.activeIndex,
      onActive = rest.onActive;

  var _useState = (0,react.useState)(rest.activeIndex || 0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = (0,react.useState)(),
      activeContent = _useState2[0],
      setActiveContent = _useState2[1];

  var _useState3 = (0,react.useState)(),
      activeTitle = _useState3[0],
      setActiveTitle = _useState3[1];

  if (activeIndex !== propsActiveIndex && propsActiveIndex !== undefined) {
    setActiveIndex(propsActiveIndex);
  }

  var activateTab = function activateTab(index) {
    if (propsActiveIndex === undefined) {
      setActiveIndex(index);
    }

    if (onActive) {
      onActive(index);
    }
  };
  /* eslint-disable no-param-reassign */


  delete rest.activeIndex;
  delete rest.onActive;
  /* eslint-enable no-param-reassign */

  var tabs = react.Children.map(children, function (child, index) {
    return /*#__PURE__*/react.createElement(TabsContext.Provider, {
      value: {
        activeIndex: activeIndex,
        active: activeIndex === index,
        onActivate: function onActivate() {
          return activateTab(index);
        },
        setActiveContent: setActiveContent,
        setActiveTitle: setActiveTitle
      }
    }, child ?
    /*#__PURE__*/
    // cloneElement is needed for backward compatibility with custom
    // styled components that rely on props.active. We should reassess
    // if it is still necessary in our next major release.
    react.cloneElement(child, {
      active: activeIndex === index
    }) : child);
  });
  var tabsHeaderStyles = {};

  if (theme.tabs.header && theme.tabs.header.border) {
    var borderColor = theme.tabs.header.border.color || theme.global.control.border.color;
    borderColor = normalizeColor(borderColor, theme);
    tabsHeaderStyles.border = {
      side: theme.tabs.header.border.side,
      size: theme.tabs.header.border.size,
      style: theme.tabs.header.border.style,
      color: borderColor
    };
  }

  var tabContentTitle = (activeTitle || '') + " " + format({
    id: 'tabs.tabContents',
    messages: messages
  });
  return /*#__PURE__*/react.createElement(StyledTabs, Tabs_extends({
    ref: ref,
    as: BoxWrapper,
    role: "tablist",
    flex: flex,
    responsive: responsive
  }, rest, {
    background: theme.tabs.background
  }), /*#__PURE__*/react.createElement(StyledTabsHeader, Tabs_extends({
    as: BoxWrapper,
    direction: "row",
    justify: justify,
    alignSelf: alignControls,
    flex: false,
    wrap: true,
    background: theme.tabs.header.background,
    gap: theme.tabs.gap
  }, tabsHeaderStyles), tabs), /*#__PURE__*/react.createElement(StyledTabPanel, {
    flex: flex,
    "aria-label": tabContentTitle,
    role: "tabpanel"
  }, activeContent));
});
Tabs.displayName = 'Tabs';
var TabsDoc;

if (false) {}

var TabsWrapper = TabsDoc || Tabs;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tabs/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Text/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextArea/StyledTextArea.js



var StyledTextArea_plainStyle = (0,styled_components_browser_esm.css)(["outline:none;border:none;width:100%;-webkit-appearance:none;"]);

var resizeStyle = function resizeStyle(resize) {
  if (resize === 'horizontal') {
    return 'resize: horizontal;';
  }

  if (resize === 'vertical') {
    return 'resize: vertical;';
  }

  if (resize) {
    return 'resize: both;';
  }

  return 'resize: none;';
};

var StyledTextArea = styled_components_browser_esm.default.textarea.withConfig({
  displayName: "StyledTextArea",
  componentId: "sc-17i3mwp-0"
})(["", " ", " ", " ", " ", " ", ";"], inputStyle, function (props) {
  return props.resize !== undefined && resizeStyle(props.resize);
}, function (props) {
  return props.fillArg && 'height: 100%;';
}, function (props) {
  return props.plain && StyledTextArea_plainStyle;
}, function (props) {
  return props.disabled && disabledStyle(props.theme.textArea.disabled && props.theme.textArea.disabled.opacity);
}, function (props) {
  return props.theme.textArea && props.theme.textArea.extend;
});
StyledTextArea.defaultProps = {};
Object.setPrototypeOf(StyledTextArea.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextArea/TextArea.js
var TextArea_excluded = ["a11yTitle", "fill", "focusIndicator", "name", "onBlur", "onChange", "onFocus", "onKeyDown", "value"];

function TextArea_extends() {
  TextArea_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return TextArea_extends.apply(this, arguments);
}

function TextArea_objectWithoutPropertiesLoose(source, excluded) {
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





var TextArea = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var a11yTitle = _ref.a11yTitle,
      fill = _ref.fill,
      _ref$focusIndicator = _ref.focusIndicator,
      focusIndicator = _ref$focusIndicator === void 0 ? true : _ref$focusIndicator,
      name = _ref.name,
      _onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      valueProp = _ref.value,
      rest = TextArea_objectWithoutPropertiesLoose(_ref, TextArea_excluded);

  var formContext = (0,react.useContext)(FormContext);

  var _formContext$useFormI = formContext.useFormInput(name, valueProp),
      value = _formContext$useFormI[0],
      setValue = _formContext$useFormI[1];

  var _useState = (0,react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  return /*#__PURE__*/react.createElement(KeyboardWrapper, {
    onEsc: function onEsc(event) {
      // we have to stop both synthetic events and native events
      // drop and layer should not close by pressing esc on this input
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    },
    onKeyDown: onKeyDown
  }, /*#__PURE__*/react.createElement(StyledTextArea, TextArea_extends({
    "aria-label": a11yTitle,
    ref: ref,
    name: name,
    fillArg: fill,
    focus: focus,
    value: value,
    focusIndicator: focusIndicator
  }, rest, {
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (_onBlur) _onBlur(event);
    },
    onChange: function onChange(event) {
      setValue(event.target.value);
      if (_onChange) _onChange(event);
    }
  })));
});
TextArea.displayName = 'TextArea';
var TextAreaDoc;

if (false) {}

var TextAreaWrapper = TextAreaDoc || TextArea;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextArea/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/TextInput/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Tip/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Video/StyledVideo.js



var StyledVideo_FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};
var StyledVideo_fitStyle = (0,styled_components_browser_esm.css)(["flex:1 1;min-height:0;object-fit:", ";"], function (props) {
  return StyledVideo_FIT_MAP[props.fit];
}); // z-index is for Safari so controls aren't hidden

var StyledVideo = styled_components_browser_esm.default.video.withConfig({
  displayName: "StyledVideo",
  componentId: "w4v8h9-0"
})(["max-width:100%;z-index:1;", "::cue{background:", ";}", ";"], function (props) {
  return props.fit && StyledVideo_fitStyle;
}, function (props) {
  return props.theme.video.captions.background;
}, function (props) {
  return props.theme.video && props.theme.video.extend;
});
StyledVideo.defaultProps = {};
Object.setPrototypeOf(StyledVideo.defaultProps, default_props_defaultProps);
var StyledVideoContainer = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledVideo__StyledVideoContainer",
  componentId: "w4v8h9-1"
})(["flex:1 1;display:flex;flex-direction:column;overflow:hidden;position:relative;", ";"], genericStyles);
StyledVideoContainer.defaultProps = {};
Object.setPrototypeOf(StyledVideoContainer.defaultProps, default_props_defaultProps); // z-index is for Safari so controls aren't hidden

var positionStyle = (0,styled_components_browser_esm.css)(["position:absolute;left:0;right:0;bottom:0;z-index:1;"]);
var StyledVideoControls = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledVideo__StyledVideoControls",
  componentId: "w4v8h9-2"
})(["flex:0 0;", " opacity:0;transition:opacity 0.3s;", ";"], function (props) {
  return props.over && positionStyle;
}, function (props) {
  return props.active ? 'opacity: 1;' : 'pointer-events: none';
});
StyledVideoControls.defaultProps = {};
Object.setPrototypeOf(StyledVideoControls.defaultProps, default_props_defaultProps);
var headStyle = (0,styled_components_browser_esm.css)(["::after{content:'';height:100%;width:", ";background:", ";position:absolute;left:", ";}"], function (props) {
  return props.theme.global.edgeSize.xsmall;
}, function (props) {
  return normalizeColor(props.theme.video.scrubber.color, props.theme);
}, function (props) {
  return props.value + "%";
});
var StyledVideoScrubber = styled_components_browser_esm.default.div.withConfig({
  displayName: "StyledVideo__StyledVideoScrubber",
  componentId: "w4v8h9-3"
})(["cursor:pointer;width:100%;height:100%;", ";"], function (props) {
  return props.value && headStyle;
});
StyledVideoScrubber.defaultProps = {};
Object.setPrototypeOf(StyledVideoScrubber.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Video/Video.js
var Video_excluded = ["alignSelf", "autoPlay", "children", "controls", "gridArea", "loop", "margin", "messages", "mute", "onDurationChange", "onEnded", "onPause", "onPlay", "onTimeUpdate", "onVolumeChange"];

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

function Video_objectWithoutPropertiesLoose(source, excluded) {
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













 // Split the volume control into 6 segments. Empirically determined.

var VOLUME_STEP = 0.166667;

var formatTime = function formatTime(time) {
  var minutes = Math.round(time / 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var seconds = Math.round(time) % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
};

var Video = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var alignSelf = _ref.alignSelf,
      autoPlay = _ref.autoPlay,
      children = _ref.children,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? 'over' : _ref$controls,
      gridArea = _ref.gridArea,
      loop = _ref.loop,
      margin = _ref.margin,
      messages = _ref.messages,
      mute = _ref.mute,
      _onDurationChange = _ref.onDurationChange,
      _onEnded = _ref.onEnded,
      _onPause = _ref.onPause,
      _onPlay = _ref.onPlay,
      _onTimeUpdate = _ref.onTimeUpdate,
      _onVolumeChange = _ref.onVolumeChange,
      rest = Video_objectWithoutPropertiesLoose(_ref, Video_excluded);

  var theme = (0,react.useContext)(styled_components_browser_esm.ThemeContext) || default_props_defaultProps.theme;

  var _useContext = (0,react.useContext)(MessageContext),
      format = _useContext.format;

  var _useState = (0,react.useState)([]),
      captions = _useState[0],
      setCaptions = _useState[1];

  var _useState2 = (0,react.useState)(),
      currentTime = _useState2[0],
      setCurrentTime = _useState2[1];

  var _useState3 = (0,react.useState)(),
      duration = _useState3[0],
      setDuration = _useState3[1];

  var _useState4 = (0,react.useState)(),
      percentagePlayed = _useState4[0],
      setPercentagePlayed = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      playing = _useState5[0],
      setPlaying = _useState5[1];

  var _useState6 = (0,react.useState)(),
      scrubTime = _useState6[0],
      setScrubTime = _useState6[1];

  var _useState7 = (0,react.useState)(),
      volume = _useState7[0],
      setVolume = _useState7[1];

  var _useState8 = (0,react.useState)(false),
      hasPlayed = _useState8[0],
      setHasPlayed = _useState8[1];

  var _useState9 = (0,react.useState)(),
      interacting = _useState9[0],
      setInteracting = _useState9[1];

  var _useState10 = (0,react.useState)(),
      height = _useState10[0],
      setHeight = _useState10[1];

  var _useState11 = (0,react.useState)(),
      width = _useState11[0],
      setWidth = _useState11[1];

  var containerRef = (0,react.useRef)();
  var scrubberRef = (0,react.useRef)();
  var videoRef = useForwardedRef(ref); // mute if needed

  (0,react.useEffect)(function () {
    var video = videoRef.current;
    if (video && mute) video.muted = true;
  }, [mute, videoRef]); // when the video is first rendered, set state from it where needed

  (0,react.useEffect)(function () {
    var video = videoRef.current;

    if (video) {
      // hide all captioning to start with
      var textTracks = video.textTracks;

      for (var i = 0; i < textTracks.length; i += 1) {
        textTracks[i].mode = 'hidden';
      }

      setCurrentTime(video.currentTime);
      setPercentagePlayed(video.currentTime / video.duration * 100);
      setVolume(videoRef.current.volume);
    }
  }, [videoRef]); // turn off interacting after a while

  (0,react.useEffect)(function () {
    var timer = setTimeout(function () {
      if (interacting && !containsFocus(containerRef.current)) {
        setInteracting(false);
      }
    }, 3000);
    return function () {
      return clearTimeout(timer);
    };
  }, [interacting]);
  useLayoutEffect(function () {
    var video = videoRef.current;

    if (video) {
      if (video.videoHeight) {
        // set the size based on the video aspect ratio
        var rect = video.getBoundingClientRect();
        var ratio = rect.width / rect.height;
        var videoRatio = video.videoWidth / video.videoHeight;

        if (videoRatio > ratio) {
          var nextHeight = rect.width / videoRatio;

          if (nextHeight !== height) {
            setHeight(nextHeight);
            setWidth(undefined);
          }
        } else {
          var nextWidth = rect.height * videoRatio;

          if (nextWidth !== width) {
            setHeight(undefined);
            setWidth(nextWidth);
          }
        }
      } // remember the state of the text tracks for subsequent rendering


      var textTracks = video.textTracks;

      if (textTracks.length > 0) {
        if (textTracks.length === 1) {
          var active = textTracks[0].mode === 'showing';

          if (!captions || !captions[0] || captions[0].active !== active) {
            setCaptions([{
              active: active
            }]);
          }
        } else {
          var nextCaptions = [];
          var set = false;

          for (var i = 0; i < textTracks.length; i += 1) {
            var track = textTracks[i];

            var _active = track.mode === 'showing';

            nextCaptions.push({
              label: track.label,
              active: _active
            });

            if (!captions || !captions[i] || captions[i].active !== _active) {
              set = true;
            }
          }

          if (set) {
            setCaptions(nextCaptions);
          }
        }
      }
    }
  }, [captions, height, videoRef, width]);
  var play = (0,react.useCallback)(function () {
    return videoRef.current.play();
  }, [videoRef]);
  var pause = (0,react.useCallback)(function () {
    return videoRef.current.pause();
  }, [videoRef]);
  var scrub = (0,react.useCallback)(function (event) {
    if (scrubberRef.current) {
      var scrubberRect = scrubberRef.current.getBoundingClientRect();
      var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
      setScrubTime(duration * percent);
    }
  }, [duration]);
  var seek = (0,react.useCallback)(function (event) {
    if (scrubberRef.current) {
      var scrubberRect = scrubberRef.current.getBoundingClientRect();
      var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
      if (duration) videoRef.current.currentTime = duration * percent;
    }
  }, [duration, videoRef]);
  var louder = (0,react.useCallback)(function () {
    videoRef.current.volume += VOLUME_STEP;
  }, [videoRef]);
  var quieter = (0,react.useCallback)(function () {
    videoRef.current.volume -= VOLUME_STEP;
  }, [videoRef]);

  var showCaptions = function showCaptions(index) {
    var textTracks = videoRef.current.textTracks;

    for (var i = 0; i < textTracks.length; i += 1) {
      textTracks[i].mode = i === index ? 'showing' : 'hidden';
    }
  };

  var fullscreen = (0,react.useCallback)(function () {
    var video = videoRef.current;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else {
      console.warn("This browser doesn't support fullscreen.");
    }
  }, [videoRef]);
  var controlsElement;

  if (controls) {
    var over = controls === 'over';
    var background = over ? theme.video.controls && theme.video.controls.background || {
      color: 'background-back',
      opacity: 'strong',
      dark: true
    } : undefined;
    var iconColor = over && (theme.video.icons.color || 'text');
    var formattedTime = formatTime(scrubTime || currentTime || duration);
    var Icons = {
      ClosedCaption: theme.video.icons.closedCaption,
      Configure: theme.video.icons.configure,
      FullScreen: theme.video.icons.fullScreen,
      Pause: theme.video.icons.pause,
      Play: theme.video.icons.play,
      ReduceVolume: theme.video.icons.reduceVolume,
      Volume: theme.video.icons.volume
    };
    var captionControls = captions.map(function (caption) {
      return {
        icon: caption.label ? undefined : /*#__PURE__*/react.createElement(Icons.ClosedCaption, {
          color: iconColor
        }),
        label: caption.label,
        active: caption.active,
        onClick: function onClick() {
          return showCaptions(caption.active ? -1 : 0);
        }
      };
    });
    controlsElement = /*#__PURE__*/react.createElement(StyledVideoControls, {
      over: over,
      active: !hasPlayed || controls === 'below' || over && interacting,
      onBlur: function onBlur() {
        if (!containsFocus(containerRef.current)) setInteracting(false);
      }
    }, /*#__PURE__*/react.createElement(BoxWrapper, {
      direction: "row",
      align: "center",
      justify: "between",
      background: background
    }, /*#__PURE__*/react.createElement(ButtonWrapper, {
      icon: playing ? /*#__PURE__*/react.createElement(Icons.Pause, {
        color: iconColor,
        a11yTitle: format({
          id: 'video.pauseButton',
          messages: messages
        })
      }) : /*#__PURE__*/react.createElement(Icons.Play, {
        color: iconColor,
        a11yTitle: format({
          id: 'video.playButton',
          messages: messages
        })
      }),
      hoverIndicator: "background",
      onClick: playing ? pause : play
    }), /*#__PURE__*/react.createElement(BoxWrapper, {
      direction: "row",
      align: "center",
      flex: true
    }, /*#__PURE__*/react.createElement(BoxWrapper, {
      flex: true
    }, /*#__PURE__*/react.createElement(StackWrapper, null, /*#__PURE__*/react.createElement(MeterWrapper, {
      "aria-label": format({
        id: 'video.progressMeter',
        messages: messages
      }),
      background: over ? theme.video.scrubber && theme.video.scrubber.track && theme.video.scrubber.track.color || 'dark-3' : undefined,
      size: "full",
      thickness: "small",
      values: [{
        value: percentagePlayed || 0
      }]
    }), /*#__PURE__*/react.createElement(StyledVideoScrubber, {
      "aria-label": format({
        id: 'video.scrubber',
        messages: messages
      }),
      ref: scrubberRef,
      tabIndex: 0,
      role: "button",
      value: scrubTime ? Math.round(scrubTime / duration * 100) : undefined,
      onMouseMove: scrub,
      onMouseLeave: function onMouseLeave() {
        return setScrubTime(undefined);
      },
      onClick: seek
    }))), /*#__PURE__*/react.createElement(BoxWrapper, {
      pad: {
        horizontal: 'small'
      }
    }, /*#__PURE__*/react.createElement(TextWrapper, {
      margin: "none"
    }, formattedTime))), /*#__PURE__*/react.createElement(MenuWrapper, {
      icon: /*#__PURE__*/react.createElement(Icons.Configure, {
        color: iconColor
      }),
      dropAlign: {
        bottom: 'top',
        right: 'right'
      },
      dropBackground: background,
      messages: {
        openMenu: format({
          id: 'video.openMenu',
          messages: messages
        }),
        closeMenu: format({
          id: 'video.closeMenu',
          messages: messages
        })
      },
      items: [{
        icon: /*#__PURE__*/react.createElement(Icons.Volume, {
          color: iconColor,
          a11yTitle: format({
            id: 'video.volumeUp',
            messages: messages
          })
        }),
        onClick: volume <= 1 - VOLUME_STEP ? louder : undefined,
        close: false
      }, {
        icon: /*#__PURE__*/react.createElement(Icons.ReduceVolume, {
          color: iconColor,
          a11yTitle: format({
            id: 'video.volumeDown',
            messages: messages
          })
        }),
        onClick: volume >= VOLUME_STEP ? quieter : undefined,
        close: false
      }].concat(captionControls, [{
        icon: /*#__PURE__*/react.createElement(Icons.FullScreen, {
          color: iconColor,
          a11yTitle: format({
            id: 'video.fullScreen',
            messages: messages
          })
        }),
        onClick: fullscreen
      }])
    })));
  }

  var mouseEventListeners;

  if (controls === 'over') {
    mouseEventListeners = {
      onMouseEnter: function onMouseEnter() {
        return setInteracting(true);
      },
      onMouseMove: function onMouseMove() {
        return setInteracting(true);
      },
      onTouchStart: function onTouchStart() {
        return setInteracting(true);
      }
    };
  }

  var style;

  if (rest.fit === 'contain' && controls === 'over') {
    // constrain the size to fit the aspect ratio so the controls
    // overlap correctly
    if (width) {
      style = {
        width: width
      };
    } else if (height) {
      style = {
        height: height
      };
    }
  }

  return /*#__PURE__*/react.createElement(StyledVideoContainer, Video_extends({
    ref: containerRef
  }, mouseEventListeners, {
    alignSelf: alignSelf,
    gridArea: gridArea,
    margin: margin,
    style: style
  }), /*#__PURE__*/react.createElement(StyledVideo, Video_extends({}, rest, {
    ref: videoRef,
    onDurationChange: function onDurationChange(event) {
      var video = videoRef.current;
      setDuration(video.duration);
      setPercentagePlayed(video.currentTime / video.duration * 100);
      if (_onDurationChange) _onDurationChange(event);
    },
    onEnded: function onEnded(event) {
      setPlaying(false);
      if (_onEnded) _onEnded(event);
    },
    onPause: function onPause(event) {
      setPlaying(false);
      if (_onPause) _onPause(event);
    },
    onPlay: function onPlay(event) {
      setPlaying(true);
      setHasPlayed(true);
      if (_onPlay) _onPlay(event);
    },
    onTimeUpdate: function onTimeUpdate(event) {
      var video = videoRef.current;
      setCurrentTime(video.currentTime);
      setPercentagePlayed(video.currentTime / video.duration * 100);
      if (_onTimeUpdate) _onTimeUpdate(event);
    },
    onVolumeChange: function onVolumeChange(event) {
      setVolume(videoRef.current.volume);
      if (_onVolumeChange) _onVolumeChange(event);
    },
    autoPlay: autoPlay || false,
    loop: loop || false
  }), children), controlsElement);
});
Video.defaultProps = {};
Video.displayName = 'Video';
var VideoDoc;

if (false) {}

var VideoWrapper = VideoDoc || Video;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/Video/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/WorldMap/StyledWorldMap.js




var StyledWorldMap_fillStyle = function fillStyle(fillProp) {
  if (fillProp === 'horizontal') {
    return "\n      width: 100%;\n      height: unset;\n    ";
  }

  if (fillProp === 'vertical') {
    return "\n      width: unset;\n      height: 100%;\n    ";
  }

  if (fillProp) {
    return "\n      width: 100%;\n      height: 100%;\n    ";
  }

  return '';
}; // undefined fillProp has width for backwards compatibility


var StyledWorldMap = styled_components_browser_esm.default.svg.withConfig({
  displayName: "StyledWorldMap",
  componentId: "had4c3-0"
})(["", " ", " ", ";"], genericStyles, function (props) {
  return props.fillProp !== undefined ? StyledWorldMap_fillStyle(props.fillProp) : 'width: 100%;';
}, function (props) {
  return props.theme.worldMap && props.theme.worldMap.extend;
});
StyledWorldMap.defaultProps = {};
Object.setPrototypeOf(StyledWorldMap.defaultProps, default_props_defaultProps);

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/WorldMap/WorldMap.js
var WorldMap_excluded = ["fill", "color", "continents", "hoverColor", "onSelectPlace", "places"],
    WorldMap_excluded2 = ["location"],
    WorldMap_excluded3 = ["color", "onClick", "onHover"],
    _excluded4 = ["color", "coords", "key", "name", "onClick", "onHover"];

function WorldMap_extends() {
  WorldMap_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return WorldMap_extends.apply(this, arguments);
}

function WorldMap_objectWithoutPropertiesLoose(source, excluded) {
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





 // The graphic is drawn as a rectangular grid using coordinates spaced
// by FACTOR pixels. The contents have both an area boundary for interaction
// and dots described as rows where each row is described by three values:
// a starting coordinate and a length. This approach is more efficient than
// describing it via SVG elements, keeping the code/library size smaller.

var CONTINENTS = [{
  name: 'Australia',
  origin: [74, 32],
  area: [[4, 0], [7, 1], [15, 7], [13, 9], [8, 8], [0, 6], [0, 2]],
  dots: [[4, 0, 1], [2, 1, 6], [0, 2, 9], [0, 3, 10], [0, 4, 10], [0, 5, 3], [5, 5, 5], [5, 6, 4], [8, 8, 1], [15, 7, 1], [14, 8, 1], [13, 9, 1]]
}, {
  name: 'Asia',
  origin: [52, 1],
  area: [[16, 0], [38, 5], [40, 7], [28, 17], [24, 25], [29, 29], [19, 29], [11, 24], [3, 23], [0, 20], [0, 19], [6, 13], [7, 6]],
  dots: [[16, 0, 1], [17, 1, 2], [18, 2, 2], [15, 3, 6], [28, 3, 1], [30, 3, 1], [10, 4, 2], [13, 4, 10], [24, 4, 1], [9, 5, 22], [32, 5, 1], [38, 5, 1], [7, 6, 2], [10, 6, 1], [12, 6, 27], [7, 7, 34], [7, 8, 31], [7, 9, 26], [34, 9, 3], [7, 10, 22], [31, 10, 1], [33, 10, 1], [7, 11, 21], [32, 11, 2], [7, 12, 21], [32, 12, 1], [6, 13, 22], [32, 13, 1], [6, 14, 22], [5, 15, 22], [3, 16, 2], [6, 16, 20], [2, 17, 3], [6, 17, 16], [24, 17, 1], [28, 17, 1], [1, 18, 22], [26, 18, 2], [0, 19, 24], [0, 20, 5], [6, 20, 17], [2, 21, 5], [10, 21, 14], [2, 22, 5], [11, 22, 4], [16, 22, 4], [3, 23, 3], [11, 23, 2], [17, 23, 3], [23, 23, 1], [11, 24, 2], [18, 24, 2], [23, 24, 1], [24, 25, 1], [18, 26, 1], [22, 26, 1], [18, 27, 1], [20, 27, 4], [18, 28, 1], [21, 28, 1], [23, 28, 1], [26, 28, 3], [19, 29, 1], [28, 29, 2]]
}, {
  // 21X, 40Y
  name: 'Africa',
  origin: [40, 19],
  area: [[3, 0], [6, 0], [11, 2], [16, 7], [16, 15], [11, 18], [9, 18], [0, 6], [0, 3]],
  dots: [[3, 0, 4], [2, 1, 6], [9, 1, 2], [1, 2, 11], [0, 3, 13], [0, 4, 14], [0, 5, 14], [0, 6, 16], [1, 7, 16], [2, 8, 2], [6, 8, 11], [7, 9, 9], [7, 10, 8], [7, 11, 7], [8, 12, 7], [7, 13, 8], [7, 14, 7], [16, 14, 1], [8, 15, 5], [15, 15, 2], [8, 16, 5], [9, 17, 3], [9, 18, 3]]
}, {
  name: 'Europe',
  origin: [39, 2],
  area: [[8, 0], [10, 0], [20, 2], [19, 11], [18, 13], [14, 16], [3, 16], [0, 7]],
  dots: [[8, 0, 3], [9, 1, 1], [20, 2, 1], [19, 3, 1], [12, 4, 1], [19, 4, 1], [9, 5, 6], [9, 6, 7], [17, 6, 3], [0, 7, 1], [8, 7, 12], [7, 8, 3], [11, 8, 9], [7, 9, 3], [11, 9, 9], [4, 10, 1], [7, 10, 1], [9, 10, 1], [11, 10, 9], [3, 11, 2], [7, 11, 13], [4, 12, 1], [6, 12, 13], [4, 13, 15], [5, 14, 3], [9, 14, 4], [15, 14, 2], [3, 15, 3], [8, 15, 1], [10, 15, 5], [6, 15, 2], [3, 16, 2], [10, 16, 5]]
}, {
  name: 'South America',
  origin: [22, 26],
  area: [[2, 0], [5, 0], [11, 4], [11, 8], [3, 18], [2, 17], [0, 4], [0, 3]],
  dots: [[2, 0, 4], [1, 1, 7], [1, 2, 7], [0, 3, 10], [0, 4, 12], [1, 5, 11], [2, 6, 9], [3, 7, 8], [3, 8, 8], [3, 9, 6], [3, 10, 6], [3, 11, 5], [3, 12, 3], [2, 13, 3], [2, 14, 3], [2, 15, 2], [2, 16, 2], [2, 17, 2], [3, 18, 1]]
}, {
  name: 'North America',
  origin: [0, 0],
  area: [[21, 0], [39, 0], [39, 6], [22, 26], [16, 23], [2, 12], [0, 7]],
  dots: [[22, 0, 6], [29, 0, 1], [31, 0, 1], [33, 0, 5], [20, 1, 1], [22, 1, 1], [24, 1, 2], [27, 1, 13], [17, 2, 1], [20, 2, 5], [26, 2, 13], [13, 3, 1], [19, 3, 1], [21, 3, 3], [26, 3, 14], [14, 4, 1], [16, 4, 4], [21, 4, 3], [29, 4, 11], [12, 5, 3], [16, 5, 1], [18, 5, 1], [20, 5, 3], [24, 5, 1], [30, 5, 8], [14, 6, 3], [19, 6, 1], [22, 6, 4], [31, 6, 8], [0, 7, 15], [16, 7, 1], [18, 7, 4], [24, 7, 2], [30, 7, 7], [2, 8, 20], [24, 8, 3], [29, 8, 5], [2, 9, 20], [24, 9, 2], [30, 9, 3], [1, 10, 18], [23, 10, 2], [31, 10, 1], [2, 11, 2], [8, 11, 11], [23, 11, 2], [26, 11, 1], [2, 12, 1], [8, 12, 13], [24, 12, 3], [10, 13, 12], [23, 13, 5], [11, 14, 17], [11, 15, 9], [21, 15, 6], [28, 15, 2], [11, 16, 11], [23, 16, 4], [11, 17, 14], [12, 18, 11], [12, 19, 12], [13, 20, 9], [15, 21, 3], [22, 21, 1], [16, 22, 2], [16, 23, 2], [20, 23, 1], [23, 23, 1], [18, 24, 3], [21, 25, 1], [22, 26, 1]]
}]; // FACTOR is the distance in pixels between coordinates

var FACTOR = 10;

var maxCoordinate = function maxCoordinate(a, b) {
  return [Math.max(a[0], b[0]), Math.max(a[1], b[1])];
}; // const minCoordinate = (a, b) =>
//   [Math.min(a[0], b[0]), Math.min(a[1], b[1])];
// Based on https://stackoverflow.com/a/43861247


var MAP_LAT_BOTTOM = -50.0; // empirically determined

var MAP_LAT_BOTTOM_RAD = MAP_LAT_BOTTOM * Math.PI / 180;
var MAP_LON_LEFT = -171.0; // empirically determined

var MAP_LON_RIGHT = 184.0; // empirically determined

var MAP_LON_DELTA = MAP_LON_RIGHT - MAP_LON_LEFT;

var mapValues = function mapValues(extent) {
  var mapRadius = extent[0] / MAP_LON_DELTA * 360 / (2 * Math.PI);
  var mapOffsetY = Math.round(mapRadius / 2 * Math.log((1 + Math.sin(MAP_LAT_BOTTOM_RAD)) / (1 - Math.sin(MAP_LAT_BOTTOM_RAD))));
  return {
    mapRadius: mapRadius,
    mapOffsetY: mapOffsetY
  };
};

var latLonToCoord = function latLonToCoord(latLon, origin, extent) {
  var _mapValues = mapValues(extent),
      mapRadius = _mapValues.mapRadius,
      mapOffsetY = _mapValues.mapOffsetY;

  var x = Math.round((latLon[1] - MAP_LON_LEFT) * extent[0] / MAP_LON_DELTA);
  var latitudeRad = latLon[0] * Math.PI / 180;
  var y = extent[1] + mapOffsetY - Math.round(mapRadius / 2 * Math.log((1 + Math.sin(latitudeRad)) / (1 - Math.sin(latitudeRad))));
  return [x, y]; // the coordinate value of this point on the map image
};

var coordToLatLon = function coordToLatLon(coord, origin, extent) {
  var _mapValues2 = mapValues(extent),
      mapRadius = _mapValues2.mapRadius,
      mapOffsetY = _mapValues2.mapOffsetY;

  var a = (extent[1] + mapOffsetY - coord[1]) / mapRadius;
  var lat = 180 / Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
  var lon = coord[0] * MAP_LON_DELTA / extent[0] + MAP_LON_LEFT;
  return [lat, lon];
};

var buildContinent = function buildContinent(_ref) {
  var area = _ref.area,
      dots = _ref.dots,
      name = _ref.name,
      origin = _ref.origin;
  var extent = [].concat(origin);
  var stateDots = dots.map(function (segment) {
    var count = segment[2];
    var spots = [];

    for (var i = 0; i < count; i += 1) {
      spots.push('h0');
    }

    var dotCommands = spots.join(' m10,0 ');
    var x = FACTOR * (origin[0] + segment[0] + 1);
    var y = FACTOR * (origin[1] + segment[1] + 1);
    extent = maxCoordinate(extent, [origin[0] + segment[0] + segment[2], origin[1] + segment[1]]);
    return "M" + x + "," + y + " " + dotCommands;
  }).join(' ');
  var stateArea = area.map(function (point, index) {
    var x = FACTOR * (point[0] + origin[0] + 1);
    var y = FACTOR * (point[1] + origin[1] + 1);
    return "" + (index === 0 ? 'M' : 'L') + x + "," + y;
  }).join(' ') + " Z";
  var mid = [origin[0] + (extent[0] - origin[0]) / 2, origin[1] + (extent[1] - origin[1]) / 2];
  return {
    area: stateArea,
    dots: stateDots,
    name: name,
    origin: origin,
    extent: extent,
    mid: mid
  };
};

var buildWorld = function buildWorld() {
  // Build the SVG paths describing the individual dots
  var continents = CONTINENTS.map(buildContinent);
  var origin = [0, 0];
  var extent = [0, 0];
  continents.forEach(function (continent) {
    extent = maxCoordinate(extent, continent.extent);
  });
  return {
    continents: continents,
    extent: extent,
    origin: origin,
    x: origin[0] * FACTOR,
    y: origin[1] * FACTOR,
    width: (extent[0] - origin[0] + 1) * FACTOR,
    height: (extent[1] - origin[1] + 2) * FACTOR
  };
};

var buildInteractiveProps = function buildInteractiveProps(_ref2, activeFunc, active) {
  var name = _ref2.name,
      onClick = _ref2.onClick,
      onHover = _ref2.onHover;
  return {
    role: 'button',
    'aria-label': name,
    tabIndex: '0',
    onClick: onClick ? function () {
      return onClick(name);
    } : undefined,
    onMouseOver: function onMouseOver() {
      if (!active) {
        activeFunc(name);

        if (onHover) {
          onHover(true);
        }
      }
    },
    onMouseLeave: function onMouseLeave() {
      if (active) {
        activeFunc(undefined);

        if (onHover) {
          onHover(false);
        }
      }
    },
    onFocus: function onFocus() {
      // This moves the map unnecessarily. Instead, we should check
      // the position and scroll if it isn't already visible
      // this._worldMapRef.scrollIntoView();
      if (!active) {
        activeFunc(name);
      }
    },
    onBlur: function onBlur() {
      if (active) {
        activeFunc(undefined);
      }
    }
  };
};

var WorldMap = /*#__PURE__*/(0,react.forwardRef)(function (_ref3, ref) {
  var fill = _ref3.fill,
      color = _ref3.color,
      continentsProp = _ref3.continents,
      hoverColor = _ref3.hoverColor,
      onSelectPlace = _ref3.onSelectPlace,
      placesProp = _ref3.places,
      rest = WorldMap_objectWithoutPropertiesLoose(_ref3, WorldMap_excluded);

  var theme = react.useContext(styled_components_browser_esm.ThemeContext);
  var world = react.useMemo(buildWorld, []);

  var _React$useState = react.useState({}),
      continents = _React$useState[0],
      setContinents = _React$useState[1];

  react.useEffect(function () {
    if (continentsProp) {
      setContinents(continentsProp.reduce(function (obj, continent) {
        // eslint-disable-next-line no-param-reassign
        obj[continent.name] = continent;
        return obj;
      }, {}));
    } else setContinents({});
  }, [continentsProp]);

  var _React$useState2 = react.useState([]),
      places = _React$useState2[0],
      setPlaces = _React$useState2[1];

  react.useEffect(function () {
    if (placesProp) {
      setPlaces(placesProp.map(function (_ref4) {
        var location = _ref4.location,
            place = WorldMap_objectWithoutPropertiesLoose(_ref4, WorldMap_excluded2);

        var coords = latLonToCoord(location, world.origin, world.extent);
        return WorldMap_extends({
          coords: coords,
          key: location.join(',')
        }, place);
      }));
    } else setPlaces([]);
  }, [placesProp, world]);

  var _React$useState3 = react.useState(),
      over = _React$useState3[0],
      setOver = _React$useState3[1];

  var _React$useState4 = react.useState(),
      activeCoords = _React$useState4[0],
      setActiveCoords = _React$useState4[1];

  var _React$useState5 = react.useState(),
      activeContinent = _React$useState5[0],
      setActiveContinent = _React$useState5[1];

  var _React$useState6 = react.useState(),
      activePlace = _React$useState6[0],
      setActivePlace = _React$useState6[1];

  var containerRef = react.useRef();
  var onMouseMove = react.useCallback(function (event) {
    // determine the map coordinates for where the mouse is
    // containerRef uses the group so we can handle aspect ratio scaling
    var rect = containerRef.current.getBoundingClientRect(); // since the SVG viewBox might be scaled

    var scale = rect.width / world.width;
    var coords = [Math.round((event.clientX - rect.left) / scale / FACTOR), Math.round((event.clientY - rect.top) / scale / FACTOR)];
    setActiveCoords(coords);
  }, [world.width]);
  var continentElements = world.continents.map(function (_ref5) {
    var area = _ref5.area,
        dots = _ref5.dots,
        name = _ref5.name;

    var _ref6 = continents[name] || {},
        continentColor = _ref6.color,
        onClick = _ref6.onClick,
        onHover = _ref6.onHover,
        restContinents = WorldMap_objectWithoutPropertiesLoose(_ref6, WorldMap_excluded3);

    var active = activeContinent && activeContinent === name;
    var interactiveProps = {};

    if (onClick || onHover) {
      interactiveProps = buildInteractiveProps(continents[name], function (activate) {
        return setActiveContinent(activate);
      }, active);
    }

    return /*#__PURE__*/react.createElement("g", WorldMap_extends({
      key: name
    }, interactiveProps, restContinents), /*#__PURE__*/react.createElement("path", {
      stroke: "none",
      fill: "#fff",
      fillOpacity: "0.01",
      d: area
    }), /*#__PURE__*/react.createElement("path", {
      d: dots,
      strokeLinecap: "round",
      strokeWidth: parseMetricToNum(theme.worldMap.continent[active ? 'active' : 'base']),
      stroke: normalizeColor(continentColor || color || theme.worldMap.color, theme)
    }));
  });
  var placeElements = places.map(function (place) {
    var placeColor = place.color,
        coords = place.coords,
        key = place.key,
        name = place.name,
        onClick = place.onClick,
        onHover = place.onHover,
        restPlace = WorldMap_objectWithoutPropertiesLoose(place, _excluded4);

    var d = "M" + FACTOR * coords[0] + ", " + FACTOR * coords[1] + " h0";
    var active = activePlace && activePlace === name;
    var interactiveProps = {};

    if (onClick || onHover) {
      interactiveProps = buildInteractiveProps(place, function (activate) {
        return setActivePlace(activate);
      }, active);
    }

    return /*#__PURE__*/react.createElement("path", WorldMap_extends({
      key: key,
      strokeLinecap: "round",
      strokeWidth: parseMetricToNum(theme.worldMap.place[active ? 'active' : 'base']),
      stroke: normalizeColor(placeColor || color || theme.worldMap.color, theme)
    }, interactiveProps, restPlace, {
      d: d
    }));
  }); // If the caller is interested in onSelectPlace changes, track where the

  var interactiveProps = {};

  if (onSelectPlace) {
    interactiveProps = {
      onMouseOver: function onMouseOver() {
        return setOver(true);
      },
      onMouseMove: over ? onMouseMove : undefined,
      onMouseLeave: function onMouseLeave() {
        setOver(false);
        setActiveCoords(undefined);
      }
    };
  }

  var active;

  if (activeCoords) {
    var d = "M" + FACTOR * activeCoords[0] + ", " + FACTOR * activeCoords[1] + " h0";
    active = /*#__PURE__*/react.createElement("g", {
      stroke: "none",
      fill: "none",
      fillRule: "evenodd",
      onClick: function onClick() {
        return onSelectPlace(coordToLatLon(activeCoords, world.origin, world.extent));
      }
    }, /*#__PURE__*/react.createElement("path", {
      strokeLinecap: "round",
      strokeWidth: parseMetricToNum(theme.worldMap.place.active),
      stroke: normalizeColor(hoverColor || color || theme.worldMap.hover.color, theme),
      d: d
    }));
  }

  return /*#__PURE__*/react.createElement(StyledWorldMap, WorldMap_extends({
    ref: ref,
    viewBox: world.x + " " + world.y + " " + world.width + " " + world.height,
    preserveAspectRatio: "xMinYMin meet",
    fillProp: fill,
    width: world.width,
    height: world.height
  }, interactiveProps, rest), /*#__PURE__*/react.createElement("g", {
    ref: containerRef,
    stroke: "none",
    fill: "none",
    fillRule: "evenodd"
  }, continentElements), placeElements, active); // }
});
WorldMap.displayName = 'WorldMap';
WorldMap.defaultProps = {};
Object.setPrototypeOf(WorldMap.defaultProps, default_props_defaultProps);
var WorldMapDoc;

if (false) {}

var WorldMapWrapper = WorldMapDoc || WorldMap;

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/WorldMap/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/components/index.js








































































;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/AnnounceContext/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ContainerTargetContext/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ResponsiveContext/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/ThemeContext/index.js

;// CONCATENATED MODULE: ./node_modules/grommet/es6/contexts/index.js





;// CONCATENATED MODULE: ./node_modules/grommet/es6/themes/grommet.js


var grommet = deepFreeze({
  global: {
    colors: {
      background: {
        light: '#ffffff',
        dark: '#000000'
      }
    },
    font: {
      family: "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
    }
  },
  button: {
    extend: (0,styled_components_browser_esm.css)(["", ""], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/themes/dark.js



var dark_accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
var dark_neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
var dark_statusColors = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var backgroundColor = '#111111';
var dark_colors = {
  active: 'rgba(102, 102, 102, 0.5)',
  background: backgroundColor,
  black: '#000000',
  brand: '#FD6FFF',
  control: {
    dark: '#FFCA58',
    light: '#403216'
  },
  focus: '#FFCA58',
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  placeholder: '#AAAAAA',
  text: {
    dark: '#eeeeee',
    light: '#444444'
  },
  white: '#FFFFFF'
};

var dark_colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    dark_colors[prefix + "-" + (index + 1)] = color;
  });
};

dark_colorArray(dark_accentColors, 'accent');
dark_colorArray(dark_neutralColors, 'neutral');
Object.keys(dark_statusColors).forEach(function (color) {
  dark_colors["status-" + color] = dark_statusColors[color];
});
var dark = deepFreeze({
  global: {
    colors: dark_colors,
    drop: {
      background: '#333333'
    },
    focus: {
      border: {
        color: (0,styled_components_browser_esm.css)(["", ";"], function (props) {
          return normalizeColor('focus', props.theme);
        }),
        width: '2px'
      }
    },
    font: {
      family: 'Arial'
    },
    input: {
      weight: 700
    }
  },
  anchor: {
    color: 'control'
  },
  layer: {
    background: backgroundColor,
    overlay: {
      background: 'rgba(48, 48, 48, 0.5)'
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/grommet/es6/themes/index.js



;// CONCATENATED MODULE: ./node_modules/grommet/es6/index.js





/***/ })

}]);