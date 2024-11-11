import React, { useState } from "react";
import { Button } from "@headlessui/react";

const ProductSections = () => {
  // Holat yaratish: "featured" yoki "products" tanlanganini saqlaydi
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="py-8">
      {/* Bo'limlar sarlavhasi */}
      <div className="flex justify-start items-center w-full border-b-2 border-purple-200 px-4 space-x-4">
        <button
          className="px-4 py-4 text-bold text-lg font-medium active:border-b-4 active:border-purple-500"
          onSubmit={alert("yo")}
        >
          Tavsiyalar
        </button>
        <button className="px-4 py-4">Mahsulotlar</button>
      </div>
    </div>
  );
};

export default ProductSections;
