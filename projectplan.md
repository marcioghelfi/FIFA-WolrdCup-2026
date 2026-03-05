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
│   └── worldcup2026.json  # Match + team data
└── .vscode/            # Editor settings
```

---

## Sections / Features

### 1. Navigation & Layout
- [x] Tab-based navigation (Teams / Schedule)
- [x] Hero banner with tournament stats (48 teams, 104 matches, 15 stadiums, 12 groups, 39 days)
- [x] Header with logo and nav buttons
- [x] Footer with timezone note

### 2. Teams Section
- [x] Teams grid rendered by `renderTeams()` in `app.js`
- [x] Confederation colour legend (UEFA, CONMEBOL, CONCACAF, CAF, AFC, OFC)
- [x] Team count badge
- [ ] Team detail view / modal (click on a team card)
- [ ] Filter/search teams by confederation

### 3. Schedule Section
- [x] Match cards rendered by `renderSchedule()` in `app.js`
- [x] Filter by Round
- [x] Filter by Group (Group Stage)
- [x] Filter by Date (MST, range Jun 11 – Jul 19)
- [x] Search by team name or code
- [x] Reset filters button
- [x] Match cards grouped by MST date
- [ ] Filter by stadium / city
- [ ] "Today's matches" quick filter
- [ ] Favourite / bookmark matches

### 4. Data Layer
- [x] JSON data file (`data/worldcup2026.json`)
- [x] MST timezone conversion via `toMST()` in `app.js`
- [x] Dynamic filter population via `populateFilters()`
- [ ] Verify all 104 match entries are present and accurate
- [ ] Verify all 48 team entries are present

### 5. Accessibility & UX
- [x] ARIA roles (tablist, tabpanel, listitem, search)
- [x] `aria-live` on schedule content
- [x] Semantic HTML (header, nav, main, footer, section)
- [ ] Keyboard navigation between tabs
- [ ] Focus management on tab switch
- [ ] Mobile responsive testing

### 6. Polish & Future Features
- [ ] Stadiums section/tab with venue info and maps
- [ ] Standings table (Group Stage results)
- [ ] Bracket / knockout tree view
- [ ] Dark mode toggle
- [ ] PWA / offline support
- [ ] Share a match (copy link with filters pre-applied)
- [ ] Countdown timer to tournament start / next match

---

## Known Issues / Tech Debt
- Project directory has a typo: `FIFA-WolrdCup-2026` (transposed `r` and `l` in "World")
- Data is mock/illustrative — needs verification against official FIFA schedule when released

---

## Notes
- Add items to any section above as the project evolves
- Use checkboxes: `- [x]` done, `- [ ]` to do
