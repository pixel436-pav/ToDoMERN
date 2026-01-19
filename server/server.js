import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


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

app.post('/',async (req,res) => {
  try {

    
  } catch (error) {
    res.status(500).json({message : error.message})
  }
}
)

app.listen(PORT,() => {
    
    console.log(`App is listening of PORT ${PORT}`)


})

app.get('/',(req,res) => {

    res.status(200).json({message : `Server Started Running`})

})
