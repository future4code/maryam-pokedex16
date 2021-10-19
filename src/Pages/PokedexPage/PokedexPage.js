import React, { useContext } from "react";
import { ContextPoke } from "../../context/context";

const PokedexPage = () => {
  const pokedex = useContext(ContextPoke);
  console.log(pokedex);
  return <div>PokedexPage</div>;
};

export default PokedexPage;
