(this.webpackJsonpraregisters=this.webpackJsonpraregisters||[]).push([[42],{115:function(e,t,a){"use strict";var l=a(4),n=a.n(l),r=a(143),c=a(144),s=a(113),m=a(112),i=function(e){return n.a.createElement(m.a,{id:"menu.".concat(e)})},o=function(e,t,a){return 0===a?"":e.split(t)[0]+t},u=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),n.a.createElement(l.Fragment,null,n.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,l){return n.a.createElement(c.a,{key:l,active:a.length===l+1},a.length!==l+1?n.a.createElement(s.c,{to:"/"+o(t,e,l)},i(e)):i(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return n.a.createElement(l.Fragment,null,t&&n.a.createElement("h1",null,n.a.createElement(m.a,{id:t})),n.a.createElement(u,{match:a}))}},1297:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var l=a(16),n=a(17),r=a(19),c=a(18),s=a(4),m=a.n(s),i=a(138),o=a(148),u=a(160),d=a(178),E=a(614),h=a(112),g=a(114),p=a(115),b=a(423),k=a.n(b),f=a(1288),C=a(29),y=a.n(C),N=a(42),P=a(619),w=a(620),O=a(765),S=a(753),D=a(755),v=a(757),x=a(618),j=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getSafePage=n.getSafePage.bind(Object(N.a)(n)),n.changePage=n.changePage.bind(Object(N.a)(n)),n.applyPage=n.applyPage.bind(Object(N.a)(n)),n.pageClick=n.pageClick.bind(Object(N.a)(n)),n.renderPages=n.renderPages.bind(Object(N.a)(n)),n.changePageSize=n.changePageSize.bind(Object(N.a)(n)),n.renderPageJump=n.renderPageJump.bind(Object(N.a)(n)),n.state={page:e.page,pageSize:n.props.defaultPageSize},n}return Object(n.a)(a,[{key:"getSafePage",value:function(e){return Number.isNaN(e)&&(e=this.props.page),Math.min(Math.max(e,0),this.props.pages-1)}},{key:"changePageSize",value:function(e){this.props.onPageSizeChange(e),this.setState({pageSize:e})}},{key:"changePage",value:function(e){e=this.getSafePage(e),this.setState({page:e}),this.props.page!==e&&this.props.onPageChange(e)}},{key:"applyPage",value:function(e){e&&e.preventDefault();var t=this.state.page;this.changePage(""===t?this.props.page:t)}},{key:"pageClick",value:function(e){this.changePage(e)}},{key:"renderPages",value:function(){for(var e=this,t=this.props.pages,a=[],l=function(t){var l=e.state.page===t;a.push(m.a.createElement(P.a,{key:t,active:l},m.a.createElement(w.a,{onClick:function(){return e.pageClick(t)}},t+1)))},n=0;n<t;n++)l(n);return a}},{key:"renderPageJump",value:function(){for(var e=this,t=this.props.pages,a=[],l=function(t){a.push(m.a.createElement(O.a,{key:t,onClick:function(){return e.changePage(t)}},t+1))},n=0;n<t;n++)l(n);return a}},{key:"render",value:function(){var e=this,t=this.props,a=t.page,l=t.pages,n=t.canPrevious,r=t.canNext,c=t.pageSizeOptions,i=t.showPageSizeOptions,o=t.showPageJump;return m.a.createElement(s.Fragment,null,m.a.createElement("div",{className:"text-center"},o&&m.a.createElement("div",{className:"float-left pt-2"},m.a.createElement("span",null,"Page "),m.a.createElement(S.a,{className:"d-inline-block"},m.a.createElement(D.a,{caret:!0,color:"outline-primary",size:"xs"},this.state.page+1),m.a.createElement(v.a,{direction:"left"},this.renderPageJump())),m.a.createElement("span",null," of "),l),m.a.createElement(x.a,{className:"d-inline-block",size:"sm",listClassName:"justify-content-center","aria-label":"Page navigation example"},m.a.createElement(P.a,{className:"".concat(!n&&"disabled")},m.a.createElement(w.a,{className:"prev",onClick:function(){n&&e.changePage(a-1)},disabled:!n},m.a.createElement("i",{className:"simple-icon-arrow-left"}))),this.renderPages(),m.a.createElement(P.a,{className:"".concat(!r&&"disabled")},m.a.createElement(w.a,{className:"next",onClick:function(){r&&e.changePage(a+1)},disabled:!r},m.a.createElement("i",{className:"simple-icon-arrow-right"})))),i&&m.a.createElement("div",{className:"float-right pt-2"},m.a.createElement("span",{className:"text-muted text-small mr-1"},"Items "),m.a.createElement(S.a,{className:"d-inline-block"},m.a.createElement(D.a,{caret:!0,color:"outline-primary",size:"xs"},this.state.pageSize),m.a.createElement(v.a,{right:!0},c.map((function(t,a){return m.a.createElement(O.a,{key:a,onClick:function(){return e.changePageSize(t)}},t)})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{page:e.page}}}]),a}(s.Component),T=a(714),z=function(e){return m.a.createElement("div",Object.assign({},e,{className:y()("rt-tbody",e.className||[])}),m.a.createElement(k.a,{options:{suppressScrollX:!0}},e.children))},L=[{Header:"Name",accessor:"title",Cell:function(e){return m.a.createElement("p",{className:"list-item-heading"},e.value)}},{Header:"Sales",accessor:"sales",Cell:function(e){return m.a.createElement("p",{className:"text-muted"},e.value)}},{Header:"Stock",accessor:"stock",Cell:function(e){return m.a.createElement("p",{className:"text-muted"},e.value)}},{Header:"Category",accessor:"category",Cell:function(e){return m.a.createElement("p",{className:"text-muted"},e.value)}}],H=function(e){return m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.react-pagination"})),m.a.createElement(f.a,{data:T.a,columns:L,defaultPageSize:5,showPageJump:!1,showPageSizeOptions:!1,PaginationComponent:j,className:"react-table-fixed-height"})))},J=function(e){return m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.react-scrollable"})),m.a.createElement(f.a,{data:T.a,TbodyComponent:z,columns:L,defaultPageSize:20,showPageJump:!1,showPageSizeOptions:!1,showPagination:!1,className:"react-table-fixed-height"})))},F=function(e){return m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.react-advanced"})),m.a.createElement(f.a,{data:T.a,columns:L,defaultPageSize:5,filterable:!0,showPageJump:!0,PaginationComponent:j,showPageSizeOptions:!0})))},M=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return m.a.createElement(s.Fragment,null,m.a.createElement(i.a,null,m.a.createElement(g.a,{xxs:"12"},m.a.createElement(p.a,{heading:"menu.tables",match:this.props.match}),m.a.createElement(g.b,{className:"mb-5"}))),m.a.createElement(i.a,{className:"mb-5"},m.a.createElement(g.a,{xxs:"12"},m.a.createElement("h3",{className:"mb-4"},m.a.createElement(h.a,{id:"table.bootstrap-tables"}))),m.a.createElement(g.a,{xxs:"6"},m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.bootstrap-basic"})),m.a.createElement(E.a,null,m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"Username"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Mark"),m.a.createElement("td",null,"Otto"),m.a.createElement("td",null,"@mdo")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Jacob"),m.a.createElement("td",null,"Thornton"),m.a.createElement("td",null,"@fat")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Larry"),m.a.createElement("td",null,"the Bird"),m.a.createElement("td",null,"@twitter"))))))),m.a.createElement(g.a,{xxs:"6"},m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.bootstrap-striped"})),m.a.createElement(E.a,{striped:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"Username"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Mark"),m.a.createElement("td",null,"Otto"),m.a.createElement("td",null,"@mdo")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Jacob"),m.a.createElement("td",null,"Thornton"),m.a.createElement("td",null,"@fat")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Larry"),m.a.createElement("td",null,"the Bird"),m.a.createElement("td",null,"@twitter"))))))),m.a.createElement(g.a,{xxs:"6"},m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.bootstrap-bordered"})),m.a.createElement(E.a,{bordered:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"Username"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Mark"),m.a.createElement("td",null,"Otto"),m.a.createElement("td",null,"@mdo")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Jacob"),m.a.createElement("td",null,"Thornton"),m.a.createElement("td",null,"@fat")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Larry"),m.a.createElement("td",null,"the Bird"),m.a.createElement("td",null,"@twitter"))))))),m.a.createElement(g.a,{xxs:"6"},m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.bootstrap-borderless"})),m.a.createElement(E.a,{borderless:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"Username"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Mark"),m.a.createElement("td",null,"Otto"),m.a.createElement("td",null,"@mdo")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Jacob"),m.a.createElement("td",null,"Thornton"),m.a.createElement("td",null,"@fat")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Larry"),m.a.createElement("td",null,"the Bird"),m.a.createElement("td",null,"@twitter"))))))),m.a.createElement(g.a,{xxs:"6"},m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.bootstrap-hoverable"})),m.a.createElement(E.a,{hover:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"Username"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Mark"),m.a.createElement("td",null,"Otto"),m.a.createElement("td",null,"@mdo")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Jacob"),m.a.createElement("td",null,"Thornton"),m.a.createElement("td",null,"@fat")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Larry"),m.a.createElement("td",null,"the Bird"),m.a.createElement("td",null,"@twitter"))))))),m.a.createElement(g.a,{xxs:"6"},m.a.createElement(o.a,{className:"mb-4"},m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(h.a,{id:"table.bootstrap-responsive"})),m.a.createElement(E.a,{responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"Table heading"),m.a.createElement("th",null,"Table heading"),m.a.createElement("th",null,"Table heading"),m.a.createElement("th",null,"Table heading"),m.a.createElement("th",null,"Table heading"),m.a.createElement("th",null,"Table heading"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"1"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"2"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell")),m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},"3"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell"),m.a.createElement("td",null,"Table cell")))))))),m.a.createElement(i.a,null,m.a.createElement(g.a,{xxs:"12"},m.a.createElement("h3",{className:"mb-4"},m.a.createElement(h.a,{id:"table.react-tables"}))),m.a.createElement(g.a,{xxs:"6"},m.a.createElement(H,null)),m.a.createElement(g.a,{xxs:"6"},m.a.createElement(J,null)),m.a.createElement(g.a,{xxs:"12"},m.a.createElement(F,null))))}}]),a}(s.Component)},714:function(e,t,a){"use strict";t.a=[{id:1,title:"Marble Cake",img:"/assets/img/marble-cake-thumb.jpg",category:"Cakes",createDate:"02.04.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake with flowers Macarons and blueberries",sales:1647,stock:62},{id:2,title:"Fat Rascal",category:"Cupcakes",img:"/assets/img/fat-rascal-thumb.jpg",createDate:"01.04.2018",status:"PROCESSED",statusColor:"secondary",description:"Cheesecake with chocolate cookies and Cream biscuits",sales:1240,stock:48},{id:3,title:"Chocolate Cake",img:"/assets/img/chocolate-cake-thumb.jpg",category:"Cakes",createDate:"25.03.2018",status:"PROCESSED",statusColor:"secondary",description:"Homemade cheesecake with fresh berries and mint",sales:1080,stock:57},{id:4,title:"Goose Breast",img:"/assets/img/goose-breast-thumb.jpg",category:"Cakes",createDate:"21.03.2018",status:"PROCESSED",statusColor:"secondary",description:"Chocolate cake with berries",sales:1014,stock:41},{id:5,title:"Petit G\xe2teau",category:"Cupcakes",img:"/assets/img/petit-gateau-thumb.jpg",createDate:"02.06.2018",status:"ON HOLD",statusColor:"primary",description:"Chocolate cake with mascarpone",sales:985,stock:23},{id:6,title:"Salzburger Nockerl",img:"/assets/img/salzburger-nockerl-thumb.jpg",category:"Desserts",createDate:"14.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Wedding cake decorated with donuts and wild berries",sales:962,stock:34},{id:7,title:"Napoleonshat",img:"/assets/img/napoleonshat-thumb.jpg",category:"Desserts",createDate:"05.02.2018",status:"PROCESSED",statusColor:"secondary",description:"Cheesecake with fresh berries and mint for dessert",sales:921,stock:31},{id:8,title:"Cheesecake",img:"/assets/img/cheesecake-thumb.jpg",category:"Cakes",createDate:"18.08.2018",status:"ON HOLD",statusColor:"primary",description:"Delicious vegan chocolate cake",sales:887,stock:21},{id:9,title:"Financier",img:"/assets/img/financier-thumb.jpg",category:"Cakes",createDate:"15.03.2018",status:"ON HOLD",statusColor:"primary",description:"White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate",sales:865,stock:53},{id:10,title:"Genoise",img:"/assets/img/genoise-thumb.jpg",category:"Cupcakes",createDate:"11.06.2018",status:"PROCESSED",statusColor:"secondary",description:"Christmas fruit cake, pudding on top",sales:824,stock:55},{id:11,title:"Gingerbread",img:"/assets/img/gingerbread-thumb.jpg",category:"Cakes",createDate:"10.04.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake decorated with donuts and wild berries",sales:714,stock:12},{id:12,title:"Magdalena",img:"/assets/img/magdalena-thumb.jpg",category:"Cakes",createDate:"22.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Christmas fruit cake, pudding on top",sales:702,stock:14},{id:13,title:"Parkin",img:"/assets/img/parkin-thumb.jpg",category:"Cakes",createDate:"22.08.2018",status:"ON HOLD",statusColor:"primary",description:"White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate",sales:689,stock:78},{id:14,title:"Streuselkuchen",img:"/assets/img/streuselkuchen-thumb.jpg",category:"Cakes",createDate:"22.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Delicious vegan chocolate cake",sales:645,stock:55},{id:15,title:"Tea loaf",img:"/assets/img/tea-loaf-thumb.jpg",category:"Cakes",createDate:"10.09.2018",status:"ON HOLD",statusColor:"primary",description:"Cheesecake with fresh berries and mint for dessert",sales:632,stock:20},{id:16,title:"Merveilleux",img:"/assets/img/merveilleux-thumb.jpg",category:"Cakes",createDate:"18.02.2018",status:"ON HOLD",statusColor:"primary",description:"Chocolate cake with mascarpone",sales:621,stock:6},{id:17,title:"Fruitcake",img:"/assets/img/fruitcake-thumb.jpg",category:"Cakes",createDate:"12.01.2019",status:"PROCESSED",statusColor:"secondary",description:"Chocolate cake with berries",sales:595,stock:17},{id:18,title:"Bebinca",img:"/assets/img/bebinca-thumb.jpg",category:"Cakes",createDate:"04.02.2019",status:"PROCESSED",statusColor:"secondary",description:"Homemade cheesecake with fresh berries and mint",sales:574,stock:16},{id:19,title:"Cremeschnitte",img:"/assets/img/cremeschnitte-thumb.jpg",category:"Desserts",createDate:"04.03.2018",status:"ON HOLD",statusColor:"primary",description:"Cheesecake with chocolate cookies and Cream biscuits",sales:562,stock:9},{id:20,title:"Souffl\xe9",img:"/assets/img/souffle-thumb.jpg",category:"Cupcakes",createDate:"16.01.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake with flowers Macarons and blueberries",sales:524,stock:14}]}}]);
//# sourceMappingURL=components-tables.65626437.chunk.js.map