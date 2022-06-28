import React, {useState} from 'react'
import Modalview from '../ModalView/ModalView.js'

function NewArrival(props) {
    const { product, onAdd, onRemove } = props
    const[modalview,getmodalview] = useState({})

    const viewModal = (data) => {
        console.log(data.price)
        getmodalview(data)
        
    }
    console.log(`modalview ${modalview}`)
    return (
        <>
           
        <Modalview modalview={modalview} onAdd={onAdd} onRemove={onRemove}/>


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

                <div className="karl-projects-menu mb-100">
                    <div className="text-center portfolio-menu">
                        <button className="btn active" data-filter="*">ALL</button>
                        <button className="btn" data-filter=".women">WOMAN</button>
                        <button className="btn" data-filter=".man">MAN</button>
                        <button className="btn" data-filter=".access">ACCESSORIES</button>
                        <button className="btn" data-filter=".shoes">shoes</button>
                        <button className="btn" data-filter=".kids">KIDS</button>
                    </div>
                </div>

                <div className="container">
                    <div className="row karl-new-arrivals">

                        {product && product.map((data, key) => {
                            return (
                                <>
                                    <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s" key={key}>

                                        <div className="product-img">
                                            <img src={`./img/img/product-img/${data.imagepath}`} alt="" />
                                            <div className="product-quicview">
                                                <button onClick={() => viewModal(data)} data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></button>
                                            </div>
                                        </div>

                                        <div className="product-description">
                                            <h4 className="product-price">{data.price}</h4>
                                            <p>{data.name}</p>

                                            <button onClick={() => onAdd(data)} className="add-to-cart-btn">ADD TO CART</button>
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