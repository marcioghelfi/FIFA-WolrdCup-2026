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

  // Active filters for schedule
  filters: {
    round: 'all',
    group: 'all',
    search: '',
    date: '',
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
    const response = await fetch('./data/worldcup2026.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.data = await response.json();

    // Build lookup maps for O(1) access
    state.teamMap   = Object.fromEntries(state.data.teams.map(t => [t.id, t]));
    state.stadiumMap = Object.fromEntries(state.data.stadiums.map(s => [s.id, s]));

    renderTeams();
    renderSchedule();
    updateScheduleCount();

  } catch (err) {
    console.error('Failed to load data:', err);
    showError('teams-content',    'Could not load team data. Make sure you\'re running this via a local HTTP server (not file://).');
    showError('schedule-content', 'Could not load schedule data.');
  }
}

/* =============================================
   TEAMS RENDERING
   ============================================= */

function renderTeams() {
  const teams = state.data.teams;
  const container = document.getElementById('teams-content');

  // Sort: by group, then by name within group
  const sorted = [...teams].sort((a, b) =>
    a.group.localeCompare(b.group) || a.name.localeCompare(b.name)
  );

  container.innerHTML = sorted.map(team => `
    <div class="team-card" data-conf="${team.confederation}" title="Group ${team.group} · ${team.confederation}">
      <div class="team-flag">${team.flag}</div>
      <div class="team-name">${team.name}</div>
      <div class="team-code">${team.code}</div>
      <div class="team-meta">
        <span class="tag tag-group">Group ${team.group}</span>
        <span class="tag tag-conf">${team.confederation}</span>
      </div>
    </div>
  `).join('');

  // Update count badge
  document.getElementById('teams-count').textContent = teams.length;
}

/* =============================================
   SCHEDULE RENDERING
   ============================================= */

/**
 * Get the filtered and sorted list of matches based on current state.filters.
 */
function getFilteredMatches() {
  const { round, group, search, date } = state.filters;
  const matches = state.data.matches;

  return matches.filter(match => {
    // Round filter
    if (round !== 'all' && match.round !== round) return false;

    // Group filter (only applicable to group stage matches)
    if (group !== 'all') {
      if (!match.group || match.group !== group) return false;
    }

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

  const homeFlag = homeTeamObj ? homeTeamObj.flag : '&#x2753;';
  const awayFlag = awayTeamObj ? awayTeamObj.flag : '&#x2753;';
  const homeName = homeTeamObj ? homeTeamObj.name : match.homeTeam;
  const awayName = awayTeamObj ? awayTeamObj.name : match.awayTeam;
  const homeCode = homeTeamObj ? homeTeamObj.code : '';
  const awayCode = awayTeamObj ? awayTeamObj.code : '';

  const isTBD = !homeTeamObj || !awayTeamObj;

  // CSS classes for the card
  const roundClass = match.round === 'Final' ? 'round-final' : '';

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

      <!-- Footer: stadium + tags -->
      <div class="match-footer">
        <span class="match-num">#${match.matchNum}</span>
        <span class="match-stadium">&#x1F3DF; ${stadiumLabel}</span>
        ${groupTag}
        <span class="match-round-tag ${roundTagClass}">${match.round}</span>
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
  const roundSel  = document.getElementById('filter-round');
  const groupSel  = document.getElementById('filter-group');
  const searchIn  = document.getElementById('filter-search');
  const dateIn    = document.getElementById('filter-date');
  const resetBtn  = document.getElementById('filter-reset');

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

  searchIn.addEventListener('input', () => {
    state.filters.search = searchIn.value;
    refreshSchedule();
  });

  dateIn.addEventListener('change', () => {
    state.filters.date = dateIn.value; // "YYYY-MM-DD" from <input type="date">
    refreshSchedule();
  });

  resetBtn.addEventListener('click', () => {
    state.filters = { round: 'all', group: 'all', search: '', date: '' };
    roundSel.value  = 'all';
    groupSel.value  = 'all';
    searchIn.value  = '';
    dateIn.value    = '';
    refreshSchedule();
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
  const tabs = document.querySelectorAll('.nav-btn[data-tab]');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Update active nav button
      tabs.forEach(b => b.classList.toggle('active', b === btn));

      // Show/hide sections
      document.querySelectorAll('.section[data-section]').forEach(sec => {
        sec.classList.toggle('active', sec.dataset.section === target);
      });

      state.activeTab = target;
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
   BOOTSTRAP
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  bindTabs();

  // Data is loaded async; populate filters after data arrives
  init().then(() => {
    if (state.data) populateFilters();
  });
});
