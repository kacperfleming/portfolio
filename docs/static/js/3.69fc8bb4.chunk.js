(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[3],{109:function(e,t,n){"use strict";var a=n(14),i=n(30),c=n(10),r=n(1),u=n(18),o=n(47),s=n(24),l=n(110),y=n.n(l),h=n(0),v=function(e,t){return"UPDATE_INPUT_VALUE"===t.type?Object(u.b)(e,Object(i.a)({},t.id,Object(c.a)(Object(c.a)({},e[t.id]),{},{value:t.val}))):e};t.a=function(e,t,n){var i=Object(r.useReducer)(v,e),c=Object(a.a)(i,2),u=c[0],l=c[1],d=Object(r.useState)(!1),f=Object(a.a)(d,2),p=f[0],g=f[1],m=Object(r.useState)(!1),x=Object(a.a)(m,2),b=x[0],j=x[1],O=[];for(var T in u)O.push({id:T,config:u[T]});var w=O.map((function(e){return Object(h.jsx)(o.a,{elementType:e.config.elementType,inputType:e.config.inputType,label:e.id,value:e.config.value,disabled:p&&n,min:e.config.min,max:e.config.max,step:e.config.step,changed:function(t){return function(e,t){return l({type:"UPDATE_INPUT_VALUE",val:e.target.value,id:t})}(t,e.id)}},e.id)}));return{playgroundUI:Object(h.jsxs)("section",{className:y.a.RngValSliders,children:[Object(h.jsx)("h1",{className:y.a.PlaygroundName,children:t}),w,Object(h.jsx)(s.a,{btnType:"Success",clicked:function(){p&&j(!0),g((function(e){return!e}))},children:p?"Stop!":"Try it!"})]}),valRng:u,animationToggler:p,setAnimationToggler:g,stopped:b,setStopped:j}}},110:function(e,t,n){e.exports={RngValSliders:"use-playgroundSliders_RngValSliders__3wfmL",PlaygroundName:"use-playgroundSliders_PlaygroundName__2VGYk"}},111:function(e,t,n){e.exports={Playground:"global_Playground__2p6A0"}},112:function(e,t,n){"use strict";var a=n(10),i=n(14),c=n(1),r=n(18),u=n(113),o=n.n(u),s=n(0),l={canvas:null,ctx:null,size:{height:null,width:null}},y=function(e,t){switch(t.type){case"INIT_CANVAS":return Object(r.b)(e,{canvas:t.value});case"INIT_CTX":return Object(r.b)(e,{ctx:t.value});case"SET_SIZE":return Object(r.b)(e,{size:{height:t.height,width:t.width}});default:return e}};t.a=function(e){var t=Object(c.useRef)(),n=Object(c.useReducer)(y,l),r=Object(i.a)(n,2),u=r[0],h=r[1];Object(c.useEffect)((function(){e&&h({type:"INIT_CANVAS",value:t.current})}),[e]),Object(c.useEffect)((function(){u.canvas&&h({type:"INIT_CTX",value:u.canvas.getContext("2d")})}),[u.canvas]);var v=u.canvas;Object(c.useEffect)((function(){if(v){var e,t=function(){clearTimeout(e),e=setTimeout((function(){h({type:"SET_SIZE",height:v.getBoundingClientRect().height,width:v.getBoundingClientRect().width}),v.height=v.getBoundingClientRect().height,v.width=v.getBoundingClientRect().width}),500)};return t(),window.addEventListener("resize",t),function(){clearTimeout(e),window.removeEventListener("resize",t)}}}),[v]);var d=Object(s.jsx)("canvas",{ref:t,className:o.a.Canvas});return Object(a.a)({canvasEl:d},u)}},113:function(e,t,n){e.exports={Canvas:"use-canvas_Canvas__1jTf-"}},118:function(e,t,n){"use strict";n.r(t);var a=n(14),i=n(22),c=n(23),r=n(1);function u(e,t){return{x:e.x*Math.cos(t)-e.y*Math.sin(t),y:e.x*Math.sin(t)+e.y*Math.cos(t)}}function o(e,t){var n=e.velocity.x-t.velocity.x,a=e.velocity.y-t.velocity.y;if(n*(t.x-e.x)+a*(t.y-e.y)>=0){var i=-Math.atan2(t.y-e.y,t.x-e.x),c=e.mass,r=t.mass,o=u(e.velocity,i),s=u(t.velocity,i),l={x:o.x*(c-r)/(c+r)+2*s.x*r/(c+r),y:o.y},y={x:s.x*(c-r)/(c+r)+2*o.x*r/(c+r),y:s.y},h=u(l,-i),v=u(y,-i);e.velocity.x=h.x,e.velocity.y=h.y,t.velocity.x=v.x,t.velocity.y=v.y}}var s=n(112),l=n(109),y=n(111),h=n.n(y),v=n(0);function d(e,t,n,a){var i=n-e,c=a-t;return Math.sqrt(Math.pow(i,2)+Math.pow(c,2))}var f=["#C0392B","#2980B9","#52BE80"],p=function(){function e(t,n,a,c){var r,u,s=this;Object(i.a)(this,e),this.velocity={x:2*(Math.random()-.5),y:2*(Math.random()-.5)},this.update=function(e,t,n,a){s.draw(t);for(var i=0;i<e.length;i++)s!==e[i]&&d(s.x,s.y,e[i].x,e[i].y)-2*s.radius<0&&o(s,e[i]);(s.x+30>a||s.x-30<0)&&(s.velocity.x=-s.velocity.x),s.x+=s.velocity.x,s.y+30>n||s.y-30<0?s.velocity.y=.95*-s.velocity.y:s.velocity.y+=1,s.y+=s.velocity.y},this.x=t,this.y=n,this.radius=a,this.mass=c,this.color=f[(r=0,u=2,Math.floor(Math.random()*(u-r+1)+r))]}return Object(c.a)(e,[{key:"draw",value:function(e){e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),e.stroke(),e.fillStyle=this.color,e.fill()}}]),e}(),g=[];t.default=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(s.a)(n),u=c.canvasEl,o=c.ctx,y=c.size,f=Object(l.a)({amount:{elementType:"input",inputType:"range",value:"10",min:"2",max:"30",step:"1"},radius:{elementType:"input",inputType:"range",value:"30",min:"10",max:"50",step:"1"},mass:{elementType:"input",inputType:"range",value:"1",min:"0.1",max:"100",step:"0.1"},trail:{elementType:"input",inputType:"range",value:"0.75",min:"0",max:"0.99",step:"0.01"}},"Colliding Balls",!0),m=f.playgroundUI,x=f.valRng,b=f.animationToggler,j=f.setAnimationToggler,O=f.stopped,T=f.setStopped;Object(r.useEffect)((function(){i(!0)}),[]);var w=x.amount.value,_=x.radius.value,S=x.mass.value,E=x.trail.value;return Object(r.useLayoutEffect)((function(){var e;return b&&(!function(e,t,n,a,i){g=[];for(var c=0;c<n;c++){var r=Math.random()*t,u=Math.random()*e;if(r<30?r+=30:r+30>t&&(r-=30),(u=Math.random()*e)<30?u+=30:u+30>e&&(u-=30),0!==c)for(var o=0;o<g.length;o++)d(r,u,g[o].x,g[o].y)-2*a<0&&((r=Math.random()*t)<30?r+=30:r+30>t&&(r-=30),(u=Math.random()*e)<30?u+=30:u+30>e&&(u-=30),o=-1);g.push(new p(r,u,a,i))}}(y.height,y.width,+w,+_,+S),function t(){o.fillStyle="rgba(0,0,0,".concat(1-E,")"),o.fillRect(0,0,y.width,y.height),g.forEach((function(e){e.update(g,o,y.height,y.width)})),e=requestAnimationFrame(t)}()),O?(T(!1),j(!1),void o.clearRect(0,0,y.width,y.height)):function(){window.cancelAnimationFrame(e)}}),[b,o,S]),Object(v.jsxs)("section",{className:h.a.Playground,children:[m,u]})}}}]);
//# sourceMappingURL=3.69fc8bb4.chunk.js.map