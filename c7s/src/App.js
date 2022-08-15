import React, { Component } from 'react';
import Titulo from "./components/titulo"

const titulos = ["HOLA", "HOLA", "HOLA", "MUNDO"]

class App extends Component {
  render() {
    return (
      <div>
        { titulos.map( (t, index) => <Titulo title={ t } key={ index }/>)}
      </div>
    );
  }
}


export default App;
