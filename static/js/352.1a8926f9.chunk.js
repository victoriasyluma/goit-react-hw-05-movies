"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[352],{352:function(t,e,n){n.r(e),n.d(e,{Movies:function(){return f},default:function(){return m}});var r=n(9439),a=n(5313),c=n(2791),i=n(1087),u=n(7689),o={form:"Movies_form__GUu8Y",label:"Movies_label__hSWXw",input:"Movies_input__bQntn",list:"Movies_list__2vz-1",item:"Movies_item__6ZbO6",link:"Movies_link__CNArN"},s=n(184),l="query",f=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],f=e[1],m=(0,c.useState)(""),_=(0,r.Z)(m,2),d=_[0],p=_[1],h=(0,i.lr)(),v=(0,r.Z)(h,2),b=v[0],g=v[1],k=b.get(l),j=(0,u.TH)();(0,c.useEffect)((function(){k&&(0,a.Ht)(k).then(f)}),[k]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:o.container,children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target;g(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},l,e.elements.query.value)),e.reset(),p("")},className:o.form,children:[(0,s.jsx)("input",{type:"text",name:l,className:o.input,value:d,onInput:function(t){return p(t.target.value)}}),(0,s.jsx)("button",{type:"submit",disabled:!d,children:"Search"})]}),(0,s.jsx)("ul",{className:o.list,children:n.map((function(t){var e=t.id,n=t.original_title,r=t.backdrop_path;return(0,s.jsx)("li",{className:o.item,children:(0,s.jsxs)(i.rU,{to:"".concat(e),state:{from:j},className:o.link,children:[(0,s.jsx)("span",{children:n}),(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:"".concat(n," poster")})]})},e)}))})]}),(0,s.jsx)(u.j3,{})]})},m=f},5313:function(t,e,n){n.d(e,{Df:function(){return u},FL:function(){return o},Ht:function(){return f},Ku:function(){return s},fI:function(){return l}});var r=n(4569),a=n.n(r),c="46f3b9dca981eed2c173014155e3a7a9",i="https://api.themoviedb.org/3/",u=function(){return a().get("".concat(i,"trending/all/day?api_key=").concat(c))},o=function(t){return a().get("".concat(i,"movie/").concat(t,"?api_key=").concat(c)).then((function(t){return t.data}))},s=function(t){return a().get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.data.cast}))},l=function(t){return a().get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.data.results}))},f=function(t){return a().get("".concat(i,"search/movie?query=").concat(t,"&api_key=").concat(c)).then((function(t){return t.data.results}))}}}]);
//# sourceMappingURL=352.1a8926f9.chunk.js.map