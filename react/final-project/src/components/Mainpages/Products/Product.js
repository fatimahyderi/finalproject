import React from 'react'
import Header from '../../Partials/Common/Header/Header';
import Discount from '../../Partials/Common/Discount-Secction/Discount';
import Footer from '../../Partials/Common/Footer/Footer';
import Shop from '../../Partials/Shop/Shop';
import '../../../css/core-style.css'
import '../../../css/responsive.css'

function Product(props) {
    const { product, onAdd, cart, onRemove } = props


    return (
        <>
            <Header cart={cart} />
            <Discount />

            <section className="shop_grid_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <Shop product={product} onAdd={onAdd} onRemove={onRemove} cart={cart} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product