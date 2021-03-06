import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Header({ setTodos, todos }) {
  const [todotext, setTodoText] = useState('');
  const formSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: uuidv4(), todoText: todotext, isCompleted: false },
    ]);
    setTodoText('');
  };

  return (
    <div className="header">
      <form onSubmit={formSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => setTodoText(e.target.value)}
          value={todotext}
        />
      </form>
    </div>
  );
}

export default Header;
