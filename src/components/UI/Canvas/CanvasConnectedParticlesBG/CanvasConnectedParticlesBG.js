import {useLayoutEffect, useRef} from 'react';

import classes from './CanvasConnectedParticlesBG.module.css';

let resizeTimeout;

let iw = window.innerWidth;
let ih = window.innerHeight * 0.9;

let particleArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * iw;
    this.y = Math.random() * ih;
    this.XDirection = Math.random() * 2 - 1;
    this.YDirection = Math.random() * 2 - 1;
    this.size = 0;
    this.color = "white";
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  update(ctx) {
    this.x += this.XDirection;
    this.y += this.YDirection;

    if (this.x < 0 || this.x > iw) this.XDirection = -this.XDirection;
    if (this.y < 0 || this.y > ih) this.YDirection = -this.YDirection;

    this.draw(ctx);
  }
}

function connect(ctx) {
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      let dx = particleArray[a].x - particleArray[b].x;
      let dy = particleArray[a].y - particleArray[b].y;
      let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

      if (distance < 200) {
        ctx.strokeStyle = "lightblue";
        ctx.lineWidth = 20/distance;
        ctx.beginPath();
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function init() {
  particleArray = [];

  for (let i = 0; i < iw / 20; i++) {
    particleArray.push(new Particle());
  }
}

const draw = (ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update(ctx);
  }
  connect(ctx);
};

function Canvas(props) {
    const canv = useRef();

    useLayoutEffect(() => {
      const canvas = canv.current;
      const ctx = canvas.getContext("2d");
      let animationFrameId;

      canvas.width = iw;
      canvas.height = ih;

      function resizeHandler() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          iw = window.innerWidth;
          ih = window.innerHeight * 0.9;
          canvas.width = iw;
          canvas.height = ih;
          init();
        }, 100)
      }
      resizeHandler();

      window.addEventListener("resize", resizeHandler);

      const animate = () => {
        draw(ctx);
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      return function () {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", resizeHandler);
        clearTimeout(resizeTimeout);
      };
    }, []);

    return <canvas className={classes.Canvas} ref={canv} />
}

export default Canvas;