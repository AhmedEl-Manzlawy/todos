import React, { useState } from 'react'

const EditTodo = ({task , handelTask}) => {
    const [value, setValue] = useState(task.task);
    const handelSubmit = (e) => {
      e.preventDefault();
      handelTask( task.id , value);
    };
    return (
      <form className="TodoForm" onSubmit={handelSubmit}>
        <h1> Add Plans</h1>
        <input
          type="text"
          value={value}
          className="todo-input"
          placeholder="Went to change  your Plan  ?"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    );
}

export default EditTodo