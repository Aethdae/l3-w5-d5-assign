import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoControl from "./components/TodoControl";
import TodoCard from "./components/TodoCard";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [ascending, setAscending] = useState(true);

  async function getTodos() {
    try {
      const res = await fetch(`https://dummyjson.com/todos?limit=50`);
      const data = await res.json();
      setTodos(data.todos);
    } catch (error) {
      console.error(error);
    }
  }

  const filtered = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incomplete") {
      return !todo.completed;
    }
  });

  const sorted = [...filtered].sort((a, b) =>
    ascending ? a.id - b.id : b.id - a.id,
  );

  function setCompleted(id) {
    const updateTodo = (todos.filter((todo) => todo.id === id)[0].completed =
      true);
    setTodos([...todos]);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <TodoControl
        setFilter={setFilter}
        ascending={ascending}
        setAscending={setAscending}
      />
      <div className="flex flex-col lg:grid lg:grid-cols-6 gap-2 py-4 bg-amber-300">
        {sorted.map((todo) => (
          <TodoCard key={todo.id} todo={todo} markCompleted={setCompleted} />
        ))}
      </div>
    </div>
  );
}
