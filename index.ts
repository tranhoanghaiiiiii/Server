import express from"express"
import dotenv from "dotenv"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const dbURL=`mongodb+srv://dbKaban:<db_password>@cluster0.nrioz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
app.listen(PORT,()=>
    console.log(`server is stating at http://localhost:${PORT}`)
)