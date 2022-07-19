import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <>
     <footer className="footer_area">
            <div className="container">
                <div className="row">
                    
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="single_footer_area">
                            <div className="footer-logo">
                                <img src="./img/img/core-img/logo.png" alt=""/>
                            </div>
                            <div className="copywrite_text d-flex align-items-center">
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="single_footer_area">
                            <ul className="footer_widget_menu">
                                <li><Link to="/main">About</Link></li>
                                <li><Link to="/main">Blog</Link></li>
                                <li><Link to="/main">Faq</Link></li>
                                <li><Link to="/main">Returns</Link></li>
                                <li><Link to="/main">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="single_footer_area">
                            <ul className="footer_widget_menu">
                                <li><Link to="/main">My Account</Link></li>
                                <li><Link to="/main">Shipping</Link></li>
                                <li><Link to="/main">Our Policies</Link></li>
                                <li><Link to="/main">Afiliates</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-5">
                        <div className="single_footer_area">
                            <div className="footer_heading mb-30">
                                <h6>Subscribe to our newsletter</h6>
                            </div>
                            <div className="subscribtion_form">
                                <form>
                                    <input type="email" name="mail" className="mail" placeholder="Your email here" />
                                    <button className="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>

               
                <div className="footer_bottom_area">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer_social_area text-center">
                                <Link to="/main"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                <Link to="/main"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="/main"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="/main"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        

    </>
  )
}

export default Footer