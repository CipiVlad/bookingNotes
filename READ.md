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
                        -- Startseite wählen
                        -- Zimmeranzahl, Preise editieren
                        -- Passwörter, Email editieren
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
                + main
                    -- NavBar.jsx
                    -- SideBar.jsx
                    -- UsersView.jsx
                + dashboard
                    -- DateView.jsx
                    -- RoomView.jsx
                + angebote
                + mietverträge
                + rechnungen
                + vorlagen
                + statistik
            +   pages
                -- WelcomePage.js
                -- Registration.js
                -- Login.js
                -- Dashboard.js
                -- Einstellungen.js
                -- Buchungsübersicht.js
                -- Email.js
                -- Netzwerk.js
                -- Kundenstamm.js
                -- Angebote.js
                -- Mietverträge.js
                -- Rechnungen.js
                -- Vorlagen.js
                -- Statistik.js

    => NPM - Dependencies
        -- react-router-dom
        -- react-redux
        -- @redux-tools/react
        -- toastify
        -- @mui/x-data-grid
        -- @mui/material @emotion/react @emotion/styled
        -- @mui/icons-material