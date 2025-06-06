document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('playButton');
  const audio = document.getElementById('hang');
Add commentMore actions
  if (button && audio) {
    button.addEventListener('click', () => {
      audio.play();
    });
  }
});
