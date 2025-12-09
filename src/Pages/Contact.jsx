import React from 'react';

const Contact = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center " 
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2023/06/03/12/52/lantana-8037634_1280.jpg')",
      }}
    >
      <div className="min-h-screen flex justify-center items-center px-6 py-12 opacity-100
                      bg-black/10"> 
        {/* very light overlay to read text */}
        
        {/* Contact Form Card */}
        <div className="max-w-2xl w-full bg-white/50 backdrop-blur-md shadow-xl 
                        rounded-2xl p-10">
          <h1 className="text-3xl font-bold text-center text-pink-800">
            🌸 Contact Page
          </h1>

          <h2 className="text-md text-center text-pink-700 mt-1">
            🌼 Get in Touch With Us
          </h2>

          <p className="text-center mt-6 text-gray-700">
            We’d love to bring your floral vision to life. Whether you want a customized bouquet, event florals, or just have a question — our garden is always open for you.
          </p>

          {/* --- Contact Sections --- */}
          <div className="mt-10 space-y-6">

            {/* Call */}
            <div>
              <h3 className="text-lg font-semibold text-pink-600">📞 Call Us</h3>
              <p className="text-gray-700">+91 98765 43210</p>
              <p className="text-gray-500 text-sm">(Available 9 AM – 8 PM IST)</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold text-pink-600">📧 Email</h3>
              <p className="text-gray-700">hello@secretgardenflorals.com</p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-pink-600">📍 Visit Our Store</h3>
              <p className="text-gray-700">
                Secret Garden Florals <br />
                Meadows Lane, Coimbatore, Tamil Nadu
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-semibold text-pink-600">🕒 Working Hours</h3>
              <p className="text-gray-700">
                Mon – Sat: 9:00 AM – 8:00 PM <br />
                Sunday: 10:00 AM – 6:00 PM
              </p>
            </div>

            {/* Message */}
            <div>
              <h3 className="text-lg font-semibold text-pink-600">💬 Send Us a Message</h3>
              <p className="text-gray-700">
                We’re just a click away! Share your mood, your color preference, your occasion — 
                and we’ll craft the perfect bloom for you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
