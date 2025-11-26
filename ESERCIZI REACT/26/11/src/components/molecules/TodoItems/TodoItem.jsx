import { useState } from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import "./TodoItems.css";

function TodoItem() {
  const [count, setCount] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1 className="todo-item">To Do List</h1>
      <Input value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} />
      <Button onClick={() => setCount(count + 1)}>Add</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  );
}

export default TodoItem;
