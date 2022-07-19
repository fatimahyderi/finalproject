import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonials() {
    return (
        <section className="karl-testimonials-area section_padding_100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section_heading text-center">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="karl-testimonials-slides ">

                            <OwlCarousel items={1}
                                loop
                                nav
                                margin={8} autoplay={true} >
                                <div className="single-testimonial-area text-center">
                                    <span className="quote">"</span>
                                    <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                                        <div className="tes-thumbnail">
                                            <img src="./img/img/bg-img/tes-1.jpg" alt="" />
                                        </div>
                                        <div className="testi-data">
                                            <p>Michelle Williams</p>
                                            <span>Client, Los Angeles</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="single-testimonial-area text-center">
                                    <span className="quote">"</span>
                                    <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                                        <div className="tes-thumbnail">
                                            <img src="./img/img/bg-img/tes-1.jpg" alt="" />
                                        </div>
                                        <div className="testi-data">
                                            <p>Michelle Williams</p>
                                            <span>Client, Los Angeles</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="single-testimonial-area text-center">
                                    <span className="quote">"</span>
                                    <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                                        <div className="tes-thumbnail">
                                            <img src="./img/img/bg-img/tes-1.jpg" alt="" />
                                        </div>
                                        <div className="testi-data">
                                            <p>Michelle Williams</p>
                                            <span>Client, Los Angeles</span>
                                        </div>
                                    </div>
                                </div>
                                </OwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonials