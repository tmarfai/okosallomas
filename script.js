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
      id: "idojaras-dombovar",
      nev: "Dombóvár",
      lat: 46.3500,
      lon: 18.1500
    },
    {
      id: "idojaras-pecs",
      nev: "Pécs",
      lat: 46.0727,
      lon: 18.2323
    },
    {
      id: "idojaras-szentlorinc",
      nev: "Szentlőrinc",
      lat: 46.0464,
      lon: 17.9857
    },
    {
      id: "idojaras-villany",
      nev: "Villány",
      lat: 45.8705,
      lon: 18.4543
    },
    
  ];

  varosok.forEach(varos => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${varos.lat}&longitude=${varos.lon}&current_weather=true`)
      .then(response => response.json())
      .then(data => {
        const weather = data.current_weather;
        const box = document.getElementById(varos.id);
        box.querySelector(".homerseklet").textContent = `Hőmérséklet: ${weather.temperature} °C`;
        box.querySelector(".szel").textContent = `Szélsebesség: ${weather.windspeed} km/h`;
      })
      .catch(error => {
        const box = document.getElementById(varos.id);
        box.querySelector(".homerseklet").textContent = "Nem elérhető az időjárás.";
        console.error(`${varos.nev} időjárási hiba:`, error);
      });
  });
});
