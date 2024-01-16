import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    // 
    value ?addTodo(value) : alert("You should add plan first")
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <h1> Add Plans</h1>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="What is your Plan Today ?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>

    </form>
  );
};

export default TodoForm;
