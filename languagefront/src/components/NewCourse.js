import { useState } from "react";
import { useHistory } from "react-router";

function NewCourse() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState();
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        category,
        description,
      }),
    }).then((r) => {
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="category">category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="description">description</label>
        <textarea
          id="description"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button color="primary" type="submit"></button>

        {errors.map((err) => (
          <h1 key={err}>{err}</h1>
        ))}
      </form>
    </>
  );
}

export default NewCourse;
