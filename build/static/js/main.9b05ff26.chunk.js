(this["webpackJsonpindegredient-list-with-functinal-hooks"]=this["webpackJsonpindegredient-list-with-functinal-hooks"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(6),r=n.n(l),i=(n(13),n(7)),o=n(4),u=n(1),m=(n(14),function(e){return c.a.createElement("div",{className:"card"},e.children)}),s=(n(15),function(){return c.a.createElement("div",{className:"lds-ring"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))}),d=(n(16),c.a.memo((function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],r=n[1],i=Object(a.useState)(0),o=Object(u.a)(i,2),d=o[0],f=o[1];return c.a.createElement("section",{className:"ingredient-form"},c.a.createElement(m,null,c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addItem({title:l,amount:d}),r(""),f(0)}},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"title"},"Name"),c.a.createElement("input",{value:l,onChange:function(e){r(e.target.value)},type:"text",id:"title"})),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"amount"},"Amount"),c.a.createElement("input",{type:"number",onChange:function(e){f(e.target.value)},value:d,id:"amount"})),c.a.createElement("div",{className:"ingredient-form__actions"},c.a.createElement("button",{disabled:""===l||0===d,type:"submit"},"Add Ingredient"),e.loading?c.a.createElement(s,null):null))))}))),f=(n(17),function(e){return c.a.createElement("section",{className:"ingredient-list"},c.a.createElement("h2",null,"Loaded Ingredients"),c.a.createElement("ul",null,e.ingredients.map((function(t){return c.a.createElement("li",{key:t.id,onClick:e.onRemoveItem.bind(void 0,t.id)},c.a.createElement("span",null,t.title),c.a.createElement("span",null,c.a.createElement("strong",{style:{color:"red"}},"X "),t.amount))}))))}),E=(n(18),c.a.memo((function(e){var t=e.updateingredientList,n=e.startfetching,l=e.error,r=Object(a.useState)(""),i=Object(u.a)(r,2),o=i[0],s=i[1],d=Object(a.useRef)();return Object(a.useEffect)((function(){n(!0);var e=setTimeout((function(){if(o===d.current.value){var e=0===o.length?"":'?orderBy="title"&equalTo="'.concat(o,'"');fetch("https://indegredent-list-withhooks.firebaseio.com/ingredient.json"+e).then((function(e){return e.json()})).then((function(e){var n=[];for(var a in e)n.push({id:a,title:e[a].title,amount:e[a].amount});t(n)})).catch((function(e){console.log(e),l(e.message)}))}}),500);return function(){clearTimeout(e)}}),[o,t,d,n,l]),c.a.createElement("section",{className:"search"},c.a.createElement(m,null,c.a.createElement("div",{className:"search-input"},c.a.createElement("label",null,"Filter by Title"),c.a.createElement("input",{ref:d,value:o,onChange:function(e){s(e.target.value)},type:"text"}))))}))),h=(n(19),c.a.memo((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"backdrop",onClick:e.onClose}),c.a.createElement("div",{className:"error-modal"},c.a.createElement("h2",null,"An Error Occurred!"),c.a.createElement("p",null,e.children),c.a.createElement("div",{className:"error-modal__actions"},c.a.createElement("button",{type:"button",onClick:e.onClose},"Okay"))))})));var b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),m=Object(u.a)(r,2),s=m[0],b=m[1],g=Object(a.useState)(null),p=Object(u.a)(g,2),v=p[0],j=p[1],O=Object(a.useCallback)((function(e){l(e),b(!1)}),[]),k=Object(a.useCallback)((function(){b(!0)}),[]),N=Object(a.useCallback)((function(e){j(e),b(!1)}),[]);return c.a.createElement("div",{className:"App"},v&&c.a.createElement(h,{onClose:function(){j(null)}},v),c.a.createElement(d,{loading:s,addItem:function(e){b(!0),fetch("https://indegredent-list-withhooks.firebaseio.com/ingredient.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){b(!1),l((function(n){return[].concat(Object(o.a)(n),[Object(i.a)({id:t.name},e)])}))})).catch((function(e){N(e.message.replace(/_/g,""))}))}}),c.a.createElement("section",null,c.a.createElement(E,{error:N,startfetching:k,updateingredientList:O}),c.a.createElement(f,{onRemoveItem:function(e){b(!0),fetch("https://indegredent-list-withhooks.firebaseio.com/ingredient/".concat(e,".json"),{method:"DELETE"}).then((function(t){b(!1),l((function(t){var n=t.findIndex((function(t){return t.id===e})),a=Object(o.a)(t);return n>=0&&a.splice(n,1),a}))})).catch((function(e){N(e.message.replace(/_/g,""))}))},ingredients:n})))},g=function(e){return c.a.createElement(b,null)};r.a.render(c.a.createElement(g,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.9b05ff26.chunk.js.map