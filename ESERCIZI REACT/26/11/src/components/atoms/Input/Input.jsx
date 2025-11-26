import "./Input.css";

function Input({ value, onChange, placeholder = "Enter text here" }) {
  return <input type="text" className="custom-input" value={value} onChange={onChange} placeholder={placeholder} />;
}  
export default Input;     