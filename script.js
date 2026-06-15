document.addEventListener("DOMContentLoaded", async function () {
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
    { id: "idojaras-barcs", nev: "Barcs", lat: 45.9514, lon: 17.4460 },
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

function getSmartNearbyPageConfig(lang) {
  const configs = window.stationSmartConfigs || {};
  const bodyKey = document.body?.dataset?.stationKey;
  const fileName = window.location.pathname.split("/").pop() || "";
  const pageKey = fileName
    .replace(/\.(html|htm)$/i, "")
    .replace(/-en$/i, "");
  const key = bodyKey || pageKey;
  const config = configs[key] || configs.kaposvar;

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

  const lang = document.documentElement.getAttribute("lang")?.substring(0, 2) || "hu";
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
  const cachePrefix = `${pageConfig.key || cityName || "station"}-smart-nearby-v15`;
  
  let selectedPlace = null;
  let routeLayer = null;
  let destinationMarker = null;
  let allMarkersLayer = L.layerGroup(); 
  let placesLoadRequestId = 0;

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
        const markerIcon = L.divIcon({
          className: "destination-smart-marker",
          html: place.icon || "📍",
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });
        
        const m = L.marker([place.lat, place.lon], { icon: markerIcon });
        m.bindPopup(`<strong>${place.icon} ${place.name}</strong>`);
        
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
    if (!selectedPlace) return;
    showLoading(messages[lang].routeLoading);
    try {
      const route = await fetchRouteWithRetry(selectedPlace);
      drawRoute(route, selectedPlace);
      const km = (route.distance / 1000).toFixed(2);
      const minutes = Math.max(1, Math.round((route.distance / 1000) * 12));
      routeInfo.classList.remove("hidden");
      routeInfo.innerHTML = `
        ${messages[lang].routeTo} <strong>${selectedPlace.name}</strong><br>
        ${messages[lang].directDistance}: ${selectedPlace.distance} m<br>
        ${messages[lang].walkingDistance}: ~${km} km<br>
        ${messages[lang].walkingTime}: ~${minutes} ${lang === "hu" ? "perc" : "min"}
      `;
    } catch (error) {
      console.error(error);
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
    allMarkersLayer.clearLayers();
    clearRoute();
    clearDestinationMarker();
    summaryBox.classList.add("d-none");
    routeInfo.classList.add("hidden");
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
    const places = mergePlaces(manualPlaces, cached);
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
    const places = mergePlaces(manualPlaces, await fetchPlacesFallback(categoryKey, subcategoryKey, subConfig));
    if (places.length) {
      writeCache(cacheKey, places);
      return { places, fromCache: false, fromFallback: true };
    }
    throw error;
  }
    let places = normalizePlaces(data.elements || [], categoryKey, subcategoryKey, subConfig);
    let fromFallback = false;

    if (!places.length) {
      places = await fetchPlacesFallback(categoryKey, subcategoryKey, subConfig);
      fromFallback = places.length > 0;
    }
    places = mergePlaces(manualPlaces, places);
    writeCache(cacheKey, places);
    return { places, fromCache: false, fromFallback };
  }

  function getManualPlaces(categoryKey, subcategoryKey, subConfig) {
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

  function mergePlaces(...placeLists) {
    const seenNames = new Set();
    const merged = [];
    const manualPlaces = placeLists[0] || [];
    const externalPlaces = placeLists.slice(1).flat().sort((a, b) => a.distance - b.distance);

    manualPlaces.forEach(addPlace);
    externalPlaces.forEach(place => {
      if (merged.length >= 30) return;
      addPlace(place);
    });

    function addPlace(place) {
      if (!place || !place.name) return;
      const nameKey = normalizeText(place.name);
      if (seenNames.has(nameKey)) return;
      if ([...seenNames].some(existing => existing.includes(nameKey) || nameKey.includes(existing))) return;
      seenNames.add(nameKey);
      merged.push(place);
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
    for (let url of endpoints) {
      try {
        return await fetchJsonWithTimeout(url, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
          body: `data=${encodeURIComponent(query)}`
        }, 15000);
      }
      catch (e) { console.warn("Retry Overpass..."); }
    }
    throw new Error("Overpass failed");
  }

  async function fetchPlacesFallback(categoryKey, subcategoryKey, subConfig) {
    const defaultQueries = {
      school_all: [`iskola ${cityName}`],
      university: [`egyetem ${cityName}`, `főiskola ${cityName}`],
      secondary: [`középiskola ${cityName}`, `szakképző ${cityName}`],
      primary: [`általános iskola ${cityName}`, `${cityName} általános iskola`, `primary school ${cityName}`],
      grocery: [`élelmiszerbolt ${cityName}`, `supermarket ${cityName}`],
      mall: [`bevásárlóközpont ${cityName}`],
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

    return found.sort((a, b) => a.distance - b.distance).slice(0, 30);
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
    return res.sort((a,b) => a.distance - b.distance).slice(0, 30);
  }

function showSelectedPlace(place) {
    clearDestinationMarker();
    const icon = L.divIcon({ 
      className: "destination-smart-marker", 
      html: place.icon, 
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
    let summaryHtml = `<strong>${ui.selected}</strong> ${place.icon} ${place.name} (${place.distance} m)`;
    
    const lowerName = place.name.toLowerCase();

    // 1. Kultik Mozi
    if (lowerName.includes("kultik")) {
      summaryHtml += `
        <div class="mt-3 pt-2 border-top" style="display: block !important;">
          <p class="mb-2" style="font-size: 0.95rem; color: #1b447d; font-weight: 700; line-height: 1.2; display: block !important;">
            ${ui.cinema}
          </p>
          <a href="https://kaposvarimozi.hu/" target="_blank" style="display: inline-block;">
            <img src="kultik_logo.png" alt="Kultik Mozi" style="width: 140px; height: auto; cursor: pointer; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
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
            <img src="csikygergelyszinhaz_logo.png" alt="Csiky Gergely Színház" style="width: 140px; height: auto; cursor: pointer; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
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
            <img src="roxinhaz_logo.png" alt="Roxínház" style="width: 140px; height: auto; cursor: pointer; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
          </a>
        </div>`;
    }

    const specialLink = findSpecialPlaceLink(lowerName);
    if (specialLink && !summaryHtml.includes(specialLink.url)) {
      summaryHtml += renderSpecialPlaceLink(specialLink);
    }

    // Tartalom frissítése
    summaryBox.innerHTML = summaryHtml;
  }

  

  function findSpecialPlaceLink(lowerName) {
    const links = pageConfig.specialLinks || [];
    return links.find(link => {
      const matches = link.matches || [];
      return matches.some(match => lowerName.includes(match.toLowerCase()));
    });
  }

  function renderSpecialPlaceLink(link) {
    const text = link.text?.[lang] || link.text?.hu || "";
    const label = link.label?.[lang] || link.label?.hu || link.alt || link.url;

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

    return `
      <div class="mt-3 pt-2 border-top" style="display: block !important;">
        <p class="mb-2" style="font-size: 0.95rem; color: #1b447d; font-weight: 700; line-height: 1.2; display: block !important;">
          ${text}
        </p>
        <a href="${link.url}" target="_blank" class="btn btn-outline-primary btn-sm">
          ${label}
        </a>
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
  function isExcludedSchool(p) {
    const name = p.name || "";
    const lower = name.toLowerCase();
    if (/sportpály|kosárlabda|labdarúgó|tornacsarnok|játszótér/i.test(name)) return true;
    if (/óvoda|bölcsőde/i.test(name) && !/általános|gimnázium|középiskola|technikum|iskola/i.test(name)) return true;
    return false;
  }
  function isSecondarySchool(p) { return /gimnázium|technikum|középiskola/i.test(p.name); }
  function isPrimarySchool(p) { return /általános/i.test(p.name); }

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
