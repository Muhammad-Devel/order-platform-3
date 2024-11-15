import React from "react";
import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ProductSections2 from "../components/ProductSections2";

// Mahsulotlar ro'yxati
const products1 = [
  {
    id: 1,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with dark chocolate glaze.",
    price: "$20",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Vanilla Cake",
    description: "Classic vanilla sponge with buttercream frosting.",
    price: "$18",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    description: "Smooth red velvet cake with cream cheese frosting.",
    price: "$22",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.5,
  },
];

const products2 = [
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with dark chocolate glaze.",
    price: "$15",
    imageUrl: "https://via.placeholder.com/150",
    rating: 2.5,
  },
  {
    id: 5,
    name: "Vanilla Cake",
    description: "Classic vanilla sponge with buttercream frosting.",
    price: "$18",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Red Velvet Cake",
    description: "Smooth red velvet cake with cream cheese frosting.",
    price: "$22",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.5,
  },
];

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />

      <main className={"z-10"}>
        <HeroSection />
      </main>

      {/* Mahsulot bo'limlari */}
      <ProductSections2 products={[products1, products2]} />

      {/* About us */}
      <AboutUs />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />

      {/* Example of Link to another page */}
      <div className="text-center mt-10">
        <Link
          to="/savat"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Savatni ko'rish
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
