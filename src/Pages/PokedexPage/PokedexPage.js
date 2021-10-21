import React, { useContext, useEffect, useState } from "react";
import { ContextPoke } from "../../context/ContextPoke";
import PokedexCard from "../../components/PokedexCard/PokedexCard";
import Header from "../../components/Header/Header";
import { goToHomePage } from "../../Router/Coordinator";
import { PageCard } from "../HomePage/styled";

const PokedexPage = () => {
  const { pokedex, setPokedex } = useContext(ContextPoke);

  useEffect(() => {}, [pokedex]);

  const pokeRemove = (itemToRemove) => {
    const position = pokedex.findIndex((item) => {
      return item.id === itemToRemove.id;
    });

    let newpokedex = [...pokedex];

    if (newpokedex[position].amount === 1) {
      newpokedex.splice(position, 1);
    } else {
      newpokedex[position].amount -= 1;
    }
    setPokedex(newpokedex);
    //console.log(pokedex);
  };

  const getAllPokemons = pokedex ? (
    pokedex.map((item, index) => {
      return (
        <PokedexCard
          key={index}
          amount={item.amount}
          name={item.name}
          onClickBuy={() => pokeRemove(item)}
        />
      );
    })
  ) : (
    <p>Pokedex vazia</p>
  );

  return (
    <div>
      <Header Text={"Ir para Home"} Function={goToHomePage} title="Pokédex" />
      <PageCard>{getAllPokemons}</PageCard>
    </div>
  );
};

export default PokedexPage;
