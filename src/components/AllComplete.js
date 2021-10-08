import {useState} from "react";

function AllComplete({onChangeCompleteAll}) {
  const [checkStatus, setCheckStatus] = useState(false);

  function handleChange() {
    setCheckStatus( ! checkStatus );
    onChangeCompleteAll(! checkStatus);
  }

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" onChange={handleChange} />toggle complete
    </div>
  );
}

export default AllComplete;
