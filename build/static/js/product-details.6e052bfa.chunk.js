(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[69],{1119:function(e,a,t){},115:function(e,a,t){"use strict";var s=t(4),i=t.n(s),n=t(143),r=t(144),l=t(113),c=t(112),o=function(e){return i.a.createElement(c.a,{id:"menu.".concat(e)})},u=function(e,a,t){return 0===t?"":e.split(a)[0]+a},m=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),i.a.createElement(s.Fragment,null,i.a.createElement(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,s){return i.a.createElement(r.a,{key:s,active:t.length===s+1},t.length!==s+1?i.a.createElement(l.c,{to:"/"+u(a,e,s)},o(e)):o(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return i.a.createElement(s.Fragment,null,a&&i.a.createElement("h1",null,i.a.createElement(c.a,{id:a})),i.a.createElement(m,{match:t}))}},1293:function(e,a,t){"use strict";t.r(a);var s=t(16),i=t(17),n=t(42),r=t(19),l=t(18),c=t(4),o=t.n(c),u=t(138),m=t(753),d=t(755),p=t(757),g=t(765),b=t(148),h=t(160),f=t(570),v=t(766),E=t(767),k=t(418),j=t(419),y=t(614),N=t(615),O=t(246),T=t(616),w=t(425),C=t(345),q=t(178),M=t(113),x=t(29),S=t.n(x),P=t(115),I=t(114),R=t(112),V=t(128),L=t(3),z=t(806),_=t(30),F=(t(807),t(1119),-1),A=-1,B=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e)).onResize=i.onResize.bind(Object(n.a)(i)),i.thumbsResize=i.thumbsResize.bind(Object(n.a)(i)),i.onThumbClick=i.onThumbClick.bind(Object(n.a)(i)),i.imagesSwipeEnd=i.imagesSwipeEnd.bind(Object(n.a)(i)),i.renderDots=i.renderDots.bind(Object(n.a)(i)),i.updateThumbBreakpoints=i.updateThumbBreakpoints.bind(Object(n.a)(i)),i.state={total:i.props.settingsImages.data.length,activeIndex:0,thumbsPerView:Math.min(i.props.settingsThumbs.perView,i.props.settingsImages.data.length),renderArrows:!0},i.updateThumbBreakpoints(),i}return Object(i.a)(t,[{key:"updateThumbBreakpoints",value:function(){var e=this.props.settingsThumbs.breakpoints,a={};for(var t in e)a[t]={perView:Math.min(e[t].perView,this.state.total)};this.props.settingsThumbs.breakpoints=a}},{key:"onThumbClick",value:function(e){this.setState({activeIndex:e}),this.glideCarouselImages.go("="+e)}},{key:"thumbsResize",value:function(){var e=Math.min(this.props.settingsThumbs.perView,this.props.settingsImages.data.length);this.setState({thumbsPerView:e}),this.state.total<=e&&this.setState({renderArrows:!1})}},{key:"imagesSwipeEnd",value:function(){var e=this.glideCarouselThumbs.index+this.state.thumbsPerView;this.setState({activeIndex:this.glideCarouselImages.index}),this.state.activeIndex>=e&&this.glideCarouselThumbs.go(">"),this.state.activeIndex<this.glideCarouselThumbs.index&&this.glideCarouselThumbs.go("<")}},{key:"componentDidMount",value:function(){var e=this;this.glideCarouselImages=new z.a(this.carouselImages,Object(L.a)(Object(L.a)({},this.props.settingsImages),{},{direction:Object(_.c)().direction})),this.glideCarouselImages.mount(),this.glideCarouselThumbs=new z.a(this.carouselThumbs,Object(L.a)(Object(L.a)({},this.props.settingsThumbs),{},{direction:Object(_.c)().direction})),this.glideCarouselThumbs.mount(),this.glideCarouselThumbs.on("resize",this.thumbsResize),this.glideCarouselImages.on("swipe.end",this.imagesSwipeEnd),A=setTimeout((function(){var a=document.createEvent("HTMLEvents");a.initEvent("resize",!1,!1),window.dispatchEvent(a),e.glideCarouselImages.on("resize",e.onResize)}),500)}},{key:"componentWillUnmount",value:function(){clearTimeout(F),clearTimeout(A),this.glideCarouselImages.destroy(),this.glideCarouselThumbs.destroy()}},{key:"onResize",value:function(){var e=this;clearTimeout(F),F=setTimeout((function(){e.glideCarouselImages.update(),e.glideCarouselThumbs.update(),F=-1}),500)}},{key:"renderDots",value:function(){for(var e=[],a=0;a<this.state.total;a++)e.push(o.a.createElement("button",{className:"glide__bullet slider-dot",key:a,"data-glide-dir":"="+a}));return e}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"glide details",ref:function(a){return e.carouselImages=a}},o.a.createElement("div",{"data-glide-el":"track",className:"glide__track"},o.a.createElement("div",{className:"glide__slides"},this.props.settingsImages.data.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("div",{className:"glide__slide"},o.a.createElement("img",{alt:"detail",src:e.img,className:"responsive border-0 border-radius img-fluid mb-3"})))}))))),o.a.createElement("div",{className:"glide thumbs",ref:function(a){return e.carouselThumbs=a}},o.a.createElement("div",{"data-glide-el":"track",className:"glide__track"},o.a.createElement("div",{className:"glide__slides"},this.props.settingsThumbs.data.map((function(a,t){return o.a.createElement("div",{className:t===e.state.activeIndex?"glide__slide active":"glide__slide",key:a.id,onClick:function(){e.onThumbClick(t)}},o.a.createElement("img",{alt:"detail",src:a.img,className:"responsive border-0 border-radius img-fluid"}))})))),this.state.renderArrows&&o.a.createElement("div",{className:"glide__arrows","data-glide-el":"controls"},o.a.createElement("button",{className:"glide__arrow glide__arrow--left","data-glide-dir":"<"},o.a.createElement("i",{className:"simple-icon-arrow-left"})),o.a.createElement("button",{className:"glide__arrow glide__arrow--right","data-glide-dir":">"},o.a.createElement("i",{className:"simple-icon-arrow-right"})))))}}]),t}(o.a.Component),D=t(703),H=[{question:"1. Richardson beer labore wes anderson cred nesciunt?",answer:"Anim pariatur cliche reprehenderit, enim eiusmod highlife accusamus terry richardson ad squid. 3 wolf moonofficia aute, non cupidatat skateboard dolor brunch. Brunch 3wolf moon tempor, sunt aliqua put a bird on it squidsingle- origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson cred nesciunt sapiente ea proident.Ad veganexcepteur butcher vice lomo.Leggings occaecat craftbeer farm - to - table, raw denim aesthetic synth nesciuntyou probably haven't heard of them accusamus laboresustainable VHS.",key:"q1"},{question:"2. Labore wes anderson cred nesciunt sapiente ea proident?",answer:"Anim pariatur cliche reprehenderit, enim eiusmod highlife accusamus terry richardson ad squid. 3 wolf moonofficia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson cred nesciunt sapiente ea proident.",key:"q2"},{question:"3. Sunt aliqua put a bird on it squid?",answer:"Brunch 3wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson cred nesciunt sapiente ea proident. Ad veganexcepteur butcher vice lomo. Leggings occaecat craftbeer farm-to-table, raw denim aesthetic synth nesciuntyou probably haven't heard of them accusamus laboresustainable VHS.",key:"q3"},{question:"4. Skateboard dolor brunch?",answer:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",key:"q4"},{question:"5. Vestibulum ante ipsum primis in faucibus?",answer:"Sed volutpat mollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris.",key:"q5"},{question:"6. Moon officia aute?",answer:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ",key:"q6"}],W=t(704),U=t(705),J=t(706),G=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e)).getLikeLabel=i.getLikeLabel.bind(Object(n.a)(i)),i}return Object(i.a)(t,[{key:"getLikeLabel",value:function(e){return 1===e?this.props.intl.messages["pages.like"]:this.props.intl.messages["pages.likes"]}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(w.a,{className:"p-0 pb-2 font-weight-bold",color:"link",id:this.props.data.key},o.a.createElement("p",{className:"mb-2"},this.props.data.question)),o.a.createElement(J.a,{toggler:"#"+this.props.data.key},o.a.createElement("div",{className:"pb-4"},this.props.data.answer)))}}]),t}(c.Component),Q=Object(V.d)(G),Y=t(707),K=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e)).toggleTab=i.toggleTab.bind(Object(n.a)(i)),i.state={activeFirstTab:"1"},i}return Object(i.a)(t,[{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeFirstTab:e})}},{key:"render",value:function(){var e=this,a=this.props.intl.messages;return o.a.createElement(c.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(I.a,{xxs:"12"},o.a.createElement("h1",null,"Magdalena Cake"),o.a.createElement("div",{className:"text-zero top-right-button-container"},o.a.createElement(m.a,null,o.a.createElement(d.a,{caret:!0,color:"primary",size:"lg",outline:!0,className:"top-right-button top-right-button-single"},o.a.createElement(R.a,{id:"pages.actions"})),o.a.createElement(p.a,null,o.a.createElement(g.a,{header:!0},o.a.createElement(R.a,{id:"pages.header"})),o.a.createElement(g.a,{disabled:!0},o.a.createElement(R.a,{id:"pages.delete"})),o.a.createElement(g.a,null,o.a.createElement(R.a,{id:"pages.another-action"})),o.a.createElement(g.a,{divider:!0}),o.a.createElement(g.a,null,o.a.createElement(R.a,{id:"pages.another-action"}))))),o.a.createElement(P.a,{match:this.props.match}),o.a.createElement(I.b,{className:"mb-5"}),o.a.createElement(u.a,null,o.a.createElement(I.a,{xxs:"12",xl:"8",className:"col-left"},o.a.createElement(b.a,{className:"mb-4"},o.a.createElement(h.a,null,o.a.createElement(B,{settingsImages:{bound:!0,rewind:!1,focusAt:0,startAt:0,gap:5,perView:1,data:D.a},settingsThumbs:{bound:!0,rewind:!1,focusAt:0,startAt:0,gap:10,perView:5,data:D.b,breakpoints:{576:{perView:4},420:{perView:3}}}}))),o.a.createElement(b.a,{className:"mb-4"},o.a.createElement(f.a,null,o.a.createElement(v.a,{tabs:!0,className:"card-header-tabs "},o.a.createElement(E.a,null,o.a.createElement(M.c,{className:S()({active:"1"===this.state.activeFirstTab,"nav-link":!0}),onClick:function(){e.toggleTab("1")},to:"#"},o.a.createElement(R.a,{id:"pages.details-title"}))),o.a.createElement(E.a,null,o.a.createElement(M.c,{className:S()({active:"2"===this.state.activeFirstTab,"nav-link":!0}),onClick:function(){e.toggleTab("2")},to:"#"},o.a.createElement(R.a,{id:"pages.comments-title"}),"(19)")),o.a.createElement(E.a,null,o.a.createElement(M.c,{className:S()({active:"3"===this.state.activeFirstTab,"nav-link":!0}),onClick:function(){e.toggleTab("3")},to:"#"},o.a.createElement(R.a,{id:"pages.questions-title"}),"(6)")))),o.a.createElement(k.a,{activeTab:this.state.activeFirstTab},o.a.createElement(j.a,{tabId:"1"},o.a.createElement(u.a,null,o.a.createElement(I.a,{sm:"12"},o.a.createElement(h.a,null,o.a.createElement("p",{className:"font-weight-bold"},"Augue Vitae Commodo"),o.a.createElement("p",null,"Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, egetauctor sapien varius.                              ",o.a.createElement("br",null),o.a.createElement("br",null),"Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh. Sed viverra quam urna, at condimentum ante viverra non. Mauris posuere erat sapien, a convallis libero lobortis sit amet. Suspendisse in orci tellus."),o.a.createElement("br",null),o.a.createElement("p",{className:"font-weight-bold"},"Phasellus Efficitur"),o.a.createElement("p",null,"Tellus a sem condimentum, vitae convallis sapien feugiat.Aenean non nibh nec nunc aliquam iaculis. Ut quis suscipit nunc. Duis at lectusa est aliquam venenatis vitae eget arcu. Sed egestas felis eget convallismaximus. Curabitur maximus, ligula vel sagittis iaculis, risus nisi tinciduntsem, ut ultricies libero nulla eu ligula. Nam ultricies mollis nulla, sedlaoreet leo convallis ac. Mauris nisl risus, tincidunt ac diam aliquet,convallis pellentesque nisi. Nam sit amet libero at odio malesuada ultricies avitae dolor. Cras in viverra felis, non consequat quam. Praesent a orci enim.Vivamus porttitor nisi at nisl egestas iaculis. Nullam commodo eget duisollicitudin sagittis. Duis id nibh mollis, hendrerit metus consectetur,ullamcorper risus. Morbi elementum ultrices nunc, quis porta nisi ornare sitamet.",o.a.createElement("br",null),o.a.createElement("br",null),"Etiam tincidunt orci in nisi aliquam placerat. Aliquam finibus in sem utvehicula. Morbi eget consectetur leo. Quisque consectetur lectus eros, sedsodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit.Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.",o.a.createElement("br",null),o.a.createElement("br",null),"Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallis enim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, eget auctor sapien varius."),o.a.createElement("br",null),o.a.createElement("p",{className:"font-weight-bold"},"Elementum Ultrices"),o.a.createElement(y.a,{borderless:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"#"),o.a.createElement("th",{scope:"col"},"First"),o.a.createElement("th",{scope:"col"},"Last"),o.a.createElement("th",{scope:"col"},"Handle"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"1"),o.a.createElement("td",null,"Mark"),o.a.createElement("td",null,"Otto"),o.a.createElement("td",null,"@mdo")),o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"2"),o.a.createElement("td",null,"Jacob"),o.a.createElement("td",null,"Thornton"),o.a.createElement("td",null,"@fat")),o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},"3"),o.a.createElement("td",{colSpan:"2"},"Larry the Bird"),o.a.createElement("td",null,"@twitter")))))))),o.a.createElement(j.a,{tabId:"2"},o.a.createElement(u.a,null,o.a.createElement(I.a,{sm:"12"},o.a.createElement(h.a,null,U.a.map((function(e,a){return o.a.createElement(W.a,{data:e,key:e.key})})),o.a.createElement(N.a,{className:"comment-contaiener"},o.a.createElement(O.a,{placeholder:a["pages.addComment"]}),o.a.createElement(T.a,{addonType:"append"},o.a.createElement(w.a,{color:"primary"},o.a.createElement("span",{className:"d-inline-block"},a["pages.send"])," ",o.a.createElement("i",{className:"simple-icon-arrow-right ml-2"})))))))),o.a.createElement(j.a,{tabId:"3"},o.a.createElement(u.a,null,o.a.createElement(I.a,{sm:"12"},o.a.createElement(h.a,null,H.map((function(e,a){return o.a.createElement(Q,{data:e,key:e.key})}))))))))),o.a.createElement(I.a,{xxs:"12",xl:"4",className:"col-right"},o.a.createElement(b.a,{className:"mb-4"},o.a.createElement(h.a,null,o.a.createElement("div",{className:"mb-3"},o.a.createElement("div",{className:"post-icon mr-3 d-inline-block"},o.a.createElement(M.c,{to:"#"},o.a.createElement("i",{className:"simple-icon-heart mr-1"})),o.a.createElement("span",null,"4 ",a["pages.likes"])),o.a.createElement("div",{className:"post-icon mr-3 d-inline-block"},o.a.createElement(M.c,{to:"#"},o.a.createElement("i",{className:"simple-icon-bubble mr-1"})),o.a.createElement("span",null,"2 ",a["pages.comments-title"]))),o.a.createElement("p",{className:"mb-3"},"Vivamus ultricies augue vitae commodo condimentum. Nullam faucibus eros eu mauris feugiat, eget consectetur tortor tempus.",o.a.createElement("br",null),o.a.createElement("br",null),"Sed volutpat mollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris.",o.a.createElement("br",null),o.a.createElement("br",null),"Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh. Sed viverra quam urna, at condimentum ante viverra non. Mauris posuere erat sapien, a convallis libero lobortis sit amet. Suspendisse in orci tellus."),o.a.createElement("p",{className:"text-muted text-small mb-2"},a["forms.tags"]),o.a.createElement("p",{className:"mb-3"},o.a.createElement(C.a,{color:"outline-secondary",className:"mb-1 mr-1",pill:!0},"FRONTEND"),o.a.createElement(C.a,{color:"outline-secondary",className:"mb-1 mr-1",pill:!0},"JAVASCRIPT"),o.a.createElement(C.a,{color:"outline-secondary",className:"mb-1 mr-1",pill:!0},"SECURITY"),o.a.createElement(C.a,{color:"outline-secondary",className:"mb-1 mr-1",pill:!0},"DESIGN")))),o.a.createElement(b.a,{className:"mb-4"},o.a.createElement(h.a,null,o.a.createElement(q.a,null,o.a.createElement(R.a,{id:"pages.similar-projects"})),o.a.createElement(Y.a,null))))))))}}]),t}(c.Component);a.default=Object(V.d)(K)},163:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t(4),i=t.n(s).a.createContext({})},246:function(e,a,t){"use strict";var s=t(10),i=t(12),n=t(32),r=t(23),l=t(4),c=t.n(l),o=t(28),u=t.n(o),m=t(29),d=t.n(m),p=t(110),g={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(n.a)(t)),t.focus=t.focus.bind(Object(n.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.type,r=e.bsSize,l=e.valid,o=e.invalid,u=e.tag,m=e.addon,g=e.plaintext,b=e.innerRef,h=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),f=["radio","checkbox"].indexOf(n)>-1,v=new RegExp("\\D","g"),E=u||("select"===n||"textarea"===n?n:"input"),k="form-control";g?(k+="-plaintext",E=u||"input"):"file"===n?k+="-file":f&&(k=m?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var j=Object(p.mapToCssModules)(d()(a,o&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,k),t);return("input"===E||u&&"function"===typeof u)&&(h.type=n),h.children&&!g&&"select"!==n&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(E,Object(s.a)({},h,{ref:b,className:j}))},a}(c.a.Component);b.propTypes=g,b.defaultProps={type:"text"},a.a=b},345:function(e,a,t){"use strict";var s=t(10),i=t(12),n=t(4),r=t.n(n),l=t(28),c=t.n(l),o=t(29),u=t.n(o),m=t(110),d={color:c.a.string,pill:c.a.bool,tag:m.tagPropType,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.color,l=e.innerRef,c=e.pill,o=e.tag,d=Object(i.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(m.mapToCssModules)(u()(a,"badge","badge-"+n,!!c&&"badge-pill"),t);return d.href&&"span"===o&&(o="a"),r.a.createElement(o,Object(s.a)({},d,{className:p,ref:l}))};p.propTypes=d,p.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=p},418:function(e,a,t){"use strict";var s=t(10),i=t(23),n=t(4),r=t.n(n),l=t(156),c=t(28),o=t.n(c),u=t(29),m=t.n(u),d=t(163),p=t(110),g={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(i.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.tag,n=Object(p.omit)(this.props,Object.keys(g)),l=Object(p.mapToCssModules)(m()("tab-content",a),t);return r.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},r.a.createElement(i,Object(s.a)({},n,{className:l})))},a}(n.Component);Object(l.polyfill)(b),a.a=b,b.propTypes=g,b.defaultProps={tag:"div"}},419:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var s=t(10),i=t(12),n=t(4),r=t.n(n),l=t(28),c=t.n(l),o=t(29),u=t.n(o),m=t(163),d=t(110),p={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,tabId:c.a.any};function g(e){var a=e.className,t=e.cssModule,n=e.tabId,l=e.tag,c=Object(i.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(d.mapToCssModules)(u()("tab-pane",a,{active:n===e}),t)};return r.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return r.a.createElement(l,Object(s.a)({},c,{className:o(a)}))}))}g.propTypes=p,g.defaultProps={tag:"div"}},542:function(e,a,t){"use strict";var s=t(10),i=t(12),n=t(4),r=t.n(n),l=t(28),c=t.n(l),o=t(29),u=t.n(o),m=t(110),d={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(i.a)(e,["className","cssModule","tag"]),c=Object(m.mapToCssModules)(u()(a,"input-group-text"),t);return r.a.createElement(n,Object(s.a)({},l,{className:c}))};p.propTypes=d,p.defaultProps={tag:"span"},a.a=p},570:function(e,a,t){"use strict";var s=t(10),i=t(12),n=t(4),r=t.n(n),l=t(28),c=t.n(l),o=t(29),u=t.n(o),m=t(110),d={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(i.a)(e,["className","cssModule","tag"]),c=Object(m.mapToCssModules)(u()(a,"card-header"),t);return r.a.createElement(n,Object(s.a)({},l,{className:c}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},614:function(e,a,t){"use strict";var s=t(10),i=t(12),n=t(4),r=t.n(n),l=t(28),c=t.n(l),o=t(29),u=t.n(o),m=t(110),d={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:m.tagPropType,responsiveTag:m.tagPropType,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var a=e.className,t=e.cssModule,n=e.size,l=e.bordered,c=e.borderless,o=e.striped,d=e.dark,p=e.hover,g=e.responsive,b=e.tag,h=e.responsiveTag,f=e.innerRef,v=Object(i.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(m.mapToCssModules)(u()(a,"table",!!n&&"table-"+n,!!l&&"table-bordered",!!c&&"table-borderless",!!o&&"table-striped",!!d&&"table-dark",!!p&&"table-hover"),t),k=r.a.createElement(b,Object(s.a)({},v,{ref:f,className:E}));if(g){var j=Object(m.mapToCssModules)(!0===g?"table-responsive":"table-responsive-"+g,t);return r.a.createElement(h,{className:j},k)}return k};p.propTypes=d,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},615:function(e,a,t){"use strict";var s=t(10),i=t(12),n=t(4),r=t.n(n),l=t(28),c=t.n(l),o=t(29),u=t.n(o),m=t(110),d={tag:m.tagPropType,size:c.a.string,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=e.size,c=Object(i.a)(e,["className","cssModule","tag","size"]),o=Object(m.mapToCssModules)(u()(a,"input-group",l?"input-group-"+l:null),t);return r.a.createElement(n,Object(s.a)({},c,{className:o}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},616:function(e,a,t){"use strict";var s=t(10),i=t(12),n=t(4),r=t.n(n),l=t(28),c=t.n(l),o=t(29),u=t.n(o),m=t(110),d=t(542),p={tag:m.tagPropType,addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node,className:c.a.string,cssModule:c.a.object},g=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=e.addonType,c=e.children,o=Object(i.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(m.mapToCssModules)(u()(a,"input-group-"+l),t);return"string"===typeof c?r.a.createElement(n,Object(s.a)({},o,{className:p}),r.a.createElement(d.a,{children:c})):r.a.createElement(n,Object(s.a)({},o,{className:p,children:c}))};g.propTypes=p,g.defaultProps={tag:"div"},a.a=g},703:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return n}));var s=[{id:1,title:"1 Homemade Cheesecake with Fresh Berries and Mint",img:"/assets/img/card-thumb-1.jpg",detail:"10.12.2019",category:"Cupcakes",badges:[{color:"theme-1",title:"NEW"},{color:"theme-2",title:"ONHOLD"}]},{id:2,title:"2 Wedding Cake with Flowers Macarons and Blueberries",img:"/assets/img/card-thumb-2.jpg",detail:"01.06.2019",category:"Cakes",badges:[{color:"theme-2",title:"DONE"},{color:"primary",title:"TRENDING"}]},{id:3,title:"3 Cheesecake with Chocolate Cookies and Cream Biscuits",img:"/assets/img/card-thumb-3.jpg",detail:"27.05.2019",category:"Cupcakes",badges:[{color:"secondary",title:"PROCESSED"}]},{id:4,title:"4 Homemade Cheesecake with Fresh Berries and Mint",img:"/assets/img/card-thumb-1.jpg",detail:"10.12.2019",category:"Cakes",badges:[{color:"primary",title:"NEW"}]},{id:5,title:"5 Cheesecake with Chocolate Cookies and Cream Biscuits",img:"/assets/img/card-thumb-3.jpg",detail:"27.05.2019",category:"Cupcakes",badges:[{color:"theme-3",title:"PROCESSED"}]}],i=[{id:"large1",img:"/assets/img/parkin.jpg"},{id:"large2",img:"/assets/img/napoleonshat.jpg"},{id:"large3",img:"/assets/img/marble-cake.jpg"},{id:"large4",img:"/assets/img/fruitcake.jpg"},{id:"large5",img:"/assets/img/magdalena.jpg"},{id:"large6",img:"/assets/img/tea-loaf.jpg"}],n=[{id:"thumb1",img:"/assets/img/parkin-thumb.jpg"},{id:"thumb2",img:"/assets/img/napoleonshat-thumb.jpg"},{id:"thumb3",img:"/assets/img/marble-cake-thumb.jpg"},{id:"thumb4",img:"/assets/img/fruitcake-thumb.jpg"},{id:"thumb5",img:"/assets/img/magdalena-thumb.jpg"},{id:"thumb6",img:"/assets/img/tea-loaf-thumb.jpg"}]},704:function(e,a,t){"use strict";var s=t(16),i=t(17),n=t(42),r=t(19),l=t(18),c=t(4),o=t.n(c),u=t(113),m=t(128),d=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e)).getLikeLabel=i.getLikeLabel.bind(Object(n.a)(i)),i}return Object(i.a)(t,[{key:"getLikeLabel",value:function(e){return 1===e?this.props.intl.messages["pages.like"]:this.props.intl.messages["pages.likes"]}},{key:"render",value:function(){return o.a.createElement("div",{className:"d-flex flex-row mb-3 border-bottom justify-content-between "+this.props.className},o.a.createElement(u.c,{to:"#"},o.a.createElement("img",{src:this.props.data.thumb,alt:this.props.data.name,className:"img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"})),o.a.createElement("div",{className:"pl-3 flex-grow-1"},o.a.createElement(u.c,{to:"#"},o.a.createElement("p",{className:"font-weight-medium mb-0"},this.props.data.name),o.a.createElement("p",{className:"text-muted mb-0 text-small"},this.props.data.data)),o.a.createElement("p",{className:"mt-3"},this.props.data.detail)),o.a.createElement("div",{className:"comment-likes"},o.a.createElement("span",{className:"post-icon"},o.a.createElement(u.c,{to:"#"},o.a.createElement("span",null,this.props.data.likes>0?this.props.data.likes+" "+this.getLikeLabel(this.props.data.likes):""),o.a.createElement("i",{className:"simple-icon-heart ml-2"})))))}}]),t}(c.Component);a.a=Object(m.d)(d)},705:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return i}));var s=[{title:"Very informative content, thank you. ",detail:"Mayra Sibley | Tea Loaf with Fresh Oranges | 17.09.2018 - 04:45",thumb:"/assets/img/profile-pic-l.jpg",rate:5,key:0},{title:"This article was delightful to read. Please keep them coming.",detail:"Barbera Castiglia | Cheesecake with Chocolate Cookies | 15.08.2018 - 01:18",thumb:"/assets/img/profile-pic-l-2.jpg",rate:4,key:1},{title:"Your post is bad and you should feel bad.",detail:"Bao Hathaway | Homemade Cheesecake | 26.07.2018 - 11:14",thumb:"/assets/img/profile-pic-l-3.jpg",rate:5,key:2},{title:"Very original idea!",detail:"Lenna Majeed | Tea Loaf with Fresh Oranges | 17.06.2018 - 09:20",thumb:"/assets/img/profile-pic-l-4.jpg",rate:3,key:3},{title:"This article was delightful to read. Please keep them coming.",detail:"Esperanza Lodge | Cheesecake with Fresh Berries | 16.06.2018 - 16:45",thumb:"/assets/img/profile-pic-l-5.jpg",rate:2,key:4},{title:"Nah, did not like it.",detail:"24.07.2018 - 15:00",thumb:"/assets/img/profile-pic-l-2.jpg",rate:5,key:5},{title:"Laree Munsch",detail:"Brynn Bragg | Wedding Cake with Flowers | 12.04.2018 - 12:45",thumb:"/assets/img/profile-pic-l.jpg",rate:4,key:6}],i=[{name:"Mimi Carreira",detail:"Pellentesque quis cursus mauris.",date:"An hour ago",thumb:"/assets/img/profile-pic-l.jpg",likes:2,key:0},{name:"Kathryn Mengel",detail:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallis enim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, eget auctor sapien varius.",date:"Two hours ago",thumb:"/assets/img/profile-pic-l-3.jpg",likes:1,key:1},{name:"Philip Nelms",detail:"Quisque consectetur lectus eros, sed sodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit. Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.",date:"Two hours ago",thumb:"/assets/img/profile-pic-l-4.jpg",likes:5,key:2},{name:"Velva Valdovinos",detail:"Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh. Sed viverra quam urna, at condimentum ante viverra non. Mauris posuere erat sapien, a convallis libero lobortis sit amet. Suspendisse in orci tellus.",date:"A day ago",thumb:"/assets/img/profile-pic-l-5.jpg",likes:0,key:3},{name:"Latarsha Gama",detail:"Taking seamless key performance indicators offline to maximise the long tail.",date:"Five days ago",thumb:"/assets/img/profile-pic-l-7.jpg",likes:0,key:4},{name:"Laree Munsch",detail:"Quisque consectetur lectus eros, sed sodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit. Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.",date:"Six days ago",thumb:"/assets/img/profile-pic-l-2.jpg",likes:14,key:5}]},706:function(e,a,t){"use strict";var s=t(10),i=t(32),n=t(23),r=t(4),l=t.n(r),c=t(28),o=t.n(c),u=t(631),m=t(110),d=["toggleEvents","defaultOpen"],p={defaultOpen:o.a.bool,toggler:o.a.string.isRequired,toggleEvents:o.a.arrayOf(o.a.string)},g={toggleEvents:m.defaultToggleEvents},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).togglers=null,t.removeEventListeners=null,t.toggle=t.toggle.bind(Object(i.a)(t)),t.state={isOpen:a.defaultOpen||!1},t}Object(n.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){this.togglers=Object(m.findDOMElements)(this.props.toggler),this.togglers.length&&(this.removeEventListeners=Object(m.addMultipleEventListeners)(this.togglers,this.toggle,this.props.toggleEvents))},t.componentWillUnmount=function(){this.togglers.length&&this.removeEventListeners&&this.removeEventListeners()},t.toggle=function(e){this.setState((function(e){return{isOpen:!e.isOpen}})),e.preventDefault()},t.render=function(){return l.a.createElement(u.a,Object(s.a)({isOpen:this.state.isOpen},Object(m.omit)(this.props,d)))},a}(r.Component);b.propTypes=p,b.defaultProps=g,a.a=b},707:function(e,a,t){"use strict";var s=t(16),i=t(17),n=t(42),r=t(19),l=t(18),c=t(4),o=t.n(c),u=t(128),m=t(592),d=t(113),p=["/assets/img/fruitcake.jpg","/assets/img/napoleonshat.jpg","/assets/img/tea-loaf.jpg","/assets/img/magdalena.jpg","/assets/img/marble-cake.jpg","/assets/img/parkin.jpg"],g=["/assets/img/fruitcake-thumb.jpg","/assets/img/napoleonshat-thumb.jpg","/assets/img/tea-loaf-thumb.jpg","/assets/img/magdalena-thumb.jpg","/assets/img/marble-cake-thumb.jpg","/assets/img/parkin-thumb.jpg"],b=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e)).onThumbClick=i.onThumbClick.bind(Object(n.a)(i)),i.state={photoIndex:0,isOpen:!1},i}return Object(i.a)(t,[{key:"onThumbClick",value:function(e){this.setState({photoIndex:e}),this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this,a=this.state,t=a.photoIndex,s=a.isOpen;return o.a.createElement("div",null,o.a.createElement("div",{className:"row social-image-row gallery"},g.map((function(a,t){return o.a.createElement("div",{className:"col-6",key:t},o.a.createElement(d.c,{to:"#",onClick:function(){return e.onThumbClick(t)}},o.a.createElement("img",{className:"img-fluid border-radius",src:a,alt:"thumbnail"})))}))),s&&o.a.createElement(m.a,{mainSrc:p[t],nextSrc:p[(t+1)%p.length],prevSrc:p[(t+p.length-1)%p.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(t+p.length-1)%p.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(t+1)%p.length})}}))}}]),t}(c.Component);a.a=Object(u.d)(b)}}]);
//# sourceMappingURL=product-details.6e052bfa.chunk.js.map