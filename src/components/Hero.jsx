import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-claret-400 to-claret-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 md:py-24 lg:py-32 xl:py-48 text-center lg:text-left">
        <div className="lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Sevimli ta'mingizni biz bilan toping!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
            Biz eng yangi va mazali shirinliklarni tayyorlaymiz. Bizning
            maqsadimiz - sizning quvonchli kuningizni yanada shirin qilish.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-6 sm:space-y-0 space-y-4 justify-center lg:justify-start">
            <a
              href="#order"
              className="px-6 py-3 bg-transparent text-claret-900 font-semibold rounded-md shadow-lg hover:text-claret-700 focus:outline-none focus:ring-2 focus:ring-claret-300"
            >
              Buyurtma bering <FaShoppingCart className="inline" />
            </a>
            <a
              href="#products"
              className=" px-6 py-3 bg-transparent text-claret-900 border-white font-semibold rounded-md shadow-lg hover:bg-white hover:text-claret-700 focus:outline-none focus:ring-2 focus:ring-claret-300"
            >
              Mahsulotlarni ko'rish <FaBox className="inline" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-full max-w-md">
          <img
            className="object-cover h-full w-full rounded-lg"
            src="./images/hero-image.jpg"
            alt="Tort rasm"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
