import { useState } from 'react';

function List({ todos }) {
  const completeTodo = (e) => {
    e.target.parentElement.parentElement.classList.toggle('completed');
    console.log(e.target.parentElement.parentElement);
  };
  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" id="toggle-all" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={completeTodo}
              />
              <label>{todo}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
