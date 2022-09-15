import React, { useState, useEffect } from "react";
import { getCategoriDetail } from '../data/MELI_API'

export default function CategoriaDetail({ name, id }) {
    const [category, setCat] = useState({id, name})
    const [loading, setLoad] = useState(true)

    useEffect( () => {
        getCategoriDetail(id)
        .then( categories => {
            setCat(categories)
            setLoad(false)
        })
        .catch( err => {
            console.error(err)
            setLoad(true)
        }
        )
    }, [])

    if (loading) {
        return(
        <li className="card">
            <h4>{name}</h4>
        </li>
        )
    }

    return(
        <li className="card">
            <figure>
                <img src={category.picture} alt="💔" />
                <figcaption>
                    <h3>{category.name}</h3>
                </figcaption>
            </figure>
        </li>
    )
}