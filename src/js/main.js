import  movies  from "./data.js";
import { renderMovies } from "./render-movies.js";
import { sortMovies } from "./sort.js";
import { searchMovies } from './search.js';
import { filterByGenre } from "./filter.js";
const moviesContainer = document.querySelector("[data-movies]");
const sortSelect = document.querySelector("[data-sort]");
const search = document.querySelector('[data-search]');
const filterByGanre = document.querySelector("[data-filter]");
renderMovies(movies, moviesContainer);
//sorted


function handleSorted(event) {
    const query = event.target.value
    const sortedMovies = sortMovies(query, movies);
    console.log(sortedMovies)
    renderMovies(sortedMovies, moviesContainer);
}
sortSelect.addEventListener("change", handleSorted);

//search
function handleSearch(event) {
    const query = event.target.value.trim().toLowerCase();
    const searchedFilms = searchMovies(query, movies);
    console.log(query)
    renderMovies(searchedFilms, moviesContainer);
}

search.addEventListener('input', handleSearch)

//filter
function handleFilterByGenre(event) {
    if (event.target.tagName === 'BUTTON') {
        const ganre = event.target.dataset.ganre;
        const filteredGanre = filterByGenre(ganre, movies);
        renderMovies(filteredGanre, moviesContainer);
    }
};

filterByGanre.addEventListener('click', handleFilterByGenre);