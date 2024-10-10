// Sample movie data
window.open('index.html', '_blank', 'noopener,noreferrer');

const movies = [
    { title: 'The Matrix', genre: 'Sci-Fi', image: 'https://source.unsplash.com/random/200x300/?matrix' },
    { title: 'Inception', genre: 'Sci-Fi', image: 'https://source.unsplash.com/random/200x300/?inception' },
    { title: 'The Shawshank Redemption', genre: 'Drama', image: 'https://source.unsplash.com/random/200x300/?prison' },
    { title: 'Pulp Fiction', genre: 'Crime', image: 'https://source.unsplash.com/random/200x300/?pulp' },
    { title: 'The Dark Knight', genre: 'Action', image: 'https://source.unsplash.com/random/200x300/?batman' },
    { title: 'Forrest Gump', genre: 'Drama', image: 'https://source.unsplash.com/random/200x300/?running' },
    { title: 'The Godfather', genre: 'Crime', image: 'https://source.unsplash.com/random/200x300/?mafia' },
    { title: 'Interstellar', genre: 'Sci-Fi', image: 'https://source.unsplash.com/random/200x300/?space' },
];

// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchSubmit = document.getElementById('searchSubmit');
const searchResults = document.getElementById('searchResults');
const searchResultsGrid = document.getElementById('searchResultsGrid');
const profileBtn = document.getElementById('profileBtn');
const userSidebar = document.getElementById('userSidebar');
const overlay = document.getElementById('overlay');

// Toggle search bar
searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    searchInput.focus();
});

// Perform search
searchSubmit.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) || 
        movie.genre.toLowerCase().includes(searchTerm)
    );
    displaySearchResults(filteredMovies);
}

function displaySearchResults(results) {
    searchResultsGrid.innerHTML = '';
    if (results.length === 0) {
        searchResultsGrid.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('search-result-item');
            movieElement.style.backgroundImage = `url('${movie.image}')`;
            movieElement.innerHTML = `
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.genre}</p>
                </div>
            `;
            searchResultsGrid.appendChild(movieElement);
        });
    }
    searchResults.classList.add('active');
}

// Toggle user sidebar
profileBtn.addEventListener('click', () => {
    userSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close user sidebar when clicking outside
overlay.addEventListener('click', () => {
    userSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!searchBar.contains(e.target) && !searchBtn.contains(e.target) && !searchResults.contains(e.target)) {
        searchBar.classList.remove('active');
        searchResults.classList.remove('active');
    }
});

// photo scroll

// Previous JavaScript code remains unchanged

// Function to duplicate trending items for seamless scrolling
function setupTrendingSlider() {
    const track = document.querySelector('.trending-track');
    const items = track.querySelectorAll('.trending-item');
    
    // Duplicate items to create a seamless loop
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}

// Function to pause and resume animation on hover
function setupTrendingHover() {
    const track = document.querySelector('.trending-track');
    
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
}

// Call setup functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupTrendingSlider();
    setupTrendingHover();
    
    // Other initialization code...
});

// Other JavaScript code remains unchanged



// data aos

AOS.init({
    duration: 1000,
    once: false,
    
  });

AOS.refresh();



AOS.init({
  easing: 'ease-in-out-sine'
});