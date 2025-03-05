import React from "react";
import HeartLogo from "/FooterHeart.svg";

const Instructions = () => {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-lg font-semibold text-gray-800 md:hidden z-50 w-full">
      <p>Move your fingers around to interact!</p>

      {/* Build with Passion + Heart Logo */}
      <div className="inline-flex items-center mr-6 ">
        <img src={HeartLogo} alt="Heart Logo" className="w-8 h-8 ml-2" />

        <a
          href="https://medium.com/design-bootcamp/bringing-human-like-animation-to-life-with-rive-and-react-2a5de706c544"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[linear-gradient(90deg,#F58041_0%,#AC795C_25.6%,#887064_41.58%,#716A69_56.98%,#61656B_69.44%)] bg-clip-text text-transparent font-medium text-sm "
        >
          Build with Passion
        </a>
      </div>

      {/* Powered by Rive Link */}
      <a
        href="https://rive.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xs font-medium text-gray-500 underline"
      >
        Powered by RIVE
      </a>
    </div>
  );
};

export default Instructions;
