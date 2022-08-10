import React from "react"

export default function ({ props }) {
    return (
        <div>
            <h2>Nombre: { props.nombre }</h2>
            <ul>
                <li>Edad: <span>{ props.edad }</span></li>
                <li>Sexo: <span>{ props.sexo }</span></li>
                <li>Raza: <span>{ props.raza }</span></li>
                <li>Tamaño: <span>{ props.tamanio }</span></li>
            </ul>
        </div>
    )
}