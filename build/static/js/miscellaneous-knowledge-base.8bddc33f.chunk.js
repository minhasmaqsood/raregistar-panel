(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[59],{115:function(e,t,a){"use strict";var n=a(4),l=a.n(n),i=a(143),s=a(144),r=a(113),c=a(112),o=function(e){return l.a.createElement(c.a,{id:"menu.".concat(e)})},u=function(e,t,a){return 0===a?"":e.split(t)[0]+t},m=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),l.a.createElement(n.Fragment,null,l.a.createElement(i.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return l.a.createElement(s.a,{key:n,active:a.length===n+1},a.length!==n+1?l.a.createElement(r.c,{to:"/"+u(t,e,n)},o(e)):o(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return l.a.createElement(n.Fragment,null,t&&l.a.createElement("h1",null,l.a.createElement(c.a,{id:t})),l.a.createElement(m,{match:a}))}},1301:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(17),i=a(19),s=a(18),r=a(4),c=a.n(r),o=a(138),u=a(148),m=a(160),d=a(115),g=a(114),b=a(128),p=[{title:"USING GOGO",icon:"iconsminds-director ",detail:"Systems thinking correlation, social impact; when revolutionary fully ethical life bandwidth and thought partnership.",subtitles:[{title:"Getting Started",link:"#"},{title:"Game Changing Features",link:"#"},{title:"Structure",link:"#"},{title:"Adding Content",link:"#"},{title:"Gulp & Package.json",link:"#"},{title:"Codebase",link:"#"},{title:"Styles and Themes",link:"#"},{title:"Fonts",link:"#"},{title:"Plugins",link:"#"},{title:"Changelog",link:"#"}]},{title:"SECURITY",icon:"iconsminds-security-settings ",detail:"Tellus a sem condimentum, vitae convallis sapien feugiat. Aenean non nibh nec nunc aliquam iaculis. Ut quis suscipit nunc. Duis at lectus a est aliquam venenatis vitae eget arcu.",subtitles:[{title:"Securing Your Account",link:"#"},{title:"Privacy",link:"#"},{title:"Spam",link:"#"},{title:"Sensitive Content",link:"#"},{title:"Abuse",link:"#"},{title:"Blocking Users",link:"#"},{title:"Reporting",link:"#"}]},{title:"ACCOUNT",icon:"iconsminds-male",detail:"Squid single-origincoffeenulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beerlaborewes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butchervice lomo.",subtitles:[{title:"Login and Register",link:"#"},{title:"Password Reset",link:"#"},{title:"Devices",link:"#"},{title:"Integrations",link:"#"},{title:"Notifications",link:"#"},{title:"Messages",link:"#"},{title:"Blocking Users",link:"#"},{title:"Following Users",link:"#"},{title:"Login",link:"#"},{title:"Content Filters",link:"#"}]},{title:"POLICIES",icon:"iconsminds-newspaper",detail:"Duis at lectus a est aliquam venenatis vitae eget arcu. Sed egestas felis eget convallis maximus. Curabitur maximus.",subtitles:[{title:"About",link:"#"},{title:"Policies",link:"#"},{title:"Privacy",link:"#"},{title:"Ad Choices",link:"#"},{title:"Researches and Experiments",link:"#"},{title:"General Guidelines",link:"#"},{title:"Cookies",link:"#"}]}],f=a(113),h=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement(o.a,null,c.a.createElement(g.a,{xxs:"12"},c.a.createElement(d.a,{heading:"menu.faq",match:this.props.match}),c.a.createElement(g.b,{className:"mb-5"}))),c.a.createElement(o.a,{className:"equal-height-container"},p.map((function(e,t){return c.a.createElement(g.a,{md:"12",xl:"6",className:"mb-4 col-item",key:t},c.a.createElement(u.a,null,c.a.createElement(m.a,null,c.a.createElement("div",{className:"text-center"},c.a.createElement("i",{className:e.icon+" large-icon"}),c.a.createElement("h5",{className:"mb-0 font-weight-semibold color-theme-1 mb-4"},e.title)),c.a.createElement("div",{className:"pl-3 pr-3 pt-3 pb-0 d-flex flex-column flex-grow-1"},c.a.createElement("p",{className:"text-muted mb-4"},e.detail),c.a.createElement("ul",{className:"list-unstyled mb-0"},e.subtitles.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(f.c,{to:e.link,className:"btn-link"},e.title))})))))))}))))}}]),a}(r.Component);t.default=Object(b.d)(h)},138:function(e,t,a){"use strict";var n=a(10),l=a(12),i=a(4),s=a.n(i),r=a(28),c=a.n(r),o=a(29),u=a.n(o),m=a(110),d=c.a.oneOfType([c.a.number,c.a.string]),g={tag:m.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,r=e.tag,c=e.form,o=e.widths,d=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];o.forEach((function(t,a){var n=e[t];if(delete d[t],n){var l=!a;g.push(l?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var b=Object(m.mapToCssModules)(u()(t,i?"no-gutters":null,c?"form-row":"row",g),a);return s.a.createElement(r,Object(n.a)({},d,{className:b}))};p.propTypes=g,p.defaultProps=b,t.a=p},143:function(e,t,a){"use strict";var n=a(10),l=a(12),i=a(4),s=a.n(i),r=a(28),c=a.n(r),o=a(29),u=a.n(o),m=a(110),d={tag:m.tagPropType,listTag:m.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},g=function(e){var t=e.className,a=e.listClassName,i=e.cssModule,r=e.children,c=e.tag,o=e.listTag,d=e["aria-label"],g=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.mapToCssModules)(u()(t),i),p=Object(m.mapToCssModules)(u()("breadcrumb",a),i);return s.a.createElement(c,Object(n.a)({},g,{className:b,"aria-label":d}),s.a.createElement(o,{className:p},r))};g.propTypes=d,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=g},144:function(e,t,a){"use strict";var n=a(10),l=a(12),i=a(4),s=a.n(i),r=a(28),c=a.n(r),o=a(29),u=a.n(o),m=a(110),d={tag:m.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},g=function(e){var t=e.className,a=e.cssModule,i=e.active,r=e.tag,c=Object(l.a)(e,["className","cssModule","active","tag"]),o=Object(m.mapToCssModules)(u()(t,!!i&&"active","breadcrumb-item"),a);return s.a.createElement(r,Object(n.a)({},c,{className:o,"aria-current":i?"page":void 0}))};g.propTypes=d,g.defaultProps={tag:"li"},t.a=g},148:function(e,t,a){"use strict";var n=a(10),l=a(12),i=a(4),s=a.n(i),r=a(28),c=a.n(r),o=a(29),u=a.n(o),m=a(110),d={tag:m.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var t=e.className,a=e.cssModule,i=e.color,r=e.body,c=e.inverse,o=e.outline,d=e.tag,g=e.innerRef,b=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.mapToCssModules)(u()(t,"card",!!c&&"text-white",!!r&&"card-body",!!i&&(o?"border":"bg")+"-"+i),a);return s.a.createElement(d,Object(n.a)({},b,{className:p,ref:g}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g},160:function(e,t,a){"use strict";var n=a(10),l=a(12),i=a(4),s=a.n(i),r=a(28),c=a.n(r),o=a(29),u=a.n(o),m=a(110),d={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,r=e.tag,c=Object(l.a)(e,["className","cssModule","innerRef","tag"]),o=Object(m.mapToCssModules)(u()(t,"card-body"),a);return s.a.createElement(r,Object(n.a)({},c,{className:o,ref:i}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g}}]);
//# sourceMappingURL=miscellaneous-knowledge-base.8bddc33f.chunk.js.map