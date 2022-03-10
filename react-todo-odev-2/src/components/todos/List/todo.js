import React from 'react';

function Todo({ todo, id, completeTodo, deleteTodo }) {
  return (
    <li className={todo.isCompleted ? 'completed' : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() => completeTodo(id)}
        />
        <label>{todo.todoText}</label>
        <button className="destroy" onClick={() => deleteTodo(id)}></button>
      </div>
    </li>
  );
}

export default Todo;
