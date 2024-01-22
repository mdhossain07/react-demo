import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "./data";

const Todo = () => {
  const [tasks, setTasks] = useState(initialTasks);

  let taskId = tasks.length;

  const handleAddTask = (text) => {
    const newTask = [
      ...tasks,
      {
        id: taskId,
        text: text,
        done: false,
      },
    ];
    setTasks(newTask);
  };

  const handleEditTask = (task) => {
    const updateTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(updateTask);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
};

export default Todo;
