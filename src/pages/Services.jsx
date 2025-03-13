import React from 'react'

function Services() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Pilgrimage & Nepal Tours</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Pilgrimage & Nepal Tours
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Yatra Package Details */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Yatra Packages</h6>
            <h1 className="mb-5">Explore the Divine Journeys</h1>
          </div>
          <div className="row g-4">
            {/* Popular Pilgrimage Tours */}
            {[
              { title: "Char Dham Yatra", desc: "Visit Badrinath, Kedarnath, Gangotri, and Yamunotri." },
              { title: "12 Jyotirlinga Tour", desc: "Experience the divine energy of the 12 sacred Jyotirlingas." },
              { title: "Vaishno Devi Yatra", desc: "Seek blessings at the holy shrine of Vaishno Devi in Jammu." },
              { title: "Shirdi Sai Baba", desc: "Visit the sacred temple of Sai Baba in Shirdi, Maharashtra." },
              { title: "Amarnath Yatra", desc: "Embark on the holy journey to the ice Shiva Lingam of Amarnath." },
              { title: "Golden Temple", desc: "Visit the holiest Sikh Gurudwara in Amritsar, Punjab." }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={index}>
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Nepal Tours */}
            {[
              { title: "Pashupatinath Temple", desc: "Experience the divine aura of Lord Shiva at Pashupatinath." },
              { title: "Lumbini Tour", desc: "Visit the birthplace of Lord Buddha and explore Buddhist heritage." },
              { title: "Muktinath Temple", desc: "Seek blessings at the sacred Muktinath Temple in Nepal." },
              { title: "Pokhara & Annapurna", desc: "Explore the beautiful lakes and mountains of Nepal." },
              { title: "Everest Base Camp", desc: "Witness the majestic Everest and trek through breathtaking landscapes." },
              { title: "Chitwan National Park", desc: "Experience wildlife adventures in Nepal's famous national park." }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 7)}s`} key={index + 7}>
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Booking Section */}
      <div className="container text-center my-5">
        <h2>Book Your Pilgrimage & Nepal Tour Now!</h2>
        <p className="text-muted">Call us: +91 90990 81248 | Email: kedarbabofficialtour@gmail.com</p>
        <a href="/contact" className="btn btn-primary mt-3">Contact Us</a>
      </div>
    </div>
  )
}

export default Services
