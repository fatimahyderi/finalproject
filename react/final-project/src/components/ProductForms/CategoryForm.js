import React, {useEffect} from 'react';
import axios from 'axios';
import "./form.css";
import { useNavigate } from 'react-router-dom';


const CategoryForm = () =>{
    const nav = useNavigate();

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
    //     console.log(formData)
    // }
    
//     const [ category, setCategory] = React.useState();

//     // Fetching Categories through an API
//     const getCategoryData = ()=> {    
//         axios.get('http://localhost:8000/api/categoryFormData')
//         .then(function (response){    
//           setCategory(response.data);
//            //console.log(response.data);
//         })
//         .catch(function (error){
//             console.log(error);
//         })
//         .then(function (){
//             //always run
//         });      
//     }   
//     //useffect runs once when event occurs
//    useEffect(() =>{      
//        getCategoryData();
//    }, []);

    return (       

    <form  onSubmit={handleSubmit}>       
        <input onChange={handleChange} name="c_name" value={formData.c_name} type="text" placeholder="Add New" />
         <br /><br /> 
         <input onChange={handleChange} name="c_description" value={formData.c_description} type="text" placeholder="Add New" />
                
        {/* <label htmlFor="category" >Choose Category</label >
        <br />      
            <select  onChange={handleChange} name="c_category" value={formData.c_category} id="category" >                      
            
                {/* fetching Category data from mongoDB categoryDB table */}
                {/* {category && category.map((data, key) => {                               
                    return (                                        
                    <> 
                        <option value= {key} >{data.name}</option>                    
                    </>  
                    )
                })} 
                    
            </select>     */} 
                           
        {/* <textarea 
                value={formData.comments}
                placeholder="Description"
                onChange={handleChange}
                name="comments"
            /> */}          
        <button type='submit'>Submit</button>
    </form>       
    )

    // return (
    //     <>
        
    //         <form  >
    //             <div>
    //                 <lable>Category Name</lable>
    //                 <select value=''>
    //                     <option value="men">Men</option>
    //                     <option value="women">Women</option>
    //                     <option value="kids">Kids</option>
    //                 </select>
    //                     {/* <input type ='text'></input> */}
    //             </div>

    //         </form>

    //     </>
    // );
}

export default CategoryForm;
