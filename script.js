const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        // Add user message to chat
        const userBubble = document.createElement('div');
        userBubble.className = 'chat-bubble user';
        userBubble.textContent = userMessage;
        chatMessages.appendChild(userBubble);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Generate AI response
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
