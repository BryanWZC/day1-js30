// handle key down to transform keys and add audio
const handleKey = (e) => {
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!audio) return

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

// Removes transition
const removeTrans = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing')
}

// Event listeners for keydowns and resetting
window.addEventListener('keydown',handleKey);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTrans ));

