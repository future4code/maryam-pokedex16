import React from "react";
import { useHistory } from "react-router";
import { Div } from "./styled";
import { goToPokedexPage } from "../../Router/Coordinator";

const Header = () => {
  const history = useHistory();

  return (
    <Div>
      <h1>Lista de Pokémons</h1>

      <a onClick={() => goToPokedexPage(history)}>Ir para Pokédex</a>
    </Div>
  );
};

export default Header;
