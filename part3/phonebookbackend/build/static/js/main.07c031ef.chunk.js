(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(14),u=t.n(a),o=t(3),i=t(4),s=t.n(i),l="/api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},j=function(e){return s.a.post(l,e).then((function(e){return e.data}))},b=function(e){return s.a.delete(l+"/"+e).then((function(e){return e.status}))},f=function(e,n){return s.a.put(l+"/"+e,n).then((function(e){return e.data}))},h=t(0),m=function(e){var n=e.person,t=e.handleDelete;return Object(h.jsxs)("p",{children:[n.name," | ",n.number," ",Object(h.jsx)("button",{onClick:function(){return t(n.id,n.name)},children:"Delete"})," "]})},O=function(e){var n=e.persons,t=e.handleDelete;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(m,{person:e,handleDelete:t},e.id)}))})},p=function(e){var n=e.name,t=e.number,c=e.handleName,r=e.handleNumber,a=e.Submit;return Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:n,onChange:c})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:t,onChange:r})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",onClick:a,children:"add"})})]})},v=function(e){var n=e.value,t=e.call;return Object(h.jsx)("input",{value:n,onChange:t})},x=function(e){var n=e.message;return n?Object(h.jsx)("p",{className:"message",children:n}):null},g=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),u=Object(o.a)(a,2),i=u[0],s=u[1],l=Object(c.useState)(""),m=Object(o.a)(l,2),g=m[0],w=m[1],C=Object(c.useState)(""),S=Object(o.a)(C,2),k=S[0],D=S[1],N=Object(c.useState)(""),y=Object(o.a)(N,2),A=y[0],E=y[1],J=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));Object(c.useEffect)((function(){d().then((function(e){r(e)}))}),[]);var L=function(e){E(e),setTimeout((function(){E("")}),4e3)};return Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{message:A}),Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(v,{value:k,call:function(e){D(e.target.value)}}),Object(h.jsx)("h2",{children:"Add new"}),Object(h.jsx)(p,{name:i,number:g,handleName:function(e){s(e.target.value)},handleNumber:function(e){w(e.target.value)},Submit:function(e){if(e.preventDefault(),0!==i.length&&0!==g.length){var n={name:i,number:g},c=t.filter((function(e){return e.name===n.name}))[0];if(c){if(!window.confirm("".concat(n.name," exists. Update?")))return;f(c.id,n).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),L("Changed ".concat(n.name))})).catch((function(e){console.log(e.response.data),L(e.response.data.error)}))}else j(n).then((function(e){r(t.concat(e)),L("Added ".concat(n.name))})).catch((function(e){console.log(e.response.data),L(e.response.data.error)}));s(""),w("")}else alert("Can't have empty fields")}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(O,{persons:J,handleDelete:function(e,n){window.confirm("Delete ".concat(n,"?"))&&b(e).then((function(){r(t.filter((function(n){return n.id!=e})))}))}})]})};t(38);u.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.07c031ef.chunk.js.map