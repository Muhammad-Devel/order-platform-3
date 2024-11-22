import React, { useState } from "react";

function OTPVerificationPage() {
  const [otp, setOtp] = useState(""); // OTP uchun state
  const [error, setError] = useState(""); // Xato xabarlarini saqlash

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tasdiqlash logikasi
    if (otp.length === 6) {
      console.log("OTP tasdiqlandi:", otp);
      // Keyingi bosqichga o'tish
    } else {
      setError("Tasdiqlash kodi noto'g'ri. Iltimos, 6 xonali kod kiriting.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Sarlavha */}
        <h1 className="text-2xl font-bold text-center text-claret mb-6">
          OTP Tasdiqlash
        </h1>

        <p className="text-center text-gray-600 mb-4">
          Telefon raqamingizga yuborilgan 6 xonali kodni kiriting.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* OTP maydoni */}
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tasdiqlash kodi
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="000000"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none text-center text-lg tracking-widest"
              maxLength={6}
              required
            />
          </div>

          {/* Xato xabari */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Tasdiqlash tugmasi */}
          <button
            type="submit"
            className="w-full bg-claret text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Tasdiqlash
          </button>
        </form>

        {/* Kodni qayta yuborish */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Kodni olmaganingizmi?{" "}
          <button
            onClick={() => console.log("Kod qayta yuborildi")}
            className="text-claret font-semibold hover:underline"
          >
            Qayta yuborish
          </button>
        </div>
      </div>
    </div>
  );
}

export default OTPVerificationPage;
