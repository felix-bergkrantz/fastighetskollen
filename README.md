# Bostadsbevakning

En statisk sajt som visar bostadsrätter till salu och snart till salu i bevakade
bostadsrättsföreningar i Hägerstensåsen och Telefonplan.

## Öppna sajten

- **Lokalt:** dubbelklicka på `index.html`.
- **På webben:** via GitHub Pages, när repot är publicerat där.

## Så hänger det ihop

| Fil | Innehåll |
|---|---|
| `index.html` | Hela sajten: markup, stil och skript. Inget byggsteg. |
| `data/data.js` | All data: objekt, föreningar och senaste ändringar. |
| `CLAUDE.md` | Dataformat och arbetsgång, för arbete i Claude Code. |

Sajten har ingen server och ingen inloggning. Den visar det som står i
`data/data.js`, som är en ögonblicksbild från den senaste avläsningen av
föreningarnas sidor på booli.se.

## Uppdatera datan

1. Läs av föreningarnas sidor på Booli (se `CLAUDE.md`).
2. Skriv in ändringarna i `data/data.js` och uppdatera `avlast`.
3. Committa och pusha till `main`. GitHub Pages publicerar ändringen.

## Publicera på GitHub Pages

1. Skapa ett publikt repo på GitHub och pusha grenen `main` dit.
2. Gå till Settings → Pages i repot.
3. Välj Deploy from a branch, grenen `main` och mappen `/ (root)`.

Sajten hamnar på `https://<användarnamn>.github.io/<reponamn>/`.

## Begränsningar

- Datan uppdateras inte av sig själv. Sajten blir inte färskare än den senaste
  avläsningen.
- Sajten är publik: alla som har adressen kan läsa den.
- Ingen karta, eftersom datan saknar koordinater.
