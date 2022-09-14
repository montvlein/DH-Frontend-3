import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

export default function Detail() {
    return(
        <>
        <Link to="/product">Volver</Link>
        <Product/>
        </>
    )
}