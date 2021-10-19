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
import { useState } from "react";
import { ContextPoke } from "../../context/context";

const PokeCard = (props) => {
  const [pokedex, setPokedex] = useState([]);
  const history = useHistory();
  const pokeImg = useRequestData("", `${BASE_URL}/pokemon/${props.name}`);
  //console.log(pokeImg.sprites.front_default);

  const addToPokedex = (poke) => {
    const position = pokedex.findIndex((item) => {
      return poke.name === item.name;
    });

    const newPokedex = [...pokedex];
    if (position === -1) {
      newPokedex.push({ ...poke, amount: 1 });
      alert(`Pokemon ${poke.name} adicionado pela primeira vez`);
    } else {
      newPokedex[position].amount += 1;
      alert(`Pokemon ${poke.name} adicionado a pokedex ${poke.amount} vez`);
    }
    setPokedex(newPokedex);
    console.log("PokeCard", pokedex)
  };

  return (
    <ContextPoke.Provider value={pokedex}>
      <CardContainer>
        <PokeImage
          alt={props.name}
          src={pokeImg ? pokeImg.sprites.front_default : <p>Carregando...</p>}
        />
        <PokeName>{props.name}</PokeName>
        <BtnContainer>
          <BtnPokedex onClick={() => addToPokedex(props.poke)}>
            Adicionar a Pokédex
          </BtnPokedex>
          <BtnDetails onClick={() => goToDetailPage(history)}>
            Sobre este Pokémon
          </BtnDetails>
        </BtnContainer>
      </CardContainer>
    </ContextPoke.Provider>
  );
};

export default PokeCard;
