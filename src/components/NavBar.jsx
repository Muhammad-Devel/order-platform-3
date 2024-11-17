import { NavLink } from "react-router-dom";
import { useState } from "react"; // Responsive menyuni boshqarish uchun hook

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-900 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Website</div>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            {/* Mobil menyu tugmasi */}☰
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-4 mt-4 md:mt-0`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-blue-500"
                  : "text-gray-300 hover:text-white"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buyurtmalar"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-blue-500"
                  : "text-gray-300 hover:text-white"
              }
            >
              Buyurtmalar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-blue-500"
                  : "text-gray-300 hover:text-white"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
