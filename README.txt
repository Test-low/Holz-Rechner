HOLZOPTIX MOBIL – KUBIKMETER-SCHNELLERFASSUNG V2.1

GitHub Pages aktualisieren:
1. ZIP auf dem PC entpacken.
2. Alle Dateien (index.html, sw.js, manifest.webmanifest,
   aktualisieren.html, icons/) in das HAUPTVERZEICHNIS des
   bestehenden GitHub-Pages-Repositories hochladen und alte ersetzen.
3. Commit changes bestätigen.
4. GitHub Pages auf dem Handy erneut öffnen.
   Wenn die alte Version im Offline-Cache ist: /aktualisieren.html aufrufen.

Schnellerfassung:
- Auftrag/Holzart einmal eintragen, z.B. Eiche Wurm
- Je Längenreihe Länge in Metern und Stärke in mm eingeben
- Breiten in Zentimetern einfach eintippen, z.B. 40, 30, 25, 30, 40, 40, 40
- Breiten können mit Komma, Leerzeichen, / oder ; getrennt werden.
- 40x3 entspricht drei Bohlen mit 40 cm Breite.
- Breiten mit Dezimalstelle mit Punkt eingeben, z.B. 32.5
- Für eine weitere Länge + Nächste Länge erfassen wählen.
- Alternativ ganze Zeilen wie '4,50 x 40 / 30 / 25' einfügen.
- Die Summen verändern sich sofort beim Tippen.

Die Daten bleiben lokal im Browser. Die App übernimmt bei der ersten
Benutzung vorhandene Einzelpositionen der HolzOptiX- und älteren
HolzWerk-Kubikmeter-Version. Die alten Daten werden NICHT gelöscht.

WICHTIG: Nicht auf unterschiedlichen Geräten dieselbe lokale Liste erwarten;
für Übertragung JSON-Sicherung exportieren und importieren.

Wenn bei GitHub Pages die alten Daten nicht auftauchen, sicherstellen,
dass die URL (Domain/Repository-Pfad) gleich geblieben ist.

Druck / PDF (NEU):
- Die Eingabereihenfolge bleibt wie eingetippt.
- Für Druck/PDF werden Längen aufsteigend (kurz nach lang) sortiert.
- Bei gleicher Länge stehen die Breiten aufsteigend (schmal nach breit).
- Identische Länge, Breite, Stärke und Notiz werden zu einer Anzahl zusammengefasst.
- Die Kubikmeter je Maß und die Gesamtsumme werden im Ausdruck angezeigt.
- Die Druckfunktion funktioniert auch über das Browser-Menü / Strg+P.
- Die gespeicherten Eingaben und vorhandenen Sicherungen bleiben unverändert.

Dein bisheriger GitHub-Pages-Link bleibt unverändert:
https://test-low.github.io/Holz-Rechner/
