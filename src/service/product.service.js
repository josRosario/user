import Product from "../model/product.js";


export const createProduct = async (address_data) => {
    try {
        return await Product.create(address_data)
    } catch (error) {
        throw new Error("Hubo un error al agregar la direccion", error.message)
    }
}
