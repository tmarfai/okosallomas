document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('playButton');
  const audio = document.getElementById('hang');

  if (button && audio) {
    button.addEventListener('click', () => {
      audio.play();
    });
  }
});
