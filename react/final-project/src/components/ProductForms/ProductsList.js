import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductsList = () => {

    //Getting Product data from MongoDB & setting in a useState
const [products, setProducts] = React.useState();

//useffect runs once when event occurs
React.useEffect(() =>{   
     getProductData();
 }, []);

 const getProductData = ()=> {
   axios.get("http://localhost:8080/items/viewproducts")
   .then(function (response){    
     setProducts(response.data);
      //console.log(response.data);
   })
   .catch(function (error){
       console.log(`error ${error}`);
   })      
}

const deleteProduct = (id) => {
  axios.get(`http://localhost:8080/items/deleteproduct/${id}`)
  .then(function(res) {
    console.log('product deleted')
  })
}

  return (
    <>  
        {/* Products List Table */}

  <div className='table_box'>
        <h1>Product List</h1>
        <table className="tablestyle">
          <thead>
              <tr>
              <th>Sr. No</th>  
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Category</th>  
                <th>Product Size</th>              
                <th>Product Image</th>  
                <th>View</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
          <tbody>

            {products && products.map((data, index) => {
              return (
                <tr key={index}>
                     <td>
                    {index +1}
                  </td>

                  <td>
                    {data._id}
                  </td>
                  <td>
                    {data.name}
                  </td>
                  <td>
                    {data.quantity}
                  </td>
                  <td>
                    {data.price}
                  </td>
                  <td>
                    {data.category}
                  </td>
                  <td>
                    {data.size}
                  </td>
                  <td>
                    {data.image}
                  </td>
                  <td>
                    <Link to={`/secretpanel/view/${data._id}`} className="view"
                      data-toggle="modal">View</Link>
                  </td>
                  <td>
                    <Link to={`/secretpanel/edit/${data._id}`} className="edit"
                      data-toggle="modal">Edit</Link>
                  </td>
                  <td>
                    <Link to="/secretpanel/admin" onClick={() => deleteProduct(data._id)}  className="delete">Delete</Link>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>
    
    </>
  )
}

export default ProductsList