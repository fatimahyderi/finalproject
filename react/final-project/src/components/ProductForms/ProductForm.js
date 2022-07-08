import  {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./form.css";
import ProductsList from "./ProductsList";

export default function AddProductForm() {

  const [formData, setFormData] = useState(
    { p_name: "", p_price: "", p_quantity: "", p_image: "", p_category: ""}
)

const [status, setStatus] = useState();

let name, value;
function handleInputChange(e) {
    console.log(e);
    name= e.target.name;
    value = e.target.value;

    setFormData(
        {...FormData, [name]: value}
    )
}

function handleSubmit(e) {
    e.preventDefault()
    // submitToApi(formData)

    let formData = new FormData(e.target);
    //const {p_name, p_price, p_category, p_image, p_quantity} = formData;

    // Posting ProductForm data To MongoDB
    const apiUrl = 'http://localhost:8080/items/products';

    fetch(apiUrl, {
        method: 'POST',
        //headers: { "content-type": "application/json"},
        //body: JSON.stringify({ p_name, p_price, p_category, p_image, p_quantity })
        body: new URLSearchParams(formData)
    }).then(res => res.json())
        .then(response => {
            console.log(response)
            setStatus(true);
        }).catch(console.log);
}
//     console.log(formData)
// }

const [ category, setCategory] = useState();

//useffect runs once when event occurs
useEffect(() =>{      

// Fetching Categories through an API
 const getCategoryData = ()=> {    
     axios.get('http://localhost:8080/items/categoryFormData')
     .then(function (response){    
      setCategory(response.data);
        //console.log(response.data);
     })
     .catch(function (error){
         console.log(error);
     })
     .then(function (){
         //always run
     });      
 }   

   getCategoryData();
}, []);


  if (status){
    return < AddProductForm />
  }
  //Deleting Products
  
    // const [myTable, setMyTable] = useState();
    // useEffect(() => {
    //   getProductData();
    // }, []);
    // console.log(myTable)
  
    // const deleteProduct = async id => {
    //   await axios.delete(`/delete/${id}`);
    //   var newTableData = myTable.filter((item) => {
    //     return item._id !== id;
    //   })
    //   setMyTable(newTableData);
    // }

  return (
  <>
    <h2 className="form">ADD PRODUCTS</h2>

  <div className= "myWrapper"> 

    <div className="container1">
      <form onSubmit={handleSubmit} method= "POST" className="productform">
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
              <input onChange={e => handleInputChange(e)}  name="p_image" value={formData.p_image} type="text" />
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
                      <option value= {data.name} >{data.name}</option>                    
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

 {/* Products List Table */}

    <ProductsList />
 
</>
  )
}
  