(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(5),d=n.n(a),i=(n(17),n(18),n(3)),r=(n(9),n(1)),s=Object(i.b)()((function(t){return Object(r.jsxs)("form",{className:"submitButton",onSubmit:function(e){e.preventDefault();var n=e.target.userInput.value;""!==n&&(t.dispatch({type:"Add_Todo",message:n,id:Math.random()}),e.target.userInput.value="")},children:[Object(r.jsx)("input",{type:"text",name:"userInput",placeholder:"Add to your list"}),Object(r.jsx)("button",{className:"btn",children:"Submit"})]})})),u=Object(i.b)((function(t){return{todo:t.todo.data}}))((function(t){return Object(r.jsx)("ul",{children:t.todo.map((function(e,n){return Object(r.jsxs)("li",{children:[e.message,Object(r.jsx)("button",{id:"btn2",onClick:function(){return t.dispatch({type:"Remove_Todo",id:e.id})},children:"Remove"})]},n)}))})}));var j=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h2",{children:"My To Do List"}),Object(r.jsx)(s,{}),Object(r.jsx)(u,{})]})},b=n(2),l=n(12),O=n(4),h={data:[]},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"Add_Todo":return Object(O.a)(Object(O.a)({},t),{},{data:[].concat(Object(l.a)(t.data),[{message:e.message,id:e.id}])});case"Remove_Todo":var n=t.data.filter((function(t){return t.id!==e.id}));return Object(O.a)(Object(O.a)({},t),{},{data:n});default:return t}},m=Object(b.b)({todo:p}),f=Object(b.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());d.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(i.a,{store:f,children:Object(r.jsx)(j,{})})}),document.getElementById("root"))},9:function(t,e,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.972b963d.chunk.js.map