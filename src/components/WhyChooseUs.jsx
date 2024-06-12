import React from 'react';
import { useNavigate } from 'react-router';

function WhyChooseUs() {
  const navigateto = useNavigate();

  const handleClicksecond = () => {
    navigateto('/contact');
  };



  return (
    <div className=" text-blue-900 rounded-2xl pt-20">
      <div className="container flex flex-col  mx-auto py-12">
        <div className='m-10 flex  items-center'>
          <section>
            <h2 className="text-4xl text-blue-700 font-semibold mb-8">Why Choose HopeTech?</h2>
            <p className=" w-3/4 text-gray-900 text-xl">Choosing the right partner for your web design and development needs is crucial to the success of your project. At HopeTech, we understand that you have many options, and we strive to stand out from the competition by offering unparalleled service, expertise, and results.</p>
          </section>
          <img src='https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_09_5-Best-Programming-Languages-to-Learn-for-Cybersecurity-Professionals-scaled.jpg' alt='' className='rounded-full w-72 h-72' />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Expert Team */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className='text-gray-900'> Our skilled professionals bring a wealth of experience and expertise to every project, ensuring exceptional results.
</p>
          </div>

          {/* Custom Solutions */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <p className='text-gray-900 '>We believe in tailored solutions that address your unique business needs and goals, delivering exactly what you need.
</p>
          </div>

          {/* Proven Track Record */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
            <p   className='text-gray-900 '>With a history of successful projects, we consistently exceed client expectations, delivering high-quality solutions on time and within budget.
</p>
          </div>

          {/* Client-Centric Approach */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Client-Centric Approach</h3>
            <p  className='text-gray-900 '  >Your satisfaction is our priority. We work closely with you throughout the process to ensure your needs and expectations are met.
</p>
          </div>

          {/* Innovative Techniques */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Innovative Techniques</h3>
            <p className='text-gray-900 '    >We stay ahead of the curve with the latest technologies and techniques, delivering visually stunning and technically advanced solutions.
</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button  onClick={handleClicksecond}  className="bg-blue-500 text-white  hover:bg-gray-800 text-black font-semibold py-2 px-4 rounded">Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
