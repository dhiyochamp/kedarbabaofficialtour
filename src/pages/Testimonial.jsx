import React from 'react'

function Testimonial() {
  const testimonials = [
    { name: 'Amit Sharma', location: 'Delhi, India', image: 'testimonial-1.jpg', review: 'The Kedarnath tour was well-organized and truly divine. Highly recommended!' },
    { name: 'Priya Verma', location: 'Mumbai, India', image: 'testimonial-2.jpg', review: 'I had an amazing experience with the yatra package. Everything was seamless!' },
    { name: 'Rahul Singh', location: 'Lucknow, India', image: 'testimonial-3.jpg', review: 'Great hospitality and excellent service. Will book again!' },
    { name: 'Sneha Kapoor', location: 'Jaipur, India', image: 'testimonial-4.jpg', review: 'A divine and comfortable pilgrimage. Perfectly arranged.' },
    { name: 'Vikram Raj', location: 'Chennai, India', image: 'testimonial-5.jpg', review: 'Everything was top-notch. A memorable experience indeed!' },
    { name: 'Neha Gupta', location: 'Pune, India', image: 'testimonial-6.jpg', review: 'Very professional and well-managed trip. Loved it!' },
    { name: 'Arjun Yadav', location: 'Hyderabad, India', image: 'testimonial-7.jpg', review: 'Amazing spiritual journey. Thank you for the great service!' },
    { name: 'Divya Mehta', location: 'Bangalore, India', image: 'testimonial-8.jpg', review: 'Kedarnath Yatra was divine and hassle-free. Great arrangements!' },
    { name: 'Manoj Tiwari', location: 'Varanasi, India', image: 'testimonial-9.jpg', review: 'Highly satisfied with the tour. Looking forward to another one.' },
    { name: 'Ritu Sharma', location: 'Ahmedabad, India', image: 'testimonial-10.jpg', review: 'Had an unforgettable journey with the best facilities.' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Testimonials</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Testimonials</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">Testimonials</h6>
            <h1 className="mb-5">What Our Clients Say</h1>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="testimonial-item bg-white text-center border p-4">
                  <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src={`/assets/img/${testimonial.image}`} alt={testimonial.name} style={{ width: 80, height: 80 }} />
                  <h5 className="mb-0">{testimonial.name}</h5>
                  <p>{testimonial.location}</p>
                  <p className="mt-2 mb-0">"{testimonial.review}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
