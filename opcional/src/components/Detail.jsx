import React from "react";
import { Link, useParams } from "react-router-dom";


export default function Detail() {
    const { idCategoria } = useParams()
    return(
        <>
        <Link to={`/categorias/${idCategoria}/productos`}>Volver</Link>
        <p>Texto</p>
        </>
    )
}