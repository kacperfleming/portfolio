(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[6],{111:function(e,t,n){e.exports={Canvas:"Wave_Canvas__1xnlf"}},115:function(e,t,n){"use strict";n.r(t);var i,a,r=n(1),o=n(111),s=n.n(o),c=n(0);t.default=function(e){var t=Object(r.useRef)();return Object(r.useLayoutEffect)((function(){var e=t.current,n=e.getContext("2d"),r=function(){i=e.getBoundingClientRect().width,a=e.getBoundingClientRect().height,e.width=i,e.height=a};r();var o,s={y:e.height/2,length:.01,amplitude:100,frequency:.1,randomEvery:100,counter:0};window.addEventListener("resize",r);var c=s.frequency;return function t(){n.beginPath(),n.moveTo(0,e.height/2),n.strokeStyle="hsl(0, 50%, 50%)";for(var r=0;r<i;r++)n.lineTo(r,s.y+Math.sin(r*s.length+c)*s.amplitude*Math.sin(c));n.stroke(),c+=.02,n.fillRect(0,0,i,a),n.fillStyle="rgba(0,0,0,0.05",s.counter++,o=requestAnimationFrame(t)}(),function(){window.cancelAnimationFrame(o),window.removeEventListener("resize",r)}}),[]),Object(c.jsx)("canvas",{className:s.a.Canvas,ref:t})}}}]);
//# sourceMappingURL=6.1e48adc7.chunk.js.map