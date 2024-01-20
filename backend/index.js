import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import "dotenv/config"
import userRouter from './routes/user.js'
import cookieParser from "cookie-parser";
import emailRouter from './routes/emailsend.js'

const app = express()
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

app.get("/test", (req,res)=>{
    res.json({message:"Hello World"})
})

mongoose.connect('mongodb+srv://Thisara:Thisara@cluster0.dyk5pox.mongodb.net/?retryWrites=true&w=majority')

app.use('/user',userRouter)
app.use('/user', emailRouter)

app.listen(8000,()=>{
    console.log("Server Running on 8000");
})