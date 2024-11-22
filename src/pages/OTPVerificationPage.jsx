import React, { useState, useEffect } from "react";

function OTPVerificationPage() {
  const [otp, setOtp] = useState(""); // OTP uchun state
  const [error, setError] = useState(""); // Xato xabar
  const [timeLeft, setTimeLeft] = useState(30); // Taymerni boshlash uchun vaqt (soniya)

  // OTP validatsiyasi (faqat raqamlar kiritish)
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Faqat raqamlar
    setOtp(value);
  };

  // Taymerni boshqarish
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Kodni qayta yuborish
  const resendCode = () => {
    setTimeLeft(30); // Taymerni qayta boshlash
    setOtp(""); // Oldingi OTP-ni tozalash
    console.log("Kod qayta yuborildi");
  };

  // Formni yuborish
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log("OTP tasdiqlandi:", otp);
    } else {
      setError("Tasdiqlash kodi noto'g'ri. Iltimos, 6 xonali kod kiriting.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-claret mb-6">
          OTP Tasdiqlash
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Telefon raqamingizga yuborilgan 6 xonali kodni kiriting.
        </p>

        <form onSubmit={handleSubmit}>
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
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none text-center text-lg tracking-widest"
              maxLength={6}
              required
            />
          </div>

          {/* Xato xabari */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Taymer */}
          <div className="text-center text-sm text-gray-600 mb-4">
            {timeLeft > 0 ? (
              <p>
                Kodni qayta yuborish uchun{" "}
                <span className="text-claret font-bold">{timeLeft}s</span>{" "}
                kuting.
              </p>
            ) : (
              <button
                onClick={resendCode}
                className="text-claret font-semibold hover:underline"
              >
                Kodni qayta yuborish
              </button>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-claret text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Tasdiqlash
          </button>
        </form>
      </div>
    </div>
  );
}

export default OTPVerificationPage;
