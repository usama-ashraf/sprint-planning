import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import SprintsIndex from "../components/Sprints/SprintsIndex";
import SprintCreate from "../components/Sprints/SprintCreate";
import SprintShow from "../components/Sprints/SprintShow";
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sprints" exact component={SprintsIndex} />
      <Route path="/sprints/create" exact component={SprintCreate} />
      <Route path="/sprints/:id" exact component={SprintShow} />
    </Switch>
  </Router>
);