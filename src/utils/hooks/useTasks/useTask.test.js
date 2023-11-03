import { renderHook } from "@testing-library/react";
import useTasks from ".";
import { act } from "react-dom/test-utils";

describe("testing the useTask hook", () => {
  localStorage.setItem(
    "tasks",
    JSON.stringify([{ id: 1699007050637, text: "qdcqdc", completed: false }]),
  );

  test("check if the hook can get tasks from localStorage", () => {
    const { result } = renderHook(() => useTasks());
    expect(result.current.tasks.length).toBe(1);
  });

  test("check if we can add tasks using the hook", () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask("qdcqdc");
    });
    expect(result.current.tasks.length).toBe(2);
  });

  test("check if the hook can toggle task state", () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.toggleTask(1699007050637);
    });
    expect(
      result.current.tasks.find((e) => e.id === 1699007050637).completed,
    ).toBeTruthy();
  });

  test("check if the hook can delete tasks", () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.deleteTask(1699007050637);
    });
    expect(
      result.current.tasks.find((e) => e.id === 1699007050637),
    ).toBeUndefined();
  });
});
