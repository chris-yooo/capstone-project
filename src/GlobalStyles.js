import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 62.5%;
    /* 1rem = 10px | 1.6rem = 16px */
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', arial;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
