import React, { useState } from "react";

const TestButton = () => {
  const [message, setMessage] = useState("Tugmani bosing");

  const handleClick = () => {
    console.log("Tugma bosildi");
    setMessage("Tugma bosildi!");
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <a
        onClick={handleClick}
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Bosish uchun
      </a>
      <p className="mt-4">{message}</p>
    </div>
  );
};

export default TestButton;
