import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo2.png";
import Button from "../Button";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" alt="BlackoutFlix Logo" src={Logo}></img>
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
