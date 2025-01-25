import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { createOrder } from "../services/api";

const OrderPage = () => {
  const { userDetails } = useContext(UserContext);
  console.log(userDetails);

  const location = useLocation();
  const { id, title, image, description, rating, price, promoPrice, quantity } =
    location.state || {};
  console.log(location.state);

  const [orderDetails, setOrderDetails] = useState({
    name: userDetails.name,
    phone: userDetails.phone,
    address: userDetails.address,
    paymentMethod: "Cash",
  });
  const [products, setProducts] = useState(
    location.state ? [location.state] : {}
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = userDetails._id;
    const order = {
      userId: userId,
      items: products.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
        price: product.price,
      })),
      paymentMethod: orderDetails.paymentMethod,
      totalAmount: products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      ),
    };
    console.log(order);
    const response = await createOrder(order);
    console.log("Order created:", response);
  };

  // Mahsulot sonini o‘zgartirish
  const updateQuantity = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  // Mahsulotni olib tashlash
  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  // Jami narxni hisoblash
  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="mt-12 p-4 max-w-2xl mx-auto bg-white rounded shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-claret mb-4">Buyurtma berish</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Ism
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={orderDetails.name}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Telefon Raqami
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={orderDetails.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Manzil
          </label>
          <textarea
            id="address"
            name="address"
            value={orderDetails.address}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            To'lov Usuli
          </label>
          <select
            name="paymentMethod"
            value={orderDetails.paymentMethod}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Cash">Naqd</option>
            <option value="Card">Karta</option>
          </select>
        </div>
        {/* Mahsulotlar bloki */}
        <div className="grid md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 px-4">
                <h2 className="font-bold text-lg">{product.name}</h2>
                <p className="text-sm text-gray-500">Narxi: ${product.price}</p>
                <div className="flex items-center mt-2">
                  <label className="mr-2 text-sm">Soni:</label>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      updateQuantity(product.id, Math.max(1, +e.target.value))
                    }
                    className="w-16 px-2 py-1 border rounded text-center"
                    min="1"
                  />
                </div>
              </div>
              <button
                onClick={() => removeProduct(product.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Olib tashlash
              </button>
            </div>
          ))}
        </div>

        {/* Jami narx */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
          <span className="text-lg font-bold">Jami narx:</span>
          <span className="text-xl text-claret">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-gray-800"></p>
          <button
            type="submit"
            className="bg-claret text-white py-2 px-4 rounded hover:bg-claret-700"
          >
            Buyurtmani Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
