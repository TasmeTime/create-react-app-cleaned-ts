import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GS = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    /* transition: all 0.1s ease-out; */
  }

  html{
    font-family: 'Poppins', sans-serif;
  }

  a{
    color:inherit;
  }
  
`;

ReactDOM.render(
  <React.StrictMode>
    <GS />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
