import mongoose from "mongoose";

//Category Schema & Model
const categorySchema = new mongoose.Schema({
    name: {
        type: String
    } , 
    cat_description: {
        type: String
    } 
});

const CategoryDB = mongoose.model('Categorie', categorySchema);
// const itemSchema = new mongoose.Schema({
//     name: {
//         type: String
//     },
//     color: {
//         type: String
//     },
//     brand: {
//         type: String
//     },
//     price: {
//         type: Number
//     },
//     imagepath: {
//         type: String
//     }
// });
const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    size: String,
    quantity: Number,
    category:  {type: mongoose.Schema.Types.String, ref: "Categorie"}
    //category:  [{type: Schema.Types.ObjectId, ref: "Categorie"}]
});

// The alternative to the export model pattern is the export schema pattern.


const userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    phonenumber: {
        type: Number
    },
    password: {
        type: String
    }
});

// The alternative to the export model pattern is the export schema pattern.
// const itemsDB = mongoose.model('genetech_items', itemSchema);

// The alternative to the export model pattern is the export schema pattern.
const usersDB = mongoose.model('genetech_users', userSchema);

const orderSchema = new mongoose.Schema({
    totalamount: {
        type: Number
    },
    product:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }],


    firstname: {
        type: String

    },
    address: {
        type: String
    },
    
});




// The alternative to the export model pattern is the export schema pattern.
const ordersDB = mongoose.model('genetech_orders', orderSchema);

const ProductsDB = mongoose.model('Products', productsSchema);

export { ProductsDB, CategoryDB, usersDB, ordersDB }
