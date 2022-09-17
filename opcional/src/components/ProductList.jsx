import React, { useEffect,useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductsByCategories } from "../data/MELI_API";
import Product from "./Product";

export default function ProductList() {
    const { idCategoria } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoad] = useState(true)

    useEffect( () => {
        getProductsByCategories(idCategoria)
        .then( productList => {
            setProducts(productList)
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
        <Link to={"/categorias"}>Volver</Link>
        <section>
            <ul className="productList">
                { products.map( p => <Product key={p.id} {...p} /> )}
            </ul>
        </section>
        </>
    )
}