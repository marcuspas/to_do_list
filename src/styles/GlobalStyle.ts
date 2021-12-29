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

  h1 {
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const styles = {
  button: {
    display: "inline-block",
    background: "transparent",
    font: "inherit",
    border: 0,
    outline: 0,
    padding: 0,
    transition: "all 200ms ease-in",
    cursor: "pointer",
    color: "#fff",
    "box-shadow": "0 6px 10px 0 rgba(0, 0, 0, 0.1)",
    "border-radius": "2px",
  },
  button_add: {
    background: "#7f8ff4",
    padding: "22px 15px",
    "margin-left": "0",
  },
  button_checkbox: {
    "margin-top": "10px",
    height: "50px",
    width: "50px",
    background: "#89f885",
    padding: "0px 15px",
    "font-size": "20px",
    "margin-left": "0",
  },
  button_delete: {
    "margin-top": "10px",
    height: "50px",
    width: "50px",
    background: "#fa5656",
    padding: "0px 15px",
    "font-size": "20px",
    "margin-left": "0",
  },
  container: {
    display: "flex",
    "justify-content": "center",
    "align-items": 'center'
  },
  section: {
    width: "320px",
    background: "#fff",
    color: "#000000",
    font: "inherit",
    "box-shadow": "0 6px 10px 0 rgba(0, 0, 0, 0.1)",
    border: 0,
    outline: 0,
    "border-radius": "2px",
    padding: "22px 18px",
    "line-height": "8px",
  },
  todo_item: {
    "margin-top": "10px",
    height: "50px"
  },
}

