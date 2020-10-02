import React from "react";
import axios from "axios";

export default (url) => {
  const [statDetails, setStatDetails] = React.useState(undefined);

  const fetchStatDetails = () => {
    axios
      .get(url)
      .then((res) => setStatDetails(res.data.affecting_moves.decrease))
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    fetchStatDetails();
  }, []);

  return [statDetails];
};
