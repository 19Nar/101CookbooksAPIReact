(this.webpackJsonppizzeria=this.webpackJsonppizzeria||[]).push([[0],{37:function(e,a,t){e.exports=t.p+"static/media/WELCOME.06ac5430.jpg"},43:function(e,a,t){e.exports=t.p+"static/media/facebook.8f2e05e0.jpg"},44:function(e,a,t){e.exports=t.p+"static/media/youtube.3fea4d66.jpg"},45:function(e,a,t){e.exports=t.p+"static/media/insta.dd1c3c6b.jpg"},48:function(e,a,t){e.exports=t(92)},53:function(e,a,t){},54:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),l=t.n(o),c=(t(53),t(13)),i=t(6),s=t(12),m=t(93),u=t(94),p=t(95),h=t(96),f=t(97),d=t(98),b=(t(54),function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],o=a[1];return r.a.createElement(m.a,{fixed:"top",className:"nav",light:!0,expand:"md"},r.a.createElement(u.a,null,r.a.createElement(c.b,{className:"mx-3 link",to:"/"},"101 Cookbooks")),r.a.createElement(p.a,{onClick:function(){return o(!t)}}),r.a.createElement(h.a,{isOpen:t,navbar:!0},r.a.createElement(f.a,{className:"ml-auto",navbar:!0},r.a.createElement(d.a,null,r.a.createElement(c.b,{className:"link",to:"/"},"Home")),r.a.createElement(d.a,null,r.a.createElement(c.b,{className:"link",to:"/about"},"About")),r.a.createElement(d.a,null,r.a.createElement(c.b,{className:"link",to:"/menu"},"Menu")),r.a.createElement(d.a,null,r.a.createElement(c.b,{className:"link",to:"/contact"},"Contact")))))}),g=t(107),E=(t(67),[{src:"http://forkify-api.herokuapp.com/images/burger53be.jpg",caption:"101 Cookbooks",header:"Best Pizza Dough Ever",key:"1"},{src:"http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",caption:"The Pioneer Woman",header:"Deep Dish Fruit Pizza",key:"2"},{src:"http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",caption:"Closet Cooking",header:"Cauliflower Pizza Crust (with BBQ Chicken Pizza)",key:"3"},{src:"http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",caption:"Closet Cooking",header:"Pizza Quesadillas (aka Pizzadillas)",key:"4"},{src:"http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",caption:"Bon Appetit",header:"No-Knead Pizza Dough",key:"5"},{src:"http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg",caption:"Two Peas and Their Pod",header:"Pizza Potato Skins",key:"6"}]),k=function(){return r.a.createElement(g.a,{items:E})},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement(k,null))},w=t(37),x=t.n(w),v=(t(68),function(){return r.a.createElement("div",null,r.a.createElement("img",{src:x.a,alt:"Welcome"}),r.a.createElement("h5",{className:"mytext"},"101 Cookbooks started in early 2020 when I realized that I could help thousands of people to share their recipes and to explore their new talents. This site aimed to change the life of the ones who love to experiment. It does not matter whether each experiment is successful or not. What is important is that you keep experimenting. Edison experimented over 10,000 times before he invented the light bulb.",r.a.createElement("hr",null),"Life is a learning experience from the moment you are born. So we give you an opportunity to explore many wonderful vegetarian recipes, vegan recipes, WFPB recipes, and, of course, Instant Pot recipes. Many of the recipes are inspired by well-known cooks."),r.a.createElement("hr",null))}),z=t(105),C=t(106),N=t(99),j=t(100),P=t(101),O=t(102),B=t(103),S=t(104),F=t(38),M=t(39),W=t(47),I=t(46),T=function(e){Object(W.a)(t,e);var a=Object(I.a)(t);function t(){var e;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={likes:0},e.addLike=function(){var a=e.state.likes+1;e.setState({likes:a})},e}return Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.addLike,id:this.props.itemId},"Likes: ",this.state.likes)}}]),t}(r.a.Component),D=(t(69),function(e,a){var t=e.meals;return r.a.createElement(r.a.Fragment,{key:a.id},r.a.createElement(N.a,{className:"col",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"},r.a.createElement(j.a,{className:"mycard"},r.a.createElement(P.a,{src:t.image_url,alt:"Card image cap"}),r.a.createElement(O.a,null,r.a.createElement(B.a,{className:"text"},"Recipe ID: ",t.recipe_id),r.a.createElement(S.a,{href:t.publisher_url}," Publisher"),r.a.createElement(S.a,{href:t.source_url}," Source"),r.a.createElement(T,{itemId:a.id})))))}),Q=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],o=a[1];return Object(n.useEffect)((function(){fetch("https://forkify-api.herokuapp.com/api/search?q=pizza").then((function(e){return e.json()})).then((function(e){console.log(e),o(e.recipes)}))}),[]),r.a.createElement(z.a,null,r.a.createElement(C.a,null,t&&t.map((function(e){return r.a.createElement(D,{meals:e,key:e.id})}))))},A=t(22),H=t.n(A),J=t(40),L=t(41),R=t.n(L),_=t(42),G=t(43),q=t.n(G),V=t(44),X=t.n(V),Z=t(45),K=t.n(Z),U=(t(88),function(){return r.a.createElement(z.a,null,r.a.createElement(C.a,null,r.a.createElement(N.a,{xs:"6",sm:"6",md:"6",lg:"6",xl:"6"},r.a.createElement(_.a,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.359087048634!2d4.230127915269631!3d50.731828479515116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c8522d7c8013%3A0xbccf2b0f0514f35!2sBio-Planet%20Halle!5e0!3m2!1sen!2sbe!4v1594337286536!5m2!1sen!2sbe",width:"450",height:"250",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})),r.a.createElement(N.a,{className:"social",xs:"6",sm:"6",md:"6",lg:"6",xl:"6"},r.a.createElement("p",null,"101 Cookbooks is a California food blog by Heidi Swanson, focused on healthy recipes for everyday. It features over 700 vegetarian recipes, whole foods recipes, and vegan recipes, plus the occasional sweet treat.",r.a.createElement("hr",null),"For more information:"),r.a.createElement("a",{href:"https://www.facebook.com/101cookbooks"},r.a.createElement("img",{src:q.a,alt:""})),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCPyfGHoefipxv7Arp2sboJg"},r.a.createElement("img",{src:X.a,alt:""})),r.a.createElement("a",{href:"https://www.instagram.com/heidijswanson/"},r.a.createElement("img",{src:K.a,alt:""})))))}),Y=(t(89),function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(""),c=Object(s.a)(l,2),i=c[0],m=c[1],u=Object(n.useState)(""),p=Object(s.a)(u,2),h=p[0],f=p[1];function d(){return(d=Object(J.a)(H.a.mark((function e(a){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),"https://hooks.slack.com/services/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",n={text:"Name: ".concat(t," \n").concat(i," \n").concat(h)},e.next=5,R.a.post("https://hooks.slack.com/services/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",JSON.stringify(n),{withCredentials:!1,transformRequest:[function(e,a){return delete a.post["Content-Type"],e}]});case 5:200===e.sent.status?(alert("Message Sent!"),o(""),m(""),f("")):alert("Error.  Please, try again later.");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"w-1/2 container mx-auto mt-5"},r.a.createElement("form",{className:"form bg-dark text-white  px-8 pt-6 pb-8 mb-8 self-center"},r.a.createElement("label",{className:"block m-2 text-gray-700 text-sm font-bold",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"name",type:"text",placeholder:"Your Name",value:t,onChange:function(e){o(e.target.value)}}),r.a.createElement("label",{className:"block m-2 text-gray-700 text-sm font-bold mb-2",htmlFor:"email"},"Email"),r.a.createElement("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"email",type:"email",placeholder:"email@example.com",value:i,onChange:function(e){m(e.target.value)}}),r.a.createElement("label",{className:"block m-2 text-gray-700 text-sm font-bold mb-2",htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"appearance-none block mr-2 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"message",type:"message",placeholder:"Write your message here, please",value:h,onChange:function(e){f(e.target.value)}}),r.a.createElement("button",{className:"button mt-4 shadow bg-dark text-white text focus:outline-none font-bold py-2 px-4 rounded",onClick:function(e){return function(e){return d.apply(this,arguments)}(e)}},"Submit"))),r.a.createElement(U,null))}),$=(t(90),function(){return r.a.createElement("div",{className:"foot"},r.a.createElement("span",{className:"footer"},r.a.createElement("a",{href:"/"},"\xa9 101 Cookbooks, 2020")))}),ee=function(e){return r.a.createElement(c.a,null,r.a.createElement(b,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(i.a,{path:"/about"},r.a.createElement(v,null)),r.a.createElement(i.a,{path:"/menu"},r.a.createElement(Q,null)),r.a.createElement(i.a,{path:"/contact"},r.a.createElement(Y,null))),r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(91);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.48000b45.chunk.js.map