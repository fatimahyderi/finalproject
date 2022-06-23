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
import {useState} from 'react';

export const ShoppingCartContext = React.createContext();
function App() {
	
	const cartState = useState([]);
    

	
	

	return (
		<>
		<ShoppingCartContext.Provider value={cartState}>
			<Routes>
		<Route path='/' element={ <Main/> } />
        <Route path="/shop" element={ <Product/> } />

        <Route path="/productdetails/:id" element={ <ProductDesrip /> } />
		<Route path="/cart" element={ <Cart /> } />
		<Route path="checkout" element={ <Checkout/> } />

      </Routes>
	  </ShoppingCartContext.Provider>
		</>
	);
}

export default App;
