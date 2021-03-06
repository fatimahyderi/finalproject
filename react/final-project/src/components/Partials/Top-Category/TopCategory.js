import React from 'react'
import { Link } from 'react-router-dom'

function TopCategory() {
	return (
		<section className="top_catagory_area d-md-flex clearfix">

			<div className="single_catagory_area d-flex align-items-center bg-img" style={{ backgroundImage: `url(./img/img/bg-img/bg-2.jpg)` }}>
				<div className="catagory-content">
					<h6>On Accesories</h6>
					<h2>Sale 30%</h2>
					<Link to="/shop" className="btn karl-btn">SHOP NOW</Link>
				</div>
			</div>

			<div className="single_catagory_area d-flex align-items-center bg-img" style={{ backgroundImage: `url(./img/img/bg-img/bg-3.jpg)` }}>
				<div className="catagory-content">
					<h6>in Bags excepting the new collection</h6>
					<h2>Designer bags</h2>
					<Link to="/shop" className="btn karl-btn">SHOP NOW</Link>
				</div>
			</div>
		</section>

	)
}

export default TopCategory