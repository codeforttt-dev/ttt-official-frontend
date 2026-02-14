import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/slice/signupSlice";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

 const handleSubmit = (e) => {
  e.preventDefault();

  // 🔥 Get existing users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // 🔥 Check if email already exists
  const userExists = existingUsers.find(
    (user) => user.email === formData.email
  );

  if (userExists) {
    alert("Email already registered ❌");
    return;
  }

  // 🔥 Add new user
  const updatedUsers = [...existingUsers, formData];

  // 🔥 Save back to localStorage
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  // 🔥 Redux Dispatch
  dispatch(registerUser(formData));


  navigate("/login");
};

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] flex justify-center items-center p-6">

      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md 
      transition-all duration-500 hover:shadow-yellow-500/40">

       <h2 className="text-3xl font-extrabold text-center mb-8 tracking-wider 
bg-gradient-to-r from-gray-900 via-black to-gray-700 
bg-clip-text text-transparent drop-shadow-lg">
  Create Account <span className="text-yellow-500">IEEO++</span>
</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute left-4 top-4 text-gray-500" />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black 
            py-3 rounded-xl font-bold text-lg 
            transition-all duration-300 
            transform hover:scale-105 
            shadow-md hover:shadow-lg"
          >
            Signup
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-700 font-bold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
