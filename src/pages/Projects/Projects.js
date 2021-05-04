import { Route, Switch, Redirect } from "react-router-dom";

import AsyncComponent from '../../hoc/asyncComponent/asyncComponent';
import ProjectsList from "./ProjectsList/ProjectsList";

import classes from "./Projects.module.css";

const AsyncFibonacciFlower = AsyncComponent(() => {
  return import("./GenerativeArt/FibonacciFlower/FibonacciFlower");
})

const AsyncParticleBuiltImage = AsyncComponent(() => {
  return import("./GenerativeArt/ParticleBuiltImage/ParticleBuildImage");
})

const AsyncWave = AsyncComponent(() => {
  return import("./GenerativeArt/Wave/Wave");
})

const AsyncCollidingBalls = AsyncComponent(() => {
  return import("./GenerativeArt/CollidingBalls/CollidingBalls");
})

const projects = (props) => {
  let routes = (
    <Switch>
      {/* <Route path="/generative-art" />
            <Route path="/pages" />
            <Route path="/others" /> */}
      <Route
        path={`${props.match.url}/fibonacci-flower`}
        component={AsyncFibonacciFlower}
      />

      <Route
        path={`${props.match.url}/particle-built-image`}
        component={AsyncParticleBuiltImage}
      />

      <Route
        path={`${props.match.url}/wave`}
        component={AsyncWave}
      />

      <Route
        path={`${props.match.url}/colliding-balls`}
        component={AsyncCollidingBalls}
      />

      <Route
        path={`${props.match.url}/projects-list`}
        component={ProjectsList}
      />
      <Redirect to={`${props.match.url}/projects-list`} />
    </Switch>
  );

  return <div className={classes.Projects}>{routes}</div>;
};

export default projects;
