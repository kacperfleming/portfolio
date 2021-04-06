import { Route, Switch, Redirect } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import Home from "./containers/Home/Home";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from "./containers/Projects/Projects";


import "./App.css";

function App() {
  let routes = (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/about-me" component={AboutMe} />
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

export default App;
