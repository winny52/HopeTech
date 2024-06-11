import React from 'react';

function AboutPage() {
  return (
    <div className="about-page bg-gray-900 text-white p-6">
      <div className="container">
        <h2 className='text-3xl font-semibold mb-8'>About HopeTech</h2>
        <p className='mb-8'>HopeTech is a leading web design and development agency committed to bringing your digital vision to life. With 10+ years of experience, our team of experts specializes in creating responsive, user-friendly, and visually captivating websites that drive results.</p>
        
        <div className="story-section">
          <h3 className='text-xl font-semibold'>Discover Our Story</h3>
          <p>
            Founded in 2012, HopeTech started as a small team of passionate developers and designers who wanted to make a difference in the digital world. Over the years, we have grown into a full-service digital agency with a diverse team of experts. Our journey has been fueled by our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div> 

        <div className="mission-section">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p>
            Our mission is to empower businesses through innovative web solutions. We believe in the power of technology to transform businesses and improve lives. By leveraging the latest technologies and industry best practices, we aim to deliver solutions that not only meet but exceed our clients’ expectations.
          </p>
        </div>

        <div className="vision-section">
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p>
            Our vision is to be the go-to partner for all your digital needs. We aspire to be recognized as a leader in web design and development, known for our creativity, technical expertise, and commitment to excellence.
          </p>
        </div>

        <div className="values-section">
          <h3 className="text-xl font-semibold">Our Values</h3>
          <ul>
            <li className="flex"><h4>Quality</h4>: We are committed to delivering the highest quality in everything we do.</li>
            <li className="flex"><h4>Innovation</h4>: We constantly seek new and better ways to serve our clients.</li>
            <li className="flex"><h4>Customer Satisfaction</h4>: Our clients’ success is our success.</li>
          </ul>
        </div>

        <div className="team-section">
          <h3 className="text-xl font-semibold">Meet the Team</h3>
          <p>Our team is our greatest asset. We are a group of talented and dedicated professionals with a shared passion for technology and design. From our project managers and developers to our designers and support staff, everyone at HopeTech is committed to providing the best possible service to our clients.</p>
          {/* Add team photos and office environment visuals here */}
        </div>

        <div className="comprehensive-solutions">
          <h3 className="text-xl font-semibold">Comprehensive Digital Solutions to Elevate Your Business</h3>
          <p>At HopeTech, we offer a comprehensive suite of services to propel your business forward:</p>
          <ul>
            <li className="flex"><h4>Website Design & Development</h4>: Craft visually stunning and highly functional websites tailored to your brand and objectives, utilizing the latest technologies for responsiveness, speed, and security.</li>
            <li className="flex"><h4>Responsive Design</h4>: Ensure your website delivers an optimal user experience across all devices, enhancing engagement and retention.</li>
            <li className="flex"><h4>E-commerce Solutions</h4>: Drive sales and growth with custom-built online stores that are secure, scalable, and easy to manage.</li>
            <li className="flex"><h4>Custom Web Applications</h4>: Tailor-made solutions to meet your unique requirements, from business applications to content management systems.</li>
            <li className="flex"><h4>UI/UX Design</h4>: Delight users and boost engagement with intuitive and captivating interfaces designed through user-centric methodologies.</li>
            <li className="flex"><h4>Website Maintenance</h4>: Keep your site updated, secure, and performing at its best with our flexible maintenance plans.</li>
            <li className="flex"><h4>SEO Services</h4>: Improve your online visibility and attract more leads with comprehensive SEO strategies, including keyword research and on-page optimization.</li>
            <li className="flex"><h4>Content Creation</h4>: Elevate your brand with high-quality, engaging content across various channels, from website copy to social media.</li>
            <li className="flex"><h4>PPC Advertising</h4>: Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.</li>
          </ul>
        </div>
        
        <div className="cta-section">
          <button className="explore-services-btn">Explore Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
