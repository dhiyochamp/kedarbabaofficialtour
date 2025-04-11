import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Twitter, Facebook, Youtube, Linkedin, Home, HelpCircle, FileText, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <a className="btn btn-link d-flex align-items-center" href="/about">
                <Info className="me-2" size={16} /> About Us
              </a>
              <a className="btn btn-link d-flex align-items-center" href="/contact">
                <Phone className="me-2" size={16} /> Contact Us
              </a>
              <a className="btn btn-link d-flex align-items-center" href="/privacy-policy">
                <FileText className="me-2" size={16} /> Privacy Policy
              </a>
              <a className="btn btn-link d-flex align-items-center" href="/terms-conditions">
                <FileText className="me-2" size={16} /> Terms &amp; Conditions
              </a>
              <a className="btn btn-link d-flex align-items-center" href="/faqs">
                <HelpCircle className="me-2" size={16} /> FAQs &amp; Help
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2 d-flex align-items-center">
                <MapPin className="me-2" size={16} /> 
                <span>G.C Chamber, Shop No-27 Plot No.66, Opposite Noori Masjid, Gandhidham-370201</span>
              </p>
              <p className="mb-2 d-flex align-items-center">
                <Phone className="me-2" size={16} /> 
                <span>+91 90990 81248</span>
              </p>
              <p className="mb-2 d-flex align-items-center">
                <Mail className="me-2" size={16} /> 
                <span>kedarbabofficialtour@gmail.com</span>
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social me-2" href="#"><Twitter size={16} /></a>
                <a className="btn btn-outline-light btn-social me-2" href="#"><Facebook size={16} /></a>
                <a className="btn btn-outline-light btn-social me-2" href="#"><Youtube size={16} /></a>
                <a className="btn btn-outline-light btn-social me-2" href="#"><Linkedin size={16} /></a>
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
                  <a href="/" className="me-3 d-inline-flex align-items-center">
                    <Home size={16} className="me-1" /> <span className="d-none d-sm-inline">Home</span>
                  </a>
                  <a href="/cookies" className="me-3 d-inline-flex align-items-center">
                    <FileText size={16} className="me-1" /> <span className="d-none d-sm-inline">Cookies</span>
                  </a>
                  <a href="/help" className="me-3 d-inline-flex align-items-center">
                    <HelpCircle size={16} className="me-1" /> <span className="d-none d-sm-inline">Help</span>
                  </a>
                  <a href="/faqs" className="d-inline-flex align-items-center">
                    <Info size={16} className="me-1" /> <span className="d-none d-sm-inline">FAQs</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Mobile Bottom Navbar - 3 Buttons Only */}
      <div className="mobile-navbar d-md-none">
        <div className="nav-item-animate">
          <Link to="/" className="nav-item hover-effect">
            <Home size={20} />
            <span>Home</span>
          </Link>
        </div>
        
        <div className="nav-item-animate">
          <Link to="/packages" className="nav-item hover-effect">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" className="icon">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <span>Packages</span>
          </Link>
        </div>
        
        <div className="nav-item-animate">
          <a 
            href="https://wa.me/919099081248?text=Hi,%20I'm%20interested%20in%20booking%20a%20yatra%20package." 
            className="nav-item hover-effect whatsapp-nav-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 448 512" width="20" height="20" className="icon">
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"
              />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Mobile Bottom Navbar - Styled to match your main navbar */
        .mobile-navbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #ffffff;
          display: flex;
          justify-content: space-around;
          padding: 10px 0;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .mobile-navbar .nav-item-animate {
          flex: 1;
          text-align: center;
          transition: transform 0.3s;
        }
        
        .mobile-navbar .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #555555;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          padding: 8px 5px;
          transition: all 0.3s;
          height: 100%;
        }

        .mobile-navbar .nav-item .icon {
          margin-bottom: 6px;
        }

        .mobile-navbar .nav-item span {
          margin-top: 4px;
        }
        
        .mobile-navbar .hover-effect:hover {
          color: #ff6b6b;
        }
        
        .mobile-navbar .whatsapp-nav-btn {
          color: #25D366;
        }
        
        .mobile-navbar .whatsapp-nav-btn:hover {
          color: #128C7E;
        }
        
        .nav-item-animate:hover {
          transform: translateY(-3px);
        }
        
        /* Animation for the icons */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-animation .nav-item-animate {
          animation: fadeInUp 0.5s forwards;
          opacity: 0;
        }
        
        .nav-animation .nav-item-animate:nth-child(1) { animation-delay: 0.1s; }
        .nav-animation .nav-item-animate:nth-child(2) { animation-delay: 0.2s; }
        .nav-animation .nav-item-animate:nth-child(3) { animation-delay: 0.3s; }
        
        @media (max-width: 768px) {
          /* Adjust footer bottom padding to avoid overlap with navbar */
          .footer {
            padding-bottom: 70px;
          }
        }
      `}</style>
    </div>
  )
}
