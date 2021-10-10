(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),u=Object(n.createContext)(),o=a(1);function i(){var e=Object(n.useContext)(u),t=e.filters,a=e.setFilters,l=e.filters.filterByName.name;return r.a.createElement("label",{htmlFor:"InputFilterByName"},"Filtragem por nome:",r.a.createElement("input",{value:l,type:"text",id:"InputFilterByName","data-testid":"name-filter",onChange:function(e){var n=e.target;a(Object(o.a)(Object(o.a)({},t),{},{filterByName:{name:n.value}}))}}))}var s=a(10),m=a(5),p=a(3);function f(){var e=Object(n.useContext)(u),t=e.setFilters,a=e.setUpdate,l=e.filters,c=Object(n.useState)({column:"population",comparison:"maior que",value:0}),i=Object(p.a)(c,2),f=i[0],b=i[1],d=function(e){var t=e.target,a=t.name,n=t.value;b(Object(o.a)(Object(o.a)({},f),{},Object(m.a)({},a,n)))};return r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"column"},"Colunas:",r.a.createElement("select",{id:"column",name:"column","data-testid":"column-filter",onChange:d},["population","orbital_period","diameter","rotation_period","surface_water"].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{htmlFor:"comparison"},"Comparadores:",r.a.createElement("select",{id:"comparison",name:"comparison","data-testid":"comparison-filter",onChange:d},["maior que","menor que","igual a"].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{id:"value",type:"number",name:"value","data-testid":"value-filter",onChange:d})),r.a.createElement("button",{type:"button","data-testid":"button-filter",onClick:function(){return e=f,t(Object(o.a)(Object(o.a)({},l),{},{filterByNumericValue:[].concat(Object(s.a)(l.filterByNumericValue),[e])})),void a(!0);var e}},"Filtre!"))}function b(){var e=Object(n.useContext)(u),t=e.data,a=e.filters.filterByName.name;if(t.length>0){var l=Object.keys(t[0]);return r.a.createElement("section",null,r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement("table",null,r.a.createElement("caption",null,"StarsWars Planets"),r.a.createElement("thead",null,r.a.createElement("tr",null,l.map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,t.filter((function(e){return e.name.toUpperCase().includes(a.toUpperCase())})).map((function(e,t){return r.a.createElement("tr",{key:t},l.map((function(t){return r.a.createElement("td",{key:t},e[t])})))})))))}return r.a.createElement("section",null,"Loading...")}var d=a(2),v=a.n(d),E=a(7);function j(){return h.apply(this,arguments)}function h(){return(h=Object(E.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://swapi-trybe.herokuapp.com/api/planets/");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.results);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function y(e){var t=e.children,a=Object(n.useState)([]),l=Object(p.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(!1),s=Object(p.a)(i,2),m=s[0],f=s[1],b=Object(n.useState)({filterByName:{name:""},filterByNumericValue:[]}),d=Object(p.a)(b,2),h=d[0],y=d[1],O=Object(n.useCallback)((function(){var e=h.filterByNumericValue[0],t=e.column,a=e.comparison,n=e.value,r=c.filter((function(e){return"maior que"===a?Number(e[t])>Number(n):"menor que"===a?Number(e[t])<Number(n):Number(e[t])===Number(n)}));o(r)}),[c,h]);Object(n.useEffect)((function(){!0===m&&O(),f(!1)}),[O,m]),Object(n.useEffect)((function(){function e(){return(e=Object(E.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:(t=e.sent).map((function(e){return delete e.residents})),o(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var N={data:c,filters:h,setFilters:y,setUpdate:f};return r.a.createElement(u.Provider,{value:N},t)}var O=function(){return r.a.createElement("main",null,r.a.createElement(y,null,r.a.createElement(b,null)))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.70642daf.chunk.js.map