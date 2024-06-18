import React from 'react';
import { useNavigate } from 'react-router';
const WelcomeSection    =() => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services/services');
  };





  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold  sm:text-4xl text-blue-700">
            Welcome to HopeTech: Where Innovation Meets Excellence!
          </h2>
          <p className="mt-4 text-lg text-gray-900">
            Your digital journey begins here. In today’s digital era, your website is more than just a virtual storefront; it’s your brand's ambassador and a powerful sales tool. At HopeTech, we're dedicated to crafting websites and applications that not only impress visually but also excel in performance.
          </p>
          <p className="mt-4 text-lg text-gray-900">
            Our experienced team of developers, designers, and digital strategists is committed to turning your ideas into reality. Whether you seek a fresh website, a redesign, or bespoke software solutions, we’re here to ensure your online success.
          </p>
          <div className="mt-8">
            {/* Trust badges */}
            <div className="flex justify-center items-center space-x-4">
              <div>
                <span className="text-3xl font-semibold text-gray-900">100+</span>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div>
                <span className="text-3xl font-semibold text-gray-900">10+</span>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              {/* Add more trust badges as needed */}
            </div>
            {/* Call to action */}
            <div className="mt-12">
              <button   onClick={handleClick} className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-100">
                Get Started Today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
