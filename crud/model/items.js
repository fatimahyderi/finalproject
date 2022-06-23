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

// The alternative to the export model pattern is the export schema pattern.
const itemsDB = mongoose.model('genetech_items', itemSchema);

export { itemsDB }