import { useState } from "react";
import Logo from "./Logo.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
import Form from "./Form.js";


function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItems} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        onUpdate={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
