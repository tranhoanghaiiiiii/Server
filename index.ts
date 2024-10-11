import express from"express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRouter from "./src/routers/user"
dotenv.config();

const PORT = process.env.PORT || 3001;
const dbURL=`mongodb+srv://dbKaban:<db_password>@cluster0.nrioz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const app = express();


app.use('/auth',userRouter);

const connectDB = async () =>{
    try{
        await mongoose.connect(dbURL)
    }catch(error){
        console.log(`can not connect to db ${error}`)
    }
};
connectDB()
.then(()=>{
    app.listen(PORT,()=>
        console.log(`server is stating at http://localhost:${PORT}`)
    )
}).catch((error)=>{
    console.log(error)
})


