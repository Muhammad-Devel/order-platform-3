import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
          About Us
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto">
          We are passionate about creating the best cakes for your special
          moments. Our team is dedicated to delivering high-quality products,
          customized to your needs. With years of experience in the baking
          industry, we ensure that each order is handled with care and attention
          to detail.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-500">10+</div>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-500">100+</div>
          <p className="text-gray-600">Cakes Delivered</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-500">50+</div>
          <p className="text-gray-600">Happy Customers</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-700 mb-4">
          Ready to taste the best cakes in town?
        </p>
        <a
          href="/shop"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
