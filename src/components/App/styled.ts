import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 320px;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
  #root{
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
