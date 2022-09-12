import React, { useState, useEffect, useContext } from 'react'
import "../styles/Product.css"
import items from "../items.json"
import { Link, useParams } from 'react-router-dom'
import Context from '../Context/CartContext'

export default function Product() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const { agregarAlCarrito } = useContext(Context)

    useEffect(()=>{
        componentDidMount()
    }, [])

    function componentDidMount() {
        const item = items.filter(item => item?.name === params.product);
        setProduct(item)
        setLoading(false)
    }

    function componentWillReceiveProps(nextProps){
        // ESPACIO DE TRABAJO
        /* componentWillReceiveProps se ejecuta cuando cambia nuestras props, es decir,
        que si en el search buscamos otra palabra, este deberia actualizar nuesto componente
        Product.jsx
        Deberan hacer 3 cosas:
        1) OBtener el valor del parametro
        2) filtrar de nuestro arreglo items con el nombre
        3) actualziar nuestro estado
        */
    }

    if (loading) return <p>Loading...</p>;
    if (!product.length) return <p>Product not Found</p>

    return (
        <>
        <Link to={"/"}>Volver</Link>
        <div className="product__container">
            <p id="home__title">{product[0]?.name}</p>
            <img id="product__image" src={`/images/${product[0].id}.png`} alt={product[0].name} />
            <p>${product[0].price}</p>
            <p id="product__desc">{product[0].description}</p>
            <button onClick={(event) => {
                agregarAlCarrito(product[0]?.name)
                } }>Agregar al carrito</button>
        </div>
        </>
    )
}


