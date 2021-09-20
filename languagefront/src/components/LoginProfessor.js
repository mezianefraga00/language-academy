import React, { useState } from "react";
import { Redirect, Route, Router } from "react-router";
import { useHistory, BrowserRouter, withRouter } from "react-router-dom";
import Course from "./Course";
import RegisterPro from "./RegisterPro";

function LoginProfessor() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState("");
  const [register, setRegister] = useState("");
  const history = useHistory();
  console.log("dd");
  const handleSubmit = () => {
    console.log(username);
    console.log(password);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        setAccept(true);
      } else {
        console.log("r.username");
      }
    });
  };

  if (accept === true) {
    history.push("/Course");
  } else {
    console.log("hello");
  }
  const handleregister = () => {
    setRegister(true);
  };
  if (register === true) {
    return <RegisterPro />;
  }
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5"></div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="form-label" for="form3Example3">
                  Username
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-primary btn-lg"
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <button onClick={handleregister}> Register</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0"></div>

        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
export default withRouter(LoginProfessor);
