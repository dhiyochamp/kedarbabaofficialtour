import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" /> E-110, Piyush Tower, Parking No. 3, Transport Nagar, Lucknow, Uttar Pradesh
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" /> +91 90990 81248
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" /> kedarbabofficialtour@gmail.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-instagram fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-youtube fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0 d-flex align-items-center">
            <img src="/assets/img/logo.png" alt="Kedar Baba Official Tour" className="me-2" style={{ height: 50 }} />
            <h1 className="text-primary m-0">Kedar Baba Official Tour</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/services" className="nav-item nav-link">Services</Link>
              <Link to="/packages" className="nav-item nav-link">Packages</Link>
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</Link>
                <div className="dropdown-menu m-0">
                  <Link to="/destination" className="dropdown-item">Destinations</Link>
                  <Link to="/booking" className="dropdown-item">Booking</Link>
                  <Link to="/guides" className="dropdown-item">Travel Guides</Link>
                  <Link to="/testimonials" className="dropdown-item">Testimonials</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </div>
  )
}

export default Header
