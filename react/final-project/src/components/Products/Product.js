import React, { useContext } from 'react'
import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Common/Header/Header';
import Discount from '../Common/Discount-Secction/Discount';
import Footer from '../Common/Footer/Footer';
import ModalView from './ModalView/ModalView';
import Widgets from './Widgets/Widgets';
import Shop from './Shop/Shop';

import { ShoppingCartContext } from '../../App';

function Product(props) {
    const { product, onAdd, cart } = props
    // const [product, getProduct] = useState();

    // const getProductData = () => {
    //     axios.get('http://localhost:8080/items')
    //         .then(function (response) {
    //             // handle success

    //             getProduct(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }

    // useEffect(() => {
    //     getProductData()
    // }, []);

    // const [cart, setCart] = useContext(ShoppingCartContext);

    // const onAdd = (product) => {
    //     setCart([...cart, product]);
    // }

    // const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

    // useEffect(() => {
    //     localStorage.setItem("cart",JSON.stringify(cart));
    // }, [cart])

    return (
        <>
            <Header cart={cart}/>
            <Discount />
            <ModalView />

            <section className="shop_grid_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <Widgets />

                        <Shop product={product} onAdd={onAdd} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product