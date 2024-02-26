import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import TodoList from "./components/TodoList";
import NavLink from "./components/NavLink";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <div className="card card-white">
        <div className="card-body">
          <h1>Gawin mo to</h1>
          <h6>mga dapat mong gawin haha</h6>
          <Form />

          <ul className="nav nav-pills todo-nav">
            <NavLink />
          </ul>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
