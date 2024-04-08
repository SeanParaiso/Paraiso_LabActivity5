/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function TodoItem({ todoList, onDeleteItem, onCheckedItem, onEditItem }) {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(todoList.name);
  const [newQuantity, setNewQuantity] = useState(todoList.quantity);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setNewQuantity(+event.target.value);
  };

  const handleSave = () => {
    setEditMode(false);
    onEditItem(todoList.id, newName, newQuantity);
  };

  return (
    <div className="todoItem">
      <div className="checker">
        <span className="span">
          <input
            type="checkbox"
            className="checkbox"
            onClick={() => onCheckedItem(todoList.id)}
          ></input>
        </span>
      </div>
      <button className="deletebtn" onClick={() => onDeleteItem(todoList.id)}>
        <i class="bi bi-trash"></i>
      </button>
      <button className="editBtn" onClick={() => onEditItem(todoList.id)}>
        <i class="bi bi-pencil-square" onClick={() => setEditMode(true)}></i>
      </button>

      {editMode ? (
        <div className="editMode">
          <select value={newQuantity} onChange={handleQuantityChange}>
            {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={newName}
            onChange={handleInputChange}
            autoFocus
          />
          <button className="saveBtn" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <span>{todoList.quantity + " -  " + todoList.name}</span>
      )}
    </div>
  );
}

export default TodoItem;
