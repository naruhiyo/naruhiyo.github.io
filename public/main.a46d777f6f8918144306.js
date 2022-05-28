/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8853:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Box/Box.js + 3 modules
var Box = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Heading/Heading.js + 2 modules
var Heading = __webpack_require__(3438);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Text/Text.js + 2 modules
var Text = __webpack_require__(5151);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Button/Button.js + 7 modules
var Button = __webpack_require__(1999);
// EXTERNAL MODULE: ./node_modules/grommet-icons/es6/icons/Github.js
var Github = __webpack_require__(5993);
;// CONCATENATED MODULE: ./src/components/Activity.tsx



const Activity = (props) => {
    return (react.createElement(Box/* Box */.x, { elevation: "large", key: props.id, pad: props.size, background: "white", margin: "xsmall" },
        react.createElement(Heading/* Heading */.X, { level: 3, margin: "xsmall" }, props.activity.name),
        react.createElement(Text/* Text */.x, { textAlign: "center", margin: "small", size: "small" }, props.activity.desc),
        props.activity.github && (react.createElement(Button/* Button */.z, { href: props.activity.github, target: "_blank", plain: true, hoverIndicator: "light-3" },
            react.createElement(Box/* Box */.x, { direction: "row", pad: "small" },
                react.createElement(Github/* Github */.E, null),
                react.createElement(Text/* Text */.x, { margin: { left: 'xsmall' } }, "Github"))))));
};
/* harmony default export */ const components_Activity = (Activity);

// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Image/Image.js + 2 modules
var Image = __webpack_require__(9365);
// EXTERNAL MODULE: ./node_modules/grommet-icons/es6/icons/Link.js
var Link = __webpack_require__(8376);
// EXTERNAL MODULE: ./node_modules/grommet-icons/es6/icons/Article.js
var Article = __webpack_require__(8328);
;// CONCATENATED MODULE: ./src/components/Collaborator.tsx



const Collaborator = (props) => {
    return (react.createElement(Box/* Box */.x, { a11yTitle: "Collaborator Components", elevation: props.size, key: props.id, background: "white", pad: props.size },
        react.createElement(Box/* Box */.x, { height: "small", width: "small", alignSelf: "center", pad: "small" },
            react.createElement(Image/* Image */.E, { fit: "contain", src: props.profile.image })),
        react.createElement(Heading/* Heading */.X, { level: 5, textAlign: "center", margin: { vertical: 'small' } }, props.profile.name),
        react.createElement(Text/* Text */.x, { textAlign: "center", margin: "small", size: "small" }, props.profile.bio),
        props.profile.link.github && (react.createElement(Button/* Button */.z, { href: props.profile.link.github, target: "_blank", plain: true, hoverIndicator: "light-3" },
            react.createElement(Box/* Box */.x, { direction: "row", pad: "small" },
                react.createElement(Github/* Github */.E, null),
                react.createElement(Text/* Text */.x, { margin: { left: 'xsmall' } }, "Github")))),
        props.profile.link.portfolio && (react.createElement(Button/* Button */.z, { href: props.profile.link.portfolio, target: "_blank", plain: true, hoverIndicator: "light-3" },
            react.createElement(Box/* Box */.x, { direction: "row", pad: "small" },
                react.createElement(Link/* Link */.r, null),
                react.createElement(Text/* Text */.x, { margin: { left: 'xsmall' } }, "Portfolio")))),
        props.profile.link.atcoder && (react.createElement(Button/* Button */.z, { href: props.profile.link.atcoder, target: "_blank", plain: true, hoverIndicator: "light-3" },
            react.createElement(Box/* Box */.x, { direction: "row", pad: "small" },
                react.createElement(Article/* Article */.d, null),
                react.createElement(Text/* Text */.x, { margin: { left: 'xsmall' } }, "AtCoder"))))));
};
/* harmony default export */ const components_Collaborator = (Collaborator);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 3 modules
var useTranslation = __webpack_require__(2327);
;// CONCATENATED MODULE: ./src/components/layouts/Footer.tsx



const Footer = () => {
    const { t } = (0,useTranslation/* useTranslation */.$)();
    const Footer = t('footer');
    return (react.createElement(Box/* Box */.x, { height: "xsmall", pad: "small", gridArea: "footer", align: "center", justify: "center" },
        react.createElement(Text/* Text */.x, null,
            "\u00A9 ",
            Footer.copyright)));
};
/* harmony default export */ const layouts_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Select/Select.js + 14 modules
var Select = __webpack_require__(5644);
;// CONCATENATED MODULE: ./src/components/layouts/Header.tsx



const Header = () => {
    const { t } = (0,useTranslation/* useTranslation */.$)();
    const [value, setValue] = react.useState('ja');
    const Header = t('header');
    return (react.createElement(Box/* Box */.x, { background: "neutral-3", direction: "row", align: "center", justify: "between", pad: "xsmall" },
        react.createElement(Box/* Box */.x, { direction: "row", align: "center", pad: "xsmall" },
            react.createElement(Box/* Box */.x, { width: "xxsmall", height: "xxsmall" },
                react.createElement(Image/* Image */.E, { fit: "cover", src: Header.logo })),
            react.createElement(Heading/* Heading */.X, { margin: { horizontal: 'small' }, level: "3" }, Header.title)),
        react.createElement(Box/* Box */.x, { width: "xsmall" },
            react.createElement(Select/* Select */.P, { options: ['ja'], value: value, onChange: ({ option }) => setValue(option) }))));
};
/* harmony default export */ const layouts_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Product.tsx



const Product = (props) => {
    return (react.createElement(Box/* Box */.x, { elevation: "large", key: props.id, pad: props.size, background: "white", margin: "xsmall" },
        react.createElement(Heading/* Heading */.X, { level: 3, margin: "xsmall" }, props.product.name),
        react.createElement(Box/* Box */.x, { width: "medium", height: "small", alignSelf: "center", pad: "small" },
            react.createElement(Image/* Image */.E, { fit: "contain", src: props.product.image })),
        react.createElement(Text/* Text */.x, { textAlign: "center", margin: "small", size: "small" }, props.product.desc),
        props.product.github && (react.createElement(Button/* Button */.z, { href: props.product.github, target: "_blank", plain: true, hoverIndicator: "light-3" },
            react.createElement(Box/* Box */.x, { direction: "row", pad: "small" },
                react.createElement(Github/* Github */.E, null),
                react.createElement(Text/* Text */.x, { margin: { left: 'xsmall' } }, "Github"))))));
};
/* harmony default export */ const components_Product = (Product);

// EXTERNAL MODULE: ./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js + 1 modules
var ResponsiveContext = __webpack_require__(456);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Grommet/Grommet.js + 5 modules
var Grommet = __webpack_require__(7902);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(5909);
// EXTERNAL MODULE: ./node_modules/grommet/es6/components/Markdown/Markdown.js + 17 modules
var Markdown = __webpack_require__(2372);
;// CONCATENATED MODULE: ./src/components/Top.tsx








const grommetCustomStyle = {
    global: {},
    image: {
        extend: `width: 100%;`,
    },
    box: {},
};
const Top = () => {
    const { t } = (0,useTranslation/* useTranslation */.$)();
    const products = t('products');
    const collaborators = t('collaborators');
    const contact = t('contact');
    const activities = t('activities');
    const productList = products.items.map((item, idx) => (react.createElement(ResponsiveContext/* ResponsiveContext.Consumer */.b.Consumer, { key: idx }, (size) => react.createElement(components_Product, { product: item.product, key: idx, id: idx, size: size }))));
    const collaboratorList = collaborators.items.map((item, idx) => (react.createElement(ResponsiveContext/* ResponsiveContext.Consumer */.b.Consumer, { key: idx }, (size) => react.createElement(components_Collaborator, { profile: item.profile, key: idx, id: idx, size: size }))));
    const activityList = activities.items.map((item, idx) => (react.createElement(ResponsiveContext/* ResponsiveContext.Consumer */.b.Consumer, { key: idx }, (size) => react.createElement(components_Activity, { activity: item.activity, key: idx, id: idx, size: size }))));
    return (react.createElement(Grommet/* Grommet */.p, { theme: grommetCustomStyle, full: true },
        react.createElement(layouts_Header, null),
        react.createElement(ResponsiveContext/* ResponsiveContext.Consumer */.b.Consumer, null, (size) => (react.createElement(Box/* Box */.x, null,
            react.createElement(Image/* Image */.E, { fit: "cover", src: t('banner') }),
            react.createElement(Box/* Box */.x, { pad: "medium", margin: { bottom: size } },
                react.createElement(Heading/* Heading */.X, { level: "3" }, collaborators.head),
                react.createElement(Grid/* Grid */.r, { columns: {
                        count: 'fill',
                        size: 'medium',
                    }, gap: size }, collaboratorList)),
            react.createElement(Box/* Box */.x, { background: "light-1" },
                react.createElement(Box/* Box */.x, { pad: size, margin: { bottom: size } },
                    react.createElement(Heading/* Heading */.X, { level: "3" }, products.head),
                    react.createElement(Grid/* Grid */.r, { columns: {
                            count: 'fill',
                            size: size,
                        }, gap: "small" }, productList))),
            react.createElement(Box/* Box */.x, { background: "light-1" },
                react.createElement(Box/* Box */.x, { pad: size, margin: { bottom: size } },
                    react.createElement(Heading/* Heading */.X, { level: "3" }, activities.head),
                    react.createElement(Grid/* Grid */.r, { columns: {
                            count: 'fill',
                            size: size,
                        }, gap: "small" }, activityList))),
            react.createElement(Box/* Box */.x, { pad: size, margin: { bottom: size } },
                react.createElement(Heading/* Heading */.X, { level: "3" }, contact.head),
                react.createElement(Text/* Text */.x, { textAlign: "center", alignSelf: "center", margin: { vertical: size }, size: "xsmall" },
                    react.createElement(Markdown/* Markdown */.U, null, contact.message)))))),
        react.createElement(layouts_Footer, null)));
};
/* harmony default export */ const components_Top = (Top);

// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(9711);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/components/App.tsx



class App extends react.Component {
    render() {
        return (react.createElement(react_router_dom/* BrowserRouter */.VK, null,
            react.createElement(react_router/* Routes */.Z5, null,
                react.createElement(react_router/* Route */.AW, { path: "/", element: react.createElement(components_Top, null) }))));
    }
}

// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js + 8 modules
var esm_i18next = __webpack_require__(1796);
// EXTERNAL MODULE: ./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__(6071);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/context.js
var context = __webpack_require__(8718);
;// CONCATENATED MODULE: ./src/assets/i18n/en.yml
/* harmony default export */ const en = ({header:{title:'NaruHiyo Pages',logo:'public/images/brand-logo.png'},footer:{copyright:'narugit and hiyoko3'},banner:'public/images/top.png',collaborators:{head:'Collaborators',items:[{profile:{name:'@narugit',image:'public/images/narugit.png',bio:'Genius gourmet engineer',link:{github:'https://github.com/narugit',portfolio:'https://narugit.github.io/',atcoder:'https://atcoder.jp/users/narucode'}}},{profile:{name:'@hiyoko3',image:'public/images/hiyoko3.png',bio:'ひよこエンジニア',link:{github:'https://github.com/hiyoko3',portfolio:'https://hiyoko3.github.io',atcoder:'https://atcoder.jp/users/ae_hiyoko3'}}}]},products:{head:'Products',items:[{product:{name:'Memoma',image:'public/images/memoma.gif',desc:'Electronを利用したクロスプラットフォーム対応の3カラム型メモアプリ。Markdown記法に対応',github:'https://github.com/naruhiyo/Memoma'}},{product:{name:'Partytion',image:'public/images/partytion.gif',desc:'飲み会でのミニゲームとして使えるiPhoneアプリ',github:'https://github.com/naruhiyo/partytion'}},{product:{name:'aman',image:'public/images/aman.gif',desc:'`man`コマンドからコマンドのオプションを検索して出力してくれるCLI',github:'https://github.com/naruhiyo/aman'}}]},activities:{head:'Activity',items:[{activity:{name:'NaruHiyo 競プロ部',desc:'プログラミング能力を向上させるために AtCdoer を利用してアルゴリズムを勉強中！',github:'https://github.com/naruhiyo/algorithm-enhancement'}}]},contact:{head:'Contact us',message:'`***@gmail.com` \n\n `***` には ***naruhiyo.apps*** と入力してください。'}});
;// CONCATENATED MODULE: ./src/assets/i18n/ja.yml
/* harmony default export */ const ja = ({header:{title:'NaruHiyo Pages',logo:'public/images/brand-logo.png'},footer:{copyright:'narugit and hiyoko3'},banner:'public/images/top.png',collaborators:{head:'開発者',items:[{profile:{name:'@narugit',image:'public/images/narugit.png',bio:'グルメエンジニア',link:{github:'https://github.com/narugit',portfolio:'https://narugit.github.io/',atcoder:'https://atcoder.jp/users/narucode'}}},{profile:{name:'@hiyoko3',image:'public/images/hiyoko3.png',bio:'ひよこエンジニア',link:{github:'https://github.com/hiyoko3',portfolio:'https://hiyoko3.github.io',atcoder:'https://atcoder.jp/users/ae_hiyoko3'}}}]},products:{head:'作ったもの',items:[{product:{name:'Memoma',image:'public/images/memoma.gif',desc:'Electronを利用したクロスプラットフォーム対応の3カラム型メモアプリ。Markdown記法に対応',github:'https://github.com/naruhiyo/Memoma'}},{product:{name:'Partytion',image:'public/images/partytion.gif',desc:'飲み会でのミニゲームとして使えるiPhoneアプリ',github:'https://github.com/naruhiyo/partytion'}},{product:{name:'aman',image:'public/images/aman.gif',desc:'`man`コマンドからコマンドのオプションを検索して出力してくれるCLI',github:'https://github.com/naruhiyo/aman'}},{product:{name:'appetizer',image:'public/images/appetizer.gif',desc:'昼食や夕食の時間帯に指定された駅の近くにある飲食店を紹介してくれるVS Code拡張です',github:'https://github.com/naruhiyo/appetizer'}}]},activities:{head:'活動',items:[{activity:{name:'NaruHiyo 競プロ部',desc:'プログラミング能力を向上させるために AtCdoer を利用してアルゴリズムを勉強中！',github:'https://github.com/naruhiyo/algorithm-enhancement'}}]},contact:{head:'Contact us',message:'`***@gmail.com` \n\n `***` には ***naruhiyo.apps*** と入力してください。'}});
;// CONCATENATED MODULE: ./src/plugins/i18n.ts





const resources = {
    ja: {
        translation: ja,
    },
    en: {
        translation: en,
    },
};
esm_i18next/* default.use */.ZP.use(i18nextBrowserLanguageDetector/* default */.Z)
    .use(context/* initReactI18next */.Db)
    .init({
    resources,
    lng: 'ja',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
    returnObjects: true,
});
/* harmony default export */ const i18n = ((/* unused pure expression or super */ null && (i18next)));

;// CONCATENATED MODULE: ./src/main.tsx





const root = client.createRoot(document.getElementById('root'));
root.render(react.createElement(App, null));


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [896,746,368], () => (__webpack_require__(8853)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;