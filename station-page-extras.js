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
      },
      de: {
        title: "Nützliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "8630 Balatonboglár, Dózsa György út 37."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Bahnschalter: täglich 04:00-23:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Fahrkartenkauf",
            body: "Inlandsfahrkarten, maschinelle Fahrkartenausgabe und Fahrkartenautomat."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Barrierefreiheit",
            body: "Am Bahnhof steht ein barrierefreies WC zur Verfügung."
          },
          {
            icon: "bi-info-circle",
            title: "Fundbüro",
            body: "Fundbüro-Service während der Öffnungszeiten des Fahrkartenschalters."
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
      image: "balatonboglarbelso.jpg",
      source: "terkep_balatonboglar_v2421.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Balatonboglár állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Balatonboglár station. On mobile, swipe sideways to view the full map."
      },
      de: {
        title: "Bahnhofsplan",
        text: "Offizieller MÁV-Übersichtsplan des Bahnhofs Balatonboglár. Auf dem Handy kann der Plan seitlich verschoben werden."
      }
    }
  },

  gyekenyes: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos inform\u00e1ci\u00f3k az \u00e1llom\u00e1sr\u00f3l",
        cards: [
          { icon: "bi-geo-alt-fill", title: "C\u00edm", body: "8852 Z\u00e1k\u00e1ny, Zr\u00ednyi t\u00e9r 38." },
          { icon: "bi-cash-coin", title: "P\u00e9nzt\u00e1r", body: "Vas\u00fati p\u00e9nzt\u00e1r: H-V 03:20-23:20. Nemzetk\u00f6zi p\u00e9nzt\u00e1r: H-V 03:20-23:20." },
          { icon: "bi-ticket-perforated", title: "Jegyv\u00e1s\u00e1rl\u00e1s", body: "Belf\u00f6ldi \u00e9s nemzetk\u00f6zi jegyelad\u00e1s, g\u00e9pi menetjegykiad\u00e1s." },
          { icon: "bi-person-wheelchair", title: "Akad\u00e1lymentess\u00e9g", body: "Emel\u0151 mindig van az \u00e1llom\u00e1son, akad\u00e1lymentes WC tal\u00e1lhat\u00f3." },
          { icon: "bi-info-circle", title: "Tal\u00e1lt t\u00e1rgyak", body: "Tal\u00e1lt t\u00e1rgyak \u00fcgyint\u00e9z\u00e9se a p\u00e9nzt\u00e1rral megegyez\u0151 nyitvatart\u00e1ssal, az \u00e1llom\u00e1s \u00e9p\u00fclet\u00e9ben." },
          { icon: "bi-car-front-fill", title: "Parkol\u00e1s \u00e9s ker\u00e9kp\u00e1r", body: "Parkol\u00f3 tal\u00e1lhat\u00f3 az \u00e1llom\u00e1s k\u00f6zel\u00e9ben, ker\u00e9kp\u00e1rt\u00e1rol\u00f3 az \u00e1llom\u00e1s ter\u00fclet\u00e9n." },
          { icon: "bi-telephone", title: "M\u00c1VDIREKT", body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999" }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          { icon: "bi-geo-alt-fill", title: "Address", body: "8852 Z\u00e1k\u00e1ny, Zr\u00ednyi t\u00e9r 38." },
          { icon: "bi-cash-coin", title: "Ticket Office", body: "Railway ticket office: daily 03:20-23:20. International ticket office: daily 03:20-23:20." },
          { icon: "bi-ticket-perforated", title: "Ticket Purchase", body: "Domestic and international ticket sales, with machine-issued tickets." },
          { icon: "bi-person-wheelchair", title: "Accessibility", body: "A lift is always available at the station, and an accessible restroom is provided." },
          { icon: "bi-info-circle", title: "Lost Property", body: "Lost property service is available during ticket office opening hours, in the station building." },
          { icon: "bi-car-front-fill", title: "Parking and Bicycle", body: "Parking is available near the station, and bicycle parking is available on the station grounds." },
          { icon: "bi-telephone", title: "M\u00c1VDIREKT", body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999" }
        ]
      },
      de: {
        title: "N\u00fctzliche Informationen zum Bahnhof",
        cards: [
          { icon: "bi-geo-alt-fill", title: "Adresse", body: "8852 Z\u00e1k\u00e1ny, Zr\u00ednyi t\u00e9r 38." },
          { icon: "bi-cash-coin", title: "Fahrkartenschalter", body: "Fahrkartenschalter: t\u00e4glich 03:20-23:20. Internationaler Schalter: t\u00e4glich 03:20-23:20." },
          { icon: "bi-ticket-perforated", title: "Ticketkauf", body: "Inlands- und internationale Fahrkarten, mit maschineller Fahrkartenausgabe." },
          { icon: "bi-person-wheelchair", title: "Barrierefreiheit", body: "Ein Hublift ist jederzeit am Bahnhof verf\u00fcgbar, au\u00dferdem gibt es ein barrierefreies WC." },
          { icon: "bi-info-circle", title: "Fundsachen", body: "Fundsachenservice im Bahnhofsgeb\u00e4ude w\u00e4hrend der Schalter\u00f6ffnungszeiten." },
          { icon: "bi-car-front-fill", title: "Parken und Fahrrad", body: "Parkpl\u00e4tze befinden sich in der N\u00e4he des Bahnhofs, Fahrradabstellpl\u00e4tze auf dem Bahnhofsgel\u00e4nde." },
          { icon: "bi-telephone", title: "M\u00c1VDIREKT", body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999" }
        ]
      }
    },
    map: {
      image: "gyekenyesbelso.jpg",
      source: "terkep_gyekenyes_v2419.pdf",
      hu: { title: "\u00c1llom\u00e1st\u00e9rk\u00e9p", text: "A M\u00c1V hivatalos \u00e1ttekint\u0151 t\u00e9rk\u00e9pe Gy\u00e9k\u00e9nyes \u00e1llom\u00e1s\u00e1r\u00f3l. Telefonon oldalir\u00e1nyban g\u00f6rgethet\u0151." },
      en: { title: "Station Map", text: "Official M\u00c1V overview map of Gy\u00e9k\u00e9nyes station. On mobile, swipe sideways to view the full map." },
      de: { title: "Bahnhofsplan", text: "Offizieller M\u00c1V-\u00dcbersichtsplan des Bahnhofs Gy\u00e9k\u00e9nyes. Auf dem Handy kann der Plan seitlich verschoben werden." }
    }
  },

  balatonszarszo: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos inform\u00e1ci\u00f3k az \u00e1llom\u00e1sr\u00f3l",
        cards: [
          { icon: "bi-geo-alt-fill", title: "C\u00edm", body: "8624 Balatonsz\u00e1rsz\u00f3, F\u0151 u. 2." },
          { icon: "bi-cash-coin", title: "P\u00e9nzt\u00e1r", body: "A p\u00e9nzt\u00e1ri jegy- \u00e9s b\u00e9rlet\u00e9rt\u00e9kes\u00edt\u00e9s 2025. j\u00falius 1-t\u0151l visszavon\u00e1sig sz\u00fcnetel." },
          { icon: "bi-ticket-perforated", title: "Jegyv\u00e1s\u00e1rl\u00e1s", body: "Belf\u00f6ldi jegyelad\u00e1s, g\u00e9pi menetjegykiad\u00e1s \u00e9s jegykiad\u00f3 automata." },
          { icon: "bi-car-front-fill", title: "Parkol\u00e1s", body: "Parkol\u00f3 tal\u00e1lhat\u00f3 az \u00e1llom\u00e1s k\u00f6zel\u00e9ben." },
          { icon: "bi-bicycle", title: "Ker\u00e9kp\u00e1r", body: "Ker\u00e9kp\u00e1rt\u00e1rol\u00f3 tal\u00e1lhat\u00f3 az \u00e1llom\u00e1s ter\u00fclet\u00e9n." },
          { icon: "bi-telephone", title: "M\u00c1VDIREKT", body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999" }
        ]
      },
      en: {
        title: "Useful information about the station",
        cards: [
          { icon: "bi-geo-alt-fill", title: "Address", body: "8624 Balatonsz\u00e1rsz\u00f3, F\u0151 u. 2." },
          { icon: "bi-cash-coin", title: "Ticket Office", body: "Ticket and pass sales at the ticket office are suspended from 1 July 2025 until further notice." },
          { icon: "bi-ticket-perforated", title: "Ticket Purchase", body: "Domestic ticket sales, machine-issued tickets and a ticket vending machine are available." },
          { icon: "bi-car-front-fill", title: "Parking", body: "Parking is available near the station." },
          { icon: "bi-bicycle", title: "Bicycle", body: "Bicycle parking is available on the station grounds." },
          { icon: "bi-telephone", title: "M\u00c1VDIREKT", body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999" }
        ]
      },
      de: {
        title: "N\u00fctzliche Informationen zum Bahnhof",
        cards: [
          { icon: "bi-geo-alt-fill", title: "Adresse", body: "8624 Balatonsz\u00e1rsz\u00f3, F\u0151 u. 2." },
          { icon: "bi-cash-coin", title: "Fahrkartenschalter", body: "Der Fahrkarten- und Zeitkartenverkauf am Schalter ist seit dem 1. Juli 2025 bis auf Weiteres ausgesetzt." },
          { icon: "bi-ticket-perforated", title: "Ticketkauf", body: "Inlandsfahrkarten, maschinelle Fahrkartenausgabe und ein Fahrkartenautomat sind verf\u00fcgbar." },
          { icon: "bi-car-front-fill", title: "Parken", body: "Parkpl\u00e4tze befinden sich in der N\u00e4he des Bahnhofs." },
          { icon: "bi-bicycle", title: "Fahrrad", body: "Fahrradabstellpl\u00e4tze sind auf dem Bahnhofsgel\u00e4nde vorhanden." },
          { icon: "bi-telephone", title: "M\u00c1VDIREKT", body: "+36 (1) 3 49 49 49<br>Mobil: +36 (20/30/70) 499 4999" }
        ]
      }
    },
    map: {
      image: "balatonszarszobelso.jpg",
      source: "terkep_balatonszarszo_v2423.pdf",
      hu: { title: "\u00c1llom\u00e1st\u00e9rk\u00e9p", text: "A M\u00c1V hivatalos \u00e1ttekint\u0151 t\u00e9rk\u00e9pe Balatonsz\u00e1rsz\u00f3 \u00e1llom\u00e1s\u00e1r\u00f3l. Telefonon oldalir\u00e1nyban g\u00f6rgethet\u0151." },
      en: { title: "Station Map", text: "Official M\u00c1V overview map of Balatonsz\u00e1rsz\u00f3 station. On mobile, swipe sideways to view the full map." },
      de: { title: "Bahnhofsplan", text: "Offizieller M\u00c1V-\u00dcbersichtsplan des Bahnhofs Balatonsz\u00e1rsz\u00f3. Auf dem Handy kann der Plan seitlich verschoben werden." }
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
      },
      de: {
        title: "Nützliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "8636 Balatonszemes, Állomás tér 1."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticketkauf",
            body: "Der Bahnhof wird ohne Fahrkartenschalter betrieben, ein Fahrkartenautomat ist vorhanden."
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
      },
      de: {
        title: "Bahnhofsplan",
        text: "Offizieller MÁV-Übersichtsplan des Bahnhofs Balatonszemes. Auf dem Handy kann der Plan seitlich verschoben werden."
      }
    }
  },

  balatonszentgyorgy: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos információk az állomásról",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Cím",
            body: "8710 Balatonszentgyörgy, Vasút u. 9."
          },
          {
            icon: "bi-cash-coin",
            title: "Pénztár",
            body: "Vasúti pénztár: H-V 03:00-22:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyvásárlás",
            body: "Belföldi jegyeladás és gépi menetjegykiadás."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Akadálymentesség",
            body: "Emelő mindig van az állomáson, akadálymentes WC található."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parkolás és kerékpár",
            body: "Parkoló található az állomás közelében, kerékpártároló az állomás területén."
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
            body: "8710 Balatonszentgyörgy, Vasút u. 9."
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
            body: "8710 Balatonszentgyörgy, Vasút u. 9."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Fahrkartenschalter: täglich 03:00-22:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticketkauf",
            body: "Inlandsfahrkartenverkauf und maschinelle Fahrkartenausgabe sind verfügbar."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Barrierefreiheit",
            body: "Ein Hublift ist jederzeit am Bahnhof verfügbar, außerdem gibt es ein barrierefreies WC."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parken und Fahrrad",
            body: "Parkplätze befinden sich in der Nähe des Bahnhofs, Fahrradabstellplätze auf dem Bahnhofsgelände."
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
      image: "balatonszentgyorgybelso.jpg",
      source: "terkep_balatonszentgyorgy_v2422.pdf",
      hu: {
        title: "Állomástérkép",
        text: "A MÁV hivatalos áttekintő térképe Balatonszentgyörgy állomásáról. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Official MÁV overview map of Balatonszentgyörgy station. On mobile, swipe sideways to view the full map."
      },
      de: {
        title: "Bahnhofsplan",
        text: "Offizieller MÁV-Übersichtsplan des Bahnhofs Balatonszentgyörgy. Auf dem Handy kann der Plan seitlich verschoben werden."
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
      },
      de: {
        title: "Nützliche Informationen zum Bahnhof",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "Adresse",
            body: "8621 Zamárdi, Szabadság tér 1."
          },
          {
            icon: "bi-cash-coin",
            title: "Fahrkartenschalter",
            body: "Bahnschalter: täglich 03:30-23:30."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Fahrkartenkauf",
            body: "Inlandsfahrkarten, maschinelle Fahrkartenausgabe und Fahrkartenautomat."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Barrierefreiheit",
            body: "Am Bahnhof steht ein barrierefreies WC zur Verfügung."
          },
          {
            icon: "bi-info-circle",
            title: "Weitere Informationen",
            body: "Fundsachen-Service, Parkplätze und Fahrradabstellplätze sind verfügbar."
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
      image: "zamardibelso.jpg",
      source: "terkep_zamardi_v2421.pdf",
      hu: {
        title: "Állomástérkép",
        text: "Zamárdi állomás áttekintő térképe. Telefonon oldalirányban görgethető."
      },
      en: {
        title: "Station Map",
        text: "Overview map of Zamárdi station. On mobile, swipe sideways to view the full map."
      },
      de: {
        title: "Bahnhofsplan",
        text: "Übersichtsplan des Bahnhofs Zamárdi. Auf dem Handy kann der Plan seitlich verschoben werden."
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
  },

  tab: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos inform\u00e1ci\u00f3k az \u00e1llom\u00e1sr\u00f3l",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "C\u00edm",
            body: "Vas\u00fat\u00e1llom\u00e1s: 8660 Tab, Kossuth Lajos utca 1.<br>Aut\u00f3busz-\u00e1llom\u00e1s: 8660 Tab, Kossuth Lajos utca 2."
          },
          {
            icon: "bi-cash-coin",
            title: "P\u00e9nzt\u00e1r",
            body: "A vas\u00fat\u00e1llom\u00e1s jegyp\u00e9nzt\u00e1r n\u00e9lk\u00fcl m\u0171k\u00f6dik. Az aut\u00f3busz-\u00e1llom\u00e1si p\u00e9nzt\u00e1r 2026. janu\u00e1r 1-t\u0151l hat\u00e1rozatlan ideig z\u00e1rva tart."
          },
          {
            icon: "bi-megaphone",
            title: "Utast\u00e1j\u00e9koztat\u00e1s",
            body: "Az \u00e1llom\u00e1son hangos utast\u00e1j\u00e9koztat\u00e1s \u00e9rhet\u0151 el."
          },
          {
            icon: "bi-clock",
            title: "V\u00e1r\u00f3terem \u00e9s mosd\u00f3",
            body: "Aut\u00f3busz-\u00e1llom\u00e1si v\u00e1r\u00f3terem: H-P 05:45-22:15, h\u00e9tv\u00e9g\u00e9n/\u00fcnnepnap 05:45-20:00.<br>Mosd\u00f3: mindennap 06:00-19:00."
          },
          {
            icon: "bi-telephone",
            title: "M\u00c1VDIREKT",
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
            body: "Railway station: 8660 Tab, Kossuth Lajos utca 1.<br>Bus station: 8660 Tab, Kossuth Lajos utca 2."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "The railway station operates without a ticket office. The bus-station ticket office is closed from 1 January 2026 until further notice."
          },
          {
            icon: "bi-megaphone",
            title: "Passenger Information",
            body: "Audible passenger information is available at the station."
          },
          {
            icon: "bi-clock",
            title: "Waiting Room and Restrooms",
            body: "Bus-station waiting room: Mon-Fri 05:45-22:15, weekends/holidays 05:45-20:00.<br>Restrooms: daily 06:00-19:00."
          },
          {
            icon: "bi-telephone",
            title: "M\u00c1VDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      }
    }
  },

  szigetvar: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos inform\u00e1ci\u00f3k az \u00e1llom\u00e1sr\u00f3l",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "C\u00edm",
            body: "Vas\u00fat\u00e1llom\u00e1s: 7900 Szigetv\u00e1r, R\u00e1k\u00f3czi u. 35.<br>Aut\u00f3busz-\u00e1llom\u00e1s: 7900 Szigetv\u00e1r, Istv\u00e1nffy Mikl\u00f3s utca 28."
          },
          {
            icon: "bi-cash-coin",
            title: "P\u00e9nzt\u00e1r",
            body: "A vas\u00fat\u00e1llom\u00e1son a belf\u00f6ldi szem\u00e9lyp\u00e9nzt\u00e1r 2024.10.31-t\u0151l tov\u00e1bbi int\u00e9zked\u00e9sig z\u00e1rva tart.<br>Aut\u00f3busz-\u00e1llom\u00e1si p\u00e9nzt\u00e1r: munkanapokon 05:45-07:45 \u00e9s 12:00-13:00."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyv\u00e1s\u00e1rl\u00e1s",
            body: "Belf\u00f6ldi jegyelad\u00e1s, g\u00e9pi menetjegykiad\u00e1s \u00e9s jegykiad\u00f3 automata \u00e9rhet\u0151 el."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Akad\u00e1lymentess\u00e9g",
            body: "Az \u00e1llom\u00e1son hangos utast\u00e1j\u00e9koztat\u00e1s \u00e9rhet\u0151 el."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parkol\u00e1s \u00e9s ker\u00e9kp\u00e1r",
            body: "Parkol\u00f3 tal\u00e1lhat\u00f3 az \u00e1llom\u00e1s k\u00f6zel\u00e9ben, ker\u00e9kp\u00e1rt\u00e1rol\u00f3 az \u00e1llom\u00e1s ter\u00fclet\u00e9n."
          },
          {
            icon: "bi-telephone",
            title: "M\u00c1VDIREKT",
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
            body: "Railway station: 7900 Szigetv\u00e1r, R\u00e1k\u00f3czi u. 35.<br>Bus station: 7900 Szigetv\u00e1r, Istv\u00e1nffy Mikl\u00f3s utca 28."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "The domestic railway ticket office has been closed from 31 October 2024 until further notice.<br>Bus-station ticket office: weekdays 05:45-07:45 and 12:00-13:00."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Domestic ticket sales, machine-issued tickets and a ticket vending machine are available."
          },
          {
            icon: "bi-person-wheelchair",
            title: "Accessibility",
            body: "Audible passenger information is available at the station."
          },
          {
            icon: "bi-car-front-fill",
            title: "Parking and Bicycle",
            body: "Parking is available near the station, and bicycle parking is available on the station grounds."
          },
          {
            icon: "bi-telephone",
            title: "M\u00c1VDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      }
    }
  },

  osztopan: {
    smartNearby: true,
    info: {
      hu: {
        title: "Hasznos inform\u00e1ci\u00f3k az \u00e1llom\u00e1sr\u00f3l",
        cards: [
          {
            icon: "bi-geo-alt-fill",
            title: "C\u00edm",
            body: "7444 Osztop\u00e1n, vas\u00fat\u00e1llom\u00e1s."
          },
          {
            icon: "bi-cash-coin",
            title: "P\u00e9nzt\u00e1r",
            body: "A M\u00c1V \u00e1llom\u00e1soldal helyi p\u00e9nzt\u00e1ri nyitvatart\u00e1st nem t\u00fcntet fel."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Jegyv\u00e1s\u00e1rl\u00e1s",
            body: "Jegyv\u00e1s\u00e1rl\u00e1shoz haszn\u00e1ld a M\u00c1V appot, az online jegyv\u00e1s\u00e1rl\u00e1st vagy a M\u00c1V hivatalos t\u00e1j\u00e9koztat\u00e1s\u00e1t."
          },
          {
            icon: "bi-telephone",
            title: "M\u00c1VDIREKT",
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
            body: "7444 Osztop\u00e1n, railway station."
          },
          {
            icon: "bi-cash-coin",
            title: "Ticket Office",
            body: "The M\u00c1V station page does not list local ticket-office opening hours."
          },
          {
            icon: "bi-ticket-perforated",
            title: "Ticket Purchase",
            body: "Use the M\u00c1V app, online ticket purchase or official M\u00c1V information for ticket purchase."
          },
          {
            icon: "bi-telephone",
            title: "M\u00c1VDIREKT",
            body: "+36 (1) 3 49 49 49<br>Mobile: +36 (20/30/70) 499 4999"
          }
        ]
      }
    }
  }
};
