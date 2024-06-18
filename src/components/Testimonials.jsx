import React from 'react';

const testimonials = [
  {
    clientName: "Emily Parker",
    company: "Sunflower Technologies",
    testimonial: "HopeTech transformed our outdated website into a modern, user-friendly platform. Their team was professional, responsive, and dedicated to our success. We have seen a significant increase in traffic and conversions since the redesign.",
  },
  {
    clientName: "Jacob Thompson",
    company: "Quantum Solutions",
    testimonial: "We partnered with HopeTech to develop a custom web application for our business. The process was seamless, and the end result exceeded our expectations. Their expertise and attention to detail were evident throughout the project.",
  },
  {
    clientName: "Olivia Green",
    company: "Stellar Innovations",
    testimonial: "HopeTech’s SEO services have been a game-changer for our business. We have seen a dramatic improvement in our search engine rankings and an increase in organic traffic. Their team is knowledgeable, professional, and easy to work with.",
  },
  {
    clientName: "Liam Davis",
    company: "Horizon Enterprises",
    testimonial: "Working with HopeTech was a fantastic experience. Their team was knowledgeable, responsive, and dedicated to our success. They took the time to understand our needs and delivered a solution that exceeded our expectations.",
  },
  {
    clientName: "Isabella Roberts",
    company: "Cascade Dynamics",
    testimonial: "We have been working with HopeTech for several years, and they continue to impress us with their quality of work and level of service. They are always available to answer questions and provide support, and their expertise has been invaluable to our business.",
  },
];

const Testimonials = () => {
  return (
    <div className="text-blue-900 py-16 pt-20 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
        <p className="text-center mb-12 text-xl">Our clients are our biggest advocates, and their success is our greatest reward. We are proud to share some of the feedback we’ve received from our clients. These testimonials highlight our commitment to quality, customer satisfaction, and delivering results.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl m-6"
            >
              <p className="italic mb-4">"{testimonial.testimonial}"</p>
              <p className="font-bold">{testimonial.clientName}</p>
              <p className="text-sm">{testimonial.company}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Unlock Your Success Today</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
