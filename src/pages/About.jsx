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

      {/* About Section - Enhanced */}
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
                Since 2010, <span className="text-primary">Kedar Baba Tours</span> has been the premier provider of sacred pilgrimage journeys across India and beyond. We specialize in creating deeply meaningful spiritual experiences that connect travelers with ancient traditions and holy sites.
              </p>
              <p className="mb-4">
                Our expertise lies in organizing comprehensive pilgrimages to the most revered destinations in Sanatan Dharma - from the sacred Char Dham Yatra to the mystical Kailash Mansarovar, and from the twelve Jyotirlingas to the divine Shakti Peeths. We have successfully guided over 25,000 pilgrims on their spiritual journeys.
              </p>
              <p className="mb-4">
                What sets us apart is our dedication to authentic spiritual experiences combined with modern comfort. Our services include VIP darshan arrangements, experienced spiritual guides, accommodation at premium properties, and special access to exclusive rituals and ceremonies.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i> First-Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i> Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i> 5-Star Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i> Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i> 150+ Premium Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i> 24/7 Support
                  </p>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="/services">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Purpose</h6>
            <h1 className="mb-5">Mission & Vision</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100 bg-white p-5 rounded shadow">
                <div className="d-flex align-items-center mb-4">
                  <div className="btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-om text-white"></i>
                  </div>
                  <h4 className="mb-0">Our Mission</h4>
                </div>
                <p className="mb-4">To facilitate transformative spiritual journeys that connect pilgrims with ancient traditions, sacred spaces, and divine energies while ensuring comfort, safety, and authentic experiences.</p>
                <div className="border-top mt-4 pt-4">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 rounded-circle" src="assets/img/founder.jpg" alt="Founder" style={{ width: 50, height: 50 }} />
                    <div className="ms-3">
                      <h5 className="mb-1">Pandit Hari Prasad</h5>
                      <span>Founder & Spiritual Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="h-100 bg-white p-5 rounded shadow">
                <div className="d-flex align-items-center mb-4">
                  <div className="btn-square bg-primary rounded-circle me-3">
                    <i className="fa fa-eye text-white"></i>
                  </div>
                  <h4 className="mb-0">Our Vision</h4>
                </div>
                <p className="mb-4">To be the most trusted name in spiritual tourism, preserving the authenticity of ancient traditions while incorporating modern comforts and sustainable practices that benefit local communities and sacred sites.</p>
                <div className="border-top mt-4 pt-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="fa fa-check-circle text-primary me-2"></i>
                        <span>12+ Years Experience</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="fa fa-check-circle text-primary me-2"></i>
                        <span>25,000+ Pilgrims</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Strengths</h6>
            <h1 className="mb-5">Why Choose Kedar Baba Tours</h1>
          </div>
          <div className="row g-4">
            {[
              {
                title: "Spiritual Expertise",
                icon: "fa-pray",
                desc: "Our team includes scholars, pandits, and guides with deep knowledge of sacred texts, rituals, and traditions"
              },
              {
                title: "VIP Darshan Access",
                icon: "fa-door-open",
                desc: "Special arrangements that ensure priority temple access and intimate darshan experiences at crowded pilgrimage sites"
              },
              {
                title: "Authentic Experiences",
                icon: "fa-om",
                desc: "Participation in traditional ceremonies, meditation sessions, and spiritual discourses led by respected teachers"
              },
              {
                title: "Premium Comfort",
                icon: "fa-hotel",
                desc: "Carefully selected accommodations that offer modern amenities while respecting the spiritual atmosphere"
              },
              {
                title: "Safety First",
                icon: "fa-shield-alt",
                desc: "Comprehensive safety measures including medical support, especially for high-altitude pilgrimages and challenging treks"
              },
              {
                title: "Customized Journeys",
                icon: "fa-route",
                desc: "Personalized itineraries that respect your pace, preferences, and specific spiritual objectives"
              }
            ].map((feature, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index+1}s`} key={index}>
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className={`fa ${feature.icon} fa-3x text-primary mb-4`}></i>
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Story</h6>
            <h1 className="mb-5">The Kedar Baba Tours Journey</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="mb-4">Founded by Pandit Hari Prasad after his transformative pilgrimage to Kedarnath in 2009, Kedar Baba Tours began as a small operation dedicated to helping devotees experience the divine presence at sacred Himalayan shrines.</p>
              <p className="mb-4">What started as a passion project quickly grew into a respected pilgrimage service as word spread about our exceptional spiritual guidance and attention to detail. Over the past decade, we have expanded our offerings to include:</p>
              
              <div className="row gy-2">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                      2010
                    </div>
                    <div className="ms-4">
                      <h6>Company Founded</h6>
                      <p className="mb-0">Began with Char Dham Yatra services</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                      2015
                    </div>
                    <div className="ms-4">
                      <h6>International Expansion</h6>
                      <p className="mb-0">Added Nepal and Kailash Mansarovar packages</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                      2018
                    </div>
                    <div className="ms-4">
                      <h6>Luxury Division</h6>
                      <p className="mb-0">Introduced premium helicopter services and luxury accommodations</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                      2021
                    </div>
                    <div className="ms-4">
                      <h6>Digital Transformation</h6>
                      <p className="mb-0">Launched virtual darshan services and online booking platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid rounded" src="assets/img/journey.jpg" alt="Our Journey" />
              </div>
              <div className="position-relative mt-4">
                <div className="bg-white rounded p-4">
                  <h5 className="mb-3">Continuing the Sacred Tradition</h5>
                  <p className="mb-0">Today, Kedar Baba Tours has grown into a trusted name in spiritual tourism with offices in Delhi, Haridwar, and Kathmandu. Our commitment to preserving authentic traditions while embracing modern comfort has earned us recognition from both pilgrims and industry experts.</p>
                </div>
                <div className="grad-line"></div>
              </div>
              <div className="position-relative mt-4">
                <div className="bg-white rounded p-4">
                  <h5 className="mb-3">Our Community Impact</h5>
                  <p className="mb-0">We are deeply committed to supporting local communities at pilgrimage sites through employment opportunities, cultural preservation initiatives, and environmental conservation projects. A portion of our profits goes toward temple renovation and maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Guide Team - Enhanced */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Experts</h6>
            <h1 className="mb-5">Meet Our Spiritual Travel Guides</h1>
            <p className="mb-5">Our team of dedicated travel experts combines spiritual knowledge with professional expertise to create transformative journeys</p>
          </div>
          <div className="row g-4">
            {[
              {
                name: "Acharya Ramesh Sharma",
                position: "Chief Spiritual Guide",
                expertise: "Vedic Scholar with 25+ years of pilgrimage experience",
                photo: "team-1.jpg"
              },
              {
                name: "Yogini Meenakshi",
                position: "Yoga & Meditation Expert",
                expertise: "Specializes in mindful mountain treks and meditation retreats",
                photo: "team-2.jpg"
              },
              {
                name: "Pandit Suresh Joshi",
                position: "Senior Temple Relations",
                expertise: "Manages VIP darshan arrangements and special ceremonies",
                photo: "team-3.jpg"
              },
              {
                name: "Dr. Arjun Singh",
                position: "High-Altitude Expert",
                expertise: "Medical doctor specializing in safe Kailash expeditions",
                photo: "team-4.jpg"
              }
            ].map((guide, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`0.${index+1}s`} key={index}>
                <div className="team-item border-primary border-top border-5 rounded shadow overflow-hidden">
                  <div className="text-center p-4">
                    <img className="img-fluid rounded-circle mb-4" src={`assets/img/${guide.photo}`} alt={guide.name} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                    <h5 className="mb-0">{guide.name}</h5>
                    <small className="text-primary">{guide.position}</small>
                    <div className="mt-3">
                      <p className="small text-muted">{guide.expertise}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center bg-primary p-3">
                    <a className="btn btn-square text-white" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square text-white" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square text-white" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Testimonials</h6>
            <h1 className="mb-5">What Our Pilgrims Say</h1>
          </div>
          <div className="row g-4">
            {[
              {
                name: "Sharma Family",
                from: "Delhi",
                tour: "Char Dham Yatra",
                image: "testimonial-1.jpg",
                quote: "The attention to detail was remarkable. From arranging special pujas to comfortable accommodations in remote locations, Kedar Baba Tours exceeded our expectations."
              },
              {
                name: "Dr. Rajat Mehta",
                from: "Mumbai",
                tour: "Kailash Mansarovar",
                image: "testimonial-2.jpg",
                quote: "As an older pilgrim with health concerns, I was hesitant about the Kailash journey. Their medical support and personalized care made this life-changing pilgrimage possible for me."
              },
              {
                name: "The Agarwal Group",
                from: "Bangalore",
                tour: "12 Jyotirlinga Package",
                image: "testimonial-3.jpg",
                quote: "Coordinating a pilgrimage across India for our group of 15 seemed daunting, but Kedar Baba Tours handled everything flawlessly. The spiritual insights from their guides added tremendous value."
              }
            ].map((testimonial, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`0.${index+1}s`} key={index}>
                <div className="testimonial-item bg-white text-center border p-4 h-100">
                  <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={`assets/img/${testimonial.image}`} style={{ width: "80px", height: "80px", objectFit: "cover" }} alt={testimonial.name} />
                  <h5 className="mb-0">{testimonial.name}</h5>
                  <p className="mb-0 text-primary">{testimonial.from}</p>
                  <small className="text-muted">{testimonial.tour}</small>
                  <div className="testimonial-text bg-light text-center p-4 mt-4">
                    <p className="mb-0">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Recognition</h6>
            <h1 className="mb-5">Awards & Certifications</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              {
                award: "Best Spiritual Tour Operator",
                year: "2023",
                org: "India Tourism Awards"
              },
              {
                award: "Excellence in Customer Service",
                year: "2022",
                org: "Travel & Hospitality Council"
              },
              {
                award: "Sustainable Tourism Practices",
                year: "2021",
                org: "Himalayan Conservation Society"
              },
              {
                award: "Cultural Preservation",
                year: "2020",
                org: "Heritage Travel Association"
              }
            ].map((award, index) => (
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`0.${index+1}s`} key={index}>
                <div className="bg-white text-center rounded p-4 shadow">
                  <i className="fa fa-award fa-3x text-primary mb-3"></i>
                  <h5 className="mb-3">{award.award}</h5>
                  <p className="text-primary mb-0">{award.year} - {award.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 text-white mb-4">Begin Your Sacred Journey With Us</h1>
              <p className="text-white mb-4">Let our team of spiritual experts craft a personalized pilgrimage that aligns with your devotional goals and preferences. Whether you seek solace at ancient temples, meditation in Himalayan caves, or a comprehensive sacred circuit, we're here to guide your journey.</p>
              <p className="text-white mb-4">Contact us today to discuss your spiritual aspirations and begin planning your divine yatra.</p>
            </div>
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-white rounded p-4">
                <h3 className="mb-4 text-primary text-center">Connect With Us</h3>
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-map-marker-alt text-primary me-3"></i>
                  <p className="mb-0">123 Spiritual Path, Haridwar, Uttarakhand, India</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-phone-alt text-primary me-3"></i>
                  <p className="mb-0">+91 909 908 1248</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-envelope text-primary me-3"></i>
                  <p className="mb-0">info@kedarbabatours.com</p>
                </div>
                <div className="d-grid gap-2">
                  <a href="/contact" className="btn btn-primary py-3">Contact Us Now</a>
                  <a href="/packages" className="btn btn-outline-primary py-3">Explore Our Packages</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
