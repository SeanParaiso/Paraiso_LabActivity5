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

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
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
      <div className="card card-white">
        <div className="card-body">
          <h1>Gawin mo to!</h1>
          <h6>mga dapat mong gawin 💗</h6>
          <Form onAddItem={handleAddItem} />{" "}
          <ul className="nav nav-pills todo-nav"></ul>
          <button className="sortBtn" onClick={sortDone}>
            <i class="bi bi-sort-down-alt"></i>
          </button>
          <button className="sortBtn" onClick={sortAlphaDown}>
            <i class="bi bi-sort-alpha-down"></i>
          </button>
          <button className="sortBtn" onClick={sortAlphaUp}>
            <i class="bi bi-sort-alpha-up-alt"></i>
          </button>
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
      </div>
      <Footer items={items} />
    </div>
  );
}

export default App;
