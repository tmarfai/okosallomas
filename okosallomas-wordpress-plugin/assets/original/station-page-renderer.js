(function () {
  const extras = window.stationPageExtras || {};
  const stationKey = document.body ? document.body.dataset.stationKey : "";
  const station = extras[stationKey];

  if (!station) {
    return;
  }

  const pageLang = (document.documentElement.lang || "").substring(0, 2);
  const isEnglish = pageLang === "en" || window.location.pathname.endsWith("-en.html");
  const isGerman = pageLang === "de" || window.location.pathname.endsWith("-de.html");
  const lang = isGerman ? "de" : isEnglish ? "en" : "hu";

  function toAssetUrl(path) {
    if (!path || /^(https?:|data:|\/)/i.test(path)) {
      return path;
    }

    const base = window.okosallomasAssetBase || "";
    return base ? base + path.replace(/^\.\//, "") : path;
  }

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
    const localized = info[lang] || (lang === "hu" ? info.hu : info.en) || info.hu;
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
      },
      de: {
        title: "Interaktive Karte nahegelegener Orte",
        intro: "Wähle eine Hauptkategorie, dann eine Unterkategorie und anschließend einen konkreten Ort. Auf der Karte wird nur der ausgewählte Ort angezeigt, und du kannst eine Fußroute vom Bahnhof anfordern.",
        category: "Hauptkategorie",
        categoryPlaceholder: "Kategorie wählen",
        subcategory: "Unterkategorie",
        subcategoryPlaceholder: "Zuerst Kategorie wählen",
        place: "Konkreter Ort",
        placePlaceholder: "Zuerst Unterkategorie wählen",
        route: "Route vom Bahnhof",
        reset: "Zurücksetzen",
        status: "Wähle eine Kategorie, um nahegelegene Orte zu laden.",
        loading: "Orte werden geladen..."
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
    const localized = map[lang] || (lang === "hu" ? map.hu : map.en) || map.hu;
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
    image.src = toAssetUrl(map.image);
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
    const mavLogo = document.querySelector("img[src='mavlogo.png'], img[src$='/mavlogo.png'], img[src*='/mavlogo.png?']");
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
