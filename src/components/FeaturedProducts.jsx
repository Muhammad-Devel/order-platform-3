import React from "react";

import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products }) => {
  return (
    <section className="py-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3">
          Tavsiya qilamiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-6 md:gap-6 lg:gap-6">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
