import React, { useState, useEffect } from 'react';

const pilgrimageOptions = [
  { value: 'char-dham', label: 'Char Dham Yatra' },
  { value: 'panch-kedar', label: 'Panch Kedar Circuit' },
  { value: 'panch-kailash', label: 'Panch Kailash Darshan' },
  { value: 'jyotirlinga', label: 'Jyotirlinga Parikrama' },
  { value: 'nepal', label: 'Nepal Spiritual Tour' },
  { value: 'shakti-peeth', label: 'Shakti Peeth Yatra' },
  { value: 'kashi', label: 'Kashi Yatra' },
  { value: 'custom', label: 'Custom Pilgrimage' }
];

const travelPreferenceOptions = [
  { value: 'budget', label: 'Budget Friendly' },
  { value: 'standard', label: 'Standard Comfort' },
  { value: 'deluxe', label: 'Deluxe Experience' },
  { value: 'premium', label: 'Premium Services' }
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pilgrimageType: '',
    travelPreference: '',
    travelers: '',
    date: '',
    requests: '',
    rituals: false,
    terms: false
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    const getOptionLabel = (value, options) => 
      options.find(opt => opt.value === value)?.label || '';

    const message = `
*New Pilgrimage Enquiry*
--------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Pilgrimage:* ${getOptionLabel(formData.pilgrimageType, pilgrimageOptions)}
*Travel Class:* ${getOptionLabel(formData.travelPreference, travelPreferenceOptions)}
*Travelers:* ${formData.travelers}
*Date:* ${formData.date}
${formData.requests ? `*Special Requests:* ${formData.requests}` : ''}
*Vedic Rituals:* ${formData.rituals ? 'Yes' : 'No'}
--------------------------
Please provide details and quote for this pilgrimage.
    `.trim();

    setWhatsappLink(`https://wa.me/+919099081248?text=${encodeURIComponent(message)}`);
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setShowWhatsApp(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 30000);
  };

  return (
    <div className="pilgrimage-main">
      {/* Hero Section with Video Background */}
      <div className="hero-container position-relative overflow-hidden">
        <video autoPlay muted loop className="hero-video position-absolute w-100 h-100 object-cover">
  <source src="assets/img/kedarnath.mp4" type="video/mp4" />
</video>

        <div className="hero-overlay position-absolute w-100 h-100 bg-dark" style={{ opacity: 0.5 }}></div>
        <div className="container position-relative py-5 my-5 z-index-1">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <div className="animated fadeInDown">
                <div className="d-inline-block border-start border-end border-top border-light px-5 py-2 mb-3">
                  <h6 className="text-white text-uppercase m-0">Divine Journey</h6>
                </div>
                <h1 className="display-2 text-white fw-bold mb-4 text-shadow">
                  Sacred Hindu Pilgrimage Journeys
                </h1>
                <p className="fs-4 text-white mb-5 text-shadow">
                  Experience Moksha through Ancient Temple Circuits & Authentic Vedic Rituals
                </p>
                <div className="position-relative w-75 mx-auto mb-5">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5 shadow"
                    type="text"
                    placeholder="Search Pilgrimage (Eg: Panch Kedar, Kailash Yatra)"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                    style={{ marginTop: 7 }}
                  >
                    <i className="fas fa-search me-2"></i>Search
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#pilgrimage-types" className="btn btn-outline-light rounded-pill px-4 py-3 mx-2">
                    <i className="fas fa-om me-2"></i>Explore Yatras
                  </a>
                  <a href="#enquiry-form" className="btn btn-primary rounded-pill px-4 py-3 mx-2">
                    <i className="fas fa-paper-plane me-2"></i>Plan Your Journey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave position-absolute bottom-0 w-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,128C640,117,800,75,960,80C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Pilgrimage Highlights Cards */}
      <div className="container-fluid pt-4 pb-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {[
              { 
                icon: "fa-mountain", 
                title: "Sacred Locations", 
                desc: "Journey to Himalayan temples situated in spiritually powerful locations" 
              },
              { 
                icon: "fa-hands-praying", 
                title: "Authentic Rituals", 
                desc: "Experience traditional Vedic ceremonies performed by learned priests" 
              },
              { 
                icon: "fa-user-tie", 
                title: "Expert Guidance", 
                desc: "Travel with knowledgeable guides well-versed in spiritual traditions" 
              },
              { 
                icon: "fa-hotel", 
                title: "Sacred Comfort", 
                desc: "Stay in carefully selected accommodations with spiritual atmosphere" 
              }
            ].map((item, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="service-item rounded bg-light shadow h-100 p-4 text-center">
                  <div className="mb-3">
                    <i className={`fas ${item.icon} fa-3x text-primary`}></i>
                  </div>
                  <h5 className="mb-3">{item.title}</h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section with Improved Layout */}
      <div className="container-xxl py-5" id="about-us">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden rounded shadow">
                <img
                  className="img-fluid w-100"
                  src="/img/about.jpg"
                  alt="Vedic Guide"
                />
                <div className="position-absolute start-0 bottom-0 w-100 p-3 bg-primary bg-opacity-75 text-white">
                  <p className="mb-0 text-center fw-bold">
                    <i className="fas fa-quote-left me-2"></i>
                    Spiritual journey to transcend material existence
                    <i className="fas fa-quote-right ms-2"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="border-start border-primary ps-4">
                <h6 className="text-body text-uppercase fw-bold mb-2">About Our Services</h6>
                <h1 className="display-5 mb-4">
                  <span className="text-primary">Kedar Baba</span> Pilgrimage Services
                </h1>
              </div>
              <p className="mb-4">
                We specialize in authentic Sanatan Dharma pilgrimage experiences, combining Vedic rituals with 
                sacred temple journeys that connect you to the divine essence of ancient traditions.
              </p>
              <div className="row gy-3 gx-4 mb-4">
                <div className="col-md-6">
                  <div className="bg-light rounded p-3 h-100">
                    <h5 className="mb-3 text-primary">Temple Circuits</h5>
                    <ul className="list-unstyled mb-0">
                      {[
                        "12 Jyotirlinga Parikrama",
                        "Char Dham Yatra",
                        "Panch Kedar Circuit",
                        "Panch Kailash Darshan"
                      ].map((item, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-om text-primary me-2"></i>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light rounded p-3 h-100">
                    <h5 className="mb-3 text-primary">Ritual Services</h5>
                    <ul className="list-unstyled mb-0">
                      {[
                        "Shakti Peeth Darshan",
                        "Vedic Ritual Coordination",
                        "Pind Daan Services",
                        "VIP Temple Darshan"
                      ].map((item, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-om text-primary me-2"></i>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <a className="btn btn-primary py-3 px-5 rounded-pill" href="/about">
                  <i className="fas fa-info-circle me-2"></i>Discover Our Heritage
                </a>
                <a className="btn btn-outline-primary py-3 px-5 rounded-pill ms-3" href="#pilgrimage-types">
                  <i className="fas fa-map-marked-alt me-2"></i>View Yatras
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Spiritual Circuits with Better Styling */}
      <div className="container-fluid py-5 bg-light" id="pilgrimage-types">
        <div className="container">
          <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">
            <div className="d-inline-block border-bottom border-primary pb-2 mb-3">
              <h6 className="text-primary text-uppercase fw-bold">Premium Yatras</h6>
            </div>
            <h2 className="display-5 mb-0">Sacred Shiva Abodes</h2>
          </div>
          
          <div className="row g-4">
            {/* Panch Kedar Card */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="card h-100 border-0 rounded-3 shadow-lg overflow-hidden">
                <div className="position-relative">
                  <img src="/img/panch-kedar.jpg" className="card-img-top" alt="Panch Kedar" />
                  <div className="position-absolute top-0 start-0 m-3 py-2 px-4 bg-primary rounded">
                    <span className="text-white fw-bold">Most Popular</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h3 className="card-title text-primary mb-3">Panch Kedar Yatra</h3>
                  <p className="card-text mb-3">
                    Journey through Lord Shiva's five divine manifestations in Uttarakhand's Himalayas. According to ancient 
                    scriptures, these temples mark where parts of Lord Shiva's bull form appeared after he tried to avoid the Pandavas.
                  </p>
                  
                  <div className="bg-light p-3 rounded mb-4">
                    <h6 className="fw-bold text-primary mb-2">Sacred Temples:</h6>
                    {[
                      { name: "Kedarnath", desc: "Main shrine - Lord Shiva's back", icon: "mountain" },
                      { name: "Tungnath", desc: "Highest Shiva temple (12,073 ft)", icon: "asterisk" },
                      { name: "Rudranath", desc: "Face manifestation in remote cave", icon: "fire" },
                      { name: "Madhyamaheshwar", desc: "Naval (middle) portion of Lord", icon: "water" },
                      { name: "Kalpeshwar", desc: "Hair (jata) manifestation in cave", icon: "wind" }
                    ].map((temple, index) => (
                      <div className="d-flex align-items-center mb-2" key={index}>
                        <div className="flex-shrink-0 bg-primary rounded-circle p-2 me-3">
                          <i className={`fas fa-${temple.icon} text-white`}></i>
                        </div>
                        <div>
                          <span className="fw-bold">{temple.name}:</span>
                          <span className="ms-2 small">{temple.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="row g-3 mb-4">
                    {[
                      "Complete Rudrabhishek at each temple",
                      "Helicopter options for difficult terrains",
                      "Traditional pahadi meals during trek",
                      "Local guides with deep spiritual knowledge"
                    ].map((feature, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          <small>{feature}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="d-grid">
                    <a href="/panch-kedar" className="btn btn-primary py-2">
                      <i className="fas fa-chevron-right me-2"></i>Explore Panch Kedar
                    </a>
                  </div>
                </div>
                <div className="card-footer bg-white p-4 border-top border-light">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">Duration: 7-10 days</small>
                    </div>
                    <div>
                      <div className="badge bg-primary rounded-pill">Best Season: May-Jun & Sep-Oct</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Panch Kailash Card */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="card h-100 border-0 rounded-3 shadow-lg overflow-hidden">
                <div className="position-relative">
                  <img src="/img/panch-kailash.jpg" className="card-img-top" alt="Panch Kailash" />
                  <div className="position-absolute top-0 start-0 m-3 py-2 px-4 bg-danger rounded">
                    <span className="text-white fw-bold">Advanced</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h3 className="card-title text-primary mb-3">Panch Kailash Darshan</h3>
                  <p className="card-text mb-3">
                    Experience the five sacred mountain abodes of Lord Shiva, each resembling the cosmic Shiva lingam in nature. 
                    These majestic Himalayan peaks are considered the most spiritually potent places for Shiva devotees.
                  </p>
                  
                  <div className="bg-light p-3 rounded mb-4">
                    <h6 className="fw-bold text-primary mb-2">Sacred Peaks:</h6>
                    {[
                      { name: "Kailash Mansarovar", desc: "Original abode - Tibet (21,778 ft)", icon: "mountain" },
                      { name: "Adi Kailash", desc: "Ancient alternative in Uttarakhand", icon: "landmark" },
                      { name: "Kinnaur Kailash", desc: "Stunning 79-foot natural lingam", icon: "torii-gate" },
                      { name: "Shrikhand Mahadev", desc: "Challenging trek to lingam peak", icon: "hiking" },
                      { name: "Manimahesh Kailash", desc: "Sacred lake reflection of Mount Kailash", icon: "water" }
                    ].map((peak, index) => (
                      <div className="d-flex align-items-center mb-2" key={index}>
                        <div className="flex-shrink-0 bg-primary rounded-circle p-2 me-3">
                          <i className={`fas fa-${peak.icon} text-white`}></i>
                        </div>
                        <div>
                          <span className="fw-bold">{peak.name}:</span>
                          <span className="ms-2 small">{peak.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="row g-3 mb-4">
                    {[
                      "Special permissions & visa arrangements",
                      "Acclimatization camps at multiple locations",
                      "Medical support throughout high-altitude journey",
                      "Participation in sacred parikrama rituals"
                    ].map((feature, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          <small>{feature}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="d-grid">
                    <a href="/panch-kailash" className="btn btn-primary py-2">
                      <i className="fas fa-chevron-right me-2"></i>Explore Panch Kailash
                    </a>
                  </div>
                </div>
                <div className="card-footer bg-white p-4 border-top border-light">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">Duration: 14-21 days</small>
                    </div>
                    <div>
                      <div className="badge bg-primary rounded-pill">Best Season: Jun-Sep</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View All Pilgrimages Button */}
            <div className="col-12 text-center mt-4">
              <a href="/all-pilgrimages" className="btn btn-outline-primary rounded-pill px-5 py-3">
                <i className="fas fa-list me-2"></i>View All Sacred Journeys
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-bold mb-2">Pilgrim Experiences</h6>
            <h2 className="display-5">Spiritual Transformations</h2>
          </div>
          
          <div className="owl-carousel testimonial-carousel">
            {[
              {
                name: "Rajesh Sharma",
                from: "Delhi",
                text: "The Panch Kedar journey was life-changing. The arrangements were perfect and our guide's knowledge of Hindu scriptures brought deep meaning to each temple visit.",
                img: "/img/testimonial-1.jpg"
              },
              {
                name: "Sunita Patel",
                from: "Mumbai",
                text: "As a solo female traveler, I felt completely safe and supported throughout my Char Dham Yatra. The special rituals arranged at each temple created unforgettable spiritual moments.",
                img: "/img/testimonial-2.jpg"
              },
              {
                name: "Amit & Priya Verma",
                from: "Bangalore",
                text: "Our family Kailash Mansarovar pilgrimage exceeded all expectations. The team handled every detail with care, allowing us to focus entirely on our spiritual journey.",
                img: "/img/testimonial-3.jpg"
              }
            ].map((item, index) => (
              <div className="testimonial-item bg-light rounded p-4 p-md-5" key={index}>
                <div className="d-flex align-items-center mb-4">
                  <img className="img-fluid rounded-circle flex-shrink-0" src={item.img} style={{ width: "80px", height: "80px" }} alt={item.name} />
                  <div className="ms-4">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1 text-primary">{item.from}</p>
                    <div className="text-warning">
                      {[...Array(5)].map((_, i) => (
                        <small key={i}><i className="fas fa-star"></i></small>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mb-0 fst-italic">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Section with Enhanced Form */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id="enquiry-form">
        <div className="container">
          <div className="booking p-5 position-relative" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/booking-bg.jpg') center center / cover no-repeat" }}>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 text-white">
                <div className="border-start border-5 border-primary ps-4 mb-5">
                  <h6 className="text-white text-uppercase fw-bold mb-2">Start Your Sacred Journey</h6>
                  <h2 className="text-white mb-0">Personalized Pilgrimage Planning</h2>
                </div>
                <p className="text-white-50 mb-4 fs-5">
                  Let our Vedic experts craft a spiritually enriching journey tailored to your needs, guiding you through the sacred landscapes that have inspired seekers for thousands of years.
                </p>
                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
                        <i className="fas fa-pray text-white"></i>
                      </div>
                      <div className="ms-3">
                        <h5 className="text-white mb-0">Authentic Rituals</h5>
                        <small className="text-white-50">By Learned Priests</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
                        <i className="fas fa-ticket-alt text-white"></i>
                      </div>
                      <div className="ms-3">
                        <h5 className="text-white mb-0">VIP Darshan</h5>
                        <small className="text-white-50">Priority Temple Access</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
                        <i className="fas fa-hotel text-white"></i>
                      </div>
                      <div className="ms-3">
                        <h5 className="text-white mb-0">Sacred Stays</h5>
                        <small className="text-white-50">Spiritual Accommodations</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
                        <i className="fas fa-user-tie text-white"></i>
                      </div>
                      <div className="ms-3">
                        <h5 className="text-white mb-0">Expert Guides</h5>
                        <small className="text-white-50">Knowledgeable Companions</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-white border-5 p-4 rounded">
                  <div className="text-center mb-4">
                    <i className="fas fa-quote-left fa-2x text-primary"></i>
                  </div>
                  <p className="text-white fst-italic mb-4">
                    "The journey to these sacred places is the journey within. These ancient mountains and temples reveal the divinity that resides in all of us."
                  </p>
                  <div className="text-center">
                    <h6 className="text-white mb-0">~ Kedar Baba</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-white rounded shadow-lg p-4 p-lg-5">
                  <h2 className="text-center text-primary mb-4">Enquire Now</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="name">
                            <i className="fas fa-user text-primary me-2"></i>Full Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            pattern="[0-9]{10}"
                            required
                          />
                          <label htmlFor="phone">
                            <i className="fas fa-phone text-primary me-2"></i>Phone Number
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="email">
                            <i className="fas fa-envelope text-primary me-2"></i>Email Address
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div className="form-floating">
                          <select
                            className="form-select"
                            id="pilgrimageType"
                            value={formData.pilgrimageType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select Pilgrimage</option>
                            {pilgrimageOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="pilgrimageType">
                            <i className="fas fa-om text-primary me-2"></i>Pilgrimage Type
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="travelPreference"
                            value={formData.travelPreference}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select Preference</option>
                            {travelPreferenceOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="travelPreference">
                            <i className="fas fa-star text-primary me-2"></i>Travel Preference
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="travelers"
                            placeholder="Number of Travelers"
                            min="1"
                            value={formData.travelers}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="travelers">
                            <i className="fas fa-users text-primary me-2"></i>Number of Travelers
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            placeholder="Preferred Date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="date">
                            <i className="fas fa-calendar-alt text-primary me-2"></i>Preferred Date
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="requests"
                            style={{ height: "100px" }}
                            placeholder="Special Requests"
                            value={formData.requests}
                            onChange={handleInputChange}
                          ></textarea>
                          <label htmlFor="requests">
                            <i className="fas fa-comment-alt text-primary me-2"></i>Special Requests
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rituals"
                            checked={formData.rituals}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor="rituals">
                            <i className="fas fa-fire-alt text-primary me-2"></i>
                            I am interested in special Vedic rituals
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                            checked={formData.terms}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-check-label" htmlFor="terms">
                            <i className="fas fa-check-circle text-primary me-2"></i>
                            I agree to the terms and conditions
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit" disabled={!formData.terms}>
                          <i className="fas fa-paper-plane me-2"></i>Submit Enquiry
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  {showSuccess && (
                    <div className="alert alert-success mt-4" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      Your enquiry has been submitted successfully!
                    </div>
                  )}
                  
                  {showWhatsApp && (
                    <div className="text-center mt-4">
                      <p className="mb-3">Connect with our pilgrimage expert directly:</p>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
                        <i className="fab fa-whatsapp me-2"></i>Contact on WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-inline-block border-bottom border-primary pb-2 mb-3">
              <h6 className="text-primary text-uppercase fw-bold">FAQs</h6>
            </div>
            <h2 className="display-5 mb-5">Common Questions About Our Pilgrimages</h2>
          </div>
          
          <div className="row g-4">
            {[
              {
                question: "What is the best time to undertake the Char Dham Yatra?",
                answer: "The Char Dham temples remain open from late April/early May to October/November, depending on weather conditions. The best time to visit is either May-June or September-October to avoid the monsoon season and extreme weather conditions."
              },
              {
                question: "How difficult is the trek to Panch Kedar temples?",
                answer: "The difficulty varies by temple. Kedarnath requires a moderate 16km trek (unless taking helicopter), Tungnath is a relatively easy 4km trek, Rudranath is challenging (20km), Madhyamaheshwar moderate (19km), and Kalpeshwar is the easiest with minimal trekking. We arrange appropriate support for all fitness levels."
              },
              {
                question: "Do I need special permits for Kailash Mansarovar Yatra?",
                answer: "Yes, the Kailash Mansarovar Yatra requires special permits from the Chinese government and an Indian visa for Nepal transit. Our team handles all permit arrangements, but passports need to be submitted 2-3 months in advance."
              },
              {
                question: "What kind of accommodation is provided during the pilgrimage?",
                answer: "Accommodation varies based on location and your selected travel preference. Options range from basic guesthouses in remote areas to deluxe hotels in accessible locations. All accommodations are clean, comfortable and vetted for pilgrim-friendly atmosphere."
              },
              {
                question: "Can you arrange special pujas or rituals at the temples?",
                answer: "Yes, we specialize in arranging authentic Vedic rituals at all major temples. From simple abhishekams to elaborate yagnas, our priest network can perform rituals according to your spiritual needs and budget."
              },
              {
                question: "Is the pilgrimage suitable for elderly travelers?",
                answer: "Most of our pilgrimages can be adapted for elderly travelers. We offer special assistance, porter services, palanquin options, and in some locations, helicopter services. Our team creates custom itineraries based on physical capabilities."
              },
            ].map((faq, index) => (
              <div className="col-lg-6 wow fadeInUp" data-wow-delay={`0.${index % 2 + 1}s`} key={index}>
                <div className="bg-light rounded p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-question text-white"></i>
                    </div>
                    <h5 className="mb-0">{faq.question}</h5>
                  </div>
                  <p className="mb-0">{faq.answer}</p>
                </div>
              </div>
            ))}
            
            <div className="col-12 text-center mt-4">
              <a href="/faqs" className="btn btn-outline-primary rounded-pill px-5 py-3">
                <i className="fas fa-question-circle me-2"></i>View All FAQs
              </a>
            </div>
          </div>
        </div>
      </div>

   

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fas fa-arrow-up"></i></a>
    </div>
  );
}
