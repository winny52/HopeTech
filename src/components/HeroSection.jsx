import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full">
        <div className="container w-full">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Transform Your Digital Presence with HopeTech</h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-300">Cutting-Edge Web Design & Development Solutions Tailored to Your Needs</h2>
          <div className="mt-10 flex justify-center sm:justify-start space-x-4">
            <button className="cta-button bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Get a Free Quote</button>
            <button className="cta-button bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">Explore Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
