import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 25 }, (__, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}.
          </option>
        ))}
      </select>
      <input
        type="text"
        className="form-control add-task"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add Task..."
      />
      <span>
        <button className="addBtn">
          <i class="bi bi-plus-lg"></i>
        </button>
      </span>
    </form>
  );
}

export default Form;
