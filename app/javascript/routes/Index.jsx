import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sprint from "../components/Sprint";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Sprint} />
    </Switch>
  </Router>
);