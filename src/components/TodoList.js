function TodoList({todos, onClickCheck, onClickDelete}) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {todos.map(({ title, complete}, index) => (
            <TodoItem key={index} title={title} complete={complete} index={index} onClickCheck={onClickCheck} onClickDelete={onClickDelete}/>
          )
        )}
      </ul>
    </div>
  );
}

function TodoItem({title, complete, index, onClickCheck, onClickDelete}) {
  function handleChange() {
    onClickCheck(index, ! complete);
  }

  function handleDelete() {
    onClickDelete(index);
  }
  return (
    <li className="list-group-item" >
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" checked={complete} onChange={handleChange}  />
        <p>{title}</p>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={handleDelete}>delete</button>
      </div>
    </li>
  );

}

export default TodoList;
