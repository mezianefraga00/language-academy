import React, { useState } from "react";
import LoginProfessor from "./LoginProfessor";
import LoginStudent from "./LoginStudent";

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
      {choice === "professor" ? <LoginProfessor /> : null}
      {choice === "student" ? <LoginStudent /> : null}
    </div>
  );
}
