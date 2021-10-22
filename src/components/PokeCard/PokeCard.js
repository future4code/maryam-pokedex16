import { useHistory } from "react-router";
import {
  BtnDetails,
  CardContainer,
  PokeImage,
  PokeName,
  BtnContainer,
  BtnPokedex,
} from "./styled";

import { goToDetailPage } from "../../Router/Coordinator";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constantes/url";

const PokeCard = (props) => {
  const history = useHistory();
  const pokeImg = useRequestData("", `${BASE_URL}/pokemon/${props.name}`);
  //console.log(props);

  return (
    // <ContextPoke.Provider>
    <CardContainer>
      <PokeImage
        alt={props.name}
        src={pokeImg ? pokeImg.sprites.front_default : <p>Carregando...</p>}
      />
      <PokeName>{props.name}</PokeName>
      <BtnContainer>
        <BtnPokedex onClick={props.addToPokedex}>
          Adicionar a Pokédex
        </BtnPokedex>
        <BtnDetails onClick={() => goToDetailPage(history, props.name)}>
          Sobre este Pokémon
        </BtnDetails>
      </BtnContainer>
    </CardContainer>
  );
};

export default PokeCard;
