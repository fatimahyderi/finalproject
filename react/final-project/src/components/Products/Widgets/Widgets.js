import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Widgets(props) {
    const { product, filterproductsclick } = props
    const [category, setCategory] = useState();

    //useffect runs once when event occurs
    useEffect(() => {

        // Fetching Categories through an API
        const getCategoryData = () => {
            axios.get('http://localhost:8080/items/categoryFormData')
                .then(function (response) {
                    setCategory(response.data);
                    //console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    //always run
                });
        }

        getCategoryData();
    }, []);



    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="shop_sidebar_area">

                <div className="widget catagory mb-50">

                    <div className="nav-side-menu">
                        <h6 className="mb-0">Catagories</h6>
                        <div className="menu-list">
                            <ul id="menu-content2" className="menu-content collapse out">
                                {category && category.map((data, key) => {
                                    return (
                                        <>
                                            <li value={data.name} onClick={() => filterproductsclick(data.name)}>{data.name}</li>
                                        </>
                                    )
                                })}
                                {/* <li onClick={() => filterproductsclick('kids')}>
                                    Kids wear

                                </li> */}


                            </ul>
                        </div>
                    </div>
                </div>
                {/* 
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
                                </div> */}

                {/* <div className="widget recommended">
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
                                </div> */}
            </div>
        </div>
    )
}

export default Widgets