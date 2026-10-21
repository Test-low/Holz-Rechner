HOLZWERK – KUBIKMETER-RECHNER FÜRS HANDY
========================================

SOFORT ANSEHEN
- index.html im Browser öffnen (am PC direkt möglich).
- Maße, Einheiten und Stückzahl eingeben; mehrere Positionen addieren.
- Für den dauerhaften Zugriff vom Handy empfiehlt sich die Bereitstellung auf einer Website.

ONLINE STELLEN
- Alle Dateien inklusive "icons"-Ordner auf einen Webserver mit HTTPS hochladen.
- index.html ist der Einstieg. Alle Pfade sind relativ, die App kann auch in einem Unterordner liegen.
- Alternativ statisches Hosting wie GitHub Pages nutzen.
- Über "Zum Startbildschirm hinzufügen" lässt sich die Website wie eine App starten.
- Nach dem ersten erfolgreichen Laden bleibt die Seite dank Service Worker auch offline verfügbar.
- Ein reiner lokaler Dateiaufruf (file://) unterstützt Service Worker auf Handys normalerweise nicht.

DATEN
- Alle Positionen werden nur lokal im jeweiligen Browser gespeichert (localStorage).
- Kein Konto, kein Backend, keine externe Bibliothek, keine Datenübertragung durch die App.
- Browserdaten löschen oder ein anderes Gerät nutzen = dort sind die Positionen nicht vorhanden.

BERECHNUNG
m³ = Stärke in m × Breite in m × Länge in m × Stückzahl
Beispiel: 60 mm × 120 mm × 4,5 m × 10 = 0,3240 m³

ENTHALTEN
- index.html: komplette Benutzeroberfläche und Rechner
- manifest.webmanifest + icons: Installation zum Startbildschirm
- sw.js: Offline-Verfügbarkeit nach Laden per HTTPS
- CSV-Export; Drucken / als PDF speichern; Hell-/Dunkelmodus
