document.addEventListener("DOMContentLoaded", function () {
  initAudioPlayer();
  initWeatherCards();
  initStationNearbyMaps();
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
        errorP.textContent = lang === "en"
          ? "Weather data unavailable."
          : "Nem elérhető az időjárás.";
        body.appendChild(errorP);
        console.error(`${varos.nev} időjárási hiba:`, error);
      });
  });
}

function initStationNearbyMaps() {
  if (typeof L === "undefined") {
    console.error("Leaflet nincs betöltve.");
    return;
  }

  const lang = document.documentElement.getAttribute("lang")?.substring(0, 2) || "hu";

  const messages = {
    hu: {
      loadingMap: "Térkép betöltése...",
      loadingRoute: "Útvonal tervezése...",
      routeSelected: "Útvonal kiválasztva ide:",
      airDistance: "Légvonalban",
      walkingDistance: "Gyalogos útvonal",
      walkingTime: "Sétaidő",
      noRoute: "A gyalogos útvonal jelenleg nem elérhető.",
      unnamedChurch: "Névtelen templom",
      unnamedRestaurant: "Névtelen étterem",
      loadError: "Hiba a betöltéskor."
    },
    en: {
      loadingMap: "Loading map...",
      loadingRoute: "Planning route...",
      routeSelected: "Selected route to:",
      airDistance: "Air distance",
      walkingDistance: "Walking distance",
      walkingTime: "Walking time",
      noRoute: "Walking route is currently unavailable.",
      unnamedChurch: "Unnamed church",
      unnamedRestaurant: "Unnamed restaurant",
      loadError: "Loading error."
    }
  };

  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const toRad = deg => (deg * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  }

  const mapContainers = document.querySelectorAll(".station-nearby-map");
  if (!mapContainers.length) return;

  mapContainers.forEach((container, idx) => {
    const stationName = container.dataset.stationName || (lang === "hu" ? "Vasútállomás" : "Railway station");
    const lat = parseFloat(container.dataset.lat || "0");
    const lon = parseFloat(container.dataset.lon || "0");
    const radius = parseInt(container.dataset.radius || "750", 10);

    if (!lat || !lon) {
      console.error("Hiányzó koordináta a térképhez:", container);
      return;
    }

    container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "map-wrapper";

    const mapId = `leaflet-map-${idx}`;
    const mapDiv = document.createElement("div");
    mapDiv.id = mapId;
    mapDiv.style.width = "100%";
    mapDiv.style.height = "400px";
    wrapper.appendChild(mapDiv);

    const loadingDiv = document.createElement("div");
    loadingDiv.className = "map-loading";
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    const loadingText = document.createElement("div");
    loadingText.className = "loading-text";
    loadingText.textContent = messages[lang].loadingMap;
    loadingDiv.appendChild(spinner);
    loadingDiv.appendChild(loadingText);
    wrapper.appendChild(loadingDiv);

    const routeInfo = document.createElement("div");
    routeInfo.className = "route-info hidden";

    container.appendChild(wrapper);
    container.appendChild(routeInfo);

    const map = L.map(mapId).setView([lat, lon], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    L.marker([lat, lon]).addTo(map).bindPopup(`<strong>${stationName}</strong>`);

    L.circle([lat, lon], {
      radius: radius,
      color: "#1b447d",
      fillColor: "#1b447d",
      fillOpacity: 0.08,
      weight: 2
    }).addTo(map);

    const churchIcon = L.divIcon({
      className: "church-marker",
      html: "⛪",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const restaurantIcon = L.divIcon({
      className: "restaurant-marker",
      html: "🍽️",
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    loadingDiv.classList.remove("hidden");

    const overpassQuery = `
      [out:json][timeout:25];
      (
        node(around:${radius},${lat},${lon})["amenity"="place_of_worship"];
        way(around:${radius},${lat},${lon})["amenity"="place_of_worship"];
        relation(around:${radius},${lat},${lon})["amenity"="place_of_worship"];
        node(around:${radius},${lat},${lon})["amenity"="restaurant"];
        way(around:${radius},${lat},${lon})["amenity"="restaurant"];
        relation(around:${radius},${lat},${lon})["amenity"="restaurant"];
      );
      out center tags;
    `;

    let routingControl = null;

    function drawRoute(place) {
      if (routingControl) {
        map.removeControl(routingControl);
      }

      loadingText.textContent = messages[lang].loadingRoute;
      loadingDiv.classList.remove("hidden");

      routingControl = L.Routing.control({
        waypoints: [L.latLng(lat, lon), L.latLng(place.lat, place.lon)],
        router: L.Routing.osrmv1({
          serviceUrl: "https://routing.openstreetmap.de/routed-foot/route/v1",
          profile: "foot"
        }),
        lineOptions: {
          styles: [{ color: "#1b447d", opacity: 0.9, weight: 6 }]
        },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        show: false,
        createMarker: (i, wp) => {
          if (i === 0) {
            return L.marker(wp.latLng).bindPopup(`<strong>${stationName}</strong>`);
          }
          return L.marker(wp.latLng).bindPopup(`<strong>${place.name}</strong>`);
        }
      }).addTo(map);

      routingControl.on("routesfound", e => {
        loadingDiv.classList.add("hidden");
        const route = e.routes[0];
        const km = (route.summary.totalDistance / 1000).toFixed(2);
        const minutes = Math.round(route.summary.totalDistance / 75);

        routeInfo.classList.remove("hidden");
        routeInfo.innerHTML = `
          ${messages[lang].routeSelected} <strong>${place.name}</strong><br>
          ${messages[lang].airDistance}: ${place.distance} m<br>
          ${messages[lang].walkingDistance}: ~${km} km<br>
          ${messages[lang].walkingTime}: ~${minutes} perc
        `;

        const emoji = place.amenity === "restaurant" ? "🍽️" : "⛪";
        place.marker.bindPopup(`
          <strong>${emoji} ${place.name}</strong><br><br>
          <strong>${messages[lang].airDistance}:</strong> ${place.distance} m<br>
          <strong>${messages[lang].walkingDistance}:</strong> ~${km} km<br>
          <strong>${messages[lang].walkingTime}:</strong> ~${minutes} perc
        `).openPopup();
      });

      routingControl.on("routingerror", () => {
        loadingDiv.classList.add("hidden");
        routeInfo.classList.remove("hidden");
        routeInfo.innerHTML = `
          ${messages[lang].routeSelected} <strong>${place.name}</strong><br>
          ${messages[lang].noRoute}
        `;
      });
    }

    fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: overpassQuery
    })
      .then(res => res.json())
      .then(data => {
        const elements = data.elements || [];
        const places = [];
        const seen = new Set();
        const bounds = [[lat, lon]];

        elements.forEach(el => {
          const coords =
            el.type === "node"
              ? { lat: el.lat, lon: el.lon }
              : el.center
              ? { lat: el.center.lat, lon: el.center.lon }
              : null;

          if (!coords) return;

          const dist = haversine(lat, lon, coords.lat, coords.lon);
          if (dist > radius) return;

          const amenity = el.tags?.amenity;
          let name = el.tags?.name;

          if (!name) {
            name = amenity === "restaurant"
              ? messages[lang].unnamedRestaurant
              : messages[lang].unnamedChurch;
          }

          const key = `${name}-${coords.lat}-${coords.lon}`;
          if (seen.has(key)) return;
          seen.add(key);

          places.push({
            name,
            lat: coords.lat,
            lon: coords.lon,
            distance: dist,
            amenity
          });
        });

        places.forEach(place => {
          const icon = place.amenity === "restaurant" ? restaurantIcon : churchIcon;
          const marker = L.marker([place.lat, place.lon], { icon }).addTo(map);
          marker.bindPopup(
            `<strong>${place.amenity === "restaurant" ? "🍽️" : "⛪"} ${place.name}</strong><br>${place.distance} m`
          );
          place.marker = marker;
          bounds.push([place.lat, place.lon]);
          marker.on("click", () => drawRoute(place));
        });

        if (bounds.length > 1) {
          map.fitBounds(bounds, { padding: [40, 40] });
        }

        loadingDiv.classList.add("hidden");
      })
      .catch(err => {
        console.error(err);
        loadingText.textContent = messages[lang].loadError;
      });
  });
}