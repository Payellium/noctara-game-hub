import React from "react";
import { Link } from "react-router";

const GameDetailsSection = ({ game }) => {
  const {
    title,
    coverPhoto,
    category,
    ratings,
    description,
    downloadLink,
    developer,
  } = game;

  return (
    <section className="w-full bg-linear-to-b from-[#0f0c29] via-[#1a1a2e] to-black text-white py-16 px-6 md:px-20">
        <h2 className='text-center text-xl md:text-3xl font-serif font-bold my-3 md:my-10'>Noctara Insights</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="relative p-1 rounded-2xl bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 animate-borderGlow">
            <div className="rounded-2xl overflow-hidden bg-black">
              <img
                src={coverPhoto}
                alt={title}
                className="w-full h-100 md:h-125 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <span className="bg-purple-600/20 border border-purple-500 px-4 py-1 rounded-full text-purple-400 text-sm">
              🎮 {category}
            </span>

            <span className="bg-purple-600/20 border border-purple-500 px-4 py-1 rounded-full text-purple-400 text-sm">
              ⭐ {ratings}
            </span>

            <span className="bg-purple-600/20 border border-purple-500 px-4 py-1 rounded-full text-purple-400 text-sm">
              🏢 {developer}
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed mb-10">{description}</p>

          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-semibold shadow-[0_0_25px_rgba(168,85,247,0.6)]"
          >
            Download Now
          </a>
          
        </div>
        <Link to="/all-games" className="underline hover:text-purple-400">Browse All Games</Link>
      </div>
    </section>
  );
};

export default GameDetailsSection;
