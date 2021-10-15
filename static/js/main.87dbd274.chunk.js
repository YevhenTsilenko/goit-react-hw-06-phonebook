(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{121:function(t,e,n){t.exports={button:"Button_button__14vhO"}},142:function(t,e){},144:function(t,e){},155:function(t,e){},157:function(t,e){},16:function(t,e,n){t.exports={form:"ContactForm_form__2CQ4y",label:"ContactForm_label__3-rH2",form_input:"ContactForm_form_input__3WJ3m"}},184:function(t,e){},186:function(t,e){},187:function(t,e){},192:function(t,e){},194:function(t,e){},200:function(t,e){},202:function(t,e){},221:function(t,e){},233:function(t,e){},236:function(t,e){},240:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(36),o=n.n(i),r=n(122),u=n(30),s=n(23),l=n(120),b=n.n(l),d=(n(240),n(121)),m=n.n(d),f=n(3);function j(t){var e=t.type,n=t.onClick,a=t.btnName,c=t.disabled;return Object(f.jsx)("button",{type:e,className:m.a.button,onClick:n,disabled:c,children:a})}var O=n(16),p=n.n(O);function _(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1],r=Object(a.useState)(""),u=Object(s.a)(r,2),l=u[0],b=u[1],d=function(){o(""),b("")};return Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i,l),d()},className:p.a.form,children:[Object(f.jsxs)("label",{className:p.a.label,children:["Name",Object(f.jsx)("input",{className:p.a.form_input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:i,onChange:function(t){o(t.currentTarget.value)}})]}),Object(f.jsxs)("label",{className:p.a.label,children:["Number",Object(f.jsx)("input",{className:p.a.form_input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:function(t){b(t.currentTarget.value)}})]}),Object(f.jsx)(j,{type:"submit",btnName:"Add contact",disabled:!(i&&l),className:p.a.form_btn})]})}var h=n(64),v=n.n(h);function x(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n,className:v.a.input})]})}var g=n(65),C=n.n(g);function N(t){var e=t.contacts,n=t.onDelete;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:C.a.contact,children:[Object(f.jsxs)("span",{children:[a,": ",c]}),Object(f.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var S=function(){var t,e=Object(a.useState)(null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),n=Object(s.a)(e,2),c=n[0],i=n[1],o=Object(a.useState)(""),r=Object(s.a)(o,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(c))}),[c]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(_,{onSubmit:function(t,e){c.find((function(e){return e.name===t}))?alert("".concat(t," already exists")):i((function(n){return[].concat(Object(u.a)(n),[{id:b.a.generate(),name:t,number:e}])}))}}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(x,{value:l,onChange:function(t){d(t.currentTarget.value)}}),Object(f.jsx)(N,{contacts:function(){var t=l.toLowerCase();return c.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDelete:function(t){i(c.filter((function(e){return e.id!==t})))}})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,244)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))},E=(n(242),n(38)),w="DELETE",D="FILTER",F={contacts:{items:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""}},T=Object(E.a)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.contacts.items,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"ADD":return t.find((function(t){return t.name===a.name}))?(alert("".concat(a.name," is already exists")),Object(u.a)(t)):[].concat(Object(u.a)(t),[a]);case w:return t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case D:return a;default:return t}}}),A=Object(E.b)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(r.a,{store:A,children:Object(f.jsx)(S,{})})}),document.getElementById("root")),y()},64:function(t,e,n){t.exports={label:"Filter_label__33Ibq",input:"Filter_input__2Qxyb"}},65:function(t,e,n){t.exports={contact:"ContactList_contact__f7ZWF",button:"ContactList_button__1b5R0"}}},[[243,1,2]]]);
//# sourceMappingURL=main.87dbd274.chunk.js.map