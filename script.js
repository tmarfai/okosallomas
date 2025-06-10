document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("hang");
  const playPauseButton = document.getElementById("playPauseButton");
  const restartButton = document.getElementById("restartButton");
  const timerDisplay = document.getElementById("timer");

  let isPlaying = false;
  let startedOnce = false;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  function updateTimer() {
    const current = audio.currentTime;
    const duration = audio.duration || 0;
    timerDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
  }

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
    audio.pause();
    audio.currentTime = 0;
    updateTimer();
    isPlaying = false;
    playPauseButton.textContent = "Lejátszás";
  });

  audio.addEventListener("ended", function () {
    isPlaying = false;
    playPauseButton.textContent = "Lejátszás";
    updateTimer();
  });

  audio.addEventListener("timeupdate", updateTimer);

  audio.addEventListener("loadedmetadata", function() {
    updateTimer();
  });

  audio.load();
});

