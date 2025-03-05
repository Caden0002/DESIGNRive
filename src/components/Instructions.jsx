import React from "react";

const Instructions = () => {
  return (
    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center text-lg font-semibold text-gray-800 md:hidden z-50">
      <p>Move your fingers around to interact!</p>

      {/* Powered by Rive Link */}
      <a
        href="https://rive.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-1 text-sm font-medium text-gray-500 hover:underline"
      >
        Powered by RIVE
      </a>
    </div>
  );
};

export default Instructions;
