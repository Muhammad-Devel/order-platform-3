import React from "react";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import AddressCard from "../components/AddressCard";

const HomePage = () => {
  const address = "Shovot tumani, Oltinqala mahallasi";

  return (
    <div>
      <Hero />
      <CardList />
      <AddressCard />
      <Footer />
    </div>
  );
};
export default HomePage;
