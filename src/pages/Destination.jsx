import React from 'react'

function Destination() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Sacred Destinations</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Pilgrimage Destinations
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations Section */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Featured Destinations</h6>
            <h1 className="mb-5">Explore Our Most Popular Pilgrimages</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                {[
                  { image: 'destination-1.jpg', discount: '30%', place: 'Kedarnath', link: '/package/kedarnath' },
                  { image: 'destination-2.jpg', discount: '25%', place: 'Badrinath', link: '/package/badrinath' },
                  { image: 'destination-3.jpg', discount: '35%', place: 'Rishikesh', link: '/package/rishikesh' },
                ].map((dest, index) => (
                  <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay={`${0.1 + (0.1 * index)}s`} key={index}>
                    <a className="position-relative d-block overflow-hidden" href={dest.link}>
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
              <a className="position-relative d-block h-100 overflow-hidden" href="/package/haridwar">
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

      {/* North India Pilgrimage Destinations */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">North India</h6>
            <h1 className="mb-5">Himalayan Divine Abodes</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: "Char Dham Circuit", 
                desc: "Complete journey to Badrinath, Kedarnath, Gangotri, and Yamunotri with helicopter options",
                image: "char-dham.jpg" 
              },
              { 
                title: "Kailash Mansarovar", 
                desc: "Sacred pilgrimage to Lord Shiva's abode via Lipulekh Pass or Helicopter service",
                image: "kailash.jpg" 
              },
              { 
                title: "Amarnath Cave", 
                desc: "Journey to the ice lingam in Kashmir's sacred cave with VIP darshan arrangements",
                image: "amarnath.jpg" 
              },
              { 
                title: "Vaishno Devi", 
                desc: "Pilgrimage to Mata's shrine in Jammu with special puja and helicopter services",
                image: "vaishno-devi.jpg" 
              },
              { 
                title: "Hemkund Sahib", 
                desc: "Trek to the glacial lake temple revered by both Sikhs and Hindus in Uttarakhand",
                image: "hemkund.jpg" 
              },
              { 
                title: "Mathura-Vrindavan", 
                desc: "Complete tour of Krishna's birthplace and childhood abode with all major temples",
                image: "mathura.jpg" 
              }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="destination-item position-relative overflow-hidden rounded">
                  <img className="img-fluid" src={`/assets/img/${item.image}`} alt={item.title} />
                  <div className="destination-overlay p-4">
                    <h5 className="text-white mb-2">{item.title}</h5>
                    <p className="text-white mb-0">{item.desc}</p>
                    <a href={`/destination/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-sm btn-primary mt-3">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* East India Pilgrimage Destinations */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">East India</h6>
            <h1 className="mb-5 text-success">Spiritual Heritage Journeys</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: "Varanasi Ganga Aarti", 
                desc: "Experience the divine Ganga Aarti at Dashashwamedh Ghat with VIP seating and priest blessings",
                image: "varanasi.jpg" 
              },
              { 
                title: "Puri Jagannath", 
                desc: "Visit the sacred chariot festival and temple of Lord Jagannath with special darshan access",
                image: "jagannath.jpg" 
              },
              { 
                title: "Gaya Pind Daan", 
                desc: "Perform ancestral salvation rituals at Vishnu Pad temple with certified Vedic priests",
                image: "gaya.jpg" 
              },
              { 
                title: "Kamakhya Temple", 
                desc: "Pilgrimage to Shakti Peeth in Assam with tantric ritual arrangements and special access",
                image: "kamakhya.jpg" 
              },
              { 
                title: "Konark Sun Temple", 
                desc: "UNESCO heritage site tour with special sunrise ceremonies and cultural performances",
                image: "konark.jpg" 
              },
              { 
                title: "Bodh Gaya", 
                desc: "Visit Buddha's enlightenment site along with nearby Hindu temples and monasteries",
                image: "bodhgaya.jpg" 
              }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="destination-item position-relative overflow-hidden rounded">
                  <img className="img-fluid" src={`/assets/img/${item.image}`} alt={item.title} />
                  <div className="destination-overlay p-4">
                    <h5 className="text-white mb-2">{item.title}</h5>
                    <p className="text-white mb-0">{item.desc}</p>
                    <a href={`/destination/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-sm btn-success mt-3">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* South India Pilgrimage Destinations */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">South India</h6>
            <h1 className="mb-5 text-success">Temple Architecture Marvels</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: "Tirupati Balaji", 
                desc: "Special darshan arrangements at world's richest temple with accommodation in Tirumala",
                image: "tirupati.jpg" 
              },
              { 
                title: "Rameshwaram", 
                desc: "Visit the southernmost Jyotirlinga with 22 sacred wells ritual bath arrangements",
                image: "rameshwaram.jpg" 
              },
              { 
                title: "Meenakshi Amman", 
                desc: "Tour of Madurai's magnificent temple with special evening ceremony access",
                image: "meenakshi.jpg" 
              },
              { 
                title: "Sabarimala", 
                desc: "Guided pilgrimage to Lord Ayyappa's hilltop shrine with mandala puja arrangements",
                image: "sabarimala.jpg" 
              },
              { 
                title: "Padmanabhaswamy", 
                desc: "Visit Kerala's ancient temple with special darshan of reclining Vishnu",
                image: "padmanabha.jpg" 
              },
              { 
                title: "Brihadeeswara", 
                desc: "UNESCO heritage tour of Thanjavur's magnificent 1000-year-old Shiva temple",
                image: "brihadeeswara.jpg" 
              }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="destination-item position-relative overflow-hidden rounded">
                  <img className="img-fluid" src={`/assets/img/${item.image}`} alt={item.title} />
                  <div className="destination-overlay p-4">
                    <h5 className="text-white mb-2">{item.title}</h5>
                    <p className="text-white mb-0">{item.desc}</p>
                    <a href={`/destination/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-sm btn-success mt-3">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* International Hindu Pilgrimage Destinations */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">International</h6>
            <h1 className="mb-5">Global Hindu Spiritual Sites</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: "Pashupatinath, Nepal", 
                desc: "Visit Nepal's holiest Shiva temple with special aarti participation and priest blessings",
                image: "pashupatinath.jpg" 
              },
              { 
                title: "Muktinath, Nepal", 
                desc: "High-altitude pilgrimage to Vishnu shrine with 108 water spouts for ritual purification",
                image: "muktinath.jpg" 
              },
              { 
                title: "Angkor Wat, Cambodia", 
                desc: "Ancient Hindu temple complex dedicated to Vishnu, now the world's largest religious monument",
                image: "angkor.jpg" 
              },
              { 
                title: "Prambanan, Indonesia", 
                desc: "Magnificent 9th-century Hindu temple compound dedicated to Trimurti with cultural performances",
                image: "prambanan.jpg" 
              },
              { 
                title: "Mauritius Ganga Talao", 
                desc: "Sacred lake with 108-foot Shiva statue and temples, site of Maha Shivaratri celebrations",
                image: "mauritius.jpg" 
              },
              { 
                title: "Batu Caves, Malaysia", 
                desc: "Famous Lord Murugan temple with 272-step climb to cave shrines and Thaipusam festival",
                image: "batu.jpg" 
              }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="destination-item position-relative overflow-hidden rounded">
                  <img className="img-fluid" src={`/assets/img/${item.image}`} alt={item.title} />
                  <div className="destination-overlay p-4">
                    <h5 className="text-white mb-2">{item.title}</h5>
                    <p className="text-white mb-0">{item.desc}</p>
                    <a href={`/destination/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-sm btn-primary mt-3">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Seasonal Pilgrimages */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Seasonal Pilgrimages</h6>
            <h1 className="mb-5">Auspicious Festival Tours</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { 
                title: "Kumbh Mela", 
                period: "Occurs every 12 years, next in 2027 at Nashik",
                desc: "World's largest spiritual gathering with royal bath arrangements and saint meetings" 
              },
              { 
                title: "Maha Shivaratri", 
                period: "February/March annually",
                desc: "Special overnight ceremonies at major Shiva temples with rudrabhishek participation" 
              },
              { 
                title: "Navratri & Durga Puja", 
                period: "September/October annually",
                desc: "Festival tours to Kolkata, Vaishno Devi and other major Shakti temples" 
              },
              { 
                title: "Krishna Janmashtami", 
                period: "August/September annually",
                desc: "Mathura-Vrindavan special access during birth celebrations with midnight aarti" 
              },
              { 
                title: "Ram Navami", 
                period: "March/April annually",
                desc: "Special tour to Ayodhya Ram Mandir with VIP darshan during birth celebrations" 
              },
              { 
                title: "Ganesh Chaturthi", 
                period: "August/September annually",
                desc: "Mumbai's Lalbaugcha Raja and Pune's famous Ganesh temple special darshan tour" 
              },
              { 
                title: "Kartik Purnima", 
                period: "November annually",
                desc: "Varanasi Dev Deepawali special ghat ceremony access with boat arrangements" 
              },
              { 
                title: "Guru Purnima", 
                period: "July annually",
                desc: "Spiritual retreats at ashrams with special guru darshan and blessing ceremonies" 
              }
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="service-item rounded pt-3 border border-2 border-primary h-100">
                  <div className="p-4">
                    <h5 className="text-primary">{item.title}</h5>
                    <div className="text-muted mb-2 fst-italic">{item.period}</div>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container-fluid bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Begin Your Spiritual Journey Today</h2>
          <p className="lead mb-4">Special Darshan Arrangements & Expert Guides for All Sacred Destinations</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/contact" className="btn btn-lg btn-light text-primary">
              <i className="fas fa-phone-alt me-2"></i>Call Now: +91 90990 81248
            </a>
            <a href="/packages" className="btn btn-lg btn-dark">
              <i className="fas fa-tag me-2"></i>View Package Deals
            </a>
          </div>
          <p className="mt-4 mb-0">* Early booking discounts and senior citizen offers available on all destinations</p>
        </div>
      </div>

      {/* Additional CSS for destination items */}
      <style jsx>{`
        .destination-item {
          transition: all 0.5s;
          height: 300px;
        }
        
        .destination-item img {
          transition: all 0.5s;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .destination-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%);
          transition: all 0.5s;
        }
        
        .destination-item:hover img {
          transform: scale(1.1);
        }
        
        .destination-item:hover .destination-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 90%);
        }
      `}</style>
    </div>
  )
}

export default Destination
