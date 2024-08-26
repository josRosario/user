import db from "../config/connection.js";
import * as sequelize from "sequelize";
import Address from "./address.js";

const Person = db.define("persons", {
    id:{
        type: sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:sequelize.DataTypes.STRING
    },
    last_name:{
        type:sequelize.DataTypes.STRING
    },
    phone:{
        type:sequelize.DataTypes.STRING
    },
    email:{
        type:sequelize.DataTypes.STRING
    },
    password:{
        type:sequelize.DataTypes.STRING
    },
    enabled:{
        type:sequelize.DataTypes.BOOLEAN,
        defaultValue:true
    }
}) 

Person.hasOne(Address, {
    foreignKey:"person_id",
    sourceKey:"id"
});

Address.belongsTo(Person, {
    foreignKey:"person_id",
    targetKey:"id"
})

export default Person;