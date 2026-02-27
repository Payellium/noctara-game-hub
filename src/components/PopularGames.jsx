import React from "react";
import GameCard from "./GameCard";
import { Link } from "react-router";
import downArrow from "../assets/icons8-down-arrow-50.png";

const PopularGames = ({ data }) => {
  // console.log(data)

  const highestRating = [...data]
    .sort((a, b) => Number(b.ratings) - Number(a.ratings))
    .slice(0, 3);
  return (
    <div>
      <div className="relative my-5">
        <h2 className="text-3xl font-bold text-cyan-500 mt-8 ml-5">
          Popular Games{" "}
        </h2>
        <img
          className="absolute -bottom-7 right-230"
          src={downArrow}
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {highestRating.map((game) => (
          <GameCard game={game}></GameCard>
        ))}
      </div>
      <div className="text-center my-5">
        <Link to="/allGames" className="font-bold text-lg underline">
          Explore All Games
        </Link>
      </div>
    </div>
  );
};

export default PopularGames;
