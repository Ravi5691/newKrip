import React, { useState } from "react";

const TaskManagement = () => {
  const [tasks, setTasks] = useState({
    todo: [{ name: "Task 1", deadline: "01 Dec 2024", status: "Pending" }],
    inProgress: [{ name: "Task 2", deadline: "01 Dec 2024", status: "Ongoing" }],
    completed: [{ name: "Task 3", deadline: "01 Dec 2024", status: "Done" }],
  });

  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ name: "", deadline: "", status: "Pending" });

  const addTask = () => {
    setTasks({ ...tasks, todo: [...tasks.todo, newTask] });
    setShowModal(false);
    setNewTask({ name: "", deadline: "", status: "Pending" });
  };

  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold mb-6">Task Management</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Task List</h2>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          + Add New Task
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(tasks).map(([status, taskList], index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 capitalize">{status.replace("todo", "To Do List").replace("inProgress", "In Progress").replace("completed", "Completed")}</h2>
            {taskList.slice(0, 1).map((task, i) => (
              <div key={i} className="p-1">
                <div className="bg-black text-white px-4 py-1 rounded-3xl text-center mb-3">Project name</div>
                <p className="mb-2">Task name</p>
                <hr className="mb-4" />
                <hr className="mb-2" />
                <p className="text-sm flex justify-between">
                  <span>Deadline</span> <span>{task.deadline}</span>
                </p>
                <p className="text-sm">Status</p>
                <div className="w-full bg-gray-200 h-2 rounded overflow-hidden mb-2">
                  <div className="bg-green-500 h-full" style={{ width: status === "completed" ? "100%" : status === "inProgress" ? "50%" : "10%" }}></div>
                </div>
                <p className="text-sm flex justify-between">
                  <span>Attachments</span> <span className="text-green-500 cursor-pointer">View</span>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
            <input
              type="text"
              placeholder="Task Name"
              className="w-full border p-2 rounded mb-2"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
            <input
              type="date"
              className="w-full border p-2 rounded mb-2"
              value={newTask.deadline}
              onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full" onClick={addTask}>
              Add Task
            </button>
            <button className="text-red-500 mt-2 w-full" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManagement;
