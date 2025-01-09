import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; // Responsive menyuni boshqarish uchun hook
import { MdLogin, MdLogout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

function Navbar({ isLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  // Ekran o'lchami o'zgarganda menyuni yopish
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Katta ekranda menyuni yopamiz
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logout user
  const logOutUser = () => {
    localStorage.clear();
    // setIsLogin(false);
    return window.location.reload();
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-claret-300 text-lg font-bold">Cake Order</div>

        {/* menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-claret-600 text-2xl md:hidden"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigatsiya ro'yxati */}
        <ul
          className={`${
            isOpen ? "block z-30 shadow-md px-4 py-2 space-y-2" : "hidden"
          } absolute md:relative top-14 left-0 w-full bg-white md:flex md:items-center md:space-x-4 md:top-auto md:w-auto`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "li-styles-active" : "li-styles-hover"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mahsulotlar"
              className={({ isActive }) =>
                isActive ? "li-styles-active" : "li-styles-hover"
              }
            >
              Mahsulotlar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buyurtmalar"
              className={({ isActive }) =>
                isActive ? "li-styles-active" : "li-styles-hover"
              }
            >
              Buyurtmalar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/savat"
              className={({ isActive }) =>
                isActive ? "li-styles-active" : "li-styles-hover"
              }
            >
              <FaCartShopping className="inline ml-1" size={28} />
            </NavLink>
          </li>
          <li
            className={`${isOpen ? "border-t-2 border-t-white-400 pt-3" : ""}`}
          >
            <button
              onClick={logOutUser}
              className={`li-styles-hover ${
                isOpen
                  ? ""
                  : "bg-transparent border-white rounded-md px-2 py-2 text-claret-600"
              }`}
            >
              <MdLogout size={28} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
