(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e.n(o),r=e(4),s=e(5),a=e(7),i=e(6),l=e(1),u=e.n(l),d=(e(12),e(0)),h=function(t){var n=t.goods;return Object(d.jsx)("ul",{className:"goods-list box",children:n.map((function(t){return Object(d.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})};e(14);function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(r.a)(this,e);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(t=n.call.apply(n,[this].concat(c))).state={goods:[]},t.handleClick=function(n){n.then((function(n){return t.setState({goods:n})}))},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){return t.handleClick(b())},children:"Load All goods"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){return t.handleClick(b().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})))},children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){return t.handleClick(b().then((function(t){return t.filter((function(t){return"red"===t.color}))})))},children:"Load red goods"})]}),n.length>0&&Object(d.jsx)(h,{goods:n})]})}}]),e}(u.a.Component),j=f;c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4222c039.chunk.js.map