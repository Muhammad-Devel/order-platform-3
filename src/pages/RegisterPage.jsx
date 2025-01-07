import React, { useEffect, useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setError("Parol va Tasdiqlash paroli mos kelmayabdi");
      return;
    } else {
      setError(null);
    }
    console.log(phone, name, password, confirmPass);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        {
          name: name,
          phone: phone,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } } // Bu yerda obyekt shaklida
      );

      if (response.status === 201) {
        return navigate("/success");
      }
    } catch (err) {
      console.log("xato mavjud: ", err);

      setError("Server xatosi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Sarlavha */}
        <h1 className="text-2xl font-bold text-center text-claret mb-6">
          Ro'yxatdan o'tish
        </h1>

        {/* Xatolikni ko'rsatish */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Ro'yxatdan o'tish formasi */}
        <form onSubmit={handleSubmit}>
          {/* Telefon raqam */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ismingiz
            </label>
            <input
              value={name}
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)} // Telefon raqamni to'g'ri yangilash
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none"
              placeholder="Name..."
              required
            />
          </div>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              id="confirmPass"
              name="confirmPass"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
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
          <a
            href="/login"
            className="text-claret font-semibold hover:underline"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
