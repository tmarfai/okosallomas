// Uj allomas bovitese:
// 1. Adj hozza egy kulcsot ugyanazzal a nevvel, mint a body data-station-key erteke.
// 2. Tedd bele az info.hu / info.en kartyakat.
// 3. Ha van hivatalos MAV allomasterkep, add meg a map.image es map.source ertekeket.
window.stationPageExtras = {
  balatonaliga: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "8171 Balatonvilágos, Balatonaliga Vasútállomás 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Az állomáson nincs vasúti pénztár."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Jegyváltás jegykiadó automatából lehetséges."
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
            body: "8171 Balatonvilágos, Balatonaliga Vasútállomás 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "There is no railway ticket office at the station."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Tickets can be purchased from the ticket vending machine."
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
        title: "Hasznos inform?ci?k az ?llom?sr?l",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "C?m",
            body: "8636 Balatonszemes, ?llom?s t?r 1."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyv?s?rl?s",
            body: "Az ?llom?son nincs p?nzt?r, jegykiad? automata el?rhet?."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parkol?s",
            body: "Parkol? tal?lhat? az ?llom?s k?zel?ben."
          },
          {
            icon: "bi-bicycle",
            title: "Ker?kp?r",
            body: "Ker?kp?rt?rol? tal?lhat? az ?llom?s ter?let?n."
          },
          {
            icon: "bi-telephone",
            title: "M?VDIREKT",
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
            body: "8636 Balatonszemes, ?llom?s t?r 1."
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
            title: "M?VDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      },
      de: {
        title: "N?tzliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "8636 Balatonszemes, ?llom?s t?r 1."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticketkauf",
            body: "Der Bahnhof wird ohne Fahrkartenschalter betrieben, ein Fahrkartenautomat ist vorhanden."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parken",
            body: "Parkpl?tze befinden sich in der N?he des Bahnhofs."
          },
          {
            icon: "bi-bicycle",
            title: "Fahrrad",
            body: "Fahrradabstellpl?tze sind auf dem Bahnhofsgel?nde vorhanden."
          },
          {
            icon: "bi-telephone",
            title: "M?VDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999"
          }
        ]
      }
    },
    map: {
      image: "balatonszemesbelso.jpg",
      source: "terkep_balatonszemes_v2442.pdf",
      hu: {
        title: "?llom?st?rk?p",
        text: "A M?V hivatalos ?ttekint? t?rk?pe Balatonszemes ?llom?s?r?l. Telefonon oldalir?nyban g?rgethet?."
      },
      en: {
        title: "Station Map",
        text: "Official M?V overview map of Balatonszemes station. On mobile, swipe sideways to view the full map."
      },
      de: {
        title: "Bahnhofsplan",
        text: "Offizieller M?V-?bersichtsplan des Bahnhofs Balatonszemes. Auf dem Handy kann der Plan seitlich verschoben werden."
      }
    }
  },

  balatonszentgyorgy: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos inform?ci?k az ?llom?sr?l",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "C?m",
            body: "8710 Balatonszentgy?rgy, Vas?t u. 9."
          },
          {
            icon: "bi-cash-coin",
            title: "P?nzt?r",
            body: "Vas?ti p?nzt?r: H-V 03:00-22:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyv?s?rl?s",
            body: "Belf?ldi jegyelad?s ?s g?pi menetjegykiad?s."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Akad?lymentess?g",
            body: "Emel? mindig van az ?llom?son, akad?lymentes WC tal?lhat?."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parkol?s ?s ker?kp?r",
            body: "Parkol? tal?lhat? az ?llom?s k?zel?ben, ker?kp?rt?rol? az ?llom?s ter?let?n."
          },
          {
            icon: "bi-telephone",
            title: "M?VDIREKT",
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
            body: "8710 Balatonszentgy?rgy, Vas?t u. 9."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "Railway ticket office: daily 03:00-22:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Domestic ticket sales and machine-issued tickets are available."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Accessibility",
            body: "A lift is always available at the station, and an accessible restroom is provided."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parking and Bicycle",
            body: "Parking is available near the station, and bicycle parking is available on the station grounds."
          },
          {
            icon: "bi-telephone",
            title: "M?VDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      },
      de: {
        title: "N?tzliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "8710 Balatonszentgy?rgy, Vas?t u. 9."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Fahrkartenschalter: t?glich 03:00-22:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticketkauf",
            body: "Inlandsfahrkartenverkauf und maschinelle Fahrkartenausgabe sind verf?gbar."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Barrierefreiheit",
            body: "Ein Hublift ist jederzeit am Bahnhof verf?gbar, au?erdem gibt es ein barrierefreies WC."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parken und Fahrrad",
            body: "Parkpl?tze befinden sich in der N?he des Bahnhofs, Fahrradabstellpl?tze auf dem Bahnhofsgel?nde."
          },
          {
            icon: "bi-telephone",
            title: "M?VDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999"
          }
        ]
      }
    },
    map: {
      image: "balatonszentgyorgybelso.jpg",
      source: "terkep_balatonszentgyorgy_v2422.pdf",
      hu: {
        title: "?llom?st?rk?p",
        text: "A M?V hivatalos ?ttekint? t?rk?pe Balatonszentgy?rgy ?llom?s?r?l. Telefonon oldalir?nyban g?rgethet?."
      },
      en: {
        title: "Station Map",
        text: "Official M?V overview map of Balatonszentgy?rgy station. On mobile, swipe sideways to view the full map."
      },
      de: {
        title: "Bahnhofsplan",
        text: "Offizieller M?V-?bersichtsplan des Bahnhofs Balatonszentgy?rgy. Auf dem Handy kann der Plan seitlich verschoben werden."
      }
    }
  },

  pusztaszabolcs: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "2490 Pusztaszabolcs, Sport utca 13."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Vasúti pénztár: H-V 05:25-08:10, 08:30-13:15, 13:40-15:35."
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
            icon: "bi-car-front-fill",
            title: "Megközelítés",
            body: "Parkoló található az állomás közelében."
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
            body: "2490 Pusztaszabolcs, Sport utca 13."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "Railway ticket office: daily 05:25-08:10, 08:30-13:15, 13:40-15:35."
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
            icon: "bi-car-front-fill",
            title: "Access",
            body: "Parking is available near the station."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      }
    }
  },

  sarbogard: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "7000 Sárbogárd, Vasútállomás."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Vasúti pénztár: H-V 07:40-17:50."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Belföldi jegyeladás, gépi menetjegykiadás és jegykiadó automata."
          },
          {
            icon: "bi-info-circle",
            title: "Talált tárgyak",
            body: "Talált tárgyak ügyintézése az állomás épületében, pénztári nyitvatartási időben."
          },
          {
            icon: "bi-car-front-fill",
            title: "Megközelítés",
            body: "Parkoló található az állomás közelében."
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
            body: "7000 Sárbogárd, Vasútállomás."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "Railway ticket office: daily 07:40-17:50."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Domestic ticket sales, machine-issued tickets and a ticket vending machine."
          },
          {
            icon: "bi-info-circle",
            title: "Lost Property",
            body: "Lost property service is available in the station building during ticket office opening hours."
          },
          {
            icon: "bi-car-front-fill",
            title: "Access",
            body: "Parking is available near the station."
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
      image: "sarbogardbelso.jpg",
      source: "terkep_sarbogard_v2440.pdf",
      hu: {
        title: "Állomástérkép",
        text: "Sárbogárd állomás áttekintő térképe. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Overview map of Sárbogárd station. On mobile, swipe sideways to view the full map."
      }
    }
  },

  szentlorinc: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "7940 Szentlőrinc, Hunyadi u. 4."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "H-P 06:35-18:25, SZ-V 07:05-18:25."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Belföldi jegyeladás és gépi menetjegykiadás."
          },
          {
            icon: "bi-car-front-fill",
            title: "Megközelítés",
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
            body: "7940 Szentlőrinc, Hunyadi u. 4."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "Mon-Fri 06:35-18:25, Sat-Sun 07:05-18:25."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Domestic ticket sales and machine-issued tickets."
          },
          {
            icon: "bi-car-front-fill",
            title: "Access",
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
    }
  },

  zamardi: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "8621 Zamárdi, Szabadság tér 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Vasúti pénztár: H-V 03:30-23:30."
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
            title: "Továbbiak",
            body: "Talált tárgyak ügyintézése, parkoló és kerékpártároló."
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
            body: "8621 Zamárdi, Szabadság tér 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "Railway ticket office: daily 03:30-23:30."
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
            title: "More",
            body: "Lost property service, parking and bicycle parking are available."
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
      image: "zamardibelso.jpg",
      source: "terkep_zamardi_v2421.pdf",
      hu: {
        title: "Állomástérkép",
        text: "Zamárdi állomás áttekintő térképe. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Overview map of Zamárdi station. On mobile, swipe sideways to view the full map."
      }
    }
  },

  szantod: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "8622 Szántód, Vasútállomás."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Az állomáson nincs pénztár, csak jegykiadó automata érhető el."
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
            body: "8622 Szántód, Vasútállomás."
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
      image: "szantodbelso.jpg",
      source: "terkep_szantod_v2431.pdf",
      hu: {
        title: "Állomástérkép",
        text: "Szántód állomás áttekintő térképe. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Overview map of Szántód station. On mobile, swipe sideways to view the full map."
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
      },
      de: {
        title: "Nützliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "Bahnhof: 8600 Siófok, Millenium Park 1.<br>Busbahnhof: 8600 Siófok, Fő utca 71-81."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Bahnschalter: täglich 03:30-23:30.<br>Busschalter: an Werktagen je nach Zeitraum geöffnet, am Wochenende und an Feiertagen geschlossen."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Tickets und Services",
            body: "Inlands- und internationale Fahrkarten, Fahrkartenautomat, Fundbüro und Gepäckaufbewahrung."
          },
          {
            icon: "bi-clock",
            title: "Warteraum und WC",
            body: "Buswartebereich: täglich 05:20-22:30, in der Hauptsaison 05:00-23:45.<br>WC: täglich 07:30-19:00."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Barrierefreiheit",
            body: "Hebelift, barrierefreies WC, akustische Fahrgastinformation und Blindenleitsystem."
          },
          {
            icon: "bi-info-circle",
            title: "Weitere Informationen",
            body: "Parkplätze und Fahrradabstellplätze befinden sich in der Nähe des Bahnhofs.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/siofok-vasut-es-autobusz-allomas\" target=\"_blank\" rel=\"noopener\">MÁV-Quelle</a>"
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
      },
      de: {
        title: "Bahnhofsplan",
        text: "Übersichtsplan des Bahnhofs und Busbahnhofs Siófok. Auf dem Handy kannst du seitlich scrollen."
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

  villany: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "7773 Villány, Ady fasor 9/6."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Az állomás jegypénztár nélkül működik."
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
          },
          {
            icon: "bi-info-circle",
            title: "Továbbiak",
            body: "Csoportos utazások szervezése: Pécs.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/villany\" target=\"_blank\" rel=\"noopener\">MÁV forrás</a>"
          }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Address",
            body: "7773 Villány, Ady fasor 9/6."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "The station operates without a ticket office."
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
          },
          {
            icon: "bi-info-circle",
            title: "More",
            body: "Group travel organizer: Pécs.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/villany\" target=\"_blank\" rel=\"noopener\">MÁV source</a>"
          }
        ]
      },
      de: {
        title: "Nützliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "7773 Villány, Ady fasor 9/6."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Der Bahnhof wird ohne Fahrkartenschalter betrieben."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parken",
            body: "Parkplätze befinden sich in der Nähe des Bahnhofs."
          },
          {
            icon: "bi-bicycle",
            title: "Fahrrad",
            body: "Fahrradabstellplätze sind auf dem Bahnhofsgelände vorhanden."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999"
          },
          {
            icon: "bi-info-circle",
            title: "Weitere Informationen",
            body: "Organisation von Gruppenreisen: Pécs.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/villany\" target=\"_blank\" rel=\"noopener\">Quelle: MÁV-Gruppe</a>"
          }
        ]
      }
    },
    map: {
      image: "villanybelso.jpg",
      source: "terkep_villany_v2446.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Villány állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Villány station. On mobile, swipe sideways to view the full map."
      },
      de: {
        title: "Bahnhofsplan",
        text: "Offizieller MÁV-Übersichtsplan des Bahnhofs Villány. Auf dem Handy kann der Plan seitlich verschoben werden."
      }
    }
  },

  balatonfoldvar: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "8623 Balatonföldvár, Vak Bottyán utca 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Vasúti pénztár: H-V és ünnepnapokon 07:00-18:35."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Belföldi jegyeladás, gépi menetjegykiadás és jegykiadó automata."
          },
          {
            icon: "bi-info-circle",
            title: "Talált tárgyak",
            body: "Talált tárgyak ügyintézése az állomás épületében, a pénztár nyitvatartásával megegyezően."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parkolás",
            body: "Parkoló található az állomás közelében."
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
            body: "8623 Balatonföldvár, Vak Bottyán utca 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "Railway ticket office: daily and on public holidays 07:00-18:35."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Domestic ticket sales, machine-issued tickets and a ticket vending machine."
          },
          {
            icon: "bi-info-circle",
            title: "Lost Property",
            body: "Lost property service is available in the station building during ticket office opening hours."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parking",
            body: "Parking is available near the station."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      },
      de: {
        title: "Nützliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "8623 Balatonföldvár, Vak Bottyán utca 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Bahnschalter: täglich und an Feiertagen 07:00-18:35."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticketkauf",
            body: "Inlandsfahrkarten, maschinell ausgegebene Tickets und Fahrkartenautomat."
          },
          {
            icon: "bi-info-circle",
            title: "Fundsachen",
            body: "Fundsachen-Service im Bahnhofsgebäude während der Öffnungszeiten des Fahrkartenschalters."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parken",
            body: "Parkplätze befinden sich in der Nähe des Bahnhofs."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999"
          }
        ]
      }
    },
    map: {
      image: "balatonfoldvarbelso.jpg",
      source: "terkep_balatonfoldvar_v2427.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Balatonföldvár állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Balatonföldvár station. On mobile, swipe sideways to view the full map."
      },
      de: {
        title: "Bahnhofsplan",
        text: "Offizieller MÁV-Übersichtsplan des Bahnhofs Balatonföldvár. Auf dem Handy kann der Plan seitlich verschoben werden."
      }
    }
  },

  balatonbereny: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "8649 Balatonberény, Balaton u. 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Az állomás jegypénztár nélkül működik."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Csak jegykiadó automata érhető el."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parkolás",
            body: "Parkoló található az állomás közelében."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999"
          },
          {
            icon: "bi-info-circle",
            title: "Továbbiak",
            body: "<a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/balatonbereny\" target=\"_blank\" rel=\"noopener\">MÁV forrás</a>"
          }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Address",
            body: "8649 Balatonberény, Balaton u. 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "The station operates without a ticket office."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Only a ticket vending machine is available."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parking",
            body: "Parking is available near the station."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          },
          {
            icon: "bi-info-circle",
            title: "More",
            body: "<a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/balatonbereny\" target=\"_blank\" rel=\"noopener\">MÁV source</a>"
          }
        ]
      },
      de: {
        title: "Nützliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "8649 Balatonberény, Balaton u. 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Der Bahnhof wird ohne Fahrkartenschalter betrieben."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticketkauf",
            body: "Es steht nur ein Fahrkartenautomat zur Verfügung."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parken",
            body: "Parkplätze befinden sich in der Nähe des Bahnhofs."
          },
          {
            icon: "bi-telephone",
            title: "MÁVDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999"
          },
          {
            icon: "bi-info-circle",
            title: "Weitere Informationen",
            body: "<a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/balatonbereny\" target=\"_blank\" rel=\"noopener\">Quelle: MÁV-Gruppe</a>"
          }
        ]
      }
    },
    map: {
      image: "balatonberenybelso.jpg",
      source: "terkep_balatonbereny_v2438.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Balatonberény állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Balatonberény station. On mobile, swipe sideways to view the full map."
      },
      de: {
        title: "Bahnhofsplan",
        text: "Offizieller MÁV-Übersichtsplan des Bahnhofs Balatonberény. Auf dem Handy kann der Plan seitlich verschoben werden."
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
      },
      de: {
        title: "Nützliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "Bahnhof: 7100 Szekszárd, Pollack Mihály utca 1-49.<br>Busbahnhof: 7100 Szekszárd, Pollack Mihály utca 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Bahnschalter: täglich 08:10-17:30.<br>Busschalter: werktags 08:10-12:00 und 12:20-15:30, am Wochenende/Feiertag geschlossen."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Tickets und Services",
            body: "Inlands- und internationale Fahrkarten, Fahrkartenautomat und Fundbüro."
          },
          {
            icon: "bi-clock",
            title: "Warteraum und WC",
            body: "Warteraum: täglich 05:00-22:15.<br>WC: 05:00-20:00."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Barrierefreiheit",
            body: "Barrierefreies WC und Blindenleitsystem für sehbehinderte Fahrgäste."
          },
          {
            icon: "bi-info-circle",
            title: "Weitere Informationen",
            body: "Parkplätze und Fahrradabstellplätze befinden sich am Bahnhof.<br><a href=\"https://www.mavcsoport.hu/mav-szemelyszallitas/belfoldi-utazas/vasutallomas/szekszard-vasut-es-autobusz-allomas\" target=\"_blank\" rel=\"noopener\">MÁV-Quelle</a>"
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
      },
      de: {
        title: "Bahnhofsplan",
        text: "Übersichtsplan des Bahnhofs und Busbahnhofs Szekszárd. Auf dem Handy kannst du seitlich scrollen."
      }
    }
  }
};
