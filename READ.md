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
        -- @mui/material @emotion/react @emotion/styled
        -- @mui/icons-material
        -- npm install --save lexical @lexical/react


# notes: 
    
    => für die Textbearbeitung in den Vorlagen:
        -- npm install --save lexical @lexical/react
        lexical ist ein Texteditor von Meta, kompatibel mit React und erleichtert die Textverarbeitung
        https://lexical.dev/docs/getting-started/react
        https://www.youtube.com/watch?v=qIqxvk2qcmo
    
    => nach jedem abschlossenen Jahr
        -- save all bookings to pdf file
        -- save to unique local folder (i.e "Bookings 2023")

