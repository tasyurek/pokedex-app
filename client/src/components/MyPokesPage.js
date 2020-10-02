import React from "react";
import AppContext from "../context/app-context";
import MyPokeCard from "./MyPokeCard";
import PokeList from "./PokeList";

const MyPokesPage = () => {
  const { myPokes, myPokesDispatch } = React.useContext(AppContext);
  console.log(myPokes);

  return (
    <div className="my-pokes-page">
      <h2>My Pokes</h2>

      {myPokes && (
        <div className="poke-card-list">
          {myPokes.map((poke, index) => {
            return <MyPokeCard pokeDetails={poke} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyPokesPage;
