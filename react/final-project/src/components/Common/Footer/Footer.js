import React from 'react'

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
                                <li><a href="about.html">About</a></li>
                                <li><a href="Blog.html">Blog</a></li>
                                <li><a href="index.html">Faq</a></li>
                                <li><a href="index.html">Returns</a></li>
                                <li><a href="index.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                        <div className="single_footer_area">
                            <ul className="footer_widget_menu">
                                <li><a href="index.html">My Account</a></li>
                                <li><a href="index.html">Shipping</a></li>
                                <li><a href="index.html">Our Policies</a></li>
                                <li><a href="index.html">Afiliates</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-5">
                        <div className="single_footer_area">
                            <div className="footer_heading mb-30">
                                <h6>Subscribe to our newsletter</h6>
                            </div>
                            <div className="subscribtion_form">
                                <form action="index.html" method="post">
                                    <input type="email" name="mail" className="mail" placeholder="Your email here" />
                                    <button type="submit" className="submit">Subscribe</button>
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
                                <a href="index.html">hell<i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                <a href="index.html">hell<i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="index.html">hell<i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="index.html">hell<i className="fa fa-linkedin" aria-hidden="true"></i></a>
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