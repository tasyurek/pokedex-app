import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PokeCard from "./PokeCard";
import useFetchPokes from "../hooks/useFetchPokes";
import PokeList from "./PokeList";
import MyPokeCard from "./MyPokeCard";

const PokemonBrowserPage = () => {
  const [limit, setLimit] = React.useState(40);
  const [pokes] = useFetchPokes(limit);
  const [term, setTerm] = React.useState("");
  const [searchList, setSearchList] = React.useState(undefined);
  const [message, setMessage] = React.useState(undefined);

  React.useEffect(() => {
    if (!term.trim()) {
      setMessage(undefined);
      return setSearchList(undefined);
    }
  }, [term]);

  const onSearchSubmit = () => {
    if (!term.trim()) return;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`)
      .then((res) => {
        setSearchList([res.data]);
        setMessage(undefined);
      })
      .catch((e) => {
        console.log(e);
        setMessage("Pokemon does not found!");
      });
  };

  if (!pokes) return null;

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setLimit(limit + 5);
    }
  };

  console.log(searchList);

  return (
    <div className="pokemon-browser-page">
      <div className="input-container">
        <input
          value={term}
          placeholder="Find Pokemon..."
          onChange={(e) => setTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.which == 13 || e.keyCode == 13) {
              onSearchSubmit(term);
            }
          }}
        />
        {message && <p className="message">{message}</p>}
      </div>
      <h2>Pokemons</h2>
      <div className="poke-card-list">
        {searchList
          ? searchList.map((poke, index) => {
              return (
                <MyPokeCard pokeDetails={poke} isSearch={true} key={index} />
              );
            })
          : pokes.map((poke, index) => {
              return <PokeCard poke={poke} key={index} />;
            })}
      </div>
    </div>
  );
};

export default PokemonBrowserPage;
