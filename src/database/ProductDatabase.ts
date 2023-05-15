import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{
    public static PRODUCTS_TABLE = "products"
    public static PACKS_TABLE = "packs"

    public getAllProducts = async () =>{
        const productDB = await BaseDatabase
        .connection(ProductDatabase.PRODUCTS_TABLE)
        .select()

        return productDB
    }
}