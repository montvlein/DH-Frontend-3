import React, { useEffect, useState } from "react";
import { queryProduct } from '../data/MELI_API'

export default function Buscador(){
    const [query, setQuery] = useState("")
    const [encontrados, setEncontrados] = useState([])

    useEffect(()=> {
        queryProduct(query)
        .then(resp => {
            setEncontrados(resp)
        })

    }, [query])

    function actualizar(event) {
        if (event.target.value.length > 3) {
            setQuery(event.target.value)
        }
    }

    return(
    <>
        <ul>
        { encontrados.map( (e, index) => { if (index<10) { return <li key={e.id}>{e.title}</li>} } ) }
        </ul>
        <input type="search" placeholder="Buscar por nombre de item" onChange={actualizar}/>
        <input type="submit" value="Buscar" />
    </>
    )
}