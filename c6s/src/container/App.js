import React, { Component } from 'react';
import '../styles/App.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

let datos = [
  {nombre:"Nicolas", estaEnLista:true, tarea:"papas fritas"},
  {nombre:"Ivan", estaEnLista:false, tarea:"pizzas"},
  {nombre:"Carolina", estaEnLista:true, tarea:"bebidas"},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Invitados:</h3>
        { datos.map( d => <ClassComponent nombre={d.nombre} estaEnLista={d.estaEnLista}/>) }
        <h3>Tareas: </h3>
        { datos.map( d => <FunctionComponent nombre={d.nombre} tarea={d.tarea}/>) }
      </div>
    );
  }
}

export default App;
