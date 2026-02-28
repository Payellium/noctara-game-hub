import React, { use } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {signIn} = use(AuthContext);
    const handleSignIn=(e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        signIn(email, password)
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
            Please Login to <span className="text-purple-500">NOCTARA</span>
          </h2>

          <form onSubmit={handleSignIn} className="space-y-5">
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

            <div>
              <a className="font-medium hover:text-blue-500" href="">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold text-white shadow-lg shadow-purple-500/30"
            >
              Login
            </button>
          </form>
          <div>
            <p className="my-3 font-bold">Or,</p>
            <Link className="btn bg-white w-full text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </Link>
          </div>
          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-purple-400 hover:underline cursor-pointer"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
