(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"Container_container__3e1Mh"}},12:function(e,t,n){e.exports={title:"Section_title__2a6ZV"}},13:function(e,t,n){e.exports={form:"FindContact_form__2eb0O"}},2:function(e,t,n){e.exports={container:"Phonebook_container__Qzj1o",label:"Phonebook_label__2zxD8",input:"Phonebook_input__3Cs3s",button:"Phonebook_button__14L3U"}},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=n(14),s=n(3),l=n(4),u=n(6),d=n(5),b=n(10),m=n.n(b),h=n(0),j=function(e){var t=e.children;return Object(h.jsx)("div",{className:m.a.container,children:t})},f=n(11),p=n(22),O=n(2),x=n.n(O),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.contacts=e.props.data,e.nameID=Object(p.a)(),e.numberID=Object(p.a)(),e.handleChange=function(t){e.setState(Object(f.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(t){t.preventDefault();var n={id:Object(p.a)(),name:e.state.name,number:e.state.number};e.props.func(n),t.currentTarget.name.value="",t.currentTarget.number.value=""},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:x.a.container,children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{className:x.a.label,htmlFor:this.nameID,children:"Name"}),Object(h.jsx)("input",{id:this.nameID,onChange:this.handleChange,className:x.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(h.jsx)("label",{className:x.a.label,htmlFor:this.numberID,children:"Number"}),Object(h.jsx)("input",{id:this.numberID,onChange:this.handleChange,className:x.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(h.jsx)("button",{className:x.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),_=n(12),v=n.n(_),g=function(e){var t=e.children,n=e.title;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:v.a.title,children:n}),t]})},F=n(7),k=n.n(F),y=function(e){var t=e.data,n=e.deleteFunc;return Object(h.jsx)("div",{className:k.a.container,children:Object(h.jsx)("ul",{children:t.map((function(e){return Object(h.jsxs)("li",{className:k.a.element,children:[e.name," : ",e.number,Object(h.jsx)("button",{className:k.a.deleteButton,type:"button",onClick:function(){n(e.id)},children:"Delete"})]},e.id)}))})})},N=n(13),w=n.n(N),S=function(e){var t=e.filterFunc,n=Object(p.a)();return Object(h.jsxs)("form",{className:w.a.form,children:[Object(h.jsx)("label",{htmlFor:n,children:"Find contacts by name"}),Object(h.jsx)("input",{id:n,type:"text",name:"search",onChange:t})]})},A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.updateContact=function(t){e.state.contacts.find((function(e){return e.name===t.name}))?alert(t.name+" is already exist in phonebook"):e.setState((function(e){return{contacts:[t].concat(Object(o.a)(e.contacts))}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.normalizedFilter=e.state.filter.toLowerCase(),e.filteredContacts=e.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.normalizedFilter)})),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter.toLowerCase(),t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(h.jsxs)(j,{children:[Object(h.jsx)(g,{title:"Phonebook",children:Object(h.jsx)(C,{func:this.updateContact})}),Object(h.jsxs)(g,{title:"Contacts",children:[Object(h.jsx)(S,{filterFunc:this.changeFilter}),Object(h.jsx)(y,{data:t,filterFunc:this.changeFilter,deleteFunc:this.deleteContact})]})]})}}]),n}(a.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={element:"Contacts_element__23ZQ7",deleteButton:"Contacts_deleteButton___30Ek"}}},[[21,1,2]]]);
//# sourceMappingURL=main.1b7cd42c.chunk.js.map