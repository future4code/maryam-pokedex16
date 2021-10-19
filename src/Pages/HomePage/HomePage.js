import React from "react";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData";
import PokeCard from "../../components/PokeCard/PokeCard";
import { BASE_URL } from "../../constantes/url";

const HomePage = () => {
  const pokeData = useRequestData({}, `${BASE_URL}/pokemon?limit=0&offset=0`);
  console.log(pokeData);

  const getAllPokemons =
    pokeData.results &&
    pokeData.results.map((item, index) => {
      // const pokeImg = useRequestData({}, pokeData[index]);
      // console.log(pokeImg);
      return (
        <div key={index}>
          <p>name={item.name}</p>
          {/* <img src={item.url.sprites.front_default} /> */}
        </div>
      );
    });

  return (
    <div>
      <Header />
      <PokeCard />
      {getAllPokemons}
    </div>
  );
};

export default HomePage;
