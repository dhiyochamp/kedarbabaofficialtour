import React from 'react'

function Destination() {
  return (
    <div>
        {/* Hero Section */}
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">Popular Destinations</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item text-white active" aria-current="page">
                      Destinations
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Destination Section */}
        <div className="container-xxl py-5 destination">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">Destinations</h6>
              <h1 className="mb-5">Explore Our Best Offers</h1>
            </div>
            <div className="row g-3">
              <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                  {[
                    { image: 'destination-1.jpg', discount: '30%', place: 'Kedarnath' },
                    { image: 'destination-2.jpg', discount: '25%', place: 'Badrinath' },
                    { image: 'destination-3.jpg', discount: '35%', place: 'Rishikesh' },
                  ].map((dest, index) => (
                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s" key={index}>
                      <a className="position-relative d-block overflow-hidden" href="#">
                        <img className="img-fluid" src={`/assets/img/${dest.image}`} alt={dest.place} />
                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                          {dest.discount} OFF
                        </div>
                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                          {dest.place}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                <a className="position-relative d-block h-100 overflow-hidden" href="#">
                  <img className="img-fluid position-absolute w-100 h-100" src="/assets/img/destination-4.jpg" alt="Haridwar" style={{ objectFit: 'cover' }} />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    20% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Haridwar
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}  

export default Destination
