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
    { "id": 1,  "name": "MetLife Stadium",         "city": "East Rutherford", "state": "NJ",   "country": "USA",    "capacity": 82500, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/MetLife_Stadium_Exterior.jpg?width=800" },
    { "id": 2,  "name": "AT&T Stadium",            "city": "Arlington",       "state": "TX",   "country": "USA",    "capacity": 80000, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Arlington_June_2020_4_(AT%26T_Stadium).jpg?width=800" },
    { "id": 3,  "name": "SoFi Stadium",            "city": "Inglewood",       "state": "CA",   "country": "USA",    "capacity": 70240, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/SoFi_Stadium_East_facade.jpg?width=800" },
    { "id": 4,  "name": "Levi's Stadium",          "city": "Santa Clara",     "state": "CA",   "country": "USA",    "capacity": 68500, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Entering_Levi%27s_Stadium.JPG?width=800" },
    { "id": 5,  "name": "Lumen Field",             "city": "Seattle",         "state": "WA",   "country": "USA",    "capacity": 69000, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/CenturyLink_Field_seen_from_Rizal_Park.jpg?width=800" },
    { "id": 6,  "name": "Hard Rock Stadium",       "city": "Miami Gardens",   "state": "FL",   "country": "USA",    "capacity": 65326, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hard_Rock_Stadium.jpg?width=800" },
    { "id": 7,  "name": "Lincoln Financial Field", "city": "Philadelphia",    "state": "PA",   "country": "USA",    "capacity": 69796, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Lincoln_Financial_Field,_Philadelphia.jpg?width=800" },
    { "id": 8,  "name": "Gillette Stadium",        "city": "Foxborough",      "state": "MA",   "country": "USA",    "capacity": 65878, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gillette_Stadium.JPG?width=800" },
    { "id": 9,  "name": "Mercedes-Benz Stadium",  "city": "Atlanta",         "state": "GA",   "country": "USA",    "capacity": 71000, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Falcons_Opening_Day_-_MB_Stadium.jpg?width=800" },
    { "id": 10, "name": "Arrowhead Stadium",       "city": "Kansas City",     "state": "MO",   "country": "USA",    "capacity": 76416, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Arrowhead_Stadium_2010.JPG?width=800" },
    { "id": 11, "name": "BC Place",                "city": "Vancouver",       "state": "BC",   "country": "Canada", "capacity": 54500, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/BC_Place,_Vancouver_(2012)_-_03.JPG?width=800" },
    { "id": 12, "name": "BMO Field",               "city": "Toronto",         "state": "ON",   "country": "Canada", "capacity": 45736, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/BMO_Field_exterior,_Toronto.JPG?width=800" },
    { "id": 13, "name": "Estadio Azteca",          "city": "Mexico City",     "state": "CDMX", "country": "Mexico", "capacity": 87523, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio_Azteca_1.JPG?width=800" },
    { "id": 14, "name": "Estadio Akron",           "city": "Guadalajara",     "state": "JAL",  "country": "Mexico", "capacity": 49850, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/EstadioAkronGDL.jpg?width=800" },
    { "id": 15, "name": "Estadio BBVA",            "city": "Monterrey",       "state": "NL",   "country": "Mexico", "capacity": 53500, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio_BBVA_Bancomer_desde_el_metro.JPG?width=800" },
    { "id": 16, "name": "NRG Stadium",             "city": "Houston",         "state": "TX",   "country": "USA",    "capacity": 72220, "image": "https://commons.wikimedia.org/wiki/Special:FilePath/NRG_Stadium.jpg?width=800" }
  ],

  "teams": [
    { "id": "mex",   "name": "Mexico",              "code": "MEX", "flagCode": "mx",     "flag": "\uD83C\uDDF2\uD83C\uDDFD", "group": "A", "confederation": "CONCACAF" },
    { "id": "kor",   "name": "South Korea",         "code": "KOR", "flagCode": "kr",     "flag": "\uD83C\uDDF0\uD83C\uDDF7", "group": "A", "confederation": "AFC" },
    { "id": "rsa",   "name": "South Africa",        "code": "RSA", "flagCode": "za",     "flag": "\uD83C\uDDFF\uD83C\uDDE6", "group": "A", "confederation": "CAF" },
    { "id": "tbd_a", "name": "UEFA Playoff D Winner","code": "TBD", "flagCode": null,     "flag": "\u2753",                   "group": "A", "confederation": "UEFA" },

    { "id": "can",   "name": "Canada",              "code": "CAN", "flagCode": "ca",     "flag": "\uD83C\uDDE8\uD83C\uDDE6", "group": "B", "confederation": "CONCACAF" },
    { "id": "sui",   "name": "Switzerland",         "code": "SUI", "flagCode": "ch",     "flag": "\uD83C\uDDE8\uD83C\uDDED", "group": "B", "confederation": "UEFA" },
    { "id": "qat",   "name": "Qatar",               "code": "QAT", "flagCode": "qa",     "flag": "\uD83C\uDDF6\uD83C\uDDE6", "group": "B", "confederation": "AFC" },
    { "id": "tbd_b", "name": "UEFA Playoff A Winner","code": "TBD", "flagCode": null,     "flag": "\u2753",                   "group": "B", "confederation": "UEFA" },

    { "id": "bra",   "name": "Brazil",              "code": "BRA", "flagCode": "br",     "flag": "\uD83C\uDDE7\uD83C\uDDF7", "group": "C", "confederation": "CONMEBOL" },
    { "id": "mar",   "name": "Morocco",             "code": "MAR", "flagCode": "ma",     "flag": "\uD83C\uDDF2\uD83C\uDDE6", "group": "C", "confederation": "CAF" },
    { "id": "hat",   "name": "Haiti",               "code": "HAI", "flagCode": "ht",     "flag": "\uD83C\uDDED\uD83C\uDDF9", "group": "C", "confederation": "CONCACAF" },
    { "id": "sco",   "name": "Scotland",            "code": "SCO", "flagCode": "gb-sct", "flag": "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F", "group": "C", "confederation": "UEFA" },

    { "id": "usa",   "name": "United States",       "code": "USA", "flagCode": "us",     "flag": "\uD83C\uDDFA\uD83C\uDDF8", "group": "D", "confederation": "CONCACAF" },
    { "id": "par",   "name": "Paraguay",            "code": "PAR", "flagCode": "py",     "flag": "\uD83C\uDDF5\uD83C\uDDFE", "group": "D", "confederation": "CONMEBOL" },
    { "id": "aus",   "name": "Australia",           "code": "AUS", "flagCode": "au",     "flag": "\uD83C\uDDE6\uD83C\uDDFA", "group": "D", "confederation": "AFC" },
    { "id": "tbd_d", "name": "UEFA Playoff C Winner","code": "TBD", "flagCode": null,     "flag": "\u2753",                   "group": "D", "confederation": "UEFA" },

    { "id": "ger",   "name": "Germany",             "code": "GER", "flagCode": "de",     "flag": "\uD83C\uDDE9\uD83C\uDDEA", "group": "E", "confederation": "UEFA" },
    { "id": "civ",   "name": "Côte d'Ivoire",       "code": "CIV", "flagCode": "ci",     "flag": "\uD83C\uDDE8\uD83C\uDDEE", "group": "E", "confederation": "CAF" },
    { "id": "ecu",   "name": "Ecuador",             "code": "ECU", "flagCode": "ec",     "flag": "\uD83C\uDDEA\uD83C\uDDE8", "group": "E", "confederation": "CONMEBOL" },
    { "id": "cur",   "name": "Curaçao",             "code": "CUR", "flagCode": "cw",     "flag": "\uD83C\uDDE8\uD83C\uDDFC", "group": "E", "confederation": "CONCACAF" },

    { "id": "ned",   "name": "Netherlands",         "code": "NED", "flagCode": "nl",     "flag": "\uD83C\uDDF3\uD83C\uDDF1", "group": "F", "confederation": "UEFA" },
    { "id": "jpn",   "name": "Japan",               "code": "JPN", "flagCode": "jp",     "flag": "\uD83C\uDDEF\uD83C\uDDF5", "group": "F", "confederation": "AFC" },
    { "id": "tun",   "name": "Tunisia",             "code": "TUN", "flagCode": "tn",     "flag": "\uD83C\uDDF9\uD83C\uDDF3", "group": "F", "confederation": "CAF" },
    { "id": "tbd_f", "name": "UEFA Playoff B Winner","code": "TBD", "flagCode": null,     "flag": "\u2753",                   "group": "F", "confederation": "UEFA" },

    { "id": "bel",   "name": "Belgium",             "code": "BEL", "flagCode": "be",     "flag": "\uD83C\uDDE7\uD83C\uDDEA", "group": "G", "confederation": "UEFA" },
    { "id": "irn",   "name": "Iran",                "code": "IRN", "flagCode": "ir",     "flag": "\uD83C\uDDEE\uD83C\uDDF7", "group": "G", "confederation": "AFC" },
    { "id": "nzl",   "name": "New Zealand",         "code": "NZL", "flagCode": "nz",     "flag": "\uD83C\uDDF3\uD83C\uDDFF", "group": "G", "confederation": "OFC" },
    { "id": "egy",   "name": "Egypt",               "code": "EGY", "flagCode": "eg",     "flag": "\uD83C\uDDEA\uD83C\uDDEC", "group": "G", "confederation": "CAF" },

    { "id": "esp",   "name": "Spain",               "code": "ESP", "flagCode": "es",     "flag": "\uD83C\uDDEA\uD83C\uDDF8", "group": "H", "confederation": "UEFA" },
    { "id": "uru",   "name": "Uruguay",             "code": "URU", "flagCode": "uy",     "flag": "\uD83C\uDDFA\uD83C\uDDFE", "group": "H", "confederation": "CONMEBOL" },
    { "id": "ksa",   "name": "Saudi Arabia",        "code": "KSA", "flagCode": "sa",     "flag": "\uD83C\uDDF8\uD83C\uDDE6", "group": "H", "confederation": "AFC" },
    { "id": "cpv",   "name": "Cabo Verde",          "code": "CPV", "flagCode": "cv",     "flag": "\uD83C\uDDE8\uD83C\uDDFB", "group": "H", "confederation": "CAF" },

    { "id": "fra",   "name": "France",              "code": "FRA", "flagCode": "fr",     "flag": "\uD83C\uDDEB\uD83C\uDDF7", "group": "I", "confederation": "UEFA" },
    { "id": "sen",   "name": "Senegal",             "code": "SEN", "flagCode": "sn",     "flag": "\uD83C\uDDF8\uD83C\uDDF3", "group": "I", "confederation": "CAF" },
    { "id": "nor",   "name": "Norway",              "code": "NOR", "flagCode": "no",     "flag": "\uD83C\uDDF3\uD83C\uDDF4", "group": "I", "confederation": "UEFA" },
    { "id": "tbd_i", "name": "IC Playoff 2 Winner", "code": "TBD", "flagCode": null,     "flag": "\u2753",                   "group": "I", "confederation": "AFC" },

    { "id": "arg",   "name": "Argentina",           "code": "ARG", "flagCode": "ar",     "flag": "\uD83C\uDDE6\uD83C\uDDF7", "group": "J", "confederation": "CONMEBOL" },
    { "id": "alg",   "name": "Algeria",             "code": "ALG", "flagCode": "dz",     "flag": "\uD83C\uDDE9\uD83C\uDDFF", "group": "J", "confederation": "CAF" },
    { "id": "aut",   "name": "Austria",             "code": "AUT", "flagCode": "at",     "flag": "\uD83C\uDDE6\uD83C\uDDF9", "group": "J", "confederation": "UEFA" },
    { "id": "jor",   "name": "Jordan",              "code": "JOR", "flagCode": "jo",     "flag": "\uD83C\uDDEF\uD83C\uDDF4", "group": "J", "confederation": "AFC" },

    { "id": "por",   "name": "Portugal",            "code": "POR", "flagCode": "pt",     "flag": "\uD83C\uDDF5\uD83C\uDDF9", "group": "K", "confederation": "UEFA" },
    { "id": "col",   "name": "Colombia",            "code": "COL", "flagCode": "co",     "flag": "\uD83C\uDDE8\uD83C\uDDF4", "group": "K", "confederation": "CONMEBOL" },
    { "id": "uzb",   "name": "Uzbekistan",          "code": "UZB", "flagCode": "uz",     "flag": "\uD83C\uDDFA\uD83C\uDDFF", "group": "K", "confederation": "AFC" },
    { "id": "tbd_k", "name": "IC Playoff 1 Winner", "code": "TBD", "flagCode": null,     "flag": "\u2753",                   "group": "K", "confederation": "CAF" },

    { "id": "eng",   "name": "England",             "code": "ENG", "flagCode": "gb-eng", "flag": "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F", "group": "L", "confederation": "UEFA" },
    { "id": "cro",   "name": "Croatia",             "code": "CRO", "flagCode": "hr",     "flag": "\uD83C\uDDED\uD83C\uDDF7", "group": "L", "confederation": "UEFA" },
    { "id": "gha",   "name": "Ghana",               "code": "GHA", "flagCode": "gh",     "flag": "\uD83C\uDDEC\uD83C\uDDED", "group": "L", "confederation": "CAF" },
    { "id": "pan",   "name": "Panama",              "code": "PAN", "flagCode": "pa",     "flag": "\uD83C\uDDF5\uD83C\uDDE6", "group": "L", "confederation": "CONCACAF" }
  ],

  "matches": [

    { "id": 1,  "matchNum": 1,  "round": "Group Stage", "group": "A", "homeTeam": "mex",   "awayTeam": "rsa",   "dateUTC": "2026-06-11T19:00:00Z", "stadiumId": 13 },
    { "id": 2,  "matchNum": 2,  "round": "Group Stage", "group": "A", "homeTeam": "kor",   "awayTeam": "tbd_a", "dateUTC": "2026-06-12T02:00:00Z", "stadiumId": 14 },
    { "id": 3,  "matchNum": 3,  "round": "Group Stage", "group": "A", "homeTeam": "tbd_a", "awayTeam": "rsa",   "dateUTC": "2026-06-18T16:00:00Z", "stadiumId": 9  },
    { "id": 4,  "matchNum": 4,  "round": "Group Stage", "group": "A", "homeTeam": "mex",   "awayTeam": "kor",   "dateUTC": "2026-06-19T01:00:00Z", "stadiumId": 14 },
    { "id": 5,  "matchNum": 5,  "round": "Group Stage", "group": "A", "homeTeam": "mex",   "awayTeam": "tbd_a", "dateUTC": "2026-06-25T01:00:00Z", "stadiumId": 13 },
    { "id": 6,  "matchNum": 6,  "round": "Group Stage", "group": "A", "homeTeam": "kor",   "awayTeam": "rsa",   "dateUTC": "2026-06-25T01:00:00Z", "stadiumId": 15 },

    { "id": 7,  "matchNum": 7,  "round": "Group Stage", "group": "B", "homeTeam": "can",   "awayTeam": "tbd_b", "dateUTC": "2026-06-12T19:00:00Z", "stadiumId": 12 },
    { "id": 8,  "matchNum": 8,  "round": "Group Stage", "group": "B", "homeTeam": "qat",   "awayTeam": "sui",   "dateUTC": "2026-06-13T19:00:00Z", "stadiumId": 4  },
    { "id": 9,  "matchNum": 9,  "round": "Group Stage", "group": "B", "homeTeam": "sui",   "awayTeam": "tbd_b", "dateUTC": "2026-06-18T19:00:00Z", "stadiumId": 3  },
    { "id": 10, "matchNum": 10, "round": "Group Stage", "group": "B", "homeTeam": "can",   "awayTeam": "qat",   "dateUTC": "2026-06-18T22:00:00Z", "stadiumId": 11 },
    { "id": 11, "matchNum": 11, "round": "Group Stage", "group": "B", "homeTeam": "can",   "awayTeam": "sui",   "dateUTC": "2026-06-24T19:00:00Z", "stadiumId": 11 },
    { "id": 12, "matchNum": 12, "round": "Group Stage", "group": "B", "homeTeam": "tbd_b", "awayTeam": "qat",   "dateUTC": "2026-06-24T19:00:00Z", "stadiumId": 5  },

    { "id": 13, "matchNum": 13, "round": "Group Stage", "group": "C", "homeTeam": "bra",   "awayTeam": "mar",   "dateUTC": "2026-06-13T22:00:00Z", "stadiumId": 1  },
    { "id": 14, "matchNum": 14, "round": "Group Stage", "group": "C", "homeTeam": "hat",   "awayTeam": "sco",   "dateUTC": "2026-06-14T01:00:00Z", "stadiumId": 8  },
    { "id": 15, "matchNum": 15, "round": "Group Stage", "group": "C", "homeTeam": "sco",   "awayTeam": "bra",   "dateUTC": "2026-06-19T22:00:00Z", "stadiumId": 6  },
    { "id": 16, "matchNum": 16, "round": "Group Stage", "group": "C", "homeTeam": "mar",   "awayTeam": "hat",   "dateUTC": "2026-06-19T22:00:00Z", "stadiumId": 9  },
    { "id": 17, "matchNum": 17, "round": "Group Stage", "group": "C", "homeTeam": "sco",   "awayTeam": "mar",   "dateUTC": "2026-06-24T22:00:00Z", "stadiumId": 10 },
    { "id": 18, "matchNum": 18, "round": "Group Stage", "group": "C", "homeTeam": "bra",   "awayTeam": "hat",   "dateUTC": "2026-06-24T22:00:00Z", "stadiumId": 3  },

    { "id": 19, "matchNum": 19, "round": "Group Stage", "group": "D", "homeTeam": "usa",   "awayTeam": "par",   "dateUTC": "2026-06-13T01:00:00Z", "stadiumId": 3  },
    { "id": 20, "matchNum": 20, "round": "Group Stage", "group": "D", "homeTeam": "aus",   "awayTeam": "tbd_d", "dateUTC": "2026-06-13T04:00:00Z", "stadiumId": 11 },
    { "id": 21, "matchNum": 21, "round": "Group Stage", "group": "D", "homeTeam": "tbd_d", "awayTeam": "par",   "dateUTC": "2026-06-19T04:00:00Z", "stadiumId": 4  },
    { "id": 22, "matchNum": 22, "round": "Group Stage", "group": "D", "homeTeam": "usa",   "awayTeam": "aus",   "dateUTC": "2026-06-19T19:00:00Z", "stadiumId": 5  },
    { "id": 23, "matchNum": 23, "round": "Group Stage", "group": "D", "homeTeam": "tbd_d", "awayTeam": "usa",   "dateUTC": "2026-06-26T02:00:00Z", "stadiumId": 3  },
    { "id": 24, "matchNum": 24, "round": "Group Stage", "group": "D", "homeTeam": "par",   "awayTeam": "aus",   "dateUTC": "2026-06-26T02:00:00Z", "stadiumId": 2  },

    { "id": 25, "matchNum": 25, "round": "Group Stage", "group": "E", "homeTeam": "ger",   "awayTeam": "cur",   "dateUTC": "2026-06-14T17:00:00Z", "stadiumId": 16 },
    { "id": 26, "matchNum": 26, "round": "Group Stage", "group": "E", "homeTeam": "civ",   "awayTeam": "ecu",   "dateUTC": "2026-06-14T23:00:00Z", "stadiumId": 7  },
    { "id": 27, "matchNum": 27, "round": "Group Stage", "group": "E", "homeTeam": "ger",   "awayTeam": "civ",   "dateUTC": "2026-06-20T20:00:00Z", "stadiumId": 12 },
    { "id": 28, "matchNum": 28, "round": "Group Stage", "group": "E", "homeTeam": "ecu",   "awayTeam": "cur",   "dateUTC": "2026-06-21T00:00:00Z", "stadiumId": 10 },
    { "id": 29, "matchNum": 29, "round": "Group Stage", "group": "E", "homeTeam": "ecu",   "awayTeam": "ger",   "dateUTC": "2026-06-25T20:00:00Z", "stadiumId": 1  },
    { "id": 30, "matchNum": 30, "round": "Group Stage", "group": "E", "homeTeam": "cur",   "awayTeam": "civ",   "dateUTC": "2026-06-25T20:00:00Z", "stadiumId": 7  },

    { "id": 31, "matchNum": 31, "round": "Group Stage", "group": "F", "homeTeam": "ned",   "awayTeam": "jpn",   "dateUTC": "2026-06-14T20:00:00Z", "stadiumId": 2  },
    { "id": 32, "matchNum": 32, "round": "Group Stage", "group": "F", "homeTeam": "tbd_f", "awayTeam": "tun",   "dateUTC": "2026-06-15T02:00:00Z", "stadiumId": 15 },
    { "id": 33, "matchNum": 33, "round": "Group Stage", "group": "F", "homeTeam": "tun",   "awayTeam": "jpn",   "dateUTC": "2026-06-20T04:00:00Z", "stadiumId": 15 },
    { "id": 34, "matchNum": 34, "round": "Group Stage", "group": "F", "homeTeam": "ned",   "awayTeam": "tbd_f", "dateUTC": "2026-06-20T17:00:00Z", "stadiumId": 16 },
    { "id": 35, "matchNum": 35, "round": "Group Stage", "group": "F", "homeTeam": "jpn",   "awayTeam": "tbd_f", "dateUTC": "2026-06-25T23:00:00Z", "stadiumId": 2  },
    { "id": 36, "matchNum": 36, "round": "Group Stage", "group": "F", "homeTeam": "tun",   "awayTeam": "ned",   "dateUTC": "2026-06-25T23:00:00Z", "stadiumId": 10 },

    { "id": 37, "matchNum": 37, "round": "Group Stage", "group": "G", "homeTeam": "irn",   "awayTeam": "nzl",   "dateUTC": "2026-06-15T19:00:00Z", "stadiumId": 6  },
    { "id": 38, "matchNum": 38, "round": "Group Stage", "group": "G", "homeTeam": "bel",   "awayTeam": "egy",   "dateUTC": "2026-06-15T22:00:00Z", "stadiumId": 5  },
    { "id": 39, "matchNum": 39, "round": "Group Stage", "group": "G", "homeTeam": "bel",   "awayTeam": "irn",   "dateUTC": "2026-06-21T19:00:00Z", "stadiumId": 3  },
    { "id": 40, "matchNum": 40, "round": "Group Stage", "group": "G", "homeTeam": "nzl",   "awayTeam": "egy",   "dateUTC": "2026-06-22T01:00:00Z", "stadiumId": 11 },
    { "id": 41, "matchNum": 41, "round": "Group Stage", "group": "G", "homeTeam": "egy",   "awayTeam": "irn",   "dateUTC": "2026-06-27T03:00:00Z", "stadiumId": 5  },
    { "id": 42, "matchNum": 42, "round": "Group Stage", "group": "G", "homeTeam": "nzl",   "awayTeam": "bel",   "dateUTC": "2026-06-27T03:00:00Z", "stadiumId": 11 },

    { "id": 43, "matchNum": 43, "round": "Group Stage", "group": "H", "homeTeam": "esp",   "awayTeam": "cpv",   "dateUTC": "2026-06-15T17:00:00Z", "stadiumId": 9  },
    { "id": 44, "matchNum": 44, "round": "Group Stage", "group": "H", "homeTeam": "ksa",   "awayTeam": "uru",   "dateUTC": "2026-06-15T22:00:00Z", "stadiumId": 6  },
    { "id": 45, "matchNum": 45, "round": "Group Stage", "group": "H", "homeTeam": "esp",   "awayTeam": "ksa",   "dateUTC": "2026-06-21T16:00:00Z", "stadiumId": 9  },
    { "id": 46, "matchNum": 46, "round": "Group Stage", "group": "H", "homeTeam": "uru",   "awayTeam": "cpv",   "dateUTC": "2026-06-21T22:00:00Z", "stadiumId": 6  },
    { "id": 47, "matchNum": 47, "round": "Group Stage", "group": "H", "homeTeam": "cpv",   "awayTeam": "ksa",   "dateUTC": "2026-06-27T00:00:00Z", "stadiumId": 16 },
    { "id": 48, "matchNum": 48, "round": "Group Stage", "group": "H", "homeTeam": "uru",   "awayTeam": "esp",   "dateUTC": "2026-06-27T00:00:00Z", "stadiumId": 14 },

    { "id": 49, "matchNum": 49, "round": "Group Stage", "group": "I", "homeTeam": "tbd_i", "awayTeam": "nor",   "dateUTC": "2026-06-16T18:00:00Z", "stadiumId": 8  },
    { "id": 50, "matchNum": 50, "round": "Group Stage", "group": "I", "homeTeam": "fra",   "awayTeam": "sen",   "dateUTC": "2026-06-16T21:00:00Z", "stadiumId": 1  },
    { "id": 51, "matchNum": 51, "round": "Group Stage", "group": "I", "homeTeam": "nor",   "awayTeam": "sen",   "dateUTC": "2026-06-22T18:00:00Z", "stadiumId": 1  },
    { "id": 52, "matchNum": 52, "round": "Group Stage", "group": "I", "homeTeam": "fra",   "awayTeam": "tbd_i", "dateUTC": "2026-06-22T21:00:00Z", "stadiumId": 7  },
    { "id": 53, "matchNum": 53, "round": "Group Stage", "group": "I", "homeTeam": "nor",   "awayTeam": "fra",   "dateUTC": "2026-06-27T01:00:00Z", "stadiumId": 8  },
    { "id": 54, "matchNum": 54, "round": "Group Stage", "group": "I", "homeTeam": "sen",   "awayTeam": "tbd_i", "dateUTC": "2026-06-27T01:00:00Z", "stadiumId": 12 },

    { "id": 55, "matchNum": 55, "round": "Group Stage", "group": "J", "homeTeam": "aut",   "awayTeam": "jor",   "dateUTC": "2026-06-16T04:00:00Z", "stadiumId": 4  },
    { "id": 56, "matchNum": 56, "round": "Group Stage", "group": "J", "homeTeam": "arg",   "awayTeam": "alg",   "dateUTC": "2026-06-17T01:00:00Z", "stadiumId": 10 },
    { "id": 57, "matchNum": 57, "round": "Group Stage", "group": "J", "homeTeam": "arg",   "awayTeam": "aut",   "dateUTC": "2026-06-22T17:00:00Z", "stadiumId": 2  },
    { "id": 58, "matchNum": 58, "round": "Group Stage", "group": "J", "homeTeam": "jor",   "awayTeam": "alg",   "dateUTC": "2026-06-23T03:00:00Z", "stadiumId": 4  },
    { "id": 59, "matchNum": 59, "round": "Group Stage", "group": "J", "homeTeam": "alg",   "awayTeam": "aut",   "dateUTC": "2026-06-28T02:00:00Z", "stadiumId": 10 },
    { "id": 60, "matchNum": 60, "round": "Group Stage", "group": "J", "homeTeam": "jor",   "awayTeam": "arg",   "dateUTC": "2026-06-28T02:00:00Z", "stadiumId": 2  },

    { "id": 61, "matchNum": 61, "round": "Group Stage", "group": "K", "homeTeam": "por",   "awayTeam": "tbd_k", "dateUTC": "2026-06-17T17:00:00Z", "stadiumId": 16 },
    { "id": 62, "matchNum": 62, "round": "Group Stage", "group": "K", "homeTeam": "uzb",   "awayTeam": "col",   "dateUTC": "2026-06-18T02:00:00Z", "stadiumId": 13 },
    { "id": 63, "matchNum": 63, "round": "Group Stage", "group": "K", "homeTeam": "por",   "awayTeam": "uzb",   "dateUTC": "2026-06-23T17:00:00Z", "stadiumId": 16 },
    { "id": 64, "matchNum": 64, "round": "Group Stage", "group": "K", "homeTeam": "col",   "awayTeam": "tbd_k", "dateUTC": "2026-06-24T02:00:00Z", "stadiumId": 14 },
    { "id": 65, "matchNum": 65, "round": "Group Stage", "group": "K", "homeTeam": "col",   "awayTeam": "por",   "dateUTC": "2026-06-27T23:30:00Z", "stadiumId": 6  },
    { "id": 66, "matchNum": 66, "round": "Group Stage", "group": "K", "homeTeam": "tbd_k", "awayTeam": "uzb",   "dateUTC": "2026-06-27T23:30:00Z", "stadiumId": 9  },

    { "id": 67, "matchNum": 67, "round": "Group Stage", "group": "L", "homeTeam": "gha",   "awayTeam": "pan",   "dateUTC": "2026-06-17T19:00:00Z", "stadiumId": 12 },
    { "id": 68, "matchNum": 68, "round": "Group Stage", "group": "L", "homeTeam": "eng",   "awayTeam": "cro",   "dateUTC": "2026-06-17T22:00:00Z", "stadiumId": 2  },
    { "id": 69, "matchNum": 69, "round": "Group Stage", "group": "L", "homeTeam": "pan",   "awayTeam": "cro",   "dateUTC": "2026-06-23T19:00:00Z", "stadiumId": 12 },
    { "id": 70, "matchNum": 70, "round": "Group Stage", "group": "L", "homeTeam": "eng",   "awayTeam": "gha",   "dateUTC": "2026-06-23T22:00:00Z", "stadiumId": 8  },
    { "id": 71, "matchNum": 71, "round": "Group Stage", "group": "L", "homeTeam": "eng",   "awayTeam": "pan",   "dateUTC": "2026-06-28T00:00:00Z", "stadiumId": 1  },
    { "id": 72, "matchNum": 72, "round": "Group Stage", "group": "L", "homeTeam": "cro",   "awayTeam": "gha",   "dateUTC": "2026-06-28T00:00:00Z", "stadiumId": 7  },

    { "id": 73,  "matchNum": 73,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group A",    "awayTeam": "Runner-up Group D",  "dateUTC": "2026-07-04T15:00:00Z", "stadiumId": 1  },
    { "id": 74,  "matchNum": 74,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group B",    "awayTeam": "Runner-up Group C",  "dateUTC": "2026-07-04T18:00:00Z", "stadiumId": 2  },
    { "id": 75,  "matchNum": 75,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group C",    "awayTeam": "Runner-up Group B",  "dateUTC": "2026-07-04T21:00:00Z", "stadiumId": 3  },
    { "id": 76,  "matchNum": 76,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group D",    "awayTeam": "Runner-up Group A",  "dateUTC": "2026-07-05T00:00:00Z", "stadiumId": 6  },
    { "id": 77,  "matchNum": 77,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group E",    "awayTeam": "Runner-up Group H",  "dateUTC": "2026-07-05T15:00:00Z", "stadiumId": 4  },
    { "id": 78,  "matchNum": 78,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group F",    "awayTeam": "Runner-up Group G",  "dateUTC": "2026-07-05T18:00:00Z", "stadiumId": 5  },
    { "id": 79,  "matchNum": 79,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group G",    "awayTeam": "Runner-up Group F",  "dateUTC": "2026-07-05T21:00:00Z", "stadiumId": 8  },
    { "id": 80,  "matchNum": 80,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group H",    "awayTeam": "Runner-up Group E",  "dateUTC": "2026-07-06T00:00:00Z", "stadiumId": 7  },
    { "id": 81,  "matchNum": 81,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group I",    "awayTeam": "Runner-up Group L",  "dateUTC": "2026-07-06T15:00:00Z", "stadiumId": 9  },
    { "id": 82,  "matchNum": 82,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group J",    "awayTeam": "Runner-up Group K",  "dateUTC": "2026-07-06T18:00:00Z", "stadiumId": 11 },
    { "id": 83,  "matchNum": 83,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group K",    "awayTeam": "Runner-up Group J",  "dateUTC": "2026-07-06T21:00:00Z", "stadiumId": 12 },
    { "id": 84,  "matchNum": 84,  "round": "Round of 32", "group": null, "homeTeam": "Winner Group L",    "awayTeam": "Runner-up Group I",  "dateUTC": "2026-07-07T00:00:00Z", "stadiumId": 10 },
    { "id": 85,  "matchNum": 85,  "round": "Round of 32", "group": null, "homeTeam": "Best 3rd (A/B/C/D)", "awayTeam": "Best 3rd (E/F/G/H)", "dateUTC": "2026-07-07T15:00:00Z", "stadiumId": 13 },
    { "id": 86,  "matchNum": 86,  "round": "Round of 32", "group": null, "homeTeam": "Best 3rd (I/J/K/L)", "awayTeam": "TBD",                "dateUTC": "2026-07-07T18:00:00Z", "stadiumId": 14 },
    { "id": 87,  "matchNum": 87,  "round": "Round of 32", "group": null, "homeTeam": "TBD",               "awayTeam": "TBD",                "dateUTC": "2026-07-07T21:00:00Z", "stadiumId": 15 },
    { "id": 88,  "matchNum": 88,  "round": "Round of 32", "group": null, "homeTeam": "TBD",               "awayTeam": "TBD",                "dateUTC": "2026-07-08T00:00:00Z", "stadiumId": 16 },

    { "id": 89,  "matchNum": 89,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 1",  "awayTeam": "R32 Winner 2",  "dateUTC": "2026-07-08T18:00:00Z", "stadiumId": 1  },
    { "id": 90,  "matchNum": 90,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 3",  "awayTeam": "R32 Winner 4",  "dateUTC": "2026-07-08T21:00:00Z", "stadiumId": 3  },
    { "id": 91,  "matchNum": 91,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 5",  "awayTeam": "R32 Winner 6",  "dateUTC": "2026-07-09T00:00:00Z", "stadiumId": 6  },
    { "id": 92,  "matchNum": 92,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 7",  "awayTeam": "R32 Winner 8",  "dateUTC": "2026-07-09T18:00:00Z", "stadiumId": 2  },
    { "id": 93,  "matchNum": 93,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 9",  "awayTeam": "R32 Winner 10", "dateUTC": "2026-07-09T21:00:00Z", "stadiumId": 8  },
    { "id": 94,  "matchNum": 94,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 11", "awayTeam": "R32 Winner 12", "dateUTC": "2026-07-10T00:00:00Z", "stadiumId": 5  },
    { "id": 95,  "matchNum": 95,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 13", "awayTeam": "R32 Winner 14", "dateUTC": "2026-07-10T18:00:00Z", "stadiumId": 7  },
    { "id": 96,  "matchNum": 96,  "round": "Round of 16", "group": null, "homeTeam": "R32 Winner 15", "awayTeam": "R32 Winner 16", "dateUTC": "2026-07-10T21:00:00Z", "stadiumId": 9  },

    { "id": 97,  "matchNum": 97,  "round": "Quarter-finals", "group": null, "homeTeam": "R16 Winner 1", "awayTeam": "R16 Winner 2", "dateUTC": "2026-07-11T18:00:00Z", "stadiumId": 1  },
    { "id": 98,  "matchNum": 98,  "round": "Quarter-finals", "group": null, "homeTeam": "R16 Winner 3", "awayTeam": "R16 Winner 4", "dateUTC": "2026-07-11T21:00:00Z", "stadiumId": 2  },
    { "id": 99,  "matchNum": 99,  "round": "Quarter-finals", "group": null, "homeTeam": "R16 Winner 5", "awayTeam": "R16 Winner 6", "dateUTC": "2026-07-12T18:00:00Z", "stadiumId": 3  },
    { "id": 100, "matchNum": 100, "round": "Quarter-finals", "group": null, "homeTeam": "R16 Winner 7", "awayTeam": "R16 Winner 8", "dateUTC": "2026-07-12T21:00:00Z", "stadiumId": 6  },

    { "id": 101, "matchNum": 101, "round": "Semi-finals", "group": null, "homeTeam": "QF Winner 1", "awayTeam": "QF Winner 2", "dateUTC": "2026-07-15T21:00:00Z", "stadiumId": 1  },
    { "id": 102, "matchNum": 102, "round": "Semi-finals", "group": null, "homeTeam": "QF Winner 3", "awayTeam": "QF Winner 4", "dateUTC": "2026-07-16T21:00:00Z", "stadiumId": 2  },

    { "id": 103, "matchNum": 103, "round": "Third Place", "group": null, "homeTeam": "SF Loser 1", "awayTeam": "SF Loser 2", "dateUTC": "2026-07-18T21:00:00Z", "stadiumId": 6  },
    { "id": 104, "matchNum": 104, "round": "Final",       "group": null, "homeTeam": "SF Winner 1", "awayTeam": "SF Winner 2", "dateUTC": "2026-07-19T21:00:00Z", "stadiumId": 1  }
  ]
}
;
