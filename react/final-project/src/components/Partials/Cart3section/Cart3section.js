import React from 'react'
import { Link } from 'react-router-dom';

function Cart3section(props) {
    const {cart} = props;
    const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = cart.length === 0 || itemPrice > 2000 ? 0 : 150 ;
  return (
    <div className="row">
                        
                        <div className="col-12 col-lg-12">
                            <div className="cart-total-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Cart total</h5>
                                    <p>Final info</p>
                                </div>

                                <ul className="cart-total-chart">
                                    <li><span>Subtotal</span> <span>{itemPrice}</span></li>
                                    <li><span>Shipping</span> <span>{shippingPrice}</span></li>
                                    <li><span><strong>Total</strong></span> <span><strong>{itemPrice + shippingPrice}</strong></span></li>
                                </ul>
                                <Link to={`/checkout`} className="btn karl-checkout-btn" >Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
  )
}

export default Cart3section