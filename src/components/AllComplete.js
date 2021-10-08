import {useState} from "react";

function AllComplete({onChangeCompleteAll, todos}) {
  const [checkStatus, setCheckStatus] = useState(false);

  function handleChange() {
    setCheckStatus( ! checkStatus );
    todos.map(function (todo) {
      todo.complete = ! checkStatus;
    })
    onChangeCompleteAll();
  }

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" onChange={handleChange} />toggle complete
    </div>
  );
}

export default AllComplete;
