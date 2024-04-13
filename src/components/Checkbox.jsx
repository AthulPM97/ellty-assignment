import "./checkbox.css";

const Checkbox = (props) => {
  //checkbox select handler
  const checkedHandler = (e) => {
    //selectAllPages or selectPages called based on selection
    if (props && props.displayText == "All pages") {
      if (e.target.checked) {
        props.selectAllPages(true);
      } else {
        props.selectAllPages(false);
      }
    } else {
      props.selectPages(props.page);
    }
  };
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox"
        onChange={checkedHandler}
        checked={props.checked}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
