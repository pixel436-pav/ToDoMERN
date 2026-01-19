import express from 'express'
import { Router } from 'express'
import Todo from '../models/ToDo.js';

const router = express.Router();


router.post('/todo',async (req,res) => {
  try {
    const { text , completed } = req.body;
    if (!text) {
      return res.status(400).json({message: `text is required`})
    }
    // to create a new todo 
    const newTodo = new Todo({
      text : text,
      completed : completed || false // default to false if not provided
    })
    const savedTodo = await   newTodo.save();

    res.status(201).json({
      message : "todo created succesfully",
      todo: savedTodo
    })
    
  } catch (error) {
    res.status(500).json({message : error.message})
  }

});

router.get('/todo',async (req,res) => {
    
   try {
     const getTodo = await Todo.find()

     res.status(200).json({
        message : `ToDos fetched successfully`,
        todos : getTodo

     });
    
   } catch (error) {
     res.status(500).json({message : error.message})
   }

})


export default router;