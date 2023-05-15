import express from "express";
import { ProductController } from "../controller/ProductController";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductDatabase } from "../database/ProductDatabase";
import { ProductDTO } from "../dtos/ProductDTO";
import { PackDatabase } from "../database/PackDatabase";

export const productRouter = express.Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new PackDatabase()
    ),
    new ProductDTO()
)

productRouter.get("/", productController.getProducts)
productRouter.get("/verify")
productRouter.put("/edit")