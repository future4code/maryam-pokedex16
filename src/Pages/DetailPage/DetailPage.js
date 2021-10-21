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
  const pokeImg = useRequestData("", `${BASE_URL}/pokemon/${params.pokeName}`);
  console.log(pokeImg);

  const poderesMap = pokeImg?.abilities?.map((item) => {
    return (
      <div>
        <p>{item.ability.name}</p>
      </div>
    );
  });

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

          <Card3>{poderesMap}</Card3>

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
