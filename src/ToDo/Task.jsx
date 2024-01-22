/* eslint-disable react/prop-types */
import { useState } from "react";

const Task = ({ task, onDeleteTask, onEditTask }) => {
  const [isEdit, setIsEdit] = useState(false);

  let changeField;

  if (isEdit) {
    changeField = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onEditTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    changeField = (
      <>
        {task.text}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onEditTask({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {changeField}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
