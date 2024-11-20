import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbHeader = ({ title }) => {
  return (
    <div className="bg-cosmic_latte-500 p-4 shadow-md">
      <div className="flex items-center">
        {/* Orqaga yo'l tugmasi */}
        <Link
          to="/"
          className="flex items-center text-claret-700 hover:text-claret-900 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Asosiy sahifa
        </Link>
        {/* Joriy sahifa nomi */}
        <span className="ml-4 text-claret-800 text-lg font-semibold">
          / {title}
        </span>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
