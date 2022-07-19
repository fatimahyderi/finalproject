import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./form.css";
import ProductsList from "./ProductsList";
import './List.css';

export default function AddProductForm() {

  const [formData, setFormData] = useState(
    { p_name: "", p_price: "", p_quantity: "", p_image: "", p_category: "" }
  )
  const [status, setStatus] = useState();

  let name, value;
  function handleInputChange(e) {
    name = e.target.name;
    value = e.target.value;

    setFormData(
      { ...FormData, [name]: value }
    )
  }

  function handleSubmit(e) {
    e.preventDefault()

    let formData = new FormData(e.target);
    const apiUrl = `${process.env.REACT_APP_SERVER_PATH}/items/product`;

    fetch(apiUrl, {
      method: 'POST',
      body: new URLSearchParams(formData)
    }).then(res => res.json())
      .then(response => {
        console.log(response)
        setStatus(true);
      }).catch(console.log);
  }

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


  if (status) {
    return < AddProductForm />
  }
 
  return (
    <>
      <h2>ADD PRODUCTS</h2>

      <div className="add-product-container">

        <div className="container1">
          <form onSubmit={handleSubmit} method="POST" className="productform">
            <div className="col1">
              <div className="item-details" id="col-2">
                <div className="input-box">
                  <label for="name">Product Name</label><br />
                  <input onChange={e => handleInputChange(e)} name="p_name" value={formData.p_name} type="text" />
                </div>
              </div>

              <div className="item-details">
                <div className="input-box">
                  <label for="quantity">Quantity</label><br />
                  <input onChange={e => handleInputChange(e)} name="p_quantity" value={formData.p_quantity} type="text" />
                </div>
              </div>

              <div className="item-details">
                <div className="input-box">
                  <label for="quantity">Product Image</label><br />
                  <input onChange={e => handleInputChange(e)} name="p_image" value={formData.p_image} type="text" />
                </div>
              </div>
            </div>

            <div className="col2">
              <div className="item-details" id="col-2">
                <div className="input-box">
                  <label for="price">Unit Price</label><br />
                  <input onChange={e => handleInputChange(e)} name="p_price" value={formData.p_price} type="number" />
                </div>
              </div>

              <div className="item-details" id="col-3">
                <div className="input-box">
                  <label for="price">Product Size</label><br />
                  <input onChange={e => handleInputChange(e)} name="p_size" value={formData.p_size} type="text" />
                </div>
              </div>

              <div className="item-details">
                <div className="input-box">
                  <label for="category">Product Category</label><br />

                  <select onChange={e => handleInputChange(e)} name="p_category" value={formData.p_category} id="category" >

                    {/* fetching Category data from mongoDB categoryDB table */}
                    {category && category.map((data, key) => {
                      return (
                        <>
                          <option value={data.name} >{data.name}</option>
                        </>
                      )
                    })}
                  </select>
                </div>
              </div>

            </div>
            <div className="myBtn">
              <input type="submit" value="Add Product" />
            </div>
          </form>
        </div>
      </div>

      <div className="list-container">
        <ProductsList />
      </div>


    </>
  )
}
