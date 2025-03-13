import React from 'react';

function Packages() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Yatra Packages
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Yatra Packages
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Pilgrimage & Spiritual Tours
            </h6>
            <h1 className="mb-5">Explore the Divine Journeys</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { name: 'Char Dham Yatra', location: 'Uttarakhand', price: 18500 },
              { name: '12 Jyotirlinga Tour', location: 'All India', price: 49999 },
              { name: 'Vaishno Devi Yatra', location: 'Jammu', price: 12999 },
              { name: 'Shirdi Sai Baba Tour', location: 'Maharashtra', price: 8999 },
              { name: 'Amarnath Yatra', location: 'J&K', price: 24999 },
              { name: 'Golden Temple Tour', location: 'Punjab', price: 7999 },
              { name: 'Pashupatinath Temple', location: 'Nepal', price: 15999 },
              { name: 'Lumbini & Buddhist Heritage', location: 'Nepal', price: 18999 },
              { name: 'Muktinath Temple', location: 'Nepal', price: 21999 },
              { name: 'Pokhara & Annapurna', location: 'Nepal', price: 25999 },
              { name: 'Everest Base Camp Trek', location: 'Nepal', price: 75999 },
              { name: 'Chitwan National Park Safari', location: 'Nepal', price: 13999 },
            ].map((pkg, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="package-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={`assets/img/package-${index + 1}.jpg`} alt={pkg.name} />
                  </div>
                  <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      {pkg.location}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt text-primary me-2" /> 5-10 days
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-user text-primary me-2" /> Group / Family
                    </small>
                  </div>
                  <div className="text-center p-4">
                    <h3 className="mb-0">₹{pkg.price.toLocaleString()} <span className="text-danger fs-5">(Limited Offer!)</span></h3>
                    <p>
                      Experience the divine aura and explore spiritual destinations with our exclusive tour packages.
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                        Read More
                      </a>
                      <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Book Your Spiritual Journey</h6>
                <h1 className="text-white mb-4">Reserve Your Spot Now</h1>
                <p className="mb-4">
                  Limited seats available! Book your pilgrimage tour today and experience a spiritual awakening.
                </p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="tel:+919099081248">
                  Call Us: +91 90990 81248
                </a>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Get in Touch</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control bg-transparent" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control bg-transparent" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control bg-transparent" placeholder="Special Request" style={{ height: 100 }}></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-outline-light w-100 py-3" type="submit">
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
