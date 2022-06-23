import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Discount from '../Common/Discount-Secction/Discount'
import { useParams } from "react-router";
import {ShoppingCartContext} from '../../App';

// use this to access the id from the route params


function ProductDesrip(props) {
    const { id } = useParams();
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

    const [cart, setCart] = useContext(ShoppingCartContext);

    const onAdd = (product) => {
        setCart([...cart, product]);
    }

    return (
        <>
            <Header />
            <Discount />


            <div className="breadcumb_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ol className="breadcrumb d-flex align-items-center">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="index.html">Dresses</a></li>
                                <li className="breadcrumb-item active">{product.name}</li>
                            </ol>

                            <a href="index.html" className="backToHome d-block"><i className="fa fa-angle-double-left"></i> Back to Category</a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="single_product_details_area section_padding_0_100">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="single_product_thumb">

                                <img src={process.env.PUBLIC_URL + "/img/img/product-img/product-2.jpg"} alt={`${product.name}`} />



                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="single_product_desc">

                                <h4 className="title"><a href="index.html">{product.name}</a></h4>

                                <h4 className="price">{product.price}</h4>

                                <p className="available">Available: <span className="text-muted">In Stock</span></p>

                                <div className="single_product_ratings mb-15">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>

                                <div className="widget size mb-50">
                                    <h6 className="widget-title">Size</h6>
                                    <div className="widget-desc">
                                        <ul>
                                            <li><a href="index.html">32</a></li>
                                            <li><a href="index.html">34</a></li>
                                            <li><a href="index.html">36</a></li>
                                            <li><a href="index.html">38</a></li>
                                            <li><a href="index.html">40</a></li>
                                            <li><a href="index.html">42</a></li>
                                        </ul>
                                    </div>
                                </div>

                               

                                <button className="cart-submit" onClick={() => onAdd(product)}>Add to cart</button>

                                <div id="accordion" role="tablist">
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <h6 className="mb-0">
                                                <a data-toggle="collapse" href="index.htmlcollapseOne" aria-expanded="true" aria-controls="collapseOne">Information</a>
                                            </h6>
                                        </div>

                                        <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="index.htmlaccordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                                <p>Approx length 66cm/26" (Based on a UK size 8 sample) Mixed fibres</p>
                                                <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingTwo">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="index.htmlcollapseTwo" aria-expanded="false" aria-controls="collapseTwo">Cart Details</a>
                                            </h6>
                                        </div>
                                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="index.htmlaccordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos nemo, nulla quaerat. Quibusdam non, eos, voluptatem reprehenderit hic nam! Laboriosam, sapiente! Praesentium.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia magnam laborum eaque.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingThree">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="index.htmlcollapseThree" aria-expanded="false" aria-controls="collapseThree">shipping &amp; Returns</a>
                                            </h6>
                                        </div>
                                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="index.htmlaccordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae, tempore maxime rerum iste dolorem mollitia perferendis distinctio. Quibusdam laboriosam rerum distinctio. Repudiandae fugit odit, sequi id!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae qui maxime consequatur laudantium temporibus ad et. A optio inventore deleniti ipsa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="modal fade" id="quickview" tabindex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <div className="quickview_body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-5">
                                            <div className="quickview_pro_img">
                                                <img src="./img/img/product-img/product-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7">
                                            <div className="quickview_pro_des">
                                                <h4 className="title">Boutique Silk Dress</h4>
                                                <div className="top_seller_product_rating mb-15">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <h5 className="price">$120.99 <span>$130</span></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                                                <a href="index.html">View Full Product Details</a>
                                            </div>

                                            <form className="cart" method="post">
                                                <div className="quantity">
                                                    <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>

                                                    <input type="number" className="qty-text" id="qty2" step="1" min="1" max="12" name="quantity" value="1" />

                                                    <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                </div>
                                                <button type="submit" name="addtocart" value="5" className="cart-submit">Add to cart</button>

                                                <div className="modal_pro_wishlist">
                                                    <a href="wishlist.html" target="_blank"><i className="ti-heart"></i></a>
                                                </div>

                                                <div className="modal_pro_compare">
                                                    <a href="compare.html" target="_blank"><i className="ti-stats-up"></i></a>
                                                </div>
                                            </form>

                                            <div className="share_wf mt-30">
                                                <p>Share With Friend</p>
                                                <div className="_icon">
                                                    <a href="index.html">hell<i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                    <a href="index.html">hell<i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    <a href="index.html">hell<i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                                    <a href="index.html">hell<i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="you_may_like_area clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading text-center">
                                <h2>related Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="you_make_like_slider">

                                <OwlCarousel items={4} loop nav autoplay={true} >
                                    <div className="single_gallery_item">

                                        <div className="product-img">
                                            <img src="./img/img/product-img/product-1.jpg" alt="" />
                                            <div className="product-quicview">
                                                <a href="index.html" data-toggle="modal" data-target="index.htmlquickview"><i className="ti-plus"></i></a>
                                            </div>
                                        </div>

                                        <div className="product-description">
                                            <h4 className="product-price">$39.90</h4>
                                            <p>Jeans midi cocktail dress</p>

                                            <a href="index.html" className="add-to-cart-btn">ADD TO CART</a>
                                        </div>
                                    </div>


                                    <div className="single_gallery_item">

                                        <div className="product-img">
                                            <img src="./img/img/product-img/product-2.jpg" alt="" />
                                            <div className="product-quicview">
                                                <a href="index.html" data-toggle="modal" data-target="index.htmlquickview"><i className="ti-plus"></i></a>
                                            </div>
                                        </div>

                                        <div className="product-description">
                                            <h4 className="product-price">$39.90</h4>
                                            <p>Jeans midi cocktail dress</p>

                                            <a href="index.html" className="add-to-cart-btn">ADD TO CART</a>
                                        </div>
                                    </div>


                                    <div className="single_gallery_item">

                                        <div className="product-img">
                                            <img src="./img/img/product-img/product-3.jpg" alt="" />
                                            <div className="product-quicview">
                                                <a href="index.html" data-toggle="modal" data-target="index.htmlquickview"><i className="ti-plus"></i></a>
                                            </div>
                                        </div>

                                        <div className="product-description">
                                            <h4 className="product-price">$39.90</h4>
                                            <p>Jeans midi cocktail dress</p>

                                            <a href="index.html" className="add-to-cart-btn">ADD TO CART</a>
                                        </div>
                                    </div>


                                    <div className="single_gallery_item">

                                        <div className="product-img">
                                            <img src="./img/img/product-img/product-4.jpg" alt="" />
                                            <div className="product-quicview">
                                                <a href="index.html" data-toggle="modal" data-target="index.htmlquickview"><i className="ti-plus"></i></a>
                                            </div>
                                        </div>

                                        <div className="product-description">
                                            <h4 className="product-price">$39.90</h4>
                                            <p>Jeans midi cocktail dress</p>

                                            <a href="index.html" className="add-to-cart-btn">ADD TO CART</a>
                                        </div>
                                    </div>


                                    <div className="single_gallery_item">

                                        <div className="product-img">
                                            <img src="./img/img/product-img/product-5.jpg" alt="" />
                                            <div className="product-quicview">
                                                <a href="index.html" data-toggle="modal" data-target="index.htmlquickview"><i className="ti-plus"></i></a>
                                            </div>
                                        </div>

                                        <div className="product-description">
                                            <h4 className="product-price">$39.90</h4>
                                            <p>Jeans midi cocktail dress</p>

                                            <a href="index.html" className="add-to-cart-btn">ADD TO CART</a>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductDesrip