import React, { useState } from "react";
import BreadcrumbHeader from "../components/BreadcrumbHeader";

const allProducts = [
  { id: 1, name: "Chocolate Cake", description: "Rich chocolate cake with dark chocolate glaze.", price: "$20", imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Vanilla Cake", description: "Classic vanilla sponge with buttercream frosting.", price: "$18", imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Red Velvet Cake", description: "Smooth red velvet cake with cream cheese frosting.", price: "$22", imageUrl: "https://via.placeholder.com/150" },
  { id: 4, name: "Strawberry Cake", description: "Fresh strawberry cake with whipped cream.", price: "$25", imageUrl: "https://via.placeholder.com/150" },
  { id: 5, name: "Lemon Tart", description: "Tangy lemon tart with buttery crust.", price: "$15", imageUrl: "https://via.placeholder.com/150" },
  { id: 6, name: "Carrot Cake", description: "Moist carrot cake with cream cheese frosting.", price: "$19", imageUrl: "https://via.placeholder.com/150" },
  { id: 7, name: "Coffee Cake", description: "Delicious coffee-flavored sponge with icing.", price: "$23", imageUrl: "https://via.placeholder.com/150" },
  { id: 8, name: "Cheesecake", description: "Classic New York-style cheesecake.", price: "$30", imageUrl: "https://via.placeholder.com/150" },
  { id: 9, name: "Black Forest", description: "Chocolate cake with cherries and whipped cream.", price: "$28", imageUrl: "https://via.placeholder.com/150" },
];

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6 bg-cosmic_latte-500 min-h-screen">
      <BreadcrumbHeader title={'Mahsulotlar'}/>
      <h1 className="text-3xl font-bold text-claret-700 mb-8 text-center">Our Products</h1>

      {/* Mahsulotlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-claret-300 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-claret-800">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <p className="text-claret-600 font-bold mt-3">{product.price}</p>
              <button className="mt-4 bg-claret-700 text-white px-4 py-2 rounded hover:bg-claret-800 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-l ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 border-t border-b bg-gray-50 text-claret-800">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-r ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
