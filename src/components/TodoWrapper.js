import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";
import EditTodo from "./EditTodo";
uuidv4();
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "task : todo";

  const setTodosAndSave = (newTodo) => {
    setTodos(newTodo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodo));
  };
  const loadTodos = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handelAddTodo = (todo) => {
    setTodosAndSave([
      ...todos,
      { id: uuidv4(), task: todo, isEdit: false, isComplete: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodosAndSave(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const handelDelete = (id) => {
    setTodosAndSave(todos.filter((todo) => todo.id !== id));
  };

  const handelEdit = (id)=>{
    setTodosAndSave(todos.map(todo=> todo.id === id ? {...todo , isEdit : !todo.isEdit}:todo))
  }

  const handelTask =( id , task   )=>{
    setTodosAndSave(todos.map(todo => todo.id === id ? {...todo , task , isEdit:!todo.isEdit} : todo))
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={handelAddTodo} />
      {todos.map((todo, idx) => {
        return todo.isEdit ? (
          <EditTodo task={todo}  handelTask={handelTask} key={idx}/>
        ) : (
          <Todos
            key={idx}
            task={todo}
            toggleComplete={toggleComplete}
            handelDelete={handelDelete}
            handelEdit={handelEdit}
          />
        );
      })}
    </div>
  );
};

export default TodoWrapper;
