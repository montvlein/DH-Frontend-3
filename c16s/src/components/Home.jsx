import { Routes, Route } from 'react-router-dom'

import Perros from './Perros'
import Gatos from './Gatos'

export default function Home() {
    return(<>
    <Routes>
      <Route path='/guaguau' element={<Perros/>}></Route>
      <Route path='/miaumiau' element={<Gatos/>}></Route>
    </Routes>
    </>)
  }