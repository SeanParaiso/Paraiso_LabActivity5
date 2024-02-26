/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function TodoItem({ todoList }) {
  return (
    <div className="todo-item">
      <div className="checker">
        <span className="span">
          <input className="checkbox" type="checkbox" />
        </span>
      </div>
      <button className="closeBtn">
        {" "}
        <i className="bi bi-x"></i>
      </button>
      <span>{todoList.quantity + " " + todoList.name}</span>
      <a href="" className="float-right remove-todo-item"></a>
    </div>
  );
}

export default TodoItem;
