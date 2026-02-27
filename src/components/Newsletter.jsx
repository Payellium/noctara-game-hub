import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../../firebase/firebase.config";

const db = getFirestore(app);

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "subscribers"), {
        email: email,
        createdAt: new Date(),
      });
      alert("Welcome to Noctara Elite 🔥");
      setEmail("");
    } catch (error) {
      console.error("Error adding email: ", error);
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <section className="py-20 bg-linear-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="max-w-4xl mx-auto text-center p-10 rounded-2xl bg-black/40 border border-purple-500/30 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent mb-6">
          Join the Noctara Elite
        </h2>
        <p className="text-gray-400 mb-8">
          Get exclusive game drops, updates, and premium content directly to
          your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 rounded-lg bg-black/40 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-2/3"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
