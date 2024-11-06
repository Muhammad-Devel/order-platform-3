import React from "react";

const FeaturedProducts = ({ products }) => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-700">{product.description}</p>
                <p className="mt-4 text-lg font-bold">
                  {product.price}
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
                      {product.discount}% Off
                    </span>
                  )}
                </p>
                <div className="flex items-center">
                  {[...Array(Math.floor(product.rating))].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.5 4.6a1 1 0 00.95.69h4.818c.969 0 1.371 1.24.588 1.81l-3.899 2.83a1 1 0 00-.364 1.118l1.5 4.6c.3.921-.755 1.688-1.538 1.118L10 15.293l-3.899 2.83c-.783.57-1.838-.197-1.538-1.118l1.5-4.6a1 1 0 00-.364-1.118L1.8 10.027c-.784-.57-.38-1.81.588-1.81h4.818a1 1 0 00.95-.69l1.5-4.6z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>

                {/* Buy Now or View Details Button */}
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
