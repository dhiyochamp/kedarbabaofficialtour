import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.nav-item.dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <small className="me-3 text-light fade-in-delay-1">
                <i className="fa fa-map-marker-alt me-2" />G.C Chamber, Shop No-27 Plot No.66,Opposite Noori Masjid,Gandhidham-370201
              </small>
              <small className="me-3 text-light fade-in-delay-2">
                <i className="fa fa-phone-alt me-2" /> +91 90990 81248
              </small>
              <small className="text-light fade-in-delay-3">
                <i className="fa fa-envelope-open me-2" /> kedarbabofficialtour@gmail.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center fade-in-delay-4" style={{ height: 45 }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2 social-icon" href="#">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2 social-icon" href="#">
                <i className="fab fa-instagram fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2 social-icon" href="#">
                <i className="fab fa-youtube fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle social-icon whatsapp-btn" href="https://wa.me/919099081248" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav 
          className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 slide-down ${isScrolled ? 'sticky-top shadow-sm bg-white' : ''}`}
          style={{ transition: 'all 0.3s ease-in-out' }}
        >
          <Link to="/" className="navbar-brand p-0 d-flex align-items-center">
          <img 
  src="/assets/img/logo.jpg" 
  alt="Kedar Baba Official Tour" 
  className="me-2 logo-animation" 
  style={{ height: 50 }} 
/>
            <h1 className="text-primary m-0 brand-text-animation"></h1>
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="fa fa-bars" />
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 nav-animation">
              <div className="nav-item-animate">
                <Link to="/" className="nav-item nav-link hover-effect">Home</Link>
              </div>
              <div className="nav-item-animate">
                <Link to="/about" className="nav-item nav-link hover-effect">About</Link>
              </div>
              <div className="nav-item-animate">
                <Link to="/services" className="nav-item nav-link hover-effect">Services</Link>
              </div>
              <div className="nav-item-animate">
                <Link to="/packages" className="nav-item nav-link hover-effect">Packages</Link>
              </div>
              <div className={`nav-item dropdown nav-item-animate ${isDropdownOpen ? 'show' : ''}`}>
                <Link 
                  to="#" 
                  className="nav-link dropdown-toggle hover-effect" 
                  onClick={toggleDropdown}
                >
                  More
                </Link>
                <div className={`dropdown-menu m-0 border-0 shadow-sm ${isDropdownOpen ? 'show dropdown-animation' : ''}`}>
                  <Link to="/destination" className="dropdown-item py-2 px-4 border-bottom">Destinations</Link>
                  <Link to="/booking" className="dropdown-item py-2 px-4 border-bottom">Booking</Link>
                  <Link to="/guides" className="dropdown-item py-2 px-4 border-bottom">Travel Guides</Link>
                  <Link to="/testimonials" className="dropdown-item py-2 px-4">Testimonials</Link>
                </div>
              </div>
              <div className="nav-item-animate">
                <Link to="/contact" className="nav-item nav-link hover-effect">Contact</Link>
              </div>
            </div>
            <div className="register-btn-animation">
              <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4 ms-3 register-btn">Register</Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
      
      {/* Add the CSS for animations and effects */}
      <style jsx>{`
        /* Fade-in animations for top bar elements */
        .fade-in-delay-1 {
          animation: fadeIn 0.5s ease-in-out 0.2s forwards;
          opacity: 0;
        }
        
        .fade-in-delay-2 {
          animation: fadeIn 0.5s ease-in-out 0.4s forwards;
          opacity: 0;
        }
        
        .fade-in-delay-3 {
          animation: fadeIn 0.5s ease-in-out 0.6s forwards;
          opacity: 0;
        }
        
        .fade-in-delay-4 {
          animation: fadeIn 0.5s ease-in-out 0.8s forwards;
          opacity: 0;
        }
        
        /* Slide down animation for navbar */
        .slide-down {
          animation: slideDown 0.5s ease-in-out forwards;
          transform: translateY(-20px);
          opacity: 0;
        }
        
        /* Logo animation */
        .logo-animation {
          animation: scaleIn 0.5s ease-in-out forwards;
          transform: scale(0.8);
          opacity: 0;
        }
        
        /* Brand text animation */
        .brand-text-animation {
          animation: slideRight 0.5s ease-in-out 0.2s forwards;
          transform: translateX(-20px);
          opacity: 0;
        }
        
        /* Nav items animation */
        .nav-animation {
          opacity: 1;
        }
        
        .nav-item-animate {
          animation: fadeInUp 0.5s ease-in-out forwards;
          opacity: 0;
          animation-delay: calc(0.2s * var(--item-index));
        }
        
        .nav-item-animate:nth-child(1) { --item-index: 1; }
        .nav-item-animate:nth-child(2) { --item-index: 2; }
        .nav-item-animate:nth-child(3) { --item-index: 3; }
        .nav-item-animate:nth-child(4) { --item-index: 4; }
        .nav-item-animate:nth-child(5) { --item-index: 5; }
        .nav-item-animate:nth-child(6) { --item-index: 6; }
        
        /* Register button animation */
        .register-btn-animation {
          animation: scaleIn 0.5s ease-in-out 1s forwards;
          transform: scale(0.8);
          opacity: 0;
        }
        
        /* Hover effects */
        .hover-effect {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .hover-effect:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #4EB6A7;
          transition: width 0.3s ease;
        }
        
        .hover-effect:hover:after {
          width: 100%;
        }
        
        .social-icon {
          transition: transform 0.3s ease;
        }
        
        .social-icon:hover {
          transform: scale(1.2);
        }
        
        /* WhatsApp button specific style */
        .whatsapp-btn {
          background-color: transparent;
          border-color: #fff;
        }
        
        .whatsapp-btn:hover {
          background-color: #25D366;
          border-color: #25D366;
        }
        
        .register-btn {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .register-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        /* Dropdown animation */
        .dropdown-menu {
          border-radius: 8px;
          transform-origin: top;
          display: block;
          visibility: hidden;
          opacity: 0;
          transform: scaleY(0);
          transition: all 0.3s ease;
        }
        
        .dropdown-menu.show {
          visibility: visible;
          opacity: 1;
          transform: scaleY(1);
        }
        
        .dropdown-item {
          transition: all 0.2s ease;
        }
        
        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #4EB6A7;
          transform: translateX(5px);
        }
        
        /* Animation keyframes */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            transform: translateY(-20px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from { 
            transform: scale(0.8);
            opacity: 0;
          }
          to { 
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slideRight {
          from { 
            transform: translateX(-20px);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from { 
            transform: translateY(10px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
