# FIFA World Cup 2026 — Project Implementation Plan

## Project Overview
A web app displaying the FIFA World Cup 2026 schedule, teams, standings, bracket, and live scores.
- **Tournament:** June 11 – July 19, 2026
- **Host Countries:** USA, Canada, Mexico
- **Teams:** 48 | **Matches:** 104 | **Groups:** 12 | **Stadiums:** 15
- **Timezone:** All times in MST (UTC−7)

---

## Architecture

### Phase 1 — Static (current, works via `file://` and Firebase Hosting)
All data is bundled in `data/worldcup2026.js` as `window.WC2026_DATA`. No server needed.

### Phase 2 — Live Scores (to be built before June 11, 2026)
```
Cloud Scheduler (every 60s on match days)
  → Cloud Function: fetchScores()
      → calls API-Football (api-sports.io) — free tier: 100 req/day
      → writes public/scores.json to Cloud Storage bucket
Frontend (browser)
  → polls /scores.json every 60s
  → patches score into existing match cards (no full re-render)
  → shows LIVE badge + match minute on in-progress matches

Cloud Function: getLineup(matchId) — HTTP-triggered, on demand
  → fetches lineup from API-Football
  → writes public/lineups/{matchId}.json to Cloud Storage
  → frontend fetches when user opens a match detail
```

### Deployment Stack (all Google Cloud free tier)
| Service | Purpose | Free limit |
|---|---|---|
| Firebase Hosting | Serves HTML/CSS/JS | 1 GB storage, 10 GB/mo transfer |
| Cloud Functions (Node.js) | Fetches API, writes JSON | 2M invocations/mo |
| Cloud Storage | Stores live scores + lineups as JSON | 5 GB, 1 GB/mo egress |
| Cloud Scheduler | Triggers fetchScores() every 60s | 3 jobs free |
| API-Football (api-sports.io) | Live scores + lineups source | 100 req/day free |

---

## Target File Structure (Phase 2)
```
FIFA-WolrdCup-2026/
├── firebase.json              # Hosting config + function rewrites
├── .firebaserc                # Firebase project alias
│
├── public/                    # Firebase Hosting root
│   ├── index.html
│   ├── css/styles.css
│   ├── js/app.js
│   └── data/
│       └── worldcup2026.js    # Static: teams, stadiums, fixtures (never changes)
│
└── functions/                 # Cloud Functions
    ├── package.json
    └── index.js               # fetchScores() + getLineup()

Cloud Storage bucket: worldcup2026-live/
    ├── scores.json            # Updated every 60s — all match scores + status
    └── lineups/{matchId}.json # Written once per match, ~1h before kickoff
```

## Current File Structure (Phase 1 — active)
```
FIFA-WolrdCup-2026/
├── index.html          # Main HTML shell (tabs, hero, sections)
├── css/
│   └── styles.css      # All styling
├── js/
│   └── app.js          # Rendering, filters, bracket, standings
├── data/
│   ├── worldcup2026.json  # Source of truth (edit here, then sync to .js)
│   └── worldcup2026.js   # window.WC2026_DATA — loaded by index.html
└── .vscode/            # Editor settings
```

---

## Sections / Features

### 1. Navigation & Layout
- [x] Tab-based navigation (Teams / Schedule)
- [x] Hero banner with tournament stats (48 teams, 104 matches, 15 stadiums, 12 groups, 39 days)
- [x] Hero countdown timer — live seconds until opening match
- [x] Header with logo and nav buttons
- [x] Footer with timezone note

### 2. Teams Section
- [x] Teams grid rendered by `renderTeams()` in `app.js`
- [x] Confederation colour legend (UEFA, CONMEBOL, CONCACAF, CAF, AFC, OFC)
- [x] Team count badge (updates dynamically when filter is active)
- [x] Filter teams by confederation (clickable toggle buttons)
- [x] Team detail modal — click any card to see full match schedule for that team, with "View in Schedule" button
- [x] Real flag images on team cards — `flagImg()` helper using flagcdn.com (ISO alpha-2 `flagCode` field on each team); emoji fallback via `onerror`
- [x] Flag images on match cards (home/away), standings rows, and team modal header + match list
- [x] `flagCode` ISO alpha-2 added to all 48 teams in `worldcup2026.js` (special cases: England=`gb-eng`, Scotland=`gb-sct`, Netherlands=`nl`, etc.)

### 3. Schedule Section
- [x] Match cards rendered by `renderSchedule()` in `app.js`
- [x] Filter by Round
- [x] Filter by Group (Group Stage)
- [x] Filter by Date (MST, range Jun 11 – Jul 19)
- [x] Filter by Venue / Stadium
- [x] Search by team name or code
- [x] Reset filters button
- [x] Match cards grouped by MST date
- [x] "Next Match Day" quick filter — jumps to nearest upcoming match date
- [x] Favourite / bookmark matches — star button on each match card, persisted in localStorage, "Favourites" filter button

### 4. Data Layer — Static (Phase 1)
- [x] JSON data file (`data/worldcup2026.json`)
- [x] Inline JS data file (`data/worldcup2026.js`) — enables `file://` usage
- [x] MST timezone conversion via `toMST()` in `app.js`
- [x] Dynamic filter population via `populateFilters()`
- [ ] Verify all 104 match entries are present and accurate
- [ ] Verify all 48 team entries are present

### 4b. Data Layer — Live Scores (Phase 2, due before June 11, 2026)
- [ ] Sign up for API-Football free key (api-sports.io)
- [ ] Create Firebase project + enable Cloud Functions + Cloud Storage
- [ ] Restructure: move existing files into `public/` folder
- [ ] Create `firebase.json` with hosting config and function rewrites
- [ ] Write `functions/index.js` — `fetchScores()` Cloud Function (Pub/Sub triggered)
- [ ] Write `functions/index.js` — `getLineup(matchId)` Cloud Function (HTTP triggered)
- [ ] Configure Cloud Scheduler job: trigger `fetchScores` every 60s
- [ ] Set up Cloud Storage bucket (`worldcup2026-live`) with public read + CORS
- [ ] Store API key as Firebase config secret (`firebase functions:config:set football.key=...`)
- [ ] Add `startLivePolling()` to `app.js` — fetches `/scores.json` every 60s
- [ ] Add `updateScoreCards()` to `app.js` — patches scores onto existing match cards without full re-render
- [ ] Add LIVE badge + match minute display to match cards (CSS + JS)
- [ ] Add lineup fetch + display when a match card is expanded/clicked
- [ ] Deploy: `firebase deploy`

### 5. Accessibility & UX
- [x] ARIA roles (tablist, tabpanel, listitem, search)
- [x] `aria-live` on schedule content
- [x] Semantic HTML (header, nav, main, footer, section)
- [x] Keyboard navigation between tabs (Arrow Left/Right, Home, End)
- [x] `aria-selected` state updated on tab switch
- [x] Mobile responsive testing and improvements

### 6. Polish & Future Features
- [x] Stadiums tab — venue cards with name, city, country, capacity, sorted USA → Canada → Mexico
- [x] Stadium cards redesigned with photo-panel layout — real exterior photo header (170px), gradient placeholder fallback using `--stadium-color` CSS custom property
- [x] Stadium exterior photos — all 15 venues populated with Wikimedia Commons `Special:FilePath` URLs (redirects to actual image; `onerror` falls back to gradient placeholder)
- [x] Dark mode toggle — light/dark theme switch in header, persisted in localStorage
- [x] Standings table (Group Stage results) — 12 group tables, top-2 advance indicators
- [x] Official mascots in hero — Maple (moose/Canada), Zayu (jaguar/Mexico), Clutch (bald eagle/USA); CNN group image + trio cards
- [x] Hero section compacted — reduced padding, font sizes, and countdown block sizes so content is visible without scrolling on laptop screens
- [x] Bracket / knockout tree view — horizontal scrollable bracket with 5 columns (R32 → R16 → QF → SF → Final), CSS flex pair-based layout with connecting lines (`::after` connectors), compact match cards with flags, third-place standalone card
- [ ] PWA / offline support
- [x] Share a match (copy link with filters pre-applied) — URL hash encoding, clipboard copy, toast notification, restore on load
- [x] Countdown timer to tournament start / next match

---

## Known Issues / Tech Debt
- Project directory has a typo: `FIFA-WolrdCup-2026` (transposed `r` and `l` in "World")
- Data is mock/illustrative — needs verification against official FIFA schedule when released
- **Fixed:** Data now loaded via `data/worldcup2026.js` (inline JS variable) so the app works when opened directly via `file://` without a local server. The JSON file is kept as the source of truth.
- Stadium photos sourced from Wikimedia Commons via `Special:FilePath` redirects — if a filename is wrong, the card silently falls back to the gradient placeholder. Photos should be spot-checked in the browser.
- Emoji flags do not render on Windows/Chrome (no regional indicator support) — mitigated by using flagcdn.com `<img>` tags with emoji `onerror` fallback.
- API-Football free tier: 100 requests/day. With 60s polling only during live matches (~3 matches/day × 2h each = 120 calls/day), this is tight. Mitigation: only poll when a match is currently live (check match start time before firing requests).

---

## Deployment Checklist (Phase 1 — Static)
- [x] Install Firebase CLI: `npm install -g firebase-tools`
- [x] Login: `firebase login`
- [x] Init hosting in project root: `firebase init hosting` → public dir = `.` (root), SPA = No
- [x] Deploy: `firebase deploy --only hosting`
- [x] Verify site loads at `https://worldcup2026-app.web.app`

## Deployment Checklist (Phase 2 — Live Scores)
- [ ] Complete Phase 1 deployment first
- [ ] Restructure into `public/` + `functions/` folders
- [ ] `firebase init functions` → Node.js, TypeScript = No
- [ ] Install function dependencies: `cd functions && npm install axios @google-cloud/storage`
- [ ] Set API key: `firebase functions:config:set football.key="YOUR_KEY"`
- [ ] Create Cloud Storage bucket, set public read, configure CORS
- [ ] Test function locally: `firebase emulators:start`
- [ ] Deploy all: `firebase deploy`
- [ ] Create Cloud Scheduler job pointing to the Pub/Sub topic

---

## Notes
- Add items to any section above as the project evolves
- Use checkboxes: `- [x]` done, `- [ ]` to do
- Phase 1 is complete and deployable today. Phase 2 work begins ~May 2026.
- The same Firebase project can host multiple apps — use different Hosting sites or subdirectories.
