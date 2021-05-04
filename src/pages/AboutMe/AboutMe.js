import Skills from './Skills/Skills';
import Background from '../../components/UI/Canvas/CanvasConnectedParticlesBG/CanvasConnectedParticlesBG';

import classes from "./AboutMe.module.css";



function AboutMe(props) {


  return (
    <section className={classes.AboutMe}>
      <Background />
      <div className={classes.Content}>
        <article className={classes.Info}>
          <h1>Hello World! I'm Kacper</h1>
          <p style={{ textAlign: "center" }}>
            I'm junior Web Developer and IT in Business student
          </p>
          <br />
          <p style={{ textAlign: "center" }}>
            As a person intrested in Web Development, I'm eager to develop
            skills related to the following technologies
          </p>
        </article>
        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
