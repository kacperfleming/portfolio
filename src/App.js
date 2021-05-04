import {useEffect} from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import * as actions from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import Home from "./pages/Home/Home";
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Auth from './pages/Auth/Auth';
import Logout from './pages/Auth/Logout';


import "./App.css";

function App(props) {
  const {onCheckState} = props;
  
  useEffect(() => {
    onCheckState();
  }, [onCheckState]);

  let routes = (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/auth" component={Auth} />
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  if(props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckState: () => dispatch(actions.checkAuthState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
