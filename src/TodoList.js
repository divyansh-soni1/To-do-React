import React from 'react'
import "./App.css";


function TodoList(props) {
  return (

    <>
    <div className="todo_style">
   
    <i className="fa fa-times" aria-hidden="true" onClick={()=>{
        props.deleteItems(props.id)}}/>


    <li> {props.text}</li>
    </div>
    
    </>

  )
}

export default TodoList