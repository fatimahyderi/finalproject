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
                <div id="accordion" role="tablist" className="mb-4">
                    <div className="card">
                        <div className="card-header" role="tab" id="headingOne">
                            <h6 className="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><i className="fa fa-circle-o mr-3"></i>Paypal</a>
                            </h6>
                        </div>

                        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingTwo">
                            <h6 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa fa-circle-o mr-3"></i>cash on delievery</a>
                            </h6>
                        </div>
                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingThree">
                            <h6 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa fa-circle-o mr-3"></i>credit card</a>
                            </h6>
                        </div>
                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingFour">
                            <h6 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"><i className="fa fa-circle-o mr-3"></i>direct bank transfer</a>
                            </h6>
                        </div>
                        <div id="collapseFour" className="collapse show" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum autem eveniet saepe fugit, impedit magni.</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Orderdetails