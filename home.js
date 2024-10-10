// Sample movie data (replace with your actual data)

const movies = [
    { id: 1, title: 'Avatar 2024', category: ['hindi', 'drama'], image: 'images/AVATAR_RERLS_1SHT_DIGITAL_sRGB_V7.avif', description: 'A compelling Hindi drama that explores family relationships.', rating: 4.5, releaseYear: 2022, videoLink: 'images/earth.mp4', downloadLink: 'images/earth.mp4' },
    { id: 2, title: 'Batman 2012', category: ['english', 'action'], image: 'images/batman.webp', description: 'An action-packed English movie with stunning visual effects.', rating: 4.2, releaseYear: 2023, videoLink: 'https://example.com/watch/english-movie-1', downloadLink: 'https://example.com/download/english-movie-1' },
    { id: 3, title: 'Deadpool 3', category: ['hindi', 'comedy'], image: 'images/deadpoolandwolverine_lob_crd_03.jpg', description: 'A hilarious Hindi comedy that will make you laugh out loud.', rating: 4.0, releaseYear: 2021, videoLink: 'https://example.com/watch/hindi-movie-2', downloadLink: 'https://example.com/download/hindi-movie-2' },
    { id: 4, title: 'Guardian of the galaxy 2', category: ['english', 'drama'], image: 'images/guardiansofthegalaxyvolume3_lob_crd_03.jpg', description: 'A thought-provoking English drama based on a true story.', rating: 4.7, releaseYear: 2022, videoLink: 'https://example.com/watch/english-movie-2', downloadLink: 'https://example.com/download/english-movie-2' },
    { id: 5, title: 'Inception', category: ['hindi', 'action'], image: 'images/inception.jpg', description: 'An adrenaline-pumping Hindi action movie with amazing stunts.', rating: 4.3, releaseYear: 2023, videoLink: 'https://example.com/watch/hindi-movie-3', downloadLink: 'https://example.com/download/hindi-movie-3' },
    { id: 6, title: 'scream', category: ['english', 'comedy'], image: 'images/scream.jpg', description: 'A witty English comedy that satirizes modern society.', rating: 4.1, releaseYear: 2021, videoLink: 'https://example.com/watch/english-movie-3', downloadLink: 'https://example.com/download/english-movie-3' },
    { id: 7, title: 'thunderbolts_lob_crd', category: ['hindi', 'drama'], image: 'images/thunderbolts_lob_crd_03.jpg', description: 'An emotional Hindi drama that touches on important social issues.', rating: 4.6, releaseYear: 2022, videoLink: 'https://example.com/watch/hindi-movie-4', downloadLink: 'https://example.com/download/hindi-movie-4' },
    { id: 8, title: 'English Movie 4', category: ['english', 'action'], image: 'https://via.placeholder.com/200x300?text=English+Movie+4', description: 'A high-octane English action thriller that keeps you on the edge of your seat.', },
    { id: 9, title: 'Avatar 2024', category: ['hindi', 'drama'], image: 'images/AVATAR_RERLS_1SHT_DIGITAL_sRGB_V7.avif', description: 'A compelling Hindi drama that explores family relationships.', rating: 4.5, releaseYear: 2022, videoLink: 'images/earth.mp4', downloadLink: 'images/earth.mp4' },
    { id: 10, title: 'Batman 2012', category: ['english', 'action'], image: 'images/batman.webp', description: 'An action-packed English movie with stunning visual effects.', rating: 4.2, releaseYear: 2023, videoLink: 'https://example.com/watch/english-movie-1', downloadLink: 'https://example.com/download/english-movie-1' },
    { id: 11, title: 'Deadpool 3', category: ['hindi', 'comedy'], image: 'images/deadpoolandwolverine_lob_crd_03.jpg', description: 'A hilarious Hindi comedy that will make you laugh out loud.', rating: 4.0, releaseYear: 2021, videoLink: 'https://example.com/watch/hindi-movie-2', downloadLink: 'https://example.com/download/hindi-movie-2' },
    { id: 12, title: 'Guardian of the galaxy 2', category: ['english', 'drama'], image: 'images/guardiansofthegalaxyvolume3_lob_crd_03.jpg', description: 'A thought-provoking English drama based on a true story.', rating: 4.7, releaseYear: 2022, videoLink: 'https://example.com/watch/english-movie-2', downloadLink: 'https://example.com/download/english-movie-2' },
    { id: 13, title: 'Inception', category: ['hindi', 'action'], image: 'images/inception.jpg', description: 'An adrenaline-pumping Hindi action movie with amazing stunts.', rating: 4.3, releaseYear: 2023, videoLink: 'https://example.com/watch/hindi-movie-3', downloadLink: 'https://example.com/download/hindi-movie-3' },
    { id: 14, title: 'scream', category: ['english', 'comedy'], image: 'images/scream.jpg', description: 'A witty English comedy that satirizes modern society.', rating: 4.1, releaseYear: 2021, videoLink: 'https://example.com/watch/english-movie-3', downloadLink: 'https://example.com/download/english-movie-3' },
    { id: 15, title: 'thunderbolts_lob_crd', category: ['hindi', 'drama'], image: 'images/thunderbolts_lob_crd_03.jpg', description: 'An emotional Hindi drama that touches on important social issues.', rating: 4.6, releaseYear: 2022, videoLink: 'https://example.com/watch/hindi-movie-4', downloadLink: 'https://example.com/download/hindi-movie-4' },
    { id: 16, title: 'English Movie 4', category: ['english', 'action'], image: 'https://via.placeholder.com/200x300?text=English+Movie+4', description: 'A high-octane English action thriller that keeps you on the edge of your seat.', },   { id: 1, title: 'Avatar 2024', category: ['hindi', 'drama'], image: 'images/AVATAR_RERLS_1SHT_DIGITAL_sRGB_V7.avif', description: 'A compelling Hindi drama that explores family relationships.', rating: 4.5, releaseYear: 2022, videoLink: 'images/earth.mp4', downloadLink: 'images/earth.mp4' },
    { id: 17, title: 'Batman 2012', category: ['english', 'action'], image: 'images/batman.webp', description: 'An action-packed English movie with stunning visual effects.', rating: 4.2, releaseYear: 2023, videoLink: 'https://example.com/watch/english-movie-1', downloadLink: 'https://example.com/download/english-movie-1' },
    { id: 18, title: 'Deadpool 3', category: ['hindi', 'comedy'], image: 'images/deadpoolandwolverine_lob_crd_03.jpg', description: 'A hilarious Hindi comedy that will make you laugh out loud.', rating: 4.0, releaseYear: 2021, videoLink: 'https://example.com/watch/hindi-movie-2', downloadLink: 'https://example.com/download/hindi-movie-2' },
    { id: 19, title: 'Guardian of the galaxy 2', category: ['english', 'drama'], image: 'images/guardiansofthegalaxyvolume3_lob_crd_03.jpg', description: 'A thought-provoking English drama based on a true story.', rating: 4.7, releaseYear: 2022, videoLink: 'https://example.com/watch/english-movie-2', downloadLink: 'https://example.com/download/english-movie-2' },
    { id: 20, title: 'Inception', category: ['hindi', 'action'], image: 'images/inception.jpg', description: 'An adrenaline-pumping Hindi action movie with amazing stunts.', rating: 4.3, releaseYear: 2023, videoLink: 'https://example.com/watch/hindi-movie-3', downloadLink: 'https://example.com/download/hindi-movie-3' },
    { id: 21, title: 'scream', category: ['english', 'comedy'], image: 'images/scream.jpg', description: 'A witty English comedy that satirizes modern society.', rating: 4.1, releaseYear: 2021, videoLink: 'https://example.com/watch/english-movie-3', downloadLink: 'https://example.com/download/english-movie-3' },
    { id: 22, title: 'thunderbolts_lob_crd', category: ['hindi', 'drama'], image: 'images/thunderbolts_lob_crd_03.jpg', description: 'An emotional Hindi drama that touches on important social issues.', rating: 4.6, releaseYear: 2022, videoLink: 'https://example.com/watch/hindi-movie-4', downloadLink: 'https://example.com/download/hindi-movie-4' },
    { id: 23, title: 'English Movie 4', category: ['english', 'action'], image: 'https://via.placeholder.com/200x300?text=English+Movie+4', description: 'A high-octane English action thriller that keeps you on the edge of your seat.', },

];

// Function to display featured movies
function displayFeaturedMovies() {
    const featuredContainer = document.querySelector('.featured-movies');
    const featuredMovies = movies.slice(0, 3); // Display first 3 movies as featured

    featuredMovies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        featuredContainer.appendChild(movieElement);
    });
}

// Function to display all movies
function displayMovies(moviesToShow = movies) {
    const movieContainer = document.querySelector('.movie-grid');
    movieContainer.innerHTML = '';

    if (moviesToShow.length === 0) {
        movieContainer.innerHTML = '<p>No movies found.</p>';
        return;
    }

    moviesToShow.forEach(movie => {
        const movieElement = createMovieElement(movie);
        movieContainer.appendChild(movieElement);
    });
}

// Function to create a movie element
function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-item');
    movieElement.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
    `;
    movieElement.addEventListener('click', () => openMovieDetails(movie));
    return movieElement;
}

// Function to open movie details in a new tab
function openMovieDetails(movie) {
    const detailsURL = `movies-details.html?id=${movie.id}`;
    window.open(detailsURL, '_blank');
}

// Function to handle category button clicks
function handleCategoryClick(event) {
    if (event.target.classList.contains('category-btn')) {
        const buttons = document.querySelectorAll('.category-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        const category = event.target.dataset.category;
        const filteredMovies = category === 'all' 
            ? movies 
            : movies.filter(movie => movie.category.includes(category));
        displayMovies(filteredMovies);
    }
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedMovies();
    displayMovies();

    const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', handleCategoryClick);

    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', handleSearch);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    const menuIcon = document.getElementById('menuIcon');
    menuIcon.addEventListener('click', toggleMobileMenu);
});


// data aos

AOS.init({
    duration: 1000,
    once: false,
    
  });

AOS.refresh();



AOS.init({
  easing: 'ease-in-out-sine'
});