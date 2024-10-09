const content = document.querySelector('#content');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
let utterance;
let isPlaying = false;

// Initialize speech synthesis
function initSpeech() {
    if (!utterance) {
        utterance = new SpeechSynthesisUtterance(content.innerText);
        utterance.rate = 1;  // Normal speed
        utterance.pitch = 1.2;  // Higher pitch for youthful sound
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Google UK English Female') || voice.name.includes('Google US English'));
    }
}

function playContent() {
    initSpeech();
    if (!isPlaying) {
        speechSynthesis.speak(utterance);
        isPlaying = true;
    } else {
        speechSynthesis.resume();
    }
}

function pauseContent() {
    speechSynthesis.pause();
}

function stopContent() {
    speechSynthesis.cancel();
    isPlaying = false;
}

playButton.addEventListener('click', playContent);
pauseButton.addEventListener('click', pauseContent);
stopButton.addEventListener('click', stopContent);

// Reinitialize utterance on speech end to allow replay
utterance?.addEventListener('end', () => {
    isPlaying = false;
});

// Accessibility: Provide keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        playContent();
    }
});
