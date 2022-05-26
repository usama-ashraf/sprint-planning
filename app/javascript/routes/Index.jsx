import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Sprints from "../components/Sprints";
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sprints" exact component={Sprints} />
    </Switch>
  </Router>
);