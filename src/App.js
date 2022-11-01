// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {

  const [input,setInput] = useState("");
  function inputHandler(char){
      setInput(input+char);


  }
  return (
    <div className="App">
      <h1>CALCULATOR BY ABHISHEK</h1>
      <section className="input-div">
        <input placeholder="Enter input" onChange={e=>setInput(e.target.value)} type="text" value={input} name="" id="" />
        <button onClick={()=>setInput("")}>C</button>
      </section>
      <section>
        <button onClick={()=>inputHandler("1")}>1</button>
        <button onClick={()=>inputHandler("2")}>2</button>
        <button onClick={()=>inputHandler("3")}>3</button>
        <button onClick={()=>inputHandler("/")}>/</button>
      </section>
      <section>
        <button onClick={()=>inputHandler("4")}>4</button>
        <button onClick={()=>inputHandler("5")}>5</button>
        <button onClick={()=>inputHandler("6")}>6</button>
        <button onClick={()=>inputHandler("-")}>-</button>
      </section>
      <section>
        <button onClick={()=>inputHandler("7")}>7</button>
        <button onClick={()=>inputHandler("8")}>8</button>
        <button onClick={()=>inputHandler("9")}>9</button>
        <button onClick={()=>inputHandler("+")}>+</button>
      </section>
      <section>
        <button onClick={()=>inputHandler(".")}>.</button>
        <button onClick={()=>inputHandler("0")}>0</button>
        <button onClick={()=>setInput(eval(input))}>=</button>
        <button onClick={()=>inputHandler("*")}>*</button>
      </section>
    </div>
  );
}

export default App;
