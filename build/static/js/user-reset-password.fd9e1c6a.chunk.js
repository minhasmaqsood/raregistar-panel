(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[82],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return s})),n.d(t,"setScrollbarWidth",(function(){return i})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return g})),n.d(t,"deprecated",(function(){return h})),n.d(t,"DOMElement",(function(){return y})),n.d(t,"targetPropType",(function(){return v})),n.d(t,"tagPropType",(function(){return E})),n.d(t,"TransitionTimeouts",(function(){return N})),n.d(t,"TransitionPropTypeKeys",(function(){return O})),n.d(t,"TransitionStatuses",(function(){return j})),n.d(t,"keyCodes",(function(){return P})),n.d(t,"PopperPlacements",(function(){return T})),n.d(t,"canUseDOM",(function(){return x})),n.d(t,"isReactRefObj",(function(){return M})),n.d(t,"toNumber",(function(){return k})),n.d(t,"isObject",(function(){return A})),n.d(t,"isFunction",(function(){return R})),n.d(t,"findDOMElements",(function(){return z})),n.d(t,"isArrayOrNodeList",(function(){return S})),n.d(t,"getTarget",(function(){return I})),n.d(t,"defaultToggleEvents",(function(){return D})),n.d(t,"addMultipleEventListeners",(function(){return G})),n.d(t,"focusableElements",(function(){return $}));var a,r=n(28),o=n.n(r);function s(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=s(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&i(n+e)}function d(e){a=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function m(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var b={};function g(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function h(e,t){return function(n,a,r){null!==n[a]&&"undefined"!==typeof n[a]&&g('"'+a+'" property of "'+r+'" has been deprecated.\n'+t);for(var o=arguments.length,s=new Array(o>3?o-3:0),i=3;i<o;i++)s[i-3]=arguments[i];return e.apply(void 0,[n,a,r].concat(s))}}var w="object"===typeof window&&window.Element||function(){};function y(e,t,n){if(!(e[t]instanceof w))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var v=o.a.oneOfType([o.a.string,o.a.func,y,o.a.shape({current:o.a.any})]),E=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),N={Fade:150,Collapse:350,Modal:300,Carousel:600},O=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},P={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],x=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function k(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(A(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=A(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function R(e){if(!A(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function z(e){if(M(e))return e.current;if(R(e))return e();if("string"===typeof e&&x){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function S(e){return null!==e&&(Array.isArray(e)||x&&"number"===typeof e.length)}function I(e,t){var n=z(e);return t?S(n)?n:null===n?[]:[n]:S(n)?n[0]:n}var D=["touchstart","click"];function G(e,t,n,a){var r=e;S(r)||(r=[r]);var o=n;if("string"===typeof o&&(o=o.split(/\s+/)),!S(r)||"function"!==typeof t||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(n){n.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(n){n.removeEventListener(e,t,a)}))}))}}var $=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},112:function(e,t,n){"use strict";var a=n(4),r=n.n(a),o=n(128);t.a=Object(o.d)((function(e){return r.a.createElement(o.a,e)}),{withRef:!1})},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=n(4),r=n.n(a),o=n(560),s=function(e){return r.a.createElement(o.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},i=function(e){return r.a.createElement("div",{className:"separator ".concat(e.className)})}},1336:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(17),o=n(19),s=n(18),i=n(4),c=n.n(i),l=n(138),u=n(148),d=n(178),f=n(363),p=n(274),m=n(425),b=n(113),g=n(544),h=n(114),w=n(112),y=n(2),v=n(40),E=n(44),N=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onResetPassword=function(e){if(!r.props.loading){var t=new URLSearchParams(r.props.location.search).get("oobCode");t?""!==e.newPassword&&r.props.resetPassword({newPassword:e.newPassword,resetPasswordCode:t,history:r.props.history}):v.a.warning("Please check your email url.","Reset Password Error",3e3,null,null,"")}},r.validateNewPassword=function(e){var t=e.newPassword,n=e.newPasswordAgain,a={};return n&&t!==n&&(a.newPasswordAgain="Please check your new password"),a},r.state={newPassword:"",newPasswordAgain:""},r}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(){this.props.error?v.a.warning(this.props.error,"Forgot Password Error",3e3,null,null,""):this.props.loading||"success"!==this.props.newPassword||v.a.success("Please login with your new password.","Reset Password Success",3e3,null,null,"")}},{key:"render",value:function(){var e=this,t=this.state,n={newPassword:t.newPassword,newPasswordAgain:t.newPasswordAgain};return c.a.createElement(l.a,{className:"h-100"},c.a.createElement(h.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},c.a.createElement(u.a,{className:"auth-card"},c.a.createElement("div",{className:"position-relative image-side "},c.a.createElement("p",{className:"text-white h2"},"MAGIC IS IN THE DETAILS"),c.a.createElement("p",{className:"white mb-0"},"Please use your e-mail to reset your password. ",c.a.createElement("br",null),"If you are not a member, please"," ",c.a.createElement(b.c,{to:"/register",className:"white"},"register"),".")),c.a.createElement("div",{className:"form-side"},c.a.createElement(b.c,{to:"/",className:"white"},c.a.createElement("span",{className:"logo-single"})),c.a.createElement(d.a,{className:"mb-4"},c.a.createElement(w.a,{id:"user.reset-password"})),c.a.createElement(g.c,{validate:this.validateNewPassword,initialValues:n,onSubmit:this.onResetPassword},(function(t){var n=t.errors,a=t.touched;return c.a.createElement(g.b,{className:"av-tooltip tooltip-label-bottom"},c.a.createElement(f.a,{className:"form-group has-float-label"},c.a.createElement(p.a,null,c.a.createElement(w.a,{id:"user.new-password"})),c.a.createElement(g.a,{className:"form-control",name:"newPassword",type:"password"})),c.a.createElement(f.a,{className:"form-group has-float-label"},c.a.createElement(p.a,null,c.a.createElement(w.a,{id:"user.new-password-again"})),c.a.createElement(g.a,{className:"form-control",name:"newPasswordAgain",type:"password"}),n.newPasswordAgain&&a.newPasswordAgain&&c.a.createElement("div",{className:"invalid-feedback d-block"},n.newPasswordAgain)),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement(b.c,{to:"/user/login"},c.a.createElement(w.a,{id:"user.login-title"})),c.a.createElement(m.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(e.props.loading?"show-spinner":""),size:"lg"},c.a.createElement("span",{className:"spinner d-inline-block"},c.a.createElement("span",{className:"bounce1"}),c.a.createElement("span",{className:"bounce2"}),c.a.createElement("span",{className:"bounce3"})),c.a.createElement("span",{className:"label"},c.a.createElement(w.a,{id:"user.reset-password-button"})))))}))))))}}]),n}(i.Component);t.default=Object(E.b)((function(e){var t=e.authUser;return{newPassword:t.newPassword,resetPasswordCode:t.resetPasswordCode,loading:t.loading,error:t.error}}),{resetPassword:y.nb})(N)},138:function(e,t,n){"use strict";var a=n(10),r=n(12),o=n(4),s=n.n(o),i=n(28),c=n.n(i),l=n(29),u=n.n(l),d=n(110),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,i=e.tag,c=e.form,l=e.widths,f=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var a=e[t];if(delete f[t],a){var r=!n;p.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var m=Object(d.mapToCssModules)(u()(t,o?"no-gutters":null,c?"form-row":"row",p),n);return s.a.createElement(i,Object(a.a)({},f,{className:m}))};b.propTypes=p,b.defaultProps=m,t.a=b},148:function(e,t,n){"use strict";var a=n(10),r=n(12),o=n(4),s=n.n(o),i=n(28),c=n.n(i),l=n(29),u=n.n(l),d=n(110),f={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,n=e.cssModule,o=e.color,i=e.body,c=e.inverse,l=e.outline,f=e.tag,p=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(u()(t,"card",!!c&&"text-white",!!i&&"card-body",!!o&&(l?"border":"bg")+"-"+o),n);return s.a.createElement(f,Object(a.a)({},m,{className:b,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},178:function(e,t,n){"use strict";var a=n(10),r=n(12),o=n(4),s=n.n(o),i=n(28),c=n.n(i),l=n(29),u=n.n(l),d=n(110),f={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(u()(t,"card-title"),n);return s.a.createElement(o,Object(a.a)({},i,{className:c}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},274:function(e,t,n){"use strict";var a=n(10),r=n(12),o=n(4),s=n.n(o),i=n(28),c=n.n(i),l=n(29),u=n.n(l),d=n(110),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),m={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,o=e.hidden,i=e.widths,c=e.tag,l=e.check,f=e.size,p=e.for,m=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];i.forEach((function(t,a){var r=e[t];if(delete m[t],r||""===r){var o,s=!a;if(Object(d.isObject)(r)){var i,c=s?"-":"-"+t+"-";o=g(s,t,r.size),b.push(Object(d.mapToCssModules)(u()(((i={})[o]=r.size||""===r.size,i["order"+c+r.order]=r.order||0===r.order,i["offset"+c+r.offset]=r.offset||0===r.offset,i))),n)}else o=g(s,t,r),b.push(o)}}));var h=Object(d.mapToCssModules)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),n);return s.a.createElement(c,Object(a.a)({htmlFor:p},m,{className:h}))};h.propTypes=m,h.defaultProps=b,t.a=h},425:function(e,t,n){"use strict";var a=n(10),r=n(12),o=n(32),s=n(23),i=n(4),c=n.n(i),l=n(28),u=n.n(l),d=n(29),f=n.n(d),p=n(110),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,s=e.className,i=e.close,l=e.cssModule,u=e.color,d=e.outline,m=e.size,b=e.tag,g=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var w="btn"+(d?"-outline":"")+"-"+u,y=Object(p.mapToCssModules)(f()(s,{close:i},i||"btn",i||w,!!m&&"btn-"+m,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===b&&(b="a");var v=i?"Close":null;return c.a.createElement(b,Object(a.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:y,ref:g,onClick:this.onClick,"aria-label":n||v}))},t}(c.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},560:function(e,t,n){"use strict";var a=n(10),r=n(12),o=n(4),s=n.n(o),i=n(28),c=n.n(i),l=n(29),u=n.n(l),d=n(110),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,o=e.widths,i=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,a){var r=e[t];if(delete c[t],r||""===r){var o=!a;if(Object(d.isObject)(r)){var s,i=o?"-":"-"+t+"-",f=g(o,t,r.size);l.push(Object(d.mapToCssModules)(u()(((s={})[f]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s)),n))}else{var p=g(o,t,r);l.push(p)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(t,l),n);return s.a.createElement(i,Object(a.a)({},c,{className:f}))};h.propTypes=m,h.defaultProps=b,t.a=h}}]);
//# sourceMappingURL=user-reset-password.fd9e1c6a.chunk.js.map