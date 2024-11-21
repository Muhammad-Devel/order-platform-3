import React, { useState } from "react";

function ShoppingCart() {
  // Savatdagi mahsulotlarni saqlash uchun state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Shokoladli tort",
      price: 15.99,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Vanilli tort",
      price: 12.99,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  // Mahsulotni savatga qo'shish
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Mahsulotni savatdan olib tashlash
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Mahsulot sonini o'zgartirish
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Savatdagi umumiy narx
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Savat</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Savat bo'sh</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-4 rounded-lg"
            >
              {/* Mahsulot rasmi */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 rounded-lg mb-4 md:mb-0"
              />

              {/* Mahsulot tafsilotlari */}
              <div className="md:flex-1 md:ml-4 text-center md:text-left">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>

              {/* Mahsulot miqdorini boshqarish */}
              <div className="flex items-center mt-4 md:mt-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>

              {/* Mahsulotni olib tashlash */}
              <div className="mt-4 md:mt-0">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  O'chirish
                </button>
              </div>
            </div>
          ))}

          {/* Umumiy narx */}
          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">
              Umumiy narx: ${totalPrice.toFixed(2)}
            </h2>
          </div>

          {/* Buyurtma tugmasi */}
          <div className="text-center mt-6">
            <button className="bg-claret text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
              Buyurtma berish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
