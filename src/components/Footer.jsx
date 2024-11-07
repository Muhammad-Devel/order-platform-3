import React from "react";
// Ikonkalarni import qilish
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Jumaboyev M.A</h4>
          <p>Your trusted cake partner</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          {/* Facebook ikonkasi */}
          <a href="#" className="hover:text-gray-400" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          {/* Instagram ikonkasi */}
          <a href="#" className="hover:text-gray-400" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          {/* Twitter ikonkasi */}
          <a href="#" className="hover:text-gray-400" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Jumaboyev M.A. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
