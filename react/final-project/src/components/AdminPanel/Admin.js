import React from 'react';
import {Link} from 'react-router-dom';
import "./admin.css";

 const Admin =(props) =>{
    const {product, order, users, categories} = props
    const productlength = product.length
    console.log(productlength)
    const orderlength = order.length
    console.log(orderlength)
    const userslength = users.length
    console.log(userslength)
    const categorylength = categories.length
    console.log(categorylength)
return (
    <>
        <div class= "sidebar">
            <div class= "sidebar-brand">
                <h2><span class= "lab la-accusoft"></span>Karl</h2>
            </div>

            <div class= "sidebar-menu">
                <ul>
                    <li>
                        <Link to=".." class="active"><span class="las la-igloo"></span>
                        <span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to= "/secretpanel/product-form"><span class="las la-clipboard-list"></span>
                        <span >Products</span></Link>
                    </li>
                    <li>
                        <Link to="/secretpanel/orders"><span class="las la-shopping-bag"></span>
                        <span>Orders</span></Link>
                    </li>
                    <li>
                        <Link to="/secretpanel/users"><span class="las la-users"></span>
                        <span>Customers</span></Link>
                    </li>
                    <li>
                        <Link to="/secretpanel/category-form"><span class="las la-receipt"></span>
                        <span>Categories</span></Link>
                    </li>
                    <li>
                        <Link to="..."><span class="las la-user-circle"></span>
                        <span>Accounts</span></Link>
                    </li>
                </ul>
            </div>
        </div>

        {/* <div class="main-content">
            <header>
                <h2 class= "dashboard">
                    <lable for="">
                        <span class= "las la-bars"></span>
                    </lable>
                    Dashboard
                </h2>
            
                <div class= "search-wrapper">
                    <span class= "las la-search"></span>
                    <input type ="Search" palceholder ="search"></input>
                </div>

                <div class= "user-wrapper">
                    <img src="img/product-img/images.jpg"  width="50px" height="50px" alt =""></img>                
                    <div>
                        <h4>John Doe</h4>
                        <small>Super Admin</small>
                    </div>
                </div>
            </header>
        </div> */}

        <main>
            <div class ="card-container">
            <div class="cards">
                <div class="card-single">
                    <div>
                        <h1>{productlength}</h1>
                        <span>Products</span>                       
                    </div>
                    <div>
                        <span class="las la-users"></span>                       
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1> {orderlength}</h1>
                        <span>Orders</span>                       
                    </div>
                    <div>
                        <span class="las la-shopping-bag"></span>                       
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1> {userslength}</h1>
                        <span>Customers</span>                       
                    </div>
                    <div>
                        <span class="las la-users"></span>                       
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1>{categorylength}</h1>
                        <span>Categories</span>                       
                    </div>
                    <div>
                        <span class="las la-clipboard-list"></span>                       
                    </div>
                </div>

                <div class="card-single">
                    <div>                        
                        <span>Accounts</span>                       
                    </div>
                    <div>
                        <span class="las la-user-circle"></span>                       
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1> $6K</h1>
                        <span>Income</span>                       
                    </div>
                    <div>
                        <span class="lab la-google-wallet"></span>                       
                    </div>
                </div>
            </div>
            </div>

        </main>
    
    </>
    )

}

export default Admin;