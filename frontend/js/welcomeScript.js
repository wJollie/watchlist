// Sample JavaScript code (you can add more advanced features later)
function addToWatchlist() {
  const movieInput = document.getElementById("movieInput");
  const movieTitle = movieInput.value;
  if (movieTitle.trim() === "") {
    return;
  }

  const watchlist = document.getElementById("watchlist");
  const listItem = document.createElement("li");
  listItem.textContent = movieTitle;
  watchlist.appendChild(listItem);

  // Call a function to fetch streaming service availability
  fetchStreamingServiceInfo(movieTitle);

  movieInput.value = ""; // Clear the input field
}

function fetchStreamingServiceInfo(movieTitle) {
  // Use an API (e.g., IMDb API, TMDb API) to fetch streaming service info
  // Display the streaming service info on the page
}
