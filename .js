// JavaScript for speech recognition and deleting chat messages
const speechToggle = document.getElementById('speech-toggle');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');
const deleteChatBtn = document.getElementById('delete-chat-btn');

speechToggle.addEventListener('click', toggleSpeechRecognition);
deleteChatBtn.addEventListener('click', deleteChat);

let recognition;

function toggleSpeechRecognition() {
  if (!recognition) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript;
      userInput.value = result;
      sendMessage();
    };

    recognition.onend = function() {
      console.log('Speech recognition ended');
    };

    recognition.start();
    speechToggle.innerText = 'Stop';
  } else {
    recognition.stop();
    recognition = null;
    speechToggle.innerText = 'Speech';
  }
}

function deleteChat() {
  chatWindow.innerHTML = ''; // Clear chat messages
}

function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    // Send message to Botpress backend and display response in chat window
    const botMessage = 'Bot response'; // Replace with actual response from Botpress
    displayMessage(message, 'user');
    displayMessage(botMessage, 'bot');
    userInput.value = ''; // Clear input field
  }
}

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerText = message;
  chatWindow.appendChild(messageElement);
}
