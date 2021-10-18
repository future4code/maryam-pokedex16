import Router from "./Router/Router";
import { createGlobalStyle } from "styled-components";

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
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
