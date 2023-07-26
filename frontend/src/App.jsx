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
import Buchungs_Bearbeitung from './pages/Buchungs_Bearbeitung'
import Mietvertragsvorlage from './pages/subpages/vorlagen/Mietvertragsvorlage'
import Angebotsvorlage from './pages/subpages/vorlagen/Angebotsvorlage'
import Rechnungsvorlage from './pages/subpages/vorlagen/Rechnungsvorlage'
import AngebotsvorlagenEditor from './pages/subpages/vorlagen/AngebotsvorlagenEditor'
import MietvertragsvorlagenEditor from './pages/subpages/vorlagen/MietvertragsvorlagenEditor'


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
          <Route path='/vorlagen/mietvertragsvorlage' element={<Mietvertragsvorlage />} />
          <Route path='/vorlagen/angebotsvorlage' element={<Angebotsvorlage />} />
          <Route path='/vorlagen/angebotsvorlageneditor/:id' element={<AngebotsvorlagenEditor />} />
          <Route path='/vorlagen/mietvertragsvorlageneditor/:id' element={<MietvertragsvorlagenEditor />} />
          <Route path='/vorlagen/rechnungsvorlage' element={<Rechnungsvorlage />} />
          <Route path='/statistik' element={<Statistik />} />
          <Route path='/einstellungen' element={<Einstellungen />} />
          <Route path='/email' element={<Email />} />
          <Route path='/buchungen' element={<Buchungsübersicht />} />
          <Route path='/edit/:id' element={<Buchungs_Bearbeitung />} />
          <Route path='/netzwerk' element={<Netzwerk />} />
          <Route path='/kunden' element={<Kundenstamm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
