import React from "react";
import { NavLink } from "react-router-dom";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kompaniya haqida qisqacha */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Biz haqimizda</h3>
            <p className="text-gray-400">
              Bizning kompaniya sizga sifatli tortlarni tez va qulay tarzda yetkazib beradi. Har bir buyurtma uchun mas’uliyat bilan yondashamiz.
            </p>
          </div>

          {/* Tezkor havolalar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tezkor havolalar</h3>
            <ul>
              <li className="mb-2">
                <NavLink to="/mahsulotlar" className="text-gray-400 hover:text-white">
                  Mahsulotlar
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/about" className="text-gray-400 hover:text-white">
                  Biz haqimizda
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/contact" className="text-gray-400 hover:text-white">
                  Aloqa
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizni kuzating</h3>
            <div className="flex space-x-4">
              <a
                href="https://t.me/yourchannel"
                className="text-gray-400 hover:text-blue-500"
                aria-label="Telegram"
              >
                <FaTelegram size={24} />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                className="text-gray-400 hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com/yourpage"
                className="text-gray-400 hover:text-blue-700"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Jumaboyev M.A. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
