import React, { useEffect,useState } from "react";
import { getCategories } from "../data/MELI_API";
import CategoriaDetail from "./Categoria";

export default function ProductList() {
    const [cat, setCat] = useState([])
    const [loading, setLoad] = useState(true)

    useEffect( () => {
        getCategories()
        .then( categories => {
            setCat(categories)
            setLoad(false)
        })
    }, [])

    if (loading) {
        return(
            <>
            <figure>
                <img src="" alt="loading..." />
                <figcaption>Cargando...</figcaption>
            </figure>
            </>
        )
    }

    return(
        <>
        <ul className="productList">
            { cat.map( c => <CategoriaDetail key={c.id} {...c} /> )}
        </ul>
        </>
    )
}