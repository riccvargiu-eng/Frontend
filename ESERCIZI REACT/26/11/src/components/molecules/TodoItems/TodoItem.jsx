import { useState } from "react";
import Button from "../../atoms/Button/Button";
import "./TodoItems.css"
import Input from "../../atoms/Input/Input";

function TodoItem() {
const [count, setCount] = useState(0);
count = value;
  return (
    <div>
     
  <h1 className="todo-item">To Do List</h1>
  <Button onClick ={() => setCount(count + 1)}>Add</Button>
 <Button onClick={() => setCount(0)}>Reset</Button>
</div>
  )
}

export default TodoItem;
