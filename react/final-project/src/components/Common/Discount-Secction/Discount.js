import React from 'react'
import PropTypes from 'prop-types'

function Discount(props) {
  return (
    
    <section className="top-discount-area d-md-flex align-items-center">

    <div className="single-discount-area">
        <h5>Free Shipping &amp; Returns</h5>
        <h6><a href="index.html">BUY NOW</a></h6>
    </div>

    <div className="single-discount-area">
        <h5>20% Discount for all dresses</h5>
        <h6>USE CODE: Colorlib</h6>
    </div>

    <div className="single-discount-area">
        <h5>20% Discount for students</h5>
        <h6>USE CODE: Colorlib</h6>
    </div>
</section>
  )
}

Discount.propTypes = {}

export default Discount
