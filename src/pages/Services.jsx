import React from 'react'

function Services() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Sacred Hindu Pilgrimage Journeys</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Divine Pilgrimage Tours
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Major Hindu Pilgrimages in India */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Sanatan Dharma Yatras</h6>
            <h1 className="mb-5">Sacred Dhams & Jyotirlingas</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: "Char Dham Yatra", 
                desc: "Moksha-giving circuit of Badrinath (Vishnu), Kedarnath (Shiva), Gangotri (Ganga origin), and Yamunotri (Yamuna origin)" 
              },
              { 
                title: "12 Jyotirlinga Parikrama", 
                desc: "Complete pilgrimage to all 12 Shiva Jyotirlingas including Somnath, Mahakaleshwar, and Varanasi's Kashi Vishwanath" 
              },
              { 
                title: "Sapta Puri Circuit", 
                desc: "Seven holy cities: Ayodhya (Ram Janmabhoomi), Mathura (Krishna), Haridwar (Ganga), Varanasi, Kanchipuram, Ujjain, Dwarka" 
              },
              { 
                title: "Shakti Peeth Yatra", 
                desc: "51 sacred sites of Divine Feminine including Vaishno Devi, Kamakhya Temple, and Kalighat Kali Temple" 
              },
              { 
                title: "Dwarka & Rameshwaram Dham", 
                desc: "Twin pilgrimage to Krishna's Dwarkadhish Temple and Shiva's Ramanathaswamy Jyotirlinga" 
              },
              { 
                title: "Tirupati Balaji Darshan", 
                desc: "Visit the world's richest temple of Lord Venkateswara in Tirumala, Andhra Pradesh" 
              },
              { 
                title: "Sabarimala Ayyappan", 
                desc: "Sacred Kerala pilgrimage to Lord Ayyappa's hill shrine, open to all faiths" 
              },
              { 
                title: "Pur Jagannath Rath Yatra", 
                desc: "Witness the world's largest chariot festival at Odisha's 12th-century Jagannath Temple" 
              },
              { 
                title: "Nathdwara Shrinathji", 
                desc: "Darshan of Lord Krishna's child form in Rajasthan's famous Pushti Marg shrine" 
              }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="service-item rounded pt-3 border border-2 border-primary">
                  <div className="p-4">
                    <h5 className="text-primary">{item.title}</h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panch Kedar Section - NEW */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">Panch Kedar Yatra</h6>
            <h1 className="mb-5 text-success">Five Sacred Abodes of Lord Shiva</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: "Kedarnath", 
                desc: "Main temple of Panch Kedar circuit where Lord Shiva's back (hump) appeared, set amidst breathtaking Himalayan peaks at 3,583m" 
              },
              { 
                title: "Tungnath", 
                desc: "Highest Shiva temple in the world at 3,680m where Lord Shiva's arms manifested, set amidst rhododendron forests" 
              },
              { 
                title: "Rudranath", 
                desc: "Remote mountain shrine where Lord Shiva's face appeared, requiring challenging 20km trek through alpine meadows" 
              },
              { 
                title: "Madhyamaheshwar", 
                desc: "Serene temple where Lord Shiva's navel and stomach manifested, surrounded by pristine forests and streams" 
              },
              { 
                title: "Kalpeshwar", 
                desc: "Cave temple where Lord Shiva's hair (jata) appeared, the only Panch Kedar accessible throughout the year" 
              }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="service-item rounded pt-3 border border-2 border-success">
                  <div className="p-4">
                    <h5 className="text-success">{item.title}</h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panch Kailash Section - NEW */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">Panch Kailash Yatra</h6>
            <h1 className="mb-5 text-success">Five Divine Abodes of Mount Kailash</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: "Kailash Mansarovar", 
                desc: "Original abode of Lord Shiva in Tibet at 6,638m with sacred Lake Mansarovar, considered the most spiritually powerful pilgrimage" 
              },
              { 
                title: "Adi Kailash", 
                desc: "Also known as Chhota Kailash in Uttarakhand's Pithoragarh district, resembling the original Mount Kailash in shape and sanctity" 
              },
              { 
                title: "Kinnaur Kailash", 
                desc: "Magnificent 6,050m peak in Himachal Pradesh's Kinnaur district with natural 'Shivalinga' rock formation changing colors throughout the day" 
              },
              { 
                title: "Shrikhand Mahadev", 
                desc: "Imposing peak in Kullu, Himachal Pradesh resembling a massive Shivalinga requiring rigorous multi-day trek through glacier terrain" 
              },
              { 
                title: "Manimahesh Kailash", 
                desc: "Sacred peak in Chamba, Himachal Pradesh with glacial Manimahesh Lake reflecting its magnificence, site of major pilgrimage during Janmashtami" 
              }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="service-item rounded pt-3 border border-2 border-success">
                  <div className="p-4">
                    <h5 className="text-success">{item.title}</h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nepal Hindu Pilgrimages */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">Nepal Pilgrimage Tours</h6>
            <h1 className="mb-5 text-success">Shiva & Shakti in Himalayan Kingdom</h1>
          </div>
          <div className="row g-4">
            {[
              { 
                title: "Pashupatinath Temple", 
                desc: "UNESCO World Heritage Site - One of Shiva's most sacred Jyotirlingas in Kathmandu" 
              },
              { 
                title: "Muktinath Dham", 
                desc: "Vishnu's sacred shrine at 3,710m with 108 holy water sprouts and eternal flames" 
              },
              { 
                title: "Manakamana Temple", 
                desc: "Wish-fulfilling Goddess Bhagwati shrine accessed via cable car over Trishuli River" 
              },
              { 
                title: "Janaki Mandir (Janakpur)", 
                desc: "Birthplace of Goddess Sita with magnificent Mughal-Rajput architecture" 
              },
              { 
                title: "Budhanilkantha Temple", 
                desc: "Unique 5th-century Vishnu reclining on cosmic serpent in Kathmandu valley" 
              },
              { 
                title: "Dakshinkali Temple", 
                desc: "Powerful Kali shrine where animal sacrifices are offered every Tuesday/Saturday" 
              }
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                <div className="service-item rounded pt-3 border border-2 border-success">
                  <div className="p-4">
                    <h5 className="text-success">{item.title}</h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vedic Rituals Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-success px-3">Sacred Services</h6>
            <h1 className="mb-5 text-success">Vedic Rituals & Puja Arrangements</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              "Ganga Aarti Participation in Haridwar/Varanasi",
              "Pind Daan Rituals in Gaya/Varanasi",
              "Rudrabhishek at Kedarnath/Pashupatinath",
              "Vedic Astrology Consultations",
              "Pitru Tarpan Rituals for Ancestors",
              "Maha Shivaratri Special Pujas",
              "Kumbh Mela Guided Experiences",
              "Temple Prasadam Courier Services"
            ].map((service, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" key={index}>
                <div className="service-item rounded p-4 text-center shadow border border-1 border-success">
                  <div className="icon-square bg-success text-white rounded-circle mx-auto mb-3">
                    <i className="fas fa-om"></i>
                  </div>
                  <h6 className="mb-0 text-success">{service}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container-fluid bg-success text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Begin Your Spiritual Journey</h2>
          <p className="lead mb-4">Customized Pilgrimage Packages with Vedic Experts Guidance</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/contact" className="btn btn-lg btn-light text-success">
              <i className="fas fa-phone-alt me-2"></i>Call Now: +91 90990 81248
            </a>
            <a href="mailto:kedarbabofficialtour@gmail.com" className="btn btn-lg btn-dark">
              <i className="fas fa-envelope me-2"></i>Email for Custom Yatra
            </a>
          </div>
          <p className="mt-4 mb-0">* All packages include temple VIP darshan, priest services, and sanctified accommodation</p>
        </div>
      </div>
    </div>
  )
}

export default Services