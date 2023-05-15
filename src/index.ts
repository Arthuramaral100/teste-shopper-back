import express  from "express";
import cors from "cors";
import dotenv from "dotenv"
import { productRouter } from "./router/productRouter";
import { packRouter } from "./router/packRouter";

dotenv.config()

const app = express()
const local = process.env.PORT

app.use(express.json())
app.use(cors())

app.listen(local, () =>{
    console.log(`Servidor iniciado na porta ${local}`);
})

app.use("/products", productRouter)
app.use("/packs", packRouter)