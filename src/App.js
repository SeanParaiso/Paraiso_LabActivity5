import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useState } from "react";
import React from "react";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function sortAlphaDown() {
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortedItems);
  }

  function sortAlphaUp() {
    const sortedItems = [...items].sort((a, b) => b.name.localeCompare(a.name));
    setItems(sortedItems);
  }

  function sortDone() {
    const sortedItems = [...items].sort((a, b) => {
      if (a.isChecked && !b.isChecked) return 1;
      if (!a.isChecked && b.isChecked) return -1;
      return 0;
    });
    setItems(sortedItems);
  }

  function handleEditItem(id, newName, newQuantity) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, name: newName, quantity: newQuantity }
          : item
      )
    );
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1>To Do list</h1>

          <Form onAddItem={handleAddItem} />
          <ul className="nav nav-pills todo-nav"></ul>
          <div className="sorts">
            <button className="sort" onClick={sortDone}>
              Sort Completed
            </button>
            <button className="sort" onClick={sortAlphaDown}>
              Sort A to Z
            </button>
            <button className="sort" onClick={sortAlphaUp}>
              Sort Z to A
            </button>
          </div>

          <TodoList
            items={items}
            onDeleteItem={handleDeleteItem}
            onCheckedItem={handleCheckedItems}
            onEditItem={handleEditItem}
          />
          <button className="clearBtn" onClick={handleClearList}>
            Clear
          </button>
        </div>
        <Footer items={items} />
      </div>
    </div>
  );
}

export default App;
