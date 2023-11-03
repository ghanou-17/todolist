import React from "react";
import { render, screen } from "@testing-library/react";
import { TasksContext } from "../../utils/contexts/taskContext";
import CompletedTasks from "./index";

describe("CompletedTasks", () => {
  const renderWithTasksContext = (taskList) => {
    return render(
      <TasksContext.Provider value={{ tasks: taskList }}>
        <CompletedTasks />
      </TasksContext.Provider>,
    );
  };

  test("it should render no tasks when there are no completed tasks", () => {
    renderWithTasksContext([{ id: 1, text: "Task 1", completed: false }]);
    expect(screen.queryByText("Task 1")).toBeNull();
  });

  test("it should render completed tasks", () => {
    const tasks = [
      { id: 1, text: "Task 1", completed: false },
      { id: 2, text: "Task 2", completed: true },
      { id: 3, text: "Task 3", completed: true },
    ];
    renderWithTasksContext(tasks);
    expect(screen.getByText("Task 2")).not.toBeNull();
    expect(screen.getByText("Task 3")).not.toBeNull();
  });

  test("it should not render incomplete tasks", () => {
    const tasks = [
      { id: 1, text: "Task 1", completed: false },
      { id: 2, text: "Task 2", completed: true },
    ];
    renderWithTasksContext(tasks);
    expect(screen.queryByText("Task 1")).toBeNull();
  });

  test("it should match snapshot with completed tasks", () => {
    const tasks = [
      { id: 1, text: "Task 1", completed: true },
      { id: 2, text: "Task 2", completed: true },
    ];
    const { asFragment } = renderWithTasksContext(tasks);
    expect(asFragment()).toMatchSnapshot();
  });
});
