import React, { useState } from "react";
import { Button } from "@headlessui/react";

const ProductSections = () => {
  // Holat yaratish: "featured" yoki "products" tanlanganini saqlaydi
  const [activeTab, setActiveTab] = useState("featured");

  const handleSubmit=(e)=>{
  
    console.log("Tugma ishladi")
  }

  return (
    <div className="py-8">
      {/* Bo'limlar sarlavhasi */}
      <div className="flex justify-start items-center w-full border-b-2 border-purple-200 px-8 space-x-4">
        <Button className="px-4 py-4 text-bold text-lg font-medium active:border-b-4 active:border-purple-500 rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700" onSubmit={handleSubmit}>Tavsilotlar</Button>
        <button className="px-4 py-4">Mahsulotlar</button>
      </div>
    </div>
  );
};

export default ProductSections;
