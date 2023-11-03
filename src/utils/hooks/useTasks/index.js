import { useCallback, useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text) => {
    if (text.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text, completed: false },
      ]);
    }
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
  };
};

export default useTasks;
