import "./FriendFilter.css";

const FriendFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="friend-filter">
      <div className="friend-filter__control">
        <label>Filter by rating</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="0">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default FriendFilter;
