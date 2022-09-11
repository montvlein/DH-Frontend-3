import React, { useState } from 'react'
import "../styles/Search.css"
import items from "../items.json"
import { useNavigate } from 'react-router-dom'

export default function Search() {
    const [inputValue, setInputValue] = useState("")
    let navigate = useNavigate()

    // Funcion que actualiza el estado del input
    const handleChange = (event) => setInputValue(event.target.value);

    // ESPACIO DE TRABAJO (Usar withRouter en el archivo Navbar.jsx antes de trabajar aqui)
    const handleSubmit = () =>  {
        if(inputValue) {
            // Filtramos nuestro arreglo de items y vemos si alguno incluye el inputValue
            const item = items.filter( product => product.name.includes(inputValue));
            // variable que utilizaremos para ir a la ruta del producto (/product/urlItem)
            const urlItem = item[0] ? `/product/${item[0].name}` : "not-found";
            navigate(urlItem, { replace: true })
        }

        // Si no hay input, que la pagina te lleve a la Home
        if(!inputValue) navigate("", { replace: true })
    };

    return (
        <div className="search__container">
            <input onChange={handleChange} type="text" value={inputValue} />
            <button onClick={handleSubmit}><img width="12px" src="/images/lupa.png" alt="lupa" /></button>
        </div>
    )
}
