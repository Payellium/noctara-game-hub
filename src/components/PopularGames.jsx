import React from "react";
import GameCard from "./GameCard";
import { Link } from "react-router";

const PopularGames = ({ data }) => {
  // console.log(data)

  const highestRating = [...data]
    .sort((a, b) => Number(b.ratings) - Number(a.ratings))
    .slice(0, 3);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {highestRating.map((game) => (
          <GameCard game={game}></GameCard>
        ))}
      </div>
      <div className="text-center my-5">
        <Link className="font-bold text-lg underline">Explore All Games</Link>
      </div>
    </div>
  );
};

export default PopularGames;
