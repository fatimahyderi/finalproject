import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import Modalview from '../ModalView/ModalView.js'
import './newarrival.css'

function NewArrival(props) {
    const { product, onAdd, onRemove, cart } = props
    const [modalview, getmodalview] = useState({})
    
     const items = product.slice(Math.max(product.length - 6, 0))
     console.log(items);
    

    const viewModal = (data) => {
        console.log(data.price)
        getmodalview(data)

    }
    return (
        <>

            <Modalview modalview={modalview} onAdd={onAdd} onRemove={onRemove} cart={cart} />


            <section className="new_arrivals_area section_padding_100_0 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading text-center">
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row karl-new-arrivals">

                        {items && items.map((data, key) => {
                            return (
                                <>
                                    <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s" key={key}>

                                        <div className="product-img">
                                            <img src={`./img/img/product-img/${data.image}`} alt="" />
                                            <div className="product-quicview">
                                                <button onClick={() => viewModal(data)} data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></button>
                                            </div>
                                        </div>

                                        <div className="product-description">
                                            <h4 className="product-price">{data.name}</h4>
                                            <p>Rs. <span style={{ fontWeight: "bolder", color: "red" }} > {data.price} </span></p>
                                            <p>{data.category}</p>
                                            <Popup trigger={<Link to='' className="add-to-cart-btn" onClick={() => onAdd(data)}>ADD TO CART</Link>}
                                                position="top center">
                                                <div>Product added in cart</div>
                                                <Link to='/cart'><button>View Cart</button></Link><br />
                                                <Link to='/shop'><button>Continue shopping</button></Link>
                                            </Popup>

                                        </div>

                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrival