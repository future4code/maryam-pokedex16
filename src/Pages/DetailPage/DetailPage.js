import React from "react";
import {
  Titulo,
  OnCard,
  Card2,
  Card3,
  Card4,
  BotaoVoltar,
  Img,
} from "./styled";
import { useHistory } from "react-router";
import { goToPokedexPage } from "../../Router/Coordinator";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constantes/url";

const DetailPage = () => {

  const history = useHistory();
  const pokeImg = useRequestData("", `${BASE_URL}/pokemon/${4}`);
  console.log(pokeImg);

  // const poderesMap = pokeImg.map((item ) => { 
  //   return(
  //     <div>
  //       <p>{item.ability}</p>
  //     </div>
  //   )
  // })

  return (
    <div>
      <Titulo>Detalhes</Titulo>
      <BotaoVoltar onClick={() => goToPokedexPage(history)}>
        Voltar para Pokedex
      </BotaoVoltar>
      <div>
        <OnCard>
          
          <Card2>
            <Img
              src={
                pokeImg ? pokeImg.sprites.front_default : <p>Carregando...</p>
              }
            />
            <Img
              src={
                pokeImg ? pokeImg.sprites.back_default : <p>Carregando...</p>
              }
            />
          </Card2>

          <Card3>
          {/* <p>{poderesMap{pokeImg.abilities.ability}</p> */}
            {/* {poderesMap} */}
          </Card3>

          <Card4>
            <h2></h2>
            <div>Principais Ataques</div>
          </Card4>
        </OnCard>
      </div>
    </div>
  );
};

export default DetailPage;
