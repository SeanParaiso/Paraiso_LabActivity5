import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import TodoList from "./components/TodoList";
import NavLink from "./components/NavLink";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    //function that handles the add item
    setItems((items) => [...items, item]); //this line of code updates the state by adding a new item to the existing "items" array.
  }
  return (
    <div className="container">
      <div className="card card-white">
        <div className="card-body">
          <h1>Gawin mo to!</h1>
          <h6>mga dapat mong gawin 💗</h6>
          <Form onAddItem={handleAddItem} />

          <ul className="nav nav-pills todo-nav">
            <NavLink />
          </ul>
          <TodoList items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
