export interface GetAllproductsInputDTO{
    q: string,
    token: string
}

export interface UpdateInputDTO{
    code: number,
    sales_price: number
}

export class ProductDTO {
    getProductsInput = (q:string, token: string):GetAllproductsInputDTO=>{
        const result:GetAllproductsInputDTO = {
        q,
        token
        }
    return result
    }

    updateInputProduct = (code: number, sales_price: number):UpdateInputDTO =>{
        const result: UpdateInputDTO={
            code,
            sales_price
        }
        return result
    }
}