import React from "react";
import styles from '../styles/title.module.css'

export default function Title({ title }) {
    return (<h1 className={ styles.titulo }>{ title }</h1>)
}
