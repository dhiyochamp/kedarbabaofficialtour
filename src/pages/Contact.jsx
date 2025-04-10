import React from 'react'
import { MapPin, Mail, Phone, Send } from 'lucide-react'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Message sent successfully!')
  }

  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number
    window.open('https://wa.me/912345678901', '_blank')
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-blue-600 py-16 mb-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <nav className="flex justify-center">
              <ol className="flex">
                <li className="mr-2">
                  <a href="/" className="text-blue-200 hover:text-white">Home</a>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-blue-200">/</span>
                  <span className="text-white font-medium">Contact</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white px-3 py-1 mb-4">
            <span className="text-blue-600 font-semibold">Contact Us</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Get In Touch With Us</h2>
          <p className="text-gray-600">We're here to help plan your perfect journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Our Information</h3>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center bg-blue-600 rounded-full w-12 h-12 flex-shrink-0">
                <MapPin className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-blue-600 font-medium">Location</h4>
                <p className="text-gray-700">G.C Chamber, Shop No-27 Plot No.66</p>
                <p className="text-gray-700">Opposite Noori Masjid</p>
                <p className="text-gray-700">Gandhidham-370201</p>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center bg-blue-600 rounded-full w-12 h-12 flex-shrink-0">
                <Phone className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-blue-600 font-medium">Phone</h4>
                <p className="text-gray-700"> +91 90990 81248</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-blue-600 rounded-full w-12 h-12 flex-shrink-0">
                <Mail className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-blue-600 font-medium">Email</h4>
                <p className="text-gray-700">info@kedarbabaofficialtours.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
                
                <button 
                  type="button" 
                  onClick={openWhatsApp}
                  className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-1">
            <iframe
              className="w-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7509444539004!2d70.12788071539352!3d23.219546884855716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b72c50c4adf9%3A0x8e8c592a6ad59ed6!2sNoori%20Masjid!5e0!3m2!1sen!2sin!4v1712789923175!5m2!1sen!2sin"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
