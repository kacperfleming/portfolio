import React, { useRef, useLayoutEffect } from "react";

import Skills from '../../components/UI/Skills/Skills';
import Background from '../../components/UI/Canvas/CanvasConnectedParticlesBG/CanvasConnectedParticlesBG';

import classes from "./AboutMe.module.css";



function AboutMe(props) {


  return (
    <div className={classes.AboutMe}>
      <Background />
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
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
