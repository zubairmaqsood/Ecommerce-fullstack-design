import express,{json} from "express"
const server = express()
const port = 3000
import cors from "cors"
import "dotenv/config";
import "./config/mongooseConnection.js"
import cookieParser from "cookie-parser"
import productRouter from "./routes/productRouter.js"

server.use(cookieParser())
server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}))
server.use(json())

server.use("/product",productRouter)

server.listen(port,()=>{
    console.log("Exapmle server is running on port "+port)
})