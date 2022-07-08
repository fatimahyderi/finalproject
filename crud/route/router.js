import express from 'express'
import { homeView, order, usersdata, viewSingleProduct, categories, deleteproduct, productupdate, registeruser, findUser, orderDetails, orderData, getCategory, saveProductData, saveCategory, productView, update } from '../controller/controller.js'
const router = express.Router();

//Home route
 router.get('/', homeView);

// // Add view route
// router.get('/add', createView);

// // Update view route
// router.get('/update/:id', updateView);
 router.get('/product/:id' , viewSingleProduct);


/*================== Route API For Crud Opr  ========================*/
// router.post('/add', create);
 router.put('/updateproduct/:id', productupdate);

//Add User 
router.post('/registeruser', registeruser)
router.get('/orderdata', order);
router.get('/users', usersdata);
router.get('/category', categories);
router.post('/order', orderDetails)
router.get('/orderdata/:id',orderData)


// route for fetching CategoryData from mongoDB
router.post('/category', saveCategory);
router.get('/categoryFormData', getCategory);
router.post('/products', saveProductData);
router.get('/viewproducts', productView);
router.get('/view/:id', update)
router.get('/deleteproduct/:id', deleteproduct)

// Get Login User Data
router.get('/users/:email', findUser)
export { router };