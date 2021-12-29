import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 3rem;
    background-color: #e4e9ff;
  }

  h1,
  h2,
  h3,
  form {
    color: #333333;
    text-align: center;
  }

  .card {
    margin: auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: 25rem;
    transition: all 200ms ease-in;
  }

`

