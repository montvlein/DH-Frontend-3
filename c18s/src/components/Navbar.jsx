import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
import Carrito from './Carrito.jsx'
import Search from './Search'

export default function Navbar() {
        /* ESPACIO DE TRABAJO
        Utilizar withRouter en el componente Search

        */
    return (
        <div className="navbar__container">
                <a className="link" href="/"><img width="128px"  src="./images/logo.png" alt="logo" /></a>
                <Carrito/>
                <Search />
                <Link to="/login" className="link">Login</Link>
        </div>
    )
}
