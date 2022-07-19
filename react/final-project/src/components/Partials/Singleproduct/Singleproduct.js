import React from 'react'

function Singleproduct(props) {
    const {product, onAdd } = props
  
  return (
    <section className="single_product_details_area section_padding_0_100">
    <div className="container">
        <div className="row">

            <div className="col-12 col-md-6">
                <div className="single_product_thumb">

                    <img src={process.env.PUBLIC_URL + `/img/img/product-img/${product.imagepath}`} alt={`${product.name}`} />



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
  )
}

export default Singleproduct