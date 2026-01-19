import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001

//Middleware to Parse JSON
app.use(express.json());

app.listen(PORT,() => {
    
    console.log(`App is listening of PORT ${PORT}`)


})

app.get('/',(req,res) => {

    res.status(200).json({message : `Server Started Running`})

})
