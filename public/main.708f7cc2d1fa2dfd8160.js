/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6988:
/***/ ((module) => {

module.exports = {"header":{"title":"NaruHiyo Pages","logo":"public/images/brand-logo.png"},"footer":{"copyright":"narugit and hiyoko3"},"banner":"public/images/top.png","collaborators":{"head":"Collaborators","items":[{"profile":{"name":"@narugit","image":"public/images/narugit.png","bio":"Genius gourmet engineer","link":{"github":"https://github.com/narugit","portfolio":"https://narugit.github.io/","atcoder":"https://atcoder.jp/users/narucode"}}},{"profile":{"name":"@hiyoko3","image":"public/images/hiyoko3.png","bio":"ひよこエンジニア","link":{"github":"https://github.com/hiyoko3","portfolio":"https://hiyoko3.github.io","atcoder":"https://atcoder.jp/users/ae_hiyoko3"}}}]},"products":{"head":"Products","items":[{"product":{"name":"Memoma","image":"public/images/memoma.gif","desc":"Electronを利用したクロスプラットフォーム対応の3カラム型メモアプリ。Markdown記法に対応","github":"https://github.com/naruhiyo/Memoma"}},{"product":{"name":"Partytion","image":"public/images/partytion.gif","desc":"飲み会でのミニゲームとして使えるiPhoneアプリ","github":"https://github.com/naruhiyo/partytion"}},{"product":{"name":"aman","image":"public/images/aman.gif","desc":"`man`コマンドからコマンドのオプションを検索して出力してくれるCLI","github":"https://github.com/naruhiyo/aman"}}]},"activities":{"head":"Activity","items":[{"activity":{"name":"NaruHiyo 競プロ部","desc":"プログラミング能力を向上させるために AtCdoer を利用してアルゴリズムを勉強中！","github":"https://github.com/naruhiyo/algorithm-enhancement"}}]},"contact":{"head":"Contact us","message":"`***@gmail.com` \n\n `***` には ***naruhiyo.apps*** と入力してください。"}}

/***/ }),

/***/ 6800:
/***/ ((module) => {

module.exports = {"header":{"title":"NaruHiyo Pages","logo":"public/images/brand-logo.png"},"footer":{"copyright":"narugit and hiyoko3"},"banner":"public/images/top.png","collaborators":{"head":"開発者","items":[{"profile":{"name":"@narugit","image":"public/images/narugit.png","bio":"グルメエンジニア","link":{"github":"https://github.com/narugit","portfolio":"https://narugit.github.io/","atcoder":"https://atcoder.jp/users/narucode"}}},{"profile":{"name":"@hiyoko3","image":"public/images/hiyoko3.png","bio":"ひよこエンジニア","link":{"github":"https://github.com/hiyoko3","portfolio":"https://hiyoko3.github.io","atcoder":"https://atcoder.jp/users/ae_hiyoko3"}}}]},"products":{"head":"作ったもの","items":[{"product":{"name":"Memoma","image":"public/images/memoma.gif","desc":"Electronを利用したクロスプラットフォーム対応の3カラム型メモアプリ。Markdown記法に対応","github":"https://github.com/naruhiyo/Memoma"}},{"product":{"name":"Partytion","image":"public/images/partytion.gif","desc":"飲み会でのミニゲームとして使えるiPhoneアプリ","github":"https://github.com/naruhiyo/partytion"}},{"product":{"name":"aman","image":"public/images/aman.gif","desc":"`man`コマンドからコマンドのオプションを検索して出力してくれるCLI","github":"https://github.com/naruhiyo/aman"}},{"product":{"name":"appetizer","image":"public/images/appetizer.gif","desc":"昼食や夕食の時間帯に指定された駅の近くにある飲食店を紹介してくれるVS Code拡張です","github":"https://github.com/naruhiyo/appetizer"}}]},"activities":{"head":"活動","items":[{"activity":{"name":"NaruHiyo 競プロ部","desc":"プログラミング能力を向上させるために AtCdoer を利用してアルゴリズムを勉強中！","github":"https://github.com/naruhiyo/algorithm-enhancement"}}]},"contact":{"head":"Contact us","message":"`***@gmail.com` \n\n `***` には ***naruhiyo.apps*** と入力してください。"}}

/***/ }),

/***/ 9524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ 5750:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var grommet_1 = __webpack_require__(1329);
var grommet_icons_1 = __webpack_require__(8511);
var React = __importStar(__webpack_require__(3750));
var Activity = function (props) {
    return (React.createElement(grommet_1.Box, { elevation: "large", key: props.id, pad: props.size, background: "white", margin: "xsmall" },
        React.createElement(grommet_1.Heading, { level: 3, margin: "xsmall" }, props.activity.name),
        React.createElement(grommet_1.Text, { textAlign: "center", margin: "small", size: "small" }, props.activity.desc),
        props.activity.github && (React.createElement(grommet_1.Button, { href: props.activity.github, target: "_blank", plain: true, hoverIndicator: "light-3" },
            React.createElement(grommet_1.Box, { direction: "row", pad: "small" },
                React.createElement(grommet_icons_1.Github, null),
                React.createElement(grommet_1.Text, { margin: { left: 'xsmall' } }, "Github"))))));
};
exports.default = Activity;


/***/ }),

/***/ 78:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(3750));
var react_router_dom_1 = __webpack_require__(8693);
var Top_1 = __importDefault(__webpack_require__(410));
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "App" },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Top_1.default }))));
    };
    return App;
}(React.Component));
exports.default = App;


/***/ }),

/***/ 3953:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var grommet_1 = __webpack_require__(1329);
var grommet_icons_1 = __webpack_require__(8511);
var React = __importStar(__webpack_require__(3750));
var Collaborator = function (props) {
    return (React.createElement(grommet_1.Box, { a11yTitle: "Collaborator Components", elevation: props.size, key: props.id, background: "white", pad: props.size },
        React.createElement(grommet_1.Box, { height: "small", width: "small", alignSelf: "center", pad: "small" },
            React.createElement(grommet_1.Image, { fit: "contain", src: props.profile.image })),
        React.createElement(grommet_1.Heading, { level: 5, textAlign: "center", margin: { vertical: 'small' } }, props.profile.name),
        React.createElement(grommet_1.Text, { textAlign: "center", margin: "small", size: "small" }, props.profile.bio),
        props.profile.link.github && (React.createElement(grommet_1.Button, { href: props.profile.link.github, target: "_blank", plain: true, hoverIndicator: "light-3" },
            React.createElement(grommet_1.Box, { direction: "row", pad: "small" },
                React.createElement(grommet_icons_1.Github, null),
                React.createElement(grommet_1.Text, { margin: { left: 'xsmall' } }, "Github")))),
        props.profile.link.portfolio && (React.createElement(grommet_1.Button, { href: props.profile.link.portfolio, target: "_blank", plain: true, hoverIndicator: "light-3" },
            React.createElement(grommet_1.Box, { direction: "row", pad: "small" },
                React.createElement(grommet_icons_1.Link, null),
                React.createElement(grommet_1.Text, { margin: { left: 'xsmall' } }, "Portfolio")))),
        props.profile.link.atcoder && (React.createElement(grommet_1.Button, { href: props.profile.link.atcoder, target: "_blank", plain: true, hoverIndicator: "light-3" },
            React.createElement(grommet_1.Box, { direction: "row", pad: "small" },
                React.createElement(grommet_icons_1.Article, null),
                React.createElement(grommet_1.Text, { margin: { left: 'xsmall' } }, "AtCoder"))))));
};
exports.default = Collaborator;


/***/ }),

/***/ 3050:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var grommet_1 = __webpack_require__(1329);
var grommet_icons_1 = __webpack_require__(8511);
var React = __importStar(__webpack_require__(3750));
var Product = function (props) {
    return (React.createElement(grommet_1.Box, { elevation: "large", key: props.id, pad: props.size, background: "white", margin: "xsmall" },
        React.createElement(grommet_1.Heading, { level: 3, margin: "xsmall" }, props.product.name),
        React.createElement(grommet_1.Box, { width: "medium", height: "small", alignSelf: "center", pad: "small" },
            React.createElement(grommet_1.Image, { fit: "contain", src: props.product.image })),
        React.createElement(grommet_1.Text, { textAlign: "center", margin: "small", size: "small" }, props.product.desc),
        props.product.github && (React.createElement(grommet_1.Button, { href: props.product.github, target: "_blank", plain: true, hoverIndicator: "light-3" },
            React.createElement(grommet_1.Box, { direction: "row", pad: "small" },
                React.createElement(grommet_icons_1.Github, null),
                React.createElement(grommet_1.Text, { margin: { left: 'xsmall' } }, "Github"))))));
};
exports.default = Product;


/***/ }),

/***/ 410:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var grommet_1 = __webpack_require__(1329);
var React = __importStar(__webpack_require__(3750));
var react_i18next_1 = __webpack_require__(4895);
var Collaborator_1 = __importDefault(__webpack_require__(3953));
var Footer_1 = __importDefault(__webpack_require__(7057));
var Header_1 = __importDefault(__webpack_require__(3084));
var Product_1 = __importDefault(__webpack_require__(3050));
var Activity_1 = __importDefault(__webpack_require__(5750));
var grommetCustomStyle = {
    global: {},
    image: {
        extend: "width: 100%;",
    },
    box: {},
};
var Top = function () {
    var t = react_i18next_1.useTranslation().t;
    var products = t('products');
    var collaborators = t('collaborators');
    var contact = t('contact');
    var activities = t('activities');
    var productList = products.items.map(function (item, idx) { return (React.createElement(grommet_1.ResponsiveContext.Consumer, { key: idx }, function (size) { return (React.createElement(Product_1.default, { product: item.product, key: idx, id: idx, size: size })); })); });
    var collaboratorList = collaborators.items.map(function (item, idx) { return (React.createElement(grommet_1.ResponsiveContext.Consumer, { key: idx }, function (size) { return (React.createElement(Collaborator_1.default, { profile: item.profile, key: idx, id: idx, size: size })); })); });
    var activityList = activities.items.map(function (item, idx) { return (React.createElement(grommet_1.ResponsiveContext.Consumer, { key: idx }, function (size) { return (React.createElement(Activity_1.default, { activity: item.activity, key: idx, id: idx, size: size })); })); });
    return (React.createElement(grommet_1.Grommet, { theme: grommetCustomStyle, full: true },
        React.createElement(Header_1.default, null),
        React.createElement(grommet_1.ResponsiveContext.Consumer, null, function (size) { return (React.createElement(grommet_1.Box, null,
            React.createElement(grommet_1.Image, { fit: "cover", src: t('banner') }),
            React.createElement(grommet_1.Box, { pad: size, margin: { bottom: size } },
                React.createElement(grommet_1.Heading, { level: "3" }, collaborators.head),
                React.createElement(grommet_1.Grid, { columns: {
                        count: 'fill',
                        size: 'small',
                    }, gap: size }, collaboratorList)),
            React.createElement(grommet_1.Box, { background: "light-1" },
                React.createElement(grommet_1.Box, { pad: size, margin: { bottom: size } },
                    React.createElement(grommet_1.Heading, { level: "3" }, products.head),
                    React.createElement(grommet_1.Grid, { columns: {
                            count: 'fill',
                            size: size,
                        }, gap: "small" }, productList))),
            React.createElement(grommet_1.Box, { background: "light-1" },
                React.createElement(grommet_1.Box, { pad: size, margin: { bottom: size } },
                    React.createElement(grommet_1.Heading, { level: "3" }, activities.head),
                    React.createElement(grommet_1.Grid, { columns: {
                            count: 'fill',
                            size: size,
                        }, gap: "small" }, activityList))),
            React.createElement(grommet_1.Box, { pad: size, margin: { bottom: size } },
                React.createElement(grommet_1.Heading, { level: "3" }, contact.head),
                React.createElement(grommet_1.Text, { textAlign: "center", alignSelf: "center", margin: { vertical: size }, size: "xsmall" },
                    React.createElement(grommet_1.Markdown, null, contact.message))))); }),
        React.createElement(Footer_1.default, null)));
};
exports.default = Top;


/***/ }),

/***/ 7057:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var grommet_1 = __webpack_require__(1329);
var React = __importStar(__webpack_require__(3750));
var react_i18next_1 = __webpack_require__(4895);
var Footer = function () {
    var t = react_i18next_1.useTranslation().t;
    var Footer = t('footer');
    return (React.createElement(grommet_1.Box, { height: "xsmall", pad: "small", gridArea: "footer", align: "center", justify: "center" },
        React.createElement(grommet_1.Text, null,
            "\u00A9 ",
            Footer.copyright)));
};
exports.default = Footer;


/***/ }),

/***/ 3084:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var grommet_1 = __webpack_require__(1329);
var React = __importStar(__webpack_require__(3750));
var react_i18next_1 = __webpack_require__(4895);
var Header = function () {
    var t = react_i18next_1.useTranslation().t;
    var _a = React.useState('ja'), value = _a[0], setValue = _a[1];
    var Header = t('header');
    return (React.createElement(grommet_1.Box, { background: "neutral-3", direction: "row", align: "center", justify: "between", pad: "xsmall" },
        React.createElement(grommet_1.Box, { direction: "row", align: "center", pad: "xsmall" },
            React.createElement(grommet_1.Box, { width: "xxsmall", height: "xxsmall" },
                React.createElement(grommet_1.Image, { fit: "cover", src: Header.logo })),
            React.createElement(grommet_1.Heading, { margin: { horizontal: 'small' }, level: "3" }, Header.title)),
        React.createElement(grommet_1.Box, { width: "xsmall" },
            React.createElement(grommet_1.Select, { options: ['ja'], value: value, onChange: function (_a) {
                    var option = _a.option;
                    return setValue(option);
                } }))));
};
exports.default = Header;


/***/ }),

/***/ 9299:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(3750));
var ReactDOM = __importStar(__webpack_require__(9227));
__webpack_require__(7279);
__webpack_require__(7849);
__webpack_require__(9524);
var App_1 = __importDefault(__webpack_require__(78));
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));


/***/ }),

/***/ 7279:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var i18next_1 = __importDefault(__webpack_require__(2039));
var i18next_browser_languagedetector_1 = __importDefault(__webpack_require__(1387));
var react_i18next_1 = __webpack_require__(4895);
var en_yml_1 = __importDefault(__webpack_require__(6988));
var ja_yml_1 = __importDefault(__webpack_require__(6800));
var resources = {
    ja: {
        translation: ja_yml_1.default,
    },
    en: {
        translation: en_yml_1.default,
    },
};
i18next_1.default
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
    .init({
    resources: resources,
    lng: 'ja',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
    returnObjects: true,
});
exports.default = i18next_1.default;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			718: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknaruhiyo_github_io"] = self["webpackChunknaruhiyo_github_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [896,746,368], () => (__webpack_require__(9299)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;