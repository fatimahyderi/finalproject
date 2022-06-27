import express from 'express'
import { create, update, createView, homeView, updateView , viewSingleProduct, registeruser, findUser } from '../controller/controller.js'
const router = express.Router();

//Home route
router.get('/', homeView);

// Add view route
router.get('/add', createView);

// Update view route
router.get('/update/:id', updateView);
router.get('/product/:id' , viewSingleProduct);


/*================== Route API For Crud Opr  ========================*/
router.post('/add', create);
router.put('/update/:id', update);

//Add User 
router.post('/registeruser', registeruser)

// Get Login User Data
router.get('/users/:email', findUser)
export { router };