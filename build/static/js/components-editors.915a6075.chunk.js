(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[33],{115:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(143),i=a(144),c=a(113),s=a(112),u=function(e){return r.a.createElement(s.a,{id:"menu.".concat(e)})},o=function(e,t,a){return 0===a?"":e.split(t)[0]+t},m=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return r.a.createElement(i.a,{key:n,active:a.length===n+1},a.length!==n+1?r.a.createElement(c.c,{to:"/"+o(t,e,n)},u(e)):u(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return r.a.createElement(n.Fragment,null,t&&r.a.createElement("h1",null,r.a.createElement(s.a,{id:t})),r.a.createElement(m,{match:a}))}},1243:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(16),r=a(17),l=a(19),i=a(18),c=a(4),s=a.n(c),u=a(138),o=a(148),m=a(160),b=a(178),d=a(114),f=a(115),g=a(112),p=a(232),h=a.n(p),v=(a(207),a(208),{toolbar:[["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]}),E=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],x=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChangeQuillStandart=function(e){r.setState({textQuillStandart:e})},r.handleChangeQuillBubble=function(e){r.setState({textQuillBubble:e})},r.state={textQuillBubble:"",textQuillStandart:""},r}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(c.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{xxs:"12"},s.a.createElement(f.a,{heading:"menu.editors",match:this.props.match}),s.a.createElement(d.b,{className:"mb-5"}))),s.a.createElement(u.a,{className:"mb-4"},s.a.createElement(d.a,{xxs:"12"},s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement(b.a,null,s.a.createElement(g.a,{id:"editors.quill-standart"})),s.a.createElement(h.a,{theme:"snow",value:this.state.textQuillStandart,onChange:this.handleChangeQuillStandart,modules:v,formats:E}))))),s.a.createElement(u.a,{className:"mb-4"},s.a.createElement(d.a,{xxs:"12"},s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement(b.a,null,s.a.createElement(g.a,{id:"editors.quill-bubble"})),s.a.createElement(h.a,{theme:"bubble",value:this.state.textQuillBubble,onChange:this.handleChangeQuillBubble}))))))}}]),a}(c.Component)},143:function(e,t,a){"use strict";var n=a(10),r=a(12),l=a(4),i=a.n(l),c=a(28),s=a.n(c),u=a(29),o=a.n(u),m=a(110),b={tag:m.tagPropType,listTag:m.tagPropType,className:s.a.string,listClassName:s.a.string,cssModule:s.a.object,children:s.a.node,"aria-label":s.a.string},d=function(e){var t=e.className,a=e.listClassName,l=e.cssModule,c=e.children,s=e.tag,u=e.listTag,b=e["aria-label"],d=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(m.mapToCssModules)(o()(t),l),g=Object(m.mapToCssModules)(o()("breadcrumb",a),l);return i.a.createElement(s,Object(n.a)({},d,{className:f,"aria-label":b}),i.a.createElement(u,{className:g},c))};d.propTypes=b,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=d},144:function(e,t,a){"use strict";var n=a(10),r=a(12),l=a(4),i=a.n(l),c=a(28),s=a.n(c),u=a(29),o=a.n(u),m=a(110),b={tag:m.tagPropType,active:s.a.bool,className:s.a.string,cssModule:s.a.object},d=function(e){var t=e.className,a=e.cssModule,l=e.active,c=e.tag,s=Object(r.a)(e,["className","cssModule","active","tag"]),u=Object(m.mapToCssModules)(o()(t,!!l&&"active","breadcrumb-item"),a);return i.a.createElement(c,Object(n.a)({},s,{className:u,"aria-current":l?"page":void 0}))};d.propTypes=b,d.defaultProps={tag:"li"},t.a=d},149:function(e,t,a){var n=a(121),r=a(255),l=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var a=c.test(e);return a||s.test(e)?u(e.slice(2),a?2:8):i.test(e)?NaN:+e}},238:function(e,t,a){var n=a(427);e.exports=function(e,t){return n(e,t)}},243:function(e,t){e.exports=function(e,t,a,n){for(var r=e.length,l=a+(n?1:-1);n?l--:++l<r;)if(t(e[l],l,e))return l;return-1}},244:function(e,t,a){var n=a(340);e.exports=function(e){var t=n(e),a=t%1;return t===t?a?t-a:t:0}},340:function(e,t,a){var n=a(149);e.exports=function(e){return e?(e=n(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},343:function(e,t,a){var n=a(243),r=a(174),l=a(244),i=Math.max;e.exports=function(e,t,a){var c=null==e?0:e.length;if(!c)return-1;var s=null==a?0:l(a);return s<0&&(s=i(c+s,0)),n(e,r(t,3),s)}},386:function(e,t,a){var n=a(180),r=a(167),l=a(213),i=a(121);e.exports=function(e,t,a){if(!i(a))return!1;var c=typeof t;return!!("number"==c?r(a)&&l(t,a.length):"string"==c&&t in a)&&n(a[t],e)}}}]);
//# sourceMappingURL=components-editors.915a6075.chunk.js.map