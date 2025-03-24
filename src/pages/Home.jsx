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
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Sacred Hindu Pilgrimage Journeys
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Experience Moksha through Ancient Temple Circuits & Vedic Rituals
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Search Pilgrimage (Eg: Panch Kedar, Kailash Yatra)"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div>
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
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="/img/about.jpg"
                  alt="Vedic Guide"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Our Yatras
              </h6>
              <h1 className="mb-4">
                <span className="text-primary">Kedar Baba</span> Pilgrimage Services
              </h1>
              <p className="mb-4">
                We specialize in authentic Sanatan Dharma pilgrimage experiences, combining Vedic rituals with 
                sacred temple journeys. Our services include:
              </p>
              <div className="row gy-2 gx-4 mb-4">
                {[
                  "12 Jyotirlinga Parikrama",
                  "Char Dham Yatra Arrangements",
                  "Panch Kedar Circuit",
                  "Panch Kailash Darshan",
                  "Shakti Peeth Darshan",
                  "Vedic Ritual Coordination",
                  "Pind Daan Services",
                  "VIP Temple Darshan"
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-om text-primary me-2"></i>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="/about">
                Know More About Yatras
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Spiritual Circuits */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Premium Yatras
            </h6>
            <h1 className="mb-5">Sacred Shiva Abodes</h1>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="border rounded p-4 position-relative h-100 bg-white shadow-sm">
                <div className="mb-3 bg-primary text-white px-3 py-1 rounded position-absolute" style={{ top: -15, left: 20 }}>
                  Most Popular
                </div>
                <h3 className="text-primary mb-4">Panch Kedar Yatra</h3>
                <p className="mb-2">
                  Journey through Lord Shiva's five divine manifestations in Uttarakhand's Himalayas. According to ancient 
                  scriptures, these temples mark where parts of Lord Shiva's bull form appeared after he tried to avoid the Pandavas.
                </p>
                <div className="row g-3 my-3">
                  {[
                    { name: "Kedarnath", desc: "Main shrine - Lord Shiva's back" },
                    { name: "Tungnath", desc: "Highest Shiva temple (12,073 ft)" },
                    { name: "Rudranath", desc: "Face manifestation in remote cave" },
                    { name: "Madhyamaheshwar", desc: "Naval (middle) portion of Lord" },
                    { name: "Kalpeshwar", desc: "Hair (jata) manifestation in cave" }
                  ].map((temple, index) => (
                    <div className="col-12" key={index}>
                      <div className="d-flex align-items-center mb-2">
                        <i className="fa fa-mountain text-primary me-2"></i>
                        <span className="fw-bold">{temple.name}:</span>
                        <span className="ms-2">{temple.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-primary fw-bold mb-2">Journey Features:</p>
                <div className="row g-3 mb-4">
                  {[
                    "Complete Rudrabhishek at each temple",
                    "Helicopter options for difficult terrains",
                    "Traditional pahadi meals during trek",
                    "Local guides with deep spiritual knowledge"
                  ].map((feature, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-check-circle text-success me-2"></i>
                        <small>{feature}</small>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="/panch-kedar" className="btn btn-primary py-2 px-4">Explore Panch Kedar</a>
              </div>
            </div>
            
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="border rounded p-4 position-relative h-100 bg-white shadow-sm">
                <div className="mb-3 bg-danger text-white px-3 py-1 rounded position-absolute" style={{ top: -15, left: 20 }}>
                  Advanced
                </div>
                <h3 className="text-primary mb-4">Panch Kailash Darshan</h3>
                <p className="mb-2">
                  Experience the five sacred mountain abodes of Lord Shiva, each resembling the cosmic Shiva lingam in nature. 
                  These majestic Himalayan peaks are considered the most spiritually potent places for Shiva devotees.
                </p>
                <div className="row g-3 my-3">
                  {[
                    { name: "Kailash Mansarovar", desc: "Original abode - Tibet (21,778 ft)" },
                    { name: "Adi Kailash", desc: "Ancient alternative in Uttarakhand" },
                    { name: "Kinnaur Kailash", desc: "Stunning 79-foot natural lingam" },
                    { name: "Shrikhand Mahadev", desc: "Challenging trek to lingam peak" },
                    { name: "Manimahesh Kailash", desc: "Sacred lake reflection of Mount Kailash" }
                  ].map((peak, index) => (
                    <div className="col-12" key={index}>
                      <div className="d-flex align-items-center mb-2">
                        <i className="fa fa-om text-primary me-2"></i>
                        <span className="fw-bold">{peak.name}:</span>
                        <span className="ms-2">{peak.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-primary fw-bold mb-2">Journey Features:</p>
                <div className="row g-3 mb-4">
                  {[
                    "Special permissions & visa arrangements",
                    "Acclimatization camps at multiple locations",
                    "Medical support throughout high-altitude journey",
                    "Participation in sacred parikrama rituals"
                  ].map((feature, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-check-circle text-success me-2"></i>
                        <small>{feature}</small>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="/panch-kailash" className="btn btn-primary py-2 px-4">Explore Panch Kailash</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5 bg-dark rounded">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Start Your Yatra</h6>
                <h1 className="text-white mb-4">Personalized Pilgrimage Planning</h1>
                <p className="mb-4">
                  Our Vedic experts will craft your spiritual journey with:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3"><i className="fa fa-check-circle me-2 text-primary"></i>Authentic Ritual Arrangements</li>
                  <li className="mb-3"><i className="fa fa-check-circle me-2 text-primary"></i>Temple VIP Darshan Passes</li>
                  <li className="mb-3"><i className="fa fa-check-circle me-2 text-primary"></i>Sanctified Accommodations</li>
                  <li className="mb-3"><i className="fa fa-check-circle me-2 text-primary"></i>Expert Spiritual Guides</li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="bg-white p-4 rounded shadow-lg">
                  <h2 className="text-primary mb-4 text-center">Enquire Now</h2>
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
                            <i className="fa fa-user text-primary me-2"></i>Full Name
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
                            <i className="fa fa-phone text-primary me-2"></i>Phone Number
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
                            <i className="fa fa-envelope text-primary me-2"></i>Email Address
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
                            <option value="">Select a Pilgrimage</option>
                            {pilgrimageOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="pilgrimageType">
                            <i className="fa fa-map-marker-alt text-primary me-2"></i>
                            Pilgrimage Type
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
                            <option value="">Select Travel Preference</option>
                            {travelPreferenceOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="travelPreference">
                            <i className="fa fa-star text-primary me-2"></i>
                            Travel Preference
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
                            value={formData.travelers}
                            onChange={handleInputChange}
                            min="1"
                            max="50"
                            required
                          />
                          <label htmlFor="travelers">
                            <i className="fa fa-users text-primary me-2"></i>
                            Number of Travelers
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                          <label htmlFor="date">
                            <i className="fa fa-calendar-alt text-primary me-2"></i>
                            Preferred Date
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="requests"
                            style={{ height: "100px" }}
                            placeholder="Special Requests or Requirements"
                            value={formData.requests}
                            onChange={handleInputChange}
                          ></textarea>
                          <label htmlFor="requests">
                            <i className="fa fa-edit text-primary me-2"></i>
                            Special Requests
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
                            I'm interested in special Vedic rituals during my journey
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                            checked={formData.terms}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-check-label" htmlFor="terms">
                            I agree to the <a href="#" className="text-primary">terms and conditions</a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12 d-grid">
                        <button type="submit" className="btn btn-primary py-3 text-white">
                          <i className="fa fa-paper-plane me-2"></i>Submit Enquiry
                        </button>
                      </div>
                      {showSuccess && (
                        <div className="col-12 mt-3">
                          <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong><i className="fa fa-check-circle me-2"></i>Thank you!</strong>
                            Our Vedic expert will contact you within 24 hours.
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => setShowSuccess(false)}
                            ></button>
                          </div>
                        </div>
                      )}
                      {showWhatsApp && (
                        <div className="col-12 mt-3">
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success d-flex align-items-center justify-content-center py-3 w-100"
                          >
                            <i className="fab fa-whatsapp me-2 fa-lg"></i>
                            Connect on WhatsApp for faster response
                          </a>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}