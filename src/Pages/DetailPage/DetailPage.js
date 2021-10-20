import React from "react";
import { Titulo, OnCard, Card1, Card2, Card3, Card4, } from "./styled";
import { goToPokedexPage } from "../../Router/Coordinator";
import { useHistory } from "react-router";
import { BotaoVoltar } from "./styled";


const DetailPage = () => {
  const history = useHistory();

  return (
    <div>
      <Titulo>Detalhes</Titulo>
      <BotaoVoltar onClick={() => goToPokedexPage(history)}>
        Voltar para Pokedex
        </BotaoVoltar>
      <div>
        <OnCard>
          {/* Imagens */}
          {/* <Card1>
            <img></img>
          </Card1> */}

          <Card2>
            
            <img></img>
          </Card2>
          <Card3>Poderes</Card3>

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