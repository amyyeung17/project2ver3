import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from 'styled-components'
import App from './frontend/App'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Avenir
  };
  button {
    border-radius: .25rem;
  }
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter basename="/project2">
      <App />
    </BrowserRouter>
  </>
)