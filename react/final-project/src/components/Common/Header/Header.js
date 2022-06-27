
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCartContext} from '../../../App';

function Header(props) {
	const {cart} = props
	const cartq = cart.length
	const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
	console.log(cartq)
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
											<a href="/"><img src="./img/img/core-img/logo.png" alt="" /></a>
										</div>

										<div className="header-cart-menu d-flex align-items-center ml-auto">

											<div className="cart">
												<a href="/cart" id="header-cart-btn"><span className="cart_quantity">{cartq}</span> <i className="ti-bag"></i> Your Bag {itemPrice}</a>

												<ul className="cart-list">
													<li>
														<a href="/" className="image"><img src="img/product-img/product-10.jpg" className="cart-thumb" alt="" /></a>
														<div className="cart-item-desc">
															<h6><a href="/">Women's Fashion</a></h6>
															<p>1x - <span className="price">$10</span></p>
														</div>
														<span className="dropdown-product-remove"><i className="icon-cross"></i></span>
													</li>
													<li>
														<a href="/" className="image"><img src="img/product-img/product-11.jpg" className="cart-thumb" alt="" /></a>
														<div className="cart-item-desc">
															<h6><a href="/">Women's Fashion</a></h6>
															<p>1x - <span className="price">$10</span></p>
														</div>
														<span className="dropdown-product-remove"><i className="icon-cross"></i></span>
													</li>
													<li className="total">
														<span className="pull-right">Total: $20.00</span>
														<a href="/cart" className="btn btn-sm btn-cart">Cart</a>
														<a href="/checkout" className="btn btn-sm btn-checkout">Checkout</a>
													</li>
												</ul>
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
										<a href="/"><span className="karl-level">Share</span> <i className="fa fa-pinterest" aria-hidden="true"></i></a>
										<a href="facebook.com">hell<i className="fa fa-facebook" aria-hidden="true"></i></a>
										<a href="twitter.com">hell<i className="fa fa-twitter" aria-hidden="true"></i></a>
										<a href="linkedin.com">hell<i className="fa fa-linkedin" aria-hidden="true"></i></a>
									</div>

									<div className="main-menu-area">
										<nav className="navbar navbar-expand-lg align-items-start">

											<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="index.htmlkarl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu"></i></span></button>

											<div className="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
												<ul className="navbar-nav animated" id="nav">
													<li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
													<li className="nav-item dropdown">
														<a className="nav-link dropdown-toggle" href="/" id="karlDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
														<div className="dropdown-menu" aria-labelledby="karlDropdown">
															<Link className="dropdown-item" to="/">Home</Link>
															<Link className="dropdown-item" to="/shop">Shop</Link>
															<Link className="dropdown-item" to="/productdetails">Product Details</Link>
															<Link className="dropdown-item" to="/cart">Cart</Link>
															<Link className="dropdown-item" to="/checkout">Checkout</Link>
														</div>
													</li>
													<li className="nav-item"><a className="nav-link" href="/">Dresses</a></li>
													<li className="nav-item"><a className="nav-link" href="/"><span className="karl-level">hot</span> Shoes</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
												</ul>
											</div>
										</nav>
									</div>

									<div className="help-line">
										<a href="tel:+346573556778"><i className="ti-headphone-alt"></i> +34 657 3556 778</a>
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