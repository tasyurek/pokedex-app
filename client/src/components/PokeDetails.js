import React from "react";
import { ReactComponent as RulerIcon } from "../assets/ruler-vertical-solid.svg";
import { ReactComponent as TypeIcon } from "../assets/paw-solid.svg";
import { addPoke, removePoke } from "../actions/myPokes";
import AppContext from "../context/app-context";
import { useHistory } from "react-router-dom";
import useStatDetails from "../hooks/useStatDetails";

const PokeDetails = ({ location }) => {
  const { myPokes, myPokesDispatch } = React.useContext(AppContext);
  const { poke, owner } = location.state;
  const history = useHistory();

  const handleAddPoke = (poke) => {
    myPokesDispatch(addPoke(poke));
  };

  const handleRemovePoke = (id) => {
    myPokesDispatch(removePoke(id));
    setTimeout(() => {
      history.push("/mypokes");
    }, 250);
  };

  if (!poke) return null;

  return (
    <div className="poke-details">
      <div className="poke-card">
        <div className="poke-image-container">
          <img
            className="poke-image"
            src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`}
          />
        </div>
        <div className="poke-card__actions">
          {owner ? (
            <div className="btn" onClick={() => handleRemovePoke(poke.id)}>
              Remove
            </div>
          ) : (
            <div className="btn" onClick={() => handleAddPoke(poke)}>
              Add to Bag
            </div>
          )}
        </div>
      </div>
      <div className="informations-container">
        <h2>{poke.name}</h2>
        <div className="informations">
          <Abilities poke={poke} />
          <Types poke={poke} />
          <Height poke={poke} />
        </div>
        <h2>Stats</h2>
        <Stats poke={poke} />
      </div>
    </div>
  );
};

export default PokeDetails;

const Abilities = ({ poke }) => {
  const abilities = poke.abilities.map((ability) => ability.ability);
  return (
    <div className="box">
      <h3>Abilities</h3>
      {abilities.map((ability, index) => (
        <p key={index}>{ability.name}</p>
      ))}
    </div>
  );
};

const Types = ({ poke }) => {
  const types = poke.types.map((type) => type.type);
  return (
    <div className="box">
      <h3>Types</h3>
      {types.map((type, index) => (
        <p key={index}>{type.name}</p>
      ))}
    </div>
  );
};

const Height = ({ poke }) => {
  return (
    <div className="box">
      <h3>Height</h3>
      <p>{poke.height}</p>
    </div>
  );
};

const Stats = ({ poke }) => {
  return (
    <div className="informations__stats">
      {poke.stats.map((stat, index) => {
        if (stat.stat.name === "hp") return null;
        return (
          <div className="box" key={index}>
            <h3>{stat.stat.name}</h3>
            <StatDetails url={stat.stat.url} />
          </div>
        );
      })}
    </div>
  );
};

const StatDetails = ({ url }) => {
  const [statDetails] = useStatDetails(url);

  console.log(statDetails);

  if (!statDetails) return null;

  return (
    <div>
      {statDetails.slice(4).map((detail, index) => {
        return <p key={index}>{detail.move.name}</p>;
      })}
    </div>
  );
};
