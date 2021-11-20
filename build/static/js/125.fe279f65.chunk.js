(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[125],{1003:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var a=n(5),r=n.n(a),l=n(9),c=n(16),o=n(17),i=n(19),u=n(18),s=n(4),d=n.n(s),m=n(138),f=n(425),p=n(560),g=n(148),h=n(160),b=n(178),E=n(112),v=n(114),y=n(115),C=n(41),k=n(39),w=n(40),O=n(1),N=n(153),x=n(113),S=n(673),L=(n(139),S.a.Column),_=S.a.HeaderCell,j=S.a.Cell,A=S.a.Pagination,U=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).getAllGuides=Object(l.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({spinning:!0}),e._isMounted){t.next=11;break}return t.t0=C.a,t.t1=k.a.ALL_GUIDES,t.next=6,Object(O.b)();case 6:return t.t2=t.sent,t.next=9,t.t0.get.call(t.t0,t.t1,t.t2);case 9:200===(n=t.sent).status&&e.setState({guides:n.data.guides.reverse(),spinning:!1});case 11:case"end":return t.stop()}}),t)}))),e.changeStatus=function(t){Object(N.confirmAlert)({title:"Confirmation!",message:"Are you sure you want to Delete?",buttons:[{label:"Yes",onClick:function(){return e.confirmChangeStatus(t)}},{label:"No"}]})},e.confirmChangeStatus=function(){var t=Object(l.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({spinning:!0}),t.t0=C.a,t.t1=k.a.DELETE_GUIDES,t.t2={id:n.id},t.next=6,Object(O.b)();case 6:return t.t3=t.sent,t.next=9,t.t0.post.call(t.t0,t.t1,t.t2,t.t3);case 9:if(200!==t.sent.status){t.next=14;break}return e.setState({spinning:!1}),e.getAllGuides(),t.abrupt("return",w.a.success("Guide deleted Successfully","Success",3e3,null,null,"filled"));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChangePage=function(t){e.setState({page:t})},e.handleChangeLength=function(t){e.setState({page:1,displayLength:t})},e.getData=function(){var t=e.state,n=t.displayLength,a=t.page;return e.state.guides.filter((function(e,t){var r=n*(a-1);return t>=r&&t<r+n}))},e.state={guides:[],spinning:!1,displayLength:10,page:1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!1,this.getAllGuides()}},{key:"componentWillUnmount",value:function(){this._isMounted=!0}},{key:"render",value:function(){var e=this,t=this.getData();return d.a.createElement(s.Fragment,null,d.a.createElement(m.a,null,d.a.createElement(v.a,{xxs:"12"},d.a.createElement("div",{className:"text-zero top-right-button-container"},d.a.createElement(x.b,{to:"/app/guides/create"},d.a.createElement(f.a,{size:"lg",color:"secondary"},d.a.createElement(E.a,{id:"menu.create"})))),d.a.createElement(y.a,{heading:"guides.view",match:this.props.match}),d.a.createElement(v.b,{className:"mb-5"}))),d.a.createElement(m.a,null,d.a.createElement(p.a,null,d.a.createElement(g.a,{className:"h-100"},d.a.createElement(h.a,null,d.a.createElement(b.a,null,d.a.createElement(E.a,{id:"guides.view-guide"})),d.a.createElement(S.a,{autoHeight:!0,data:t,bordered:!0,cellBordered:!0,virtualized:!1,hover:!0,loading:this.state.spinning},d.a.createElement(L,{width:50,fixed:!0,align:"center"},d.a.createElement(_,null,"No"),d.a.createElement(j,null,(function(e,t){return d.a.createElement("span",null,t+1)}))),d.a.createElement(L,{minWidth:200,flexGrow:1,align:"center"},d.a.createElement(_,null,"Title"),d.a.createElement(j,null,(function(e,t){return d.a.createElement("span",null,e.title)}))),d.a.createElement(L,{minWidth:200,flexGrow:1,align:"center"},d.a.createElement(_,null,"Type"),d.a.createElement(j,null,(function(e,t){return d.a.createElement("span",null,e.type)}))),d.a.createElement(L,{minWidth:200,flexGrow:1,align:"center"},d.a.createElement(_,null,"Actions"),d.a.createElement(j,null,(function(t,n){return d.a.createElement("div",null,d.a.createElement(f.a,{color:"secondary",size:"xs",className:"mb-2"},d.a.createElement(x.b,{to:"/app/guides/edit/".concat(t.id),style:{color:"white"}},d.a.createElement(E.a,{id:"edit"})))," "," ",d.a.createElement(f.a,{color:"danger",size:"xs",className:"mb-2",onClick:function(){return e.changeStatus(t)}},d.a.createElement(E.a,{id:"delete"}))," "," ",d.a.createElement(f.a,{color:"info",size:"xs",className:"mb-2"},d.a.createElement(x.b,{to:"/app/guides/translations/".concat(t.id),style:{color:"white"}},"Translation")))})))),d.a.createElement(A,{lengthMenu:[{value:10,label:10},{value:20,label:20}],activePage:this.state.page,displayLength:this.state.displayLength,total:this.state.guides.length,onChangePage:this.handleChangePage,onChangeLength:this.handleChangeLength}))))))}}]),n}(s.Component)},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var a=document.createElementNS(e,"svg");a.setAttribute("id","react-confirm-alert-firm-svg"),a.setAttribute("class","react-confirm-alert-svg"),a.appendChild(n),document.body.appendChild(a)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,u.render)(o.default.createElement(f,e),t)}(e)};var c=n(4),o=s(c),i=s(n(28)),u=n(24);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=(r=a=function(e){function t(){var e,n,a;d(this,t);for(var r=arguments.length,l=Array(r),c=0;c<r;c++)l[c]=arguments[c];return n=a=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.handleClickButton=function(e){e.onClick&&e.onClick(),a.close()},a.handleClickOverlay=function(e){var t=a.props,n=t.closeOnClickOutside,r=t.onClickOutside,l=e.target===a.overlay;n&&l&&(r(),a.close())},a.close=function(){var e=a.props.afterClose;h(),g(),p(e)},a.keyboardClose=function(e){var t=a.props,n=t.closeOnEscape,r=t.onKeypressEscape,l=27===e.keyCode;n&&l&&(r(e),a.close())},a.componentDidMount=function(){document.addEventListener("keydown",a.keyboardClose,!1)},a.componentWillUnmount=function(){document.removeEventListener("keydown",a.keyboardClose,!1),a.props.willUnmount()},a.renderCustomUI=function(){var e=a.props,t=e.title,n=e.message,r=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:r,onClose:a.close})},m(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.message,r=t.buttons,l=t.childrenElement,c=t.customUI;return o.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},o.default.createElement("div",{className:"react-confirm-alert"},c?this.renderCustomUI():o.default.createElement("div",{className:"react-confirm-alert-body"},n&&o.default.createElement("h1",null,n),a,l(),o.default.createElement("div",{className:"react-confirm-alert-button-group"},r.map((function(t,n){return o.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(c.Component),a.propTypes={title:i.default.string,message:i.default.string,buttons:i.default.array.isRequired,childrenElement:i.default.func,customUI:i.default.func,closeOnClickOutside:i.default.bool,closeOnEscape:i.default.bool,willUnmount:i.default.func,afterClose:i.default.func,onClickOutside:i.default.func,onKeypressEscape:i.default.func},a.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},r);function p(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function g(){var e=document.getElementById("react-confirm-alert");e&&((0,u.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function h(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=f}}]);
//# sourceMappingURL=125.fe279f65.chunk.js.map