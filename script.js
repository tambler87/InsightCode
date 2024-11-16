// Chat Functionality
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        const userBubble = document.createElement('div');
        userBubble.className = 'chat-bubble user';
        userBubble.textContent = userMessage;
        chatMessages.appendChild(userBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            const aiBubble = document.createElement('div');
            aiBubble.className = 'chat-bubble ai';
            aiBubble.textContent = generateAIResponse(userMessage);
            chatMessages.appendChild(aiBubble);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        chatInput.value = '';
    }
});

function generateAIResponse(message) {
    if (message.toLowerCase().includes('html')) {
        return "HTML stands for HyperText Markup Language. It's used to structure web pages.";
    } else if (message.toLowerCase().includes('css')) {
        return "CSS stands for Cascading Style Sheets. It styles your web page!";
    } else {
        return "That's an interesting question! Let me think...";
    }
}

// Interactive Lessons
const lessonEditor = document.getElementById('lesson-editor');
const runCodeButton = document.getElementById('run-code');
const lessonOutput = document.getElementById('lesson-output');

lessonEditor.value = `
<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
`;

runCodeButton.addEventListener('click', () => {
    const code = lessonEditor.value;
    lessonOutput.srcdoc = code;
});

// Quizzes
const quizForm = document.getElementById('quiz-form');
const quizResults = document.createElement('p');

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const answers = new FormData(quizForm);
    let score = 0;
    if (answers.get('q1') === '2') score++;

    quizResults.textContent = `You scored ${score}/1!`;
    quizForm.appendChild(quizResults);
});
