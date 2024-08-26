import * as product from "../service/product.service.js";
import kafkaConfig from "../config/kafkaConfig.js";

export const createProduct = async (req, res) => {
    try {
        const result = await product.createProduct(req.body);
        return res.status(201).json({ status: 201, data: result, message: "El product se ha creado exitosamente" }); 
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });        
    }
}

