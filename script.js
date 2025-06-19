document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("hang");
  const playPauseButton = document.getElementById("playPauseButton");
  const restartButton = document.getElementById("restartButton");

  let isPlaying = false;
  let startedOnce = false;

  playPauseButton.addEventListener("click", function () {
    if (!isPlaying) {
      audio.play();
      playPauseButton.textContent = "Szünet";
      if (!startedOnce) {
        startedOnce = true;
        restartButton.style.display = "inline-block";
      }
    } else {
      audio.pause();
      playPauseButton.textContent = "Lejátszás";
    }
    isPlaying = !isPlaying;
  });

  restartButton.addEventListener("click", function () {
  audio.currentTime = 0;    // Visszaáll az elejére
  audio.play();             // Azonnal elindul a hang
  isPlaying = true;         // Jelzi, hogy most épp játszik
  playPauseButton.textContent = "Szünet";  // A gomb felirata megfelelő legyen
});


  audio.addEventListener("ended", function () {
    isPlaying = false;
    playPauseButton.textContent = "Lejátszás";
  });

  audio.load();
});
document.addEventListener("DOMContentLoaded", function () {
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
      id: "idojaras-dombovar",
      nev: "Dombóvár",
      lat: 46.3500,
      lon: 18.1500
    },
    {
      id: "idojaras-fonyod",
      nev: "Fonyód",
      lat: 46.7425,
      lon: 17.5619
    },
    {
      id: "idojaras-kaposvar",
      nev: "Kaposvár",
      lat: 46.3590,
      lon: 17.7960
    },
    {
      id: "idojaras-pecs",
      nev: "Pécs",
      lat: 46.0727,
      lon: 18.2323
    },
    {
      id: "idojaras-siofok",
      nev: "Siófok",
      lat: 46.9081,
      lon: 18.0510
    },
    {
      id: "idojaras-szantod",
      nev: "Szántód",
      lat: 46.860639,
      lon: 17.902411
    },
    {
      id: "idojaras-szentlorinc",
      nev: "Szentlőrinc",
      lat: 46.0464,
      lon: 17.9857
    },
    {
    id: "idojaras-zamardi",
    nev: "Zamárdi",
    lat: 46.88434,
    lon: 17.95051
    },
    {
    id: "idojaras-balatonszarszo",
    nev: "Balatonszárszó",
    lat: 46.8295,
    lon: 17.8351
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
        homersekletP.textContent = `Most: ${weather.temperature} °C | Max: ${daily.temperature_2m_max[0]} °C | Min: ${daily.temperature_2m_min[0]} °C`;
        body.appendChild(homersekletP);

        // Szél
        const szelP = document.createElement("p");
        szelP.className = "szel";
        szelP.textContent = `Szélsebesség: ${weather.windspeed} km/h`;
        body.appendChild(szelP);

        // Csapadék
        const csapadek = daily.precipitation_sum[0];
        const csapadekP = document.createElement("p");
        csapadekP.className = "csapadek";
        if (csapadek === 0) {
          csapadekP.textContent = "🌞 Száraz nap, nem várható eső!";
        } else if (csapadek < 2) {
          csapadekP.textContent = `🌦️ Gyenge csapadék várható: ${csapadek} mm`;
        } else {
          csapadekP.textContent = `🌧️ Jelentős csapadék várható: ${csapadek} mm`;
        }
        body.appendChild(csapadekP);
      })
      .catch(error => {
        const box = document.getElementById(varos.id);
        const body = box.querySelector(".card-body");
        const errorP = document.createElement("p");
        errorP.textContent = "Nem elérhető az időjárás.";
        body.appendChild(errorP);
        console.error(`${varos.nev} időjárási hiba:`, error);
      });
  });
});
