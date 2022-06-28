import React from 'react'

function Billingaddress() {
  return (
    <div className="col-12 col-md-6">
                            <div className="checkout_details_area mt-50 clearfix">

                                <div className="cart-page-heading">
                                    <h5>Billing Address</h5>
                                    <p>Enter your cupone code</p>
                                </div>

                                <form action="#" method="post">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="first_name">First Name <span>*</span></label>
                                            <input type="text" className="form-control" id="first_name" value="" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="last_name">Last Name <span>*</span></label>
                                            <input type="text" className="form-control" id="last_name" value="" required />
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
                                            <input type="text" className="form-control mb-3" id="street_address" value="" />
                                            <input type="text" className="form-control" id="street_address2" value="" />
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
                                            <input type="number" className="form-control" id="phone_number" min="0" value="" />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="email_address">Email Address <span>*</span></label>
                                            <input type="email" className="form-control" id="email_address" value="" />
                                        </div>

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
                                    </div>
                                </form>
                            </div>
                        </div>
  )
}

export default Billingaddress