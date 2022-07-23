(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,a,t){},105:function(e,a,t){},133:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),u=(t(104),t(91)),i=t(162),o=(t(105),t(160)),m=t(161),s=t(159),E=t(68),p=t.n(E),b=t(10),V=function(e,a){switch(a.type){case"INCREMENT":return e.count<e.maxValue?e.maxValue===e.minValue?Object(b.a)(Object(b.a)({},e),{},{count:e.count}):Object(b.a)(Object(b.a)({},e),{},{count:e.count+1}):Object(b.a)(Object(b.a)({},e),{},{count:e.count});case"DECREMENT":return e.count<=e.minValue?Object(b.a)(Object(b.a)({},e),{},{count:e.count}):Object(b.a)(Object(b.a)({},e),{},{count:e.count-1});case"RESET":return e.maxValue===e.minValue?Object(b.a)(Object(b.a)({},e),{},{count:e.count}):Object(b.a)(Object(b.a)({},e),{},{count:e.minValue});case"MIN-VALUE":return Object(b.a)(Object(b.a)({},e),{},{minValue:a.minValue});case"MAX-VALUE":return Object(b.a)(Object(b.a)({},e),{},{maxValue:a.maxValue});case"SET":return e.minValue===e.maxValue?Object(b.a)(Object(b.a)({},e),{},{errorCounter:!0}):Object(b.a)(Object(b.a)({},e),{},{count:e.minValue,maxValue:e.maxValue,errorCounter:!1})}},x=t(90),g=t.n(x),j=t(85),h=t.n(j),d=function(e){return r.a.createElement(h.a,{color:e.color,onClick:e.onClick},e.title)},f=t(89),O=t.n(f),y=t(66),v=t.n(y),N=t(67),C=t.n(N),M=t(57),k=t.n(M),w=t(86),I=t.n(w),T=function(e){return r.a.createElement(I.a,{error:e.err,helperText:e.err?"Enter the correct number":"",value:e.value,label:e.label,variant:"outlined",onChange:function(a){e.changeValue(Number(a.currentTarget.value))}})},_=t(87),B=t.n(_),R=t(88),A=t.n(R),S=B()((function(){return A()({list:{width:"100%"}})})),L=function(e){var a=S();return r.a.createElement(O.a,{className:a.list},r.a.createElement(k.a,null),r.a.createElement(v.a,null,r.a.createElement(C.a,{primary:"Max value"}),r.a.createElement(T,{label:"Max value",value:e.maxValue,changeValue:e.changeMaxValue,err:e.err})),r.a.createElement(k.a,null),r.a.createElement(v.a,null,r.a.createElement(C.a,{primary:"Min value"}),r.a.createElement(T,{label:"Min value",value:e.minValue,changeValue:e.changeMinValue,err:e.err})),r.a.createElement(k.a,null))},U=Object(o.a)((function(e){return Object(m.a)({root:{border:"2px solid black",height:"600px",margin:"20px "},paper:{height:"100%",background:"#FBCEB1",border:"2px solid black"},paperButton:{width:"100%",height:"150px",background:"#FBCEB1",border:"2px solid black"},grid__item:{height:"100%"}})}));var z=function(){var e=U(),a=Object(n.useReducer)(V,{count:0,minValue:"",maxValue:"",errorCounter:!1}),t=Object(u.a)(a,2),c=t[0],l=t[1];return r.a.createElement(i.a,{container:!0,justify:"space-around"},r.a.createElement(i.a,{item:!0,className:e.root,xs:5,container:!0,justify:"center",alignItems:"center"},r.a.createElement(i.a,{item:!0,xs:11},r.a.createElement(s.a,{className:e.paper},r.a.createElement(i.a,{className:e.grid__item,container:!0,xs:12,justify:"center",alignItems:"center"},r.a.createElement(L,{minValue:c.minValue,maxValue:c.maxValue,changeMinValue:function(e){return l({type:"MIN-VALUE",minValue:e})},changeMaxValue:function(e){return l({type:"MAX-VALUE",maxValue:e})},err:c.errorCounter})))),r.a.createElement(i.a,{item:!0,xs:11},r.a.createElement(s.a,{className:e.paperButton},r.a.createElement(i.a,{className:e.grid__item,item:!0,container:!0,xs:12,justify:"center",alignItems:"center"},r.a.createElement(p.a,{size:"large",variant:"contained"},r.a.createElement(d,{color:"primary",title:"Set",onClick:function(){return l({type:"SET"})}})))))),r.a.createElement(i.a,{item:!0,className:e.root,xs:5,container:!0,justify:"center",alignItems:"center"},r.a.createElement(i.a,{item:!0,xs:11},r.a.createElement(s.a,{className:e.paper},r.a.createElement(i.a,{className:e.grid__item,container:!0,xs:12,justify:"center",alignItems:"center"},r.a.createElement(g.a,{variant:"h1"},null===c||void 0===c?void 0:c.count)))),r.a.createElement(i.a,{item:!0,xs:11},r.a.createElement(s.a,{className:e.paperButton},r.a.createElement(i.a,{className:e.grid__item,item:!0,container:!0,xs:12,justify:"center",alignItems:"center"},r.a.createElement(p.a,{size:"large",variant:"contained"},r.a.createElement(d,{color:"primary",title:"+",onClick:function(){return l({type:"INCREMENT"})}}),r.a.createElement(d,{color:"primary",title:"-",onClick:function(){return l({type:"DECREMENT"})}}),r.a.createElement(d,{color:"primary",title:"Reset",onClick:function(){return l({type:"RESET"})}})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,a,t){e.exports=t(133)}},[[99,1,2]]]);
//# sourceMappingURL=main.f8cf2e91.chunk.js.map