import React, { useRef, useEffect } from "react";

import classes from "./AboutMe.module.css";

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

      if (distance < 80) {
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

function AboutMe(props) {
  const canv = useRef();

  useEffect(() => {
    const canvas = canv.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = iw;
    canvas.height = ih;

    function resizeHandler() {
      console.log("resize");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      iw = window.innerWidth;
      ih = window.innerHeight * 0.9;
      canvas.width = iw;
      canvas.height = ih;
      init();
    }

    window.addEventListener("resize", resizeHandler);

    init();

    const animate = () => {
      draw(ctx);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return function () {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className={classes.AboutMe}>
      <canvas className={classes.Canvas} ref={canv} />
      <div className={classes.Content}>
        <div className={classes.Info}>
          <h1>Hello World! I'm Kacper</h1>
          <p style={{ textAlign: "center" }}>
            I'm junior Front-end Developer and IT in Business student
          </p>
          <br />
          <p style={{ textAlign: "center" }}>
            As a person intrested in Web Development, I'm eager to develop
            skills related to the following technologies
          </p>
        </div>
        <div className={classes.SkillsFrontend}>
          <h2>Front-end skills</h2>
          <div className={classes.SkillsSkill}>
            <h2>JavaScript</h2>
            <span className={classes.StarsGold}>☆☆☆</span>
            <span>☆☆</span>
          </div>
          <div className={classes.SkillsSkill}>
            <h2>React</h2>
            <span className={classes.StarsGold}>☆☆</span>
            <span>☆☆☆</span>
          </div>
          <div className={classes.SkillsSkill}>
            <h2>Redux</h2>
            <span className={classes.StarsGold}>☆☆</span>
            <span>☆☆☆</span>
          </div>
          <div className={classes.SkillsSkill}>
            <h2>Redux-Saga</h2>
            <span className={classes.StarsGold}>☆☆</span>
            <span>☆☆☆</span>
          </div>
          <div className={classes.SkillsSkill}>
            <h2>Html</h2>
            <span className={classes.StarsGold}>☆☆☆☆</span>
            <span>☆</span>
          </div>
          <div className={classes.SkillsSkill}>
            <h2>CSS</h2>
            <span className={classes.StarsGold}>☆☆☆☆</span>
            <span>☆</span>
          </div>
        </div>

        <div className={classes.SkillsOther}>
          <h2>Other skills</h2>
          <div className={classes.SkillsSkill}>
            <h2>Git</h2>
            <span className={classes.StarsGold}>☆☆</span>
            <span>☆☆☆</span>
          </div>
          <div className={classes.SkillsSkill}>
            <h2>English</h2>
            <span className={classes.StarsGold}>☆☆☆</span>
            <span>☆☆</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
