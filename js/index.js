function playDrumSound(e) {
	const audioToPlay = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const keyPressed = document.querySelector(`div[data-key="${e.keyCode}"]`);

	if (!audioToPlay) return;
	audioToPlay.currentTime = 0; // reset audio if currently playing sound clip
	audioToPlay.play();
	keyPressed.classList.add('playing');
}

function removeCssTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeCssTransition));

document.addEventListener('keydown', playDrumSound);