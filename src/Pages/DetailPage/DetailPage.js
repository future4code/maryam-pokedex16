import React from "react";
import { Titulo, OnCard, Card1, Card2, Card3, Card4 } from "./styled";

const DetailPage = () => {
  return (
    <div>
      <Titulo>Detalhes</Titulo>
      <BotaoVoltar onClick={() => this.props.changePage("PokedexPage")}>Voltar para Pokedex</BotaoVoltar>
      <div>
        <OnCard>
          Imagens
          {/* <Card1>
            <img></img>
          </Card1> */}

          <Card2>
            Eu sou uma imagem
            <img></img>
          </Card2>
        </OnCard>

        <Card3>Poderes</Card3>

        <Card4>
          <h2></h2>
          <div>Principais Ataques</div>
        </Card4>
      </div>
    </div>
  );
};

export default DetailPage;