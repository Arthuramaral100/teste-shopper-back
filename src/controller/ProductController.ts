import {Request, Response} from "express"

export class ProductController{
    constructor(
        private productBusiness: ProductBusiness,
        private productDTO: ProductDTO
    ){}

    public getProducts = async(req:Request, res:Response) =>{
        try {
            
        } catch (error) {
            console.log(error)
        
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}