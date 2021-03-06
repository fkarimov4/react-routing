import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("Farrukh");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Fill out your info or else</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
