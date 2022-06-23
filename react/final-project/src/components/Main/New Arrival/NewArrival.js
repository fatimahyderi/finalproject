import React from 'react'

function NewArrival() {
  return (
  <>
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
                                    <img src="img/product-img/product-1.jpg" alt=""/>
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
                                    <a href="#">View Full Product Details</a>
                                </div>
                                
                                <form className="cart" method="post">
                                    <div className="quantity">
                                        <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>

                                        <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1"/>

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
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
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



<section className="new_arrivals_area section_padding_100_0 clearfix">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section_heading text-center">
                    <h2>New Arrivals</h2>
                </div>
            </div>
        </div>
    </div>

    <div className="karl-projects-menu mb-100">
        <div className="text-center portfolio-menu">
            <button className="btn active" data-filter="*">ALL</button>
            <button className="btn" data-filter=".women">WOMAN</button>
            <button className="btn" data-filter=".man">MAN</button>
            <button className="btn" data-filter=".access">ACCESSORIES</button>
            <button className="btn" data-filter=".shoes">shoes</button>
            <button className="btn" data-filter=".kids">KIDS</button>
        </div>
    </div>

    <div className="container">
        <div className="row karl-new-arrivals">

            
            <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                
                <div className="product-img">
                    <img src="./img/img/product-img/product-1.jpg" alt=""/>
                    <div className="product-quicview">
                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                    </div>
                </div>
                
                <div className="product-description">
                    <h4 className="product-price">$39.90</h4>
                    <p>Jeans midi cocktail dress</p>
                    
                    <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                </div>
            </div>

            
            <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
                
                <div className="product-img">
                    <img src="./img/img/product-img/product-2.jpg" alt=""/>
                    <div className="product-quicview">
                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                    </div>
                </div>
                
                <div className="product-description">
                    <h4 className="product-price">$39.90</h4>
                    <p>Jeans midi cocktail dress</p>
                    
                    <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                </div>
            </div>

            
            <div className="col-12 col-sm-6 col-md-4 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
                
                <div className="product-img">
                    <img src="./img/img/product-img/product-3.jpg" alt=""/>
                    <div className="product-quicview">
                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                    </div>
                </div>
                
                <div className="product-description">
                    <h4 className="product-price">$39.90</h4>
                    <p>Jeans midi cocktail dress</p>
                    
                    <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                </div>
            </div>

            
            <div className="col-12 col-sm-6 col-md-4 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
                
                <div className="product-img">
                    <img src="./img/img/product-img/product-4.jpg" alt=""/>
                    <div className="product-quicview">
                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                    </div>
                </div>
                
                <div className="product-description">
                    <h4 className="product-price">$39.90</h4>
                    <p>Jeans midi cocktail dress</p>
                    
                    <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                </div>
            </div>

            
            <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
                
                <div className="product-img">
                    <img src="./img/img/product-img/product-5.jpg" alt=""/>
                    <div className="product-quicview">
                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                    </div>
                </div>
                
                <div className="product-description">
                    <h4 className="product-price">$39.90</h4>
                    <p>Jeans midi cocktail dress</p>
                    
                    <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                </div>
            </div>

            
            <div className="col-12 col-sm-6 col-md-4 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
                
                <div className="product-img">
                    <img src="./img/img/product-img/product-6.jpg" alt=""/>
                    <div className="product-quicview">
                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                    </div>
                </div>
                
                <div className="product-description">
                    <h4 className="product-price">$39.90</h4>
                    <p>Jeans midi cocktail dress</p>
                    
                    <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                </div>
            </div>
        </div>
    </div>
</section></>
  )
}

export default NewArrival