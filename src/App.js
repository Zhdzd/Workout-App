import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  //const [taskDone, setTaskDone] = useState(false);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  //add todo into todo list arr
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: todo,
      completed: false,
    };
    const newList = [...todoList, task];
    setTodoList(newList);
    setTodo("");
  };
  const deleteTask = (id) => {
    let newTodoList = todoList.filter((todos) => {
      if (todos.id === id) {
        return false;
      }
      return true;
    });
    setTodoList(newTodoList);
  };

  const completeTask = (id) => {
    const newList = todoList.map((todos) => {
      if (todos.id === id) {
        return { ...todos, completed: true };
      }
      return todos;
    });
    setTodoList(newList);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Workout App</h1>
        <div className="input-add-ctn">
          <input onChange={handleChange} value={todo} />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>
        <div className="list">
          {todoList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                completed={task.completed}
                id={task.id}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

/*
1. 
*/
