(this["webpackJsonpcreazydev.github.io"]=this["webpackJsonpcreazydev.github.io"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"name":"Schedule API","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","tags":["java 8","spring-boot","postgresql","hibernate","junit","mockito","rest","hateoas","hal","DDD","lombok"],"links":{"img":"https://raw.githubusercontent.com/creazydev/creazydev.github.io/main/src/assets/api-img.png","readme":"https://github.com/creazydev/schedule-read-only-api/blob/main/README.md"}},{"name":"Schedule Updater","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","tags":["java 8","spring-boot","postgresql","hibernate","apache-poi","jsoup","DDD"],"links":{"img":"https://raw.githubusercontent.com/creazydev/creazydev.github.io/main/src/assets/updater-img.png","readme":"https://github.com/creazydev/schedule-update-api"}},{"name":"Schedule UI","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","tags":["nodejs","reactjs","js","html","css","hateoas driven"],"links":{"img":"https://raw.githubusercontent.com/creazydev/creazydev.github.io/main/src/assets/ui-img.png","readme":"https://github.com/creazydev/schedule-ui/blob/main/README.md"}}]')},,,,,function(e){e.exports=JSON.parse('{"title":"O mnie","content":"Moja przygoda z programowaniem rozpocz\u0119\u0142\u0105 si\u0119 na pocz\u0105tku roku 2020, kiedy to postanowi\u0142em napisa\u0107 swoj\u0105 pierwsz\u0105 aplikacje w j\u0119zyku Java. Za wyborem pierszego j\u0119zyka sta\u0142a pasja do architektury i entuzjazm do pracy zespo\u0142owej. Od tego momentu systematycznie buduj\u0119 solidne fundamenty z zakresu znajomo\u015bci j\u0119zyka, \u015brodowiska web\'owego oraz stosowania dobrych praktyk."}')},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),i=n.n(a),r=n(13),c=n.n(r),o=(n(20),n(3)),d=n(4),l=n(6),u=n(5),m=(n(21),n(22),n(14)),h=function(e){var t=e.url,n=e.name,a=e.socialIcon;return Object(s.jsx)("div",{className:"social-item",children:Object(s.jsx)("a",{href:t,children:Object(s.jsx)(m.a,{className:n,icon:a,size:"2x"})})})},p=n(8),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"social-container",children:[Object(s.jsx)(h,{socialIcon:p.a,url:"https://www.facebook.com/rckamil/",name:"facebook"}),Object(s.jsx)(h,{socialIcon:p.e,url:"https://twitter.com/creazy24178487",name:"twitter"}),Object(s.jsx)(h,{socialIcon:p.c,url:"https://www.linkedin.com/in/kamil-nowak-312b631b1/",name:"linkedin"}),Object(s.jsx)(h,{socialIcon:p.b,url:"https://github.com/creazydev",name:"github"}),Object(s.jsx)(h,{socialIcon:p.d,href:"href",name:"slack"})]})}}]),n}(a.Component),b=(n(28),n(12)),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"about-me",children:[Object(s.jsx)("h2",{children:b.title}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"about-me-content",children:[b.content,Object(s.jsxs)("blockquote",{children:["Nowak Kamil ",Object(s.jsx)("br",{}),"nowakcreazy@protonmail.com"]})]})]})}}]),n}(a.Component),y=(n(29),function(e){var t=e.index,n=e.name,a=e.content,i=e.tags,r=e.imgUrl,c=e.readMeUrl;return Object(s.jsx)("div",{id:"card-".concat(t),className:"card",style:{backgroundImage:"url("+r+")"},children:Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("h3",{children:n}),Object(s.jsx)("p",{children:a}),Object(s.jsx)("a",{href:c,className:"tag read-me",children:"READ ME"}),Object(s.jsxs)("p",{className:"tags",children:[Object(s.jsx)("label",{children:"Tags: "}),i.map((function(e){return Object(s.jsxs)("div",{className:"tag",children:[" ",e," "]})}))]})]})})}),v=n(7),x=(n(30),v.length),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).nextCard=function(){var t=e.state.selectedCardIndex+1;e.setState({selectedCardIndex:t})},e.prevCard=function(){var t=e.state.selectedCardIndex-1;e.setState({selectedCardIndex:t})},e.state={selectedCardIndex:0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"projects",children:[Object(s.jsx)("h2",{children:"Moje projekty"}),Object(s.jsxs)("div",{className:"nav-buttons",children:[Object(s.jsx)("button",{onClick:function(){return e.prevCard()},disabled:0===this.state.selectedCardIndex,children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",children:Object(s.jsx)("path",{d:"M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"})})}),Object(s.jsx)("button",{onClick:function(){return e.nextCard()},disabled:this.state.selectedCardIndex===x-1,children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",children:Object(s.jsx)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})})})]}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("div",{className:"cards-slider active-slide-".concat(this.state.selectedCardIndex),children:Object(s.jsxs)("div",{className:"cards-slider-wrapper",style:{transform:"translateX(-".concat(this.state.selectedCardIndex*(100/x),"%)")},children:[Object.keys(v).map((function(e){return Object(s.jsx)(y,{index:e,name:v[e].name,content:v[e].content,tags:v[e].tags,imgUrl:v[e].links.img,readMeUrl:v[e].links.readme})})),";"]})})})]})}}]),n}(i.a.Component),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j,{}),Object(s.jsx)(g,{}),Object(s.jsx)(O,{})]})}}]),n}(i.a.Component);c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.8e442bc9.chunk.js.map