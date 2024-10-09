const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
let utterance;
let isPlaying = false;
let voicesLoaded = false;

// Function to initialize speech synthesis with content text
function initSpeech() {
    if (!utterance) {
        const contentText = document.querySelector('#content').innerText;
        utterance = new SpeechSynthesisUtterance(contentText);
        utterance.rate = 1; // Normal speed
        utterance.pitch = 1.2; // Higher pitch for youthful voice

        // Ensure voices are available before setting the voice
        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
            utterance.voice = voices.find(voice => voice.name.includes('Google UK English Female') || voice.name.includes('Google US English'));
        }
    }
}

// Ensure voices are loaded before trying to use them
speechSynthesis.onvoiceschanged = function() {
    if (!voicesLoaded) {
        initSpeech();
        voicesLoaded = true; // Flag to indicate voices are ready
    }
};

// Play content aloud
function playContent() {
    if (!utterance) {
        initSpeech();
    }
    if (!isPlaying) {
        speechSynthesis.speak(utterance);
        isPlaying = true;
    } else {
        speechSynthesis.resume();
    }
}

// Pause content
function pauseContent() {
    speechSynthesis.pause();
}

// Stop content
function stopContent() {
    speechSynthesis.cancel();
    isPlaying = false;
}

// Event listeners for buttons
playButton.addEventListener('click', playContent);
pauseButton.addEventListener('click', pauseContent);
stopButton.addEventListener('click', stopContent);

// Ensure speech stops playing when finished
utterance?.addEventListener('end', () => {
    isPlaying = false;
});
