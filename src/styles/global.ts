import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primaryColor: #060c21;
    --secondarybackgroundColor: #28262e;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 54%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #010615;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Kanit', serif;
    font-size: 17px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 600px) {
    body, input, button {
      font-size: 13px !important;
    }

    h1 {
      font-size: 30px !important;
    }
  }
`;
