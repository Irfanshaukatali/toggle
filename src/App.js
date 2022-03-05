import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [state, setState] = useState(false)
  function toggle(){
    setState(!state)
  }
  return (
    <div>
      <h1>toggle functionality!</h1>
     {state ?'irfan':"ahmad"}
      <br/>
      <button onClick = {toggle}>toggle</button>
    </div>
  );
}
