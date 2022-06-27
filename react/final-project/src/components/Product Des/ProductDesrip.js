import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Discount from '../Common/Discount-Secction/Discount'
import { useParams } from "react-router";
import {ShoppingCartContext} from '../../App';
import Breadcrumbsection1 from './Breadcrumb-section1/Breadcrumbsection1';
import Singleproduct from './Singleproduct/Singleproduct';
import Modalview from './ModalView/Modalview';
import Relatedproducts from './Relatedproducts/Relatedproducts';

// use this to access the id from the route params


function ProductDesrip(props) {
    const { id } = useParams();
    const {onAdd,cart} = props;
    const [product, getProduct] = useState({});
    const getProductData = () => {
        axios.get(`http://localhost:8080/items/product/${id}`)
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

    
    

    return (
        <>
            <Header cart={cart}/>
            <Discount />


            <Breadcrumbsection1 product={product}/>

            <Singleproduct product={product} onAdd={onAdd}/>



           <Modalview/>

            <Relatedproducts/>
            <Footer />
        </>
    )
}

export default ProductDesrip