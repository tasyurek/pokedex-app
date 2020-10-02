import React from "react";
import useFetchPokeDetails from "../hooks/useFetchPokeDetails";
import { useHistory } from "react-router-dom";
import AppContext from "../context/app-context";
import { addPoke } from "../actions/myPokes";

const PokeCard = ({ poke }) => {
  const { myPokesDispatch } = React.useContext(AppContext);

  const history = useHistory();
  const [pokeDetails] = useFetchPokeDetails(poke.url);

  const gotoPokeDetails = (poke) => {
    history.push({ pathname: `/pokemon/${poke.id}`, state: { poke } });
  };

  const handleAddPoke = (poke) => {
    myPokesDispatch(addPoke(poke));
  };

  if (!pokeDetails) return null;

  return (
    <div className="poke-card tooltip-container ">
      <p className="poke-name">{poke.name}</p>
      <div className="poke-image-container">
        <div className="poke-shadow"></div>
        <img
          className="poke-image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokeDetails.id}.png`}
        />
      </div>
      <div className="poke-card__actions">
        <div className="btn" onClick={() => handleAddPoke(pokeDetails)}>
          Add
        </div>
        <div className="btn" onClick={() => gotoPokeDetails(pokeDetails)}>
          View
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
