import React from 'react'
import Header from '../../Partials/Common/Header/Header'
import Footer from '../../Partials/Common/Footer/Footer'
import Discount from '../../Partials/Common/Discount-Secction/Discount'
import Billingaddress from '../../Partials/BillingAddress/Billingaddress'
import Orderdetails from '../../Partials/OrderDetails/Orderdetails'
import '../../../css/core-style.css'
import '../../../css/responsive.css'



function Checkout(props) {
    const {cart, clearCart} = props
        
    
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