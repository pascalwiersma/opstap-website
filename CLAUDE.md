# OpStap Website — Claude Code instructies

## Project context
OpStap Website is de publieke marketingwebsite (opstap.app): landingspagina,
voorwaarden, privacybeleid, richtlijnen en account-verwijdering.
Gebouwd door Pascal Wiersma via Pascal Services, Groningen.
Lanceringsdatum app: 1 augustus 2026.

## Repositories
- `opstap` — React Native app (iOS + Android)
- `opstap-dashboard` — Next.js admin dashboard
- `opstap-website` — Next.js marketingwebsite (dit project, opstap.app)

## Branch strategie
- Dit project werkt vanaf `main` (uitzondering op de rest: geen `develop`-tussenstap)
- Branch prefix per type: `feature/`, `fix/`, `chore/`
- Maak altijd een pull request na afronding naar `main`

## Versie beheer
- Geen eigen semver-versienummer of build nummers; statische marketingsite zonder
  app-releasecyclus

## Tech stack
- Framework: Next.js 14 (App Router), TypeScript
- Styling: Tailwind CSS
- Iconen: react-icons
- Meertaligheid: content per taal in aparte routes (`app/` = NL, `app/en/` = EN) —
  nieuwe pagina's altijd in beide talen aanmaken

## Codestandaarden
- Gebruik altijd TypeScript, geen `any` types
- Controleer altijd met `npx tsc --noEmit` na wijzigingen
- Gebruik Nederlandse variabelenamen voor domein-specifieke concepten

## Belangrijke bestanden
- `app/voorwaarden/` / `app/en/terms/` — algemene voorwaarden
- `app/privacy/` / `app/en/privacy/` — privacybeleid
- `app/richtlijnen/` — community richtlijnen
- `app/account-verwijderen/` / `app/en/account-deletion/` — account verwijderen
- `app/vertegenwoordiger/` — contactpagina vertegenwoordiger
- `app/api/aanmelden/` — aanmeldformulier endpoint
