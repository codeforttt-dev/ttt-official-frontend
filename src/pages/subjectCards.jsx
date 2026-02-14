import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

const SubjectCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/olympiad-payment", {
      state: { classRange: "6-12" },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4 tracking-wide drop-shadow-lg">
          Online Olympiad++
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 opacity-90">
          International Ethical Entrepreneurship Olympiad++
        </h2>
        <div className="w-40 h-1 bg-black mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Single Card */}
      <div className="flex justify-center">
        <div
          onClick={handleClick}
          className="relative group cursor-pointer 
          bg-white/40 backdrop-blur-2xl 
          border border-white/40 
          rounded-[40px] 
          shadow-2xl 
          p-16 text-center 
          transition-all duration-500 
          hover:-translate-y-6 
          hover:shadow-yellow-500/40 
          hover:bg-white/60 
          active:scale-95 
          w-full max-w-2xl"
        >

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-yellow-300/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Premium Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 
          bg-gradient-to-r from-black to-gray-800 
          text-yellow-400 px-8 py-2 
          rounded-full text-sm font-bold 
          shadow-lg tracking-wider">
            IEEO++
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-8 text-yellow-600 group-hover:scale-125 transition duration-500 mt-6">
            <FaLaptopCode size={70} />
          </div>

          {/* Title */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-wide">
            Online Olympiad (Classes 6–12)
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6">
            Participate in the International Ethical Entrepreneurship Olympiad++
            from anywhere in the world through our secure online platform.
          </p>

          {/* Bottom Line */}
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full group-hover:w-40 transition-all duration-500"></div>

        </div>
      </div>
    </div>
  );
};

export default SubjectCards;
