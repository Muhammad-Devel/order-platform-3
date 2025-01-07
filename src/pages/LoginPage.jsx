import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false); // Parol ko'rinishini boshqarish
  const [phone, setPhone] = useState(""); // Telefon raqam holati
  const [password, setPassword] = useState(""); // Parol holati
  const [error, setError] = useState(null); // Xatolarni ko'rsatish uchun
  const navigate = useNavigate();

  // Formani yuborish funksiyasi
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Telefon va parol kiritilganligini tekshirish
    if (!phone || !password) {
      setError("Telefon raqam va parolni kiriting");
      return;
    }

    try {
      // Telefon va parolni post qilyapmiz
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        {
          phone: phone,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } } // Bu yerda obyekt shaklida
      );

      // Agar login muvaffaqiyatli bo'lsa
      if (response.data.login) {
        localStorage.setItem("login", JSON.stringify(response.data));
        // Muvaffaqiyatli kirgandan so'ng boshqa sahifaga o'tish yoki boshqa amalni bajarish mumkin
        navigate("/");
      } else {
        setError(response.data.login); // Xatolik xabarini foydalanuvchiga ko'rsatish
      }
    } catch (err) {
      if (err.response) {
        const status = err.response.status;
        if (status === 400) {
          setError(err.response.data.message);
        } else if (status === 401) {
          setError("Noto'g'ri foydalanuvchi yoki parol.");
        } else if (status === 500) {
          setError("Serverda xato yuz berdi. Keyinroq urinib ko'ring.");
        } else {
          setError("Noma'lum xato yuz berdi.");
        }
      } else if (err.request) {
        // So'rov amalga oshirilgan, lekin javob olinmagan
        setError("Server javob bermadi. Iltimos, keyinroq urinib ko'ring.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Sarlavha */}
        <h1 className="text-2xl font-bold text-center text-claret mb-6">
          Login
        </h1>

        {/* Xatolikni ko'rsatish */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Kirish formasi */}
        <form onSubmit={handleSubmit}>
          {/* Telefon raqam */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Telefon raqam
            </label>
            <InputMask
              mask="\+\9\9\8 (99) 999-99-99"
              value={phone}
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)} // Telefon raqamni to'g'ri yangilash
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none"
              placeholder="+998 (__) ___-__-__"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
