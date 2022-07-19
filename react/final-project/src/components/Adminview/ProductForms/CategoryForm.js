import React from 'react';

import "./form.css";
import { useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import './List.css'


const CategoryForm = (props) => {
    const nav = useNavigate();
    const { categories } = props

    const [formData, setFormData] = React.useState({ c_name: "", c_description: "" });



    let name, value;
    function handleChange(event) {
        //console.log(event);
        name = event.target.name;
        value = event.target.value;

        setFormData(
            { ...FormData, [name]: value }
        )
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)

        let formData = new FormData(event.target);
        //const {c_name} = formData;

        fetch(`${process.env.REACT_APP_SERVER_PATH}/items/category`, {
            method: 'POST',
            // body: JSON.stringify({ c_name, c_category})
            body: new URLSearchParams(formData)
        }).then(res => res.json()).then(response => {
            nav('/secretpanel/admin')

        }).catch(console.log);
    }

    return (
        <>
            <div className='outerWrapper'>
        <div className='form-container'>
        <form onSubmit={handleSubmit} className="productform">
                <div className="input-box">
                    <label htmlFor="name" className='cat-label'>Category Name</label><br />
                    <input onChange={handleChange} name="c_name" value={formData.c_name} type="text" placeholder="Add New" />
                </div>
                <div className="input-box">
                    <label htmlFor="name">Category Description</label><br />
                    <input onChange={handleChange} name="c_description" value={formData.c_description} type="text" placeholder="Add New" />
                </div>



                <button type='submit' className= 'cat-btn'>Submit</button>
            </form>
        </div>
            
            <div className='list-container'>
                <Category categories={categories} />
            </div>
            </div>
        </>
    )




}

export default CategoryForm;
