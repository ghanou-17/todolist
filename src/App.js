import TodoList from "./components/todoList";

const App = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <TodoList />
    </div>
  );
};

export default App;
