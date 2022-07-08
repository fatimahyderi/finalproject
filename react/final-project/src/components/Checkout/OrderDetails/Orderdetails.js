import React from 'react'

function Orderdetails(props) {
    const { cart } = props
    const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = cart.length === 0 || itemPrice > 2000 ? 0 : 150;
    return (
        <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
            <div className="order-details-confirmation">

                <div className="cart-page-heading">
                    <h5>Your Order</h5>
                    <p>The Details</p>
                </div>


                <ul className="order-details-form mb-4" >
                    <li><span>Product</span> <span>Total</span></li>
                    {cart.map((item) => {
                        return (
                            <>
                                <li key={item.id}><span>{item.name}</span> <span>{item.qty}*{item.price}</span></li>

                            </>
                        )
                    })}
                    <li><span>Subtotal</span> <span>{itemPrice}</span></li>
                    <li><span>Shipping</span> <span>{shippingPrice}</span></li>
                    <li><span>Total</span> <span>{itemPrice + shippingPrice}</span></li>
                </ul>
              
                
            </div>
        </div>
    )
}

export default Orderdetails