import React from "react";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img className="img-fluid position-absolute w-100 h-100" src="assets/img/about.jpg" alt="About Us" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary">Kedar Baba Tours</span></h1>
              <p className="mb-4">
                We specialize in pilgrimage tours, ensuring a divine and fulfilling journey. From the sacred Char Dham Yatra to the spiritual aura of Varanasi and Nepal, we take care of every detail.
              </p>
              <p className="mb-4">
                Experience world-class accommodations, safe travel, and expert guides who make your yatra memorable.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                {[
                  "First-Class Flights",
                  "Handpicked Hotels",
                  "5-Star Accommodations",
                  "Latest Model Vehicles",
                  "150+ Premium Tours",
                  "24/7 Support"
                ].map((feature, index) => (
                  <div className="col-sm-6" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i> {feature}
                    </p>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="/services">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Guide Team */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Experts</h6>
            <h1 className="mb-5">Meet Our Travel Guides</h1>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * index}s`} key={index}>
                <div className="team-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={`assets/img/team-${index + 1}.jpg`} alt="Guide" />
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">Guide Name</h5>
                    <small>Senior Travel Expert</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
