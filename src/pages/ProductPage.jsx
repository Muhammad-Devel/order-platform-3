import React, { useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Cart from "../components/Cart"; // Savatni ko'rsatuvchi komponent

const ProductPage = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
        <h1>Savat</h1>
      <FeaturedProducts products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default ProductPage;
