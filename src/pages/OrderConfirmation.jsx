import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }} // Animatsiya boshlanishi
    animate={{ opacity: 1, scale: 1 }}  // Animatsiya tugashi
    exit={{ opacity: 0, scale: 0.8 }}   // Sahifa yopilgandagi animatsiya
    transition={{ duration: 0.9, ease: "easeInOut" }} // Davomiylik va o'tish
    className="p-6 max-w-lg mx-auto my-12 bg-white shadow-md rounded-lg text-center"
  >
      <div className="mb-6">
        <div className="text-green-500 text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-claret mb-2">Buyurtma Tasdiqlandi!</h1>
        <p className="text-gray-600">
          Sizning buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanamiz!
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Buyurtma Tafsilotlari:</h2>
        <p className="text-gray-600">Buyurtma raqami: <span className="font-bold">#12345</span></p>
        <p className="text-gray-600">Yetkazib berish vaqti: <span className="font-bold">24 soat ichida</span></p>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate("/")}
          className="bg-claret text-white py-2 px-4 rounded hover:bg-claret-700"
        >
          Asosiy Sahifaga Qaytish
        </button>
        <button
          onClick={() => navigate("/buyurtmalar")}
          className="bg-jasmine text-white py-2 px-4 rounded hover:bg-jasmine-700"
        >
          Buyurtmalar Tarixini Ko'rish
        </button>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;
