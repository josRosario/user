import * as product from "../service/product.service.js";

export const createProduct = async (data) => {
    try {
        await product.createProduct(JSON.parse(data))
    } catch (error) {
        console.log(error)
    }
  /*  try {
 
        const result = await product.createProduct(JSON.parse(data));
        return res.status(201).json({ status: 201, data: result, message: "El product se ha creado exitosamente" }); 
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });        
    }*/
}

export const getProducts = async (req ,res) => {
    try {
        const result = await product.getProducts();
        return res.status(201).json({ status: 201, data: result, message: "Se han obtenido los productos exitosamente" }); 
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });        
        
    }
}