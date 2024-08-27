import kafkaConfig from "../config/kafkaConfig.js";
import * as order from "../service/order.service.js"
const kafka = new kafkaConfig();
export const newOrden = async (req, res) => {
    try {
        const result = await order.newOrder(req.body);
        const message = [
            {key:'key', value: JSON.stringify(result)}
        ]
        kafka.prodece("new-orden", message);
     
        return res.status(201).json({ status: 201, data: result, message: "La orden se ha creado exitosamente" }); 
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
        
    }
}
