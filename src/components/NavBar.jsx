import { NavLink } from "react-router-dom";
import { useState } from "react"; // Responsive menyuni boshqarish uchun hook

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [links, setLinks] = useState()
  return (
    <nav className="bg-white p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="text-black text-lg font-bold">My Website</div>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-claret-600 text-2xl text-bold md:hidden"
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
                  ? "text-claret-600 font-bold border-b-2 border-blue-500 tranform delay-150"
                  : "text-gray-300 hover:text-claret-700 hover:transition-all"
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
                  ? "text-claret-600 font-bold border-b-2 border-blue-500"
                  : "text-gray-300 hover:text-claret-700"
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
                  ? "text-claret-600 font-bold border-b-2 border-blue-500"
                  : "text-gray-300 hover:text-claret-700"
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
