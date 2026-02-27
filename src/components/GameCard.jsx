import React from "react";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  const {id, coverPhoto, title, description, category, ratings} = game;
  return (
    <Link to={`/game-details/${id}`}>
      <div
        className="w-96 cursor-pointer rounded-xl overflow-hidden
                bg-white/10 backdrop-blur-lg border border-white/10
                hover:scale-105 transition-transform duration-300"
      >
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={coverPhoto}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
          <div className="badge badge-secondary">Popular</div>

          <p className="text-zinc-200 text-sm line-clamp-3 mb-3">
            {description}
          </p>

          <div className="flex justify-between items-center">
            <div className="badge badge-outline text-white border-white/30">
              {category}
            </div>
            <div className="badge badge-outline text-yellow-400 border-yellow-400">
              ⭐ {ratings}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
