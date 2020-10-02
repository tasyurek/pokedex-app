import React from "react";
import MyPokeCard from "./MyPokeCard";
import PokeCard from "./PokeCard";

const PokeList = ({ pokes, myPokes }) => {
  return (
    <div className="poke-card-list">
      {pokes.map((poke, index) => {
        return myPokes ? (
          <MyPokeCard pokeDetails={poke} key={index} />
        ) : (
          <PokeCard poke={poke} key={index} />
        );
      })}
    </div>
  );
};

export default PokeList;
