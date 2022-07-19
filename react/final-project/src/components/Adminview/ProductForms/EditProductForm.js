import  {useEffect, useState} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import "./form.css";
import { useNavigate } from "react-router-dom";

export default function EditProductForm() {
    const nav = useNavigate()
 
const { id }  = useParams();
console.log(id)
const [products, setProducts] = useState(
  { p_name: "", p_price: "", p_quantity: "", p_image: "", p_category: ""}
);

useEffect(() =>{  
    async function getProductData() {
      try {
        const products = await axios.get(`/items/view/${id}`)
        setProducts(products.data);
      } catch (error) {
        console.log("something is wrong");
      }
    } 
    getProductData();
}, [id]);

console.log(products)

let name, value;
function handleInputChange(event) {
    console.log(event);
    name= event.target.name;
    value = event.target.value;

    setProducts(
        {...products, [name]: value}
    )
}



 async function handleSubmit(e) {
    e.preventDefault()
     const apiUrl = `/items/updateproduct/${id}`;
    fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
         body: JSON.stringify(products)
    }).then(res => res.json())
        .then(response => {
            console.log(response)
            nav('/secretpanel/product-form')
        }).catch(console.log);
}

  
 

const [ category, setCategory] = useState();

useEffect(() =>{      
 const getCategoryData = ()=> {    
     axios.get('/items/categoryFormData')
     .then(function (response){    
      setCategory(response.data);
     })
     .catch(function (error){
         console.log(error);
     })
     .then(function (){

     });      
 }   

   getCategoryData();
}, []);






  return (
  <>
    <h2>EDIT PRODUCTS</h2>

  <div class= "myWrapper"> 

    <div class="container1">
      <form onSubmit={handleSubmit} className="productform">
        <div class="col1">
          <div class="item-details" id="col-2">
            <div class="input-box">
              <label for="name">Product Name</label><br />
              <input onChange={handleInputChange} name="p_name" value={products.p_name} placeholder={products.name} type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="quantity">Quantity</label><br />
              <input onChange={handleInputChange}  name="p_quantity" value={products.p_quantity} placeholder={products.quantity}  type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="quantity">Product Image</label><br />
              <input onChange={handleInputChange}  name="p_image" value={products.p_image} placeholder={products.image} type="text" />
            </div>
          </div>
        </div>

        <div class="col2">
          <div class="item-details" id="col-2">
            <div class="input-box">
              <label for="price">Unit Price</label><br />
              <input onChange={handleInputChange}  name="p_price" value={products.p_price} placeholder={products.price} type="number" />
            </div>
          </div>

          <div class="item-details" id="col-3">
            <div class="input-box">
              <label for="price">Product Size</label><br />
              <input onChange={handleInputChange}  name="p_size" value={products.p_size}  placeholder={products.size} type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="category">Product Category</label><br />

              <select onChange={handleInputChange} name="p_category" value={products.p_category} placeholder={products.category} id="category" > 

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
        <div class="myBtn">
          <button type="submit" value="Save Changes" >Save changes</button>
        </div>
      </form>     
    </div>
  </div>  


 
</>
  )
}
  