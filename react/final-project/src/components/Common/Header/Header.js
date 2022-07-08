import React from 'react'
import { Link } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
	const { cart } = props
	const cartq = cart.length
	const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
	

	return (
		<>
			<div id="wrapper">
				<header className="header_area bg-img background-overlay-white" style={{ backgroundImage: `url(./img/img/bg-img/bg-1.jpg)` }}>

					<div className="top_header_area">
						<div className="container h-100">
							<div className="row h-100 align-items-center justify-content-end">

								<div className="col-12 col-lg-7">
									<div className="top_single_area d-flex align-items-center">

										<div className="top_logo">
											<Link to="/main"><img src="./img/img/core-img/logo.png" alt="" /></Link>
										</div>

										<div className="header-cart-menu d-flex align-items-center ml-auto">

											<div className="cart">
												<Link to="/cart" id="header-cart-btn"><span className="cart_quantity">{cartq}</span> <i className="ti-bag"></i> Your Bag {itemPrice}</Link>
											</div>

										</div>
									</div>
								</div>

							</div>
						</div>
					</div>


					<div className="main_header_area">
						<div className="container h-100">
							<div className="row h-100">
								<div className="col-12 d-md-flex justify-content-between">

									<div className="header-social-area">
										<Link to=""><span className="karl-level">Share</span> <i className="fa fa-pinterest" aria-hidden="true"></i></Link>
										<Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link>
										<Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link>
										<Link to=""><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
									</div>

									<div className="main-menu-area">
										<nav className="navbar navbar-expand-lg align-items-start">

											<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu"></i></span></button>

											<div className="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
												<ul className="navbar-nav animated" id="nav">
													<li className="nav-item active"><Link className="nav-link" to="/main">Home</Link></li>
													<li className="nav-item dropdown">
														<Link className="nav-link dropdown-toggle" to="/main" id="karlDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
														<div className="dropdown-menu" aria-labelledby="karlDropdown">
															<Link className="dropdown-item" to="/main">Home</Link>
															<Link className="dropdown-item" to="/shop">Shop</Link>
															<Link className="dropdown-item" to="/cart">Cart</Link>
															<Link className="dropdown-item" to="/checkout">Checkout</Link>
														</div>
													</li>
													<li className="nav-item"><Link className="nav-link" to="/main">Dresses</Link></li>
													<li className="nav-item"><Link className="nav-link" to="/main"><span className="karl-level">hot</span> Shoes</Link></li>
													<li className="nav-item"><Link className="nav-link" to="/main">Contact</Link></li>
												</ul>
											</div>
										</nav>
									</div>

									<div className="help-line">
										<Link to="tel:+346573556778"><i className="ti-headphone-alt"></i> +34 657 3556 778</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

			</div>
		</>


	)
}

export default Header