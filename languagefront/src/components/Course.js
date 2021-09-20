import { Redirect } from "react-router";
import Signup from "./Signup";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Course({ accept }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (!accept) {
      return <Redirect to="/signup" />;
    }

    fetch("/courses")
      .then((r) => r.json())
      .then(setCourses);
  }, []);

  return (
    <>
      {courses.length > 0 ? (
        courses.map((course) => (
          <Course key={course.id}>
            <h2>{course.name}</h2>
            <p>
              {course.description}
              &nbsp;·&nbsp;
              <cite>By {course.professor.username}</cite>
            </p>
            <h2>{course.category}</h2>
          </Course>
        ))
      ) : (
        <>
          <h2>No courses Found</h2>
          <button as={Link} to="/new">
            Make a New Recipe
          </button>
        </>
      )}
    </>
  );
}
