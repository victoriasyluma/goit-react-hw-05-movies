"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[931],{2931:function(t,e,n){n.r(e),n.d(e,{Cast:function(){return h},default:function(){return f}});var r=n(9439),a=n(2791),c=n(7689),i=n(5313),o="Cast_actors__B1axh",u="Cast_item__Km-n9",s=n(184),h=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],h=e[1],f=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,i.Ku)(f).then(h)}),[f]),(0,s.jsx)("ul",{className:o,children:n.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.character;return(0,s.jsxs)("li",{className:u,children:[n?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n),alt:r}):(0,s.jsx)("p",{children:"No photo available"}),(0,s.jsx)("p",{children:r}),(0,s.jsx)("p",{children:a})]},e)}))})},f=h},5313:function(t,e,n){n.d(e,{Df:function(){return i},FL:function(){return o},Ht:function(){return h},Ku:function(){return u},fI:function(){return s}});var r=n(4569),a=n.n(r),c="46f3b9dca981eed2c173014155e3a7a9",i=function(){return a().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c))},o=function(t){return a().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.data}))},u=function(t){return a().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.data.cast}))},s=function(t){return a().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.data.results}))},h=function(t){return a().get("\nhttps://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(c)).then((function(t){return t.data.results}))}}}]);
//# sourceMappingURL=931.e72970cf.chunk.js.map