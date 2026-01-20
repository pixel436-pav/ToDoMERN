import React from 'react'
import { useEffect, useState } from 'react';
import {
  getAllTodo,
  createTodo,
  deleteTodo,
  toggleTodo,
} from './api.js';

function App(){

  const[todos, setTodos]= useState([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => {

    fetchTodos();

  },[])

  const fetchTodos = async () => {
    try {
      const res = await getAllTodo();
      setTodos(res.data);
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false)
    }
  }

}


