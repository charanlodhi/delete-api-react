import axios from "axios";
import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(`https://jsonplaceholder.typicode.com/posts/${tasks}`, tasks)
    // .then((response) =>{
    //     console.log(response)
    //     setTasks(tasks)
    // }).catch((error) =>{
    //     console.log(error)
    // })
    if (task.trim() === "") return; // Don't add empty tasks

    const newTask = {
      id: Date.now(), // Unique ID (using timestamp)
      task,
      description,
    };
   console.log(tasks)
    setTasks([...tasks, newTask]);
    setTask("");
    setDescription("");
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${tasks}`, tasks)
    .then((response) =>{
        console.log(response)
        setTasks(updatedTasks);
    }).catch((error) =>{
        console.log(error)
    })
    
  };

  return (
    <div className="form">
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <label data-testid="taskname">Task Name</label>
          <input type="text" value={task} onChange={handleTaskChange} />
        </div>
        <div className="formField">
          <label>Task Description</label>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit">Add Task</button>
      </form>
      <div className="taskList">
        <h2>Task List</h2>
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <h3>{task.task}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
