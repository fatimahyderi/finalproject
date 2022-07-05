import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Billingaddress(props) {
    const nav = useNavigate();
    const {cart,clearCart} = props
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

        setUser({ ...user, [name]:value});

    }
    
    const PostData =  (e) => {
        e.preventDefault()
        console.log(user)
        let formdata = new FormData(e.target);
        const url = "http://localhost:8080/items/order"
        fetch(url, {
            method: "POST",
            body: new URLSearchParams(formdata)
        }).then(res => res.json()).then(response => {
            console.log(response._id)
            const orderid = response._id
            clearCart()
            nav(`/order/${orderid}`)
        }).catch(function (response) {
            //handle error
            console.log(response);
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
                                        {/* <div className="col-12 mb-3">
                                            <label htmlFor="company">Company Name</label>
                                            <input type="text" className="form-control" id="company" value="" />
                                        </div> */}
                                        {/* <div className="col-12 mb-3">
                                            <label htmlFor="country">Country <span>*</span></label>
                                            <select className="custom-select d-block w-100" id="country">
                                                <option value="usa">United States</option>
                                                <option value="uk">United Kingdom</option>
                                                <option value="ger">Germany</option>
                                                <option value="fra">France</option>
                                                <option value="ind">India</option>
                                                <option value="aus">Australia</option>
                                                <option value="bra">Brazil</option>
                                                <option value="cana">Canada</option>
                                            </select>
                                        </div> */}
                                        <div className="col-12 mb-3">
                                            <label htmlFor="street_address">Address <span>*</span></label>
                                            <input type="text" className="form-control" name='address' id="street_address2" value={user.address} onChange={handleInputs} required />
                                        </div>
                                        {/* <div className="col-12 mb-3">
                                            <label htmlFor="postcode">Postcode <span>*</span></label>
                                            <input type="text" className="form-control" id="postcode" value="" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="city">Town/City <span>*</span></label>
                                            <input type="text" className="form-control" id="city" value="" />
                                        </div> */}
                                        {/* <div className="col-12 mb-3">
                                            <label htmlFor="state">Province <span>*</span></label>
                                            <input type="text" className="form-control" id="state" value="" />
                                        </div> */}
                                        <div className="col-12 mb-3">
                                            <label htmlFor="phone_number">Phone No <span>*</span></label>
                                            <input type="number" className="form-control" name='phonenumber' id="phone_number" min="0" value={user.phonenumber} onChange={handleInputs} required/>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="email_address">Email Address <span>*</span></label>
                                            <input type="email" className="form-control" name='email' id="email_address" value={user.email} onChange={handleInputs} required/>
                                        </div>
                                        <input type="hidden" id="custId" name="totalamount" value={grandtotal}></input>
                                        <input type="hidden" id="custId" name="product" value={cartproduct_id}></input>
                                        
                                        {/* <div className="col-12">
                                            <div className="custom-control custom-checkbox d-block mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Terms and conitions</label>
                                            </div>
                                            <div className="custom-control custom-checkbox d-block mb-2">
                                                  <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2">Create an accout</label>
                                            </div>
                                            <div className="custom-control custom-checkbox d-block">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label" htmlFor="customCheck3">Subscribe to our newsletter</label>
                                            </div>
                                        </div> */}
                                        {/* <a href="index.html" class="btn karl-checkout-btn">Place Order</a> */}
                                        <button  className="btn karl-checkout-btn" type='submit'>Place Order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
  )
}

export default Billingaddress