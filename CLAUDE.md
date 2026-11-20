# Bostadsbevakning

Statisk sajt som visar bostadsrätter till salu och snart till salu i bevakade
bostadsrättsföreningar i Hägerstensåsen och Telefonplan. Hostas på GitHub Pages.
Allt innehåll och all text på sajten är på svenska.

## Filer

- `index.html` – hela sajten: markup, stil och skript. Inget byggsteg, inga beroenden.
- `data/data.js` – all data, som `window.BOSTADSDATA`. Skrivs om efter varje avläsning.
- `.nojekyll` – gör att GitHub Pages serverar filerna som de är.

Sajten ska gå att öppna både via GitHub Pages och genom att dubbelklicka på
`index.html`. Därför läses datan in med en `<script>`-tagg och inte med `fetch`.

## Dataformat

`data/data.js` innehåller tre textblock. Varje rad är en post, fälten skiljs med `|`.
Decimaltal skrivs med komma, belopp utan mellanslag, tomt fält betyder okänt.

- `objekt`: förening|område|adress|status|rum|boarea|våning|avgift|pris|tid på Booli|visning|sökväg på booli.se|avläst
  - status är `Till salu` eller `Snart till salu`
  - våning är ett tal, `BV` eller tomt
  - sökvägen är `bostad/<id>` eller `annons/<id>`
- `foreningar`: förening|område|lägenheter|byggår|registreringsår|Booli-id|markägande
  - Booli-id är ifyllt bara för föreningar som bevakas
  - antal till salu räknas av sajten från `objekt`, det lagras inte här
- `andringar`: datum|förening|adress|vad som ändrades, nyast först
- `avlast`: datum för senaste avläsningen

Föreningens namn i `objekt` måste stämma exakt med namnet i `foreningar`.

## Avläsning av Booli

Datan kommer från föreningssidorna `https://www.booli.se/bostadsrattsforening/<Booli-id>`.

- Annonserna under "Till salu i föreningen" laddas först när den delen av sidan
  syns på skärmen. De måste läsas i en riktig webbläsare (Claude in Chrome) efter
  att sektionen `#listings` har rullats in i bild. En vanlig HTTP-hämtning ger
  bara "Laddar...".
- Annonser märkta "Snart till salu" får status `Snart till salu`, övriga `Till salu`.
- Jämför varje avläsning med `data/data.js` på sökväg, status och pris. Skriv bara
  om det som ändrats, uppdatera `avlast` och lägg till en rad överst i `andringar`
  för varje annons som tillkommit, försvunnit, bytt status eller ändrat pris.
- Försök aldrig ta dig förbi botskydd eller CAPTCHA på Booli.

Det finns även ett privat Google-kalkylark, "Bostadsrättsföreningar – register",
med samma data plus anteckningar och källor. Sajten läser inte arket. Fråga
användaren om arket också ska uppdateras vid en avläsning, och be då om länken.

## Publicering

GitHub Pages publicerar från repots rot på grenen `main`. En push till `main`
uppdaterar sajten. Sajten och repot är publika, så lägg aldrig in anteckningar,
personuppgifter eller annat som inte ska vara offentligt.

## Kontroll före commit

```
node -e "global.window={};eval(require('fs').readFileSync('data/data.js','utf8'));const L=b=>b.split('\n').filter(l=>l.trim()).map(l=>l.split('|'));const D=window.BOSTADSDATA;console.log(L(D.objekt).length,'objekt',[...new Set(L(D.objekt).map(r=>r.length))],L(D.foreningar).length,'föreningar',[...new Set(L(D.foreningar).map(r=>r.length))])"
```

Varje objektrad ska ha 13 fält och varje föreningsrad 7.
