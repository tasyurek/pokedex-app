import React from "react";
import axios from "axios";

export default (limit) => {
  const [pokes, setPokes] = React.useState(undefined);

  const fetchPokes = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${0}`)
      .then((res) => setPokes(res.data.results))
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    fetchPokes();
  }, [limit]);

  return [pokes];
};
