import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [first, setfirst] = useState(1);
  const [input, setinput] = useState();

  useEffect(() => {
    // fetch requests
    document.title = input
    console.log("re-render-once")
    const incrementer = setInterval(()=>{
      
    },[])
  }, [input]);

  console.log("re-render");
  return (
    <>
      <h1 className="App">My App in state = {first}</h1>
      <h2>{input}</h2>
      <input type="text" onChange={(e)=> setinput(e.target.value) } />
      <button onClick={() => setfirst(first + 1)}>increment</button>
    </>
  );
}

export default App;
