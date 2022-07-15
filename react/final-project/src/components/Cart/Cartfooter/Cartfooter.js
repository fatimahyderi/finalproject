import React from 'react'
import { Link } from 'react-router-dom'

function Cartfooter(props) {
    const {clearCart} = props;
  return (
    <div className="cart-footer d-flex mt-30">
                                <div className="back-to-shop w-50">
                                    <Link to='/shop'>Continue Shopping </Link>
                                </div>
                                <div className="update-checkout w-50 text-right">
                                    <button onClick={() => clearCart()} className="btn karl-checkout-btn"> Clear Cart </button>
                                    
                                </div>
                            </div>
  )
}

export default Cartfooter