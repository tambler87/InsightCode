const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
let utterance;
let isPlaying = false;
let voicesLoaded = false;

// Function to initialize the speech synthesis with the content
function initSpeech() {
    const contentText = document.querySelector('#content').innerText; // Get content text
    console.log("Initializing speech synthesis...");
    
    utterance = new SpeechSynthesisUtterance(contentText);
    utterance.rate = 1; // Normal speaking rate
    utterance.pitch = 1.2; // Slightly higher pitch for a youthful voice

    // Ensure voices are loaded and pick a voice
    const voices = speechSynthesis.getVoices();
    console.log("Available voices:", voices);
    
    if (voices.length > 0) {
        // Pick a female English voice (Google or any available)
        utterance.voice = voices.find(voice => voice.name.includes('Google UK English Female') || voice.name.includes('Google US English'));
        voicesLoaded = true;
        console.log("Voice selected:", utterance.voice);
    } else {
        console.log("No voices available yet. Waiting for voices to load...");
    }

    utterance.onend = function() {
        isPlaying = false;
        console.log("Narration finished.");
    };
}

// Wait for voices to load and then initialize speech
speechSynthesis.onvoiceschanged = () => {
    if (!voicesLoaded) {
        console.log("Voices changed, reinitializing speech...");
        initSpeech();
    }
};

function playContent() {
    if (!utterance || !voicesLoaded) {
        console.log("No utterance or voices not loaded, initializing...");
        initSpeech();
    }

    if (!isPlaying) {
        speechSynthesis.speak(utterance);
        isPlaying = true;
        console.log("Playing narration...");
    } else {
        speechSynthesis.resume();
        console.log("Resuming narration...");
    }
}

function pauseContent() {
    speechSynthesis.pause();
    console.log("Narration paused.");
}

function stopContent() {
    speechSynthesis.cancel();
    isPlaying = false;
    console.log("Narration stopped.");
}

// Event listeners for buttons
playButton.addEventListener('click', playContent);
pauseButton.addEventListener('click', pauseContent);
stopButton.addEventListener('click', stopContent);
