/* eslint-disable */
// Inline data — allows the app to run via file:// without a local HTTP server.
window.WC2026_DATA = {
  "tournament": {
    "name": "FIFA World Cup 2026",
    "year": 2026,
    "hosts": ["USA", "Canada", "Mexico"],
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "totalTeams": 48,
    "totalMatches": 104,
    "format": "12 groups of 4 teams. Top 2 per group + 8 best 3rd-place teams advance to Round of 32."
  },

  "stadiums": [
    { "id": 1,  "name": "MetLife Stadium",          "city": "East Rutherford", "state": "NJ",   "country": "USA",    "capacity": 82500, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/MetLife_Stadium_Exterior.jpg?width=800" },
    { "id": 2,  "name": "AT&T Stadium",             "city": "Arlington",       "state": "TX",   "country": "USA",    "capacity": 80000, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Arlington_June_2020_4_(AT%26T_Stadium).jpg?width=800" },
    { "id": 3,  "name": "SoFi Stadium",             "city": "Inglewood",       "state": "CA",   "country": "USA",    "capacity": 70240, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SoFi_Stadium_East_facade.jpg?width=800" },
    { "id": 4,  "name": "Levi's Stadium",           "city": "Santa Clara",     "state": "CA",   "country": "USA",    "capacity": 68500, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Entering_Levi%27s_Stadium.JPG?width=800" },
    { "id": 5,  "name": "Lumen Field",              "city": "Seattle",         "state": "WA",   "country": "USA",    "capacity": 69000, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/CenturyLink_Field_seen_from_Rizal_Park.jpg?width=800" },
    { "id": 6,  "name": "Hard Rock Stadium",        "city": "Miami Gardens",   "state": "FL",   "country": "USA",    "capacity": 65326, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hard_Rock_Stadium.jpg?width=800" },
    { "id": 7,  "name": "Lincoln Financial Field",  "city": "Philadelphia",    "state": "PA",   "country": "USA",    "capacity": 69796, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Lincoln_Financial_Field,_Philadelphia.jpg?width=800" },
    { "id": 8,  "name": "Gillette Stadium",         "city": "Foxborough",      "state": "MA",   "country": "USA",    "capacity": 65878, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gillette_Stadium.JPG?width=800" },
    { "id": 9,  "name": "Mercedes-Benz Stadium",    "city": "Atlanta",         "state": "GA",   "country": "USA",    "capacity": 71000, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Falcons_Opening_Day_-_MB_Stadium.jpg?width=800" },
    { "id": 10, "name": "Arrowhead Stadium",        "city": "Kansas City",     "state": "MO",   "country": "USA",    "capacity": 76416, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Arrowhead_Stadium_2010.JPG?width=800" },
    { "id": 11, "name": "BC Place",                 "city": "Vancouver",       "state": "BC",   "country": "Canada", "capacity": 54500, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/BC_Place,_Vancouver_(2012)_-_03.JPG?width=800" },
    { "id": 12, "name": "BMO Field",                "city": "Toronto",         "state": "ON",   "country": "Canada", "capacity": 45736, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/BMO_Field_exterior,_Toronto.JPG?width=800" },
    { "id": 13, "name": "Estadio Azteca",           "city": "Mexico City",     "state": "CDMX", "country": "Mexico", "capacity": 87523, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio_Azteca_1.JPG?width=800" },
    { "id": 14, "name": "Estadio Akron",            "city": "Guadalajara",     "state": "JAL",  "country": "Mexico", "capacity": 49850, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/EstadioAkronGDL.jpg?width=800" },
    { "id": 15, "name": "Estadio BBVA",             "city": "Monterrey",       "state": "NL",   "country": "Mexico", "capacity": 53500, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio_BBVA_Bancomer_desde_el_metro.JPG?width=800" }
  ],

  "teams": [
    { "id": "usa", "name": "United States",  "code": "USA", "flagCode": "us",     "flag": "\uD83C\uDDFA\uD83C\uDDF8", "group": "A", "confederation": "CONCACAF" },
    { "id": "mex", "name": "Mexico",         "code": "MEX", "flagCode": "mx",     "flag": "\uD83C\uDDF2\uD83C\uDDFD", "group": "A", "confederation": "CONCACAF" },
    { "id": "pol", "name": "Poland",         "code": "POL", "flagCode": "pl",     "flag": "\uD83C\uDDF5\uD83C\uDDF1", "group": "A", "confederation": "UEFA" },
    { "id": "ksa", "name": "Saudi Arabia",   "code": "KSA", "flagCode": "sa",     "flag": "\uD83C\uDDF8\uD83C\uDDE6", "group": "A", "confederation": "AFC" },

    { "id": "can", "name": "Canada",         "code": "CAN", "flagCode": "ca",     "flag": "\uD83C\uDDE8\uD83C\uDDE6", "group": "B", "confederation": "CONCACAF" },
    { "id": "eng", "name": "England",        "code": "ENG", "flagCode": "gb-eng", "flag": "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F", "group": "B", "confederation": "UEFA" },
    { "id": "sen", "name": "Senegal",        "code": "SEN", "flagCode": "sn",     "flag": "\uD83C\uDDF8\uD83C\uDDF3", "group": "B", "confederation": "CAF" },
    { "id": "jpn", "name": "Japan",          "code": "JPN", "flagCode": "jp",     "flag": "\uD83C\uDDEF\uD83C\uDDF5", "group": "B", "confederation": "AFC" },

    { "id": "bra", "name": "Brazil",         "code": "BRA", "flagCode": "br",     "flag": "\uD83C\uDDE7\uD83C\uDDF7", "group": "C", "confederation": "CONMEBOL" },
    { "id": "sui", "name": "Switzerland",    "code": "SUI", "flagCode": "ch",     "flag": "\uD83C\uDDE8\uD83C\uDDED", "group": "C", "confederation": "UEFA" },
    { "id": "srb", "name": "Serbia",         "code": "SRB", "flagCode": "rs",     "flag": "\uD83C\uDDF7\uD83C\uDDF8", "group": "C", "confederation": "UEFA" },
    { "id": "cmr", "name": "Cameroon",       "code": "CMR", "flagCode": "cm",     "flag": "\uD83C\uDDE8\uD83C\uDDF2", "group": "C", "confederation": "CAF" },

    { "id": "arg", "name": "Argentina",      "code": "ARG", "flagCode": "ar",     "flag": "\uD83C\uDDE6\uD83C\uDDF7", "group": "D", "confederation": "CONMEBOL" },
    { "id": "fra", "name": "France",         "code": "FRA", "flagCode": "fr",     "flag": "\uD83C\uDDEB\uD83C\uDDF7", "group": "D", "confederation": "UEFA" },
    { "id": "ecu", "name": "Ecuador",        "code": "ECU", "flagCode": "ec",     "flag": "\uD83C\uDDEA\uD83C\uDDE8", "group": "D", "confederation": "CONMEBOL" },
    { "id": "tun", "name": "Tunisia",        "code": "TUN", "flagCode": "tn",     "flag": "\uD83C\uDDF9\uD83C\uDDF3", "group": "D", "confederation": "CAF" },

    { "id": "esp", "name": "Spain",          "code": "ESP", "flagCode": "es",     "flag": "\uD83C\uDDEA\uD83C\uDDF8", "group": "E", "confederation": "UEFA" },
    { "id": "ger", "name": "Germany",        "code": "GER", "flagCode": "de",     "flag": "\uD83C\uDDE9\uD83C\uDDEA", "group": "E", "confederation": "UEFA" },
    { "id": "mar", "name": "Morocco",        "code": "MAR", "flagCode": "ma",     "flag": "\uD83C\uDDF2\uD83C\uDDE6", "group": "E", "confederation": "CAF" },
    { "id": "kor", "name": "South Korea",    "code": "KOR", "flagCode": "kr",     "flag": "\uD83C\uDDF0\uD83C\uDDF7", "group": "E", "confederation": "AFC" },

    { "id": "por", "name": "Portugal",       "code": "POR", "flagCode": "pt",     "flag": "\uD83C\uDDF5\uD83C\uDDF9", "group": "F", "confederation": "UEFA" },
    { "id": "ned", "name": "Netherlands",    "code": "NED", "flagCode": "nl",     "flag": "\uD83C\uDDF3\uD83C\uDDF1", "group": "F", "confederation": "UEFA" },
    { "id": "uru", "name": "Uruguay",        "code": "URU", "flagCode": "uy",     "flag": "\uD83C\uDDFA\uD83C\uDDFE", "group": "F", "confederation": "CONMEBOL" },
    { "id": "gha", "name": "Ghana",          "code": "GHA", "flagCode": "gh",     "flag": "\uD83C\uDDEC\uD83C\uDDED", "group": "F", "confederation": "CAF" },

    { "id": "bel", "name": "Belgium",        "code": "BEL", "flagCode": "be",     "flag": "\uD83C\uDDE7\uD83C\uDDEA", "group": "G", "confederation": "UEFA" },
    { "id": "cro", "name": "Croatia",        "code": "CRO", "flagCode": "hr",     "flag": "\uD83C\uDDED\uD83C\uDDF7", "group": "G", "confederation": "UEFA" },
    { "id": "irn", "name": "Iran",           "code": "IRN", "flagCode": "ir",     "flag": "\uD83C\uDDEE\uD83C\uDDF7", "group": "G", "confederation": "AFC" },
    { "id": "aus", "name": "Australia",      "code": "AUS", "flagCode": "au",     "flag": "\uD83C\uDDE6\uD83C\uDDFA", "group": "G", "confederation": "AFC" },

    { "id": "ita", "name": "Italy",          "code": "ITA", "flagCode": "it",     "flag": "\uD83C\uDDEE\uD83C\uDDF9", "group": "H", "confederation": "UEFA" },
    { "id": "den", "name": "Denmark",        "code": "DEN", "flagCode": "dk",     "flag": "\uD83C\uDDE9\uD83C\uDDF0", "group": "H", "confederation": "UEFA" },
    { "id": "col", "name": "Colombia",       "code": "COL", "flagCode": "co",     "flag": "\uD83C\uDDE8\uD83C\uDDF4", "group": "H", "confederation": "CONMEBOL" },
    { "id": "egy", "name": "Egypt",          "code": "EGY", "flagCode": "eg",     "flag": "\uD83C\uDDEA\uD83C\uDDEC", "group": "H", "confederation": "CAF" },

    { "id": "tur", "name": "Turkey",         "code": "TUR", "flagCode": "tr",     "flag": "\uD83C\uDDF9\uD83C\uDDF7", "group": "I", "confederation": "UEFA" },
    { "id": "nga", "name": "Nigeria",        "code": "NGA", "flagCode": "ng",     "flag": "\uD83C\uDDF3\uD83C\uDDEC", "group": "I", "confederation": "CAF" },
    { "id": "aut", "name": "Austria",        "code": "AUT", "flagCode": "at",     "flag": "\uD83C\uDDE6\uD83C\uDDF9", "group": "I", "confederation": "UEFA" },
    { "id": "pan", "name": "Panama",         "code": "PAN", "flagCode": "pa",     "flag": "\uD83C\uDDF5\uD83C\uDDE6", "group": "I", "confederation": "CONCACAF" },

    { "id": "sco", "name": "Scotland",       "code": "SCO", "flagCode": "gb-sct", "flag": "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F", "group": "J", "confederation": "UEFA" },
    { "id": "qat", "name": "Qatar",          "code": "QAT", "flagCode": "qa",     "flag": "\uD83C\uDDF6\uD83C\uDDE6", "group": "J", "confederation": "AFC" },
    { "id": "mli", "name": "Mali",           "code": "MLI", "flagCode": "ml",     "flag": "\uD83C\uDDF2\uD83C\uDDF1", "group": "J", "confederation": "CAF" },
    { "id": "hon", "name": "Honduras",       "code": "HON", "flagCode": "hn",     "flag": "\uD83C\uDDED\uD83C\uDDF3", "group": "J", "confederation": "CONCACAF" },

    { "id": "cod", "name": "DR Congo",       "code": "COD", "flagCode": "cd",     "flag": "\uD83C\uDDE8\uD83C\uDDE9", "group": "K", "confederation": "CAF" },
    { "id": "ven", "name": "Venezuela",      "code": "VEN", "flagCode": "ve",     "flag": "\uD83C\uDDFB\uD83C\uDDEA", "group": "K", "confederation": "CONMEBOL" },
    { "id": "jor", "name": "Jordan",         "code": "JOR", "flagCode": "jo",     "flag": "\uD83C\uDDEF\uD83C\uDDF4", "group": "K", "confederation": "AFC" },
    { "id": "nzl", "name": "New Zealand",    "code": "NZL", "flagCode": "nz",     "flag": "\uD83C\uDDF3\uD83C\uDDFF", "group": "K", "confederation": "OFC" },

    { "id": "irq", "name": "Iraq",           "code": "IRQ", "flagCode": "iq",     "flag": "\uD83C\uDDEE\uD83C\uDDF6", "group": "L", "confederation": "AFC" },
    { "id": "slv", "name": "El Salvador",    "code": "SLV", "flagCode": "sv",     "flag": "\uD83C\uDDF8\uD83C\uDDFB", "group": "L", "confederation": "CONCACAF" },
    { "id": "bol", "name": "Bolivia",        "code": "BOL", "flagCode": "bo",     "flag": "\uD83C\uDDE7\uD83C\uDDF4", "group": "L", "confederation": "CONMEBOL" },
    { "id": "alb", "name": "Albania",        "code": "ALB", "flagCode": "al",     "flag": "\uD83C\uDDE6\uD83C\uDDF1", "group": "L", "confederation": "UEFA" }
  ],

  "matches": [
    { "id": 1,  "matchNum": 1,  "round": "Group Stage", "group": "A", "homeTeam": "usa", "awayTeam": "mex", "dateUTC": "2026-06-11T21:00:00Z", "stadiumId": 2  },
    { "id": 2,  "matchNum": 2,  "round": "Group Stage", "group": "A", "homeTeam": "pol", "awayTeam": "ksa", "dateUTC": "2026-06-11T18:00:00Z", "stadiumId": 6  },
    { "id": 3,  "matchNum": 7,  "round": "Group Stage", "group": "A", "homeTeam": "usa", "awayTeam": "pol", "dateUTC": "2026-06-17T21:00:00Z", "stadiumId": 1  },
    { "id": 4,  "matchNum": 8,  "round": "Group Stage", "group": "A", "homeTeam": "mex", "awayTeam": "ksa", "dateUTC": "2026-06-17T18:00:00Z", "stadiumId": 13 },
    { "id": 5,  "matchNum": 41, "round": "Group Stage", "group": "A", "homeTeam": "usa", "awayTeam": "ksa", "dateUTC": "2026-06-26T21:00:00Z", "stadiumId": 4  },
    { "id": 6,  "matchNum": 42, "round": "Group Stage", "group": "A", "homeTeam": "mex", "awayTeam": "pol", "dateUTC": "2026-06-26T21:00:00Z", "stadiumId": 10 },

    { "id": 7,  "matchNum": 3,  "round": "Group Stage", "group": "B", "homeTeam": "can", "awayTeam": "eng", "dateUTC": "2026-06-12T21:00:00Z", "stadiumId": 12 },
    { "id": 8,  "matchNum": 4,  "round": "Group Stage", "group": "B", "homeTeam": "sen", "awayTeam": "jpn", "dateUTC": "2026-06-12T18:00:00Z", "stadiumId": 9  },
    { "id": 9,  "matchNum": 9,  "round": "Group Stage", "group": "B", "homeTeam": "can", "awayTeam": "sen", "dateUTC": "2026-06-18T21:00:00Z", "stadiumId": 11 },
    { "id": 10, "matchNum": 10, "round": "Group Stage", "group": "B", "homeTeam": "eng", "awayTeam": "jpn", "dateUTC": "2026-06-18T18:00:00Z", "stadiumId": 8  },
    { "id": 11, "matchNum": 43, "round": "Group Stage", "group": "B", "homeTeam": "can", "awayTeam": "jpn", "dateUTC": "2026-06-27T21:00:00Z", "stadiumId": 5  },
    { "id": 12, "matchNum": 44, "round": "Group Stage", "group": "B", "homeTeam": "eng", "awayTeam": "sen", "dateUTC": "2026-06-27T21:00:00Z", "stadiumId": 7  },

    { "id": 13, "matchNum": 5,  "round": "Group Stage", "group": "C", "homeTeam": "bra", "awayTeam": "sui", "dateUTC": "2026-06-13T21:00:00Z", "stadiumId": 8  },
    { "id": 14, "matchNum": 6,  "round": "Group Stage", "group": "C", "homeTeam": "srb", "awayTeam": "cmr", "dateUTC": "2026-06-13T18:00:00Z", "stadiumId": 3  },
    { "id": 15, "matchNum": 11, "round": "Group Stage", "group": "C", "homeTeam": "bra", "awayTeam": "srb", "dateUTC": "2026-06-20T21:00:00Z", "stadiumId": 6  },
    { "id": 16, "matchNum": 12, "round": "Group Stage", "group": "C", "homeTeam": "sui", "awayTeam": "cmr", "dateUTC": "2026-06-20T18:00:00Z", "stadiumId": 11 },
    { "id": 17, "matchNum": 45, "round": "Group Stage", "group": "C", "homeTeam": "bra", "awayTeam": "cmr", "dateUTC": "2026-06-28T21:00:00Z", "stadiumId": 1  },
    { "id": 18, "matchNum": 46, "round": "Group Stage", "group": "C", "homeTeam": "sui", "awayTeam": "srb", "dateUTC": "2026-06-28T21:00:00Z", "stadiumId": 3  },

    { "id": 19, "matchNum": 13, "round": "Group Stage", "group": "D", "homeTeam": "arg", "awayTeam": "fra", "dateUTC": "2026-06-14T21:00:00Z", "stadiumId": 1  },
    { "id": 20, "matchNum": 14, "round": "Group Stage", "group": "D", "homeTeam": "ecu", "awayTeam": "tun", "dateUTC": "2026-06-14T18:00:00Z", "stadiumId": 2  },
    { "id": 21, "matchNum": 19, "round": "Group Stage", "group": "D", "homeTeam": "arg", "awayTeam": "ecu", "dateUTC": "2026-06-20T15:00:00Z", "stadiumId": 6  },
    { "id": 22, "matchNum": 20, "round": "Group Stage", "group": "D", "homeTeam": "fra", "awayTeam": "tun", "dateUTC": "2026-06-20T21:00:00Z", "stadiumId": 7  },
    { "id": 23, "matchNum": 47, "round": "Group Stage", "group": "D", "homeTeam": "arg", "awayTeam": "tun", "dateUTC": "2026-06-29T21:00:00Z", "stadiumId": 3  },
    { "id": 24, "matchNum": 48, "round": "Group Stage", "group": "D", "homeTeam": "fra", "awayTeam": "ecu", "dateUTC": "2026-06-29T21:00:00Z", "stadiumId": 12 },

    { "id": 25, "matchNum": 15, "round": "Group Stage", "group": "E", "homeTeam": "esp", "awayTeam": "ger", "dateUTC": "2026-06-14T18:00:00Z", "stadiumId": 5  },
    { "id": 26, "matchNum": 16, "round": "Group Stage", "group": "E", "homeTeam": "mar", "awayTeam": "kor", "dateUTC": "2026-06-14T15:00:00Z", "stadiumId": 4  },
    { "id": 27, "matchNum": 21, "round": "Group Stage", "group": "E", "homeTeam": "esp", "awayTeam": "mar", "dateUTC": "2026-06-21T21:00:00Z", "stadiumId": 2  },
    { "id": 28, "matchNum": 22, "round": "Group Stage", "group": "E", "homeTeam": "ger", "awayTeam": "kor", "dateUTC": "2026-06-21T18:00:00Z", "stadiumId": 9  },
    { "id": 29, "matchNum": 49, "round": "Group Stage", "group": "E", "homeTeam": "esp", "awayTeam": "kor", "dateUTC": "2026-06-30T21:00:00Z", "stadiumId": 10 },
    { "id": 30, "matchNum": 50, "round": "Group Stage", "group": "E", "homeTeam": "ger", "awayTeam": "mar", "dateUTC": "2026-06-30T21:00:00Z", "stadiumId": 4  },

    { "id": 31, "matchNum": 17, "round": "Group Stage", "group": "F", "homeTeam": "por", "awayTeam": "ned", "dateUTC": "2026-06-15T21:00:00Z", "stadiumId": 1  },
    { "id": 32, "matchNum": 18, "round": "Group Stage", "group": "F", "homeTeam": "uru", "awayTeam": "gha", "dateUTC": "2026-06-15T18:00:00Z", "stadiumId": 13 },
    { "id": 33, "matchNum": 23, "round": "Group Stage", "group": "F", "homeTeam": "por", "awayTeam": "uru", "dateUTC": "2026-06-22T21:00:00Z", "stadiumId": 2  },
    { "id": 34, "matchNum": 24, "round": "Group Stage", "group": "F", "homeTeam": "ned", "awayTeam": "gha", "dateUTC": "2026-06-22T18:00:00Z", "stadiumId": 11 },
    { "id": 35, "matchNum": 51, "round": "Group Stage", "group": "F", "homeTeam": "por", "awayTeam": "gha", "dateUTC": "2026-06-30T15:00:00Z", "stadiumId": 8  },
    { "id": 36, "matchNum": 52, "round": "Group Stage", "group": "F", "homeTeam": "ned", "awayTeam": "uru", "dateUTC": "2026-06-30T15:00:00Z", "stadiumId": 3  },

    { "id": 37, "matchNum": 25, "round": "Group Stage", "group": "G", "homeTeam": "bel", "awayTeam": "cro", "dateUTC": "2026-06-15T15:00:00Z", "stadiumId": 7  },
    { "id": 38, "matchNum": 26, "round": "Group Stage", "group": "G", "homeTeam": "irn", "awayTeam": "aus", "dateUTC": "2026-06-15T21:00:00Z", "stadiumId": 5  },
    { "id": 39, "matchNum": 27, "round": "Group Stage", "group": "G", "homeTeam": "bel", "awayTeam": "irn", "dateUTC": "2026-06-22T15:00:00Z", "stadiumId": 9  },
    { "id": 40, "matchNum": 28, "round": "Group Stage", "group": "G", "homeTeam": "cro", "awayTeam": "aus", "dateUTC": "2026-06-22T21:00:00Z", "stadiumId": 12 },
    { "id": 41, "matchNum": 53, "round": "Group Stage", "group": "G", "homeTeam": "bel", "awayTeam": "aus", "dateUTC": "2026-07-01T21:00:00Z", "stadiumId": 8  },
    { "id": 42, "matchNum": 54, "round": "Group Stage", "group": "G", "homeTeam": "cro", "awayTeam": "irn", "dateUTC": "2026-07-01T21:00:00Z", "stadiumId": 10 },

    { "id": 43, "matchNum": 29, "round": "Group Stage", "group": "H", "homeTeam": "ita", "awayTeam": "den", "dateUTC": "2026-06-16T21:00:00Z", "stadiumId": 7  },
    { "id": 44, "matchNum": 30, "round": "Group Stage", "group": "H", "homeTeam": "col", "awayTeam": "egy", "dateUTC": "2026-06-16T18:00:00Z", "stadiumId": 14 },
    { "id": 45, "matchNum": 31, "round": "Group Stage", "group": "H", "homeTeam": "ita", "awayTeam": "col", "dateUTC": "2026-06-23T21:00:00Z", "stadiumId": 1  },
    { "id": 46, "matchNum": 32, "round": "Group Stage", "group": "H", "homeTeam": "den", "awayTeam": "egy", "dateUTC": "2026-06-23T18:00:00Z", "stadiumId": 5  },
    { "id": 47, "matchNum": 55, "round": "Group Stage", "group": "H", "homeTeam": "ita", "awayTeam": "egy", "dateUTC": "2026-07-01T15:00:00Z", "stadiumId": 2  },
    { "id": 48, "matchNum": 56, "round": "Group Stage", "group": "H", "homeTeam": "den", "awayTeam": "col", "dateUTC": "2026-07-01T15:00:00Z", "stadiumId": 9  },

    { "id": 49, "matchNum": 33, "round": "Group Stage", "group": "I", "homeTeam": "tur", "awayTeam": "nga", "dateUTC": "2026-06-16T15:00:00Z", "stadiumId": 15 },
    { "id": 50, "matchNum": 34, "round": "Group Stage", "group": "I", "homeTeam": "aut", "awayTeam": "pan", "dateUTC": "2026-06-16T21:00:00Z", "stadiumId": 10 },
    { "id": 51, "matchNum": 35, "round": "Group Stage", "group": "I", "homeTeam": "tur", "awayTeam": "aut", "dateUTC": "2026-06-23T15:00:00Z", "stadiumId": 6  },
    { "id": 52, "matchNum": 36, "round": "Group Stage", "group": "I", "homeTeam": "nga", "awayTeam": "pan", "dateUTC": "2026-06-23T21:00:00Z", "stadiumId": 8  },
    { "id": 53, "matchNum": 57, "round": "Group Stage", "group": "I", "homeTeam": "tur", "awayTeam": "pan", "dateUTC": "2026-07-02T21:00:00Z", "stadiumId": 3  },
    { "id": 54, "matchNum": 58, "round": "Group Stage", "group": "I", "homeTeam": "nga", "awayTeam": "aut", "dateUTC": "2026-07-02T21:00:00Z", "stadiumId": 11 },

    { "id": 55, "matchNum": 37, "round": "Group Stage", "group": "J", "homeTeam": "sco", "awayTeam": "qat", "dateUTC": "2026-06-17T15:00:00Z", "stadiumId": 12 },
    { "id": 56, "matchNum": 38, "round": "Group Stage", "group": "J", "homeTeam": "mli", "awayTeam": "hon", "dateUTC": "2026-06-17T21:00:00Z", "stadiumId": 13 },
    { "id": 57, "matchNum": 39, "round": "Group Stage", "group": "J", "homeTeam": "sco", "awayTeam": "mli", "dateUTC": "2026-06-24T15:00:00Z", "stadiumId": 4  },
    { "id": 58, "matchNum": 40, "round": "Group Stage", "group": "J", "homeTeam": "qat", "awayTeam": "hon", "dateUTC": "2026-06-24T21:00:00Z", "stadiumId": 14 },
    { "id": 59, "matchNum": 59, "round": "Group Stage", "group": "J", "homeTeam": "sco", "awayTeam": "hon", "dateUTC": "2026-07-02T15:00:00Z", "stadiumId": 7  },
    { "id": 60, "matchNum": 60, "round": "Group Stage", "group": "J", "homeTeam": "qat", "awayTeam": "mli", "dateUTC": "2026-07-02T15:00:00Z", "stadiumId": 15 },

    { "id": 61, "matchNum": 61, "round": "Group Stage", "group": "K", "homeTeam": "cod", "awayTeam": "ven", "dateUTC": "2026-06-17T18:00:00Z", "stadiumId": 15 },
    { "id": 62, "matchNum": 62, "round": "Group Stage", "group": "K", "homeTeam": "jor", "awayTeam": "nzl", "dateUTC": "2026-06-17T15:00:00Z", "stadiumId": 6  },
    { "id": 63, "matchNum": 63, "round": "Group Stage", "group": "K", "homeTeam": "cod", "awayTeam": "jor", "dateUTC": "2026-06-24T18:00:00Z", "stadiumId": 5  },
    { "id": 64, "matchNum": 64, "round": "Group Stage", "group": "K", "homeTeam": "ven", "awayTeam": "nzl", "dateUTC": "2026-06-24T15:00:00Z", "stadiumId": 14 },
    { "id": 65, "matchNum": 65, "round": "Group Stage", "group": "K", "homeTeam": "cod", "awayTeam": "nzl", "dateUTC": "2026-07-03T21:00:00Z", "stadiumId": 10 },
    { "id": 66, "matchNum": 66, "round": "Group Stage", "group": "K", "homeTeam": "ven", "awayTeam": "jor", "dateUTC": "2026-07-03T21:00:00Z", "stadiumId": 12 },

    { "id": 67, "matchNum": 67, "round": "Group Stage", "group": "L", "homeTeam": "irq", "awayTeam": "slv", "dateUTC": "2026-06-18T15:00:00Z", "stadiumId": 13 },
    { "id": 68, "matchNum": 68, "round": "Group Stage", "group": "L", "homeTeam": "bol", "awayTeam": "alb", "dateUTC": "2026-06-18T21:00:00Z", "stadiumId": 14 },
    { "id": 69, "matchNum": 69, "round": "Group Stage", "group": "L", "homeTeam": "irq", "awayTeam": "bol", "dateUTC": "2026-06-25T15:00:00Z", "stadiumId": 15 },
    { "id": 70, "matchNum": 70, "round": "Group Stage", "group": "L", "homeTeam": "slv", "awayTeam": "alb", "dateUTC": "2026-06-25T21:00:00Z", "stadiumId": 4  },
    { "id": 71, "matchNum": 71, "round": "Group Stage", "group": "L", "homeTeam": "irq", "awayTeam": "alb", "dateUTC": "2026-07-03T21:00:00Z", "stadiumId": 13 },
    { "id": 72, "matchNum": 72, "round": "Group Stage", "group": "L", "homeTeam": "slv", "awayTeam": "bol", "dateUTC": "2026-07-03T21:00:00Z", "stadiumId": 14 },

    { "id": 73,  "matchNum": 73,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group A",         "awayTeam": "Runner-up Group D",      "dateUTC": "2026-07-05T21:00:00Z", "stadiumId": 1  },
    { "id": 74,  "matchNum": 74,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group B",         "awayTeam": "Runner-up Group C",      "dateUTC": "2026-07-05T18:00:00Z", "stadiumId": 2  },
    { "id": 75,  "matchNum": 75,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group C",         "awayTeam": "Runner-up Group B",      "dateUTC": "2026-07-05T15:00:00Z", "stadiumId": 3  },
    { "id": 76,  "matchNum": 76,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group D",         "awayTeam": "Runner-up Group A",      "dateUTC": "2026-07-06T21:00:00Z", "stadiumId": 6  },
    { "id": 77,  "matchNum": 77,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group E",         "awayTeam": "Runner-up Group H",      "dateUTC": "2026-07-06T18:00:00Z", "stadiumId": 4  },
    { "id": 78,  "matchNum": 78,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group F",         "awayTeam": "Runner-up Group G",      "dateUTC": "2026-07-06T15:00:00Z", "stadiumId": 5  },
    { "id": 79,  "matchNum": 79,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group G",         "awayTeam": "Runner-up Group F",      "dateUTC": "2026-07-07T21:00:00Z", "stadiumId": 8  },
    { "id": 80,  "matchNum": 80,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group H",         "awayTeam": "Runner-up Group E",      "dateUTC": "2026-07-07T18:00:00Z", "stadiumId": 7  },
    { "id": 81,  "matchNum": 81,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group I",         "awayTeam": "Runner-up Group L",      "dateUTC": "2026-07-07T15:00:00Z", "stadiumId": 9  },
    { "id": 82,  "matchNum": 82,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group J",         "awayTeam": "Runner-up Group K",      "dateUTC": "2026-07-08T21:00:00Z", "stadiumId": 11 },
    { "id": 83,  "matchNum": 83,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group K",         "awayTeam": "Runner-up Group J",      "dateUTC": "2026-07-08T18:00:00Z", "stadiumId": 12 },
    { "id": 84,  "matchNum": 84,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group L",         "awayTeam": "Runner-up Group I",      "dateUTC": "2026-07-08T15:00:00Z", "stadiumId": 10 },
    { "id": 85,  "matchNum": 85,  "round": "Round of 32", "group": null, "homeTeam": "Best 3rd (Group A/B/C)", "awayTeam": "Best 3rd (Group D/E/F)", "dateUTC": "2026-07-09T21:00:00Z", "stadiumId": 13 },
    { "id": 86,  "matchNum": 86,  "round": "Round of 32", "group": null, "homeTeam": "Best 3rd (Group G/H/I)", "awayTeam": "Best 3rd (Group J/K/L)", "dateUTC": "2026-07-09T18:00:00Z", "stadiumId": 14 },
    { "id": 87,  "matchNum": 87,  "round": "Round of 32", "group": null, "homeTeam": "TBD",                    "awayTeam": "TBD",                    "dateUTC": "2026-07-09T15:00:00Z", "stadiumId": 15 },
    { "id": 88,  "matchNum": 88,  "round": "Round of 32", "group": null, "homeTeam": "TBD",                    "awayTeam": "TBD",                    "dateUTC": "2026-07-10T21:00:00Z", "stadiumId": 2  },

    { "id": 89,  "matchNum": 89,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 1",  "awayTeam": "R32 Winner 2",  "dateUTC": "2026-07-11T21:00:00Z", "stadiumId": 1  },
    { "id": 90,  "matchNum": 90,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 3",  "awayTeam": "R32 Winner 4",  "dateUTC": "2026-07-11T18:00:00Z", "stadiumId": 3  },
    { "id": 91,  "matchNum": 91,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 5",  "awayTeam": "R32 Winner 6",  "dateUTC": "2026-07-12T21:00:00Z", "stadiumId": 6  },
    { "id": 92,  "matchNum": 92,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 7",  "awayTeam": "R32 Winner 8",  "dateUTC": "2026-07-12T18:00:00Z", "stadiumId": 2  },
    { "id": 93,  "matchNum": 93,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 9",  "awayTeam": "R32 Winner 10", "dateUTC": "2026-07-12T15:00:00Z", "stadiumId": 8  },
    { "id": 94,  "matchNum": 94,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 11", "awayTeam": "R32 Winner 12", "dateUTC": "2026-07-13T21:00:00Z", "stadiumId": 5  },
    { "id": 95,  "matchNum": 95,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 13", "awayTeam": "R32 Winner 14", "dateUTC": "2026-07-13T18:00:00Z", "stadiumId": 7  },
    { "id": 96,  "matchNum": 96,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 15", "awayTeam": "R32 Winner 16", "dateUTC": "2026-07-13T15:00:00Z", "stadiumId": 9  },

    { "id": 97,  "matchNum": 97,  "round": "Quarter-finals", "group": null, "homeTeam": "R16 Winner 1", "awayTeam": "R16 Winner 2", "dateUTC": "2026-07-15T21:00:00Z", "stadiumId": 1  },
    { "id": 98,  "matchNum": 98,  "round": "Quarter-finals", "group": null, "homeTeam": "R16 Winner 3", "awayTeam": "R16 Winner 4", "dateUTC": "2026-07-15T18:00:00Z", "stadiumId": 2  },
    { "id": 99,  "matchNum": 99,  "round": "Quarter-finals", "group": null, "homeTeam": "R16 Winner 5", "awayTeam": "R16 Winner 6", "dateUTC": "2026-07-16T21:00:00Z", "stadiumId": 3  },
    { "id": 100, "matchNum": 100, "round": "Quarter-finals", "group": null, "homeTeam": "R16 Winner 7", "awayTeam": "R16 Winner 8", "dateUTC": "2026-07-16T18:00:00Z", "stadiumId": 6  },

    { "id": 101, "matchNum": 101, "round": "Semi-finals", "group": null, "homeTeam": "QF Winner 1", "awayTeam": "QF Winner 2", "dateUTC": "2026-07-14T21:00:00Z", "stadiumId": 1  },
    { "id": 102, "matchNum": 102, "round": "Semi-finals", "group": null, "homeTeam": "QF Winner 3", "awayTeam": "QF Winner 4", "dateUTC": "2026-07-15T21:00:00Z", "stadiumId": 2  },

    { "id": 103, "matchNum": 103, "round": "Third Place", "group": null, "homeTeam": "SF Loser 1",  "awayTeam": "SF Loser 2",  "dateUTC": "2026-07-18T21:00:00Z", "stadiumId": 6  },
    { "id": 104, "matchNum": 104, "round": "Final",       "group": null, "homeTeam": "SF Winner 1", "awayTeam": "SF Winner 2", "dateUTC": "2026-07-19T21:00:00Z", "stadiumId": 1  }
  ]
};
