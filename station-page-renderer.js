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

(function () {
  const extras = window.stationPageExtras || {};
  const stationKey = document.body ? document.body.dataset.stationKey : "";
  const station = extras[stationKey];

  if (!station) {
    return;
  }

  const isEnglish = document.documentElement.lang === "en" || window.location.pathname.endsWith("-en.html");
  const lang = isEnglish ? "en" : "hu";

  function createSection(className, title) {
    const section = document.createElement("section");
    section.className = `container my-5 ${className}`.trim();

    const heading = document.createElement("h2");
    heading.className = "text-center mb-4";
    heading.textContent = title;
    section.appendChild(heading);

    return section;
  }

  function renderInfo(info) {
    const localized = info[lang] || info.hu || info.en;
    if (!localized || !Array.isArray(localized.cards)) {
      return null;
    }

    const section = createSection("station-info-section", localized.title);
    const grid = document.createElement("div");
    grid.className = "station-info";

    localized.cards.forEach((card) => {
      const item = document.createElement("div");
      item.className = "info-item";

      const icon = document.createElement("i");
      icon.className = `bi ${card.icon || "bi-info-circle"}`;

      const content = document.createElement("div");
      const title = document.createElement("h6");
      title.textContent = card.title;

      const body = document.createElement("p");
      body.innerHTML = card.body;

      content.appendChild(title);
      content.appendChild(body);
      item.appendChild(icon);
      item.appendChild(content);
      grid.appendChild(item);
    });

    section.appendChild(grid);
    return section;
  }

  function renderSmartNearby() {
    if (document.getElementById("smartNearbyMap")) {
      return null;
    }

    const copy = {
      hu: {
        title: "Interaktív közeli helyek térkép",
        intro: "Válassz fő kategóriát, azon belül alkategóriát, majd egy konkrét helyet. A térképen csak a kiválasztott hely jelenik meg, és külön gombbal kérhetsz gyalogos útvonalat az állomástól.",
        category: "Fő kategória",
        categoryPlaceholder: "Válassz kategóriát",
        subcategory: "Alkategória",
        subcategoryPlaceholder: "Először kategóriát válassz",
        place: "Konkrét hely",
        placePlaceholder: "Először alkategóriát válassz",
        route: "útvonal kérése az állomástól",
        reset: "Visszaállítás",
        status: "Válassz egy kategóriát a közeli helyek betöltéséhez.",
        loading: "Helyek betöltése..."
      },
      en: {
        title: "Interactive Nearby Places Map",
        intro: "Choose a main category, then a subcategory and a specific place. Only the selected place is shown on the map, and you can request a walking route from the station.",
        category: "Main Category",
        categoryPlaceholder: "Choose category",
        subcategory: "Subcategory",
        subcategoryPlaceholder: "Choose category first",
        place: "Specific Place",
        placePlaceholder: "Choose subcategory first",
        route: "route from the station",
        reset: "Reset",
        status: "Choose a category to load nearby places.",
        loading: "Loading places..."
      }
    };

    const text = copy[lang] || copy.hu;
    const section = document.createElement("section");
    section.className = "container my-5";
    section.innerHTML = `
      <div class="smart-nearby-section">
        <div class="smart-nearby-header text-center">
          <h2 class="mb-3">${text.title}</h2>
          <p class="smart-nearby-intro">${text.intro}</p>
        </div>

        <div class="smart-nearby-controls">
          <div class="smart-control-card">
            <label for="smartCategorySelect" class="form-label">${text.category}</label>
            <select id="smartCategorySelect" class="form-select">
              <option value="">${text.categoryPlaceholder}</option>
            </select>
          </div>

          <div class="smart-control-card">
            <label for="smartSubcategorySelect" class="form-label">${text.subcategory}</label>
            <select id="smartSubcategorySelect" class="form-select" disabled>
              <option value="">${text.subcategoryPlaceholder}</option>
            </select>
          </div>

          <div class="smart-control-card smart-control-card-wide">
            <label for="smartPlaceSelect" class="form-label">${text.place}</label>
            <select id="smartPlaceSelect" class="form-select" disabled>
              <option value="">${text.placePlaceholder}</option>
            </select>
          </div>
        </div>

        <div class="smart-nearby-actions">
          <button id="smartRouteButton" type="button" class="btn btn-primary" disabled>
            <i class="bi bi-sign-turn-right-fill me-2"></i>${text.route}
          </button>
          <button id="smartResetButton" type="button" class="btn btn-outline-secondary">
            <i class="bi bi-arrow-counterclockwise me-2"></i>${text.reset}
          </button>
        </div>

        <div id="smartNearbyStatus" class="smart-nearby-status" aria-live="polite">
          ${text.status}
        </div>
        <div id="smartNearbySummary" class="smart-nearby-summary d-none"></div>
        <div class="smart-nearby-map-shell">
          <div id="smartNearbyMap"></div>
          <div id="smartNearbyLoading" class="smart-nearby-loading d-none">
            <div class="spinner"></div>
            <div class="loading-text">${text.loading}</div>
          </div>
        </div>
        <div id="smartNearbyRouteInfo" class="route-info hidden"></div>
      </div>
    `;

    return section;
  }

  function renderMap(map) {
    const localized = map[lang] || map.hu || map.en;
    if (!localized || !map.image) {
      return null;
    }

    const section = document.createElement("section");
    section.className = "container my-5";

    const wrapper = document.createElement("div");
    wrapper.className = "station-inner-map-section";

    const heading = document.createElement("h2");
    heading.className = "text-center mb-3";
    heading.textContent = localized.title;

    const intro = document.createElement("p");
    intro.className = "station-inner-map-text text-center";
    intro.textContent = localized.text;

    const scroller = document.createElement("div");
    scroller.className = "station-inner-map-scroll";

    const image = document.createElement("img");
    image.className = "station-inner-map-img";
    image.src = map.image;
    image.alt = localized.title;
    image.loading = "eager";
    image.draggable = false;
    scroller.appendChild(image);

    wrapper.appendChild(heading);
    wrapper.appendChild(intro);
    wrapper.appendChild(scroller);

    section.appendChild(wrapper);
    return section;
  }

  function findInsertBeforeTarget() {
    const explicitMount = document.getElementById("stationExtrasMount");
    if (explicitMount) {
      return explicitMount;
    }

    // Megkeressük a MÁV logó szekcióját az oldal alján, hogy közvetlenül az elé fűzhessünk le mindent
    const mavLogo = document.querySelector("img[src='mavlogo.png']");
    if (mavLogo) {
      return mavLogo.closest("div.text-center") || mavLogo;
    }

    const smartMap = document.getElementById("smartNearbyMap");
    return smartMap ? smartMap.closest("section.container") : null;
  }

  function render() {
    const target = findInsertBeforeTarget();
    if (!target || !target.parentNode) {
      return;
    }

    // Megkeressük az interaktív térképet a HTML-ben, hogy a Hasznos infókat fixen fölé rakjuk
    const smartMap = document.getElementById("smartNearbyMap");
    const smartSection = smartMap ? smartMap.closest("section.container") : null;

    if (station.info && !document.querySelector(".station-info")) {
      const infoSection = renderInfo(station.info);
      if (infoSection && smartSection && smartSection.parentNode) {
        // Ha megvan az interaktív térkép szekciója, közvetlenül FÖLÉ rakjuk
        smartSection.parentNode.insertBefore(infoSection, smartSection);
      } else if (infoSection) {
        target.parentNode.insertBefore(infoSection, target);
      }
    }

    if (station.smartNearby) {
      const smartSectionGenerated = renderSmartNearby();
      if (smartSectionGenerated) {
        target.parentNode.insertBefore(smartSectionGenerated, target);
      }
    }

    if (station.map && !document.querySelector(".station-inner-map-section")) {
      const mapSection = renderMap(station.map);
      if (mapSection) {
        // A belső állomástérképet a MÁV logó ELÉ (azaz az interaktív térkép ALÁ) szúrjuk be
        target.parentNode.insertBefore(mapSection, target);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();

window.stationSmartConfigs = {
  kaposvar: {
    key: "kaposvar",
    cityName: {
      hu: "Kaposvár",
      en: "Kaposvár"
    },
    stationName: {
      hu: "Kaposvár vasútállomás",
      en: "Kaposvár railway station"
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
          en: "Click the image to view the current movie schedule:"
        },
        url: "https://kaposvarimozi.hu/",
        image: "kultik_logo.png",
        alt: "Kultik Mozi"
      },
      {
        matches: ["csiky gerge"],
        text: {
          hu: "A képre kattintva megtekintheti az aktuális színházműsort:",
          en: "Click the image to view the current theater program:"
        },
        url: "https://www.csiky.hu/musor/",
        image: "csikygergelyszinhaz_logo.png",
        alt: "Csiky Gergely Színház"
      },
      {
        matches: ["roxínház", "roxinhaz"],
        text: {
          hu: "A képre kattintva megtekintheti az aktuális műsort és jegyeket:",
          en: "Click the image to view the current program and tickets:"
        },
        url: "https://roxinhaz.hu/jegyek-musor/",
        image: "roxinhaz_logo.png",
        alt: "Roxínház"
      }
    ]
  },

  pecs: {
    key: "pecs",
    cityName: {
      hu: "Pécs",
      en: "Pécs"
    },
    stationName: {
      hu: "Pécs vasútállomás",
      en: "Pécs railway station"
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
        matches: ["cinema city"],
        text: {
          hu: "Az aktuális moziműsort itt tudod megnézni:",
          en: "You can view the current movie schedule here:"
        },
        url: "https://www.cinemacity.hu/",
        label: {
          hu: "Cinema City műsor",
          en: "Cinema City schedule"
        }
      },
      {
        matches: ["pécsi nemzeti", "nemzeti színház"],
        text: {
          hu: "Az aktuális színházműsort itt tudod megnézni:",
          en: "You can view the current theater program here:"
        },
        url: "https://www.pnsz.hu/",
        label: {
          hu: "Pécsi Nemzeti Színház",
          en: "Pécs National Theatre"
        }
      }
    ]
  },

  dombovar: {
    key: "dombovar",
    cityName: {
      hu: "Dombóvár",
      en: "Dombóvár"
    },
    stationName: {
      hu: "Dombóvár vasútállomás",
      en: "Dombóvár railway station"
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
      en: "Siófok"
    },
    stationName: {
      hu: "Siófok vasútállomás",
      en: "Siófok railway station"
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
      en: "Balatonlelle"
    },
    stationName: {
      hu: "Balatonlelle vasútállomás",
      en: "Balatonlelle railway station"
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

  balatonboglar: {
    key: "balatonboglar",
    cityName: {
      hu: "Balatonboglár",
      en: "Balatonboglár"
    },
    stationName: {
      hu: "Balatonboglár vasútállomás",
      en: "Balatonboglár railway station"
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

  balatonszemes: {
    key: "balatonszemes",
    cityName: {
      hu: "Balatonszemes",
      en: "Balatonszemes"
    },
    stationName: {
      hu: "Balatonszemes vasútállomás",
      en: "Balatonszemes railway station"
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

  barcs: {
    key: "barcs",
    cityName: {
      hu: "Barcs",
      en: "Barcs"
    },
    stationName: {
      hu: "Barcs vasútállomás",
      en: "Barcs railway station"
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
      en: "Fonyód"
    },
    stationName: {
      hu: "Fonyód vasútállomás",
      en: "Fonyód railway station"
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
      en: "Mohács"
    },
    stationName: {
      hu: "Mohács vasútállomás",
      en: "Mohács railway station"
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
      en: "Szekszárd"
    },
    stationName: {
      hu: "Szekszárd vasútállomás",
      en: "Szekszárd railway station"
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
  }
};