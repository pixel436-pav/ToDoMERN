
import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const todoSchema = new Schema({
    text : String,
    completed : Boolean,
},{timestamps:true});

const todos = mongoose.model('Todo', todoSchema);

export default todos;
