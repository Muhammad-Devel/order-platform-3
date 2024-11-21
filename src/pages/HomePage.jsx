import React from "react";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import Footer from "../components/Footer";


const HomePage = () => {
  const address = "Shovot tumani, Oltinqala mahallasi";

  return (
    <div>
      <Hero />
      <CardList />
   
      <Footer />
    </div>
  );
};
export default HomePage;
