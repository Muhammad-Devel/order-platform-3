import React, { useState } from "react";

const OrderPage = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Buyurtma qabul qilindi: ${JSON.stringify(orderDetails)}`);
  };

  return (
    <div className="mt-12 p-4 max-w-2xl mx-auto bg-white rounded shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-claret mb-4">Buyurtma berish</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
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
          <label className="block text-sm font-medium text-gray-700">To'lov Usuli</label>
          <select
            name="paymentMethod"
            value={orderDetails.paymentMethod}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="cash">Naqd</option>
            <option value="card">Karta</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-gray-800">Umumiy narx: $50</p>
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
