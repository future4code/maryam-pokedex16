import React from "react";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData";
import PokeCard from "../../components/PokeCard/PokeCard";
import { BASE_URL } from "../../constantes/url";
import { PageCard } from "./styled";

const HomePage = () => {
  const pokeData = useRequestData({}, `${BASE_URL}/pokemon?limit=0&offset=0`);
  //console.log(pokeData);

  const getAllPokemons =
    pokeData.results &&
    pokeData.results.map((item, index) => {
      return (
        <PokeCard key={index} name={item.name} url={item.url} poke={item} />
      );
    });

  return (
    <div>
      <Header />
      <PageCard>{getAllPokemons}</PageCard>
    </div>
  );
};

export default HomePage;
