import React from 'react'

function Widgets() {
  return (
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
  )
}

export default Widgets