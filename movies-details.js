// Sample movie data (replace with your actual data)
const movies = [
    { id: 1, title: 'Hindi Movie 1', category: ['hindi', 'drama'], image: 'images/inception.jpg', description: 'A compelling Hindi drama that explores family relationships.', rating: 4.5, releaseYear: 2022, videoLink: 'images/earth.mp4', downloadLink: 'images/earth.mp4' },
    { id: 2, title: 'English Movie 1', category: ['english', 'action'], image: 'https://via.placeholder.com/200x300?text=English+Movie+1', description: 'An action-packed English movie with stunning visual effects.', rating: 4.2, releaseYear: 2023, videoLink: 'https://example.com/watch/english-movie-1', downloadLink: 'https://example.com/download/english-movie-1' },
    { id: 3, title: 'Hindi Movie 2', category: ['hindi', 'comedy'], image: 'https://via.placeholder.com/200x300?text=Hindi+Movie+2', description: 'A hilarious Hindi comedy that will make you laugh out loud.', rating: 4.0, releaseYear: 2021, videoLink: 'https://example.com/watch/hindi-movie-2', downloadLink: 'https://example.com/download/hindi-movie-2' },
    { id: 4, title: 'English Movie 2', category: ['english', 'drama'], image: 'https://via.placeholder.com/200x300?text=English+Movie+2', description: 'A thought-provoking English drama based on a true story.', rating: 4.7, releaseYear: 2022, videoLink: 'https://example.com/watch/english-movie-2', downloadLink: 'https://example.com/download/english-movie-2' },
    { id: 5, title: 'Hindi Movie 3', category: ['hindi', 'action'], image: 'https://via.placeholder.com/200x300?text=Hindi+Movie+3', description: 'An adrenaline-pumping Hindi action movie with amazing stunts.', rating: 4.3, releaseYear: 2023, videoLink: 'https://example.com/watch/hindi-movie-3', downloadLink: 'https://example.com/download/hindi-movie-3' },
    { id: 6, title: 'English Movie 3', category: ['english', 'comedy'], image: 'https://via.placeholder.com/200x300?text=English+Movie+3', description: 'A witty English comedy that satirizes modern society.', rating: 4.1, releaseYear: 2021, videoLink: 'https://example.com/watch/english-movie-3', downloadLink: 'https://example.com/download/english-movie-3' },
    { id: 7, title: 'Hindi Movie 4', category: ['hindi', 'drama'], image: 'https://via.placeholder.com/200x300?text=Hindi+Movie+4', description: 'An emotional Hindi drama that touches on important social issues.', rating: 4.6, releaseYear: 2022, videoLink: 'https://example.com/watch/hindi-movie-4', downloadLink: 'https://example.com/download/hindi-movie-4' },
    { id: 8, title: 'English Movie 4', category: ['english', 'action'], image: 'https://via.placeholder.com/200x300?text=English+Movie+4', description: 'A high-octane English action thriller that keeps you on the edge of your seat.', rating: 4.4, releaseYear: 2023, videoLink: 'https://example.com/watch/english-movie-4', downloadLink: 'https://example.com/download/english-movie-4' },
];

// Function to get movie details by ID
function getMovieById(id) {
    return movies.find(movie => movie.id === parseInt(id));
}

// Function to display movie details
// ... (previous code remains unchanged)

// Function to display movie details
function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML = `
        <div class="movie-container">
            <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h1 class="movie-title">${movie.title}</h1>
                <div class="movie-meta">
                    <span class="movie-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                    <span class="movie-year"><i class="fas fa-calendar-alt"></i> ${movie.releaseYear}</span>
                </div>
                <div class="movie-categories">
                    ${movie.category.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                </div>
                <p class="movie-description">${movie.description}</p>
                <div class="movie-actions">
                    <button class="watch-btn" onclick="watchMovie('${movie.videoLink}')"><i class="fas fa-play"></i> Watch Movie</button>
                    <a href="${movie.downloadLink}" class="download-btn" download><i class="fas fa-download"></i> Download</a>
                </div>
            </div>
        </div>
    `;
}

// Function to watch the movie
function watchMovie(videoLink) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.innerHTML = `
        <video controls>
            <source src="${videoLink}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    videoPlayer.classList.add('active');
    videoPlayer.scrollIntoView({ behavior: 'smooth' });
}

// ... (rest of the code remains unchanged)

// Function to watch the movie
function watchMovie(videoLink) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.innerHTML = `
        <video controls>
            <source src="${videoLink}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    videoPlayer.classList.add('active');
    videoPlayer.scrollIntoView({ behavior: 'smooth' });
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    if (movieId) {
        const movie = getMovieById(movieId);
        if (movie) {
            displayMovieDetails(movie);
        } else {
            document.getElementById('movie-details').innerHTML = '<p class="error-message">Movie not found.</p>';
        }
    } else {
        document.getElementById('movie-details').innerHTML = '<p class="error-message">No movie ID provided.</p>';
    }
});











// ... (previous code remains unchanged)

// Function to display movie details


// ... (rest of the code remains unchanged)