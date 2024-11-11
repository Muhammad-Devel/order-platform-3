import { Tab } from "@headlessui/react";

const ProductSections = () => {
  return (
    <div className="mt-20 py-8">
      <Tab.Group>
        {/* Tab Tugmalari */}
        <Tab.List className="flex space-x-4 border-b-2 border-purple-200 px-4">
          <Tab
            className={({ selected }) =>
              selected
                ? "px-4 py-4 text-lg font-medium border-b-4 border-purple-500"
                : "px-4 py-4 text-lg font-medium"
            }
          >
            Tavsiyalar
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "px-4 py-4 text-lg font-medium border-b-4 border-purple-500"
                : "px-4 py-4 text-lg font-medium"
            }
          >
            Mahsulotlar
          </Tab>
        </Tab.List>

        {/* Tab kontentlari */}
        <Tab.Panels className="mt-4 px-4">
          <Tab.Panel>
            <p>Tavsiyalarni ko'rsatish</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>Mahsulotlar ro'yhati</p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductSections;
