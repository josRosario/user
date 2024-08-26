import Address from "../model/address.js";

export const createAddress = async (address_data) => {
    try {
        return await Address.create(address_data)
    } catch (error) {
        throw new Error(error, error.message)
    }
}

export const updateAddress = async (id, address_data) => {
    try {
        const address = await Address.findByPk(id);
        if (!address) {
            throw Error('Dirección no encontrada');
        }

        await address.update(address_data);

        return address;
    } catch (error) {
        throw Error("Hubo un error al actualizar los datos o al obtener la dirección", error);
    }
}
