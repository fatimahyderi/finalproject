/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
//import OwlCarousel from 'react-owl-carousel';
import { Routes, Route } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
import AdminOrder from "./components/AdminOrder/AdminOrder";
import AdminUser from "./components/AdminUsers/AdminUser";


export const ShoppingCartContext = React.createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
function App() {
	const nav = useNavigate();

	//Register User in Database
	const [registeruser, setRegisterUser] = useState({
		email: "", password: "", checkpassword: "", firstname: "", lastname: "", phonenumber: ""
	});

	let regname, regvalue;

	const handleRegisterInputs = (e) => {

		regname = e.target.name;
		regvalue = e.target.value;

		setRegisterUser({ ...registeruser, [regname]: regvalue });

	}


	const RegisterPostData = (e) => {
		e.preventDefault()
		console.log(registeruser)
		const { firstname, lastname, email, password, checkpassword, phonenumber } = registeruser
		if (firstname && lastname && phonenumber && email && password && (password === checkpassword)) {
			let formdata = new FormData(e.target);
			const url = "http://localhost:8080/items/registeruser"
			fetch(url, {
				method: "POST",
				body: new URLSearchParams(formdata)
			}).then(res => res.json()).then(response => {
				setRegisterUser({})
				nav("/")
				console.log(response);
			}).catch(function (response) {
				//handle error
				alert('Email already registered');
			});
		} else {
			alert("Password not match")
		}



	}
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

	//Getting Orders from database

	const [order, getOrder] = useState([]);
	const getOrderData = () => {
		axios.get('http://localhost:8080/items/orderdata')
			.then(function (response) {
				// handle success
				getOrder(response.data);
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
		getOrderData()
	}, []);

	//Getting Users from database

	const [users, getUsers] = useState([]);
	const getUsersData = () => {
		axios.get('http://localhost:8080/items/users')
			.then(function (response) {
				// handle success
				getUsers(response.data);
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
		getUsersData()
	}, []);

	//Getting Users from database

	const [categories, getCategories] = useState([]);
	const getCategoriesData = () => {
		axios.get('http://localhost:8080/items/category')
			.then(function (response) {
				// handle success
				getCategories(response.data);
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
		getCategoriesData()
	}, []);

	// Cart system
	const [cart, setCart] = useState(cartFromLocalStorage);
	const onAdd = (product) => {
		const exist = cart.find((x) => x._id === product._id);
		if (exist) {
			setCart(cart.map((x) =>
				x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x))
		} else {
			setCart([...cart, { ...product, qty: 1 }])
		}
		// setCart([...cart, product]);
		// console.log(product)
	}
	const onRemove = (product) => {
		const exist = cart.find((x) => x._id === product._id);
		if (exist.qty === 1) {
			setCart(cart.filter((x) => x._id !== product._id));
		} else {
			setCart(
				cart.map((x) =>
					x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x)
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

	const [loginUser, setLoginUser] = useState({
		email: "", password: ""
	});
	const [user, setuser] = useState({
		email: "", firstname: "", lastname: "", phonenumber: ""
	})

	let name, value;

	const handleInputs = (e) => {

		name = e.target.name;
		value = e.target.value;

		setLoginUser({ ...loginUser, [name]: value });

	}
	const [admin,setAdmin] = useState();
	const adminsignout = () => {
		setAdmin(null)
		nav("/")
	}
	const LoginData = (e) => {
		e.preventDefault()
		console.log(loginUser)

		const userEmail = loginUser.email
		axios.get(`http://localhost:8080/items/users/${userEmail}`)
			.then(function (response) {
				if (loginUser.email === 'admin12345@gmail.com') {
					if (loginUser.password === response.data.password) {
						setAdmin("admin12345@gmail.com")
						nav("/secretpanel/admin")
					}
					else {
						alert("Admin Password is not correct")
					}
				} else {
					if (loginUser.password === response.data.password) {
						setuser(response)
						nav("/main")

					} else {
						alert('Password not correct')
					}

				}
				console.log(response.data.password)
				// handle success


			}).catch(function (error) {
				// handle error
				alert("email not found");
			})

			
	}

	return (
		<>
			<ShoppingCartContext.Provider value={cartState}>
				<Routes>
					<Route path='/' element={<Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />} />
					<Route path='/register' element={<Registeruser registeruser={registeruser} handleRegisterInputs={handleRegisterInputs} RegisterPostData={RegisterPostData} />} />
					<Route path='/main' element={<Main user={user} product={product} onAdd={onAdd} cart={cart} onRemove={onRemove} />} />
					<Route path="/shop" element={<Product product={product} onAdd={onAdd} cart={cart} onRemove={onRemove} />} />
					<Route path="/productdetails/:id" element={<ProductDesrip onAdd={onAdd} cart={cart} />} />
					<Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cart={cart} clearCart={clearCart} />} />
					<Route path="/checkout" element={<Checkout user={user} cart={cart} clearCart={clearCart} />} />
					<Route path="/order/:id" element={<Order />} />
					<Route path="/secretpanel/admin" element={admin? <Admin adminsignout={adminsignout} product={product} order={order} users={users} categories={categories} /> : <Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />} />
					<Route path="/secretpanel/product-form" element={admin? <ProductForm /> : <Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />} />
					<Route exact path="/secretpanel/view/:id" element={admin? <SingleProductTable/> : <Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />} />
					<Route exact path="/secretpanel/edit/:id" element={admin? <EditProductForm /> : <Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />} />
					<Route path="/secretpanel/category-form" element={admin? <CategoryForm categories={categories}/> : <Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />}  />
					<Route path="/secretpanel/orders" element={admin? <AdminOrder order={order} /> : <Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />} />
					<Route path="/secretpanel/users" element={admin? <AdminUser users={users} /> : <Login loginUser={loginUser} handleInputs={handleInputs} LoginData={LoginData} />} />
				</Routes>
			</ShoppingCartContext.Provider>
		</>
	);
}

export default App;
