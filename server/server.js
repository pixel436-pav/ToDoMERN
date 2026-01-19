import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Todo from './models/ToDo.js'
import router from './router/todo.router.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001
const mongoDbURL = process.env.MongoDbURL

//Middleware to Parse JSON
app.use(express.json());

mongoose.connect(mongoDbURL)
    .then(() => {
      console.log(`MongoDb is Connected`)
    })
    .catch((error) => {
      console.error(error)
    }
    )




app.listen(PORT,() => {
    
    console.log(`App is listening of PORT ${PORT}`)


})

app.use('/api',router)

app.get('/',(req,res) => {

    res.status(200).json({message : `Server Started Running`})

})
