import {useState} from "react";
// to handle the forms in the applications, we use controlled elements ,
// to store their elements in the state of the application and not in DOM
// 3 steps   --> 1.create a peice of state

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    // function handleAddItems(item) {
    //   setItems((items) => [...items, item]);
    // }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
  
      const newItem = { description, quantity, packed: false, id: Date.now() };
      console.log(newItem);
      // handleAddItems(newItem);
      onAddItems(newItem);
  
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip ?😊</h3>
  
        <select
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item.."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <button type="submit">Add</button>
      </form>
    );
  }