// imports "useState" hook
import { useState } from "react";

// function(class) of TodoForm with passed "onSubmit" method from \.App\
function TodoForm({ onSubmit }) {
  // creates new item template with empty string
  const [newItem, setNewItem] = useState("");

  // function thats executes when clicked submit button (assigned "eventObj")
  function handleSubmit(e) {
    // prevents pushing an empty string from input
    e.preventDefault();
    // if input == empty string, nothing will happen
    if (newItem === "") return;

    // when submits, it creates new todo/new item
    onSubmit(newItem);

    setNewItem("");
  }

  return (
    // when form submitted, executes handleSubmit
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

export default TodoForm;
