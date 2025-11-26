import "./Button.css";

function Button({ onClick, children, variant }) {
  return (
    <button className="custom-button" onClick={onClick} children={children}>
      {variant}
    </button>
  );
}
export default Button;
