document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("hang");
const audio = document.getElementById('hang');Add commentMore actions
const playButton = document.getElementById('playButton');

  let isPlaying = false;
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
playButton.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    playButton.textContent = '⏸ Leállítás';
  } else {
    audio.pause();
    audio.currentTime = 0;
    playButton.textContent = '🔊 Hallgasd meg';
  }
  isPlaying = !isPlaying;
});
