import React, { useContext, useEffect, useState } from "react";
import { ContextPoke } from "../../context/context";
import PokedexCard from "../../components/PokedexCard/PokedexCard";
import Header from "../../components/Header/Header";
import { PageCard } from "./styled";
import { goToHomePage } from "../../Router/Coordinator";

const PokedexPage = () => {
  var storedPokedex = localStorage.getItem("pokedexKey");
  var pokedex = JSON.parse(storedPokedex);
  
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

    localStorage.setItem("pokedexKey", JSON.stringify(newpokedex));
    console.log(newpokedex);
  };
  const getAllPokemons = pokedex.length > "0" ? (
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
      <Header Text={"ir para Home"} Function={goToHomePage} />
      <PageCard>{getAllPokemons}</PageCard>
    </div>
  );
};

export default PokedexPage;
