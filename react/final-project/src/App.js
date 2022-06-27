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

export const ShoppingCartContext = React.createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
function App() {

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


	return (
		<>
			<ShoppingCartContext.Provider value={cartState}>
				<Routes>
					<Route path='/' element={<Registeruser/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/main' element={<Main product={product} onAdd={onAdd} cart={cart} />} />
					<Route path="/shop" element={<Product product={product} onAdd={onAdd} cart={cart} />} /> 

					 <Route path="/productdetails/:id" element={<ProductDesrip onAdd={onAdd} cart={cart} />} />
					 <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cart={cart} clearCart={clearCart} />} />
					 <Route path="/checkout" element={<Checkout cart={cart}/>} /> 
				</Routes>
			</ShoppingCartContext.Provider>
		</>
	);
}

export default App;
