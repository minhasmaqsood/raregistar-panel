(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[124],{1008:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a(43),s=a(5),r=a.n(s),i=a(9),l=a(16),o=a(17),c=a(19),m=a(18),u=a(4),d=a.n(u),p=a(138),g=a(560),b=a(148),f=a(160),h=a(178),E=a(247),T=a(363),v=a(274),x=a(425),R=a(112),M=a(114),j=a(115),y=a(41),O=a(39),k=a(40),w=a(1),N=a(232),C=a.n(N),F=(a(207),a(208),a(113)),P={toolbar:[["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},I=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],S={dataTradesRegister:"",dataTradesRegisterId:null,ironFxRegisterId:null,vipMemberId:null,ironFxRegister:"",vipMember:"",loading:!1,spinning:!0},_=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getEmailTemplates=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({spinning:!0}),e.t0=y.a,e.t1=O.a.GET_TEMPLATES,e.next=5,Object(w.b)();case 5:return e.t2=e.sent,e.next=8,e.t0.get.call(e.t0,e.t1,e.t2);case 8:200===(t=e.sent).status&&s.setState({dataTradesRegister:t.data.mailingTemplates?t.data.mailingTemplates.datatrades_register.value:"",dataTradesRegisterId:t.data.mailingTemplates?t.data.mailingTemplates.datatrades_register.id:null,ironFxRegister:t.data.mailingTemplates?t.data.mailingTemplates.ironfx_register.value:"",ironFxRegisterId:t.data.mailingTemplates?t.data.mailingTemplates.ironfx_register.id:null,vipMember:t.data.mailingTemplates?t.data.mailingTemplates.vip_member.value:"",vipMemberId:t.data.mailingTemplates?t.data.mailingTemplates.vip_member.id:null,spinning:!1});case 10:case"end":return e.stop()}}),e)}))),s.updateEmailTemplates=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n,i,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=s.state,n=a.dataTradesRegister,i=a.ironFxRegister,l=a.vipMember,!(o=s.handleValidation()).status){e.next=23;break}return s.setState({loading:!0}),e.t0=y.a,e.t1=O.a.UPDATE_TEMPLATE,e.t2={datatrades_register:n,ironfx_register:i,vip_member:l},e.next=10,Object(w.b)();case 10:return e.t3=e.sent,e.next=13,e.t0.post.call(e.t0,e.t1,e.t2,e.t3);case 13:if(200!==e.sent.status){e.next=20;break}return s.getEmailTemplates(),s.setState({loading:!1}),e.abrupt("return",k.a.success("Templates Updated Successfully","Success",3e3,null,null,"filled"));case 20:s.setState({loading:!1});case 21:e.next=24;break;case 23:return e.abrupt("return",k.a.error(o.message,"Error",3e3,null,null,"filled"));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.handleInputChange=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.handleValidation=function(){var e=s.state,t=e.dataTradesRegister,a=e.ironFxRegister,n=e.vipMember,r={message:"Please Provide Data Trades Registration Template Content",status:!1},i={message:"Please Provide Iron Fx Register Template Content",status:!1},l={message:"Please Provide VIP Member Template Content",status:!1};return""!==t?"<p><br></p>"===t?r:""===a||"<p><br></p>"===a?i:""===n||"<p><br></p>"===n?l:{status:!0}:r},s.dataTradesRegisterChange=function(e){s.setState({dataTradesRegister:e})},s.ironFxRegisterChange=function(e){s.setState({ironFxRegister:e})},s.vipMemberChange=function(e){s.setState({vipMember:e})},s.state=S,s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getEmailTemplates()}},{key:"render",value:function(){var e=this.state,t=e.dataTradesRegister,a=e.ironFxRegister,n=e.vipMember,s=e.dataTradesRegisterId,r=e.ironFxRegisterId,i=e.vipMemberId,l=e.spinning;return d.a.createElement(u.Fragment,null,d.a.createElement(p.a,null,d.a.createElement(M.a,{xxs:"12"},d.a.createElement(j.a,{heading:"menu.email-template",match:this.props.match}),d.a.createElement(M.b,{className:"mb-5"}))),l?d.a.createElement("div",{className:"loading"}):d.a.createElement(p.a,null,d.a.createElement(g.a,{xxs:"12"},d.a.createElement("div",{className:"col-sm-12 col-lg-12 col-xs-12 "},d.a.createElement(b.a,null,d.a.createElement("div",{className:"position-absolute card-top-buttons"}),d.a.createElement(f.a,null,d.a.createElement(h.a,null,"Email Templates"),d.a.createElement(E.a,{className:"dashboard-quick-post",onSubmit:this.updateEmailTemplates},d.a.createElement(T.a,{row:!0},d.a.createElement(v.a,{sm:"3"},"Data Trades Register "," | ",d.a.createElement(F.b,{to:"/app/settings/email-templates/translations/".concat(s)},d.a.createElement(x.a,{size:"xs",type:"button",color:"primary",style:{color:"white"}},"Translation"))),d.a.createElement(M.a,{sm:"12"},d.a.createElement(C.a,{theme:"snow",value:t,onChange:this.dataTradesRegisterChange,modules:P,formats:I}))),d.a.createElement(T.a,{row:!0},d.a.createElement(v.a,{sm:"3"},"IronFx Register "," | ",d.a.createElement(F.b,{to:"/app/settings/email-templates/translations/".concat(r)},d.a.createElement(x.a,{size:"xs",type:"button",color:"primary",style:{color:"white"}},"Translation"))),d.a.createElement(M.a,{sm:"12"},d.a.createElement(C.a,{theme:"snow",value:a,onChange:this.ironFxRegisterChange,modules:P,formats:I}))),d.a.createElement(T.a,{row:!0},d.a.createElement(v.a,{sm:"3"},"VIP Member "," | ",d.a.createElement(F.b,{to:"/app/settings/email-templates/translations/".concat(i)},d.a.createElement(x.a,{size:"xs",type:"button",color:"primary",style:{color:"white"}},"Translation"))),d.a.createElement(M.a,{sm:"12"},d.a.createElement(C.a,{theme:"snow",value:n,onChange:this.vipMemberChange,modules:P,formats:I}))),d.a.createElement(x.a,{className:"float-right btn-shadow btn-multiple-state \n                                        ".concat(this.state.loading?"show-spinner":""),color:"primary"},d.a.createElement("span",{className:"spinner d-inline-block"},d.a.createElement("span",{className:"bounce1"}),d.a.createElement("span",{className:"bounce2"}),d.a.createElement("span",{className:"bounce3"})),d.a.createElement("span",{className:"label"},d.a.createElement(R.a,{id:"save"}))))))))))}}]),a}(u.Component)},247:function(e,t,a){"use strict";var n=a(10),s=a(12),r=a(32),i=a(23),l=a(4),o=a.n(l),c=a(28),m=a.n(c),u=a(29),d=a.n(u),p=a(110),g={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,c=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(p.mapToCssModules)(d()(t,!!r&&"form-inline"),a);return o.a.createElement(i,Object(n.a)({},c,{ref:l,className:m}))},t}(l.Component);b.propTypes=g,b.defaultProps={tag:"form"},t.a=b},274:function(e,t,a){"use strict";var n=a(10),s=a(12),r=a(4),i=a.n(r),l=a(28),o=a.n(l),c=a(29),m=a.n(c),u=a(110),d=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.string,o.a.number,o.a.shape({size:d,order:d,offset:d})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.hidden,l=e.widths,o=e.tag,c=e.check,d=e.size,p=e.for,g=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];l.forEach((function(t,n){var s=e[t];if(delete g[t],s||""===s){var r,i=!n;if(Object(u.isObject)(s)){var l,o=i?"-":"-"+t+"-";r=f(i,t,s.size),b.push(Object(u.mapToCssModules)(m()(((l={})[r]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l))),a)}else r=f(i,t,s),b.push(r)}}));var h=Object(u.mapToCssModules)(m()(t,!!r&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),a);return i.a.createElement(o,Object(n.a)({htmlFor:p},g,{className:h}))};h.propTypes=g,h.defaultProps=b,t.a=h}}]);
//# sourceMappingURL=124.4b64419f.chunk.js.map