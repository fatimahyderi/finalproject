import React, {useContext}from 'react'
import Header from '../Common/Header/Header'
import Discount from '../Common/Discount-Secction/Discount'
import Footer from '../Common/Footer/Footer'
import {ShoppingCartContext} from '../../App'

function Cart(props) {
    const {} = props;
    const [cart, setCart] = useContext(ShoppingCartContext);

    const onAdd = (product) => {
        setCart([...cart, product]);
    }

    const onRemove = (product) => {
        setCart(cart.filter((productInCart) => productInCart !== product))
    }
    return (
        <div>

            <Header />
            <Discount />
            <div className="cart_area section_padding_100 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-table clearfix">
                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => {
                                            return(
                                                <>
                                                <tr key={item.id}>
                                            <td className="cart_product_img d-flex align-items-center">
                                                <a href="index.html"><img src={process.env.PUBLIC_URL + `/img/img/product-img/${item.imagepath}`} alt="Product" /></a>
                                                <h6>{item.name}</h6>
                                            </td>
                                            <td className="price"><span>{item.price}</span></td>
                                            <td className="qty">
                                                <div className="quantity">
                                                    <span className="qty-minus" onClick={() => onAdd(item)}><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                    
                                                    <span className="qty-plus" onClick={() => onRemove(item)}><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                </div>
                                            </td>
                                           
                                            <td className="total_price"><span>{` ${item.price}`}</span></td>
                                        </tr>
                                                </>
                                            )
                                        })}
                                        
                                    </tbody>
                                </table>
                            </div>

                            <div className="cart-footer d-flex mt-30">
                                <div className="back-to-shop w-50">
                                    <a href="shop-grid-left-sidebar.html">Continue shooping</a>
                                </div>
                                <div className="update-checkout w-50 text-right">
                                    <a href="index.html">clear cart</a>
                                    <a href="index.html">Update cart</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="coupon-code-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Cupon code</h5>
                                    <p>Enter your cupone code</p>
                                </div>
                                <form action="index.html">
                                    <input type="search" name="search" placeholder="569ab15" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="shipping-method-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Shipping method</h5>
                                    <p>Select the one you want</p>
                                </div>

                                <div className="custom-control custom-radio mb-30">
                                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor="customRadio1"><span>Next day delivery</span><span>$4.99</span></label>
                                </div>

                                <div className="custom-control custom-radio mb-30">
                                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor="customRadio2"><span>Standard delivery</span><span>$1.99</span></label>
                                </div>

                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor="customRadio3"><span>Personal Pickup</span><span>Free</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="cart-total-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Cart total</h5>
                                    <p>Final info</p>
                                </div>

                                <ul className="cart-total-chart">
                                    <li><span>Subtotal</span> <span>$59.90</span></li>
                                    <li><span>Shipping</span> <span>Free</span></li>
                                    <li><span><strong>Total</strong></span> <span><strong>$59.90</strong></span></li>
                                </ul>
                                <a href="/checkout" className="btn karl-checkout-btn">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart