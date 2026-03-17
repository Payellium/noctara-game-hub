import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../useTitle";

const MyProfile = () => {
  const { user } = use(AuthContext);
  useTitle("Profile")
  return (
    <div className="min-h-screen bg-linear-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center pt-16 px-4">
      <h1 className="text-4xl font-bold mb-8">My Profile</h1>

      <img
        src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
        alt="User Avatar"
        className="w-32 h-32 rounded-full border-4 border-purple-600 mb-6 shadow-lg"
      />

      <div className="text-center space-y-2 mb-8">
        <p className="text-xl font-semibold">
          {user?.displayName}
        </p>
        <p className="text-gray-300">{user?.email || "No Email"}</p>
      </div>

      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
        >
          Back to Home
        </Link>
        <Link
          to="/profile/update-profile"
          className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
