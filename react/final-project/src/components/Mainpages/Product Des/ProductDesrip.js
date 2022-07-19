import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../../Partials/Common/Header/Header'
import Footer from '../../Partials/Common/Footer/Footer'
import Discount from '../../Partials/Common/Discount-Secction/Discount'
import { useParams } from "react-router";
import Breadcrumbsection1 from '../../Partials/Breadcrumb-section1/Breadcrumbsection1';
import Singleproduct from '../../Partials/Singleproduct/Singleproduct';
import ModalView from '../../Partials/ModalView/ModalView';
import Relatedproducts from '../../Partials/Relatedproducts/Relatedproducts';
import '../../../css/core-style.css'
import '../../../css/responsive.css'

function ProductDesrip(props) {
    const { id } = useParams();
    const { onAdd, cart } = props;
    const [product, getProduct] = useState({});
    const getProductData = () => {
        axios.get(`http://localhost:8080/items/product/${id}`)
            .then(function (response) {
                getProduct(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

    useEffect(() => {
        getProductData()
    }, []);




    return (
        <>
            <Header cart={cart} />
            <Discount />
            <Breadcrumbsection1 product={product} />
            <Singleproduct product={product} onAdd={onAdd} />
            <ModalView />
            <Relatedproducts />
            <Footer />
        </>
    )
}

export default ProductDesrip