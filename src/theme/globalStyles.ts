import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: Poppins !important;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;

  }

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    min-height: 100%;
    max-width: 100%;
    display: flex;
    flex: 1;
    align-items: stretch;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  h1 { margin: 0; font-size: 2.1rem; font-weight: bold; }
  h2 { margin: 0; font-size: 1.8rem; font-weight: bold; }
  p { margin: 0; }


  #root {
    display: flex;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyles;
