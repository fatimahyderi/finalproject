import React from 'react'
//import Anchor from './Anchor'

function Homeslider() {
  return (
    <section className="home-slider owl-carousel img">
      <div className="slider-item">
      	<div className="overlay"></div>
        <div className="container">
          <div className="row slider-text align-items-center" data-scrollax-parent="true">

            <div className="col-md-6 col-sm-12 ftco-animate">
            	<span className="subheading">Delicious</span>
              <h1 className="mb-4">Italian Cuizine</h1>
              <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p></p>
            </div>
            <div className="col-md-6 ftco-animate">
            	<img src="images/bg_1.png" className="img-fluid" alt=""/>
            </div>

          </div>
        </div>
      </div>

      <div className="slider-item">
      	<div className="overlay"></div>
        <div className="container">
          <div className="row slider-text align-items-center" data-scrollax-parent="true">

            <div className="col-md-6 col-sm-12 order-md-last ftco-animate">
            	<span className="subheading">Crunchy</span>
              <h1 className="mb-4">Italian Pizza</h1>
              <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p> </p>
            </div>
            <div className="col-md-6 ftco-animate">
            	<img src="images/bg_2.png" className="img-fluid" alt=""/>
            </div>

          </div>
        </div>
      </div>

      <div className="slider-item">
      	<div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

            <div className="col-md-7 col-sm-12 text-center ftco-animate">
            	<span className="subheading">Welcome</span>
              <h1 className="mb-4">We cooked your desired Pizza Recipe</h1>
              <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p></p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Homeslider