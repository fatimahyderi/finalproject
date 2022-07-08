import  {useEffect, useState} from "react";
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import "./form.css";
import { useNavigate } from "react-router-dom";

export default function EditProductForm() {
    const nav = useNavigate()
 

// Getting params Id
const { id }  = useParams();
console.log(id)
const [products, setProducts] = useState({});

 //useffect runs once when event occurs

  

useEffect(() =>{  
    const getProductData = ()=> {
        axios.get(`http://localhost:8080/items/view/${id}`)
        .then(function (response){    
          setProducts(response.data);
           console.log(response.data);
        })
        .catch(function (error){
            console.log(error);
        })
        .then(function (){
            //always run
        });       
    } 
    getProductData();
}, []);

const [formData, setFormData] = useState(
    { p_name: "", p_price: "", p_quantity: "", p_image: "", p_category: ""}
)

let name, value;
function handleInputChange(event) {
    console.log(event);
    name= event.target.name;
    value = event.target.value;

    setFormData(
        {...formData, [name]: value}
    )
}



 async function handleSubmit(e) {
    e.preventDefault()
    let formData = new FormData(e.target);
    const apiUrl = `http://localhost:8080/items/updateproduct/${id}`;
    fetch(apiUrl, {
        method: 'PUT',
        //headers: { "content-type": "application/json"},
        //body: JSON.stringify({ p_name, p_price, p_category, p_image, p_quantity })
        body: new URLSearchParams(formData)
    }).then(res => res.json())
        .then(response => {
            console.log(response)
            nav('/secretpanel/product-form')
        }).catch(console.log);
}

  
 

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


// //Getting Product data from MongoDB & setting in a useState
// const [products, setProducts] = useState();

//  //useffect runs once when event occurs

//   const getProductData = ()=> {
//     axios.get(`http://localhost:8080/items/view/${id}`)
//     .then(function (response){    
//       setProducts(response.data);
//        console.log(response.data);
//     })
//     .catch(function (error){
//         console.log(error);
//     })
//     .then(function (){
//         //always run
//     });       
// }

// useEffect(() =>{   
//     getProductData();
// }, []);



  //Deleting Products
  
    // const [myTable, setMyTable] = useState(products);
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
    <h2>EDIT PRODUCTS</h2>

  <div class= "myWrapper"> 

    <div class="container1">
      <form onSubmit={handleSubmit} className="productform">
        <div class="col1">
          <div class="item-details" id="col-2">
            <div class="input-box">
              <label for="name">Product Name</label><br />
              <input onChange={handleInputChange} name="p_name" value={formData.p_name} placeholder={products.name} type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="quantity">Quantity</label><br />
              <input onChange={handleInputChange}  name="p_quantity" value={formData.p_quantity} placeholder={products.quantity} type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="quantity">Product Image</label><br />
              <input onChange={handleInputChange}  name="p_image" value={formData.p_image} placeholder={products.image} type="text" />
            </div>
          </div>
        </div>

        <div class="col2">
          <div class="item-details" id="col-2">
            <div class="input-box">
              <label for="price">Unit Price</label><br />
              <input onChange={handleInputChange}  name="p_price" value={formData.p_price}  placeholder={products.price} type="number" />
            </div>
          </div>

          <div class="item-details" id="col-3">
            <div class="input-box">
              <label for="price">Product Size</label><br />
              <input onChange={handleInputChange}  name="p_size" value={formData.p_size} placeholder={products.size} type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="category">Product Category</label><br />

              <select onChange={handleInputChange} name="p_category" value={formData.p_category} id="category" > 

               {/* fetching Category data from mongoDB categoryDB table */}
                {category && category.map((data, key) => {                               
                    return (                                        
                    <> 
                      <option value= {data.name}  >{data.name}</option>                    
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
  