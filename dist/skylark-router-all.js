/**
 * skylark-router - An Elegant HTML5 Routing Framework.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.2
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){function r(t,n){if("."!==t[0])return t;var r=n.split("/"),e=t.split("/");r.pop();for(var i=0;i<e.length;i++)"."!=e[i]&&(".."==e[i]?r.pop():r.push(e[i]));return r.join("/")}var e=n.define,i=n.require,o="function"==typeof e&&e.amd,u=!o&&"undefined"!=typeof exports;if(!o&&!e){var a={};e=n.define=function(t,n,e){"function"==typeof e?(a[t]={factory:e,deps:n.map(function(n){return r(n,t)}),exports:null},i(t)):resolved[t]=e},i=n.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var n=a[t];if(!n.exports){var r=[];n.deps.forEach(function(t){r.push(i(t))}),n.exports=n.factory.apply(window,r)}return n.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");t(e,i),o||(u?exports=i("skylark-router/router"):n.skylarkjs=i("skylark-router/main"))}(function(t,n){t("skylark-langx/skylark",[],function(){var t={};return t}),t("skylark-langx/langx",["./skylark"],function(t){function n(t,n){var r,e,i=function(){t.apply(null,e)};return function(){e=arguments,clearTimeout(r),r=setTimeout(i,n)}}function r(t){return M.call(t,function(t){return null!=t})}function e(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function i(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?JSON.parse(t):t):t}catch(n){return t}}function o(t,n){var r,e,i,o,u;if(t)if(r=t.length,r===o){for(e in t)if(t.hasOwnProperty(e)&&(u=t[e],n.call(u,e,u)===!1))break}else for(i=0;i<r&&(u=t[i],n.call(u,i,u)!==!1);i++);return this}function u(t){if(l(t)){for(var n=[],r=0;r<t.length;r++){var e=t[r];if(l(e))for(var i=0;i<e.length;i++)n.push(e[i]);else n.push(e)}return n}return t}function a(t,n,r,e){return v(n)?n.call(t,r,e):n}function s(t){var t=t||window.location.href,n=t.split("?"),r={};return n.length>1&&n[1].split("&").forEach(function(t){var n=t.split("=");r[n[0]]=n[1]}),r}function c(t,n){if(!n)return-1;var r;if(n.indexOf)return n.indexOf(t);for(r=n.length;r--;)if(n[r]===t)return r;return-1}function f(t){return t instanceof Array}function l(t){return!y(t)&&"number"==typeof t.length}function p(t){return"boolean"==typeof t}function h(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function v(t){return"function"==I(t)}function d(t){return"object"==I(t)}function g(t){return d(t)&&!m(t)&&Object.getPrototypeOf(t)==Object.prototype}function y(t){return"string"==typeof t}function m(t){return t&&t==t.window}function w(t){return"undefined"!=typeof t}function x(t){return"number"==typeof t}function b(t){if(t){var n=location.protocol+"//"+location.hostname;return location.port&&(n+=":"+location.port),t.startsWith(n)}}function k(t){var n;for(n in t)if(null!==t[n])return!1;return!0}function _(t,n,r){return(r||[]).concat(Array.prototype.slice.call(t,n||0))}function E(t,n){var r,e,i,o=[];if(l(t))for(e=0;e<t.length;e++)r=n.call(t[e],t[e],e),null!=r&&o.push(r);else for(i in t)r=n.call(t[i],t[i],i),null!=r&&o.push(r);return u(o)}function j(t){return requestAnimationFrame(t),this}function A(t,n){var r=2 in arguments&&L.call(arguments,2);if(v(t)){var e=function(){return t.apply(n,r?r.concat(L.call(arguments)):arguments)};return e}if(y(n))return r?(r.unshift(t[n],t),A.apply(null,r)):A(t[n],t);throw new TypeError("expected function")}function O(t){return parseFloat(t)||0}function T(t){return null==t?"":String.prototype.trim.call(t)}function D(t,n){if(f(t)){var r=t.indexOf(n);r!=-1&&t.splice(r,1)}else if(g(t))for(var e in t)if(t[e]==n){delete t[e];break}return this}function H(t,n,r,e){for(var i in n)n.hasOwnProperty(i)&&(e&&void 0!==t[i]||(r&&(g(n[i])||f(n[i]))?(g(n[i])&&!g(t[i])&&(t[i]={}),f(n[i])&&!f(t[i])&&(t[i]=[]),H(t[i],n[i],r,e)):void 0!==n[i]&&(t[i]=n[i])));return t}function P(t){var n=L.call(arguments,0);return target=n.shift(),deep=!1,p(n[n.length-1])&&(deep=n.pop()),{target:target,sources:n,deep:deep}}function C(){var t=P.apply(this,arguments);return t.sources.forEach(function(n){H(t.target,n,t.deep,!1)}),t.target}function F(){var t=P.apply(this,arguments);return t.sources.forEach(function(n){H(t.target,n,t.deep,!0)}),t.target}function N(t,n,r,e){function i(t,n){if(t.match(/\./)){var r,e=function(t,n){var i=t.pop();return i?n[i]?e(t,r=n[i]):null:r};return e(t.split(".").reverse(),n)}return n[t]}return e=e||window,r=r?A(e,r):function(t){return t},t.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(t,o,u){var a=i(o,n);return u&&(a=i(u,e).call(e,a,o)),r(a,o).toString()})}function S(t){return t._uid||t.id||(t._uid=B++)}function z(t){return M.call(t,function(n,r){return t.indexOf(n)==r})}function R(){return R}var $={}.toString,L=(Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice),M=Array.prototype.filter,U=function(){function t(t,n,r){var e=t.prototype,i=t.superclass.prototype,o=r&&r.noOverrided;for(var u in n)"constructor"!==u&&(e[u]="function"!=typeof n[u]||o||"function"!=typeof i[u]?n[u]:function(t,n,r){return function(){var t=this.overrided;this.overrided=r;var e=n.apply(this,arguments);return this.overrided=t,e}}(u,n[u],i[u]));return t}return function n(r,e,i){var o=r.constructor;o===Object&&(o=function(){this.init&&this.init.apply(this,arguments)});var u=r.klassName||"",a=new Function("return function "+u+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}ctor._constructor.apply(inst, arguments);return inst;}")();return a._constructor=o,e=e||Object,a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.superclass=e,a.__proto__=e,a.partial||(a.partial=function(n,r){return t(this,n,r)}),a.inherit||(a.inherit=function(t,r){return n(t,this,r)}),a.partial(r,i),a}}(),Z=function(){this.promise=new Promise(function(t,n){this._resolve=t,this._reject=n}.bind(this)),this.resolve=Z.prototype.resolve.bind(this),this.reject=Z.prototype.reject.bind(this)};Z.prototype.resolve=function(t){return this._resolve.call(this.promise,t),this},Z.prototype.reject=function(t){return this._reject.call(this.promise,t),this},Z.prototype.then=function(t,n,r){return this.promise.then(t,n,r)},Z.all=function(t){return Promise.all(t)},Z.first=function(t){return Promise.race(t)},Z.when=function(t,n,r,e){var i=t&&"function"==typeof t.then,o=i&&t instanceof Promise;if(!i)return arguments.length>1?n?n(t):t:(new Z).resolve(t);if(!o){var u=new Z(t.cancel);t.then(u.resolve,u.reject,u.progress),t=u.promise}return n||r||e?t.then(n,r,e):t},Z.reject=function(t){var n=new Z;return n.reject(t),n.promise},Z.resolve=function(t){var n=new Z;return n.resolve(t),n.promise},Z.immediate=Z.resolve;var q=U({on:function(t,n,r,e,i,u){var a=this,s=this._hub||(this._hub={});return g(t)?(i=e,o(t,function(t,e){a.on(t,n,r,e,i,u)}),this):(y(n)||v(e)||(i=e,e=r,r=n,n=void 0),v(r)&&(i=e,e=r,r=null),y(t)&&(t=t.split(/\s/)),t.forEach(function(t){(s[t]||(s[t]=[])).push({fn:e,selector:n,data:r,ctx:i,one:u})}),this)},one:function(t,n,r,e,i){return this.on(t,n,r,e,i,1)},trigger:function(t){if(!this._hub)return this;var n=this;y(t)&&(t=new CustomEvent(t));var e=L.call(arguments,1);return e=w(e)?[t].concat(e):[t],[t.type||t.name,"all"].forEach(function(i){var o=n._hub[i];if(o){for(var u=o.length,a=!1,s=0;s<u;s++){var c=o[s];t.data?c.data&&(t.data=C({},c.data,t.data)):t.data=c.data||null,c.fn.apply(c.ctx,e),c.one&&(o[s]=null,a=!0)}a&&(n._hub[i]=r(o))}}),this},listened:function(t){var n=(this._hub||(this._events={}))[t]||[];return n.length>0},listenTo:function(t,n,r,e){if(!t)return this;y(r)&&(r=this[r]),e?t.one(n,r,this):t.on(n,r,this);for(var i,o=this._listeningTo||(this._listeningTo=[]),u=0;u<o.length;u++)if(o[u].obj==t){i=o[u];break}i||o.push(i={obj:t,events:{}});var a=i.events,s=a[n]=a[n]||[];return s.indexOf(r)==-1&&s.push(r),this},listenToOnce:function(t,n,r){return this.listenTo(t,n,r,1)},off:function(t,n){var r=this._hub||(this._hub={});return y(t)&&(t=t.split(/\s/)),t.forEach(function(t){var e=r[t],i=[];if(e&&n)for(var o=0,u=e.length;o<u;o++)e[o].fn!==n&&e[o].fn._!==n&&i.push(e[o]);i.length?r[t]=i:delete r[t]}),this},unlistenTo:function(t,n,e){var i=this._listeningTo;if(!i)return this;for(var o=0;o<i.length;o++){var u=i[o];if(!t||t==u.obj){var a=u.events;for(var s in a)if(!n||n==s){listeningEvent=a[s];for(var c=0;c<listeningEvent.length;c++)e&&e!=listeningEvent[o]||(u.obj.off(s,listeningEvent[o],this),listeningEvent[o]=null);listeningEvent=a[s]=r(listeningEvent),k(listeningEvent)&&(a[s]=null)}k(a)&&(i[o]=null)}}return i=this._listeningTo=r(i),k(i)&&(this._listeningTo=null),this}}),I=(function(){var t;return function(n){return t||(t=document.createElement("a")),t.href=n,t.href}}(),function(){var t={};return o("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(n,r){t["[object "+r+"]"]=r.toLowerCase()}),function(n){return null==n?String(n):t[$.call(n)]||"object"}}()),B=1;return C(R,{camelCase:function(t){return t.replace(/-([\da-z])/g,function(t){return t.toUpperCase().replace("-","")})},compact:r,dasherize:e,debounce:n,Deferred:Z,Evented:q,deserializeValue:i,each:o,flatten:u,funcArg:a,getQueryParams:s,inArray:c,isArray:f,isArrayLike:l,isBoolean:p,isDefined:function(t){return void 0!==t},isDocument:h,isEmptyObject:k,isFunction:v,isObject:d,isPlainObject:g,isNumber:x,isString:y,isSameOrigin:b,isWindow:m,klass:function(t,n,r){return U(t,n,r)},lowerFirst:function(t){return t.charAt(0).toLowerCase()+t.slice(1)},makeArray:_,map:E,mixin:C,nextTick:j,proxy:A,removeItem:D,returnTrue:function(){return!0},returnFalse:function(){return!1},safeMixin:F,substitute:N,toPixel:O,trim:T,type:I,uid:S,uniq:z,upperFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}),t.langx=R}),t("skylark-router/router",["skylark-langx/skylark","skylark-langx/langx"],function(t,n){function r(t,r){var e=new CustomEvent(t,r);return n.safeMixin(e,r)}function e(){return d}function i(t){if(g){var e=g.route.exit({path:g.path,params:g.params},!0);if(!e)return}if(g=d,d=t,!d.route){var i=u(d.path);d.route=i.route,d.params=i.params}var o=d.route.enter({path:d.path,params:d.params},!0);n.Deferred.when(o).then(function(){b.trigger(r("routing",{current:d,previous:g})),d.route.enter({path:d.path,params:d.params},!1),g&&g.route.exit({path:g.path,params:g.params},!1),b.trigger(r("routed",{current:d,previous:g}))})}function o(t,n){if(!n&&d&&d.path==t)return!1;var e=u(t);if(e)if(e.path=t,_.useHistoryApi){var o={path:t};window.history.pushState(o,document.title,(y+t).replace("//","/")),window.dispatchEvent(r("popstate",{state:o}))}else if(_.useHashbang){var a="#!"+t;window.location.hash!==a?window.location.hash=a:i(e)}else i(e);return!0}function u(t,r){var e=!1;return!r&&(e=x[t])?e:(n.each(w,function(n,r){var i=r.match(t);return!i||(e={route:r,params:i},!1)}),e&&!r&&(x[t]=e),e)}function a(t,n){var r,e=w[t];return e&&(r=e.path(n)),r}function s(){return g}function c(t){return n.isDefined(t)?(y=t,this):y}function f(){return b}function l(t){return n.isDefined(t)?(m=t,this):m}function p(t,r){if(n.isDefined(r)){var e={};return e[t]=r,h(e),this}return w[t]}function h(t){if(!n.isDefined(t))return n.mixin({},w);for(var r in t)w[r]=new _.Route(r,t[r])}function v(){null==_.useHashbang&&null==_.useHistoryApi&&(window.location.host?_.useHistoryApi=!0:_.useHashbang=!0);var t;_.useHistoryApi?(t=window.location.pathname,void 0===y&&(y=t.replace(/\/$/,"")),t=t.replace(y,"")||m||"/"):t=_.useHashbang?window.location.hash.replace("#!","")||m||"/":"/",_.useHistoryApi?window.addEventListener("popstate",function(t){t.state&&i(t.state),t.preventDefault()}):_.useHashbang&&window.addEventListener("hashchange",function(t){i({path:window.location.hash.replace(/^#!/,"")}),t.preventDefault()}),o(t)}var d,g,y,m,w={},x={},b=new n.Evented,k=n.Evented.inherit({klassName:"Route",init:function(t,r){r=n.mixin({},r);var e=r.pathto||"",i=e,o=i.match(/\:([a-zA-Z0-9_]+)/g);null!==o?(o=o.map(function(t){return t.substring(1)}),i=i.replace(/\:([a-zA-Z0-9_]+)/g,"(.*?)")):o=[],i="*"===i?"(.*)":i.replace("/","\\/"),this._setting=r,this.name=t,this.pathto=e,this.paramNames=o,this.params=i,this.regex=new RegExp("^"+i+"$","");var u=this;["entering","entered","exiting","exited"].forEach(function(t){n.isFunction(r[t])&&u.on(t,r[t])})},enter:function(t,e){if(e){var i=this._entering(t),o=this;return n.Deferred.when(i).then(function(){var t=r("entering",{route:o,result:!0});return o.trigger(t),t.result})}return this._entered(t),this.trigger(r("entered",n.safeMixin({route:this},t))),this},exit:function(t,e){if(e){var i=this._exiting(t);if(!i)return!1;var o=r("exiting",{route:this,result:!0});return this.trigger(o),o.result}return this._exited(t),this.trigger(r("exited",n.safeMixin({route:this},t))),this},match:function(t){var n=this.paramNames,r=t.indexOf("?"),t=~r?t.slice(0,r):decodeURIComponent(t),e=this.regex.exec(t);if(!e)return!1;for(var i={},o=1,u=e.length;o<u;++o){var a=n[o-1],s=decodeURIComponent(e[o]);i[a]=s}return i},path:function(t){var n=this.pathto;return t&&(n=n.replace(/:([a-zA-Z0-9_]+)/g,function(n,r){return t[r]})),n},_entering:function(t){return!0},_entered:function(t){return!0},_exiting:function(t){return!0},_exited:function(t){return!0}}),_=function(){return _};return n.mixin(_,{Route:k,current:e,go:o,map:u,hub:f,off:function(){b.off.apply(b,arguments)},on:function(){b.on.apply(b,arguments)},one:function(){b.one.apply(b,arguments)},path:a,previous:s,baseUrl:c,homePath:l,route:p,routes:h,start:v,trigger:function(t,n){return b.trigger(r(t,n)),this},useHistoryApi:null,useHashbang:null}),t.router=_}),t("skylark-router/main",["skylark-langx/skylark","./router"],function(t){return t}),t("skylark-router",["skylark-router/main"],function(t){return t})},this);
//# sourceMappingURL=sourcemaps/skylark-router-all.js.map
