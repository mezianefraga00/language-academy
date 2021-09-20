import React, { useState } from "react";
import LoginProfessor from "./LoginProfessor";
import LoginStudent from "./LoginStudent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Course from "./Course";
import NewCourse from "./NewCourse";
import Signup from "./Signup";
import "../App.css";

export default function Home() {
  const [choice, setChoice] = useState("");
  return (
    <div>
      <img className="logo" src="/title.png" alt="home page image"></img>

      <img className="img" src="/homepage.jpg" alt="home page image"></img>
      <div className="login">
        <p> Would you like to sign-in as student or professor ?</p>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setChoice("professor")}
        >
          professor
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setChoice("student")}
        >
          student
        </button>
      </div>
      {choice === "professor" ? (
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginProfessor} />
            <Route
              exact
              path="/Course"
              component={() => <Course accept={true} />}
            />
            <Route path="/new">
              <NewCourse />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      ) : null}
      {choice === "student" ? (
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginStudent} />
            <Route
              exact
              path="/Course"
              component={() => <Course accept={true} />}
            />
          </Switch>
        </Router>
      ) : null}
    </div>
  );
}
