import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Billingaddress(props) {
    const nav = useNavigate();
    const { cart, clearCart } = props
    const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = cart.length === 0 || itemPrice > 2000 ? 0 : 150;
    const grandtotal = itemPrice + shippingPrice
    const cartproduct_id2 = []
    cart.map((item) => {
        cartproduct_id2.push(item._id)
    })
    const cartproduct_id = cartproduct_id2

    const [user, setUser] = useState({
        email: "", address: "", firstname: "", lastname: "", phonenumber: ""
    });

    let name, value;

    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }

    const PostData = (e) => {
        console.log("orderbutton")
        e.preventDefault()
        let formdata = new FormData(e.target);
        const url = `${process.env.REACT_APP_SERVER_PATH}/items/order`
        fetch(url, {
            method: "POST",
            body: new URLSearchParams(formdata)
        }).then(res => res.json()).then(response => {
            const orderid = response._id
            clearCart()
            nav(`/order/${orderid}`)
        }).catch(function (response) {
        });
    }
    return (
        <div className="col-12 col-md-6">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-page-heading">
                    <h5>Billing Address</h5>
                    <p>Enter your cupone code</p>
                </div>

                <form onSubmit={PostData}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="first_name">First Name <span>*</span></label>
                            <input type="text" className="form-control" name='firstname' id="first_name" value={user.firstname} onChange={handleInputs} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="last_name">Last Name <span>*</span></label>
                            <input type="text" className="form-control" name='lastname' id="last_name" value={user.lastname} onChange={handleInputs} required />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="street_address">Address <span>*</span></label>
                            <input type="text" className="form-control" name='address' id="street_address2" value={user.address} onChange={handleInputs} required />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="phone_number">Phone No <span>*</span></label>
                            <input type="number" className="form-control" name='phonenumber' id="phone_number" min="0" value={user.phonenumber} onChange={handleInputs} required />
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="email_address">Email Address <span>*</span></label>
                            <input type="email" className="form-control" name='email' id="email_address" value={user.email} onChange={handleInputs} required />
                        </div>
                        <input type="hidden" id="custId" name="totalamount" value={grandtotal}></input>
                        <input type="hidden" id="custId" name="product" value={cartproduct_id}></input>
                        <button className="btn karl-checkout-btn" type='submit'>Place Order</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Billingaddress