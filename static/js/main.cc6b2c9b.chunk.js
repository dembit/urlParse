(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),s=n.n(r),i=n(31),o=n.n(i),u=n(39),p=n(36),d=n(27),l=Object(d.b)(c||(c=Object(p.a)(["\nbody {\n  \n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont,  \"DINPro\", 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\na {\n    text-decoration: none;\n}\n\n"]))),j=n(79),b=n(9),m=n(111);!function(e){e.SEND_META="SEND_META"}(a||(a={}));var f=n(37);var h=u.c,x=n(43);var O,y,g=n(113),v=n(8),w=function(e){e.children;var t=h((function(e){return e.counterSlice.result})),n=Object(u.b)(),c=function(){var e=window.location.search.substr(1),t={};return e.split("&"),e.split("&").forEach((function(e){var n=e.split("=");1!==n.length&&(t=Object(f.a)(Object(f.a)({},t),{},Object(x.a)({},n[0],n[1])))})),t}(),r=c.timestamp,s=c.name,i=c.age;return Object(v.jsxs)("div",{style:{margin:"40px"},children:[Object(v.jsxs)("div",{children:["Name:",s||"undefined"]}),Object(v.jsxs)("div",{children:["Age:",i||"undefined"]}),Object(v.jsxs)("div",{children:["Timestamp:",r||"undefined"]}),(!s||!i||!r)&&Object(v.jsx)("div",{children:"\u0412\u0438\u0434 \u0441\u0442\u0440\u043e\u043a\u0438 URL \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u0438\u0434\u0430 http://localhost:3000/?name=example&age=29&timestamp=1624298113"}),s&&i&&r&&Object(v.jsx)(g.a,{onClick:function(){var e;r&&s&&i&&n((e={timestamp:r,name:s,age:i},{type:a.SEND_META,payload:e}))},type:"primary",children:"Send Meta"}),"success"===t&&Object(v.jsx)(m.a,{style:{width:"300px",marginTop:"20px"},message:"Request seccess",type:"success"})]})},S=d.c.div(O||(O=Object(p.a)(['\n    display: grid;\n    grid-template-areas: "content ";\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n\n']))),D=d.c.section(y||(y=Object(p.a)(["\n  grid-area: content;\n"])));var E=function(){return Object(v.jsx)(j.a,{children:Object(v.jsx)(b.c,{children:Object(v.jsx)(S,{children:Object(v.jsx)(D,{children:Object(v.jsx)(b.a,{path:"/",component:w})})})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},F={color:{type1:"#D0D1D2",type2:"#11263C",type3:"#F2F2F7"},size:{type1:"12px",type2:"14px",type3:"16px",type4:"18px"}},M=(n(90),n(40)),T=Object(M.c)({name:"counter",initialState:{result:null},reducers:{getResult:function(e,t){e.result=t.payload}}}),C=T.actions.getResult,N=T.reducer,A=n(78),R=n(76),I=n.n(R),P=n(24),_=n.n(P),B=n(25),L=n(77),U=(n.n(L).a.create({}),function(e){return new Promise((function(e,t){setTimeout((function(){return e({data:"success"})}),1e3)}))}),z=_.a.mark(q),J=_.a.mark(H);function q(e){var t,n;return _.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(B.b)(U,t);case 4:return n=c.sent,c.next=7,Object(B.d)({type:C.type,payload:n.data});case 7:c.next=11;break;case 9:c.prev=9,c.t0=c.catch(1);case 11:case"end":return c.stop()}}),z,null,[[1,9]])}function H(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Object(B.e)(a.SEND_META,q)]);case 2:case"end":return e.stop()}}),J)}var G=H,K=_.a.mark(Q);function Q(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Object(B.c)(G)]);case 2:case"end":return e.stop()}}),K)}var V=Object(A.a)(),W=Object(M.b)({reducer:{counterSlice:N},middleware:(new M.a).concat(V,I.a)});V.run(Q),o.a.render(Object(v.jsx)(u.a,{store:W,children:Object(v.jsx)(d.a,{theme:F,children:Object(v.jsxs)(s.a.StrictMode,{children:[Object(v.jsx)(l,{}),Object(v.jsx)(E,{})]})})}),document.getElementById("root")),k()}},[[109,1,2]]]);
//# sourceMappingURL=main.cc6b2c9b.chunk.js.map