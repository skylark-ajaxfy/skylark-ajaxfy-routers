/**
 * skylark-router - An Elegant HTML5 Routing Framework.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.2
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,e){function r(t,e){if("."!==t[0])return t;var r=e.split("/"),n=t.split("/");r.pop();for(var i=0;i<n.length;i++)"."!=n[i]&&(".."==n[i]?r.pop():r.push(n[i]));return r.join("/")}var n=e.define,i=e.require,a="function"==typeof n&&n.amd,o=!a&&"undefined"!=typeof exports;if(!a&&!n){var u={};n=e.define=function(t,e,n){"function"==typeof n?(u[t]={factory:n,deps:e.map(function(e){return r(e,t)}),exports:null},i(t)):resolved[t]=n},i=e.require=function(t){if(!u.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var e=u[t];if(!e.exports){var r=[];e.deps.forEach(function(t){r.push(i(t))}),e.exports=e.factory.apply(window,r)}return e.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");t(n,i),a||(o?exports=i("skylark-router/router"):e.skylarkjs=i("skylark-router/main"))}(function(t,e){t("skylark-router/router",["skylark-langx/skylark","skylark-langx/langx"],function(t,e){function r(t,r){var n=new CustomEvent(t,r);return e.safeMixin(n,r)}function n(){return g}function i(t){if(v){var n=v.route.exit({path:v.path,params:v.params},!0);if(!n)return}if(v=g,g=t,!g.route){var i=o(g.path);g.route=i.route,g.params=i.params}var a=g.route.enter({path:g.path,params:g.params},!0);e.Deferred.when(a).then(function(){k.trigger(r("routing",{current:g,previous:v})),g.route.enter({path:g.path,params:g.params},!1),v&&v.route.exit({path:v.path,params:v.params},!1),k.trigger(r("routed",{current:g,previous:v}))})}function a(t,e){if(!e&&g&&g.path==t)return!1;var n=o(t);if(n)if(n.path=t,_.useHistoryApi){var a={path:t};window.history.pushState(a,document.title,(m+t).replace("//","/")),window.dispatchEvent(r("popstate",{state:a}))}else if(_.useHashbang){var u="#!"+t;window.location.hash!==u?window.location.hash=u:i(n)}else i(n);return!0}function o(t,r){var n=!1;return!r&&(n=y[t])?n:(e.each(x,function(e,r){var i=r.match(t);return!i||(n={route:r,params:i},!1)}),n&&!r&&(y[t]=n),n)}function u(t,e){var r,n=x[t];return n&&(r=n.path(e)),r}function s(){return v}function f(t){return e.isDefined(t)?(m=t,this):m}function p(){return k}function h(t){return e.isDefined(t)?(w=t,this):w}function c(t,r){if(e.isDefined(r)){var n={};return n[t]=r,l(n),this}return x[t]}function l(t){if(!e.isDefined(t))return e.mixin({},x);for(var r in t)x[r]=new _.Route(r,t[r])}function d(){null==_.useHashbang&&null==_.useHistoryApi&&(window.location.host?_.useHistoryApi=!0:_.useHashbang=!0);var t;_.useHistoryApi?(t=window.location.pathname,void 0===m&&(m=t.replace(/\/$/,"")),t=t.replace(m,"")||w||"/"):t=_.useHashbang?window.location.hash.replace("#!","")||w||"/":"/",_.useHistoryApi?window.addEventListener("popstate",function(t){t.state&&i(t.state),t.preventDefault()}):_.useHashbang&&window.addEventListener("hashchange",function(t){i({path:window.location.hash.replace(/^#!/,"")}),t.preventDefault()}),a(t)}var g,v,m,w,x={},y={},k=new e.Evented,H=e.Evented.inherit({klassName:"Route",init:function(t,r){r=e.mixin({},r);var n=r.pathto||"",i=n,a=i.match(/\:([a-zA-Z0-9_]+)/g);null!==a?(a=a.map(function(t){return t.substring(1)}),i=i.replace(/\:([a-zA-Z0-9_]+)/g,"(.*?)")):a=[],i="*"===i?"(.*)":i.replace("/","\\/"),this._setting=r,this.name=t,this.pathto=n,this.paramNames=a,this.params=i,this.regex=new RegExp("^"+i+"$","");var o=this;["entering","entered","exiting","exited"].forEach(function(t){e.isFunction(r[t])&&o.on(t,r[t])})},enter:function(t,n){if(n){var i=this._entering(t),a=this;return e.Deferred.when(i).then(function(){var t=r("entering",{route:a,result:!0});return a.trigger(t),t.result})}return this._entered(t),this.trigger(r("entered",e.safeMixin({route:this},t))),this},exit:function(t,n){if(n){var i=this._exiting(t);if(!i)return!1;var a=r("exiting",{route:this,result:!0});return this.trigger(a),a.result}return this._exited(t),this.trigger(r("exited",e.safeMixin({route:this},t))),this},match:function(t){var e=this.paramNames,r=t.indexOf("?"),t=~r?t.slice(0,r):decodeURIComponent(t),n=this.regex.exec(t);if(!n)return!1;for(var i={},a=1,o=n.length;a<o;++a){var u=e[a-1],s=decodeURIComponent(n[a]);i[u]=s}return i},path:function(t){var e=this.pathto;return t&&(e=e.replace(/:([a-zA-Z0-9_]+)/g,function(e,r){return t[r]})),e},_entering:function(t){return!0},_entered:function(t){return!0},_exiting:function(t){return!0},_exited:function(t){return!0}}),_=function(){return _};return e.mixin(_,{Route:H,current:n,go:a,map:o,hub:p,off:function(){k.off.apply(k,arguments)},on:function(){k.on.apply(k,arguments)},one:function(){k.one.apply(k,arguments)},path:u,previous:s,baseUrl:f,homePath:h,route:c,routes:l,start:d,trigger:function(t,e){return k.trigger(r(t,e)),this},useHistoryApi:null,useHashbang:null}),t.router=_}),t("skylark-router/main",["skylark-langx/skylark","./router"],function(t){return t}),t("skylark-router",["skylark-router/main"],function(t){return t})},this);
//# sourceMappingURL=sourcemaps/skylark-router.js.map
