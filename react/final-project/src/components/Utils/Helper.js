import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
//Register User in Database
function useRegUser() {
    
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
        const nav = useNavigate();
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
}
	
	// Getting products from database

function useProducts(){
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
} 
	

	//Getting Orders from database
function useOrders(){
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
}
	

	//Getting Users from database
function useUsers(){
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
}
	

	//Getting Categories from database
function useCategories(){
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
}
	

	// Cart system

function useCart(){
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

	

}    
	
// login user

function useLoginUser(){
    const nav = useNavigate();
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

}

export{useRegUser} ;


	