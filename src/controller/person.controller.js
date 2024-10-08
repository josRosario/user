import * as person from "../service/person.service.js";
export const createPerson = async (req, res) => {
    try {
        const result = await person.createPerson(req.body);
     
        return res.status(201).json({ status: 201, data: result, message: "La direccion se ha creado exitosamente" }); 
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
        
    }
}

export const login = async (req, res) => {
    try {
        const result = await person.login(req.body);
        return res.status(201).json({ status: 201, data: result, message: "Ha iniciado sesion" }); 

    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });        
    }
}