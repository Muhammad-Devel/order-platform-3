import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import FeaturedProducts from "./FeaturedProducts";
import AllProducts from "./AllProducts";

const ProductSections = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(products);
      setLoading(false);
    }, 2000);
  }, [products]);

  return (
    <div className="mt-20 py-8">
      <Tab.Group>
        {/* Tab Tugmalari */}
        <Tab.List className="flex space-x-4 border-b-2 border-purple-200 px-4">
          <Tab
            className={({ selected }) =>
              selected
                ? "px-4 py-4 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-4 border-purple-500 focus:outline-none"
                : "px-4 py-4 text-lg font-medium text-gray-500"
            }
          >
            Tavsiyalar
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "px-4 py-4 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-4 border-purple-500 focus:outline-none"
                : "px-4 py-4 text-lg font-medium text-gray-500"
            }
          >
            Mahsulotlar
          </Tab>
        </Tab.List>

        {/* Tab kontentlari */}
        <Tab.Panels className="mt-4 px-4">
          <Tab.Panel>
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-purple-200 border-t-purple-500 h-32 w-32"></div>
                {/* Loaderni Tailwind yordamida animatsiyalash */}
                <style jsx>{`
                  .loader {
                    animation: spin 1s infinite linear;
                  }
                  @keyframes spin {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                `}</style>
              </div>
            ) : (
              <FeaturedProducts products={product[0]} />
            )}
          </Tab.Panel>
          <Tab.Panel>
            <AllProducts products={product[1]} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductSections;
