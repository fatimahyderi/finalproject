import React, { useContext } from 'react'
import Header from '../../Partials/Common/Header/Header'
import Discount from '../../Partials/Common/Discount-Secction/Discount'
import Footer from '../../Partials/Common/Footer/Footer'
import { ShoppingCartContext } from '../../../App'
import Cartview from '../../Partials/Cartview/Cartview'
import Cartfooter from '../../Partials/Cartfooter/Cartfooter'
import Cart3section from '../../Partials/Cart3section/Cart3section'
import '../../../css/core-style.css'
import '../../../css/responsive.css'


function Cart(props) {
    const { cart, onAdd, onRemove, clearCart } = props;
    return (
        <div>

            <Header cart={cart} />
            <Discount />
            <div className="cart_area section_padding_100 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <Cartview cart={cart} onAdd={onAdd} onRemove={onRemove} />
                            <Cartfooter clearCart={clearCart} />

                        </div>
                    </div>

                    <Cart3section cart={cart} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart