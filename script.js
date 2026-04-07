document.addEventListener("DOMContentLoaded", function () {
  initAudioPlayer();
  initWeatherCards();
  initSmartNearbyExplorer();
    initPecsGoogleMenu();
});

function initAudioPlayer() {
  const audio = document.getElementById("hang");
  const playPauseButton = document.getElementById("playPauseButton");
  const restartButton = document.getElementById("restartButton");

  if (!audio || !playPauseButton || !restartButton) return;

  const lang = document.documentElement.getAttribute("lang") || "hu";
  const texts = {
    hu: { play: "Lejátszás", pause: "Szünet", restart: "Újrakezdés" },
    en: { play: "Listen", pause: "Pause", restart: "Restart" }
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
  const lang = document.documentElement.getAttribute("lang") || "hu";

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
    { id: "idojaras-bataszek", nev: "Bátaszék", lat: 46.2010, lon: 18.7142 },
    { id: "idojaras-dombovar", nev: "Dombóvár", lat: 46.3500, lon: 18.1500 },
    { id: "idojaras-erd", nev: "Érd", lat: 47.3870, lon: 18.9051 },
    { id: "idojaras-fonyod", nev: "Fonyód", lat: 46.7425, lon: 17.5619 },
    { id: "idojaras-gyekenyes", nev: "Gyékényes", lat: 46.242159, lon: 16.983306 },
    { id: "idojaras-keszohidegkutgyonk", nev: "Keszőhidegkút-Gyönk", lat: 46.5006, lon: 18.4831 },
    { id: "idojaras-kaposvar", nev: "Kaposvár", lat: 46.3590, lon: 17.7960 },
    { id: "idojaras-lengyeltoti", nev: "Lengyeltóti", lat: 46.7000, lon: 17.6389 },
    { id: "idojaras-mohacs", nev: "Mohács", lat: 45.9959, lon: 18.6798 },
    { id: "idojaras-osztopan", nev: "Osztopán", lat: 46.4832, lon: 17.8879 },
    { id: "idojaras-ocseny", nev: "Őcsény", lat: 46.31776, lon: 18.74559 },
    { id: "idojaras-pecs", nev: "Pécs", lat: 46.0727, lon: 18.2323 },
    { id: "idojaras-pincehely", nev: "Pincehely", lat: 46.5422, lon: 18.4053 },
    { id: "idojaras-pusztaszabolcs", nev: "Pusztaszabolcs", lat: 47.13718, lon: 18.76704 },
    { id: "idojaras-sarbogard", nev: "Sárbogárd", lat: 46.8773, lon: 18.6305 },
    { id: "idojaras-sellye", nev: "Sellye", lat: 45.8472, lon: 17.6867 },
    { id: "idojaras-simontornya", nev: "Simontornya", lat: 46.7365, lon: 18.3863 },
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
        homersekletP.textContent = lang === "en"
          ? `Now: ${weather.temperature} °C | Max: ${daily.temperature_2m_max[0]} °C | Min: ${daily.temperature_2m_min[0]} °C`
          : `Most: ${weather.temperature} °C | Max: ${daily.temperature_2m_max[0]} °C | Min: ${daily.temperature_2m_min[0]} °C`;
        body.appendChild(homersekletP);

        const szelP = document.createElement("p");
        szelP.className = "szel";
        szelP.textContent = lang === "en"
          ? `Wind speed: ${weather.windspeed} km/h`
          : `Szélsebesség: ${weather.windspeed} km/h`;
        body.appendChild(szelP);

        const csapadek = daily.precipitation_sum[0];
        const csapadekP = document.createElement("p");
        csapadekP.className = "csapadek";

        if (csapadek === 0) {
          csapadekP.textContent = lang === "en"
            ? "🌞 Dry day, no rain expected!"
            : "🌞 Száraz nap, nem várható eső!";
        } else if (csapadek < 2) {
          csapadekP.textContent = lang === "en"
            ? `🌦️ Light rain expected: ${csapadek} mm`
            : `🌦️ Gyenge csapadék várható: ${csapadek} mm`;
        } else {
          csapadekP.textContent = lang === "en"
            ? `🌧️ Significant rain expected: ${csapadek} mm`
            : `🌧️ Jelentős csapadék várható: ${csapadek} mm`;
        }

        body.appendChild(csapadekP);
      })
      .catch(error => {
        const errorP = document.createElement("p");
        errorP.textContent = lang === "en" ? "Weather data unavailable." : "Nem elérhető az időjárás.";
        body.appendChild(errorP);
        console.error(`${varos.nev} időjárási hiba:`, error);
      });
  });
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

  const lang = document.documentElement.getAttribute("lang")?.substring(0, 2) || "hu";
  const station = {
    name: lang === "en" ? "Kaposvár railway station" : "Kaposvár vasútállomás",
    lat: 46.3529,
    lon: 17.7948
  };

  const radius = 3500;
  const cacheTtlMs = 1000 * 60 * 15;
  const cachePrefix = "kaposvar-smart-nearby-v4";
  let selectedPlace = null;
  let routeLayer = null;
  let destinationMarker = null;

  const messages = {
    hu: {
      chooseCategory: "Válassz egy kategóriát a közeli helyek betöltéséhez.",
      chooseSubcategory: "Most válassz egy alkategóriát.",
      loadingPlaces: "Helyek betöltése...",
      cachedPlaces: "A helyek cache-ből töltődtek be.",
      placesLoaded: "A helyek betöltődtek. Most válassz egy konkrét helyet.",
      noResults: "Ebben az alkategóriában most nem találtam találatot a körzeten belül.",
      fetchError: "A helyek betöltése most nem sikerült. Ez Overpass vagy hálózati hiba.",
      routeLoading: "Útvonal tervezése...",
      routeError: "A gyalogos útvonal most nem jött vissza a szolgáltatótól.",
      selectPlaceFirst: "Először válassz egy konkrét helyet.",
      categoryPlaceholder: "Válassz kategóriát",
      subcategoryPlaceholder: "Válassz alkategóriát",
      placePlaceholder: "Válassz konkrét helyet",
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
      fetchError: "Loading places failed. This is an Overpass or network error.",
      routeLoading: "Planning route...",
      routeError: "Walking route could not be returned by the service.",
      selectPlaceFirst: "Choose a specific place first.",
      categoryPlaceholder: "Choose category",
      subcategoryPlaceholder: "Choose subcategory",
      placePlaceholder: "Choose place",
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
        theatre: "Színház / művészet"
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
        theatre: "Theatre / arts"
      }
    }
  };

  const config = {
    school: {
      subcategories: {
        school_all: {
          icon: "🏫",
          filters: [{ key: "amenity", values: ["school"] }],
          matcher: place => hasName(place) && !isExcludedSchool(place)
        },
        university: {
          icon: "🎓",
          filters: [{ key: "amenity", values: ["university", "college"] }],
          matcher: place => hasName(place)
        },
        secondary: {
          icon: "🏫",
          filters: [{ key: "amenity", values: ["school"] }],
          matcher: place => hasName(place) && !isExcludedSchool(place) && isSecondarySchool(place)
        },
        primary: {
          icon: "📚",
          filters: [{ key: "amenity", values: ["school"] }],
          matcher: place => hasName(place) && !isExcludedSchool(place) && isPrimarySchool(place)
        }
      }
    },
    shops: {
      subcategories: {
        grocery: {
          icon: "🛒",
          filters: [{ key: "shop", values: ["supermarket", "convenience", "grocery"] }],
          matcher: place => hasName(place)
        },
        mall: {
          icon: "🛍️",
          filters: [{ key: "shop", values: ["mall", "department_store"] }],
          matcher: place => hasName(place)
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
          filters: [{ key: "amenity", values: ["cafe", "ice_cream"] }],
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
        pub: {
          icon: "🍺",
          filters: [{ key: "amenity", values: ["pub", "bar", "biergarten"] }],
          matcher: place => hasName(place)
        },
        cinema: {
          icon: "🎬",
          filters: [{ key: "amenity", values: ["cinema"] }],
          matcher: place => hasName(place)
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

  populateCategories();
  setStatus(messages[lang].chooseCategory, "default");

  categorySelect.addEventListener("change", () => {
    clearRoute();
    clearDestinationMarker();
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
    clearRoute();
    clearDestinationMarker();
    selectedPlace = null;
    summaryBox.classList.add("d-none");
    routeButton.disabled = true;
    routeInfo.classList.add("hidden");
    routeInfo.innerHTML = "";

    const categoryKey = categorySelect.value;
    const subcategoryKey = subcategorySelect.value;

    if (!categoryKey || !subcategoryKey) {
      resetPlaceSelect(messages[lang].firstChooseSubcategory);
      return;
    }

    showLoading(messages[lang].loadingPlaces);
    try {
      const result = await loadPlaces(categoryKey, subcategoryKey);
      populatePlaces(result.places);

      let text = `${messages[lang].placesLoaded} ${messages[lang].resultsCount}: ${result.places.length}.`;
      if (result.fromCache) {
        text = `${messages[lang].cachedPlaces} ${messages[lang].resultsCount}: ${result.places.length}.`;
      }
      if (result.fromFallback) {
        text += ` ${messages[lang].usingFallback}`;
      }
      if (!result.places.length) {
        text = messages[lang].noResults;
      }
      setStatus(text, result.places.length ? "success" : "default");
    } catch (error) {
      console.error(error);
      resetPlaceSelect(messages[lang].firstChooseSubcategory);
      setStatus(messages[lang].fetchError, "error");
    } finally {
      hideLoading();
    }
  });

  placeSelect.addEventListener("change", () => {
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

    selectedPlace = JSON.parse(placeSelect.value);
    routeButton.disabled = false;
    showSelectedPlace(selectedPlace);
    setStatus(`${messages[lang].selectedPlace} ${selectedPlace.name}`, "success");
  });

  routeButton.addEventListener("click", async () => {
    if (!selectedPlace) {
      setStatus(messages[lang].selectPlaceFirst, "default");
      return;
    }

    showLoading(messages[lang].routeLoading);
    setStatus(messages[lang].routeLoading, "default");

    try {
      const route = await fetchRouteWithRetry(selectedPlace);
      drawRoute(route, selectedPlace);
      const km = (route.distance / 1000).toFixed(2);
      const minutes = Math.max(1, Math.round(route.duration / 60));

      routeInfo.classList.remove("hidden");
      routeInfo.innerHTML = `
        ${messages[lang].routeTo} <strong>${selectedPlace.name}</strong><br>
        ${messages[lang].directDistance}: ${selectedPlace.distance} m<br>
        ${messages[lang].walkingDistance}: ~${km} km<br>
        ${messages[lang].walkingTime}: ~${minutes} ${lang === "hu" ? "perc" : "min"}
      `;

      if (destinationMarker) {
        destinationMarker.bindPopup(`
          <strong>${selectedPlace.icon} ${selectedPlace.name}</strong><br>
          ${messages[lang].directDistance}: ${selectedPlace.distance} m<br>
          ${messages[lang].walkingDistance}: ~${km} km<br>
          ${messages[lang].walkingTime}: ~${minutes} ${lang === "hu" ? "perc" : "min"}
        `).openPopup();
      }

      setStatus(`${messages[lang].routeTo} ${selectedPlace.name}`, "success");
    } catch (error) {
      console.error(error);
      routeInfo.classList.remove("hidden");
      routeInfo.innerHTML = `${messages[lang].routeTo} <strong>${selectedPlace.name}</strong><br>${messages[lang].routeError}`;
      setStatus(messages[lang].routeError, "error");
    } finally {
      hideLoading();
    }
  });

  resetButton.addEventListener("click", () => {
    categorySelect.value = "";
    subcategorySelect.innerHTML = `<option value="">${messages[lang].firstChooseCategory}</option>`;
    subcategorySelect.disabled = true;
    resetPlaceSelect(messages[lang].firstChooseSubcategory);
    selectedPlace = null;
    routeButton.disabled = true;
    clearRoute();
    clearDestinationMarker();
    summaryBox.classList.add("d-none");
    routeInfo.classList.add("hidden");
    routeInfo.innerHTML = "";
    map.fitBounds(radiusCircle.getBounds(), { padding: [30, 30] });
    stationMarker.openPopup();
    setStatus(messages[lang].resetDone, "default");
  });

  function populateCategories() {
    categorySelect.innerHTML = `<option value="">${messages[lang].categoryPlaceholder}</option>`;
    Object.keys(config).forEach(categoryKey => {
      const option = document.createElement("option");
      option.value = categoryKey;
      option.textContent = labels[lang].categories[categoryKey];
      categorySelect.appendChild(option);
    });
  }

  function populateSubcategories(categoryKey) {
    subcategorySelect.innerHTML = `<option value="">${messages[lang].subcategoryPlaceholder}</option>`;
    subcategorySelect.disabled = !categoryKey;
    if (!categoryKey) return;

    Object.keys(config[categoryKey].subcategories).forEach(subcategoryKey => {
      const option = document.createElement("option");
      option.value = subcategoryKey;
      option.textContent = labels[lang].subcategories[subcategoryKey];
      subcategorySelect.appendChild(option);
    });
  }

  function populatePlaces(places) {
    placeSelect.innerHTML = `<option value="">${messages[lang].placePlaceholder}</option>`;
    placeSelect.disabled = places.length === 0;

    places.forEach(place => {
      const option = document.createElement("option");
      option.value = JSON.stringify(place);
      option.textContent = `${place.icon} ${place.name} (${place.distance} m)`;
      placeSelect.appendChild(option);
    });
  }

  function resetPlaceSelect(text) {
    placeSelect.innerHTML = `<option value="">${text}</option>`;
    placeSelect.disabled = true;
  }

  async function loadPlaces(categoryKey, subcategoryKey) {
    const cacheKey = `${cachePrefix}:${categoryKey}:${subcategoryKey}`;
    const cached = readCache(cacheKey);
    if (cached) {
      return { places: cached, fromCache: true, fromFallback: false };
    }

    const subConfig = config[categoryKey].subcategories[subcategoryKey];
    const query = buildOverpassQuery(subConfig.filters);
    const data = await fetchOverpassWithRetry(query);
    let places = normalizePlaces(data.elements || [], categoryKey, subcategoryKey, subConfig);
    let fromFallback = false;

    if (!places.length && categoryKey === "school") {
      places = await fetchSchoolFallback(subcategoryKey);
      fromFallback = places.length > 0;
    }

    writeCache(cacheKey, places);
    return { places, fromCache: false, fromFallback };
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

    return `
      [out:json][timeout:25];
      (
        ${parts.join("\n")}
      );
      out center tags;
    `;
  }

  async function fetchOverpassWithRetry(query) {
    const endpoints = [
      "https://overpass-api.de/api/interpreter",
      "https://overpass.kumi.systems/api/interpreter",
      "https://overpass.osm.ch/api/interpreter"
    ];

    let lastError = null;

    for (let i = 0; i < endpoints.length; i++) {
      try {
        return await fetchJsonWithTimeout(endpoints[i], {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: query
        }, 18000);
      } catch (error) {
        lastError = error;
        await wait(700 * (i + 1));
      }
    }

    throw lastError || new Error("Overpass hiba");
  }

  async function fetchSchoolFallback(subcategoryKey) {
    const phrases = {
      school_all: ["iskola Kaposvár"],
      primary: ["általános iskola Kaposvár"],
      secondary: ["gimnázium Kaposvár", "technikum Kaposvár", "középiskola Kaposvár"],
      university: ["egyetem Kaposvár", "campus Kaposvár", "főiskola Kaposvár"]
    };

    const queries = phrases[subcategoryKey] || [];
    const found = [];
    const seen = new Set();
    const viewbox = `${station.lon - 0.08},${station.lat + 0.05},${station.lon + 0.08},${station.lat - 0.05}`;

    for (const query of queries) {
      const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=12&countrycodes=hu&bounded=1&viewbox=${encodeURIComponent(viewbox)}&q=${encodeURIComponent(query)}`;
      try {
        const items = await fetchJsonWithTimeout(url, {
          headers: { "Accept": "application/json" }
        }, 15000);

        items.forEach(item => {
          const lat = Number(item.lat);
          const lon = Number(item.lon);
          const name = item.display_name.split(",")[0].trim();
          const place = {
            name,
            lat,
            lon,
            distance: haversine(station.lat, station.lon, lat, lon),
            categoryKey: "school",
            subcategoryKey,
            icon: subcategoryKey === "university" ? "🎓" : (subcategoryKey === "secondary" ? "🏫" : "📚"),
            tags: {}
          };

          if (place.distance > radius) return;
          if (!hasName(place)) return;
          if (subcategoryKey === "primary" && !isPrimarySchool(place)) return;
          if (subcategoryKey === "secondary" && !isSecondarySchool(place)) return;
          if (subcategoryKey === "university" && !/(egyetem|campus|college|university|főiskola|foiskola)/i.test(name)) return;
          if (isExcludedSchool(place)) return;

          const key = `${normalizeText(name)}-${Math.round(lat * 10000)}-${Math.round(lon * 10000)}`;
          if (seen.has(key)) return;
          seen.add(key);
          found.push(place);
        });
      } catch (error) {
        console.warn("Nominatim fallback hiba:", error);
      }
    }

    return found.sort((a, b) => a.distance - b.distance).slice(0, 25);
  }

  async function fetchRouteWithRetry(place) {
    const endpoints = [
      `https://router.project-osrm.org/route/v1/foot/${station.lon},${station.lat};${place.lon},${place.lat}?overview=full&geometries=geojson&steps=false`
    ];

    let lastError = null;

    for (const url of endpoints) {
      try {
        const data = await fetchJsonWithTimeout(url, { headers: { "Accept": "application/json" } }, 18000);
        const route = data.routes && data.routes[0];
        if (!route || !route.geometry || !Array.isArray(route.geometry.coordinates)) {
          throw new Error("Érvénytelen útvonal válasz");
        }
        return {
          geometry: route.geometry,
          distance: route.distance,
          duration: route.duration
        };
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error("Útvonal hiba");
  }

  function normalizePlaces(elements, categoryKey, subcategoryKey, subConfig) {
    const results = [];
    const seen = new Set();

    elements.forEach(el => {
      const coords = el.type === "node"
        ? { lat: el.lat, lon: el.lon }
        : el.center
        ? { lat: el.center.lat, lon: el.center.lon }
        : null;

      if (!coords) return;

      const place = {
        name: (el.tags?.name || "").trim(),
        lat: coords.lat,
        lon: coords.lon,
        distance: haversine(station.lat, station.lon, coords.lat, coords.lon),
        categoryKey,
        subcategoryKey,
        icon: subConfig.icon || "📍",
        tags: el.tags || {}
      };

      if (place.distance > radius) return;
      if (!subConfig.matcher(place)) return;

      const key = `${normalizeText(place.name)}-${Math.round(place.lat * 10000)}-${Math.round(place.lon * 10000)}`;
      if (seen.has(key)) return;
      seen.add(key);
      results.push(place);
    });

    return results.sort((a, b) => a.distance - b.distance || a.name.localeCompare(b.name, "hu")).slice(0, 30);
  }

  function showSelectedPlace(place) {
    clearDestinationMarker();

    const destinationIcon = L.divIcon({
      className: "destination-smart-marker",
      html: place.icon || "📍",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    destinationMarker = L.marker([place.lat, place.lon], { icon: destinationIcon }).addTo(map);
    destinationMarker.bindPopup(`<strong>${place.icon} ${place.name}</strong><br>${messages[lang].directDistance}: ${place.distance} m`).openPopup();

    map.fitBounds(L.latLngBounds([[station.lat, station.lon], [place.lat, place.lon]]), { padding: [40, 40] });

    summaryBox.classList.remove("d-none");
    summaryBox.innerHTML = `
      <strong>${messages[lang].selectedPlace}</strong> ${place.icon} ${place.name}<br>
      <strong>${labels[lang].categories[place.categoryKey]} / ${labels[lang].subcategories[place.subcategoryKey]}</strong><br>
      <strong>${messages[lang].directDistance}:</strong> ${place.distance} m
    `;
  }

  function drawRoute(route, place) {
    clearRoute();
    routeLayer = L.geoJSON(route.geometry, {
      style: {
        color: "#1b447d",
        weight: 6,
        opacity: 0.95
      }
    }).addTo(map);

    const bounds = L.latLngBounds([
      [station.lat, station.lon],
      [place.lat, place.lon]
    ]);
    map.fitBounds(bounds.pad(0.2));
  }

  function clearRoute() {
    if (routeLayer) {
      map.removeLayer(routeLayer);
      routeLayer = null;
    }
  }

  function clearDestinationMarker() {
    if (destinationMarker) {
      map.removeLayer(destinationMarker);
      destinationMarker = null;
    }
  }

  function setStatus(text, type) {
    statusBox.textContent = text;
    statusBox.classList.remove("is-error", "is-success");
    if (type === "error") statusBox.classList.add("is-error");
    if (type === "success") statusBox.classList.add("is-success");
  }

  function showLoading(text) {
    const textNode = loadingBox.querySelector(".loading-text");
    if (textNode) textNode.textContent = text || messages[lang].loading;
    loadingBox.classList.remove("d-none");
  }

  function hideLoading() {
    loadingBox.classList.add("d-none");
  }

  function readCache(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed.timestamp || !Array.isArray(parsed.places)) return null;
      if (Date.now() - parsed.timestamp > cacheTtlMs) return null;
      return parsed.places;
    } catch {
      return null;
    }
  }

  function writeCache(key, places) {
    try {
      localStorage.setItem(key, JSON.stringify({
        timestamp: Date.now(),
        places
      }));
    } catch (error) {
      console.warn("Cache mentési hiba:", error);
    }
  }

  async function fetchJsonWithTimeout(url, options, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } finally {
      clearTimeout(timer);
    }
  }

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function hasName(place) {
    return Boolean(place.name && place.name.trim());
  }

  function schoolText(place) {
    return [
      place.name || "",
      place.tags?.["official_name"] || "",
      place.tags?.["school:level"] || "",
      place.tags?.["school:type"] || "",
      place.tags?.["operator:type"] || "",
      place.tags?.["isced:level"] || ""
    ].join(" ");
  }

  function isExcludedSchool(place) {
    const text = schoolText(place);
    return /(óvoda|ovoda|bölcsőde|bolcsode|kindergarten|childcare|nursery|preschool)/i.test(text)
      || place.tags?.amenity === "kindergarten"
      || place.tags?.amenity === "childcare";
  }

  function isSecondarySchool(place) {
    const text = schoolText(place);
    const isced = String(place.tags?.["isced:level"] || "");
    return /(gimnázium|gimnazium|technikum|szakképző|szakkepzo|szakgimnázium|szakgimnazium|szakközép|szakkozep|középiskola|kozepiskola|vocational|secondary|high school)/i.test(text)
      || /(^|[^0-9])[23]([^0-9]|$)/.test(isced);
  }

  function isPrimarySchool(place) {
    if (isSecondarySchool(place)) return false;
    const text = schoolText(place);
    const isced = String(place.tags?.["isced:level"] || "");

    if (/(általános iskola|altalanos iskola|primary|elementary)/i.test(text)) return true;
    if (/(^|[^0-9])1([^0-9]|$)/.test(isced) && !/(^|[^0-9])[23]([^0-9]|$)/.test(isced)) return true;

    return true;
  }

  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const toRad = deg => (deg * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  }

  function normalizeText(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  } 
}
function initPecsGoogleMenu() {
  const root = document.getElementById("pecsGoogleNearby");
  if (!root) return;

  const lang = (document.documentElement.getAttribute("lang") || "hu").substring(0, 2);

  const texts = {
    hu: {
      chooseCategory: "Válassz egy kategóriát a közeli helyek megjelenítéséhez.",
      chooseSubcategory: "Most válassz egy alkategóriát.",
      choosePlace: "Most válassz egy konkrét helyet.",
      categoryPlaceholder: "Válassz kategóriát",
      subcategoryPlaceholder: "Válassz alkategóriát",
      placePlaceholder: "Válassz konkrét helyet",
      firstChooseCategory: "Először kategóriát válassz",
      firstChooseSubcategory: "Először alkategóriát válassz",
      selectedPlace: "Kiválasztott hely:",
      mapsOpen: "Megnyitás Google Mapsben",
      mapsRoute: "Útvonal Google Mapsben",
      resetDone: "A menü visszaállt alapállapotba."
    },
    en: {
      chooseCategory: "Choose a category to display nearby places.",
      chooseSubcategory: "Now choose a subcategory.",
      choosePlace: "Now choose a specific place.",
      categoryPlaceholder: "Choose category",
      subcategoryPlaceholder: "Choose subcategory",
      placePlaceholder: "Choose a place",
      firstChooseCategory: "Choose category first",
      firstChooseSubcategory: "Choose subcategory first",
      selectedPlace: "Selected place:",
      mapsOpen: "Open in Google Maps",
      mapsRoute: "Route in Google Maps",
      resetDone: "Menu reset to default."
    }
  };

  const t = texts[lang] || texts.hu;

  const stationName = root.dataset.stationName || "Pécs vasútállomás";
  const originLat = root.dataset.originLat || "46.066700";
  const originLon = root.dataset.originLon || "18.225600";

  const categorySelect = document.getElementById("pecsGoogleCategorySelect");
  const subcategorySelect = document.getElementById("pecsGoogleSubcategorySelect");
  const placeSelect = document.getElementById("pecsGooglePlaceSelect");
  const openBtn = document.getElementById("pecsGoogleOpenBtn");
  const routeBtn = document.getElementById("pecsGoogleRouteBtn");
  const resetBtn = document.getElementById("pecsGoogleResetBtn");
  const statusBox = document.getElementById("pecsGoogleStatus");
  const summaryBox = document.getElementById("pecsGoogleSummary");

  if (!categorySelect || !subcategorySelect || !placeSelect || !openBtn || !routeBtn || !resetBtn || !statusBox || !summaryBox) {
    return;
  }

  const data = {
    school: {
      label: { hu: "Iskolák", en: "Schools" },
      subcategories: {
        university: {
          label: { hu: "Egyetem / karok", en: "University / faculties" },
          places: [
            {
              name: "PTE Állam- és Jogtudományi Kar",
              address: "48-as tér 1.",
              query: "PTE Állam- és Jogtudományi Kar Pécs",
              icon: "🎓"
            },
            {
              name: "PTE Közgazdaságtudományi Kar",
              address: "Rákóczi út 80.",
              query: "PTE Közgazdaságtudományi Kar Pécs",
              icon: "🎓"
            },
            {
              name: "PTE Egészségtudományi Kar",
              address: "Vörösmarty utca 4.",
              query: "PTE Egészségtudományi Kar Pécs",
              icon: "🎓"
            },
            {
              name: "PTE Műszaki és Informatikai Kar",
              address: "",
              query: "PTE Műszaki és Informatikai Kar Pécs",
              icon: "🎓"
            },
            {
              name: "PTE Természettudományi Kar",
              address: "",
              query: "PTE Természettudományi Kar Pécs",
              icon: "🎓"
            },
            {
              name: "PTE Bölcsészet- és Társadalomtudományi Kar",
              address: "",
              query: "PTE Bölcsészet- és Társadalomtudományi Kar Pécs",
              icon: "🎓"
            },
            {
              name: "PTE Általános Orvostudományi Kar",
              address: "",
              query: "PTE Általános Orvostudományi Kar Pécs",
              icon: "🎓"
            },
            {
              name: "PTE Művészeti Kar",
              address: "",
              query: "PTE Művészeti Kar Pécs",
              icon: "🎓"
            }
          ]
        },
        secondary: {
          label: { hu: "Középsulik", en: "Secondary schools" },
          places: [
            {
              name: "Leőwey Klára Gimnázium",
              address: "",
              query: "Leőwey Klára Gimnázium Pécs",
              icon: "🏫"
            },
            {
              name: "Ciszterci Rend Nagy Lajos Gimnázium",
              address: "",
              query: "Ciszterci Rend Nagy Lajos Gimnázium Pécs",
              icon: "🏫"
            },
            {
              name: "Janus Pannonius Gimnázium",
              address: "",
              query: "Janus Pannonius Gimnázium Pécs",
              icon: "🏫"
            }
          ]
        }
      }
    },

    culture: {
      label: { hu: "Kultúra", en: "Culture" },
      subcategories: {
        sights: {
          label: { hu: "Fő látnivalók", en: "Main sights" },
          places: [
            {
              name: "Zsolnay Kulturális Negyed",
              address: "",
              query: "Zsolnay Kulturális Negyed Pécs",
              icon: "🏛️"
            },
            {
              name: "Kodály Központ",
              address: "",
              query: "Kodály Központ Pécs",
              icon: "🎼"
            },
            {
              name: "Széchenyi tér",
              address: "",
              query: "Széchenyi tér Pécs",
              icon: "📍"
            },
            {
              name: "Cella Septichora",
              address: "",
              query: "Cella Septichora Pécs",
              icon: "🏛️"
            },
            {
              name: "Pécsi Székesegyház",
              address: "",
              query: "Pécsi Székesegyház",
              icon: "⛪"
            }
          ]
        }
      }
    },

    shops: {
      label: { hu: "Boltok", en: "Shops" },
      subcategories: {
        malls: {
          label: { hu: "Plázák / áruházak", en: "Malls / stores" },
          places: [
            {
              name: "Árkád Pécs",
              address: "",
              query: "Árkád Pécs",
              icon: "🛍️"
            },
            {
              name: "Pécs Plaza",
              address: "",
              query: "Pécs Plaza",
              icon: "🛍️"
            },
            {
              name: "Pécsi Vásárcsarnok",
              address: "",
              query: "Pécsi Vásárcsarnok",
              icon: "🧺"
            }
          ]
        }
      }
    },

    food: {
      label: { hu: "Étkezés", en: "Food" },
      subcategories: {
        cafes: {
          label: { hu: "Kávézó / sütiző", en: "Cafe / pastry" },
          places: [
            {
              name: "Mecsek Cukrászda",
              address: "",
              query: "Mecsek Cukrászda Pécs",
              icon: "☕"
            },
            {
              name: "Cooltour Café",
              address: "",
              query: "Cooltour Café Pécs",
              icon: "☕"
            },
            {
              name: "Reggeli",
              address: "",
              query: "Reggeli Pécs",
              icon: "☕"
            }
          ]
        },
        fastfood: {
          label: { hu: "Gyorsétterem", en: "Fast food" },
          places: [
            {
              name: "McDonald's Pécs",
              address: "",
              query: "McDonald's Pécs",
              icon: "🍔"
            },
            {
              name: "Burger King Pécs",
              address: "",
              query: "Burger King Pécs",
              icon: "🍔"
            }
          ]
        }
      }
    }
  };

  function getLabel(item) {
    return item?.[lang] || item?.hu || "";
  }

  function setStatus(text) {
    statusBox.textContent = text;
    statusBox.classList.remove("is-error", "is-success");
  }

  function disableLink(linkEl) {
    linkEl.href = "#";
    linkEl.classList.add("disabled");
    linkEl.setAttribute("aria-disabled", "true");
  }

  function enableLink(linkEl, href) {
    linkEl.href = href;
    linkEl.classList.remove("disabled");
    linkEl.setAttribute("aria-disabled", "false");
  }

  function resetPlaceSelect(text) {
    placeSelect.innerHTML = `<option value="">${text}</option>`;
    placeSelect.disabled = true;
  }

  function populateCategories() {
    categorySelect.innerHTML = `<option value="">${t.categoryPlaceholder}</option>`;
    Object.keys(data).forEach(categoryKey => {
      const option = document.createElement("option");
      option.value = categoryKey;
      option.textContent = getLabel(data[categoryKey].label);
      categorySelect.appendChild(option);
    });
  }

  function populateSubcategories(categoryKey) {
    subcategorySelect.innerHTML = `<option value="">${t.subcategoryPlaceholder}</option>`;
    subcategorySelect.disabled = !categoryKey;

    if (!categoryKey || !data[categoryKey]) return;

    Object.keys(data[categoryKey].subcategories).forEach(subKey => {
      const option = document.createElement("option");
      option.value = subKey;
      option.textContent = getLabel(data[categoryKey].subcategories[subKey].label);
      subcategorySelect.appendChild(option);
    });
  }

  function populatePlaces(categoryKey, subcategoryKey) {
    placeSelect.innerHTML = `<option value="">${t.placePlaceholder}</option>`;

    if (!categoryKey || !subcategoryKey) {
      placeSelect.disabled = true;
      return;
    }

    const places = data[categoryKey].subcategories[subcategoryKey].places || [];
    placeSelect.disabled = places.length === 0;

    places.forEach((place, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${place.icon} ${place.name}`;
      placeSelect.appendChild(option);
    });
  }

  function clearSelectionState() {
    summaryBox.classList.add("d-none");
    summaryBox.innerHTML = "";
    disableLink(openBtn);
    disableLink(routeBtn);
  }

  function renderSummary(categoryKey, subcategoryKey, place) {
    const categoryLabel = getLabel(data[categoryKey].label);
    const subcategoryLabel = getLabel(data[categoryKey].subcategories[subcategoryKey].label);

    summaryBox.classList.remove("d-none");
    summaryBox.innerHTML = `
      <strong>${t.selectedPlace}</strong> ${place.icon} ${place.name}<br>
      <strong>${categoryLabel} / ${subcategoryLabel}</strong>
      ${place.address ? `<br><strong>Cím:</strong> ${place.address}` : ""}
      <br><strong>${stationName}</strong> → <strong>${place.name}</strong>
    `;
  }

  function buildMapsSearchUrl(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  function buildMapsRouteUrl(query) {
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(`${originLat},${originLon}`)}&destination=${encodeURIComponent(query)}&travelmode=walking`;
  }

  populateCategories();
  resetPlaceSelect(t.firstChooseSubcategory);
  clearSelectionState();
  setStatus(t.chooseCategory);

  categorySelect.addEventListener("change", function () {
    populateSubcategories(categorySelect.value);
    resetPlaceSelect(t.firstChooseSubcategory);
    clearSelectionState();

    if (!categorySelect.value) {
      setStatus(t.chooseCategory);
      return;
    }

    setStatus(t.chooseSubcategory);
  });

  subcategorySelect.addEventListener("change", function () {
    populatePlaces(categorySelect.value, subcategorySelect.value);
    clearSelectionState();

    if (!subcategorySelect.value) {
      resetPlaceSelect(t.firstChooseSubcategory);
      return;
    }

    setStatus(t.choosePlace);
  });

  placeSelect.addEventListener("change", function () {
    clearSelectionState();

    const categoryKey = categorySelect.value;
    const subcategoryKey = subcategorySelect.value;

    if (!categoryKey || !subcategoryKey || placeSelect.value === "") {
      return;
    }

    const place = data[categoryKey].subcategories[subcategoryKey].places[Number(placeSelect.value)];
    if (!place) return;

    renderSummary(categoryKey, subcategoryKey, place);
    enableLink(openBtn, buildMapsSearchUrl(place.query));
    enableLink(routeBtn, buildMapsRouteUrl(place.query));
    setStatus(`${t.selectedPlace} ${place.name}`);
  });

  resetBtn.addEventListener("click", function () {
    categorySelect.value = "";
    subcategorySelect.innerHTML = `<option value="">${t.firstChooseCategory}</option>`;
    subcategorySelect.disabled = true;
    resetPlaceSelect(t.firstChooseSubcategory);
    clearSelectionState();
    setStatus(t.resetDone);
  });
}