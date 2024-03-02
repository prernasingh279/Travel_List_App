import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  //moving up state
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handlePack(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleDeleteList() {
    const confirmed = window.confirm("Are you sure you want to delete ?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onPacked={handlePack}
        onDeleteList={handleDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}




// lift state up to common parent

// need to store data --> does the data change in future ---> yes
//===> can it be made from exiisting state ==> yes ==> should it re render ==>
// NO ==> useRef
