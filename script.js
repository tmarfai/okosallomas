document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("hang");

  let isPlaying = false;

  playButton.addEventListener("click", function () {
    if (!isPlaying) {
      audio.play();
      playButton.textContent = "⏹️ Leállítás";
    } else {
      audio.pause();
      audio.currentTime = 0;
      playButton.textContent = "🔊 Hallgasd meg";
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener("ended", function () {
    isPlaying = false;
    playButton.textContent = "🔊 Hallgasd meg";
  });
});
