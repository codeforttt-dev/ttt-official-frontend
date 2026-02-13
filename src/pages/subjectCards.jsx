import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAtom, FaFlask, FaSquareRootAlt } from "react-icons/fa";

const subjects = [
  { name: "Physics", icon: <FaAtom size={40} /> },
  { name: "Chemistry", icon: <FaFlask size={40} /> },
  { name: "Mathematics", icon: <FaSquareRootAlt size={40} /> },
];

const SubjectCards = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screenbg-gradient-to-r from-[#FFD42A] to-[#FFC107]  py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Upcoming Exam Olympiad++
        </h1>
        <p className="text-2xl text-gray-600">
         the true topper right register for the international ethical entrepreneurship Olympiad plus plus 
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-xl border border-yellow-200 rounded-3xl shadow-xl p-10 text-center transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6 text-yellow-500 group-hover:scale-110 transition">
              {subject.icon}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {subject.name}
            </h2>

            {/* Buttons */}
            <div className="space-y-4">
              <button
                onClick={() =>
                  navigate("/register", {
                    state: { subject: subject.name, classRange: "1-6" },
                  })
                }
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition"
              >
                Classes 1 – 6
              </button>

              <button
                onClick={() =>
                  navigate("/register", {
                    state: { subject: subject.name, classRange: "6-12" },
                  })
                }
                className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-xl transition"
              >
                Classes 6 – 12
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectCards;
