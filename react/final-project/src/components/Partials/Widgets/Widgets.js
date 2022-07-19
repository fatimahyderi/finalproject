import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Widgets(props) {
    const { filterResult } = props
    const [category, setCategory] = useState();

    useEffect(() => {
        const getCategoryData = () => {
            axios.get(`${process.env.REACT_APP_SERVER_PATH}/items/categoryFormData`)
                .then(function (response) {
                    setCategory(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
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
                                            <li value={data.name} onClick={() => filterResult(data.name)}>{data.name}</li>
                                        </>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Widgets