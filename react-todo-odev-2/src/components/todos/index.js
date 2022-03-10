import { useState } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './style.css';
function Todos() {
  const [todos, setTodos] = useState([]);

  const completeTodo = (id) => {
    // Seçilen elemanın id'si ile todoların id'si ile eşleyeşen objeyi değişkene aktarıyoruz.
    const updatedTodo = todos.find((todo) => todo.id === id);
    // Eşleşen array elemanının isCompleted verisini tam tersi ile değiştiriyoruz.
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
    // Todos state'inde dönerek yine eşleşen id'yi bulup güncellenmiş veriyi yazıyoruz.
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };
  return (
    <div className="todo-container">
      <Header setTodos={setTodos} todos={todos} />
      <List
        todos={todos}
        setTodos={setTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <Footer />
    </div>
  );
}

export default Todos;
