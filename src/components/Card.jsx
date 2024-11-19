import React from "react";
import { FaCartPlus } from "react-icons/fa";
import StarRating from "./StarRating";

function Card({ id, title, image, description, rating, price, promoPrice }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-claret-300 text-xl mb-2">{title}</div>
        <p className="text-white-200 text-base mb-4">{description}</p>

        <div className="flex items-center justify-between text-white-300 mb-4">
          <StarRating rating={rating} />
        </div>

        {/* Narx va tugmalar qismi */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col-reverse items-center">
            {promoPrice ? (
              <>
                <span className="text-xl font-bold text-claret-600">
                  ${promoPrice}
                </span>
                <span className="text-sm text-white-200 line-through ml-2">
                  ${price}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-claret-600">
                ${price}
              </span>
            )}
          </div>
          <div className="flex space-x-2">
            <button className="bg-claret-600 text-white text-sm py-2 px-4 rounded hover:bg-claret-700 transition duration-300">
              Buyurtma berish
            </button>
            <button className="bg-white text-claret-600 text-3xl p-2 rounded-full hover:bg-white-400 transition duration-300">
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
