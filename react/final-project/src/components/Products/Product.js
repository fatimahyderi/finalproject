import React, { useContext} from 'react'
import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Common/Header/Header';
import Discount from '../Common/Discount-Secction/Discount';
import Footer from '../Common/Footer/Footer';

import {ShoppingCartContext} from '../../App';

function Product() {
    const [product, getProduct] = useState();

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

    const [cart, setCart] = useContext(ShoppingCartContext);

    const onAdd = (product) => {
        setCart([...cart, product]);
    }

    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cart));
    }, [cart])

    return (
        <>
            <Header />
            <Discount />
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

                                                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" />

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


            <section className="shop_grid_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="shop_sidebar_area">

                                <div className="widget catagory mb-50">

                                    <div className="nav-side-menu">
                                        <h6 className="mb-0">Catagories</h6>
                                        <div className="menu-list">
                                            <ul id="menu-content2" className="menu-content collapse out">

                                                <li data-toggle="collapse" data-target="index.htmlwomen2">
                                                    <a href="index.html">Woman wear</a>
                                                    <ul className="sub-menu collapse show" id="women2">
                                                        <li><a href="index.html">Midi Dresses</a></li>
                                                        <li><a href="index.html">Maxi Dresses</a></li>
                                                        <li><a href="index.html">Prom Dresses</a></li>
                                                        <li><a href="index.html">Little Black Dresses</a></li>
                                                        <li><a href="index.html">Mini Dresses</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="index.htmlman2" className="collapsed">
                                                    <a href="index.html">Man Wear</a>
                                                    <ul className="sub-menu collapse" id="man2">
                                                        <li><a href="index.html">Man Dresses</a></li>
                                                        <li><a href="index.html">Man Black Dresses</a></li>
                                                        <li><a href="index.html">Man Mini Dresses</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="index.htmlkids2" className="collapsed">
                                                    <a href="index.html">Children</a>
                                                    <ul className="sub-menu collapse" id="kids2">
                                                        <li><a href="index.html">Children Dresses</a></li>
                                                        <li><a href="index.html">Mini Dresses</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="index.htmlbags2" className="collapsed">
                                                    <a href="index.html">Bags &amp; Purses</a>
                                                    <ul className="sub-menu collapse" id="bags2">
                                                        <li><a href="index.html">Bags</a></li>
                                                        <li><a href="index.html">Purses</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="index.htmleyewear2" className="collapsed">
                                                    <a href="index.html">Eyewear</a>
                                                    <ul className="sub-menu collapse" id="eyewear2">
                                                        <li><a href="index.html">Eyewear Style 1</a></li>
                                                        <li><a href="index.html">Eyewear Style 2</a></li>
                                                        <li><a href="index.html">Eyewear Style 3</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="index.htmlfootwear2" className="collapsed">
                                                    <a href="index.html">Footwear</a>
                                                    <ul className="sub-menu collapse" id="footwear2">
                                                        <li><a href="index.html">Footwear 1</a></li>
                                                        <li><a href="index.html">Footwear 2</a></li>
                                                        <li><a href="index.html">Footwear 3</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget price mb-50">
                                    <h6 className="widget-title mb-30">Filter by Price</h6>
                                    <div className="widget-desc">
                                        <div className="slider-range">
                                            <div data-min="0" data-max="3000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="1350" data-label-result="Price:">
                                                <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                            </div>
                                            <div className="range-price">Price: 0 - 1350</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget color mb-70">
                                    <h6 className="widget-title mb-30">Filter by Color</h6>
                                    <div className="widget-desc">
                                        <ul className="d-flex justify-content-between">
                                            <li className="gray"><a href="index.html"><span>(3)</span></a></li>
                                            <li className="red"><a href="index.html"><span>(25)</span></a></li>
                                            <li className="yellow"><a href="index.html"><span>(112)</span></a></li>
                                            <li className="green"><a href="index.html"><span>(72)</span></a></li>
                                            <li className="teal"><a href="index.html"><span>(9)</span></a></li>
                                            <li className="cyan"><a href="index.html"><span>(29)</span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget size mb-50">
                                    <h6 className="widget-title mb-30">Filter by Size</h6>
                                    <div className="widget-desc">
                                        <ul className="d-flex justify-content-between">
                                            <li><a href="index.html">XS</a></li>
                                            <li><a href="index.html">S</a></li>
                                            <li><a href="index.html">M</a></li>
                                            <li><a href="index.html">L</a></li>
                                            <li><a href="index.html">XL</a></li>
                                            <li><a href="index.html">XXL</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget recommended">
                                    <h6 className="widget-title mb-30">Recommended</h6>

                                    <div className="widget-desc">

                                        <div className="single-recommended-product d-flex mb-30">
                                            <div className="single-recommended-thumb mr-3">
                                                <img src="./img/img/product-img/product-10.jpg" alt="" />
                                            </div>
                                            <div className="single-recommended-desc">
                                                <h6>Men’s T-shirt</h6>
                                                <p>$ 39.99</p>
                                            </div>
                                        </div>

                                        <div className="single-recommended-product d-flex mb-30">
                                            <div className="single-recommended-thumb mr-3">
                                                <img src="./img/img/product-img/product-11.jpg" alt="" />
                                            </div>
                                            <div className="single-recommended-desc">
                                                <h6>Blue mini top</h6>
                                                <p>$ 19.99</p>
                                            </div>
                                        </div>

                                        <div className="single-recommended-product d-flex">
                                            <div className="single-recommended-thumb mr-3">
                                                <img src="./img/img/product-img/product-12.jpg" alt="" />
                                            </div>
                                            <div className="single-recommended-desc">
                                                <h6>Women’s T-shirt</h6>
                                                <p>$ 39.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="shop_grid_product_area">
                                <div className="row">

                                    {product && product.map((data, key) => {
                                        return (
                                            <>
                                                <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s" key={key}>

                                                    <div className="product-img">


                                                        <img src={`./img/img/product-img/${data.imagepath}`} alt="" />
                                                        <div className="product-quicview">
                                                            <Link to={`/productdetails/${data._id}`} ><i className="ti-plus"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div className="product-description">
                                                        <h4 className="product-price">{data.price}</h4>
                                                        <p>{data.name}</p>
                                                        <p>{data.brand}</p>
                                                        <p>{data.color}</p>

                                                        <Link to='' className="add-to-cart-btn" onClick={() => onAdd(data)}>ADD TO CART</Link>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item active"><a className="page-link" href="index.html">01</a></li>
                                        <li className="page-item"><a className="page-link" href="index.html">02</a></li>
                                        <li className="page-item"><a className="page-link" href="index.html">03</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product