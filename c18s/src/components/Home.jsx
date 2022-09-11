import React from 'react'
import "../styles/Home.css"
import items from "../items.json"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home__container" >
            {items.map(item => (
                // ESPACIO DE TRABAJO
                <Link to={`/product/${item.name}`} key={item.id} className="home__product">
                    <p id="home__title">{item.name}</p>
                    <img id="home__image" src={`/images/${item.id}.png`} alt={item.name} />
                    <p>${item.price}</p>
                </Link>
            ))}
        </div>
    )
}
