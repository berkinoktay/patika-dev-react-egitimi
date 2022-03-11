import Todo from './todo';
import { useState } from 'react';
function List({ todos, completeTodo, deleteTodo, allToggleCompleted }) {
  const [isToggleAllChecked, setIsToggleChecked] = useState(true);
  return (
    <div className="main">
      <input
        className="toggle-all"
        type="checkbox"
        id="toggle-all"
        onChange={() =>
          allToggleCompleted(isToggleAllChecked, setIsToggleChecked)
        }
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={todo.id}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
