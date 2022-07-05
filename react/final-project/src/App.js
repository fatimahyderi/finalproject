/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
//import OwlCarousel from 'react-owl-carousel';
import { Routes, Route } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import Header from './components/Common/Header/Header';
import Discount from './components/Common/Discount-Secction/Discount';
import Welcome from './components/Main/Welcome-Section/Welcome';
import TopCategory from './components/Main/Top-Category/TopCategory';
import NewArrival from './components/Main/New Arrival/NewArrival';
import OfferArea from './components/Main/Offer Area/OfferArea';
import Testimonials from './components/Main/Testimonials/Testimonials';
import Footer from './components/Common/Footer/Footer';
import Product from './components/Products/Product'
import Main from "./components/Main/Main";
import ProductDesrip from "./components/Product Des/ProductDesrip";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'
import Registeruser from "./components/Registeruser/Registeruser";
import Login from "./components/Login/Login";
import { useNavigate } from "react-router-dom";
import Order from "./components/OrderPage/Order";
import Admin from "./components/AdminPanel/Admin";
import ProductForm from "./components/ProductForms/ProductForm";
import SingleProductTable from "./components/ProductForms/SingleProductTable";
import CategoryForm from "./components/ProductForms/CategoryForm";
import EditProductForm from "./components/ProductForms/EditProductForm";

export const ShoppingCartContext = React.createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
function App() {
	const nav = useNavigate();
	// Getting products from database
	const [product, getProduct] = useState([]);
	const getProductData = () => {
		axios.get('http://localhost:8080/items')
			.then(function (response) {
				// handle success
				getProduct(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}

	useEffect(() => {
		getProductData()
	}, []);


	// Cart system
	const [cart, setCart] = useState(cartFromLocalStorage);
	const onAdd = (product) => {
		const exist = cart.find((x) => x._id === product._id);
		if(exist) {
			setCart(cart.map((x) =>
			x._id === product._id ? {...exist, qty: exist.qty + 1} : x))
		} else {
			setCart([...cart, { ...product, qty: 1}])
		}
		// setCart([...cart, product]);
		// console.log(product)
	}
	const onRemove = (product) => {
		const exist = cart.find((x) => x._id === product._id);
		if(exist.qty === 1) {
			setCart(cart.filter((x) => x._id !== product._id));
		} else {
			setCart(
				cart.map((x) =>
				x._id === product._id ? { ...exist, qty: exist.qty - 1} :x)
			)
		}
        //setCart(cart.filter((productInCart) => productInCart !== product))
    }

	const clearCart = () => {
		setCart(cart.length = [])
	}

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart])

	const cartState = useState([]);

	const [verifiedLoginUser, setVerifiedLoginUser] = useState()
	const [loginUser, setLoginUser] = useState({
        email: "", password: "" 
    });

    let name, value;

    const handleInputs = (e) => {
        
        name = e.target.name;
        value = e.target.value;

        setLoginUser({ ...loginUser, [name]:value});

    }

	const LoginData =  (e) => {
        e.preventDefault()
        console.log(loginUser)
        
            const userEmail = loginUser.email
            axios.get(`http://localhost:8080/items/users/${userEmail}`)
                .then(function (response) {
					if(loginUser.email === 'admin12345@gmail.com'){
						if(loginUser.password === response.data.password){
							nav("/secretpanel/admin")
						}
						else{
							alert("Admin Password is not correct")
						}
					}else{
						if(loginUser.password === response.data.password){
						
							nav("/main")
							
						}else{
							alert('Password not correct')
						}

					}
                    console.log(response.data.password)
                    // handle success
                    
                    
                }).catch(function (error) {
                    // handle error
                    alert("email not found");
                })
        
        // let formdata = new FormData(e.target);
        // const url = "http://localhost:8080/items/registeruser"
        // fetch(url, {
        //     method: "POST",
        //     body: new URLSearchParams(formdata)
        // }).then(res => res.json()).then(response => {
        //     console.log(response);
        // }).catch(function (response) {
        //     //handle error
        //     console.log(response);
        //   });

        
        
        
        
         
        // if(data.status === 422 || !data) {
        //     window.alert("invalid Registration");
        //     console.log("invalid registration")
        // } else {
        //     window.alert("Registration succesful");
        //     console.log("Registration successful");

            
        // }
    }

	return (
		<>
			<ShoppingCartContext.Provider value={cartState}>
				<Routes>
					<Route path='/' element={<Registeruser/>}/>
					<Route path='/login' element={<Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />}/>
					<Route path='/main' element={<Main product={product} onAdd={onAdd} cart={cart} onRemove={onRemove} />} />
					<Route path="/shop" element={<Product product={product} onAdd={onAdd} cart={cart} />} /> 

					 <Route path="/productdetails/:id" element={<ProductDesrip onAdd={onAdd} cart={cart} />} />
					 <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cart={cart} clearCart={clearCart} />} />
					 <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
					 <Route path="/order/:id" element={<Order/>} /> 
					 <Route path="/secretpanel/admin" element={<Admin/>} />
					 <Route path="/secretpanel/product-form" element={<ProductForm/>} />
					 <Route exact path="/secretpanel/view/:id"  element= {<SingleProductTable />} />
        			<Route exact path="/secretpanel/edit/:id"  element= {<EditProductForm />} />
        			<Route path="/secretpanel/category-form"  element= {<CategoryForm />} />
				</Routes>
			</ShoppingCartContext.Provider>
		</>
	);
}

export default App;
