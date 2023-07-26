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
      
    
    => nach jedem abschlossenen Jahr
        -- save all bookings to pdf file
        -- save to unique local folder (i.e "Bookings 2023")

