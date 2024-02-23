export const Task = (props) => {
  return (
    <div className="task-item-container">
      <div className="task-item">
        <h2 style={{ color: props.completed ? "green" : "blue" }} id="task">
          {props.taskName}
        </h2>
        <button
          className="done-btn"
          onClick={() => props.completeTask(props.id)}
        >
          Done
        </button>
        <button id="delete-btn" onClick={() => props.deleteTask(props.id)}>
          X
        </button>
      </div>
    </div>
  );
};
