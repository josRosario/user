import Person from "../model/person.js";

export const createPerson = async (person) => {
    try {
        return await Person.create(person)
    } catch (error) {
         throw new Error("Hubo un error al agregar la persona", error.message)
    }
}