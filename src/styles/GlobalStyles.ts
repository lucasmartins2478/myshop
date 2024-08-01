import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  body{
    background-color: #c5c5c5;
  }
  button{
    cursor: pointer;
  }
`