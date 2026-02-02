import React from 'react'
import { useState, useEffect } from 'react';
import { getAllTodo, createTodo, updateTodo, toggleTodo, getTodoById, deleteTodo } from './api.js'

function App ( ){ 
    const [todos,setTodos] = useState([]);
const [newTodo,setNewTodo] = useState(''); // here we are just getting text input from the user , but not any JSON object 
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);

// Fetch Todos
useEffect(()=>{
  fetchTodos();
},[])

const fetchTodos = async () =>{

  try {
    setLoading(true);
    const response = await getAllTodo();

    console.log('Response:', response); // ← Add this
    console.log('Type:', typeof response); // ← Add this
    console.log('Is Array?', Array.isArray(response)); // ← Add this

    setTodos(response.todos||[])
    setError(null)


  } catch (error) {
    setError('failed to fetch todos')
    console.error('Error',error)
    
  } finally{
    setLoading(false)
  } 
}

  // Toggle Complete status
const handleToggle = async (id) => {

  try {
    await toggleTodo(id)

    setTodos(todos.map(todo => {
      return todo._id === id ? {...todo,completed : !todo.completed} : todo
    }))

  } catch (error) {
    console.error('Error Message: ', error)
    fetchTodos(); // this will refresh on error
  }
  
}


return (

  <div>
    <button onClick={fetchTodos}>retry</button>
    {todos.length === 0? ( <p>No Todos Yet -Add Your first One</p> ):( <ul>{todos.map(todo=> ( 
      <li key={todo._id} ><input type="checkbox" checked= {todo.completed || false } onChange={()=> handleToggle(todo._id)} /> <span> {todo.text} </span> </li> ) 
      )}</ul> )}

  </div>

)

} 


export default App;