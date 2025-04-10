import React, { useState } from 'react'
import { MapPin, Mail, Phone, Send, Star, Calendar, Compass, Plane } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    setFormSubmitted(true)
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number
    window.open('https://wa.me/919099081248', '_blank')
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Header with Travel Theme */}
      <div className="relative bg-blue-700 py-20">
        {/* Abstract Travel Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-10 left-10 text-white">
            <Plane className="w-16 h-16" />
          </div>
          <div className="absolute bottom-10 right-10 text-white">
            <Compass className="w-20 h-20" />
          </div>
          <div className="absolute top-20 right-20 text-white">
            <Calendar className="w-12 h-12" />
          </div>
          <div className="absolute bottom-20 left-40 text-white">
            <Star className="w-8 h-8" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Connect With Us
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Whether you're planning a dream vacation or need assistance with your travel plans, 
              we're here to make your journey extraordinary.
            </p>
            <nav className="flex justify-center">
              <ol className="flex items-center bg-blue-800/30 px-6 py-2 rounded-full">
                <li className="mr-2">
                  <a href="/" className="text-blue-200 hover:text-white transition-colors">Home</a>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-blue-200">•</span>
                  <span className="text-white font-medium">Contact</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-blue-50 block">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Your Journey Begins With A Conversation</h2>
          <p className="text-gray-600">
            Our travel experts are ready to craft the perfect adventure tailored to your desires.
            Let's start planning your dream getaway today.
          </p>
        </div>

        {/* Contact Info Cards and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column with Contact Cards */}
          <div className="space-y-6">
            {/* Office Location Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600 transform transition-transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center bg-blue-100 rounded-full w-12 h-12 flex-shrink-0">
                  <MapPin className="text-blue-600" />
                </div>
                <h3 className="ml-4 text-lg font-semibold text-gray-800">Visit Us</h3>
              </div>
              <div className="ml-16">
                <p className="text-gray-700 font-medium">G.C Chamber, Shop No-27</p>
                <p className="text-gray-700">Plot No.66, Opposite Noori Masjid</p>
                <p className="text-gray-700">Gandhidham-370201, Gujarat</p>
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 transform transition-transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center bg-green-100 rounded-full w-12 h-12 flex-shrink-0">
                  <Phone className="text-green-600" />
                </div>
                <h3 className="ml-4 text-lg font-semibold text-gray-800">Call Us</h3>
              </div>
              <div className="ml-16">
                <p className="text-gray-700 font-medium">Booking & Inquiries</p>
                <p className="text-gray-700"> +919099081248</p>
                <p className="text-gray-500 text-sm mt-2">Mon-Sat: 9AM - 7PM</p>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500 transform transition-transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center bg-purple-100 rounded-full w-12 h-12 flex-shrink-0">
                  <Mail className="text-purple-600" />
                </div>
                <h3 className="ml-4 text-lg font-semibold text-gray-800">Email Us</h3>
              </div>
              <div className="ml-16">
                <p className="text-gray-700 font-medium">Customer Support</p>
                <p className="text-gray-700">kedarbabofficialtour@gmail.com</p>
                <p className="text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <button 
              onClick={openWhatsApp}
              className="w-full bg-green-500 text-white py-4 px-6 rounded-xl shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center group"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-medium text-lg">Chat on WhatsApp</span>
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
          </div>

          {/* Right Column with Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              {/* Form Success Message */}
              {formSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10">
                  <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                </div>
              )}
              
              {/* Form Background Elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
              
              <div className="relative z-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                      placeholder="Tell us about your travel plans or questions..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    <span className="font-medium text-lg">Send Message</span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm mt-4">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 overflow-hidden">
            <div className="rounded-lg overflow-hidden">
              <iframe
                className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7509444539004!2d70.12788071539352!3d23.219546884855716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b72c50c4adf9%3A0x8e8c592a6ad59ed6!2sNoori%20Masjid!5e0!3m2!1sen!2sin!4v1712789923175!5m2!1sen!2sin"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Travel Benefits Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Our Travel Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're dedicated to creating memorable travel experiences tailored to your preferences.
              Our expert team ensures every journey is exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-blue-500 transform transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">Expert Guidance</h3>
              <p className="text-gray-600 text-center">
                Our experienced travel consultants craft personalized itineraries to match your travel style.
              </p>
            </div>
            
            {/* Benefit Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-green-500 transform transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Compass className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">Unique Destinations</h3>
              <p className="text-gray-600 text-center">
                Discover hidden gems and exclusive experiences that go beyond typical tourist spots.
              </p>
            </div>
            
            {/* Benefit Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-purple-500 transform transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Calendar className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-center">
                Travel with confidence knowing our dedicated team is always available to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pre-Footer CTA */}
      <div className="bg-blue-600 py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 max-w-3xl mx-auto mb-8">
            Contact us today and let our expert travel consultants create the perfect itinerary for your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-white text-blue-600 py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </button>
            <a 
              href="tel: +919099081248" 
              className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
