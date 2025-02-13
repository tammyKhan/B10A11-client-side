import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-12">
      <div className="container mx-auto px-4 py-10">
        
        {/* Footer Content */}
        <div className="footer grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl text-red-700 font-bold">fOOdShare</h2>
            <p>fOOdShare Ltd.<br />Providing quality service since 2024</p>
          </div> 

          {/* Navigation Links */}
          <div>
            <span className="footer-title">Quick Links</span> 
            <a href="/" className="link link-hover">Home</a> 
            <a href="/about" className="link link-hover">About</a> 
            <a href="/services" className="link link-hover">Services</a> 
            <a href="/contact" className="link link-hover">Contact</a>
          </div> 

          {/* Social Media Links */}
          <div>
            <span className="footer-title">Follow Us</span> 
            <div className="grid grid-flow-col gap-4">
              <a href="#"><i className="fab fa-facebook text-2xl"></i></a> 
              <a href="#"><i className="fab fa-twitter text-2xl"></i></a> 
              <a href="#"><i className="fab fa-instagram text-2xl"></i></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} YourBrand. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;





