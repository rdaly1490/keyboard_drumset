document.addEventListener('keydown', e => {
  const audioToPlay = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyPressed = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (audioToPlay) {
  	audioToPlay.currentTime = 0; // reset audio if currently playing sound clip
  	audioToPlay.play();
  	keyPressed.classList.add('playing');
  }
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeCssTransition));

function removeCssTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}