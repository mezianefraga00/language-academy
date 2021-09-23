import { Redirect } from "react-router";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Course({ accept }) {
  console.log(accept);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses")
      .then((response) => response.json())
      .then((listmembers) => {
        setCourses(listmembers);
      });
  }, []);

  console.log(courses);
  const handledelete = (id) => {
    fetch("/destroy?id=" + id, {
      method: "DELETE",
    });
  };

  return courses.map((course) => (
    <div>
      <h1>course{course.id}</h1>
      <h5 className="card-title" key={course.id}>
        {course.name}
      </h5>
      <h5 className="card-title" key={course.id}>
        {course.category}
      </h5>
      <h5 className="card-title" key={course.id}>
        {course.description}
      </h5>
      <button onClick={handledelete(course.id)}>Delete</button>
    </div>
  ));
}
