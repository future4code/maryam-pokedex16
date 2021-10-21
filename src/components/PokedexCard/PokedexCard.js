import React from "react";
import { BtnDetails, PokeImage } from "../PokeCard/styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constantes/url";
import { useHistory } from "react-router";
import { goToDetailPage } from "../../Router/Coordinator";

import {
  CardContainer,
  PokeName,
  BtnContainer,
  BtnRemove,
} from "../PokedexCard/styled";

const PokedexCard = (props) => {
  const pokeImg = useRequestData("", `${BASE_URL}/pokemon/${props.name}`);
  const history = useHistory();

  return (
    <CardContainer>
      <PokeImage
        alt={props.name}
        src={pokeImg ? pokeImg.sprites.front_default : <p>Carregando...</p>}
      />
      <PokeName>{props.name}</PokeName>
      <p>Quantidade: {props.amount}</p>
      <BtnContainer>
        <BtnRemove onClick={props.onClickBuy}>Remover</BtnRemove>
        <BtnDetails onClick={() => goToDetailPage(history, props.name)}>
          Detalhes
        </BtnDetails>
      </BtnContainer>
    </CardContainer>
  );
};

export default PokedexCard;
