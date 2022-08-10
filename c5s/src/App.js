import React from 'react';
import './App.css';
import Mascota from "./components/Mascotas"
import OtroComponente from './components/OtroComponente';

const mascotas = [
  {
    nombre: "dolly",
    edad: "21",
    sexo: "fem",
    raza: "caniche",
    tamanio: "pequenio"
  },
  {
    nombre: "noTengo",
    edad: "35",
    sexo: "indefinido",
    raza: "perro",
    tamanio: "mediano"
  },
  {
    nombre: "piru",
    edad: "12",
    sexo: "masc",
    raza: "golden",
    tamanio: "grande"
  },
  {
    nombre: "a",
    edad: "1",
    sexo: "fem",
    raza: "p",
    tamanio: "p"
  },
  {
    nombre: "b",
    edad: "2",
    sexo: "m",
    raza: "m",
    tamanio: "m"
  },
]

export default function () {
  return (
    <div className="App">
      <h1 className="App-header">Clientes caninos de Veterinaria</h1>
      <OtroComponente props={mascotas[0]}/>
      { mascotas.map( m => <Mascota nombre={m.nombre} edad={m.edad} sexo={m.sexo} raza={m.raza} tamanio={m.tamanio}/>)}
    </div>
  );
}
