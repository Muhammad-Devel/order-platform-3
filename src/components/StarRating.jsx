import React from "react";

function StarRating({ rating }) {
  // Yulduzlar soni 5 ta bo'ladi
  const totalStars = 5;

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-cosmic_latte-300" : "text-white-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span className="text-sm font-semibold ml-2">{rating}</span>
    </div>
  );
}

export default StarRating;
