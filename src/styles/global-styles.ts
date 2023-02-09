import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
  
  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
