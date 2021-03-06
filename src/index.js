import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* BASE CSS START */
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 1.6rem;
    line-height: 3rem;
    color: #fff;
    background-color: #444;
    margin: auto;
    text-shadow: 1px 1px 2px #000;
  }

  h1,h2,h3,h4,h5,h5 {
    font-weight: 700;
  }

  h1 {
    font-size: 8rem;    
    margin: 2% 2%;
  }

  h2, h3{
    font-size: 1.8rem;
    margin: 0.25% 0;
  }

  a {
    color: #fff;
    &:hover {
      color: #777;
    }
    text-decoration: none;
  }

  p {
    margin-bottom: 2%;
  }

  label {
    font-size: 2rem;
  }

  input {
    width: 50%;
    border: 0px solid #000;
    border-radius: 4px;
    margin-bottom: 2%;
    padding: 1%;
  }

  

  @media (max-width: 1400px) {
    body{
      font-size: 1.4rem;
    }
    h1{
      font-size: 4rem;
    }
    h2{
      font-size: 1.2rem;
    }
    label {
      font-size: 2rem;
    }
  }
  @media (max-width: 700px) {
    body{
      font-size: 1.2rem;
      line-height: 1rem;
    }
    h1{
      font-size: 4rem;
      line-height: 4rem;
    }
    h2{
      font-size: 1.2rem;
    }
    label {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 500px) {
    body{
      font-size: 1rem;
      line-height: 1rem;
    }
    h1{
      font-size: 4rem;
      line-height: 3.5rem;
    }
    h2{
      font-size: 1rem;
      line-height: 1.5rem;
    }
    label {
      font-size: 1rem;
    }
  }
`;



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
