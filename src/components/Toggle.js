import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";
  return <button onClick={handleClick} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;
}

// My first thoughts(before reading the solution):
// function Toggle() {
//   const [state, setState]= useState("OFF");

//   function onClick(){
//       if (state === "ON") {
//         setState("OFF");
//       } else {
//         setState("ON");
//     }
//   }

//   return <button onClick={onClick}>{state}</button>;
// }

export default Toggle;
