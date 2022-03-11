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
    // Eşleşen elemanın dışındaki tüm objeleri alıp state güncelledik
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const allToggleCompleted = (isToggleAllChecked, setIsToggleChecked) => {
    if (isToggleAllChecked) {
      // const updatedTodo = todos.filter((todo) => todo.isCompleted === false).map(todo => todo.isCompleted = true);
      setTodos(
        todos.map((todo) => {
          return { id: todo.id, todoText: todo.todoText, isCompleted: true };
        })
      );
      console.log(todos);
      setIsToggleChecked(false);
    } else {
      setTodos(
        todos.map((todo) => {
          return { id: todo.id, todoText: todo.todoText, isCompleted: false };
        })
      );
      setIsToggleChecked(true);
    }
  };

  return (
    <div className="todo-container">
      <Header setTodos={setTodos} todos={todos} />
      <List
        todos={todos}
        setTodos={setTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        allToggleCompleted={allToggleCompleted}
      />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todos;
