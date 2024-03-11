import React from "react";
import TodoItem from "./TodoItem";

// const item = [
//   { id: 1, quantity: "1", name: "Umiyak", isChecked: false },
//   { id: 2, quantity: "2", name: "Humagulgol", isChecked: false },
//   { id: 3, quantity: "3", name: "Magwala", isChecked: false },
//   { id: 4, quantity: "4", name: "Magreklamo", isChecked: false },
//   { id: 5, quantity: "5", name: "Magmaktol", isChecked: false },
// ];

function TodoList({ items, onDeleteItem }) {
  return (
    <div className="todo-list">
      {items.map((item) => (
        <TodoItem todoList={item} key={item.id} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
}

export default TodoList;
