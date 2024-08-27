import express from "express";
import * as person from "../controller/person.controller.js";
import * as address from "../controller/address.controller.js"
import * as product from "../controller/product.controller.js"
import { authPage } from "../middlewares/middlewares.js";
import * as orden from "../controller/order.controller.js"
const router = express.Router();

router.post('/', person.createPerson);
router.post('/newAddress', authPage(),  address.createAddress);
router.post('/login', person.login);
router.put('/updateAddress/:id', address.updateAddress);
router.post('/newOrder', orden.newOrden);
router.get('/getProducts', product.getProducts)
//router.post('/addProduct', product.createProduct);

export default router