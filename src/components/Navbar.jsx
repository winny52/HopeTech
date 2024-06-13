import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed top-0 w-full  bg-white md:p-5 p-2 text-blue-900 rounded-b-2xl text-lg border-b-2 border-blue-100 z-10">
      <div className="container mx-auto flex justify-between items-center  ">
        <span className="font-semibold text-lg">Logo</span>
        <button className="text-xl md:hidden" onClick={toggleNavbar}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`md:flex md:items-center space-x-7 md:flex-row w-1/2 md:w-auto justify-between   md:h-auto md:static ${isOpen ? 'block fixed bg-white top-4 left-0 h-screen' : 'hidden'}`}>
          <li>
            <Link to="/" className="hover:text-blue-400 focus:text-blue-400 rounded pl-8 mb-2">
              Home
            </Link>
          </li>
          <li className="relative group "  tabIndex="0">
            <span className="hover:text-blue-400  rounded pb-8 mt-6 pb-2 cursor-pointer">
              About Us
            </span>
            <ul className="md:absolute left-0 md:mt-1 hidden md:w-48 bg-white md:mt-6 rounded-b-2xl group-hover:block">
              <li>
                <Link to="/about" className="block hover:text-blue-400 focus:text-blue-400 rounded p-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/why-choose-us" className="block hover:text-blue-400 rounded p-2">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="block hover:text-blue-400 rounded p-2">
                  Our Process
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group" tabIndex="0">
            <span className="hover:text-blue-400 rounded pb-8 cursor-pointer">
              Our Services
            </span>
            <ul className="md:absolute left-0 hidden md:w-48 md:mt-6 bg-white rounded-b-2xl group-hover:block">
              
              <li>
                <Link to="/services/services" className="block hover:text-blue-400 rounded p-2">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="block hover:text-blue-400 rounded p-2">
                  Our Expertise
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group" tabIndex="0">
            <span className="hover:text-blue-400 rounded pb-8 cursor-pointer">
              Portfolio
            </span>
            <ul className="md:absolute left-0 md:mt-6 bg-white rounded-b-2xl hidden md:w-48 group-hover:block">
              <li>
                <Link to="/portfolio/testimonials" className="block hover:text-blue-400 rounded p-2">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/portfolio/our-work" className="block hover:text-blue-400 rounded p-2">
                  Our Work
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-blue-400 rounded ">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 rounded ">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
