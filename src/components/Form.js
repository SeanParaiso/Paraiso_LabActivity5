import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(10);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return; //pag walang name edi di maga-accept
    const newItem = { name, quantity, isChecked: false, id: Date.now };
    console.log(newItem);
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
        <button className="addBtn">Sige</button>
      </span>
    </form>
  );
}

export default Form;
