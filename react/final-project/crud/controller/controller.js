import { usersDB, ordersDB, CategoryDB, ProductsDB } from '../model/items.js'
import mongoose from "mongoose";


/*================== Render Route Views ========================*/
const createView = (req, res) => {
    res.render('../views/adduser.ejs')
}
// const updateView = (req, res) => {
    
//     const userData = itemsDB.findOne({
//             _id: req.params.id
//         });
//         console.log(userData)
//     res.render('../views/updateuser', { userData })
// }

/*================== Route API For Crud Opr  ========================*/
// const create = (req, res) => {
//     const item = new itemsDB({
//         name: req.body.name,
//         color: req.body.color,
//         brand: req.body.brand,
//         price: req.body.price,
//         imagepath: req.body.imagepath
//     })
//     item.save(item).then(data => {
//         //res.send(data)
//         res.redirect('/items');
//     });
// }

const viewSingleProduct = (req, res) => {
    console.log('running')
    console.log(req.params.id);
    ProductsDB.findById(req.params.id).
        then(userData => {
            //res.render('index', { userData })
            res.send(userData)
        });
        //console.log(proData)
     
}

const update = (req, res) => {
    const id = req.params.id;
    ProductsDB.findByIdAndUpdate(id, req.body).
        then(userData => {
            res.send(userData);
//             res.render('../views/updateuser', { userData })
      });
 }

 const productupdate = (req, res) => {
   
    const id = req.params.id;
    console.log(`${req.body.p_name}`)
    console.log(id)
    ProductsDB.updateOne({_id:id}, { $set:
        {
          name: req.body.p_name,
          price: req.body.p_price,
          image: req.body.p_image,
          size: req.body.p_size,
          quantity: req.body.p_quantity,
          category: req.body.p_category
        }
     },(err,result) => {
        res.send(result);
     })
//         .then(userData => {
//             console.log(`1stupdat ${userData}`)
//             res.send(userData);
// //             res.render('../views/updateuser', { userData })
//       });
 }

const homeView = (req, res) => {
    ProductsDB.find().
        then(userData => {
            //res.render('index', { userData })
            res.send(userData)
        });
}

const order = (req, res) => {
    ordersDB.find().
        then(userData => {
            //res.render('index', { userData })
            res.send(userData)
        });
}

const usersdata = (req, res) => {
    usersDB.find().
        then(userData => {
            //res.render('index', { userData })
            res.send(userData)
        });
}

const categories = (req, res) => {
    CategoryDB.find().
        then(userData => {
            //res.render('index', { userData })
            res.send(userData)
        });
}

const registeruser = (req, res) => {
    console.log(req.body.email)
    usersDB.findOne({email:req.body.email}, function(err, user) 
    {
       if (user) {
        console.log('already registered')
        res.send("email already registered")
       } else {
        const reguser = new usersDB({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: req.body.password
        })
        reguser.save(reguser).then(data => {
            res.send(data)
            //res.redirect('/items');
        });
       } 
    })
    
}

const deleteproduct = (req, res) => {
    const id = req.params.id;
    ProductsDB.findByIdAndDelete(id)
    .then(userData => {
            
        res.send(userData);

        return res;
//             res.render('../views/updateuser', { userData })
  });
}

const orderDetails = (req, res) => {
    console.log(req.body.product)
    
    const product = (req.body.product).split(',');
    
    console.log(typeof(product))
    
    // const ids =  product.map((key,doc)=>{ _id = doc._id});;
    
    // // let product = []; 
    //  //product.push(Object.assign({}, req.body.product));
    //  console.log(product)
    //     // for(let elem of req.body.product) //array is your array variable, i suppose
    //     //     product.push({elem}); 
    const order = new ordersDB({
        totalamount: req.body.totalamount,
        address: req.body.address,
        paymentdetails: req.body.paymentdetails,
        product:product,
        firstname:req.body.firstname        

        
    })
    order.save(order).then(data => {
        
        console.log(data)
        res.send(data)
    //     ordersDB.findById(data._id).populate('product').then(p => console.log(p))
    // .catch(error => console.log(error));
        
        //res.redirect('/items');
    });
}

const orderData = (req,res) => {
    console.log(req.params.id)
    ordersDB.findById(req.params.id).populate('product').then(p => res.send(p))
}

const findUser = (req, res) => {
    console.log('running')
    console.log(req.params.email);
    usersDB.findOne({email:req.params.email}).
        then(userData => {
            //res.render('index', { userData })
            res.send(userData)
        });
        //console.log(proData)
}

// geting CategoryData on webpage
const getCategory = (req, res) => {
    CategoryDB.find()
    .then(categoryData => {
    res.send(categoryData);
    //res.render('../views/form-add.ejs', { categoryData })
    });
}

// fetcting data from React ProductForm and saving in mongoDB
const saveProductData = async (req, res) => {

    const {p_name, p_price, p_category, p_image, p_size, p_quantity} = req.body;

    const product = await new ProductsDB({
        name: p_name,
        price: p_price,
        category: p_category,
        image: p_image,
        size: p_size,
        quantity: p_quantity
    })
    product.save(product).then(data => {
       // console.log(data);
        res.send(data);
    
    });
}

const saveCategory = async (req, res) => {
    const {c_name,c_description} = req.body;

    const category = await new CategoryDB( { name: c_name, cat_description:c_description} )
    category.save(category).then(data => {
        //console.log(data);
        res.send(data);
    
    });
}

const productView = (req, res) => {
    ProductsDB.find()    
    .then(productData => {
        res.send(productData);
           // res.render('index', { userData })
        });
}


export {  homeView, order, categories, usersdata, viewSingleProduct, deleteproduct, productupdate, update, registeruser, findUser, orderDetails, orderData, getCategory, saveProductData, saveCategory, productView}