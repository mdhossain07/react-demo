/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
