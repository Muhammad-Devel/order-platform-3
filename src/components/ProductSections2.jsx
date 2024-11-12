import { Tab } from "@headlessui/react";
import FeaturedProducts from "./FeaturedProducts";
import AllProducts from "./AllProducts";

const ProductSections = ({products}) => {
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
            <FeaturedProducts products={products}/>
          </Tab.Panel>
          <Tab.Panel>
            <AllProducts products={products}/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductSections;
