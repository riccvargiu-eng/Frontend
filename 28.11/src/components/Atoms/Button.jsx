import { useState } from "react";

function Button (children, onClick, type="button") {
const [user, setUser] = useState(null); // null = non loggato
    return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
    
    )
