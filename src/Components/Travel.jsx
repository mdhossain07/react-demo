import { useState } from "react";

const Travel = () => {
  const snacks = [
    { id: 0, name: "Chocobar" },
    { id: 1, name: "IceCream" },
    { id: 2, name: "CupCake" },
  ];

  const [items, setItems] = useState(snacks);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleSnack = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>Your Favourite Snacks:</h2>
      <ul>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
              alignItems: "center",
            }}
          >
            <li>{item.name}</li>
            <button onClick={() => handleSnack(item)}>Choose Me</button>
          </div>
        ))}
      </ul>
      <h3>You choose: {selectedItem.name}</h3>
    </div>
  );
};

export default Travel;
