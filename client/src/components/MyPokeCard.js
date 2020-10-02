import React from "react";
import { useHistory } from "react-router-dom";
import { removePoke } from "../actions/myPokes";
import AppContext from "../context/app-context";

const MyPokeCard = ({ pokeDetails }) => {
  const { myPokesDispatch } = React.useContext(AppContext);
  const history = useHistory();

  const gotoPokeDetails = (poke) => {
    history.push({
      pathname: `/pokemon/${poke.id}`,
      state: { poke, owner: true },
    });
  };

  const handleRemovePoke = (id) => {
    myPokesDispatch(removePoke(id));
  };

  return (
    <div className="poke-card tooltip-container ">
      <p className="poke-name">{pokeDetails.name}</p>
      <div className="poke-image-container">
        <div className="poke-shadow"></div>
        <img
          className="poke-image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokeDetails.id}.png`}
        />
      </div>
      <div className="poke-card__actions">
        <div className="btn" onClick={() => handleRemovePoke(pokeDetails.id)}>
          Remove
        </div>
        <div className="btn" onClick={() => gotoPokeDetails(pokeDetails)}>
          View
        </div>
      </div>
    </div>
  );
};

export default MyPokeCard;
