import React from 'react'

function TopCategory() {
  return (
    <section className="top_catagory_area d-md-flex clearfix">

					<div className="single_catagory_area d-flex align-items-center bg-img" style={{ backgroundImage: `url(./img/img/bg-img/bg-2.jpg)` }}>
						<div className="catagory-content">
							<h6>On Accesories</h6>
							<h2>Sale 30%</h2>
							<a href="#" className="btn karl-btn">SHOP NOW</a>
						</div>
					</div>

					<div className="single_catagory_area d-flex align-items-center bg-img" style={{ backgroundImage: `url(./img/img/bg-img/bg-3.jpg)` }}>
						<div className="catagory-content">
							<h6>in Bags excepting the new collection</h6>
							<h2>Designer bags</h2>
							<a href="#" className="btn karl-btn">SHOP NOW</a>
						</div>
					</div>
				</section>

  )
}

export default TopCategory