import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
          <a className="navbar-brand" href="index.html"><span className="flaticon-pizza-1 mr-1"></span>Pizza<br/><small>Delicous</small></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="menu.html" className="nav-link">Menu</a></li>
          <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
        </ul>
      </div>
      </div>
  </nav>
  )
}

export default Navbar