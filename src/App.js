import {useEffect} from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import * as actions from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import Home from "./containers/Home/Home";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from "./containers/Projects/Projects";
import Auth from './containers/Auth/Auth';


import "./App.css";

function App(props) {

  useEffect(() => {
    props.onCheckState();
  }, []);

  let routes = (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

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
