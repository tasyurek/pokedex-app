import React from "react";
import AppContext from "../context/app-context";
import { useHistory } from "react-router-dom";
import useStatDetails from "../hooks/useStatDetails";
import { addPoke, removePoke } from "../actions/myPokes";

const PokeDetails = ({ location }) => {
  const { myPokes, myPokesDispatch } = React.useContext(AppContext);
  const { poke, owner } = location.state;
  const history = useHistory();

  React.useState(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddPoke = (poke) => {
    myPokesDispatch(addPoke(poke));
  };

  const handleRemovePoke = (id) => {
    myPokesDispatch(removePoke(id));
    setTimeout(() => {
      history.push("/mypokemons");
    }, 250);
  };

  if (!poke) return null;

  return (
    <div className="poke-details">
      <div className="poke-card">
        <h2>{poke.name}</h2>
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
        <div className="informations">
          <Types poke={poke} />
          <Abilities poke={poke} />
          <Height poke={poke} />
        </div>
      </div>
      <div className="informations-container">
        <div className="informations-container">
          <h2>Stats</h2>
          <Stats poke={poke} />
        </div>
        <div className="informations-container">
          <h2>Moves</h2>
          <Moves poke={poke} />
        </div>
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
      <div>
        {abilities.map((ability, index) => (
          <p key={index}>{ability.name}</p>
        ))}
      </div>
    </div>
  );
};

const Types = ({ poke }) => {
  const types = poke.types.map((type) => type.type);
  return (
    <div className="box">
      <h3>Types</h3>
      <div>
        {types.map((type, index) => (
          <p key={index}>{type.name}</p>
        ))}
      </div>
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

const Moves = ({ poke }) => {
  const step = 15;
  const moves_1 = poke.moves.slice(0, step);
  const moves_2 = poke.moves.slice(step, step * 2);
  const moves_3 = poke.moves.slice(step * 2, step * 3);
  const moves_4 = poke.moves.slice(step * 3, step * 4);
  const moves = [
    { index: 0, moves: moves_1 },
    { index: 1, moves: moves_2 },
    { index: 2, moves: moves_3 },
    { index: 3, moves: moves_4 },
  ];

  return (
    <div className="informations__stats">
      {moves.map((item, index) => (
        <MoveList moves={item.moves} key={index} />
      ))}
    </div>
  );
};

const MoveList = ({ moves }) => {
  return (
    <div className="box">
      {moves.map((move, index) => {
        return <p key={index}>{move.move.name}</p>;
      })}
    </div>
  );
};
