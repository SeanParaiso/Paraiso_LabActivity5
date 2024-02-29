import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState(""); //we can only change the value of the name using the setter (setName)
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //without this, nagrereload yung page pag pinindot mo yung submit button

    //form validation
    if (!name) return; //pag walang name edi di maga-accept
    const newItem = { name, quantity, isChecked: false, id: Date.now }; //nandito an yung new added item
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 50 }, (__, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="form-control add-task"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Task..."
      />
      <span>
        <button className="addBtn">Add</button>
      </span>
    </form>
  );
}

export default Form;
