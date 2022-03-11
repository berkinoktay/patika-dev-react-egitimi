import { useState, useEffect } from 'react';
function Footer({ todos, setTodos }) {
  const [unComplete, setUnComplete] = useState();
  useEffect(() => {
    setUnComplete(todos.filter((todo) => todo.isCompleted === false).length);
  }, [todos]);
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{unComplete}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a className="selected">All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() =>
          setTodos(
            todos.map((todo) => {
              return {
                id: todo.id,
                todoText: todo.todoText,
                isCompleted: false,
              };
            })
          )
        }
      >
        Clear completed
      </button>
    </div>
  );
}

export default Footer;
