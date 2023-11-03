import { useCallback, useMemo, useState } from "react";
import { TasksContext } from "../../utils/contexts/taskContext";
import useTasks from "../../utils/hooks/useTasks";
import CompletedTasks from "../completedTasks";

const TodoList = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((task) => task.completed);
    if (filter === "notCompleted")
      return tasks.filter((task) => !task.completed);
    return tasks;
  }, [filter, tasks]);

  const handleAddTask = useCallback(() => {
    addTask(taskInput);
    setTaskInput("");
  }, [taskInput, addTask]);

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Todo List
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <label
          htmlFor="task"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Task
        </label>
        <div className="flex gap-2">
          <input
            id="task"
            value={taskInput}
            placeholder="Ex: Do the dishs..."
            onChange={(e) => setTaskInput(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
          <button
            onClick={handleAddTask}
            className="flex justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Add
          </button>
        </div>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-end gap-2">
          <label htmlFor="filters">Filter by</label>
          <select
            value={filter}
            id="filters"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notCompleted">Not Completed</option>
          </select>
        </div>
        <ul>
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
              <button onClick={() => toggleTask(task.id)}>Toggle</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <CompletedTasks />
      </div>
    </TasksContext.Provider>
  );
};

export default TodoList;
