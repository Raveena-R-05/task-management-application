import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const API = "http://localhost:5000/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const addTask = async () => {

    if (!title) return;

    await axios.post(API, {
      title,
      status
    });

    setTitle("");
    setStatus("Pending");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Task Dashboard
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-10">

        <h2 className="text-2xl font-semibold mb-5">
          Add New Task
        </h2>

        <div className="flex gap-4 flex-wrap">

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg flex-1"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-6 rounded-lg"
          >
            Add Task
          </button>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {tasks.map((task) => (

          <div
            key={task._id}
            className="bg-white p-6 rounded-xl shadow-lg"
          >

            <h2 className="text-2xl font-bold">
              {task.title}
            </h2>

            <p className="mt-3 text-gray-600">
              Status:
            </p>

            <span className="inline-block mt-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              {task.status}
            </span>

            <div className="mt-5">

              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;