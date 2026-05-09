import { completeButton } from "../utils/styles";

export default function TodoCard({ todo, markCompleted }) {
  return (
    <div className="border-2 border-black flex flex-col items-center justify-around text-center px-2 py-4 rounded-xl box-shadow-black bg-gray-300">
      <h2 className="text-2xl font-bold">{todo.todo}</h2>
      <p>ID: {todo.id}</p>
      <p>User: {todo.userId}</p>
      <p className={todo.completed ? "text-green-600" : "text-red-700"}>
        {todo.completed ? "Complete" : "Incomplete"}
      </p>
      <button
        className={completeButton.join(" ")}
        onClick={() => {
          markCompleted(todo.id);
        }}
      >
        Complete!
      </button>
    </div>
  );
}
