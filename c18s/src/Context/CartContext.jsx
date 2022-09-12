import { useState, createContext } from "react";

const Context = createContext()

export function ContextoDelCarrito({ children }) {
    const [cantidad, setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([])

    function agregarAlCarrito(producto) {
        carrito.push(producto)
        setCantidad(carrito.length)
    }

    function eliminarDelCarrito() {
        setCantidad(carrito.length - 1)
    }

    function vaciarCarrito() {
        setCantidad(0)
        setCarrito([])
    }

    function getCantidad() {
        return cantidad
    }

    function getCarrito() {
        return carrito
    }

    return(
        <Context.Provider value={{agregarAlCarrito, eliminarDelCarrito, getCantidad, getCarrito, vaciarCarrito}}>
            { children }
        </Context.Provider>
    )

}

export default Context;