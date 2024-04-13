import Checkbox from "./Checkbox";
import "./listoption.css";

const Listoption = (props) => {
  return (
    <div className="listoption">
      <span className="option-text">{props.displayText}</span>
      <div className="checkbox-container">
        <Checkbox
          checked={props.checked}
          displayText={props.displayText}
          selectAllPages={props.selectAllPages}
          selectPages={props.selectPages}
          page={props.page ? props.page : null}
        />
      </div>
    </div>
  );
};

export default Listoption;
