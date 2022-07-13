import React from 'react';
import {Link} from 'react-router-dom';
import "./admin.css";

 const Admin =(props) =>{
    const {product, order, users, categories, adminsignout} = props
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
        <div className= "sidebar">
            <div className= "sidebar-brand">
            <img src={process.env.PUBLIC_URL + `../img/img/core-img/logo.png`} alt="" />
            </div>

            <div className= "sidebar-menu">
                <ul>
                    <li>
                        <Link to="" className="active"><span className="las la-igloo"></span>
                        <span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to= "/secretpanel/product-form"><span className="las la-clipboard-list"></span>
                        <span >Products</span></Link>
                    </li>
                    <li>
                        <Link to="/secretpanel/orders"><span className="las la-shopping-bag"></span>
                        <span>Orders</span></Link>
                    </li>
                    <li>
                        <Link to="/secretpanel/users"><span className="las la-users"></span>
                        <span>Customers</span></Link>
                    </li>
                    <li>
                        <Link to="/secretpanel/category-form"><span className="las la-receipt"></span>
                        <span>Categories</span></Link>
                    </li>
                    <li>
                        <button onClick={adminsignout} className='admin-signout'><span className="las la-user-circle"></span>
                        <span>SignOut</span></button>
                    </li>
                </ul>
            </div>
        </div>

        {/* <div className="main-content">
            <header>
                <h2 className= "dashboard">
                    <lable for="">
                        <span className= "las la-bars"></span>
                    </lable>
                    Dashboard
                </h2>
            
                <div className= "search-wrapper">
                    <span className= "las la-search"></span>
                    <input type ="Search" palceholder ="search"></input>
                </div>

                <div className= "user-wrapper">
                    <img src="img/product-img/images.jpg"  width="50px" height="50px" alt =""></img>                
                    <div>
                        <h4>John Doe</h4>
                        <small>Super Admin</small>
                    </div>
                </div>
            </header>
        </div> */}

        <main>
            <div className ="card-container">
            <div className="cards">
                <div className="card-single">
                    <div>
                        <h1>{productlength}</h1>
                        <span>Products</span>                       
                    </div>
                    <div>
                        <span className="las la-users"></span>                       
                    </div>
                </div>

                <div className="card-single">
                    <div>
                        <h1> {orderlength}</h1>
                        <span>Orders</span>                       
                    </div>
                    <div>
                        <span className="las la-shopping-bag"></span>                       
                    </div>
                </div>

                <div className="card-single">
                    <div>
                        <h1> {userslength}</h1>
                        <span>Customers</span>                       
                    </div>
                    <div>
                        <span className="las la-users"></span>                       
                    </div>
                </div>

                <div className="card-single">
                    <div>
                        <h1>{categorylength}</h1>
                        <span>Categories</span>                       
                    </div>
                    <div>
                        <span className="las la-clipboard-list"></span>                       
                    </div>
                </div>

                <div className="card-single">
                    <div>                        
                        <span>Accounts</span>                       
                    </div>
                    <div>
                        <span className="las la-user-circle"></span>                       
                    </div>
                </div>

                <div className="card-single">
                    <div>
                        <h1> $6K</h1>
                        <span>Income</span>                       
                    </div>
                    <div>
                        <span className="lab la-google-wallet"></span>                       
                    </div>
                </div>
            </div>
            </div>

        </main>
    
    </>
    )

}

export default Admin;