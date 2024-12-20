import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false); // Parol ko'rinishini boshqarish

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Sarlavha */}
        <h1 className="text-2xl font-bold text-center text-claret mb-6">
          Login
        </h1>

        {/* Kirish formasi */}
        <form>
          {/* Telefon raqam */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Telefon raqam
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+998 (__) ___-__-__"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none"
              pattern="^\+998\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$"
              required
            />
          </div>

          {/* Parol */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parol
            </label>
            <input
              type={passwordVisible ? "text" : "password"} // Ko'rinishni boshqarish
              id="password"
              name="password"
              placeholder="Parolingizni kiriting"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)} // Tugma harakati
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          {/* Kirish tugmasi */}
          <button
            type="submit"
            className="w-full bg-claret text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Kirish
          </button>
        </form>

        {/* Ro'yxatdan o'tish havolasi */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Akkountingiz yo'qmi?{" "}
          <Link
            to="/register"
            className="text-claret font-semibold hover:underline"
          >
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
