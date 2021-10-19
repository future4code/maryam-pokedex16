import React from "react";
import { useHistory } from "react-router";
import { BtnDetails } from "./styled";
import { goToDetailPage } from "../../Router/Coordinator";

const PokeCard = () => {
  const history = useHistory();

  return (
    <div>
      <img alt="imagem do pokemon" />
      <p>Nome do Pokémon</p>
      <button>Adicionar a Pokédex</button>
      <BtnDetails onClick={() => goToDetailPage(history)}>
        Sobre este Pokémon
      </BtnDetails>
    </div>
  );
};

export default PokeCard;
