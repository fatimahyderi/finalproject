import React from 'react'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Discount from '../Common/Discount-Secction/Discount'
import Billingaddress from './BillingAddress/Billingaddress'
import Orderdetails from './OrderDetails/Orderdetails'


function Checkout(props) {
    const {cart} = props
    return (
        <div>

            <Header cart={cart}/>
            <Discount />
            <div class="checkout_area section_padding_100">
                <div class="container">
                    <div class="row">

                        <Billingaddress/>

                        <Orderdetails/>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Checkout