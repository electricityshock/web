// JavaScript for deleting chat messages
document.getElementById('delete-chat-btn').addEventListener('click', function() {
  var chatWindow = document.getElementById('chat-window');
  chatWindow.innerHTML = ''; // Clear chat messages
});
