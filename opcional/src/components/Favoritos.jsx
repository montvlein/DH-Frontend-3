import React, { useContext } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Context from "../Context/AppContext";

export default function Fav() {
    const { getFavoritos } = useContext(Context)

    return(
        <Fragment>
            <details>
                <summary>💟 favoritos</summary>
                <ul>
                    { getFavoritos().map(p => <li key={p.id}><Link to={p.url}>{p.title}</Link></li>)}
                </ul>
            </details>
        </Fragment>
    )
}