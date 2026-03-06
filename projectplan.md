# FIFA World Cup 2026 — Project Implementation Plan

## Project Overview
A static front-end web app displaying the FIFA World Cup 2026 schedule and participating teams.
- **Tournament:** June 11 – July 19, 2026
- **Host Countries:** USA, Canada, Mexico
- **Teams:** 48 | **Matches:** 104 | **Groups:** 12 | **Stadiums:** 15
- **Timezone:** All times in MST (UTC−7)

---

## Current File Structure
```
FIFA-WolrdCup-2026/
├── index.html          # Main HTML shell (tabs, hero, sections)
├── css/
│   └── styles.css      # All styling
├── js/
│   └── app.js          # Data fetching, rendering, filters
├── data/
│   ├── worldcup2026.json  # Source of truth for match + team data
│   └── worldcup2026.js   # Same data as window.WC2026_DATA (enables file:// usage)
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

### 4. Data Layer
- [x] JSON data file (`data/worldcup2026.json`)
- [x] Inline JS data file (`data/worldcup2026.js`) — enables `file://` usage
- [x] MST timezone conversion via `toMST()` in `app.js`
- [x] Dynamic filter population via `populateFilters()`
- [ ] Verify all 104 match entries are present and accurate
- [ ] Verify all 48 team entries are present

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

---

## Notes
- Add items to any section above as the project evolves
- Use checkboxes: `- [x]` done, `- [ ]` to do
