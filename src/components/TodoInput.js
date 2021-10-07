function TodoInput({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmit( formData.get('todoTitle') );
  }
  return (
    <form onSubmit={handleSubmit} name="addForm">
      <input type="text" className="form-control" name="todoTitle" />
    </form>
  );
}

export default TodoInput;
