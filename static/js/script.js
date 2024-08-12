document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");

    function addMessage(message, className) {
        const messageDiv = document.createElement("div");
        messageDiv.className = className;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

//    function sendMessage() {
//        const userMessage = userInput.value;
//        if (userMessage.trim() === "") return;
//
//        addMessage(userMessage, "user-message");
//        userInput.value = "";
//
//        fetch("/get_response", {
//            method: "POST",
//            headers: {
//                "Content-Type": "application/json"
//            },
//            body: JSON.stringify({ message: userMessage })
//        })
//        .then(response => response.json())
//        .then(data => {
//            addMessage(data.response, "bot-message");
//        });
//    }

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Display user message (input)
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message', 'input-message');
    userMessageElement.textContent = userInput;
    document.getElementById('chat-messages').appendChild(userMessageElement);

    // Scroll to the bottom
    document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;

    // Clear input
    document.getElementById('user-input').value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponseElement = document.createElement('div');
        botResponseElement.classList.add('bot-message', 'response-message');
        botResponseElement.textContent = generateBotResponse(userInput); // Replace with actual bot response function
        document.getElementById('chat-messages').appendChild(botResponseElement);

        // Scroll to the bottom
        document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
    }, 500);
}

function generateBotResponse(userInput) {
    // Simulate a bot response based on the user input
    return "Brain Payroll: " + userInput;
}


    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    document.querySelector("button").addEventListener("click", sendMessage);
});
