import  movies  from "./data.js";
import { renderMovies } from "./render-movies.js";

const moviesContainer = document.querySelector("[data-movies]");
renderMovies(movies,moviesContainer);