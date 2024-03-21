import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import TodoList from "./components/TodoList";
import NavLink from "./components/NavLink";
import Form from "./components/Form";
import { useState } from "react";
import React from "react";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    //function that handles the add item
    setItems((items) => [...items, item]); //this line of code updates the state by adding a new item to the existing "items" array.
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
  return (
    <div className="container">
      <div className="card card-white">
        <div className="card-body">
          <h1>Gawin mo to!</h1>
          <h6>mga dapat mong gawin 💗</h6>
          <Form onAddItem={handleAddItem} />{" "}
          {/* onAddItem is a prop that allows the Form component to access the handleAddItem function in this App component */}
          <ul className="nav nav-pills todo-nav">
            <NavLink />
          </ul>
          <TodoList
            items={items}
            onDeleteItem={handleDeleteItem}
            onCheckedItem={handleCheckedItems}
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
