import { useState } from 'react';

function Header({ setTodos, todos }) {
  const [todotext, setTodoText] = useState('');
  const formSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todotext]);
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
