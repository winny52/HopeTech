import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detailedprocess');
  };

  return (
    <div className="text-blue-900 py-16 pt-20 rounded-2xl">
      <div className="container mx-auto p-4 bg-gray-200 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-8">Our Process: A Seamless Journey from Concept to Launch</h2>
        <div className=" flex flex-wrap justify-center">
          <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800">Step 1: Discovery: Understanding Your Goals and Requirements</h3>
            <p className="text-lg text-gray-700">
              We kickstart by understanding your business objectives, audience, and needs through consultations and research.
            </p>
          </div>
          <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800">Step 2: Planning: Crafting a Detailed Project Roadmap</h3>
            <p className="text-lg text-gray-700">
              We develop a comprehensive plan outlining the scope, timeline, and milestones, ensuring every aspect is meticulously organized.
            </p>
          </div>
          <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800">Step 3: Design: Creating a User-Friendly and Appealing Design</h3>
            <p className="text-lg text-gray-700">
              Your vision comes to life as we work closely to design interfaces that are both visually appealing and user-centric.
            </p>
          </div>
          <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800">Step 4: Development: Building a Robust and Scalable Website</h3>
            <p className="text-lg text-gray-700">
              Our expert developers utilize cutting-edge technologies to build a reliable and scalable solution tailored to your requirements.
            </p>
          </div>
          <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800">Step 5: Testing: Ensuring Functionality and Performance</h3>
            <p className="text-lg text-gray-700">
              Rigorous testing ensures your website or application functions flawlessly, meeting high standards in functionality, security, and performance.
            </p>
          </div>
          <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800">Step 6: Launch: Deploying Your Site Live</h3>
            <p className="text-lg text-gray-700">
              We seamlessly deploy your website or application, providing training and support to ensure a smooth transition.
            </p>
          </div>
          <div className="w-1/4 p-4 bg-white m-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800">Step 7: Maintenance: Ongoing Support and Updates</h3>
            <p className="text-lg text-gray-700">
              Beyond launch, we offer continuous maintenance and support, ensuring your digital asset remains optimized and secure.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center mb-8">
          <button onClick={handleClick} className="col-span-full px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Learn More About Our Process</button>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
