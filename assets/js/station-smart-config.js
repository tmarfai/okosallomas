window.stationSmartConfigs = {
  abaliget: {
    key: "abaliget",
    cityName: {
      hu: "Abaliget",
      en: "Abaliget",
      de: "Abaliget"
    },
    stationName: {
      hu: "Abaliget vasútállomás",
      en: "Abaliget railway station",
      de: "Bahnhof Abaliget"
    },
    station: {
      lat: 46.15283570203589,
      lon: 18.073234992607357
    },
    radius: 5500,
    fallbackQueries: {
      school_all: ["iskola Abaliget"],
      university: ["egyetem Abaliget"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  adand: {
    key: "adand",
    cityName: {
      hu: "Ádánd",
      en: "Ádánd",
      de: "Ádánd"
    },
    stationName: {
      hu: "Ádánd vasútállomás",
      en: "Ádánd railway station",
      de: "Bahnhof Ádánd"
    },
    station: {
      lat: 46.85466625878969,
      lon: 18.142051488633676
    },
    radius: 4500,
    fallbackQueries: {
      school_all: ["iskola Ádánd"],
      university: ["egyetem Ádánd"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  ata: {
    key: "ata",
    cityName: {
      hu: "\u00c1ta",
      en: "\u00c1ta",
      de: "\u00c1ta"
    },
    stationName: {
      hu: "\u00c1ta vas\u00fat\u00e1llom\u00e1s",
      en: "\u00c1ta railway station",
      de: "Bahnhof \u00c1ta"
    },
    station: {
      lat: 45.93638887096503,
      lon: 18.304364111281814
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola \u00c1ta"],
      university: ["egyetem \u00c1ta"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema", "bath"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  lepseny: {
    key: "lepseny",
    cityName: {
      hu: "Leps\u00e9ny",
      en: "Leps\u00e9ny",
      de: "Leps\u00e9ny"
    },
    stationName: {
      hu: "Leps\u00e9ny vas\u00fat\u00e1llom\u00e1s",
      en: "Leps\u00e9ny railway station",
      de: "Bahnhof Leps\u00e9ny"
    },
    station: {
      lat: 46.987239371019356,
      lon: 18.24466141135151
    },
    radius: 6000,
    fallbackQueries: {
      school_all: ["iskola Leps\u00e9ny"],
      university: ["egyetem Leps\u00e9ny"],
      bath: ["strand Leps\u00e9ny", "strand Balatonvil\u00e1gos", "Balatonaliga strand", "szabadstrand Balatonvil\u00e1gos"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  simontornya: {
    key: "simontornya",
    cityName: {
      hu: "Simontornya",
      en: "Simontornya",
      de: "Simontornya"
    },
    stationName: {
      hu: "Simontornya vas\u00fat\u00e1llom\u00e1s",
      en: "Simontornya railway station",
      de: "Bahnhof Simontornya"
    },
    station: {
      lat: 46.75640316829538,
      lon: 18.53940674705689
    },
    radius: 4500,
    fallbackQueries: {
      school_all: ["iskola Simontornya"],
      university: ["egyetem Simontornya"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema", "bath"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  kaposvar: {
    key: "kaposvar",
    cityName: {
      hu: "Kaposvár",
      en: "Kaposvár",
      de: "Kaposvár"
    },
    stationName: {
      hu: "Kaposvár vasútállomás",
      en: "Kaposvár railway station",
      de: "Bahnhof Kaposvár"
    },
    station: {
      lat: 46.3529,
      lon: 17.7948
    },
    radius: 5000,
    fallbackQueries: {
      school_all: ["iskola Kaposvár"],
      university: ["egyetem Kaposvár"]
    },
    manualPlaces: {
      school: {
        university: [
          {
            name: "MATE Kaposvári Campus",
            lat: 46.3828889,
            lon: 17.8249303
          }
        ]
      },
      entertainment: {
        bath: [
          {
            name: "Virágfürdő Kaposvár",
            lat: 46.351111,
            lon: 17.7975
          }
        ]
      }
    },
    forbiddenNames: ["Kamaraszínház", "Rendezvénytér"],
    specialLinks: [
      {
        matches: ["kultik"],
        text: {
          hu: "A képre kattintva megtekintheti az aktuális moziműsort:",
          en: "Click the image to view the current movie schedule:",
          de: "Klicke auf das Bild, um das aktuelle Kinoprogramm anzusehen:"
        },
        url: "https://kaposvarimozi.hu/",
        image: "assets/img/kultik_logo.png",
        alt: "Kultik Mozi"
      },
      {
        matches: ["csiky gerge"],
        text: {
          hu: "A képre kattintva megtekintheti az aktuális színházműsort:",
          en: "Click the image to view the current theater program:",
          de: "Klicke auf das Bild, um das aktuelle Theaterprogramm anzusehen:"
        },
        url: "https://www.csiky.hu/musor/",
        image: "assets/img/csikygergelyszinhaz_logo.png",
        alt: "Csiky Gergely Színház"
      },
      {
        matches: ["roxínház", "roxinhaz"],
        text: {
          hu: "A képre kattintva megtekintheti az aktuális műsort és jegyeket:",
          en: "Click the image to view the current program and tickets:",
          de: "Klicke auf das Bild, um das aktuelle Programm und Tickets anzusehen:"
        },
        url: "https://roxinhaz.hu/jegyek-musor/",
        image: "assets/img/roxinhaz_logo.png",
        alt: "Roxínház"
      }
    ]
  },

  pecs: {
    key: "pecs",
    cityName: {
      hu: "Pécs",
      en: "Pécs",
      de: "Pécs"
    },
    stationName: {
      hu: "Pécs vasútállomás",
      en: "Pécs railway station",
      de: "Bahnhof Pécs"
    },
    station: {
      lat: 46.06637,
      lon: 18.22201
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Pécs"],
      university: ["egyetem Pécs", "PTE Pécs", "Pécsi Tudományegyetem Pécs"]
    },
    manualPlaces: {
      school: {
        university: [
          {
            name: "PTE Műszaki és Informatikai Kar (MIK)",
            lat: 46.0797187,
            lon: 18.2124902
          },
          {
            name: "PTE Bölcsészet- és Társadalomtudományi Kar (BTK)",
            lat: 46.0763887,
            lon: 18.2080009
          },
          {
            name: "PTE Természettudományi Kar (TTK)",
            lat: 46.0763887,
            lon: 18.2080009
          },
          {
            name: "PTE Általános Orvostudományi Kar (ÁOK)",
            lat: 46.0734041,
            lon: 18.2066167
          },
          {
            name: "PTE Gyógyszerésztudományi Kar (GYTK)",
            lat: 46.0752142,
            lon: 18.211857
          },
          {
            name: "PTE Közgazdaságtudományi Kar (KTK)",
            lat: 46.0744332,
            lon: 18.2369781
          },
          {
            name: "PTE Állam- és Jogtudományi Kar (ÁJK)",
            lat: 46.0741988,
            lon: 18.2376675
          },
          {
            name: "PTE Egészségtudományi Kar (ETK)",
            lat: 46.0773793,
            lon: 18.2262604
          },
          {
            name: "PTE Művészeti Kar (MK)",
            lat: 46.0777148,
            lon: 18.2486131
          }
        ]
      },
      entertainment: {
        bath: [
          {
            name: "Hullámfürdő Pécs",
            lat: 46.0732,
            lon: 18.2269
          }
        ]
      }
    },
    forbiddenNames: [],
    specialLinks: [
      {
        matches: ["cinema city", "cinema city pécs", "cinema city pecs"],
        tag: {
          hu: "Mozi",
          en: "Cinema",
          de: "Kino"
        },
        icon: "bi-film",
        text: {
          hu: "Moziműsor, vetítési időpontok és jegyvásárlás egy helyen.",
          en: "Movie schedule, screening times and ticket purchase in one place.",
          de: "Kinoprogramm, Vorstellungszeiten und Tickets an einem Ort."
        },
        url: "https://www.cinemacity.hu/cinemas/pecs/1128",
        label: {
          hu: "Műsor és jegyek",
          en: "Schedule and tickets",
          de: "Programm und Tickets"
        },
        actions: [
          {
            label: {
              hu: "Műsor és jegyek",
              en: "Schedule and tickets",
              de: "Programm und Tickets"
            },
            url: "https://www.cinemacity.hu/cinemas/pecs/1128",
            icon: "bi-ticket-perforated"
          }
        ]
      },
      {
        matches: ["pécsi nemzeti", "pecsi nemzeti", "nemzeti színház", "nemzeti szinhaz"],
        tag: {
          hu: "Színház",
          en: "Theatre",
          de: "Theater"
        },
        icon: "bi-ticket-perforated",
        text: {
          hu: "Aktuális előadások, műsor és jegyinformációk.",
          en: "Current performances, programme and ticket information.",
          de: "Aktuelle Aufführungen, Programm und Ticketinformationen."
        },
        url: "https://www.pnsz.hu/",
        label: {
          hu: "Műsor megnyitása",
          en: "Open programme",
          de: "Programm öffnen"
        },
        actions: [
          {
            label: {
              hu: "Műsor megnyitása",
              en: "Open programme",
              de: "Programm öffnen"
            },
            url: "https://www.pnsz.hu/",
            icon: "bi-calendar-event"
          }
        ]
      },
      {
        matches: ["pte műszaki", "pte muszaki", "informatikai kar", "mik"],
        tag: {
          hu: "Egyetem",
          en: "University",
          de: "Universität"
        },
        icon: "bi-mortarboard",
        text: {
          hu: "A PTE MIK hivatalos oldala és aktuális eseményei gyorsan elérhetők innen.",
          en: "Quick access to the official PTE MIK site and current events.",
          de: "Schneller Zugriff auf die offizielle PTE-MIK-Seite und aktuelle Veranstaltungen."
        },
        url: "https://mik.pte.hu/",
        label: {
          hu: "PTE MIK oldal",
          en: "PTE MIK site",
          de: "PTE MIK Seite"
        },
        actions: [
          {
            label: {
              hu: "PTE MIK oldal",
              en: "PTE MIK site",
              de: "PTE MIK Seite"
            },
            url: "https://mik.pte.hu/",
            icon: "bi-box-arrow-up-right"
          },
          {
            label: {
              hu: "Események",
              en: "Events",
              de: "Veranstaltungen"
            },
            url: "https://mik.pte.hu/aktualis-esemenyek",
            icon: "bi-calendar2-week"
          }
        ]
      },
      {
        matches: ["zsolnay"],
        tag: {
          hu: "Program",
          en: "Events",
          de: "Programme"
        },
        icon: "bi-stars",
        text: {
          hu: "Programok, kiállítások és események a Zsolnay Negyedben.",
          en: "Programmes, exhibitions and events in the Zsolnay Quarter.",
          de: "Programme, Ausstellungen und Veranstaltungen im Zsolnay-Viertel."
        },
        url: "https://www.zsolnaynegyed.hu/programok",
        label: {
          hu: "Programok",
          en: "Events",
          de: "Programme"
        },
        actions: [
          {
            label: {
              hu: "Programok",
              en: "Events",
              de: "Programme"
            },
            url: "https://www.zsolnaynegyed.hu/programok",
            icon: "bi-calendar-event"
          },
          {
            label: {
              hu: "Zsolnay oldal",
              en: "Zsolnay site",
              de: "Zsolnay Seite"
            },
            url: "https://www.zsolnaynegyed.hu/",
            icon: "bi-box-arrow-up-right"
          }
        ]
      },
      {
        matches: ["kodály", "kodaly"],
        tag: {
          hu: "Koncert",
          en: "Concerts",
          de: "Konzerte"
        },
        icon: "bi-music-note-beamed",
        text: {
          hu: "Koncertek és kulturális programok a Kodály Központban.",
          en: "Concerts and cultural programmes at the Kodály Centre.",
          de: "Konzerte und Kulturprogramme im Kodály Zentrum."
        },
        url: "https://www.kodalykozpont.hu/programok",
        label: {
          hu: "Programok",
          en: "Programmes",
          de: "Programme"
        },
        actions: [
          {
            label: {
              hu: "Programok",
              en: "Programmes",
              de: "Programme"
            },
            url: "https://www.kodalykozpont.hu/programok",
            icon: "bi-calendar-event"
          }
        ]
      }
    ]
  },

  dombovar: {
    key: "dombovar",
    cityName: {
      hu: "Dombóvár",
      en: "Dombóvár",
      de: "Dombóvár"
    },
    stationName: {
      hu: "Dombóvár vasútállomás",
      en: "Dombóvár railway station",
      de: "Bahnhof Dombóvár"
    },
    station: {
      lat: 46.37001767098272,
      lon: 18.146702011310413
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Dombóvár"],
      university: ["egyetem Dombóvár"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    manualPlaces: {
      culture: {
        library: [
          {
            name: "Földi István Könyvtár",
            lat: 46.3763141,
            lon: 18.1327629
          }
        ]
      }
    },
    forbiddenNames: [],
    specialLinks: []
  },

  siofok: {
    key: "siofok",
    cityName: {
      hu: "Siófok",
      en: "Siófok",
      de: "Siófok"
    },
    stationName: {
      hu: "Siófok vasútállomás",
      en: "Siófok railway station",
      de: "Bahnhof Siófok"
    },
    station: {
      lat: 46.90709781544257,
      lon: 18.053600243820416
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Siófok"],
      university: ["egyetem Siófok"]
    },
    unavailableSubcategories: {
      school: ["university"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonlelle: {
    key: "balatonlelle",
    cityName: {
      hu: "Balatonlelle",
      en: "Balatonlelle",
      de: "Balatonlelle"
    },
    stationName: {
      hu: "Balatonlelle vasútállomás",
      en: "Balatonlelle railway station",
      de: "Bahnhof Balatonlelle"
    },
    station: {
      lat: 46.787369397065426,
      lon: 17.694646906469234
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Balatonlelle"],
      university: ["egyetem Balatonlelle"]
    },
    unavailableSubcategories: {
      school: ["university"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonaliga: {
    key: "balatonaliga",
    cityName: {
      hu: "Balatonaliga",
      en: "Balatonaliga",
      de: "Balatonaliga"
    },
    stationName: {
      hu: "Balatonaliga vasútállomás",
      en: "Balatonaliga railway station",
      de: "Bahnhof Balatonaliga"
    },
    station: {
      lat: 46.9843128189066,
      lon: 18.170025659389854
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Balatonaliga", "iskola Balatonvilágos"],
      university: ["egyetem Balatonaliga"],
      bath: ["strand Balatonaliga", "szabadstrand Balatonaliga", "Club Aliga strand"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  pusztaszabolcs: {
    key: "pusztaszabolcs",
    cityName: {
      hu: "Pusztaszabolcs",
      en: "Pusztaszabolcs",
      de: "Pusztaszabolcs"
    },
    stationName: {
      hu: "Pusztaszabolcs vasútállomás",
      en: "Pusztaszabolcs railway station",
      de: "Bahnhof Pusztaszabolcs"
    },
    station: {
      lat: 47.13931107815299,
      lon: 18.758366899971776
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Pusztaszabolcs"],
      university: ["egyetem Pusztaszabolcs"]
    },
    unavailableSubcategories: {
      school: ["university"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  sarbogard: {
    key: "sarbogard",
    cityName: {
      hu: "Sárbogárd",
      en: "Sárbogárd",
      de: "Sárbogárd"
    },
    stationName: {
      hu: "Sárbogárd vasútállomás",
      en: "Sárbogárd railway station",
      de: "Bahnhof Sárbogárd"
    },
    station: {
      lat: 46.896685666647244,
      lon: 18.61091341386501
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Sárbogárd"],
      university: ["egyetem Sárbogárd"]
    },
    unavailableSubcategories: {
      school: ["university"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  szentlorinc: {
    key: "szentlorinc",
    cityName: {
      hu: "Szentlőrinc",
      en: "Szentlőrinc",
      de: "Szentlőrinc"
    },
    stationName: {
      hu: "Szentlőrinc vasútállomás",
      en: "Szentlőrinc railway station",
      de: "Bahnhof Szentlőrinc"
    },
    station: {
      lat: 46.032996129236956,
      lon: 17.990948359347666
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Szentlőrinc"],
      university: ["egyetem Szentlőrinc"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  zamardi: {
    key: "zamardi",
    cityName: {
      hu: "Zamárdi",
      en: "Zamárdi",
      de: "Zamárdi"
    },
    stationName: {
      hu: "Zamárdi vasútállomás",
      en: "Zamárdi railway station",
      de: "Bahnhof Zamárdi"
    },
    station: {
      lat: 46.87999277101195,
      lon: 17.942251061344326
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Zamárdi"],
      university: ["egyetem Zamárdi"],
      bath: ["strand Zamárdi", "szabadstrand Zamárdi", "Zamárdi Nagystrand"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  szantod: {
    key: "szantod",
    cityName: {
      hu: "Szántód",
      en: "Szántód",
      de: "Szántód"
    },
    stationName: {
      hu: "Szántód vasútállomás",
      en: "Szántód railway station",
      de: "Bahnhof Szántód"
    },
    station: {
      lat: 46.8623903,
      lon: 17.8995729
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Szántód"],
      university: ["egyetem Szántód"],
      bath: ["strand Szántód", "szabadstrand Szántód", "Szántód strand"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonboglar: {
    key: "balatonboglar",
    cityName: {
      hu: "Balatonboglár",
      en: "Balatonboglár",
      de: "Balatonboglár"
    },
    stationName: {
      hu: "Balatonboglár vasútállomás",
      en: "Balatonboglár railway station",
      de: "Bahnhof Balatonboglár"
    },
    station: {
      lat: 46.77617362419581,
      lon: 17.64733190415802
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Balatonboglár"],
      university: ["egyetem Balatonboglár"],
      bath: ["strand Balatonboglár", "szabadstrand Balatonboglár", "Platán strand Balatonboglár"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  gyekenyes: {
    key: "gyekenyes",
    cityName: {
      hu: "Gy\u00e9k\u00e9nyes",
      en: "Gy\u00e9k\u00e9nyes",
      de: "Gy\u00e9k\u00e9nyes"
    },
    stationName: {
      hu: "Gy\u00e9k\u00e9nyes vas\u00fat\u00e1llom\u00e1s",
      en: "Gy\u00e9k\u00e9nyes railway station",
      de: "Bahnhof Gy\u00e9k\u00e9nyes"
    },
    station: {
      lat: 46.249259508386395,
      lon: 16.955781789004558
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Gy\u00e9k\u00e9nyes"],
      university: ["egyetem Gy\u00e9k\u00e9nyes"],
      bath: ["strand Gy\u00e9k\u00e9nyes", "Gy\u00e9k\u00e9nyesi-t\u00f3", "Kotro Gy\u00e9k\u00e9nyes"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonszarszo: {
    key: "balatonszarszo",
    cityName: {
      hu: "Balatonsz\u00e1rsz\u00f3",
      en: "Balatonsz\u00e1rsz\u00f3",
      de: "Balatonsz\u00e1rsz\u00f3"
    },
    stationName: {
      hu: "Balatonsz\u00e1rsz\u00f3 vas\u00fat\u00e1llom\u00e1s",
      en: "Balatonsz\u00e1rsz\u00f3 railway station",
      de: "Bahnhof Balatonsz\u00e1rsz\u00f3"
    },
    station: {
      lat: 46.83198502630596,
      lon: 17.83032463138781
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Balatonsz\u00e1rsz\u00f3"],
      university: ["egyetem Balatonsz\u00e1rsz\u00f3"],
      bath: ["strand Balatonsz\u00e1rsz\u00f3", "szabadstrand Balatonsz\u00e1rsz\u00f3", "M\u00f3ricz utcai szabadstrand"]
    },
    manualPlaces: {
      shops: {
        grocery: [
          { name: "ABC \u00e9lelmiszer", lat: 46.8314685, lon: 17.8317128 },
          { name: "ABC", lat: 46.8236466, lon: 17.8368335 },
          { name: "Coop \u00e1ruh\u00e1z", lat: 46.8261051, lon: 17.8334923 }
        ]
      }
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonszemes: {
    key: "balatonszemes",
    cityName: {
      hu: "Balatonszemes",
      en: "Balatonszemes",
      de: "Balatonszemes"
    },
    stationName: {
      hu: "Balatonszemes vasútállomás",
      en: "Balatonszemes railway station",
      de: "Bahnhof Balatonszemes"
    },
    station: {
      lat: 46.811329345053416,
      lon: 17.777085295534384
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Balatonszemes"],
      university: ["egyetem Balatonszemes"],
      bath: ["strand Balatonszemes", "szabadstrand Balatonszemes"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonszentgyorgy: {
    key: "balatonszentgyorgy",
    cityName: {
      hu: "Balatonszentgyörgy",
      en: "Balatonszentgyörgy",
      de: "Balatonszentgyörgy"
    },
    stationName: {
      hu: "Balatonszentgyörgy vasútállomás",
      en: "Balatonszentgyörgy railway station",
      de: "Bahnhof Balatonszentgyörgy"
    },
    station: {
      lat: 46.69190661386738,
      lon: 17.288625736225875
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Balatonszentgyörgy"],
      university: ["egyetem Balatonszentgyörgy"],
      bath: ["strand Balatonszentgyörgy", "Balaton strand Balatonszentgyörgy"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  barcs: {
    key: "barcs",
    cityName: {
      hu: "Barcs",
      en: "Barcs",
      de: "Barcs"
    },
    stationName: {
      hu: "Barcs vasútállomás",
      en: "Barcs railway station",
      de: "Bahnhof Barcs"
    },
    station: {
      lat: 45.951402872215816,
      lon: 17.445984824166167
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Barcs"],
      university: ["egyetem Barcs"]
    },
    unavailableSubcategories: {
      school: ["university"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  fonyod: {
    key: "fonyod",
    cityName: {
      hu: "Fonyód",
      en: "Fonyód",
      de: "Fonyód"
    },
    stationName: {
      hu: "Fonyód vasútállomás",
      en: "Fonyód railway station",
      de: "Bahnhof Fonyód"
    },
    station: {
      lat: 46.74967576545669,
      lon: 17.55846251560088
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Fonyód"],
      university: ["egyetem Fonyód"]
    },
    unavailableSubcategories: {
      school: ["university"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  mohacs: {
    key: "mohacs",
    cityName: {
      hu: "Mohács",
      en: "Mohács",
      de: "Mohács"
    },
    stationName: {
      hu: "Mohács vasútállomás",
      en: "Mohács railway station",
      de: "Bahnhof Mohács"
    },
    station: {
      lat: 46.00248972096716,
      lon: 18.681094661286085
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Mohács"],
      university: ["egyetem Mohács"]
    },
    unavailableSubcategories: {
      school: ["university"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  szekszard: {
    key: "szekszard",
    cityName: {
      hu: "Szekszárd",
      en: "Szekszárd",
      de: "Szekszárd"
    },
    stationName: {
      hu: "Szekszárd vasútállomás",
      en: "Szekszárd railway station",
      de: "Bahnhof Szekszárd"
    },
    station: {
      lat: 46.34836988984216,
      lon: 18.709732981746324
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Szekszárd"],
      university: ["egyetem Szekszárd"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  villany: {
    key: "villany",
    cityName: {
      hu: "Villány",
      en: "Villány",
      de: "Villány"
    },
    stationName: {
      hu: "Villány vasútállomás",
      en: "Villány railway station",
      de: "Bahnhof Villány"
    },
    station: {
      lat: 45.87673263885565,
      lon: 18.44581815816651
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Villány"],
      university: ["egyetem Villány"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonfoldvar: {
    key: "balatonfoldvar",
    cityName: {
      hu: "Balatonföldvár",
      en: "Balatonföldvár",
      de: "Balatonföldvár"
    },
    stationName: {
      hu: "Balatonföldvár vasútállomás",
      en: "Balatonföldvár railway station",
      de: "Bahnhof Balatonföldvár"
    },
    station: {
      lat: 46.853451495190704,
      lon: 17.880767645163562
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Balatonföldvár"],
      university: ["egyetem Balatonföldvár"]
    },
    unavailableSubcategories: {
      school: ["university"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonbereny: {
    key: "balatonbereny",
    cityName: {
      hu: "Balatonberény",
      en: "Balatonberény",
      de: "Balatonberény"
    },
    stationName: {
      hu: "Balatonberény vasútállomás",
      en: "Balatonberény railway station",
      de: "Bahnhof Balatonberény"
    },
    station: {
      lat: 46.71373166309745,
      lon: 17.317126422183236
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Balatonberény"],
      university: ["egyetem Balatonberény"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonfenyves: {
    key: "balatonfenyves",
    cityName: {
      hu: "Balatonfenyves",
      en: "Balatonfenyves",
      de: "Balatonfenyves"
    },
    stationName: {
      hu: "Balatonfenyves vasútállomás",
      en: "Balatonfenyves railway station",
      de: "Bahnhof Balatonfenyves"
    },
    station: {
      lat: 46.712945268687875,
      lon: 17.48340130143374
    },
    radius: 4000,
    fallbackQueries: {
      school_all: ["iskola Balatonfenyves"],
      university: ["egyetem Balatonfenyves"],
      bath: ["strand Balatonfenyves", "szabadstrand Balatonfenyves", "Balatonfenyvesi strand"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  balatonmaria: {
    key: "balatonmaria",
    cityName: {
      hu: "Balatonmáriafürdő",
      en: "Balatonmáriafürdő",
      de: "Balatonmáriafürdő"
    },
    stationName: {
      hu: "Balatonmáriafürdő vasútállomás",
      en: "Balatonmáriafürdő railway station",
      de: "Bahnhof Balatonmáriafürdő"
    },
    station: {
      lat: 46.70427308590362,
      lon: 17.373515985151588
    },
    radius: 4000,
    fallbackQueries: {
      school_all: ["iskola Balatonmáriafürdő"],
      university: ["egyetem Balatonmáriafürdő"],
      bath: ["strand Balatonmáriafürdő", "szabadstrand Balatonmáriafürdő", "Balatonmáriafürdő strand"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  tab: {
    key: "tab",
    cityName: {
      hu: "Tab",
      en: "Tab",
      de: "Tab"
    },
    stationName: {
      hu: "Tab vas\u00fat\u00e1llom\u00e1s",
      en: "Tab railway station",
      de: "Bahnhof Tab"
    },
    station: {
      lat: 46.73391848182461,
      lon: 18.040760193255085
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Tab"],
      university: ["egyetem Tab"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  szigetvar: {
    key: "szigetvar",
    cityName: {
      hu: "Szigetv\u00e1r",
      en: "Szigetv\u00e1r",
      de: "Szigetv\u00e1r"
    },
    stationName: {
      hu: "Szigetv\u00e1r vas\u00fat\u00e1llom\u00e1s",
      en: "Szigetv\u00e1r railway station",
      de: "Bahnhof Szigetv\u00e1r"
    },
    station: {
      lat: 46.04328867840719,
      lon: 17.800295603582384
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Szigetv\u00e1r"],
      university: ["egyetem Szigetv\u00e1r"],
      bath: ["Szigetv\u00e1ri Gy\u00f3gyf\u00fcrd\u0151", "f\u00fcrd\u0151 Szigetv\u00e1r"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema"]
    },
    forbiddenNames: [],
    specialLinks: []
  },

  osztopan: {
    key: "osztopan",
    cityName: {
      hu: "Osztop\u00e1n",
      en: "Osztop\u00e1n",
      de: "Osztop\u00e1n"
    },
    stationName: {
      hu: "Osztop\u00e1n vas\u00fat\u00e1llom\u00e1s",
      en: "Osztop\u00e1n railway station",
      de: "Bahnhof Osztop\u00e1n"
    },
    station: {
      lat: 46.51519286833459,
      lon: 17.656566556845913
    },
    radius: 3500,
    fallbackQueries: {
      school_all: ["iskola Osztop\u00e1n"],
      university: ["egyetem Osztop\u00e1n"]
    },
    unavailableSubcategories: {
      school: ["university"],
      entertainment: ["cinema", "bath"]
    },
    forbiddenNames: [],
    specialLinks: []
  }
};
