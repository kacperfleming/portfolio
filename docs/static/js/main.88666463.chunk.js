(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{104:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(21),c=n.n(r),o=n(17),s=n(20),l=n(18),u=n(59),h=n(69),d="AUTH_CHECK_STATE",j="AUTH_USER",b="AUTH_START",p="AUTH_SUCCESS",f="AUTH_FAIL",m="AUTH_INITIATE_LOGOUT",x="AUTH_LOGOUT",v="AUTH_CHECK_TIMEOUT",O=n(19),g={token:null,userId:null,loading:null,error:null},k=function(e){return Object(O.b)(e,{loading:!0,error:null})},w=function(e,t){return Object(O.b)(e,{token:t.token,userId:t.userId,loading:null,error:null})},_=function(e,t){return Object(O.b)(e,{error:t.errMsg,loading:!1})},y=function(e,t){return Object(O.b)(e,{token:null,userId:null})},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return k(e);case p:return w(e,t);case f:return _(e,t);case x:return y(e);default:return e}},S=n(15),I=n.n(S),N=n(8),A=n(60),C=n.n(A),D=function(e,t){return{type:p,token:e,userId:t}},E=function(e){return{type:v,expirationTime:e}},L=function(){return{type:x}},M=I.a.mark(z),P=I.a.mark(W),H=I.a.mark(F),U=I.a.mark(R);function z(e){var t,n,i;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(N.c)({type:b});case 2:return t="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-svD38PQk9EGqIlnpH3twTTJk8Ev5ifQ",e.isSignup&&(t="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-svD38PQk9EGqIlnpH3twTTJk8Ev5ifQ"),a.prev=4,a.next=7,C.a.post(t,e.account);case 7:return n=a.sent,a.next=10,new Date((new Date).getTime()+1e3*n.data.expiresIn);case 10:return i=a.sent,a.next=13,localStorage.setItem("expirationDate",i);case 13:return a.next=15,localStorage.setItem("token",n.data.idToken);case 15:return a.next=17,localStorage.setItem("userId",n.data.localId);case 17:return console.log("set expidation date to: "+i),a.next=20,Object(N.c)(D(n.data.idToken,n.data.localId));case 20:return a.next=22,Object(N.c)(E(n.data.expiresIn));case 22:a.next=28;break;case 24:return a.prev=24,a.t0=a.catch(4),a.next=28,Object(N.c)((r=a.t0.message,{type:f,errMsg:r}));case 28:case"end":return a.stop()}var r}),M,null,[[4,24]])}function W(e){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.b)(1e3*e.expirationTime);case 2:return t.next=4,Object(N.c)(L());case 4:case"end":return t.stop()}}),P)}function F(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:return e.next=4,localStorage.removeItem("userId");case 4:return e.next=6,localStorage.removeItem("expirationDate");case 6:return e.next=8,Object(N.c)(L());case 8:case"end":return e.stop()}}),H)}function R(){var e,t,n;return I.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,localStorage.getItem("token");case 2:if(e=i.sent){i.next=9;break}return console.log("no token"),i.next=7,Object(N.c)(L());case 7:i.next=26;break;case 9:return i.t0=Date,i.next=12,localStorage.getItem("expirationDate");case 12:if(i.t1=i.sent,t=new i.t0(i.t1),console.log("expiration date: "+t),!(t>new Date)){i.next=23;break}return n=localStorage.getItem("userId"),i.next=19,Object(N.c)(D(e,n));case 19:return i.next=21,Object(N.c)(E((t.getTime()-(new Date).getTime())/1e3));case 21:i.next=26;break;case 23:return console.log("expiration date reached"),i.next=26,Object(N.c)(L());case 26:case"end":return i.stop()}}),U)}var B=I.a.mark(V);function V(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)([Object(N.d)(j,z),Object(N.d)(v,W),Object(N.d)(m,F),Object(N.d)(d,R)]);case 2:case"end":return e.stop()}}),B)}n(99);var G=n(7),X=n(14);var q=function(e){var t=Object(i.useState)(""),n=Object(X.a)(t,2),a=n[0],r=n[1];return Object(i.useEffect)((function(){r("");var t=setInterval((function(){r(O.a())}),50),n=setTimeout((function(){clearInterval(t),r(e.children)}),2e3*(.2*e.posInQueue+.1));return function(){clearInterval(t),clearTimeout(n)}}),[e.children,e.posInQueue]),a},Y=n(0),K=function(e){return Object(Y.jsx)("span",{children:e.children.split("").map((function(e,t){return Object(Y.jsx)(q,{posInQueue:t,children:e},t)}))})},Q=n(36),J=n.n(Q),Z=function(e){return Object(Y.jsx)("li",{className:J.a.NavigationItem,children:Object(Y.jsx)(o.c,{to:e.link,activeClassName:J.a.Active,children:Object(Y.jsx)(K,{children:e.children})})})},$=n(61),ee=n.n($),te=Object(l.b)((function(e){return{isAuthorized:null!==e.auth.token}}))((function(e){return Object(Y.jsxs)("ul",{className:ee.a.NavigationItems,children:[Object(Y.jsx)(Z,{link:"/projects",children:"Projects"}),Object(Y.jsx)(Z,{link:"/about-me",children:"About Me"}),Object(Y.jsx)(Z,{link:"/contact",children:"Contact"}),e.isAuthorized?Object(Y.jsx)(Z,{link:"/logout",children:"Logout"}):Object(Y.jsx)(Z,{link:"/auth",children:"Login"})]})})),ne=n(25),ie=n(39),ae=n.n(ie),re=function(e){return Object(Y.jsxs)("header",{className:ae.a.Toolbar,children:[Object(Y.jsx)(ne.a,{btnType:"Toggler",clicked:e.toggleSideDrawer,open:e.togglerState}),Object(Y.jsx)("nav",{className:ae.a.DesktopOnly,children:Object(Y.jsx)(te,{})})]})},ce=n(10),oe=n(62),se=n.n(oe),le=function(e){return e.show?Object(Y.jsx)("div",{className:se.a.Backdrop,onClick:e.clicked}):null},ue=function(e){return c.a.createPortal(Object(Y.jsx)(le,Object(ce.a)({},e)),document.getElementById("backdrop-root"))},he=n(27),de=n.n(he);function je(e){var t=[de.a.SideDrawer,de.a.Close];return e.show&&(t=[de.a.SideDrawer,de.a.Open]),Object(Y.jsxs)(a.a.Fragment,{children:[Object(Y.jsx)(ue,{show:e.show,clicked:e.close}),Object(Y.jsx)("div",{onClick:e.close,className:t.join(" "),children:Object(Y.jsx)("nav",{children:Object(Y.jsx)(te,{})})})]})}var be=function(e){return c.a.createPortal(Object(Y.jsx)(je,Object(ce.a)({},e)),document.getElementById("sideDrawer-root"))},pe=n(63),fe=n.n(pe);var me,xe,ve=function(e){var t=Object(i.useState)(!1),n=Object(X.a)(t,2),r=n[0],c=n[1];return Object(Y.jsxs)(a.a.Fragment,{children:[Object(Y.jsx)(re,{toggleSideDrawer:function(){return c((function(e){return!e}))},togglerState:r}),Object(Y.jsx)(be,{close:function(){return c(!1)},show:r}),Object(Y.jsx)("main",{className:fe.a.Content,children:e.children})]})},Oe=n(22),ge=n(23),ke=n(64),we=n.n(ke),_e={x:null,y:null,radius:30},ye="",Te=150,Se=[],Ie=0,Ne=function(){function e(t,n,i,a){Object(Oe.a)(this,e),this.x=Math.random()*i,this.y=Math.random()*a,this.size=0,this.baseX=t,this.baseY=n,this.density=2*Math.random()+5,this.color="white"}return Object(ge.a)(e,[{key:"draw",value:function(e){e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.closePath()}},{key:"update",value:function(e){var t=_e.x-this.x,n=_e.y-this.y,i=Math.sqrt(t*t+n*n),a=t/i,r=n/i,c=_e.radius,o=(c-i)/c,s=a*o*this.density,l=r*o*this.density;if(i<_e.radius&&Math.abs(this.x-this.baseX)<5)this.x+=s,this.y+=l,e.strokeStyle="red";else{if(Math.abs(this.x-this.baseX)<10&&(this.x+=2*Math.random()-1),Math.abs(this.y-this.baseY)<10&&(this.y+=2*Math.random()-1),Math.abs(this.x-this.baseX)>5){var u=this.x-this.baseX;this.x-=u/10}if(Math.abs(this.y-this.baseY)>5){var h=this.y-this.baseY;this.y-=h/10}}this.draw(e)}}]),e}();function Ae(e){Se=[];for(var t=0;t<xe;t+=6)for(var n=0;n<me;n+=6){if(e[4*(n+t*me)+3]>0){var i=n+5,a=t+100;Se.push(new Ne(i,a,me,xe))}}}var Ce=function(e){e.clearRect(0,0,e.canvas.width,e.canvas.height);for(var t=0;t<Se.length;t++)Se[t].update(e);!function(e){for(var t=0;t<Se.length;t++)for(var n=t;n<Se.length;n++){var i=Se[t].x-Se[n].x,a=Se[t].y-Se[n].y;Math.sqrt(Math.pow(i,2)+Math.pow(a,2))<8&&(e.strokeStyle="lightblue",e.lineWidth=1,e.beginPath(),e.moveTo(Se[t].x,Se[t].y),e.lineTo(Se[n].x,Se[n].y),e.stroke())}}(e)};var De,Ee=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){me=window.innerWidth,xe=.9*window.innerHeight;var n,i=t.current,a=i.getContext("2d");function r(e){_e.x=e.x,_e.y=e.y-.11*xe+Ie}function c(){Ie=window.scrollY}function o(){console.log("resize canvas"),a.clearRect(0,0,a.canvas.width,a.canvas.height),me=window.innerWidth,xe=.9*window.innerHeight,i.width=me,i.height=xe,a.fillStyle="white",a.font="".concat(Te,"px Verdana"),a.textAlign="center",a.baseline="middle",Array.isArray(ye)?ye.forEach((function(e,t){return a.fillText(e,me/2,.2*xe+.25*xe*t)})):a.fillText(ye,me/2,100),Ae(a.getImageData(0,0,me,xe).data)}if(i.width=me,i.height=xe,window.addEventListener("mousemove",r),window.addEventListener("resize",o),window.addEventListener("scroll",c),e.dyspTxt.length*Te>me)for(var s in ye=e.dyspTxt.split(" "))ye[s].length*Te>me&&(Te=me/ye[s].length);else(ye=e.dyspTxt).length*Te>me&&(Te=me/ye.length);a.font="".concat(Te,"px Verdana"),a.fillStyle="white",a.fontWeight="bold",a.textAlign="center",a.baseline="middle",Array.isArray(ye)?ye.forEach((function(e,t){return a.fillText(e,me/2,Te*t+100)})):a.fillText(ye,me/2,100),Ae(a.getImageData(0,0,me,xe).data);return function e(){Ce(a),n=requestAnimationFrame(e)}(),function(){window.cancelAnimationFrame(n),window.removeEventListener("mousemove",r),window.removeEventListener("resize",o),window.removeEventListener("scroll",c)}}),[e.dyspTxt]),Object(Y.jsx)("canvas",{className:we.a.Canvas,ref:t})};function Le(e){return new Promise((function(t){De=setTimeout(t,1e3*e)}))}var Me,Pe=function(e){var t=Object(i.useState)(""),n=Object(X.a)(t,2),a=n[0],r=n[1],c=window.innerWidth,o=Object(Y.jsx)(Ee,{dyspTxt:a});return c<900&&(o=Object(Y.jsx)(G.a,{to:"/about-me"})),Object(i.useEffect)((function(){return Le(1).then((function(){return r("Hey!"),Le(3)})).then((function(){return r("I'm Kacper"),Le(3)})).then((function(){return r("Coding's my passion"),Le(3)})).then((function(){return r("</>"),Le(3)})),function(){return clearTimeout(De)}}),[]),o},He=n(40),Ue=n.n(He),ze=function(e){for(var t="",n=0;n<e.level;n++)t+="\u2606";for(var i="",a=0;a<5-t.length;a++)i+="\u2606";return Object(Y.jsxs)("div",{className:Ue.a.Skill,children:[Object(Y.jsx)("h2",{children:e.skillName}),Object(Y.jsx)("span",{className:Ue.a.Gold,children:t}),i]})},We=n(41),Fe=n.n(We),Re=[{skillName:"JavaScript",level:4},{skillName:"TypeScript",level:2},{skillName:"React",level:3},{skillName:"React-Router",level:3},{skillName:"Redux",level:3},{skillName:"Redux-Saga",level:2},{skillName:"REST API",level:3},{skillName:"Axios",level:3},{skillName:"HTML",level:4},{skillName:"CSS",level:4},{skillName:"SCSS",level:3}],Be=[{skillName:"English",level:3},{skillName:"Git",level:2},{skillName:"Scrum",level:2},{skillName:"Chess",level:3}],Ve=function(e){return Object(Y.jsxs)(a.a.Fragment,{children:[Object(Y.jsxs)("section",{className:Fe.a.SkillsFrontend,children:[Object(Y.jsx)("h2",{children:"Front-end skills"}),Re.map((function(e){return Object(Y.jsx)(ze,{skillName:e.skillName,level:e.level},e.skillName)}))]}),Object(Y.jsxs)("section",{className:Fe.a.SkillsOther,children:[Object(Y.jsx)("h2",{children:"Other skills"}),Be.map((function(e){return Object(Y.jsx)(ze,{skillName:e.skillName,level:e.level},e.skillName)}))]})]})},Ge=n(65),Xe=n.n(Ge),qe=window.innerWidth,Ye=.9*window.innerHeight,Ke=[],Qe=function(){function e(){Object(Oe.a)(this,e),this.x=Math.random()*qe,this.y=Math.random()*Ye,this.XDirection=2*Math.random()-1,this.YDirection=2*Math.random()-1,this.size=0,this.color="white"}return Object(ge.a)(e,[{key:"draw",value:function(e){e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.closePath()}},{key:"update",value:function(e){this.x+=this.XDirection,this.y+=this.YDirection,(this.x<0||this.x>qe)&&(this.XDirection=-this.XDirection),(this.y<0||this.y>Ye)&&(this.YDirection=-this.YDirection),this.draw(e)}}]),e}();var Je=function(e){e.clearRect(0,0,e.canvas.width,e.canvas.height);for(var t=0;t<Ke.length;t++)Ke[t].update(e);!function(e){for(var t=0;t<Ke.length;t++)for(var n=t;n<Ke.length;n++){var i=Ke[t].x-Ke[n].x,a=Ke[t].y-Ke[n].y,r=Math.sqrt(Math.pow(i,2)+Math.pow(a,2));r<200&&(e.strokeStyle="lightblue",e.lineWidth=20/r,e.beginPath(),e.moveTo(Ke[t].x,Ke[t].y),e.lineTo(Ke[n].x,Ke[n].y),e.stroke())}}(e)};var Ze=function(e){var t=Object(i.useRef)();return Object(i.useLayoutEffect)((function(){var e,n=t.current,i=n.getContext("2d");function a(){clearTimeout(Me),Me=setTimeout((function(){i.clearRect(0,0,n.width,n.height),qe=window.innerWidth,Ye=.9*window.innerHeight,n.width=qe,n.height=Ye,function(){Ke=[];for(var e=0;e<qe/20;e++)Ke.push(new Qe)}()}),100)}n.width=qe,n.height=Ye,a(),window.addEventListener("resize",a);return function t(){Je(i),e=requestAnimationFrame(t)}(),function(){window.cancelAnimationFrame(e),window.removeEventListener("resize",a),clearTimeout(Me)}}),[]),Object(Y.jsx)("canvas",{className:Xe.a.Canvas,ref:t})},$e=n(32),et=n.n($e);var tt=function(e){return Object(Y.jsxs)("section",{className:et.a.AboutMe,children:[Object(Y.jsx)(Ze,{}),Object(Y.jsxs)("div",{className:et.a.Content,children:[Object(Y.jsxs)("article",{className:et.a.Info,children:[Object(Y.jsx)("h1",{children:"Hello World! I'm Kacper"}),Object(Y.jsx)("p",{style:{textAlign:"center"},children:"I'm junior Web Developer and IT in Business student"}),Object(Y.jsx)("br",{}),Object(Y.jsx)("p",{style:{textAlign:"center"},children:"As a person intrested in Web Development, I'm eager to develop skills related to the following technologies"})]}),Object(Y.jsx)(Ve,{})]})]})},nt=n(70),it=n(68),at=function(e){return function(t){Object(nt.a)(i,t);var n=Object(it.a)(i);function i(){var e;Object(Oe.a)(this,i);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={component:null},e}return Object(ge.a)(i,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(Y.jsx)(e,Object(ce.a)({},this.props)):null}}]),i}(i.Component)},rt=n(42),ct=n.n(rt);var ot=function(e){var t=Object(i.useState)(window.innerWidth>=700?1:0),n=Object(X.a)(t,2),a=n[0],r=n[1];return Object(Y.jsxs)("div",{className:ct.a.ListWrapper,children:[Object(Y.jsx)("h2",{onClick:function(){return r((function(e){return e?0:1}))},children:e.listTitle}),Object(Y.jsx)("ul",{style:{height:0!==a?"".concat(40*e.length,"px"):0},className:ct.a.List,children:e.children})]})},st=n(43),lt=n.n(st),ut=[{title:"Playground",items:[{itemTitle:"Fibonacci Flower",link:"/projects/fibonacci-flower"},{itemTitle:"Particle Built Image",link:"/projects/particle-built-image"},{itemTitle:"Wave",link:"/projects/wave"},{itemTitle:"Colliding Balls",link:"/projects/colliding-balls"}]},{title:"Apps",items:[{itemTitle:"To-do List",link:"https://kacperfleming.github.io/to-do-list/"}]},{title:"Other",items:[{itemTitle:"Coming soon...",link:"/example"}]}],ht=function(e){return Object(Y.jsxs)("section",{className:lt.a.ListsWrapper,children:[Object(Y.jsx)("h1",{className:lt.a.Title,children:"Projects"}),ut.map((function(t,n){return Object(Y.jsx)(ot,Object(ce.a)(Object(ce.a)({length:t.items.length,listTitle:t.title},e),{},{children:t.items.map((function(e,t){return"/"!==e.link[0]?Object(Y.jsx)("a",{href:e.link,children:Object(Y.jsx)("li",{children:e.itemTitle})}):Object(Y.jsx)(o.b,{to:e.link,children:Object(Y.jsx)("li",{children:e.itemTitle})},t)}))}),n)}))]})},dt=n(66),jt=n.n(dt),bt=at((function(){return n.e(4).then(n.bind(null,113))})),pt=at((function(){return n.e(5).then(n.bind(null,114))})),ft=at((function(){return n.e(6).then(n.bind(null,115))})),mt=at((function(){return n.e(3).then(n.bind(null,116))})),xt=function(e){var t=Object(Y.jsxs)(G.d,{children:[Object(Y.jsx)(G.b,{path:"".concat(e.match.url,"/fibonacci-flower"),component:bt}),Object(Y.jsx)(G.b,{path:"".concat(e.match.url,"/particle-built-image"),component:pt}),Object(Y.jsx)(G.b,{path:"".concat(e.match.url,"/wave"),component:ft}),Object(Y.jsx)(G.b,{path:"".concat(e.match.url,"/colliding-balls"),component:mt}),Object(Y.jsx)(G.b,{path:"".concat(e.match.url,"/projects-list"),component:ht}),Object(Y.jsx)(G.a,{to:"".concat(e.match.url,"/projects-list")})]});return Object(Y.jsx)("div",{className:jt.a.Projects,children:t})},vt=n(44),Ot=n(46),gt=n(45),kt=n.n(gt),wt=function(e){return Object(Y.jsxs)("section",{className:kt.a.Contact,children:[Object(Y.jsx)("h2",{children:"Find me here!"}),Object(Y.jsxs)("ul",{className:kt.a.Socials,children:[Object(Y.jsx)("li",{children:Object(Y.jsx)("a",{href:"https://github.com/kacperfleming",children:Object(Y.jsx)(vt.a,{color:"rgb(0, 130, 139",size:"3x",icon:Ot.b})})}),Object(Y.jsx)("li",{children:Object(Y.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100013453171351",children:Object(Y.jsx)(vt.a,{color:"rgb(0, 130, 139",size:"3x",icon:Ot.a})})})]}),Object(Y.jsx)("p",{children:"or send me an e-mail"}),Object(Y.jsx)("a",{style:{textDecoration:"none",color:"rgb(0, 130, 139"},href:"mailto: kfleming424@gmail.com",children:"kfleming424@gmail.com"})]})},_t=n(31),yt=n(56),Tt=n(67),St=n.n(Tt),It=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(e)&&n}return n},Nt=function(e,t){switch(t.type){case"UPDATE_INPUT_VALUE":return Object(O.b)(e,Object(_t.a)({},t.id,Object(ce.a)(Object(ce.a)({},e[t.id]),{},{value:t.value,touched:!0,valid:It(t.value,e[t.id].validation)})));case"SET_FORM_IS_VALID":return Object(O.b)(e,{formIsValid:t.emailOK&&t.passwordOK});default:return e}};var At=Object(l.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onAuth:function(t,n){return e(function(e,t){return{type:j,account:e,isSignup:t}}(t,n))}}}))((function(e){var t=Object(i.useReducer)(Nt,{email:{value:"",elementType:"input",inputType:"email",touched:!1,valid:!1,shouldValidate:!0,validation:{required:!0,isEmail:!0}},password:{value:"",elementType:"input",inputType:"password",touched:!1,valid:!1,shouldValidate:!0,validation:{required:!0,minLength:8,maxLength:15}}}),n=Object(X.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)(!1),o=Object(X.a)(c,2),s=o[0],l=o[1],u=Object(i.useState)(!1),h=Object(X.a)(u,2),d=h[0],j=h[1],b=a.email.valid,p=a.password.valid;Object(i.useEffect)((function(){var e=setTimeout((function(){j(!(!b||!p))}),500);return function(){return clearTimeout(e)}}),[b,p]);var f=[];for(var m in a)f.push({id:m,config:a[m]}),console.log(m);var x=f.map((function(e){return Object(Y.jsx)(yt.a,{label:e.id,elementType:e.config.elementType,inputType:e.config.inputType,value:e.config.value,touched:e.config.touched,invalid:!e.config.valid,shouldValidate:e.config.validation,changed:function(t){return function(e,t){return r({type:"UPDATE_INPUT_VALUE",id:t,value:e.target.value})}(t,e.id)}},e.id)}));console.log(x);var v=null;e.isAuthenticated&&(v=Object(Y.jsx)(G.a,{to:"/"}));var O=null;return e.error&&(O=Object(Y.jsx)("p",{style:{color:"red"},children:e.error})),Object(Y.jsxs)("section",{className:St.a.Auth,children:[v,O,Object(Y.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),d){var n={email:a.email.value,password:a.password.value,returnSecureToken:!0};e.onAuth(n,s)}},children:[x,Object(Y.jsx)(ne.a,{btnType:"Submit",children:s?"Sign in":"Sign-up"})]}),Object(Y.jsx)(ne.a,{btnType:"Changer",clicked:function(){return l((function(e){return!e}))},children:"Sign in / Sign-up"})]})}));var Ct=Object(l.b)((function(e){return{}}),(function(e){return{onLogout:function(){return e({type:m})}}}))((function(e){var t=e.onLogout;return Object(i.useEffect)((function(){t()}),[t]),Object(Y.jsx)(G.a,{to:"/"})}));n(107);var Dt=Object(G.g)(Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onCheckState:function(){return e({type:d})}}}))((function(e){var t=e.onCheckState;Object(i.useEffect)((function(){t()}),[t]);var n=Object(Y.jsxs)(G.d,{children:[Object(Y.jsx)(G.b,{path:"/projects",component:xt}),Object(Y.jsx)(G.b,{path:"/about-me",component:tt}),Object(Y.jsx)(G.b,{path:"/auth",component:At}),Object(Y.jsx)(G.b,{path:"/contact",component:wt}),Object(Y.jsx)(G.b,{path:"/",exact:!0,component:Pe}),Object(Y.jsx)(G.a,{to:"/"})]});return e.isAuthenticated&&(n=Object(Y.jsxs)(G.d,{children:[Object(Y.jsx)(G.b,{path:"/projects",component:xt}),Object(Y.jsx)(G.b,{path:"/about-me",component:tt}),Object(Y.jsx)(G.b,{path:"/logout",component:Ct}),Object(Y.jsx)(G.b,{path:"/",exact:!0,component:Pe}),Object(Y.jsx)(G.a,{to:"/"})]})),Object(Y.jsx)("div",{children:Object(Y.jsx)(ve,{children:n})})}))),Et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Lt=Object(s.c)({auth:T}),Mt=Object(h.a)(),Pt=Object(s.e)(Lt,Et(Object(s.a)(u.a,Mt)));Mt.run(V),c.a.render(Object(Y.jsx)(a.a.StrictMode,{children:Object(Y.jsx)(l.a,{store:Pt,children:Object(Y.jsx)(o.a,{children:Object(Y.jsx)(Dt,{})})})}),document.getElementById("root"))},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var i=n(10),a=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","x","y","z","0","1","2","3","4","5","6","7","8","9","?","!","@"],r=function(){return a[(e=0,t=36,Math.floor(Math.random()*(t-e)+e+1))];var e,t},c=function(e,t){return Object(i.a)(Object(i.a)({},e),t)}},25:function(e,t,n){"use strict";n(1),n(104);var i=n(0);t.a=function(e){var t="Toggler"===e.btnType?Object(i.jsxs)("div",{className:["Toggler",e.open?"Open":""].join(" "),children:[Object(i.jsx)("input",{type:"checkbox"}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]}):e.children;return Object(i.jsx)("button",{className:["Button",e.btnType].join(" "),onClick:e.clicked,children:Object(i.jsx)("span",{className:"Button--Content",children:t})})}},27:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1yKH2",Open:"SideDrawer_Open__3Cw4w",Close:"SideDrawer_Close__3seWB"}},29:function(e,t,n){e.exports={InputContainer:"Input_InputContainer__2SKNH",Label:"Input_Label__1bMXP",Input:"Input_Input__3H5aE",Invalid:"Input_Invalid__3Ss7z"}},32:function(e,t,n){e.exports={AboutMe:"AboutMe_AboutMe__3G-u8",Content:"AboutMe_Content__1dnhA",Info:"AboutMe_Info__1xGNK"}},36:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__31rUB",active:"NavigationItem_active__18Dr0",Active:"NavigationItem_Active__2ivG8"}},39:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3dnv7",DesktopOnly:"Toolbar_DesktopOnly__13V_M"}},40:function(e,t,n){e.exports={Skill:"Skill_Skill__h3Nmo",Gold:"Skill_Gold__2TFoP"}},41:function(e,t,n){e.exports={SkillsFrontend:"Skills_SkillsFrontend__2NeMA",SkillsOther:"Skills_SkillsOther__1e7A9"}},42:function(e,t,n){e.exports={ListWrapper:"List_ListWrapper__36N3e",List:"List_List__144Au"}},43:function(e,t,n){e.exports={ListsWrapper:"ProjectsList_ListsWrapper__aioft",Title:"ProjectsList_Title__2vyx6"}},45:function(e,t,n){e.exports={Contact:"Contact_Contact__qFRzc",Socials:"Contact_Socials__55lwu"}},56:function(e,t,n){"use strict";var i=n(29),a=n.n(i),r=n(0);t.a=function(e){var t=null,n=[a.a.Input];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(a.a.Invalid),e.elementType){case"input":t=Object(r.jsx)("input",{className:n.join(" "),type:e.inputType,onChange:e.changed,value:e.value,disabled:e.disabled,min:e.min,max:e.max,step:e.step});break;case"textarea":t=Object(r.jsx)("textarea",{className:n.join(" "),type:e.inputType,onChange:e.changed,value:e.value});break;default:return!1}return Object(r.jsxs)("div",{className:a.a.InputContainer,children:[Object(r.jsx)("label",{className:a.a.Label,children:e.label}),t]})}},61:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3Ut7R"}},62:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2l-3g"}},63:function(e,t,n){e.exports={Content:"Layout_Content__1oZYA"}},64:function(e,t,n){e.exports={Canvas:"CanvasFluctuatingTxtDisp_Canvas__2kzAV"}},65:function(e,t,n){e.exports={Canvas:"CanvasConnectedParticlesBG_Canvas__39mTa"}},66:function(e,t,n){e.exports={Projects:"Projects_Projects__2If6T"}},67:function(e,t,n){e.exports={Auth:"Auth_Auth__2Hpii"}},99:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.88666463.chunk.js.map