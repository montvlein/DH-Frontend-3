import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import CategoriaList from './components/CategoriaList';
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
            <NavLink to="categorias/">Productos por categoria</NavLink>
          </nav>
          <Routes>
            <Route exact path="/" element={<Info/>} />
            <Route exact path="/index" element={<Info/>} />
            <Route path="/categorias/" element={<CategoriaList/>} />
            <Route path="/categorias/:idCategoria/productos" element={<ProductList/>} />
            <Route path="/categorias/:idCategoria/productos/:id" element={<Detail/>} />
            <Route path="*" element={<h2>Not Found</h2>} />
          </Routes>
        </main>
        <Footer/>
      </>
    );
}