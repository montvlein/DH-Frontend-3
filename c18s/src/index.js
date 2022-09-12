import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextoDelCarrito } from './Context/CartContext'


ReactDOM.render(
  <React.StrictMode>
    <ContextoDelCarrito>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextoDelCarrito>
  </React.StrictMode>,
  document.getElementById('root')
);
