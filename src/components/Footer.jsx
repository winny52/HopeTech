import React from 'react';
import { Link } from 'react-router-dom';

const Footer =() => {
  return (
    <footer className="bg-gray-900 text-white py-12  w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/services">Website Design & Development</Link></li>
              <li><Link to="/services/services">Responsive Design</Link></li>
              <li><Link to="/services/services">E-commerce Solutions</Link></li>
              <li><Link to="/services/services">Custom Web Applications</Link></li>
              <li><Link to="/services/services">SEO Services</Link></li>
              <li><Link to="/services/services">Content Creation</Link></li>
              <li><Link to="/services/services">UI/UX Design</Link></li>
              <li><Link to="/services/services">Web Maintenance</Link></li>
              <li><Link to="/services/services">PPC Advertising</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about/why-choose-us">Why Choose Us?</Link></li>
              <li><Link to="/about">Who Are We?</Link></li>
              <li><Link to="/portfolio">Portfolio: Sample Projects</Link></li>
              <li><Link to="/portfolio/testimonials">Customer Testimonials</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/process">How It Works: Our Process</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><Link to="/contact">Live Chat</Link></li>
              <li>Email: mgt@hopetech.com</li>
              <li>Phone Number: 0712345678</li>
              <li>Address: Nairobi Kenya</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
