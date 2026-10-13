# Dodawanie zdjęć i filmów

Każdy projekt ma własny plik Markdown: `thesis.md`, `engine.md`, `unity.md` albo `roblox.md`. Treść opisu możesz edytować bezpośrednio w takim pliku. Zdjęcia i filmy dodaje się w sekcji `media` na samej górze, między liniami `---`.

## Zdjęcie

Skopiuj plik do folderu `assets`, a potem dodaj wpis:

```yaml
media:
  - type: image
    src: /assets/nazwa-zdjecia.jpg
    alt: Krótki opis tego, co widać na zdjęciu.
    caption: Podpis wyświetlany pod zdjęciem.
```

`alt` opisuje zdjęcie osobom korzystającym z czytnika ekranu. `caption` jest opcjonalny. Kolejne pliki dodawaj jako kolejne wpisy zaczynające się od `- type:` pod `media:`. Dla kolażu lub zrzutu z długim układem możesz dodać `fit: cover`.

## Film z pliku

Skopiuj MP4 do `assets` i dodaj:

```yaml
media:
  - type: video
    src: /assets/rozgrywka.mp4
    poster: /assets/okladka.jpg
    caption: Krótki podpis filmu.
```

`poster` (miniatura) i `caption` są opcjonalne. Plik `poster` też umieść w `assets`.

## Film z YouTube

Skopiuj identyfikator filmu z adresu YouTube. Dla adresu `youtube.com/watch?v=AbCdEf12345` identyfikatorem jest `AbCdEf12345`.

```yaml
media:
  - type: youtube
    id: AbCdEf12345
    title: Krótki tytuł filmu
    caption: Krótki podpis filmu.
```

Przy dodawaniu zdjęć lub filmów do strony, która jeszcze nie ma sekcji `media:`, wklej przykład w całości, łącznie z linią `media:`. Jeśli sekcja już istnieje, dodaj kolejny wpis pod nią.
