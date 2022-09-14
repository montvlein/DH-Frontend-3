import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import './styles/App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root')
);

function App() {
    return (
      <>
        <Header/>
        <main className='container'>
          <nav>
            <NavLink to="/index">Info</NavLink>
            <NavLink to="product/">Productos</NavLink>
          </nav>
          <Routes>
            <Route exact path="/" element={<Info/>} />
            <Route exact path="/index" element={<Info/>} />
            <Route path="/product/" element={<ProductList/>} />
            <Route path="/product/:id" element={<Detail/>} />
            <Route path="*" element={<h2>Not Found</h2>} />
          </Routes>
        </main>
        <Footer/>
      </>
    );
}