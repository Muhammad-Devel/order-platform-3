import React from "react";

import ProductCard from "./ProductCard";

const AllProducts = ({ products }) => {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-6 md:gap-6 lg:gap-6">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
