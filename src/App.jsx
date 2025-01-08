import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("login");
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Routes>
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
