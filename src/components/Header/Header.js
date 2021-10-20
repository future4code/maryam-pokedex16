import React from "react";
import { useHistory } from "react-router";
import { Div, IrPokedex } from "./styled";
import { goToPokedexPage } from "../../Router/Coordinator";

const Header = (props) => {
  const history = useHistory();

  return (
    <Div>
      <h2>Lista de Pokémons</h2>

      <IrPokedex onClick={() => props.Function(history)}>
        {props.Text}
      </IrPokedex>
    </Div>
  );
};

export default Header;
