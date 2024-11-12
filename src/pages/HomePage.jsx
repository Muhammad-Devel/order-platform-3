"use client";

import React from "react";

import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ProductSections2 from "../components/ProductSections2";

const products = [
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
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with dark chocolate glaze.",
    price: "$20",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.5,
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

export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <main className={"z-10"}>
        <HeroSection />
      </main>

      {/* <FeaturedProducts products={products} /> */}
      <ProductSections2 products={products} />

      <AboutUs />

      <ContactUs />

      <Footer />
    </div>
  );
}
