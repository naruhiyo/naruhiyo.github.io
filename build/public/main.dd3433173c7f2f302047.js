!function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],f=0,m=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);m.length;)m.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={2:0},l=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;l.push([65,1,0,3]),r()}({104:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(15),l=r(39),o=n(r(0));t.default=function(e){return o.createElement(a.Box,{a11yTitle:"Collaborator Components",elevation:e.size,key:e.id,background:"white",pad:e.size},o.createElement(a.Box,{height:"small",width:"small",alignSelf:"center",pad:"small"},o.createElement(a.Image,{fit:"contain",src:e.profile.image})),o.createElement(a.Heading,{level:5,textAlign:"center",margin:{vertical:"small"}},e.profile.name),o.createElement(a.Text,{textAlign:"center",margin:"small",size:"small"},e.profile.bio),o.createElement(a.Box,{direction:"row",gap:"small",pad:"small",justify:"start"},e.profile.link.github&&o.createElement(a.Button,{href:e.profile.link.github,target:"_blank",icon:o.createElement(l.Github,null),plain:!0}),e.profile.link.portfolio&&o.createElement(a.Button,{href:e.profile.link.portfolio,target:"_blank",icon:o.createElement(l.Link,null),plain:!0}),e.profile.link.qiita&&o.createElement(a.Button,{href:e.profile.link.qiita,target:"_blank",icon:o.createElement(l.Article,null),plain:!0})))}},105:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(15),l=n(r(0)),o=r(19);t.default=function(){var e=(0,o.useTranslation().t)("footer");return l.createElement(a.Box,{height:"xsmall",pad:"small",gridArea:"footer",align:"center",justify:"center"},l.createElement(a.Text,null,"© ",e.copyright))}},106:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(15),l=n(r(0)),o=r(19);t.default=function(){var e=o.useTranslation().t,t=l.useState("ja"),r=t[0],n=t[1],i=e("header");return l.createElement(a.Box,{background:"neutral-3",direction:"row",align:"center",justify:"between",pad:"xsmall"},l.createElement(a.Box,{direction:"row",align:"center",pad:"xsmall"},l.createElement(a.Box,{width:"xxsmall",height:"xxsmall"},l.createElement(a.Image,{fit:"cover",src:i.logo})),l.createElement(a.Heading,{margin:{horizontal:"small"},level:"3"},i.title)),l.createElement(a.Box,{width:"xsmall"},l.createElement(a.Select,{options:["ja"],value:r,onChange:function(e){var t=e.option;return n(t)}})))}},107:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(15),l=r(39),o=n(r(0));t.default=function(e){return o.createElement(a.Box,{elevation:"large",key:e.id,pad:e.size,background:"white",margin:"xsmall"},o.createElement(a.Heading,{level:3,margin:"xsmall"},e.product.name),o.createElement(a.Box,{width:"medium",height:"small",alignSelf:"center",pad:"small"},o.createElement(a.Image,{fit:"contain",src:e.product.image})),o.createElement(a.Text,{textAlign:"center",margin:"small",size:"small"},e.product.desc),o.createElement(a.Box,{direction:"row",gap:"small",pad:"small",justify:"start"},e.product.github&&o.createElement(a.Button,{href:e.product.github,target:"_blank",icon:o.createElement(l.Github,null),plain:!0})))}},65:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(r(0)),o=n(r(9));r(70),r(91),r(92);var i=a(r(93));o.render(l.createElement(i.default,null),document.getElementById("root"))},70:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(108)),l=n(r(71)),o=r(19),i=n(r(89)),u={ja:{translation:n(r(90)).default},en:{translation:i.default}};a.default.use(l.default).use(o.initReactI18next).init({resources:u,lng:"ja",keySeparator:!1,interpolation:{escapeValue:!1},returnObjects:!0}),t.default=a.default},89:function(e,t){e.exports={hello_world:"Welcome to React and react-i18next"}},90:function(e,t){e.exports={header:{title:"NaruHiyo Pages",logo:"public/resources/images/brand-logo.png"},footer:{copyright:"narugit and hiyoko3"},banner:"public/resources/images/top.png",collaborators:{head:"Collaborators",items:[{profile:{name:"@narugit",image:"public/resources/images/narugit.png",bio:"Genius gourmet engineer",link:{github:"https://github.com/narugit",portfolio:"",qiita:"https://qiita.com/narugit"}}},{profile:{name:"@hiyoko3",image:"public/resources/images/hiyoko3.png",bio:"Full stack piyopiyo engineer",link:{github:"https://github.com/hiyoko3",portfolio:"https://hiyoko3.github.io",qiita:"https://qiita.com/hiyoko3"}}}]},products:{head:"Products",items:[{product:{name:"Memoma",image:"public/resources/images/memoma.png",desc:"Electronを利用したクロスプラットフォーム対応の3カラム型メモアプリ。Markdown記法に対応",github:"https://github.com/naruhiyo/Memoma"}},{product:{name:"Partytion",image:"public/resources/images/no_image.png",desc:"製作中...!",github:"https://github.com/naruhiyo/partytion"}}]},contact:{head:"Contact us",message:"`***@gmail.com` \n\n `***` には ***sb.gm.0823*** と入力してください。"}}},92:function(e,t,r){},93:function(e,t,r){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=l(r(0)),u=r(109),c=o(r(98)),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return i.createElement("div",{className:"App"},i.createElement(u.BrowserRouter,null,i.createElement(u.Route,{exact:!0,path:"/",component:c.default})))},t}(i.Component);t.default=s},98:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(15),o=n(r(0)),i=r(19),u=a(r(104)),c=a(r(105)),s=a(r(106)),f=a(r(107)),m={global:{},image:{extend:"width: 100%;"},box:{}};t.default=function(){var e=i.useTranslation().t,t=e("products"),r=e("collaborators"),n=e("contact"),a=t.items.map(function(e,t){return o.createElement(l.ResponsiveContext.Consumer,{key:t},function(r){return o.createElement(f.default,{product:e.product,key:t,id:t,size:r})})}),p=r.items.map(function(e,t){return o.createElement(l.ResponsiveContext.Consumer,{key:t},function(r){return o.createElement(u.default,{profile:e.profile,key:t,id:t,size:r})})});return o.createElement(l.Grommet,{theme:m,full:!0},o.createElement(s.default,null),o.createElement(l.ResponsiveContext.Consumer,null,function(i){return o.createElement(l.Box,null,o.createElement(l.Image,{fit:"cover",src:e("banner")}),o.createElement(l.Box,{pad:i,margin:{bottom:i}},o.createElement(l.Heading,{level:"3"},r.head),o.createElement(l.Grid,{columns:{count:"fill",size:"small"},gap:i},p)),o.createElement(l.Box,{background:"light-1"},o.createElement(l.Box,{pad:i,margin:{bottom:i}},o.createElement(l.Heading,{level:"3"},t.head),o.createElement(l.Grid,{columns:{count:"fill",size:i},gap:"small"},a))),o.createElement(l.Box,{pad:i,margin:{bottom:i}},o.createElement(l.Heading,{level:"3"},n.head),o.createElement(l.Text,{textAlign:"center",alignSelf:"center",margin:{vertical:i},size:"xsmall"},o.createElement(l.Markdown,null,n.message))))}),o.createElement(c.default,null))}}});