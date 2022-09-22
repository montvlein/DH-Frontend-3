import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext()

export function AppContext({children}) {
    const [favoritos, setFavoritos] = useState([])

    function addFavorito(producto, url) {
        const item = {...producto, url}
        if (!favoritos.find( p => p.id === producto.id)) { setFavoritos([...favoritos, item]) }
    }

    function getFavoritos() {
        return favoritos
    }

    return (
        <Context.Provider value={{getFavoritos, addFavorito}}>
            {children}
        </Context.Provider>
    )
}

export default Context