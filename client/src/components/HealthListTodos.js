import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const HealthListTodos = () => {
  const [todos, setTodos] = useState([]);

  // Delete todo function
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://backend-cq55.onrender.com/todos/health/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("https://backend-cq55.onrender.com/todos/health");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table table-bordered table-hover mt-3">
        <thead className="thead-dark">
          <tr className="table-warning">
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id} className="table-info">
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} behavior="health" />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default HealthListTodos;
