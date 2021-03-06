function Todo({ todo, completeTodo, deleteTodo }) {
  return (
    <li className={todo.isCompleted ? 'completed' : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => completeTodo(todo.id)}
          checked={todo.isCompleted}
        />
        <label>{todo.todoText}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
    </li>
  );
}

export default Todo;
