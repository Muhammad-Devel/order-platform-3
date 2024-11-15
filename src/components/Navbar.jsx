import React from "react";
import { Link } from "react-router-dom"; // Linkni to'g'ri import qilish
import DropdownMenu from "./DropdownMenu";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Savat", href: "/product-page" }, // Yo'nalishni to'g'rilaymiz
  { name: "Company", href: "#" },
];

const Navbar = () => {
  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Company Logo"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <DropdownMenu />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm/6 font-semibold text-gray-900 transform transition ease-in-out duration-300 hover:scale-110"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm/6 font-semibold text-gray-900 transform transition ease-in-out duration-300 hover:scale-110">
            Kirish <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
