"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{983:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(689),i=n(87),o=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],u=(0,a.TH)();return(0,c.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3","/trending/movie/day?api_key=").concat("9cbb52e6579c256183b59d31049fbf06")).then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.title,r=e.name;return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:u},children:n||r})},t)}))})]})}}}]);
//# sourceMappingURL=983.5a9a3bd0.chunk.js.map