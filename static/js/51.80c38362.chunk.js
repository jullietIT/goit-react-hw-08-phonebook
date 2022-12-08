"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[51],{4051:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,o,a,c,s,l,u,x,d,p,f=t(885),m=t(2791),h=t(168),g=t(6444),b=g.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 250px;\n  border: 2px solid #000;\n  border-radius: 10px;\n  margin: 100px auto 10px;\n"]))),j=g.ZP.label(i||(i=(0,h.Z)(["\n  display: block;\n  text-align: center;\n  font-weight: 700;\n"]))),Z=g.ZP.input(o||(o=(0,h.Z)(["\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),y=g.ZP.button(a||(a=(0,h.Z)(["\n  min-width: 150px;\n  padding: 4px 12px;\n  margin-top: 10px;\n  border: 1px solid #000;\n  border-radius: 6px;\n  text-transform: capitalize;\n  cursor: pointer;\n  text-transform: capitalize;\n\n  cursor: pointer;\n  :hover,\n  :focus {\n    background-color: yellow;\n    color: black;\n  }\n"]))),v=g.ZP.h1(c||(c=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  color: blue;\n  font-size: 40px;\n  margin-top: -80px;\n"]))),w=function(n){return n.contacts.contacts},k=function(n){return n.filter.status},P=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},_=t(9434),z=t(3634),L=t(184),A=function(){var n=(0,_.I0)(),e=(0,m.useState)(""),t=(0,f.Z)(e,2),r=t[0],i=t[1],o=(0,m.useState)(""),a=(0,f.Z)(o,2),c=a[0],s=a[1],l=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":s(r)}},u=(0,_.v9)(w);return(0,L.jsxs)(b,{children:[(0,L.jsx)(v,{children:"Phonebook"}),(0,L.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.some((function(n){return n.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts")):n((0,z.el)({name:r,number:c})),i(""),s("")},children:[(0,L.jsxs)(j,{children:["Name",(0,L.jsx)(Z,{type:"text",name:"name",value:r,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0431\u0443\u043a\u0432, \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0445",required:!0})]}),(0,L.jsxs)(j,{children:["Number",(0,L.jsx)(Z,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:c,onChange:l,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"})]}),(0,L.jsx)(y,{type:"submit",children:"Add contact"})]})]})},F=g.ZP.ul(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  margin: 10px;\n  gap: 6px;\n  width: 500px;\n  text-align: center;\n  list-style: none;\n  margin: 0 auto;\n"]))),I=g.ZP.button(l||(l=(0,h.Z)(["\n  min-width: 80px;\n  padding: 4px 12px;\n  margin-top: 10px;\n  margin-left: 20px;\n  border: 1px solid #000;\n  border-radius: 6px;\n  text-transform: capitalize;\n  cursor: pointer;\n  :hover,\n  :focus {\n    background-color: yellow;\n    color: black;\n  }\n"]))),S=function(){var n=(0,_.v9)(w),e=(0,_.v9)(k),t=(0,_.I0)(),r=(0,_.v9)(P),i=(0,_.v9)(C),o=n.filter((function(n){return n.name.toLocaleLowerCase().includes(e.toLowerCase())}));return(0,m.useEffect)((function(){t((0,z.yF)())}),[t]),(0,L.jsxs)(F,{children:[r&&!i&&(0,L.jsx)("p",{children:"Request in progress..."}),i&&(0,L.jsx)("p",{}),o.map((function(n){var e=n.id,r=n.name,i=n.number;return(0,L.jsxs)("li",{children:[r,": ",i,(0,L.jsx)(I,{type:"button",onClick:function(){return t((0,z._f)(e))},children:"delete"})]},e)}))]})},q=g.ZP.div(u||(u=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n\n  align-items: center;\n  flex-direction: column;\n  \n"]))),N=g.ZP.h2(x||(x=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  color: blue;\n  font-size: 36px;\n"]))),D=g.ZP.h3(d||(d=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 10px 10px;\n"]))),E=t(5898),R=t(5984),T=function(){var n=(0,_.I0)(),e=(0,_.v9)(k),t=(0,R.x0)(3);return(0,L.jsxs)(q,{htmlFor:t,children:[(0,L.jsx)(N,{children:"Contacts"}),(0,L.jsx)(D,{children:"Find contact by name"}),(0,L.jsx)("label",{children:(0,L.jsx)("input",{type:"text",id:t,value:e,onChange:function(e){n((0,E.b)(e.target.value))}})})]})},$=g.ZP.div(p||(p=(0,h.Z)(["\n  border: 1px solid black;\n  width: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: rgb(0 1 0) 5px 5px 15px 5px;\n  height: auto;\n  text-align: center;\n  margin-top: 10px;\n  border: 4mm ridge rgba(211, 220, 50, 0.6);\n"])));function B(){return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)($,{children:[(0,L.jsx)(A,{}),(0,L.jsx)(T,{}),(0,L.jsx)(S,{})]})})}}}]);
//# sourceMappingURL=51.80c38362.chunk.js.map