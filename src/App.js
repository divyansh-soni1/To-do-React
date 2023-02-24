import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
const App = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (e) => {
    setInput(e.target.value);
  };

  const clicked = () => {
    setItem((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");

  };
  const deleteItems =(id) =>{
    console.log("deletd");
    setItem((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      });
    });

  };

  return (
    <>
      <div className="main-div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            value={input}
            placeholder="Add a Items"
            onChange={itemEvent}
          />
          <button onClick={clicked}>+</button>

          <ol>
            {item.map((itemval,index) => {
              return <TodoList key={index} id={index}text={itemval} deleteItems={deleteItems}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
