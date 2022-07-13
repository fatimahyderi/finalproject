import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Shop from '../Shop/Shop';

function Widgets(props) {
    const { product,filterproductsclick } = props
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
            </div>
        </div>

    )
}

export default Widgets