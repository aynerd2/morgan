!function(e){"object"==typeof exports&&"undefined"!=typeof module||"function"!=typeof define||!define.amd?e():define("inert",e)}((function(){"use strict";var e,t,n,i,o,r,s=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){d(this,u),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}function h(e,t){d(this,h),this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([t]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}function l(e){if(d(this,l),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),_(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}function c(e,t,n){if(e.nodeType==Node.ELEMENT_NODE){var i=e;if(s=(t&&t(i),i.shadowRoot))return void c(s,t,s);if("content"==i.localName){for(var o=(s=i).getDistributedNodes?s.getDistributedNodes():[],r=0;r<o.length;r++)c(o[r],t,n);return}if("slot"==i.localName){for(var s,a=(s=i).assignedNodes?s.assignedNodes({flatten:!0}):[],d=0;d<a.length;d++)c(a[d],t,n);return}}for(var u=e.firstChild;null!=u;)c(u,t,n),u=u.nextSibling}function _(e){var t;e.querySelector("style#inert-style, link#inert-style")||((t=document.createElement("style")).setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t))}"undefined"!=typeof window&&(e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),s(u,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this,n=(c(e,(function(e){return t._visitNode(e)})),document.activeElement);if(!document.body.contains(e)){for(var i=e,o=void 0;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){o=i;break}i=i.parentNode}o&&(n=o.activeElement)}e.contains(n)&&(n.blur(),n===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){e.nodeType===Node.ELEMENT_NODE&&(e!==this._rootElement&&e.hasAttribute("inert")&&this._adoptInertRoot(e),(t.call(e,n)||e.hasAttribute("tabindex"))&&this._manageNode(e))}},{key:"_manageNode",value:function(e){e=this._inertManager.register(e,this),this._managedNodes.add(e)}},{key:"_unmanageNode",value:function(e){(e=this._inertManager.deregister(e,this))&&this._managedNodes.delete(e)}},{key:"_unmanageSubtree",value:function(e){var t=this;c(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,n){t.forEach((function(t){var n,i=t.target;"childList"===t.type?(e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this)):"attributes"===t.type&&("tabindex"===t.attributeName?this._manageNode(i):i!==this._rootElement&&"inert"===t.attributeName&&i.hasAttribute("inert")&&(this._adoptInertRoot(i),n=this._inertManager.getInertRoot(i),this._managedNodes.forEach((function(e){i.contains(e.node)&&n._manageNode(e.node)}))))}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),i=u,s(h,[{key:"destructor",value:function(){var e;this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE&&(e=this._node,null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus),this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){var e;this.node.nodeType===Node.ELEMENT_NODE&&(e=this.node,t.call(e,n)?-1===e.tabIndex&&this.hasSavedTabIndex||(e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)):e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex")))}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),o=h,s(l,[{key:"setInert",value:function(e,t){if(t){if(!this._inertRoots.has(e)&&(t=new i(e,this),e.setAttribute("inert",""),this._inertRoots.set(e,t),!this._document.body.contains(e)))for(var n=e.parentNode;n;)11===n.nodeType&&_(n),n=n.parentNode}else this._inertRoots.has(e)&&(this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert"))}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var n=this._managedNodes.get(e);return void 0!==n?n.addInertRoot(t):n=new o(e,t),this._managedNodes.set(e,n),n}},{key:"deregister",value:function(e,t){var n=this._managedNodes.get(e);return n?(n.removeInertRoot(t),n.destroyed&&this._managedNodes.delete(e),n):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(n,i){var o=this;n.forEach((function(n){switch(n.type){case"childList":e.call(n.addedNodes).forEach((function(n){var i;n.nodeType===Node.ELEMENT_NODE&&(i=e.call(n.querySelectorAll("[inert]")),t.call(n,"[inert]")&&i.unshift(n),i.forEach((function(e){this.setInert(e,!0)}),o))}),o);break;case"attributes":if("inert"!==n.attributeName)return;var i=n.target,r=i.hasAttribute("inert");o.setInert(i,r)}}),this)}}]),s=l,HTMLElement.prototype.hasOwnProperty("inert")||(r=new s(document),Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){r.setInert(this,e)}})))}));
var runtime=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i=(w="function"==typeof Symbol?Symbol:{}).iterator||"@@iterator",a=w.asyncIterator||"@@asyncIterator",c=w.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(e){u=function(t,r,e){return t[r]=e}}function h(t,e,n,i){var a,c,u,h;e=e&&e.prototype instanceof v?e:v,e=Object.create(e.prototype),i=new O(i||[]);return o(e,"_invoke",{value:(a=t,c=n,u=i,h=f,function(t,e){if(h===p)throw new Error("Generator is already running");if(h===y){if("throw"===t)throw e;return G()}for(u.method=t,u.arg=e;;){var n=u.delegate;if(n&&(n=function t(e,n){var o=n.method,i=e.iterator[o];return i===r?(n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),g):"throw"===(o=l(i,e.iterator,n.arg)).type?(n.method="throw",n.arg=o.arg,n.delegate=null,g):(i=o.arg)?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}(n,u),n)){if(n===g)continue;return n}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(h===f)throw h=y,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);if(h=p,"normal"===(n=l(a,c,u)).type){if(h=u.done?y:s,n.arg!==g)return{value:n.arg,done:u.done}}else"throw"===n.type&&(h=y,u.method="throw",u.arg=n.arg)}})}),e}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var f="suspendedStart",s="suspendedYield",p="executing",y="completed",g={};function v(){}function d(){}function m(){}var w,b,L=((b=(b=(u(w={},i,(function(){return this})),Object.getPrototypeOf))&&b(b(k([]))))&&b!==e&&n.call(b,i)&&(w=b),m.prototype=v.prototype=Object.create(w));function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){var e;o(this,"_invoke",{value:function(o,i){function a(){return new r((function(e,a){!function e(o,i,a,c){var u;if("throw"!==(o=l(t[o],t,i)).type)return(i=(u=o.arg).value)&&"object"==typeof i&&n.call(i,"__await")?r.resolve(i.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(i).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}));c(o.arg)}(o,i,e,a)}))}return e=e?e.then(a,a):a()}})}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e,o=t[i];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(o=function o(){for(;++e<t.length;)if(n.call(t,e))return o.value=t[e],o.done=!1,o;return o.value=r,o.done=!0,o}).next=o}return{next:G}}function G(){return{value:r,done:!0}}return o(L,"constructor",{value:d.prototype=m,configurable:!0}),o(m,"constructor",{value:d,configurable:!0}),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return!!(t="function"==typeof t&&t.constructor)&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r,e=Object(t),n=[];for(r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}var a=(i=i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc?null:i)?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e,n,o=this.tryEntries[r];if(o.tryLoc===t)return"throw"===(e=o.completion).type&&(n=e.arg,_(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=runtime}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}
!function(t){"use strict";var r,n,e;n={},(e=function(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}).m=r=[function(t,r,n){n(1),n(67),n(68),t.exports=n(72)},function(r,n,e){var o=e(2),i=e(36),u=e(57),c=e(56);e=e(62);o({target:"Array",proto:!0},{at:function(r){var n=i(this),e=u(n);return(r=0<=(r=c(r))?r:e+r)<0||e<=r?t:n[r]}}),e("at")},function(r,n,e){var o=e(3),i=e(4).f,u=e(40),c=e(43),f=e(34),a=e(50),p=e(61);r.exports=function(r,n){var e,s,y,l=r.target,v=r.global,b=r.stat,g=v?o:b?o[l]||f(l,{}):(o[l]||{}).prototype;if(g)for(e in n){if(s=n[e],y=r.noTargetGet?(y=i(g,e))&&y.value:g[e],!p(v?e:l+(b?".":"#")+e,r.forced)&&y!==t){if(typeof s==typeof y)continue;a(s,y)}(r.sham||y&&y.sham)&&u(s,"sham",!0),c(g,e,s,r)}}},function(t,r){function n(t){return t&&t.Math==Math&&t}t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof global&&global)||function(){return this}()||Function("return this")()},function(t,r,n){var e=n(5),o=n(7),i=n(8),u=n(9),c=n(10),f=n(15),a=n(35),p=n(38),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=c(t),r=f(r),p)try{return s(t,r)}catch(t){}if(a(t,r))return u(!o(i.f,t,r),t[r])}},function(t,r,n){n=n(6),t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},function(t,r,n){var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){return!!(t=o(this,t))&&t.enumerable}:e},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,n){var e=n(11),o=n(14);t.exports=function(t){return e(o(t))}},function(t,r,n){var e=n(3),o=n(12),i=n(6),u=n(13),c=e.Object,f=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?f(t,""):c(t)}:c},function(t,r){var n=Function.prototype,e=n.bind,o=n.call,i=e&&e.bind(o);t.exports=e?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},function(t,r,n){var e=(n=n(12))({}.toString),o=n("".slice);t.exports=function(t){return o(e(t),8,-1)}},function(r,n,e){var o=e(3).TypeError;r.exports=function(r){if(r==t)throw o("Can't call method on "+r);return r}},function(t,r,n){var e=n(16),o=n(19);t.exports=function(t){return t=e(t,"string"),o(t)?t:t+""}},function(r,n,e){var o=e(3),i=e(7),u=e(17),c=e(19),f=e(26),a=e(29),p=(e=e(30),o.TypeError),s=e("toPrimitive");r.exports=function(r,n){if(!u(r)||c(r))return r;var e=f(r,s);if(e){if(e=i(e,r,n=n===t?"default":n),!u(e)||c(e))return e;throw p("Can't convert object to primitive value")}return a(r,n=n===t?"number":n)}},function(t,r,n){var e=n(18);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},function(t,r){t.exports=function(t){return"function"==typeof t}},function(t,r,n){var e=n(3),o=n(20),i=n(18),u=n(21),c=(n=n(22),e.Object);t.exports=n?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&u(r.prototype,c(t))}},function(r,n,e){var o=e(3),i=e(18);r.exports=function(r,n){return arguments.length<2?(e=o[r],i(e)?e:t):o[r]&&o[r][n];var e}},function(t,r,n){n=n(12),t.exports=n({}.isPrototypeOf)},function(t,r,n){n=n(23),t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,n){var e=n(24);n=n(6);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},function(t,r,n){var e,o,i=n(3),u=n(25);n=i.process,i=i.Deno;!(o=(i=(i=n&&n.versions||i&&i.version)&&i.v8)?0<(e=i.split("."))[0]&&e[0]<4?1:+(e[0]+e[1]):o)&&u&&(!(e=u.match(/Edge\/(\d+)/))||74<=e[1])&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},function(t,r,n){n=n(20),t.exports=n("navigator","userAgent")||""},function(r,n,e){var o=e(27);r.exports=function(r,n){return null==(n=r[n])?t:o(n)}},function(t,r,n){var e=n(3),o=n(18),i=n(28),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},function(t,r,n){var e=n(3).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},function(t,r,n){var e=n(3),o=n(7),i=n(18),u=n(17),c=e.TypeError;t.exports=function(t,r){var n,e;if("string"===r&&i(n=t.toString)&&!u(e=o(n,t)))return e;if(i(n=t.valueOf)&&!u(e=o(n,t)))return e;if("string"!==r&&i(n=t.toString)&&!u(e=o(n,t)))return e;throw c("Can't convert object to primitive value")}},function(t,r,n){var e=n(3),o=n(31),i=n(35),u=n(37),c=n(23),f=n(22),a=o("wks"),p=e.Symbol,s=p&&p.for,y=f?p:p&&p.withoutSetter||u;t.exports=function(t){var r;return i(a,t)&&(c||"string"==typeof a[t])||(r="Symbol."+t,c&&i(p,t)?a[t]=p[t]:a[t]=(f&&s?s:y)(r)),a[t]}},function(r,n,e){var o=e(32),i=e(33);(r.exports=function(r,n){return i[r]||(i[r]=n!==t?n:{})})("versions",[]).push({version:"3.19.1",mode:o?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,r){t.exports=!1},function(t,r,n){var e=n(3),o=n(34);n=e[n="__core-js_shared__"]||o(n,{});t.exports=n},function(t,r,n){var e=n(3),o=Object.defineProperty;t.exports=function(t,r){try{o(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r}},function(t,r,n){var e=n(12),o=n(36),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},function(t,r,n){var e=n(3),o=n(14),i=e.Object;t.exports=function(t){return i(o(t))}},function(r,n,e){e=e(12);var o=0,i=Math.random(),u=e(1..toString);r.exports=function(r){return"Symbol("+(r===t?"":r)+")_"+u(++o+i,36)}},function(t,r,n){var e=n(5),o=n(6),i=n(39);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(3),o=(n=n(17),e.document),i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,r,n){var e=n(5),o=n(41),i=n(9);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r,n){var e=n(3),o=n(5),i=n(38),u=n(42),c=n(15),f=e.TypeError,a=Object.defineProperty;r.f=o?a:function(t,r,n){if(u(t),r=c(r),u(n),i)try{return a(t,r,n)}catch(t){}if("get"in n||"set"in n)throw f("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e=n(3),o=n(17),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},function(r,n,e){var o=e(3),i=e(18),u=e(35),c=e(40),f=e(34),a=e(44),p=e(45),s=e(49).CONFIGURABLE,y=p.get,l=p.enforce,v=String(String).split("String");(r.exports=function(r,n,e,a){var p=!!a&&!!a.unsafe,y=!!a&&!!a.enumerable,b=!!a&&!!a.noTargetGet,g=a&&a.name!==t?a.name:n;i(e)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!u(e,"name")||s&&e.name!==g)&&c(e,"name",g),(a=l(e)).source||(a.source=v.join("string"==typeof g?g:""))),r!==o?(p?!b&&r[n]&&(y=!0):delete r[n],y?r[n]=e:c(r,n,e)):y?r[n]=e:f(n,e)})(Function.prototype,"toString",(function(){return i(this)&&y(this).source||a(this)}))},function(t,r,n){var e=n(12),o=n(18),i=(n=n(33),e(Function.toString));o(n.inspectSource)||(n.inspectSource=function(t){return i(t)}),t.exports=n.inspectSource},function(t,r,n){var e,o,i,u,c,f,a,p,s=n(46),y=n(3),l=n(12),v=n(17),b=n(40),g=n(35),d=n(33),h=n(47),x=(n=n(48),"Object already initialized"),m=y.TypeError;y=y.WeakMap;a=s||d.state?(e=d.state||(d.state=new y),o=l(e.get),i=l(e.has),u=l(e.set),c=function(t,r){if(i(e,t))throw new m(x);return r.facade=t,u(e,t,r),r},f=function(t){return o(e,t)||{}},function(t){return i(e,t)}):(n[p=h("state")]=!0,c=function(t,r){if(g(t,p))throw new m(x);return r.facade=t,b(t,p,r),r},f=function(t){return g(t,p)?t[p]:{}},function(t){return g(t,p)}),t.exports={set:c,get:f,has:a,enforce:function(t){return a(t)?f(t):c(t,{})},getterFor:function(t){return function(r){var n;if(!v(r)||(n=f(r)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}}}},function(t,r,n){var e=n(3),o=n(18);n=n(44),e=e.WeakMap;t.exports=o(e)&&/native code/.test(n(e))},function(t,r,n){var e=n(31),o=n(37),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports={}},function(t,r,n){var e=n(5),o=n(35),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor;o=(n=o(i,"name"))&&"something"===function(){}.name,i=n&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:n,PROPER:o,CONFIGURABLE:i}},function(t,r,n){var e=n(35),o=n(51),i=n(4),u=n(41);t.exports=function(t,r){for(var n=o(r),c=u.f,f=i.f,a=0;a<n.length;a++){var p=n[a];e(t,p)||c(t,p,f(r,p))}}},function(t,r,n){var e=n(20),o=n(12),i=n(52),u=n(60),c=n(42),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var r=i.f(c(t)),n=u.f;return n?f(r,n(t)):r}},function(t,r,n){var e=n(53),o=n(59).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r,n){var e=n(12),o=n(35),i=n(10),u=n(54).indexOf,c=n(48),f=e([].push);t.exports=function(t,r){var n,e=i(t),a=0,p=[];for(n in e)!o(c,n)&&o(e,n)&&f(p,n);for(;r.length>a;)o(e,n=r[a++])&&(~u(p,n)||f(p,n));return p}},function(t,r,n){var e=n(10),o=n(55),i=n(57);n=function(t){return function(r,n,u){var c,f=e(r),a=i(f),p=o(u,a);if(t&&n!=n){for(;p<a;)if((c=f[p++])!=c)return!0}else for(;p<a;p++)if((t||p in f)&&f[p]===n)return t||p||0;return!t&&-1}};t.exports={includes:n(!0),indexOf:n(!1)}},function(t,r,n){var e=n(56),o=Math.max,i=Math.min;t.exports=function(t,r){return(t=e(t))<0?o(t+r,0):i(t,r)}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return(t=+t)!=t||0==t?0:(0<t?e:n)(t)}},function(t,r,n){var e=n(58);t.exports=function(t){return e(t.length)}},function(t,r,n){var e=n(56),o=Math.min;t.exports=function(t){return 0<t?o(e(t),9007199254740991):0}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){var e=n(6),o=n(18),i=/#|\.prototype\./,u=(n=function(t,r){return(t=c[u(t)])==a||t!=f&&(o(r)?e(r):!!r)},n.normalize=function(t){return String(t).replace(i,".").toLowerCase()}),c=n.data={},f=n.NATIVE="N",a=n.POLYFILL="P";t.exports=n},function(r,n,e){var o=e(30),i=e(63),u=(e=e(41),o("unscopables")),c=Array.prototype;c[u]==t&&e.f(c,u,{configurable:!0,value:i(null)}),r.exports=function(t){c[u][t]=!0}},function(r,n,e){function o(){}function i(t){return"<script>"+t+"</"+v+">"}var u,c=e(42),f=e(64),a=e(59),p=e(48),s=e(66),y=e(39),l=(e=e(47),"prototype"),v="script",b=e("IE_PROTO"),g=function(){try{u=new ActiveXObject("htmlfile")}catch(t){}var t;g="undefined"==typeof document||document.domain&&u?function(t){t.write(i("")),t.close();var r=t.parentWindow.Object;return t=null,r}(u):((t=y("iframe")).style.display="none",s.appendChild(t),t.src=String("javascript:"),(t=t.contentWindow.document).open(),t.write(i("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;)delete g[l][a[r]];return g()};p[b]=!0,r.exports=Object.create||function(r,n){var e;return null!==r?(o[l]=c(r),e=new o,o[l]=null,e[b]=r):e=g(),n===t?e:f(e,n)}},function(t,r,n){var e=n(5),o=n(41),i=n(42),u=n(10),c=n(65);t.exports=e?Object.defineProperties:function(t,r){i(t);for(var n,e=u(r),f=c(r),a=f.length,p=0;p<a;)o.f(t,n=f[p++],e[n]);return t}},function(t,r,n){var e=n(53),o=n(59);t.exports=Object.keys||function(t){return e(t,o)}},function(t,r,n){n=n(20),t.exports=n("document","documentElement")},function(t,r,n){n(2)({target:"Object",stat:!0},{hasOwn:n(35)})},function(r,n,e){var o=e(2),i=e(12),u=e(14),c=e(56),f=e(69),a=(e=e(6),i("".charAt));o({target:"String",proto:!0,forced:e((function(){return"\ud842"!=="𠮷".at(0)}))},{at:function(r){var n=f(u(this)),e=n.length;return(r=0<=(r=c(r))?r:e+r)<0||e<=r?t:a(n,r)}})},function(t,r,n){var e=n(3),o=n(70),i=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},function(r,n,e){var o=e(3),i=e(71),u=e(18),c=e(13),f=e(30)("toStringTag"),a=o.Object,p="Arguments"==c(function(){return arguments}());r.exports=i?c:function(r){var n;return r===t?"Undefined":null===r?"Null":"string"==typeof(r=function(t,r){try{return t[r]}catch(t){}}(n=a(r),f))?r:p?c(n):"Object"==(r=c(n))&&u(n.callee)?"Arguments":r}},function(t,r,n){var e={};e[n(30)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(r,n,e){var o=e(73),i=e(57),u=e(56),c=o.aTypedArray;(0,o.exportTypedArrayMethod)("at",(function(r){var n=c(this),e=i(n);return(r=0<=(r=u(r))?r:e+r)<0||e<=r?t:n[r]}))},function(r,n,e){function o(t){return!!y(t)&&(t=v(t),l(C,t)||l(F,t))}var i,u,c,f=e(74),a=e(5),p=e(3),s=e(18),y=e(17),l=e(35),v=e(70),b=e(28),g=e(40),d=e(43),h=e(41).f,x=e(21),m=e(75),O=e(77),S=e(30),j=e(37),w=(P=p.Int8Array)&&P.prototype,A=(e=(e=p.Uint8ClampedArray)&&e.prototype,P&&m(P)),T=w&&m(w),P=Object.prototype,_=p.TypeError,E=(S=S("toStringTag"),j("TYPED_ARRAY_TAG")),R=j("TYPED_ARRAY_CONSTRUCTOR"),I=f&&!!O&&"Opera"!==v(p.opera),C=(f=!1,{Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8}),F={BigInt64Array:8,BigUint64Array:8};for(i in C)(c=(u=p[i])&&u.prototype)?g(c,R,u):I=!1;for(i in F)(c=(u=p[i])&&u.prototype)&&g(c,R,u);if((!I||!s(A)||A===Function.prototype)&&(A=function(){throw _("Incorrect invocation")},I))for(i in C)p[i]&&O(p[i],A);if((!I||!T||T===P)&&(T=A.prototype,I))for(i in C)p[i]&&O(p[i].prototype,T);if(I&&m(e)!==T&&O(e,T),a&&!l(T,S))for(i in f=!0,h(T,S,{get:function(){return y(this)?this[E]:t}}),C)p[i]&&g(p[i],E,i);r.exports={NATIVE_ARRAY_BUFFER_VIEWS:I,TYPED_ARRAY_CONSTRUCTOR:R,TYPED_ARRAY_TAG:f&&E,aTypedArray:function(t){if(o(t))return t;throw _("Target is not a typed array")},aTypedArrayConstructor:function(t){if(s(t)&&(!O||x(A,t)))return t;throw _(b(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,n){if(a){if(n)for(var e in C)if((e=p[e])&&l(e.prototype,t))try{delete e.prototype[t]}catch(t){}T[t]&&!n||d(T,t,!n&&I&&w[t]||r)}},exportTypedArrayStaticMethod:function(t,r,n){var e,o;if(a){if(O){if(n)for(e in C)if((o=p[e])&&l(o,t))try{delete o[t]}catch(t){}if(A[t]&&!n)return;try{return d(A,t,!n&&I&&A[t]||r)}catch(t){}}for(e in C)!(o=p[e])||o[t]&&!n||d(o,t,r)}},isView:function(t){return!!y(t)&&("DataView"===(t=v(t))||l(C,t)||l(F,t))},isTypedArray:o,TypedArray:A,TypedArrayPrototype:T}},function(t,r){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,r,n){var e=n(3),o=n(35),i=n(18),u=n(36),c=n(47),f=(n=n(76),c("IE_PROTO")),a=e.Object,p=a.prototype;t.exports=n?a.getPrototypeOf:function(t){var r=u(t);return o(r,f)?r[f]:(t=r.constructor,i(t)&&r instanceof t?t.prototype:r instanceof a?p:null)}},function(t,r,n){n=n(6),t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(r,n,e){var o=e(12),i=e(42),u=e(78);r.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=o(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),r=n instanceof Array}catch(n){}return function(n,e){return i(n),u(e),r?t(n,e):n.__proto__=e,n}}():t)},function(t,r,n){var e=n(3),o=n(18),i=e.String,u=e.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw u("Can't set "+i(t)+" as a prototype")}}],e.c=n,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}();
/*! This file is auto-generated */
!function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function n(e){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())}e.d(t,{default:function(){return n}}),(window.wp=window.wp||{}).domReady=t.default}();
/*! This file is auto-generated */
!function(){"use strict";var n={d:function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r:function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{actions:function(){return S},addAction:function(){return m},addFilter:function(){return p},applyFilters:function(){return k},createHooks:function(){return f},currentAction:function(){return w},currentFilter:function(){return I},defaultHooks:function(){return h},didAction:function(){return O},didFilter:function(){return j},doAction:function(){return b},doingAction:function(){return x},doingFilter:function(){return T},filters:function(){return z},hasAction:function(){return _},hasFilter:function(){return y},removeAction:function(){return A},removeAllActions:function(){return F},removeAllFilters:function(){return g},removeFilter:function(){return v}});var r=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var e=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var o=function(n,t){return function(o,i,c,s=10){const u=n[t];if(!e(o))return;if(!r(i))return;if("function"!=typeof c)return void console.error("The hook callback must be a function.");if("number"!=typeof s)return void console.error("If specified, the hook priority must be a number.");const l={callback:c,priority:s,namespace:i};if(u[o]){const n=u[o].handlers;let t;for(t=n.length;t>0&&!(s>=n[t-1].priority);t--);t===n.length?n[t]=l:n.splice(t,0,l),u.__current.forEach((n=>{n.name===o&&n.currentIndex>=t&&n.currentIndex++}))}else u[o]={handlers:[l],runs:0};"hookAdded"!==o&&n.doAction("hookAdded",o,i,c,s)}};var i=function(n,t,o=!1){return function(i,c){const s=n[t];if(!e(i))return;if(!o&&!r(c))return;if(!s[i])return 0;let u=0;if(o)u=s[i].handlers.length,s[i]={runs:s[i].runs,handlers:[]};else{const n=s[i].handlers;for(let t=n.length-1;t>=0;t--)n[t].namespace===c&&(n.splice(t,1),u++,s.__current.forEach((n=>{n.name===i&&n.currentIndex>=t&&n.currentIndex--})))}return"hookRemoved"!==i&&n.doAction("hookRemoved",i,c),u}};var c=function(n,t){return function(r,e){const o=n[t];return void 0!==e?r in o&&o[r].handlers.some((n=>n.namespace===e)):r in o}};var s=function(n,t,r=!1){return function(e,...o){const i=n[t];i[e]||(i[e]={handlers:[],runs:0}),i[e].runs++;const c=i[e].handlers;if(!c||!c.length)return r?o[0]:void 0;const s={name:e,currentIndex:0};for(i.__current.push(s);s.currentIndex<c.length;){const n=c[s.currentIndex].callback.apply(null,o);r&&(o[0]=n),s.currentIndex++}return i.__current.pop(),r?o[0]:void 0}};var u=function(n,t){return function(){var r;const e=n[t];return null!==(r=e.__current[e.__current.length-1]?.name)&&void 0!==r?r:null}};var l=function(n,t){return function(r){const e=n[t];return void 0===r?void 0!==e.__current[0]:!!e.__current[0]&&r===e.__current[0].name}};var a=function(n,t){return function(r){const o=n[t];if(e(r))return o[r]&&o[r].runs?o[r].runs:0}};class d{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=o(this,"actions"),this.addFilter=o(this,"filters"),this.removeAction=i(this,"actions"),this.removeFilter=i(this,"filters"),this.hasAction=c(this,"actions"),this.hasFilter=c(this,"filters"),this.removeAllActions=i(this,"actions",!0),this.removeAllFilters=i(this,"filters",!0),this.doAction=s(this,"actions"),this.applyFilters=s(this,"filters",!0),this.currentAction=u(this,"actions"),this.currentFilter=u(this,"filters"),this.doingAction=l(this,"actions"),this.doingFilter=l(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}var f=function(){return new d};const h=f(),{addAction:m,addFilter:p,removeAction:A,removeFilter:v,hasAction:_,hasFilter:y,removeAllActions:F,removeAllFilters:g,doAction:b,applyFilters:k,currentAction:w,currentFilter:I,doingAction:x,doingFilter:T,didAction:O,didFilter:j,actions:S,filters:z}=h;(window.wp=window.wp||{}).hooks=t}();
