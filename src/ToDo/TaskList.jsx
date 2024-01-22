/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
