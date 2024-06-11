import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-white p-5 pb- px-8 text-blue-900 rounded-b-2xl text-lg border-b-2  border-blue-100">
      <div className="container mx-aut0 flex justify-betwee gap-96 items-center">
        <span className=" font-semibold text-lg">Logo</span>
        <button className=" text-xl md:hidden" onClick={toggleNavbar}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`md:flex md:items-center space-7  ${isOpen ? 'block' : 'hidden'}`}>
          <li className=" ">
            <Link to="/" className=" hover:text-blue-400 mx-4 rounded p-8">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className=" hover:text-blue-400 mx-4 rounded pb-8 cursor-pointer">
              About Us
            </span>
            <ul className="absolute left-0 mt-1 hidden w-48 bg-white mt-6 rounded-b-2xl group-hover:block">
              <li>
                <Link to="/about" className="block  hover:text-blue-400 mx-4 rounded ">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/why-choose-us" className="block  hover:text-blue-400 mx-4 rounded ">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className=" hover:text-blue-400 mx-4 rounded p-8 cursor-pointer">
              Our Services
            </span>
            <ul className="absolute left-0  hidden w-48 mt-6 bg-white rounded-b-2xl group-hover:block">
              <li>
                <Link to="/services/solutions" className="block hover:text-blue-400 mx-4 rounded ">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/services" className="block  hover:text-blue-400 mx-4 rounded ">
                  Services
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className=" hover:text-blue-400 mx-4 p-8  rounded cursor-pointer">
              Portfolio
            </span>
            <ul className="absolute left-0 mt-6 bg-white rounded-b-2xl hidden w-48  group-hover:block">
              <li>
                <Link to="/portfolio/testimonials" className="block  hover:text-blue-400 mx-4 rounded ">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/portfolio/our-work" className="block  hover:text-blue-400 mx-4 rounded ">
                  Our Work
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className=" hover:text-blue-400 mx-4 rounded ">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
