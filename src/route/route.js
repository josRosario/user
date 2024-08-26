import express from "express";
import * as person from "../controller/person.controller.js";
import * as address from "../controller/address.controller.js"


const router = express.Router();

router.post('/', person.createPerson);
router.post('/newAddress', address.createAddress);
router.post('/login', person.login)

export default router