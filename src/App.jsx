import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task) {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-md mx-auto bg-white p-5 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={addTodo}
          >
            Add Task
          </button>
        </div>
        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`p-2 flex justify-between items-center ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              <span onClick={() => toggleComplete(todo.id)}>
                {todo.task}
              </span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
