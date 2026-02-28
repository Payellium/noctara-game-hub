import React, { use } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser} = use(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password)
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="w-full max-w-md bg-[#111827]/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            Welcome to <span className="text-purple-500">NOCTARA</span>
          </h2>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold text-white shadow-lg shadow-purple-500/30"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-400 hover:underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
