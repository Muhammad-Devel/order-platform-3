import React, { useState } from "react";

const ordersData = [
  {
    id: "ORD12345",
    date: "2024-11-20",
    time: "14:30",
    product: "Chocolate Cake",
    price: "$20",
    status: "Tasdiqlangan",
  },
  {
    id: "ORD12346",
    date: "2024-11-19",
    time: "16:00",
    product: "Red Velvet Cake",
    price: "$25",
    status: "Bajarilmoqda",
  },
  {
    id: "ORD12347",
    date: "2024-11-18",
    time: "12:15",
    product: "Vanilla Cake",
    price: "$18",
    status: "Bekor qilingan",
  },
];

const Orders = () => {
  const [filter, setFilter] = useState("Hammasi");

  const filteredOrders =
    filter === "Hammasi"
      ? ordersData
      : ordersData.filter((order) => order.status === filter);

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const displayedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );
  // useEffect(() => {
  //   fetch("https://api.example.com/orders")
  //     .then((response) => response.json())
  //     .then((data) => setOrders(data));
  // }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-claret">
        Mening Buyurtmalarim
      </h1>

      {/* Filtrlar */}
      <div className="flex space-x-4 mb-6">
        {["Hammasi", "Tasdiqlangan", "Bajarilmoqda", "Bekor qilingan"].map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg ${
                filter === status
                  ? "bg-claret text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-claret hover:text-white"
              }`}
            >
              {status}
            </button>
          )
        )}
      </div>

      {/* Buyurtma ro'yxati */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="p-4 rounded-lg shadow-md bg-white border-l-4"
            style={{
              borderColor:
                order.status === "Tasdiqlangan"
                  ? "#4CAF50" // Yashil
                  : order.status === "Bajarilmoqda"
                  ? "#FF9800" // Sariq
                  : "#F44336", // Qizil
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-claret">{order.product}</h2>
              <span className="text-sm text-gray-500">
                {order.date}, {order.time}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Narxi: <b>{order.price}</b>
            </p>
            <p
              className={`text-sm font-bold ${
                order.status === "Tasdiqlangan"
                  ? "text-green-500"
                  : order.status === "Bajarilmoqda"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              Holati: {order.status}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Oldingi
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Keyingi
        </button>
      </div>
    </div>
  );
};

export default Orders;
