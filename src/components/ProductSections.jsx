import React, { useState } from "react";

const ProductSections = () => {
  const [activeTab, setActiveTab] = useState("tavsiyalar");

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tablar */}
      <div className="flex justify-start space-x-4 border-b border-purple-300">
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "tavsiyalar"
              ? "border-b-2 border-purple-500 text-black"
              : "text-gray-500"
          }`}
          onClick={() => {
            console.log("Tavsiyalar tugmasi bosildi"); // Konsolda chiqadi
            setActiveTab("tavsiyalar");
          }}
        >
          Tavsiyalar
        </button>
        <button
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "mahsulotlar"
              ? "border-b-2 border-purple-500 text-black"
              : "text-gray-500"
          }`}
          onClick={() => {
            console.log("Mahsulotlar tugmasi bosildi"); // Konsolda chiqadi
            setActiveTab("mahsulotlar");
          }}
        >
          Mahsulotlar
        </button>
      </div>

      {/* Kontent qismi */}
      <div className="mt-4">
        {activeTab === "tavsiyalar" && <p>Tavsiyalar mazmuni...</p>}
        {activeTab === "mahsulotlar" && <p>Mahsulotlar mazmuni...</p>}
      </div>
    </div>
  );
};

export default ProductSections;
