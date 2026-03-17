import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import GameDetailsCard from "../components/GameDetailsCard";


const GameDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [game, setGame] = useState({});
  console.log(data, id, game);

  useEffect(() => {
    const gameDetails = data.find((singleGame) => singleGame.id == id);
    setGame(gameDetails);
  }, [data, id]);

  return (
    <div>
      <GameDetailsCard game={game}></GameDetailsCard>
    </div>
  );
};

export default GameDetails;
