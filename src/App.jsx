import React , { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
        
        {/* Input Field */}
        <div className="flex">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            +
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <button
                className="text-red-500"
                onClick={() => deleteTask(task.id)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        {/* No Tasks Message */}
        {tasks.length === 0 && (
          <p className="text-center text-gray-400 mt-4">No tasks yet!</p>
        )}
      </div>
    </div>
  );
};

export default App;
