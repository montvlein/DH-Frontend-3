import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Perros from './components/Perros'
import Gatos from './components/Gatos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <hr/>
      <main>
      ✨tenemos✨
      </main>
      <Routes>
      <Route path='/'></Route>
      <Route path='guaguau' element={<Perros/>}></Route>
      <Route path='miaumiau' element={<Gatos/>}></Route>
      </Routes>
    </div>
  )
}

export default App