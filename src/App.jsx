import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/NavBar";
import Products from "./components/Products";
import ProductsPage from "./pages/ProductsPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./components/Orders";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buyurtmalar" element={<Orders />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/mahsulotlar" element={<Products />} />
          <Route path="/allproducts" element={<ProductsPage />} />
          <Route path="/order-page" element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
