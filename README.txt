HOLZOPTIX MOBIL – KUBIKMETER-SCHNELLERFASSUNG V2.4

GitHub Pages bleibt unverändert:
https://test-low.github.io/Holz-Rechner/

UPDATE: ZIP entpacken. index.html, sw.js, manifest.webmanifest,
aktualisieren.html und den icons-Ordner IN DAS HAUPTVERZEICHNIS
des bestehenden GitHub-Repositories test-low/Holz-Rechner hochladen,
vorhandene Dateien ersetzen und Commit changes wählen.
Wenn noch die alte Fassung zu sehen ist: .../aktualisieren.html öffnen.

NEU IN V2.4:
1. Intelligente Schnelleingabe: Eingabe von z. B. 40 30 25 40x5 35x2.
   '40x5' bedeutet fünf Bohlen zu 40 cm Breite; 40 × 5 geht ebenfalls.
   Komma, Leerzeichen, Semikolon, Schrägstrich oder neue Zeile trennen.
   Dezimalbreiten wie 32.5 mit Punkt eingeben.
2. Rückgängig: Schaltfläche macht Eingaben, Löschen, Anlegen einer
   Längenreihe, Massenimport, Neue Liste und Rücksicherung rückgängig.
   Bis zu 35 Änderungsschritte während die Seite geöffnet ist.
3. PDF und Browserdruck: Sortiert von kurzer nach langer Länge,
   innerhalb der Länge nach Breite. Pro Länge werden Stückzahl und
   Kubikmeter als Zwischensumme ausgewiesen. Gleiche Maße werden
   zusammengefasst. Abschluss mit Gesamtzahl und Gesamtvolumen.
4. Smartphone: Größere Felder, mitlaufende Gesamtsumme unten am Rand,
   Schaltfläche '+ Neue Länge', Breitenfelder wachsen beim Tippen mit.
5. Sicherung / Wiederherstellung: JSON-Datei laden/speichern;
   vor Rücksicherung erscheint ein Vergleich mit der aktuellen Liste.
   Rücksicherung kann unmittelbar rückgängig gemacht werden.

WEITERHIN VORHANDEN:
- Eingabe beliebiger Breitenreihenfolge; Eingaben bleiben unsortiert.
- Holzart/Auftrag, Stärke je Reihe, Kommentare, CSV-Ausgabe.
- Direkter PDF-Export ohne Browser-URL, Logos und Signaturen.
- Browserdruck mit neutraler Bohlenliste.
- Offline-Funktion, automatisches lokales Speichern, Darkmode,
  vollständige Listenübernahme aus älteren Versionen.
- Die alten lokalen Daten und bestehenden Sicherungen bleiben lesbar.

HINWEIS: Die erzeugte PDF enthält absichtlich keinen Produktnamen.
Die normale Browser-Druckfunktion kann je nach Browser eigene Kopf-
und Fußzeilen hinzufügen. Für URL-freies Drucken den direkten PDF-
Export benutzen. Die URL ändert sich NICHT durch dieses Update.
