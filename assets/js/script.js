document.addEventListener("DOMContentLoaded", async function () {
  initHomeStationMenu();
  initAudioPlayer();
  initWeatherCards();
  initSmartNearbyExplorer();
  initPecsGoogleMenu();
});

function getPageLang() {
  const lang = (document.documentElement.getAttribute("lang") || "hu").substring(0, 2);
  return ["hu", "en", "de"].includes(lang) ? lang : "hu";
}

function initHomeStationMenu() {
  const stationSearch = document.getElementById("stationSearch");
  const searchableItems = Array.from(document.querySelectorAll("[data-name]"));

  if (!stationSearch || searchableItems.length === 0) return;

  stationSearch.addEventListener("input", () => {
    const query = stationSearch.value.trim().toLowerCase();

    searchableItems.forEach((item) => {
      const text = `${item.dataset.name || ""} ${item.textContent || ""}`.toLowerCase();
      item.classList.toggle("is-hidden", query !== "" && !text.includes(query));
    });
  });
}

function initAudioPlayer() {
  const audio = document.getElementById("hang");
  const playPauseButton = document.getElementById("playPauseButton");
  const restartButton = document.getElementById("restartButton");

  if (!audio || !playPauseButton || !restartButton) return;

  const audioSource = audio.querySelector("source[src]");
  if (!audioSource || !audioSource.getAttribute("src")) {
    playPauseButton.style.display = "none";
    restartButton.style.display = "none";
    return;
  }

  const lang = getPageLang();
  const texts = {
    hu: { play: "Lejátszás", pause: "Szünet", restart: "Újrakezdés" },
    en: { play: "Listen", pause: "Pause", restart: "Restart" },
    de: { play: "Anhören", pause: "Pause", restart: "Neu starten" }
  };

  let isPlaying = false;
  let startedOnce = false;

  playPauseButton.addEventListener("click", function () {
    if (!isPlaying) {
      audio.play();
      playPauseButton.innerHTML = `<i class="bi bi-pause-fill me-2"></i> ${texts[lang].pause}`;
      if (!startedOnce) {
        startedOnce = true;
        restartButton.style.display = "inline-block";
        restartButton.innerHTML = texts[lang].restart;
      }
    } else {
      audio.pause();
      playPauseButton.innerHTML = `<i class="bi bi-volume-up-fill me-2"></i> ${texts[lang].play}`;
    }
    isPlaying = !isPlaying;
  });

  restartButton.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
    playPauseButton.innerHTML = `<i class="bi bi-pause-fill me-2"></i> ${texts[lang].pause}`;
  });

  audio.addEventListener("ended", function () {
    isPlaying = false;
    playPauseButton.innerHTML = `<i class="bi bi-volume-up-fill me-2"></i> ${texts[lang].play}`;
  });

  audio.load();
}

function initWeatherCards() {
  const lang = getPageLang();
  const weatherTexts = {
    hu: {
      now: "Most",
      wind: "Szélsebesség",
      dry: "🌞 Száraz nap, nem várható eső!",
      lightRain: "🌦️ Gyenge csapadék várható",
      heavyRain: "🌧️ Jelentős csapadék várható",
      unavailable: "Nem elérhető az időjárás."
    },
    en: {
      now: "Now",
      wind: "Wind speed",
      dry: "🌞 Dry day, no rain expected!",
      lightRain: "🌦️ Light rain expected",
      heavyRain: "🌧️ Significant rain expected",
      unavailable: "Weather data unavailable."
    },
    de: {
      now: "Aktuell",
      wind: "Windgeschwindigkeit",
      dry: "🌞 Trockener Tag, kein Regen erwartet!",
      lightRain: "🌦️ Leichter Regen erwartet",
      heavyRain: "🌧️ Deutlicher Regen erwartet",
      unavailable: "Wetterdaten sind nicht verfügbar."
    }
  };
  const weatherCopy = weatherTexts[lang] || weatherTexts.hu;

  const varosok = [
    { id: "idojaras-villany", nev: "Villány", lat: 45.8705, lon: 18.4543 },
    { id: "idojaras-abaliget", nev: "Abaliget", lat: 46.1272, lon: 18.0946 },
    { id: "idojaras-adand", nev: "Ádánd", lat: 46.3920, lon: 17.7050 },
    { id: "idojaras-ata", nev: "Áta", lat: 45.9766, lon: 18.3703 },
    { id: "idojaras-balatonaliga", nev: "Balatonaliga", lat: 46.9830, lon: 18.1670 },
    { id: "idojaras-balatonboglar", nev: "Balatonboglár", lat: 46.7781, lon: 17.6597 },
    { id: "idojaras-balatonbereny", nev: "Balatonberény", lat: 46.707, lon: 17.320 },
    { id: "idojaras-balatonfenyves", nev: "Balatonfenyves", lat: 46.7196, lon: 17.5360 },
    { id: "idojaras-balatonfoldvar", nev: "Balatonföldvár", lat: 46.853281, lon: 17.879889 },
    { id: "idojaras-balatonlelle", nev: "Balatonlelle", lat: 46.7830, lon: 17.6876 },
    { id: "idojaras-balatonmariafurdo", nev: "Balatonmáriafürdő", lat: 46.70424, lon: 17.40128 },
    { id: "idojaras-balatonszarszo", nev: "Balatonszárszó", lat: 46.8295, lon: 17.8351 },
    { id: "idojaras-balatonszemes", nev: "Balatonszemes", lat: 46.8167, lon: 17.6667 },
    { id: "idojaras-balatonszentgyorgy", nev: "Balatonszentgyörgy", lat: 46.6991, lon: 17.4825 },
    { id: "idojaras-barcs", nev: "Barcs", lat: 45.9514, lon: 17.4460 },
    { id: "idojaras-bataszek", nev: "Bátaszék", lat: 46.2010, lon: 18.7142 },
    { id: "idojaras-dombovar", nev: "Dombóvár", lat: 46.3500, lon: 18.1500 },
    { id: "idojaras-erd", nev: "Érd", lat: 47.3870, lon: 18.9051 },
    { id: "idojaras-fonyod", nev: "Fonyód", lat: 46.7425, lon: 17.5619 },
    { id: "idojaras-gyekenyes", nev: "Gyékényes", lat: 46.242159, lon: 16.983306 },
    { id: "idojaras-keszohidegkutgyonk", nev: "Keszőhidegkút-Gyönk", lat: 46.5006, lon: 18.4831 },
    { id: "idojaras-kaposvar", nev: "Kaposvár", lat: 46.3590, lon: 17.7960 },
    { id: "idojaras-lengyeltoti", nev: "Lengyeltóti", lat: 46.7000, lon: 17.6389 },
    { id: "idojaras-lepseny", nev: "Lepsény", lat: 46.987239371019356, lon: 18.24466141135151 },
    { id: "idojaras-mohacs", nev: "Mohács", lat: 45.9959, lon: 18.6798 },
    { id: "idojaras-osztopan", nev: "Osztopán", lat: 46.4832, lon: 17.8879 },
    { id: "idojaras-ocseny", nev: "Őcsény", lat: 46.31776, lon: 18.74559 },
    { id: "idojaras-pecs", nev: "Pécs", lat: 46.0727, lon: 18.2323 },
    { id: "idojaras-pincehely", nev: "Pincehely", lat: 46.5422, lon: 18.4053 },
    { id: "idojaras-pusztaszabolcs", nev: "Pusztaszabolcs", lat: 47.13718, lon: 18.76704 },
    { id: "idojaras-sarbogard", nev: "Sárbogárd", lat: 46.8773, lon: 18.6305 },
    { id: "idojaras-sellye", nev: "Sellye", lat: 45.8472, lon: 17.6867 },
    { id: "idojaras-simontornya", nev: "Simontornya", lat: 46.75640316829538, lon: 18.53940674705689 },
    { id: "idojaras-siofok", nev: "Siófok", lat: 46.9081, lon: 18.0510 },
    { id: "idojaras-somogyszob", nev: "Somogyszob", lat: 46.2310, lon: 17.2650 },
    { id: "idojaras-szabadisosto", nev: "Szabadisóstó", lat: 46.9207, lon: 18.1204 },
    { id: "idojaras-szantod", nev: "Szántód", lat: 46.860639, lon: 17.902411 },
    { id: "idojaras-szazhalombatta", nev: "Százhalombatta", lat: 47.3264, lon: 18.9122 },
    { id: "idojaras-szekszard", nev: "Szekszárd", lat: 46.3558, lon: 18.7039 },
    { id: "idojaras-szentlorinc", nev: "Szentlőrinc", lat: 46.0464, lon: 17.9857 },
    { id: "idojaras-szigetvar", nev: "Szigetvár", lat: 46.1303, lon: 17.8157 },
    { id: "idojaras-tab", nev: "Tab", lat: 46.7372, lon: 17.5472 },
    { id: "idojaras-zamardi", nev: "Zamárdi", lat: 46.88434, lon: 17.95051 }
  ];

  varosok.forEach(varos => {
    const box = document.getElementById(varos.id);
    if (!box) return;

    const body = box.querySelector(".card-body");
    if (!body) return;

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${varos.lat}&longitude=${varos.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBudapest`)
      .then(response => response.json())
      .then(data => {
        const weather = data.current_weather;
        const daily = data.daily;

        if (!weather || !daily) {
          throw new Error("Hiányos időjárás adat");
        }

        const homersekletP = document.createElement("p");
        homersekletP.className = "homerseklet";
        homersekletP.textContent = `${weatherCopy.now}: ${weather.temperature} °C | Max: ${daily.temperature_2m_max[0]} °C | Min: ${daily.temperature_2m_min[0]} °C`;
        body.appendChild(homersekletP);

        const szelP = document.createElement("p");
        szelP.className = "szel";
        szelP.textContent = `${weatherCopy.wind}: ${weather.windspeed} km/h`;
        body.appendChild(szelP);

        const csapadek = daily.precipitation_sum[0];
        const csapadekP = document.createElement("p");
        csapadekP.className = "csapadek";

        if (csapadek === 0) {
          csapadekP.textContent = weatherCopy.dry;
        } else if (csapadek < 2) {
          csapadekP.textContent = `${weatherCopy.lightRain}: ${csapadek} mm`;
        } else {
          csapadekP.textContent = `${weatherCopy.heavyRain}: ${csapadek} mm`;
        }

        body.appendChild(csapadekP);
      })
      .catch(error => {
        const errorP = document.createElement("p");
        errorP.textContent = weatherCopy.unavailable;
        body.appendChild(errorP);
        console.error(`${varos.nev} időjárási hiba:`, error);
      });
  });
}

function getSmartNearbyPageConfig(lang) {
  const configs = window.stationSmartConfigs || {};
  const bodyKey = document.body?.dataset?.stationKey;
  const fileName = window.location.pathname.split("/").pop() || "";
  const pageKey = fileName
    .replace(/\.(html|htm)$/i, "")
    .replace(/-(en|de)$/i, "");
  const aliases = {
    lorinc: "szentlorinc"
  };
  const key = bodyKey || aliases[pageKey] || pageKey;
  const config = configs[key];

  if (!config || !config.station) return null;

  return {
    ...config,
    key: config.key || key,
    activeLang: lang
  };
}

function initSmartNearbyExplorer() {
  const mapElement = document.getElementById("smartNearbyMap");
  const categorySelect = document.getElementById("smartCategorySelect");
  const subcategorySelect = document.getElementById("smartSubcategorySelect");
  const placeSelect = document.getElementById("smartPlaceSelect");
  const routeButton = document.getElementById("smartRouteButton");
  const resetButton = document.getElementById("smartResetButton");
  const statusBox = document.getElementById("smartNearbyStatus");
  const summaryBox = document.getElementById("smartNearbySummary");
  const routeInfo = document.getElementById("smartNearbyRouteInfo");
  const loadingBox = document.getElementById("smartNearbyLoading");

  if (!mapElement || typeof L === "undefined") return;

  if (!categorySelect || !subcategorySelect || !placeSelect || !routeButton || !resetButton || !statusBox || !summaryBox || !routeInfo || !loadingBox) {
    console.warn("Smart nearby map controls are missing from this page.");
    return;
  }

  const lang = getPageLang();
  const pageConfig = getSmartNearbyPageConfig(lang);
  if (!pageConfig) return;

  const station = {
    name: pageConfig.stationName?.[lang] || pageConfig.stationName?.hu || pageConfig.stationName || "Vasútállomás",
    lat: pageConfig.station.lat,
    lon: pageConfig.station.lon
  };
  const cityName = pageConfig.cityName?.[lang] || pageConfig.cityName?.hu || pageConfig.cityName || "";
  const radius = pageConfig.radius || 3500;
  const cacheTtlMs = 1000 * 60 * 15;
  const cachePrefix = `${pageConfig.key || cityName || "station"}-smart-nearby-v27`;
  
  let selectedPlace = null;
  let routeLayer = null;
  let destinationMarker = null;
  let allMarkersLayer = L.layerGroup(); 
  let placesLoadRequestId = 0;
  let routeLoadRequestId = 0;

  const messages = {
    hu: {
      chooseCategory: "Válassz egy kategóriát a közeli helyek betöltéséhez.",
      chooseSubcategory: "Most válassz egy alkategóriát.",
      loadingPlaces: "Helyek betöltése...",
      cachedPlaces: "A helyek cache-ből töltődtek be.",
      placesLoaded: "A helyek betöltődtek. Most válassz egy konkrét helyet.",
      noResults: "Ebben az alkategóriában most nem találtam találatot a körzeten belül.",
      unavailableSubcategory: "Ez az alkategória ennél a településnél nem található.",
      fetchError: "A helyek betöltése most nem sikerült. Próbáld meg újra pár perc múlva.",
      routeLoading: "Útvonal tervezése...",
      routeError: "A gyalogos útvonal most nem jött vissza a szolgáltatótól.",
      selectPlaceFirst: "Először válassz egy konkrét helyet.",
      categoryPlaceholder: "Válassz kategóriát",
      subcategoryPlaceholder: "Válassz alkategóriát",
      placePlaceholder: "Válassz konkrét helyet",
      notFoundPlaceholder: "Nem található",
      firstChooseCategory: "Először kategóriát válassz",
      firstChooseSubcategory: "Először alkategóriát válassz",
      routeTo: "Útvonal ide:",
      directDistance: "Légvonalban",
      walkingDistance: "Gyalogos útvonal",
      walkingTime: "Sétaidő",
      resetDone: "A térkép visszaállt alapállapotba.",
      selectedPlace: "Kiválasztott hely:",
      resultsCount: "Találatok száma",
      usingFallback: "Tartalék keresésből jöttek a találatok.",
      loading: "Betöltés..."
    },
    en: {
      chooseCategory: "Choose a category to load nearby places.",
      chooseSubcategory: "Now choose a subcategory.",
      loadingPlaces: "Loading places...",
      cachedPlaces: "Places loaded from cache.",
      placesLoaded: "Places loaded. Now choose a specific place.",
      noResults: "No results found in this subcategory within the radius.",
      unavailableSubcategory: "This subcategory is not available for this settlement.",
      fetchError: "Loading places failed. Please try again in a few minutes.",
      routeLoading: "Planning route...",
      routeError: "Walking route could not be returned by the service.",
      selectPlaceFirst: "Choose a specific place first.",
      categoryPlaceholder: "Choose category",
      subcategoryPlaceholder: "Choose subcategory",
      placePlaceholder: "Choose place",
      notFoundPlaceholder: "Not found",
      firstChooseCategory: "Choose category first",
      firstChooseSubcategory: "Choose subcategory first",
      routeTo: "Route to:",
      directDistance: "Air distance",
      walkingDistance: "Walking route",
      walkingTime: "Walking time",
      resetDone: "Map has been reset.",
      selectedPlace: "Selected place:",
      resultsCount: "Results count",
      usingFallback: "Results came from fallback search.",
      loading: "Loading..."
    },
    de: {
      chooseCategory: "Wähle eine Kategorie, um nahegelegene Orte zu laden.",
      chooseSubcategory: "Wähle jetzt eine Unterkategorie.",
      loadingPlaces: "Orte werden geladen...",
      cachedPlaces: "Orte wurden aus dem Cache geladen.",
      placesLoaded: "Orte wurden geladen. Wähle jetzt einen konkreten Ort.",
      noResults: "In dieser Unterkategorie wurden im Umkreis keine Treffer gefunden.",
      unavailableSubcategory: "Diese Unterkategorie ist für diesen Ort nicht verfügbar.",
      fetchError: "Die Orte konnten gerade nicht geladen werden. Bitte versuche es in ein paar Minuten erneut.",
      routeLoading: "Route wird geplant...",
      routeError: "Die Fußroute konnte vom Dienst nicht zurückgegeben werden.",
      selectPlaceFirst: "Wähle zuerst einen konkreten Ort.",
      categoryPlaceholder: "Kategorie wählen",
      subcategoryPlaceholder: "Unterkategorie wählen",
      placePlaceholder: "Ort wählen",
      notFoundPlaceholder: "Nicht gefunden",
      firstChooseCategory: "Zuerst Kategorie wählen",
      firstChooseSubcategory: "Zuerst Unterkategorie wählen",
      routeTo: "Route zu:",
      directDistance: "Luftlinie",
      walkingDistance: "Fußweg",
      walkingTime: "Gehzeit",
      resetDone: "Die Karte wurde zurückgesetzt.",
      selectedPlace: "Ausgewählter Ort:",
      resultsCount: "Trefferzahl",
      usingFallback: "Die Treffer stammen aus der Ersatzsuche.",
      loading: "Laden..."
    }
  };

  const labels = {
    hu: {
      categories: {
        school: "Iskolák",
        shops: "Boltot keresek",
        food: "Étkezés",
        entertainment: "Szórakozás",
        culture: "Kultúra"
      },
      subcategories: {
        school_all: "Összes iskola",
        university: "Egyetem / főiskola",
        secondary: "Középsuli / technikum",
        primary: "Általános iskola",
        grocery: "Élelmiszerbolt",
        mall: "Bevásárlóközpont / áruház",
        restaurant: "Étterem",
        cafe: "Kávézó / cukrászda",
        fastfood: "Gyorsétterem",
        pub: "Bár / pub",
        cinema: "Mozi",
        museum: "Múzeum / kiállítás",
        library: "Könyvtár",
        theatre: "Színház / művészet",
        bath: "Strand / fürdő",
      }
    },
    en: {
      categories: {
        school: "Schools",
        shops: "Shops",
        food: "Food",
        entertainment: "Entertainment",
        culture: "Culture"
      },
      subcategories: {
        school_all: "All schools",
        university: "University / college",
        secondary: "Secondary / vocational",
        primary: "Primary school",
        grocery: "Grocery store",
        mall: "Mall / department store",
        restaurant: "Restaurant",
        cafe: "Cafe / pastry shop",
        fastfood: "Fast food",
        pub: "Bar / pub",
        cinema: "Cinema",
        museum: "Museum / exhibition",
        library: "Library",
        theatre: "Theatre / arts",
        bath: "Beach / bath",
      }
    },
    de: {
      categories: {
        school: "Schulen",
        shops: "Geschäfte",
        food: "Essen",
        entertainment: "Freizeit",
        culture: "Kultur"
      },
      subcategories: {
        school_all: "Alle Schulen",
        university: "Universität / Hochschule",
        secondary: "Weiterführende Schule / Technikerschule",
        primary: "Grundschule",
        grocery: "Lebensmittelgeschäft",
        mall: "Einkaufszentrum / Kaufhaus",
        restaurant: "Restaurant",
        cafe: "Café / Konditorei",
        fastfood: "Fast Food",
        pub: "Bar / Pub",
        cinema: "Kino",
        museum: "Museum / Ausstellung",
        library: "Bibliothek",
        theatre: "Theater / Kunst",
        bath: "Strand / Bad",
      }
    }
  };

  const schoolSearchFilters = [
    { key: "amenity", values: ["school", "university", "college", "kindergarten", "music_school", "language_school"] },
    { key: "building", values: ["school", "university", "college"] },
    { key: "school", values: ["primary", "secondary", "vocational", "technical", "grammar", "music", "language"] }
  ];

  const config = {
    school: {
      subcategories: {
        school_all: {
          icon: "🏫",
          filters: schoolSearchFilters,
          matcher: place => hasName(place) && !isExcludedSchool(place) && isSchoolPlace(place)
        },
        university: {
          icon: "🎓",
          filters: [
            { key: "amenity", values: ["university", "college"] },
            { key: "building", values: ["university", "college"] }
          ],
          matcher: place => hasName(place)
        },
        secondary: {
          icon: "🏫",
          filters: schoolSearchFilters,
          matcher: place => hasName(place) && !isExcludedSchool(place) && isSchoolPlace(place) && isSecondarySchool(place)
        },
        primary: {
          icon: "🏫",
          filters: schoolSearchFilters,
          matcher: place => hasName(place) && !isExcludedSchool(place) && isSchoolPlace(place) && isPrimarySchool(place)
        }
      }
    },
    shops: {
      subcategories: {
        grocery: {
          icon: "\u{1F6D2}",
          filters: [
            { key: "shop", values: ["supermarket", "convenience", "grocery", "general", "kiosk", "deli", "farm", "greengrocer", "butcher", "bakery", "beverages"] },
            { key: "amenity", values: ["marketplace"] }
          ],
          matcher: place => isGroceryPlace(place)
        },
        mall: {
          icon: "🛍️",
          filters: [
            { key: "shop", values: ["mall", "department_store"] },
            { key: "building", values: ["retail", "commercial"] },
            { key: "landuse", values: ["retail"] }
          ],
          matcher: place => isShoppingCenterPlace(place)
        }
      }
    },
    food: {
      subcategories: {
        restaurant: {
          icon: "🍽️",
          filters: [{ key: "amenity", values: ["restaurant"] }],
          matcher: place => hasName(place)
        },
        cafe: {
          icon: "☕",
          filters: [
            { key: "amenity", values: ["cafe", "ice_cream"] },
            { key: "shop", values: ["pastry", "confectionery", "bakery"] }
          ],
          matcher: place => hasName(place)
        },
        fastfood: {
          icon: "🍔",
          filters: [{ key: "amenity", values: ["fast_food"] }],
          matcher: place => hasName(place)
        }
      }
    },
    entertainment: {
  subcategories: {
    bath: {
      icon: "🏊",
      filters: [
        { key: "leisure", values: ["beach_resort", "swimming_area", "water_park", "swimming_pool"] },
        { key: "amenity", values: ["public_bath"] },
        { key: "natural", values: ["beach"] }
      ],
      matcher: place => hasName(place) && isBathOrBeachPlace(place)
    },
    pub: {
      icon: "🍺",
      filters: [{ key: "amenity", values: ["pub", "bar", "biergarten"] }],
      matcher: place => hasName(place)
    },
    cinema: {
      icon: "🎬",
      filters: [
        { key: "amenity", values: ["cinema"] },
        { key: "building", values: ["cinema"] }
      ],
      matcher: place => hasName(place) && isCinemaPlace(place)
    }
  }
},
    culture: {
      subcategories: {
        museum: {
          icon: "🏛️",
          filters: [
            { key: "tourism", values: ["museum", "gallery", "attraction"] },
            { key: "amenity", values: ["arts_centre"] }
          ],
          matcher: place => hasName(place)
        },
        library: {
          icon: "📖",
          filters: [{ key: "amenity", values: ["library"] }],
          matcher: place => hasName(place)
        },
        theatre: {
          icon: "🎭",
          filters: [{ key: "amenity", values: ["theatre", "arts_centre"] }],
          matcher: place => hasName(place)
        }
      }
    }
  };

  const map = L.map("smartNearbyMap", { scrollWheelZoom: true }).setView([station.lat, station.lon], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  const stationIcon = L.divIcon({
    className: "station-smart-marker",
    html: "🚉",
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });

  const stationMarker = L.marker([station.lat, station.lon], { icon: stationIcon }).addTo(map);
  stationMarker.bindPopup(`<strong>${station.name}</strong>`);

  const radiusCircle = L.circle([station.lat, station.lon], {
    radius,
    color: "#1b447d",
    fillColor: "#1b447d",
    fillOpacity: 0.08,
    weight: 2
  }).addTo(map);

  allMarkersLayer.addTo(map);

  populateCategories();
  setStatus(messages[lang].chooseCategory, "default");

  categorySelect.addEventListener("change", () => {
    placesLoadRequestId++;
    routeLoadRequestId++;
    hideLoading();
    clearRoute();
    clearDestinationMarker();
    allMarkersLayer.clearLayers();
    selectedPlace = null;
    summaryBox.classList.add("d-none");
    routeButton.disabled = true;
    routeInfo.classList.add("hidden");
    routeInfo.innerHTML = "";
    populateSubcategories(categorySelect.value);
    resetPlaceSelect(messages[lang].firstChooseSubcategory);
    setStatus(categorySelect.value ? messages[lang].chooseSubcategory : messages[lang].chooseCategory, "default");
  });

  subcategorySelect.addEventListener("change", async () => {
    routeLoadRequestId++;
    clearRoute();
    clearDestinationMarker();
    allMarkersLayer.clearLayers();
    selectedPlace = null;
    summaryBox.classList.add("d-none");
    routeButton.disabled = true;
    routeInfo.classList.add("hidden");
    routeInfo.innerHTML = "";

    const categoryKey = categorySelect.value;
    const subcategoryKey = subcategorySelect.value;
    const requestId = ++placesLoadRequestId;
    hideLoading();

    if (!categoryKey || !subcategoryKey) {
      resetPlaceSelect(messages[lang].firstChooseSubcategory);
      return;
    }

    if (isSubcategoryUnavailable(categoryKey, subcategoryKey)) {
      populatePlaces([], messages[lang].notFoundPlaceholder);
      map.fitBounds(radiusCircle.getBounds(), { padding: [30, 30] });
      const subcategoryLabel = labels[lang].subcategories[subcategoryKey] || subcategoryKey;
      setStatus(`${subcategoryLabel}: ${messages[lang].unavailableSubcategory}`, "default");
      return;
    }

    showLoading(messages[lang].loadingPlaces);
    try {
      const result = await loadPlaces(categoryKey, subcategoryKey);
      if (requestId !== placesLoadRequestId) return;

      populatePlaces(result.places);

      result.places.forEach(place => {
        const safeIcon = sanitizePlaceIcon(place.icon, place.categoryKey, place.subcategoryKey);
        const markerIcon = L.divIcon({
          className: "destination-smart-marker",
          html: getMarkerIconHtml(safeIcon, place.categoryKey, place.subcategoryKey),
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });
        
        const m = L.marker([place.lat, place.lon], { icon: markerIcon });
        m.bindPopup(`<strong>${safeIcon} ${place.name}</strong>`);
        
        m.on('click', function() {
          for (let i = 0; i < placeSelect.options.length; i++) {
            const opt = placeSelect.options[i];
            if (opt.value) {
              const data = JSON.parse(opt.value);
              if (data.lat === place.lat && data.lon === place.lon) {
                placeSelect.selectedIndex = i;
                placeSelect.dispatchEvent(new Event('change'));
                break;
              }
            }
          }
        });

        allMarkersLayer.addLayer(m);
      });

      if (result.places.length > 0) {
        const group = new L.featureGroup(allMarkersLayer.getLayers().concat([stationMarker]));
        map.fitBounds(group.getBounds().pad(0.1));
      }

      if (result.places.length > 0) {
        let text = `${messages[lang].placesLoaded} ${messages[lang].resultsCount}: ${result.places.length}.`;
        setStatus(text, "success");
      } else {
        populatePlaces([], messages[lang].notFoundPlaceholder);
        map.fitBounds(radiusCircle.getBounds(), { padding: [30, 30] });
        setStatus(messages[lang].noResults, "default");
      }
    } catch (error) {
      if (requestId !== placesLoadRequestId) return;
      console.error(error);
      populatePlaces([], messages[lang].notFoundPlaceholder);
      setStatus(messages[lang].fetchError, "error");
    } finally {
      if (requestId === placesLoadRequestId) hideLoading();
    }
  });

  placeSelect.addEventListener("change", () => {
    routeLoadRequestId++;
    hideLoading();
    clearRoute();
    routeInfo.classList.add("hidden");
    routeInfo.innerHTML = "";

    if (!placeSelect.value) {
      selectedPlace = null;
      routeButton.disabled = true;
      clearDestinationMarker();
      summaryBox.classList.add("d-none");
      return;
    }

    try {
      selectedPlace = JSON.parse(placeSelect.value);
    } catch (error) {
      selectedPlace = null;
      routeButton.disabled = true;
      clearDestinationMarker();
      summaryBox.classList.add("d-none");
      setStatus(messages[lang].selectPlaceFirst, "default");
      return;
    }
    routeButton.disabled = false;
    showSelectedPlace(selectedPlace);
    setStatus(`${messages[lang].selectedPlace} ${selectedPlace.name}`, "success");
  });

  routeButton.addEventListener("click", async () => {
    if (!selectedPlace) return;
    const routeRequestId = ++routeLoadRequestId;
    const routePlace = selectedPlace;
    showLoading(messages[lang].routeLoading);
    try {
      const route = await fetchRouteWithRetry(routePlace);
      if (routeRequestId !== routeLoadRequestId || selectedPlace !== routePlace) return;
      drawRoute(route, routePlace);
      const km = (route.distance / 1000).toFixed(2);
      const minutes = Math.max(1, Math.round((route.distance / 1000) * 12));
      routeInfo.classList.remove("hidden");
      routeInfo.innerHTML = `
        ${messages[lang].routeTo} <strong>${routePlace.name}</strong><br>
        ${messages[lang].directDistance}: ${routePlace.distance} m<br>
        ${messages[lang].walkingDistance}: ~${km} km<br>
        ${messages[lang].walkingTime}: ~${minutes} ${lang === "hu" ? "perc" : lang === "de" ? "Min." : "min"}
      `;
    } catch (error) {
      if (routeRequestId === routeLoadRequestId) {
        console.error(error);
        setStatus(messages[lang].routeError, "error");
      }
    } finally {
      if (routeRequestId === routeLoadRequestId) hideLoading();
    }
  });

  resetButton.addEventListener("click", () => {
    placesLoadRequestId++;
    routeLoadRequestId++;
    hideLoading();
    categorySelect.value = "";
    subcategorySelect.innerHTML = `<option value="">${messages[lang].firstChooseCategory}</option>`;
    subcategorySelect.disabled = true;
    resetPlaceSelect(messages[lang].firstChooseSubcategory);
    selectedPlace = null;
    routeButton.disabled = true;
    allMarkersLayer.clearLayers();
    clearRoute();
    clearDestinationMarker();
    summaryBox.classList.add("d-none");
    routeInfo.classList.add("hidden");
    routeInfo.innerHTML = "";
    map.fitBounds(radiusCircle.getBounds(), { padding: [30, 30] });
    setStatus(messages[lang].resetDone, "default");
  });

  function populateCategories() {
    categorySelect.innerHTML = `<option value="">${messages[lang].categoryPlaceholder}</option>`;
    Object.keys(config).forEach(key => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = labels[lang].categories[key];
      categorySelect.appendChild(option);
    });
  }

  function populateSubcategories(categoryKey) {
    subcategorySelect.innerHTML = `<option value="">${messages[lang].subcategoryPlaceholder}</option>`;
    subcategorySelect.disabled = !categoryKey;
    if (!categoryKey) return;
    Object.keys(config[categoryKey].subcategories).forEach(key => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = labels[lang].subcategories[key];
      subcategorySelect.appendChild(option);
    });
  }

  function populatePlaces(places, emptyText = messages[lang].placePlaceholder) {
    placeSelect.innerHTML = `<option value="">${places.length ? messages[lang].placePlaceholder : emptyText}</option>`;
    placeSelect.disabled = places.length === 0;
    places.forEach(place => {
      const safeIcon = sanitizePlaceIcon(place.icon, place.categoryKey, place.subcategoryKey);
      const displayPlace = { ...place, icon: safeIcon };
      const option = document.createElement("option");
      option.value = JSON.stringify(displayPlace);
      option.textContent = `${safeIcon} ${place.name} (${place.distance} m)`;
      placeSelect.appendChild(option);
    });
  }

  function resetPlaceSelect(text) {
    placeSelect.innerHTML = `<option value="">${text}</option>`;
    placeSelect.disabled = true;
  }

  function isSubcategoryUnavailable(categoryKey, subcategoryKey) {
    const unavailable = pageConfig.unavailableSubcategories?.[categoryKey];
    if (!unavailable) return false;
    if (Array.isArray(unavailable)) return unavailable.includes(subcategoryKey);
    return unavailable[subcategoryKey] === true;
  }

async function loadPlaces(categoryKey, subcategoryKey) {
  const cacheKey = `${cachePrefix}:${categoryKey}:${subcategoryKey}`;
  const subConfig = config[categoryKey].subcategories[subcategoryKey];

  const manualPlaces = getManualPlaces(categoryKey, subcategoryKey, subConfig) || [];

  const cached = readCache(cacheKey);
  if (cached) {
    const filteredCached = cached.filter(place => !subConfig.matcher || subConfig.matcher(place));
    const places = mergePlaces(getPlaceLimit(categoryKey, subcategoryKey), manualPlaces, filteredCached);
    return { places, fromCache: true, fromFallback: false };
  }

  if (!subConfig.filters || !subConfig.filters.length) {
    writeCache(cacheKey, manualPlaces);
    return { places: manualPlaces, fromCache: false, fromFallback: false };
  }

  const query = buildOverpassQuery(subConfig.filters);
  let data;
  try {
    data = await fetchOverpassWithRetry(query);
  } catch (error) {
    const places = mergePlaces(getPlaceLimit(categoryKey, subcategoryKey), manualPlaces, await fetchPlacesFallback(categoryKey, subcategoryKey, subConfig));
    if (places.length) {
      writeCache(cacheKey, places);
      return { places, fromCache: false, fromFallback: true };
    }
    throw error;
  }
    let places = normalizePlaces(data.elements || [], categoryKey, subcategoryKey, subConfig);
    let fromFallback = false;

    if (!places.length || shouldEnrichWithFallback(categoryKey, subcategoryKey, places)) {
      const fallbackPlaces = await fetchPlacesFallback(categoryKey, subcategoryKey, subConfig);
      places = mergePlaces(getPlaceLimit(categoryKey, subcategoryKey), places, fallbackPlaces);
      fromFallback = places.length > 0;
    }
    places = mergePlaces(getPlaceLimit(categoryKey, subcategoryKey), manualPlaces, places);
    writeCache(cacheKey, places);
    return { places, fromCache: false, fromFallback };
  }

  function getManualPlaces(categoryKey, subcategoryKey, subConfig) {
    if (categoryKey === "school" && subcategoryKey === "school_all") {
      const schoolPlaces = pageConfig.manualPlaces?.school || {};
      const allSchoolPlaces = Object.values(schoolPlaces).flat().filter(Boolean);
      return allSchoolPlaces
        .map(place => ({
          name: place.name,
          lat: place.lat,
          lon: place.lon,
          distance: haversine(station.lat, station.lon, place.lat, place.lon),
          categoryKey,
          subcategoryKey,
          icon: subConfig.icon || "🏫"
        }))
        .sort((a, b) => a.distance - b.distance);
    }

    const places = pageConfig.manualPlaces?.[categoryKey]?.[subcategoryKey];
    if (!Array.isArray(places)) return null;

    return places
      .map(place => ({
        name: place.name,
        lat: place.lat,
        lon: place.lon,
        distance: haversine(station.lat, station.lon, place.lat, place.lon),
        categoryKey,
        subcategoryKey,
        icon: place.icon || subConfig.icon || "📍"
      }))
      .sort((a, b) => a.distance - b.distance);
  }

  function getPlaceLimit(categoryKey, subcategoryKey) {
    return categoryKey === "school" && subcategoryKey === "school_all" ? 120 : 30;
  }

  function shouldEnrichWithFallback(categoryKey, subcategoryKey, places) {
    if (categoryKey === "shops" && subcategoryKey === "grocery") return places.length < 5;
    if (categoryKey === "shops" && subcategoryKey === "mall") return places.length < 3;
    if (categoryKey !== "school") return false;
    if (subcategoryKey === "school_all") return places.length < 10;
    if (subcategoryKey === "secondary" || subcategoryKey === "primary") return places.length < 5;
    return places.length < 3;
  }

  function mergePlaces(maxPlaces, ...placeLists) {
    const seenNames = new Set();
    const merged = [];
    const manualPlaces = placeLists[0] || [];
    const externalPlaces = placeLists.slice(1).flat().sort((a, b) => a.distance - b.distance);

    manualPlaces.forEach(addPlace);
    externalPlaces.forEach(place => {
      if (merged.length >= maxPlaces) return;
      addPlace(place);
    });

    function addPlace(place) {
      if (!place || !place.name) return;
      const nameKey = normalizeText(place.name);
      if (seenNames.has(nameKey)) return;
      if ([...seenNames].some(existing => existing.includes(nameKey) || nameKey.includes(existing))) return;
      seenNames.add(nameKey);
      merged.push({
        ...place,
        icon: sanitizePlaceIcon(place.icon, place.categoryKey, place.subcategoryKey)
      });
    }

    return merged.sort((a, b) => a.distance - b.distance);
  }

  function normalizeText(text) {
    return String(text)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function sanitizePlaceIcon(icon, categoryKey, subcategoryKey) {
    const raw = String(icon || "").trim();
    if (!raw || /[?\u2753\u2754\uFFFD]/.test(raw) || raw.includes("�")) {
      return getFallbackIcon(categoryKey, subcategoryKey);
    }
    return raw;
  }

  function getMarkerIconHtml(icon, categoryKey, subcategoryKey) {
    if (subcategoryKey === "grocery") return "&#128722;";
    if (subcategoryKey === "mall") return "&#128717;&#65039;";
    return sanitizePlaceIcon(icon, categoryKey, subcategoryKey);
  }

  function getFallbackIcon(categoryKey, subcategoryKey) {
    const icons = {
      school_all: "\u{1F3EB}",
      university: "\u{1F393}",
      secondary: "\u{1F3EB}",
      primary: "\u{1F3EB}",
      grocery: "\u{1F6D2}",
      mall: "\u{1F6CD}\uFE0F",
      restaurant: "\u{1F37D}\uFE0F",
      cafe: "\u2615",
      fastfood: "\u{1F354}",
      bath: "\u{1F3CA}",
      pub: "\u{1F37A}",
      cinema: "\u{1F3AC}",
      museum: "\u{1F3DB}\uFE0F",
      library: "\u{1F4D6}",
      theatre: "\u{1F3AD}"
    };
    return icons[subcategoryKey] || (categoryKey === "shops" ? "\u{1F6CD}\uFE0F" : "\u{1F4CD}");
  }

  function buildOverpassQuery(filters) {
    const parts = [];
    filters.forEach(filter => {
      filter.values.forEach(value => {
        parts.push(`node(around:${radius},${station.lat},${station.lon})["${filter.key}"="${value}"];`);
        parts.push(`way(around:${radius},${station.lat},${station.lon})["${filter.key}"="${value}"];`);
        parts.push(`relation(around:${radius},${station.lat},${station.lon})["${filter.key}"="${value}"];`);
      });
    });
    return `[out:json][timeout:25];(${parts.join("")});out center tags;`;
  }

  async function fetchOverpassWithRetry(query) {
    const endpoints = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter"];
    return new Promise((resolve, reject) => {
      let failed = 0;
      let settled = false;

      endpoints.forEach(url => {
        fetchJsonWithTimeout(url, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
          body: `data=${encodeURIComponent(query)}`
        }, 12000)
          .then(data => {
            if (settled) return;
            if (!data || !Array.isArray(data.elements)) {
              throw new Error("Invalid Overpass response");
            }
            settled = true;
            resolve(data);
          })
          .catch(() => {
            failed++;
            if (!settled && failed >= endpoints.length) {
              reject(new Error("Overpass failed"));
            }
          });
      });
    });
  }

  async function fetchPlacesFallback(categoryKey, subcategoryKey, subConfig) {
    const defaultQueries = {
      school_all: [
        `iskola ${cityName}`,
        `általános iskola ${cityName}`,
        `${cityName} általános iskola`,
        `középiskola ${cityName}`,
        `gimnázium ${cityName}`,
        `technikum ${cityName}`,
        `egyetem ${cityName}`,
        `főiskola ${cityName}`
      ],
      university: [`egyetem ${cityName}`, `főiskola ${cityName}`],
      secondary: [
        `középiskola ${cityName}`,
        `gimnázium ${cityName}`,
        `technikum ${cityName}`,
        `szakképző ${cityName}`,
        `szakközépiskola ${cityName}`,
        `szakközép ${cityName}`,
        `szakgimnázium ${cityName}`,
        `szakiskola ${cityName}`,
        `${cityName} középiskola`,
        `${cityName} technikum`,
        `${cityName} szakképző`
      ],
      primary: [`általános iskola ${cityName}`, `${cityName} általános iskola`, `alapfokú iskola ${cityName}`, `primary school ${cityName}`],
      grocery: [
        `\u00e9lelmiszerbolt ${cityName}`,
        `ABC ${cityName}`,
        `Coop ${cityName}`,
        `CBA ${cityName}`,
        `Pr\u00edma ${cityName}`,
        `delik\u00e1tesz ${cityName}`,
        `vegyesbolt ${cityName}`,
        `kisbolt ${cityName}`,
        `supermarket ${cityName}`
      ],
      mall: [
        `bev\u00e1s\u00e1rl\u00f3k\u00f6zpont ${cityName}`,
        `pl\u00e1za ${cityName}`,
        `${cityName} pl\u00e1za`,
        `plaza ${cityName}`,
        `Corso ${cityName}`,
        `Korz\u00f3 ${cityName}`,
        `\u00c1rk\u00e1d ${cityName}`,
        `\u00fczleth\u00e1z ${cityName}`,
        `shopping center ${cityName}`,
        `mall ${cityName}`
      ],
      restaurant: [`étterem ${cityName}`],
      cafe: [`kávézó ${cityName}`, `cukrászda ${cityName}`],
      fastfood: [`gyorsétterem ${cityName}`],
      bath: [`strand ${cityName}`, `szabadstrand ${cityName}`, `beach ${cityName}`, `uszoda ${cityName}`, `fürdő ${cityName}`],
      pub: [`pub ${cityName}`, `bár ${cityName}`],
      cinema: [`mozi ${cityName}`, `cinema ${cityName}`, `filmszínház ${cityName}`, `filmklub ${cityName}`, `kertmozi ${cityName}`],
      museum: [`múzeum ${cityName}`, `galéria ${cityName}`],
      library: [`könyvtár ${cityName}`],
      theatre: [`színház ${cityName}`]
    };
    const pageQueries = pageConfig.fallbackQueries?.[subcategoryKey] || [];
    const defaultCategoryQueries = defaultQueries[subcategoryKey] || defaultQueries.school_all;
    const queries = [...new Set([...pageQueries, ...defaultCategoryQueries])];
    const found = [];
    const seen = new Set();

    function addFallbackPlace(candidate, latArg, lonArg) {
      const place = typeof candidate === "object"
        ? candidate
        : { name: candidate, lat: latArg, lon: lonArg };
      const name = place.name;
      const lat = Number(place.lat);
      const lon = Number(place.lon);

      if (!name) return;
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
      if (isRoadLikePlace(place)) return;
      if (subConfig.matcher && !subConfig.matcher(place)) return;

      const distance = haversine(station.lat, station.lon, lat, lon);
      if (distance > radius + 500) return;

      const key = `${normalizeText(name)}-${lat.toFixed(5)}-${lon.toFixed(5)}`;
      if (seen.has(key)) return;
      seen.add(key);

      found.push({
        name,
        lat,
        lon,
        distance,
        categoryKey,
        subcategoryKey,
        icon: subConfig.icon || "📍"
      });
    }

    for (const q of queries) {
      const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(q)}&limit=10`;
      try {
        const items = await fetchJsonWithTimeout(url, {}, 10000);
        items.forEach(item => {
          const lat = Number(item.lat);
          const lon = Number(item.lon);
          const name = item.display_name.split(",")[0];
          addFallbackPlace({
            name,
            lat,
            lon,
            source: "nominatim",
            osmClass: item.category || item.class || "",
            type: item.type || "",
            addresstype: item.addresstype || "",
            displayName: item.display_name || ""
          });
        });
      } catch (e) {}
    }

    if (found.length < 3) {
      for (const q of queries) {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=10&lat=${station.lat}&lon=${station.lon}`;
        try {
          const data = await fetchJsonWithTimeout(url, {}, 10000);
          (data.features || []).forEach(feature => {
            const coords = feature.geometry?.coordinates;
            if (!Array.isArray(coords) || coords.length < 2) return;
            const props = feature.properties || {};
            const city = props.city || props.county || props.state || "";
            if (city && normalizeText(city) !== normalizeText(cityName) && !normalizeText(city).includes(normalizeText(cityName))) return;
            addFallbackPlace({
              name: props.name,
              lat: Number(coords[1]),
              lon: Number(coords[0]),
              source: "photon",
              osmClass: props.osm_key || "",
              type: props.osm_value || props.type || "",
              tags: props.osm_key && props.osm_value ? { [props.osm_key]: props.osm_value } : {},
              displayName: [props.name, props.street, props.city, props.county].filter(Boolean).join(", ")
            });
          });
        } catch (e) {}
      }
    }

    return found.sort((a, b) => a.distance - b.distance).slice(0, getPlaceLimit(categoryKey, subcategoryKey));
  }

  async function fetchRouteWithRetry(place) {
    const url = `https://router.project-osrm.org/route/v1/foot/${station.lon},${station.lat};${place.lon},${place.lat}?overview=full&geometries=geojson`;
    return await fetchJsonWithTimeout(url, {}, 10000).then(d => d.routes[0]);
  }

  // --- MÓDOSÍTOTT normalizePlaces FÜGGVÉNY TILTO LISTÁVAL ---
  function normalizePlaces(elements, categoryKey, subcategoryKey, subConfig) {
    const res = [];
    // TILTO LISTA: ezek a nevek az adott városnál soha nem kerülnek a listába.
    const forbiddenNames = pageConfig.forbiddenNames || [];

    elements.forEach(el => {
      const lat = el.lat || el.center?.lat;
      const lon = el.lon || el.center?.lon;
      if (!lat || !lon) return;

      const name = el.tags?.name;
      const placeCandidate = {
        name,
        source: "overpass",
        tags: el.tags || {}
      };

      // 1. Kiszűrés, ha a név szerepel a tiltólistán
      if (name && forbiddenNames.includes(name)) {
        return; 
      }

      // 2. CSAK AKKOR ADJUK HOZZÁ, HA A KONFIGURÁCIÓBAN LÉVŐ MATCHER ENGEDI
      if (subConfig.matcher && !subConfig.matcher(placeCandidate)) {
        return; 
      }

      res.push({
        name: name || "Névtelen",
        lat, lon,
        distance: haversine(station.lat, station.lon, lat, lon),
        categoryKey, subcategoryKey, 
        icon: subConfig.icon
      });
    });
    return res.sort((a,b) => a.distance - b.distance).slice(0, getPlaceLimit(categoryKey, subcategoryKey));
  }

function showSelectedPlace(place) {
    clearDestinationMarker();
    const safeIcon = sanitizePlaceIcon(place.icon, place.categoryKey, place.subcategoryKey);
    const icon = L.divIcon({ 
      className: "destination-smart-marker", 
      html: getMarkerIconHtml(safeIcon, place.categoryKey, place.subcategoryKey), 
      iconSize: [34,34], 
      iconAnchor:[17,17] 
    });
    destinationMarker = L.marker([place.lat, place.lon], { icon }).addTo(map);
    map.flyTo([place.lat, place.lon], 16);
    
    summaryBox.classList.remove("d-none");
    
    // NYELV ELLENŐRZÉSE
    const isEn = document.documentElement.lang === 'en';

    // NYELVI SZÖVEGEK
    const ui = {
      selected: isEn ? "Selected:" : "Kiválasztva:",
      cinema: isEn ? "Click the image to view the current movie schedule:" : "A képre kattintva megtekintheti az aktuális moziműsort:",
      theater: isEn ? "Click the image to view the current theater program:" : "A képre kattintva megtekintheti az aktuális színházműsort:",
      rox: isEn ? "Click the image to view the current program and tickets:" : "A képre kattintva megtekintheti az aktuális műsort és jegyeket:"
    };
    
    // Alapértelmezett rész: név és távolság
    let summaryHtml = `<strong>${ui.selected}</strong> ${safeIcon} ${place.name} (${place.distance} m)`;
    
    const lowerName = place.name.toLowerCase();

    // 1. Kultik Mozi
    if (lowerName.includes("kultik")) {
      summaryHtml += `
        <div class="mt-3 pt-2 border-top" style="display: block !important;">
          <p class="mb-2" style="font-size: 0.95rem; color: #1b447d; font-weight: 700; line-height: 1.2; display: block !important;">
            ${ui.cinema}
          </p>
          <a href="https://kaposvarimozi.hu/" target="_blank" style="display: inline-block;">
            <img src="assets/img/kultik_logo.png" alt="Kultik Mozi" style="width: 140px; height: auto; cursor: pointer; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
          </a>
        </div>`;
    } 
    // 2. Csiky Gergely Színház
    else if (lowerName.includes("csiky gerge")) {
      summaryHtml += `
        <div class="mt-3 pt-2 border-top" style="display: block !important;">
          <p class="mb-2" style="font-size: 0.95rem; color: #1b447d; font-weight: 700; line-height: 1.2; display: block !important;">
            ${ui.theater}
          </p>
          <a href="https://www.csiky.hu/musor/" target="_blank" style="display: inline-block;">
            <img src="assets/img/csikygergelyszinhaz_logo.png" alt="Csiky Gergely Színház" style="width: 140px; height: auto; cursor: pointer; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
          </a>
        </div>`;
    }
    // 3. Roxínház
    else if (lowerName.includes("roxínház") || lowerName.includes("roxinhaz")) {
      summaryHtml += `
        <div class="mt-3 pt-2 border-top" style="display: block !important;">
          <p class="mb-2" style="font-size: 0.95rem; color: #1b447d; font-weight: 700; line-height: 1.2; display: block !important;">
            ${ui.rox}
          </p>
          <a href="https://roxinhaz.hu/jegyek-musor/" target="_blank" style="display: inline-block;">
            <img src="assets/img/roxinhaz_logo.png" alt="Roxínház" style="width: 140px; height: auto; cursor: pointer; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
          </a>
        </div>`;
    }

    const specialLink = findSpecialPlaceLink(lowerName);
    const specialLinkUrl = specialLink ? getSpecialLinkPrimaryUrl(specialLink) : "";
    if (specialLink && (!specialLinkUrl || !summaryHtml.includes(specialLinkUrl))) {
      summaryHtml += renderSpecialPlaceLink(specialLink);
    }

    // Tartalom frissítése
    summaryBox.innerHTML = summaryHtml;
  }

  

  function localizeSpecialLinkValue(value, fallback = "") {
    if (!value) return fallback;
    if (typeof value === "string") return value;
    return value[lang] || value.hu || value.en || value.de || fallback;
  }

  function getSpecialLinkPrimaryUrl(link) {
    if (!link) return "";
    if (link.url) return link.url;
    if (Array.isArray(link.actions) && link.actions[0]?.url) return link.actions[0].url;
    return "";
  }

  function findSpecialPlaceLink(lowerName) {
    const links = pageConfig.specialLinks || [];
    return links.find(link => {
      const matches = link.matches || [];
      return matches.some(match => lowerName.includes(match.toLowerCase()));
    });
  }

  function renderSpecialPlaceLink(link) {
    const text = localizeSpecialLinkValue(link.text);
    const label = localizeSpecialLinkValue(link.label, link.alt || getSpecialLinkPrimaryUrl(link));
    const tag = localizeSpecialLinkValue(link.tag);
    const icon = link.icon || "bi-box-arrow-up-right";
    const actions = Array.isArray(link.actions) && link.actions.length
      ? link.actions
      : [{ label: link.label, url: link.url, icon: "bi-box-arrow-up-right" }];

    if (link.image) {
      return `
        <div class="mt-3 pt-2 border-top" style="display: block !important;">
          <p class="mb-2" style="font-size: 0.95rem; color: #1b447d; font-weight: 700; line-height: 1.2; display: block !important;">
            ${text}
          </p>
          <a href="${link.url}" target="_blank" style="display: inline-block;">
            <img src="${link.image}" alt="${link.alt || label}" style="width: 140px; height: auto; cursor: pointer; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
          </a>
        </div>`;
    }

    const actionHtml = actions
      .filter(action => action.url)
      .map(action => {
        const actionLabel = localizeSpecialLinkValue(action.label, label);
        const actionIcon = action.icon || "bi-box-arrow-up-right";
        return `
          <a href="${action.url}" target="_blank" rel="noopener" class="smart-place-link-action">
            <i class="bi ${actionIcon}" aria-hidden="true"></i>
            <span>${actionLabel}</span>
          </a>`;
      })
      .join("");

    return `
      <div class="smart-place-link-card">
        <div class="smart-place-link-top">
          <span class="smart-place-link-icon"><i class="bi ${icon}" aria-hidden="true"></i></span>
          <div>
            ${tag ? `<div class="smart-place-link-tag">${tag}</div>` : ""}
            <div class="smart-place-link-title">${label}</div>
          </div>
        </div>
        ${text ? `<p class="smart-place-link-text">${text}</p>` : ""}
        ${actionHtml ? `<div class="smart-place-link-actions">${actionHtml}</div>` : ""}
      </div>`;
  }

  function drawRoute(route, place) {
    clearRoute();
    routeLayer = L.geoJSON(route.geometry, { style: { color: "#1b447d", weight: 6 } }).addTo(map);
  }

  function clearRoute() { if (routeLayer) map.removeLayer(routeLayer); routeLayer = null; }
  function clearDestinationMarker() { if (destinationMarker) map.removeLayer(destinationMarker); destinationMarker = null; }
  function setStatus(text, type) {
    statusBox.textContent = text;
    statusBox.classList.remove("is-error", "is-success");
    if (type === "error") statusBox.classList.add("is-error");
    if (type === "success") statusBox.classList.add("is-success");
  }

  function showLoading(text) {
    const loadingText = loadingBox.querySelector(".loading-text");
    if (loadingText && text) loadingText.textContent = text;
    loadingBox.classList.remove("d-none");
    loadingBox.style.display = "flex";
  }

  function hideLoading() {
    loadingBox.classList.add("d-none");
    loadingBox.style.display = "none";
  }
  function readCache(k) {
    const raw = localStorage.getItem(k);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw);
      if (!parsed.timestamp || Date.now() - parsed.timestamp > cacheTtlMs) {
        localStorage.removeItem(k);
        return null;
      }
      return parsed.places || null;
    } catch (error) {
      localStorage.removeItem(k);
      return null;
    }
  }

  function writeCache(k, p) { localStorage.setItem(k, JSON.stringify({ timestamp: Date.now(), places: p })); }

  async function fetchJsonWithTimeout(url, opt, timeout) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const res = await fetch(url, { ...opt, signal: controller.signal });
    clearTimeout(id);
    return res.json();
  }

  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
  function hasName(p) { return !!p.name; }
  function hasTag(p, key, values) {
    const tags = p.tags || {};
    return values.includes(tags[key]);
  }
  function isRoadLikePlace(p) {
    const name = normalizeText(p.name || "");
    const tags = p.tags || {};
    const osmClass = normalizeText(p.osmClass || "");
    const type = normalizeText(p.type || "");
    const addresstype = normalizeText(p.addresstype || "");

    if (tags.highway || osmClass === "highway") return true;
    if (["road", "street", "residential", "pedestrian", "service", "footway", "cycleway"].includes(type)) return true;
    if (["road", "street"].includes(addresstype)) return true;
    return /\b(utca|ut|ter|koz|setany|sor|dulo|korut|rakpart|fasor|lepcso)\b/.test(name);
  }
  function isGroceryPlace(p) {
    if (!hasName(p) || isRoadLikePlace(p)) return false;

    const tags = p.tags || {};
    const shop = normalizeText(tags.shop || "");
    const amenity = normalizeText(tags.amenity || "");
    const osmClass = normalizeText(p.osmClass || "");
    const type = normalizeText(p.type || "");
    const text = normalizeText(`${p.name || ""} ${p.displayName || ""} ${Object.values(tags).join(" ")}`);

    const hardExcludedShopTypes = [
      "hardware",
      "doityourself",
      "building_materials",
      "construction",
      "trade",
      "paint",
      "furniture",
      "bookmaker",
      "books",
      "stationery",
      "copyshop",
      "newsagent",
      "tobacco",
      "florist",
      "garden_centre",
      "car",
      "car_parts",
      "bicycle",
      "clothes",
      "shoes",
      "beauty",
      "hairdresser",
      "chemist",
      "optician",
      "mobile_phone"
    ];
    if (hardExcludedShopTypes.includes(shop)) return false;

    const excludedNamePattern = /\b(barkacs|barkacsbolt|epitoanyag|epitkezes|tuzep|festek|butor|konyv|papir|iroszer|papirbolt|dohany|trafik|virag|kerteszet|auto|autos|alkatresz|bicikli|ruha|cipo|fodrasz|kozmetika|gyogyszertar|patika|optika|mobil|telefon|cukraszda|fagylaltozo|tekepalya)\b/;
    if (excludedNamePattern.test(text)) return false;

    const acceptedShopTypes = [
      "supermarket",
      "convenience",
      "grocery",
      "general",
      "kiosk",
      "deli",
      "farm",
      "greengrocer",
      "butcher",
      "bakery",
      "beverages"
    ];
    if (acceptedShopTypes.includes(shop)) return true;
    if (amenity === "marketplace") return true;
    if (osmClass === "shop" && acceptedShopTypes.includes(type)) return true;
    if (osmClass === "amenity" && type === "marketplace") return true;

    return /\b(abc|coop|cba|prima|re\\u00e1l|real|spar|tesco|aldi|lidl|penny|elelmiszer|elelmiszerbolt|kisbolt|vegyesbolt|delikatesz|csemege|diszkont|market|mini market|minimarket|supermarket|zoldseg|zoldseges|pekseg|husbolt|italbolt|bevasarlo)\b/.test(text);
  }
  function isShoppingCenterPlace(p) {
    if (!hasName(p) || isRoadLikePlace(p)) return false;

    const tags = p.tags || {};
    const shop = normalizeText(tags.shop || "");
    const building = normalizeText(tags.building || "");
    const landuse = normalizeText(tags.landuse || "");
    const osmClass = normalizeText(p.osmClass || "");
    const type = normalizeText(p.type || "");
    const text = normalizeText(`${p.name || ""} ${p.displayName || ""} ${Object.values(tags).join(" ")}`);

    const excludedShopTypes = [
      "hardware",
      "doityourself",
      "building_materials",
      "construction",
      "trade",
      "paint",
      "furniture",
      "car",
      "car_parts",
      "bicycle",
      "flooring",
      "tiles",
      "windows",
      "doors",
      "garden_centre",
      "florist",
      "stationery",
      "books",
      "tobacco"
    ];
    if (excludedShopTypes.includes(shop)) return false;

    const excludedNamePattern = /\b(jola|ajto|ablak|nyilaszaro|parketta|garazskapu|kofarago|sirko|kovago|ko farago|epitoanyag|epitkezes|tuzep|barkacs|festek|burkolat|csempe|padlo|butor|fatelep|faanyag|asztalos|otthon|lakberendezes|ingatlan|auto|autos|gumiszerviz|alkatresz|szerviz|kerteszet|virag|dohany|trafik|konyv|papir|iroszer|fodrasz|kozmetika|gyogyszertar|patika|hulladek|hulladekudvar|waste|recycling)\b/;
    if (excludedNamePattern.test(text)) return false;

    const shoppingNamePattern = /\b(plaza|mall|shopping|center|centre|centrum|arkad|corso|korzo|uzlethaz|uzletkozpont|bevasarlokozpont|bevasarlo kozpont|aruhaz|hipermarket|hypermarket|tesco|auchan|interspar|metro|retail park|park center|stop shop|vasarcsarnok|piaccsarnok)\b/;

    if (shop === "mall") return true;
    if (shop === "department_store") return shoppingNamePattern.test(text);
    if (osmClass === "shop" && type === "mall") return true;
    if (osmClass === "shop" && type === "department_store") return shoppingNamePattern.test(text);

    if (["retail", "commercial"].includes(building) || landuse === "retail") {
      return shoppingNamePattern.test(text);
    }

    return shoppingNamePattern.test(text);
  }
  function isCinemaPlace(p) {
    if (!hasName(p) || isRoadLikePlace(p)) return false;
    if (hasTag(p, "amenity", ["cinema"]) || hasTag(p, "building", ["cinema"])) return true;

    const name = normalizeText(p.name);
    const osmClass = normalizeText(p.osmClass || "");
    const type = normalizeText(p.type || "");
    if (osmClass === "amenity" && type === "cinema") return true;

    return /\b(mozi|cinema|filmszinhaz|filmklub|kertmozi|autosmozi|movie|movies)\b/.test(name)
      || name.includes("cinema city")
      || name.includes("kultik");
  }
  function isBathOrBeachPlace(p) {
    if (!hasName(p) || isRoadLikePlace(p)) return false;
    if (
      hasTag(p, "natural", ["beach"]) ||
      hasTag(p, "leisure", ["beach_resort", "swimming_area", "water_park", "swimming_pool"]) ||
      hasTag(p, "amenity", ["public_bath"])
    ) {
      return true;
    }

    const name = normalizeText(p.name);
    const osmClass = normalizeText(p.osmClass || "");
    const type = normalizeText(p.type || "");
    if (osmClass === "natural" && type === "beach") return true;
    if (osmClass === "leisure" && ["beach_resort", "swimming_area", "water_park", "swimming_pool"].includes(type)) return true;
    if (osmClass === "amenity" && type === "public_bath") return true;

    return /\b(strand|szabadstrand|beach|uszoda|furdo|plazs|lido|aquapark|termal|thermal|gyogyfurdo|waterpark)\b/.test(name)
      || name.includes("water park");
  }
  function isSchoolPlace(p) {
    if (!hasName(p) || isRoadLikePlace(p)) return false;
    if (
      hasTag(p, "amenity", ["school", "university", "college", "music_school", "language_school"]) ||
      hasTag(p, "building", ["school", "university", "college"])
    ) {
      return true;
    }

    const name = normalizeText(`${p.name || ""} ${p.displayName || ""}`);
    const osmClass = normalizeText(p.osmClass || "");
    const type = normalizeText(p.type || "");
    if (osmClass === "amenity" && ["school", "university", "college", "music_school", "language_school"].includes(type)) return true;
    if (osmClass === "building" && ["school", "university", "college"].includes(type)) return true;

    return /\b(iskola|altalanos|gimnazium|technikum|szakkepzo|szakgimnazium|kozepiskola|egyetem|foiskola|campus|akademia|zeneiskola|nyelviskola|tanciskola|muveszeti iskola|primary school|secondary school|school|university|college)\b/.test(name);
  }
  function isExcludedSchool(p) {
    const name = normalizeText(`${p.name || ""} ${p.displayName || ""}`);
    if (/\b(sportpaly|kosarlabda|labdarugo|tornacsarnok|jatszoter)\b/.test(name)) return true;
    if (/\b(ovoda|ovi|bolcsode|kindergarten|nursery)\b/.test(name) && !/\b(altalanos|gimnazium|kozepiskola|technikum|iskola|school)\b/.test(name)) return true;
    return false;
  }
  function isSecondarySchool(p) {
    const name = normalizeText(`${p.name || ""} ${p.displayName || ""}`);
    const tags = p.tags || {};
    const tagText = normalizeText(Object.values(tags).join(" "));
    const text = `${name} ${tagText}`;

    return /\b(gimnazium|technikum|kozepiskola|szakkozep|szakkozepiskola|szakkepzo|szakkepzes|szakiskola|szakgimnazium|szakmai iskola|vocational|secondary|high school|grammar school)\b/.test(text);
  }

  function isPrimarySchool(p) {
    const name = normalizeText(`${p.name || ""} ${p.displayName || ""}`);
    const tags = p.tags || {};
    const tagText = normalizeText(Object.values(tags).join(" "));
    const text = `${name} ${tagText}`;

    return /\b(altalanos|alapfoku|alapiskola|primary|elementary|grade school)\b/.test(text);
  }

  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2-lat1);
    const dLon = toRad(lon2-lon1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
    return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
  }
}

function initPecsGoogleMenu() {
  // Pécsi rész változatlanul hagyva...
}
