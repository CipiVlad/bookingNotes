# DOC
@description:

web-application booking software 
# technologies
MERN-stack with redux and redux-toolkit

# frontend

    => UI/UX: Was sieht der User?
        +   Erstes Setup
            --  Wieviele Zimmer gibt es in deiner Unterkunft?
            --  Welchen Preis hat Zimmer Nr. ..?
            --  Wie lautet deine Rechnungsadresse?  
            --  Registrierung und Login
        +   Dashboard
            --  Suchen
            +   Menü - Sidebar
                -- Angebote
                -- Mietverträge
                -- Rechnungen
                -- Vorlagen
                -- Statistik
                -- info
                -- logout
            +   Navigationsleiste
                -- Back arrow
                -- Einstellungen
                -- Email
                -- Belegungsansicht
                -- Buchungsübersicht
                -- Netzwerk
                -- Kundenstamm
                -- Drucken
            +   Ansicht der User-Auswahl aus der Navigationsleiste 
                -- Back arrow 
                    --  geht einen Schritt zurück
                -- Einstellungen
                    --  Persönliche Daten
                    +   Präferenzeinstellungen
                        -- Light/Dark Modus
                        -- Startseite wählen (BelegungsPlan.jsx, Buchungsübersicht.jsx ...)
                        -- Zimmeranzahl, Preise editieren
                        -- Passwörter, Email editieren
                        -- Backup-Plan (jede Buchungsänderung wird in die Cloud geladen; alle 30 Tage ein locales Backup)
                        -- Account Löschen
                        -- Neuen Account anlegen
                        ...
                -- Email
                    -- Posteingang verbunden mit eigener Emailadresse
                    -- Postausgang
                -- Belegungsansicht
                    -- Zimmeranzahl mit Belegung/Verfügbarkeit
                -- Buchungsübersicht
                    -- Jahres-, Monats- und Tagesübersicht in Listenansicht
                -- Netzwerk
                    -- Partnerunterkünfte mit Kontaktdaten
                    -- Übersicht der Gästehaus-Platzierungen auf Social-Media, Inserierungen                
                -- Kundenstamm
                    -- Nur Kunden mit Buchungen 
                -- Drucken
                    -- Drucker
                    -- PDF 

    => Ordner-Struktur
        +   src
            +   components
                + api
                + auth
                + angebotsvorlagen
                + belegungsPlan
                + buchungsÜbersicht
                + mietvertragsvorlagen
                + main
                    -- NavBar.jsx
                    -- SideBar.jsx
                    -- UsersView.jsx
                + main
                + rechnungen
                + vorlagen
                + statistik
            +   pages
                + subpages
                    + vorlagen
                        -- Angebotsvorlage.jsx
                        -- AngebotsvorlagenEditor.jsx
                        -- Mietvertragsvorlage.jsx
                        -- MietvertragsvorlagenEditor.jsx
                        -- Rechnungsvorlage.jsx
                        -- RechnungsvorlagenEditor.jsx
                -- Angebote.jsx
                -- BelegungsPlan.jsx
                -- Buchungs_Bearbeitungs.jsx
                -- Buchungsübersicht.jsx
                -- Einstellungen.jsx
                -- Email.jsx
                -- Kundenstamm.jsx
                -- Login.jsx
                -- Dashboard.jsx
                -- Mietverträge.jsx
                -- Netzwerk.jsx
                -- Rechnungen.jsx
                -- Registration.jsx
                -- Statistik.jsx
                -- Vorlagen.jsx
                -- WelcomePage.jsx

    => NPM - Dependencies
        -- react-router-dom
        -- react-redux
        -- @redux-tools/react
        -- toastify
        -- @mui/material @emotion/react @emotion/styled
        -- @mui/icons-material
        -- npm install --save lexical @lexical/react


# notes: 
    
    => für die Textbearbeitung in den Vorlagen:
        -- npm install --save lexical @lexical/react
        lexical ist ein Texteditor von Meta, kompatibel mit React und erleichtert die Textverarbeitung
        https://lexical.dev/docs/getting-started/react
        https://www.youtube.com/watch?v=qIqxvk2qcmo

    => es braucht noch eine Option während der Buchungseingabe, um das gesamte Haus oder mehrere    Zimmer durch eine Partei/Person zu buchen. Möglicher Lösungsansatz: 

       <select>
        <option value="room1">Zimmer 1</option>
        <option value="room2">Zimmer 2</option>
        <option value="room3">Zimmer 3</option>
        <option value="guesthouse">Gesamtes Gästehaus</option>
      </select>

      Datenstruktur: 
       "bookings": 
            [{
                "id": 1
                "startDate": "2023-07-17",
                "endDate": "2023-07-19",
                "name": "Sally Dumars",
                "phoneNumber": "(01) 838 555 91",
                "emailAddress": "s.dumars@booked.com",
                "persons": "1",
                "price": "27",
                "room": 
                [
                    {
                        one:true
                    },
                    {
                        two:false
                    },
                    {
                        all:false
                    }
                ]
            }]

*** 
    ==> Lösungsansatz:
https://codesandbox.io/s/bookingnotes-checkbox-for-modal-vprsmg?file=/src/App.js

import { useState } from "react";

export default function App() {
  const [room1, setRoom1] = useState(false);
  const [room2, setRoom2] = useState(false);
  const [allRooms, setAllRooms] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [bookingData, setBookingData] = useState({
    id: "",
    name: "",
    room: [
      {
        number1: "",
        number2: "",
        allRooms: ""
      }
    ]
  });

  function handleSubmit(e) {
    e.preventDefault();
    bookings.push({
      id: Math.floor(Math.random() * 999),
      room: [
        {
          number1: room1,
          number2: room2,
          allRooms: allRooms
        }
      ],
      name: bookingData.name
    });
    console.log(bookings);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Room Number</h2>
        <label>1</label>
        <input
          type="checkbox"
          name="1"
          checked={room1 || allRooms}
          onChange={(e) => setRoom1(e.target.checked)}
        />
        <label>2</label>
        <input
          type="checkbox"
          name="2"
          checked={room2 || allRooms}
          onChange={(e) => setRoom2(e.target.checked)}
        />
        <label>all</label>
        <input
          type="checkbox"
          name="all"
          checked={allRooms}
          onChange={(e) => {
            setAllRooms(e.target.checked);
            setRoom1(e.target.checked);
            setRoom2(e.target.checked);
          }}
        />
        <input
          type="text"
          value={bookingData.name}
          onChange={(e) =>
            setBookingData({ ...bookingData, name: e.target.value })
          }
          required
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}



      
***    
    => nach jedem abschlossenen Jahr
        -- save all bookings to pdf file
        -- save to unique local folder (i.e "Bookings 2023")


***

    => redux Implementierung  
        + in welchen components wird der booking state verarbeitet?
          -- BelegungsPlan.jsx
          -- WeekDays.jsx
          -- WeeklyCalendar.jsx
          -- RoomLogic.jsx
          -- ÜbersichtsCard.jsx
          -- Buchungs_Bearbeitung.jsx
          -- Buchungsübersicht.jsx
          -- Kundenstamm.jsx