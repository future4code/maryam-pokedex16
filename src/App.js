import Router from "./Router/Router";
import { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import { ContextPoke } from "./context/ContextPoke";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #35b0e8;
    font-size: calc(2vmin + 4px);
  }

  button {
    cursor: pointer;
  }
`;

const App = () => {
  const [pokedex, setPokedex] = useState([]);

  return (
    <ContextPoke.Provider value={{ pokedex, setPokedex }}>
      <GlobalStyle />
      <Router />
    </ContextPoke.Provider>
  );
};

export default App;
