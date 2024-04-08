import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, onDeleteItem, onCheckedItem, onEditItem }) {
  return (
    <div className="todo-list">
      {items.map((item) => (
        <TodoItem
          todoList={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onCheckedItem={onCheckedItem}
          onEditItem={onEditItem}
        />
      ))}
    </div>
  );
}

export default TodoList;
