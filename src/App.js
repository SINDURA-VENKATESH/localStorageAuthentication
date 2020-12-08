import React from "react";
import "./style.css";

export default function App() {
  let [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count++);
  };

React.useEffect(() => {
  const interval = setInterval(() => {
    setCount(0);
  }, 5000);
  return () => clearInterval(interval);
}, []);


  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}> Increment </button>
    </div>
  );
}
