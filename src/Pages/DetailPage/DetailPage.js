import React from "react";
import { OnCard, Card2, Card3, Card4, Img } from "./styled";
import { useHistory, useParams } from "react-router";
import { goToPokedexPage } from "../../Router/Coordinator";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constantes/url";

const DetailPage = () => {
  const params = useParams();
  const history = useHistory();
  const poke = useRequestData("", `${BASE_URL}/pokemon/${params.pokeName}`);
  console.log(poke);

  const pokeAbilities = poke?.abilities?.map((item, index) => {
    return (
      <div key={index}>
        <p> {item.ability.name}</p>
      </div>
    );
  });

  const pokeType = poke?.types?.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.type.name}</p>
      </div>
    );
  });

  const pokeStats = poke?.stats?.map((item, index) => {
    return (
      <div key={index}>
        <p>
          {item.stat.name}: {item.base_stat}
        </p>
      </div>
    );
  })
  return (
    <div>
      <Header
        title="Detalhes"
        Text={"Ir para Pokédex"}
        Function={goToPokedexPage}
      />
      {/* <BotaoVoltar onClick={() => goToPokedexPage(history)}>
        Voltar para Pokedex
      </BotaoVoltar> */}
      <div>
        <OnCard>
          <Card2>
            <Img
              src={poke ? poke.sprites.front_default : <p>Carregando...</p>}
            />
            <Img
              src={poke ? poke.sprites.back_default : <p>Carregando...</p>}
            />
          </Card2>

          <Card3>
            <h3>Tipos: </h3>
            {pokeType}
            <h3>Habilidades: </h3>
            {pokeAbilities}
          </Card3>

          <Card4>
            <h3>Estatisticas: </h3>
            <div>{pokeStats}</div>
          </Card4>
        </OnCard>
      </div>
    </div>
  );
};

export default DetailPage;
