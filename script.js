// Function to perform a search on YouTube
function searchYouTube(query) {
  // Modify this function to implement your desired YouTube search functionality
  // For example, you could redirect the user to a YouTube search URL with the query parameter
  // window.location.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);

  console.log("Search query:", query);
}

// Get access to the SpeechRecognition object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Configure speech recognition settings
recognition.continuous = false;
recognition.lang = 'en-US';

// Handle speech recognition results
recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  document.getElementById('searchInput').value = transcript;
  searchYouTube(transcript);
};

// Handle search button click event
document.getElementById('searchButton').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value;
  searchYouTube(query);
});

// Handle voice search button click event
document.getElementById('searchInput').addEventListener('click', function() {
  recognition.start();
});
