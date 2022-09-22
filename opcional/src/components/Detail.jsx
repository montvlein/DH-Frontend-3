import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Context from "../Context/AppContext";
import { getProductById } from "../data/MELI_API";


export default function Detail() {
    const { idCategoria, id } = useParams()
    const [producto, setProducto] = useState({})
    const [loading, setLoad] = useState(true)
    const { addFavorito } = useContext(Context)

    useEffect(()=>{
        getProductById(id)
        .then( (p)=> {
            setProducto(p)
            setLoad(false)
        })
    }, [id])

    if (loading) {
        return(
            <>
        <Link to={`/categorias/${idCategoria}/productos`}>Volver</Link>
        <p>Cargando</p>
        </>
    )
    }

    return(
        <Fragment>
            <Link to={`/categorias/${idCategoria}/productos`}>Volver</Link>
            <section>
            <h5>Detalle del Producto</h5>
            <h3>{producto.title}</h3>
            <p>$ {producto.price}</p>
            <button onClick={()=>{ addFavorito(producto, `/categorias/${idCategoria}/productos/${id}`)}}>Agregar a favoritos</button>
            <div>
                {producto.pictures && producto.pictures.map( (imagen) => <img key={imagen.id} src={imagen.secure_url} alt={imagen.id} />)}
            </div>
            </section>
        </Fragment>
    )
}