import React, { useState } from "react";
import ProductsBtn from "./ProductsBtn";

const ProductSections = () => {
  // Holat yaratish: "featured" yoki "products" tanlanganini saqlaydi
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="py-8">
      {/* Bo'limlar sarlavhasi */}
      <div className="flex justify-start items-center w-full border-b-2 border-purple-200 px-4 space-x-4">
        <ProductsBtn
          className={`px-4 py-4 text-bold text-lg font-medium ${
            activeTab === "featured" ? "border-b-4 border-purple-500" : ""
          }`}
          onClick={() => setActiveTab("featured")}
        >
          Tavsiyalar
        </ProductsBtn>
        <ProductsBtn
          className={`px-4 py-4 ${
            activeTab === "products" ? "border-b-4 border-purple-500" : ""
          }`}
          onClick={() => setActiveTab("products")}
        >
          Mahsulotlar
        </ProductsBtn>
      </div>

      {/* Faol bo'lim ko'rsatiladi */}
      <div className="mt-4 px-4">
        {activeTab === "featured" ? (
          <p>Tavsiyalarni ko'rsatish</p>
        ) : (
          <p>Mahsulotlar ro'yhati</p>
        )}
      </div>
    </div>
  );
};

export default ProductSections;
