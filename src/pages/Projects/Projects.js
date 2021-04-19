import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import FibonacciFlower from './GenerativeArt/FibonacciFlower/FibonacciFlower';

import classes from "./Projects.module.css";

const projects = (props) => {
  let routes = (
    <Switch>
      {/* <Route path="/generative-art" />
            <Route path="/pages" />
            <Route path="/others" /> */}
      <Route
        path={`${props.match.url}/fibonacci-flower`}
        component={FibonacciFlower}
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
