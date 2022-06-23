import React from 'react'
//import Anchor from './Anchor'

function Intro() {
  return (
    <section className="ftco-intro">
    <div className="container-wrap">
        <div className="wrap d-md-flex">
            <div className="info">
                <div className="row no-gutters">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-phone"></span></div>
                        <div className="text">
                            <h3>000 (123) 456 7890</h3>
                            <p>A small river named Duden flows</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-my_location"></span></div>
                        <div className="text">
                            <h3>198 West 21th Street</h3>
                            <p>Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="icon"><span className="icon-clock-o"></span></div>
                        <div className="text">
                            <h3>Open Monday-Friday</h3>
                            <p>8:00am - 9:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social d-md-flex pl-md-5 p-4 align-items-center">
                <ul className="social-icon">
          <li className="ftco-animate"><span className="icon-twitter"></span></li>
          <li className="ftco-animate"><span className="icon-facebook"></span></li>
          <li className="ftco-animate"><span className="icon-instagram"></span></li>
        </ul>
            </div>
        </div>
    </div>
</section>

  )
}

export default Intro