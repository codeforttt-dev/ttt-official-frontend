import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/loginSlice";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

const handleSubmit = (e) => {
  e.preventDefault();

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = existingUsers.find(
    (user) =>
      user.email === formData.email &&
      user.password === formData.password
  );

  if (validUser) {
    dispatch(loginUser(validUser));

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(validUser));

    alert("Login Successful ✅");
    navigate("/");
  } else {
    alert("Invalid Email or Password ❌");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] flex justify-center items-center p-6">

   <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl 
w-full max-w-md min-h-[400px] transition-all duration-500 hover:shadow-yellow-500/40">

        {/* Attractive Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-8 
        bg-gradient-to-r from-gray-900 via-black to-gray-700 
        bg-clip-text text-transparent drop-shadow-md tracking-wide">
          Login to <span className="text-yellow-500">IEEO++</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

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

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
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
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-yellow-700 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;

