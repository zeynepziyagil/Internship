(this["webpackJsonpinternship-final-project"]=this["webpackJsonpinternship-final-project"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(11),c=a.n(i),o=(a(100),a.p,a(101),a(44)),s=a(163),l=a(175),d=a(174),p=a(17),u="FDATA",g=" FILTERED",b=" FILTEREN",j="BASKET_TO",h="HANDLE_SORT",m="FILTER_TAGS_BY_NAME",f="T_SHOWN_MUGS",x="T_SHOWN_SHIRTS",O="ADD_BASKET",y="REMOVE_BASKET",A="PAGE_NAV",v="FIL_TAG",T=a(170),F=a(171),C=a(2),k=Object(s.a)((function(e){return{Aox:{backgroundColor:"#FFFF",padding:"15px"},Box:{backgroundColor:"#FFFF",borderRadius:"3px",padding:"25px",height:"200px",overflow:"scroll"}}})),N=Object(p.b)((function(e){return{brands:e.brands,filters:e.filters,brandSearchTerm:e.brandSearchTerm,editedBrands:e.editedBrands}}))((function(e){e.brands;var t=e.filters,a=e.editedBrands,n=e.dispatch,i=k(),c=function(e){var t=e.target.name,a=e.target.checked;console.log(e.target.name),console.log(e.target.checked),n({type:g,payload:{eventValue:t,eventType:a}})},s=Object(r.useState)(),p=Object(o.a)(s,2);p[0],p[1];return Object(C.jsxs)("div",{className:i.Aox,children:[Object(C.jsx)(T.a,{label:"Search",variant:"outlined",className:i.search,onChange:function(e){var t=e.target.value.toLowerCase();console.log("search value",e.target.value),n({type:b,payload:{eventValue:t}})}}),Object(C.jsxs)(F.a,{className:i.Box,children:[Object(C.jsx)(l.a,{control:Object(C.jsx)(d.a,{checked:!t.length,disabled:!!t.length,name:"All",color:"primary"}),label:"All"}),a.length?a.map((function(e){return Object(C.jsxs)("div",{children:[" ",Object(C.jsx)(l.a,{control:Object(C.jsx)(d.a,{onChange:c,name:e.name,color:"primary"}),label:e.name})]},e.id)})):Object(C.jsx)("p",{children:"No Matching Brands"})]})]})})),E=Object(s.a)((function(e){return{Aox:{backgroundColor:"#FFFF",padding:"15px"},sBox:{backgroundColor:"#FFFF",borderRadius:"3px",padding:"25px",height:"200px",overflow:"scroll"}}})),S=Object(p.b)((function(e){return{tags:e.tags,selectedTags:e.selectedTags,tagSearchTerm:e.tagSearchTerm,editedTags:e.editedTags}}))((function(e){e.tags,e.filters;var t=e.editedTags,a=e.selectedTags,r=e.dispatch,n=E(),i=function(e){var t=e.target.name,a=e.target.checked;console.log(e.target.name),console.log(e.target.checked),r({type:v,payload:{eventValue:t,eventType:a}})};return Object(C.jsxs)("div",{className:n.Aox,children:[Object(C.jsx)(T.a,{id:"tagSearchBar",label:"Search Tag",variant:"outlined",onChange:function(e){var t=e.target.value.toLowerCase();console.log("search value",e.target.value),r({type:m,payload:{eventValue:t}})}}),Object(C.jsxs)(F.a,{className:n.sBox,children:[Object(C.jsx)(l.a,{control:Object(C.jsx)(d.a,{checked:!a.length,disabled:!!a.length,name:"All",color:"primary"}),label:"All"})," ",t.length?t.map((function(e,t){return Object(C.jsxs)("div",{children:[Object(C.jsx)(l.a,{control:Object(C.jsx)(d.a,{onChange:i,name:e,color:"primary"}),label:e})," "]},t)})):Object(C.jsx)("p",{children:"No Tags"}),"  "]})]})})),w=a(131),B=a(80),M=a.n(B),P=a(167),V=a(168),I=Object(s.a)((function(e){return{area:{width:"90%",textAlign:"right"},popbox:{width:"330px",textAlign:"center",marginLeft:"73%",marginTop:"5px",position:"absolute",border:"2px solid #E0E0E0"},amf:{width:"60%",float:"left",textAlign:"center",paddingTop:"5px"},thea:{float:"right",width:"35%",paddingTop:"5px",marginRight:"10px",border:"white",backgroundColor:"#FFF"},button:{color:"#FFFF",backgroundColor:"#147594",height:"76.64px",border:"white"},itemCont:{marginBottom:"50px"},buta:{color:"white",backgroundColor:"#1EA4CE",pointerEvents:"none",border:"0"},butb:{color:"#1EA4CE",backgroundColor:"#E0E0E0",border:"0"},priceTag:{fontFamily:"Helvetica",color:"#1EA4CE",fontSize:"14px",lineHeight:"18px"},itemdata:{fontFamily:"Open Sans",color:"#191919",fontSize:"14px",lineHeight:"18px"},total:{width:"70px",textAlign:"center",border:"1px solid #1EA4CE",color:"#1EA4CE",fontSize:"12px",lineHeight:"15px",margin:"10px",float:"right",padding:"5px"}}})),R=Object(p.b)((function(e){return{basket:e.basket,totalPrice:e.totalPrice,basketboolean:e.basketboolean}}))((function(e){var t=e.basket,a=e.totalPrice,r=e.basketboolean,n=e.dispatch,i=I();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:i.area,children:Object(C.jsxs)(w.a,{color:"primary",className:i.button,startIcon:Object(C.jsx)(M.a,{}),onClick:function(){return n({type:j})},disableElevation:!0,children:[Math.abs(a.toFixed(2))," TL"]})})}),r&&Object(C.jsxs)(P.a,{className:i.popbox,children:[t.length?t.map((function(e){return Object(C.jsxs)(F.a,{className:i.itemCont,children:[Object(C.jsxs)("div",{className:i.amf,children:[Object(C.jsx)("div",{className:i.itemdata,children:e.name}),Object(C.jsxs)("div",{className:i.priceTag,children:[e.price," TL "]})]}),Object(C.jsxs)(V.a,{size:"small","aria-label":"small outlined button group",className:i.thea,children:[Object(C.jsx)(w.a,{className:i.butb,color:"primary",onClick:function(){return n({type:y,payload:{item:e}})},children:"-"}),Object(C.jsx)(w.a,{className:i.buta,children:e.amount}),Object(C.jsx)(w.a,{className:i.butb,color:"primary",onClick:function(){return n({type:O,payload:{item:e}})},children:"+"})]})]},e.id)})):Object(C.jsx)("h4",{children:"  Basket is empty"}),Object(C.jsxs)("div",{className:i.total,children:[" ",Math.abs(a.toFixed(2)),"TL"]})]})]})})),H=a(169),L=a(8),D=a(37);var U=function(e,t){console.log("state & action",{state:e,action:t});var a=function(t,a,r){var n=r?e.mugs:e.shirts;return t.length&&(n=n.filter((function(e){return t.includes(e.manufacturer)}))),a.length&&(n=n.filter((function(e){for(var t=Object(D.a)(e.tags),r=!1,n=0;n<t.length;n++)a.includes(t[n])&&(r=!0);return r}))),n};if(t.type===u){for(var r=t.payload.items.filter((function(e){return"mug"===e.itemType})),n=t.payload.items.filter((function(e){return"shirt"===e.itemType})),i=r.sort((function(e,t){return e.price-t.price})),c=r.sort((function(e,t){return e.price-t.price})),o=n.sort((function(e,t){return e.price-t.price})),s=t.payload.companies.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})),l=[],d=0;d<t.payload.items.length;d++)l=new Set([].concat(Object(D.a)(l),Object(D.a)(t.payload.items[d].tags)));var p=Array.from(l).sort((function(e,t){return e.localeCompare(t)}));return Object(L.a)(Object(L.a)({},e),{},{displayArray:i,shirts:n,mugs:r,brands:s,editedShirts:o,editedMugs:c,editedBrands:s,tags:p,editedTags:p})}if(t.type===x){var T=a(e.filters,e.selectedTags,!1);return Object(L.a)(Object(L.a)({},e),{},{displayArray:T,isMug:!1,displayedPage:1})}if(t.type===f){var F=a(e.filters,e.selectedTags,!0);return Object(L.a)(Object(L.a)({},e),{},{displayArray:F,isMug:!0,displayedPage:1})}if(t.type===h){if("lowToHigh"===t.payload.eventValue){var C=e.shirts.sort((function(e,t){return e.price-t.price})),k=e.mugs.sort((function(e,t){return e.price-t.price})),N=e.editedShirts.sort((function(e,t){return e.price-t.price})),E=e.editedMugs.sort((function(e,t){return e.price-t.price})),S=e.displayArray.sort((function(e,t){return e.price-t.price}));return Object(L.a)(Object(L.a)({},e),{},{displayArray:S,sortingType:t.payload.eventValue,editedShirts:N,editedMugs:E,mugs:k,shirts:C,displayedPage:1})}if("highToLow"===t.payload.eventValue){var w=e.shirts.sort((function(e,t){return t.price-e.price})),B=e.mugs.sort((function(e,t){return t.price-e.price})),M=e.editedShirts.sort((function(e,t){return t.price-e.price})),P=e.editedMugs.sort((function(e,t){return t.price-e.price})),V=e.displayArray.sort((function(e,t){return t.price-e.price}));return Object(L.a)(Object(L.a)({},e),{},{displayArray:V,sortingType:t.payload.eventValue,editedShirts:M,editedMugs:P,mugs:B,shirts:w,displayedPage:1})}if("newToOld"===t.payload.eventValue){var I=e.shirts.sort((function(e,t){return e.id-t.id})),R=e.mugs.sort((function(e,t){return e.id-t.id})),H=e.editedShirts.sort((function(e,t){return e.id-t.id})),U=e.editedMugs.sort((function(e,t){return e.id-t.id})),G=e.displayArray.sort((function(e,t){return e.id-t.id}));return Object(L.a)(Object(L.a)({},e),{},{displayArray:G,sortingType:t.payload.eventValue,editedShirts:H,editedMugs:U,mugs:R,shirts:I,displayedPage:1})}if("oldToNew"===t.payload.eventValue){var J=e.shirts.sort((function(e,t){return t.id-e.id})),K=e.mugs.sort((function(e,t){return t.id-e.id})),W=e.editedShirts.sort((function(e,t){return t.id-e.id})),Q=e.editedMugs.sort((function(e,t){return t.id-e.id})),z=e.displayArray.sort((function(e,t){return t.id-e.id}));return Object(L.a)(Object(L.a)({},e),{},{displayArray:z,sortingType:t.payload.eventValue,editedShirts:W,editedMugs:Q,mugs:K,shirts:J,displayedPage:1})}return e}if(t.type===g){if(t.payload.eventType){var X=[].concat(Object(D.a)(e.filters),[t.payload.eventValue]),Z=a(X,e.selectedTags,e.isMug);return Object(L.a)(Object(L.a)({},e),{},{filters:X,displayArray:Z,displayedPage:1})}var Y=e.filters.filter((function(e){return e!==t.payload.eventValue})),q=a(Y,e.selectedTags,e.isMug);return Object(L.a)(Object(L.a)({},e),{},{filters:Y,displayArray:q,displayedPage:1})}if(t.type===v){if(t.payload.eventType){var _=[].concat(Object(D.a)(e.selectedTags),[t.payload.eventValue]),$=a(e.filters,_,e.isMug);return Object(L.a)(Object(L.a)({},e),{},{selectedTags:_,displayArray:$,displayedPage:1})}var ee=e.selectedTags.filter((function(e){return e!==t.payload.eventValue})),te=a(e.filters,ee,e.isMug);return Object(L.a)(Object(L.a)({},e),{},{selectedTags:ee,displayArray:te,displayedPage:1})}if(t.type===b){if(""===t.payload.eventValue)return Object(L.a)(Object(L.a)({},e),{},{editedBrands:e.brands});var ae=e.brands.filter((function(e){return e.name.toLowerCase().includes(t.payload.eventValue)}));return Object(L.a)(Object(L.a)({},e),{},{editedBrands:ae})}if(t.type===m){if(""===t.payload.eventValue)return Object(L.a)(Object(L.a)({},e),{},{editedTags:e.tags});var re=e.tags.filter((function(e){return e.toLowerCase().includes(t.payload.eventValue)}));return Object(L.a)(Object(L.a)({},e),{},{editedTags:re})}if(t.type===A)return Object(L.a)(Object(L.a)({},e),{},{displayedPage:t.payload.value});if(t.type===j)return e.basketboolean?Object(L.a)(Object(L.a)({},e),{},{basketboolean:!1}):Object(L.a)(Object(L.a)({},e),{},{basketboolean:!0});if(t.type===O){for(var ne=!1,ie=-1,ce=0;ce<e.basket.length;ce++)e.basket[ce].id===t.payload.item.id&&(ne=!0,ie=ce);if(ne){var oe=e.basket;return oe[ie].amount=oe[ie].amount+1,Object(L.a)(Object(L.a)({},e),{},{totalPrice:e.totalPrice+t.payload.item.price,basket:oe})}console.log(t.payload.item.name);var se=[].concat(Object(D.a)(e.basket),[{name:t.payload.item.name,price:t.payload.item.price,id:t.payload.item.id,amount:1}]);return Object(L.a)(Object(L.a)({},e),{},{totalPrice:e.totalPrice+t.payload.item.price,basket:se,showAlert:!0})}if(t.type===y){for(var le=e.basket,de=-1,pe=0;pe<e.basket.length;pe++)e.basket[pe].id===t.payload.item.id&&(de=pe,le[pe].amount=le[pe].amount-1);return 0===le[de].amount&&(le=le.filter((function(e){return e.id!==t.payload.item.id}))),Object(L.a)(Object(L.a)({},e),{},{totalPrice:e.totalPrice-t.payload.item.price,basket:le})}return console.log("No matching action type"),e},G=a(61),J=a.n(G),K=a.p+"static/media/ayi.358af1fa.png",W=function(e){var t=Math.ceil(e.length/16);return Array.from({length:t},(function(t,a){var r=16*a;return e.slice(r,r+16)}))},Q=a(172),z=Object(s.a)((function(e){return{unda:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minWidth:125},add:{marginTop:"5px",padding:"3px",textAlign:"center",backgroundColor:"#1EA4CE",color:"#FFFF",width:"100%",fontWeight:"300","&:hover":{marginTop:"5px",padding:"3px",textAlign:"center",backgroundColor:"#1EA4CE",color:"#FFFF",width:"100%",fontWeight:"300"}},xsr:{margin:"auto"},imgs:{maxWidth:"70%",height:"auto"},pa:{fontFamily:"Helvetica",fontSize:"14px",lineHeight:"20px",color:"#1EA4CE"},na:{fontFamily:"Open Sans",fontSize:"14px",lineHeight:"20px",color:"#191919"},xsa:{padding:"10px",display:"flex",alignItems:"center"},out:{backgroundColor:"white"}}})),X=Object(p.b)((function(e){return{displayArray:e.displayArray,sortingType:e.sortingType,filters:e.filters,displayedPage:e.displayedPage}}))((function(e){var t=e.displayArray,a=(e.sortingType,e.filters,e.displayedPage),r=e.dispatch,n=z(),i=W(t),c=i.length?i[a-1]:[];return Object(C.jsxs)(C.Fragment,{children:[c.length?c.map((function(e){return Object(C.jsx)(H.a,{className:n.out,item:!0,xs:6,sm:4,md:3,children:Object(C.jsxs)(P.a,{elevation:0,className:n.unda,children:[Object(C.jsx)("img",{src:K,alt:"ayi",className:n.imgs}),Object(C.jsx)("br",{}),Object(C.jsxs)("span",{className:n.pa,children:["\u20ba ",e.price]}),Object(C.jsx)("br",{}),Object(C.jsx)("span",{className:n.na,children:e.name}),Object(C.jsx)("br",{}),Object(C.jsx)(w.a,{variant:"contained",color:"primary",className:n.add,onClick:function(){return r({type:O,payload:{item:e}})},children:"  Add"})]})},e.id)})):Object(C.jsx)("p",{children:"No Matching Items"})," ",Object(C.jsx)(H.a,{item:!0,xs:12,className:n.xsa,children:Object(C.jsx)(Q.a,{count:i.length?i.length:1,shape:"rounded",page:a,onChange:function(e,t){r({type:A,payload:{value:t}})},className:n.xsr})}),"  "]})})),Z=Object(s.a)((function(e){return{a:{backgroundColor:"#FFFF",color:"#1EA4CE",textTransform:"none",border:"0"},b:{backgroundColor:"#1EA4CE",color:"#FFFF",textTransform:"none",border:"0"},c:{marginBottom:"10px"}}})),Y=Object(p.b)((function(e){return{isMug:e.isMug}}))((function(e){var t=e.isMug,a=e.dispatch,r=Z();return Object(C.jsxs)(V.a,{color:"primary",className:r.c,children:[Object(C.jsx)(w.a,{className:t?r.b:r.a,onClick:function(){return a({type:f})},children:"Mug"}),Object(C.jsx)(w.a,{className:t?r.a:r.b,onClick:function(){return a({type:x})},children:"Shirt"})]})})),q=a(173),_=a(176),$=a(166),ee=Object(s.a)((function(e){return{mybox:{backgroundColor:"#FFFF",borderRadius:"3px",padding:"25px",height:"200px",flexFlow:"row wrap",display:"flex",flexDirection:"column"}}})),te=Object(p.b)((function(e){return{sortingType:e.sortingType}}))((function(e){var t=e.sortingType,a=e.dispatch,r=ee();return Object(C.jsx)(F.a,{className:r.mybox,children:Object(C.jsx)($.a,{children:Object(C.jsxs)(_.a,{"aria-label":"gender",value:t,onChange:function(e){var t=e.target.value;a({type:h,payload:{eventValue:t}})},children:[Object(C.jsx)(l.a,{value:"lowToHigh",control:Object(C.jsx)(q.a,{}),label:"Price Low to High"}),Object(C.jsx)(l.a,{value:"highToLow",control:Object(C.jsx)(q.a,{}),label:"Price High to Low"}),Object(C.jsx)(l.a,{value:"newToOld",control:Object(C.jsx)(q.a,{}),label:"New to Old"}),Object(C.jsx)(l.a,{value:"oldToNew",control:Object(C.jsx)(q.a,{}),label:"Old to New"})]})})})})),ae=Object(s.a)({headbox:{position:"absolute",height:"76.64px",background:"#1EA4CE ",left:"0%",right:"0%",top:"0%",bottom:"94.83%",display:""},imgg:{position:"center",marginTop:"18px",marginLeft:"43%"}}),re=function(){var e=ae();return Object(C.jsx)("div",{children:Object(C.jsx)(F.a,{className:e.headbox,children:Object(C.jsx)("img",{class:e.imgg,src:"data:image/png;base64,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",alt:"market"})})})},ne=a(81),ie=Object(s.a)((function(e){return{main:{backgroundColor:"#E5E5E5"},minhead:{fontFamily:"Open Sans",fontStyle:"normal",fontWeight:"600",fontSize:"13px",lineHeight:"18px",display:"flex",align:"center",color:"rgb(105, 116, 136)"},pheader:{fontFamily:"Open Sans",fontStyle:"normal",fontWeight:"normal",fontSize:"20px",lineHeight:"26px",display:"flex",webkitBoxAlign:"center",alignItems:"center",letterSpacing:"0.25px",color:"rgb(111, 111, 111)",marginBottom:"16px",textAlign:"left",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart:"0px",marginInlineEnd:"0px",padding:"0",margin:"0",boxSizing:"border-box"},ride:{flexGrow:1,marginLeft:"100px",marginRight:"100px",marginTop:"50px"},addbutton:{display:"flex",webkitBoxAlign:"center",alignItems:"center",webkitBoxPack:"center",justifyContent:"center",width:"124px",height:"22px",background:"rgb(30, 164, 206)",border:"none",borderRadius:"2px",cursor:"pointer"},addtag:{display:"flex",fontStyle:"normal",lineHeight:"20px",fontFamily:"Open Sans",textAlign:"left",fontWeight:"600",fontSize:"12px",height:"auto",color:"rgb(255, 255, 255)",marginBottom:"0px",margin:"0",padding:"0",boxSizing:"border-box",alignSelf:"center"},radio:{backgroundColor:"",color:"#0000FF"}}})),ce=Object(ne.a)(U,{brandSearchTerm:"",tagSearchTerm:"",displayedPage:1,basket:[],totalPrice:0,basketIsShown:!1,showAlert:!1,selectedTags:[],editedShirts:[],editedMugs:[],shirts:[],tags:[],brands:[],displayArray:[],mugs:[],editedBrands:[],editedTags:[],sortingType:"lowToHigh",isMug:!0,filters:[]},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),oe=function(){var e=ie(),t=Object(r.useState)([]),a=Object(o.a)(t,2),n=a[0],i=a[1],c=Object(r.useState)([]),s=Object(o.a)(c,2),l=s[0],d=s[1];Object(r.useEffect)((function(){ce.dispatch({type:u,payload:{items:n,companies:l}})}),[n,l]),Object(r.useEffect)((function(){J.a.get("https://getirserver.herokuapp.com/api/products").then((function(e){var t=e.data.map((function(e){return{tags:e.tags,price:e.price,name:e.name,description:e.description,slug:e.slug,id:e.added,manufacturer:e.manufacturer,itemType:e.itemType}}));i(t)})),J.a.get("https://getirserver.herokuapp.com/api/companies").then((function(e){var t=e.data.map((function(e){return{name:e.slug,id:e.account}}));d(t)}))}),[]);var g=Object(r.useState)(),b=Object(o.a)(g,2);b[0],b[1];return Object(C.jsx)(p.a,{store:ce,children:Object(C.jsxs)(F.a,{className:e.main,children:[Object(C.jsx)(re,{}),Object(C.jsx)(R,{}),Object(C.jsx)("div",{className:e.ride,children:Object(C.jsxs)(H.a,{container:!0,spacing:3,children:[Object(C.jsx)(H.a,{item:!0,xs:12,md:3,children:Object(C.jsxs)(H.a,{container:!0,spacing:3,children:[Object(C.jsxs)(H.a,{item:!0,xs:12,children:[Object(C.jsx)("h4",{className:e.minhead,children:"Sorting"}),Object(C.jsx)(te,{})]}),Object(C.jsxs)(H.a,{item:!0,xs:12,children:[Object(C.jsx)("h4",{className:e.minhead,children:"Brands"})," ",Object(C.jsx)(N,{})," "]}),Object(C.jsxs)(H.a,{item:!0,xs:12,children:[Object(C.jsx)("h4",{className:e.minhead,children:"Tags"}),Object(C.jsx)(S,{})]})]})}),Object(C.jsxs)(H.a,{item:!0,xs:12,md:9,children:[Object(C.jsx)("h3",{className:e.pheader,children:"Products"}),Object(C.jsx)(Y,{}),Object(C.jsxs)(H.a,{container:!0,spacing:3,children:[" ",Object(C.jsx)(X,{})]})]})," "]})})]})})};var se=function(){return Object(C.jsx)(oe,{})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,178)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(C.jsx)(n.a.Fragment,{children:Object(C.jsx)(se,{})}),document.getElementById("root")),le()}},[[129,1,2]]]);
//# sourceMappingURL=main.54c0fa3e.chunk.js.map