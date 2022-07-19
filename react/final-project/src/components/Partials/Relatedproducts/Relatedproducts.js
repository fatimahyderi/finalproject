import React from 'react'
import OwlCarousel from 'react-owl-carousel'

function Relatedproducts() {
  return (
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
  )
}

export default Relatedproducts