import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Header  from './components/Header'
import Footer from './components/Footer'
// export default App;  // exportar de forma individual
// export { App as default } // exportar como un conjunto

export default function App() { // exportar funcion de forma individual
  return (
      <div className="App">
        <Header title="titulo"/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
  );
}


