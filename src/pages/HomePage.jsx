import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedCakes from "../components/FeaturedCakes";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedCakes />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default HomePage;
