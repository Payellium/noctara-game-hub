import React from "react";
import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";

const AllGames = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="max-w-300 mx-auto">
      <h1
        className="text-2xl md:text-4xl font-extrabold text-center 
               bg-linear-to-r from-purple-400 via-pink-500 to-indigo-400 
               bg-clip-text text-transparent 
               animate-pulse tracking-wider my-10"
      >
        Enter the NOCTARA Universe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((game) => (
          <GameCard game={game}></GameCard>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
