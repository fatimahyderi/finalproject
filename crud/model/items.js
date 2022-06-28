import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    },
    imagepath: {
        type: String
    }
});

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
const itemsDB = mongoose.model('genetech_items', itemSchema);

// The alternative to the export model pattern is the export schema pattern.
const usersDB = mongoose.model('genetech_users', userSchema);

const orderSchema = new mongoose.Schema({
    totalamount: {
        type: Number
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genetech_items",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genetech_users",
        required: true
    },
    address: {
        type: Number
    },
    paymentdetails: {
        type: String
    }
});




// The alternative to the export model pattern is the export schema pattern.
const ordersDB = mongoose.model('genetech_orders', orderSchema);



export { itemsDB,  usersDB, ordersDB }