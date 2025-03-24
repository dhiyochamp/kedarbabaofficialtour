import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* WhatsApp Chat Button - Moved to Left Side */}
      <a 
        href="https://wa.me/919099081248?text=Hi,%20I'm%20interested%20in%20booking%20a%20yatra%20package."
        className={`whatsapp-chat-btn ${isVisible ? 'visible' : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="whatsapp-icon"
        >
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          />
        </svg>
        <span className="whatsapp-text">Chat with us</span>
        <div className="pulse-animation"></div>
      </a>

      <style jsx>{`
        .whatsapp-chat-btn {
          position: fixed;
          left: 25px;
          bottom: 25px;
          display: flex;
          align-items: center;
          padding: 12px 24px;
          border-radius: 50px;
          background-color: #25D366;
          color: white;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          transition: all 0.3s ease;
          text-decoration: none;
          opacity: 0;
          transform: translateY(20px);
          overflow: hidden;
        }
        
        .whatsapp-chat-btn.visible {
          opacity: 1;
          transform: translateY(0);
          animation: bounce 1s ease;
        }

        .whatsapp-chat-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          background-color: #22c55e;
        }

        .whatsapp-icon {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          animation: shake 1.5s ease infinite;
          animation-delay: 3s;
        }
        
        .pulse-animation {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50px;
          background-color: #25D366;
          opacity: 0.3;
          top: 0;
          left: 0;
          z-index: -1;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-10deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-5deg); }
          80% { transform: rotate(5deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @media (max-width: 768px) {
          .whatsapp-chat-btn {
            padding: 16px;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            justify-content: center;
            left: 15px;
            bottom: 20px;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
          }

          .whatsapp-text {
            display: none;
          }

          .whatsapp-icon {
            margin: 0;
            width: 32px;
            height: 32px;
          }
          
          .pulse-animation {
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  )
}