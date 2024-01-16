import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Todos = ({ task, toggleComplete, handelDelete ,handelEdit }) => {
  return (
    <>
      <div className="Todo">
        <p
          className={`${task.isComplete ? "completed" : "incompleted"}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" onClick={()=> handelEdit(task.id) } />
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-icon"
            onClick={() => handelDelete(task.id)}
          />
        </div>
      </div>
    </>
  );
};

export default Todos;
