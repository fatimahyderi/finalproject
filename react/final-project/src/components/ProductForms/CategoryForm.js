import React, {useEffect} from 'react';
import axios from 'axios';
import "./form.css";
import { useNavigate } from 'react-router-dom';
import Category from '../Category/Category';


const CategoryForm = (props) =>{
    const nav = useNavigate();
    const {categories} = props

    const [formData, setFormData] = React.useState( { c_name: "", c_description: ""} );
  

    
    let name, value;
    function handleChange(event) {
        //console.log(event);
        name= event.target.name;
        value = event.target.value;

        setFormData(
            {...FormData, [name]: value}
            )
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)

        let formData = new FormData(event.target);
        //const {c_name} = formData;

        fetch('http://localhost:8080/items/category', {
            method: 'POST',
           // body: JSON.stringify({ c_name, c_category})
            body: new URLSearchParams(formData)
        }).then(res => res.json()).then(response => {
                nav('/secretpanel/admin')
                
            }).catch(console.log);
    }
    
       return (       
<>
    <form  onSubmit={handleSubmit}>       
    <div className="input-box">
              <label for="name">Category Name</label><br />
              <input onChange={handleChange} name="c_name" value={formData.c_name} type="text" placeholder="Add New" />
        </div>  
        <div className="input-box">
              <label for="name">Category Description</label><br />
              <input onChange={handleChange} name="c_description" value={formData.c_description} type="text" placeholder="Add New" />
           </div>  
          
                
             
        <button type='submit'>Submit</button>
    </form>       
    <Category categories={categories} />
    </>
    )

    

    
}

export default CategoryForm;
