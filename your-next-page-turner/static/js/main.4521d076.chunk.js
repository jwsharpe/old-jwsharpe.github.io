(this["webpackJsonpyour-next-page-turner"]=this["webpackJsonpyour-next-page-turner"]||[]).push([[0],{38:function(e,t,a){e.exports=a(56)},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),s=(a(43),a(11)),l=a.n(s),i=a(21),u=a(10),m=(a(45),a(46),function(){return c.a.createElement("header",null,c.a.createElement("div",null,c.a.createElement("h3",null,"Your Next Page Turner")),c.a.createElement("div",{className:"header-actions"},c.a.createElement("a",{href:"/about"},"about"),c.a.createElement("a",{href:"/"},"home")))});a(47);function d(e){var t=e.book,a=t.img,n=t.authors,r=t.id,o=e.book.titles,s=!!a;o.length>70&&(o=o.slice(0,70),o+="...");return c.a.createElement("li",{onClick:function(){e.setShowBook(r)},className:r===e.showBook?"book book-active":"book"},c.a.createElement("div",{className:"img-container"},s?c.a.createElement("img",{alt:"",src:a}):c.a.createElement("div",{className:"missing-book"},"missing :(")),c.a.createElement("div",{className:"title"}," ",o),c.a.createElement("div",{className:"author"}," ",n))}function h(e){return c.a.createElement("ul",{className:"book-container"},e.books.map((function(t,a){return c.a.createElement(d,{setShowBook:e.setShowBook,showBook:e.showBook,key:a,book:t})})))}a(48);function b(e){return c.a.createElement("div",null,e.book?c.a.createElement("aside",null,c.a.createElement("div",{className:"top"},c.a.createElement("div",{className:"title"},e.book.titles),c.a.createElement("div",{className:"border"}),c.a.createElement("div",{className:"author"},e.book.authors),c.a.createElement("div",{className:"description"},e.book.description)),c.a.createElement("button",{onClick:function(){e.fetchRecsByTitle(e.book)},className:"rec-button"},"mor like dis pls")):c.a.createElement("aside",null,c.a.createElement("div",{className:"top"},c.a.createElement("div",{className:"title"},"Please Select a Book!"))))}var f=a(85);function p(e){return c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"container"},c.a.createElement(f.a,{id:"outlined-basic",label:"Search your favorites!",variant:"outlined",value:e.query,onChange:function(t){return e.setQuery(t.target.value)},fullWidth:!0})))}a(52);function E(e){return c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"container rec-container"},c.a.createElement("div",{className:"rec-desc"},"Books recommendations like "),c.a.createElement("div",{className:"rec-title"},e.recTitle),c.a.createElement("div",{className:"clear-rec-button",onClick:e.clearRecs},"clear recs")))}var v="https://your-next-page-turner-backend.herokuapp.com/",k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),d=s[0],f=s[1],k=Object(n.useState)(-1),g=Object(u.a)(k,2),j=g[0],w=g[1],N=Object(n.useState)(0),O=Object(u.a)(N,2),y=O[0],S=O[1],x=Object(n.useState)(!0),B=Object(u.a)(x,2),T=B[0],F=B[1],C=Object(n.useState)(!0),q=Object(u.a)(C,2),A=q[0],J=q[1],P=Object(n.useState)(""),R=Object(u.a)(P,2),I=R[0],W=R[1],Q=function(e,t){var a=Object(n.useState)(e),c=Object(u.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){o(e)}),t);return function(){clearTimeout(a)}}),[e,t]),r}(I,200);Object(n.useEffect)((function(){T&&(F(!1),Y()),I.length>=2&&H(Q),0===I.length&&L()}),[Q.length]);var D,H=function(e){var t,a,n,c;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t={query:e},a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)},o.next=4,l.a.awrap(fetch(v+"/query",a));case 4:return n=o.sent,o.next=7,l.a.awrap(n.json());case 7:c=o.sent,r(c);case 9:case"end":return o.stop()}}))},L=function(){Y()},Y=function(){J(!0),r([]),S(0),$(0)},$=function(e){var t,n;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,l.a.awrap(fetch(v+"/books/"+e));case 2:return t=c.sent,c.next=5,l.a.awrap(t.json());case 5:n=c.sent,r([].concat(Object(i.a)(a),Object(i.a)(n))),J&&setTimeout((function(){return J(!1)}),500);case 8:case"end":return c.stop()}}))};return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement("div",{className:"content-grid"},c.a.createElement(b,{fetchRecsByTitle:function(e){var t,a,n,c;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return S(-1),f(e.titles),t={text:e.titles},a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)},o.next=6,l.a.awrap(fetch(v+"/books",a));case 6:return n=o.sent,o.next=9,l.a.awrap(n.json());case 9:c=o.sent,r([e].concat(Object(i.a)(c)));case 11:case"end":return o.stop()}}))},book:a[(D=j,a.findIndex((function(e){return e.id===D})))]}),c.a.createElement("div",{onScroll:function(e){e.persist();var t=e.target,a=t.scrollTop,n=t.scrollHeight;n-a<n/2&&!A&&-1!==y&&!I.length&&function(){J(!0);var e=y+1;S(e),$(e)}()},className:"content-container"},-1!==y?c.a.createElement(p,{query:I,setQuery:W}):c.a.createElement(E,{recTitle:d,clearRecs:function(){Y()}}),c.a.createElement(h,{books:a,showBook:j,setShowBook:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(35),j=a(84),w=a(32),N=a.n(w),O=a(33),y=a(13),S=a(31);a(53);var x=Object(g.a)({palette:{primary:N.a,secondary:{main:"#f44336"}}});o.a.render(c.a.createElement(j.a,{theme:x},c.a.createElement(O.a,null,c.a.createElement(y.c,null,c.a.createElement(y.a,{path:"/about"},c.a.createElement((function(e){return Object(S.a)(e),c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement("div",{className:"about"},c.a.createElement("p",null,"hi dis is a projct about books!"),c.a.createElement("a",{href:"https://github.com/jwsharpe"},"i made the clicky buttons and the website"),c.a.createElement("a",{href:"https://github.com/rebecca-hh-rosen"},"rebecca scraped the books and made the COOL rec system"),c.a.createElement("img",{className:"about-animate",src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.agentinengagement.com%2Fwp-content%2Fuploads%2F2013%2F12%2FID-100169696-Books.jpg&f=1&nofb=1"})))}),null)),c.a.createElement(y.a,{path:"/"},c.a.createElement(k,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4521d076.chunk.js.map