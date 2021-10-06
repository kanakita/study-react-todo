function ItemCount() {
  return (
    <div>1 item</div>
  );
}

function FilterButtons() {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">all</button>
      <button type="button" className="btn btn-primary">active</button>
      <button type="button" className="btn btn-primary">completed</button>
    </div>
  );
}

function CompleteButton() {
  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-secondary">Clear completed</button>
    </div>
  );
}

function Footer() {
  return (
    <>
      <ItemCount />
      <CompleteButton />
      <FilterButtons />
    </>
  );
}

export default Footer;
