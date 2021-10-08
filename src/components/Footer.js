function ItemCount({itemNum}) {
  return (
    <div>{itemNum} item</div>
  );
}

function FilterButtons({onClickFilterButton, activeFilterButtonType}) {
  function handleClick(event) {
    onClickFilterButton(event.target.value);
  }

  return (
    <div className="btn-group" role="group">
      <button type="button" className={activeFilterButtonType === 'all' ? 'btn btn-primary' : 'btn btn-secondary'} value="all" onClick={handleClick}>all</button>
      <button type="button" className={activeFilterButtonType === 'active' ? 'btn btn-primary' : 'btn btn-secondary'}  value="active" onClick={handleClick}>active</button>
      <button type="button" className={activeFilterButtonType === 'completed' ? 'btn btn-primary' : 'btn btn-secondary'}  value="completed" onClick={handleClick}>completed</button>
    </div>
  );
}

function CompleteButton({onClickDeleteCompleteAll}) {
  function handleAllDelete() {
    onClickDeleteCompleteAll();
  }
  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-secondary" onClick={handleAllDelete}>Clear completed</button>
    </div>
  );
}

function Footer({ onClickFilterButton, activeFilterButtonType, itemNum, onClickDeleteCompleteAll }) {
  return (
    <>
      <ItemCount itemNum={itemNum} />
      <CompleteButton onClickDeleteCompleteAll={onClickDeleteCompleteAll} />
      <FilterButtons onClickFilterButton={onClickFilterButton} activeFilterButtonType={activeFilterButtonType} />
    </>
  );
}

export default Footer;
