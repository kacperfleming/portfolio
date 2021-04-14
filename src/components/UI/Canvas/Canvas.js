import React, { useRef, useEffect } from "react";
import "./Canvas.css";

let iw;
let ih;

const mouse = {
  x: null,
  y: null,
  radius: 30,
};

let dyspTxt = '';
let dyspTxtSiz = 150;
let skip = 6;

let textCoordinates;
let particleArray = [];
const adjustX = 5;
const adjustY = 100;
let mouseAdjustment = 0;

class Particle {
  constructor(x, y, iw, ih) {
    this.x = Math.random() * iw;
    this.y = Math.random() * ih;
    this.size = 0;
    this.baseX = x;
    this.baseY = y;
    this.density = Math.random() * 2 + 5;
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
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius && Math.abs(this.x - this.baseX) < 5) {
      this.x += directionX;
      this.y += directionY;
      ctx.strokeStyle = "red";

      // if (this.size < 3) {
      //   this.size += 0.5;
      // }
    } else {
      if (Math.abs(this.x - this.baseX) < 10) this.x += Math.random() * 2 - 1;
      if (Math.abs(this.y - this.baseY) < 10) this.y += Math.random() * 2 - 1;

      // if (this.size > 1) {
      //   this.size -= 0.5;
      // }
      if (Math.abs(this.x - this.baseX) > 5) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (Math.abs(this.y - this.baseY) > 5) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
    this.draw(ctx);
  }
}

function connect(ctx) {
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      let dx = particleArray[a].x - particleArray[b].x;
      let dy = particleArray[a].y - particleArray[b].y;
      let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      let mdxa = mouse.x - particleArray[a].x;
      let mdya = mouse.y - particleArray[a].y;
      let dma = Math.sqrt(Math.pow(mdxa, 2) + Math.pow(mdya, 2));
      let mdxb = mouse.x - particleArray[b].x;
      let mdyb = mouse.y - particleArray[b].y;
      let dmb = Math.sqrt(Math.pow(mdxb, 2) + Math.pow(mdyb, 2));

      if (distance < 8) {
        ctx.strokeStyle = "lightblue";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function init(textCoordinates) {
  particleArray = [];
  for (let y = 0; y < ih; y += skip) {
    for (let x = 0; x < iw; x += skip) {
      let opacityIndex = (x + y * iw) * 4 + 3;
      if (textCoordinates[opacityIndex] > 0) {
        let positionX = x + adjustX;
        let positionY = y + adjustY;
        particleArray.push(new Particle(positionX, positionY, iw, ih));
      }
    }
  }
}

const draw = ctx => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update(ctx);
  }
  connect(ctx);
};



function Canvas(props) {
  const canv = useRef();

  useEffect(() => {
    iw = window.innerWidth;
    ih = window.innerHeight * 0.9;

    const canvas = canv.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = iw;
    canvas.height = ih;

    function mouseHandler(event) {
      mouse.x = event.x;
      mouse.y = event.y - ih * 0.11 + mouseAdjustment;
    };

    function scrollHandler() {
      mouseAdjustment = window.scrollY;
    }

    function resizeHandler() {
      console.log('resize canvas');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      iw = window.innerWidth;
      ih = window.innerHeight * 0.9;
      canvas.width = iw;
      canvas.height = ih;
      ctx.fillStyle = "white";
      ctx.font = `${dyspTxtSiz}px Verdana`;
      ctx.textAlign = "center";
      ctx.baseline = "middle";
      if(Array.isArray(dyspTxt)) dyspTxt.forEach((word, i) => ctx.fillText(word, iw / 2, 0.2*ih + ih*0.25*i));
      else ctx.fillText(dyspTxt, iw / 2, 100);
      textCoordinates = ctx.getImageData(0, 0, iw, ih).data;
      init(textCoordinates);
    }

    window.addEventListener("mousemove", mouseHandler);
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('scroll', scrollHandler);

    if(props.dyspTxt.length * dyspTxtSiz > iw) {
      dyspTxt = props.dyspTxt.split(' ');
      for(let word in dyspTxt) {
        if(dyspTxt[word].length * dyspTxtSiz > iw) {
          dyspTxtSiz = iw/dyspTxt[word].length;
        }
      }
    } else {
      dyspTxt = props.dyspTxt;
      if(dyspTxt.length * dyspTxtSiz > iw) {
        dyspTxtSiz = iw/dyspTxt.length
      }
    }

    ctx.font = `${dyspTxtSiz}px Verdana`;
    ctx.fillStyle = "white";
    ctx.fontWeight = "bold";
    ctx.textAlign = "center";
    ctx.baseline = "middle";
    if(Array.isArray(dyspTxt)) dyspTxt.forEach((word, i) => ctx.fillText(word, iw / 2, dyspTxtSiz * i + 100));
    else ctx.fillText(dyspTxt, iw / 2, 100);
    textCoordinates = ctx.getImageData(0, 0, iw, ih).data;

    init(textCoordinates);

    const animate = () => {
      draw(ctx);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return function() {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", mouseHandler);
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [props.dyspTxt]);

  return <canvas className="Canvas" ref={canv} />;
};

export default Canvas;
