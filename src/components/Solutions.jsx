import React from 'react';
import { useNavigate } from 'react-router-dom';
const Solutions = () => {
 const navigate = useNavigate();
 const handleClick = () => {
  navigate('/services/services');
};


  return (
    <div className="rounded-2xl pt-20 container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">At HopeTech, we offer a comprehensive suite of services to propel your business forward:</h1>
      <div className=" flex flex-wrap justify-center ">
        {/* Services Sections */}
        <div className='w-1/4 p-4 bg-white m-4 rounded-lg'>
          <h2 className="text-2xl font-semibold text-blue-800">Website Design & Development</h2>
          <p className="text-lg text-gray-700">
            Craft visually stunning and highly functional websites tailored to your brand and objectives, utilizing the latest technologies for responsiveness, speed, and security.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">Responsive Design</h2>
          <p className="text-lg text-gray-700">
            Ensure your website delivers an optimal user experience across all devices, enhancing engagement and retention.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">E-commerce Solutions</h2>
          <p className="text-lg text-gray-700">
            Drive sales and growth with custom-built online stores that are secure, scalable, and easy to manage.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">Custom Web Applications</h2>
          <p className="text-lg text-gray-700">
            Tailor-made solutions to meet your unique requirements, from business applications to content management systems.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">UI/UX Design</h2>
          <p className="text-lg text-gray-700">
            Delight users and boost engagement with intuitive and captivating interfaces designed through user-centric methodologies.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">Website Maintenance</h2>
          <p className="text-lg text-gray-700">
            Keep your site updated, secure, and performing at its best with our flexible maintenance plans.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">SEO Services</h2>
          <p className="text-lg text-gray-700">
            Improve your online visibility and attract more leads with comprehensive SEO strategies, including keyword research and on-page optimization.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">Content Creation</h2>
          <p className="text-lg text-gray-700">
            Elevate your brand with high-quality, engaging content across various channels, from website copy to social media.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">PPC Advertising</h2>
          <p className="text-lg text-gray-700">
            Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button onClick={handleClick} className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Explore Our Services</button>
      </div>
    </div>
  );
};

export default Solutions;
