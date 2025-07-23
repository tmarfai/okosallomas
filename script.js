document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("hang");
  const playPauseButton = document.getElementById("playPauseButton");
  const restartButton = document.getElementById("restartButton");

  const lang = document.documentElement.getAttribute("lang") || "hu";

  const texts = {
    hu: { play: 'Lejátszás', pause: 'Szünet', restart: 'Újrakezdés' },
    en: { play: 'Listen', pause: 'Pause', restart: 'Restart' }
  };

  let isPlaying = false;
  let startedOnce = false;

  // Play / Pause gomb kezelése
  playPauseButton.addEventListener("click", function () {
    if (!isPlaying) {
      audio.play();
      playPauseButton.innerHTML = `<i class="bi bi-pause-fill me-2"></i> ${texts[lang].pause}`;
      if (!startedOnce) {
        startedOnce = true;
        restartButton.style.display = "inline-block";
        restartButton.innerHTML = `${texts[lang].restart}`;
      }
    } else {
      audio.pause();
      playPauseButton.innerHTML = `<i class="bi bi-volume-up-fill me-2"></i> ${texts[lang].play}`;
    }
    isPlaying = !isPlaying;
  });

  // Újrakezdés gomb kezelése
  restartButton.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
    playPauseButton.innerHTML = `<i class="bi bi-pause-fill me-2"></i> ${texts[lang].pause}`;
  });

  // Lejátszás vége esemény
  audio.addEventListener("ended", function () {
    isPlaying = false;
    playPauseButton.innerHTML = `<i class="bi bi-volume-up-fill me-2"></i> ${texts[lang].play}`;
  });

  audio.load();
});

document.addEventListener("DOMContentLoaded", function () {
  const lang = document.documentElement.getAttribute("lang") || "hu";

  const varosok = [
    {
      id: "idojaras-villany",
      nev: "Villány",
      lat: 45.8705,
      lon: 18.4543
    },
    {
      id: "idojaras-abaliget",
      nev: "Abaliget",
      lat: 46.1272,
      lon: 18.0946
    },
    {
      id: "idojaras-ata",
      nev: "Áta",
      lat: 45.9766,
      lon: 18.3703
    },
    {
      id: "idojaras-balatonboglar",
      nev: "Balatonboglár",
      lat: 46.7781,
      lon: 17.6597
    },
    {
      id: "idojaras-balatonbereny",
      nev: "Balatonberény",
      lat: 46.707,
      lon: 17.320
    },
    {
      id: "idojaras-balatonfenyves",
      nev: "Balatonfenyves",
      lat: 46.7196,
      lon: 17.5360
    },
    {
      id: "idojaras-balatonfoldvar",
      nev: "Balatonföldvár",
      lat: 46.853281,
      lon: 17.879889
    },
    {
      id: "idojaras-balatonlelle",
      nev: "Balatonlelle",
      lat: 46.7830,
      lon: 17.6876
    },
    {
      id: "idojaras-balatonmariafurdo",
      nev: "Balatonmáriafürdő",
      lat: 46.70424,
      lon: 17.40128
    },
    {
    id: "idojaras-balatonszarszo",
    nev: "Balatonszárszó",
    lat: 46.8295,
    lon: 17.8351
    },
    {
      id: "idojaras-balatonszemes",
      nev: "Balatonszemes",
      lat: 46.8167,
      lon: 17.6667
    },
    {
      id: "idojaras-balatonszentgyorgy",
      nev: "Balatonszentgyörgy",
      lat: 46.6991,
      lon: 17.4825
    },
    {
      id: "idojaras-bataszek",
      nev: "Bátaszék",
      lat: 46.2010,
      lon: 18.7142
    },
    {
      id: "idojaras-dombovar",
      nev: "Dombóvár",
      lat: 46.3500,
      lon: 18.1500
    },
    {
      id: "idojaras-erd",
      nev: "Érd",
      lat: 47.3870,
      lon: 18.9051
    },
    {
      id: "idojaras-fonyod",
      nev: "Fonyód",
      lat: 46.7425,
      lon: 17.5619
    },
    {
      id: "idojaras-gyekenyes",
      nev: "Gyékényes",
      lat: 46.242159,
      lon: 16.983306
    },
    {
      id: "idojaras-keszohidegkutgyonk",
      nev: "Keszőhidegkút-Gyönk",
      lat: 46.5006,
      lon: 18.4831
    },
    {
      id: "idojaras-kaposvar",
      nev: "Kaposvár",
      lat: 46.3590,
      lon: 17.7960
    },
    {
    id: "idojaras-lengyeltoti",
    nev: "Lengyeltóti",
    lat: 46.7000,
    lon: 17.6389
    },
    {
    id: "idojaras-mohacs",
    nev: "Mohács",
    lat: 45.9959,
    lon: 18.6798
    },
    {
    id: "idojaras-osztopan",
    nev: "Osztopán",
    lat: 46.4832,
    lon: 17.8879
    },
    {
    id: "idojaras-ocseny",
    nev: "Őcsény",
    lat: 46.31776,
    lon: 18.74559
    },
    {
      id: "idojaras-pecs",
      nev: "Pécs",
      lat: 46.0727,
      lon: 18.2323
    },
    {
    id: "idojaras-pusztaszabolcs",
    nev: "Pusztaszabolcs",
    lat: 47.13718,
    lon: 18.76704
    },
    {
      id: "idojaras-sarbogard",
      nev: "Sárbogárd",
      lat: 46.8773,
      lon: 18.6305
    },
    {
      id: "idojaras-sellye",
      nev: "Sellye",
      lat: 45.8472,
      lon: 17.6867
    },
    {
      id: "idojaras-simontornya",
      nev: "Simontornya",
      lat: 46.7365,
      lon: 18.3863
    },
    {
      id: "idojaras-siofok",
      nev: "Siófok",
      lat: 46.9081,
      lon: 18.0510
    },
    {
      id: "idojaras-somogyszob",
      nev: "Somogyszob",
      lat: 46.2310,
      lon: 17.2650
    },
    {
      id: "idojaras-szantod",
      nev: "Szántód",
      lat: 46.860639,
      lon: 17.902411
    },
    {
      id: "idojaras-szazhalombatta",
      nev: "Százhalombatta",
      lat: 47.3264,
      lon: 18.9122
    },
    {
      id: "idojaras-szekszard",
      nev: "Szekszárd",
      lat: 46.3558,
      lon: 18.7039
    },
    {
      id: "idojaras-szentlorinc",
      nev: "Szentlőrinc",
      lat: 46.0464,
      lon: 17.9857
    },
    {
      id: "idojaras-szigetvar",
      nev: "Szigetvár",
      lat: 46.1303,
      lon: 17.8157
    },
    {
  id: "idojaras-tab",
  nev: "Tab",
  lat: 46.7372,
  lon: 17.5472
},

    {
    id: "idojaras-zamardi",
    nev: "Zamárdi",
    lat: 46.88434,
    lon: 17.95051
    },
  ];

  varosok.forEach(varos => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${varos.lat}&longitude=${varos.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBudapest`)
      .then(response => response.json())
      .then(data => {
        const weather = data.current_weather;
        const daily = data.daily;
        const box = document.getElementById(varos.id);
        const body = box.querySelector(".card-body");

        // Hőmérséklet
        const homersekletP = document.createElement("p");
        homersekletP.className = "homerseklet";
        homersekletP.textContent = lang === "en"
          ? `Now: ${weather.temperature} °C | Max: ${daily.temperature_2m_max[0]} °C | Min: ${daily.temperature_2m_min[0]} °C`
          : `Most: ${weather.temperature} °C | Max: ${daily.temperature_2m_max[0]} °C | Min: ${daily.temperature_2m_min[0]} °C`;
        body.appendChild(homersekletP);

        // Szél
        const szelP = document.createElement("p");
        szelP.className = "szel";
        szelP.textContent = lang === "en"
          ? `Wind speed: ${weather.windspeed} km/h`
          : `Szélsebesség: ${weather.windspeed} km/h`;
        body.appendChild(szelP);

        // Csapadék
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
        const box = document.getElementById(varos.id);
        const body = box.querySelector(".card-body");
        const errorP = document.createElement("p");
        errorP.textContent = lang === "en"
          ? "Weather data unavailable."
          : "Nem elérhető az időjárás.";
        body.appendChild(errorP);
        console.error(`${varos.nev} időjárási hiba:`, error);
      });
  });
});
