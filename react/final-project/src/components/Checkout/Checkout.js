import React, {useState} from 'react'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Discount from '../Common/Discount-Secction/Discount'
import Billingaddress from './BillingAddress/Billingaddress'
import Orderdetails from './OrderDetails/Orderdetails'


function Checkout(props) {
    const {cart,verifiedLoginuser, clearCart} = props
    console.log(`user${verifiedLoginuser}`)
        
    
    return (
        <div>

            <Header cart={cart}/>
            <Discount />
            <div className="checkout_area section_padding_100">
                <div className="container">
                    <div className="row">


                        <Billingaddress cart={cart} clearCart={clearCart} />

                        <Orderdetails cart={cart}/>

                    </div>  
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Checkout