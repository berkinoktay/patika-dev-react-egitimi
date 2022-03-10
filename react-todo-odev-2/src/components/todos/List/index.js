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
            key={index}
            id={index}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
