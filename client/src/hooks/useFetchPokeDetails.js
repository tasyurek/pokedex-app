import React from "react";
import axios from "axios";

export default (url) => {
  const [pokeDetails, setPokeDetails] = React.useState(undefined);

  const fetchPokeDetails = () => {
    axios
      .get(url)
      .then((res) => setPokeDetails(res.data))
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    fetchPokeDetails();
  }, []);

  return [pokeDetails];
};
