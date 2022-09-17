import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
    const { title, currency_id, price, permalink, thumbnail, id } = props

    return(
        <article>
            <figure>
                <img src={thumbnail} alt="imagen del producto" />
            </figure>
            <h3>{ title }</h3>
            <p>{ currency_id } { price }</p>
            <Link to={`${id}`}>ver +</Link>
            <a href={permalink}>Ver en MercadoLibre</a>
        </article>
    )
}