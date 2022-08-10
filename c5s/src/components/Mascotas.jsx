import React from "react"

export default function ({ nombre, edad, sexo, raza, tamanio }) {
    return (
        <div>
            <h2>Nombre: { nombre }</h2>
            <ul>
                <li>Edad: <span>{ edad }</span></li>
                <li>Sexo: <span>{ sexo }</span></li>
                <li>Raza: <span>{ raza }</span></li>
                <li>Tamaño: <span>{ tamanio }</span></li>
            </ul>
        </div>
    )
}
