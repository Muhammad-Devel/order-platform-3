import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Cake Order Platform</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/order">Order</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
