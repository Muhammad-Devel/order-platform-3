import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center text-xl text-gray-600 mt-8 p-4">
      <div className="px-4">Muvaffaqiyatli ro'yhatdan o'tdingiz!!!</div>
      <Link to="/" className="text-blue-600 underline">
        Mahsulotlarni ko'rish
      </Link>
    </div>
  );
};

export default SuccessPage;
