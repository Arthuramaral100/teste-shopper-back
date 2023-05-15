import { PackDatabase } from "../database/PackDatabase";
import { ProductDatabase } from "../database/ProductDatabase";

export class ProductBusiness{
    constructor(
        private productDatabase: ProductDatabase,
        private packDatabase: PackDatabase
    ){}

    public getProducts = async ()=>{
        
    }
}