const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const keys = document.querySelectorAll('.key');
const whiteKey = document.querySelectorAll('.key.white');
const blackKey = document.querySelectorAll('.key.black');

//console.log(keys);
keys.forEach(key => {
	key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', click => {
	if(click.repeat)
	{
		return;
	}
	const key = click.key;
	//console.log(key);
	const whiteKeyIndex = WHITE_KEYS.indexOf(key);
	const blackKeyIndex = BLACK_KEYS.indexOf(key);

	if(whiteKeyIndex > -1)
	{
		playNote(whiteKey[whiteKeyIndex]);
	}
	if(blackKeyIndex > -1)
	{
		playNote(blackKey[blackKeyIndex]);
	}
});

function playNote(key)
{
	const noteAudio = document.getElementById(key.dataset.note);
	noteAudio.currentTime = 0;
	noteAudio.play();
	key.classList.add('active');
	noteAudio.addEventListener('ended', () => {
		key.classList.remove('active');
	});
}