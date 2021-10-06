
function TodoList({todos}) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {todos.map(({ title, complete}, index) => (
            <TodoItem key={index} title={title} complete={complete}/>
          )
        )}
      </ul>
    </div>
  );
}

function TodoItem({title, complete}) {
  return (
    <li className="list-group-item" >
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" checked={complete} />
        <p>{title}</p>
        <button type="button" className="btn btn-outline-primary">clear</button>
      </div>
    </li>
  );

}

export default TodoList;
