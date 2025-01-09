import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/NavBar";
import SuccessPage from "./components/SuccessPage";
import Products from "./components/Products";
import ProductsPage from "./pages/ProductsPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./components/Orders";
import ShoppingCart from "./pages/ShoppingCart";
import RegisterPage from "./pages/RegisterPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import UserProfile from "./pages/UserProfile";
import AboutUs from "./pages/AboutUs";
import Loader from "./components/Loader";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("login");
    if (!loggedInUser && window.location.pathname !== "/register") {
      navigate("/login");
      setIsLogin(false);
    }
  }, [navigate]);

  useEffect(() => {
    // Sahifa almashganida yuklanishni boshqarish
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Sahifa almashish hodisalarini qo'shamiz
    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, [location]);

  return (
    <div>
      {loading && <Loader />}
      {/* Navbar doimiy ravishda mavjud */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar isLogin={isLogin} />
      )}

      <Routes>
        {/* Sahifalar uchun routing */}
        <Route path="/" element={<HomePage />} />
        <Route path="/buyurtmalar" element={<Orders />} />
        <Route path="/savat" element={<ShoppingCart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/mahsulotlar" element={<Products />} />
        <Route path="/allproducts" element={<ProductsPage />} />
        <Route path="/order-page" element={<OrderPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
