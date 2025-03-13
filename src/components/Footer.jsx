import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Company</h4>
              <a className="btn btn-link" href="/about">About Us</a>
              <a className="btn btn-link" href="/contact">Contact Us</a>
              <a className="btn btn-link" href="/privacy-policy">Privacy Policy</a>
              <a className="btn btn-link" href="/terms-conditions">Terms &amp; Conditions</a>
              <a className="btn btn-link" href="/faqs">FAQs &amp; Help</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" /> E-110, Piyush Tower, Parking No. 3, Transport Nagar, Lucknow, Uttar Pradesh</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" /> +91 90990 81248</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" /> kedarbabofficialtour@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube" /></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4"><img className="img-fluid bg-light p-1" src="assets/img/char-dham.jpg" alt="Char Dham Yatra" /></div>
                <div className="col-4"><img className="img-fluid bg-light p-1" src="assets/img/vaishno-devi.jpg" alt="Vaishno Devi" /></div>
                <div className="col-4"><img className="img-fluid bg-light p-1" src="assets/img/amarnath.jpg" alt="Amarnath Yatra" /></div>
                <div className="col-4"><img className="img-fluid bg-light p-1" src="assets/img/golden-temple.jpg" alt="Golden Temple" /></div>
                <div className="col-4"><img className="img-fluid bg-light p-1" src="assets/img/muktinath.jpg" alt="Muktinath Temple" /></div>
                <div className="col-4"><img className="img-fluid bg-light p-1" src="assets/img/everest-base.jpg" alt="Everest Base Camp" /></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>Stay updated on our latest yatra packages and spiritual journeys.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="email" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © 2025 <a className="border-bottom" href="#">Kedar Baba Official Tour</a>, All Rights Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/cookies">Cookies</a>
                  <a href="/help">Help</a>
                  <a href="/faqs">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  )
}
