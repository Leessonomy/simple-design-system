parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wU4p":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={block:"header",mix:[{block:"theme",mods:{gap:"small_xxxl"}},{block:"grid",elem:"fraction",mods:{"m-col":"10"}},{block:"section",mods:{"space-v":"xxl"}},{block:"layout",elem:"container",mods:{"space-v":"xxxxxl"}}],content:[{block:"header",elem:"logo"},{block:"onoffswitch",content:[{block:"onoffswitch__button"}]}]},e=o;exports.default=e;
},{}],"IgG3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={block:"payment",mix:[{block:"form",mods:{border:"all"}},{block:"grid",elem:"fraction",mods:{"m-col":"5"}},{block:"section",mods:{"space-v":"xxl"}}],content:[{block:"payment",elem:"header",mix:[{block:"form",elem:"item",mods:{"space-v":"xxl","space-h":"xl",border:"bottom"}}],content:[{block:"text",mods:{view:"primary_default",size:"xxl"},mix:[{block:"form",elem:"item",mods:{"indent-b":"xxl"}}],content:[{block:"text",elem:"word",mods:{width:"xxl_l"}}]}]},{block:"payment",elem:"content",mix:[{block:"form",elem:"item",mods:{"space-v":"xxl","space-h":"xl",border:"bottom"}}],content:[{block:"form",elem:"line",mix:[{block:"form",elem:"item",mods:{"indent-b":"xxxl","space-v":"l"}}],content:[{block:"form",elem:"label",mix:[{block:"form",elem:"label"}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"},mix:[{block:"form",elem:"item",mods:{"space-v":"xl"}}]}]},{block:"text",mods:{view:"primary_default",size:"l"},mix:[{block:"form",elem:"item",mods:{"indent-b":"xl","space-v":"xxxxl"}}],content:[{block:"text",elem:"word",mods:{width:"l_l"}}]}]}]},{block:"form",elem:"control",mix:[{block:"form",elem:"item",mods:{"space-v":"xxs","space-h":"xxl"}}],content:[{block:"form",elem:"label",content:[{block:"form",elem:"item",mods:{"indent-b":"xl"},content:[{block:"form",elem:"line",mix:[{block:"form",mods:{border:"all"}}],content:[{block:"text",elem:"word",mods:{width:"xl_l"},mix:[{block:"form",elem:"item",mods:{"space-v":"xl"}}]},{block:"text",elem:"word",mods:{width:"xl_l"},mix:[{block:"form",elem:"item",mods:{"space-v":"xl"}}]}]}]},{block:"form",elem:"item",content:[{block:"form",elem:"line",mix:[{block:"form",mods:{border:"all"}}],content:[{block:"text",elem:"word",mods:{width:"xl_l"}},{block:"text",elem:"word",mods:{width:"xl_l"},mix:[{block:"form",elem:"item",mods:{"space-v":"xl"}}]}]}]}]}]}]},{block:"payment",elem:"footer",mix:[{block:"form",elem:"item",mods:{distribute:"between",border:"bottom","vertical-align":"center","space-v":"l","space-h":"xl"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},mix:[{block:"form",elem:"item",mods:{"space-v":"l","indent-b":"xxl"}}],content:[{block:"text",elem:"word",mods:{width:"l_l"}}]},{block:"form",elem:"item",mods:{"space-h":"xl-r"},content:[{block:"button",mods:{size:"l"},mix:[{block:"theme",mods:{color:"project-default-accent"}},{block:"form",elem:"item",mods:{"indent-b":"l"}}]}]}]}]},o=e;exports.default=o;
},{}],"JPWa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={block:"warning",mix:[{block:"informer",mods:{view:"default",border:"all"}},{block:"theme",mods:{color:"project-warning-default"}},{block:"grid",elem:"fraction",mods:{"m-col":"5"}},{block:"section",mods:{"space-v":"xxl"}}],content:[{block:"warning",elem:"content",mix:[{block:"informer",elem:"content",mods:{distribute:"center","space-a":"xxl"}}],content:[{block:"list",elem:"item",mods:{"vertical-align":"center","indent-t":"m"},mix:[{block:"card",elem:"content",mods:{"vertical-align":"center"}}],content:[{block:"theme",mods:{color:"project-warning-accent"},content:[{block:"placeholder",mix:[{block:"placeholder",mods:{view:"primary",size:"m"}}],content:[{block:"button"}]}]},{block:"list",elem:"item",mods:{"vertical-align":"center","space-a":"l","indent-b":"m"},mix:[{block:"card",elem:"content",mods:{"vertical-align":"center"}}],content:[{block:"list",elem:"item",mix:[{block:"theme",mods:{color:"project-warning-accent"}}],content:[{block:"text",mix:[{block:"text",mods:{size:"xl"}}],content:[{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}},{block:"text",elem:"word",mods:{width:"m_m"}},{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"m_m"}},{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"m_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]},{block:"list",elem:"item",mix:[{block:"theme",mods:{color:"project-warning-accent"}}],mods:{"indent-t":"m","indent-b":"xl"},content:[{block:"text",mix:[{block:"text",mods:{size:"xl"}}],content:[{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]},{block:"list",elem:"item",mods:{"indent-t":"m"},content:[{block:"warning",elem:"button-wrapper",mix:[{block:"informer",elem:"action",mods:{distribute:"center","space-a":"xxl"}}],content:[{block:"button",mods:{size:"l"},mix:[{block:"theme",mods:{color:"project-warning-accent"}}]}]}]}]}]}]},t=e;exports.default=t;
},{}],"oVph":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={block:"product",mix:[{block:"card",mods:{view:"default",border:"all"}},{block:"grid",elem:"fraction",mods:{"m-col":"2"}},{block:"section",mods:{"space-v":"xxl"}}],content:[{block:"product",elem:"content",mix:[{block:"card",elem:"content",mods:{"space-a":"xxl"}}],content:[{block:"theme",mods:{color:"project-inverse-default"},content:[{block:"image",elem:"product"}]},{block:"card",elem:"content",mods:{distribute:"center"},mix:[{block:"list",elem:"item",mods:{distribute:"between"}},{block:"section",mods:{"space-v":"xxxxl"}}],content:[{block:"list",elem:"item",mods:{"indent-t":"m","indent-b":"s"},content:[{block:"text",mix:[{block:"text",mods:{view:"primary_default",size:"l"}}],content:[{block:"text",elem:"word",mods:{width:"m_l"}}]}]},{block:"list",elem:"item",content:[{block:"text",mix:[{block:"text",mods:{view:"primary_default",size:"m"}}],content:[{block:"text",elem:"word",mods:{width:"m_m"}}]}]}]}]},{block:"product",elem:"footer",mix:[{block:"card",elem:"footer",mods:{"space-a":"m_m"}}]}]},t=e;exports.default=t;
},{}],"NJiH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={block:"history",mix:[{block:"list",mods:{view:"default",border:"all"}},{block:"grid",elem:"fraction",mods:{"m-col":"7"}},{block:"section",mods:{"space-v":"xxl"}}],content:[{block:"history",elem:"transaction",mix:[{block:"list",elem:"item",mods:{border:"bottom","space-a":"l"}}],content:[{block:"history",elem:"destination",mix:[{block:"icon-plus",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"details",mix:[{block:"card",elem:"content",mods:{distribute:"center"}},{block:"form",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"show",mix:[{block:"e-accordion",elem:"short"},{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"time",mix:[{block:"card",elem:"content",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"secondary",size:"l"},mix:[{block:"list",elem:"item",mods:{"indent-t":"m","indent-b":"s"}}],content:[{block:"text",elem:"word",mods:{width:"s_m"}}]},{block:"text",mods:{view:"secondary",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}}]}]},{block:"history",elem:"pic",mix:[{block:"icon-plus",elem:"icon",mods:{"indent-r":"s"}},{block:"icon-plus",elem:"icon",mods:{"indent-l":"l"}},{block:"card",elem:"content",mods:{distribute:"center"}}],content:[{block:"brand-logo",mods:{name:"yota",size:"m"}}]},{block:"history",elem:"label",mix:[{block:"icon-plus",elem:"block"},{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}}]}]},{block:"history",elem:"quantity",mix:[{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]},{block:"history",elem:"hide",mix:[{block:"e-accordion",elem:"more",mods:{view:"default"}},{block:"list",elem:"item",mods:{"indent-t":"m","vertical-align":"center"}}],content:[{block:"history",elem:"description",mix:[{block:"list",elem:"item",mods:{"indent-b":"m"}},{block:"list",elem:"item",mods:{"indent-t":"m",distribute:"between"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"text",mods:{view:"primary_default",size:"l"},mix:[{block:"list",elem:"item",mods:{"indent-t":"m"}},{block:"list",elem:"item",mods:{"indent-b":"m"}}],content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"history",elem:"actions",mix:[{block:"list",elem:"item",mods:{"indent-t":"m"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}}]},{block:"history",elem:"label",mods:{hidden:"text"},content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]}]}]}]}]}]},{block:"history",elem:"transaction",mix:[{block:"list",elem:"item",mods:{border:"bottom","space-a":"l"}}],content:[{block:"history",elem:"destination",mix:[{block:"icon-plus",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"details",mix:[{block:"card",elem:"content",mods:{distribute:"center"}},{block:"form",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"show",mix:[{block:"e-accordion",elem:"short"},{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"time",mix:[{block:"card",elem:"content",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"secondary",size:"l"},mix:[{block:"list",elem:"item",mods:{"indent-t":"m","indent-b":"s"}}],content:[{block:"text",elem:"word",mods:{width:"s_m"}}]},{block:"text",mods:{view:"secondary",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}}]}]},{block:"history",elem:"pic",mix:[{block:"icon-plus",elem:"icon",mods:{"indent-r":"s"}},{block:"icon-plus",elem:"icon",mods:{"indent-l":"l"}},{block:"card",elem:"content",mods:{distribute:"center"}}],content:[{block:"brand-logo",mods:{name:"mts",size:"m"}}]},{block:"history",elem:"label",mix:[{block:"icon-plus",elem:"block"},{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}}]}]},{block:"history",elem:"quantity",mix:[{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]},{block:"history",elem:"hide",mix:[{block:"e-accordion",elem:"more",mods:{view:"default"}},{block:"list",elem:"item",mods:{"indent-t":"m","vertical-align":"center"}}],content:[{block:"history",elem:"description",mix:[{block:"list",elem:"item",mods:{"indent-b":"m"}},{block:"list",elem:"item",mods:{"indent-t":"m",distribute:"between"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"text",mods:{view:"primary_default",size:"l"},mix:[{block:"list",elem:"item",mods:{"indent-t":"m"}},{block:"list",elem:"item",mods:{"indent-b":"m"}}],content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"history",elem:"actions",mix:[{block:"list",elem:"item",mods:{"indent-t":"m"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}}]},{block:"history",elem:"label",mods:{hidden:"text"},content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]}]}]}]}]}]},{block:"history",elem:"transaction",mix:[{block:"list",elem:"item",mods:{border:"bottom","space-a":"l"}}],content:[{block:"history",elem:"destination",mix:[{block:"icon-plus",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"details",mix:[{block:"card",elem:"content",mods:{distribute:"center"}},{block:"form",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"show",mix:[{block:"e-accordion",elem:"short"},{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"time",mix:[{block:"card",elem:"content",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"secondary",size:"l"},mix:[{block:"list",elem:"item",mods:{"indent-t":"m","indent-b":"s"}}],content:[{block:"text",elem:"word",mods:{width:"s_m"}}]},{block:"text",mods:{view:"secondary",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}}]}]},{block:"history",elem:"pic",mix:[{block:"icon-plus",elem:"icon",mods:{"indent-r":"s"}},{block:"icon-plus",elem:"icon",mods:{"indent-l":"l"}},{block:"card",elem:"content",mods:{distribute:"center"}}],content:[{block:"brand-logo",mods:{name:"kcell",size:"m"}}]},{block:"history",elem:"label",mix:[{block:"icon-plus",elem:"block"},{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}}]}]},{block:"history",elem:"quantity",mix:[{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]},{block:"history",elem:"hide",mix:[{block:"e-accordion",elem:"more",mods:{view:"default"}},{block:"list",elem:"item",mods:{"indent-t":"m","vertical-align":"center"}}],content:[{block:"history",elem:"description",mix:[{block:"list",elem:"item",mods:{"indent-b":"m"}},{block:"list",elem:"item",mods:{"indent-t":"m",distribute:"between"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"text",mods:{view:"primary_default",size:"l"},mix:[{block:"list",elem:"item",mods:{"indent-t":"m"}},{block:"list",elem:"item",mods:{"indent-b":"m"}}],content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"history",elem:"actions",mix:[{block:"list",elem:"item",mods:{"indent-t":"m"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}}]},{block:"history",elem:"label",mods:{hidden:"text"},content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]}]}]}]}]}]},{block:"history",elem:"transaction",mix:[{block:"list",elem:"item",mods:{border:"bottom","space-a":"l"}}],content:[{block:"history",elem:"destination",mix:[{block:"icon-plus",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"details",mix:[{block:"card",elem:"content",mods:{distribute:"center"}},{block:"form",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"show",mix:[{block:"e-accordion",elem:"short"},{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"history",elem:"time",mix:[{block:"card",elem:"content",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"secondary",size:"l"},mix:[{block:"list",elem:"item",mods:{"indent-t":"m","indent-b":"s"}}],content:[{block:"text",elem:"word",mods:{width:"s_m"}}]},{block:"text",mods:{view:"secondary",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}}]}]},{block:"history",elem:"pic",mix:[{block:"icon-plus",elem:"icon",mods:{"indent-r":"s"}},{block:"icon-plus",elem:"icon",mods:{"indent-l":"l"}},{block:"card",elem:"content",mods:{distribute:"center"}}],content:[{block:"brand-logo",mods:{name:"megafon",size:"m"}}]},{block:"history",elem:"label",mix:[{block:"icon-plus",elem:"block"},{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}}]}]},{block:"history",elem:"quantity",mix:[{block:"list",elem:"item",mods:{"vertical-align":"center"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]},{block:"history",elem:"hide",mix:[{block:"e-accordion",elem:"more",mods:{view:"default"}},{block:"list",elem:"item",mods:{"indent-t":"m","vertical-align":"center"}}],content:[{block:"history",elem:"description",mix:[{block:"list",elem:"item",mods:{"indent-b":"m"}},{block:"list",elem:"item",mods:{"indent-t":"m",distribute:"between"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"text",mods:{view:"primary_default",size:"l"},mix:[{block:"list",elem:"item",mods:{"indent-t":"m"}},{block:"list",elem:"item",mods:{"indent-b":"m"}}],content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"history",elem:"actions",mix:[{block:"list",elem:"item",mods:{"indent-t":"m"}}],content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"l_l"}}]},{block:"history",elem:"label",mods:{hidden:"text"},content:[{block:"text",mods:{view:"primary_default",size:"l"},content:[{block:"text",elem:"word",mods:{width:"s_m"}},{block:"text",elem:"word",mods:{width:"s_s"}}]}]}]}]}]}]}]}]}]},t=e;exports.default=t;
},{}],"4NXz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={block:"commercial",mix:[{block:"card",mods:{view:"default"}},{block:"theme",mods:{color:"project-brand-default"}},{block:"grid",elem:"fraction",mods:{"m-col":"3"}},{block:"section",mods:{"space-v":"xxl"}}],content:[{block:"commercial",elem:"pic",mix:[{block:"card",elem:"content",mods:{"space-a":"xxl"}}],content:[{block:"card",mods:{border:"all_brand"},content:[{block:"image",mix:[{block:"commercial",elem:"image",mods:{style:"height"}}]}]}]},{block:"commercial",elem:"info",mix:[{block:"card",elem:"footer",mods:{"space-a":"xl"}},{block:"section",mods:{"space-v":"xxl"}}],content:[{block:"text",mix:[{block:"text",mods:{view:"primary",size:"s"}},{block:"list",elem:"item",mods:{"indent-b":"s"}},{block:"section",mods:{"space-v":"xxxxl"}}],content:[{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}},{block:"text",elem:"word",mods:{width:"l_l"}}]},{block:"text",mix:[{block:"text",mods:{view:"primary",size:"s"}},{block:"list",elem:"item",mods:{"indent-b":"s"}}],content:[{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"s_s"}},{block:"text",elem:"word",mods:{width:"m_m"}},{block:"text",elem:"word",mods:{width:"l_l"}},{block:"text",elem:"word",mods:{width:"m_m"}}]},{block:"commercial",elem:"navigation",mix:[{block:"card",elem:"content",mods:{distribute:"center"}}],content:[{block:"commercial",elem:"page-button"},{block:"commercial",elem:"page-button"},{block:"commercial",elem:"page-button"}]}]}]},o=e;exports.default=o;
},{}],"Egl8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={block:"footer",mix:[{block:"theme",mods:{gap:"small_xxxl"}},{block:"form",elem:"item",mods:{"space-v":"xxxl"}},{block:"grid",elem:"fraction",mods:{"m-col":"10"}},{block:"form",elem:"item",mods:{distribute:"between"}}],content:[{block:"text",mix:[{block:"text",mods:{view:"primary_default",size:"l"}}],content:[{block:"text",elem:"word",mix:[{block:"text",elem:"word",mods:{width:"l_l"}}]},{block:"text",elem:"word",mix:[{block:"text",elem:"word",mods:{width:"s_s"}}]}]},{block:"text",mix:[{block:"text",mods:{view:"primary_default",size:"l"}}],content:[{block:"text",elem:"word",mix:[{block:"text",elem:"word",mods:{width:"m_s"}}]},{block:"text",elem:"word",mix:[{block:"text",elem:"word",mods:{width:"m_l"}}]}]}]},t=e;exports.default=t;
},{}],"3ggZ":[function(require,module,exports) {
"use strict";var e=s(require("../bemjson/header.js")),c=s(require("../bemjson/payment.js")),t=s(require("../bemjson/warning.js")),o=s(require("../bemjson/product.js")),a=s(require("../bemjson/history.js")),n=s(require("../bemjson/commercial.js")),r=s(require("../bemjson/footer.js"));function s(e){return e&&e.__esModule?e:{default:e}}var d=document.createElement("div"),l=document.getElementById("root");l.className="theme_breakpoint grid_m-columns_10 grid_col-gap_full";var i=[e.default,c.default,t.default,o.default,o.default,o.default,o.default,o.default,a.default,n.default,r.default];function m(e,c){if(c){var t=document.createElement("div");if(c.elem?t.classList.add("".concat(c.block,"__").concat(c.elem)):t.classList.add(c.block),c.elem)for(var o in c.mods)t.classList.add("".concat(c.block,"__").concat(c.elem,"_").concat(o,"_").concat(c.mods[o]));if(c.mods){var a=c.block;for(var n in c.mods)t.classList.add("".concat(a,"_").concat(n,"_").concat(c.mods[n]))}if(c.mix&&c.mix.reduce(function(e,c){if(c.elem)for(var o in c.mods)t.classList.add("".concat(c.block,"__").concat(c.elem)),t.classList.add("".concat(c.block,"__").concat(c.elem,"_").concat(o,"_").concat(c.mods[o]));else for(var a in c.mods)t.classList.add("".concat(c.block,"_").concat(a,"_").concat(c.mods[a]))},""),c.content)for(var r=0;r<c.content.length;r++){var s=c.content[r];m(t,s)}e.appendChild(t)}}function u(e){var c=document.createElement("div");return m(c,e),c.innerHTML}Object.keys(i).forEach(function(e){l.insertAdjacentHTML("beforeend",u(i[e]))});
},{"../bemjson/header.js":"wU4p","../bemjson/payment.js":"IgG3","../bemjson/warning.js":"JPWa","../bemjson/product.js":"oVph","../bemjson/history.js":"NJiH","../bemjson/commercial.js":"4NXz","../bemjson/footer.js":"Egl8"}]},{},["3ggZ"], null)
//# sourceMappingURL=/template-engine.0f5b8114.js.map