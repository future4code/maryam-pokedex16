import React from "react";
import { BtnDetails, PokeImage } from "../PokeCard/styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constantes/url";

import {
  CardContainer,
  PokeName,
  BtnContainer,
  BtnRemove,
} from "../PokedexCard/styled";

const PokedexCard = (props) => {
  const pokeImg = useRequestData("", `${BASE_URL}/pokemon/${props.name}`);

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
        <BtnDetails>Detalhes</BtnDetails>
      </BtnContainer>
    </CardContainer>
  );
};

export default PokedexCard;
