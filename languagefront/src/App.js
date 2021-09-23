import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Course from "./components/Course";
import NewCourse from "./components/NewCourse";
import Signup from "./components/Signup";
import Home from "./components/Home";
import RegisterStud from "./components/RegisterStu";
import RegisterPro from "./components/RegisterPro";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route
          exact
          path="/course"
          component={() => <Course accept={true} />}
        />
        <Route exact path="/new" component={() => <NewCourse />} />

        <Route exact path="/registerstu" component={() => <RegisterStud />} />
        <Route exact path="/registerpro" component={() => <RegisterPro />} />
      </Switch>
    </Router>
  );
}

export default App;
