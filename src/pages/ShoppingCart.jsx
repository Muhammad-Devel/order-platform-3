import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart() {
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

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-claret">Savat</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Savat bo'sh</p>
      ) : (
        <div>
          {/* Mahsulotlar gorizontal ko'rinishda */}
          <div className="flex flex-col space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap md:flex-nowrap items-center bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
              >
                {/* Mahsulot rasmi */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg mr-4 mb-4 md:mb-0"
                />

                {/* Mahsulot tafsilotlari */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>

                {/* Miqdor boshqaruvi */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
                  >
                    +
                  </button>
                </div>

                {/* Olib tashlash tugmasi */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 bg-red-500 text-xl text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))}
          </div>

          {/* Umumiy narx */}
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-right">
            <h2 className="text-lg font-semibold">
              Umumiy narx: ${totalPrice.toFixed(2)}
            </h2>
          </div>

          {/* Buyurtma tugmasi */}
          <div className="mt-6 text-center">
            <button className="bg-claret text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition">
              Buyurtma berish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
