import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
    return (
      <div className="App">
        <Header/>
        <main className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </main>
        <Footer/>
      </div>
    );
}