import React, { useState } from "react";
function Todo() {
  let count = 0;
  const [tasks, setTask] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  setTask((values) => ({ ...values, [name]:value }));
  };

  const addTask = () => {
    tasks += 1;
    return <h1>{tasks}</h1>;
  };
  return (
    <div onSubmit={addTask}>
      <label>
        Add Task
        <input value={tasks.task || ""} name="task" onChange={handleChange} />
      </label>
      <input type="submit" />
    </div>
  );
}
export default Todo;
