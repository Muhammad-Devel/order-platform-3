import React from "react";

// Button komponenti: tugmaga props orqali text, onClick funksiyasi va className (stil) berish mumkin.
const ProductsBtn = ({ children, onClick, className, type = "button" }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default ProductsBtn;
