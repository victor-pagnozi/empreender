import React from "react";
import logo from "../../assets/images/logo.jpg"
import { Link } from "react-router-dom";
import { Container } from "./styles";

function NavBar() {
  return (
    <Container>
      <Link className="logo" to="/"><img src={logo} alt="Logo do Site"/></Link>
      <Link>Teste</Link>
      <Link>Teste</Link>
      <Link>Teste</Link>
    </Container>
  );
}

export default NavBar;
