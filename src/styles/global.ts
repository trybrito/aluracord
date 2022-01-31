import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url("../assets/background.jpg")
    color: #e1e1e6;
    font: 400 1rem "Roboto", sans-serif;
  }
`;
