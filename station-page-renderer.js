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

    const smartMap = document.getElementById("smartNearbyMap");
    return smartMap ? smartMap.closest("section.container") : null;
  }

  function render() {
    const target = findInsertBeforeTarget();
    if (!target || !target.parentNode) {
      return;
    }

    const fragment = document.createDocumentFragment();

    if (station.info && !document.querySelector(".station-info")) {
      const infoSection = renderInfo(station.info);
      if (infoSection) {
        fragment.appendChild(infoSection);
      }
    }

    if (station.smartNearby) {
      const smartSection = renderSmartNearby();
      if (smartSection) {
        fragment.appendChild(smartSection);
      }
    }

    if (station.map && !document.querySelector(".station-inner-map-section")) {
      const mapSection = renderMap(station.map);
      if (mapSection) {
        fragment.appendChild(mapSection);
      }
    }

    if (fragment.childNodes.length > 0) {
      target.parentNode.insertBefore(fragment, target);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
