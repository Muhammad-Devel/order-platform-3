import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/NavBar";
import Ordered from "./pages/Ordered";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buyurtmalar" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ordered" element={<Ordered />} />
          <Route path="/mahsulotlar" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
