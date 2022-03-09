import { useState } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './style.css';
function Todos() {
  const [todos, setTodos] = useState(['Learn Javascript', 'Learn React']);
  return (
    <div className="todo-container">
      <Header setTodos={setTodos} todos={todos} />
      <List todos={todos} />
      <Footer />
    </div>
  );
}

export default Todos;
