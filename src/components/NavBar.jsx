import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"; // Responsive menyuni boshqarish uchun hook

function Navbar() {
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

  return (
    <nav className="bg-white p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="text-claret-300 text-lg font-bold">My Website</div>

        {/* Mobil menyu tugmasi */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-claret-600 text-2xl md:hidden"
        >
         {isOpen ? "✖": "☰"} 
        </button>

        {/* Navigatsiya ro'yxati */}
        <ul
          className={`${
            isOpen ? "block shadow-md px-4 py-2 space-y-2" : "hidden"
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
              to="/login"
              className={({ isActive }) =>
               isActive ? "li-styles-active" : "li-styles-hover"
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

export default Navbar;
