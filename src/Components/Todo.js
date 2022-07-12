import { useState } from "react";

export const Todo = () => {
  const [form, setForm] = useState({
    task: "",
    completed: false,
    time: ""
  });
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((d) => [...d, form]);
  };

  const handleToggle = (item) => {
    let idx = todos.indexOf(item);
    console.log(idx);
    todos.forEach((elem, i) => {
      if (i === idx) {
        elem.completed = !elem.completed;
      }
    });
    console.log(todos);

    setTodos((d) => [...d]);
  };

  const { task, completed, time } = form;
  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="task"
          type="text"
          placeholder="Enter your todo"
          value={task}
          onChange={handleChange}
        />
        <input id="time" type="time" value={time} onChange={handleChange} />
        <input type="submit" />
      </form>
      {todos?.map((item) => {
        return (
          <div className="list">
            {item.completed ? (
              <s>
                <h2>{item.task}</h2>
              </s>
            ) : (
              <h2>{item.task}</h2>
            )}
            {item.completed ? (
              <s>
                <h2>{item.time}</h2>
              </s>
            ) : (
              <h2>{item.time}</h2>
            )}
            <button onClick={() => handleToggle(item)}>Complete</button>
          </div>
        );
      })}
    </>
  );
};
