import Todo from './todo';
function List({ todos, completeTodo, deleteTodo }) {
  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" id="toggle-all" />
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
