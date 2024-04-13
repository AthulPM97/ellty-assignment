import "./button.css";

const Button = (props) => {
  const clickHandler = () => {
    //filter checked pages and join their names into a string
    const pageNumbers = props.pages
      ?.filter((page) => page.checked)
      .map((page) => page.name)
      .join(", ");
    alert(`Selected pages: ${pageNumbers}`);
  };
  return (
    <button className="btn" onClick={clickHandler}>
      Done
    </button>
  );
};

export default Button;
