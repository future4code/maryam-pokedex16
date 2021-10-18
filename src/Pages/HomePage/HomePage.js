import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import { BtnDetails } from "./styled";
import { goToDetailPage } from "../../Router/Coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <Header />

      <div>
        <img />

        <div>
          <button>Adicionar a Pokédex</button>
          <BtnDetails onClick={() => goToDetailPage(history)}>
            Sobre este Pokémon
          </BtnDetails>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
