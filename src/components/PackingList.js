import React from "react";

function PackingList({ items, onDelete, onUpdate }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              packingItem={item}
              key={item.id}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }


  function Item({ packingItem, onDelete, onUpdate }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={packingItem.packed}
          onChange={() => onUpdate(packingItem.id)}
          style={{ marginRight: "10px" }}
        />
        
        
        <span className={packingItem.packed ? "packed" : ""} style={{ flex: 1 }}>
          {packingItem.description} ({packingItem.quantity})
        </span>
        <button onClick={() => onDelete(packingItem.id)} style = {{color: "white"}}>Delete</button>
      </li >
    );
  }

  export default PackingList;