import classes from './CollidingBalls.module.css';
import {useRef, useLayoutEffect} from 'react';

let ih;
let iw;

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

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.mass = 1;
        this.color = colors[randomNumber(0, 2)];
    }


    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update = (circles, ctx) => {

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


function init() {
    circles = [];
    for(let i=0; i<10; i++) {
        const radius = 30;
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
        circles.push(new Circle(x, y, radius));
    }
}






function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}


function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}

const CollidingBalls = props => {
    const canv = useRef();

    useLayoutEffect(() => {
        const canvas = canv.current;
        const ctx = canvas.getContext('2d');

        const resizeHandler = () => {
            ih = canvas.getBoundingClientRect().height;
            iw = canvas.getBoundingClientRect().width;

            canvas.height = ih;
            canvas.width = iw;
        }
        resizeHandler();

        window.addEventListener('resize', resizeHandler);

        let animationFrameId;

        function animate() {
            ctx.clearRect(0, 0, iw, ih);

            circles.forEach(circle => {
                circle.update(circles, ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        }
        init();
        animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);
    return <canvas className={classes.Canvas} ref={canv} />
}

export default CollidingBalls;

