import React, { useState } from "react";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData";
import PokeCard from "../../components/PokeCard/PokeCard";
import { BASE_URL } from "../../constantes/url";
import { PageCard } from "./styled";
import { goToPokedexPage } from "../../Router/Coordinator";

const HomePage = () => {
  const [pokedex, setPokedex] = useState([]);

  const pokeData = useRequestData({}, `${BASE_URL}/pokemon?limit=0&offset=0`);
  //console.log(pokeData);

  const addToPokedex = (poke) => {
    const position = pokedex.findIndex((item) => {
      return poke.name === item.name;
    });

    const newPokedex = [...pokedex];
    if (position === -1) {
      newPokedex.push({ ...poke, amount: 1 });
      alert(`Pokemon ${poke.name} adicionado`);
      setPokedex(newPokedex);
      localStorage.setItem("pokedexKey", JSON.stringify(pokedex));
    } else {
      newPokedex[position].amount += 1;
      alert(`Pokemon ${poke.name} adicionado novamente`);
      setPokedex(newPokedex);
      localStorage.setItem("pokedexKey", JSON.stringify(pokedex));
    }
  };

  const getAllPokemons =
    pokeData.results &&
    pokeData.results.map((item, index) => {
      return (
        <PokeCard
          key={index}
          name={item.name}
          url={item.url}
          addToPokedex={() => addToPokedex(item)}
        />
      );
    });

  return (
    <div>
      <Header Text={"ir para pokedex"} Function={goToPokedexPage} />
      <PageCard>{getAllPokemons}</PageCard>
    </div>
  );
};

export default HomePage;
