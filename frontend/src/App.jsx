import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/main/NavBar'
import Angebote from './pages/Angebote'
import Mietverträge from './pages/Mietverträge'
import Rechnungen from './pages/Rechnungen'
import Vorlagen from './pages/Vorlagen'
import Statistik from './pages/Statistik'
import Einstellungen from './pages/Einstellungen'
import Email from './pages/Email'
import BelegungsPlan from './pages/BelegungsPlan'
import Buchungsübersicht from './pages/Buchungsübersicht'
import Netzwerk from './pages/Netzwerk'
import Kundenstamm from './pages/Kundenstamm'


function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<BelegungsPlan />} />
          <Route path='/angebote' element={<Angebote />} />
          <Route path='/mietverträge' element={<Mietverträge />} />
          <Route path='/rechnungen' element={<Rechnungen />} />
          <Route path='/vorlagen' element={<Vorlagen />} />
          <Route path='/statistik' element={<Statistik />} />
          <Route path='/einstellungen' element={<Einstellungen />} />
          <Route path='/email' element={<Email />} />
          <Route path='/belegungsplan' element={<BelegungsPlan />} />
          <Route path='/buchungen' element={<Buchungsübersicht />} />
          <Route path='/netzwerk' element={<Netzwerk />} />
          <Route path='/kunden' element={<Kundenstamm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
