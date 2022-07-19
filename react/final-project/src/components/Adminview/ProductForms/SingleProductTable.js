import React, {useEffect} from 'react';
import {Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './List.css';

function SingleProductTable() {

  const { id }  = useParams();
  console.log(id)

const [product, getProduct] = React.useState([]);

useEffect(() =>{   

  const getProductData = ()=> {
    axios.get(`http://localhost:8080/items/view/${id}`)
    .then(function (response){    
      getProduct(response.data);
      console.log(response.data)
     
    })
    .catch(function (error){
        console.log(error);
    })
    .then(function (){
        
    });       
 }
     getProductData();
 }, [id]);

 
  return (
    <>
    <div className='container-single-product'>
        <h3 className="title">Product Details</h3>
        <table className="single-product-table">
     
          <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Category</th>  
                <th>Product Size</th>              
                <th>Product Image</th>  
                
              </tr>
            </thead>
          <tbody>
              <tr >                 
                  <td>
                    {product._id}
                  </td>
                  <td>
                    {product.name}
                  </td>
                  <td>
                    {product.quantity}
                  </td>
                  <td>
                    {product.price}
                  </td>
                  <td>
                    {product.category}
                  </td>
                  <td>
                    {product.size}
                  </td>
                  <td>
                  <img src={process.env.PUBLIC_URL + `/img/img/product-img/${product.image}`} alt="Product" width='100px' />
                  </td>
              </tr>
              
          </tbody>
        </table>

        <Link to="/secretpanel/product-form" ><button className= 'back-btn'> Go To Home</button> </Link>

      </div>
    </>
  )
}

export default SingleProductTable;