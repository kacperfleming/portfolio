import { useEffect, useLayoutEffect, useState } from "react";

import resolveCollision from './physics';
import useCanvas from '../../../../hooks/use-canvas/use-canvas';
import usePlayground from "../../../../hooks/use-playground/use-playgroundSliders";

import gClasses from '../../../../global.module.css';



function GetDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let colors = ['#C0392B', '#2980B9', '#52BE80'];

class Circle {

    velocity = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
    }

    constructor(x, y, radius, mass) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.mass = mass;
        this.color = colors[randomNumber(0, 2)];
    }


    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update = (circles, ctx, ih, iw) => {

        this.draw(ctx);

        for(let i = 0; i < circles.length; i++) {
            if(this === circles[i]) continue;
            if(GetDistance(this.x, this.y, circles[i].x, circles[i].y) - 2*this.radius < 0) {
                resolveCollision(this, circles[i]);

            }
        }

        if((this.x + 30 > iw) || (this.x - 30 < 0)) {
            this.velocity.x = -this.velocity.x;
        }
        this.x += this.velocity.x;

        if((this.y + 30 > ih) || (this.y - 30 < 0)) {
            this.velocity.y = -this.velocity.y * 0.95;
        } else {
            this.velocity.y += 1;
        }
        this.y += this.velocity.y;

    }
}
let circles = [];


function init(ih, iw, amount, radius, mass) {
    circles = [];
    for(let i=0; i<amount; i++) {
        let x = Math.random() * iw;
        let y = Math.random() * ih;
        if(x<30) {
            x+=30;
        }
        else if(x+30>iw) {
            x-=30;
        }

        y = Math.random() * ih;
        if(y<30) {
            y+=30;
        }
        else if(y+30>ih) {
            y-=30;
        }
        if(i!==0) {
            for(let j=0; j < circles.length; j++) {

                if(GetDistance(x, y, circles[j].x, circles[j].y) - 2*radius < 0) {

                    x = Math.random() * iw;
                    if(x<30) {
                        x+=30;
                    }
                    else if(x+30>iw) {
                        x-=30;
                    }

                    y = Math.random() * ih;
                    if(y<30) {
                        y+=30;
                    }
                    else if(y+30>ih) {
                        y-=30;
                    }

                    j = -1;
                }
            }

        }
        circles.push(new Circle(x, y, radius, mass));
    }
}

const CollidingBalls = () => {
    const [ready, setReady] = useState(false);

    const {canvasEl, ctx, size} = useCanvas(ready);

  const { playgroundUI, valRng, animationToggler, setAnimationToggler, stopped, setStopped} = usePlayground({
    amount: {
        elementType: "input",
        inputType: "range",
        value: "10",
        min: "2",
        max: "30",
        step: "1",
      },
    radius: {
        elementType: "input",
        inputType: "range",
        value: "30",
        min: "10",
        max: "50",
        step: "1",
      },
    mass: {
      elementType: "input",
      inputType: "range",
      value: "1",
      min: "0.1",
      max: "100",
      step: "0.1",
    },
    trail: {
        elementType: "input",
        inputType: "range",
        value: "0.75",
        min: "0",
        max: "0.99",
        step: "0.01",
      },
  }, "Colliding Balls", true);

  useEffect(() => {
    setReady(true);
  }, []);

    const {amount: {value: amount}, radius: {value: radius}, mass: {value: mass}, trail: {value: trail}} = valRng

    const onResetAnimationHandler = () => {
        setAnimationToggler(false);
        ctx.clearRect(0, 0, size.width, size.height);
    }

    useLayoutEffect(() => {
        
        let animationFrameId;

        function animate() {
            ctx.fillStyle = `rgba(0,0,0,${1 - trail})`;
            ctx.fillRect(0, 0, size.width, size.height);
            
            circles.forEach(circle => {
                circle.update(circles, ctx, size.height, size.width);
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        if(animationToggler) {
            init(size.height, size.width, +amount, +radius, +mass);
            animate();
        } 

        if(stopped) {
            setStopped(false);
            onResetAnimationHandler();
            return;
        }
        

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [animationToggler, ctx, mass]);
    return (
        <section className={gClasses.Playground}>
            {playgroundUI}
            {canvasEl}
        </section>
    )
}

export default CollidingBalls;

