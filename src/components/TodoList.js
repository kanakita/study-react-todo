function TodoList({todos, onClickCheck, onClickDelete}) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {todos.map(({ title, complete, id}) => (
            <TodoItem key={id} title={title} complete={complete} id={id} onClickCheck={onClickCheck} onClickDelete={onClickDelete}/>
          )
        )}
      </ul>
    </div>
  );
}

function TodoItem({title, complete, id, onClickCheck, onClickDelete}) {
  function handleChange() {
    onClickCheck(id, ! complete);
  }

  function handleDelete() {
    onClickDelete(id);
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
