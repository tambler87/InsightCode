const correctAnswer = "HTML is the structure, CSS styles it, and JavaScript makes it interactive.";
const submitButton = document.getElementById('submit-answer');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const avatarSection = document.getElementById('avatar-section');

submitButton.addEventListener('click', function() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (userAnswer.includes("html") && userAnswer.includes("structure") && 
        userAnswer.includes("css") && userAnswer.includes("styles") && 
        userAnswer.includes("javascript") && userAnswer.includes("interactive")) {
        feedback.textContent = "Correct! Welcome to the next stage.";
        feedback.style.color = "#00ff00";
    } else {
        feedback.textContent = "Incorrect, try again.";
        feedback.style.color = "#ff0000";
    }
    feedback.classList.remove('hidden');
});

// Collapsible sections
const collapsibles = document.querySelectorAll('.collapsible h2');
collapsibles.forEach(collapsible => {
    collapsible.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
