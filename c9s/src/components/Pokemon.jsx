import React, { useEffect, useState } from "react"
import { getPokemon } from "../data/pokemons";

export default function ({ name, id }) {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({name, id})
    useEffect( ()=>{
        getPokemon(id)
        .then(pokemon => {
            setPokemon(pokemon)
            setIsLoading(false)
        })
        .catch(err => console.error(err))
    }, [] )
    if (isLoading) {
        return(
            <div>
                <h3>{name}</h3>
                <ul>
                    Cargando...
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <h3>{pokemon.id}. {pokemon.name}</h3>
                    <figure>
                        <img src={pokemon.sprites.front_default} alt={id} />
                    </figure>
                    <ul>
                        {pokemon.types.map((t, index) => <li key={index} >{t.type.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}