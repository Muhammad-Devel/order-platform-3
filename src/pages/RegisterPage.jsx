import React from "react";

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Sarlavha */}
        <h1 className="text-2xl font-bold text-center text-claret mb-6">
          Ro'yxatdan o'tish
        </h1>

        {/* Ro'yxatdan o'tish formasi */}
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parol
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Parolingizni kiriting"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none"
              required
            />
          </div>

          {/* Parolni tasdiqlash */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parolni tasdiqlash
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Parolingizni qayta kiriting"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none"
              required
            />
          </div>

          {/* Ro'yxatdan o'tish tugmasi */}
          <button
            type="submit"
            className="w-full bg-claret text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Ro'yxatdan o'tish
          </button>
        </form>

        {/* Login havolasi */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Akkauntingiz bormi?{" "}
          <a href="/login" className="text-claret font-semibold hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
