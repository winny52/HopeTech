import React from 'react';

function AboutPage() {
  return (
    <div className="about-page bg-gray-900 text-white p-6 flex justify-center items-center h-screen">
      <div className="container text-center">
        <h2 className='text-3xl font-semibold mb-8'>About HopeTech</h2>
        <p className='mb-8'>HopeTech is a leading web design and development agency committed to bringing your digital vision to life. With 10+ years of experience, our team of experts specializes in creating responsive, user-friendly, and visually captivating websites that drive results.</p>
        
        <div className="story-section mb-8">
          <h3 className='text-xl font-semibold'>Discover Our Story</h3>
          <p>
            Founded in 2012, HopeTech started as a small team of passionate developers and designers who wanted to make a difference in the digital world. Over the years, we have grown into a full-service digital agency with a diverse team of experts. Our journey has been fueled by our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div> 

        <div className="grid grid-cols-3 gap-8">
          {/* Mission Section */}
          <div className="mission-section bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>
              Our mission is to empower businesses through innovative web solutions. We believe in the power of technology to transform businesses and improve lives. By leveraging the latest technologies and industry best practices, we aim to deliver solutions that not only meet but exceed our clients’ expectations.
            </p>
          </div>

          {/* Vision Section */}
          <div className="vision-section bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p>
              Our vision is to be the go-to partner for all your digital needs. We aspire to be recognized as a leader in web design and development, known for our creativity, technical expertise, and commitment to excellence.
            </p>
          </div>

          {/* Values Section */}
          <div className="values-section bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
            <h3 className="text-xl font-semibold">Our Values</h3>
            <ul>
              <li className="flex"><h4>Quality</h4>: We are committed to delivering the highest quality in everything we do.</li>
              <li className="flex"><h4>Innovation</h4>: We constantly seek new and better ways to serve our clients.</li>
              <li className="flex"><h4>Customer Satisfaction</h4>: Our clients’ success is our success.</li>
            </ul>
          </div>
        </div>

        <div className="team-section mb-8">
          <h3 className="text-xl font-semibold">Meet the Team</h3>
          <p>Our team is our greatest asset. We are a group of talented and dedicated professionals with a shared passion for technology and design. From our project managers and developers to our designers and support staff, everyone at HopeTech is committed to providing the best possible service to our clients.</p>
          {/* Add team photos and office environment visuals here */}
        </div>

        <div className="cta-section">
          <button className="explore-services-btn">Explore Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
