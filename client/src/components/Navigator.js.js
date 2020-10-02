import React from "react";
import { Link, useHistory } from "react-router-dom";
import AppContainer from "./AppContainer";
import { ReactComponent as Logo } from "../assets/dragon-solid.svg";

const Navigator = (props) => {
  const history = useHistory();
  console.log(history);
  const gotoHome = () => {
    history.push("/");
  };

  return (
    <div className="navigator">
      <AppContainer>
        <div className="icon-container" onClick={gotoHome}>
          <Logo className="icon" />
          <p>Poke Store</p>
        </div>
        <Link to="/mypokes" className="nav-link">
          My Pokes
        </Link>
      </AppContainer>
    </div>
  );
};

export default Navigator;
