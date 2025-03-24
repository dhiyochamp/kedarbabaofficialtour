import React, { useState, useEffect } from 'react';

function Packages() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [phone, setPhone] = useState('9099081248'); // Default business phone
  const [userData, setUserData] = useState({
    name: '',
    userPhone: '',
    travelers: '',
    date: '',
    customRequests: ''
  });
  const [errors, setErrors] = useState({});

  // Handle package selection
  const handleCustomizeClick = (packageName, price) => {
    setSelectedPackage(packageName);
    setShowWhatsAppModal(true);
  };

  // Direct WhatsApp connection without modal
  const directWhatsAppConnect = (packageName, price) => {
    const message = `Hello, I'm interested in booking the ${packageName} package (₹${price.toLocaleString()}). Please share details and availability.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!userData.name.trim()) newErrors.name = "Name is required";
    if (!userData.userPhone.trim()) newErrors.userPhone = "Phone number is required";
    if (userData.userPhone.trim() && !/^\d{10}$/.test(userData.userPhone.trim())) {
      newErrors.userPhone = "Please enter a valid 10-digit phone number";
    }
    if (!userData.travelers) newErrors.travelers = "Number of travelers is required";
    if (!userData.date) newErrors.date = "Preferred date is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle WhatsApp submission
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const { name, userPhone, travelers, date, customRequests } = userData;
      const formattedDate = new Date(date).toLocaleDateString('en-IN', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
      });
      
      const message = `Namaste 🙏 I'm *${name}* and I'm interested in the *${selectedPackage}* package.
      
*Booking Details:*
- Travelers: ${travelers}
- Preferred Date: ${formattedDate}
${customRequests ? `- Special Requests: ${customRequests}` : ''}

Please contact me about availability and booking details. Thank you!`;
      
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
      setShowWhatsAppModal(false);
      
      // Reset form
      setUserData({
        name: '',
        userPhone: '',
        travelers: '',
        date: '',
        customRequests: ''
      });
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Generate detailed WhatsApp message for booking form
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const packageName = e.target.package.value;
    const date = e.target.date.value;
    const groupSize = e.target.groupSize.value;
    const specialRequests = e.target.specialRequests.value;
    
    const formattedDate = new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric', 
      month: 'short', 
      year: 'numeric'
    });
    
    const message = `Namaste 🙏 I would like to book the *${packageName}* package.
    
*Booking Details:*
- Travel Date: ${formattedDate}
- Group Size: ${groupSize}
${specialRequests ? `- Special Requests: ${specialRequests}` : ''}

Please send me a detailed itinerary and pricing information. Thank you!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Sacred Pilgrimage Packages
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Divine Yatra Packages
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* India Pilgrimages */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Sanatan Dharma Yatras
            </h6>
            <h1 className="mb-5">Sacred India Pilgrimage Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { 
                name: 'Char Dham Yatra', 
                location: 'Uttarakhand', 
                price: 38500,
                details: 'Moksha-giving circuit (Badrinath, Kedarnath, Gangotri, Yamunotri) with VIP darshan',
                duration: '10D/9N',
                includes: ['Ganga Aarti', 'Rudrabhishek', 'Helicopter Access']
              },
              { 
                name: '12 Jyotirlinga Parikrama', 
                location: 'Pan-India', 
                price: 119999,
                details: 'Complete pilgrimage to all Shiva Jyotirlingas with Vedic puja arrangements',
                duration: '21D/20N',
                includes: ['Somnath Darshan', 'Mahakaleshwar Bhasma Aarti', 'Varanasi Stay']
              },
              { 
                name: 'Sapta Puri Circuit', 
                location: '7 Holy Cities', 
                price: 75999,
                details: 'Seven sacred cities including Ayodhya Ram Mandir & Dwarka',
                duration: '14D/13N',
                includes: ['Special Aarti', 'Purohit Services', 'AC Transport']
              },
              { 
                name: 'Shakti Peeth Yatra', 
                location: 'Multiple States', 
                price: 68999,
                details: '51 Divine Feminine shrines including Kamakhya & Vaishno Devi',
                duration: '18D/17N',
                includes: ['Chandi Path', 'Kumari Puja', 'Night Darshan']
              },
            ].map((pkg, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index+1}s`} key={index}>
                <div className="package-item border border-2 border-primary rounded">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={`assets/img/indian-${index + 1}.jpg`} alt={pkg.name} />
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0"><i className="fa fa-map-marker-alt text-primary me-2" />{pkg.location}</small>
                      <small className="m-0"><i className="fa fa-calendar-alt text-primary me-2" />{pkg.duration}</small>
                    </div>
                    <h4 className="mb-3 text-primary">{pkg.name}</h4>
                    <p className="text-dark mb-4">{pkg.details}</p>
                    <div className="d-flex justify-content-between bg-light p-3 rounded">
                      <h5 className="mb-0">₹{pkg.price.toLocaleString()}</h5>
                      <div className="h6 mb-0">
                        <i className="fa fa-star text-warning" />
                        <small className="text-body">(45 Reviews)</small>
                      </div>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <a href="#" className="btn btn-primary" onClick={() => directWhatsAppConnect(pkg.name, pkg.price)}>
                        <i className="fab fa-whatsapp me-2" />Book Now via WhatsApp
                      </a>
                      <a href="#" className="btn btn-outline-primary" onClick={() => handleCustomizeClick(pkg.name, pkg.price)}>
                        Customize Package
                      </a>
                    </div>
                    <div className="mt-3">
                      {pkg.includes.map((item, i) => (
                        <small key={i} className="me-2"><i className="fas fa-check-circle text-success" /> {item}</small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panch Kedar Section */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">
              Sacred Shiva Dhamas
            </h6>
            <h1 className="mb-5">Panch Kedar Yatra Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { 
                name: 'Complete Panch Kedar', 
                location: 'Uttarakhand', 
                price: 42999,
                details: 'Sacred pilgrimage to all five Kedar temples - Kedarnath, Tungnath, Rudranath, Madhyamaheshwar & Kalpeshwar',
                duration: '9D/8N',
                includes: ['VIP Darshan', 'Helicopter Option', 'Trek Support']
              },
              { 
                name: 'Kedarnath-Tungnath Trek', 
                location: 'Uttarakhand', 
                price: 28999,
                details: 'Trek to two majestic Kedar Shiva temples with spiritual guides',
                duration: '5D/4N',
                includes: ['Trek Equipment', 'Puja Samagri', 'Camping']
              },
              { 
                name: 'Rudranath-Madhyamaheshwar', 
                location: 'Uttarakhand', 
                price: 32599,
                details: 'Mystical trek to remote Shiva shrines with meditation sessions',
                duration: '6D/5N',
                includes: ['Yoga Sessions', 'Local Guide', 'Forest Camping']
              },
            ].map((pkg, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index+1}s`} key={index}>
                <div className="package-item border border-2 border-success rounded">
                  <div className="position-relative">
                    <img className="img-fluid" src={`assets/img/kedar-${index + 1}.jpg`} alt={pkg.name} />
                    <div className="package-overlay">
                      <small className="badge bg-success">New Package</small>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small><i className="fa fa-map-marker-alt text-success me-2" />{pkg.location}</small>
                      <small><i className="fa fa-calendar-alt text-success me-2" />{pkg.duration}</small>
                    </div>
                    <h4 className="mb-3 text-success">{pkg.name}</h4>
                    <p className="text-dark mb-4">{pkg.details}</p>
                    <div className="d-flex justify-content-between bg-light p-3 rounded">
                      <h5 className="mb-0">₹{pkg.price.toLocaleString()}</h5>
                      <div className="h6 mb-0">
                        <i className="fa fa-star text-warning" />
                        <small className="text-body">(22 Reviews)</small>
                      </div>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <a href="#" className="btn btn-success" onClick={() => directWhatsAppConnect(pkg.name, pkg.price)}>
                        <i className="fab fa-whatsapp me-2" />Book Now via WhatsApp
                      </a>
                      <a href="#" className="btn btn-outline-success" onClick={() => handleCustomizeClick(pkg.name, pkg.price)}>
                        Customize Package
                      </a>
                    </div>
                    <div className="mt-3">
                      {pkg.includes.map((item, i) => (
                        <small key={i} className="me-2"><i className="fas fa-check-circle text-success" /> {item}</small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kailash Yatra Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">
              Sacred Kailash Pilgrimages
            </h6>
            <h1 className="mb-5">Panch Kailash Yatra Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { 
                name: 'Kailash Mansarovar', 
                location: 'Tibet/Nepal', 
                price: 179999,
                details: 'Divine journey to original abode of Lord Shiva with parikrama',
                duration: '16D/15N',
                includes: ['Helicopter Option', 'Tibet Permits', 'Medical Support']
              },
              { 
                name: 'Adi Kailash', 
                location: 'Uttarakhand', 
                price: 69999,
                details: 'Sacred alternative to Kailash Mansarovar within Indian territory',
                duration: '10D/9N',
                includes: ['Om Parvat View', 'Jungle Trek', 'Meditation']
              },
              { 
                name: 'Kinnaur-Manimahesh', 
                location: 'HP/Himachal', 
                price: 59999,
                details: 'Combined expedition to Kinnaur Kailash & Manimahesh Kailash',
                duration: '12D/11N',
                includes: ['Shivalinga Darshan', 'Trek Support', 'Local Guide']
              },
              { 
                name: 'Shrikhand Mahadev', 
                location: 'Himachal', 
                price: 45999,
                details: 'Trek to magnificent Shiva Lingam mountain peak',
                duration: '8D/7N',
                includes: ['Trek Equipment', 'Base Camp Stay', 'Puja Arrangements']
              },
            ].map((pkg, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`0.${index+1}s`} key={index}>
                <div className="package-item border border-2 border-success rounded">
                  <div className="position-relative">
                    <img className="img-fluid" src={`assets/img/kailash-${index + 1}.jpg`} alt={pkg.name} />
                    <div className="package-overlay">
                      <small className="badge bg-success">New Package</small>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small><i className="fa fa-map-marker-alt text-success me-2" />{pkg.location}</small>
                      <small><i className="fa fa-calendar-alt text-success me-2" />{pkg.duration}</small>
                    </div>
                    <h4 className="mb-3 text-success">{pkg.name}</h4>
                    <p className="text-dark mb-4">{pkg.details}</p>
                    <div className="d-flex justify-content-between bg-light p-3 rounded">
                      <h5 className="mb-0">₹{pkg.price.toLocaleString()}</h5>
                      <div className="h6 mb-0">
                        <i className="fa fa-star text-warning" />
                        <small className="text-body">(18 Reviews)</small>
                      </div>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <a href="#" className="btn btn-success" onClick={() => directWhatsAppConnect(pkg.name, pkg.price)}>
                        <i className="fab fa-whatsapp me-2" />Book Now via WhatsApp
                      </a>
                      <a href="#" className="btn btn-outline-success" onClick={() => handleCustomizeClick(pkg.name, pkg.price)}>
                        Customize Package
                      </a>
                    </div>
                    <div className="mt-3">
                      {pkg.includes.map((item, i) => (
                        <small key={i} className="me-2"><i className="fas fa-check-circle text-success" /> {item}</small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nepal Pilgrimages */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">
              Himalayan Pilgrimages
            </h6>
            <h1 className="mb-5">Nepal Spiritual Journey Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { 
                name: 'Pashupatinath Darshan', 
                location: 'Kathmandu', 
                price: 25999,
                details: 'VIP access to Shiva Jyotirlinga with Ganga Aarti participation',
                duration: '5D/4N',
                includes: ['Guided Temple Tour', 'Evening Aarti', 'Puja Samagri']
              },
              { 
                name: 'Muktinath-Manas Sarovar', 
                location: 'Nepal/Tibet', 
                price: 149999,
                details: 'Sacred combo pilgrimage with Kailash parikrama',
                duration: '15D/14N',
                includes: ['Oxygen Support', 'Expert Guides', 'Permits']
              },
              { 
                name: 'Lumbini Spiritual Circuit', 
                location: 'Nepal', 
                price: 45999,
                details: 'Buddhist heritage tour with meditation sessions',
                duration: '7D/6N',
                includes: ['Zen Master Talks', 'Vipassana Session', 'Museum Tours']
              },
            ].map((pkg, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index+1}s`} key={index}>
                <div className="package-item border border-2 border-success rounded">
                  <div className="position-relative">
                    <img className="img-fluid" src={`assets/img/nepal-${index + 1}.jpg`} alt={pkg.name} />
                    <div className="package-overlay">
                      <small className="badge bg-success">Best Seller</small>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small><i className="fa fa-map-marker-alt text-success me-2" />{pkg.location}</small>
                      <small><i className="fa fa-calendar-alt text-success me-2" />{pkg.duration}</small>
                    </div>
                    <h4 className="mb-3 text-success">{pkg.name}</h4>
                    <p className="text-dark mb-4">{pkg.details}</p>
                    <div className="d-flex justify-content-between bg-light p-3 rounded">
                      <h5 className="mb-0">₹{pkg.price.toLocaleString()}</h5>
                      <div className="h6 mb-0">
                        <i className="fa fa-star text-warning" />
                        <small className="text-body">(32 Reviews)</small>
                      </div>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <a href="#" className="btn btn-success" onClick={() => directWhatsAppConnect(pkg.name, pkg.price)}>
                        <i className="fab fa-whatsapp me-2" />Book Now via WhatsApp
                      </a>
                      <a href="#" className="btn btn-outline-success" onClick={() => handleCustomizeClick(pkg.name, pkg.price)}>
                        Customize Package
                      </a>
                    </div>
                    <div className="mt-3">
                      {pkg.includes.map((item, i) => (
                        <small key={i} className="me-2"><i className="fas fa-check-circle text-success" /> {item}</small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vedic Services */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-danger px-3">
              Spiritual Add-ons
            </h6>
            <h1 className="mb-5">Sacred Rituals & Services</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: 'Vedic Puja Kit', 
                price: 5999,
                desc: 'Complete puja samagri with Rudraksha mala and sanctified idols'
              },
              { 
                title: 'Priest Services', 
                price: 2999,
                desc: 'Experienced Pandit for rituals & guidance'
              },
              { 
                title: 'Pind Daan Package', 
                price: 15999,
                desc: 'Gaya/Varanasi ancestral rituals with video documentation'
              },
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" key={index}>
                <div className="service-card shadow p-4 rounded">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-square bg-danger text-white rounded-circle me-3">
                      <i className="fas fa-om" />
                    </div>
                    <h5 className="mb-0 text-danger">{service.title}</h5>
                  </div>
                  <p className="text-dark">{service.desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">₹{service.price.toLocaleString()}</h5>
                    <a href="#" className="btn btn-sm btn-danger" onClick={() => directWhatsAppConnect(service.title, service.price)}>
                      Add via WhatsApp
                    </a>
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
          <div className="booking p-5 bg-dark rounded">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-warning text-uppercase">Secure Your Spiritual Journey</h6>
                <h1 className="display-6 text-white mb-4">Guaranteed Temple Access</h1>
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle fa-2x text-success me-3" />
                  </div>
                  <div>
                    <h5 className="text-white">VIP Darshan Pass Included</h5>
                    <p className="mb-0">Special access to sanctum sanctorum</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-rupee-sign fa-2x text-success me-3" />
                  </div>
                  <div>
                    <h5 className="text-white">Best Price Guarantee</h5>
                    <p className="mb-0">Customizable payment plans available</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <form className="p-4 bg-white rounded" onSubmit={handleBookingSubmit}>
                  <h4 className="mb-4">Personalize Your Yatra</h4>
                  <div className="row g-3">
                    <div className="col-12">
                      <select className="form-select" name="package" required>
                        <option value="">Select Package</option>
                        <option>Char Dham Yatra</option>
                        <option>Complete Panch Kedar</option>
                        <option>Kailash Mansarovar</option>
                        <option>12 Jyotirlinga Parikrama</option>
                        <option>Nepal Pilgrimage Combo</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="date" className="form-control" name="date" required />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select" name="groupSize" required>
                        <option value="">Group Size</option>
                        <option>1-5 People</option>
                        <option>6-10 People</option>
                        <option>10+ People</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" name="specialRequests" placeholder="Special Requests (Puja/Pandit/Diets)" rows={3} />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success w-100 py-3" type="submit">
                        <i className="fab fa-whatsapp me-2" />Connect on WhatsApp Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal for Customization */}
      {showWhatsAppModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Customize {selectedPackage} Package</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowWhatsAppModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Fill out details to customize your <strong>{selectedPackage}</strong> package:</p>
                <form onSubmit={handleWhatsAppSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Your Name*</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      name="name"
                      value={userData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Your WhatsApp Number*</label>
                    <div className="input-group">
                      <span className="input-group-text">+91</span>
                      <input 
                        type="text" 
                        className={`form-control ${errors.userPhone ? 'is-invalid' : ''}`}
                        name="userPhone"
                        value={userData.userPhone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number" 
                      />
                      {errors.userPhone && <div className="invalid-feedback">{errors.userPhone}</div>}
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label">Number of Travelers*</label>
                      <select 
                        className={`form-select ${errors.travelers ? 'is-invalid' : ''}`}
                        name="travelers"
                        value={userData.travelers}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="1-2">1-2 People</option>
                        <option value="3-5">3-5 People</option>
                        <option value="6-10">6-10 People</option>
                        <option value="10+">10+ People</option>
                      </select>
                      {errors.travelers && <div className="invalid-feedback">{errors.travelers}</div>}
                    </div>
                    
                    <div className="col">
                      <label className="form-label">Preferred Date*</label>
                      <input 
                        type="date" 
                        className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                        name="date"
                        value={userData.date}
                        onChange={handleChange}
                      />
                      {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Special Requests (Optional)</label>
                    <textarea 
                      className="form-control"
                      name="customRequests"
                      value={userData.customRequests}
                      onChange={handleChange}
                      placeholder="Dietary requirements, specific pujas, accessibility needs, etc."
                      rows="3"
                    ></textarea>
                  </div>
                  
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success">
                      <i className="fab fa-whatsapp me-2"></i>Discuss via WhatsApp
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowWhatsAppModal(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Packages;