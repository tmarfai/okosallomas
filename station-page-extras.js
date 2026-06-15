// Uj allomas bovitese:
// 1. Adj hozza egy kulcsot ugyanazzal a nevvel, mint a body data-station-key erteke.
// 2. Tedd bele az info.hu / info.en kartyakat.
// 3. Ha van hivatalos MAV allomasterkep, add meg a map.image es map.source ertekeket.
window.stationPageExtras = {
  balatonaliga: {
    map: {
      image: "balatonaligabelso.jpg",
      source: "terkep_balatonaliga_v2428.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Balatonaliga állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Balatonaliga station. On mobile, swipe sideways to view the full map."
      }
    }
  },

  balatonalmadi: {
    map: {
      image: "balatonalmadibelso.jpg",
      source: "terkep_balatonalmadi_v2424.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Balatonalmádi állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Balatonalmádi station. On mobile, swipe sideways to view the full map."
      }
    }
  },

  balatonboglar: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "8630 Balatonboglár, Dózsa György út 37."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Vasúti pénztár: H-V 04:00-23:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Belföldi jegyeladás, gépi menetjegykiadás és jegykiadó automata."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Akadálymentesség",
            body: "Az állomáson akadálymentes WC található."
          },
          {
            icon: "bi-info-circle",
            title: "Talált tárgyak",
            body: "Talált tárgyak ügyintézése a pénztár nyitvatartásával megegyezően."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999"
          }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Address",
            body: "8630 Balatonboglár, Dózsa György út 37."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "Railway ticket office: daily 04:00-23:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Domestic ticket sales, machine-issued tickets and a ticket vending machine."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Accessibility",
            body: "An accessible restroom is available at the station."
          },
          {
            icon: "bi-info-circle",
            title: "Lost Property",
            body: "Lost property service is available during ticket office opening hours."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      }
    },
    map: {
      image: "balatonboglarbelso.jpg",
      source: "terkep_balatonboglar_v2421.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Balatonboglár állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Balatonboglár station. On mobile, swipe sideways to view the full map."
      }
    }
  },

  balatonszemes: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "8636 Balatonszemes, Állomás tér 1."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Az állomáson nincs pénztár, jegykiadó automata elérhető."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parkolás",
            body: "Parkoló található az állomás közelében."
          },
          {
            icon: "bi-bicycle",
            title: "Kerékpár",
            body: "Kerékpártároló található az állomás területén."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999"
          }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Address",
            body: "8636 Balatonszemes, Állomás tér 1."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "There is no ticket office at the station, but a ticket vending machine is available."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parking",
            body: "Parking is available near the station."
          },
          {
            icon: "bi-bicycle",
            title: "Bicycle",
            body: "Bicycle parking is available on the station grounds."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      }
    },
    map: {
      image: "balatonszemesbelso.jpg",
      source: "terkep_balatonszemes_v2442.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Balatonszemes állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Balatonszemes station. On mobile, swipe sideways to view the full map."
      }
    }
  },

  siofok: {
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "Vasútállomás: 8600 Siófok, Millenium Park 1.<br>Autóbusz-állomás: 8600 Siófok, Fő utca 71-81."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztárak",
            body: "Vasúti pénztár: H-V 03:30-23:30.<br>Buszpénztár: munkanapokon időszaktól függően, hétvégén és ünnepnap zárva."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyek és szolgáltatások",
            body: "Belföldi és nemzetközi jegyeladás, jegykiadó automata, talált tárgyak és csomagmegőrző."
          },
          {
            icon: "bi-clock",
            title: "Váróterem és mosdó",
            body: "Buszváró: mindennap 05:20-22:30, főszezonban 05:00-23:45.<br>Mosdó: mindennap 07:30-19:00."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Akadálymentesség",
            body: "Emelő, akadálymentes WC, hangos utastájékoztatás és vezetősáv látássérültek részére."
          },
          {
            icon: "bi-info-circle",
            title: "Továbbiak",
            body: "Parkoló és kerékpártároló az állomás közelében.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/siofok-vasut-es-autobusz-allomas\" target=\"_blank\" rel=\"noopener\">MÁV forrás</a>"
          }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Address",
            body: "Railway station: 8600 Siófok, Millenium Park 1.<br>Bus station: 8600 Siófok, Fő utca 71-81."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Offices",
            body: "Railway ticket office: daily 03:30-23:30.<br>Bus ticket office: open on working days depending on the date period, closed on weekends and holidays."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Tickets and Services",
            body: "Domestic and international ticket sales, ticket vending machine, lost property and luggage lockers."
          },
          {
            icon: "bi-clock",
            title: "Waiting Room and Restrooms",
            body: "Bus waiting room: daily 05:20-22:30, in high season 05:00-23:45.<br>Restrooms: daily 07:30-19:00."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Accessibility",
            body: "Lift, accessible restroom, audio passenger information and tactile guiding path."
          },
          {
            icon: "bi-info-circle",
            title: "More",
            body: "Parking and bicycle parking are available near the station.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/siofok-vasut-es-autobusz-allomas\" target=\"_blank\" rel=\"noopener\">MÁV source</a>"
          }
        ]
      }
    },
    map: {
      image: "siofokbelso.jpg",
      source: "https://www.mavcsoport.hu/sites/default/files/upload/ticket_office_station/terkep_siofok_v2424.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Siófok vasút- és autóbusz-állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Siófok railway and bus station. On mobile, swipe sideways to view the full map."
      }
    }
  },

  barcs: {
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "7570 Barcs, Pályaudvar 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztárak",
            body: "Vasúti pénztár: H-V 03:15-22:30.<br>Az autóbusz-állomás jegypénztár nélkül működik."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyek és ügyintézés",
            body: "Belföldi jegyeladás, gépi menetjegykiadás, talált tárgyak az állomás épületében."
          },
          {
            icon: "bi-clock",
            title: "Váróterem és mosdó",
            body: "Buszváró: H-P 05:30-22:20, hétvégén/ünnepnap 06:00-18:45.<br>Mosdó: mindennap 03:30-22:00."
          },
          {
            icon: "bi-megaphone",
            title: "Utastájékoztatás",
            body: "Hangos utastájékoztatás elérhető az állomáson."
          },
          {
            icon: "bi-info-circle",
            title: "Továbbiak",
            body: "Csoportos utazások szervezése: Pécs Szabadság út.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/barcs-vasut-es-autobusz-allomas\" target=\"_blank\" rel=\"noopener\">MÁV forrás</a>"
          }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Address",
            body: "7570 Barcs, Pályaudvar 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Offices",
            body: "Railway ticket office: daily 03:15-22:30.<br>The bus station operates without a ticket office."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Tickets and Services",
            body: "Domestic ticket sales, machine-issued tickets and lost property in the station building."
          },
          {
            icon: "bi-clock",
            title: "Waiting Room and Restrooms",
            body: "Bus waiting room: Mon-Fri 05:30-22:20, weekends/holidays 06:00-18:45.<br>Restrooms: daily 03:30-22:00."
          },
          {
            icon: "bi-megaphone",
            title: "Passenger Information",
            body: "Audio passenger information is available at the station."
          },
          {
            icon: "bi-info-circle",
            title: "More",
            body: "Group travel organizer: Pécs Szabadság út.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/barcs-vasut-es-autobusz-allomas\" target=\"_blank\" rel=\"noopener\">MÁV source</a>"
          }
        ]
      }
    }
  },

  szekszard: {
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "Vasútállomás: 7100 Szekszárd, Pollack Mihály utca 1-49.<br>Autóbusz-állomás: 7100 Szekszárd, Pollack Mihály utca 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztárak",
            body: "Vasúti pénztár: H-V 08:10-17:30.<br>Buszpénztár: munkanapokon 08:10-12:00 és 12:20-15:30, hétvégén/ünnepnap zárva."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyek és szolgáltatások",
            body: "Belföldi és nemzetközi jegyeladás, jegykiadó automata és talált tárgyak osztálya."
          },
          {
            icon: "bi-clock",
            title: "Váróterem és mosdó",
            body: "Váróterem: mindennap 05:00-22:15.<br>Mosdó: 05:00-20:00."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Akadálymentesség",
            body: "Akadálymentes mosdó és vezetősáv látássérültek részére."
          },
          {
            icon: "bi-info-circle",
            title: "Továbbiak",
            body: "Parkoló és kerékpártároló az állomás területén.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/szekszard-vasut-es-autobusz-allomas\" target=\"_blank\" rel=\"noopener\">MÁV forrás</a>"
          }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Address",
            body: "Railway station: 7100 Szekszárd, Pollack Mihály utca 1-49.<br>Bus station: 7100 Szekszárd, Pollack Mihály utca 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Offices",
            body: "Railway ticket office: daily 08:10-17:30.<br>Bus ticket office: weekdays 08:10-12:00 and 12:20-15:30, closed on weekends/holidays."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Tickets and Services",
            body: "Domestic and international ticket sales, ticket vending machine and lost property office."
          },
          {
            icon: "bi-clock",
            title: "Waiting Room and Restrooms",
            body: "Waiting room: daily 05:00-22:15.<br>Restrooms: 05:00-20:00."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Accessibility",
            body: "Accessible restroom and tactile guiding path for visually impaired passengers."
          },
          {
            icon: "bi-info-circle",
            title: "More",
            body: "Parking and bicycle parking are available at the station.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/szekszard-vasut-es-autobusz-allomas\" target=\"_blank\" rel=\"noopener\">MÁV source</a>"
          }
        ]
      }
    },
    map: {
      image: "szekszardbelso.jpg",
      source: "https://www.mavcsoport.hu/sites/default/files/upload/ticket_office_station/terkep_szekszard_a3_v260326.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Szekszárd vasút- és autóbusz-állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Szekszárd railway and bus station. On mobile, swipe sideways to view the full map."
      }
    }
  }
};
