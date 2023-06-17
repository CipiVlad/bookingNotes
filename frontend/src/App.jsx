import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/main/NavBar'
import Angebote from './pages/Angebote'
import BelegungsPlan from './pages/BelegungsPlan'
// import Mietverträge from './pages/Mietverträge'
// import Rechnungen from './pages/Rechnungen'
// import Vorlagen from './pages/Vorlagen'
// import Statistik from './pages/Statistik'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/angebote' element={<Angebote />} />
        </Routes>
        <BelegungsPlan />
      </div>
    </Router>
  )
}

export default App
