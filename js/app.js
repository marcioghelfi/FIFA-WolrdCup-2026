/**
 * FIFA World Cup 2026 — Main Application
 *
 * Loads data from data/worldcup2026.json then renders:
 *   - Teams grid (with group/confederation filters)
 *   - Match schedule (sorted by date, grouped by day)
 *
 * All match times are displayed in MST (Mountain Standard Time = UTC−7).
 * NOTE: The World Cup runs June–July 2026 which is technically MDT (UTC−6)
 * but the user explicitly requested MST (UTC−7), so we apply a fixed
 * −7 hour offset rather than using the America/Denver timezone which
 * observes DST automatically.
 */

'use strict';

/* =============================================
   TIMEZONE UTILITY
   MST = UTC − 7 hours (fixed offset, no DST)
   ============================================= */

/**
 * Convert a UTC ISO date string to an object with MST date parts.
 * @param {string} utcString - ISO 8601 UTC datetime string (e.g. "2026-06-11T21:00:00Z")
 * @returns {{ date: Date, timeStr: string, dateStr: string, dayName: string, fullDateStr: string }}
 */
function toMST(utcString) {
  const utcMs = new Date(utcString).getTime();

  // MST offset: −7 hours in milliseconds
  const MST_OFFSET_MS = -7 * 60 * 60 * 1000;

  // Shift the UTC timestamp by the MST offset to get "fake" local Date object
  const mstDate = new Date(utcMs + MST_OFFSET_MS);

  // Extract parts using UTC getters (the shift makes UTC getters read as MST)
  const hours   = mstDate.getUTCHours();
  const minutes = mstDate.getUTCMinutes();
  const month   = mstDate.getUTCMonth(); // 0-indexed
  const day     = mstDate.getUTCDate();
  const year    = mstDate.getUTCFullYear();
  const weekday = mstDate.getUTCDay();   // 0 = Sunday

  // Format: "2:00 PM"
  const ampm    = hours >= 12 ? 'PM' : 'AM';
  const h12     = hours % 12 || 12;
  const timeStr = `${h12}:${String(minutes).padStart(2, '0')} ${ampm}`;

  // Format: "Jun 11, 2026"
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dateStr    = `${monthNames[month]} ${day}, ${year}`;

  // Sortable date key: "2026-06-11"
  const sortKey = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

  // Full readable date: "Thursday, June 11"
  const dayNames   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const fullMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const fullDateStr = `${dayNames[weekday]}, ${fullMonths[month]} ${day}`;

  return { date: mstDate, timeStr, dateStr, sortKey, fullDateStr, year };
}

/* =============================================
   APPLICATION STATE
   ============================================= */

let state = {
  data: null,          // Raw JSON from worldcup2026.json
  teamMap: {},         // id → team object for quick lookup
  stadiumMap: {},      // id → stadium object

  // Active confederation filter for the Teams tab
  teamConf: 'all',

  // Favourited match IDs — persisted in localStorage
  favourites: new Set(JSON.parse(localStorage.getItem('wc2026-favs') || '[]')),

  // Active filters for schedule
  filters: {
    round: 'all',
    group: 'all',
    stadium: 'all',
    search: '',
    date: '',
    favOnly: false,
  },

  // Active tab
  activeTab: 'schedule',
};

/* =============================================
   DATA LOADING
   ============================================= */

/**
 * Fetch and initialise the app.
 * Uses the Fetch API — works when served via a local HTTP server
 * (e.g. VS Code Live Server, Python http.server, etc.).
 */
async function init() {
  showLoading('teams-content', 'Loading teams...');
  showLoading('schedule-content', 'Loading schedule...');

  try {
    // Use inline data (window.WC2026_DATA) when available — works with file://.
    // Falls back to fetch for server environments.
    if (window.WC2026_DATA) {
      state.data = window.WC2026_DATA;
    } else {
      const response = await fetch('./data/worldcup2026.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      state.data = await response.json();
    }

    // Build lookup maps for O(1) access
    state.teamMap    = Object.fromEntries(state.data.teams.map(t => [t.id, t]));
    state.stadiumMap = Object.fromEntries(state.data.stadiums.map(s => [s.id, s]));

    renderTeams();
    renderSchedule();
    renderStadiums();
    renderStandings();
    renderBracket();
    updateScheduleCount();

  } catch (err) {
    console.error('Failed to load data:', err);
    showError('teams-content',    'Could not load team data.');
    showError('schedule-content', 'Could not load schedule data.');
  }
}

/* =============================================
   FLAG IMAGE HELPER
   Generates an <img> from flagcdn.com using the team's ISO flagCode.
   Falls back to the emoji stored in team.flag if the image fails to load.
   ============================================= */

/**
 * @param {Object|null} team   - Team object (must have .flagCode, .name, .flag)
 * @param {number}      width  - Requested image width in px (flagcdn.com sizes: 20,40,80,160,320,640,1280)
 * @param {string}      cssClass - Extra CSS class(es) for the <img>
 * @returns {string} HTML string: <img> if flagCode is available, else emoji <span>
 */
function flagImg(team, width = 40, cssClass = '') {
  if (!team?.flagCode) {
    return `<span class="flag-emoji-fb">${team?.flag ?? '&#x2753;'}</span>`;
  }
  const src    = `https://flagcdn.com/w${width}/${team.flagCode}.png`;
  const src2x  = `https://flagcdn.com/w${width * 2}/${team.flagCode}.png`;
  const cls    = cssClass ? ` ${cssClass}` : '';
  const fb     = (team.flag || '').replace(/"/g, '&quot;');
  return `<img src="${src}" srcset="${src2x} 2x" alt="${team.name} flag"
              class="flag-img${cls}" loading="lazy"
              onerror="this.outerHTML='<span class=\\'flag-emoji-fb\\'>${fb}</span>'">`;
}

/* =============================================
   TEAMS RENDERING
   ============================================= */

function renderTeams() {
  const container = document.getElementById('teams-content');

  // Apply confederation filter
  const teams = state.teamConf === 'all'
    ? state.data.teams
    : state.data.teams.filter(t => t.confederation === state.teamConf);

  // Sort: by group, then by name within group
  const sorted = [...teams].sort((a, b) =>
    a.group.localeCompare(b.group) || a.name.localeCompare(b.name)
  );

  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="icon">&#x1F6A9;</span>
        <h3>No teams found</h3>
        <p>Try selecting a different confederation.</p>
      </div>`;
  } else {
    container.innerHTML = sorted.map(team => `
      <div class="team-card" data-conf="${team.confederation}" data-team-id="${team.id}"
           title="Click to view ${team.name}'s schedule · Group ${team.group} · ${team.confederation}">
        <div class="team-flag">${flagImg(team, 80)}</div>
        <div class="team-name">${team.name}</div>
        <div class="team-code">${team.code}</div>
        <div class="team-meta">
          <span class="tag tag-group">Group ${team.group}</span>
          <span class="tag tag-conf">${team.confederation}</span>
        </div>
      </div>
    `).join('');
  }

  // Update count badge
  document.getElementById('teams-count').textContent = sorted.length;
}

/* =============================================
   SCHEDULE RENDERING
   ============================================= */

/**
 * Get the filtered and sorted list of matches based on current state.filters.
 */
function getFilteredMatches() {
  const { round, group, stadium, search, date, favOnly } = state.filters;
  const matches = state.data.matches;

  return matches.filter(match => {
    // Favourites-only filter
    if (favOnly && !state.favourites.has(match.id)) return false;

    // Round filter
    if (round !== 'all' && match.round !== round) return false;

    // Group filter (only applicable to group stage matches)
    if (group !== 'all') {
      if (!match.group || match.group !== group) return false;
    }

    // Venue / stadium filter
    if (stadium !== 'all' && match.stadiumId !== Number(stadium)) return false;

    // Date filter (compare MST sortable key)
    if (date) {
      const { sortKey } = toMST(match.dateUTC);
      if (sortKey !== date) return false;
    }

    // Team search (case-insensitive match on name or code)
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      const homeTeam = state.teamMap[match.homeTeam];
      const awayTeam = state.teamMap[match.awayTeam];
      const homeStr = homeTeam
        ? `${homeTeam.name} ${homeTeam.code}`.toLowerCase()
        : match.homeTeam.toLowerCase();
      const awayStr = awayTeam
        ? `${awayTeam.name} ${awayTeam.code}`.toLowerCase()
        : match.awayTeam.toLowerCase();
      if (!homeStr.includes(q) && !awayStr.includes(q)) return false;
    }

    return true;
  });
}

/**
 * Render the schedule section.
 * Groups matches by their MST calendar date for readability.
 */
function renderSchedule() {
  const container = document.getElementById('schedule-content');
  const matches   = getFilteredMatches();

  if (matches.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="icon">&#x1F50D;</span>
        <h3>No matches found</h3>
        <p>Try adjusting the filters above.</p>
      </div>`;
    return;
  }

  // Sort matches chronologically (UTC string comparison works because ISO format)
  const sorted = [...matches].sort((a, b) => a.dateUTC.localeCompare(b.dateUTC));

  // Group by MST date key (YYYY-MM-DD)
  const groups = new Map();
  for (const match of sorted) {
    const mst = toMST(match.dateUTC);
    if (!groups.has(mst.sortKey)) {
      groups.set(mst.sortKey, { label: mst.fullDateStr, year: mst.year, matches: [] });
    }
    groups.get(mst.sortKey).matches.push({ match, mst });
  }

  // Build HTML
  let html = '';
  for (const [, group] of groups) {
    html += `
      <div class="date-group">
        <div class="date-group-header">
          <span class="date-label">${group.label}</span>
          <span class="date-day">${group.year}</span>
          <span class="date-count">${group.matches.length} match${group.matches.length !== 1 ? 'es' : ''}</span>
        </div>
        <div class="matches-list">
          ${group.matches.map(({ match, mst }) => renderMatchCard(match, mst)).join('')}
        </div>
      </div>`;
  }

  container.innerHTML = html;
}

/**
 * Build HTML for a single match card.
 * @param {Object} match - Match object from JSON
 * @param {Object} mst   - Parsed MST time object from toMST()
 */
function renderMatchCard(match, mst) {
  const stadium = state.stadiumMap[match.stadiumId];
  const stadiumLabel = stadium
    ? `${stadium.name}, ${stadium.city}, ${stadium.country}`
    : 'Stadium TBD';

  // Resolve home/away team — might be a team ID or a placeholder string (TBD/knockout)
  const homeTeamObj = state.teamMap[match.homeTeam];
  const awayTeamObj = state.teamMap[match.awayTeam];

  const homeFlag = flagImg(homeTeamObj, 40);
  const awayFlag = flagImg(awayTeamObj, 40);
  const homeName = homeTeamObj ? homeTeamObj.name : match.homeTeam;
  const awayName = awayTeamObj ? awayTeamObj.name : match.awayTeam;
  const homeCode = homeTeamObj ? homeTeamObj.code : '';
  const awayCode = awayTeamObj ? awayTeamObj.code : '';

  const isTBD = !homeTeamObj || !awayTeamObj;

  // CSS classes for the card
  const isFav     = state.favourites.has(match.id);
  const roundClass = [
    match.round === 'Final' ? 'round-final' : '',
    isFav ? 'fav' : '',
  ].filter(Boolean).join(' ');

  // Round tag CSS class: convert "Group Stage" → "tag-group-stage"
  const roundTagClass = 'tag-' + match.round.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // Group tag (only for group stage)
  const groupTag = match.group
    ? `<span class="match-group-tag">Group ${match.group}</span>`
    : '';

  return `
    <div class="match-card ${roundClass}" data-match-id="${match.id}">
      <!-- Home team -->
      <div class="match-team home ${isTBD && !homeTeamObj ? 'tbd' : ''}">
        <span class="match-team-flag">${homeFlag}</span>
        <div>
          <div class="match-team-name">${homeName}</div>
          ${homeCode ? `<div class="match-team-code">${homeCode}</div>` : ''}
        </div>
      </div>

      <!-- Centre: time & VS -->
      <div class="match-centre">
        <span class="vs-badge">VS</span>
        <span class="match-time">${mst.timeStr}</span>
        <span class="match-timezone">MST (UTC−7)</span>
      </div>

      <!-- Away team -->
      <div class="match-team away ${isTBD && !awayTeamObj ? 'tbd' : ''}">
        <span class="match-team-flag">${awayFlag}</span>
        <div>
          <div class="match-team-name">${awayName}</div>
          ${awayCode ? `<div class="match-team-code">${awayCode}</div>` : ''}
        </div>
      </div>

      <!-- Footer: stadium + tags + favourite -->
      <div class="match-footer">
        <span class="match-num">#${match.matchNum}</span>
        <span class="match-stadium">&#x1F3DF; ${stadiumLabel}</span>
        ${groupTag}
        <span class="match-round-tag ${roundTagClass}">${match.round}</span>
        <button class="fav-btn ${isFav ? 'active' : ''}" data-match-id="${match.id}"
                aria-label="${isFav ? 'Remove from' : 'Add to'} favourites"
                title="Favourite">&#x2605;</button>
      </div>
    </div>`;
}

/* =============================================
   FILTER POPULATION & HANDLING
   ============================================= */

/**
 * Populate the round and group filter <select> elements from JSON data.
 */
function populateFilters() {
  // Collect unique rounds in order of appearance
  const rounds = [...new Set(state.data.matches.map(m => m.round))];
  const roundSelect = document.getElementById('filter-round');
  rounds.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r;
    opt.textContent = r;
    roundSelect.appendChild(opt);
  });

  // Groups A–L (group stage only)
  const groups = [...new Set(
    state.data.matches.filter(m => m.group).map(m => m.group)
  )].sort();
  const groupSelect = document.getElementById('filter-group');
  groups.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = `Group ${g}`;
    groupSelect.appendChild(opt);
  });

  // Stadiums (sorted by country then city)
  const stadiums = [...state.data.stadiums].sort((a, b) =>
    a.country.localeCompare(b.country) || a.city.localeCompare(b.city)
  );
  const stadiumSelect = document.getElementById('filter-stadium');
  stadiums.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name} — ${s.city}`;
    stadiumSelect.appendChild(opt);
  });
}

/**
 * Update the match count badge in the schedule header.
 */
function updateScheduleCount() {
  const filtered = getFilteredMatches();
  document.getElementById('schedule-count').textContent = filtered.length;
}

/**
 * Wire all filter controls to re-render on change.
 */
function bindFilters() {
  const roundSel   = document.getElementById('filter-round');
  const groupSel   = document.getElementById('filter-group');
  const stadiumSel = document.getElementById('filter-stadium');
  const searchIn   = document.getElementById('filter-search');
  const dateIn     = document.getElementById('filter-date');
  const resetBtn   = document.getElementById('filter-reset');

  roundSel.addEventListener('change', () => {
    state.filters.round = roundSel.value;
    // When a non-group-stage round is selected, clear the group filter
    if (state.filters.round !== 'all' && state.filters.round !== 'Group Stage') {
      state.filters.group = 'all';
      groupSel.value = 'all';
    }
    refreshSchedule();
  });

  groupSel.addEventListener('change', () => {
    state.filters.group = groupSel.value;
    // If filtering by group, force round to Group Stage
    if (state.filters.group !== 'all') {
      state.filters.round = 'Group Stage';
      roundSel.value = 'Group Stage';
    }
    refreshSchedule();
  });

  stadiumSel.addEventListener('change', () => {
    state.filters.stadium = stadiumSel.value;
    refreshSchedule();
  });

  searchIn.addEventListener('input', () => {
    state.filters.search = searchIn.value;
    refreshSchedule();
  });

  dateIn.addEventListener('change', () => {
    state.filters.date = dateIn.value; // "YYYY-MM-DD" from <input type="date">
    refreshSchedule();
  });

  const favsBtn = document.getElementById('filter-favs');
  favsBtn.addEventListener('click', () => {
    state.filters.favOnly = !state.filters.favOnly;
    favsBtn.classList.toggle('active', state.filters.favOnly);
    refreshSchedule();
  });

  resetBtn.addEventListener('click', () => {
    state.filters = { round: 'all', group: 'all', stadium: 'all', search: '', date: '', favOnly: false };
    roundSel.value   = 'all';
    groupSel.value   = 'all';
    stadiumSel.value = 'all';
    searchIn.value   = '';
    dateIn.value     = '';
    favsBtn.classList.remove('active');
    refreshSchedule();
  });

  document.getElementById('filter-next-day').addEventListener('click', () => {
    if (!state.data) return;
    // Find the earliest match date that is >= today (MST)
    const todayKey = toMST(new Date().toISOString()).sortKey;
    const dateKeys = [...new Set(
      state.data.matches.map(m => toMST(m.dateUTC).sortKey)
    )].sort();
    const next = dateKeys.find(k => k >= todayKey) ?? dateKeys[0];
    state.filters.date = next;
    dateIn.value = next;
    refreshSchedule();
  });
}

/**
 * Bind confederation filter buttons in the Teams section.
 */
function bindTeamFilters() {
  const confBtns = document.querySelectorAll('.conf-dot[data-conf]');
  confBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.teamConf = btn.dataset.conf;
      confBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderTeams();
    });
  });
}

function refreshSchedule() {
  renderSchedule();
  updateScheduleCount();
}

/* =============================================
   TAB NAVIGATION
   ============================================= */

function bindTabs() {
  const tabs = [...document.querySelectorAll('.nav-btn[data-tab]')];

  function activateTab(btn) {
    const target = btn.dataset.tab;
    tabs.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });
    document.querySelectorAll('.section[data-section]').forEach(sec => {
      sec.classList.toggle('active', sec.dataset.section === target);
    });
    state.activeTab = target;
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn));

    // Arrow-key navigation between tabs (WAI-ARIA tablist pattern)
    btn.addEventListener('keydown', e => {
      const idx = tabs.indexOf(btn);
      if (e.key === 'ArrowRight') {
        const next = tabs[(idx + 1) % tabs.length];
        next.focus();
        activateTab(next);
      } else if (e.key === 'ArrowLeft') {
        const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
        prev.focus();
        activateTab(prev);
      } else if (e.key === 'Home') {
        tabs[0].focus();
        activateTab(tabs[0]);
      } else if (e.key === 'End') {
        tabs[tabs.length - 1].focus();
        activateTab(tabs[tabs.length - 1]);
      }
    });
  });
}

/* =============================================
   UTILITY: Loading / Error states
   ============================================= */

function showLoading(containerId, message = 'Loading...') {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <span>${message}</span>
    </div>`;
}

function showError(containerId, message) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = `
    <div class="empty-state">
      <span class="icon">&#x26A0;&#xFE0F;</span>
      <h3>Error loading data</h3>
      <p>${message}</p>
    </div>`;
}

/* =============================================
   GROUP STANDINGS
   ============================================= */

function renderStandings() {
  const container = document.getElementById('standings-content');

  // Group teams by group letter
  const groupMap = {};
  state.data.teams.forEach(team => {
    if (!groupMap[team.group]) groupMap[team.group] = [];
    groupMap[team.group].push(team);
  });

  const groupLetters = Object.keys(groupMap).sort();

  container.innerHTML = groupLetters.map(letter => {
    const teams = groupMap[letter].sort((a, b) => a.name.localeCompare(b.name));

    const rows = teams.map((team, i) => `
      <tr class="${i < 2 ? 'advance' : ''}">
        <td class="col-team">
          <span class="standing-flag">${flagImg(team, 20)}</span>
          <span class="standing-name">${team.name}</span>
          <span class="standing-code">${team.code}</span>
        </td>
        <td>0</td><td>0</td><td>0</td><td>0</td>
        <td>0</td><td>0</td><td>0</td>
        <td class="col-pts">0</td>
      </tr>`).join('');

    return `
      <div class="standing-group">
        <div class="standing-group-title">Group ${letter}</div>
        <table class="standing-table">
          <thead>
            <tr>
              <th class="col-team">Team</th>
              <th title="Played">P</th>
              <th title="Won">W</th>
              <th title="Drawn">D</th>
              <th title="Lost">L</th>
              <th title="Goals For">GF</th>
              <th title="Goals Against">GA</th>
              <th title="Goal Difference">GD</th>
              <th title="Points">Pts</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }).join('');
}

/* =============================================
   SHARE LINK
   ============================================= */

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function buildShareURL() {
  const { round, group, stadium, date, search } = state.filters;
  const params = new URLSearchParams();
  if (round   !== 'all') params.set('round',   round);
  if (group   !== 'all') params.set('group',   group);
  if (stadium !== 'all') params.set('stadium', stadium);
  if (date)              params.set('date',    date);
  if (search.trim())     params.set('search',  search.trim());
  const hash = params.toString();
  return hash ? `${location.href.split('#')[0]}#${hash}` : location.href.split('#')[0];
}

function bindShareBtn() {
  const btn = document.getElementById('share-btn');
  btn.addEventListener('click', () => {
    const url = buildShareURL();
    history.replaceState(null, '', url);
    navigator.clipboard.writeText(url)
      .then(() => showToast('Link copied to clipboard!'))
      .catch(() => showToast('Share URL: ' + url));
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 1500);
  });
}

/**
 * Read URL hash on load and restore filters + DOM controls.
 * Called after data is loaded so filter selects are populated.
 */
function restoreFromURL() {
  const hash = location.hash.replace(/^#/, '');
  if (!hash) return;

  const params = new URLSearchParams(hash);
  const roundSel   = document.getElementById('filter-round');
  const groupSel   = document.getElementById('filter-group');
  const stadiumSel = document.getElementById('filter-stadium');
  const dateIn     = document.getElementById('filter-date');
  const searchIn   = document.getElementById('filter-search');

  if (params.has('round'))   { state.filters.round   = params.get('round');   roundSel.value   = state.filters.round;   }
  if (params.has('group'))   { state.filters.group   = params.get('group');   groupSel.value   = state.filters.group;   }
  if (params.has('stadium')) { state.filters.stadium = params.get('stadium'); stadiumSel.value = state.filters.stadium; }
  if (params.has('date'))    { state.filters.date    = params.get('date');    dateIn.value     = state.filters.date;    }
  if (params.has('search'))  { state.filters.search  = params.get('search');  searchIn.value   = state.filters.search;  }

  if ([...params.keys()].length > 0) {
    // Switch to schedule tab if filters are encoded
    document.querySelector('.nav-btn[data-tab="schedule"]')?.click();
    refreshSchedule();
  }
}

/* =============================================
   SCHEDULE CARD INTERACTIONS (event delegation)
   ============================================= */

/** Handle fav-button clicks without re-rendering the whole list. */
function bindScheduleCards() {
  document.getElementById('schedule-content').addEventListener('click', e => {
    const favBtn = e.target.closest('.fav-btn');
    if (!favBtn) return;

    const matchId = Number(favBtn.dataset.matchId);
    const card    = favBtn.closest('.match-card');

    if (state.favourites.has(matchId)) {
      state.favourites.delete(matchId);
      favBtn.classList.remove('active');
      favBtn.setAttribute('aria-label', 'Add to favourites');
      card?.classList.remove('fav');
    } else {
      state.favourites.add(matchId);
      favBtn.classList.add('active');
      favBtn.setAttribute('aria-label', 'Remove from favourites');
      card?.classList.add('fav');
    }

    localStorage.setItem('wc2026-favs', JSON.stringify([...state.favourites]));

    // If "Favourites only" filter is active, re-render so the card appears/disappears
    if (state.filters.favOnly) refreshSchedule();
  });
}

/* =============================================
   STADIUMS RENDERING
   ============================================= */

const COUNTRY_FLAGS  = { USA: '\uD83C\uDDFA\uD83C\uDDF8', Canada: '\uD83C\uDDE8\uD83C\uDDE6', Mexico: '\uD83C\uDDF2\uD83C\uDDFD' };
const COUNTRY_COLORS = { USA: '#3b82f6', Canada: '#ef4444', Mexico: '#22c55e' };
const COUNTRY_ORDER  = { USA: 0, Canada: 1, Mexico: 2 };

function renderStadiums() {
  const container = document.getElementById('stadiums-content');

  const sorted = [...state.data.stadiums].sort((a, b) =>
    (COUNTRY_ORDER[a.country] ?? 9) - (COUNTRY_ORDER[b.country] ?? 9) ||
    a.city.localeCompare(b.city)
  );

  // Pre-compute match count per stadium
  const matchCounts = {};
  state.data.matches.forEach(m => {
    matchCounts[m.stadiumId] = (matchCounts[m.stadiumId] || 0) + 1;
  });

  container.innerHTML = sorted.map(s => {
    const flag       = COUNTRY_FLAGS[s.country]  || '&#x1F30D;';
    const color      = COUNTRY_COLORS[s.country] || '#596880';
    const matchCount = matchCounts[s.id] || 0;

    const photoEl = s.image
      ? `<img class="stadium-photo" src="${s.image}" alt="${s.name}" loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      : '';

    return `
      <div class="stadium-card" role="listitem">
        <div class="stadium-photo-wrap" style="--stadium-color:${color}">
          ${photoEl}
          <div class="stadium-photo-placeholder" ${s.image ? 'style="display:none"' : ''}>
            <span class="stadium-flag-bg">${flag}</span>
            <span class="stadium-placeholder-icon">&#x1F3DF;</span>
            <span class="stadium-placeholder-name">${s.name}</span>
          </div>
          <div class="stadium-photo-overlay">
            <span class="stadium-country-badge"
                  style="background:${color}; color:#fff; border:none">
              ${flag} ${s.country}
            </span>
          </div>
        </div>
        <div class="stadium-info">
          <div class="stadium-name">${s.name}</div>
          <div class="stadium-location">${s.city}, ${s.state}</div>
          <div class="stadium-meta">
            <span class="stadium-stat">&#x1F465; ${s.capacity.toLocaleString()}</span>
            <span class="stadium-stat">&#x26BD; ${matchCount} match${matchCount !== 1 ? 'es' : ''}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('stadiums-count').textContent = sorted.length;
}

/* =============================================
   KNOCKOUT BRACKET
   ============================================= */

function renderBracket() {
  const container = document.getElementById('bracket-content');
  const m = state.data.matches;

  // Collect matches per round, sorted by matchNum
  function byRound(roundName) {
    return m.filter(x => x.round === roundName).sort((a, b) => a.matchNum - b.matchNum);
  }

  const r32 = byRound('Round of 32');
  const r16 = byRound('Round of 16');
  const qf  = byRound('Quarter-finals');
  const sf  = byRound('Semi-finals');
  const fin = byRound('Final');
  const tp  = m.find(x => x.round === 'Third Place');

  /** Compact match card for the bracket tree */
  function bracketCard(match) {
    const mst      = toMST(match.dateUTC);
    const home     = state.teamMap[match.homeTeam];
    const away     = state.teamMap[match.awayTeam];
    const homeName = home ? home.name : match.homeTeam;
    const awayName = away ? away.name : match.awayTeam;
    const stad     = state.stadiumMap[match.stadiumId];

    return `
      <div class="bc-match" data-match-id="${match.id}">
        <div class="bc-team">
          <span class="bc-flag">${flagImg(home, 20)}</span>
          <span class="bc-name">${homeName}</span>
        </div>
        <div class="bc-team bc-team-away">
          <span class="bc-flag">${flagImg(away, 20)}</span>
          <span class="bc-name">${awayName}</span>
        </div>
        <div class="bc-info">
          <span>${mst.dateStr}</span>
          ${stad ? `<span>&#x1F3DF; ${stad.city}</span>` : ''}
        </div>
      </div>`;
  }

  /**
   * Build a bracket column.
   * matches: array of match objects for this round
   * label:   column header text
   * isFinal: true → single slot, no pair grouping or right connectors
   */
  function renderCol(matches, label, isFinal = false) {
    let bodyHtml = '';

    if (isFinal) {
      // Single centred slot (no pair wrapper, no right connector)
      bodyHtml = `<div class="bc-slot bc-slot-final">${bracketCard(matches[0])}</div>`;
    } else {
      // Group matches into pairs of 2
      for (let i = 0; i < matches.length; i += 2) {
        bodyHtml += `<div class="bc-pair">`;
        bodyHtml += `<div class="bc-slot">${bracketCard(matches[i])}</div>`;
        if (matches[i + 1]) {
          bodyHtml += `<div class="bc-slot">${bracketCard(matches[i + 1])}</div>`;
        }
        bodyHtml += `</div>`;
      }
    }

    return `
      <div class="bc-col${isFinal ? ' bc-col-final' : ''}">
        <div class="bc-col-header">${label}</div>
        <div class="bc-col-body">${bodyHtml}</div>
      </div>`;
  }

  let html = `
    <div class="bc-scroll">
      <div class="bc">
        ${renderCol(r32, 'Round of 32')}
        ${renderCol(r16, 'Round of 16')}
        ${renderCol(qf,  'Quarter-finals')}
        ${renderCol(sf,  'Semi-finals')}
        ${renderCol(fin, '&#x1F3C6;&nbsp;Final', true)}
      </div>
    </div>`;

  // Third place — standalone card below bracket
  if (tp) {
    const mst  = toMST(tp.dateUTC);
    const home = state.teamMap[tp.homeTeam];
    const away = state.teamMap[tp.awayTeam];
    const stad = state.stadiumMap[tp.stadiumId];
    html += `
      <div class="bc-third">
        <div class="bc-third-label">&#x1F949; Third Place Play-off</div>
        <div class="bc-third-match">
          <div class="bc-team">
            <span class="bc-flag">${flagImg(home, 24)}</span>
            <span class="bc-name">${home ? home.name : tp.homeTeam}</span>
          </div>
          <span class="bc-vs">vs</span>
          <div class="bc-team">
            <span class="bc-flag">${flagImg(away, 24)}</span>
            <span class="bc-name">${away ? away.name : tp.awayTeam}</span>
          </div>
          <div class="bc-info bc-third-info">
            <span>${mst.dateStr} &bull; ${mst.timeStr} MST</span>
            ${stad ? `<span>&#x1F3DF; ${stad.name}, ${stad.city}</span>` : ''}
          </div>
        </div>
      </div>`;
  }

  container.innerHTML = html;
}

/* =============================================
   DARK / LIGHT MODE
   ============================================= */

function bindDarkModeToggle() {
  const btn  = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Restore saved preference
  const saved = localStorage.getItem('wc2026-theme');
  if (saved === 'light') {
    html.setAttribute('data-theme', 'light');
    btn.textContent = '\u2600\uFE0F'; // ☀️
  }

  btn.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
      btn.textContent = '\u1F319'; // 🌙 — kept as unicode fallback
      btn.innerHTML   = '&#x1F319;';
      localStorage.setItem('wc2026-theme', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      btn.innerHTML = '&#x2600;&#xFE0F;';
      localStorage.setItem('wc2026-theme', 'light');
    }
  });
}

/* =============================================
   TEAM DETAIL MODAL
   ============================================= */

const CONF_COLORS = {
  UEFA: '#4a90d9', CONMEBOL: '#27ae60', CONCACAF: '#e74c3c',
  CAF: '#f39c12',  AFC: '#9b59b6',      OFC: '#1abc9c',
};

function openTeamModal(teamId) {
  const team = state.teamMap[teamId];
  if (!team) return;

  // All matches for this team, chronological
  const matches = state.data.matches
    .filter(m => m.homeTeam === teamId || m.awayTeam === teamId)
    .sort((a, b) => a.dateUTC.localeCompare(b.dateUTC));

  // --- Header ---
  const confColor = CONF_COLORS[team.confederation] || 'var(--text-secondary)';
  document.getElementById('modal-header').innerHTML = `
    <span class="modal-flag">${flagImg(team, 160)}</span>
    <div class="modal-team-info">
      <h2 id="modal-team-name">${team.name}</h2>
      <div class="modal-team-tags">
        <span class="tag tag-group">Group ${team.group}</span>
        <span class="tag" style="background:rgba(255,255,255,0.05); color:${confColor}; border:1px solid ${confColor}40">${team.confederation}</span>
        <span class="tag" style="background:rgba(255,255,255,0.04); color:var(--text-muted); border:1px solid var(--border)">${team.code}</span>
      </div>
    </div>`;

  // --- Match list ---
  const matchesHtml = matches.map(match => {
    const mst      = toMST(match.dateUTC);
    const isHome   = match.homeTeam === teamId;
    const oppId    = isHome ? match.awayTeam : match.homeTeam;
    const opp      = state.teamMap[oppId];
    const oppFlag  = flagImg(opp, 20);
    const oppName  = opp ? opp.name  : oppId;
    const stadium  = state.stadiumMap[match.stadiumId];
    const venue    = stadium ? `${stadium.name}, ${stadium.city}` : 'TBD';
    const roundTag = 'tag-' + match.round.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const groupLabel = match.group ? ` &middot; Group ${match.group}` : '';

    return `
      <div class="modal-match">
        <div class="modal-match-date">${mst.fullDateStr}, ${mst.year}</div>
        <div class="modal-match-teams">
          <div class="modal-match-team ${isHome ? 'highlighted' : ''}">
            <span class="modal-match-flag">${isHome ? flagImg(team, 20) : oppFlag}</span>
            <span class="modal-match-team-name">${isHome ? team.name : oppName}</span>
          </div>
          <span class="modal-match-vs">VS</span>
          <div class="modal-match-team away ${!isHome ? 'highlighted' : ''}">
            <span class="modal-match-team-name">${!isHome ? team.name : oppName}</span>
            <span class="modal-match-flag">${!isHome ? flagImg(team, 20) : oppFlag}</span>
          </div>
        </div>
        <div class="modal-match-info">
          <span>&#x1F550; ${mst.timeStr} MST</span>
          <span>&#x1F3DF; ${venue}</span>
          <span class="match-round-tag ${roundTag}">${match.round}${groupLabel}</span>
        </div>
      </div>`;
  }).join('');

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-section-title">Match Schedule &mdash; ${matches.length} match${matches.length !== 1 ? 'es' : ''}</div>
    ${matchesHtml || '<p style="color:var(--text-muted);font-size:.875rem">No matches scheduled yet.</p>'}`;

  // Footer action — jump to schedule filtered by this team
  const footerEl = document.getElementById('modal-footer-actions');
  footerEl.innerHTML = `
    <button class="btn-view-schedule" id="modal-view-schedule">
      &#x1F4C5; View all ${team.name} matches in Schedule
    </button>`;
  document.getElementById('modal-view-schedule').addEventListener('click', () => {
    closeTeamModal();
    document.querySelector('.nav-btn[data-tab="schedule"]')?.click();
    state.filters.search = team.name;
    document.getElementById('filter-search').value = team.name;
    refreshSchedule();
  });

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('active');
  overlay.removeAttribute('aria-hidden');
  document.getElementById('modal-close').focus();
  document.body.style.overflow = 'hidden';
}

function closeTeamModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function bindModal() {
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeTeamModal();
  });
  document.getElementById('modal-close').addEventListener('click', closeTeamModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeTeamModal();
  });
}

/** Event delegation — works even after renderTeams() replaces innerHTML */
function bindTeamCards() {
  document.getElementById('teams-content').addEventListener('click', e => {
    const card = e.target.closest('[data-team-id]');
    if (card && state.data) openTeamModal(card.dataset.teamId);
  });
}

/* =============================================
   COUNTDOWN TIMER
   ============================================= */

function startCountdown() {
  // Opening match: USA vs Mexico, June 11 2026 21:00 UTC
  const target = new Date('2026-06-11T21:00:00Z').getTime();

  function update() {
    const diff = target - Date.now();

    if (diff <= 0) {
      document.getElementById('hero-countdown').innerHTML =
        '<div class="countdown-started">&#x26BD; The tournament is underway!</div>';
      return;
    }

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000)  / 60000);
    const seconds = Math.floor((diff % 60000)    / 1000);

    document.getElementById('cd-days').textContent  = days;
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent  = String(minutes).padStart(2, '0');
    document.getElementById('cd-secs').textContent  = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* =============================================
   BOOTSTRAP
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  bindTabs();
  bindTeamFilters();
  bindTeamCards();
  bindModal();
  bindFilters();
  bindScheduleCards();
  bindDarkModeToggle();
  bindShareBtn();
  startCountdown();

  // Data is loaded async; populate filter <select> options after data arrives, then restore URL
  init().then(() => {
    if (state.data) {
      populateFilters();
      restoreFromURL();
    }
  });
});
