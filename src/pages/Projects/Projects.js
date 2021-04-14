import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

import './Projects.css';

const projects = props => {

    let routes = (
        <Switch>
            {/* <Route path="/generative-art" />
            <Route path="/pages" />
            <Route path="/others" /> */}
            <Route path={`${props.match.url}/projects-list`} component={ProjectsList} />
            <Redirect to={`${props.match.url}/projects-list`} />
        </Switch>
    );


    return (
    <div className="Projects">
        <h1>Projects</h1>
        {routes}
    </div>
    );
}

export default projects;