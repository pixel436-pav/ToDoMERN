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

router.get('/todo', async (req,res) => {
  try {
    const getTodo = await Todo.find()
    res.status(200).json({message:`Fetch Successful`,todos : getTodo})
  } catch (error) {
    res.status(500).json({message : error.message})
  }
}
);

  
router.delete('/todo/:id', async (req,res) => {

  try {
    const { id } = req.params
    const deleteTodo = await Todo.findByIdAndDelete(id)

    if (!deleteTodo) {
      return res.status(404).json({message: `Todo not found`})
      
    }

    res.status(200).json({
      message: `ToDo Deleted successfully`
    })
  } catch (error) {
    res.status(500).json({message : error.message})
  }

});

router.put('/todo/:id',async (req,res) => {
  try {
    const { id } = req.params
    const { text, completed } = req.body
    const updateTodo = await Todo.findByIdAndUpdate(id,
        {text,completed},
        {new:true});
    if (!updateTodo) {
      return res.send(404).json({message : `Todo Not Found`})
    }
    
    res.status(200).json({
      message:'todo updated successfully',
      todos : updateTodo
    })

  } catch (error) {
    res.send(500).json({message : error.message})
  }
});

router.get('/todo/:id',async (req,res) => {

    try {
      const { id } = req.params
      const findTodoById = await Todo.findById(id)
      if(!findTodoById){
        return res.status(404).json({message : `Todo not Find , Id might be invalid`})
      }
      res.status(200).json({
        todos : findTodoById
      })
      
    } catch (error) {
      res.status(500).json({message : error.message})

    }
      
    

});

router.patch('/todo/:id/toggle',async (req,res) => {

  try {

    const { id } = req.params
    const toggleTodo = await  Todo.findById(id);
    if(!toggleTodo){
      return res.status(404).json({message:`Todo not Found Check your id`})
    }
    toggleTodo.completed = !toggleTodo.completed
    await toggleTodo.save();
    res.status(200).json({message:`toggled todo`, toggleTodo})

  } catch (error) {
    res.status(500).json({message: error.message})
  }

});




export default router;