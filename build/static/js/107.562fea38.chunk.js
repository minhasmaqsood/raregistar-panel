(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[107],{1005:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return q}));var n=t(43),l=t(5),s=t.n(l),r=t(9),o=t(16),i=t(17),c=t(19),u=t(18),m=t(4),d=t.n(m),g=t(138),p=t(560),h=t(178),E=t(148),b=t(160),f=t(247),C=t(363),v=t(425),S=t(112),T=t(114),N=t(115),w=t(41),O=t(39),y=t(40),x=t(1),k=t(232),L=t.n(k),j=(t(207),t(208),t(172)),A=t(176),M=t(673),I=t(153),P=M.a.Column,D=M.a.HeaderCell,R=M.a.Cell,_={toolbar:[["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},U=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],z={content:"",loading:!1,languages:[],entityId:"",translations:[],spinning:!0,selectedLanguage:"",translationContent:"",translationId:null,modalMethod:"",loadingApi:!1,showModal:!1,displayLength:10,page:1},q=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(o.a)(this,t),(l=a.call(this,e)).getTermsAndConditions=Object(r.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.setState({spinning:!0}),e.t0=w.a,e.t1=O.a.GET_TERMS_AND_CONDITIONS,e.next=5,Object(x.b)();case 5:return e.t2=e.sent,e.next=8,e.t0.get.call(e.t0,e.t1,e.t2);case 8:200===(a=e.sent).status&&l.setState({content:a.data.termCondition.terms,entityId:a.data.termCondition.id,languages:a.data.languages,translations:a.data.termCondition.translations,spinning:!1});case 10:case"end":return e.stop()}}),e)}))),l.updatePrivacyPolicy=function(){var e=Object(r.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),l.setState({loading:!0}),t=l.state.content,e.t0=w.a,e.t1=O.a.UPDATE_TERMS_AND_CONDITIONS,e.t2={terms:t},e.next=8,Object(x.b)();case 8:return e.t3=e.sent,e.next=11,e.t0.post.call(e.t0,e.t1,e.t2,e.t3);case 11:if(200!==e.sent.status){e.next=18;break}return l.getTermsAndConditions(),l.setState({loading:!1}),e.abrupt("return",y.a.success("Terms & Conditions Updated Successfully","Success",3e3,null,null,"filled"));case 18:l.setState({loading:!1});case 19:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l.handleInputChange=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.handleChangeContent=function(e){l.setState({content:e})},l.handleChangePage=function(e){l.setState({page:e})},l.handleChangeLength=function(e){l.setState({page:1,displayLength:e})},l.getData=function(){var e=l.state,a=e.displayLength,t=e.page;return e.translations.filter((function(e,n){var l=a*(t-1);return n>=l&&n<l+a}))},l.handleSelectLanguage=function(e){l.setState({selectedLanguage:e.target.value})},l.handleChangeTranslationContent=function(e){l.setState({translationContent:e})},l.toggle=function(e){l.setState({showModal:!l.state.showModal}),e.id?l.setState({translationContent:e.body[0].terms,selectedLanguage:e.language.id,modalMethod:"update",translationId:e.id}):l.setState({translationContent:"",selectedLanguage:"",modalMethod:"store"})},l.storeTranslation=Object(r.a)(s.a.mark((function e(){var a,t,n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.state,t=a.selectedLanguage,n=a.translationContent,r=a.entityId,!(o=l.handleValidation()).status){e.next=22;break}return l.setState({loadingApi:!0}),e.t0=w.a,e.t1=O.a.STORE_TERMS_AND_CONDITIONS_TRANSLATIONS,e.t2={language_id:t,entity_id:r,terms:n},e.next=9,Object(x.b)();case 9:return e.t3=e.sent,e.next=12,e.t0.post.call(e.t0,e.t1,e.t2,e.t3);case 12:if(200!==e.sent.status){e.next=19;break}return l.setState({showModal:!1,loadingApi:!1}),l.getTermsAndConditions(),e.abrupt("return",y.a.success("Translation Stored Successfully","Success",3e3,null,null,"filled"));case 19:l.setState({loadingApi:!1});case 20:e.next=23;break;case 22:return e.abrupt("return",y.a.error(o.message,"Error",3e3,null,null,"filled"));case 23:case"end":return e.stop()}}),e)}))),l.updateTranslation=Object(r.a)(s.a.mark((function e(){var a,t,n,r,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.state,t=a.selectedLanguage,n=a.translationContent,r=a.entityId,o=a.translationId,!(i=l.handleValidation()).status){e.next=22;break}return l.setState({loadingApi:!0}),e.t0=w.a,e.t1=O.a.UPDATE_TERMS_AND_CONDITIONS_TRANSLATIONS,e.t2={language_id:t,entity_id:r,terms:n,id:o},e.next=9,Object(x.b)();case 9:return e.t3=e.sent,e.next=12,e.t0.post.call(e.t0,e.t1,e.t2,e.t3);case 12:if(200!==e.sent.status){e.next=19;break}return l.setState({showModal:!1,loadingApi:!1}),l.getTermsAndConditions(),e.abrupt("return",y.a.success("Translation Updated Successfully","Success",3e3,null,null,"filled"));case 19:l.setState({loadingApi:!1});case 20:e.next=23;break;case 22:return e.abrupt("return",y.a.error(i.message,"Error",3e3,null,null,"filled"));case 23:case"end":return e.stop()}}),e)}))),l.handleValidation=function(){var e=l.state,a=e.selectedLanguage,t=e.translationContent,n={message:"Please Select Language",status:!1},s={message:"Please write translation content",status:!1};return null!==a?""===a||"Please Select Language"===a?n:""===t||"<p><br></p>"===t?s:{status:!0}:n},l.deleteTranslation=function(e){Object(I.confirmAlert)({title:"Confirmation!",message:"Are you sure you want to Delete This Translation?",buttons:[{label:"Yes",onClick:function(){return l.confirmDeleteTranslation(e)}},{label:"No"}]})},l.confirmDeleteTranslation=function(){var e=Object(r.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w.a,e.t1=O.a.DELETE_TRANSLATION,e.t2={id:a},e.next=5,Object(x.b)();case 5:return e.t3=e.sent,e.next=8,e.t0.post.call(e.t0,e.t1,e.t2,e.t3);case 8:if(200!==e.sent.status){e.next=12;break}return l.getTermsAndConditions(),e.abrupt("return",y.a.success("Translation deleted Successfully","Success",3e3,null,null,"filled"));case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l.state=z,l}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getTermsAndConditions()}},{key:"render",value:function(){var e=this,a=this.state.content,t=this.getData();return d.a.createElement(m.Fragment,null,d.a.createElement(g.a,null,d.a.createElement(T.a,{xxs:"12"},d.a.createElement(N.a,{heading:"menu.terms",match:this.props.match}),d.a.createElement(T.b,{className:"mb-5"}))),d.a.createElement(g.a,null,d.a.createElement(p.a,{xxs:"10"},d.a.createElement("div",{className:"col-sm-12 col-lg-12 col-xs-12 "},d.a.createElement(E.a,null,d.a.createElement("div",{className:"position-absolute card-top-buttons"}),d.a.createElement(b.a,null,d.a.createElement(f.a,{className:"dashboard-quick-post",onSubmit:this.updatePrivacyPolicy},d.a.createElement(C.a,{row:!0},d.a.createElement(T.a,{sm:"12"},d.a.createElement(L.a,{theme:"snow",value:a,onChange:this.handleChangeContent,modules:_,formats:U}))),d.a.createElement(v.a,{className:"float-right btn-shadow btn-multiple-state ".concat(this.state.loading?"show-spinner":""),color:"primary"},d.a.createElement("span",{className:"spinner d-inline-block"},d.a.createElement("span",{className:"bounce1"}),d.a.createElement("span",{className:"bounce2"}),d.a.createElement("span",{className:"bounce3"})),d.a.createElement("span",{className:"label"},d.a.createElement(S.a,{id:"save"})))),d.a.createElement("div",{style:{marginTop:"100px"}},d.a.createElement(h.a,null,"Translations | ",d.a.createElement(v.a,{size:"xs",color:"primary",onClick:this.toggle},"Add")),d.a.createElement(j.a,{activePage:this.state.activePage,displayLength:this.state.displayLength,total:this.state.translations.length,onChangePage:this.handleChangePage,onChangeLength:this.handleChangeLength,data:t,loading:this.state.spinning},d.a.createElement(P,{width:100,fixed:!0,align:"center"},d.a.createElement(D,null,"No"),d.a.createElement(R,null,(function(e,a){return d.a.createElement("span",null,a+1)}))),d.a.createElement(P,{minWidth:200,flexGrow:1,align:"center"},d.a.createElement(D,null,"Name"),d.a.createElement(R,null,(function(e,a){return d.a.createElement("span",null,e.language.name)}))),d.a.createElement(P,{minWidth:200,flexGrow:1,align:"center"},d.a.createElement(D,null,"Actions"),d.a.createElement(R,null,(function(a,t){return d.a.createElement("div",null,d.a.createElement(v.a,{color:"secondary",size:"xs",className:"mb-2",onClick:function(){return e.toggle(a)}},d.a.createElement(S.a,{id:"edit"}))," "," ",d.a.createElement(v.a,{color:"danger",size:"xs",className:"mb-2",onClick:function(){return e.deleteTranslation(a.id)}},d.a.createElement(S.a,{id:"delete"})))})))),this.state.showModal&&d.a.createElement(A.a,{showModal:this.state.showModal,toggle:this.toggle,languages:this.state.languages,handleSelectLanguage:this.handleSelectLanguage,selectedLanguage:this.state.selectedLanguage,quillModules:_,handleChangeTranslationContent:this.handleChangeTranslationContent,translationContent:this.state.translationContent,quillFormats:U,storeTranslation:this.storeTranslation,updateTranslation:this.updateTranslation,loadingApi:this.state.loadingApi,modalMethod:this.state.modalMethod}))))))))}}]),t}(m.Component)},172:function(e,a,t){"use strict";var n=t(4),l=t.n(n),s=t(673),r=(t(139),s.a.Pagination);a.a=function(e){var a=e.activePage,t=e.displayLength,o=e.total,i=e.onChangePage,c=e.onChangeLength,u=e.data,m=e.loading,d=e.children;return l.a.createElement(n.Fragment,null,l.a.createElement(s.a,{autoHeight:!0,data:u,bordered:!0,cellBordered:!0,virtualized:!1,hover:!0,loading:m,shouldUpdateScroll:!0},d),i&&l.a.createElement(r,{lengthMenu:[{value:25,label:25},{value:35,label:35}],activePage:a,displayLength:t,total:o,onChangePage:i,onChangeLength:c}))}},176:function(e,a,t){"use strict";var n=t(4),l=t.n(n),s=t(545),r=t(537),o=t(538),i=t(363),c=t(246),u=t(539),m=t(425),d=t(114),g=t(232),p=t.n(g),h=(t(207),t(208),t(245)),E=t(39),b={toolbar:[["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},f=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"];a.a=function(e){var a=e.showModal,t=e.toggle,g=e.languages,C=e.handleSelectLanguage,v=e.selectedLanguage,S=e.handleChangeTranslationContent,T=e.translationContent,N=e.loadingApi,w=e.storeTranslation,O=e.updateTranslation,y=e.modalMethod,x=e.handleInputChange,k=e.handleGuidesInputChange,L=e.question,j=e.answer,A=e.title,M=e.paragraph,I=e.handleChangeParagraph,P=e.handleCategoryInputChange,D=e.categoryName,R=e.handleResultInputChange,_=e.heading,U=e.subTitle,z=e.total,q=e.addResultList,F=e.handleChangeChatMessage,V=e.message,B=e.onHomeVideoComplete,H=e.onCourseVideoComplete,G=e.entityId,J=(e.storeEmailTemplates,e.handleChangeEmailTranslationContent);return l.a.createElement(s.a,{isOpen:a,toggle:t,size:"lg"},l.a.createElement(r.a,{toggle:t},"store"===y?"Store Translation":"Update Translation"),l.a.createElement(o.a,null,l.a.createElement("div",{className:"react-modal-custom-overflow p-2"},l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Language"),l.a.createElement("select",{name:"select",className:"form-control",value:v,onChange:C,placeholder:"Please Select Language.."},l.a.createElement("option",{value:null},"Please Select Language"),g.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),S&&l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Content"),l.a.createElement(p.a,{theme:"snow",value:T,onChange:S,modules:b,formats:f}))),J&&l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Content"),l.a.createElement(p.a,{theme:"snow",value:T,onChange:J,modules:b,formats:f}))),x&&l.a.createElement("div",null,l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Question"),l.a.createElement(c.a,{type:"text",value:L,onChange:x,name:"question",placeholder:"Question *",required:!0}))),l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Answer"),l.a.createElement(c.a,{type:"textarea",rows:"5",value:j,onChange:x,name:"answer",placeholder:"Answer *",required:!0})))),k&&l.a.createElement(n.Fragment,null,l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Title"),l.a.createElement(c.a,{type:"text",value:A,onChange:k,name:"title",placeholder:"Title *",required:!0}))),l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Paragraph"),l.a.createElement(p.a,{theme:"snow",value:M,onChange:I,modules:b,formats:f})))),P&&l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Name"),l.a.createElement(c.a,{type:"text",value:D,onChange:P,name:"categoryName",placeholder:"Name *",required:!0}))),R&&l.a.createElement(n.Fragment,null,l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null," Heading "),l.a.createElement(c.a,{type:"text",value:_,onChange:R,name:"heading",placeholder:"Heading *",required:!0}))),l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null," Subtitle "),l.a.createElement(c.a,{type:"text",value:U,onChange:R,name:"subTitle",placeholder:"Subtitle *",required:!0}))),l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null," Total "),l.a.createElement(c.a,{type:"text",value:z,onChange:R,name:"total",placeholder:"Total *",required:!0}))),l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null," Rows "),q()))),F&&l.a.createElement(i.a,{row:!0},l.a.createElement(d.a,{sm:"12"},l.a.createElement("label",null,"Message"),l.a.createElement(c.a,{type:"textarea",rows:"5",value:V,onChange:F,name:"message",placeholder:"Message *",required:!0}))),B&&v&&l.a.createElement("div",{className:"upload_wrapper mt-5"},l.a.createElement("div",{className:"lead"},"Please Upload Home Video Translation"),l.a.createElement("hr",null)," "," ",l.a.createElement("span",{className:"text-muted mt-2 mb-2"},"Maximum File Size 200MB"),l.a.createElement("hr",null),l.a.createElement(h.a,{uploadUrl:"".concat(E.a.UPLOAD_HOME_VIDEO_TRANSLATION,"/language/").concat(v,"/video/").concat(G),isMulti:!1,chunkSize:2e8,onUploadComplete:B})),H&&v&&l.a.createElement("div",{className:"upload_wrapper mt-5"},l.a.createElement("div",{className:"lead"},"Please Upload Course Video Translation"),l.a.createElement("hr",null)," "," ",l.a.createElement("span",{className:"text-muted mt-2 mb-2"},"Maximum File Size 30MB"),l.a.createElement("hr",null),l.a.createElement(h.a,{uploadUrl:"".concat(E.a.UPLOAD_COURSE_VIDEO_TRANSLATION,"/language/").concat(v,"/video/").concat(G),isMulti:!1,chunkSize:2e8,onUploadComplete:H})))),!G&&l.a.createElement(u.a,null,"store"===y?l.a.createElement(m.a,{disabled:N,className:"float-right btn-shadow btn-multiple-state ".concat(N?"show-spinner":""),onClick:w,color:"primary"},l.a.createElement("span",{className:"spinner d-inline-block"},l.a.createElement("span",{className:"bounce1"}),l.a.createElement("span",{className:"bounce2"}),l.a.createElement("span",{className:"bounce3"})),l.a.createElement("span",{className:"label"},"Store")):l.a.createElement(m.a,{disabled:N,className:"float-right btn-shadow btn-multiple-state ".concat(N?"show-spinner":""),onClick:O,color:"primary"},l.a.createElement("span",{className:"spinner d-inline-block"},l.a.createElement("span",{className:"bounce1"}),l.a.createElement("span",{className:"bounce2"}),l.a.createElement("span",{className:"bounce3"})),l.a.createElement("span",{className:"label"},"Update"))))}},245:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(16),l=t(17),s=t(42),r=t(19),o=t(18),i=t(4),c=t.n(i),u=t(1337),m=t(265),d=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).onChange=function(e){l.uploadObj.asyncSettings.chunkSize=parseInt(e.itemData.value,10)},l.onRemoveFile=function(e){e.postRawFile=!1},l.onPausing=function(e){l.isInteraction=null!==e.event&&!navigator.onLine},l.onResuming=function(e){l.isInteraction=null!==e.event&&!navigator.onLine},l.onBeforeFailure=function(e){var a=Object(s.a)(l);e.cancel=!l.isInteraction;var t=setInterval((function(){navigator.onLine&&!Object(m.z)(a.uploadObj.filesData[0])&&4===a.uploadObj.filesData[0].statusCode?(a.uploadObj.resume(a.uploadObj.filesData),n()):a.isInteraction||Object(m.z)(a.uploadObj.filesData[0])||3!==a.uploadObj.filesData[0].statusCode||a.uploadObj.pause(a.uploadObj.filesData)}),500),n=function(){clearInterval(t)}},l.value=0,l.ddlDatas=[{value:5e5,size:"500 KB"},{value:1e6,size:"1 MB"},{value:2e6,size:"2 MB"}],l.fields={text:"size",value:"value"},l.isInteraction=!1,l.asyncSettings={saveUrl:e.uploadUrl,chunkSize:e.chunkSize?e.chunkSize:2e7},l.autoUpload=!1,l}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u.a,{minFileSize:1e4,maxFileSize:2e8,id:"file",type:"file",multiple:this.props.isMulti,ref:function(a){e.uploadObj=a},asyncSettings:this.asyncSettings,actionComplete:this.props.onUploadComplete,autoUpload:this.autoUpload,allowedExtensions:"video/*",removing:this.onRemoveFile,pausing:this.onPausing,resuming:this.onResuming,chunkFailure:this.onBeforeFailure})}}]),t}(i.Component)},247:function(e,a,t){"use strict";var n=t(10),l=t(12),s=t(32),r=t(23),o=t(4),i=t.n(o),c=t(28),u=t.n(c),m=t(29),d=t.n(m),g=t(110),p={children:u.a.node,inline:u.a.bool,tag:g.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,c=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(g.mapToCssModules)(d()(a,!!s&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},c,{ref:o,className:u}))},a}(o.Component);h.propTypes=p,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=107.562fea38.chunk.js.map