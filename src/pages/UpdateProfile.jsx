import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router";

const UpdateProfile = () => {
    const {updateUser,user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUpdate=(e)=>{
        e.preventDefault();
        
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUser({displayName: name, photoURL: photo})
        .then(()=>{
            
            setUser({...user, displayName: name, photoURL: photo});
            navigate("/profile")
        })
        .catch(error=>{
            console.log(error);
            
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="w-full max-w-md bg-[#111827]/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          Update Your <span className="text-purple-500">Profile</span>
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              name="photo"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
          
            type="submit"
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold text-white shadow-lg shadow-purple-500/30"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
