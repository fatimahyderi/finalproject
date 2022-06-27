import React, { useContext } from 'react'
import Header from '../Common/Header/Header'
import Discount from '../Common/Discount-Secction/Discount'
import Footer from '../Common/Footer/Footer'
import { ShoppingCartContext } from '../../App'
import Cartview from './Cartview/Cartview'
import Cartfooter from './Cartfooter/Cartfooter'
import Cart3section from './Cart3section/Cart3section'
function Cart(props) {
    const { cart, onAdd, onRemove, clearCart} = props;
    // const [cart, setCart] = useContext(ShoppingCartContext);

    // const onAdd = (product) => {
    //     setCart([...cart, product]);
    // }

    // const onRemove = (product) => {
    //     setCart(cart.filter((productInCart) => productInCart !== product))
    // }
    return (
        <div>

            <Header cart={cart}/>
            <Discount />
            <div className="cart_area section_padding_100 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <Cartview cart={cart} onAdd={onAdd} onRemove={onRemove}/>
                            <Cartfooter clearCart={clearCart}/>

                        </div>
                    </div>

                    <Cart3section cart={cart}/>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart