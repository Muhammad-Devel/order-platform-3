import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, name, imageUrl, description, price, discount, rating } = product;
  return (
    <div
      key={id}
      className="bg-white p-0 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 sm:h-36 md:h-36 lg:h-36 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-purple-500">{name}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
        <div>
          <p className="flex justify-between items-center mt-4 text-lg font-bold text-purple-500">
            {price}
            {discount && (
              <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
                {discount}% Off
              </span>
            )}

            <div className="flex items-center">
              {[...Array(Math.floor(rating))].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.5 4.6a1 1 0 00.95.69h4.818c.969 0 1.371 1.24.588 1.81l-3.899 2.83a1 1 0 00-.364 1.118l1.5 4.6c.3.921-.755 1.688-1.538 1.118L10 15.293l-3.899 2.83c-.783.57-1.838-.197-1.538-1.118l1.5-4.6a1 1 0 00-.364-1.118L1.8 10.027c-.784-.57-.38-1.81.588-1.81h4.818a1 1 0 00.95-.69l1.5-4.6z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">{rating}</span>
            </div>
          </p>
        </div>

        {/* Buy Now or View Details Button */}
        <div className="mt-2 flex space-x-2">
          {/* "Buy Now" tugmasi */}
          <button
            onClick={() => buyNow(product)}
            className="w-1/2 bg-purple-500 text-xs text-white py-1 px-4 rounded-md hover:bg-purple-600"
          >
            Buyurtma berish
          </button>
          {/* "Add to Cart" tugmasi */}
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-end w-1/2 text-purple-500 text-3xl py-1 px-4 rounded-md hover:text-purple-600"
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
