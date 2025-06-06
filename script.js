const audio = document.getElementById('hang');
const playButton = document.getElementById('playButton');

let isPlaying = false;

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
