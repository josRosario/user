import Person from "../model/person.js";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

export const createPerson = async (person) => {
    try {
        const objectPerson = {
            name: person.name,
            last_name: person.last_name,
            phone: person.phone,
            email: person.email,
            password: await argon2.hash(person.password)
        }

        return await Person.create(objectPerson)
    } catch (error) {
        throw new Error("Hubo un error al agregar la persona", error.message)
    }
}

export const login = async (person_data) => {
    try {
        const person = await Person.findOne({
            where: {
                email: person_data.email
            }
        })
        if (person == null) throw Error("Hubo un error al intentar iniciar session", error);
        let password = "";

        if (person) {
            password = await argon2.verify(person.dataValues.password, person_data.password)
        };

        if (password) {
            const token = jwt.sign(
                {
                    id: person.dataValues.id
                },
                ' "thllos@3kdkdkd8dd"'
            )
            return token
        } else {
            throw Error("Hubo un error al intentar iniciar session", error);
        }

    } catch (error) {
        throw Error("Hubo un error al intentar iniciar session", error);
    }
}