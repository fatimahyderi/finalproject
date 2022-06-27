import { itemsDB, usersDB } from '../model/items.js'
import mongoose from "mongoose";


/*================== Render Route Views ========================*/
const createView = (req, res) => {
    res.render('../views/adduser.ejs')
}
const updateView = (req, res) => {
    
    const userData = itemsDB.findOne({
            _id: req.params.id
        });
        console.log(userData)
    res.render('../views/updateuser', { userData })
}

/*================== Route API For Crud Opr  ========================*/
const create = (req, res) => {
    const item = new itemsDB({
        name: req.body.name,
        color: req.body.color,
        brand: req.body.brand,
        price: req.body.price,
        imagepath: req.body.imagepath
    })
    item.save(item).then(data => {
        //res.send(data)
        res.redirect('/items');
    });
}

const viewSingleProduct = (req, res) => {
    console.log('running')
    console.log(req.params.id);
    itemsDB.findById(req.params.id).
        then(userData => {
            //res.render('index', { userData })
            res.send(userData)
        });
        //console.log(proData)
     
}

const update = (req, res) => {
    const id = req.params.id;
    itemsDB.findByIdAndUpdate(id, req.body).
        then(userData => {
            //res.send(data);
            res.render('../views/updateuser', { userData })
        });
}

const homeView = (req, res) => {
    itemsDB.find().
        then(userData => {
            //res.render('index', { userData })
            res.send(userData)
        });
}

const registeruser = (req, res) => {
    console.log(req.body)
    
    const user = new usersDB({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password
    })
    user.save(user).then(data => {
        res.send(data)
        //res.redirect('/items');
    });
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

export { create, update, createView, homeView, updateView , viewSingleProduct, registeruser, findUser}