import React, { useEffect, useState } from "react";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false); // Tahrirlash rejimi
  const [activeTab, setActiveTab] = useState("profile"); // Aktiv bo'limni aniqlash

  const [userData, setUserData] = useState([]); //details of user

  const [editedData, setEditedData] = useState({ ...userData });

  //get user data in local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("login"));
    setUserData(user);
    setEditedData(user);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-claret text-white p-4">
        <h1 className="text-center text-xl font-bold">Foydalanuvchi Profili</h1>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white shadow-md p-4">
          <ul className="space-y-4">
            <li>
              <button
                className={`w-full text-left py-2 px-4 rounded-lg ${
                  activeTab === "profile"
                    ? "bg-claret text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                Profil
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left py-2 px-4 rounded-lg ${
                  activeTab === "favorites"
                    ? "bg-claret text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("favorites")}
              >
                Yoqtirganlar
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left py-2 px-4 rounded-lg ${
                  activeTab === "orders"
                    ? "bg-claret text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("orders")}
              >
                Buyurtmalarim
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left py-2 px-4 rounded-lg ${
                  activeTab === "settings"
                    ? "bg-claret text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("settings")}
              >
                Sozlamalar
              </button>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/4 bg-white shadow-md p-6">
          {activeTab === "profile" && (
            <div>
              {!isEditing ? (
                <div>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Ism: </span> {userData.name}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Telefon: </span>{" "}
                    {userData.phone}
                  </p>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-claret text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                  >
                    Tahrirlash
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                  }}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Ism
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={editedData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={editedData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-claret focus:outline-none"
                      required
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                    >
                      Saqlash
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
                    >
                      Bekor qilish
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {activeTab === "favorites" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Yoqtirganlar</h2>
              <p>Bu yerda foydalanuvchi yoqtirgan mahsulotlar ko'rsatiladi.</p>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Buyurtmalarim</h2>
              <p>Bu yerda foydalanuvchi buyurtmalari ko'rsatiladi.</p>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Sozlamalar</h2>
              <p>Bu yerda foydalanuvchi sozlamalari tahrirlanadi.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
