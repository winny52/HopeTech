import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import WelcomeSection from './WelcomeSection';
import WhyChooseUs from './WhyChooseUs';
import AboutSection from './AboutSection';
import Solutions from './Solutions';
import ProcessPage from './OurProcess';
import MiniFAQ from './FAQHERO';
import Testimonials from './Testimonials';
import ECommerceImage from '../assets/ecommerce solutions.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services/services');
  };

  const handleClickSecond = () => {
    navigate('/contact');
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlCOVXdzk1grY1xCdnXRXkBbLqHZxHSpAWQ&s",
    "https://p7.hiclipart.com/preview/994/313/176/web-development-responsive-web-design-professional-web-design-web-design.jpg",
    ECommerceImage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateImageIndex, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const divStyle = {
    backgroundImage: `linear-gradient(rgba(70, 70, 70, 0.5), rgba(70, 70, 70, 0.5)),url('${images[currentImageIndex]}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "135vh",
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center md:min-w-screen" style={divStyle}>
        <div className="container w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Transform Your Digital Presence with HopeTech
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-white font-semibold">
            Cutting-Edge Web Design & Development Solutions Tailored to Your Needs
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={handleClickSecond} className="cta-button bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 bg-opacity-20 border-2 border-blue-500">
              Get a Free Quote
            </button>
            <button onClick={handleClick} className="cta-button bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 bg-opacity-20 border-2 border-blue-500">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
      <WelcomeSection />
      <AboutSection/>
      <Solutions/>
      <WhyChooseUs />
      <ProcessPage/>
      <MiniFAQ/>
      <Testimonials/>

    </div>
  );
};

export default HeroSection;
