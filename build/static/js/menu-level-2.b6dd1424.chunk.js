(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[53],{115:function(e,a,t){"use strict";var n=t(4),r=t.n(n),s=t(143),l=t(144),c=t(113),o=t(112),i=function(e){return r.a.createElement(o.a,{id:"menu.".concat(e)})},u=function(e,a,t){return 0===t?"":e.split(a)[0]+a},m=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,n){return r.a.createElement(l.a,{key:n,active:t.length===n+1},t.length!==n+1?r.a.createElement(c.c,{to:"/"+u(a,e,n)},i(e)):i(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return r.a.createElement(n.Fragment,null,a&&r.a.createElement("h1",null,r.a.createElement(o.a,{id:a})),r.a.createElement(m,{match:t}))}},1278:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(16),r=t(17),s=t(19),l=t(18),c=t(4),o=t.n(c),i=t(138),u=t(112),m=t(114),d=t(115),p=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(c.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(m.a,{xxs:"12"},o.a.createElement(d.a,{heading:"menu.third-level-2",match:this.props.match}),o.a.createElement(m.b,{className:"mb-5"}))),o.a.createElement(i.a,null,o.a.createElement(m.a,{xxs:"12",className:"mb-4"},o.a.createElement("p",null,o.a.createElement(u.a,{id:"menu.third-level-2"})))))}}]),t}(c.Component)},138:function(e,a,t){"use strict";var n=t(10),r=t(12),s=t(4),l=t.n(s),c=t(28),o=t.n(c),i=t(29),u=t.n(i),m=t(110),d=o.a.oneOfType([o.a.number,o.a.string]),p={tag:m.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,c=e.tag,o=e.form,i=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(a,t){var n=e[a];if(delete d[a],n){var r=!t;p.push(r?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var b=Object(m.mapToCssModules)(u()(a,s?"no-gutters":null,o?"form-row":"row",p),t);return l.a.createElement(c,Object(n.a)({},d,{className:b}))};g.propTypes=p,g.defaultProps=b,a.a=g},143:function(e,a,t){"use strict";var n=t(10),r=t(12),s=t(4),l=t.n(s),c=t(28),o=t.n(c),i=t(29),u=t.n(i),m=t(110),d={tag:m.tagPropType,listTag:m.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},p=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,c=e.children,o=e.tag,i=e.listTag,d=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.mapToCssModules)(u()(a),s),g=Object(m.mapToCssModules)(u()("breadcrumb",t),s);return l.a.createElement(o,Object(n.a)({},p,{className:b,"aria-label":d}),l.a.createElement(i,{className:g},c))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},144:function(e,a,t){"use strict";var n=t(10),r=t(12),s=t(4),l=t.n(s),c=t(28),o=t.n(c),i=t(29),u=t.n(i),m=t(110),d={tag:m.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.active,c=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(m.mapToCssModules)(u()(a,!!s&&"active","breadcrumb-item"),t);return l.a.createElement(c,Object(n.a)({},o,{className:i,"aria-current":s?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p}}]);
//# sourceMappingURL=menu-level-2.b6dd1424.chunk.js.map