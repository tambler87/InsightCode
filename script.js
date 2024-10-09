const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
let utterance;
let isPlaying = false;

// Initialize speech synthesis
function initSpeech() {
    const contentText = document.querySelector('#content').innerText; // Get content text
    utterance = new SpeechSynthesisUtterance(contentText);
    utterance.rate = 1; // Normal speaking rate
    utterance.pitch = 1.2; // Slightly higher pitch for a youthful voice

    // Set the voice (search for a female English voice)
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find(voice => voice.name.includes('Google UK English Female') || voice.name.includes('Google US English'));

    utterance.onend = function() {
        isPlaying = false;
    };
}

speechSynthesis.onvoiceschanged = () => {
    if (!utterance) {
        initSpeech();
    }
};

function playContent() {
    if (!utterance) initSpeech();
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
