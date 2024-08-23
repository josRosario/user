import Address from "../model/address.js";

export const createAddress = async (address_data) => {
    try {
        return await Address.create(address_data)
    } catch (error) {
        throw new Error("Hubo un error al agregar la direccion", error.message)
    }
}