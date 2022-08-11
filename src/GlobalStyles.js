import {createGlobalStyle} from 'styled-components';

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
    background-color: #595959;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
