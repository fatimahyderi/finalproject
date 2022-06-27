import React from 'react'

function Billingaddress() {
  return (
    <div class="col-12 col-md-6">
                            <div class="checkout_details_area mt-50 clearfix">

                                <div class="cart-page-heading">
                                    <h5>Billing Address</h5>
                                    <p>Enter your cupone code</p>
                                </div>

                                <form action="#" method="post">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="first_name">First Name <span>*</span></label>
                                            <input type="text" class="form-control" id="first_name" value="" required />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="last_name">Last Name <span>*</span></label>
                                            <input type="text" class="form-control" id="last_name" value="" required />
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="company">Company Name</label>
                                            <input type="text" class="form-control" id="company" value="" />
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="country">Country <span>*</span></label>
                                            <select class="custom-select d-block w-100" id="country">
                                                <option value="usa">United States</option>
                                                <option value="uk">United Kingdom</option>
                                                <option value="ger">Germany</option>
                                                <option value="fra">France</option>
                                                <option value="ind">India</option>
                                                <option value="aus">Australia</option>
                                                <option value="bra">Brazil</option>
                                                <option value="cana">Canada</option>
                                            </select>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="street_address">Address <span>*</span></label>
                                            <input type="text" class="form-control mb-3" id="street_address" value="" />
                                            <input type="text" class="form-control" id="street_address2" value="" />
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="postcode">Postcode <span>*</span></label>
                                            <input type="text" class="form-control" id="postcode" value="" />
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="city">Town/City <span>*</span></label>
                                            <input type="text" class="form-control" id="city" value="" />
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="state">Province <span>*</span></label>
                                            <input type="text" class="form-control" id="state" value="" />
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="phone_number">Phone No <span>*</span></label>
                                            <input type="number" class="form-control" id="phone_number" min="0" value="" />
                                        </div>
                                        <div class="col-12 mb-4">
                                            <label for="email_address">Email Address <span>*</span></label>
                                            <input type="email" class="form-control" id="email_address" value="" />
                                        </div>

                                        <div class="col-12">
                                            <div class="custom-control custom-checkbox d-block mb-2">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                <label class="custom-control-label" for="customCheck1">Terms and conitions</label>
                                            </div>
                                            <div class="custom-control custom-checkbox d-block mb-2">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                <label class="custom-control-label" for="customCheck2">Create an accout</label>
                                            </div>
                                            <div class="custom-control custom-checkbox d-block">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                                <label class="custom-control-label" for="customCheck3">Subscribe to our newsletter</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
  )
}

export default Billingaddress