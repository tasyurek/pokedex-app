import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PokeCard from "./PokeCard";
import useFetchPokes from "../hooks/useFetchPokes";
import PokeList from "./PokeList";

const PokemonBrowserPage = () => {
  const [limit, setLimit] = React.useState(40);
  const [pokes] = useFetchPokes(limit);

  if (!pokes) return null;

  console.log(pokes);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setLimit(limit + 5);
    }
  };

  return (
    <div className="poke-card-list">
      {pokes.map((poke, index) => {
        return <PokeCard poke={poke} key={index} />;
      })}
    </div>
  );
};

export default PokemonBrowserPage;
