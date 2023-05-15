export interface ProductDB {
    code: number,
    name: string,
    cost_price: number,
    sales_price: number
}

export interface ProductModel {
    code: number,
    name: string,
    costPrice: number,
    salesPrice: number
}

export interface PackDB {
    id: number ,
    pack_id: number ,
    product_id: number,
    qty: number
}