import * as address from "../service/address.service.js";

export const createAddress = async (req, res) => {
    try {
        const result = await address.createAddress(req.body);
        return res.status(201).json({ status: 201, data: result, message: "La direccion se ha creado exitosamente" }); 
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
        
    }
}