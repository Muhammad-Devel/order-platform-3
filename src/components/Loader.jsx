import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-claret-600 h-32 w-32"></div>
    </div>
  );
}

export default Loader;
