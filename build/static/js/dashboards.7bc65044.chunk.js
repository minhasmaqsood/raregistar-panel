(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[45],{115:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(143),c=a(144),i=a(113),s=a(112),u=function(e){return r.a.createElement(s.a,{id:"menu.".concat(e)})},o=function(e,t,a){return 0===a?"":e.split(t)[0]+t},m=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return r.a.createElement(c.a,{key:n,active:a.length===n+1},a.length!==n+1?r.a.createElement(i.c,{to:"/"+o(t,e,n)},u(e)):u(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return r.a.createElement(n.Fragment,null,t&&r.a.createElement("h1",null,r.a.createElement(s.a,{id:t})),r.a.createElement(m,{match:a}))}},1316:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(747),c=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,997))})),i=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,998))})),s=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,999))})),u=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1e3))}));t.default=function(e){var t=e.match;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/view")}),r.a.createElement(l.b,{path:"".concat(t.url,"/view"),render:function(e){return r.a.createElement(s,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/create"),render:function(e){return r.a.createElement(c,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/edit/:slug"),render:function(e){return r.a.createElement(i,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/translations/:id"),render:function(e){return r.a.createElement(u,e)}}),r.a.createElement(l.a,{to:"/error"})))}},1317:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(747),c=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(103)]).then(a.bind(null,1001))})),i=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(104)]).then(a.bind(null,1002))})),s=r.a.lazy((function(){return a.e(125).then(a.bind(null,1003))})),u=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(110)]).then(a.bind(null,1004))}));t.default=function(e){var t=e.match;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/view")}),r.a.createElement(l.b,{path:"".concat(t.url,"/view"),render:function(e){return r.a.createElement(s,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/create"),render:function(e){return r.a.createElement(c,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/edit/:slug"),render:function(e){return r.a.createElement(i,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/translations/:id"),render:function(e){return r.a.createElement(u,e)}}),r.a.createElement(l.a,{to:"/error"})))}},1318:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(747),c=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(107)]).then(a.bind(null,1005))})),i=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(105)]).then(a.bind(null,1006))})),s=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(106)]).then(a.bind(null,1007))})),u=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(124)]).then(a.bind(null,1008))})),o=r.a.lazy((function(){return a.e(123).then(a.bind(null,1009))})),m=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(112)]).then(a.bind(null,1010))}));t.default=function(e){var t=e.match;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/privacy-policy")}),r.a.createElement(l.b,{path:"".concat(t.url,"/privacy-policy"),render:function(e){return r.a.createElement(i,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/security"),render:function(e){return r.a.createElement(s,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/email-templates/translations/:id"),render:function(e){return r.a.createElement(m,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/update-countries"),render:function(e){return r.a.createElement(o,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/email-templates"),render:function(e){return r.a.createElement(u,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/terms-and-conditions"),render:function(e){return r.a.createElement(c,e)}}),r.a.createElement(l.a,{to:"/error"})))}},1319:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(747),c=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1011))})),i=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1012))})),s=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1013))})),u=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1014))}));t.default=function(e){var t=e.match;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/view")}),r.a.createElement(l.b,{path:"".concat(t.url,"/view"),render:function(e){return r.a.createElement(s,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/create"),render:function(e){return r.a.createElement(c,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/edit/:slug"),render:function(e){return r.a.createElement(i,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/translations/:id"),render:function(e){return r.a.createElement(u,e)}}),r.a.createElement(l.a,{to:"/error"})))}},1320:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(747),c=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1015))})),i=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1016))})),s=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1017))}));t.default=function(e){var t=e.match;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/view")}),r.a.createElement(l.b,{path:"".concat(t.url,"/view"),render:function(e){return r.a.createElement(s,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/create"),render:function(e){return r.a.createElement(c,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/edit/:slug"),render:function(e){return r.a.createElement(i,e)}}),r.a.createElement(l.a,{to:"/error"})))}},1321:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(747),c=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(43)]).then(a.bind(null,1298))}));t.default=function(e){var t=e.match;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/view")}),r.a.createElement(l.b,{path:"".concat(t.url,"/view"),render:function(e){return r.a.createElement(c,e)}}),r.a.createElement(l.a,{to:"/error"})))}},1322:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(747),c=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(44)]).then(a.bind(null,1018))})),i=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(44)]).then(a.bind(null,1077))})),s=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(44)]).then(a.bind(null,1078))}));t.default=function(e){var t=e.match;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/view")}),r.a.createElement(l.b,{path:"".concat(t.url,"/view"),render:function(e){return r.a.createElement(s,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/create"),render:function(e){return r.a.createElement(c,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/edit/:id"),render:function(e){return r.a.createElement(i,e)}}),r.a.createElement(l.a,{to:"/error"})))}},1323:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(747),c=r.a.lazy((function(){return a.e(108).then(a.bind(null,1079))})),i=r.a.lazy((function(){return a.e(109).then(a.bind(null,1080))})),s=r.a.lazy((function(){return a.e(126).then(a.bind(null,1081))})),u=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(111)]).then(a.bind(null,1082))}));t.default=function(e){var t=e.match;return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"loading"})},r.a.createElement(l.d,null,r.a.createElement(l.a,{exact:!0,from:"".concat(t.url,"/"),to:"".concat(t.url,"/view")}),r.a.createElement(l.b,{path:"".concat(t.url,"/view"),render:function(e){return r.a.createElement(s,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/create"),render:function(e){return r.a.createElement(c,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/edit/:id"),render:function(e){return r.a.createElement(i,e)}}),r.a.createElement(l.b,{path:"".concat(t.url,"/translations/:id"),render:function(e){return r.a.createElement(u,e)}}),r.a.createElement(l.a,{to:"/error"})))}},1341:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return K}));var n=a(5),r=a.n(n),l=a(9),c=a(16),i=a(17),s=a(19),u=a(18),o=a(4),m=a.n(o),g=a(138),d=a(560),h=a(148),E=a(160),f=a(178),p=a(425),b=a(545),v=a(537),x=a(538),y=a(363),S=a(539),C=a(112),w=a(114),N=a(115),P=a(41),R=a(39),k=a(40),O=a(1),F=a(673),W=(a(139),a(960),a(246)),z=function(e){var t=e.handleFilterChange;return m.a.createElement("div",{className:"container d-flex justify-content-end",style:{position:"relative",left:"15px"}},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12 mb-2"},m.a.createElement("div",{className:"input-group"},m.a.createElement(W.a,{name:"searchKeyword",id:"searchKeyword",placeholder:"Search here",onChange:function(e){return t(e)},onKeyPress:function(e){return t(e)}}),m.a.createElement("div",{className:"input-group-append"},m.a.createElement("button",{className:"btn btn-secondary",type:"button"},m.a.createElement("span",{className:"search-icon",onClick:function(e){return t(e)}},m.a.createElement("i",{className:"simple-icon-magnifier"}))))))))},D=a(42),L=a(765),j=a(753),G=a(755),A=a(757),I=a(766),T=a(767),J=a(364),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getSafePage=n.getSafePage.bind(Object(D.a)(n)),n.changePage=n.changePage.bind(Object(D.a)(n)),n.changePageSize=n.changePageSize.bind(Object(D.a)(n)),n.renderPageJump=n.renderPageJump.bind(Object(D.a)(n)),n.state={page:e.page,pageSize:n.props.defaultPageSize},n}return Object(i.a)(a,[{key:"getSafePage",value:function(e){return Number.isNaN(e)&&(e=this.props.page),Math.min(Math.max(e,0),this.props.pages-1)}},{key:"changePageSize",value:function(e){this.props.onPageSizeChange(e),this.setState({pageSize:e})}},{key:"changePage",value:function(e){e=this.getSafePage(e),this.setState({page:e}),this.props.page!==e&&this.props.onPageChange(e)}},{key:"renderPageJump",value:function(){for(var e=this,t=this.props.pages,a=[],n=function(t){a.push(m.a.createElement(L.a,{key:t,onClick:function(){return e.changePage(t)}},t+1))},r=0;r<t;r++)n(r);return a}},{key:"onChangePage",value:function(e){this.props.onChangePage(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.pages,n=t.pageSizeOptions,r=t.pageSize,l=t.showPageSizeOptions,c=t.showPageJump,i=t.handleChangeLength,s=this.props,u=s.totalPage,g=void 0===u?0:u,d=s.currentPage,h=void 0===d?1:d,E=s.numberLimit,f=void 0===E?5:E,p=s.lastIsActive,b=void 0===p||p,v=s.firstIsActive,x=void 0===v||v,y=1,S=f;f>g?(y=1,S=g):h<=parseInt(f/2,10)?(y=1,S=f):h+parseInt(f/2,10)<=g?(y=h-parseInt(f/2,10),S=h+parseInt(f/2,10)):(y=g-(f-1),S=g);for(var C=[],N=y=0===y?1:y;N<=S;N++)C.push(N);var P=h<=1?"disabled":"",R=h>=g?"disabled":"",k=h<=1?"disabled":"",O=h>=g?"disabled":"";return m.a.createElement(o.Fragment,null,m.a.createElement("div",{className:"text-center"},c&&m.a.createElement("div",{className:"float-left pt-2"},m.a.createElement("span",null,"Page "),m.a.createElement(j.a,{className:"d-inline-block"},m.a.createElement(G.a,{caret:!0,color:"outline-primary",size:"xs"},this.state.page+1),m.a.createElement(A.a,{direction:"left"},this.renderPageJump())),m.a.createElement("span",null," of "),a),g>0?m.a.createElement(w.a,{xxs:"12",className:"mt-3"},m.a.createElement(I.a,{className:"pagination justify-content-center"},x&&m.a.createElement(T.a,{className:"page-item ".concat(P," cursor-pointer")},m.a.createElement(J.a,{className:"page-link first",onClick:function(){return e.onChangePage(1)}},m.a.createElement("i",{className:"simple-icon-control-start"}))),m.a.createElement(T.a,{className:"page-item ".concat(k)},m.a.createElement(J.a,{className:"page-link prev",onClick:function(){return e.onChangePage(h-1)}},m.a.createElement("i",{className:"simple-icon-arrow-left"}))),C.map((function(t){return m.a.createElement(T.a,{key:t,className:"page-item ".concat(h===t?"active":"cursor-pointer")},m.a.createElement(J.a,{className:"page-link",onClick:function(){return e.onChangePage(t)}},t))})),m.a.createElement(T.a,{className:"page-item ".concat(O)},m.a.createElement(J.a,{className:"page-link next",onClick:function(){return e.onChangePage(h+1)}},m.a.createElement("i",{className:"simple-icon-arrow-right"}))),b&&m.a.createElement(T.a,{className:"page-item ".concat(R," cursor-pointer")},m.a.createElement(J.a,{className:"page-link last",onClick:function(){return e.onChangePage(g)}},m.a.createElement("i",{className:"simple-icon-control-end"}))))):m.a.createElement(w.a,{xxs:"12",className:"mt-2"}),l&&m.a.createElement("div",{className:"float-right pt-2"},m.a.createElement("span",{className:"text-muted text-small mr-1"},"Items "),m.a.createElement(j.a,{className:"d-inline-block"},m.a.createElement(G.a,{caret:!0,color:"outline-primary",size:"xs"},r),m.a.createElement(A.a,{right:!0},n.map((function(e,t){return m.a.createElement(L.a,{key:t,onClick:function(){return i(e)}},e)})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{page:e.page}}}]),a}(o.Component),X=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.activePage,a=e.displayLength,n=e.total,r=e.onChangePage,l=e.onChangeLength,c=e.data,i=e.loading,s=e.handleFilterChange;return m.a.createElement(o.Fragment,null,m.a.createElement(z,{handleFilterChange:s}),m.a.createElement(F.a,{autoHeight:!0,data:c,bordered:!0,cellBordered:!0,virtualized:!1,hover:!0,loading:i},this.props.children),m.a.createElement("div",{className:"mt-4 m-2"},m.a.createElement(M,{handleChangeLength:l,pageSizeOptions:[5,10,25,50,100],onChangePage:r,showPageSizeOptions:!0,pageSize:a,canPrevious:!0,currentPage:t,totalPage:Math.ceil(n/a),pages:Math.ceil(n/a),canNext:!0})))}}]),a}(o.Component),V=F.a.Column,U=F.a.HeaderCell,_=F.a.Cell,K=(F.a.Pagination,function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getAllRegistrations=Object(l.a)(r.a.mark((function t(){var a,n,l,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({spinning:!0}),e._isMounted){t.next=11;break}return t.t0=P.a,t.t1=R.a.VIP_REGISTRATIONS,t.next=6,Object(O.b)();case 6:return t.t2=t.sent,t.next=9,t.t0.get.call(t.t0,t.t1,t.t2);case 9:200===(a=t.sent).status&&(n=a.data.vipRegistrations.filter((function(e){return"vip"===e.user.status})).reverse(),l=a.data.vipRegistrations.filter((function(e){return"waiting"===e.user.status})).reverse(),c=a.data.vipRegistrations.filter((function(e){return"registered"===e.user.status})).reverse(),e.setState({vipRegistrations:n,waitingRegistrations:l,registeredRegistrations:c,allVipRegistrations:JSON.parse(JSON.stringify(n)),allWaitingRegistrations:JSON.parse(JSON.stringify(l)),allRegisteredRegistrations:JSON.parse(JSON.stringify(c)),spinning:!1}));case 11:case"end":return t.stop()}}),t)}))),e.handleChangePage=function(t){e.setState({page:t})},e.handleChangeWaitingPage=function(t){e.setState({waitingPage:t})},e.handleChangeRegisteredPage=function(t){e.setState({registeredPage:t})},e.handleChangeLength=function(t){e.setState({page:1,displayLength:t})},e.handleChangeWaitingLength=function(t){e.setState({waitingPage:1,displayWaitingLength:t})},e.handleChangeRegisteredLength=function(t){e.setState({registeredPage:1,displayRegisteredLength:t})},e.getWaitingData=function(){var t=e.state,a=t.displayWaitingLength,n=t.waitingPage;return e.state.allWaitingRegistrations.filter((function(e,t){var r=a*(n-1);return t>=r&&t<r+a}))},e.getRegisteredData=function(){var t=e.state,a=t.displayRegisteredLength,n=t.registeredPage;return e.state.allRegisteredRegistrations.filter((function(e,t){var r=a*(n-1);return t>=r&&t<r+a}))},e.getData=function(){var t=e.state,a=t.displayLength,n=t.page;return e.state.allVipRegistrations.filter((function(e,t){var r=a*(n-1);return t>=r&&t<r+a}))},e.handleVipFilterChange=function(t){e.setState({page:1});var a=e.state.vipRegistrations.filter((function(e,t){return t>=0&&t<1e3})).filter((function(e){var a=t.target.value.toLowerCase();return e.user.name.toLowerCase().indexOf(a)>=0||e.user.email.toLowerCase().indexOf(a)>=0}));e.setState({allVipRegistrations:a}),""===t.target.value&&e.setState({allVipRegistrations:e.state.vipRegistrations})},e.handleWaitingFilterChange=function(t){e.setState({page:1});var a=e.state.waitingRegistrations.filter((function(e,t){return t>=0&&t<1e3})).filter((function(e){var a=t.target.value.toLowerCase();return e.user.name.toLowerCase().indexOf(a)>=0||e.user.email.toLowerCase().indexOf(a)>=0}));e.setState({allWaitingRegistrations:a}),""===t.target.value&&e.setState({allWaitingRegistrations:e.state.waitingRegistrations})},e.handleRegisteredFilterChange=function(t){e.setState({page:1});var a=e.state.registeredRegistrations.filter((function(e,t){return t>=0&&t<1e3})).filter((function(e){var a=t.target.value.toLowerCase();return e.user.name.toLowerCase().indexOf(a)>=0||e.user.email.toLowerCase().indexOf(a)>=0}));e.setState({allRegisteredRegistrations:a}),""===t.target.value&&e.setState({allRegisteredRegistrations:e.state.registeredRegistrations})},e.toggle=function(t){e.setState({showStatusModal:!e.state.showStatusModal}),t.user&&e.setState({selectedUser:t.user,userId:t.id,selectedStatus:"waiting"===t.user.status?"vip":"vip"===t.user.status?"registered":"vip"})},e.handleSelectTypeChange=function(t){e.setState({selectedStatus:t.target.value})},e.changeStatus=Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({changingStatus:!0}),t.t0=P.a,t.t1=R.a.VIP_REGISTRATIONS_UPDATE,t.t2={id:e.state.userId,status:e.state.selectedStatus},t.next=6,Object(O.b)();case 6:return t.t3=t.sent,t.next=9,t.t0.post.call(t.t0,t.t1,t.t2,t.t3);case 9:if(200!==t.sent.status){t.next=16;break}return e.getAllRegistrations(),e.setState({changingStatus:!1,showStatusModal:!1}),t.abrupt("return",k.a.success("Status Changed Successfully","Success",3e3,null,null,"filled"));case 16:e.setState({changingStatus:!1});case 17:case"end":return t.stop()}}),t)}))),e.state={selectAll:!1,vipRegistrations:[],allVipRegistrations:[],waitingRegistrations:[],allWaitingRegistrations:[],registeredRegistrations:[],allRegisteredRegistrations:[],checked:[],spinning:!1,selectedUser:"",userId:null,selectedStatus:"",changingStatus:!1,showStatusModal:!1,displayLength:10,page:1,displayWaitingLength:10,waitingPage:1,displayRegisteredLength:10,registeredPage:1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!1,this.getAllRegistrations()}},{key:"componentWillUnmount",value:function(){this._isMounted=!0}},{key:"render",value:function(){var e=this,t=this.getData(),a=this.getWaitingData(),n=this.getRegisteredData();return m.a.createElement(o.Fragment,null,m.a.createElement(g.a,null,m.a.createElement(w.a,{xxs:"12"},m.a.createElement(N.a,{heading:"view",match:this.props.match}),m.a.createElement(w.b,{className:"mb-5"}))),m.a.createElement(g.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{className:"h-100"},m.a.createElement(E.a,null,m.a.createElement(f.a,null,m.a.createElement(C.a,{id:"vipRegistration"})),m.a.createElement(X,{data:t,loading:this.state.spinning,activePage:this.state.page,displayLength:this.state.displayLength,total:this.state.allVipRegistrations.length,onChangePage:this.handleChangePage,onChangeLength:this.handleChangeLength,handleFilterChange:this.handleVipFilterChange},m.a.createElement(V,{width:50,fixed:!0,align:"center"},m.a.createElement(U,null,"No"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,t+1)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null," DataTrades Name"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.name)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null,"DataTrades Email"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.email)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null,"DataTrades Country"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.country.name)}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Name"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.firstName," ").concat(e.ironFxDetail.lastName):"-")}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Email"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.email):"-")}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Country"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.country):"-")}))),m.a.createElement(V,{minWidth:80,flexGrow:1,align:"center"},m.a.createElement(U,null,"Status"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.status)}))),m.a.createElement(V,{minWidth:80,flexGrow:1,align:"center"},m.a.createElement(U,null,"Account No"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.vantageFXAccountNumber)}))),m.a.createElement(V,{minWidth:100,flexGrow:1,align:"center"},m.a.createElement(U,null,"Created At"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.createdAt)}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Actions"),m.a.createElement(_,null,(function(t,a){return m.a.createElement("div",null,m.a.createElement(p.a,{color:"info",size:"xs",className:"mb-2",onClick:function(){return e.toggle(t)}},"Change Status"))})))),m.a.createElement(f.a,null,m.a.createElement(C.a,{id:"waitingRegistration"})),m.a.createElement(X,{data:a,loading:this.state.spinning,activePage:this.state.waitingPage,displayLength:this.state.displayWaitingLength,total:this.state.allWaitingRegistrations.length,onChangePage:this.handleChangeWaitingPage,onChangeLength:this.handleChangeWaitingLength,handleFilterChange:this.handleWaitingFilterChange},m.a.createElement(V,{width:50,fixed:!0,align:"center"},m.a.createElement(U,null,"No"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,t+1)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null," DataTrades Name"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.name)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null,"DataTrades Email"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.email)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null,"DataTrades Country"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.country.name)}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Name"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.firstName," ").concat(e.ironFxDetail.lastName):"-")}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Email"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.email):"-")}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Country"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.country):"-")}))),m.a.createElement(V,{minWidth:80,flexGrow:1,align:"center"},m.a.createElement(U,null,"Status"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.status)}))),m.a.createElement(V,{minWidth:80,flexGrow:1,align:"center"},m.a.createElement(U,null,"Account No"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.vantageFXAccountNumber)}))),m.a.createElement(V,{minWidth:100,flexGrow:1,align:"center"},m.a.createElement(U,null,"Created At"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.createdAt)}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Actions"),m.a.createElement(_,null,(function(t,a){return m.a.createElement("div",null,m.a.createElement(p.a,{color:"info",size:"xs",className:"mb-2",onClick:function(){return e.toggle(t)}},"Change Status"))})))),m.a.createElement(f.a,null,"Registered Users"),m.a.createElement(X,{data:n,loading:this.state.spinning,activePage:this.state.registeredPage,displayLength:this.state.displayRegisteredLength,total:this.state.allRegisteredRegistrations.length,onChangePage:this.handleChangeRegisteredPage,onChangeLength:this.handleChangeRegisteredLength,handleFilterChange:this.handleRegisteredFilterChange},m.a.createElement(V,{width:50,fixed:!0,align:"center"},m.a.createElement(U,null,"No"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,t+1)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null," DataTrades Name"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.name)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null,"DataTrades Email"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.email)}))),m.a.createElement(V,{minWidth:200,flexGrow:1,align:"center"},m.a.createElement(U,null,"DataTrades Country"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.country.name)}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Name"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.firstName," ").concat(e.ironFxDetail.lastName):"-")}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Email"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.email):"-")}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Iron FX Country"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.ironFxDetail?"".concat(e.ironFxDetail.country):"-")}))),m.a.createElement(V,{minWidth:80,flexGrow:1,align:"center"},m.a.createElement(U,null,"Status"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.user.status)}))),m.a.createElement(V,{minWidth:80,flexGrow:1,align:"center"},m.a.createElement(U,null,"Account No"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.vantageFXAccountNumber)}))),m.a.createElement(V,{minWidth:100,flexGrow:1,align:"center"},m.a.createElement(U,null,"Created At"),m.a.createElement(_,null,(function(e,t){return m.a.createElement("span",null,e.createdAt)}))),m.a.createElement(V,{minWidth:150,flexGrow:1,align:"center"},m.a.createElement(U,null,"Actions"),m.a.createElement(_,null,(function(t,a){return m.a.createElement("div",null,m.a.createElement(p.a,{color:"info",size:"xs",className:"mb-2",onClick:function(){return e.toggle(t)}},"Change Status"))})))),""!==this.state.selectedUser&&m.a.createElement(b.a,{isOpen:this.state.showStatusModal,toggle:this.toggle},m.a.createElement(v.a,{toggle:this.toggle},"Change Status"),m.a.createElement(x.a,null,m.a.createElement(y.a,{row:!0},m.a.createElement(w.a,{sm:"12"},m.a.createElement("select",{name:"select",className:"form-control",value:this.state.selectedStatus,onChange:this.handleSelectTypeChange},m.a.createElement("option",{value:"vip"},"Accept"),m.a.createElement("option",{value:"registered"},"Deny"))))),m.a.createElement(S.a,null,m.a.createElement(p.a,{color:"secondary",onClick:this.toggle},"Close"),m.a.createElement(p.a,{disabled:this.state.changingStatus,className:"float-right btn-shadow btn-multiple-state ".concat(this.state.changingStatus?"show-spinner":""),onClick:this.changeStatus,color:"primary"},m.a.createElement("span",{className:"spinner d-inline-block"},m.a.createElement("span",{className:"bounce1"}),m.a.createElement("span",{className:"bounce2"}),m.a.createElement("span",{className:"bounce3"})),m.a.createElement("span",{className:"label"},"Change Status")))))))))}}]),a}(o.Component))},1343:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(17),l=a(19),c=a(18),i=a(4),s=a.n(i),u=a(128),o=a(138),m=a(114),g=a(115),d=a(5),h=a.n(d),E=a(3),f=a(9),p=a(370),b=(a(423),a(148)),v=a(160),x=a(39),y=a(41),S=a(1);function C(){var e=Object(i.useState)({loading:!0,users:[]}),t=Object(p.a)(e,2),a=(t[0],t[1]);Object(i.useEffect)((function(){return function(){!0}}),[]);var n=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((function(e){return Object(E.a)(Object(E.a)({},e),{},{loading:!0})})),e.t0=y.a,e.t1=x.a.ALL_USERS,e.next=5,Object(S.b)();case 5:return e.t2=e.sent,e.next=8,e.t0.get.call(e.t0,e.t1,e.t2);case 8:200===(t=e.sent).status&&a((function(e){return Object(E.a)(Object(E.a)({},e),{},{users:t.data.users.reverse(),loading:!1})}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(b.a,null,s.a.createElement("div",{className:"position-absolute card-top-buttons"},s.a.createElement("button",{className:"btn btn-header-light icon-button",onClick:n},s.a.createElement("i",{className:"simple-icon-refresh"}))),s.a.createElement(v.a,{className:"text-center"},s.a.createElement("h2",null,"Welcome to Raregistar Admin Dashbord")))}var w=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(m.a,{xxs:"12"},s.a.createElement(g.a,{heading:"menu.dashboard",match:this.props.match}),s.a.createElement(m.b,{className:"mb-5"}))),s.a.createElement(o.a,null,s.a.createElement(m.a,{lg:"12",xl:"6",className:"mb-4"},s.a.createElement(C,null))))}}]),a}(i.Component);t.default=Object(u.d)(w)},139:function(e,t,a){},960:function(e,t,a){}}]);
//# sourceMappingURL=dashboards.7bc65044.chunk.js.map